---
layout: page
title: "PC-SIG Diskette Library (Disk #336)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0336/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0336"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "ABC DESIGN #1"

    The ABC Design character-graphics, color-image editor program allows
    one to create and use many sets of fonts for the Epson printer, create
    drawings and dump them with graphics mode.  If you've ever felt
    frustrated by the difficulty of getting the most out of your printer's
    capabilities, check this one out!  See accompanying documentation
    for complete operating instructions for this program.
    
    System Requirements: Graphics printer, color graphics, and BASIC.
    Mouse Systems optical mouse is optional.
    
    How to Start: Load DOS and consult ME.TXT for program information.
    Consult MANUAL.EXE on disk 337 for program documentation.
    
    Suggested Registration:  $5.00/Year.
    
    File Descriptions:
    The First Disk Contains:
    ASCREF?  PIC  Documentation file (2 files)
    ALPHA?   PIC  Block symbol images (3 files)
    D??????  PIC  Symbol Dictionary Image (3 files)
    CHARDOC? PIC  Documentation file (5 Files)
    BW       PIC  Symbol Dictionary Image
    ASKDICK  PIC  Documentation file
    *        SET  Character Set (19 files)
    EDDIE    BAS  Character graphics color image program
    WARRANTY TXT  Warranty form
    EDDIE    BAT  Batch file to run Eddie
    FEED     TXT  Text for Form Feed
    EP       BAT  Batch file to create script files
    ME       TXT  Instructions for this Disk
    LICENSE  TXT  License information
    INSERT   TXT  Instructions for printing documentation
    ???      BIN  Binary output (3 files)
    GETPETE  BAT  Batch File to copy Pete Program
    GETEDDIE BAT  Batch File to copy Eddie Program
    GET      BAT  Batch File to copy Eddie Program
    FIXPIC   BAS  Blanks the 25th Line of an Eddie Image
    SETREF   PIC  Documentation file
    SEE      BAT  Batch file to list documentation to screen
    SCUT     PIC  Symbol Dictionary Image
    REGFORM  TXT  Registration form
    READ     BAT  Batch file to print documentation
    PUSHOVER BAT  Batch file to run Push Program
    MOUSE    BAT  Batch file to run mouse version of Eddie
    MEDDIE   COM  Monochrome version of EDDIE
    PUSH     BAS  Character Set Conversion Utility
    PRINT    SET  Character Set
    PETEDOC2 PIC  Documentation file
    PETEDOC1 PIC  Documentation file
    PETE     SET  Character Set
    ???      QUE  Script file (3 files)
    PETE     EXE  Uses screen images to create symbols
    PART?    TXT  Instructions for printing documentation (4 files)
    
    The Second Disk Contains:
    MANUAL   EXE  Program to print ABC Design documentation
    MAN      SET  which takes about 1 1/2 hours
    MAN      DOC  Documentation for ABC Design
    MAN      QUE  to print
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## EDDIE.BAS

