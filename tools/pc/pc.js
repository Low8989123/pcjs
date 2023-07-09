#!/usr/bin/env node
/**
 * @fileoverview Implements the PCjs machine command-line interface
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import fs         from "fs";
import glob       from "glob";
import path       from "path";
import xml2js     from "xml2js";
import DbgLib     from "../../machines/modules/v2/debugger.js";
import Messages   from "../../machines/modules/v2/messages.js";
import { printf, sprintf } from "../../machines/modules/v2/printf.js";
import StrLib     from "../../machines/modules/v2/strlib.js";
import Device     from "../../machines/modules/v3/device.js";
import CharSet    from "../../machines/pcx86/modules/v3/charset.js";
import DiskInfo   from "../../machines/pcx86/modules/v3/diskinfo.js";
import { Defines, MESSAGE } from "../../machines/modules/v3/defines.js";
import { device, existsFile, getDiskSector, makeFileDesc, readDir, readDiskSync, readFileSync, setRootDir, writeDiskSync, writeFileSync } from "../modules/disklib.js";
import pcjslib    from "../modules/pcjslib.js";

let fDebug = false;
let fHalt = false;
let fSave = false;
let machineType = "pcx86";
let systemType = "msdos";
let systemVersion = "3.20";

let rootDir, pcjsDir;
let messagesFilter, machines, debugMode;
let Component, Errors, Interrupts, Web, embedMachine;
let cpu, dbg, fdc, hdc, kbd, serial, fnSendSerial;
let prompt = ">", command = "", commandPrev = "";
let rowCursor = 0, colCursor = 0, nestedVideo = 0;

let diskItems = [];
let diskIndexCache = null, diskIndexKeys = [];
let fileIndexCache = null, fileIndexKeys = [];
let driveManifest = null;

const functionKeys = {
    "\u001b[A":     "$up",
    "\u001b[B":     "$down",
    "\u001b[C":     "$right",
    "\u001b[D":     "$left",
    "\u001bOP":     "$f1",
    "\u001bOQ":     "$f2",
    "\u001bOR":     "$f3",
    "\u001bOS":     "$f4",
    "\u001b[15~":   "$f5",
    "\u001b[17~":   "$f6",
    "\u001b[18~":   "$f7",
    "\u001b[19~":   "$f8",
    "\u001b[20~":   "$f9",
    "\u001b[21~":   "$f10",
    "\u001b[23~":   "$f11",
    "\u001b[24~":   "$f12"
};

/**
 * setDebugMode(nEvent)
 *
 * @param {number} nEvent (eg, DbgLib.EVENTS.ENTER, DbgLib.EVENTS.READY, DbgLib.EVENTS.EXIT)
 */
function setDebugMode(nEvent)
{
    let prevMode = debugMode;
    if (!nEvent && debugMode != nEvent) {
        printf("Press CTRL-D to enter debugger, CTRL-C to terminate process\n");
    }
    debugMode = nEvent;
    if (debugMode == DbgLib.EVENTS.READY && prevMode != DbgLib.EVENTS.READY) {
        command = "";
        printf("%s> ", prompt);
    }
}

/**
 * convertXML(xml, idAttrs)
 *
 * @param {Object} xml
 * @param {string} [idAttrs]
 * @returns {Object} (JSON-style machine configuration)
 */
function convertXML(xml, idAttrs = '@')
{
    let machine = {};
    /*
     * Walk the XML tree and add all the objects to the root of the machine object.
     */
    let addXML = function(xml, xid, obj, oid) {
        if (!obj || obj == machine) {
            obj = {};
            if (!oid) oid = xid;
        }
        if (oid) {
            if (!machine[oid]) {
                machine[oid] = obj;
            } else {
                if (Array.isArray(machine[oid])) {
                    machine[oid].push(obj);
                } else {
                    machine[oid] = [machine[oid], obj];
                }
            }
        }
        xml = xml[xid];
        if (typeof xml != "object") {
            obj['value'] = xml;
            return;
        }
        for (let key in xml) {
            if (key == idAttrs) {
                /*
                 * Our XSL files include rules for providing default IDs, so we do, too...
                 */
                if (!xml[key]['id']) {
                    obj['id'] = oid;
                }
                addXML(xml, key, obj);
            } else {
                if (key == 'br' || key == 'comment' || key == 'control' || key == 'menu') {
                    continue;
                }
                if (Array.isArray(xml[key])) {
                    for (let i = 0; i < xml[key].length; i++) {
                        addXML(xml[key], i, machine, key);
                    }
                } else {
                    if (key != '_') {
                        obj[key] = xml[key];
                    } else {
                        obj['value'] = xml[key];
                    }
                }
            }
        }
    };
    addXML(xml, 'machine');
    return machine;
}

/**
 * loadModules(factory, modules, done)
 *
 * @param {string} factory
 * @param {Array.<string>} modules
 * @param {function()} done
 */
