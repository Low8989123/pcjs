#!/usr/bin/env node
/**
 * @fileoverview Implements the PCjs machine command-line interface
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import child_process from "child_process";
import fs            from "fs";
import glob          from "glob";
import JSON5         from 'json5';
import path          from "path";
import xml2js        from "xml2js";
import DbgLib        from "../../machines/modules/v2/dbglib.js";
import Messages      from "../../machines/modules/v2/messages.js";
import { printf, sprintf } from "../../machines/modules/v2/printf.js";
import StrLib        from "../../machines/modules/v2/strlib.js";
import Device        from "../../machines/modules/v3/device.js";
import CharSet       from "../../machines/pcx86/modules/v3/charset.js";
import DiskInfo      from "../../machines/pcx86/modules/v3/diskinfo.js";
import { Defines, MESSAGE } from "../../machines/modules/v3/defines.js";
import { device, existsDir, existsFile, getDiskSector, getTargetValue, makeFileDesc, readDir, readDiskAsync, readFileAsync, readFileSync, setRootDir, writeDiskSync, writeFileSync } from "../modules/disklib.js";
import pcjslib       from "../modules/pcjslib.js";

let fBare = false;
let fDebug = false;
let fHalt = false;
let fFloppy = false;
let fNoFloppy = false;
let fNormalize = true;
let fTest = false;
let fVerbose = false;
let autoStart = false;
let machineType = "pcx86";
let systemType = "msdos";
let systemVersion = "3.30";
let systemOverride = false;
let systemMBR = "pcjs.mbr";
let savedMachine = "compaq386.json";
let savedState = "state386.json";
let localMachine = "";          // current machine config file
let localCommand = "";          // current command issued from machine
let localDir = ".";             // local directory used to build localDisk
let localDisk = "disks/PCJS.json";
let diskLabel = "default";
let machineDir = "";            // current directory *inside* the machine
let maxFiles = 1024;            // default disk file limit
let kbTarget = 10 * 1024;       // default disk capacity, in kilobytes (Kb)
let configFile = "pc.json5", configJSON = {}, machines = {};

let rootDir, pcjsDir;
let messagesFilter, debugMode;
let Component, Errors, Interrupts, Web, embedMachine;
let prompt = ">", command = "", commandPrev = "";
let machine = newMachine();

let diskItems = [];
let diskIndexCache = null, diskIndexKeys = [];
let fileIndexCache = null, fileIndexKeys = [];
let driveManifest = null, driveOverride = false, geometryOverride = false;
let driveInfo = {
    driveCtrl:      "COMPAQ",
    driveType:      -1,
    nCylinders:     0,
    nHeads:         0,
    nSectors:       0,
    cbSector:       0,
    driveSize:      0,
    typeFAT:        0,          // set this to 12 or 16 to request a specific FAT type
    clusterSize:    0,          // set this to a specific cluster size (in bytes) if desired
    rootEntries:    0,          // set this to a specific number of root directory entries if desired
    hiddenSectors:  0,          // set this to a specific number of hidden sectors if desired
    verDOS:         0,
    trimFAT:        false,
    partitioned:    undefined,
    files:          []
};

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
        if (!fTest) printf("[Press CTRL-D to enter command mode]\n");
    }
    debugMode = nEvent;
    if (debugMode == DbgLib.EVENTS.READY && prevMode != DbgLib.EVENTS.READY) {
        command = "";
        printf('[' + (commandPrev? "Press CTRL-A to repeat last command" : "Type help for list of commands") + ", CTRL-C to terminate]\n");
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
         * Node will fail on Windows operating systems with the following error:
         *
         *      TypeError [ERR_INVALID_MODULE_SPECIFIER]: Invalid module
         *      "..\..\..\machines\modules\v2\defines.js" is not a valid package name ....
         *
         * which seems bizarre, since backslash is actually Windows' preferred path separator
         * and is precisely what Node's path.sep returns on Windows. ¯\_(ツ)_/¯
         *
         * Moreover, we cannot join modulePath with rootDir, because rootDir will start with
         * a drive letter (eg, "C:") on Windows, which then fails with the following error:
         *
         *      Only URLs with a scheme in: file and data are supported by the default ESM loader.
         *      On Windows, absolute paths must be valid file:// URLs. Received protocol 'c:'
         *
         * so we join it with a relative directory instead (ie, "../..").
         */
        modulePath = path.join("../..", modulePath).replace(/\\/g, '/');
        if (fDebug) printf("loading: %s\n", modulePath.replace(/\.\.\/\.\.\//g, '/'));
        let name = path.basename(modulePath, ".js");
        if (name == "embed") {
            let { [factory]: embed } = await import(modulePath);
            embedMachine = embed;
            continue;
        }
        let module = await import(modulePath);
        /*
         * Below are the set of classes that we need access to (eg, static methods, constants, etc).
         */
        switch(name) {
        case "weblib":
            Web = module.default;
            break;
        case "component":
            Component = module.default;
            /*
             * We override Component.printf() in order to replace its DEBUG check with our own fDebug check.
             */
            Component.printf = function(format, ...args) {
                let bitsMessage = 0;
                if (typeof format == "number") {
                    bitsMessage = format;
                    format = args.shift();
                }
                if (Component.testBits(bitsMessage, Messages.ERROR)) {
                    format = "error: " + format + "\n";
                    bitsMessage = 0;
                }
                if (Component.testBits(bitsMessage, Messages.WARNING)) {
                    format = "warning: " + format + "\n";
                    bitsMessage = 0;
                }
                if (fDebug || !bitsMessage) {
                    printf(format, ...args);
                }
            }
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
                if ((debugMode || !autoStart) && !bitsMessage || (bitsMessage || fDebug) && Component.testBits(messagesFilter, bitsMessage)) {
                    printf(s);
                }
            };
        }
    }
    done();
}

/**
 * initMachine(args)
 *
 * @param {string} args
 */
function initMachine(args)
{
    try {
        /*
         * Simulate the "web page" embedding and initialization process now.
         */
        embedMachine(machine.id, null, null, args);
        Web.doPageInit();

        /*
         * Get the CPU component so we can keep tabs on its running state and also hook
         * a few interrupts (eg, INT 0x10).  Get the Debugger component so we can override
         * the debugger's print() function.
         */
        machine.cpu = Component.getComponentByType("CPU");
        if (machine.cpu && machine.cpu.addIntNotify && Interrupts) {
            machine.cpu.addIntNotify(Interrupts.VIDEO, intVideo.bind(machine.cpu));
            machine.cpu.addIntNotify(Interrupts.VIDEO_VGA, intVideoVGA.bind(machine.cpu));
            machine.cpu.addIntNotify(Interrupts.DISK, intDisk.bind(machine.cpu));
            machine.cpu.addIntNotify(Interrupts.BOOTSTRAP, intReboot.bind(machine.cpu));
            machine.cpu.addIntNotify(Interrupts.DOS_EXIT, intLoad.bind(machine.cpu));
        }

        /*
         * Get the FDC component so we can query its list of available diskettes,
         * and get the HDC component so we can get the state of its hard drive(s).
         */
        machine.fdc = Component.getComponentByType("FDC");
        machine.hdc = Component.getComponentByType("HDC");

        /*
         * Get the Debugger component so we can receive debugger events and send
         * debugger commands.
         */
        machine.dbg = Component.getComponentByType("Debugger");
        if (machine.dbg) machine.dbg.onEvent(setDebugMode);

        /*
         * Get the Keyboard component to get access to injectKeys(), which simplifies the
         * injection of keystrokes into the machine.
         */
        machine.kbd = Component.getComponentByType("Keyboard");

        machine.serial = Component.getComponentByType("SerialPort");
        if (machine.serial) {
            let exports = machine.serial['exports'];
            if (exports) {
                var fnSetConnection = exports['setConnection'];
                if (fnSetConnection) {
                    if (fnSetConnection.call(machine.serial, null, receiveSerial)) {
                        machine.fnSendSerial = exports['receiveData'];
                    }
                }
            }
        }

        /*
         * Since there may be no debugger (and even if there is, machines that are auto-started won't
         * trigger any debugger events), we simulate an appropriate event.
         *
         * NOTE: The test here used to be "machine.cpu && machine.cpu.isRunning()", but if you're not using
         * the --local option, the CPU may not up and running yet, so we rely on the autoStart setting instead.
         */
        setDebugMode(machine.cpu && autoStart? DbgLib.EVENTS.EXIT : DbgLib.EVENTS.READY);
    }
    catch(err) {
        printf("machine initialization error: %s\n", err.message);
    }
}

/**
 * intVideo(addr)
 *
 * Notification handler for all INT 0x10 software interrupts.
 *
 * @param {CPUx86} this
 * @param {number} addr
 * @returns {boolean} true to proceed with the INT 0x10 software interrupt, false to skip
 */
function intVideo(addr)
{
    let maxRows = 25, maxCols = 80;     // TODO: update these to reflect active video mode
    let CX = (this.regECX & 0xffff);
    let AH = ((this.regEAX >> 8) & 0xff), AL = (this.regEAX & 0xff);
    let DH = ((this.regEDX >> 8) & 0xff), DL = (this.regEDX & 0xff);

    if (machine.nestedVideo) {          // some BIOSes issue calls within the "write TTY" (0x0E)
        return true;                    // function, and we want to ignore those
    }

    switch (AH) {
    case 0x00:
        machine.rowCursor = machine.colCursor = 0;
        break;
    case 0x02:                          // set cursor position (row=DH, col=DL)
        if (DL >= maxCols || DH >= maxRows) {
            break;                      // ignore "off-screen" positions
        }
        if (DL < machine.colCursor) {
            if (!DL) {
                printf('\r');
            } else {
                let s = "";
                while (DL + s.length < machine.colCursor) {
                    s += '\b';
                }
                printf(s);
            }
        }
        if (DH != machine.rowCursor) {
            printf('\n');
        } else if (DL > machine.colCursor) {
            /*
             * When BASIC/BASICA erases a character (in response to a BS/DEL key), it wants to redraw
             * the entire line (eg, with spaces if there was nothing past the character being deleted);
             * in that situation, it seems best (well, certainly easiest) to simply ignore the cursor
             * updates and let the spaces ("chips") fall where they may.
             */
            break;
        }
        machine.rowCursor = DH;
        machine.colCursor = DL;
        break;
    case 0x06:                          // scroll up (AL lines)
        while (AL--) {                  // TODO: Should probably check the boundaries of the scroll
            printf('\n');               // but that's more work than our cheesy TTY emulation deserves
        }
        break;
    case 0x09:                          // write raw char/attr (AL/BL) with count (CX)
    case 0x0A:                          // write raw char (AL) with count (CX)
        /* falls through */
    case 0x0E:                          // write TTY char (AL)
        /*
         * By default, fromCP437() does NOT translate control characters to UTF-8, which is the proper
         * thing to do for TTY control characters (ie, BEL, BS, LF, and CR) that the TTY function (0x0E)
         * wants to handle, but all other characters must be translated (including ESC or 0x1B, which
         * BASIC uses to display a left-arrow symbol).  And when non-TTY output is being performed, there
         * are no exceptions (ie, translate everything).
         */
        let s = CharSet.fromCP437(AL, AH != 0x0E || [0x07, 0x08, 0x0A, 0x0D].indexOf(AL) < 0);
        /*
         * NOTE: I don't think the BIOS actually handled CX == 0 very well (it looped 65536 times instead),
         * but we're not going to emulate/risk that.
         */
        if (AH == 0x0E || !CX) CX = 1;
        printf("%s", s.repeat(CX));
        if (s == '\r') {
            machine.colCursor = 0;
        } else if (s == '\n') {
            while (machine.rowCursor < maxRows && CX--) {
                machine.rowCursor++;
            }
        } else if (s == '\b') {
            while (machine.colCursor > 0 && CX--) {
                machine.colCursor--;
            }
        } else {
            while (machine.colCursor < maxCols && CX--) {
                machine.colCursor++;
            }
        }
        break;
    }
    /*
     * Originally, we only hooked the IRET if a TTY function (0x0E) was being performed, because that
     * was the only time we wanted to ignore nested INT 0x10 calls, but since we're also handling INT 0x6D
     * calls now (so that we don't miss video calls trigged by CALLF), we need to hook the IRET every time.
     */
    machine.nestedVideo++;              // TTY function performs nested cursor control calls (eg, AH=0x02)
    this.addIntReturn(addr, function onVideoReturn(nLevel) {
        machine.nestedVideo--;
    });
    return true;
}

