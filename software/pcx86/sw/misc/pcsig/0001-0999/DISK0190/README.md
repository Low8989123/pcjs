---
layout: page
title: "PC-SIG Diskette Library (Disk #190)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0190/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0190"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "TEXT AND SCREEN"

    Most of the programs on this disk are in BASIC and must be run under
    the Interpretive BASIC provided on PC's and most clones.  The central
    program on the disc is FULLSCREEN which is a fullscreen editor for use
    with BASIC instead of the cranky line editor provided with PC BASIC.
    It is simple to use, driven by the function key menu at the bottom of
    the screen just as in standard BASIC.  The function key menu has
    several levels which provide most all the functions offered by most
    text editors.  The other programs provide a variety of functions, such
    as form building, memo building, string search, file converions,
    directory changes and the like.
    
    System Requirements: BASIC
    
    How to Start: Consult the RV-EDIT.DOC and INFO.DOC (FULLSCREEN) files
    for instructions; the others have onscreen help.  To run a BASIC
    program, type BASICA <filename> and hit <ENTER>.  Please note that you
    must either put a copy of BASICA on this disk, or have BASICA on your
    current DOS path.  To run programs suffixed .EXE, just type its name,
    i.e., for X.EXE, type X and hit <ENTER>.
    
    File Descriptions:
    
    PC-FORM  EXE  PC-FILE form generator Version 1.1  (William Bailey)
    MEMO     BAS  Quick memo writer  (John Harrington)
    FIX-TEST BAS  Inserts carriage returns & line feeds
    CUSTOM   BAS  Custom characters by Gary Antrim
    RV-EDIT  BAS  Full screen editor Version 1.2  (Bob Vollmer)
    TXTSCAN  BAS  Searches ASCII file for character string
    RV-EDIT  DOC  Documentation
    -------- ---  FULLSCRN
    VUE      BAS  Nifty look into text files Version 1.0  (Buzz Hamilton)
    FULLSCRN BAS  Full screen data entry
    PGMCVRT  BAS  Part of FULLSCRN.BAS
    XXXX     DAT  Part of FULLSCRN.BAS
    FRM001   DAT  Part of FULLSCRN.BAS
    FULLSCRN BSC  Part of FULLSCRN.BAS
    FULLSCRN BSN  Part of FULLSCRN.BAS
    FUL001   DAT  Part of FULLSCRN.BAS
    INFO     DOC  Part of FULLSCRN.BAS - Documentation
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #190, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  CUSTOM  .BAS         CRC = BA 23

--> FILE:  FIX-TEST.BAS         CRC = 74 A1

--> FILE:  FRM001  .DAT         CRC = B0 A2

--> FILE:  FUL001  .DAT         CRC = F6 B3

--> FILE:  FULLSCRN.BAS         CRC = 6D 89

--> FILE:  FULLSCRN.BSC         CRC = 5F 6C

--> FILE:  FULLSCRN.BSN         CRC = EA D2

--> FILE:  INFO    .DOC         CRC = D4 97

--> FILE:  MEMO    .BAS         CRC = D9 71

--> FILE:  PC-FORM .EXE         CRC = 86 AF

--> FILE:  PGMCVRT .BAS         CRC = 1B 6E

--> FILE:  RV-EDIT .BAS         CRC = F6 E3

--> FILE:  RV-EDIT .DOC         CRC = 93 2D

--> FILE:  TXTSCAN .BAS         CRC = 02 4A

--> FILE:  VUE     .BAS         CRC = 15 C0

--> FILE:  XXXX    .DAT         CRC = 00 00

--> FILE:  XXX     .            CRC = 38 5E

 ---------------------> SUM OF CRCS = B8 7D

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## CUSTOM.BAS

{% raw %}
```bas
10 '*******************************
12 '
14 '           CUSTOM
15 '
16 'Custom Characters and Numbers
17 '
18 '  Programmed by Gary Antrim
19 '
20 '   (C) COPYRIGHT 1982  by
21 '     Catalina's Computer
22 '
23 '*******************************
24 '
25 '
40 DIM STUFF%(42,17)
50 CLS
60 SCREEN 1
70 KEY OFF
80 COLOR 1
90 GOSUB 220
100 WORD$="A<>=@ABCDEFGHI"
110 XO=3:YO=7
120 GOSUB 330
130 WORD$="JKLMNO;PQRSTUVWXYZ:"
140 XO=3:YO=15
150 GOSUB 330
160 WORD$="1234567890?"
170 XO=3:YO=32
180 GOSUB 330
190 LOCATE 22,1:PRINT "That's all"
200 LOCATE 22,12:END
220 RESTORE
230 FOR T=0 TO 42
240  P=0
250  READ N%
260  STUFF%(T,P)=N%
270  IF N%=97 GOTO 300
280  P=P+1
290  GOTO 250
300 NEXT T
310 RETURN
330 FOR M=1 TO LEN(WORD$)
340  T=ASC(MID$(WORD$,M,1))-48
350  IF M>1 THEN XO=XO+7
360  P=0
370  IF STUFF%(T,P)<95 THEN 420
380  IF STUFF%(T,P)=99 THEN 480
390  IF STUFF%(T,P)=98 THEN 530
400 NEXT M
410 RETURN
420 P=P+2
430 X2=XO+STUFF%(T,P-2)
440 Y2=YO+STUFF%(T,P-1)
450 GOSUB 580
460 X1=X2:Y1=Y2
470 GOTO 370
480 P=P+3
490 X1=XO+STUFF%(T,P-2)
500 Y1=YO+STUFF%(T,P-1)
510 PSET (X1,Y1)
520 GOTO 370
530 P=P+1
540 C=STUFF%(T,P)
550 COLOR C
552 P=P+1
560 GOTO 370
580 IF X2>X1 THEN A=1
590 IF X2<X1 THEN A=-1
600 IF X2=X1 THEN 650
610 FOR X=X1 TO X2 STEP A
620   Y=INT((((Y2-Y1)/(X2-X1))*(X-X1))+0.5)+Y1
630   PSET(X,Y)
640 NEXT X
650 IF Y2>Y1 THEN B=1
660 IF Y2<Y1 THEN B=-1
670 IF Y2=Y1 THEN 720
680 FOR Y=Y1 TO Y2 STEP B
690   X=INT(((Y-Y1)*(X2-X1)/(Y2-Y1))+0.5)+X1
700   PSET(X,Y)
710 NEXT Y
720 RETURN
730 '
732 ' 1 to 95 are good plotting points
734 '   99 = Start of new segment
736 '   98 = Start a new color
740 '   97 = End of character
800 DATA 99,1,5,1,1,5,1,5,5,1,5,5,1,97:'         zero
810 DATA 99,4,5,2,5,99,3,5,3,1,2,1,97:'          one
820 DATA 99,5,5,1,5,1,3,5,3,5,1,1,1,97:'         two
830 DATA 99,1,5,5,5,5,1,1,1,99,5,3,3,3,97:'      three
840 DATA 99,4,5,4,1,99,5,4,1,4,1,1,97:'          four
850 DATA 99,5,1,1,1,1,3,4,3,5,4,4,5,1,5,97:'     five
860 DATA 99,1,1,1,5,5,5,5,3,1,3,97:'             six
870 DATA 99,1,5,5,1,1,1,97:'                     seven
880 DATA 99,4,5,2,5,2,1,4,1,4,5,99,2,3,4,3,97:'  eight
890 DATA 99,5,5,5,1,1,1,1,3,5,3,97:'             nine
900 DATA 99,3,2,99,3,4,97:'                      colan
910 DATA 97:'                                    semicolan is space
920 DATA 99,3,1,2,2,2,4,3,5,97:'                 < is (
930 DATA 99,3,5,97:'                             = is period
940 DATA 99,3,1,4,2,4,4,3,5,97:'                 > is )
950 DATA 99,1,2,1,1,5,1,5,3,3,3,3,5,97:'         question mark
960 DATA 99,3,4,2,5,97:'                         @ is comma
970 DATA 99,1,5,1,1,5,1,5,5,99,1,3,5,3,97:'      A
980 DATA 99,1,5,1,1,5,1,5,5,1,5,99,1,3,5,3,97:'  B
990 DATA 99,5,5,1,5,1,1,5,1,97:'                 C
1000 DATA 99,4,5,1,5,1,1,4,1,5,2,5,4,97:'        D
1010 DATA 99,5,5,1,5,1,1,5,1,99,1,3,5,3,97:'     E
1020 DATA 99,1,5,1,1,5,1,99,1,3,3,3,97:'         F
1030 DATA 99,4,3,5,3,5,5,1,5,1,1,5,1,97:'        G
1040 DATA 99,1,5,1,1,99,1,3,5,3,99,5,1,5,5,97:'  H
1050 DATA 99,2,1,4,1,99,3,1,3,5,99,2,5,4,5,97:'  I
1060 DATA 99,1,1,5,1,99,3,1,3,5,1,5,1,4,97:'     J
1070 DATA 99,1,5,1,1,99,1,3,3,3,5,1,99,3,3,5,5,97:'K
1080 DATA 99,5,5,1,5,1,1,97:'                    L
1090 DATA 99,1,5,1,1,3,3,5,1,5,5,97:'            M
1100 DATA 99,1,5,1,1,5,5,5,1,97:'                N
1110 DATA 99,5,5,1,5,1,1,5,1,5,5,97:'            O
1120 DATA 99,1,5,1,1,5,1,5,3,1,3,97:'            P
1130 DATA 99,5,5,1,5,1,1,5,1,5,5,3,3,97:'        Q
1140 DATA 99,1,5,1,1,5,1,5,3,1,3,99,3,3,5,5,97:' R
1150 DATA 99,1,5,5,5,5,3,1,3,1,1,5,1,97:'        S
1160 DATA 99,1,1,5,1,99,3,1,3,5,97:'             T
1170 DATA 99,5,1,5,5,1,5,1,1,97:'                U
1180 DATA 99,5,1,5,3,3,5,1,3,1,1,97:'            V
1190 DATA 99,5,1,5,5,3,3,1,5,1,1,97:'            W
1200 DATA 99,1,5,5,1,99,1,1,5,5,97:'             X
1210 DATA 99,3,5,3,3,1,1,99,3,3,5,1,97:'         Y
1220 DATA 99,5,5,1,5,5,1,1,1,97:'                Z
1230 DATA 99,97
1240 END
```
{% endraw %}

## FIX-TEST.BAS

{% raw %}
```bas
10 KEY OFF:CLS
20 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
30 PRINT"░┌───────────────────────────────────┐░"
40 PRINT"░│                                   │░"
50 PRINT"░│            7020-A.BAS             │░"
60 PRINT"░│             FIX-TEXT              │░"
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
1000 ' FIX-TEXT * JJ - 83 Jan 1
1005 '
1010 ' Translate from FIXED to TEXT format
1020 '
1021 ' Given a source file which has fixed length records which do not
1022 '   end with the  "Carriage Return" plus "Line Feed" characters.
1023 ' The program removes trailing blanks from each record.  It then
1024 '   adds a  "Carriage Return" and a "Line Feed"  to each
1025 '   record and writes it to a buffer, then to the the target file.
1026 ' The target file is given the same name as the source file
1027 '   with the Extension of  ".TXT" .  The target file can
1028 '   then be edited with EDLIN or the IBM Personal Editor.
1029 '
1030 ' ** Compliments of UTAH BLUE CHIPS * IBM PC Users Group **
1040 '
1050 CR$=CHR$(13) : LF$=CHR$(10) ' carriage return and line feed chars
1060 CLS : T=1 : TB$=""          ' text file record number and buffer
1070 '
1080 LOCATE 3,1 : PRINT "-  -  -  FIXED to TEXT file transfer  -  -  -"
1090 '
1100 LOCATE  6,1 : INPUT "Drive of FIXED  file   [ b:   ] : ";WD$
1110 LOCATE  7.1 : INPUT "Filename               [ Name ] : ";WN$
1115 LOCATE  8.1 : INPUT "Extension              [ Ext  ] : ";WX$
1120 LOCATE 10.1 : INPUT "Fixed record length    [  80  ] : ";WL
1130 LOCATE 11.1 : INPUT "Total bytes in file    [ 5632 ] : ";WB
1140 LOCATE 13,1 : INPUT "Drive of TEXT file     [ b:   ] : ";TD$
1150 '
1160 IF LEN(WD$)=1 THEN WD$=WD$+":"   ' be sure of correct
1170 IF LEN(TD$)=1 THEN TD$=TD$+":"   ' drive specifications
1180 '
1190 OPEN WD$+WN$+"."+WX$ AS 1 LEN= WL : FIELD 1, WL AS W$  ' source file
1200 OPEN TD$+WN$+".TXT" AS 2 LEN=128 : FIELD 2,128 AS T$   ' target file
1210 '
1220 WR=1+INT(WB/WL)  ' number of WL-byte records in source file
1230 '
1240 CLS
1250 FOR W=1 TO WR : GET #1,W    ' read through file
1260 PRINT LEFT$(W$,75); : PRINT USING "####";W  '  print line & number
1270 '
1280 FOR I=WL TO 1 STEP -1 : TEXT=I     ' TEXT = number of bytes in this line of
1290   IF MID$(W$,I,1)<>" " GOTO 1320    '        text excluding trailing blanks
1300 NEXT I : TEXT=0
1310 '
1320 TB$=TB$+LEFT$(W$,TEXT)+CR$+LF$       ' append line to buffer
1330 LTB=LEN(TB$) : IF LTB<128 GOTO 1370   ' test if buffer > 128 bytes
1340 LSET T$=LEFT$(TB$,128) : PUT #2,T    ' if so, write to target file and
1350 TB$=RIGHT$(TB$,LTB-128) : T=T+1      '        keep remaining buffer
1360 '
1370 NEXT W
1380 IF LEN(T$)=0 GOTO 1410    ' if any buffer remains,
1390 LSET T$=TB$ : PUT #2,T   ' write out to text file
1400 '
1410 CLOSE #1,#2
1420 '
1430 PRINT
1440 PRINT "Length of TXT file = ";(128*(T-1))+LEN(TB$);" bytes"
1450 PRINT
1460 INPUT "Transfer another file?  (Y or N) : ";I$
1470 IF I$="Y" OR I$="y" GOTO 1060
1480 END
```
{% endraw %}