async function loadModules(factory, modules, done)
{
    for (let modulePath of modules) {
        /*
         * Unless I replace all backslashes in modulePath with forward slashes; eg:
         *
         *      .replace(/\\/g, '/')
         *
         * "node pc.js" will fail on Windows operating systems with the following error:
         *
         *      TypeError [ERR_INVALID_MODULE_SPECIFIER]: Invalid module
         *      "..\..\..\machines\modules\v2\defines.js" is not a valid package name ....
         *
         * which seems bizarre, since backslash is actually Windows' preferred path separator.
         * ¯\_(ツ)_/¯
         *
         * Moreover, we cannot join modulePath with rootDir, because rootDir will start with
         * a drive letter (eg, "C:") on Windows, which then fails with the following error:
         *
         *      Only URLs with a scheme in: file and data are supported by the default ESM loader.
         *      On Windows, absolute paths must be valid file:// URLs. Received protocol 'c:'
         *
         * so we join it with a relative directory (ie, "../..").
         */
        modulePath = path.join("../..", modulePath).replace(/\\/g, '/');
        let name = path.basename(modulePath, ".js");
        if (name == "embed") {
            let { [factory]: embed } = await import(modulePath);
            embedMachine = embed;
            continue;
        }
        let module = await import(modulePath);
        /*
         * Below are the set of classes that we need access to (eg, for static methods, constants, etc).
         *
         * In the case of the debugger, we just want the parent class (which is loaded first), not the subclass.
         *
         * TODO: Internally, the parent debugger class is named DbgLib, so perhaps we should rename the file to match?
         */
        switch(name) {
        case "weblib":
            Web = module.default;
            break;
        case "component":
            Component = module.default;
            break;
        case "errors":
            Errors = module.default;
            break;
        case "interrupts":
            Interrupts = module.default;
            break;
        }
        /*
         * If there's any chance that the module might print something, add a function to intercept it.
         */
        if (module.default && module.default.prototype) {
            module.default.prototype.print = function print(s, bitsMessage) {
                if (debugMode && !bitsMessage || (bitsMessage || fDebug) && this.testBits(messagesFilter, bitsMessage)) {
                    printf(s);
                }
            };
        }
    }
    done();
}

/**
 * initMachine(idMachine, sParms)
 *
 * @param {string} idMachine
 * @param {string} sParms
 */
function initMachine(idMachine, sParms)
{
    try {
        /*
         * Simulate the page embedding and page initialization process now.
         */
        embedMachine(idMachine, null, null, sParms);
        Web.doPageInit();

        /*
         * Get the CPU component so we can keep tabs on its running state and also hook
         * a few interrupts (eg, INT 0x10).  Get the Debugger component so we can override
         * the debugger's print() function.
         */
        cpu = Component.getComponentByType("CPU");
        if (cpu && cpu.addIntNotify) {
            if (Interrupts && Interrupts.VIDEO) {
                cpu.addIntNotify(Interrupts.VIDEO, intVideo.bind(cpu));
                cpu.addIntNotify(Interrupts.BOOTSTRAP, intReboot.bind(cpu));
                cpu.addIntNotify(Interrupts.DOS_EXIT, intLoad.bind(cpu));
            }
        }

        /*
         * Get the FDC component so we can query its list of available diskettes,
         * and get the HDC component so we can get the state of its hard drive(s).
         */
        fdc = Component.getComponentByType("FDC");
        hdc = Component.getComponentByType("HDC");

        /*
         * Get the Debugger component so we can receive debugger events and send
         * debugger commands.
         */
        dbg = Component.getComponentByType("Debugger");
        if (dbg) dbg.onEvent(setDebugMode);

        /*
         * Get the Keyboard component to get access to injectKeys(), which simplifies the
         * injection of keystrokes into the machine.
         */
        kbd = Component.getComponentByType("Keyboard");

        serial = Component.getComponentByType("SerialPort");
        if (serial) {
            let exports = serial['exports'];
            if (exports) {
                var fnSetConnection = exports['setConnection'];
                if (fnSetConnection) {
                    if (fnSetConnection.call(serial, null, receiveSerial)) {
                        fnSendSerial = exports['receiveData'];
                    }
                }
            }
        }

        /*
         * Since there may be no debugger (and even if there is, machines that are auto-started won't
         * trigger any debugger events), we simulate an appropriate event.
         */
        setDebugMode(cpu && cpu.isRunning()? DbgLib.EVENTS.EXIT : DbgLib.EVENTS.READY);
    }
    catch(err) {
        printf("machine initialization error: %s\n", err.message);
    }
}

/**
 * intVideo(addr)
 *
 * @param {CPUx86} this
 * @param {number} addr
 * @returns {boolean} true to proceed with the INT 0x10 software interrupt, false to skip
 */
function intVideo(addr)
{
    let AH = ((this.regEAX >> 8) & 0xff), AL = (this.regEAX & 0xff);
    let DH = ((this.regEDX >> 8) & 0xff), DL = (this.regEDX & 0xff);
    switch (AH) {
    case 0x02:
        if (!nestedVideo) {
            if (DL < colCursor || DH != rowCursor) {
                printf("\n");
            }
        }
        rowCursor = DH;
        colCursor = DL;
        break;
    case 0x09:
    case 0x0E:
        printf("%c", AL);
        nestedVideo++;
        this.addIntReturn(addr, function onVideoReturn(nLevel) {
            nestedVideo--;
        });
        break;
    }
    return true;
}

/**
 * intReboot(addr)
 *
 * @param {CPUx86} this
 * @param {number} addr
 * @returns {boolean} true to proceed with the INT 0x19 software interrupt, false to skip
 */
function intReboot(addr)
{
    if (this.getIP() == 0x102) {
        let sig = this.getSOWord(this.segCS, this.getIP()+1) + (this.getSOWord(this.segCS, this.getIP()+3) << 16);
        if (sig == 0x534A4350) {        // "PCJS"
            exit();                     // INT 19h appears to have come from "RETURN.COM"
        }
    }
    return true;
}

/**
 * intLoad(addr)
 *
 * @param {CPUx86} this
 * @param {number} addr
 * @returns {boolean} true to proceed with the INT 0x20 software interrupt, false to skip
 */
function intLoad(addr)
{
    if (this.getIP() == 0x102) {
        let sig = this.getSOWord(this.segCS, this.getIP()+1) + (this.getSOWord(this.segCS, this.getIP()+3) << 16);
        if (sig == 0x534A4350) {        // "PCJS"
            let cpu = this;             // INT 20h appears to have come from "LOAD.COM"
            let getString = function(seg, off, len) {
                let s = "";
                while (len--) {
                    s += CharSet.fromCP437(cpu.getSOByte(seg, off++))
                }
                return s;
            };
            let len = cpu.getSOByte(cpu.segDS, 0x80);
            let loadCommand = getString(cpu.segDS, 0x81, len).trim();
            let aTokens = loadCommand.split(' ');
            let matchDrive = aTokens[0].match(/^([a-z]:?)$/i);
            if (matchDrive) {
                aTokens.splice(0, 1)
                printf("%s\n", loadDiskette(matchDrive[1], aTokens));
            } else {
                if (!loadCommand) {
                    printf("usage: load [drive] [search terms]\n");
                } else {
                    printf("invalid load command: \"%s\"\n", loadCommand);
                }
            }
        }
    }
    return true;
}

