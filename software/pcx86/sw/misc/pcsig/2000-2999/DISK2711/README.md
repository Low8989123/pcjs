---
layout: page
title: "PC-SIG Diskette Library (Disk #2711)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2711/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2711"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## AT-SLOW.DOC

{% raw %}
```
AT-SLOW.DOC

There are no implied warranties or guarantees with this software.  To the best
of our knowledge it is free from defect.

Provided by PCGURU BBS
Tested on 9/08/88 by David R. Foley
PC GURU BBS  (617) 783-5154  24 Hours 2400bps



                                AT-SLOW
                    PC-AT High Performance Slowdown
                             By David Keil

        AT-SLOW is a utility which when loaded will use the high 
   resolution timer found in a PC-AT or close clone to slow down 
   games and other programs which run to fast on PC-AT's.

        This program is hardware dependent and requires a PC-AT or 
   close clone to operate. AT-SLOW uses the AT's real time clock 
   found at interrupt 70h to slow down the AT's speed.
        Using the real time clock's interrupt has two advantages 
   over the usual use of the normal PC's timer.

     1 - The high resolution timer occurs 1024 times a second (as
         opposed to 18.2 with the normal timer). This provides a much 
         smoother slow down than with the normal timer. This also 
         provides a higher degree of performance reduction.
     2 - Since this slow down uses interrupt 70h and only AT's use
         this interrupt, programs don't know to re-vector it. So
         programs that don't work with mormal slow down programs
         will work with AT-SLOW.






   Using AT-SLOW:

        The command for using AT-SLOW is

            at-slow [/delay][/d][/h]

        Where:
            /delay = Amount of performance reduction.
            /d     = Disables AT-SLOW
            /h     = Show brief help message

        The range of values for delay is 1-1000. Values of 300-400 
   on 286 machines is usually adequate. Care must be used when using 
   values over 400 (over 800 on 386 machines) as the computer will 
   be slowed down to the point of uselessness where it appears to be 
   locked up or if slowed down enough will lock up. If this occurs 
   the only solution is to re-boot the computer.
        Once installed AT-SLOW can be disabled by using the /d 
   option. This option will disable the timer interrupt and return 
   the computer to normal speed. AT-SLOW can be removed with TSR 
   management programs such as MARK & RELEASE however care must be 
   taken to disable AT-SLOW first or the interrupt may remain active 
   and this will cause about a 10% reduction in performance. The 
   program uses very little memory however and when disabled does 
   not effect performance so leaving it in memory should not be of 
   great concern.
        To reactivate AT-SLOW after disabling it or to change the 
   delay value just re-run AT-SLOW with the new delay value.






      If you find AT-SLOW useful:

        This program is copyrighted and may only be distributed
   in unmodified form and with this DOC file included. Absolutely no
   money may be charged for distribution of this program. If you
   were charged for the disk that contained this software and have
   the name of the company that did so please contact me.

        A lot of time went into the finding of information which
   enabled the writing of AT-SLOW, the Program itself is not that
   complex. So if you find this program useful (and I'm sure you
   will) and would like to support the development of more PC-AT
   (and other high performance computers) related software
   (here it comes). Please send a contribution of $5.00 payable to:

   Better Software Co.
   10 W. Wilburn Ave.
   Greenville, S.C. 29611

   Home (803) 295-4971
   BBS  (803) 269-7899 after 1st of July   (1200-2400)
                       after 1st of August (1200-9600)

EOF
```
{% endraw %}

## FILE2711.TXT