{% raw %}
```bas
1 REM ****************************************
2 REM **                                    **
3 REM **    HIGH RESOLUTION                 **
4 REM **    COLOR GRAPHICS EDITOR           **
5 REM **                                    **
6 REM **    MAY 23, 1983                    **
7 REM **    Revised Slightly Jan. 27, 1985  **
8 REM ****************************************
9 CLEAR ,&H9F00:GOTO 63999
10 FG%=FG(SCR%):BG%=BG(SCR%)
12 DEF SEG:OLD%=SCR%:OWD%=WD%:OFG%=FG%:OBG%=BG%
14 CALL MAIN(LM%,FCHAR%,TF%,RC%,RT%,SC%,ST%,KEYHI%,KEYLO%,IDMOD%,WD%,BG%,FG%,SCR%,MODE%)
16 DEF SEG=SSEG%
18 KY=KEYLO% + 256*KEYHI%
20 IF OLD%<>SCR% THEN SCREEN 0,1,SCR%/(WD%/40)
21 IF OFG%=FG% AND OBG%=BG% GOTO 24
22 FOR I=0 TO 7:FG(I)=FG%:BG(I)=BG%:NEXT
24 LOCATE 25,1,0:PRINT MS$(MODE%);
26 AD = SCR%*2048 + WD%*48
28 IF MODE%=0 GOTO 100:REM NORMAL
30 IF MODE% <= 6 THEN POKE AD+CS(MODE%),18:POKE AD+CS(MODE%)+2,29
32 ON MODE% GOTO 200,200,10,10,10,10,700,875,900,1000,1100,1200,10,1400,1500,1600,1700,1695
34 GOTO 10
100 REM MODE = 0 NORMAL
105 T$="":IF TF%<>0 THEN T$=" t"
110 LOCATE 25,8:PRINT SCR%+1;T$;"  FG=";:COLOR FG(SCR%),BG(SCR%),0:PRINT FG(SCR%)+1;:COLOR 7,0,0:PRINT "  BG=";:COLOR FG(SCR%),BG(SCR%),0:PRINT BG(SCR%)+1;:COLOR 7,0,0:GOTO 10
200 REM MODE = 1,2  INSERT-DELETE
210 IF IDMOD%=82 THEN N=17
220 IF IDMOD%=67 THEN N=29
230 IF IDMOD%=83 THEN N=41
240 POKE AD+N,112:GOTO 10
500 X%=SCREEN(RC%+1,SC%+1,1)
510 FG%=X% MOD 16
520 BG%=(X%\16) AND 7
530 MODE%=0:GOTO 22
700 REM MODE = 7  CHANGE
710 LOCATE 25,32:GOSUB 20000:IF ASC(X$)=27 THEN MODE%=0:GOTO 24
720 IF LEN(X$)<>2 GOTO 780
730 GOSUB 750:IF RT%=3 GOTO 780
740 SC%=RC%:ST%=RT%:GOTO 800
750 X%=ASC(RIGHT$(X$,1)):IF X%>58 AND X%<67 THEN RC%=X%-59:RT%=0:RETURN
760 IF X%>83 AND X%<92 THEN RC%=X%-76:RT%=0:RETURN
770 IF X%>103 AND X%<112 THEN RC%=X%-104:RT%=1:RETURN
775 RT%=3:RETURN
780 ST%=2:GOSUB 1420:SC%=FCHAR%
800 LOCATE 25,1:PRINT MS$(8);
810 LOCATE 25,30:GOSUB 20000:IF ASC(X$)=27 THEN MODE%=0:GOTO 24
820 IF LEN(X$)<>2 GOTO 840
830 GOSUB 750:IF RT%<>3 GOTO 850
840 RT%=2:GOSUB 1420:RC%=FCHAR%
850 LOCATE 25,1:PRINT MS$(20);
860 POKE AD+CS(MODE%),18:POKE AD+CS(MODE%)+2,29
870 GOTO 10
875 WIDTH WD%:PRTFLG%=0:SCREEN 0,1,SCR%\(WD%/40):GOTO 10
900 GOSUB 20000:IF X$=CHR$(27) GOTO 995
905 IF X$="C" OR X$="c" GOTO 980
910 IF X$="L" OR X$="l" GOTO 960
915 IF X$="P" OR X$="p" GOTO 925
917 IF X$="R" OR X$="r" GOTO 500
918 IF X$="D" OR X$="d" GOTO 5000
920 BEEP:GOTO 900
925 LOCATE 25,1:PRINT "New Printer Set -                    ";
930 LOCATE 25,19:GOSUB 32000:IF X%=27 GOTO 995
935 L%=LEN(X$):IF L%<5 GOTO 950
940 IF RIGHT$(X$,4)=".PIC" THEN X$=LEFT$(X$,L%-4)+".SET"
950 PSF$=X$:PRTFLG%=0
955 GOTO 995
960 LOCATE 25,1:PRINT "New Left Margin -                    ";
965 LOCATE 25,19:GOSUB 30000:IF X%=27 GOTO 995
970 IF Z%<1 OR Z%>40 THEN BEEP:GOTO 960
975 LM%=Z%:GOTO 995
980 LOCATE 25,1:PRINT "Cursor Row =";RC%+1;" Column =";SC%+1;"        ";
985 LOCATE 25,1:GOSUB 20000
995 MODE%=0:GOTO 24
1000 REM MODE 10  CREATE SYMBOL TABLE
1010 GOSUB 20000
1020 IF X$="y" OR X$="Y" GOTO 10
1030 MODE%=0:GOTO 24
1100 REM MODE = 11  LOAD/SAVE FILE
1110 GOSUB 20000
1120 IF X$="L" OR X$="l" GOTO 2000
1130 IF X$="S" OR X$="s" GOTO 2100
1140 IF ASC(X$)=27 THEN MODE%=0:GOTO 24
1150 GOTO 1110
1200 REM MODE = 12  END
1210 LOCATE 25,1:GOSUB 20000:IF X$="Y" OR X$="y" THEN DEF SEG:WIDTH 80:SCREEN 0,1,0,0:ON ERROR GOTO 0:SYSTEM
1220 MODE%=0:GOTO 24
1400 REM MODE = 14 FILL CHARACTER
1405 GOSUB 20000:MODE%=5:GOSUB 1420:GOTO 24
1410 GOSUB 20000
1420 FCHAR%=ASC(X$):IF LEN(X$)=2 THEN FCHAR%=ASC(RIGHT$(X$,1))+256
1430 IF FCHAR%<27 THEN RETURN
1440 IF FCHAR%>31 AND FCHAR%<128 THEN RETURN
1450 IF FCHAR%=>272 AND FCHAR%<=281 THEN FCHAR%=FCHAR%-144:RETURN
1460 IF FCHAR%=>286 AND FCHAR%<=294 THEN FCHAR%=FCHAR%-148:RETURN
1465 IF FCHAR%=>300 AND FCHAR%<=306 THEN FCHAR%=FCHAR%-153:RETURN
1470 IF FCHAR%=>375 AND FCHAR%<=388 THEN FCHAR%=FCHAR%-221:RETURN
1480 BEEP:GOTO 1410
1500 REM MODE = 15  DISPLAY ASCII VALUE
1510 LOCATE 25,15:PRINT RIGHT$("000"+RIGHT$(STR$(FCHAR%),LEN(STR$(FCHAR%))-1),3)"  CHANGE TO- ";
1520 LOCATE 25,31:GOSUB 30000:IF X%=27 THEN MODE%=0:GOTO 24
1530 FCHAR%=Z%:GOTO 10
1600 REM MODE = 16  PRINT SCREEN
1601 IF PRTFLG%<>1 THEN PRTFLG%=1:DEF SEG:BLOAD PSF$,&HA000
1602 GOTO 3000
1605 LOCATE 25,1:PRINT MS$(29);:GOSUB 20000
1610 IF X$="N" OR X$="n" THEN PS$=CHR$(27)+"K":PC%=0:GOTO 1620
1612 IF X$="C" OR X$="c" THEN PS$=CHR$(27)+"L":PC%=0:GOTO 1620
1614 IF X$="P" OR X$="p" GOTO 1617
1615 GOTO 1695
1617 PS$=CHR$(27)+"K"
1618 IF PC%=0 THEN PC%=1
1620 IF WD%=40 THEN PS$=PS$+CHR$(64)+CHR$(1)
1622 IF WD%=80 THEN PS$=PS$+CHR$(128)+CHR$(2)
1624 WIDTH "LPT1:",255
1625 OPT%=0:STAT%=0
1626 DEF SEG
1628 FOR J=1 TO 24
1629 ROW%=J-1
1630 IF INKEY$=CHR$(27) GOTO 1692
1631 LPRINT CHR$(27);"3";CHR$(PC%(PC%));
1632 IF PC%=0 GOTO 1634
1633 PC%=PC%+1:IF PC%>5 THEN PC%=1
1634 LPRINT PS$;
1640 FC%=0:NC%=WD%
1650 CALL GP(WD%,SCR%,FC%,NC%,ROW%,OPT%,STAT%)
1660 IF STAT%<>0 THEN GOSUB 12000:GOTO 1692
1670 LPRINT
1680 NEXT
1692 WIDTH "LPT1:",80
1695 MODE%=0:GOTO 24
1700 REM MODE = 17  cEND
1710 GOSUB 20000
1720 GOTO 1695
2000 REM LOAD FILE
2005 GOSUB 2500
2010 LOCATE 25,1:PRINT MS$(21);
2020 LOCATE 25,17:GOSUB 32000:IF X%=27 THEN MODE%=0:GOTO 24
2024 IF RIGHT$(X$,4)=".TXT" GOTO 2200
2025 IF RIGHT$(X$,4)=".txt" GOTO 2200
2026 IF N%>1 GOTO 2400
2030 DEF SEG:BLOAD X$,&HC000:DEF SEG=SSEG%
2040 GOTO 10
2100 REM SAVE FILE
2105 GOSUB 2500
2110 LOCATE 25,1:PRINT MS$(22);
2120 LOCATE 25,17:GOSUB 32000:IF X%=27 GOTO 2140
2125 IF N%>1 GOTO 2300
2130 DEF SEG:BSAVE X$,&HC000,4096*WD%/80
2135 DEF SEG=SSEG%
2140 MODE%=0:GOTO 24
2200 REM TEXT FILE LOAD
2210 OPEN X$ FOR INPUT AS #2
2220 DEF SEG=SSEG%:FIRSTC%=PEEK(&H3FE3)+1
2230 FIRSTR%=PEEK(&H3FE9)+1:DEF SEG
2240 COLOR FG(SCR%),BG(SCR%),0:S%=SCR%/(WD%/40)
2250 SCREEN 0,1,S%,S%:LOCATE 25,1,0:PRINT "SCREEN ";S%*(WD%/40)+1;"                  ";
2255 FOR I=FIRSTR% TO 24
2260 IF EOF(2) GOTO 2290
2265 LINE INPUT #2,A$
2270 LOCATE I,FIRSTC%,0:PRINT A$;
2275 NEXT
2280 FIRSTR%=1:S%=S%+1:IF S%<320/WD% GOTO 2250
2290 CLOSE #2:SCREEN 0,1,SCR%/(WD%/40),SCR%/(WD%/40):COLOR 7,0,0
2295 MODE%=0:GOTO 24
2300 REM BIG FILE SAVE
2310 SAD=SCR%*2048
2320 L%=N%*2048*(WD%/40)-48
2330 DEF SEG=SSEG%:BSAVE X$,SAD,L%
2340 MODE%=0:GOTO 24
2400 REM BIG FILE LOAD
2410 SAD=SCR%*2048
2420 DEF SEG=SSEG%
2430 BLOAD X$,SAD
2440 RC%=0:SC%=0:GOTO 500
2500 REM NO. OF SCREENS SUBROUTINE
2510 LOCATE 25,1,0:PRINT MS$(28);:GOSUB 20000
2520 N%=VAL(X$):IF N%<1 THEN N%=1
2530 IF N%*(WD%/40)+SCR%>8 GOTO 2510
2540 RETURN
3000 LOCATE 25,1:PRINT "First Col.=";SC%+1;
3005 LOCATE 25,15:PRINT ":Enter No.of Cols-      ";:LOCATE 25,34:GOSUB 32000
3010 NX%=VAL(X$):REM TOTAL NUMBER OF COLUMNS
3012 IF NX%<1 OR NX%>320 GOTO 3005
3013 LOCATE 25,1:PRINT "Printer Type- (F)X (M)X (T)315 Color  ";:LOCATE 25,14:GOSUB 20000:IF X$=CHR$(27) GOTO 1695
3014 IF X$="T" OR X$="t" THEN CPF%=1:XS%=3:GOTO 3030
3015 IF X$="F" OR X$="f" THEN CPF%=0:MXF%=0:GOTO 3019
3016 IF X$="M" OR X$="m" THEN CPF%=0:MXF%=1:GOTO 3018
3017 X$="T":IF CPF% GOTO 3014 ELSE IF MXF%=0 GOTO 3019
3018 LOCATE 25,1:PRINT "Col/Inch: (1)7.5  (5)15              ";:GOTO 3020
3019 LOCATE 25,1:PRINT "Col/Inch:(1)7.5 (2)9 (3)10 (4)11 (5)15";
3020 LOCATE 25,9:GOSUB 20000:XS%=VAL(X$):REM X SCALE POINTER
3025 IF XS%<1 OR XS%>5 GOTO 3019
3027 IF MXF% AND (XS%=1 OR XS%=5) GOTO 3030
3028 IF MXF% GOTO 3019
3030 LOCATE 25,1:PRINT "This will print";LEFT$(STR$(NX%/PS(XS%)+0.0002),5);"'' Wide. OK? (Y,N)";
3035 LOCATE 25,32:GOSUB 20000
3037 IF X$=CHR$(27) GOTO 1695
3040 IF X$="Y" GOTO 3045
3042 IF X$<>"y" GOTO 3000
3045 LOCATE 25,1:PRINT "First Row =";RC%+1;
3050 LOCATE 25,15:PRINT ":Enter No.of Rows-      ";:LOCATE 25,34:GOSUB 32000
3055 NY%=VAL(X$):REM TOTAL NUMBER OF ROWS
3057 IF NY%<1 OR NY%>96 GOTO 3050
3058 IF CPF% THEN YS%=10:GOTO 3080
3060 LOCATE 25,1:PRINT "Rows/Inch: (A)8 (B)9 (C)10            ";
3065 LOCATE 25,9:GOSUB 20000
3070 IF X$="A" OR X$="a" THEN YS%=8
3071 IF X$="B" OR X$="b" THEN YS%=9
3072 IF X$="C" OR X$="c" THEN YS%=10
3075 IF YS%<8 OR YS%>10 GOTO 3060
3080 LOCATE 25,1:PRINT "This will print";LEFT$(STR$(NY%/YS%+0.0002),5);"'' Long. OK? (Y,N)";
3085 LOCATE 25,32:GOSUB 20000
3087 IF X$=CHR$(27) GOTO 1695
3090 IF X$="Y" GOTO 3095
3092 IF X$<>"y" GOTO 3045
3095 LOCATE 25,1:PRINT "Ready to go. Doublestrike? (Y,N)      ";
3100 LOCATE 25,34:GOSUB 20000
3105 IF X$=CHR$(27) GOTO 1695
3107 ONE%=1
3108 IF CPF% THEN DSF%=0:GOTO 3111
3110 DSF%=0:IF X$="Y" OR X$="y" THEN DSF%=1
3111 IF NIF%>0 GOTO 4000
3112 IF DSF%=0 GOTO 3120
3113 IF YS%=8 THEN ONE%=2
3115 FOR I=0 TO 6:PC%(I)=PC%(I)-ONE%:NEXT
3120 LOCATE 25,1:PRINT "PRINTING. Press (Esc) to pause or quit.";
3125 WIDTH "LPT1:",255
3127 OPT%=0:STAT%=0:PS$=CHR$(27)+"*"+CHR$(PS%(XS%))
3129 IF XS%=1 THEN PS$=CHR$(27)+"K"
3130 IF XS%=5 THEN PS$=CHR$(27)+"L"
3131 IF PC%=0 THEN PC%=1
3132 IF YS%=9 THEN PC%=0
3133 IF YS%=8 THEN PC%=6
3134 IF CPF% THEN PS$=CHR$(27)+"K":LPRINT CHR$(27);"T12";
3135 FSCR%=SCR%:REM SAVE FIRST SCREEN ACROSS
3137 DEF SEG
3140 ROW%=RC%:LROW%=RC%+NY%-1
3145 REM ************************ ROW LOOP
3150 PSCR%=FSCR%:LCOL%=SC%+NX%-1:NTX%=NX%:FC%=SC%
3151 IF INKEY$=CHR$(27) GOTO 3240
3152 IF DSF%=1 THEN LPRINT CHR$(27);"3";CHR$(ONE%); ELSE IF CPF%=0 THEN LPRINT CHR$(27);"3";CHR$(PC%(PC%));
3153 IF PC%<1 OR PC%>5 GOTO 3155
3154 PC%=PC%+1:IF PC%>5 THEN PC%=1
3155 IF LCOL%<WD% GOTO 3200
3160 NTX%=WD%-FC%:GOSUB 3300
3165 LCOL%=LCOL%-WD%:FC%=0
3170 PSCR%=AC%(PSCR%):IF WD%=80 THEN PSCR%=AC%(PSCR%)
3175 NTX%=LCOL%+1:GOTO 3155
3195 REM ************************ LAST SCREEN
3200 IF CPF% THEN GOSUB 3500:LPRINT:GOTO 3202
3201 GOSUB 3300:LPRINT
3202 IF DSF%=1 THEN DSF%=2:GOTO 3150
3203 IF DSF%=2 THEN DSF%=1
3204 REM ************************ NEXT ROW
3205 ROW%=ROW%+1:IF ROW%>LROW% GOTO 3250
3210 IF ROW%<24 GOTO 3150
3220 FSCR%=DN%(FSCR%)
3230 ROW%=0:LROW%=LROW%-24
3235 GOTO 3150
3240 LOCATE 25,1:PRINT "PRINT PAUSE. Press (C)ont. (Q)uit      ";
3242 LOCATE 25,34:GOSUB 20000:IF X$="Q" OR X$="q" GOTO 3250
3244 LOCATE 25,1:PRINT "PRINTING. Press (Esc) to pause or quit.";
3246 GOTO 3152
3249 REM ************************ DONE
3250 WIDTH "LPT1:",80
3252 IF DSF%=0 GOTO 3260
3255 FOR I=0 TO 6:PC%(I)=PC%(I)+ONE%:NEXT
3260 IF NIF%>0 GOTO 4000
3270 MODE%=0:GOTO 24
3300 N%=NTX%*8:X$=CHR$(N% MOD 256)+CHR$(N%\256)
3310 LPRINT PS$;X$;
3320 CALL GP(WD%,PSCR%,FC%,NTX%,ROW%,OPT%,STAT%)
3330 IF STAT%<>0 THEN RETURN 3240
3333 RETURN
3500 CAD%=PSCR%*2048+ROW%*(WD%*2)+FC+1:LAD%=CAD%+NTX%*2-2:DEF SEG=SSEG%
3510 PAD%=CAD%:CPR%=NCC%(PEEK(PAD%) AND 15)
3515 PAD%=PAD%+2:IF PAD%>LAD% GOTO 3530
3520 IF CPR%=NCC%(PEEK(PAD%) AND 15) GOTO 3515
3530 LPRINT CHR$(20);CHR$(CPR%);
3540 NTX%=(PAD%-CAD%)\2
3550 N%=NTX%*8:X$=STR$(N%+1000):LPRINT PS$;RIGHT$(X$,3);
3555 DEF SEG
3560 CALL GP(WD%,PSCR%,FC%,NTX%,ROW%,OPT%,STAT%)
3570 IF STAT%<>0 THEN RETURN 3240
3575 DEF SEG=SSEG%
3580 FC%=FC%+NTX%:CAD%=PAD%
3590 IF CAD%<=LAD% GOTO 3510
3595 DEF SEG:RETURN
4000 LOCATE 25,1:PRINT "LOADING ";PIF$(NIF%);
4010 LPRINT CHR$(12);
4020 X$=PIF$(NIF%)+".PIC"
4030 DEF SEG=&HB800:BLOAD X$,0:DEF SEG
4040 NIF%=NIF%-1
4050 GOTO 3112
5000 DEM$(0)="Space layout and planning              "
5001 DEM$(1)="Process monitoring and control         "
5002 DEM$(2)="Color graphic data display             "
5003 DEM$(3)="Color technical documentation          "
5004 DEM$(4)="Electronic circuit design              "
5005 DEM$(5)="Printed circuit layout                 "
5006 DEM$(6)="Business form layout                   "
5007 DEM$(7)="Color selection charts                 "
5010 WIDTH 80:WD%=80
5012 SCREEN 0,1,0,0:CLS
5015 DEF SEG=&HB800:BLOAD "DEMO4.PIC",0:DEF SEG
5020 FOR I=0 TO 3
5025 SCREEN 0,1,I,I:LOCATE 25,1,0:PRINT DEM$(I);
5030 GOSUB 5100
5035 IF X$<>"" GOTO 5090
5040 NEXT
5050 SCREEN 0,1,0,0:CLS
5055 DEF SEG=&HB800:BLOAD "DEMO5.PIC",0:DEF SEG
5060 FOR I=0 TO 3
5065 SCREEN 0,1,I,I:LOCATE 25,1,0:PRINT DEM$(I+4);
5070 GOSUB 5100
5075 IF X$<>"" GOTO 5090
5080 NEXT
5085 GOTO 5012
5090 SCREEN 0,1,SCR%\(WD%/40)
5095 MODE%=0:GOTO 24
5100 FOR J=1 TO 2000
5110 X$=INKEY$
5120 IF X$<>"" THEN RETURN
5130 NEXT
5140 RETURN
10000 BEEP:LOCATE 25,1
10010 IF (ERL=2130 OR ERL=2330) AND ERR=70 THEN PRINT MS$(25);:GOSUB 11000:RESUME NEXT
10020 IF (ERL=2130 OR ERL=2330) AND ERR=61 THEN PRINT MS$(24);:GOSUB 11000:RESUME NEXT
10030 IF (ERL=2130 OR ERL=2330) AND (ERR=64 OR ERR=53 OR ERR=52 OR ERR=67) THEN PRINT MS$(26);:GOSUB 11000:LOCATE 25,1:PRINT MS$(11);:RESUME 2110
10040 IF (ERL=2130 OR ERL=2330) AND (ERR=57 OR ERR=71 OR ERR=72) THEN PRINT MS$(23);:GOSUB 11000:RESUME NEXT
10050 IF (ERL=2030 OR ERL=2430) AND (ERR=64 OR ERR=53 OR ERR=52 OR ERR=67) THEN PRINT MS$(26);:GOSUB 11000:LOCATE 25,1:PRINT MS$(11);:RESUME 2010
10060 IF (ERL=2030 OR ERL=2430) AND (ERR=57 OR ERR=71 OR ERR=72) THEN PRINT MS$(27);:GOSUB 11000:RESUME NEXT
10065 IF ERL>3130 AND ERL<4050 THEN NIF%=0:PRINT MS$(30);:GOSUB 11000:RESUME 3250
10067 IF ERL=42007 THEN RESUME NEXT
10068 IF ERL=1601 THEN PRINT MS$(31);:GOSUB 11000:RESUME 3270
10069 IF ERL=40003 THEN PRINT MS$(31);:GOSUB 11000:PRTFLG%=0:PSF$="PRINT.SET":RESUME 40005
10070 ON ERROR GOTO 0
10080 STOP
11000 GOSUB 20000:IF ASC(X$)<>13 GOTO 11000
11010 RETURN
12000 LOCATE 25,1:PRINT STAT%;
12010 LOCATE 25,10:GOSUB 20000
12020 RETURN
20000 X$="":WHILE X$="":X$=INKEY$:WEND:RETURN
30000 REM ENTER COLOR
30010 X$="":PRINT "_";
30020 GOSUB 32055:IF X%=13 OR X%=27 GOTO 30040:ELSE IF LEN(X$)=0 AND (X%=8 OR (LEN(Z$)=2 AND ASC(RIGHT$(Z$,1))=75)) GOTO 30020:ELSE IF X%=8 OR (LEN(Z$)=2 AND ASC(RIGHT$(Z$,1))=75) GOTO 30050:ELSE IF X%<48 OR X%>57 GOTO 30020:ELSE IF LEN(X$)=3 GOTO 30020
30030 PRINT CHR$(29)CHR$(X%)"_";:X$=X$+CHR$(X%):GOTO 30020
30040 Z%=VAL(X$):PRINT CHR$(29);:RETURN
30050 PRINT CHR$(29)" "CHR$(29)CHR$(29)"_";:X$=MID$(X$,1,LEN(X$)-1):GOTO 30020
32000 REM FILE NAME INPUT
32035 X$="":PRINT "_";
32040 GOSUB 32055:IF X%=13 OR X%=27 GOTO 32060:ELSE IF LEN(X$)=0 AND X%=8 GOTO 32040:ELSE IF X%=8 GOTO 32070:ELSE IF LEN(X$)=12 GOTO 32040:ELSE IF X%<32 GOTO 32040
32050 PRINT CHR$(29)CHR$(X%)"_";:X$=X$+CHR$(X%):GOTO 32040
32055 Z$="":WHILE Z$="":Z$=INKEY$:WEND:X%=ASC(Z$):RETURN
32060 PRINT CHR$(29);:IF INSTR(X$,".") = 0 THEN X$=X$+".PIC"
32065 RETURN
32070 PRINT CHR$(29)" "CHR$(29)CHR$(29)"_";:X$=MID$(X$,1,LEN(X$)-1):GOTO 32040
39000 REM RE-ENABLE MOUSESYS ON COM1
39010 DEF SEG=0
39020 FOR I=0 TO 3:J=PEEK(&H1C0+I):POKE &H30+I,J:NEXT
39030 J=INP(&H21):OUT &H21,(J AND &HEF)
39040 OUT &H3F9,1
39050 DEF SEG:RETURN
40000 FOR I=1 TO 10:KEY I,"":NEXT:KEY OFF
40001 DEF SEG:MSF%=1:IF MSF% THEN GOSUB 39000
40002 GP=&H9F00:BLOAD "GP.BIN",&H9F00
40003 BLOAD "PRINT.SET",&HA000:PRTFLG%=1:PSF$="PRINT.SET"
40005 BLOAD "GR.BIN",&HE000
40006 REM FOR I=&HA000 TO &HA7FF:X%=PEEK(I)
40007 REM  POKE I,(X% AND 1)*128+(X% AND 2)*32+(X% AND 4)*8+(X% AND 8)*2+(X% AND 16)\2+(X% AND 32)\8+(X% AND 64)\32+(X%\128)
40008 REM  NEXT
40009 REM  BSAVE "FARG.SET",&HA000,&H800
40010 WIDTH 40:WIDTH 80:WD%=80:SCR%=0:SCREEN 0,1,0,0
40020 DIM MS$(31),PK(10),CS(8),PC%(6),PS(5),PS%(5),AC%(8),DN%(8):ON ERROR GOTO 10000
40022 DIM NCC%(15)
40023 DATA 0,3,4,5,2,1,6,0,0,5,4,5,2,1,6,0
40024 FOR I=0 TO 15:READ NCC%(I):NEXT
40025 PC%(0)=24:PC%(1)=22:PC%(2)=21:PC%(3)=22:PC%(4)=21:PC%(5)=22:PC%(6)=27
40027 AC%(0)=1:AC%(1)=4:AC%(2)=3:AC%(3)=6:AC%(4)=5:AC%(5)=2:AC%(6)=7:AC%(7)=0
40028 DN%(0)=2:DN%(1)=3:DN%(2)=4:DN%(3)=5:DN%(4)=6:DN%(5)=7:DN%(6)=1:DN%(7)=0
40030 FG%=11:BG%=1:FOR I=0 TO 7:FG(I)=FG%:BG(I)=BG%:NEXT
40040 MAIN=&HE300:INIT=&HE303
40050 CALL INIT(SEG%)
40060 SSEG%=&HB800:DEF SEG=SSEG%
40070 IF PEEK(0)=32 AND PEEK(1)=7 GOTO 40090
40080 SSEG%=&HB000
40085 DEF SEG:POKE &H9F29,&HB0
40090 LM%=4
40095 SCREEN 0,1,0,0
40097 DEF SEG=0:POKE &H24,&H87:POKE &H25,&HE9:POKE &H26,0:POKE &H27,&HF0
40098 DEF SEG
40100 COLOR 11,1,0:CLS:COLOR 7,0,0:LOCATE 25,1,0
41000 MS$(0)="SCREEN                                 "
41010 MS$(1)="INSERT (R)ow (C)ol (S)pace (  )        "
41020 MS$(2)="DELETE (R)ow (C)ol (S)ingle (  )       "
41030 MS$(3)="MOVE (M)ark (  )                       "
41040 MS$(4)="PAINT (R)ow (C)ol (M)ark (A)ll (  )    "
41050 MS$(5)="FILL (R)ow (C)ol (M)ark (A)ll (  )     "
41060 MS$(6)="LINE (  )                              "
41070 MS$(7)="CHANGE (color or symbol) From-         "
41080 MS$(8)="CHANGE (color or symbol) To-           "
41090 MS$(9)="(C)ursor (L)eft margin (P)rint (R)ead  "
41100 MS$(10)="CREATE SYMBOL TABLE REALLY? (Y/N)      "
41110 MS$(11)="(L)oad (S)ave                          "
41120 MS$(12)="END REALLY? (Y/N)                      "
41130 MS$(13)="MARK VARIABLE FIELD, (Esc) when done.  "
41140 MS$(14)="ENTER FILL CHARACTER-                  "
41150 MS$(15)="ASCII VALUE-                           "
41160 MS$(23)="NOT SAVED, I/O ERROR, HIT RETURN       "
41170 MS$(24)="NOT SAVED, DISK FULL, HIT RETURN       "
41180 MS$(25)="NOT SAVED, WRITE PROTECTED, HIT RETURN "
41190 MS$(26)="BAD NAME, HIT RETURN AND TRY AGAIN     "
41200 MS$(27)="NOT LOADED, I/O ERROR, HIT RETURN      "
41210 MS$(21)="LOAD FILE NAME-                        "
41220 MS$(22)="SAVE FILE NAME-                        "
41230 MS$(16)="PRINT                                  "
41240 MS$(17)="                                       "
41250 MS$(20)="CHANGE (R)ow (C)ol (M)ark (A)ll (  )   "
41260 MS$(28)="HOW MANY SCREENS? (1-4)80s (1-8)40s    "
41270 MS$(29)="PRINT (C)ompressed (N)ormal (P)cb (Esc)"
41280 MS$(30)="PRINTER NOT READY,  HIT RETURN         "
41290 MS$(31)="PRINT SET NOT FOUND, HIT RETURN        "
41500 NIF%=0:REM DIM PIF$(NIF%) for multiple print file name array
42000 CS(1)=56:CS(2)=58:CS(3)=26:CS(4)=64:CS(5)=62:CS(6)=12:CS(7)=66
42002 PS(1)=7.5:PS(2)=9:PS(3)=10:PS(4)=11.25:PS(5)=15
42003 PS%(1)=0:PS%(2)=5:PS%(3)=4:PS%(4)=6:PS%(5)=1
42005 MXF%=0:REM Flag for MX error checking
42010 MODE%=0:GOTO 24
63999 GOTO 40000
```
{% endraw %}

