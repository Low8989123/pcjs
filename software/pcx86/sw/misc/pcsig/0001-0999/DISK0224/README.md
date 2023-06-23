---
layout: page
title: "PC-SIG Diskette Library (Disk #224)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0224/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0224"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "GARY GORDON'S PC-CALC"

    Gray Gordon's PC-CALC is a small spreadsheet written by John Vandegrift
    and Guy Gordon.  Although limited, PC-CALC even comes with some of its
    own utilites, such as keyboard buffer expander, advanced screen save
    and enhanced directory.  PC-CALC is distributed free and should not be
    confused with a later program of the same name by Jim Button (of PC-
    File fame).
    
    How to Start:  Load DOS and type PC-CALC to enter the main program.
    Consult the .DOC files for program documentation.
    
    Suggested Registration:  $45.00
    
    File Descriptions:
    
    README        List of files
    PC-CALC  BAS  Source code for PC-Calc
    PC-CALC  DOC  Documentation for PC-Calc  (65K)
    SCRNSAVE ASM  Source code for new version
    SCRNSAVE DOC  Allows user to set time out
    SCRNSAVE COM  Advanced Screen Save
    PC-CALC  EXE  Compiled version
    KBUFF    COM  Advanced keyboard buffer expander
    KBUFF    DOC  Documentation and Source for above
    SDIR1    COM  Enhanced SDIR for DOS 1.xx
    SDIR1    DOC  Documentation explains enhancements
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #224, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  README  .            CRC = 22 7C

--> FILE:  PC-CALC .DOC         CRC = 37 83

--> FILE:  PC-CALC .BAS         CRC = 95 DF

--> FILE:  PC-CALC .EXE         CRC = F5 C8

--> FILE:  SCRNSAVE.COM         CRC = BD B0

--> FILE:  SCRNSAVE.DOC         CRC = B4 5C

--> FILE:  SCRNSAVE.ASM         CRC = 8D 4A

--> FILE:  KBUFF   .DOC         CRC = 2C C9

--> FILE:  KBUFF   .COM         CRC = 00 00

--> FILE:  SDIR1   .COM         CRC = 7D 6E

--> FILE:  SDIR1   .DOC         CRC = AD 68

 ---------------------> SUM OF CRCS = 3C 9B

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## KBUFF.DOC

{% raw %}
```
    The program KBUFF.COM expands the IBM BIOS keyboard buffer from
15 to 159 characters.  It is designed to replace the program KBD_FIX
(or sometimes KEYBUFF) by John Socha in the Nov 83 SoftTalk.  This
new version will not work with the very oldest PCs (ROM BIOS dated
04/24/81), but will work on the IBM PC XT or the newer PC's (ROM 
BIOS dated 10/27/82 or later).  The problem with Socha's program is 
that it will not work with many text editors, especially if you 
install it with SCRNSAVE, SCROLLK, or PROKEY in the wrong order.  
In order to make his program work on all IBM PC's, Socha was forced 
to intercept both keyboard interrupts 9 and 16.  This interfears 
with other programs using these interrupts or the keyboard buffer.  

   KBUFF does not intercept any interrupts.  Instead it takes
advantage of two variables defined by the new BIOS which point to
the beginning and end of the keyboard buffer.  KBUFF mearly changes
these and the buffer head and tail, to point to a new buffer starting
somewhere after 5C in its PSP.  There is an additional problem in that
the IBM console driver (located in IBMBIO.COM) stupidly assumes that
the buffer still starts on a 1E boundary.  (It clears the buffer by
plugging 1E into the low byte of the buffer head and tail!)  To avoid
problems, KBUFF makes certain that your new buffer starts at xx00,
thus insuring that it contains contains the address xx1E.  

   Here's the code for KBUFF.  Since it's so short I just assembled
it with the DOS 2.0 DEBUG Assemble command.

DEBUG KBUFF.COM
A 100                           ;Start assembling code at address 100
        XOR     AX,AX           ;segment 0
        MOV     DS,AX           ;
        MOV     AX,CS           ;calculate number of bytes from the
        SUB     AX,0040         ;  BIOS data segment to cs:5C
        MOV     CL,04           ;
        SHL     AX,CL           ;
        MOV     DX,AX           ;dx will keep track of memory needed
        ADD     AX,005C         ;first usable byte of memory in PSP
        ADD     AX,FF           ;round up
        AND     AX,FF00         ;
        CLI                     ;interrupts off
        MOV     [041A],AX       ;buffer_head
        MOV     [041C],AX       ;buffer_tail
        MOV     [0480],AX       ;buffer_start
        ADD     AX,140          ;make a 160 word buffer
        MOV     [0482],AX       ;buffer_end
        STI                     ;interrupts back on
        SUB     AX,DX           ;space used
        ADD     AX,30           ;saftey space
        MOV     DX,AX           ;
        INT     27              ;Terminate, Stay Resident
RCX                             ;Put size of file in CX register
 32                             ;
W                               ;Write the file Kbuff.com
Q                               ;Quit debug

                                                      Guy C. Gordon
                                                White Crane Systems

```
{% endraw %}

## PC-CALC.BAS

