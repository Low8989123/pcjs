---
layout: page
title: "Nine Princes in Amber (1985) on Hard Disk"
permalink: /software/pcx86/game/other/1985/nine_princes/hdd/
preview: ../images/screenshot.png
machines:
  - id: ibm5160-npia
    type: pcx86
    resume: 1
    config: /machines/pcx86/ibm/5160/cga/640kb/machine.xml
    autoMount:
      A:
        name: "PC DOS 2.00 (Disk 1)"
      B:
        name: "PC DOS 2.00 (Disk 2)"
    autoScript: copyHD
machineScripts:
  copyHD: |
    wait Keyboard DOS;
    type Keyboard "$date\r$time\rC:\rCOPY A:ASSIGN.COM\rPROMPT $P$G\rMKDIR AMB\r";
    wait Keyboard;
    sleep 1000;
    wait Keyboard DOS;
    select FDC listDrives "A:";
    select FDC listDisks "Nine Princes in Amber (Disk A)";
    loadDisk FDC;
    wait FDC;
    type Keyboard "CD A:AMB\rCOPY A:*.* C:AMB\r";
    wait Keyboard;
    sleep 1000;
    wait Keyboard DOS;
    select FDC listDrives "B:";
    select FDC listDisks "Nine Princes in Amber (Disk B)";
    loadDisk FDC;
    wait FDC;
    type Keyboard "CD B:AMB\rCOPY B:*.* C:AMB\r";
    wait Keyboard;
    sleep 1000;
    wait Keyboard DOS;
    type Keyboard "ASSIGN A=C B=C\rCD AMB\rAMB\r";
---

On initial startup (or reset) of the machine below, a PCjs machine script will automatically copy all
the files from the two "Nine Princes in Amber" IBM PC diskettes to drive **C** and then start the game.

For more information about the game, refer to the page that describes the original [diskettes](../).

{% include machine.html id="ibm5160-npia" %}
