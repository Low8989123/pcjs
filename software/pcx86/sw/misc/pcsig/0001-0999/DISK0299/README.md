---
layout: page
title: "PC-SIG Diskette Library (Disk #299)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0299/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0299"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-SIG SAMPLER #9"

    System tools for everyone.  DOORS allows you to switch displays in
    mid- program, PARINT will keep the dreaded "parity error" from
    stopping you in mid-task, and PGBRK lets you print listings with
    proper page breaks.  And for you entertainment buffs, NUTREK is a Star
    Trek game featuring full screen-oriented control.  Several
    color-graphic test patterns are also included.
    
    System Requirements: Some programs require color graphics, BASIC.
    
    How to Start: To run an EXE or COM program simply type its name and
    press <ENTER>.  For instructions on running BASIC programs, please
    refer to the GETTING STARTED section in this catalog.  To read DOC
    files simply enter TYPE filename.ext and press <ENTER>.
    
    Suggested Registration: M.EXE $10.00;COMPACT.BAS and REFORM.BAS $30.00
    each.
    
    File Descriptions:
    
    CROSSWDS DAT  List of BASIC keywords
    CONTENTS DOC  Description of files on this disk
    MEMSET   BAS  Allows use of 640K memory in older PCs
    PGBRK    BAT  Produces printed listings with page breaks
    4BARLINK BAS  Animation program (requires color graphics)
    COMPACT  BAS  A program to compact BASIC programs
    M        EXE  A user-supported version of MEMSET - fast
    MEMINST  DAT  Used by MEMSET.BAS
    CHARDEFN BAS  Color graphics test patterns
    CONVERGE BAS  Color graphics test patterns
    BARS     BAS  Color graphics test patterns
    INTLCVID BAS  Color graphics test patterns
    MLTIBRST BAS  Color graphics test patterns
    ANIMATE  BAS  Color graphics test patterns
    TWOLINE  BAS  Color graphics test patterns
    PGBRK    BAS  Part of PGBRK
    PGBRK    BEG  Part of PGBRK
    PGBRK    END  Part of PGBRK
    DOORS    BAS  Permits you to switch between diskplay adapters
    PARINT   COM  Program to trap parity error interupts
    DOORS    COM  Permits you to switch between diskplay adapters
    PARINT   ASM  Assembly source code
    PARINT   LST  Assembler listing
    RED      ASM  Source code
    RED      COM  Rename files accross directories
    EPBENCHI BAS  Benchmark program
    NUTREK   BAS  Screen oriented startrek program
    MEGATREK BAS  Startrek type program
    RED      LST  Assembly listing
    4MSSTEP  COM  Sets floppy disk step interval down to 4 milliseconds
    DIFF     EXE  File comparison utility (handles files different sizes)
    NPAD     COM  Popup Electronic Notepad
    DISKMODP BAS  Faster, improved version of DISKMODF on #28
    DITHER   BAS  Generates 128 distinct colors on Tecmar Graphics-Master
    PERTCHRT BAS  Pertchart program
    BIRD     BAS  Sound effect program
    REFORM   BAS  Adds spaces to BASIC program required by PC
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## 4BARLINK.BAS

{% raw %}
```bas
1 ON ERROR GOTO 2000:DEFINT H-J
5 REM FOUR BAR LINKAGE ANIMATION BY DAVID W PESSEN, 1982
10 DIM X%(400),Y%(400),VEC%(26):K=1:CLS
20 PRINT :INPUT "LENGTH OF FIXED LINK R1";R1
30 INPUT "LENGTH OF DRIVING LINK R2";R2
40 INPUT "LENGTH OF COUPLER LINK R3";R3
50 INPUT "LENGTH OF DRIVEN LINK R4";R4
60 R(1)=R1:R(2)=R2:R(3)=R3:R(4)=R4
70 FOR H=1 TO 4
80 FOR J=1 TO 4
90 IF R(J)>MAX THEN MAX=R(J):N=J
100 NEXT J
110 L(H)=MAX:R(N)=0
120 MAX=0:NEXT H
130 IF L(1)<L(2)+L(3)+L(4) THEN 140
131 PRINT :PRINT "THE DIMENSIONS YOU CHOSE DO NOT FORM A CLOSED KINEMATIC CHAIN, SINCE THE"
132 PRINT "LONGEST LINK IS LONGER THAN THE SUM OF THE LENGTHS OF THE OTHER THREE LINKS."
133 PRINT "TRY AGAIN.":GOTO 20
140 IF L(1)+L(4)>L(2)+L(3)THEN 190
150 IF L(4)<>R1 AND (R1<>R3 OR R2<>R4) THEN 160
160 IF L(4)<>R2 OR R2=R4 THEN 170
161 PRINT :PRINT "MECHANISM IS A DOUBLE-CRANK MECHANISM":GOSUB 1000
170 IF L(4)<>R1 AND L(4)<>R2 THEN 190
180 GOTO 200
190 PRINT :PRINT "MECHANISM IS A DOUBLE-ROCKER MECHANISM, AND ONLY EXISTS FOR CERTAIN DRIVING-"
191 PRINT "LINK ANGLES.  RELAX TILL THE PROGRAM REACHES THOSE ANGLES.":GOSUB 1000
200 WID=R2+R4+(R1+ABS(R2-R4)+ABS(R1-ABS(R2-R4)))/2
210 IF R2<96 AND R4<96 AND WID<280 THEN 230
220 K=K*0.9:R1=R1*0.9:R2=R2*0.9:R3=R3*0.9:R4=R4*0.9:GOTO 200
230 X0=139-R1-R4+WID/2:Y0=95
240 PRINT :PRINT "SELECT NON-CROSSED (V=1) OR CROSSED (V=-1) SHAPE":INPUT "V=";V:PRINT :PRINT "COUPLER-POINT COORDINATES F, G":PRINT "(F MEASURED ALONG COUPLER LINK FROM END"
250 PRINT "OF DRIVING LINK, AND G MEASURED ALONG VERTICAL TO COUPLER LINK.)":INPUT "F,G=";F,G
260 PRINT :PRINT "SPECIFY ANGULAR STEPS (IN RADIANS) OF DRIVING LINK.":INPUT "STEP=";S
270 K1=R1/R2
280 K2=R1/R4
290 K3=(R2*R2-R3*R3+R4*R4+R1*R1)/(2*R2*R4)
300 K4=R1/R3
310 K5=(R4*R4-R1*R1-R2*R2-R3*R3)/(2*R2*R3)
311 FK=F*K:GK=G*K
316 ROT=0:SCALE=1
320 CLS:SCREEN 1,0,0,0:COLOR 0,1: REM HGR2 IN ORIGINAL
321 Q2=0
330 COSQ2=COS(Q2):A=K3-K1+(1-K2)*COSQ2
340 B=-2*SIN(Q2):BB=B*B
350 C=K1+K3-(1+K2)*COSQ2
360 D=K5-K1+(1+K4)*COSQ2
370 E=K5+K1-(1-K4)*COSQ2
380 IF(BB-4*A*C)<0 OR (BB-4*D*E)<0 THEN GOTO 540
390 Q4=2*ATN((-B-V*SQR(BB-4*A*C))/(2*A))
400 Q3=2*ATN((-B-V*SQR(BB-4*D*E))/(2*D))
410 XA=R2*COSQ2+X0
420 YA=R2*SIN(Q2)+Y0
430 XB=R4*COS(Q4)+X0+R1
440 YB=R4*SIN(Q4)+Y0
448 COSQ3=COS(Q3):SINQ3=SIN(Q3)
450 XP=XA+FK*COSQ3-GK*SINQ3
460 YP=YA+FK*SINQ3+GK*COSQ3
470 IF XP>0 AND XP<279.5 AND YP>0 AND YP<191.5 THEN I=I+1:X%(I)=INT(XP+0.5):Y%(I)=INT(YP+0.5)
480 LINE (X0,Y0)-(MA,NA),0:LINE (MA,NA)-(MB,NB),0:LINE (MB,NB)-(X0+R1,Y0),0
481 REM PRINT MA,NA,MB,NB:LOCATE MA,NA:PRINT "O":LOCATE MB,NB :PRINT "O"
490 LINE (X0,Y0)-(XA,YA),2:LINE (XA,YA)-(XB,YB),2:LINE (XB,YB)-(X0+R1,Y0),2
491 GOTO 492: PUT (X0,Y0),VEC%:PUT (XA,YA),VEC%:PUT (XB,YB),VEC%:PUT (X0+R1,Y0),VEC%
492 CIRCLE (X0,Y0),3,3,,,1:CIRCLE(XA,YA),2,2,,,1:CIRCLE(XB,YB),2,2,,,1:CIRCLE(X0+R1,Y0),3,3,,,1
500 FOR N=1 TO I
510 PSET (X%(N),Y%(N)):REM HPLOT X%(N),Y%(N)
520 NEXT
530 MA=XA:NA=YA:MB=XB:NB=YB
540 Q2=Q2+S:GOTO 330
1000 PRINT :PRINT "IF YOU WISH TO MAKE CHANGES, TYPE YES":PRINT "IF YOU WISH TO CONTINUE, TYPE GO"
1010 INPUT M$
1020 IF M$="yes" THEN K=1:GOTO 20
1030 IF M$="GO" THEN RETURN
1040 GOTO 1000
2000 COLOR 10,0: INPUT "READY";R$:SCREEN 0:PRINT "ERR=";ERR;" ERL=";ERL:PRINT "LIST ";ERL;:ON ERROR GOTO 0:STOP
```
{% endraw %}

## ANIMATE.BAS

{% raw %}
```bas
100 ' animate.bas
130 SCREEN 0:WIDTH 40:DIM A$(40):CLS:KEY OFF:DEFINT A-Z:D=1
140 INPUT "Display speed? 1=fast, 1000=slow ",S:CLS
160 'first write on all the pages
180 LOCATE 12,,0:A$="   *       *       *       *"
190 FOR PAGE=0 TO 7:SCREEN ,,PAGE:CLS:FOR V=0 TO 2
200 LOCATE V*8+1+PAGE,PAGE+1:PRINT A$;:NEXT V
210 LOCATE 22,19:PRINT "/\";
220 LOCATE 23,18:PRINT "/--\";
230 LOCATE 24,17:PRINT "/|  |\";
240 LOCATE 25,18:PRINT "| ";CHR$(219);"|";
250 LOCATE 2,33:PRINT "Page";PAGE;:NEXT PAGE:' show page no.
290 SCREEN ,,PAGE MOD 8:FOR B=1 TO S:NEXT B:PAGE=PAGE+1
300 IF INKEY$="" THEN 290 ELSE SCREEN ,,0:CLS:END
```
{% endraw %}

## BARS.BAS

{% raw %}
```bas
100 ' bars.bas see dec 11, 1984 pc magazine, p 419
130 KEY OFF: CLS:WIDTH 40:SCREEN 0,1
140 FOR R=1 TO 19:LOCATE R,3,0
150 COLOR 7,0,0:GOSUB 230:COLOR 14:GOSUB 230
160 COLOR 11: GOSUB 230: COLOR 2:GOSUB 230
170 COLOR 5:GOSUB 230:COLOR 4: GOSUB 230
180 COLOR 1:GOSUB 230:NEXT R
190 FOR R=20 TO 25:LOCATE R,8
200 COLOR 9: GOSUB 240: COLOR 7: GOSUB 240
210 COLOR 15: GOSUB 240:NEXT R
220 IF INKEY$="" THEN 220 ELSE COLOR 7,0:WIDTH 80:CLS:END
230 FOR P=1 TO 5:PRINT CHR$(219);: NEXT P:RETURN
240 FOR P=1 TO 10:PRINT CHR$(219);:NEXT P:RETURN
```
{% endraw %}

## BIRD.BAS

{% raw %}
```bas
5 FOR J=1 TO 5: GOSUB 40: NEXT J
10 END
40 FOR I=4000 TO 8000 STEP 500
50 IF I<>6000 THEN SOUND I, 2 ELSE SOUND I-3000, 3
55 SOUND 32767, 1
60 NEXT I
65 RETURN
```
{% endraw %}

## CHARDEFN.BAS

{% raw %}
```bas
100 ' CHARDEFN.BAS (SEE PAGE 423, DEC 11,1984 PC MAGAZINE)
130 DEF SEG=0
140 POKE &HE000,&H95:POKE &HE001,&H95
150 POKE &HE002,&H95:POKE &HE003,&HF5
160 POKE &HE004,&H95:POKE &HE005,&H95
170 POKE &HE006,&H94:POKE &HE007,&H95
190 'PUT THE LOCATION IN THE INTERRUPT TABLE
210 POKE 124,0:POKE 125,&HE0:POKE 126,0:POKE 127,0
230 'NOW SHOW IT
250 CLS:SCREEN 1
260 FOR N=1 TO 18:PRINT CHR$(128);" ";:NEXT N
```
{% endraw %}

## COMPACT.BAS

{% raw %}
```bas
10 CLEAR ,,1024:CLS:LOCATE 6,1:PRINT"COMPACTER PROGRAM FOR BASIC"
20 PRINT"COPYRIGHT (C) 1984 BY AUTOMATION DESIGN SERVICES"
30 PRINT:PRINT"THIS PROGRAM SUBSTITUTES MINIMUM LENGTH VARIABLE NAMES FOR PREVIOUSLY USED ":PRINT "VARIABLE NAMES AND PRODUCES A TRANSLATION TABLE."
50 PRINT:PRINT "STAND BY WHILE KEYWORD AND ERROR MESSAGE STRING ARRAYS ARE BEING SET UP":PRINT
55 PRINT "If you would like to obtain a faster, more comprehensive version of";
56 PRINT " this program";:PRINT "write to";
57 PRINT " Automation Design Services, P. O. Box 6246, Monona, WI 53716.  ";
58 PRINT "Ask for":PRINT "the quick compacter for BASIC programs, 'Quikpack', and enclose $30.  ";
59 PRINT "You will ":PRINT "receive a (PC/DOS 1.1 format) diskette.  It ";
60 PRINT "will contain a completely rewritten":PRINT "version of this program, compiled in C, ";
61 PRINT "which will run much faster than this ":PRINT "Version.  It will also handle multiple (chained) programs."
70 ON ERROR GOTO 5000: DEFINT A-Z: ECHO$="OFF"
71 DBG=0:PRINT "DBG=";DBG
75 REM VARNAM$(I,1) IS ORIGINAL NAME OF VARIABLE; VARNAM$(I,2) IS REPLACEMENT NAME; PTR(1) IS # OF SIMPLE INTEGER VARIABLES FOUND; PTR(2) IS # OF SIMPLE FLOATING VARIABLES FOUND; PTR(3) IS # OF SIMPLE DOUBLE VARIABLES FOUND; PTR(4) IS # OF SIMPLE STRING
76 REM VARIABLES FOUND; PTR(5) IS # OF ARRAY INTEGER VARIABLES FOUND; PTR(6) IS # OF ARRAY FLOATING VARIABLES FOUND; PTR(7) IS # OF ARRAY DOUBLE VARIABLES FOUND; PTR(8) IS # OF ARRAY STRING VARIABLES FOUND; PTR(9) IS # OF TOTAL ENTRIES IN VARNAM$ ARRAYS
80 SIZE=200:NKW=180:DIM RW$(NKW,2),WLEN(NKW),FIRST(26),LAST(26),MSG$(73),VARNAM$(SIZE,2),PTR(10),LTRDEF(26),TYP$(8)
81 MSG$(1)="NEXT WITHOUT FOR":MSG$(2)="SYNTAX ERROR":MSG$(3)="RETURN WITHOUT GOSUB":MSG$(4)="OUT OF DATA":MSG$(5)="ILLEGAL FUNCTION CALL":MSG$(6)="OVERFLOW"
82 MSG$(7)="OUT OF MEMORY":MSG$(8)="UNDEFINED LINE NUMBER":MSG$(9)="SUBSCRIPT OUT OF RANGE":MSG$(10)="DUPLICATE DEFINITION":MSG$(11)="DIVISION BY ZERO"
83 MSG$(12)="ILLEGAL DIRECT":MSG$(13)="TYPE MISMATCH":MSG$(14)="OUT OF STRING SPACE":MSG$(15)="STRING TOO LONG":MSG$(16)="STRING FORMULA TOO COMPLEX"
84 MSG$(17)="CAN'T CONTINUE":MSG$(18)="UNDEFINED USER FUNCTION":MSG$(19)="NO RESUME":MSG$(20)="RESUME WITHOUT ERROR":MSG$(21)="":MSG$(22)="MISSING OPERAND"
85 MSG$(23)="LINE BUFFER OVERFLOW":MSG$(24)="DEVICE TIMEOUT":MSG$(25)="DEVICE FAULT":MSG$(26)="FOR WITHOUT NEXT":MSG$(27)="OUT OF PAPER":MSG$(29)="WHILE WITHOUTWEND": MSG$(30)="WEND WITHOUT WHILE":MSG$(50)="FIELD OVERFLOW"
86 MSG$(51)="INTERNAL ERROR":MSG$(52)="BAD FILE NUMBER":MSG$(53)="FILE NOT FOUND":MSG$(54)="BAD FILE MODE":MSG$(55)="FILE ALREADY OPEN":MSG$(57)="DEVICE IO ERROR":MSG$(58)="FILE ALREADY EXISTS":MSG$(61)="DISK FULL"
87 MSG$(62)="INPUT PAST END":MSG$(63)="BAD RECORD NUMBER":MSG$(64)="BAD FILE NAME":MSG$(66)="DIRECT STATEMENT IN FILE":MSG$(67)="TOO MANY FILES":MSG$(68)="DEVICE UNAVAILABLE":MSG$(69)="COMMUNICATIONS BUFFER OVERFLOW"
88 MSG$(70)="DISK WRITE PROTECT":MSG$(71)="DISK NOT READY":MSG$(72)="DISK MEDIA ERROR":MSG$(73)="ADVANCED FEATURE"
100 '
110 ' RESERVED WORDS
120 '
130 DATA ABS,ALL,AND,APPEND,ASC(,AS,ATN,AUTO,BEEP,BLOAD,BSAVE:REM 1-11
131 DATA CALL,CDBL,CHAIN,CHDIR,CHR$(,CINT,CIRCLE:REM 12-18
135 DATA CLEAR,CLOSE,CLS,COLOR,COMMON,COM,CONT:REM 19-25
140 DATA COS,CSNG,CSRLIN,CVD,CVI,CVS,DATA,DATE$:REM 26-33
150 DATA DEFDBL,DEFINT,DEFSNG,DEFSTR,DEF FN, DEF SEG,DEF USR,DELETE,DIM,DRAW:REM 34-43
159 DATA EDIT,ELSE,END,ENVIRON$,ENVIRON,EOF,EQV,ERASE,ERDEV$,ERDEV,ERL,ERROR,ERR,EXP,FIELD,FILES,FIX,FOR,FRE:REM 44-62
170 DATA GET,GOSUB,GOTO,HEX$:REM 63-66
180 DATA IF,IMP,INKEY$,INPUT$,INPUT#,INPUT,INP,INSTR,INTER$,INT(,IOCTL$,IOCTL,KEY$,KEY,KILL,LEFT$(,LEN,LET,LINE:REM 67-85
190 DATA LLIST,LIST,LOAD,LOCATE,LOC,LOF,LOG,LPOS,LPRINT,LSET,MERGE,MID$(,MKDIR,MKD$(,MKI$(:REM 86-100
200 DATA MKS$(,MOD,MOTOR,NAME,NEW,NEXT,NOT,OCT$,OFF,ON,OPEN,OPTION BASE,OR,OUTPUT,OUT,PAINT,PEEK:REM 101-117
210 DATA PEN,PLAY,PMAP,POINT,POKE,POS,PRESET,PRINT#,PRINT,PSET,PUT:REM 118-128
220 DATA RANDOMIZE,READ,REM,RENUM,RESET,RESTORE,RESUME,RETURN,RIGHT$(,RMDIR,RND(,RSET,RUN:REM 129-141
230 DATA SAVE,SCREEN,SGN,SHELL,SIN,SOUND,SPACE$(,SPC(,SQR,STEP,STICK,STOP,STR$(:REM 142-154
240 DATA STRIG,STRING$,SWAP,SYSTEM,TAB(,TAN,THEN,TIME$,TIMER,TO,TROFF,TRON:REM 155-166
250 DATA USING,USR,VAL,VARPTR$,VARPTR,VIEW,WAIT,WEND,WHILE,WIDTH,WINDOW,WRITE#,WRITE,XOR: REM 167-180
260 REM ALPHA ORDER IS: A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z
265 DATA 1,8,9,11,12,31,32,43,44,57,58,62,63,65,66,66,67,78,0,0,79,81,82,95,96,103,104,107,108,115,116,128
266 DATA 0,0,129,141,142,158,159,166,167,168,169,172,173,179,180,180,0,0,0,0
270 FOR I=1 TO NKW
275 READ RW$(I,1):RW$(I,2)="":IF DBG=1 THEN PRINT "RW$(";I;",1)=";RW$(I,1)
280 FOR J=1 TO LEN(RW$(I,1)): A=ASC(MID$(RW$(I,1),J,1)):IF A<91 AND A>64 THEN A=A+32
281 RW$(I,2)=RW$(I,2)+CHR$(A)
290 NEXT J:NEXT I
320 FOR I=1 TO 26: READ FIRST(I),LAST(I):NEXT I
330 FOR I=1 TO NKW: WLEN(I)=LEN(RW$(I,1)):NEXT: REM BUILD LENGTH TABLE
400 GOTO 2000
500 CLS: PRINT "PROGRAM COMPACT":PRINT "READY----":PRINT:PRINT "OUTPUT FILE WILL HAVE TYPE .ASC WHILE INPUT FILE WILL BE RETYPED TO .SRC":PRINT "A TEMPORARY FILE WITH TYPE .CNV WILL ALSO BE CREATED":INPUT "ENTER NAME OF FILE TO BE COMPACTED";F0$
510 PRINT "FILE NAME RECEIVED IS--";F0$;"--IS THIS CORRECT?":INPUT YN$:IF YN$="Y" OR YN$="y" OR YN$="YES" OR YN$="yes" THEN GOTO 520 ELSE GOTO 500
520 F1$=F0$+".ASC": F2$=F0$+".CNV": F3$=F0$+".SRC"
523 TYP$(1)="%":TYP$(2)="!":TYP$(3)="#":TYP$(4)="$":FOR I=5 TO 8:TYP$(I)=TYP$(I-4):NEXT I
525 FOR I=1 TO 9: PTR(I)=0:NEXT I
528 FOR I=1 TO 26:LTRDEF(I)=2:NEXT I
530 OPEN F1$ FOR INPUT AS #1: OPEN F2$ FOR OUTPUT AS #2
540 REM START INPUT OF FILE
550 LINE INPUT #1,RAW$: PROC$="":TF=0
551 IF TF=1 THEN GOTO 712
553 IND=ASC(LEFT$(RAW$,1))
560 IF IND<65 OR IND>122 OR (IND>90 AND IND<97) THEN GOTO 700
570 IF IND>96 THEN GOTO 800
600 REM UPPER CASE A-Z IND=65 TO 90
610 SFI=IND-64: COL=1: GOSUB 1000: GOTO 900
700 REM CHARACTER OTHER THAN A-Z, a-z
701 REM FAST HANDLING FOR QUOTE STRINGS
702 IF IND<>34 THEN GOTO 710
703 B=INSTR(2,RAW$,CHR$(34)):APP$="": IF B>1 THEN GOTO 708 ELSE GOTO 704
704 RAW$=RAW$+CHR$(34):GOTO 703
708 PROC$=PROC$+LEFT$(RAW$,B): RAW$=RIGHT$(RAW$,LEN(RAW$)-B):GOTO 900
710 IF IND<>39 THEN GOTO 711 ELSE GOTO 712
711 RAW$=RIGHT$(RAW$,LEN(RAW$)-1):PROC$=PROC$+CHR$(IND):GOTO 900
712 PROC$=PROC$+RAW$: RAW$="": GOTO 950
713 REM ABOVE LINE PROCESSES COMMENTS INITIATED BY ' OR REM, AND DATA LINES
800 REM LOWER CASE a-z IND= 97 TO 122
810 SFI=IND-96:COL=2:GOSUB 1000: GOTO 900
900 REM CHECK FOR END OF INPUT LINE, END OF FILE
910 IF LEN(RAW$)<=0 THEN GOTO 950 ELSE GOTO 551
950 PRINT #2,PROC$: IF ECHO$="ON" THEN PRINT PROC$
960 IF EOF(1) THEN GOTO 970 ELSE GOTO 550
970 CLOSE:GOSUB 11000
975 NAME F1$ AS F0$+".SRC"
980 NAME F2$ AS F0$+".ASC": GOTO 2000
1000 START=FIRST(SFI): FINISH=LAST(SFI)
1005 IF START=0 AND FINISH=0 THEN GOTO 1040
1010 FOR I=START TO FINISH
1011 REM TEST FOR KEYWORD MATCH
1020 WL=WLEN(I): IF LEFT$(RAW$,WL)=RW$(I,COL) THEN GOTO 1050
1030 NEXT
1040 REM FIRST LETTER OF A VARIABLE NAME HAS BEEN DETECTED
1045 GOTO 1100
1050 RAW$=RIGHT$(RAW$,LEN(RAW$)-WL): PROC$=PROC$+RW$(I,COL)
1051 IF I=51 THEN GOSUB 14000
1053 IF I=32 OR I=131 THEN TF=1
1054 IF I>33 AND I<41 THEN GOSUB 10000
1055 RETURN
1100 REM FIND THE END OF THE VARIABLE NAME
1102 IF IND=72 AND RIGHT$(PROC$,1)="&" THEN 12000
1105 GOSUB 13000
1206 IF TYP1=0 THEN TYP1=LTRDEF(SFI)
1210 TYP=TYP1+4*TYP2:IF DBG=1 THEN PRINT "LINE 1210--TYP=";TYP
1220 REM NEXT, CHECK WHETHER THIS IS A NEW OR OLD VARIABLE
1230 FOR I=1 TO PTR(9)
1240 IF VARNAM$=VARNAM$(I,1) THEN 1300
1250 NEXT I
1260 REM NEW VARIABLE NAME FOUND
1270 GOSUB 7000:I=PTR(9)
1300 REM PREVIOUSLY FOUND VARIABLE
1310 PROC$=PROC$+VARNAM$(I,2):RETURN
2000 CLOSE: PRINT "ENTER--":PRINT "   A TO PROCESS ANOTHER FILE":PRINT "   C TO OBTAIN A LIST OF THE FILES ONLINE":PRINT "   E TO CHANGE OR EXAMINE ECHO PRINT SETTING":PRINT "   P TO PRINT A LISTING OF A FILE":PRINT "   S TO STOP"
2010 INPUT C$: IF C$="A" OR C$="a" THEN GOTO 500 ELSE IF C$="c" OR C$="C" THEN GOTO 2100 ELSE IF C$="e" OR C$="E" THEN GOTO 6000 ELSE IF C$="P" OR C$="p" THEN GOTO 2200 ELSE IF C$="S" OR C$="s" THEN GOTO 4000
2020 PRINT "NO MATCH FOUND FOR RESPONSE":GOTO 2000
2100 FILES "A:*.*": FILES "B:*.*":GOTO 2000
2200 REM PRINT A FILE, BUT FIRST ASK WHICH
2201 GOSUB 2210
2202 GOSUB 2205
2203 IF CL=0 THEN GOSUB 2215 ELSE GOTO 2000
2204 GOTO 2202
2205 LOCATE 1,1: PRINT "PROGRAM COMPACT":LOCATE 1,40: PRINT "FILE ";F4$;" LISTING":LOCATE 2,1: PRINT "SCREEN ";J+1;:LOCATE 2,15:PRINT "FILE SIZE>=";M;:LOCATE 2,33:PRINT " BYTES";:LOCATE 2,60 : PRINT "FILE LENGTH>=";L:RETURN
2210 CLS: INPUT "WHICH FILE (INCLUDE FILE TYPE HERE ONLY)";F4$:OPEN F4$ FOR INPUT AS #1:PRINT "FILE RECEIVED AS ";F4$;:INPUT "----IS THIS CORRECT";YN$:IF YN$="Y" OR YN$="y" OR YN$="YES" OR YN$="yes" THEN GOTO 2211 ELSE GOTO 2213
2211 L=0:M=0:I=0: J=0: CL=0: CLS: RETURN
2213 CLOSE #1: GOTO 2210
2215 LIN=18: FOR I=1 TO LIN
2218 IF EOF(1) THEN GOTO 2250
2219 LOCATE 2+I,1:L=L+1
2220 LINE INPUT #1,A$: A=LEN(A$): M=M+A
2221 IF A>80 THEN GOTO 2225
2222 PRINT A$;SPACE$(80-A);: GOTO 2230
2225 PRINT A$;SPACE$(80-(A MOD 80));: I=I+INT((A-1)/80):GOTO 2230
2230 NEXT: J=J+1:FOR IJ=I TO 19:LOCATE 2+IJ,1:PRINT SPACE$(80);:NEXT IJ: I=0
2240 LOCATE 22,1:INPUT "STRIKE ENTER FOR NEXT SCREEN OF LISTING";N$: RETURN
2250 PRINT "***END OF FILE***                                                             ":CLOSE #1: CL=1: FOR IEND=I TO 19
2260 PRINT SPACE$(80);: NEXT :INPUT "STRIKE ENTER TO RETURN TO MENU";N$:CLS:PRINT "PROGRAM COMPACT";SPACE$(66);:RETURN
4000 ON ERROR GOTO 0: STOP
5000 REM ERROR TRAPPING
5002 IF ERR=5 AND ERL=2220 AND LEN(A$)>80 THEN PRINT "***FILE CONTAINS RECORDS LONGER THAN 80 CHARACTERS--":PRINT "THIS FILE IS NOT IN ASCII FORMAT, BUT IN BINARY FORMAT.***":RESUME 2000
5003 IF ERR=53 THEN PRINT MSG$(ERR): RESUME 2000
5100 IF ERR=55 THEN CLOSE: RESUME
5110 IF ERR=58 AND ERL=975 THEN KILL F0$+".SRC":RESUME 975
5113 IF ERR=58 AND ERL=11001 THEN KILL F0$+".TRN":RESUME 11001
5116 IF ERR=58 AND ERL=980 THEN KILL F0$+".ASC":RESUME 980
5200 PRINT "ERROR NO. ";ERR;" OCCURS AT LINE NO. ";ERL:PRINT MSG$(ERR):CLOSE:RESUME 2000
6000 CLS: PRINT"PROGRAM COMPACT      ECHO PRINT TO SCREEN IS NOW "; ECHO$
6010 INPUT "DO YOU WANT TO CHANGE THE SETTING";YN$
6020 IF YN$="Y" OR YN$="y" OR YN$="YES" OR YN$="yes" THEN GOTO 6030 ELSE GOTO 6040
6030 IF ECHO$="ON" THEN ECHO$="OFF" ELSE IF ECHO$="OFF" THEN ECHO$="ON"
6040 GOTO 2000
7000 REM ADD VARIABLE NAME TO ARRAY
7002 PTR(TYP)=PTR(TYP)+1:GOSUB 8000
7005 PTR(9)=PTR(9)+1:VARNAM$(PTR(9),1)=VARNAM$:VARNAM$(PTR(9),2)=NUNAM$:IF DBG=1 THEN PRINT "LINE 7005--NEW VAR. NAME; TYP=";TYP;" PTR(TYP)=";PTR(TYP);" PTR(9)=";PTR(9);" VARNAM$=";VARNAM$;" NUNAM$=";NUNAM$
7910 IF PTR(9)>0.97*SIZE THEN PRINT "THIS PROGRAM CAN HANDLE UP TO ";SIZE;" VARIABLES TOTAL.  THIS LIMIT IS BEING APPROACHED"
7920 RETURN
8000 REM GENERATE A NEW NAME FOR THE VARIABLE FOUND, SINCE IT IS A NEW VARIABLE; ADD EXPLICIT TYPING ONLY IF TYPE DOES NOT MATCH THE DEFINT OR DEFAULT
8010 GOSUB 9000:IF TYP1<>LTRDEF(ASC(LEFT$(N$,1))-64) THEN N$=N$+TYP$(TYP)
8020 NUNAM$=N$:IF TYP>4 THEN NUNAM$=NUNAM$+"("
8030 RETURN
9000 REM FORM THE START OF THE NEW NAME
9010 N$=CHR$((PTR(TYP)-1) MOD 26 + 65)
9020 IF PTR(TYP)<26.5 THEN 9045
9030 REM WRAPAROUND OF LABELING
9040 N$=N$+CHR$(INT((PTR(TYP)-1)/26+47))
9045 IF DBG=1 THEN PRINT "LINE 9040--N$=";N$;" PTR(TYP)=";PTR(TYP);" CHR$(INT((PTR(TYP)-1)/26+47))=";CHR$(INT((PTR(TYP)-1)/26+47))
9050 RETURN
10000 REM SPECIAL HANDLING FOR DEFDBL,DEFINT,DEFSNG,DEFSTR, DEF FN, DEF SEG, DEF USR (I=34-40)
10015 ON I-33 GOTO 10016, 10017, 10018, 10019, 10920, 10950, 10500
10016 TYP=3:GOTO 10020
10017 TYP=1:GOTO 10020
10018 TYP=2:GOTO 10020
10019 TYP=4:GOTO 10020
10020 REM PARSE DEFTYPE LINE
10025 RANGE$=""
10030 CHAR=ASC(LEFT$(RAW$,1)):RAW$=RIGHT$(RAW$,LEN(RAW$)-1)
10040 PROC$=PROC$+CHR$(CHAR):IF CHAR=32 THEN 10030
10050 IF CHAR=44 THEN GOSUB 10100
10060 IF CHAR=45 THEN 10030
10065 IF CHAR=13 OR CHAR=58 THEN GOSUB 10100:RETURN
10070 RANGE$=RANGE$+CHR$(CHAR):IF DBG=1 THEN PRINT "RANGE$=";RANGE$;"|"
10072 IF LEN(RAW$)<1 THEN GOSUB 10100:RETURN ELSE GOTO 10030
10100 REM SET LTRDEF ELEMENTS TO TYPE TYP
10110 ON LEN(RANGE$) GOTO 10120, 10150
10120 LTRDEF(ASC(LEFT$(RANGE$,1))-64)=TYP:RETURN
10150 FOR J=ASC(LEFT$(RANGE$,1))-64 TO ASC(RIGHT$(RANGE$,1))-64
10155 IF DBG=1 THEN PRINT "LTRDEF(";J;"=";TYP
10160 LTRDEF(J)=TYP:NEXT J
10170 RETURN
10500 REM ADD SECTION FOR DEF USR HERE
10505 BEEP:PRINT "DEF USR ROUTINE NOT IMPLEMENTED YET"
10510 RETURN
10900 REM DEF FNXXX
10920 GOSUB 1100: TYP=10:GOSUB 9000:NUNAM$="FN"+N$
10930 IF RIGHT$(VARNAM$,2)="%("THEN NUNAM$=NUNAM$+"%(" ELSE IF RIGHT$(VARNAM$,2)="$("THEN NUNAM$=NUNAM$+"$(" ELSE IF RIGHT$(VARNAM$,2)="!("THEN NUNAM$=NUNAM$+"!(" ELSE IF RIGHT$(VARNAM$,2)="#("THEN NUNAM$=NUNAM$+"#("
10940 VARNAM$(PTR(9),2)=NUNAM$:RETURN
10950 RETURN
11000 REM PUT THE VARIABLE TRANSLATION TABLE IN FILE F0$.TRN
11001 OPEN F0$+".TRN" FOR OUTPUT AS #3
11010 PRINT #3,"VARIABLE TRANSLATION TABLE":PRINT #3,"OLD NAME    NEW NAME"
11020 FOR I=1 TO PTR(9)
11030 PRINT #3,USING "\           \  \      \";VARNAM$(I,1),VARNAM$(I,2)
11040 NEXT I
11050 CLOSE 3: RETURN
12000 REM handle a hexadecimal constant
12010 PROC$=PROC$+"H":RAW$=RIGHT$(RAW$,LEN(RAW$)-1)
12020 CHAR=ASC(LEFT$(RAW$,1))
12030 IF (CHAR>47 AND CHAR<58) OR (CHAR>64 AND CHAR<71) THEN PROC$=PROC$+CHR$(CHAR):RAW$=RIGHT$(RAW$,LEN(RAW$)-1) ELSE RETURN
12040 IF LEN(RAW$)<1 THEN RETURN ELSE GOTO 12020
13000 REM ROUTINE TO FIND VARIABLE NAME IN RAW STRING
13105 VARNAM$="":TYP1=0:TYP2=0:TERM=0
13106 REM TYP1 IS 1 FOR INTEGER, 2 FOR SINGLE PREC, 3 FOR DOUBLE, 4 FOR STRING;  TYP2 IS 0 FOR SIMPLE VARIABLE, 1 FOR ARRAY VARIABLE
13110 IF LEN(RAW$)>0 THEN CHAR=ASC(LEFT$(RAW$,1)):RAW$=RIGHT$(RAW$,LEN(RAW$)-1) ELSE RAW$="":CHAR=0:TERM=1:GOTO 13204
13120 IF(CHAR<91 AND CHAR>64)OR(CHAR>96 AND CHAR<123)OR(CHAR>47 AND CHAR<58)OR CHAR=46 THEN 13200
13125 IF CHAR=36 THEN TYP1=4:GOTO 13200
13130 IF CHAR=37 THEN TYP1=1:GOTO 13200
13135 IF CHAR=33 THEN TYP1=2:GOTO 13200
13140 IF CHAR=35 THEN TYP1=3:GOTO 13200
13145 IF CHAR=40 THEN TYP2=1:TERM=1:GOTO 13200
13150 IF CHAR=32 OR CHAR=34 OR CHAR=13 OR(CHAR<63 AND CHAR>57)OR(CHAR<46 AND CHAR>40)OR CHAR=47 THEN TERM=1:RAW$=CHR$(CHAR)+RAW$:CHAR=0:GOTO 13200
13200 IF CHAR>0 THEN VARNAM$=VARNAM$+CHR$(CHAR)
13201 IF TERM=0 THEN GOTO 13110
13203 IF DBG=1 THEN PRINT "LINE 13203--VARNAM$=";VARNAM$;" CHAR=";CHAR;" SFI=";SFI;" LTRDEF(SFI)=";LTRDEF(SFI)
13204 RETURN
14000 REM ROUTINE TO HANDLE ERASE STATEMENT
14010 GOSUB 13000
14020 REM SEARCH FOR VARNAM$ IN LIST OF VARIABLES FOUND
14030 IF LEN(VARNAM$)>0 THEN 14032 ELSE 14110
14032 VARNAM$=VARNAM$+"(": FOR I=1 TO PTR(9)
14040 IF VARNAM$(I,1)=VARNAM$ THEN 14100
14050 NEXT I
14060 PRINT "WARNING--NO VARIABLE NAME SUBSTITUTION FOUND FOR VARIABLE '";VARNAM$;"' IN ":PRINT "ERASE STATEMENT.  THIS WILL CAUSE PROGRAM ERRORS.":BEEP
14070 RETURN
14100 PROC$=PROC$+RIGHT$(VARNAM$(I,2),LEN(VARNAM$(I,2))-1)
14110 RETURN
```
{% endraw %}

## CONTENTS.DOC

{% raw %}
```
Crosswds.dat contains the BASICA keywords which are to be excluded 
from crossreferencing.  This file is for use with the excellent cross 
reference utility made available by Computerenergy Inc.  for IBM PC 
BASIC programs.  

Memset.bas, along with meminst.dat, permits use of 640k of memory 
even in systems on which the maximum switch setting is 544k.  The 
program also initializes the added portion, so that you won't get 
shot down with a parity error if a location is erroneously read 
before anything is written to it.  

M.exe, along with meminst.dat, performs the same function as memset, 
but much faster.  This is user-supported software; users wishing to 
contribute to its further development and receive information on any 
updates available may send $10 to ADS, P. O. Box 6246, Monona WI 
53716.  

Compact.bas approaches the problem of squeezing BASIC programs in a 
completely different way than programs such as squish, which delete 
remarks and some spaces.  Compact performs a sequential variable name 
substitution, beginning with A, B, C,...,Z,A0,...  in the order in 
which new variables are encountered.  It permits development of a 
program with understandable names, and then when space gets tight, 
compact can be run to shrink the program.  Compact produces a 
translation table of old and new variable names.  For truly tight 
space constraints, both compact and a squish-type approach can be 
used.  Compact.bas has some restrictions; for example, two or more 
programs which are to be chained together will receive different 
translations and so will not work together; it also will not handle 
programs in which there is a DEFtype statement affecting the type of 
a variable after the first use of the variable or in which there is 
more than one DEFtype statement affecting the type of a variable (use 
of DEFtype statements in this way is to be discouraged as it makes 
programs harder to understand and incompatible with the basic 
compiler from IBM); and other restrictions may also apply.  A much 
faster version of this program is available from ADS, P. O. Box 6246, 
Monona WI 53716 for $30.  It also handles chained programs correctly.  
As an example, compact has been run on itself, producing compact.asc 
and compact.trn from compact.src.  The savings in size is about 8 
percent in this case.  The program COMPACT.BAS may not be sold for 
profit, incorporated in other programs to be sold for profit, or 
distributed in altered form except with the express permission of 
ADS.  It is provided as a working demo, and may be distributed to 
other users as such.  

4barlink.bas is a four-bar linkage animator published in Mechanical 
Engineering magazine, October 1984, pages 33-35.  Run this on the 
color graphics adapter.  

Bars.bas, Converge.bas, Mltibrst.bas, twoline.bas, animate.bas, 
intlcvid.bas, scrnmove.bas, and chardefn.bas are all from David 
Powell's article in PC magazine, page 418-424.  Try them on the color 
graphics adapter.  Some are better on a composite monitor than on an 
RGB.  

Pgbrk.bat is a batch file which produces listings with top and bottom 
margins (user selectable).  To use this file you must first run 
pgbrk.bas to create the files pgbrk.beg and pgbrk.end.  These files 
will contain the control characters needed to set up the skip-over-
perf on an Epson (MX80 family) printer, and to return it to the 
default setting, respectively.  Pgbrk.bas may be modified to give any 
number of lines skipped at the perf, so long as it is fewer than the 
page length.  

Doors.com is a program which gives the PC user greater control over 
multiple display adapters.  If you have both the monochrome and color 
graphics adapters, Doors permits you to switch back and forth when in 
PC-DOS or in an application program, unlike the mode command, which 
works only from PC-DOS prompts.  Doors.com is to be run once (as in 
an autoexec.bat file).  It loads and stays resident.  Then when the 
key combination Alt-right shift is pressed, the contents of the 
active display will be copied to the other display and the active 
display will be switched.  If the transfer would be from the 
color/graphics adapter to the monochrome adapter and the 
color/graphics adapter is in 40 column mode or a graphics mode, no 
information transfer or display switch is performed.  The program 
Doors was written by John Dickinson and was published in the February 
5, 1985 issue of PC Magazine, pages 273 to 277.  

Parint.asm contains the source assembler code for a program which 
traps parity error interrupts on the IBM PC.  Instead of stopping 
your computer dead in its tracks with a "parity error" message on 
screen, it will print a notice of the parity error and the time at 
which it occurred, on your printer if available, or on the console 
screen otherwise.  This program was published in PC Magazine, January 
22, 1985, pages 309-315.  To use the program, assemble and link it.  
Then run exe2bin (supplied with DOS) to convert the executable to a 
binary file.  Rename the binary output file to type ".com" 
(Parint.com).  Copy it to your working DOS disk and add a line to 
your autoexec.bat file: "Parint".  This will cause the parint program 
to load and stay resident when you turn the power on, or reset your 
system.  With parint in place, you need never lose a couple of hours 
work to a parity error.  

RED.com is a program to rename files across subdirectories without 
requiring the files themselves to be copied.  This is done by 
changing the directory entries through PC-DOS function calls, 
providing a feature which should have been included in PC-DOS but 
wasn't.  Syntax is very similar to that of the copy command, but 
execution is far faster, since very few locations must be changed.  
RED permits the use of wildcard characters, and performs error 
checking on its parameters.  Its use is naturally restricted to the 
target and source drives being identical.  RED does not permit 
simultaneously renaming the files.  If you forget the syntax, type 
RED with no parameters.  RED will show you the proper syntax in the 
usual PC-DOS form and then terminate.  The program RED was developed 
by John Dickinson and published in PC Magazine, February 19, 1985, 
pages 245 to 255.  Corrections to the (erroneous) published version 
were made by Ken Kriesel.  

Nutrek is a Startrek program rewritten specifically for the IBM PC 
which is completely screen oriented:  its user interface has designed 
into it the heads-up display a starship commander would need in order 
to make quick effective decisions.  The Nutrek program is based on 
Megatrek on this disk, from PC-SIG DISK #?.  

Epbenchi.bas is a benchmark program.  List it and see how your 
favorite language compares with some of the others available.  

Reform.bas is a utility program which puts into an ascii-saved basic 
program the spaces that IBM basic requires but some other basics do 
not.  Use this program to save some of the tedium of converting 
programs from one basic dialect to another.  A much faster version of 
this program is available for $30 from ADS, P. O. Box 6246, Monona WI 
53716.  The program "REFORM.BAS" is not to be sold for profit or 
incorporated into other programs sold for profit without the express 
agreement of ADS.  It is provided as a demo, and may be distributed 
to other users as such.  The program may not be distributed in 
modified form without the express agreement of ADS.  

Bird.bas is a short sound effect program.  

Pertchrt.bas is an IBM-PC conversion of the pertchart program 
published for the TRS-80 in the May 1982 Byte magazine, page 469.  

Dither.bas demonstrates the production of 128 distinct colors using 
the Tecmar Graphics Master board.  

Diskmodp is a modification of the floppy disk modification program 
diskmodf offered on PC-SIG disk 28.  To make finding the information 
you are looking for easier, several new commands have been added in 
the sector view/alter portion.  These are: move ahead one sector (a), 
back one sector (b), ahead one track (t), back one track (y), and 
toggle side for dual sided diskettes (s).  The track and sector 
increment and decrement functions include fully automatic wraparound.  
Other new features are the capability to handle 9 sector per track 
diskettes (and to automatically detect whether a disk is 8 or 9 track 
format), and a hex printer dump copy (c).  Finally, the code which 
converts the sector buffer to a screen display has been rewritten in 
assembler and the remaining print statements optimized.  Using this 
program, it is now possible to page through the sectors at a rate of 
over one sector per second.  Previously, the program execution 
required about 9 seconds, and the drive, track, side and sector had 
to be entered each time, limiting paging to about 3 per minute.  
These modifications were written by Ken Kriesel, and incorporate the 
FULSCRN subroutine by David McManigal published in the August 21, 
1984 issue of PC.  If you ever have to look at many sectors on a 
disk, as I did in recovering data for which no backup copy existed 
when the FAT on an important disk was overwritten by some COMMERCIAL 
software, you'll come to appreciate the speed and convenience of 
paging from one sector to another.  

Npad.com provides a small popup memo pad in the right hand corner of 
your screen.  It is activated by typing npad ONCE or including npad 
in your autoexec.bat file.  To make the memo pad appear, type CTRL-n.  
Type your memo and when finished type CTRL-n again to make it 
disappear.  Until reboot or powerdown, the memo may be recalled with 
CTRL-n.  The "Del" key erases the entire memo; the delete key above 
the carriage return deletes single characters including carriage 
returns.  See the source article for npad, PC Magazine, December 25, 
1984, page 269 by Steve Holzner to customize npad for other trigger 
characters.  

4MSSTEP.COM contains a very short program which reduces floppy disk
track-to-track step times to 4 milliseconds.  This is best invoked 
from the autoexec.bat file.  (Most 5.25" floppy drives are specified
to operate as fast as 3 milliseconds.)  This will save you time doing
backups or formatting.

Diff.exe adds a bit of capability beyond DOS's comp command.  Diff
performs a record by record compare, and is intended for text-like 
files.  Just type "DIFF" to use it.  Comparison stops when one file's 
set of records is exhausted.  Remaining records in the other file are
then listed.  Dissimilar records are printed out to show the user how 
the files differ.  The program is a demo; added features are 
available for those who send in $10 to ADS, PO Box 6246, Monona WI 53716.  
Among the features added are resynchronizing on matching records after
a section of no matches, and entry of file names from the command line.


Some of the memory-resident utilities on this disk can be combined in 
ways that are more useful than individually.  For example, if you 
activate npad in your autoexec.bat file when one display is active, 
and then use doors to switch displays after creating a directory, 
subsequent use of npad is still done on the display that was active 
when npad was invoked.  This permits using one display as a sort of 
clipboard and the other for most work.  

There are some interactions: npad changes attributes such as color on 
the characters it overlays; and as with most memory-resident 
utilities, there are certain incompatibilities (keeper, doors and 
npad interact unless activated in the proper order).  
The command file 4msstep sets the time between track stepper steps
on the floppy disk drives at 4 msec.  This produces less noise and
quicker access to data, and probably less wear as well.






```
{% endraw %}

## CONVERGE.BAS

{% raw %}
```bas
100 'converge.bas see dec 11 1984 pc magazine p 419
130 CLS:KEY OFF:SCREEN 2
140 FOR V=0 TO 200 STEP 20
150 LINE (1,V)-(640,V):NEXT V
160 FOR H=0 TO 640 STEP 40
170 LINE (H,0)-(H,200):NEXT H
180 FOR PV=10 TO 190 STEP 20
190 FOR PH=20 TO 630 STEP 40
200 PSET (PH,PV):NEXT PH:NEXT PV
210 IF INKEY$="" THEN 210 ELSE CLS:END
```
{% endraw %}

## DISKMODP.BAS

{% raw %}
```bas
8 CLEAR ,&H8B00: KEY OFF
9 DEFINT A-Z
10 REM FULSCRN (SEE PC MAGAZINE, AUGUST 21, 1984, PAGES 225-236
27 DIM CODEF%(47),CODEC%(60): A%=0: I%=0: J%=0: C%=0
40 DEF SEG: A%=VARPTR(CODEF%(1)): C%=VARPTR(CODEC%(1))
50 FOR I%=1 TO 93: READ J%: POKE A%,J%: A%=A%+1: NEXT I%
60 DATA &H55,&H8B,&HEC,&H06,&HBB,&H00,&HB0,&H2B
70 DATA &HC9,&HFC,&H8E,&HC1,&H26,&H8B,&H3E,&H4E
80 DATA &H04,&HB4,&H19,&H26,&H8A,&H16,&H49,&H04
90 DATA &H80,&HEA,&H07,&H74,&H1B,&HB7,&HB8,&H80
100 DATA &HC2,&H03,&H78,&H02,&HB4,&HC8,&HBA,&HDA
110 DATA &H03,&HEC,&HA8,&H08,&H74,&HFB,&HBA,&HD8
120 DATA &H03,&H26,&HA0,&H65,&H04,&H24,&HF7,&HEE
130 DATA &H8E,&HC3,&H8B,&H5E,&H06,&H8A,&H0F,&H8B
140 DATA &H77,&H01,&HD0,&HE9,&H74,&H02,&HF3,&HA5
150 DATA &H83,&HC3,&H03,&HFE,&HCC,&H75,&HEE,&H0A
160 DATA &HD2,&H74,&H05,&HB2,&HD8,&H0C,&H08,&HEE
170 DATA &H07,&H5D,&HCA,&H02,&H00
171 REM assembly code to use fulscrn
172 DATA &H55,&H9C,&H53,&h57,&h51,&h56,&h50,&h52,&H8b,&HEC,&H8B,&h5E,&H16,&H8B,&H7F,&H01,&H8B,&H4E,&H18
173 DATA &H8B,&H5e,&H1A,&H8B,&H37,&HBB,&H00,&H00,&H55,&H8A,&H00
174 DATA &HB4,&H03,&HF6,&HE4,&H40,&H8B,&HD1,&H03,&HD0,&H8B,&HEA,&H8b,&H6E,&H00
175 DATA &H8B,&H46,&H00,&HD1,&HE3,&HD1,&HE3,&H88,&H01,&H43,&H43,&H88,&H21
176 DATA &HD1,&HEB,&H43,&HD1,&HEB,&H83,&HFB,&H18,&H72,&HD9,&H5D
177 DATA &H8B,&H4E,&H14,&H55,&HBB,&H00,&H00,&H8A,&H00
178 DATA &HB4,&H03,&HF6,&HE4,&H40,&H8B,&HD1,&H03,&HD0,&H8B,&HEA
179 DATA &H8b,&h6E,&h00,&H8A,&H46,&H00,&HD1,&HE3,&H88,&H41,&H64,&HD1,&HEB,&H43,&H83,&HFB,&H18
180 DATA &H72,&HE0,&H5D,&h5a,&h58,&h5e,&h59,&h5f,&h5b,&h9D,&H5D,&HCA,&H08,&H00
189 FOR I%=1 TO 119: READ J%: POKE C%,J%: C%=C%+1: NEXT I%
190 REM SET UP DATA AND SCREEN PARAMETERS
200 REM 80-COLUMN ALPHANUMERIC MODE
250 SCREEN 0,0,0: DIM SCRN$(25)
260 BLANK$=" "+CHR$(7):FOR I=1 TO 6: BLANK$=BLANK$+BLANK$:NEXT I: BLANK$=LEFT$(BLANK$,80):BLANK$=BLANK$+BLANK$: REM must do blank$ expansion in this order to avoid string too long error
380 FOR I%=0 TO 25: SCRN$(I%)=BLANK$: NEXT I%
390 S1$="Drive    Side    Track     Sector    Byte 0":FOR I=1 TO LEN(S1$):MID$(SCRN$(1),I+I-1,2)=MID$(S1$,I,1)+CHR$(7):NEXT I
394 S24$="New Value (Decimal)"+SPACE$(32)+"T=Track +  Y=Track -":FOR I=1 TO LEN(S24$):MID$(SCRN$(24),I+I-1,2)=MID$(S24$,I,1)+CHR$(112):NEXT I
396 S25$=CHR$(24)+CHR$(25)+CHR$(26)+CHR$(27)+"=Cursor  No.+C/R=new #  A=Ahead  B=Back  C=hex Copy  S=Side toggle  X=eXit":FOR I=1 TO LEN(S25$):MID$(SCRN$(25),I+I-1,2)=MID$(S25$,I,1)+CHR$(112):NEXT I
1000 'diskmodP v1.3
1010 GOTO 1080
1020 '
1030 ' The following are the slow subroutines which might be converted to ASM
1040 COLOR 7,0
1050 BM24=BYTE MOD 24:LOCATE BYTE\24+2,BM24*2+1:PRINT HX$(CHAR);:LOCATE ,BM24+51:PRINT AS$(CHAR);:RETURN
1060 LOCATE 24,21:PRINT Z;"  ";:RETURN
1070 LOCATE 1,42:PRINT BYTE:CHAR=PEEK(BUF+BYTE):LOCATE 24,35:PRINT CHAR;" ";:RETURN
1080 REM
1090 REM
1100 DATA &h55
1110 DATA &h8b,&hec
1120 DATA &hbb,&h00
1130 DATA &h8c,&h8b,&h76,&h06,&h8b
1140 DATA &h0c,&h8b,&h76,&h08,&h8b
1150 DATA &h14,&h8b,&h76,&h0a,&h8b,&h04,&h8a,&he0,&hb0,&h01
1160 DATA &hcd,&h13,&h8a,&hc4,&hb4,&h00,&h89,&h04,&h5d
1170 DATA &hca,&h06,&h00
1180 INT13=&H8B00:FOR I=INT13 TO INT13+36:READ J:POKE I,J:NEXT I
1190 BUF=&H8C00
1200 DATA &h8b,&hdc,&hb4,&h08,&hcd,&h21,&h84,&hc0,&h74,&hf8,&h32,&he4,&h8b,&h5f,&h04,&h89,&h07,&hca,&h02,&h00
1210 IN=&H8B80:FOR I=IN TO IN+19:READ J:POKE I,J:NEXT I
1220 CLS:COLOR 7,0:LOCATE 12,13
1230 PRINT "DiskModP V1.3 - Disk sector viewing and modification (with sector paging)"
1240 LOCATE 15,7:PRINT "Improved by Hal Sampson from original program by John Vandegrift"
1250 LOCATE 16,7:PRINT "With several new features added and much faster (10x) sector display":PRINT "written by Ken Kriesel"
1260 DIM HX$(255):DIM AS$(255)
1270 FOR I=0 TO 255:HX$(I)=RIGHT$("0"+HEX$(I),2):AS$(I)=CHR$(I):NEXT I
1280 FOR I=7 TO 13:AS$(I)=CHR$(I+64):NEXT I
1290 AS$(28)="\":AS$(29)="]":AS$(30)=CHR$(24):AS$(31)=CHR$(25)
1300 NOTREAD=1
1310 GOSUB 1560
1320 CLS:LOCATE 2,37:PRINT"DiskModP"
1330 IF NOTREAD THEN LOCATE 23,30:PRINT "Sector not declared!!":GOTO 1360
1340 LOCATE 23,30:IF NOSIDES=1 THEN PRINT "Single-sided diskette":GOTO 1360
1350 PRINT "Double-sided diskette"
1360 LOCATE 20,20:PRINT USING "#";MAX;:PRINT " Sectors per track"
1370 LOCATE 10,20:PRINT "(S)elect any diskette sector"
1380 LOCATE 11,20:PRINT "(V)iew/alter sector or increment/decrement side/track/sector"
1390 LOCATE 12,20:PRINT "(W)rite sector back to diskette"
1400 LOCATE 13,20:PRINT"(Q)uit"
1410 LOCATE 16,20:PRINT "Choice?";
1420 CALL IN(I):I=I AND &H5F
1430 IF I=83 THEN GOSUB 1560
1440 IF I=86 THEN GOSUB 1870
1450 IF I=87 THEN GOSUB 1480
1460 IF I=81 THEN STOP
1470 GOTO 1320
1480 REM         Put Sector on diskette
1490 IF NOTREAD THEN RETURN
1500 PRINT:PRINT:PRINT "Are you sure you want to alter disk? [N]";
1510 CALL IN(I): IF (I AND &H5F) <>89  THEN RETURN
1520 OP=3
1530 CALL INT13 (OP,HDDR,TRSC)
1540 IF OP<>0 THEN PRINT " retry";:OP=0:CALL INT13(OP,HDDR,TRSC):GOTO 1520
1550 RETURN
1560 '
1570 CLS:LOCATE 2,37:PRINT"DiskModP"
1580 LOCATE 10,10:INPUT "Select drive (A-D)";DRIVE$
1590 IF DRIVE$="" THEN 1580
1600 DRIVE=(ASC(DRIVE$) AND &H5F)-&H41
1610 IF DRIVE <0 OR DRIVE >3 THEN 1580
1620 GOSUB 2300
1630 HDDR=256+DRIVE:TRSC=1:TRIES=3:NOTREAD=1
1640 OP=2: CALL INT13(OP,HDDR,TRSC) 'check for single/double sided
1650 IF OP = 0 THEN NOSIDES=HDDR/256 +1:GOTO 1690
1660 TRIES=TRIES-1: IF TRIES=0 THEN 1670 ELSE OP=0: CALL INT13(OP,HDDR,TRSC):GOTO 1640
1670 IF HDDR>255 THEN TRIES=3:HDDR=DRIVE:GOTO 1640
1680 LOCATE 15,10:INPUT "Diskette error. C/R to go on.";I
1690 LOCATE 11,10:INPUT "Select track (0-39)";TRACK
1700 IF TRACK<0 OR TRACK>39 THEN 1690
1710 LOCATE 12,10:PRINT "Select sector (1-";:PRINT USING "#";MAX;:INPUT ")";SECTOR
1720 IF SECTOR<1 OR SECTOR>MAX THEN 1710
1730 HEAD=0:IF NOSIDES=1 THEN 1760
1740 LOCATE 13,10:INPUT "Select side (0-1)";HEAD
1750 IF HEAD<0 OR HEAD>1 THEN 1740
1760 LOCATE 20,10:PRINT "Inputs satisfactory [Y]?"
1770 I$=INKEY$:IF I$="" THEN 1770 ELSE IF I$="N" OR I$="n" THEN 1570
1780 GOSUB 1790: GOSUB 1870: RETURN
1790 REM DISK READ
1800 HDDR=(HEAD*256)+DRIVE:TRSC=(TRACK*256)+SECTOR
1810 OP=2:CALL INT13(OP,HDDR,TRSC)
1820 IF OP<>0 THEN PRINT " retry";CHR$(7):OP=0:CALL INT13(OP,HDDR,TRSC):GOTO 1810
1830 NOTREAD=0
1840 RETURN
1850 GOSUB 1870 'always display it
1860 RETURN
1870 '
1880 IF NOTREAD THEN RETURN
1890 CLS
1910 BYTE=0
1920 GOSUB 2210
1925 LOCATE 1,7:PRINT USING"!";DRIVE$;:LOCATE 1,15:PRINT USING "#";HEAD;:LOCATE 1,24:PRINT USING "##";TRACK:LOCATE 1,35:PRINT USING "#";SECTOR;
1930 GOSUB 1070
1970 COLOR 0,7:GOSUB 1050:GOSUB 1060
1980 CALL IN(A)
1990 IF A=13 THEN CHAR=Z:Z=0:GOSUB 1040:GOSUB 2170:GOTO 1970
2000 GOSUB 1040
2010 IF A=77 THEN IF BYTE<511 THEN BYTE=BYTE+1:GOTO 2120
2020 IF A=80 THEN IF BYTE<488 THEN BYTE=BYTE+24:GOTO 2120
2030 IF A=75 THEN IF BYTE>0 THEN BYTE=BYTE-1:GOTO 2120
2040 IF A=72 THEN IF BYTE>=24 THEN BYTE=BYTE-24:GOTO 2120
2050 IF A=89 OR A=121 THEN GOSUB 2430:GOSUB 1790:GOTO 1880: REM track decrement
2060 IF A=84 OR A=116 THEN GOSUB 2410:GOSUB 1790:GOTO 1880: REM track increment
2070 IF A=88 OR A=120 THEN RETURN
2080 IF A=83 OR A=115 THEN IF NOSIDES=1 GOTO 1880 ELSE HEAD=1-HEAD:GOSUB 1790:GOTO 1880
2090 IF A=65 OR A=97 THEN GOSUB 2230: GOSUB 1790: GOTO 1880: REM a OR A FOR ahead one SECTOR
2100 IF A=67 OR A=99 THEN GOSUB 2270: GOTO 1880: REM C OR c FOR HEX COPY
2110 IF A=66 OR A=98 THEN GOSUB 2370:GOSUB 1790:GOTO 1880: REM b or B for backward one sector
2120 GOSUB 1070
2130 IF A<48 OR A>57 THEN 1970
2140 Z=Z*10+A-48
2150 IF Z>255 THEN Z=0
2160 GOTO 1970
2170 POKE (BUF+BYTE),CHAR
2180 IF BYTE<511 THEN BYTE=BYTE+1
2190 GOSUB 1070
2200 RETURN
2210 CVTLIN=VARPTR(CODEC%(1)):FOR A=BUF TO BUF+511 STEP 24:LIN=(A-BUF)/24+2
2216 CVTLIN=VARPTR(CODEC%(1)):CALL CVTLIN(A,HX$(0),SCRN$(LIN),AS$(0))
2218 NEXT A
2219 FULSCRN%=VARPTR(CODEF%(1)): CALL FULSCRN%(SCRN$(1))
2221 LOCATE 23,17:PRINT "                                ";:LOCATE 23,59:PRINT "                ";:RETURN
2230 SECTOR=SECTOR+1:IF SECTOR<MAX+1 THEN RETURN
2240 SECTOR=SECTOR-MAX: IF NOSIDES=1 THEN 2250 ELSE HEAD=HEAD+1: IF HEAD<2 THEN RETURN
2250 HEAD=0:TRACK=TRACK+1:IF TRACK<40 THEN RETURN
2260 TRACK=0:RETURN
2270 REM ROUTINE TO PRINT OUT HEX TABLE FOR SECTOR
2280 LPRINT: LPRINT "SIDE ";HEAD;" TRACK ";TRACK;" SECTOR ";SECTOR:FOR A=BUF TO BUF+511 STEP 24:FOR B=A TO A+23:IF B<BUF+512 THEN LPRINT HX$(PEEK(B));
2290 NEXT B: LPRINT: NEXT A:RETURN
2300 OP=2:HDDR=DRIVE:TRSC=2
2310 CALL INT13(OP,HDDR,TRSC)
2320 DISKTYPE=PEEK(BUF): MAX=0
2330 IF DISKTYPE=&HFF THEN MAX=8 ELSE IF DISKTYPE=&HFE THEN MAX=8
2340 IF DISKTYPE=&HFD THEN MAX=9 ELSE IF DISKTYPE=&HFC THEN MAX=9
2350 LOCATE 18,10:PRINT USING "#";MAX;:PRINT " SECTORS PER TRACK"
2360 RETURN
2370 SECTOR=SECTOR-1:IF SECTOR>0 THEN RETURN
2380 SECTOR=SECTOR+MAX: IF NOSIDES=1 THEN 2390 ELSE HEAD=HEAD-1: IF HEAD>-1 THEN RETURN
2390 IF NOSIDES=2 THEN HEAD=1
2395 TRACK=TRACK-1:IF TRACK>-1 THEN RETURN
2400 TRACK=39:RETURN
2410 TRACK=TRACK+1:IF TRACK<40 THEN RETURN
2420 TRACK=0: RETURN
2430 TRACK=TRACK-1:IF TRACK>0 THEN RETURN
2440 TRACK=39: RETURN
```
{% endraw %}

## DITHER.BAS

{% raw %}
```bas
10 REM program to experiment with dithered colors
20 DIM SHADE%(16,8)
30 FOR I=1 TO 16: SHADE%(I,1)=I-1:NEXT I:J=0:K=2
40 FOR I=16 TO 255: IF I MOD 16 <=INT(I/16) THEN GOTO 80
50 IF I MOD 16=8 AND INT(I/16)>0 THEN 80
60 J=J+1: IF J>16 THEN J=J-16:K=K+1
70 SHADE%(J,K)=I
80 NEXT I
90 FOR I=1 TO 15: SHADE%(I+1,8)=16*I:NEXT I
100 CLS:LOCATE 1,1
110 OPEN "gm" FOR OUTPUT AS #1
120 SC$=CHR$(27)
130 REM PUT GRAPHICS MASTER IN 640 HOR. X 400 VERT. X 16 COLOR GRAPHICS MODE
140 PRINT #1,SC$+"[!640;400;16 g"
150 PRINT #1,SC$+"[!";0;";";0;";";639!;";";399!;0;" R"
160 REM 16*color 1+color 2 is dither color
170 REM FG=15:BG=0
180 FOR I=0 TO 7
190 FOR J=0 TO 15
200 COL=SHADE%(J+1,I+1)
210 A%=INT(COL/100)
220 B%=INT(COL/10) MOD 10
230 C%=COL MOD 10
240 X1=80*I+0: X2=80*(I+1)-1
250 Y1=25*J+0: Y2=25*(J+1)-1
260 PRINT #1,SC$+"[!";
270 X%=X1: GOSUB 380
280 PRINT #1,";";:X%=Y1:GOSUB 380
290 PRINT #1,";";:X%=X2:GOSUB 380
300 PRINT #1,";";:X%=Y2:GOSUB 380
310 PRINT #1,";";:X%=COL:GOSUB 380
320 PRINT #1," r";
330 NEXT J
340 NEXT I
350 V$=INKEY$: IF V$="" THEN GOTO 350 ELSE GOSUB 460
360 PRINT #1,SC$+"[!80;25;1a": CLOSE 1: SCREEN 2: SCREEN 0: ON ERROR GOTO 0: STOP
370 SYSTEM
380 REM subroutine to make a string with no spaces of a number
390 A%=INT(X%/100)
400 B%=INT(X%/10) MOD 10
410 C%=X% MOD 10
420 IF A%>0 THEN PRINT #1,USING"#";A%;
430 IF A%>0 OR B%>0 THEN PRINT #1,USING "#";B%;
440 IF A%>0 OR B%>0 OR C%>0 THEN PRINT #1,USING "#";C%;
450 RETURN
460 REM put the numbers in place
470 FOR K%=1 TO 16: PRINT #1,SC$+"M";:NEXT K%
480 FOR J=0 TO 15: FOR I=7 TO 0 STEP -1
490 COL=SHADE%(J+1,I+1)
500 PRINT #1,TAB(10*I+4);STR$(COL);: PRINT #1,SC$+"M";
510 NEXT I
520 IF J<15 THEN PRINT #1,SC$+"D": PRINT #1,SC$+"D";: IF J=8 THEN PRINT #1,SC$+"D";
530 NEXT J
540 V$=INKEY$: IF V$="" THEN GOTO 540 ELSE GOTO 550
550 RETURN
```
{% endraw %}

## DOORS.BAS

{% raw %}
```bas
100 GRAND.TOTAL.#=0
110 OPEN "doors.com" AS #1 LEN=1
120 FIELD #1, 1 AS DOORS.BYTE.$
130 FOR I.%=1 TO 178
140 READ DOORS.DATA.%
150 GRAND.TOTAL.#=GRAND.TOTAL.#+DOORS.DATA.%
160 LSET DOORS.BYTE.$=CHR$(DOORS.DATA.%)
170 PUT #1
180 PRINT USING"########";GRAND.TOTAL.#;
190 NEXT I.%
200 READ THE.TOTAL.#
210 IF THE.TOTAL.#<>GRAND.TOTAL.# THEN PRINT CHR$(7):PRINT "***Errror Incorrect!":PRINT "***Check Data Statements and rerun the program."
220 CLOSE #1
230 END
240 DATA 233, 138, 0, 0, 0, 0, 0, 30, 6, 80
250 DATA 83, 81, 82, 86, 87, 156, 46, 255, 30, 3
260 DATA 1, 184, 64, 0, 142, 216, 160, 23, 0, 36
270 DATA 9, 60, 9, 117, 97, 180, 15, 205, 16, 60
280 DATA 7, 116, 11, 60, 3, 118, 3, 235, 83, 144
290 DATA 60, 1, 118, 78, 180, 3, 183, 0, 205, 16
300 DATA 139, 30, 16, 0, 139, 203, 129, 225, 48, 0
310 DATA 51, 217, 129, 203, 32, 0, 176, 3, 131, 249
320 DATA 48, 116, 6, 129, 203, 48, 0, 176, 7, 137
330 DATA 30, 16, 0, 50, 228, 205, 16, 180, 2, 183
340 DATA 0, 205, 16, 184, 0, 176, 142, 192, 184, 0
350 DATA 184, 142, 216, 131, 249, 48, 117, 4, 30, 6
360 DATA 31, 7, 51, 255, 51, 246, 185, 208, 7, 252
370 DATA 243, 165, 95, 94, 90, 89, 91, 88, 7, 31
380 DATA 207, 30, 184, 0, 0, 142, 216, 250, 161, 36
390 DATA 0, 46, 163, 3, 1, 161, 38, 0, 46, 163
400 DATA 5, 1, 199, 6, 36, 0, 7, 1, 140, 14
410 DATA 38, 0, 251, 186, 141, 1, 205, 39, 16143
```
{% endraw %}

## EPBENCHI.BAS

{% raw %}
```bas
10 REM this program is equivalent to the c language benchmark published in
20 REM Electronic Products magazine, September 7, 1983, page 53.
30 REM execution times of this benchmark on the IBM PC are:
40 REM IBM BASICA interpreter 2.00 1230 sec.
50 REM IBM Pascal 1.00  1080 sec.
60 REM Turbo Pascal 2.0 830 sec.
70 REM IBM Fortran 1.00 780 sec.
80 REM IBM BASIC compiler 1.00 630 sec.
90 REM Computer Innovations C compiler 1.338 95 sec.
100 REM IBM Fortran 2.00 50 sec.
110 REM Computer Innovations C compiler 2.10 42 sec.
120 REM IBM Macro Assembler 1.00 8.0 sec.
130 REM Execution times on a DEC VAX-11/780 are:
140 REM Fortran 77 2.76 sec.
150 REM C 2.32 sec.
160 DEFSNG I
170 PRINT TIME$
180 FOR I=1 TO 1000000!
190 NEXT I
200 PRINT "done"
210 PRINT TIME$
220 END
```
{% endraw %}

## INTLCVID.BAS

{% raw %}
```bas
100 'intlcvid.bas see p 422 dec 11 1984 pc magazine
130 DEF SEG=&HB800:WIDTH 80:SCREEN 0:OUT 980,8:OUT 981,3
140 FOR ADR=0 TO 8000 STEP 2
150 POKE ADR,33+(ADR/2) MOD 90:POKE ADR+1,7:NEXT ADR
160 IF INKEY$="" THEN 160:' hit any key to go on
170 FOR ADR=0 TO 8000 STEP 2
180 POKE ADR,219:POKE ADR+1,RND*16:NEXT ADR
190 IF INKEY$="" THEN 190 ELSE OUT 980,8:OUT 981,2:CLS
```
{% endraw %}

## MEGATREK.BAS

{% raw %}
```bas
2 LQ=1000
7 DIM C$(20),G(8,8),D$(12),Q$(10,10),D4(12),D9(106)
10 DIM S2(8,8):Q$="?"
15 DATA "S.R. SENSORS","L.R. SENSORS","PHASERS","PHOTON TUBES","LIFE SUPPORT"
20 DATA "WARP ENGINES","IMPULSE ENGINES","SHIELDS","SUBSPACE RADIO"
21 DATA "SHUTTLE CRAFT","COMPUTER","TRANSFER PANEL","ABANDON","CHART","COMPUTER"
22 DATA "DAMAGES","DESTRUCT","DOCK","IDLE","IMPULSE","LRSCAN","NAVIGATE","PHASERS","QUIT"
23 DATA "SHIELDS","SOS","SRSCAN","STATUS","TORPEDO","TRANSFER","VISUAL","WARP","SHORT"
24 DATA "MEDIUM","LONG","BEGINNER","NOVICE","SENIOR","EXPERT","COURSE","WCOST","ICOST"
25 DATA "PEFFECT","SCORE","OUT"
27 DATA 10.5,12,1.5,9,0,3,7.5,6,4.5
28 DEF FN A(X)= INT (8* RND (X))+1: DEF FN B(X)= INT (10* RND (X))+1
29 DEF FN D(X)=X/60
30 DEF FN R(X)= INT (X*10+0.5)/10: DEF FN S(X)= INT (X*100+0.5)/100
40 FOR I=1 TO 12: READ D$(I): NEXT : FOR I=1 TO 20: READ C$(I): NEXT
43 FOR I=1 TO 3: READ T$(I): NEXT : FOR I=1 TO 4: READ S$(I): NEXT : FOR I=1 TO 6
44 READ C2$(I): NEXT : FOR I=1 TO 9: READ C5(I): NEXT
46 GOSUB 24001:S7$(1)="":S7$(2)="  ":S7$(3)=" ":S7$(4)=""
70 IF A2<>0 THEN 901
75 J4=0:T1=0: INPUT "COMMAND";A$: IF LEN (A$)>1 THEN 110
80 PRINT "2 LETTERS, PLEASE.": GOTO 75
110 FOR I=1 TO 20
120 IF A$= LEFT$ (C$(I), LEN (A$)) THEN 150
130 NEXT
135 PRINT "ILLEGAL !! - USE THIS LIST"
140 PRINT : FOR I=1 TO 20 STEP 4
141 PRINT C$(I); TAB( 12);C$(I+1); TAB( 22);C$(I+2); TAB( 32);C$(I+3)
142 NEXT : PRINT : GOTO 70
150 ON I GOTO 201,226,251,276,291,301,326,351,376,401
160 ON I-10 GOTO 426,901,476,501,526,545,551,576,601,627
201 GOSUB 35001: GOTO 70
226 GOSUB 3001: GOTO 70
251 GOSUB 5001: GOTO 70
276 GOSUB 8001: GOTO 70
291 GOSUB 36001: GOTO 70
301 GOSUB 7000: GOTO 70
326 GOSUB 33001: IF J3=0 THEN 70
331 IF A2<>0 THEN 901
332 IF G(Q1,Q2)=1000 THEN 750
340 GOSUB 1000: GOTO 70
351 GOSUB 13001: IF J3=0 THEN 70
353 GOTO 710
376 GOSUB 14001: GOTO 70
401 GOSUB 34001
402 IF J3=0 THEN 70
410 GOTO 710
426 GOSUB 20001: IF J3=0 THEN 70
428 GOSUB 1000: GOTO 70
476 GOSUB 26001: IF J3=0 THEN 70
478 IF A2<>0 THEN 901
479 GOSUB 1000:S9=0: GOTO 70
501 GOSUB 11001: GOTO 70
526 GOSUB 29002: GOTO 70
545 PRINT : GOSUB 37001: GOTO 70
551 GOSUB 21001: IF J3=0 THEN 70 ELSE 710
576 GOSUB 31001: IF J3=0 THEN 70
585 IF A2<>0 THEN 901
590 IF G(Q1,Q2)<>LQ THEN 70
595 GOTO 750
601 IF J3=0 THEN 70
603 IF A2<>0 THEN 901
610 IF G(Q1,Q2)<>LQ THEN 70
615 GOTO 750
627 GOSUB 25010: GOTO 70
710 IF A2<>0 THEN 901
720 IF T1<>0 THEN GOSUB 9000
730 IF A2<>0 THEN 901
740 IF G(Q1,Q2)<LQ THEN 790
750 GOSUB 2001: IF A2<>0 THEN 901
760 IF A2<>0 THEN 901
770 GOTO 740
790 GOSUB 1000: GOTO 70
901 PRINT : PRINT : INPUT "ANOTHER GAME ";A$
910 IF LEFT$ (A$,1)="Y" THEN 46
911 PRINT CHR$ (12): END
1000 IF (C3<>0) AND (J4=0) THEN GOSUB 16001
1020 IF K3=0 THEN RETURN
1030 IF A2<>0 THEN RETURN
1040 P2=1/I8
1050 J5=0
1060 PRINT
1070 IF C5$="DOCKED" THEN 1780
1080 H2=0:H3=0:C6=1
1090 IF S9=1 THEN C6=0.5+0.5* RND (1)
1100 A3=0
1110 FOR L=1 TO K3
1120 IF K6(L)<0 THEN 1540
1130 A3=1
1140 D6=0.8+0.05* RND (1)
1150 H4=K6(L)*D6^K8(L)
1160 IF (S4=0) AND (S9=0) THEN 1230
1170 P3=0.1: IF P2*S3>P3 THEN P3=P2*S3
1180 H5=P3*C6*H4+1
1190 IF H5>S3 THEN H5=S3
1195 S3=S3-H5:H4=H4-H5
1210 IF (P3>0.1) AND (H4<0.005*E1) THEN 1540
1230 J5=1
1240 PRINT FN R(H4);"UNIT HIT ON THE ";S5$;" FROM ";
1250 J6=K4(L):J7=K5(L)
1260 IF Q$(J6,J7)="K" THEN PRINT "KLINGON AT";
1270 IF Q$(J6,J7)="C" THEN PRINT "COMMANDER AT";
1280 PRINT J6;"-";J7
1290 IF H4>H2 THEN H2=H4
1300 H3=H3+H4
1310 IF H4<(275-25*S8)*(1+0.5* RND (1)) THEN 1530
1320 N4=1+ INT (H4/(500+100* RND (1)))
1330 PRINT "*** CRITICAL HIT--";
1340 K9=1
1350 FOR W4=1 TO N4
1360 J9= INT (12* RND (1))+1
1370 C5(W4)=J9
1380 E3=(H4*D5)/(N4*(75+25* RND (1)))
1390 IF J9=6 THEN E3=E3/3
1395 D4(J9)=D4(J9)+E3
1400 IF W4=1 THEN 1470
1420 FOR V=1 TO W4
1430 IF J9=C5(V-1) THEN 1480
1440 NEXT V
1450 K9=K9+1
1460 IF K9=3 THEN PRINT
1465 PRINT " AND ";
1470 PRINT D$(J9);
1480 NEXT W4
1490 PRINT " DAMAGED."
1500 IF D4(8)=0 THEN 1530
1510 IF S4<>0 THEN PRINT "*** SHIELDS KNOCKED DOWN."
1520 S4=0
1530 E1=E1-H4
1540 NEXT L
1550 IF A3=0 THEN RETURN
1560 IF E1<=0 THEN 1750
1570 P4=100*P2*S3+0.5
1580 IF J5<>0 THEN 1610
1590 PRINT "ENEMY ATTACK--SHIELDS REDUCED TO ";
1600 GOTO 1650
1610 PRINT "ENERGY LEFT:"; FN S(E1);"   SHIELDS ";
1620 IF S4<>0 THEN PRINT "UP,";
1630 IF (S4=0) AND (D4(8)=0) THEN PRINT "DOWN, ";
1640 IF D4(8)>0 THEN PRINT "DAMAGED, ";
1650 PRINT INT (P4);"%"
1660 IF (H2<200) AND (H3<500) THEN 1800
1670 J8= INT (H3* RND (1)*0.015)
1680 IF J8<2 THEN 1800
1690 PRINT
1700 PRINT "---> 'SICKBAY TO BRIDGE.  WE SUFFERED ";J8;"CASUALTIES IN THAT ATTACK"
1730 C4=C4+J8
1740 GOTO 1800
1750 F9=5
1760 GOSUB 10000: RETURN
1780 PRINT "*** KLINGONS ATTACK-- STARBASE SHIELDS PROTECT THE ";S5$
1800 FOR W4=1 TO K3
1810 K8(W4)=K7(W4)
1820 NEXT W4
1830 GOSUB 28000: RETURN
2001 PRINT : IF J4=0 THEN 2050
2020 PRINT "*** RED ALERT!  RED ALERT!"
2030 PRINT "*** THE ";S5$;" HAS STOPPED IN QUADRANT CONTAINING SUPERNOVA"
2050 PRINT "*** AUTO-OVERRIDE ATTEMPTS TO HURL ";S5$;" TO OTHER QUADRANT"
2080 S2(Q1,Q2)=1
2090 GOSUB 18000
2100 IF D4(6)=0 THEN 2290
2110 PRINT
2120 PRINT "WARP ENGINES DAMAGED."
2140 PRINT : PRINT "TRYING TO ENGAGE IMPULSE ENGINES..."
2150 IF D4(7)=0 THEN 2190
2160 PRINT "IMPULSE ENGINES DAMAGED."
2165 F9=8
2170 GOSUB 10000
2180 RETURN
2190 P2=0.75*E1
2200 D6=0.004*(P2-50)
2210 D7=1.4142+1.2* RND (1)
2220 D1=D6
2230 IF D6>D7 THEN D1=D7
2240 T1=D1/0.4
2250 D2=12* RND (1)
2260 J4=0
2270 GOSUB 13200
2280 GOTO 2400
2290 W1=6+2* RND (1)
2300 W2=W1*W1
2310 P2=0.75*E1
2320 D6=P2/(W1*W1*W1*(S4+1))
2330 D7=1.4142+2* RND (1)
2340 D1=D6
2350 IF D6>D7 THEN D1=D7
2360 T1=10*D1/W2
2370 D2=12* RND (1)
2380 J4=0
2390 GOSUB 34500
2400 IF J4<>0 THEN 2440
2410 F9=8
2420 GOSUB 10000
2430 RETURN
2440 IF R1<>0 THEN RETURN
2450 F9=1
2460 GOSUB 10000
2470 RETURN
3001 PRINT : PRINT "      1   2   3   4   5   6   7   8"
3010 PRINT "     --- --- --- --- --- --- --- ---"
3020 FOR I=1 TO 8
3030 PRINT I;" ";
3040 FOR J=1 TO 8
3060 ON SGN (S2(I,J))+2 GOTO 3070,3090,3110
3070 PRINT " .1.";
3080 GOTO 3160
3090 PRINT " ...";
3100 GOTO 3160
3110 IF S2(I,J)>LQ THEN 3150
3120 IF G(I,J)<LQ THEN PRINT S7$( LEN ( STR$ (G(I,J)))); STR$ (G(I,J));
3130 IF G(I,J)=LQ THEN PRINT " ***";
3140 GOTO 3160
3150 PRINT S2(I,J)-LQ;
3160 NEXT J: PRINT : NEXT I: PRINT
3190 PRINT "THE ";S5$;" IS CURRENTLY IN (";Q1;"-";Q2;")"
3200 RETURN
4001 PRINT CHR$ (12)
4070 S8=0:L2=0
4090 PRINT "MISSION DURATION...: ";
4095 INPUT A$
4100 FOR I=1 TO 3
4110 IF A$= LEFT$ (T$(I), LEN (A$)) THEN 4150
4120 NEXT I
4130 PRINT "WOULD YOU LIKE A SHORT, MEDIUM OR LONG GAME";
4140 GOTO 4095
4150 L2=I
4160 PRINT "ARE YOU A BEGINNER, NOVICE, SENIOR OR EXPERT ";
4170 INPUT A$
4180 FOR I=1 TO 4
4190 IF A$= LEFT$ (S$(I), LEN (A$)) THEN 4220
4200 NEXT I
4210 GOTO 4160
4220 S8=I:MR=I
4230 INPUT "ENTER MISSION PASSWORD...";X$: PRINT
4245 PRINT "....STAND BY...."
4250 J= RND (1)
4280 D5=0.5*S8:I2= INT (L2+1+ RND (1)*3)
4290 IF I2>5 THEN I2=5
4300 R3=I2
4310 I5=7*L2
4320 R5=I5
4340 R7=(S8-2* RND (1)+1)*S8*0.1+0.1
4350 IF R7<0.2 THEN R7=R7+0.1
4360 I1= INT (2*R7*I5)
4370 R1=I1
4380 I4= INT (S8+0.0625*I1* RND (1))
4390 R2=I4
4400 I3=(I1+4*I4)*I5
4410 R4=I3
4420 RETURN
5001 IF D4(11)=0 THEN 5030
5010 PRINT " COMPUTER DISABLED"
5020 RETURN
5030 PRINT "----COMPUTER ACTIVE----"
5040 INPUT "PROGRAM NAME";B$
5050 FOR I=1 TO 6
5060 IF B$= LEFT$ (C2$(I), LEN (B$)) THEN 5120
5070 NEXT
5080 PRINT "VALID PROGRAMS ARE:"
5090 PRINT "  COURSE    WCOST   SCORE"
5100 PRINT "  PEFFECT   ICOST   OUT"
5110 GOTO 5040
5120 ON I GOTO 5210,5302,5410,5510,5610,5700
5210 INPUT "ENTER QUADRANT AND SECTOR - ";A3,A4
5220 IF (A3<> INT (A3)) OR (A4<> INT (A4)) THEN 5990
5221 IF A3<0 THEN 5040
5222 IF A3=0 THEN A3=10*Q1+Q2
5223 A3=A3+0.5
5225 K= INT (A3/10)
5226 IF (K<1) OR (K>8) THEN 5990
5227 C6(1)=K:K= INT (A3-C6(1)*10)
5228 IF (K<1) OR (K>8) THEN 5990
5229 C6(2)=K:A4=A4+0.5
5230 K= INT (A4/100)
5231 IF (K<1) OR (K>10) THEN 5990
5232 C6(1)=C6(1)+(K-1)/10:K= INT (A4-K*100)
5233 IF (K<1) OR (K>10) THEN 5990
5234 C6(2)=C6(2)+(K-1)/10
5235 X=Q1+((S6-1)/10)-C6(1):Y=Q2+((S7-1)/10)-C6(2)
5236 D1=0:D2=0: IF (X=0) AND (Y=0) THEN 5250
5237 D1= SQR (X*X+Y*Y)
5238 IF X<0 THEN Z7= SGN (Y)*(3.1416- ATN ( ABS (Y/X)))
5239 IF X=0 THEN Z7= SGN (Y)*1.5708
5240 IF X>0 THEN Z7= ATN (Y/X)
5245 D2=12-Z7*1.9098593#: IF D2>12 THEN D2=D2-12
5250 PRINT "COURSE IS"; FN S(D2);" FOR A DISTANCE OF";
5260 PRINT FN S(D1);"QUADRANTS.": GOTO 5040
5302 INPUT "ENTER DISTANCE AND WARP FACTOR";D1,A4
5304 IF (D1<0) THEN 5040
5310 C7=D1*A4*A4*A4
5315 T1=(10*D1)/((A4*A4)+0.00001)
5320 PRINT "IT WOULD TAKE"; FN S(T1);"STARDATES AND USE"
5325 PRINT FN R(C7);"UNITS OF ENERGY  ("; FN R(C7+C7);"IF SHIELDS ARE UP)"
5330 GOTO 5040
5410 INPUT "ENTER DISTANCE...";D1
5420 IF D1<0 THEN 5040
5430 C7=250*D1+50:T1=D1/0.4
5440 PRINT "IT WOULD TAKE"; FN R(T1);"STARDATES AND USE"
5450 PRINT C7;"UNITS OF ENERGY"
5460 GOTO 5040
5510 INPUT "ENTER PHASER RANGE IN QUADRANTS";A3
5520 IF A3<0 THEN 5040
5530 A3=A3*10:C7=(0.9^A3)*100
5540 PRINT "PHASERS ARE "; LEFT$ ( STR$ (C7),5);"% EFFECTIVE AT THAT RANGE"
5550 GOTO 5040
5610 GOSUB 23000
5620 GOTO 5040
5700 RETURN
5990 PRINT "FORMAT IS MN,XXYY...WHERE MN IS THE QUADRANT"
5991 PRINT "AND XXYY IS THE SECTOR...E.G. 64,0307 REFERS"
5992 PRINT "TO QUADRANT 6-4, SECTOR 3-7."
5995 GOTO 5040
6000 IF T2$<>"C" THEN 6100
6010 C3=0: PRINT "*** COMMANDER AT";
6030 FOR F=1 TO R2: IF (C1(F)=Q1) AND (C2(F)=Q2) THEN 6050
6040 NEXT F
6050 C1(F)=C1(R2):C2(F)=C2(R2):C1(R2)=0:C2(R2)=0
6060 R2=R2-1:F1(2)=1.000000e+30
6070 IF R2<>0 THEN F1(2)=D0-(I4/R2)* LOG ( RND (1))
6080 K2=K2+1
6090 GOTO 6120
6100 PRINT "*** KLINGON AT";
6110 K1=K1+1
6120 PRINT A5;"-";A6;"DESTROYED."
6130 Q$(A5,A6)=".":R1=R1-1
6140 IF R1=0 THEN RETURN
6150 R5=R4/(R1+4*R2)
6160 G(Q1,Q2)=G(Q1,Q2)-100
6170 FOR F=1 TO K3
6180 IF (K4(F)=A5) AND (K5(F)=A6) THEN 6200
6190 NEXT F
6200 K3=K3-1
6210 IF F>K3 THEN 6250
6220 FOR G=F TO K3
6230 K4(G)=K4(G+1):K5(G)=K5(G+1):K6(G)=K6(G+1)
6235 K7(G)=K7(G+1):K8(G)=K7(G)
6240 NEXT G
6250 K4(K3+1)=0:K5(K3+1)=0:K7(K3+1)=0:K8(K3+1)=0:K6(K3+1)=0
6260 RETURN
7000 IF C5$="DOCKED" THEN 7100
7010 IF B6=0 THEN 7020
7015 IF ( ABS (S6-B6)<=1) AND ( ABS (S7-B7)<=1) THEN 7040
7020 PRINT S5$;" NOT ADJACENT TO A BASE."
7030 RETURN
7040 C5$="DOCKED"
7050 PRINT "---> DOCKING COMPLETED"
7060 E1=I7:S3=I8:T4=I9:L1=J1
7070 RETURN
7100 PRINT "CAPTAIN, WE'RE ALREADY DOCKED!"
7110 RETURN
8001 J=0: PRINT : FOR I=1 TO 12
8010 IF D4(I)<=0 THEN 8070
8020 IF J<>0 THEN 8060
8030 PRINT "     DEVICE"; SPC( 12);"-REPAIR TIMES-"
8040 PRINT SPC( 21);"IN FLIGHT    DOCKED":J=1
8060 PRINT "  ";D$(I); TAB( 23); FN S(D4(I)); TAB( 33); FN S(D3*D4(I))
8070 NEXT I
8080 IF J=0 THEN PRINT " - ALL DEVICES FUNCTIONAL -"
8090 RETURN
9000 M=0:D7=D0+T1: FOR L=1 TO 5
9020 IF F1(L)>D7 THEN 9040
9030 M=L:D7=F1(L)
9040 NEXT L
9050 X6=D7-D0:D0=D7
9060 R4=R4-(R1+4*R2)*X6
9070 R5=R4/(R1+4*R2)
9080 IF R5>0 THEN 9120
9090 F9=2
9100 GOSUB 10000
9110 RETURN
9120 IF (D4(5)=0) OR (C5$="DOCKED") THEN 9180
9130 IF (L1>=X6) OR (D4(5)<=L1) THEN 9160
9140 F9=3: GOSUB 10000
9150 RETURN
9160 L1=L1-X6
9170 IF D4(5)<=X6 THEN L1=J1
9180 R=X6
9190 IF C5$="DOCKED" THEN R=X6/D3
9200 FOR L=1 TO 12
9210 IF D4(L)<=0 THEN 9230
9220 D4(L)=D4(L)-R
9225 IF D4(L)<0 THEN D4(L)=0
9226 IF D4(L)<>0 THEN 9230
9227 PRINT : PRINT "DAMAGE CONTROL-  ";D$(L);" NOW OPERATIONAL."
9230 NEXT L
9240 IF M=0 THEN RETURN
9250 T1=T1-X6
9260 ON M GOTO 9280,9291,9340,9355,9475
9280 X2=0:Y2=0: GOSUB 27000
9285 F1(1)=D0-0.5*I5* LOG ( RND (1))
9286 IF G(Q1,Q2)=LQ THEN RETURN
9287 GOTO 9000
9291 IF R2=0 THEN 9330
9292 IF C5$="DOCKED" THEN 9325
9293 I= INT ( RND (1)*R2)+1
9294 Y6=(C1(I)-Q1)^2+(C2(I)-Q2)^2
9295 IF Y6=0 THEN 9325
9296 Y6= SQR (Y6):T1=0.17778*Y6
9297 PRINT : PRINT "*** ";S5$;" CAUGHT IN LONG-RANGE TRACTOR BEAM--"
9298 Q1=C1(I):Q2=C2(I)
9299 S6= FN B(1):S7= FN B(1)
9300 PRINT "PULLED TO QUADRANT";Q1;"-";Q2;", SECTOR";S6;"-";S7
9301 IF R6<>0 THEN PRINT "(IDLE PERIOD CANCELLED)"
9302 R6=0
9303 IF S4<>0 THEN 9320
9304 IF (D4(8)=0) AND (S3>0) THEN 9310
9305 PRINT "(SHIELDS NOT CURRENTLY USABLE.)"
9307 GOTO 9320
9310 GOSUB 26500
9315 S9=0
9320 GOSUB 18000
9325 F1(2)=D0+T1-1.5*(I5/R2)* LOG ( RND (1))
9326 GOTO 9000
9330 F1(2)=1.000000e+30: GOTO 9000
9340 D9(1)=D0:D9(2)=R1:D9(3)=R2:D9(4)=R3:D9(5)=R4:D9(6)=R5
9342 D9(7)=S1:D9(8)=B1:D9(9)=K1:D9(10)=K2
9343 FOR I=1 TO 8: FOR J=1 TO 8:D9(I-1+8*(J-1)+11)=G(I,J): NEXT J: NEXT I
9344 FOR I=75 TO 84:D9(I)=C1(I-74): NEXT
9345 FOR I=85 TO 94:D9(I)=C2(I-84): NEXT
9346 FOR I=95 TO 99:D9(I)=B2(I-94): NEXT
9347 FOR I=100 TO 104:D9(I)=B3(I-99): NEXT
9348 D9(105)=B4:D9(106)=B5
9349 S0=1:F1(3)=D0-0.3*I5* LOG ( RND (1)): GOTO 9000
9355 IF (R2=0) OR (R3=0) THEN 9400
9360 FOR I=1 TO R3: FOR J=1 TO R2: IF (B2(I)=C1(J)) AND (B3(I)=C2(J)) THEN 9410
9370 NEXT J: NEXT I
9380 F1(4)=D0+0.5+3* RND (1)
9390 F1(5)=1.000000e+30: GOTO 9000
9400 F1(4)=1.000000e+30:F1(5)=1.000000e+30: GOTO 9000
9410 B4=B2(I):B5=B3(I)
9420 IF (B4=Q1) AND (B5=Q2) THEN 9380
9430 F1(5)=D0+0.5+3* RND (1)
9440 F1(4)=F1(5)-0.3*I5* LOG ( RND (1))
9450 IF D4(9)>0 THEN 9000
9460 PRINT : PRINT "  CAPTAIN, THE STARBASE IN";B4;"-";B5;"IS UNDER ATTACK-"
9462 PRINT "  AND CAN ONLY RESIST UNTIL STARDATE"; FN R(F1(5));"!!!"
9465 IF R6=0 THEN 9000
9466 INPUT "  SHALL WE CANCEL IDLE PERIOD";B$
9468 IF LEFT$ (B$,1)="Y" THEN R6=0
9469 GOTO 9000
9475 F1(5)=1.000000e+30: IF (R2=0) OR (R3=0) THEN 9000
9485 K= INT (G(B4,B5)/100): IF G(B4,B5)-K*100<10 THEN 9000
9490 FOR I=1 TO R2: IF (C1(I)=B4) AND (C2(I)=B5) THEN 9520
9510 NEXT : GOTO 9000
9520 IF S2(B4,B5)=-1 THEN S2(B4,B5)=0
9530 IF S2(B4,B5)>999 THEN S2(B4,B5)=S2(B4,B5)-10
9540 IF (B4<>Q1) OR (B5<>Q2) THEN 9630
9550 FOR I=1 TO K3:K=K4(I):L=K5(I)
9560 IF Q$(K,L)="C" THEN 9570
9565 NEXT
9570 IF K6(I)<25+50* RND (1) THEN 9000
9580 Q$(B6,B7)=".":B6=0:B7=0
9590 GOSUB 17000
9600 PRINT : PRINT "CAPTAIN, I BELIEVE THE STARBASE HAS BEEN DESTROYED"
9620 GOTO 9680
9630 IF (R3=1) OR (D4(9)>0) THEN 9680
9640 PRINT
9650 PRINT "--> STARFLEET COMMAND REPORTS THAT STARBASE IN QUADRANT";B4;"-";B5
9660 PRINT "HAS BEEN DESTROYED BY ENEMY COMMANDER !!"
9680 G(B4,B5)=G(B4,B5)-10
9690 IF R3<=1 THEN 9730
9700 FOR I=1 TO R3: IF (B2(I)=B4) AND (B3(I)=B5) THEN 9720
9710 NEXT
9720 B2(I)=B2(R3):B3(I)=B3(R3)
9730 R3=R3-1
9740 GOTO 9000
10000 PRINT : PRINT : PRINT : INPUT "CONFLICT RESOLVED - PREPARED FOR RATING ";B$
10001 PRINT CHR$(12):A2=1: PRINT : PRINT "IT IS STARDATE"; FN R(D0): PRINT
10010 ON F9 GOTO 10025,10135,10165,10190,10200,10205,10225,10240
10015 ON F9-8 GOTO 10250,10271,10285
10025 PRINT "YOU HAVE DESTROYED THE KLINGON INVASION FLEET": PRINT
10030 PRINT "     ***THE FEDERATION IS SAVED***":G1=1
10035 IF (A1=0) OR (B1<>0) THEN 10110
10040 IF LEFT$ (S5$,1)<>"E" THEN 10110
10045 IF 3*S1+35*N1+C4>=100 THEN 10110
10050 IF D0-J2<=6 THEN 10075
10060 R8=0.1*S8*(S8+1)+0.1
10065 IF (K1+K2)/(D0-J2)<R8 THEN 10110
10075 PRINT : PRINT "YOU HAVE DONE SO WELL THAT COMMAND"
10076 IF S8=4 THEN 10090
10080 PRINT "PROMOTES YOU.....";
10085 IF S8=1 THEN PRINT "TO NOVICE CLASS!"
10086 IF S8=2 THEN PRINT "TO SENIOR CLASS!"
10087 IF S8=3 THEN PRINT "TO EXPERT CLASS!"
10088 PRINT "   ***CONGRATULATIONS***": GOTO 10110
10090 PRINT "PROMOTES YOU TO 'COMMODORE EMERITUS'."
10100 PRINT : PRINT "NOW YOU CAN RETIRE !"
10110 GOSUB 23000
10120 RETURN
10135 PRINT "TIME HAS RUN OUT - THE FEDERATION HAS BEEN CONQUERED AND YOUR CRAFT"
10136 PRINT "IS NOW ENEMY PROPERTY... YOU WILL STAND TRIAL AS A WAR-CRIMINAL..."
10137 PRINT "ON THE BASIS OF YOUR RECORD YOU WILL BE";
10139 IF R1*3>I1 THEN 10150
10140 PRINT " SUMMARILY EXECUTED"
10145 A1=0: GOSUB 23000: RETURN
10150 PRINT " IMPRISONED FOR LIFE"
10165 PRINT "YOUR LIFE SUPPORT RESERVES HAVE RUN OUT, AND"
10170 PRINT "YOU WILL SOON DIE!!!"
10172 PRINT
10175 PRINT "YOUR STARSHIP IS A DERELICT IN SPACE."
10180 GOTO 10300
10190 PRINT "YOUR ENERGY SUPPLY IS EXHAUSTED.": GOTO 10172
10200 PRINT "THE ";S5$;" HAS BEEN DESTROYED IN BATTLE."
10201 GOTO 10300
10205 RETURN
10225 PRINT "YOUR STARSHIP HAS BEEN DESTROYED BY A NOVA."
10230 PRINT "NICE WORK, IDIOT !!!": GOTO 10300
10240 PRINT "THE ";S5$;" HAS BEEN INCINERATED BY A SUPERNOVA."
10241 GOTO 10300
10250 PRINT "YOU HAVE BEEN CAPTURED BY THE ENEMY. IF YOU STILL HAD A STARBASE,"
10255 PRINT "YOU WOULD HAVE BEEN REPATRIATED. SINCE YOU HAVE NO BASES, YOU WILL"
10260 PRINT "BE MERCILESSLY TORTURED !!"
10266 GOTO 10300
10271 PRINT : PRINT "THE ";S5$;" IS NOW AN EXPANDING CLOUD"
10272 PRINT "OF SUB-ATOMIC PARTICLES...": GOTO 10300
10285 PRINT "STARBASE WAS UNABLE TO RE-MATERIALIZE YOUR STARSHIP."
10300 PRINT
10310 IF LEFT$ (S5$,1)="F" THEN S5$=""
10315 IF LEFT$ (S5$,1)="E" THEN S5$="FAERIE QUEENE"
10316 A1=0
10320 IF R1=0 THEN 10355
10325 G3=R4/I3:B8=(R1+2*R2)/(I1+2*I4)
10326 A3=G3/B8
10327 IF A3<1+0.5+ RND (1) THEN 10345
10330 PRINT "AS A RESULT OF YOUR ACTIONS, A TREATY WITH THE KLINGON"
10331 PRINT "EMPIRE HAS BEEN SIGNED.  THE TERMS OF THE TREATY ARE"
10332 IF A3<3* RND (1) THEN 10340
10335 PRINT "FAVORABLE TO THE FEDERATION.": PRINT
10336 PRINT "CONGRATULATIONS.": GOTO 10350
10340 PRINT "HIGHLY UNFAVORABLE TO THE FEDERATION.": GOTO 10350
10345 PRINT "THE FEDERATION WILL BE DESTROYED!"
10350 GOSUB 23000: RETURN
10355 PRINT "SINCE YOU TOOK THE LAST KLINGON WITH YOU, YOU ARE"
10360 PRINT "A MARTYR AND A HERO.":G1=1:A1=0
10390 GOSUB 23000: RETURN
11001 IF C5$<>"DOCKED" THEN 11020
11010 PRINT "--> CAPTAIN, WE'RE ALREADY DOCKED!"
11015 RETURN
11020 IF D4(9)=0 THEN 11030
11025 PRINT "SUBSPACE RADIO DAMAGED...CANNOT TRANSMIT.": RETURN
11030 IF R3<>0 THEN 11050
11040 PRINT "CAPTAIN, NO RESPONSE FROM STARBASE !": RETURN
11050 N1=N1+1: IF B6=0 THEN 11070
11060 GOTO 11130
11070 D1=1.000000e+30
11080 FOR L=1 TO R3:X=10* SQR ((B2(L)-Q1)^2+(B3(L)-Q2)^2)
11090 IF X>D1 THEN 11110
11100 D1=X:K=L
11110 NEXT L
11120 Q1=B2(K):Q2=B3(K): GOSUB 18000
11130 Q$(S6,S7)="."
11135 PRINT
11140 PRINT "STARBASE IN QUADRANT";Q1;"-";Q2;"RESPONDS --";
11145 PRINT "  ";S5$;" DEMATERIALIZES."
11146 P2=(1-0.98^D1)^0.333333
11150 FOR L=1 TO 3
11155 IF L=1 THEN PRINT "1ST ";
11160 IF L=2 THEN PRINT "2ND ";
11170 IF L=3 THEN PRINT "3RD ";
11180 PRINT "ATTEMPT TO RE-MATERIALIZE THE ";S5$;". . . . .";
11190 IF RND (1)>P2 THEN 11220
11200 PRINT "FAILS.": NEXT L
11210 F9=11: GOSUB 10000: RETURN
11220 FOR L=1 TO 5:I=B6+ INT (3* RND (1))-1
11230 IF (I<1) OR (I>10) THEN 11260
11235 J=B7+ INT (3* RND (1))-1
11240 IF (J<1) OR (J>10) THEN 11260
11250 IF Q$(I,J)="." THEN 11270
11260 NEXT L: PRINT "FAILS.": GOTO 11210
11270 PRINT "SUCCEEDS.":S6=I:S7=J:Q$(I,J)= LEFT$ (S5$,1)
11280 GOSUB 7000: PRINT "CAPTAIN, WE MADE IT!": RETURN
12001 P4=2:L5=K3:N=1
12010 FOR K=1 TO L5
12020 IF H3(K)=0 THEN 12240
12030 D6=0.9+0.01* RND (1):H2=H3(K)*D6^K7(N)
12040 P3=K6(N)
12050 P= ABS (P3): IF P4*H2<P THEN P=P4*H2
12060 K6(N)=P3- SGN (P3)* ABS (P)
12070 X8=K4(N):Y8=K5(N)
12080 IF H2>4.99 THEN 12100
12090 PRINT "MINOR HIT ON ": GOTO 12110
12100 PRINT FN R(H2);"UNIT HIT ON ";
12110 M$=Q$(X8,Y8)
12120 IF M$="K" THEN PRINT "KLINGON AT";
12125 IF M$="C" THEN PRINT "COMMANDER AT";
12130 PRINT X8;"-";Y8
12140 IF K6(N)<>0 THEN 12180
12150 A5=X8:A6=Y8:T2$=Q$(X8,Y8): GOSUB 6000
12160 IF R1<>0 THEN 12250
12170 F9=1: GOSUB 10000: GOTO 12250
12180 IF K6(N)<0 THEN 12240
12190 IF RND (1)<0.9 THEN 12240
12200 IF K6(N)>(0.4+0.4* RND (1))*P3 THEN 12240
12205 PRINT
12210 PRINT "*** CAPTAIN, THE VESSEL AT SECTOR";
12215 PRINT X8;"-";Y8
12220 PRINT "   HAS JUST LOST ITS FIREPOWER !!!"
12225 PRINT
12230 K6(N)=-K6(N)
12240 N=N+1
12250 NEXT K
12260 RETURN
13001 J3=0
13010 IF D4(7)<>0 THEN 13250
13020 IF E1<=75 THEN 13070
13030 INPUT "ENTER COURSE....";D2
13040 IF D2<0.01 OR D2>12 THEN GOSUB 40000 ELSE 13048
13041 RETURN
13048 INPUT "DISTANCE ";D1: IF D1>0 THEN 13050
13049 RETURN
13050 P3=50+250*D1
13060 IF P3<E1 THEN 13140
13070 PRINT
13080 PRINT "1ST OFFICER SPOCK-  'CAPTAIN, THE IMPULSE ENGINES"
13090 PRINT "REQUIRE 50 UNITS OF ENERGY TO ENGAGE, PLUS 250 UNITS PER ";
13100 IF E1>75 THEN 13120
13110 PRINT "QUADRANT.  THEY ARE USELESS NOW.'": RETURN
13120 PRINT "QUADRANT.  WE CAN GO A MAXIMUM OF ";
13130 PRINT FN R(0.004*(E1-50)-0.05);"QUADRANTS.'": RETURN
13140 T1=D1/0.4
13150 IF T1<R5 THEN 13200
13160 PRINT "SIR, MAX. SPEED UNDER IMPULSE IS ONLY 4 SECTORS PER STARDATE"
13170 INPUT "-- AUTHORIZE ";B$
13190 IF LEFT$ (B$,1)<>"Y" THEN RETURN
13200 GOSUB 15001:J3=1
13210 IF A2<>0 THEN RETURN
13220 E1=E1-P3
13230 IF E1>0 THEN RETURN
13240 F9=4: GOSUB 10000: RETURN
13250 PRINT "IMPULSE ENGINES DAMAGED.": RETURN
14001 N$="    #"
14005 PRINT
14010 IF D4(2)<>0 THEN 14180
14020 PRINT "L.R. SCAN FOR QUADRANT";Q1;"-";Q2: PRINT
14030 I=Q1-1:J=Q1+1:K=Q2-1:L=Q2+1
14040 FOR M=I TO J: FOR N=K TO L
14050 IF (M<=0) OR (M>8) THEN 14110
14060 IF (N<=0) OR (N>8) THEN 14110
14070 IF D4(11)=0 THEN S2(M,N)=1
14080 IF G(M,N)>=LQ THEN PRINT "  ***";" ";
14090 IF G(M,N)<LQ THEN PRINT SPC (5- LEN ( STR$ (G(M,N))));G(M,N);
14100 GOTO 14120
14110 PRINT N$;" ";
14120 NEXT N: PRINT
14130 PRINT
14140 NEXT M
14150 IF D4(11)=0 THEN RETURN
14160 PRINT "*** WARNING *** - COMPUTER DISABLED - SCAN NOT RECORDED."
14170 RETURN
14180 PRINT "LONG RANGE SENSORS DAMAGED.": RETURN
15001 A5=(15-D2)*0.523599:D4=- SIN (A5):D6= COS (A5):B8= ABS (D4)
15030 IF ABS (D6)>B8 THEN B8= ABS (D6)
15040 D4=D4/B8:D6=D6/B8:T5=0:T6=0
15050 IF D0+T1<F1(2) THEN 15080
15060 T5=1:C5$="RED":D1=D1*(F1(2)-D0)/T1+0.1
15070 T1=F1(2)-D0+0.00001
15080 Q$(S6,S7)=".":X7=S6:Y7=S7:H9= INT (10*D1*B8+0.5)
15090 IF H9=0 THEN 15115
15100 FOR L=1 TO H9
15102 X7=X7+D4:X1= INT (X7+0.5):Y7=Y7+D6:Y1= INT (Y7+0.5)
15105 IF (X1<1) OR (X1>10) THEN 15150
15106 IF (Y1<1) OR (Y1>10) THEN 15150
15108 IF Q$(X1,Y1)="O" THEN 15111
15109 IF Q$(X1,Y1)<>"." THEN 15125
15110 NEXT L
15111 D1=0.1* SQR ((S6-X1)^2+(S7-Y1)^2)
15112 S6=X1:S7=Y1
15115 F4=S6:F5=S7
15116 IF Q$(X1,Y1)<>"O" THEN 15320
15120 T2= FN A(1):T3= FN A(1)
15122 Q1= FN A(1):Q2= FN A(1):S6= FN B(1):S7= FN B(1): PRINT
15123 PRINT "*** SPACE PORTAL ENTERED ***": GOTO 15307
15125 T6=1:K=50*D1/T1+0.001:D1=0.1* SQR ((S6-X1)^2+(S7-Y1)^2)
15127 IF (Q$(X1,Y1)="K") OR (Q$(X1,Y1)="C") THEN 15145
15129 PRINT : PRINT S5$;" BLOCKED BY ";
15130 IF Q$(X1,Y1)="*" THEN PRINT "STAR AT";
15131 IF Q$(X1,Y1)="B" THEN PRINT "STARBASE AT";
15132 PRINT " SECTOR";X1;"-";Y1;"...."
15133 PRINT "EMERGENCY STOP REQUIRED"; FN R(K);"UNITS OF ENERGY."
15135 E1=E1-K
15137 S6= INT (X7-D4+0.5):F4=S6:S7= INT (Y7-D6+0.5):F5=S7
15140 IF E1>0 THEN 15320
15141 F9=4: GOSUB 10000: RETURN
15145 S6=X1:S7=Y1: GOSUB 22001:F4=S6:F5=S7: GOTO 15320
15150 IF K3=0 THEN 15165
15155 FOR L=1 TO K3
15156 F3= SQR ((X1-K4(L))^2+(Y1-K5(L))^2)
15158 K8(L)=0.5*(F3+K7(L)): NEXT L
15160 IF G(Q1,Q2)<>LQ THEN GOSUB 1000
15162 IF A2<>0 THEN RETURN
15165 X7=10*(Q1-1)+S6:Y7=10*(Q2-1)+S7
15170 X1= INT (X7+10*D1*B8*D4+0.5)
15175 Y1= INT (Y7+10*D1*B8*D6+0.5):L6=0
15180 L5=0
15185 IF X1>0 THEN 15195
15190 X1=-X1+1:L5=1
15195 IF Y1>0 THEN 15210
15200 Y1=-Y1+1:L5=1
15210 IF X1<=80 THEN 15220
15215 X1=161-X1:L5=1
15220 IF Y1<=80 THEN 15230
15225 Y1=161-Y1:L5=1
15230 IF L5=0 THEN 15240
15235 L6=1: GOTO 15180
15240 IF L6=0 THEN 15270
15260 PRINT : PRINT "*** MESSAGE FROM STARFLEET COMMAND.....STARDATE"; FN R(DO)
15261 PRINT "PERMISSION TO EXIT GALAXY - DENIED -"
15265 PRINT "'ENGINES SHUT DOWN AT ";
15266 Z1= INT ((X1+9)/10):Z2= INT ((Y1+9)/10)
15267 PRINT "QUADRANT";Z1;"-";Z2;",  ";
15268 PRINT "SECTOR";X1-10*(Z1-1);"-";Y1-10*(Z2-1);"'"
15270 IF T5<>0 THEN RETURN
15295 Q1= INT ((X1+9)/10):Q2= INT ((Y1+9)/10)
15296 S6=X1-10*(Q1-1):S7=Y1-10*(Q2-1)
15307 PRINT : GOTO 15315
15310 PRINT CHR$ (12): PRINT "ENTERING THE QUADRANT  (";Q1;"-";Q2;")"
15315 Q$(S6,S7)= LEFT$ (S5$,1): GOSUB 18000: GOSUB 29002: GOSUB 14001: RETURN
15320 Q$(S6,S7)= LEFT$ (S5$,1)
15321 IF L6=1 THEN RETURN
15325 IF K3=0 THEN 15390
15330 FOR L=1 TO K3
15340 F3= SQR ((F4-K4(L))^2+(F5-K5(L))^2)
15350 K8(L)=0.5*(K7(L)+F3)
15360 K7(L)=F3
15370 NEXT L
15380 GOSUB 28000
15390 GOSUB 17000: RETURN
16001 A=1:B=1
16010 FOR K=1 TO K3
16020 C=K4(K):D=K5(K)
16030 IF Q$(C,D)="C" THEN 16050
16040 NEXT K
16050 N=0:F=K6(K)+100*K3
16060 IF F>LQ THEN N= INT ( RND (1)*K7(K)+1)
16065 IF ((C5$="DOCKED") AND ((B4<>Q1) OR (B5<>Q2))) THEN N=-S8
16070 IF N=0 THEN N= INT (((F+200* RND (1))/150)-5)
16071 IF N=0 THEN RETURN
16072 IF (N>0) AND (K7(K)<1.5) THEN RETURN
16075 IF ABS (N)>S8 THEN N= SGN (N)* ABS (S8)
16080 T= ABS (N):P=S6-C:Q=S7-D
16085 IF 2* ABS (P)< ABS (Q) THEN P=0
16090 IF 2* ABS (Q)< ABS (P) THEN Q=0
16095 IF P<>0 THEN P= SGN (P*N)
16100 IF Q<>0 THEN Q= SGN (Q*N)
16105 R=C:S=D:Q$(C,D)="."
16110 FOR L2=1 TO T:L=R+P:M=S+Q
16115 IF (L>0) AND (L<=10) THEN 16120
16117 ON SGN (N)+2 GOTO 16240,16165,16165
16120 IF (M>0) AND (M<=10) THEN 16130
16125 ON SGN (N)+2 GOTO 16240,16135,16135
16130 IF Q$(L,M)="." THEN 16195
16135 IF (Q=B) OR (P=0) THEN 16165
16140 M=S+B
16145 IF (M>0) AND (M<=10) THEN 16155
16150 ON SGN (N)+2 GOTO 16240,16160,16160
16155 IF Q$(L,M)="." THEN 16195
16160 B=-B
16165 IF (P=A) OR (Q=0) THEN 16200
16170 L=R+A
16175 IF (L>0) AND (L<=10) THEN 16185
16180 ON SGN (N)+2 GOTO 16240,16190,16190
16185 IF Q$(L,M)="." THEN 16195
16190 A=-A: GOTO 16200
16195 R=L:S=M
16200 NEXT L2
16205 Q$(R,S)="C"
16210 IF (R=C) AND (S=D) THEN RETURN
16215 K4(K)=R:K5(K)=S:K7(K)= SQR ((S6-R)^2+(S7-S)^2)
16220 K8(K)=K7(K): IF N>0 THEN PRINT "*** COMMANDER ADVANCES TO";
16225 IF N<0 THEN PRINT "*** COMMANDER RETREATS TO";
16230 PRINT " SECTOR";R;"-";S: GOSUB 28000: RETURN
16240 I=Q1+ INT ((L+9)/10)-1:J=Q2+ INT ((M+9)/10)-1
16245 IF (I<1) OR (I>8) THEN 16350
16250 IF (J<1) OR (J>8) THEN 16350
16260 FOR L3=1 TO R2
16265 IF (C1(L3)=I) AND (C2(L3)=J) THEN 16350
16270 NEXT L3: PRINT "*** COMMANDER ESCAPES TO ";
16275 PRINT "QUADRANT";I;"-";J;"  (AND REGAINS STRENGTH)"
16280 K4(K)=K4(K3):K5(K)=K5(K3):K7(K)=K7(K3):K8(K)=K8(K3)
16285 K6(K)=K6(K3):K3=K3-1:C3=0
16290 IF C5$<>"DOCKED" THEN GOSUB 17000
16300 GOSUB 28000
16310 G(Q1,Q2)=G(Q1,Q2)-100:G(I,J)=G(I,J)+100
16320 FOR L3=1 TO R2
16330 IF (C1(L3)=Q1) AND (C2(L3)=Q2) THEN 16340
16335 NEXT L3
16340 C1(L3)=I:C2(L3)=J: RETURN
16350 A=-A:B=-B: GOTO 16200
17000 C5$="GREEN": IF E1<LQ THEN C5$="YELLOW"
17020 IF G(Q1,Q2)>99 THEN C5$="RED"
17030 RETURN
18000 J4=1:B6=0:B7=0:K3=0:C3=0:U=G(Q1,Q2): IF U>999 THEN 18290
18030 K3= INT (0.01*U): FOR A=1 TO 10: FOR B=1 TO 10:Q$(A,B)=".": NEXT B: NEXT A
18040 Q$(S6,S7)= LEFT$ (S5$,1):U=G(Q1,Q2): IF U<100 THEN 18150
18050 U=U-100*K3: FOR A=1 TO K3
18060 S= FN B(1):K4(A)=S:T= FN B(1):K5(A)=T
18070 IF Q$(S,T)<>"." THEN 18060
18080 Q$(S,T)="K":K7(A)= SQR ((S6-S)^2+(S7-T)^2):K8(A)=K7(A)
18090 K6(A)= RND (1)*150+325: NEXT A
18100 IF R2=0 THEN 18140
18110 FOR A=1 TO R2
18115 IF (C1(A)=Q1) AND (C2(A)=Q2) THEN 18130
18120 NEXT A: GOTO 18140
18130 Q$(S,T)="C":K6(K3)=LQ+400* RND (1):C3=1
18140 GOSUB 28000
18150 IF U<10 THEN 18190
18160 U=U-10
18170 B6= FN B(1):B7= FN B(1): IF Q$(B6,B7)<>"." THEN 18170
18180 Q$(B6,B7)="B"
18190 GOSUB 17000: IF U<1 THEN RETURN
18200 FOR A=1 TO U
18210 S= FN B(1):T= FN B(1): IF Q$(S,T)<>"." THEN 18210
18220 Q$(S,T)="*": NEXT A
18230 IF (T2<>Q1) OR (T3<>Q2) THEN RETURN
18240 S= FN B(1):T= FN B(1): IF Q$(S,T)<>"." THEN 18240
18250 Q$(S,T)="O": PRINT
18260 PRINT "*** SHORT-RANGE SENSORS DETECT A SPACE-WARP IN THIS QUADRANT"
18280 RETURN
18290 FOR A=1 TO 10: FOR B=1 TO 10:Q$(A,B)=".": NEXT B: NEXT A
18300 Q$(S6,S7)= LEFT$ (S5$,1): RETURN
19002 IF RND (1)>0.1 THEN 19015
19010 GOSUB 27000: RETURN
19015 Q$(A5,A6)=".": PRINT "*** STAR AT SECTOR";A5;"-";A6;"NOVAS."
19020 G(Q1,Q2)=G(Q1,Q2)-1:S1=S1+1
19025 B9=1:T6=1:T7=1:K=0:X1=0:Y1=0
19030 H4(B9,1)=A5:H4(B9,2)=A6
19035 FOR M=B9 TO T6: FOR Q=1 TO 3: FOR J=1 TO 3
19040 IF J*Q=4 THEN 19260
19045 J5=H4(M,1)+Q-2:J6=H4(M,2)+J-2
19050 IF (J5<1) OR (J5>10) THEN 19260
19055 IF (J6<1) OR (J6>10) THEN 19260
19060 IF Q$(J5,J6)="." THEN 19260
19065 IF Q$(J5,J6)="O" THEN 19260
19070 IF Q$(J5,J6)<>"*" THEN 19105
19075 IF RND (1)>=0.1 THEN 19085
19080 X2=J5:Y2=J6: GOSUB 27000: RETURN
19085 T7=T7+1:H4(T7,1)=J5:H4(T7,2)=J6:G(Q1,Q2)=G(Q1,Q2)-1
19090 S1=S1+1: PRINT "*** STAR AT SECTOR";J5;"-";J6;"NOVAS."
19100 GOTO 19255
19105 IF Q$(J5,J6)<>"B" THEN 19140
19110 G(Q1,Q2)=G(Q1,Q2)-10: FOR V=1 TO R3
19115 IF (B2(V)<>Q1) OR (B3(V)<>Q2) THEN 19125
19120 B2(V)=B2(R3):B3(V)=B3(R3)
19125 NEXT V:R3=R3-1:B6=0:B7=0:B1=B1+1: GOSUB 17000
19130 PRINT "*** STARBASE AT SECTOR";J5;"-";J6;"DESTROYED."
19135 GOTO 19255
19140 IF (S6<>J5) OR (S7<>J6) THEN 19190
19145 PRINT "*** STARSHIP BUFFETED BY NOVA.": IF S4<>0 THEN 19155
19150 E1=E1-LQ: GOTO 19170
19155 IF S3>=LQ THEN 19180
19160 D6=LQ-S3:E1=E1-D6: GOSUB 17000:S3=0:S4=0
19165 PRINT "*** STARSHIP SHIELDS KNOCKED OUT.": D4(8)=(0.005000001*D5* RND(1))*D6
19170 IF E1>0 THEN 19185
19175 F9=7: GOSUB 10000: RETURN
19180 S3=S3-LQ
19185 X1=X1+S6-H4(M,1):Y1=Y1+S7-H4(M,2):K=K+1: GOTO 19260
19190 IF Q$(J5,J6)<>"C" THEN 19250
19195 FOR V=1 TO K3
19200 IF (K4(V)=J5) AND (K5(V)=J6) THEN 19210
19205 NEXT V
19210 K6(V)=K6(V)-800: IF K6(V)<=0 THEN 19250
19215 N5=J5+J5-H4(M,1):N6=J6+J6-H4(M,2)
19220 PRINT "*** COMMANDER AT SECTOR";J5;"-";J6;"DAMAGED";
19225 IF (N5<1) OR (N5>10) OR (N6<1) OR (N6>10) THEN 19245
19230 PRINT " AND BUFFETED TO SECTOR";N5;"-";N6
19235 Q$(N5,N6)="C":K4(V)=N5:K5(V)=N6
19240 K7(V)= SQR ((S6-N5)^2+(S7-N6)^2):K8(V)=K7(V)
19241 Q$(J5,J6)="."
19245 PRINT : GOTO 19260
19250 A5=J5:A6=J6:T2$=Q$(J5,J6): GOSUB 6000: GOTO 19260
19255 PRINT :Q$(J5,J6)="."
19260 NEXT J: NEXT Q: NEXT M
19265 IF T6=T7 THEN 19280
19270 B9=T6+1:T6=T7: GOTO 19035
19280 IF K=0 THEN RETURN
19290 D1=K*0.1
19300 IF X1<>0 THEN X1= SGN (X1)
19310 IF Y1<>0 THEN Y1= SGN (Y1)
19320 I=3*(X1+1)+Y1+2
19330 D2=C5(I)
19340 IF D2=0 THEN D1=0
19350 IF D1=0 THEN RETURN
19360 PRINT : PRINT "FORCE OF NOVA DISPLACES STARSHIP."
19370 GOSUB 15001: RETURN
20001 P=2:J3=1
20020 IF C5$<>"DOCKED" THEN 20030
20025 PRINT "PHASERS CAN'T BE FIRED THRU BASE SHIELDS.": GOTO 20080
20030 IF D4(3)=0 THEN 20050
20040 PRINT "PHASER BANKS DAMAGED.": GOTO 20080
20050 IF S4=0 THEN 20060
20055 PRINT "SHIELDS MUST BE DOWN TO FIRE PHASERS.": GOTO 20080
20060 IF K3>0 THEN 20090
20065 PRINT
20070 PRINT "THE SHORT-RANGE SENSORS DETECT NO ENEMY IN THIS QUADRANT."
20080 J3=0: RETURN
20090 PRINT "PHASERS LOCKED ON TARGET.  ENERGY AVAILABLE=";
20095 PRINT 0.01* INT (100*E1)
20100 INPUT "UNITS TO FIRE";P1: IF P1<E1 THEN 20120
20110 PRINT "ENERGY AVAILABLE =";: GOTO 20095
20120 IF P1>0 THEN 20140
20130 J3=0: RETURN
20140 E1=E1-P1
20142 IF D4(11)=0 THEN 20147
20144 P1=P1*( RND (1)*0.5+0.5)
20145 PRINT : PRINT "COMPUTER MALFUNCTION HAMPERS PHASER ACCURACY.": PRINT
20147 E=P1: IF K3=0 THEN 20310
20150 E=0:T5=(K3*(K3+1))/2
20160 FOR I=1 TO K3:H3(I)=((K3+1-I)/T5)*P1
20170 H5(I)= ABS (K6(I))/(P*0.9^K7(I))
20180 IF H3(I)<=H5(I) THEN 20200
20190 E=E+(H3(I)-H5(I)):H3(I)=H5(I)
20200 NEXT I
20210 IF E=0 THEN 20280
20220 FOR I=1 TO K3:R7=H5(I)-H3(I)
20230 IF R7<=0 THEN 20260
20240 IF R7>=E THEN 20270
20250 H3(I)=H5(I):E=E-R7
20260 NEXT I: GOTO 20280
20270 H3(I)=H3(I)+E:E=0
20280 GOSUB 12001
20290 IF (E<>0) AND (A2=0) THEN 20310
20300 J3=1: RETURN
20310 PRINT FN R(E);"EXPENDED ON EMPTY SPACE.":J3=1: RETURN
21001 J3=1: IF D4(4)=0 THEN 21015
21010 PRINT "PHOTON TUBES DAMAGED.": GOTO 21035
21015 IF T4<>0 THEN 21025
21020 PRINT "NO TORPEDOS LEFT.": GOTO 21035
21025 INPUT "TORPEDO COURSE";C6
21030 IF C6<0.01 OR C6>12 THEN GOSUB 40000 ELSE 21040
21035 J3=0: RETURN
21040 INPUT "BURST OF 3";B$:N=1
21045 IF LEFT$ (B$,1)="N" THEN 21070
21050 IF LEFT$ (B$,1)<>"Y" THEN 21040
21051 IF T4>2 THEN 21060
21055 PRINT "NO BURST.  ONLY";T4;"TORPEDOS LEFT.": GOTO 21035
21060 INPUT "SPREAD ANGLE (3 - 30 DEG)";G2
21061 IF G2<0 THEN 21035
21062 IF (G2<3) OR (G2>30) THEN 21060
21063 G2= FN D(G2)
21065 N=3
21070 FOR Z6=1 TO N
21075 IF C5$<>"DOCKED" THEN T4=T4-1
21080 Z7=Z6:R= RND (1)
21085 R=(R+ RND (1))*0.5-0.5
21090 IF (R>=-0.4) AND (R<=0.4) THEN 21125
21095 R=( RND (1)+1.2)*R: IF N=3 THEN 21105
21100 PRINT "*** METEORITE DEFLECTION":R= INT ( RND (1)*50)+1
21101 PRINT "TORPEDO EFFECTIVENESS REDUCED"; R;"%": PRINT : GOTO 21110
21105 PRINT "*** TORPEDO NUMBER";Z6;"MISFIRE - ";R;"% DOWN"
21110 IF RND (1)>0.2 THEN 21125
21115 PRINT "*** PHOTON TUBES DAMAGED BY MISFIRE."
21120 D4(4)=D5*(1+2* RND (1)): GOTO 21440
21125 IF (S4<>0) OR (C5$="DOCKED") THEN R=R+0.001*S3*R
21130 A3=C6+0.25*R: IF N=1 THEN 21140
21135 A8=(15-A3+(2-Z6)*G2)*0.523599: PRINT
21137 PRINT "TRACK FOR TORPEDO NUMBER";Z7;"--": GOTO 21145
21140 PRINT : PRINT "TORPEDO TRACK --":A8=(15-A3)*0.523599
21145 X4=- SIN (A8):Y4= COS (A8):B8= ABS (X4)
21146 IF ABS (Y4)> ABS (X4) THEN B8= ABS (Y4)
21150 X4=X4/B8:Y4=Y4/B8:X5=S6:Y5=S7
21155 FOR L9=1 TO 15:X5=X5+X4:A5= INT (X5+0.5)
21160 IF (A5<1) OR (A5>10) THEN 21430
21165 Y5=Y5+Y4:A6= INT (Y5+0.5)
21170 IF (A6<1) OR (A6>10) THEN 21430
21175 IF (L9=5) OR (L9=9) THEN PRINT
21180 PRINT FN R(X5);"-"; FN R(Y5);", ";
21185 IF Q$(A5,A6)<>"." THEN 21195
21190 GOTO 21425
21195 PRINT : IF Q$(A5,A6)="K" THEN 21220
21200 IF Q$(A5,A6)<>"C" THEN 21325
21205 IF RND (1)>0.1 THEN 21220
21210 PRINT "*** COMMANDER AT SECTOR";A5;"-";A6;"USES ANTI-PHOTON DEVICE !"
21215 PRINT "-- TORPEDO NEUTRALIZED.": GOTO 21435
21220 FOR V=1 TO K3
21225 IF (A5=K4(V)) AND (A6=K5(V)) THEN 21235
21230 NEXT V
21235 K=K6(V):W3=200+800* RND (1)
21240 IF ABS (K)<W3 THEN W3= ABS (K)
21245 K6(V)=K- SGN (K)* ABS (W3): IF K6(V)<>0 THEN 21255
21250 T2$=Q$(A5,A6): GOSUB 6000: GOTO 21435
21255 IF Q$(A5,A6)="K" THEN PRINT "*** KLINGON AT";
21260 IF Q$(A5,A6)="C" THEN PRINT "*** COMMANDER AT";
21265 PRINT A5;"-";A6;
21270 A7=A8+2.5*( RND (1)-0.5)
21275 W3= ABS (- SIN (A7)): IF ABS ( COS (A7))>W3 THEN W3= ABS ( COS (A7))
21280 X7=- SIN (A7)/W3:Y7= COS (A7)/W3
21285 P= INT (A5+X7+0.5):Q= INT (A6+Y7+0.5)
21290 IF (P<1) OR (P>10) OR (Q<1) OR (Q>10) THEN 21320
21295 IF Q$(P,Q)<>"." THEN 21320
21300 Q$(P,Q)=Q$(A5,A6):Q$(A5,A6)=".": PRINT "DAMAGED--"
21305 PRINT "   DISPLACED BY BLAST TO SECTOR";P;"-";Q
21310 K4(V)=P:K5(V)=Q:K7(V)= SQR ((S6-P)^2+(S7-Q)^2)
21311 K8(V)=K7(V)
21315 GOSUB 28000: GOTO 21435
21320 PRINT "DAMAGED, BUT NOT DESTROYED.": GOTO 21435
21325 IF Q$(A5,A6)<>"B" THEN 21365
21330 PRINT "*** STARBASE DESTROYED...!!!"
21335 IF S2(Q1,Q2)<0 THEN S2(Q1,Q2)=0
21340 FOR W=1 TO R3
21345 IF (B2(W)<>Q1) OR (B3(W)<>Q2) THEN 21355
21350 B2(W)=B2(R3):B3(W)=B3(R3)
21355 NEXT W:Q$(A5,A6)=".":R3=R3-1:B6=0:B7=0
21360 G(Q1,Q2)=G(Q1,Q2)-10:B1=B1+1: GOSUB 17000: GOTO 21435
21365 IF Q$(A5,A6)<>"*" THEN 21405
21370 IF RND (1)>0.15 THEN 21385
21375 PRINT "*** STAR AT SECTOR";A5;"-";A6;"UNAFFECTED BY PHOTON BLAST"
21380 GOTO 21435
21385 X2=A5:Y2=A6: GOSUB 19002:A5=X2:A6=Y2
21390 IF G(Q1,Q2)=LQ THEN RETURN
21395 IF A2<>0 THEN RETURN
21400 GOTO 21435
21405 PRINT : PRINT "  >>> ORGANIAN TRUCE-MONITOR DESTROYED <<<":Q$(A5,A6)=".": PRINT
21420 T2=0:T3=0: GOTO 21435
21425 NEXT L9
21430 PRINT : PRINT "TORPEDO MISSED!"
21435 NEXT Z6
21440 IF R1<>0 THEN RETURN
21445 F9=1: GOSUB 10000: RETURN
22001 PRINT : PRINT "*** RED ALERT!!   RED ALERT!! ***": PRINT
22010 PRINT "*** COLLISION IMMINENT!!": PRINT
22020 PRINT "*** ";S5$;" RAMS ";:W7=1: IF Q$(S6,S7)="C" THEN W7=2
22030 IF W7=1 THEN PRINT "KLINGON AT ";
22040 IF W7=2 THEN PRINT "COMMANDER AT ";
22050 PRINT "SECTOR";S6;"-";S7:A5=S6:A6=S7:T2$=Q$(S6,S7)
22060 GOSUB 6000: PRINT "*** ";S5$;" HEAVILY DAMAGED."
22070 K= INT (5+ RND (1)*20): PRINT "***SICKBAY REPORTS";K;"CASUALTIES!"
22080 C4=C4+K: FOR L=1 TO 12:I= RND (1)
22090 J=(3.5*W7*( RND (1)+I)+1)*D5
22100 IF L=6 THEN J=J/3
22110 D4(L)=D4(L)+T1+J: NEXT L:D4(6)=D4(6)-3
22120 IF D4(6)<0 THEN D4(6)=0
22130 S4=0: IF R1<>0 THEN RETURN
22140 F9=1: GOSUB 10000: RETURN
23000 P=D0-J2: IF (P<>0) AND (R1=0) THEN 23020
23010 IF P<5 THEN P=5
23020 N=(K2+K1)/P:K= INT (500*N+0.5):L=0
23030 IF G1<>0 THEN L=100*S8
23035 I=0
23040 IF LEFT$ (S5$,1)="E" THEN M=0
23045 IF LEFT$ (S5$,1)="F" THEN M=1
23050 IF LEFT$ (S5$,1)="" THEN M=2
23060 IF A1=0 THEN I=200
23070 J=10*K1+50*K2+K+L-I-100*B1-100*M-35*N1-3*S1-C4
23080 PRINT : IF J<>0 THEN 23100
23090 PRINT "AS YET, YOU HAVE NO SCORE.": RETURN
23100 PRINT "YOUR SCORE --": PRINT : IF K1=0 THEN 23120
23110 PRINT K1; TAB( 5);"ORDINARY KLINGON(S) DESTROYED"; TAB( 36);10*K1*MR
23120 IF K2=0 THEN 23140
23130 PRINT K2; TAB( 5);"KLINGON COMMANDER(S) DESTROYED"; TAB( 36);50*K2*MR
23140 IF K=0 THEN 23160
23150 PRINT FN R(N); TAB( 5);"KLINGONS PER STARDATE, AVERAGE";
23155 PRINT TAB( 36);K*MR
23160 IF S1=0 THEN 23180
23170 PRINT S1; TAB( 5);"STAR(S) DESTROYED"; TAB( 36);-3*S1*MR
23180 IF B1=0 THEN 23200
23190 PRINT B1; TAB( 5);"STARBASES DESTROYED"; TAB( 36);-100*B1*MR
23200 IF N1=0 THEN 23220
23210 PRINT N1; TAB( 5);"SOS CALL(S) TO A STARBASE"; TAB( 36);-35*N1*MR
23220 IF C4=0 THEN 23240
23230 PRINT C4; TAB( 5);"CASUALTIES INCURRED"; TAB( 36);-C4*MR
23240 IF M=0 THEN 23260
23250 PRINT M; TAB( 5);"SHIP(S) LOST OR DESTROYED"; TAB( 36)-100*M*MR
23260 IF A1<>0 THEN 23280
23270 PRINT TAB( 5)"PENALTY FOR GETTING KILLED"; TAB( 36);-200*MR
23280 IF G1=0 THEN 23300
23290 PRINT TAB( 5);"BONUS FOR WINNING ";S$(S8);" GAME"; TAB( 36);L*MR
23300 PRINT TAB( 5);"-------------------------------------"
23310 PRINT TAB( 28);"TOTAL"; TAB( 36);J*MR;"**": RETURN
24001 A2=0:G1=0: GOSUB 4001:S5$="ENTERPRISE"
24010 I7=5000:E1=I7:I8=2500:S3=I8:S4=0:S9=S4:J1=4:L1=J1
24020 Q1= FN A(1):Q2= FN A(1):S6= FN B(1):S7= FN B(1):I9=10:T4=I9
24030 W1=5:W2=25: FOR I=1 TO 12:D4(I)=0: NEXT
24040 J2=100* INT (31* RND (1)+20):D0=J2:K1=0:K2=0:N1=0:N2=0:R6=0:C4=0
24050 A1=1:D3=0.25: FOR I=1 TO 8: FOR J=1 TO 8:S2(I,J)=0: NEXT J: NEXT I
24060 F1(1)=D0-0.5*I5* LOG ( RND (1)):F1(5)=1.000000e+30
24070 F1(2)=D0-1.5*(I5/R2)* LOG ( RND (1)):I6=0
24080 F1(3)=D0-0.3*I5* LOG ( RND (1)):F1(4)=D0-0.3*I5* LOG ( RND (1))
24090 FOR I=1 TO 8: FOR J=1 TO 8:K= INT ( RND (1)*9+1):I6=I6+K
24100 G(I,J)=K: NEXT J: NEXT I:S1=0
24110 FOR I=1 TO I2
24120 X= INT ( RND (1)*6+2):Y= INT ( RND (1)*6+2)
24130 IF G(X,Y)>=10 THEN 24120
24140 IF I<2 THEN 24180
24150 K=I-1: FOR J=1 TO K:D1= SQR ((B2(J)-X)^2+(B3(J)-Y)^2)
24160 IF D1<2 THEN 24120
24170 NEXT J
24180 B2(I)=X:B3(I)=Y:S2(X,Y)=-1:G(X,Y)=G(X,Y)+10: NEXT I
24190 B1=0:K=I1-I4:L= INT (0.25*S8*(9-L2)+1)
24200 M= INT ((1- RND (1)^2)*L): IF M>K THEN M=K
24210 N=100*M
24220 X= FN A(1):Y= FN A(1): IF G(X,Y)+N>999 THEN 24220
24230 G(X,Y)=G(X,Y)+N:K=K-M: IF K<>0 THEN 24200
24240 FOR I=1 TO I4
24250 X= FN A(1):Y= FN A(1): IF (G(X,Y)<99) AND ( RND (1)<0.75) THEN 24250
24260 IF G(X,Y)>899 THEN 24250
24270 IF I=1 THEN 24300
24280 M=I-1: FOR J=1 TO M: IF (C1(J)=X) AND (C2(J)=Y) THEN 24250
24290 NEXT J
24300 G(X,Y)=G(X,Y)+100:C1(I)=X:C2(I)=Y: NEXT I
24305 I= INT (D0): PRINT :S0=0
24310 T2= FN A(1):T3= FN A(1): IF G(T2,T3)<100 THEN 24310
24440 PRINT "STARDATE..............";I
24450 PRINT "NUMBER OF KLINGONS....";I1
24460 PRINT "NUMBER OF STARDATES..."; INT (I5)
24470 PRINT "NUMBER OF STARBASES...";I2
24480 PRINT "STARBASE LOCATIONS....";
24490 FOR I=1 TO I2: PRINT B2(I);"-";B3(I);
24500 IF I<>I2 THEN PRINT ", ";
24510 NEXT I: PRINT : PRINT
24530 GOSUB 18000
24531 PRINT : INPUT "READY TO CONTINUE";NL$: PRINT CHR$ (12): GOSUB 29002: GOSUB 14001: RETURN
25010 INPUT "WARP FACTOR";K
25020 PRINT
25025 IF K<1 THEN 25140
25026 IF K>10 THEN 25150
25030 J=W1:W1=K:W2=W1*W1
25040 IF (W1<=J) OR (W1<=6) THEN 25070
25050 IF W1<=8 THEN 25080
25060 IF W1>8 THEN 25100
25070 PRINT "'WARP FACTOR";W1;"CAPTAIN'": RETURN
25080 PRINT "*** OUR MAXIMUM SAFE SPEED IS WARP 6": RETURN
25100 IF W1=10 THEN 25130
25110 PRINT "*** CAPTAIN, OUR ENGINES MAY NOT TAKE IT !": RETURN
25130 PRINT "-'AYE, CAPTAIN, WE'LL GIVE IT A TRY.'": RETURN
25140 PRINT "-'WE CAN'T GO BELOW WARP 1, CAPTAIN.'": RETURN
25150 PRINT "-'OUR TOP SPEED IS WARP 10, CAPTAIN.'"
25160 RETURN
26001 J3=0: IF D4(8)<>0 THEN 26600
26010 IF S4<>0 THEN 26530
26500 INPUT "SHIELDS ARE DOWN.  DO YOU WANT THEM UP";B$
26510 IF LEFT$ (B$,1)="Y" THEN 26560
26520 RETURN
26530 INPUT "SHIELDS ARE UP.  DO YOU WANT THEM DOWN";B$
26540 IF LEFT$ (B$,1)="Y" THEN 26590
26550 RETURN
26560 S4=1:S9=1: IF C5$<>"DOCKED" THEN E1=E1-50
26570 PRINT "SHIELDS RAISED.": IF E1<=0 THEN 26610
26580 J3=1: RETURN
26590 S4=0:S9=1: PRINT "SHIELDS LOWERED.":J3=1: RETURN
26600 PRINT "SHIELDS DAMAGED AND DOWN. ": RETURN
26610 PRINT : PRINT "SHIELDS CONSUME ALL ENERGY."
26620 F9=4: GOSUB 10000: RETURN
27000 IF X2<>0 THEN 27100
27010 N= INT ( RND (1)*I6+1): FOR X=1 TO 8: FOR Y=1 TO 8
27020 N=N-(G(X,Y)- INT (G(X,Y)/10)*10): IF N<=0 THEN 27040
27030 NEXT Y: NEXT X: RETURN
27040 IF (X<>Q1) OR (Y<>Q2) THEN 27150
27050 IF J4<>0 THEN 27150
27060 N= INT ( RND (1)*(G(X,Y)- INT (G(X,Y)/10)*10))+1
27070 FOR X3=1 TO 10: FOR Y3=1 TO 10: IF Q$(X3,Y3)<>"*" THEN 27090
27080 N=N-1: IF N=0 THEN 27100
27090 NEXT Y3: NEXT X3
27100 PRINT : PRINT "*** RED ALERT!!  RED ALERT!! ***"
27105 X3=X2:Y3=Y2
27110 PRINT "*** INCIPIENT SUPERNOVA DETECTED AT SECTOR";X3;"-";Y3
27120 X=Q1:Y=Q2:K=(X2-S6)^2+(Y2-S7)^2
27130 IF K>1.5 THEN 27180
27140 PRINT "*** EMERGENCY AUTO-OVERRIDE JAMMED ***":A2=1: GOTO 27180
27150 IF D4(9)<>0 THEN 27180
27160 PRINT : PRINT "MESSAGE FROM STARFLEET COMMAND...STARDATE"; INT (D0)
27170 PRINT "'SUPERNOVA IN QUADRANT";X;"-";Y;
27175 PRINT "....CAUTION ADVISED'"
27180 N=G(X,Y):R= INT (N/100):Q=0
27190 IF (X<>Q1) OR (Y<>Q2) THEN 27210
27200 K3=0:C3=0
27210 IF R=0 THEN 27270
27220 R1=R1-R: IF R2=0 THEN 27270
27230 FOR L=1 TO R2: IF (C1(L)<>X) OR (C2(L)<>Y) THEN 27260
27240 C1(L)=C1(R2):C2(L)=C2(R2):C1(R2)=0:C2(R2)=0
27250 R2=R2-1:R=R-1:Q=1: IF R2=0 THEN F1(2)=1.000000e+30
27260 NEXT L
27270 IF R3=0 THEN 27310
27280 FOR L=1 TO R3: IF (B2(L)<>X) OR (B3(L)<>Y) THEN 27300
27290 B2(L)=B2(R3):B3(L)=B3(R3):B2(R3)=0:B3(R3)=0:R3=R3-1
27300 NEXT L
27310 IF X2=0 THEN 27350
27320 N=G(X,Y)- INT (G(X,Y)/100)*100
27330 S1=S1+(N- INT (N/10)*10):B1=B1+ INT (N/10)
27340 K1=K1+R:K2=K2+Q
27350 IF (S2(X,Y)<>0) AND (D4(9)<>0) THEN S2(X,Y)=LQ+G(X,Y)
27360 IF (D4(9)=0) OR ((Q1=X) AND (Q2=Y)) THEN S2(X,Y)=1
27370 G(X,Y)=1000
27380 IF (R1<>0) OR ((X=Q1) AND (Y=Q2)) THEN 27430
27390 PRINT CHR$ (12): PRINT "*** SUPERNOVA IN QUADRANT";X;"-";Y;"HAS DESTROYED THE"
27400 PRINT "REMAINDER OF THE ENEMY FLEET !!"
27420 F9=1: GOSUB 10010: RETURN
27430 IF A2=0 THEN RETURN
27440 F9=8: GOSUB 10010: RETURN
28000 IF K3<=1 THEN RETURN
28010 Z4=0: FOR O=1 TO K3-1: IF K7(O)<=K7(O+1) THEN 28080
28020 K=K7(O):K7(O)=K7(O+1):K7(O+1)=K
28030 K=K8(O):K8(O)=K8(O+1):K8(O+1)=K
28040 K=K4(O):K4(O)=K4(O+1):K4(O+1)=K
28050 K=K5(O):K5(O)=K5(O+1):K5(O+1)=K
28060 K=K6(O):K6(O)=K6(O+1):K6(O+1)=K
28070 Z4=1
28080 NEXT O
28090 IF Z4<>0 THEN 28010
28100 RETURN
29002 IF D(1)<>0 THEN 29230
29010 PRINT : PRINT "    1 2 3 4 5 6 7 8 9 10"
29020 FOR I=1 TO 10: IF I<10 THEN PRINT " ";
29030 PRINT I;: FOR J=1 TO 10: PRINT Q$(I,J);" ";: NEXT J
29040 ON I GOTO 29050,29060,29080,29090,29140
29045 ON I-5 GOTO 29150,29160,29170,29200,29210
29050 PRINT " STARDATE      "; FN R(D0): GOTO 29220
29060 IF C5$<>"DOCKED" THEN GOSUB 17000
29070 PRINT " CONDITION      ";C5$: GOTO 29220
29080 PRINT " POSITION      ";Q1;"-";Q2;", ";S6;"-";S7: GOTO 29220
29090 PRINT " LIFE SUPPORT   ";: IF D4(5)<>0 THEN 29110
29100 PRINT "ACTIVE": GOTO 29220
29110 IF C5$<>"DOCKED" THEN 29130
29120 PRINT "DAMAGED, SUPPORTED BY STARBASE": GOTO 29220
29130 PRINT "DAMAGED, RESERVES="; FN S(L1): GOTO 29220
29140 PRINT " WARP FACTOR   "; FN R(W1): GOTO 29220
29150 PRINT " ENERGY"; SPC (8);0.01* INT (100*E1): GOTO 29220
29160 PRINT " TORPEDOS      ";T4: GOTO 29220
29170 PRINT " SHIELDS        ";:B$="DOWN,": IF S4<>0 THEN B$="UP,"
29180 IF D4(8)>0 THEN B$="DAMAGED,"
29190 PRINT B$; INT (100*S3/I8+0.5);"%": GOTO 29220
29200 PRINT " KLINGONS LEFT ";R1: GOTO 29220
29210 PRINT " TIME LEFT     "; FN S(R5)
29220 NEXT I: RETURN
29230 PRINT "SHORT RANGE SENSORS DAMAGED.": RETURN
30001 PRINT : PRINT "*** TIME WARP ENTERED ***": PRINT "YOU ARE TRAVELING ";
30010 IF S0<>0 THEN 30050
30020 T1=-0.5*I5* LOG ( RND (1))
30030 PRINT "FORWARD IN TIME"; FN R(T1);"STARDATES."
30040 F1(2)=F1(2)+T1: GOTO 30200
30050 M=D0:D0=D9(1)
30060 PRINT "BACKWARD IN TIME"; FN R(M-D0);"STARDATES.":S0=0
30070 R1=D9(2):R2=D9(3):R3=D9(4):R4=D9(5):R5=D9(6)
30080 S1=D9(7):B1=D9(8):K1=D9(9):K2=D9(10)
30090 FOR I=1 TO 8: FOR J=1 TO 8:G(I,J)=D9(I-1+8*(J-1)+11): NEXT J: NEXT I
30100 FOR I=75 TO 84:C1(I-74)=D9(I): NEXT
30110 FOR I=85 TO 94:C2(I-84)=D9(I): NEXT
30120 FOR I=95 TO 99:B2(I-94)=D9(I): NEXT
30130 FOR I=100 TO 104:B3(I-99)=D9(I): NEXT :B4=D9(105):B5=D9(106)
30140 F1(1)=D0-0.5*I5* LOG ( RND (1))
30150 IF R2<>0 THEN F1(2)=D0-(I5/R2)* LOG ( RND (1))
30160 F1(3)=D0-0.5*I5* LOG ( RND (1))
30170 FOR I=1 TO 8: FOR J=1 TO 8: IF 1<S2(I,J) THEN S2(I,J)=1
30180 NEXT J: NEXT I
30185 PRINT
30190 PRINT "SPOCK HAS RECONSTRUCTED A CORRECT STAR CHART FROM MEMORY."
30200 GOSUB 18000: RETURN
31001 J3=0: IF D4(12)<>0 THEN 31120
31020 INPUT "NUMBER OF UNITS TO SHIELDS";Z3
31030 IF Z3<0 THEN RETURN
31040 IF E1+S3-Z3>0 THEN 31060
31050 PRINT "SCOTT HERE-  'WE ONLY HAVE"; FN R(E1+S3);"UNITS LEFT.'"
31051 RETURN
31060 E1=E1+S3-Z3:S3=Z3: PRINT "--ENERGY TRANSFER COMPLETE--"
31070 PRINT "(SHIP ENERGY="; FN R(E1);"    SHIELD ENERGY="; FN R(S3);")"
31075 J3=1
31080 T1=0.1:P5=(K3+4*C3)/48: IF P5<0.1 THEN P5=0.1
31090 IF P5> RND (1) THEN GOSUB 1000
31100 IF A2<>0 THEN RETURN
31110 GOSUB 9000: RETURN
31120 PRINT "TRANSFER PANEL DAMAGED.": RETURN
33001 J3=0: INPUT "HOW MANY STARDATES";Z5: IF (Z5<R5) AND (K3=0) THEN 33030
33020 INPUT "ARE YOU SURE";B$: IF LEFT$ (B$,1)<>"Y" THEN RETURN
33030 R6=1
33040 IF Z5<=0 THEN R6=0
33050 IF R6=0 THEN RETURN
33060 T1=Z5:Z6=Z5
33070 IF K3=0 THEN 33100
33080 T1=1+ RND (1): IF Z5<T1 THEN T1=Z5
33090 Z6=T1
33100 IF T1<Z5 THEN GOSUB 1000
33110 IF A2<>0 THEN RETURN
33120 GOSUB 9000:J3=1: IF A2<>0 THEN RETURN
33130 Z5=Z5-Z6: GOTO 33040
34001 J3=0: IF D4(6)<>0 THEN 34750
34010 INPUT "ENTER COURSE...";D2: IF D2<0.01 OR D2>12 THEN GOSUB 40000 ELSE 34013
34012 RETURN
34013 INPUT "DISTANCE...";D1: IF D1<=0 THEN RETURN
34030 P=(D1+0.05)*W1*W1*W1*(S4+1): IF P<E1 THEN 34150
34040 J3=0: PRINT : PRINT "ENGINEERING TO BRIDGE--"
34050 IF (S4=0) OR (0.5*P>E1) THEN 34080
34060 PRINT "  WE HAVEN'T THE ENERGY TO GO THAT FAR WITH";
34070 PRINT " THE SHIELDS UP.": RETURN
34080 W= INT ((E1/(D1+0.05))^0.333333): IF W<=0 THEN 34130
34090 PRINT "  WE HAVEN'T THE ENERGY.  BUT WE COULD DO IT AT WARP";W
34100 IF S4<>0 THEN 34120
34110 RETURN
34120 PRINT "  IF YOU'LL LOWER THE SHIELDS.": RETURN
34130 PRINT "  WE CAN'T DO IT, CAPTAIN.  WE HAVEN'T GOT THE ENERGY."
34140 RETURN
34150 T1=10*D1/W2: IF T1<0.8*R5 THEN 34500
34160 PRINT : PRINT "MR. SPOCK - 'CAPTAIN, I COMPUTE THAT SUCH A TRIP"
34170 PRINT " WILL REQUIRE APPROXIMATELY"; FN R(100*T1/R5);
34180 PRINT "PERCENT": PRINT "   OF OUR REMAINING TIME.  ARE YOU SURE ";
34190 INPUT "THIS IS WISE";B$: IF LEFT$ (B$,1)="Y" THEN 34500
34200 J3=0: RETURN
34500 Q4=0:W=0: IF W1<=6 THEN 34660
34510 P=D1*(6-W1)^2/66.66669: IF P> RND (1) THEN Q4=1
34520 IF Q4<>0 THEN D1= RND (1)*D1
34530 W=0: IF W1<10 THEN 34550
34540 IF 0.25*D1> RND (1) THEN W=1
34550 IF (Q4=0) AND (W=0) THEN 34660
34560 A=(15-D2)*0.5236:X1=- SIN (A):X2= COS (A)
34570 B8= ABS (X1): IF ABS (X2)> ABS (X1) THEN B8= ABS (X2)
34580 X1=X1/B8:Y1=Y1/B8:N= INT (10*D1*B8+0.5):X=S6:Y=S7
34590 IF N=0 THEN 34660
34600 FOR L=1 TO N
34610 X=X+X1:Q= INT (X+0.5): IF (Q<1) OR (Q>10) THEN 34660
34620 Y=Y+Y1:R= INT (Y+0.5): IF (R<1) OR (R>10) THEN 34660
34630 IF Q$(Q,R)="." THEN 34650
34640 Q4=0:W=0
34650 NEXT L
34660 GOSUB 15001: IF A2<>0 THEN RETURN
34670 E1=E1-D1*W1*W1*W1*(S4+1): IF E1>0 THEN 34690
34680 F9=4: GOSUB 10000: RETURN
34690 T1=10*D1/W2: IF W<>0 THEN GOSUB 30001
34700 IF Q4=0 THEN 34740
34710 PRINT : PRINT "ENGINEERING TO BRIDGE--": PRINT "   SCOTT HERE-  ";
34715 PRINT "'WE'VE JUST BLOWN THE WARP ENGINES."
34720 PRINT "   WE'LL HAVE TO SHUT 'ER DOWN HERE, CAPTAIN.'"
34725 D4(6)=D5*(3* RND (1)+1)
34740 J3=1: RETURN
34750 PRINT "WARP ENGINES DAMAGED.": RETURN
35001 ON SGN (D4(10))+2 GOTO 35010,35030,35020
35010 PRINT "YE FAERIE QUEENE HAS NO SHUTTLE CRAFT.": RETURN
35020 PRINT "SHUTTLE CRAFT DAMAGED.": RETURN
35030 PRINT : PRINT "***ABANDON SHIP!  ABANDON SHIP!"
35040 PRINT "***ALL HANDS ABANDON SHIP!": PRINT
35050 PRINT "YOU AND THE BRIDGE CREW ESCAPE IN THE GALILEO."
35060 PRINT "THE REMAINDER OF THE CREW BEAMS DOWN"
35070 PRINT "TO THE NEAREST HABITABLE PLANET.": IF R3<>0 THEN 35090
35080 F9=9: GOSUB 10000: RETURN
35090 PRINT : PRINT "YOU ARE CAPTURED BY KLINGONS AND RELEASED TO"
35100 PRINT "THE FEDERATION IN A PRISONER-OF-WAR EXCHANGE."
35110 PRINT "STARFLEET PUTS YOU IN COMMAND OF ANOTHER SHIP,"
35120 PRINT "THE FAERIE QUEENE WHICH IS ANTIQUATED, BUT"
35130 PRINT "STILL USABLE.":N= INT ( RND (1)*R3+1):Q1=B2(N):Q2=B3(N)
35140 S6=5:S7=5: GOSUB 18000:Q$(S6,S7)="."
35145 FOR L=1 TO 3:S6= INT (3* RND (1)-1+B6)
35150 IF (S6<1) OR (S7>10) THEN 35180
35160 S7= INT (3* RND (1)-1+B7): IF (S7<1) OR (S7>10) THEN 35180
35170 IF Q$(S6,S7)="." THEN 35190
35180 NEXT L: GOTO 35140
35190 S5$="FAERIE QUEENE":Q$(S6,S7)= LEFT$ (S5$,1):C5$="DOCKED"
35200 FOR L=1 TO 12:D4(L)=0: NEXT :D4(10)=-1:E1=3000:I7=E1
35210 S3=1500:I8=S3:T4=6:I9=T4:L1=3:J1=L1:S4=0:W1=5:W2=25
35220 RETURN
36001 IF D4(11)=0 THEN 36030
36010 PRINT "COMPUTER DAMAGED - CANNOT EXECUTE DESTRUCT SEQUENCE"
36020 RETURN
36030 PRINT : PRINT "    ---WORKING---"
36040 PRINT "IDENTIFICATION-POSITIVE"
36050 PRINT "SELF-DESTRUCT-SEQUENCE-ACTIVATED":J=3
36060 FOR I=10 TO 6 STEP -1: PRINT SPC( J);I: GOSUB 36210:J=J+3: NEXT
36070 PRINT "ENTER-YOUR-MISSION-PASSWORD-TO-CONTINUE"
36080 PRINT "SELF-DESTRUCT-SEQUENCE-OTHERWISE-DESTRUCT"
36090 PRINT "SEQUENCE-WILL-BE-ABORTED"
36100 INPUT B$: IF B$<>X$ THEN 36190
36110 PRINT "PASSWORD-ACCEPTED":J=10
36120 FOR I=5 TO 1 STEP -1: PRINT SPC (J);I: GOSUB 36210:J=J+3: NEXT
36130 PRINT : PRINT "*****ENTROPY OF ";S5$;" MAXIMIZED*****"
36140 PRINT : IF K3=0 THEN 36180
36150 W=20*E1: FOR L=1 TO K3: IF K6(L)*K7(L)>W THEN 36170
36160 A5=K4(L):A6=K5(L):T2$=Q$(A5,A6): GOSUB 6000
36170 NEXT L
36180 F9=10: GOSUB 10000: RETURN
36190 PRINT "PASSWORD-REJECTED"
36200 PRINT "CONTINUITY-EFFECTED": PRINT : RETURN
36210 K=12345: FOR M=1 TO 90:K=K+1: NEXT M: RETURN
37001 FOR I=1 TO 10: GOSUB 29010: NEXT I: RETURN
40000 PRINT "---> COURSE(S) .01-12 ONLY !!!": RETURN
```
{% endraw %}

## MEMSET.BAS

{% raw %}
```bas
10 REM this program resets the memory size indication at 40:13 prior to
20 REM quadmaster2 software access, to enable use of memory above the
30 REM maximum system board switch settings.
40 OPEN "meminst.dat" FOR INPUT AS #1: INPUT #1, MEM: CLOSE #1
50 DEF SEG=64
51 O1=PEEK(19): O2=PEEK(20)
52 SWSET=((INP(98) AND 15)+2)*32
53 MSET=O1+256*O2
54 IF MSET<>SWSET THEN GOTO 150
60 M1=MEM MOD 256
70 M2=INT(MEM/256)
90 REM poke into memory
100 POKE 19,M1
110 POKE 20,M2
120 REM initialize memory above that initialized by dos
125 LOCATE 4,1: PRINT "start = ";SWSET;" k; end = ";MEM-1;" k"
130 FOR I%= SWSET TO MEM-1
132 LOCATE 10,1:PRINT I%;" k"
135 DEF SEG=I%*64
140 FOR J%=0 TO 1023
143 POKE J%,0: NEXT J%: NEXT I%
150 SYSTEM
```
{% endraw %}

## MLTIBRST.BAS

{% raw %}
```bas
100 'mltibrst.bas see pc magazine, dec 11, 1984 p 420
110 ' KEY 'b' switches burst on or off for composite monitor
130 CLS:KEY OFF:SCREEN 2
140 DEFINT A-V:B1=&H1E:B2=&H1A
150 FOR H=640 TO 1 STEP -1
160 W=W+0.5:H=H-5
170 FOR H1=H TO H-72 STEP -1
180 FOR WHT=1 TO W: LINE (H1,1)-(H1,190):H1=H1-1:NEXT WHT
190 H1=H1-INT(W+0.5):NEXT H1
200 H=H1:NEXT H
210 LOCATE 25,1:PRINT "1.59 Mhz  1.79 Mhz 2.05 Mhz   2.39 Mhz";
220 PRINT "  2.86 Mhz  3.58 Mhz  4.77 Mhz  7.16 Mhz";
230 A$=INKEY$:IF A$="b" OR A$="B" THEN SWAP B1,B2:OUT &H3D8,B1
240 IF A$<>"x" AND A$<>"B" THEN 230 ELSE CLS:END
```
{% endraw %}

## NUTREK.BAS

{% raw %}
```bas
1 CLS: COLOR 10,0: KEY OFF: GOSUB 24330
5 DEFINT I-N: KEY OFF
10 LQ=1000:JO=45
20 DIM C$(21,2),G(8,8),D$(12),Q$(10,10),D4(12),D9(106),CS$(20),DS$(12),S$(4,2),T$(3,2),S2(8,8),C2$(6,2)
30 Q$="?"
40 DATA "S.R. SENSORS","L.R. SENSORS","PHASERS","PHOTON TUBES","LIFE SUPPORT"
50 DATA "WARP ENGINES","IMPULSE ENGINES","SHIELDS","SUBSPACE RADIO"
60 DATA "SHUTTLE CRAFT","COMPUTER","TRANSFER PANEL","ABANDON","CHART","COMPUTER"
70 DATA "CS","DAMAGES","DESTRUCT","DOCK","IDLE","IMPULSE","LRSCAN","NAVIGATE","PHASERS","QUIT"
80 DATA "SHIELDS","SOS","SRSCAN","STATUS","TORPEDO","TRANSFER","VISUAL","WARP","abandon","chart","computer","cs","damages","destruct","dock","idle","impulse","lrscan","navigate","phasers","quit","shields","sos","srscan","status","torpedo"
90 DATA "transfer","visual","warp","SHORT"
100 DATA "MEDIUM","LONG","short","medium","long","beginner","novice","senior","expert","BEGINNER","NOVICE","SENIOR","EXPERT","COURSE","WCOST","ICOST"
110 DATA "PEFFECT","SCORE","OUT","course","wcost","icost","peffect","score","out"
120 DATA 10.5,12,1.5,9,0,3,7.5,6,4.5
130 DEF FN A(X)= INT (8* RND (X))+1: DEF FN B(X)= INT (10* RND (X))+1
140 DEF FN D(X)=X/60
150 DEF FN R(X)= INT (X*10+0.5)/10: DEF FN S(X)= INT (X*100+0.5)/100
160 FOR I=1 TO 12: READ D$(I): NEXT : FOR J=1 TO 2: FOR I=1 TO 21: READ C$(I,J): NEXT I:NEXT J
170 FOR J=1 TO 2:FOR I=1 TO 3: READ T$(I,J): NEXT I:NEXT J: FOR J=1 TO 2: FOR I=1 TO 4: READ S$(I,J): NEXT I:NEXT J: FOR J= 1 TO 2: FOR I=1 TO 6
180 READ C2$(I,J): NEXT I:NEXT J: FOR I=1 TO 9: READ C5(I): NEXT
190 GOSUB 10940:S7$(1)="":S7$(2)="  ":S7$(3)=" ":S7$(4)=""
200 IF A2<>0 THEN 750
210 J4=0:T1=0: LOCATE 12,1: PRINT "COMMAND";SPC(37):LOCATE 12,45:PRINT CHR$(13);:LOCATE 12,8:INPUT A$: IF LEN (A$)>1 THEN 230
220 LOCATE 13,1: PRINT "2 LETTERS, PLEASE.";SPC(26);: GOTO 210
230 GOSUB 3230: FOR J=1 TO 2: FOR I=1 TO 21
240 IF A$= LEFT$ (C$(I,J), LEN (A$)) THEN 310
250 NEXT I: NEXT J: GOSUB 260: GOTO 200
260 REM valid command subscreen
270 LOCATE 16,1: COLOR 12,0: PRINT "VALID COMMANDS:";SPC(30);: COLOR 10,0
280 FOR I=1 TO 20 STEP 4
290 LOCATE 16.75+I*0.25,1: PRINT C$(I,1); TAB( 12);C$(I+1,1); TAB( 22);C$(I+2,1); TAB( 32);C$(I+3,1);SPC(13-LEN(C$(I+3,1)));
300 NEXT : RETURN
310 ON I GOTO 330,340,350,345,360,370,380,390,430,450,460
320 ON I-11 GOTO 490,750,510,540,550,560,570,580,588,660
330 GOSUB 13660: GOTO 200:REM AB
340 GOSUB 1970: GOTO 200:REM CH
345 GOSUB 41000: GOTO 200: REM CS
350 GOSUB 2590: GOTO 200:REM CO
360 GOSUB 3690: GOTO 200:REM DA
370 GOSUB 13910: GOTO 200:REM DE
380 GOSUB 3560: GOTO 200:REM DO
390 GOSUB 13000: IF J3=0 THEN 200:REM ID
400 IF A2<>0 THEN 750
410 IF G(Q1,Q2)=1000 THEN 710
420 GOSUB 790: GOTO 200
430 GOSUB 6290: GOTO 470: REM IM
450 GOSUB 6570: GOTO 200: REM LR
460 GOSUB 13140: REM NA
470 IF J3=0 THEN 200 ELSE 670
490 GOSUB 9110: IF J3=0 THEN 200:REM PH
500 GOSUB 790: GOTO 200
510 GOSUB 11540: IF J3=0 THEN 200: REM sh
520 IF A2<>0 THEN 750
530 GOSUB 790:S9=0: GOTO 200
540 GOSUB 5630: GOTO 200: REM sos
550 GOSUB 12250: GOTO 200: REM sr
560 GOSUB 12320: GOTO 200: REM st
570 GOSUB 9500: GOTO 470: REM to
580 GOSUB 12850: IF J3=0 THEN 200 ELSE 590: REM tr
588 GOSUB 32000: GOTO 590: REM vi
590 IF A2<>0 THEN 750
600 IF G(Q1,Q2)<>LQ THEN 200
610 GOTO 710
660 GOSUB 11360: GOTO 200: REM wa
670 IF A2<>0 THEN 750
680 IF T1<>0 THEN GOSUB 3790
690 IF A2<>0 THEN 750
700 IF G(Q1,Q2)<LQ THEN 740
710 GOSUB 1540: IF A2<>0 THEN 750
720 IF A2<>0 THEN 750
730 GOTO 700
740 GOSUB 790: GOTO 200
750 COMCUE%=INT(RND*(9)): IF COMCUE%<3 THEN GOSUB 20000: GOTO 200
751 GOSUB 4920: INPUT "ANOTHER GAME ";A$: REM quit section
760 IF LEFT$ (A$,1)="Y" OR LEFT$(A$,1)="y" THEN 190
770 PRINT CHR$ (12): END
780 REM enemy reaction
790 IF (C3<>0) AND (J4=0) THEN GOSUB 7530
800 IF K3=0 OR A2<>0 THEN RETURN
820 P2=1/I8: J5=0:PRINT
850 IF C5$="DOCKED" THEN 1490
860 H2=0:H3=0:C6=1
870 IF S9=1 THEN C6=0.5+0.5* RND (1)
880 A3=0
890 FOR L=1 TO K3
900 IF K6(L)<0 THEN 1330
910 A3=1
920 D6=0.8+0.05* RND (1)
930 H4=K6(L)*D6^K8(L)
940 IF (S4=0) AND (S9=0) THEN 1000
950 P3=0.1: IF P2*S3>P3 THEN P3=P2*S3
960 H5=P3*C6*H4+1
970 IF H5>S3 THEN H5=S3
980 S3=S3-H5:H4=H4-H5
990 IF (P3>0.1) AND (H4<0.005000001*E1) THEN 1330
1000 J5=1
1010 LOCATE 13,1:PRINT FN R(H4);"UNIT HIT ON THE ";S5$;" FROM ";
1020 J6=K4(L):J7=K5(L)
1030 LOCATE 14,1: IF Q$(J6,J7)="K" THEN PRINT "KLINGON AT";
1040 LOCATE 14,1: IF Q$(J6,J7)="C" THEN PRINT "COMMANDER AT";
1050 PRINT J6;"-";J7;
1060 IF H4>H2 THEN H2=H4
1070 H3=H3+H4
1080 IF H4<(275-25*S8)*(1+0.5* RND (1)) THEN 1320
1090 N4=1+ INT (H4/(500+100* RND (1)))
1100 COLOR 4,0,0: LOCATE 15,1: PRINT "*** CRITICAL HIT--";SPC(27);:LOCATE 16,1
1110 K9=1
1120 FOR W4=1 TO N4
1130 J9= INT (12* RND (1))+1
1140 C5(W4)=J9
1150 E3=(H4*D5)/(N4*(75+25* RND (1)))
1160 IF J9=6 THEN E3=E3/3
1170 D4(J9)=D4(J9)+E3
1180 IF W4=1 THEN 1250
1190 FOR V=1 TO W4
1200 IF J9=C5(V-1) THEN 1260
1210 NEXT V
1220 K9=K9+1
1230 IF K9=3 THEN PRINT
1240 PRINT " AND ";
1250 PRINT D$(J9);
1260 NEXT W4
1270 PRINT " DAMAGED.";:COLOR 2,0
1275 GOSUB 3690
1280 IF D4(8)=0 THEN 1320
1290 IF S4<>0 THEN GOTO 1300 ELSE GOTO 1310
1300 LOCATE 9,39: PRINT "DOWN  ";
1310 S4=0
1320 E1=E1-H4
1330 NEXT L
1340 IF A3=0 THEN RETURN
1350 IF E1<=0 THEN 1470
1360 P4=100*P2*S3+0.5
1370 IF J5<>0 THEN 1390
1380 GOTO 1400
1390 GOSUB 12550
1400 GOSUB 12570
1410 IF (H2<200) AND (H3<500) THEN 1500
1420 J8= INT (H3* RND (1)*0.015)
1430 IF J8<2 THEN 1500
1440 LOCATE 14,1: PRINT USING "SICKBAY TO BRIDGE.  WE SUFFERED ##           ";J8;:LOCATE 15,1: PRINT "CASUALTIES IN THAT ATTACK";SPC(20);
1450 C4=C4+J8
1460 GOTO 1500
1470 F9=5
1480 A2=1: RETURN
1490 COLOR 12,0: LOCATE 14,1: PRINT "*** KLINGONS ATTACK-- STARBASE SHIELDS";SPC(6);: LOCATE 15,1: PRINT USING "PROTECT THE \          \                     ";S5$;:COLOR 10,0
1500 FOR W4=1 TO K3
1510 K8(W4)=K7(W4)
1520 NEXT W4
1530 GOSUB 12150: RETURN
1540 IF J4=0 THEN 1570
1550 COLOR 4,0: LOCATE 12,1: PRINT "*** RED ALERT!  RED ALERT!";SPC(19);
1560 LOCATE 13,1: PRINT "*** THE ";S5$;" HAS STOPPED IN A ";SPC(17-LEN(S5$));:LOCATE 14,1: PRINT "QUADRANT CONTAINING A SUPERNOVA.";SPC(13);
1570 LOCATE 15,1: PRINT "AUTO-OVERRIDE ATTEMPTS TO HURL THE ";SPC(10);:LOCATE 16,1: PRINT S5$;" TO ANOTHER QUADRANT";SPC(25-LEN(S5$));
1580 S2(Q1,Q2)=1
1590 GOSUB 8160
1600 IF D4(6)=0 THEN 1780
1610 LOCATE 12,1: PRINT "WARP ENGINES DAMAGED.  ";SPC(22);
1620 LOCATE 13,1: PRINT "TRYING TO ENGAGE IMPULSE ENGINES...";SPC(10)
1630 IF D4(7)=0 THEN 1680
1640 COLOR 14,0: LOCATE 14,1: PRINT "IMPULSE ENGINES DAMAGED.";SPC(21);
1650 F9=8
1660 A2=1
1670 COLOR 10,0: RETURN
1680 P2=0.75*E1
1690 D6=0.004*(P2-50)
1700 D7=1.4142+1.2* RND (1)
1710 D1=D6
1720 IF D6>D7 THEN D1=D7
1730 T1=D1/0.4
1740 D2=12* RND (1)
1750 J4=0
1760 GOSUB 6510
1770 GOTO 1890
1780 W1=6+2* RND (1)
1790 W2=W1*W1
1800 P2=0.75*E1
1810 D6=P2/(W1*W1*W1*(S4+1))
1820 D7=1.4142+2* RND (1)
1830 D1=D6
1840 IF D6>D7 THEN D1=D7
1850 T1=10*D1/W2
1860 D2=12* RND (1)
1870 J4=0
1880 GOSUB 13360
1890 IF J4<>0 THEN 1930
1900 F9=8
1910 A2=1
1920 RETURN
1930 IF R1<>0 THEN RETURN
1940 F9=1
1950 A2=1
1960 RETURN
1970 REM STARCHART (CH)
1980 JO=45: LOCATE 1,JO+1: PRINT "    1   2   3   4   5   6   7   8 ";
1990 LOCATE 2,JO+1: PRINT "   --- --- --- --- --- --- --- --- ";
2000 FOR I=1 TO 8
2010 LOCATE I+2,JO: PRINT " ";I;" ";
2020 FOR J=1 TO 8
2030 ON SGN (S2(I,J))+2 GOTO 2040,2060,2080
2040 LOCATE I+2,JO+4*J-1: PRINT " .1.";
2050 GOTO 2140
2060 LOCATE I+2,JO+4*J-1: PRINT " ...";
2070 GOTO 2140
2080 IF S2(I,J)>LQ THEN 2130
2090 LOCATE I+2,JO+4*J-1:IF G(I,J)>99 THEN COLOR 12,0
2100 IF G(I,J)<LQ THEN PRINT S7$( LEN ( STR$ (G(I,J)))); STR$ (G(I,J));: COLOR 10,0
2110 IF G(I,J)=LQ THEN COLOR 12,0: PRINT " ***";: COLOR 10,0
2120 GOTO 2140
2130 PRINT S2(I,J)-LQ;
2140 NEXT J: PRINT " ";: NEXT I
2150 RETURN
2160 REM SET PLAY LENGTH AND LEVEL
2170 CLS:S8=0:L2=0
2190 PRINT "MISSION DURATION (SHORT, MEDIUM OR LONG)";
2200 INPUT A$
2210 FOR J=1 TO 2:FOR I=1 TO 3
2230 IF A$= LEFT$ (T$(I,J), LEN (A$)) THEN 2280
2240 NEXT I: NEXT J
2260 GOTO 2170
2280 L2=I: PRINT "ARE YOU A BEGINNER, NOVICE, SENIOR OR EXPERT ";
2300 INPUT A$
2310 FOR J=1 TO 2
2320 FOR I=1 TO 4
2330 IF A$= LEFT$ (S$(I,J), LEN (A$)) THEN 2400
2340 NEXT I
2350 FOR I=1 TO 4
2360 IF A$=LEFT$(SS$(I), LEN (A$)) THEN 2400
2370 NEXT I
2380 NEXT J
2390 GOTO 2280
2400 S8=I:MR=I
2410 INPUT "ENTER MISSION PASSWORD...";X$: PRINT CHR$(12)
2420 CLS: PRINT "....STAND BY....": GOSUB 40000
2430 J= RND (1)
2440 D5=0.5*S8:I2= INT (L2+1+ RND (1)*3)
2450 IF I2>5 THEN I2=5
2460 R3=I2
2470 I5=7*L2
2480 R5=I5
2490 R7=(S8-2* RND (1)+1)*S8*0.1+0.1
2500 IF R7<0.2 THEN R7=R7+0.1
2510 I1= INT (2*R7*I5)
2520 R1=I1
2530 I4= INT (S8+0.0625*I1* RND (1))
2540 R2=I4
2550 I3=(I1+4*I4)*I5
2560 R4=I3
2570 RETURN
2580 REM COMPUTER
2590 IF D4(11)=0 THEN 2620
2600 LOCATE 16,1: PRINT " COMPUTER DISABLED";SPC(26);CHR$(13);
2610 RETURN
2620 LOCATE 12,1: PRINT "----COMPUTER ACTIVE----";
2630 LOCATE 12,36: PRINT SPC(9);CHR$(13);:LOCATE 12,24: INPUT "PROGRAM NAME";B$
2640 FOR J=1 TO 2: FOR I=1 TO 6
2650 IF B$= LEFT$ (C2$(I,J), LEN (B$)) THEN 2720
2660 NEXT I: NEXT J
2670 GOSUB 2690: GOTO 2630
2680 REM VALID COMPUTER PROGRAMS
2690 LOCATE 22,1: PRINT "VALID PROGRAMS ARE: COURSE   ICOST";SPC(11);
2700 LOCATE 23,1: PRINT "  PEFFECT   OUT     SCORE    WCOST";SPC(11);
2710 RETURN
2720 ON I GOTO 2740,2990,3070,3140,3200,3230
2730 REM COURSE
2740 LOCATE 13,29: PRINT SPC(16);CHR$(13);:LOCATE 13,1:INPUT "ENTER QUADRANT AND SECTOR - ";A3,A4
2750 IF (A3<> INT (A3)) OR (A4<> INT (A4)) THEN 3240
2760 IF A3<0 THEN 2630
2770 IF A3=0 THEN A3=10*Q1+Q2
2780 A3=A3+0.5
2790 K= INT (A3/10)
2800 IF (K<1) OR (K>8) THEN 3240
2810 C6(1)=K:K= INT (A3-C6(1)*10)
2820 IF (K<1) OR (K>8) THEN 3240
2830 C6(2)=K:A4=A4+0.5
2840 K= INT (A4/100)
2850 IF (K<1) OR (K>10) THEN 3240
2860 C6(1)=C6(1)+(K-1)/10:K= INT (A4-K*100)
2870 IF (K<1) OR (K>10) THEN 3240
2880 C6(2)=C6(2)+(K-1)/10
2890 X=Q1+((S6-1)/10)-C6(1):Y=Q2+((S7-1)/10)-C6(2)
2900 D1=0:D2=0: IF (X=0) AND (Y=0) THEN 2960
2910 D1= SQR (X*X+Y*Y)
2920 IF X<0 THEN Z7= SGN (Y)*(3.1416- ATN ( ABS (Y/X)))
2930 IF X=0 THEN Z7= SGN (Y)*1.5708
2940 IF X>0 THEN Z7= ATN (Y/X)
2950 D2=12-Z7*1.9098593#: IF D2>12 THEN D2=D2-12
2960 LOCATE 14,1: PRINT USING "COURSE IS ##.## FOR ##.## QUADRANTS.         ";FN S(D2);FN S(D1);
2970 GOTO 2630
2980 REM WCOST
2990 LOCATE 13,32: PRINT SPC(12);CHR$(13);:LOCATE 13,1: INPUT "ENTER DISTANCE AND WARP FACTOR";D1,A4
3000 IF (D1<0) THEN 2630
3010 C7=D1*A4*A4*A4
3020 T1=(10*D1)/((A4*A4)+0.000009999999)
3030 LOCATE 13,1: PRINT USING "IT WOULD TAKE ##.## STARDATES AND USE ##.##   ";FN S(T1);FN R(C7);
3040 LOCATE 14,1: PRINT USING "UNITS OF ENERGY  (##.## IF SHIELDS ARE UP)    ";FN R(C7+C7);
3050 GOTO 2630
3060 REM icost
3070 LOCATE 13,19:PRINT SPC(25);CHR$(13): LOCATE 13,1: INPUT "ENTER DISTANCE...";D1
3080 IF D1<0 THEN 2630
3090 C7=250*D1+50:T1=D1/0.4
3100 LOCATE 14,1: PRINT USING "IT WOULD TAKE ##.## STARDATES AND USE ##.##  ";FN R(T1);C7;
3110 LOCATE 15,1: PRINT "UNITS OF ENERGY";SPC(30);
3120 GOTO 2630
3130 REM peffect
3140 LOCATE 13,34: PRINT SPC(10);CHR$(13);: LOCATE 13,1: INPUT "ENTER PHASER RANGE IN QUADRANTS";A3
3150 IF A3<0 THEN 2630
3160 A3=A3*10:C7=(0.9^A3)*100
3170 LOCATE 14,1: PRINT "PHASERS ARE "; LEFT$ ( STR$ (C7),5);"% EFFECTIVE AT THAT RANGE";SPC(3);
3180 GOTO 2630
3190 REM score
3200 LOCATE 13,1: GOSUB 10590
3205 LOCATE 14,1: PRINT "PRESS ENTER TO EXIT SCORE PROGRAM";SPC(12);CHR$(13);: LOCATE 14,34: LINE INPUT ACK$
3210 GOSUB 2690: GOSUB 260: GOTO 2630
3220 REM out
3230 FOR J0=13 TO 16: LOCATE J0,1: PRINT SPC(46);CHR$(13);: NEXT: RETURN
3240 LOCATE 13,1: PRINT "FORMAT IS MN,XXYY...WHERE MN IS THE QUADRANT ";
3250 LOCATE 14,1: PRINT "AND XXYY IS THE SECTOR.  E.G., 64,0307 REFERS";
3260 LOCATE 15,1: PRINT "TO QUADRANT 6-4, SECTOR 3-7.";SPC(17);
3270 GOTO 2630
3280 REM
3290 IF T2$<>"C" THEN 3380
3300 C3=0
3310 FOR F=1 TO R2: IF (C1(F)=Q1) AND (C2(F)=Q2) THEN 3330
3320 NEXT F
3330 C1(F)=C1(R2):C2(F)=C2(R2):C1(R2)=0:C2(R2)=0
3340 R2=R2-1:F1(2)=1.000000e+30
3350 IF R2<>0 THEN F1(2)=D0-(I4/R2)* LOG ( RND (1))
3360 K2=K2+1
3370 GOTO 3390
3380 K1=K1+1
3390 GOSUB 40200
3400 Q$(A5,A6)=".":R1=R1-1
3410 IF R1=0 THEN RETURN
3420 R5=R4/(R1+4*R2)
3430 G(Q1,Q2)=G(Q1,Q2)-100
3433 GOSUB 12360
3440 FOR F=1 TO K3
3450 IF (K4(F)=A5) AND (K5(F)=A6) THEN 3470
3460 NEXT F
3470 K3=K3-1
3480 IF F>K3 THEN 3530
3490 FOR G=F TO K3
3500 K4(G)=K4(G+1):K5(G)=K5(G+1):K6(G)=K6(G+1)
3510 K7(G)=K7(G+1):K8(G)=K7(G)
3520 NEXT G
3530 K4(K3+1)=0:K5(K3+1)=0:K7(K3+1)=0:K8(K3+1)=0:K6(K3+1)=0
3540 RETURN
3550 REM dock
3560 IF C5$="DOCKED" THEN 3670
3570 IF B6=0 THEN 3590
3580 IF ( ABS (S6-B6)<=1) AND ( ABS (S7-B7)<=1) THEN 3610
3590 LOCATE 13,1: PRINT S5$;" NOT ADJACENT TO A BASE.";SPC(24-LEN(S5$));
3600 RETURN
3610 C5$="DOCKED"
3620 LOCATE 13,1: PRINT "---> DOCKING COMPLETED";SPC(22);CHR$(13);
3630 E1=I7:S3=I8:T4=I9:L1=J1
3640 REM update status after docking
3650 GOSUB 12330
3660 RETURN
3670 LOCATE 13,1: PRINT "CAPTAIN, WE'RE ALREADY DOCKED!";SPC(15);
3680 RETURN
3690 REM DAMAGE Rep
3700 J=0: IJ=0: FOR I=1 TO 12
3710 IF D4(I)<=0 THEN 3750
3720 IF J<>0 THEN 3740
3730 LOCATE 11,JO+2: PRINT "REPAIR TIME  IN FLIGHT    DOCKED ";:J=1
3740 LOCATE 12+IJ,JO: PRINT USING "  \             \ ##.##     ##.##   ";D$(I);FN S(D4(I)); FN S(D3*D4(I));: IJ=IJ+1
3750 NEXT I
3760 FOR IBLANK= IJ+1 TO 12: LOCATE 11+IBLANK,JO+1:PRINT SPC(34);:NEXT IBLANK
3770 LOCATE 12,JO: IF IJ=0 THEN PRINT "    - ALL DEVICES FUNCTIONAL -";
3780 RETURN
3790 M=0:D7=D0+T1: FOR L=1 TO 5
3800 IF F1(L)>D7 THEN 3820
3810 M=L:D7=F1(L)
3820 NEXT L
3830 X6=D7-D0:D0=D7
3840 R4=R4-(R1+4*R2)*X6
3850 R5=R4/(R1+4*R2)
3860 IF R5>0 THEN 3900
3870 F9=2
3880 A2=1
3890 RETURN
3900 IF (D4(5)=0) OR (C5$="DOCKED") THEN 3960
3910 IF (L1>=X6) OR (D4(5)<=L1) THEN 3940
3920 F9=3: A2=1
3930 RETURN
3940 L1=L1-X6
3950 IF D4(5)<=X6 THEN L1=J1
3960 R=X6
3970 IF C5$="DOCKED" THEN R=X6/D3
3980 FOR L=1 TO 12
3990 IF D4(L)<=0 THEN 4040
4000 D4(L)=D4(L)-R
4010 IF D4(L)<0 THEN D4(L)=0
4020 IF D4(L)<>0 THEN 4040
4030 DAM=1
4040 NEXT L
4050 REM UPDATE DAMAGE SUBSCREEN
4060 IF DAM=0 THEN GOTO 4080
4070 GOSUB 3690: DAM=0
4080 IF M=0 THEN RETURN
4090 T1=T1-X6
4100 ON M GOTO 4110,4150,4370,4460,4640
4110 X2=0:Y2=0: GOSUB 11690
4120 F1(1)=D0-0.5*I5* LOG ( RND (1))
4130 IF G(Q1,Q2)=LQ THEN RETURN
4140 GOTO 3790
4150 IF R2=0 THEN 4360
4160 IF C5$="DOCKED" THEN 4340
4170 I= INT ( RND (1)*R2)+1
4180 Y6=(C1(I)-Q1)^2+(C2(I)-Q2)^2
4190 IF Y6=0 THEN 4340
4200 Y6= SQR (Y6):T1=0.17778*Y6
4210 COLOR 12,0: LOCATE 12,1: PRINT S5$;" CAUGHT IN LONG-RANGE ";SPC(23-LEN(S5$));:LOCATE 13,1:PRINT "TRACTOR BEAM--";SPC(31);
4220 Q1=C1(I):Q2=C2(I)
4230 S6= FN B(1):S7= FN B(1)
4240 LOCATE 14,1: PRINT USING "PULLED TO QUADRANT ##-##, SECTOR ##-##       ";Q1;Q2;S6;S7;
4250 IF R6=0 THEN GOTO 4260 ELSE LOCATE 15,1: PRINT "(IDLE PERIOD CANCELLED)";SPC(22);
4260 R6=0: COLOR 10,0
4270 IF S4<>0 THEN 4330
4280 IF (D4(8)=0) AND (S3>0) THEN 4310
4290 LOCATE 15,1: PRINT "(SHIELDS NOT CURRENTLY USABLE.)";SPC(14);
4300 GOTO 4330
4310 GOSUB 11560
4320 S9=0
4330 GOSUB 8160
4340 F1(2)=D0+T1-1.5*(I5/R2)* LOG ( RND (1))
4345 GOSUB 12250
4350 GOTO 3790
4360 F1(2)=1.000000e+30: GOTO 3790
4370 D9(1)=D0:D9(2)=R1:D9(3)=R2:D9(4)=R3:D9(5)=R4:D9(6)=R5
4380 D9(7)=S1:D9(8)=B1:D9(9)=K1:D9(10)=K2
4390 FOR I=1 TO 8: FOR J=1 TO 8:D9(I-1+8*(J-1)+11)=G(I,J): NEXT J: NEXT I
4400 FOR I=75 TO 84:D9(I)=C1(I-74): NEXT
4410 FOR I=85 TO 94:D9(I)=C2(I-84): NEXT
4420 FOR I=95 TO 99:D9(I)=B2(I-94): NEXT
4430 FOR I=100 TO 104:D9(I)=B3(I-99): NEXT
4440 D9(105)=B4:D9(106)=B5
4450 S0=1:F1(3)=D0-0.3*I5* LOG ( RND (1)): GOTO 3790
4460 IF (R2=0) OR (R3=0) THEN 4510
4470 FOR I=1 TO R3: FOR J=1 TO R2: IF (B2(I)=C1(J)) AND (B3(I)=C2(J)) THEN 4520
4480 NEXT J: NEXT I
4490 F1(4)=D0+0.5+3* RND (1)
4500 F1(5)=1.000000e+30: GOTO 3790
4510 F1(4)=1.000000e+30:F1(5)=1.000000e+30: GOTO 3790
4520 B4=B2(I):B5=B3(I)
4530 IF (B4=Q1) AND (B5=Q2) THEN 4490
4540 F1(5)=D0+0.5+3* RND (1)
4550 F1(4)=F1(5)-0.3*I5* LOG ( RND (1))
4560 IF D4(9)>0 THEN 3790
4570 LOCATE 12,1: PRINT USING "CAPTAIN, THE STARBASE IN ##-## IS UNDER      ";B4;B5;
4580 LOCATE 13,1:PRINT "ATTACK AND CAN ONLY RESIST TILL STARDATE      ";
4591 LOCATE 14,1: PRINT USING "####.#_!  PLEASE ACKNOWLEDGE_!                   ";FN R(F1(5));
4592 LOCATE 15,1: PRINT SPC(44);CHR$(13);: LOCATE 14,30: LINE INPUT ACK$
4600 IF R6=0 THEN 3790
4610 LOCATE 16,29: PRINT SPC(16);: LOCATE 16,1: INPUT "SHALL WE CANCEL IDLE PERIOD";B$
4620 IF LEFT$ (B$,1)="Y" OR LEFT$(B$,1)="y" THEN R6=0
4630 GOTO 3790
4640 F1(5)=1.000000e+30: IF (R2=0) OR (R3=0) THEN 3790
4650 K= INT (G(B4,B5)/100): IF G(B4,B5)-K*100<10 THEN 3790
4660 FOR I=1 TO R2: IF (C1(I)=B4) AND (C2(I)=B5) THEN 4680
4670 NEXT : GOTO 3790
4680 IF S2(B4,B5)=-1 THEN S2(B4,B5)=0
4690 IF S2(B4,B5)>999 THEN S2(B4,B5)=S2(B4,B5)-10
4700 IF (B4<>Q1) OR (B5<>Q2) THEN 4790
4710 FOR I=1 TO K3:K=K4(I):L=K5(I)
4720 IF Q$(K,L)="C" THEN 4740
4730 NEXT
4740 IF K6(I)<25+50* RND (1) THEN 3790
4750 Q$(B6,B7)=".":LOCATE 1+B6,3+2*B7:PRINT ".";:B6=0:B7=0
4760 GOSUB 8130
4770 LOCATE 14,1: PRINT "CAPTAIN, I BELIEVE THE STARBASE HAS BEEN ";: LOCATE 15,1: PRINT "DESTROYED";SPC(36);
4780 GOTO 4820
4790 IF (R3=1) OR (D4(9)>0) THEN 4820
4800 LOCATE 12,1: PRINT "STARFLEET COMMAND REPORTS THAT STARBASE IN   ";
4810 LOCATE 13,1: PRINT USING "QUADRANT ##-## HAS BEEN DESTROYED BY AN ENEMY";  B4;B5;
4815 LOCATE 14,1: PRINT "COMMANDER!";SPC(35);
4820 G(B4,B5)=G(B4,B5)-10
4830 IF R3<=1 THEN 4870
4840 FOR I=1 TO R3: IF (B2(I)=B4) AND (B3(I)=B5) THEN 4860
4850 NEXT
4860 B2(I)=B2(R3):B3(I)=B3(R3)
4870 R3=R3-1
4880 GOTO 3790
4890 REM GAME ENDED ENTRY POINT
4900 CLS: INPUT "CONFLICT RESOLVED - PREPARED FOR RATING ";B$
4910 REM SCORING
4920 PRINT CHR$(12):A2=1: PRINT : PRINT "IT IS STARDATE"; FN R(D0): PRINT
4930 ON F9 GOTO 4940,5130,5200,5250,5260,5280,5290,5310,5330,5370,5390
4940 PRINT "YOU HAVE DESTROYED THE KLINGON INVASION FLEET": PRINT
4950 PRINT "     ***THE FEDERATION IS SAVED***":G1=1
4960 IF (A1=0) OR (B1<>0) THEN 5110
4970 IF LEFT$ (S5$,1)<>"E" THEN 5110
4980 IF 3*S1+35*N1+C4>=100 THEN 5110
4990 IF D0-J2<=6 THEN 5020
5000 R8=0.1*S8*(S8+1)+0.1
5010 IF (K1+K2)/(D0-J2)<R8 THEN 5110
5020 PRINT : PRINT "YOU HAVE DONE SO WELL THAT COMMAND"
5030 IF S8=4 THEN 5090
5040 PRINT "PROMOTES YOU.....";
5050 IF S8=1 THEN PRINT "TO NOVICE CLASS!"
5060 IF S8=2 THEN PRINT "TO SENIOR CLASS!"
5070 IF S8=3 THEN PRINT "TO EXPERT CLASS!"
5080 PRINT "   ***CONGRATULATIONS***": GOTO 5110
5090 PRINT "PROMOTES YOU TO 'COMMODORE EMERITUS'."
5100 PRINT "NOW YOU CAN RETIRE !"
5110 GOSUB 10590
5120 RETURN
5130 PRINT "TIME HAS RUN OUT - THE FEDERATION HAS BEEN CONQUERED AND YOUR CRAFT"
5140 PRINT "IS NOW ENEMY PROPERTY... YOU WILL STAND TRIAL AS A WAR-CRIMINAL..."
5150 PRINT "ON THE BASIS OF YOUR RECORD YOU WILL BE";
5160 IF R1*3>I1 THEN 5190
5170 PRINT " SUMMARILY EXECUTED"
5180 A1=0: GOSUB 10590: RETURN
5190 PRINT " IMPRISONED FOR LIFE"
5200 PRINT "YOUR LIFE SUPPORT RESERVES HAVE RUN OUT, AND"
5210 PRINT "YOU WILL SOON DIE!!!"
5220 PRINT
5230 PRINT "YOUR STARSHIP IS A DERELICT IN SPACE."
5240 GOTO 5400
5250 PRINT "YOUR ENERGY SUPPLY IS EXHAUSTED.": GOTO 5220
5260 PRINT "THE ";S5$;" HAS BEEN DESTROYED IN BATTLE."
5270 GOTO 5400
5280 RETURN
5290 PRINT "YOUR STARSHIP HAS BEEN DESTROYED BY A NOVA."
5300 PRINT "NICE WORK, IDIOT !!!": GOTO 5400
5310 PRINT "THE ";S5$;" HAS BEEN INCINERATED BY A SUPERNOVA."
5320 GOTO 5400
5330 PRINT "YOU HAVE BEEN CAPTURED BY THE ENEMY. IF YOU STILL HAD A STARBASE,"
5340 PRINT "YOU WOULD HAVE BEEN REPATRIATED. SINCE YOU HAVE NO BASES, YOU WILL"
5350 PRINT "BE MERCILESSLY TORTURED !!"
5360 GOTO 5400
5370 PRINT : PRINT "THE ";S5$;" IS NOW AN EXPANDING CLOUD"
5380 PRINT "OF SUB-ATOMIC PARTICLES...": GOTO 5400
5390 PRINT "STARBASE WAS UNABLE TO RE-MATERIALIZE YOUR STARSHIP."
5400 PRINT
5410 IF LEFT$ (S5$,1)="F" THEN S5$=""
5420 IF LEFT$ (S5$,1)="E" THEN S5$="FAERIE QUEENE"
5430 A1=0
5440 IF R1=0 THEN 5560
5450 G3=R4/I3:B8=(R1+2*R2)/(I1+2*I4)
5460 A3=G3/B8
5470 IF A3<1+0.5+ RND (1) THEN 5540
5480 PRINT "AS A RESULT OF YOUR ACTIONS, A TREATY WITH THE KLINGON"
5490 PRINT "EMPIRE HAS BEEN SIGNED.  THE TERMS OF THE TREATY ARE"
5500 IF A3<3* RND (1) THEN 5530
5510 PRINT "FAVORABLE TO THE FEDERATION.": PRINT
5520 PRINT "CONGRATULATIONS.": GOTO 5550
5530 PRINT "HIGHLY UNFAVORABLE TO THE FEDERATION.": GOTO 5550
5540 PRINT "THE FEDERATION WILL BE DESTROYED!"
5550 GOSUB 10590: RETURN
5560 PRINT "SINCE YOU TOOK THE LAST KLINGON WITH YOU, YOU ARE"
5570 PRINT "A MARTYR AND A HERO.":G1=1:A1=0
5580 GOSUB 10590: RETURN
5590 IF C5$<>"DOCKED" THEN 5630
5600 LOCATE 13,1: PRINT "CAPTAIN, WE'RE ALREADY DOCKED!";SPC(16);
5610 RETURN
5620 REM sos
5630 IF D4(9)=0 THEN 5650
5640 LOCATE 13,1: PRINT "SUBSPACE RADIO DAMAGED...CANNOT TRANSMIT.    ";: RETURN
5650 IF R3<>0 THEN 5670
5660 LOCATE 13,1: PRINT "CAPTAIN, NO RESPONSE FROM STARBASE!";SPC(10);:RETURN
5670 N1=N1+1: IF B6=0 THEN 5690
5680 GOTO 5750
5690 D1=1.000000e+30
5700 FOR L=1 TO R3:X=10* SQR ((B2(L)-Q1)^2+(B3(L)-Q2)^2)
5710 IF X>D1 THEN 5730
5720 D1=X:K=L
5730 NEXT L
5740 Q1=B2(K):Q2=B3(K): GOSUB 8160
5750 Q$(S6,S7)="."
5760 PRINT
5770 LOCATE 13,1: PRINT USING "STARBASE IN QUADRANT ##-## RESPONDS...       ";Q1;Q2;
5780 LOCATE 14,1: PRINT S5$;" DEMATERIALIZES.";SPC(29-LEN(S5$));
5790 P2=(1-0.9799999^D1)^0.333333
5800 LOCATE 14,1: PRINT "1ST ATTEMPT TO RE-MATERIALIZE THE ";S5$;SPC(12-LEN(S5$));
5805 LOCATE 14,1: FOR L=1 TO 3
5820 IF L=2 THEN LOCATE 14,1: PRINT "2ND ";
5830 IF L=3 THEN LOCATE 14,1: PRINT "3RD ";
5850 IF RND (1)>P2 THEN 5880
5860 LOCATE 15,1: PRINT "FAILS.";SPC(38);CHR$(13);: NEXT L
5870 F9=11: A2=1: RETURN
5880 FOR L=1 TO 5:I=B6+ INT (3* RND (1))-1
5890 IF (I<1) OR (I>10) THEN 5930
5900 J=B7+ INT (3* RND (1))-1
5910 IF (J<1) OR (J>10) THEN 5930
5920 IF Q$(I,J)="." THEN 5940
5930 NEXT L: LOCATE 15,1: PRINT "FAILS.";SPC(38);CHR$(13);: GOTO 5870
5940 LOCATE 15,1: PRINT "SUCCEEDS.";SPC(36);:S6=I:S7=J:Q$(I,J)= LEFT$ (S5$,1)
5950 GOSUB 3560: LOCATE 16,1: PRINT "CAPTAIN, WE MADE IT!";SPC(25);: GOSUB 12250: RETURN
5960 REM PHASER SUBROUTINE
5970 P4=2:L5=K3:N=1
5980 FOR K=1 TO L5
5990 IF H3(K)=0 THEN 6250
6000 D6=0.9+0.01* RND (1):H2=H3(K)*D6^K7(N)
6010 P3=K6(N)
6020 P= ABS (P3): IF P4*H2<P THEN P=P4*H2
6030 K6(N)=P3- SGN (P3)* ABS (P)
6040 X8=K4(N):Y8=K5(N)
6050 IF H2>4.99 THEN 6070
6060 LOCATE 14,1: PRINT "MINOR HIT ON ";: GOTO 6080
6070 LOCATE 14,1: PRINT FN R(H2);"UNIT HIT ON ";
6080 M$=Q$(X8,Y8)
6090 IF M$="K" THEN PRINT "KLINGON AT";
6100 IF M$="C" THEN PRINT "COMMANDER AT";
6110 PRINT X8;"-";Y8
6120 IF K6(N)<>0 THEN 6160
6130 A5=X8:A6=Y8:T2$=Q$(X8,Y8): GOSUB 3290
6140 IF R1<>0 THEN 6260
6150 F9=1: A2=1: GOTO 6260
6160 IF K6(N)<0 THEN 6250
6170 IF RND (1)<0.9 THEN 6250
6180 IF K6(N)>(0.4+0.4* RND (1))*P3 THEN 6250
6200 LOCATE 15,1: PRINT USING "CAPTAIN, THE VESSEL AT SECTOR ##-## HAS JUST";X8;Y8;:LOCATE 16,1:PRINT "LOST ITS FIREPOWER";SPC(27);
6240 K6(N)=-K6(N)
6250 N=N+1
6260 NEXT K
6270 RETURN
6280 REM
6290 J3=0
6300 IF D4(7)<>0 THEN 6560
6310 IF E1<=75 THEN 6390
6320 LOCATE 13,1:PRINT SPC(20);CHR$(13):LOCATE 13,1:INPUT "ENTER COURSE....";D2
6330 IF D2<0.01 OR D2>12 THEN GOSUB 14130 ELSE 6350
6340 RETURN
6350 LOCATE 14,11: PRINT SPC(34);CHR$(13):LOCATE 14,1: INPUT "DISTANCE ";D1: IF D1>0 THEN 6370
6360 RETURN
6370 P3=50+250*D1
6380 IF P3<E1 THEN 6460
6390 LOCATE 13,1
6400 PRINT "SPOCK HERE.  CAPTAIN, THE IMPULSE ENGINES    ";
6410 LOCATE 14,1: PRINT "REQUIRE 50 UNITS OF ENERGY TO ENGAGE, PLUS   ";:LOCATE 15,1: PRINT "250 UNITS PER ";
6420 IF E1>75 THEN 6440
6430 PRINT "QUADRANT.  THEY ARE USELESS NOW.": RETURN
6440 PRINT "QUADRANT.  WE CAN GO A MAXIMUM OF ";
6450 PRINT FN R(0.004*(E1-50)-0.05);"QUADRANTS.'": RETURN
6460 T1=D1/0.4
6470 IF T1<R5 THEN 6510
6480 LOCATE 14,1: PRINT "SIR, MAX. SPEED UNDER IMPULSE IS ONLY 4      ";:LOCATE 15,1: PRINT "SECTORS PER STARDATE";SPC(25);:LOCATE 15,21: INPUT "-- AUTHORIZE ";B$
6500 IF LEFT$ (B$,1)="y" OR LEFT$ (B$,1)="Y" THEN RETURN
6510 GOSUB 6740:J3=1
6520 IF A2<>0 THEN RETURN
6530 E1=E1-P3
6540 IF E1>0 THEN GOSUB 3790: RETURN: REM NORMAL TERMINATION
6550 F9=4: A2=1: RETURN
6560 LOCATE 13,1: PRINT "IMPULSE ENGINES DAMAGED.";SPC(21);: RETURN
6570 REM Lr
6580 N$="    #"
6590 IF D4(2)<>0 THEN 6730
6600 I0=Q1-1:J0=Q1+1:K=Q2-1:L=Q2+1
6610 FOR M=I0 TO J0: FOR N=K TO L
6620 IF (M<=0) OR (M>8) THEN 6680
6630 IF (N<=0) OR (N>8) THEN 6680
6640 IF D4(11)=0 THEN S2(M,N)=1
6650 LOCATE 2+M,4*N+JO-1: IF G(M,N)=LQ OR G(M,N)>99 THEN COLOR 12,0
6660 IF G(M,N)>=LQ THEN PRINT " *** ";
6670 IF G(M,N)<LQ THEN PRINT SPC(4-LEN(STR$(G(M,N))));G(M,N);
6680 COLOR 10,0: NEXT N
6690 NEXT M
6700 IF D4(11)=0 THEN RETURN
6710 LOCATE 14,1: PRINT "WARNING: COMPUTER DAMAGED; SCAN NOT RECORDED.";
6720 RETURN
6730 LOCATE 13,1:PRINT "LONG RANGE SENSORS DAMAGED.";SPC(18);: RETURN
6740 A5=(15-D2)*0.523599:D4=- SIN (A5):D6= COS (A5):B8= ABS (D4)
6750 IF ABS (D6)>B8 THEN B8= ABS (D6)
6760 D4=D4/B8:D6=D6/B8:T5=0:T6=0
6770 IF D0+T1<F1(2) THEN 6800
6780 T5=1:C5$="RED":D1=D1*(F1(2)-D0)/T1+0.1
6790 T1=F1(2)-D0+0.000009999999
6800 Q$(S6,S7)=".":X7=S6:Y7=S7:H9= INT (10*D1*B8+0.5)
6810 IF H9=0 THEN 6920
6820 XOLD=X7:YOLD=Y7:FOR L=1 TO H9
6830 X7=X7+D4:X1= INT (X7+0.5):Y7=Y7+D6:Y1= INT (Y7+0.5)
6840 IF (X1<1) OR (X1>10) THEN 7100
6850 IF (Y1<1) OR (Y1>10) THEN 7100
6860 IF Q$(X1,Y1)="O" THEN 6900
6870 IF Q$(X1,Y1)<>"." THEN 6970
6880 NEXT L
6890 GOSUB 40320: GOSUB 40330
6900 COLOR 10,0: D1=0.1* SQR ((S6-X1)^2+(S7-Y1)^2)
6910 S6=X1:S7=Y1
6920 F4=S6:F5=S7
6930 IF Q$(X1,Y1)<>"O" THEN 7430
6940 T2= FN A(1):T3= FN A(1)
6950 Q1= FN A(1):Q2= FN A(1):S6= FN B(1):S7= FN B(1)
6960 PRINT "*** SPACE PORTAL ENTERED ***";: GOTO 7400
6970 T6=1:K=50*D1/T1+0.001:D1=0.1* SQR ((S6-X1)^2+(S7-Y1)^2)
6980 IF (Q$(X1,Y1)="K") OR (Q$(X1,Y1)="C") THEN 7090
6990 LOCATE 15,1: PRINT S5$;" BLOCKED BY ";
7000 IF Q$(X1,Y1)="*" THEN PRINT "STAR AT";
7010 IF Q$(X1,Y1)="B" THEN PRINT "STARBASE AT";
7020 PRINT " SECTOR";X1;"-";Y1;"...."
7030 LOCATE 13,1: PRINT "EMERGENCY STOP REQUIRED"; FN R(K);"UNITS OF ENERGY. ";
7040 E1=E1-K
7050 S6= INT (X7-D4+0.5):F4=S6:S7= INT (Y7-D6+0.5):F5=S7
7060 LOCATE 1+XOLD,3+2*YOLD:PRINT ".": COLOR 7,0: LOCATE 1+S6,3+2*S7:IF S5$="ENTERPRISE" THEN PRINT "E"; ELSE IF S5$="FAERIE QUEEN" THEN PRINT "F"; ELSE PRINT "?";
7070 COLOR 10,0: IF E1>0 THEN 7430
7080 F9=4: A2=1: RETURN
7090 S6=X1:S7=Y1: GOSUB 10440:F4=S6:F5=S7: GOTO 7430
7100 IF K3=0 THEN 7160
7110 FOR L=1 TO K3
7120 F3= SQR ((X1-K4(L))^2+(Y1-K5(L))^2)
7130 K8(L)=0.5*(F3+K7(L)): NEXT L
7140 IF G(Q1,Q2)<>LQ THEN GOSUB 790
7150 IF A2<>0 THEN RETURN
7160 X7=10*(Q1-1)+S6:Y7=10*(Q2-1)+S7
7170 X1= INT (X7+10*D1*B8*D4+0.5)
7180 Y1= INT (Y7+10*D1*B8*D6+0.5):L6=0
7190 L5=0
7200 IF X1>0 THEN 7220
7210 X1=-X1+1:L5=1
7220 IF Y1>0 THEN 7240
7230 Y1=-Y1+1:L5=1
7240 IF X1<=80 THEN 7260
7250 X1=161-X1:L5=1
7260 IF Y1<=80 THEN 7280
7270 Y1=161-Y1:L5=1
7280 IF L5=0 THEN 7300
7290 L6=1: GOTO 7190
7300 IF L6=0 THEN 7370
7310 LOCATE 13,1: PRINT "MESSAGE FROM STARFLEET COMMAND, STARDATE      ";:LOCATE 14,1:PRINT USING "####.#"; FN R(DO);:PRINT SPC(39);
7320 LOCATE 15,1: PRINT "PERMISSION TO EXIT GALAXY - DENIED - ";SPC(8);
7330 LOCATE 16,1: PRINT "'ENGINES SHUT DOWN AT ";
7340 Z1= INT ((X1+9)/10):Z2= INT ((Y1+9)/10)
7350 PRINT "QUADRANT";Z1;"-";Z2;",  ";
7360 PRINT "SECTOR";X1-10*(Z1-1);"-";Y1-10*(Z2-1);
7370 IF T5<>0 THEN RETURN
7380 Q1= INT ((X1+9)/10):Q2= INT ((Y1+9)/10)
7390 S6=X1-10*(Q1-1):S7=Y1-10*(Q2-1)
7400 GOTO 7420
7420 Q$(S6,S7)= LEFT$ (S5$,1): GOSUB 8160: GOSUB 12250: GOSUB 6570: RETURN
7430 Q$(S6,S7)= LEFT$ (S5$,1)
7440 IF L6=1 THEN RETURN
7450 IF K3=0 THEN 7520
7460 FOR L=1 TO K3
7470 F3= SQR ((F4-K4(L))^2+(F5-K5(L))^2)
7480 K8(L)=0.5*(K7(L)+F3)
7490 K7(L)=F3
7500 NEXT L
7510 GOSUB 12150
7520 GOSUB 8130: RETURN
7530 A=1:B=1
7540 FOR K=1 TO K3
7550 C=K4(K):D=K5(K)
7560 IF Q$(C,D)="C" THEN 7580
7570 NEXT K
7580 N=0:F=K6(K)+100*K3
7590 IF F>LQ THEN N= INT ( RND (1)*K7(K)+1)
7600 IF ((C5$="DOCKED") AND ((B4<>Q1) OR (B5<>Q2))) THEN N=-S8
7610 IF N=0 THEN N= INT (((F+200* RND (1))/150)-5)
7620 IF N=0 THEN RETURN
7630 IF (N>0) AND (K7(K)<1.5) THEN RETURN
7640 IF ABS (N)>S8 THEN N= SGN (N)* ABS (S8)
7650 T= ABS (N):P=S6-C:Q=S7-D
7660 IF 2* ABS (P)< ABS (Q) THEN P=0
7670 IF 2* ABS (Q)< ABS (P) THEN Q=0
7680 IF P<>0 THEN P= SGN (P*N)
7690 IF Q<>0 THEN Q= SGN (Q*N)
7700 R=C:S=D:Q$(C,D)="."
7710 FOR L2=1 TO T:L=R+P:M=S+Q
7720 IF (L>0) AND (L<=10) THEN 7740
7730 ON SGN (N)+2 GOTO 7960,7830,7830
7740 IF (M>0) AND (M<=10) THEN 7760
7750 ON SGN (N)+2 GOTO 7960,7770,7770
7760 IF Q$(L,M)="." THEN 7890
7770 IF (Q=B) OR (P=0) THEN 7830
7780 M=S+B
7790 IF (M>0) AND (M<=10) THEN 7810
7800 ON SGN (N)+2 GOTO 7960,7820,7820
7810 IF Q$(L,M)="." THEN 7890
7820 B=-B
7830 IF (P=A) OR (Q=0) THEN 7900
7840 L=R+A
7850 IF (L>0) AND (L<=10) THEN 7870
7860 ON SGN (N)+2 GOTO 7960,7880,7880
7870 IF L<11 AND L>0 AND M <11 AND M>0 THEN IF Q$(L,M)="." THEN 7890
7880 A=-A: GOTO 7900
7890 R=L:S=M
7900 NEXT L2
7910 Q$(R,S)="C"
7920 IF (R=C) AND (S=D) THEN RETURN
7930 K4(K)=R:K5(K)=S:K7(K)= SQR ((S6-R)^2+(S7-S)^2)
7940 K8(K)=K7(K): IF C<11 AND C>0 AND D<11 AND D>0 THEN LOCATE 1+C,3+2*D:PRINT ".";
7950 COLOR 12,0: LOCATE 1+R,3+2*S: PRINT "C";: GOSUB 12150: COLOR 10,0: RETURN
7960 I=Q1+ INT ((L+9)/10)-1:J=Q2+ INT ((M+9)/10)-1
7970 IF (I<1) OR (I>8) THEN 8120
7980 IF (J<1) OR (J>8) THEN 8120
7990 FOR L3=1 TO R2
8000 IF (C1(L3)=I) AND (C2(L3)=J) THEN 8120
8010 NEXT L3: LOCATE 13,1: PRINT "COMMANDER ESCAPES TO ";
8020 PRINT USING "QUADRANT ##-##          ";I;J;: LOCATE 14,1:PRINT "(AND REGAINS STRENGTH)";SPC(23);
8025 GOSUB 12250: GOSUB 6570
8030 K4(K)=K4(K3):K5(K)=K5(K3):K7(K)=K7(K3):K8(K)=K8(K3)
8040 K6(K)=K6(K3):K3=K3-1:C3=0
8050 IF C5$<>"DOCKED" THEN GOSUB 8130
8060 GOSUB 12150
8070 G(Q1,Q2)=G(Q1,Q2)-100:G(I,J)=G(I,J)+100
8080 FOR L3=1 TO R2
8090 IF (C1(L3)=Q1) AND (C2(L3)=Q2) THEN 8110
8100 NEXT L3
8110 C1(L3)=I:C2(L3)=J: RETURN
8120 A=-A:B=-B: GOTO 7900
8130 CONCOLOR=10: IF C5$<>"DOCKED" THEN C5$="GREEN"
8132 IF E1<LQ THEN C5$="YELLOW"
8135 IF E1<LQ THEN CONCOLOR=14
8140 IF G(Q1,Q2)>99 AND C5$<>"DOCKED" THEN C5$="RED"
8145 IF G(Q1,Q2)>99 THEN CONCOLOR=12
8150 RETURN
8160 J4=1:B6=0:B7=0:K3=0:C3=0:U=G(Q1,Q2): IF U>999 THEN 8430
8170 K3= INT (0.01*U): FOR A=1 TO 10: FOR B=1 TO 10:Q$(A,B)=".": NEXT B: NEXT A
8180 Q$(S6,S7)= LEFT$ (S5$,1):U=G(Q1,Q2): IF U<100 THEN 8300
8190 U=U-100*K3: FOR A=1 TO K3
8200 S= FN B(1):K4(A)=S:T= FN B(1):K5(A)=T
8210 IF Q$(S,T)<>"." THEN 8200
8220 Q$(S,T)="K":K7(A)= SQR ((S6-S)^2+(S7-T)^2):K8(A)=K7(A)
8230 K6(A)= RND (1)*150+325: NEXT A
8240 IF R2=0 THEN 8290
8250 FOR A=1 TO R2
8260 IF (C1(A)=Q1) AND (C2(A)=Q2) THEN 8280
8270 NEXT A: GOTO 8290
8280 Q$(S,T)="C":K6(K3)=LQ+400* RND (1):C3=1
8290 GOSUB 12150
8300 IF U<10 THEN 8340
8310 U=U-10
8320 B6= FN B(1):B7= FN B(1): IF Q$(B6,B7)<>"." THEN 8320
8330 Q$(B6,B7)="B"
8340 GOSUB 8130: IF U<1 THEN RETURN
8350 FOR A=1 TO U
8360 S= FN B(1):T= FN B(1): IF Q$(S,T)<>"." THEN 8360
8370 Q$(S,T)="*": NEXT A
8380 IF (T2<>Q1) OR (T3<>Q2) THEN RETURN
8390 S= FN B(1):T= FN B(1): IF Q$(S,T)<>"." THEN 8390
8400 Q$(S,T)="O"
8410 LOCATE 14: PRINT "*** SHORT-RANGE SENSORS DETECT A SPACE-WARP ";: LOCATE 15,1: PRINT "IN THIS QUADRANT";SPC(29);
8420 RETURN
8430 FOR A=1 TO 10: FOR B=1 TO 10:Q$(A,B)=".": NEXT B: NEXT A
8440 Q$(S6,S7)= LEFT$ (S5$,1): RETURN
8450 REM
8460 IF RND (1)>0.1 THEN 8480
8470 GOSUB 11690: RETURN
8480 GOSUB 40200
8490 G(Q1,Q2)=G(Q1,Q2)-1:S1=S1+1
8500 B9=1:T6=1:T7=1:K=0:X1=0:Y1=0
8510 H4(B9,1)=A5:H4(B9,2)=A6
8520 FOR M=B9 TO T6: FOR Q=1 TO 3: FOR J=1 TO 3
8530 IF J*Q=4 THEN 8970
8540 J5=H4(M,1)+Q-2:J6=H4(M,2)+J-2
8550 IF (J5<1) OR (J5>10) THEN 8970
8560 IF (J6<1) OR (J6>10) THEN 8970
8570 IF Q$(J5,J6)="." THEN 8970
8580 IF Q$(J5,J6)="O" THEN 8970
8590 IF Q$(J5,J6)<>"*" THEN 8650
8600 IF RND (1)>=0.1 THEN 8620
8610 X2=J5:Y2=J6: GOSUB 11690: RETURN
8620 T7=T7+1:H4(T7,1)=J5:H4(T7,2)=J6:G(Q1,Q2)=G(Q1,Q2)-1
8630 S1=S1+1: GOSUB 40100
8640 GOTO 8960
8650 IF Q$(J5,J6)<>"B" THEN 8720
8660 G(Q1,Q2)=G(Q1,Q2)-10: FOR V=1 TO R3
8670 IF (B2(V)<>Q1) OR (B3(V)<>Q2) THEN 8690
8680 B2(V)=B2(R3):B3(V)=B3(R3)
8690 NEXT V:R3=R3-1:B6=0:B7=0:B1=B1+1: GOSUB 8130
8700 GOSUB 40100
8710 GOTO 8960
8720 IF (S6<>J5) OR (S7<>J6) THEN 8820
8730 LOCATE 16,1: PRINT "*** STARSHIP BUFFETED BY NOVA.";SPC(15);: IF S4<>0 THEN 8750
8740 E1=E1-LQ: GOTO 8780
8750 IF S3>=LQ THEN 8800
8760 D6=LQ-S3:E1=E1-D6: GOSUB 8130:S3=0:S4=0
8770 LOCATE 16,1: PRINT "*** STARSHIP SHIELDS KNOCKED OUT.";SPC(12);: D4(8)=(0.005000001*D5* RND(1))*D6:GOSUB 12570: GOSUB 3690
8780 IF E1>0 THEN 8810
8790 F9=7: A2=1: RETURN
8800 S3=S3-LQ
8810 X1=X1+S6-H4(M,1):Y1=Y1+S7-H4(M,2):K=K+1: GOTO 8970
8820 IF Q$(J5,J6)<>"C" THEN 8950
8830 FOR V=1 TO K3
8840 IF (K4(V)=J5) AND (K5(V)=J6) THEN 8860
8850 NEXT V
8860 K6(V)=K6(V)-800: IF K6(V)<=0 THEN 8950
8870 N5=J5+J5-H4(M,1):N6=J6+J6-H4(M,2)
8880 LOCATE 16,1: PRINT USING "COMMANDER AT SECTOR ##-## DAMAGED           ";J5;J6;
8890 IF (N5<1) OR (N5>10) OR (N6<1) OR (N6>10) THEN 8940
8900 LOCATE 1+J5,3+2*J6:PRINT ".";: LOCATE 1+N5,3+2*N6:PRINT "C";
8910 Q$(N5,N6)="C":K4(V)=N5:K5(V)=N6
8920 K7(V)= SQR ((S6-N5)^2+(S7-N6)^2):K8(V)=K7(V)
8930 Q$(J5,J6)="."
8940 GOTO 8970
8950 A5=J5:A6=J6:T2$=Q$(J5,J6): GOSUB 3290: GOTO 8970
8960 Q$(J5,J6)="."
8970 NEXT J: NEXT Q: NEXT M
8980 IF T6=T7 THEN 9000
8990 B9=T6+1:T6=T7: GOTO 8520
9000 IF K=0 THEN RETURN
9010 D1=K*0.1
9020 IF X1<>0 THEN X1= SGN (X1)
9030 IF Y1<>0 THEN Y1= SGN (Y1)
9040 I=3*(X1+1)+Y1+2
9050 D2=C5(I)
9060 IF D2=0 THEN D1=0
9070 IF D1=0 THEN RETURN
9080 LOCATE 14,1: PRINT "FORCE OF NOVA DISPLACES STARSHIP.";SPC(12);
9090 GOSUB 6740: RETURN
9100 REM PHASERS
9110 P=2:J3=1
9120 IF C5$<>"DOCKED" THEN 9140
9130 LOCATE 15,1: PRINT "PHASERS CAN'T BE FIRED THRU BASE SHIELDS.";SPC(4);: GOTO 9200
9140 IF D4(3)=0 THEN 9160
9150 COLOR 14,0: LOCATE 15,1: PRINT "PHASER BANKS DAMAGED.";SPC(24);: COLOR 10,0: GOTO 9200
9160 IF S4=0 THEN 9180
9170 LOCATE 14,1: PRINT "SHIELDS MUST BE DOWN TO FIRE PHASERS.";SPC(8);: GOTO 9200
9180 IF K3>0 THEN 9210
9190 LOCATE 15,1: PRINT "THE SHORT-RANGE SENSORS DETECT NO ENEMY IN   ";: LOCATE 16,1: PRINT "THIS QUADRANT.";SPC(32);
9200 J3=0: RETURN
9210 LOCATE 13,1: PRINT "PHASERS LOCKED ON TARGET.";SPC(19);CHR$(13):LOCATE 14,1:PRINT "ENERGY AVAILABLE=";SPC(27);CHR$(13);
9220 LOCATE 14,19: PRINT 0.01* INT (100*E1);
9230 LOCATE 15,15: PRINT SPC(30);CHR$(13);:LOCATE 15,1:INPUT "UNITS TO FIRE";P1: IF P1<E1 THEN 9250
9240 LOCATE 14,1: PRINT "ENERGY AVAILABLE =";: GOTO 9220
9250 IF P1>0 THEN 9270
9260 J3=0: RETURN
9270 E1=E1-P1: GOSUB 12550
9280 IF D4(11)=0 THEN 9310
9290 P1=P1*( RND (1)*0.5+0.5)
9300 COLOR 14,0: LOCATE 16,1: PRINT "COMPUTER MALFUNCTION HAMPERS PHASER ACCURACY.";:COLOR 10,0
9310 E=P1: IF K3=0 THEN 9480
9320 E=0:T5=(K3*(K3+1))/2
9330 FOR I=1 TO K3:H3(I)=((K3+1-I)/T5)*P1
9340 H5(I)= ABS (K6(I))/(P*0.9^K7(I))
9350 IF H3(I)<=H5(I) THEN 9370
9360 E=E+(H3(I)-H5(I)):H3(I)=H5(I)
9370 NEXT I
9380 IF E=0 THEN 9450
9390 FOR I=1 TO K3:R7=H5(I)-H3(I)
9400 IF R7<=0 THEN 9430
9410 IF R7>=E THEN 9440
9420 H3(I)=H5(I):E=E-R7
9430 NEXT I: GOTO 9450
9440 H3(I)=H3(I)+E:E=0
9450 GOSUB 5970
9460 IF (E<>0) AND (A2=0) THEN 9480
9470 J3=1: RETURN
9480 LOCATE 14,1: PRINT USING "####.# EXPENDED ON EMPTY SPACE.              ";FN R(E);:J3=1: RETURN
9490 REM TORPEDOS
9500 J3=1: IF D4(4)=0 THEN 9520
9510 COLOR 14,0: LOCATE 14,1: PRINT "PHOTON TUBES DAMAGED.";SPC(23);CHR$(13);: COLOR 10,0: GOTO 9560
9520 IF T4<>0 THEN 9540
9530 COLOR 12,0: LOCATE 14,1: PRINT "NO TORPEDOS LEFT.";SPC(27);CHR$(13);: COLOR 10,0: GOTO 9560
9540 LOCATE 13,16:PRINT SPC(28);CHR$(13);:LOCATE 13,1: INPUT "TORPEDO COURSE";C6
9550 IF C6<0.01 OR C6>12 THEN GOSUB 14130 ELSE 9570
9560 J3=0: RETURN
9570 LOCATE 13,12:PRINT SPC(32);CHR$(13);:LOCATE 13,1:INPUT "BURST OF 3";B$:N=1
9580 IF LEFT$ (B$,1)="N" OR LEFT$(B$,1)="n" THEN 9670
9590 IF LEFT$ (B$,1)="Y" OR LEFT$(B$,1)="y" THEN 9600 ELSE 9570
9600 IF T4>2 THEN 9620
9610 COLOR 14,0: PRINT "NO BURST.  ONLY";T4;"TORPEDOS LEFT.";SPC(13);: COLOR 10,0: GOTO 9560
9620 LOCATE 13,27:PRINT SPC(17);CHR$(13);:LOCATE 13,1: INPUT "SPREAD ANGLE (3 - 30 DEG)";G2
9630 IF G2<0 THEN 9560
9640 IF (G2<3) OR (G2>30) THEN 9620
9650 G2= FN D(G2)
9660 N=3
9670 FOR Z6=1 TO N
9680 IF C5$<>"DOCKED" THEN T4=T4-1
9690 Z7=Z6:R= RND (1)
9700 R=(R+ RND (1))*0.5-0.5
9710 IF (R>=-0.4) AND (R<=0.4) THEN 9790
9720 R=( RND (1)+1.2)*R: IF N=3 THEN 9750
9730 COLOR 14,0: LOCATE 13,1: PRINT "METEORITE DEFLECTION--";:R= INT ( RND (1)*50)+1: COLOR 10,0
9740 PRINT "TORPEDO EFFECTIVENESS  ";:LOCATE 14,1:PRINT USING "REDUCED ### %"; R;:PRINT SPC(32);: GOTO 9760
9750 LOCATE 13,1: PRINT USING "TORPEDO NUMBER # MISFIRE - ### % DOWN";Z6;R;
9760 IF RND (1)>0.2 THEN 9790
9770 COLOR 12,0: LOCATE 14,1: PRINT "PHOTON TUBES DAMAGED BY MISFIRE.";SPC(13);: COLOR 10,0
9780 D4(4)=D5*(1+2* RND (1)): GOTO 10410
9790 IF (S4<>0) OR (C5$="DOCKED") THEN R=R+0.001*S3*R
9800 A3=C6+0.25*R: IF N=1 THEN 9830
9810 A8=(15-A3+(2-Z6)*G2)*0.523599: PRINT
9820 XOLD=0: YOLD=0: GOTO 9840
9830 A8=(15-A3)*0.523599
9840 GOSUB 40300
9860 X4=- SIN (A8):Y4= COS (A8):B8= ABS (X4)
9870 IF ABS (Y4)> ABS (X4) THEN B8= ABS (Y4)
9880 X4=X4/B8:Y4=Y4/B8:X5=S6:Y5=S7
9890 FOR L9=1 TO 15:X5=X5+X4:A5= INT (X5+0.5)
9900 IF (A5<1) OR (A5>10) THEN 10390
9910 Y5=Y5+Y4:A6= INT (Y5+0.5)
9920 IF (A6<1) OR (A6>10) THEN 10390
9930 IF (L9=5) OR (L9=9) THEN PRINT
9940 XNEW= FN R(X5): YNEW=FN R(Y5): GOSUB 40300: XOLD=XNEW: YOLD=YNEW
9950 IF Q$(A5,A6)<>"." THEN 9970
9960 GOTO 10380
9970 PRINT : IF Q$(A5,A6)="K" THEN 10020
9980 IF Q$(A5,A6)<>"C" THEN 10200
9990 IF RND (1)>0.1 THEN 10020
10000 LOCATE 13,1: PRINT USING "COMMANDER AT SECTOR ##-## USES ANTI-PHOTON  ";A5;A6;:LOCATE 14,1: PRINT "DEVICE!  TORPEDO NEUTRALIZED.";SPC(16);
10010 GOTO 10400
10020 FOR V=1 TO K3
10030 IF (A5=K4(V)) AND (A6=K5(V)) THEN 10050
10040 NEXT V
10050 K=K6(V):W3=200+800* RND (1)
10060 IF ABS (K)<W3 THEN W3= ABS (K)
10070 K6(V)=K- SGN (K)* ABS (W3): IF K6(V)<>0 THEN 10090
10080 T2$=Q$(A5,A6): GOSUB 3290: GOTO 10400
10090 A7=A8+2.5*( RND (1)-0.5)
10100 W3= ABS (- SIN (A7)): IF ABS ( COS (A7))>W3 THEN W3= ABS ( COS (A7))
10110 X7=- SIN (A7)/W3:Y7= COS (A7)/W3
10120 P= INT (A5+X7+0.5):Q= INT (A6+Y7+0.5)
10130 IF (P<1) OR (P>10) OR (Q<1) OR (Q>10) THEN 10190
10140 IF Q$(P,Q)<>"." THEN 10190
10150 Q$(P,Q)=Q$(A5,A6):Q$(A5,A6)=".": LOCATE 1+P,3+2*INT(Q):PRINT Q$(P,Q);:GOSUB 40200
10160 K4(V)=P:K5(V)=Q:K7(V)= SQR ((S6-P)^2+(S7-Q)^2)
10170 K8(V)=K7(V)
10180 GOSUB 12150: GOTO 10400
10190 GOTO 10400
10200 IF Q$(A5,A6)<>"B" THEN 10280
10210 COLOR 12,0:LOCATE 15,1: PRINT "STARBASE DESTROYED!";SPC(26);: COLOR 10,0
10220 IF S2(Q1,Q2)<0 THEN S2(Q1,Q2)=0
10230 FOR W=1 TO R3
10240 IF (B2(W)<>Q1) OR (B3(W)<>Q2) THEN 10260
10250 B2(W)=B2(R3):B3(W)=B3(R3)
10260 NEXT W:Q$(A5,A6)=".":R3=R3-1:B6=0:B7=0
10270 G(Q1,Q2)=G(Q1,Q2)-10:B1=B1+1: GOSUB 8130: GOTO 10400
10280 IF Q$(A5,A6)<>"*" THEN 10360
10290 IF RND (1)>0.15 THEN 10320
10300 LOCATE 1+A5,3+2*A6:COLOR INT(RND*(4)+3),0: PRINT "*";
10310 GOTO 10400
10320 X2=A5:Y2=A6: GOSUB 8460:A5=X2:A6=Y2
10330 IF G(Q1,Q2)=LQ THEN GOTO 10430
10340 IF A2<>0 THEN GOTO 10430
10350 GOTO 10400
10360 Q$(A5,A6)=".": LOCATE 14,1: PRINT "SPACE PORTAL DESTROYED";SPC(23);
10370 T2=0:T3=0: GOTO 10400
10380 NEXT L9
10390 LOCATE 15,1: PRINT "TORPEDO MISSED!";SPC(30);
10400 NEXT Z6
10410 IF R1<>0 THEN GOTO 10430
10420 F9=1: GOSUB 4900: RETURN
10430 GOSUB 12370: GOSUB 12390: GOSUB 12460: GOSUB 12560: GOSUB 12600: GOSUB 12610: RETURN
10440 COLOR 12,0: LOCATE 12,1:PRINT "RED ALERT!  RED ALERT!";
10450 PRINT "  COLLISION IMMINENT!";SPC(3);
10460 LOCATE 13,1: PRINT S5$;" RAMS ";:W7=1: IF Q$(S6,S7)="C" THEN W7=2
10470 IF W7=1 THEN PRINT "KLINGON AT ";
10480 IF W7=2 THEN PRINT "COMMANDER AT ";
10490 PRINT "SECTOR";S6;"-";S7:A5=S6:A6=S7:T2$=Q$(S6,S7)
10500 GOSUB 3290: PRINT "*** ";S5$;" HEAVILY DAMAGED."
10510 K= INT (5+ RND (1)*20): PRINT "***SICKBAY REPORTS";K;"CASUALTIES!": COLOR 10,0
10520 C4=C4+K: FOR L=1 TO 12:I= RND (1)
10530 J=(3.5*W7*( RND (1)+I)+1)*D5
10540 IF L=6 THEN J=J/3
10550 D4(L)=D4(L)+T1+J: NEXT L:D4(6)=D4(6)-3
10560 IF D4(6)<0 THEN D4(6)=0
10570 S4=0: IF R1<>0 THEN RETURN
10580 F9=1: A2=1: RETURN
10590 P=D0-J2: IF (P<>0) AND (R1=0) THEN 10610
10600 IF P<5 THEN P=5
10610 N=(K2+K1)/P:K= INT (500*N+0.5):L=0
10620 IF G1<>0 THEN L=100*S8
10630 I=0
10640 IF LEFT$ (S5$,1)="E" THEN M=0
10650 IF LEFT$ (S5$,1)="F" THEN M=1
10660 IF LEFT$ (S5$,1)="" THEN M=2
10670 IF A1=0 THEN I=200
10680 J=10*K1+50*K2+K+L-I-100*B1-100*M-35*N1-3*S1-C4
10690 IF J<>0 THEN 10710
10700 LOCATE 15,1: PRINT "AS YET, YOU HAVE NO SCORE.";SPC(19);: RETURN
10710 PRINT "YOUR SCORE --": PRINT : IF K1=0 THEN 10730
10720 PRINT K1; TAB( 6);"ORDINARY KLINGON(S) DESTROYED"; TAB( 36);10*K1*MR
10730 IF K2=0 THEN 10750
10740 PRINT K2; TAB( 6);"KLINGON COMMANDER(S) DESTROYED"; TAB( 36);50*K2*MR
10750 IF K=0 THEN 10780
10760 PRINT FN R(N); TAB( 6);"KLINGONS PER STARDATE, AVE.";
10770 PRINT TAB( 36);K*MR
10780 IF S1=0 THEN 10800
10790 PRINT S1; TAB( 6);"STAR(S) DESTROYED"; TAB( 36);-3*S1*MR
10800 IF B1=0 THEN 10820
10810 PRINT B1; TAB( 6);"STARBASES DESTROYED"; TAB( 36);-100*B1*MR
10820 IF N1=0 THEN 10840
10830 PRINT N1; TAB( 6);"SOS CALL(S) TO A STARBASE"; TAB( 36);-35*N1*MR
10840 IF C4=0 THEN 10860
10850 PRINT C4; TAB( 6);"CASUALTIES INCURRED"; TAB( 36);-C4*MR
10860 IF M=0 THEN 10880
10870 PRINT M; TAB( 6);"SHIP(S) LOST OR DESTROYED"; TAB( 36)-100*M*MR
10880 IF A1<>0 THEN 10900
10890 PRINT TAB( 6)"PENALTY FOR GETTING KILLED"; TAB( 36);-200*MR
10900 IF G1=0 THEN 10920
10910 PRINT TAB( 6);"BONUS FOR WINNING ";S$(S8,1);" GAME"; TAB( 36);L*MR
10920 PRINT TAB( 6);STRING$(37,"-")
10930 PRINT TAB( 28);"TOTAL"; TAB( 36);J*MR;"**": RETURN
10940 REM INITIALIZATION
10950 A2=0:G1=0: GOSUB 2170:S5$="ENTERPRISE"
10960 I7=5000:E1=I7:I8=2500:S3=I8:S4=0:S9=S4:J1=4:L1=J1
10970 Q1= FN A(1):Q2= FN A(1):S6= FN B(1):S7= FN B(1):I9=10:T4=I9
10980 W1=5:W2=25: FOR I=1 TO 12:D4(I)=0: NEXT
10990 J2=100* INT (31* RND (1)+20):D0=J2:K1=0:K2=0:N1=0:N2=0:R6=0:C4=0
11000 A1=1:D3=0.25: FOR I=1 TO 8: FOR J=1 TO 8:S2(I,J)=0: NEXT J: NEXT I
11010 F1(1)=D0-0.5*I5* LOG ( RND (1)):F1(5)=1.000000e+30
11020 F1(2)=D0-1.5*(I5/R2)* LOG ( RND (1)):I6=0
11030 F1(3)=D0-0.3*I5* LOG ( RND (1)):F1(4)=D0-0.3*I5* LOG ( RND (1))
11040 FOR I=1 TO 8: FOR J=1 TO 8:K= INT ( RND (1)*9+1):I6=I6+K
11050 G(I,J)=K: NEXT J: NEXT I:S1=0
11060 REM DISTRACT USER WITH SETUPS EG valid commands
11070 GOSUB 260
11080 FOR I=1 TO I2
11090 X= INT ( RND (1)*6+2):Y= INT ( RND (1)*6+2)
11100 IF G(X,Y)>=10 THEN 11090
11110 IF I<2 THEN 11150
11120 K=I-1: FOR J=1 TO K:D1= SQR ((B2(J)-X)^2+(B3(J)-Y)^2)
11130 IF D1<2 THEN 11090
11140 NEXT J
11150 B2(I)=X:B3(I)=Y:S2(X,Y)=-1:G(X,Y)=G(X,Y)+10: NEXT I
11160 REM DISTRACT USER WITH SETUP EG VALID computer COMMANDS
11170 GOSUB 2690
11180 B1=0:K=I1-I4:L= INT (0.25*S8*(9-L2)+1)
11190 M= INT ((1- RND (1)^2)*L): IF M>K THEN M=K
11200 N=100*M
11210 X= FN A(1):Y= FN A(1): IF G(X,Y)+N>999 THEN 11210
11220 G(X,Y)=G(X,Y)+N:K=K-M: IF K<>0 THEN 11190
11230 FOR I=1 TO I4
11240 X= FN A(1):Y= FN A(1): IF (G(X,Y)<99) AND ( RND (1)<0.75) THEN 11240
11250 IF G(X,Y)>899 THEN 11240
11260 IF I=1 THEN 11290
11270 M=I-1: FOR J=1 TO M: IF (C1(J)=X) AND (C2(J)=Y) THEN 11240
11280 NEXT J
11290 G(X,Y)=G(X,Y)+100:C1(I)=X:C2(I)=Y: NEXT I
11300 REM DISTRACT USER WITH SETUPS EG damages setup
11310 GOSUB 3690
11320 I= INT (D0): PRINT :S0=0
11330 T2= FN A(1):T3= FN A(1): IF G(T2,T3)<100 THEN 11330
11340 GOSUB 8160
11350 GOSUB 12250: GOSUB 1970: GOSUB 6570: RETURN
11360 REM WARP SETTING
11370 LOCATE 13,13:PRINT SPC(31);CHR$(13);: LOCATE 13,1: INPUT "WARP FACTOR";K
11380 LOCATE 14,1: PRINT SPC(44);CHR$(13);: LOCATE 14,1
11390 IF K<1 THEN 11500
11400 IF K>10 THEN 11510
11410 J=W1:W1=K:W2=W1*W1
11420 IF (W1<=J) OR (W1<=6) THEN 11450
11430 IF W1<=8 THEN 11460
11440 IF W1>8 THEN 11470
11450 PRINT "WARP FACTOR";W1;"CAPTAIN";: GOSUB 12540: RETURN
11460 PRINT "OUR MAXIMUM SAFE SPEED IS WARP 6";: RETURN
11470 IF W1=10 THEN 11490
11480 PRINT "CAPTAIN, OUR ENGINES MAY NOT TAKE IT!";: RETURN
11490 PRINT "AYE, CAPTAIN, WE'LL GIVE IT A TRY.";: RETURN
11500 PRINT "WE CAN'T GO BELOW WARP 1, CAPTAIN.";: RETURN
11510 PRINT "OUR TOP SPEED IS WARP 10, CAPTAIN.";
11520 RETURN
11530 REM SHIELDS
11540 J3=0: IF D4(8)<>0 THEN 11660
11550 S4=1-S4:GOSUB 12570: RETURN
11560 LOCATE 15,38: PRINT SPC(6);CHR$(13);: LOCATE 15,1: INPUT "SHIELDS ARE DOWN.  DO YOU WANT THEM UP";B$
11570 IF LEFT$ (B$,1)="Y"OR LEFT$(B$,1)="y" THEN 11620
11580 RETURN
11620 LOCATE 9,34: PRINT "UP    ";: S4=1:S9=1: IF C5$<>"DOCKED" THEN E1=E1-50
11630 IF E1<=0 THEN 11670
11640 J3=1: RETURN
11650 S4=0:S9=1: LOCATE 9,34: PRINT "DOWN  ";: J3=1: RETURN
11660 COLOR 12,0: LOCATE 16,1: PRINT "SHIELDS DAMAGED AND DOWN.";SPC(20);: GOSUB 12580: RETURN
11670 PRINT "SHIELDS CONSUME ALL ENERGY.";SPC(18);
11680 F9=4: A2=1: RETURN
11690 IF X2<>0 THEN 11790
11700 N= INT ( RND (1)*I6+1): FOR X=1 TO 8: FOR Y=1 TO 8
11710 N=N-(G(X,Y)- INT (G(X,Y)/10)*10): IF N<=0 THEN 11730
11720 NEXT Y: NEXT X: RETURN
11730 IF (X<>Q1) OR (Y<>Q2) THEN 11850
11740 IF J4<>0 THEN 11850
11750 N= INT ( RND (1)*(G(X,Y)- INT (G(X,Y)/10)*10))+1
11760 FOR X3=1 TO 10: FOR Y3=1 TO 10: IF Q$(X3,Y3)<>"*" THEN 11780
11770 N=N-1: IF N=0 THEN 11790
11780 NEXT Y3: NEXT X3
11790 COLOR 12,0: LOCATE 13,1: PRINT "RED ALERT!  RED ALERT!";
11800 X3=X2:Y3=Y2
11810 PRINT "  INCIPIENT SUPERNOVA     ";:LOCATE 14,1: PRINT USING "DETECTED AT SECTOR ##-##";X3;Y3;:PRINT SPC(21);
11820 X=Q1:Y=Q2:K=(X2-S6)^2+(Y2-S7)^2
11830 IF K>1.5 THEN 11890
11840 LOCATE 15,1: PRINT "EMERGENCY AUTO-OVERRIDE JAMMED.";SPC(14);:A2=1: GOTO 11890
11850 IF D4(9)<>0 THEN 11890
11860 LOCATE 13,1: PRINT "MESSAGE FROM STARFLEET COMMAND, STARDATE"; INT (D0);
11870 LOCATE 14,1: PRINT USING "SUPERNOVA IN QUADRANT ##-##";X;Y;
11880 PRINT "  CAUTION ADVISED."
11890 N=G(X,Y):R= INT (N/100):Q=0
11900 IF (X<>Q1) OR (Y<>Q2) THEN 11920
11910 K3=0:C3=0
11920 IF R=0 THEN 11980
11930 R1=R1-R: IF R2=0 THEN 11980
11940 FOR L=1 TO R2: IF (C1(L)<>X) OR (C2(L)<>Y) THEN 11970
11950 C1(L)=C1(R2):C2(L)=C2(R2):C1(R2)=0:C2(R2)=0
11960 R2=R2-1:R=R-1:Q=1: IF R2=0 THEN F1(2)=1.000000e+30
11970 NEXT L
11980 IF R3=0 THEN 12020
11990 FOR L=1 TO R3: IF (B2(L)<>X) OR (B3(L)<>Y) THEN 12010
12000 B2(L)=B2(R3):B3(L)=B3(R3):B2(R3)=0:B3(R3)=0:R3=R3-1
12010 NEXT L
12020 IF X2=0 THEN 12060
12030 N=G(X,Y)- INT (G(X,Y)/100)*100
12040 S1=S1+(N- INT (N/10)*10):B1=B1+ INT (N/10)
12050 K1=K1+R:K2=K2+Q
12060 IF (S2(X,Y)<>0) AND (D4(9)<>0) THEN S2(X,Y)=LQ+G(X,Y)
12070 IF (D4(9)=0) OR ((Q1=X) AND (Q2=Y)) THEN S2(X,Y)=1
12080 G(X,Y)=1000
12090 IF (R1<>0) OR ((X=Q1) AND (Y=Q2)) THEN 12130
12100 COLOR 10,0: PRINT CHR$ (12): PRINT "*** SUPERNOVA IN QUADRANT";X;"-";Y;"HAS DESTROYED THE"
12110 PRINT "REMAINDER OF THE ENEMY FLEET !!"
12120 F9=1: GOSUB 4930: RETURN
12130 IF A2=0 THEN RETURN
12140 F9=8: GOSUB 4930: RETURN
12150 IF K3<=1 THEN RETURN
12160 Z4=0: FOR O=1 TO K3-1: IF K7(O)<=K7(O+1) THEN 12230
12170 K=K7(O):K7(O)=K7(O+1):K7(O+1)=K
12180 K=K8(O):K8(O)=K8(O+1):K8(O+1)=K
12190 K=K4(O):K4(O)=K4(O+1):K4(O+1)=K
12200 K=K5(O):K5(O)=K5(O+1):K5(O+1)=K
12210 K=K6(O):K6(O)=K6(O+1):K6(O+1)=K
12220 Z4=1
12230 NEXT O
12240 RETURN
12250 REM SRSCAN
12260 IF D4(1)<>0 THEN 12620
12270 LOCATE 1,1: PRINT "    1 2 3 4 5 6 7 8 9 10";
12280 FOR I0=1 TO 10: LOCATE 1+I0,1: IF I0<10 THEN PRINT " ";
12288 COLOR 10,0: PRINT I0;: FOR J0=1 TO 10
12289 IF Q$(I0,J0)="C" OR Q$(I0,J0)="K" THEN COLOR 4,0: GOTO 12299
12290 IF Q$(I0,J0)="*" THEN GOSUB 12311: GOTO 12299
12291 IF Q$(I0,J0)="O" THEN COLOR 14,0: GOTO 12299
12292 IF Q$(I0,J0)="E" OR Q$(I0,J0)="F" THEN COLOR 7,0: GOTO 12299
12293 IF Q$(I0,J0)="." THEN COLOR 10,0
12299 PRINT Q$(I0,J0);" ";: NEXT J0: NEXT I0: COLOR 10,0: GOSUB 12330: RETURN
12300 REM UPDATE STARDATE
12310 LOCATE 1,25: PRINT USING " STARDATE  ####.##"; FN R(D0);: RETURN
12311 STARCOLOR%=INT(RND*(14)+2): IF STARCOLOR%=2 OR STARCOLOR%=10 THEN STARCOLOR%=14
12312 COLOR STARCOLOR%,0: RETURN
12320 REM STATUS
12330 FOR I0= 1 TO 11
12340 ON I0 GOSUB 12300,12360,12390,12460,12500,  12540,12550,12560,12570,12600, 12610
12350 NEXT I0: RETURN
12360 GOSUB 8130
12370 COLOR CONCOLOR,0: LOCATE 2,25: PRINT " CONDITION ";C5$;SPC(6-LEN(C5$));: COLOR 10,0: RETURN
12380 REM POSITION
12390 LOCATE 3,25: PRINT " POSITION    00,0000  ";: LOCATE 3,38: PRINT USING "#";Q1;:PRINT USING "#";Q2;:IF S6>9 THEN GOTO 12410
12400 LOCATE 3,42:PRINT USING "#";S6;: GOTO 12420
12410 LOCATE 3,41:PRINT USING "##";S6;
12420 IF S7>9 THEN GOTO 12440
12430 LOCATE 3,44: PRINT USING "#";S7;:GOTO 12450
12440 LOCATE 3,43:PRINT USING "##";S7;
12450 RETURN
12460 LOCATE 4,25: PRINT " LIFE SUPPORT ";: IF D4(5)<>0 THEN 12480
12470 PRINT "ACTIVE ";: GOTO 12490
12480 COLOR 12,0: PRINT "DAMAGED";: COLOR 10,0
12490 RETURN
12500 IF D4(5)=0 THEN GOTO 12530 ELSE IF C5$<>"DOCKED" THEN 12520
12510 LOCATE 5,25 :PRINT " SUPPORT BY STARBASE";: RETURN
12520 LOCATE 5,25: PRINT USING " RESERVES=     #.##  "; FN S(L1);: RETURN
12530 LOCATE 5,25:PRINT SPC(20);
12540 LOCATE 6,25: PRINT USING " WARP SET     ##.## "; FN R(W1);: RETURN
12550 LOCATE 7,25: PRINT USING " ENERGY     ####.## ";0.01* INT(100*E1);: RETURN
12560 LOCATE 8,25: PRINT USING " TORPEDOS     ##   ";T4;: RETURN
12570 LOCATE 9,25: PRINT " SHIELDS ";:B$="DOWN  ": IF S4<>0 THEN B$="UP    "
12580 IF D4(8)>0 THEN B$="DAMAGE": COLOR 4,0
12590 PRINT USING "\    \ ###";B$; INT (100*S3/I8+0.5);: PRINT "%";: COLOR 10,0: RETURN
12600 LOCATE 10,25: PRINT USING " KLINGONS LEFT ##  ";R1;: RETURN
12610 LOCATE 11,25: PRINT USING " TIME LEFT  ####.## "; FN S(R5);:RETURN
12620 LOCATE 16,1: PRINT "SHORT RANGE SENSORS DAMAGED.": RETURN
12630 LOCATE 14,1: PRINT "TIME WARP ENTERED.  YOU ARE TRAVELING ";
12640 IF S0<>0 THEN 12680
12650 T1=-0.5*I5* LOG ( RND (1))
12660 LOCATE 15,1: PRINT "FORWARD IN TIME"; FN R(T1);"STARDATES.";
12670 F1(2)=F1(2)+T1: GOTO 12830
12680 M=D0:D0=D9(1)
12690 LOCATE 15,1: PRINT "BACKWARD IN TIME"; FN R(M-D0);"STARDATES.";:S0=0
12700 R1=D9(2):R2=D9(3):R3=D9(4):R4=D9(5):R5=D9(6)
12710 S1=D9(7):B1=D9(8):K1=D9(9):K2=D9(10)
12720 FOR I=1 TO 8: FOR J=1 TO 8:G(I,J)=D9(I-1+8*(J-1)+11): NEXT J: NEXT I
12730 FOR I=75 TO 84:C1(I-74)=D9(I): NEXT
12740 FOR I=85 TO 94:C2(I-84)=D9(I): NEXT
12750 FOR I=95 TO 99:B2(I-94)=D9(I): NEXT
12760 FOR I=100 TO 104:B3(I-99)=D9(I): NEXT :B4=D9(105):B5=D9(106)
12770 F1(1)=D0-0.5*I5* LOG ( RND (1))
12780 IF R2<>0 THEN F1(2)=D0-(I5/R2)* LOG ( RND (1))
12790 F1(3)=D0-0.5*I5* LOG ( RND (1))
12800 FOR I=1 TO 8: FOR J=1 TO 8: IF 1<S2(I,J) THEN S2(I,J)=1
12810 NEXT J: NEXT I
12820 LOCATE 14,1: PRINT "SPOCK HAS RECONSTRUCTED A CORRECT STAR CHART  ";:LOCATE 15,1:PRINT "FROM MEMORY.";SPC(33);
12830 GOSUB 8160: RETURN
12840 REM TRANSFER
12850 J3=0: IF D4(12)<>0 THEN 12980
12860 LOCATE 13,28:PRINT SPC(17);CHR$(13);:LOCATE 13,1:INPUT "NUMBER OF UNITS TO SHIELDS";Z3
12870 IF Z3<0 THEN RETURN
12880 IF E1+S3-Z3>0 THEN 12910
12890 LOCATE 13,1:PRINT "SCOTT HERE- WE ONLY HAVE"; FN R(E1+S3);"UNITS LEFT.";  SPC(5);
12900 RETURN
12910 E1=E1+S3-Z3:S3=Z3: LOCATE 13,1: PRINT "--ENERGY TRANSFER COMPLETE--";SPC(17);
12920 GOSUB 12550: GOSUB 12570
12930 J3=1
12940 T1=0.1:P5=(K3+4*C3)/48: IF P5<0.1 THEN P5=0.1
12950 IF P5> RND (1) THEN GOSUB 790
12960 IF A2<>0 THEN RETURN
12970 GOSUB 3790: RETURN
12980 COLOR 14,0: LOCATE 14,1: PRINT "TRANSFER PANEL DAMAGED."SPC(23);: COLOR 10,0: RETURN
12990 REM IDLE
13000 J3=0: LOCATE 14,20:PRINT SPC(26);CHR$(13);:LOCATE 14,1:INPUT "HOW MANY STARDATES";Z5: IF (Z5<R5) AND (K3=0) THEN 13020
13010 LOCATE 13,14:PRINT SPC(30);CHR$(13);:LOCATE 13,1:INPUT "ARE YOU SURE";B$: IF LEFT$ (B$,1)="y" OR LEFT$ (B$,1)="Y" THEN GOTO 13020 ELSE RETURN
13020 R6=1
13030 IF Z5<=0 THEN R6=0
13040 IF R6=0 THEN GOSUB 3790: GOTO 13121
13050 T1=Z5:Z6=Z5
13060 IF K3=0 THEN 13090
13070 T1=1+ RND (1): IF Z5<T1 THEN T1=Z5
13080 Z6=T1
13090 IF T1<Z5 THEN GOSUB 790
13100 IF A2<>0 THEN GOTO 13121
13110 GOSUB 3790:J3=1: IF A2<>0 THEN GOTO 13121
13120 Z5=Z5-Z6: GOTO 13030
13121 GOSUB 3690: RETURN
13130 REM NAVIGATE
13140 J3=0: IF D4(6)<>0 THEN 13640
13150 LOCATE 12,20: INPUT "ENTER COURSE...";D2: IF D2<0.01 OR D2>12 THEN GOSUB 14130 ELSE 13170
13160 RETURN
13170 LOCATE 13,12: PRINT SPC( 33);CHR$(13);: LOCATE 13,1: INPUT "DISTANCE...";D1: IF D1<=0 THEN RETURN
13180 P=(D1+0.05)*W1*W1*W1*(S4+1): IF P<E1 THEN 13300
13190 J3=0: LOCATE 14,1: PRINT "ENGINEERING TO BRIDGE--";
13200 IF (S4=0) OR (0.5*P>E1) THEN 13230
13210 PRINT "WE HAVEN'T THE ENERGY ";:LOCATE 15,1: PRINT "TO GO THAT FAR WITH";
13220 PRINT " THE SHIELDS UP.";SPC(9);: RETURN
13230 W= INT ((E1/(D1+0.05))^0.333333): IF W<=0 THEN 13280
13240 PRINT "WE HAVEN'T THE ENERGY.";:LOCATE 15,1:PRINT USING "BUT WE COULD DO IT AT WARP #";W;
13250 IF S4<>0 THEN 13270 ELSE PRINT SPC(17);
13260 RETURN
13270 PRINT " IF YOU'LL LOWER ";:LOCATE 16,1:PRINT "THE SHIELDS.";SPC(33);: RETURN
13280 PRINT "WE CAN'T DO IT,       ";:LOCATE 15,1:PRINT "CAPTAIN.  WE HAVEN'T GOT THE ENERGY.";SPC(9);
13290 RETURN
13300 T1=10*D1/W2: IF T1<0.8*R5 THEN 13360
13310 LOCATE 14,1: PRINT "MR. SPOCK HERE.  CAPTAIN, I COMPUTE THAT SUCH ";
13320 LOCATE 15,1: PRINT USING "A TRIP WILL REQUIRE APPROXIMATELY ### PERCENT"; FN R(100*T1/R5);
13330 LOCATE 16,1: PRINT "OF OUR REMAINING TIME.  IS THIS WISE";
13340 INPUT;B$: IF LEFT$ (B$,1)="Y" OR LEFT$(B$,1) = "y" THEN 13360
13350 J3=0: RETURN
13360 REM NAVIGATION permitted by time and energy limits
13365 C5$="GREEN"
13370 Q4=0:W=0: IF W1<=6 THEN 13540
13380 P=D1*(6-W1)^2/66.66669: IF P> RND (1) THEN Q4=1
13390 IF Q4<>0 THEN D1= RND (1)*D1
13400 W=0: IF W1<10 THEN 13420
13410 IF 0.25*D1> RND (1) THEN W=1
13420 IF (Q4=0) AND (W=0) THEN 13540
13430 A=(15-D2)*0.5236:X1=- SIN (A):X2= COS (A)
13440 B8= ABS (X1): IF ABS (X2)> ABS (X1) THEN B8= ABS (X2)
13450 X1=X1/B8:Y1=Y1/B8:N= INT (10*D1*B8+0.5):X=S6:Y=S7
13460 IF N=0 THEN 13540
13470 FOR L=1 TO N
13480 X=X+X1:Q= INT (X+0.5): IF (Q<1) OR (Q>10) THEN 13540
13490 Y=Y+Y1:R= INT (Y+0.5): IF (R<1) OR (R>10) THEN 13540
13510 IF Q$(Q,R)="." THEN 13530
13520 Q4=0:W=0
13530 NEXT L
13540 GOSUB 6740: IF A2<>0 THEN RETURN
13550 E1=E1-D1*W1*W1*W1*(S4+1): IF E1>0 THEN 13570
13560 F9=4: A2=1: RETURN
13570 T1=10*D1/W2: IF W<>0 THEN GOSUB 12630
13580 IF Q4=0 THEN 13630
13590 LOCATE 14,1: PRINT "ENGINEERING TO BRIDGE--SCOTT HERE-- WE'VE JUST";
13600 LOCATE 15,1: PRINT "BLOWN THE WARP ENGINES.  WE'LL HAVE TO SHUT  ";
13610 LOCATE 16,1: PRINT "'ER DOWN HERE, CAPTAIN.";SPC(22);
13620 D4(6)=D5*(3* RND (1)+1)
13630 J3=1: GOSUB 12550: GOSUB 3690: GOSUB 12390: RETURN
13640 COLOR 14,0: LOCATE 13,1: PRINT "WARP ENGINES DAMAGED.";SPC(24);: COLOR 10,0: RETURN
13650 REM ABANDON
13660 ON SGN (D4(10))+2 GOTO 13670,13690,13680
13670 LOCATE 14,1: PRINT "YE FAERIE QUEENE HAS NO SHUTTLE CRAFT.";SPC(8);: RETURN
13680 LOCATE 14,1: PRINT "SHUTTLE CRAFT DAMAGED.";SPC(23);: RETURN
13690 LOCATE 13,1: PRINT "ABANDON SHIP!  ABANDON SHIP!  ALL HANDS      ";
13710 LOCATE 14,1: PRINT "ABANDON SHIP!  YOU AND THE BRIDGE CREW ESCAPE";:LOCATE 15,1:PRINT "IN THE GALILEO.  THE REMAINDER OF THE CREW   ";
13730 PRINT "BEAMS DOWN TO THE NEAREST HABITABLE PLANET.  ";: IF R3<>0 THEN 13750
13740 F9=9: A2=1: RETURN
13750 PRINT : PRINT "YOU ARE CAPTURED BY KLINGONS AND RELEASED TO"
13760 PRINT "THE FEDERATION IN A PRISONER-OF-WAR EXCHANGE."
13770 PRINT "STARFLEET PUTS YOU IN COMMAND OF ANOTHER SHIP,"
13780 PRINT "THE FAERIE QUEENE WHICH IS ANTIQUATED, BUT"
13790 PRINT "STILL USABLE.";SPC(33):N= INT ( RND (1)*R3+1):Q1=B2(N):Q2=B3(N)
13800 S6=5:S7=5: GOSUB 8160:Q$(S6,S7)="."
13810 FOR L=1 TO 3:S6= INT (3* RND (1)-1+B6)
13820 IF (S6<1) OR (S7>10) THEN 13850
13830 S7= INT (3* RND (1)-1+B7): IF (S7<1) OR (S7>10) THEN 13850
13840 IF Q$(S6,S7)="." THEN 13860
13850 NEXT L: GOTO 13800
13860 S5$="FAERIE QUEENE":Q$(S6,S7)= LEFT$ (S5$,1):C5$="DOCKED"
13870 FOR L=1 TO 12:D4(L)=0: NEXT :D4(10)=-1:E1=3000:I7=E1
13880 S3=1500:I8=S3:T4=6:I9=T4:L1=3:J1=L1:S4=0:W1=5:W2=25
13890 RETURN
13900 REM DESTRUCT
13910 IF D4(11)=0 THEN 13940
13920 LOCATE 14,1: PRINT "COMPUTER DAMAGED; CAN'T RUN DESTRUCT SEQUENCE";
13930 RETURN
13940 LOCATE 13,1:PRINT "---WORKING---"
13950 LOCATE 14,1:PRINT "IDENTIFICATION-POSITIVE"
13960 LOCATE 15,1:PRINT "SELF-DESTRUCT-SEQUENCE-ACTIVATED;"
13970 FOR I=10 TO 6 STEP -1: LOCATE 15,35:PRINT I: GOSUB 14120: NEXT
13980 PRINT "ENTER-YOUR-MISSION-PASSWORD-TO-CONTINUE      "
13990 PRINT "SELF-DESTRUCT-SEQUENCE-OTHERWISE-DESTRUCT    "
14000 PRINT "SEQUENCE-WILL-BE-ABORTED";SPC(21)
14010 LOCATE 18,35: INPUT B$: IF B$<>X$ THEN 14100
14020 LOCATE 16,1: PRINT "PASSWORD-ACCEPTED";SPC(28)
14030 FOR I=5 TO 1 STEP -1: LOCATE 15,35: PRINT I: GOSUB 14120: NEXT
14040 LOCATE 13,1: COLOR 12,0: PRINT "*****ENTROPY OF ";S5$;" MAXIMIZED*****"
14050 IF K3=0 THEN 14090
14060 W=20*E1: FOR L=1 TO K3: IF K6(L)*K7(L)>W THEN 14080
14070 A5=K4(L):A6=K5(L):T2$=Q$(A5,A6): GOSUB 3290
14080 NEXT L
14090 F9=10: A2=1: RETURN
14100 LOCATE 13,1: PRINT "PASSWORD-REJECTED"
14110 PRINT "CONTINUITY-EFFECTED": RETURN
14120 K=12345: FOR M=1 TO 90:K=K+1: NEXT M: RETURN
14130 LOCATE 14,1: PRINT "---> COURSE(S) .01-12 ONLY !!!";SPC(15);: RETURN
20000 REM- COMMERCIALS -
20010 CLS:ON COMCUE% GOSUB 20030, 20230, 20440
20020 PRINT : INPUT "STRIKE ENTER TO RETURN TO GAME";ACK$
20025 CLS: GOSUB 12250: GOSUB 1970: GOSUB 260: GOSUB 2680: GOSUB 3690: RETURN
20030 GOSUB 20430
20040 COLOR 6,0: PRINT"=========="
20050 PRINT"!++++++++!";SPC(16);"TTTTT  A    N  N  GGG"
20060 PRINT"==========";SPC(18);"T   A A   NN N G"
20070 PRINT"!        !";SPC(18);"T  AAAAA  N NN G  GG"
20080 PRINT"!--------!";SPC(18);"T A     A N  N  GGG"
20090 PRINT"!  TANG  !"
20100 PRINT"!  TANG  !     SPOCK: SPOCK TO CAPTAIN KIRK. KLINGON BATTLE"
20110 PRINT"!  TANG  !           CRUISERS SIGHTED. CONDITION RED."
20120 PRINT"!        !           APPEARANCE ON BRIDGE REQUESTED."
20130 PRINT"! ORANGE !"
20140 PRINT"! FLAVOR !     KIRK: NOT NOW SPOCK. I'M DRINKING"
20150 PRINT"!--------!           MY TANG."
20160 PRINT"==========":PRINT :PRINT
20190 PRINT"    DRINK TANG ***** CAPTAIN KIRK DOES. *****":PRINT
20210 PRINT STRING$(60,"*"): COLOR 10,0: RETURN
20230 GOSUB 20430
20240 PRINT: COLOR 14,0
20250 PRINT"      ---";SPC(22);"FFFF  OO  RRR  DDD"
20260 PRINT"    +    +";SPC(21);"F    O  O R  R D  D
20270 PRINT"   +      +";SPC(20);"FFF  O  O RRR  D  D
20280 PRINT"  +        +";SPC(19);"F     OO  R  R DDD"
20290 PRINT" +   QQQQ   +"
20300 PRINT" +   !  !   +"
20310 PRINT" +   !  !   +"
20320 PRINT"  +  !  !  +"
20330 PRINT"   + !  ! +"
20340 PRINT"    +!  !+"
20350 PRINT"     +--+"
20360 PRINT"     !//!    FORD HAS A BETTER IDEA."
20370 PRINT"     !//!"
20380 PRINT"     !//!";SPC(23);"(FORD OF PARMA, OHIO)"
20390 PRINT"     -++-"
20400 PRINT"      --"
20410 PRINT
20420 COLOR 10,0: PRINT STRING$(60,"*"): RETURN
20430 PRINT STRING$(18,"*");" STAR TREK IS BROUGHT TO YOU BY : ";STRING$(22,"*"):RETURN
20440 COLOR 1,7: PRINT: PRINT
20460 PRINT"             IIIIIIIIII   BBBBB     MM     MM"
20470 PRINT"                 II       BB   B    MMM   MMM"
20480 PRINT"                 II       BB   B    MMMM MMMM"
20490 PRINT"                 II       BBBBB     MM MMM MM"
20500 PRINT"                 II       BB   B    MM  M  MM"
20510 PRINT"                 II       BB    B   MM     MM"
20520 PRINT"             IIIIIIIIII   BBBBBB    MM     MM"
20540 PRINT :PRINT SPACE$(45);"NOT JUST DATA -":PRINT SPACE$(55);"BUT REALITY":PRINT : COLOR 10,0: PRINT :PRINT : PRINT STRING$(73,"*"):RETURN
24330 PRINT"THE ORGANIAN PEACE TREATY BETWEEN THE UNITED FEDERATION OF PLANETS AND THE"
24350 PRINT"KLINGON EMPIRE HAS COLLAPSED AND THE FEDERATION IS BEING ATTACKED BY A DEADLY"
24360 PRINT"KLINGON INVASION FLEET.  AS CAPTAIN OF THE STARSHIP U.S.S. ENTERPRISE, IT IS"
24380 PRINT"YOUR MISSION TO SEEK OUT AND DESTROY THIS INVASION FORCE OF KLINGON BATTLE"
24390 PRINT"CRUISERS.  YOU WILL HAVE AN INITIAL ALLOTMENT OF TIME TO COMPLETE YOUR MISSION."
24410 PRINT"AS THE MISSION PROCEEDS, YOU MAY BE GIVEN MORE TIME."
24420 PRINT: PRINT "STRIKE ENTER TO RECEIVE YOUR COMMISSION": INPUT ACK$
24430 RETURN
32000 REM VISUAL
32001 LOCATE 13,16: PRINT SPC(29);: LOCATE 13,1: INPUT "WHICH DIRECTION";Z
32002 IF Z<0.01 OR Z>12 THEN GOSUB 14130 ELSE 32020
32005 J3=0: RETURN
32020 T1=0.05:P=(K3+4*C3)/48: IF P<0.05 THEN P=0.05
32030 IF P> RND( 1) THEN GOSUB 790
32040 IF A2<>0 THEN RETURN
32050 GOSUB 3790: J3=1: IF A2<>0 THEN RETURN
32080 D5= INT( (Z/12)*8+1.5): IF D5>8 THEN D5=1
32085 FOR I=1 TO 5: FOR J=1 TO 5:V$(I,J)=" ": NEXT J: NEXT I:N=0
32087 V$(3,3)= LEFT$( S5$,1)
32090 ON D5 GOTO 32100,32130,32150,32170,32190,32220,32260,32300
32100 I=S6-2:J=S7-2:V$(1,1)=Q$: IF (J>0) AND (I>0) THEN V$(1,1)=Q$(I,J)
32110 I=S6-1:J=S7-1:V$(2,2)=Q$: IF (I>0) AND (J>0) THEN V$(2,2)=Q$(I,J)
32120 N=N+1: IF N=3 THEN 32350
32125 I=S6-2:V$(1,2)=Q$: IF (I>0) AND (J>0) THEN V$(1,2)=Q$(I,J)
32130 I=S6-2:V$(1,3)=Q$: IF I>0 THEN V$(1,3)=Q$(I,S7)
32135 I=S6-1:V$(2,3)=Q$: IF I>0 THEN V$(2,3)=Q$(I,S7)
32140 N=N+1: IF N=3 THEN 32350
32145 I=S6-2:J=S7+1:V$(1,4)=Q$: IF (I>0) AND (J<11) THEN V$(1,4)=Q$(I,J)
32150 I=S6-2:J=S7+2:V$(1,5)=Q$: IF (I>0) AND (J<11) THEN V$(1,5)=Q$(I,J)
32155 I=S6-1:J=S7+1:V$(2,4)=Q$: IF (I>0) AND (J<11) THEN V$(2,4)=Q$(I,J)
32160 N=N+1: IF N=3 THEN 32350
32165 J=S7+2:V$(2,5)=Q$: IF (I>0) AND (J<11) THEN V$(2,5)=Q$(I,J)
32170 J=S7+2:V$(3,5)=Q$: IF J<11 THEN V$(3,5)=Q$(S6,J)
32175 J=S7+1:V$(3,4)=Q$: IF J<11 THEN V$(3,4)=Q$(S6,J)
32180 N=N+1: IF N=3 THEN 32350
32185 I=S6+1:J=S7+2:V$(4,5)=Q$: IF (I<11) AND (J<11) THEN V$(4,5)=Q$(I,J)
32190 I=S6+2:J=S7+2:V$(5,5)=Q$: IF (I<11) AND (J<11) THEN V$(5,5)=Q$(I,J)
32195 I=S6+1:J=S7+1:V$(4,4)=Q$: IF (I<11) AND (J<11) THEN V$(4,4)=Q$(I,J)
32200 N=N+1: IF N=3 THEN 32350
32210 I=S6+2:V$(5,4)=Q$: IF (I<11) AND (J<11) THEN V$(5,4)=Q$(I,J)
32220 I=S6+2:V$(5,3)=Q$: IF I<11 THEN V$(5,3)=Q$(I,S7)
32230 I=S6+1:V$(4,3)=Q$: IF I<11 THEN V$(4,3)=Q$(I,S7)
32240 N=N+1: IF N=3 THEN 32350
32250 I=S6+2:J=S7-1:V$(5,2)=Q$: IF (I<11) AND (J>0) THEN V$(5,2)=Q$(I,J)
32260 I=S6+2:J=S7-2:V$(5,1)=Q$: IF (I<11) AND (J>0) THEN V$(5,1)=Q$(I,J)
32270 I=S6+1:J=S7-1:V$(4,2)=Q$: IF (I<11) AND (J>0) THEN V$(4,2)=Q$(I,J)
32280 N=N+1: IF N=3 THEN 32350
32290 J=S7-2:V$(4,1)=Q$: IF (I<11) AND (J>0) THEN V$(4,1)=Q$(I,J)
32300 J=S7-2:V$(3,1)=Q$: IF J>0 THEN V$(3,1)=Q$(S6,J)
32310 J=S7-1:V$(3,2)=Q$: IF J>0 THEN V$(3,2)=Q$(S6,J)
32320 N=N+1: IF N=3 THEN 32350
32330 I=S6-1:J=S7-2:V$(2,1)=Q$: IF (I>0) AND (J>0) THEN V$(2,1)=Q$(I,J)
32340 GOTO 32100
32350 FOR I=1 TO 5
32360 IF (V$(I,1)=" ") AND (V$(I,3)=" ") AND (V$(I,5)=" ") THEN 32390
32380 FOR J=1 TO 5: IF V$(I,J)<>"?" AND V$(I,J)<>" " THEN LOCATE I+S6-2,2*(S7+J)-3: PRINT V$(I,J);
32382 NEXT J
32390 NEXT I: RETURN
40000 REM GIVE THE USER SOMETHING TO LOOK AT DURING STARTUP
40010 LOCATE 14,1: COLOR 7,0
40020 PRINT SPC(48);"____________    ______*______"
40030 PRINT SPC(48);"\___________]   \___  ______/"
40040 PRINT SPC(48);"       | |         / /"
40050 PRINT SPC(48);"    ___| |_______/ /__"
40060 PRINT SPC(48);"     \________________}":PRINT
40070 PRINT SPC(45);"THE USS ENTERPRISE --- NCC-1701"
40080 COLOR 10,0: RETURN
40100 IF J5>0 AND J5<11 AND J6>0 AND J6 <11 THEN GOTO 40105 ELSE GOTO 40110
40105 JJ6=3+2*J6: LOCATE 1+J5,JJ6: IF JJ6 MOD 2=1 THEN PRINT "."; ELSE PRINT " ";
40110 RETURN
40200 IF A5>0 AND A5<11 AND A6>0 AND A6<11 THEN GOTO 40202 ELSE GOTO 40210
40202 AA6=3+2*CINT(A6): LOCATE 1+A5,AA6: IF AA6 MOD 2=1 THEN PRINT "."; ELSE PRINT " ";
40210 RETURN
40300 GOSUB 40320: IF CINT(3+2*CINT(YOLD)) MOD 2=1 THEN PRINT "."; ELSE PRINT " ": LOCATE 1+XNEW,3+2*INT(YNEW): PRINT "+";
40310 RETURN
40320 IF XOLD>0 AND XOLD<11 AND YOLD>0 AND YOLD<11 THEN LOCATE 1+XOLD,3+2*CINT(YOLD)
40321 RETURN
40330 PRINT ".";:COLOR 7,0: LOCATE 1+X1,3+2*Y1:IF S5$="ENTERPRISE" THEN PRINT "E"; ELSE IF S5$="FAERIE QUEENE" THEN PRINT "F"; ELSE PRINT "?";
40331 RETURN
41000 REM CLEAR SHORT RANGE SCAN
42000 REM SR SCAN FRAMEWORK
42001 LOCATE 1,1: PRINT "    1 2 3 4 5 6 7 8 9 10";
42010 FOR I0=1 TO 10: LOCATE 1+I0,1: IF I0<10 THEN PRINT " ";
42020 COLOR 10,0: PRINT I0;SPC(20)
42030 NEXT I0: RETURN
```
{% endraw %}

## PARINT.ASM

{% raw %}
```
comment *  parint.com (c) 1984 by David G. Hunter.
	this program may be freely copied but not be sold for profit.
	parint.com detects parity errors, logs them on the printer if
	possible, beeps, and returns to program execution.  the system
	does not halt when this program is resident.  parity error 
	checking is terminated after the first error is detected.  The 
	error message includes the time of the event.  If the printer 
	is not available, the errors are logged to the screen.
	(Published in PC Magazine, January 22, 1985 issue, pages309-315).
	(Corrections by Ken Kriesel)
*
;****************addresses of interrupt handlers *******************
book	segment at 0h	;this is where the interrupt address book is
	org	2h*4
int_2	label	dword	;address of nmi handler
book	ends

;***************beginning of parint instructions *******************
cseg 	segment
	assume cs:cseg
	org 100h
start:	jmp	newvec	;install new nmi handler in ram
;***************nmi handler*****************************************
newint	proc	near	;new interrupt handler
	assume ds:cseg, es:cseg
	sti	;this flag was cleared when interrupt was issued
	jmp 	go	;jump over more data
;**********************data****************************
getout:	nop
instruc	db	0EAh	;this is the jump-immediate instruction!
			;it jumps to the address stored in oldint.
oldint	dd		;address of old interrupt 2 routine
device1	dw	0004	;printer
device2	dw	0001	;standard output device
par1	db	0Dh,0Ah,"Parity Error: Main Board     ",07h,0Dh,0Ah
par2	db	0Dh,0Ah,"Parity Error: Expansion Board",07h,0Dh,0Ah
time	db	"    TIME:  "
hour	dw	"00"
	db	":"
min	dw	"00"
	db	"                ",0Dh,0Ah
paroff	db	"PARITY CHECKING NOW DISABLED   ",0Dh,0Ah,0Ah
go:	push 	cx
	push 	ds
	pushf
	push	dx
	push	bx
	push	ax
	pushf
	mov	al,00h
	out	0A0h, al	;turn off parity checking for now
	xor	cx,cx		;cx=error flag: cx=1 if parity ok
	in	al, 62h		;get data in port c
	;	find origin of nmi
	test	al, 40h
	jz 	mother
	mov 	dx, offset par2	;if bit 6 set, error is on expansion bd
	jmp	out		;print message and exit
mother:	test 	al,80h
	jz 	other
	mov	dx, offset par1	;if bit 7 set, error is on main board
	jmp	out		;print message and exit
other:	or	cx, 1h		;if neither bit is set, no parity error occurred,
	mov	al, 80h		;so set parity ok flag
	out 	0A0h, al	;turn parity checking back on.
	jmp	noprt	;don't print message if no parity error
;	print error message and exit.  Type of exit depends on type of error--
out:	mov	ax,cs		;extablish proper data segment to
	mov	ds,ax		;allow access to messages
	call	whatime		;get time of error
	mov	bx, device1
	cmp	bx,0004		;if output is to printer, make sure it's ready
	jne	f1
	call	testprt
f1:	call	print
	mov	dx, offset time ;"time of error" message
	call	print
	mov	dx, offset paroff
	call	print
noprt:	popf
	pop	ax
	pop	bx
	pop	dx
	popf
	pop	ds
	test	cx, 1h		;special exit if parity ok
	jnz	oth
	pop	cx
	iret			;message printed; let execution continue
;	if no parity error, give control to pre-existing nmi handler
; this is done by restoring ds and jumping to the instruction that
; specifies the address of the old interrupt routine.  This unusual 
; exit is necessary because otherwise, once ds was restored, the
; address of the old interrupt routine would not be accessible.
oth:	cli
	pop	cx
	jmp	getout
newint	endp
;********************subroutines************************8
testprt	proc	near
	push	dx
	push	ax
	xor	dx,dx		;printer # 0
	mov	ah,2
	int	17h		;read printer status
	test	ah,00101001b	;error bits
	jz	aok
	mov	bx, device2	;if not ok, try other device
aok:	pop	ax
	pop	dx
	ret
testprt endp
print	proc	near	;output to file named in bx; if error try another file
	push	cx
	mov	cx,34	;34 characters to print
	mov	ah,40h	;dos function call
	int	21h
	pop	cx
	ret
print	endp
whatime	proc	near	;what time is it?  Put result in hour/min
	push	cx
	push	dx
	mov	ah,2Ch	;dos time
	int	21h
	mov	al,ch	;hours (0-23)
	call	convt	;put tens in ah, ones in al
	mov	hour,"00"
	add	hour,ax
	mov	al,cl
	call	convt	;do same for minutes (0-59)
	mov	min,"00"
	add	min,ax
	pop	dx
	pop	cx
	ret
whatime	endp
convt	proc	near	;convert number (100) to ascii. number is in al
			;result: tens in ah, ones in al.
	xor	ah,ah	;input is less than 100 anyway, so clear it
	push	cx
	mov	cl,10
	div	cl	;divide ax by 10
	pop	cx
little:	ret
convt	endp
;*******************install nmi handler*********************8
newvec	proc	near
	jmp	past
loaded	db	0Dh,0Ah,"PARITY ERROR INTERCEPTOR V2.00 BY DAVID HUNTER IS NOW"
	DB	" INSTALLED",0DH,0AH,"$"
past:	mov	dx, offset loaded
	mov	ah,0
	int	21h
	assume	ds:book	;interrupt address book area
	push	ds	;save old ds for future use
	mov	ax,book
	mov	ds,ax
	mov	al, 00h
	out	0A0h, al	;turn off parity checking
	mov	ax,int_2	;get the address
	mov	oldint,ax	;save it for some future use
	mov	ax,int_2[2]	;second part of double word
	mov	oldint[2],ax
	mov	int_2, offset newint	;now load the new address
	mov	int_2[2],cs		;cs is ds in com program
	mov	al, 80h
	out	0A0h, al		;turn parity checking back on
	mov	dx, offset newvec	;leave new interrupt routine resident
	int 	27h			;don't need "newvec" or beyond
newvec	endp
cseg	ends
	end	start
```
{% endraw %}

## PERTCHRT.BAS

{% raw %}
```bas
10 REM program:  Enhanced Pert/CPM     Source:  Byte May 1982 pp. 469ff.
20 REM Function: Pertcharting          Date:    5/1/82
30 REM Version:  1.1                   Author   T.V. Bonoma
40 REM
42 SCREEN 0,1,0,0:WIDTH 80
45 DEFDBL M,X,P
47 KEY OFF
50 CLEAR 5000: CLS
60 COLOR 5,0,5:LOCATE 1,23:PRINT "Pert Critical Path Scheduling"
70 LOCATE 3,23:COLOR 7:PRINT "Original By S. M. Zimmerman and L.M. Conrad"
80 LOCATE 5,23: COLOR 9:PRINT "Modified and adapted for the IBM PC by"
90 LOCATE 7,23:COLOR 15:PRINT "Thomas V. Bonoma  May, 1982"
92 LOCATE 9,23:PRINT "Extended to include manpower requirement projections and"
94 PRINT "time requirements given a labor schedule."
100 COLOR 7,0,0:PRINT :PRINT "Note:  Beginning Events will be sorted numerically"
105 LOCATE 12,1
110 FOR I=1 TO 16:FOR J=1 TO 15:Q=J:IF Q>15 THEN Q=0
115 COLOR Q:PRINT CHR$(1);:NEXT J:NEXT I
120 DIM A$(200,2),A(200,12),SV(12),W(200),X(200),S(200,5),S$(200,2)
125 DIM REACHED(200),TI(200),LABOR(200,2),PATH$(5)
130 CLS:LOCATE 5,25:COLOR 15,0,0:PRINT "Menu for input choices"
135 FOR HOLDIT=1 TO 700:NEXT HOLDIT
140 COLOR 7,0,8:LOCATE 7,20:PRINT "K - Keyboard"
150 COLOR 3:LOCATE 8,20:PRINT "D - Disk File"
160 COLOR 11:LOCATE 9,20:PRINT "R - Read Statements Already in Program"
170 LOCATE 14,40: COLOR 15,0,0:INPUT "What is your selection  ";IO$
175 IF IO$<>"D" AND IO$<>"R" AND IO$<>"K" AND IO$<>"d" AND IO$<>"r" AND IO$<>"k"THEN 130
180 COLOR 7,0,0: IF IO$<>"K" AND IO$<>"k" THEN 360
190 CLS:LOCATE 5,5:INPUT "How many different tasks do you have ";M%:EE=0
200 COLOR 4,0,9:PRINT:PRINT "OK...Enter them one at a time.  For each, enter"
210 PRINT "an activity code, a description, a beginning and ending event"
220 PRINT "number; and optimistic, likely, and pessimistic estimates,"
225 PRINT "and the average manpower level for the task."
230 COLOR 2:PRINT :PRINT "Hit any key to enter data:  ":COLOR 7,0,0
240 TR$=INPUT$(1)
250 CLS:COLOR 3,0,0:LOCATE 1,35:PRINT "DATA ENTRY ROUTINE"
260 COLOR 15,0,0:LOCATE 3,5:PRINT "Code":LOCATE 3,10:PRINT "Descrip.":LOCATE 3,25:PRINT "Begin?":LOCATE 3,35:PRINT "End?":LOCATE 3,42:PRINT "Optimistic":LOCATE 3,55:PRINT "Likely?":LOCATE 3,64:PRINT "Pessim.":LOCATE 3,74:PRINT "Men"
270 X=4:COLOR 7,0,0
280 FOR I=1 TO M%
290 LOCATE X,7:INPUT "",A$(I,1):LOCATE X,11:INPUT "",A$(I,2):LOCATE X,27:INPUT "",A(I,1):LOCATE X,36:INPUT "",A(I,2):LOCATE X,47:INPUT "",A(I,3):LOCATE X,57:INPUT "",A(I,4):LOCATE X,69:INPUT "",A(I,5):LOCATE X,73:INPUT "",A(I,12)
300 X=X+1
340 NEXT I
350 GOTO 460
360 IF IO$<>"D" AND IO$<>"d" THEN 470
370 CLS:LOCATE 5,30:COLOR 14,0,8:PRINT "Disk Input Routine"
375 ON ERROR GOTO 15000
380 COLOR 7,0,8:PRINT :LINE INPUT "Name of disk file, e.g., B:xxxxxxxx.yyy ";B$:OPEN "i",1,B$
400 INPUT #1,M%,EE
410 FOR I=1 TO M%
420 INPUT #1, A$(I,1), A$(I,2),A(I,1),A(I,2),A(I,3),A(I,4),A(I,5),A(I,12)
430 IF A$(I,1)="END" OR A$(I,1)="end" THEN 540
440 NEXT I
450 CLOSE #1
460 GOTO 530
470 IF IO$<>"R" AND IO$<>"r" THEN 130
475 CLS: PRINT "Reading Data from Program...Please Wait..."
480 READ M%,EE
490 FOR I=1 TO M%
500 READ A$(I,1), A$(I,2),A(I,1),A(I,2),A(I,3),A(I,4),A(I,5),A(I,12)
510 IF A$(I,1)="END" OR A$(I,1)="end" THEN 530
520 NEXT I
530 REM verify the data which were entered.
540 M=M%: TP=0:FOR I=1 TO M:IF A(I,2)>TP THEN TP=A(I,2)
550 NEXT I:EE=TP
560 FOR I=1 TO M-1
570 FOR J=I+1 TO M
580 IF A(I,1)<=A(J,1) THEN 610
590 FOR K=1 TO 12:SV(K)=A(I,K):A(I,K)=A(J,K):A(J,K)=SV(K):NEXT K
600 FOR K=1 TO 2:SV$(K)=A$(I,K):A$(I,K)=A$(J,K):A$(J,K)=SV$(K):NEXT K
610 NEXT J:NEXT I
620 CLS
630 XX=5:COLOR 14,0,0:PRINT TAB(25);"Verification of Input":PRINT :COLOR 7,0,0
640 Z1$="Code Description   Expected  Early   Early    Last    Last    Slack"
650 Z2$="                    Time     Start   Finish   Start   Finish   Time"
660 Z3$="Code      Description          Begin    End    Optimist  Likely  Pess.  Men"
670 Z4$="                               Event   Event     Time     Time   Time  Ave."
680 PRINT "No. ";Z3$
690 PRINT "    ";Z4$
700 K=0
710 C4$="### "
720 FOR I=1 TO M%
730 PRINT USING C4$;I;
740 C1$="  ####  "
750 C2$="\            \":C3$=" ####.## "
760 PRINT USING C2$;A$(I,1),A$(I,2);
770 FOR J=1 TO 2
780 PRINT USING C1$;A(I,J);:NEXT J
790 FOR J=3 TO 5
800 PRINT USING C3$;A(I,J);:NEXT J:PRINT USING C4$;A(I,12);
810 K=K+1: IF K>=20 THEN MSG$="Enter to Page":LGTH=1:ANSWER$="":GOSUB 10000
820 PRINT: NEXT I
830 COLOR 7:MSG$="Please input a -2 to add more, -1 to continue or number (e.g., 03) to change ":LGTH=2:GOSUB 10000:ANSWER=VAL(ANSWER$):L=ANSWER:IF L=-1 THEN 905
840 IF L<>-2 THEN 860
850 L=M%+1:M%=L:N%=N%+1:XCHECK=1:GOTO 860
860 IF L>M% THEN GOTO 830:ELSE GOSUB 20000:IF ABORT GOTO 830
870 INPUT "New Code Name/Letter or END to ABORT";A$(L,1)
880 IF A$(L,1)="END" THEN GOSUB 22000:GOTO 830
890 INPUT "New Description  ";A$(L,2):INPUT "New Beginning Event Number  ";A(L,1)
892 INPUT "New Ending Event Number"; A(L,2):INPUT "New Optimistic End  ";A(L,3)
894 INPUT "New Likely End ";A(L,4):INPUT "New Pess. End  ";A(L,5)
900 GOTO 620
905 MSG$="Want hard copy of your data ":LGTH=1:GOSUB 10000:P$=ANSWER$:IF P$<>"Y" AND P$<>"y" THEN 1040
910 MSG$="Input a Title, Then Hold Space Bar Till Printer Begins.":LGTH=40:GOSUB 10000:T$=ANSWER$:LPRINT "Title"  ";t$
920 LPRINT "date:  ";DATE$
930 LPRINT "NO ";Z3$
940 LPRINT "    ";Z4$
950 FOR I=1 TO M%
960 LPRINT USING C4$;I;
970 LPRINT USING C2$;A$(I,1);A$(I,2);
980 FOR J=1 TO 2
990 LPRINT USING C1$;A(I,J);:NEXT J
1000 FOR J=3 TO 5
1010 LPRINT USING C3$;A(I,J);:NEXT J
1020 LPRINT " "
1030 NEXT I
1040 PRINT "To compute results, simply wait...              ";
1050 FOR I=1 TO M%
1060 A(I,6)=(A(I,3)+4*A(I,4)+A(I,5))/6
1070 IF A(I,1)=1 THEN A(I,7)=0:A(I,8)=A(I,6):GOTO 1110
1080 MAX=0!
1090 FOR J=1 TO M%
1092 IF A(J,2)<>A(I,1)THEN 1098
1094 IF A(J,8)>MAX THEN MAX=A(J,8)
1096 A(I,7)=MAX
1098 NEXT J
1100 A(I,8)=A(I,7)+A(I,6)
1110 NEXT I
1120 REM backward pass?
1130 XM=0!
1140 FOR I=M% TO 1 STEP -1
1150 IF A(I,2)<>EE THEN 1170
1160 IF XM<A(I,8) THEN XM=A(I,8)
1170 NEXT I
1180 FOR I=M% TO 1 STEP -1
1190 IF A(I,2)=EE THEN A(I,10)=XM:GOTO 1260
1200 MIM=999999!
1210 FOR J=M% TO 1 STEP -1
1220 IF A(I,2)<>A(J,1) THEN 1250
1230 IF A(J,9)<MIM THEN MIM=A(J,9)
1240 A(I,10)=MIM
1250 NEXT J
1260 A(I,9)=A(I,10)-A(I,6)
1270 NEXT I
1280 REM slack variable calculations
1290 FOR I=1 TO M%
1300 A(I,11)=A(I,10)-A(I,8)
1310 NEXT I
1320 CLS:K=0:REM print the output
1325 COLOR 14,0,0:PRINT TAB(35);"Results":PRINT :COLOR 7,0,0
1330 PRINT "Code       Description        Expected  Early  Early    Last    Last  Slack"
1340 PRINT "                               Time     Start  Finish   Start  Finish  Time"
1350 C5$="  ###.# "
1360 FOR I=1 TO M%
1370 IF A(I,11)=0 THEN COLOR 4 ELSE COLOR 7
1380 PRINT USING C2$;A$(I,1);A$(I,2);
1390 FOR J=6 TO 11
1400 PRINT USING C5$;A(I,J);:NEXT J
1410 PRINT :K=K+1:IF K=20 THEN MSG$="Enter to Page  ":LGTH=1:GOSUB 10000:ANSWER$=DU$:K=0
1420 NEXT I
1430 MSG$="Hard Copy of Results (Y/N) ":LGTH=1:GOSUB 10000:P$=ANSWER$:IF P$<>"Y"AND P$<>"y" THEN 1490
1440 LPRINT " ":LPRINT Z1$:LPRINT Z2$
1450 FOR I=1 TO M%
1460 LPRINT A$(I,1);"   ";:LPRINT USING C2$;A$(I,2);
1470 FOR J=6 TO 11:LPRINT USING C5$;A(I,J);:NEXT J
1480 LPRINT "    ":NEXT I
1490 CLS:COLOR 15,0,0:LOCATE 5,30:PRINT "OUTPUT MENU":COLOR 7,0,0
1500 COLOR 4:LOCATE 7,20:PRINT "C--Critical Path and Time": COLOR 6
1510 LOCATE 8,20:PRINT "D--Disk":COLOR 13
1520 LOCATE 9,20:PRINT "E--End":COLOR 7
1530 LOCATE 10,20:PRINT "R--Recycle"
1540 LOCATE 20,35:COLOR 15,0,0:INPUT "Choice, please...";OP$:IF OP$="R" OR OP$="r" THEN 530
1550 IF OP$<>"C" AND OP$<>"c" THEN 1720
1560 REM identification of critical path and costs
1570 CO=0:PATH$=" ":SI=0
1580 FOR I=1 TO M%:IF A(I,11)>0.000001 THEN 1600
1590 CO=CO+A(I,6):PATH$=PATH$+"--> "+A$(I,1):SI=SI+((A(I,3)-A(I,5))/6)^2
1600 NEXT I:C6$="###,###,###.##":SI=SQR(SI)
1610 CLS:LOCATE 5,30:COLOR 4,0,0:PRINT "CRITICAL PATH":PRINT PATH$:PRINT :COLOR 7,0,0
1620 PRINT "Time of Critical Path ":PRINT USING C6$;CO:INPUT "Scheduled Project Time (use same time units as data) ";ST:Z=(ST-CO)/SI:XX=0
1630 BB$="Probability of being completed on time ":
1640 A=0.4361836:B=-0.1201676:C=0.937298:D=(2.718281828#^(-Z^2/2))*(2*3.1415926#)^(-0.5):E=(1+0.3326*Z)^(-1):P=1#-D*(A+(B+C*E)*E)*E
1650 COLOR 12,0,4:PRINT USING "z= ##.###     ";Z;:PRINT BB$;:PRINT USING "#.###";P:COLOR  7,0,3
1680 MSG$="Hard Copy (Y/N) ":LGTH=1:GOSUB 10000: P$=ANSWER$: IF P$<>"Y" AND P$<>"y" THEN 1490
1690 LPRINT " ": LPRINT "Scheduled Project Time is ";ST
1700 LPRINT "Time of critical path ":LPRINT USING C6$;CO: IF XX=0 THEN LPRINT "z= ";Z;"    ";BB;P:GOTO 1490
1710 IF OP$="e" OR OP$="E" THEN END
1720 IF OP$<>"D" AND OP$<>"d" THEN 1770
1730 LINE INPUT "Name of disk:file ";X$:OPEN "O",1,X$
1740 PRINT #1,M%,EE
1750 FOR I=1 TO M%:PRINT #1,CHR$(34);A$(I,1);CHR$(34);",";CHR$(34);A$(I,2); CHR$(34);A(I,1);A(I,2);A(I,3);A(I,4);A(I,5):NEXT I
1760 CLOSE #1:GOTO 1490
1770 SCREEN 0,0,0:WIDTH 80:COLOR 9,0,0:PRINT "Ending...";: COLOR 7,0,0:FOR I=1 TO 1000:NEXT I:KEY ON: END
1775 DATA 18,9
1780 DATA "A","Acct. Papers",1,2,1,2,3,1
1790 DATA "Z","Permits",2,7,4,5,8,1
1800 DATA "B","Shop Bankers",1,3,2,4,6,1
1810 DATA "C","Shop Real Est.",1,4,2,13,17,1
1820 DATA "D","Market Study",2,3,2,4,5,2
1830 DATA "G","Contractor",2,5,1.4,2.2,6.7,1
1840 DATA "H","Art Plans",3,5,2,4,6,1
1850 DATA "E","Cost Study",3,4,3,4,5,1
1860 DATA "I","Land",4,5,8,11,13,1
1870 DATA "J","Material",5,6,2,3,4,1
1880 DATA "K","Plans",5,7,2,5,12,2
1890 DATA "L","Survey",5,8,1,2,4,2
1900 DATA "M","Buy Matl #1",6,8,2,3,4,1
1910 DATA "O","Buy Matl #2",6,9,1,2,5,1
1920 DATA "N","Layout",7,8,9,11,12,2
1930 DATA "P","Foundation",8,9,1,3,6,4
1940 DATA "Q","Hire crew 2",7,9,1,2,3,1
1950 DATA "F","Insurance",2,6,.4,1.3,1.5,1
10000 REM this subroutine saves the cursor postion as once (colum or y) and
10010 REM was (row or x), locates the cursor on the 25th (status) line, gets
10020 REM an input value, (string only), and returns the cursor to where it
10030 REM once was.
10040 REM input variables:  msg$; output: answer$
10050 REM                   lgth of desired answer
10060 REM store cursor position
10070 ONCE=CSRLIN
10080 WAS=POS(0)
10090 ANSWER$=""
10100 REM make sure softkeys are off, locate cursor on 25th line
10110 KEY OFF
10120 LOCATE 25,3
10130 REM PRINT the message user requests and get an input
10140 PRINT MSG$;:ANSWER$=INPUT$(LGTH)
10150 REM clear off line for future use
10160 LOCATE 25,1:PRINT SPC(79);
10170 REM restore the cursor to where it was
10180 LOCATE ONCE,WAS
10190 RETURN
10200 REM resume here
15000 REM this subroutine does some error-checking, for instance, for the open statement in line 390.  it requires an onerror goto 15000 statement for invocation, and is turned off with an onerror goto 0 statement
15030 MISTEAK=0:WHEREAT=0
15040 MISTEAK=ERR:WHEREAT=ERL
15050 IF MISTEAK=55 THEN CLOSE: RESUME
15060 IF MISTEAK=53 THEN PRINT "can't find that file--Catalog: ":COLOR 3: PRINT "A:":FILES "A:*.*":COLOR 9:PRINT "B: ":FILES "B:*.*":PRINT :PRINT "wait...":FOR I=1 TO 7000:NEXT I:RESUME 130
15070 IF MISTEAK=61 THEN PRINT "Disk is full--please get another":FOR I=1 TO 3000:NEXT I:RESUME 1730
15080 IF MISTEAK=64 THEN PRINT "that's not a good file name--use 'B:xxxxxxxx.yyy'":FOR I-1 TO 3000:NEXT I:RESUME 130
15090 IF MISTEAK=68 THEN PRINT "That disk doesn't exist--use a: or B: ":FOR I=1 TO 3000:NEXT I:RESUME 130
15100 IF MISTEAK=70 THEN PRINT "the disk is write-protected--can't use it":FOR I=1 TO 3000:NEXT I:RESUME 130
15110 IF MISTEAK=71 THEN PRINT "close the disk door":FOR I=1 TO 3000:NEXT I:RESUME 130
15120 IF MISTEAK=72 THEN PRINT "i think the disk is bad":TRIES=TRIES+1:IF TRIES<3 THEN RESUME WHEREAT:ELSE PRINT :ENDING..CHECK DISK":FOR i=1 to 3000:NEXT i:goto 1770
15130 IF MISTEAK=67 THEN PRINT "you have too many files open at one time":FOR I=1 TO 3000:NEXT I:RESUME 130
15140 ON ERROR GOTO 0:RESUME
20000 REM this subroutine switches the active and visual pages in screen 0
20010 REM mode to page 1 thus allowing the programmer to put "help" material,
20020 REM ancillary input and output, or other materials, on a "clean slate."
20030 ONCE = CSRLIN:WAS=POS(0)
20040 ABORT=0
20050 SCREEN 0,1,1,1:REM color burst, apage=1,vpage=1
20060 CLS
20070 KEY (1) ON
20080 ON KEY(1)GOSUB 22000
20090 LOCATE 25,1:COLOR 4:PRINT "hit <F1> key before entering to abort--I'll wait before going on";
20100 LOCATE 5,35:COLOR 3:PRINT "change routine":COLOR 9
20110 COLOR 9,8,0
20120 FOR I=1 TO 500:NEXT I
20130 RETURN
22000 CLS:SCREEN 0,1,0,0
22010 ABORT=1
22020 IF ABORT AND XCHECK THEN M%=M%-1:N%=N%-1:XCHECK=0
22030 LOCATE ONCE,WAS
22040 RETURN
22050 GOTO 20070
30000 GOTO 20070
30010 RETURN
```
{% endraw %}

## PGBRK.BAS

{% raw %}
```bas
10 REM program to create pgbrk.beg and pgbrk.end
20 SKIPLINES%=12: REM or however many you like so long as it's less than the length of the page
30 OPEN "pgbrk.beg" FOR OUTPUT AS 1
40 PRINT #1,USING "\ \";CHR$(27)+"N"+CHR$(SKIPLINES%);
50 CLOSE 1:OPEN "pgbrk.end" FOR OUTPUT AS 1
60 PRINT #1,USING "\ \";CHR$(140)+CHR$(27)+"@";
70 CLOSE 1:END
```
{% endraw %}

## RED.ASM

{% raw %}
```
RED segment para public 'code'
	assume cs:red, ds:red, es:red, ss:nothing
	org 100h		;.com format
begin:	
	jmp	code_start	; jump around data declarations
declare:	; messages, storage areas, equates
	copyright	db	'REDirect (C) 1985, Dickinson Associates Inc.'
			db	13,10,'$'
	path_file_len	equ	77  ;length=1, path=63, filename=12, 0=1
	source_file	db	path_file_len dup (0)
	target_path	db	path_file_len dup (0)
	source_end	dw	0
	target_end	dw	0
	pc_dos_ver	db	0
	valid_in	db	'abcdefghijklmnopqrstuvwxyz,;=',9
	valid_out	db	'ABCDEFGHIJKLMNOPQRSTUVWXYZ',4 DUP(32)
	valid_num	equ	$ - valid_out + 1
	err_flag	db	0
	err_head	db	10,13,'REDirect Error - $'
	bad_version	db	'Incorrect PC-DOS Version$'
	no_parms	db	'Correct Syntax is:',13,10,10
	db	'RED [d:][source_path]source_filename[.ext] [d:][target_path]$'
	file_not_found	db	'File not Found$'
	path_not_found	db	'Target Path not Found$'
	pc_dos_2_patch	db	13,10,'or $'
	drives_conflict	db	'Source and Target Disk Drives Conflict$'
	undefined_err	db	'Undefined Error: PC-DOS Function 56H$'
	err_tail	db	10,10,13,' . . . Aborting',10,13,13,'$'
	good_msg	db	' . . REDirected to . . $'
	bad_msg1	db	' . . Not REDirected . . $'
	bad_msg2	db	' . . already exists$'
	end_line	db	10,13,'$'
code_start:	;parse command line into source and target parameters
	mov	dx,offset copyright	;display copyright notice
	mov	ah,9h
	int	21h
	mov	ah,30h			; get pc-dos version
	int	21h
	mov	pc_dos_ver,al
	mov	si,80h			;psp parameter byte count pointer
	mov	cl,[si]			;move byte count to cl
	xor	ch,ch			;zero ch
	jcxz	no_parms_passed		;if cx is zero, there are no parameters
	mov	dx,cx			;save byte count in dx
	inc	si			;point to parameter area
	mov	di,si			;copy si to di for cleanup routine
	cld				;set direction flag to forward
clean_parms:	;change valid delimiters to blanks, lower to upper case
	lodsb				;load each character to al
	push	di			;save di on stack
	mov	di,offset valid_in	;point to table of valid inputs
	push	cx			;save cx on stack
	mov	cx,valid_num		;set CX TO NUMBER OF INPUTS TO LOOK FOR
repne	scasb				;see if any are in al
	jcxz	clean_end		;if not, change nothing
	mov	bx,valid_num		;set up bx to point to valid output
	sub	bx,cx			;this will leave bx one off
	mov	al,valid_out [bx-1]	;load the valid output to al
clean_end:
	pop	cx			;restore cx
	pop	di			;restore di
	stosb				;store modified al back to psp
loop	clean_parms			;loop until cx is zero
	mov	cx,dx			;restore number of bytes in psp to cx
	mov	dx,2			;set dx to look for up to 2 parameters
	mov	bx,offset source_file	;set bx to address of 1st parameter
	mov	al,' '			;set up to scan for first non-blank
	mov	di,81h			;set di to pc-dos parameter pointer
find_parms:	;start looking for parameters, load to program storage
repe	scasb				;scan while blanks
	mov	si,di			;set si to second non-blank byte
	dec	si			;adjust it to first non-blank byte
	inc	cx			;adjust cx to compensate
	jcxz	parms_loaded		;if cx is zero, no parameters left
	mov	di,bx			;set di to parameter hold area
	mov	ax,cx			;store cx to first byte of hold area
	stosb				;di is adjusted to second byte here
store:	lodsb				;load each byte to al
	cmp	al,' '			;is it a blank?
	jz	end_store		;yes, end of this parameter
	stosb				;no, store the byte to hold area
end_store:	
	loopnz	store			;keep looking
	sub	[bx],cx			;store number of bytes in each
	jcxz	parms_loaded		;if cx is zero, no more parameters
	dec	byte ptr	[bx]	;parameter to first byte of hold area
	mov	di,si			;set up to scan for next non-blank
	dec	di			;adjust di to point to the blank
	inc	cx			;adjust cx to compensate
	dec	dx			;decrement dx counter
	cmp	dx,0			;is dx zero?
	jz	parms_loaded		;yes all expected parameters loaded
	add	bx,path_file_len	;no, point to next part of hold area
	jmp	find_parms		;go back and look for more
parms_loaded:				;all parameters are loaded
	cmp	source_file[0],0	;if there are no bytes in the
	ja	fix_up			;source_file, no paramters present
no_parms_passed:			;exit with an error if there are
	mov	dx,offset no_parms	;no parameters passed
	jmp	error_exit
fix_up:					;fix source_file and target_path
	mov	si,offset source_file	;for search and rename calls
	lodsb				;get number of bytes
	xor	ah,ah			;zero	ah
	mov	di,si			;mov si to di for scan
	add	di,ax			;start scan at end of parameter
	dec	di			;
	mov	cx,ax			;set cx to number of bytes
	mov	al,'\'			;scan for the last '\'
	std				;set direction flag to reverse
repnz	scasb				;scan while not '\'
	jnz	no_source_dir		;if zero flag not set, '\' not found
	add	di,2			;add 2 to di to point to file name
	jmp	source_fixed		;position
no_source_dir:				;no source directory was specified
	add	di,1			;adjust di
	cmp	source_file[2],':'	;check for specified disk drive
	jne	source_fixed		;none present, we're done
	mov	di,offset source_file[3];yes, set di to point of first byte
source_fixed:				;after ':'
	mov	source_end,di		;move di to source_end pointer
	cld				;set direction flag to forward
	mov	si,offset target_path	;set up to look for '\' present
	lodsb				;get number of bytes
	cmp	al,0			;if it's zero, no target specified
	je	no_target
	xor	ah,ah			;zero ah
	add	si,ax			;add it to si to point to end
	dec	si			;decrement si to adjust
	lodsb				;look at last byte
	mov	di,si			;copy si to di
	cmp	al,'\'			;is last byte a '\'?
	je	target_fixed		;yes, everything's fine
	cmp	target_path[0],2	;if target_path is 2 bytes long and
	jne	store_slash		;is a drive specification,
	cmp	target_path[2],':'	;let it default to the current
	je	target_fixed		;directory
store_slash:				;place a '\' at the end of
	mov	al,'\'			;target_path if user did not
	stosb
target_fixed:
	mov	target_end,di		;move di to target_end pointer
	jmp	find_file
no_target:				;set up to allow target path default
	mov	target_end,offset target_path + 1	;to current path
find_file:
	mov	dx,offset source_file + 1	;dx points to source file
	mov	ah,4Eh			;request function 4Eh (find first file)
	mov	cx,0			;set cx to zero for normal files only
	int	21h			;call pc-dos
	jnc	found_file		;if no error, first file found
	mov	dx,offset file_not_found	;if no files found, exit
	jmp	error_exit			;program with error message
found_file:
	mov	di,source_end		;di points to end of source path
	mov	si,9Eh			;si points to default DTA in psp
	mov	cx,13			;dta will have 13 bytes
rep	movsb				;move bytes to source_file
	mov	di,target_end		;di points to end of target path
	mov	si,9Eh			;si points to default DTA in psp
	mov	cx,13			;DTA will have 13 bytes
rep	movsb				;move bytes to target_path
	mov	dx,offset source_file + 1	;dx points to old file name
	mov	di,offset target_path + 1	;di points to new file name
	mov	ah,56h			;request function 56h (rename file)
	int	21h			;call pc-dos
	jnc	good_red		;if no error, call was successful
	cmp	ax,3			;check for error 3 (path not found)
	jne	err_5
	mov	dx,offset path_not_found
	jmp	error_exit		;exit program with error message
err_5:	cmp	ax,5			;check	for error 5 (file inaccessible)
	jne	err_17
	mov	err_flag,1		;soft error -
	call	red_msg			;issue message with subroutine
	jmp	next_file		;and keep going
err_17:	cmp	ax,17			;check for error 17 (drive conflict)
	jne	undef
	mov	dx,offset drives_conflict
	jmp	error_exit		;exit program with error message
undef:	mov	dx,offset undefined_err	;undefined error from function 56h
	jmp	error_exit		;exit program with error message
good_red:				
	mov	err_flag,0		;set error flag off and
	call	red_msg			;issure message with subroutine
next_file:				;look for next file
	mov	ah,4Fh			;request function 4fh (find next file)
	mov	cx,0
	int	21h
	jnc	found_another		;no error, another file was found
	jmp	end_ok			;error, we're done finding files
found_another:
	jmp	found_file		;go process next file
end_ok:	int	20h			;exit to pc-dos

error_exit:				;print error message and exit
	push	dx			;save error message pointer on stack
	mov	ah,9
	mov	dx,offset err_head
	int	21h
	mov	ah,9
	pop	dx
	int	21h
	mov	ah,9
	mov	dx,offset err_tail
	int	21h
	int	20h			;exit to pc-dos

red_msg	proc	near	;display message for each file
	mov	cx,2			;2 fields - source & target file
	mov	bx,offset source_file + 1	;point to source file
start1:	mov	si,bx			;copy bx to si
start2:	lodsb				;load each byte to al
	cmp	al,0			;if ascii 0 end of field
	je	between
	mov	dl,al			;copy byte to dl for funtion 2h
	mov	ah,2h			;request function 2h
	int	21h			;call pc-dos
	jmp	start2			;get next character
between:cmp	cx,2			;is it first or second field
	jne	cr_lf			;if second, display end of message
	cmp	err_flag,0		;is this a success message?
	jz	ok1			;yes, go to good_msg
	mov	dx, offset bad_msg1	;no, display first part of bad_msg
	mov	ah,9h			;request function 9h
	int	21h			;call pc-dos
	jmp	next			;go process next field
ok1:	mov	dx, offset good_msg	;display good_msg
	mov	ah,9h			;request function 9h
	int	21h			;call pc-dos
	jmp	next			;go process next field
cr_lf:	cmp	err_flag,0		;is this a success message?
	jz	ok2			;yes, go to terminate message
	mov	dx,offset bad_msg2	;no, display second part of bad_msg
	mov	ah,9h			;request function 9h
	int	21h			;call pc-dos
pc_dos_2:				;patch for incorrect error
	cmp	pc_dos_ver,3		;return in pc_dos 2.0 and 2.1
	jae	ok2
	mov	dx,offset pc_dos_2_patch
	mov	ah,9h
	int	21h
	mov	dx,offset path_not_found
	int	21h
ok2:	mov	dx,offset end_line	;terminate display line
	mov	ah,9h			;request function 9h
	int	21h
next:	add	bx,path_file_len		;move bx to point to next field
	loop	start1			;loop for second field
	ret				;or end and return to calling point
red_msg		endp
red	ends
	end	begin
```
{% endraw %}

## REFORM.BAS

{% raw %}
```bas
10 CLS:LOCATE 8,1:PRINT"REFORMATTER PROGRAM FOR BASIC"
20 PRINT:PRINT"COPYRIGHT (C) 1984 BY AUTOMATION DESIGN SERVICES"
30 PRINT:PRINT"CONVERTS ASCII FORMAT DENSE FILES TO IBM-PC-COMPATIBLE ASCII FILE"
50 PRINT:PRINT "STAND BY WHILE KEYWORD AND ERROR MESSAGE STRING ARRAYS ARE BEING SET UP"
55 PRINT :PRINT "A much faster version of this program is available for $30 from":PRINT "ADS, P. O. Box 6246, Monona WI 53716.  Ask for 'the quick reform program.'"
70 ON ERROR GOTO 5000: ECHO$="OFF"
80 DIM RW$(158,2),WLEN(158),FIRST(26),LAST(26),MSG$(73)
81 MSG$(1)="NEXT WITHOUT FOR":MSG$(2)="SYNTAX ERROR":MSG$(3)="RETURN WITHOUT GOSUB":MSG$(4)="OUT OF DATA":MSG$(5)="ILLEGAL FUNCTION CALL":MSG$(6)="OVERFLOW"
82 MSG$(7)="OUT OF MEMORY":MSG$(8)="UNDEFINED LINE NUMBER":MSG$(9)="SUBSCRIPT OUT OF RANGE":MSG$(10)="DUPLICATE DEFINITION":MSG$(11)="DIVISION BY ZERO"
83 MSG$(12)="ILLEGAL DIRECT":MSG$(13)="TYPE MISMATCH":MSG$(14)="OUT OF STRING SPACE":MSG$(15)="STRING TOO LONG":MSG$(16)="STRING FORMULA TOO COMPLEX"
84 MSG$(17)="CAN'T CONTINUE":MSG$(18)="UNDEFINED USER FUNCTION":MSG$(19)="NO RESUME":MSG$(20)="RESUME WITHOUT ERROR":MSG$(21)="":MSG$(22)="MISSING OPERAND"
85 MSG$(23)="LINE BUFFER OVERFLOW":MSG$(24)="DEVICE TIMEOUT":MSG$(25)="DEVICE FAULT":MSG$(26)="FOR WITHOUT NEXT":MSG$(27)="OUT OF PAPER":MSG$(29)="WHILE WITHOUTWEND": MSG$(30)="WEND WITHOUT WHILE":MSG$(50)="FIELD OVERFLOW"
86 MSG$(51)="INTERNAL ERROR":MSG$(52)="BAD FILE NUMBER":MSG$(53)="FILE NOT FOUND":MSG$(54)="BAD FILE MODE":MSG$(55)="FILE ALREADY OPEN":MSG$(57)="DEVICE IO ERROR":MSG$(58)="FILE ALREADY EXISTS":MSG$(61)="DISK FULL"
87 MSG$(62)="INPUT PAST END":MSG$(63)="BAD RECORD NUMBER":MSG$(64)="BAD FILE NAME":MSG$(66)="DIRECT STATEMENT IN FILE":MSG$(67)="TOO MANY FILES":MSG$(68)="DEVICE UNAVAILABLE":MSG$(69)="COMMUNICATIONS BUFFER OVERFLOW"
88 MSG$(70)="DISK WRITE PROTECT":MSG$(71)="DISK NOT READY":MSG$(72)="DISK MEDIA ERROR":MSG$(73)="ADVANCED FEATURE"
100 '
110 ' RESERVED WORDS
120 '
130 DATA ABS,AND,ASC(,ATN,AUTO,BEEP,BLOAD,BSAVE'1-8
131 DATA CALL,CDBL,CHAIN,CHR$(,CINT,CIRCLE'9-14
135 DATA CLEAR,CLOSE,CLS,COLOR,COMMON,COM,CONT'15-21
140 DATA COS,CSNG,CSRLIN,CVD,CVI,CVS,DATA,DATE$'22-29
150 DATA DEFDBL,DEFINT,DEFSNG,DEFSTR,DEF,DELETE,DIM,DRAW'30-37
159 DATA EDIT,ELSE,END,EOF,EQV,ERASE,ERL,ERROR,ERR,EXP'38-47
160 DATA FIELD,FILES,FIX,FOR: REM 48-51
170 DATA FRE,GET,GOSUB,GOTO,HEX$'52-56
180 DATA IF,IMP,INKEY$,INPUT$,INPUT#,INPUT,INP,INSTR,INT(,KEY,KILL,LEFT$(,LEN(,LET,LINE'57-71
190 DATA LLIST,LIST,LOAD,LOCATE,LOC,LOF,LOG,LPOS,LPRINT,LSET,MERGE,MID$(,MKD$(,MKI$('72-85
200 DATA MKS$(,MOD,MOTOR,NAME,NEW,NEXT,NOT,OCT$,OFF,ON,OPEN,OPTION,OR,OUT'86-99
210 DATA PAINT,PEEK,PEN,PLAY,POINT,POKE,POS,PRESET,PRINT#,PRINT,PSET,PUT'100-111
220 DATA RANDOMIZE,READ,REM,RENUM,RESET,RESTORE,RESUME,RETURN,RIGHT$(,RND(,RSET,RUN'112-123
230 DATA SAVE,SCREEN,SGN,SIN,SOUND,SPACE$(,SPC(,SQR,STEP,STICK,STOP,STR$('124-135
240 DATA STRIG,STRING$,SWAP,SYSTEM,TAB(,TAN,THEN,TIME$,TO,TROFF,TRON'136-146
250 DATA USING,USR,VAL,VARPTR$,VARPTR,WAIT,WEND,WHILE,WIDTH,WRITE#,WRITE,XOR'147-158
260 REM ALPHA ORDER IS: A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z
265 DATA 1,5,6,8,9,27,28,37,38,47,48,52,53,55,56,56,57,65,0,0,66,67,68,81,82,88,89,92
266 DATA 93,99,100,111,0,0,112,123,124,139,140,146,147,148,149,151,152,157,158,158,0,0,0,0
270 FOR I=1 TO 158: READ RW$(I,1):RW$(I,2)=""
280 FOR J=1 TO LEN(RW$(I,1)): A=ASC(MID$(RW$(I,1),J,1)):IF A<91 AND A>64 THEN A=A+32
281 : RW$(I,2)=RW$(I,2)+CHR$(A)
290 NEXT J:NEXT I
320 FOR I=1 TO 26: READ FIRST(I),LAST(I):NEXT I
330 FOR I=1 TO 158: WLEN(I)=LEN(RW$(I,1)):NEXT: REM BUILD LENGTH TABLE
400 GOTO 2000
500 CLS: PRINT "PROGRAM REFORM":PRINT "READY----":PRINT:PRINT "ENTER NAME OF FILE TO BE CONVERTED FROM TYPE .ASC (PACKED) TO IBM-PC BASIC FORM.":PRINT "OUTPUT FILE WILL HAVE TYPE .ASC WHILE INPUT FILE WILL BE RETYPED TO .SRC":INPUT F0$
510 PRINT "FILE NAME RECEIVED IS--";F0$;"--IS THIS CORRECT?":INPUT YN$:IF YN$="Y" OR YN$="y" OR YN$="YES" OR YN$="yes" THEN GOTO 520 ELSE GOTO 500
520 F1$=F0$+".ASC": F2$=F0$+".CNV": F3$=F0$+".SRC"
530 OPEN F1$ FOR INPUT AS #1: OPEN F2$ FOR OUTPUT AS #2
540 REM START INPUT OF FILE
550 LINE INPUT #1,RAW$: PROC$="":TF=0
551 IF TF=1 THEN GOTO 712
553 IND=ASC(LEFT$(RAW$,1))
560 IF IND<65 OR IND>122 OR (IND>90 AND IND<97) THEN GOTO 700
570 IF IND>96 THEN GOTO 800
600 REM UPPER CASE A-Z IND=65 TO 90
610 SFI=IND-64: COL=1: GOSUB 1000: GOTO 900
700 REM CHARACTER OTHER THAN A-Z, a-z
701 REM FAST HANDLING FOR QUOTE STRINGS
702 IF IND<>34 THEN GOTO 710
703 B=INSTR(2,RAW$,CHR$(34)):APP$="": IF B>1 THEN GOTO 708 ELSE GOTO 704
704 RAW$=RAW$+CHR$(34):GOTO 703
708 PROC$=PROC$+LEFT$(RAW$,B): RAW$=RIGHT$(RAW$,LEN(RAW$)-B):GOTO 900
710 IF IND<>39 THEN GOTO 711 ELSE GOTO 712
711 GOSUB 1040: GOTO 900
712 PROC$=PROC$+RAW$: RAW$="": GOTO 950
713 REM ABOVE LINE PROCESSES COMMENTS INITIATED BY ' OR REM, AND DATA LINES
800 REM LOWER CASE a-z IND= 97 TO 122
810 SFI=IND-96:COL=2:GOSUB 1000: GOTO 900
900 REM CHECK FOR END OF INPUT LINE, END OF FILE
910 IF LEN(RAW$)<=0 THEN GOTO 950 ELSE GOTO 551
950 PRINT #2,PROC$: IF ECHO$="ON" THEN PRINT PROC$
960 IF EOF(1) THEN GOTO 970 ELSE GOTO 550
970 CLOSE: NAME F1$ AS F0$+".SRC": NAME F2$ AS F0$+".ASC": GOTO 2000
1000 START=FIRST(SFI): FINISH=LAST(SFI)
1005 IF START=0 AND FINISH=0 THEN GOTO 1040
1010 FOR I=START TO FINISH
1011 REM TEST FOR KEYWORD MATCH
1020 WL=WLEN(I): IF LEFT$(RAW$,WL)=RW$(I,COL) THEN GOTO 1050
1030 NEXT
1040 RAW$=RIGHT$(RAW$,LEN(RAW$)-1):PROC$=PROC$+CHR$(IND):RETURN
1050 IF RIGHT$(PROC$,1)<>" " THEN PROC$=PROC$+" "
1051 RAW$=RIGHT$(RAW$,LEN(RAW$)-WL): PROC$=PROC$+RW$(I,COL)
1052 IF LEFT$(RAW$,1)=" " THEN RAW$=RIGHT$(RAW$,LEN(RAW$)-1)
1053 PROC$=PROC$+" ": IF I=28 OR I=114 THEN TF=1
1054 RETURN
2000 CLOSE: PRINT "ENTER--":PRINT "   A TO PROCESS ANOTHER FILE":PRINT "   C TO OBTAIN A LIST OF THE FILES ONLINE":PRINT "   E TO CHANGE OR EXAMINE ECHO PRINT SETTING":PRINT "   P TO PRINT A LISTING OF A FILE":PRINT "   S TO STOP"
2010 INPUT C$: IF C$="A" OR C$="a" THEN GOTO 500 ELSE IF C$="c" OR C$="C" THEN GOTO 2100 ELSE IF C$="e" OR C$="E" THEN GOTO 6000 ELSE IF C$="P" OR C$="p" THEN GOTO 2200 ELSE IF C$="S" OR C$="s" THEN GOTO 4000
2020 PRINT "NO MATCH FOUND FOR RESPONSE":GOTO 2000
2100 FILES "A:*.*": FILES "B:*.*":GOTO 2000
2200 REM PRINT A FILE, BUT FIRST ASK WHICH
2201 GOSUB 2210
2202 GOSUB 2205
2203 IF CL=0 THEN GOSUB 2215 ELSE GOTO 2000
2204 GOTO 2202
2205 LOCATE 1,1: PRINT "PROGRAM REFORM":LOCATE 1,40: PRINT "FILE ";F4$;" LISTING":LOCATE 2,1: PRINT "SCREEN ";J+1;:LOCATE 2,15:PRINT "FILE SIZE>=";M;:LOCATE 2,33:PRINT " BYTES";:LOCATE 2,60 : PRINT "FILE LENGTH>=";L:RETURN
2210 CLS: INPUT "WHICH FILE (INCLUDE FILE TYPE HERE ONLY)";F4$:OPEN F4$ FOR INPUT AS #1:PRINT "FILE RECEIVED AS ";F4$;:INPUT "----IS THIS CORRECT";YN$:IF YN$="Y" OR YN$="y" OR YN$="YES" OR YN$="yes" THEN GOTO 2211 ELSE GOTO 2213
2211 L=0:M=0:I=0: J=0: CL=0: CLS: RETURN
2213 CLOSE #1: GOTO 2210
2215 LIN=18: FOR I=1 TO LIN
2218 IF EOF(1) THEN GOTO 2250
2219 LOCATE 2+I,1:L=L+1
2220 LINE INPUT #1,A$: A=LEN(A$): M=M+A
2221 IF A>80 THEN GOTO 2225
2222 PRINT A$;SPACE$(80-A);: GOTO 2230
2225 PRINT A$;SPACE$(80-(A MOD 80));: I=I+INT((A-1)/80):GOTO 2230
2230 NEXT: J=J+1:FOR IJ=I TO 19:LOCATE 2+IJ,1:PRINT SPACE$(80);:NEXT IJ: I=0
2240 LOCATE 22,1:INPUT "STRIKE ENTER FOR NEXT SCREEN OF LISTING";N$: RETURN
2250 PRINT "***END OF FILE***                                                             ":CLOSE #1: CL=1: FOR IEND=I TO 19
2260 PRINT SPACE$(80);: NEXT :INPUT "STRIKE ENTER TO RETURN TO MENU";N$:CLS:PRINT "PROGRAM REFORM";SPACE$(66);:RETURN
4000 STOP
5000 REM ERROR TRAPPING
5001 IF ERR=53 THEN PRINT MSG$(ERR): RESUME 2000
5002 IF ERR=5 AND ERL=2220 AND LEN(A$)>80 THEN PRINT "***FILE CONTAINS RECORDS LONGER THAN 80 CHARACTERS--":PRINT "THIS FILE IS NOT IN ASCII FORMAT, BUT IN BINARY FORMAT.***":RESUME 2000
5100 IF ERR=55 THEN CLOSE: RESUME
5200 PRINT "ERROR NO. ";ERR;" OCCURS AT LINE NO. ";ERL:PRINT MSG$(ERR):CLOSE:RESUME 2000
6000 CLS: PRINT"PROGRAM REFORM       ECHO PRINT TO SCREEN IS NOW "; ECHO$
6010 INPUT "DO YOU WANT TO CHANGE THE SETTING";YN$
6020 IF YN$="Y" OR YN$="y" OR YN$="YES" OR YN$="yes" THEN GOTO 6030 ELSE GOTO 6040
6030 IF ECHO$="ON" THEN ECHO$="OFF" ELSE IF ECHO$="OFF" THEN ECHO$="ON"
6040 GOTO 2000
```
{% endraw %}

## SCRNMOVE.BAS

{% raw %}
```bas
100  ' scrnmove.bas -- demo using mc6845 port register access.
110 ' hit any key to proceed to next step.  don't clear screen.
120 '
130  KEY OFF:WIDTH 80:SCREEN 0:FILES
140  '
150 PORT=2:FOR B=80 TO 100:GOSUB 270:NEXT B
160 FOR B=100 TO 80 STEP -1:GOSUB 270:NEXT B
170 IF INKEY$="" THEN 150 ELSE B=&H5A:GOSUB 270
180  '
190  PORT=7:FOR B=26 TO 30:GOSUB 270:NEXT B
200  FOR B=30 TO 26 STEP -1:GOSUB 270:NEXT B
210  IF INKEY$="" THEN 190 ELSE B=&H1C:GOSUB 270
220  '
230  OUT &H3D4,2:OUT &H3D5,85+RND*11:OUT &H3D4,7:OUT &H3D5,27+RND*3
240  IF INKEY$="" THEN 230
250 PORT=2:B=&H5A:GOSUB 270:PORT=7:B=&H1C:GOSUB 270:END
260 '
270 OUT &H3D4,PORT:OUT &H3D5,B:FOR DELAY=1 TO 5:NEXT DELAY:RETURN
290 SCREEN ,,PAGE MOD 8:FOR B=1 TO S:NEXT B:PAGE=PAGE+1
300 IF INKEY$="" THEN 290 ELSE SCREEN ,,0:CLS:END
```
{% endraw %}

## TWOLINE.BAS

{% raw %}
```bas
100 'twoline.bas
110 CLS:SCREEN 2:OUT 984,26:FOR H=0 TO 635 STEP 4
120 LINE (H,0)-(H+3,199):LINE (H+1,0)-(H+4,199):NEXT H
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0299

     Volume in drive A has no label
     Directory of A:\

    4BARLINK BAS      2894  10-09-84   6:21p
    4MSSTEP  COM        15  12-16-82  12:07a
    ANIMATE  BAS       483   1-01-80   1:35a
    BARS     BAS       367   1-01-80   1:08a
    BIRD     BAS       128   8-27-83   8:42p
    CHARDEFN BAS       316  11-12-84  10:48p
    COMPACT  BAS     12938   2-06-85  10:08p
    CONTENTS DOC     11977   1-14-87   1:25a
    CONVERGE BAS       253   1-01-80   1:23a
    CROSSWDS DAT       912   9-23-84   9:56a
    DIFF     EXE     11904   1-14-87   1:13a
    DISKMODP BAS      7405   2-19-85  10:27p
    DITHER   BAS      1509  12-03-84  11:44p
    DOORS    BAS      1239   1-20-85  10:26p
    DOORS    COM       178   1-20-85  10:27p
    EPBENCHI BAS       718   2-07-85  11:26p
    FILEDSCR ADD       188   1-14-87  11:28p
    INTLCVID BAS       296   1-01-80   1:40a
    M        EXE     16128   1-01-80  12:03a
    MEGATREK BAS     40468   2-11-84   1:03a
    MEMINST  DAT         6   9-16-84  10:16p
    MEMSET   BAS       648   1-01-80  12:05a
    MLTIBRST BAS       501   1-01-80   1:20a
    NPAD     COM      1054  12-04-84  10:22p
    NUTREK   BAS     50909   9-09-84   5:20p
    PARINT   ASM      5313   1-19-85  11:45a
    PARINT   COM       451   1-13-85   3:48p
    PARINT   LST     11043   1-13-85   3:42p
    PERTCHRT BAS     10496   4-04-83   1:55p
    PGBRK    BAS       384   1-21-85  11:47p
    PGBRK    BAT       317   1-21-85  11:32p
    PGBRK    BEG       128   1-21-85  11:46p
    PGBRK    END       128   1-21-85  11:46p
    RED      ASM      9750   1-20-85  10:02p
    RED      COM      1071   1-20-85   4:32p
    RED      LST     24115   1-20-85   4:31p
    REFORM   BAS      7217   2-07-85   9:54p
    SCRNMOVE BAS       626   1-11-87  10:17p
    TWOLINE  BAS       102   1-01-80   1:25a
           39 file(s)     234575 bytes
                           63488 bytes free