## FEED.TXT

{% raw %}
```

```
{% endraw %}

## FILES.TXT

{% raw %}
```
San Francisco PC Users Group:     S O F T W A R E   L I B R A R Y
=================================================================
Volume 171: ABC DESIGN  (Character graphics editor)  1 of 2

See Volume 172 for README.171

```
{% endraw %}

## FIXPIC.BAS

{% raw %}
```bas
10 KEY OFF:CLS
20 PRINT "THIS PROGRAM BLANKS THE 25TH LINE OF AN EDDIE IMAGE"
30 DEF SEG=&HB800
40 IF PEEK(0)<>84 OR PEEK(1)<>7 THEN DEF SEG=&HB000
50 PRINT:LINE INPUT "Enter filename [.PIC is optional] - ",FI$
60 IF INSTR(FI$,".")=0 THEN FI$=FI$+".PIC"
70 BLOAD FI$,0
80 LOCATE 25,1:PRINT SPACE$(79);
90 BSAVE FI$,0,4096
100 DEF SEG
110 CLS:SYSTEM
```
{% endraw %}

## INSERT.TXT

{% raw %}
```
1.  BOOT D.O.S. [Version 2.0 or later]

2.  PUT DISK #1 IN DRIVE A

3.  If the default drive is NOT drive A  [as A>]

    then enter  A:             [and press Enter]

4.  then enter  READ ME  [if printer on & ready]

     or  enter  SEE ME   [if printer not avail.]

              [press Enter after either choice]

Use the original disks when making copies for
other users.  You can get another hard-copy of
these instructions by entering READ INSERT 

You can get a copy of the warranty by entering
READ WARRANTY or SEE WARRANTY
You can get a copy of the license by entering
READ LICENSE or SEE LICENSE
```
{% endraw %}

