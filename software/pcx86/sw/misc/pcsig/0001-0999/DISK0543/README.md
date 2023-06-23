---
layout: page
title: "PC-SIG Diskette Library (Disk #543)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0543/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0543"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "UTILITIES ECETERA"

    Not your typical utilities disk by any means!  This interesting
    assortment of programs includes routines to print the time on the
    screen, several astronomically oriented tasks, polar to rectangular
    conversions and vice versa, a system to help document files on a disk,
    another to help hide and protect files, a sample general ledger and
    another for a simple address book and lots, lots more!
    
    System Requirements:  128K 1 disk drive, some programs on this disk
    require color/graphics.
    
    How to Start:   To run an EXE or COM program simply type its name and
    press <ENTER>. For instructions on running BASIC programs, please refer
    to the GETTING STARTED section in this catalog. To read DOC files
    simply enter TYPE filename.ext and press <ENTER>.
    
    Suggested Registration:  GLV12 $50.00; SEARCH $15.00
    
    File Descriptions:
    
    ADDRBOOK BAS  Simple address program
    DOORS    COM  Gives a window (new screen) for input
    DOORS    BAS  Source for DOORS.COM in BASIC
    BLATHER  DOC  Documents BLATHER
    AUTOMENU BAT  Batch file to run MENU.BAS
    ARCTRIG  BAS  Inverse trig functions
    ADDRBOOK DOC  Addressbook documentation
    DAYNUM   BAS  Calculates days since Jan 1
    COVER    DOC  Documents COVER
    COVER    COM  Print diskette directory for jacket
    CLOCK    COM  Digital clock in DOS upper right screen
    CLOCK    BAS  Creates CLOCK.COM
    CDEL     BAT  Batch file to run YN.COM erase files
    BLATHER  EXE  Communications program
    HALLEY   BAS  Commet calculations for Halley's
    GLV12    EXE  General ledger program
    GLV12    DOC  Documents GVL12
    FINDFILE DOC  Documentation for FINDFILE.BAT
    FINDFILE BAT  Find any file current drive
    F        EXE  Program to hide/protect/backup files on a disk
    EASTER   BAS  Finds day of easter sunday
    DOORS    DOC  Documentation for DOORS.COM
    PRTSCOFF COM  COMPAQ ONLY - disables Shift-Prtsc key
    PRECESS  BAS  Astonomical precession calculation
    PORE     DOC  Documentation for PORE.COM and PMOR.BAT
    PORE     COM  Modified MORE to allow 55 line listings
    MENU     BAS  Generates BASIC menu
    LOTTO    BAS  Generates winning(?) LOTTO 649 numbers
    LOCSTIME BAS  Local sidereal time calculation
    KEPLER   BAS  Kepler's equation for astronomy
    POLRECT  BAS  Polar to rectangular coordinates
    PMOR     BAT  Batch file to run PORE.COM
    NPAD     DOC  Documentation for NPAD.COM
    NPAD     COM  Displays a small window in upper right
    NPAD     BAS  Source in BASIC for NPAD.COM
    MOVDIR   EXE  Move directory around
    MENU     DOC  Documentation for MENU.BAS
    README   GL   Readme for GVL12
    RANDOM   BAS  Random number generating program
    SEARCH   COM  Set path search
    SAMPLEGL GL2  Sample ledger for GVL12
    SAMPLEGL GL1  Sample ledger for GVL12
    RECTPOL  BAS  Rectangular to polar coordinates
    WHERE    BAS  Source for WHERE.COM  in BASIC
    WEEKDAYS BAS  Days of the week astronomy program
    TOUT     BAS  Pick the winners at the track!
    TIMEAL   BAS  Time, altitude and azimuth, julian date
    SUNNY    BAS  Sunrise...sunset... calculations
    SFX      EXE  Simplifile - document files on a disk
    SF       BAT  Starts SFX with passable parameter
    SEARCH   DOC  Documents SEARCH
    YN       DOC  Documentation for YN.COM
    YN       COM  Protective batch for ERASE.COM(DOS)
    XYZ      BAS  Astronomical coordinates of the sun
    WHEREIS  COM  Find a file anywhere in a tree-structured directory
    WHERE    DOC  Documentation for WHERE.COM
    WHERE    COM  Finds files dir. & subdir. any  drive
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ADDRBOOK.BAS

{% raw %}
```bas
10 REM --------------------------------------------------------
20 REM -- If you find this program of some value, a donation --
30 REM -- of $3 would be appreciated.  Send your contibution --
40 REM -- to:                                                --
50 REM --      Chris Hunt                                    --
60 REM --      6752 Barbara Drive                            --
70 REM --      Victoria, B.C.                                --
80 REM --      V8Z 5T5                                       --
90 REM --      Canada                                        --
100 REM --------------------------------------------------------
110 KEY OFF
120 COLOR 7
130 CLS
140 PRINT "╔══════════════════════════════════════════════════════════════════════════════╗";
150 FOR A=1 TO 22
160 PRINT "║                                                                              ║";
170 NEXT A
180 PRINT"╚══════════════════════════════════════════════════════════════════════════════╝";
190 LOCATE 9,32
200 PRINT "THE ADDRESS BOOK"
210 LOCATE 11,39
220 PRINT "by"
230 LOCATE 13,35
240 PRINT "Chris Hunt"
250 FOR A=1 TO 4000
260 NEXT A
270 CLS
280 PRINT"╓───────────╖"
290 PRINT"║ Main Menu ║"
300 PRINT"╙───────────╜"
310 PRINT
320 PRINT
330 PRINT"Options:"
340 PRINT
350 PRINT"  1.  Enter data (from keyboard)"
360 PRINT"  2.  Save data (to disk)"
370 PRINT"  3.  Enter data (from disk)"
380 PRINT"  4.  Print data"
390 PRINT"  5.  Return to BASIC"
400 PRINT"  6.  Return to MS-DOS"
410 PRINT
420 COLOR 31:PRINT"  A";:COLOR 7:PRINT" to see files in drive A:"
430 COLOR 31:PRINT"  B";:COLOR 7:PRINT" to see files in drive B:"
440 A$=INKEY$
450 IF A$="a" THEN 1720
460 IF A$="b" THEN 1820
470 A=VAL(A$)
480 ON A GOTO 500,730,980,1230,1470,1590
490 GOTO 440
500 CLS
510 PRINT"╓────────────╖"
520 PRINT"║ Enter Data ║"
530 PRINT"╙────────────╜"
540 PRINT
550 INPUT"Enter subject's name              ";NAM$
560 INPUT"Enter subject's address           ";ADDRESS$
570 INPUT"Enter subject's city              ";CITY$
580 INPUT"Enter subject's province          ";PROVINCE$
590 INPUT"Enter subject's postal code       ";POSTALCODE$
600 INPUT"Enter subject's telephone number  ";PHONENUMBER$
610 PRINT
620 PRINT NAM$
630 PRINT ADDRESS$
640 PRINT CITY$
650 PRINT PROVINCE$
660 PRINT POSTALCODE$
670 PRINT PHONENUMBER$
680 PRINT
690 INPUT"Is the above correct ";A$
700 IF LEFT$(A$,1)="n" THEN GOTO 500
710 CLS
720 GOTO 270
730 CLS
740 PRINT"╓───────────╖"
750 PRINT"║ Save Data ║"
760 PRINT"╙───────────╜"
770 PRINT
780 INPUT"What drive";DR$
790 INPUT"Enter file name";NME$
800 PRINT
810 PRINT"Please stand by,"
820 PRINT"  Writing Disk File : ";NME$
830 NAMM$=DR$+":"+NME$+".ab1"
840 OPEN NAMM$ FOR OUTPUT AS #1
850 PRINT #1,NAM$
860 PRINT #1,ADDRESS$
870 PRINT #1,CITY$
880 PRINT #1,PROVINCE$
890 PRINT #1,POSTALCODE$
900 PRINT #1,PHONENUMBER$
910 CLOSE #1
920 PRINT
930 PRINT"Writing complete"
940 FOR A=1 TO 2000
950 NEXT A
960 CLS
970 GOTO 270
980 CLS
990 PRINT"╓───────────╖"
1000 PRINT"║ Load Data ║"
1010 PRINT"╙───────────╜"
1020 PRINT
1030 INPUT"Enter drive ";DR$
1040 INPUT"Enter file name ";NME$
1050 PRINT
1060 PRINT"Please stand by,"
1070 PRINT"  Reading Disk File : ";NME$
1080 NAMM$=DR$+":"+NME$+".ab1"
1090 OPEN NAMM$ FOR INPUT AS #1
1100 INPUT #1, NAM$
1110 INPUT #1, ADDRESS$
1120 INPUT #1, CITY$
1130 INPUT #1, PROVINCE$
1140 INPUT #1, POSTALCODE$
1150 INPUT #1, PHONENUMBER$
1160 CLOSE#1
1170 PRINT
1180 PRINT"Reading complete"
1190 FOR A=1 TO 2000
1200 NEXT A
1210 CLS
1220 GOTO 270
1230 CLS
1240 PRINT"╓────────────╖"
1250 PRINT"║ Print Data ║"
1260 PRINT"╙────────────╜"
1270 PRINT
1280 PRINT"Insert paper, and make sure printer is ";:COLOR 31:PRINT"ON":COLOR 7
1290 PRINT
1300 PRINT"Hit ";:COLOR 31:PRINT"SPACE";:COLOR 7:PRINT" when ready."
1310 PRINT
1320 IF INKEY$<>" " THEN 1320
1330 PRINT"Please stand by,"
1340 PRINT"  Now printing data to printer."
1350 PRINT
1360 LPRINT NAM$
1370 LPRINT ADDRESS$
1380 LPRINT CITY$;", ";PROVINCE$
1390 LPRINT POSTALCODE$
1400 LPRINT
1410 LPRINT PHONENUMBER$
1420 PRINT "Printing complete"
1430 FOR A=1 TO 2000
1440 NEXT A
1450 CLS
1460 GOTO 270
1470 CLS
1480 PRINT"╓─────────────────╖"
1490 PRINT"║ Return to BASIC ║"
1500 PRINT"╙─────────────────╜"
1510 PRINT
1520 PRINT"WARNING: ";
1530 COLOR 7
1540 PRINT"All previous data will be lost."
1550 PRINT
1560 INPUT"Are you sure";A$
1570 IF LEFT$(A$,1)="y" THEN END
1580 GOTO 270
1590 CLS
1600 PRINT"╓──────────────────╖"
1610 PRINT"║ Return to MS-DOS ║"
1620 PRINT"╙──────────────────╜"
1630 PRINT
1640 COLOR 31
1650 PRINT"WARNING: ";
1660 COLOR 7
1670 PRINT"All previous data will be lost."
1680 PRINT
1690 INPUT"Are you sure";A$
1700 IF LEFT$(A$,1)="y" THEN SYSTEM
1710 GOTO 270
1720 CLS
1730 PRINT"╓───────────────╖"
1740 PRINT"║ Files Drive A ║"
1750 PRINT"╙───────────────╜"
1760 PRINT
1770 FILES "a:"
1780 PRINT
1790 PRINT" Hit ";:COLOR 31:PRINT"SPACE";:COLOR 7:PRINT" to return to menu"
1800 IF INKEY$<>" " THEN 1800
1810 GOTO 270
1820 CLS
1830 PRINT"╓───────────────╖"
1840 PRINT"║ Files Drive B ║"
1850 PRINT"╙───────────────╜"
1860 PRINT
1870 FILES "b:"
1880 PRINT
1890 PRINT" Hit ";:COLOR 31:PRINT"SPACE";:COLOR 7:PRINT" to return to menu"
1900 IF INKEY$<>" " THEN 1800
1910 GOTO 270
```
{% endraw %}

## ARCTRIG.BAS

{% raw %}
```bas
10   CLS
20   KEY OFF
30   REM
40   PRINT : PRINT : PRINT
50   PRINT TAB(28) " A MATH (TRIG) PROGRAM"
60   PRINT : PRINT
70   PRINT TAB(22) "****** INVERSE TRIG FUNCTIONS ******"
80   PRINT : PRINT :
90   PRINT TAB(30) " BY CHRIS SPRATT"
100   PRINT :PRINT  TAB(32) "VICTORIA, B.C."
110   PRINT
120   PRINT TAB(34) "APR. 1985"
130   PRINT
140   PRINT : PRINT :  PRINT
150  GOSUB 580:
160   LOCATE 24,25
170   PRINT "PRESS ANY KEY TO CONTINUE"
180   B$ = INPUT$ (1)
190   REM
200   CLS : PRINT : PRINT : PRINT : PRINT
210   PIT = 3.141593# : PTT = 180!/ 3.141593#
220   REM
230  CLS
240  LOCATE 7,27
250  INPUT  " INPUT THE  NUMBER IN "; DS
260  CON0 = 1.570796305#
270  CON1 = -.2145988016#
280  CON2 = .0889789874#
290  CON3 = -.0501743046#
300  CON4 = .030891881#
310  CON5 = -.0170881256#
320  CON6 = .0066700901#
330  CON7 = -.0012624911#
340  DS7 = CON7*(DS*DS*DS*DS*DS*DS*DS)
350  DS6 = CON6*(DS*DS*DS*DS*DS*DS)
360  DS5 = CON5*(DS*DS*DS*DS*DS)
370  DS4 = CON4*(DS*DS*DS*DS)
380  DS3 = CON3*(DS*DS*DS)
390  DS2 = CON2*(DS*DS)
400  DS1 = CON1*DS
410  DS10 = CON0 +DS1 + DS2 + DS3 + DS4 + DS5 + DS6+ DS7
420  DS11 = SQR(1! - DS)
430  DSS = DS11*DS10
440  DSI= PIT - DSS
450  DSI =(DSI - DSS)/2
460  DSC = DSS
470  PRINT :PRINT :PRINT
480  PRINT TAB(20) "THE ARCOS VALUE OF " DS;"IN RADIANS IS ";DSC
490  PRINT :PRINT
500  PRINT TAB(20) "THE ARCSIN VALUE OF "DS;"IN RADIANS IS ";DSI
510  DDSC = DSC * PTT
520  DDSI = DSI * PTT
530  PRINT :PRINT
540  PRINT TAB(20) "THE ARCOS VALUE OF "DS;" IN DEGREES IS ";DDSC
550  PRINT :PRINT
560  PRINT TAB(20) "THE ARCSIN VALUE OF "DS;" IN DEGREES IS "; DDSI
570  END
580  PRINT
590  PRINT TAB(10)" THIS PROGRAM GIVES THE ARCOSINE AND ARCSINE INVERSE"
600  PRINT TAB(10)" TRIG FUNCTIONS THAT ARE NOT SUPPORTED IN BASIC."
610  PRINT TAB(10)" THE ARCTANGENT FUNCTION IS NOT GIVEN AS BASIC SUPPORTS THIS."
620  RETURN
```
{% endraw %}

## CLOCK.BAS