## FULLSCRN.BAS

{% raw %}
```bas
 100 REM FULLSCRN - V1.0 - JOHN H. LANG - COMPUTER ENTERPRISES
 110 REM          REVISED VERSION FIRST APPEARING IN SOFTALK MAGAZINE
 120 GOSUB  700
 130 GOSUB  540
 140   FKEYS=3:FKEY.A(1)=1: FKEY.A(2)=10
 150  FKEY.A(3)=SHIFT.TAB
 160    COLOR UNDERLINE,BLACK
 170    F=1
 180    IF F<1 THEN F=NUM.FIELDS
 190    IF F>NUM.FIELDS THEN F=1
 200    ON FLD.TYPE(F) GOSUB  380, 420, 460
 210    GOSUB  490
 220    IF FKEY=1 GOTO  280
 230    FLD.DATA$(F)=CKFIELD$
 240    IF FKEY=10 GOTO  300
 250    IF TCKI = SHIFT.TAB THEN F=F-1: GOTO  180
 260    F=F+1
 270  GOTO  180
 280    LOCATE 25,1: PRINT "FUNCTION KEY #1 PRESSED - END";
 290  GOTO  290
 300    COLOR BLACK,WHITE
 310    LOCATE 15,1
 320    FOR F=1 TO NUM.FIELDS
 330        PRINT "FIELD";F;"= ";
 340        PRINT FLD.DATA$(F)
 350    NEXT
 360    LOCATE 25,1: PRINT "FUNCTION KEY #10 PRESSED - ADD";
 370  GOTO  370
 380    MINKEY=ASC(" "): MAXKEY=126
 390    CAPSON=FALSE
 400    CALLER=0
 410  RETURN
 420    MINKEY=ASC(" "): MAXKEY=126
 430    CAPSON=TRUE
 440    CALLER=0
 450  RETURN
 460    MINKEY=ASC("0"): MAXKEY=ASC("9")
 470    CALLER=3
 480  RETURN
 490    F.ROW=FLD.ROW(F)
 500    F.COL=FLD.COL(F)+LEN(FLD.NAME$(F))+1
 510    F.FL=FLD.LENGTH(F)
 520    GOSUB  1130
 530    RETURN
 540    COLOR WHITE,BLACK
 550    CLS
 560   COLOR BLACK,WHITE
 570   GOSUB  2000
 580   COLOR WHITE,BLACK
 590    FOR F=1 TO NUM.FIELDS
 600       COLOR WHITE,BLACK
 610         LOCATE FLD.ROW(F),FLD.COL(F): PRINT FLD.NAME$(F);" ";
 620         COLOR UNDERLINE,BLACK
 630         PRINT SPACE$(FLD.LENGTH(F))
 640    NEXT
 650  RETURN
 660    FOR F=1 TO 5
 670    READ FLD.NAME$(F), FLD.TYPE(F), FLD.LENGTH(F), FLD.ROW(F), FLD.COL(F)
 680    NEXT
 690  RETURN
 700    KEY OFF: FOR I=1 TO 10: KEY I,"": NEXT
 710    TRUE=-1: FALSE=0
 720    BLACK=0: WHITE=7: UNDERLINE=1
 730    ENTER$=CHR$(13): BKSPC$=CHR$(8): ESC$=CHR$(27)
 740    DIM FKEY.A(15),LKEYS$(10)
 750    DIM FLD.DATA$(100)
 760    DIM FLD.NAME$(100)
 770    DIM FLD.TYPE(100)
 780    DIM FLD.LENGTH(100)
 790    DIM FLD.ROW(100)
 800    DIM FLD.COL(100)
 810    F.FIELD$=SPACE$(79)
 820    RTAB$=CHR$(15): SHIFT.TAB=15: RARW=77: LARW=75
 830    I$=CHR$(0): SPECIAL$=I$+"K"+I$+"M"+I$+"S"+I$+"R"+I$+"O"+I$+"s"+I$+"u"
 840    LKEYS$(0)=""
 850    LKEYS$(1)=" "
 860    LKEYS$(2)=""
 870    LKEYS$(3)=" +-."
 880  GOSUB  1710
 890    FOR F=1 TO 100
 900  INPUT #1, FLD.NAME$(F), FLD.TYPE(F), FLD.LENGTH(F), FLD.ROW(F), FLD.COL(F)
 910       IF FLD.TYPE(F)=0 GOTO  930
 920    NEXT
 930    NUM.FIELDS=F-1
 940  CLOSE
 950  RETURN
 960    IF INKEY$><"" GOTO  960
 970    FKEY=0: TCKI=0
 980    CK$=INKEY$: IF CK$="" GOTO  980
 990    IF CAPSON AND CK$>="a" AND CK$<="z" THEN CK$=CHR$(ASC(CK$) AND &HDF)
 1000   CK=ASC(CK$): IF CK=0 GOTO  1050
 1010   IF CK>=MINKEY AND CK<=MAXKEY GOTO  1120
 1020   IF CKFIELD.SW AND (CK$=ENTER$ OR CK$=BKSPC$) GOTO  1120
 1030   IF INSTR(LKEYS$(CALLER),CK$)=0 GOTO  1110
 1040   GOTO  1120
 1050   TCKI=ASC(RIGHT$(CK$,1))
 1060   IF TCKI>58 AND TCKI<69 THEN TCKI=TCKI-58:FKEY=TCKI
 1070    IF CKFIELD.SW AND INSTR(SPECIAL$,CK$)>0 GOTO  1120
 1080    FOR TI=1 TO FKEYS
 1090      IF TCKI=FKEY.A(TI) GOTO  1120
 1100    NEXT
 1110    SOUND 50,4: GOTO  960
 1120  RETURN
 1130    IF INKEY$ <> "" GOTO  1130
 1140    CKFIELD.SW=TRUE: INS=FALSE
 1150    CKMAX=F.FL+1:  KHIT=0:  CN=1
 1160    LOCATE F.ROW,F.COL,1
 1170    LOCATE F.ROW,F.COL+CN-1,1
 1180    GOSUB  970
 1190    KHIT=KHIT+1
 1200    IF TCKI>0 GOTO  1330
 1210      IF CK>31 AND CN<CKMAX GOTO  1260
 1220      IF CK$=ENTER$ OR CK$=RTAB$ GOTO  1400
 1230      IF CK$=BKSPC$ GOTO  1440
 1240      IF CK$=ESC$ THEN KHIT=2: GOTO  1420
 1250    BEEP:KHIT=KHIT - 1: GOTO  1180
 1260    IF INS GOTO  1280
 1270      PRINT CK$;: CN=CN+1: GOTO  1180
 1280    IF MID$(F.FIELD$,F.FL,1)< > " " GOTO  1320
 1290      MID$(F.FIELD$,CN,F.FL-CN+1) = CK$ + MID$(F.FIELD$,CN,F.FL-CN)
 1300      LOCATE ,F.COL.0: PRINT LEFT$(F.FIELD$,F.FL);: CN=CN+1
 1310  GOTO  1170
 1320    SOUND 50,4: GOTO  1180
 1330    IF NOT INS GOTO  1360
 1340    IF TCKI=82 GOTO  1550
 1350      INS=FALSE: LOCATE ,,1,2,10
 1360    IF TCKI<75 GOTO  1400
 1370    ON TCKI-74 GOTO  1440, 1400, 1460, 1590, 1400, 1550, 1510
 1380    IF TCKI=117 GOTO  1490
 1390    IF TCKI=115 THEN CN=1: GOTO  1170
 1400    LOCATE ,,0,2,10: GOSUB  1650
 1410    CKFIELD$=LEFT$(F.FIELD$,F.FL)
 1420    CKFIELD.SW=FALSE
 1430  RETURN
 1440      IF CN>1 THEN CN=CN-1: GOTO  1480
 1450      GOTO  1320
 1460      IF CN<CKMAX-1 THEN CN=CN+1: GOTO  1480
 1470      GOTO  1320
 1480    IF INKEY$><""   GOTO DRPKEY ELSE GOTO  1170
 1490      LOCATE ,,0: PRINT SPC(F.FL-CN+1);
 1500  GOTO  1170
 1510      ISTART=CN+1: T2=F.FL-CN
 1520      IF T2>0 THEN GOSUB  1660
 1530      PRINT MID$(F.FIELD$,ISTART,F.FL-CN+1);" ";
 1540  GOTO  1170
 1550      IF INS THEN LOCATE ,,,2,10: INS=FALSE: GOTO  1180
 1560      IF DISPLAY=1 THEN LOCATE ,,,10,3 ELSE LOCATE ,,,6,1
 1570      INS=TRUE: GOSUB  1650
 1580  GOTO  1170
 1590     GOSUB  1650
 1600     FOR CN=F.FL TO 1 STEP -1
 1610      IF MID$(F.FIELD$,CN,1)<> " " GOTO  1630
 1620    NEXT
 1630     IF CN <> F.FL THEN CN=CN+1
 1640  GOTO  1170
 1650     ISTART=1
 1660     LOCATE ,,0
 1670     FOR I1=ISTART TO F.FL
 1680        MID$(F.FIELD$,I1,1)=CHR$(SCREEN(F.ROW,F.COL+I1-1))
 1690     NEXT
 1700  RETURN
 1710  ON ERROR GOTO  1750
 1720  OPEN "B:FUL001.DAT" FOR INPUT AS #1
 1730  ON ERROR GOTO 0
 1740  RETURN
 1750 IF ERR = 24 THEN GO TO  1990
 1760 IF ERR = 68 THEN GO TO  1860
 1770 IF ERR = 72 THEN GO TO  1890
 1780 IF ERR = 71 THEN GO TO  1930
 1790 IF ERR = 55 THEN GO TO  1980
 1800 PRINT "UNKNOWN ERROR CODE OF ",ERR
 1810 PRINT "WAS ENCOUNTERED"
 1820 PRINT "RESEARCH ERROR CODE AND PUT INTO ERROR HANDLING TABLE"
 1830 END
 1840 '
 1850 ' ERROR MESSAGES
 1860 PRINT "UNABLE TO FIND DISK DRIVE"
 1870 PRINT "INSURE DISK DRIVE IS PROPERLY CONFIGURED TO SYSTEM"
 1880 END
 1890 PRINT "UNABLE TO READ DISKTTE"
 1900 PRINT "DISKETTE IS PHYSICALLY BAD"
 1910 PRINT "USE BACKUP COPY OF DISKETTE"
 1920 END
 1930 PRINT "DISK DRIVE IS NOT READY OR "
 1940 PRINT "DISK DRIVE DOOR IS OPEN"
 1950 PRINT "CORRECT THE ERROR CONDITION AND HIT RETURN WHEN READY"
 1960 CONTIN$=INKEY$: IF CONTIN$="" THEN GOTO  290
 1970 RESUME
 1980 RETURN NEXT
 1990 RESUME
 2000 REM FRAME - V1.0 - JOHN H. LANG - COMPUTER ENTERPRISES
 2010 GOSUB  2050
 2020 GOSUB  2120
 2030 GOSUB  2240
 2040 RETURN
 2050 IF INIT$ = "NO" THEN GO TO  2110
 2060    DIM  FR.ROW(100)
 2070    DIM  FR.SCOL(100)
 2080    DIM  FR.LCOL(100)
 2090    DIM  FR.RES$(100)
 2100    DIM  FR.TEXT$(100)
 2110 RETURN
 2120 IF INIT$ = "NO" THEN GOSUB  2230
 2130    ON ERROR GO TO  1750
 2140    OPEN "B:FRM001.DAT" FOR INPUT AS #1
 2150    ON ERROR GOTO 0
 2160    FOR FR = 1 TO 100
 2170     INPUT #1, FR.ROW(FR),FR.SCOL(FR),FR.LCOL(FR),FR.RES$(FR),FR.TEXT$(FR)
 2180     IF FR.ROW(FR) = 0 THEN GO TO  2200
 2190    NEXT  FR
 2200 INIT$ = "NO"
 2210 NUM.FRM = FR-1
 2220 CLOSE
 2230 RETURN
 2240 FOR FR = 1 TO NUM.FRM
 2250    LOCATE FR.ROW(FR),FR.SCOL(FR)
 2260    PRINT FR.TEXT$(FR)
 2270 NEXT FR
 2280 RETURN
```
{% endraw %}

## INFO.DOC

