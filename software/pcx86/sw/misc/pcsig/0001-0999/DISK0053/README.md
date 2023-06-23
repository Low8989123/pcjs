---
layout: page
title: "PC-SIG Diskette Library (Disk #53)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0053/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0053"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "SOUNDS"

    SOUNDS is BASICally just good fun.  It is a collection of routines
    written in BASIC that produce sounds ranging from TA-DAH to exploding
    bombs.  Actually, since the routines produce no graphics -- nothing on
    the screen at all -- they work best with another, probably fun,
    project.  A little something to add that ``extra'' touch.
    
    On the other hand, SOUNDS represents an excellent study tool for the
    BASIC programmer looking to determine the details of a given sound
    routine.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ATTRIB.BAS

{% raw %}
```bas
10 CLS
20 KEY OFF
30 DEF SEG=&HB800
40 ATTRIBUTE%=112
50 FOR ROW%=1 TO 25
60 FOR COLUMN%=1 TO 80
70 POKE 1+(ROW%-1)*160+(COLUMN%-1)*2,ATTRIBUTE%
80 NEXT
90 NEXT
100 SYSTEM
```
{% endraw %}

## BASECONV.BAS

{% raw %}
```bas
10 'NUMERIC BASE CONVERSION
20 'WITH ASSISTANCE FROM NATIONAL BUREAU OF STANDARDS `HANDBOOK OF
30 'OF MATHMETICAL FUNCTIONS.'
40 'CONVERTED TO PC BASIC BY D. WATKINS 9/28/82
50 CLS
60 KEY OFF
70 LOCATE 2,21:PRINT "NUMERIC BASE CONVERSION PROGRAM"
80 DIM V$(20)
90 N$="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
100 'VARIABLE `M' IS THE HIGHEST
110 'BASE YOU MAY CONVERT FROM / TO
120 M=LEN(N$)
130 LOCATE 10,1 :PRINT "CONVERT NUMBERS FROM BASE:":PRINT "    Input a base between 2 and 36 (or 0 TO Exit)  ";
140 INPUT B1
150 'END PROGRAM?
160 IF B1=0 THEN 240
170 'TEST FOR VALID INPUT BASE
180 IF B1>1 THEN 210
190 PRINT "BASES 2 THROUGHT";M;"ONLY. SELECT AGAIN."
200 GOTO 130
210 IF B1>M THEN 190
220 PRINT :PRINT "                  TO BASE:":PRINT "    Input a base between 2 and 36 (or 0 TO Exit)  ";
230 INPUT B2
240 IF B1=0 OR B2=0 THEN CLS :LOCATE 12,27 :PRINT "Program end.": END
250 'TEST FOR VALID OUTPUT BASE
260 IF B2>1 THEN 290
270 PRINT "BASES 2 THROUGH ";M;"ONLY. SELECT AGAIN."
280 GOTO 220
290 IF B2>M THEN 270
300 CLS
310 LOCATE 3,23:PRINT "NUMERIC BASE CONVERSION PROGRAM":PRINT
320 LOCATE 11,1 :PRINT TAB(23);"From";TAB(58);"To"
330 CSR=14 :LOCATE 12,1 :PRINT TAB(22);"BASE";B1;TAB(56);"BASE";B2 :LOCATE 6,1
340 LOCATE 5,14 :PRINT "( Use any of these digits: "; MID$(N$,1,B1);" )"
345 LOCATE 6,30 :PRINT "( END TO Exit )"
350 LOCATE 8,1 :PRINT "Number in Base";B1;"to convert to a number in Base";B2 ;" "; :INPUT V$
360 FOR I=5 TO 9 :LOCATE I,1: PRINT SPACE$(80) : NEXT
365 IF MID$(V$,1,3)="END" THEN B1=0 :GOTO 240
370 IF MID$(V$,1,1)="0" THEN GOTO 340
380 'FIRST, CONVERT INPUT VALUE TO BASE 10
390 L=LEN(V$)
400 D=0:BAD=0
410 FOR I = 1 TO L
420 FOR J = 1 TO B1
430 IF MID$(V$,I,1)>MID$(N$,B1,1) THEN BAD =-1
440 IF MID$(N$,J,1)<>MID$(V$,I,1) THEN 460
450 D=D+INT((J-1)*(B1^(L-I))+0.5)
460 NEXT J
470 NEXT I
480 IF BAD THEN 600
490 'NOW CONVERT BASE 10 VALUE TO
500 'DESIRED OUTPUT BASE
510 O$=""
520 X=INT(((D/B2)-INT(D/B2))*B2+1.5)
530 O$=MID$(N$,X,1)+O$
540 D=INT(D/B2)
550 IF D>0 THEN 520
560 'OUTPUT THE RESULT
570 LOCATE CSR,1 :PRINT TAB(29-LEN(V$));V$;TAB(62-LEN(O$));O$ :CSR=CSR+1
580 'LOOP BACK TO ENTER ANOTHER VALUE
590 GOTO 340
600 CLS :LOCATE 6,4 :PRINT "INVALID ENTRY:"
610 PRINT "THERE IS NO SUCH NUMBER `"V$"' (SIC) IN BASE"B1
620 GOTO 310
630 END
```
{% endraw %}

## BOMB.BAS

{% raw %}
```bas
10 FOR J=1 TO 1:FOR I=1000 TO 400 STEP -1:SOUND I,0.015625:NEXT:NEXT:FOR I=399 TO 100 STEP -1:SOUND I,0.02:NEXT
```
{% endraw %}

## CHARMAP.BAS

{% raw %}
```bas
1 CLS : GOTO 20 'STARTER KEY REASSIGNMENT
2 KEY ON :IF KK9=0 THEN KEY 1,CHR$(27)+"CLS"+CHR$(13)+"LIST  "+CHR$(13)                            ELSE KEY 1,CHR$(27)+"CLS"+CHR$(13)+"LIST  20-"+CHR$(13)
3 IF KK9=0 THEN KEY 2,CHR$(27)+"RUN    "+CHR$(13)   ELSE KEY 2," FOR I=1 TO "
4 IF KK9=0 THEN KEY 3,CHR$(27)+"LOAD"+CHR$(34)  ELSE KEY 3,":COLOR 7,0 :"
5 IF KK9=0 THEN KEY 4,CHR$(27)+"SAVE"+CHR$(34)  ELSE KEY 4,":COLOR 0,7 :"
6 IF KK9=0 THEN KEY 5,CHR$(27)+"TRON "+CHR$(13)  ELSE KEY 5,":COLOR 23,0 :"
7 IF KK9=0 THEN KEY 6,CHR$(27)+"RENUM 20,20"+CHR$(13) ELSE KEY 6,":COLOR 15,0 :"
8 IF KK9=0 THEN KEY 7,CHR$(27)+"FILES"+CHR$(34)+"*.BAS"+CHR$(13)                           ELSE KEY 7, CHR$(34)+"; CHR$(34); "+CHR$(34)
9 IF KK9=0 THEN KEY 8,CHR$(27)+"SYSTEM"+CHR$(13)  ELSE KEY 8,"XXXXXX"
10 IF KK9=0 THEN KEY 9,CHR$(27)+"LIST " ELSE KEY 9,CHR$(27)+"LIST "
11 IF KK9=1 THEN KEY 10,CHR$(27)+"RUN 2 "+CHR$(13) : LOCATE 21,1 :END
12 IF KK9=0 THEN KEY 10,CHR$(27)+"RUN 13"+CHR$(13) : LOCATE 21,1 :END
13 KK9=1 :GOTO 2
20 CLS ' ******************* START PROGRAM **********************
30 KEY OFF : DEF SEG=&H40 :POKE &H17,PEEK (&H17) OR 32 ' Set NUM LOCK
40 LOCATE 2,28 :PRINT "CHARACTER MAP"
50 LOCATE 5,1 :PRINT "This program will display the characters from 1 to 255."
60 PRINT "The characters which can't be displayed, CHR$(31) for example, are omitted."
70 PRINT :PRINT "If you start with CHR$(0), the display stops at CHR$(128)."
80 PRINT "You must start with CHR$(136) to see all characters through CHR$(255)."
85 LOCATE 13,1 : PRINT "NOTE: I have secretly pressed the NUM LOCK so you can use the Numeric Keypad."
90 LOCATE 15,1 : INPUT "INPUT STARTING ASCI NUMBER (999 to Exit) ";A :CLS :GOSUB 160
100 ' ************ Display formatted on Screen ****************
110 FOR I=1 TO 66 STEP 13
120 FOR J=1 TO 20:LOCATE J,I :PRINT USING "###  ";A; :PRINT CHR$(A);CHR$(A);CHR$(A) : GOSUB 150 : NEXT J,I : GOTO 240
130 DEF SEG=&H40 :POKE &H17,PEEK (&H17) AND 223 :CLS :END ' To Exit
140 ' ************Test for Valid Parameters *******************
150    A=A+1 : IF A=256 THEN 240
160      IF A=999 THEN 130
170      IF A=7 THEN A=8
180      IF A>8 AND A<14 THEN A=14
190      IF A>28 AND A<32 THEN A=32
200      IF J=20 AND I=66 THEN J=88 : GOTO 240
210      IF A>255 THEN A=1 : B=0
220    RETURN
230 ' ************ Display single characters ******************
240 BEEP  :LOCATE 23,1 :PRINT SPACE$(65)
250 LOCATE 23,1 :INPUT "Input a number to see that character. (999 to Exit) ";A                : B=A :GOSUB 160 : IF B<>A THEN LOCATE 23,66 :PRINT "I Can't"                   : GOTO 240
260 LOCATE 23,1 :PRINT SPACE$(65) ;:PRINT USING "###  \\   ";A,CHR$(A)
270 GOTO 250
```
{% endraw %}

## CHIRP.BAS

{% raw %}
```bas
10 FOR J=1 TO 5:FOR I=8000 TO 3000 STEP -100:SOUND I,0.015625:NEXT:NEXT
```
{% endraw %}

## CLOCK.BAS

{% raw %}
```bas
0 '************************************************************
1 '*                                                          *
2 '*   Author:     Mike J. Sullivan  , Houston, Tx.           *
3 '*               12402 Campos Dr. ,Houston, Tx. 77065       *
4 '*   Date:       09/05/82                                   *
5 '*   Purpose:    Display your Basic Programs                *
6 '*   Title:      Digital Clock                              *
7 '*   Comment(s): enjoy                                      *
8 '*                                                          *
9 '************************************************************
10 KEY OFF
11 ODD = 0
12 Q15$ = "MbMLP14O4EO4CDO3G"
13 Q30$ = "MbMLP14O3GO4DEC"
15 CHIME = 0
20 CLS :LOCATE ,,0
40 LOCATE 1,19:PRINT "               --- I B M ---"
50 LOCATE 3,19:PRINT "          DIGITAL  CLOCK   1 . 1 0  "
51 LOCATE 4,19:PRINT "TICK: (Y) Tick On  (N) Tick Off  (ESC) Exit"
60 GOSUB 4060
240 DIM ONE$(7),TWO$(7),THR$(7),FOU$(7),FIV$(7)
250 DIM SIX$(7),SEV$(7),EIG$(7),NIN$(7),ZER$(7),TEMP$(7)
260 XH1=0.1:XH2=0.1:XM1=0.1:XM2=0.2:XS1=0.1:XS2=0.1
270 COL$(1)="  "
280 COL$(2)="  "
290 COL$(3)=STRING$(2,CHR$(219))
300 COL$(4)="  "
310 COL$(5)=STRING$(2,CHR$(219))
320 COL$(6)="  "
330 COL$(7)="  "
340 ONE$(1)="  "+STRING$(3,CHR$(219))+"   "
350 ONE$(2)="   "+CHR$(219)+CHR$(219)+"   "
360 ONE$(3)="   "+CHR$(219)+CHR$(219)+"   "
370 ONE$(4)="   "+CHR$(219)+CHR$(219)+"   "
380 ONE$(5)="   "+CHR$(219)+CHR$(219)+"   "
390 ONE$(6)="   "+CHR$(219)+CHR$(219)+"   "
400 ONE$(7)=" "+STRING$(6,CHR$(219))+" "
410 TWO$(1)=STRING$(8,CHR$(219))
420 TWO$(2)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
430 TWO$(3)="      "+CHR$(219)+CHR$(219)
440 TWO$(4)=STRING$(8,CHR$(219))
450 TWO$(6)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
460 TWO$(5)=CHR$(219)+CHR$(219)+"      "
470 TWO$(7)=STRING$(8,CHR$(219))
480 THR$(1)=STRING$(8,CHR$(219))
490 THR$(2)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
500 THR$(3)="      "+CHR$(219)+CHR$(219)
510 THR$(4)=STRING$(8,CHR$(219))
520 THR$(5)="      "+CHR$(219)+CHR$(219)
530 THR$(6)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
540 THR$(7)=STRING$(8,CHR$(219))
550 FOU$(1)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
560 FOU$(2)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
570 FOU$(3)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
580 FOU$(4)=STRING$(8,CHR$(219))
590 FOU$(6)="      "+CHR$(219)+CHR$(219)
600 FOU$(5)="      "+CHR$(219)+CHR$(219)
610 FOU$(7)="      "+CHR$(219)+CHR$(219)
620 FIV$(1)=STRING$(8,CHR$(219))
630 FIV$(2)=CHR$(219)+CHR$(219)+"      "
640 FIV$(3)=CHR$(219)+CHR$(219)+"      "
650 FIV$(4)=STRING$(8,CHR$(219))
660 FIV$(6)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
670 FIV$(5)="      "+CHR$(219)+CHR$(219)
680 FIV$(7)=STRING$(8,CHR$(219))
690 SIX$(1)=STRING$(8,CHR$(219))
700 SIX$(2)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
710 SIX$(3)=CHR$(219)+CHR$(219)+"      "
720 SIX$(4)=STRING$(8,CHR$(219))
730 SIX$(6)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
740 SIX$(5)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
750 SIX$(7)=STRING$(8,CHR$(219))
760 SEV$(1)=STRING$(8,CHR$(219))
770 SEV$(2)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
780 SEV$(3)="      "+CHR$(219)+CHR$(219)
790 SEV$(4)="      "+CHR$(219)+CHR$(219)
800 SEV$(5)="      "+CHR$(219)+CHR$(219)
810 SEV$(6)="      "+CHR$(219)+CHR$(219)
820 SEV$(7)="      "+CHR$(219)+CHR$(219)
830 EIG$(1)=STRING$(8,CHR$(219))
840 EIG$(2)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
850 EIG$(3)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
860 EIG$(4)=STRING$(8,CHR$(219))
870 EIG$(5)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
880 EIG$(6)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
890 EIG$(7)=STRING$(8,CHR$(219))
900 NIN$(1)=STRING$(8,CHR$(219))
910 NIN$(2)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
920 NIN$(3)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
930 NIN$(4)=CHR$(219)+STRING$(7,CHR$(219))
940 NIN$(6)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
950 NIN$(5)="      "+CHR$(219)+CHR$(219)
960 NIN$(7)=STRING$(8,CHR$(219))
970 ZER$(1)=STRING$(8,CHR$(219))
980 ZER$(2)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
990 ZER$(3)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
1000 ZER$(4)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
1010 ZER$(5)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
1020 ZER$(6)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
1030 ZER$(7)=CHR$(219)+STRING$(7,CHR$(219))
1040 H1=VAL(MID$(TIME$,1,1))
1050 H2=VAL(MID$(TIME$,2,1))
1060 M1=VAL(MID$(TIME$,4,1))
1070 M2=VAL(MID$(TIME$,5,1))
1080 S1=VAL(MID$(TIME$,7,1))
1090 S2=VAL(MID$(TIME$,8,1))
1095 XDA$=MID$(DATE$,4,2)
1096 Z$=INKEY$:IF Z$=CHR$(27) THEN END
1097 IF Z$="y" OR Z$="Y" THEN NOCHIME=0
1098 IF Z$="n" OR Z$="N" THEN NOCHIME=-1
1101 MIN = VAL(MID$(TIME$,4,2))
1102 HOUR = VAL(MID$(TIME$,1,2))
1103 IF HOUR = 0 THEN HOUR = 12
1104 IF CHIME = 1 AND MIN = 0 THEN GOSUB 10090
1105 IF CHIME = 1 AND MIN = 15 THEN GOSUB 10090
1106 IF CHIME = 1 AND MIN = 30 THEN GOSUB 10090
1107 IF CHIME = 1 AND MIN = 45 THEN GOSUB 10090
1108 IF (MIN = 14) OR (MIN = 29) OR (MIN = 44) OR (MIN = 59) OR (MIN = 16) OR (MIN = 31) OR (MIN = 46) OR (MIN = 1) THEN CHIME = 1
1110 IF S2=XS2 THEN 1040
1111 GOSUB 10000
1115 IF DA$<>XDA$ THEN GOSUB 4060
1120 IF H1=0 THEN 1130 ELSE 1170
1130 IF H1=XH1 THEN 1450 ELSE XH1=H1
1140 FOR I=1 TO 7
1150 TEMP$(I)=ZER$(I):NEXT I
1160 GOSUB 3100:GOTO 1450
1170 IF H1=XH1 THEN 1450 ELSE XH1=H1
1180 ON H1 GOTO 1190,1220,1250,1280,1310,1340,1370,1400,1430
1190 FOR I=1 TO 7
1200 TEMP$(I)=ONE$(I):NEXT I:GOSUB 3100
1210 GOTO 1450
1220 FOR I=1 TO 7
1230 TEMP$(I)=TWO$(I):NEXT I:GOSUB 3100
1240 GOTO 1450
1250 FOR I=1 TO 7
1260 TEMP$(I)=THR$(I):NEXT I:GOSUB 3100
1270 GOTO 1450
1280 FOR I=1 TO 7
1290 TEMP$(I)=FOU$(I):NEXT I:GOSUB 3100
1300 GOTO 1450
1310 FOR I=1 TO 7
1320 TEMP$(I)=FIV$(I):NEXT I:GOSUB 3100
1330 GOTO 1450
1340 FOR I=1 TO 7
1350 TEMP$(I)=SIX$(I):NEXT I:GOSUB 3100
1360 GOTO 1450
1370 FOR I=1 TO 7
1380 TEMP$(I)=SEV$(I):NEXT I:GOSUB 3100
1390 GOTO 1450
1400 FOR I=1 TO 7
1410 TEMP$(I)=EIG$(I):NEXT I:GOSUB 3100
1420 GOTO 1450
1430 FOR I=1 TO 7
1440 TEMP$(I)=NIN$(I):NEXT I:GOSUB 3100
1450 IF H2=0 THEN 1460 ELSE 1500
1460 IF H2=XH2 THEN 1790 ELSE XH2=H2
1470 FOR I=1 TO 7
1480 TEMP$(I)=ZER$(I):NEXT I
1490 GOSUB 3140:GOTO 1790
1500 IF H2=XH2 THEN 1790 ELSE XH2=H2
1510 ON H2 GOTO 1520,1550,1580,1610,1640,1670,1700,1730,1760
1520 FOR I=1 TO 7
1530 TEMP$(I)=ONE$(I):NEXT I:GOSUB 3140
1540 GOTO 1790
1550 FOR I=1 TO 7
1560 TEMP$(I)=TWO$(I):NEXT I:GOSUB 3140
1570 GOTO 1790
1580 FOR I=1 TO 7
1590 TEMP$(I)=THR$(I):NEXT I:GOSUB 3140
1600 GOTO 1790
1610 FOR I=1 TO 7
1620 TEMP$(I)=FOU$(I):NEXT I:GOSUB 3140
1630 GOTO 1790
1640 FOR I=1 TO 7
1650 TEMP$(I)=FIV$(I):NEXT I:GOSUB 3140
1660 GOTO 1790
1670 FOR I=1 TO 7
1680 TEMP$(I)=SIX$(I):NEXT I:GOSUB 3140
1690 GOTO 1790
1700 FOR I=1 TO 7
1710 TEMP$(I)=SEV$(I):NEXT I:GOSUB 3140
1720 GOTO 1790
1730 FOR I=1 TO 7
1740 TEMP$(I)=EIG$(I):NEXT I:GOSUB 3140
1750 GOTO 1790
1760 FOR I=1 TO 7
1770 TEMP$(I)=NIN$(I):NEXT I:GOSUB 3140
1780 GOTO 3090
1790 IF M1=0 THEN 1800 ELSE 1840
1800 IF M1=XM1 THEN 2120 ELSE XM1=M1
1810 FOR I=1 TO 7
1820 TEMP$(I)=ZER$(I):NEXT I
1830 GOSUB 3210:GOTO 2120
1840 IF M1=XM1 THEN 2120 ELSE XM1=M1
1850 ON M1 GOTO 1860,1890,1920,1950,1980,2010,2040,2070,2100
1860 FOR I=1 TO 7
1870 TEMP$(I)=ONE$(I):NEXT I:GOSUB 3210
1880 GOTO 2120
1890 FOR I=1 TO 7
1900 TEMP$(I)=TWO$(I):NEXT I:GOSUB 3210
1910 GOTO 2120
1920 FOR I=1 TO 7
1930 TEMP$(I)=THR$(I):NEXT I:GOSUB 3210
1940 GOTO 2120
1950 FOR I=1 TO 7
1960 TEMP$(I)=FOU$(I):NEXT I:GOSUB 3210
1970 GOTO 2120
1980 FOR I=1 TO 7
1990 TEMP$(I)=FIV$(I):NEXT I:GOSUB 3210
2000 GOTO 2120
2010 FOR I=1 TO 7
2020 TEMP$(I)=SIX$(I):NEXT I:GOSUB 3210
2030 GOTO 2120
2040 FOR I=1 TO 7
2050 TEMP$(I)=SEV$(I):NEXT I:GOSUB 3210
2060 GOTO 2120
2070 FOR I=1 TO 7
2080 TEMP$(I)=EIG$(I):NEXT I:GOSUB 3210
2090 GOTO 2120
2100 FOR I=1 TO 7
2110 TEMP$(I)=NIN$(I):NEXT I:GOSUB 3210
2120 IF M2=0 THEN 2130 ELSE 2170
2130 IF M2=XM2 THEN 2450 ELSE XM2=M2
2140 FOR I=1 TO 7
2150 TEMP$(I)=ZER$(I):NEXT I
2160 GOSUB 3250:GOTO 2450
2170 IF M2=XM2 THEN 2450 ELSE XM2=M2
2180 ON M2 GOTO 2190,2220,2250,2280,2310,2340,2370,2400,2430
2190 FOR I=1 TO 7
2200 TEMP$(I)=ONE$(I):NEXT I:GOSUB 3250
2210 GOTO 2450
2220 FOR I=1 TO 7
2230 TEMP$(I)=TWO$(I):NEXT I:GOSUB 3250
2240 GOTO 2450
2250 FOR I=1 TO 7
2260 TEMP$(I)=THR$(I):NEXT I:GOSUB 3250
2270 GOTO 2450
2280 FOR I=1 TO 7
2290 TEMP$(I)=FOU$(I):NEXT I:GOSUB 3250
2300 GOTO 2450
2310 FOR I=1 TO 7
2320 TEMP$(I)=FIV$(I):NEXT I:GOSUB 3250
2330 GOTO 2450
2340 FOR I=1 TO 7
2350 TEMP$(I)=SIX$(I):NEXT I:GOSUB 3250
2360 GOTO 2450
2370 FOR I=1 TO 7
2380 TEMP$(I)=SEV$(I):NEXT I:GOSUB 3250
2390 GOTO 2450
2400 FOR I=1 TO 7
2410 TEMP$(I)=EIG$(I):NEXT I:GOSUB 3250
2420 GOTO 2450
2430 FOR I=1 TO 7
2440 TEMP$(I)=NIN$(I):NEXT I:GOSUB 3250
2450 IF S1=0 THEN 2460 ELSE 2500
2460 IF S1=XS1 THEN 2780 ELSE XS1=S1
2470 FOR I=1 TO 7
2480 TEMP$(I)=ZER$(I):NEXT I
2490 GOSUB 3320:GOTO 2780
2500 IF S1=XS1 THEN 2780 ELSE XS1=S1
2510 ON S1 GOTO 2520,2550,2580,2610,2640,2670,2700,2730,2760
2520 FOR I=1 TO 7
2530 TEMP$(I)=ONE$(I):NEXT I:GOSUB 3320
2540 GOTO 2780
2550 FOR I=1 TO 7
2560 TEMP$(I)=TWO$(I):NEXT I:GOSUB 3320
2570 GOTO 2780
2580 FOR I=1 TO 7
2590 TEMP$(I)=THR$(I):NEXT I:GOSUB 3320
2600 GOTO 2780
2610 FOR I=1 TO 7
2620 TEMP$(I)=FOU$(I):NEXT I:GOSUB 3320
2630 GOTO 2780
2640 FOR I=1 TO 7
2650 TEMP$(I)=FIV$(I):NEXT I:GOSUB 3320
2660 GOTO 2780
2670 FOR I=1 TO 7
2680 TEMP$(I)=SIX$(I):NEXT I:GOSUB 3320
2690 GOTO 2780
2700 FOR I=1 TO 7
2710 TEMP$(I)=SEV$(I):NEXT I:GOSUB 3320
2720 GOTO 2780
2730 FOR I=1 TO 7
2740 TEMP$(I)=EIG$(I):NEXT I:GOSUB 3320
2750 GOTO 2780
2760 FOR I=1 TO 7
2770 TEMP$(I)=NIN$(I):NEXT I:GOSUB 3320
2780 IF S2=0 THEN 2790 ELSE 2820
2790 FOR I=1 TO 7
2800 TEMP$(I)=ZER$(I):NEXT I
2810 GOSUB 3360:GOTO 3090
2820 XS2=S2:ON S2 GOTO 2830,2860,2890,2920,2950,2980,3010,3040,3070
2830 FOR I=1 TO 7
2840 TEMP$(I)=ONE$(I):NEXT I:GOSUB 3360
2850 GOTO 3090
2860 FOR I=1 TO 7
2870 TEMP$(I)=TWO$(I):NEXT I:GOSUB 3360
2880 GOTO 3090
2890 FOR I=1 TO 7
2900 TEMP$(I)=THR$(I):NEXT I:GOSUB 3360
2910 GOTO 3090
2920 FOR I=1 TO 7
2930 TEMP$(I)=FOU$(I):NEXT I:GOSUB 3360
2940 GOTO 3090
2950 FOR I=1 TO 7
2960 TEMP$(I)=FIV$(I):NEXT I:GOSUB 3360
2970 GOTO 3090
2980 FOR I=1 TO 7
2990 TEMP$(I)=SIX$(I):NEXT I:GOSUB 3360
3000 GOTO 3090
3010 FOR I=1 TO 7
3020 TEMP$(I)=SEV$(I):NEXT I:GOSUB 3360
3030 GOTO 3090
3040 FOR I=1 TO 7
3050 TEMP$(I)=EIG$(I):NEXT I:GOSUB 3360
3060 GOTO 3090
3070 FOR I=1 TO 7
3080 TEMP$(I)=NIN$(I):NEXT I:GOSUB 3360
3090 XS2=S2:GOTO 1040
3100 FOR I=1 TO 7
3110 LOCATE 9+I,5:PRINT TEMP$(I)
3120 NEXT I
3130 RETURN
3140 FOR I=1 TO 7
3150 LOCATE 9+I,14:PRINT TEMP$(I)
3160 NEXT I
3170 FOR I=1 TO 7
3180 LOCATE 9+I,26:PRINT COL$(I)
3190 NEXT I
3200 RETURN
3210 FOR I=1 TO 7
3220 LOCATE 9+I,32:PRINT TEMP$(I)
3230 NEXT I
3240 RETURN
3250 FOR I=1 TO 7
3260 LOCATE 9+I,42:PRINT TEMP$(I)
3270 NEXT I
3280 FOR I=1 TO 7
3290 LOCATE 9+I,54:PRINT COL$(I)
3300 NEXT I
3310 RETURN
3320 FOR I=1 TO 7
3330 LOCATE 9+I,60:PRINT TEMP$(I)
3340 NEXT I
3350 RETURN
3360 FOR I=1 TO 7
3370 LOCATE 9+I,70:PRINT TEMP$(I)
3380 NEXT I
3390 RETURN
4060 MO$=MID$(DATE$,1,2)
4070 DA$=MID$(DATE$,4,2)
4080 YR$=MID$(DATE$,9,2)
4081 YR4$=MID$(DATE$,7,4)
4090 MO=VAL(MO$)
4091 YR=VAL(YR$)
4092 YR4=VAL(YR4$)
4100 ON MO GOTO 4110,4120,4130,4140,4150,4160,4170,4180,4190,4200,4210,4220
4110 MO$="JANUARY":GOTO 4230
4120 MO$="FEBRUARY":GOTO 4230
4130 MO$="MARCH":GOTO 4230
4140 MO$="APRIL":GOTO 4230
4150 MO$="MAY":GOTO 4230
4160 MO$="JUNE":GOTO 4230
4170 MO$="JULY":GOTO 4230
4180 MO$="AUGUST":GOTO 4230
4190 MO$="SEPTEMBER":GOTO 4230
4200 MO$="OCTOBER":GOTO 4230
4210 MO$="NOVEMBER":GOTO 4230
4220 MO$="DECEMBER":GOTO 4230
4230 YEAR%=YR4
4233 MONTH%=MO
4235 DAY%=VAL(DA$)
4240 IF MONTH%=1 OR MONTH%=2 THEN 4250 ELSE 4270
4250 YEAR%=YEAR%-1
4260 MONTH%=MONTH%+12
4270 DOW.K%=DAY%+YEAR%+MONTH%*2+YEAR%\4+YEAR%\400+(MONTH%+1)*3\5+2-YEAR%\100
4330 DOW%=DOW.K% MOD 7
4360 IF DOW%=0 OR DOW%=1 THEN DOW%=DOW%+7
4370 DOW%=DOW%-1
4500 ON DOW% GOTO 4510,4520,4530,4540,4550,4560,4570
4510 DOW$="MONDAY":GOTO 4580
4520 DOW$="TUESDAY":GOTO 4580
4530 DOW$="WEDNESDAY":GOTO 4580
4540 DOW$="THURSDAY":GOTO 4580
4550 DOW$="FRIDAY":GOTO 4580
4560 DOW$="SATURDAY":GOTO 4580
4570 DOW$="SUNDAY":GOTO 4580
4580 LOCATE 22,28:PRINT DOW$;", ";MO$;" ";DA$;", ";YR4$;"     "
4590 RETURN
10000 IF NOCHIME THEN RETURN ELSE IF TICKOFF < 0 THEN TICKOFF = TICKOFF + 1:RETURN
10003 IF ODD = 1 THEN SOUND 1000,1:SOUND 37,0:SOUND 32767,1:ODD = 0:RETURN
10010 SOUND 5000,1:SOUND 37,0:SOUND 32767,1:ODD = 1:RETURN
10090 CHIME = 0
10095 ODD = 0
10100 IF MIN = 15 THEN PLAY Q15$:TICKOFF = -2:RETURN
10110 IF MIN = 30 THEN PLAY Q15$+Q30$:TICKOFF = -5:RETURN
10120 IF MIN = 45 THEN PLAY Q15$+Q30$+Q15$:TICKOFF = -7:RETURN
10130 IF MIN = 0 THEN PLAY Q15$+Q30$+Q15$+Q30$:TICKOFF = -9 + -1*HOUR
10135 PLAY "mbP2"
10140 FOR II = 1 TO HOUR
10150 PLAY"MBO3CN0"
10160 NEXT II
10170 RETURN
```
{% endraw %}

## COMPUTER.BAS

{% raw %}
```bas
10 FOR S%=1 TO 8:SOUND RND*1000+37,2:NEXT
```
{% endraw %}

## DISKPGM1.BAS

{% raw %}
```bas
5 ' *DISKPGM1.BAS     PROGRAM TO PRINT WHAT IS ON THE DISK AND GIVE IT A TITLE
10 CLS
20 PRINT "(C) Copyright, Richard Schinnell,Rockville, MD. 20853 (301) 949-8848
30 PRINT "THIS PROGRAM WILL CHECK AN ASCII FILE ON DISK FOR LINES/BYTES AND
40 PRINT"(PROGRAM REQUIRES BASICA) AND THE TIME IT WILL TAKE TO DOWNLOAD IT.
50 PRINT"PLACE YOUR PRINTER ON LINE AND PUT IT TO THE TOP OF A PAGE PLEASE.
60 PRINT:LOCATE 10,1,1:COLOR 28,0:
70 LOCATE 10,1,1:COLOR 28,0:PRINT" WHAT NAME DO YOU WANT TO PRINT ON THE PRINTER AS THE"
80 PRINT" NAME OF THE DISK ? ":LOCATE 15,15:COLOR 7,0:INPUT X$:IF LEN(X$)>50 THEN PRINT" LENGTH IS GREATER THAN 50 PLEASE RE INPUT DISK NAME >>>>> ":GOTO 70
90 TITLE$=X$
100 COLOR 28,0:PRINT" WHICH DISK DRIVE DO YOU WANT TO CHECK> A OR B :":COLOR 7,0
110 RICH$=INKEY$:IF LEN(RICH$)<>1 THEN 110
120 IF LEFT$(RICH$,1)="A" OR LEFT$(RICH$,1) ="B" THEN DRIV$=LEFT$(RICH$,1)+":" ELSE 100
130 ON ERROR GOTO 660
140 LPRINT"  FILE SORTING AND PRINTING PROGRAM BY RICH SCHINNELL":LPRINT
150 FALSE=0:TRUE=NOT FALSE:DEFINT A-Z:L=0:CLS:CODE=43:DIM F$(75)
160 FILES DRIV$+"*.*"
170 CLINE1 = CSRLIN
180 D=0
190 LOCATE 1,1,1
200 FOR I = 1 TO CLINE1
210 FOR B = 1 TO 66 STEP 13
220 D=D+1
230 FOR N = 0 TO 11
240 T = SCREEN(I,(B+N)):F$(D)=F$(D)+CHR$(T)
250 NEXT N
260 IF LEFT$(F$(D),1)=" " THEN D=D-1 :GOTO 300
270 F$(D)= DRIV$+F$(D)
280 NEXT B
290 NEXT I
300 LOCATE 15,1:COLOR 26,0:PRINT "ALPHABETIZING THE FILE NAMES ":COLOR 7,0
310 ' THIS ALPHABETIZES THE ARRAY
320 FOR X=1 TO D-1:FOR Y=X+1 TO D:IF F$(Y)<F$(X) THEN SWAP F$(X),F$(Y)
330 NEXT Y:NEXT X
340 CLS:LOCATE 12,25:COLOR 28,0:PRINT " WORKING FILES ":COLOR 7,0:LPRINT "This program prints the files on disk and then"
350 LPRINT"prints the lines/bytes/minutes/seconds to transfer"
360 LPRINT"the files at 300 baud. The words PROBABLY NOT IN "
370 LPRINT"ASCII  is an indication of control characters in your file.
380 LPRINT:LPRINT" (C) COPYRIGHT,1982, RICHARD SCHINNELL,ROCKVILLE,MD"
390 LPRINT
400 LPRINT" TITLE>>> ";TITLE$
410 LPRINT
420 LPRINT" AS OF ";TIME$;" ON ";DATE$
430 LPRINT       " FILESPEC           LINES   BYTES  MIN SEC "
440 LPRINT       "------------------   ----   -----   -- --   COMMENTS!!!!!"
450 FOR P = 1 TO D
460 CNT=0:L#=0:M=0:S=0:COMENT$=""
470 OPEN F$(P) FOR INPUT AS #1
475 CLS:LOCATE 12,25:COLOR 28,0:PRINT " WORKING FILE ";F$(P):COLOR 7,0
480 IF EOF(1) THEN 500
490 LINE INPUT #1,A$:L#=L#+LEN(A$):CNT=CNT+1:GOTO 480
500 CLOSE:OPEN F$(P) FOR INPUT AS #1
510 IF EOF(1) THEN 530
520 LINE INPUT #1,A$:A$=LEFT$(A$,80)
530 CLOSE
540 FOR I=1 TO LEN(A$):IF ASC(MID$(A$,I,1))<17 OR ASC(MID$(A$,I,1))>126 THEN F$(P)="**"+MID$(F$(P),3,12):NEXT I
550 IF LEFT$(F$(P),2)= "**" THEN CNT=0:L#=0:M=0:S=0:COMENT$="PROBABLY NOT IN ASCII":F$(P) = DRIV$+MID$(F$(P),3,12):GOTO 580
560 T=INT(L#/22.5):M=INT(T/60):S=T-M*60
570 IF S<1 THEN S=1
580 F$(P) = "  "+MID$(F$(P),3,12)
590 LPRINT USING "\             \     ####    #####  ##  ##  \                   \";F$(P);CNT;L#;M;S;COMENT$
595 TOT#=TOT#+L#
600 NEXT P
610 LPRINT:LPRINT
620 LPRINT P-1;" FILES DISK TITLE>> ";TITLE$:LPRINT " TOTAL OF ";TOT#;" ASCII BYTES "
630 LPRINT:LPRINT
640 CLS:PRINT "YOU ARE BACK IN BASIC NOW "
650 END
660 PRINT "ERROR ";ERR;" HAS OCCURED IN LINE # ";ERL
670 IF ERR>23 AND ERR<27 THEN PRINT " PLACE YOUR PRINTER ON LINE PLEASE:
680 END
```
{% endraw %}

## ENGINE.BAS

{% raw %}
```bas
10 FOR S%=1 TO 25:SOUND 45,3:SOUND 38,1:SOUND 45,3:SOUND 37,2:NEXT
```
{% endraw %}

## FILES53.TXT

{% raw %}
```
Disk No:   53
Program Title: SOUNDS
PC-SIG version: 1.2

Sounds is a host of BASIC sound routines that are fun to play around
with or incorporate in your own programs to give them a unique touch.
WordStar utilities let you remove those troublesome 'high-order'
characters, and some handy file routines let you do file or directory
sorts, control your display, or put a clock on your computer screen.

Usage:  Text and System Tools.

Special Requirements:  BASIC language.

How to Start:  Type GO (press enter).

Suggested Registration:  None.

File Descriptions:

HRSERACE BAS  Horse racing game
IPCOGOLF BAS  Golf game
PHOENIX  BAS  BASIC game
NADAI    BAS  BASIC game
SESAME   BAS  BASIC game
STARWARS BAS  BASIC game
CHARMAP  BAS  Displays character set on screen
BASECONV BAS  Numeric base conversion
ATTRIB   BAS  Sets up video display attributes
ATTRIB   ABS  Abstract for ATTRIB.BAS
CLOCK    BAS  Displays clock on screen
DISKPGM1 BAS  Produces alphabetical list of programs on disk
DISKPGM1 ABS  Abstract for DISKPGM1.BAS
FILESORT BAS  File sort routine
KYBDSET  SUB  Keyboard subroutine
QUICKSRT BAS  Quicksort demo
SEESWTCH BAS  Displays computers switch settings
SCROLL   SUB  Scroll subroutine  (In BASIC)
UNWS     ASM  Source for UNWS.COM
SHELLSRT BAS  Shellsort demo
WSFIX2   TXT  Wordstar fixes
UNWS     COM  Converts Wordstar files to DOS files
SOUND1   BAS  Makes sound
-------- ---  SOUNDS
WSPATCH2 BAS  Installs various printers for Wordstar
WSMOD    DOC  How to modify Wordstar 3.2 screen/printer controls
CHIRP    BAS  Makes sound
PHASER   BAS  Makes sound
UPBEAT   BAS  Makes sound
BOMB     BAS  Makes sound
SIREN    BAS  Makes sound
TADADADA BAS  Makes sound
TADAA    BAS  Makes sound
SORRY    BAS  Makes sound
SRS      BAS  Makes sound
ENGINE   BAS  Makes sound
COMPUTER BAS  Makes sound
SHIELDS  BAS  Makes sound
TORPEDOB BAS  Makes sound
PHASERB  BAS  Makes sound
LRS      BAS  Makes sound

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1985,86,87,88,89 PC-SIG, Inc.

```
{% endraw %}

## FILESORT.BAS

{% raw %}
```bas
10 REM ----------------------------------------------
15 REM
20 REM               FILESORT.BAS
25 REM               Enter, sort, and print
30 REM               a list of words using
35 REM               the Quickersort method.
40 REM
45 REM -----------------------------------------------
50 DIM STACK% ( 500 )   'pushdown stack; set for 500 items
55 REM --------------Restart here---------------------
56 CLS:KEY OFF
57 PRINT TAB(30)"FILESORT PROGRAM":PRINT:PRINT
60 PRINT"[ 1]. Enter a list of words."
65 PRINT"[ 2]. Sort the list of words."
70 PRINT"[ 3]. Print the list of words."
72 PRINT"[ 4]. Add to existing list."
75 PRINT"[ 5]. Stop."
80 PRINT:PRINT"Select one of the above (1 to 5):";:INPUT J%:PRINT
85 ON J% GOTO 100,300,500,700,1420
100 REM ------------------------------------
101 REM     Input a random file of words.
102 REM     Wide% = max. length
103 REM ------------------------------------
110 CLS:LINE INPUT"Enter name of list: "; F$:PRINT
115 LINE INPUT "Correct (y/n) ? ";Y$:PRINT
120 IF Y$<>"y" AND Y$<>"Y" THEN 110
125 H$=F$+".hed":F$=F$+".dat"
126 INPUT "Enter maximum word length: ",WIDE%:PRINT
127 LINE INPUT "Correct (y/n) ? ";Y$:PRINT
128 IF Y$<>"y" AND Y$<>"Y" THEN 126
129 REM -------------Open, initialize file------------
130   OPEN "R",1,F$,WIDE%
135   FIELD 1, WIDE% AS REC$
140   P%=0
141 REM ----------------------------------------------
145  CLS:PRINT"Press ENTER key to stop":PRINT
150  PRINT"Enter up to ";WIDE%;" characters : ":PRINT
152 REM ----------------------------------------------
153   LINE INPUT">";K$
155   LSET REC$=K$
160   IF LEN ( K$ )=0 THEN 250
165   P%=P%+1  'DIRECT ACCESS LOCATION
170   PUT 1, P%     'WRITE TO FILE
175 GOTO 153        'GET ANOTHER WORD
240 REM ---------------------------
245 REM    Write header file
250 REM ---------------------------
255 PRINT"Done. Writing header file.":PRINT
260 CLOSE 1
265   OPEN "O",1,H$
270   PRINT #1,P%,WIDE%  'SAVE LENGTH
275   CLOSE 1
280 GOTO 55              'RESTART MENU
300 REM --------------------------
305 REM
310 REM       QUICKERSORT
315 REM
320 REM --------------------------
325 REM
330    LINE INPUT "Enter name of list : "; F$:PRINT
335    LINE INPUT "Correct (y/n) ? ";Y$:PRINT
340    IF Y$<>"y" AND Y$<>"Y" THEN 330
345 H$=F$+".hed":F$=F$+".dat"
350 TOS%=0
352 REM ---------Read header file ------------
355  OPEN "I",1,H$:INPUT #1,N%,WIDE%:CLOSE 1
358 REM---Open word list file ---------------
360  OPEN "R",1,F$,WIDE%
365  FIELD 1, WIDE% AS REC$
366 REM ------Allocate string space ---------------
370  R$=SPACE$(WIDE%):S$=SPACE$(WIDE%)
375  K$=SPACE$(WIDE%):MIDL$=SPACE$(WIDE%)
378 REM
380 REM -------Start quickersorting--------------------
382 REM
385 L%=1: RIGHT%=N%:GOSUB 1000   'push
390 REM ------------Loop here----------------
400 GOSUB 1100                   'Pop left%,right%
405 REM-----------iNNER LOOP-----------------
410 GOSUB 1200                   'exchange
420 IF NEWL%<RIGHT% THEN L%=NEWL%:GOSUB 1000
430 RIGHT%=NEWR%
440 IF LEFT% < RIGHT% THEN 410
442 REM -----Keep user informed -------------
445   PRINT TOS%/2;"  lists to do.":PRINT
447 REM
450 IF TOS%<> 0 THEN 400         'End loop
455 PRINT F$; " is sorted.":PRINT
460 CLOSE 1
470 GOTO 55                      'Restart menu
500 REM -----------------------
501 REM     Print list
502 REM ------------------------
530  LINE INPUT"Enter name of list : "; F$:PRINT
535 LINE INPUT "Correct (y/n) ? ";Y$:PRINT
540 IF Y$<>"y" AND Y$<>"Y" THEN 530
545 H$=F$+".hed":F$=F$+".dat"
547 REM -------Get file length and width-----------
550  OPEN "I",1,H$
555  INPUT #1,N%,WIDE%
557 REM ---------Open direct access file--------------
560  CLOSE 1
565  OPEN "R",1,F$,WIDE%
570  FIELD 1,   WIDE% AS REC$
571 REM ---------------------------------
575 K$=SPACE$(WIDE%)
580 LINE INPUT"Printer ready ? ";Y$:PRINT
585 LPRINT "List = ";F$
590 LPRINT  :LPRINT
592 REM -------Access, fetch, and print ---------------
595 FOR I%=1 TO N%
600  GET 1, I%:LSET K$=REC$
605  LPRINT K$
610 NEXT I%
615 CLOSE 1
620 LINE INPUT"Ready ?";Y$:PRINT
625 GOTO 55                   'restart menu
700 REM-------------------------
710 REM     ADD TO LIST
720 REM-------------------------
730  CLS:LINE INPUT"Enter name of list : "; F$:PRINT
735 LINE INPUT "Correct (y/n) ? ";Y$:PRINT
740 IF Y$<>"y" AND Y$<>"Y" THEN 730
745 H$=F$+".hed":F$=F$+".dat"
746 REM -----------Get length and width of list------------
750 OPEN "i",1,H$
755  INPUT #1,N%,WIDE%
760 CLOSE 1
762 REM  ----------Prepare to append to list--------
765  OPEN "R",1,F$,WIDE%
770  FIELD 1,   WIDE% AS REC$
775 P%=N%
780 GOTO 145              'Append
1000 REM -------------------
1005 REM    PUSH
1010 REM -------------------
1020 TOS%=TOS%+2
1025 STACK%( TOS%-1 )=L%
1030 STACK%( TOS% )=RIGHT%
1035 RETURN
1100 REM--------------------
1105 REM    pop
1110 REM--------------------
1115 REM
1120 RIGHT%=STACK%(TOS%)
1125 LEFT%=STACK%( TOS%-1 )
1130 TOS%=TOS%-2
1135 RETURN
1200 REM -------------------
1205 REM    EXCHANGE
1210 REM------------------
1220 NEWL%=LEFT%:NEWR%=RIGHT%
1225 MIDL%=(LEFT%+RIGHT%)/2
1230 GET 1, MIDL%:LSET MIDL$=REC$
1235 REM ---------REPEAT-------------
1240 REM ---------WHILE--------------
1242 REM    SEARCH FOR K$>MIDL$
1245  GET 1,NEWL%:LSET K$=REC$
1250  IF K$<MIDL$ THEN NEWL%=NEWL%+1:GOTO 1240
1255 LSET S$=K$    'SAVE K$ FOR LATER
1300 REM ---------WHILE--------------
1303 REM   SEARCH FOR K$<MIDL$
1305 GET 1,NEWR%:LSET K$=REC$
1310 IF K$>MIDL$ THEN NEWR%=NEWR%-1:GOTO 1300
1315 LSET R$=K$
1320 IF NEWL% <= NEWR% THEN 1325 ELSE 1400
1322 REM -----EXCHANGE FILE RECORDS------------
1325 LSET REC$=S$
1330 PUT 1, NEWR%               'PUT LEFT IN RIGHT
1335 LSET REC$=R$
1340 PUT 1, NEWL%              'PUT RIGHT IN LEFT
1345 NEWL%=NEWL%+1
1350 NEWR%=NEWR%-1
1400 IF NEWL% <=NEWR% THEN 1235
1410 RETURN
1420 END
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<<  Disk No: 53  Sounds  >>>>                      ║
╠═════════════════════════════════════════════════════════════════════════╣
║   For instructions on running BASIC programs, please                    ║
║   refer to your computer manual concerning BASIC language files.        ║
║   For instructions on ASM listings, refer to your Assembler manual.     ║
║   To read TXT files simply enter TYPE filename.ext and (press enter)    ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## LRS.BAS

{% raw %}
```bas
10 FOR S%=1 TO 20:SOUND 300,1:SOUND 350,1:NEXT
```
{% endraw %}

## PHASER.BAS

{% raw %}
```bas
10 FOR J=1 TO 5:FOR I=15000 TO 6000 STEP -100:SOUND I,0.015625:NEXT:FOR I = 100 TO 50 STEP -1: SOUND I,1:NEXT:NEXT
```
{% endraw %}

## PHASERB.BAS

{% raw %}
```bas
10 FOR S%=1 TO 15:SOUND 800,0.1:SOUND 200,0.5:SOUND 800,0.3:SOUND 900,0.1:NEXT
```
{% endraw %}

## QUICKSRT.BAS

{% raw %}
```bas
10 CLS :KEY OFF: LOCATE 1,32 :PRINT "QuickSort"
20 N=100 : R=VAL(RIGHT$(TIME$,2)) :RANDOMIZE R
30 PRINT :PRINT "   Generating array of";N;"random numbers to be sorted : RANDOMIZE (";R;")
40 C1 = 0 : S1 = 0
50 DIM X(500),S9(20,2)
60 FOR K=1 TO N
70 LET X(K) = INT(22*RND)
80 NEXT K
90 PRINT
100 GOSUB 330
102 PRINT :PRINT "   Now sorting the array " : ROW=CSRLIN-1
105 DEF FNT(D)=VAL(MID$(TIME$,7,2))+VAL(MID$(TIME$,4,2))*60 +VAL(MID$(TIME$,1,2))*3600
107 TM1=FNT(D) ' ********** Start Timer ************
110 I1=1 : J1 = N
120 I=I1 :  J = J1 : S = -1
130 C1=C1 + 1
140 IF X(I)<=X(J) THEN 180
150 S1 = S1 + 1
160 T=X(I) : X(I)=X(J) : X(J)=T
170 S=SGN(-S)
180 IF S=1 THEN I=I+1 ELSE J=J-1
190 IF I<J THEN 130
200 IF I+1 >= J1 THEN 220
210 P=P+1 : S9(P,1)= I + 1: S9(P,2)= J1
220 J1 = I - 1
230 IF I1<J1 THEN 120
240 IF P=0 THEN 280
250 I1=S9(P,1) : J1=S9(P,2) : P=P-1
260 GOTO 120
280 TM2=FNT(D) ' *********** Stop Timer ************
285 ' *** Print Sorted Array
290 LOCATE 25,4 : PRINT N; "Random Numbers    ";C1;"Comparisons    ";S1;"Swaps    ";TM2-TM1;"Seconds"
300 LOCATE ROW-1,1 :GOSUB 330
320 LOCATE 1 :END
330 FOR K=1 TO N '****** PRINT ARRAY SUBROUTINE *********
340 LET Z=K-10*INT((K-1)/10)
350 PRINT TAB(8*(Z-1));X(K);
360 IF Z>=10 THEN PRINT
370 NEXT K
380 RETURN
390 END
```
{% endraw %}

## SEESWTCH.BAS

{% raw %}
```bas
10 KEY OFF:CLS
20 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
30 PRINT"░┌───────────────────────────────────┐░"
40 PRINT"░│                                   │░"
50 PRINT"░│            7019-A.BAS             │░"
60 PRINT"░│       SCROLL  DEMONSTRATION       │░"
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
1000 '***************************************************
1010 '***   SPC CORPORATION                           ***     Compliments of
1020 '***   PO BOX 9038                               ***    UTAH BLUE CHIPS
1030 '***   OGDEN, UT 84409                           ***   IBM PC Users Group
1040 '***                                             ***
1050 '***   THIS SOFTWARE IS AVAILABLE FOR COPY AND   ***     December 1982
1060 '***   USE IN THE PUBLIC DOMAIN.                 ***
1070 '***************************************************
1080 '******************************************************
1090 '***   READ AND DECODE THE SYSTEM OPTION SWITCHES   ***
1100 '******************************************************
1110 '**********************************
1120 '***   ESTABLISH OPTION MASKS   ***
1130 '**********************************
1140 MASK.DISK = &HC0
1150 MASK.DISK.IPL = &H1
1160 MASK.DISPLAY = &H30
1170 MASK.MEMORY.2 = &HF
1180 MASK.MEMORY.1 = &HC
1190 '*********************************
1200 '***   SET UP PORT ADDRESSES   ***
1210 '*********************************
1220 PORT.A = &H60
1230 PORT.B = &H61
1240 PORT.C = &H62
1250 '*****************************
1260 '***   READ THE SWITCHES   ***
1270 '*****************************
1280 OUT PORT.B,&H84 : 'SET CONTROL REGISTER TO READ SWITCHES
1290 SWITCH.1 = INP(PORT.A)
1300 SWITCH.2 = INP(PORT.C)
1310 OUT PORT.B,&H40 : 'SET CONTROL REGISTER TO READ KEYBOARD
1320 '*************************************************************************
1330 '**  DECODE SWITCH 1 FOR MEMORY SIZE, NUMBER OF DISKS, AND DISPLAY TYPE **
1340 '**  IF MEMORY SIZE =>65536 THEN CHECK SWITCH 2 FOR MEMORY SIZE.        **
1350 '*************************************************************************
1360 MEMORY.SIZE# = SWITCH.1 AND MASK.MEMORY.1
1370 MEMORY.SIZE# = (1# + MEMORY.SIZE#/ 2^2) * 16384#
1380 IF MEMORY.SIZE# < 65535# THEN 1400
1390 MEMORY.SIZE# = MEMORY.SIZE# + ( SWITCH.2 AND MASK.MEMORY.2 ) * 32768#
1400 IF MASK.DISK.IPL AND SWITCH.1 THEN						    NUMBER.OF.DISKS = 1 + (SWITCH.1 AND MASK.DISK) / 2^6
1410 DISPLAY.TYPE = ( SWITCH.1 AND MASK.DISPLAY ) /2^4
1420 '**********************************************
1430 '***   DISPLAY THE RESULTS IN HUMAN TERMS   ***
1440 '**********************************************
1450 DATA "RESERVED DISPLAY TYPE"
1460 DATA "A COLOR DISPLAY INTERFACE. 40 CHARACTERS BY 25 LINES."
1470 DATA "A COLOR DISPLAY INTERFACE. 80 CHARACTERS BY 25 LINES."
1480 DATA "AN IBM MONOCHROME DISPLAY. 80 CHARACTERS BY 25 LINES."
1490 FOR I=0 TO 3 : READ DISPLAY.OPTION$(I) : NEXT I
1500 CLS
1510 PRINT "Switch settings for this IBM Personal Computer indicate:"
1520 PRINT " ";DISPLAY.OPTION$(DISPLAY.TYPE)
1530 PRINT NUMBER.OF.DISKS;"- 5 1/4 INCH DISK DRIVES."
1540 PRINT MEMORY.SIZE#;"(";MEMORY.SIZE#/1024#;"K ) BYTES RANDOM ACCESS MEMORY."
```
{% endraw %}

## SHELLSRT.BAS

{% raw %}
```bas
10 CLS :LOCATE 2,30 :PRINT "SHELL SORT"
100 REM SHELL SORT
120 REM SORT A MIXED BATCH OF NUMBERS, B(), INTO ASCENDING ORDER.
130 REM REFERENCE: DL SHELL, `A HIGH-SPEED SORTING PROCEDURE'
140 REM B()  THE BATCH OF NUMBERS
150 REM E$   EXCHANGE  MARKER
160 REM G    THE GAP
170 REM I    INDEX VARIABLE
180 REM S    THE STEP ACROSS THE GAP
190 REM T    THE TOP OF THE PASS THROUGH THE NUMBERS
200 LET N9 = 100   'NUMBER OF DATA
210 DIM B(100)
220 R=VAL(RIGHT$(TIME$,2)) : RANDOMIZE R :
230 PRINT :PRINT "Generating an array of";N9;"random numbers to be sorted :  RANDOMIZE(";R;")":PRINT
380 FOR I = 1 TO N9
390 LET B(I) = INT(RND*25 + 1)
400 NEXT I
410 GOSUB 690
420 PRINT
430 PRINT :PRINT :PRINT "Sorting the numbers now :":PRINT
431 DEF FNT(D)=VAL(MID$(TIME$,1,2))*3600+VAL(MID$(TIME$,4,2))*60+VAL(MID$(TIME$,7,2))
432 TM1=FNT(D) ' ************* Start Timer ***********
450 LET E$ = "  "
460 LET S = 0
470 LET T = 0
480 LET X = 0
490 LET G = N9
510 IF G <=1 THEN 680 ' Test for Finish
520 LET G = INT(G/2)
530 LET T = N9 - G
540 LET E$ = "NO EXCHANGE"
550 FOR I = 1 TO T
560 LET S = I + G
570 IF B(I) <=B(S) THEN 630
580 LET X = B(I)
590 LET B (I) = B (S)
600 LET B(S) = X
610 LET E$ = "EXCHANGE"
630 NEXT I
640 IF E$ = "NO EXCHANGE" THEN 670
650 GOTO 540
670 GOTO 510
680 TM2=FNT(D) : GOTO 750 ' ****** Stop Timer ********
690 FOR I = 1 TO N9 ' ********* Print Array Subroutine ********
700 PRINT B(I);
710 NEXT I
740 RETURN
750 GOSUB 690 : :PRINT :PRINT : PRINT :PRINT "Time to sort";N9;"items :";TM2-TM1;"seconds" :LOCATE 23 :END
```
{% endraw %}

## SHIELDS.BAS

{% raw %}
```bas
10 FOR S%=1 TO 25:SOUND RND*1000+37,0.8:NEXT
```
{% endraw %}

## SIREN.BAS

{% raw %}
```bas
5 SIGNAL = 0
10 CLS
15 FOR SIGNAL = 1 TO 5
20 FOR I = 400 TO 800 STEP 9 :SOUND I,1:NEXT:FOR I = 800 TO 400 STEP - 9:SOUND I,1:NEXT
25 NEXT
50 FOR I = 400 TO 200 STEP - 8:SOUND I,1:NEXT
```
{% endraw %}

## SORRY.BAS

{% raw %}
```bas
10 SOUND 70,8:SOUND 45,15
```
{% endraw %}

## SOUND1.BAS

{% raw %}
```bas
10 FOR J=1 TO 5:FOR I=1000 TO 400 STEP -1:SOUND I,0.015625:NEXT:NEXT:FOR I=399 TO 100 STEP -1:SOUND I,0.02:NEXT
```
{% endraw %}

## SRS.BAS

{% raw %}
```bas
10 FOR S%=1 TO 10:SOUND 550,2:SOUND 450,1:NEXT
```
{% endraw %}

## TADAA.BAS

{% raw %}
```bas
10 PLAY "l8cl2e"
```
{% endraw %}

## TADADADA.BAS

{% raw %}
```bas
10 PLAY "L8CEFGP16L8EL4G"
```
{% endraw %}

## TORPEDOB.BAS

{% raw %}
```bas
10 FOR J=1 TO 1:FOR I=15000 TO 6000 STEP -100:SOUND I,0.015625:NEXT:FOR I = 100 TO 50 STEP -1: SOUND I,1:NEXT:NEXT
```
{% endraw %}

## UNWS.ASM

{% raw %}
```
 
TITLE NWS - ASSEMBLER PROGRAM TO STRIP HI-ORDER BITS FROM WORDSTAR FILES
SUBTTL DESCRIPTION OF THE STACK SEGMENT
        PAGE
STACK   SEGMENT PARA STACK 'STACK'
        DB      64 DUP('STACK   ')
STACK   ENDS
SUBTTL DESCRIPTION OF THE DATA SEGMENT
        PAGE
WORKAREA SEGMENT PARA PUBLIC 'DATA'
LOGO    DB      '       ***********************************************************************',10,13
        db      '       *                                                                     *',10,13
        db      '       *                        UN - Wordstar                                *',10,13
        db      '       *   A program to remove the high-order bits from Wordstar data        *',10,13
        db      '       *   files.  You are prompted for the input and output file names.     *',10,13
        db      '       *                                                                     *',10,13
        db      '       *     Written as an assembler language example by Gene Plantz         *',10,13
        db      '       ***********************************************************************',10,10,10,10,13,'$'
donem   db      '-------->    DONE    <-------------',10,13,'$'
eofflag db      0
crlf    db      10,13,'$'       ;issue carriage return-linefeed after input
fcb1    db      40 dup(0)       ;input file  only needs to be 36 (but safe)
fcb2    db      40 dup(0)       ;file control block for output
err0    db      7,7,'--->  ERROR Opening INPUT file  <--------',10,13,'$'
err1    db      7,7,'--->  ERROR.. not enough disk space for output <---',10,13,'$'
err2    db      7,7,'--->  ERROR.... bad file name given. <----',10,13,'$'
parms   db      14              ;max size of reply
repson  db      ?               ;size of what they typed
name1   db      20  dup(' ')    ;this is where the users reply goes
parms2  db      14              ;max size of input
resp2   db      ?               ;size of what they really typed in
name2   db      20  dup(' ')    ;this is where the reply goes
ask1    db      10,10,13,'Please Enter the name of the input file    $'
ask2    db      'Please Enter the name of the output file   $'
buffer  db      128 dup(' ')            ;record  buffer
workarea ends
;
subttl desciption of dos interfaces
cseg    segment para public 'CODE'
start   proc    far
        assume cs:cseg,ds:workarea,ss:stack,es:workarea
        org     100h
        push    ds                      ;set up starting linkage as per dxample
        sub     ax,ax                   ;zero this and place on stack
        push    ax                      ;so that when we do a RET we go to 
        mov     ax,workarea             ;location 0;  point to our workarea
        mov     ds,ax                   ;move the workarea address into DS
        mov     es,ax                   ;also into ES for the function 29H
        call    cls                     ;call subroutine to clear the screen
        mov     dh,3                    ;set cursor to row 8
        mov     dl,0                    ;set cursor to column 0
        mov     bh,0                    ;use screen number 0
        mov     ah,2                    ;function 2 to locate cursor
        int     10h                     ; go do it
        mov     dx,offset logo          ;display the logo where we put cursor
        mov     ah,9                    ;function 9 is print string
        int     21h                     ;call dos to do it
;
        mov     dx,offset ask1          ;point to message to display
        mov     ah,9                    ;tell DOS what function (print string)
        int     21h                     ;call DOS
;
        mov     dx,offset parms         ;point to console input buffer
        mov     ah,10                   ;read console buffer
        int     21h                     ;do it
;
        mov     si,offset name1         ;put address of name1 into SI
        mov     di,offset fcb1          ;put address of file control block DI
        mov     ah,29h                  ;tell DOS to parse filename
        int     21h                     ;do it
;
        mov    dx,offset crlf           ;do a carriage return-line feed
        mov     ah,9                    ;after the reply 
        int     21h                     ;to DOS
;
        mov     al,[di+1]               ;if DI+1 = blank, no file name
        cmp     al,20h                  ;if blank, error
        jnz     isok
        jmp     error2
;
isok:
        mov     dx,offset ask2          ;ask user for name of new file
        mov     ah,9                    ;display question
        int     21h                     ;DOS
;
        mov     dx,offset parms2        ;put address of input buffer into DX
        mov     ah,10                   ;get input from user
        int     21h                     ;DOS
;
        mov     dx,offset crlf          ;another cr,lf
        mov     ah,9
        int     21h
;
        mov     si,offset name2         ;SI = address of field NAME2
        mov     di,offset fcb2          ;DI = address of second file control 
        mov     ah,29h                  ;ask DOS to parse filename
        int     21h                     ;DOS
;
        mov     al,[di+1]               ;if DI+1 = blank, error
        cmp     al,20h                  ;is it blank??        jz      error2                  ;tell him and leave     yyyyy
;
        mov     dx,offset fcb1          ;point to first fcb
        mov     ah,15                   ;open the input file
        int     21h                     ;call dos to do it 
;
        cmp     al,0                    ;see if ok
        jnz     error0                  ;tell him and leave
;
        mov     dx,offset fcb2          ;address of fcb2
        mov     ah,16h                  ;create out put file
        int     21h                     ;this does open, too
;
        mov     dx,offset buffer        ;point to out record buffer
        mov     ah,1ah                  ;tell DOS to put disk data there
        int     21h                     ;DOS
;
readl:  cmp     eofflag,1               ;see if end-of-file was reached
        jz      closeall                ;yes, wrap it up and leave
        mov     dx,offset fcb1          ;read from file 1
        mov     ah,14h                  ;sequential read from disk
        int     21h                     ;DOS
;
        cmp     al,0                    ;see if normal return
        jz      readok                  ;if zero, ok
        mov     eofflag,1               ;no, set end-of-file flag
        jmp     readl                   ;back to read
;
readok: 
        mov     cx,128                  ;size of logical record
        mov     si,offset buffer        ;SI = address of our buffer
andloop:
                                        ;these 3 lines were used because
                                        ;   AND [SI],7FH    wouldn't assemble
                                        ;
        mov     al,[si]                 ;and out the hi-bit 
        and     al,7fh
        mov     [si],al                 ;put it back
;
        inc     si                      ;bump pointer to next char in buffer
        loop    andloop                 ;do it 128 times (in CX)
;
        mov     dx,offset fcb2          ;point to output fcb
        mov     ah,15h                  ;sequential write
        int     21h
        cmp     al,1                    ;this means disk full
        jz      error1
;
        jmp     readl                   ;do it again
;
closeall:
        mov     dx,offset fcb2          ;close output file
        mov     ah,10h          
        int     21h
;
        mov     dx,offset donem         ;iisue DONE message
        mov     ah,9
        int     21h
        jmp     exit
;
error2: mov     dx,offset err2          ;err mess 2
        jmp     errorm
error1: mov     dx,offset err1          ;point to error mess number 1
        jmp     errorm
error0: mov     dx,offset err0
errorm:
        mov     ah,9                    ;print it
        int     21h
        jmp     closeall
exit:   ret
start   endp
;
;
subttl clear screen routine
cls     proc    near
        mov     cx,0
        mov     dx,2479h
        mov     bh,7
        mov     ax,600h
        int     10h
        ret
cls     endp
;
;
cseg    ends
        end     start
65399 '** DONE - PRESS ENTER TO RETURN TO MENU **
```
{% endraw %}

## UPBEAT.BAS

{% raw %}
```bas
10 PLAY "L4CL8DGD"
```
{% endraw %}

## WSFIX2.TXT

{% raw %}
```

 Command ? re wsfix2.txt

Judy Epstein, COMPTICS, 3303 Dato Ave., Highland Park, Ill., 60035
February 23, 1983

To use debug to make the same patches to WordStar as INSTALL.BAS + WSPATCH.BAS for v.3.2 :
DOS in A:    WS diskette in B:
DEBUG B:WS.COM
  [just enter the numbers and letters from the left column]
F 077F L4 03 1B 53 00			^PQ  SUPERSCRIPT
F 0784 L4 03 1B 53 01			^PW  SUBSCRIPT
F 0789 L2 01 1B				^PE  ESCAPE
F 078E L5 04 1B 48 1B 54		^PR  OFF EACH SCRIPT
F 076B L4 03 1B 57 01			^PA  DOUBLE WIDTH ON
F 0770 L4 03 1B 57 00			^PN  DOUBLE WIDTH OFF
F 0793 L2 01 0F				^PY  CONDENSED ON
F 0798 L2 01 12				^PY  CONDENSED OFF
F 079D L3 02 1B 40			    INITIALIZE PRINTER [PSINIT]
F 07AE L3 02 1B 40			    FINALIZE PRINTER [PSFINI]
F 0775 L4 03 1B 2D 01                   ^PT UNDERLINE ON
F 077A L4 03 1B 2D 00                   ^PT UNDERLINE OFF

To change default values :		[space bar to keep]
E 360					HELP LEVEL 3
  03.					put in 00,01, or 02
E 362					INSERT ON
  FF.					put in 00 for OFF
E 363					DIRECTORY DISPLAY ON
  FF.					put in 00 for OFF
E 3D3					PAGE NUMBERING ON
  00.					put in FF for OFF
E 386					RIGHT JUSTIFICATION ON
  FF.					put in 00 for OFF
E 389					HYPHEN HELP ON
  FF.					put in 00 for OFF
E 39A					HYPHEN WORD LENGTHS
  04.					<4 for shorter, >4 for longer
E 07C1                                  STRIKEOUT CHARACTER IS "-"
  2D.                                   put in 2F for "/"
E 02D2   				TIME DELAY OF MESSAGES
  10.					put 08 or 04 for less
W
Q
    
When using WordStar, you can now use
 ^PQ  SUPERSCRIPTS ON     ^PW  SUBSCRIPTS ON	    ^PR SHUT OFF
 ^PA  DOUBLE WIDTH ON     ^PN  DOUBLE WIDTH OFF
 ^PY  CONDENSED ON        ^PY  CONDENSED OFF
 ^PT  UNDERLINE ON	  ^PT  UNDERLINE OFF
 ^PE4 ITALICS ON   	  ^PE5 ITALICS OFF
 ^PEE EMPHASIZED ON       ^PEF EMPHASIZED OFF
 ^PEG DOUBLE STRIKE ON    ^PEH DOUBLE STRIKE OFF
 ^PE8 IGNORE PAPER OUT    ^PE9 ENABLE PAPER OUT
 ^PE< UNIDIRECTIONAL ONE LINE
 ^PE0 LINE SPACING 1/8"   ^PE1 7/72"                ^PE2 1/6"[DEFAULT]
 
  To work properly, the controls should be nested in proper order.
  Also, WS does not count ^PE as a place in line, but it does count
the 4,5,E,F,G,H,8,9 ,<,0,1,2.  Since these are printer controls, they
are not printed.  Thus the line is missing these charactgers and is too
short.  Therefore, whenever one of these characters is used, insert an
extra space for each one used if using right justification.
And remember to check this if the paragraph is reformed.
65399 '** DONE - PRESS ENTER TO RETURN TO MENU **


```
{% endraw %}

## WSMOD.DOC

{% raw %}
```


                     MODIFYING WordStar 3.20

               from Central California Users Group


This article describes patches that can be applied to WordStar 3.20,
in order to modify the screen display, printer controls, and default
settings when the program initializes.

In order to successfully install these patches, you must be familiar
with the program DEBUG.COM, supplied with PC-DOS 1.1.  If you are
not comfortable with the operation of DEBUG, please read the section
of your DOS manual describing its operation.

WordStar modification involves loading it into memory via DEBUG, then
changing the hexadecimal value of the appropriate address or addresses.
This altered version is then written back to disk.  The overall process
looks like this:

              Load DEBUG in Drive A:
              Load a copy of WordStar in Drive B:
              Type "DEBUG B:WS.COM"
              Type "F (Address)(Data)" for desired result 
              Repeat above step for each change
              Type "W"
              Type "Q"

See the November, 1982 issue (number 7) of PC Magazine for further
information.  Keep in mind, though, that many of the values given in
that article are inappropriate for WordStar 3.20.


CRT DISPLAY MODIFICATION --

The standard WordStar format is to display Menus and Marked Blocks in
white, and Text in high-intensity white.  The following patch enables
these to be altered.  See the "COLOR Statement" section of the BASIC
manual for the values corresponding to different effects.  Remember, 
although the values listed in this section are in decimal, the values
entered with DEBUG must, of course, be in hex.

For example, to change the Menu & Marked Block display to high-intensity
white, you would change the value from 07H to 0FH.  The memory locations
are:

      Menu & Marked Blocks:  0284
                      Text:  028B


PRINTER ENHANCEMENTS --

As indicated in the PC Magazine article mentioned above, there are four
Printer Patch Areas, where additional commands specific to your printer
can be entered. The correct locations are:

		Patch area	Location
		----------	--------
		    1		 077F
		    2		 0784
		    3		 0789
		    4		 078E


INITIALIZATION PARAMETER MODIFICATIONS --

The following information enables you to change such aspects as the
default drive, whether insert is on, etc.

For example, to set drive C: as the default drive on initialization,
type: F 02DC L1 3 [ENTER].

          
      Address   Data         Change
      _______   ____         ______ 

        2CF     L1 0         Quicker Messages
        2DC     L1 3         Sets Drive C as the default drive
        360     L1 0         Sets initial help level at 0
        360     L1 2         Sets initial help level at 2
        362     L1 0         Insert off on initialization
        385     L1 0         Word wrap off on initialization
        386     L1 0         Justification off on initialization
        389     L1 0         Hyphen help off on initialization
        38A     L1 0         Print control display off on initialization
        38B     L1 0         Ruler line off on initialization
        38C     L1 0         Page Break Display off on initialization
        38E     L1 2         Double Spacing set on initialization
        395     L1 25        % replaces period for dot commands
        396     L1 26        & replaces Ctrl-O for non-break space
        3D3     L1 FF        No page numbers printed
        3D4     L1 0         Microjustication off on initialization
        3D5     L1 0         Bidirectional Print off on initialization
        37B     L1 0         Alternate Pitch becomes default
        37E     L1 32        Page offset increased from 8 to 50 
        37F     L1 (n)       Left Margin (n is margin setting in hex)       
        380     L1 (n)       Right Margin (n is margin setting in hex)


We are grateful to the San Francisco IBM PC Users Group for much of
this information.



```
{% endraw %}

## WSPATCH2.BAS

{% raw %}
```bas


10 ' wspatch       PINSTALL
20 ' This program installs various printers for WordStar 3.02
30 ' MicroPro International Corporation, May 24, 1982
40 ' Revised for WordStar 3.2 - June 16, 1982
41   '----------------------------------------------------------------------------------------------------------------------------
45 ' Revised on  2-23-83 for super and sub scripting,condensed,italics,double width,emphasized, continuous underlining
46 ' By Judy Epstein,COMPTICS,3303 Dato Ave.,Highland Park, Ill.60035
47   '----------------------------------------------------------------------------------------------------------------------------
48 '         scripting:         ^PQ superscript on, ^PW subscript on, ^PR turns each off
49 '         double width:      ^PA turns on, ^PN turns off
50 '         condensed:         ^PY turns on, ^PY turns off
51 '         underline:         ^PT turns on, ^PT turns off
52 '   use ^PE for escape, followed by desired uppercase codes to printer as follows----
53 '         line spacing:      0 for 1/8",   1 for 7/72",   2 for 1/6" [default]
54 '         emphasized print:  E turns on,    F turns off
55 '         double strike:     G turns on,    H turns off
56 '         paper out:         8 ignores,     9 enables
57 '         italics:           4 turns on,    5 turns off
58 '
59   '----------------------------------------------------------------------------------------------------------------------------
1230 '
1231 '----------------------------------------------------------------------------------------------------------------------------
1240 ' Unconditional patch data.  These bytes will be patched no matter what
1250 ' printer is selected.
1260 '
1261 ' address,byte,# of bytes
1270 DATA &H7CD,&H90,2
1280 DATA &H7DD,&H90,8
1290 DATA &H2D4,&HFF,1
1300 DATA &H2D6,&HFF,1
1310 DATA &h81b,&h90,2
1320 DATA &h82d,&h90,5
1330 DATA &h83a,&h90,47
1331 'USR1 super ************************************************************  ^PQ
1332 DATA &H077F,3,1
1333 DATA &H0780,27,1
1334 DATA &H0781,83,1
1335 DATA &H0782,0 ,1
1336 'USR2 sub   ************************************************************  ^PW
1337 DATA &H0784, 3,1
1338 DATA &H0785,27,1
1339 DATA &H0786,83,1
1340 DATA &H0787, 1,1
1341 'USR3  escape **********************************************************  ^PE
1342 DATA &H0789,1 ,1
1343 DATA &H078a,27,1
1344 'USR4 off script, double strike,unidirectional *************************  ^PR
1345 DATA &H078e, 4,1
1346 DATA &H078f,27,1
1347 DATA &H0790,72,1
1348 DATA &H0791,27,1
1349 DATA &H0792,84,1
1350 'PALT  alternate pitch changed to double width on.**********************  ^PA
1351 DATA &H076b,3,1
1352 DATA &H076c,27,1
1353 DATA &H076d,87,1
1354 DATA &H076e, 1,1
1355 'PSTD standard pitch ***************************************************  ^PN
1356 DATA &H0770, 3,1
1357 DATA &H0771,27,1
1358 DATA &H0772,87,1
1359 DATA &H0773, 0,1
1360 'ROLUP turn continous underline on  ************************************  ^PT
1361 DATA &H0775, 3,1
1362 DATA &H0776,27,1
1363 DATA &H0777,45,1
1364 DATA &H0778,01,1
1365 'ROLDOW turn continous underline off ***********************************  ^PT
1366 DATA &H077a, 3,1
1367 DATA &H077b,27,1
1368 DATA &H077c,45,1
1369 DATA &H077d,00,1
1370 'SOCHR strike out character.  Is 2d for "-".  Put in 2f for "/" *********
1371 DATA &h07c1,&h2d,1
1372 'DEL4 Time delay   Put in 08 or 04 for shorter *************************
1373 DATA &H02d2,&h10,1
1376 DATA 0,0,0
1377 '----------------------------------------------------------------------------------------------------------------------------
1378 'PRINTER NAME DATA AREA
1379 '
1380 DATA "IBM Parallel Printer"
2360 ' RIBBON        this is toggled by ^Y. Use it for condensed on ************
2370 DATA 1,15,0,0,0
2380 '
2390 ' RIBOFF        this is toggled by ^Y. Use it for condensed off ***********
2400 DATA 1,18,0,0,0
2410 '
2420 ' PSINIT        To initialize printer.  First is # bytes, then bytes. Use <esc> "@"  ***************
2430 DATA 2,&h1b,&h40,0,0,0,0,0,0,0,0,0,0,0,0,0,0
2440 '
2450 ' PSFINI        To conclude printing. First is # bytes, then bytes. Use <esc> "@" *****************
2460 DATA 2,&h1b,&h40,0,0,0,0,0,0,0,0,0,0,0,0,0,0
2470 '
2810 ' DPHSPC   can I use this to print a special character 129 **********
2820 DATA 2,&h1b,&h81,0
2830 '
2840 ' DPHRUB   can I use this to print a special character 133 **********
2850 DATA 2,&h1b,&h85,0
2860 '
6000 '****************************************************************************************************************************
6001 '****************************************************************************************************************************
6005 ' Oct. 5, 1982
6010 'from manual, there are two user areas that can be modified.
6020 'in ws.com , user area 1 from line 1 to 861+
6030 '                        locations 0100 to 035EEFF
6035 ' these are for user subroutines
6040 'INISUB  02A4
6050 'UNISUB  O2A7
6060 'MORPAT  02E0
6070 'PBGMEN  035C
6080 'PRINT (:F4:USER1.LST) NOOJ XREF  PAGEWIDTH (132)
6090 '
6100 'in ws.com , user area 4 from line 1 to 722+
6110 'these are where the user printer funcitons come in
6120 '
6130 'USR1    077F     DB  # of bytes
6140 '        0780     DB  byte1,byte2,byte3,byte4
6150 'USR2    0784     DB  # of bytes
6160 '                 DB  BYTE1,BYTE2,BYTE3,BYTE4
6170 'USR3    0789     DB  # of bytes
6180 '                 DB  byte1,byte2,byte3,byte4
6190 'USR4    078E     DB  # of bytes
6200 '                 DB  byte1,byte2,byte3,byte4
6210 ' examples
6220 '                 DB '='
6230 '                 DB 9        ;THIS IS DECIMAL
6240 '                 DB 0AH      ;THIS IS HEX
6250 '                 DB 177Q     ;THIS IS OCTAL , OR 177O
6260 '                 DB 13       ;THIS IS CARRIAGE RETURN
6270 'How to use the codes I have selected for WS
6271 '----------------------------------------------------------------------------------------------------------------------------
6280 ' CODES FOR PRINTER all following are used with ^P first, when writing text
6290 ' SUPERSCRIPT                                   ^Q      CHR$(27);"S";CHR$(0)      hex 1B,53,0       dec  27,83,0
6300 ' SUBSCRIPT                                     ^W      CHR$(27);"S";CHR$(1)      hex 1B,53,1       dec  27,83,1
6310 ' SET UP ESCAPE CODE ,THEN GET REST OF CODE     ^E      CHR$(27)                  hex 1B            dec  27
6320 ' RESET SCRIPTING,DOUBLE STRIKE,UNIDIRECTIONAL  ^R      CHR$(27);"H";CHR$(27);"T" hex 1B,54,1B,48   dec 27,84,27,72
6321 ' see lines 1331-1349
6322 '----------------------------------------------------------------------------------------------------------------------------
6330 ' CONDENSED ON  (uses ribbon change toggle)     ^Y      CHR$(15)                  hex 0F            dec 15
6340 ' NORMAL                                        ^Y      CHR$(18)                  hex 12            dec 18
6360 ' ITALICS ON                                    ^E 4   CHR$(27);"4"               hex 1B,34         dec 27,52
6370 ' ITALICS OFF                                   ^E 5   CHR$(27);"5"               hex 1B,35         dec 27,53
6420 ' EMPHASIZED ON                                 ^E E   CHR$(27);"E"               hex 1B,45         dec 27,69
6430 ' EMPHASIZED OFF                                ^E F   CHR$(27);"F"               hex 1B,46         dec 27,70
6440 ' DOUBLE STRIKE ON                              ^E G   CHR$(27);"G"               hex 1B,47         dec 27,71
6450 ' DOUBLE STRIKE OFF                             ^E H   CHR$(27);"H"               hex 1B,48         dec 27,72
6451 ' IGNORE PAPER OUT                              ^E 8   CHR$(27);"8"               hex 1B,38         dec 27,56
6452 ' ENABLE PAPER OUT                              ^E 9   CHR$(27);"9"               hex 1B,39         dec 27,57
6453 ' UNIDIRECTIONAL LINE                           ^E <   CHR$(27);"<"               hex 1B,3C         dec 27,60
6454 ' LINE SPACING 1/8"                             ^E 0   CHR$(27);"0"               hex 1B,30         dec 27,48
6455 ' LINE SPACING 7/72"                            ^E 1   CHR$(27);"1"               hex 1B,31         dec 27,49
6456 ' LINE SPACING 1/6 " DEFAULT                    ^E 2   CHR$(27);"2"               hex 1B,32         dec 27,50
6460 ' DOUBLE WIDTH ON                               ^A     CHR$(27);"W";CHR$(1)       hex 1B,57,1       dec 27,87,1
6470 ' DOUBLE WIDTH OFF                              ^N     CHR$(27);"W";CHR$(0)       hex 1B,57,0       dec 27,87,0
6480 ' UNDERLINE ON  (uses superscript toggle)       ^T     CHR$(27);"-";CHR$(1)       hex 1B,2D,1       dec 27,45,1
6490 ' UNDERLINE OFF                                 ^T     CHR$(27);"-";CHR$(0)       hex 1B,2D,0       dec 27,45,0
6500 '----------------------------------------------------------------------------------------------------------------------------
6600 '----------------------------------------------------------------------------------------------------------------------------
6610 ' When using ^PE and then another character, as in emphasized,double strike,italics etc,make sure to insert spaces in text
6620 ' WS doesn't count ^P,^E as places in line, but does count the E,F,G,H,4,5,Since they don't print, the line gets smaller.
6630 ' If right justifying text, insert spaces for each one used.
6635 'Also be sure to use capital letters so the proper code is sent!
6640 'When combining many options, be sure to nest them in the proper order.  If not, they are not always shut off properly.
6700 '----------------------------------------------------------------------------------------------------------------------------
6710 '     OTHER USEFUL LOCATIONS
6720 ' 0746     POSMTH  FF              printer overstrike method
6730 '                                  = FF if overprint by CR without LF
6740 '                                  = 0 if overprint by BS and/or CR
6750 '                                  = 1 for daisy wheel
6760 ' 0747     BLDSTR  DB 2            # strikes for boldface. Set 3,4,5 for darker
6770 ' 0748     DBLSTR  DB 2            # strikes for double strike
6790 ' 07c1     SOCHR   DB '-'          character for strikeout
6800 ' 07c2     ULCHR   DB '_'          underscore character
6810 ' 02d8     NMOFUS  DB 1,1          # users on system
6840 ' 02dc     DEFDSK  DB 1            #  of default drive.  1=A,2=B,3=C,4=D
65399 '** DONE - PRESS ENTER TO RETURN TO MENU **


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0053

     Volume in drive A has no label
     Directory of A:\

    ATTRIB   ABS       353   1-01-80  12:37a
    ATTRIB   BAS       256   1-01-80   1:20a
    BASECONV BAS      2048   1-01-80
    BOMB     BAS       128   5-20-82
    CHARMAP  BAS      2304   1-01-80
    CHIRP    BAS       128   5-12-82
    CLOCK    BAS     10368   1-01-80
    COMPUTER BAS       128   5-20-82
    DISKPGM1 ABS       432   1-01-80   1:47a
    DISKPGM1 BAS      3456   7-18-82   9:50a
    ENGINE   BAS       128   5-20-82
    FILES53  TXT      2099   1-27-89   9:56a
    FILESORT BAS      5248  10-31-82
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       617   1-27-89   9:58a
    KYBDSET  SUB       512   1-01-80
    LRS      BAS       128   5-20-82
    PHASER   BAS       128   5-12-82
    PHASERB  BAS       128   5-20-82
    PRINTDOC BAT      1024   3-26-83   7:07p
    QUICKSRT BAS      1152   1-01-80
    SCROLL   SUB      1536   1-01-80
    SEESWTCH BAS      4096   1-10-83   8:27p
    SHELLSRT BAS      1408   1-01-80
    SHIELDS  BAS       128   5-20-82
    SIREN    BAS       256   5-20-82
    SORRY    BAS       128   5-20-82
    SOUND1   BAS       128   5-12-82
    SRS      BAS       128   5-20-82
    TADAA    BAS       128   5-20-82
    TADADADA BAS       128   5-20-82
    TORPEDOB BAS       128   5-20-82
    UNWS     ASM      8576   4-04-83   7:11a
    UNWS     COM      2944   3-30-83   8:06a
    UPBEAT   BAS       128   5-20-82
    WSFIX2   TXT      2688   1-01-80  12:16a
    WSMOD    DOC      4096   1-01-80
    WSPATCH2 BAS     10609   4-08-85   2:37p
           38 file(s)      68036 bytes
                           81920 bytes free