/**
 * receiveSerial(b)
 *
 * @param {number} b
 */
function receiveSerial(b)
{
    let s;
    if (b != StrLib.ASCII.CR && b != StrLib.ASCII.LF) {
        s = StrLib.ASCIICodeMap[b];
    }
    if (s) {
        s = '<' + s + '>';
    } else {
        s = String.fromCharCode(b);
    }
    printf(s);
}

/**
 * sendSerial(b)
 *
 * @param {number} b
 */
function sendSerial(b)
{
    if (serial && fnSendSerial) {
        fnSendSerial.call(serial, b);
    }
}

/**
 * loadMachine(sFile)
 *
 * @param {string} sFile
 * @returns {string}
 */
function loadMachine(sFile)
{
    let getFactory = function(machine) {
        let type = machine['type'] || (machine['machine'] && machine['machine']['type']) || machineType;
        let idMachine = "";
        if (machine['machine']) {
            idMachine = machine['machine']['id'];
        }
        if (fHalt && machine['cpu']) {
            machine['cpu']['autoStart'] = 0;
        }
        let sParms = JSON.stringify(machine);
        loadModules(machines[type]['factory'], machines[type]['modules'], function() {
            initMachine(idMachine, sParms);
        });
    };
    let result = "missing machine";
    if (cpu) {
        /*
         * TODO: To make way for another machine, we'd have to first destroy the previous one, and there's no
         * support for that yet.  The simplest solution is forcing the user to restart pc.js.
         */
        result = "machine already loaded";
    }
    else if (sFile) {
        if (sFile.indexOf(path.sep) < 0) {
            sFile = path.join(pcjsDir, sFile);
        }
        if (fDebug) {
            printf("loadMachine(\"%s\")\n", sFile);
        }
        let sOpen = sFile;
        if (sOpen.indexOf(".json") > 0 || existsFile(sOpen = sFile + ".json5", false) || existsFile(sOpen = sFile + ".json", false)) {
            result = readJSON(sOpen, getFactory);
        }
        else {
            sOpen = sFile;
            if (sOpen.indexOf(".xml") > 0 || existsFile(sOpen = sFile + ".xml", false)) {
                let xml = {_resolving: 0};
                result = readXML(sOpen, xml, 'machine', null, 0, getFactory);
            } else {
                result = "unsupported machine file: " + sFile;
            }
        }
    }
    return result;
}

/**
 * readJSON(sFile, done)
 *
 * @param {string} sFile
 * @param {function(Object, string)} done
 * @returns {string}
 */
function readJSON(sFile, done)
{
    let result = "";
    try {
        let sMachine = readFileSync(sFile);
        /*
         * Since our JSON files may contain comments, hex values, etc, use eval() instead of JSON.parse().
         */
        let machine = eval('(' + sMachine + ')');
        done(machine);
    }
    catch(err) {
        result = err.message;
    }
    return result;
}

/**
 * readXML(sFile, xml, sNode, sFile, aTags, iTag, done)
 *
 * @param {string} sFile
 * @param {Object} xml
 * @param {string} sNode
 * @param {Array|null} aTags
 * @param {number} iTag
 * @param {function(Object)} done
 * @returns {string}
 */
function readXML(sFile, xml, sNode, aTags, iTag, done)
{
    let result = "";
    let idAttrs = '@';
    try {
        xml._resolving++;
        let sXML = readFileSync(sFile);
        let parser = new xml2js.Parser({attrkey: idAttrs});
        parser.parseString(sXML, function parseXML(err, xmlNode) {
            if (!aTags) {
                xml[sNode] = xmlNode[sNode];
            } else {
                aTags[iTag] = xmlNode[sNode];
            }
            if (err) {
                printf("%s\n", err.message);
            }
            else if (xmlNode && xmlNode[sNode]) {
                for (let sTag in xmlNode[sNode]) {
                    let aTagsXML = xmlNode[sNode][sTag];
                    for (let iTagXML = 0; iTagXML < aTagsXML.length; iTagXML++) {
                        let tag = aTagsXML[iTagXML];
                        let attrs = tag[idAttrs];
                        let sFileXML = attrs && attrs['ref'];
                        if (sFileXML) {
                            readXML(sFileXML, xml, sTag, aTagsXML, iTagXML, done);
                            /*
                             * Any non-ref attributes in the tag override those in the referenced file.
                             */
                            for (let attr in attrs) {
                                if (attr != 'ref') {
                                    aTagsXML[iTagXML][idAttrs][attr] = attrs[attr];
                                }
                            }
                        }
                    }
                }
                if (!--xml._resolving) {
                    let machine = convertXML(xml, idAttrs);
                    done(machine);
                }
            }
        });
    }
    catch(err) {
        result = err.message;
    }
    return result;
}

/**
 * buildDrive(sCommand)
 *
 * Builds a bootable hard drive image containing all files in the current directory.
 *
 * At present, the image size is hard-coded to 10Mb (which corresponds to an XT type 3 or AT type 1 drive)
 * and the operating system files default to MS-DOS 3.20.  Use --sys and --ver command-line options to
 * override those defaults.  The allowed systems are currently "msdos" and "pcdos", and the allowed versions
 * are any available in the PCjs diskette repo.
 *
 * Choice of hardware (ie, drives other than 10Mb) will be a bit trickier, because that also requires
 * tweaking the machine configuration file to specify a compatible drive type and customizing the master
 * boot record (currently we use a hard-coded ".mbr" file).  There are no plans to support more than one
 * partition/one volume, and to support volumes larger than 32Mb, we'll have to make sure your choice
 * of operating system supports it (eg, COMPAQ MS-DOS 3.31).
 *
 * The first three system files on the disk image will be those listed below (eg, IO.SYS, MSDOS.SYS, and
 * COMMAND.COM); if any of those files already exist in the current directory, ours will take precedence.
 * As for AUTOEXEC.BAT, we read any existing file (or create an empty file) and append the provided command.
 *
 * NOTE: The list of allowed internal commands below is not intended to be exhaustive; it's just a start.
 *
 * @param {string} sCommand (eg, "COPY A:*.COM C:", "PKUNZIP DEMO.ZIP", etc)
 * @returns {Array|null} (drive manifest)
 */
