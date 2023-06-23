---
layout: page
title: "PC-SIG Diskette Library (Disk #1354)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1354/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1354"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "STOCK CHARTING SYSTEM 2 OF 2 (ALSO 246)"

    The STOCK CHARTING SYSTEM draws or prints "volume/high/low/close"
    charts for any stock, bond, commodity, or security that has a
    high/low/close price.  Short- and long-term moving averages can be
    included on the chart and temporarily changed for "what-if"
    calculations.  The STOCK CHARTING SYSTEM is menu-driven and comes with a
    complete set of context-sensitive help screens.
    File Descriptions:
    
    AUTOEXEC BAT  Auto-start file for floppy disk only.
    SMSTART2 CTL  Introductory screen.
    SMSETUP2 CTL  System setup file.
    SM2      EXE  Startup program.
    SMMMENU2 EXE  Master Menu and configuration program.
    SMADDEL2 EXE  Stock Select screen and index file maint. prog.
    SMENTRY2 EXE  Data entry and graphics program.
    SMTRANS2 EXE  ASCII conversion program.
    BRUN30   EXE  QuickBASIC run-time routines.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1354.TXT

{% raw %}
```
Disk No: 1354                                                           
Disk Title: Stock Charting System 2 of 2 (246 also)  (Disk 2 of 2)      
PC-SIG Version: S3.9                                                    
                                                                        
Program Title: Stock Charting System                                    
Author Version: 2.55                                                    
Author Registration: $25.00.                                            
Special Requirements: CGA or equivalent, works with EGA  & most VGA, two
                                                                        
The STOCK CHARTING SYSTEM draws or prints ``volume/high/low/close''     
charts for any stock, bond, commodity, or security that has a           
high/low/close price.  Short- and long-term moving averages can be      
included on the chart and temporarily changed for ``what-if''           
calculations.  The STOCK CHARTING SYSTEM is menu-driven and comes with a
complete set of context-sensitive help screens.                         
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║       <<<<  Disk No 1354 Stock Charting System version 2.55 >>>>        ║
║		Program	Disk (#2 of 2; 246 also)                          ║
╠═════════════════════════════════════════════════════════════════════════╣
║   To start the program, insert disk #1 and type:                        ║
║                               SM2 (press enter)                         ║
║                                                                         ║    
║   For instructions on printing the manual for this program,             ║
║                             TYPE README (press enter)                   ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.DOC

{% raw %}
```
                      STOCK CHARTING SYSTEM - RELEASE 2.5

To obtain directions on how to get these programs running, first make sure you
are in DOS.  You should see the prompt A> (or C> if you are on a hard disk).
Remove your DOS diskette and insert the Stock Charting System diskette in drive
A.  (If you have more than one diskette, insert the STARTUP diskette).  Turn
on your printer and make sure it is ready to print.  Most printers have a ready
light, and it should be on. Then type the following command just as it appears:

                           COPY A:SMVERS25.DOC LPT1:

and press the ENTER key.  Fourteen pages of information will be printed, and
the output will be paginated with pages numbered.

To get a "snapshot" printout of this screen, first make sure your printer is
ready and then press a shift key and the PrtSc key simultaneously.  The PrtSc
key on the IBM-PC keyboard is on the second row of keys up from the bottom row,
near the right-hand side under the ENTER key.  On other keyboards it may be in
a different position.  This procedure can be used to obtain a screen printout
at almost any time, except when the screen contains graphics.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1354

     Volume in drive A has no label
     Directory of A:\

    DBMY     SMP     10240   2-06-90   9:28a
    DDJIND   SMP     10240   2-06-90   9:39a
    DIBM     SMP     10240   2-06-90   9:33a
    DPAC     SMP     10240   2-06-90   9:35a
    DPFE     SMP     10240   2-06-90   9:37a
    FILE1354 TXT      1555   3-19-90   6:24p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       839   3-19-90   1:03p
    INDEXFIL SMX      7168   2-06-90  11:48a
    READ     ME       1189   2-19-89  11:55a
    README            1189   2-19-89  11:55a
    README   DOC      1189   2-19-89  11:55a
    RELEASE2 55        161   1-31-90   5:38p
    SMADDEL2 EXE     42497   2-05-90  10:17p
    SMADDEL2 HLP     12945   2-06-90   7:53a
    SMDTOWK2 HLP      3968  10-29-89  10:02p
    SMENTRY2 EXE     58609   2-05-90  10:18p
    SMENTRY2 HLP     13056  10-29-89  10:20p
    SMGRAPH2 HLP     10112  10-29-89  10:20p
    SMMMENU2 EXE     22801  10-29-89   9:07p
    SMMMENU2 HLP      5820   2-06-90  11:16a
    SMPRHIS2 HLP      8704  10-29-89  10:12p
    SMPRUPD2 HLP      8928   2-06-90   9:02a
    SMSETUP2 CTL        64   3-19-90  12:53p
    SMTRANS2 EXE     57729   2-05-90  10:19p
    SMTRANS2 HLP     11392  10-29-89  10:03p
    WBMY     SMP      4096   2-06-90   9:40a
    WDJIND   SMP      4096   2-06-90   9:40a
    WIBM     SMP      4096   2-06-90   9:41a
    WPAC     SMP      4096   2-06-90   9:40a
    WPFE     SMP      4096   2-06-90   9:40a
           31 file(s)     341633 bytes
                            9216 bytes free
