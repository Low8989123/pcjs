---
layout: page
title: "PC-SIG Diskette Library (Disk #298)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0298/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0298"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PLANETS AND MORE"

    PLANETS computes the position, distance, magnitude, orbital view, and
    skyview for the planets, major asteroids, and Halley's Comet. The
    skyview and orbital view can describe forward or retrograde motion. The
    moons for each of the planets can be displayed.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES298.TXT

{% raw %}
```
Disk No:  298
Program Title:  PLANETS version 4.1 /WATOR/LEYGREF'S CASTLE
PC-SIG version: 4.1

PLANETS computes information on the position, distance, magnitude, etc.
for the major planets on a specified date and time.  It also computes
the position of four of the major asteroids and Halley's Comet, and lets
you move the charts forward or backward in time to see the positions on
certain dates.

WATOR (WATERMON for monochrome and WATORCOL for color) is a
battle-for-survival game where you are in charge of developing a
harmonious ecology between them.  A real figure-juggling act and good
fun to watch.  LEYGREF'S CASTLE is a fantasy adventure game.  The castle
is randomly stocked for each game, so you have a different adventure
each time.

Usage:  Astronomical Charting/Entertainment

Special Requirements:  Some programs require color graphics.

How to Start:  Type GO (press enter).

Suggested Registration:  $10.00 for PLANETS.

File Descriptions:

-------- ---  PLANETS
PLANETS  BAK  Backup of documentation file.
PLANETS  DOC  Documentation.
PLANETS  EXE  Main program.
ATT      BGI  Data file.
CGA      BGI  Data file.
EGAVGA   BGI  Data file.
HERC     BGI  Data file.
IBM8514  BGI  Data file.
PC3270   BGI  Data file.
-------- ---  WATOR - Fish & sharks engage in battle for survival
WATORMON PAS  Source code, Turbo Pascal, for monochrome card.
WATORCOL PAS  Source for color card.
WATORMON COM  Compiled code for mono card.
WATORCOL COM  Compiled code for color card.
WATOR    DOC  List of files.
WATOR    BAK  Backup of documentation file.
READ     ME   Notes from author.
-------- ---  LEYGREF'S CASTLE
LEYGREF1 BAS  Main program.
LEYGREF  INS  Instructions (7K text file).
LEYGREF  PIC  Part of LEYGREF.
LEYGREF  DAT  Part of LEYGREF.
LEYGREF  CMD  Part of LEYGREF.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk #298 PLANETS AND MORE  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation for PLANETS to your printer, Type:            ║
║                          MANUAL (press enter)                           ║
║                                                                         ║
║ To start PLANETS, Type: PLANETS (press enter)                           ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## LEYGREF1.BAS

{% raw %}
```bas
1000 COLOR 7,0
1010 E$=CHR$(27):RV$=E$+"p":RW$=E$+"q":E$=E$+"E"
1020 Z9$="LEYGREF.INS":GOSUB 4510
1030 DIM C$(34),I$(34),R$(4),W$(8),E$(8)
1040 DIM C(3,4),T(8),O(3),R(3)
1050 DIM L(8,8,8)
1060 DEF FNA(Q)=INT(Q*RND(1)+1):DEF FNB(Q)=Q+8*((Q=9)-(Q=0))
1070 DEF FNC(Q)=-Q*(Q<19)-18*(Q>18):DEF FND(Q)=Q*64+X*8+Y-585
1080 DEF FNE(Q)=Q+100*(Q>99)
1090 V9=3:B9=15:DIM VA$(3),B$(15)
1100 RANDOMIZE PEEK(11)
1110 Z7$="LEYGREF.CMD"
1120 Y$="** ANSWER  YES  OR  NO  "
1130 OPEN"I",#1,"LEYGREF.DAT":FOR Q%=1 TO 34:INPUT#1,C$(Q%):NEXT
1140 FOR Q%=1 TO 34:INPUT #1,I$(Q%):NEXT
1150 I$(1)="        ":I$(12)="  BOOK  ":I$(6)=" CHEST  "
1160 FOR X%=1 TO 8:FOR Y%=1 TO 8:FOR Z%=1 TO 8:L(X%,Y%,Z%)=101:NEXT:NEXT:NEXT
1170 FOR Q%=1 TO 8:INPUT#1,W$(Q%):NEXT:FOR Q%=1 TO 8:INPUT#1,E$(Q%):NEXT
1180 FOR Q%=1 TO 4:INPUT#1,R$(Q%):NEXT
1190 ' GOSUB 4080
1200 X%=1:Y%=4
1210 L(1,4,1)=2:PRINT:PRINT"";:FOR Z%=1 TO 7:FOR Q1=1 TO 2:Q=104:GOSUB 4260
1220 L(X%,Y%,Z%+1)=103:NEXT:NEXT
1230 '
1240 FOR Z%=1 TO 8:FOR Q=113 TO 124:GOSUB 4260:NEXT:FOR Q1=1 TO 3
1250 FOR Q=105 TO 112:GOSUB 4260:NEXT:Q=125:GOSUB 4260:NEXT
1260 INPUT #1,O$:CLS:LOCATE 12,20:PRINT"       PROGRAM LOADING      "
1270 NEXT
1280 FOR Q=126 TO 133:Z%=FNA(8):GOSUB 4260:NEXT:PRINT
1290 GOSUB 4740
1300 Q=101:FOR A=1 TO 3:Z=FNA(8):GOSUB 4260:C(A,1)=X:C(A,2)=Y:C(A,3)=Z:C(A,4)=0
1310 INPUT#1,O$:NEXT:ST=2:DX=14:R$(3)="MAN"
1320 FOR A=1 TO V9:INPUT#1,VA$(A):NEXT:FOR A=1 TO B9:INPUT#1,B$(A):NEXT:CLOSE#1
1330 Q=112+FNA(12):Z%=FNA(8):GOSUB 4260:R(1)=X%:R(2)=Y%:R(3)=Z%
1340 Q=109:Z%=FNA(8):GOSUB 4260:O(1)=X%:O(2)=Y%:O(3)=Z%
1350 OT=8:T=1:GP=60
1360 IQ=8:FOR Q%=1 TO 8:T(Q%)=0:NEXT
1370 ' <,<<<<<<<<<<<<<       SET UP THE GAME >>>>>>>>>>>>>>>>
1380 CLS:LOCATE 2,20:PRINT"ALL RIGHT, BOLD ONE"
1390 LOCATE 4,20:PRINT"CHOOSE YOUR CHARACTER: "
1391 LOCATE 7,25:PRINT"ELF          [E]"
1392 LOCATE 9,25:PRINT"DWARF        [D]"
1393 LOCATE 11,25:PRINT"MAN          [M]"
1394 LOCATE 13,25:PRINT"HOBBIT       [H]"
1395 GOSUB 4340
1400 FOR Q=1 TO 4:IF LEFT$(R$(Q),1)=O$ THEN RC=Q:ST=ST+2*Q:DX=DX-2*Q
1410 NEXT:PRINT:OT=OT+4*(RC=1):IF RC>0 THEN R$(3)="HUMAN":GOTO 1430
1420 GOSUB 4480:GOTO 1390
1430 LOCATE 18,33:PRINT"SEX ";:GOSUB 4350:IF O$="M"THEN SX=1:GOTO 1450
1440 IF O$<>"F" THEN GOSUB 4480:GOTO 1430
1450 CLS:LOCATE 4,12:PRINT"OK ";R$(RC);", YOU HAVE THE FOLLOWING CHARACTERISTICS:"
1460 LOCATE 7,25:PRINT"STRENGTH =";ST:LOCATE 9,25:PRINT"INTELLIGENCE =";IQ:LOCATE 11,25:PRINT"DEXTERITY =";DX
1470 LOCATE 13,25:PRINT"AND ";OT;" OTHER POINTS":LOCATE 15,25:PRINT"TO ALLOCATE AS YOU WISH.":PRINT
1480 Z$="INTELLIGENCE ":GOSUB 4360:IQ=IQ+Q:IF OT=0 THEN 1510
1490 Z$="STRENGTH ":GOSUB 4360:ST=ST+Q:IF OT=0 THEN 1510
1500 Z$="DEXTERITY ":GOSUB 4360:DX=DX+Q
1510 CLS:LOCATE 12,10:PRINT"OK, ";R$(RC);", YOU HAVE 60 GOLD PIECES (GP's)":FOR WA=1 TO 1000:NEXT:CLS
1520 Z$="ARMOR":GOSUB 4450
1530 LOCATE 5,20:PRINT"PLATE<30>     [PL]":LOCATE 7,20:PRINT"CHAINMAIL<20> [CH]":LOCATE 9,20:PRINT"LEATHER<10>   [LE]":LOCATE 11,20:PRINT"NOTHING<0>    [NO]"
1540 GOSUB 4340:IF O$="N" THEN 1570
1550 AV=-3*(O$="P")-2*(O$="C")-(O$="L"):IF AV>0 THEN 1570
1560 GOSUB 4480:GOTO 1520
1570 AH=AV*7:GP=GP-AV*10
1580 CLS
1590 CLS:LOCATE 12,20:PRINT"OK, BOLD ";R$(RC);", YOU HAVE ";GP;" GP's LEFT":FOR WA=1 TO 1000:NEXT:CLS
1600 Z$="WEAPONS":GOSUB 4450
1610 LOCATE 5,20:PRINT"SWORD<30>    [SW]":LOCATE 7,20:PRINT"MACE<20>     [MA]":LOCATE 9,20:PRINT"DAGGER<10>   [DA]":LOCATE 11,20:PRINT"NOTHING<0>   [NO]":GOSUB 4340:IF O$="N"THEN 1640
1620 WV=-3*(O$="S")-2*(O$="M")-(O$="D"):IF WV>0 THEN 1640
1630 GOSUB 4480:GOTO 1600
1640 GP=GP-WV*10:PRINT:IF GP<20 THEN 1680
1650 CLS:LOCATE 12,20:PRINT"WANT TO BUY A LAMP FOR 20 GP's ";:GOSUB 4350
1660 IF O$="Y"THEN LF=1:GP=GP-20:GOTO 1680
1670 IF O$<>"N" THEN PRINT:PRINT Y$:PRINT:GOTO 1650
1680 IF GP<1 THEN Q=0:GOTO 1740
1690 PRINT"OK, ";R$(RC);", YOU HAVE ";GP;" GOLD PIECES LEFT":PRINT
1700 INPUT"FLARES COST 1 GP EACH, HOW MANY DO YOU WANT ";O$
1710 Q=VAL(O$):PRINT:IF Q>0 OR ASC(O$)=48 THEN 1730
1720 GOSUB 4480:GOTO 1700
1730 IF Q>GP THEN PRINT"** YOU CAN ONLY AFFORD ";GP:PRINT:GOTO 1700
1740 FL=FL+Q:GP=GP-Q:X=1:Y=4:Z=1
1750 PRINT"OK, ";R$(RC);", YOU ENTER THE CASTLE AND BEGIN.":PRINT:GOTO 2810
1760 T=T+1:IF RF+OF>0 THEN 1830
1770 IF C(1,4)>T(1) THEN T=T+1
1780 IF C(2,4)>T(3) THEN GZ=FNA(5):GP=GZ*-1:IF GP<0 THEN GP=0
1790 IF C(3,4)<=T(5) THEN 1830
1800 A=X:B=Y:C=Z:X=FNA(8):Y=FNA(8):Z=FNA(8)
1810 L(X,Y,Z)=L(X,Y,Z)-100:X=A:Y=B:Z=C
1820 IF L(X,Y,Z)=1 THEN FOR Q=1 TO 3:C(Q,4)=-(C(Q,1)=X)*(C(Q,2)=Y)*(C(Q,3)=Z):NEXT
1830 IF FNA(5)>1 THEN 1940
1840 '   >>  PARSER FOR MESSAGE ON LINE 24
1850 LOCATE 24,1:PRINT"YOU ";:Q=FNA(7)+BL:IF Q>7 THEN Q=4
1860 ON Q GOSUB 1900,1880,1890,1870,1910,1920,1930:GOTO 1940
1870 PRINT"STEPPED ON A FROG":RETURN
1880 PRINT"HEAR ";MID$("A SCREAM FOOTSTEPSMOANING  THUNDER",FNA(4)*9-8,9):RETURN
1890 PRINT"SNEEZED":RETURN
1900 PRINT"SEE A BAT FLY BY":RETURN
1910 PRINT"SMELL ";C$(12+FNA(13));" FRYING":RETURN
1920 PRINT"FEEL LIKE YOUR BEING WATCHED":RETURN
1930 PRINT"HEAR A DOOR OPEN":RETURN
1940 IF BL+T(4)=2 THEN PRINT:PRINT C$(29);" CURES YOUR BLINDNESS":BL=0
1950 IF BF+T(6)=2 THEN PRINT:PRINT C$(31);" DISSOLVES THE BOOK":BF=0
1960 GOSUB 4470
1970 COLOR 4,0:INPUT"YOUR MOVE (H FOR HELP)";O$:COLOR 7,0:CLS
1980 FOR Q1=1 TO B9:IF O$=LEFT$(B$(Q1),LEN(O$)) THEN 2010
1990 NEXT
2000 GOSUB 4480:GOTO 1970
2010 O$=LEFT$(O$,1)
2020 ON Q1 GOTO 2080,2100,2100,2100,2120,2140,2320,2160,2450,2780,2070,2730,2040,2040,2040
2030 GOTO 2000
2040 IF BL=1 THEN 2160
2050 ON Q1-12 GOTO 2190,2250,2620
2060 GOTO 2000
2070 Z9$=Z7$:GOSUB 4540:GOTO 1960
2080 IF L(X,Y,Z)=2 THEN LINE INPUT"Do you want to leave the castle (Y/N) ? ";Z9$
2090 IF L(X,Y,Z)=2 THEN IF Z9$="Y" THEN 4080 ELSE GOTO 1960
2100 X=X+(O$="N")-(O$="S"):Y=Y+(O$="W")-(O$="E")
2110 X=FNB(X):Y=FNB(Y):GOTO 2810
2120 IF L(X,Y,Z)=3 THEN Z=Z-1:GOTO 2810
2130 Z$="UP":GOTO 2150
2140 Z$="DOWN":IF L(X,Y,Z)=4 THEN Z=Z+1:GOTO 2810
2150 PRINT:PRINT"** OH ";R$(RC);", NO STAIRS GOING ";Z$;" IN HERE":GOTO 1760
2160 IF BL=1 THEN PRINT:PRINT"** YOU CAN'T SEE ANYTHING, DUMB ";R$(RC):GOTO 1760
2170 GOTO 4650
2180 PRINT") LEVEL ";Z:GOTO 1760
2190 IF FL=0 THEN PRINT:PRINT"** HEY BRIGHT ONE, YOU'RE OUT OF FLARES":GOTO 1760
2200 PRINT:LOCATE 10,40:PRINT:FL=FL-1:A=X:B=Y:FOR Q1=A-1 TO A+1:X=FNB(Q1)
2210 FOR Q2=B-1 TO B+1:Y=FNB(Q2)
2220 Q=FNE(L(X,Y,Z)):L(X,Y,Z)=Q:PRINT I$(Q);"  ";:NEXT
2230 PRINT:PRINT:NEXT:X=A:Y=B
2240 GOSUB 4460:GOTO 1760
2250 IF LF=0 THEN PRINT:PRINT"** YOU DON'T HAVE A LAMP, ";R$(RC):GOTO 1760
2260 PRINT:PRINT"WHERE DO YOU SHINE THE LAMP (N,E,S, OR W) ";:GOSUB 4350
2270 A=X:B=Y:X=FNB(X+(O$="N")-(O$="S")):Y=FNB(Y+(O$="W")-(O$="E"))
2280 IF A-X+B-Y=0 THEN PRINT:PRINT"** TURKEY! THAT'S NOT A DIRECTION":GOTO 1760
2290 PRINT:PRINT"THE LAMP SHINES INTO (";X;",";Y;")  LEVEL ";Z:PRINT
2300 L(X,Y,Z)=FNE(L(X,Y,Z)):PRINT"THERE YOU WILL FIND ";C$(L(X,Y,Z))
2310 X=A:Y=B:GOTO 1760
2320 IF L(X,Y,Z)<>5 THEN PRINT:PRINT"** IF YOU WANT A DRINK, FIND A POOL":GOTO 1760
2330 Q=FNA(8):PRINT:PRINT"YOU TAKE A DRINK AND ";:IF Q<7 THEN PRINT"FEEL ";
2340 ON Q GOTO 2350,2360,2370,2380,2390,2400,2410,2430
2350 ST=FNC(ST+FNA(3)):PRINT"STRONGER":GOTO 1760
2360 ST=ST-FNA(3):PRINT"WEAKER":ON 1-(ST<1) GOTO 1760,4020
2370 IQ=FNC(IQ+FNA(3)):PRINT"SMARTER":GOTO 1760
2380 IQ=IQ-FNA(3):PRINT"DUMBER":ON 1-(IQ<1) GOTO 1760,4020
2390 DX=FNC(DX+FNA(3)):PRINT"NIMBLER":GOTO 1760
2400 DX=DX-FNA(3):PRINT"CLUMSIER":ON 1-(DX<1) GOTO 1760,4020
2410 Q=FNA(4):IF Q=RC THEN 2410
2420 RC=Q:PRINT"BECOME A ";R$(RC):GOTO 1760
2430 SX=1-SX:PRINT"TURN INTO A ";:IF SX=0 THEN PRINT"FE";
2440 PRINT"MALE ";R$(RC):GOTO 1760
2450 IF L(X,Y,Z)=6 THEN PRINT:PRINT"YOU OPEN THE CHEST AND":PRINT:GOTO 2570
2460 IF L(X,Y,Z)=12 THEN PRINT:PRINT"YOU OPEN THE BOOK AND":PRINT:GOTO 2480
2470 PRINT:PRINT"** THE ONLY THING YOU OPENED WAS YOUR BIG MOUTH":GOTO 1760
2480 ON FNA(6) GOTO 2490,2500,2510,2520,2530,2540
2490 PRINT"FLASH!  OH NO!  YOU ARE NOW BLIND ";R$(RC):BL=1:GOTO 2560
2500 PRINT"IT'S ANOTHER VOLUME OF ZOT'S POETRY! - YEECH!":GOTO 2560
2510 PRINT"IT'S AN OLD COPY OF PLAY";R$(FNA(4)):GOTO 2560
2520 PRINT"IT'S A MANUAL OF DEXTERITY.":DX=18:GOTO 2560
2530 PRINT"IT'S A MANUAL OF STRENGTH.":ST=18:GOTO 2560
2540 PRINT"THE BOOK STICKS TO YOUR HANDS -":PRINT
2550 PRINT"NOW YOU CAN'T DRAW YOUR WEAPON.":BF=1
2560 L(X,Y,Z)=1:GOTO 1760
2570 ON FNA(4) GOTO 2580,2590,2600,2590
2580 PRINT"KABOOM!  IT EXPLODES":Q=FNA(6):GOSUB 3980:ON 1-(ST<1) GOTO 2560,4020
2590 Q=FNA(1000):PRINT"FIND ";Q;" GOLD PIECES":GP=GP+Q:GOTO 2560
2600 PRINT"GAS!  YOU STAGGER FROM THE ROOM"
2610 L(X,Y,Z)=1:T=T+20:O$=MID$("NSEW",FNA(4),1):GOTO 2100
2620 IF L(X,Y,Z)<>11 THEN PRINT:PRINT"** NO ORB - NO GAZE":GOTO 1760
2630 PRINT:PRINT"YOU SEE ";:ON FNA(6) GOTO 2640,2650,2670,2680,2700,2720
2640 PRINT"YOURSELF IN A BLOODY HEAP":ST=ST-FNA(2):ON 1-(ST<1) GOTO 1760,4020
2650 PRINT"YOURSELF DRINKING FROM A POOL AND BECOMING ";C$(12+FNA(13))
2660 GOTO 1760
2670 PRINT C$(12+FNA(13));" GAZING BACK AT YOU":GOTO 1760
2680 A=X:B=Y:C=Z:X=FNA(8):Y=FNA(8):Z=FNA(8):L(X,Y,Z)=FNE(L(X,Y,Z))
2690 PRINT C$(Q);" AT (";X;",";Y;")  LEVEL";Z:X=A:Y=B:Z=C:GOTO 1760
2700 A=FNA(8):B=FNA(8):C=FNA(8):IF FNA(8)<4 THEN A=O(1):B=O(2):C=O(3)
2710 PRINT"LEYGREF'S ORB AT (";A;",";B;")  LEVEL";C:GOTO 1760
2720 PRINT"A SOAP OPERA RE-RUN":GOTO 1760
2730 IF RF=0 THEN PRINT:PRINT"** YOU CAN'T TELEPORT WITHOUT THE RUNESTAFF":GOTO 1760
2740 Z$="X-COORD (1=FAR NORTH   8=FAR SOUTH)":GOSUB 4410:X=Q
2750 Z$="Y-COORD (1=FAR WEST    8=FAR EAST )":GOSUB 4410:Y=Q
2760 Z$="LEVEL   (1=TOP         8=BOTTOM   )":GOSUB 4410:Z=Q
2770 O$="T":GOTO 2810
2780 PRINT:PRINT"DO YOU REALLY WANT TO QUIT ";:GOSUB 4350:PRINT
2790 IF O$<>"Y" THEN 1760
2800 PRINT:GOTO 4120
2810 PRINT:IF BL=0 THEN GOSUB 4460:PRINT
2820 CLS:PRINT"ST=";ST;"  IQ=";IQ;"  DX=";DX;"  FLARES=";FL;"  GP's=";GP
2830 PRINT:PRINT W$(WV+1);" / ";W$(AV+5);:IF LF=1 THEN PRINT" / A LAMP";
2840 PRINT:PRINT:WC=0:Z$="YOU HAVE ":Q=FNE(L(X,Y,Z)):L(X,Y,Z)=Q
2850 PRINT"HERE YOU FIND ";C$(Q):IF (Q<7) OR (Q=11) OR (Q=12) THEN 1760
2860 IF Q=7 THEN GP=GP+FNA(10):PRINT:PRINT Z$;GP:GOTO 2560
2870 IF Q=8 THEN FL=FL+FNA(5):PRINT:PRINT Z$;FL:GOTO 2560
2880 IF Q=9 OR Q=10 THEN GOSUB 4470
2890 IF Q>9 THEN 2920
2900 PRINT:IF(O(1)=X) AND (O(2)=Y) AND (O(3)=Z) THEN ON 1-(O$="T") GOTO 2100,4230
2910 X=FNA(8):Y=FNA(8):Z=FNA(8):GOTO 2810
2920 IF Q=10 THEN Z=FNB(Z+1):GOTO 2810
2930 IF Q>25 AND Q<34 THEN PRINT:PRINT"ITS NOW YOURS":T(Q-25)=1:TC=TC+1:GOTO 2560
2940 A=L(X,Y,Z)-12:WC=0:IF (A<13) OR (VF=1) THEN 3450
2950 PRINT:PRINT"YOU MAY TRADE WITH, ATTACK, OR IGNORE THE VENDOR"
2960 GOSUB 4340:IF O$="I" THEN 1760
2970 IF O$="A" THEN VF=1:PRINT:PRINT"YOU'LL BE SORRY YOU DID THAT":GOTO 3450
2980 IF O$<>"T" THEN PRINT:PRINT"** NICE SHOT ";R$(RC):GOTO 2950
2990 PRINT:FOR Q=1 TO 8:A=FNA(Q*1500):IF T(Q)=0 THEN 3030
3000 PRINT:PRINT"DO YOU WANT TO SELL ";C$(Q+25);" FOR ";A;" GP's ";
3010 GOSUB 4350:IF O$="Y" THEN TC=TC-1:T(Q)=0:GP=GP+A:GOTO 3030
3020 IF O$<>"N" THEN PRINT Y$:GOTO 3000
3030 NEXT
3040 IF GP<1000 THEN PRINT:PRINT"YOU'RE TOO POOR TO TRADE, ";R$(RC):GOTO 1760
3050 IF GP<1250 THEN 3280
3060 PRINT:PRINT"OK, ";R$(RC);", YOU HAVE ";GP;" GOLD PIECES AND ";W$(AV+5)
3070 PRINT:Z$="ARMOR":GOSUB 4450:PRINT"NOTHING<0>  LEATHER<1250> ";
3080 IF GP>1499 THEN PRINT"CHAINMAIL<1500> ";:IF GP>1999 THEN PRINT"PLATE<2000>";
3090 PRINT:GOSUB 4340:PRINT:IF O$="N" THEN 3160
3100 IF O$="L" THEN GP=GP-1250:AV=1:AH=7:GOTO 3160
3110 IF O$="C" AND GP<1500 THEN PRINT"** YOU HAVEN'T GOT THAT MUCH CASH":GOTO 3070
3120 IF O$="C" THEN GP=GP-1500:AV=2:AH=14:GOTO 3160
3130 IF O$="P" AND GP<2000 THEN PRINT"** YOU CAN'T AFFORD PLATE":GOTO 3070
3140 IF O$="P" THEN GP=GP-2000:AV=3:AH=21:GOTO 3160
3150 GOSUB 4480:GOTO 3090
3160 IF GP<1250 THEN 3280
3170 PRINT:PRINT"YOU HAVE ";GP;" GP's LEFT WITH ";W$(WV+1);" IN HAND":PRINT
3180 PRINT:Z$="WEAPON":GOSUB 4450:PRINT"NOTHING<0>  DAGGER<1250>   ";
3190 IF GP>1499 THEN PRINT"MACE<1500>  ";:IF GP>1999 THEN PRINT"SWORD<2000>;
3200 PRINT:GOSUB 4340:PRINT:IF O$="N" THEN 3280
3210 IF O$="D" THEN GP=GP-1250:WV=1:GOTO 3280
3220 IF O$="M"AND GP<1500 THEN PRINT"** SORRY SIR, I DON'T GIVE CREDIT":GOTO 3180
3230 IF O$="M" THEN GP=GP-1500:WV=2:GOTO 3280
3240 IF O$="S" AND GP<2000 THEN PRINT"** DUNGEON EXPRESS CARD - ";
3250 IF O$="S" AND GP<2000 THEN PRINT"YOU LEFT HOME WITHOUT IT.":GOTO 3180
3260 IF O$="S" THEN GP=GP-2000:WV=3:GOTO 3280
3270 GOSUB 4480:GOTO 3200
3280 IF GP<1000 THEN 1760
3290 Z$="STRENGTH":GOSUB 4430:IF O$<>"Y" THEN 3310
3300 GP=GP-1000:ST=FNC(ST+FNA(6)):Q=ST:GOSUB 4440:GOTO 3280
3310 IF O$<>"N" THEN PRINT Y$:GOTO 3290
3320 IF GP<1000 THEN 1760
3330 Z$="INTELLIGENCE":GOSUB 4430:IF O$<>"Y" THEN 3350
3340 GP=GP-1000:IQ=FNC(IQ+FNA(6)):Q=IQ:GOSUB 4440:GOTO 3320
3350 IF O$<>"N" THEN PRINT Y$:GOTO 3330
3360 IF GP<1000 THEN 1760
3370 Z$="DEXTERITY":GOSUB 4430:IF O$<>"Y" THEN 3390
3380 GP=GP-1000:DX=FNC(DX+FNA(6)):Q=DX:GOSUB 4440:GOTO 3360
3390 IF O$<>"N" THEN PRINT Y$:GOTO 3370
3400 IF(GP<1000) OR (LF=1) THEN 1760
3410 PRINT"WANT A LAMP FOR 1000 GP's ";:GOSUB 4350:IF O$<>"Y" THEN 3430
3420 GP=GP-1000:LF=1:PRINT:PRINT"ITS GUARANTEED TO OUTLIVE YOU!":GOTO 1760
3430 IF O$<>"N" THEN PRINT Y$:GOTO 3410
3440 GOTO 1760
3450 Q1=1+INT(A/2):Q2=A+2:Q3=1
3460 IF (C(1,4)>T(1)) OR (BL=1) OR (DX<FNA(9)+FNA(9)) THEN 3870
3470 GOSUB 4470:PRINT"YOU'RE FACING ";C$(A+12)
3480 PRINT:PRINT"YOU MAY ATTACK OR RETREAT";
3490 IF Q3=1 THEN PRINT", OR BRIBE";:IF IQ>14 THEN PRINT", OR CAST A SPELL";
3500 PRINT:PRINT:PRINT"YOUR STRENGTH IS ";ST;" AND DEXTERITY IS ";DX
3510 PRINT:GOSUB 4340
3520 IF O$<>"A" THEN 3660
3530 IF WV=0 THEN PRINT:PRINT"** POUNDING ON ";C$(12+A);" WON'T HURT IT":GOTO 3870
3540 IF BF=1 THEN PRINT:PRINT"** YOU CAN'T BEAT IT TO DEATH WITH A BOOK":GOTO 3870
3550 IF DX<FNA(20)+(BL*3) THEN PRINT:PRINT"  DRAT!  MISSED":GOTO 3870
3560 PRINT:PRINT"  YOU HIT THE LOUSY ";RIGHT$(C$(A+12),LEN(C$(A+12))-2):Q2=Q2-WV
3570 IF FNA(8)<>1 THEN 3590
3580 IF A=9 OR A=12 THEN PRINT:PRINT"OH NO. YOUR ";W$(WV+1);" BROKE":WV=0
3590 IF Q2>0 THEN 3870
3600 PRINT:MC=MC-1:PRINT C$(A+12);" LIES DEAD AT YOUR FEET":IF H>T-60 THEN 3620
3610 PRINT:PRINT"YOU SPEND AN HOUR EATING ";C$(A+12);E$(FNA(8)):H=T
3620 IF X<>R(1) OR Y<>R(2) OR Z<>R(3) THEN ON 1-(A=13) GOTO 3640,4280
3630 PRINT:PRINT"GREAT ZOT!  YOU'VE FOUND THE RUNESTAFF":R(1)=0:RF=1
3640 Q=FNA(1000):PRINT:PRINT"YOU NOW GET HIS HOARD OF ";Q;" GP's"
3650 GP=GP+Q:GOTO 2560
3660 IF O$="R" THEN 3870
3670 IF (O$<>"C") THEN 3790
3680 IF IQ<15 OR Q3>1 THEN PRINT:PRINT"** YOU CAN'T CAST A SPELL NOW":GOTO 3470
3690 PRINT:PRINT"WHICH SPELL (WEB, FIREBALL, OR DEATHSPELL) ";:GOSUB 4350:PRINT
3700 IF O$<>"W" THEN 3720
3710 ST=ST-1:WC=FNA(8)+1:ON 1-(ST<1) GOTO 3870,4020
3720 IF O$<>"F" THEN 3760
3730 Q=FNA(7)+FNA(7):ST=ST-1:IQ=IQ-1:IF (IQ<1) OR (ST<1) THEN 4020
3740 PRINT"  IT DOES ";Q;" POINTS OF DAMAGE.":PRINT
3750 Q2=Q2-Q:GOTO 3590
3760 IF O$<>"D" THEN GOSUB 4480:GOTO 3470
3770 PRINT"DEATH - - - ";:IF IQ<15+FNA(4) THEN PRINT"YOURS":IQ=0:GOTO 4020
3780 PRINT"HIS":PRINT:Q2=0:GOTO 3600
3790 IF O$<>"B" OR Q3>1 THEN GOSUB 4480:GOTO 3470
3800 IF TC=0 THEN PRINT:PRINT"'ALL I WANT IS YOUR LIFE.'":GOTO 3870
3810 Q=FNA(8):IF T(Q)=0 THEN 3810
3820 PRINT:PRINT"I WANT ";C$(Q+25);", WILL YOU GIVE IT TO ME ";
3830 GOSUB 4350:IF O$="N" THEN 3870
3840 IF O$<>"Y" THEN PRINT Y$:GOTO 3820
3850 T(Q)=0:TC=TC-1:PRINT:PRINT"OK, JUST DON'T TELL ANYONE"
3860 VF=VF+(L(X,Y,Z)=25):GOTO 1760
3870 Q3=2:IF WC>0 THEN WC=WC-1:IF WC=0 THEN PRINT:PRINT"THE WEB JUST BROKE."
3880 Z$=RIGHT$(C$(12+A),LEN(C$(12+A))-2):IF WC<=0 THEN 3900
3890 PRINT:PRINT"THE ";Z$;" IS STUCK AND CAN'T ATTACK":GOTO 3930
3900 PRINT:PRINT"THE ";Z$;" ATTACKS":IF DX<FNA(7)+FNA(7)+FNA(7)+BL*3 THEN 3920
3910 PRINT:PRINT"  HAH!  HE MISSED YOU":GOTO 3930
3920 PRINT:PRINT"  OUCH!  HE HIT YOU":Q=Q1:GOSUB 3980:IF ST<1 THEN 4020
3930 IF O$<>"R" THEN 3470
3940 PRINT:PRINT"YOU HAVE ESCAPED":PRINT
3950 PRINT"DO YOU GO NORTH, SOUTH, EAST, OR WEST ";:GOSUB 4350
3960 IF (O$="N") OR (O$="S") OR (O$="E") OR (O$="W") THEN 2100
3970 GOTO 3950
3980 IF AV=0 THEN 4010
3990 Q=Q-AV:AH=AH-AV:IF Q<0 THEN AH=AH-Q:Q=0
4000 IF AH<0 THEN AH=0:AV=0:PRINT:PRINT"YOUR ARMOR IS DESTROYED - GOOD LUCK"
4010 ST=ST-Q:RETURN
4020 FOR Q=1 TO 750:NEXT:PRINT Q$:GOSUB 4330
4030 PRINT"A NOBLE EFFORT, OH FORMERLY LIVING ";R$(RC):PRINT
4040 PRINT"YOU DIED FROM A LACK OF ";:IF ST<1 THEN PRINT VA$(1)
4050 IF IQ<1 THEN PRINT VA$(2)
4060 IF DX<1 THEN PRINT VA$(3)
4070 PRINT:PRINT:Q3=1:PRINT"WHEN YOU DIED YOU HAD:":PRINT:GOTO 4150
4080 Q3=0:PRINT:PRINT"YOU LEFT THE CASTLE WITH";:IF OF=0 THEN PRINT"OUT";
4090 PRINT"LEYGREF'S ORB":PRINT:IF OF=0 THEN 4120
4100 PRINT"A GLORIOUS VICTORY":PRINT
4110 PRINT"YOU ALSO GOT OUT WITH THE FOLLOWING:":PRINT:GOTO 4140
4120 PRINT"A LESS THAN AWE-INSPIRING DEFEAT."
4130 PRINT"WHEN YOU LEFT THE CASTLE YOU HAD:":PRINT
4140 IF Q3=0 THEN PRINT"YOUR MISERABLE LIFE"
4150 FOR Q=1 TO 8:IF T(Q)=1 THEN PRINT C$(Q+25)
4160 NEXT:PRINT W$(WV+1):PRINT W$(AV+5):IF LF=1 THEN PRINT"A LAMP"
4170 PRINT FL;" FLARES":PRINT GP;" GP's":IF RF=1 THEN PRINT"THE RUNESTAFF"
4180 PRINT:PRINT"AND IT TOOK YOU ";T;" TURNS.":PRINT
4190 PRINT:PRINT"PLAY AGAIN ";:GOSUB 4350:PRINT
4200 IF O$="Y" THEN PRINT"SOME ";R$(RC);"S NEVER LEARN":GOSUB 4470:CHAIN"LEYGREF"
4210 IF O$<>"N" THEN PRINT Y$:GOTO 4190
4220 PRINT"MAYBE DUMB ";R$(RC);" NOT SO DUMB AFTER ALL":PRINT:CHAIN"MENU"
4230 PRINT:PRINT"GREAT UNMITIGATED ROT.":PRINT
4240 PRINT"YOU JUST FOUND LEYGREF'S ORB.":PRINT
4250 PRINT"THE RUNESTAFF IS GONE":RF=0:OF=1:O(1)=0:GOTO 2560
4260 X%=INT(8*RND(1)+1):Y%=INT(8*RND(1)+1):IF L(X%,Y%,Z%)<>101 THEN 4260
4270 L(X%,Y%,Z%)=Q:RETURN
4280 PRINT:PRINT"YOU GET ALL HIS WARES:":PRINT:PRINT"PLATE ARMOR":AV=3:AH=21
4290 PRINT"A SWORD":WV=3:PRINT"A STRENGTH POTION":ST=FNC(ST+FNA(6))
4300 PRINT"AN INTELLIGENCE POTION":IQ=FNC(IQ+FNA(6))
4310 PRINT"A DEXTERITY POTION":DX=FNC(DX+FNA(6)):IF LF=0 THEN PRINT"A LAMP":LF=1
4320 GOTO 3640
4330 FOR Q=1 TO 64:PRINT"*";:NEXT:PRINT:PRINT:RETURN
4340 LOCATE 17,25:PRINT"YOUR CHOICE ";
4350 LINE INPUT "";O$:O$=LEFT$(O$,1):RETURN
4360 PRINT"HOW MANY POINTS DO YOU WISH TO ADD TO ";Z$;:INPUT"";O$:PRINT
4370 Q=VAL(O$):IF Q=0 AND (ASC(O$)<>48) THEN Q=-1
4380 IF (Q<0) OR (Q>OT) OR (Q<>INT(Q)) THEN PRINT"** ";:GOTO 4360
4390 OT=OT-Q:RETURN
4400 INPUT"";O$:Q=INT(VAL(O$)):RETURN
4410 PRINT:PRINT Z$;:INPUT"";O$:Q=INT(VAL(O$)):IF (Q>0) AND (Q<9)THEN RETURN
4420 GOTO 4410
4430 PRINT"WANT TO BUY A POTION OF ";Z$;" FOR 1000 GP's ";:GOTO 4350
4440 PRINT:PRINT"YOUR ";Z$;" IS NOW ";Q:RETURN
4450 LOCATE 2,20:PRINT"HERE IS A LIST OF ";Z$;" YOU CAN BUY (WITH COST IN <>)":RETURN
4460 COLOR 1,0:PRINT"YOU ARE AT (";X;",";Y;") LEVEL ";Z;".":COLOR 7,0:RETURN
4470 FOR Z9=1 TO 500:NEXT:RETURN
4480 PRINT:PRINT TAB(20);">> INVALID RESPONSE <<":PRINT:RETURN
4490 PRINT:PRINT TAB(20);:LINE INPUT"<< Depress RETURN to continue >> ";Z9$
4500 PRINT:RETURN
4510 GOSUB 4610
4520 LOCATE 10,15:LINE INPUT"DO YOU WISH INSTRUCTIONS (Y/N) ? ";O$:IF O$="N" THEN 4610
4530 CLS
4540 OPEN"I",#1,Z9$
4550 IF EOF(1) THEN 4590
4560 LINE INPUT #1,Z9$:IF Z9$="$" THEN 4590
4570 IF Z9$="#" THEN GOSUB 4490:GOTO 4550
4580 PRINT Z9$:GOTO 4550
4590 CLOSE #1
4600 RETURN
4610 CLS:PRINT TAB(20);"LEYGREF'S CASTLE":RETURN
4620 '
4630 '             >>>>>    PRINT THE MAP TO THE ENTRY HERE
4640 '
4650 PRINT:PRINT:A=X:B=Y:FOR X=1 TO 8
4660 FOR Q2=1 TO 18:PRINT"----";:NEXT:PRINT
4670 FOR Y=1 TO 8:Q=L(X,Y,Z):IF Q>99 THEN Q=34
4680 PRINT"|";:IF X=A AND Y=B THEN GOSUB 5000;
4690 PRINT I$(Q);:IF X=A AND Y=B THEN GOSUB 5010;
4700 NEXT:PRINT"|"
4710 NEXT
4720 FOR Q2=1 TO 18:PRINT"----";:NEXT:PRINT
4730 X=A:Y=B:GOTO 2240
4740 REM                   SCREEN PAINT FOR INTRO PICTURE IS HERE
4750 '
4760 '
4770 '
4780 RETURN
5000 COLOR 0,1:RETURN
5010 COLOR 7,0:RETURN
```
{% endraw %}

## PLANETS.DOC

{% raw %}
```

                       Version 4.1   Oct 2, 1988

     This Program computes information relating to the position, distance,
  magnitude, orbit view, skyview, etc for the major planets, four minor
  planets or halley's comet on a specified date and time. Also, orbital data
  for any desired planet or comet can be entered and saved in a disk file.
  Skyview and orbital views can show forward or backward motion. The moons
  for each planet can be displayed.

  The following programs files are available (the source code can be
  obtained from the author if it is not included).

  PLANETS.EXE    90K bytes   Execution Code
  PLANETSA.EXE  100K bytes   Execution Code for use with 8087
  PLANETS.DOC    20K bytes   This File
  PLANETS.PAS    57K bytes   Source Code for Turbo 5.0
  PLANETS1.PAS   42K bytes   Include file for Turbo 5.0
  PLANETS.3TP    56K bytes   Source Code for Turbo 3.0
  PLANETS.3TP    42K bytes   Include file for Turbo 3.0
  PLANETS.SAV     1K bytes   Save file made with setup command

  Refer to PRACTICAL ASTRONOMY WITH YOUR CALCULATOR by
  Peter Duffett-Smith for the calculation methods.

                            Command List

