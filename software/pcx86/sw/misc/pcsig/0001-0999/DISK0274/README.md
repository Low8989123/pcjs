---
layout: page
title: "PC-SIG Diskette Library (Disk #274)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0274/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0274"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "BRIAN'S GAMES"

    This disk has some of the better games in the PC-SIG library.  Shoot
    the martians before they kill you in the arcade game, SPACEVAD.  Hear
    Wocka, Wocka, Wocka as you play that old favorite, PACKMAN, and keep
    your eye on the ball when playing BREAKOUT.  All these games run on the
    PCjr, so nobody is left out.
    File Descriptions:
    
    CASTLE   EXE  Find your way out of castle, get treasures, kill monsters.
    CASTLE   RAN  Part of CASTLE game.
    GAMES    TXT  Comments from the person who selected these programs.
    XWING    BAS  Try to destroy the deathstar.
    WIZARD   BAS  A role game to find the ORB of ZOT.
    LIFE2    BAS  Source code for LIFE2.
    LIFE2    EXE  Try to make your bacteria live.
    BUGS!    SCR  Part of BUGS.
    BUGS     EXE  Shoot crawling creatures before they get you.
    LANDER   SCR  Part of LANDER.
    LANDER   BIN  Part of LANDER.
    LANDER   BAS  Land a space ship on a pad without crashing.
    SPACEVAD EXE  Shoot invaders before they invade earth.
    BREAKOUT BAS  Try to break out of a brick wall, like tennis.
    PACKMAN  DOC  Documentation for PACKMAN.EXE.
    PACKMAN  EXE  Gobble power pellets and eat monsters.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BREAKOUT.BAS

{% raw %}
```bas
10 REM ibm pc spinout
20 REM K.R. Sloan, Jr.
30 REM 1 January 1982
40 DIM BALL[14]
50 DIM PADDLE[9]
60 DIM BRICK[20,4]
65 RANDOMIZE(VAL(RIGHT$(TIME$,2)))
70 KEY OFF:PLAY "mb"
80 LOUD=0
90 BRUNO$="l16o2b-o3cl8ddc+16do2fp1"
110 T=8:B=188:L=8:R=308
120 BH=8:BW=(R-L)/20
130 BT=T+(BH*4):BB=BT+(BH*4)
135 CLS
140 LOCATE 7,12: PRINT "Welcome to Spinout";
150 LOCATE 8,12: PRINT "ArchMach Version 1";
160 LOCATE 12,1:PRINT "Choose a key to move the paddle right";
170 R$=INKEY$:IF R$="" GOTO 170
180 LOCATE 12,1:PRINT "Choose a key to move the paddle left ";
190 L$=INKEY$:IF L$="" GOTO 190
200 IF R$=L$ GOTO 160
210 LOCATE 12,1:PRINT "Choose a key to serve                ";
220 S$=INKEY$:IF S$="" GOTO 220
230 IF (R$=S$)OR(L$=S$) GOTO 160
240 LOCATE 12,1:PRINT "Choose a key to turn noise on/off   ";
250 N$=INKEY$:IF N$="" GOTO 250;
260 IF (R$=N$)OR(L$=N$)OR(S$=N$) GOTO 160
270 LOCATE 12,1:INPUT;"How good are you at this game (1-10)";SKILL
275 IF SKILL<1 GOTO 270
276 IF SKILL>10 GOTO 270
280 SKILL=SKILL/10
290 MAXVX=6+(4*SKILL):MAXVY=MAXVX
295 G=SKILL/5
296 DEF SEG=0:EQUIPMENT%=PEEK(&H410) ':POKE &H410,EQUIPMENT%-&H10
297 WIDTH 40:WIDTH 80:SCREEN 0,0,0:SCREEN 1:COLOR 1,0:CLS
300 LINE (0,0)-(319,199),0,BF
310 FOR BY=0 TO 3
320 FOR BX=0 TO 19
330 BRICK[1+BX,1+BY]=10+50*BY
340 LINE (L+2+(BW*BX),BT+2+(BH*BY))-STEP (BW-4,BH-4),2+INT(BY/2),BF
350 NEXT BX,BY
360 SCORE = 0
370 LINE (L,T)-(R,T)
380 LINE -(R,B)
390 LINE -(L,B)
400 LINE -(L,T)
410 X=160:Y=100
420 LASTD$=""
430 FOR I=1 TO 5
440 FOR J=1 TO 5
450 IF ((I-3)*(I-3))+((J-3)*(J-3))<6.25 THEN PSET (X-3+I,Y-3+J)
460 NEXT J,I
470 GET (X-2,Y-2)-(X+2,Y+2),BALL
480 PL=150:PR=170:PY=B-20
490 LINE (PL,PY)-(PR,PY),1,BF
500 GET(PL,PY)-(PR,PY),PADDLE
510 REM main loop
520 IF LOUD=1 THEN PLAY BRUNO$
530 FOR SHOT=1 TO 4
540 LOCATE 25,1
550 PRINT USING "#####";SCORE;
560 LOCATE 25,8
570 PRINT USING "Ball #  ";SHOT;
580 LOCATE 25,18
590 PRINT "K.R.Sloan,Jr.  1Jan82";
600 IF X>R THEN X=R
610 IF X<L THEN X=L
620 IF Y<T THEN Y=T
630 IF Y>B THEN Y=B
640 PUT(X-2,Y-2),BALL
650 X=L+RND(X)*(R-L)
660 Y=B-10
670 PUT(X-2,Y-2),BALL
680 VX=6*RND(1)-3
690 VY=-5-2*RND(1)
700 SPIN=0
710 FAST=1+SKILL
720 GOSUB 1410 `MOVE PADDLE
730 IF D$<>S$ GOTO 720
740 OX=X:OY=Y:OBX=BX:OBY=BY
750 OVX=VX:OVY=VY
760 VX=OVX-(SPIN*OVY*.05):VY=OVY+(SPIN*OVX*.05)+G
761 SPIN=SPIN*.9999
770 IF VX>MAXVX THEN VX=MAXVX
771 IF VY>MAXVY THEN VY=MAXVY
780 IF VX<-MAXVX THEN VX=-MAXVX
781 IF VY<-MAXVY THEN VY=-MAXVY
790 X=X+VX:Y=Y+VY
800 BX=INT((X-L)/BW)
810 IF BX>19 THEN BX=19
820 IF BX<0 THEN BX=0
830 BY=INT((Y-BT)/BH)
840 IF BY>3 GOTO 1050
850 IF BY<0 GOTO 1050
860 IF BRICK[1+BX,1+BY]<=0 GOTO 1050
870 IF BY>1 GOTO 890
880 VY=VY*FAST
890 IF (OBX<>BX)THEN VX=-VX
900 IF (OBY<>BY)THEN VY=-VY
910 SCORE=SCORE+BRICK[1+BX,1+BY]
920 SOUND 440,2*LOUD
930 PUT(OX-2,OY-2),BALL,XOR
940 LINE (L+2+(BW*BX),BT+2+(BH*BY))    -STEP (BW-4,BH-4),0,BF
950 PUT(OX-2,OY-2),BALL,XOR
960 BRICK[1+BX,1+BY]=-BRICK[1+BX,1+BY]
970 IF SCORE<6800 GOTO 1050
972 LOCATE 25,1
974 PRINT USING "#####";SCORE;
980 FOR FLASH=1 TO 8
990 COLOR FLASH,.5+RND(FLASH)
1000 PLAY "mfaemb"
1010 NEXT FLASH
1040 GOTO 1340
1050 IF X<=L THEN X=L+L-X:VX=-VX:VY=VY+SPIN:SOUND 600,2*LOUD
1060 IF X>=R THEN X=R+R-X:VX=-VX:VY=VY-SPIN:SOUND 1200,2*LOUD
1070 IF Y<=T THEN Y=T+T-Y:VY=-VY:VX=VX-SPIN:SOUND 880,2*LOUD
1080 IF Y>=B GOTO 1310
1090 IF (Y<PY)OR(OY>PY) THEN GOTO 1270
1100 IF ((PL-2)<X)AND(X<(PR+2)) GOTO 1130
1110 IF ((PL-2)<OX)AND(OX<(PR+2)) GOTO 1130
1120 GOTO 1270
1130 Y=PY+PY-Y
1140 SOUND 300,5*LOUD
1150 IF (RND(1)*2)>SKILL GOTO 1210
1160 BX=INT(RND(1)*19.99):BY=INT(RND(1)*3.99):
1170 IF BRICK[1+BX,1+BY]>0 GOTO 1210
1180 BRICK[1+BX,1+BY]=-BRICK[1+BX,1+BY]
1190 LINE (L+2+(BW*BX),BT+2+(BH*BY)) -STEP (BW-4,BH-4),2+INT(BY/2),BF
1200 SCORE=SCORE-BRICK[1+BX,1+BY]
1210 LOCATE 25,1
1220 PRINT SCORE;
1230 VY=-VY
1240 MISS=(X-(PL+PR)/2)/(PL-PR)
1250 VX=VX+VY*MISS*SKILL*5
1260 SPIN=(SPIN*SKILL)+MISS*SKILL
1270 PUT(X-2,Y-2),BALL,XOR
1280 PUT(OX-2,OY-2),BALL,XOR
1290 GOSUB 1410 'move paddle
1300 GOTO 740
1310 REM lost ball
1320 IF LOUD=1 THEN SOUND 200,20
1330 NEXT SHOT
1340 REM End of Game
1341 'DEF SEG=0:POKE &H410,125:WIDTH 40:WIDTH 80:SCREEN 0,0,0
1342 WIDTH 80:SCREEN 0,0,0
1350 LOCATE 12,20
1360 PRINT "Do you want to play another game?"
1370 D$=INKEY$: IF D$="" THEN 1370
1380 IF D$="y" OR D$="Y" THEN RUN
1390 IF D$="n" OR D$="N" THEN CLS:RUN "MENU.PGM"
1400 GOTO 1360
1410 REM move paddle routine
1420 OPL=PL
1430 D$=INKEY$
1440 IF D$=N$ THEN LOUD=-1*LOUD+1
1450 IF D$=L$ THEN PL=PL-5:GOTO 1430
1460 IF D$=R$ THEN PL=PL+5:GOTO 1430
1470 IF PL<L THEN PL=L
1480 IF PL>(R-20) THEN PL=R-20
1490 IF OPL=PL THEN RETURN
1500 PR=PL+20
1510 PUT (OPL,PY),PADDLE,XOR
1520 PUT(PL,PY),PADDLE,XOR
1530 RETURN
```
{% endraw %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #274, version v1 
 
The following is a list of the file checksums which should be produced by
the CRCK4 program on this disk.  If the CRC numbers do not match the following
list you may have a bad file.  To use type:  CRCK4 <filespec>
 
CRCK4 output for this disk:
 

CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  GAMES   .TXT         CRC = A0 96

--> FILE:  CASTLE  .EXE         CRC = 3E FC

--> FILE:  CASTLE  .RAN         CRC = A5 D8

--> FILE:  SPACEVAD.EXE         CRC = 96 CE

--> FILE:  PACKMAN .EXE         CRC = F7 32

--> FILE:  PACKMAN .DOC         CRC = AC A0

--> FILE:  BREAKOUT.BAS         CRC = 35 25

--> FILE:  LANDER  .BAS         CRC = 68 3B

--> FILE:  LANDER  .BIN         CRC = 2D 3E

--> FILE:  LANDER  .SCR         CRC = A9 78

--> FILE:  BUGS    .EXE         CRC = 03 68

--> FILE:  BUGS!   .SCR         CRC = 8C 44

--> FILE:  LIFE2   .EXE         CRC = AD 95

--> FILE:  LIFE2   .BAS         CRC = 64 EA

--> FILE:  WIZARD  .BAS         CRC = 87 92

--> FILE:  XWING   .BAS         CRC = 55 33

--> FILE:  FILES   .TXT         CRC = 8B DF

 ---------------------> SUM OF CRCS = 3E EF

DONE 
 
These and other Public Domain and user-supported programs from:
 
PC Software Interest Group (PC-SIG)
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## FILES.TXT

{% raw %}
```
This disk is a collection of some of the better games in the PC-SIG
library.  All games run on the PCjr (though you may have to type
"mode co80" first).
 
GAMES    TXT  Comments from the person who selected these programs
CASTLE   EXE  Find your way out of the castle and get treasures, kill monsters
CASTLE   RAN  Part of CASTLE game
SPACEVAD EXE+ Shoot invaders before they invade earth
PACKMAN  EXE+ Gobble power pellets and eat monsters
PACKMAN  DOC  Documentation for PACKMAN.EXE
BREAKOUT BAS+ Try to break out of a brick wall, like tennis
LANDER   BAS+ Land a space ship on a pad without crashing
LANDER   BIN  Part of LANDER
LANDER   SCR  Part of LANDER
BUGS     EXE  Shoot crawling creatures before they get you
BUGS!    SCR  Part of BUGS
LIFE2    EXE  Try to make your bacteria live
LIFE2    BAS  Source code for LIFE2
WIZARD   BAS  A role game to find the ORB of ZOT
XWING    BAS+ Try to destroy the deathstar
FILES    TXT  Files on this disk
```
{% endraw %}

## GAMES.TXT

{% raw %}
```
 
Hello, my name is Jason and I would like to tell you more about the games
that PC-SIG has and give you my opinion of them.  PC-SIG games range from
boring to plain fun.  I will tell you all about the fun games.  You may
have already read my article in the previous Newsletter and now I will give
you more information and some hints.
 
