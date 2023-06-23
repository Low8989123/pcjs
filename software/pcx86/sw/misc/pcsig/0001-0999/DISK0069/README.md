---
layout: page
title: "PC-SIG Diskette Library (Disk #69)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0069/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0069"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "DESIGNER"

    THE DESIGNER is a programming tool for IBM BASIC users working with
    animated graphics.  The source code in BASICA for each of the example
    programs is included, for study or modification by anyone who wants to
    write graphics games or experiment with animation.  At least a beginning
    knowledge of programming and the BASIC language are recommended for
    using this package.  It cannot use a mouse or joystick.
    
    Features:
    
    ~ Full PC function key use to control programming functions
    
    ~ On-line help
    
    ~ Printable reference card
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DEMO.BAS

{% raw %}
```bas
10000 REM *******************************************************************
10010 REM **         DEMO - Program to Demonstrate Animation               **
10020 REM **          Using Files Created by "The Designer"                **
10030 REM **  Copyright 1983, by Jan B. Young.  Permission is granted to   **
10040 REM **  all purchasers to copy and modify this program for non-      **
10050 REM **  commercial uses, providing the copyright notice is retained. **
10060 REM *******************************************************************
10070 KEY OFF
10080 REM *******************************************************************
10090 REM **              Put Introduction Panel on Screen                 **
10100 REM *******************************************************************
10110 SCREEN 1:COLOR 1,1                  'Clear screen
10120 LOCATE 6,18:PRINT "T H E"
10130 LOCATE 8,16:PRINT "M O U S E"
10140 LOCATE 16,8:PRINT "An Animation Demonstration"
10150 LOCATE 18,6:PRINT "Copyright 1983 by Jan B. Young"
10160 LOCATE 23,8:PRINT "Press Any Key to Continue"
10170 X$=INPUT$(1)
10180 REM *******************************************************************
10190 REM **              Get Sprite and Load in Matrix                    **
10200 REM *******************************************************************
10210 OPEN "A:MOUSE.SPR" FOR INPUT AS #1
10220 INPUT #1,RES,PAL,ARR,WID,HGHT        'Defines parameters for the mouse
10230 DIM MOUSE(ARR)
10240 FOR I=0 TO ARR                       'Load mouse into array
10250 INPUT#1,J(0),J(1),J(2),J(3)
10260 P=VARPTR(MOUSE(I))
10270 FOR N=0 TO 3
10280 POKE P+N,J(N)
10290 NEXT N
10300 NEXT I
10310 CLOSE #1
10320 REM *******************************************************************
10330 REM **               Put background on Screen                        **
10340 REM *******************************************************************
10350 OPEN "A:MAZE.RES" FOR INPUT AS #1
10360 INPUT #1,RES,BAK,PAL                 'Defines parameters for maze
10370 CLOSE #1
10380 SCREEN RES:COLOR BAK,PAL:CLS         'Clear screen
10390 DEF SEG= &HB800                      'Locate screen buffer
10400 BLOAD "A:MAZE",0                     'Put maze on screen
10410 DEF SEG
10420 REM *******************************************************************
10430 REM **                      Animate                                  **
10440 REM *******************************************************************
10450 HPOS=7:VPOS=4:HNEW=7:VNEW=4:DIR$="E"              'Initial values
10460 T = VAL(MID$(TIME$,4,2))*100+VAL(MID$(TIME$,7,2))
10470 RANDOMIZE T
10480 PUT (HPOS,VPOS),MOUSE                             'Put mouse on screen
10490 REM LINE (HPOS-5,VPOS-3)-(HPOS+18,VPOS+14),1,B    'Debugging only
10500 GOSUB 11250                               'Determines freedom to move
10510 REM LOCATE 20,20:PRINT NORTH:LOCATE 21,21:PRINT EAST:LOCATE 22,20:PRINT SOUTH:LOCATE 21,19:PRINT WEST:LOCATE 21,30:PRINT DIR$  'Delete REM for debugging
10520 IF DIR$ = "E" THEN GOTO 10570
10530 IF DIR$ = "N" THEN GOTO 10720           'DIR$ is direction of motion
10540 IF DIR$ = "S" THEN GOTO 10860
10550 IF DIR$ = "W" THEN GOTO 11020
10560 REM *** Now going east - logic selects next move ***
10570 IF EAST=1 THEN GOTO 10630
10580 IF SOUTH=1 THEN GOTO 10610         'Value East=1 means OK to go east
10590 IF NORTH=1 THEN GOTO 11180        'Value East=0 means path east is blocked
10600 GOTO 11170                        'See GOTO line for direction chosen
10610 IF NORTH=0 THEN 11200
10620 I=RND:IF I>0.5 THEN 11200 ELSE 11180
10630 IF SOUTH=1 THEN GOTO 10670
10640 IF NORTH=1 THEN GOTO 10660
10650 GOTO 11190
10660 I=RND:IF I>0.4 THEN 11190 ELSE 11180
10670 IF NORTH=1 THEN GOTO 10690
10680 I=RND:IF I>0.4 THEN 11190 ELSE 11200
10690 I=RND:IF I>0.7 THEN 11200
10700 IF I>0.4 THEN 11180 ELSE 11190
10710 REM *** Now going north- logic selects next move ***
10720 IF NORTH=1 THEN GOTO 10780
10730 IF WEST=1 THEN GOTO 10760
10740 IF EAST=1 THEN GOTO 11190
10750 GOTO 11200
10760 IF EAST=0 THEN 11170
10770 I=RND:IF I>0.5 THEN 11190 ELSE 11170
10780 IF WEST=1 THEN GOTO 10820
10790 IF EAST=1 THEN GOTO 10810
10800 GOTO 11180
10810 I=RND:IF I>0.4 THEN 11180 ELSE 11190
10820 IF EAST=1 THEN GOTO 10840
10830 IF I>0.4 THEN 11180 ELSE 11170
10840 I=RND:IF I>0.6 THEN 11180
10850 I=RND:IF I>0.3 THEN 11170 ELSE 11190
10860 REM *** Now going south- logic selects next move ***
10870 IF SOUTH=1 THEN GOTO 10940
10880 IF WEST=1 THEN GOTO 10910
10890 IF EAST=1 THEN GOTO 11190
10900 GOTO 11180
10910 IF EAST=0 THEN 11170
10920 I=RND:IF I>0.5 THEN 11170 ELSE 11190
10930 IF I>0.2 THEN 11170 ELSE 11180
10940 IF WEST=1 THEN GOTO 10980
10950 IF EAST=1 THEN GOTO 10970
10960 GOTO 11200
10970 I=RND:IF I>0.4 THEN 11200 ELSE 11190
10980 IF EAST=1 THEN GOTO 11000
10990 I=RND:IF I>0.4 THEN 11200 ELSE 11170
11000 I=RND:IF I>0.7 THEN 11190
11010 IF I>0.4 THEN 11170 ELSE 11200
11020 REM *** Now going west- logic selects next move ***
11030 IF WEST=1 THEN GOTO 11090
11040 IF NORTH=1 THEN GOTO 11070
11050 IF SOUTH=1 THEN GOTO 11200
11060 GOTO 11180
11070 IF SOUTH=0 THEN 11180
11080 I=RND:IF I>0.5 THEN 11200 ELSE 11180
11090 IF NORTH=1 THEN GOTO 11130
11100 IF SOUTH=1 THEN GOTO 11120
11110 GOTO 11170
11120 I=RND:IF I>0.4 THEN 11170 ELSE 11200
11130 IF SOUTH=1 THEN GOTO 11150
11140 I=RND:IF I>0.4 THEN 11170 ELSE 11180
11150 I=RND:IF I>0.7 THEN 11180
11160 IF I>0.4 THEN 11200 ELSE 11170
11170 DIR$="W":HNEW=HNEW-1:GOTO 11210     '4 statements calculate next position
11180 DIR$="N":VNEW=VPOS-1:GOTO 11210
11190 DIR$="E":HNEW=HPOS+1:GOTO 11210
11200 DIR$="S":VNEW=VPOS+1:GOTO 11210
11210 PUT (HPOS,VPOS),MOUSE              'remove mouse from old position
11220 REM LINE (HPOS-5,VPOS-3)-(HPOS+18,VPOS+14),0,B   'Debugging only
11230 HPOS=HNEW:VPOS=VNEW                'Change position
11240 GOTO 10480                           'Go back to start
11250 REM *******************************************************************
11260 REM **                 "Feel" for open paths                         **
11270 REM ** Note: Mouse occupies a box extending horizontally from        **
11280 REM ** HPOS-6 to HPOS+19 and vertically from VPOS-4 to VPOS+15       **
11290 REM *******************************************************************
11300 WHILE DIR$="E"
11310    IF POINT(HPOS+18,VPOS-4)=0 AND POINT(HPOS+19,VPOS-4)<>0                            THEN NORTH=1 ELSE NORTH=0
11320    IF POINT(HPOS+18,VPOS+15)=0 AND POINT(HPOS+19,VPOS+15)<>0                         THEN SOUTH=1 ELSE SOUTH=0
11330    IF POINT(HPOS+19,VPOS+6)=0 THEN EAST=1 ELSE EAST=0
11340    RETURN
11350 WEND
11360 WHILE DIR$="W"
11370    IF POINT(HPOS-5,VPOS-4)=0 AND POINT(HPOS-6,VPOS-4)<>0                              THEN NORTH=1 ELSE NORTH=0
11380    IF POINT(HPOS-5,VPOS+15)=0 AND POINT(HPOS-6,VPOS+15)<>0                            THEN SOUTH=1 ELSE SOUTH=0
11390    IF POINT(HPOS-6,VPOS+6)=0 THEN WEST=1 ELSE WEST=0
11400    RETURN
11410 WEND
11420 WHILE DIR$="N"
11430    IF POINT(HPOS-6,VPOS-3)=0 AND POINT(HPOS-6,VPOS-4)<>0                              THEN WEST=1 ELSE WEST=0
11440    IF POINT(HPOS+19,VPOS-3)=0 AND POINT(HPOS+19,VPOS-4)<>0                            THEN EAST=1 ELSE EAST=0
11450    IF POINT (HPOS+6,VPOS-4)=0 THEN NORTH = 1 ELSE NORTH = 0
11460    RETURN
11470 WEND
11480 WHILE DIR$="S"
11490    IF POINT(HPOS-6,VPOS+14)=0 AND POINT(HPOS-6,VPOS+15)<>0                            THEN WEST=1 ELSE WEST=0
11500    IF POINT(HPOS+19,VPOS+14)=0 AND POINT(HPOS+19,VPOS+15)<>0                          THEN EAST=1 ELSE EAST=0
11510    IF POINT (HPOS+5,VPOS+15)=0 THEN SOUTH=1 ELSE SOUTH=0
11520    RETURN
11530 WEND
```
{% endraw %}