## LICENSE.TXT

{% raw %}
```
ABC Design Software License

You have a license to use this software on any number of machines
and to make any number of copies of the original disks for as
many other users as you want.

The only things you can't do is sell the package for more than
$5.00 over your cost of disks for the copies or remove any part
of the disk contents before making copies for others.





```
{% endraw %}

## ME.TXT

{% raw %}
```
Welcome to a not so integrated or easy to use ABC Design.  Those who
manage to learn how to use all the features will really appreciate the
improvements yet to come in future releases of various parts of this
system.  You have the first two of three disks of programs and files.
You can get the third disk without being registered if you return 1 of
your disks to us within 30 days.  After that, only registered users get
free updates.

Pre-registration support:  For the next month, without being a registered
user, you can call us on the phone with questions [(612) 379-1354], after
that you must be registered or send your questions or comments by mail.

Registered user support:  Upon submission of a completed registration form
along with the $5.00 per year subscription fee, you can call us on the
phone with questions, you will be notified of updates and related software
releases, and you can get free updates by sending a disk to us with a
request for specific updates.

We hope that the whole package will continue to evolve into a conherent and
integrated product.

To print a copy of the registration form enter READ REGFORM or to display
a copy enter SEE REGFORM and press enter.
To proceed enter READ PART B or SEE PART B and press enter.
```
{% endraw %}