function buildDrive(sCommand)
{
    const systemInfo = {
        "msdos": {
            "vendor": "microsoft",
            "files": ["IO.SYS", "MSDOS.SYS", "COMMAND.COM"],
        },
        "pcdos": {
            "vendor": "ibm",
            "files": ["IBMBIO.COM", "IBMDOS.COM", "COMMAND.COM"]
        }
    };
    const aInternalCommands = ["CD", "COPY", "DEL", "DIR", "ECHO", "MKDIR", "PAUSE", "RMDIR", "SET", "TYPE", "VER"];

    let manifest = null;
    let aParts = sCommand.split(' ');
    let sProgram = aParts[0].toUpperCase();
    let iCommand = aInternalCommands.indexOf(sProgram);
    let system = systemInfo[systemType];
    let version = +systemVersion;
    let majorVersion = version | 0;
    if (!system) {
        printf("unsupported system type: %s\n", systemType);
        return null;
    }
    if (majorVersion < 2) {
        printf("minimum DOS version with hard disk support is 2.00\n");
        return null;
    }
    if (iCommand < 0) {
        if (sProgram.indexOf('.') < 0) {
            sProgram += ".{COM,EXE,BAT}";
        }
        if (sProgram.indexOf('/') < 0 && sProgram.indexOf('\\') < 0) {
            sProgram = path.join("**", sProgram);
        }
        let aFiles = glob.sync(sProgram);
        if (!aFiles.length) {
            sProgram = null;
        } else {
            let sArguments = aParts.slice(1).join(' ');
            sCommand = aFiles[0].replace(/\//g, '\\');
            sCommand = "C:" + (sCommand[0] != '\\'? '\\' : '') + sCommand + (sArguments? " " + sArguments : "");
        }
    }
    if (sProgram) {
        let sSystemDisk = "/diskettes/pcx86/sys/dos/" + system.vendor + "/" + systemVersion + "/";
        sSystemDisk += systemType.toUpperCase() + systemVersion.replace('.', '') + "-DISK1.json";
        let diSystem = readDiskSync(sSystemDisk);
        if (!diSystem) {
            printf("system diskette not found: %s\n", sSystemDisk);
            return null;
        }
        let dbMBR = readFileSync(path.join(pcjsDir, "MSDOS" /*systemType.toUpperCase()*/ + ".mbr"), null);
        if (diSystem && dbMBR) {
            let aFileDescs = [];
            for (let name of system.files) {
                let desc = diSystem.findFile(name);
                if (desc) {
                    desc.attr = +desc.attr;
                    /*
                     * There may be situations where we must leave COMMAND.COM unhidden; we'll see.
                     *
                     *      if (name != "COMMAND.COM" || majorVersion != 2) ...
                     */
                    desc.attr |= DiskInfo.ATTR.HIDDEN;
                    aFileDescs.push(desc);
                }
            }
            /*
             * In addition to the system files, we also add a hidden LOAD.COM in the root, which immediately
             * exits with an "INT 20h" instruction.  Our intLoad() interrupt handler should intercept it, determine
             * if the interrupt came from LOAD.COM, and if so, process it as an internal "load [drive]" command.
             */
            aFileDescs.push(makeFileDesc("LOAD.COM", [0xCD, 0x20, 0xC3, 0x50, 0x43, 0x4A, 0x53, 0x00], DiskInfo.ATTR.HIDDEN));
            /*
             * We also add a hidden RETURN.COM in the root, which executes an "INT 19h" to reboot the machine.
             * Our intReboot() interrupt handler should intercept it, allowing us to gracefully invoke checkDrive()
             * to look for any changes and then terminate the machine.
             */
            aFileDescs.push(makeFileDesc("RETURN.COM", [0xCD, 0x19, 0xC3, 0x50, 0x43, 0x4A, 0x53, 0x00], DiskInfo.ATTR.HIDDEN));
            /*
             * We also make sure there's an AUTOEXEC.BAT.  If one already exists, then we make sure there's
             * a PATH command, to which we prepend "C:\" if not already present.  We create an AUTOEXEC.BAT
             * if it doesn't exist, but in that case, we also mark it HIDDEN, since it's a file we created, not
             * the user.  Ensuring that "C:\" is in the PATH ensures that the user can invoke "return" to run
             * our hidden "RETURN.COM" program regardless of the current directory.
             */
            let attr = DiskInfo.ATTR.ARCHIVE;
            let data = readFileSync("AUTOEXEC.BAT", "utf8", true);
            if (!data) {
                data = "ECHO OFF\r\n";
                attr |= DiskInfo.ATTR.HIDDEN;
            }
            let matchPath = data.match(/^PATH\s*(.*)$/im);
            if (matchPath) {
                let matchPathRoot = matchPath[1].match(/(^|;|C:|)\\(;|$)/i);
                if (!matchPathRoot) {
                    data = data.replace(/^PATH\s*(.*)$/im, "PATH C:\\;$1");
                }
            } else {
                data += "PATH C:\\\r\n";
            }
            data += sCommand + "\r\n";
            aFileDescs.push(makeFileDesc("AUTOEXEC.BAT", data, attr));
            /*
             * Load the boot sector from the system diskette we read above, and use it to update the boot
             * sector on the hard drive image.
             *
             * NOTE: It seems that many (if not all) DOS boot sectors did NOT rely on the DL register
             * containing the boot drive # (0x00 for floppy drive, 0x80 for hard disk) even though the DOS
             * MBR does appear to preserve and pass DL on to the boot sector.
             *
             * For example, when MS-DOS 3.20 writes the boot sector to the media, it inserts the boot drive
             * at offset 0x1fd (just before the 0x55,0xAA signature).  So that's we do, too.
             *
             * Wikipedia claims that offset 0x1fd was used "only in DOS 3.2 to 3.31 boot sectors" and that
             * in "OS/2 1.0 and DOS 4.0, this entry moved to sector offset 0x024 (at offset 0x19 in the EBPB)".
             *
             * TODO: Obviously this code will have to be fully fleshed out for ALL supported versions of DOS.
             */
            let verBPB = 0;
            let dbBoot = getDiskSector(diSystem, 0);
            if (systemType == "msdos") {
                if (version >= 3.2 && version <= 3.31) {
                    dbBoot.writeUInt8(0x80, 0x1fd);
                }
            } else if (systemType == "pcdos") {
                if (majorVersion == 2) {
                    /*
                     * PC DOS 2.x requires the boot drive (AND drive head # -- go figure) to be stored in locations
                     * that later became part of the BPB, and by default, updateBootSector() doesn't let us change any
                     * part of the BPB unless we specify a BPB version number (which, in this case, must be 2).
                     */
                    verBPB = 2;
                    dbBoot.writeUInt8(0x80, DiskInfo.BPB.BOOTDRIVE);
                    /*
                     * NOTE: Hard-coding the boot drive head # to 0 is fine for our purposes, because when we build a
                     * drive image, we place the first (and only) partition immediately after the MBR.  Some systems
                     * reserve the entire first track for the MBR, in which case the first partition would not necessarily
                     * be located at head 0, but that's not something we need to worry about for now.
                     */
                    dbBoot.writeUInt8(0x00, DiskInfo.BPB.BOOTHEAD);
                }
            }
            let done = function(di) {
                if (di) {
                    manifest = di.getFileManifest(null, true);
                    di.updateBootSector(dbMBR, -1);         // a volume of -1 indicates the master boot record
                    di.updateBootSector(dbBoot, 0, verBPB);
                    writeDiskSync(path.join(pcjsDir, "DOS.json"), di, false, 0, true, true);
                }
            }
            let normalize = true;
            readDir("./", 0, 0, "PCJS", null, normalize, 10240, 1024, false, null, null, aFileDescs, done);
        }
    } else {
        printf("command not found: %s\n", sCommand);
    }
    return manifest;
}

/**
 * buildDiskIndex()
 *
 * Returns diskIndex object (properties are disk names).
 *
 * @returns {Object}
 */
function buildDiskIndex()
{
    let total = 0;
    let diskIndex = {};
    let aDiskettes = fdc && fdc.aDiskettes;
    if (aDiskettes) {
        for (let i = 0; i < aDiskettes.length; i++) {
            let diskette = aDiskettes[i];
            let diskPath = diskette['path'];
            let diskName = diskette['name'];
            if (diskPath.indexOf("/private") >= 0) continue;
            diskIndex[diskName] = {'path': diskPath};
            total++;
            if (total % 100 == 0) {
                printf("diskettes available: %d\r", total);
            }
        }
    }
    printf("total diskettes available: %d\n", total);
    return diskIndex;
}

/**
 * buildFileIndex(diskIndex)
 *
 * Returns fileIndex (properties are file names) built from diskIndex.
 *
 * @param {Object} diskIndex
 * @returns {Object}
 */
function buildFileIndex(diskIndex)
{
    let total = 0;
    let pathIndex = path.join(pcjsDir, "files.json");
    let fileIndex = readFileSync(pathIndex, "utf8", true);
    if (fileIndex) {
        fileIndex = JSON.parse(fileIndex);
    } else {
        fileIndex = {};
        for (let diskName in diskIndex) {
            let diskPath = diskIndex[diskName]['path'];
            let diskJSON = readFileSync(diskPath, "utf8", true);
            if (diskJSON) {
                let disk = JSON.parse(diskJSON);
                let fileTable = disk['fileTable'];
                if (!fileTable) continue;
                for (let j = 0; j < fileTable.length; j++) {
                    let file = fileTable[j];
                    let parts = file['path'].split('/');
                    let fileName = parts[parts.length - 1];
                    if (!fileIndex[fileName]) {
                        fileIndex[fileName] = [];
                    }
                    let newItem = {'disk': diskName, 'size': file['size'], 'date': file['date'], 'hash': file['hash']};
                    /*
                     * Insert the new item into the fileIndex array in 'date' order.
                     */
                    let i = fileIndex[fileName].findIndex(item => item['date'] > newItem['date']);
                    if (i < 0) i = fileIndex[fileName].length;
                    fileIndex[fileName].splice(i, 0, newItem);
                }
                total++;
                if (total % 100 == 0) {
                    printf("diskettes read: %d\r", total);
                }
            }
        }
        printf("total diskettes read: %d\n", total);
        fs.writeFileSync(pathIndex, JSON.stringify(fileIndex));
    }
    return fileIndex;
}

/**
 * checkDrive(oldManifest)
 *
 * If we built a drive on entry, this checks the drive on exit for any changes that need to be propagated.
 *
 * @param {Array} [oldManifest]
 * @returns {boolean}
 */
function checkDrive(oldManifest)
{
    if (hdc && oldManifest) {
        let imageData = hdc.aDrives && hdc.aDrives.length && hdc.aDrives[0].disk;
        if (imageData) {
            let di = new DiskInfo(device, "DOS");
            if (di.buildDiskFromJSON(imageData)) {
                let newManifest = di.getFileManifest(null, true);
                /*
                 * We now have the old and new manifests, and both should be sorted, so all we have to do now
                 * is walk them, looking for differences.
                 */
                let removedDirs = [];
                let iOld = 0, iNew = 0;
                let compareContents = function(a, b) {
                    let aContents = a.contents || [];
                    let bContents = b.contents || [];
                    return aContents.length === bContents.length && aContents.every((element, i) => element === bContents[i]);
                };
                while (iOld < oldManifest.length && iNew < newManifest.length) {

                    let oldItem = oldManifest[iOld];
                    let newItem = newManifest[iNew];
                    let oldAttr = +oldItem.attr;
                    let newAttr = +newItem.attr;
                    let oldDate = device.parseDate(oldItem.date, true);
                    let newDate = device.parseDate(newItem.date, true);

                    if (oldItem.path == newItem.path) {
                        if (oldAttr == newAttr) {
                            /*
                             * Even if both entries are SUBDIR or VOLUME, that's OK, because those entries don't have
                             * contents, so the compare will succeed and writeFileSync() will be bypassed.
                             */
                            if (!compareContents(oldItem, newItem)) {
                                if (fDebug) printf("updating %s\n", newItem.path);
                                writeFileSync(newItem.path.slice(1), newItem.contents, false, true);
                            }
                        } else {
                            /*
                             * Here's where things get complicated, because we could have scenarios like a directory removed
                             * and a file with the same name created in its place.
                             */
                            fs.chmodSync(newItem.path.slice(1), (newAttr & DiskInfo.ATTR.READONLY)? 0o444 : 0o666);
                        }
                        if (oldDate.getTime() != newDate.getTime()) {
                            fs.utimesSync(newItem.path.slice(1), newDate, newDate);
                        }
                        iOld++;
                        iNew++;
                    } else if (oldItem.path < newItem.path) {
                        /*
                         * Unfortunately, whenever a directory has been removed, we see the directory first,
                         * followed by any files or other directories that it used to contain.  While we could
                         * perform a recursive removal of the directory right now, that comes with some inherent
                         * risk *and* will cause all subsequent unlink() calls for any contained files to fail.
                         * So instead, we simply queue the directory for removal later.
                         */
                        if (oldAttr & DiskInfo.ATTR.SUBDIR) {
                            removedDirs.push(oldItem.path);
                        } else {
                            if (fDebug) printf("removing %s\n", oldItem.path);
                            fs.unlinkSync(oldItem.path.slice(1));
                        }
                        iOld++;
                    } else {
                        if (fDebug) printf("creating %s\n", newItem.path);
                        if (newAttr & DiskInfo.ATTR.SUBDIR) {
                            fs.mkdirSync(newItem.path.slice(1));
                        } else {
                            writeFileSync(newItem.path.slice(1), newItem.contents, true, false);
                        }
                        fs.utimesSync(newItem.path.slice(1), newDate, newDate);
                        if (newAttr & DiskInfo.ATTR.READONLY) {
                            fs.chmodSync(newItem.path.slice(1), 0o444);
                        }
                        iNew++;
                    }
                }
                while (removedDirs.length) {
                    let dir = removedDirs.pop();
                    if (fDebug) printf("removing %s\n", dir);
                    fs.rmdirSync(dir.slice(1));
                }
                if (fSave) {
                    writeDiskSync(path.join(pcjsDir, "DOS.img"), di, false, 0, true, true);
                }
                return true;
            }
        }
    }
    return false;
}

/**
 * loadDiskette(sDrive, aTokens)
 *
 * When then "load" command is followed by a drive-letter and colon (eg, "load a:"), this function is called
 * with all the remaining tokens on the command-line.  Those tokens determine which disk(s) to display for selection
 * and subsequent loading.
 *
 * Tokens fall into two categories: dash tokens (eg, "--disk", "--file") and non-dash tokens.  Non-dash tokens simply
 * add to the search criteria of whichever dash token is in effect; initially, "--disk" is in effect; eg:
 *
 *      load a: --disk pc dos --file chkdsk --date 1982
 *
 * The two primary criteria are disk and file.  Other criteria are secondary; for example, any date criteria will
 * be applied only after any file criteria.
 *
 * If more than one disk matches the criteria, then a numbered list of diskettes will be displayed, and a subsequent
 * "load" command with a number, such as:
 *
 *      load a: 14
 *
 * will load the corresponding diskette.
 *
 * TODO: Date criteria are accepted but not yet acted upon; consider other criteria as well.
 *
 * @param {string} sDrive ('A:' through 'Z:')
 * @param {Array.<string>} aTokens
 * @returns {string} (result of command)
 */
function loadDiskette(sDrive, aTokens)
{
    let result = "";
    let doLoad = function(sDrive, diskName) {
        sDrive = sDrive.toUpperCase();
        let iDrive = sDrive.charCodeAt(0) - 'A'.charCodeAt(0);
        let diskPath = diskIndexCache[diskName]['path'];
        let done = function(disk, error) {
            if (error == Errors.DOS.INVALID_DRIVE) {
                result = "invalid drive (" + sDrive + ")";
            } else {
                result = sprintf("diskette \"%s\"%s loaded (%d)", diskName, disk? (error < 0? " already" : "") : " not", error);
            }
        };
        result = "loading \"" + diskName + "\" in drive " + sDrive;
        fdc.loadDrive(iDrive, diskName, diskPath, false, null, done);
    };
    let displayItems = function(sDrive, items, message = "") {
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            if (result) result += '\n';
            if (!item['file']) {
                result += sprintf("%3d: %s", i + 1, item['disk']);
            } else {
                result += sprintf("%3d: %-12s %8d %.10s  \"%s\"", i+1, item['file'], item['size'], item['date'], item['disk']);
            }
        }
        result += "\nenter \"load " + sDrive + " #\" to load diskette by number" + (message? "\n" + message : "");
        return result;
    };
    if (fdc) {
        if (diskItems && aTokens.length == 1 && aTokens[0].match(/^\d+$/)) {
            let diskItem = diskItems[+aTokens[0] - 1];
            if (diskItem) {
                if (!diskItem['others']) {
                    doLoad(sDrive, diskItem['disk']);
                } else {
                    diskItems = diskItem['others'];
                    diskItems.unshift(diskItem);
                    delete diskItem['others'];
                    result = displayItems(sDrive, diskItems, "multiple disks with identical file (use \"load a: 1\" to load original selection)");
                }
            } else {
                result = "invalid diskette number (" + aTokens[0] + ")";
            }
            return result;
        }
        diskItems = [];
        let criteria = 'disk';
        let cTokens = 0;
        let dateParts = [];
        let diskNameParts = [];
        let fileNameParts = [];
        for (let token of aTokens) {
            let matchDash = token.match(/^-+(.*)$/);
            if (matchDash) {
                criteria = matchDash[1].toLowerCase();
            } else {
                token = token.toUpperCase();
                if (!cTokens && token.match(/\.[A-Z][A-Z][A-Z]$/)) {
                    /*
                     * If no criteria has been specified, and the token looks like a filename, then assume it's a file.
                     */
                    criteria = 'file';
                }
                switch (criteria) {
                case 'date':
                    dateParts.push(token);
                    break;
                case 'disk':
                    diskNameParts.push(token);
                    break;
                case 'file':
                    fileNameParts.push(token);
                    break;
                default:
                    printf("unknown criteria: %s\n", criteria);
                    break;
                }
            }
            cTokens++;
        }
        if (diskNameParts.length || fileNameParts.length) {
            if (!diskIndexCache) {
                diskIndexCache = buildDiskIndex();
                if (diskIndexCache) {
                    diskIndexKeys = Object.keys(diskIndexCache).sort();
                }
            }
            if (diskIndexKeys.length) {
                if (fileNameParts.length) {
                    fileIndexCache = buildFileIndex(diskIndexCache);
                    if (fileIndexCache) {
                        fileIndexKeys = Object.keys(fileIndexCache).sort();
                    }
                }
                /*
                 * If we have file name criteria AND a file name index, then we dig through the file index keys
                 * and build up a list of disk names, similar to diskIndexKeys.  Otherwise, we start with diskIndexKeys.
                 */
                let index = diskIndexCache;
                let itemNames = diskIndexKeys;
                let itemParts = diskNameParts;
                if (fileNameParts.length && fileIndexKeys.length) {
                    index = fileIndexCache;
                    itemNames = fileIndexKeys;
                    itemParts = fileNameParts;
                }
                let searchNames = function(names, parts, index) {
                    let matches = [];
                    for (let name of names) {
                        let i = 0;
                        let match = true;
                        let test = name.toUpperCase();
                        for (let part of parts) {
                            i = test.indexOf(part, i);
                            if (i < 0) {
                                match = false;
                                break;
                            }
                            i += part.length;
                        }
                        if (match) {
                            if (!Array.isArray(index[name])) {
                                matches.push({'disk': name});
                            } else {
                                let a = index[name];
                                /*
                                 * The items in this array are sorted by date, but we also want to eliminate duplicates
                                 * based on the hash value, so we maintain a hash index here.  The key is the hash value,
                                 * and each hash entry is an array of disk names.
                                 */
                                let hashIndex = {};
                                for (let i = 0; i < a.length; i++) {
                                    let item = a[i];
                                    let diskItem = {'disk': item['disk'], 'file': name, 'size': item['size'], 'date': item['date']};
                                    let prevItem = hashIndex[item['hash']];
                                    if (prevItem) {
                                        if (!prevItem['others']) {
                                            prevItem['others'] = [];
                                        }
                                        prevItem['others'].push(diskItem);
                                        continue;
                                    }
                                    hashIndex[item['hash']] = diskItem;
                                    matches.push(diskItem);
                                }
                            }
                        }
                    }
                    return matches;
                };
                let items = searchNames(itemNames, itemParts, index);
                if (items.length == 1) {
                    doLoad(sDrive, items[0]['disk']);
                } else if (items.length > 1) {
                    /*
                     * Since there are multiple items, our job is to display rather than to load; a subsequent
                     * call to loadDiskette() with an item number will do the actual loading of the selected disk.
                     */
                    diskItems = items;
                    result = displayItems(sDrive, diskItems);
                } else {
                    result = "no disk(s) found";
                }
            }
            else {
                result = "no disk(s) available";
            }
        } else {
            result = "missing disk criteria";
        }
    } else {
        result = "no floppy drives (load a machine first)";
    }
    return result;
}