{% raw %}
```bas
1  '--------------------------------------------------------------------------
2  '|  PC-Calc 1.02             15 July, 1984           White Crane Systems  |
3  '|   copyright               Guy C. Gordon           3194 Friar Tuck Way  |
4  '|   (c)  1983              John Vandegrift          Doraville, GA 30340  |
5  '|                                                                        |
6  '|      Emulates the popular expensive Spreadsheets at a fraction of      |
7  '|      the cost.  Please forward any comments to the above address.      |
8  '|                                                                        |
9  '|        Original IBM-PC version by John Vandegrift.  This is the        |
10 '|        IBM-PC version.   This program started life as MINICALC by      |
11 '|        John Vandegrift, who expanded it to CALC.  CALC was adapted     |
12 '|        to the VICTOR-9000 by Guy Gordon who expanded it to this        |
13 '|        version (1.00).  The two of us then got together to put out     |
14 '|        PC-CALC as Free Software.                                       |
15 '--------------------------------------------------------------------------
31 '
40 '******************************** NOTICE **********************************
41 '           USER SUPPORTED SOFTWARE (With thanks to Andrew Flugelman)     *
42 '                                                                         *
43 '   A limited license is granted to all users, to copy this program and   *
44 '   distribute it to users subject to the following conditions:           *
45 '                                                                         *
46 '           1.  None of the notices or credits are to be bypassed,        *
47 '               altered, or removed.                                      *
48 '           2.  The program is not to be distributed in modified form.    *
49 '               (Users are encouraged to distributed MERGE files.)        *
50 '           3.  No fee greater than $10. may be charged (or any other     *
51 '               consideration received) for copying or distributing this  *
52 '               program without an express writted agreement with         *
53 '               White Crane Systems.                                      *
54 '**************************************************************************
60 DEFINT I-N, C, D, E, R, S, T
61 RMAX=50: CMAX=26: RX=RMAX: CX=CMAX
62 DIM IND$(50,26),EQ$(50,26),VALUE(50,26),VTOT(10),IOP(10)
63 LPT=80: PRINT.FILE$="lpt1:"          'SET THIS FOR YOUR PRINTER
64 'DEF SEG=0: POKE 1047,(PEEK(1047) OR 64)            'SET CAPS
65 GOSUB 8000: GOSUB 7300                              'INIT VICTOR VARIABLES
66 KEY OFF: GOSUB 1100                                          'CREDITS ROUTIN
70 LOCATE 17,1
71 PRINT TAB(15)"If you are using this program and finding it of value,"
72 PRINT TAB(15)"your contribution ($25 suggested) will be appreciated."
73 PRINT
74 PRINT TAB(19)"              White Crane Systems"
75 PRINT TAB(19)"              3194 Friar Tuck Way"
76 PRINT TAB(19)"              Doraville, GA 30340"
77 PRINT
78 PRINT TAB(15)"     You are encouraged to copy and share this program"
79 PRINT TAB(15)"with other users,  on the conditions that the  program"
80 PRINT TAB(15)"not be distributed  in modified form,  that no fee  or"
81 PRINT TAB(15)"other consideration greater than $10. is charged,  and"
82 PRINT TAB(15)"that this notice is not bypassed or removed."
130 GLOBAL.FMT$="2": WINDOW.FLAG$=" ": BOLD$="ON": PREV.FILE$="MATRIX"
140 ROW=1: COL=1: ROW.HOME=0: COL.HOME=0: SCR.ROW=1: SCR.COL=1 'START IN A01
160 GOSUB 1300                                          'SCREEN OUTLINE
210 FOR I=1 TO 1500: NEXT
220 LOCATE 7,35: PRINT "copyright 1983"
230 IF INKEY$="" THEN 230
240 FOR I=24 TO 5 STEP -1: LOCATE I,15: PRINT SPACE$(65);: NEXT
250 ON ERROR GOTO 9000
300 '                           MAIN ROUTINE
320 'I=FRE("")
330 IF IW.FLAG THEN GOSUB 5100                          'DISPLAY WINDOW
340 GOSUB 600                                           'DISPLAY STATUS LINE
350 GOSUB 700                                           'DISPLAY CELL CURSOR
360 A$=INKEY$: GOSUB 1000: IF A$="" THEN 360
370 IF LEN(A$)>1 THEN A$=MID$(A$,2,1) ELSE 440
380 GOSUB 900                                        'CURSOR CONTROL
390 IF A$="H" THEN IF SCR.ROW>1  THEN SCR.ROW=SCR.ROW-1: ROW=ROW-1      'UP
400 IF A$="P" THEN IF SCR.ROW<SR THEN SCR.ROW=SCR.ROW+1: ROW=ROW+1      'DOWN
410 IF A$="M" THEN IF SCR.COL<SC THEN SCR.COL=SCR.COL+1: COL=COL+1      'RIGHT
420 IF A$="K" THEN IF SCR.COL>1  THEN SCR.COL=SCR.COL-1: COL=COL-1      'LEFT
425 IF A$="G" THEN GOSUB 2600                                   'CLR
426 IF A$="t" THEN TEMP.COL=COL.HOME+9: TEMP.ROW=ROW.HOME+1: GOSUB 2465: GOTO 300         'PAGE RIGHT
427 IF A$="s" THEN TEMP.COL=COL.HOME-7: TEMP.ROW=ROW.HOME+1: GOSUB 2465: GOTO 300         'PAGE LEFT
428 IF A$="Q" THEN TEMP.ROW=ROW.HOME+23: TEMP.COL=COL.HOME+1: GOSUB 2465: GOTO 300        'PAGE DOWN
429 IF A$="I" THEN TEMP.ROW=ROW.HOME-21: TEMP.COL=COL.HOME+1: GOSUB 2465: GOTO 300        'PAGE UP
430 GOTO 330
435 '
440 IF A$="+" OR A$="=" THEN GOSUB 2000: GOSUB 4800: GOTO 300   'ACCEPT NUM.
450 IF A$="'" OR A$=CHR$(34) THEN GOSUB 1900: GOSUB 4800: GOTO 300 'LABEL
460 IF A$="."           THEN GOSUB 2400: GOTO 300               'GOTO
470 IF A$="/" OR A$="?" THEN GOSUB 3000: GOTO 300       'SPECIAL COMMANDS
475 IF A$=CHR$(13)      THEN GOSUB 4800: GOTO 300       'JUMP ON CR
480 '
485 '
490 '
495 '
499 BEEP: GOTO 300
600 '                           STATUS LINE
601 '
610 A$=STR$(ROW): IF ROW<10 THEN A$="0"+RIGHT$(A$,1) ELSE A$=RIGHT$(A$,2)
620 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1:PRINT CHR$(COL+64)+A$+"=";
630 A$=IND$(ROW,COL)
640 IF A$="" THEN PRINT "(blank)";: RETURN
650 IF A$="!" THEN PRINT EQ$(ROW,COL);: RETURN ELSE PRINT VALUE(ROW,COL) "  "+EQ$(ROW,COL);
660 RETURN
700 '                           DISPLAY CELL CURSOR
701 DEF SEG=RAM
710 SCR.ROW=ROW-ROW.HOME: SCR.COL=COL-COL.HOME
720 TEMP.ROW=SCR.ROW+2: TEMP.COL=SCR.COL*9-5
730 M=((SCR.ROW+1)*160-1)+((SCR.COL*9-3)*2-5)
740 FOR II=M+1 TO M+16 STEP 2: POKE II,112: NEXT
750 RETURN
800 '                           HIGHLIGHT CELL(I,J) IF DISPLAYED
801 '
810 IF BOLD$<>"ON" OR I<=ROW.HOME OR I>(ROW.HOME+SR) OR J<=COL.HOME OR J>(COL.HOME+SC) THEN RETURN
815 MM=((I-ROW.HOME+1)*160-1)+(((J-COL.HOME)*9-3)*2-5)
820 DEF SEG=RAM:FOR II=MM+1 TO MM+16 STEP 2: POKE II,15: NEXT
830 RETURN
900  '                          ERASE OLD CURSOR
901 DEF SEG=RAM
910 FOR II=M+1 TO M+16 STEP 2: POKE II,7: NEXT
920 RETURN
1000 '                          25'th LINE STUFF
1001 KEY OFF
1030 DEF SEG=0: COLOR 0,7                              'INVERSE VIDEO
1040 LOCATE 25,1: IF PEEK(1047) AND 64 THEN PRINT "Caps On "; ELSE PRINT "Caps Off";
1050 LOCATE 25,73:IF PEEK(1047) AND 32 THEN PRINT "Numbers"; ELSE PRINT "Cursor ";
1060 LOCATE 25,36: PRINT "  PC-Calc ";
1070 COLOR 7,0                                         'REGULAR VIDEO
1075 RETURN
1100 '                          CREDITS ROUTINE
1101 '
1110 A$=" PC-Calc": B$="(": C$=")": D$="White Crane Systems": COUNT=10
1120 CLS: LOCATE 12,41: PRINT "c": GOSUB 1200
1130 A$="        ": B$=" ": C$=" ": D$="                   ": COUNT=9
1140 GOSUB 1200
1150 RETURN
1200 FOR I=1 TO COUNT
1210 LOCATE I,37:PRINT A$;
1220 LOCATE 12,4*I:PRINT B$;
1230 LOCATE 12,82-(4*I):PRINT C$;
1240 LOCATE 24-I,33:PRINT D$;
1250 NEXT
1260 RETURN
1300 '                          SCREEN OUTLINE
1301 '
1320 FOR I=ROW.HOME+1 TO ROW.HOME+SR
1330 A$=STR$(I): IF I<10 THEN A$="0"+RIGHT$(A$,1) ELSE A$=RIGHT$(A$,2)
1340 LOCATE 2+I-ROW.HOME,1:PRINT A$+CHR$(221);: NEXT
1350 LOCATE 2,3
1360 S$=STRING$(3,219)
1380 FOR J=COL.HOME+65 TO COL.HOME+SC+64: PRINT S$ " " CHR$(J) " " S$;: NEXT
1399 RETURN
1400 '                          UPDATE THE SCREEN
1401 '
1405 IF WINDOW.FLAG$<>" " THEN IW.FLAG=-1
1410 FOR I=ROW.HOME+1 TO ROW.HOME+SR: FOR J=COL.HOME+1 TO COL.HOME+SC: GOSUB 1510: IF INKEY$<>CHR$(0)+CHR$(79) THEN NEXT J,I
1430 RETURN
1500 '                          DISPLAY CELL(I,J)
1501 '
1505 IF I<=ROW.HOME OR I>ROW.HOME+SR OR J<=COL.HOME OR J>COL.HOME+SC THEN RETURN
1510 LOCATE I-ROW.HOME+2,(J-COL.HOME)*9-5
1520 Q$=IND$(I,J): IF Q$="" THEN PRINT SPC(9): RETURN
1530 IF Q$="!" THEN PRINT EQ$(I,J);SPC(9-LEN(EQ$(I,J))): RETURN
1540 GOSUB 1600
1550 IF Q$="F" THEN PRINT F$; ELSE PRINT USING F$; VALUE(I,J);
1560 RETURN
1600 '                          FORMAT STRING
1601 '
1605 F$="########"
1610 IF INSTR("D@B",Q$) THEN GOSUB 1700: RETURN
1620 IF Q$="G" THEN Q$=GLOBAL.FMT$
1625 IF Q$="I" THEN RETURN
1630 IF INSTR("01234567",Q$) THEN MID$(F$,8-VAL(Q$))=".": RETURN
1640 IF Q$="H" THEN ID=2 ELSE IF Q$="F" OR Q$="Q" THEN ID=4 ELSE IF Q$="E" THEN ID=8 ELSE IF Q$="S" THEN ID=16 ELSE ID=32
1645 Q$="F": VAL.B=ABS(VALUE(I,J)): S$="": IF VALUE(I,J)<0 THEN S$="-"
1650 II=INT(VAL.B): IF II=0 THEN I$="" ELSE I$=STR$(II):I$=RIGHT$(I$,LEN(I$)-1)
1660 N=CINT((VAL.B-II)*ID): IF N MOD 2 = 0 THEN IF ID>1 THEN ID=ID/2: GOTO 1660
1670 N$=STR$(N): D$=STR$(ID): D$=RIGHT$(D$,LEN(D$)-1): F$=S$+I$+N$+"/"+D$
1675 IF N=0 THEN IF II=0 THEN F$=S$+"0    " ELSE F$=S$+I$+"    "
1680 IF LEN(F$)>8 THEN IF ID>8 THEN ID=8: GOTO 1660: ELSE RETURN
1690 IF LEN(F$)>=8 THEN RETURN ELSE F$=" "+F$: GOTO 1690
1699 '
1700 '                          SPECIAL FORMATS
1701 '
1710 IF Q$="@" THEN F$=TIME$: Q$="F": RETURN
1720 IF Q$="D" THEN F$=LEFT$(DATE$,6)+RIGHT$(DATE$,2): Q$="F": RETURN
1730 IF Q$<>"B" THEN RETURN
1735 NBLOCKS=VALUE(I,J-1)*VALUE(I,J)
1740 Q$=STRING$(NBLOCKS\2,&HB1)+STRING$(NBLOCKS MOD 2,221)
1750 F$=SPACE$(9): LSET F$=Q$: II=J
1760 IF LEN(Q$)<10 THEN Q$="F": RETURN: ELSE Q$=RIGHT$(Q$,LEN(Q$)-9)
1770 II=II+1: IF II>COL.HOME+SC THEN Q$="F": RETURN
1780 IND$(I,II)="!": EQ$(I,II)=F$: LSET EQ$(I,II)=Q$
1790 GOTO 1760
1900 '                          ACCEPT LABEL                            (')
1910 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1
1920 LINE INPUT;"Label: ",A$: IF A$="" THEN RETURN
1930 IND$(ROW,COL)="!": VALUE(ROW,COL)=0: EQ$(ROW,COL)=LEFT$(A$,9)
1940 D$=L$+CHR$(B+TEMP.ROW)+CHR$(B+TEMP.COL)
1950 LOCATE TEMP.ROW,TEMP.COL:PRINT EQ$(ROW,COL);
1960 IF LEN(A$)<10 THEN RETURN ELSE A$=RIGHT$(A$,LEN(A$)-9)
1970 IF COL<COL.HOME+SC THEN COL=COL+1: TEMP.COL=TEMP.COL+9: GOTO 1930
1980 RETURN
2000 '                          ACCEPT NUMBER                           = OR +
2010 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1: I=ROW: J=COL
2020 INPUT;"Value: ",B$: IF B$="" THEN RETURN: ELSE GOSUB 2100: VALUE(I,J)=VAL.B
2030 EQ$(I,J)="": IF IND$(I,J)="" OR IND$(I,J)="!" THEN IND$(I,J)="G"
2040 GOSUB 1500
2090 RETURN
2100 '                          DECODE A NUMBER WITH FRACTION
2101 '
2110 ID=INSTR(B$,"/"): IF ID=0 THEN VAL.B=VAL(B$): RETURN
2120 VAL.D=VAL(RIGHT$(B$,LEN(B$)-ID)): B$=LEFT$(B$,ID-1)
2130 IS=INSTR(B$," "): IF IS<2 THEN IS=INSTR(B$,"."): IF IS<1 THEN VAL.B=VAL(B$)/VAL.D: RETURN
2140 VAL.B=VAL(LEFT$(B$,IS-1))+VAL(RIGHT$(B$,LEN(B$)-IS))/VAL.D*SGN(VAL(LEFT$(B$,IS-1)))
2150 RETURN
2400 '                          GOTO ROUTINE                    /G, OR .
2430 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1
2440 INPUT;"Goto: ",INPUT.CELL$: IF INPUT.CELL$="" THEN RETURN
2450 TEMP.COL=(ASC(LEFT$(INPUT.CELL$,1)) AND &HDF)-64
2460 TEMP.ROW=VAL(RIGHT$(INPUT.CELL$,LEN(INPUT.CELL$)-1))
2465 IF TEMP.ROW<1  THEN TEMP.ROW=1:  BEEP
2466 IF TEMP.COL<1  THEN TEMP.COL=1:  BEEP
2467 IF TEMP.ROW>RX THEN TEMP.ROW=RX: BEEP
2468 IF TEMP.COL>CX THEN TEMP.COL=CX: BEEP
2469 ROW=TEMP.ROW: COL=TEMP.COL: GOSUB 900
2470 IF ROW.HOME >= ROW OR COL.HOME >= COL OR ROW > (ROW.HOME+SR) OR COL > (COL.HOME+SC) THEN GOSUB 2500        'ALTER SCREEN
2480 RETURN
2500 '                          ALTER SCREEN
2501 '
2510 ROW.HOME=ROW-1: IF WINDOW.FLAG$="R" THEN IF ROW.HOME > 0 THEN ROW.HOME=ROW.HOME-1
2520 COL.HOME=COL-1: IF WINDOW.FLAG$="C" THEN IF COL.HOME > 0 THEN COL.HOME=COL.HOME-1
2530 IF ROW.HOME > RX-SR THEN ROW.HOME = RX-SR: SCR.ROW = 1: IF ROW.HOME < 0 THEN ROW.HOME = 0
2540 IF COL.HOME > CX-SC THEN COL.HOME = CX-SC: SCR.COL = 1: IF COL.HOME < 0 THEN COL.HOME = 0
2550 GOSUB 2600                                         'CLEAR SCREEN
2570 RETURN
2600 '                          CLEAR                                   (CLR)
2610 CLS
2620 GOSUB 1300                                         'OUTLINE
2630 GOSUB 1400                                         'UPDATE
2640 RETURN
3000 '                          SPECIAL COMMANDS
3030 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1
3040 PRINT "Special Command (A,B,C,D,E,F,G,H,I,J,L,M,N,P,Q,R,S,T,W,Z)? ";
3050 A$=INKEY$: GOSUB 1000: IF A$="" THEN 3050
3060 A$=CHR$(ASC(A$) AND &HDF)                          'CONVERT TO UPPER
3070 ON INSTR("ABCDEFGHIJLMNPQRSTWZ",A$)  GOSUB 3700,3900,6000,6700,5700,4300,2400,7600,6900,4700,5500,7500,4900,7100,3800,6300,5400,3500,5000,7400
3080 RETURN
3200 '                          GET START OF RANGE
3210 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1
3220 INPUT;"Enter source range starting cell: ",INPUT.CELL$
3230 IF INPUT.CELL$="" THEN START.ROW=ROW: START.COL=COL: RETURN
3240 START.COL=(ASC(LEFT$(INPUT.CELL$,1)) AND &HDF)-64
3250 START.ROW=VAL(RIGHT$(INPUT.CELL$,LEN(INPUT.CELL$)-1))
3260 IF START.ROW<1 OR START.ROW>RX OR START.COL<1 OR START.COL>CX THEN PRINT CHR$(7)+"...OUT OF RANGE": FOR II=1 TO 999: NEXT: GOTO 3200
3270 RETURN
3300 '                          GET END OF RANGE
3301 '
3310 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1:PRINT INPUT.CELL$+"-  :  ";
3320 INPUT;"Enter source range ending cell: ",INPUT.CELL$
3330 IF INPUT.CELL$="" THEN END.ROW=ROW: END.COL=COL: RETURN
3335 IF INPUT.CELL$=CHR$(&HBF) THEN IANS$="N": RETURN
3340 END.COL=(ASC(LEFT$(INPUT.CELL$,1)) AND &HDF)-64
3350 END.ROW=VAL(RIGHT$(INPUT.CELL$,LEN(INPUT.CELL$)-1))
3360 IF END.ROW<1 OR END.ROW>RX OR END.COL<1 OR END.COL>CX THEN BEEP:PRINT "...OUT OF RANGE": FOR II=1 TO 999: NEXT: GOTO 3300
3370 IANS$=" ": IF START.ROW>END.ROW OR START.COL>END.COL THEN LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1: INPUT;"Incorrect range!  Press return",IANS$: IANS$="N"
3380 RETURN
3500 '                          TOTAL EQUATION                          /T
3501 '
3510 GOSUB 3200: GOSUB 3300: IF IANS$="N" THEN RETURN
3515 EQ$(ROW,COL)=""
3520 IF IND$(ROW,COL)="" OR IND$(ROW,COL)="!" THEN IND$(ROW,COL)="G"
3530 FOR I=START.ROW TO END.ROW: FOR J=START.COL TO END.COL
3540 A$=STR$(I): A$=RIGHT$(A$,LEN(A$)-1): IF I<10 THEN A$="0"+A$
3550 EQ$(ROW,COL)=EQ$(ROW,COL)+CHR$(J+64)+A$+"+"
3560 GOSUB 800: NEXT J,I
3570 EQ$(ROW,COL)=LEFT$(EQ$(ROW,COL),LEN(EQ$(ROW,COL))-1)
3580 I=ROW: J=COL: GOSUB 6100                   'PARSE & DISPLAY
3590 RETURN
3700 '                          AVERAGE COMMAND                         /A
3710 GOSUB 3500
3720 DIF=(END.ROW-START.ROW+1)*(END.COL-START.COL+1)
3730 EQ$(ROW,COL)=EQ$(ROW,COL)+"/"+STR$(DIF)
3740 I=ROW: J=COL: GOSUB 6100
3750 RETURN
3800 '                          QUIT ROUTINE                            /Q
3810 GOSUB 1100
3820 ON ERROR GOTO 0                            'TURN OFF ERROR TRAPING
3830 WIDTH 80
3840 LOCATE 22,1
3850 END
3860 SYSTEM
3900 '                          BLANK ROUTINE                           /B
3901 '
3910 GOSUB 3200: GOSUB 3300: IF IANS$="N" THEN RETURN           'RANGE
3920 FOR I=START.ROW TO END.ROW: FOR J=START.COL TO END.COL: IND$(I,J)="": EQ$(I,J)="": VALUE(I,J)=0: GOSUB 1500: NEXT J,I
3940 RETURN
4300 '                          FORMAT COMMAND                          /F
4301 '
4310 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1:PRINT "(G)lobal or (L)ocal? ";
4320 REP.MODE$=INKEY$: IF REP.MODE$="" THEN 4320
4330 IF REP.MODE$<>"L" AND REP.MODE$<>"l" THEN REP.MODE$="G"
4340 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1:PRINT "Enter (I)nteger, (0-7) decimals, (H,F,E,S,T) for fractions, or G,B,@,D, or !: ";
4350 A$=INKEY$: IF A$="" THEN 4350 ELSE IF A$>="a" THEN A$=CHR$(ASC(A$) AND &HDF)
4360 IF INSTR("I01234567HFQESTGD@B!",A$)=0 THEN 4340
4370 IF REP.MODE$="G" THEN IF A$="G" THEN 4300 ELSE GLOBAL.FMT$=A$: GOSUB 900: GOSUB 1400: RETURN
4380 GOSUB 3200: GOSUB 3300: IF IANS$="N" THEN 4300 ELSE GOSUB 900
4390 FOR I=START.ROW TO END.ROW: FOR J=START.COL TO END.COL
4420 IF IND$(I,J)="!" THEN EQ$(I,J)=""
4430 Q$=IND$(I,J): IND$(I,J)=A$
4440 IF A$="!" THEN EQ$(I,J)=SPACE$(8): RSET EQ$(I,J)=STR$(VALUE(I,J))
4450 IF INSTR("!@D",A$) THEN VALUE(I,J)=0
4460 IF Q$="@" OR Q$="D" THEN GOSUB 1700: EQ$(I,J)=F$   'FIX DATE & TIME
4480 IF A$<>"B" THEN GOSUB 1500
4485 NEXT J,I
4490 IF A$="B" THEN GOSUB 1400
4499 RETURN
4700 '                          JUMP COMMAND                            /J
4701 '
4710 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1:PRINT "Enter (C)olumn, (R)ow, or (space): ";
4720 JUMP.FLAG$=INKEY$: IF JUMP.FLAG$="" THEN 4720 ELSE JUMP.FLAG$=CHR$(ASC(JUMP.FLAG$) AND &HDF)
4730 IF JUMP.FLAG$<>"C" AND JUMP.FLAG$<>"R" THEN JUMP.FLAG$=" "
4740 RETURN
4800 '                          JUMP!
4801 '
4810 IF JUMP.FLAG$="C" THEN IF SCR.ROW<SR THEN SCR.ROW=SCR.ROW+1: ROW=ROW+1
4820 IF JUMP.FLAG$="R" THEN IF SCR.COL<SC THEN SCR.COL=SCR.COL+1: COL=COL+1
4830 GOSUB 900: RETURN
4900 '                          NEW                                     /N
4910 RUN
5000 '                          WINDOW ROUTINES                         /W
5001 '
5010 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1:PRINT "Enter (C)olumn, (R)ow, or (space): ";
5020 WINDOW.FLAG$=INKEY$: IF WINDOW.FLAG$="" THEN 5020 ELSE WINDOW.FLAG$=CHR$(ASC(WINDOW.FLAG$) AND &HDF)
5030 IF WINDOW.FLAG$<>"C" AND WINDOW.FLAG$<>"R" THEN WINDOW.FLAG$=" ": GOSUB 1400: ELSE GOSUB 5100
5040 RETURN
5100 '                          DISPLAY WINDOW
5105 IW.FLAG=0
5110 IF WINDOW.FLAG$<>"R" THEN 5150 ELSE I=1            'DISPLAY TOP ROW
5115 LOCATE 3,1:PRINT "01";
5120 FOR JI=1 TO SC: LOCATE 3,(JI*9)-5: J=JI+COL.HOME: GOSUB 1520: NEXT: RETURN
5150 IF WINDOW.FLAG$<>"C" THEN RETURN ELSE J=1          'DISPLAY 1'ST COL
5155 LOCATE 2,7:PRINT "A";
5160 FOR JI=1 TO SR: LOCATE JI+2,4: I=JI+ROW.HOME: GOSUB 1520: NEXT: RETURN
5199 '
5400 '                          SAVE ROUTINE                            /S
5410 GOSUB 5600
5420 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1:PRINT "Saving data to "+A$;: OPEN "O",#1,A$:
5430 WRITE #1,RX,CX,GLOBAL.FMT$,WINDOW.FLAG$,BOLD$:
5440 FOR I=1 TO RX: FOR J=1 TO CX: WRITE #1,IND$(I,J),EQ$(I,J),VALUE(I,J): NEXT J,I
5490 CLOSE: RETURN
5500 '                          LOAD ROUTINE                            /L
5510 GOSUB 5600
5520 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1:PRINT "Loading data from "+A$;: OPEN "I",#1,A$:
5530 INPUT #1,RX,CX,GLOBAL.FMT$,WINDOW.FLAG$,BOLD$: GOSUB 7300
5540 FOR I=1 TO RX: FOR J=1 TO CX: INPUT #1,IND$(I,J),EQ$(I,J),VALUE(I,J): NEXT J,I
5550 CLOSE: ROW=1: COL=1: ROW.HOME=0: COL.HOME=0
5580 IF WINDOW.FLAG$="" THEN WINDOW.FLAG$=" "
5590 GOSUB 2600: RETURN
5600 '                          GET FILESPEC
5601 '
5610 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1:PRINT "Default = "+PREV.FILE$+"   ";
5620 INPUT;"Enter filespec for spreadsheet data file: ",A$
5630 IF A$="" THEN A$=PREV.FILE$
5640 IF INSTR(A$,".")=0 THEN A$=A$+".CAL"
5650 PREV.FILE$=A$
5660 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1:PRINT "Insert disk in specified or default drive; press any key: ";
5670 IF INKEY$="" THEN 5670
5680 GOSUB 900
5690 RETURN
5700 '                          ENTER EQUATION                          /E
5701 '
5710 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1: INPUT;"Enter equation: ",A$: GOSUB 5800: EQ$(ROW,COL)=B$
5720 IF IND$(ROW,COL)="" OR IND$(ROW,COL)="!" THEN IND$(ROW,COL)="G"
5730 I=ROW: J=COL: GOSUB 6100: GOSUB 1500
5740 RETURN
5800 '                          REGULARIZE CELL ADDRESS
5801 '
5810 B$="": ICELL=1: D$=LEFT$(A$,1)
5820 FOR II=1 TO LEN(A$): C$=D$: D$=MID$(A$,II+1,1): ICELL=ICELL+1
5825 IF C$>="a" THEN C$=CHR$(ASC(C$) AND &HDF)
5830 IF C$>="A" AND C$<=CX$ THEN ICELL=0 ELSE IF ICELL=1 THEN IF D$<"0" OR D$>"9" THEN B$=B$+"0"
5840 B$=B$+C$: NEXT
5850 RETURN
6000 '                          COMPUTE EQUATIONS                       /C
6001 '
6010 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1:PRINT "Computing...";: GOSUB 900
6020 FOR I=1 TO RX: FOR J=1 TO CX: GOSUB 6100: IF INKEY$<>CHR$(0)+CHR$(79) THEN NEXT J,I
6040 RETURN
6100 '                          PARSE EQUATION (I,J)
6101 '
6110 IF IND$(I,J)="" OR IND$(I,J)="!" OR EQ$(I,J)="" THEN RETURN
6120 VALUE.TMP=0: IOP(1)=1: VTOT(1)=0: LEV=1
6130 FOR II=1 TO LEN(EQ$(I,J)): A$=MID$(EQ$(I,J),II,1): GOSUB 6260: NEXT
6140 VALUE(I,J)=VTOT(1)
6150 GOSUB 1500: GOSUB 800: RETURN
6160 CL=ASC(A$)-64                              'OBTAIN ROW & COL
6165 IF INSTR("0123456789",MID$(EQ$(I,J),II+2,1)) THEN N=2 ELSE N=1
6167 RW=VAL(MID$(EQ$(I,J),II+1,N)): II=II+N
6170 VALUE.TMP=VALUE(RW,CL): RETURN
6180 B$="": CNT=-1                              'OBTAIN DECIMAL CONSTANT
6190 IF INSTR("0123456789. /",A$) THEN B$=B$+A$: CNT=CNT+1: A$=MID$(EQ$(I,J),II+CNT+1,1): IF A$<>"" THEN 6190
6195 GOSUB 2100: VALUE.TMP=VAL.B: II=II+CNT: RETURN
6200 '                                          'FUNCTIONS
6210 IF IOP(LEV)=1 THEN VTOT(LEV)=VTOT(LEV)+VALUE.TMP: RETURN
6220 IF IOP(LEV)=2 THEN VTOT(LEV)=VTOT(LEV)-VALUE.TMP: RETURN
6230 IF IOP(LEV)=3 THEN VTOT(LEV)=VTOT(LEV)*VALUE.TMP: RETURN
6240 IF IOP(LEV)=4 THEN VTOT(LEV)=VTOT(LEV)/VALUE.TMP: RETURN
6250 RETURN
6260 IF (A$>="A" AND A$<="Z") THEN GOSUB 6160: GOSUB 6200: RETURN
6261 IF (A$>="0" AND A$<="9") OR A$="." THEN GOSUB 6180: GOSUB 6200: RETURN
6262 IF A$="+" THEN IOP(LEV)=1 ELSE IF A$="-" THEN IOP(LEV)=2 ELSE IF A$="*" THEN IOP(LEV)=3 ELSE IF A$="/" THEN IOP(LEV)=4
6263 IF A$="(" THEN LEV=LEV+1: VTOT(LEV)=0: IOP(LEV)=1: RETURN
6264 IF A$=")" THEN VALUE.TMP=VTOT(LEV): LEV=LEV-1: GOSUB 6200
6265 RETURN
6300 '                          REPLICATION                             /R
6301 '
6310 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1: INPUT;"Enter source cell: ",INPUT.CELL$
6320 GOSUB 3230: SRC.ROW=START.ROW: SRC.COL=START.COL
6330 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1:PRINT "Multiple source cells? (Y/N): ";
6340 MULT$=INKEY$: IF MULT$="" THEN 6340 ELSE IF MULT$="Y" OR MULT$="y" THEN MULT$="Y" ELSE MULT$="N"
6350 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1:PRINT "(A)bsolute or (R)elative? ";
6360 REL$=INKEY$: IF REL$="" THEN 6360 ELSE IF REL$="R" OR REL$="r" THEN REL$="R" ELSE REL$="A"
6370 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1: INPUT;"Starting target cell: ",INPUT.CELL$: GOSUB 3230
6380 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1:INPUT;"Ending target cell: ",INPUT.CELL$: GOSUB 3330
6390 IF IANS$="N" THEN RETURN
6400 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1:PRINT "Replicating...";: GOSUB 900: S.COL$="A": S.ROW=1: S.R=SRC.ROW
6410 FOR I=START.ROW TO END.ROW: S.C=SRC.COL: FOR J=START.COL TO END.COL
6420 DIFF.ROW=I-S.R: DIFF.COL=J-S.C
6430 IND$(I,J)=IND$(S.R,S.C): EQ$(I,J)=EQ$(S.R,S.C): VALUE(I,J)=VALUE(S.R,S.C)
6440 IF REL$="R" THEN GOSUB 6600                        'ALTER EQUATION
6450 IF IND$(I,J)="" OR IND$(I,J)="!" OR EQ$(I,J)="" THEN GOSUB 1500 ELSE GOSUB 6120    'CALCULATE & DISPLAY
6460 IF MULT$="Y" AND START.COL-END.COL<>0 THEN S.C=S.C+1
6470 NEXT J
6480 IF MULT$="Y" AND START.ROW-END.ROW<>0 THEN S.R=S.R+1
6490 NEXT I
6499 RETURN
6600 '                          ALTER EQUATION(I,J)
6601 '
6602 IF IND$(I,J)="" OR IND$(I,J)="!" OR EQ$(I,J)="" THEN RETURN
6603 FOR II=1 TO LEN(EQ$(I,J))
6610 A$=MID$(EQ$(I,J),II,1)
6620 IF A$<S.COL$ OR A$>CX$ THEN 6690
6630 IF DIFF.COL<>0 THEN MID$(EQ$(I,J),II,1)=CHR$(ASC(A$)+DIFF.COL)
6635 IF DIFF.ROW=0 THEN II=II+2: GOTO 6690
6640 II=II+1: VA1=VAL(MID$(EQ$(I,J),II,2))
6645 IF VA1<S.ROW OR VA1>RX THEN 6670 ELSE VA1=VA1+DIFF.ROW
6650 IF VA1>9 THEN A1$=RIGHT$(STR$(VA1),2) ELSE A1$="0"+RIGHT$(STR$(VA1),1)
6660 MID$(EQ$(I,J),II,2)=A1$
6670 II=II+1
6690 NEXT II: RETURN
6700 '                          DELETE                                  /D
6701 '
6710 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1:PRINT "Delete a (R)ow, (C)olumn, or none (RETURN): ";
6720 IANS$=INKEY$: IF IANS$="" THEN 6720 ELSE IANS$=CHR$(ASC(IANS$) AND &HDF)
6730 IF IANS$<>"R" AND IANS$<>"C" THEN RETURN
6735 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1:PRINT "Deleting...";: GOSUB 900
6740 IF IANS$="R" THEN 6820
6750 FOR J=COL TO (CX-1): FOR I=1 TO RX: IND$(I,J)=IND$(I,J+1): EQ$(I,J)=EQ$(I,J+1): VALUE(I,J)=VALUE(I,J+1): NEXT I,J
6780 FOR I=1 TO RX: IND$(I,CX)="": EQ$(I,CX)="": VALUE(I,CX)=0: NEXT
6790 S.ROW=1: S.COL$=CHR$(COL+64): DIFF.COL=-1: DIFF.ROW=0
6800 FOR I=1 TO RX: FOR J=1 TO CX: GOSUB 6600: NEXT J,I
6810 GOSUB 1400: RETURN
6820 FOR J=1 TO CX: FOR I=ROW TO (RX-1): IND$(I,J)=IND$(I+1,J): EQ$(I,J)=EQ$(I+1,J): VALUE(I,J)=VALUE(I+1,J): NEXT I,J
6850 FOR I=1 TO CX: IND$(RX,I)="": EQ$(RX,I)="": VALUE(RX,I)=0: NEXT
6860 S.ROW=ROW: S.COL$="A": DIFF.COL=0: DIFF.ROW=-1
6870 FOR I=1 TO RX: FOR J=1 TO CX: GOSUB 6600: NEXT J,I
6880 GOSUB 1400: RETURN
6900 '                          INSERT                                  /I
6901 '
6910 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1:PRINT "Insert a (R)ow, (C)olumn, or none (RETURN): ";
6920 IANS$=INKEY$: IF IANS$="" THEN 6920 ELSE IANS$=CHR$(ASC(IANS$) AND &HDF)
6930 IF IANS$<>"R" AND IANS$<>"C" THEN RETURN
6935 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1:PRINT "Inserting...";: GOSUB 900
6940 IF IANS$="R" THEN 7020
6950 FOR J=(CX-1) TO COL STEP -1: FOR I=1 TO RX: IND$(I,J+1)=IND$(I,J): EQ$(I,J+1)=EQ$(I,J): VALUE(I,J+1)=VALUE(I,J): NEXT I,J
6980 FOR I=1 TO RX: IND$(I,COL)="": EQ$(I,COL)="": VALUE(I,COL)=0: NEXT
6990 S.ROW=1: S.COL$=CHR$(COL+64): DIFF.COL=1: DIFF.ROW=0
7000 FOR I=1 TO RX: FOR J=1 TO CX: GOSUB 6600: NEXT J,I
7010 GOSUB 1400: RETURN
7020 FOR J=1 TO CX: FOR I=(RX-1) TO ROW STEP -1: IND$(I+1,J)=IND$(I,J): EQ$(I+1,J)=EQ$(I,J): VALUE(I+1,J)=VALUE(I,J): NEXT I,J
7050 FOR J=1 TO CX: IND$(ROW,J)="": EQ$(ROW,J)="": VALUE(ROW,J)=0: NEXT
7060 S.ROW=ROW: S.COL$="A": DIFF.COL=0: DIFF.ROW=1
7070 FOR I=1 TO RX: FOR J=1 TO CX: GOSUB 6600: NEXT J,I
7090 GOSUB 1400: RETURN
7100 '                          PRINT                                   /P
7101 '
7110 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1:PRINT "Starting column (A-"; CX$; "): ";
7120 IANS$=INKEY$: IF IANS$="" THEN 7120 ELSE IANS$=CHR$(ASC(IANS$) AND &HDF)
7130 IF IANS$=CHR$(13) THEN S.COL=COL ELSE S.COL=ASC(IANS$)-64
7140 IF S.COL<1 OR S.COL>CX THEN BEEP:PRINT IANS$+"...OUT OF RANGE";: FOR I=1 TO 999: NEXT: GOTO 7100
7150 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1:PRINT "Printing";LPT;" columns to "+PRINT.FILE$+"...";: GOSUB 900
7155 OPEN "O",#1,PRINT.FILE$: PRINT #1,
7160 IP=S.COL+INT(LPT/9)-1: IF IP>CX THEN IP=CX
7170 FOR I=1 TO RX: FOR J=S.COL TO IP: GOSUB 7200: IF INKEY$=CHR$(0)+CHR$(79) THEN 7190 ELSE NEXT J: PRINT #1,: NEXT I
7190 CLOSE: RETURN
7200 '                          PRINT CELL
7205 IF IND$(I,J)="" THEN RETURN
7210 PRINT #1, TAB(((J-S.COL)+1)*9-8);
7220 Q$=IND$(I,J)
7230 IF Q$="!" THEN PRINT #1, EQ$(I,J);: RETURN
7240 GOSUB 1600
7250 IF Q$="F" THEN PRINT #1, F$; ELSE PRINT #1, USING F$;VALUE(I,J);
7260 RETURN
7300 '                          DEFAULT VARIABLES
7305 A$=""
7310 IF RX>RMAX THEN RX=RMAX: A$="0"
7320 IF CX>CMAX THEN CX=CMAX: A$="0"
7330 SR=22: IF SR>RX THEN SR=RX
7340 SC=8:  IF SC>CX THEN SC=CX
7350 CX$=CHR$(CX+64)
7360 IF A$<>"0" THEN RETURN
7370 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1:BEEP:PRINT "MAXIMUM MATRIX SIZE IS";RX;"BY";CX;
7380 FOR I=1 TO 1999: NEXT
7390 RETURN
7400 '                          CHANGE DEFAULTS                         /Z
7410 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1:PRINT STR$(RX);: INPUT;":  Enter maximum row: ",A$: IF A$<>"" THEN RX=VAL(A$)
7420 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1:PRINT CX$+" ("+RIGHT$(STR$(CX),2)+")";: INPUT;":  Enter maximum column: ",A$: IF A$<>"" THEN IF A$>="A" AND A$<="z" THEN CX=ASC(A$)-64 ELSE CX=VAL(A$)
7430 GOSUB 7300
7440 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1:PRINT STR$(LPT);: INPUT;"  Enter printer width: ",A$: IF A$<>"" THEN LPT=VAL(A$)
7450 WIDTH "lpt1:",LPT
7455 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1:PRINT PRINT.FILE$;: INPUT;":  Enter file or device name for printed output:  ",A$: IF A$<>"" THEN PRINT.FILE$=A$
7460 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1:PRINT BOLD$;: INPUT;": Bold ON or OFF? ",A$
7465 IF A$<>"" THEN BOLD$=A$
7470 GOSUB 2600: RETURN
7500 '                          MODIFY VALUE                            /M
7501 '
7510 LOCATE 1,1: PRINT SPC(79);: LOCATE 1,1: INPUT;"finish equation: ",A$: GOSUB 5800: C$=B$
7520 GOSUB 3200: GOSUB 3300: IF IANS$="N" THEN RETURN
7525 LOCATE 1,1: PRINT SPC(79);: LOCATE 1,1: PRINT "Modifying...";: GOSUB 900
7530 FOR I=START.ROW TO END.ROW: FOR J=START.COL TO END.COL
7535 IF EQ$(I,J)<>"" OR IND$(I,J)="" OR IND$(I,J)="!" THEN 7570
7537 VALUE.TMP=0: IOP(1)=1: VTOT(1)=VALUE(I,J): LEV=1
7540 FOR II=1 TO LEN(C$): A$=MID$(C$,II,1): EQ$(I,J)=C$: GOSUB 6260: NEXT II
7560 EQ$(I,J)="": VALUE(I,J)=VTOT(1): GOSUB 1500: GOSUB 800
7570 NEXT J,I
7580 RETURN
7600 '                          HELP MENU                               /H
7610 CLS
7611 PRINT "/A  AVERAGE  -generates the equation for averaging a series of cells"
7612 PRINT "/B  BLANK    -erases a series of cells leaving them blank"
7613 PRINT "/C  COMPUTE  -computes all equations"
7614 PRINT "/D  DELETE   -deletes the current Row or Column"
7615 PRINT "/E  EQUATION -enters an equation into the current cell"
7616 PRINT "/F  FORMAT   -sets the number of decimal places displayed"
7617 PRINT "/G  GOTO     -allows you to goto any cell including those off screen"
7618 PRINT "/H  HELP     -displays these helpful messages"
7619 PRINT "/I  INSERT   -inserts an entire blank row or column before the current cell"
7620 PRINT "/J  JUMP     -causes the cursor to auto. jump across the Row or Column"
7622 PRINT "/L  LOAD     -loads a previously SAVEd Calc file"
7623 PRINT "/M  MODIFY   -modifies a series of cells by an equation you enter"
7624 PRINT "/N  NEW      -reruns Calc from the start"
7626 PRINT "/P  PRINT    -prints as much of the matrix as possible from a given column"
7627 PRINT "/Q  QUIT     -returns you to MS-DOS"
7628 PRINT "/R  REPLICATE cells.  Equations can be copied Relative to their position"
7629 PRINT "/S  SAVE     -saves the current matrix on disk"
7630 PRINT "/T  TOTAL    -generates the equation for the total of a series"
7633 PRINT "/W  WINDOW   -places Row 1 or Col A on screen at all times (for labels)"
7636 PRINT "/Z -changes the maximum Row and Column, and the printer defaults"
7637 PRINT "Special keys: HOME = refresh; END = stop; =/+ = enter value; ' = enter label"
7690 PRINT :PRINT "Press any key to continue: ";
7695 IF INKEY$="" THEN 7695 ELSE GOSUB 2600: RETURN
7699 '
8000 '                          INITIALIZE SCREEN VAIABLES
8001 '
8005 BELL$=CHR$(7)                              '"YOU CAN RING MY BELLELEL,"
8010 E$=CHR$(27)                                'ESCAPE
8020 L$=E$+CHR$(89)                             'LOCATE CURSOR STRING
8030 B=31                                       '  "      "    BIAS
8040 CL$=E$+"E"                                 'CLEAR SCREEN STRING
8045 Z$=E$+"K"                                  'ERASE TO EOL
8050 HOME$=L$+CHR$(B+1)+CHR$(B+1)               'HOME CURSOR
8055 HOME$=HOME$+Z$+HOME$                       'HOME AND CLEAR STATUS LINE
8060 WIDTH 80: WIDTH PRINT.FILE$,LPT
8064 RAM = &HB000                               'LOCATION OF MONO SCREEN MEMORY
8065 DEF SEG = 0: IF PEEK(&H449)=7 THEN GOTO 8075
8070 RAM=&HB800                                 'LOCATION OF COLOR SCREEN MEMORY
8075 DEF SEG=RAM                                'SET UP FOR POKING CURSOR
8080 'PRINT E$+"x5" E$+"x1" E$+"y8"      'NO CURSOR, 25'TH LINE, NO LINE FEEDS
8090 RETURN
9000 '                          ERROR HANDLER
9005 BEEP
9010 IF ERR=53 THEN LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1:PRINT "FILE NOT FOUND.";: GOTO 9070
9060 LOCATE 1,1:PRINT SPC(79);:LOCATE 1,1:PRINT "ERROR "ERR" IN LINE NUMBER "ERL;
9070 PRINT "  Press return to continue:";
9080 IF INKEY$="" THEN 9080
9090 CLOSE: RESUME 300
```
{% endraw %}