## PARTB.TXT

{% raw %}
```
PART B.  The program documentation can be obtained in one of 3 ways:

1.  Before making work disks. If you don't want to use up two blank disks
    yet, go to PART D.  After each step, you may need to put a system
    disk back in drive A to reload COMMAND.COM.

2.  After making work disks. First go to PART C and make 2 work disks,
    then go to PART D and print the documentation.

3.  By mail.  If you can't print EPSON compatible graphics on your system
    but still may want to use the screen image editing features, you can
    request one (of a limited number) of pre-printed copies of the manual.

To go to PART C or PART D:

Enter   READ PART C      [print work disk copy instructions]
  or    SEE PART C     [display work disk copy instructions]
  or    READ PART D       [print documentation instructions]
  or    SEE PART D      [display documentation instructions]

        [and press Enter]


```
{% endraw %}

## PARTC.TXT

{% raw %}
```
PART C.  Create EDDIE and PETE work disks.

1.  You first need to format two blank disks with the system and Basic on
    them OR make a subdirectory [MD ABC] on a hard disk and copy BASIC.COM
    and COMMAND.COM into it, change to the ABC directory, enter A:GET EDDIE
    and A:GET PETE [and press enter after each].

    To prepare two floppy disks, put your DOS System disk in drive A,
    the first blank disk in drive B, then enter FORMAT B:/S [and press
    enter].  Press a key when prompted and wait.  When complete respond
    to `format another?' with Y and put the second blank disk in B and wait.
    When complete type N.
    Then enter B: [and press enter] and COPY A:BASIC.COM [and press enter].
    Repeat the copy to put Basic on the first disk as well.