/**
 * intVideoVGA(addr)
 *
 * Notification handler for all INT 0x6D software interrupts.
 *
 * Assuming you're using an IBM VGA, its BIOS initializes vector 6Dh to the VGA BIOS entry point,
 * and then it initializes vector 10h to issue INT 0x6D followed by an IRET.
 *
 * The ONLY reason we intercept this is to support newer versions of DOS (eg, PC DOS 6.x and 7.x),
 * which decided to use PUSHF/CALLF to call BIOS video functions instead of a normal INT 10h.  Since
 * our intVideo() handler will ignore nested calls, it will ignore any INT 0x6D that was generated by
 * an INT 0x10, but it will NOT ignore calls that were triggered by CALLF.
 *
 * Other more resilient ways to avoid the PUSHF/CALLF problem would be to patch the BIOS or install
 * our own handler somewhere in the machine's memory, but obviously that's more work, whereas so far,
 * I've managed to maintain a completely non-invasive solution.  The PCjs debugger also supports
 * execution breakpoints that are non-invasive (similar to how the 80386 debug registers work), so I
 * could tap into that functionality, but that's also a bit messy (and more work).
 *
 * @param {CPUx86} this
 * @param {number} addr
 * @returns {boolean} true to proceed with the INT 0x6D software interrupt, false to skip
 */
function intVideoVGA(addr)
{
    return intVideo.call(this, addr);
}

/**
 * intDisk(addr)
 *
 * @param {CPUx86} this
 * @param {number} addr
 * @returns {boolean} true to proceed with the INT 0x13 software interrupt, false to skip
 */