## SCRNSAVE.ASM

{% raw %}
```
		page	60,132
		page
;-----------------------------------------------------------------------------;
;	Scrnsave - a program to disable a video monitor after 3 minutes.      ;
;	Published:	SOFTALK for the IBM Personal Computer		      ;
;			December 1983					      ;
;			'Save your Monitor Screen'; pages 81-86               ;
;	Author	 -	John Socha					      ;
;	Transcribed	John Teichert					      ;
;									      ;
;	Note that several inconsistencies appeared in the article in Softalk  ;
;	notably the video disable bit was continually described in the text   ;
;	as bit 2 of the 3x8 register.  The bit was actually bit three and     ;
;	was correct as the program was written. The cursor setting for	      ;
;	the monochrome was printed as 0C0BH serveral times when it is	      ;
;	actually 0B0CH again correct in the program code.		      ;
;									      ;
;	Being a lazy typist I have taken several liberties with the labels    ;
;	used in the program.						      ;
;	TOD for TIME_OF_DAY						      ;
;	KB  for keyboard  etc ad nauseum.				      ;
;-----------------------------------------------------------------------------;
;	change	date	    author	      description		      ;
;	1     01/28/84	John Teichert  Add ability to specify the time before ;
;				       screen is disabled on command line     ;
;	2     01/28/84	John Teichert  Add ability to change time out value   ;
;				       and prevent multiple invocation	      ;
;				       problems 			      ;
;	3     02/02/84	John Teichert  Add ability to disable scrnsave before ;
;				       using programs that take over video    ;
;				       and keyboard interrupts. 	      ;
;-----------------------------------------------------------------------------;
		page
;----------------------------------------------------------------------------;
;	interrupt vectors for clock; keyboard; and video		     ;
;----------------------------------------------------------------------------;

VECTORS 	SEGMENT AT 0H
		ORG	8H*4
TOD_INT_VECTOR		LABEL	DWORD	; time of day interrupt vector
		ORG	9H*4
KB_INT_VECTOR		LABEL	DWORD	; Keyboard interrupt vector
		ORG	10H*4
VIDEO_INT_VECTOR	LABEL	DWORD	; Video interrupt vector
VECTORS 	ENDS

;-----------------------------------------------------------------------------;
;	The data area starting at 400H is used by ROM BIOS routines.	      ;
;	ADDR_6845 contains the base address of the current display	      ;
;	adapter and CRT_MODE_SET contains the current setting of the 3X8      ;
;	display register.  Here X is B for the monochrome display adapter     ;
;	and D for the color-graphics display adapter.			      ;
;-----------------------------------------------------------------------------;

ROM_BIOS_DATA	SEGMENT AT 40H
		ORG	10H
EQUIP_FLAG	DW	?		; Used to determin display type
		ORG	60H
CURSOR_MODE	DW	?		; Current cursor mode(start,stop line)
		ORG	63H
ADDR_6845	DW	?		; Base address of active display
CRT_MODE_SET	DB	?		; Current setting of 3X8 register
ROM_BIOS_DATA	ENDS
		page
;-----------------------------------------------------------------------------;
;	Start of local data and executable code 			      ;
;-----------------------------------------------------------------------------;

CODE_SEG	SEGMENT
		ASSUME	CS:CODE_SEG
		ORG	100H		; For Com files a must
BEGIN:		JMP	INIT_VECTORS	; Jump over data areas and init
SCRSMSG 	DB	'SCRS1.00'
ROM_TOD_INT	DD	?		; Save area for ROM interrupt
ROM_KB_INT	DD	?		;   addresses
ROM_VIDEO_INT	DD	?

TIMER_DELAY	DW	0		; Delay count b4 turning off display
MIN_COUNTER	DW	?		; Clock ticks 3276D=3minutes
OLD_CURSOR_TYPE DW	?		; Hold old cursor type

		page
;-----------------------------------------------------------------------------;
;	Turn video display after MIN_COUNTER ticks have occurred	      ;
;	Calls:		ROM_TOD_INT					      ;
;	Reads:		ADDR_6845,CRT_MODE_SET				      ;
;      Writes:		MIN_COUNTER,OLD_CURSOR_TYPE			      ;
;-----------------------------------------------------------------------------;

INTERCEPT_TOD	PROC	NEAR
	PUSH	AX
	PUSH	DS
	MOV	AX,CS			; Set dataseg to code seg
	MOV	DS,AX
	ASSUME	DS:CODE_SEG		; Tell assembler
	MOV	AX,7FFFH		; Check to see if not to touch
	CMP	AX,TIMER_DELAY		; Q. leave alone
	JE	GOTO_ROM_TOD		;   Yes bypass
	DEC	MIN_COUNTER		; Q. Minutes eaten up
	JZ	TURN_VIDEO_OFF		; Yes turn off video
	JG	GOTO_ROM_TOD		; No leave it
	MOV	MIN_COUNTER,0		; Already off, reset counter
GOTO_ROM_TOD:
	POP	DS
	POP	AX
	ASSUME	DS:NOTHING		; Drop Data seg addressability
	JMP	ROM_TOD_INT		; Resume further tod processing
TURN_VIDEO_OFF:
	ASSUME	DS:CODE_SEG
	PUSH	BX
	PUSH	CX
	PUSH	DX
	MOV	AH,3			; Get current cursor type into CX
	PUSHF				; Simulate an interrupt
	CALL	ROM_VIDEO_INT		; On to regular video int
	MOV	OLD_CURSOR_TYPE,CX	; Save value
	MOV	CH,0FH			; Setup to remove cursor
	MOV	CL,0
	MOV	AH,1
	PUSHF
	CALL	ROM_VIDEO_INT		; On to regular video int
	POP	DX
	POP	CX
	POP	BX
	PUSH	DX			; Turn off video
	MOV	AX,ROM_BIOS_DATA
	MOV	DS,AX
	ASSUME	DS:ROM_BIOS_DATA
	MOV	DX,ADDR_6845		; Get video base
	ADD	DX,4			; IO address for 3X8
	MOV	AL,CRT_MODE_SET
	AND	AL,0F7H 		; Turn off video enable bit
	OUT	DX,AL
	POP	DX
	JMP	GOTO_ROM_TOD

INTERCEPT_TOD	ENDP
		page
;-----------------------------------------------------------------------------;
;	This procedure resets the timer count to 0CCCH and turns the display  ;
;	on if it was off						      ;
;-----------------------------------------------------------------------------;
RESET_COUNTER	PROC	NEAR
	PUSH	AX
	PUSH	DX
	PUSH	DS
	MOV	AX,CS
	MOV	DS,AX
	ASSUME	DS:CODE_SEG
	CMP	MIN_COUNTER,0		; Q. Was display off
	JG	VIDEO_NOT_OFF		; No then reset
	PUSH	DS			; YES turn video on
	MOV	AX,ROM_BIOS_DATA
	MOV	DS,AX			; setup addressability
	ASSUME	DS:ROM_BIOS_DATA
	MOV	DX,ADDR_6845		; Addr of display
	ADD	DX,4			; 3X8 reg
	MOV	AL,CRT_MODE_SET
	OR	AL,8
	OUT	DX,AL			; Enable Video
	POP	DS
	ASSUME	DS:CODE_SEG
	PUSH	CX
	MOV	CX,OLD_CURSOR_TYPE
	MOV	AH,1			; Tell BIOS to restore old cursor
	PUSHF
	CALL	ROM_VIDEO_INT
	POP	CX
VIDEO_NOT_OFF:
	MOV	AX,TIMER_DELAY
	MOV	MIN_COUNTER,AX
	POP	DS
	POP	DX
	POP	AX
	RET
RESET_COUNTER	ENDP

INTERCEPT_KB_INT	PROC	NEAR
	ASSUME	DS:NOTHING
	CALL	RESET_COUNTER		; Reset timer counter
	JMP	ROM_KB_INT		; Continue with keyboard
INTERCEPT_KB_INT	ENDP
	page
;-----------------------------------------------------------------------------;
;	This procedure resets the cursor type to the default cursor type      ;
;	for the display adapter in use:0607h for the color/graphics adapter   ;
;	0B0CH for the monochrome display.				      ;
;-----------------------------------------------------------------------------;

SET_CURSOR_MODE 	PROC	NEAR
	PUSH	AX
	PUSH	CX
	PUSH	DS
	MOV	AX,ROM_BIOS_DATA
	MOV	DS,AX			; Addressability to ROM BIOS
	ASSUME	DS:ROM_BIOS_DATA
	MOV	AX,EQUIP_FLAG
	AND	AL,30H			; Isolate adapter info
	MOV	CX,0607H		; Setup for color
	CMP	AL,30H			; Q. Is Mono active
	JNE	COLOR_ACTIVE		; No color adapter is
	MOV	CX,0B0CH		; So setup for mono
COLOR_ACTIVE:
	MOV	AH,1			; Set up for video io call
	PUSHF				; Simulate interrupt by pushing flags
	CALL	ROM_VIDEO_INT
	POP	DS
	POP	CX
	POP	AX
	RET
SET_CURSOR_MODE 	ENDP

;-----------------------------------------------------------------------------;
;	This procedure resets the timeout counter and passes control to       ;
;	 ROM VIDEO IO Routines. 					      ;
;-----------------------------------------------------------------------------;
INTERCEPT_VIDEO_IO	PROC	NEAR
	ASSUME	DS:NOTHING
	CMP	AH,0FFH 		; Dummy interupt to see if installed
	JNE	IVI_CHK_RST		; Check to see if reset
	MOV	AX,CS:WORD PTR SCRSMSG[0]   ; Move first two bytes in
	MOV	BX,CS:WORD PTR SCRSMSG[2]   ; Move second two bytes
	JMP	NOT_MODE_SET		; EXIT
IVI_CHK_RST:
	CMP	AH,0FEH 		; Reset parms
	JNE	IVI_RST_CNT
	MOV	CS:TIMER_DELAY,BX	; Reset parms
	JMP	NOT_MODE_SET
IVI_RST_CNT:
	CALL	RESET_COUNTER
	PUSHF				; Simulate interrupt
	CALL	ROM_VIDEO_INT
	OR	AH,AH			; Q. Asking for set mode
	JNZ	NOT_MODE_SET
	CALL	SET_CURSOR_MODE 	; Yes so set to default
NOT_MODE_SET:
	IRET
INTERCEPT_VIDEO_IO	ENDP
	page
;-----------------------------------------------------------------------------;
;	This procedure intializes the interrupt vectors 		      ;
;-----------------------------------------------------------------------------;
;									      ;
;	NOTE --- NOTE --- NOTE --- NOTE --- NOTE --- NOTE --- NOTE	      ;
;	BOTH DOS 1.1 AND DOS 2.0 HAVE FUNCTION 25 FOR PERFORMING INTERRUPT    ;
;	RESETING.  DOS 2.0 HAS AN INTERRUPT FUNCTION 35 FOR OBTAINING THE     ;
;	ADDRESS OF A INTERRUPT.  PERSONS WISHING TO PERFORM INTERRUPT	      ;
;	RESETTING SHOULD USE THE OFFICIAL MECHANISMS AS THIS MAY BECOME       ;
;	IMPORTANT IN MULTITASKING SITUATIONS ONCE IBM WAKES UP. 	      ;
;					John Teichert			      ;
;									      ;
;-----------------------------------------------------------------------------;
INIT_VECTORS		PROC	NEAR
	ASSUME	DS:CODE_SEG		; Setup to analyze input if any
	ASSUME	SS:CODE_SEG		; Setup stack seg register address
	MOV	SP,100H 		; Point to top of unformatted area
	MOV	SI,080H 		; Point to unformatted parameter area
	CLD				; Clear direction flag
	LODSB				; Get first byte into ax
	OR	AL,AL			; See if any input
	JZ	TIM_DEFAULT		; No use default of 3 minutes
	XOR	AH,AH			; Clear high order register
	MOV	CX,AX			; Move to count register
	XOR	BX,BX			; Zero Working Reg
TIM_LOOP:
	LODSB				; Get first data byte
	CMP	AL,' '                  ; Is it blank
	JNE	TLP000			; No so bypass decrement loop would do
	LOOP	TIM_LOOP		; Yes loop back
TIM_DEFAULT:
	MOV	AL,'3'                  ; Set default value
	MOV	CX,1			; Fake having a parm of 3
	JMP	SHORT TVL001		;
TLP000:
	JMP	SHORT TVL000A		; bypass LODSB
TIM_VAL_LOOP:				;
	LODSB				; Get another value
TVL000A:
	CMP	AL,'-'                  ; Going for disable
	JNE	TVL000B 		; NO continue
	MOV	AX,7FFFH		; Assume they are so disable
	MOV	TIMER_DELAY,AX		;   and set value
	JMP	CHK_IS_INSTALLED	; Check whether or not been here
TVL000B:
	CMP	AL,'0'                  ; Q. Is it 0 or above
	JGE	TVL000			;    Yes check high range
	JMP	BAD_PARM		;    No bad
TVL000:
	CMP	AL,'9'                  ; Q. Is it 9 or below
	JLE	TVL001			;    Yes cont
	JMP	BAD_PARM		;    No bad
TVL001:
	SUB	AL,'0'                  ; Get value relative to hex 0
	MOV	BX,AX			; Save for time being
	MOV	AX,TIMER_DELAY		; Get prior value
	MUL	PWR10			; Multiply by 10
	JNO	TVL002
	JMP	BAD_PARM		; If overflowed then too high
TVL002:
	ADD	AX,BX			; Add last value
	MOV	TIMER_DELAY,AX		; Move it back in
	LOOP	TIM_VAL_LOOP		; if another
	MOV	AX,TIMER_DELAY		; Now figure out delay time
	CMP	AX,MAX_DELAY
	JLE	TVL003
	JMP	BAD_PARM
TVL003:
	CMP	AX,MIN_DELAY
	JGE	TVL004
	JMP	BAD_PARM
TVL004:
	MUL	SEC_MIN 		; Multiply by num seconds in minute
	MUL	TICKS_SEC		; timer number timer tics per second
	MOV	TIMER_DELAY,AX
CHK_IS_INSTALLED:
	MOV	AH,0FFH 		; Setup Inquiry
	INT	10H			; Call Video interupt
	CMP	AX,WORD PTR SCRSMSG[0]	; If up already this will find out
	JNE	SET_VECTORS		;  Nope so init
	CMP	BX,WORD PTR SCRSMSG[2]	;  Make real sure
	JNE	SET_VECTORS		;  Nope so init
	MOV	BX,TIMER_DELAY		; Get value to change to
	MOV	AH,0FEH 		; Set for change
	INT	10H			; To the video interupt
	JMP	SPILL_CHANGED		; Tell the world
	page
SET_VECTORS:
	ASSUME	DS:VECTORS		; Setup data seg for vectors
	MOV	AX,VECTORS
	MOV	DS,AX
	CLI				; Disable interrupts while manipulating
	MOV	AX,TOD_INT_VECTOR	; Get tod interrupt vector
	MOV	ROM_TOD_INT,AX		; Save
	MOV	AX,TOD_INT_VECTOR[2]
	MOV	ROM_TOD_INT[2],AX
	MOV	TOD_INT_VECTOR,OFFSET INTERCEPT_TOD
	MOV	TOD_INT_VECTOR[2],CS

	MOV	AX,KB_INT_VECTOR
	MOV	ROM_KB_INT,AX
	MOV	AX,KB_INT_VECTOR[2]
	MOV	ROM_KB_INT[2],AX
	MOV	KB_INT_VECTOR,OFFSET INTERCEPT_KB_INT
	MOV	KB_INT_VECTOR[2],CS

	MOV	AX,VIDEO_INT_VECTOR
	MOV	ROM_VIDEO_INT,AX
	MOV	AX,VIDEO_INT_VECTOR[2]
	MOV	ROM_VIDEO_INT[2],AX
	MOV	VIDEO_INT_VECTOR,OFFSET INTERCEPT_VIDEO_IO
	MOV	VIDEO_INT_VECTOR[2],CS

	MOV	AX,TIMER_DELAY
	MOV	MIN_COUNTER,AX

	STI				; NOW that all vecotrs are set reenable
	CALL	SET_CURSOR_MODE 	; Set cursor mode to default
	MOV	DX,OFFSET INIT_VECTORS
	INT	27H			; Terminate but stay resident
	page
SPILL_CHANGED:
	MOV	AH,9			; DOS put video
	MOV	DX,OFFSET SC_MSG1	; Message to spill
	INT	21H			; To the op sys
	JMP	EXIT_DOS		; That's all folks

BAD_PARM:
	MOV	AH,9			; DOS put video interupt
	MOV	DX,OFFSET BP_MSG1	; More for interupt
	INT	21H			; DOS interrupt
	MOV	AH,9
	MOV	DX,OFFSET BP_MSG2
	INT	21H
	MOV	AH,9
	MOV	DX,OFFSET BP_MSG3
	INT	21H
EXIT_DOS:
	INT	20H			; DOS return
INIT_VECTORS	ENDP

PWR10		DW	10		; Power of 10
TICKS_SEC	DW	18		; Number of timer ticks per second
MAX_DELAY	DW	30		; Max delay time
MIN_DELAY	DW	3		; Set Minimum to 3 minutes
SEC_MIN 	DW	60		; Number of secs in minute
BP_MSG1 DB	'    ERR Usage:  scrnsave  [nn] [-d]',13,10,'$'
BP_MSG2 DB	'        where nn = ( 3 - 30 )',13,10,'$'
BP_MSG3 DB	'              -d = disable scrnsave',13,10,'$'

SC_MSG1 DB	'  Scrnsave time out value changed',13,10,'$'

CODE_SEG	ENDS
	END	BEGIN
```
{% endraw %}

