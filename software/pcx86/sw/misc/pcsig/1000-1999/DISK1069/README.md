---
layout: page
title: "PC-SIG Diskette Library (Disk #1069)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1069/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1069"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PRINTER UTILITIES NO 7"

    X-PRINT is a memory-resident printer utility for Epson and compatible
    printers.  It lets you change the printing style to pica, elite,
    compressed, or near letter quality.  You can also change the lines per
    page to 66, 51, or 33.  Once loaded, X-PRINT stays in memory and can be
    activated at any time, even if you are in the middle of executing a
    program.
    
    LINES takes any ASCII text file, and converts certain selected
    characters into line drawing characters.  These line-drawing characters
    are part of the IBM extended character set that can be used to make
    professional-looking forms and charts on the screen or the printer.
    
    DISK LABELER makes disk labels using one of three different sizes of
    labels: 1" x 3", 1" x 3.5", and 2.75" x 2.75".  It's menu-driven and
    easy to learn (requires CGA).
    
    SETIT is a menu-driven BASIC program that sets up an Epson FX series or
    compatible printer.  Don't change the printer's dip switches or use
    BASIC to set up your printer.  SETIT can set the printing style to near
    letter quality (NLQ), draft, proportional, condensed, double-wide,
    double-high, emphasized, double strike, superscript, subscript, and
    underline.  You can also select the character set to be used from Epson
    character graphics, italics, or one of the international character sets.
    
    GIFTWRAP lets you make custom wrapping paper.  Just enter a short and
    personal message and the program prints it in slanted stripes or a zig-
    zag pattern.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DESCRIBE.TXT

{% raw %}
```
SETIT.BAS is a program which will set an Epson FX series or compatible printer.
It is completly menu driven and very ease to use.

SETIT.DOC is the documentation for SETIT.BAS, and is eight pages long, and page
formatted.

README.1st tells how to copy the document to the printer.

P.S.  --  Anyone wishing to purchase direct from me can do so. Please include
the sum of $5.00 to cover the cost of media, postage, etc.

Thank you,

Robin Peak
Peak Enterprises
P.O. Box 120
Hadlock, Wa. 98339
```
{% endraw %}

## FILE1069.TXT

{% raw %}
```
Disk No  1069
Program Title: PRINTER UTILITIES No 7
PC-SIG version 1

    A collection of useful utilities for your printer that PC-SIG feels you
shouldn't be without. X-PRINT is a memory-resident printer utility for
Epson and compatible printers. It lets you change the printing style to
pica, elite, compressed or near letter quality, and change the lines per
page to 66, 51 or 33. Once loaded, X-PRINT stays in memory and can be
activated at any time by pressing a certain key, even if you are in the
middle of executing a program.

    LINES takes any ASCII text file, and converts certain selected
characters into line drawing characters. These line drawing characters are
part of the IBM extended character set which can be used to make very
professional-looking forms and charts right on the screen or the printer.
However, many wordprocessors cannot display these characters, and even in
the ones that do, the process of looking up which of the 38 characters to
use for line intersections and entering these characters using the Alt key
quickly becomes a chore. But with this program, using any wordprocessor or
editor, you can simply include special marks of where you want horizontal
or vertical lines and intersections. LINES scans the ASCII file and
intelligently converts the marks to the line drawing characters in a few
seconds. Good for making forms, charts, and boxes on your screen or
printer.

    DISK LABLER makes disk labels using one of three different sizes of
labels: 1" x 3", 1" x 3.5", and 2.75" x 2.75" It lets you enter the title
for the disk, the program version, the disk number, whether or not it is a
master or back-up copy, whether or not the program is public domain, the
program category, and a one-line comment. The program is very easy to use
and the menu is self-explanatory. This program requires color graphics.

    SETIT is a menu-driven BASIC program that sets up an Epson FX series or
compatible printer. No longer will you have to change the printer's dip
switches or use BASIC to set-up your printer. It can set the printing style
to Near Letter Quality (NLQ), draft, proportional, condensed, double-wide,
double-high, emphasized, double strike, superscript, subscript and
underline. You can also select which character set to be used: either the
Epson character graphics, italics, or one of the international character
sets. Besides printing style, SETIT can also control printer operations
such as the paper-out sensor, auto-sheet feed mode, full or half speed, and
form feed. SETIT can also set up the margins, the inch-line spacing,
intercharacter space, and NLQ justification.

    GIFTWRAP provides a new style for giftwrapping your presents. Just
enter a short and personal message and the program prints it out in the
format you specify. The words appear either as slanted stripes or as
zigzags on the paper. You can print either by page or line, and you can
specify the number of lines or pages that are going to be printed.
Pagelength, line width, and perforation skip can be specified from the menu
of this program. Instead of sending the information to the printer, the
giftwrap design can be sent instead to the screen or to a file on a disk.
Many people have expressed satisfaction with this new kind of giftwrap,
which gives a surprise on both sides of the box.

Usage: Printer Utility

System Requirements: 128K memory, one floppy disk drive, and an IBM or
EPSON compatible printer (DISK LABELER requires color graphics).

How to Start: Type X-PRINT (press enter) for X-PRINT, LINES (press enter)
for LINES, PGLABEL (press enter) for DISK LABELER, and GIFTWRAP (press
enter) for GIFTWRAP. In order to run SETIT you must first load BASIC then
load the file SETIT.BAS.

Suggested Registration: $15.00 for X-PRINT, $15.00 for DISK LABLER,
$25.00 for SETIT and $5.00 for GIFTWRAP.

File Descriptions:

------------  Xprint
README   TXT  Documentation for XPRINT
X-PRINT  COM  XPRINT program (version 1.0)
------------  Lines
LINES    DOC  Documentation for LINES.
FORM     TXT  Sample form.
FORM     PIC  Sample converted form.
LINES    C    Source code.
LINES    EXE  Main program (version 2.0).
------------  Disk Labler
PGLABEL  EXE  DISK LABELER program (requires color graphics) (version 2.0)
------------  Setit
SETIT    DOC  Documentation for SETIT
SETIT    BAS  SETIT Basic program (version 1.0).
README   1ST  How to read the documentation
DESCRIBE TXT  File descriptions
------------  Giftwrap
GIFTWRAP EXE  Giftwrap main program (version 3.05).

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1988 PC-SIG, Inc.

```
{% endraw %}

## FORM.TXT

{% raw %}
```
                              A SAMPLE FORM
========*=============================*===========================*========
NAME    "                             |                           |
--------*------------*-last-----------*------------first----------*-middle-
ADDRESS "            |                                            |
--------*---number---*-----------street---------------*-----------*--apt---
TOWN    "                                             |           |
--------*--city----------------*-------------*--------*---state---*--zip---
STORE   "                      " SALESPERSON "
========*======================*=============*=============================
========*====================================================*=============
   QTY  |                     ITEM                           |     COST
========*====================================================*========*====
        |                                                    |        |
--------*----------------------------------------------------*--------*----
        |                                                    |        |
--------*----------------------------------------------------*--------*----
        |                                                    |        |
--------*----------------------------------------------------*--------*----
        |                                                    |        |
--------*----------------------------------------------------*--------*----
        |                                                    |        |
========*========================================*===========*========*====
     *------------------------*                  " SUBTOTAL  |        |
VISA |                        |                  *-----------*--------*----
     *------------------------*                  " SALES TAX |        |
MC   |                        |                  *-----------*--------*----
     *------------------------*                  " TOTAL     |        |
                                                 *===========*========*====
```
{% endraw %}

## GO.TXT

{% raw %}
```
                  X-Print is Copyright 1988 Dan Little Computing.
                  ───────────────────────────────────────────────


       There is a small manual that comes with X-Print.  To view it, type...

                                    TYPE README.TXT

                                          or

                             In order to print the manual

                                 TYPE README.TXT>PRN

```
{% endraw %}

## README.TXT

