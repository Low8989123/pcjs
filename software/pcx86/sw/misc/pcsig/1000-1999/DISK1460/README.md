---
layout: page
title: "PC-SIG Diskette Library (Disk #1460)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1460/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1460"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "P4UP"

    P4UP compresses 4 normal page images onto one page (four quadrants) of
    output, using its own fonts, with an HP LaserJet II printer.  P4UP is
    very easy to use in command line form (just like DOS print) and has
    several options to change the order of the quadrants.  No soft font
    expertise is required.  It is ideal for printing large documents or
    program source files.  Since four pages are shrunk to one piece of
    paper a lot of desk space (and paper) can be saved.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1460.TXT

{% raw %}
```
Disk No: 1460
Program Title: P4UP version 2.0
PC-SIG version: 1

P4UP compresses 4 normal page images onto one page (four quadrants) of
output, using its own fonts, with a HP LaserJet II printer.  P4UP is
very easy to use in command line form (just like DOS print) and has
several options to change the order of the quadrants, no soft font
expertise is required.  It is ideal for printing large documents or
program source files.  Since four pages are shrunk on to one piece of
paper a lot of desk space (and paper) can be saved.

Usage:  Laser Printer Utility.

Special Requirements:  HP LaserJet II.

How to Start:  Type GO (press enter).

Suggested Registration:  $29.95

File Descriptions:

P4UP     EXE   Main Program.
P4UP     DOC   Documentation.
INFO     DOC   Short documentation introduction.

PC-SIG
1030D E. Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                      <<<<  Disk No 1460 P4UP  >>>>                      ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type P4UP (press enter)                           ║
║                                                                         ║
║ To look at the documentation on your screen, type VIEW (press enter)    ║
║                                                                         ║
║ To copy the documentation to your printer, type MANUAL (press enter)    ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1460

     Volume in drive A has no label
     Directory of A:\

    FILE1460 TXT       935   6-13-89   2:53p
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       694   6-13-89   3:01p
    INFO     DOC      2048  12-12-88   1:00p
    MANUAL   BAT       147   6-13-89   3:03p
    P4UP     DOC     19968   1-27-89   9:59a
    P4UP     EXE     36583   5-15-89   9:14a
    PAGE     COM       325   1-06-87   4:21p
    VIEW     BAT        62   6-13-89   3:03p
            9 file(s)      60800 bytes
                           97280 bytes free