## SCRNSAVE.DOC

{% raw %}
```

           SCRNSAVE 1 SYNTAX:  scrnsave  [nn] [-d]
                               where nn = (3 - 30)
                                     -d = disable scrnsave


    Looking over the office with all the PC screens merrily lit up (even though
no one was using them), burning Lotus 123 and Visi-Calc into the screens, it 
seemed like SCRNSAVE from Softalk magazine was just the thing to save those 
one-eyed CRT's.  How marvelous--after three minutes Blinko!, the screen fades 
and preserves those vital phosphors.

    The trouble started with Debug.  Just as you got to the data where things
were going wrong--Blinko!  Hit a key and lose concentration.  The real killer 
was our 3278 emulator.  The first fix was the ability to specify the timeout
limit on the command line.  But the 3278 emulator took over all the keyboard
and display interrupts, and after 10 minutes the screen went out anyway and 
you felt silly tring to get it back on.  Controlling time out wasn't enough, 
now I needed to disable it too.  Sooooooooo SCRNSAVE 1 was born.


   SCRNSAVE 1 FEATURES AND PROBLEMS RESOLVED:
   ------------------------------------------

   1.  Fixed   - Mulitple invocation used to eat up memory.  Scrnsave 1 uses 
       the standard DOS exit when invoked multiple times.

   2.  Feature - Specify timeout value in minutes on command line.  Scrnsave
       now accepts values between 3 minutes and 30 minutes.

   3.  Feature - Disable Scrnsave when necessary from command line with the
       -d option.

   4.  NICE    - Scrnsav1 occupies only 44 more bytes than the original
       (592 as oppossed to 544) although the command module is twice as large.


   PROBLEMS NOT RESOLVED:
   ----------------------

   1. Problem - Scrnsave does not use the function 25 to set interrupt vectors
      nor function 35 to get the vectors.  This should not be a problem until
      multi-tasking arives.

   2. Problem - Since Scrnsave uses a dummy function in the video display
      interrupt 10 (AH = X'FF' and AH = X'FE'), there is the potential problem
      of interfering with other programs taking over this interrupt and using
      the same invalid function numbers.  However, this is very unlikely.


                                                     John Teichert
                                                     Atlanta, Ga.

```
{% endraw %}

