---
layout: page
title: "PC-SIG Diskette Library (Disk #61)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0061/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0061"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "PRINTGR AND IPCO PROGRAMS"

    PRINTGR is an early and well done set of printer utilities for users of
    older versions of the Epson and compatible printers which do not have
    graphic capabilities.
    
    The two programs, PRINTGR1 and PRINTGR2, will produce printed copies of
    screen displays in either medium (320x200) or high (640x200) resolution
    mode. PRINTGR1 prints out a small (5.3"W x 2.5"H) upright image.
    PRINTGR2 prints and expanded (6.6"W x 8.9"H) image that is rotated
    clockwise by 90 degrees.
    
    Special Requirements:  Graphic compatible printer and a version of
    BASIC.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:  $9.00
    
    File Descriptions:
    
    PC-PAD   LST  Part of PC-PAD.BASappend.
    PC-PAD   BAS  Editor, spreadsheet, and printing program.
    BANNER   BAS  IPCO Creates large letters on printer.
    SLOTMACH BAS  IPCO Roulette type game YAHTZEE  BAS  IPCO game.
    STATCAPS BAS  IPCO Names, states and capitals - needs BASICA.
    ITALICS  BAS  IPCO Prints in italics on Epson MX-80 printer.
    NFL-PK   BAS  IPCO Picks point spreads between the 29 teams of the NFL.
    MEMSIZE  BAS  IPCO Resets top of memory to avoid startup delay.
    -------- ---  PRINTGR, prints screen graphics on Epson printer.
    EPSONUTL BAS  IPCO Epson printer utility.
    PRINTGR1 EXE  Prints medium/high resolution graphics - 5.3"x2.5".
    PRTSC_2  ASM  Assembly language source for PRINTGR2.EXE.
    PRTSC_1  ASM  Assembly language source for PRINTGR1.EXE.
    PRINTGR  ASM  Common assembly language source for PRINTGR1&2.EXE.
    PRINTGR2 EXE  Prints medium/high resolution graphics - 6.6"x8.9".
    PRINTGR  DOC  Documentation for PRINTGR1&2.BAS.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BANNER.BAS

{% raw %}
```bas
10 KEY OFF:CLS
20 SCREEN 0
30 WIDTH 40
40 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
50 PRINT"░┌───────────────────────────────────┐░"
60 PRINT"░│                                   │░"
70 PRINT"░│            4024-A.BAS             │░"
80 PRINT"░│          BANNER PRINTER           │░"
90 PRINT"░│                                   │░"
100 PRINT"░│                                   │░"
110 PRINT"░│ BROUGHT TO YOU BY THE MEMBERS OF  │░"
120 PRINT"░│      ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄      │░"
130 PRINT"░│        █   █   █ █     █   █      │░"
140 PRINT"░│        █   █▄▄▄█ █     █   █      │░"
150 PRINT"░│        █   █     █     █   █      │░"
160 PRINT"░│      ▄▄█▄▄ █     █▄▄▄▄ █▄▄▄█      │░"
170 PRINT"░│                                   │░"
180 PRINT"░│      International PC Owners      │░"
190 PRINT"░│                                   │░"
200 PRINT"░│P.O. Box 10426, Pittsburgh PA 15234│░"
210 PRINT"░│                                   │░"
220 PRINT"░└───────────────────────────────────┘░"
230 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
240 PRINT
250 PRINT "       PRESS ANY KEY TO CONTINUE
260 A$=INKEY$: IF A$="" THEN 260
270 WIDTH 80
280 CLS
1000 CLEAR 300
1010 REM PROGRAM BY TOM KELLY TO PLOT WORDS ON TELETYPE
1020 REM *************************10/24/75*****************************
1030 DIM M(60,6),P(15)
1040 PRINT "SIZE  (1-7)";
1050 INPUT Z
1060 PRINT "WHAT'S YOUR MESSAGE";
1070 INPUT B$
1080 PRINT 
1090 PRINT "METHOD (1 OR 2)";
1100 INPUT A
1110 IF A<>2 THEN 1140
1120 PRINT " INPUT 2 OF YOUR CHARACTERS";
1130 INPUT C$
1140 LPRINT:A$="ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789<>=#+-*/\()[].,;:!"
1150 A$=A$+"?&$%":REM "&" GIVES QUOTE
1160 FOR N=1 TO 60: FOR N1=1 TO 6:READ M(N,N1):NEXT N1,N
1170 FOR I=1 TO 9
1180 LET T(I)=2^(I)-1
1190 NEXT I
1200 FOR I=1 TO LEN(B$)
1210 FOR J=1 TO 60
1220 IF MID$(A$,J,1)<>MID$(B$,I,1) THEN 1250
1230 F=J
1240 GOTO 1260
1250 NEXT J
1260 FOR K=1 TO 6
1270 LET X=M(F,K)
1280 IF X=0 THEN 1550
1290 FOR Q=1 TO 9
1300 IF T(Q)<X THEN 1330
1310 LET Y=Q
1320 GOTO 1340
1330 NEXT Q
1340 FOR L=1 TO 9
1350 LET P(L)=X-2*INT(X/2)
1360 LET X=INT(X/2)
1370 NEXT L
1380 FOR M=1 TO Z
1390 FOR O=1 TO Y
1400 IF P(O)=0 THEN 1480
1410 FOR Z1=1 TO Z
1420 ON A GOTO 1430,1450
1430 LPRINT MID$(B$,I,1)MID$(B$,I,1);
1440 GOTO 1460
1450 LPRINT C$;
1460 NEXT Z1
1470 GOTO 1510
1480 FOR Z2=1 TO Z
1490 LPRINT "  ";
1500 NEXT Z2
1510 NEXT O
1520 LPRINT
1530 NEXT M
1540 GOTO 1570
1550 LPRINT
1560 LPRINT
1570 NEXT K
1580 NEXT I
1590 LPRINT :LPRINT
1600 DATA 511,264,264,264,511,0,511,273,273,273,238,0
1610 DATA 511,257,257,257,387,0,511,257,257,257,254,0
1620 DATA 511,273,273,273,257,0,511,272,272,256,256,0
1630 DATA 511,257,273,273,415,0,511,16,16,16,511,0
1640 DATA 0,257,511,257,0,0,3,1,1,1,511,0
1650 DATA 511,16,40,68,387,0,511,1,1,1,1,0
1660 DATA 511,96,24,96,511,0,511,96,24,6,511,0
1670 DATA 511,257,257,257,511,0,511,272,272,272,496,0
1680 DATA 511,257,261,259,511,0,511,272,272,272,239,0
1690 DATA 499,273,273,273,415,0,256,256,511,256,256,0
1700 DATA 510,1,1,1,510,0,496,12,3,12,496,0
1710 DATA 511,12,48,12,511,0,387,204,48,204,387,0
1720 DATA 384,96,31,96,384,0,259,269,313,353,385,0,0,0,0,0,0,0
1730 DATA 511,263,313,449,511,0,0,129,511,1,0,0
1740 DATA 391,265,281,273,225,0,387,273,273,273,495,0
1750 DATA 496,16,16,16,511,0,499,273,273,273,270,0
1760 DATA 511,273,273,273,415,0,384,263,280,352,384,0
1770 DATA 238,273,273,273,238,0,499,273,273,273,511,0
1780 DATA 16,40,40,68,68,0,68,68,40,40,16,0
1790 DATA 40,40,40,40,40,0,40,124,40,124,40,0
1800 DATA 16,16,124,16,16,0,16,16,16,16,16,0,68,40,254,40,68,0
1810 DATA 3,14,56,224,384,0,384,224,56,14,3,0
1820 DATA 0,56,198,387,257,0,257,387,198,56,0,0
1830 DATA 0,511,257,257,0,0,0,257,257,511,0,0
1840 DATA 0,0,1,1,0,0,0,0,2,3,0,0
1850 DATA 0,0,130,131,0,0,0,0,130,130,0,0
1860 DATA 0,0,509,509,0,0,128,256,269,285,224,0
1870 DATA 0,448,0,448,0,0,0,0,448,0,0,0
1880 DATA 499,273,511,273,415,0,387,398,312,483,487,0
1890 WAIT 0,1,1:END
```
{% endraw %}

## EPSONUTL.BAS

{% raw %}
```bas
10 KEY OFF:CLS
20 SCREEN 0
30 WIDTH 40
40 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
50 PRINT"░┌───────────────────────────────────┐░"
60 PRINT"░│                                   │░"
70 PRINT"░│            7037-A.BAS             │░"
80 PRINT"░│      EPSON PRINTER OPTIONS        │░"
90 PRINT"░│                                   │░"
100 PRINT"░│                                   │░"
110 PRINT"░│ BROUGHT TO YOU BY THE MEMBERS OF  │░"
120 PRINT"░│      ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄      │░"
130 PRINT"░│        █   █   █ █     █   █      │░"
140 PRINT"░│        █   █▄▄▄█ █     █   █      │░"
150 PRINT"░│        █   █     █     █   █      │░"
160 PRINT"░│      ▄▄█▄▄ █     █▄▄▄▄ █▄▄▄█      │░"
170 PRINT"░│                                   │░"
180 PRINT"░│      International PC Owners      │░"
190 PRINT"░│                                   │░"
200 PRINT"░│P.O. Box 10426, Pittsburgh PA 15234│░"
210 PRINT"░│                                   │░"
220 PRINT"░└───────────────────────────────────┘░"
230 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
240 PRINT
250 PRINT "       PRESS ANY KEY TO CONTINUE
260 A$=INKEY$: IF A$="" THEN 260
270 WIDTH 80
280 CLS
1000 CLS
1010 PRINT"IBM/EPSON PRINTER OPTION MENU"
1020 PRINT:PRINT"Choose from the following options:"
1030 PRINT
1040 PRINT"0)END PROGRAM
1050 PRINT"1)REGULAR CHARACTERS(default)
1060 PRINT"2)COMPRESSED CHARACTERS
1070 PRINT"3)REGULAR MODE(default)
1080 PRINT"4)EMPHASIZED MODE-REGULAR CHARACTERS ONLY"
1090 PRINT"5)DOUBLE-STRIKE MODE"
1100 PRINT"6)EMPHASIZED DOUBLE-STRIKE MODE"
1110 PRINT"7)NORMAL LINE SPACING (DEFAULT)"
1120 PRINT"8)COMPRESSED LINE SPACING"
1130 PRINT"9)SILENCE PAPER-OUT BUZZER"
1140 PRINT
1150 INPUT"WHICH OPTION DO YOU WISH?";ANS
1160 IF ANS<0 OR ANS>9 THEN BEEP:GOTO 1150
1170 IF ANS=0 THEN 1310
1180 ON ANS GOSUB 1220,1230,1240,1250,1260,1270,1280,1290,1300
1190 PRINT"DONE..."
1200 FOR DELAY=1 TO 1000:NEXT
1210 GOTO 1000
1220 LPRINT CHR$(18);:RETURN
1230 LPRINT CHR$(15);:RETURN
1240 LPRINT CHR$(27);"F";CHR$(27);"H";:RETURN
1250 LPRINT CHR$(27);"E";:RETURN
1260 LPRINT CHR$(27);"G";:RETURN
1270 LPRINT CHR$(27);"E";CHR$(27);"G";:RETURN
1280 LPRINT CHR$(27);"2";:RETURN
1290 LPRINT CHR$(27);"0";:RETURN
1300 LPRINT CHR$(27);"8";:RETURN
1310 END
```
{% endraw %}

## FILES61.TXT