## DESIGNER.BAS

{% raw %}
```bas
10000 REM **************************************************************
10010 REM **                  THE DESIGNER V1.0                       **
10020 REM **           Copyright 1983, by Jan B. Young                **
10030 REM **************************************************************
10040 KEY OFF:ON ERROR GOTO 14930:CAPS=1:PURGE=0
10050 OPEN "A:DESIGNER.DRV" FOR INPUT AS #1
10060 INPUT #1,DRIVE$
10070 CLOSE #1
10080 KEY(1) ON:ON KEY(1) GOSUB 10440
10090 KEY(2) ON:ON KEY(2) GOSUB 10450
10100 KEY(3) ON:ON KEY(3) GOSUB 10460
10110 KEY(4) ON:ON KEY(4) GOSUB 10470
10120 KEY(5) ON:ON KEY(5) GOSUB 10480
10130 KEY(6) ON:ON KEY(6) GOSUB 10490
10140 KEY(7) ON:ON KEY(7) GOSUB 10500
10150 KEY(8) ON:ON KEY(8) GOSUB 10510
10160 KEY(9) ON:ON KEY(9) GOSUB 10520
10170 KEY(10) ON:ON KEY(10) GOSUB 10530
10180 REM **************************************************************
10190 REM **                    Mainline                              **
10200 REM **************************************************************
10210 SKIP$ = "INS":NOW$="INS"
10220 REC=1:GOSUB 15490
10230 IF SKIP$="INS" THEN GOSUB 10540
10240 IF SKIP$="NEW" THEN GOSUB 11000
10250 IF SKIP$="TXT" THEN GOSUB 12170
10260 IF SKIP$="SCL" THEN GOSUB 12680
10270 IF SKIP$="SSP" THEN GOSUB 13470
10280 IF SKIP$="RSP" THEN GOSUB 14330
10290 IF SKIP$="ANI" THEN GOSUB 13870
10300 IF SKIP$="RSC" THEN GOSUB 14610
10310 IF SKIP$="SSC" THEN GOSUB 14740
10320 IF SKIP$ <> "" GOTO 10230
10330 SCREEN 0,0,0:WIDTH 80:END
10340 REC=5:GOSUB 15490
10350 GOSUB 15220:IF TYPE$<>"C" THEN GOTO 10350
10360 IF X$ < "A" OR X$ > "D" THEN GOTO 10350
10370 OPEN "A:DESIGNER.DRV" FOR OUTPUT AS #1
10380 WRITE #1, X$:CLOSE #1:DRIVE$=X$:GOTO 10080
10390 REC=19:GOSUB 15490:GOSUB 15220:SCREEN 0,0,0:END ' no color/graph card
10400 REC=24:GOSUB 15490:GOSUB 15220:SCREEN 0,0,0:END  ' no printer
10410 REM *************************************************************
10420 REM **                   Key Settings                          **
10430 REM *************************************************************
10440 SKIP$ = "NEW":RETURN
10450 SKIP$ = "SCL":RETURN
10460 SKIP$ = "SSP":RETURN
10470 SKIP$ = "SSC":RETURN
10480 SKIP$ = "RSP":RETURN
10490 SKIP$ = "RSC":RETURN
10500 SKIP$ = "TXT":RETURN
10510 SKIP$ = "ANI":RETURN
10520 SKIP$ = "INS":RETURN
10530 SKIP$ = "":RETURN
10540 REM *************************************************************
10550 REM **  F9     INS = Instructions / Command List               **
10560 REM *************************************************************
10570 NOW$="INS"
10580 REC=28:GOSUB 15490
10590 LOCATE 21,10:PRINT DRIVE$+"."
10600 GOSUB 15220:IF SKIP$<>"INS" THEN RETURN
10610 IF ASC(X$) = 8 THEN GOTO 10600
10620 IF TYPE$ <> "C" THEN GOTO 10600
10630 LOCATE 8,62:PRINT USING "\         \";"          "+X$:Y$=X$
10640 GOSUB 15220:IF SKIP$<>"INS" THEN RETURN
10650 IF TYPE$ <> "C" THEN GOTO 10640
10660 IF ASC(X$) <> 8 THEN GOTO 10690
10670 LOCATE 8,62:PRINT USING "\          \";"            "
10680 GOTO 10600
10690 LOCATE 8,73:PRINT X$:Y$=Y$+X$
10700 GOSUB 15220:IF SKIP$<>"INS" THEN RETURN
10710 IF TYPE$ <> "C" THEN GOTO 10700
10720 IF ASC(X$) <> 8 THEN GOTO 10750
10730 LOCATE 8,73:PRINT " "
10740 GOTO 10640
10750 LOCATE 8,74:PRINT X$:X$=Y$+X$
10760 REC=0
10770 IF X$="INS" THEN GOTO 10580
10780 IF X$="GEN" THEN REC = 46
10790 IF X$="NEW" THEN REC = 140
10800 IF X$="SCL" THEN REC = 189
10810 IF X$="RSP" THEN REC = 271
10820 IF X$="SSP" THEN REC = 301
10830 IF X$="RSC" THEN REC = 328
10840 IF X$="SSC" THEN REC = 352
10850 IF X$="ANI" THEN REC = 363
10860 IF X$="TXT" THEN REC = 389
10870 IF X$="CRD" THEN REC = 435
10880 IF X$="DRV" THEN GOTO 10920
10890 IF REC <> 0 THEN GOTO 10910
10900 LOCATE 8,62:PRINT "Try Again:   ":GOTO 10600
10910 GOSUB 15490:RETURN
10920 OPEN "A:DESIGNER.DRV" FOR OUTPUT AS #1
10930 IF DRIVE$="A" THEN GOTO 10980
10940 IF DRIVE$="D" THEN DRIVE$="A"
10950 IF DRIVE$="C" THEN DRIVE$="D"
10960 IF DRIVE$="B" THEN DRIVE$="C"
10970 GOTO 10990
10980 DRIVE$="B"
10990 WRITE #1,DRIVE$:CLOSE #1:RETURN
11000 REM *************************************************************
11010 REM **   F1      NEW = New Figure or Screen                    **
11020 REM *************************************************************
11030 NOW$="NEW":REC=471:GOSUB 15490
11040 GOSUB 15220:IF SKIP$<>"NEW" THEN RETURN
11050 IF TYPE$<>"C" THEN 11040
11060 IF X$="H" THEN GOTO 11090
11070 IF X$="M" THEN GOTO 11100
11080 GOTO 11040
11090 RES1=2:BAK=0:GOTO 11230
11100 REC = 474:RES1=1
11110 GOSUB 15490
11120 GOSUB 15220:IF SKIP$<>"NEW" THEN RETURN
11130 IF X$="1" THEN GOTO 11160
11140 IF X$="0" THEN GOTO 11170
11150 GOTO 11120
11160 REC=478:PAL=1:GOTO 11180
11170 REC=489:PAL=0
11180 GOSUB 15490
11190 GOSUB 15220:IF SKIP$<>"NEW" THEN RETURN
11200 IF TYPE$<>"C" THEN 11190
11210 BAK=ASC(X$)-65
11220 IF BAK<0 OR BAK >15 THEN GOTO 11190
11230 RES=RES1:CLS:CLR=1:GRID=0:SCREEN RES:LAST=0
11240 IF RES=1 THEN COLOR BAK,PAL
11250 REM ********* intermediate entry point ***********
11260 HLOC=160*RES:VLOC=100
11270 PSET(HLOC,VLOC)
11280 IF LAST=1 THEN PRESET(HLOC,VLOC+1),CLR
11290 IF LAST=2 THEN PRESET(HLOC-1,VLOC),CLR
11300 IF LAST=3 THEN PRESET(HLOC,VLOC-1),CLR
11310 IF LAST=4 THEN PRESET(HLOC+1,VLOC),CLR
11320 PURGE=1:GOSUB 15220:IF SKIP$<>"NEW" THEN RETURN
11330 IF TYPE$="G" THEN GOTO 11530
11340 IF X$ = "G" THEN GOTO 11380
11350 IF X$>="A" AND X$ <="Z" THEN HOLD$=X$
11360 IF X$=>"0" AND X$ <="9" THEN GOTO 11580
11370 GOTO 11320
11380 IF GRID=1 THEN GOTO 11460
11390 FOR I = 9 TO 200 STEP 10
11400 LINE (0,I)-(4*RES,I),1:LINE (315*RES,I)-(320*RES,I),1
11410 NEXT I
11420 FOR I = 9 TO 320*RES STEP 10
11430 LINE (I,0)-(I,4),1:LINE (I,195)-(I,200),1
11440 NEXT I
11450 GRID=1:GOTO 11320
11460 FOR I = 9 TO 200 STEP 10
11470 LINE (0,I)-(4*RES,I),0:LINE (315*RES,I)-(320*RES,I),0
11480 NEXT I
11490 FOR I = 9 TO 320*RES STEP 10
11500 LINE (I,0)-(I,4),0:LINE (I,195)-(I,200),0
11510 NEXT I
11520 GRID=0:GOTO 11320
11530 IF X$="H" THEN GOTO 12140
11540 IF X$="M" THEN GOTO 12120
11550 IF X$="P" THEN GOTO 12100
11560 IF X$="K" THEN GOTO 12080
11570 GOTO 11320
11580 IF HOLD$ <>"P" THEN GOTO 11630
11590 IF X$<"0" OR  X$>"3" OR (RES=2 AND X$>"1") THEN GOTO 11630
11600 PRESET (HLOC,VLOC)
11610 PAINT (HLOC,VLOC),(ASC(X$)-48),CLR
11620 PRESET (HLOC,VLOC),CLR
11630 IF HOLD$="F" AND X$="0" THEN CLR=0
11640 IF HOLD$="F" AND X$="1" THEN CLR=1
11650 IF HOLD$="F" AND X$="2" THEN CLR=2
11660 IF HOLD$="F" AND X$="3" THEN CLR=3
11670 IF HOLD$="F" THEN HOLD$=""
11680 IF HOLD$<>"D" OR X$ <> "1" THEN GOTO 11710
11690 VSET=VLOC:HSET=HLOC:HOLD$=""
11700 GOTO 11320
11710 IF HOLD$<>"D" OR X$ <> "2" THEN GOTO 11740
11720 LINE (HSET,VSET)-(HLOC,VLOC),CLR:HOLD$=""
11730 GOTO 11320
11740 IF HOLD$<>"C" OR X$<> "1" THEN GOTO 11770
11750 VSET=VLOC:HSET=HLOC:HOLD$=""
11760 GOTO 11320
11770 IF HOLD$<>"C" OR X$<> "2" THEN GOTO 11830
11780 IF RES=2 THEN RAD=SQR(5.7*(VSET-VLOC)^2+(HSET-HLOC)^2)
11790 IF RES=1 THEN RAD=SQR(1.45*(VSET-VLOC)^2+(HSET-HLOC)^2)
11800 CIRCLE (HSET,VSET),RAD,CLR
11810 HOLD$=""
11820 GOTO 11320
11830 IF HOLD$<>"A" OR X$<> "1" THEN GOTO 11860
11840 VSET=VLOC:HSET=HLOC:HOLD$=""
11850 GOTO 11320
11860 IF HOLD$<>"A" OR X$<>"2" THEN GOTO 11890
11870 VSET2=VLOC:HSET2=HLOC:HOLD$=""
11880 GOTO 11320
11890 IF HOLD$<>"A" OR X$<>"3" THEN GOTO 11320
11900 IF RES=2 THEN GOTO 11990
11910 RAD=SQR(1.4*(VSET-VSET2)^2+(HSET-HSET2)^2)
11920 ANG1=ATN(1.25*(VSET-VSET2)/(HSET2-HSET))
11930 ANG2=ATN(1.25*(VSET-VLOC)/(HLOC-HSET))
11940 IF HSET>HLOC THEN ANG2=3.14+ANG2
11950 IF HLOC>HSET AND VLOC>VSET THEN ANG2=6.28+ANG2
11960 IF HSET>HSET2 THEN ANG1=3.14+ANG1
11970 IF HSET2>HSET AND VSET2>VSET THEN ANG1=6.28+ANG1
11980 GOTO 12060
11990 RAD=SQR(5.7*(VSET-VSET2)^2+(HSET-HSET2)^2)
12000 ANG1=ATN(2.5*(VSET-VSET2)/(HSET2-HSET))
12010 ANG2=ATN(2.5*(VSET-VLOC)/(HLOC-HSET))
12020 IF HSET>HLOC THEN ANG2=3.14+ANG2
12030 IF HLOC>HSET AND VLOC>VSET THEN ANG2=6.28+ANG2
12040 IF HSET>HSET2 THEN ANG1=3.14+ANG1
12050 IF HSET2>HSET AND VSET2>VSET THEN ANG1=6.28+ANG1
12060 CIRCLE (HSET,VSET),RAD,CLR,ANG1,ANG2
12070 HOLD$="":GOTO 11320
12080 IF HLOC > 0 THEN HLOC=HLOC-1
12090 LAST=4:GOTO 11270
12100 IF VLOC < 199 THEN VLOC=VLOC+1
12110 LAST=3:GOTO 11270
12120 IF HLOC < RES*320-1 THEN HLOC=HLOC+1
12130 LAST=2:GOTO 11270
12140 IF VLOC > 0 THEN VLOC=VLOC-1
12150 LAST=1:GOTO 11270
12160 RETURN
12170 REM *************************************************************
12180 REM **  F7      TXT = Add Text Characters                      **
12190 REM *************************************************************
12200 IF RES <> 0 THEN GOTO 12220
12210 NOW$="TXT":REC=500:GOSUB 15490:GOSUB 15220:RETURN
12220 NOW$="TXT":CAPS=0:START=1:MSG=0:GOSUB 15920
12230 PRESET (HLOC,VLOC),CLR
12240 OPEN "A:TEXTCHAR" AS #1 LEN=12:GOTO 12250
12250 FIELD #1,12 AS BUFFER$
12260 DIM HOLDC(2),HOLDB(2*(3-RES))
12270 PURGE=1:GOSUB 15220:IF SKIP$="NEW" THEN GOTO 12650
12280 IF SKIP$ <> "TXT" THEN GOTO 12640
12290 IF TYPE$="C" AND ASC(X$) > 31 AND ASC(X$) < 126 THEN GOTO 12500
12300 IF TYPE$ = "C" THEN GOTO 12270
12310 IF X$ <>"H" AND X$ <>"M" AND X$<>"P" AND X$<>"K" THEN GOTO 12270
12320 IF START=1 THEN GOTO 12270
12330 PUT (HLOC,VLOC),HOLDB,PSET
12340 IF X$="H" THEN GOTO 12390
12350 IF X$="M" THEN GOTO 12410
12360 IF X$="P" THEN GOTO 12430
12370 IF X$="K" THEN GOTO 12450
12380 GOTO 12270
12390 IF VLOC > 0 THEN VLOC=VLOC-1
12400 GOTO 12470
12410 IF HLOC < RES*320-7 THEN HLOC=HLOC+1
12420 GOTO 12470
12430 IF VLOC < 192 THEN VLOC=VLOC+1
12440 GOTO 12470
12450 IF HLOC > 0 THEN HLOC=HLOC-1
12460 GOTO 12470
12470 GET(HLOC,VLOC)-(HLOC+6,VLOC+7),HOLDB
12480 PUT (HLOC,VLOC),HOLDC,PSET
12490 GOTO 12270
12500 IF ASC(X$) > 32 THEN GOTO 12550
12510 FOR I=HLOC TO HLOC+3*RES:FOR J=VLOC TO VLOC+7
12520 PSET (I,J),0
12530 NEXT J,I
12540 GOTO 12270
12550 GET #1,ASC(X$)-32+(2-RES)*93
12560 OUTPUT$=BUFFER$
12570 FOR J= 0 TO 2
12580 HOLDC(J)=CVS(MID$(OUTPUT$,4*J+1,4))
12590 NEXT J
12600 HLOC=RES*160-3:VLOC=97:START=0
12610 GET(HLOC,VLOC)-(HLOC+6,VLOC+7),HOLDB
12620 PUT (HLOC,VLOC),HOLDC,PSET
12630 GOTO 12270
12640 ERASE HOLDC,HOLDB:CLOSE #1:CAPS=1:RETURN
12650 ERASE HOLDC,HOLDB:CLOSE #1:CAPS=1:SKIP$="NEW":NOW$="NEW"
12660 MSG=0:GOSUB 15920:GOTO 11260
12670 REC=503:GOSUB 15490:GOSUB 15220:RETURN
12680 REM *************************************************************
12690 REM **  F2        SCL = Scale a Drawing     Color 0,14         **
12700 REM *************************************************************
12710 IF RES <> 0 THEN GOTO 12730
12720 NOW$="SCL":REC=510:GOSUB 15490:GOSUB 15220:RETURN
12730 NOW$="SCL":MSG=0:GOSUB 15920
12740 SPEED=0:PRESET (HLOC,VLOC),CLR
12750 GOSUB 15220:IF SKIP$="NEW" THEN GOTO 13460
12760 IF SKIP$ <> "SCL" THEN RETURN
12770 IF TYPE$="G" THEN GOTO 12750
12780 IF X$ > "0" AND X$ <= "9" AND HOLD$ <> " " THEN SPEED = 1-(ASC(X$)-48)/25
12790 IF X$ = "E" THEN HOLD$ = "E"
12800 IF X$ = "C" THEN HOLD$ = "C"
12810 IF SPEED = 0 OR HOLD$ = " " THEN GOTO 12750
12820 IF HOLD$ = "E" THEN GOTO 13140
12830 REM ***** contract - left side *****
12840 FOR I = 160*RES TO 0 STEP -1
12850 IF SKIP$<>"SCL" THEN RETURN
12860 PSET(I,0),1:PSET(I,199),1
12870 K=160*RES-(160*RES-I)/SPEED
12880 FOR J = 100 TO 1 STEP -1
12890 L=100-(100-J)/SPEED
12900 IF K >=0 AND L >=0 THEN PSET (I,J),POINT(K,L) ELSE PSET (I,J),0
12910 NEXT J
12920 FOR J = 101 TO 198
12930 L=100+(J-100)/SPEED
12940 IF K >=0 AND L <=199 THEN PSET (I,J),POINT(K,L) ELSE PSET (I,J),0
12950 NEXT J
12960 PSET(I,0),0:PSET(I,199),0
12970 NEXT I
12980 REM *****  contract - right side *****
12990 FOR I = 160*RES + 1 TO 320*RES-1
13000 IF SKIP$<>"SCL" THEN RETURN
13010 PSET(I,0),1:PSET(I,199),1
13020 K=160*RES+(I-160*RES)/SPEED
13030 FOR J = 100 TO 1 STEP -1
13040 L=100-(100-J)/SPEED
13050 IF K <= 320*RES-1 AND L >= 0 THEN PSET(I,J),POINT(K,L) ELSE PSET(I,J),0
13060 NEXT J
13070 FOR J = 101 TO 198
13080 L=100+(J-100)/SPEED
13090 IF K <= 320*RES-1 AND L <=199 THEN PSET (I,J),POINT(K,L) ELSE PSET (I,J),0
13100 NEXT J
13110 PSET(I,0),0:PSET(I,199),0
13120 NEXT I
13130 SPEED = 0:HOLD$ = " ":MSG=0:GOSUB 15920:GOTO 12750
13140 REM ***** expand - left side *****
13150 SPEED = 2-SPEED
13160 FOR I = 0 TO 160*RES
13170 IF SKIP$<>"SCL" THEN RETURN
13180 PSET(I,0),1:PSET(I,199),1
13190 K=160*RES-((160*RES-I)/SPEED)
13200 FOR J = 1 TO 100
13210 L=100-((100-J)/SPEED)
13220 PSET (I,J),POINT(K,L)
13230 NEXT J
13240 FOR J = 198 TO 101 STEP -1
13250 L=100-((100-J)/SPEED)
13260 PSET (I,J),POINT(K,L)
13270 NEXT J
13280 PSET(I,0),0:PSET(I,199),0
13290 NEXT I
13300 REM *****  expand - right side *****
13310 FOR I = 320*RES-1 TO 160*RES + 1 STEP -1
13320 IF SKIP$<>"SCL" THEN RETURN
13330 PSET(I,0),1:PSET(I,199),1
13340 K = (I-160*RES)/SPEED + 160*RES
13350 FOR J = 1 TO 100
13360 L=100-(100-J)/SPEED
13370 PSET(I,J),POINT(K,L)
13380 NEXT J
13390 FOR J = 198 TO 101 STEP -1
13400 L=(J-100)/SPEED + 100
13410 PSET (I,J),POINT(K,L)
13420 NEXT J
13430 PSET(I,0),0:PSET(I,199),0
13440 NEXT I
13450 SPEED = 0:HOLD$ = " ":MSG=0:GOSUB 15920:GOTO 12750
13460 SKIP$="NEW":NOW$="NEW":MSG=0:GOSUB 15920:GOTO 11260
13470 REM *************************************************************
13480 REM **  F3       SSP = Store a Sprite                          **
13490 REM *************************************************************
13500 IF RES <> 0 THEN GOTO 13520
13510 NOW$="SSP":REC=513:GOSUB 15490:GOSUB 15220:RETURN
13520 RES1=RES:NOW$="SSP"
13530 L=1:R=320*RES1:T=1:B=200:SPEED=1
13540 LINE (L,T)-(R,B),1,B
13550 PURGE=1:GOSUB 15220:IF SKIP$<>"SSP" THEN RETURN
13560 IF TYPE$="G" THEN GOTO 13780
13570 IF X$<"1" OR X$>"9" THEN GOTO 13600
13580 SPEED = ASC(X$)-48
13590 GOTO 13550
13600 IF X$<>"G" THEN GOTO 13550
13610 R=R-1:L=L+1:T=T+1:B=B-1
13620 I=4+INT(((R-L+1)*(3-RES1)+7)/8)*(B-T+1)
13630 I=INT((3+I)/4)+1:J=FRE(" ")
13640 IF J>((I*4)+500) THEN GOTO 13660
13650 MSG=1001:GOSUB 15920:GOTO 13550
13660 DIM HOLD(I)
13670 GET (L,T)-(R,B),HOLD
13680 REC=516:VLOC=6:GOSUB 15340:IF SKIP$<>"SSP" THEN GOTO 13760
13690 OPEN Y$+".SPR" FOR OUTPUT AS #1
13700 WRITE #1,RES1,PAL,I,R-L+1,B-T+1
13710 FOR J= 0 TO I
13720 K=VARPTR(HOLD(J))
13730 WRITE #1,PEEK(K),PEEK(K+1),PEEK(K+2),PEEK(K+3)
13740 NEXT J
13750 REC = 520:GOSUB 15490:GOSUB 15220:SKIP$="INS"
13760 CLOSE #1:ERASE HOLD
13770 RETURN
13780 LINE (L,T)-(R,B),0,B
13790 IF X$="H" THEN B=B-SPEED
13800 IF X$="M" THEN L=L+SPEED
13810 IF X$="P" THEN T=T+SPEED
13820 IF X$="K" THEN R=R-SPEED
13830 IF B<T+2 THEN B=T+2
13840 IF L>R-2 THEN L=R-2
13850 GOTO 13540
13860 RETURN
13870 REM *************************************************************
13880 REM **  F8          ANI = Test Animation                       **
13890 REM *************************************************************
13900 NOW$="ANI":REC=521:VLOC=4:GOSUB 15340:IF SKIP$<>"ANI" THEN RETURN
13910 REC=524:Z$=Y$:VLOC=6:GOSUB 15340:IF SKIP$<>"ANI" THEN RETURN
13920 OPEN Z$+".RES" FOR INPUT AS #1:GOTO 13930
13930 INPUT #1,RES1,BAK,PAL1
13940 CLOSE #1
13950 OPEN Y$+".SPR" FOR INPUT AS #1:GOTO 13960
13960 INPUT #1,RES,PAL,I,WID,HGHT
13970 DIM HOLDC(I),HOLDB(I):GOTO 13980
13980 FOR J=0 TO I
13990 K=VARPTR(HOLDC(J)):INPUT #1,H(0),H(1),H(2),H(3)
14000 FOR L=0 TO 3:POKE K+L,H(L):NEXT L
14010 NEXT J
14020 CLOSE #1
14030 HLOC=(320*RES-WID)/2:VLOC=(200-HGHT)/2
14040 SCREEN RES
14050 IF RES = 1 THEN COLOR BAK,PAL
14060 DEF SEG=&HB800
14070 BLOAD Z$,0
14080 DEF SEG
14090 GET (HLOC,VLOC)-(HLOC+WID-1,VLOC+HGHT-1),HOLDB
14100 Y$="P":PUT (HLOC,VLOC),HOLDC,PSET
14110 PURGE=1:GOSUB 15220: IF SKIP$ <> "ANI" THEN GOTO 14290
14120 IF TYPE$ <> "G" THEN GOTO 14240
14130 PUT (HLOC,VLOC),HOLDB,PSET
14140 IF X$ = "H" AND VLOC > 0 THEN VLOC=VLOC-1
14150 IF X$ = "M" AND HLOC < RES*319-WID+1 THEN HLOC=HLOC+1
14160 IF X$ = "P" AND VLOC < 200-HGHT THEN VLOC=VLOC+1
14170 IF X$ = "K" AND HLOC > 0 THEN HLOC=HLOC-1
14180 GET (HLOC,VLOC)-(HLOC+WID-1,VLOC+HGHT-1),HOLDB
14190 IF Y$="P" THEN PUT (HLOC,VLOC),HOLDC,PSET
14200 IF Y$="A" THEN PUT (HLOC,VLOC),HOLDC,AND
14210 IF Y$="O" THEN PUT (HLOC,VLOC),HOLDC,OR
14220 IF Y$="X" THEN PUT (HLOC,VLOC),HOLDC,>=
14230 GOTO 14110
14240 IF X$="X" THEN Y$="X"
14250 IF X$="A" THEN Y$="A"
14260 IF X$="O" THEN Y$="O"
14270 IF X$="P" THEN Y$="P"
14280 GOTO 14110
14290 CLOSE #1:ERASE HOLDB:ERASE HOLDC:RETURN
14300 REC=525:GOSUB 15490:GOSUB 15220:RETURN
14310 REC=528:GOSUB 15490:GOSUB 15220:RETURN
14320 REC=531:GOSUB 15490:GOSUB 15220:RETURN
14330 REM *************************************************************
14340 REM **  F5        RSP = Retrieve a Sprite                      **
14350 REM *************************************************************
14360 NOW$="RSP":REC=534:VLOC=4:GOSUB 15340:IF SKIP$<>"RSP" THEN RETURN
14370 OPEN Y$+".SPR" FOR INPUT AS #1
14380 INPUT #1,RES1,PAL,I,WID,HGHT
14390 DIM HOLDC(I)
14400 IF RES1 <>1 THEN GOTO 14460
14410 REC=537:GOSUB 15490
14420 GOSUB 15220:IF SKIP$<>"RSP" THEN GOTO 14580
14430 IF TYPE$<>"C" THEN 14420
14440 BAK=ASC(X$)-65
14450 IF BAK<0 OR BAK >15 THEN GOTO 14420
14460 SCREEN RES1:RES=RES1
14470 CLS
14480 IF RES=1 THEN COLOR BAK,PAL
14490 FOR J= 0 TO I
14500 K=VARPTR(HOLDC(J)):INPUT #1,H(0),H(1),H(2),H(3)
14510 FOR L=0 TO 3:POKE K+L,H(L):NEXT L
14520 NEXT J
14530 HLOC=(320*RES-WID)/2:VLOC=(200-HGHT)/2
14540 PUT (HLOC,VLOC),HOLDC:ERASE HOLDC
14550 CLOSE #1
14560 SKIP$="NEW":NOW$="NEW"
14570 GOTO 11260
14580 CLOSE #1:ERASE HOLD:RETURN
14590 REC=572:GOSUB 15490:GOSUB 15220:RETURN
14600 REC=548:GOSUB 15490:GOSUB 15220:RETURN
14610 REM *************************************************************
14620 REM **  F6       RSC = Retrieve a Screen                       **
14630 REM *************************************************************
14640 NOW$="RSC":REC=551:VLOC=4:GOSUB 15340:IF SKIP$<>"RSC" THEN RETURN
14650 OPEN Y$+".RES" FOR INPUT AS #1:INPUT #1,RES,BAK,PAL:CLOSE #1
14660 SCREEN RES
14670 IF RES=1 THEN COLOR BAK,PAL
14680 DEF SEG=&HB800
14690 BLOAD Y$,0
14700 DEF SEG
14710 SKIP$="NEW":NOW$="NEW"
14720 GOTO 11260
14730 REC=554:GOSUB 15490:GOSUB 15220:RETURN
14740 REM *************************************************************
14750 REM **  F4          SSC = Store a Screen       Color 0,3       **
14760 REM *************************************************************
14770 IF RES <> 0 THEN GOTO 14790
14780 NOW$="SSC":REC=557:GOSUB 15490:GOSUB 15220:RETURN
14790 RES1=RES:NOW$="SSC":PRESET (HLOC,VLOC),CLR
14800 DEF SEG= &HB800
14810 BSAVE DRIVE$+":SCREEN",0,&H4000:DEF SEG
14820 REC=560:VLOC=19:GOSUB 15340:IF SKIP$<>"SSC" THEN RETURN
14830 IF LEN(Y$) > 2 THEN NAME DRIVE$+":SCREEN.BAS" AS Y$+".BAS":GOTO 14840
14840 IF LEN(Y$) = 2 THEN Y$ = DRIVE$+":SCREEN"
14850 OPEN Y$+".RES" FOR OUTPUT AS #1
14860 WRITE #1,RES1,BAK,PAL
14870 CLOSE #1:CLS:REC=569
14880 NOW$="INS":SKIP$="INS":GOSUB 15490
14890 RETURN
14900 REC=571:GOSUB 15490:LOCATE 19,37:PRINT "        ":GOTO 14820
14910 REC=576:GOSUB 15490:LOCATE 19,37:PRINT "        ":RETURN
14920 REC=581:GOSUB 15490:LOCATE 19,37:PRINT "        ":RETURN
14930 REM *************************************************************
14940 REM **              Error Handling                             **
14950 REM *************************************************************
14960 MSG=ERR:GOSUB 15920
14970 IF ERR = 7 AND ERL = 13970 THEN RESUME 14320
14980 IF ERR = 7 AND ERL = 14390 THEN RESUME 14600
14990 IF (ERR = 24 OR ERR = 25) AND ERL = 15790 THEN RESUME 15850
15000 IF ERR = 61 AND ERL = 14810 THEN RESUME 14910
15010 IF ERR = 61 AND ERL = 14870 THEN RESUME 14920
15020 IF ERR = 68 AND ERL = 15790 THEN RESUME 10400
15030 IF (ERR = 53 OR ERR = 52) AND ERL = 10050 THEN RESUME 10340
15040 IF (ERR = 53 OR ERR = 52) AND ERL = 12240 THEN RESUME 12670
15050 IF (ERR = 53 OR ERR = 52) AND ERL = 13920 THEN RESUME 14300
15060 IF (ERR = 53 OR ERR = 52) AND ERL = 13950 THEN RESUME 14310
15070 IF (ERR = 53 OR ERR = 52) AND ERL = 14370 THEN RESUME 14590
15080 IF (ERR = 53 OR ERR = 52) AND ERL = 14650 THEN RESUME 14730
15090 IF ERR = 58 AND ERL = 14830 THEN RESUME 14900
15100 IF ERR = 71 AND ERL = 15530 THEN RESUME 15860
15110 IF ERR = 72 AND ERL = 15530 THEN RESUME 15910
15120 CLS
15130 PRINT "Error number ",ERR," at line number ",ERL
15140 PRINT
15150 PRINT "Please notify: Jan Young"
15160 PRINT "               767 N. Holden St."
15170 PRINT "               Port Washington, Wi.  53074"
15180 PRINT
15190 PRINT "Please include the error number and line number above and"
15200 PRINT "as much information about what you were doing as possible."
15210 END
15220 REM *************************************************************
15230 REM **               Read From Keyboard                        **
15240 REM *************************************************************
15250 IF PURGE=0 THEN 15270
15260 DEF SEG=&H40:POKE &H1A,PEEK(&H1C):DEF SEG
15270 X$=INKEY$:IF SKIP$<>NOW$ THEN PURGE=0:RETURN
15280 IF X$="" THEN 15270
15290 IF LEN(X$)<>2 THEN 15320
15300 X$=MID$(X$,2,1)
15310 TYPE$="G":PURGE=0:RETURN
15320 IF ASC(X$)>96 AND CAPS=1 THEN X$=CHR$(ASC(X$)-32)
15330 TYPE$="C":PURGE=0:RETURN
15340 REM *************************************************************
15350 REM **              Read 8 Characters From Keyboard            **
15360 REM *************************************************************
15370 Y$=DRIVE$+":":GOSUB 15490
15380 FOR J=1 TO 8
15390 GOSUB 15220:IF SKIP$<>NOW$ THEN RETURN
15400 IF TYPE$<>"C" THEN 15390
15410 IF ASC(X$) <> 8 THEN GOTO 15440
15420 IF J=1 THEN GOTO 15390
15430 J=J-1:X$=" ":LOCATE VLOC,62+J:PRINT X$:Y$=MID$(Y$,1,J+1):GOTO 15390
15440 IF ASC(X$) = 13 THEN GOTO 15480
15450 IF ASC(X$) = 46 THEN GOTO 15390
15460 LOCATE VLOC,62+J:PRINT X$:Y$=Y$+X$
15470 NEXT J
15480 RETURN
15490 REM *************************************************************
15500 REM **         Print Verbiage Screens                          **
15510 REM *************************************************************
15520 WIDTH 80:SCREEN 0,1:RES=0
15530 OPEN "A:VERBIAGE" AS #2 LEN=85
15540 FIELD #2,85 AS BUFFER$
15550 GET 2,REC:OUTREC$ = BUFFER$
15560 IF SKIP$<>NOW$ THEN GOTO 15770
15570 IF MID$(OUTREC$,1,3)<>"c01" THEN GOTO 15600
15580 COLOR (VAL(MID$(OUTREC$,4,2))),(VAL(MID$(OUTREC$,6,2))),(VAL(MID$(OUTREC$,8,2)))
15590 CLS:REC=REC+1:GOTO 15550
15600 IF MID$(OUTREC$,1,3)="p01" THEN GOTO 15780
15610 LOCATE (VAL(MID$(OUTREC$,4,2))),(VAL(MID$(OUTREC$,6,2))),0
15620 IF VAL(MID$(OUTREC$,6,2))>8 THEN PRINT MID$(OUTREC$,8,78-(VAL(MID$(OUTREC$,6,2))))
15630 IF VAL(MID$(OUTREC$,6,2))<9 THEN PRINT MID$(OUTREC$,8,70)
15640 IF MID$(OUTREC$,82,1) <> " " AND MID$(OUTREC$,82,1) <> "I" THEN GOTO 15680
15650 REC = REC +1
15660 IF VAL(MID$(OUTREC$,78,4)) <> 0 THEN REC=VAL(MID$(OUTREC$,78,4))
15670 GOTO 15550
15680 IF MID$(OUTREC$,82,1) <> "P" THEN GOTO 15740
15690 LOCATE 23,28,0:PRINT "Press Any Key to Continue"
15700 GOSUB 15220:IF SKIP$ <> NOW$ THEN GOTO 15770
15710 CLS:REC=REC+1
15720 IF VAL(MID$(OUTREC$,78,4)) <> 0 THEN REC=VAL(MID$(OUTREC$,78,4))
15730 GOTO 15550
15740 IF MID$(OUTREC$,82,1) <> "E" THEN GOTO 15770
15750 LOCATE 23,28,0:PRINT "Press Any Key to Continue"
15760 GOSUB 15220
15770 CLOSE #2:RETURN
15780 IF MID$(OUTREC$,4,1) = "1" THEN LPRINT
15790 LPRINT USING "&     &";MID$(OUTREC$,8,35);MID$(OUTREC$,43,35)
15800 IF MID$(OUTREC$,82,1) <> " " AND MID$(OUTREC$,82,1) <> "I" THEN GOTO 15840
15810 REC = REC +1
15820 IF VAL(MID$(OUTREC$,78,4)) <> 0 THEN REC=VAL(MID$(OUTREC$,78,4))
15830 GOTO 15550
15840 CLOSE #2:RETURN
15850 REC=615:GOSUB 15490:GOSUB 15220:GOTO 15790        ' printer not ready
15860 CLS:PRINT "Your disk drive is not ready.  Please insert The Designer's"
15870 PRINT "disk in Drive A and close the door."
15880 PRINT
15890 PRINT "Press any key to Continue"
15900 GOSUB 15220:GOTO 15530
15910 REC=623:GOSUB 15490:GOSUB 15220:GOTO 15530        ' disk i/o error
15920 REM *************************************************************
15930 REM **                 Sound Effects                           **
15940 REM *************************************************************
15950 IF MSG = 0 THEN PLAY "t255mso3c8c8c8"
15960 IF MSG > 0 THEN PLAY "t255o1c8e-8c8e-8"
15970 RETURN
```
{% endraw %}

