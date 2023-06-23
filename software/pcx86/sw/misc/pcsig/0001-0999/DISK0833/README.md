---
layout: page
title: "PC-SIG Diskette Library (Disk #833)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0833/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0833"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "GRAPHTIME II 1 OF 2 (HERCULES) ALSO 834"

    GRAPHTIME II is a business-presentation graphics program.  GRAPHTIME II
    does various line, column and pie charts.  The charts can be printed or
    plotted, viewed individually, or set up to run as an unattended "slide
    show" on the monitor.  It accepts data from dBase II/III, Multiplan,
    and Lotus 1-2-3, or you can enter data directly.  It has a font editor,
    macro editor and math functions including moving averages.  There is
    even an "undo" function. A Microsoft mouse (or compatible) is
    recommended for the draw program.
    
    This version will plot 24 data points and will print "paint" files or
    save them to disk.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES833.TXT

{% raw %}
```
Disk No  833
Program Title: GRAPHTIME II (Hercules version)  DISK 1 OF 2
PC-SIG version 1
 
    Finally, GRAPHTIME is available to HERCULES graphics users!  This
version offers HERCULES graphics owners all the features of the original
GRAPHTIME II.
 
    This two-disk demo set contains a business-presentation graphics
program. GRAPHTIME II does various line, column and pie charts. The charts
can be printed or plotted, viewed individually, or set up to run as an
unattended "slide show" on the monitor.
 
    GRAPHTIME accepts data from dBase II/III, Multiplan, and LOTUS, or you
can enter data directly into GRAPHTIME. There is a font editor and macro
editor. There are math functions including moving averages. There is even
an "undo" function. A Microsoft mouse (or compatible) is recommended.
 
    This demo version does not have the pen-plot driver and supports only
color graphics adapters. This version will plot only 24 data points. The
commercial version can handle 365 data points. This demo version will not
save "Paint" files, but will print them.
 
    This is the first disk of the two-disk GRAPHTIME II package.  It
contains the startup modules.
 
Usage: Graphics
 
System Requirements: 256K memory and a Hercules graphics card.
 
How to Start: For instructions on installing the program, type:
              GO (press enter).
 
Suggested Registration: $39.00 U.S. (includes Airmail)
 
File Descriptions:
 
???????  GTD  GRAPHTIME data files (7 files).
BRUN20   EXE  Microsoft's library module.
GP       GTH  Help file for GRAPHTIME plotter drivers.
GT       BAT  Batch file used to start GRAPHTIME II.
GTHDRAWP EXE  GRAPHTIME drawing module.
GTHFILE  EXE  File input/edit module.
GTHPIEBL EXE  GRAPHTIME module.
GTHPLOT  EXE  Plotting module.
GTHSTART EXE  Main menu program.
GTUSTART EXE  GRAPHTIME startup program.
HARDCOPY COM  Printer utility program.
HGC      COM  Color Graphics emulator program.
INT10    COM  Utility program.
MAC1     GTM  Data file.
PORT     COM  Printer communication program.
PRINTER  DEF  Printer definition file.
README        Instructions on how to install GRAPHTIME II.
TEXT     GTT  GRAPHTIME demonstration title screen.
TFR      GTZ  Data file.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║    <<<<  Disk #833 GRAPHTIME-II (Hercules version) disk 1 of 2  >>>>    ║
╠═════════════════════════════════════════════════════════════════════════╣
║    This is the first disk of the GRAPHTIME package. It contains the     ║
║     startup modules.                                                    ║
║                                                                         ║
║ For installation procedures refer to the readme file on this disk.      ║
║ To do so type the following:  TYPE README (press enter) or to copy it   ║
║ to your printer type: COPY README PRN (press enter)                     ║
║                                                                         ║
║ To start the program type: GT (press enter)                             ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0833

     Volume in drive A has no label
     Directory of A:\

    ADMIN    GTD       104   2-24-86   1:24a
    BRUN20   EXE     68396   6-13-86  10:55a
    DPBUDGET GTD       170  10-27-86   3:53p
    FILES833 TXT      2361  10-02-87   1:19p
    GO       BAT        38   9-08-87  10:59a
    GO       TXT       925  10-01-07   9:30a
    GP       GTH      4957   4-06-87  10:59p
    GT       BAT       292   4-09-87  10:02p
    GTHDRAWP EXE     56457   4-17-87   3:03p
    GTHFILE  EXE     41497   4-18-87   3:04p
    GTHPIEBL EXE     24825   4-25-87   7:22p
    GTHPLOT  EXE     74745   4-28-87   9:01p
    GTHSTART EXE      7177   4-29-87   7:54p
    GTUSTART EXE      6681   3-08-87   9:52p
    HARDCOPY COM      2724  12-13-84
    HGC      COM       507   5-12-84
    INT10    COM      6040   3-05-85
    MAC1     GTM       411   3-30-87   8:44p
    PARTS    GTD       125   2-27-86   1:14p
    PORT     COM      2454   6-12-86
    PRINTER  DEF       640  12-07-84
    RAND     GTD       166   4-08-86  12:59p
    README            2948   3-22-87   5:06p
    SALES    GTD       126   2-24-86   1:23a
    SPIRAL   GTD      2015   3-26-87  10:53a
    TEXT     GTT       753  10-29-86   9:39a
    TFR      GTZ        78   3-08-87   6:46p
    WAGES    GTD       125   2-24-86   1:23a
           28 file(s)     307737 bytes
                           38912 bytes free