{% raw %}
```bas
100    OPEN "CLOCK.COM"AS #1 LEN = 1    'OPEN CLOCK.COM
110    PRINT "CREATING CLOCK.COM"
120    FIELD #1,1 AS BYTE.$             'SPECIFY WHAT GOES INTO IT
130    FOR N = 1 TO 267
140    READ BYTE.%
150    LSET BYTE.$ = CHR$(BYTE.%)       'LOAD BYTE INTO BUFFER
160    PUT #1                           'WRITE BUFFER OUT
170    NEXT N
180    CLOSE #1                         'CLOSE FILE
190    PRINT "CLOCK.COM CREATED."       "DONE!
200    END
210    DATA  233,186,0,0,0,0,0,0
220    DATA  0,0,0,0,0,58,7,58
230    DATA  7,58,7,58,7,58,7,80
240    DATA  81,87,86,30,6,156,46,255
250    DATA  30,3,1,185,64,0,142,217
260    DATA  46,139,14,7,1,65,129,249
270    DATA  244,1,114,6,232,60,0,185
280    DATA  0,0,46,137,14,7,1,185
290    DATA  0,176,142,193,46,139,22,11
300    DATA  1,46,139,62,9,1,46,141
310    DATA  54,13,1,185,10,0,250,236
320    DATA  168,1,117,251,46,138,36,236
330    DATA  168,1,116,251,38,136,37,71
340    DATA  70,226,236,251,7,31,94,95
350    DATA  89,88,207,80,83,81,82,30
360    DATA  184,64,0,142,216,161,110,0
370    DATA  61,12,0,126,5,45,12,0
380    DATA  235,246,212,10,5,48,48,46
390    DATA  141,30,13,1,46,136,39,46
400    DATA  136,71,2,161,108,0,185,8
410    DATA  0,211,232,186,60,0,246,226
420    DATA  211,232,212,10,5,48,48,46
430    DATA  136,103,6,46,136,71,8,31
440    DATA  90,89,91,88,195,184,0,0
450    DATA  142,216,250,161,112,0,46,163
460    DATA  3,1,161,114,0,46,163,5
470    DATA  1,199,6,112,0,23,1,140
480    DATA  14,114,0,251,180,15,205,16
490    DATA  128,236,8,208,228,46,136,38
500    DATA  9,1,46,199,6,11,1,186
510    DATA  3,168,4,117,14,46,129,6
520    DATA  9,1,0,128,46,199,6,11
530    DATA  1,218,3,232,109,255,186,189
540    DATA  1,205,39
```
{% endraw %}

## DAYNUM.BAS

{% raw %}
```bas
10  REM DAYNUMBER
20  CLS
30  PRINT : PRINT : PRINT:
40  PRINT TAB(30) " A PROGRAM"
50  PRINT
60  KEY OFF
70  PRINT TAB(20) "----------------------------------"
80  PRINT TAB(20) "* FINDS DAYS ELAPSED SINCE JAN 1 *"
90  PRINT TAB(20) "----------------------------------"
100  PRINT: PRINT
110  PRINT TAB(28) "BY CHRIS SPRATT"
120  PRINT
130  PRINT TAB(32) "OCT 1984"
140  PRINT
150  PRINT: PRINT :LOCATE 24,25
160  PRINT "PRESS ANY KEY TO CONTINUE"
170  IF INKEY$ = "" THEN 170
180  CLS : PRINT : PRINT : PRINT: PRINT
190  DATA 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
200  REM
210  REM --- INPUT AND OUTPUT INSTRUCTIONS ----
220  REM
230  PRINT TAB(22) "DAYS ELAPSED SINCE JANUARY 1ST"
240  PRINT : PRINT
250  PRINT  TAB( 8) " TO DETERMINE THE NUMBER OF DAYS ELAPSED SINCE JANUARY 1ST"
260  PRINT
270  PRINT TAB(19): INPUT "   ENTER MONTH (1 - 12) ----", FINAL.MO
280  PRINT TAB(19): INPUT "   ENTER THE DAY (1 -31) ---", DAY.FINAL
290  PRINT
300  REM
310  REM ---- MAIN PROGRAN: FINDS ELAPSED DAYS ----------
320  REM
330  FOR MO = 1 TO FINAL.MO - 1
340  READ DAY.MO                      'READS DATA FROM 180
350  DAYS = DAYS + DAY.MO
360  NEXT
370  DAYS.TOT = DAY.FINAL + DAYS
380  PRINT TAB(18):   INPUT "         LEAP YEAR Y/N";B$
390  IF B$ = "Y" THEN DAYS.TOT = DAYS.TOT + 1  ELSE 430
400  REM
410  REM ---- PROGRAM OUTPUT -----------------------------
420  REM
430  PRINT :PRINT
440  PRINT TAB(13)  " ====" DAYS.TOT " DAYS HAVE ELAPSED SINCE JAN. 1ST ===="
450  END
```
{% endraw %}

## DOORS.BAS

{% raw %}
```bas
100   GRAND.TOTAL.#=0
110   OPEN "DOORS.COM"AS #1 LEN = 1
120   FIELD #1, 1 AS DOORS.BYTE.$
130   FOR I.% = 1 TO 178
140   READ DOORS.DATA.%
150   GRAND.TOTAL.# = GRAND.TOTAL.# + DOORS.DATA.%
160   LSET DOORS.BYTE.$ = CHR$(DOORS.DATA.%)
170   PUT #1
180   PRINT USING "########";GRAND.TOTAL.#;
190   NEXT I.%
200   READ THE.TOTAL.#
210   IF THE.TOTAL.# <> GRAND.TOTAL.# THEN PRINT CHR$(7):PRINT "***ERROR - TOTAL      INCORRECT!":PRINT "*** CHECK DATA STATEMENTS AND RE-RUN THE PROGRAM."
220   CLOSE #1
230   END
240   DATA  233,138,0,0,0,0,0,30,6,80
250   DATA  83,81,82,86,87,156,46,255,30,3
260   DATA  1,184,64,0,142,216,160,23,0,36
270   DATA  9,60,9,117,97,180,15,205,16,60
280   DATA  7,116,11,60,3,118,3,235,83,144
290   DATA  60,1,118,78,180,3,183,0,205,16
300   DATA  139,30,16,0,139,203,129,225,48,0
310   DATA  51,217,129,203,32,0,176,3,131,249
320   DATA  48,116,6,129,203,48,0,176,7,137
330   DATA  30,16,0,50,228,205,16,180,2,183
340   DATA  0,205,16,184,0,176,142,192,184,0
350   DATA  184,142,216,131,249,48,117,4,30,6
360   DATA  31,7,51,255,51,246,185,208,7,252
370   DATA  243,165,95,94,90,89,91,88,7,31
380   DATA  207,30,184,0,0,142,216,250,161,36
390   DATA  0,46,163,3,1,161,38,0,46,163
400   DATA  5,1,199,6,36,0,7,1,140,14
410   DATA  38,0,251,186,141,1,205,39,16143
```
{% endraw %}

## DOORS.DOC

{% raw %}
```



                           DOORS
        
        
        
        This program provides an additional window,whereby you can 
    display data on two screens at a time.
        The IBM PC supports both a monochrome and a color graphics 
    monitor.  You need both to run DOORS.  IT WILL NOT RUN ON A 
    COMPAQ, I don't know about other compatibles though.
        To switch screens press the Alt key and the Right Shift key at 
    the same time.  As an added bonus,according to the article, DOORS 
    begins by copying the screen your leaving to the new monitor. You 
    can start from either screen, the program doesn't care.  You can 
    flip back and forth just by hitting the Alt-Right Shift key 
    combination.
        You must also be careful when using programs that have their 
    own screen drivers.
        These notes and the program DOORS.BAS  (which created 
    DOORS.COM when I ran it) were taken from a PC MAGAZINE (February 5, 
    1985) article by  John Dickinson.  Consult the article for 
    additional information. 
               

                             Chris Spratt
                             Victoria, B. C.
                             June 1985

         
    

```
{% endraw %}

## EASTER.BAS

{% raw %}
```bas
10        CLS
20        REM
30        PRINT :PRINT :PRINT
40        PRINT TAB(33) "A SPECIAL PROGRAM"
50        PRINT :PRINT
60        PRINT TAB(21) "****** THE DATE OF EASTER  SUNDAY ******"
70        PRINT :PRINT
80        PRINT  TAB(33) "BY CHRIS SPRATT"
90        PRINT
100        PRINT TAB(35) " SEPT 1984"
101        PRINT TAB(35) "VICTORIA, BC"
110        PRINT
120        LOCATE  24,25
130        PRINT  "PRESS ANY KEY TO CONTINUE"
140       IF INKEY$ = "" THEN 140
150        CLS: PRINT :PRINT :PRINT :PRINT :
160   REM  --  THE DETERMINATION OF EASTER --
170   REM  BY CHRIS SPRATT  --  AUGUST 1984
180   REM  BULL. INST. MATH. VOL2 NO2 1966
190       LOCATE  5,29 :  INPUT "YEAR OF INTEREST "; Y
200       A = INT(((Y/19 - INT(Y/19)) * 19) +.5)
210       B = INT(Y/100)
220       C = INT(((Y/100 - INT(Y/100)) * 100) + .5)
230       D = INT (B/4)
240       E = INT (((B/4 -INT(B/4)) * 4) + .5)
250       G = INT (((8 * B) + 13)/25)
260       J = B - D - G
270       IF Y < 1583 THEN J = 30
280       H1 = INT(((11 * J) - 4)/30)
290       H2 = INT (((7 * A) + H1 + 6)/11)
300       HH = 19 * A + J + 15 - H2
310       H = INT (((HH/29 - INT (HH/29)) * 29) +.5)
320       I = INT (C/4)
330       K = INT(((C/4 - INT (C/4)) * 4) + .5)
340       LL = 32 + 2 * E + 2 * I - K - H
350       IF Y < 1583 THEN LL = 34 + B + 2 * I - H - K
360       L = INT (((LL/7 - INT (LL/7)) * 7) +.5)
370       N = INT (( 90 + H + L)/25)
380       PP = 19 + H + L + N
390       P = INT (((PP/32 - INT (PP/32 )) * 32) + .5)
400       PRINT :PRINT :PRINT :PRINT
410       IF N = 4 THEN N$="APRIL"
420       IF N = 3 THEN N$="MARCH"
430       CLS : PRINT :PRINT :PRINT :PRINT
440       PRINT TAB(20) "EASTER SUNDAY IN " ;Y;" IS ..."
450       PRINT  : PRINT : PRINT
460       PRINT TAB(30) N$; P
470       PRINT :PRINT :PRINT
480       PRINT TAB(20) : INPUT "DO YOU WANT ANOTHER YEAR Y/N";A$
490       IF A$ = "Y" THEN CLS: GOTO 190
500       IF A$ = "N" THEN GOTO 510
510       END
```
{% endraw %}

## FILES543.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No. 543  UTILITIES ECETERA                                     v1 DS2
---------------------------------------------------------------------------
This assortment of programs includes some to print the time on the screen,
convert polar to rectangular coordinates and vice versa, a system to help
document files on a disk, another to help hide and protect files, a sample
general ledger and another for a simple addressbook and lots, lots more !
 
ADDRBOOK BAS  Simple address program
ADDRBOOK DOC  Addressbook documentation
ARCTRIG  BAS  Inverse trig functions
AUTOMENU BAT  Batch file to run MENU.BAS
BLATHER  DOC  Documents BLATHER
BLATHER  EXE  Communications program
CDEL     BAT  Batch file to run YN.COM erase files
CLOCK    BAS  Creates CLOCK.COM
CLOCK    COM  Digital clock in DOS upper right screen
COVER    COM  Print diskette directory for jacket
COVER    DOC  Documents COVER
DAYNUM   BAS  Calculates days since Jan 1
DOORS    BAS  Source for DOORS.COM in BASIC
DOORS    COM  Gives a window (new screen) for input
DOORS    DOC  Documentation for DOORS.COM
EASTER   BAS  Finds day of easter sunday
F        EXE  Program to hide/protect/backup files on a disk
FINDFILE BAT  Find any file current drive
FINDFILE DOC  Documentation for FINDFILE.BAT
GLV12    DOC  Documents GVL12
GLV12    EXE  General ledger program
HALLEY   BAS  Commet calculations for Halley's
KEPLER   BAS  Kepler's equation for astronomy
LOCSTIME BAS  Local sidereal time calculation
LOTTO    BAS  Generates winning(?) LOTTO 649 numbers
MENU     BAS  Generates BASIC menu
MENU     DOC  Documentation for MENU.BAS
MOVDIR   EXE  Move directory around
NPAD     BAS  Source in BASIC for NPAD.COM
NPAD     COM  Displays a small window in upper right
NPAD     DOC  Documentation for NPAD.COM
PMOR     BAT  Batch file to run PORE.COM
POLRECT  BAS  Polar to rectangular coordinates
PORE     COM  Modified MORE to allow 55 line listings
PORE     DOC  Documentation for PORE.COM and PMOR.BAT
PRECESS  BAS  Astonomical precession calculation
PRTSCOFF COM  COMPAQ ONLY - disables Shift-Prtsc key
RANDOM   BAS  Random number generating program
README   GL   Readme for GVL12
RECTPOL  BAS  Rectangular to polar coordinates
SAMPLEGL GL1  Sample ledger for GVL12
SAMPLEGL GL2  Sample ledger for GVL12
SEARCH   COM  Set path search
SEARCH   DOC  Documents SEARCH
SF       BAT  Starts SFX with passable parameter
SFX      EXE  Simplifile - document files on a disk
SUNNY    BAS  Sunrise...sunset... calculations
TIMEAL   BAS  Time, altitude and azimuth, julian date
TOUT     BAS  Pick the winners at the track!
WEEKDAYS BAS  Days of the week astronmy program
WHERE    BAS  Source for WHERE.COM  in BASIC
WHERE    COM  Finds files dir. & subdir. any  drive
WHERE    DOC  Documentation for WHERE.COM
WHEREIS  COM  Find file anywhere in tree
XYZ      BAS  Astonomical coordinates of the sun
YN       COM  Protective batch for ERASE.COM(DOS)
YN       DOC  Documentation for YN.COM
 
PC-SIG (Software Interest Group)
1030 East Duane Avenue, Suite D
Sunnyvale, CA  94086
(408) 730-9291
```
{% endraw %}

## FINDFILE.DOC

{% raw %}
```



                       FINDFILE.BAT
        
        
        This is a short batch file that will find a file buried deep 
    within a subdirectory. 
        FINDFILE relies on the CHKDSK.COM /V option.  This /V option 
    lists all the files in all subdirectories.  You must have 
    CHKDSK.COM, FIND.EXE and MORE.COM on your disk.
        
        If you want to search for BASICA.COM type:
        
                       FINDFILE BASICA  
        
        If you typed: 
        
                       FINDFILE BASIC
        
    the batch file would locate  BASIC.COM, BASICA.COM and BASICA.EXE 
    along with any other filename with the capital letters BASIC in 
    it.  You can if you desire use part names  FINDFILE ASICA would 
    find BASICA.COM as well as BASICA.EXE.
        
        Typing:  
        
                       FINDFILE.COM
        
    will list all your COM files.
        
        You must use capital letters only and don't put any quotation 
    marks either as the batch file already does this.
        
        FINDFILE.BAT will not display a special message telling you 
    there were no matches found.  But this will be obvious when no matches 
    are displayed on the screen.

              