## DESIGNER.DOC

{% raw %}
```


                        The Designer User's Manual - V1.0



















                                  THE DESIGNER
                                  Version 1.0


               A BASIC Animation Programming Tool for the IBM PC






                                 User's Manual












                                         Copyright 1983 by Jan B. Young
                                                         April 29, 1983
                                       Manual Updated November 23, 1984



















                        The Designer User's Manual - V1.0





                               Table of Contents


          I.  Introduction
              A.  Overview                                   3
              B.  Capabilities                               4
              C.  Benefits and Advantages                    4
              D.  Requirements                               4

         II.  General Information
              A.  Description of Functions                   5
              B.  Definition of Terms                        6
              C.  Explanation of General Concepts            6

        III.  How to Use the Program
              A.  What to Do The First Time (Only)           8
              B.  Using The Designer                         9
              C.  Using Files Created by The Designer       12
              D.  "DEMO"                                    14
              E.  What To Do If an Error Occurs             15

         IV.  Administration
              A.  Warranty and Disclaimer                   16
              B.  Program Distribution                      16
              C.  Questions and Problems                    16
              D.  Maintenance and Enhancements              17

          V.  Reference Material
              A.  Command Summary                           18
























                                     Page 2






                        The Designer User's Manual - V1.0



                                I. INTRODUCTION


                                  A. OVERVIEW

       The  Designer  is  a  programming  tool  for  BASIC  users  working  with
       animated graphics on an  IBM-PC.  It  can  be  of  significant  value  to
       people    writing   graphic   games   and   to   people   interested   in
       experimenting with animation.

       The  Designer  is  written  in   IBM   advanced   BASIC   (BASICA).   The
       source  code  is  included  for  those  who  wish  to study and/or modify
       it. Since  The  Designer  uses  dynamic  array  dimensioning,  it  cannot
       be compiled.

       Included   with   The   Designer   is   a   demonstration  program  which
       illustrates one  way  to  program  animation.  "Demo"  is  also  provided
       in   source  code  form  so  you  can  study  and/or  modify  it  as  you
       wish.

       The  Designer  is  distributed  without  charge.  If  you  are  using  it
       and  find  it  to  be  of  value,  a  contribution  ($20 suggested) would
       be appreciated.

                             Jan B. Young
                             767 N. Holden St.
                             Port Washington, Wi.  53074

       Regardless   of   whether   you   make    a    contribution    or    not,
       individuals,    clubs,    and    other   non-profit   organizations   are
       granted  permission  to  copy  and  distribute  programs,   data   files,
       and  documentation  to  others,  providing  that  no  charge  is made for
       the  software.  Distribution  costs  may   be   charged   to   recipients
       providing they do not exceed $7 per copy.

       The   programs,   data  files,  and  documentation  may  be  modified  as
       desired  by  any  individual  or   non-profit   organization,   and   the
       modified    materials    distributed    providing    the   following   is
       retained  without  modification:  all  appearances   of   the   copyright
       notice,    all    warranty    disclaimers,    all   material   explaining
       distribution  policies,  and  all  requests  for   contributions.   Users
       distributing   modified   program   or   documentation  copies  are  also
       required to  add  the  words  "User  Modified"  wherever  The  Designer's
       version   number  appears  and  must  distribute  without  charge  (other
       than the $7 maximum distribution cost).










                                     Page 3






                        The Designer User's Manual - V1.0



                                B. CAPABILITIES

       The  objective  of  The  Designer  is  to  create  data  files   of   two
       types,   "screens"   and   "sprites".   A   "screen  file"  contains  the
       image  of  a  fixed  background  (the   scenery  behind  your  game).   A
       "sprite  file"  contains  the  image  of  a  character  which  your BASIC
       programs  can  move  about.  The  completed  screen  and   sprite   files
       are input data for your animation programs.

       The   Designer   features   full   use  of  the  PC's  function  keys  to
       control  program  function.  It  has  online-help  capabilities  and   is
       able   to   print   a   handy   reference  card  on  your  printer.  This
       documentation is included on the disk.



                           C. BENEFITS AND ADVANTAGES

       The  Designer  was  born  of  the  frustration  involved  in   an   early
       attempt  on  my  part  to  write  a  game.  I  found  that I was spending
       as  much  time  creating  the  images  as  I  was  programming  the  game
       logic and decided that a generalized tool would be of value.

       With  The  Designer,  your  PC  can  be  used  like  an  artist's canvas.
       You can  draw  on  the  screen  in  color,  store  your  work  in  either
       "screen"  or  "sprite"  form,  and  recall  it  later  to  make  changes.
       All  calculations  required   to   create   the   files   are   performed
       automatically  and  you  need  concern  yourself  only  with  the artwork
       and the graphic appearance of your images.

       The  Designer,   together   with   Demo,   can   also   be   a   learning
       experience   for   you   if   you   aren't   familiar   with    animation
       programming.  Since  Demo  is  modifiable,  it  gives  you   a   starting
       place and some ideas for program architecture and design.

       Whether  your  programs  are  modifications  of  Demo  or  not,  they can
       directly  read  both   screen   and   sprite   files   created   by   The
       Designer,  limiting  your  programming  effort  to  the  game  logic  and
       its presentation to the user.

                                D. REQUIREMENTS

       The  Designer  requires  an  IBM-PC  with  at  least   64K   of   memory,
       PC-DOS   with   BASICA,   a   color/graphics   adapter,  an  80-character
       display, and at least one disk drive (two recommended).

       The  Designer,  and  this  manual,  assume  that  you  have  a  beginning
       understanding   of   programming   concepts  and  a  beginning  knowledge
       of BASIC.






                                     Page 4






                        The Designer User's Manual - V1.0


                            II. GENERAL INFORMATION


                          A. DESCRIPTION OF FUNCTIONS

       The  Designer  supports  ten  different  functions,  each   accessed   by
       pressing   a   function   key   on   the   IBM   PC.  All  functions  are
       available   at   any   time,   simply   by   pressing   the   appropriate
       function key.

       The Designer's ten functions are:

  Fctn Key   Function
  --------  ------------------------------------------------------------
     1         NEW   -  Begin  a  new  image  on  the  screen.   Both  high  and
               medium  resolution  are  supported.   Colors  are  supported   to
               the   extent  that  the  color/graphics  adapter  supports  them.
               The  cursor  control  keys  are  used  to  draw  lines.   Special
               commands   draw  diagonals,  circles,  arcs  and  paint-in  areas
               with color.
     2       SCL - Scale.  The  Designer  can  expand  and  contract  images  on
               the  screen.   This  allows  you  to  create  an  original  image
               in  a  convenient  size  and  then  enlarge  or  reduce  it   for
               actual use.
     3        SSP  -  Store  Sprite.   Function  key  3  causes the image now on
               the display to be stored as a sprite.
     4       SSC - Store Screen.   Function  key  4  causes  the  image  now  on
               the display to be stored as a background screen.
     5        RSP  -  Retrieve  Sprite.   The  Designer  can,  of  course,  read
               the  sprite  files  it  creates  and  permits   sprites   to   be
               modified.   Modified  sprites  can  be  saved  either  as  a  new
               sprite or as a screen.
     6       RSC - Retrieve  Screen.  Similar  to  sprites,  saved  screens  can
               be   retrieved  from  disk,  modified  and  saved.   Segments  of
               screens   can   be   saved   as   sprites,   giving   flexibility
               in the application of your artwork.
     7         TXT   -   Add   Text.   Sometimes  background  screens  (or  even
               sprites)  involve  text  characters.    The   Designer   includes
               a   library  of  characters,  and  is  able  to  locate  them  on
               your artwork as you direct.
     8        ANI  -  Test  Animation.   Since  the  overall  effectiveness   of
               animated   graphics   is   dependent   on   the   integration  of
               screens  and  sprites,  The   Designer   includes   the   ability
               to   simultaneously   retrieve   a   screen   and  a  sprite,  to
               display both, and to permit movement of the sprite.











                                     Page 5






                        The Designer User's Manual - V1.0



     9        INS  -  Instructions.   Function  key  9  returns   you   to   the
               master   menu   from   any  place  in  The  Designer.   From  the
               master  menu,  helps   covering   all   functions   and   general
               system   use   can   be   requested.   In  addition,  the  master
               menu  permits  changes  to  the  default  disk  drive   and   the
               printing of a handy reference card.
    10       Stop.  Function key 10 stops execution of The Designer.

       These functions are explained in further detail in section III.C.


                             B. DEFINITION OF TERMS

       The Designer uses the following terms which may be new to you:

       Pixel   -   The   color/graphics  adapter's  display  is  made  up  of  a
          large  number  of  dots,  called   pixels.     The   pixels   can   be
          colored   in   medium   resolution   and   black   or  white  in  high
          resolution.   Medium  resolution  graphics  gives   you   200   pixels
          vertically  by  320  horizontally.   High  resolution  gives  you  200
          by 640.

       Screen  -  "Screens"  are  commonly  used  as  backgrounds  in  animation
          programming.  By  definition,  a  screen  is  the  full  size  of your
          display  (200x320  pixels  in  medium  resolution   and   200x640   in
          high   resolution).  Screens  are  retrieved  using  the  BASIC  BLOAD
          statement.

       Sprite -  "Sprites"  are  smaller  figures   which  can  be  superimposed
          on   screens   and   moved   about   as   dictated   by   game  logic.
          Sprites  require  more  memory  per  unit  area  than  screens,    but
          are   movable   in   single   pixel   increments.   The   smaller  the
          sprite, the faster it moves and the less memory it uses.

       Image  &  Figure  -  The  Designer  uses  the  terms  Image  and   Figure
          interchangably   to   denote    artwork   on   the   display.    Since
          artwork  can  become  either  a  "screen"  or  a  "sprite"   at   your
          command,   The   Designer   refrains  from  using  terms  which  imply
          one orientation or the other.


                       C. EXPLANATION OF GENERAL CONCEPTS

       BASICA  supports  two  key  statements  of  value   to   the   programmer
       working   with   animation    BLOAD  and   PUT.  You  should  read  about
       these  statements  in  the  BASIC  manual,  as  well  as  reviewing   the
       short explanations given here.








                                     Page 6






                        The Designer User's Manual - V1.0


       BLOAD

       The  BASIC  BLOAD  statement  moves  data  from  a  file to a location in
       memory  specified  by  the  programmer.  One  of  the  major   uses   for
       BLOAD  is  the  transfer  of  an  image  from  a  file  into  the  screen
       buffer.

       The  color/graphics   screen  buffer  is  16K  long,  so  the   operation
       of   BLOAD  takes  a  few  seconds.  BLOAD  fills  the  buffer  linearly.
       Since the display unit  scans  the  display  (and  uses  the  buffer)  in
       an   odd-even  pattern,  you  will  be  able  to  watch  BLOAD work first
       in horizontal stripes, and then filling in between the stripes.

       When  programming  with  BLOAD,  remember  that  the  statement   assumes
       that   files  to  be  loaded  will  be  qualified  with  ".BAS".  If  you
       rename a screen file that  was  created  by  The  Designer,  be  sure  to
       retain the .BAS suffix.


       PUT

       PUT  differs  from  BLOAD  in  several  respects.  First,  it  moves data
       only  into  the  screen  buffer  and  only  from  a   basic   subscripted
       variable.  Second,  it  is  able  to  load  a  portion  of  the buffer as
       directed  by  the  programmer,  while  BLOAD  is  really  effective  only
       for  loading  the  entire  buffer.  And  third,  it  is  able  to restore
       the  screen  to  its  prior  appearance,  simply  by  executing   another
       PUT (using the XOR mode).

       PUT  works  under  four  modes:  AND,  OR,  XOR,  and  PSET.  The  use of
       these modes  is   explained  in  the  BASIC  manual,  but   may  be  best
       understood  by  experimenting   with  them.  Try  creating  a  screen and
       sprite  using  The  Designer,  and  then  use  The  Designer's  animation
       test facility to experiment with the different modes.

       Remember  that  PUT  runs  much  faster  on  small  sprites than on large
       ones.  Animation  of  small   characters,   therefore,   will   be   much
       faster and smoother than large ones.


















                                     Page 7






                        The Designer User's Manual - V1.0



                          III. HOW TO USE THE PROGRAM


                      A. WHAT TO DO THE FIRST TIME (ONLY)

       When  you  first  receive  The  Designer,  it  will  have  the  following
       files on the diskette:

        DESIGNER.BAS       The Designer program
        VERBIAGE            Helps,  menus,  and  the   like.    This   file   is
                             input     data.     The    Designer    won't    run
                             without it.
        TEXTCHAR             Text   character   images.    If   this   file   is
                             deleted,   The   Designer   will   work,   but  use
                             of Function Key 7 will cause an abend.
        DESIGNER.DOC         This   document,   which   can   be   printed    by
                             typing "COPY A:DESIGNER.DOC LPT1:"
        DEMO.BAS           Animation Demo Program
        MOUSE.SPR          Input to Demo (See IV.C)
        MAZE.RES           Input to Demo (See IV.C)
        MAZE.BAS           Input to Demo (See IV.C)

       Starting The Designer the first time is done like this:

       Step  1:  If  you're  anxious  to  play  with  your  new toy (as I always
          am when I get new  software)  do  step  2.  If  you   want  to  do  it
          "right"  the  first  time,  then  skip  step  2  and  proceed  to step
          3.

       Step 2:  Insert  your  DOS  disk   in  drive  A  and  boot  the   system.
          Type  BASICA  to  invoke  advanced  basic.  Remove  the  DOS  disk and
          insert   The   Designer.   Type   RUN   "DESIGNER"   (including    the
          quotation marks).

       Step 3.  To do it "right":


          a. Insert your DOS diskette in drive A and boot the system.

          b. Insert a blank diskette in drive B and type:
                      FORMAT B:/S <Enter>
                      COPY COMMAND.COM B: <Enter>
                      COPY BASICA.COM B: <Enter>

          c. Now type the following commands:
                      COPY CON: AUTOEXEC.BAT <Enter>
                      BASICA DESIGNER/S:512 <Enter>
                      <Function key 6> <Enter>







                                     Page 8






                        The Designer User's Manual - V1.0


          d.   Now  remove  the  DOS  diskette  from  drive  A  and  replace  it
             with The Designer's diskette.  Type:
                      COPY *.* B: <Enter>

          e. If you have  only  one  disk  drive,  you  may  want  to  create  a
             "production"   version   of   The   Designer.   To   do   this,  go
             through steps 3.a, 3.b,  and  3.c.   In  place  of  3.d,  type  the
             following:
                      COPY DESIGNER.BAS B: <Enter>
                      COPY VERBIAGE B: <Enter>
                      COPY TEXTCHAR B: <Enter>
             The   other   files   delivered  on  The  Designer's  diskette  are
             not required for operation of the system.

          Once you have completed  step  3,  The  Designer  can  be  started  by
          booting your PC with The Designer's diskette in drive A.

       4.  Regardless  of  whether  you  use  step  2  or step 3, the first time
          you operate  The  Designer,  it  will   ask  you  which  drive  should
          be  used  for  storage.  Respond  with  A,  B,  C,  or  D.   This data
          will be stored  in  a  new  file  called  DESIGNER.DRV  and  you  will
          not   be   asked   the  question  again  (unless   the   new  file  is
          destroyed). If you  want  to  change  the  designation  at  any  time,
          you can do so. See section B.3 below for details.

       5.  If  you  want  to  use  The  Designer  from  a hard disk (or from any
          disk  other  than  drive  A),  modify  line  15530  to   reflect   the
          drive   that   the   "VERBIAGE"   file   will  be  residing  on.   The
          Designer assumes that it will be on drive A.


                             B. USING THE DESIGNER

       Detailed  instructions  for  operating  The  Designer   appear   in   the
       helps  which  are  available  online  during  any  session.  For  reasons
       of  space  economy,  most  of  this   information   is   not   duplicated
       here.   Instead,   this   section   of  the  manual  contains  additional
       information and hints which may be of value.

       The helps can be  printed  and  appended  to  this  manual  if  you  wish
       to  do  so.  Printing  can  be  done  by  running  The  Designer, calling
       the helps from the main menu, and using PrtSc to print them.


       1.  Overall Scheme

       The Designer is  intended  to  be  a  tool  for  the  programmer  who  is
       interested   in   experimenting   with   animated   graphics  or  writing
       games or other animations  using  the  IBM  BASICA  lanugage  on  an  IBM
       PC.






                                     Page 9






                        The Designer User's Manual - V1.0


       BASIC   provides   several   powerful   animation  statements  permitting
       the programmer  to  display  backgrounds  and  movable  elements  and  to
       move   them   around  the  screen.  In  particular,  the  BLOAD  and  PUT
       statements  are  valuable.   These  statements  move  images   onto   the
       screen  and  are  capable  of  animation.  You  should  refer  to the IBM
       BASIC manual for more information.

       But,  BLOAD  and  PUT  both  require  images  which  have  already   been
       created   and   exist   either  in  memory  or  in  a  disk  file.  BASIC
       provides no significant support for the creation of the images.

       This  is  The  Designer's  role  -  the  creation  of   backgrounds   and
       movable  characters  in  a  form  usable  by  the  BASIC  BLOAD  and  PUT
       statements.

       Assuming  you  are  writing  a  game  involving  animated  graphics,  The
       Designer is intended to be used as follows:

       -   Design   your   game.   Divide   the   display   images   into  fixed
         backgrounds  and  movable  characters.  Get  a  rough   idea   of   the
         game  logic  and  think  about  the  shape,  form  and color of screens
         and sprites.

       - Use The Designer to  draw  and  save,  one  by  one,  the  screens  and
         sprites your game will use.

       -   Use   The   Designer's  animation  test  facilities  to  inspect  the
         screens  and  sprites  in  combination  to  assure  that   things   fit
         and look good together.

       -  Start  the  programming.  Use  the  BASIC  manual  for  help  with the
         BLOAD and PUT  statements.  Look  over  the  Demo  program  that  comes
         with  The  Designer  for  ideas  and  for  help  in applying the screen
         and sprite files created by The Designer.

       -  If  you  find  that  additional  screens  and  sprites  are  required,
         use The Designer to make them.

       -  If  you  find  that  changes  are  needed  to screens and sprites, The
         Designer will help you make them.


       2.  Starting

       If  you  have  been  through  the  steps  in  section   III.A   of   this
       manual,  starting  The  Designer  is  a   matter  only  of  inserting the
       diskette  in  drive  A  and  booting  your  PC.  If  you  have  not  done
       III.A, refer to it for instructions on starting The Designer.








                                     Page 10






                        The Designer User's Manual - V1.0



       3.  Using the Function Keys

       With  only  a  very   few  exceptions,  any  function  key can be used at
       any  time  throughout  The  Designer.  However,  be  careful   when   you
       have  artwork  in  progress.  If,  for  instance,  you  use  function key
       9  (which  calls  up  the  main  menu)  with  artwork  in  progress,  The
       Designer  will  assume  that  you  are  done  with  the  artwork and will
       clear the screen to fill your request for the menu.

       4.  Changing the Default Disk Drive

       To  change  the  default  diskette  drive  used  by  The   Designer   for
       storage  of  screen  and  sprite  files,  move  to  the  master menu (F9)
       and type  DRV.  The  menu  will  be  refreshed  and  the  notation  (last
       line)  showing  the  default  drive  will  change.   Moving  from  A to B
       requires  one  entry  of  DRV.  Moving  from  B  to  A  requires  cycling
       through  C  and  D.  All  changes  to  the  default  drive  are permanent
       and  will  remain  in  effect  through  future  uses  of   The   Designer
       until explicity changed by you.


       5. Cursor Management

       The   use   of   function   keys  2,  5,  or  6  immediately  results  in
       changing  the  cursor  to  the  current  foreground   color.   Therefore,
       the   cursor   can  be  made  to  disappear  by  setting  the  foreground
       color   as   appropriate   to   your   situation   before   using   these
       function  keys.  If  the  foreground  color  is  not  correctly  set, the
       cursor will become  a  permanent  part  of  the  image  and  it  will  be
       necessary  to   retrieve  the  saved  image   to  erase   it.  Therefore,
       always check foreground  color  before  using  function  keys  2,  5,  or
       6.


       6. Using the Enter Key

       The  Designer  is  largely  controlled  with  fixed-length  commands  and
       function  keys.  To  make  it  easier   to  use,  it   is   designed   to
       respond   to  commands  without  waiting  for  you  to  press  the  enter
       key. In most cases the enter key has been rendered inoperative.

       The exception to this  rule  lies  in  the  entry  of  file  names  which
       can   be   anywhere  from  one  to  eight  characters  long.   Since  The
       Designer does not know how long  a  file  name  will  be,  it  waits  for
       you to press enter before responding.










                                     Page 11






                        The Designer User's Manual - V1.0



       7.  File Names.

       When   storing   or   retreiving   either   screens   or   sprites,   The
       Designer  requests  a  file  name.  The   Designer   will   append   file
       qualifiers, relieving you of the need to type them.

       It  is  best  to  refrain  from  using  "DESIGNER"  as  a file name.  You
       might   overwrite   the   program   itself,   permanently   loosing   it.
       Unless  Demo  has  been  moved  to  another  diskette,  "DEMO",  "MOUSE",
       and "MAZE" should also be considered reserved names.


       8. Upper and Lower Case

       In all cases but  one,  if  you  type  lower  case  characters  into  The
       Designer,   they   will   be  converted  into  upper  case  before  being
       displayed  or  used.  Therefore,  you  need  not   be   concerned   about
       cases.

       The   exception  is  function  7,  which  allows  inclusion  of  text  on
       your  images.  Since  both  upper   and   lower   case   characters   are
       supported,   the   status   of  the  shift  and  capslock  keys  will  be
       recognized and used.


       9.  Sound

       The  Designer  involves  a  great  deal   of   full-screen   work   which
       cannot  be  disturbed  by  printing  messages  on  the  display.   Yet in
       some cases, The Designer  needs  to  confirm  that  it  has  completed  a
       requested task, and in some cases it has to report problems.

       The    display-in-use    problem   is   circumvented   using   the   PC's
       speaker. When The Designer  wants  to  confirm  that  it  has  done  what
       you  asked  it  to  (and  particularly  when  its  actions  do  not  make
       any  visible  change  to  the  screen),  it  will  confirm   with   three
       high-pitched   beeps.   When   The   Designer  encounters  an  error,  it
       reports with a low-pitched warble.


                     C. Using Files Created by The Designer

       The Designer is intended  to  be  a  tool  to  create  data  files  which
       will   be   read   by  your  programs.  Discussion  of  the  contents  of
       these  files  and  of  their  use  in  your   programs   is,   therefore,
       important.









                                     Page 12






                        The Designer User's Manual - V1.0


       Screen Files

       When  you  save  a  screen  using  The  Designer,  two files are created.
       The  file  names  default  to  SCREEN.RES  and  SCREEN.BAS,  but  can  be
       changed   by   The  Designer  if  you  tell  it  to  do  so,  or  can  be
       changed using RENAME later.

       The  RES  file  will  consist  of  a   single   record   containing   the
       following information:

          The resolution (2= high, 1=medium)
          The background color (0 through 15)
          The palette (0 or 1)

       The  RES  file  is  necessary  because  this  information  is  not stored
       by BSAVE in creating the  BAS  file.  Since  BASIC  does  not  provide  a
       simple  way  of  appending  the  screen  to  the  RES file, two files are
       used.

       The  RES  file  should  be  read  with  the  following  BASIC  statements
       (obviously  you  should  use  the  correct  file  and  variable names for
       your program) taken from DEMO.

          OPEN "A:MAZE.RES" FOR INPUT AS #1
          INPUT #1,RES,BAK,PAL
          CLOSE #1

       Use of the RES file is  not  required  in  your  program.  If  you   know
       the   correct   values   for   the   resolution,  background  color,  and
       palette,  you  can  write  them   into  the  program   and  avoid   using
       the  RES  file.  You   can  even  erase  the  RES file.  If, however, you
       aren't sure what  the  values  might  be  in  the  future,  data  in  the
       RES file can be checked to prevent errors.

       The  BAS  file  is  used  directly  by  BLOAD.  Its  format  and contents
       are controlled entirely by BASIC. The required statements are:

          SCREEN RES
          COLOR BAK,PAL
          CLS
          DEF SEG=&HB800
          BLOAD "A.MAZE",0
          DEF SEG


       Sprite Files

       Saving  a  sprite  results  in  the  creation  of  a  single  data   file
       bearing  a  name  you  specified  (there  is  no  default  in  this case)
       with a .SPR extension.






                                     Page 13






                        The Designer User's Manual - V1.0


       The first record in a sprite file contains the following:

          The resolution (2= high, 1=medium)
          The palette (0 or 1)
          The size of the array required to hold the sprite
          The width of the sprite (in pixels)
          The height of the sprite (in pixels).

       Subsequent  records  contain  the  ASCII   values   of   the   characters
       that need to be loaded into the array to represent the sprite.

       The  statements  required  to  load  a  sprite  from  a  file  created by
       The Designer are: 

          OPEN "A:MOUSE.SPR" FOR INPUT AS #1
          INPUT #1,RES,PAL,ARR,WID,HGHT
          DIM MOUSE(ARR)
          FOR I=0 to ARR
             INPUT #1, J(0),J(1),J(2),J(3)
             P=VARPTR(MOUSE(I))
             FOR N = 0 to 3
                POKE P+N,J(N)
             NEXT N
          NEXT I
          CLOSE #1

       Similar  to  Screen  files,  if  you  know  the  resolution  and  palette
       information  and  the  array  size,  you  can  avoid  a  small  amount of
       computing  by  writing  the  values  directly  into  your   program.   In
       this  case,  you  will  have  to  delete  the  first line from the sprite
       file using either EDLIN or some other editor.

       The sprite width and  height  are  supplied  only  as  a  convenience  to
       you. They need not be used at all in your program.

       When  your  program  has  finished  loading  the   array,  and  has moved
       the  screen  into  the  screen  buffer,  the  BASIC  PUT   statement   is
       used  to  apply  and  remove  the  sprite  from  the  screen according to
       your program's logic.


                                    D. DEMO

       The  program  "Demo"  is  intended  only  as  a  demonstration  of    the
       abilities  of  The  Designer   and  of  BASICA  animation.  It  is  not a
       game,  nor  is   it  the  ultimate  in  animation  technique.  In   fact,
       Demo   is   purposefully   less   than   optimum   to   enhance   program
       legibility.








                                     Page 14






                        The Designer User's Manual - V1.0


       Demo, when run, displays  a  maze  and  a  mouse  that  wanders  randomly
       (and   slowly)  through  the  maze.  Compiling  this  program  will  make
       the  mouse  move  much  faster  and  will  make  watching  it  more  fun,
       but  will  eliminate  the  real  benefit  of  the  program,  reading  the
       code.

       To run Demo, stop  The  Designer  with  function  key  10  and  type  RUN
       "DEMO"   (including   the   quotation  marks).   Demo  requires  no  user
       input - you can just  sit  and  watch  it  go.  When  you  are  tired  of
       it,   stop   it   with   Cntl-Break   and   type  "LIST"  (excluding  the
       quotation  marks)  to  see  the  program.   Print   the   program   using
       LLIST  and  study,  especially,  the  use  of  the  MOUSE.SPR,  MAZE.RES,
       and MAZE.BAS files in lines 10180 through 10410.


                             E. IF AN ERROR OCCURS

       The  Designer  should  catch  all  possible  user  errors   and   provide
       complete   error   diagnostics   and   opportunities  to  correct  errors
       online.  Since  the  online  diagnostics  are  very  complete,  they  are
       not documented here, with one exception.

       The   Designer   uses  dynamic  array  definition  to  build  arrays  for
       transferring  sprites   from   your   display   to   diskette.    It   is
       possible  for  you  to  attempt  to  store  a  sprite  which  is so large
       that the required array would exceed the available memory.

       Should  you  exceed  the  available  memory,  The  Designer  will  detect
       the   problem  before  crashing.  Since  your  sprite  is  still  on  the
       screen,  and  is  stored  nowhere  except   the    screen   buffer,   The
       Designer  refrains   from  clearing  the  screen  and  provides  only  an
       error  tone  (a  low  warble  -  see  above).  When  this  happens,   you
       have  a  choice:  you  can  reduce  the  size  of  the  sprite by closing
       down  the  box  further,  or  you  can   abort   the   whole   thing   by
       pressing a function key.

       The    Designer    is   affected   by   one   significant   BASICA   bug.
       Occasionally when saving  a  screen,  you  may  get  a  syntax  error  on
       either  a  non-existent  line  number  or  on  line  number  15530.  When
       this  happens  The  Designer  will  probably  lock  up  and   you    will
       have   to   re-boot  your  PC.  However,  the  DIR  command  will  reveal
       that all is not  lost  -  your  screen  has  been  saved  as  SCREEN.BAS.
       If  you  rename  it  and  restart  The  Designer,  you  can continue from
       where you were when you were interrupted.












                                     Page 15






                        The Designer User's Manual - V1.0


       In addition  to  these  errors  and  messages,  you  may  run  across  an
       error message in the form:

           Error Number nnn on Line Number nnn

       followed  by  a  BASIC  OK.  This  message  means  that  The Designer has
       crashed.  I  would  like  very  much  to  know  about   crashes.   Please
       write   to   Jan   Young,  767  N.   Holden  St.,  Port  Washington,  Wi.
       53074, and include as  much  detail  as  possible  about  what  you  were
       doing  when  the  problem   arose,  and  what  suspicions  you  have,  if
       any, about the causes.













































                                     Page 16






                        The Designer User's Manual - V1.0


                               IV. ADMINISTRATION


                           A. WARRANTY AND DISCLAIMER

       In  view  of  the  fact  that  The  Designer  is   distributed   entirely
       without    charge   and   contributions   are   wholly   voluntary,   all
       warranties  are  disclaimed.  I  cannot  be   responsible  in   any   way
       for  direct,  indirect,  or  consequential  damages.  Any  and  all  risk
       associated with  using  The  Designer,  Demo,  their  data  files  and/or
       the documentation is the user's.


                            B. PROGRAM DISTRIBUTION

       The  Designer  is  distributed  without  charge.  If  you  are  using  it
       and find it  to  be  of  value,  a  contribution  ($20  suggested)  would
       be appreciated.

                             Jan B. Young
                             767 N. Holden St.
                             Port Washington, Wi.  53074

       Regardless    of    whether    you    make   a   contribution   or   not,
       individuals,   clubs,   and   other   non-profit    organizations     are
       granted   permission   to  copy  and  distribute  programs,  data  files,
       and documentation to  others,  providing  that  no  charge  is  made  for
       the   software.   Distribution   costs  may   be  charged  to  recipients
       providing they do not exceed $7 per copy.

       The  programs,  data  files,  and  documentation  may  be   modified   as
       desired   by   any   individual  or   non-profit  organization,  and  the
       modified   materials   distributed    providing    the    following    is
       retained   without   modification:   all  appearances  of  the  copyright
       notice,  all  warranty  disclaimers,   all   material   explaining   this
       distribution   policy,   and   all  requests   for  contributions.  Users
       distributing  modified    program    or    documentation    copies    are
       also   required   to   add   the  words  "User   Modified"  wherever  The
       Designer's  version  number   appears   and   must   distribute   without
       charge (other than the $7 maximum distribution cost).


                           C. QUESTIONS AND PROBLEMS

       If   you   have   questions  about  The  Designer,  or  have  experienced
       problems with it, I  will  try  to  help.   Write  to  me  (please  don't
       phone)   and   enclose   a   stamped   self-addressed   envelope  for  my
       reply.  Please  don't  expect  return-mail  responses  since   I   travel
       quite a bit and may not even read your letter for a week or two.







                                     Page 17






                        The Designer User's Manual - V1.0


       If   The  Designer  crashes  while  you  are  using  it,  please  let  me
       know so I can fix  the  problem.   The  more  details  you  provide,  the
       easier it will be for me to make the fix.


                        D. MAINTENANCE AND ENHANCEMENTS

       If   there   is   a   reasonable   level  of  interest  in  The  Designer
       (measured  by  the  number  of  contributions   I   receive),   I    will
       create   and   make   available  new  releases.  Some  possibilities  for
       future enhancements  include:  1)  Variable  line  widths  in  the  "NEW"
       mode,   2)   Separation  of  scaling  into  a  compilable  module  so  it
       will  run  faster,  3)  use   of  color  in  high   resolution   (it   is
       possible,  but  limited),  4)  the  ability  to  rotate  images,  and  5)
       extension  into  text-mode   graphics.   If   you   have   other   ideas,
       please write and let me know what they are.

       If  you  contribute  once,  the  suggested  contribution  is  reduced  to
       $2  for  a  new  release.  Just  send  me   a   diskette,   a   postpaid,
       self-addressed  mailer,  and  a  brief  note  requesting  a  copy  of the
       latest version.  The  same  policy  holds  if  you  accidentally  destroy
       the  program  and  want  a  fresh  copy  of  the  current version. I will
       be unable to supply replacement copies of obsolete versions.

































                                     Page 18






                        The Designer User's Manual - V1.0



                             V. REFERENCE MATERIAL

                               A. COMMAND SUMMARY

  Function  Command  Explanation
  --------  ------- ----------------------------------------------------
   1  NEW            Cursor Arrows move the cursor.
              Fn      Set  foreground  color  to  n,  where  n  is  0  or  1  in
                      high  resolution;  0,  1,  2,  or  3 in medium resolution.
                      Color received depends on palette selelction.
              D1      Defines  the  first  end  of  a  diagonal  line   at   the
                      current cursor location.
              D2       Defines  the  second  end  of  a  diagonal  line  at  the
                      current  cursor  location  and  causes  the  line  to   be
                      drawn in the current foreground color.
              C1      Defines  the  center  of  a  circle  at the current cursor
                      location.
              C2      Defines  the  periphery  of  a  circle  at   the   current
                      cursor   location  and  causes  the  circle  to  be  drawn
                      in the current foreground color.
              A1     Defines the  center  of  a  circular  arc  at  the  current
                      cursor location.
              A2      Defines  the  radius  of  a  circular  arc  and the start-
                      ing  position  at  the  current  cursor  location.    (The
                      arc    will    be   drawn   counterclockwise   from   this
                      position.
              A3     Defines  the  ending  position  of  a  circular  arc  as  a
                      line   from   the   A1  location  to  the  current  cursor
                      position  and  causes  the  arc  to  be   drawn   in   the
                      current foreground color.
   2  SCL     En     Expand the image by 4*n percent.
              Cn     Contract the image by 4*n percent.
   3   SSP             Cursor  Arrows  reduce  the  box  size.   The  up  arrow,
                      for instance, raises the bottom of the box.
               n      Used  as  a  multiplier  for  the  speed  of  the   cursor
                      arrows.
              G       Signals  that  the  box  now  represents  the  size of the
                      sprite and initiates creation of the sprite files.
   4  SSC            No commands
   5  RSP            No commands  (but  return  to  NEW  is  automatic  and  the
                      NEW commands can be used).
   6   RSC             No  commands  (but  return  to  NEW  is automatic and the
                      NEW commands can be used).
   7   TXT             Any  key  (ASCII  33  to  125)  can  be  used  to  create
                      the corresponding character.
                     Cursor   arrows   move  the  most  recently  created  char-
                      acter.
                     Space  bar  deletes  the  most   recently   created   char-
                      acter and blanks anything under it.






                                     Page 19






                        The Designer User's Manual - V1.0


                         A. COMMAND SUMMARY (Continued)

  F u n c t i o n               C o m m a n d              E x p l a n a t i o n
  --------  ------  ---------------------------------------------------
   8  ANI            Cursor arrows move the sprite.
              A      Begins use of ADD mode PUTs.
              O      Begins use of OR mode PUTs (alpha Oh).
              X      Begins use of XOR mode PUTs.
              P      Begins use of PSET mode PUTs (the default).
   9   INS             Typing  any  of  the  three-letter   abbreviations   will
                      display   a   series   of  helps  explaining  the  use  of
                      the corresponding function.
              GEN    Initiates display of helps explaining general
                      topics about The Designer.
              CRD    Causes printing of the reference card.
              DRV    Alters the default disk drive.
  10  Stop           No commands.







































                                     Page 20




0  Stop           No commands.







































                                     Page 20





```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0069

     Volume in drive A has no label
     Directory of A:\

    DEMO     BAS      6528   1-01-80   1:06a
    DESIGNER BAS     18688  11-08-93   7:03p
    DESIGNER DOC     45056   1-21-85   8:00p
    MAZE     BAS     16512   1-01-80  12:58a
    MAZE     RES       128   1-01-80  12:03a
    MOUSE    SPR       256   1-01-80  12:27a
    TEXTCHAR          2304   1-01-80  12:49a
    VERBIAGE         49792   1-01-80  12:23a
            8 file(s)     139264 bytes
                           18944 bytes free