{% raw %}
```

                                   X-PRINT

                     Copyright 1988 Dan Little Computing
                    PO Box 1443 Morgantown, WV  26507-1443

REQUIREMENTS
============
You need an IBM PC, XT, or AT { or compatible }.  Since X-print uses only
about 11k of memory, memory concerns are probably not necessary.

The edition you have is programmed for Epson & compatible printers.  Even if
you have a different printer, you can load X-print and see how it works.
Get in touch with me at the address at the bottom of this document for rates
on customizing X-print for your printer.

LOADING
=======
Loading X-print is a snap.  At the DOS prompt { A> } type X-PRINT <RETURN>.
The screen will display the program title, invocation key { key to start ie
ALT-X }, and Edition name.  The program is loaded and waiting patiently in
memory for you to use.  X-print defaults to an invocation key of ALT-X.  If
you would like some other key to activate X-print, you would type X-PRINT /N.
In this instance Alt-N would start X-print.  You can replace N with any ALPHA
key.  IF YOU USE OTHER MEMORY RESIDENT PROGRAMS, YOU MUST INSTALL X-PRINT
FIRST.  IF YOU DO NOT, X-PRINT MAY DE-ACTIVATE SOME/ALL OF THEM.


OPERATING
=========
To use X-print, press ALT-X { or the optional key you substituted for X --
see "LOADING" }.  The FULL SCREEN menu display shows.  Notice there are 2
arrow keys displaying to the left of the menu.  These arrows show the
current setting of the printer (assuming the printer was not set).  You can
move the highlight bar down by pressing:
                                               Right Arrow
                                               Down Arrow
                                               Space Bar
                                               Plus Key
You can move the highlight bar up by pressing:
                                               Left Arrow
                                               Up Arrow
                                               Back Space
                                               Minus Key
By utilizing all of these to move the band, the keystrokes are compatible
with most any software.

When the band is over the selection you want, press RETURN.  The printer will
be set and the screen will return to its previous state.

PAPER CONSIDERATIONS
====================
You will have no doubt noticed the page size selections which the second arrow
concerns itself with.  The following chart will show how you may be able to
save on paper costs (especially if you use your printer constantly).

 ___________________________________________________________________________
|                    |                       |                              |
|Paper Size          |Lines Per Inch         |Notes                         |
|---------------------------------------------------------------------------|
|                    |                       |                              |
|9½ (8½) X 11        |66                     |Standard Paper                |
|                    |                       |                              |
|12 (11) X 8½        |51                     |Allows for wider reports than |
|                    |                       |standard and is less expensive|
|                    |                       |than the 15 X 11.             |
|                    |                       |                              |
|9½ (8½) X 5½        |33                     |This is actually ½ pages and  |
|                    |                       |can save you $$ for everyday  |
|                    |                       |printing & reporting needs.   |
|                    |                       |You do not lose a full page   |  
|                    |                       |everytime you line your paper.|  
-----------------------------------------------------------------------------


TEXT & GRAPHICS
===============
X-print is designed to work over any text mode.  Since X-print checks the
video mode upon each entrance, you may alter between monitors.  No set up is
necessary as X-print makes the adjustments.
X-print will not come up over graphics (sorry).  Should you make this
attempt, X-print will beep and send the invocation key into your application.

REGISTERING
===========
You will enjoy using X-print.  Under the guidelines of Shareware, you are
required to register X-print should you find it of use (placing it in your
autoexec.bat file or frequent loading indicates that you need to register).
Registration is only $ 15.00.  Upon receipt, you will receive documentation on
loading memory resident applications without "interference".  As indicated
earlier, I will set up X-print to work with your non-epson printer for a
reasonable cost which depends on the printer.  Updates will be made available
at a cost of $ 3.00 as they are developed.  Suggestions and feedback are
welcome.

You may send your registration to:

          Dan Little Computing
          PO Box 1443
          Morgantown, WV  26507-1443

```
{% endraw %}

## SETIT.BAS