{% raw %}
```
Disk No:   61
Program Title:  Printgr and IPCO Programs
PC-SIG version: 1.1

An early and quite good set of printer utilities for users of the
EPSON/compatible printers who want to produce graphics.  The two
programs, PRINTGR1 and PRINTGR2, will produce printed copies of screen
displays in either medium (320x200) or high (640x200) resolution mode.
PRINTGR1 prints a small (5.3"W x 2.5"H) upright image.  PRINTGR2 prints
an expanded (6.6"W x 8.9") image that is rotated clockwise by 90
degrees.  The IPCO package contains several printer utilities, as well
as some games for a change of pace.

Usage:  Epson Printer Utilities.

Special Requirements:  Graphic compatible printer and a version of
BASIC.

How to Start:  Type GO (press enter).

Suggested Registration:  $9.00

File Descriptions:

PC-PAD   LST  Part of PC-PAD.BASappend.
PC-PAD   BAS  Editor, spreadsheet, and printing program.
BANNER   BAS  IPCO Creates large letters on printer.
SLOTMACH BAS  IPCO Roulette type game YAHTZEE  BAS  IPCO game.
STATCAPS BAS  IPCO Names, states and capitals - needs BASICA.
ITALICS  BAS  IPCO Prints in italics on Epson MX-80 printer.
NFL-PK   BAS  IPCO Picks point spreads between the 29 teams of the NFL.
MEMSIZE  BAS  IPCO Resets top of memory to avoid startup delay.
-------- ---  PRINTGR, prints screen graphics on Epson printer.
EPSONUTL BAS  IPCO Epson printer utility.
PRINTGR1 EXE  Prints medium/high resolution graphics - 5.3"x2.5".
PRTSC_2  ASM  Assembly language source for PRINTGR2.EXE.
PRTSC_1  ASM  Assembly language source for PRINTGR1.EXE.
PRINTGR  ASM  Common assembly language source for PRINTGR1&2.EXE.
PRINTGR2 EXE  Prints medium/high resolution graphics - 6.6"x8.9".
PRINTGR  DOC  Documentation for PRINTGR1&2.BAS.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1985,86,87,88.89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║           <<<<  Disk No: 61  Printgr and IPCO Programs  >>>>            ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  How to Start: Consult the .DOC and .TXT files for directions.  To run  ║
║  a program with the suffix .COM, .EXE, or .BAT, just type its name,     ║
║  i.e., for PRINTGR1.EXE, type PRINTGR and hit <ENTER>.  To run the      ║
║  BASIC programs, consult the directions for your computer system.       ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## ITALICS.BAS

{% raw %}
```bas
10 CLS
20 A$=STRING$(80,205)
30 PRINT A$
40 PRINT TAB(26)"7013-A.BAS     ITALICS PRINTER"
50 COLOR 23,0,0
60 PRINT :PRINT :PRINT TAB(38)"IPCO"
70 COLOR 7,0,0
80 PRINT :PRINT :PRINT TAB(29)"INTERNATIONAL PC OWNERS"
90 PRINT :PRINT :PRINT TAB(17)"p.o. box 10426, pittsburgh, pennsylvania 15234"
100 PRINT A$
110 PRINT :PRINT :PRINT :PRINT :PRINT
120 PRINT TAB(28)"PRESS ANY KEY TO CONTINUE"
130 A$=INKEY$:IF A$="" THEN 130
140 CLS
1000 ' IPCO  Software Exchange Submission PRTITAL2 authored on November 15, 1982
1010 '
1020 '  by Michael Csontos, 3228 Livonia Center Road, Lima, New York 14485
1030 '
1040 PRINT "Do you have a  1.) high resolution":PRINT
1050 PRINT "                   80 character width":PRINT
1060 PRINT "         or a  2.) low resolution":PRINT
1070 PRINT "                   40 character width":PRINT
1080 PRINT "display?":PRINT
1090 INPUT "(1 or 2)";DISP
1100 IF DISP<1 OR DISP>2 OR INT(DISP)<>DISP THEN 1090
1110 ON DISP GOTO 1120,1520
1120 WIDTH 80:WIDTH "LPT1:",255:SCREEN 0,0,0:KEY OFF:CLS
1130 PRINT "This little program will print your ASCII text files in italics on an":PRINT
1140 PRINT "EPSON MX-80 printer.  It was inspired by the program MORSECOD on the":PRINT
1150 PRINT "CAPITOL PC VOL 2.32 disk from the (PC)^3 library after discovering how":PRINT
1160 PRINT "the correct code was produced for both upper and lower case characters.":PRINT
1170 PRINT "The conversion process {using (CHR$(ASC$(x$) OR 32) or 128 in this case}":PRINT
1180 PRINT "should be very useful for other applications such as generating a graphics":PRINT
1190 PRINT "keyboard.":PRINT
1200 INPUT "Enter the filespec of the file to be typed. (nnnnnnnn.eee) "; FILESPEC$
1210 CLS:LOCATE 25,1:PRINT "FILESPEC is " FILESPEC$:LOCATE 1,1:
1220 ON ERROR GOTO 1390
1230 PRINT "You have the choice of several print typefaces. They are:":PRINT
1240 PRINT "      1: double width emphasized  40 characters/line  40 lines/page
1250 PRINT "      2: double width compressed  66 characters/line  50 lines/page
1260 PRINT "      3: normal emphasized        80 characters/line  60 lines/page
1270 PRINT "      4: compressed              132 characters/line  80 lines/page
1280 PRINT "      5: tiny (script)           132 characters/line 120 lines/page
1290 PRINT:PRINT "Please select your choice (1-5) or press <Esc> to quit.";
1300 TYPEFACE$=INKEY$:IF TYPEFACE$=CHR$(27) THEN KEY ON:END ELSE IF TYPEFACE$="" THEN 1300 ELSE TYPEFACE=VAL(TYPEFACE$):IF TYPEFACE<1 OR TYPEFACE>5 OR INT(TYPEFACE)<>TYPEFACE THEN PRINT "Please press a number from 1 - 5 or press <Esc> to quit.":GOTO 1290
1310 PRINT TYPEFACE:PRINT
1320 LPRINT CHR$(27)"@"
1330 ON TYPEFACE GOTO 1340,1350,1360,1370,1380
1340 LPRINT CHR$(27)CHR$(69)CHR$(27)CHR$(87)CHR$(1)CHR$(27)CHR$(65)CHR$(18);:GOTO 1430'double width
1350 LPRINT CHR$(15)CHR$(27)CHR$(87)CHR$(1)CHR$(27)CHR$(65)CHR$(14);:GOTO 1430'double width compressed
1360 LPRINT CHR$(27)CHR$(69);:GOTO 1430'normal emphasized
1370 LPRINT CHR$(15)CHR$(27)CHR$(65)CHR$(9);:GOTO 1430' compressed
1380 LPRINT CHR$(15)CHR$(27)"S"CHR$(INT(RND*2))CHR$(27)"A"CHR$(6);:GOTO 1430'TINYPRNT
1390 IF ERR=27 THEN PRINT "Your printer is off or empty. Program will continue when problem is fixed.":RESUME
1400 IF ERR=24 THEN PRINT "Waiting for printer.":RESUME
1410 IF ERR=25 THEN PRINT "Printer off line or something. Waiting!":RESUME
1420 ON ERROR GOTO 0
1430 OPEN FILESPEC$ FOR INPUT AS #1
1440 IF EOF(1) THEN CLOSE:PRINT:PRINT "File finished!":PRINT:KEY ON:END
1450 LINE INPUT #1, TEXT$
1460 FOR N=1 TO LEN(TEXT$):LTR$=MID$(TEXT$,N,1)
1470 ITL$=CHR$(ASC(LTR$) OR 128)
1480 LPRINT ITL$;
1490 NEXT N
1500 LPRINT
1510 GOTO 1440
1520 WIDTH 40:WIDTH "LPT1:",255:SCREEN 0,0,0:KEY OFF:CLS
1530 PRINT "This little program will print your      ASCII text files in italics on an"
1540 PRINT "EPSON MX-80 printer.  It was inspired   by the program MORSECOD on the"
1550 PRINT "CAPITOL PC VOL 2.32 disk from the       (PC)^3 library after discovering how"
1560 PRINT "the correct code was produced for both  upper and lower case characters.":PRINT
1570 PRINT "The conversion process {using           (CHR$(ASC$(x$) OR 32) or 128 in this    case} should be very useful for other   applications such as generating a       graphics keyboard.":PRINT
1580 PRINT "Enter the filespec of the file          to be typed (nnnnnnnn.eee).":PRINT
1590 INPUT "FILESPEC";FILESPEC$
1600 CLS:LOCATE 25,1:PRINT "FILESPEC is " FILESPEC$:LOCATE 1,1:
1610 ON ERROR GOTO 1780
1620 PRINT "You have the choice of several print    typefaces. They are:":PRINT
1630 PRINT "1: double width emphasized                 40 characters/line  40 lines/page":PRINT
1640 PRINT "2: double width compressed                 66 characters/line  50 lines/page":PRINT
1650 PRINT "3: normal emphasized                       80 characters/line  60 lines/page":PRINT
1660 PRINT "4: compressed                              132 characters/line  80 lines/page":PRINT
1670 PRINT "5: tiny (script)                           132 characters/line 120 lines/page":PRINT
1680 PRINT:PRINT "Please select your choice (1-5)         or press <Esc> to quit.";
1690 TYPEFACE$=INKEY$:IF TYPEFACE$=CHR$(27) THEN KEY ON:END ELSE IF TYPEFACE$="" THEN 1690 ELSE TYPEFACE=VAL(TYPEFACE$):IF TYPEFACE<1 OR TYPEFACE>5 OR INT(TYPEFACE)<>TYPEFACE THEN PRINT "Please press a number from 1 - 5 or press <Esc> to quit.":GOTO 1680
1700 PRINT TYPEFACE:PRINT
1710 LPRINT CHR$(27)"@"
1720 ON TYPEFACE GOTO 1730,1740,1750,1760,1770
1730 LPRINT CHR$(27)CHR$(69)CHR$(27)CHR$(87)CHR$(1)CHR$(27)CHR$(65)CHR$(18);:GOTO 1820'double width
1740 LPRINT CHR$(15)CHR$(27)CHR$(87)CHR$(1)CHR$(27)CHR$(65)CHR$(14);:GOTO 1820'double width compressed
1750 LPRINT CHR$(27)CHR$(69);:GOTO 1820'normal emphasized
1760 LPRINT CHR$(15)CHR$(27)CHR$(65)CHR$(9);:GOTO 1820' compressed
1770 LPRINT CHR$(15)CHR$(27)"S"CHR$(INT(RND*2))CHR$(27)"A"CHR$(6);:GOTO 1820'TINYPRNT
1780 IF ERR=27 THEN PRINT "Your printer is off or empty. Program will continue when problem is fixed.":RESUME
1790 IF ERR=24 THEN PRINT "Waiting for printer.":RESUME
1800 IF ERR=25 THEN PRINT "Printer off line or something. Waiting!":RESUME
1810 ON ERROR GOTO 0
1820 OPEN FILESPEC$ FOR INPUT AS #1
1830 IF EOF(1) THEN CLOSE:PRINT:PRINT "File finished!":PRINT:KEY ON:END
1840 LINE INPUT #1, TEXT$
1850 FOR N=1 TO LEN(TEXT$):LTR$=MID$(TEXT$,N,1)
1860 ITL$=CHR$(ASC(LTR$) OR 128)
1870 LPRINT ITL$;
1880 NEXT N
1890 LPRINT
1900 GOTO 1830
1910 ' SAVE"prtital2",a
```
{% endraw %}

## MEMSIZE.BAS

{% raw %}
```bas
10 KEY OFF:CLS
20 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
30 PRINT"░┌───────────────────────────────────┐░"
40 PRINT"░│                                   │░"
50 PRINT"░│            7029-A.BAS             │░"
60 PRINT"░│      MEMORY SIZING ROUTINE        │░"
70 PRINT"░│                                   │░"
80 PRINT"░│                                   │░"
90 PRINT"░│ BROUGHT TO YOU BY THE MEMBERS OF  │░"
100 PRINT"░│      ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄      │░"
110 PRINT"░│        █   █   █ █     █   █      │░"
120 PRINT"░│        █   █▄▄▄█ █     █   █      │░"
130 PRINT"░│        █   █     █     █   █      │░"
140 PRINT"░│      ▄▄█▄▄ █     █▄▄▄▄ █▄▄▄█      │░"
150 PRINT"░│                                   │░"
160 PRINT"░│      International PC Owners      │░"
170 PRINT"░│                                   │░"
180 PRINT"░│P.O. Box 10426, Pittsburgh PA 15234│░"
190 PRINT"░│                                   │░"
200 PRINT"░└───────────────────────────────────┘░"
210 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
220 PRINT
230 PRINT "       PRESS ANY KEY TO CONTINUE
240 A$=INKEY$: IF A$="" THEN 240
250 CLS
1000 REM   *** MEMORY SIZING ROUTINE ***
1010 '     COPYRIGHT (C) BY ROBERT BAER  FEBRUARY 5,1983
1020 '     IPCO MAY SELL FOR OWN SUPPORT
1030 '     THOSE WHO COPY REQUESTED TO DONATE $5.00 TO:
1040 '      International PC Owners, Inc.
1050 '      P.O. Box 10426
1060 '      Pittsburgh, PA. 15234
1070 '
1080 '     REQUIREMENTS: 64K MEMORY; ADDITIONAL MEMORY TO BE CONTIGUOUS.
1090 '      SET PLANAR SWITCHES FOR 64K SO SYSTEM IS READY IN SHORTEST TIME.
1100 '     THIS PROGRAM ALLOWS ONE TO "SYSGEN" ANY AMOUNT OF MEMORY FROM 64K
1110 '     TO MAXIMUM AVAILABLE, IN "1K" CHUNKS (WHERE 1K=1024 BYTES).
1120 '     NOTE THAT THE KEYBOARD CASE DOES NOT DROP TO LOWER(IF IN UPPER).
1130 '
1140 '
1150 DEF SEG=0 : POKE 8,&HC2 : 'KILL PARITY CHECK SYSTEM ZAPPER
1160 I=&H1000 : ' SETUP AND CHECK MEMORY IN 64K CHUNKS
1170 DEF SEG=I : J=PEEK(0) : POKE 0,0 : J=PEEK(0) : IF J<>0 THEN 1190
1180 I=I+&H1000 : IF I<>&HA000 THEN 1170 : 'SMALLEST STEP IS 64K!!!
1190 M=I/64 : DEF SEG : 'NOW KNOW MAX MEMORY AVAILABLE
1200 REM  SUBRT ' TO SIZE MEMORY(512K IS EXAMPLE DUMMY)
1210 DATA &HB8,&H40,&H00      :'MOV  AX,0040    SETUP
1220 DATA &H50                :'PUSH AX               REGISTER
1230 DATA &H1F                :'POP  DS                        DS
1240 DATA &HB8,&H34,&H12      :'MOV  AX,1234    FAKE
1250 DATA &HA3,&H72,&H00      :'MOV  [72],AX         KEYBOARD RESET
1260 DATA &HB8,&H00,&H02      :'MOV  AX,0200    LOAD
1270 DATA &HA3,&H15,&H00      :'MOV  [15],AX         512K ADDED MEMORY
1280 DATA &HB8,&H40,&H02      :'MOV  AX,0240    LOAD
1290 DATA &HA3,&H13,&H00      :'MOV  [13],AX         576K TOTAL MEMORY
1300 DATA &HBB,&HE0,&H0F      :'MOV  BX,0FE0    LOAD
1310 DATA &H53                :'PUSH BX              REGISTER
1320 DATA &H07                :'POP  ES                       ES
1330 DATA &H26                :'SEG  ES
1340 DATA &HFF,&H2E,&H21,&H00 :'JMP  L,[21]     SETUP NEW SIZE;RESET SYSTEM
1350 DATA &H22,&HE4,&H00,&HF0 :'                AT F000:E422
1360 REM  LOCATION IS 0:FE00
1370 DEF SEG=&HFE0 : SUBRT=0
1380 FOR I=0 TO 36 : READ J : POKE I,J : NEXT I
1390 PRINT "ENTER DESIRED MEMORY TO USE, FROM 64K TO";STR$(M);
1400 INPUT "K :",T$ : IF VAL(T$)<64 OR VAL(T$)>M THEN 1390
1410 GOSUB 1440 : POKE &H12,L : POKE &H13,H
1420 T=VAL(T$)-64 : T$=STR$(T) : GOSUB 1440 : POKE &HC,L : POKE &HD,H
1430 KEY OFF : CLS : LOCATE ,,1 : CALL SUBRT : DO IT!!!!
1440 REM
1450 T=VAL(T$) : H=INT(T/256) : L=T-H*256 : RETURN
1460 END
```
{% endraw %}

## NFL-PK.BAS

{% raw %}
```bas
10 KEY OFF:CLS
20 SCREEN 0
30 WIDTH 40
40 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
50 PRINT"░┌───────────────────────────────────┐░"
60 PRINT"░│                                   │░"
70 PRINT"░│            6013-A.BAS             │░"
80 PRINT"░│             NFL-PIKS              │░"
90 PRINT"░│                                   │░"
100 PRINT"░│                                   │░"
110 PRINT"░│ BROUGHT TO YOU BY THE MEMBERS OF  │░"
120 PRINT"░│      ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄      │░"
130 PRINT"░│        █   █   █ █     █   █      │░"
140 PRINT"░│        █   █▄▄▄█ █     █   █      │░"
150 PRINT"░│        █   █     █     █   █      │░"
160 PRINT"░│      ▄▄█▄▄ █     █▄▄▄▄ █▄▄▄█      │░"
170 PRINT"░│                                   │░"
180 PRINT"░│      International PC Owners      │░"
190 PRINT"░│                                   │░"
200 PRINT"░│P.O. Box 10426, Pittsburgh PA 15234│░"
210 PRINT"░│                                   │░"
220 PRINT"░└───────────────────────────────────┘░"
230 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
240 PRINT
250 PRINT "       PRESS ANY KEY TO CONTINUE
260 A$=INKEY$: IF A$="" THEN 260
270 WIDTH 80
280 CLS
1000 KEY OFF
1010 CLS
1020 ' FOOTBALL PICKS BY DAVID BRONSON.
1030 ' MODIFIED FOR IBM-PC BY CHUCK HARRINGTON 2/28/83
1040 '
1050 '
1060 'SEE POPLUAR COMPUTING FOR JANUARY, 1982 P. 74.
1070 '
1080 PRINT
1090 PRINT "THIS PROGRAM WILL LET YOU PICK THE POINT SPREAD"
1100 PRINT "OF ANY GIVEN FOOTBALL GAME BETWEEN THE 29 TEAMS OF"
1110 PRINT "THE NFL.  TO PERFORM RELIABLY, THE PROGRAM"
1120 PRINT "NEEDS THE RESULTS OF AT LEAST THE FIRST FOUR WEEKS"
1130 PRINT "GAMES. THE MORE RESULTS YOU GIVE THE PROGRAM, THE BETTER"
1140 PRINT "IT'S PREDICTIONS WILL BE."
1150 PRINT:PRINT: INPUT "PRESS <ENTER> TO CONTINUE"; R$
1160 CLS
1170 PRINT "SELECT AN OPTION BY PRESSING THE APPROPRIATE KEY..."
1180 PRINT:PRINT:PRINT
1190 PRINT "<S>ET UP THE SYSTEM."
1200 PRINT TAB(10) "DO THIS ONLY ONCE PER SEASON AT FIRST USE."
1210 PRINT
1220 PRINT "<U>PDATE THE TEAM FILE - DO THIS AFTER EACH WEEKS' RESULTS ARE IN."
1230 PRINT
1240 PRINT "<P>REDICT RESULTS OF A GAME."
1250 PRINT
1260 PRINT "<R>EPORT THE CURRENT STATISTICS."
1270 PRINT
1280 PRINT "<Q>UIT."
1290 A$=INKEY$: IF A$="" THEN 1290
1300 IF A$ = "S" THEN 1380
1310 IF A$ = "U" THEN 1660
1320 IF A$ = "P" THEN 2070
1330 IF A$ = "R" THEN 2450
1340 IF A$ = "Q" THEN END
1350 GOTO 1290
1360 FOR I = 1 TO 1000: NEXT I
1370 RETURN
1380 CLS: PRINT "SET UP SYSTEM: DO NOT PROCEED IF YOU HAVE ALREADY"
1390 PRINT "DONE THIS ONCE THIS SEASON, BECAUSE YOUR PREVIOUS"
1400 PRINT "RESULTS WILL BE ERASED."
1410 PRINT:PRINT "DO YOU REALLY WANT TO SET UP THE SYSTEM?";
1420 INPUT " (Y OR N)";R$
1430 IF R$= "Y" OR R$ = "y" THEN 1440 ELSE 1160
1440 PRINT
1450 PRINT "SETTING UP SYSTEM...STANDBY"
1460 GOSUB 2650
1470 FOR T = 1 TO 28
1480 READ TM$
1490 DM$=MKI$(0)
1500 LSET T$=TM$: LSET O$=DM$: LSET D$=DM$: LSET PS$=DM$
1510 LSET PG$=DM$: LSET G$=DM$: LSET W$=DM$
1520 PUT #1,T
1530 NEXT T
1540 CLOSE #1
1550 PRINT
1560 PRINT "SET-UP COMPLETE."
1570 INPUT "PRESS <ENTER> TO CONTINUE";R$
1580 GOTO 1160
1590 DATA ATLANTA,GREEN BAY,NEW YOUR (GIANTS),CHICAGO
1600 DATA LOS ANGELES,PHILADELPHIA,DALLAS,MINNESOTA
1610 DATA SAN FRANSISCO,DETROIT,NEW ORLEANS, ST LOUIS
1620 DATA TAMPA BAY,WASHINGTON,BALTIMORE,DENVER
1630 DATA NEW ENGLAND,BUFFALO,HOUSTON,NEW YORK (JETS)
1640 DATA CINCINNATI,KANSAS CITY,OAKLAND,CLEVELAND
1650 DATA MIAMI,PITTSBURGH,SAN DIEGO,SEATTLE
1660 CLS:PRINT "UPDATE STATISTICS OPTION"
1670 PRINT
1680 INPUT "HOW MANY WEEKS HAVE BEEN PLAYED IN THE REGULAR SEASON";G
1690 IF G<1 THEN 1160
1700 GOSUB 2650:  'OPEN STATS FILE.
1710 GOSUB 2000: 'DISPLAY LIST OF TEAMS.
1720 PRINT
1730 INPUT "TYPE THE NUMBER OF THE TEAM TO BE UPDATED (0 TO QUIT)...";R
1740 IF R < 1 OR R> 28 THEN CLOSE #1: GOTO 1160
1750 CLS
1760 GET #1,R
1770 PRINT "TEAM:";TAB(30); T$
1780 PRINT STRING$(50,"-")
1790 PRINT "OFFENSIVE YARDS:";TAB(30);CVI(O$)
1800 PRINT
1810 INPUT "NEW INFO"; O1
1820 PRINT
1830 PRINT "DEFENSIVE YARDS:";TAB(30); CVI(D$)
1840 PRINT
1850 INPUT "NEW INFO";D1
1860 PRINT
1870 PRINT "POINTS SCORED:";TAB(30);CVI(PS$)
1880 PRINT
1890 INPUT "NEW INFO:";P1
1900 PRINT
1910 PRINT "POINTS GIVEN UP:";TAB(30);CVI(PG$)
1920 PRINT
1930 INPUT "NEW INFO";P2
1940 PRINT
1950 W=CVI(W$): IF P1>P2 THEN W=W+1
1960 LSET O$=MKI$(O1): LSET D$=MKI$(D1): LSET PS$=MKI$(P1)
1970 LSET PG$=MKI$(P2): LSET G$=MKI$(G): LSET W$=MKI$(W)
1980 PUT #1,R
1990 GOTO 1710
2000 CLS: RESTORE
2010 FOR I=1 TO 27 STEP 2
2020 READ T1$,T2$
2030 PRINT I;"-";T1$;TAB(32);I+1;"-";T2$
2040 IF I=13 THEN PRINT STRING$(50,"-")
2050 NEXT I
2060 RETURN
2070 CLS:PRINT "PREDICT RESULTS OPTION"
2080 GOSUB 2650: 'OPEN STATS FILE
2090 GOSUB 2000: 'DISPLAY LIST OF TEAMS
2100 PRINT
2110 INPUT "ENTER HOME TEAM'S NUMBER (0 TO QUIT)";HT%
2120 PRINT
2130 IF HT%<1 OR HT%>28 THEN CLOSE #1: GOTO 1160
2140 INPUT "ENTER VISITOR TEAM'S NUMBER (0 TO QUIT)";VT%
2150 IF VT%<1 OR VT%>28 THEN CLOSE #1: GOTO 1160
2160 GET #1,HT%
2170 HT$=T$: HO=CVI(O$): HD=CVI(D$): HPS=CVI(PS$): HG=CVI(PG$): G=CVI(G$)
2180 CLS
2190 GET #1,VT%
2200 VT$=T$: VD=CVI(D$): VO=CVI(O$): VPS=CVI(PS$): VG=CVI(PG$)
2210 PRINT VT$; "AT ";HT$; "..."
2220 IF G=0 THEN PRINT:PRINT "NOT ENOUGH INFO.":CLOSE #1: GOTO 1150
2230 TH=HO + VD: TV=VO+HD
2240 EHG=TH/(G*2):EVG=TV/(G*2)
2250 THP=EHG*7/100: TVP=EVG*7/100
2260 AHP=HPS+VG: AVP=VPS+HG
2270 HHP=AHP/(G*2): VX=AVP/(G*2)
2280 VF=(TVP+VX)/2: HF=(THP+HHP)/2
2290 VVC=(VO/100): VR=(VD/100)
2300 VX=VVC*7: VW=VR*7
2310 HX=(HO/100)*7: HR=(HD/100)*7
2320 VTC=VPS-VX: VQ=VG-VW
2330 HW=HPS-HX: HA=HG-HR
2340 HC=HW/G: VC=VTC/G
2350 HQ=HA/G: VQ=VQ/G
2360 HS=HF+HC-VQ: VS=VF+VC-HQ
2370 SP=VS-HS
2380 IF ABS(SP)<1 THEN 2440
2390 IF SP <-1 THEN WN$=HT$ ELSE WN$=VT$
2400 PRINT WN$; "BY";INT(ABS(SP)+.5); "POINTS."
2410 PRINT: PRINT
2420 INPUT "PRESS <ENTER> TO CONTINUE";R$
2430 CLS: GOTO 2090
2440 PRINT VT$;"AT ";HT$;"IS TOO CLOSE TO CALL.": GOTO 2100
2450 CLS: PRINT "REPORTS OPTION"
2460 GOSUB 2650: 'OPEN STATS FILE
2470 FOR P=1 TO 4
2480 GOSUB 2580: ' PRINT HEADINGS
2490 FOR T=1 TO 7: 'SEVEN TEAMS PER PAGE
2500 GET #1,(P-1)*7 + T
2510 PRINT T$;TAB(22);CVI(G$);TAB(29);CVI(W$);
2520 PRINT TAB(35);CVI(O$);TAB(43);CVI(D$);
2530 PRINT TAB(51);CVI(PS$);TAB(57);CVI(PG$)
2540 PRINT
2550 NEXT T: INPUT "PRESS <ENTER> TO CONTINUE";R$
2560 NEXT P
2570 CLOSE #1: GOTO 1160
2580 CLS: PRINT "TEAM";TAB(22);"GAMES";TAB(29);"WINS";
2590 PRINT TAB(35); "YDS";TAB(43);"YDS";
2600 PRINT TAB(51); "PTS";TAB(43); "PTS"
2610 PRINT TAB(35); "GAINED";TAB(43); "GIVEN";
2620 PRINT TAB(51);"WON"; TAB(57);"LOST"
2630 PRINT STRING$(64,"-")
2640 RETURN
2650 OPEN "R",1,"STATS"
2660 FIELD 1,20 AS T$,2 AS O$,2 AS D$,2 AS PS$,2 AS PG$,2 AS G$, 2 AS W$,96 AS ZZ$
2670 RETURN
```
{% endraw %}

## PC-PAD.BAS

{% raw %}
```bas
20 SCREEN 0,0,0:WIDTH 80:CLS:KEY OFF:LOCATE 5,1:Q$=SPACE$(20):PRINT Q$;"          PC\PAD  (ver. 1.3)":PRINT Q$;"an editor/spreadsheet/printing program":PRINT:PRINT:PRINT Q$;"     If you are using this program"
70 PRINT Q$;"         and find it of value,":PRINT Q$;"   a $20 contribution is suggested.":PRINT:PRINT Q$;"               (c) 1983":PRINT Q$;"             P. Fraundorf":PRINT Q$;"            P.O. Box 11394"
130 PRINT Q$;"          St. Louis MO 63105":PRINT:PRINT Q$;"    You are encouraged to copy and":PRINT Q$;"    share this program with others.":LOCATE 24,1:PRINT"any key to continue...";
180 Q$=INKEY$:IF Q$="" THEN 180
190 DEFINT I-N:LMX=400:HCW=8:CC$="\" :DIM A$(LMX+1),M$(50),CSUM(16),RSUM(25):IMX=LMX-22:JMX=IMX-20:LCW=2*HCW:LCM=LCW-1:DEF FNV(I,J)=VAL(MID$(A$(I),LCW*J+1,LCW)):DEF SEG=0:IF (PEEK(1040) AND 48)=48 THEN LD=13 ELSE LD=7
240 KEY ON:KEY 1,CC$+"view  "+CHR$(13) :KEY 2,CC$+"compute"+CHR$(13) :KEY 3,CC$+"up    "+CHR$(13) :KEY 4,CC$+"down  "+CHR$(13) :KEY 5,CC$+"left  "+CHR$(13) :KEY 6,CC$+"right "+CHR$(13) :KEY 7,CC$+"yank  "+CHR$(13)
320 KEY 8,CC$+"put   "+CHR$(13) :KEY 9,CC$+"justify"+CHR$(13) :KEY 10,CC$+"save  "+CHR$(13)
360 FOR I=0 TO LMX:A$(I)="":NEXT:CLS:ON ERROR GOTO 5000
370 PRINT"disk files:":FILES:PRINT:INPUT"disk file name (rtn=none)";F$:IF F$<>"" THEN GOSUB 1260 ELSE NLINE=0
410 INPUT"working file name (rtn=disk file name)";G$:IF G$="" THEN G$=F$
430 IF G$="" THEN END
440 IP=1:JP=0:IX=1:JY=1
460 J0=JP:J1=JP+22:GOSUB 890:LOCATE JY,1 '
470 COLOR 13,0:LINE INPUT"",X$ '
480 COLOR 10,0:JY=CSRLIN-1:XX=INSTR(X$,CC$):IF XX=0 THEN 770
510 Y$=MID$(X$,XX+1,1):IF Y$="v" THEN 460
530 IF Y$="c" THEN 9990
540 IF Y$="u" THEN IF JP>0 THEN JP=JP-1:GOTO 460 ELSE 460
550 IF Y$="d" THEN IF JP<IMX THEN JP=JP+1:GOTO 460 ELSE 460
560 IF Y$="l" THEN IF IP>HCW THEN IP=IP-HCW:GOTO 460 ELSE 460
570 IF Y$="r" THEN IF IP<178-HCW THEN IP=IP+HCW:GOTO 460 ELSE 460
580 IF Y$="y" THEN GOSUB 1382:GOTO 460
590 IF Y$="p" THEN GOSUB 1420:GOTO 460
600 IF Y$="j" THEN GOSUB 2060:GOTO 460
610 IF Y$="s" THEN GOSUB 1340:GOTO 460
620 IF Y$=CC$ THEN Y$=MID$(X$,XX+2,1) ELSE 770
640 IF Y$="v" THEN GOSUB 980:GOTO 460
650 IF Y$="c" THEN GOSUB 1190:GOTO 460
660 IF Y$="u" THEN IF JP>19 THEN JP=JP-20:GOTO 460 ELSE JP=0:GOTO 460
670 IF Y$="d" THEN IF JP<JMX THEN JP=JP+20:GOTO 460 ELSE JP=IMX:GOTO 460
680 IF Y$="l" THEN IF IP>64 THEN IP=IP-64:GOTO 460 ELSE IP=1:GOTO 460
690 IF Y$="r" THEN IF IP<113 THEN IP=IP+64:GOTO 460 ELSE IP=177:GOTO 460
700 IF Y$="y" THEN GOSUB 1382:GOSUB 1410:GOTO 460
710 IF Y$="p" THEN 1450
720 IF Y$="j" THEN GOSUB 2010:GOTO 460
730 IF Y$="s" THEN GOSUB 1570:GOTO 460
740 IF Y$="q" THEN GOTO 360
770 L$="":II=0:JX=JP+JY-1:Y$=A$(JX):LA=LEN(Y$):IF LA>IP+79 THEN II=1
790 FOR I=79 TO 1 STEP-1:X$=CHR$(SCREEN(JY,I))
810 IF II=1 THEN L$=X$+L$ ELSE IF X$<>" " THEN II=1:GOTO 810
820 NEXT:LX=IP-1:LL=LEN(L$):IF JX+1>NLINE THEN NLINE=JX+1
840 IF LX>LA THEN A$(JX)=A$(JX)+STRING$(LX-LA," ")+L$:GOTO 870
850 IF LX>LA-79 THEN A$(JX)=LEFT$(A$(JX),LX)+L$:GOTO 870
860 A$(JX)=LEFT$(A$(JX),LX)+L$+STRING$(79-LL," ")+RIGHT$(A$(JX),LA-LX-79)
870 IF JY<23 THEN 470 ELSE IF JP<IMX THEN JP=JP+1:GOTO 460 ELSE 460
890 CLS:LOCATE 24,1:COLOR 0,7:PRINT"^ ";G$;":";TAB(17);"^line";J0;"-";J1;TAB(33);"^col.";IP\LCW;"-";(IP+78)\LCW;TAB(49);"^for HELP:\[F1] ^keylist below:";:LOCATE 1,1,1,LD-1,LD
920 COLOR 6,0:FOR I=J0 TO J1:PRINT MID$(A$(I),IP,79):NEXT:RETURN
980 CLS:Q$=SPACE$(6):LOCATE 4,1:PRINT Q$;"                 ***  available functions  ***":PRINT:PRINT Q$;"[F1]  view file window           \[F1]  print help file":PRINT Q$;"     -------------spreadsheet computation key--------------"
1020 PRINT Q$;"[F2]  update computations        \[F2]  reset filenames":PRINT Q$;"     -----------------window movement keys-----------------":PRINT Q$;"[F3]  move up 1 line             \[F3]  move up 20 lines"
1050 PRINT Q$;"[F4]  move down 1 line           \[F4]  move down 20 lines":PRINT Q$;"[F5]  move left 1/2 column       \[F5]  move left 4 columns":PRINT Q$;"[F6]  move right 1/2 column      \[F6]  move right 4 columns"
1080 PRINT Q$;"     -----------------text processing keys-----------------":PRINT Q$;"[F7]  yank line into memory      \[F7]  yank and delete line":PRINT Q$;"[F8]  put yanked line in text    \[F8]  sequential line insert"
1110 PRINT Q$;"[F9]  right justify line         \[F9]  reset j-options":PRINT Q$;"     -------------------file output key--------------------":PRINT Q$;"[F10] save file to disk          \[F10] print file":PRINT
1140 PRINT Q$;"                        \\q  quit file":LOCATE 24,1:PRINT"except for F# keys, any key to continue...";
1160 Q$=INKEY$:IF Q$="" THEN 1160
1170 RETURN
1190 CLS:PRINT"working filename (rtn=";G$;:INPUT")";X$:IF X$<>"" THEN G$=X$
1210 PRINT"instruction filename (rtn=";H$;:INPUT")";X$:IF X$<>"" THEN H$=X$
1220 INPUT"switch displays (rtn=no)";I$:IF I$="" THEN RETURN
1240 IF LD=13 THEN DEF SEG=0:POKE &H410,(PEEK(&H410) AND &HCF) OR &H10:SCREEN 1,0,0,0:SCREEN 0:WIDTH 40:WIDTH 80:LOCATE,,1,6,7:LD=7 ELSE IF LD=7 THEN DEF SEG=0:POKE &H410,(PEEK(&H410) OR &H30):SCREEN 0:WIDTH 40:WIDTH 80:LOCATE,,1,12,13:LD=13
1250 RETURN
1260 '
1270 OPEN F$ FOR INPUT AS #1:FOR NLINE=0 TO LMX:LINE INPUT #1,A$(NLINE):IF EOF(1) THEN CLOSE #1:RETURN
1310 NEXT:CLOSE #1:RETURN
1340 OPEN G$ FOR OUTPUT AS #1:FOR I=0 TO NLINE:PRINT #1,A$(I):NEXT:CLOSE #1:RETURN
1382 LOCATE 24,1:INPUT;"# of lines (rtn=1) ";NM:IF NM<1 THEN NM=1
1383 IX=JP+JY-1:FOR I=0 TO NM-1:M$(I)=A$(IX+I):NEXT:RETURN
1400 IF NLINE>NM THEN NLINE=NLINE-NM ELSE NLINE=0
1410 FOR I=IX TO NLINE:A$(I)=A$(I+NM):NEXT:FOR I=NLINE+1 TO NLINE+NM+1:A$(I)="":NEXT:RETURN
1420 IX=JP+JY:FOR J=NM-1 TO 0 STEP-1:X$=M$(J):GOSUB 1520:NEXT:RETURN
1450 '
1460 CLS:J0=JP:J1=JP+JY-1:GOSUB 920:J0=J1+1:J1=JP+21:LOCATE JY+2,1:GOSUB 920:COLOR 11,0:LOCATE JY+1,1,1,LD,0 :LINE INPUT"",X$:X$=STRING$(IP-1," ")+X$:XX=INSTR(X$,CC$):IF XX<>0 THEN 460 ELSE IF CSRLIN<>JY+2 THEN BEEP:GOTO 1460
1500 IX=JP+JY:GOSUB 1520:JP=JP+1:GOTO 1460
1520 FOR I=IX TO NLINE:SWAP X$,A$(I):NEXT:NLINE=NLINE+1:IF NLINE>LMX THEN NLINE=LMX:BEEP:RETURN
1560 A$(NLINE)=X$:RETURN
1570 '
1590 CLS:GOSUB 1940:LW=80:W$="" :INPUT"top/bottom margins, in inches (rtn=0)";TBM:INPUT"linespacing (d=double; t=triple; h=1/2; s=1/3; rtn=normal)";D$:IF D$="" THEN LX=6 ELSE IF D$="d" THEN LX=3 ELSE IF D$="t" THEN LX=2
1630 IF D$="h" THEN LX=12 ELSE IF D$="s" THEN LX=18
1640 LM=TBM*LX:LPRINT CHR$(27);"A";CHR$(72/LX);CHR$(27);"2";:INPUT"characters/inch (s=16.5; m=8.25; l=5; rtn=10) ",C$:IF C$="s" OR C$="m" THEN LPRINT CHR$(15);:LW=132
1670 IF C$="l" OR C$="m" THEN W$=CHR$(14):LW=LW/2
1680 WIDTH"lpt1:",LW:INPUT"intensity (d=double, e=emphasized, b=both, rtn=light) ",I$:IF I$="d" OR I$="b" THEN LPRINT CHR$(27)+"G";
1710 IF I$="e" OR I$="b" THEN LPRINT CHR$(27)+"E";
1720 LPRINT CHR$(27);"D";:FOR I=18 TO 74 STEP 8:LPRINT CHR$(I);:NEXT:LPRINT CHR$(0);:INPUT;"from row: ",I0:INPUT;" to: ",I1:IF I1=0 THEN I1=NLINE:PRINT I1 ELSE PRINT
1770 INPUT;"from column: ",J0:INPUT;" to: ",J1:IF J1=0 THEN J1=J0+7:PRINT J1 ELSE PRINT
1790 INPUT"indentation (rtn=0 spaces) ";INDENT:IX=I0:J1=(J1-J0+1)*LCW:J0=J0*LCW+1:IF J1+INDENT>=LW THEN J1=LW-INDENT-1
1820 FOR I=1 TO LM '
1830 LPRINT:NEXT:FOR I=1 TO 11*LX-2*LM:LPRINT SPC(INDENT);W$+MID$(A$(IX),J0,J1):IF IX<I1 THEN IX=IX+1 ELSE GOSUB 1940:RETURN
1880 NEXT:FOR I=1 TO LM:LPRINT:NEXT:GOTO 1820
1940 LPRINT CHR$(27);"A";CHR$(12);'
1950 LPRINT CHR$(27);"2";:LPRINT CHR$(18);:LPRINT CHR$(20);:LPRINT CHR$(27)+"F";:LPRINT CHR$(27)+"H";:WIDTH"lpt1:",80:RETURN
2010 '
2020 LOCATE 24,1:INPUT;"line width (rtn=60)";LWIDTH:IF LWIDTH=0 THEN LWIDTH=60
2040 INPUT;"  how many lines at once (rtn=1)";JL:IF JL=0 THEN JL=1
2050 RETURN
2060 '
2070 IF LWIDTH=0 THEN GOSUB 2020
2080 J0=JY+JP-1:J1=J0+JL-1:IF J1>NLINE THEN J1=NLINE
2090 FOR IX=J0 TO J1:GOSUB 2140:NEXT:RETURN
2140 Y$=A$(IX)
2160 YL=LEN(Y$):IF RIGHT$(Y$,1)=" " THEN Y$=LEFT$(Y$,YL-1):GOTO 2160
2180 IF LEFT$(Y$,1)=CHR$(9) THEN Y$="        "+RIGHT$(Y$,YL-1):YL=YL+7
2190 IF YL=0 OR YL=LWIDTH THEN RETURN
2200 Z$="":M=1:WHILE LEFT$(Y$,1)=" ":Z$=Z$+CHR$(0):Y$=RIGHT$(Y$,YL-M):M=M+1:WEND:Y$=Z$+Y$:IF YL<LWIDTH THEN GOSUB 2420 ELSE GOSUB 2590
2260 YL=LEN(Y$):NEEDED=LWIDTH-YL:IF INSTR(Y$," ")=0 THEN NEEDED=0
2280 C$=LEFT$(A$(IX+1),1):IF C$="" OR C$=" " OR C$=CHR$(0) OR C$=CHR$(9) THEN NEEDED=0
2300 Z$="":FOR I=1 TO NEEDED
2320 M=INSTR(Y$," "):IF M=0 THEN Y$=Z$+Y$:YL=LEN(Y$):Z$="":GOTO 2320
2340 IF M=1 THEN Z$=Z$+" ":Y$=RIGHT$(Y$,YL-1):YL=YL-1:GOTO 2320
2350 Z$=Z$+LEFT$(Y$,M)+" ":Y$=RIGHT$(Y$,YL-M):YL=YL-M:NEXT:Y$=Z$+Y$:YL=LEN(Y$):Z$="":M=1:WHILE LEFT$(Y$,1)=CHR$(0):Z$=Z$+" ":Y$=RIGHT$(Y$,YL-M):M=M+1:WEND:A$(IX)=Z$+Y$:RETURN
2420 '
2430 J=IX+1:WHILE NLINE>=J:C$=LEFT$(A$(J),1):IF C$="" OR C$=" " OR C$=CHR$(9) OR C$=CHR$(0) THEN RETURN
2470 WHILE A$(J)<>"":ZL=LEN(A$(J)):M=INSTR(A$(J)," "):IF M=0 THEN ZL=ZL+1:M=ZL
2500 IF YL+M>LWIDTH THEN RETURN
2510 YL=YL+M:Y$=Y$+" ":IF M>1 THEN Y$=Y$+LEFT$(A$(J),M-1)
2520 A$(J)=RIGHT$(A$(J),ZL-M):WEND:Z$="":FOR I=NLINE TO J STEP-1:SWAP Z$,A$(I):NEXT:NLINE=NLINE-1:WEND:RETURN
2590 '
2600 Z$=RIGHT$(Y$,YL-LWIDTH):YL=LWIDTH:Y$=LEFT$(Y$,LWIDTH)
2610 C$=RIGHT$(Y$,1):YL=YL-1:Y$=LEFT$(Y$,YL):IF C$<>" " THEN Z$=C$+Z$:GOTO 2610
2630 FOR I=IX+1 TO NLINE:SWAP Z$,A$(I):NEXT:NLINE=NLINE+1:IF NLINE>LMX THEN NLINE=LMX:BEEP:RETURN
2650 A$(NLINE)=Z$:RETURN
5000 '
5010 Q$="        ...File not found...  ":IF ERR=53 AND ERL=1270 THEN PRINT Q$:RESUME 370
5030 IF ERR=53 AND ERL=9990 THEN PRINT Q$;:H$="":RESUME 9990
5040 IF ERR=61 AND ERL=1360 THEN PRINT"Disk Full:make room before saving"
5050 IF ERR=25 AND ERL=1940 THEN PRINT"Printer not On-line"
5060 IF ERR=27 THEN PRINT"Out of Paper or Printer Off"
5070 PRINT:PRINT"error #";ERR;" at line ";ERL;"; type CONT to resume...":STOP:RESUME 460
9630 IF NROW<2 THEN GOTO 9770
9640 FOR J=0 TO NCOL-1:CSUM(J)=0:FOR I=0 TO NROW-1:CSUM(J)=CSUM(J)+FNV(I+NROW0,J+NCOL0):NEXT:NEXT:I=NROW0+NROW:TSUM=0:FOR J=NCOL0 TO NCOL0+NCOL-1:X=CSUM(J-NCOL0):GOSUB 9900:TSUM=TSUM+CSUM(J-NCOL0):NEXT:J=NCOL0+NCOL:X=TSUM:GOSUB 9900
9770 IF NCOL<2 THEN RETURN
9780 FOR I=0 TO NROW-1:RSUM(I)=0:FOR J=0 TO NCOL-1:RSUM(I)=RSUM(I)+FNV(I+NROW0,J+NCOL0):NEXT:NEXT:J=NCOL0+NCOL:FOR I=NROW0 TO NROW0+NROW-1:X=RSUM(I-NROW0):GOSUB 9900:NEXT:RETURN
9900 X$=STR$(X)
9920 LX=LEN(X$):IF LX<LCM THEN X$=STRING$(LCM-LX," ")+X$ ELSE X$=LEFT$(X$,LCM)
9940 LA=LEN(A$(I)):LX=LCW*J:IF LX>LA THEN A$(I)=A$(I)+STRING$(LX-LA," ")+X$:RETURN
9960 IF LX>LA-LCM THEN A$(I)=LEFT$(A$(I),LX)+X$:RETURN
9970 A$(I)=LEFT$(A$(I),LX)+X$+RIGHT$(A$(I),LA-LX-LCM):RETURN
9990 IF H$="" THEN LOCATE 24,1:INPUT;"instruction filename";H$:IF H$="" THEN 460 ELSE CHAIN MERGE H$,10000,ALL
10000 '
10010 ON ERROR GOTO 5000 :NROW0=FNV(2,6):NCOL0=FNV(3,6):NROW=FNV(4,6):NCOL=FNV(5,6) :GOSUB 9630 :I=NROW0+NROW:J=NCOL0-1:X$="Column Totals":GOSUB 9920 :I=NROW0-2:J=NCOL0+NCOL:X$="Row Totals":GOSUB 9920 :GOTO 460
```
{% endraw %}

## PRINTGR.ASM

{% raw %}
```
PAGE 50,132
TITLE PRINT_GRAPHICS (PRINTGR1.ASM)
COMMENT *
================================================================
            PROGRAM DESCRIPTION