```
{% endraw %}

## HALLEY.BAS

{% raw %}
```bas
10   REM -----------COMET EPHEMERIS -----------
20   PI = 3.14159
30   CO$ = "COMET HALLEY"
40   PH = 1986.11
50   PL = 170.011
60   AN = 58.1453
70   PY = 76.0081
80   SM = 17.9435
90   EO = .967267
100  IO = 162.239
110  CLS:PRINT :PRINT :PRINT
120  REM ----------------------------------------
130  PRINT "              ";CO$
140  PRINT "- - - - - - - - - - - - - - - - - - -"
150  PRINT "      EPHEMERIS FOR DATES"
160  PRINT "     BETWEEN 1946 AND 2026"
170  PRINT "        BY ROGER BROWNE"
180  PRINT "  THIS VERSION FROM ASTRONOMY MAGAZINE"
190  PRINT "        FEBRUARY, 1985 "
200  PRINT "  COPIED BY CHRIS SPRATT (IHW)"
210  PRINT "    VICTORIA, BC (JUNE,1985)"
220  REM ________________________________________
230  REM           INPUT THE DATE
240  REM ----------------------------------------
250  PRINT "INPUT YEAR"
260  INPUT Y
270  IF Y < 1946 OR Y > 2026 THEN GOTO 250
280  PRINT "INPUT MONTH"
290  INPUT M
300  IF M < 1 OR M > 12 THEN GOTO 280
310  PRINT "INPUT DAY"
320  INPUT D
330  PRINT
340  REM ----------------------------------------
350  REM     CALCULATION FOR THE COMET
360  REM ----------------------------------------
370  X = PH
380  IF Y >= 1986 THEN Z = 1984
390  IF Y < 1986 THEN Z = 1988
400  IF Y > = 1986 THEN S  = 0
410  IF Y < 1986 THEN S = 1
420  GOSUB 1840
430  DS = N
440  B = (360/PY)*(N/365.25)
450  K = B
460  GOSUB 1990
470  B = (K*PI)/180
480  E = B
490  Y1 = EO
500  Q = E-(Y1*SIN(E))-B
510  IF ABS(Q) <=.000017 THEN GOTO 550
520  U = Q/(1-(Y1*COS(E)))
530  E = E-U
540  GOTO 500
550  V = (SQR((1+Y1)/(1-Y1))*TAN(E/2))
560  V = 2*ATN(V)
570  V1 = (V*180)/PI
580  L = V1 + PL
590  R = SM*(1-(Y1*Y1))/(1+Y1*COS(V))
600  F = L -AN
610  F2 = IO
620  F1 = (F*PI)/180
630  F2 = (F2*PI)/180
640  I = (SIN(F1)*SIN(F2))
650  I = ATN(I/SQR(-I*I+1))
660  P = ATN(TAN(F1)*COS(F2))
670  P1 = (P*180)/PI + AN
680  IF F >=90 AND F <=270 THEN P1 = P1 +180
690  IF P1 < 0 THEN P1 = P1 + 360
700  P = (P1 * PI)/180
710  R2 = R*COS(I)
720  REM --------------------------------------
730  REM     CALCULATIONS FOR THE EARTH
740  REM --------------------------------------
750  X = 1975
760  IF Y >= X THEN Z = 1972
770  IF Y<X THEN Z = 1976
780  IF Y>=X THEN S =0
790  IF Y < X THEN S = 1
800  GOSUB 1840
810  T = (360/365.25)*(N/1.00004)
820  K = T
830  GOSUB 1990
840  T = K
850  T1 = (T*PI)/180
860  C = .01672
870  J = T +(360/PI)*C*SIN(T1 - .051943)
880  J = J + 99.5343
890  IF J > 360 THEN J = J - 360
900  IF J < 0 THEN J = J + 360
910  H =((J - 102.51044#)*PI)/180
920  R1 = (1-C*C)/(1+C*COS(H))
930  REM ----------------------------------
940  REM   COMPUTE ECLIPTIC COORDINATES
950  REM ----------------------------------
960  U1 = ((P1-J)*PI)/180
970  U2 = ((J - P1)*PI)/180
980  IF R2 < R1 THEN GOTO 1040
990  Q1 = (R1 * SIN(U1))
1000  Q1 = Q1/(R2-(R1*COS(U1)))
1010  Q1 = ATN(Q1)
1020  Q2 = (Q1*180)/PI+P1
1030  GOTO 1080
1040  Q3 = (R2 *SIN(U2))
1050  Q3 = Q3/(R1 - (R2*COS(U2)))
1060  Q3 = ATN(Q3)
1070  Q2 = (Q3 * 180)/PI + J + 180
1080  IF Q2 > 360 THEN Q2 = Q2 - 360
1090  IF Q2 < 0 THEN Q2 = Q2 + 360
1100  Q4 = (Q2 * PI)/180
1110  Q5 = (R2 * TAN(I)*SIN(Q4-P))
1120  Q5 = Q5/(R1*SIN(U1))
1130  Q5 = ATN(Q5)
1140  REM -----------------------------------
1150  REM    CONVERT TO EQUATORIAL COORDS
1160  REM -----------------------------------
1170  E1 = .40893064#
1180  L1 = (SIN(Q5)*COS(E1))
1190  L1 = L1 + (COS(Q5) * SIN(E1)*SIN(Q4))
1200  M1 = ATN(L1/SQR(-L1*L1+1))
1210  Y2 = (M1 * 180)/PI
1220  B1 = (TAN(Q4)*COS(E1))
1230  B1 = B1 - ((TAN(Q5)*SIN(E1))/COS(Q4))
1240  G = ATN(B1)
1250  H1 = (G*180)/PI
1260  I1 = INT(Q2/90)
1270  J1 = INT(H1/90)
1280  IF I1 - J1 = 4 OR I1 - J1 = 1 THEN H1 = H1 + 360
1290  IF I1 - J1 = 2 OR I1 - J1 = 3 THEN H1 = H1 + 180
1300  IF I1 - J1 = -4 THEN H1 = H1 + 360
1310  IF I1 - J1 = -2 THEN H1 = H1 - 180
1320  N1 = H1/15
1330  W = INT((N1 - INT(N1))*60 + .5)
1340  IF W = 60 THEN N1 = N1 + 1
1350  IF W = 60 THEN W = 0
1360  K1 = ABS(Y2)
1370  W1 = INT((K1-INT(K1))*60 + .5)
1380  IF W1 = 60 THEN G1 = G1 + 1
1390  IF W1 = 60 THEN W1 = 0
1400  G1 = INT(K1)
1410  IF  Y2<0 AND G1<1 THEN W1 = -W1
1420  D1 = R1 * R1 + R2 * R2
1430  D1 = D1 - (2 *R1*R2*COS(U1))
1440  D2 = SQR(D1)
1450  R3 = D2/COS(I)
1460  K9 = R
1470  GOSUB 2100
1480  R = K9
1490  K9 = R3/10
1500  GOSUB 2100
1510  R3 = K9 * 10
1520  M0 = 4.1 : N = 3.1
1530  IF DS < 0 THEN M0 = 5 : N = 4.44
1540  MA = M0 + 5 * .4343* LOG(R3)
1550  MA = MA + N * 2.5 * .4343 * LOG(R)
1560  MA = (INT(10*MA))/10
1570  IF Y2 < 0 THEN G1 = -G1
1580  REM -----------------------------------
1590  REM  PRINT EPHEMERIS FOR DATE
1600  REM -----------------------------------
1610  CLS:PRINT :PRINT :PRINT
1620  PRINT " -----------------------------------"
1630  PRINT " DATA FOR "+CO$
1640  PRINT " DATE: M/D/Y = ";M;"/";D;"/";Y
1650  PRINT " DAYS TO PERIHELION ";INT(DS)
1660  PRINT
1670  PRINT  "COORDINATES:"
1680  PRINT  " RA:"; INT(N1); "HRS";W; "MIN"
1690  PRINT  "DEC:";G1;"DEG";W1;"MIN"
1700  PRINT
1710  PRINT "DISTANCES"
1720  PRINT " COMET TO SUN"; R; "AU"
1730  PRINT " COMET TO EARTH";R3; "AU"
1740  PRINT
1750  PRINT  "PREDICTED MAG";MA
1760  PRINT  "------------------------------------"
1770  PRINT  "PRESS 0 FOR ANOTHER DATE OR 1 TO EXIT"
1780  IF INKEY$ = "0" THEN GOTO 1800
1785  IF INKEY$ = "1" THEN GOTO 2140
1790  GOTO 1780
1800  PRINT
1810  GOTO 250
1820  REM -----------------------------------------
1830  REM SUBROUTINE: DAYS TO PERIHELION
1840  A = (Y-Z)/4
1850  A1 = INT(A + S)
1860  N = 365*(Y-X+S)+A1
1870  IF INT(A) <> A THEN GOTO 1890
1880  IF (M2 = 2 AND D<29) OR M = 1 THEN N = N - 1
1890  IF M > 2 THEN GOTO 1930
1900  M2 = M - 1
1910  M2 = 31 * M2
1920  GOTO 1950
1930  M2 = M + 1
1940  M2 = INT(30.6*M2)-63
1950  N = N+M2+D-365*S
1960  RETURN
1970  REM ------------------------------------------
1980  REM: PLACE BETWEEN 0 AND 360 DEG
1990  IF K < 0 THEN GOTO 2010
2000  IF K > 360 THEN GOTO 2040
2010  K = K + 360
2020  IF K>= 0 THEN GOTO  2070
2030  GOTO 2010
2040  K = K - 360
2050  IF K<= 360 THEN GOTO  2070
2060  GOTO  2040
2070  RETURN
2080  REM ------------------------------------------
2090  REM: ROUND OFF SUBROUTINE
2100  K9 = K9 * 1000
2110  K9 = INT(K9 + .5)
2120  K9 = K9/1000
2130  RETURN
2140  END
```
{% endraw %}

## KEPLER.BAS

{% raw %}
```bas
10     CLS
20     KEY OFF
30  REM
40     LOCATE 5,18
50     PRINT  "---------- KEPLER'S EQUATION ----------"
60     LOCATE 7,25
70     PRINT " BY CHRIS SPRATT --- 1985"
80     PRINT TAB(28) "   VICTORIA, BC."
90  REM
100     GOSUB 950
110     LOCATE 24,25 : PRINT  "PRESS ANY KEY TO CONTINUE"
120     IF INKEY$ = "" THEN 120
130     CLS
140  REM
150     PRINT: PRINT:
160  REM
170     GOSUB 920
180  REM  PICK UP CONSTANTS
190     LOCATE 5,23
200     PRINT " DATE OF PERIHELION"
210     PRINT
220     INPUT "                              YEAR";Y
230     INPUT "                             MONTH";M
240     INPUT "                               DAY";D
250     GOSUB 610:T6 = JD
260     PRINT
270     PRINT  TAB(25)  "ENTER DATE OF INTEREST"
280    INPUT  "                              YEAR";Y
290    INPUT  "                             MONTH";M
300    INPUT  "                               DAY";D
310    PRINT
320    GOSUB 610: DD = JD
330 REM   ADJUSTED JULIAN DATE OF PERIHELION
340    PRINT  TAB(25)  "ENTER  ELEMENTS ---"
350 REM
360 REM
370    INPUT  "                         DISTANCE Q (A.U.)";Q
380    INPUT  "                            ECCENTRICITY E";E0
390    N0 = K/((Q/(1-E0))^1.5)
400     T = (JD+24980)/36525!: REM CENTURIES SINCE JAN 0, 1900, 12H UT
410    JD = JD + 2440000#
420    ET = ((JD - 2444239#)/365.2421987#)*.0000119 + .00059
430    JD = JD + ET - 2440000#
440  GOTO 720
450  REM
460  REM      CALENDAR ROUTINE
470  REM
480  REM      ENTER WITH JD = ADJUSTED JULIAN DATE OF INTEREST
490  REM      (= TRUE JULIAN DATE - 2440000.0)
500    D7 = INT(JD+719019!)
510    IF JD<-24921 THEN D7=D7-1
520    Y7 = INT((D7-122.1)/365.25)
530    M7 = INT((D7-INT(365.25*Y7))/30.6001)
540    D6 = D7-INT(365.25*Y7)-INT(30.6001*M7)
550    M6 = M7-1
560    IF M7 > 13 THEN M6 = M6 - 12
570    Y6 = Y7
580    IF M6 <3 THEN Y6=Y6+1
590    M$ = MID$ (M1$,3*M6-2,3)
600  REM
610  REM    JULIAN DATE ROUTINE
620  REM
630  REM    ENTER WITH D, M, Y OF INTEREST
640    IF M>=3 THEN 660
650    M = M+12:Y=Y-1
660    F = INT(Y/100)-INT(Y/400)
670    A = INT(365.25*(Y+4712))
680    B = INT((367*(M-1)+5)/12)
690    J = A+B-F-2440000.5#
700    JD= J+D
710    RETURN
720  REM
730  REM   TO SOLVE KEPLER'S EQUATION
740    T7 = JD - T6
750    F = 0
760    M5 = N0*(T7)
770    E5 = M5
780    E6 = M5+E0*SIN(E5)
790    IF ABS(E6-E5) < .0000001 THEN F=1
800    E5 = E6
810    IF F = 0 THEN GOTO 780
820    E5 = E5 * R0
830    IF E5 >360 THEN E5 = 360 - E5
840    IF E5 < 360 THEN E5 = 360 + E5
850    CLS
860    LOCATE  8,18
870    PRINT "ECCENTRIC ANOMALY = " ; E5  ;"DEGREES"
880    PRINT :PRINT :PRINT TAB(20)
890    INPUT "DO YOU WANT ANOTHER Y/N";A$
900    IF A$ = "Y" THEN GOTO 130 ELSE 910
910    END
920    R1 = 3.1415926536#/180: K = .01720209895#
930    R0 = 1/R1
940    RETURN
950   LOCATE 15,12
960   PRINT "NOTE:  PROGRAM FAILS WHEN ECCENTRICITY OF OBJECT IS CLOSE TO 1"
970   RETURN
```
{% endraw %}

## LOCSTIME.BAS

{% raw %}
```bas
10   CLS
20   KEY OFF
30   REM
40   PRINT : PRINT : PRINT
50   PRINT TAB(28) " AN ASTRONOMY PROGRAM"
60   PRINT : PRINT
70   PRINT TAB(20) "-------- LOCAL SIDEREAL TIME --------"
80   PRINT : PRINT :
90   PRINT TAB(30) " BY CHRIS SPRATT"
100   PRINT
110   PRINT TAB(34) "0CT. 1984"
120   PRINT
130   PRINT : PRINT : GOSUB 460
140  CLS:PRINT:PRINT :PRINT
150  PRINT TAB(25)   "LOCAL SIDEREAL TIME"
160  PRINT :PRINT
170  PRINT TAB(20):  INPUT  "LONGITUDE WEST OF OBERVATORY"  ; L
180  A = 1.0027379093#
190  PRINT :
200  PRINT TAB(20): INPUT " DECIMAL PART OF DAY" ;B
210  T = B * 24 * A : OBST = B
220  PRINT :PRINT
230  PRINT TAB(13) "SIDEREAL TIME AT O HOURS U.T. ON OBSERVED DAY"
240  PRINT:PRINT
250  PRINT TAB(29) : INPUT "HOURS";H
260  PRINT TAB(27) : INPUT "MINUTES";M
270  REM
280  PRINT TAB(27) : INPUT "SECONDS";S
290  CLS
300  C = (S/60 + M)/60 + H
310  T = T + C
320  IF T > 24 THEN  T = T - 24
330  IF T < 0 THEN T = T + 24
340  T = T - L/15
350  IF T > 24 THEN T = T - 24
360  IF T < 0 THEN T = T + 24
370  PRINT :PRINT :PRINT :PRINT
380  T1= T * 15
390   PRINT TAB(20) "LOCAL SIDERAL TIME  (DEC. HRS)   = ";T
400   PRINT
410  PRINT TAB(20) "LOCAL SIDEREAL TIME --- DEGREES  = ";T1
420  PRINT : PRINT TAB(20) "LOCAL SIDERAL TIME =" ;INT(T);" HOURS";   M;   "MIN";      C;"SEC"
430   LOCATE 15,24
440   PRINT TAB(20) : INPUT "DO YOU WANT ANOTHER DATE Y/N";A$
450   IF A$ = "Y" THEN GOTO  140    ELSE 510
460   LOCATE 24,25
470   PRINT "PRESS ANY KEY TO CONTINUE"
480   B$ = INPUT$ (1)
490   CLS : PRINT : PRINT : PRINT : PRINT
500  RETURN
510   END
```
{% endraw %}

## LOTTO.BAS

{% raw %}
```bas
10   CLS
20   KEY OFF
30      REM  THIS PROGRAM WAS DOWNLOADED FROM THE PROVIDER BBS
40      REM  WRITTEN ORGINALLY BY ED SEEDHOUSE - THIS ADAPTATION
50      REM  WAS DONE FOR THE IBM MS/DOS TYPE COMPUTERS BY
60      REM  CHRIS SPRATT, VICTORIA, BC.
70      REM  THANKS TO ED SEEDHOUSE AND THE PROVIDER SYSOP
80      REM
90      REM
100   PRINT : PRINT
110   PRINT TAB(25) " A SPECIAL LOTTO 649 PROGRAM"
120   LOCATE 8,16:FOR L = 1 TO 50:PRINT CHR$(205);:NEXT
130   LOCATE 9,20:COLOR 15
140   PRINT "--------  THE WINNING 649 NUMBERS  --------"
150   LOCATE 10,16:COLOR 7
160   FOR L = 1 TO 50 :PRINT CHR$(205);:NEXT
170   PRINT : PRINT :
180   PRINT TAB(31) " BY CHRIS SPRATT"
190   PRINT
200   PRINT TAB(35) "JUNE 1985"
201   PRINT :PRINT
202   PRINT TAB(28) "WITH THANKS TO ED SEEDHOUSE "
210   PRINT
220   PRINT : PRINT : GOSUB 12000
230     REM
240     REM
250     REM
260     REM
1000  DIM A(7)
1010  DEFSNG X
1020  DEFINT A-W
1030 CLS
1040 GOSUB 1250
1050 GOSUB 1300
1060 GOSUB 1390
1070 GOSUB 1430
1080 GOSUB 1250:PRINT
1090 PRINT "          ";
1100 FOR I = 1 TO 6
1110 NEXT
1120 PRINT
1130 GOSUB 1510
1140 GOTO 1060
1150 FOR I = 1 TO 6
1160 PRINT A(I);
1170 NEXT
1180  CLS: PRINT :PRINT :PRINT:PRINT :PRINT
1190  PRINT TAB(22) "THE WINNING(?) NUMBERS ARE":
1200  PRINT :PRINT
1210  PRINT TAB(9) A(1);SPC(5)A(2);SPC(5)A(3);SPC(5)A(4);SPC(5)A(5);SPC(5)A(6)
1220  PRINT :PRINT :PRINT
1230  PRINT TAB(30)"GOOD LUCK!!!"
1240 END
1250 LOCATE 5,16
1260  PRINT"               LOTTO 649"
1270 LOCATE 6,16
1280  PRINT"            NUMBER GENERATOR"
1290 RETURN
1300 LOCATE 10,16
1310 PRINT"          HIT <ENTER> TO START."
1320 Q$=INKEY$
1330 X=RND(1)
1340 IF Q$=CHR$(13) THEN 1370
1350 IF Q$=CHR$(27) THEN 1240
1360 GOTO 1320
1370 CLS
1380 RETURN
1390 FOR I = 1 TO 6
1400  A(I)=INT(RND(1)*49)+1
1410  GOSUB 1610
1420 NEXT
1430 FLAG = 0
1440  N = 5
1450 FOR I = 1 TO N
1460  IF A(I+1)<A(I) THEN FLAG = 1:GOSUB 1660
1470 NEXT I
1480  IF FLAG = 0 THEN 1500
1490  N=N-1:FLAG = 0: GOTO 1450
1500 RETURN
1510 IF INKEY$<>"" THEN 1510
1520 LOCATE 10,17
1530 PRINT"<ENTER> FOR MORE.          <ESC> TO END."
1540 Q$=INKEY$
1550 X=RND(1)
1560 IF Q$=CHR$(27)THEN 1180
1570 IF Q$=CHR$(13)THEN 1590
1580 GOTO 1540
1590 CLS
1600 RETURN
1610 IF I = 1 THEN 1650
1620  FOR J = 1 TO I-1
1630   IF A(I)=A(J) THEN A(I)= INT (RND(1)*49)+1:GOTO 1620
1640  NEXT J
1650 RETURN
1660 A(7)=A(I):A(I)=A(I+1):A(I+1)=A(7)
1670 RETURN
11000 END
12000 LOCATE 24,29
13000 PRINT "PRESS ANY KEY TO CONTINUE"
14000 B$ = INPUT$ (1)
15000 CLS : PRINT : PRINT : PRINT : PRINT
16000 RETURN
```
{% endraw %}

## MENU.BAS

{% raw %}
```bas
100   REM  MENU.BAS -- AUTOMATIC MENU GENERATOR  --  BY ROBERT YANKOWITZ
105   REM  THIS ADDITION TYPED BY CHRIS SPRATT FROM AN ARTICLE IN PC
106   REM  MAGAZINE - APRIL 2, 1985 - PAGE 232
110   REM
120   CLS:CLEAR:KEY OFF:DEFINT A-Z:DIM FIL$(100):PROG = 0:COLOR 0,7
130   PRINT TAB(28);"* * MASTER MENU PROGRAM * *";TAB(79);:COLOR 7,0:PRINT
135   PRINT
140   OPEN "I",2, "MENU.DIR"
150   IF EOF(2) THEN CLOSE:GOTO 220
160   INPUT #2,A$:IF INSTR(1,A$, "-") = 0 THEN 150
170   TEMP$=MID$(A$,10,3):IF TEMP$ <>"BAS" AND TEMP$ <> "REM" THEN 150
180   PROG = PROG+1:GOSUB 370:GOTO 150
190   REM
200   REM       *** PRINT MENU ***
210   REM
220   BREAK =INT(PROG/2+1)
230   FOR I = 1 TO PROG
240   IF I> BREAK THEN C = 50:R=I-BREAK+2:ELSE C=15:R=I+2
250   LOCATE R,C:COLOR 0,7:PRINT USING "##";I;:COLOR 7,0:PRINT CHR$(32);FIL$(I)
260   NEXT
270   LOCATE R+1,C:COLOR 0,7:PRINT USING "##";PROG+1;:COLOR 7,0:PRINT  "BASIC"
280   LOCATE R+2,C:COLOR 0,7:PRINT USING "##";PROG+2;:COLOR 7,0:PRINT  "DOS"
290   LOCATE BREAK+5,30:PRINT "SELECT PROGRAM TO RUN: ";
300   LINE INPUT PRO$:PRO#=VAL(PRO$):SP$=STRING$(LEN(PRO$),32)
310   IF PRO# <1 OR PRO# > PROG+2 THEN LOCATE BREAK+5,53:PRINT SP$;:GOTO 290
320   IF PRO#=PROG+1 THEN CLS:NEW ELSE IF PRO#= PROG + 2 THEN CLS:SYSTEM
330   RUN FIL$(PRO#):END
340   REM
350   REM   *** DECODE DIRECTORY INFORMATION ***
360   REM
370   NAM$=LEFT$(A$,8):SIZ=1
380   FOR I = 8 TO 1 STEP -1
390   IF MID$(NAM$,I,1)<>CHR$(32) THEN SIZ = I:I=1
400   NEXT
410   NAM$=LEFT$(NAM$,SIZ):EXT$=MID$(A$,10,3):FIL$(PROG)=NAM$+ "." +EXT$
420   RETURN
```
{% endraw %}

## MENU.DOC

{% raw %}
```


                          MENU.BAS
        
        
        This is a small program that when run from DOS 2.0 or above, by
    running AUTOMENU.BAT, will redirect your directory to MENU.DIR, 
    first piping it through the DOS SORT filter to place the files in 
    alphabetical order.  NOTE -- SORT.EXE  must be on the same disk 
    that holds AUTOMENU.BAT.
        
        The batch file also loads BASICA (must also be on disk) and 
    generates a menu which allows you to select which file you wish to 
    run (or create).  Only BAS or REM extensions are accepted, but 
    others may be added, by amending the program.      


```
{% endraw %}

## NOTES543.TXT

{% raw %}
```
Program name:          UTILITIES ECTERA
 
Author name:           Several authors
Address:               Given Below
 
Program Description:
 
  This disk is a wide assortment of miscellaneous programs capable of
  converting polar to rectangular coordinates, displaying time on the
  screen, displaying how many days since January 1st for the year and
  more. Some of these programs include :
 
  1. SIMPLIFILE - for documenting files on a disk with options to sort
                  the files by size, name and several other choices
 
  2. F          - program to hide/unhide, protect/unprotect, copy and
                  backup files as well
                  Author : Bill Neidert            Donation: $ 30
                  Address: 1225 Via Balboa, Mesquite, TX 75150
 
  3. SEARCH     - a general purpose utility to replace the DOS PATH
     Version 1    command and capable of handling all types of files
                  Author : Arborsoft Systems       Donation: $ 15
                  Address: Ann Arbor, Michigan 48106
 
  4. COVER      - prints sorted directory for a discette
 
  5. GLV12      - Simple double-entry general ledger system
     Vers 1.2     Author : Datawest Systems Inc.   Donation: $ 50 Can.
                  Address: 307 Goldstream Ave., Victoria, BC V9B 2W4
 
  6. BLATHER    - program to send and receive data files from a remote
                  service with option to echo data to the printer
                  Author : Mike Baker              Donation: ?
                  Address: 4030 Borden St., Victoria, BC V8X 2E9
```
{% endraw %}

## NPAD.BAS

{% raw %}
```bas
100  ' NPAD.BAS -- BY STEVEN HOLZER --  CREATED NPAD.COM notepad
110  '
120  T!=0:FOR N=1 TO 556:READ B%:T!=T!+B%:NEXT    ' VERIFY DATA
130  IF T!=49483! THEN 140 ELSE PRINT "CHECK TYPING AND REDO!":END
140  RESTORE:OPEN "NPAD.COM" AS #1 LEN = 1        ' OPEN NPAD.COM
150  PRINT "CREATING NPAD.COM"                    ' PRINT MESSAGE #1
160  FIELD #1, 1 AS BYTE.$                        ' SPECIFY WHAT GOES IN
170  FOR N = 1 TO 556 :READ BYTE.%                ' 556 BYTES TOTAL
180  IF BYTE.%<256 THEN 220                       ' NON-SPACE DATA
190  LSET BYTE.$ = CHR$(32)                       ' PUT IN 499 SPACES
200  FOR I = 1 TO BYTE.%:PUT #1:NEXT I            ' THAT WILL HOLD WORDS
210  GOTO 240                                     ' CONTINUE
220  LSET BYTE.$ = CHR$(BYTE.%)                   ' LOAD BYTE INTO BUFFER
230  PUT #1                                       ' WRITE BUFFER OUT
240  NEXT N:CLOSE #1                              ' CLOSE FILE
250  PRINT "NPAD.COM CREATED"                     ' AND YOU'RE DONE
270  END
280  DATA  233,   210,   3,   0,   0,   95,   499,   0
290  DATA  0,     0,     0,   0,   0,  112,   0,     0
300  DATA  0,     0,     0,   0,   0,    0,   0,     0
310  DATA  80,    83,    81,  82,  87,  86,   30,    6
320  DATA  156,   46,    255, 30,  6,   3,    187,   64
330  DATA  0,     142,   219, 139, 30,  28,   0,     59
340  DATA  30,    26,    0,   116, 60,  131,  235,   2
350  DATA  131,   251,   30,  115, 3,   187,  62,    0
360  DATA  139,   23,    129, 250, 14,  49,   117,   68
370  DATA  137,   30,    28,  0,   46,  247,  22,    3
380  DATA  1,     46,    131, 62,  3,   1,    0,     117
390  DATA  27,    46,    198, 6,   255, 2,    7,     46
400  DATA  199,   6,     251, 2,   250, 0,    141,   6
410  DATA  132,   4,     46,  163, 2,   3,    232,   72
420  DATA  1,     233,   158, 0,   46,  199,  6,     251
430  DATA  2,     250,   0,   141, 6,   93,   4,     46
440  DATA  163,   2,     3,   232, 51,  1,    232,   146
450  DATA  0,     233,   134, 0,   46,  247,  6,     3
460  DATA  1,     1,     0,   116, 220, 137,  30,    28
470  DATA  0,     129,   250, 0,   83,  117,  31,    187
480  DATA  249,   0,     46,  198, 135, 5,    1,     32
490  DATA  75,    117,   247, 46,  198, 6,    5,     1
500  DATA  95,    46,    199, 6,   249, 2,    0,     0
510  DATA  232,   96,    0,   235, 85,  144,  129,   250
520  DATA  8,     14,    117, 33,  46,  139,  30,    249
530  DATA  2,     131,   251, 0,   126, 17,   46,    198
540  DATA  135,   5,     1,   32,  46,  198,  135,   4
550  DATA  1,     95,    46,  255, 14,  249,  2,     232
560  DATA  57,    0,     235, 46,  144, 129,  250,   13
570  DATA  28,    117,   9,   232, 72,  0,    232,   42
580  DATA  0,     235,   31,  144, 46,  139,  30,    249
590  DATA  2,     129,   251, 249, 0,   125,  16,    46
600  DATA  136,   151,   5,   1,   46,  198,  135,   6
610  DATA  1,     95,    46,  255, 6,   249,  2,     232
620  DATA  9,     0,     7,   31,  94,  95,   90,    89
630  DATA  91,    88,    207, 80,  46,  198,  6,     255
640  DATA  2,     112,   46,  199, 6,   251,  2,     0
650  DATA  0,     141,   6,   132, 4,   46,   163,   2
660  DATA  3,     232,   133, 0,   88,  195,  46,    129
670  DATA  62,    249,   2,   225, 0,   125,  43,    46
680  DATA  139,   30,    249, 2,   139, 195,  61,    24
690  DATA  0,     116,   20,  124, 5,   45,   25,    0
700  DATA  235,   244,   46,  198, 135, 5,    1,     32
710  DATA  46,    255,   6,   249, 2,   235,  224,   46
720  DATA  198,   135,   6,   1,   95,  46,   255,   6
730  DATA  249,   2,     195, 82,  190, 2,    0,     46
740  DATA  139,   22,    4,   3,   236, 168,  1,     117
750  DATA  251,   236,   168, 1,   116, 251,  38,    138
760  DATA  37,    71,    78,  131, 254, 0,    116,   7
770  DATA  46,    136,   167, 5,   1,   235,  229,   67
780  DATA  90,    195,   82,  46,  138, 167,  5,     1
790  DATA  190,   2,     0,   46,  139, 22,   4,     3
800  DATA  236,   168,   1,   117, 251, 236,  168,   1
810  DATA  116,   251,   38,  136, 37,  46,   138,   38
820  DATA  255,   2,     71,  78,  117, 234,  67,    90
830  DATA  195,   187,   0,   176, 142, 195,  46,    139
840  DATA  62,    0,     3,   46,  3,   62,   253,   2
850  DATA  46,    139,   30,  251, 2,   185,  10,    0
860  DATA  186,   25,    0,   46,  255, 22,   2,     3
870  DATA  74,    117,   248, 46,  3,   62,   253,   2
880  DATA  226,   238,   195, 184, 0,   0,    142,   216
890  DATA  161,   36,    0,   46,  163, 6,    3,     161
900  DATA  38,    0,     46,  163, 8,   3,    199,   6
910  DATA  36,    0,     10,  3,   140, 14,   38,    0
920  DATA  180,   15,    205, 16,  128, 236,  25,    208
930  DATA  228,   46,    136, 38,  253, 2,    46,    199
940  DATA  6,     4,     3,   186, 3,   168,   4,    117
950  DATA  14,    46,    199, 6,   0,   3,     0,    128
960  DATA  46,    199,   6,   4,   3,   218,   3,    186
970  DATA  213,   4,     205, 39
```
{% endraw %}

## NPAD.DOC

{% raw %}
```


                             NPAD.COM
        
        
        This is a small program that once invoked by typing NPAD.COM 
    at the DOS A> prompt, and then hitting Ctrl-N, causes a small
    note-pad window in reverse video to appear in the upper right-hand
    corner of the screen.  Whatever you type next goes onto the pad.  
    Typing Ctrl-N again will turn the window off.  The best part of 
    NPAD.COM is that you can type Ctrl-N at any time - during an 
    editor session or while filling in your spreadsheet.
        
        This process removes the Ctrl-N key from general use which 
    could prove to be unpopular with certain users but it shouldn't 
    hurt most users.
        
        The general key definitions are:
        
                 CTRL-N  turns notepad window on or off

                 DEL erases entire window contents
        
        
        This program was featured in PC  MAGAZINE  December 25, 1984, 
    pages 273 - 282 and was created by  STEVE HOLZNER.  For 
    additional information,  please consult magazine. 
        
        This version adapted by CHRIS SPRATT, Victoria, B. C.  June 
    7th, 1985.
         
        The three programs included are:
        
        
      NPAD.BAS  the  BASIC source  program that created  NPAD.COM.
      NPAD.COM  the actual notepad program invoked in DOS.
      NPAD.DOC  this short description of the program.


                             END
        

```
{% endraw %}

## POLRECT.BAS

{% raw %}
```bas
10   CLS
15   KEY OFF
20   REM
30   PRINT : PRINT : PRINT
40   PRINT TAB(28) " AN ASTRONOMY PROGRAM"
45   PRINT : PRINT
50   PRINT TAB(15) "-------- POLAR TO RECTANGULAR COORDINATES --------"
55   PRINT : PRINT :
60   PRINT TAB(30) " BY CHRIS SPRATT"
65   PRINT
70   PRINT TAB(34) "OCT. 1984"
75   PRINT
80   PRINT : PRINT :
90   LOCATE 24,25
91   PRINT "PRESS ANY KEY TO CONTINUE"
92   B$ = INPUT$ (1)
95   CLS : PRINT : PRINT : PRINT : PRINT
100  REM
110  DEGRADE = 3.14159265#/180 : PIT = 180/3.14159265#
120  PRINT TAB(35) : INPUT "R";R
130  PRINT :PRINT
140  PRINT TAB(25): INPUT " ANGLE (DEGREES)";ANGLE
141  X = R* COS(ANGLE * DEGRADE)
142  Y = R* SIN(ANGLE * DEGRADE)
150  PRINT :PRINT :
160  PRINT TAB(35) "X = ";X
170  PRINT :PRINT
180  PRINT TAB(35) "Y = ";Y
200  PRINT :PRINT :PRINT
210  PRINT TAB(25) : INPUT "DO YOU WANT ANOTHER  Y/N";A$
220  IF A$ = "Y" THEN GOTO 95 ELSE 230
230  END
```
{% endraw %}

## PORE.DOC

{% raw %}
```


                           PORE.COM
        
        This short modification of MORE.COM allows a printout of a 
    listing to pause every 55 lines.  the phrase ---more --- also is 
    eliminated on the printout.  Will work for DOS 2.0 and 2.1.
                
        When you need a listing of a BASIC program (must be saved in 
    ASCII) or any ASCII file from DOS,you run the batch file PMOR.BAT.
        
                    A> PMOR [filename.ext] <CR>
    
        After listing 54 lines of the file, the printer pauses.  A
    quick Off-Line/Form-Feed/On-Line sequence and a press of any key, 
    will start the next page.

        If you don't wish to run the batch file you enter the 
    following:

                    A> TYPE [FILENAME.EXT] | PORE>LPT1:<CR>

        Use the correct device name (if different) in place of LPT1:.
 
        
        These programs PORE.COM and PMOR.BAT were culled from PC 
    MAGAZINE January 22, 1985 pages 318 - 319, from an idea submitted 
    by John Slocum, Brentwood, Missouri, with amendments by Paul 
    Somerson, editor of the USER-USER column.  This short 
    documentation is submitted by:
                
                     Chris Spratt
                     June, 1985
                     Victoria, B. C.
```
{% endraw %}

## PRECESS.BAS

{% raw %}
```bas
10    CLS
20    REM
30    PRINT : PRINT : PRINT:
40    PRINT TAB(15)"================== PRECESS.BAS ======================"
50    PRINT
60    PRINT TAB(22) " ADAPTED  BY CHRIS SPRATT - JUNE, 1985 "
70    REM
80    PRINT  TAB(17) " FROM A PROGRAM IN ASTRONOMY MAGAZINE, AUGUST 1984"
90    PRINT TAB(23) " WRITTEN BY J. P. POOL AND R. L. BERRY"
100   GOSUB 1160
110   CLS: PRINT : PRINT : PRINT : PRINT:
120   REM
130   REM
140   REM
150       PRINT TAB(20) "THIS PROGRAM COMPUTES RIGOROUS PRECESSION"
160       PRINT TAB(20) "FROM A STRING REPRESENTATION OF RA AND DEC"
170       PRINT TAB(20) "AND RETURNS A STRING REPRESENTATION OF THE"
180       PRINT TAB(30) "PRECESSED COORDINATES."
190   REM
200   GOSUB 1160
210       R = .01745329#
220   REM
230   REM  ====== COMPUTE THE CONSTANTS OF PRECESSION ======
240   CLS: PRINT : PRINT:PRINT
250   PRINT TAB(20) :  INPUT  "INITIAL EPOCH";IN
260   PRINT
270   PRINT TAB(20) :  INPUT  "  FINAL EPOCH";FI
280   PRINT :PRINT :PRINT
290       T1 = FI - IN
300       T = T1/100
310       Z0 = ((2305.65*T) + (.302*T*T) + (.018 *T*T*T))
320       Z1 = R*(Z0/3600)
330       Z = (Z0+(.791*T*T))/3600
340       TH = R*(((2003.829#*T)-(.426*T*T)-(.042*T*T*T))/3600)
350   REM
360   REM  ==== INPUT COORDINATES AND PROPER MOTION ====
370   REM
380       PRINT TAB(20)"INITIAL RA:HH MM SS.F"
390       PRINT TAB(20): INPUT "         ";RA$
400       PRINT TAB(20)"INITIAL DC:+DD MM SS"
410       PRINT TAB(20): INPUT "         ";DEC$
420   PRINT TAB(20) :INPUT "PROPER MOTION: <MUra,MUdec>";MURA,MUDC
430   CLS
440       MURA = T1*15 * MURA/3600:MUDC = T1 *MUDC/3600
450       IRA = VAL(MID$(RA$,1,2))
460       IRA = IRA + VAL(MID$(RA$,4,2))/60
470       IRA = IRA + VAL(MID$(RA$,7,4))/3600
480       IRA = 15*IRA
490       IDC = VAL(MID$(DEC$,2,2))
500       IDC = IDC+VAL(MID$(DEC$,5,2))/60
510       IDC = IDC+VAL(MID$(DEC$,8,2))/3600
520       IF MID$(DEC$,1,1) ="-" THEN IDC = -IDC
530       AL0 = R*(IRA+MURA)
540       DL0 = R*(IDC+MUDC)
550   REM
560   REM   =========== PRECESS THE COORDINATES ==========
570   REM
580       A = COS(DL0)*SIN(AL0+Z1)
590       B = (COS(TH)*COS(DL0)*COS(AL0+Z1))-(SIN(TH)*SIN(DL0))
600       C = (SIN(TH)*COS(DL0)*COS(AL0+Z1))+(COS(TH)*SIN(DL0))
610       ALPMZ = ATN(A/B)/R
620       AL = (ALPMZ + Z)/15
630       IF B<0 AND A>0 THEN AL = AL+ 12
640       IF B<0 AND A<0 THEN AL = AL+ 12
650       IF B>0 AND A<0 THEN AL = AL+ 24
660       DL = ATN(C/SQR(1-C*C))/R
670   REM
680   REM  ==== CONVERT DECIMAL RA TO HH MM SS.F STRING ====
690   REM
700       RAH = FIX(AL)
710       RAM = INT(60*(AL-RAH))
720       RAS = INT(3600*(AL-RAH-(RAM/60)))
730       RAF = INT(36000!*(AL-RAH-(RAM/60)-(RAS/3600)))
740       RAH$ = STR$(RAH):RAM$ = STR$(RAM)
750       RAS$ = STR$(RAS) : RAF$ = STR$(RAF)
760       IF RAH<10 THEN MID$(RAH$,1)= "0"
770       IF LEN(RAH$) = 3 THEN RAH$ = MID$(RAH$,2,2)
780       IF RAM<10 THEN MID$(RAM$,1)= "0"
790       IF LEN(RAM$)=2 THEN RAM$=" "+RAM$
800       IF RAS<10 THEN MID$(RAS$,1) = "0"
810       IF LEN(RAS$) = 2 THEN RAS$ = " "+RAS$
820       PRA$ = RAH$+RAM$+RAS$+RAF$
830       MID$(PRA$,9)="."
840   REM
850   REM  ==== CONVERT DECIMAL DEC TO DD MM SS STRING ====
860   REM
870       IF DL<0 THEN SG$="-" ELSE SG$ = "+"
880       DL = ABS(DL)
890       DD = FIX(DL)
900       DM = INT(60*(DL-DD))
910       DS = INT(3600*(DL-DD-(DM/60)))
920       DD$ = STR$(DD) : DM$ = STR$(DM):DS$ = STR$(DS)
930       IF DD<10 THEN MID$(DD$,1) = "0"
940       IF LEN(DD$) = 3 THEN DD$ = MID$(DD$,2,2)
950       IF DM<10 THEN MID$(DM$,1) = "0"
960       IF LEN(DM$)=2 THEN DM$ = " "+DM$
970       IF DS<10 THEN MID$(DS$,1) = "0"
980       IF LEN(DS$) = 2 THEN DS$ = " "+DS$
990       PDC$ = SG$ + DD$ + DM$ + DS$
1000   REM
1010   REM   ==== PRINT EPOCHS AND COORDINATE STRINGS ====
1020   REM
1030   PRINT : PRINT : PRINT : PRINT: PRINT:
1040       PRINT TAB(20)  "EPOCH";IN;RA$+ "  "+DEC$
1050       PRINT : PRINT
1060       PRINT TAB(20)  "EPOCH";FI;PRA$+"  "PDC$
1070       PRINT : PRINT
1080       PRINT TAB(20):INPUT "ANOTHER DATE Y/N" ;A$
1090       IF A$ = "Y" THEN GOTO 1100 ELSE 1150
1100       PRINT :PRINT :PRINT
1110       PRINT TAB(20):
1120       INPUT "ANOTHER? <S>AME OR <N>EW EPOCH" ; ANS$
1130       IF ANS$ = "S" OR ANS$ = "s" THEN GOTO 360
1140       IF ANS$ = "N" OR ANS$ = "n" THEN GOTO 240
1150       END
1160  LOCATE 24,25:PRINT "PRESS ANY KEY TO CONTINUE"
1170       IF INKEY$ = "" THEN 1170
1180       RETURN
```
{% endraw %}

## RANDOM.BAS

{% raw %}
```bas
10   INPUT "NUMBER OF BITS";BITS
20   INPUT "SEEDS";A,B
30   MAX=2^BITS-1
40   A=2*A:B=2*B
50   IF A>MAX THEN A = A-MAX
60   IF B>MAX THEN B=B-MAX
70   C = A+B:IF C>MAX THEN C = C-(MAX+1)
80   C=2*C:IF C>MAX THEN C=C-MAX
90   PRINT C
100  A=B:B=C
110  GOTO 70
```
{% endraw %}

## RECTPOL.BAS

{% raw %}
```bas
10   CLS
15   KEY OFF
20   REM
30   PRINT : PRINT : PRINT
40   PRINT TAB(28) " AN ASTRONOMY PROGRAM"
45   PRINT : PRINT
50   PRINT TAB(15) "-------- RECTANGULAR TO POLAR COORDINATES --------"
55   PRINT : PRINT :
60   PRINT TAB(30) " BY CHRIS SPRATT"
65   PRINT
70   PRINT TAB(34) "OCT. 1984"
75   PRINT
80   PRINT : PRINT :
90   LOCATE 24,25
91   PRINT "PRESS ANY KEY TO CONTINUE"
92   B$ = INPUT$ (1)
95   CLS : PRINT : PRINT : PRINT : PRINT
100  PIT = 180/3.14159265#
110  PRINT TAB(35) : INPUT  "X";X
120  PRINT
130  PRINT TAB(35) : INPUT  "Y";Y
140  PRINT :PRINT :PRINT :PRINT
145  R = SQR(X^2 + Y^2)
150  ANGLE = ATN(Y/X)
160  PRINT TAB(24) "MAGNITUDE R = ";R
170  PRINT :PRINT
180  PRINT TAB(20) "ANGLE (RADIANS) = ";ANGLE
190  PRINT :PRINT
200  ANGLE = ANGLE * PIT
210  PRINT TAB(20) "ANGLE (DEGREES) = ";ANGLE
220  PRINT :PRINT :PRINT
230  PRINT TAB(22) : INPUT "DO YOU WANT ANOTHER Y/N"; A$
240  IF A$ = "Y" THEN GOTO 95 ELSE 250
250  END
```
{% endraw %}

## SEARCH.DOC

{% raw %}
```


 
 
                                   SEARCH
 
                                 Version 1.0
                                December 1984
 
 
                Copyright (C) 1984 by Arborsoft Systems, Inc.
                  P.O. Box 4599, Ann Arbor, Michigan 48106

 
 
 
                            * General Description *
 
 
      SEARCH is an extremely valuable utility program for anyone who uses
      DOS 2.0 through 3.0 with subdirectories on a fixed disk.
 
      SEARCH is a general purpose replacement for the DOS PATH command but
      it is much more powerful and useful than PATH.  Unlike PATH, which is
      limited to batch and executable files, SEARCH allows a user to access
      files of all types.  SEARCH works with arbitrary programs on arbitrary
      files.  Data files, overlay files, help files, batch files, executable
      files, text files, program files, object files and library files all
      become accessible with SEARCH.
 
      Once SEARCH is loaded, it remains resident and occupies approximately
      1K of memory.  SEARCH is compatible with versions 2.0 through 3.0 of
      both PC-DOS and MS-DOS.
 
      SEARCH's command syntax is similar to PATH's.  The SEARCH list is set
      with a command of the form SEARCH=[d:]path[[;[d:]...].  SEARCH with no
      arguments displays the current SEARCH list.  SEARCH followed by a
      semicolon clears the current SEARCH list.  In addition, SEARCH will be
      deactivated (but will retain its current SEARCH list) if SEARCH /D is
      issued.  SEARCH /A will activate a previously deactivated SEARCH.
      Simple DOS-style command line editing of the current SEARCH list is
      available via SEARCH /E.  Finally, SEARCH /H produces the following
      list of available SEARCH functions:
 
 
            Set.......................  SEARCH [d:]path[[;[d:]path]...]
            Clear.....................  SEARCH;
            Display...................  SEARCH
            Activate..................  SEARCH /A
            Deactivate................  SEARCH /D
            Edit (with function keys).  SEARCH /E
            Help......................  SEARCH /H
            License Information.......  SEARCH /L










 
                                * Usage Notes *
 
 
       (1)  It is advisable for users to make a PATH assignment to the
            directory containing SEARCH.COM in their AUTOEXEC.BAT files,
            for example, PATH=\ with SEARCH.COM on the root directory,
            or PATH=\BIN with SEARCH.COM on \BIN.  Thus, SEARCH can always
            be found even if disabled or undefined.
 
       (2)  With the single exception noted in (1), users of SEARCH can
            ignore the DOS PATH command and rely strictly on SEARCH.
 
       (3)  If both a SEARCH list and a PATH are specified, the SEARCH list
            specification will always be attempted first.  The PATH will not
            be invoked unless the SEARCH is unsuccessful and then just for
            batch or executable files.
 
       (4)  The SEARCH /E facility will not behave properly if another
            program has changed the normal DOS interpretation of the function
            keys.
 
 
 
               * Incompatibilities with SEARCH Version 1.0 *
 
 
       (1)  SEARCH is not fully compatible with with IBM's APL.  Users may
            have to disable SEARCH to use some of the APL features.
 
       (2)  In general, if a program appears to be incompatible with SEARCH,
            a user can 1) issue SEARCH /D (to deactivate SEARCH); 2) run the
            program; 3) issue SEARCH /A (to reactivate SEARCH).
 
       (3)  Please report any incompatibilities or other problems with
            SEARCH to Arborsoft Systems, Inc.  SEARCH has been tested with
            many different programs running with DOS 2.0 through DOS 3.0
            on a variety of machines.  The only known incompatibility is
            with IBM's APL.
 
 
 
                 * Distribution and Licensing Information *
 
 
      SEARCH is a proprietary product of Arborsoft Systems, Inc.  It is
      distributed on a user-supported basis.  Copying and redistribution
      of SEARCH and its documentation are encouraged.  A license to copy
      and use SEARCH for a two-week trial period is automatically granted.
      Satisfied users of SEARCH are requested to pay a $15 license fee.
      Corporations and other organizations may pay a $100 license fee for
      unlimited business or personal use of SEARCH.
 
      SEARCH will be updated to incorporate suggested enhancements and
      improvements and to maintain compatibility with future DOS versions.
      A licensed user of SEARCH will receive a receipt, a registration
      number, and a copy of the next release of SEARCH, which is due to be
      distributed in mid-1985.
 
      Payment should made to:
 
 
                           Arborsoft Systems, Inc.
                           P.O. Box 4599
                           Ann Arbor, Michigan 48106
 



```
{% endraw %}

## SUNNY.BAS

{% raw %}
```bas
10     CLS
20     PRINT :  PRINT : PRINT
30     PRINT   TAB( 20)"--------------------------------------"
40     PRINT   TAB( 20)"  SUNRISE, SUNSET, TWILIGHT OF SUN    "
50     PRINT   TAB( 20)"--------------------------------------"
60     PRINT :  PRINT
70     PRINT   TAB( 26) " AN ASTRONOMY PROGRAM"
80     PRINT
90     PRINT   TAB( 18) " ADAPTED BY CHRIS SPRATT - JUNE, 1985
100     REM
110    PRINT   TAB( 21) " FROM A PROGRAM BY WILLIAM C. BELL"
115    PRINT TAB(17) "PUBLISHED IN ASTRONOMY MAGAZINE - APRIL, 1984"
120     LOCATE 24, 25:PRINT  "PRESS ANY KEY TO CONTINUE"
130       IF INKEY$ = "" THEN 130
140     CLS:PRINT :PRINT :PRINT
150  REM  PURPOSE --
160  REM
170  REM  THIS PROGRAM GIVES THE TIME OF SUNRISE, SUNSET, AND
180  REM  TWILIGHT  (ASTRONOMICAL, NAUTICAL, AND CIVIL)
190  REM  TO WITHIN A MINUTE OR TWO DURING THE SECOND HALF OF
200  REM  THE TWENTIETH CENTURY.
210  REM
220  REM  INPUTS --
230  REM
240  REM  LATITUDE IN DEGREES, MIMUTES, AND SECONDS.
250  REM  NORTH IS POSITIVE.
260  REM  EXAMPLE: 30.0028 REPRESENTS 30
270  REM  DEGREES, 00 MINUTES, 28 SECONDS
280  REM  NORTH LATITUDE.
290  REM
300  REM  LONGITUDE IN DEGREES, MINUTES, AND SECONDS,
310  REM  WEST IS POSITIVE.
320  REM  EXAMPLE: 90.1109 REPRESENTS 90 DEGREES,
330  REM  11 MINUTES, 09 SECONDS, WEST LONGITUDE.
340  REM
350  REM  TIME ZONE IN HOURS AND MINUTES THAT ARE ADDED TO WALL
360  REM  CLOCK TIME TO YIELD UNIVERSAL TIME.
370  REM  IN THE 48 CONTIGOUS UNITED STATES AND CANADA,
380  REM  SEE TABLE BELOW.
390  REM
400  REM                   STANDARD  DAYLIGHT
410  REM
420  REM    EASTERN          5.00      4.00
430  REM    CENTRAL          6.00      5.00
440  REM    MOUNTAIN         7.00      6.00
450  REM    PACIFIC          8.00      7.00
460  REM
470  REM  YEAR (1951 THRU 2000)
480  REM
490  REM  MONTH (1 THRU 12)
500  REM
510  REM  DAY (1 THRU 31)
520  REM
530  REM  OUTPUTS --
540  REM
550  REM  OUTPUTS ARE GIVEN IN HOURS AND MINUTES ON A 24
560  REM  HOUR BASIS, EXAMPLE: 6.25 REPRESENTS 6:25 A.M.,
570  REM  AND 18.25 REPRESENTS 6:25 P.M.
580  REM
590  REM  A ZERO OUTPUT INDICATES THAT THE PHENOMENON
600  REM  DOES NOT OCCUR ON THE SPECIFIED DATE,
610  REM  E.G., THE SUN DOES NOT SET IN MID-SUMMER AT
620  REM  HIGH LATITUDES.
630  REM
640  REM  SAMPLE --
650  REM
660  REM  LATITUDE
670  REM  ? 30
680  REM  LONGITUDE
690  REM  ? 90
700  REM  TIME ZONE
710  REM  ? 5
720  REM  YEAR
730  REM  ? 1983
740  REM  MONTH
750  REM  ? 5
760  REM  DAY
770  REM  ? 19
780  REM
790  REM  A DAWN  4.33
800  REM  N DAWN  5.06
810  REM  C DAWN  5.38
820  REM  SUNRIS  6.04
830  REM  SUNSET  19.49
840  REM  C DUSK  20.15
850  REM  N DUSK  20.47
860  REM  A DUSK  21.21
870  REM
880  REM - CONSTANTS
890  REM
900    LET A=1.5708
910    LET B=3.14159
920    LET C=4.71239
930    LET D=6.28319
940  REM
950  REM - INPUTS
960  REM
970    CLS:PRINT :PRINT :PRINT
980    PRINT  TAB( 20) "LATITUDE";
990    INPUT Z
1000    GOSUB 1850
1010    LET E=Z*.0174533
1020  REM
1030    PRINT  TAB( 20) "LONGITUDE";
1040    INPUT Z
1050    GOSUB 1850
1060    LET F=Z*.0174533
1070  REM
1080    PRINT  TAB( 20) "TIME  ZONE";
1090    INPUT Z
1100    GOSUB 1850
1110    LET G=Z*.261799
1120  REM
1130    PRINT  TAB( 21) "YEAR";
1140    INPUT H
1150  REM
1160    PRINT  TAB( 20) "MONTH";
1170    INPUT I
1180  REM
1190    PRINT  TAB( 22) "DAY";
1200    INPUT J
1210  REM
1220  REM - DAY OF YEAR
1230  REM
1240    LET K=INT((I+9)/12)
1250    LET X=H/4
1260    LET Y=INT(X)
1270    LET Z=X-Y
1280    IF Z=0 THEN 1300
1290    LET K=K*2
1300    LET H=INT(275*I/9)
1310    LET H=H+J-K-30
1320  REM
1330  REM - RISING PHENOMENA
1340  REM
1350    PRINT  "  "
1360  REM
1370    LET I=0
1380    LET J=A
1390    GOSUB 1990
1400  REM
1410    LET R=-.309017
1420    GOSUB 2520
1430    PRINT  TAB( 18) "A DAWN ";V
1440  REM
1450    LET R=-.207912
1460    GOSUB 2520
1470    PRINT  TAB( 18) "N DAWN ";V
1480  REM
1490    LET R=-.104528
1500    GOSUB 2520
1510    PRINT  TAB( 18)  "C DAWN ";V
1520  REM
1530    LET R=-.0145439
1540    GOSUB 2520
1550    PRINT  TAB( 18)  "SUNRIS ";V
1560  REM
1570  REM - SETTING PHENOMENA
1580  REM
1590    LET I=1
1600    LET J=C
1610    GOSUB 1990
1620  REM
1630    LET R=-.0145439
1640    GOSUB 2520
1650    PRINT  TAB( 18)   "SUNSET ";V
1660  REM
1670    LET R=-.104528
1680    GOSUB 2520
1690    PRINT  TAB( 18)   "C DUSK ";V
1700  REM
1710    LET R=-.207912
1720    GOSUB 2520
1730    PRINT  TAB( 18)   "N DUSK ";V
1740  REM
1750    LET R=-.309017
1760    GOSUB 2520
1770    PRINT  TAB( 18)   "A DUSK ";V
1780  REM
1790    PRINT :PRINT
1800    PRINT TAB(15): INPUT "DO YOU WANT ANOTHER DATE Y/N ";A$
1810    IF A$ = "Y" THEN   GOTO  970  ELSE 3080
1820  REM
1830  REM - SEXAGESIMAL TO DECIMAL
1840  REM
1850    LET W=1
1860    IF Z>=0 THEN 1890
1870    LET W=-1
1880    LET Z=ABS(Z)
1890    LET X=Z+.00005
1900    LET X = INT(Z)
1910    LET Z=(Z-X)*100
1920    LET Y=INT(Z)
1930    LET Z=(Z-Y)*100
1940    LET Z=(X+Y/60+Z/3600)*W
1950    RETURN
1960  REM
1970  REM - APPROXIMATE TIME
1980  REM
1990    LET K=H+((J+F)/D)
2000  REM
2010  REM - SOLAR MEAN ANOMALY
2020  REM
2030    LET L=K*.017202
2040    LET L=L-.0574039
2050  REM
2060  REM - SOLAR TRUE LONGITUDE
2070  REM
2080    LET Z=SIN(L)
2090    LET M=L+.0334405*Z
2100    LET Z=SIN(2*L)
2110    LET M=M+3.49066E-04*Z
2120    LET M=M+4.93289
2130  REM
2140  REM - QUADRANT DETERMINATION
2150  REM
2160    LET Z=M
2170    GOSUB 3010
2180    LET M=Z
2190    LET X=M/A
2200    LET Y=INT(X)
2210    LET Z=X-Y
2220    IF Z<>0 THEN 2240
2230    LET M=M+4.84814E-06
2240    LET N=2
2250    IF M>C THEN 2320
2260    LET N=1
2270    IF M>A THEN 2320
2280    LET N=0
2290  REM
2300  REM - SOLAR RIGHT ASCENSION
2310  REM
2320    LET P=SIN(M)/COS(M)
2330    LET P=ATN(.91746*P)
2340  REM
2350  REM - QUADRANT ADJUSTMENT
2360  REM
2370    IF N=0 THEN 2450
2380    IF N=2 THEN 2410
2390    LET P=P+B
2400    GOTO 2450
2410    LET P=P+D
2420  REM
2430  REM - SOLAR DECLINATION
2440  REM
2450    LET Q=.39782*SIN(M)
2460    LET Q=Q/SQR(-Q*Q+1)
2470    LET Q=ATN(Q)
2480    RETURN
2490  REM
2500  REM - COORDINATE CONVERSION
2510  REM
2520    LET S=R-(SIN(Q)*SIN(E))
2530    LET S=S/(COS(Q)*COS(E))
2540  REM
2550  REM - NULL PHENOMENON
2560  REM
2570    LET Z=ABS(S)
2580    IF Z<=1 THEN 2640
2590    LET V=0
2600    RETURN
2610  REM
2620  REM - ADJUSTMENT
2630  REM
2640    LET S=S/SQR(-S*S+1)
2650    LET S=-ATN(S)+A
2660    IF I=1 THEN 2710
2670    LET S=D-S
2680  REM
2690  REM - LOCAL APPARENT TIME
2700  REM
2710    LET Z=.0172028*K
2720    LET T=S+P-Z-1.73364
2730  REM
2740  REM - UNIVERSAL TIME
2750  REM
2760    LET U=T+F
2770  REM
2780  REM - WALL CLOCK TIME
2790  REM
2800    LET V=U-G
2810  REM
2820  REM - DECIMAL TO SEXAGESIMAL
2830  REM
2840    LET Z=V
2850    GOSUB 3010
2860    LET Z=Z*3.81972
2870    LET V=INT(Z)
2880    LET W=(Z-V)*60
2890    LET X=INT(W)
2900    LET Y=W-X
2910    IF Y<.5 THEN 2930
2920    LET X=X+1
2930    IF X<60 THEN 2960
2940    LET V=V+1
2950    LET X=0
2960    LET V=V+X/100
2970    RETURN
2980  REM
2990  REM - NORMALIZATION
3000  REM
3010    IF Z>=0 THEN 3040
3020    LET Z=Z+D
3030    GOTO 3010
3040    IF Z<D THEN 3070
3050    LET Z=Z-D
3060    GOTO 3040
3070    RETURN
3080    END
```
{% endraw %}

## TIMEAL.BAS

{% raw %}
```bas
10    CLS
20    REM
30    PRINT :PRINT :PRINT :PRINT
40    PRINT  TAB(29) "AN ASTRONOMY PROGRAM"
45    PRINT  : PRINT
50    PRINT  TAB(18) "###### TIME, ALTITUDE & AZIMUTH ,J.D. ###### "
55    PRINT  : PRINT
60    PRINT  TAB(30) " BY CHRIS SPRATT"
65    PRINT
70    PRINT  TAB(34) "SEPT 1984"
75    PRINT
80    PRINT  : PRINT : LOCATE 24,25
85    PRINT "PRESS ANY KEY TO CONTINUE"
90    IF INKEY$ = "" THEN 90
95    CLS : PRINT  : PRINT :PRINT :PRINT
100   REM   ALTITUDE AND AZIMUTH
110   REM
120      P = 3.14159265#: R1 = P/180
130      GOTO 490
131     PRINT
135     PRINT: PRINT TAB(20) "OBJECT OF INTEREST'S"
136     PRINT :
140      PRINT TAB(20) : INPUT  "R A (H,M,S) ";A$,A2,A3 : PRINT
150      GOSUB 400: R = A*15 * R1
160      PRINT TAB(20):  INPUT  "DEC (D,M,S) ";A$,A2,A3 :PRINT
170      GOSUB 400: D = A*R1
180      PRINT TAB(20) : INPUT  "LAT, LONG   ";B,L : PRINT
190      B = B*R1: L = L*R1
196      T = ST*15 *R1
200      T5 = T-R+L:  REM LHA
210      S1 = SIN(B)*SIN(D)
220      S1 = S1+COS(B)*COS(D)*COS(T5)
230      C1 = 1 -S1*S1
240      IF C1>0 THEN C1 =SQR(C1)
250       IF C1 <=0 THEN 270
260       H = ATN(S1/C1): GOTO 280
270       H = SGN(S1) * P/2
280       C2 = COS(B) * SIN(D)
290       C2 = C2 - SIN(B)* COS(D) * COS(T5)
300       S2 = -COS(D)*SIN(T5)
310       IF C2 = 0 THEN A = SGN(S2) * P/2
320       IF C2 = 0 THEN 350
330       A = ATN(S2/C2)
340       IF C2 < 0 THEN A = A+P
350       IF A < 0 THEN A = A+2*P
360       PRINT :PRINT TAB(20) "OBJECT OF INTEREST'S"
365      PRINT
370       PRINT  TAB(20)"ALTITUDE:  ";H/R1
375       PRINT
380       PRINT  TAB(20) "AZIMUTH:   ";A/R1
385       PRINT :PRINT :PRINT TAB(20)
386       INPUT "ANOTHER Y/N";A$
387       IF A$ = "Y" THEN GOTO 95 ELSE 390
390       END
400   REM   SEXAGESIMAL TO DECIMAL
410   REM
420       S = 1: A1 = ABS(VAL(A$))
430       IF LEFT$(A$,1) = "-" THEN S = -1
440       A = S*(A1+A2/60+A3/3600)
450       RETURN
460  REM
470  REM  GMST AND JD
480  REM
490  REM GMST
500  REM
510  REM
520  GOSUB 710
530   D = J - 2451545!
540   T = D/36525!: T1 = INT(T)
550   J0 = T1*36525! + 2451545!
560   T2 = (J-J0+.5)/36525!
570   S = 24110.54841# + 184.812866#*T1
580   S = S+8640184.812866#*T2
590   S = S+.093104*T*T
600   S = S-.0000062 *T*T*T
610   S = S/86400!: S = S - INT(S)
620   S = 24*(S+(F - .5)*1.002737909#)
630   IF S<0 THEN S = S+24
640   IF S>24 THEN S = S-24
650  ST = S
660   H = INT(S): M1 = 60 *(S-H)
670   M = INT(M1): SS = 60*(M1 - M)
675   PRINT
680    PRINT TAB(20)  "GMST;  ";H;M;SS
681  PRINT
685    GOTO 135
690  END
700  REM
710  REM   CALENDAR --> JD
720  REM
730  PRINT TAB(20):  INPUT "YEAR, MONTH, DAY ";Y,M,D
735  PRINT
740  PRINT TAB(15) : INPUT "JULIAN (0) OR GREGORIAN CALENDAR (1) ";G
750  D1=INT(D): F=D-D1-.5
760  J=-INT(7*(INT((M+9)/12)+Y)/4)
770  IF G=0 THEN 810
780  S=SGN(M-9): A=ABS(M-9)
790  J1=INT(Y+S*INT(A/7))
800  J1=-INT((INT(J1/100)+1)*3/4)
810  J=J+INT(275*M/9)+D1+G*J1
820  J=J+1721027!+2*G+367*Y
830  IF F>=0 THEN 850
840  F=F+1: J=J-1
850  PRINT : PRINT TAB(20) "JULIAN DAY : ";J;F
860  RETURN
```
{% endraw %}

## TOUT.BAS

{% raw %}
```bas
10   CLS
20   KEY OFF
30      REM THIS PROGRAM WAS ADAPTED FROM A PROGRAM BY ED SEEDHOUSE AND
40      REM MADE TO RUN ON IBM MS/DOS TYPE COMPUTERS.  THE ORIGINAL
50      REM PROGRAM WAS DOWNLOADED FROM GRANNY'S BBS IN COLWOOD.
60      REM THIS ADAPTATION WAS DONE BY CHRIS SPRATT, VICTORIA, BC.
70      REM WITH THE UNDERSTANDING THAT THE ORIGINAL WAS IN THE PUBLIC DOMAIN.
80      REM
90      REM
100   PRINT : PRINT
110   PRINT TAB(25) " A  HORSE RACING PROGRAM"
120   LOCATE 8,16:FOR L = 1 TO 50:PRINT CHR$(205);:NEXT
130   LOCATE 9,18:COLOR 15
140   PRINT "-------- PICK THE WINNERS AT THE TRACK --------"
150   LOCATE 10,16:COLOR 7
160   FOR L = 1 TO 50 :PRINT CHR$(205);:NEXT
170   PRINT : PRINT :
180   PRINT TAB(31) " BY CHRIS SPRATT"
190   PRINT
200   PRINT TAB(35) "JUNE 1985"
201   PRINT :PRINT
202   PRINT TAB(26) "WITH THANKS TO ED SEEDHOUSE"
210   PRINT
220   PRINT : PRINT : GOSUB 12000
230     REM
240     REM
250     REM
260     REM
1000  CLEAR 
1010 MM = 11
1020  DIM A$(MM),KW(MM),KP(MM),T(MM),R(MM),P(MM)
1030  DIM RW(MM),RP(MM),PW(MM),PP(MM),RO(MM),PO(MM)
1040  CLS 
1120  PRINT : PRINT : PRINT : PRINT : PRINT 
1130  FOR I = 1 TO 2000: NEXT I
1140  CLS
1150  PRINT "'TOUT ' IS DESIGNED TO HELP YOU PICK A WINNING HORSE AT THE TRACK! IF YOU'VE   EVER MULLED OVER A RACING FORM THEN THIS IS THE PROGRAM FOR YOU."
1160  PRINT : PRINT "  TO REALLY GRASP HOW WELL THIS PROGRAM RUNS, JUST USE AN OLD RACING FORM, AND  FILL IN THE INFORMATION AS REQUESTED.": PRINT
1170  PRINT "  THEN COMPARE THE WINNERS WITH 'TOUT I.THE RESULTS ARE NORMALLY POSTED IN THE  FOLLOWING DAYS FORM."
1180  PRINT:PRINT TAB(9)" YOU MIGHT BE IN FOR A BIG SURPRIZE.  GOOD LUCK!!!"
1185  PRINT :PRINT
1190  PRINT TAB(20)" HIT <ENTER> TO START ",:INPUT R$
1200  CLS :PRINT :PRINT :PRINT :PRINT
1210  PRINT TAB(25) "NAME OF TRACK  ",:INPUT C$
1220  PRINT TAB(25) "DATE (DD/MM)   ",:INPUT D$
1230  PRINT TAB(16) "WHICH RACE DO YOU WANT TO HANDICAP ? ",:INPUT  NR
1240 NH = 0
1250  CLS :PRINT :PRINT :PRINT :PRINT
1260  GOSUB 2060
1270  PRINT TAB(20)"NAME OF HORSE TO BE EVALUATED ",:INPUT A$(NH)
1280  PRINT TAB(20)"NUMBER OF RACES RUN THIS PERIOD ",:INPUT MR
1290  IF MR = 0 THEN  PRINT TAB(22)  "NO RACE HISTORY.   REJECT.": FOR I = 1 TO 1000: NEXT I: GOSUB 2060: GOTO 1270
1300  PRINT  TAB(20) "WINNINGS THIS PERIOD $" ,,:INPUT W
1310  PRINT  TAB(20) "FINISHES THIS PERIOD (1,2,3)  ",: INPUT  M1,M2,M3
1320 KW(NH) = W / MR
1330 KP(NH) = (3 * M1 + 2 * M2 + M3) / MR
1340  PRINT  TAB(20) "ANY MORE HORSES TO EXAMINE (Y/N)",:INPUT B$
1350  IF B$ = "N" THEN 1380
1360  IF B$ <  > "Y" THEN 1340
1370 NH = NH + 1: GOSUB 2060: GOTO 1270
1380  FOR J = 0 TO NH:T(J) = KW(J): NEXT J
1390  GOSUB 1930
1400  FOR J = 0 TO NH:RW(J) = R(J):PW(J) = P(J): NEXT J
1410  FOR J = 0 TO NH:T(J) = P(J): NEXT J
1420  GOSUB 1930
1430  FOR J = 0 TO NH:RP(J) = R(J):PP(J) = P(J): NEXT J
1440  FOR J = 0 TO NH:RO(J) = KW(J) * KP(J):T(J) = RO(J): NEXT J
1450  GOSUB 1930
1460  FOR J = 0 TO NH:PO(J) = P(J): NEXT J
1470  CLS:PRINT :PRINT :PRINT :PRINT
1480  PRINT TAB(18) "RACE # ";,NR;" AT ";,C$;" ON ";,D$
1490  PRINT TAB(18) "RANKING BASED ON $"W" WINNINGS"
1500  REM
1510  PRINT TAB(18) "RANK    NAME            $WIN/RACE"
1520  REM
1530  FOR J = 0 TO NH
1540  PRINT  TAB(18) J + 1; SPC(6)A$(PW(J));
1550  PRINT  TAB( 42)"$"; INT (KW(PW(J) + .005) * 100) / 100
1560  NEXT J
1570  PRINT : PRINT : PRINT : PRINT TAB(22) "HIT <ENTER>  WHEN REVIEW COMPLETE",: INPUT  B$
1580  REM
1590  CLS:PRINT :PRINT :PRINT :PRINT
1600  PRINT TAB(18) "RACE # ";,NR;" AT ";,C$;" ON ";,D$
1610  PRINT TAB(18) "RANKING BASED ON FINISH FACTOR"
1620  REM
1630  PRINT TAB(18) "RANK     NAME             FACTOR"
1640  REM
1650  FOR J = 0 TO NH
1660  PRINT TAB(18) J + 1; SPC( 6)A$(PP(J));
1670  PRINT  TAB( 45); INT (KP(PP(J) + .005) * 1000) / 1000
1680  NEXT J
1690  PRINT : PRINT : PRINT : PRINT  TAB(22) "HIT <ENTER>  WHEN REVIEW COMPLETE",:INPUT  BB$
1700  CLS :PRINT :PRINT :PRINT :PRINT
1710  PRINT TAB(18)"RACE # ";, NR;" AT ";, C$;" ON " ;,D$
1720  PRINT TAB(18)"RANKING BASED ON COMPOSITE SCORE"
1730  REM
1740  PRINT TAB(18)"RANK     NAME       COMPOSITE SCORE"
1750  REM
1760  FOR J = 0 TO NH
1770  PRINT TAB(18) J+ 1; SPC( 6)A$(PO(J));
1780  PRINT  TAB( 41); INT (RO(PO(J) + .005) * 1000) / 1000
1790  NEXT J
1800  PRINT : PRINT : PRINT : PRINT TAB(22) "HIT <ENTER> WHEN REVIEW COMPLETE",:INPUT Z$
1810  CLS :LOCATE 10,20
1820  PRINT "PERSONALLY, I LIKE "A$(PO(0))
1830  FOR J = 1 TO NH
1840  IF RO(PO(J)) < .9 * RO(PO(0)) THEN 1870
1850  PRINT TAB(30) "AND ";A$(PO(J))
1860  NEXT J
1870  REM
1880  PRINT :PRINT TAB(16)"ANOTHER RACE TO HANDICAP (Y/N)",
1890  INPUT R$
1900  IF R$ = "N" THEN 1920
1910  PRINT :PRINT :PRINT TAB(22) "WHICH RACE NEXT ",:INPUT NR: GOTO 1240
1920  END
1930  REM  ---SORTING SUBROUTINE---
1940  FOR J = 0 TO NH
1950 MX =  - 999
1960  FOR J1 = 0 TO NH
1970  IF T(J1) < MX THEN 2000
1980 MX = T(J1)
1990 JS = J1
2000  NEXT J1
2010 R(JS) = J
2020 P(J) = JS
2030 T(JS) =  - 9999
2040  NEXT J
2050  RETURN 
2060   PRINT  TAB( 39);" ":  RETURN 
11000 END
12000 LOCATE 24,26
13000 PRINT "PRESS ANY KEY TO CONTINUE"
14000 B$ = INPUT$ (1)
15000 CLS : PRINT : PRINT : PRINT : PRINT
16000 RETURN
```
{% endraw %}

## WEEKDAYS.BAS

{% raw %}
```bas
10   CLS
15   KEY OFF
20   REM
30   PRINT : PRINT : PRINT
40   PRINT TAB(28) " AN ASTRONOMY PROGRAM"
45   PRINT : PRINT
50   PRINT TAB(22) "-------- DAYS OF THE WEEK --------"
55   PRINT : PRINT :
60   PRINT TAB(30) " BY CHRIS SPRATT"
65   PRINT
70   PRINT TAB(34) "DEC. 1984"
75   PRINT
80   PRINT : PRINT :
90   LOCATE 24,25
91   PRINT "PRESS ANY KEY TO CONTINUE"
92   B$ = INPUT$ (1)
95   CLS : PRINT : PRINT : PRINT : PRINT
100  REM
110  DIM WKDAY$(7),OFFSET(12)
120  DATA "SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"
130  DATA 0,3,3,6,1,4,6,2,5,0,3,5
140  FOR L = 1 TO 7 : READ WKDAY$(L):NEXT :FOR L= 1 TO 12 :READ OFFSET(L):NEXT
150  Y = VAL(MID$(DATE$,7,4)):M = VAL(MID$(DATE$,1,2)):D= VAL(MID$(DATE$,4,2))
160  X = INT((( Y - 1976) *12 + M -3 +33600!)/48)
170  X = X+Y - 1978 + OFFSET(M) + D-1:Z = INT(X/7) : Z = X-Z*7 + 1
180  PRINT TAB(20) "TODAY IS  ";WKDAY$(Z);",  ";DATE$
```
{% endraw %}

## WHERE.BAS

{% raw %}
```bas
100   ' WHERE.BAS -- BY CHRIS SPRATT -- FROM KIYOSKI AKIMA ARTICLE IN "USER-TO-       USER", PC MAGAZINE VOLUME 4 NUMBER 9, PAGES 200 -202.
105   'TO RUN WHERE.COM  -- TYPE AT DOS PROMPT - A> WHERE [drive:][filename.ext]
106   'IF TOO MANY FILES ARE FOUND USE `MORE' DOS COMMAND i.e. |MORE AFTER .ext
107   'OR ">MATCHES" WHICH WILL REDIRECT THE MATCHES TO A FILE CALLED `MATCHES'
108   '
110   FOR I%= 1 TO 418
120   READ J%
130   TOTAL! = TOTAL!+VAL("&H"+J$)
140   NEXT I%
150   IF TOTAL! =36950! THEN RESTORE:GOTO 170
160   PRINT "CHECK YOUR DATA STATEMENTS!:END
170   OPEN "WHERE.COM" AS #1 LEN = 1
180   FIELD #1,1 AS C$
190   FOR I% = 1 TO 418
200   READ J%
210   LSET C$=CHR$(VAL("&H"+J$)
220   PUT #1,I%
230   NEXT I%
240   CLOSE #1
250   PRINT "WHERE.COM CREATED":END
260  DATA  FC,BF,79,02,BE,81,00,AC
270  DATA  3C,0D,74,1E,3C,20,76,F7
280  DATA  80,3E,5C,00,00,74,06,AC
290  DATA  AC,3C,20,76,06,AA,AC,3C
300  DATA  20,77,FA,A0,5C,00,0A,C0
310  DATA  75,06,B4,19,CD,21,FE,C0
320  DATA  00,06,27,02,BA,76,02,BB
330  DATA  2A,02,E8,16,00,80,3E,86
340  DATA  02,FF,75,0D,BB,02,00,B9
350  DATA  1A,00,B4,40,BA,87,02,CD
360  DATA  21,CD,20,52,BE,79,02,E8
370  DATA  86,00,33,C9,E8,60,00,72
380  DATA  0D,E8,85,00,E8,6D,00,72
390  DATA  05,E8,7D,00,EB,F6,5A,52
400  DATA  BE,23,02,E8,6A,00,B9,10
410  DATA  00,E8,43,00,72,3F,8B,F2
420  DATA  F6,44,15,10,75,0D,E8,4B
430  DATA  00,72,32,8B,F2,F6,44,15
440  DATA  10,74,F3,80,7C,1E,2E,74
450  DATA  ED,57,53,8B,F2,83,C6,1E
460  DATA  8B,FB,AC,AA,0A,C0,75,FA
470  DATA  8B,DF,AA,C6,47,FF,5C,E8
480  DATA  A1,FF,5B,5F,C6,07,00,B4
490  DATA  1A,CD,21,EB,C9,5A,C3,51
500  DATA  83,C2,2C,B4,1A,CD,21,8B
510  DATA  EA,B4,4E,BA,27,02,CD,21
520  DATA  8B,D5,59,C3,8B,EA,B4,4F
530  DATA  BA,27,02,CD,21,8B,D5,C3
540  DATA  8B,FB,AC,AA,0A,C0,75,FA
550  DATA  C3,8B,EA,80,7E,1E,2E,74
560  DATA  22,BA,27,02,32,C0,A2,86
570  DATA  02,86,07,97,E8,15,00,97
580  DATA  88,07,8B,D5,83,C2,1E,E8
590  DATA  0A,00,B4,09,BA,9F,02,CD
600  DATA  21,8B,D5,C3,8B,F2,B4,02
610  DATA  AC,8A,D0,CD,21,AC,0A,C0
620  DATA  75,F7,C3,2A,2E,2A,00,40
630  DATA  3A,5C,00,00,00,00,00,00
640  DATA  00,00,00,00,00,00,00,00
650  DATA  00,00,00,00,00,00,00,00
660  DATA  00,00,00,00,00,00,00,00
670  DATA  00,00,00,00,00,00,00,00
680  DATA  00,00,00,00,00,00,00,00
690  DATA  00,00,00,00,00,00,00,00
700  DATA  00,00,00,00,00,00,00,00
710  DATA  00,00,00,00,00,00,00,00
720  DATA  00,00,00,00,00,00,00,00
730  DATA  00,2A,2E,2A,00,00,00,00
740  DATA  00,00,00,00,00,00,FF,4E
750  DATA  6F,20,6D,61,74,63,68,69
760  DATA  6E,67,20,66,69,6C,65,73
770  DATA  20,66,6F,75,6E,64,2E,0D
780  DATA  0A,24
```
{% endraw %}

## WHERE.DOC

{% raw %}
```
   
        
                         WHERE.COM

    
        The WHERE.COM program developed from WHERE.BAS will find any 
    file on any directory.
        
        To find a file type:
        
                     WHERE [drive:] [filename.ext]
        
        WHERE.COM will find all the filenames on the specified drive 
    regardless of the subdirectory.  If a drive name isn't specified 
    the default drive is used.  If no name is specified "*.*" is 
    assumed.
        


```
{% endraw %}

## XYZ.BAS

{% raw %}
```bas
10     CLS
20  REM
30  REM
40  REM
50     LOCATE 5,15
60     PRINT  " *****  X,Y,Z COORDINATES  (1950.0)  OF THE SUN  ***** "
70     LOCATE 7,30
80     PRINT " BY CHRIS SPRATT --- 1985"
90     PRINT
100  REM
110     KEY OFF : LOCATE 24,25
120     PRINT "PRESS ANY KEY TO CONTINUE"
130     IF INKEY$ = "" THEN 130
140     CLS
150  REM
160     PRINT: PRINT:
170  REM
180      GOSUB 730
190  REM  PICK UP CONSTANTS
200    CLS
210    LOCATE 10,15
220    PRINT  " STARTING DATE (BETWEEN A.D. 1700-2100):"
230    PRINT
240    INPUT  "                             YEAR";Y
250    PRINT
260    INPUT  "                            MONTH";M
270    PRINT
280    INPUT  "                              DAY";D
290    GOSUB 620:DD = JD
300    JD = JD + 2440000#
310    ET = ((JD - 2444239#)/365.2421987#)*.0000119 + .00059
320    JD = JD + ET - 2440000#
330    PRINT :PRINT
340    INPUT  "                 INCREMENT (DAYS)";NN
350    PRINT
360    INPUT  "                TOTAL SPAN (DAYS)";NS
370  REM
380    CLS
390    FOR JD = DD TO DD + NS STEP NN
400    GOSUB 820
410    NEXT JD
420    PRINT : PRINT : PRINT : PRINT :
430    PRINT TAB(20) :   INPUT  "MORE (Y OR N)";Q$: IF Q$ = "Y" THEN GOTO 200
440    END
450  REM
460  REM      CALENDAR ROUTINE
470  REM
480  REM      ENTER WITH JD = ADJUSTED JULIAN DATE OF INTEREST
490  REM      (= TRUE JULIAN DATE - 2440000.0)
500    D7 = INT(JD+719019!)
510    IF JD<-24921 THEN D7=D7-1
520    Y7 = INT((D7-122.1)/365.25)
530    M7 = INT((D7-INT(365.25*Y7))/30.6001)
540    D6 = D7-INT(365.25*Y7)-INT(30.6001*M7)
550    M6 = M7-1
560    IF M7 > 13 THEN M6 = M6 - 12
570    Y6 = Y7
580    IF M6 <3 THEN Y6=Y6+1
590    M$ = MID$ (M1$,3*M6-2,3)
600    RETURN
610  REM
620  REM    JULIAN DATE ROUTINE
630  REM
640  REM    ENTER WITH D, M, Y OF INTEREST
650    IF M>=3 THEN 670
660    M = M+12:Y=Y-1
670    F = INT(Y/100)-INT(Y/400)
680    A = INT(365.25*(Y+4712))
690    B = INT((367*(M-1)+5)/12)
700    J = A+B-F-2440000.5#
710    JD= J+D
720    RETURN
730  REM                 CONSTANTS
740  REM
750    CLS
760    K = .01720209895#:  REM   GAUSSIAN CONSTANT
770    R1 = 3.1415926536#/180:  REM  RADIANS PER DEGREE
780    R0 = 1/R1
790    K8 = LOG(10)
800    E = 23.4457889# / R0
810    RETURN
820  REM
830  REM
840  REM
850  REM     X, Y, Z FOR THE SUN  --  1950.0
860  REM
870    T = (JD+24980)/36525!: REM CENTURIES SINCE JAN 0, 1900, 12H UT
880    P0 = (1.396041+.000308*(T+.5))*(T-.499998)
890    A = 100:GOSUB 1240:G0 = A+358.475833#:L0 = A+279.6966778#-P0
900    A = 1336: GOSUB 1240:C0 = A+270.4341639#-P0
910    A = 162:GOSUB 1240:V0 = A+212.603219#
920    A =  53: GOSUB 1240:M0 = A+319.529425#
930    A = 8: GOSUB 1240:J0 = A+225.444651#
940    G = (G0+T*(-.95025-.00015*T))*R1
950    C = (C0+T*(307.883142#-.001133*T))*R1
960    L = (L0+T*(.76892+.000303*T))*R1
970    V = (V0+T*(197.803875#+.001286*T))*R1
980    M = (M0+T*(59.8585+.000181*T))*R1
990    JJ = (JO+T*154.906654#)*R1
1000  REM
1010    X = .000011*(COS(2*G-L-2*JJ)+COS(2*G+L-2*V))
1020    X = X-.000012*(COS(G+L-V)+COS(4*G-L-8*M+3*JJ)-COS(4*G+L-8*M+3*JJ))
1030    X = X-.000014*COS(C-2*L)+.000017*COS(C)+.000018*SIN(2*G+L-2*V)
1040    X = X-.000021*T*COS(G+L)-.000026*SIN(G-L-JJ)+.000035*COS(2*G-L)
1050    X = X+.000063*T*COS(G-L)+.000105*COS(2*G+L)+.008374*COS(G+L)
1060    X = X-.025127*COS(G-L)+.99986*COS(L)
1070  REM
1080    Y = .00001*(-SIN(2*G-L-2*JJ)+SIN(2*G+L-2*V))
1090    Y = Y+.000011*(-SIN(G+L-V)+SIN(4*G-L-8*M+3*JJ)+SIN(4*G+L-8*M+3*JJ))
1100    Y = Y+.000013*SIN(C-2*L)+.000016*SIN(C)-.000017*COS(2*G+L-2*V)
1110    Y = Y-.000019*T*SIN(G+L)-.000024*COS(G-L-JJ)-.000032*SIN(2*G-L)
1120    Y = Y-.000057*T*SIN(G-L)+9.699999E-05*SIN(2*G+L)+.007683*SIN(G+L)
1130    Y = Y+.023053*SIN(G-L)+.917308*SIN(L)
1140    REM
1150    Z = -.00001*COS(G-L-JJ)-.000014*SIN(2*G-L)-.000025*T*SIN(G-L)
1160    Z = Z+.000042*SIN(2*G+L)+.003332*SIN(G+L)+.009998*SIN(G-L)
1170    Z = Z+.397825*SIN(L)
1180  REM
1190  REM
1200    PRINT :PRINT :PRINT :PRINT
1210    PRINT TAB(10)"X";X :PRINT : PRINT  TAB(10) "Y";Y : PRINT
1220    PRINT TAB(10) "Z";Z
1230    RETURN
1240  REM      NORMALIZATION -- A IN, A OUT.
1250  REM
1260    A = 360*(A*T-INT(A*T))
1270    RETURN
1280    END
```
{% endraw %}

## YN.DOC

{% raw %}
```

                            YN.COM
        
        This is a short program that requires DOS 2.0 or later.  It 
    will, when CDEL [filename.ext] is invoked, prompt the user, if the 
    file requested, is to be erased. 

        So, if you wish to erase a file the following should be done:
        
        A> CDEL [FILENAME.EXT] <CR>

           The program will then invoke YN.COM and respond:
        
        A> YOU HAVE ASKED ME TO ERASE: [FILENAME.EXT]
           SHOULD I?
        
           If you respond with a Y then the file is gone.  If you 
    respond with N then the file is not erased.  This should save 
    erasing the wrong file.
        
    Chris. Spratt
    Victoria, B.C.
        



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0543

     Volume in drive A has no label
     Directory of A:\

    ADDRBOOK BAS      5504   5-30-85   9:00p
    ADDRBOOK DOC      2048   5-30-85   9:04p
    ARCTRIG  BAS      1919   6-02-85   8:05p
    AUTOMENU BAT        36   6-11-85   8:23p
    BLATHER  DOC      7168   5-06-85   8:20p
    BLATHER  EXE     45824   5-06-85   8:16p
    CDEL     BAT       110   6-13-85   8:15p
    CLOCK    BAS      1586   6-20-85   8:41p
    CLOCK    COM       267   6-20-85   8:41p
    COVER    COM      1152   5-27-85   6:59p
    COVER    DOC      2304   5-27-85   7:01p
    DAYNUM   BAS      1526   6-02-85   8:15p
    DOORS    BAS      1186   6-09-85   7:51p
    DOORS    COM       178   6-09-85   7:52p
    DOORS    DOC      1248   6-09-85   7:42p
    EASTER   BAS      2022   6-02-85   8:50p
    F        EXE     31872   1-22-85  10:28p
    FILES543 TXT      3192   7-10-86  11:38a
    FINDFILE BAT       322   6-10-85   8:34p
    FINDFILE DOC      1283   6-10-85   7:06p
    GLV12    DOC     22400   4-28-85   1:05a
    GLV12    EXE     71808   4-28-85   1:00a
    GO       BAT       558   7-10-86  11:50a
    HALLEY   BAS      6399   6-02-85   1:58p
    KEPLER   BAS      2994   6-02-85   7:57p
    LOCSTIME BAS      1614   6-02-85   3:32p
    LOTTO    BAS      2651   6-22-85   8:26p
    MENU     BAS      1598   6-23-85   7:54p
    MENU     DOC       658   6-11-85   9:18p
    MOVDIR   EXE      6656   1-29-85   5:14a
    NOTES543 TXT      1595   7-10-86  11:47a
    NPAD     BAS      5013   6-07-85  10:47p
    NPAD     COM      1054   6-07-85  10:51p
    NPAD     DOC      1501   6-07-85  11:27p
    PMOR     BAT        21   6-14-85  11:02p
    POLRECT  BAS       933   6-02-85   3:04p
    PORE     COM      4380   6-14-85   8:51p
    PORE     DOC      1310   6-16-85  11:36a
    PRECESS  BAS      4560   6-02-85   7:51p
    PRTSCOFF COM        11  11-28-84   7:29p
    RANDOM   BAS       272   6-16-85  12:04p
    README   GL        768   4-28-85   1:06a
    RECTPOL  BAS       984   6-02-85   3:03p
    SAMPLEGL GL1       128   4-28-85   1:08a
    SAMPLEGL GL2      2048   4-28-85   1:09a
    SEARCH   COM      3712   1-22-85  10:15p
    SEARCH   DOC      5164   1-22-85  10:17p
    SF       BAT        21   1-01-80  10:29p
    SFX      EXE     30080   1-16-84   6:37p
    SUNNY    BAS      7495   6-02-85   7:26p
    TIMEAL   BAS      3157   6-02-85   8:31p
    TOUT     BAS      5300   6-22-85   9:36p
    WEEKDAYS BAS       938   6-02-85   8:32p
    WHERE    BAS      2688   6-09-85   2:27p
    WHERE    COM       418   6-09-85   1:19p
    WHERE    DOC       507   6-10-85   7:19p
    WHEREIS  COM       512   1-28-85   8:15p
    XYZ      BAS      4299   6-02-85   8:00p
    YN       COM        23   6-13-85   8:13p
    YN       DOC       740   6-13-85   8:30p
           60 file(s)     317715 bytes
                           10240 bytes free