/**
 * doCommand(s, argv)
 *
 * @param {string} s
 * @param {Array} argv
 * @returns {string|null} (result of command, or null to quit)
 */
function doCommand(s, argv)
{
    let result = "";
    let aTokens = s.split(' ');

    switch(aTokens[0].toLowerCase()) {
    case "help":
        result = "pc.js commands:\n" +
                    "  load [machine]\n" +
                    "  load [drive] [search terms]\n" +
                    "  quit\n" +
                    "type \"?\" for a list of debugger commands (eg, \"g\" to continue running)";
        break;
    case "argv":
        printf("%2j\n", argv);
        break;
    case "cwd":
        printf("%s\n", process.cwd());
        break;
    case "load":
        if (aTokens[1]) {
            let matchDrive = aTokens[1].match(/^([a-z]:?)$/i);
            if (matchDrive) {
                aTokens.splice(0, 2)
                result = loadDiskette(matchDrive[1], aTokens);
            } else {
                result = loadMachine(aTokens[1]);
            }
        } else {
            result = "missing " + (cpu? "drive letter" : "machine file");
        }
        break;
    case "q":
    case "quit":
        return null;
    default:
        if (s) {
            try {
                if (dbg && !dbg.doCommands(s, true, true)) {
                    result = eval('(' + s + ')');
                }
            } catch(err) {
                result = err.message;
            }
        }
        break;
    }
    commandPrev = s;
    return result? result + "\n" : "";
}