{% raw %}
```
Disk No: 2711
Disk Title: Techstaff Games Volume II
PC-SIG Version: S1

Program Title: TechStaff Games Volume II
Author Version: 3/91
Author Registration: $5.00
Special Requirements: Some games require graphics.

TECHSTAFF GAMES VOLUME II is a collection of popular games for all ages.

Contained on this disk are the following games:

~ HIQ1 -- A puzzle with 32 pegs arranged in a cross with the center
position empty.  The object of the game is to remove all but one peg by
jumping across pegs horizontally or vertically.  The ``perfect game'' is
when the last peg is located in the center of the cross.

~ PCMAN1 -- Another version of the popular game PacMan.  Choose between
one to four ghosts.  The screen uses ASCII graphic characters while the
program keeps track of the top ten scores.

~ WHEEL3 -- A version of the game Wheel of Fortune, for one to three
players.  A hidden phrase is given, and each player is given a turn to
guess a consonant or buy a vowel.  Spin a wheel to determine how much
money each correct guess wins.

~ STATES1 -- A States and Capitals quiz game.  Questions can be True -
False, multiple-choice, or fill-in-the-blanks.

~ ERULET1 -- The game of European Roulette for one to four players.
Thirty-six possible outcomes are on the wheel and each player makes bets
on which number might come up next.  Three separate bets are made on
each turn -- one on the specific number that will show up, another on
whether the number is odd or even, and another on one of three blocks of
twelve numbers.  ERULET1 requires graphics.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1991 PC-SIG, Inc.
```
{% endraw %}

## WHEEL.BAS