CASTLE (#198)
 
One of the better games that PC Software has.  It has good graphics, is fun
to play and is very dangerous because you have to kill ogres and demons.
I'll give you some hints.  To go to the dungeon you must have the key from
the desk in the king's study.  When you get in the dungeon, there are traps
and if you don't have the necklace, located on the king's statue you will
die.  You'll need the necklace for the dungeon and the maze.  To go down
the staircase in the kitchen you must have the lamp, it's in the garden.
To get the treasures type "get" and the treasure you want.  When you want
to drop something type "drop" and what you want to drop.
 
SPACEVAD (#176)
 
This is a great game, a modified version of SPACE INVADERS.  It has
excellent graphics and is fun to play.  I think that you should destroy all
your bases first because they just get in the way when you fire and can
cause your death.  When you are destroyed, I recommend getting under a line
of invaders and shoot them down while they are slowed down.  Since you are
getting a new ship, get under the invaders and fire or you may get
SPACEDOUT.
 
XWING (#174)
 
Have you watched "Star Wars", well if you have your going to like this
game.  Your a XWING fighter pilot and you have to get to the DEATHSTAR and
destroy it.  You have to get by TY FIGHTERS and DARTH VADAR.  If you really
hate Darth Vadar, you have your chance to blow him out of the sky.  I don't
like to brag, but I've done it before with the greatest of ease.  Here's a
hint.  When you meet him or a TY Fighter, slow to mach 1 and destroy them.
If you don't, they may decide to destroy you and after that he will laugh
at you.
 
PACKMAN (#24)
 
PACKMAN is almost the same as the arcade game with good graphics and one of
the most fun games of PC-SIG.  When you eat a power pellet, you should eat
as many dots as you can unless you can get close enough to eat some of the
ghost monsters.
 
 
BREAKOUT (#177)
 
This is a very fun and fast game in which you have to BREAKOUT of a brick
wall.  You must not let the ball go by you or you'll lose that ball.  You
only have three balls.  You've got to be very fast and skillful to line the
pad up with the ball.  If you don't BREAKOUT, I advise you not to BREAKOUT
and go CRAZY with your vunerable computer.
 
WIZARD (#71)
 
IPCO WIZARDS CASTLE is a fun game where you play roles.  Like DUNGEONS &
DRAGONS, you are in a castle trying to get treasures.  Oh yes, there are
monsters and all sorts wierd creatures.  It's your choice to get killed in
this game.  You may not like this game because there are no graphics, but I
think it's fun.
 
LANDER (#55)
 
This is neat game because you get to land a space ship.  Sounds simple,
doesn't it?  The drawbacks to landing the space ship are; having to go over
mountains, lining up your ship to a little pad and a limited amount of
fuel.  It's a lot of fun and I recommend it.  If you do crash, please crash
without making too big of a mess.
 
BUGS (#177)
 
This is like the popular video game CENTIPEDE.  Don't be confused by the
weird shapes.  The weird shapes are there to block you from shooting the
centipede.  BUGS is a simple and very easy game to play.  You must be able
to look in several places at once.  To keep the board clear, you must kill
the little guy who makes the blocks.  I think this is a fun game and it
will keep you occupied.
 
The games I've just mentioned are excellent and very fun games to play.
I recommend them highly.  I have played these games several times and
they never get boring to me.  Of course, you may have another opinion.
Nevertheless, get involved and enjoy the games that PC-SIG has by
yourself or with your family.
 
```
{% endraw %}

## LANDER.BAS

{% raw %}
```bas
10 CLEAR,,2000:A$="VERSION   1.0"  ' Program : LANDER.BAS
20 DEF SEG=&H40: EQUIP=PEEK(&H10)
30 IF (EQUIP AND &H30) = &H30 THEN I1 = 0 ELSE I1 = 1
40 DEF SEG: WIDE = 40: JOY = 0: PRT = 0
50 COLR = 1: ADJUST = 1
60 PROGNAME$ = "     LUNAR LANDER"
70 SCREEN 0,1: KEY OFF: GOSUB 3190
80 GOSUB 1390    'Get lander pictures from disk.
90 GOSUB 160     'Setup initial conditions
100 GOSUB 480     'Display Moving ship
110 GOSUB 900     'Test for Crash or Landing
120 GOSUB 770     'Revise control parameters
130 GOSUB 620     'See if any keys pressed.
140 GOTO 100       'CYCLE.
150 REM $S2
160 REM##########  SETUP  INITIAL  CONDITIONS  ##########
170 REM X,Y=POSITION, F=FUEL, T=THRUST, SX,SY=SPEED, TILT=MODULE TILT,
180 REM GRAV=GRAVITY, S=SCORE
190 REM $S1
200 Z=FRE(A$):F=4000*(1-S/1000):F0=F:T=10:SX=30:SY=0:GRAV=10+S/100:X=0:Y=0:ANG=1:TILT=1:C=1:IF F<1500 THEN F=1500
210 XOLD=X:YOLD=Y:TILTOLD=TILT:TOLD=T
220 CLS:SCREEN 1:COLOR 0,0:LAND=1:KEY OFF:A=RND(100*-VAL(RIGHT$(TIME$,2))):FOR I=1 TO 5:A$=INKEY$:NEXT:IF GRAV>15 THEN GRAV=15
230 IF ADJUST = 1 THEN OUT 980,2: OUT 981,43
240 IF GAUGE=0 GOTO 270
250 LOCATE 1,28:PRINT " SCORE=" S:LOCATE 2,29:PRINT " FALL=" SY
260 LOCATE 3,28:PRINT "THRUST=" T:LOCATE 4,30:PRINT "FUEL=" F:GOTO 340
270 LOCATE 4,30:PRINT"L   L   E":LOCATE 5,30:PRINT"        R"
280 LOCATE 1,30:PRINT"F   F   P":LOCATE 2,30:PRINT"U   A   O":LOCATE 3,30:PRINT"E   L   W"
290 LINE(241,0)-(257,35),1,BF:LINE(241,36)-(257,40),2,BF 'Fuel Gauge
300 LINE(273,5)-(289,10),1,BF:LINE(273,11)-(289,40),2,BF:LINE(273,0)-(289,4),2,BF 'Fall Gauge
310 LINE(304,15)-(319,25),1,BF:LINE(304,26)-(319,40),2,BF:LINE(304,0)-(319,14),2,BF 'Power Gauge
320 G1=0:LINE (241,G1)-(257,G1),0:G2=10:LINE(273,G2)-(289,G2),3:G3=20:LINE(304,G3)-(319,G3),3
330 REM $S2
340 REM########### lander picture  ###########################
350 REM $S1
360 LX(1)=0:LY(1)=40:LINE(LX(1),LY(1))-(LX(1)+1,LY(1)),1
370 BOT=30+260*RND  ' X-VALUE OF FIELD.
380 FOR I=2 TO LP
390 LY(I)=LY(1)+(194-LY(1))*ABS(COS(3.14*(1+S/600)*(LX(I)-BOT-15)/400))
400 LY(I)=LY(I)+SQR(LY(I))*(0.5-RND)  'add noise to land contour.
410 IF((LX(I)>BOT)AND(LX(I)<(BOT+30)))THEN LY(I)=198  ' landing field
420 IF(LY(I)>198)THEN LY(I)=198 'prevent overflow of screen
430 LINE -(LX(I),LY(I)),3:NEXT
440 PAINT(0,199),1,3:LINE (BOT+5,193)-(BOT+25,199),2,BF
450 IF S>ADLAND THEN FOR I=0 TO 6:PSET(BOT+I*5,180),2:NEXT 'Window for Advan.Lndr.
460 PUT(X,Y),R1:ADVAN=0:BEEP:RETURN 'ADVAN=1 FOR ADVANCED LANDER GAME.
470 REM $pa
480 '############  Display moving Ship   and Gauges ####################
490 REM $S1
500 GOSUB 2330:IF MUSIC=1 GOTO 520 ELSE IF F=0 GOTO 520 '  Display picture.
510 PLAY "mb":SOUND TUNE(C,0),TUNE(C,1):SOUND TUNE(C+1,0),TUNE(C+1,1):C=C+2:IF C>149 THEN C=1  'Play "Blue DAnube Waltz"
520 IF GAUGE=0 GOTO 550 ELSE LOCATE 2,35:PRINT INT(-SY):LOCATE 3,35:PRINT INT(T)
530 LOCATE 4,35:PRINT INT(F): IF F=0 THEN SOUND 99,0:BEEP
540 RETURN
550 GG1=INT(40-40*F/F0):IF GG1=G1 THEN GOTO 560 ELSE LINE(241,GG1)-(257,GG1),0
560 G1=GG1:GG2=INT(5+SY/(2.8+(S>ADLAND))):IF GG2<0 THEN GG2=0 ELSE IF GG2>40 THEN GG2=40
570 IF GG2=G2 THEN GOTO 580 ELSE LINE(273,GG2)-(289,GG2),3:IF G2<11 AND G2>4 THEN LINE(273,G2)-(289,G2),1 ELSE LINE(273,G2)-(289,G2),2
580 G2=GG2:GG3=INT(40-40*T/19):IF GG3=G3 THEN GOTO 590 ELSE LINE(304,GG3)-(319,GG3),3:IF G3<26 AND G3>14 THEN LINE(304,G3)-(319,G3),1 ELSE LINE(304,G3)-(319,G3),2
590 G3=GG3:IF F=0 THEN SOUND 99,0:BEEP
600 RETURN
610 REM $S1
620 '########  Check KEYBOARD for commands  ############################
630 REM $S1
640 K$=RIGHT$(INKEY$,1):IF (K$="")THEN RETURN:IF (F=0)THEN RETURN
650 A$=INKEY$:  ' IF A$><"" GOTO 500
660 J=INSTR("HPMK"+CHR$(27),K$):ON J GOTO 680,700,720,740,1060
670 RETURN
680 T=T+1:IF T>19 THEN T=19
690 RETURN
700 T=T-1:IF(T<0)THEN T=0
710 RETURN
720 TILT=TILT+1:IF (TILT>NANG)THEN TILT=1
730 RETURN
740 TILT=TILT-1:IF (TILT<1)THEN TILT=NANG
750 RETURN
760 REM $S1
770 '################ Revise CONTROL parameters  ####################
780 REM $S1
790 SY=SY+GRAV-T*COS(3.14*ANG(TILT)/180):SX=0.9*SX+T*SIN(3.14*ANG(TILT)/180) ' SX has air drag.
800 IF (SY<-10)THEN SY=-10
810 X=X+SX*0.05:Y=Y+SY*0.05:IF (Y<0) THEN Y=0
820 IF (Y+MY>199)THEN Y=199-MY
830 IF (X<0)THEN X=0
840 IF(X+MX>319)THEN X=319-MX
850 IF(F=0) THEN T=0:RETURN
860 F=F-T:IF(F<0)THEN F=0:T=0:LOCATE 6,9:PRINT"OUT OF FUEL":GOSUB 880
870 RETURN
880 FOR J=1 TO 5:FOR K=1000 TO 2000 STEP 20:SOUND K,0.182:NEXT:NEXT:RETURN'alarm
890 REM $s1
900 '######## TEST FOR CRASH OR LANDING.  ##############################
910 REM $s1
920 IF Y>198-MY AND BOT<(5+X) AND (BOT+30)>(X+MX-5) GOTO 1120
930 IF Y>198-MY GOTO 1020
940 FOR I=(1+X/4) TO ((X+MX)/4-1):IF (Y+MY-6)>LY(I) GOTO 1020:NEXT'Each LX=4 unit
950 IF S<ADLAND OR ADVAN=1 THEN RETURN
960 IF Y>185-MY AND BOT<(5+X) AND (BOT+30)>(X+MX-5) AND SY<10 GOTO 2820 ELSE RETURN
970 REM $pa
980 '################# END OF PROGRAM  ########################
990 REM $S1
1000 FOR I=0 TO 8 STEP 2:COLOR I,0:FOR J=1 TO 200:NEXT J:NEXT I:COLOR 0,2
1010 LOCATE 5,1:PRINT STRING$(40,22);:PRINT STRING$(240,0);:PRINT STRING$(240,0);:PRINT STRING$(40,22);:RETURN
1020 GOSUB 1210:GOSUB 1220:GOSUB 1230:GOSUB 1000:CLS:LOCATE 6,1 :FOR I=1 TO 5:PRINT "     CRASH !!!  CRASH !!!  CRASH !!!":NEXT
1030 LOCATE 12,8:PRINT"YOU NEED MORE PRACTISE !!"
1040 A$=INKEY$:IF A$<>"" GOTO 1040 ELSE LOCATE 15,1:PRINT"PRESS ANY OTHER KEY TO CONTINUE":PRINT"PRESS `Q'= QUIT;`S'=SILENCE;`M'=MUSIC":PRINT"         GAUGES `A'=ANALOG, `D'=DIGITAL"
1050 A$=INKEY$:IF A$="" GOTO 1050
1060 IF 0<>INSTR("Qq",A$) THEN SCREEN 0,1: GOSUB 3510
1070 IF 0<>INSTR("Ss",A$) THEN MUSIC=1: GOTO 1050
1080 IF 0<>INSTR("Mm",A$) THEN MUSIC=0: GOTO 1050
1090 IF 0<>INSTR("Aa",A$) THEN GAUGE=0: GOTO 1050
1100 IF 0<>INSTR("Dd",A$) THEN GAUGE=1: GOTO 1050
1110 IF S<ADLAND OR ADVAN=1 THEN GOTO 90 ELSE GOTO 1320
1120  IF SY>15-6*ADVAN  GOTO 1190
1130 SOUND 99,0:IF (TILT<>1) GOTO 1200 'Turn off "Blue Danube"
1140 GOSUB 1210:C=1:D=30:GOSUB 1290:GOSUB 1000:C=31:D=50:GOSUB 1290:CLS:LOCATE 9,10:PRINT "PERFECT  LANDING !!":S=S+INT(F/30):FOR I=0 TO 3500:NEXT:C=51:D=82:GOSUB 1290
1150 IF S>SCOREMAX THEN SCOREMAX=S:GOSUB 1170
1160 LOCATE 11,1:PRINT"YOUR EXTRA FUEL MAKES YOUR SCORE = " S CHR$(13) CHR$(13) " (MAX. SCORE TO DATE IS " SCOREMAX " BY " INIT$ ")":GOTO 1040
1170 LOCATE 11,1:PRINT"YOUR SCORE IS NOW " S " !!!!!!" CHR$(13) "THIS IS THE HIGHEST SCORE UP TO NOW !!" CHR$(13) "TYPE IN 3 INITIALS FOR POSTERITY :"
1180 DEF SEG:POKE 106,0:INPUT "INITIALS: ",A$:INIT$=LEFT$(A$,3):OPEN "lander.scr" FOR OUTPUT AS #3:PRINT#3,SCOREMAX,INIT$:CLOSE:GOSUB 1000:RETURN
1190 GOSUB 1210:GOSUB 1220:GOSUB 1000:CLS:LOCATE 8,1:PRINT"ALMOST A GOOD LANDING BUT MUCH TOO FAST":LOCATE 10,2:PRINT"YOUR FALL RATE MUST BE LESS THAN "15-5*ADVAN:GOTO 1030
1200 GOSUB 1210:GOSUB 1220:GOSUB 1000:LOCATE 8,1:PRINT"GOOD LANDING, BUT PLEASE LAND ON 2 FEET!":GOTO 1030
1210 T=0:GOSUB 480:RETURN ' Show ship with no rocket blast.
1220 SOUND 99,0:FOR J=1 TO 3:FOR K=1000 TO 2000 STEP 20:SOUND K,0.182:NEXT:NEXT:S=INT(S*0.7):RETURN ' Crash sound
1230  EX=10+X-(X<11)*10:EX=EX+(EX>309)*10:EY=Y+10-(Y<11)*10:EY=EY+(EY>189)*5 '***explosion***
1240  FOR I=0 TO NE:LINE(EX-EXPL(I,0),EY-EXPL(I,1))-(EX+EXPL(I,0),EY+EXPL(I,1)/2),2
1250  LINE(EX+EXPL(I,0),EY-EXPL(I,1))-(EX-EXPL(I,0),EY+EXPL(I,1)/2),2:NEXT:RETURN
1260 REM $S2
1270 '############### Play MUSIC ##########################################
1280 REM $S1
1290 SOUND 99,0:PLAY"MB":FOR J=C TO D:SOUND TUNE1(J,0),TUNE1(J,1)/2:IF TUNE1(J,0)><0 AND TUNE1(J,1)><1 THEN SOUND 32767,1
1300 NEXT
1310 RETURN'Above is "Stars and Stripes"
1320 SCREEN 0,1: IF ADJUST = 1 THEN OUT 980,2: OUT 981,43
1330 COLOR 0,2,2:CLS:LOCATE 5,9:PRINT"YOUR SCORE IS NOW : " S:COLOR 7,2
1340 LOCATE 7,5:PRINT"YOU WILL NOW BE IN ADVANCED LANDER ! !":LOCATE 12,1:COLOR 0:   PRINT"IF YOU MANOUVER THE LANDER THROUGH THE  RED DOTS ABOVE THE LANDING FIELD WITH A"
1350 PRINT"FALL RATE LESS THAN 10, YOU WILL END    THE LANDING IN ADVANCED-LANDER. THE LANDWILL BE ENLARGED TO ALLOW YOU TO MAKE A PRECISION LANDING. YOUR FINAL FALL RATE MUST BE LESS THAN ";
1360 COLOR 0:PRINT"-- 10 --",:COLOR 0:PRINT"FOR THE LANDING TO BE OK.":LOCATE 24,7,0:COLOR 7:PRINT"PRESS ANY KEY TO CONTINUE.";
1370 A$=INKEY$:IF A$="" GOTO 1370 ELSE GOTO 90
1380 REM $pa
1390 '######################  START  PROGRAM  #########################
1400 REM $S1
1410 DEF SEG=0:IF (109=PEEK (&H410))GOTO 1430' go to color screen if on Bw
1420 POKE &H410,(PEEK(&H410) AND &HCF) OR &H20:SCREEN 0
1430 KEY OFF:SCREEN 0,1:COLOR 0,2,2:WIDTH 40:CLS:LOCATE 4,12,0:PRINT "IBM    IBM    IBM"
1440 IF ADJUST = 1 THEN OUT 980,2: OUT 981,43
1450 COLOR 7,2:LOCATE 6,12,0:PRINT "Personal Computer"
1460 COLOR 4,0:LOCATE 9,9,0:PRINT CHR$(201)+STRING$(21,205)+CHR$(187)
1470 LOCATE 10,9,0:PRINT CHR$(186)+STRING$(21,32)+CHR$(186)
1480 LOCATE 11,9,0:PRINT CHR$(186)+"    ROCKET LANDER    "+CHR$(186)
1490 LOCATE 12,9,0:PRINT CHR$(186)+STRING$(21,32)+CHR$(186)
1500 LOCATE 13,9,0:PRINT CHR$(186)+"    " A$ "    "+CHR$(186)
1510 LOCATE 14,9,0:PRINT CHR$(186)+STRING$(21,32)+CHR$(186)
1520 LOCATE 15,9,0:PRINT CHR$(200)+STRING$(21,205)+CHR$(188)
1530 COLOR 7,1:LOCATE 19,6,0:PRINT"PRESS ANY KEY FOR INSTRUCTIONS"
1540 A$=INKEY$:IF A$="" GOTO 1540
1550 REM $S2
1560 '################  INSTRUCTIONS   ################################
1570 REM $S1
1580 COLOR 0,2:CLS:PRINT CHR$(13) "The object is to successfully land the  space-craft on the landing pad. This is done by changing the rocket thrust and  direction using the four position keys."
1590 LOCATE 7,1:COLOR 20:PRINT "    " CHR$(24);:COLOR 7:PRINT"  Increases the rocket thrust." CHR$(13)
1600 COLOR 20:PRINT "    " CHR$(25);:COLOR 7:PRINT "  Decreases rocket thrust." CHR$(13)
1610 COLOR 20:PRINT "    " CHR$(26);:COLOR 7:PRINT "  Tilts the rocket to the right." CHR$(13)
1620 COLOR 20:PRINT "    " CHR$(27);:COLOR 7:PRINT "  Tilts the rocket to the left." CHR$(13)
1630 COLOR 16:LOCATE 18,2:PRINT"LOADING DISKETTE IMAGES               ":
1640 REM $S2
1650 '###########  Get Ship pictures from disk #######################
1660 '####### M = Module; R = Small rocket; RR = Large rocket ########
1670 REM $S1
1680 DEFINT M,R,P,X,T,L,B: S=66: DIM PDATA(20)
1690 DIM M1(S),M2(S),M3(S),M4(S),M5(S),M6(S),M7(S),M8(S),M9(S),M10(S),M11(S),M12(S),M13(S)
1700 DIM R1(S),R2(S),R3(S),R4(S),R5(S),R6(S),R7(S),R8(S),R9(S),R10(S),R11(S),R12(S),R13(S)
1710 DIM RR1(S),RR2(S),RR3(S),RR4(S),RR5(S),RR6(S),RR7(S),RR8(S),RR9(S),RR10(S),RR11(S),RR12(S),RR13(S)
1720 DEF SEG=0:A=VARPTR(PDATA(0))
1730 DEF SEG:BLOAD"LANDER.BIN",A
1740 NANG=PDATA(0):SIZE=PDATA(1):MX=PDATA(2):MY=PDATA(3)
1750 DIM ANG(NANG):FOR I=1 TO NANG:ANG(I)=PDATA(3+I):NEXT
1760 OPEN "lander.scr" FOR INPUT AS #2 'Get maximum score to date.
1770 INPUT#2,SCOREMAX,INIT$:CLOSE
1780 DEFINT L: LP=80:DIM LX(LP),LY(LP),LAX(LP),LAY(LP) '  LAND pictures.
1790 LX(1)=0:LY(1)=40:LAY(1)=0:BOT=224:FOR I=2 TO LP :LAX(I)=I*319/LP:LX(I)=LAX(I)'Adv-Lander Field
1800 LAY(I)=LAY(1)+(194-LAY(1))*ABS(COS(3.14*(LAX(I)-BOT-15)/400))
1810 LAY(I)=LAY(I)+SQR(LAY(I))*(0.5-RND)  'add noise to land contour.
1820 IF((LAX(I)>BOT)AND(LAX(I)<(BOT+30)))THEN LAY(I)=198  ' landing field
1830 IF(LAY(I)>198)THEN LAY(I)=198
1840 NEXT
1850 NE=10:DIM EXPL(NE,1):FOR I=0 TO NE:READ EXPL(I,0),EXPL(I,1):NEXT'Explosion
1860 DATA 0,10,1,7,2,8,3,3,4,2,5,8,6,7,7,1,8,6,9,2,10,0
1870 DIM IBMX(75),IBMY(75) ' Get IBM Logo.
1880 FOR I=0 TO 75:READ IBMX(I):NEXT
1890 FOR I=0 TO 75 STEP 2:READ IBMY(I):IBMY(I+1)=IBMY(I):NEXT
1900 DATA 0,4,7,13.5,18,21.5,27,30,0,4,7,14.5,18,22.5,26,30,1,3,8,10,12.5,15,19,23,25.5,29,1,3,8,14.5,19,24,25,29,1,3,8,14.5,19,21,21.6,26.4,27,29,1,3,8,10,12.5,15,19,21,22.3,25.7,27,29,0,4,7,14.5,18,21,23,25,27,30,0,4,7,13.5,18,21,23.5,24.5,27,30
1910 DATA 0,0,0,0,1,1,1,1,2,2,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7
1920 DIM MM(88),TUNE(150,1):FOR I=0 TO 6:MM(I)=32767:NEXT ' Get success tune.
1930 FOR I=7 TO 88: MM(I)=INT(36.8*(2^(1/12))^(I-6)):NEXT
1940 FOR I=1 TO 150:READ A,TUNE(I,1):TUNE(I,0)=MM(A):NEXT
1950 REM $s2
1960 'Blue Danube Waltz by J.S.Strauss
1970 REM $s1
1980 DATA 42,4,46,4,49,4,49,4,0,4,61,2,0,2,61,2,0,6,58,2,0,2,58,2,0,6,42,4,42,4
1990 DATA 46,4,49,4
2000 DATA 49,4,0,4,61,2,0,2,61,2,0,6,59,2,0,2,59,2,0,6,41,4,41,4,44,4,51,4,51,4
2010 DATA 0,4,63,2,0,2,63,2,0,6,59,2,0,2
2020 DATA 59,2,0,6,41,4,41,4,44,4,51,4,51,4,0,4,63,2,0,2,63,2,0,6,58,2,0,2,58,2
2030 DATA 0,6,42,4
2040 DATA 42,4,46,4,49,4,54,4,0,4,66,2,0,2,66,2,0,6,61,2,0,2,61,2,0,6,42,4
2050 DATA 42,4,46,4,49,4,54,4,0,4,66,2,0,2
2060 DATA 66,2,0,6,63,2,0,2,63,2,0,6,44,4,44,4,47,4,51,2,0,2,51,14,0,2,48,4
2070 DATA 49,4,58,16
2080 DATA 54,4,46,4,46,8,44,4,51,8,49,4,42,4,0,2,42,2,42,4,0,8,49,2,0,2,47,2
2090 DATA 0,6,49,2,0,2
2100 DATA 47,2,0,6,49,4,58,16,56,4,49,2,0,2,46,2,0,6,49,2,0,2,46,2,0,6,49,4
2110 DATA 56,16,54,4,49,2,0,2,47,2,0,6,49,2,0,2,47,2,0,6,49,4,58,16
2120 DATA 56,4,49,4,54,4,56,4,58,4,61,8,59,4,58,2,58,2,58,4,56,2,0,2,54,4,0,8
2130 DIM TUNE1(82,1):FOR I=1 TO 82:READ A,TUNE1(I,1):TUNE1(I,0)=MM(A):NEXT
2140 REM $s2
2150 '"STARS AND STRIPES FOREVER - SOUSA "
2160 REM $s1
2170 DATA 54,6,54,6,52,3,51,3,51,6,50,3,51,3,51,16,0,2,50,3
2180 DATA 51,3,51,6,50,3,51,3
2190 DATA 54,6,51,3,54,3,52,12,49,6,0,3,49,3,49,6,48,3,49,3
2200 DATA 49,6,48,3,49,3
2210 DATA 52,16,0,2,51,3,49,3,51,3,54,9,56,9,56,3,49,16,0,2,54,6
2220 DATA 54,6,52,3,51,3,51,6,50,3,51,3,51,16,0,2,50,3,51,3,51,6,50,3 ,51,3
2230 DATA 52,3,51,3,49,5,46,1,49,12,47,6,0,3,47,3,47,6,46,3,47,3,50,6,49,3,47,3
2240 DATA 59,15,0,3,47,3,49,3,51,3,54,1,0,2,47,3,49,3,51,3,54,1,0,2,42,3,44,5
2250 DATA 51,1,49,12,47,1
2260 ADVAN=0:GAUGE=1
2270 COLOR 0: LOCATE 18,2
2280 PRINT"Gravity = Vertical thrust of about 10.":COLOR 7,1:LOCATE 24,3:PRINT "  Press any key to start the game.";
2290 COLOR 0,2:LOCATE 20,2:ADLAND=100:PRINT"Advanced-Lander starts above 100 points.";
2300 A$=INKEY$:IF A$="" GOTO 2300
2310 S=0:RETURN
2320 REM $S2
2330 '##############  Get New SHIP picture  #########################
2340 REM $S1
2350 ON INT(1.8+TOLD/10) GOSUB 2390,2530,2670 'Erase old picture.
2360 XOLD=X:YOLD=Y:TILTOLD=TILT:TOLD=T
2370 ON INT(1.8+T/10) GOSUB 2390,2530,2670 'Draw new picture.
2380 TOLD=T:NEWPIC=0:RETURN
2390 ON TILTOLD GOTO 2400,2410,2420,2430,2440,2450,2460,2470,2480,2490,2500,2510,2520
2400 PUT(XOLD,YOLD),M1:RETURN
2410 PUT(XOLD,YOLD),M2:RETURN
2420 PUT(XOLD,YOLD),M3:RETURN
2430 PUT(XOLD,YOLD),M4:RETURN
2440 PUT(XOLD,YOLD),M5:RETURN
2450 PUT(XOLD,YOLD),M6:RETURN
2460 PUT(XOLD,YOLD),M7:RETURN
2470 PUT(XOLD,YOLD),M8:RETURN
2480 PUT(XOLD,YOLD),M9:RETURN
2490 PUT(XOLD,YOLD),M10:RETURN
2500 PUT(XOLD,YOLD),M11:RETURN
2510 PUT(XOLD,YOLD),M12:RETURN
2520 PUT(XOLD,YOLD),M13:RETURN
2530 ON TILTOLD GOTO 2540,2550,2560,2570,2580,2590,2600,2610,2620,2630,2640,2650,2660
2540 PUT(XOLD,YOLD),R1:RETURN
2550 PUT(XOLD,YOLD),R2:RETURN
2560 PUT(XOLD,YOLD),R3:RETURN
2570 PUT(XOLD,YOLD),R4:RETURN
2580 PUT(XOLD,YOLD),R5:RETURN
2590 PUT(XOLD,YOLD),R6:RETURN
2600 PUT(XOLD,YOLD),R7:RETURN
2610 PUT(XOLD,YOLD),R8:RETURN
2620 PUT(XOLD,YOLD),R9:RETURN
2630 PUT(XOLD,YOLD),R10:RETURN
2640 PUT(XOLD,YOLD),R11:RETURN
2650 PUT(XOLD,YOLD),R12:RETURN
2660 PUT(XOLD,YOLD),R13:RETURN
2670 ON TILTOLD GOTO 2680,2690,2700,2710,2720,2730,2740,2750,2760,2770,2780,2790,2800
2680 PUT(XOLD,YOLD),RR1:RETURN
2690 PUT(XOLD,YOLD),RR2:RETURN
2700 PUT(XOLD,YOLD),RR3:RETURN
2710 PUT(XOLD,YOLD),RR4:RETURN
2720 PUT(XOLD,YOLD),RR5:RETURN
2730 PUT(XOLD,YOLD),RR6:RETURN
2740 PUT(XOLD,YOLD),RR7:RETURN
2750 PUT(XOLD,YOLD),RR8:RETURN
2760 PUT(XOLD,YOLD),RR9:RETURN
2770 PUT(XOLD,YOLD),RR10:RETURN
2780 PUT(XOLD,YOLD),RR11:RETURN
2790 PUT(XOLD,YOLD),RR12:RETURN
2800 PUT(XOLD,YOLD),RR13:RETURN
2810 REM $s2
2820 '################ Advanced-Lander Landing Field ##########################
2830 REM $S1
2840 SCREEN 1:COLOR 0,0:CLS:LY(1)=0
2850 IF ADJUST = 1 THEN OUT 980,2: OUT 981,43
2860 BEEP:LOCATE 1,1:PRINT"ADVANCED LANDER":PRINT"LANDING FALL":PRINT"LESS THAN -10-"
2870 LINE(LAX(1),LAY(1))-(LAX(1)+1,LAY(1)),1
2880 BOT=224:FOR I=2 TO LP :LY(I)=LAY(I)
2890 LINE -(LAX(I),LAY(I)),3:NEXT
2900 PAINT(0,199),1,3:LINE (BOT+5,193)-(BOT+25,199),2,BF
2910 LINE(120,160)-(145,199),2,BF
2920 FOR I=0 TO 2:LINE(125,165+10*I)-(140,169+10*I),3,BF:NEXT
2930 LINE (20,130)-(120,199),3,BF 'bldg
2940 LINE (35,110)-(105,130),0,BF
2950 FOR I=0 TO 5:FOR J=0 TO 2:LINE(30+14*I,140+J*14)-(40+14*I,150+J*14),0,BF:NEXT:NEXT
2960 LINE(65,185)-(75,199),0,BF
2970 LINE(146,175)-(205,199),3,BF
2980 FOR I=0 TO 4:LINE(150+10*I,178)-(158+10*I,191),0,BF:NEXT
2990 X=40:Y=113 ' Draw IBM LOGo on Bldg
3000 FOR I=0 TO 75 STEP 2:LINE (X+2*IBMX(I),Y+2*IBMY(I))-(X+2*IBMX(I+1),Y+2*IBMY(I+1)):NEXT I
3010 X=90:Y=30:XOLD=X:YOLD=Y:F=F+1000:F0=F:T=11:TOLD=T:TILT=0:TILTOLD=TILT:SY=13:ADVAN=1
3020 IF GAUGE=0 GOTO 3050
3030 LOCATE 1,28:PRINT " SCORE=" S:LOCATE 2,29:PRINT " FALL=" SY
3040 LOCATE 3,28:PRINT "THRUST=" T:LOCATE 4,30:PRINT "FUEL=" F:GOTO 3110
3050 LOCATE 1,30:PRINT"F   F   P":LOCATE 2,30:PRINT"U   A   O":LOCATE 3,30:PRINT"E   L   W"
3060 LOCATE 4,30:PRINT"L   L   E":LOCATE 5,30:PRINT"        R"
3070 LINE(241,0)-(257,35),1,BF:LINE(241,36)-(257,40),2,BF 'Fuel Gauge
3080 LINE(273,5)-(289,10),1,BF:LINE(273,11)-(289,40),2,BF:LINE(273,0)-(289,4),2,BF 'Fall Gauge
3090 LINE(304,15)-(319,25),1,BF:LINE(304,26)-(319,40),2,BF:LINE(304,0)-(319,14),2,BF 'Power Gauge
3100 G1=0:LINE (241,G1)-(257,G1),0:G2=10:LINE(273,G2)-(289,G2),3:G3=20:LINE(304,G3)-(319,G3),3
3110 PUT(X,Y),R1:BEEP:GOTO 100
3120 REM $pa
3130 REM Subroutine to Provide a requirements list to
3140 REM execute this program
3150 REM
3160 REM Switch I1 = 1 if on the COLOR monitor
3170 REM Switch I1 = 0 if on the MONO  monitor
3180 REM $s2
3190 WIDTH 40: IF I1 = 0 THEN COLOR 7,0 ELSE COLOR 0,2,2
3200 IF I1 = 1 THEN SCREEN 0,1  'text mode and color enabled
3210 CLS
3220 IF ADJUST = 1 THEN OUT 980,2: OUT 981,43
3230 LOCATE 2,5: PRINT "WELCOME TO THE PROGRAM"
3240 IF I1 = 0 THEN COLOR 30,0 ELSE COLOR 16,2,2
3250 LOCATE 3,5: PRINT PROGNAME$
3260 IF I1 = 0 THEN COLOR 7,0 ELSE COLOR 0,2,2
3270 LOCATE 5,5: PRINT "THIS PROGRAM REQUIRES:"
3280 PRINT: PRINT
3290 IF WIDE = 80 THEN PRINT "    80 CHARACTER RESOLUTION"
3300 IF WIDE = 40 THEN PRINT "    40 CHARACTER RESOLUTION"
3310 IF COLR = 1 OR BOTH = 1 THEN PRINT  "    COLOR/GRAPHICS SCREEN  "
3320 IF BOTH = 1 THEN PRINT  "         OR THE            "
3330 IF COLR = 0 OR BOTH = 1 THEN PRINT  "    MONOCHROME DISPLAY -IBM"
3340 IF PRT = 1 THEN PRINT    "    A PRINTER              "
3350 IF JOY = 1    THEN PRINT "    JOYSTICKS              "
3360 IF BOTH = 1 THEN GOTO 3440
3370 IF (COLR = 1 AND I1 = 1) OR (COLR = 0 AND I1 = 0) THEN GOTO 3440
3380 IF I1 = 0 THEN COLOR 30,0 ELSE COLOR 16,2,2
3390 SWIT = 1  'signal need to switch monitors
3400 PRINT: PRINT: PRINT "    YOU MUST SWITCH SCREENS"
3410 PRINT "    ENTER s TO SWITCH      "
3420 PRINT "    ANY OTHER WILL END RUN "
3430 IF I1 = 0 THEN COLOR 7,0 ELSE COLOR 0,2,2
3440 LOCATE 20,5: PRINT "PRESS ANY KEY TO GO   ": BEEP
3450 REP$ = INKEY$: IF REP$ = "" THEN GOTO 3450
3460 IF SWIT=1 AND (REP$="s" OR REP$="S") THEN GOSUB 3710
3470 RETURN
3480 REM $s2
3490 REM Subroutine to provide exit options from this program
3500 REM $s1
3510 WIDTH 40: IF I1 = 0 THEN COLOR 7,0 ELSE COLOR 0,2,2
3520 IF I1 = 1 THEN SCREEN 0,1  'text mode and color enabled
3530 CLS     'allow use on either monitor
3540 IF ADJUST = 1 THEN OUT 980,2: OUT 981,43
3550 LOCATE 3,5: PRINT "PLEASE CHOOSE FROM FOLLOWING"
3560 LOCATE 5,5: PRINT "1 = RUN PROGRAM AGAIN       "
3570 LOCATE 7,5: PRINT "2 = EXIT BACK TO THE MENU   "
3580 LOCATE 9,5: PRINT "3 = RETURN TO BASIC PROGRAM "
3590 LOCATE 11,5: PRINT "4 = RETURN TO DOS           "
3600 LOCATE 20,5: PRINT "ENTER YOUR SELECTION NOW    ": BEEP
3610 REP$ = INKEY$: IF REP$ = "" THEN GOTO 3610
3620 IF REP$ = "1" THEN GOTO 10  'RUN (PROGNAME$)
3630 IF REP$ = "2" THEN CHAIN "MENU"
3640 IF REP$ = "3" THEN WIDTH 80: CLS: END
3650 IF REP$ = "4" THEN CLS: SYSTEM
3660 LOCATE 20,5: PRINT "INVALID SELECTION - TRY AGAIN"
3670 FOR I = 1 TO 800: NEXT I: CLS: GOTO 3550
3680 REM $s2
3690 REM Now switch between the monitors as required
3700 REM $s1
3710 IF I1=0 THEN GOTO 3750: ELSE GOTO 3890
3720 REM $s1
3730 REM Switch to the COLOR monitor
3740 REM $s1
3750 CLS: LOCATE ,,0  'clear screen/turn off mono cursor
3760 CLS
3770 DEF SEG=0        'switch to BIOS communications area
3780 REM set equipment determination flags for color 40 characters
3790 POKE &H410,(PEEK(&H410) AND &HCF) OR &H10
3800 DEF SEG          'switch back to BASIC program segment
3810 SCREEN 0,1: COLOR 0,2,2
3820 WIDTH 40         'init color adapter to 40 characters, clear screen
3830 LOCATE ,,1,6,7   'set cursor size for color mode
3840 IF ADJUST = 1 THEN OUT 980,2: OUT 981,43
3850 I1 = 1: GOTO 3990
3860 REM $s2
3870 REM Switch to the Black and White monitor
3880 REM $s1
3890 CLS: LOCATE ,,0  'remove cursor from color screen
3900 DEF SEG=0        'switch to BIOS communications area
3910 REM set equipment determination flags for monochrome display 80 chars
3920 POKE &H410,PEEK(&H410) OR &H30
3930 DEF SEG          'revert to basic program segment
3940 SCREEN 1         'be sure next line is a change 02/23/82
3950 SCREEN 0         'put into text mode for sure
3960 COLOR 7,0: I1 = 0
3970 WIDTH 40         'init 40 character mode and clear display
3980 LOCATE ,,1,12,13 'turn on monochrome cursor position
3990 RETURN
```
{% endraw %}

## LIFE2.BAS

{% raw %}
```bas
1 '   LIFE = The game of LIFE by John Conway - a simulation
2 '    This version by John Sigle        2/21/83
50  ' Initialization
51     DEFINT A-Z
52     C=0:R=0:CUR=0:NXT=1:NN=0:CR=0:RN=0       'Mention early for efficiency
53     NROWS=21:NCOLS=78
55     DIM G(NROWS+1,NCOLS+1,1)
58     DIM CLIST(1,1500,1), LLEN(1)
60     DIM CH$(1):CH$(0)="X" : CH$(1)="O"
70     KEY OFF
100 ' Present instructions
101    GOSUB 1000
151 ' Clear screen and draw box
152    GOSUB 2500
200 ' Get and display new pattern from player
202    GOSUB 2000
250 ' Begin or continue evolution
255     LOCATE 24,1 : PRINT SPACE$(79);
256     LOCATE 24,1 : COLOR 0,7:PRINT " RUN mode ";:COLOR 7,0
260     LOCATE 25,1 : PRINT SPACE$(79);
261     LOCATE 25,1 : COLOR 15:PRINT " E";:COLOR 7:PRINT"=Edit, ";:COLOR 15:PRINT"space";:COLOR 7:PRINT"=Pause, ";:COLOR 15:PRINT"C";:COLOR 7:PRINT"=Continue, ";:COLOR 15:PRINT"Q";:COLOR 7:PRINT"=Quit";
300 ' Repeat until key is pressed
350 '   Calculate and display next generation
352      GOSUB 4000
375 '   Advance to new generation
376      SWAP CUR,NXT
378      SOUND 700,.1 : FOR K=1 TO 2000 : NEXT K
380 '   Check for key pressed
385      C$=INKEY$:IF C$="" THEN GOTO 300
500 ' What did player press?
501    IF C$="E" OR C$="e" THEN GOTO 200
502    IF C$="Q" OR C$="q" THEN CLS:    GOTO 65000
503    IF C$="C" OR C$="c" THEN GOTO 250
504    IF C$=" " THEN C$=INPUT$(1):GOTO 501
505    GOTO 385
1000 ' Routine to present instructions
1006 CLS :PRINT
1008 PRINT "                               L  I  F  E"
1009 PRINT
1010 PRINT "   The original game of life was invented by mathematician John Conway."
1011 PRINT " The idea is to initialize the screen with a pattern of bacteria "
1112 PRINT " in 'EDIT' mode.  The 'RUN' mode then brings life to the colony."
1114 PRINT " The population increases and decreases according to fixed rules "
1116 PRINT " which affect the birth and death of individual bacterium. "
1118 PRINT " A rectangular grid (2-dimensional matrix) will be shown on the screen."
1120 PRINT " Each cell in the grid can contain a bacterium or be empty.  Each cell"
1122 PRINT " has 8 neighbors except that cells on the boundry have less than 8 "
1124 PRINT " neighbors.  The existance of cells from one generation to the next"
1126 PRINT " is determined by the following rules:"
1128 PRINT:PRINT "  1.  A bacteria with 2 or 3 neighbors survives from one generation to "
1130 PRINT "      the next.  A bacterium with fewer neighbors dies of isolation."
1132 PRINT "      One with more neighbors dies of overcrowding."
1134 PRINT:PRINT "  2.  An empty cell spawns a bacteria if it has exactly three "
1136 PRINT "      neighboring cells which contain bacteria."
1150 PRINT:PRINT
1152 PRINT "   Press the spacebar to continue";:ANS$=INPUT$(1)
1154 CLS : PRINT:PRINT
1170 PRINT " In EDIT mode the following commands are available:"
1172 PRINT : PRINT
1174 PRINT "  ";CHR$(24);CHR$(25);CHR$(26);CHR$(27);"         to move the cursor"
1176 PRINT "  M            to Mark a cell as having a bacterium"
1178 PRINT "  space        to erase a mark from a cell"
1180 PRINT "  R            to enter the RUN mode (i.e. start the evolutionary process)"
1182 PRINT "  C            to Clear the grid in order to create a new pattern"
1184 PRINT "  Q            to Quit the game of LIFE"
1186 PRINT : PRINT
1188 PRINT" In RUN mode the following commands are available:"
1190 PRINT
1192 PRINT "  E            to enter the EDIT mode to create or change the pattern"
1194 PRINT "  space        to pause"
1196 PRINT "  C            to Continue the execution after a pause"
1198 PRINT "  Q            to Quit the game of LIFE"
1199 PRINT : PRINT "The EDIT, pause and Quit commands take effect only at the end of a cycle."
1204 PRINT : PRINT "Press spacebar to continue";:ANS$=INPUT$(1)  : RETURN
2000 ' Routine to get and display a pattern
2010 '  Print instructions on line 25
2011     LOCATE 24,1 : PRINT SPACE$(79);
2012     LOCATE 24,1 : COLOR 0,7 :PRINT " EDIT mode ";:COLOR 7,0
2013     LOCATE 25,1 : PRINT SPACE$(79);
2014     LOCATE 25,1 : PRINT "Use ";:COLOR 15:PRINT CHR$(24);CHR$(25);CHR$(26);    CHR$(27);:COLOR 7:PRINT" to move cursor, ";
2015 COLOR 15:PRINT"M";:COLOR 7:PRINT"=mark, ";:COLOR 15:PRINT"space";:COLOR 7:PRINT"=erase, ";:COLOR 15:PRINT"R";:COLOR 7:PRINT "=Run, ";:COLOR 15:PRINT"C";:  COLOR 7:PRINT"=Clear screen, ";:COLOR 15:PRINT"Q";:COLOR 7:PRINT "=quit";
2016     DEF SEG=0:POKE 1052,PEEK(1050):DEF SEG
2020 '  Initialize cursor
2022     RN=11:CN=39:LOCATE RN+1,CN+1,1
2030 '  Top of input loop
2031     C$=INKEY$:IF C$="" THEN 2031
2032     IF LEN(C$)=2 THEN GOTO 2040
2033      IF C$="M" OR C$="m" THEN GOSUB 2080:GOTO 2031
2034      IF C$=" " THEN GOSUB 2070:GOTO 2031
2035      IF C$="R" OR C$="r" THEN RETURN
2036      IF C$="C" OR C$="c" THEN GOSUB 2110:GOTO 2031
2038      IF C$="Q" OR C$="q" THEN GOTO 65000
2039      GOTO 2031
2040     CC=ASC(RIGHT$(C$,1))                   'Two char. code
2041      IF CC=72 THEN GOSUB 2050:GOTO 2031
2042      IF CC=75 THEN GOSUB 2055:GOTO 2031
2043      IF CC=77 THEN GOSUB 2060:GOTO 2031
2044      IF CC=80 THEN GOSUB 2065:GOTO 2031
2045      GOTO 2031
2050 '  Up arrow
2051     IF RN>1 THEN RN=RN-1:LOCATE RN+1,CN+1,1
2052     RETURN
2055 '  Left arrow
2056     IF CN>1 THEN CN=CN-1:LOCATE RN+1,CN+1,1
2057     RETURN
2060 '  Right arrow
2061     IF CN<NCOLS THEN CN=CN+1:LOCATE RN+1,CN+1,1
2062     RETURN
2065 '  Down arrow
2066     IF RN<NROWS THEN RN=RN+1:LOCATE RN+1,CN+1,1
2067     RETURN
2070 '  Spacebar = erase
2071     IF G(RN,CN,CUR)=0 THEN RETURN
2072     FOR K=LLEN(CUR) TO 1 STEP -1
2073       IF CLIST(0,K,CUR)=RN AND CLIST(1,K,CUR)=CN THEN GOTO 2075
2074     NEXT K  :  STOP
2075     FOR J=K TO LLEN(CUR)-1
2076      CLIST(0,J,CUR)=CLIST(0,J+1,CUR):CLIST(1,J,CUR)=CLIST(1,J+1,CUR)
2077     NEXT
2078     G(RN,CN,CUR)=0:PRINT " ";:LOCATE RN+1,CN+1,1  : RETURN
2080 '  Any letter
2081     IF G(RN,CN,CUR)=1 THEN RETURN
2082     G(RN,CN,CUR)=1
2084     LLEN(CUR)=LLEN(CUR)+1
2086     CLIST(0,LLEN(CUR),CUR)=RN:CLIST(1,LLEN(CUR),CUR)=CN
2087     LOCATE RN+1,CN+1,1:PRINT CH$(CUR);:LOCATE RN+1,CN+1,1
2089     RETURN
2110 '  Routine to clear screen
2112     FOR K=1 TO LLEN(CUR)
2114        RN=CLIST(0,K,CUR):CN=CLIST(1,K,CUR):G(RN,CN,CUR)=0
2115        LOCATE RN+1,CN+1:PRINT " ";
2116     NEXT K
2118     LLEN(CUR)=0
2119     RETURN
2500 ' Routine to clear screen and print box
2502    CLS
2504    PRINT CHR$(218);
2506    FOR K=1 TO NCOLS:PRINT CHR$(196);:NEXT:PRINT CHR$(191);
2508    FOR K=2 TO NROWS+1:LOCATE K,NCOLS+2:PRINT CHR$(179);:NEXT
2510    FOR K=2 TO NROWS+1:LOCATE K,1:PRINT CHR$(179);:NEXT
2512    LOCATE NROWS+2,1:PRINT CHR$(192);
2514    FOR K=1 TO NCOLS:PRINT CHR$(196);:NEXT:PRINT CHR$(217);
2599    RETURN
4000 '^ Routine to calculate and display next generation
4001     LOCATE ,,0
4002 '  Zero out last generation
4004     FOR K=1 TO LLEN(NXT)
4006        RN=CLIST(0,K,NXT):CN=CLIST(1,K,NXT):G(RN,CN,NXT)=0
4007     NEXT K
4008     LLEN(NXT)=0 :LL=0
4010 '  Repeat for each cell on the current CLIST
4012     FOR K=1 TO LLEN(CUR)
4020 '    Determine if it lives, put it on list and display it.
4022       RN=CLIST(0,K,CUR):CN=CLIST(1,K,CUR)
4023       R=RN:C=CN:GOSUB 4100    ' Count its neighbors
4025       IF NN=2 OR NN=3 THEN GOTO 4030
4026 '       Cell dies
4027         G(RN,CN,NXT)=0:LOCATE RN+1,CN+1:PRINT " ";
4029         GOTO 4040
4030 '       Cell lives
4031         LL=LL+1:CLIST(0,LL,NXT)=RN:CLIST(1,LL,NXT)=CN:G(RN,CN,NXT)=1
4032         LOCATE RN+1,CN+1 : PRINT CH$(NXT);
4040 '    Consider each of its neighbors
4041       R=RN-1:C=CN:GOSUB 4200
4042       R=RN-1:C=CN+1:GOSUB 4200
4043       R=RN:C=CN+1:GOSUB 4200
4044       R=RN+1:C=CN+1:GOSUB 4200
4045       R=RN+1:C=CN:GOSUB 4200
4046       R=RN+1:C=CN-1:GOSUB 4200
4047       R=RN:C=CN-1:GOSUB 4200
4048       R=RN-1:C=CN-1:GOSUB 4200
4060     NEXT K
4062     LLEN(NXT)=LL
4099    RETURN
4100 ' Routine to count current neighbors of cell at r,c
4102    NN=G(R-1,C,CUR)+G(R-1,C+1,CUR)+G(R,C+1,CUR)+G(R+1,C+1,CUR)+                        G(R+1,C,CUR)+G(R+1,C-1,CUR)+G(R,C-1,CUR)+G(R-1,C-1,CUR) :RETURN
4200 ' Routine to analyze and manipulate a neighbor of cell at rn,cn
4203    IF G(R,C,CUR)=1 THEN RETURN  'Cell is currently alive
4211    IF R=0 OR R>NROWS OR C=0 OR C>NCOLS THEN RETURN 'Cell on border
4213    IF G(R,C,NXT)=1 THEN RETURN  'Cell already added
4221    GOSUB 4100  'Count its neighbors
4230 '  if nn=3 then cell becomes alive
4231     IF NN=3 THEN                                                                       LL=LL+1:CLIST(0,LL,NXT)=R:CLIST(1,LL,NXT)=C:G(R,C,NXT)=1 :                      LOCATE R+1,C+1:PRINT CH$(NXT);
4299    RETURN
65000 ' Return to Magazette
65001 LOCATE 25,1:PRINT SPACE$(79);:LOCATE 25,1:PRINT "  Press ESC key to continue ";:ANS$=INPUT$(1):IF ASC(ANS$)<>27 THEN 65001
65002 IF ADDR.%<>0 THEN RUN DRIVE$+":"+"START"
65005 END
```
{% endraw %}

## PACKMAN.DOC

{% raw %}
```
                PACKMAN PROGRAM DESCRIPTION 
                =========================== 
SCREEN LAYOUT 
------------- 
The score appears at the upper left.  The screen number is shown at the 
far right.  The remaining PACKMEN are also shown in the upper right. 
The prompt area is in the center of the status area above the center 
"tunnel" exit.  The prompts indicate readiness to satrt/resume play, display
display bonus points for capturing a monster or prize, etc. 
  
CONTROLS 
-------- 
The player controls PACKMAN's direction using either the four arrow keys 
(make sure [NumLock] is not accidently pressed!) or, optionally, via 
joystick.  The player indicates his choice simply by pressing either a 
cursor key or joystick "fire" button to start/resume play in response to 
the READY! prompt.  Thus, it is even possible to alternate between keyboard 
and joystick(s) during the game.  The joystick button may also be used to 
respond affirmatively to the new game prompt. 
  
Pressing [CTRL][END] during play causes the program to end immediately and 
return to DOS. 
  
Note:  This program assumes the joysticks are wired such that resistance 
values increase from left to right and top to bottom, following the con- 
vention for screen pel coordinates. 
  
SCORING 
------- 
Dots:....................10 points 
Power Capsules:..........50 points 
"Scared" Monsters:......200,400,800, or 1600 points 
Prizes: 
     Screen 1:..........100 points (Cherries) 
     Screen 2:..........300 points (Strawberry) 
     Screen 3:..........500 points (Apple) 
     Screen 4:..........700 points (Grapes) 
     Screen 5:.........1000 points (Key) 
     Screen >=6:.......2000 points (Randomly chosen symbol) 
  
A bonus PACKMAN is awarded at each 10,000 point plateau. 
  
GAME DESCRIPTION 
================ 
The objective is for PACKMAN to score as many points as possible by 
devouring dots, prizes, power capsules, and "scared" monsters, while 
avoiding fatal collisions with "mean" monsters.  A screen ends when 
all 180 dots and four power capsules are cleared. The game ends when 
the player loses his last PACKMAN. 
  
As play starts/resumes, the four monsters emerge from their "pen" in 
the center and begin searching for PACKMAN.  At first, they move 
randomly about the maze, checking out the corridors ahead and to the 
sides.  As soon as a monster sees PACKMAN, it begins to chase him. 
PACKMAN may be spotted even if only partially visable in a corridor. 
  
Chasing basically entail this: If PACKMAN is in sight, the monster will 
head directly toward him.  If PACKMAN then ducks out of sight, the 
monster will remember where he was last seen and the direction he 
turned, and will try to proceed to that point and turn the same way, 
after which it reverts to its searching algorithm.  The monsters also 
forget the trail when exiting the tunnels or passing in front of the 
pen exit. 
  
  
  
                          PACKMAN                              Page 2 
  
The monsters normally do not look backwards or reverse their direc- 
tions arbitrarily.  Therefore, PACKMAN can follow a monster without 
being seen.  However, since the monsters cannot run over each other, 
collisions between monsters may resuld in one or both suddenly revers- 
ing their course, unexpectedly trapping PACKMAN if he is careless. 
  
When PACKMAN eats a power capsule, all monsters outside the pen turn 
blue, slow to half-speed, and attempt to flee if they see PACKMAN. 
The first monster PACKMAN catches is worth 200 points, doubling for 
each subsequent monster.  When a monster is captured, its disembodied 
eyes make a beeline back to the pen, where it is reincarnated and re- 
emerges.  After a short time, the blue monsters flash white three times 
and revert to their normal dangerous state. 
  
The prize appears twice per screen, staying for a time for PACKMAN to 
claim it, then disappearing.  The first appearance is sometime after 
one-third to two-thirds of the dots are cleared from the screen. 
  
Each screen is progressively more difficult than the last.  For the 
first several screens, PACKMAN is considerably faster than the monsters 
in open corridors, so he can usually out-run them unless he gets him- 
self trapped or is slowed by eating a long string of dots (eating slows 
his speed by one-third).  However, with each screen, the monsters 
become faster relative to PACKMAN, and remain frightened for shorter 
length of time.  By the tenth screen, the power capsules cease to have 
any effect at all.  Also, the prizes appear for progressively shorter 
intervals. 
creen, the power capsules cease to have 
any
```
{% endraw %}

## WIZARD.BAS

{% raw %}
```bas
10 KEY OFF:CLS
20 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
30 PRINT"░┌───────────────────────────────────┐░"
40 PRINT"░│                                   │░"
50 PRINT"░│            2039-A.BAS             │░"
60 PRINT"░│        THE WIZARD'S CASTLE        │░"
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
1000 SAMP$="NO":GOTO 1020
1010 SAMP$="YES"
1020 CLS:WIDTH 80:KEY OFF
1030 REM *****************************************************
1040 REM *                                                   *
1050 REM * WIZARD'S CASTLE GAME FROM JULY/AUGUST 1980        *
1060 REM * ISSUE OF RECREATIONAL COMPUTING MAGAZINE          *
1070 REM * WRITTEN FOR EXIDY SORCERER BY JOSEPH R. POWER     *
1080 REM * MODIFIED FOR HEATH MICROSOFT BASIC BY J.F.STETSON *
1090 REM *                                                   *
1100 REM *****************************************************
1110 DEFINT A-Z
1120 DIM C$(34),I$(34),R$(4),W$(8),E$(8)
1130 DIM L(512),C(3,4),T(8),O(3),R(3)
1140 DEF FNA(Q)=1+INT(RND(1)*Q)
1150 DEF FNB(Q)=Q+8*((Q=9)-(Q=0))
1160 DEF FNC(Q)=-Q*(Q<19)-18*(Q>18)
1170 DEF FND(Q)=64*(Q-1)+8*(X-1)+Y
1180 DEF FNE(Q)=Q+100*(Q>99)
1190 Y$="** PLEASE ANSWER YES OR NO"
1200 NG=0
1210 REM
1220 REM   INITIALIZE ARRAYS
1230 REM
1240 NG=NG+1
1250 Q=RND(1)
1260 RESTORE
1270 FOR Q=1 TO 34
1280 READ C$(Q),I$(Q)
1290 NEXT Q
1300 FOR Q=1 TO 512
1310 L(Q)=101
1320 NEXT Q
1330 FOR Q=1 TO 8
1340 READ W$(Q),E$(Q)
1350 NEXT Q
1360 FOR Q=1 TO 4
1370 READ R$(Q)
1380 NEXT Q
1390 IF NG > 1 GOTO 1520
1400 GOSUB 9770
1410 PRINT TAB(16);"* * * THE WIZARD'S CASTLE * * *"
1420 PRINT
1430 GOSUB 9770
1440 PRINT "MANY CYCLES AGO, IN THE KINGDOM OF N'DIC, THE GNOMIC"
1450 PRINT "WIZARD ZOT FORGED HIS GREAT *ORB OF POWER*. HE SOON"
1460 PRINT "VANISHED, LEAVING BEHIND HIS VAST SUBTERRANEAN CASTLE"
1470 PRINT "FILLED WITH ESURIENT MONSTERS, FABULOUS TREASURES, AND"
1480 PRINT "THE INCREDIBLE *ORB OF ZOT*. FROM THAT TIME HENCE, MANY"
1490 PRINT "A BOLD YOUTH HAS VENTURED INTO THE WIZARD'S CASTLE. AS"
1500 PRINT "OF NOW, *NONE* HAS EVER EMERGED VICTORIOUSLY! BEWARE!!"
1510 PRINT
1520 X=1 : Y=4
1530 L(FND(1))=2
1540 FOR Z=1 TO 7
1550 FOR Q1=1 TO 2
1560 Q=104
1570 GOSUB 9590
1580 L(FND(Z+1))=103
1590 NEXT Q1
1600 NEXT Z
1610 FOR Z=1 TO 8
1620 FOR Q=113 TO 124
1630 GOSUB 9590
1640 NEXT Q
1650 FOR Q1=1 TO 3
1660 FOR Q=105 TO 112
1670 GOSUB 9590
1680 NEXT Q
1690 Q=125
1700 GOSUB 9590
1710 NEXT Q1
1720 NEXT Z
1730 FOR Q=126 TO 133
1740 Z=FNA(8)
1750 GOSUB 9590
1760 NEXT Q
1770 Q=101
1780 FOR A=1 TO 3
1790 Z=FNA(8)
1800 GOSUB 9590
1810 C(A,1)=X
1820 C(A,2)=Y
1830 C(A,3)=Z
1840 C(A,4)=0
1850 NEXT A
1860 RC=0
1870 ST=2
1880 DX=14
1890 R$(3)="MAN"
1900 Q=112+FNA(12)
1910 Z=FNA(8)
1920 GOSUB 9590
1930 R(1)=X
1940 R(2)=Y
1950 R(3)=Z
1960 Q=109
1970 Z=FNA(8)
1980 GOSUB 9590
1990 O(1)=X
2000 O(2)=Y
2010 O(3)=Z
2020 BF=0 : OT=8 : AV=0 : HT=0 : T=1 : VF=0 : LF=0
2030 TC=0 : GP=60 : RF=0 : OF=0 : BL=0 : IQ=8 : SX=0
2040 FOR Q=1 TO 8
2050 T(Q)=0
2060 NEXT Q
2070 PRINT CHR$(7);
2080 PRINT "ALL RIGHT, BOLD ONE."
2090 PRINT "YOU MAY BE AN ELF, DWARF, MAN, OR HOBBIT."
2100 GOSUB 9830
2110 FOR Q=1 TO 4
2120 IF LEFT$(R$(Q),1)=O$ THEN RC=Q : ST=ST+2*Q : DX=DX-2*Q
2130 NEXT Q
2140 PRINT
2150 OT=OT+4*(RC=1)
2160 IF RC > 0 THEN R$(3)="HUMAN" : GOTO 2190
2170 PRINT "** THAT WAS INCORRECT. PLEASE TYPE E, D, M, OR H."
2180 GOTO 2090
2190 PRINT "WHICH SEX TO YOU PREFER";
2200 GOSUB 9850
2210 IF O$="M" THEN SX=1 : GOTO 2250
2220 IF O$="F" GOTO 2250
2230 PRINT "** CUTE ";R$(RC);", REAL CUTE. TRY M OR F."
2240 GOTO 2190
2250 PRINT
2260 PRINT "OK, ";R$(RC);", YOU HAVE THE FOLLOWING ATTRIBUTES :"
2270 PRINT "STRENGTH =";ST;" INTELLIGENCE =";IQ;" DEXTERITY =";DX
2280 PRINT "AND";OT;"OTHER POINTS TO ALLOCATE AS YOU WISH."
2290 PRINT
2300 Z$="STRENGTH"
2310 GOSUB 9880
2320 ST=ST+Q
2330 IF OT=0 GOTO 2410
2340 Z$="INTELLIGENCE"
2350 GOSUB 9880
2360 IQ=IQ+Q
2370 IF OT=0 GOTO 2410
2380 Z$="DEXTERITY"
2390 GOSUB 9880
2400 DX=DX+Q
2410 PRINT "OK, ";R$(RC);", YOU HAVE 60 GOLD PIECES (GP'S)."
2420 Z$="ARMOR"
2430 GOSUB 10130
2440 AV=0 : WV=0 : FL=0 : WC=0
2450 PRINT "PLATE<30> CHAINMAIL<20> LEATHER<10> NOTHING<0>"
2460 GOSUB 9830
2470 IF O$="N" GOTO 2530
2480 AV=-3*(O$="P")-2*(O$="C")-(O$="L")
2490 IF AV > 0 GOTO 2530
2500 PRINT
2510 PRINT "** ARE YOU A ";R$(RC);" OR ";C$(FNA(12)+12);"?"
2520 GOTO 2420
2530 AH=AV*7 : GP=GP-AV*10
2540 PRINT
2550 PRINT "OK, BOLD ";R$(RC);", YOU HAVE";GP;"GP'S LEFT."
2560 Z$="WEAPONS"
2570 GOSUB 10130
2580 PRINT "SWORD<30> MACE<20> DAGGER<10> NOTHING<0>"
2590 GOSUB 9830
2600 IF O$="N" GOTO 2660
2610 WV=-3*(O$="S")-2*(O$="M")-(O$="D")
2620 IF WV > 0 GOTO 2660
2630 PRINT 
2640 PRINT "** IS YOUR IQ REALLY";IQ;"?"
2650 GOTO 2560
2660 GP=GP-WV*10
2670 IF GP < 20 GOTO 2730
2680 PRINT
2690 PRINT "DO YOU WANT TO BUY A LAMP FOR 20 GP'S";
2700 GOSUB 9850
2710 IF O$="Y" THEN LF=1 : GP=GP-20 : GOTO 2730
2720 IF O$ <> "N" THEN PRINT : PRINT Y$ : PRINT : GOTO 2690
2730 PRINT
2740 IF GP < 1 THEN Q=0 : GOTO 2850
2750 PRINT "OK, ";R$(RC);", YOU HAVE";GP;"GOLD PIECES LEFT."
2760 PRINT
2770 INPUT "FLARES COST 1 GP EACH. HOW MANY DO YOU WANT";O$
2780 Q=VAL(O$)
2790 PRINT
2800 IF Q > 0 OR ASC(O$)=48 GOTO 2840
2810 PRINT "** IF YOU DON'T WANT ANY, JUST TYPE 0 (ZERO)."
2820 PRINT
2830 GOTO 2770
2840 IF Q > GP THEN PRINT "** YOU CAN ONLY AFFORD";GP;"." : PRINT : GOTO 2770
2850 FL=FL+Q : GP=GP-Q
2860 X=1 : Y=4 : Z=1
2870 PRINT "OK, ";R$(RC);", YOU ARE NOW ENTERING THE CASTLE!"
2880 GOTO 5920
2890 REM
2900 REM   MAIN PROCESSING LOOP
2910 REM
2920 T=T+1
2930 IF RF+OF > 0 GOTO 3060
2940 IF C(1,4) > T(1) THEN T=T+1
2950 IF C(2,4) > T(3) THEN GP=GP-FNA(5)
2960 IF GP < 0 THEN GP=0
2970 IF C(3,4) <= T(5) GOTO 3060
2980 A=X : B=Y : C=Z
2990 X=FNA(8) : Y=FNA(8) : Z=FNA(8)
3000 L(FND(Z))=FNE(L(FND(Z)))+100
3010 X=A : Y=B : Z=C
3020 IF L(FND(Z)) <> 1 GOTO 3060
3030 FOR Q=1 TO 3
3040 C(Q,4)=-(C(Q,1)=X)*(C(Q,2)=Y)*(C(Q,3)=Z)
3050 NEXT Q
3060 IF FNA(5) > 1 GOTO 3350
3070 PRINT
3080 PRINT "YOU ";
3090 Q=FNA(7)+BL
3100 IF Q > 7 THEN Q=4
3110 ON Q GOSUB 3270,3150,3250,3130,3290,3310,3330
3120 GOTO 3350
3130 PRINT "STEPPED ON A FROG!"
3140 RETURN
3150 PRINT "HEAR ";
3160 ON FNA(4) GOTO 3170,3190,3210,3230
3170 PRINT "A SCREAM!"
3180 RETURN
3190 PRINT "FOOTSTEPS!"
3200 RETURN
3210 PRINT "A WUMPUS!"
3220 RETURN
3230 PRINT "THUNDER!"
3240 RETURN
3250 PRINT "SNEEZED!"
3260 RETURN
3270 PRINT "SEE A BAT FLY BY!"
3280 RETURN
3290 PRINT "SMELL ";C$(12+FNA(13));" FRYING!"
3300 RETURN
3310 PRINT "FEEL LIKE YOU'RE BEING WATCHED!"
3320 RETURN
3330 PRINT "HEAR FAINT RUSTLING NOISES!"
3340 RETURN
3350 IF BL+T(4) <> 2 GOTO 3390
3360 PRINT
3370 PRINT C$(29);" CURES YOUR BLINDNESS!"
3380 BL=0
3390 IF BF+T(6) <> 2 GOTO 3430
3400 PRINT
3410 PRINT C$(31);" DISSOLVES THE BOOK!"
3420 BF=0
3430 PRINT
3440 LINE INPUT "ENTER YOUR COMMAND : ";O$
3450 IF LEFT$(O$,2)="DR" GOTO 4760
3460 O$=LEFT$(O$,1)
3470 IF O$="N" GOTO 3890
3480 IF (O$="S") OR (O$="W") OR (O$="E") GOTO 3900
3490 IF O$="U" GOTO 3950
3500 IF O$="D" GOTO 3980
3510 IF O$="M" GOTO 4030
3520 IF O$="F" THEN ON BL+1 GOTO 4260,4030
3530 IF O$="L" THEN ON BL+1 GOTO 4520,4030
3540 IF O$="O" GOTO 4950
3550 IF O$="G" THEN ON BL+1 GOTO 5390,4030
3560 IF O$="T" THEN PRINT : ON RF+1 GOTO 5650,5690
3570 IF O$="Q" GOTO 5800
3580 IF O$<>"H" GOTO 3860
3590 PRINT CHR$(27);"E"
3600 PRINT "*** WIZARD'S CASTLE COMMAND AND INFORMATION SUMMARY ***"
3610 PRINT
3620 PRINT "THE FOLLOWING COMMANDS ARE AVAILABLE :"
3630 PRINT 
3640 PRINT "H/ELP     N/ORTH    S/OUTH    E/AST     W/EST     U/P"
3650 PRINT "D/OWN     DR/INK    M/AP      F/LARE    L/AMP     O/PEN"
3660 PRINT "G/AZE     T/ELEPORT Q/UIT"
3670 PRINT
3680 PRINT "THE CONTENTS OF ROOMS ARE AS FOLLOWS :"
3690 PRINT
3700 PRINT ". = EMPTY ROOM      B = BOOK            C = CHEST"
3710 PRINT "D = STAIRS DOWN     E = ENTRANCE/EXIT   F = FLARES"
3720 PRINT "G = GOLD PIECES     M = MONSTER         O = CRYSTAL ORB"
3730 PRINT "P = MAGIC POOL      S = SINKHOLE        T = TREASURE"
3740 PRINT "U = STAIRS UP       V = VENDOR          W = WARP/ORB"
3750 PRINT
3760 PRINT "THE BENEFITS OF HAVING TREASURES ARE :"
3770 PRINT
3780 PRINT "RUBY RED - AVOID LETHARGY     PALE PEARL - AVOID LEECH"
3790 PRINT "GREEN GEM - AVOID FORGETTING  OPAL EYE - CURES BLINDNESS"
3800 PRINT "BLUE FLAME - DISSOLVES BOOKS  NORN STONE - NO BENEFIT"
3810 PRINT "PALANTIR - NO BENEFIT         SILMARIL - NO BENEFIT"
3820 PRINT
3830 PRINT "PRESS RETURN WHEN READY TO RESUME, ";R$(RC);".";
3840 LINE INPUT "";O$
3850 GOTO 2920
3860 PRINT
3870 PRINT "** SILLY ";R$(RC);", THAT WASN'T A VALID COMMAND!"
3880 GOTO 2920
3890 IF L(FND(Z))=2 GOTO 8960
3900 X=X+(O$="N")-(O$="S")
3910 Y=Y+(O$="W")-(O$="E")
3920 X=FNB(X)
3930 Y=FNB(Y)
3940 GOTO 5920
3950 IF L(FND(Z))=3 THEN Z=Z-1 : GOTO 5920
3960 Z$="UP"
3970 GOTO 4000
3980 Z$="DOWN"
3990 IF L(FND(Z))=4 THEN Z=Z+1 : GOTO 5920
4000 PRINT
4010 PRINT "** THERE ARE NO STAIRS GOING ";Z$;" FROM HERE!"
4020 GOTO 2920
4030 IF BL <> 1 GOTO 4100
4040 PRINT
4050 PRINT "** YOU CAN'T SEE ANYTHING, YOU DUMB ";R$(RC);"!"
4060 GOTO 2920
4070 REM
4080 REM   DISPLAY MAP OF CURRENT CASTLE LEVEL
4090 REM
4100 PRINT
4110 A=X : B=Y
4120 FOR X=1 TO 8
4130 FOR Y=1 TO 8
4140 Q=L(FND(Z))
4150 IF Q > 99 THEN Q=Q-100 ' LET Q=34 TO HIDE ROOMS
4160 IF X=A AND Y=B THEN PRINT "<";I$(Q);">  "; : GOTO 4180
4170 PRINT " ";I$(Q);"   ";
4180 NEXT Y
4190 PRINT
4200 PRINT
4210 NEXT X
4220 X=A : Y=B
4230 GOTO 4470
4240 PRINT ") LEVEL";Z
4250 GOTO 2920
4260 IF FL <> 0 GOTO 4320
4270 PRINT "** HEY, BRIGHT ONE, YOU'RE OUT OF FLARES!"
4280 GOTO 2920
4290 REM
4300 REM   DISeADJACENT ROOM CONTENTS WITH FLARE
4310 REM
4320 PRINT
4330 FL=FL-1
4340 A=X : B=Y
4350 FOR Q1=A-1 TO A+1
4360 X=FNB(Q1)
4370 FOR Q2=B-1 TO B+1
4380 Y=FNB(Q2)
4390 Q=FNE(L(FND(Z)))
4400 L(FND(Z))=Q
4410 PRINT " ";I$(Q);"   ";
4420 NEXT Q2
4430 PRINT
4440 PRINT
4450 NEXT Q1
4460 X=A : Y=B
4470 GOSUB 10160
4480 GOTO 2920
4490 REM
4500 REM   DISPLAY CONTENTS OF ADJACENT ROOM WITH LAMP
4510 REM
4520 IF LF <> 0 GOTO 4560
4530 PRINT
4540 PRINT "** YOU DON'T HAVE A LAMP, ";R$(RC);"!"
4550 GOTO 2920
4560 PRINT
4570 PRINT "WHERE DO YOU WANT TO SHINE THE LAMP (N,S,E,W)";
4580 GOSUB 9850
4590 A=X : B=Y
4600 X=FNB(X+(O$="N")-(O$="S"))
4610 Y=FNB(Y+(O$="W")-(O$="E"))
4620 IF A-X+B-Y <> 0 GOTO 4660
4630 PRINT
4640 PRINT "** THAT'S NOT A DIRECTION, ";R$(RC);"!"
4650 GOTO 2920
4660 PRINT
4670 PRINT "THE LAMP SHINES INTO (";X;",";Y;") LEVEL";Z;"."
4680 PRINT
4690 L(FND(Z))=FNE(L(FND(Z)))
4700 PRINT "THERE YOU WILL FIND ";C$(L(FND(Z)));"."
4710 X=A : Y=B
4720 GOTO 2920
4730 REM
4740 REM   TAKE A DRINK FROM A POOL
4750 REM
4760 IF L(FND(Z))=5 GOTO 4800
4770 PRINT
4780 PRINT "** IF YOU WANT A DRINK, FIND A POOL!"
4790 GOTO 2920
4800 Q=FNA(8)
4810 PRINT
4820 PRINT "YOU TAKE A DRINK AND ";
4830 IF Q < 7 THEN PRINT "FEEL ";
4840 ON Q GOTO 4850,4860,4870,4880,4890,4900,4910,4930
4850 ST=FNC(ST+FNA(3)) : PRINT "STRONGER." : GOTO 2920
4860 ST=ST-FNA(3) : PRINT "WEAKER." : ON (1-(ST<1)) GOTO 2920,8840
4870 IQ=FNC(IQ+FNA(3)) : PRINT "SMARTER." : GOTO 2920
4880 IQ=IQ-FNA(3) : PRINT "DUMBER." : ON (1-(IQ<1)) GOTO 2920,8840
4890 DX=FNC(DX+FNA(3)) : PRINT "NIMBLER." : GOTO 2920
4900 DX=DX-FNA(3) : PRINT "CLUMSIER." : ON (1-(DX<1)) GOTO 2920,8840
4910 Q=FNA(4) : IF Q=RC GOTO 4910
4920 RC=Q : PRINT "BECOME A ";R$(RC);"." : GOTO 2920
4930 SX=1-SX : PRINT "TURN INTO A "; : IF SX=0 THEN PRINT "FE";
4940 PRINT "MALE ";R$(RC);"!" : GOTO 2920
4950 IF L(FND(Z)) <> 6 GOTO 4990
4960 PRINT
4970 PRINT "YOU OPEN THE CHEST AND"
4980 GOTO 5250
4990 IF L(FND(Z)) <> 12 GOTO 5030
5000 PRINT
5010 PRINT "YOU OPEN THE BOOK AND"
5020 GOTO 5060
5030 PRINT
5040 PRINT "** THE ONLY THING OPENED WAS YOUR BIG MOUTH!"
5050 GOTO 2920
5060 ON FNA(6) GOTO 5070,5100,5120,5140,5170,5200
5070 PRINT "FLASH! OH NO! YOU ARE NOW A BLIND ";R$(RC);"!"
5080 BL=1
5090 GOTO 5230
5100 PRINT "IT'S ANOTHER VOLUME OF ZOT'S POETRY! - YECH!!"
5110 GOTO 5230
5120 PRINT "IT'S AN OLD COPY OF PLAY";R$(FNA(4));"!"
5130 GOTO 5230
5140 PRINT "IT'S A MANUAL OF DEXTERITY!"
5150 DX=18
5160 GOTO 5230
5170 PRINT "IT'S A MANUAL OF STRENGTH!"
5180 ST=18
5190 GOTO 5230
5200 PRINT "THE BOOK STICKS TO YOUR HANDS -"
5210 PRINT "NOW YOU ARE UNABLE TO DRAW YOUR WEAPON!"
5220 BF=1
5230 L(FND(Z))=1
5240 GOTO 2920
5250 ON FNA(4) GOTO 5260,5300,5340,5300
5260 PRINT "KABOOM! IT EXPLODES!!"
5270 Q=FNA(6)
5280 GOSUB 8740
5290 ON (1-(ST<1)) GOTO 5230,8840
5300 Q=FNA(1000)
5310 PRINT "FIND";Q;"GOLD PIECES!"
5320 GP=GP+Q
5330 GOTO 5230
5340 PRINT "GAS!! YOU STAGGER FROM THE ROOM!"
5350 L(FND(Z))=1
5360 T=T+20
5370 O$=MID$("NSEW",FNA(4),1)
5380 GOTO 3900
5390 IF L(FND(Z))=11 GOTO 5430
5400 PRINT
5410 PRINT "** IT'S HARD TO GAZE WITHOUT AN ORB!"
5420 GOTO 2920
5430 PRINT
5440 PRINT "YOU SEE ";
5450 ON FNA(6) GOTO 5460,5480,5500,5520,5590,5630
5460 PRINT "YOURSELF IN A BLOODY HEAP!"
5470 ST=ST-FNA(2) : ON (1-(ST<1)) GOTO 2920,8840
5480 PRINT "YOURSELF DRINKING FROM A POOL AND BECOMING ";C$(12+FNA(13));"!"
5490 GOTO 2920
5500 PRINT C$(12+FNA(13));" GAZING BACK AT YOU!"
5510 GOTO 2920
5520 A=X : B=Y : C=Z
5530 X=FNA(8) : Y=FNA(8) : Z=FNA(8)
5540 Q=FNE(L(FND(Z)))
5550 L(FND(Z))=Q
5560 PRINT C$(Q);" AT (";X;",";Y;") LEVEL";Z;"."
5570 X=A : Y=B : Z=C
5580 GOTO 2920
5590 A=FNA(8) : B=FNA(8) : C=FNA(8)
5600 IF FNA(8) < 4 THEN A=O(1) : B=O(2) : C=O(3)
5610 PRINT "***THE ORB OF ZOT*** AT (";A;",";B;") LEVEL";C;"!"
5620 GOTO 2920
5630 PRINT "A SOAP OPERA RERUN!"
5640 GOTO 2920
5650 IF RF <> 0 GOTO 5690
5660 PRINT
5670 PRINT "** YOU CAN'T TELEPORT WITHOUT THE RUNESTAFF!"
5680 GOTO 2920
5690 Z$="X-COORDINATE"
5700 GOSUB 9990
5710 X=Q
5720 Z$="Y-COORDINATE"
5730 GOSUB 9990
5740 Y=Q
5750 Z$="Z-COORDINATE"
5760 GOSUB 9990
5770 Z=Q
5780 O$="T"
5790 GOTO 5920
5800 PRINT
5810 PRINT "DO YOU REALLY WANT TO QUIT NOW";
5820 GOSUB 9850
5830 PRINT
5840 IF O$="Y" GOTO 5870
5850 PRINT "** THEN DON'T SAY THAT YOU DO!"
5860 GOTO 2920
5870 PRINT
5880 GOTO 9080
5890 REM
5900 REM   DISPLAY STATUS INFORMATION
5910 REM
5920 PRINT
5930 IF BL=0 THEN GOSUB 10160 : PRINT
5940 PRINT "STRENGTH =";ST;" INTELLIGENCE =";IQ;" DEXTERITY =";DX
5950 PRINT "TREASURES =";TC;" FLARES =";FL;" GOLD PIECES =";GP
5960 PRINT "WEAPON = ";W$(WV+1);"  ARMOR = ";W$(AV+5);
5970 IF LF=1 THEN PRINT "  AND A LAMP";
5980 PRINT
5990 WC=0
6000 Q=FNE(L(FND(Z)))
6010 L(FND(Z))=Q
6020 Z$="YOU NOW HAVE"
6030 PRINT
6040 PRINT "HERE YOU FIND ";C$(Q);"."
6050 IF (Q<7) OR (Q=11) OR (Q=12) GOTO 2920
6060 IF Q=7 THEN GP=GP+FNA(10) : PRINT Z$;GP;"." : GOTO 5230
6070 IF Q=8 THEN FL=FL+FNA(5) : PRINT Z$;FL;"." : GOTO 5230
6080 IF Q > 9 GOTO 6110
6090 IF (O(1)=X) AND (O(2)=Y) AND (O(3)=Z) THEN ON (1-(O$="T")) GOTO 3900,9370
6100 X=FNA(8) : Y=FNA(8) : Z=FNA(8) : GOTO 5920
6110 IF Q=10 THEN Z=FNB(Z+1) : GOTO 5920
6120 IF Q <= 25 OR Q >= 34 GOTO 6180
6130 PRINT
6140 PRINT "IT'S NOW YOURS!"
6150 T(Q-25)=1
6160 TC=TC+1
6170 GOTO 5230
6180 A=L(FND(Z))-12
6190 WC=0
6200 IF (A<13) OR (VF=1) GOTO 7390
6210 PRINT
6220 PRINT "YOU MAY TRADE WITH, ATTACK, OR IGNORE THE VENDOR."
6230 GOSUB 9830
6240 IF O$="I" GOTO 2920
6250 IF O$ <> "A" GOTO 6300
6260 VF=1
6270 PRINT
6280 PRINT "YOU'LL BE SORRY THAT YOU DID THAT!"
6290 GOTO 7390
6300 IF O$="T" GOTO 6340
6310 PRINT
6320 PRINT "** NICE SHOT, ";R$(RC);"!"
6330 GOTO 6210
6340 FOR Q=1 TO 8
6350 A=FNA(Q*1500)
6360 IF T(Q)=0 GOTO 6420
6370 PRINT
6380 PRINT "DO YOU WANT TO SELL ";C$(Q+25);" FOR";A;"GP'S";
6390 GOSUB 9850
6400 IF O$="Y" THEN TC=TC-1 : T(Q)=0 : GP=GP+A : GOTO 6420
6410 IF O$ <> "N" THEN PRINT Y$ : GOTO 6370
6420 NEXT Q
6430 IF GP >= 1000 GOTO 6470
6440 PRINT
6450 PRINT "YOU'RE TOO POOR TO TRADE, ";R$(RC);"."
6460 GOTO 2920
6470 IF GP < 1250 GOTO 6970
6480 PRINT
6490 PRINT "OK, ";R$(RC);", YOU HAVE";GP;"GP'S AND ";W$(AV+5);" ARMOR."
6500 PRINT
6510 Z$="ARMOR"
6520 GOSUB 10130
6530 PRINT "NOTHING<0> LEATHER<1250> ";
6540 IF GP > 1499 THEN PRINT "CHAINMAIL<1500> ";
6550 IF GP > 1999 THEN PRINT "PLATE<2000>";
6560 PRINT
6570 GOSUB 9830
6580 PRINT
6590 IF O$="N" GOTO 6720
6600 IF O$="L" THEN GP=GP-1250 : AV=1 : AH=7 : GOTO 6720
6610 IF O$ <> "C" OR GP >= 1500 GOTO 6640
6620 PRINT "** YOU HAVEN'T GOT THAT MUCH CASH ON HAND!"
6630 GOTO 6500
6640 IF O$="C" THEN GP=GP-1500 : AV=2 : AH=14 : GOTO 6720
6650 IF O$ <> "P" OR GP >= 2000 GOTO 6680
6660 PRINT "** YOU CAN'T AFFORD PLATE ARMOR!"
6670 GOTO 6500
6680 IF O$="P" THEN GP=GP-2000 : AV=3 : AH=21 : GOTO 6720
6690 PRINT
6700 PRINT "** DON'T BE SILLY. CHOOSE A SELECTION."
6710 GOTO 6560
6720 IF GP < 1250 GOTO 6970
6730 PRINT
6740 PRINT"YOU HAVE";GP;"GP'S LEFT WITH ";W$(WV+1);" IN HAND."
6750 PRINT
6760 Z$="WEAPON"
6770 GOSUB 10130
6780 PRINT "NOTHING<0> DAGGER<1250> ";
6790 IF GP > 1499 THEN PRINT "MACE<1500> ";
6800 IF GP > 1999 THEN PRINT "SWORD<2000>";
6810 PRINT
6820 GOSUB 9830
6830 PRINT
6840 IF O$="N" GOTO 6970
6850 IF O$="D" THEN GP=GP-1250 : WV=1 : GOTO 6970
6860 IF O$ <> "M" OR GP >= 1500 GOTO 6890
6870 PRINT "** SORRY SIR, I'M AFRAID I DON'T GIVE CREDIT!"
6880 GOTO 6750
6890 IF O$="M" THEN GP=GP-1500 : WV=2 : GOTO 6970
6900 IF O$ <> "S" OR GP >= 2000 GOTO 6940
6910 PRINT "** YOUR DUNGEON EXPRESS CARD - ";
6920 PRINT "YOU LEFT HOME WITHOUT IT!"
6930 GOTO 6750
6940 IF O$="S" THEN GP=GP-2000 : WV=3 : GOTO 6970
6950 PRINT "** TRY CHOOSING A SELECTION!"
6960 GOTO 6810
6970 IF GP < 1000 GOTO 2920
6980 Z$="STRENGTH"
6990 GOSUB 10070
7000 IF O$ <> "Y" GOTO 7060
7010 GP=GP-1000
7020 ST=FNC(ST+FNA(6))
7030 Q=ST
7040 GOSUB 10100
7050 GOTO 6970
7060 IF O$ <> "N" THEN PRINT Y$ : GOTO 6980
7070 IF GP < 1000 GOTO 2920
7080 Z$="INTELLIGENCE"
7090 GOSUB 10070
7100 IF O$ <> "Y" GOTO 7160
7110 GP=GP-1000
7120 IQ=FNC(IQ+FNA(6))
7130 Q=IQ
7140 GOSUB 10100
7150 GOTO 7070
7160 IF O$ <> "N" THEN PRINT Y$ : GOTO 7080
7170 IF GP < 1000 GOTO 2920
7180 Z$="DEXTERITY"
7190 GOSUB 10070
7200 IF O$ <> "Y" GOTO 7260
7210 GP=GP-1000
7220 DX=FNC(DX+FNA(6))
7230 Q=DX
7240 GOSUB 10100
7250 GOTO 7170
7260 IF O$ <> "N" THEN PRINT Y$ : GOTO 7180
7270 IF (GP<1000) OR (LF=1) GOTO 2920
7280 PRINT
7290 PRINT "DO YOU WANT TO BUY A LAMP FOR 1000 GP'S";
7300 GOSUB 9850
7310 IF O$ <> "Y" GOTO 7370
7320 GP=GP-1000
7330 LF=1
7340 PRINT
7350 PRINT "IT'S GUARANTEED TO OUTLIVE YOU!"
7360 GOTO 2920
7370 IF O$ <> "N" THEN PRINT Y$ : GOTO 7280
7380 GOTO 2920
7390 Q1=1+INT(A/2) : Q2=A+2 : Q3=1
7400 IF (C(1,4)>T(1)) OR (BL=1) OR (DX<FNA(9)+FNA(9)) GOTO 8420
7410 PRINT
7420 PRINT "YOU'RE FACING ";C$(A+12);"!"
7430 PRINT
7440 PRINT "YOU MAY ATTACK OR RETREAT."
7450 IF Q3=1 THEN PRINT "YOU CAN ALSO ATTEMPT A BRIBE."
7460 IF IQ > 14 THEN PRINT "YOU CAN ALSO CAST A SPELL."
7470 PRINT
7480 PRINT "YOUR STRENGTH IS";ST;"AND YOUR DEXTERITY IS";DX;"."
7490 GOSUB 9830
7500 IF O$ <> "A" GOTO 7910
7510 IF WV <> 0 GOTO 7550
7520 PRINT
7530 PRINT "** POUNDING ON ";C$(A+12);" WON'T HURT IT!"
7540 GOTO 8420
7550 IF BF <> 1 GOTO 7590
7560 PRINT
7570 PRINT "** YOU CAN'T BEAT IT TO DEATH WITH A BOOK!"
7580 GOTO 8420
7590 IF DX >= FNA(20)+(3*BL) GOTO 7630
7600 PRINT
7610 PRINT "YOU MISSED, TOO BAD!"
7620 GOTO 8420
7630 Z$=RIGHT$(C$(A+12),LEN(C$(A+12))-2)
7640 IF LEFT$(Z$,1)=" " THEN Z$=MID$(Z$,2)
7650 PRINT
7660 PRINT "YOU HIT THE EVIL ";Z$;"!"
7670 Q2=Q2-WV
7680 IF (A <> 9 AND A <> 12) GOTO 7730
7690 IF FNA(8) <> 1 GOTO 7730
7700 PRINT
7710 PRINT "OH NO! YOUR ";W$(WV+1);" BROKE!"
7720 WV=0
7730 IF Q2 > 0 GOTO 8420
7740 PRINT
7750 MC=MC-1
7760 PRINT C$(A+12);" LIES DEAD AT YOUR FEET!"
7770 IF H > T-60 GOTO 7810
7780 PRINT
7790 PRINT "YOU SPEND AN HOUR EATING ";C$(A+12);E$(FNA(8));"."
7800 H=T
7810 IF X <> R(1) OR Y <> R(2) OR Z <> R(3) THEN ON (1-(A=13)) GOTO 7860,9630
7820 PRINT
7830 PRINT "GREAT ZOT! YOU'VE FOUND THE RUNESTAFF!";CHR$(7)
7840 R(1)=0
7850 RF=1
7860 Q=FNA(1000)
7870 PRINT
7880 PRINT "YOU NOW GET HIS HOARD OF";Q;"GP'S"
7890 GP=GP+Q
7900 GOTO 5230
7910 IF O$="R" GOTO 8420
7920 IF O$ <> "C" GOTO 8210
7930 IF IQ >= 15 OR Q3 <= 1 GOTO 7970
7940 PRINT
7950 PRINT "** YOU CAN'T CAST A SPELL NOW!"
7960 GOTO 7410
7970 PRINT
7980 PRINT "WHICH SPELL (WEB, FIREBALL, DEATHSPELL)";
7990 GOSUB 9850
8000 PRINT
8010 IF O$ <> "W" GOTO 8050
8020 ST=ST-1
8030 WC=FNA(8)+1
8040 ON (1-(ST<1)) GOTO 8420,8840
8050 IF O$ <> "F" GOTO 8140
8060 Q=FNA(7)+FNA(7)
8070 ST=ST-1
8080 IQ=IQ-1
8090 IF (IQ < 1) OR (ST < 1) GOTO 8840
8100 PRINT "IT DOES";Q;"POINTS WORTH OF DAMAGE."
8110 PRINT
8120 Q2=Q2-Q
8130 GOTO 7730
8140 IF O$="D" GOTO 8180
8150 PRINT
8160 PRINT "** TRY ONE OF THE OPTIONS GIVEN."
8170 GOTO 7410
8180 PRINT "DEATH . . . ";
8190 IF IQ < FNA(4)+15 THEN PRINT "YOURS!" : IQ=0 : GOTO 8840
8200 PRINT "HIS!" : Q2=0 : GOTO 7740
8210 IF O$="B" AND Q3 <= 1 GOTO 8250
8220 PRINT
8230 PRINT "** CHOOSE ONE OF THE OPTIONS LISTED."
8240 GOTO 7410
8250 IF TC <> 0 GOTO 8290
8260 PRINT
8270 PRINT "ALL I WANT IS YOUR LIFE!"
8280 GOTO 8420
8290 Q=FNA(8)
8300 IF T(Q)=0 GOTO 8290
8310 PRINT
8320 PRINT "I WANT ";C$(Q+25);". WILL YOU GIVE IT TO ME";
8330 GOSUB 9850
8340 IF O$="N" GOTO 8420
8350 IF O$ <> "Y" THEN PRINT Y$ : GOTO 8310
8360 T(Q)=0
8370 TC=TC-1
8380 PRINT
8390 PRINT "OK, JUST DON'T TELL ANYONE ELSE."
8400 VF=VF+(L(FND(Z))=25)
8410 GOTO 2920
8420 Q3=2
8430 IF WC <= 0 GOTO 8460
8440 WC=WC-1
8450 IF WC=0 THEN PRINT : PRINT "THE WEB JUST BROKE!"
8460 Z$=RIGHT$(C$(A+12),LEN(C$(A+12))-2)
8470 IF LEFT$(Z$,1)=" " THEN Z$=MID$(Z$,2)
8480 IF WC <= 0 GOTO 8520
8490 PRINT
8500 PRINT "THE ";Z$;" IS STUCK AND CAN'T ATTACK NOW!"
8510 GOTO 8630
8520 PRINT
8530 PRINT "THE ";Z$;" ATTACKS!"
8540 IF DX < FNA(7)+FNA(7)+FNA(7)+3*BL GOTO 8580
8550 PRINT
8560 PRINT "WHAT LUCK, HE MISSED YOU!"
8570 GOTO 8630
8580 PRINT
8590 PRINT "OUCH! HE HIT YOU!"
8600 Q=Q1
8610 GOSUB 8740
8620 IF ST < 1 GOTO 8840
8630 IF O$ <> "R" GOTO 7410
8640 PRINT
8650 PRINT "YOU HAVE ESCAPED!"
8660 PRINT
8670 PRINT "DO YOU WANT TO GO NORTH, SOUTH, EAST, OR WEST";
8680 GOSUB 9850
8690 IF O$="N" OR O$="S" OR O$="E" OR O$="W" GOTO 3900
8700 PRINT
8710 PRINT "** DON'T PRESS YOUR LUCK, ";R$(RC);"!"
8720 PRINT
8730 GOTO 8670
8740 IF AV=0 GOTO 8820
8750 Q=Q-AV
8760 AH=AH-AV
8770 IF Q < 0 THEN AH=AH-Q : Q=0
8780 IF AH >= 0 GOTO 8820
8790 AH=0 : AV=0
8800 PRINT
8810 PRINT "YOUR ARMOR HAS BEEN DESTROYED . . . GOOD LUCK!"
8820 ST=ST-Q
8830 RETURN
8840 PRINT CHR$(7)
8850 GOSUB 9770
8860 PRINT "A NOBLE EFFORT, OH FORMERLY LIVING ";R$(RC);"!"
8870 PRINT
8880 PRINT "YOU DIED DUE TO LACK OF ";
8890 IF ST < 1 THEN PRINT "STRENGTH."
8900 IF IQ < 1 THEN PRINT "INTELLIGENCE."
8910 IF DX < 1 THEN PRINT "DEXTERITY."
8920 PRINT
8930 Q3=1
8940 PRINT "AT THE TIME YOU DIED, YOU HAD :"
8950 GOTO 9130
8960 Q3=0
8970 PRINT
8980 PRINT "YOU LEFT THE CASTLE WITH";
8990 IF OF=0 THEN PRINT "OUT";
9000 PRINT " THE ORB OF ZOT."
9010 PRINT
9020 IF OF=0 GOTO 9080
9030 PRINT
9040 PRINT "AN INCREDIBLY GLORIOUS VICTORY!!"
9050 PRINT
9060 PRINT "IN ADDITION, YOU GOT OUT WITH THE FOLLOWING :"
9070 GOTO 9120
9080 PRINT
9090 PRINT "A LESS THAN AWE-INSPIRING DEFEAT."
9100 PRINT
9110 PRINT "WHEN YOU LEFT THE CASTLE, YOU HAD :"
9120 IF Q3=0 THEN PRINT "YOUR MISERABLE LIFE!"
9130 FOR Q=1 TO 8
9140 IF T(Q)=1 THEN PRINT C$(Q+25)
9150 NEXT Q
9160 PRINT W$(WV+1);" AND ";W$(AV+5);
9170 IF LF=1 THEN PRINT " AND A LAMP";
9180 PRINT
9190 PRINT "YOU ALSO HAD";FL;"FLARES AND";GP;"GOLD PIECES"
9200 IF RF=1 THEN PRINT "AND THE RUNESTAFF"
9210 PRINT
9220 PRINT "AND IT TOOK YOU";T;"TURNS!"
9230 PRINT
9240 PRINT "ARE YOU FOOLISH ENOUGH TO WANT TO PLAY AGAIN";
9250 GOSUB 9850
9260 PRINT
9270 IF O$ <> "Y" THEN GOTO 9330
9280 PRINT "SOME ";R$(RC);"S NEVER LEARN!"
9290 PRINT
9300 PRINT "PLEASE BE PATIENT WHILE THE CASTLE IS RESTOCKED."
9310 PRINT
9320 GOTO 1240
9330 IF O$ <> "N" THEN PRINT Y$ : GOTO 9240
9340 PRINT "MAYBE DUMB ";R$(RC);" IS NOT SO DUMB AFTER ALL!"
9350 PRINT
9360 GOTO 10180
9370 PRINT
9380 PRINT "GREAT UNMITIGATED ZOT!"
9390 PRINT
9400 PRINT "YOU JUST FOUND ***THE ORB OF ZOT***!"
9410 PRINT
9420 PRINT "THE RUNESTAFF HAS DISAPPEARED!"
9430 RF=0
9440 OF=1
9450 O(1)=0
9460 GOTO 5230
9470 DATA AN EMPTY ROOM,.,THE ENTRANCE,E,STAIRS GOING UP,U
9480 DATA STAIRS GOING DOWN,D,A POOL,P,A CHEST,C,GOLD PIECES,G
9490 DATA FLARES,F,A WARP,W,A SINKHOLE,S,A CRYSTAL ORB,O
9500 DATA A BOOK,B,A KOBOLD,M,AN ORC,M,A WOLF,M,A GOBLIN,M,AN OGRE,M
9510 DATA A TROLL,M,A BEAR,M,A MINOTAUR,M,A GARGOYLE,M,A CHIMERA,M
9520 DATA A BALROG,M,A DRAGON,M,A VENDOR,V,THE RUBY RED,T
9530 DATA THE NORN STONE,T,THE PALE PEARL,T,THE OPAL EYE,T
9540 DATA THE GREEN GEM,T,THE BLUE FLAME,T,THE PALANTIR,T,THE SILMARIL,T
9550 DATA X,"?",NO WEAPON," SANDWICH"
9560 DATA DAGGER," STEW",MACE," SOUP",SWORD," BURGER",NO ARMOR," ROAST"
9570 DATA LEATHER," FILET",CHAINMAIL," TACO",PLATE," PIE"
9580 DATA HOBBIT,ELF,MAN,DWARF
9590 X=FNA(8) : Y=FNA(8)
9600 IF L(FND(Z)) <> 101 GOTO 9590
9610 L(FND(Z))=Q
9620 RETURN
9630 PRINT
9640 PRINT "YOU GET ALL HIS WARES :"
9650 PRINT "PLATE ARMOR"
9660 AV=3 : AH=21
9670 PRINT "A SWORD"
9680 WV=3
9690 PRINT "A STRENGTH POTION"
9700 ST=FNC(ST+FNA(6))
9710 PRINT "AN INTELLIGENCE POTION"
9720 IQ=FNC(IQ+FNA(6))
9730 PRINT "A DEXTERITY POTION"
9740 DX=FNC(DX+FNA(6))
9750 IF LF=0 THEN PRINT "A LAMP" : LF=1
9760 GOTO 7860
9770 FOR Q=1 TO 64
9780 PRINT "*";
9790 NEXT Q
9800 PRINT
9810 PRINT
9820 RETURN
9830 PRINT
9840 PRINT "YOUR CHOICE";
9850 INPUT O$
9860 O$=LEFT$(O$,1)
9870 RETURN
9880 PRINT "HOW MANY POINTS DO YOU WISH TO ADD TO YOUR ";Z$;
9890 INPUT O$
9900 PRINT
9910 Q=VAL(O$)
9920 IF Q=0 AND ASC(O$) <> 48 THEN Q=-1
9930 IF Q<0 OR Q>OT OR Q<>INT(Q) THEN PRINT "** "; : GOTO 9880
9940 OT=OT-Q
9950 RETURN
9960 INPUT O$
9970 Q=INT(VAL(O$))
9980 RETURN
9990 PRINT
10000 PRINT Z$;
10010 INPUT O$
10020 Q=INT(VAL(O$))
10030 IF Q > 0 AND Q < 9 THEN RETURN
10040 PRINT
10050 PRINT "** TRY A NUMBER FROM 1 TO 8."
10060 GOTO 9990
10070 PRINT
10080 PRINT "DO YOU WANT TO BUY A POTION OF ";Z$;" FOR 1000 GP'S";
10090 GOTO 9850
10100 PRINT
10110 PRINT "YOUR ";Z$;" IS NOW";Q;"."
10120 RETURN
10130 PRINT
10140 PRINT "THESE ARE THE TYPES OF ";Z$;" YOU CAN BUY :"
10150 RETURN
10160 PRINT "YOU ARE AT (";X;",";Y;") LEVEL";Z;"."
10170 RETURN
10180 IF SAMP$="YES" THEN CHAIN "SAMPLES",1000 ELSE  END
```
{% endraw %}

## XWING.BAS

{% raw %}
```bas
10 KEY OFF:CLS
20 SCREEN 0
30 WIDTH 40
40 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
50 PRINT"░┌───────────────────────────────────┐░"
60 PRINT"░│                                   │░"
70 PRINT"░│            2060-A.BAS             │░"
80 PRINT"░│              XWING                │░"
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
1000  REM * STAR PILOT GAME *
1010  REM * WRITTEN BY GEORGE BLANK, LEECHBURG, PA. *
1020  REM * FOR  PUBLIC DOMAIN UNLESS MOVIEMAKERS OBJECT *
1030  REM * VERSION 4.0    SEPTEMBER 25,1978 *
1040  REM * MODIFIED TO RUN ON THE IBM PC BY ERNEST *
1050  REM * SMITH AND RAYMOND ROGERS, HOUSTON, TEXAS *
1060  REM * DECEMBER 82 *
1070  KEY OFF:CLS:WIDTH 80:DEF SEG=0:A=PEEK(&H410):POKE &H410,(A AND &HCF) OR &H20
1080  WIDTH 40:SCREEN 1:SCREEN 0:WIDTH 80:WIDTH 40:SCREEN 1:COLOR 0,1
1090  GOTO 1200
1100  V=V-1:IF V<-3 THEN V=-3
1110  RETURN
1120  W=W-1:IF W<-5 THEN W=-5
1130  RETURN
1140  W=W+1:IF W>5 THEN W=5
1150  RETURN
1160  V=V+1:IF V>3 THEN V=3
1170  RETURN
1180  KEY(1) ON:KEY(2) ON:KEY(11) ON:KEY(12) ON:KEY(13) ON:KEY(14) ON:RETURN
1190  KEY(1) STOP:KEY(2) STOP:KEY(11) STOP:KEY(12) STOP:KEY(13) STOP:KEY(14) STOP:RETURN
1200    LOCATE 8,1:PRINT"***************************************";
1210    PRINT"*                                     *";
1220    PRINT"*      X W I N G   F I G H T E R      *";
1230    PRINT"*                                     *";
1240    PRINT"***************************************";
1250  SOUND 525.25,18.2:SOUND 783.99,18.2/2:SOUND 698.46,18.2/6:SOUND 659.26,18.2/6:SOUND 587.33,18.2/6:SOUND 1046.6,18.2:SOUND 783.99,18.2/2:SOUND 698.46,18.2/6:SOUND 659.26,18.2/6:SOUND 587.33,18.2/6
1260  SOUND 1046.5,18.2:SOUND 783.99,18.2/2:SOUND 698.46,18.2/6:SOUND 659.26,18.2/6:SOUND 698.46,18.2/6:SOUND 587.33,18.2
1270 LOCATE 16,1:PRINT"DO YOU WANT INSTRUCTIONS (Y OR N)?";
1280  K$=INKEY$:IF K$="Y" OR K$="y" GOTO 6930
1290  IF K$<>"N" AND K$<>"n" GOTO 1270
1300 CLS:CLEAR:DEFINT A-Z:DEFSNG O,G,J,S
1310 RANDOMIZE(VAL(RIGHT$(TIME$,2)))
1320  ON KEY(1) GOSUB 5350:ON KEY(2) GOSUB 5750:ON KEY(11) GOSUB 1100:ON KEY(12) GOSUB 1120:ON KEY(13) GOSUB 1140:ON KEY(14) GOSUB 1160
1330  LOCATE 8,1:PRINT "IMPERIAL FIGHTER:  ":DRAW "C2;BM145,59;M+0,0;BM+10,1;M+0,-2;M+2,2;M+0,-2;BM+10,-1;M+0,4;BM+6,-4;M+0,4;M+0,-2;M-6,0"
1340  DIM IM(6):DIM IM1(6):DIM IM2(6):DIM IM3(6):GET (145,59)-(145,59),IM:GET (145,59)-(145,59),IM1:GET (155,58)-(157,60),IM2:GET (167,57)-(173,61),IM3
1350  DIM IM4(13):IM4(0)=22:IM4(1)=7:IM4(2)=128:IM4(3)=-32760:IM4(4)=2048:IM4(5)=128:IM4(6)=-22008:IM4(7)=-22358:IM4(8)=128:IM4(9)=-32760:IM4(10)=2048:IM4(11)=128:IM4(12)=8
1360  DIM IM5(20):IM5(0)=26:IM5(1)=9:IM5(2)=128:IM5(3)=-32768!:IM5(4)=128:IM5(5)=-32768!:IM5(6)=128:IM5(7)=-32768!:IM5(8)=128:IM5(9)=-32768!:IM5(10)=-21846:IM5(11)=-32598:IM5(12)=128
1370  IM5(13)=-32768!:IM5(14)=128:IM5(15)=-32768!:IM5(16)=128:IM5(17)=-32768!:IM5(18)=128:IM5(19)=-32768!
1380  DIM IM6(44):IM6(0)=34:IM6(1)=17:IM6(2)=2048:IM6(5)=32:IM6(7)=-32768!:IM6(9)=512:IM6(12)=-32760:IM6(14)=8192:IM6(15)=32:IM6(17)=2176:IM6(20)=2:IM6(23)=128:IM6(25)=8192:IM6(28)=8
1390  IM6(29)=128:IM6(30)=512:IM6(31)=2:IM6(33)=-30720:IM6(36)=32:IM6(38)=-32768!:IM6(40)=512:IM6(43)=8
1400  DIM IM7(44)
1410  IM7(0)=30:IM7(1)=21:IM7(2)=-22006:IM7(3)=-22358:IM7(4)=32:IM7(5)=8192:IM7(6)=-21846:IM7(7)=-32598:IM7(8)=2048:IM7(9)=128
1420  IM7(10)=2048:IM7(11)=128:IM7(12)=2048:IM7(13)=128:IM7(14)=2048:IM7(15)=128:IM7(16)=2048:IM7(17)=128:IM7(18)=2048:IM7(19)=128
1430  IM7(20)=2560:IM7(21)=32:IM7(22)=2048:IM7(23)=128:IM7(24)=8704:IM7(25)=128:IM7(26)=2048:IM7(27)=128:IM7(28)=2048:IM7(29)=128
1440  IM7(30)=2048:IM7(31)=128:IM7(32)=2048:IM7(33)=128:IM7(34)=2048:IM7(35)=128:IM7(36)=2048:IM7(37)=128:IM7(38)=-22518:IM7(39)=-22358
1450  IM7(40)=2592:IM7(41)=8192:IM7(42)=-21846:IM7(43)=-32598
1460  DIM IM8(102)
1470  IM8(0)=50:IM8(1)=29:IM8(3)=2048:IM8(7)=10:IM8(10)=2048:IM8(11)=128:IM8(14)=8200:IM8(17)=2048:IM8(18)=8:IM8(21)=514
1480  IM8(25)=-32640:IM8(28)=8192:IM8(29)=32:IM8(32)=2184:IM8(35)=514:IM8(36)=2:IM8(38)=2048:IM8(39)=-32760:IM8(40)=128:IM8(42)=8352
1490  IM8(43)=-32736:IM8(45)=8194:IM8(46)=2176:IM8(47)=128:IM8(48)=512:IM8(49)=34:IM8(50)=-32766:IM8(51)=128:IM8(52)=10250:IM8(54)=-24448
1500  IM8(55)=8704:IM8(56)=32:IM8(58)=136:IM8(59)=-24446:IM8(61)=-32256:IM8(62)=514:IM8(63)=128:IM8(65)=-30592:IM8(66)=8:IM8(68)=8192
1510  IM8(69)=8224:IM8(72)=8200:IM8(73)=128:IM8(75)=512:IM8(76)=34:IM8(79)=-22528:IM8(80)=128:IM8(83)=8224:IM8(86)=2048:IM8(87)=8
1520  IM8(90)=2050:IM8(94)=136:IM8(97)=10240:IM8(101)=8
1530  LOCATE 10,1:PRINT "DARTH VADER     :  ":DRAW "C2;BM145,75;M+0,0;BM+10,1;M+0,-2;M+2,2;M+0,-2;BM+11,-1;M-1,1;M+0,2;M+1,1;BM+4,-4;M+1,1;M+0,2;M-1,1;BM+1,-2;M-6,0"
1540  DIM DV(6):DIM DV1(6):DIM DV2(6):DIM DV3(6):GET (145,75)-(145,75),DV:GET (145,75)-(145,75),DV1:GET (155,74)-(157,76),DV2:GET (167,73)-(173,77),DV3
1550  DIM DV4(13)
1560  DV4(0)=22:DV4(1)=7:DV4(2)=8:DV4(3)=8320:DV4(4)=8192:DV4(5)=128:DV4(6)=-22008:DV4(7)=-22358:DV4(8)=128:DV4(9)=8200
1570  DV4(10)=8192:DV4(11)=8:DV4(12)=128
1580  DIM DV5(20)
1590  DV5(0)=26:DV5(1)=9:DV5(2)=8:DV5(3)=8:DV5(4)=32:DV5(5)=2:DV5(6)=128:DV5(7)=-32768!:DV5(8)=128:DV5(9)=-32768!
1600  DV5(10)=-21846:DV5(11)=-32598:DV5(12)=128:DV5(13)=-32768!:DV5(14)=128:DV5(15)=-32768!:DV5(16)=32:DV5(17)=2:DV5(18)=8:DV5(19)=8
1610  DIM DV6(32)
1620  DV6(0)=30:DV6(1)=15:DV6(2)=-22528:DV6(4)=2:DV6(6)=8:DV6(8)=34:DV6(10)=-32640:DV6(12)=8320:DV6(14)=2176:DV6(16)=512
1630  DV6(19)=2176:DV6(21)=2080:DV6(23)=2056:DV6(25)=8194:DV6(27)=-32768!:DV6(29)=2:DV6(31)=168
1640  DIM DV7(44)
1650  DV7(0)=32:DV7(1)=21:DV7(2)=10752:DV7(3)=-24406:DV7(4)=-32768!:DV7(5)=-30720:DV7(6)=-22014:DV7(7)=682:DV7(8)=520:DV7(9)=-30688
1660  DV7(10)=544:DV7(11)=8224:DV7(12)=512:DV7(13)=32:DV7(14)=512:DV7(15)=32:DV7(16)=512:DV7(17)=32:DV7(18)=512:DV7(19)=32
1670  DV7(20)=512:DV7(21)=136:DV7(22)=512:DV7(23)=32:DV7(24)=2048:DV7(25)=160:DV7(26)=512:DV7(27)=32:DV7(28)=512:DV7(29)=32
1680  DV7(30)=512:DV7(31)=32:DV7(32)=512:DV7(33)=32:DV7(34)=520:DV7(35)=544:DV7(36)=546:DV7(37)=2080:DV7(38)=-21888:DV7(39)=-24534
1690  DV7(40)=546:DV7(41)=-32640:DV7(42)=-22006:DV7(43)=170
1700  DIM DV8(76)
1710  DV8(0)=46:DV8(1)=25:DV8(3)=10752:DV8(4)=128:DV8(6)=-32768!:DV8(7)=32:DV8(9)=-22526:DV8(10)=8:DV8(12)=512:DV8(13)=2
1720  DV8(16)=-32640:DV8(18)=512:DV8(19)=8224:DV8(21)=2048:DV8(22)=2056:DV8(24)=8192:DV8(25)=2082:DV8(27)=-32766:DV8(28)=-30592:DV8(30)=-32248
1730  DV8(31)=10240:DV8(32)=128:DV8(33)=-30712:DV8(34)=2048:DV8(35)=128:DV8(36)=-24536:DV8(37)=2048:DV8(38)=128:DV8(39)=-32630:DV8(40)=2048
1740  DV8(41)=672:DV8(42)=-32760:DV8(44)=2184:DV8(45)=10:DV8(47)=8322:DV8(48)=32:DV8(50)=-32640:DV8(51)=128:DV8(53)=-32224:DV8(56)=-30712
1750  DV8(59)=-24062:DV8(62)=-32768!:DV8(63)=168:DV8(65)=8192:DV8(66)=136:DV8(68)=2048:DV8(69)=136:DV8(71)=512:DV8(72)=136:DV8(75)=168
1760  LOCATE 12,1:PRINT "DEATH STAR      :  ":DRAW "C3;BM145,91;M+0,0;BM+11,-1;M-1,1;M+2,0;M-1,1;BM+12,-3;M+1,0;M+1,1;M-3,0;M+0,1;M+3,0;M-1,1;M-1,0"
1770  DRAW "C3;BM+12,-5;M+2,0;M+1,1;M-4,0;M-1,1;M+6,0;M+0,1;M-6,0;M+0,1;M+6,0;M-1,1;M-4,0;M+1,1;M+2,0"
1780  DIM DS(8):DIM DS1(8):DIM DS2(8):DIM DS3(8):DIM DS4(8):GET (145,91)-(145,91),DS:GET (145,91)-(145,91),DS1:GET (155,90)-(157,92),DS2:GET (167,89)-(170,92),DS3:GET (178,87)-(184,93),DS4
1790  DIM EXPL3(18):DIM EXPL4(18):DIM EXPL5(18):DIM EXPL6(18):DIM EXPL7(18):DIM EXPL8(18)
1800  DATA 22,11,0,0,0,8194,0,-32608,-22006,2560,-32598,-22006,128,168,8706,0,0,0,0
1810  FOR I=0 TO 18:READ EXPL3(I):NEXT I
1820  DATA 22,11,-30720,2048,136,-30718,-24544,-32608,-22006,-21848,-22358,-22006,-23936,10274,-30206,2048,-32632,-30720,0
1830  FOR I=0 TO 18:READ EXPL4(I):NEXT I
1840  DATA 22,11,-30712,512,136,8194,-32760,-24416,-21974,-21976,-22358,-21974,-32608,2216,-30206,512,138,-30712,128
1850  FOR I=0 TO 18:READ EXPL5(I):NEXT I
1860  DATA 22,11,-30712,2048,136,8194,-24536,-32608,-22006,-21976,-22358,-22006,-24448,10408,8706,2048,-32632,-30712,128
1870  FOR I=0 TO 18:READ EXPL6(I):NEXT I
1880 DATA  22,11,-30688,2048,2080,8194,-32736,-32608,-21974,-22008,-22358,-22006,-24448,10408,8706,2048,-32632,-30688,32
1890  FOR I=0 TO 18:READ EXPL7(I):NEXT I
1900  DATA 22,11,-30688,2048,2184,-30718,-24544,-32608,-22006,-21848,-22358,-22006,-23936,10274,-30206,2048,-32632,-30688,32
1910  FOR I=0 TO 18:READ EXPL8(I):NEXT I
1920  LOCATE 17,1:PRINT "SELECT SKILL LEVEL FROM 0 TO 3"
1930  S$=INKEY$:IF S$<>"0" AND S$<>"1" AND S$<>"2" AND S$<>"3" GOTO 1920
1940  SKILL=VAL(S$):CLS
1950  DIM LASAR(381)
1960  LASAR(0)=148:LASAR(1)=40:LASAR(2)=64:LASAR(11)=5136:LASAR(20)=16385:LASAR(21)=16385:LASAR(29)=5120:LASAR(31)=20:LASAR(38)=256:LASAR(39)=64:LASAR(40)=256:LASAR(41)=64:LASAR(48)=20
1970  LASAR(50)=5120:LASAR(57)=16385:LASAR(60)=16385:LASAR(66)=5120:LASAR(70)=20:LASAR(75)=256:LASAR(76)=64:LASAR(79)=256:LASAR(85)=4:LASAR(89)=20480:LASAR(94)=20480:LASAR(99)=5
1980  LASAR(103)=1280:LASAR(109)=80:LASAR(113)=80:LASAR(118)=1280:LASAR(122)=5:LASAR(128)=20480:LASAR(131)=20480:LASAR(138)=5:LASAR(140)=1280:LASAR(148)=80:LASAR(150)=80
1990  LASAR(157)=1024:LASAR(159)=1:LASAR(167)=16385:LASAR(168)=5120:LASAR(177)=276:LASAR(178)=64:LASAR(186)=256:LASAR(187)=84:LASAR(196)=21505:LASAR(205)=5120:LASAR(206)=16385
2000  LASAR(214)=256:LASAR(215)=64:LASAR(216)=20:LASAR(224)=4:LASAR(225)=256:LASAR(233)=20480:LASAR(235)=20480:LASAR(242)=1280:LASAR(245)=5:LASAR(252)=80:LASAR(255)=80
2010  LASAR(261)=5:LASAR(264)=1280:LASAR(270)=20480:LASAR(274)=20480:LASAR(279)=1280:LASAR(284)=5:LASAR(289)=80:LASAR(294)=80:LASAR(298)=1:LASAR(303)=1024:LASAR(307)=5120
2020  LASAR(313)=16385:LASAR(316)=256:LASAR(317)=64:LASAR(323)=20:LASAR(326)=20:LASAR(332)=256:LASAR(333)=64:LASAR(335)=16385:LASAR(342)=5120:LASAR(344)=5120:LASAR(352)=16385
2030  LASAR(353)=256:LASAR(354)=64:LASAR(362)=20:LASAR(363)=20:LASAR(371)=256:LASAR(372)=16448:LASAR(381)=4096
2040  REM * INITIALIZE VARIABLES *
2050  M=INT(RND*61)+10:N=INT(RND*21)+10:O=INT(RND*32001)+70000!
2060  E=INT(RND*61)+10:F=INT(RND*21)+10:G=25000
2070  H=INT(RND*61)+10:I=INT(RND*21)+10:J=INT(RND*32001)+40000!
2080  Q=5:Z=3
2090  IMX=38:IMY=21:IMR1=1:IMR2=1
2100  DVX=38:DVY=21:DVR1=1:DVR2=1
2110  IF SKILL=0 THEN A1=5:A2=0:BYPASS=3
2120  IF SKILL=1 THEN A1=3:A2=0:BYPASS=2
2130  IF SKILL=2 THEN A1=2:A2=45:BYPASS=1
2140  IF SKILL=3 THEN A1=2:A2=30
2150 K$="5"
2160   LINE (1,1)-(76,42),3,B
2170  DRAW "C3;BM2,21;M+0,0;BM+6,0;M+0,0;BM+6,0;M+0,0;BM+6,0;M+0,0;BM+6,0;M+0,0;BM+6,0;M+0,0;BM+12,0;M+0,0;BM+6,0;M+0,0;BM+6,0;M+0,0;BM+6,0;M+0,0;BM+6,0;M+0,0;BM+6,0;M+0,0"
2180  DRAW "C3;BM38,3;M+0,0;BM+0,3;M+0,0;BM+0,3;M+0,0;BM+0,3;M+0,0;BM+0,3;M+0,0;BM+0,3;M+0,0;BM+0,6;M+0,0;BM+0,3;M+0,0;BM+0,3;M+0,0;BM+0,3;M+0,0;BM+0,3;M+0,0;BM+0,3;M+0,0"
2190  LOCATE 8,1:PRINT "REPUBLIC      X-WING     STAR FIGHTER"
2200  LOCATE 10,5:PRINT "TORPEDOES"
2210 LOCATE 12,1:PRINT "HOR.   VERT. DIRECTION"
2220  LOCATE 15,1:PRINT  "SPEED MACH"
2230  LOCATE 17,1:PRINT "RADAR TARGETS"
2240  LOCATE 18,8:PRINT "KM TO IMPERIAL FIGHTER"
2250  LOCATE 19,8:PRINT "KM TO DARTH VADER"
2260  LOCATE 20,8:PRINT "KM TO DEATH STAR"
2270  LOCATE 22,1:PRINT "TIME REMAINING"
2280  PLAY"T250"
2290   SEC1=VAL(RIGHT$(TIME$,2))
2300  GOSUB 1180
2310  REM * MASTER CONTROL ROUTINE *
2320  GOSUB 1190
2330  PUT (38,21),DS1
2340  LOCATE 10,1:PRINT Z
2350 LOCATE 13,1:PRINT W;"     ";-V
2360  LOCATE 15,12:PRINT Q*10
2370  GS=G-S:IF GS<0 THEN GS=0
2380  LOCATE 18,1:PRINT GS
2390  JS=J-S:IF JS<0 THEN JS=0
2400  LOCATE 19,1:PRINT JS
2410  OS=O-S:IF OS<0 THEN OS=0
2420  LOCATE 20,1:PRINT OS
2430  LOCATE 22,16:PRINT A1;":";A2NEW
2440  SOUND 37*Q,1
2450  PUT (38,21),DS1
2460  GOSUB 1180
2470  REM * DISPLAY DEATH STAR *
2480  IF O-S=30000 OR O-S>30000 GOTO 2840
2490  IF O-S<20000 AND DSTAR2=0 THEN DSTAR2=1:DSFLAG=1:DS(0)=DS2(0):DS(1)=DS2(1):DS(2)=DS2(2):DS(3)=DS2(3)
2500  IF O-S<10000 AND DSTAR3=0 THEN DSTAR3=1:DSFLAG=2:DS(0)=DS3(0):DS(1)=DS3(1):DS(2)=DS3(2):DS(3)=DS3(3)
2510  IF O-S<5000 AND DSTAR4=0 THEN DSTAR4=1:DSFLAG=3:DS(0)=DS4(0):DS(1)=DS4(1):DS(2)=DS4(2):DS(3)=DS4(3):DS(4)=DS4(4):DS(5)=DS4(5):DS(6)=DS4(6):DS(7)=DS4(7):DS(8)=DS4(8)
2520  IF FLAG1<>BYPASS THEN FLAG1=FLAG1+1:GOTO 2550
2530  FLAG1=0
2540  M=M+INT(RND*5)-2:N=N+INT(RND*5)-2
2550  M=M-W:N=N-V
2560  IF M<2  THEN  M=2+INT(RND*3)
2570  IF M>69 THEN  M=69-INT(RND*3)
2580  IF N<2  THEN  N=2+INT(RND*3)
2590  IF N>35 THEN  N=35-INT(RND*3)
2600  GOSUB 1190
2610  PUT (M,N),DS
2620  IF DSNEW=0 THEN DSNEW=1:GOTO 2680
2630  IF DSFLAG=0 GOTO 2670
2640  IF DSFLAG=1 THEN DSFLAG=0:PUT (MP,NP),DS1:GOTO 2680
2650  IF DSFLAG=2 THEN DSFLAG=0:PUT (MP,NP),DS2:GOTO 2680
2660  IF DSFLAG=3 THEN DSFLAG=0:PUT (MP,NP),DS3:GOTO 2680
2670  PUT(MP,NP),DS
2680  GOSUB 1180
2690  MP=M:NP=N
2700  IF O-S>10000 OR FLAG=1 GOTO 2840
2710  GOSUB 1190
2720  FOR K=1 TO 2
2730   LOCATE 24,1:PRINT "*** DEATH STAR WITHIN TORPEDO RANGE ***";
2740  PLAY "L2 N0"
2750   LOCATE 24,1:PRINT "                                       ";
2760  PLAY "L16 N0"
2770  NEXT K
2780   LOCATE 24,1:PRINT "*** DEATH STAR WITHIN TORPEDO RANGE ***";
2790   PLAY "L1 N0":PLAY "L1 N0"
2800   LOCATE 24,1:PRINT "                                       ";
2810  GOSUB 1180
2820  FLAG=1
2830  REM * DISPLAY IMPERIAL FIGHTER *
2840  GOSUB 1190
2850  IF G-S>26000 THEN GOSUB 1180:GOTO 3910
2860  IF G-S<20000 AND IMPFIGH2=0 THEN IMPFIGH2=1:IMFLAG=1:IM(0)=IM2(0):IM(1)=IM2(1):IM(2)=IM2(2):IM(3)=IM2(3):IMX=37:IMY=20:IMR1=2:IMR2=2
2870  IF G-S<10000 AND IMPFIGH3=0 THEN IMPFIGH3=1:IMFLAG=2:IM(0)=IM3(0):IM(1)=IM3(1):IM(2)=IM3(2):IM(3)=IM3(3):IM(4)=IM3(4):IM(5)=IM3(5):IM(6)=IM3(6):IMX=35:IMY=19:IMR1=4:IMR2=3
2880  IF FLAG2<>BYPASS THEN FLAG2=FLAG2+1:GOTO 2910
2890  FLAG2=0
2900 E=E+INT(RND*5)-2:F=F+INT(RND*5)-2
2910 E=E-W:F=F-V
2920 IF E<2  THEN  E=2+INT(RND*3)
2930 IF E>69 THEN  E=69-INT(RND*3)
2940 IF F<2  THEN  F=2+INT(RND*3)
2950 IF F>37 THEN  F=37-INT(RND*3)
2960  PUT (E,F),IM
2970  IF IMNEW=0 THEN IMNEW=1:GOTO 3020
2980  IF IMFLAG=0 GOTO 3010
2990  IF IMFLAG=1 THEN IMFLAG=0:PUT (EP,FP),IM1:GOTO 3020
3000  IF IMFLAG=2 THEN IMFLAG=0:PUT (EP,FP),IM2:GOTO 3020
3010  PUT (EP,FP),IM
3020  GOSUB 1180
3030  EP=E:FP=F
3040  IF G-S>5000 OR FLAG3=1 GOTO 3170
3050  GOSUB 1190
3060  FOR K=1 TO 2
3070  LOCATE 24,1:PRINT "**** IMPERIAL FIGHTER ATTACKS ****";
3080  PLAY "L2 N0"
3090  LOCATE 24,1:PRINT "                                  ";
3100  PLAY "L16 N0"
3110  NEXT K
3120  LOCATE 24,1:PRINT "**** IMPERIAL FIGHTER ATTACKS ****";
3130  PLAY "L1 N0":PLAY "L1 N0"
3140  LOCATE 24,1:PRINT "                                  ";
3150  GOSUB 1180
3160  FLAG3=1
3170 IF G>S THEN GOTO 3910
3180  REM * IMPERIAL FIGHTER ATTACKS *
3190  FLAG3=0:IMNEW=0:IMNEW1=0:IMPFIGH2=0:IMPFIGH3=0:PUT (E,F),IM
3200  GOSUB 1190
3210  DELTAX=29-E:DELTAY=19-F
3220  IF DELTAX>0 THEN E=E+1
3230  IF DELTAX<0 THEN E=E-1
3240  IF DELTAY>0 THEN F=F+1
3250  IF DELTAY<0 THEN F=F-1
3260  IF DELTAX=0 AND DELTAY=0 GOTO 3320
3270  PUT (E,F),IM:IF IMNEW1=0 THEN IMNEW1=1:GOTO 3290
3280  PUT (EP,FP),IM
3290  EP=E:FP=F
3300  PLAY "P32"
3310  GOTO 3210
3320  PUT (EP-4,FP-1),IM4
3330  PUT (EP,FP),IM
3340  PLAY "P4"
3350  PUT (EP-9,FP-2),IM5
3360  PUT (EP-4,FP-1),IM4
3370  PLAY "P4"
3380  PUT (EP-12,FP-6),IM6
3390  PUT (EP-9,FP-2),IM5
3400  PLAY "P4"
3410  PUT (EP-9,FP-7),IM7
3420  PUT (EP-12,FP-6),IM6
3430  PLAY "P4"
3440  PUT (EP-20,FP-14),IM8
3450  PUT (EP-9,FP-7),IM7
3460  PLAY "P4"
3470  PUT (EP-20,FP-14),IM8
3480  FOR J2=10000 TO 100 STEP -500
3490  SOUND J2,.001*18.2
3500  NEXT J2
3510  FOR A=1 TO 50:NEXT A
3520  FOR J2=10000 TO 100 STEP -500
3530  SOUND J2,.001*18.2
3540  NEXT J2
3550  G=G+25000
3560  E=INT(RND*61)+10:F=INT(RND*21)+10
3570  K=INT(RND*10)
3580  IF K>SKILL  THEN 3790
3590  KEY(1) OFF:KEY(2) OFF:KEY(11) OFF:KEY(12) OFF:KEY(13) OFF:KEY(14) OFF
3600  CLS
3610  PRINT  "BLAM!"
3620  FOR J2=1000 TO 37 STEP -10
3630  SOUND J2,.01*18.2
3640  NEXT J2
3650  PRINT
3660  PLAY "L1 N0":PLAY "L1 N0":PLAY "L1 N0"
3670  PRINT"YOU HAVE JUST BEEN SHOT DOWN BY AN";
3680  PRINT"IMPERIAL SKY FIGHTER!"
3690  PRINT
3700  PLAY "L1 N0":PLAY "L1 N0":PLAY "L1 N0"
3710  PRINT"YOU ARE A HERO!"
3720  PRINT
3730  PRINT"UNFORTUNATELY, YOU ARE A DEAD HERO AND";
3740  PRINT"DEAD HEROES DON'T WIN WARS. DARTH VADER";
3750  PRINT"WINS!"
3760  PRINT
3770  PRINT"*********   YOU   LOSE!!   *********"
3780   GOTO  5310
3790  FOR K=1 TO 2
3800  LOCATE 24,1:PRINT "**** IMPERIAL FIGHTER MISSED ****";
3810  PLAY "L2 N0"
3820  LOCATE 24,1:PRINT "                                 ";
3830  PLAY "L16 N0"
3840  NEXT K
3850  LOCATE 24,1:PRINT "**** IMPERIAL FIGHTER MISSED ****";
3860  PLAY "L1 N0":PLAY "L1 N0"
3870  LOCATE 24,1:PRINT "                                 ";
3880  IM(0)=IM1(0):IM(1)=IM1(1):IM(2)=IM1(2):IM(3)=IM1(3):IM(4)=IM1(4):IM(5)=IM1(5):IM(6)=IM1(6)
3890  GOSUB 1180
3900  REM * DISPLAY DARTH VADER *
3910  GOSUB 1190
3920  IF J-S>26000 THEN GOSUB 1180:GOTO 5140
3930  IF J-S<20000 AND DVADER2=0 THEN DVADER2=1:DVFLAG=1:DV(0)=DV2(0):DV(1)=DV2(1):DV(2)=DV2(2):DV(3)=DV2(3):DVX=37:DVY=20:DVR1=2:DVR2=2
3940  IF J-S<10000 AND DVADER3=0 THEN DVADER3=1:DVFLAG=2:DV(0)=DV3(0):DV(1)=DV3(1):DV(2)=DV3(2):DV(3)=DV3(3):DV(4)=DV3(4):DV(5)=DV3(5):DV(6)=DV3(6):DVX=35:DVY=19:DVR1=4:DVR2=3
3950  IF FLAG2<>BYPASS THEN FLAG2=FLAG2+1:GOTO 3980
3960  FLAG2=0
3970 H=H+INT(RND*5)-2:I=I+INT(RND*5)-2
3980 H=H-W:I=I-V
3990 IF H<2  THEN  H=2+INT(RND*3)
4000 IF H>69 THEN  H=69-INT(RND*3)
4010 IF I<2  THEN  I=2+INT(RND*3)
4020 IF I>37 THEN  I=37-INT(RND*3)
4030  PUT (H,I),DV
4040  IF DVNEW=0 THEN DVNEW=1:GOTO 4090
4050  IF DVFLAG=0 GOTO 4080
4060  IF DVFLAG=1 THEN DVFLAG=0:PUT (HP,IP),DV1:GOTO 4090
4070  IF DVFLAG=2 THEN DVFLAG=0:PUT (HP,IP),DV2:GOTO 4090
4080  PUT (HP,IP),DV
4090  GOSUB 1180
4100  HP=H:IP=I
4110  IF J-S>5000 OR FLAG4=1 GOTO 4350
4120  GOSUB 1190
4130  IF DVGONE=0 GOTO 4240
4140  FOR K=1 TO 2
4150  LOCATE 24,1:PRINT "**** IMPERIAL FIGHTER ATTACKS ****";
4160  PLAY "L2 N0"
4170  LOCATE 24,1:PRINT "                                  ";
4180  PLAY "L16 N0"
4190  NEXT K
4200  LOCATE 24,1:PRINT "**** IMPERIAL FIGHTER ATTACKS ****";
4210  PLAY "L1 N0":PLAY "L1 N0"
4220  LOCATE 24,1:PRINT "                                  ";
4230  GOTO 4330
4240  FOR K=1 TO 2
4250  LOCATE 24,1:PRINT "**** DARTH VADER ATTACKS ****";
4260  PLAY "L2 N0"
4270  LOCATE 24,1:PRINT "                             ";
4280  PLAY "L16 N0"
4290  NEXT K
4300  LOCATE 24,1:PRINT "**** DARTH VADER ATTACKS ****";
4310  PLAY "L1 N0":PLAY "L1 N0"
4320  LOCATE 24,1:PRINT "                             ";
4330  FLAG4=1
4340  GOSUB 1180
4350  IF J>S THEN GOTO 5140
4360  REM * DARTH VADER ATTACKS *
4370  FLAG4=0:DVNEW=0:DVNEW1=0:DVADER2=0:DVADER3=0:PUT (H,I),DV
4380  GOSUB 1190
4390  DELTAX=41-H:DELTAY=19-I
4400  IF DELTAX>0 THEN H=H+1
4410  IF DELTAX<0 THEN H=H-1
4420  IF DELTAY>0 THEN I=I+1
4430  IF DELTAY<0 THEN I=I-1
4440  IF DELTAX=0 AND DELTAY=0 GOTO 4500
4450  PUT (H,I),DV:IF DVNEW1=0 THEN DVNEW1=1:GOTO 4470
4460  PUT (HP,IP),DV
4470  HP=H:IP=I
4480  PLAY "P32"
4490  GOTO 4390
4500  IF DVGONE=0 THEN PUT(HP,IP-1),DV4 ELSE PUT(HP,IP-1),IM4
4510  PUT (HP,IP),DV
4520  PLAY "P4"
4530  IF DVGONE=0 THEN PUT(HP+3,IP-2),DV5 ELSE PUT(HP+3,IP-2),IM5
4540  IF DVGONE=0 THEN PUT(HP,IP-1),DV4 ELSE PUT(HP,IP-1),IM4
4550  PLAY "P4"
4560  IF DVGONE=0 THEN PUT(HP+2,IP-6),DV6 ELSE PUT(HP+2,IP-6),IM6
4570  IF DVGONE=0 THEN PUT(HP+3,IP-2),DV5 ELSE PUT(HP+3,IP-2),IM5
4580  PLAY "P4"
4590  IF DVGONE=0 THEN PUT(HP+1,IP-6),DV7 ELSE PUT(HP+1,IP-6),IM7
4600  IF DVGONE=0 THEN PUT(HP+2,IP-6),DV6 ELSE PUT(HP+2,IP-6),IM6
4610  PLAY "P4"
4620  IF DVGONE=0 THEN PUT(HP+2,IP-6),DV8 ELSE PUT(HP+2,IP-6),IM8
4630  IF DVGONE=0 THEN PUT(HP+1,IP-6),DV7 ELSE PUT(HP+1,IP-6),IM7
4640  PLAY "P4"
4650  IF DVGONE=0 THEN PUT(HP+2,IP-6),DV8 ELSE PUT(HP+2,IP-6),IM8
4660  FOR J2=10000 TO 100 STEP -500
4670  SOUND J2,.001*18.2
4680  NEXT J2
4690  FOR A=1 TO 50:NEXT A
4700  FOR J2=10000 TO 100 STEP -500
4710  SOUND J2,.001*18.2
4720  NEXT J2
4730  J=J+25000
4740 H=INT(RND*61)+10:I=INT(RND*21)+10
4750  K=INT(RND*10)
4760  IF K>SKILL+1  THEN 4910
4770  KEY(1) OFF:KEY(2) OFF:KEY(11) OFF:KEY(12) OFF:KEY(13) OFF:KEY(14) OFF
4780  CLS:PRINT "****  B O O M !  ****"
4790  FOR J2=1000 TO 37 STEP -10
4800  SOUND J2,.01*18.2
4810  NEXT J2
4820  PRINT
4830  PLAY "L1 N0":PLAY "L1 N0":PLAY "L1 N0"
4840  IF DVGONE=1 THEN PRINT"TOO BAD.  YOU HAVE BEEN SHOT DOWN.":GOTO 4880
4850  PRINT"YOU HAVE JUST BEEN PERSONALLY SHOT DOWN";
4860  PRINT"BY DARTH VADER.  THE FORCE WAS NOT WITH";
4870  PRINT"YOU."
4880  PRINT
4890  PRINT"*********   YOU   LOSE!!   *********"
4900   GOTO  5310
4910  IF DVGONE=0 GOTO 5030
4920  FOR K=1 TO 2
4930  LOCATE 24,1:PRINT "**** IMPERIAL FIGHTER MISSED ****";
4940  PLAY "L2 N0"
4950  LOCATE 24,1:PRINT "                                 ";
4960  PLAY "L16 N0"
4970  NEXT K
4980  LOCATE 24,1:PRINT "**** IMPERIAL FIGHTER MISSED ****";
4990  PLAY "L1 N0":PLAY "L1 N0"
5000  LOCATE 24,1:PRINT "                                 ";
5010  DV(0)=DV1(0):DV(1)=DV1(1):DV(2)=DV1(2):DV(3)=DV1(3)
5020  GOTO 5140
5030  FOR K=1 TO 2
5040  LOCATE 24,1:PRINT "**** DARTH VADER MISSED ****";
5050  PLAY "L2 N0"
5060  LOCATE 24,1:PRINT "                            ";
5070  PLAY "L16 N0"
5080  NEXT K
5090  LOCATE 24,1:PRINT "**** DARTH VADER MISSED ****";
5100  PLAY "L1 N0":PLAY "L1 N0"
5110  LOCATE 24,1:PRINT "                            ";
5120  DV(0)=DV1(0):DV(1)=DV1(1):DV(2)=DV1(2):DV(3)=DV1(3):DV(4)=DV1(4):DV(5)=DV1(5):DV(6)=DV1(6)
5130  REM * X - WING FIGHTER ROUTINE *
5140  GOSUB 1180
5150 Z$=INKEY$
5160 IF VAL(Z$)>0 AND VAL(Z$)<10   THEN  Q=VAL(Z$)
5170  S=S+Q*100
5180  IF S>O  GOTO 6410
5190  REM * TIME ROUTINE *
5200   SEC2=VAL(RIGHT$(TIME$,2))
5210   SECNEW=SEC2
5220   IF SECNEW=SECOLD GOTO 5280
5230   IF SECNEW<SECOLD THEN N8=N8+1
5240   SECOLD=SEC2
5250   A2NEW=A2-(SEC2+(60*N8)-SEC1)
5260   IF A2NEW<0 THEN A2NEW=A2NEW+60:A1=A1-1:A2=A2+60
5270   IF A1<0 GOTO 6760
5280   GOTO   2320
5290  REM * DISPLAY SKY FIGHTER *
5300  IF J-S<10000 THEN A=3
5310  REM * NEW GAME *
5320   PRINT
5330 PRINT "HIT ENTER TO PLAY AGAIN, ESC TO GIVE UP"
5340 B$=INKEY$:IF B$=CHR$(13) THEN GOTO 1300 ELSE IF B$=CHR$(27) THEN CLS:WIDTH 80:SCREEN 0:KEY ON:END ELSE GOTO 5340
5350  REM * FIRE CANNON *
5360  KEY(2) STOP:KEY(11) STOP:KEY(12) STOP:KEY(13) STOP:KEY(14) STOP
5370  PUT (2,2),LASAR
5380  FOR J2=5000 TO 100 STEP -250
5390    SOUND J2,.01*18.2
5400  NEXT J2
5410  PUT (2,2),LASAR
5420  IF G-S<26000 AND ABS(IMX-E)<IMR1 AND ABS(IMY-F)<IMR2 GOTO 5450
5430  IF J-S<26000 AND ABS(DVX-H)<DVR1 AND ABS(DVY-I)<DVR2 GOTO 5580
5440  GOTO 5730
5450  FOR I9=1 TO 2:PUT (E-2,F-3),EXPL3:PLAY "P64":PUT (E-2,F-3),EXPL3:NEXT I9
5460  FOR I9=1 TO 2:PUT (E-2,F-3),EXPL4:PLAY "P64":PUT (E-2,F-3),EXPL4:NEXT I9
5470  PUT (E,F),IM
5480  IF IMR2=1 GOTO 5540
5490  FOR I9=1 TO 2:PUT (E-2,F-3),EXPL5:PLAY "P64":PUT (E-2,F-3),EXPL5:NEXT I9
5500  FOR I9=1 TO 2:PUT (E-2,F-3),EXPL6:PLAY "P64":PUT (E-2,F-3),EXPL6:NEXT I9
5510  IF IMR2=2 GOTO 5540
5520  FOR I9=1 TO 2:PUT (E-2,F-3),EXPL7:PLAY "P64":PUT (E-2,F-3),EXPL7:NEXT I9
5530  FOR I9=1 TO 2:PUT (E-2,F-3),EXPL8:PLAY "P64":PUT (E-2,F-3),EXPL8:NEXT I9
5540  G=G+25000:E=INT(RND*61)+10:F=INT(RND*21)+10:FLAG3=0:IMNEW=0:IMPFIGH2=0:IMPFIGH3=0
5550  IMX=38:IMY=21:IMR1=1:IMR2=1
5560  IM(0)=IM1(0):IM(1)=IM1(1):IM(2)=IM1(2):IM(3)=IM1(3):IM(4)=IM1(4):IM(5)=IM1(5):IM(6)=IM1(6)
5570  GOTO 5730
5580  FOR I9=1 TO 2:PUT (H-2,I-3),EXPL3:PLAY "P64":PUT (H-2,I-3),EXPL3:NEXT I9
5590  FOR I9=1 TO 2:PUT (H-2,I-3),EXPL4:PLAY "P64":PUT (H-2,I-3),EXPL4:NEXT I9
5600  PUT (H,I),DV
5610  IF DVR2=1 GOTO 5670
5620  FOR I9=1 TO 2:PUT (H-2,I-3),EXPL5:PLAY "P64":PUT (H-2,I-3),EXPL5:NEXT I9
5630  FOR I9=1 TO 2:PUT (H-2,I-3),EXPL6:PLAY "P64":PUT (H-2,I-3),EXPL6:NEXT I9
5640  IF DVR2=2 GOTO 5670
5650  FOR I9=1 TO 2:PUT (H-2,I-3),EXPL7:PLAY "P64":PUT (H-2,I-3),EXPL7:NEXT I9
5660  FOR I9=1 TO 2:PUT (H-2,I-3),EXPL8:PLAY "P64":PUT (H-2,I-3),EXPL8:NEXT I9
5670  J=J+25000:H=INT(RND*61)+10:I=INT(RND*21)+10:FLAG4=0:LOCATE 19,8:PRINT "KM TO IMPERIAL FIGHTER";
5680  DVNEW=0:DVADER2=0:DVADER3=0
5690  DVX=38:DVY=21:DVR1=1:DVR2=1
5700  IF DVGONE=0 THEN DV3(0)=IM3(0):DV3(1)=IM3(1):DV3(2)=IM3(2):DV3(3)=IM3(3):DV3(4)=IM3(4):DV3(5)=IM3(5):DV3(6)=IM3(6)
5710  DV(0)=DV1(0):DV(1)=DV1(1):DV(2)=DV1(2):DV(3)=DV1(3):DV(4)=DV1(4):DV(5)=DV1(5):DV(6)=DV1(6)
5720  DVGONE=1
5730  KEY(2) ON:KEY(11) ON:KEY(12) ON:KEY(13) ON:KEY(14) ON
5740  RETURN
5750  REM * FIRE  TORPEDO *
5760  KEY(1) STOP:KEY(11) STOP:KEY(12) STOP:KEY(13) STOP:KEY(14) STOP
5770  IF Z=0  THEN 3600
5780  FOR J2=1500 TO 100 STEP -20
5790    SOUND J2,.01*18.2
5800    SOUND 3600-J2,.01*18.2
5810  NEXT J2
5820  Z=Z-1
5830  IF O-S>10000  THEN 5990
5840  IF POINT(38,21)<>3 THEN 5880
5850  IF SKILL=0 GOTO 6100
5860  K=INT(RND*10)
5870  IF K>SKILL+1  THEN 6100
5880   FOR K=1 TO 2
5890  LOCATE 24,1:PRINT "**** TORPEDO  MISSED  ****";
5900  PLAY "L2 N0"
5910  LOCATE 24,1:PRINT "                          ";
5920  PLAY "L16 N0"
5930   NEXT K
5940  LOCATE 24,1:PRINT "**** TORPEDO  MISSED  ****";
5950  PLAY "L1 N0":PLAY "L1 N0"
5960  LOCATE 24,1:PRINT "                          ";
5970  IF Z<=0  THEN 4780
5980  GOTO 6080
5990 FOR K=1 TO 2
6000  LOCATE 24,1:PRINT "**** OUT  OF  RANGE  ****";
6010  PLAY "L2 N0"
6020  LOCATE 24,1:PRINT "                         ";
6030  PLAY "L16 N0"
6040 NEXT K
6050  LOCATE 24,1:PRINT "**** OUT  OF  RANGE  ****";
6060  PLAY "L1 N0":PLAY "L1 N0"
6070  LOCATE 24,1:PRINT "                         ";
6080  KEY(1) ON:KEY(11) ON:KEY(12) ON:KEY(13) ON:KEY(14) ON
6090   RETURN
6100  REM * GAME WON *
6110  KEY(1) OFF:KEY(2) OFF:KEY(11) OFF:KEY(12) OFF:KEY(13) OFF:KEY(14) OFF
6120  FOR SCALE=1 TO 24
6130  DRAW"C3;S=SCALE;BM38,21;NM+6,0;NM-6,0;NM+0,-3;NM+0,3;NM-6,3;NM+6,-3;NM-6,-3;NM+6,3;NM+3,-3;NM-3,3;NM+3,3;NM-3,-3;NM+6,2;NM-6,-2;NM-6,1;NM+6,-1;NM+1,3;NM-1,-3"
6140  NEXT SCALE
6150  CLS
6160  FOR K=1 TO 5
6170  SOUND 37,.1*18.2
6180  SCREEN 0:WIDTH 40
6190  FOR A=1 TO 10:NEXT A
6200  SCREEN 1:WIDTH 80
6210  NEXT K
6220  WIDTH 40
6230  CLS:PRINT:PRINT:PRINT
6240  PRINT"* * * * * * * * * * * * * * * * * * * *";
6250  PRINT"*                                     *";
6260  PRINT"*                                     *";
6270  PRINT"*    THE  FORCE  IS  WITH  YOU  !!    *";
6280  PRINT"*                                     *";
6290  PRINT"* YOU HAVE DESTROYED THE DEATH STAR ! *";
6300  PRINT"*                                     *";
6310  PRINT"*    YOU HAVE SAVED THE REPUBLIC !    *";
6320  PRINT"*                                     *";
6330  PRINT"* PRINCESS LEAH WILL LOVE YOU ALWAYS! *";
6340  PRINT"*                                     *";
6350  PRINT"* * * * * * * * * * * * * * * * * * * *"
6360  SOUND 525.25,18.2:SOUND 783.99,18.2/2:SOUND 698.46,18.2/6:SOUND 659.26,18.2/6:SOUND 587.33,18.2/6:SOUND 1046.6,18.2:SOUND 783.99,18.2/2:SOUND 698.46,18.2/6:SOUND 659.26,18.2/6:SOUND 587.33,18.2/6
6370  SOUND 1046.5,18.2:SOUND 783.99,18.2/2:SOUND 698.46,18.2/6:SOUND 659.26,18.2/6:SOUND 698.46,18.2/6:SOUND 587.33,18.2
6380  PRINT
6390  GOTO   5310
6400  REM * COLLISION WITH DEATH STAR *
6410 KEY(1) OFF:KEY(2) OFF:KEY(11) OFF:KEY(12) OFF:KEY(13) OFF:KEY(14) OFF
6420  DELTAX=35-M:DELTAY=18-N
6430  IF DELTAX>0 THEN M=M+1
6440  IF DELTAX<0 THEN M=M-1
6450  IF DELTAY>0 THEN N=N+1
6460  IF DELTAY<0 THEN N=N-1
6470  IF DELTAX=0 AND DELTAY=0 GOTO 6530
6480  PUT (M,N),DS
6490  PUT (MP,NP),DS
6500  MP=M:NP=N
6510  PLAY "P32"
6520  GOTO 6420
6530  FOR RAD=4 TO 20
6540  CIRCLE(38,21),RAD,3
6550  PLAY "P32"
6560  NEXT RAD
6570  CLS:PRINT "CRASH"
6580  FOR J2=1000 TO 37 STEP -10
6590  SOUND J2,.01*18.2
6600  NEXT J2
6610  PLAY "L1 N0":PLAY "L1 N0":PLAY "L1 N0"
6620  PRINT
6630  PRINT"DARTH VADER IS LAUGHING AT YOU."
6640  PLAY "L1 N0":PLAY "L1 N0":PLAY "L1 N0"
6650  PRINT
6660  PRINT"YOU HAVE JUST COLLIDED WITH THE DEATH";
6670  PRINT"STAR.  THEY DID NOT EVEN HEAR THE";
6680  PRINT"COLLISION.  YOU DID NOT EVEN SCRATCH";
6690  PRINT"THE DEATH STAR'S PAINT, BUT YOU ARE   ";
6700  PRINT"DEAD!"
6710  PRINT
6720  PRINT"*********   YOU  LOSE!!   *********"
6730  PRINT
6740   GOTO  5310
6750  REM * OUT OF TIME *
6760  KEY(1) OFF:KEY(2) OFF:KEY(11) OFF:KEY(12) OFF:KEY(13) OFF:KEY(14) OFF
6770  CLS:PRINT "TOO LATE!"
6780  FOR J2=1000 TO 37 STEP -10
6790  SOUND J2,.01*18.2
6800  NEXT J2
6810  PLAY "L1 N0":PLAY "L1 N0":PLAY "L1 N0"
6820  PRINT
6830  PRINT"DARTH VADER IS LAUGHING AT YOU."
6840  PLAY "L1 N0":PLAY "L1 N0":PLAY "L1 N0"
6850  PRINT
6860  PRINT"THE DEATH STAR HAS JUST DESTROYED";
6870  PRINT"PRINCESS LEAH AND THE ENTIRE REBEL";
6880  PRINT"STRONGHOLD";
6890  PRINT
6900  PRINT"*********   YOU  LOSE!!   *********"
6910  PRINT
6920   GOTO  5310
6930  CLS
6940  PRINT"       STAR  PILOT  INSTRUCTIONS"
6950  PRINT
6960  PRINT"    THE DEATH  STAR SPACE STATION, UNDER";
6970  PRINT"THE COMMAND OF DARTH  VADER, IS THE MOST";
6980  PRINT"POWERFUL  WEAPON  THE UNIVERSE  HAS EVER";
6990  PRINT"KNOWN.   A FRONTAL  ATTACK BY  ANY OTHER";
7000  PRINT"CRAFT WOULD BE ABSOLUTE SUICIDE. HOWEVER";
7010  PRINT"INTELLIGENCE DELIVERED  TO  OUR REPUBLIC";
7020  PRINT"HEADQUARTERS  BY  THE  ANDROIDS R2D2 AND";
7030  PRINT"C3PO GIVES A FAINT  HOPE OF A SUCCESSFUL";
7040  PRINT"ATTACK  BY A SMALL ONE OR TWO  PASSENGER";
7050  PRINT"X-WING FIGHTER."
7060  PRINT
7070  PRINT"    THERE IS A SMALL, UNSHIELDED EXHAUST";
7080  PRINT"PORT  ON  THE  SURFACE OF THE DEATH STAR";
7090  PRINT"THAT LEADS DIRECTLY TO THE MAIN REACTOR.";
7100  PRINT"SINCE IT IS AN EMERGENCY THERMAL PORT IN";
7110  PRINT"CASE THE REACTOR OVERHEATS, IT COULD NOT";
7120  PRINT"BE SHIELDED."
7130  PRINT
7140  INPUT"     (PRESS ENTER  TO  CONTINUE)",B$
7150  CLS
7160  PRINT
7170  PRINT"    IF YOU CAN  SLIP YOUR  SMALL FIGHTER";
7180  PRINT"PAST THE  DEATH STAR'S DEFENSES AND MAKE";
7190  PRINT"A DIRECT HIT ON THE THERMAL EXHAUST PORT";
7200  PRINT"WITH  A  TORPEDO, THERE IS A CHANCE THAT";
7210  PRINT"THE  TORPEDO  WILL   PENETRATE  TO   THE";
7220  PRINT"MAIN REACTOR AND START A CHAIN REACTION,";
7230  PRINT"DESTROYING THE DEATH STAR."
7240  PRINT
7250  PRINT"    IT IS A SLIM  CHANCE,  BUT IT IS THE";
7260  PRINT"ONLY  HOPE  THE  REPUBLIC HAS.   OBI-WAN";
7270  PRINT"KENOBI GAVE  HIS LIFE TO GET THE MESSAGE";
7280  PRINT"HERE, SO HE CONSIDERED IT IMPORTANT."
7290  PRINT:PRINT:PRINT:PRINT
7300  PRINT"PRESS ENTER FOR X-WING FIGHTER          ";
7310  INPUT"      FAMILIARIZATION",B$
7320  CLS
7330  PRINT"        REPUBLIC  X-WING  FIGHTER       "
7340  PRINT
7350  PRINT"     THE X-WING  FIGHTER IS A SMALL  ONE";
7360  PRINT"MAN  SPACESHIP  THAT IS,  QUITE FRANKLY,";
7370  PRINT"OBSOLETE.  IT IS ARMED ONLY WITH A LASER";
7380  PRINT"CANNON  AND  THREE  TORPEDOES.   USE THE";
7390  PRINT"LASER CANNON  TO  FIGHT OFF ANY IMPERIAL";
7400  PRINT"FIGHTERS AND SAVE THE  TORPEDOES FOR THE";
7410  PRINT"DEATH STAR."
7420  PRINT
7430  PRINT"     THE  TARGET  ACQUISITION  RADAR CAN";
7440  PRINT"DETECT IN  EXCESS OF  100,000 KILOMETERS";
7450  PRINT"AWAY, BUT CAN ONLY DISPLAY TARGETS WITH-";
7460  PRINT"IN  20,000 KM.   THEREFORE,  YOU WILL BE";
7470  PRINT"WARNED OF APPROACHING  TARGETS  ON  YOUR";
7480  PRINT"CONTROL PANEL  BEFORE THEY ARE DISPLAYED";
7490  PRINT"ON THE RADAR SCREEN."
7500  PRINT
7510  INPUT"     (PRESS ENTER  TO  CONTINUE)",B$
7520  CLS
7530  PRINT
7540  PRINT"     THE LASER  CANNON IS AN  ANTIQUATED";
7550  PRINT"WEAPON.  TO  HIT AN ENEMY, YOU MUST HAVE";
7560  PRINT"HIM  IN THE  EXACT CENTER  OF THE  CROSS";
7570  PRINT"HAIRS ON YOUR RADAR SCREEN. THEN YOU MAY";
7580  PRINT"FIRE THE  LASER CANNON BY  TYPING THE F1";
7590  PRINT"KEY ON YOUR CONTROL PANEL."
7600  PRINT
7610  PRINT"     YOUR  THREE  TORPEDOES ARE COMPUTER";
7620  PRINT"GUIDED,  BUT ALSO QUITE  LIMITED.   MAKE";
7630  PRINT"SURE THAT YOU ARE WITHIN 10000 KM OF THE";
7640  PRINT"DEATH STAR  AND THAT YOU HAVE  SOME PART";
7650  PRINT"OF  THE SPACE STATION  IN THE CENTER  OF";
7660  PRINT"THE  CROSS HAIRS  ON YOUR  RADAR SCREEN.";
7670  PRINT"EVEN THEN,  SINCE IT TAKES A PERFECT HIT";
7680  PRINT"ON THE EXHAUST PORT TO DESTROY THE DEATH";
7690  PRINT"STAR,  YOU  MAY  REQUIRE  MORE  THAN ONE";
7700  PRINT"TORPEDO.   TYPE THE  F2  KEY TO FIRE THE";
7710  PRINT"TORPEDO."
7720  PRINT
7730  INPUT"    (PRESS ENTER  TO  CONTINUE)",B$
7740  CLS
7750  PRINT
7760  PRINT"    THE SPEED OF YOUR SHIP IS CONTROLLED";
7770  PRINT"BY TYPING THE NUMBERS  1 THROUGH 9  (FOR";
7780  PRINT"MACH  10 THROUGH 90  RESPECTIVELY).  THE";
7790  PRINT"MOVEMENT OF YOUR  SHIP IS  CONTROLLED BY";
7800  PRINT"THE CURSOR CONTROLS.  SINCE THESE INPUTS";
7810  PRINT"MOVE YOUR SHIP  AND NOT THE TARGETS, THE";
7820  PRINT"TARGETS APPEAR  TO  MOVE IN THE OPPOSITE";
7830  PRINT"DIRECTION.   ALSO, YOU  CAN  EXPECT  THE";
7840  PRINT"ENEMY TO TAKE EVASIVE ACTION."
7850  PRINT
7860  PRINT"    WHEN SELECTING THE SKILL LEVEL, 0 IS";
7870  PRINT"THE EASIEST  GAME AND 3 IS THE  HARDEST.";
7880  PRINT"SKILL LEVEL  0  PROVIDES THE BEST CHANCE";
7890  PRINT"OF BEING  MISSED BY THE  FIGHTERS AND OF";
7900  PRINT"HITTING  THE DEATH STAR.  LEVEL  0  ALSO";
7910  PRINT"PROVIDES  THE LARGEST  TIME LIMIT BEFORE";
7920  PRINT"THE DEATH STAR DESTROYS THE REBEL BASE."
7930  PRINT
7940  PRINT
7950  INPUT"PRESS ENTER FOR  TAKE-OFF",B$
7960  CLS
7970  PRINT"****************************************"
7980  PRINT
7990  PRINT"    MAY  THE  FORCE  BE  WITH  YOU"
8000  PRINT
8010  PRINT"****************************************"
8020  PLAY "L1 N0":PLAY "L1 N0"
8030   GOTO   1300
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0274

     Volume in drive A has no label
     Directory of A:\

    GAMES    TXT      4125   1-20-85   8:54p
    CASTLE   EXE     72832   6-13-84  12:37p
    CASTLE   RAN     48384   1-01-80   7:52a
    SPACEVAD EXE      9216   1-28-84   9:46p
    PACKMAN  EXE     37120   1-26-83  12:00p
    PACKMAN  DOC      4736   1-25-82  11:15p
    BREAKOUT BAS      4864   1-01-80   1:00a
    LANDER   BAS     17920   9-20-82   8:23p
    LANDER   BIN      5760   3-08-82
    LANDER   SCR       128   4-17-82
    BUGS     EXE     24064   1-29-84   3:29p
    BUGS!    SCR       128   5-02-84   6:10p
    LIFE2    EXE     26415  12-19-84  10:19p
    LIFE2    BAS      9059  12-19-84  10:16p
    WIZARD   BAS     27520   1-21-83  11:51p
    XWING    BAS     34688   5-29-83   3:16p
    FILES    TXT       975   1-20-85   9:18p
    CRC      TXT      1381   1-01-80  12:44a
    CRCK4    COM      1536  10-21-82   5:50p
    GO       BAT       461   4-10-85  12:39p
           20 file(s)     331312 bytes
                           21504 bytes free