2.  Label one disk EDDIE WORK DISK and the other disk PETE WORK DISK.

3.  Put EDDIE WORK DISK in drive B and DISK 1 in drive A and enter:
                        A:GET EDDIE [and press enter]
    Put PETE WORK DISK in drive B and leave DISK 1 in A and enter:
                        A:GET PETE [and press enter]
    Enter A: [and press enter].
If you have not yet printed the documentation go to PART D.
                        [READ PART D or SEE PART D]
```
{% endraw %}

## PARTD.TXT

{% raw %}
```
PART D.  Printing documentation.

There are three sets of documents that you have to print.  The first one
only requires that you have in your printer enough paper to print 3 pages
so we will use it for a test of your printer compatibility.  If one of 
these steps doesn't work on your printer then there is no need to proceed
to the larger blocks of documentation.

1.  Put your PETE WORK DISK or DISK 1 master in drive A.  If you have an
    EPSON FX 80 or FX 100 or a printer with FX compatible graphics codes,
    enter PETE FXREF [and press enter and another keypress when prompted].

    Or, if you have an IBM Graphics printer or MX 80 or MX 100 with graftrax
    or a printer with MX compatible graphics codes,
    enter PETE MXREF [and press enter and another keypress when prompted].

2.  If either of the above steps worked, then enter PETE ABCREF [and press
    enter and another keypress when prompted].  This one takes 7 pages.