{% raw %}
```bas
10 CLEAR :SCREEN 0:WIDTH 80:COLOR 15,1,1:KEY OFF:CLS
15 ON KEY(1) GOSUB 40000:KEY (1) ON
20 RANDOMIZE(VAL(MID$(TIME$,4))+VAL(RIGHT$(TIME$,2)))
30 DEF FNR(X)=INT(RND*X)+1
40 DIM COL(3),N$(3),M(3),TOT(3),FREE(3),USED(26),P(200)
50 COL(1)=10:COL(2)=11:COL(3)=13
100 GOSUB 10030    '  Title Page
120 GOSUB 12000    '  Set up screen
200 ROUND=1
205 LOCATE 2,1:COLOR 15,0:PRINT" Round";ROUND:COLOR 15,1
206 GOSUB 11000    '  Set up the wheel for this round
210 GOSUB 13000    '  Get a puzzle and put it up
220 TURN=ROUND     '  First player starts first round, second starts second...
230 IF TURN>NP THEN TURN=1
240 REM  Set up the starting wheel
250 W=0
260 COLOR 14,4
270   LOCATE 22,19:PRINT " ";LEFT$(WW0$,42);" ";
280   LOCATE 23,19:PRINT " ";LEFT$(WW1$,42);" ";
320 LOCATE 21,12*TURN+15:COLOR COL(TURN)+16,1:PRINT STRING$(4,25) 'Flash arrows
330 LOCATE 18,1:COLOR COL(TURN):PRINT N$(TURN);:COLOR 15
340 PRINT", it's your turn."
341 COLOR 15,1:LOCATE 19,1:PRINT"Press ";:COLOR 31:PRINT"SPACE";:COLOR 15
345 PRINT" to spin the wheel, ";:COLOR 31:PRINT"V";:COLOR 15
346 PRINT" to buy a vowel, or ";:COLOR 31:PRINT"S";:COLOR 15
347 PRINT" to solve the puzzle."
350 A$=INKEY$:IF A$="V" OR A$="v" THEN GOSUB 15000 ELSE IF A$="S" OR A$="s" THEN GOSUB 16000
355 IF A$=" " THEN LOCATE 19,1:PRINT SPACE$(79); ELSE 350
360 LOCATE 19,1:PRINT SPACE$(79);
370 D3=FNR(300)+200
380 D=0:D2=0:COLOR 14,4
390 W=(W+1) MOD 24
410 LOCATE 22,20:PRINT MID$(WW0$,1+W*6,42)
420 LOCATE 23,20:PRINT MID$(WW1$,1+W*6,42)
430 SOUND 700,0.3
440 FOR A=1 TO D:NEXT A:D=D+D2:D2=D2+1:IF D>D3 THEN 500
450 GOTO 390
500 REM  Now let's see what they got
510 A$=MID$(WW0$,(W+TURN*2)*6-5,6)
520 IF INSTR(A$,"$")>0 THEN 600 '  Money
530 IF A$=" BANK " THEN 17000   '  Bankrupt
540 IF A$=" FREE " THEN 18000   '  Free spin
550 IF A$=" LOSE " THEN 19000   '  Lose turn
600 REM
610 REM  Money
620 REM
625 AMT=VAL(MID$(A$,INSTR(A$,"$")+1))
630 COLOR 15,1:LOCATE 19,1,1:PRINT"Please guess a letter (Not a vowel)  -->  ";
640 A$=INKEY$:IF A$="" THEN 640
650 IF A$>="a" AND A$<="z" THEN A$=CHR$(ASC(A$)-32)
660 IF A$<"A" OR A$>"Z" THEN BEEP:GOTO 640
670 IF A$="A" OR A$="E" OR A$="I" OR A$="O" OR A$="U" THEN BEEP:GOTO 640
680 IF USED(ASC(A$)-64) THEN BEEP:GOTO 640
690 COLOR 11:PRINTA$;:LOCATE ,,0
695 USED(ASC(A$)-64)=1:LOCATE 25,14+(ASC(A$)-64)*2:PRINT" ";
700 LT=0:FOR A=1 TO LEN(P$)
710 X$=MID$(P$,A,1)
720 IF X$<>A$ THEN 750
730 LOCATE 8,A-1+ST:COLOR 11:PRINT A$;:M(TURN)=M(TURN)+AMT
740 SOUND 500,0.1:LT=1:CN=CN-1:IF CN=0 THEN 50000
750 NEXT A:IF LT=0 THEN 780
760 COLOR COL(TURN):LOCATE 11,24*TURN-13:PRINT USING"$##,###";M(TURN);
770 GOTO 341
780 LOCATE 19,1:PRINT SPACE$(80);:LOCATE 19,1:COLOR 15,1:PRINT"Sorry, there are no ";:COLOR 11:PRINT A$;
790 COLOR 15:PRINT"'s.";:SOUND 40,10
800 IF FREE(TURN)=0 THEN 809
801 LOCATE 20,1,1:PRINT"You have a free spin, would you like to use it?  ";
802 A$=INKEY$:IF A$="" THEN 802
803 IF A$<>"Y" AND A$<>"y" THEN 820
804 COLOR 7:PRINT"Yes"
805 FREE(TURN)=FREE(TURN)-1
806 IF FREE(TURN)=0 THEN FOR A=14 TO 16:LOCATE A,24*TURN-19,0:PRINT"      ";:NEXT ELSE COLOR COL(TURN):LOCATE 14,24*TURN-19,0:PRINT FREE(TURN);:IF FREE(TURN)=1 THEN LOCATE 16,24*TURN-19:PRINT"SPIN ";
807 COLOR 15:LOCATE 19,1:PRINT SPACE$(160);:GOTO 341
809 LOCATE 20,1:PRINT"Press ";:COLOR 31:PRINT"ENTER";:COLOR 15:PRINT" to go on..."
810 IF INKEY$<>CHR$(13) THEN 810
820 LOCATE 19,1,0:PRINT SPACE$(159);
900 REM  Now go to next guy
910 LOCATE 21,12*TURN+15:COLOR COL(TURN),1:PRINT STRING$(4,25) 'Still arrows
915 LOCATE 18,1:PRINT SPACE$(50);
920 TURN=TURN+1:IF TURN>NP THEN TURN=1
930 GOTO 320
999 END
10000 REM
10010 REM  Title Page
10020 REM
10030 COLOR 10
10040 LOCATE ,19:PRINT"█   █ █   █ █████ █████ █
10050 LOCATE ,19:PRINT"█   █ █   █ █     █     █
10060 LOCATE ,19:PRINT"█ █ █ █   █ █     █     █
10070 LOCATE ,19:PRINT"█▐█▌█ █████ ████  ████  █
10080 LOCATE ,19:PRINT"██ ██ █   █ █     █     █
10090 LOCATE ,19:PRINT"█▌ ▐█ █   █ █     █     █
10100 LOCATE ,19:PRINT"█   █ █   █ █████ █████ █████
10110 COLOR 11:LOCATE 1,50
10120 LOCATE ,52:PRINT"█████ █████"
10130 LOCATE ,52:PRINT"█   █ █
10140 LOCATE ,52:PRINT"█   █ █
10150 LOCATE ,52:PRINT"█   █ ████
10160 LOCATE ,52:PRINT"█   █ █
10170 LOCATE ,52:PRINT"█   █ █
10180 LOCATE ,52:PRINT"█████ █
10190 COLOR 13:PRINT
10200 LOCATE ,20:PRINT"█████ █████ █████ █████ █   █ █  █ █████
10210 LOCATE ,20:PRINT"█     █   █ █   █   █   █   █ █▌ █ █
10220 LOCATE ,20:PRINT"█     █   █ █   █   █   █   █ ██ █ █
10230 LOCATE ,20:PRINT"████  █   █ █████   █   █   █ █▐▌█ ████
10240 LOCATE ,20:PRINT"█     █   █ █  █    █   █   █ █ ██ █
10250 LOCATE ,20:PRINT"█     █   █ █  ▐▌   █   █   █ █ ▐█ █
10260 LOCATE ,20:PRINT"█     █████ █   █   █   █████ █  █ █████
10270 LOCATE 17,33:COLOR 31,0:PRINT" By Gregg Minkow "
10275 COLOR 14,4:LOCATE 25,1:PRINT"  -----> Make sure you have the disk with the .WOF files in the default drive. ";
10280 COLOR 15,1,1:LOCATE 20,1,1:PRINT"Number of players (1-3)  ? ";
10290 A$=INKEY$:IF A$<"1" OR A$>"3" THEN 10290
10300 LOCATE ,,0:NP=VAL(A$):COLOR 7:PRINTA$
10310 FOR A=1 TO NP
10320 LOCATE 20+A,1:COLOR 15:PRINT"Player no.";A;", what is your name?  ";
10330 COLOR COL(A):LINE INPUT N$(A):IF N$(A)="" THEN 10320
10340 N$(A)=LEFT$(N$(A),12)
10350 NEXT A
10360 FOR A=20 TO 23:LOCATE A,1:PRINT SPACE$(79);:NEXT
10380 COLOR 15,1:RETURN
11000 '
11010 '  Initialize spinner
11020 '
11030 OPEN"WHEELS.WOF" FOR INPUT AS #1
11040 FOR A=1 TO ROUND
11050 INPUT #1,WW0$:INPUT #1,WW1$:WW0$=" "+WW0$:WW1$=" "+WW1$
11060 NEXT A
11070 CLOSE
11080 RETURN
12000 REM
12010 REM  Set up screen
12020 REM
12030 CLS
12040 COLOR 7,1:LOCATE 1,30:PRINT STRING$(22,220);
12050 COLOR 12,7:LOCATE 2,30:PRINT" * Wheel of Fortune * "
12060 LOCATE 3,30:PRINT"   By  Gregg Minkow   "
12070 COLOR 7,1:LOCATE 4,30:PRINT STRING$(22,223);
12080 COLOR 15,4
12090 FOR A=22 TO 23
12100   LOCATE A,19:PRINT SPACE$(44);
12110 NEXT A
12120 FOR A=1 TO NP:COLOR COL(A),1
12130 LOCATE 10,24*A-13:PRINTN$(A);
12140 LOCATE 11,24*A-13:PRINT USING"$##,###";M(A);
12150 COLOR ,0:LOCATE 13,24*A-13:PRINT CHR$(201);STRING$(10,205);CHR$(187);
12160 FOR B=14 TO 16
12170   LOCATE B,24*A-13:PRINT CHR$(186);SPC(10);CHR$(186);
12180 NEXT B
12190 LOCATE 17,24*A-13:PRINT CHR$(200);STRING$(10,205);CHR$(188);
12200 LOCATE 15,24*A-11:PRINT USING"$###,###";TOT(A);
12210 COLOR ,1:LOCATE 21,12*A+15:PRINT STRING$(4,25);
12220 NEXT A
12230 RETURN
13000 REM
13010 REM  Get a puzzle
13020 REM
13025 OPEN "R",1,"PUZZLES.WOF"
13026 FIELD #1, 2 AS L$, 40 AS PUZZLE$, 15 AS CAT$
13027 GET #1,1:PZ=CVI(L$): REM  The first file contains the number of last p$
13030 P=FNR(PZ-1)+1:IF P(P) THEN 13030
13040 GET #1,P+1:P$=LEFT$(PUZZLE$,CVI(L$)):C$=CAT$:P(P)=1:CLOSE
13045 IF RIGHT$(C$,1)=" " THEN C$=LEFT$(C$,LEN(C$)-1):GOTO 13045
13050 COLOR 11,1:ST=(80-LEN(P$))/2:CN=0
13060 FOR A=1 TO LEN(P$)
13070   LOCATE 8,A-1+ST
13080   X$=MID$(P$,A,1)
13090   IF X$>="A" AND X$<="Z" THEN PRINT CHR$(254); ELSE PRINT X$;
13095   IF X$<>"A" AND X$<>"E" AND X$<>"I" AND X$<>"O" AND X$<>"U" AND X$>"A"             AND X$<="Z" THEN CN=CN+1
13100 NEXT A
13110 LOCATE 6,(80-LEN(C$))/2-1:COLOR 11,4:PRINT" ";C$;" ";
13115 SOUND 500,2:SOUND 700,2:SOUND 1000,2.5:SOUND 1200,3
13120 COLOR 15,1:LOCATE 25,1
13130 PRINT"Letters left:  ";
13140 FOR A=1 TO 26
13150   USED(A)=0:A$=CHR$(64+A):COLOR 15
13160   IF A$="A" OR A$="E" OR A$="I" OR A$="O" OR A$="U" THEN COLOR 12
13170   PRINTA$;" ";
13180 NEXT A
13190 RETURN
15000 REM
15010 REM  Buy a vowel
15020 REM
15023 LOCATE 19,1:PRINT SPACE$(159);
15025 IF M(TURN)<250 THEN COLOR 15,1:LOCATE 19,1:PRINT"Sorry, you don't have enough money.":BEEP:GOTO 15940
15030 IF USED(1) AND USED(5) AND USED(9) AND USED(15) AND USED(21) THEN BEEP:         COLOR 15,1:LOCATE 19,1:PRINT"Sorry, there aren't any vowels left.":             GOTO 15940
15040 COLOR 15,1:LOCATE 19,1,1:PRINT"Vowels cost $250 each.  Which one do you want?  ";
15050 A$=INKEY$:IF A$="" THEN 15050
15055 IF A$=" " OR A$=CHR$(13) OR A$=CHR$(27) THEN BEEP:GOTO 15900
15060 IF A$>="a" AND A$<="z" THEN A$=CHR$(ASC(A$)-32)
15070 IF A$="A" OR A$="E" OR A$="I" OR A$="O" OR A$="U" THEN 15075 ELSE BEEP:         GOTO 15050
15075 IF USED(ASC(A$)-64) THEN BEEP:GOTO 15050
15080 COLOR 12:PRINT A$;:A=ASC(A$)-64:USED(A)=1:LOCATE 25,14+A*2,0:PRINT" ";
15090 M(TURN)=M(TURN)-250:COLOR COL(TURN):LOCATE 11,24*TURN-13:                       PRINT USING"$##,###";M(TURN)
15100 LT=0
15110 COLOR 11
15120 FOR A=1 TO LEN(P$)
15130  X$=MID$(P$,A,1)
15140  IF X$=A$ THEN LOCATE 8,A-1+ST:PRINTA$;:SOUND 500,0.2:LT=1
15150 NEXT
15160 IF LT THEN 15900 ELSE COLOR 15:LOCATE 19,1:PRINT SPACE$(80);:LOCATE 19,1:PRINT"Sorry, there were no ";:COLOR 11:PRINT A$;:COLOR 15:PRINT"'s.";:SOUND 40,10
15165 IF NOMORE=1 THEN NOMORE=0:RETURN 51000 ELSE RETURN 800
15900 LOCATE 19,1,0:COLOR 15:PRINT SPACE$(79);
15930 IF NOMORE=0 THEN RETURN 341 ELSE NOMORE=0:LOCATE 19,1:COLOR 14:PRINT"There are no more consonants left in this puzzle.":COLOR 15:RETURN 50050
15940 LOCATE 20,1:COLOR 15:PRINT"Press";:COLOR 31:PRINT" ENTER ";:COLOR 15:PRINT"to continue..."
15950 IF INKEY$<>CHR$(13) THEN 15950
15960 LOCATE 19,1:PRINT SPACE$(159);
15970 IF NOMORE=0 THEN RETURN 341 ELSE NOMORE=0:LOCATE 19,1:COLOR 14:PRINT"There are no more consonants left in the puzzle.":RETURN 50050
16000 REM
16010 REM  Solve the puzzle
16020 REM
16030 LOCATE 19,1:PRINT SPACE$(79);:LOCATE 19,1:COLOR 15,1:PRINT"Type in your solution:  ";:COLOR 11
16040 LINE INPUT S$
16045 FOR A=1 TO LEN(P$):X$=MID$(S$,A,1)
16046 IF X$>="a" AND X$<="z" THEN MID$(S$,A,1)=CHR$(ASC(X$)-32)
16047 NEXT
16050 LOCATE 19,1:COLOR 15,1:PRINT SPACE$(159);
16060 IF LEFT$(S$,LEN(P$))<>P$ THEN 16200
16070 LOCATE 19,1:PRINT SPACE$(159);:LOCATE 19,1:COLOR 26:PRINT"Congratulations, you got it!!!  You get a $1000 bounus!!!";
16075 M(TURN)=M(TURN)+1000:COLOR COL(TURN):LOCATE 11,24*TURN-13:PRINT USING"$##,###";M(TURN);
16076 COLOR ,0:TOT(TURN)=TOT(TURN)+M(TURN):LOCATE 15,24*TURN-11:PRINT USING"$###,###";TOT(TURN);
16077 COLOR 11,1:LOCATE 8,ST:PRINT P$;
16080 PLAY "O3 P8 O2E8 O2G8. O2E16 F8 G4."
16090 PLAY "O3 P8 O2E8 O2G8. O2E16 F8 G4."
16100 LOCATE 20,1:COLOR 15,1:PRINT"Press ";:COLOR 31:PRINT"ENTER";:COLOR 15:PRINT" to continue...";
16110 IF INKEY$<>CHR$(13) THEN 16110
16120 LOCATE 18,1:PRINT SPACE$(239);:GOTO 25000
16200 LOCATE 19,1:PRINT SPACE$(159);:LOCATE 19,1:PRINT"Sorry, that's not right!!!";
16210 PLAY"L32O1BAGFEDO0BA"
16220 RETURN 800
17000 REM
17010 REM  Bankrupt
17020 REM
17030 LOCATE 19,1:COLOR 31,8:PRINT" Too bad. You went bankrupt!! "
17040 FOR A=700 TO 500 STEP -1:SOUND A,0.1:NEXT
17050 M(TURN)=M(TURN)-M(TURN) MOD 10:IF M(TURN)=0 THEN 17150
17060 SND=1900:COLOR COL(TURN),1
17070 LOCATE 11,24*TURN-13:PRINT USING"$##,###";M(TURN)
17080 SOUND SND,0.1:SOUND 800,0.1:SND=SND-2:IF SND<=50 THEN SND=50
17090 M(TURN)=M(TURN)-10
17100 IF M(TURN)<0 THEN 17150
17110 GOTO 17070
17150 M(TURN)=0:COLOR 15,1:GOTO 800
18000 REM
18010 REM  Free spin
18020 REM
18030 LOCATE 19,1:COLOR 30,1:PRINT"You get a free spin!!!  You may use it any time."
18035 COLOR COL(TURN):FREE(TURN)=FREE(TURN)+1
18036 LOCATE 14,24*TURN-19:PRINT FREE(TURN);:LOCATE 15,24*TURN-19:PRINT"FREE";:LOCATE 16,24*TURN-19:PRINT"SPIN";:IF FREE(TURN)>1 THEN PRINT"S";
18040 PLAY"O3L64CEADEDGFECABFDEFABDGFBEAG
18050 LOCATE 20,1:COLOR 15:PRINT"Press ";:COLOR 31:PRINT"ENTER ";:COLOR 15:PRINT"to go on..."
18060 IF INKEY$<>CHR$(13) THEN 18060
18070 LOCATE 19,1:PRINT SPACE$(159);:GOTO 341
19000 REM
19010 REM  Lose turn
19020 REM
19030 LOCATE 19,1:COLOR 28,1:PRINT" Too bad, you lose your turn... ";
19040 FOR A=500 TO 700:SOUND A,0.1:SOUND 750-A,0.1:NEXT
19900 COLOR 15,1:GOTO 800
25000 REM
25010 REM  The puzzle is solved
25020 REM
25030 REM  Clear up the board
25035 LOCATE 2,1:COLOR 15,8:PRINT"         ";:COLOR 15,1
25040 LOCATE 6,1:PRINT SPACE$(239);
25050 FOR A=1 TO NP:COLOR COL(A)
25060 LOCATE 11,24*A-13:PRINT USING"$##,###";0:M(A)=0
25070 NEXT A
25080 LOCATE 21,12*TURN+15:COLOR COL(TURN):PRINT STRING$(4,25);
25090 COLOR 14,4:LOCATE 22,20:PRINT SPACE$(42);
25100 LOCATE 23,20:PRINT SPACE$(42);:COLOR 15,1
25110 LOCATE 25,1:PRINT SPACE$(79);
25120 ROUND=ROUND+1:IF ROUND>3 THEN 30000
25130 LOCATE 19,1:COLOR 15:PRINT"Now we're going on to round";ROUND
25140 PRINT"Press ";:COLOR 31:PRINT"ENTER";:COLOR 15:PRINT" to continue..."
25150 IF INKEY$<>CHR$(13) THEN 25150
25160 LOCATE 19,1:PRINT SPACE$(159);
25170 GOTO 205
25900 GOTO 25900
26000 END
30000 REM
30010 REM  The Game's Over
30020 REM
30030 REM  Find out who has the most money...
30031 COLOR 15:LOCATE 2,1:PRINT SPACE$(10)
30032 FOR A=21 TO 23:LOCATE A,1:PRINT SPACE$(80);:NEXT
30040 X=0:H=0:FOR A=1 TO 3
30050 IF TOT(A)>H THEN H=TOT(A):X=1:M(X)=A:GOTO 30070
30060 IF TOT(A)=H THEN X=X+1:M(X)=A
30070 NEXT A
30080 LOCATE 19,1:COLOR 15
30090 IF X=1 THEN PRINT"The winner is ";:COLOR COL(M(1))+16:PRINTN$(M(1));:COLOR 15:PRINT"!!!":GOTO 31000
30100 LOCATE 18,1:PRINT"We have a";X;"way tie!!"
30110 PRINT"The winners are ";
30120 COLOR COL(M(1))+16:PRINTN$(M(1));:COLOR 15
30130 IF X=2 THEN PRINT" and "; ELSE PRINT", ";
30140 COLOR COL(M(2))+16:PRINTN$(M(2));:COLOR 15
30150 IF X=3 THEN PRINT" and ";:COLOR COL(3)+16:PRINTN$(3);:COLOR 15
30160 PRINT"!!!"
31000 REM
31010 FOR B=1 TO X
31020 A=M(B):COLOR COL(A)+16,7
31030 LOCATE 13,24*A-13:PRINT CHR$(201);STRING$(10,205);CHR$(187);
31040 FOR C=14 TO 16
31050 LOCATE C,24*A-13:PRINT CHR$(186);SPC(10);CHR$(186);
31060 NEXT C
31070 LOCATE 17,24*A-13:PRINT CHR$(200);STRING$(10,205);CHR$(188);
31080 LOCATE 15,24*A-11:PRINT USING"$###,###";TOT(A);
31090 NEXT B
31100 PLAY "Mf MN T180"
31110 PLAY "O2 C8.C16 F8 C8 F8 A8 F4 F8.F16 A8 F8 A8 O3C8 O2 A4 F8.A16 O3 C4  O2 A8.F16 C4 C8.C16 F4 F8.F16 F4 MF"
31150 COLOR 15,1:LOCATE 20,1,1
31160 PRINT"Would you like to play again?  ";
31170 A$=INKEY$:IF A$="" THEN 31170
31180 IF A$="Y" THEN PRINT"Yes.":LOCATE ,,0:RUN
31190 CLS:PRINT"Thank you for playing.":PRINT:PRINT:END
39000 GOTO 39000
40000 CLS:END
50000 REM
50010 REM  No more consonants
50020 REM
50030 LOCATE 19,1:PRINT SPACE$(159);
50035 PLAY"MBO4T90L8EEEEEMF"
50040 LOCATE 19,1:COLOR 14:PRINT"There are no more consonants left.  You must try to solve the puzzle now."
50050 LOCATE 20,1:COLOR 15,1:PRINT"Type ";:COLOR 31:PRINT"V";:COLOR 15:PRINT" to buy a vowel, or ";:COLOR 31:PRINT"S";:COLOR 15:PRINT" to try to solve it."
50060 A$=INKEY$:IF A$="" THEN 50060
50070 IF A$="V" OR A$="v" THEN NOMORE=1:GOSUB 15000
50080 IF A$<>"S" AND A$<>"s" THEN BEEP:GOTO 50060
50090 LOCATE 19,1:PRINT SPACE$(159);:LOCATE 19,1:COLOR 15:PRINT"Please type in your solution:  ";:COLOR 11
50100 LINE INPUT S$
50110 FOR A=1 TO LEN(P$):X$=MID$(S$,A,1)
50120 IF X$>="a" AND X$<="z" THEN MID$(S$,A,1)=CHR$(ASC(X$)-32)
50130 NEXT A
50140 IF LEFT$(S$,LEN(P$))=P$ THEN 16070
50150 LOCATE 19,1:PRINT SPACE$(159);:COLOR 15,1
50160 LOCATE 19,1:PRINT"Sorry, that's not right!!!";
50170 PLAY"L32O1BAGFEDO0BA"
51000 LOCATE 20,1:COLOR 15:PRINT"Press ";:COLOR 31:PRINT"ENTER";:COLOR 15:PRINT" to go on..."
51010 IF INKEY$<>CHR$(13) THEN 51010
51020 LOCATE 18,1:PRINT SPACE$(230);
51021 LOCATE 21,12*TURN+15:COLOR COL(TURN),1:PRINT STRING$(4,25)
51030 TURN=TURN+1:IF TURN>NP THEN TURN=1
51040 LOCATE 18,1:COLOR COL(TURN):PRINTN$(TURN);
51050 COLOR 15:PRINT", it's your turn."
51055 LOCATE 21,12*TURN+15:COLOR COL(TURN)+16,1:PRINT STRING$(4,25):COLOR 15,1
51060 LOCATE 19,1:COLOR 14:PRINT"There are no more consonants left in the puzzle."
51070 GOTO 50050
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2711

     Volume in drive A has no label
     Directory of A:\

    SCREEN2            638   3-15-91  12:56a
    WHEEL    BAS     11392  11-03-85   5:10p
    5        BAT        44   3-16-91  12:03a
    6        BAT        46   3-16-91  12:03a
    7        BAT        46   3-16-91  12:03a
    8        BAT        47   3-16-91  12:03a
    9        BAT        47   3-16-91  12:03a
    GO       BAT        31   3-16-91  12:03a
    H        BAT        55   3-16-91  12:03a
    S        BAT       114   3-16-91  12:03a
    AT-SLOW  COM      1279   6-12-88   2:56p
    SLOWPS2  COM       128   8-27-87  12:38a
    AT-SLOW  DOC      3763   9-11-88  10:17p
    ERULET1  EXE     52554   3-16-91   1:11a
    FILE2711 TXT      1696   7-25-91   2:23a
    HIQ1     EXE     40580   3-16-91   1:06a
    PCMAN1   EXE     47912   3-13-91  12:15a
    STATES1  EXE     45650   3-15-91   3:29a
    WHEEL3   EXE     61266   3-15-91  12:29a
    HISCORE  PC          0   3-15-91   2:58a
    PUZZLES  WOF     19200  11-03-85   5:10p
    WHEELS   WOF      1152  11-03-85   5:10p
    HELP2              539   3-16-91   1:14a
           23 file(s)     288179 bytes
                           19456 bytes free