/**
 * readInput(argv, stdin, stdout)
 *
 * @param {Array} argv
 * @param {Object} stdin
 * @param {Object} stdout
 */
function readInput(argv, stdin, stdout)
{
    let loading = false;

    if (typeof argv['load'] == "string") {          // process --load argument, if any
        printf(loadMachine(argv['load']));
        loading = true;
    }
    else if (argv[1]) {                             // alternatively, process first non-option argument
        if (existsFile(argv[1]) || existsFile(argv[1] + ".json")) {
            printf(loadMachine(argv[1]));           // and perform an implicit load
            argv.splice(1, 1);
            loading = true;
        } else {
            /*
             * NOTE: Arguments like "*.*" are problematic (since modern shells will expand them), so
             * any arguments you want to pass along with the command to buildDrive() should be included
             * as part of a single fully-quoted argument (eg, pc.js "dir *.* /s").
             */
            driveManifest = buildDrive(argv[1]);
            if (!driveManifest) {                   // the argument is presumably a DOS command or program name
                return;                             // exit on error (buildDrive() should have explained)
            }
            if (!argv['load']) {                    // and if it was, automatically load a machine to boot and run it
                printf(loadMachine("compaq386"));
                loading = true;
            }
        }
    }

    if (!loading) setDebugMode(DbgLib.EVENTS.READY);

    stdin.resume();
    stdin.setEncoding("utf8");
    stdin.setRawMode(true);

    stdin.on("data", function(data) {
        let code = data.charCodeAt(0);
        if (Defines.MAXDEBUG) {
            printf("key(s): %j\n", data);
        }
        if (code == 0x04 && !debugMode) {           // check for CTRL-D when NOT in debug mode
            if (cpu) cpu.stopCPU();
            setDebugMode(DbgLib.EVENTS.READY);
            return;
        }
        if (code == 0x03 && debugMode) {            // check for CTRL-C when in debug mode
            printf("terminating...\n");
            exit();
            return;
        }
        if (!debugMode) {
            data = functionKeys[data] || data;
            data = data.replace(/\x7f/g, "\b");     // convert DEL to BS
            if (kbd) {
                if (Defines.MAXDEBUG) {
                    printf("injecting key(s): %s\n", data);
                }
                kbd.injectKeys.call(kbd, data, 0);
            } else {
                sendSerial(code);
            }
            return;
        }
        if (data == "\x08" || data == "\x7f") {     // implement BS/DEL ourselves (since we're in "raw" mode)
            if (command.length) {                   // (Windows generates BS, macOS generates DEL)
                command = command.slice(0, -1);
                printf("\b \b");                    // by converting it to BS + SPACE + BS
            }
            return;
        }
        if (data == "\x1b[A" && !command.length) {  // implement UP ARROW ourselves (since we're in "raw" mode)
            data = commandPrev;
        }
        else if (code < 0x20 && code != 0x0d) {     // anything else (including any ESC codes) is ignored
            return;
        }
        printf("%s", data);
        command += data;
        do {
            let i = command.indexOf("\r");
            if (i < 0) break;
            let s = command.slice(0, i);
            printf("\n");
            let result = doCommand(s, argv);
            if (result == null) {
                exit();
                return;
            }
            printf(result);
            if (cpu && cpu.isRunning()) {
                break;
            }
            printf("%s> ", prompt);
            command = command.slice(i+1);
        } while (command.length);
    });
}