{% raw %}
```
          DOCUMENTATION CONCERNING FILES ON THIS DISKETTE
          -----------------------------------------------


1. FILES CONTAINED ON DISKETTE:

         FILE NAME                  DESCRIPTION
   --------------------------------------------------------------
         FULLSCRN.BAS               FULL SCREEN DATA ENTRY PROGRAM
                                    CREATED FROM FULLSCRN.BSC VIA
                                    PGMCVRT.BAS PROGRAM ON THIS
                                    DISKETTE.

         FULLSCRN.BSC               FULL SCREEN DATA ENTRY PROGRAM.
                                    RAW CODE TO BE FED INTO THE
                                    PGMCVRT.BAS PROGRAM.


         FULLSCRN.BSN               OUTPUT FILE AFTER RUNNING
                                    FULLSCRN.BSC THRU PGMCVRT.BAS.
                                    THIS IS A XREF OF LABELS AND
                                    THE ASSOCIATED LINE NUMBERS
                                    TO WHICH THEY WERE ASSIGNED.

         FRM001.DAT                 FILE WHICH IS READ IN BY
                                    THE FULLSCRN.BAS PGM. THIS
                                    CONTAINS THE FRAMING PARAMETERS
                                    IN WHICH TO DESCRIBE THE NONE
                                    DATA ENTRY PORTION OF THE SCREEN.

         FUL001.DAT                 FILE WHICH IS READ IN BY
                                    THE FULLSCRN.BAS PGM. THIS
                                    CONTAINS THE DATA ENTRY
                                    PARAMETERS WHICH DESCRIBE THE
                                    DATA ENTRY PORTION OF THE SCREEN.

         PGMCVRT.BAS                BASIC PROGRAM WHICH DOES THE
                                    CONVERSION A "XXXX.BSC" BASIC
                                    PROGRAM TO "XXXX.BAS" AND
                                    "XXXX.BSN". IT IS COPIED DIRECTLY
                                    OUT OF SOFTALK WITH NO MODIFICATIONS
                                    EXCEPT WHERE PROGRAM CORRECTIONS
                                    NEEDED TO BE MADE.

2. THE FILE WHICH DEFINES THE DATA ENTRY SCREEN (FUL001.DAT)
   IS IN THE SAME FORMAT AS YOU WOULD SEE IT IN A DATA STATEMENT
   WITHIN A BASIC PROGRAM. THE WAY TO DEFINE THE PARAMETERS AND
   THEIR MEANINGS WERE NOT ALTERED. DOCUMENTATION CAN BE FOUND
   WITHIN THE PGM  FULLSCRN.BSC  AND ALSO IN THE SOFTALK EDITION
   IN WHICH THE FULL SCREEN PROGRAM APPEARED.

3. THE FILE WHICH DEFINES THE NONE DATA ENTRY SCREEN (FRM001.DAT)
   IS IN THE SAME FORMAT AS YOU WOULD SEE IT IN A DATA STATEMENT
   WITHIN A BASIC PROGRAM.  DOCUMENTATION ON HOW TO DEFINE THE
   PARAMETERS CAN BE FOUND WITH THE PROGRAM  FULLSCRN.BSC.

4. SOME OPTIONS OF THE FRAMING (FRM001.DAT) HAVE NOT BEEN
   IMPLEMENTED AS IT WAS DECIDED THEY WERE NOT NEEDED. USE
   THE SAMPLE FILE (FRM001.DAT) AND THE DOCUMENTATION WITHIN
   THE PROGRAM TO DECIDE WHICH OPTIONS WERE NOT IMPLEMETED.
   I BELIEVE (AND HOPE) THIS WILL BE VERY OBVIOUS.


5. THE FULLSCRN.BAS PROGRAM WAS ACTUALLY CREATED USING THE PROGRAM
   PROGRAM  PGMCVRT.BAS ON THIS DISKETTE. FOR THAT REASON YOU
   SHOULD BE ABLE TO GO INTO BASIC AND RUN  FULLSCRN.BAS. MAKE
   SURE THE FILES  FUL001.DAT  AND  FRM001.DAT  ARE ACCESSABLE
   TO THE PROGRAM. BY DOING THIS YOU CAN SEE IMMEDIATELY HOW
   THIS PROGRAM WORKS.

6. ALL PROGRAMS ON THIS DISKETTE HAVE BEEN TESTED AND DO WORK
   AS SHIPPED.

7. DISKETTES WERE FORMATTED AND COPIED USING PCDOS 2.0.

8. PLEASE LET ME KNOW IF I CAN IMPROVE THIS DOCUMENTATION OR
   IF YOU HAVE SOME BETTER IDEAS ON THESE PROGRAMS. I WOULD
   WELCOME ANY COMMENTS.


```
{% endraw %}

## MEMO.BAS