## SDIR1.DOC

{% raw %}
```
        SDIR - SORTED DIRECTORY COMMAND, Version 1.30     Nov. 1983

    SDIR [d:][filename[.ext]] [options]
     [filespec] same as for DIR command

     [options]  * /P - Print image - No Pause, erase, etc.
                * /C - Single Column display.
                * /E - No screen Erase.
                * /A - List All (including hidden) files.
                  /X - Sort by EXtension.
                  /S - Sort by Size.
                  /D - Sort by Date/time.
                  /N - No sort, original order.

       Default = *.* sorted by name.ext with screen erase.
       * - Option may be combined with other options.

	The bottom line displays the total number of file listed, the
    number of bytes they contain, and the number of bytes free on the
    diskette.   The directory will pause when the screen is full  un-
    till a key is struck.  The /P option (Print image)  turns off the
    pause and screen erase for use when printing or  in a batch file.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0224

     Volume in drive A has no label
     Directory of A:\

    README            1126   1-01-80   2:12a
    PC-CALC  DOC     65280   3-20-84   6:38p
    PC-CALC  BAS     32085   7-15-84   6:41a
    PC-CALC  EXE     50944   7-15-84   6:50a
    SCRNSAVE COM       688   4-20-84   3:16a
    SCRNSAVE DOC      2397   4-23-84   9:09a
    SCRNSAVE ASM     13312   3-20-84   6:20p
    KBUFF    DOC      3015   5-27-84   9:28a
    KBUFF    COM        50   4-04-84  10:12a
    SDIR1    COM      1555  11-12-83   1:05a
    SDIR1    DOC      1004  11-15-83   1:18p
    CRC      TXT      1076  11-16-84   6:47a
    CRCK4    COM      1536  10-21-82   7:54p
           13 file(s)     174068 bytes
                          142336 bytes free
