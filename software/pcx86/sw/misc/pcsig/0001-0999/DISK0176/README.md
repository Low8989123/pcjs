---
layout: page
title: "PC-SIG Diskette Library (Disk #176)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0176/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0176"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "SPACE INVADERS"

    A fine collection programs which demonstrate the graphic capabilities
    of the IBM computer.  With these routines, you can draw different
    shapes using your choice of coordinates and colors.  You may also
    enjoy some random-pattern generation, or for something a bit less
    restful, a very good public domain version of the classic Space
    Invaders.
    
    System Requirements:  Some programs require color, BASIC
    
    How to Start: To read DOC or ASC files, enter TYPE filename.ext and
    press <ENTER>.  To run an EXE program, just type its name and press
    <ENTER>.  For instructions on running BASIC programs, please refer to
    the GETTING STARTED section in this catalog.
    
    File Descriptions:
    
    CURVE2   BAS  Draws curve to your selection of coordinates and color
    CIRCLOOP BAS  Circle patterns
    CURVE    BAS  Sine wave
    CIRCLOOP ASC  Documentation
    CIRCLE   BAS  Circle patterns
    CURVE3   BAS  Draws circle, ellipse to your coordinates and color
    DOWN     BAS  Pattern by Robbie Khedouri
    NEWYEAR  DOC  Documentation
    JAIME    BAS  Moving line pattern
    NYTEST   BAT  Part of NEWYEAR.EXE - test execution
    NUDE     BAS  Excellent female nude in color by G. Wesley & Dave Moon
    NEWYEAR  PAS  Pascal source code
    NEWYEAR  EXE  Main program - welcome in the New Year with your PC
    WALLS    BAS  Pattern by Robbie Khedouri
    TRIANGLE BAS  Draws triangle to your selection of coordinates
    SWIRL    BAS  Pattern by Robbie Khedouri
    SQUARE   BAS  Square pattern
    SPACEVAD EXE  Space Invaders game - excellent public domain version
    ROUNDER? BAS  Curve plot to your selection of coordinates (5 files)
    NYTEST1  BAT  Part of NEWYEAR.EXE - test execution
    CURVE    BAS  BASIC program to draw a curve
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CIRCLE.BAS

{% raw %}
```bas
0 X=25
10 CLS:SCREEN 1
20 KEY OFF:COLOR 1,2
30 FOR T=10 TO 199 STEP 20
40 FOR S=10 TO 319 STEP 15
50 CIRCLE (S,T),X:PAINT (S,T),2,3
60 NEXT:NEXT
70 COLOR 2,3:COLOR 1,2:GOTO 70
```
{% endraw %}

## CIRCLOOP.BAS