1 - 9    Entering a single digit will display detailed information
         relating to the selected planets. Use the "T" command
         to set the time and date, and the "L" command to set the
         longitude and latitude. Also the "S" command may be used to
         select the format for representing angles.

  A-     Entering A followed by a single digit will display detailed
         information related the selected minor planet or comet. The
         last selection in this column is user selectable, via the "R"
         and the "W" commands.

  B-     Entering B followed by a single digit will display the sky
         view of the nine major planets and the selected minor planet.
         Use the T and the L commands to select the time/date and
         longitude/latitude.

  C-     Entering C followed by a single digit will display the orbits
         for the four inner planets and the selected minor planet. The
         planets are each shown in its own orbital plane. The distance
         between the earth and a comet with a large inclination will
         be misleading in the orbital view. However, The distance
         calculation using the "A" command does take into account the large
         inclination of comets (update from previous versions).

  D-     Entering D followed by a single digit will display the orbits
         for the five inner planets and the selected minor planet. The
         planets are each shown in its own orbital plane.

  E-     Entering E followed by a single digit will display the orbits
         for the earth and the five outer planets plus the selected
         minor planet. The planets are each shown in its own orbital plane.

  F      SideView shows the orbit of the selected planet. The scale is
         the same as the last scale selected using the C, D or E command.

  H      Displays this file.


  I      Plots the orbits and locations of the four inner planets:
         Mercury, Venus, Earth, and Mars. The "S" command may be used
         to enable/disable the planet names. If the names are shown,
         sometimes a name will overwrite a previously displayed planet.

  K1,2,3 Gives Keplers three laws along with an example. Note
         that Keplers laws refer to the Sun and Planets, but
         the law applys to any small body orbiting a large body.

  L      Allows entry of the longitude and latitude. The longitude is
         then used to compute the time zone; which can be changed if
         desired.

  M      Displays the Menu. A second depression switches to the second
         page of the menu.

  O      Plots the orbits and locations of the five outer planets and the
         Earth. The "S" command may be used to enable/disable the planet
         names and to correct for the aspect ratio of the monitor.


  Q      Goes Back to DOS

  S      The Set-Up is command is used to select the form of numeric
         printout for angles: hour/deg/min, decimal deg, decimal hours
         etc. The screen aspect ratio may be set so that circles come
         out correctly on the screen. Also, planet name may be
         enable/disabled from orbital and sky plots. One the setting are
         entered they can be save in file planets.sav. This file will
         be read and the setting updated the next time planets is initialized.

  R      The read command reads a file made by the (W)rite command and
         loads the orbital data into the last minor planet position.
         The A through E commands may then be used to make calculations
         for the new planet selected.

  T      The change time/date command allows entry of the time and the
         date. Note that spaces (not commas) should be used between the
         entries.

  V      The View command shows how the planets would appear in the
         sky on the date selected by the T command and from the location
         selected by the L command. If the planet names are shown,
         sometimes a name will overwrite a previously displayed planet.

  U      The U commands shows the sun and the moon as they would appear
         on the date selected by the T command and on from the location
         selected by the L command.

  W      The write command is used to enter orbital data for a planet
         or comet that is not included in the main program. The data
         is then stored in a disk file and read into the last position
         in the minor planet column. If the epoch is entered as "0 0 0"
         the orbit is assumed to be entered in standard form for a comet;
         therefore no prompt is made for the longitude at epoch.

  X      Two objects are selected from a list of moons and planets for
         size comparison. A graphical view is then so that the sizes
         can be easily compared.

  Y      This command shows the sun and the moon against the a grid
         showing declination and ascension.

  Z      This command shows the planets against the stars. A grid
         with declination and ascension is shown. The + and - commands
         can be used in star view mode.

  +      The Plus command is used after a view or orbit command to advance
         planets forward in time. Successive depression causes faster motion
         in the following order: one hour, one day, one week, one month,
         and one year.

  -      The Plus command is used after a view or orbit command to advance
         planets backward in time. Successive depression causes faster motion
         in the following order: one hour, one day, one week, one month,
         and one year.