{% raw %}
```bas
10 SER$="PC-SIG SHAREWARE"
20 WIDTH 80
30 VN$="1.0"
40 VDT$="5 January 1988"
50 ON ERROR GOTO 4670
60 TEST$="ABCDEFGHIJKLMNOPQRSTUVWXYZ   abcdefghijklmnopqrstuvwxyz   0123456789   # $ @ [ \ ] ^ ' { | } ~"
70 COLOR 7,0:KEY OFF:CLS
80 FOR I=1 TO 10:KEY I,"":NEXT I
90 GOSUB 2800
100 COLOR 15,0
110 LOCATE 5,15:PRINT STRING$(50,205):LOCATE 5,15:PRINT CHR$(201):LOCATE 5,65:PRINT CHR$(187)
120 FOR I= 6 TO 16:LOCATE I,15:PRINT CHR$(186):LOCATE I,65:PRINT CHR$(186):NEXT I
130 LOCATE 16,15:PRINT CHR$(200):LOCATE 16,65:PRINT CHR$(188):LOCATE 16,16:PRINT STRING$(49,205)
140 COLOR 7,0
150 LOCATE 7,25:PRINT "P E A K   E N T E R P R I S E S":LOCATE 8,26:PRINT "P.O.Box 120, Hadlock,Wa.98339"
160 LOCATE 12,25:PRINT "COPYRIGHT  (C) January 1988 by":LOCATE 13,33:PRINT "Peak Enterprises"
170 LOCATE 14,31:PRINT "ALL RIGHTS RESERVED"
180 LOCATE 18,19:PRINT "Setit -- a program to set Epson FX printers"
190 LOCATE 20, 8:PRINT CHR$(34)"Epson"CHR$(34)" and "CHR$(34)"FX"CHR$(34)" ARE REGISTERED TRADEMARKS OF EPSON AMERICA,INC."
200 COLOR 15,0:LOCATE 23,24:INPUT "Press   <ENTER>   to continue ...",ANS$:COLOR 7,0
210 IF ANS$="SERIAL" OR ANS$="serial" OR ANS$="Serial" THEN GOSUB 2750
220 CLS
230 LOCATE 1,1:PRINT STRING$(80,205):COLOR 15,0:LOCATE 1,30:PRINT "[  M A I N   M E N U  ]":COLOR 7,0
240 LOCATE 4,5:PRINT "1...Printer Operations"
250 LOCATE 4,45:PRINT "5...Horizontal Motion"
260 LOCATE 6,5:PRINT "2...Overall Printing Style"
270 LOCATE 6,45:PRINT "6...Print Size and Enhancement"
280 LOCATE 8,5:PRINT "3...Word Processing"
290 LOCATE 8,45:PRINT "7...Character Sets"
300 LOCATE 10,5:PRINT "4...Vertical Motion"
310 LOCATE 10,45:PRINT "8...End Program"
320 LOCATE 20,20:PRINT "Choose  < 1 - 8 >":COLOR 0,7:LOCATE 20,45:PRINT " ":LOCATE 20,45:INPUT "",CH:COLOR 7,0
330 IF CH<1 OR CH>8 THEN BEEP:LOCATE 20,45:PRINT STRING$(35," "):COLOR 0,7:LOCATE 20,45:PRINT " ":COLOR 7,0:GOTO 320
340 ON CH GOTO 350,550,740,3870,4030,1730,3230,2610
350 CLS:LOCATE 1,1:PRINT STRING$(80,205):COLOR 15,0:LOCATE 1,15:PRINT "[ P R I N T E R   O P E R A T I O N S ]":COLOR 7,0:GOSUB 2520:GOTO 440
360 GOSUB 2520:COLOR 15,0:LOCATE 5,5:PRINT "A:..Select Printer":COLOR 7,0:GOTO 440
370 GOSUB 2520:COLOR 15,0:LOCATE 5,45:PRINT "B:..Deselect Printer":COLOR 7,0:GOTO 440
380 GOSUB 2520:COLOR 15,0:LOCATE 5,5:PRINT "1:..Enable Paper Out Sensor":COLOR 7,0:GOTO 440
390 GOSUB 2520:COLOR 15,0:LOCATE 5,45:PRINT "4:..Disable Paper Out Sensor":COLOR 7,0:GOTO 440
400 GOSUB 2520:COLOR 15,0:LOCATE 7,5:PRINT "2:..Turn Half Speed Mode On":COLOR 7,0:GOTO 440
410 GOSUB 2520:COLOR 15,0:LOCATE 7,45:PRINT "5:..Turn Half Speed Mode Off":COLOR 7,0:GOTO 440
420 GOSUB 2520:COLOR 15,0:LOCATE 9,5:PRINT "3:..Turn Auto Sheet Feed Mode On":COLOR 7,0:GOTO 440
430 GOSUB 2520:COLOR 15,0:LOCATE 9,45:PRINT "6:..Turn Auto Sheet Feed Mode Off":COLOR 7,0:GOTO 440
440 LOCATE 20,20:PRINT "Choose  < 1 - 7 >":COLOR 0,7:LOCATE 20,45:PRINT " ":LOCATE 20,45:INPUT "",A$:COLOR 7,0
450 IF A$="" THEN BEEP:GOTO 440
460 IF A$<"1" OR A$>"7" THEN BEEP:GOTO 440
470 IF LEN(A$)>1 THEN BEEP:LOCATE 20,45:PRINT STRING$(35," "):COLOR 0,7:LOCATE 20,45:PRINT " ":COLOR 7,0:GOTO 440
480 IF A$="1" THEN LPRINT CHR$(27);"9";CHR$(7):GOTO 380
490 IF A$="2" THEN LPRINT CHR$(27);"s";"1";CHR$(7);TEST$:GOTO 400
500 IF A$="3" THEN LPRINT CHR$(27);CHR$(&H19);"4";CHR$(7):GOTO 420
510 IF A$="4" THEN LPRINT CHR$(27);"8";CHR$(7):GOTO 390
520 IF A$="5" THEN LPRINT CHR$(27);"s";"0";CHR$(7);TEST$:GOTO 410
530 IF A$="6" THEN LPRINT CHR$(27);CHR$(&H19);"0";CHR$(7):GOTO 430
540 IF A$="7" THEN GOTO 220
550 GOSUB 2620
560 LOCATE 1,1:PRINT STRING$(80,205):COLOR 15,0:LOCATE 1,17:PRINT "[ O V E R A L L   P R I N T I N G   S T Y L E ]":COLOR 7,0
570 LOCATE 20,10:PRINT "Choose   < 1 = NLQ > or  < 2 = Draft > or < 3 > for Main Menu   ":LOCATE 21,41:COLOR 0,7:PRINT " ":LOCATE 21,41:INPUT "",CH1:COLOR 7,0
580 IF CH1<1 OR CH1>3 THEN BEEP:LOCATE 21,41:PRINT STRING$(39," "):GOTO 570
590 IF CH1=1 THEN 620
600 IF CH1=2 THEN 730
610 IF CH1=3 THEN 220  ELSE 570
620 GOSUB 2620
630 LOCATE 1,1:PRINT STRING$(80,205):COLOR 15,0:LOCATE 1,17:PRINT " O V E R A L L   P R I N T I N G   S T Y L E ":COLOR 7,0
640 LOCATE 4,40:COLOR 15,0:PRINT "NLQ":COLOR 7,0
650 LPRINT CHR$(27);"x";"1";CHR$(7)
660 CLS:LOCATE 5,5:PRINT "Select  Near Letter Quality Font                 < Roman >"
670 LOCATE 7,54:PRINT "< Sans Serif >
680 LOCATE 15,1:PRINT "Choose   < 1 = Roman > , < 2 = Sans Serif > ,or  < 3 > to return to Main Menu  ":COLOR 0,7:LOCATE 16,41:PRINT " ":LOCATE 16,41:INPUT "",CH33:COLOR 7,0
690 IF CH33>3 THEN BEEP:LOCATE 16,41:PRINT STRING$(39," "):GOTO 680
700 IF CH33=1 THEN LOCATE 7,54:PRINT "< Sans Serif >":COLOR 15,0:LOCATE 5,54:PRINT "< Roman >":COLOR 7,0:LPRINT CHR$(27);"k";"0";CHR$(7);TEST$:LPRINT:GOTO 680 ELSE GOTO 710
710 IF CH33=2 THEN LOCATE 5,54:PRINT "< Roman >":COLOR 15,0:LOCATE 7,54:PRINT "< Sans Serif >":COLOR 7,0:LPRINT CHR$(27);"k";"1";CHR$(7);TEST$:LPRINT:GOTO 680
720 IF CH33=3 THEN 220 ELSE 680
730 COLOR 15,0:LOCATE 4,46:PRINT "Draft":COLOR 7,0:LPRINT  CHR$(27);"x";"0";CHR$(7);TEST$:LPRINT:GOTO 570
740 CLS:
750 LOCATE 1,1:PRINT STRING$(80,205)
760 COLOR 15,0:LOCATE  1,20:PRINT "[ Word Processing ]":COLOR 7,0
770 LOCATE 5,10:PRINT "1..NLQ Justification":LOCATE 5,55:PRINT "< Select >"
780 LOCATE 7,10:PRINT "2..Set Intercharacter Space":LOCATE 7,55:PRINT "< 0  to 63 >"
790 LOCATE 9,10:PRINT "3..Return to Main Menu"
800 LOCATE 20,10:PRINT "Choose  < 1 >  ,  < 2 >  or < 3 >"
810 LOCATE 20,50:COLOR 0,7:PRINT " ":LOCATE 20,50:INPUT "",CH15:COLOR 7,0
820 IF CH15<1 OR CH15>3 THEN BEEP:LOCATE 20,50:PRINT STRING$(30," "):GOTO 810
830 ON CH15 GOTO 840,990,220
840 CLS:LOCATE 2,10:COLOR 15,0:PRINT "1..NLQ Justification":COLOR 7,0
850 GOSUB 1680
860 LOCATE 10,10:PRINT "Choose  < 1 > , < 2 > , < 3 > , < 4 > or < 5 >":LOCATE 10,60:COLOR 0,7:PRINT " ":COLOR 7,0
870 LOCATE 14,5:PRINT "The default setting is Left Justification. Full Justification is performed when"
880 LOCATE 16,1:PRINT "the printer buffer becomes full, or when one of the following is recieved :"
890 LOCATE 18,20:PRINT "Carriage Return":LOCATE 18,40:PRINT "Vertical Tab":LOCATE 19,20:PRINT "Line Feed":LOCATE 19,40:PRINT "Form Feed":LOCATE 21,5:PRINT "Horizontal Tabs are invalid except in Left Justification Mode."
900 LOCATE 22,5:PRINT "Justification can be used ONLY in NLQ Mode, not Draft."
910 LOCATE 11,1:PRINT STRING$(80,205)
920 COLOR 0,7:LOCATE 10,60:INPUT "",CH16:COLOR 7,0
930 IF CH16<1 OR CH16>5 THEN BEEP:LOCATE 10,60:PRINT STRING$(20," "):LOCATE 10,60:COLOR 0,7:PRINT " ":COLOR 7,0:GOTO 910
940 IF CH16=1 THEN LPRINT CHR$(27);"a";"0";CHR$(7);TEST$:LPRINT:GOSUB 1680:LOCATE 4,25:COLOR 15,0:PRINT "1. Select Left Justification":COLOR 7,0:GOTO 910 ELSE GOTO 950
950 IF CH16=2 THEN LPRINT CHR$(27);"a";"1";CHR$(7);TEST$:LPRINT:GOSUB 1680:LOCATE 5,25:COLOR 15,0:PRINT "2. Select Centering":COLOR 7,0:GOTO 910 ELSE GOTO 960
960 IF CH16=3 THEN LPRINT CHR$(27);"a";"2";CHR$(7);TEST$:LPRINT:GOSUB 1680:LOCATE 6,25:COLOR 15,0:PRINT "3. Select Right Justification":COLOR 7,0:GOTO 910 ELSE GOTO 970
970 IF CH16=4 THEN LPRINT CHR$(27);"a";"3";CHR$(7);TEST$:LPRINT:GOSUB 1680:LOCATE 7,25:COLOR 15,0:PRINT "4. Select Full Justification":COLOR 7,0:GOTO 910 ELSE GOTO 980
980 IF CH16=5 THEN GOTO 220
990 CLS:LOCATE 2,10:COLOR 15,0:PRINT "Set Intercharacter Space":COLOR 7,0:LOCATE 4,20:PRINT "Enter number from  1  to  63":LOCATE 5,17:PRINT "Enter  < 0 > to reset to default":GOSUB 1660:LOCATE 4,65:COLOR 0,7:PRINT "  ":LOCATE 4,65:INPUT "",V:COLOR 7,0
1000 IF V=1 THEN LPRINT CHR$(27);CHR$(32);CHR$(1);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1010
1010 IF V=2 THEN LPRINT CHR$(27);CHR$(32);CHR$(2);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1020
1020 IF V=3 THEN LPRINT CHR$(27);CHR$(32);CHR$(3);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1030
1030 IF V=4 THEN LPRINT CHR$(27);CHR$(32);CHR$(4);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1040
1040 IF V=5 THEN LPRINT CHR$(27);CHR$(32);CHR$(5);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1050
1050 IF V=6 THEN LPRINT CHR$(27);CHR$(32);CHR$(6);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1060
1060 IF V=7 THEN LPRINT CHR$(27);CHR$(32);CHR$(7);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1070
1070 IF V=8 THEN LPRINT CHR$(27);CHR$(32);CHR$(8);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1080
1080 IF V=9 THEN LPRINT CHR$(27);CHR$(32);CHR$(9);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1090
1090 IF V=10 THEN LPRINT CHR$(27);CHR$(32);CHR$(10);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1100
1100 IF V=11 THEN LPRINT CHR$(27);CHR$(32);CHR$(11);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1110
1110 IF V=12 THEN LPRINT CHR$(27);CHR$(32);CHR$(12);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1120
1120 IF V=13 THEN LPRINT CHR$(27);CHR$(32);CHR$(13);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1130
1130 IF V=14 THEN LPRINT CHR$(27);CHR$(32);CHR$(14);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1140
1140 IF V=15 THEN LPRINT CHR$(27);CHR$(32);CHR$(15);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1150
1150 IF V=16 THEN LPRINT CHR$(27);CHR$(32);CHR$(16);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1160
1160 IF V=17 THEN LPRINT CHR$(27);CHR$(32);CHR$(17);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1170
1170 IF V=18 THEN LPRINT CHR$(27);CHR$(32);CHR$(18);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1180
1180 IF V=19 THEN LPRINT CHR$(27);CHR$(32);CHR$(19);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1190
1190 IF V=20 THEN LPRINT CHR$(27);CHR$(32);CHR$(20);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1200
1200 IF V=21 THEN LPRINT CHR$(27);CHR$(32);CHR$(21);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1210
1210 IF V=22 THEN LPRINT CHR$(27);CHR$(32);CHR$(22);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1220
1220 IF V=23 THEN LPRINT CHR$(27);CHR$(32);CHR$(23);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1230
1230 IF V=24 THEN LPRINT CHR$(27);CHR$(32);CHR$(24);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1240
1240 IF V=25 THEN LPRINT CHR$(27);CHR$(32);CHR$(25);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1250
1250 IF V=26 THEN LPRINT CHR$(27);CHR$(32);CHR$(26);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1260
1260 IF V=27 THEN LPRINT CHR$(&H1B);CHR$(32);CHR$(27);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1270
1270 IF V=28 THEN LPRINT CHR$(27);CHR$(32);CHR$(28);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1280
1280 IF V=29 THEN LPRINT CHR$(27);CHR$(32);CHR$(29);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1290
1290 IF V=30 THEN LPRINT CHR$(27);CHR$(32);CHR$(30);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1300
1300 IF V=31 THEN LPRINT CHR$(27);CHR$(32);CHR$(31);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1310
1310 IF V=32 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(32);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1320
1320 IF V=33 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(33);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1330
1330 IF V=34 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(34);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1340
1340 IF V=35 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(35);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1350
1350 IF V=36 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(36);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1360
1360 IF V=37 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(37);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1370
1370 IF V=38 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(38);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1380
1380 IF V=39 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(39);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1390
1390 IF V=40 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(40);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1400
1400 IF V=41 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(41);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1410
1410 IF V=42 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(42);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1420
1420 IF V=43 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(43);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1430
1430 IF V=44 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(44);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1440
1440 IF V=45 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(45);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1450
1450 IF V=46 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(46);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1460
1460 IF V=47 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(47);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1470
1470 IF V=48 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(48);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1480
1480 IF V=49 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(49);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1490
1490 IF V=50 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(50);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1500
1500 IF V=51 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(51);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1510
1510 IF V=52 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(52);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1520
1520 IF V=53 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(53);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1530
1530 IF V=54 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(54);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1540
1540 IF V=55 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(55);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1550
1550 IF V=56 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(56);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1560
1560 IF V=57 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(57);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1570
1570 IF V=58 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(58);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1580
1580 IF V=59 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(59);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1590
1590 IF V=60 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(60);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1600
1600 IF V=61 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(61);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1610
1610 IF V=62 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(62);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1620
1620 IF V=63 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(63);CHR$(7);TEST$:LPRINT:GOTO 740 ELSE GOTO 1630
1630 IF V<0 OR V>63 THEN BEEP:GOTO 990 ELSE IF V=0 THEN LPRINT CHR$(27);CHR$(&H20);CHR$(0);CHR$(7);TEST$:LPRINT:GOTO 740
1640 REM
1650 LOCATE 20,20:INPUT "Press enter to return to menu ..";NVA$:CLS:GOTO 740
1660 LOCATE 6,1:PRINT STRING$(80,205):LOCATE 8,5:PRINT "This function sets the amount of space added to the right of each character":PRINT "in ADDITION to the space already allowed in the design of the character.
1670 PRINT "The number of units of space is equal to the number you enter, which should be":PRINT "from 1 to 63.  Each unit of space is equal to 1 / 120th of an inch.":RETURN
1680 LOCATE 4,25:PRINT"1. Select Left Justification":LOCATE 5,25:PRINT "2. Select Centering":LOCATE 6,25:PRINT "3. Select Right Justification":LOCATE 7,25:PRINT "4. Select Full Justification":LOCATE 8,25:PRINT "5. Return to Menu"
1690 RETURN
1700 STOP
1710 GOTO 340
1720 GOTO 340
1730 CLS
1740 LOCATE 1,1:PRINT STRING$(80,205):COLOR 15,0:LOCATE 1,10:PRINT " P R I N T   S I Z E   &   E N H A N C E M E N T ":COLOR 7,0
1750 GOSUB 2640
1760 LOCATE 23,10:PRINT "Choose  < 1 - 10 > or  <11> to Return to Main Menu":LOCATE 23,65:COLOR 0,7:PRINT "  ":LOCATE 23,65:INPUT "",CH:COLOR 7,0
1770 IF CH<1 OR CH>11 THEN BEEP:LOCATE 23,65:PRINT STRING$(15," "):GOTO 1760
1780 IF CH=1 THEN 1890
1790 IF CH=2 THEN 1980
1800 IF CH=3 THEN 2040
1810 IF CH=4 THEN 2100
1820 IF CH=5 THEN 2160
1830 IF CH=6 THEN 2220
1840 IF CH=7 THEN 2280
1850 IF CH=8 THEN 2340
1860 IF CH=9 THEN 2400
1870 IF CH=10 THEN 2460
1880 IF CH=11 THEN 220
1890 IF CH=1 THEN COLOR 15,0:LOCATE 3,5:PRINT "1...Select                       < Pica / Elite >":COLOR 7,0
1900 LOCATE 23,10:PRINT "Choose    < 1 = Pica >  < 2 = Elite >  <3 = Menu >  ":LOCATE 23,65:COLOR 0,7:PRINT "  ":LOCATE 23,65:INPUT "",CH4:COLOR 7,0
1910 IF CH4<1 OR CH4>3 THEN BEEP:LOCATE 23,65:PRINT STRING$(15," "):GOTO 1900
1920 IF CH4=1 THEN GOSUB 2640:LOCATE 3,40:COLOR 15,0:PRINT "Pica":COLOR 7,0:LPRINT CHR$(27);"P";CHR$(7);TEST$:LPRINT:GOTO 1900
1930 IF CH4=2 THEN GOSUB 2640:COLOR 15,0:LOCATE 3,47:PRINT "Elite":COLOR 7,0:LPRINT CHR$(27);"M";CHR$(7);TEST$:LPRINT:GOTO 1900
1940 REM proportional mode
1950 IF CH4=3 THEN GOTO 1750
1960 IF CH4<>1 OR CH4<>2 OR CH4<>3 THEN BEEP:GOTO 1900
1970 BEEP:GOTO 1760
1980 COLOR 15,0:LOCATE 5,5:PRINT "2...Select Proportional Mode     < ON / OFF >":COLOR 7,0
1990 LOCATE 23,10:PRINT " Choose    < 1 = ON >    < 2 = OFF >  or  < 3 = Menu >    ":LOCATE 23,65:COLOR 0,7:PRINT " ":LOCATE 23,65:INPUT "",CH5:COLOR 7,0
2000 IF CH5<1 OR CH5>3 THEN BEEP:LOCATE 23,65:PRINT STRING$(15," "):GOTO 1990
2010 IF CH5=1 THEN GOSUB 2640:LOCATE 5,40:COLOR 15,0:PRINT "ON":COLOR 7,0:LPRINT CHR$(27);"p";"1";CHR$(7);TEST$:LPRINT:GOTO 1990
2020 IF CH5=2 THEN GOSUB 2640:LOCATE 5,45:COLOR 15,0:PRINT "OFF":COLOR 7,0:LPRINT CHR$(27);"p";"0";CHR$(7);TEST$:LPRINT:GOTO 1990
2030 IF CH5=3 THEN GOTO 1740 ELSE GOTO 1990
2040 COLOR 15,0:LOCATE 7,5:PRINT "3...Select Condensed Mode        < ON / OFF >":COLOR 7,0
2050 LOCATE 23,10:PRINT " Choose    < 1 = ON >    < 2 = OFF >  or  < 3 = Menu >    ":LOCATE 23,65:COLOR 0,7:PRINT " ":LOCATE 23,65:INPUT "",CH6:COLOR 7,0
2060 IF CH6<1 OR CH6>3 THEN BEEP:LOCATE 23,65:PRINT STRING$(15," "):GOTO 2050
2070 IF CH6=1 THEN GOSUB 2640:LOCATE 7,40:COLOR 15,0:PRINT "ON":COLOR 7,0:LPRINT CHR$(15);CHR$(7);TEST$:LPRINT:GOTO 2050
2080 IF CH6=2 THEN GOSUB 2640:LOCATE 7,45:COLOR 15,0:PRINT "OFF":COLOR 7,0:LPRINT CHR$(18);CHR$(7);TEST$:LPRINT:GOTO 2050
2090 IF CH6=3 THEN GOTO 1740 ELSE GOTO 2050
2100 COLOR 15,0:LOCATE 9,5:PRINT "4...Select Double Wide Mode      < ON / OFF >":COLOR 7,0
2110 LOCATE 23,10:PRINT " Choose    < 1 = ON >    < 2 = OFF >  or  < 3 = Menu >    ":LOCATE 23,65:COLOR 0,7:PRINT " ":LOCATE 23,65:INPUT "",CH7:COLOR 7,0
2120 IF CH7<1 OR CH7>3 THEN BEEP:LOCATE 23,65:PRINT STRING$(15," "):GOTO 2110
2130 IF CH7=1 THEN GOSUB 2640:LOCATE 9,40:COLOR 15,0:PRINT "ON":COLOR 7,0:LPRINT CHR$(27);"W";"1";CHR$(7);TEST$:LPRINT:GOTO 2110
2140 IF CH7=2 THEN GOSUB 2640:LOCATE 9,45:COLOR 15,0:PRINT "OFF":COLOR 7,0:LPRINT CHR$(27);"W";"0";CHR$(7);TEST$:LPRINT:GOTO 2110
2150 IF CH7=3 THEN GOTO 1740 ELSE GOTO 2110
2160 COLOR 15,0:LOCATE 11,5:PRINT "5...Select Double High Mode      < ON / OFF >":COLOR 7,0
2170 LOCATE 23,10:PRINT " Choose    < 1 = ON >    < 2 = OFF >  or  < 3 = Menu >    ":LOCATE 23,65:COLOR 0,7:PRINT " ":LOCATE 23,65:INPUT "",CH8:COLOR 7,0
2180 IF CH8<1 OR CH8>3 THEN BEEP:LOCATE 23,65:PRINT STRING$(15," "):GOTO 2170
2190 IF CH8=1 THEN GOSUB 2640:LOCATE 11,40:COLOR 15,0:PRINT "ON":COLOR 7,0:LPRINT CHR$(27);"w";"1";CHR$(7);TEST$:LPRINT:GOTO 2170
2200 IF CH8=2 THEN GOSUB 2640:LOCATE 11,45:COLOR 15,0:PRINT "OFF":COLOR 7,0:LPRINT CHR$(27);"w";"0";CHR$(7);TEST$:LPRINT:GOTO 2170
2210 IF CH8=3 THEN GOTO 1740 ELSE GOTO 2170
2220 COLOR 15,0:LOCATE 13,5:PRINT "6...Select Emphasized Mode       < ON / OFF >":COLOR 7,0
2230 LOCATE 23,10:PRINT " Choose    < 1 = ON >    < 2 = OFF >  or  < 3 = Menu >    ":LOCATE 23,65:COLOR 0,7:PRINT " ":LOCATE 23,65:INPUT "",CH9:COLOR 7,0
2240 IF CH9<1 OR CH9>3 THEN BEEP:LOCATE 23,65:PRINT STRING$(15," "):GOTO 2230
2250 IF CH9=1 THEN GOSUB 2640:LOCATE 13,40:COLOR 15,0:PRINT "ON":COLOR 7,0:LPRINT CHR$(27);"E";CHR$(7);TEST$:LPRINT:GOTO 2230
2260 IF CH9=2 THEN GOSUB 2640:LOCATE 13,45:COLOR 15,0:PRINT "OFF":COLOR 7,0:LPRINT CHR$(27);"F";CHR$(7);TEST$:LPRINT:GOTO 2230
2270 IF CH9=3 THEN GOTO 1740 ELSE GOTO 2230
2280 COLOR 15,0:LOCATE 15,5:PRINT "7...Select Double Strike Mode    < ON / OFF >":COLOR 7,0
2290 LOCATE 23,10:PRINT " Choose    < 1 = ON >    < 2 = OFF >  or  < 3 = Menu >    ":LOCATE 23,65:COLOR 0,7:PRINT " ":LOCATE 23,65:INPUT "",CH10:COLOR 7,0
2300 IF CH10<1 OR CH10>3 THEN BEEP:LOCATE 23,65:PRINT STRING$(15," "):GOTO 2290
2310 IF CH10=1 THEN GOSUB 2640:LOCATE 15,40:COLOR 15,0:PRINT "ON":COLOR 7,0:LPRINT CHR$(27);"G";CHR$(7);TEST$:LPRINT:GOTO 2290
2320 IF CH10=2 THEN GOSUB 2640:LOCATE 15,45:COLOR 15,0:PRINT "OFF":COLOR 7,0:LPRINT CHR$(27);"H";CHR$(7);TEST$:LPRINT:GOTO 2290
2330 IF CH10=3 THEN GOTO 1740 ELSE GOTO 2290
2340 COLOR 15,0:LOCATE 17,5:PRINT "8...Select Superscript Mode      < ON / OFF >":COLOR 7,0
2350 LOCATE 23,10:PRINT " Choose    < 1 = ON >    < 2 = OFF >  or  < 3 = Menu >    ":LOCATE 23,65:COLOR 0,7:PRINT " ":LOCATE 23,65:INPUT "",CH11:COLOR 7,0
2360 IF CH11<1 OR CH11>3 THEN BEEP:LOCATE 23,65:PRINT STRING$(15," "):GOTO 2350
2370 IF CH11=1 THEN GOSUB 2640:LOCATE 17,40:COLOR 15,0:PRINT "ON":COLOR 7,0:LPRINT CHR$(27);"S";"0";CHR$(7);TEST$:LPRINT:GOTO 2350
2380 IF CH11=2 THEN GOSUB 2640:LOCATE 17,45:COLOR 15,0:PRINT "OFF":COLOR 7,0:LPRINT CHR$(27);"T";CHR$(7);TEST$:LPRINT:GOTO 2350
2390 IF CH11=3 THEN GOTO 1740 ELSE GOTO 2350
2400 COLOR 15,0:LOCATE 19,5:PRINT "9...Select Subscript Mode        < ON / OFF >":COLOR 7,0
2410 LOCATE 23,10:PRINT " Choose    < 1 = ON >    < 2 = OFF >  or  < 3 = Menu >    ":LOCATE 23,65:COLOR 0,7:PRINT " ":LOCATE 23,65:INPUT "",CH12:COLOR 7,0
2420 IF CH12<1 OR CH12>3 THEN BEEP:LOCATE 23,65:PRINT STRING$(15," "):GOTO 2410
2430 IF CH12=1 THEN GOSUB 2640:LOCATE 19,40:COLOR 15,0:PRINT "ON":COLOR 7,0:LPRINT CHR$(27);"S";"1";CHR$(7);TEST$:LPRINT:GOTO 2410
2440 IF CH12=2 THEN GOSUB 2640:LOCATE 19,45:COLOR 15,0:PRINT "OFF":COLOR 7,0:LPRINT CHR$(27);"T";CHR$(7);TEST$:LPRINT:GOTO 2410
2450 IF CH12=3 THEN GOTO 1740 ELSE GOTO 2410
2460 COLOR 15,0:LOCATE 21,5:PRINT "10..Select Underline Mode        < ON / OFF >":COLOR 7,0
2470 LOCATE 23,10:PRINT " Choose    < 1 = ON >    < 2 = OFF >  or  < 3 = Menu >    ":LOCATE 23,65:COLOR 0,7:PRINT " ":LOCATE 23,65:INPUT "",CH13:COLOR 7,0
2480 IF CH13<1 OR CH13>3 THEN BEEP:LOCATE 23,65:PRINT STRING$(15," "):GOTO 2470
2490 IF CH13=1 THEN GOSUB 2640:LOCATE 21,40:COLOR 15,0:PRINT "ON":COLOR 7,0:LPRINT CHR$(27);"-";"1";CHR$(7);TEST$:LPRINT:GOTO 2470
2500 IF CH13=2 THEN GOSUB 2640:LOCATE 21,45:COLOR 15,0:PRINT "OFF":COLOR 7,0:LPRINT CHR$(27);"-";"0";CHR$(7);TEST$:LPRINT:GOTO 2470
2510 IF CH13=3 THEN GOTO 1740 ELSE GOTO 2470
2520 REM
2530 LOCATE 5,5:PRINT "1:..Enable Paper Out Sensor":LOCATE 5,45:PRINT "4:..Disable Paper Out Sensor"
2540 LOCATE 7,5:PRINT "2:..Turn Half Speed Mode On":LOCATE 7,45:PRINT "5:..Turn Half Speed Mode Off"
2550 LOCATE 9,5:PRINT "3:..Turn Auto Sheet Feed Mode On":LOCATE 9,45:PRINT "6:..Turn Auto Sheet Feed Mode Off"
2560 LOCATE 13,5:PRINT "7:..Return to Main Menu"
2570 RETURN
2580 LOCATE 5,34:PRINT"O"
2590 LOCATE 6,34:PRINT"1"
2600 LOCATE 7,34:PRINT"CANCEL":RETURN
2610 CLS:END
2620 CLS:LOCATE 4,5:PRINT "1...Select                       < NLQ / Draft >"
2630 RETURN
2640 LOCATE 3,5:PRINT "1...Select                       < Pica / Elite >"
2650 LOCATE 5,5:PRINT "2...Select Proportional Mode     < ON / OFF >"
2660 LOCATE 7,5:PRINT "3...Select Condensed Mode        < ON / OFF >"
2670 LOCATE 9,5:PRINT "4...Select Double Wide Mode      < ON / OFF >"
2680 LOCATE 11,5:PRINT "5...Select Double High Mode      < ON / OFF >"
2690 LOCATE 13,5:PRINT "6...Select Emphasized Mode       < ON / OFF >"
2700 LOCATE 15,5:PRINT "7...Select Double Strike Mode    < ON / OFF >"
2710 LOCATE 17,5:PRINT "8...Select Superscript Mode      < ON / OFF >"
2720 LOCATE 19,5:PRINT "9...Select Subscript Mode        < ON / OFF >"
2730 LOCATE 21,5:PRINT "10..Select Underline Mode        < ON / OFF >"
2740 RETURN
2750 CLS:LOCATE 10,10:PRINT "Serial Number is : ",SER$
2760 LOCATE 12,10:PRINT "Version Number is: ",VN$
2770 LOCATE 14,10:PRINT "Version Date is : ",,VDT$
2780 LOCATE 20,10:INPUT "Press   <ENTER>  to return to program ..",ABC$
2790 CLS:GOTO 100
2800 CLS:COLOR 0,7
2810 LOCATE 1,2:PRINT STRING$(78,205)
2820 LOCATE 1,1:PRINT CHR$(201):LOCATE 1,80:PRINT CHR$(187)
2830 FOR I= 2 TO 21:LOCATE I,1:PRINT CHR$(186):LOCATE I,80:PRINT CHR$(186):NEXT I
2840 LOCATE 22,1:PRINT CHR$(200):LOCATE 22,80:PRINT CHR$(188)
2850 LOCATE 22,2:PRINT STRING$(78,205)
2860 COLOR 7,0
2870 LOCATE 3,30:COLOR 25,0:PRINT "W A R N I N G ! !":COLOR 7,0
2880 LOCATE 5,23:COLOR 0,7:PRINT "                                    "
2890 LOCATE 5,25:PRINT "MAKE SURE YOUR PRINTER IS ON ! !":COLOR 7,0
2900 LOCATE 8,5:PRINT "This program was written by, and is the Sole Property of Robin A. Peak"
2910 LOCATE 9,5:PRINT "and PEAK ENTERPRISES, and is distributed under the User Supported Software"
2920 LOCATE 10,5:PRINT "Philosophy.  If you like this program, and find it suits your needs, then "
2930 LOCATE 11,5:PRINT "send a contribution of $25.00 to Peak Enterprises. For this contribution,"
2940 LOCATE 12,5:PRINT "you will be sent a registered copy of this program, and will be entitled to"
2950 LOCATE 13,5:PRINT "recieve telephone support if needed, notice of future updates, and a "
2960 LOCATE 14,5:PRINT "substantial discount on updates.  This program may be freely copied and"
2970 LOCATE 15,5:PRINT "shared as long as this notice is not altered nor removed and that"
2980 LOCATE 16,5:PRINT "no charge other than for media  ($10.00 or less) be made for such copy."
2990 LOCATE 17,10:PRINT "If you are not registered, do not bother to call me for support as all"
3000 LOCATE 18,5:PRINT "you will get is a TANSTAAFL lecture.(There Ain't No Such Thing As A  Free"
3010 LOCATE 19,5:PRINT "Lunch --- R.A.Heinlein) There sure isn't any free software support."
3020 LOCATE 21,25:INPUT "Press  <ENTER>  to continue ..",CB$
3030 CLS:COLOR 0,7
3040 LOCATE 1,2:PRINT STRING$(78,205)
3050 LOCATE 1,1:PRINT CHR$(201):LOCATE 1,80:PRINT CHR$(187)
3060 FOR I= 2 TO 21:LOCATE I,1:PRINT CHR$(186):LOCATE I,80:PRINT CHR$(186):NEXT I
3070 LOCATE 22,1:PRINT CHR$(200):LOCATE 22,80:PRINT CHR$(188)
3080 LOCATE 22,2:PRINT STRING$(78,205)
3090 COLOR 7,0
3100 LOCATE 4,10:PRINT "This program may not be altered in any way,shape or form, and all"
3110 LOCATE 5,5:PRINT "rights remain the sole property of Robin A. Peak and PEAK ENTERPRISES."
3120 LOCATE 6,10:PRINT "Your contribution helps support the User supported Software concept,"
3130 LOCATE 7,5:PRINT "and helps keep the cost of quality software affordable. There is a lot "
3140 LOCATE 8,5:PRINT "of time and effort involved in writing software.  Support this concept."
3150 LOCATE 10,10:PRINT "Send your contribution to:"
3160 LOCATE 12,20:PRINT "Robin Peak"
3170 LOCATE 13,20:PRINT "Peak Enterprises"
3180 LOCATE 14,20:PRINT "P.O.Box 120"
3190 LOCATE 15,20:PRINT "Hadlock, Wa. 98339"
3200 LOCATE 20,25:INPUT "Press Enter to go to program ..",BC$
3210 CLS
3220 RETURN
3230 CLS:GOSUB 3450
3240 LOCATE 15,20:PRINT "Choose  < 1 > , < 2 > , < 3 > or < 4 >":LOCATE 15,60:COLOR 0,7:PRINT " ":LOCATE 15,60:INPUT "",CH17:COLOR 7,0
3250 IF CH17<1 OR CH17>4 THEN BEEP:LOCATE 15,60:PRINT STRING$(20," "):GOTO 3240
3260 ON CH17 GOTO 3270,3340,3420,3860
3270 IF CH17=1 THEN LOCATE 4,10:COLOR 15,0:PRINT "1. Select Epson Character Graphics":LOCATE 4,50:PRINT "< ON / OFF >":COLOR 7,0:LOCATE 15,20:PRINT STRING$(50," ")
3280 LOCATE 15,20:PRINT "Choose:   < 1 = ON > , < 2 = OFF > , < 3 = Menu >"
3290 LOCATE 15,70:COLOR 0,7:PRINT " ":LOCATE 15,70:INPUT "",CH18:COLOR 7,0
3300 IF CH18<1 OR CH18>3 THEN BEEP:LOCATE 15,70:PRINT STRING$(10," "):GOTO 3290
3310 IF CH18=1 THEN LPRINT CHR$(27);"t";"1";CHR$(7);TEST$:LPRINT:COLOR 7,0:GOSUB 3450:COLOR 15,0:LOCATE 4,52:PRINT "ON":COLOR 7,0:LOCATE 15,20:PRINT STRING$(55," "):GOTO 3280
3320 IF CH18=2 THEN LPRINT CHR$(27);"t";"0";CHR$(7);TEST$:LPRINT:COLOR 7,0:GOSUB 3450:COLOR 15,0:LOCATE 4,57:PRINT "OFF":COLOR 7,0:LOCATE 15,20:PRINT STRING$(55," "):GOTO 3280
3330 IF CH18=3 THEN GOTO 3230
3340 IF CH17=2 THEN LOCATE 6,10:COLOR 15,0:PRINT "2. Select Italics":LOCATE 6,50:PRINT "< ON / OFF >":COLOR 7,0
3350 LOCATE 15,20:PRINT "Choose:   < 1 = ON > , < 2 = OFF > , < 3 = Menu >"
3360 LOCATE 15,70:COLOR 0,7:PRINT " ":LOCATE 15,70:INPUT "",CH19:COLOR 7,0
3370 IF CH19<1 OR CH19>3 THEN BEEP:LOCATE 15,70:PRINT STRING$(10," "):GOTO 3360
3380 IF CH19=1 THEN LPRINT CHR$(27);"4";CHR$(7);TEST$:LPRINT:COLOR 7,0:GOSUB 3450:COLOR 15,0:LOCATE 6,52:PRINT "ON":COLOR 7,0:LOCATE 15,20:PRINT STRING$(55," "):GOTO 3350
3390 IF CH19=2 THEN LPRINT CHR$(27);"5";CHR$(7);TEST$:LPRINT:COLOR 7,0:GOSUB 3450:COLOR 15,0:LOCATE 6,57:PRINT "OFF":COLOR 7,0:LOCATE 15,20:PRINT STRING$(55," "):GOTO 3350
3400 IF CH19=3 THEN GOTO 3230
3420 IF CH17=3 THEN GOTO 3520
3430 IF CH17=4 THEN GOTO 220
3450 LOCATE 1,1:PRINT STRING$(80,205):COLOR 15,0
3460 LOCATE 1,20:PRINT "[ C H A R A C T E  R   S E T S ]":COLOR 7,0
3470 LOCATE 4,10:PRINT "1. Select Epson Character Graphics":LOCATE 4,50:PRINT "< ON / OFF >"
3480 LOCATE 6,10:PRINT "2. Select Italics":LOCATE 6,50:PRINT "< ON / OFF >"
3490 LOCATE 8,10:PRINT "3. Select International Character Set"
3500 LOCATE 10,10:PRINT "4. Return to Main Menu"
3510 RETURN
3520 CLS:
3530 LOCATE 1,1:PRINT STRING$(80,205):COLOR 15,0:LOCATE 1,20:PRINT "[ International Character Sets ]":COLOR 7,0
3540 LOCATE 3,4:PRINT "United States .....":LOCATE 3,25:PRINT "< 1 >":LOCATE 3,50:PRINT "Japan          .....":LOCATE 3,74:PRINT "< 8 >"
3550 LOCATE 5,4:PRINT "France        .....":LOCATE 5,25:PRINT "< 2 >":LOCATE 5,50:PRINT "Norway         .....":LOCATE 5,74:PRINT "< 9 >"
3560 LOCATE 7,4:PRINT "Germany       .....":LOCATE 7,25:PRINT "< 3 >":LOCATE 7,50:PRINT "Latin America  .....":LOCATE 7,74:PRINT "< 10 >"
3570 LOCATE 9,4:PRINT "United Kingdom ....":LOCATE 9,25:PRINT "< 4 >":LOCATE 9,50:PRINT "Italy          .....":LOCATE 9,74:PRINT "< 11 >"
3580 LOCATE 11,4:PRINT"Denmark I     .....":LOCATE 11,25:PRINT "< 5 >":LOCATE 11,50:PRINT "Spain I        .....":LOCATE 11,74:PRINT "< 12 >"
3590 LOCATE 13,4:PRINT"Denmark II    .....":LOCATE 13,25:PRINT "< 6 >":LOCATE 13,50:PRINT "Spain II       .....":LOCATE 13,74:PRINT "< 13 >"
3600 LOCATE 15,4:PRINT"Sweden        .....":LOCATE 15,25:PRINT "< 7 >":LOCATE 15,50:PRINT "Return to Menu ":LOCATE 15,74:PRINT "< 14 >"
3610 LOCATE 21,15:PRINT "Choose    <  1  to  14 >":LOCATE 21,45:COLOR 0,7:PRINT "  ":LOCATE 21,45:INPUT "",CH20:COLOR 7,0
3620 GOSUB 3780
3630 IF CH20<1 OR CH20>14 THEN BEEP:LOCATE 21,45:PRINT STRING$(35," "):GOTO 3610
3640 IF CH20=1 THEN LPRINT CHR$(27);"R";CHR$(&H0);CHR$(7);TEST$;"    U.S.A":LPRINT:COLOR 15,0:LOCATE 3,27:PRINT "1":COLOR 7,0:GOTO 3610
3650 IF CH20=2 THEN LPRINT CHR$(27);"R";CHR$(&H1);CHR$(7);TEST$;"    France":LPRINT:COLOR 15,0:LOCATE 5,27:PRINT "2":COLOR 7,0:GOTO 3610
3660 IF CH20=3 THEN LPRINT CHR$(27);"R";CHR$(&H2);CHR$(7);TEST$;"    Germany":LPRINT:COLOR 15,0:LOCATE 7,27:PRINT "3":COLOR 7,0:GOTO 3610
3670 IF CH20=4 THEN LPRINT CHR$(27);"R";CHR$(&H3);CHR$(7);TEST$;"    United Kingdom":LPRINT:COLOR 15,0:LOCATE 9,27:PRINT "4":COLOR 7,0:GOTO 3610
3680 IF CH20=5 THEN LPRINT CHR$(27);"R";CHR$(&H4);CHR$(7);TEST$;"    Denmark Set I":LPRINT:COLOR 15,0:LOCATE 11,27:PRINT "5":COLOR 7,0:GOTO 3610
3690 IF CH20=6 THEN LPRINT CHR$(27);"R";CHR$(&HA);CHR$(7);TEST$;"    Denmark Set II":LPRINT:COLOR 15,0:LOCATE 13,27:PRINT "6":COLOR 7,0:GOTO 3610
3700 IF CH20=7 THEN LPRINT CHR$(27);"R";CHR$(&H5);CHR$(7);TEST$;"    Sweden":LPRINT:COLOR 15,0:LOCATE 15,27:PRINT "7":COLOR 7,0:GOTO 3610
3710 IF CH20=8 THEN LPRINT CHR$(27);"R";CHR$(&H8);CHR$(7);TEST$;"    Japan":LPRINT:COLOR 15,0:LOCATE 3,76:PRINT "8":COLOR 7,0:GOTO 3610
3720 IF CH20=9 THEN LPRINT CHR$(27);"R";CHR$(&H9);CHR$(7);TEST$;"    Norway":LPRINT:COLOR 15,0:LOCATE 5,76:PRINT "9":COLOR 7,0:GOTO 3610
3730 IF CH20=10 THEN LPRINT CHR$(27);"R";CHR$(&HC);CHR$(7);TEST$;"    Latin America":LPRINT:COLOR 15,0:LOCATE 7,76:PRINT "10":COLOR 7,0:GOTO 3610
3740 IF CH20=11 THEN LPRINT CHR$(27);"R";CHR$(&H6);CHR$(7);TEST$;"    Italy":LPRINT:COLOR 15,0:LOCATE 9,76:PRINT "11":COLOR 7,0:GOTO 3610
3750 IF CH20=12 THEN LPRINT CHR$(27);"R";CHR$(&H7);CHR$(7);TEST$;"    Spain Set I":LPRINT:COLOR 15,0:LOCATE 11,76:PRINT "12":COLOR 7,0:GOTO 3610
3760 IF CH20=13 THEN LPRINT CHR$(27);"R";CHR$(&HB);CHR$(7);TEST$;"    Spain Set II":LPRINT:COLOR 15,0:LOCATE 13,76:PRINT "13":COLOR 7,0:GOTO 3610
3770 IF CH20=14 THEN GOTO 3230
3780 LOCATE 3,27:PRINT "1":LOCATE 3,76:PRINT "8"
3790 LOCATE 5,27:PRINT "2":LOCATE 5,76:PRINT "9"
3800 LOCATE 7,27:PRINT "3":LOCATE 7,76:PRINT "10"
3810 LOCATE 9,27:PRINT "4":LOCATE 9,76:PRINT "11"
3820 LOCATE 11,27:PRINT "5":LOCATE 11,76:PRINT "12"
3830 LOCATE 13,27:PRINT "6":LOCATE 13,76:PRINT "13"
3840 LOCATE 15,27:PRINT "7":LOCATE 15,76:PRINT "14"
3850 RETURN
3860 GOTO 220
3870 KEY OFF
3880 CLS
3890 GOSUB 3930
3900 LOCATE 21,20:PRINT "Choose   < 1  to  5 >":LOCATE 21,45:COLOR 0,7:PRINT " ":LOCATE 21,45:INPUT "",CH22:COLOR 7,0
3910 IF CH22<1 OR CH22>5 THEN BEEP:LOCATE 21,45:PRINT STRING$(35," "):GOTO 3900
3920 ON CH22 GOTO 3990,4000,4010,4020,220
3930 LOCATE 1,1:PRINT STRING$(80,205):LOCATE 1,20:COLOR 15,0:PRINT "[ V E R T I C A L   M O T I O N ]":COLOR 7,0
3940 LOCATE 3,5:PRINT "1. Send Form Feed to Printer":LOCATE 3,50:PRINT "Advance paper to top of form"
3950 LOCATE 5,5:PRINT "2. Select 1/8 Inch Line Spacing":LOCATE 5,50:PRINT "1/8 inches between Lines"
3960 LOCATE 7,5:PRINT "3. Select 7/72 Inch Line Spacing":LOCATE 7,50:PRINT "7/72 inches between Lines"
3970 LOCATE 9,5:PRINT "4. Select 1/6 Inch Line Spacing":LOCATE 9,50:PRINT "1/6 inches between Lines"
3975 LOCATE 10,50:PRINT "(1/6 is the default)"
3980 LOCATE 11,5:PRINT "5. Return to Main Menu":RETURN
3990 LPRINT CHR$(12);CHR$(7):GOTO 3900
4000 LPRINT CHR$(&H1B);CHR$(&H30);CHR$(&H7);TEST$:LPRINT TEST$:GOTO 3900
4010 LPRINT CHR$(&H1B);CHR$(&H31);CHR$(&H7);TEST$:LPRINT TEST$:GOTO 3900
4020 LPRINT CHR$(&H1B);CHR$(&H32);CHR$(&H7);TEST$:LPRINT TEST$:GOTO 3900
4030 TEST$="ABCDEFGHIJKLMNOPQRSTUVWXYZ  abcdefghijklmnopqrstuvwxyz  0123456789"
4040 COLOR 7,0:CLS
4050 LOCATE 1,1:PRINT STRING$(80,205):LOCATE 1,20:COLOR 15!:PRINT "[ Horizontal Motion ]":COLOR 7,0
4060 LOCATE 3,5:PRINT "1. Set the Left Margin"
4070 LOCATE 5,5:PRINT "2. Set the Right Margin"
4080 LOCATE 7,5:PRINT "3. Return to Main Menu"
4090 LOCATE 10,20:PRINT "Choose  < 1 > , < 2 > or < 3 >":LOCATE 10,55:COLOR 0,7:PRINT " ":LOCATE 10,55:INPUT "",CH26:COLOR 7,0
4100 IF CH26<1 OR CH26>3  THEN LOCATE 10,55:PRINT STRING$(25," "):LOCATE 10,55:COLOR 0,7:PRINT " ":COLOR 7,0:BEEP:GOTO 4090
4110 ON CH26 GOTO 4120,4390,220
4120 CLS:LOCATE 1,1:PRINT STRING$(80,205):LOCATE 1,20:COLOR 15,0:PRINT "[ Set Left Margin ]":COLOR 7,0
4130 LOCATE 3,5:PRINT "This function sets the left margin. The margin will equal one column for each":PRINT "number you enter. For example, if you enter 20, the left margin will be set at"
4140 PRINT "20 columns from the left edge of the paper. This will clear previous tab":PRINT "settings. A maximum of 20 will be allowed.":PRINT :PRINT
4150 PRINT STRING$(80,205)
4160 LOCATE 12,20:PRINT "Enter Margin Number:":LOCATE 12,45:COLOR 0,7:PRINT "  ":LOCATE 12,45:INPUT "",CH27:COLOR 7,0
4170 IF CH27<1 OR CH27>20 THEN BEEP:LOCATE 12,45:PRINT STRING$(35," "):GOTO 4160
4180 IF CH27=1 THEN LPRINT CHR$(&H1B);CHR$(&H6C);CHR$(1);CHR$(7);TEST$:LPRINT:GOTO 4030
4190 IF CH27=2 THEN LPRINT CHR$(&H1B);CHR$(&H6C);CHR$(2);CHR$(7);TEST$:LPRINT:GOTO 4030
4200 IF CH27=3 THEN LPRINT CHR$(&H1B);CHR$(&H6C);CHR$(3);CHR$(7);TEST$:LPRINT:GOTO 4030
4210 IF CH27=4 THEN LPRINT CHR$(&H1B);CHR$(&H6C);CHR$(4);CHR$(7);TEST$:LPRINT:GOTO 4030
4220 IF CH27=5 THEN LPRINT CHR$(&H1B);CHR$(&H6C);CHR$(5);CHR$(7);TEST$:LPRINT:GOTO 4030
4230 IF CH27=6 THEN LPRINT CHR$(&H1B);CHR$(&H6C);CHR$(6);CHR$(7);TEST$:LPRINT:GOTO 4030
4240 IF CH27=7 THEN LPRINT CHR$(&H1B);CHR$(&H6C);CHR$(7);CHR$(7);TEST$:LPRINT:GOTO 4030
4250 IF CH27=8 THEN LPRINT CHR$(&H1B);CHR$(&H6C);CHR$(8);CHR$(7);TEST$:LPRINT:GOTO 4030
4260 IF CH27=9 THEN LPRINT CHR$(&H1B);CHR$(&H6C);CHR$(9);CHR$(7);TEST$:LPRINT:GOTO 4030
4270 IF CH27=10 THEN LPRINT CHR$(&H1B);CHR$(&H6C);CHR$(10);CHR$(7);TEST$:LPRINT:GOTO 4030
4280 IF CH27=11 THEN LPRINT CHR$(&H1B);CHR$(&H6C);CHR$(11);CHR$(7);TEST$:LPRINT:GOTO 4030
4290 IF CH27=12 THEN LPRINT CHR$(&H1B);CHR$(&H6C);CHR$(12);CHR$(7);TEST$:LPRINT:GOTO 4030
4300 IF CH27=13 THEN LPRINT CHR$(&H1B);CHR$(&H6C);CHR$(13);CHR$(7);TEST$:LPRINT:GOTO 4030
4310 IF CH27=14 THEN LPRINT CHR$(&H1B);CHR$(&H6C);CHR$(14);CHR$(7);TEST$:LPRINT:GOTO 4030
4320 IF CH27=15 THEN LPRINT CHR$(&H1B);CHR$(&H6C);CHR$(15);CHR$(7);TEST$:LPRINT:GOTO 4030
4330 IF CH27=16 THEN LPRINT CHR$(&H1B);CHR$(&H6C);CHR$(16);CHR$(7);TEST$:LPRINT:GOTO 4030
4340 IF CH27=17 THEN LPRINT CHR$(&H1B);CHR$(&H6C);CHR$(17);CHR$(7);TEST$:LPRINT:GOTO 4030
4350 IF CH27=18 THEN LPRINT CHR$(&H1B);CHR$(&H6C);CHR$(18);CHR$(7);TEST$:LPRINT:GOTO 4030
4360 IF CH27=19 THEN LPRINT CHR$(&H1B);CHR$(&H6C);CHR$(19);CHR$(7);TEST$:LPRINT:GOTO 4030
4370 IF CH27=20 THEN LPRINT CHR$(&H1B);CHR$(&H6C);CHR$(20);CHR$(7);TEST$:LPRINT:GOTO 4030
4380 IF CH27<1 OR CH27>20 THEN BEEP:GOTO 4150
4390 CLS:LOCATE 1,1:PRINT STRING$(80,205):LOCATE 1,20:COLOR 15,0:PRINT "[ Set Right Margin ]":COLOR 7,0
4400 LOCATE 3,5:PRINT "This function sets the right margin. The margin will equal one column for each":PRINT "number you enter. For example, if you enter 20, the right margin will be set at"
4410 PRINT "20 columns from the right edge of the paper. This will clear previous tab":PRINT "settings. A maximum of 20 will be allowed.":PRINT :PRINT
4420 PRINT STRING$(80,205)
4430 LOCATE 12,20:PRINT "Enter Margin Number:":LOCATE 12,45:COLOR 0,7:PRINT "  ":LOCATE 12,45:INPUT "",CH28:COLOR 7,0
4440 IF CH28<1 OR CH28>20 THEN BEEP:LOCATE 12,45:PRINT STRING$(35," "):GOTO 4430
4450 IF CH28=1 THEN LPRINT CHR$(&H1B);CHR$(&H51);CHR$(79);CHR$(7);TEST$:LPRINT:GOTO 4030
4460 IF CH28=2 THEN LPRINT CHR$(&H1B);CHR$(&H51);CHR$(78);CHR$(7);TEST$:LPRINT:GOTO 4030
4470 IF CH28=3 THEN LPRINT CHR$(&H1B);CHR$(&H51);CHR$(77);CHR$(7);TEST$:LPRINT:GOTO 4030
4480 IF CH28=4 THEN LPRINT CHR$(&H1B);CHR$(&H51);CHR$(76);CHR$(7);TEST$:LPRINT:GOTO 4030
4490 IF CH28=5 THEN LPRINT CHR$(&H1B);CHR$(&H51);CHR$(75);CHR$(7);TEST$:LPRINT:GOTO 4030
4500 IF CH28=6 THEN LPRINT CHR$(&H1B);CHR$(&H51);CHR$(74);CHR$(7);TEST$:LPRINT:GOTO 4030
4510 IF CH28=7 THEN LPRINT CHR$(&H1B);CHR$(&H51);CHR$(73);CHR$(7);TEST$:LPRINT:GOTO 4030
4520 IF CH28=8 THEN LPRINT CHR$(&H1B);CHR$(&H51);CHR$(72);CHR$(7);TEST$:LPRINT:GOTO 4030
4530 IF CH28=9 THEN LPRINT CHR$(&H1B);CHR$(&H51);CHR$(71);CHR$(7);TEST$:LPRINT:GOTO 4030
4540 IF CH28=10 THEN LPRINT CHR$(&H1B);CHR$(&H51);CHR$(70);CHR$(7);TEST$:LPRINT:GOTO 4030
4550 IF CH28=11 THEN LPRINT CHR$(&H1B);CHR$(&H51);CHR$(69);CHR$(7);TEST$:LPRINT:GOTO 4030
4560 IF CH28=12 THEN LPRINT CHR$(&H1B);CHR$(&H51);CHR$(68);CHR$(7);TEST$:LPRINT:GOTO 4030
4570 IF CH28=13 THEN LPRINT CHR$(&H1B);CHR$(&H51);CHR$(67);CHR$(7);TEST$:LPRINT:GOTO 4030
4580 IF CH28=14 THEN LPRINT CHR$(&H1B);CHR$(&H51);CHR$(66);CHR$(7);TEST$:LPRINT:GOTO 4030
4590 IF CH28=15 THEN LPRINT CHR$(&H1B);CHR$(&H51);CHR$(65);CHR$(7);TEST$:LPRINT:GOTO 4030
4600 IF CH28=16 THEN LPRINT CHR$(&H1B);CHR$(&H51);CHR$(64);CHR$(7);TEST$:LPRINT:GOTO 4030
4610 IF CH28=17 THEN LPRINT CHR$(&H1B);CHR$(&H51);CHR$(63);CHR$(7);TEST$:LPRINT:GOTO 4030
4620 IF CH28=18 THEN LPRINT CHR$(&H1B);CHR$(&H51);CHR$(62);CHR$(7);TEST$:LPRINT:GOTO 4030
4630 IF CH28=19 THEN LPRINT CHR$(&H1B);CHR$(&H51);CHR$(61);CHR$(7);TEST$:LPRINT:GOTO 4030
4640 IF CH28=20 THEN LPRINT CHR$(&H1B);CHR$(&H51);CHR$(60);CHR$(7);TEST$:LPRINT:GOTO 4030
4650 IF CH28<1 OR CH28>20 THEN BEEP:GOTO 4150
4660 REM GOTO 210
4670 REM error handling routine
4680 COLOR 15,0:CLS
4690 IF ERR=1 THEN LOCATE 18,20:PRINT "NEXT without FOR in"ERL:GOTO 4990
4700 IF ERR=2 THEN LOCATE 18,20:PRINT "Syntax Error in Line "ERL:GOTO 4990
4710 IF ERR=3 THEN LOCATE 18,20:PRINT "RETURN without GOSUB in Line "ERL:GOTO 4990
4720 IF ERR=4 THEN LOCATE 18,20:PRINT "Out of data":GOTO 4990
4730 IF ERR=6 THEN LOCATE 18,20:PRINT "Overflow":GOTO 4990
4740 IF ERR=7 THEN LOCATE 18,20:PRINT "Out of memory":GOTO 4990
4750 IF ERR=8 THEN LOCATE 18,20:PRINT "Undefined line number "ERL:GOTO 4990
4760 IF ERR=9 THEN LOCATE 18,20:PRINT "Subscript out of range":GOTO 4990
4770 IF ERR=10 THEN LOCATE 18,20:PRINT "Duplicate definition":GOTO 4990
4780 IF ERR=11 THEN LOCATE 18,20:PRINT "Division by zero":GOTO 4990
4790 IF ERR=12 THEN LOCATE 18,20:PRINT "Illegal direct":GOTO 4990
4800 IF ERR=13 THEN LOCATE 18,20:PRINT "Type mismatch in Line "ERL:GOTO 4990
4810 IF ERR=14 THEN LOCATE 18,20:PRINT "Out of string space":GOTO 4990
4820 IF ERR=15 THEN LOCATE 18,20:PRINT "String too long":GOTO 4990
4830 IF ERR=16 THEN LOCATE 18,20:PRINT "String formula too complex":GOTO 4990
4840 IF ERR=17 THEN LOCATE 18,20:PRINT "Can't Continue":GOTO 4990
4850 IF ERR=18 THEN LOCATE 18,20:PRINT "No RESUME":GOTO 4990
4860 IF ERR=19 THEN LOCATE 18,20:PRINT "RESUME without error":GOTO 4990
4870 IF ERR=22 THEN LOCATE 18,20:PRINT "Missing Operand":GOTO 4990
4880 IF ERR=23 THEN LOCATE 18,20:PRINT "Line buffer overflow":GOTO 4990
4890 IF ERR=24 THEN LOCATE 18,20:PRINT "Device time out  --  Check your printer ! !":GOTO 4990
4900 IF ERR=25 THEN LOCATE 18,20:PRINT "Device fault  --  Check your printer ! !":GOTO 4990
4910 IF ERR=26 THEN LOCATE 18,20:PRINT "FOR without NEXT in line "ERL:GOTO 4990
4920 IF ERR=27 THEN LOCATE 18,20:PRINT "Printer out of paper --  install paper and restart program.":GOTO 4990
4930 IF ERR=29 THEN LOCATE 18,20:PRINT "WHILE without WEND in line "ERL:GOTO 4990
4940 IF ERR=51 THEN LOCATE 18,20:PRINT "Internal Error":GOTO 4990
4950 IF ERR=52 THEN LOCATE 18,20:PRINT "Bad file number":GOTO 4990
4960 IF ERR=53 THEN LOCATE 18,20:PRINT "File not found in "ERL:GOTO 4990
4970 IF ERR=54 THEN LOCATE 18,20:PRINT "Bad file mode in Line "ERL:GOTO 4990
4975 IF ERR=57 THEN LOCATE 18,20:PRINT"Device I /O error  -- Check your printer":GOTO 4990
4980 IF ERR=68 THEN LOCATE 18,20:PRINT "Device Unavailable --  Check your printer ! ! ":GOTO 4990
4990 COLOR 7,0
5000 LOCATE 20,20:INPUT"Press  <ENTER>  to continue:",ZZ$:CLS:GOTO 220
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1069

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        29   1-23-88   7:20p
    GO       TXT       439   1-23-88   7:21p
    README   TXT      5150   1-23-88   7:21p
    X-PRINT  COM     12902   1-23-88   7:22p
    ________ ___         4   5-27-88   1:57p
    LINES    DOC      8949   4-29-87   5:30p
    FORM     TXT      2113   4-29-87   5:10p
    FORM     PIC      2112   4-29-87   5:11p
    LINES    C       10056   4-25-87   6:39p
    LINES    EXE     13174   4-25-87   6:41p
    ________ __          4   5-27-88   1:57p
    SETIT    DOC     22259   1-07-88   2:17p
    SETIT    BAS     29548   1-07-88   1:09p
    README   1ST       470   1-07-88   3:07p
    DESCRIBE TXT       509   1-07-88   6:40p
    ________ _           4   5-27-88   1:57p
    GIFTWRAP EXE     42368   4-05-87   8:12p
    ________             4   5-27-88   1:57p
    PGLABEL  EXE    108367   1-21-88   5:59p
    FILE1069 TXT      4710   6-13-88   3:08p
           20 file(s)     263171 bytes
                           47104 bytes free