{% raw %}
```bas
1010 '
1020 '    STEVE TURNER  513-868-9150   HAMILTON, OHIO   7-9-83
1030 '
1040 '    THIS PROGRAM STORES AND RETRIEVES RANDOM MEMOS
1050 ' USING MICROSOFT BASIC'S INSTRING FUNCTION. SPEED IS
1060 ' ABOUT 200 MEMOS IN 5 SECONDS AT 4 MHZ  AND D/D  8"
1070 ' HARDWARE. THIS TIMING WAS WITH PROGRAM COMPILED BUT
1080 ' IT RUNS ALMOST AS FAST WHEN INTERPRETTED.
1084 ' IF YOU DON'T PLAN TO COMPILE THIS PROGRAM, VARIABLE
1086 ' NAMES SHOULD BE SHORTENED FOR SPEED. COMPILE WITH
1087 ' /Z/E OPTIONS
1088 ' NO ATTEMPT WAS MADE TO WRITE COMPACT CODE. REASONING WAS TO HAVE
1089 ' AN EASILY MODIFIABLE PROGRAM FOR EXPERIMENTATION
1090 '                       73's  WA8WMH
1091 ' File XXXX.DAT is opened to prevent an initial error when the
1092 ' program is booted for the first time. 
1100 ' MODIFIED BY JOHN R. HARRINGTON FOR IBM Dos 2.0 Use 07/14/83
1110 '########################################################################
1120 '               SETUP AND INITIALIZE 
1130 '########################################################################
1150 CLOSE:OPEN"XXXX.DAT" FOR OUTPUT AS #1:CLOSE
1170 WIDTH 80 : CLS : COLOR 0,6,0 : CLS
1190 ' FLAGS ARE FOR FIRST TIME THROUGH PROMPTING
1210 FIRST.FLAG = 0 : BEGINNER.PROMPT.FLAG = 0
1230 ' RECORDS COULD BE SHORTER BUT SECTOR SIZE IS FASTER.
1240 ' MEMO'S LESS THAN 72 CHARACTERS MAKE FOR PRETTIER PRINTING
1250 ' BUT THEY CAN BE UP TO 128 CHARACTERS LONG.
1270 FOR I = 1 TO 7 : COLOR 0,6 : PRINT : NEXT
1330 PRINT TAB(27):COLOR 0,7 : PRINT "                           " ;: COLOR 0,6
1340 PRINT TAB(27):COLOR 0,7 : PRINT "  M E M O   P R O G R A M  " ;: COLOR 0,6
1342 PRINT TAB(27):COLOR 0,7 : PRINT "                           " ;: COLOR 0,6
1345 COLOR 0,6 : PRINT STRING$(79," ") ;: COLOR 0,6
1350 PRINT TAB(20):COLOR 7,0 : PRINT " DIRECTORY of DATA FILES on LOGGED DRIVE " ;: COLOR 0,6
1370 PRINT STRING$(79,"-")
1410 FILES "*.DAT"
1450 PRINT STRING$(79,"-")
1510 PRINT " 1. To OPEN an OLD FILE:            Enter FILE NAME   Example:   PHONE         "
1520 PRINT " 2. TO OPEN DEFAULT FILE:           Enter 'cr'        Example:    'cr'"
1530 PRINT " 3. TO OPEN NEW FILE:               Enter NEW NAME    Example:   NEWSINDX"
1580 PRINT " 4. Just type FILE NAME, extention will be added (.DAT)."
1590 PRINT " 5. File names can be up to (8) characters in length."
1600 PRINT " 6. Default file name is  'MEMO'      (MEMO.DAT)."
1610 PRINT " 7. Remember, it is better to use UPPER CASE throughout,"
1620 PRINT "    case translation is not done in retrieval function."
1670 PRINT
1710 COLOR 16,6 : LINE INPUT "INPUT DATA FILE NAME ?"; DATA.FILE.NAME$ : COLOR 0,6
1720 IF DATA.FILE.NAME$ = "" THEN DATA.FILE.NAME$ = "MEMO"
1730 SORT.FILE.NAME$ = DATA.FILE.NAME$    ' USED IN SORT ROUTINE
1740 DATA.FILE.NAME$ = DATA.FILE.NAME$ + ".DAT"
1760 OPEN "R", #1, DATA.FILE.NAME$, 128
1770 FIELD #1, 128 AS A$
1794 ' ##############################
1800 ' LEFT TWO BYTES OF RECORD #1
1810 ' HOLDS NEXT EMPTY RECORD NUMBER
1814 ' ##############################
1830 GET #1, 1
1840 NEXT.RECORD = CVI(LEFT$(A$,2))
1854 ' #############################
1860 ' CHECK FOR NEW FILE, INITIALIZE IF NEW.
1870 ' IF RECORD NUMBER IS > 8000  OR  < 2  THEN ASSUME
1880 ' THAT THIS IS A NEW FILE. A FORMATTED DISK WILL
1890 ' HAVE E5's IN THE SECTORS WHICH WILL BE A NEGATIVE NUMBER.
1900 ' THEN GOTO ADD ROUTINE TO ADD FIRST RECORD.
1904 ' #############################
1920 IF NEXT.RECORD < 2  OR NEXT.RECORD > 8000 THEN LAST.RECORD =1 : GOTO 2410 
1930 LAST.RECORD = NEXT.RECORD  - 1
2010 '########################################################################
2020 '                GET ANSWER AND GO TO ROUTINE
2030 '########################################################################
2050 PRINT : CLS
2070 PRINT : PRINT : PRINT 
2075 PRINT TAB(23) : COLOR 0,7 : PRINT "                                 " ;: COLOR 0,6 
2080 PRINT TAB(23) : COLOR 0,7 : PRINT "  M E M O   S E L E C T I O N S  " ;: COLOR 0,6 
2082 PRINT TAB(23) : COLOR 0,7 : PRINT "                                 " ;: COLOR 0,6 : PRINT
2083 PRINT : PRINT
2085 PRINT "                      <";:COLOR 0,2: PRINT" A ";:COLOR 0,6:PRINT">DD        new records."
2086 PRINT "                      <";:COLOR 0,7: PRINT" C ";:COLOR 0,6:PRINT">OMPACT    data file information."
2087 PRINT "                      <";:COLOR 0,4: PRINT" D ";:COLOR 0,6:PRINT">ELETE     individual records."
2088 PRINT "                      <";:COLOR 0,4: PRINT" K ";:COLOR 0,6:PRINT">ILL       a data file."
2089 PRINT "                      <";:COLOR 0,7: PRINT" L ";:COLOR 0,6:PRINT">IBRARY    of data files."
2090 PRINT "                      <";:COLOR 0,2: PRINT" M ";:COLOR 0,6:PRINT">ERGE      .dat files or asc files."
2100 PRINT "                      <";:COLOR 0,5: PRINT" Q ";:COLOR 0,6:PRINT">UIT       exit memo program."
2101 PRINT "                      <";:COLOR 7,1: PRINT" R ";:COLOR 0,6:PRINT">ETRIEVE   data file information"
2102 PRINT "                      <";:COLOR 0,7: PRINT" S ";:COLOR 0,6:PRINT">ORT       data file information"  
2120 PRINT : PRINT : PRINT
2130 COLOR 16,6 : PRINT TAB(5):PRINT "ENTER SELECTION : " : COLOR 0,6 
2150 G$ = INPUT$(1)
2152 PRINT G$
2170 IF G$ = "Q" THEN CLOSE : SYSTEM
2175 IF G$ = "q" THEN CLOSE : SYSTEM
2180 IF G$ = "S" THEN 5000
2185 IF G$ = "s" THEN 5000
2190 IF G$ = "R" THEN 2770
2195 IF G$ = "r" THEN 2770
2200 IF G$ = "D" THEN 3310
2205 IF G$ = "d" THEN 3310
2210 IF G$ = "C" THEN 3630
2215 IF G$ = "c" THEN 3630
2220 IF G$ = "M" THEN 3920
2225 IF G$ = "m" THEN 3920
2230 IF G$ = "A" THEN 2360
2235 IF G$ = "a" THEN 2360
2240 IF G$ = "L" THEN CLOSE : GOTO 1170
2245 IF G$ = "l" THEN CLOSE : GOTO 1270
2250 IF G$ = "K" THEN CLOSE : GOTO 4490
2255 IF G$ = "k" THEN CLOSE : GOTO 4490
2270 GOTO 2020
2350 '########################################################################
2360 '                  ROUTINE TO ADD A RECORD 
2362 '
2364 ' ADDS A RECORD TO FILE AND UPDATES NEXT.RECORD
2366 ' WRITES LAST.RECORD VARIABLE AS A TWO BYTE INTEGER STRING TO FIRST
2368 ' TWO BYTES OF FIRST RECORD IN FILE
2370 '########################################################################
2390 PRINT
2410 WHILE FIRST.FLAG = 0
2420 CLS:PRINT:PRINT TAB(30):COLOR 0,2:PRINT " ADD RECORD ";:COLOR 0,6:PRINT
2425 PRINT 
2430 COLOR 7,0:PRINT "Enter memo's Less than 72 characters make for prettier printing but they";:COLOR 0,6
2440 COLOR 7,0:PRINT "can be up to 128 characters long, remember upper case is better.";:COLOR 0,6:PRINT
2460 FIRST.FLAG = 1
2470 WEND
2490 PRINT
2510 COLOR 0,2:PRINT "Enter MEMO   --- or ---   (@) to quit.";:COLOR 0,6
2520 PRINT
2550 PRINT "<------------------------------------------------------------------->"
2570 LINE INPUT "?"; B$
2590 LSET A$ = B$
2610 IF B$ = "@" THEN LSET A$ = MKI$(NEXT.RECORD) : PUT #1,1 : GOTO 2020
2630 NEXT.RECORD = NEXT.RECORD + 1
2640 LAST.RECORD = LAST.RECORD + 1
2660 PUT #1, LAST.RECORD
2680 GOTO 2360
2760 '########################################################################
2770 '               ROUTINE TO RETRIEVE A STRING                      
2772 '
2774 ' RETRIEVES A STRING BY DOING AN INSTRING$ FUNCTION ON EACH RECORD
2776 ' AND PRINTING ALL RECORDS CONTAINING SEARCH STRING (P$)
2780 '########################################################################
2800 CLS  
2810 PRINT:PRINT TAB(28):COLOR 7,1:PRINT " RETREIVE RECORD ";:COLOR 0,6:PRINT
2820 PRINT
2830 COLOR 7,0:PRINT "Type in WORD, NUMBER, PARTIAL WORD, or PARTIAL NUMBER to search for.";:COLOR 0,6
2840 PRINT
2850 PRINT "Lower case is not converted to upper case."
2870 WHILE BEGINNER.PROMPT.FLAG = 0
2880 PRINT
2890 PRINT "Samples:    883-, Cincin, Cin, Ohio, Oh, 45013, 4501, H8, TRS-80,"
2900 PRINT "            S-100, PL/I, Basic, Fortran, Buy, Sale, Sell, ect."
2910 PRINT
2920 BEGINNER.PROMPT.FLAG = 1
2930 WEND
2960 PRINT 
2980 PRINT "COMMANDS:    1. '@'     to exit retrieve."
2990 PRINT "             2. 'WORD'  to search for."
3000 PRINT "             3. '#WORD' for hardcopy."
3010 PRINT "             4. 'cr'    to list all memos."
3014 PRINT "             5. 'SPC BAR' STOPS LISTING OF MEMOS"
3016 PRINT
3020 COLOR 16,6:PRINT " Enter Selection :" ;: COLOR 0,6
3030 LINE INPUT P$
3050 IF LEFT$(P$,1) = "@" THEN 2020
3070 IF LEFT$(P$,1) = "#" THEN P$ = RIGHT$(P$,LEN(P$) - 1) : PRNT = 1
3090 PRINT
3100 PRINT
3120 FOR INDEX = 2 TO LAST.RECORD
3130     GET #1, INDEX
3140     IF INSTR(A$,P$) > 0   AND  PRNT = 0  THEN PRINT "#";INDEX;"   ";                LEFT$(A$,INSTR(A$,"                "))
3150     IF INSTR(A$,P$) > 0   AND  PRNT = 1  THEN LPRINT "#";INDEX;"   ";               LEFT$(A$,INSTR(A$,"                "))
3155       IF INKEY$ = " " THEN 3180
3160 NEXT
3180 PRNT = 0
3200 PRINT
3220 GOTO 2810
3300 '########################################################################
3310 '                ROUTINE TO DELETE A RECORD 
3312 '
3314 ' DELETES RECORDS BY NUMBER. REPLACES THEM WITH A SPACE STRING
3320 '########################################################################
3340 CLS : PRINT:PRINT:PRINT TAB(30) :COLOR 0,4:PRINT " DELETE RECORD ";:COLOR 0,6:PRINT
3350 PRINT
3370 COLOR 7,0:PRINT "1.  ENTER TWO RECORD NUMBERS FOR GROUP DELETE  OR  '0' TO EXIT.     ";:COLOR 0,6
3380 COLOR 7,0:PRINT "2.  ENTER SAME RECORD NUMBER TWICE FOR SINGLE DELETE.               ";:COLOR 0,6
3390 COLOR 7,0:PRINT "3.  FIRST RECORD = 2       LAST RECORD =                       "; LAST.RECORD;:COLOR 0,6
3400 PRINT:PRINT
3410 COLOR 16,6 : PRINT "ENTER FIRST RECORD NUMBER: ";:COLOR 0,6
3420 INPUT FIRST
3430 IF FIRST = 0 THEN 2020
3440 COLOR 16,6 : PRINT "ENTER LAST RECORD NUMBER:  ";:COLOR 0,6
3450 INPUT LAST
3461 IF LAST = LAST.RECORD THEN LAST.RECORD = FIRST - 1 : NEXT.RECORD = FIRST      : GOTO 3532
3470 FOR INDEX = FIRST TO LAST
3480     RECORD = INDEX
3490     IF ((RECORD > LAST.RECORD) OR (RECORD < 2)) THEN PRINT:                          PRINT "RECORD NUMBER OUT OF RANGE....TRY AGAIN.":                                GOTO 3310
3500     LSET A$ = STRING$(128," ")
3510     PUT #1, RECORD
3520 NEXT INDEX
3532 LSET A$ = MKI$(NEXT.RECORD)
3534 PUT #1, 1
3540 GOTO 3310
3620 '########################################################################
3630 '                ROUTINE TO COMPACT FILE 
3632 '
3634 ' COMPACTS FILE BY LOOKING FOR A RECORD OF ALL SPACES, THEN TAKES
3636 ' LAST RECORD AND MOVES IT TO EMPTY RECORD.
3638 ' THEN UPDATES NEXT.RECORD AND LAST.RECORD
3640 '########################################################################
3650 CLS
3660 PRINT : PRINT : PRINT TAB(26) : COLOR 0,7 : PRINT " COMPACTING FILE ";:COLOR 0,6
3670 PRINT : PRINT
3690 PRINT "WORKING";
3710 FOR INDEX = 2 TO LAST.RECORD
3720     GET #1,INDEX
3730     PRINT ".";
3740     IF A$ = SPACE$(128) THEN GET#1,LAST.RECORD : PUT #1,INDEX :                      LAST.RECORD = LAST.RECORD - 1 : NEXT.RECORD = NEXT.RECORD - 1
3750 NEXT
3770 LSET A$ = MKI$(NEXT.RECORD)
3790 PUT #1, 1
3810 PRINT : CLS
3830 GOTO 2020
3910 '########################################################################
3920 '                ROUTINE TO MERGE TWO FILES  
3922 '
3924 ' A TEXT FILE CAN NOW (7-10-83) BE MERGED INTO YOUR MEMO BASE.
3926 ' TEXT FILE MUST HAVE FILE TYPE  XXXXXXXX.DAT 
3928 ' FILE CAN BE RANDOM OR SEQUENTIAL
3930 '########################################################################
3950 PRINT
3960 PRINT TAB(20):COLOR 0,7:PRINT " MERGE ?.DAT WITH MEMO.DAT ";:COLOR 0,6
4000 PRINT
4010 PRINT
4030 COLOR 7,0:PRINT "Enter name of file to merge into primary file or '@' to exit merge.";:COLOR 0,6
4040 COLOR 7,0:PRINT "Example:  PHONES                                                   ";:COLOR 0,6
4050 PRINT
4054 INPUT MERGE.FILE.NAME$
4058 IF MERGE.FILE.NAME$ = "@" THEN 2020
4060 MERGE.FILE.NAME$ = MERGE.FILE.NAME$ + ".DAT"
4091 PRINT
4092 PRINT
4093 PRINT " 1 - STANDARD MEMO.DAT FORMAT   (RANDOM)""
4095 PRINT " 2 - MERGING FILE IS OF SEQUENTIAL TYPE"
4096 PRINT
4097 G$ = INPUT$(1)
4098 IF VAL(G$) > 2 THEN 4091
4134 IF G$ = "1" THEN 4140
4136    OPEN "I", #2, MERGE.FILE.NAME$
4137    GOTO 4161
4140 OPEN "R", #2, MERGE.FILE.NAME$, 128
4150 FIELD #2, 128 AS MERGE.FIELD$
4161 PRINT "WORKING";
4180 IF G$ = "1" THEN 4236
4184    LINE INPUT #2, B$
4188    IF EOF(2) THEN 4330
4190       LSET A$ = B$
4194       PUT #1, NEXT.RECORD
4196       NEXT.RECORD = NEXT.RECORD + 1
4198       LAST.RECORD = LAST.RECORD + 1
4200       PRINT "." ;
4210       GOTO 4184
4236 INDEX = 1
4250     GET #2, INDEX
4255     IF EOF(2) THEN 4330
4260     LSET A$ = MERGE.FIELD$
4270     PUT #1, NEXT.RECORD
4280     NEXT.RECORD = NEXT.RECORD + 1
4290     LAST.RECORD = LAST.RECORD + 1
4294     INDEX = INDEX + 1
4300     PRINT ".";
4310 GOTO 4250
4330 PRINT
4350 LSET A$ = MKI$(NEXT.RECORD)
4360 PUT #1, 1
4380 CLOSE #2
4400 GOTO 2020
4480 '#######################################################################
4490 '                  ROUTINE TO ERASE A FILE
4492 '
4494 ' ROUTINE WILL UNSAVE A FILE BY NAME, MUST BE 'XXXXXXXX.DAT' TYPE
4500 '#######################################################################
4520 CLS  
4530 PRINT   
4540 PRINT TAB(28):COLOR 0,4:PRINT " KILL DATA FILE ";:COLOR 0,6
4550 PRINT      
4560 PRINT
4580 PRINT "Enter name of data file to erase, ";:COLOR 0,4:PRINT " * CAUTION * ";:COLOR 0,6:PRINT" file may not be recoverable,"
4590 PRINT "Example:  PHONES"
4600 PRINT
4610 PRINT "or enter  '@'  to exit erase function."
4620 PRINT
4630 COLOR 16,6:PRINT "ENTER FILE NAME : ";
4650 INPUT ERASE.NAME$
4660 IF ERASE.NAME$ = "@" THEN 1120
4680 ERASE.NAME$ = ERASE.NAME$ + ".DAT"
4700 KILL ERASE.NAME$
4720 GOTO 1120
4800 '#######################################################################
4814 ' ONLY IF NO DATA FILE (MEMO.DAT - ECT.) IS FOUND ON DEFAULT DRIVE
4816 ' IF NO DATA FILE EXISTS, A DEFAULT DATA FILE 'MEMO.DAT' WILL BE OPENED
4820 '#######################################################################
4840 PRINT "   None found  -  a default file named  MEMO.DAT will be opened."
4860 PRINT STRING$(76,"-")
4880 PRINT
4890 PRINT
4910 DATA.FILE.NAME$ = "MEMO.DAT"
4930 GOTO 1760
4990 '#######################################################################
5000 '                     SORT ROUTINE
5002 '
5004 ' DIMENSIONING DONE IN THIS ROUTINE LIMITS NUMBER OF MEMO'S THAT 
5006 ' CAN BE SORTED. COMPILER WON'T COMPILE DYNAMICALLY DIMENSIONED ARRAYS.
5030 ' SET UP AN ARRAY FOR RECORD NUMBER AND ONE FOR RECORD CONTENTS
5040 ' READ FIRST 12 BYTES OF RECORD INTO ARRAY FOR RECORD CONTENTS
5050 ' DO SHELL-METZNER SORT AND SWAP 12 BYTES IN CONTENT ARRAY AND RECORD
5055 ' IN RECORD NUMBER ARRAY
5060 ' THEN GET RECORD NUMBERS FROM ARRAY IN ORDER AND WRITE NEW FILE
5070 ' KILL OLD DATA FILE AND RENAME NEW DATA FILE AS OLD DATA FILE
5080 ' GO BACK TO OPEN FILE AND SET FILE POINTERS
5082 '#######################################################################
5110 DIM SORT.ARRAY$(1000)
5120 DIM RECORD.ARRAY(1000)
5140 FOR INDEX = 2 TO LAST.RECORD
5150     GET #1, INDEX
5160     RECORD.ARRAY(INDEX - 1) = INDEX
5170     SORT.ARRAY$(INDEX - 1 ) = LEFT$(A$,12)
5180 NEXT INDEX
5210 CLS
5220 PRINT
5230 PRINT
5240 PRINT
5250 PRINT "SHELL-METZNER SORT -----   SORTING...";
5270 M.INDX = LAST.RECORD - 1
5274 M.INDX = INT(M.INDX / 2)
5278 IF M.INDX = 0 THEN 5370
5280 K.INDX = (LAST.RECORD - 1) - M.INDX
5284 J.INDX = 1
5288 I.INDX = J.INDX
5290 L.INDX = I.INDX + M.INDX
5294 IF SORT.ARRAY$(I.INDX) <= SORT.ARRAY$(L.INDX) THEN 5314
5296 PRINT "." ;
5298 SWAP SORT.ARRAY$(I.INDX) , SORT.ARRAY$(L.INDX)
5300 SWAP RECORD.ARRAY(I.INDX) , RECORD.ARRAY(L.INDX)
5308 I.INDX = I.INDX - M.INDX
5310 IF I.INDX >= 1 THEN 5290
5314 J.INDX = J.INDX + 1
5318 IF J.INDX > K.INDX THEN 5274
5320 GOTO 5288
5370 PRINT
5390 OPEN "R", #3, SORT.FILE.NAME$ + ".TMP", 128
5400 FIELD #3, 128 AS A1$
5412 GET #1, 1
5413 LSET A1$ = A$
5414 PUT #3, 1
5417 ' IF BLOCKING FACTOR IS 64 THIS ROUTINE USES 8K OF RAM.
5418 ' BLKFAC=8 USES 1K OF RAM. LARGER NUMBER SPEEDS DISK I/O.
5420 BLKFAC = 64
5422 DIM A2$(64)
5428 FOR INDEX = 0 TO LAST.RECORD - 2 STEP BLKFAC
5432     FOR I = 1 TO BLKFAC
5434         IF I + INDEX > LAST.RECORD - 1 THEN 5444
5436         GET #1, RECORD.ARRAY(I + INDEX)
5438         A2$(I) = A$
5440     NEXT I
5444     FOR I = 1 TO BLKFAC
5446         IF I + INDEX > LAST.RECORD - 1 THEN 5460
5448         LSET A1$ = A2$(I)
5450         PUT #3, I + INDEX + 1
5452     NEXT I
5460 NEXT INDEX
5480 CLOSE
5500 KILL DATA.FILE.NAME$
5510 NAME SORT.FILE.NAME$ + ".TMP" AS SORT.FILE.NAME$ + ".DAT"
5520 DATA.FILE.NAME$ = SORT.FILE.NAME$ + ".DAT"
5540 GOTO 1760
5620 '#######################################################################
5630 '                              END
5640 '#######################################################################
5650 END
```
{% endraw %}