space    The space key is used to stop advance or backward time travel.
         The planets will continue to blink until any other key (except
         =,-, or space) is depressed. An M command will then go back to
         the main menu.


F1 - F9  Function keys show the selected planet and its inner moons. IF
         there are outer moons, they are selected by a shifted function
         key. The earth date and time do not apply to moon positions. A
         seperate earth day count is shown so that the speed of the moons
         can be compared to an earth day.

                      Glossary of Terms


Azimuth              :  The angle from the North measured East to West. When
                        applied to set and rise times for a planet this
                        indicated where on the horizon, 180 deg. for South,
                        270 deg. for West, etc.

Daylight Savings     :  If Daylight savings time is enabled then the local time
                        is advanced one hour on the last Sunday in March and
                        set back on the last Sunday in October.

Ecliptic Coordinates :  Are related to the earths orbit, Long is the
                        angle around from the first point of Aries
                        and Lat is angle Up or Down

Equatorial Coord.    :  Are related to the earths equator, DEC is how
                        far north or south of the equator and RA is
                        angle around the equator from the first point
                        of Aries

First Point of Aries :  This direction remains fixed with respect to the
                        stars (except for Precession) and is used as a
                        reference for ecliptic and equatorial coordinates.

GMT                  :  Greenwich Mean Time, time at longitude 0 deg.

