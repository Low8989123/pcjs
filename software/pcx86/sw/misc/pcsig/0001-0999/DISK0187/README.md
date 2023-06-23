---
layout: page
title: "PC-SIG Diskette Library (Disk #187)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0187/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0187"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "COMMUNICATION NO 2"

    This disk contains various communications programs.  Included is
    AUTODIAL.BAS, an auto telephone dialer; BASECONV.BAS which converts
    to/from hex, binary, decimal; EZSIG3.HLP which prints out a guide to
    SIG functions and commands, it is meant to be printed onto six pages
    and kept handy by your terminal while using the SIG; and HAYSMODM.BAS
    a Hayes SmartModem demo.
    
    System Requirements: BASIC; modem.
    
    How to Start: To run the BASIC programs, consult the directions in
    GETTING STARTED for your configuration.
    
    File Descriptions:
    
    AUTODIAL BAS  Auto telephone dialer
    HAYSMODM BAS  Hayes SmartModem demo - nifty!
    EZSIG3   HLP  CompuServe IBM SIG instructions  (1/84)
    CONVERT  BAS  Converts EXE & COM files to BASIC for transmission (V1.1)
    BASECONV BAS  Converts to/from hex, binary, decimal  (Robert West)
    PC-SPEAK BAS  Data communications program by Larry Jordan
    KILLNULL BAS  Converts nulls in a file to spaces
    TALK450  DOC  Documentation on how to speed up Hayes to 450 baud
    TALK450  MRG  BASIC code to program 8250 to run at 450 baud
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## AUTODIAL.BAS