## PGMCVRT.BAS

{% raw %}
```bas
10 CLS
20  REM BSCBAS.BSC V2.01 3-83,MARK GARDNER, WED ENTERPRISES,GLENDALE,CA 91201
30  PRINT ".BSC TO .BAS CONVERTER, BSCBAS V2.01"
40  DIM NAMES(200,8)
50  DIM NUMBERS(200,7)
60  DIM WORDBOUND(2)
70  DIM TRYNAME$(10)
80  GOTO 180
90  IF MID$(FILLIN$,I,1)<>" " THEN GOTO 120
100  I=I-1
110  GOTO 90
120  WORDBOUND(2)=I
130  I=I-1
140  IF I=0 THEN ERROR 255
150  IF MID$(FILLIN$,I,1)<>" " THEN GOTO 130
160  WORDBOUND(1)=I+1
170  RETURN
180  INPUT "NAME OF FILE TO RUN: ";BSCNAME$
190  OPEN "I",1,BSCNAME$+".BSC"
200  OPEN "O",2,BSCNAME$+".WRK"
210  OPEN "O",3,BSCNAME$+".BSN"
220  INPUT "STRIP COMMENTS AND NAMES (Y/N):  ";ANSWER$
230  STRIPFLAG=0
240  IF ANSWER$="Y" THEN STRIPFLAG=1
250  PRINT#3, "NAME/LIN# ASSIGNMENTS FOR "+BSCNAME$+".BAS     ";
260  IF STRIPFLAG THEN PRINT#3, "COMMENTS STRIPPED" ELSE PRINT#3," "
270  NAMECTR=0
280  INPUT "STARTING LINE NUMBER: ";LINECTR
290  ON ERROR GOTO 610
300  LINE INPUT#1,FILLIN$
310  PRINT ".";
320  IF LEN(FILLIN$)=0 THEN GOTO 550
330  IF ASC(FILLIN$)=ASC(";") THEN GOTO 550
340  SRCHLIM=7
350  IF LEN(FILLIN$)<7 THEN SRCHLIM=LEN(FILLIN$)
360  FOR I=2 TO SRCHLIM
370     LINCHR$=MID$(FILLIN$,I,1)
380     IF LINCHR$=":" THEN GOTO 410
390  NEXT I
400  GOTO 580
410  NAMES(NAMECTR,0)=I-1
420  FOR M=1 TO I-1
430     NAMES(NAMECTR,M)=ASC(MID$(FILLIN$,M,1))
440  NEXT M
450  NAMES(NAMECTR,I)=255
460  LINNMB$=STR$(LINECTR+10*(1-STRIPFLAG))
470  NUMLEN=LEN(LINNMB$)
480  FOR M=1 TO NUMLEN
490     NUMBERS(NAMECTR,M-1)=ASC(MID$(LINNMB$,M,1))
500  NEXT M
510  NUMBERS(NAMECTR,NUMLEN)=255
520  THENAME$=LEFT$(FILLIN$,I-1)
530  PRINT#3,RIGHT$("   "+THENAME$,6)+"   "+RIGHT$("   " +LINNMB$,6)
540  NAMECTR=NAMECTR+1
550  IF STRIPFLAG=1 THEN GOTO 300
560  PRINT#2,STR$(LINECTR)+"REM"+FILLIN$
570  GOTO 590
580  PRINT#2,STR$(LINECTR)+" "+FILLIN$
590  LINECTR=LINECTR+10
600  GOTO 300
610  IF ERR<>62 THEN ON ERROR GOTO 0
620  PRINT
630  PRINT "FIRST PASS COMPLETE, NAMES STORED"
640  RESUME 650
650  CLOSE
660  ON ERROR GOTO 0
670  OPEN "I",1,BSCNAME$+".WRK"
680  OPEN "O",2,BSCNAME$+".BAS"
690  ON ERROR GOTO 1610
700  LINE INPUT#1,FILLIN$
710  ERLFLAG=0
720  FOR I=3 TO 7
730  IF MID$(FILLIN$,I,3)=";" THEN GOTO 1580
740  NEXT I
750  I=LEN(FILLIN$)
760  GOSUB 90
770  POSSNAME$=MID$(FILLIN$,WORDBOUND(1),WORDBOUND(2)-WORDBOUND(1)+1)
780  SHORT$=LEFT$(FILLIN$,WORDBOUND(1)-1)
790  IF ASC(POSSNAME$)<ASC("A") THEN GOTO 1580
800  IF ASC(POSSNAME$)>ASC("Z") THEN GOTO 1580
810  IF ERLFLAG<>2 GOTO 830
820  GOTO 950
830  I=WORDBOUND(1)-1
840  GOSUB 90
850  POSSCOMD$=MID$(FILLIN$,WORDBOUND(1),WORDBOUND(2)-WORDBOUND(1)+1)
860  IF POSSCOMD$="GOTO" THEN GOTO 950
870  IF POSSCOMD$="GOSUB" THEN GOTO 950
880  IF POSSCOMD$="RESUME" THEN GOTO 950
890  IF POSSCOMD$="RESTORE" THEN GOTO 950
900  IF POSSCOMD$<>"TO" THEN GOTO 1580
910  I=WORDBOUND(1)-1
920  GOSUB 90
930  POSSCOMD$=MID$(FILLIN$,WORDBOUND(1),WORDBOUND(2)-WORDBOUND(1)+1)
940  IF POSSCOMD$<>"GO" THEN GOTO 1580
950  NUMOFNAMES=1
960  COMMAPTR=1
970  FOR I=1 TO LEN(POSSNAME$)
980     IF MID$(POSSNAME$,I,1)="," THEN GOTO 1000
990     GOTO 1030
1000     TRYNAME$(NUMOFNAMES)=MID$(POSSNAME$,COMMAPTR,I-COMMAPTR)
1010     NUMOFNAMES=NUMOFNAMES+1
1020     COMMAPTR=I+1
1030  NEXT I
1040  TRYNAME$(NUMOFNAMES)=MID$(POSSNAME$,COMMAPTR,LEN(POSSNAME$))
1050  TRYNAMEPTR=1
1060  POSSNAME$=TRYNAME$(TRYNAMEPTR)
1070  I=0
1080  IF NAMES(I,0)<>LEN(TRYNAME$(TRYNAMEPTR)) THEN GOTO 1150
1090  J=1
1100  IF NAMECTR=0 THEN GOTO 1170
1110  IF NAMES(I,J)=255 THEN GOTO 1240
1120  IF ASC(MID$(POSSNAME$,J,1))<>NAMES(I,J) THEN GOTO 1150
1130  J=J+1
1140  IF J<8 THEN GOTO 1110
1150  I=I+1
1160  IF I<=NAMECTR THEN GOTO 1080
1170  PRINT
1180  PRINT POSSNAME$ "HAS NO MATCH"
1190  IF LEN(FILLIN$)>=60 GOTO 1220
1200  FILLIN$=FILLIN$+SPACE$(60-LEN(FILLIN$))+"NO DEF:"+POSSNAME$
1210  GOTO 1230
1220  FILLIN$=FILLIN$+"NO DEF:"+POSSNAME$
1230  GOTO 1580
1240  FOR J=0 TO 6
1250     IF NUMBERS(I,J)=255 THEN GOTO 1300
1260     SHORT$=SHORT$+CHR$(NUMBERS(I,J))
1270  NEXT J
1280  PRINT "INVALID NUMBER ENTRY"
1290  STOP
1300  TRYNAMEPTR=TRYNAMEPTR+1
1310  IF TRYNAMEPTR>NUMOFNAMES THEN GOTO 1340
1320  SHORT$=SHORT$+","
1330  GOTO 1060
1340  FILLIN$=SHORT$
1350  IF ERLFLAG<>0 THEN GOTO 1560
1360  ERLFLAG=1
1370  ERLPTR=INSTR(FILLIN$," ERL ")
1380  IF ERLPTR=0 GOTO 1560
1390  ERLFLAG=2
1400  ERLPTR=ERLPTR+4
1410  SEARCHFLAG=1
1420  NOWORD=0
1430  WHILE SEARCHFLAG
1440     ERLPTR=ERLPTR+1
1450     IF ERLPTR>LEN(FILLIN$) THEN SEARCHFLAG=0:NOWORD=1:GOTO 1480
1460     TEST$=MID$(FILLIN$,ERLPTR,1)
1470     IF (TEST$>="A" AND TEST$<="Z") THEN SEARCHFLAG=0
1480  WEND
1490  IF NOWORD GOTO 1580
1500  WHILE MID$(FILLIN$,ERLPTR,1)<>" "
1510     ERLPTR=ERLPTR+1
1520  WEND
1530  ERLSAV$=RIGHT$(FILLIN$,LEN(FILLIN$)-ERLPTR+1)
1540  FILLIN$=LEFT$(FILLIN$,ERLPTR-1)
1550  GOTO 750
1560  IF ERLFLAG<>2 THEN GOTO 1580
1570  FILLIN$=FILLIN$ + ERLSAV$
1580  PRINT#2,FILLIN$
1590  PRINT ".";
1600  GOTO 700
1610  CLOSE
1620  IF ERR<>62 THEN ON ERROR GOTO 0
1630  KILL BSCNAME$+".WRK"
1640  RESUME 1650
1650  STOP
1660  END
```
{% endraw %}

## RV-EDIT.BAS