3.  Now put DISK 2 in drive A, make absolutely sure that you have at least
    50 sheets of printer paper and about an hour to kill, then
    enter MANUAL [and press return].

```
{% endraw %}

## PUSH.BAS

{% raw %}
```bas
10 REM Sideawys character generator table is located at &HF000
20 REM     and is &H800 bytes long (2K)
30 CLEAR ,&HF000:SS=&HF808
40 PRINT:PRINT "ABC Design Character Set Conversion Utility"
50 PRINT "8 x 8 Display format to 8 x 8 Printer format"
60 PRINT:PRINT
70 INPUT "Enter 8 x 8 Display Set file name [.SET is optional] :",FI$
80 INPUT "Enter 8 x 8 Printer Set file name [.SET is optional] :",FO$
90 IF INSTR(FI$,".")=0 THEN FI$=FI$+".SET"
100 IF INSTR(FO$,".")=0 THEN FO$=FO$+".SET"
110 IF FI$=FO$ THEN FO$="E"+FO$
120 BLOAD "SS.BIN",&HF800
130 IF PEEK(&HF80B)<>&HF4 THEN STOP
140 POKE &HF80B,&HB8
150 REM PRINT "(U)pper or (L)ower set- ":A$="":WHILE A$="":A$=INKEY$:WEND
160 A$="L"
170 IF A$="U" OR A$="u" THEN POKE &HF80A,&H80:GOTO 200
180 IF A$="L" OR A$="l" THEN POKE &HF80A,0:GOTO 200
190 GOTO 150
200 DEF SEG=&HB800:BLOAD FI$,&H0:DEF SEG
210 CALL SS(X):REM X IS A DUMMY VARIABLE
220 BSAVE FO$,&HF000,&H800
230 CLS
240 SYSTEM
```
{% endraw %}

## REGFORM.TXT

{% raw %}
```
Mailing Address                                 Hardware Configuration