GST                  :  Greenwich mean sideral time, is related to the
                        position of of the stars rather than the Sun.

JD                   :  Julian Day Number is the number of days since
                        January 1st 4713 B.C.

HA                   :  Hour Angle is the time since the planet crossed
                        the meridian

helio ecliptic lat.  :  Angle north or south of the earths orbit

heliocentric long    :  Angle from the first point of Aries that planet
                        makes round the sun

Horizontal Coord.    :  Are related to the observers horizon, Alt is
                        angle above the horizon and Azim is angle from
                        the north going east.

Lat                  :  Latitude of observing site

LCT                  :  Local Civil Time (time locally used)

LST                  :  Local Sideral Time, is related to the
                        position of of the stars rather than the Sun.

Long                 :  Longitude of observing site

long of ascend node  :  The point where a planet rises out of the plane of
                        the ecliptic

Mag                  :  Magnitude on a logrithmic scale which measures the
                        brightness of the planet ( the calculation here is
                        accurate to only 1 or 2

mean anomaly         :  Angle a fictitious planet, moving in a circle,
                        would make with a line from the sun to the
                        planets perihelion


Phase                :  Area of the disc which is illuminated

true anomaly         :  Corrects the mean anomaly to account for 9the
                        eccentricity of the orbit


radius vector        :  Distance from the Sun to the planet


Extended Notes:

   **** How orbits are shown ****

      The orbits for the planets and moon are each shown in its own
   orbital plan. This means that the view is not the same as would be
   seen from space. Projection of the orbits would have slowed the
   motion commands considerably.

   **** Entering planet date ****

     The (W)rite command makes a file containing the orbital data for
   additional planets (one file per planet). A good source for data is
   the Astronomical Alamanac is for sale by The Superintendent of
   Documents, U.S. Government Printing Office, Wahington, D.C. 20402.

   When using data from the Alamanac the Period is calculated:

         Per = (360 / 365.2422) / Daily Motion

   The Longitude at Epoch is calculated:

         Long at Epoch = Long of Asc Node + Long of Per(bar) +
                         Mean Anomaly

   The Longitude of Perihelion is calculated:

         Long of Per = Long of Asc Node + Long of Per(bar)

   **** Sun and Moon rise and set times ****

   The calculation assume a fixed location for the sun and the moon
   based on the date and time setting. More accurate times can be
   obtained by setting the time to the first value given, then doing
   a second iteration.

   **** Moon orbital view ****

   The orbital views of the moons do not correspond to the date. An
   earth day counter is shown to give an idea of the speed of motion.



   This program is placed in the public domain and may be freely
   copied and distributed for a nominal distribution charge. The Turbo
   Pascal source code and the latest version of the program can be
   obtained from the author for $10.00.

   The following is a list of other scientific programs available form
   the author:


CHEMICAL (Current Version 3.1)

     CHEMICAL is a molecular modeling Program to aid in the formation
     of three dimensional pictures of chemicals. Atoms are selected
     from a Periodic Table (using the A command) and electron
     orbital information retrieved. The Atoms are then bonded
     (using the B command). The chemical is displayed as it is
     being constructed. The chemical can be viewed from different
     directions by using the up and down cursor keys and the V
     command. If desired the Hybrid and Ionize commands can be used
     to alter the orbitals before bonding. Atoms can be bonded
     into groups, then the groups bonded to other groups to make
     large chemicals.

CHEMVIEW (Current Version 2.0)

     CHEMVIEW is a companion program that shows 3-dimensional
     animation of the models generated with CHEMICAL. CHEMVIEW
     requires an EGA board and monitor. CHEMVIEW is written in
     Turbo PROLOG with the graphics I/O done in Turbo C.
     To use CHEMVIEW simply start the program and select the file
     desired.

CRYSTAL (Current Version 1.0)

     CRYSTAL is a companion program that shows 3-dimensional
     development of crystals. Atoms and multi-atom ions are
     and placed on a lattice to form 3 dimensional models.


These programs are are placed in the Public Domain and may be freely
copied. However, the source code is only available from the author.
The latest version, with source code is available according to the
following price schedule:

                    First Copy            Updates           Enclosed

Planets             $10 (1 disk)            $5               _______

CHEMICAL
CHEMVIEW            $20 (3 disks)          $10               _______
CRYSTAL

OverSeas Shipping                           $5               _______

3 1/2 in disks                              $2               _______

                                         TOTAL Enclosed      _______
          Send To:

____________________________________

____________________________________

____________________________________           Larry Puhl
                                               6 Plum Ct.
____________________________________           Sleepy Hollow, Ill. 60118


```
{% endraw %}

## WATOR.DOC

{% raw %}
```
Files on the disk are as follows:
WATORCOL.PAS:Fish & sharks engage in battle for survival. Source for color card.
WATORMON.PAS: Source code, Turbo Pascal, for monochrome card.
WATORCOL.COM: Object code for color card.
WATORMON.COM: Object code for mono card.
In the interest of speed, the program addresses screen memory 
directly, so the appropriate version must be used.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0298

     Volume in drive A has no label
     Directory of A:\

    ATT      BGI      6269   8-29-88   5:00a
    CGA      BGI      6253   8-29-88   5:00a
    EGAVGA   BGI      5363   8-29-88   5:00a
    FILES298 TXT      1948   1-24-89   2:36p
    GO       BAT        38   1-13-88   3:14p
    GO       TXT       617   6-09-88   8:30a
    HERC     BGI      6125   8-29-88   5:00a
    IBM8514  BGI      6665   8-29-88   5:00a
    LEYGREF  CMD      1408  11-14-87  12:09a
    LEYGREF  DAT      1280  11-14-87  12:09a
    LEYGREF  INS      7424  11-14-87  12:09a
    LEYGREF  PIC      1024  11-14-87  12:09a
    LEYGREF1 BAS     15365  11-14-87  12:09a
    MANUAL   BAT        23   6-09-88   8:30a
    PC3270   BGI      6029   8-29-88   5:00a
    PLANETS  BAK     14695  10-02-88   9:35a
    PLANETS  DOC     14695  12-23-88   9:35a
    PLANETS  EXE     98048  11-24-88  10:28a
    READ     ME       1296   3-02-85   4:15p
    WATOR    BAK       386   2-25-85   2:08p
    WATOR    DOC       382   2-25-85   2:10p
    WATORCOL COM     15435   2-25-85   1:51p
    WATORCOL PAS     10857   2-25-85   1:51p
    WATORMON COM     15435   2-25-85   1:52p
    WATORMON PAS     10857   2-25-85   1:50p
           25 file(s)     247917 bytes
                           59392 bytes free