This program will print medium and high-resolution screen graphics
on an Epson MX-80 printer equipped with GRAFTRAX.  It may be
invoked at any time by pressing Alt-PrtSc.

        Author:    Steve Titcomb
                   Sherman Fairchild Laboratory
                   Lehigh University
                   Bethlehem, PA  18015

        Version:   1.0
        Date:      2/18/83

I am distributing this program as FREEWARE (tm) and encouraging 
copying.  A contribution of 9$ would be greatly appreciated.

       copyright (c) 1983 Steve Titcomb

===============================================================
*
        EXTRN   PRTSC_1:FAR
;Equates.
KB_DATA EQU     60H
ALT_SHIFT       EQU     08H
;
BIOS    SEGMENT AT 0F000H
        ORG     0E987H
KB_INT  LABEL   FAR
BIOS    ENDS
;
BIOS_DATA SEGMENT AT 40H
        ORG     17H
KB_FLAG LABEL   BYTE
BIOS_DATA ENDS
;
STACK   SEGMENT PARA STACK 'STACK'
        DB      16 DUP('STACK   ')
STACK   ENDS
;
CSEG    SEGMENT PARA PUBLIC 'CODE'
START   PROC    FAR
        ASSUME  CS:CSEG,DS:BIOS_DATA
        JMP     FAR PTR INITIALIZE