{% raw %}
```bas
10 BEEP
12 PLAY "mb"
15 KEY OFF
20 CLEAR ,,8000: SCREEN 1,0: COLOR B,A
22 PAINT (160,100),3,2
25 FOR B=1 TO 16
27 FOR C=0 TO 1
30 SCREEN 1,0: COLOR B,C
40 CLS
45 FOR A=0 TO 3
50 CIRCLE (160,100),10,A,3.14,6.28
60 CIRCLE (160,100),10,A,6.28,3.14
70 CIRCLE (160,100),20,A,3.14,6.28
80 CIRCLE (160,100),20,A,6.28,3.14
90 BEEP
100 CIRCLE (160,100),30,A,3.14,6.28
105 SOUND RND*1000+37,2
110 CIRCLE (160,100),30,A,6.28,3.14
115 SOUND RND*1000+37,2
120 CIRCLE (160,100),40,A,3.14,6.28
125 SOUND RND*1000+37,2
130 CIRCLE (160,100),40,A,6.28,3.14
135 SOUND RND*1000+37,2
140 CIRCLE (160,100),50,A,3.14,6.28
145 SOUND RND*1000+37,2
150 CIRCLE (160,100),50,A,6.28,3.14
155 SOUND RND*1000+37,2
160 CIRCLE (160,100),60,A,3.14,6.28
165 SOUND RND*1000+37,2
170 CIRCLE (160,100),60,A,6.28,3.14
175 SOUND RND*1000+37,2
180 CIRCLE (160,100),70,A,3.14,6.28
185 SOUND RND*1000+37,2
190 CIRCLE (160,100),70,A,6.28,3.14
195 SOUND RND*1000+37,2
200 CIRCLE (160,100),80,A,3.14,6.28
205 SOUND RND*1000+37,2
210 CIRCLE (160,100),80,A,6.28,3.14
220 CIRCLE (160,100),90,A,3.14,6.28
230 CIRCLE (160,100),90,A,6.28,3.14
300 SOUND RND*1000+37,2
310 NEXT
320 NEXT
330 NEXT
```
{% endraw %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #176, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  CIRCLE  .BAS         CRC = 76 74

--> FILE:  CIRCLOOP.ASC         CRC = 96 6B

--> FILE:  CIRCLOOP.BAS         CRC = 15 EF

--> FILE:  CURVE   .BAS         CRC = 8E DB

--> FILE:  CURVE2  .BAS         CRC = E5 01

--> FILE:  CURVE3  .BAS         CRC = FA 85

--> FILE:  DOWN    .BAS         CRC = AC C5

--> FILE:  XXX     .            CRC = 28 74

--> FILE:  JAIME   .BAS         CRC = 5E E0

--> FILE:  NEWYEAR .DOC         CRC = B3 2C

--> FILE:  NEWYEAR .EXE         CRC = AC 04

--> FILE:  NEWYEAR .PAS         CRC = B3 4D

--> FILE:  NUDE    .BAS         CRC = 49 F8

--> FILE:  NYTEST  .BAT         CRC = 00 00

--> FILE:  NYTEST1 .BAT         CRC = 00 00

--> FILE:  ROUNDER .BAS         CRC = A9 D9

--> FILE:  ROUNDER1.BAS         CRC = EA F6

--> FILE:  ROUNDER2.BAS         CRC = 64 9C

--> FILE:  ROUNDER3.BAS         CRC = 27 DC

--> FILE:  ROUNDER4.BAS         CRC = 61 C0

--> FILE:  SPACEVAD.EXE         CRC = 96 CE

--> FILE:  SQUARE  .BAS         CRC = 25 1C

--> FILE:  SWIRL   .BAS         CRC = 2D 77

--> FILE:  TRIANGLE.BAS         CRC = 32 5A

--> FILE:  WALLS   .BAS         CRC = 04 EC

 ---------------------> SUM OF CRCS = C5 6B

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## CURVE.BAS

{% raw %}
```bas
10 SCREEN 1:P=10
20 CLS:S=11.5
30 FOR T=1 TO -1 STEP -0.1
40 P=10+L:Q=8:S=S-T:FOR G=1 TO 10:Q=Q+S:P=P+T*2:NEXT
50 PSET(P,Q),1
60 NEXT:S=10:L=L+40
70 FOR T=-1 TO +1 STEP 0.1
80 P=11+L:Q=8:S=S-T
90 FOR G=1 TO 10:Q=Q+S:P=P+T*2:NEXT
100 PSET(P,Q),1
110 NEXT:L=L+38:S=11.5:GOTO 30
120 IF INKEY$<>"" THEN SCREEN 0:WIDTH 80:LIST
130 GOTO 120
```
{% endraw %}

## CURVE2.BAS

{% raw %}
```bas
0 SCREEN 0:COLOR 1,2,4:CLS
1 LINE INPUT "SIZE (1 - 20):";H$:H=VAL (H$):H$="":IF H<1 OR H>20 THEN 1
2 PRINT:LINE INPUT "X COORDINATE (0 - 319):";A$:A=VAL (A$):A$="":IF A<0 OR A>319 THEN 2
3 PRINT:LINE INPUT "Y COORDINATE (0 - 199):";Z$:Z=VAL (Z$):Z$="":IF Z<0 OR Z>199 THEN 3
4 PRINT:LINE INPUT "COLOR (1-3)";C$:C=VAL(C$):C$="":IF C<1 OR C>3 THEN 4
10 SCREEN 1:L=2:'Z=Z/H:A=A/H
20 CLS:S=11.5:'S=10:GOTO 70
30 FOR T=1 TO -1 STEP -0.1
40 P=A:Q=Z:S=S-T:FOR G=1 TO H:Q=Q+S:P=P+T:NEXT:L=L+1:'LOCATE 25,1 :PRINT X,Y;
50 PSET(P,Q),C:IF L/2=INT(L/2)=0 THEN X=P:Y=Q:GOTO 60
55 IF X<>0 AND Y<>0 THEN LINE (P,Q)-(X,Y),C:X=0:Y=0
60 :NEXT:S=10:X=X:Y=Y:L=2
70 FOR T=-1 TO +1 STEP 0.1
80 P=A:Q=Z:S=S-T
90 FOR G=1 TO H:Q=Q+S:P=P+T:NEXT:L=L+1:'LOCATE 25,1:PRINT X,Y;
100 PSET(P,Q),C:IF L MOD 2=0 THEN X=P:Y=Q:GOTO 110
105 IF X<>0 AND Y<>0 THEN LINE (P,Q)-(X,Y),C:X=0:Y=0
110 :NEXT
120 IF INKEY$<>"" THEN SCREEN 0:WIDTH 80:LIST
130 GOTO 120
```
{% endraw %}

## CURVE3.BAS

{% raw %}
```bas
10 SCREEN 0:COLOR 1,2,4:WIDTH 80:CLS:E=1:F=-1
20 LINE INPUT "SIZE (1 - 20):";H$:G=VAL (H$):H$="":IF G<1 OR G>20 THEN G=5
30 PRINT:LINE INPUT "X COORDINATE (0 - 319):";A$:H=VAL (A$):A$="":IF H=0 THEN H=160
35 IF H<0 OR H>319 THEN 30
40 PRINT:LINE INPUT "Y COORDINATE (0 - 199):";Z$:D=VAL (Z$):Z$="":IF D=0 THEN D=100
45 IF D<0 OR D>199 THEN 40
50 PRINT:LINE INPUT "COLOR (1-3)";C$:C=VAL(C$):C$="":IF C<1 OR C>3 THEN C=1
60 PRINT:INPUT "ARC (1 TO 10)";E:IF E<1 OR E>10 THEN E=10
70 GOSUB 230
80 SCREEN 1
90 CLS:I=11.5
100 FOR J=1 TO -1 STEP -.1
110 X=H:Y=D:I=I-J:FOR K=1 TO G:Y=Y+I*F:X=X+J*E
115 IF J=1 THEN A=X:B=Y
120 X=INT(X):Y=INT(Y):PSET(X,Y),C
130 IF A<>0 AND B<>0 THEN LINE (X,Y)-(A,B),C:A=X:B=Y
135 IF J>.9 THEN L=X:M=Y
140 :NEXT:NEXT:I=10
150 FOR J=-1 TO +1 STEP .1
160 X=H:Y=D:I=I-J
170 FOR K=1 TO G:Y=Y+I*F:X=X+J*E:NEXT:IF J=-1 THEN LINE (A,B)-(X,Y),C:A=X:B=Y
180 X=INT(X):Y=INT(Y):PSET(X,Y),C
190 IF J<>-1 THEN LINE (X,Y)-(A,B),C:A=X:B=Y
200 :NEXT:LINE (A,B)-(L,M),C
210 IF INKEY$<>"" THEN RUN:SCREEN 0:WIDTH 80:LIST
220 GOTO 210
230 PRINT:INPUT "(H)ORIZONTAL OR (V)ERTICAL ELIPSE OR (C)IRCLE";Y$
240 IF Y$="V" OR Y$="C" THEN F=E:E=1:F=F/10:GOTO 260
250 F=1
260 RETURN
```
{% endraw %}

## DOWN.BAS

{% raw %}
```bas
0 ' A GRAPHICS DEMO
1 ' BY ROBBIE KHEDOURI
10 CLS:SCREEN 1:COLOR 1,0
20 FOR T=0 TO 319 STEP 2
30 LINE (T,T)-(319-T,T),3
40 LINE (319-T,T)-(319-T,199-T),2
50 LINE (319-T,199-T)-(T,199-T),3
60 LINE (T,199-T)-(T,T),1
70 NEXT
80 FOR T=0 TO 319 STEP 3
90 LINE (T,T)-(319-T,T),1
100 LINE (319-T,T)-(319-T,199-T),2
110 LINE (319-T,199-T)-(T,199-T),2
120 LINE (T,199-T)-(T,T),3
130 NEXT
140 GOTO 140
```
{% endraw %}

## JAIME.BAS

{% raw %}
```bas
10 SCREEN 1:COLOR 1,0:KEY OFF:CLS
20 RANDOMIZE VAL(RIGHT$(TIME$,2))
30 X= RND*319:Y=RND*199
40 FOR T=0 TO 319 STEP RND *6+3
50 LINE (X,Y)-(T,0),RND*3
60 NEXT
70 FOR T=0 TO 199 STEP RND*6+3
80 LINE (X,Y)-(319,T),RND*3
90 NEXT
100 FOR T=319 TO 0 STEP -(RND*6+3)
110 LINE (X,Y)-(T,199),RND*3
120 NEXT
130 FOR T=199 TO 0 STEP -(RND*6+3)
140 LINE (X,Y)-(0,T),RND*3
150 NEXT
160 GOTO 30
```
{% endraw %}

## NEWYEAR.DOC

{% raw %}
```
NEWYEAR

INTRODUCTION
  Newyear is a program to allow you, the computer user, to bring
in the new year with as much fun and excitement as everything else you
do with your computer.

  No more need the new year be spent sitting beside the TV
waiting for a broadcast to tell you that the new year has
arrived. A broadcast that for many of the people in Canada and
USA was taped 'a few hours ago' at 'some famous square'.

  NOW you can reproduce your own AUTHENTIC new year, bringing in
the newyear with a LIVE up to the second broadcast by none other
than your faithful computer!

WHY WAS IT WRITTEN? 
  Newyear was developed between 11:15 and 11:45, December 31st
1983 when someone at the party asked "can't your computer do
anything useful?"  All you've shown me is Accounting,
Spreadsheets, Wordprocessing, Databases...'.  I admit, it took
three compiles before it worked the way it does now, but at least
I was able to show him that YES my computer CAN do something
useful!  We ran it (beside the TV) for the final countdown, and
believe it or not NO ONE was watching the TV (though they were
listening, just in case the program didn't work).  But work it
did.  I should mention that at the end, the program flashes the
new year in what I call 'rotating' colours.  Once the new year
arrives, it goes on and on and on and on and on... with this
display.  Depending on how much you have had to drink, it gets
boring after awhile, but does provide the occasional interest
from some of the guests 'is is STILL doing that?'.

  Later I went in and added two or three additional comments.

THE SERIOUS STUFF

  And now, we will discuss the program and its use.

  The program is written in PASCAL.  It makes use of the most
powerful features of MS-PASCAL - the MODULE.  The source code for
all except the copywritten Modules have been included.  This
means you won't be able to compile it (though, for the life of me
I don't know WHY you would want to re-compile it).

  I have provided the source code for that those who might be
interested in the method with which I solved a number of minor
problems. I do not consider this an example of the best code I
write, but it should help you if you want to see a number of
Pascal features and how they can be used in a helpful manner.

  Below I have listed some of the features I have used which may
(or may not) be of interest to the beginning programmer.

USE OF THE PROGRAM

  Before you run the program it is imperative that you make sure
that the date is correct (12-31-??) and that the time is correct
to the second.  For test runs, I suggest you just set the time
somewhere between 01 seconds and 2 minutes before midnight 19??.

  Make sure the colour monitor is hooked up.

  To run the program you merely type 

NEWYEAR <CR>

  In a couple seconds the program will start running.

THE FIRST SCREEN : before the last 59 seconds of the year

  If the program starts running more than 59 seconds before the
end of the year it will now display in large letters in the
middle of the screen, in some randomly choosen set of colours,
the current year. (the random colours are based on the time, so
if you use a batch file to set the time and run the program, you
may get the same 'random' colours when you run it more than once) 
At the bottom left hand side of the screen it will display the
current time.  This first screen will stay here until 59 seconds
before the end of the year.  If the program starts running even a
100th of a second after the new year arrives it will sit with the
same screen for 365 days, merely showing the current year and the
current time (rather boring in my opinion). 

  If you start the program well in advance of the hour you can
check the time with the display at the bottom of the screen.  If
this is not the correct time to the second, then stop the program
(CTRL-C, CTRL-ALT-DEL, RESET button or power off/on) and reset
the time.


THE SECOND (COUNT DOWN) SCREEN : the last 59 seconds of the year

  The second screen occurs when the program starts running less
than 60 seconds before the end of the year, or if the screen
discussed 2 paragraphs above is being displayed, as soon as it is
59 seconds to the year end, the first screen will disappear and
this second screen will appear.  This screen is the count down
screen.

  The count down screen is in my opinion the most interesting.
On the top third it displays the current year.  At the bottom
left corner (remember previous screen) it contains the current
time. In the middle, in colours that change every second, it
displays the number of seconds until the new year.  Now you can
count down with it.  59..58..57..56..55......10..9..8..7..6..5..
4..3..2..1..0  The 0 will display briefly (just long enough to
see it) and then the program goes to the last screen..

  The new year screen starts by wishing you 'HAPPY NEW YEAR' then
it prints the current year, over and over and over and over
and...over again until about 12:00 AM, December 30th (ie it runs
for 355 days, it quits in time for you to start it up for next
year!).  It prints the year (19??) in almost every combination of
colours the display can print and still be legible (legible means
what I the programmer call legible. Depending on your eyesight
and monitor, you may feel there are more combinations that are
legible or you may feel that some of the ones I choose are not
legible, oh well).  It does this in an attempt to flashy (the
last two digits flash continuously) and causes at least a
moderate amount of interest.

  At the bottom it prints, no not the current time, but 00:00:00. 
Why? because, at a newyears eve party, who REALLY wants to know
the time. The new year is a time for fun and friends, if you knew
what time it was, you'd probably want to go home too soon, and I
don't want MY program to be responsible for that!  On the other
hand,  when the program finishes running altogether, you may want
to consider stopping the party, it is really getting quite late
in the day, er year!

  One last thing before I leave you,  The files nytest.bat and
nytest1.bat are  batch files which run the program twice each so
you can see how it works. To stop the first run without waiting
for the program to stop, hit the keys CTRL and C at the same
time. The computer will ask you (somewhere in strange colours in
the middle of the screen) 'Terminate batch job (Y/N)?' hit the
'n' key to indicate NO. It will then continue with the second run
of the program (the second one starts 'too late' and starts with
the second screen rather than the first.)

PASCAL FEATURES and PROGRAMMING HELPS

  The first two lines are used to bring in some text files from
another file on the disk.  'pastool1.int' and 'pastool2.int' are
the actual names of the files if you were to look at the
directory of the disk I use to compile with.

  The INTERFACE to PASTOOL1 is included for your interest and to
assist you in your own programming in Pascal. For further
information on any of the tools, please contact HORWOOD
CONSULTING SERVICES LTD., 77 Capri Ave. N.W., Calgary, Alberta,
T2L 0G9, CANADA.

  In the variable section you will notice the use of sets.  This
is a feature much passed over by Pascal programmers, yet it can
let the programmer write code that is easier to write, read and
debug.  I am using goodlooking to be those colours which I
personally feel look good on a colour monitor.  I then use them
later to make sure the random generator returns only one of
colours in the subset that I call goodlooking.  If the colour
returned is not 'in' this subset then I keep asking the random
generator for new choices until it returns a colour I like.

  The procedures time and date are declared as EXTERNAL, this
mean that they are found somewhere else, in another program
(possibly a FORTRAN, PASCAL, Assemebler or Compiled BASIC program
written earlier) or found in the library.  In this case they are
found in the pre-written library that comes with MS-PASCAL.

  RANDOM is a random number generator found in tools2. It uses
two numbers to determine the number returned.  The first is the
SEED and the second is the time (to the seconds). Although I
won't go into detail on how the generator works, if you passed it
the same seed twice in the same second it would always return the
same number.  For this reason we do not set the seed each time,
rather, the generator takes the seed, changes it and returns the
changed seed.  This changed seed is what we give to it the next
time. This insures that the numbers returned will be random.
Note that since the time and seed are the numbers used, and since
we always start with a seed of zero.  If you run the program
starting at the same time it will quite often use the same
colours. This is all I am going to say about random generators
here.  If this is not all clear, or if you want to know more
about random generators, I refer you to your closest library...

  The procedure print_num is 'passed' a number to be printed, and
a row and column at which it is to start printing it.

  Set_attributes takes a number between 1 and 256 and uses it in
Scroll_up and clearscrn as the colours to use in scrolling up and
clearing. Set_attributes is found in pastools1.

  Scroll_up is found in pastools1 and it makes a call to the
BIOS.

  Gotorc is found in pastools1 and it also makes a call to the
BIOS. It goes to the row/column specified.

  Notice the line near the bottom, the error message.  Even in
'quick and dirty' programs as this one was, it is a good idea to
be liberal in your error checking.  If you are the number of
errors that you make (and don't find on the first couple runs)
will drop dramaticaly.  Although this program didn't run the
first time, it only took 1/2 hour and three tries.  I attribute
this to GOOD STUCTERED programming and good error checking.

```
{% endraw %}

## NUDE.BAS

{% raw %}
```bas
5  A=2
10  'Modified from the HP 9845 Basic by G. Wesley  12/29/82
15 ' draw statements to color figure
20 ' by DAVE MOON 11/83
25  KEY OFF
30  CLS
35  DEFINT X,Y,C
40  SCREEN 1:COLOR 15,0
45  C=0:LINE -(0,0),C
50  FOR I=1 TO 360
55     READ X,Y,P
60     X=X*320/360
65     Y=Y*200/240
70     Y=200-Y 'do y transformation to
75 'get picture right side up.
80     IF P=13 THEN C=0 ELSE C=A
85     LINE -(X,Y),C
90 NEXT I
95 PSET (70,167),2:PAINT (27,150),2
100 PAINT(27,165),3,2:LOCATE 1,1:LINE (105,152)-(105,156),2:LINE(107,157)-(107,157),2:PSET(92,140),2:PAINT (27,170),0,2
105 LINE(301,96)-(302,96),2:PSET (299,96),2:PSET (309,85),2:PSET(288,108),2:PSET(304,108),3
110 PAINT(304,108),2,2 'shoes
115 LINE (169,74)-(173,80),2 'line on leg so paint won't leak
120 PSET(246,143),2
125 PAINT(160,150),0,2
130 PAINT (290,77),0,2 'torso & boobs
135 PSET(167,83),2
140 PAINT(170,95),0,2 'torso
145 PAINT (58,130),0,2 'face
150 PSET (245,143),7 ' a dot on her arm
155 PSET (144,91),2 'right nipple
160 PSET (145,91),2 'rn
165 PSET (146,90),2 'rn
170 PSET (148,89),2 'rn
175 DRAW "c2lr1D1L1D1L1D1R1D1r6u1l6u1r4"'RN
180 PSET (95,90),2  'left nipple
185 DRAW "c2d1r1u1r1u1r3"'fill l.nipple
190 PSET (94,91),2  'ln
195 PSET (93,92),2  'ln
200 PSET (216,141),1
205 DRAW "c1r3l9u1l6r16u1r1u1r2u1r1u1r2u1r1u1r1"'arm and ass space
210 PSET (216,141),1
215 PAINT (300,190),1,2
220 PAINT (55,122),0,2 'top eye
225 PAINT (50,118),0,2 'eye
230 PAINT (55,124),0,2 ' eye
235 PAINT (57,122),0,2 'eye
240 PAINT (58,120),0,2 ' eye
245 PSET (59,124),1 ' blue dot in eye
250 PSET (60,124),1 'second blue dot
255 PAINT (50,185),2   'paints hair red
260 PAINT (30,5),1,2 ' paints top yellow
265 WHILE INKEY$<> "":WEND
270 WHILE INKEY$="":WEND
275 DATA 51,100,13,79,103,12,104,92,12
280 DATA 108,87,12,108,82,12,104,72,12
285 DATA 88,57,12,93,75,13,93,78,12
290 DATA 91,82,12,90,84,12,90,87,12
295 DATA 89,90,12,89,94,12,90,93,12
300 DATA 91,89,12,92,86,12,92,83,12
305 DATA 94,77,12,93,75,13,96,80,12
310 DATA 97,83,12,97,87,12,96,89,12
315 DATA 92,92,12,89,94,12,93,89,12
320 DATA 94,85,12,94,77,12,85,81,13
325 DATA 85,83,12,86,84,12,86,82,12
330 DATA 85,81,12,85,86,13,84,86,12
335 DATA 83,88,12,85,86,12,67,54,13
340 DATA 65,60,12,64,67,12,66,74,12
345 DATA 67,74,12,66,67,12,66,60,12
350 DATA 67,54,12,69,56,13,68,61,12
355 DATA 67,67,12,68,70,12,71,73,12
360 DATA 69,69,12,69,64,12,71,60,12
365 DATA 69,56,12,71,60,13,74,64,12
370 DATA 74,68,12,71,72,12,73,68,12
375 DATA 73,64,12,70,61,12,70,63,13
380 DATA 71,63,12,73,65,12,73,68,12
385 DATA 71,69,12,70,69,12,69,68,12
390 DATA 70,65,13,70,66,12,71,66,12
395 DATA 71,65,12,70,65,12,64,87,13
400 DATA 60,91,12,59,94,12,58,98,12
405 DATA 60,100,12,59,97,12,62,92,12
410 DATA 64,87,12,69,86,13,65,88,12
415 DATA 63,93,12,62,100,12,65,98,12
420 DATA 64,95,12,64,90,12,69,86,13
425 DATA 70,91,12,68,95,12,65,98,12
430 DATA 65,97,12,67,95,12,69,91,12
435 DATA 69,86,12,65,88,13,66,88,12
440 DATA 68,89,12,69,91,12,67,94,12
445 DATA 65,94,12,64,93,12,65,90,13
450 DATA 65,91,12,66,91,12,66,90,12
455 DATA 65,90,12,61,101,13,50,104,12
460 DATA 36,100,12,24,90,12,17,75,12
465 DATA 16,61,12,25,43,12,44,33,12
470 DATA 60,33,12,79,40,12,57,38,12
475 DATA 41,45,12,24,62,12,17,75,12
480 DATA 51,100,13,57,95,12,63,80,12
485 DATA 62,72,12,58,78,12,62,65,12
490 DATA 65,49,12,52,45,13,65,49,12
495 DATA 88,65,12,87,50,12,79,40,12
500 DATA 17,75,13,5,67,12,0,45,12
505 DATA 4,23,12,25,11,12,58,17,12
510 DATA 110,14,12,135,25,12,160,32,12
515 DATA 164,40,12,162,44,12,155,46,12
520 DATA 143,45,12,151,43,12,149,40,12
525 DATA 125,48,12,118,55,12,119,51,13
530 DATA 117,58,12,113,62,12,104,62,12
535 DATA 115,61,13,115,67,12,111,71,12
540 DATA 104,72,12,121,52,13,133,50,12
545 DATA 145,51,12,131,56,13,145,51,12
550 DATA 170,47,12,245,41,12,255,42,12
555 DATA 262,46,12,271,58,12,282,81,12
560 DATA 281,78,13,287,81,12,280,76,13
565 DATA 285,74,12,288,75,12,278,73,13
570 DATA 282,75,12,283,79,13,288,75,12
575 DATA 293,74,12,301,77,12,299,76,13
580 DATA 306,75,12,313,76,12,314,77,12
585 DATA 313,78,12,309,78,12,309,77,12
590 DATA 311,76,12,309,78,13,304,79,12
595 DATA 300,81,12,295,79,12,302,80,13
600 DATA 313,83,12,316,85,12,312,85,12
605 DATA 311,84,12,311,83,12,313,83,12
610 DATA 312,85,13,300,84,12,292,82,12
615 DATA 300,84,13,305,88,12,306,90,12
620 DATA 302,89,12,301,88,12,302,87,12
625 DATA 305,88,12,302,89,13,289,85,12
630 DATA 295,79,13,280,92,12,275,91,12
635 DATA 244,68,12,251,64,13,244,68,12
640 DATA 220,73,12,170,89,12,164,92,12
645 DATA 157,92,12,220,73,13,243,73,12
650 DATA 261,81,12,270,95,12,273,109,12
655 DATA 270,125,12,259,143,12,244,160,12
660 DATA 227,177,12,208,193,12,196,206,12
665 DATA 214,202,13,198,210,12,189,213,12
670 DATA 182,213,12,176,211,12,172,206,12
675 DATA 170,199,12,172,190,12,182,167,12
680 DATA 197,141,12,209,125,12,236,105,12
685 DATA 180,122,13,185,126,12,187,137,12
690 DATA 191,150,12,208,193,13,214,202,12
695 DATA 222,216,12,228,223,12,234,226,12
700  DATA  240,226,12,247,222,12,276,192,12
705 DATA  305,164,12,318,155,12,330,150,12
710 DATA  349,137,12,347,139,13,360,149,12
715 DATA  360,140,12,357,129,12,353,123,12
720 DATA  350,121,12,335,120,12,349,137,13
725 DATA  339,123,12,324,110,12,322,111,12
730 DATA  322,113,12,324,116,12,330,121,12
735 DATA  341,126,12,337,124,13,338,127,12
740 DATA  335,120,13,335,116,12,349,107,12
745 DATA  348,106,12,340,110,12,324,110,12
750 DATA  341,126,13,334,128,12,330,128,12
755 DATA  325,126,12,320,123,12,316,122,12
760 DATA  312,124,12,310,127,12,308,134,12
765 DATA  305,140,12,290,150,12,275,159,12
770 DATA  257,168,12,249,174,12,244,179,12
775 DATA  293,148,13,289,142,12,285,142,12
780 DATA  282,143,12,274,150,12,266,155,12
785 DATA  241,163,12,248,205,13,247,194,12
790 DATA  241,163,12,90,99,13,95,103,12
795 DATA  94,100,13,98,114,12,105,128,12
800 DATA  108,132,12,108,134,12,110,135,12
805 DATA  111,134,12,108,132,12,105,128,13
810 DATA  117,134,12,111,134,13,117,134,12
815 DATA  131,130,12,143,122,12,99,95,13
820 DATA  114,100,12,130,108,12,124,97,13
825 DATA 130,104,12,137,115,12,143,122,12
830 DATA 160,130,12,167,132,12,169,134,12
835 DATA 171,133,12,171,131,12,167,132,12
840 DATA 160,130,13,175,126,12,171,131,13
845 DATA 175,126,12,181,120,12,186,110,12
850 DATA 188,100,12,186,89,12,181,121,13
855 DATA 190,121,12,200,118,12,210,112,12
860 DATA 222,103,12,195,120,13,200,122,12
865 DATA 183,122,13,190,125,12,207,127,12
870 DATA 233,107,13,232,103,12,365,0,13
875 END
```
{% endraw %}

## ROUNDER.BAS

{% raw %}
```bas
0 'GOTO 120
10 SCREEN 1:CLS:X=160:Y=100
20 FOR T=-4 TO 4:FOR S=1 TO 10
30 PSET (X,Y),1:X=X-S:Y=Y-T
40 NEXT:X=160:Y=100:NEXT:X=70
50 FOR T=4 TO -4 STEP -1:FOR S=1 TO 10
60 PSET (X,Y),2:X=X+S:Y=Y+T
70 NEXT:X=70:Y=100:NEXT
80 X=10:Y=100:GOTO 130
100 IF INKEY$ <>"" THEN WIDTH 80:SCREEN 0:CLS:LIST
110 GOTO 100
120 SCREEN 1:CLS:X=10:Y=100
130 FOR T=1 TO 10 STEP 1:FOR S= -T TO T:X=X+0.2
140 LINE (X,Y+T)-(X,Y-T),2:PSET (X,Y+T),3:PSET (X,Y-T),3:IF T=1 THEN PSET (X,Y),3
150 NEXT::NEXT
160 FOR T=10 TO 1 STEP -1:FOR S= -T TO T:X=X+0.2
170 LINE (X,Y+T)-(X,Y-T),1:PSET (X,Y+T),3:PSET (X,Y-T),3
180 NEXT::NEXT:PSET (X,Y),3:PAINT (X-10,Y),3,3
200 GOTO 100
```
{% endraw %}

## ROUNDER1.BAS

{% raw %}
```bas
10 WIDTH 80:SCREEN 0:COLOR 2,1,4:CLS
20 LINE INPUT "X Coordinate (1 to 319):";X$:X=VAL(X$):X$="":IF X=0 THEN X=160
25 IF X>319 OR X<1 THEN 20
26 M=X:C=X+23.1014
30 LINE INPUT "Y Coordinate (1 to 199):";Y$:Y=VAL(Y$):Y$="":IF Y=0 THEN Y=100
35 IF Y>199 OR Y<1 THEN 30
36 N=Y
40 LINE INPUT "Size (1 to 10):";S$:L=VAL(S$):S$="":IF L=0 THEN L=1
50 IF L>10 OR L<1 THEN 40
90 X=X-23.1014:L=INT (L)
100 SCREEN 1:CLS
110 FOR T=0 TO L+9 STEP 0.5:FOR S= -T TO T:X=X+(L/10)
120 LINE (X,Y+T)-(X,Y-T),2:PSET (X,Y+T),3:PSET (X,Y-T),3:IF T=1 THEN PSET (X,Y),3
130 NEXT::NEXT:PRINT X:X=X+1
140 FOR T=L+9 TO 0 STEP -0.5:FOR S= -T TO T:X=X+(L/10)
150 LINE (X,Y+T)-(X,Y-T),1:PSET (X,Y+T),3:PSET (X,Y-T),3
160 NEXT::NEXT:PSET (X,Y),3:'CIRCLE (M,N),12,3:PAINT (M,N),2,3
170 IF INKEY$ <>"" THEN WIDTH 80:SCREEN 0:CLS:LIST
180 GOTO 170
```
{% endraw %}

## ROUNDER2.BAS

{% raw %}
```bas
10 WIDTH 80:SCREEN 0:COLOR 2,1,4:CLS
20 LINE INPUT "X Coordinate (1 to 319):";X$:X=VAL(X$):X$="":IF X=0 THEN X=160
25 IF X>319 OR X<1 THEN 20
26 M=X:C=X+23.1014
30 LINE INPUT "Y Coordinate (1 to 199):";Y$:Y=VAL(Y$):Y$="":IF Y=0 THEN Y=100
35 IF Y>199 OR Y<1 THEN 30
36 N=Y
40 LINE INPUT "Size (1 to 10):";S$:L=VAL(S$):S$="":IF L=0 THEN L=2
50 IF L>10 OR L<1 THEN 40
90 X=X-23.1014:L=INT (L)
100 SCREEN 1:CLS
110 FOR T=0 TO L+9 STEP 0.5:FOR S= -T TO T:X=X+(L/10)
120 LINE (X,Y+T)-(X,Y-T),2:PSET (X,Y+T),3:PSET (X,Y-T),3:IF T=1 THEN PSET (X,Y),3
130 NEXT::NEXT:PRINT X:X=X+1
140 FOR T=L+9 TO 0 STEP -0.5:FOR S= -T TO T:X=X+(L/10)
150 LINE (X,Y+T)-(X,Y-T),2:PSET (X,Y+T),3:PSET (X,Y-T),3
160 NEXT::NEXT:PSET (X,Y),3:'CIRCLE (M,N),12,3:PAINT (M,N),2,3
165 GOTO 200
170 IF INKEY$ <>"" THEN WIDTH 80:SCREEN 0:CLS:LIST
180 GOTO 170
200 X=M:Y=N
210 X=X-23.1014:L=INT (L)
220 FOR T=0 TO L+9 STEP 0.5:FOR S= -T TO T:X=X+(L/10)
230 PSET (X,Y+T),1:PSET (X,Y-T),1
240 NEXT::NEXT:PRINT X:X=X+1
250 FOR T=L+9 TO 0 STEP -0.5:FOR S= -T TO T:X=X+(L/10)
260 PSET (X,Y+T),1:PSET (X,Y-T),1
270 NEXT::NEXT
275 PAINT (M,N),3,1:PAINT (M,N),2,1:GOTO 275
280 GOTO 170
```
{% endraw %}

## ROUNDER3.BAS

{% raw %}
```bas
0 '     FINAL
1 '   By Robbie Khedouri
2 ' This is the finished product. The
3 ' adjustable parameters are :color,
4 ' size, arc ( if arc>5 then it will
5 ' work vertically) and placement (the
6 ' placement formula is on lines 120 and
7 ' 130).
10 WIDTH 80:SCREEN 0:COLOR 2,1,4:CLS
20 LINE INPUT "X Coordinate (1 to 319):";X$:X=VAL(X$):X$="":IF X=0 THEN X=160
30 IF X>319 OR X<1 THEN 20
40 LINE INPUT "Y Coordinate (1 to 199):";Y$:Y=VAL(Y$):Y$="":IF Y=0 THEN Y=100
50 IF Y>199 OR Y<1 THEN 40
60 LINE INPUT "Size (1 to 10):";S$:L=VAL(S$):S$="":IF L=0 THEN L=2
70 IF L>10 OR L<1 THEN 60
80 LINE INPUT "Color (1 to 3):";C$:Q=VAL(C$):C$="":IF Q=0 THEN Q=2
90 IF Q>3 OR Q<1 THEN 80
100 LINE INPUT "Arc (1 to 10):";A$:A=VAL(A$):A$="":IF A=0 THEN A=2
110 IF A>10 OR A<1 THEN 100
120 IF A>5 THEN A=A-5:A=A/5:L=L/2:Y=Y-11/A-(L*(L/10)):FLAG=1:GOTO 140
130 L=L/2:A=A/5:X=X-11/A-(L*(A*10))
140 SCREEN 1:CLS:M=X:N=Y
150 FOR T=0 TO 10 STEP A:FOR S= -T TO T
160 IF FLAG=0 THEN X=X+(L/10):LINE (X,Y+T)-(X,Y-T),Q:PSET (X,Y+T),Q MOD 3 +1:PSET (X,Y-T),Q MOD 3 +1:IF T=1 THEN PSET (X,Y),Q MOD 3 +1
170 IF FLAG=1 THEN Y=Y+(L/10):LINE (X+T,Y)-(X-T,Y),Q:PSET (X+T,Y),Q MOD 3 +1:PSET (X-T,Y),Q MOD 3 +1:IF T=1 THEN PSET (X,Y),Q MOD 3 +1
180 NEXT::NEXT:X=INT (X):Y=INT(Y)
190 FOR T=10 TO 0 STEP -A:FOR S= -T TO T
200 IF FLAG=0 THEN X=X+(L/10):LINE (X,Y+T)-(X,Y-T),Q:PSET (X,Y+T),Q MOD 3 +1:PSET (X,Y-T),Q MOD 3 +1:IF T=1 THEN PSET (X,Y),Q MOD 3 +1
210 IF FLAG=1 THEN Y=Y+(L/10):LINE (X+T,Y)-(X-T,Y),Q:PSET (X+T,Y),Q MOD 3 +1:PSET (X-T,Y),Q MOD 3 +1:IF T=1 THEN PSET (X,Y),Q MOD 3 +1
220 NEXT::NEXT:PSET (X,Y),Q MOD 3 +1:PSET (M,N),Q MOD 3 +1
230 GOTO 260
240 IF INKEY$ <>"" THEN 10:WIDTH 80:SCREEN 0:CLS:LIST -220
250 GOTO 240
260 X=M:Y=N
270 FOR T=0 TO 10 STEP A:FOR S= -T TO T
280 IF FLAG=0 THEN X=X+(L/10):PSET (X,Y+T),Q MOD 3 -1:PSET (X,Y-T),Q MOD 3 -1
290 IF FLAG=1 THEN Y=Y+(L/10):PSET (X+T,Y),Q MOD 3 -1:PSET (X-T,Y),Q MOD 3 -1
300 NEXT::NEXT:X=INT (X):Y=INT (Y)
310 FOR T=10 TO 0 STEP -A:FOR S= -T TO T
320 IF FLAG=1 THEN Y=Y+(L/10):PSET (X+T,Y),Q MOD 3 -1:PSET (X-T,Y),Q MOD 3 -1
330 IF FLAG=0 THEN X=X+(L/10):PSET (X,Y+T),Q MOD 3 -1:PSET (X,Y-T),Q MOD 3 -1
340 NEXT::NEXT
350 PAINT (M,N),3,1:PAINT (M,N),2,1
360 GOTO 240
```
{% endraw %}

## ROUNDER4.BAS

{% raw %}
```bas
10 WIDTH 80:SCREEN 0:COLOR 2,1,4:CLS
20 LINE INPUT "X Coordinate (1 to 319):";X$:X=VAL(X$):X$="":IF X=0 THEN X=160
30 IF X>319 OR X<1 THEN 20
40 M=X:C=X+23.1014
50 LINE INPUT "Y Coordinate (1 to 199):";Y$:Y=VAL(Y$):Y$="":IF Y=0 THEN Y=100
60 IF Y>199 OR Y<1 THEN 50
70 N=Y
80 LINE INPUT "Size (1 to 10):";S$:L=VAL(S$):S$="":L=L*2:IF L=0 THEN L=2
90 IF L>40 OR L<1 THEN 80
93 LINE INPUT "Arc (1 to 10):";A$:A=VAL(A$):A$="":IF A=0 THEN A=2
95 IF A>10 OR A<1 THEN 93
100 X=X-((L+1)/(A/10))+12
103 IF A>5 THEN A=A-5:FLAG=1
110 SCREEN 1:CLS
120 FOR T=0 TO L STEP A/10:FOR S= -T TO T STEP L
130 IF FLAG=0 THEN X=X+(L/10):LINE (X,Y+T)-(X,Y-T),2:PSET (X,Y+T),3:PSET (X,Y-T),3:IF T=1 THEN PSET (X,Y),3
135 IF FLAG=1 THEN Y=Y+(L/10):LINE (X+T,Y)-(X-T,Y),2:PSET (X+T,Y),3:PSET (X-T,Y),3:IF T=1 THEN PSET (X,Y),3
140 NEXT::NEXT:PRINT X:X=X+1
150 FOR T=L TO 0 STEP -A/10:FOR S= -T TO T STEP L:X=X+(L/10)
160 LINE (X,Y+T)-(X,Y-T),2:PSET (X,Y+T),3:PSET (X,Y-T),3
170 NEXT::NEXT:PSET (X,Y),3:'CIRCLE (M,N),12,3:PAINT (M,N),2,3
180 GOTO 210
190 IF INKEY$ <>"" THEN WIDTH 80:SCREEN 0:CLS:LIST
200 GOTO 190
210 X=M:Y=N
220 X=X-23.1014:L=INT (L)
230 FOR T=0 TO L+9 STEP 0.5:FOR S= -T TO T:X=X+(L/10)
240 PSET (X,Y+T),1:PSET (X,Y-T),1
250 NEXT::NEXT:PRINT X:X=X+1
260 FOR T=L+9 TO 0 STEP -0.5:FOR S= -T TO T:X=X+(L/10)
270 PSET (X,Y+T),1:PSET (X,Y-T),1
280 NEXT::NEXT
290 PAINT (M,N),3,1:PAINT (M,N),2,1:GOTO 290
300 GOTO 190
```
{% endraw %}

## SQUARE.BAS

{% raw %}
```bas
10 SCREEN 1:COLOR 1:KEY OFF:CLS
20 FOR X=1 TO 320
30 C=X MOD 3+1
40 A=X MOD 4
50 DRAW "C=C;A=A;U=X;"
60 FOR T=1 TO 100:NEXT
70 COLOR ,X MOD 2
80 NEXT
90 GOTO 10
```
{% endraw %}

## SWIRL.BAS

{% raw %}
```bas
0 '  YET ANOTHER GRAPHICS DEMO
1 ' BY ROBBIE KHEDOURI
10 KEY OFF:SCREEN 1:CLS
20 FOR T=0 TO 199 STEP 4
30 LINE (0,T)-(199-T,0),T MOD 3 +1
40 NEXT
50 FOR T=0 TO 199 STEP 4
60 LINE (T,199)-(199,199-T),T MOD 3 +1
70 NEXT
80 FOR T=0 TO 199 STEP 4
90 LINE (T,0)-(199,0+T),T MOD 3 +1
100 NEXT
110 FOR T=0 TO 199 STEP 4
120 LINE (0,T)-(T,199),T MOD 3 +1
130 NEXT
```
{% endraw %}

## TRIANGLE.BAS

{% raw %}
```bas
10 SCREEN 0:WIDTH 40:KEY OFF:COLOR 2,4,1:CLS
20 INPUT "X COORDINATE:",X
30 INPUT "Y COORDINATE:",Y
40 INPUT "TO X COORDINATE:",X1
50 INPUT "TO Y COORDINATE:",Y1
60 INPUT "LENGTH OF ONE SIDE:",L
70 IF ABS(X-X1)=ABS (Y-Y1) THEN 20
80 SCREEN 1:COLOR 1,0
90 CLS:LINE (X,Y)-(X1,Y1)
100 LINE -(X-L,Y+L)
110 LINE -(X,Y)
120 GOTO 120
```
{% endraw %}

## WALLS.BAS

{% raw %}
```bas
0 ' OH NO, ANOTHER ONE!!
1 ' BY ROBBIE KHEDOURI
10 SCREEN 1:KEY OFF:CLS
20 FOR T=0 TO 199
30 LINE (T,0)-(0,199),T MOD 3 +1
40 NEXT
50 FOR T=0 TO 199
60 LINE (0,0)-(T,199),T MOD 3 +1
70 NEXT
80 FOR T=199 TO 100 STEP -1
90 LINE (0,T)-(199,0),T MOD 3 +1
100 NEXT
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0176

     Volume in drive A has no label
     Directory of A:\

    CIRCLE   BAS       138   1-01-80  12:09a
    CIRCLOOP ASC      1536   7-20-82   9:34p
    CIRCLOOP BAS      1024   7-15-82  10:33p
    CRC      TXT      1734  11-15-84   6:58a
    CRCK4    COM      1536  10-21-82   7:54p
    CURVE    BAS       285   1-01-80  12:15a
    CURVE2   BAS       790   1-01-80  12:42a
    CURVE3   BAS      1210   1-01-80   1:28a
    DOWN     BAS       349   1-01-80   2:29a
    JAIME    BAS       299   1-01-80  12:33a
    NEWYEAR  DOC     10042   1-01-85  12:52a
    NEWYEAR  EXE     43648   1-01-85  12:27a
    NEWYEAR  PAS     11227   3-15-84   2:30p
    NUDE     BAS      5901  10-04-25   1:29p
    NYTEST   BAT        76   3-15-84   1:45p
    NYTEST1  BAT        76   3-15-84  10:03a
    ROUNDER  BAS       519   1-01-80   1:07a
    ROUNDER1 BAS       666   1-01-80   1:00a
    ROUNDER2 BAS       936   1-01-80   1:14a
    ROUNDER3 BAS      1867   1-01-80   2:20a
    ROUNDER4 BAS      1149   1-01-80  12:22a
    SPACEVAD EXE      9216   1-28-84   9:46p
    SQUARE   BAS       132   1-01-80  12:07a
    SWIRL    BAS       300   1-01-80   3:40a
    TRIANGLE BAS       272   1-01-80  12:40a
    WALLS    BAS       227   1-01-80   3:47a
    XXX               1536   6-04-84  10:11p
           27 file(s)      96691 bytes
                           57344 bytes free