{% raw %}
```bas
12000 '---------------------- AUTO PHONE DIALER -------------------------------
12010 DEFINT A-Z:ON ERROR GOTO 15000:COMMON N,RAN$,IN$,NBR$,SRT$,S,CR$,ESC$:SRT$=RAN$+".SRT":DIM I1$(1000),I1(1000)
12015 I=0:MN=8:RI=0:KEY 9,""
12017 OPEN "R",#2,RAN$,79
12020 FIELD 2, 15 AS CF$, 2 AS SF$, 5 AS ZF$, 12 AS PHF$, 20 AS STF$, 10 AS N1F$, 15 AS N2F$
12100 CLS:PRINT :PRINT
12110 LOCATE 2,5:PRINT "     NAME";TAB(38)"PHONE";
12120 LOCATE 3,1:PRINT STRING$(50,223):PRINT
12125 PAGE=1
12130 IF S=1 THEN OPEN "i",1,SRT$:GOTO 12150 'S1=Sorted file presen
12140 FOR L= 1 TO N
12150 IF S=1 THEN IF EOF(1) GOTO 12270
12160 IF S=1 THEN INPUT#1,I:GOTO 12190
12170 IF S=1 THEN IF I$<>"" THEN I=VAL(RIGHT$(I$,(LEN(I$)-6))):GOTO 12190
12180 I=L
12190 GET 2,I
12200 P$=N1F$+N2F$+PHF$+STF$+CF$+SF$+" "+ZF$
12210 PRINT "  ";MID$(P$,1,INSTR(P$,"\")-1);:PRINT TAB(16) MID$(P$,11,INSTR(11,P$,"\")-11) TAB(33) MID$(P$,26,12)
12250 IF S=1 THEN RI=RI+1 ELSE RI=I
12260 FOR PAGER%= 17 TO 1003 STEP 17:IF RI= PAGER% THEN GOSUB 12300
12261 NEXT PAGER%
12262 IF S=1 THEN 12150
12265 NEXT
12270 CLOSE 1
12280 GOSUB 12300:CLOSE 2:GOTO 12015
12300 DEF SEG:POKE 91,5:POKE 92,22'Stop scrolling on first 5 lines
12302 LOCATE 5,1:PRINT STRING$(1,16):LOCATE 5,46:PRINT STRING$(1,17):CP%=5 :CT%=5:IF PAGE=1 AND N>17 THEN CB%=21 ELSE CB%=(RI-(17*(PAGE-1)))+4
12305 GOSUB 13400
12310 LOCATE 23,5:PRINT "Select number you wish to dial with cursor  keys.";
12320 I$=INKEY$:IF I$="" THEN 12320
12325 IF I$=CHR$(27) THEN 12327 ELSE 12330
12327 CLOSE 1,#2:DEF SEG:POKE 91,1:POKE 92,24:CLS:LOCATE 19,24:COLOR 15,0:PRINT "Loading main program..............":COLOR 7,0:CHAIN "A:MAILIST1.BAS",110
12330 IF LEN(I$) =2 THEN 12510 ELSE 12320
12500 '------------------------- CURSOR CONTROL ---------------------------
12510 IF RIGHT$(I$,1)=CHR$(80) THEN GOSUB 12610:GOTO 12320
12520 IF RIGHT$(I$,1)=CHR$(72) THEN GOSUB 12710:GOTO 12320
12530 IF RIGHT$(I$,1)=CHR$(59) THEN 12810 'next page
12540 IF RIGHT$(I$,1)=CHR$(60) THEN GOSUB 12901 'goto dial call routine
12545 IF RIGHT$(I$,1)=CHR$(61) THEN GOSUB 13110 'goto special call routine
12550 GOTO 12320
12600 '----------------------- MOVE CURSOR DOWN ---------------------------
12610 IF CP%=CB% THEN BEEP:GOTO 12630
12620 LOCATE CP%,1:PRINT STRING$(1,32):LOCATE CP%,46:PRINT STRING$(1,32):CP%=CP%+1:LOCATE CP%,1:PRINT STRING$(1,16):LOCATE CP%,46:PRINT STRING$(1,17)
12630 RETURN
12700 '------------------------ MOVE CURSOR UP ----------------------------
12710 IF CP%=CT% THEN BEEP:GOTO 12730
12720 LOCATE CP%,1:PRINT STRING$(1,32):LOCATE CP%,46:PRINT STRING$(1,32):CP%=CP%-1:LOCATE CP%,1:PRINT STRING$(1,16):LOCATE CP%,46:PRINT STRING$(1,17)
12730 RETURN
12800 '----------------SET UP FOR NEXT PAGE ------------------------------
12810 CP%=5
12820 FOR X=5 TO 22
12830 LOCATE X,1:PRINT STRING$(50,32)
12840 NEXT X
12850 LOCATE 5,1
12855 PAGE=PAGE+1
12860 RETURN
12900 '------------------AUTO DIALING ROUTINE -----------------------------
12901 PHONE$=""
12910 OPEN "COM1:300,N,8,1,CS0,DS0" AS #3
12915 LOCATE 25,55:PRINT STRING$(25,32);
12920 LOCATE 15,50:PRINT "IS THIS A LONG DISTANCE CALL? ";
12930 I$=INKEY$:IF I$="" THEN 12930
12940 IF I$="Y" OR I$="y" THEN SP%=32:GOTO 13010 ELSE SP%=36
12945 FOR LP%=1 TO 8
12950 PHONE$=PHONE$+CHR$(SCREEN(CP%,SP%+LP%))
12960 NEXT LP%
12965 LOCATE 16,50:PRINT "DIALING ";PHONE$
12970 PHONE$="AT DT"+PHONE$+";"
12980 PRINT #3,PHONE$:LOCATE 17,50:COLOR 23,0:PRINT " Press any key to hang up! ";:COLOR 7,0
12982 I$=INKEY$:IF I$="" THEN 12982
12985 PRINT #3,"AT H"
12988 FOR LIN=15 TO 17:LOCATE LIN,50:PRINT STRING$(29,32);:NEXT LIN:GOSUB 13400
12990 PRINT #3,"AT Z":CLOSE #3:RETURN
13000 '------------------- LONG DISTANCE DIALING ---------------------------
13010 FOR LP%=1 TO 12
13020 PHONE$=PHONE$+CHR$(SCREEN(CP%,SP%+LP%))
13030 NEXT LP%
13040 PHONE$="1-"+PHONE$:LOCATE CP%+1,50:PRINT "DIALING ";PHONE$
13050 PHONE$="AT DT"+PHONE$+";"
13060 PRINT #3,PHONE$:LOCATE CP%+2,50:COLOR 23,0:PRINT " Press any key to hang up! ";:COLOR 7,0
13070 I$=INKEY$:IF I$="" THEN 13070
13080 PRINT #3,"AT H"
13088 FOR L%=0 TO 3:LOCATE CP%+L%,50:PRINT STRING$(29,32);:NEXT L%:GOSUB 13400
13090 PRINT #3,"AT Z":CLOSE #3:RETURN
13100 `------------------------ SPECIAL DIALING ROUTINE -----------------------
13110 LOCATE 5,50:PRINT "SPECIAL DIALING ROUTINE";:LOCATE 7,50:PRINT "Enter the number";:LOCATE 8,50:PRINT "you wish to dial";:SPDIAL$=""
13115 LOCATE 25,1:PRINT STRING$(54,32);:LOCATE 25,59:COLOR 0,7:PRINT " Exit Special Dial  ";:COLOR 7,0
13120 I$=INKEY$:IF I$="" THEN 13120
13130 IF I$=CHR$(13) THEN 13180
13140 IF I$=CHR$(27) THEN LOCATE 5,50:PRINT STRING$(29,32);:LOCATE 7,50:PRINT STRING$(29,32);:LOCATE 8,50:PRINT STRING$(29,32):LOCATE 10,50:PRINT STRING$(29,32); ELSE 13150
13145 GOSUB 13400
13146 RETURN
13150 IF I$=CHR$(8) THEN SPDIAL$=LEFT$(SPDIAL$,LEN(SPDIAL$)-1):LOCATE 10,50:PRINT STRING$(29,32);:LOCATE 10,50:PRINT SPDIAL$:GOTO 13120
13160 IF I$<CHR$(43) OR I$>CHR$(122) THEN 13120
13170 SPDIAL$=SPDIAL$+I$:LOCATE 10,50:PRINT SPDIAL$:GOTO 13120
13180 SPDIAL$="AT DT"+SPDIAL$+";"
13183 OPEN "COM1:300,N,8,1,CS0,DS0" AS #3
13185 PRINT #3,SPDIAL$:LOCATE 9,50:COLOR 23,0:PRINT " Press any key to hang up! ";:COLOR 7,0
13200 I$=INKEY$:IF I$="" THEN 13200
13210 PRINT #3,"AT H"
13220 FOR L=0 TO 5:LOCATE 5+L,50:PRINT STRING$(29,32);:NEXT L:GOSUB 13400
13230 PRINT #3,"AT Z":CLOSE #3:GOSUB 13400:RETURN
13400 LOCATE 25,1:PRINT " F1 ";:COLOR 0,7:PRINT " Next Page ";:COLOR 7,0:PRINT " F2 ";:COLOR 0,7:PRINT " Dial call ";:COLOR 7,0:PRINT " F3 ";:COLOR 0,7:PRINT " SPECIAL DIAL ";:LOCATE 25,54:COLOR 7,0:PRINT " ESC ";:COLOR 0,7:PRINT " Return to main menu ";
13405 COLOR 7,0
13410 RETURN
15000 IF ERR = 71 THEN CLS ELSE 15040
15010 LOCATE 10,20:PRINT"DISK DRIVE NOT READY. PLEASE INSERT DATA DISK"
15020 LOCATE 11,20:PRINT"OR CLOSE DRIVE DOOR. PRESS ENTER TO RESUME":BEEP
15030 I$=INKEY$:IF I$=CHR$(13) THEN RESUME ELSE 15030
15040 ON ERROR GOTO 0
```
{% endraw %}

## BASECONV.BAS

{% raw %}
```bas
10 KEY OFF:CLS
20 SCREEN 0
30 WIDTH 40
40 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
50 PRINT"░┌───────────────────────────────────┐░"
60 PRINT"░│                                   │░"
70 PRINT"░│            7054-A.BAS             │░"
80 PRINT"░│          BASE CONVERTER           │░"
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
1000 '==========BASE CONVERTER==========
1003 '=======CONVERT NUMBER BASE========
1005 'Please send any ideas on how to
1007 'make this program better to me.
1009 'Robert West, 655 S. Chubb Dr.,
1011 'Doylestown, Pa., 18901
1013 'thanks
1015 '
1017 '
1020 CLEAR:GOTO 21000
4000 ====CONVERTS STRING N$ TO VAR N====
4110 N=0
4115 L=LEN(N$):FOR I=0 TO L-1
4120 AVAL=ASC(MID$(N$,L-I,1))
4130 IF AVAL<48 OR AVAL>57 GOTO 25000
4140 DIGIT=AVAL-48
4150 DIGIT=DIGIT*10^I
4160 N=N+DIGIT
4170 NEXT
4199 RETURN
4200 '===CONVERT VAR H1 TO STRING N$====
4210 I=7:A$="0"
4220 N=INT(H1/10^I)
4230 IF N<0 THEN 4270
4240 A1$=CHR$(N+48)
4250 H1=H1-(N*10^I)
4260 A$=A$+A1$
4270 IF I>0 THEN I=I-1:GOTO 4220
4299 RETURN
5000 ======CONVERT DECIMAL=============
5010 GOSUB 4110
5030 IF P$="H" THEN GOSUB 5310
5040 IF P$="B" THEN GOSUB 5410
5050 IF P$="D" THEN A$=N$
5099 RETURN
5300 '=====CONVERT DECIMAL TO HEX=======
5310 H=1048576!
5320 IF N<16 THEN 5390
5330 IF H>N THEN H=H/16:GOTO 5330
5335 COUNT=0
5340 IF H<=N THEN N=N-H:COUNT=COUNT+1:GOTO 5340
5350 IF COUNT<10 THEN A1$=CHR$(COUNT+48) ELSE A1$=CHR$(COUNT+55)
5360 SM1$=SM1$+A1$
5370 IF H>16 THEN COUNT =0:H=H/16:GOTO 5340
5390 IF N<10 THEN A1$=CHR$(N+48) ELSE A1$=CHR$(N+55)
5395 SM1$=SM1$+A1$
5397 GOSUB 5510
5399 RETURN
5400 '=====CONVERT DECIMAL TO BINARY====
5410 IF N>9999999! THEN 25000
5420  B=8388608!:SM1$="0"
5430 SM$="0":IF N>=B THEN SM$="1" ELSE SM$="0":GOTO 5450
5440 N=N-B
5450 SM1$=SM1$+SM$:B=B/2
5460 IF B<>.5 THEN 5430
5500 '========CHOP OFF "0'S"============
5510 L=0
5520 L=L+1:TH$=MID$(SM1$,L,1)
5530 IF TH$=CHR$(48) THEN 5520
5540 X=LEN(SM1$)-(L-1)
5550 A$=RIGHT$(SM1$,X)
5560 SM$="0"
5599 RETURN
7000 '==========CONVERT HEX ============
7010 IF P$="D" THEN GOSUB 7210
7020 IF P$="O" THEN GOSUB 7310
7030 IF P$="B" THEN GOSUB 7410
7040 IF P$="H" THEN A$=N$
7099 RETURN
7200 '======CONVERT HEX TO DECIMAL======
7210 GOSUB 7240 'THIS IS DONE LIKE THIS SO HEX TO BINARY 7410 CAN USE THE INFORMATION
7220 GOSUB 4210
7225 SM1$=A$:GOSUB 5510
7230 RETURN
7240 L1=0:H1=0
7245 L=LEN(N$)
7250 S$=MID$(N$,L,1)
7255 H=ASC(S$)
7260 IF H>57 THEN H=H-55 ELSE H=H-48
7265 H=H*B^L1:H1=H+H1
7270 L=L-1:L1=L1+1
7275 IF L>0 THEN 7250
7299 RETURN
7400 '=======CONVERT HEX TO BINARY=====
7410 GOSUB 7240
7420 S$=N$:N=H1
7425 GOSUB 5410
7427 GOSUB 5510
7430 N$=S$ 'S$ SAVES THE VALUE OF N$
7499 RETURN
8000 '=====CONVERT BINARY===============
8010 IF P$="D" THEN GOSUB 8210
8020 IF P$="O" THEN GOSUB 8310
8030 IF P$="H" THEN GOSUB 8410
8040 IF P$="B" THEN A$=N$
8099 RETURN
8200 '=====CONVERT BINARY TO DEC========
8210 GOSUB 7240
8220 S$=N$:N=H1
8230 GOSUB 4210
8240 SM1$=A$:N$=S$
8250 GOSUB 5510
8299 RETURN
8400 '====CONVERT BINARY TO HEX=========
8410 GOSUB 8210
8420 S$=N$:N$=A$:SM1$="":GOSUB 4110
8430 GOSUB 5310
8440 N$=S$
8499 RETURN
15100 '===========CAPITALIZATION========
15110 FOR CHAR=1 TO LEN(I$)
15120 CHAR$=MID$(I$,CHAR,1)
15130 IF CHAR$<"a" OR CHAR$> "z" THEN 15150
15140 MID$(I$,CHAR,1)=CHR$(ASC(CHAR$)-32)
15150 NEXT CHAR
15160 RETURN
15199 RETURN
16100 '=========ANY KEY INPUT===========
16110 '
16120 BEEP:COLOR 14,1,1:LOCATE 24,5:PRINT "<PRESS ANY KEY TO CONTINUE>";
16130 IF LEN(INKEY$)=0 THEN 16130
16199 RETURN
16400 '========INPUT A STRING===========
16410 BEEP:COLOR 14,1,1:LOCATE 24,5:PRINT IN$;:LINE INPUT;I$:LOCATE 24,5:PRINT STRING$(35,32);
16420 IF I$<"A" OR I$>"z" THEN 16430
16430 GOSUB 15110
16499 RETURN
16500 '========INPUT VARIABLE===========
16510 BEEP:COLOR 14,1,1:LOCATE 24,5:INPUT "WHAT IS YOUR NUMBER ";I;
16599 RETURN
19000 -19999
19010 EQ$=STRING$(40,61)
19020 C1$="PICK ONE LETTER "
19030 C2$="<D> DECIMAL"
19040 C3$="WHATS YOUR NUMBER "
19050 C4$="<H> HEXADECIMAL"
19060 C5$="<B> BINARY"
19070 C6$="BASE"
19080 C7$="NUMBER "
19090 C8$="CONVERSION IS WANTED "
19499 RETURN
19500 '======DEFINE ALL VARIABLES=======
19999 RETURN
20000 '========INITIALIZATION===========
20010 '
20020 WIDTH 40:SCREEN 0,1:KEY OFF:COLOR 14,1,1:CLS
20030 LOCATE 3,12:PRINT "BASE CONVERTER"
20040 LOCATE 6,5:PRINT "***I CONVERT NUMBERS INTO***":LOCATE 8,1:PRINT EQ$
20060 LOCATE 11,9:PRINT C2$
20080 LOCATE 13,9:PRINT C4$
20170 LOCATE 15,9:PRINT C5$
20180 LOCATE 17,1:PRINT EQ$
20199 RETURN
21000 '=========MAIN PROGRAM============
21010 GOSUB 19010 'WRITES "$" INTO MEM
21020 GOSUB 19500 'WRITE VAL INTO MEM
21030 GOSUB 20000
21040 COLOR 4,1,1:LOCATE 19,5:PRINT "What base is your number in "
21050 IN$=C1$:GOSUB 16410
21060 IF I$="D" OR I$="H" OR I$="B" THEN B$=I$ ELSE GOTO 21050
21070 LOCATE 18,5:PRINT STRING$(40,32)
21080 COLOR 4,1,1:LOCATE 19,5:PRINT "What is your number "
21090 IN$=C3$:GOSUB 16410
21100 N$=I$
21120 COLOR 4,1,1:LOCATE 19,2:PRINT "What base should I convert it into "
21130 IN$=C1$:GOSUB 16410
21140 A$="O":IF I$="D" OR I$="H" OR I$="B" THEN P$=I$ ELSE GOTO 21130
21150 IF B$="D" THEN B=10:GOSUB 5010
21170 IF B$="H" THEN B=16:GOSUB 7010
21180 IF B$="B" THEN B=2:GOSUB 8010
21190 LOCATE 19,1:PRINT STRING$(40,32)
21200 BEEP:LOCATE 19,5:PRINT "THE ANSWER TO "N$" "B$" IS "A$" "P$
21210 GOSUB 16110
24998 GOTO 10
24999 END
25000 CLS:BEEP:BEEP:BEEP:LOCATE 12,12:PRINT N$" IS NOT ALLOWED":FOR J=1 TO 2000:NEXT :GOTO 10
```
{% endraw %}

## CONVERT.BAS

{% raw %}
```bas
10 ' COPYRIGHT 1982, RICHARD M. SCHINNELL
20 ' This Program is called CONVERT.BAS VER 1.1 (2-13-83)
30 DEFINT A-Z:FALSE=0:TRUE = NOT FALSE:ON ERROR GOTO 680
40 KEY OFF:CLS:LOCATE 12,1
50 PRINT"COPYRIGHT 1982, Richard Schinnell Rockville,Maryland 301 949-8848 "
60 PRINT"This program will convert EXE/COM files to a basic program which"
70 PRINT"you then can transmit to someone over your Modem. They
80 PRINT"can then run the basic program and it will re-create the EXE/COM pgm.
90 PRINT"just like you had it.       E N J O Y   RICH......":PRINT
100 INPUT "Name of the COM or EXE File to convert ?: ";FIL1$
110 PRINT "To call the program with the same name with .BAS ext hit C/R"
120 INPUT "WHAT do you wish to call the basic program  (.BAS): ";FIL2$
130 IF LEN(FIL2$)<1 THEN FIL2$=MID$(FIL1$,1,(INSTR(FIL1$,".")-1))+".BAS"
140 NUMLIN=1001:X=0:GRAND#=0:CNT=1
150 IF FIL1$=FIL2$ THEN CLS:LOCATE 12,15:PRINT "DUPLICATE FILE NAMES ":GOTO 10
160 OPEN FIL1$ FOR INPUT AS #1:CLOSE #1 ' just checking to make sure its there
170 OPEN  FIL1$  AS #1 LEN=1 ' opening the .COM file
180 V= VARPTR(#1) ' looking at the FCB
190 L0=PEEK(V) ' getting the type of file
200 L1=PEEK(V+17) + 256 * PEEK(V+18) ' this gets the filesize in bytes
210 LIMIT = L1 ' THIS IS THE LIMIT FOR THE FILE SIZE
220 OPEN  FIL2$  FOR OUTPUT AS #2 ' opening up the .bas file this pgm creates
230 GOSUB 470
240 PRINT #2,"1000 DATA ";STR$(LIMIT):
250 LIN$=RIGHT$(STR$(NUMLIN),4)
260 RICH2$=LIN$+" DATA "
270 FIELD #1,1 AS GETS$
280 X =X +1:IF X =< LIMIT THEN GET #1,X ELSE 400
290 RICH1$=HEX$(ASC(GETS$)):IF LEN(RICH1$)<2 THEN RICH1$="0"+RICH1$
300 IF CNT <29 THEN RICH2$=RICH2$+RICH1$:CNT=CNT+1:GRAND#=GRAND#+ASC(GETS$):GOTO 280
310 GOTO 400
320 RICH2$=LIN$+" DATA 000000,9999"
330 PRINT #2,RICH2$
340 PRINT #2,"5000 PRINT ";CHR$(34);"* * ERROR VERIFY FOLLOWING DATA * * * ";CHR$(34)
350 PRINT #2,"5005 PRINT X$;";CHR$(34);",";CHR$(34);";CHECK "
360 PRINT #2,"5010 KEY ON:CLOSE:END"
370 'JUST A COMMENT LINE. BE CAREFULL IF YOU CHANGE ANYTHING IN THIS PGM...
380 LOCATE 20,1:PRINT" You have sucessfully created file named ";FIL2$
390 CLOSE:KEY ON:END
400 GRAND$=MID$(STR$(GRAND#),2,4) 'THIS IS WHERE IT ALL HAPPENS
410 CNT=2:PRINT #2,RICH2$;",";GRAND$:NUMLIN=NUMLIN+1
420 LOCATE 18,1:PRINT SPC(78);:LOCATE 18,1:PRINT RICH2$;",";GRAND#;
425 LOCATE 16,51:PRINT CINT(((LIMIT/28)+1)-(X/28));" LINES LEFT";
430 LIN$=RIGHT$(STR$(NUMLIN),4)
440 IF X>LIMIT THEN GOTO 320
450 RICH2$=LIN$+" DATA "+RICH1$:GRAND#=ASC(GETS$)
460 GOTO 280
470 PRINT #2," 10 CLS:PRINT";CHR$(34);"This basic program was created by CONVERT.BAS";CHR$(34);":KEY OFF:DEFINT A-Z:FALSE=0:TRUE=NOT FALSE"
480 IF INSTR(FIL1$,":")=2 THEN FIL3$=MID$(FIL1$,3,13) ELSE FIL3$=FIL1$
490 GOSUB 720
500 PRINT #2," 20 PRINT";CHR$(34);"Copyright 1983 ,Rich Schinnell Rockville,MD. Not for Sale.";CHR$(34)
510 PRINT #2," 30 PRINT ";CHR$(34);"This program will create  you a program named ";FIL3$;CHR$(34);":PRINT "
520 PRINT #2," 40 ON ERROR GOTO 5000"
530 PRINT #2," 50 INPUT ";CHR$(34);"PLACE the disk to write the file TO in Drive A: Press <ENTER> ";CHR$(34);"; CAPITAL$"
540 PRINT#2," 90 CLS:LOCATE 12,5:PRINT ";CHR$(34);"Now writing file named ";FIL3$;" standby please  ";CHR$(34)
550 PRINT #2,"100 RESTORE"
560 PRINT #2,"110 OPEN ";CHR$(34);"R";CHR$(34);", #1,";CHR$(34);FIL3$;CHR$(34);",1 "
570 PRINT #2,"120 FIELD #1, 1 AS N$
580 PRINT #2,"130 READ N:LL=(N/28)+1"
590 PRINT #2,"140 FOR I = 1 TO N
600 PRINT #2,"150 READ X$,CHECK:FOR C=1 TO LEN(X$) STEP 2:CC$=";CHR$(34);"&H";CHR$(34);"+MID$(X$,C,2):IF CHECK=9999 THEN 170"
610 PRINT #2,"155 LSET N$=CHR$(VAL(CC$)):PUT #1:CHECK=CHECK-VAL(CC$):NEXT C:IF CHECK<>0 THEN 5000
620 PRINT #2,"160 LOCATE 14,5:PRINT TIME$;";CHR$(34);" Reading data line #";CHR$(34);";(1000+I);";CHR$(34);" lines left=";CHR$(34);";LL-I;:NEXT I:CLOSE"
630 PRINT #2,"170 LOCATE 16,5:PRINT ";CHR$(34); FIL3$;" CREATED * *";CHR$(34);":GOTO 5010"
640 CLS:LOCATE 12,5:PRINT "Reading file named ";FIL1$
650 LOCATE 14,5:PRINT     "Writing file named ";FIL2$
660 LOCATE 16,5:PRINT     "The file size of the input file is ";LIMIT
670 RETURN
680 PRINT " you had an error ";ERR;" in line # ";ERL
690 PRINT "Probably you named a file which does not exist "
700 PRINT "try again Charlie........
710 KEY ON:END
720 FOR I = 1 TO LEN(FIL3$)
730 IF ASC(MID$(FIL3$,I,1))>90 THEN MID$(FIL3$,I,1)=CHR$(ASC(MID$(FIL3$,I,1))-32)
740 NEXT I
750 RETURN
```
{% endraw %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #187, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  AUTODIAL.BAS         CRC = 6F 2F

--> FILE:  CONVERT .BAS         CRC = 8F CF

--> FILE:  EZSIG3  .HLP         CRC = 92 77

--> FILE:  HAYSMODM.BAS         CRC = 7C 4D

--> FILE:  KILLNULL.BAS         CRC = 8A 3E

--> FILE:  PC-SPEAK.BAS         CRC = AE 18

--> FILE:  TALK450 .DOC         CRC = 26 8F

--> FILE:  TALK450 .MRG         CRC = 2E 2B

--> FILE:  BASECONV.BAS         CRC = 75 CF

--> FILE:  XXX     .            CRC = E3 B1

 ---------------------> SUM OF CRCS = F4 52

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## HAYSMODM.BAS

{% raw %}
```bas
10 CLS : KEY OFF : FOR A = 1 TO 10 : KEY A,"" : NEXT : DEF SEG : POKE 106,0
20 PRINT : PRINT
30 OPEN "COM1:" AS 1
35 PRINT #1, "AT Z"
40 LOCATE 3,25 : COLOR 9,0 : PRINT "Hayes SMARTMODEM Demonstration"
50 COLOR 5,0
60 PRINT
70 PRINT
80 PRINT "     The Hayes Stack SMARTMODEM is designed to be used in amateur radio
90 PRINT "applications, as well as standard applications directly connected to a phone
100 PRINT "line.
110 PRINT
120 PRINT "     The modem (acronym for "; : COLOR 26,0 : PRINT "MOD";:COLOR 5,0 : PRINT"ULATOR/";:COLOR 26,0 : PRINT"DEM";:COLOR 5,0 : PRINT"ODULATOR) can key a transmitter,"
130 PRINT "access a repeater or remote base with DTMF touch tones, give station"
140 PRINT "I.D. in Morse Code, send ASCII data at up to 300 BAUD (bits per second),"
150 PRINT "then unkey the transmitter and wait to receive ASCII from the distant"
160 PRINT "computer or terminal."
165 PRINT
170 PRINT "     Since this can all be done under program control, and since it can"
180 PRINT "be controlled by external sources, such as status of a device on an"
190 PRINT "input port, time of day, etc..., the controlling computer can be totally"
200 PRINT "unattended."
202 PRINT
204 PRINT     "Make sure SMARTMODEM is unplugged from phone line..."
210 LOCATE 25,14 : PRINT "Press space bar for demonstration or <Esc> to end";
215 A$ = INKEY$ : IF A$ = "" THEN 215
220 IF ASC(A$) = 27 THEN CHAIN "MENUB.BAS"
230 IF ASC(A$) = 32 THEN 250
240 SOUND 37,5 : GOTO 215
250 CLS : FOR A = 1 TO 2500 : NEXT
255 GOSUB 1000
260 LOCATE 4,30 : COLOR 26,0 : PRINT"Key transmitter...";
270 COLOR 5,0 : LOCATE 5,25 : PRINT "(denoted by 'OH' LED on modem)"
280 PRINT #1, "AT S10=255M2D;"
290 FOR A = 1 TO 5000 : NEXT
300 GOSUB 1000 : LOCATE 10,23: COLOR 26,0 : PRINT "Access Repeater or Remote Base..."
310 PRINT #1, "AT S11=255DT783;" : FOR A = 1 TO 3500 : NEXT : PRINT #1,"AT S11=40DT3591828*##;"
320 FOR A = 1 TO 5000 : NEXT
330 GOSUB 1000 : LOCATE 15,26 : PRINT "Identify Station/Repeater..."
340 PRINT #1, "AT RC1.--/.-/--.../.---/-../-..-/;"
350 FOR A = 1 TO 8000 : NEXT
360 GOSUB 1000 : LOCATE 20,32 : PRINT "Transmit Data..."
370 PRINT #1, "AT R C1 H2 D": FOR A = 1 TO 2500 : NEXT : PRINT #1, "This is a test of the Communications Port. This is sent at 300 Baud, ASCII, over an amateur radio transmitter.  It will then unkey the transmitter and wait for a return carrier and signa
380 FOR A = 1 TO 6500 : NEXT : PRINT #1, "+++"; : FOR A = 1 TO 2500 : NEXT : PRINT #1, "AT H"
390 GOSUB 1000 : FOR A = 1 TO 250 : NEXT : GOSUB 1000 : FOR A = 1 TO 250 : NEXT : GOSUB 1000
400 LOCATE 25,25 : COLOR 8,7 : PRINT "Press space bar to continue...";: COLOR 5,0
410 A$ = INKEY$ : IF A$ = "" THEN 410
420 IF ASC(A$) =32 THEN CLOSE : RUN
430 SOUND 37,5 : GOTO 410
1000 PLAY "T50L48MNAMSAA"
1010 RETURN
```
{% endraw %}

## KILLNULL.BAS

{% raw %}
```bas
10 INPUT "Name of file";OLD$
20 OPEN OLD$ FOR INPUT AS #1
30 OPEN "NEW" FOR OUTPUT AS #2
40 IF EOF(1) THEN 90
50 A$=INPUT$(1,#1)
60 IF A$=CHR$(0) THEN 40
70 PRINT #2,A$;
80 GOTO 40
90 CLOSE
100 NAME OLD$ AS "OLDFILE.BAK"
110 NAME "NEW" AS OLD$
120 END
```
{% endraw %}

## PC-SPEAK.BAS

{% raw %}
```bas
10 REM ************* MY COMMUNICATION by Larry E. Jordan, 5-7-82 **********
11 '                                     Telephone (301)340-2466
17 'This program should only be run after initializing into basic using DOS
18 'command  BASICA PC-SPEAK/S:512/C:3072
20 AUTOLOGON$="CHANGE THIS LINE TO YOUR NAME    "
30 DISKFLAG=0:PRINTFLAG=0:SCREENFLAG=0
40 KEY OFF: SCREEN 0,0: WIDTH 40:OUT 980,2:OUT 981,43: COLOR 7,0: CLS:POKE 106,0
50 FOR I=1 TO 10:KEY I,"":NEXT:FALSE=0:TRUE=NOT FALSE
60 CLOSE: DEFINT A-Z:XOFF$=CHR$(19): XON$=CHR$(17):ON ERROR GOTO 0:T=0:ECH$=""
70 DEF SEG=0: IF (PEEK(&H410) AND &H30)=&H30 THEN WIDTH 40:T=20:MODE$="b":DEF SEG:GOTO 100
80 FOR I=1 TO 10:KEY I,"":NEXT:DEF SEG
90 CLS:LOCATE 23,10+T/2:PRINT"F1 = 40 COLUMN         F2 = 80 COLUMN"
100 WIDTH "com1:",255:DEF SEG
110 KEY(3) ON:KEY(4) ON:KEY(5) ON:KEY(6) ON
120 ON KEY(3) GOSUB 1520:ON KEY(4) GOSUB 1530:ON KEY(5) GOSUB 1540
130 ON KEY(6) GOSUB 1630
140 ON ERROR GOTO 0
150 LOCATE 2: PRINT TAB(10+T) "COMMUNICATIONS MENU"
160 LOCATE 6,3+T: PRINT "Choose one of the following:"
170 LOCATE 9,10+T: PRINT "1 Description of program"
180 PRINT TAB(10+T) "2 Dow Jones/News Retrieval"
190 PRINT TAB(10+T) "3 IBM Personal Computer"
200 PRINT TAB(10+T) "4 Bulletin Board (Full Duplex)
210 PRINT TAB(10+T) "5 THE SOURCE or CompuServe"
220 PRINT TAB(10+T) "6 Other service"
230 PRINT TAB(10+T) "7 Reconnect Other Service (6)"
240 PRINT TAB(10+T) "8 Back to Basic
250 LOCATE 18: PRINT SPACE$(40+T): LOCATE 18,3+T,1:PRINT "choice";
260 'Input from keyboard *****************************************************
270 A$=INKEY$:IF A$="" THEN 270
280 IF LEN(A$)=1 THEN LT=VAL(A$):GOTO 340
290 IF MODE$="b" THEN LT=0:GOTO 340
300 B$=MID$(A$,2,1):'   ASC 59 is F1     ASC 60 is F2
310 IF ASC(B$)=59 THEN WIDTH 40:OUT 980,2:OUT 981,43:T=0:CLS:GOTO 90 ELSE IF ASC(B$)=60 THEN WIDTH 80:T=20:CLS:GOTO 90 ELSE LT=0:GOTO 340
320 GOTO 270
330 'Branch to selected item ************************************************
340 IF LT=8 THEN CLS: PRINT TAB(10+T) "- Enter CONT to resume-": STOP ELSE IF (LT=2 OR LT=3 OR LT=4 OR LT=5) THEN 500 ELSE IF LT=1 THEN GOSUB 1160:GOTO 40:ELSE IF (LT<1 OR LT>8) THEN FL=1: PRINT: PRINT TAB(3+T) "Invalid choice, try again"
350 IF LT=7 GOTO 460
360 IF LT=8 GOTO 90
370 IF FL=1 THEN FOR I=1 TO 2500: NEXT: LOCATE 19: PRINT SPACE$(40+T):FL=0: GOTO 250
380 CLS: LOCATE 1,10+T: PRINT "USER DEFINED LINK"
390 LOCATE 4,3+T,1:PRINT "BAUD RATE ";:GOSUB 1010: SPEED$=B$
400 LOCATE 5,3+T,1:PRINT "PARITY ";:GOSUB 1010: PARITY$=B$
410 LOCATE 6,3+T,1:PRINT "NUMBER OF BITS PER CHARACTER ";:GOSUB 1010:BITS$=B$
420 LOCATE 7,3+T,1:PRINT "NUMBER OF STOP BITS ";:GOSUB 1010: STP$=B$
430 LOCATE 10,3+T,1:PRINT "CHARACTERS ECHOED TO SCREEN (Y/N) ";:GOSUB 1010: ECH$=B$
440 LOCATE 12,3+T,1: PRINT "Data entered correctly (Y/N) ";:GOSUB 1010:CR$=B$
450 IF CR$="N" OR CR$="n" THEN 380 : 'Go to modem connect message otherwise
460 ' Setup communication file #1 ********************************************
470 NM$="Selected User Protocol":GOSUB 1060
480 COMFIL$="COM1:"+SPEED$+","+PARITY$+","+BITS$+","+STP$
490 OPEN COMFIL$ AS #1
495 GOTO 540
500 IF LT=4 THEN NM$="Bulletin Board":ECH$="N":GOSUB 1060:OPEN "com1:300,e,7,1" AS #1:GOTO 540
510 IF LT=3 THEN NM$="IBM Personal Computer":ECH$="Y":GOSUB 1060:OPEN "com1:300,e,7,1" AS #1:GOTO 540
520 IF LT=2 THEN NM$="Dow Jones News/Retrieval":GOSUB 1060:OPEN "com1:300,e,7" AS #1:GOTO 540
530 IF LT=5 THEN NM$="THE SOURCE or CompuServe":GOSUB 1060:OPEN "com1:300,e,7" AS #1
540 OPEN "LPT1:" FOR OUTPUT AS #2
550  'Branch to modem connection instructions.
560 LOCATE ,,1
570 REM ******************** START COMMUNICATION INPUT LOOP ******************
580 LOCATE 25,1:COLOR 0,7:PRINT"F3=PRT  F4=PRT-OFF  F5=DWNLD  F6=LD-OFF  F10=MENU";:COLOR 7,0
590 LOCATE 21,2
600 PAUSE=FALSE:ON ERROR GOTO 950
610 B$=INKEY$:IF B$="" THEN 700
620 DEF SEG:POKE 106,0
630 ON ERROR GOTO 950
660 IF LEN(B$)>1 THEN IF ASC(MID$(B$,2,1))=68 THEN 940 ELSE 700
670 IF B$=CHR$(8) AND (ECH$="Y" OR ECH$="y") THEN IF POS(0)>1 THEN LOCATE ,POS(0)-1,1:PRINT " ";:LOCATE ,POS(0)-1,1
680 IF B$<>"" THEN PRINT #1,B$;
685 IF B$<>CHR$(8) AND (ECH$="Y" OR ECH$="y") THEN PRINT B$;
700 IF EOF(1) THEN 610
720 IF LOC(1)>128 THEN PAUSE=TRUE:PRINT#1,XOFF$;
740 A$=INPUT$(LOC(1),#1)
750 IF DISKFLAG=1 THEN PRINT #3,A$;
760 FOR I=1 TO LEN(A$)
770 DT$=MID$(A$,I,1)
780 IF DT$=CHR$(8) THEN IF POS(0)>1 THEN LOCATE ,POS(0)-1:PRINT " ";:LOCATE ,POS(0)-1:GOTO 870
790 IF DT$=CHR$(7) THEN BEEP:GOTO 870
795 IF DT$=CHR$(5) THEN PRINT #1,AUTOLOGON$:GOTO 870
800 IF (ASC(DT$)<31 AND DT$<>CHR$(13)) THEN 870
830 IF DT$=CHR$(127) THEN 870
850 PRINT DT$;:IF PRINTFLAG=1 THEN PRINT #2,DT$;
870 NEXT I
880 DEF SEG:POKE 106,0
890 IF LOC(1)>0 THEN 610
910 IF PAUSE THEN PAUSE=FALSE:PRINT#1,XON$;
920 GOTO 610
930 REM *********** F10 SOFT KEY MENU RETRIEVAL ******************************
940 POKE 106,0: CLOSE: ON ERROR GOTO 0: GOTO 40
950 'Error Routines **********************************************************
960 IF ERR=24 THEN PRINT:PRINT :PRINT "A DEVICE TIMEOUT ERROR HAS OCCURRED.":PRINT "MAKE SURE THE HARDWARE IS CORRECTLY":PRINT "SET UP THEN PRESS ENTER TO RESUME.":FOR JJ=1 TO 5000:NEXT JJ:RESUME
970 IF ERR=68 THEN CLS: LOCATE 12,8+T: PRINT "THIS PROGRAM REQUIRES THE":PRINT TAB(3+T) "ASYNCHRONOUS COMMUNICATIONS ADAPTER.": END
980 ON ERROR GOTO 0
990 REM **************************** KEYBOARD INPUT ***********************
1000 'CHR$(13)=CARRIAGE RETURN   CHR$(8)=BACKSPACE   A$ 68 IS F10   B$ 59 IS F1   B$ 60 IS F2
1010 A$="":B$="":CR$="": WHILE A$<>CHR$(13)
1020 A$=INKEY$: IF A$="" THEN 1020 ELSE IF LEN(A$)>1 THEN IF ASC(MID$(A$,2,1))=68 THEN 940 ELSE 1020: ELSE IF A$<>CHR$(8) THEN PRINT A$;: ELSE LOCATE ,POS(0)-1,1:PRINT " ";:LOCATE ,POS(0)-1,1:B$=MID$(B$,1,LEN(B$)-1)
1030 IF A$<>CHR$(13) AND A$<>CHR$(8) THEN B$=B$+A$
1040 WEND:RETURN
1050 REM ********* COMM CHANNEL DISPLAY ************************************
1060 CLS: LOCATE 3,12+T/2: PRINT NM$+" Channel Open":PRINT:BEEP
1070 REM ******************** MODEM CONNECT INSTRUCTIONS ********************
1080 PRINT:PRINT:PRINT TAB(3+T) "- You are now linked to your modem."
1090 PRINT TAB(3+T) "  You should proceed with dialing the"
1100 PRINT TAB(3+T) "  host you wish to connect with. For"
1110 PRINT TAB(3+T) "  use with the SMARTMODEM input the"
1120 PRINT TAB(3+T) "  command ATDnumber <RETURN>.":PRINT :PRINT
1130 PRINT TAB(3+T) "- PRESS F10 TO GO TO MENU":PRINT
1140 RETURN
1150 REM *************************** PROGRAM DESCRIPTION *******************
1160 CLS: LOCATE 1,15+T: PRINT "DESCRIPTION"
1170 LOCATE 4,3+T: PRINT "An asynchronous communication link"
1180 PRINT TAB(3+T) "will be established between the"
1190 PRINT TAB(3+T) "selected service and the"
1200 PRINT TAB(3+T) "IBM PERSONAL COMPUTER, as follows:"
1210 LOCATE 9,3+T: PRINT "Baud rate";TAB(13+T)"300"
1220 PRINT TAB(3+T) "Parity";TAB(14+T)"E"
1230 PRINT TAB(3+T) "Data bits";TAB(14+T);"7
1240 PRINT TAB(3+T) "Stop bits";TAB(14+T);"1  Dow, THE SOURCE, IBM-PC"
1250 PRINT TAB(14+T) "2  Series/1"
1260 LOCATE 15,3+T: PRINT "Options 6 and 7 allow for the above"
1270 PRINT TAB(3+T) "characteristics to be supplied by"
1280 PRINT TAB(3+T) "the user to define a communication"
1290 PRINT TAB(3+T) "link to other services or computers."
1300 IF MODE$="b" THEN 1340
1310 LOCATE 20,3+T: PRINT "You can select 40 column display or"
1320 PRINT TAB(3+T) "80 column display by pressing F1 or"
1330 PRINT TAB(3+T) "F2 before selecting menu choice."
1340 LOCATE 24,3+T: PRINT "PRESS SPACE BAR TO CONTINUE";
1350 CR$=INKEY$:IF CR$<>" " THEN 1350
1360 CLS:LOCATE 1,10+T:PRINT "PRINT AND DOWNLOAD"
1370 LOCATE 4,3+T:PRINT "The following soft function keys"
1380 PRINT TAB(3+T) "contol printing and downloading"
1390 PRINT TAB(3+T) "while connected to a host or"
1400 PRINT TAB(3+T) "bulletin board:"
1410 PRINT :PRINT TAB(3+T) "F3 = Printer On   F4 = Printer Off"
1420 PRINT :PRINT TAB(3+T) "F5 = Download On  F6 = Download Off"
1430 PRINT :PRINT TAB(3+T) "Downloaded files will have names in"
1440 PRINT TAB(3+T) "the form DWNLDx.TXT. The number x "
1450 PRINT TAB(3+T) "will begin with 1 and increment by 1"
1460 PRINT TAB(3+T) "with each download. Be sure and"
1470 PRINT TAB(3+T) "rename each file after a download run"
1480 PRINT TAB(3+T) "to keep later runs from erasing files."
1490 LOCATE 24,3+T: PRINT "PRESS SPACE BAR TO CONTINUE";
1491 CR$=INKEY$:IF CR$<>" " THEN 1491
1493 CLS:LOCATE 1,10+T:PRINT "OPERATING TIPS"
1494 LOCATE 4,3+T:PRINT "The following tips will make "
1495 PRINT TAB(3+T) "operation of this program easier:"
1496 PRINT :PRINT TAB(3+T) "1. Use DOS command BASICA/C:3072"
1497 PRINT TAB(3+T) "to initialize basic before you"
1498 PRINT TAB(3+T) "run this program. This will give"
1499 PRINT TAB(3+T) "you a larger comm buffer to keep"
1500 PRINT TAB(3+T) "data from being lost during printing."
1501 PRINT :PRINT TAB(3+T) "2. Edit line 20 of this program"
1502 PRINT TAB(3+T) "to put your own logon name and"
1503 PRINT TAB(3+T) "address in before running. This"
1504 PRINT TAB(3+T) "saves you time when you call"
1505 PRINT TAB(3+T) "bulletin boards that have autologon."
1508 PRINT :LOCATE 23,3+T:PRINT "PRESS ANY KEY TO RETURN TO MENU";
1509 CR$=INKEY$:IF CR$="" THEN 1509 ELSE RETURN
1510 'The following is the printer turn on subroutine ***********************
1520 DEF SEG:POKE 106,0:BEEP:PRINTFLAG=1:DF$="*PRINTER ON*":GOSUB 1730:RETURN
1530 DEF SEG:POKE 106,0:BEEP:PRINTFLAG=0:DF$="            ":GOSUB 1730:RETURN
1540 'DOWNLOAD FROM HERE ****************************************************
1550 DEF SEG:POKE 106,0
1560 FILENUMBER=FILENUMBER +1:X$=STR$(FILENUMBER):X$=RIGHT$(X$,LEN(X$)-1)
1570 FILENAME$="A:DWNLD"+X$+".TXT"
1580 OPEN "O",#3,FILENAME$
1590 DISKFLAG=1:BEEP
1600 DF$="*DOWNLOADING*"
1610 GOSUB 1660
1620 RETURN
1630 'STOP DOWNLOADING *******************************************************
1640 DEF SEG:POKE 106,0:BEEP:CLOSE #3:DISKFLAG=0:DF$="             ":GOSUB 1660
1650 RETURN
1660 'Disk save signal on screen *********************************************
1665 IF T=0 GOTO 1720
1670 RC=CSRLIN 'record current line
1680 CC=POS(0) 'record current column
1690 LOCATE 25,68
1700 PRINT DF$
1710 LOCATE RC,CC 'restore position of cursor
1720 RETURN
1730 'Printer  signal on screen *********************************************
1735 IF T=0 GOTO 1790
1740 RC=CSRLIN 'record current line
1750 CC=POS(0) 'record current column
1760 LOCATE 25,56
1770 PRINT DF$
1780 LOCATE RC,CC 'restore position of cursor
1790 RETURN
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0187

     Volume in drive A has no label
     Directory of A:\

    AUTODIAL BAS      6016  12-03-83   7:16a
    CONVERT  BAS      4445   6-18-83   1:39p
    EZSIG3   HLP     17664   1-24-84  11:08p
    HAYSMODM BAS      2944  11-27-83   6:07p
    KILLNULL BAS       384   6-05-82
    PC-SPEAK BAS     10752   6-25-83   7:00a
    TALK450  DOC      7424   3-07-84  11:02p
    TALK450  MRG      1024   3-07-84  10:56p
    BASECONV BAS      6528  10-16-83  12:23p
    XXX                768   6-03-84  11:02p
    CRC      TXT      1029  11-15-84   7:49a
    CRCK4    COM      1536  10-21-82   7:54p
           12 file(s)      60514 bytes
                           97792 bytes free