START   ENDP
;
SUBTTL NEW KEYBOARD INTERRUPT ENTRY POINT
        PAGE
NEW_INT PROC    FAR
        STI
        PUSH    AX
        PUSH    DS
        CLD
        MOV     AX,BIOS_DATA
        MOV     DS,AX
        IN      AL,KB_DATA
        CMP     AL,55           ;PrtSc key?
        JNZ     NEW_RET
        TEST    KB_FLAG,ALT_SHIFT ;Alt key depressed?
        JZ      NEW_RET
        CALL    PRTSC_1
NEW_RET LABEL   NEAR
        POP     DS
        POP     AX
        JMP     KB_INT
NEW_INT ENDP
SUBTTL INITIALIZATION ROUTINE
        PAGE
INITSEG SEGMENT PARA 'CODE'
INITIALIZE      PROC    FAR
        ASSUME  CS:INITSEG
        CLI
        PUSH    DS           ;set up return to beginning of
        SUB     AX,AX        ;program segment prefix
        PUSH    AX
        MOV     BX,0CH       ;get present load segment
        MOV     ES,[BX]
        MOV     AX,SS
        MOV     ES:[103H],AX ;command.com gets new load segment
        ;Set up new keyboard interrupt vector
        SUB     AX,AX
        MOV     DS,AX
        MOV     BX,24H
        MOV     AX,OFFSET NEW_INT
        MOV     [BX],AX
        MOV     AX,CS
        MOV     [BX+2],AX
        STI
        RET
INITIALIZE ENDP
INITSEG ENDS
        END     START