{% raw %}
```bas
0 GOTO 65000
1 CLEAR
10 DEFINT A-Z:DIM T$(600),T(600):I=0:DD=0:IF K$="" THEN K$=" ":GOTO 1000:ELSE GOTO 1000
98 DD=DD+1:IF DD<500 THEN RETURN:ELSE GOSUB 99:DD=0:RETURN
99 COLOR 7,1:LOCATE 23,1,0:PRINT USING " &  &  Memory=#####  Lines=###";DATE$;TIME$;FRE(0);LL;:COLOR C1,C2:RETURN
100 T=T(Y+OF):IF T>0 THEN RETURN:ELSE T=-1*T:T(Y+OF)=T:LL=LL+1:IF LEN(T$(T))<76 THEN T$(T)=SPACE$(76):GOSUB 99:RETURN:ELSE MID$(T$(T),1)=BLANK$:RETURN
111 X1=0:IF Y>1 THEN Y=Y-1:GOSUB 100:RETURN:ELSE Y=22:WHILE T(OF+Y)<0:Y=Y-1:WEND:GOSUB 100:RETURN'CURSOR UP
112 IF X=1 THEN X=76:GOSUB 111:RETURN:ELSE X=X-1:RETURN'cursor left
113 IF X=76 THEN GOSUB 270:RETURN:ELSE X=X+1:RETURN'CURSOR RIGHT
114 X1=0:IF Y<22 AND T(Y+OF+1)>0 THEN Y=Y+1:GOSUB 100:RETURN:ELSE Y=1:GOSUB 100:RETURN'CURSOR DN
115 MID$(NL$,1)=SPACE$(76):MID$(NL$,1)=T$(T):T$(T)=NL$:GOSUB 99:RETURN'LEN T$(T)NOW=76
116 IF LEN(T$(T))>75 THEN RETURN:ELSE GOSUB 115:RETURN
195 LOCATE Y,1,0:PRINT USING LF$;T$(T);Y+OF;:RETURN'PRINT CURRENT LINE
207 GOSUB 251:X=1:RETURN'..[CNTL][LEFT]
208 GOSUB 251:X=76:RETURN'..[CNTL][RIGHT]
209 X=LEN(T$(T)):IF X<76 THEN RETURN:ELSE WHILE MID$(T$(T),X,1)=" " AND X>1:X=X-1:WEND:X=X+1:IF X<=76 THEN RETURN:ELSE X=76:RETURN'..[END]=LAST CHAR IN LINE +1
210 Y=1:GOSUB 100:X=1:RETURN'[home]=top-left
211 IF OF=0 THEN RETURN:ELSE S=Y+OF:OF=0:BOT=22:GOSUB 400:GOSUB 222:GOSUB 100:RETURN'..[CNTL][HOME]=TOP OF FILE
212 LOCATE 23,1,0:PRINT"mem=";FRE(0);:RETURN' Print mem-left
219 IF OF=0 THEN RETURN:ELSE S=Y+OF:IF OF-22<0 THEN OF=0:GOTO 221:ELSE OF=OF-22:IF OF<0 THEN OF=0:GOTO 221:ELSE GOTO 221'..[CNTL][PgUp]=FULL PAGE UP
220 IF OF=0 THEN RETURN:ELSE S=Y+OF:IF OF-11<0 THEN OF=0:ELSE OF=OF-11:IF OF<0 THEN OF=0'..[PgUp]=HALF PAGE UP
221 BOT=OF+22:GOSUB 400:GOSUB 222:GOSUB 100:RETURN
222 Y=S-OF:IF Y<1 THEN Y=1:RETURN:ELSE IF Y>22 THEN Y=22:RETURN:ELSE RETURN
230 LOCATE 24,1,1:LINE INPUT"COMMAND=>";CMD$:RETURN'..[F0]=COMMAND LINE
239 MID$(T$(T),X,77-X)=STRING$(76," "):GOSUB 195:RETURN'..[CTRL][END]
240 IF LL<OF+23 THEN RETURN:ELSE S=Y+OF:BOT=BOT+22:IF BOT>599 THEN BOT=600:GOTO 242:ELSE GOTO 242'..[CTRL][PgDn]=FULL PgDn
241 IF LL<OF+12 THEN RETURN:ELSE S=OF+Y:BOT=BOT+11:IF BOT>599 THEN BOT=600'..[PgDn]=HALF PAGE DN
242 OF=BOT-22:GOSUB 400:GOSUB 222:GOSUB 100:RETURN
250 INS=-1*(XINS=0):IF INS THEN LOCATE ,,1,4,7:IF LEN(T$(T))=76 THEN RETURN:ELSE GOSUB 115:RETURN
251 XINS=INS:IF INS=0 THEN RETURN:ELSE INS=0:LOCATE,,1,0,7:RETURN'..[INS]
260 GOSUB 116:IF X<76 THEN MID$(T$(T),X,76-X)=MID$(T$(T),X+1,76-X)
261 MID$(T$(T),76,1)=" ":LOCATE Y,X,0:PRINT RIGHT$(T$(T),77-X);:RETURN'..[DEL]
270 GOSUB 271:X1=0:IF Y<22 THEN Y=Y+1:GOSUB 100:GOSUB 195:RETURN:ELSE IF BOT<600 THEN BOT=BOT+1:OF=OF+1:GOSUB 100:LOCATE 24,80,0:PRINT " ";:GOSUB 99:GOSUB 195:RETURN:ELSE LOCATE 23,1,0:PRINT "600 is the maximum line count for this editor.";
271 IF X1>0 THEN X=X1:RETURN:ELSE IF X=1 THEN RETURN:ELSE X=1:Y=Y-1:RETURN
300 GOSUB 903:GOSUB 330:GOSUB 904:IF I=0 THEN RETURN:ELSE GOSUB 3999:II=LL:WHILE II>Y-1+OF:SWAP T(II+I),T(II):II=II-1:WEND:S=Y:FOR II=1 TO I:GOSUB 100:Y=Y+1:NEXT II:Y=S:GOSUB 400'[F5] INSERT LINE
301 LOCATE 25,1,0:COLOR K1,K2:KEY ON:GOSUB 51020:RETURN
310 GOSUB 903:GOSUB 340:GOSUB 904:IF I=0 THEN RETURN:ELSE GOSUB 3999:II=Y+OF:WHILE T(II+I)>0:SWAP T(II),T(II+I):II=II+1:WEND:II=LL:LL=LL-I:WHILE II>LL:T(II)=T(II)*-1:II=II-1:WEND:GOSUB 99:GOSUB 400'[F6] DELETE LINE
311 LOCATE 25,1,0:COLOR K1,K2:KEY ON:GOSUB 51020:RETURN
320 S=Y+OF:KEY OFF:LOCATE 25,1,0:PRINT"TOP LINE NUMBER";S;:LOCATE ,16:LINE INPUT;"?";ANS$:IF ANS$="" THEN OF=S-1:ELSE OF=VAL(ANS$)-1:IF OF<0 THEN OF=0:ELSE IF OF>=LL THEN OF=LL-1
321 GOSUB 221:GOSUB 222:LOCATE 25,1,0:COLOR K1,K2:KEY ON:GOSUB 51020:RETURN
330 I=1:KEY OFF:LOCATE 25,1,0:PRINT" How many lines";I;:LOCATE ,16:LINE INPUT;"?";ANS$:I=VAL(ANS$):IF I<1 THEN I=1:ELSE IF I+LL>600 THEN I=600-LL:IF I<1 THEN I=1
331 RETURN
340 MAX=LL-(OF+Y)+1:KEY OFF:LOCATE 25,1,0:PRINT" How many lines 1";:LOCATE ,16:LINE INPUT;"?";ANS$:I=VAL(ANS$):IF ANS$="" THEN I=1:RETURN ELSE IF I<1 THEN I=0:RETURN:ELSE IF I<MAX THEN RETURN:ELSE I=MAX:IF I<LL THEN RETURN:ELSE I=I-1:RETURN
400 FOR I=1 TO 22:LOCATE I,1,0:T=T(I+OF):IF T>0 THEN PRINT USING LF$;T$(T);I+OF;:ELSE PRINT STRING$(80,176);
401 NEXT I:WHILE T(Y+OF)<0 AND Y>0:Y=Y-1:WEND:T=T(Y+OF):GOSUB 99:RETURN
900 IF Y+OF>LL THEN Y=Y-1:IF Y<1 THEN OF=OF+1:Y=LL-OF:GOSUB 220:RETURN
901 FOR II=Y TO 22:LOCATE II,1,0:IF T(II+OF)>0 THEN PRINT USING LF$;T$(T(II+OF));II+OF;:ELSE PRINT STRING$(80,176);
902 NEXT II:RETURN
903 COLOR C1+16:LOCATE,77:PRINT CHR$(17);:COLOR C1:RETURN
904 LOCATE,77:PRINT"|";:RETURN
1000 C1= 7:C2=5:C3=1:COLOR C1,C2,C3:RESTORE:LF$="\"+SPACE$(74)+"\_|###":XC$="":READ I:WHILE I<>999:XC$=XC$+CHR$(I):READ I:WEND:BLANK$=STRING$(80," "):BL$=BLANK$:XL$=SPACE$(80):NL$=SPACE$(76):CL$=SPACE$(76):SC$=CHR$(13)+CHR$(8)+CHR$(0)
1020 FOR I=1 TO 600:T(I)=I*-1:NEXT I:T=0:OF=0:BOT=22:LL=0
1100 Y=0:X=1:LOCATE,,0,0,7:IF K$="LOADFILE" THEN GOSUB 3310:ELSE WIDTH 80:CLS:LOCATE 23,1:COLOR,1:PRINT BLANK$;:COLOR,C2
1105 GOSUB 3000:GOSUB 210:LOCATE,,0,0,7:OF=1:Y=0:GOSUB 211
1109 GOSUB 2000:IF INS THEN 1111:ELSE IF LEN(T$(T))<X THEN GOSUB 115:LOCATE Y,X
1110 MID$(T$(T),X,1)=K$:PRINT K$;:GOSUB 1112:GOSUB 113:GOTO 1109
1111 MID$(T$(T),X+1,76-X)=MID$(T$(T),X,76-X):MID$(T$(T),X,1)=K$:LOCATE,1,0:PRINT T$(T);:GOSUB 113:GOTO 1109
1112 IF K$=" " OR X1>0 THEN RETURN:ELSE X1=X:RETURN
2000 GOSUB 98:LOCATE Y,X,1:K$=INKEY$
2010 IF K$="" THEN GOTO 2000:ELSE DD=0:IF LEN(K$)=1 THEN I=INSTR(SC$,K$):IF I=0 THEN RETURN:ELSE ON I GOSUB 2015,112:GOTO 2000
2011 K$=RIGHT$(K$,1):I=INSTR(XC$,K$):IF I=0 THEN 2000:ELSE GOSUB 251:ON I GOSUB 210,111,220,112,113,209,114,241,250,260,207,208,239,240,211,219:GOTO 2000
2015 GOSUB 270:GOSUB 251:RETURN
3000 K1=C1:K2=C2:KEY 1,"TOPLIN":KEY 2,"END":KEY 3,"LOAD":KEY 4,"SAVE":KEY 5,"INSERT":KEY 6,"DELETE":KEY 7,"TOP":KEY 8,"BOTTOM":KEY 9,"PRINT":KEY 10,"KEYS"
3010 ON KEY(1) GOSUB 320 :ON KEY(2) GOSUB 3900:ON KEY(3) GOSUB 3300:ON KEY(4) GOSUB 3400:ON KEY(5) GOSUB 300:ON KEY(6) GOSUB 310:ON KEY(7) GOSUB 211:ON KEY(8) GOSUB 3800:ON KEY(9) GOSUB 3100:ON KEY(10) GOSUB 4000
3020 FOR I=1 TO 10:KEY(I) ON:NEXT:KEY OFF:COLOR K1,K2:LOCATE 25,1,0:PRINT SPACE$(79);:KEY ON:GOSUB 51020:RETURN
3100 '<<PRINT>>
3105 TIME2=0
3110 GOSUB 50010:OUTRCD=0:WHILE ERRSW=0 AND OUTRCD<LL:OUTRCD=OUTRCD+1:GOSUB 3130:WEND:ON ERROR GOTO 0
3115 IF ERRSW THEN IF TIME2=0 THEN MSG$="THE PRINTER IS NOT READY! ..":GOSUB 3199:TIME2=-1:RETURN
3120 RETURN
3130 IF LEN(T$(T(OUTRCD)))<3 THEN LPRINT"   ";T$(T(OUTRCD)):RETURN:ELSE II=INSTR(1,".PA.pa",LEFT$(T$(T(OUTRCD)),3)):IF II=0 THEN LPRINT "   ";T$(T(OUTRCD)):RETURN:ELSE ON (II+2)/3 GOSUB 3131,3131:RETURN
3131 LPRINT CHR$(12):RETURN'[.PA]
3198 MSG$="function not yet available..":GOSUB 3199:RETURN
3199 KEY OFF:COLOR 14:LOCATE 25,1,0:PRINT MSG$;:COLOR 30:PRINT"[SPACE]";:COLOR 14:PRINT" to continue";:COLOR K1,K2:WHILE INKEY$="":WEND:KEY ON:COLOR C1,C2:RETURN
3200 KEY 1,"LIST ":KEY 2,"RUN"+CHR$(13):KEY 3,"LOAD"+CHR$(34):KEY 4,"SAVE"+CHR$(34):KEY 5,"CONT"+CHR$(13):KEY 6,","+CHR$(34)+"LPT1:"+CHR$(13):KEY 7,"TRON"+CHR$(13):KEY 8,"TROFF"+CHR$(13):KEY 9,"KEY":KEY 10,"SCREEN 0,0,0"+CHR$(13):CLS:END'..<<RETURN TO BA
3300 GOSUB 3390
3305 GOSUB 3610:CLEAR:GOSUB 99:K$="LOADFILE":GOTO 10'[F3]=LOAD
3310 GOSUB 99:CONTIN=0:GOSUB 51001:IF CONTIN<>0 OR FILE$="" THEN GOSUB 400:ELSE GOSUB 3999:GOSUB 53000:OF=1:Y=0:GOSUB 211:CLOSE'[F3]=LOAD
3315 CONTIN=0:ON ERROR GOTO 0:GOSUB 3020:RETURN
3390 IF LL>1 THEN KEY OFF:LOCATE 25,1,1:COLOR 14:LINE INPUT;"DO YOU WANT TO SAVE THE CURRENT FILE FIRST?";ANS$:ANS$=LEFT$(ANS$,1):IF ANS$="y" OR ANS$="Y" THEN NOSAVE=-1:GOSUB 3400:NOSAVE=0
3399 RETURN
3400 GOSUB 3610:CONTIN=0:GOSUB 51002:IF CONTIN=0 AND FILE$<>"" THEN GOSUB 3999:GOSUB 54000:CLOSE'[F4]=SAVE
3401 ON ERROR GOTO 0:CONTIN=0:IF NOSAVE THEN GOSUB 3020:RETURN: ELSE GOSUB 400:GOSUB 3020:RETURN
3500 CONTIN=-1:RETURN'[F5]=CONTINUE
3600 GOSUB 3610:MSG$="":GOSUB 3199:GOSUB 400:RETURN
3610 CLS:LOCATE,,0:GOSUB 50010:FILES:IF ERRSW=0 THEN FOR II=13 TO 65 STEP 13:LOCATE 1,II:FOR JI=1 TO 10:PRINT"│";CHR$(31);CHR$(29);:NEXT JI:NEXT II:ELSE LOCATE 23,1:PRINT"DISK ACCESS ERROR OCCURRED!";
3615 ON ERROR GOTO 0:IF ERRSW<>0 THEN RETURN
3620 LOCATE 10,1:PRINT							       "────────────┴────────────┴────────────┴────────────┴────────────┴───────────────";:LOCATE 23,1:COLOR,1:PRINT BLANK$;:COLOR,C2:GOSUB 99:RETURN
3700 ON ERROR GOTO 3710:MID$(XL$,1)=CL$:COLOR C2,C1
3701 MID$(CL$,1)=" enter todays date=>"+DATE$+BLANK$:LOCATE 24,1,0:PRINT CL$;:LOCATE 24,21,1:LINE INPUT;K$:IF K$=""THEN 3703:ELSE ON ERROR GOTO 3710:DATE$=K$:ON ERROR GOTO 0:MID$(CL$,1)=XL$:LOCATE 24,1,0:PRINT CL$;:COLOR C1,C2:GOSUB 99:GOTO 3703
3702 GOTO 3701
3703 MID$(CL$,32)=" time=>"+TIME$+BLANK$:LOCATE 24,1,0:PRINT CL$;:LOCATE 24,39,1:LINE INPUT;K$:IF K$="" THEN 3705:ELSE ON ERROR GOTO 3710:TIME$=K$:ON ERROR GOTO 0:MID$(CL$,1)=XL$:LOCATE 24,1,0:PRINT CL$;:COLOR C1,C2:GOSUB 99:RETURN
3704 GOTO 3703
3705 ON ERROR GOTO 0:MID$(CL$,1)=XL$:LOCATE 24,1,0:PRINT CL$;:COLOR C1,C2:GOSUB 99:RETURN
3710 IF ERR=5 THEN LOCATE 23,1,0:PRINT" Invalid format...";:RESUME NEXT:ELSE ON ERROR GOTO 0
3800 IF LL<23 THEN GOSUB 211:RETURN:ELSE S=Y+OF:BOT=LL:OF=BOT-22:GOSUB 400:GOSUB 222:GOSUB  100:RETURN'..[F8]=BOT
3900 GOSUB 3390:ON ERROR GOTO 3910:KEY OFF:CLS:END"'..<<END>>.... ALLOW SAVE BEFORE EXIT...
3910 SYSTEM
3999 KEY OFF:COLOR 30:LOCATE 25,1,0:PRINT"~~~ compute ~~~";:COLOR C1:RETURN
4000 K1=14:K2=2:KEY 1,"copy":KEY 2,"copy+":KEY 3,"move":KEY 4,"move+":KEY 5,"before":KEY 6,"after":KEY 7,"IMBED ":KEY 8,"     ":KEY 9,"DATE":KEY 10,"KEYS"
4010 ON KEY(1) GOSUB 3198:ON KEY(2) GOSUB 3198:ON KEY(3) GOSUB 3198:ON KEY(4) GOSUB 3198:ON KEY(5) GOSUB 3198:ON KEY(6) GOSUB 3198:ON KEY(7) GOSUB 4700:ON KEY(8) GOSUB 3198:ON KEY(9) GOSUB 3700:ON KEY(10) GOSUB 3000
4020 FOR I=1 TO 10:KEY(I) ON:NEXT:KEY OFF:COLOR K1,K2:LOCATE 25,1,0:PRINT SPACE$(79);:KEY ON:GOSUB 51020:RETURN
4700 GOSUB 3610:IF ERRSW=0 THEN GOSUB 51000:IF ERRSW=0 THEN GOSUB 3999:II=0:WHILE LL-II>OF+Y-1:SWAP T(LL-II),T(600-II):II=II+1:WEND:LL=OF+Y-1:GOSUB 53005:WHILE II>0:II=II-1:LL=LL+1:SWAP T(LL),T(600-II):WEND
4701 GOSUB 99:GOSUB 400:GOSUB 4020:RETURN
50010 ON ERROR GOTO 50060:ERRSW=0:RETURN
50060 ERRSW=-1:LOCATE 23,1,0:RESUME NEXT
51000 MID$(XL$,1)=CL$:MID$(CL$,1)="[Imbed File] Name="+FILE$+BLANK$:GOTO 51003
51001 MID$(XL$,1)=CL$:MID$(CL$,1)=" [Load File] Name="+FILE$+BLANK$:GOTO 51003
51002 MID$(CL$,1)=" [Save File] Name="+FILE$+BLANK$
51003 LOCATE 24,1,0:COLOR C2,C1:PRINT CL$;:LOCATE 24,19,1:LINE INPUT;A$
51010 IF CONTIN THEN MID$(CL$,1)=XL$:LOCATE 24,1,0:PRINT CL$;:RETURN:ELSE IF A$<>"" AND MID$(A$,1)<>BLANK$ THEN FILE$=A$:MID$(CL$,1)=" File Name ="+FILE$+BLANK$:ELSE MID$(CL$,1)=XL$:ERRSW=-1
51020 COLOR C2,C1:LOCATE 24,1,0:PRINT CL$;:COLOR ,C3:LOCATE 23,1:PRINT BLANK$;:GOSUB 99:RETURN
53000 FOR I=1 TO 600:T(I)=-1*I:NEXT I:Y=0:OF=0:LL=0
53005 GOSUB 50010:OPEN FILE$ FOR INPUT AS #1
53010 IF ERRSW<>0 THEN LOCATE 23,1,0:PRINT "OPEN ERROR";:RETURN
53025 ON ERROR GOTO 0
53036 WHILE EOF(1)=0
53040 LL=LL+1:T=T(LL)*-1:T(LL)=T:LINE INPUT #1,T$(T):GOSUB 99
53070 WEND
53080 CLOSE:RETURN
54000 GOSUB 50010:OPEN "O",1,FILE$
54010 IF ERRSW<>0 THEN LOCATE 23,1,0:PRINT "OPEN ERROR";:RETURN
54020 FOR OUTRCD= 1 TO LL:T=T(OUTRCD):GOSUB 209:PRINT#1,MID$(T$(T),1,X)
54025 NEXT OUTRCD
54030 IF ERRSW<>0 THEN LOCATE 23,1,0:PRINT "WRITE ERROR";:RETURN
54035 RETURN
55080 MID$(XL$,1)=INPUT$(128,#1):RETURN
60000 DATA 71,72,73,75,77,79,80,81,82,83,115,116,117,118,119,132,999
65000 REM -*- RV-EDIT	   -*-
65020 KEY(2) ON:ON KEY(2) GOSUB 65200
65030 KEY OFF:SCREEN 0,1:COLOR 15,3,1:WIDTH 40:CLS:LOCATE 5,18:PRINT " IBM "
65040 LOCATE 7,12,0:PRINT "Personal Computer"
65050 COLOR 10,0:LOCATE 10,9,0:PRINT CHR$(213)+STRING$(21,205)+CHR$(184)
65060 LOCATE 11,9,0:PRINT CHR$(179)+" -*-R V - E D I T-*- "+CHR$(179)
65070 LOCATE 12,9,0:PRINT CHR$(179)+STRING$(21,32)+CHR$(179)
65080 LOCATE 13,9,0:PRINT CHR$(179)+"Version 1.2  11/05/82"+CHR$(179)
65090 LOCATE 14,9,0:PRINT CHR$(212)+STRING$(21,205)+CHR$(190)
65100 COLOR 15,0:LOCATE 19,5,0:PRINT "   Author: R. S. Vollmer Sr.   "
65110 COLOR 14,0:LOCATE 23,7,0:PRINT "       INITIALIZING        ";CHR$(7);
65120 COLOR 30:LOCATE 23,5,0:PRINT CHR$(15);:LOCATE 23,35,0:PRINT CHR$(15);
65130 COLOR 7,5
65150 GOTO 1
65200 END
```
{% endraw %}