Name    __________________________________      Computer_________________

Address __________________________________      Display Bd.______________

Address __________________________________      Monitor__________________

City    _________________ St ___ Zip _____      Printer(s)_______________

                                                Kbytes RAM_______________
The fee for registration is $5.00 per year
(Jan. 1 to Dec. 31) and provides telephone      Disk Drives______________
support, update announcements and free
program updates upon receipt of a blank disk.
                                                Optional Information
If you have a receipt for prepayment of the
$5.00 be sure to include it.  Otherwise we      Home phone_______________
can dig up the record of your order. 
                                                Office phone_____________
Mail to:

Automatic Micro Systems, Inc.  1089 25th Ave. SE.  Minneapolis, MN 55414
```
{% endraw %}

## WARRANTY.TXT

{% raw %}
```
ABC Design Software Warranty

This software package is warranted only against defects in the media
or recording integrity for a period of three months from your receipt.

The programs are provided `as is' without warranty of any kind, either
expressed or implied, but not limited to the implied warranties of
merchantability and fitness for a particular purpose.  The entire risk
as to the quality and performance of the programs is with you.

Some states do not allow the exclusion of implied warranties, so the 
above exclusion may not apply to you.

Some states do not allow the limitation or exclusion of liability for
incidental or consequential damages, so the above limitation may not
apply to you.

This warranty gives you specific legal rights and you may also have other
rights which vary from state to state.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0336

     Volume in drive A has no label
     Directory of A:\

    ABCREF   QUE       256   1-28-85   8:11a
    ALPHA1   PIC      4104   3-02-84   1:29p
    ALPHA2   PIC      4104   4-20-84   2:25p
    ALPHA3   PIC      4104   5-01-84  12:08p
    ASCREF1  PIC     16344   1-28-85   6:30a
    ASCREF2  PIC     16344   1-28-85   6:31a
    ASKDICK  PIC      8152   1-27-85   4:55p
    BW       PIC      4224   3-19-83   5:55p
    CHARDOC1 PIC     12248   1-28-85   6:01a
    CHARDOC2 PIC     12248   1-28-85   6:05a
    CHARDOC3 PIC     12248   1-28-85   6:10a
    CHARDOC4 PIC     12248   1-28-85   6:14a
    CHARDOC5 PIC     12248   1-28-85   6:19a
    COLOR    PIC      4104   5-09-83  11:50a
    DBLE     PIC      2176   2-08-83   9:12a
    DCUT     PIC      2056   1-27-85   5:06p
    DEFAULT  PIC      2056   4-14-83   4:19p
    E2X2     SET      2056   2-29-84   4:58p
    EBLANK   SET      2056   1-04-84   7:45p
    EBMINI   SET      2056   4-30-84  10:21p
    EBOLD    SET      2056   7-24-84   1:52a
    EDDIE    BAS     14268   1-27-85   5:16p
    EDDIE    BAT        11   1-27-85   3:58p
    EFAT     SET      2056   4-20-84   3:13p
    EITALIC  SET      2056   7-24-84   1:52a
    ELSIDE   SET      2056   4-19-84   4:11p
    EMIBM1   SET      2056   4-19-84   4:15p
    EMIBM2   SET      2056   4-19-84   4:13p
    EMINI    SET      2056   7-09-84   1:51p
    EMIT2    SET      2056   9-22-84   3:43a
    ENORMAL  SET      2056   5-02-84   8:44p
    EP       BAT        16   1-26-85  10:10p
    EPRINT   SET      2056   4-19-84   4:09p
    ERBOLD   SET      2056   4-20-84   3:13p
    ERFAT    SET      2056  12-18-84   3:20p
    ERSIDE   SET      2056   4-19-84   4:11p
    ESUPERS  SET      2056   4-19-84   4:12p
    FEED     TXT         2   1-27-85   8:26p
    FILES    TXT       230   3-26-85   2:35p
    FIXPIC   BAS       284   1-26-85  10:04p
    FXREF    QUE       128   1-28-85   8:11a
    GET      BAT         4   1-27-85  10:06p
    GETEDDIE BAT       384   1-29-85   1:09p
    GETPETE  BAT       256   1-29-85   1:10p
    GP       BIN       384   3-19-83   1:03p
    GR       BIN      5760   4-25-83   1:01p
    HELP     PIC      4104   1-27-85   4:59p
    INSERT   TXT       640   1-29-85   1:37p
    LICENSE  TXT       512   1-29-85   1:17p
    ME       TXT      1280   1-28-85   4:44a
    MEDDIE   COM      1978   1-27-85   3:30p
    MOUSE    BAT        24   1-27-85   3:58p
    MXREF    QUE       128   1-28-85   8:10a
    PARTB    TXT      1024   1-27-85   9:46p
    PARTC    TXT      1280   1-27-85  10:11p
    PARTD    TXT      1152   1-28-85   4:45a
    PETE     EXE     34176   1-28-85  10:20p
    PETE     SET     32768   1-28-85   8:17a
    PETEDOC1 PIC     12248   1-29-85   1:44p
    PETEDOC2 PIC     12248   1-28-85   8:08a
    PRINT    SET      2056   4-19-84   4:15p
    PUSH     BAS       796   1-26-85   9:13p
    PUSHOVER BAT        10   1-26-85   9:24p
    READ     BAT        40   1-27-85   8:18p
    REGFORM  TXT      1152   1-27-85  10:29p
    SCUT     PIC      2056   1-27-85   5:06p
    SEE      BAT        13   1-27-85   8:53p
    SETREF   PIC     16344   1-28-85   6:42a
    SS       BIN       384  12-19-82  12:17p
    WARRANTY TXT       896   1-29-85   1:29p
           70 file(s)     313252 bytes
                               0 bytes free