function intDisk(addr)
{
    if (geometryOverride) {
        let cpu = this;
        /*
         * We do basically the same thing our custom MBR does: build a drive table in unused
         * interrupt vector space (16 bytes spanning vectors 0xC0 to 0xC3) and then point the
         * drive table vector at 0x41 to that space.
         *
         * Unlike our custom MBR (see MBR.ASM), we need only do this for the primary drive,
         * because we don't currently support building or overriding additional drives.  Otherwise,
         * we would also need to build a secondary drive table (eg, in the space spanning vectors
         * 0xC4 to 0xC7) and update the secondary drive table vector at 0x46.
         *
         * I don't relish altering the machine state like this (using the custom MBR is much
         * cleaner and should actually be compatible with real hardware), but in order to ALSO
         * test the operating system's ability to initialize and format drives with custom
         * geometries from scratch, this seems the best alternative.
         */
        for (let off = 0; off < 16; off++) {
            let b = 0;
            switch(off) {
            case 0x00:
                b = driveInfo.nCylinders & 0xff;
                break;
            case 0x01:
                b = (driveInfo.nCylinders >> 8) & 0xff;
                break;
            case 0x02:
                b = driveInfo.nHeads;
                break;
            case 0x0E:
                b = driveInfo.nSectors;
                break;
            }
            cpu.setByte(0xC0 * 4 + off, b);
        }
        cpu.setShort(0x41 * 4, 0xC0 * 4);
        cpu.setShort(0x41 * 4 + 2, 0);
        geometryOverride = false;
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
    /*
     * An INT 19h issued from our own QUIT.COM is a signal to shut down.
     */
    if (this.getIP() == 0x102) {
        let sig = this.getSOWord(this.segCS, this.getIP()+2) + (this.getSOWord(this.segCS, this.getIP()+4) << 16);
        if (sig == 0x534A4350) {        // "PCJS"
            let cpu = this;             // INT 19h appears to have come from QUIT.COM
            let getString = function(seg, off, len) {
                let s = "";
                while (len--) {
                    let b = cpu.getSOByte(seg, off++);
                    if (!b) break;
                    s += CharSet.fromCP437(b);
                }
                return s;
            };
            let len = cpu.getSOByte(cpu.segDS, 0x80);
            let args = getString(cpu.segDS, 0x81, len).trim();
            if (!args) {                // if there were no arguments, then simply "quit"
                exit();
            }
            if (args.toLowerCase() != "/r") {
                printf("unrecognized option: %s\n", args);
                return false;           // for any unrecognized option, returning false will skip the INT 19h
            }                           // otherwise, for "QUIT /R", we simply reboot
        }
    }

    /*
     * Any other INT 19h should proceed normally; however, if the machine's hard drive(s) are using
     * custom geometries AND we didn't build a drive image with our custom MBR, then the drive table(s)
     * for those geometries will never get loaded into memory.  So we take this opportunity to install
     * them before the boot process begins.
     *
     * Unfortunately, the default INT 19h behavior resets ALL drive table vectors, so if we tried to
     * install our own drive tables now, they would immediately be replaced.  So instead we set a flag
     * (geometryOverride) telling our intDisk() handler to install new table(s) on the next INT 13h call.
     */
    if (driveInfo.driveCtrl == "PCJS" && driveInfo.driveType == 0) {
        geometryOverride = true;
    }

    /*
     * Also, in order to test floppy diskettes with non-standard sector sizes, we take this opportunity
     * to patch the Diskette Parameter Table (DPT) if we're booting a floppy with a non-standard sector size.
     * Since this table will generally be in ROM (well, at least on the first reboot, since no other code
     * will have had an opportunity to copy it elsewhere yet), we must use bus.setByteDirect() instead of
     * cpu.setByte().
     *
     * TODO: The "correct" way to deal with this will be to make my own boot sector, similar to the MBR I
     * wrote to deal with custom hard disk geometries.  It should be a trivial change, since most DOS boot
     * sectors already copy the DPT to RAM in order tweak other non-geometric parameters (eg, stepping rate).
     */
    if (!driveInfo.partitioned && driveInfo.cbSector && driveInfo.cbSector != 512) {
        let fpDPT = this.getLong(0x1E * 4);                     // get the DPT address from interrupt vector 0x1E
        let addrDPT = ((fpDPT >>> 16) << 4) + (fpDPT & 0xffff); // convert real-mode far pointer to physical address

        /*
         * The 4th byte in the DPT (at offset 3) indicates the # bytes/sector, and it is stored as a shift
         * count for the base sector size of 128 (128 << 0 = 128, 128 << 1 = 256, 128 << 2 == 512, etc).  So
         * the value to write is log2(cbSector) - log2(128).  We also update the EOT value in the 5th byte
         * (at offset 4), but that appears to be less critical.
         */
        this.bus.setByteDirect(addrDPT + 3, Math.log2(driveInfo.cbSector) - 7);
        this.bus.setByteDirect(addrDPT + 4, driveInfo.nSectors);

        /*
         * Unfortunately, this all seems to be for naught, because while stepping through the MS-DOS 3.30
         * initialization code in IO.SYS, I saw that when it loads the entire FAT into the top of available
         * memory, it calculates how many paragraphs all the FAT sectors will need, and it does so by shifting
         * the FAT sector count left 5 times.  Well, that only works for 512-byte sectors, because log2(512)
         * is 9 and log2(16) is 4, and 9 - 4 == 5.   This code begins at 70:2CA2 (look for the INT 12h memory
         * size call).
         *
         * When I tested MS-DOS 3.30 with a boot floppy formatted 40:2:5:1024, which contained only one FAT
         * sector, IO.SYS tried to read that one 1K FAT sector into segment 9FE0.  At most, only 512 bytes
         * could be returned, since there's no RAM at A000, and even if 512 bytes of FAT was all IO.SYS needed
         * in order continue loading the operating system, there was a second problem, which is that the
         * request spans a 64K DMA boundary, so the call will always return an error.
         *
         * Well, let's see how far we get if we shave 1K off available RAM.  That should at least avoid the
         * DMA boundary problem....
         */
        let kbRAM = this.getShort(0x413);
        if (kbRAM % 64 == 0) {
            this.setShort(0x413, --kbRAM);
        }

        /*
         * So, no, MS-DOS 3.30 is totally broken for non-512-byte sectors, because after it got past reading
         * the FAT (into segment 9FA0, thanks to the reduced memory size), it then proceeded to read MSDOS.SYS
         * one track at a time, starting 5C9:0, then 5C9:A00, then 5C9:1400, etc.  Well, that's great if all 5
         * sectors on each track are only 512 bytes, but not so great if they are all 1024 bytes.  The address
         * for each successive track is calculated by this code (presumably part of the IO.SYS disk driver):
         *
         *      AX=001E BX=0000 CX=0005 DX=0100 SP=06F4 BP=0005 SI=0522 DI=0482
         *      SS=0000 DS=0070 ES=05C9 PS=0296 V0 D0 I1 T0 S1 Z0 A1 P1 C0
         *      &0070:0E2E 2BC1             SUB      AX,CX                    ;cycles=5
         *      >> tr
         *      AX=0019 BX=0000 CX=0005 DX=0100 SP=06F4 BP=0005 SI=0522 DI=0482
         *      SS=0000 DS=0070 ES=05C9 PS=0202 V0 D0 I1 T0 S0 Z0 A0 P0 C0
         *      &0070:0E30 D0E1             SHL      CL,1                     ;cycles=2
         *      >> tr
         *      AX=0019 BX=0000 CX=000A DX=0100 SP=06F4 BP=0005 SI=0522 DI=0482
         *      SS=0000 DS=0070 ES=05C9 PS=0206 V0 D0 I1 T0 S0 Z0 A0 P1 C0
         *      &0070:0E32 02F9             ADD      BH,CL                    ;cycles=2
         *      >> tr
         *      AX=0019 BX=0A00 CX=000A DX=0100 SP=06F4 BP=0005 SI=0522 DI=0482
         *      SS=0000 DS=0070 ES=05C9 PS=0206 V0 D0 I1 T0 S0 Z0 A0 P1 C0
         *      &0070:0E34 EBCC             JMP      0E02                     ;cycles=2
         *
         * After a track is read, this code reduces the remaining sector count (AX) by the number of sectors just
         * read (CX == 5), then shifts CX left 1 bit (using a byte shift), and then adds that to the HIGH byte of the
         * offset for the next read (BX).  So it is effectively adding CX * 256 to BX -- or rather # sectors * 512,
         * thanks to the earlier shift -- which of course only works for 512-byte sectors.
         *
         * At this point, it's clear this is a pointless exercise -- at least for MS-DOS 3.30.  If earlier versions
         * were truly sector-size-agnostic, then the question becomes: had the developers forgotten about that "feature"
         * or were they consciously blowing it off?  If the latter, they certainly weren't blowing it off in a very
         * user-friendly manner.
         *
         * UPDATE: I took a quick look at PC DOS 2.0, and its boot sector immediately makes bad assumptions about sector
         * size.  Here's how it calculates the number of directory sectors from the number of root directory entries:
         *
         *      (entries * 32 + 0x1FF) / 0x200
         *
         * Things go wrong almost immediately, since it has miscalculated where the first data sector (ie, IO.SYS) is
         * located.  Kind of depressing, since DOS 2.0 *introduced* the BPB, which included a field for sector size....
         */
    }
    return true;
}

/**
 * intLoad(addr)
 *
 * If an INT 0x20 is followed by a RET and a "PCJS" signature, then it was issued by one
 * of our own programs (eg, LOAD.COM).
 *
 * @param {CPUx86} this
 * @param {number} addr
 * @returns {boolean} true to proceed with the INT 0x20 software interrupt, false to skip
 */
function intLoad(addr)
{
    let sig = this.getSOWord(this.segCS, this.getIP()+2) + (this.getSOWord(this.segCS, this.getIP()+4) << 16);
    if (sig == 0x534A4350) {            // "PCJS"
        let cpu = this;
        let getString = function(seg, off, len) {
            let s = "";
            while (len--) {
                let b = cpu.getSOByte(seg, off++);
                if (!b) break;
                s += CharSet.fromCP437(b);
            }
            return s;
        };
        let len = cpu.getSOByte(cpu.segDS, 0x80);
        let args = getString(cpu.segDS, 0x81, len).trim();
        if (this.getIP() == 0x102) {    // INT 20h appears to have come from LOAD.COM
            let aTokens = args.split(' ');
            let matchDrive = aTokens[0].match(/^([a-z]:?)$/i);
            if (matchDrive) {
                aTokens.splice(0, 1)
                printf("%s\n", loadDiskette(matchDrive[1], aTokens));
            } else {
                if (args.toLowerCase() == "info") {
                    printf(getDriveInfo());
                } else if (args) {
                    printf("invalid load command: \"%s\"\n", args);
                }
                else {
                    printf("usage: load [drive] [search options]\n");
                }
            }
        } else {                        // INT 20h assumed to have come from a hidden PCJS command app (eg, LS.COM)
            let off = cpu.getIP()+6;
            let len = cpu.getSOByte(cpu.segDS, off++);
            let appName = getString(cpu.segDS, off, len).trim();
            machineDir = getString(cpu.segDS, 0x120, -1);
            localCommand = appName + " " + args;
            setTimeout(function() { doCommand("exec " + localCommand, !!driveManifest); }, 0);
            return false;               // returning false should bypass the INT 20h and fall into the JMP $-2;
        }                               // we want the machine to spin its wheels until it has been unloaded/reloaded
    }
    return true;
}

/**
 * getDriveInfo()
 *
 * @returns {string}
 */
function getDriveInfo()
{
    let text = "\n";
    if (machine.id) {
        text += sprintf(" %s machine ID %s\n", machine.type, machine.id);
    }
    if (driveManifest || driveInfo.driveType >= 0) {
        let info = {
            controller: driveInfo.driveCtrl,
            type: driveInfo.driveType < 0? 0 : driveInfo.driveType,
            cylinders: driveInfo.nCylinders,
            heads: driveInfo.nHeads,
            sectorsPerTrack: driveInfo.nSectors,
            sectorSize: driveInfo.cbSector || 512,
            clusterSize: driveInfo.clusterSize,
            driveSize: driveInfo.driveSize.toFixed(1) + "Mb"
        };
        text += sprintf(" %s drive type %d, CHS %d:%d:%d, %s\n", info.controller, info.type, info.cylinders, info.heads, info.sectorsPerTrack, info.driveSize);
        let vol = driveInfo.volume;
        if (vol) {
            info.sectorSize = vol.cbSector;
            info.mediaID = sprintf("%#04x", vol.idMedia);
            let sectorsFAT = (vol.vbaRoot - vol.vbaFAT);
            info.typeFAT = vol.nFATBits || vol.idFAT;
            info.totalFATs = (sectorsFAT / Math.ceil(Math.ceil(vol.clusTotal * info.typeFAT / 8) / vol.cbSector))|0;
            info.sizeRoot = vol.rootEntries || vol.rootTotal;
            info.sectorsHidden = vol.lbaStart;
            info.sectorsReserved = vol.vbaFAT;
            info.sectorsFAT = (sectorsFAT / info.totalFATs)|0;
            info.sectorsRoot = Math.ceil((info.sizeRoot * 32) / vol.cbSector);
            info.sectorsTotal = vol.lbaTotal;
            info.sectorsData = info.sectorsTotal - info.sectorsReserved - sectorsFAT - info.sectorsRoot;
            info.clusterSize = vol.clusSecs * vol.cbSector;
            info.clustersTotal = vol.clusTotal;
            info.clustersFree = vol.clusFree;
            info.bytesTotal = vol.clusTotal * vol.clusSecs * vol.cbSector;
            info.bytesFree = vol.clusFree * vol.clusSecs * vol.cbSector;
            info.usageFinalFAT = (vol.cbSector - (Math.ceil(vol.clusTotal * info.typeFAT / 8) % vol.cbSector)) / vol.cbSector * 100;
            text += sprintf(" %d-bit FAT, %d-byte clusters, %d clusters\n", info.typeFAT, info.clusterSize, info.clustersTotal);
            if (fTest) {
                text += sprintf(" %d hidden sectors, %d reserved sectors\n", info.sectorsHidden, info.sectorsReserved);
            }
            text += sprintf(" %d FAT sectors (x%d), %d root sectors (%d entries)\n", info.sectorsFAT, info.totalFATs, info.sectorsRoot, info.sizeRoot);
            text += sprintf(" %d total sectors, %d data sectors, %d data bytes\n", info.sectorsTotal, info.sectorsData, info.bytesTotal);
        }
    }
    return text;
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
    if (machine.serial && machine.fnSendSerial) {
        machine.fnSendSerial.call(machine.serial, b);
    }
}

/**
 * checkMachine(sFile)
 *
 * We now allow a machine file to be specified with or without the --start option, with or without a path, and
 * with or without an extension.  If you don't use --start, then it must be the first non-option argument.  If you
 * don't specify a path, then it must either be in the current directory or the pc.js directory (ie, /tools/pc),
 * and if you don't specify an extension, we'll try ".json", ".json5", and ".xml", in that order.
 *
 * If no file can be found, we return an empty string.
 *
 * @param {string} sFile
 * @returns {string} (sFile with a path prepended and/or an extension appended as needed, or empty string if not found)
 */
function checkMachine(sFile)
{
    let sVerify = "", config;
    while (sFile) {
        if (sFile.indexOf("http") == 0) {
            break;
        }
        if (existsFile(sFile, false) && !existsDir(sFile, false)) {
            sVerify = sFile;
            break;
        }
        if (sFile.indexOf('.') > 0) {
            let s = path.join(pcjsDir, sFile);
            sVerify = existsFile(s, false)? s: "";
        } else {
            const exts = [".json", ".json5", ".xml"];
            for (let ext of exts) {
                let s = sFile + ext;
                if (existsFile(s, false)) {
                    sVerify = s;
                    break;
                }
                s = path.join(pcjsDir, s);
                if (existsFile(s, false)) {
                    sVerify = s;
                    break;
                }
            }
        }
        if (!sVerify) sFile = "";
        break;
    }
    if (sVerify) {
        if (sVerify.endsWith(".json")) {
            config = JSON.parse(readFileSync(sVerify, "utf8", true) || "{}");
            let machine = config['machine'];
            machineType = machine['type'] || machineType;
            sFile = machine? sVerify : "";
        } else {
            sFile = sVerify;
        }
    }
    if (sFile) {
        let driveCtrl;
        if (sFile.indexOf("pdp11") >= 0) {
            machineType = "pdp11";
        }
        if (config) {
            if (config['hdc']) {
                driveCtrl = config['hdc']['type'];
            }
            if (config['chipset'] && config['chipset']['model'] == "deskpro386") {
                driveCtrl = "COMPAQ";
            }
        } else {
            /*
             * If we can't crack open the config, we'll have to make inferences from the machine filename.
             */
            if (sFile.indexOf("5160") >= 0) {
                driveCtrl = "XT";
            } else if (sFile.indexOf("5170") >= 0) {
                driveCtrl = "AT";
            } else if (sFile.indexOf("compaq") >= 0) {
                driveCtrl = "COMPAQ";
            }
        }
        if (fFloppy) {
            /*
             * And even if we *can* crack open the config, our configs don't currently tell us the maximum diskette
             * capacity, so we have to infer that as well.
             */
            if (sFile.indexOf("5150") >= 0 || sFile.indexOf("5160") >= 0) {
                kbTarget = 360;
            }
        }
        if (driveCtrl && !driveOverride) {
            driveInfo.driveCtrl = driveCtrl;
        }
    }
    return sFile;
}

/**
 * newMachine()
 *
 * Before allowing a machine to be loaded, make sure any previously loaded machine is destroyed
 * and the fake "web page" context is reset.
 *
 * @returns {Object} (new machine object)
 */
function newMachine()
{
    if (Component && machine.id) {
        Component.destroyMachine(machine.id);
    }
    if (Web) {
        Web.doPageReset();
    }
    return {
        id:           "",
        type:         "",
        cpu:          null,
        dbg:          null,
        fdc:          null,
        hdc:          null,
        kbd:          null,
        serial:       null,
        fnSendSerial: null,
        rowCursor:    0,
        colCursor:    0,
        nestedVideo:  0
    };
}

/**
 * loadMachine(sFile)
 *
 * @param {string} sFile
 * @returns {string}
 */
function loadMachine(sFile)
{
    let result = "";
    let getFactory = function(config) {

        let removeFloppy = fNoFloppy;
        let typeMachine = config['type'] || (config['machine'] && config['machine']['type']) || machineType;

        machine.id = "";
        if (config['machine']) {
            machine.id = config['machine']['id'];
            machine.type = config['machine']['type'];
        }

        if (config['cpu']) {
            if (fHalt) {
                config['cpu']['autoStart'] = 0;
            }
            autoStart = config['cpu']['autoStart'];
            if (autoStart == undefined) {
                autoStart = !config['debugger'];
            }
        }

        if (config['debugger'] && fHalt) {
            let messages = configJSON['defaults'] && configJSON['defaults']['messages'];
            if (messages) {
                config['debugger']['messages'] = messages;
            }
        }

        if (config['hdc'] && driveInfo.partitioned) {
            let typeCtrl = config['hdc']['type'];
            let drives = config['hdc']['drives'];
            if (typeof drives == "string") {
                try {
                    drives = eval(drives);
                } catch(err) {
                    drives = null;
                }
            }
            if (!drives) drives = [];
            if (driveInfo.driveCtrl != "PCJS") {
                let driveCtrl = driveInfo.driveCtrl;
                if (driveCtrl == "COMPAQ") driveCtrl = "AT";    // COMPAQ is AT-compatible, so suppress the warning
                if (driveCtrl != typeCtrl) {
                    printf("warning: drive controller (%s) does not match actual controller (%s)\n", driveCtrl, typeCtrl);
                }
            }
            /*
             * If we don't have a drive type (eg, if no drive was built and no drive type was explicitly set),
             * we would still like to match the target capacity with a drive.  Convert the capacity from Mb to
             * sectors and then give it a go.
             *
             * And even if we do have a drive type, findDriveType() should simply verify that the type is valid.
             */
            if (DiskInfo.findDriveType(driveInfo, (kbTarget * 1024 / (driveInfo.cbSector || 512))|0, device)) {
                if (fVerbose) {
                    printf("%s drive type %2d: %4d cylinders, %2d heads, %2d sectors/track (%5sMb)\n", driveInfo.driveCtrl, driveInfo.driveType, driveInfo.nCylinders, driveInfo.nHeads, driveInfo.nSectors, driveInfo.driveSize.toFixed(1));
                }
            }
            if (driveInfo.driveType >= 0) {
                let driveType = driveInfo.driveType;
                if (!driveType && driveInfo.driveCtrl == "PCJS") {
                    /*
                     * When a custom geometry is being used, we need to set the drive type to the FIRST type used
                     * by the current drive controller (the PC XT started with type 0, while the PC AT started with 1).
                     */
                    driveType = (typeCtrl == "XT")? 0 : 1;
                    if (typeCtrl == "XT" && driveInfo.nSectors != 17) {
                        printf("warning: XT controller requires 17 sectors/track\n");
                    }
                }
                drives[0] = {
                    'type': driveType,
                    'name': (driveInfo.driveSize|0) + "Mb Hard Disk"
                };
                if (driveManifest || !localDir && localDisk) {
                    drives[0]['path'] = localDisk;
                    /*
                     * If we built a drive image, we worked hard to make it bootable, so we're going to boot from it
                     * (ie, remove any boot floppy).  Whereas any prebuilt drive image may or may not be bootable, so
                     * in that case, use --nofloppy if you want any boot floppy removed.
                     */
                    if (driveManifest) {
                        removeFloppy = true;
                    }
                }
                if (driveOverride) {
                    let type = driveInfo.driveCtrl;
                    if (driveInfo.driveCtrl == "PCJS") {
                        type = driveInfo.driveCtrl + '-' + typeCtrl;
                    }
                    config['hdc']['type'] = type;
                }
            }
            config['hdc']['drives'] = drives;
        }

        if (config['fdc']) {
            if (removeFloppy) {
                config['fdc']['autoMount'] = "{A:{name:\"None\"}}";
            } else if (fFloppy || systemOverride) {
                let disk, name;
                if (fFloppy) {
                    disk = localDisk;
                    name = (path.basename(localDir).toUpperCase() || "User-defined") + " Diskette";
                } else {
                    disk = getSystemDisk(systemType, systemVersion);
                    name = systemType.toUpperCase() + ' ' + sprintf("%.2f", parseFloat(systemVersion));
                }
                if (disk) {
                    config['fdc']['autoMount'] = "{A:{name:\"" + name + "\",path:\"" + disk + "\"}}";
                    savedState = "";
                }
            }
        }

        if (sFile.endsWith(savedMachine) && config['computer'] && savedState) {
            config['computer']['state'] = path.join(pcjsDir, savedState);
        }

        let args = JSON.stringify(config);
        loadModules(machines[typeMachine]['factory'], machines[typeMachine]['modules'], function() {
            initMachine(args);
        });
    };
    if (machine.cpu) {
        /*
         * Safety check: if newMachine() was called, then this shouldn't happen.
         */
        result = "machine already loaded";
    }
    else if (sFile) {
        if (sFile.indexOf(".json") > 0) {
            result = readJSON(sFile, getFactory);
        }
        else if (sFile.indexOf(".xml") > 0) {
            let xml = {_resolving: 0};
            result = readXML(sFile, xml, 'machine', null, 0, getFactory);
        } else {
            result = "unsupported machine file: " + sFile;
        }
        if (typeof result != "string") result = "";
    }
    return result;
}

/**
 * reloadMachine()
 */
async function reloadMachine()
{
    let result = "";
    if (driveManifest) {
        result = await buildDisk(localDir);
        if (!result) {
            loadMachine(localMachine);
        }
    } else {
        result = loadMachine(localMachine);
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
async function readJSON(sFile, done)
{
    let result = "";
    try {
        let sConfig = await readFileAsync(sFile);
        /*
         * Since our JSON files may contain comments, hex values, etc, use eval() instead of JSON.parse().
         */
        let config = eval('(' + sConfig + ')');
        done(config);
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
async function readXML(sFile, xml, sNode, aTags, iTag, done)
{
    let result = "";
    let idAttrs = '@';
    try {
        xml._resolving++;
        let sXML = await readFileAsync(sFile);
        let parser = new xml2js.Parser({attrkey: idAttrs});
        parser.parseString(sXML, function parseXML(err, xmlNode) {
            if (!aTags) {
                xml[sNode] = xmlNode[sNode];
            } else {
                /*
                 * Preserve any non-ref attributes in the tag we're updating.
                 */
                let attrs = aTags[iTag][idAttrs];
                aTags[iTag] = xmlNode[sNode];
                for (let attr in attrs) {
                    if (attr != 'ref') {
                        aTags[iTag][idAttrs][attr] = attrs[attr];
                    }
                }
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
                             * Any non-ref attributes in the tag should override those in the referenced file.
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
                    let config = convertXML(xml, idAttrs);
                    done(config);
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
 * checkCommand(sDir, sCommand)
 *
 * An external DOS command is allowed if we can find a matching COM, EXE, or BAT file somewhere
 * within the specified directory.  Internal DOS commands are allowed if they're on the list below.
 *
 * Multiple commands are allowed, separated by commas, but only the first one will be checked
 * for validity; you can also use semicolons, but since most shells require those to be "escaped"
 * with backslashes, commas make life easier.  You can also put quotes around your command(s) if
 * you want to use semicolons without escaping them (and you may need to use semicolons if any
 * of your commands must use commas).
 *
 * NOTE: The list of internal commands below is not intended to be exhaustive; it's just a start.
 *
 * @param {string} sDir
 * @param {string} sCommand
 * @returns {string} (original command, or empty string if not a valid command or program name)
 */
function checkCommand(sDir, sCommand)
{
    if (sCommand) {
        let aParts = sCommand.split(/([ ,;])/);
        let sProgram = aParts[0].toUpperCase();
        const aInternal = [
            "BREAK",
            "CD",
            "CLS",      // this goes beyond the scope of our limited TTY support, so nothing will happen
            "CHDIR",
            "COPY",
            "CTTY",
            "DATE",     // NOTE: this was actually an external command in DOS 1.0 (became internal in DOS 1.1)
            "DEL",
            "DIR",
            "ECHO",
            "ERASE",
            "FOR",
            "GOTO",
            "IF",
            "LOAD",     // since we create LOAD.COM on the fly, it won't exist externally, so we treat it like an internal command
            "MKDIR",
            "PATH",
            "PAUSE",
            "PROMPT",
            "QUIT",     // since we create QUIT.COM on the fly, it won't exist externally, so we treat it like an internal command
            "REM",
            "REN",
            "RENAME",
            "RMDIR",
            "SET",
            "SHIFT",
            "TIME",     // NOTE: this was actually an external command in DOS 1.0 (became internal in DOS 1.1)
            "TYPE",
            "VER",
            "VOL"
        ];

        if (aInternal.indexOf(sProgram) < 0) {
            if (sProgram.indexOf('.') < 0) {
                sProgram += ".{COM,EXE,BAT}";
            }
            if (sProgram.indexOf('/') < 0 && sProgram.indexOf('\\') < 0) {
                sProgram = path.join(sDir, "**", sProgram);
            }
            let aFiles = glob.sync(sProgram);
            if (!aFiles.length) {
                sCommand = "";
            } else {
                let sArguments = sCommand.slice(aParts[0].length);
                sCommand = aFiles[0];
                if (sCommand.indexOf(sDir) == 0) {
                    sCommand = sCommand.slice(sDir.length);
                }
                sCommand = sCommand.replace(/\//g, '\\');
                sCommand = (sCommand[0] != '\\'? '\\' : '') + sCommand + sArguments;
            }
        }
    }
    return sCommand;
}

/**
 * getSystemDisk(type, version)
 *
 * If we don't recognized the system type (eg, "pcdos", "msdos"), or there is no version information,
 * we return an empty string.  If we recognize the version, we return the name of the system diskette;
 * otherwise, we return an array of available versions.
 *
 * @param {string} type
 * @param {string} version
 * @returns {string}
 */
function getSystemDisk(type, version)
{
    let sSystemDisk = "";
    let system = configJSON['systems']?.[type];
    if (system && system.versions) {
        let verNumber = sprintf("%.2f", +parseFloat(version));
        let versionInfo = system.versions[version.toUpperCase()] || system.versions[verNumber];
        if (versionInfo) {
            let sSystemPath = "/diskettes/pcx86/sys/dos/" + system.vendor + "/" + verNumber + "/";
            if (typeof versionInfo == "string") {
                sSystemDisk += sSystemPath + versionInfo + ".json";
            } else {
                sSystemDisk = sSystemPath + versionInfo.disk + ".json";
            }
        } else {
            return Object.keys(system.versions);
        }
    }
    return sSystemDisk;
}

/**
 * getSystemFiles(type, version)
 *
 * @param {string} type
 * @param {string} version
 * @returns {Array.<string>}
 */
function getSystemFiles(type, version)
{
    let aSystemFiles = [];
    let system = configJSON['systems']?.[type];
    if (system && system.versions) {
        let verNumber = sprintf("%.2f", +parseFloat(version));
        let versionInfo = system.versions[version.toUpperCase()] || system.versions[verNumber];
        if (versionInfo) {
            if (typeof versionInfo == "string") {
                aSystemFiles = system.files;
            } else {
                aSystemFiles = versionInfo.files;
            }
        }
    }
    return aSystemFiles;
}

/**
 * buildDisk(sDir, sCommand, sDisk, fLog)
 *
 * Builds a bootable floppy or hard disk image containing all files in the current directory.
 *
 * At present, the image size is defaults to 10Mb (which corresponds to an XT type 3 or AT type 1 drive)
 * and the operating system files default to MS-DOS 3.20.  Use --sys and --ver command-line options to
 * override those defaults.  The allowed systems are currently "msdos" and "pcdos", and the allowed versions
 * are any available in the PCjs diskette repo.
 *
 * Choice of hardware (ie, drives other than 10Mb) will be a bit trickier, because that also requires
 * tweaking the machine configuration file to specify a compatible drive type and customizing the master
 * boot record (currently we use a prebuilt ".mbr" file).  There are no plans to support more than one
 * partition/one volume, and to support volumes larger than 32Mb, we'll have to make sure your choice
 * of operating system supports it (eg, COMPAQ MS-DOS 3.31).
 *
 * The first three system files on the disk image will be those listed below (eg, IO.SYS, MSDOS.SYS, and
 * COMMAND.COM); if any of those files already exist in the current directory, ours will take precedence.
 * As for AUTOEXEC.BAT, we read any existing file (or create an empty file) and append the provided command.
 *
 * @param {string} sDir
 * @param {string} [sCommand] (eg, "COPY A:*.COM C:"; multiple commands can be separated by commas or semicolons)
 * @param {string} [sDisk]
 * @param {boolean} [fLog]
 * @returns {string} (error message, if any)
 */
async function buildDisk(sDir, sCommand = "", sDisk = "", fLog = false)
{
    let kbCapacity = kbTarget;
    let system = configJSON['systems']?.[systemType];
    if (!system) {
        return "unsupported system type: " + systemType;
    }

    let sSystemDisk = getSystemDisk(systemType, systemVersion);
    if (!sSystemDisk) {
        return "unknown " + systemType + " version: " + systemVersion;
    } else if (typeof sSystemDisk != "string") {
        return "available " + systemType + " versions: " + JSON.stringify(sSystemDisk);
    }

    let verDOS = +parseFloat(systemVersion);        // parseFloat() is forgiving of any non-numeric suffix, the "+" operator is not
    let verDOSMajor = verDOS | 0;
    if (verDOSMajor < 2 && !fFloppy) {
        return "DOS 2.0 or greater required (otherwise use --floppy)";
    }

    let diSystem = await readDiskAsync(sSystemDisk);
    if (!diSystem) {
        return "missing " + systemType + " system diskette: " + sSystemDisk;
    }

    let sSystemMBR = systemMBR;
    if (sSystemMBR.indexOf(path.sep) < 0) {
        sSystemMBR = path.join(pcjsDir, sSystemMBR);
    }

    let dbMBR = readFileSync(sSystemMBR, null);
    if (!dbMBR || dbMBR.length < 512) {
        return "invalid system MBR: " + sSystemMBR;
    }
    if (dbMBR.length > 512) dbMBR = dbMBR.slice(dbMBR.length - 512);

    let bootDrive = fFloppy? 0x00 : 0x80;
    let bootLetter = fFloppy? 'A' : 'C';

    /*
     * Alas, DOS 2.x COMMAND.COM didn't support running hidden files, so attrHidden will be zero for any
     * "helper binaries" we add to the disk image (and for COMMAND.COM itself).
     */
    driveInfo.files = [];
    driveInfo.verDOS = verDOS;
    driveInfo.bootDrive = bootDrive;
    let attrHidden = verDOSMajor > 2 && !fBare? DiskInfo.ATTR.HIDDEN : 0;
    let aSystemFiles = getSystemFiles(systemType, systemVersion);
    for (let name of aSystemFiles) {
        let desc = diSystem.findFile(name);
        if (desc) {
            desc.attr = +desc.attr;
            desc.attr |= attrHidden;
            driveInfo.files.push(desc);
        } else {
            return "missing system file: " + name;
        }
    }

    /*
     * In addition to the system files, we also create a hidden LOAD.COM "helper binary" in the root, which
     * immediately exits with an "INT 20h" instruction.  Our intLoad() interrupt handler should intercept it,
     * determine if the interrupt came from LOAD.COM, and if so, process it as an internal "load [drive]" command.
     */
    if (!fBare) {
        driveInfo.files.push(makeFileDesc(sDir, "LOAD.COM", [0xCD, 0x20, 0xC3, 0x90, 0x50, 0x43, 0x4A, 0x53, 0x00], attrHidden));
    }

    /*
     * We also create a hidden QUIT.COM "helper binary" in the root, which executes an "INT 19h" to reboot the
     * machine. Our intReboot() interrupt handler should intercept it, allowing us to gracefully invoke saveDisk()
     * to look for any changes and then terminate the machine.
     */
    if (!fBare) {
        driveInfo.files.push(makeFileDesc(sDir, "QUIT.COM", [0xCD, 0x19, 0xC3, 0x90, 0x50, 0x43, 0x4A, 0x53, 0x00], attrHidden));
    }

    /*
     * Finally, for any apps listed in configFile, create hidden "helper binaries" in the root, each of which will
     * execute an "INT 20h" that will trigger an exec of the corresponding local command.  Note that 'apps' is a
     * collection of objects, where the keys are the app names and object properties like 'exec' tell us
     * what local program to execute.
     *
     * NOTE: When I say these binaries will be hidden, well, that depends on the attrHidden setting (see above).
     */
    if (!fBare) {
        let apps = configJSON['apps'] || {};
        let appNames = Object.keys(apps);
        for (let appName of appNames) {
            if (appName[0] == '.') continue;
            let appFile = appName.toUpperCase() + ".COM";
            let appContents = [0xB4, 0x47, 0xB2, 0x03, 0xBE, 0x20, 0x01, 0xCD, 0x21, 0xCD, 0x20, 0xEB, 0xFE, 0x50, 0x43, 0x4A, 0x53];
            if (fFloppy) appContents[3] = 0x01;
            appContents.push(appName.length);
            for (let j = 0; j < appName.length; j++) {
                appContents.push(appName.charCodeAt(j));
            }
            driveInfo.files.push(makeFileDesc(sDir, appFile, appContents, attrHidden));
        }
    }

    /*
     * We also make sure there's an AUTOEXEC.BAT.  If one already exists, then we make sure there's
     * a PATH command, to which we prepend "C:\" if not already present.  We create an AUTOEXEC.BAT
     * if it doesn't exist, but in that case, we also mark it HIDDEN, since it's a file we created, not
     * the user.  Ensuring that "C:\" is in the PATH ensures that the user can invoke "quit" to run
     * our hidden QUIT.COM program in the root of the drive, regardless of the current directory.
     */
    let attr = DiskInfo.ATTR.ARCHIVE;
    let data = readFileSync(path.join(sDir, "AUTOEXEC.BAT"), "utf8", true);
    if (data) {
        if (verDOS >= 3.30 && !data.indexOf("ECHO OFF")) {
            data = '@' + data;
        }
    } else {
        data = verDOSMajor < 2? "" : (verDOS >= 3.30? '@' : '') + "ECHO OFF\n";
        attr |= attrHidden;
    }
    let matchPath = data.match(/^PATH\s*(.*)$/im);
    if (matchPath) {
        let matchPathRoot = matchPath[1].match(new RegExp("(^|;|" + bootLetter + ":|)\\\\(;|$)", "i"));
        if (!matchPathRoot) {
            data = data.replace(/^PATH\s*(.*)$/im, "PATH " + bootLetter + ":\\;$1");
        }
    } else if (verDOSMajor >= 2) {
        data += "PATH " + bootLetter + ":\\\n";
    }

    if (sCommand) {
        let aCommands = sCommand.split(sCommand.indexOf(';') >= 0? ';' : ',');
        for (let command of aCommands) {
            data += command + "\n";
        }
    }
    if (fTest) {
        data += "quit\n";
    }
    if (machineDir) data += "CD " + machineDir + "\n";
    if (data.length) {
        /*
         * Automatically normalize all line-endings in AUTOEXEC.BAT.
         */
        let dataNew = CharSet.toCP437(data).replace(/\n/g, "\r\n").replace(/\r+/g, "\r");
        driveInfo.files.push(makeFileDesc(sDir, "AUTOEXEC.BAT", dataNew, attr));
    }

    /*
     * Load the boot sector from the system diskette we read above, and use it to update the boot
     * sector on the disk image.
     *
     * NOTE: It seems that many (if not all) DOS boot sectors did NOT rely on the DL register to
     * contain the boot drive # (0x00 for floppy drive, 0x80 for hard drive), even though the BIOS
     * passes that information to the master boot record (MBR) and the DOS MBR preserves and passes
     * it on to the boot sector.  And perhaps the key point is "DOS MBR", because DOS also had to
     * work with third-party MBRs, some of which may have trashed DL.
     */
    let verBPB = 0;
    let dbBoot = getDiskSector(diSystem, 0);
    if (verDOS < 2.0) {
        /*
         * So to get this far, fFloppy had to be true, so in addition to setting the correct
         * BPB version, we should also set kbCapacity to 160 for 1.0 or 320 for 1.1.
         */
        verBPB = 1;
        if (verDOS < 1.1) {
            kbCapacity ||= 160;
        }
        else {
            /*
             * Even though PC DOS 1.1 added support for 320K, the PC DOS 1.1 boot diskette was formatted
             * as 160K, so that it could also boot on single-sided drives.  So, if we really want to boot
             * from a 320K diskette, we have to make the same boot sector modifications that the PC DOS 1.1
             * FORMAT utility would make: modify the starting sector # and head # of IBMBIO.COM that's
             * embedded in the boot sector at offset 0x0003 (ie, from 0x08 and 0x00 to 0x03 and 0x01).
             *
             * The location of IBMBIO.COM differs between 160K and 320K diskettes because the latter used a
             * larger root directory (7 sectors instead of 4).
             *
             * See /software/pcx86/sys/dos/ibm/1.10/debugger/README.md for more details.
             */
            kbCapacity ||= 320;
            if (kbCapacity == 320 && dbBoot.readUInt16LE(0x0003) == 0x0008 && dbBoot.readUInt16LE(0x0005) == 0x0014) {
                dbBoot.writeUInt16LE(0x0103, 0x0003);
                /*
                 * As an added precaution, zero the BPB region, since any BPB would have been for a 160K diskette,
                 * not a 320K diskette.
                 */
                for (let off = DiskInfo.BPB.SECBYTES; off < DiskInfo.BPB.BOOTDRIVE; off++) {
                    dbBoot.writeUInt8(0x00, off);
                }
            }
        }
    }
    else if (verDOS >= 2.0 && verDOS < 3.2) {
        verBPB = 2;
        if (fFloppy) {
            kbCapacity ||= 360;
        }
    }
    else {
        if (fFloppy) {
            kbCapacity ||= (verDOS < 3.3? 720 : 1440);
        }
        if (verDOS >= 3.2 && verDOS < 4.0) {
            /*
             * When DOS 3.2 writes the boot sector to the media, it inserts the boot drive at offset 0x1fd
             * (just before the 0x55,0xAA signature).
             *
             * Wikipedia claims that offset 0x1fd was used "only in DOS 3.2 to 3.31 boot sectors" and that
             * in "OS/2 1.0 and DOS 4.0, this entry moved to sector offset 0x024 (at offset 0x19 in the EBPB)".
             */
            dbBoot.writeUInt8(bootDrive, 0x1FD);                // boot sector offset 0x01FD
        }
        else if (verDOS >= 4.0) {
            dbBoot.writeUInt8(bootDrive, DiskInfo.BPB.DRIVE);   // boot sector offset 0x0024
        }
    }

    driveManifest = null;
    let done = function(di) {
        if (di) {
            /*
             * This is where I would normally perform the minimum version check (see below).
             */
            let manifest = di.getFileManifest(null, true);
            if (di.volTable[0] && di.volTable[0].iPartition >= 0) {
                /*
                 * Since the disk is partitioned, we need to update the Master Boot Record (MBR),
                 * hence the special volume number (-1).  However, if the MBR is ours AND a custom
                 * geometry has been specified, then we need to use an *extra* special volume number
                 * (-2) to ensure that our MBR's drive parameter table is updated, too.
                 *
                 * TODO: I used to update the MBR drive parameter table ONLY when driveCtrl is "PCJS",
                 * but for some reason, it's also needed for some "COMPAQ" configurations.  For example:
                 *
                 *      pc.js --sys=compaq:3.31 --target=40M
                 *
                 * will fail even though we're supposedly using a standard COMPAQ drive type (13) and
                 * not a custom geometry.  One possible explanation is that my HDC component is not
                 * setting the drive type in CMOS in the manner that the COMPAQ BIOS expects.
                 */
                let iVolume = -1;
                if (sSystemMBR.indexOf("pcjs.mbr") >= 0 && (driveInfo.driveCtrl == "PCJS" || driveInfo.driveCtrl == "COMPAQ")) {
                    iVolume = -2;
                }
                di.updateBootSector(dbMBR, iVolume);
            }
            /*
             * Now update the volume boot record (VBR) for the boot drive; for that, the volume number
             * is always zero because pc.js only builds one volume per drive.
             */
            di.updateBootSector(dbBoot, 0, verBPB);
            /*
             * Time to update the name of localDisk and then write the disk.  We must create a physical file
             * (preferably JSON, since that tells us more about the disk, its layout, and its contents) because
             * currently that's the only way to to pass a disk image to the HDC component.
             */
            if (!sDisk) {
                localDisk = localDisk.replace(path.basename(localDisk), di.getName() + ".json");
            } else {
                localDisk = sDisk.indexOf(path.sep) < 0? path.join(pcjsDir, "disks", sDisk) : sDisk;
            }
            if (sDisk || fLog) printf("building drive: %s\n", localDisk);
            if (writeDiskSync(localDisk, di, false, 0, true, true)) {
                updateDriveInfo(di);
                /*
                 * I've deferred the minimum version check until now, because even if we can't (well, shouldn't)
                 * use the drive image, I'd still like to be able to inspect it.
                 */
                if (di.minDOSVersion && di.minDOSVersion > verDOS) {
                    printf("error: drive requires DOS %s or later\n", di.minDOSVersion.toFixed(2));
                    return;
                }
                driveManifest = manifest;
            }
        }
    }

    if (!sDir.endsWith('/')) sDir += '/';
    if (fLog) printf("reading files: %s\n", sDir);

    readDir(sDir, 0, 0, diskLabel == "."? path.basename(sDir) : diskLabel, null, fNormalize, kbCapacity, maxFiles, false, driveInfo, done);

    return driveManifest? "" : "unable to build drive";
}

/**
 * readDiskIndex()
 *
 * Returns diskIndex object (properties are disk names).
 *
 * @returns {Object}
 */
function readDiskIndex()
{
    let total = 0;
    let diskIndex = {};
    let aDiskettes = machine.fdc && machine.fdc.aDiskettes;
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
 * readFileIndex(diskIndex)
 *
 * Returns fileIndex (properties are file names) built from diskIndex.
 *
 * @param {Object} diskIndex
 * @returns {Object}
 */
function readFileIndex(diskIndex)
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
 * updateDriveInfo(di)
 *
 * @param {DiskInfo} di
 */
function updateDriveInfo(di)
{
    if (di.getDriveType(driveInfo)) {
        if (fVerbose) {
            printf("%s drive type %2d: %4d cylinders, %2d heads, %2d sectors/track (%5sMb)\n", driveInfo.driveCtrl, driveInfo.driveType, driveInfo.nCylinders, driveInfo.nHeads, driveInfo.nSectors, driveInfo.driveSize.toFixed(1));
        }
    }
    let volume = di.volTable[0];
    if (volume) {
        driveInfo.volume = volume;
        if (driveInfo.typeFAT && driveInfo.typeFAT != volume.nFATBits) {
            printf("warning: %d-bit FAT replaced with %d-bit FAT\n", driveInfo.typeFAT, volume.nFATBits);
        }
        if (driveInfo.clusterSize && driveInfo.clusterSize != volume.clusSecs * volume.cbSector) {
            printf("warning: %d-byte clusters replaced with %d-bytes clusters\n", driveInfo.clusterSize, volume.clusSecs * volume.cbSector);
        }
        if (driveInfo.rootEntries && driveInfo.rootEntries != volume.rootEntries) {
            printf("%d root entries replaced with %d root entries\n", driveInfo.rootEntries, volume.rootEntries);
        }
    }
}

/**
 * mapDir(machineDir)
 *
 * Maps the given machine directory to a local directory, using the 'origin' paths in the drive
 * manifest created by buildDisk() and updated by saveDisk().
 *
 * Without a drive manifest, all we can do is join the machine directory to the local directory
 * of the drive's root and hope for the best.  If any part of the machine directory is an 8.3
 * mapping to a non-8.3 local directory, the mapping will not be correct, so you really need an
 * up-to-date drive manifest.
 *
 * Note that machine directories (ie, DOS directories) always use backslashes, manifest paths
 * paths always use forward slashes, and manifest origins always use platform-dependent separators.
 *
 * @param {string} machineDir
 * @returns {string}
 */
function mapDir(machineDir)
{
    let newDir = path.join(localDir, machineDir.replace(/\\/g, path.sep));
    if (driveManifest) {
        machineDir = machineDir.replace(/\\/g, '/');
        if (machineDir[0] != '/') machineDir = '/' + machineDir;
        for (let i = 0; i < driveManifest.length; i++) {
            let item = driveManifest[i];
            if (!(item.attr & DiskInfo.ATTR.SUBDIR)) continue;
            if (item.path == machineDir) {
                newDir = item.origin;
                break;
            }
        }
    }
    return newDir;
}

/**
 * saveDisk(sDir, sDrive)
 *
 * If we built a drive on entry, this checks the drive on exit for any changes that need to be saved.
 *
 * @param {string} sDir
 * @param {string} [sDrive]
 * @returns {boolean}
 */
function saveDisk(sDir, sDrive)
{
    let controller, iDrive = 0;
    if (sDrive) {
        controller = machine.fdc;
        iDrive = sDrive.charCodeAt(0) - 'A'.charCodeAt(0);
        if (iDrive > 1) {
            if (iDrive != 2) {
                return false;
            }
            controller = machine.hdc;
            iDrive = 0;
        }
    } else {
        controller = fFloppy? machine.fdc : machine.hdc;
    }
    let imageData = controller && controller.aDrives && controller.aDrives.length && controller.aDrives[iDrive].disk;
    if (imageData) {
        let di = new DiskInfo(device, "PCJS");
        if (di.buildDiskFromJSON(imageData, true)) {
            if (driveManifest && sDir == localDir) {
                let oldManifest = driveManifest;
                let newManifest = di.getFileManifest(null, true);
                /*
                 * We now have the old and new manifests, and both should be sorted; time to look for differences.
                 */
                let removedDirs = [];
                let iOld = 0, iNew = 0;
                let compareContents = function(a, b) {
                    let aContents = a.contents || [];
                    let bContents = b.contents || [];
                    return aContents.length === bContents.length && aContents.every((element, i) => element === bContents[i]);
                };

                let curMappings = {"/": sDir};
                while (iOld < oldManifest.length || iNew < newManifest.length) {

                    let oldItem = oldManifest[iOld] || {};
                    let newItem = newManifest[iNew] || {};
                    let oldAttr = +oldItem.attr || 0;
                    let newAttr = +newItem.attr || 0;
                    let oldDate = device.parseDate(oldItem.date, true);
                    let newDate = device.parseDate(newItem.date, true);

                    if (oldAttr & DiskInfo.ATTR.SUBDIR) {
                        curMappings[oldItem.path] = oldItem.origin;
                    }

                    let newItemPath = "";
                    if (newItem.path) {
                        let newItemDir, newItemName = "";
                        let i = newItem.path.lastIndexOf("/");
                        newItemDir = newItem.path.slice(0, i) || "/";
                        newItemName = newItem.path.slice(i + 1);
                        if (!curMappings[newItemDir]) {
                            newItemPath = path.join(sDir, newItem.path);
                            if (fDebug) printf("joining: %s => %s\n", newItem.path, newItemPath);
                        } else {
                            newItemPath = path.join(curMappings[newItemDir], newItemName);
                            if (newItemDir == "/") newItemDir = "";
                            if (fDebug) printf("mapping: %s/%s => %s\n", newItemDir, newItemName, newItemPath);
                        }
                        if ((newAttr & DiskInfo.ATTR.SUBDIR) && !curMappings[newItem.path]) {
                            curMappings[newItem.path] = newItemPath;
                        }
                    }

                    if (oldItem.path == newItem.path) {
                        if (oldAttr == newAttr) {
                            /*
                             * Even if both entries are SUBDIR or VOLUME, that's OK, because those entries don't have
                             * contents, so the compare will succeed and writeFileSync() will be bypassed.
                             */
                            if (!compareContents(oldItem, newItem)) {
                                if (fDebug) printf("updating: %s\n", newItemPath);
                                writeFileSync(newItemPath, newItem.contents, false, true);
                            } else {
                                // if (fDebug) printf("skipping: %s\n", newItemPath);
                            }
                        } else {
                            /*
                             * Here's where things get complicated, because we could have scenarios like a directory removed
                             * and a file with the same name created in its place.
                             */
                            try {
                                fs.chmodSync(newItemPath, (newAttr & DiskInfo.ATTR.READONLY)? 0o444 : 0o666);
                            } catch (err) {
                                printf("%s\n", err);
                            }
                        }
                        if (oldDate.getTime() != newDate.getTime()) {
                            try {
                                fs.utimesSync(newItemPath, newDate, newDate);
                            } catch (err) {
                                printf("%s\n", err);
                            }
                        }
                        iOld++;
                        iNew++;
                    } else if (iNew >= newManifest.length || oldItem.path < newItem.path) {
                        /*
                         * Unfortunately, whenever a directory has been removed, we see the directory first,
                         * followed by any files or other directories that it used to contain.  While we could
                         * perform a recursive removal of the directory right now, that comes with some inherent
                         * risk *and* will cause all subsequent unlink() calls for any contained files to fail.
                         * So instead, we simply queue the directory for removal later.
                         */
                        if (!(oldAttr & (DiskInfo.ATTR.HIDDEN | DiskInfo.ATTR.VOLUME))) {
                            let oldItemPath = oldItem.origin || path.join(sDir, oldItem.path);
                            if (oldAttr & DiskInfo.ATTR.SUBDIR) {
                                removedDirs.push(oldItemPath);
                            } else {
                                if (fDebug) printf("removing: %s\n", oldItemPath);
                                try {
                                    fs.unlinkSync(oldItemPath);
                                } catch(err) {
                                    printf("%s\n", err.message);
                                }
                            }
                        }
                        iOld++;
                    } else {
                        if (fDebug) printf("creating: %s\n", newItemPath);
                        try {
                            if (newAttr & DiskInfo.ATTR.SUBDIR) {
                                fs.mkdirSync(newItemPath);
                            } else {
                                writeFileSync(newItemPath, newItem.contents, true, false);
                            }
                            fs.utimesSync(newItemPath, newDate, newDate);
                            if (newAttr & DiskInfo.ATTR.READONLY) {
                                fs.chmodSync(newItemPath, 0o444);
                            }
                        } catch(err) {
                            printf("%s\n", err.message);
                        }
                        iNew++;
                    }
                }
                while (removedDirs.length) {
                    let dir = removedDirs.pop();
                    if (fDebug) printf("removing: %s\n", dir);
                    try {
                        fs.rmdirSync(dir);
                    } catch(err) {
                        printf("%s\n", err.message);
                    }
                }
            }
            if (sDir != localDir) {
                if (sDir.indexOf('.') < 0) sDir += ".img";
                if (sDir.indexOf(path.sep) < 0) sDir = path.join(pcjsDir, "disks", sDir);
                printf("saving drive as %s\n", sDir);
                writeDiskSync(sDir, di, false, 0, true, true);
            }
            return true;
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
 * add to the search criteria of whichever dash token is in effect; initially, "--disk" is in effect, which means that:
 *
 *      load a: pc dos
 *
 * is equivalent to:
 *
 *      load a: --disk pc dos
 *
 * You can also combine criteria to further narrow the list of matching diskettes:
 *
 *      load a: --disk pc dos --file chkdsk --date 1982
 *
 * The two primary criteria are disk and file criteria.  Other criteria are secondary; for example, any date criteria
 * will be applied only after any file criteria.
 *
 * If more than one disk matches the criteria, then a numbered list of diskettes will be displayed, and a subsequent
 * "load" command with a number, such as:
 *
 *      load a: 14
 *
 * will load the corresponding diskette.
 *
 * Another option is to load a diskette image directly, using the "--path" option; it supports both PCjs (.json) disk
 * images and raw (.img) disk images:
 *
 *      load a: --path /diskettes/pcx86/sys/dos/ibm/2.00/PCDOS200-DISK1.json
 *      load a: --path https://diskettes.pcjs.org/pcx86/sys/dos/ibm/2.00/PCDOS200-DISK1.json
 *
 * Note that the "load" command is always available from pc.js "command mode", and it is also available from a DOS command
 * prompt IF the machine was launched with a locally built hard drive containing our hidden LOAD.COM utility (see buildDisk()).
 *
 * TODO: Date criteria using "--date" are accepted but not yet acted upon; implement and consider other criteria as well.
 *
 * @param {string} sDrive ('A:' through 'Z:')
 * @param {Array.<string>} aTokens
 * @returns {string} (result of command)
 */
function loadDiskette(sDrive, aTokens)
{
    let result = "";
    let doLoad = function(sDrive, diskName, diskPath) {
        sDrive = sDrive.toUpperCase();
        let iDrive = sDrive.charCodeAt(0) - 'A'.charCodeAt(0);
        diskPath = diskPath || diskIndexCache[diskName]['path'];
        if (diskPath) {
            let done = function(disk, error) {
                if (error == Errors.DOS.INVALID_DRIVE) {
                    result = "invalid drive (" + sDrive + ")";
                } else {
                    result = sprintf("diskette \"%s\"%s loaded (%d)", diskName, disk? (error < 0? " already" : "") : " not", error || 0);
                    if (disk && !error) {
                        /*
                         * We blow away the manifest if you just replaced the diskette that was built with that manifest,
                         * because there is no longer a connection between that disk drive and your local files.  That's one
                         * of the downsides of removable media.
                         */
                        if (fFloppy && !iDrive) driveManifest = null;
                    }
                }
            };
            result = "loading \"" + diskName + "\" in drive " + sDrive;
            machine.fdc.loadDrive(iDrive, diskName, diskPath, false, null, done);
        } else {
            result = "unknown diskette: " + diskName;
        }
    };
    let displayItems = function(sDrive, items, message = "") {
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            if (result) result += '\n';
            if (!item['file']) {
                result += sprintf("%3d: %s", i + 1, item['disk']);
            } else {
                result += sprintf("%3d: %-12s %8d %.10s  \"%s\"", i+1, item['file'], item['size'] || 0, item['date'], item['disk']);
            }
        }
        result += "\nenter \"load " + sDrive + " #\" to load diskette by number" + (message? "\n" + message : "");
        return result;
    };
    if (machine.fdc) {
        let sPath;
        if (aTokens.length) {
            if (aTokens[0] == "--path" && (sPath = aTokens[1]) || (sPath = aTokens[0]).indexOf("http") == 0) {
                doLoad(sDrive, sPath, sPath);
                return result;
            }
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
                /*
                 * Instead of trying to prevent the user from using regex characters:
                 *
                 *      token = token.replace(/([().\[\]])/g, '\\$1');
                 *
                 * we now embrace them.  Unfortunately, when using our DOS "LOAD" utility, the DOS command interpreter
                 * likes to chop commands up whenever it sees the "pipe" operator, so we have two options: allow the user
                 * to put quotes around regex expressions containing pipes, or let them use commas instead of pipes.
                 *
                 * I prefer the latter but also allow the former.  So all these commands are equivalent:
                 *
                 *      load a: --file arc (com,exe)
                 *      load a: --file arc "(com|exe)"
                 *      load a: --file "arc.*(com|exe)"
                 *
                 * NOTE: If you want the base filename to end with "ARC", (eg, "ARC.EXE" or "LHARC.EXE" but not "SEARCH.EXE"),
                 * then use a period preceded by a backslash:
                 *
                 *      load a: --file "arc\.(com|exe)"
                 */
                token = token.replace(/^"([^"]*)"$/, '$1').replace(/,/g, '|');
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
                diskIndexCache = readDiskIndex();
                if (diskIndexCache) {
                    diskIndexKeys = Object.keys(diskIndexCache).sort();
                }
            }
            if (diskIndexKeys.length) {
                if (fileNameParts.length) {
                    fileIndexCache = readFileIndex(diskIndexCache);
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
                    try {
                        let pattern = parts.join('.*');
                        if (fDebug) printf("searching for \"%s\"...\n", pattern);
                        let re = new RegExp(pattern, 'i');
                        for (let name of names) {
                            let match = name.match(re);
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
                    }
                    catch (err) {
                        printf("search error: %s\n", err);
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
                    result = "no diskette(s) found";
                }
            }
            else {
                result = "no diskette(s) available";
            }
        } else {
            result = "missing diskette search options";
        }
    } else {
        result = "no diskette drives (start a machine first)";
    }
    return result;
}

/**
 * doCommand(s, reload)
 *
 * The "exec" command is used internally whenever the machine signals the desire to execute a local command;
 * in that case, if a local drive was built, we save its state to the local file system, then kill the machine,
 * exec the local command, and then rebuild the local drive and reload the machine.
 *
 * It's a bit slow and clunky, but it ensures that the local command sees any file changes that the machine made,
 * and conversely, the machine sees any file changes that the local command made.
 *
 * @param {string} s
 * @param {boolean} [reload]
 * @returns {string} (result of command)
 */
function doCommand(s, reload = false)
{
    let aTokens = s.split(' ');
    let cmd = aTokens[0].toLowerCase();
    let result = "", curDir = "", sDir = localDir, sDrive = "";

    aTokens.splice(0, 1);
    let arg, args = aTokens.join(' ');

    let help = function() {
        let result = "pc.js commands:\n" +
                    "  build [DOS command(s)]\n" +
                    "  exec [local command]\n" +
                    "  load [drive] [search options]\n" +
                    "  save [local disk image]\n" +
                    "  start [machine]\n" +
                    "  quit";
        if (machine.dbg) {
            result += "\ntype \"?\" for a list of debugger commands (eg, \"g\" to continue running)";
        } else if (machine.cpu) {
            result += "\nmachine commands:\n" +
                    "  g (to continue running)\n" +
                    "start a machine with a debugger for more machine commands";
        }
        return result;
    };

    switch(cmd) {
    case "abort":
        exit(1);
        break;
    case "help":
        result = help();
        break;
    case "build":
        if (machine.cpu) {
            result = "machine already running";
            break;
        }
        arg = checkCommand(localDir, args);
        if (!arg && args) {
            result = "bad command or file name: " + args;
            break;
        }
        buildDisk(localDir, arg, "", true).then(function(result) {
            if (result) printf("%s\n", result);
        });
        break;
    case "exec":
        if (reload) {
            saveDisk(sDir);
            machine = newMachine();
        }
        curDir = process.cwd();
        try {
            process.chdir(mapDir(machineDir));
            let argv = args.split(' ');
            let app = argv[0];
            let appConfig = configJSON['apps']?.[app];
            if (appConfig) {
                if (appConfig['exec']) {
                    args = appConfig['exec'].replace(/\$\*/, argv.slice(1).join(' '));
                }
            }
            let child = child_process.execSync(args, {
                stdio: [
                process.stdin,
                process.stdout,
                process.stderr
                ]
            });
        } catch(err) {
            printf("%s\n", err.message);
        }
        process.chdir(curDir);
        if (reload) {
            result = reloadMachine();
            if (typeof result != "string") result = "";
        }
        break;
    case "load":
        arg = aTokens[0];
        if (arg) {
            if (arg == "info") {
                result = getDriveInfo();
            } else {
                let matchDrive = arg.match(/^([a-z]:?)$/i);
                if (matchDrive) {
                    aTokens.splice(0, 1)
                    result = loadDiskette(matchDrive[1], aTokens);
                } else {
                    result = "invalid diskette drive: " + arg;
                }
            }
        } else {
            result = "missing diskette drive (eg, A:)";
        }
        break;
    case "save":
        if (aTokens[0]) {
            sDir = aTokens[0];
            let matchDrive = aTokens[0].match(/^([a-z]):?$/i);
            if (matchDrive) {
                sDrive = matchDrive[1].toUpperCase() + ':';
                aTokens.splice(0, 1);
                sDir = aTokens[0];
                if (!sDir) {
                    result = "specify a disk image for drive " + sDrive;
                    break;
                }
            }
        }
        if (!saveDisk(sDir, sDrive)) {
            result = "no disk in drive " + sDrive;
        }
        break;
    case "start":
        arg = aTokens[0];
        if (!arg && !machine.cpu) {
            arg = savedMachine;
        }
        if (arg) {
            let sFile = checkMachine(arg);
            if (sFile) {
                machine = newMachine();
                printf("loading machine: %s\n", sFile);
                result = loadMachine(sFile);
                if (!result) {
                    localMachine = sFile;
                }
            } else {
                result = "unrecognized machine: " + arg;
            }
        } else {
            result = "missing machine file";
        }
        break;
    case "q":
    case "quit":
        exit();
        break;
    default:
        if (s) {
            if (!machine.dbg) {
                /*
                 * For machines without a debugger, provide some *very* limited machine control.
                 */
                switch(cmd) {
                case "?":
                    result = help();
                    break;
                case "g":
                    if (machine.cpu) {
                        if (machine.cpu.startCPU()) {
                            setDebugMode(DbgLib.EVENTS.EXIT);
                        }
                    } else {
                        result = "no machine loaded";
                    }
                    break;
                default:
                    result = "unknown command: " + s;
                    break;
                }
            } else {
                try {
                    if (!machine.dbg.doCommands(s, true, true)) {
                        result = eval('(' + s + ')');
                    }
                } catch(err) {
                    result = err.message;
                }
            }
        }
        break;
    }
    commandPrev = s;
    return result? result + "\n" : "";
}

/**
 * processArgs(argv, sMachine, sDisk, sDirectory, sLocalDisk)
 *
 * Arguments that either the shell consumes (like *.*) or that we consume (like --help) can be
 * problematic if those are actually arguments you want to pass along with a command to buildDisk().
 *
 * So in those cases, you should simply put quotes around the entire command (eg, pc.js "dir *.* /p").
 *
 * @param {Array.<string>} argv
 * @param {string} [sMachine]
 * @param {string} [sDisk]
 * @param {string} [sDirectory]
 * @param {string} [sLocalDisk]
 */
async function processArgs(argv, sMachine, sDisk, sDirectory, sLocalDisk)
{
    let loading = false;
    let error = "", warning = "";

    let splice = false;
    if (!sMachine) {
        sMachine = argv[1];                     // for convenience, we also allow a bare machine name
        if (sMachine) splice = true;
    }
    if (sMachine) {
        localMachine = checkMachine(sMachine);
        if (localMachine) {
            if (splice) argv.splice(1, 1);
        } else if (sMachine.endsWith(".json") || !splice) {
            error = "unknown machine: " + sMachine;
        }
    }

    let verifyDir = function(s) {
        if (s[0] == '~') {
            s = path.join(process.env.HOME, s.slice(1));
        } else {
            s = path.resolve(s);
        }
        return existsDir(s, false)? s : "";
    };

    if (sDisk) {
        if (sDisk.toLowerCase() == "none") {    // --disk=none disables any prebuilt disk
            localDisk = "";
            savedState = "";
        } else {
            if (sDisk.indexOf(path.sep) < 0 && !existsFile(sDisk, false)) {
                sDisk = path.join(pcjsDir, "disks", sDisk);
            }
            localDisk = sDisk;
            let di = await readDiskAsync(localDisk);
            if (di) {
                updateDriveInfo(di);
                driveOverride = true;
                kbTarget = 0;
            } else {
                error = "invalid disk";
            }
        }
        localDir = "";
    } else {
        localDisk = path.join(pcjsDir, localDisk);
    }

    if (sDirectory == "none") {
        localDir = localDisk = "";              // --dir=none is synonymous with --disk=none
        savedState = "";
    }

    if (localDir) {                             // --dir is allowed only if --disk has not been used
        let sDir = "";
        if (!error) {
            splice = false;
            sDir = sDirectory;
            if (!sDir) {
                sDir = argv[1];                 // for convenience, we also allow a bare directory name
                if (sDir) splice = true;
            }
            if (sDir) {
                let newDir = verifyDir(sDir);
                if (newDir) {
                    localDir = newDir;
                    if (splice) argv.splice(1, 1);
                } else {
                    if (!splice) error = "invalid directory: " + sDir;
                    sDir = "";
                }
            }
        }
        if (!sDir) {
            localDir = verifyDir(localDir);
        }
    }

    if (!error) {                               // last but not least, check for a DOS command or program name
        if (machineType == "pcx86" && (argv[1] || localDir)) {
            let args = argv.slice(1).join(' ');
            let sCommand = checkCommand(localDir, args);
            if (!sCommand && args) {
                error = "command not found: " + args;
            } else if (!localDir) {
                warning = "unable to execute command '" + sCommand + "' with prebuilt disk";
            } else {
                error = await buildDisk(localDir, sCommand, sLocalDisk);
                if (!error && sLocalDisk) {
                    if (fTest) printf(getDriveInfo());
                    exit();
                }
            }
        }
        if (!error) {
            if (!localMachine) {
                localMachine = checkMachine(savedMachine) || savedMachine;
            }
            error = loadMachine(localMachine);
            if (!error) {
                loading = true;
            } else {
                localMachine = "";
            }
        }
    }

    if (warning) {
        printf("warning: %s\n", warning);
    }

    if (error) {
        printf("error: %s\n", error);
        exit(1);
    }

    if (!loading) setDebugMode(DbgLib.EVENTS.READY);
}

/**
 * readInput(stdin, stdout)
 *
 * @param {Object} stdin
 * @param {Object} stdout
 */
function readInput(stdin, stdout)
{
    stdin.resume();
    stdin.setEncoding("utf8");
    stdin.setRawMode(true);

    stdin.on("data", function(data) {
        let code = data.charCodeAt(0);
        if (Defines.MAXDEBUG) {
            printf("key(s): %j\n", data);
        }
        if (code == 0x04 && !debugMode) {               // check for CTRL-D when NOT in debug mode
            if (machine.cpu) machine.cpu.stopCPU();
            setDebugMode(DbgLib.EVENTS.READY);
            return;
        }
        if (code == 0x03 && debugMode) {                // check for CTRL-C when in debug mode
            exit(3);
            return;
        }
        if (!debugMode) {
            data = functionKeys[data] || data;
            data = data.replace(/\x7f/g, "\b");         // convert DEL to BS
            if (machine.kbd) {
                if (Defines.MAXDEBUG) {
                    printf("injecting key(s): %s\n", data);
                }
                machine.kbd.injectKeys.call(machine.kbd, data, 0);
            } else {
                sendSerial(code);
            }
            return;
        }
        if (code == 0x08 || code == 0x7f) {             // implement BS/DEL ourselves (since we're in "raw" mode)
            if (command.length) {                       // (Windows generates BS, macOS generates DEL)
                command = command.slice(0, -1);
                printf("\b \b");                        // by converting it to BS + SPACE + BS
            }
            return;
        }
        if (code == 0x01 && commandPrev) {              // implement CTRL-A as a command repeat action
            data = commandPrev + '\r';
        }
        else if (data == "\x1b[A" && !command.length) { // implement UP ARROW ourselves (since we're in "raw" mode)
            data = commandPrev;
        }
        else if (code < 0x20 && code != 0x0d) {         // anything else (including any ESC codes) is ignored
            return;
        }
        printf("%s", data);
        command += data;
        do {
            let i = command.indexOf("\r");
            if (i < 0) break;
            let s = command.slice(0, i);
            printf("\n");
            let result = doCommand(s);
            printf(result);
            if (machine.cpu && machine.cpu.isRunning()) {
                break;
            }
            printf("%s> ", prompt);
            command = command.slice(i+1);
        } while (command.length);
    });
}

/**
 * exit(code)
 *
 * Code 1 is used to abort without saving the disk, and code 3 is when terminating from debug mode; default code is 0.
 *
 * @param {number} code (exit code)
 */
function exit(code = 0)
{
    if (code == 3) printf("terminating...\n");
    if (code != 1) saveDisk(localDir);
    process.stdin.setRawMode(false);
    if (fTest) printf("\n");
    process.exit(code);
}

/**
 * main(argc, argv)
 *
 * @param {number} argc
 * @param {Array} argv
 */
function main(argc, argv)
{
    let removeArg = function(arg) {
        return pcjslib.removeArg(argv, arg, "string");
    }

    let removeFlag = function(arg) {
        return pcjslib.removeArg(argv, arg, "boolean");
    }

    fDebug = removeFlag('debug') || fDebug;
    fVerbose = removeFlag('verbose') || fVerbose;
    fTest = removeFlag('test') || fTest;
    if (removeFlag('trim')) driveInfo.trimFAT = true;

    device.setDebug(fDebug);
    device.setMessages(MESSAGE.DISK + MESSAGE.WARN + MESSAGE.ERROR + (fDebug && fVerbose? MESSAGE.DEBUG : 0) + (fVerbose? MESSAGE.INFO : 0), true);
    messagesFilter = fDebug? Messages.ALL + Messages.TYPES + Messages.ADDRESS : Messages.ALERTS;

    let arg0 = argv[0].split(' ');
    rootDir = path.join(path.dirname(arg0[0]), "../..");
    pcjsDir = path.join(rootDir, "/tools/pc");
    setRootDir(rootDir, removeFlag('local')? true : (removeFlag('remote')? false : null));

    if (!argv[1] || fDebug || fTest) {
        let options = arg0.slice(1).join(' ');
        printf("pc.js v%s\n%s\n%s", Device.VERSION, Device.COPYRIGHT, (options? sprintf("Options: %s\n", options) : ""));
    }

    machines = JSON.parse(readFileSync("/machines/machines.json"));
    configJSON = JSON5.parse(readFileSync(path.join(pcjsDir, configFile))) || configJSON;
    let defaults = configJSON['defaults'] || {};

    fBare = removeFlag('bare') || fBare;
    fHalt = removeFlag('halt') || fHalt;
    fFloppy = removeFlag('floppy') || fFloppy;
    if (!fFloppy) fNoFloppy = removeFlag('nofloppy') || fNoFloppy;
    diskLabel = removeArg('label') || defaults['label'] || diskLabel;
    fNormalize = removeFlag('normalize') || fNormalize;
    localDir = defaults['dir'] || localDir;

    machineType = defaults['type'] || machineType;
    systemOverride = !!(argv['sys'] || argv['ver']);
    systemType = (removeArg('sys', 'string') || defaults['sys'] || systemType).toLowerCase();
    let i = systemType.indexOf(':');
    if (i > 0) {
        /*
         * We allow the version to be included with the system argument (eg, --sys=pcdos:2.0), for convenience.
         */
        systemVersion = systemType.slice(i+1);
        systemType = systemType.slice(0, i);
    } else {
        systemVersion = (removeArg('ver', 'string') || defaults['ver'] || systemVersion);
    }
    systemMBR = removeArg('mbr') || defaults['mbr'] || systemMBR;
    savedMachine = defaults['machine'] || savedMachine;
    savedState = defaults['state'] || savedState;

    /*
     * When using --floppy, certain other options are disallowed (eg, drivectrl).
     */
    if (fFloppy) {
        savedState = "";
        kbTarget = maxFiles = 0;
        driveInfo.driveCtrl = "FDC";
        driveInfo.partitioned = false;
        driveOverride = true;
    } else {
        let driveCtrl = removeArg('drive');
        if (driveCtrl) {
            driveInfo.driveCtrl = driveCtrl.toUpperCase();
            driveOverride = true;
        }
        kbTarget = getTargetValue(defaults['target']);
        maxFiles = +removeArg('maxfiles') || defaults['maxfiles'] || maxFiles;
        driveInfo.partitioned = true;
    }

    kbTarget = getTargetValue(removeArg('target')) || kbTarget;

    let typeDrive = removeArg('drivetype');
    if (typeDrive) {
        let match = typeDrive.match(/^([0-9]+):([0-9]+):([0-9]+):?([0-9]*)$/i);
        if (match) {
            let nCylinders = +match[1];
            let nHeads = +match[2];
            let nSectors = +match[3];
            let cbSector = +match[4] || 512;
            if (nCylinders < 1 || nCylinders > 1024 ||
                nHeads < 1 || nHeads > 256 ||
                nSectors < 1 || nSectors > 63 ||
                cbSector < 128 || cbSector > 1024 || (cbSector & (cbSector - 1))) {
                match = null;
            } else {
                kbTarget = 0;
                if (!fFloppy) driveInfo.driveCtrl = "PCJS"; // this pseudo drive controller is required for custom drive geometries
                driveInfo.driveType = 0;
                driveInfo.nCylinders = nCylinders;
                driveInfo.nHeads = nHeads;
                driveInfo.nSectors = nSectors;
                driveInfo.cbSector = cbSector;
                if (cbSector != 512) {
                    printf("warning: %d-byte sectors are not known to work with any version of DOS\n", cbSector);
                }
                driveOverride = true;
            }
        } else if (!fFloppy) {
            match = typeDrive.match(/^([A-Z]+|):?([0-9]+)$/i)
            if (match) {
                let driveCtrl = match[1] || driveInfo.driveCtrl;
                let driveType = +match[2];
                /*
                 * WARNING: This code may not validate the type correctly if you didn't specify a controller (eg, "XT:1"),
                 * because the default controller is "COMPAQ" (because our default machine is a COMPAQ) and the code in
                 * checkMachine() that attempts to detect/update the appropriate controller for your particular machine hasn't
                 * run yet (this is too early).
                 */
                if (DiskInfo.validateDriveType(driveCtrl, driveType)) {
                    driveInfo.driveCtrl = driveCtrl;
                    driveInfo.driveType = driveType;
                    driveOverride = !!match[1];
                } else {
                    match = null;
                }
            }
        }
        if (!match) {
            printf("error: invalid drive type (%s)\n", typeDrive);
        }
    }

    let typeFAT = removeArg('fat');
    if (typeFAT) {
        let match = typeFAT.match(/^([0-9]+):?([0-9]*):?([0-9]*)$/i);
        if (match) {
            driveInfo.typeFAT = +match[1];
            if (match[2]) driveInfo.clusterSize = +match[2] || 0;
            if (match[3]) driveInfo.rootEntries = +match[3] || 0;
        }
    }

    let hiddenSectors = removeArg('hidden');
    if (hiddenSectors) {
        driveInfo.hiddenSectors = +hiddenSectors || 0;
    }

    if (removeFlag('help')) {
        let optionsMain = {
            "--start=[machine]":        "start machine configuration file",
        };
        let optionsDisk = {
            "--dir=[directory]":        "use drive directory (default is " + localDir + ")",
            "--disk=[image]":           "\tuse drive disk image (instead of directory)",
            "--drive=[controller]":     "set drive controller (XT, AT, COMPAQ, or PCJS)",
            "--drivetype=[value]":      "set drive type or C:H:S (eg, 306:4:17)",
            "--fat=[number]":           "\tset hard disk FAT type (12 or 16)",
            "--hidden=[number]":        "set hidden sectors (default is 1)",
            "--label=[label]":          "\tset volume label of disk image",
            "--maxfiles=[number]":      "set maximum local files (default is " + maxFiles + ")",
            "--normalize=[boolean]":    "convert text file encoding (default is " + fNormalize + ")",
            "--save=[image]":           "\tsave drive disk image and exit",
            "--sys=[string]":           "\tset operating system type (default is " + systemType + ")",
            "--target=[nK|nM]":         "set target disk size (default is " + ((kbTarget / 1024)|0) + "M)",
            "--ver=[#.##]":             "\tset operating system version (default is " + systemVersion + ")"
        };
        let optionsOther = {
            "--bare (-b)":              "\tomit helper binaries from disk",
            "--debug (-d)":             "\tenable DEBUG messages",
            "--floppy (-f)":            "\tbuild floppy instead of hard disk",
            "--halt (-h)":              "\thalt machine on startup",
            "--help (-?)":              "\tdisplay command-line usage",
            "--local (-l)":             "\tuse local diskette images",
            "--nofloppy (-n)":          "\tremove any diskette from drive A:",
            "--test (-t)":              "\tenable test mode (non-interactive)",
            "--verbose (-v)":           "\tenable verbose mode"
        };
        let optionGroups = {
            "machine options:":         optionsMain,
            "disk options:":            optionsDisk,
            "other options:":           optionsOther
        }
        printf("\nusage:\n\t[node] pc.js [machine file] [local directory] [DOS command] [options]\n");
        for (let group in optionGroups) {
            printf("\n%s\n\n", group);
            for (let option in optionGroups[group]) {
                printf("\t%s\t%s\n", option, optionGroups[group][option]);
            }
        }
        printf("\nnotes:\n\t--drivetype can also specify a drive geometry (eg, --drivetype=306:4:17)\n");
        printf("\t--fat can also specify cluster and root directory sizes (eg, --fat=16:2048:512)\n");
        printf("\tAll values should be considered advisory, as it may not be possible to honor them.\n");
        printf("\npc.js configuration settings are stored in %s\n", path.join(pcjsDir, configFile));
        return;
    }

    processArgs(argv, removeArg('start'), removeArg('disk'), removeArg('dir'), removeArg('save'));

    let args = Object.keys(argv);
    for (let arg of args) {
        if (!arg.match(/^[0-9]*$/)) {
            let value = argv[arg];
            if (typeof value != "string") {
                value = "";
            } else {
                value = "=" + value;
            }
            printf("invalid option: %s%s\n", arg, value);
        }
    }

    readInput(process.stdin, process.stdout);
}

main(...pcjslib.getArgs({
    '?': "help",
    'b': "bare",
    'd': "debug",
    'f': "floppy",
    'h': "halt",
    'l': "local",
    'n': "nofloppy",
    't': "test",
    'v': "verbose"
}));