```
{% endraw %}

## PRINTGR.DOC

{% raw %}
```
 
              The two programs, PRINTGR1 and  PRINTGR2,  will  produce
         printed  copies of screen displays in either medium (320x200)
         or high (640x200) resolution mode.  PRINTGR1 prints  a  small
         (5.3"W  x  2.5"H) upright image.  PRINTGR2 prints an expanded
         (6.6"W  x  8.9")  image  that  is  rotated  clockwise  by  90
         degrees.
 
              Only  one  of these may be active at a time.  To install
         either program type PRINTGR1  (or  PRINTGR2)  from  DOS.   It
         then  becomes an extension of DOS and may be activated at any
         time by holding the 'Alt' key and pressing the  'PrtSc'  key.
         Caution:  These programs change the keyboard interrupt vector
         and so will not work with other programs which  do  the  same
         (there  are some).  Both programs will terminate if a printer
         timeout error occurs.  This keeps the system from hanging  up
         if the printer is not ready for some reason.
 
              I  am  very  interested  in  the  FREEWARE  idea so I am
         encouraging copying of both the executable programs  and  the
         source  code  (which  is included on the disk in .ASM files).
         I am requesting a contribution  of  $9  (nine)  if  you  find
         these  programs to be useful.  Also, if you have any problems
         I will be happy to try and help you with them (letters  only,
         please, unless it's a real emergency).
 
             
                   Steve Titcomb
                   Sherman Fairchild Laboratory
                   Lehigh University
                   Bethlehem, PA  18015

```
{% endraw %}

## PRTSC_1.ASM

{% raw %}
```
PAGE 50,132
TITLE PRTSC_1 - DUMP SCREEN GRAPHICS TO PRINTER
;               PROLOG - MODULE DESCRIPTION
;This subroutine dumps the displayed screen graphics to the printer.
;It will print either 320x200 or 640x200 graphics.  The former is
;printed with the printer in 480 mode, and the latter is printed 
;with the printer in 960 mode.
;  All registers are preserved.
CRT_MODE        EQU    49H     ;offset into BIOS data area
CSEG    SEGMENT PARA PUBLIC 'CODE'
GRMASK  DB      ?
PRTSC_1 PROC    FAR
        ASSUME  CS:CSEG
        PUBLIC  PRTSC_1
        PUSH    DS
        PUSH    SI
        PUSH    AX
        PUSH    BX
        PUSH    CX
        PUSH    DX
        MOV     AX,40H
        MOV     DS,AX   ;BIOS data segment
        MOV     AL,DS:[CRT_MODE]
        TEST    AL,6
        JNZ     PR1
        JMP     PRTSC_RET
PR1     LABEL   NEAR
        MOV     CL,'K'          ;480 mode
        MOV     CS:GRMASK,0C0H  ;320X200 graphics
        CMP     AL,6
        JL      PR2
        MOV     CL,'L'          ;960 mode
        MOV     CS:GRMASK,080H  ;640X200 graphics
PR2     LABEL   NEAR
        MOV     AX,0B800H       ;screen segment
        MOV     DS,AX
        MOV     AX,0141H        ;send ESC A 8 to printer for
        MOV     BL,8            ; 8/72" linefeeds
        CALL    ESC_SEQ
ROW     LABEL   NEAR
        MOV     AH,2            ;sen ESC K (or L) n1 n2 to printer
        MOV     AL,CL
        MOV     BX,0140H        ;=320 dots
        CMP     AL,'L'
        JNZ     RO1
        SHL     BX,1            ;=640 dots
RO1     LABEL   NEAR
        CALL    ESC_SEQ
        XOR     BX,BX
        PUSH    CX
COLUMN  LABEL   NEAR
        MOV     AH,CS:GRMASK
COL1    LABEL   NEAR
        MOV     DX,8000H
        MOV     CX,4
        MOV     SI,0
COL2    LABEL   NEAR
        MOV     AL,[BX][SI]
        AND     AL,AH
        JZ      COL3
        OR      DL,DH
COL3    LABEL   NEAR
        SHR     DH,1
        MOV     AL,[BX+2000H][SI]
        AND     AL,AH
        JZ      COL4
        OR      DL,DH
COL4    LABEL   NEAR
        SHR     DH,1
        ADD     SI,50H
        LOOP    COL2
        PUSH    AX
        MOV     AL,DL
        MOV     AH,0
        XOR     DX,DX
        INT     17H
        POP     AX
        SHR     AH,1
        MOV     AL,CS:GRMASK
        TEST    AL,40H
        JZ      COL5
        SHR     AH,1
COL5    LABEL   NEAR
        OR      AH,AH
        JNZ     COL1
        INC     BX
        MOV     AL,BL
        CMP     AL,50H
        JL      COLUMN
        MOV     AX,000AH        ;linefeed to printer
        XOR     DX,DX
        INT     17H
        TEST    AH,1
        JNZ     PRTSC_RET
        MOV     AX,DS
        ADD     AX,14H
        CMP     AL,0F4H
        MOV     DS,AX
        POP     CX
        JNE     ROW
        MOV     AX,0032H        ;send ESC 2 to printer
        CALL    ESC_SEQ         ;sets printer to 6 lines/inch
PRTSC_RET       LABEL   NEAR
        POP     DX
        POP     CX
        POP     BX
        POP     AX
        POP     SI
        POP     DS
        RET
PRTSC_1 ENDP
SUBTTL SUBROUTINE TO SEND ESC SEQUENCE TO PRINTER
        PAGE
;           PROLOG - MODULE DESCRIPTION
;This subroutine sends an ascii ESC character to the printer followed by the
;character in AL.  AH specifies the number of characters to follow the first
;two (0 if none, 1, or 2).  The first of these is in BL and the second in BH.
;All registers except AX are preserved.  AH contains printer status on return.
;The routine returns immediately on a timeout error.
ESC_SEQ PROC    NEAR
        PUSH    BX
        PUSH    CX
        PUSH    DX
        MOV     CX,AX           ;Save AX
        XOR     DX,DX           ;DX=0 indicates printer 1
        MOV     AX,001BH        ;AL='ESC'
        INT     17H             ;printer_io
        TEST    AH,1            ;timeout?
        JNZ     ESC_RET
        MOV     AL,CL           ;retrieve character
        MOV     AH,0
        INT     17H
        TEST    AH,1
        JNZ     ESC_RET
E1      LABEL   NEAR
        MOV     AL,CH
        CMP     AL,0            ;anymore characters to send?
        JZ      ESC_RET         ;return if done
        MOV     AL,BL           ;get next character
        MOV     AH,0
        INT     17H
        TEST    AH,1
        JNZ     ESC_RET
        MOV     BL,BH           ;put next character in BL
        DEC     CH
        JMP     E1              ;do until all characters sent
ESC_RET LABEL   NEAR
        POP     DX
        POP     CX
        POP     BX
        RET
ESC_SEQ ENDP
CSEG    ENDS
        END
```
{% endraw %}

## PRTSC_2.ASM

{% raw %}
```
PAGE 50,132
TITLE PRTSC_2 - DUMP SCREEN GRAPHICS TO PRINTER
;               PROLOG - MODULE DESCRIPTION
;This subroutine dumps the displayed screen graphics to the printer.
;It will print either 320x200 or 640x200 graphics.  Both are
;printed with the printer in 480 mode, and are rotated 90 degrees.
;Final size is 6.6"x8.9" .
;  All registers are preserved.
CSEG    SEGMENT PARA PUBLIC 'CODE'
PRTSC_1 PROC    FAR
        ASSUME  CS:CSEG
        PUBLIC  PRTSC_1
        PUSH    DS
        PUSH    AX
        PUSH    BX
        PUSH    CX
        PUSH    DX
        MOV     AX,0B800H       ;screen segment
        MOV     DS,AX
        MOV     AX,0141H        ;send ESC A 8 to printer for
        MOV     BL,8            ; 8/72" linefeeds
        CALL    ESC_SEQ
        MOV     BX,1EF0H
        PUSH    BX
ROW     LABEL   NEAR
        PUSH    BX
        MOV     AX,024BH        ;ESC K n1 n2
        MOV     BX,400          ;n1=144, n2=1 (256)
        CALL    ESC_SEQ
        POP     BX
        MOV     CX,100
R1      LABEL   NEAR
        MOV     AL,[BX+2000H]
        XOR     AH,AH
        XOR     DX,DX
        INT     17H
        XOR     AH,AH
        INT     17H
        MOV     AL,[BX]
        XOR     AH,AH
        INT     17H
        XOR     AH,AH
        INT     17H
        SUB     BX,50H
        LOOP    R1
        MOV     AX,000AH        ;linefeed to printer
        XOR     DX,DX
        INT     17H
        TEST    AH,1
        JNZ     PRTSC_RET
        POP     BX
        INC     BX
        PUSH    BX
        CMP     BL,40H
        JNZ     ROW
        POP     BX
        MOV     AX,0032H        ;send ESC 2 to printer
        CALL    ESC_SEQ         ;sets printer to 6 lines/inch
PRTSC_RET       LABEL   NEAR
        POP     DX
        POP     CX
        POP     BX
        POP     AX
        POP     DS
        RET
PRTSC_1 ENDP
SUBTTL SUBROUTINE TO SEND ESC SEQUENCE TO PRINTER
        PAGE
;           PROLOG - MODULE DESCRIPTION
;This subroutine sends an ascii ESC character to the printer followed by the
;character in AL.  AH specifies the number of characters to follow the first
;two (0 if none, 1, or 2).  The first of these is in BL and the second in BH.
;All registers except AX are preserved.  AH contains printer status on return.
;The routine returns immediately on a timeout error.
ESC_SEQ PROC    NEAR
        PUSH    BX
        PUSH    CX
        PUSH    DX
        MOV     CX,AX           ;Save AX
        XOR     DX,DX           ;DX=0 indicates printer 1
        MOV     AX,001BH        ;AL='ESC'
        INT     17H             ;printer_io
        TEST    AH,1            ;timeout?
        JNZ     ESC_RET
        MOV     AL,CL           ;retrieve character
        MOV     AH,0
        INT     17H
        TEST    AH,1
        JNZ     ESC_RET
E1      LABEL   NEAR
        MOV     AL,CH
        CMP     AL,0            ;anymore characters to send?
        JZ      ESC_RET         ;return if done
        MOV     AL,BL           ;get next character
        MOV     AH,0
        INT     17H
        TEST    AH,1
        JNZ     ESC_RET
        MOV     BL,BH           ;put next character in BL
        DEC     CH
        JMP     E1              ;do until all characters sent
ESC_RET LABEL   NEAR
        POP     DX
        POP     CX
        POP     BX
        RET
ESC_SEQ ENDP
CSEG    ENDS
        END
```
{% endraw %}

## SLOTMACH.BAS

{% raw %}
```bas
10 KEY OFF:CLS
20 SCREEN 0
30 WIDTH 40
40 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
50 PRINT"░┌───────────────────────────────────┐░"
60 PRINT"░│                                   │░"
70 PRINT"░│            2051-A.BAS             │░"
80 PRINT"░│               SLOT                │░"
90 PRINT"░│                                   │░"
100 PRINT"░│                                   │░"
110 PRINT"░│ BROUGHT TO YOU BY THE MEMBERS OF  │░"
120 PRINT"░│      ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄      │░"
130 PRINT"░│        █   █   █ █     █   █      │░"
140 PRINT"░│        █   █▄▄▄█ █     █   █      │░"
150 PRINT"░│        █   █     █     █   █      │░"
160 PRINT"░│      ▄▄█▄▄ █     █▄▄▄▄ █▄▄▄█      │░"
170 PRINT"░│                                   │░"
180 PRINT"░│      International PC Owners      │░"
190 PRINT"░│                                   │░"
200 PRINT"░│P.O. Box 10426, Pittsburgh PA 15234│░"
210 PRINT"░│                                   │░"
220 PRINT"░└───────────────────────────────────┘░"
230 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
240 PRINT
250 PRINT "       PRESS ANY KEY TO CONTINUE
260 A$=INKEY$: IF A$="" THEN 260
270 WIDTH 80
280 CLS
1000 REM ----------------------
1010 REM --- S L O T ----------
1020 REM ----------------------
1030 REM --- THIS PROGRAM SIMULATES A SLOT MACHINE.  THE FRUIT IS A DIRECT COPY
1040 REM --- OF THE FRUIT ON A REAL SLOT MACHINE.  THE PAYOFFS ARE THE SAME
1050 REM --- AS ON A REAL SLOT MACHINE.
1060 DEFINT A-Z
1070 DIM C1(23), C2(23), C3(23), X$(23), Y$(23), Z$(23)
1080 REM
1090 REM --- TRUE VALUE FOR WHEEL IS X$(2) THRU X$(21)
1100 REM ---                         Y$(2) THRU Y$(21)
1110 REM ---                         Z$(2) THRU Z$(21)
1120 DATA "ORANGE", "MELON ", "PLUM  ", "CHERRY", "PLUM  "
1130 DATA "ORANGE", "ST-LEM", "PLUM  ", "ORANGE", "CHERRY"
1140 DATA "BAR   ", "PLUM  ", "ORANGE", "BELL  ", "ORANGE"
1150 DATA "PLUM  ", "JOKER ", "PLUM  ", "ORANGE", "CHERRY"
1160 DATA "ORANGE", "MELON ", "PLUM  "
1170 DATA "CHERRY", "PLUM  ", "CHERRY", "OR-STR", "CHERRY"
1180 DATA "BELL  ", "PLUM  ", "BELL  ", "CHERRY", "JOKER "
1190 DATA "CHERRY", "MELON ", "PLUM  ", "BELL  ", "ORANGE"
1200 DATA "BAR   ", "ORANGE", "CHERRY", "BELL  ", "ORANGE"
1210 DATA "CHERRY", "PLUM  ", "CHERRY"
1220 DATA "BELL  ", "LEMON ", "PLUM  ", "PLUM  ", "LEMON "
1230 DATA "LEMON ", "BELL  ", "MELON ", "BELL  ", "PLUM  "
1240 DATA "BELL  ", "ORANGE", "JOKER ", "LEMON ", "BAR-ST"
1250 DATA "LEMON ", "BELL  ", "LEMON ", "BELL  ", "LEMON "
1260 DATA "BELL  ", "LEMON ", "PLUM  "
1270 REM --- S -- IS THE NET WINNINGS
1280 REM --- A -- IS THE COUNT FOR LOOP BETWEEN INPUTS
1290 REM --- A$ - IS THE CONTROL VARIBLE
1300 REM --- B$ - IS A DUMMY
1310 B = 1
1320 S = 0
1330 A = 0
1340 A$ = "RUN"
1350 B$ = "-------- TRY AGAIN"
1360 REM
1370 REM --- INITIALIZE WHEEL 1
1380 REM
1390 FOR I = 1 TO 23
1400 READ X$(I)
1410 NEXT I
1420 REM
1430 REM --- INITIALIZE WHEEL 2
1440 REM
1450 FOR I = 1 TO 23
1460 READ Y$(I)
1470 NEXT I
1480 REM
1490 REM --- INITIALIZE WHEEL 3
1500 REM
1510 FOR I = 1 TO 23
1520 READ Z$(I)
1530 NEXT I
1540 REM
1550 REM --- SET RANDOM NUMBER
1560 REM
1570 NUM = CVI(RIGHT$(TIME$,2))
1580 RANDOMIZE NUM
1590 CLS
1600 S = S - B
1610 W1 = INT(21*RND(NUM)+1)
1620 IF W1 < 2 THEN 1610
1630 W2 = INT(21*RND(NUM)+1)
1640 C1(W1) = C1(W1) + 1
1650 IF W2 < 2 THEN 1630
1660 C2(W2) = C2(W2) + 1
1670 W3 = INT(21*RND(NUM)+1)
1680 IF W3 < 2 THEN 1670
1690 C3(W3) = C3(W3) + 1
1700 REM ------- PRINT VALUES ON WHEELS
1710 PRINT X$(W1-1), Y$(W2-1), Z$(W3-1)
1720 PRINT X$(W1),   Y$(W2),   Z$(W3)
1730 PRINT X$(W1+1), Y$(W2+1), Z$(W3+1)
1740 REM --- PRINT CHARACTERS ON WHEELS
1750 REM --- 1ST CHAR ON 1ST WHEEL
1760 ROW = 6
1770 COLUMN = 1
1780 W$ = X$(W1-1)
1790 GOSUB 4100
1800 REM --- 2ND CHAR ON 1ST WHEEL
1810 ROW = 12
1820 COLUMN = 1
1830 W$ = X$(W1)
1840 GOSUB 4100
1850 REM --- 3ND CHAR ON 1ST WHEEL
1860 ROW = 18
1870 COLUMN = 1
1880 W$ = X$(W1+1)
1890 GOSUB 4100
1900 REM --- 1ST CHAR ON 2ND WHEEL
1910 ROW = 6
1920 COLUMN = 10
1930 W$ = Y$(W2-1)
1940 GOSUB 4100
1950 REM --- 2ND CHAR ON 2ND WHEEL
1960 ROW = 12
1970 COLUMN = 11
1980 W$ = Y$(W2)
1990 GOSUB 4100
2000 REM --- 3ND CHAR ON 2ND WHEEL
2010 ROW = 18
2020 COLUMN = 11
2030 W$ = Y$(W2+1)
2040 GOSUB 4100
2050 REM --- 1ST CHAR ON 3ND WHEEL
2060 ROW = 6
2070 COLUMN = 21
2080 W$ = Z$(W3-1)
2090 GOSUB 4100
2100 REM --- 2ND CHAR ON 3ND WHEEL
2110 ROW = 12
2120 COLUMN = 21
2130 W$ = Z$(W3)
2140 GOSUB 4100
2150 REM --- 3ND CHAR ON 3ND WHEEL
2160 ROW = 18
2170 COLUMN = 21
2180 W$ = Z$(W3+1)
2190 GOSUB 4100
2200 REM --- CHECK VALUE OF WHEELS
2210 W = 0
2220 IF X$(W1) = "CHERRY" THEN 2330
2230 IF X$(W1) = "ORANGE" THEN 2550
2240 IF X$(W1) = "PLUM  " THEN 2820
2250 IF X$(W1) = "BELL  " THEN 3000
2260 IF X$(W1) = "MELON " THEN 3180
2270 IF X$(W1) = "STAR  " THEN 3360
2280 IF X$(W1) = "JOKER " THEN 3520
2290 IF X$(W1-1) = "JOKER " THEN 3520
2300 IF X$(W1+1) = "JOKER " THEN 3520
2310 GOTO 3810
2320 REM
2330 IF Y$(W2) = "CHERRY" THEN 2410
2340 REM
2350 REM --- PAYOFF FOR CHERRY XXXXXX XXXXXX
2360 REM
2370 W = 2 * B
2380 S = S + W
2390 GOTO 3810
2400 REM
2410 IF Z$(W3) = "LEMON " THEN 2510
2420 REM
2430 REM --- PAYOFF FOR CHERRY CHERRY XXXXXX
2440 REM
2450 W = 4 * B
2460 S = S + W
2470 GOTO 3810
2480 REM
2490 REM --- PAYOFF FOR CHERRY CHERRY LEMON
2500 REM
2510 W = 6 * B
2520 S = S + W
2530 GOTO 3810
2540 REM
2550 IF Y$(W2) = "ORANGE" THEN 2630
2560 IF Y$(W2) = "MELON " THEN 2680
2570 REM
2580 REM --- NO WIN
2590 REM
2600 W = 0
2610 GOTO 3810
2620 REM
2630 IF Z$(W3) = "ORANGE" THEN 2780
2640 IF Z$(W3) = "MELON " THEN 2780
2650 IF Z$(W3) = "BAR   " THEN 2780
2660 GOTO 2600
2670 REM
2680 IF Z$(W3) = "MELON " THEN 2780
2690 IF Z$(W3) = "ORANGE" THEN 2780
2700 GOTO 2600
2710 REM
2720 REM --- PAYOFF FOR ORANGE ORANGE ORANGE
2730 REM                ORANGE ORANGE MELON
2740 REM                ORANGE ORANGE BAR
2750 REM                ORANGE MELON  ORANGE
2760 REM                ORANGE MELON  MELON
2770 REM
2780 W = 10 * B
2790 S = S + W
2800 GOTO 3810
2810 REM
2820 IF Y$(W2) = "PLUM  " THEN 2890
2830 REM
2840 REM --- NO WIN
2850 REM
2860 W = 0
2870 GOTO 3810
2880 REM
2890 IF Z$(W3) = "PLUM  " THEN 2960
2900 IF Z$(W3) = "BAR   " THEN 2960
2910 GOTO 2860
2920 REM
2930 REM --- PAYOFF FOR PLUM   PLUM   PLUM
2940 REM                PLUM   PLUM   BAR
2950 REM
2960 W = 14 * B
2970 S = S + W
2980 GOTO 3810
2990 REM
3000 IF Y$(W2) = "BELL  " THEN 3070
3010 REM
3020 REM --- NO WIN
3030 REM
3040 W = 0
3050 GOTO 3810
3060 REM
3070 IF Z$(W3) = "BELL  " THEN 3140
3080 IF Z$(W3) = "BAR   " THEN 3140
3090 GOTO 3040
3100 REM
3110 REM --- PAYOFF FOR BELL   BELL   BELL
3120 REM                BELL   BELL   BAR
3130 REM
3140 W = 18 * B
3150 S = S + W
3160 GOTO 3810
3170 REM
3180 IF Y$(W2) = "MELON " THEN 3250
3190 REM
3200 REM --- NO WIN
3210 REM
3220 W = 0
3230 GOTO 3810
3240 REM
3250 IF Z$(W3) = "MELON " THEN 3320
3260 IF Z$(W3) = "BAR   " THEN 3320
3270 GOTO 3220
3280 REM
3290 REM --- PAYOFF FOR MELON  MELON  MELON
3300 REM                MELON  MELON  BAR
3310 REM
3320 W = 150 * B
3330 S = S + W
3340 GOTO 3810
3350 REM
3360 IF Y$(W2) = "STAR  " THEN 3430
3370 REM
3380 REM --- NO WIN
3390 REM
3400 W = 0
3410 GOTO 3810
3420 REM
3430 IF Z$(W3) = "STAR  " THEN 3480
3440 GOTO 3220
3450 REM
3460 REM --- PAYOFF FOR STAR   STAR   STAR
3470 REM
3480 W = 200 * B
3490 S = S + W
3500 GOTO 3810
3510 REM
3520 IF Y$(W2)   = "JOKER " THEN 3610
3530 IF Y$(W2-1) = "JOKER " THEN 3610
3540 IF Y$(W2+1) = "JOKER " THEN 3610
3550 REM
3560 REM --- NO WIN
3570 REM
3580 W = 0
3590 GOTO 3810
3600 REM
3610 IF Z$(W3)   = "JOKER " THEN 3680
3620 IF Z$(W3-1) = "JOKER " THEN 3680
3630 IF Z$(W3+1) = "JOKER " THEN 3680
3640 GOTO 3580
3650 REM
3660 REM --- PAYOFF FOR JOKER  JOKER  JOKER
3670 REM
3680 W = 18 * B
3690 S = S + W
3700 GOTO 3810
3710 REM
3720 REM --- PRINT VALUES OF WHEELS
3730 REM
3740 PRINT
3750 PRINT X$(W1-1), Y$(W2-1), Z$(W3-1)
3760 PRINT X$(W1),   Y$(W2),   Z$(W3)
3770 PRINT X$(W1+1), Y$(W3+1), Z$(W3+1)
3780 PRINT
3790 PRINT
3800 REM
3810 PRINT
3820 IF W = 0 THEN 3870
3830 BEEP
3840 PRINT "YOU WON "; W; "YOUR NET IS NOW "; S
3850 BEEP
3860 GOTO 3890
3870 PRINT "YOU LOST"; B$
3880 PRINT "YOUR NET IS NOW "; S
3890 IF A$ = "AUTO" THEN 3910
3900 GOTO 3940
3910 A = A + 1
3920 IF A < 100 THEN 1600
3930 A = 0
3940 INPUT A$
3950 IF A$ = "STOP" THEN 4020
3960 IF A$ = "END" THEN 4020
3970 REM
3980 REM --- GO BACK AND GET A NEW RANDOM NUMBER
3990 REM
4000 IF A$ = "NEW" THEN 1550
4010 GOTO 1590
4020 REM --- PRINT TOTAL FOR WHEELS TO DETERMINE TRUE RANDOMNESS
4030 CLS
4040 PRINT "NUMBER", "WHEEL 1", "WHEEL 2", "WHEEL 3", "TOTAL"
4050 FOR I = 2 TO 21
4060 T = C1(I) + C2(I) + C3(I)
4070 PRINT I-1, C1(I), C2(I), C3(I), T
4080 NEXT I
4090 END
4100 REM --- SUBROUTINE TO PRINT CHARACTERS ON WHEELS
4110 IF W$ = "CHERRY" THEN 4250
4120 IF W$ = "PLUM  " THEN 4310
4130 IF W$ = "ORANGE" THEN 4370
4140 IF W$ = "JOKER " THEN 4430
4150 IF W$ = "MELON " THEN 4490
4160 IF W$ = "LEMON " THEN 4550
4170 IF W$ = "BELL  " THEN 4610
4180 IF W$ = "ST-LEM" THEN 4670
4190 IF W$ = "BAR-ST" THEN 4730
4200 IF W$ = "BAR   " THEN 4790
4210 IF W$ = "OR-STR" THEN 4850
4220 LOCATE ROW,COLUMN
4230 PRINT W$
4240 RETURN
4250 REM --- CHERRY
4260 LOCATE ROW,COLUMN
4270 PRINT CHR$(32);CHR$(223);CHR$(219);CHR$(219);CHR$(219);CHR$(223);CHR$(32)
4280 LOCATE ROW+1,COLUMN
4290 PRINT CHR$(219);CHR$(219);CHR$(32);CHR$(32);CHR$(32);CHR$(219);CHR$(219)
4300 RETURN
4310 REM --- PLUM
4320 LOCATE ROW,COLUMN
4330 PRINT CHR$(201);CHR$(203);CHR$(203);CHR$(203);CHR$(203);CHR$(203);CHR$(187)
4340 LOCATE ROW+1,COLUMN
4350 PRINT CHR$(200);CHR$(202);CHR$(202);CHR$(202);CHR$(202);CHR$(202);CHR$(188)
4360 RETURN
4370 REM --- ORANGE
4380 LOCATE ROW,COLUMN
4390 PRINT CHR$(204);CHR$(206);CHR$(206);CHR$(206);CHR$(206);CHR$(206);CHR$(185)
4400 LOCATE ROW+1,COLUMN
4410 PRINT CHR$(223);CHR$(223);CHR$(219);CHR$(219);CHR$(219);CHR$(223);CHR$(223)
4420 RETURN
4430 REM --- JOKER
4440 LOCATE ROW,COLUMN
4450 PRINT CHR$(2);CHR$(2);CHR$(2);CHR$(2);CHR$(2);CHR$(2);CHR$(2)
4460 LOCATE ROW+1,COLUMN
4470 PRINT CHR$(2);CHR$(2);CHR$(2);CHR$(2);CHR$(2);CHR$(2);CHR$(2)
4480 RETURN
4490 REM --- MELON
4500 LOCATE ROW,COLUMN
4510 PRINT CHR$(220);CHR$(219);CHR$(219);CHR$(219);CHR$(219);CHR$(219);CHR$(220)
4520 LOCATE ROW+1,COLUMN
4530 PRINT CHR$(223);CHR$(219);CHR$(219);CHR$(219);CHR$(219);CHR$(219);CHR$(223)
4540 RETURN
4550 REM --- LEMON
4560 LOCATE ROW,COLUMN
4570 PRINT CHR$(220);CHR$(178);CHR$(178);CHR$(178);CHR$(178);CHR$(178);CHR$(220)
4580 LOCATE ROW+1,COLUMN
4590 PRINT CHR$(223);CHR$(178);CHR$(178);CHR$(178);CHR$(178);CHR$(178);CHR$(223)
4600 RETURN
4610 REM --- BELL
4620 LOCATE ROW,COLUMN
4630 PRINT CHR$(220);CHR$(219);CHR$(219);CHR$(219);CHR$(219);CHR$(219);CHR$(220)
4640 LOCATE ROW+1,COLUMN
4650 PRINT CHR$(223);CHR$(223);CHR$(219);CHR$(219);CHR$(219);CHR$(223);CHR$(223)
4660 RETURN
4670 REM --- STAR/LEMON
4680 LOCATE ROW,COLUMN
4690 PRINT CHR$(220);CHR$(219);CHR$(219);CHR$(219);CHR$(219);CHR$(219);CHR$(220)
4700 LOCATE ROW+1,COLUMN
4710 PRINT CHR$(223);CHR$(223);CHR$(219);CHR$(219);CHR$(219);CHR$(223);CHR$(223)
4720 RETURN
4730 REM --- BAR/STAR
4740 LOCATE ROW,COLUMN
4750 PRINT CHR$(220);CHR$(220);CHR$(220);CHR$(219);CHR$(220);CHR$(220);CHR$(220)
4760 LOCATE ROW+1,COLUMN
4770 PRINT CHR$(223);CHR$(219);CHR$(223);CHR$(223);CHR$(223);CHR$(219);CHR$(223)
4780 RETURN
4790 REM --- BAR
4800 LOCATE ROW,COLUMN
4810 PRINT CHR$(220);CHR$(220);CHR$(220);CHR$(220);CHR$(220);CHR$(220);CHR$(220)
4820 LOCATE ROW+1,COLUMN
4830 PRINT CHR$(223);CHR$(223);CHR$(223);CHR$(223);CHR$(223);CHR$(223);CHR$(223)
4840 RETURN
4850 REM --- ORANGE/STAR
4860 LOCATE ROW,COLUMN
4870 PRINT CHR$(32);CHR$(223);CHR$(219);CHR$(219);CHR$(219);CHR$(223);CHR$(32)
4880 LOCATE ROW+1,COLUMN
4890 PRINT CHR$(219);CHR$(219);CHR$(32);CHR$(32);CHR$(32);CHR$(219);CHR$(219)
4900 RETURN
```
{% endraw %}

## STATCAPS.BAS

{% raw %}
```bas
10 KEY OFF:CLS
20 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
30 PRINT"░┌───────────────────────────────────┐░"
40 PRINT"░│                                   │░"
50 PRINT"░│           5009-A.BAS              │░"
60 PRINT"░│         STATES AND CAPITALS       │░"
70 PRINT"░│                                   │░"
80 PRINT"░│                                   │░"
90 PRINT"░│ BROUGHT TO YOU BY THE MEMBERS OF  │░"
100 PRINT"░│      ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄      │░"
110 PRINT"░│        █   █   █ █     █   █      │░"
120 PRINT"░│        █   █▄▄▄█ █     █   █      │░"
130 PRINT"░│        █   █     █     █   █      │░"
140 PRINT"░│      ▄▄█▄▄ █     █▄▄▄▄ █▄▄▄█      │░"
150 PRINT"░│                                   │░"
160 PRINT"░│      International PC Owners      │░"
170 PRINT"░│                                   │░"
180 PRINT"░│P.O. Box 10426, Pittsburgh PA 15234│░"
190 PRINT"░│                                   │░"
200 PRINT"░└───────────────────────────────────┘░"
210 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
220 PRINT
230 PRINT "       PRESS ANY KEY TO CONTINUE
240 A$=INKEY$: IF A$="" THEN 240
250 CLS
1000 ' ***** States and capitals *****
1010 '
1020 ' ***** Converted to IBM PC BASIC *****
1030 '
1040 ' ***** From a program in the February 1983 issue of 80 MICRO *****
1050 '
1060 ' ***** Originally written by DENNIS H. WEIDE *****
1070 '
1080 ' ***** Display menu *****
1090 CLS
1100 SCREEN 1
1110 COLOR 0,1
1120 KEY OFF:CLS
1130 OUT 980,2:OUT 981,43
1140 PRINT :PRINT STRING$(39,"%")
1150 PRINT TAB(11) "STATES AND CAPITALS"
1160 PRINT TAB(9)"CONVERTED TO IBM PC BY":PRINT TAB(15) "ED NEASHAM":PRINT TAB(16) "JAN 1983"
1170 PRINT STRING$(39,"%")
1180 PRINT TAB(6)"1. NAME THE STATES":PRINT
1190 PRINT TAB(6)"2. NAME THE CAPITALS"
1200 ' ***** Define answer strings (H$,J$) *****
1210 H$ = "CORRECT":J$ = "WRONG"
1220 ' ***** Dimension all arrays *****
1230 DIM A(6):DIM B(6)
1240 DIM S$(53): DIM S1(53)
1250 DIM S2(53): DIM IC(53)
1260 DIM C(6):DIM D(6)
1270 DIM E(6):DIM F(6)
1280 DIM G(6):DIM H(6)
1290 DIM I(6):DIM J(6)
1300 DIM K(6):DIM L(6)
1310 DIM M(6):DIM N(6)
1320 DIM O(6):DIM P(6)
1330 DIM Q(6):DIM R(6)
1340 DIM S(6):DIM T(6)
1350 DIM U(6):DIM V(6)
1360 DIM W(6):DIM X(6)
1370 DIM Y(6):DIM Z(6)
1380 DIM ZZ(6):DIM AA(6)
1390 DIM ER(6)
1400 DIM SC$(53)
1410 ' ***** Read data statements for States and location on the screen *****
1420 FOR Y = 1 TO 53 :READ S$(Y),S1(Y),S2(Y)
1430 NEXT Y
1440 ' ***** Read data statement for State Capitals *****
1450 FOR Y = 1 TO 53: READ SC$(Y) :NEXT Y
1460 ' ***** Draw blank and GET it *****
1470 GET(64,96)-(68,104),ER
1480 ' ***** Graphically draw letter, GET the letter, replace the letter *****
1490 ' ***** with a blank in preparation for the next letter *****
1500 COLOR 0,1:DRAW"BM8,104;U8R4D8U4L4"
1510 GET (8,96)-(12,104),A:PUT (8,96),ER,PSET
1520 DRAW "BM8,104;U8R3D4L3R4D4L4"
1530 GET (8,96)-(12,104),B:PUT (8,96),ER,PSET
1540 DRAW "BM8,104;U8R4D2BD4D2L4":GET(8,96)-(12,104),C:PUT(8,96),ER,PSET
1550 DRAW "BM8,104;U8R2F2D4G2L2":GET(8,96)-(12,104),D:PUT(8,96),ER,PSET
1560 DRAW "BM8,104;R4L4U4NR3U4R4":GET(8,96)-(12,104),E:PUT(8,96),ER,PSET
1570 DRAW "BM8,104;U4NR3U4R4":GET(8,96)-(12,104),F:PUT(8,96),ER,PSET
1580 DRAW "BM8,104;U8R4BD4NL2D4L4":GET(8,96)-(12,104),G:PUT(8,96),ER,PSET
1590 DRAW "BM8,104;U8D4R4U4D8":GET(8,96)-(12,104),H:PUT(8,96),ER,PSET
1600 DRAW "BM8,104;R4L2U8L2R4":GET(8,96)-(12,104),I:PUT(8,96),ER,PSET
1610 DRAW "BM8,104;U4D4R4U8":GET(8,96)-(12,104),J:PUT(8,96),ER,PSET
1620 DRAW "BM8,104;U8BR4G4E2":LINE-(12,104):GET(8,96)-(12,104),K:PUT(8,96),ER,PSET
1630 DRAW "BM8,104;NR4U8":GET(8,96)-(12,104),L:PUT(8,96),ER,PSET
1640 DRAW "BM8,104;U8R2ND3R2D8":GET(8,96)-(12,104),M:PUT(8,96),ER,PSET
1650 DRAW "BM8,104;U8":LINE (8,96)-(12,104):LINE-(12,96):GET(8,96)-(12,104),N:PUT(8,96),ER,PSET
1660 DRAW "BM8,104;U8R4D8L4":GET(8,96)-(12,104),O:PUT(8,96),ER,PSET
1670 DRAW "BM8,104;U8R4D4L4":GET(8,96)-(12,104),P:PUT(8,96),ER,PSET
1680 DRAW "BM8,104;U8R4D8NH3L4":GET(8,96)-(12,104),Q:PUT(8,96),ER,PSET
1690 DRAW "BM8,104;U8R4D4L4F4":GET(8,96)-(12,104),R:PUT(8,96),ER,PSET
1700 DRAW "BM8,104;NU1R4U4L4U4R4D1":GET(8,96)-(12,104),S:PUT(8,96),ER,PSET
1710 DRAW "BM8,104;BR2U8L2R4":GET(8,96)-(12,104),T:PUT(8,96),ER,PSET
1720 DRAW "BM8,104;U8BR4D8L4":GET(8,96)-(12,104),U:PUT(8,96),ER,PSET
1730 DRAW "BM8,104;BU8D6F2E2U6":GET(8,96)-(12,104),V:PUT(8,96),ER,PSET
1740 DRAW "BM8,104;U8BR4D8L2NU2L2":GET(8,96)-(12,104),W:PUT(8,96),ER,PSET
1750 DRAW "BM8,104;U2E4U2BL4D2F4D2":GET(8,96)-(12,104),X:PUT(8,96),ER,PSET
1760 DRAW "BM8,104;BU8D2F2ND4E2U2":GET(8,96)-(12,104),Y:PUT(8,96),ER,PSET
1770 LINE (8,96)-(12,96):LINE-(8,104):LINE-(12,104):GET(8,96)-(12,104),Z:PUT(8,96),ER,PSET
1780 GET(8,96)-(12,104),ZZ
1790 DRAW "BM8,104;R4":GET(8,96)-(12,104),AA:PUT(8,96),ER,PSET
1800 ' ***** Choose the game to be played (States or Capitals) *****
1810 PRINT :PRINT
1820 PRINT TAB(5) "ENTER ONE OF THE ABOVE";
1830 GS$=INKEY$:IF GS$="" THEN 1830
1840 BETA = VAL(RIGHT$(TIME$,2)):RANDOMIZE(BETA):WW=RND
1850 GS = VAL(GS$):CLS:IF GS<1 OR GS >2 THEN GS=1
1860 NQ = 10
1870 GOTO 2250
1880 B$=B$+A$
1890 RETURN
1900 ' ***** Display graphic letter in proper block *****
1910 A1=A1+8
1920 IF A$="A" THEN PUT(A1,A2),A:GOTO 1880
1930 IF A$="B" THEN PUT(A1,A2),B:GOTO 1880
1940 IF A$="C" THEN PUT(A1,A2),C:GOTO 1880
1950 IF A$="D" THEN PUT(A1,A2),D:GOTO 1880
1960 IF A$="E" THEN PUT(A1,A2),E:GOTO 1880
1970 IF A$="F" THEN PUT(A1,A2),F:GOTO 1880
1980 IF A$="G" THEN PUT(A1,A2),G:GOTO 1880
1990 IF A$="H" THEN PUT(A1,A2),H:GOTO 1880
2000 IF A$="I" THEN PUT(A1,A2),I:GOTO 1880
2010 IF A$="J" THEN PUT(A1,A2),J:GOTO 1880
2020 IF A$="K" THEN PUT(A1,A2),K:GOTO 1880
2030 IF A$="L" THEN PUT(A1,A2),L:GOTO 1880
2040 IF A$="M" THEN PUT(A1,A2),M:GOTO 1880
2050 IF A$="N" THEN PUT(A1,A2),N:GOTO 1880
2060 IF A$="O" THEN PUT(A1,A2),O:GOTO 1880
2070 IF A$="P" THEN PUT(A1,A2),P:GOTO 1880
2080 IF A$="Q" THEN PUT(A1,A2),Q:GOTO 1880
2090 IF A$="R" THEN PUT(A1,A2),R:GOTO 1880
2100 IF A$="S" THEN PUT(A1,A2),S:GOTO 1880
2110 IF A$="T" THEN PUT(A1,A2),T:GOTO 1880
2120 IF A$="U" THEN PUT(A1,A2),U:GOTO 1880
2130 IF A$="V" THEN PUT(A1,A2),V:GOTO 1880
2140 IF A$="W" THEN PUT(A1,A2),W:GOTO 1880
2150 IF A$="X" THEN PUT(A1,A2),X:GOTO 1880
2160 IF A$="Y" THEN PUT(A1,A2),Y:GOTO 1880
2170 IF A$="Z" THEN PUT(A1,A2),Z:GOTO 1880
2180 IF A$="." THEN 5970
2190 IF A$=" " THEN PUT(A1,A2),ZZ:GOTO 1880
2200 IF A$=CHR$(8) THEN 2230
2210 A1=A1-8
2220 GOTO 1890
2230 GOSUB 5620: GOTO 1890
2240 B$=B$+A$: GOTO 1890
2250 ' ***** Draw box and put in title on screen *****
2260 NP=NP+1:NO=NO+1:IF NO>NQ THEN 5500
2270 IF NP>53 THEN 5500
2280 IF GS=2 AND NP>48 THEN 5500
2290 NR=NR+1
2300 IF V = 1 THEN 2310
2310 A$="":B$=""
2320 COLOR 0,1
2330 LINE (0,0)-(255,0)
2340 LINE (0,0)-(0,191)
2350 LINE (255,0)-(255,191)
2360 LINE (0,191)-(255,191)
2370 LINE (0,142)-(255,142)
2380 LINE (135,142)-(135,191)
2390 LINE (0,166)-(255,166)
2400 LINE (34,4)-(42,16):DRAW "BM34,16;U12BR8D12BR4U12R8D8NL8D4BR4U12R4ND8R4D12BR4NR8U4NR4U8R8"
2410 LINE (34,4)-(42,16):DRAW "BM34,16;U12BR8D12BR4U12R8D8NL8D4BR4U12R4ND8R4D12BR4NR8U4NR4U8R8"
2420 IF GS = 2 THEN 2440
2430 DRAW "BR7"
2440 DRAW "BR12R4ND12R4BR4D12U4R8NU8D4BR4NR8U4NR4U8R8"
2450 IF GS=2 THEN 2490
2460 DRAW "BR7"
2470 DRAW "BR12BD12R8U4L8U8R8BR4R4ND12R4BR4ND12R8D8NL8D4BR8U12NL4R4BR4NR8D8NR4D4R8BR4R8U4L8U8R8"
2480 GOTO 2510
2490 DRAW "BR12R8ND2L8D12R8NU2BR4U12R8D8NL8D4BR4U12R8D8L8U8R8BR4R2NR2D12NL2BR8U12NL4R4BR4R8D12BL8U4NR8U8R8BR4D12R8BR4NU2R8U4L8U8R8D2"
2500 ' ***** Draw map of United States *****
2510 LINE(36,20)-(36,22)
2520 LINE-(34,22)
2530 LINE-(36,34)
2540 LINE-(36,41)
2550 LINE-(33,47)
2560 LINE-(32,64)
2570 LINE-(35,75)
2580 DRAW"R2D2L2"
2590 LINE-(41,89)
2600 LINE-(45,90)
2610 LINE-(54,101)
2620 LINE-(54,103)
2630 LINE-(64,103)
2640 LINE-(77,107)
2650 LINE-(87,107)
2660 DRAW"U1R5"
2670 LINE-(97,112)
2680 LINE-(97,115)
2690 LINE-(103,117)
2700 LINE-(104,115)
2710 LINE-(109,116)
2720 LINE-(116,125)
2730 LINE-(124,128)
2740 LINE-(124,122)
2750 LINE-(126,118)
2760 LINE-(129,122)
2770 LINE-(130,115)
2780 LINE-(139,115)
2790 LINE-(141,117)
2800 LINE-(148,117)
2810 LINE-(145,113)
2820 LINE-(156,112)
2830 LINE-(160,114)
2840 LINE-(163,112)
2850 LINE-(167,118)
2860 LINE-(167,121)
2870 LINE-(171,127)
2880 LINE-(171,129)
2890 LINE-(173,131)
2900 LINE-(178,129)
2910 LINE-(178,121)
2920 LINE-(177,116)
2930 LINE-(172,107)
2940 LINE-(175,102)
2950 LINE-(178,101)
2960 LINE-(179,98)
2970 LINE-(191,85)
2980 LINE-(189,75)
2990 LINE-(193,77)
3000 LINE-(194,75)
3010 LINE-(194,72)
3020 LINE-(197,72)
3030 LINE-(200,65)
3040 LINE-(198,64)
3050 LINE-(199,61)
3060 LINE-(197,59)
3070 LINE-(207,56)
3080 LINE-(212,53)
3090 DRAW "U2R2D1"
3100 LINE-(215,51)
3110 DRAW"U2L2U1L2U6"
3120 LINE-(220,40)
3130 LINE-(221,35)
3140 LINE-(218,34)
3150 LINE-(218,26)
3160 LINE-(215,27)
3170 LINE-(210,25)
3180 LINE-(207,35)
3190 LINE-(204,36)
3200 LINE-(192,36)
3210 LINE-(181,43)
3220 LINE-(178,43)
3230 LINE-(174,47)
3240 DRAW "R2D2L2"
3250 LINE-(163,54)
3260 LINE-(168,43)
3270 DRAW "U3R2D2R2U2"
3280 LINE-(169,34)
3290 LINE-(159,32)
3300 DRAW "U7L4U2"
3310 LINE-(147,22)
3320 LINE-(142,25)
3330 LINE-(126,20)
3340 LINE-(36,20)
3350 LINE (36,34)-(39,35)
3360 DRAW "D2"
3370 LINE-(48,36)
3380 LINE-(57,36)
3390 LINE (57,20)-(57,44)
3400 LINE-(55,46)
3410 LINE-(58,47)
3420 LINE-(58,53)
3430 LINE (32,54)-(75,54)
3440 LINE (49,54)-(49,72)
3450 LINE-(65,87)
3460 LINE-(67,90)
3470 LINE-(64,93)
3480 LINE-(64,103)
3490 LINE (68,54)-(68,84)
3500 DRAW"L3D3"
3510 DRAW "BM62,20;D8R2D8"
3520 LINE-(67,37)
3530 LINE-(69,44)
3540 DRAW "R7U2D2D16R21U40"
3550 LINE (75,42)-(97,42)
3560 LINE (76,60)-(105,60)
3570 LINE (84,60)-(84,107)
3580 LINE (68,81)-(127,81)
3590 LINE (105,60)-(105,81)
3600 LINE (102,81)-(102,104)
3610 LINE-(92,104)
3620 LINE-(92,106)
3630 LINE (102,84)-(112,84)
3640 LINE-(112,93)
3650 LINE-(119,96)
3660 LINE-(131,96)
3670 LINE-(133,115)
3680 DRAW "BM127,81;D2R2D14"
3690 LINE (119,20)-(119,26)
3700 LINE-(121,29)
3710 LINE-(118,37)
3720 LINE-(97,37)
3730 LINE (118,37)-(121,40)
3740 LINE-(121,54)
3750 LINE-(118,53)
3760 LINE-(117,54)
3770 LINE-(115,53)
3780 LINE-(97,53)
3790 LINE (121,53)-(123,56)
3800 LINE-(122,62)
3810 LINE-(125,66)
3820 LINE-(127,69)
3830 LINE-(127,81)
3840 LINE (105,66)-(125,66)
3850 LINE (143,25)-(136,32)
3860 DRAW "D2L2"
3870 LINE-(134,40)
3880 LINE-(137,51)
3890 LINE-(148,51)
3900 DRAW "D1R2"
3910 LINE (121,48)-(135,48)
3920 LINE (138,51)-(141,57)
3930 LINE-(137,65)
3940 LINE-(124,65)
3950 LINE (149,51)-(150,53)
3960 LINE-(151,56)
3970 LINE-(151,70)
3980 LINE-(149,73)
3990 LINE-(145,75)
4000 LINE-(143,78)
4010 LINE (137,65)-(145,81)
4020 DRAW "D3L3U2L14"
4030 LINE (142,84)-(137,97)
4040 DRAW "D1L6"
4050 LINE (137,97)-(139,100)
4060 LINE-(138,103)
4070 LINE-(140,108)
4080 LINE-(144,108)
4090 LINE-(145,113)
4100 LINE (139,90)-(168,90)
4110 LINE (149,90)-(148,112)
4120 DRAW "R4U4R8"
4130 LINE-(158,90)
4140 DRAW "BM159,109;R9U1R4"
4150 LINE (173,104)-(168,93)
4160 DRAW "D1L2"
4170 LINE-(169,89)
4180 DRAW "R5D1R6"
4190 LINE (180,90)-(183,93)
4200 DRAW "BM144,83;R4U1R41"
4210 LINE (158,90)-(160,87)
4220 LINE-(163,87)
4230 LINE-(168,82)
4240 LINE (149,73)-(150,74)
4250 LINE-(153,72)
4260 LINE-(154,72)
4270 LINE-(160,69)
4280 LINE-(160,54)
4290 LINE (160,67)-(161,69)
4300 LINE-(162,68)
4310 LINE-(165,70)
4320 LINE-(170,78)
4330 LINE-(173,78)
4340 LINE-(174,74)
4350 LINE-(177,73)
4360 LINE-(178,72)
4370 LINE-(181,71)
4380 LINE-(187,72)
4390 LINE-(189,77)
4400 LINE (163,81)-(168,78)
4410 LINE (136,31)-(140,30)
4420 LINE-(144,34)
4430 LINE-(146,34)
4440 LINE-(148,40)
4450 LINE-(151,38)
4460 LINE-(149,44)
4470 LINE-(148,51)
4480 LINE (142,31)-(150,27)
4490 LINE-(149,30)
4500 LINE-(152,31)
4510 LINE-(156,29)
4520 LINE-(159,33)
4530 LINE-(155,34)
4540 LINE-(150,35)
4550 LINE-(149,39)
4560 LINE (159,33)-(155,37)
4570 LINE-(153,43)
4580 LINE-(153,47)
4590 LINE-(150,53)
4600 LINE (157,35)-(161,37)
4610 DRAW "D7R2U3"
4620 LINE-(165,42)
4630 LINE-(166,47)
4640 LINE (150,54)-(169,54)
4650 LINE-(176,50)
4660 LINE-(176,47)
4670 LINE-(183,44)
4680 LINE-(184,42)
4690 LINE (172,52)-(172,68)
4700 LINE-(191,68)
4710 LINE-(194,69)
4720 LINE-(194,72)
4730 DRAW "BM189,68;D3R6"
4740 LINE (172,64)-(169,67)
4750 LINE-(164,70)
4760 DRAW "BM175,68;D4R5"
4770 DRAW "BM175,51;D4R13"
4780 LINE-(193,58)
4790 DRAW "R4U9R2U12"
4800 LINE (192,58)-(191,63)
4810 LINE-(193,64)
4820 LINE-(191,68)
4830 LINE (197,51)-(209,51)
4840 LINE-(210,54)
4850 LINE (205,51)-(205,57)
4860 LINE (199,46)-(207,47)
4870 LINE-(210,44)
4880 LINE (204,36)-(205,39)
4890 LINE-(203,43)
4900 LINE-(203,47)
4910 LINE (209,32)-(208,35)
4920 LINE-(209,43)
4930 LINE-(210,43)
4940 LINE (202,60)-(209,58)
4950 LINE-(210,60)
4960 LINE-(206,61)
4970 LINE-(202,60)
4980 ' ***** Choose state to be displayed and color it in *****
4990 IF NP>53 THEN 5500
5000 IF GS=2 AND NP>48 THEN 5500
5010 X = RND*53 :IF IC(X)=1 THEN 5010
5020 IF GS=2 AND X>48 THEN 5010
5030 IF X = 35 THEN GOSUB 5480
5040 IC(X)=1:PAINT (S1(X),S2(X)),1,3
5050 IF V=0 THEN V=1 ELSE V=0
5060 SCREEN 1
5070 A1=8:A2=152
5080 PUT(A1+8,A2),AA,PSET
5090 ' ***** Scan keyboard to determine which key has been pressed *****
5100 A$=INKEY$:IF A$="" THEN 5100
5110 BETA = VAL(RIGHT$(TIME$,2)):RANDOMIZE(BETA):WW=RND
5120 PUT(A1+8,A2),ER,PSET
5130 IF A$=CHR$(13)THEN 5160
5140 GOSUB 1910
5150 GOTO 5080
5160 TF=TF+1: PUT (A1+8,A2),ZZ:IF GS = 2 THEN 5870
5170 IF S$(X) = B$ THEN 5280
5180 A1=135:A2=152
5190 GOSUB 5980
5200 GOSUB 5780
5210 A1=8:A2=172
5220 GOSUB 5810
5230 A1=135:A2=172
5240 GOSUB 5740
5250 FOR SA=1 TO 1000: NEXT SA
5260 CLS
5270 GOTO 2250
5280 A1=135:A2=152
5290 GOSUB 6010
5300 GOSUB 5840
5310 A1=135:A2=172:GOSUB 5740
5320 FOR SA = 1 TO 555:NEXT SA
5330 B$="":A$=""
5340 TC=TC+1
5350 CLS
5360 GOTO 2250
5370 ' ***** Data for States and their location on the screen *****
5380 DATA SOUTH CAROLINA, 176,98, GEORGIA,164,100,FLORIDA,172,116,KENTUCKY,160,76,TENNESSEE,160,84,ALABAMA,152,100
5390 DATA MISSISSIPPI,144,100,ARKANSAS,132,88,LOUISIANA,136,108,OKLAHOMA,120,88,TEXAS,116,108,MONTANA,80,32,IDAHO,64,44
5400 DATA WYOMING, 88,52,COLORADO,92,72,NEW MEXICO,92,92,ARIZONA,76,92,UTAH,76,72,NEVADA,60,72,WASHINGTON,48,28
5410 DATA OREGON,48,44,CALIFORNIA,44,80,MAINE,212,32,MASSACHUSETTS,204,48,NEW HAMPSHIRE,204,44,VERMONT,200,40
5420 DATA RHODE ISLAND,208,52,CONNECTICUT,200,52,NEW YORK,188,48,NEW JERSEY,196,64,PENNSYLVANIA,184,64
5430 DATA OHIO,164,60,INDIANA,156,60,ILLINOIS,144,60,MICHIGAN,160,48,WISCONSIN,140,40
5440 DATA MINNESOTA,128,36,IOWA,128,56,MISSOURI,132,72,NORTH DAKOTA,108,28,SOUTH DAKOTA,108,44,NEBRASKA,108,60
5450 DATA KANSAS,108,76,DELAWARE,192,70,MARYLAND,184,70,VIRGINIA,180,76,WEST VIRGINIA,172,72,NORTH CAROLINA,176,84
5460 DATA LAKE ONTARIO,180,44,LAKE SUPERIOR,148,24,LAKE MICHIGAN,152,36,LAKE HURON,164,36,LAKE ERIE,170,52
5470 ' ***** Additional paint statement to complete Michigan *****
5480 PAINT (148,32),1,3
5490 ' ***** Game over, calculate score and see if another game is wanted *****
5500 FOR X=1 TO 1000:NEXT X:CLS:PRINT :PRINT TAB(5) "YOUR TEST IS FINISHED."
5510 PRINT :PRINT TAB(6) "TOTAL QUESTIONS =";TF
5520 PRINT :PRINT TAB(7) "YOUR SCORE IS"INT((TC/NR)*100);"%"
5530 IF NP>53 THEN 5600
5540 IF GS=2 AND NP>48 THEN 5600
5550 PRINT :PRINT TAB(8) "TRY AGAIN (Y/N)?";
5560 D$=INKEY$: IF D$=""THEN 5560
5570 IF D$="Y" THEN 5580 ELSE 5600
5580 CLS:NP=NP-1:NO = 0:V=0:NQ=10
5590 GOTO 1870
5600 SCREEN 0,0,0 :WIDTH 80:LOCATE 8,30:PRINT  "GAME IS OVER.":PRINT :PRINT TAB(28) "SEE YOU LATER !!!":LOCATE 23,1
5610 END
5620 PUT (A1,A2),ZZ: A1=A1-8
5630 PUT (A1,A2),ZZ
5640 IF B$=""THEN RETURN
5650 L = LEN(B$)-1:C$=LEFT$(B$,L):B$=C$
5660 A1=A1-8
5670 B$=C$: RETURN
5680 ' ***** Data statements for capitals *****
5690 DATA COLUMBIA, ALANTA,TALLAHASSEE,FRANKFORT,NASHVILLE,MONTGOMERY,JACKSON,LITTLE ROCK,BATON ROUGE,OKLAHOMA CITY,AUSTIN,HELENA,BOISE
5700 DATA CHEYENNE,DENVER,SANTA FE, PHOENIX, SALT LAKE CITY,CARSON CITY,OLYMPIA,SALEM,SACRAMENTO,AUGUSTA,BOSTON,CONCORD,MONTPELIER
5710 DATA PROVIDENCE,HARTFORD,ALBANY,TRENTON,HARRISBURG,COLUMBUS,INDIANAPOLIS,SPRINGFIELD,LANSING,MADISON,ST. PAUL,DES MOINES,JEFFERSON CITY
5720 DATA BISMARK, PIERRE,LINCOLN,TOPEKA,DOVER,ANNAPOLIS,RICHMOND,CHARLESTON,RALEIGH
5730 DATA " "," "," "," "," "
5740 L=LEN(SC$(X)):FOR T=1 TO L:A$=MID$(SC$(X),T,1):GOSUB 1910
5750 NEXT T
5760 RETURN
5770 RETURN
5780 L=LEN(J$):FOR T=1 TO L:A$=MID$(J$,T,1):GOSUB 1910
5790 NEXT T
5800 RETURN
5810 L=LEN(S$(X)):FOR T=1 TO L:A$=MID$(S$(X),T,1):GOSUB 1910
5820 NEXT T
5830 RETURN
5840 L=LEN(H$): FOR T=1 TO L:A$ = MID$(H$,T,1):GOSUB 1910
5850 NEXT T
5860 RETURN
5870 IF SC$(X)=B$ THEN 5940
5880 A1=135:A2=152
5890 GOSUB 5980
5900 GOSUB 5780
5910 A1=8:A2=172:GOSUB 5740
5920 A1=135:A2=172:GOSUB 5810
5930 GOTO 5250
5940 GOSUB 6010:A1=135:A2=152:GOSUB 5840
5950 A1=135:A2=172:GOSUB 5810
5960 GOTO 5320
5970 PUT(A1,A2),ZZ:A1=A1+2:PSET(A1,A4):PSET(A1,A4-1):PSET(A1+1,A4):PSET(A1+1,A4-1):A1=A1-4:A3=A3-4:GOTO 1880
5980 PLAY"O2L2CP55L4CCL2CL4D#L4DDCCO1BO2L2C"
5990 ' ***** Play tunes for right or wrong answer *****
6000 RETURN
6010 PLAY"L8O3CO2AL4FAO3CL2FL8AGL4FO2ABO3L4C":RETURN
6020 A$ = INKEY$
6030 IF A$="" THEN 6040
6040 SCREEN 0,0,0
6050 WIDTH 80
6060 CLS':LIST 3880-3920
```
{% endraw %}

## YAHTZEE.BAS

{% raw %}
```bas
10 KEY OFF:CLS
20 SCREEN 0
30 WIDTH 40
40 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
50 PRINT"░┌───────────────────────────────────┐░"
60 PRINT"░│                                   │░"
70 PRINT"░│            2053-A.BAS             │░"
80 PRINT"░│             YAHTZEE               │░"
90 PRINT"░│                                   │░"
100 PRINT"░│                                   │░"
110 PRINT"░│ BROUGHT TO YOU BY THE MEMBERS OF  │░"
120 PRINT"░│      ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄      │░"
130 PRINT"░│        █   █   █ █     █   █      │░"
140 PRINT"░│        █   █▄▄▄█ █     █   █      │░"
150 PRINT"░│        █   █     █     █   █      │░"
160 PRINT"░│      ▄▄█▄▄ █     █▄▄▄▄ █▄▄▄█      │░"
170 PRINT"░│                                   │░"
180 PRINT"░│      International PC Owners      │░"
190 PRINT"░│                                   │░"
200 PRINT"░│P.O. Box 10426, Pittsburgh PA 15234│░"
210 PRINT"░│                                   │░"
220 PRINT"░└───────────────────────────────────┘░"
230 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
240 PRINT
250 PRINT "       PRESS ANY KEY TO CONTINUE
260 A$=INKEY$: IF A$="" THEN 260
270 WIDTH 80
280 CLS
1000 '     YATZEE
1010 ' ORIGINAL BY JL HELMS & MF PEZOK FOR CCII
1020 ' CORONADO, CA
1030 ' ADAPTED TO IBM PC BY PATRICK LEABO
1040 ' TUCSON, AZ
1050 '
1060 DEFINT A-Z
1070 DIM C(5):DIM K(18,7):DIM F(5):DIM A$(7)
1080 DIM S(6,5):DIM M(13),TN(6),DU(6):KEY OFF:COLOR 7,0:WIDTH 80
1090 SCREEN 0,1:RESTORE 1150:FOR N= 1 TO 6:READ TN(N):NEXT
1100 COMMON MENU
1110 GOSUB 5110
1120 C1= 39:C2= 63:C3= 33:C4= 56
1130 GOSUB 4680
1140 CLS:GOSUB 4450
1150 DATA 49,51,53,54,56,61
1160 GOSUB 6820:REM  draw yatzee board
1170 RANDOMIZE VAL(RIGHT$(TIME$,2))
1180 LOCATE 25,1
1190 PRINT "HOW MANY PLAYERS?  ";:LOCATE ,,1:GOSUB 2110
1200 GOSUB 7100: N=ASC(KB$)-48
1210 IF N< 1 OR N> 5 THEN 1180
1220 IF N< 5 THEN GOSUB 6020
1230 IF CC= 1 THEN GOSUB 5500
1240 FOR A= 1 TO N
1250 LOCATE 25,1:PRINT STRING$(70," ");:LOCATE 25,1
1260 PRINT "PLAYER NUMBER"A;"NAME PLEASE  ";
1270 GOSUB 2110:LINE INPUT ;A$(A):IF A$(A)= "" THEN BEEP:GOTO 1250
1280 A$(A)=LEFT$(A$(A),9)
1290 NEXT A
1300 IF CC= 1 THEN N= N+ 1:A$(N)= "IBM PC"
1310 LOCATE 23,1
1320 A= 0
1330 REM 
1340 REM   NEXT ROLL PRESET
1350 REM  
1360 A= A+ 1:IF A> N THEN A= 1
1370 H= 0:GOSUB 5360
1380 IF A= 0 THEN 4780
1390 IF K(18,A)= 2 THEN 1360
1400 LOCATE 23,1:PRINT STRING$(60," ");
1410 LOCATE 23,4* (A- 1)+ 14
1420 PRINT A$(A);
1430 REM 
1440 REM   INITIAL ROLL
1450 REM  
1460 H= H+ 1:MR= 0
1470 FOR B= 1 TO 5
1480 J= B- 1:C(B)= INT (6* RND (1)+ 1)
1490 DIE= C(B):F(B)= 0
1500 GOSUB 5270
1510 GOSUB 5550
1520 NEXT B
1530 IF A* CC= N THEN 2160
1540 REM 
1550 REM  PLAYER SELECTS QTY TO ROLL
1560 REM 
1570 GOSUB 7080
1580 IF H> 2 THEN 1960
1590 POKE 106,0:PRINT " HOW MANY DICE TO ROLL AGAIN? ";:LOCATE ,,1:GOSUB 2100:GOSUB 7100:F$=KB$:PRINT F$;:F=ASC(F$)-48:LOCATE ,,0
1600 IF F= - 1 THEN GOSUB 7080
1610 IF F< 0 OR F> 5 THEN 1570
1620 IF F= 0 THEN 1960
1630 IF F= 5 THEN 1430
1640 REM 
1650 REM  PLAYER SELECTS DICE TO ROLL
1660 REM 
1670 H= H+ 1
1680 GOSUB 7080
1690 FOR NN= 1 TO 4:F(NN)= 0:NEXT 
1700 IF F>1 THEN 1720
1710 PRINT " ROLL WHICH";F;"DIE AGAIN?  ";:LOCATE ,,1:GOTO 1730
1720 PRINT " ROLL WHICH";F;"DICE AGAIN   ";:LOCATE ,,1
1730 GOSUB 2110:FOR ND= 1 TO F:
1740 GOSUB 7100:F$=KB$::F(ND)= ASC(F$)- 48:GOSUB 2140:IF F(ND)= 0 AND  ND= 1 THEN  ND= F:GOTO 1760
1750 IF F(ND)< 1 OR  F(ND)> 5 THEN 1740
1760 PRINT F(ND);:NEXT
1770 X= 2:XF= 0
1780 FOR J= 1 TO F
1790 IF F= 1 THEN 1810
1800 IF F(J)= F(J+ 1)THEN X= 1
1810 IF F(1)= 0 THEN XF= 1
1820 NEXT J:IF XF= 1 THEN H= H- 1:GOTO 1570
1830 ON X GOTO 1680,1840
1840 REM  
1850 REM  PLAYER ROLLS DICE AGAIN
1860 REM 
1870 FOR B= 1 TO 4
1880 IF F(B)= 0 THEN 1940
1890 C(F(B))= INT (6* RND (1)+ 1)
1900 DIE= C(F(B)):J= F(B)- 1
1910 GOSUB 5270
1920 GOSUB 5550
1930 F(B)= 0
1940 NEXT B
1950 GOTO 1540
1960 REM 
1970 REM   PLAY BOARD NUMBER
1980 REM 
1990 GOSUB 7080
2000 PRINT " PLAY BOARD NUMBER?  ";:LOCATE ,,1:GOSUB 2100:GOSUB 7100:I$=KB$:I=ASC(I$)- 48:LOCATE ,,0:IF I> 9 THEN I= I- 7
2010 GOSUB 2140:IF I> 9 THEN PRINT CHR$ (I+ 55);:GOTO 2030
2020 PRINT I;
2030 IF I< 1 OR I> 13 THEN 1990
2040 IF I= 12 AND K(12,A)> - 1 THEN 2160
2050 IF K(I,A)= 0 THEN 2160
2060 LOCATE 24,1:BEEP
2070 PRINT "NO - NO - DUMMY - - TRY AGAIN";:FOR ND=1 TO 1500:NEXT:LOCATE 24,1:PRINT STRING$(60," ");
2080 LOCATE 25,1:PRINT STRING$(60," ");:LOCATE 25,1
2090 GOTO 2000
2100 REM  HIGH PITCH CLICK
2110 PLAY "L64T200N70":RETURN
2120 REM  GLISSANDO SOUND
2130 PLAY "MBt255MLL64O5CC#DD#EFF#GG#AA#B":RETURN
2140 ' LO PITCH CLICK
2150 PLAY "L64T200N46":RETURN
2160 REM  
2170 REM  DICE LOGIC
2180 REM  CLEAR/SET S(M,K)
2190 REM  
2200 FOR M= 0 TO 6
2210 FOR K= 0 TO 5
2220 S(M,K)= 0
2230 NEXT K
2240 NEXT M
2250 FOR J= 1 TO 5
2260 X= C(J):S(X,0)= S(X,0)+ 1
2270 P= S(X,0):S(X,P)= J
2280 NEXT J
2290 REM  
2300 REM  SET S(0,K)=M SEQUENCE BY QTY
2310 REM  
2320 X= 0
2330 FOR J= 5 TO 1 STEP - 1
2340 FOR M= 6 TO 1 STEP - 1
2350 IF S(M,0)< > J THEN 2370
2360 S(0,X)= M:X= X+ 1
2370 NEXT M
2380 NEXT J
2390 IF A* CC= N THEN 2760
2400 IF I> 6 THEN 2480
2410 REM  
2420 REM  CHECK PLAYER BOARD 1-6
2430 REM  
2440 GOSUB 6110
2450 IF X= - 1 THEN 2740
2460 K(I,A)= I* S(S(0,X),0)
2470 GOTO 4000
2480 REM  
2490 REM  CHECK PLAYER BOARD 7-13
2500 REM  
2510 ON I- 6 GOTO 2520,2540,2560,2580,2630,2670,2700
2520 IF S(S(0,0),0)< 3 THEN 2740
2530 GOSUB 6190:GOTO 4000
2540 IF S(S(0,0),0)< 4 THEN 2740
2550 GOSUB 6190:GOTO 4000
2560 IF S(S(0,0),0)< > 3 OR S(S(0,1),0)< > 2 THEN 2740
2570 K(9,A)= 25:GOTO 4000
2580 IF S(1,0)> 0 AND S(2,0)> 0 AND S(3,0)> 0 AND S(4,0)> 0 THEN 2620
2590 IF S(2,0)> 0 AND S(3,0)> 0 AND S(4,0)> 0 AND S(5,0)> 0 THEN 2620
2600 IF S(3,0)> 0 AND S(4,0)> 0 AND S(5,0)> 0 AND S(6,0)> 0 THEN 2620
2610 GOTO 2740
2620 K(10,A)= 30:GOTO 4000
2630 IF S(1,0)AND S(2,0)AND S(3,0)AND S(4,0)AND S(5,0)= 1 THEN 2660
2640 IF S(2,0)AND S(3,0)AND S(4,0)AND S(5,0)AND S(6,0)= 1 THEN 2660
2650 GOTO 2740
2660 K(11,A)= 40:GOTO 4000
2670 IF S(S(0,0),0)< > 5 THEN 2740
2680 IF K(12,A)= 0 THEN K(12,A)= 50:GOTO 4000
2690 K(12,A)= K(12,A)+ 100:GOTO 4000
2700 GOSUB 6190:GOTO 4000
2710 REM  
2720 REM  SET PLAYER INVALID
2730 REM  
2740 K(I,A)= - 1
2750 GOTO 4000
2760 REM  
2770 REM  COMPUTER CHECKS
2780 REM  
2790 I= 12
2800 IF S(S(0,0),0)= 5 AND K(12,A)= 0 THEN K(12,A)= 50:GOTO 4000
2810 IF S(S(0,0),0)= 5 AND K(12,A)> 0 THEN K(12,A)= K(12,A)+ 100:GOTO 4000
2820 I= 8
2830 IF S(S(0,0),0)= 4 AND K(8,A)= 0 THEN GOSUB 6190:GOTO 4000
2840 I= 9
2850 IF S(S(0,0),0)= 3 AND S(S(0,1),0)= 2 AND K(9,A)= 0 THEN K(9,A)= 25:GOTO 4000
2860 IF K(11,A)< > 0 THEN 2920
2870 I= 11
2880 IF S(1,0)AND S(2,0)AND S(3,0)AND S(4,0)AND S(5,0)= 1 THEN 2910
2890 IF S(2,0)AND S(3,0)AND S(4,0)AND S(5,0)AND S(6,0)= 1 THEN 2910
2900 GOTO 2920
2910 K(11,A)= 40:GOTO 4000
2920 IF K(10,A)< > 0 THEN 2990
2930 I= 10
2940 IF S(1,0)> 0 AND S(2,0)> 0 AND S(3,0)> 0 AND S(4,0)> 0 THEN 2980
2950 IF S(2,0)> 0 AND S(3,0)> 0 AND S(4,0)> 0 AND S(5,0)> 0 THEN 2980
2960 IF S(3,0)> 0 AND S(4,0)> 0 AND S(5,0)> 0 AND S(6,0)> 0 THEN 2980
2970 GOTO 2990
2980 K(10,A)= 30:GOTO 4000
2990 IF H< 3 THEN 3160
3000 I= 6
3010 IF S(6,0)> 2 AND K(6,A)= 0 THEN K(6,A)= 6* S(6,0):GOTO 4000
3020 I= 5
3030 IF S(5,0)> 2 AND K(5,A)= 0 THEN K(5,A)= 5* S(5,0):GOTO 4000
3040 I= 4
3050 IF S(4,0)> 2 AND K(4,A)= 0 THEN K(4,A)= 4* S(4,0):GOTO 4000
3060 I= 3
3070 IF S(3,0)> 2 AND K(3,A)= 0 THEN K(3,A)= 3* S(3,0):GOTO 4000
3080 I= 7
3090 IF S(S(0,0),0)> 2 AND K(7,A)= 0 THEN GOSUB 6190:GOTO 4000
3100 I= 2
3110 IF S(2,0)> 2 AND K(2,A)= 0 THEN K(2,A)= 2* S(2,0):GOTO 4000
3120 I= 1
3130 IF S(1,0)> 2 AND K(1,A)= 0 THEN K(1,A)= S(1,0):GOTO 4000
3140 I= 13:IF K(13,A)< > 0 THEN 3160
3150 IF C(1)+ C(2)+ C(3)+ C(4)+ C(5)> 19 THEN GOSUB 6190:GOTO 4000
3160 REM  
3170 REM  CLEAR DICE NUMBER F(B)
3180 REM  COMPUTER
3190 REM  
3200 FOR B= 1 TO 5
3210 F(B)= 0
3220 NEXT B
3230 REM  
3240 REM  GET DICE CONTROL
3250 REM  COMPUTER
3260 REM  
3270 H= H+ 1:IF H> 3 THEN 3860
3280 I= M(MR):IF I< > 0 THEN 3310
3290 MR= MR+ 1:IF MR> 13 THEN MR= 1
3300 GOTO 3280
3310 IF I= 12 AND K(12,A)> - 1 THEN 3350
3320 IF K(I,A)< > 0 THEN 3290
3330 IF I= 9 THEN 3460
3340 IF I= 10 OR I= 11 THEN 3580
3350 REM  
3360 REM  GET DICE 1,2,3,4
3370 REM  COMPUTER
3380 REM  
3390 M= 0:J= 1
3400 M= M+ 1:IF M> 4 THEN 3740
3410 K= S(0,M):IF K= 0 THEN 3740
3420 FOR L= 1 TO S(K,0)
3430 F(J)= S(K,L):J= J+ 1
3440 NEXT L
3450 GOTO 3400
3460 REM  
3470 REM  GET DICE FH
3480 REM  COMPUTER
3490 REM  
3500 M= 0:J= 1
3510 M= M+ 1:IF M> 4 THEN 3740
3520 K= S(0,M):IF K= 0 THEN 3740
3530 IF K> 1 THEN 3510
3540 FOR L= 1 TO S(K,0)
3550 F(J)= S(K,L):J= J+ 1
3560 NEXT L
3570 GOTO 3510
3580 REM  
3590 REM  GET DICE LG/SM ST
3600 REM  COMPUTER
3610 REM  
3620 M= 0:J= 1
3630 M= M+ 1:IF M> 4 THEN 3700
3640 K= S(0,M):IF K= 0 THEN 3700
3650 IF S(K,0)= 1 THEN 3630
3660 FOR L= 1 TO S(K,0)
3670 F(J)= S(K,L):J= J+ 1
3680 NEXT L
3690 GOTO 3630
3700 IF F(1)< > 0 THEN 3740
3710 L= INT (2* RND (1)+ 1)
3720 F(1)= 5
3730 IF L= 1 THEN F(1)= 1
3740 REM  
3750 REM  COMPUTER ROLL AGAIN
3760 REM  
3770 FOR B= 1 TO 4
3780 IF F(B)< 1 THEN 3830
3790 C(F(B))= INT (6* RND (1)+ 1)
3800 DIE= C(F(B)):J= F(B)- 1
3810 GOSUB 5270
3820 GOSUB 5550
3830 F(B)= 0
3840 NEXT B
3850 GOTO 2160
3860 REM  
3870 REM  COMPUTER MUST SCORE
3880 REM  
3890 MR= MR+ 1:IF MR> 13 THEN MR= 1
3900 I= M(MR):IF I= 0 THEN 3890
3910 IF K(I,A)< > 0 THEN 3890
3920 IF I> 6 THEN 3980
3930 GOSUB 6110
3940 IF X= - 1 THEN 3990
3950 IF K(I,A)< > 0 THEN 3890
3960 K(I,A)= S(I,0)* I
3970 IF K(I,A)< > 0 THEN 4000
3980 IF I= 13 AND K(13,A)= 0 THEN GOSUB 6190
3990 IF K(I,A)= 0 THEN K(I,A)= - 1
4000 REM  
4010 REM  GET SCOREBOARD TOTALS
4020 REM  
4030 FOR J= 14 TO 17
4040 K(J,A)= 0
4050 NEXT J
4060 FOR J= 1 TO 6
4070 IF K(J,A)< 0 THEN 4090
4080 K(15,A)= K(15,A)+ K(J,A)
4090 NEXT J
4100 IF K(15,A)> 62 THEN K(14,A)= 35
4110 FOR J= 7 TO 13
4120 IF K(J,A)< 0 THEN 4140
4130 K(16,A)= K(16,A)+ K(J,A)
4140 NEXT J
4150 K(17,A)= K(14,A)+ K(15,A)+ K(16,A)
4160 REM  
4170 REM  PRINT SCORE
4180 REM  
4190 GOSUB 2130
4200 COLOR 15,0
4210 FOR J= 1 TO 6
4220 IF K(J,A)< 0 THEN LOCATE J+1,4* (A- 1)+ 15:PRINT "  0";:GOTO 4250
4230 IF K(J,A)< 1 THEN 4250
4240 LOCATE J+1,4* (A- 1)+ 15:PRINT  USING"###";K(J,A);
4250 NEXT J
4260 FOR J= 7 TO 13
4270 IF K(J,A)< 0 THEN LOCATE J+4,4* (A- 1)+ 15:PRINT "  0":GOTO 4300
4280 IF K(J,A)< 1 THEN 4300
4290 LOCATE J+4,4* (A- 1)+ 15:PRINT USING "###";K(J,A)
4300 NEXT J
4310 LOCATE 9,4* (A- 1)+ 15:PRINT USING "###";K(15,A)
4320 LOCATE 19,4* (A- 1)+ 15:PRINT USING "###";K(16,A)
4330 LOCATE 20,4* (A- 1)+ 15:PRINT USING "###";K(14,A)
4340 LOCATE 21,4* (A- 1)+ 15:PRINT USING "###";K(17,A)
4350 COLOR 7,0
4360 IF A* CC< > N THEN 1330
4370 REM  
4380 REM  RESET M(I) COMPUTER PRIORITIES
4390 REM  
4400 FOR B= 1 TO 13
4410 IF M(B)= 12 THEN 4430
4420 IF M(B)= I THEN M(B)= 0
4430 NEXT B
4440 GOTO 1330
4450 REM  
4460 REM   INSTRUCTIONS
4470 REM  
4480 PRINT "            Y A H T Z E E "
4490 PRINT "THIS IS THE GAME OF YAHTZEE - "
4500 PRINT "FROM 1 TO 7 PLAYERS MAY PLAY AT THE SAME TIME"
4510 PRINT "WITH EACH PLAYERS CURRENT STATUS SHOWN ON THE"
4520 PRINT "PLAYING BOARD, INCLUDING TOTAL SCORES"
4530 PRINT 
4540 PRINT "THE ONLY DIFFERENCE BETWEEN THIS GAME AND THE"
4550 PRINT "POPULAR HOME GAME IS THAT YOU MAY GET MULTIPLE"
4560 PRINT "YAHTZEES HERE ..... THE FIRST YAHTZEE SCORES"
4570 PRINT "50 POINTS, AND EACH ADDITIONAL ONE WILL YIELD"
4580 PRINT "A BONUS OF 100 POINTS (IF THE YAHTZEE IS PUT"
4590 PRINT "INTO THE YAHTZEE BLOCK)..... IN ADDITION YOU"
4600 PRINT "WILL BE GIVEN AN EXTRA TURN AT THE END OF"
4610 PRINT "THE GAME":PRINT :PRINT 
4620 PRINT "THE WINNER WILL BE ANNOUNCED AT THE END OF"
4630 PRINT "THE GAME - - BUT I WOULDNT ADVISE ANYONE"
4640 PRINT "TO BE LAST......."
4650 PRINT:PRINT
4660 GOSUB 2110:INPUT "HIT RETURN TO CONTINUE  ";Y$:BEEP
4670 RETURN 
4680 RETURN
4690 LOCATE 10,10:PRINT "YATZEE.BAS     VER 3.2"
4700 LOCATE 12,10:PRINT "27 JUN 79"
4710 LOCATE 14,10:PRINT "DEVELOPED BY"
4720 LOCATE 15,13:PRINT "J.L. HELMS    &    M.F. PEZOK"
4730 LOCATE,16,13:PRINT "1009 LEYTE RD / 1321 SAIPAN RD"
4740 LOCATE 17,17:PRINT "CORONADO,  CA.  92118"
4750 LOCATE 18,15:PRINT "(714) 435-6992 / 437-4659"
4760 PRINT CHR$(11)
4770 RETURN 
4780 REM 
4790 REM   END - SORT WINNER
4800 REM 
4810 X= 2:IF N= 1 THEN 4890
4820 FOR J= 1 TO N- 1
4830 IF K(17,J)> K(17,J+ 1)THEN 4870
4840 K= K(17,J):K(17,J)= K(17,J+ 1):K(17,J+ 1)= K
4850 A$= A$(J):A$(J)= A$(J+ 1):A$(J+ 1)= A$
4860 X= 1
4870 NEXT J
4880 ON X GOTO 4780,4890
4890 REM 
4900 REM   PRINT WINNERS STANDINGS
4910 REM 
4920 RESTORE 5220
4930 FOR J= 1 TO N
4940 LOCATE 25,1:PRINT STRING$(60," ");
4950 IF J> 1 AND J= N THEN RESTORE 5260
4960 LOCATE 25,1:READ A$
4970 PRINT A$;"     ";A$(J);" ";
4980 TT= 500* (N- J+ 1):IF TT< 1500 THEN TT= 1500
4990 FOR T= 1 TO TT:NEXT T
5000 NEXT J
5010 LOCATE 25,1:PRINT STRING$(60," ");
5020 LOCATE 24,1:PRINT "+++   END OF GAME   +++";
5030 FOR T= 1 TO 2000:NEXT T
5040 '
5050 GOSUB 2110:LOCATE 25,1:PRINT "PLAY AGAIN?  Y/N  ";
5060 Y$=INKEY$:IF Y$=""THEN GOTO 5060
5070 IF Y$="Y" OR Y$="y" THEN GOSUB 5110:GOTO 1110
5080 IF Y$="N" OR Y$="n" THEN BEEP:GOTO 5100
5090 GOTO 5060
5100 CHAIN "MENU",1000
5110 REM 
5120 REM   CLEAR MATRICES
5130 REM 
5140 FOR K= 1 TO 7
5150 FOR J= 1 TO 18
5160 K(J,K)= 0
5170 NEXT J
5180 A$(K)= ""
5190 NEXT K
5200 CLS
5210 RETURN 
5220 DATA "+++   THE WINNER   +++"
5230 DATA " SECOND PLACE"," THIRD PLACE "
5240 DATA " FOURTH PLACE "," FIFTH PLACE "
5250 DATA " SIXTH PLACE "
5260 DATA " DEAD LAST "
5270 REM 
5280 REM   ERASE DIE
5290 REM 
5300 COLOR 0,7:PRINT"";:
5310 LOCATE 4* J+ 1,50:PRINT"       ";
5320 LOCATE 4* J+ 2,50:PRINT"       ";
5330 LOCATE 4* J+ 3,50:PRINT"       ";
5340 COLOR 7,0
5350 RETURN 
5360 REM  
5370 REM    CHECK IF DONE
5380 REM  
5390 X= 0
5400 FOR J= 1 TO N
5410 Y= 2
5420 FOR K= 1 TO 13
5430 IF K(K,J)= 0 THEN Y= 1
5440 NEXT K
5450 K(18,J)= Y
5460 IF Y= 2 THEN X= X+ 1
5470 NEXT J
5480 IF X= > N THEN A= 0
5490 RETURN 
5500 REM  
5510 REM  COMPUTER PRIORITIES INFO
5520 REM  
5530 GOSUB 6780
5540 RETURN 
5550 REM 
5560 REM   PRINT DIE
5570 REM 
5580 COLOR 0,7:LOCATE ,,0
5590 REM 
5600 PLAY "L32T200N=TN(DIE);"
5610 ON DIE GOTO 5950,5890,5830,5770,5710,5650
5620 '
5630 '   SIX
5640 '
5650 LOCATE 4*J+1,50:PRINT "";CHR$(32);CHR$(2);CHR$(32);CHR$(2);CHR$(32);CHR$(2);CHR$(32);
5660 LOCATE 4*J+2,50:PRINT CHR$(32);CHR$(32);CHR$(32);CHR$(32);CHR$(32);CHR$(32);CHR$(32);
5670 LOCATE 4*J+3,50:PRINT CHR$(32);CHR$(2);CHR$(32);CHR$(2);CHR$(32);CHR$(2);CHR$(32);:GOTO 5980
5680 '
5690 '   FIVE
5700 '
5710 LOCATE 4*J+1,50:PRINT "";CHR$(32);CHR$(2);CHR$(32);" ";CHR$(32);CHR$(2);" ";
5720 LOCATE 4*J+2,50:PRINT " ";CHR$(32);" ";CHR$(2);" ";CHR$(32);" ";
5730 LOCATE 4*J+3,50:PRINT " ";CHR$(2);" ";CHR$(32);" ";CHR$(2);" ";:GOTO 5980
5740 '
5750 '   FOUR
5760 '
5770 LOCATE 4*J+1,50:PRINT "";" ";CHR$(2);"  ";CHR$(32);CHR$(2);" ";
5780 LOCATE 4*J+2,50:PRINT "   ";CHR$(32);CHR$(32);CHR$(32);
5790 LOCATE 4*J+3,50:PRINT " ";CHR$(2);"  ";CHR$(32);CHR$(2);" ";:GOTO 5980
5800 '
5810 '   THREE
5820 '
5830 LOCATE 4*J+1,50:PRINT "";" ";CHR$(2);"     ";
5840 LOCATE 4*J+2,50:PRINT "   ";CHR$(2);"   ";
5850 LOCATE 4*J+3,50:PRINT "     ";CHR$(2);" ";:GOTO 5980
5860 '
5870 '   TWO
5880 '
5890 LOCATE 4*J+1,50:PRINT "";" ";CHR$(2);"     ";
5900 LOCATE 4*J+2,50:PRINT "       ";
5910 LOCATE 4*J+3,50:PRINT "     ";CHR$(2);" ";:GOTO 5980
5920 '
5930 '   ONE
5940 '
5950 LOCATE 4*J+1,50:PRINT "";"       ";
5960 LOCATE 4*J+2,50:PRINT "   ";CHR$(2);"   ";
5970 LOCATE 4*J+3,50:PRINT "       ";:GOTO 5980
5980 REM   GET OUT
5990 COLOR 7,0
6000 LOCATE 1,1
6010 RETURN 
6020 REM  
6030 REM  COMPUTER OPTION
6040 REM  
6050 LOCATE 25,1
6060 PRINT "DO YOU WISH TO PLAY AGAINST ME?  Y/N  ";:GOSUB 2110
6070 Y$=INKEY$:IF Y$="" THEN 6070 ELSE BEEP
6080 IF Y$="N" OR Y$="n" THEN CC=0:RETURN
6090 IF Y$="Y" OR Y$="y" THEN CC=1:RETURN
6100 GOTO 6050
6110 REM  
6120 REM  CHECK FOR ACES-SIXES ANY POSITION
6130 REM  
6140 X= - 1
6150 FOR J= 0 TO 4
6160 IF S(0,J)= I THEN X= J
6170 NEXT J
6180 RETURN 
6190 REM  
6200 REM  TOTAL DICE VALUE
6210 REM  
6220 FOR J= 1 TO 5
6230 K(I,A)= K(I,A)+ C(J)
6240 NEXT J
6250 RETURN 
6260 REM  
6270 REM  MATRIX INFORMATION
6280 REM  
6290 REM  C(5)     CURRENT DICE
6300 REM  K(18,7)  SCOREBOARD
6310 REM           COLUMNS 1-13 BOARD NUMBER
6320 REM           COLUMN    14 BONUS UPPER
6330 REM           COLUMN    15 TOTAL UPPER
6340 REM           COLUMN    16 TOTAL LOWER
6350 REM           COLUMN    17 GRAND TOTAL
6360 REM           COLUMN    18 DONE/NOT DONE STATUS
6370 REM           ROW     1- 7 PLAYERS SCORE
6380 REM           ROW        N COMPUTERS SCORE (<7 PLAYERS)
6390 REM  
6400 REM  F(5)     DICE NUMBER TO ROLL AGAIN
6410 REM  A$(7)    PLAYERS NAMES
6420 REM  S(6,5)   COMPUTERS DICE LOGIC
6430 REM           COLUMN     0 DICE NUMBER BY QTY SEQUENCE
6440 REM           COLUMN     1 QTY/POSITION FOR ACES
6450 REM           COLUMN     2 QTY/POSITION FOR TWOS
6460 REM           COLUMN     3 QTY/POSITION FOR THREES
6470 REM           COLUMN     4 QTY/POSITION FOR FOURS
6480 REM           COLUMN     5 QTY/POSITION FOR FIVES
6490 REM           COLUMN     6 QTY/POSITION FOR SIXES
6500 REM           ROW        0 QUANTITY OF DICE
6510 REM           ROW     1- 5 POSITION OF DICE IN C(5)
6520 REM  
6530 REM  SAMPLE S(Y,X) FOR DICE OF 5,2,4,6,4
6540 REM  
6550 REM  Y/X   0  1  2  3  4  5
6560 REM  0     4  6  5  2          IN QTY/VALUE SEQUENCE
6570 REM  1                         NO DIE=1
6580 REM  2     1  2                1 TWO POSITION 2
6590 REM  3                         NO DIE=3
6600 REM  4     2  3  5             2 FOURS POSITIONS 3 AND 5
6610 REM  5     1  1                1 FIVE POSITION 1
6620 REM  6     1  4                1 SIX POSITION 4
6630 REM           +           +
6640 REM  +     +  ++++++++++++++++ SECTION FOR POSITION DATA
6650 REM  +     +------------------ COLUMN INDICATES QTY
6660 REM  +------------------------ INDEX EQUATES TO DIE VALUE
6670 REM  
6680 REM  M(13)    PRIORITY NUMBERS FOR MUST SCORE WHERE VALUE
6690 REM           REFERS TO PLAY BOARD NUMBER
6700 REM  
6710 REM  TO RUN INTERNAL CHECKS SECTION - ENTER A -1 FOR
6720 REM  PLAYING BOARD NUMBER OR QTY OF DICE TO ROLL
6730 REM  AGAIN - - DATA WILL NOT BE LOST AND SCREEN
6740 REM  WILL BE RESET WITH CURRENT DICE SHOWN - -
6750 REM  PLAYERS/COMPUTERS SCORE WILL NOT SHOW UNTIL
6760 REM  AFTER THEIR TURN
6770 REM  
6780 REM  COMPUTER PRIORIRIES
6790 RESTORE 6800
6800 DATA 11,9,12,8,1,2,3,4,5,6,10,7,13
6810 FOR Y= 1 TO 13:READ M(Y):NEXT :RETURN :RETURN 
6820 REM player's board
6830 CLS
6840 PRINT"             ╒═══╤═══╤═══╤═══╤═══╤═══╕
6850 PRINT"ACES........1│...│...│...│...│...│...│1"
6860 PRINT"TWOS........2│...│...│...│...│...│...│2"
6870 PRINT"THREES......3│...│...│...│...│...│...│3"
6880 PRINT"FOURS.......4│...│...│...│...│...│...│4"
6890 PRINT"FIVES.......5│...│...│...│...│...│...│5"
6900 PRINT"SIXES.......6│...│...│...│...│...│...│6"
6910 PRINT"             ╞═══╪═══╪═══╪═══╪═══╪═══╡"
6920 PRINT"TOTAL UPPER..│...│...│...│...│...│...│"
6930 PRINT"             ╞═══╪═══╪═══╪═══╪═══╪═══╡"
6940 PRINT"3 OF A KIND.7│...│...│...│...│...│...│7"
6950 PRINT"4 OF A KIND.8│...│...│...│...│...│...│8"
6960 PRINT"FULL HOUSE..9│...│...│...│...│...│...│9"
6970 PRINT"SM STRAIGHT.A│...│...│...│...│...│...│A"
6980 PRINT"LG STRAIGHT.B│...│...│...│...│...│...│B"
6990 PRINT"YATZEE......C│...│...│...│...│...│...│C"
7000 PRINT"CHANCE......D│...│...│...│...│...│...│D"
7010 PRINT"             ╞═══╪═══╪═══╪═══╪═══╪═══╡"
7020 PRINT"TOTAL LOWER..│...│...│...│...│...│...│"
7030 PRINT"TOP BONUS....│...│...│...│...│...│...│"
7040 PRINT"GRAND TOTAL..│...│...│...│...│...│...│"
7050 PRINT"             ╘═══╧═══╧═══╧═══╧═══╧═══╛"
7060 FOR N=1 TO 5:LOCATE N*4-2,46:PRINT N;:NEXT
7070 RETURN
7080 LOCATE 25,1:PRINT STRING$(70," ");:LOCATE 25,1:RETURN
7090 ' KB INPUT AND ESCAPE
7100 KB$="":WHILE KB$="":KB$=INKEY$:WEND
7110 IF KB$=CHR$(27) THEN 5100 ELSE RETURN
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0061

     Volume in drive A has no label
     Directory of A:\

    SLOTMACH BAS     12288   4-02-83   6:07p
    YAHTZEE  BAS     20608   4-23-83  10:04a
    BANNER   BAS      4096   4-23-83   2:01p
    STATCAPS BAS     17664   4-09-83   4:23p
    NFL-PK   BAS      6912   4-23-83   3:28p
    ITALICS  BAS      6528  11-20-82   3:36p
    MEMSIZE  BAS      3712   4-01-83   9:27p
    EPSONUTL BAS      2304   4-23-83   1:37p
    PRINTGR  ASM      2558   2-20-83   1:14a
    PRTSC_1  ASM      4696   2-18-83  10:01a
    PRTSC_2  ASM      3445   2-19-83   1:39a
    PRINTGR1 EXE      1024   2-18-83  10:04a
    PRINTGR2 EXE       896   2-19-83   1:42a
    PRINTGR  DOC      1681   2-20-83  12:53a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       771  12-01-88   2:32p
    PC-PAD   LST     15744   4-09-83   5:31a
    PC-PAD   BAS      8704   4-09-83   5:30a
    FILES61  TXT      1895   1-27-89   2:27p
    MANUAL   BAT       147   6-08-88   3:02p
           20 file(s)     115711 bytes
                           40448 bytes free