/**
 * exit()
 */
function exit()
{
    checkDrive(driveManifest);
    process.stdin.setRawMode(false);
    process.exit();
}

/**
 * main(argc, argv)
 *
 * @param {number} argc
 * @param {Array} argv
 */
function main(argc, argv)
{
    if (argv['help']) {
        let optionsMain = {
            "--load=[machine file]":    "load machine configuration file",
            "--type=[machine type]":    "set machine type (default is " + machineType + ")",
            "--sys=[system type]":      "operating system type (default is " + systemType + ")",
            "--ver=[system version]":   "operating system version (default is " + systemVersion + ")"
        };
        let optionsOther = {
            "--debug (-d)\t":           "enable DEBUG messages",
            "--halt (-h)\t":            "halt machine on startup",
            "--help (-?)\t":            "display command-line usage",
            "--save (-s)\t":            "save modified hard disk image on exit"
        };
        let optionGroups = {
            "main options:":            optionsMain,
            "other options:":           optionsOther
        }
        printf("usage:\n\t[node] pc.js [options] [DOS command or program name]\n");
        for (let group in optionGroups) {
            printf("\n%s\n\n", group);
            for (let option in optionGroups[group]) {
                printf("\t%s\t%s\n", option, optionGroups[group][option]);
            }
        }
        return;
    }

    fDebug = argv['debug'] || fDebug;
    fHalt = argv['halt'] || fHalt;
    fSave = argv['save'] || fSave;
    machineType = argv['type'] || machineType;
    systemType = (typeof argv['sys'] == "string" && argv['sys'] || systemType).toLowerCase();
    systemVersion = (typeof argv['ver'] == "string" && argv['ver'] || systemVersion);

    device.setDebug(fDebug);
    device.setMessages(MESSAGE.DISK + MESSAGE.WARN + MESSAGE.ERROR + (Defines.DEBUG? MESSAGE.DEBUG : 0), true);
    messagesFilter = fDebug? Messages.TYPES : Messages.ALERTS;

    let arg0 = argv[0].split(' ');
    rootDir = path.join(path.dirname(arg0[0]), "../..");
    pcjsDir = path.join(rootDir, "/tools/pc");
    setRootDir(rootDir);

    if (!argv[1] || argv['debug']) {
        let options = arg0.slice(1).join(' ');
        printf("pc.js v%s\n%s\n%s", Device.VERSION, Device.COPYRIGHT, (options? sprintf("Options: %s\n", options) : ""));
    }

    machines = JSON.parse(readFileSync("/machines/machines.json"));

    readInput(argv, process.stdin, process.stdout);
}

main(...pcjslib.getArgs({
    '?': "help",
    'd': "debug",
    's': "save"
}));