## RV-EDIT.DOC

{% raw %}
```

                                   RV-EDIT
                                   =======

   RV-EDIT is a full screen editor written in BASIC.  It makes use of
   most of the special function keys on the PC keyboard, such as Page
   Up, Page Down, Home, Insert and Delete.  All the control key functions
   are listed on the last page of this file.  I tried to make it as much
   like the BASIC editor as possible, to let you move easily between the
   two.  I think you'll find all the functions of the BASIC editor in
   RV-EDIT, plus a few more.

   AUTOMATIC INDENTATION
   ---------------------
        The carriage return [ENTER]      |  If you want to start at the left
   key is programmed to put the cursor   |  margin, type another [ENTER]. Auto-
   at the same position on the next      |  indent works for both old and new
   line as the first character typed     |  lines, to let you enter data in
   on the current line.  So, if you      |  columns or to write a multi-column
   started the current line at column    |  letter.
   10, the next line would start there   |
   too.                                  |

   WHAT YOU SEE IS WHAT YOU GET
   ----------------------------
        This means that no reformatting is done.  RV-EDIT is just an editor, it
   does no word processing functions.  So, whatever you can put on the screen
   will be printed just as you see it.  This is a mixed blessing.  On one hand
   there is no doubt as to how your printed output will look.  On the other,
   you have to block your paragraphs yourself and there is no automatic right
   margin justification.

   PRINTER CONTROL
   ---------------
        One feature that I use a lot is the ability to put any ASCII character
   on a line, including printer control characters.  The PC keyboard gives you
   the ability to do this by typing a number between 1 and 254 on the numeric
   keypad, while holding the [ALT] key down.  When you release the [ALT] key,
   the PC representation of that character will appear on the screen.  For
   example, an ASCII 14 will put the Epson printer in double wide character
   mode.  The PC representation of an ASCII 14 is a musical note.  So if you
   type [ALT]14 at the beginning of a line, you see a musical note on the
   screen in that position and you know that the line will be printed with
   double wide characters.  Two character escape codes can be put in as well.
   For example, I like to type my letters in emphasized mode to get darker
   print.  The Epson printer code for emphasized mode is [ESC]E .  So, I type
   [ESC]E on line one.  I see a back-arrow E, so I know its there and the
   printer will be set to emphasized mode when it gets sent the line.

   SOME CAUTIONS
   -------------
        This is a brand new program with limited test time and may have xome
   problems lurking within.  Save your files periodically and when memory
   gets under 1000 bytes, its probably time to start a new file.  You can
   recover some space by doing a SAVE followed by a LOAD, however.  Since
   this is a BASIC program, string space is continually consumed.  Instead
   of doing a FRE periodically (it takes 7 minutes), the LOAD command
   restarts the program.


                                   RV-EDIT                         PAGE 2

   LIMITATIONS
   -----------
   Because this is an in-storage editor, you are restricted to a maximum of
   600 lines.

   The maximum line length is 76 characters.  Because of this, RV-EDIT is not
   suitable for editing BASIC files.  You will be able to LOAD them, but you
   will only see the leftmost 76 bytes of each line.  You can change those
   lines safely by typing over characters.  The problem occurs when you insert
   or delete characters in a line which <USED TO> contain more than 76
   characters.  The characters to the right of 76 will go into ye olde bit
   bucket.

   So there you have it fellow members, a program that will turn your multi-
   thousand dollar computer into an electric typewriter!

   GREAT OAKS FROM LITTLE ACORNS GROW
   ----------------------------------
   What we have here is a reasonable nucleus for a good editor or even a word
   processor.  So take this opportunity to tailor make your own whatever-
   you-want-to-call-it.  Break out your BASIC manual and try writing some
   subroutines to do the things you like in an editor.  If you are wondering
   what you could possible do to improve this thing, consider some of the
   following:
     copy and block copy; move and block move; tabs; speed up the LOAD and
     SAVE routines; margins; a double-space command; a box command; format
     a paragraph between lines A & B; automatic page titling and numbering;

     There is a possibility for a whole new module to handle the print
     function.  RV-EDIT could chain to the new module, passing it all
     the variables.  The print module would print the text array, observing
     a number of imbedded formatting commands such as .in .fo  etc.
     (right now the print routine handles  only, doing a page eject for it)

     Anyone experimenting with the assembler could maintain the text array
     in another 64K segment; speed up load and save; speed up text display;
     do a fast paragraph formatter with justification; etc.

     No need to strain yourself thinking about it.  As you use it you'll
     find yourself saying "now why doesn't it ..." or "I wish it would ...".
     You can make it grow with your requirements.

   Its easy to visualize several members working on different features
   or similar features with different implememtations.  How can we take
   advantage of this?  Well... I'd like to see us participate in a program-
   ming experiment that would let us pick and choose among the features
   that are submitted by members.  If we make each feature stand alone
   in the form of mergeable lines of BASIC code, I think we can do it.

   PROPOSAL
   --------
   Whenever you feel you have a feature that you would like to share, send
   it to me in the form of a listing or a diskette containing the files.
   (no VM files please)  I'll review it for conflicting variables and line
   numbers etc.  If there are no problems, we will make it available on
   the next club diskette.  I'll return your diskette at the next meeting
   or via internal mail.


                                   RV-EDIT                         PAGE 3

     Specifics
     ---------
     Accepted files will be put on the future club diskette as RV-EDIT.nnn
       where nnn is a feature number between 001 and 999

     Line 64001-64999 will identify the contributor and describe the feature.
     You will then be able to LIST 64001-64999 to see which features have
     been installed in any particular version of the program.

     Pre-requisite and co-requisite features will be identified in the
     README file and on the feature line of the program.

     You should be able to customize your editor by MERGEing the features
     you like with the RV-EDIT.

   You can send your features and suggestions for improving the process to:

                     Bob Vollmer              Bob Vollmer
                     148 Brice Court     or   L74/F37
                     San Jose, CA 95111       Santa Teresa Lab

                                  (408) 226-2652

   INSTALLING RV-EDIT
   ------------------
   The method I prefer has RV-EDIT on the DOS diskette and a private `LETTERS'
   diskette for each family member.  All that is on each Letters diskette is
   a one line CONTROL.BAS file containing `10 RUN"A:RV-EDIT"'.  That is all
   that is required to get the proper program run, leaving the remainder of
   each diskette available for correspendence files.  There is also only
   one diskette to update to go to a new version of the editor.

   Two drives
     From DOS, type B:
                    A:BASICA CONTROL

     From BASIC, type RUN"B:CONTROL

   One drive -
     From DOS, type BASICA RV-EDIT
     When you see the cover page for the editor, replace the DOS diskette
     with a Letters diskette.

     RV-EDIT exits to A:TRANSFER.BAS which prompts for a new diskette and
     [SPACE] to continue.  For a one-drive system, I'd suggest that you
     put a copy of TRANSFER.BAS on each letters diskette as well as your
     DOS diskette.  Then, no matter which diskette was in the drive when
     you exited, TRANSFER.BAS would be found.

     To change the exit procedure, edit the last line of the program, 65200
     to suit your system.

   NOTE - RV-EDIT as distributed on CPC Disk #11 has two files, RV-EDIT.DOC
   and rv-edit.bas.  Only copy the RV-EDIT.BAS file to your DOS diskette.  Print
   RV-EDIT.DOC (load and print it using RV-EDIT) and file it.
   

                               RV-EDIT CONTROL KEYS
                               ====================
   ARROW KEYS = move cursor in the arrow direction.
   [CNTL] LEFT/RIGHT ARROW = side of screen
   [C/R] = new line, indent to first char struck on current line.  [C/R] again
           moves the cursor to column 1.
   [HOME]     = top-left
   [END]      = end of current line.
   [CNTL][END]= erase to end of current line.
   [PgUp]     = display prior 11 lines.
   [PgDn]     = display next 11 lines.
   [CTRL][PgUp/Dn] = prior/next 22 lines.
   [INS]      = insert chars til [INS] or cursor moves. (half cursor=insert)
   [DEL]      = delete chars, one char per [DEL].

            SOFT KEYS(1)                         SOFT KEYS(2)
   1. TOPLIN   Specify top display line.| 1. copy    \n\
   2. END      Exit to next diskette.   | 2. copy+    \o\\c\
   3. LOAD     Load a diskette file.    | 3. move      \t\\o\
   4. SAVE     Save current file.       | 4. move+         \d\
   5. INSERT   Insert a prior line.     | 5. before         \e\
   6. DELETE   Delete the current line. | 6. after           \d\
   7. TOP      Display from top of file.| 7. IMBED
   8. BOTTOM   Display to file bottom.  | 8.
   9. PRINT    Print entire file.       | 9. DATE     Enter current Date/Time.
   0. KEYS     Display alternate keys   | 0. KEYS     Display alternate keys.


```
{% endraw %}

## TXTSCAN.BAS

{% raw %}
```bas
1010 PROG$="TXTSCAN.BAS":VERS$="82/08/03/2100"
1020 '
1030 ' Scans lines of an ASCII file for a given character string
1040 '
1050 DEFINT A-Z:CLS:PRINT"           T X T S C A N . B A S":PRINT:PRINT
1060 PRINT "ENTER FILE NAME (MUST BE AN ASCII FILE) ";:INPUT "",N$
1070 OPEN N$ FOR INPUT AS #1
1080 PRINT:PRINT "ENTER STRING TO SEARCH FOR ";
1090 LINE INPUT ;"",A$:IF A$="" THEN 1080
1100 LA=LEN(A$)
1110 PRINT:PRINT:PRINT:PRINT "          L  O  O  K  I  N  G   .  .  .  ."
1120 LPRINT CHR$(27);"E";CHR$(27);"G  STATEMENT SCAN OF "N$" FOR '"A$;
1130 LPRINT "'";CHR$(27);"F";CHR$(27);"H":LPRINT
1140 IF EOF(1) THEN 1180 ' End the program
1150 LINE INPUT #1,F$:IF INSTR(F$,A$)>0 THEN 1160 ELSE 1140
1160 LPRINT F$ ' Found the string, so print it
1170 GOTO 1140 ' Loop back to try next line, if any
1180 LPRINT:LPRINT "   E N D   O F   F I L E"
1190 PRINT:PRINT:PRINT "  J O B   F I N I S H E D":END
```
{% endraw %}

## VUE.BAS

{% raw %}
```bas
1 ' VUE 12/16/82  V1.0
2 '
3 'COPYRIGHT (c) 1982 by Buzz Hamilton
4 '                      29 Crawford Street
5 '                      Northboro, MA 01532 (617) 393-3199
6 '
7 'Permission to copy this program is granted except for commercial gain.
8 '
9 '
10 'VUE          Text Viewing Utility
11 '
12 'This program permits rapid review of ASCII text files.  With single
13 'keystrokes the user may page forward or reverse, shift up or down one
14 'line, print screen contents, or search for a string of characters. A
15 'convenient directory command is also supported.
16 '
17 'The first entry is the file name. The default type (or extension) is
18 '.DOC. The user may request a directory by entering / as the first
19 'character. Examples of how directory entries are interpreted are:
20 '     /               *.*
21 '     /B:             B:*.*
22 '     /DOC            *.DOC
23 '     /B:TEST.        B:TEST.*
24 '
25 'A bare return will permit the user to Quit.
26 '
27 'The program will attempt to read the entire file into memory. If the
28 'file is too large to fit than a section will be read. Requests to view
29 'text beyond the current section will cause another section of the file
30 'to be read. Requests to view previous sections are not allowed. To view
31 'a previous section of a large file the user must enter the New command
32 'and start again with the same file.
33 '
34 'All commands are entered with single keys. The use of the function keys
35 'is supported. Illogical commands (Forward past end of file, etc.) or a
36 'Search failure are signalled with a beep.
37 '
38 'The Quit command will attempt to CHAIN to a program named FKEYS on the
39 'default disk. This program, if it exists, should reset the function keys
40 'to your desired setup. The program name may be changed at line 110.
41 '
100 DEFINT A-Z
110 FK$="FKEYS":WDTH=80
120 CLS:PRINT TAB(10),"VUE   A Text Viewing Utility":PRINT:PRINT TAB(10),"LIST 10-40 for instructions":PRINT:PRINT TAB(10),"File must be ASCII":PRINT
130 CL$=CHR$(1):BLANK$=STRING$(WDTH-1,32):OVF=0:DIM L$(FRE(0)/WDTH):DEF FNP$(Z$)=MID$(Z$,1-(ASC(Z$)=1)):KEY OFF:ON ERROR GOTO 690
140 DIM C$(10):FOR C=1 TO 10:READ C$(C):KEY C,LEFT$(C$(C),1):C$=C$+LEFT$(C$(C),1):NEXT C
150 DATA "Forward","Reverse","Up-1","Down-1":DATA "Bottom","Top","Search","Print","New","Quit"
160 CLOSE:P$="File name:":BLNK=0:GOSUB 680
170 INPUT;"",A$:IF LEN(A$)>0 THEN 190
180 P$="Quit?":BLNK=0:GOSUB 680:A$=INPUT$(1):IF A$="Y" OR A$="y" THEN 670 ELSE 160
190 IF LEFT$(A$,1)<>"/" THEN 300
200 IF ERF THEN 290
210 D$="":F$="*":T$="*":CLS:IF LEN(A$)=1 THEN 290
220 P1=INSTR(A$,":"):IF P1=0 THEN P1=1:GOTO 250
230 IF P1>2 THEN D$=MID$(A$,2,P1-1)
240 IF P1=LEN(A$) THEN 290
250 P2=INSTR(A$,"."):IF P2=0 THEN P2=P1:GOTO 280
260 IF P2>(P1+1) THEN F$=MID$(A$,P1+1,P2-P1-1)
270 IF P2=LEN(A$) THEN 290
280 T$=MID$(A$,P2+1)
290 LOCATE 1,1:FILES D$+F$+"."+T$:ERF=0:GOTO 160
300 IF LEN(A$)=0 THEN 670
310 IF INSTR(A$,".")=0 THEN A$=A$+".DOC"
320 OPEN "I",1,A$:ERF=0
330 CLS:I=0:P$=" Reading File ":BLNK=1:GOSUB 680
340 IF OVF=1 THEN OVF=0:I=1:L$(1)=MID$(X$,1):GOTO 360
350 I=I+1:LINE INPUT #1,L$(I)
360 L=LEN(L$(I)):IF L=0 THEN L$(I)=" ":L=1
370 P1=INSTR(L$(I),CHR$(12)):IF P1 THEN MID$(L$(I),P1,1)=" ":GOTO 370
380 IF L<WDTH THEN 350
390 X$=CL$+MID$(L$(I),WDTH):L$(I)=LEFT$(L$(I),WDTH-1):I=I+1:L$(I)=X$:GOTO 360
400 LMAX=I-1:GOTO 530
410 CLS:LOCATE 1,1:FOR J=FL TO LL-1:PRINT FNP$(L$(J)):NEXT J:PRINT FNP$(L$(LL));
420 LOCATE 25,1:PRINT BLANK$;:LOCATE 25,1:FOR C=1 TO 10:PRINT STR$(C);:COLOR 0,7:PRINT C$(C);:COLOR 7,0:NEXT C
430 I$=INPUT$(1):IF LEN(I$)=0 THEN 430
440 ON INSTR(C$,I$)+1 GOTO 420,450,470,480,500,510,520,540,600,160,670
450 IF LL=LMAX THEN IF EOF(1) THEN ERROR 200 ELSE GOTO 330
460 FL=LL+1:GOTO 620
470 IF FL=1 THEN ERROR 200 ELSE FL=FL-24:GOTO 620
480 IF LL=LMAX THEN IF EOF(1) THEN ERROR 200 ELSE GOTO 330
490 FL=FL+1:LL=LL+1:LOCATE 24,1:PRINT:PRINT FNP$(L$(LL));:GOTO 430
500 IF FL=1 THEN ERROR 200 ELSE FL=FL-1:GOTO 620
510 IF LL=LMAX THEN ERROR 200 ELSE 650
520 IF FL=1 THEN ERROR 200
530 FL=1:LL=24:GOTO 640
540 P$="Search:":BLNK=0:GOSUB 680:INPUT;"",A$
550 J=FL:IF ASC(L$(FL))=1 THEN Z$=MID$(L$(FL),2):GOTO 570
560 Z$=L$(J)
570 IF ASC(L$(J+1))=1 THEN J=J+1:Z$=Z$+MID$(L$(J),2):GOTO 570
580 IF INSTR(Z$,A$) THEN FL=J-12:GOTO 620
590 IF J<LMAX THEN J=J+1:GOTO 560 ELSE BEEP:GOTO 420
600 LPRINT L$(FL):IF ERF=1 THEN LOCATE 25,1:PRINT BLANK$;:ERF=0
610 FOR J=FL+1 TO LL:LPRINT L$(J):NEXT J:LPRINT CHR$(12);:GOTO 420
620 LL=FL+23
630 IF FL<1 THEN 530
640 IF LL<=LMAX THEN 410
650 LL=LMAX:FL=LMAX-23:IF FL<1 THEN FL=1
660 GOTO 410
670 CLS:POKE 106,0:CHAIN FK$
680 LOCATE 25,1:PRINT BLANK$;:LOCATE 25,1:COLOR BLNK*16,7:PRINT P$;:COLOR 7,0:PRINT" ";:RETURN
690 '------ERROR ROUTINES
700 IF ERL=350 AND (ERR=62 OR ERR=9) THEN RESUME 400
710 IF ERL=390 AND ERR=9 THEN OVF=1:RESUME 400
720 IF ERL=570 AND (ERR=9 OR ERR=5) THEN RESUME 580
730 IF ERL=670 AND ERR=53 THEN RESUME 780
740 IF ERR=71 THEN IF ERF=1 THEN RESUME 320 ELSE ERF=1:P$=" DISK PROBLEM ":BLNK=1:GOSUB 680:BEEP:RESUME 190
750 IF ERR=27 THEN IF ERF=1 THEN RESUME 600 ELSE ERF=1:P$=" PRINTER PROBLEM ":BLNK=1:GOSUB 680:BEEP:RESUME 600
760 IF ERL=290 OR ERL=320 THEN BEEP:A$="/":RESUME 210
770 IF ERR=200 THEN BEEP:RESUME 430
780 LOCATE 25,1:PRINT SPC(39);:CLS:ON ERROR GOTO 0:END
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0190

     Volume in drive A has no label
     Directory of A:\

    CUSTOM   BAS      3840   4-09-83   1:03p
    FIX-TEST BAS      3968   1-10-83   9:55p
    FRM001   DAT       202   3-08-84   9:46p
    FUL001   DAT       449   3-08-84   9:48p
    FULLSCRN BAS      7269   3-08-84   9:56p
    FULLSCRN BSC     15467   3-08-84   9:59p
    FULLSCRN BSN       983   3-08-84   9:51p
    INFO     DOC      3747   3-08-84  10:50p
    MEMO     BAS     17152  12-10-83   7:34a
    PC-FORM  EXE     51840  10-01-83  11:32p
    PGMCVRT  BAS      5145   1-08-84   8:51p
    RV-EDIT  BAS     12416   7-17-83   1:51a
    RV-EDIT  DOC     10335   9-03-83  11:21a
    TXTSCAN  BAS      1024   8-23-83   7:04p
    VUE      BAS      5504   7-17-83  12:50a
    XXXX     DAT         1   6-04-84  11:56p
    XXX               1024   6-05-84  12:20a
    CRC      TXT      1358  11-15-84   8:00a
    CRCK4    COM      1536  10-21-82   7:54p
           19 file(s)     143260 bytes
                           12288 bytes free
