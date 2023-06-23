---
layout: page
title: "PC-SIG Diskette Library (Disk #105)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0105/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0105"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-PROFESSOR"

    PC-PROFESSOR is a popular tutorial for teaching the BASIC
    programming language. It has an easy-to-understand, well-organized
    presentation and a comprehensive keyboard tutorial, although it is not
    overly interactive. The program also offers four chapters of indexed
    documentation for quick-referencing capability. It might be helpful to
    have at least a fundamental knowledge of BASIC before using this
    tutorial, but it is primarily for beginning programmers.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## A0.BAS

{% raw %}
```bas
10 ' ====> A0.bas
20 OPEN"i",#1,"data.dat":INPUT#1,MONO,LSN$,PAGE:CLOSE
30 IF MONO THEN C1=7:C2=0:C3=8:C4=2 ELSE C1=(VAL(RIGHT$(TIME$,2)) MOD 6)+2:C2=0:C4=0:C3=(C1+2)+(6*(C1>5))
40 KEY 1,"RUN"+CHR$(34)+"BACKUP"+CHR$(34)+CHR$(13)
50 KEY 2,"RUN"+CHR$(34)+"FORWARD"+CHR$(34)+CHR$(13)
60 KEY 3,"RUN"+CHR$(34)+"REPEAT"+CHR$(34)+CHR$(13)
70 FOR I=4 TO 7:KEY I,"":NEXT I
80 KEY 8,"RUN"+CHR$(34)+"a0"+CHR$(34)+CHR$(13)
90 KEY 9,"RUN"+CHR$(34)+"CONTENTS"+CHR$(34)+CHR$(13)
100 KEY 10,"RUN"+CHR$(34)+"INDEX"+CHR$(34)+CHR$(13)
110 SCREEN 0,0,0:WIDTH 80:KEY OFF:COLOR C2,C1:CLS
120 TEMP$=CHR$(31)+CHR$(29)+CHR$(178)
130 TASSLE$=CHR$(218)+CHR$(31)+CHR$(29)+CHR$(179)+CHR$(31)+CHR$(29)+CHR$(234)+TEMP$+TEMP$+TEMP$+TEMP$+TEMP$+TEMP$+TEMP$+TEMP$+TEMP$
140 LOCATE 2,24,0:PRINT "The BASIC Prof. -- Beginning BASIC"
150 LOCATE 4,20:PRINT TASSLE$:LOCATE 4,21:PRINT STRING$(19,196);STRING$(2,219)
160 LOCATE 5,21:PRINT STRING$(40,219):LOCATE 6,26:PRINT STRING$(30,219)
170 LOCATE 8,38:PRINT "Press:"
180 LOCATE 10,24:COLOR C1,C2:PRINT " K ";:COLOR C2,C1:PRINT "for the keyboard introduction,"
190 LOCATE 11,24:COLOR C1,C2:PRINT " 1 ";:COLOR C2,C1:PRINT "to begin lesson number one,"
200 LOCATE 12,24:COLOR C1,C2:PRINT " 2 ";:COLOR C2,C1:PRINT "to begin lesson number two,"
210 LOCATE 13,24:COLOR C1,C2:PRINT " 3 ";:COLOR C2,C1:PRINT "to begin lesson number three,"
220 LOCATE 14,24:COLOR C1,C2:PRINT " 4 ";:COLOR C2,C1:PRINT "to begin lesson number four,"
230 LOCATE 15,24:COLOR C1,C2:PRINT " I ";:COLOR C2,C1:PRINT "to see the index,"
240 LOCATE 16,24:COLOR C1,C2:PRINT " T ";:COLOR C2,C1:PRINT "to see the table of contents, or"
250 LOCATE 17,24:COLOR C1,C2:PRINT " X ";:COLOR C2,C1:PRINT "to exit the BASIC Prof program."
260 LOCATE 21,14:PRINT"The PC-Prof.":LOCATE 22,14:PRINT"P.O. Box 26":LOCATE 23,14:PRINT "Salina, Kansas":LOCATE 24,14:PRINT "67402-0016";
265 LOCATE 21,44:PRINT"Make Copies":LOCATE 22,44:PRINT"For Your Friends.":LOCATE 23,44:PRINT"":LOCATE 24,44:PRINT"";
270 IF INKEY$<>"" THEN 270
280 LSN$=INKEY$:IF LSN$="" THEN 280
290 IF LSN$="K" OR LSN$="k" THEN RUN"k0"
300 IF LSN$>="1" AND LSN$<="4" THEN OPEN"o",#1,"data.dat":WRITE#1,MONO,LSN$,1:CLOSE:CHAIN "a"+LSN$,,ALL
310 IF LSN$="I" OR LSN$="i" THEN RUN"INDEX"
320 IF LSN$="T" OR LSN$="t" THEN RUN"CONTENTS"
330 IF LSN$<>"X" AND LSN$<>"x" THEN LOCATE 19,25:BEEP:PRINT "Press";:COLOR C1,C2:PRINT " K 1 2 3 4 I T ";:COLOR C2,C1:PRINT "or";:COLOR C1,C2:PRINT " X ";:COLOR C2,C1:PRINT "please.":GOTO 270
340 COLOR C1,C2:CLS:PRINT TAB(9);"You are about to exit the BASIC Prof program.  You will be returned to";"the Disk Operating System (DOS).  To get back into BASIC, type BASICA and"
350 PRINT "press the return key.  To get back to the BASIC Prof just turn the computer off";"for a few seconds, then turn it back on again."
360 LOCATE 6,1:PRINT "Press the ";:COLOR C2,C1:PRINT "space bar";:COLOR C1,C2:PRINT " to exit the program, or any other key to return to the menu."
370 IF INKEY$<>"" THEN 370
380 IF INPUT$(1)<>" " THEN 110
390 SYSTEM
```
{% endraw %}

## A1.BAS

{% raw %}
```bas
0 ' ====> A1.bas
1 PG=1:PG$="01":GOSUB 100:NEW
2 PG=2:PG$="02":GOSUB 100:NEW
3 PG=3:PG$="03":GOSUB 100:NEW
4 PG=4:PG$="04":GOSUB 100:CHAIN"variable",,ALL
5 PG=5:PG$="05":GOSUB 100:NEW
6 PG=6:PG$="06":GOSUB 100:CHAIN"let",,ALL
7 PG=7:PG$="07":GOSUB 100:NEW
8 PG=8:PG$="08":GOSUB 100:NEW
9 PG=9:PG$="09":GOSUB 100:NEW
10 PG=10:PG$="10":GOSUB 100:NEW
11 PG=11:PG$="11":GOSUB 100:NEW
12 PG=12:PG$="12":GOSUB 100:NEW
13 RUN "a0"
100 SCREEN 0,0,0:WIDTH 80:KEY OFF:COLOR C1,C2:CLS:OPEN "i",#1,"a"+LSN$+".txt"
101 FOR I=1 TO PG
102 LINE INPUT#1,A$:IF LEFT$(A$,5)<>"-----" THEN 102
103 NEXT I
104 LINE INPUT#1,A$:IF LEFT$(A$,5)="-----" THEN LIN=CSRLIN:CLOSE:GOTO 108
105 POS1=INSTR(A$,"|"):POS2=INSTR(A$,"~"):IF POS1=0 THEN PRINT A$:GOTO 104
106 PRINT LEFT$(A$,POS1-1);:COLOR C3,C4:PRINT MID$(A$,POS1+1,POS2-POS1-1);:COLOR C1,C2
107 A$=RIGHT$(A$,LEN(A$)-POS2):GOTO 105
108 COLOR C2,C1:LOCATE 25:PRINT "Pg "+LSN$+".";PG$;"  --";CHR$(26);"  F1 BACKUP  F2 FORWARD  F3 REPEAT  F8 MENU  F9 CONTENTS  F10 INDEX";:COLOR C1,C2:LOCATE LIN,1
109 OPEN "o",#1,"data.dat":WRITE#1,MONO,LSN$,PG:CLOSE:RETURN
```
{% endraw %}

## A1.TXT

{% raw %}
```
-----
Introduction to BASIC

        |BASIC~ is one of many computer |languages~.  The name BASIC is short for
|B~eginner's |A~ll-purpose |S~ymbolic |I~nstruction |C~ode.  Because it is one of the
easiest computer languages to learn and master, BASIC has become the most
popular language for the computer novice.

        BASIC consists of |statements~, |commands~ and |functions~.  These are
English words which have special meaning to the computer.  BASIC |programs~ are
simply many statements, commands and functions grouped together to perform a
specific task.

        In the following chapters, new statements, commands and functions will
be introduced to you one at a time.  You then will be given a chance to try
them out and see them in action.  |The most important thing to remember is to~
|try each one out~.  Don't worry about making mistakes, you won't hurt the
computer's feelings.  If you do make a mistake, the computer will tell you so.
If this happens, just try again, a little differently the second time.

        Remember to press |F2~ when you are ready to continue.
-----
The PRINT Statement

        The first thing we need to learn is how to make the computer write
something on the screen.  This is done with a |PRINT~ statement.  The PRINT
statement tells the computer to write on the screen whatever you put after the
PRINT.
                |YOU TYPE~                      THE COMPUTER PRINTS
        
                |PRINT 5~                               5

        If you want the computer to write the answer to a math problem, put the
problem after the PRINT.
                
                |YOU TYPE~                      THE COMPUTER PRINTS

                |PRINT 3+2~                             5

        Now try both of the above examples, by typing what is |under~ the words
|YOU TYPE~ and pressing the |return~ key.  Then remember to press |F2~ to continue.
-----
The PRINT Statement (continued)

        If you want the computer to print words on the screen, you have to
enclose the words in quotes (|" "~).

                |YOU TYPE~                      THE COMPUTER PRINTS

        |PRINT "Whatever comes to mind."~       Whatever comes to mind.

        If you want the computer to print both words and the answer to a math
problem, you must separate the two with either a comma (|,~) or a semi-colon (|;~).

                |YOU TYPE~                      THE COMPUTER PRINTS

        |PRINT "The answer to 3+2 is";3+2~      The answer to 3+2 is 5
        |PRINT "The answer to 3+2 is",3+2~      The answer to 3+2 is        5

        The difference between using the comma and the semi-colon is the amount
of space the computer leaves between items it prints.  Now try the three
examples above by typing what is under the words |YOU TYPE~.

(In IBM BASIC you may omit the semi-colon, but many versions require its use.)
-----
Variable

        The next thing you need to understand is a |variable~.  A variable is a
symbol (usually a letter of the alphabet) that is used to represent a number.
A variable can represents various values.  They are extremely important when
programming a computer.  Here is how a variable works:

        In the algebraic expression

                |9=X+3~,

        |X~ is the variable.  For the expression |9=X+3~ to be true, the value of |X~
must be |6~ (because |9~ and |6+3~ are equal).

        In the expression

                |SUM=A+B~,

        |SUM~, |A~ and |B~ are variables.  |A~ and |B~ may have any values, and the
variable |SUM~ is the total of those values.
-----
Variable (continued)

        As you can see, a variable name may be more than one letter of the
alphabet.  In fact, it can be upto 40 |characters~.  The first character of the
variable must be a letter, but the next 39 can be either letters or numerals.
There are many |reserved words~ that can not be used as variable names.  A list
of those words can be found by looking up |reserved words~ in your IBM BASIC
manual.

        Listed are invalid variable names and reasons why they are invalid.

        |FAT@~  - All characters must be letters or numerals, |@~ is neither.
        |2TALL~ - The first character must be a letter, |2~ is a numeral.
        |PRINT~ - |PRINT~ is a reserved word, as are all BASIC statements.

        It is a good idea to make variable names as descriptive as possible.
If you want to write a program that averages two numbers, use the variable
names |AVERAGE~, |NUM1~ and |NUM2~.  This helps you to identify what the variables
are used for, but it doesn't help the computer.  A variable name directs the
computer to a place in its memory where the value of that variable is stored.
-----
LET Statement

        The |LET~ statement assigns an expression to a variable.  In IBM BASIC,
the word LET is optional.  The equal sign is sufficient as in the following
examples:

                        |LET A=3~     or     |A=3~

        In both of these statements, the value |3~ is assigned to the variable |A~.

                    |LET SUM=A+B~     or     |SUM=A+B~

        Here, the sum of the variables |A~ and |B~ is assigned to the variable |SUM~.

                      |LET K=K+1~     or     |K=K+1~

        In algebra the expression |K=K+1~ would be false (how can a number be
equal to itself plus 1?).  But in BASIC this means that the |new~ value of |K~ will
be set equal to the |old~ value of |K~ plus |1~.
-----
PRINT and LET Statements

        Until a variable has been assigned a value (by using a LET statement),
it will be equal to zero.  If you use a variable in a PRINT statement, the
value of the variable will be PRINTed, and not the variable name.  Type in the
following five lines to see how the PRINT and LET statements work together.

        |PRINT NUM1;NUM2;SUM~
        |LET NUM1=45~
        |LET NUM2=5~
        |SUM=NUM1+NUM2~
        |PRINT "The sum of";NUM1;"and";NUM2;"is";SUM~
-----
Line numbers

        As you learned earlier, a program is a group of statements.  In order
for the computer to remember, organize and execute the statements in a program,
each statement must have a |line number~.  The computer performs each
statement in the order of its line number.

        In the following statements

                |10~ PRINT 3+2
                |20~ PRINT 3+3

        |10~ and |20~ are line numbers.
-----
LIST Command

        Typing |LIST~ and pressing return will print the program currently in
memory.  Type the following program and then type |LIST~ and press return.

                |10 PRINT 3+2~
                |20 PRINT 3+3~
                |30 PRINT 3+4~
                |40 PRINT 3+5~
-----
LIST Command (continued)

        The computer normally executes the program in numerical order beginning
with the lowest numbered line.  If you want to put the statement |PRINT 3+1~
before line |10~, then assign it a line number less than 10.

        Type in the following:

                |10 PRINT 3+2~
                |20 PRINT 3+3~
                |30 PRINT 3+4~
                |40 PRINT 3+5~
                 |5 PRINT 3+1~

        Now type |LIST~ and press return.  The LIST command will display the
program in numerical order.  Conventionally, programs are given line numbers in
increments of 10.  The computer will |re-number~ the lines for you if you type
the word |RENUM~ and press return.  Try this out and then |LIST~ the program
again to see what happens.
-----
RUN Command

        The |RUN~ command executes your program.  When you typed in PRINT 3+2
earlier and pressed return, the computer executed the PRINT immediately.  Now
when you place a line number before a statement, the computer places that
statement in its memory and waits for a RUN command to execute the program.

        Type in the following, type |RUN~ and press return.

                |10 PRINT 3+1~
                |20 PRINT 3+2~
                |30 PRINT 3+3~
                |40 PRINT 3+4;~
                |50 PRINT 3+5~

        (Note that the semi-colon keeps the |8~ on the same line as the |7~.)
-------
End of Lesson One

        This is the end of lesson one.  Review the statements and commands
you've covered in this lesson before going on.  BASIC is an easy language to
learn, but you shouldn't try to learn everything at once.  Take some time to
play with what you've learned before beginning lesson two.

	If you are using the BASIC Prof,		|The PC-Prof.~
let me know who you are!  Send your name		|P.O. Box 26~
and address to:						|Salina, Kansas~
							|67402-0026~

	If you like the Prof, include a contribution ($30 - $50 suggested) to
help support development of additional volumes.  Please copy and share the
Prof. with other IBM P.C. users.
-----
```
{% endraw %}

## A2.BAS

{% raw %}
```bas
0 ' ====> A2.bas
1 PG=1:PG$="01":GOSUB 100:NEW
2 PG=2:PG$="02":GOSUB 100:NEW
3 PG=3:PG$="03":GOSUB 100:NEW
4 PG=4:PG$="04":GOSUB 100:NEW
5 PG=5:PG$="05":GOSUB 100:NEW
6 PG=6:PG$="06":GOSUB 100:NEW
7 PG=7:PG$="07":GOSUB 100:NEW
8 PG=8:PG$="08":GOSUB 100:NEW
9 PG=9:PG$="09":GOSUB 100:NEW
10 PG=10:PG$="10":GOSUB 100:NEW
11 RUN "a0"
100 SCREEN 0,0,0:WIDTH 80:KEY OFF:COLOR C1,C2:CLS:OPEN "i",#1,"a"+LSN$+".txt"
101 FOR I=1 TO PG
102 LINE INPUT#1,A$:IF LEFT$(A$,5)<>"-----" THEN 102
103 NEXT I
104 LINE INPUT#1,A$:IF LEFT$(A$,5)="-----" THEN LIN=CSRLIN:CLOSE:GOTO 108
105 POS1=INSTR(A$,"|"):POS2=INSTR(A$,"~"):IF POS1=0 THEN PRINT A$:GOTO 104
106 PRINT LEFT$(A$,POS1-1);:COLOR C3,C4:PRINT MID$(A$,POS1+1,POS2-POS1-1);:COLOR C1,C2
107 A$=RIGHT$(A$,LEN(A$)-POS2):GOTO 105
108 COLOR C2,C1:LOCATE 25:PRINT "Pg "+LSN$+".";PG$;"  --";CHR$(26);"  F1 BACKUP  F2 FORWARD  F3 REPEAT  F8 MENU  F9 CONTENTS  F10 INDEX";:COLOR C1,C2:LOCATE LIN,1
109 OPEN "o",#1,"data.dat":WRITE#1,MONO,LSN$,PG:CLOSE:RETURN
```
{% endraw %}

## A2.TXT

{% raw %}
```
-----
INPUT Statement

        The |INPUT~ statement allows you to input from the keyboard while the
program is running.  When the computer comes to an INPUT statement, the program
stops, displays a question mark, and waits until you enter a number, then it
continues with the next line.  After the word INPUT you need to place a
variable.

        example:  10 INPUT X

        You can place a |prompt~ (words, in quotes, to remind you what to
enter) between the word INPUT and the variable.  If a semi-colon follows the
prompt, then a question mark will be displayed after it.  If a comma follows
the prompt, then no question mark will be displayed.
-----
INPUT Statement (continued)

        This is what an INPUT statement might look like in a program.

                |10 INPUT "What is X equal to";X~
                |20 PRINT X;"+ 3 =";X+3~

        Try typing in this program, running it and watch what happens.  After
you do that, change the semi-colon in line |10~ to a comma and |RUN~ it.  To
execute the program again for a different variable value, type |RUN~ and put in a
different number when the computer asks for X.
-----
String variables

        Variables can represent letters and text as well as numbers.  A
variable representing a string of letters is called a |string variable~.

        String variables are written like |numeric~ variables with a trailing
dollar sign.
                
                example: |XYZ$~="Greetings from sensible software!"
 
        You can input a string variable just like you did a numeric variable.
Try running this sample program.

        |10 INPUT "What is your name";N$~
        |20 PRINT "It's nice to meet you ";N$;", I'm the IBM Personal Computer."~
-----
More on the LET Statement

        Now that you can input and output from the computer, let's really make
the computer do something.  Mathematical calculations can be performed in BASIC
with the LET statement you were introduced to in lesson one.  The LET statement
will set a variable equal to some numeric expression.  Here are the basic
|arithmetic operators~ and how they are handled in BASIC.

              FORM              DESCRIPTION             EXAMPLES
                |+~               addition              A|+~B   6|+~12
                |-~               subtraction           A|-~B   23|-~7
                |*~               multiplication        A|*~B   3|*~(2-1)
                |/~               division              A|/~B   (8+2)|/~4
                |^~               exponentiation        A|^~B   (5*3)|^~2
-----
More on LET (continued)

        Here are two specific examples of the LET statement.

                CELSIUS TO FAHRENHEIT CONVERSION

                        |10 LET F=1.8*C+32~

                YEARLY INTEREST

                        |10 INTEREST=PRINCIPLE*RATE~

        Try writing a program that lets you input a Celsius temperature and
have the computer convert it to Fahrenheit and PRINT the result.  (Use the
|INPUT~, |LET~ and |PRINT~ statements.)  Remember, the IBM version of BASIC allows
you to omit the word LET if you wish.
-----
More LET (continued)

        Here is one way to write the previous program.

                |10 INPUT "Enter the Celsius temperature.",C~
                |20 F=1.8*C+32~
                |30 PRINT F;"Fahrenheit equals";C;"Celsius."~
-----
SAVE Command

        You can |SAVE~ a program on a diskette with the SAVE command.  This
will save your program so that you can retrieve and run it again.  You must
have a diskette ready for use to use this command (you can SAVE a few programs
on the BASIC Prof diskette, but you should use a different diskette for large
programs.)

        To SAVE a program, type |SAVE"name"~.  The |name~ can be anything you wish,
but must be eight or less characters with no blank spaces.

        |Invalid characters are~

                        |+ = : ; , . ?~

        Type in the following program.  SAVE it with the name "INTEREST" by
typing |SAVE"INTEREST"~.

        |10 INPUT "Enter the amount of principle.",PRIN~
        |20 INPUT "What is the interest rate (use decimal)";RATE~
        |30 INTEREST=PRIN*RATE~
        |40 PRINT "$";INTEREST;"on $";PRIN;"at";RATE;"%"~
------
LOAD Command

        The |LOAD~ command retrieves a program from the diskette and |loads~ it
into the computer's memory.  Hopefully you were able to SAVE your program from
the previous page.  The next time you want to use it, type |LOAD"name"~ (in
this case |name~ is |INTEREST~).  Typing LIST will print the program on the screen.

        Try the |LOAD~ command now and |LIST~ the program.
------
NEW Command

        The |NEW~ command |deletes~ the program that is currently in memory.
It will also clear all variables.  When you want to begin writing a new
program, you need to clear any old program remaining in the computer's memory.
Otherwise, you may get lines from the old program mixed in with lines from the
new program.

        The format for the NEW command is simply type NEW and press return.
Try out the NEW command by typing |LOAD"INTEREST"~, press return and |LIST~
the program.  Now type |NEW~ and press return and try to |LIST~ the program
again.  This will |not~ erase the program from the |diskette~, |only~ from the
computer's |memory~.
-----
End of Lesson Two

        One more lesson finished.  These first two lessons are the foundation
for the rest that you will learn.  From this point on, programming really
starts getting fun.  By the end of the next lesson you should be able to write
your own simple games, but only if you understand everything covered so far.
If you don't really understand about variables or the INPUT statement now,
review the first two lessons before you continue with lesson three.

	If you are using the BASIC Prof,		|The PC-Prof.~
let me know who you are!  Send your name		|P.O. Box 26~
and address to:						|Salina, Kansas~
							|67402-0026~

	If you like the Prof, include a contribution ($30 - $50 suggested) to
help support development of additional volumes.  Please copy and share the
Prof. with other IBM P.C. users.
-----
```
{% endraw %}

## A3.BAS

{% raw %}
```bas
0 ' ====> A3.bas
1 PG=1:PG$="01":GOSUB 100:NEW
2 PG=2:PG$="02":GOSUB 100:NEW
3 PG=3:PG$="03":GOSUB 100:CHAIN "data1",,ALL
4 PG=4:PG$="04":GOSUB 100:CHAIN "ifthen",,ALL
5 PG=5:PG$="05":GOSUB 100:CHAIN "data2",,ALL
6 PG=6:PG$="06":GOSUB 100:NEW
7 PG=7:PG$="07":GOSUB 100:NEW
8 PG=8:PG$="08":GOSUB 100:NEW
9 PG=9:PG$="09":GOSUB 100:NEW
10 PG=10:PG$="10":GOSUB 100:NEW
11 RUN "a0"
100 SCREEN 0,0,0:WIDTH 80:KEY OFF:COLOR C1,C2:CLS:OPEN "i",#1,"a"+LSN$+".txt"
101 FOR I=1 TO PG
102 LINE INPUT#1,A$:IF LEFT$(A$,5)<>"-----" THEN 102
103 NEXT I
104 LINE INPUT#1,A$:IF LEFT$(A$,5)="-----" THEN LIN=CSRLIN:CLOSE:GOTO 108
105 POS1=INSTR(A$,"|"):POS2=INSTR(A$,"~"):IF POS1=0 THEN PRINT A$:GOTO 104
106 PRINT LEFT$(A$,POS1-1);:COLOR C3,C4:PRINT MID$(A$,POS1+1,POS2-POS1-1);:COLOR C1,C2
107 A$=RIGHT$(A$,LEN(A$)-POS2):GOTO 105
108 COLOR C2,C1:LOCATE 25:PRINT "Pg "+LSN$+".";PG$;"  --";CHR$(26);"  F1 BACKUP  F2 FORWARD  F3 REPEAT  F8 MENU  F9 CONTENTS  F10 INDEX";:COLOR C1,C2:LOCATE LIN,1
109 OPEN "o",#1,"data.dat":WRITE#1,MONO,LSN$,PG:CLOSE:RETURN
```
{% endraw %}

## A3.TXT

{% raw %}
```
-----
DATA and READ Statements

        In the last lesson you learned about the INPUT statement.  Another way
  to tell the computer something is with |DATA~ and |READ~ statements.

        The DATA statement is |not~ executed.  Data is taken from it when the
computer does a READ statement.  After the word DATA, you put numbers or groups
of letters in quotes separating them with commas.  This creates a DATA line.
The |first~ time the computer comes across a READ statement it will read the
|first~ value in the DATA line; the |second~ time, the |second~ value, and so on.

        Try typing in and |RUN~ning |either~ of the following two examples.

        |10 DATA 7,11                   10 DATA "FRED","BARNEY"~
        |20 READ X                      20 READ X$~
        |30 PRINT X                     30 PRINT X$~
        |40 READ X                      40 READ X$~
        |50 PRINT X                     50 PRINT X$~
-----
DATA and READ Statements (continued)

        When the computer runs out of data, an |error~ stops the program and an
|error message~ is displayed.  Try typing in the following program.

        |10 DATA 10,"Twenty"~
        |20 READ X~
        |30 PRINT 1,X~
        |40 READ X$~
        |50 PRINT 2,X$~
        |60 READ X~
        |70 PRINT 3,X~
        
        Because there is no third value to read, the computer runs out of data
and stops, giving an |error~ in line number |60~.  |RUN~ it and see what happens.
-----
GOTO Statement

        The |GOTO~ statement is the simplest to understand, yet one of the most
important statements in BASIC.  It tells the computer to go to a different line
number instead of doing the next one in order.

        In the following sample program, the computer will |loop~ (re-do over
and over) lines |20~, |30~ and |40~ until it runs out of data.
-----
IF THEN Statement

        The |IF THEN~ statement gives the computer a |choice~ of what to do.  |IF~ a
condition is |true~ the computer does what follows the word |THEN~, |IF~ it is |not~
|true~, the computer goes to the |next line~.  Usually a GOTO statement will
follow the THEN.

        |Relational operators~ compare two values in an IF THEN statement. The
most common relational operators follow.

        |=~  equal to           |<~ less than        |<=~ less than or equal to
        |<>~ not equal to       |>~ greater than     |>=~ greater than or equal to
-----
IF THEN Statement (continued)

        By placing a unique number at the end of a DATA line, and following the
READ statement with an IF THEN statement to test for that number, you can avoid
the |Out of DATA~ error.  This program finds the average of the numbers in a
DATA statement, and uses |99~ as an |end of data~ signal.
-----
IF THEN Statement (continued)

        Here are a couple sample programs.  One will count the numeric
constants in a DATA statement.  The other will pick the numbers greater than 50
out of a DATA statement, and print them.  In both cases if the number is |999~
the computer will stop.  Try typing in and |RUN~ning them.

        |10 DATA 10,69,2,45,100,74,12,999       10 DATA 10,69,2,45,100,74,12,999~
        |20 READ X                              20 READ X~
        |30 IF X=999 THEN GOTO 60               30 IF X=999 THEN STOP~
        |40 LET K=K+1                           40 IF X<=50 THEN GOTO 20~
        |50 GOTO 20                             50 PRINT X~
        |60 PRINT K                             60 GOTO 20~
-----
Logical Operators

        |Logical operators~ can make the IF THEN statement more versatile.  The
logical operators in IBM BASIC are:

                         |AND~, |OR~, |NOT~, |XOR~, |IMP~, |EQV~
        
        The first two are pretty straight forward, and are the most widely
used.  Consult your IBM BASIC manual for truth tables and explanations of the
other operators.  The |AND~ and |OR~ operators are used when you want to test two
conditions with an |IF THEN~ statement.  Here is an example of their use in a
program.  Try typing it in and |RUN~ning it, then change the values in the DATA
statement and |RUN~ it again.

                |10 DATA 5,23,17,34,29,45,999~
                |20 READ X~
                |30 IF X=999 THEN GOTO 70~
                |40 IF X<20 OR X>30 THEN LET A=A+1~
                |50 IF X>=20 AND X<=30 THEN LET B=B+1~
                |60 GOTO 20~
                |70 PRINT A;"numbers either less than 20 or more than 30 and";~
                |B;"between 20 and 30."~
-----
ELSE Statement

        Another |option~ of the IF THEN statement is the |ELSE~ statement.
Without the ELSE, the program would |drop~ through the IF THEN and go to the
next line when the condition of the IF THEN is false.  If the word ELSE follows
the IF THEN, it will be executed rather than dropping through to the next line.

        Here is the last program modified to show the ELSE statement.  Type it
in and |RUN~ it.

                |10 DATA 5,23,17,34,29,45,999~
                |20 READ X~
                |30 IF X=999 THEN GOTO 60~
                |40 IF X<20 OR X>30 THEN LET A=A+1 ELSE LET B=B+1~
                |50 GOTO 20~
                |60 PRINT A;"numbers either less than 20 or more than 30 and";~
                |B;"between 20 and 30."~
-----
Multiple Statement Lines

        Another useful feature of BASIC on the IBM is the use of |multiple~
|statement~ lines.  You can put two or more statements on the same line number by
separating them with a colon (|:~).  This is very helpful with IF THEN
statements.

        Here is a sample program that illustrates the use of multiple statement
lines.  Type it in and |RUN~ it, then change the values in the DATA statement and
|RUN~ it again.

        |10 DATA 5,23,17,34,29,45,999~
        |20 READ X~
        |30 IF X=999 THEN PRINT A;"lower than 20,";B;"between 20 and 30, and";C;~
        |"above 30.":END~
        |40 IF X<20 THEN PRINT X;"is less than 20.":LET A=A+1:GOTO 20~
        |50 IF X<30 THEN PRINT X;"is between 20 and 30.":LET B=B+1:GOTO 20~
        |60 PRINT X;"is greater than 30.":LET C=C+1:GOTO 20~
-----
End of Lesson Three

        You have reached the end of lesson three.  This lesson contains some of
the most important concepts of programming.  Loops and conditionals will most
likely make up the major portion of any program you write.  Be sure you have a
thorough understanding of this lesson before going on to lesson four.

	If you are using the BASIC Prof,		|The PC-Prof.~
let me know who you are!  Send your name		|P.O. Box 26~
and address to:						|Salina, Kansas~
							|67402-0026~

	If you like the Prof, include a contribution ($30 - $50 suggested) to
help support development of additional volumes.  Please copy and share the
Prof. with other IBM P.C. users.
-----
```
{% endraw %}

## A4.BAS

{% raw %}
```bas
0 ' ====> A4.bas
1 PG=1:PG$="01":GOSUB 100:NEW
2 PG=2:PG$="02":GOSUB 100:NEW
3 PG=3:PG$="03":GOSUB 100:NEW
4 PG=4:PG$="04":GOSUB 100:NEW
5 PG=5:PG$="05":GOSUB 100:NEW
6 PG=6:PG$="06":GOSUB 100:NEW
7 PG=7:PG$="07":GOSUB 100:NEW
8 PG=8:PG$="08":GOSUB 100:NEW
9 PG=9:PG$="09":GOSUB 100:NEW
10 PG=10:PG$="10":GOSUB 100:NEW
11 PG=11:PG$="11":GOSUB 100:NEW
12 PG=12:PG$="12":GOSUB 100:NEW
13 PG=13:PG$="13":GOSUB 100:NEW
14 PG=14:PG$="14":GOSUB 100:NEW
15 CHAIN "a0"
100 SCREEN 0,0,0:WIDTH 80:KEY OFF:COLOR C1,C2:CLS:OPEN "i",#1,"a"+LSN$+".txt"
101 FOR I=1 TO PG
102 LINE INPUT#1,A$:IF LEFT$(A$,5)<>"-----" THEN 102
103 NEXT I
104 LINE INPUT#1,A$:IF LEFT$(A$,5)="-----" THEN LIN=CSRLIN:CLOSE:GOTO 108
105 POS1=INSTR(A$,"|"):POS2=INSTR(A$,"~"):IF POS1=0 THEN PRINT A$:GOTO 104
106 PRINT LEFT$(A$,POS1-1);:COLOR C3,C4:PRINT MID$(A$,POS1+1,POS2-POS1-1);:COLOR C1,C2
107 A$=RIGHT$(A$,LEN(A$)-POS2):GOTO 105
108 COLOR C2,C1:LOCATE 25:PRINT "Pg "+LSN$+".";PG$;"  --";CHR$(26);"  F1 BACKUP  F2 FORWARD  F3 REPEAT  F8 MENU  F9 CONTENTS  F10 INDEX";:COLOR C1,C2:LOCATE LIN,1
109 OPEN "o",#1,"data.dat":WRITE#1,MONO,LSN$,PG:CLOSE:RETURN
```
{% endraw %}

## A4.TXT

{% raw %}
```
-----
REM Statement

        All right!  You have successfully completed three lessons in BASIC.  By
now you should be fairly confident with the language.

        The |REM~ statement allows you to insert explanatory |rem~arks into the
program.  These remarks are |ignored~ by the computer when it executes the
program, but provide the programmer with information about the program.  They
appear only when you LIST the program.  The REM statement can begin with either
the letters |REM~ or an apostrophe (|'~) followed by the remark itself.

        Here is an example of REM statements in a program.

                10 DATA 45,24,97,65,47,15,80,38,77,999
                20 READ X:IF X=999 THEN 60      |'If end of data goto line 60.~
                30 IF X>=50 THEN LET G=G+1      |'Count numbers G.T.E. to 50.~
                40 IF X<50 THEN LET L=L+1       |'Count number L.T. 50.~
                50 GOTO 20                      |'Get the next number.~
                60 PRINT "Of the numbers,";L;"were less than 50 and";
                70 PRINT G;"were greater than or equal to 50."

        Try typing in and |RUN~ning this program.
-----
STOP and END Statements

        There are four ways to stop the execution of a program in BASIC.

        1.  The program automatically stops when it runs out of lines to
            execute.
        2.  |STOP~ Statement.  When the computer comes to a STOP statement, it
            prints |Break in N~ (where |N~ is the |line number~ of the STOP
            statement) and stops.
        3.  |END~ Statement.  This is similar to the STOP statement except that
            the computer does not print the Break message.
        4.  Pressing the |Ctrl~ key and the |Break~ key (Scroll lock) together
            stops the program during execution and prints a |Break in N~
            message.  If you want to continue with the program, simply type
            |CONT~ (short for |cont~inue) and press the return key.  If you haven't
            edited the program, the computer will continue with the program
            right where it was interrupted (this works if you used a STOP
            statement as well, but not if you used an END statement).
-----
STOP and END Statements (continued)

        Try out these statements and commands by typing in and |RUN~ning the
following program.

                |10 PRINT "Type CONT and press return."~
                |20 STOP~
                |30 PRINT "GOOD!  You continued the program."~
                |40 PRINT "Use the Ctrl and Break keys any time now!":GOTO 40~
-----
EDIT Command

        When you make (or discover) a mistake in a program line, you can
correct it by simply typing the line over.  However, it is much faster to use
the BASIC Program Editor.  To do this, simply type |EDIT N~ (where |N~ is the line
number to edit) and then move to the mistake using the cursor control keys, and
correct it by typing over, inserting or deleting.

        If you want to completely erase that line of the program, you can do so
by typing the line number itself and pressing return.  If there are several
lines you want to delete, type |DELETE N1-N2~ (where |N1~ is the first line and |N2~
is the last line to delete) and press return.  This will delete all lines
between and including |N1~ and |N2~.
-----
AUTO Command

        When you are first writing a program, you spend a good deal of time
just typing in the line numbers.  The |AUTO~ command will take care of that for
you.  Type the word AUTO and the computer will put the line numbers in
automatically.

        Here is the correct form, or syntax, for the AUTO command.

                                AUTO [|B~[,|I~]]

        |B~ is the line number at which the AUTO command will begin.  If you do
not give a value for |B~ the computer will |default~ to (automatically start
at) line number 10.

        |I~ is the increment value.  It is the value that will be added to each
line number to get the next line number.  If you do not enter a number for |I~,
it will default to 10.
-----
AUTO Command (continued)

        If you want to start at some line number other than 10, say 200, type
AUTO 200 and your line numbers will begin at 200 and increase in increments of
10.  If you want to start at 100 and increase by 5's then type AUTO 100,5.
When you finish typing in your program, shut off the AUTO command by pressing
the |Ctrl~ key and the |Break~ key together.

        Try typing in the following program using the AUTO command.

                |100 INPUT "What is the first number";A~
                |105 INPUT "What is the second number";B~
                |110 PRINT A;"+";"B";"=";A+B~
                |115 PRINT A;"-";"B";"=";A-B~
                |120 PRINT A;"*";"B";"=";A*B~
-----
TRON and TROFF Commands

        If a program doesn't work properly when you try running it, it is said
to have a |bug~ in it.  Much of a programmer's time is spent |de-bugging~ his
or her programs.  A feature that sometimes makes this easier is the |TRON~
command.  TRON is short for program |TR~acer |ON~.  When you type TRON and then RUN
your program, the computer will print each line number, in brackets (|[]~) as
it is executed.  Other program output will also be printed, but only the
executed line numbers will be printed in brackets.

        For this program:       |10 DATA 17,23,99~
                                |20 READ NUM~
                                |30 IF NUM<>99 THEN PRINT NUM:GOTO 20~
                                |40 PRINT "The END."~
        The output using TRON
        would look like this:   |[10][20][30] 17~
                                |[20][30] 23~
                                |[20][30][40]The END.~

        When you have found your bug and want to run your program without the
line numbers being displayed, type |TROFF~ which is short for program |TR~acer |OFF~.
This returns the computer to normal program execution.
-----
TRON and TROFF Commands (continued)

        The following program is supposed to count and print the values in a
DATA statement, but for some reason it gets stuck on the first value and goes
crazy.  By using the TRON and TROFF commands, try and find the bug in this
program.

                |10 DATA 34,67,12,9,65,38,84,999~
                |20 READ NUM:IF NUM=999 THEN GOTO 60~
                |30 COUNT=COUNT+1~
                |40 PRINT "Value number";COUNT;"is";NUM~
                |50 GOTO 30~
                |60 PRINT "There are";COUNT;"numbers in the data statement."~

        First, type in the program and try to |RUN~ it.  After a few seconds
press the |Ctrl~ and |Break~ keys to stop the program.  Then type |TRON~ to turn the
tracer on.  Again |RUN~ the program and when you have identified the problem,
stop the program and fix the bug.  Now turn the tracer off by typing |TRON~ and
|RUN~ the program a third time.
-----
TRON and TROFF Commands (continued)

        Here is the same program from the last page.  Hopefully you found the
bug in line |50~.

                10 DATA 34,67,12,9,65,38,84,999
                20 READ NUM:IF NUM=999 THEN GOTO 60
                30 COUNT=COUNT+1
                40 PRINT "Value number";COUNT;"is";NUM
                |50 GOTO 30~
                60 PRINT "There are";COUNT;"numbers in the data statement."

        The line should have read |50 GOTO 20~.  As it was, the program never
read a new value for the variable |NUM~, so it never got to |999~ to signal the
|end of DATA~.

        If you found the bug, congratulations!  If not make sure you understand
how the TRON and TROFF commands work and better luck next time.
-----
RND Function

        The |RND~ function returns a random number between 0 and 1.  If you
want a random number between 0 and 1000, then just multiply by 1000.

                example- LET |X=RND~       [this returns |X~ such that |0~ < |X~ <| 1~]
                         LET |Y=RND*100~   [this returns |Y~ such that |0 ~< |Y~ <| 100~]

        Here is a sample program that lets you input an |upper bound~ number,
and the computer prints a list of random numbers between 0 and your upper
bound.  You will have to use the |Ctrl~ and |Break~ keys to stop this program.

                |10 INPUT "Enter a number to be the upper bound.",MAX~
                |20 PRINT RND*MAX~
                |30 GOTO 20~
-----
INT Function

        The |INT~ function returns the largest integer less than or equal to
the number in parentheses.

                example- |LET A=INT(9.2)~    [in this statement, |A~ will equal  |9~]
                         |LET K=INT(-7.6)~   [in this statement, |K~ will equal |-8~]

        Here is a program that uses the RND and INT functions to quiz you on
the INT function.  Once again, press the |Ctrl~ and |Break~ keys when you have
had enough.

        |10 NUMBER=RND*200-100~ 'pick a random number between -100 and 100
        |20 PRINT "What is the INT of";NUMBER;:INPUT ANSWER~
        |30 IF ANSWER<>INT(NUMBER) THEN PRINT "The answer is";INT(NUMBER)~
        |40 GOTO 10~
-----
ABS Function

        The |ABS~ function returns the |absolute value~ of an expression.  The
absolute value is just the positive value of a number.

                example- |LET X=ABS(-5)~    [in this statement, |X~ will equal  |5~]
                         |LET C=ABS(12*4)~  [in this statement, |C~ will equal |48~]

        Here is a program that uses the RND, INT and ABS functions to quiz you
on the ABS function.  Once again, press the |Ctrl~ and |Break~ keys when you
have had enough.

        |10 NUMBER=INT(RND*200-100)~ 'pick integer between -100 and 100
        |20 PRINT "What is the ABS of";NUMBER;:INPUT ANSWER~
        |30 IF ANSWER<>ABS(NUMBER) THEN PRINT "The answer is";ABS(NUMBER)~
        |40 GOTO 10~
-----
ABS and INT functions (continued)

        Here is another short program that you can try out.  It uses the ABS
and INT functions to find the |G~reatest |C~ommon |D~enominator of two numbers.

                |10 INPUT "Enter the first number.",NUM1~
                |20 INPUT "Enter the second number.",NUM2~
                |30 NUM1=ABS(NUM1):NUM2=ABS(NUM2)~
                |40 LET R=NUM1-NUM2*INT(NUM1/NUM2)~
                |50 IF R=0 THEN GOTO 70~
                |60 NUM1=NUM2:NUM2=R:GOTO 40~
                |70 PRINT "The greatest common denominator is";NUM2~
-----
End of Lesson Four

        Congratulations on completing the |Beginning BASIC~ Course.  Now to bring
together much of what you've learned, try writing the following programs.

        1. A program that will find the average and the sum of a series of
           numbers in a DATA statement.
        2. A number guessing game program.  (|Hint~: Have the computer pick a
           number between 1 and 1000 and then INPUT guesses as to what the
           number is.)

If you have trouble, type  |LOAD"AVERAGE"~ for the average program,
                           |LOAD"GUESS_1"~ for one guessing game, or
                           |LOAD"GUESS_2"~ for a different version of the game.

and then |LIST~ to give a listing of the sample program.  Type |NEW~ to erase the
sample program and start one of your own.
 
	If you would like information on how to obtain a	|The PC-Prof.~
copy of "Intermediate BASIC", volume two of the BASIC Prof.	|P.O. Box 26~
series, send your name and address to:				|Salina, Ks.~
								|67402-0026~
-----
```
{% endraw %}

## AVERAGE.BAS

{% raw %}
```bas
10 DATA 76,93,88,69,100,75,84,999
20 READ NUM:IF NUM=999 THEN GOTO 100 'get a number, check if last number
30 COUNT=COUNT+1        'count the number of numbers
40 SUM=SUM+NUM          'find the sum of the numbers
50 GOTO 20              'get the next number
100 PRINT "The sum of the";COUNT;"numbers is";SUM
110 PRINT "and the average is";SUM/COUNT
```
{% endraw %}

## BACKUP.BAS

{% raw %}
```bas
0 ' ====> BACKUP.bas
1 OPEN"i",#1,"data.dat":INPUT#1,MONO,LSN$,PAGE:CLOSE
2 IF MONO THEN C1=7:C2=0:C3=8:C4=2 ELSE C1=(VAL(RIGHT$(TIME$,2)) MOD 6)+2:C2=0:C4=0:C3=(C1+2)+(6*(C1>5))
3 KEY 1,"RUN"+CHR$(34)+"BACKUP"+CHR$(34)+CHR$(13)
4 KEY 2,"RUN"+CHR$(34)+"FORWARD"+CHR$(34)+CHR$(13)
5 KEY 3,"RUN"+CHR$(34)+"REPEAT"+CHR$(34)+CHR$(13)
6 FOR I=4 TO 7:KEY I,"":NEXT I
7 KEY 8,"RUN"+CHR$(34)+"a0"+CHR$(34)+CHR$(13)
8 KEY 9,"RUN"+CHR$(34)+"CONTENTS"+CHR$(34)+CHR$(13)
9 KEY 10,"RUN"+CHR$(34)+"INDEX"+CHR$(34)+CHR$(13)
10 CHAIN "A"+LSN$,PAGE-1,ALL
```
{% endraw %}

## CONTENTS.BAS

{% raw %}
```bas
0 ' ====> CONTENTS.bas
1 ON KEY(1) GOSUB 8:KEY (1) ON
2 ON KEY(2) GOSUB 9:KEY (2) ON
3 ON KEY(3) GOSUB 10:KEY (3) ON
4 ON KEY(8) GOSUB 11:KEY (8) ON
5 ON KEY(9) GOSUB 12:KEY (9) ON
6 ON KEY(10) GOSUB 13:KEY (10) ON
7 GOTO 14
8 CLOSE:RUN"backup"
9 CLOSE:RUN"forward"
10 CLOSE:RUN"repeat"
11 CLOSE:RUN"a0"
12 CLOSE:RUN"contents"
13 CLOSE:RUN"index"
14 OPEN"i",#1,"data.dat":INPUT#1,MONO,LSN$,PAGE:CLOSE
15 IF MONO THEN C1=7:C2=0:C3=8:C4=2 ELSE C1=(VAL(RIGHT$(TIME$,2)) MOD 6)+2:C2=0:C4=0:C3=(C1+2)+(6*(C1>5))
16 PG=1:GOSUB 21:GOSUB 28
17 LOCATE ,,0:PG=2:GOSUB 21:GOSUB 28
18 LOCATE ,,0:PG=3:GOSUB 21:GOSUB 28
19 LOCATE ,,0:PG=4:GOSUB 21:GOSUB 28
20 LOCATE ,,0:RUN"repeat"
21 SCREEN 0,0,0:WIDTH 80:KEY OFF:COLOR C1,C2:CLS:OPEN "i",#1,"contents.txt"
22 FOR I=1 TO PG
23 LINE INPUT#1,A$:IF LEFT$(A$,5)<>"-----" THEN 23
24 NEXT I
25 LINE INPUT#1,A$:IF LEFT$(A$,5)<>"-----" THEN PRINT A$:GOTO 25
26 CLOSE
27 RETURN
28 LOCATE 24,1:PRINT "Press the ";:COLOR C2,C1:PRINT "space bar";:COLOR C1,C2:PRINT " to continue or enter the lesson and page number (#.##).";
29 LOCATE 24,76,1
30 LSN$=INKEY$:IF LSN$="" THEN 30 ELSE IF LSN$=" " THEN RETURN
31 IF LSN$<"1" OR LSN$>"4" THEN LOCATE 25,1:PRINT SPACE$(79);:LOCATE 25,25:PRINT "Lesson number 1 through 4 please.";:GOTO 29
32 LOCATE 24,76:PRINT LSN$;".";:LOCATE 24,78,1
33 P1$=INKEY$:IF P1$="" THEN 33
34 IF P1$=" " THEN RETURN ELSE IF P1$=CHR$(8) THEN LOCATE 24,76:PRINT SPACE$(3);:GOTO 29
35 IF P1$<>"0" AND P1$<>"1" THEN LOCATE 25,1:PRINT SPACE$(79);:LOCATE 25,30:PRINT "Press 0 or 1 please.";:GOTO 32
36 LOCATE 24,78:PRINT P1$;:LOCATE 24,79,1
37 P2$=INKEY$:IF P2$="" THEN 37
38 IF P2$=" " THEN RETURN ELSE IF P2$=CHR$(8) THEN LOCATE 24,78:PRINT SPACE$(2);:GOTO 32
39 IF LSN$="1" THEN PMAX$="12"
40 IF LSN$="2" THEN PMAX$="10"
41 IF LSN$="3" THEN PMAX$="10"
42 IF LSN$="4" THEN PMAX$="12"
43 PG$=P1$+P2$:IF PG$<"01" OR PG$>PMAX$ THEN LOCATE 25,1:PRINT SPACE$(79);:LOCATE 25,25:PRINT "Page number 01 through ";PMAX$;" please.";:GOTO 36
44 LOCATE 24,79,0:PRINT P2$;
45 CHAIN"a"+LSN$,VAL(PG$),ALL
```
{% endraw %}

## CONTENTS.TXT

{% raw %}
```
-----
                             Table of Contents

Introduction to BASIC......................................................1.01
PRINT Statement............................................................1.02
PRINT Statement (continued)................................................1.03
Variable...................................................................1.04
Variable (continued).......................................................1.05
LET Statement..............................................................1.06
PRINT and LET Statements...................................................1.07
Line numbers...............................................................1.08
LIST Command...............................................................1.09
LIST Command (continued)...................................................1.10
RUN Command................................................................1.11
End of Lesson One..........................................................1.12
-----
                        Table of Contents (continued)

INPUT Statement............................................................2.01
INPUT Statement (continued)................................................2.02
String Variables...........................................................2.03
More on the LET Statement..................................................2.04
More on LET (continued)....................................................2.05
More LET (continued).......................................................2.06
SAVE Command...............................................................2.07
LOAD Command...............................................................2.08
End of Lesson Two..........................................................2.09
-----
                        Table of Contents (continued)

DATA and READ Statements...................................................3.01
DATA and READ (continued)..................................................3.02
GOTO Statement.............................................................3.03
IF THEN Statement..........................................................3.04
IF THEN Statement (continued)..............................................3.05
IF THEN Statement (continued)..............................................3.06
Logical Operators..........................................................3.07
ELSE Statement.............................................................3.08
Multiple Statement Lines...................................................3.09
End of Lesson Three........................................................3.10
-----
                        Table of Contents (continued)

REM Statement..............................................................4.01
STOP and END Statements....................................................4.02
STOP and END Statements (continued)........................................4.03
EDIT Command...............................................................4.04
AUTO Command...............................................................4.05
AUTO Command (continued)...................................................4.06
TRON and TROFF Commands....................................................4.07
TRON and TROFF Commands (continued)........................................4.08
TRON and TROFF Commands (continued)........................................4.09
RND Function...............................................................4.10
INT Function...............................................................4.11
ABS Function...............................................................4.12
ABS and INT Functions (continued)..........................................4.13
End of Lesson Four.........................................................4.14

                           End of Table of Contents
-----
```
{% endraw %}

## DATA1.BAS

{% raw %}
```bas
0 ' ====> DATA1.bas
1 ON KEY(1) GOSUB 10:KEY (1) ON
2 ON KEY(2) GOSUB 11:KEY (2) ON
3 ON KEY(3) GOSUB 12:KEY (3) ON
4 ON KEY(5) GOSUB 13:KEY (5) ON
5 ON KEY(6) GOSUB 14:KEY (6) ON
6 ON KEY(8) GOSUB 15:KEY (8) ON
7 ON KEY(9) GOSUB 16:KEY (9) ON
8 ON KEY(10) GOSUB 17:KEY (10) ON
9 GOTO 18
10 RUN"backup"
11 RUN"forward"
12 RUN"repeat"
13 PAUSE=PAUSE-(PAUSE<500)*50:RETURN
14 PAUSE=PAUSE+(PAUSE>0)*50:RETURN
15 RUN"a0"
16 RUN"contents"
17 RUN"index"
18 PAUSE=100:COLOR C3,C4:LOCATE 10,20:PRINT"10 DATA 5,3,4,6,2,1":LOCATE 12,20:PRINT "20 READ NUM"
19 LOCATE 14,20:PRINT "30 PRINT NUM;":LOCATE 16,20:PRINT "40 GOTO 20"
20 COLOR C1,C2:LOCATE 18,5:PRINT "Press the ";:COLOR C2,C1:PRINT "space bar";:COLOR C1,C2:PRINT" to begin illustration of the DATA & READ statements."
21 IF INKEY$<>"" THEN 21
22 IF INKEY$<>" " THEN 22 ELSE LOCATE 18,1:PRINT SPACE$(79);
23 LOCATE 10,2:PRINT "Press":LOCATE 11,2:PRINT CHR$(218);STRING$(3,196);CHR$(191);CHR$(31);STRING$(5,29);CHR$(179);"F5 ";CHR$(179);CHR$(31);STRING$(5,29);CHR$(192);STRING$(3,196);CHR$(217):LOCATE 14,2:PRINT "to go":LOCATE 15,1:PRINT"slower."
24 LOCATE 10,73:PRINT "Press":LOCATE 11,73:PRINT CHR$(218);STRING$(3,196);CHR$(191);CHR$(31);STRING$(8,29);CHR$(179);"F6 ";CHR$(179);CHR$(31);STRING$(8,29);CHR$(192);STRING$(3,196);CHR$(217):LOCATE 14,73:PRINT "to go":LOCATE 15,72:PRINT"faster."
25 DATA 5,3,4,6,2,1
26 ON ERROR GOTO 38
27 READ NUM
28 LOCATE 9,28:PRINT SPACE$(COUNT*2);CHR$(25)
29 FOR C=36 TO 45:LOCATE 12,C:PRINT CHR$(26);:FOR P=1 TO PAUSE:NEXT:NEXT:LOCATE 12,50:PRINT "NUM =";NUM:LOCATE 12,36:PRINT SPACE$(10)
30 LOCATE 13,20:PRINT CHR$(25);:FOR P=1 TO PAUSE:NEXT:LOCATE 13,20:PRINT CHR$(32);
31 LOCATE 18,COUNT*3+1:PRINT NUM;
32 COUNT=COUNT+1
33 LOCATE 15,20:PRINT CHR$(25);:FOR P=1 TO PAUSE:NEXT:LOCATE 15,20:PRINT CHR$(32);
34 FOR C=19 TO 15 STEP -1:LOCATE 16,C:PRINT CHR$(27);:FOR P=1 TO PAUSE:NEXT:LOCATE 16,C:PRINT CHR$(32);:NEXT
35 FOR R=16 TO 12 STEP -1:LOCATE R,15:PRINT CHR$(24);:FOR P=1 TO PAUSE:NEXT:LOCATE R,15:PRINT CHR$(32);:NEXT R
36 FOR C=15 TO 19:LOCATE 12,C:PRINT CHR$(26);:FOR P=1 TO PAUSE:NEXT:LOCATE 12,C:PRINT CHR$(32);:NEXT
37 GOTO 27
38 BEEP:LOCATE 12,50:PRINT "Nothing to read!":FOR P=1 TO 10*PAUSE:NEXT
39 LOCATE 19,1:PRINT "Out of DATA in 20":RESUME 40
40 ON ERROR GOTO 0:NEW
```
{% endraw %}

## DATA2.BAS

{% raw %}
```bas
0 ' ====> DATA2.bas
1 ON KEY(1) GOSUB 10:KEY (1) ON
2 ON KEY(2) GOSUB 11:KEY (2) ON
3 ON KEY(3) GOSUB 12:KEY (3) ON
4 ON KEY(5) GOSUB 13:KEY (5) ON
5 ON KEY(6) GOSUB 14:KEY (6) ON
6 ON KEY(8) GOSUB 15:KEY (8) ON
7 ON KEY(9) GOSUB 16:KEY (9) ON
8 ON KEY(10) GOSUB 17:KEY (10) ON
9 GOTO 18
10 RUN"backup"
11 RUN"forward"
12 RUN"repeat"
13 PAUSE=PAUSE-(PAUSE<500)*50:RETURN
14 PAUSE=PAUSE+(PAUSE>0)*50:RETURN
15 RUN"a0"
16 RUN"contents"
17 RUN"index"
18 PAUSE=100:COLOR C3,C4:LOCATE 8,20:PRINT"10 DATA 32,19,25,16,42,99":LOCATE 10,20:PRINT "20 READ NUM"
19 LOCATE 12,20:PRINT "30 IF NUM=99 THEN 70":LOCATE 14,20:PRINT "40 COUNT=COUNT+1"
20 LOCATE 16,20:PRINT "50 SUM=SUM+NUM":LOCATE 18,20:PRINT "60 GOTO 20"
21 LOCATE 20,20:PRINT "70 PRINT ";CHR$(34);"AVERAGE IS";CHR$(34);";SUM/COUNT"
22 COLOR C1,C2:LOCATE 22,2:PRINT "Press the ";:COLOR C2,C1:PRINT "space bar";:COLOR C1,C2:PRINT" to begin illustration of DATA, READ & IF THEN statements."
23 IF INKEY$<>"" THEN 23
24 IF INKEY$<>" " THEN 24 ELSE LOCATE 22,1:PRINT SPACE$(79);
25 LOCATE 8,2:PRINT "Press":LOCATE 9,2:PRINT CHR$(218);STRING$(3,196);CHR$(191);CHR$(31);STRING$(5,29);CHR$(179);"F5 ";CHR$(179);CHR$(31);STRING$(5,29);CHR$(192);STRING$(3,196);CHR$(217):LOCATE 12,2:PRINT "to go":LOCATE 13,1:PRINT"slower."
26 LOCATE 8,73:PRINT "Press":LOCATE 9,73:PRINT CHR$(218);STRING$(3,196);CHR$(191);CHR$(31);STRING$(8,29);CHR$(179);"F6 ";CHR$(179);CHR$(31);STRING$(8,29);CHR$(192);STRING$(3,196);CHR$(217):LOCATE 12,73:PRINT "to go":LOCATE 13,72:PRINT"faster."
27 DATA 32,19,25,16,42,99
28 READ NUM
29 LOCATE 7,28:PRINT SPACE$(COUNT*3);CHR$(25)
30 FOR C=36 TO 45:LOCATE 10,C:PRINT CHR$(26);:FOR P=1 TO PAUSE:NEXT:NEXT:LOCATE 10,50:PRINT "NUM =";NUM:LOCATE 10,36:PRINT SPACE$(10)
31 LOCATE 11,20:PRINT CHR$(25);:FOR P=1 TO PAUSE*2:NEXT:LOCATE 11,20:PRINT CHR$(32);
32 IF NUM=99 THEN 43
33 LOCATE 12,50:PRINT "NO so drop to line 40.":FOR P=1 TO PAUSE*10:NEXT:LOCATE 12,50:PRINT SPACE$(22)
34 LOCATE 13,20:PRINT CHR$(25);:FOR P=1 TO PAUSE*2:NEXT:LOCATE 13,20:PRINT CHR$(32);
35 COUNT=COUNT+1:FOR C=41 TO 45:LOCATE 14,C:PRINT CHR$(26);:FOR P=1 TO PAUSE:NEXT:NEXT:LOCATE 14,50:PRINT "COUNT =";COUNT:LOCATE 14,41:PRINT SPACE$(5)
36 LOCATE 15,20:PRINT CHR$(25);:FOR P=1 TO 200:NEXT:LOCATE 15,20:PRINT CHR$(32);
37 SUM=SUM+NUM:FOR C=38 TO 45:LOCATE 16,C:PRINT CHR$(26);:FOR P=1 TO PAUSE:NEXT:NEXT:LOCATE 16,50:PRINT "SUM =";SUM:LOCATE 16,38:PRINT SPACE$(8)
38 LOCATE 17,20:PRINT CHR$(25);:FOR P=1 TO 200:NEXT:LOCATE 17,20:PRINT CHR$(32);
39 FOR C=19 TO 15 STEP -1:LOCATE 18,C:PRINT CHR$(27);:FOR P=1 TO PAUSE:NEXT:LOCATE 18,C:PRINT CHR$(32);:NEXT
40 FOR R=18 TO 10 STEP -1:LOCATE R,15:PRINT CHR$(24);:FOR P=1 TO PAUSE:NEXT:LOCATE R,15:PRINT CHR$(32);:NEXT R
41 FOR C=15 TO 19:LOCATE 10,C:PRINT CHR$(26);:FOR P=1 TO PAUSE:NEXT:LOCATE 10,C:PRINT CHR$(32);:NEXT
42 GOTO 28
43 BEEP:LOCATE 12,50:PRINT "YES so go to line 70."
44 FOR C=19 TO 15 STEP -1:LOCATE 12,C:PRINT CHR$(27);:FOR P=1 TO PAUSE:NEXT:LOCATE 12,C:PRINT CHR$(32);:NEXT
45 FOR R=12 TO 20:LOCATE R,15:PRINT CHR$(25);:FOR P=1 TO PAUSE:NEXT:LOCATE R,15:PRINT CHR$(32);:NEXT R
46 FOR C=15 TO 19:LOCATE 20,C:PRINT CHR$(26);:FOR P=1 TO PAUSE:NEXT:LOCATE 20,C:PRINT CHR$(32);:NEXT
47 LOCATE 22,1:PRINT "AVERAGE IS";SUM/COUNT:NEW
```
{% endraw %}

## FILES105.TXT

{% raw %}
```
-------------------------------------------------------------------------
Disk No 105   PC Professor BASIC Tutorial                       v1.1 DS2
-------------------------------------------------------------------------
PC-Professor is a well liked tutorial for teaching the BASIC programming
language.  Start by running the BASIC program "intro".
 
INTRO    BAS  Part of PC-Professor - program to run first
AUTOEXEC BAT  Batch file to start PC-Professor
*        *    Other PC-Professor files called from INTRO.BAS
 
```
{% endraw %}

## FORWARD.BAS

{% raw %}
```bas
0 ' ====> FORWARD.bas
1 OPEN"i",#1,"data.dat":INPUT#1,MONO,LSN$,PAGE:CLOSE
2 IF MONO THEN C1=7:C2=0:C3=8:C4=2 ELSE C1=(VAL(RIGHT$(TIME$,2)) MOD 6)+2:C2=0:C4=0:C3=(C1+2)+(6*(C1>5))
3 KEY 1,"RUN"+CHR$(34)+"BACKUP"+CHR$(34)+CHR$(13)
4 KEY 2,"RUN"+CHR$(34)+"FORWARD"+CHR$(34)+CHR$(13)
5 KEY 3,"RUN"+CHR$(34)+"REPEAT"+CHR$(34)+CHR$(13)
6 FOR I=4 TO 7:KEY I,"":NEXT I
7 KEY 8,"RUN"+CHR$(34)+"a0"+CHR$(34)+CHR$(13)
8 KEY 9,"RUN"+CHR$(34)+"CONTENTS"+CHR$(34)+CHR$(13)
9 KEY 10,"RUN"+CHR$(34)+"INDEX"+CHR$(34)+CHR$(13)
10 CHAIN "A"+LSN$,PAGE+1,ALL
```
{% endraw %}

## GUESS_1.BAS

{% raw %}
```bas
10 NUMBER=INT(RND*1000)+1       'pick a random integer between 1 and 1000
20 COUNT=0                      'initialize the counter
30 PRINT "I know a number between 1 and 1000, try and guess what it is."
40 INPUT "What is your guess";GUESS
50 COUNT=COUNT+1                'keep track of the number of guesses
60 IF NUMBER=GUESS THEN 90      'got it!
70 IF GUESS<NUMBER THEN PRINT "Too low,"; ELSE PRINT "Too high,";
80 PRINT " try again ... ";:GOTO 40
90 PRINT "You got it in";COUNT;"guesses!  Would you like to play again (Y/N)";
100 INPUT AGAIN$:IF AGAIN$="Y" OR AGAIN$="y" THEN 10
```
{% endraw %}

## GUESS_2.BAS

{% raw %}
```bas
10 RANDOMIZE 're-seeds the random number generator (keep the game interesting!)
20 NUMBER=INT(RND*1000)+1       'pick a random integer between 1 and 1000
30 PRINT "I know a number between 1 and 1000, try and guess what it is."
40 INPUT "What is your guess";GUESS
50 COUNT=1
60 IF NUMBER=GUESS THEN PRINT "Wow! One guess, you must be lucky!":GOTO 170
70 DIFFERENCE=ABS(NUMBER-GUESS) 'find how far away the guess is
80 IF DIFFERENCE<100 THEN PRINT "You're real close.":GOTO 110
90 IF DIFFERENCE<250 THEN PRINT "You're kind'a close.":GOTO 110
100 PRINT "Wow, are you ever off!"
110 INPUT "What is you guess";GUESS
120 COUNT=COUNT+1
130 IF NUMBER=GUESS THEN 160
140 IF DIFFERENCE>ABS(NUMBER-GUESS) THEN PRINT "You are getting closer ... "; ELSE PRINT "You did better last time!  ";
150 DIFFERENCE=ABS(NUMBER-GUESS):GOTO 110
160 PRINT "You got it in";COUNT;"guesses!"
170 INPUT "Would you like to play again (Y/N)";AGAIN$
180 IF AGAIN$="Y" OR AGAIN$="y" THEN 20
```
{% endraw %}

## IFTHEN.BAS

{% raw %}
```bas
0 ' ====> IFTHEN.bas
1 ON KEY(1) GOSUB 10:KEY (1) ON
2 ON KEY(2) GOSUB 11:KEY (2) ON
3 ON KEY(3) GOSUB 12:KEY (3) ON
4 ON KEY(5) GOSUB 13:KEY (5) ON
5 ON KEY(6) GOSUB 14:KEY (6) ON
6 ON KEY(8) GOSUB 15:KEY (8) ON
7 ON KEY(9) GOSUB 16:KEY (9) ON
8 ON KEY(10) GOSUB 17:KEY (10) ON
9 GOTO 18
10 RUN"backup"
11 RUN"forward"
12 RUN"repeat"
13 PAUSE=PAUSE-(PAUSE<500)*50:RETURN
14 PAUSE=PAUSE+(PAUSE>0)*50:RETURN
15 RUN"a0"
16 RUN"contents"
17 RUN"index"
18 PAUSE=100:COLOR C3,C4:LOCATE 14,20:PRINT "10 I=I+1":LOCATE 16,20:PRINT "20 SUM=SUM+I"
19 LOCATE 18,20:PRINT "30 IF I<10 THEN 10":LOCATE 20,20:PRINT "40 PRINT ";CHR$(34);"SUM OF THE NUMBERS FROM 1 TO 10 IS";CHR$(34);";SUM"
20 COLOR C1,C2:LOCATE 22,10:PRINT "Press the ";:COLOR C2,C1:PRINT "space bar";:COLOR C1,C2:PRINT " to begin illustration of the IF THEN statement."
21 IF INKEY$<>"" THEN 21
22 IF INKEY$<>" " THEN 22 ELSE LOCATE 22,1:PRINT SPACE$(79);
23 LOCATE 14,2:PRINT "Press":LOCATE 15,2:PRINT CHR$(218);STRING$(3,196);CHR$(191);CHR$(31);STRING$(5,29);CHR$(179);"F5 ";CHR$(179);CHR$(31);STRING$(5,29);CHR$(192);STRING$(3,196);CHR$(217):LOCATE 18,2:PRINT "to go":LOCATE 19,1:PRINT"slower."
24 LOCATE 14,73:PRINT "Press":LOCATE 15,73:PRINT CHR$(218);STRING$(3,196);CHR$(191);CHR$(31);STRING$(8,29);CHR$(179);"F6 ";CHR$(179);CHR$(31);STRING$(8,29);CHR$(192);STRING$(3,196);CHR$(217):LOCATE 18,73:PRINT "to go":LOCATE 19,72:PRINT"faster."
25 I=0
26 I=I+1
27 FOR C=33 TO 45:LOCATE 14,C:PRINT CHR$(26);:FOR P=1 TO PAUSE:NEXT:NEXT:LOCATE 14,50:PRINT "I =";I:LOCATE 14,33:PRINT SPACE$(13)
28 LOCATE 15,20:PRINT CHR$(25);:FOR P=1 TO PAUSE:NEXT:LOCATE 15,20:PRINT CHR$(32);
29 SUM=SUM+I
30 FOR C=37 TO 45:LOCATE 16,C:PRINT CHR$(26);:FOR P=1 TO PAUSE:NEXT:NEXT:LOCATE 16,50:PRINT "SUM =";SUM:LOCATE 16,37:PRINT SPACE$(9)
31 LOCATE 17,20:PRINT CHR$(25);:FOR P=1 TO PAUSE:NEXT:LOCATE 17,20:PRINT CHR$(32);
32 IF I=10 THEN 39
33 LOCATE 18,50:PRINT "YES so go to line 10.":FOR P=1 TO PAUSE*10:NEXT:LOCATE 18,50:PRINT SPACE$(21)
34 FOR C=19 TO 15 STEP -1:LOCATE 18,C:PRINT CHR$(27);:FOR P=1 TO PAUSE:NEXT:LOCATE 18,C:PRINT CHR$(32);:NEXT
35 FOR R=18 TO 14 STEP -1:LOCATE R,15:PRINT CHR$(24);:FOR P=1 TO PAUSE:NEXT:LOCATE R,15:PRINT CHR$(32);:NEXT R
36 FOR C=15 TO 19:LOCATE 14,C:PRINT CHR$(26);:FOR P=1 TO PAUSE:NEXT:LOCATE 14,C:PRINT CHR$(32);:NEXT
37 GOTO 26
38 LOCATE 14,40:PRINT SPACE$(6);:FOR C=40 TO 45:LOCATE 14,C:PRINT CHR$(32);CHR$(29);CHR$(26);:FOR P=1 TO 100:NEXT:NEXT:LOCATE 14,50:PRINT "I =";I
39 BEEP:LOCATE 18,50:PRINT "NO so drop to line 40.":FOR P=1 TO PAUSE*10:NEXT P
40 LOCATE 19,20:PRINT CHR$(25);:FOR P=1 TO PAUSE*2.5:NEXT:LOCATE 19,20:PRINT CHR$(32);
41 LOCATE 22,1:PRINT "SUM OF THE NUMBERS FROM 1 TO 10 IS";SUM
42 NEW
```
{% endraw %}

## INDEX.BAS

{% raw %}
```bas
0 ' ====> INDEX.bas
1 ON KEY(1) GOSUB 8:KEY (1) ON
2 ON KEY(2) GOSUB 9:KEY (2) ON
3 ON KEY(3) GOSUB 10:KEY (3) ON
4 ON KEY(8) GOSUB 11:KEY (8) ON
5 ON KEY(9) GOSUB 12:KEY (9) ON
6 ON KEY(10) GOSUB 13:KEY (10) ON
7 GOTO 14
8 CLOSE:RUN"backup"
9 CLOSE:RUN"forward"
10 CLOSE:RUN"repeat"
11 CLOSE:RUN"a0"
12 CLOSE:RUN"contents"
13 CLOSE:RUN"index"
14 OPEN"i",#1,"data.dat":INPUT#1,MONO,LSN$,PAGE:CLOSE
15 IF MONO THEN C1=7:C2=0:C3=8:C4=2 ELSE C1=(VAL(RIGHT$(TIME$,2)) MOD 6)+2:C2=0:C4=0:C3=(C1+2)+(6*(C1>5))
16 PG=1:GOSUB 20:GOSUB 27
17 LOCATE ,,0:PG=2:GOSUB 20:GOSUB 27
18 LOCATE ,,0:PG=3:GOSUB 20:GOSUB 27
19 LOCATE ,,0:RUN"repeat"
20 SCREEN 0,0,0:WIDTH 80:KEY OFF:COLOR C1,C2:CLS:OPEN "i",#1,"index.txt"
21 FOR I=1 TO PG
22 LINE INPUT#1,A$:IF LEFT$(A$,5)<>"-----" THEN 22
23 NEXT I
24 LINE INPUT#1,A$:IF LEFT$(A$,5)<>"-----" THEN PRINT A$:GOTO 24
25 CLOSE
26 RETURN
27 LOCATE 24,1:PRINT "Press the ";:COLOR C2,C1:PRINT "space bar";:COLOR C1,C2:PRINT " to continue or enter the lesson and page number (#.##).";
28 LOCATE 24,76,1
29 LSN$=INKEY$:IF LSN$="" THEN 29 ELSE IF LSN$=" " THEN RETURN
30 IF LSN$<"1" OR LSN$>"4" THEN LOCATE 25,1:PRINT SPACE$(79);:LOCATE 25,25:PRINT "Lesson number 1 through 4 please.";:GOTO 28
31 LOCATE 24,76:PRINT LSN$;".";:LOCATE 24,78,1
32 P1$=INKEY$:IF P1$="" THEN 32                                               LIST 36
33 IF P1$=" " THEN RETURN ELSE IF P1$=CHR$(8) THEN LOCATE 24,76:PRINT SPACE$(3);:GOTO 28
34 IF P1$<>"0" AND P1$<>"1" THEN LOCATE 25,1:PRINT SPACE$(79);:LOCATE 25,30:PRINT "Press 0 or 1 please.";:GOTO 31
35 LOCATE 24,78:PRINT P1$;:LOCATE 24,79,1
36 P2$=INKEY$:IF P2$="" THEN 36
37 IF P2$=" " THEN RETURN ELSE IF P2$=CHR$(8) THEN LOCATE 24,78:PRINT SPACE$(2);:GOTO 31
38 IF LSN$="1" THEN PMAX$="12"
39 IF LSN$="2" THEN PMAX$="10"
40 IF LSN$="3" THEN PMAX$="10"
41 IF LSN$="4" THEN PMAX$="14"
42 PG$=P1$+P2$:IF PG$<"01" OR PG$>PMAX$ THEN LOCATE 25,1:PRINT SPACE$(79);:LOCATE 25,25:PRINT "Page number 01 through ";PMAX$;" please.";:GOTO 35
43 LOCATE 24,79,0:PRINT P2$;
44 CHAIN"a"+LSN$,VAL(PG$),ALL
```
{% endraw %}

## INDEX.TXT

{% raw %}
```
-----
                                   INDEX
ABS Function.........................................................4.10, 4.11
AND........................................................................3.07
Apostrophe.................................................................4.01
Arithmetic Operators.......................................................2.04
CONT Command...............................................................4.02
Colon......................................................................3.09
Comma................................................................1.03, 2.01
Commands...................................................................1.01
DATA Statement.......................................................3.01, 3.02
DELETE Command.............................................................4.04
De-bugging.....................................................4.05, 4.06, 4.07
EDIT Command...............................................................4.04
ELSE Statement.............................................................3.08
END Statement........................................................4.02, 4.03
End of Lesson Four.........................................................4.12
End of Lesson One..........................................................1.12
End of Lesson Three........................................................3.10
End of Lesson Two..........................................................2.09
Functions..................................................................1.01
GOTO Statement.............................................................3.03
-----
                               INDEX (continued)
IF THEN Statement..............................................3.04, 3.05, 3.06
INPUT Statement......................................................2.01, 2.02
INT Function.........................................................4.09, 4.11
Illustrations..................................................................
        DATA, READ, IF THEN................................................3.05
        DATA, READ.........................................................3.03
        IF THEN............................................................3.04
        LET................................................................1.06
        Variables..........................................................1.04
Introduction...............................................................1.01
LET Statement......................................1.06, 1.07, 2.04, 2.04, 2.06
LIST Command.........................................................1.09, 1.10
LOAD Command...............................................................2.08
Line numbers...............................................................1.08
Logical Operators..........................................................3.07
Looping....................................................................3.03
Multiple Statement Lines...................................................3.09
OR.........................................................................3.07
PRINT Statement................................................1.02, 1.03, 1.07
Prompt.....................................................................2.01
-----
                               INDEX (continued)
READ Statement.......................................................3.01, 3.02
REM Statement..............................................................4.01
RENUM Command..............................................................1.10
RND Function...............................................................4.08
RUN Command................................................................1.11
Relational Operators.......................................................3.04
SAVE Command...............................................................2.07
STOP Statement.......................................................4.02, 4.03
Sample Programs................................................................
        Greatest Common Denominator........................................4.10
        Interest...........................................................2.07
        Temperature Conversion.............................................2.06
Semi-colon...........................................................1.03, 2.01
Statements...........................................................1.01, 1.08
String Variables...........................................................2.03
TROFF Command..................................................4.05, 4.06, 4.07
TRON Command...................................................4.05, 4.06, 4.07
Variable.............................................................1.04, 1.05

                                End of INDEX
-----
```
{% endraw %}

## INTRO.BAS

{% raw %}
```bas
0 ' ====> INTRO.bas
1 DEF SEG=0:IF (PEEK(&H410) AND &H20)=&H20 THEN 5
2 CLS:LOCATE 5,5:PRINT "Whoa!  This program requires an":LOCATE 7,11:PRINT "80 column display!":LOCATE 9,5:PRINT "You better check your switches!"
3 PLAY "t255l64":FOR I=1 TO 3:FOR O=2 TO 4:PLAY "o=o;cc+dd+eff+gg+aa+b":NEXT:FOR O=4 TO 2 STEP -1:PLAY"o=o;ba+ag+gf+fed+dc+d":NEXT:NEXT
4 SYSTEM
5 ON ERROR GOTO 7
6 OPEN"i",#1,"data.dat":INPUT#1,MONO,LSN$,PAGE:CLOSE:GOTO 9
7 DEF SEG=0:CONFIG=PEEK(&H410):IF (CONFIG AND &H30)=&H30 THEN MONO=-1
8 OPEN"o",#1,"data.dat":WRITE#1,MONO,"0",0:CLOSE:RESUME 9
9 ON ERROR GOTO 0
10 IF MONO THEN C1=7:C2=0:C3=8:C4=2 ELSE C1=(VAL(RIGHT$(TIME$,2)) MOD 6)+2:C2=0:C4=0:C3=(C1+2)+(6*(C1>5))
11 SCREEN 0,0,0:COLOR C2,C1:KEY OFF:LOCATE ,,0:CLS
12 TEMP$=CHR$(31)+CHR$(29)+CHR$(178)
13 TASSLE$=CHR$(218)+CHR$(31)+CHR$(29)+CHR$(179)+CHR$(31)+CHR$(29)+CHR$(234)+TEMP$+TEMP$+TEMP$+TEMP$+TEMP$+TEMP$+TEMP$+TEMP$+TEMP$
14 TEMP$=CHR$(31)+CHR$(29)+CHR$(32)
15 ELSSAT$=CHR$(32)+TEMP$+TEMP$+TEMP$+TEMP$+TEMP$+TEMP$+TEMP$+TEMP$+TEMP$+TEMP$+TEMP$
16 PLAY "mbmnt100o2l2gl8f+gl4al2edco1l8bo2cl4do1l1al2bo2l8c#l4dl8el2adgl8gl4f+l8el1d"
17 FOR C=1 TO 60
18 FOR I=1 TO 100:NEXT I
19 LOCATE 6,C:PRINT CHR$(219):IF C<7 THEN 26
20 LOCATE 7,C-6:PRINT CHR$(219):IF C<20 THEN 26
21 LOCATE 5,C-19:PRINT CHR$(219):IF C<22 THEN 26
22 LOCATE 5,C-21:PRINT CHR$(196):IF C<35 THEN 26
23 LOCATE 7,C-34:PRINT CHR$(32):IF C<41 THEN 26
24 LOCATE 5,C-40:PRINT TASSLE$:IF C<42 THEN 26
25 LOCATE 5,C-41:PRINT ELSSAT$
26 NEXT C
27 LOCATE 9,28:PRINT "The PC-Prof. (TM) presents":PLAY "mfo2l2gl8f+gl4al2ed"
28 LOCATE 11,34:PRINT "The BASIC Prof.":PLAY "co1l8bo2cl4do1l1a"
29 LOCATE 13,34:PRINT "Beginning BASIC":PLAY "l2bo2l8c#l4dl8el2ad"
30 LOCATE 15,22:PRINT "Copyright (c) 1983  EAGLE Software, Inc.":PLAY "gl8gl4f+l8el1d"
31 SCREEN 0,0,0:WIDTH 80:KEY OFF:COLOR C1,C2:CLS
32 LOCATE 1,1:PRINT "Introduction to the BASIC Prof."
33 LOCATE 3,9:PRINT "You are about to begin a fascinating learning experience, actually"
34 PRINT "programming a computer in ";:COLOR C3,C4:PRINT "BASIC";:COLOR C1,C2:PRINT " language.  Within a short period of time, you"
35 PRINT "will understand the fundamental concepts of ";:COLOR C3,C4:PRINT "BASIC";:COLOR C1,C2:PRINT "."
36 LOCATE 7,9:PRINT "The tutorial is designed to gradually increase in complexity and"
37 PRINT "difficulty.  The concepts you learn early on will be the building blocks for"
38 PRINT "what comes later, so carefully review until you have a thorough understanding"
39 PRINT "of each piece of new material."
40 LOCATE 12,9:PRINT "Don't be afraid to make mistakes.  Often times your mistakes will help"
41 PRINT "you better understand a difficult concept.  However, read each screen of text"
42 PRINT "through completely before following the instructions.  This will lessen your"
43 PRINT "chances of misunderstanding the information."
44 LOCATE 17,9:PRINT "Some words on the screen should be ";:COLOR C3,C4:PRINT "brighter or of a different"
45 PRINT "color";:COLOR C1,C2:PRINT " than the rest.  ";:COLOR C2,C1:PRINT "This sentence should also be reversed."
46 LOCATE 20,9:COLOR C1,C2:PRINT "Does this look O.K. to you?  (Press ";:COLOR C3,C4:PRINT "Y";:COLOR C1,C2:PRINT " or ";:COLOR C3,C4:PRINT "N";:COLOR C1,C2:PRINT " please.)"
47 IF INKEY$<>"" THEN 47
48 CHOICE$=INKEY$:IF CHOICE$="" THEN 48
49 IF CHOICE$="Y" OR CHOICE$="y" THEN CHAIN"a0"
50 MONO=NOT MONO:IF MONO THEN C1=7:C2=0:C3=8:C4=2 ELSE C1=(VAL(RIGHT$(TIME$,2)) MOD 6)+2:C2=0:C4=0:C3=(C1+2)+(6*(C1>5))
51 OPEN"o",#1,"data.dat":WRITE#1,MONO,"0","0":CLOSE:GOTO 31
```
{% endraw %}

## K0.BAS

{% raw %}
```bas
0 ' ====> K0.bas
1 DEF SEG=&H40:POKE &H17,&H20 ' -- turn everything off but Num Lock
2 FOR K=1 TO 10:KEY K,"":NEXT
3 OPEN"i",#1,"data.dat":INPUT#1,MONO,LSN$,PAGE:CLOSE
4 SCREEN 0,0,0:WIDTH 80:KEY OFF:LOCATE 1,1,0:DEF SEG=&HB800
5 IF MONO THEN C1=7:C2=0:C3=8:C4=2:BLOAD"mono.pic" ELSE C1=(VAL(RIGHT$(TIME$,2)) MOD 6)+2:C2=0:C4=0:C3=(C1+2)+(6*(C1>5)):BLOAD"color.pic"
6 PLAY "MBt200mbmso3l4cdel8cl4dl8cl2eo3l4defl8dl4el8dl2fo3l4efgl8el4fl8el2gl8gl4g-fl8cl4dl2cl4o4c"
7 IF INKEY$<>"" THEN 7
8 IF INKEY$="" THEN 8
9 COLOR C1,C2:CLS:LOCATE 5,7:PRINT "Sorry to disappoint you, but Mr. Phenomenal couldn't be here today.":LOCATE 7,21:PRINT "Substituting for Phil is Seymor Cursor."
10 LOCATE 9,20:PRINT "Please give a warm welcome to Mr. Cursor.":LOCATE 11,26:PRINT "Press any key to continue.":LOCATE 13,7:PRINT "(The cursor is the blinking underline at the bottom of the screen.)"
11 COLOR C3,C4:FOR R=15 TO 23:LOCATE R,39:PRINT CHR$(179):NEXT:LOCATE 24,39:PRINT CHR$(25);:LOCATE 25,39,7
12 IF INKEY$<>"" THEN 12
13 IF INKEY$="" THEN 13
14 COLOR C1,C2:CLS
15 TOPKEY1$=CHR$(218)+STRING$(6,196)+CHR$(191)
16 MIDKEY1$=CHR$(179)+SPACE$(6)+CHR$(179)
17 BOTKEY1$=CHR$(192)+STRING$(6,196)+CHR$(217)
18 TOPKEY2$=CHR$(218)+CHR$(194)+STRING$(6,196)+CHR$(194)+CHR$(191)
19 MIDKEY2$=CHR$(179)+CHR$(179)+SPACE$(6)+CHR$(179)+CHR$(179)
20 BOTKEY2$=CHR$(192)+CHR$(193)+STRING$(6,196)+CHR$(193)+CHR$(217)
21 TOPKEY3$=CHR$(218)+CHR$(196)+CHR$(194)+STRING$(6,196)+CHR$(194)+CHR$(196)+CHR$(191)
22 MIDKEY3$=CHR$(179)+CHR$(32)+CHR$(179)+SPACE$(6)+CHR$(179)+CHR$(32)+CHR$(179)
23 BOTKEY3$=CHR$(192)+CHR$(196)+CHR$(193)+STRING$(6,196)+CHR$(193)+CHR$(196)+CHR$(217)
24 TOPKEY4$=CHR$(218)+STRING$(2,196)+CHR$(194)+STRING$(6,196)+CHR$(194)+STRING$(2,196)+CHR$(191)
25 MIDKEY4$=CHR$(179)+STRING$(2,32)+CHR$(179)+SPACE$(6)+CHR$(179)+STRING$(2,32)+CHR$(179)
26 BOTKEY4$=CHR$(192)+STRING$(2,196)+CHR$(193)+STRING$(6,196)+CHR$(193)+STRING$(2,196)+CHR$(217)
27 TOPKEY5$=CHR$(218)+STRING$(3,196)+CHR$(194)+STRING$(6,196)+CHR$(194)+STRING$(3,196)+CHR$(191)
28 MIDKEY5$=CHR$(179)+STRING$(3,32)+CHR$(179)+SPACE$(6)+CHR$(179)+STRING$(3,32)+CHR$(179)
29 BOTKEY5$=CHR$(192)+STRING$(3,196)+CHR$(193)+STRING$(6,196)+CHR$(193)+STRING$(3,196)+CHR$(217)
30 SIDEKEY$=CHR$(195)+STRING$(6,196)+CHR$(180)
31 LOCATE 1,1,0:PRINT STRING$(80,219)
32 LOCATE 2,25:PRINT TOPKEY1$+TOPKEY4$+TOPKEY5$+TOPKEY5$+STRING$(2,219)
33 LOCATE 3,25:PRINT MIDKEY1$+MIDKEY4$+MIDKEY5$+MIDKEY5$+STRING$(2,219)
34 LOCATE 4,25:PRINT MIDKEY1$+MIDKEY4$+MIDKEY5$+MIDKEY5$+STRING$(2,219)
35 LOCATE 5,25:PRINT BOTKEY1$+BOTKEY4$+BOTKEY5$+BOTKEY5$+STRING$(2,219)
36 LOCATE 6,29:PRINT TOPKEY2$+TOPKEY1$+TOPKEY1$+TOPKEY1$+TOPKEY1$+TOPKEY1$+STRING$(2,219)
37 LOCATE 7,29:PRINT MIDKEY2$+MIDKEY1$+MIDKEY1$+MIDKEY1$+MIDKEY1$+MIDKEY1$+STRING$(2,219)
38 LOCATE 8,29:PRINT MIDKEY2$+SIDEKEY$+MIDKEY1$+MIDKEY1$+MIDKEY1$+MIDKEY1$+STRING$(2,219)
39 LOCATE 9,29:PRINT BOTKEY2$+MIDKEY1$+BOTKEY1$+BOTKEY1$+BOTKEY1$+BOTKEY1$+STRING$(2,219)
40 LOCATE 10,31:PRINT TOPKEY1$+MIDKEY1$+TOPKEY1$+TOPKEY1$+TOPKEY1$+TOPKEY1$+STRING$(2,219)
41 LOCATE 11,31:PRINT MIDKEY1$+SIDEKEY$+MIDKEY1$+MIDKEY1$+MIDKEY1$+MIDKEY1$+STRING$(2,219)
42 LOCATE 12,31:PRINT MIDKEY1$+MIDKEY1$+MIDKEY1$+MIDKEY1$+MIDKEY1$+MIDKEY1$+STRING$(2,219)
43 LOCATE 13,31:PRINT BOTKEY1$+BOTKEY1$+BOTKEY1$+BOTKEY1$+BOTKEY1$+MIDKEY1$+STRING$(2,219)
44 LOCATE 14,27:PRINT TOPKEY3$+TOPKEY1$+TOPKEY1$+TOPKEY1$+TOPKEY1$+SIDEKEY$+STRING$(2,219)
45 LOCATE 15,27:PRINT MIDKEY3$+MIDKEY1$+MIDKEY1$+MIDKEY1$+MIDKEY1$+MIDKEY1$+STRING$(2,219)
46 LOCATE 16,27:PRINT MIDKEY3$+MIDKEY1$+MIDKEY1$+MIDKEY1$+MIDKEY1$+MIDKEY1$+STRING$(2,219)
47 LOCATE 17,27:PRINT BOTKEY3$+BOTKEY1$+BOTKEY1$+BOTKEY1$+BOTKEY1$+SIDEKEY$+STRING$(2,219)
48 LOCATE 18,1:PRINT STRING$(21,196)+CHR$(191)+TOPKEY5$+TOPKEY5$+TOPKEY5$+MIDKEY1$+STRING$(2,219)
49 LOCATE 19,22:PRINT CHR$(179)+MIDKEY5$+MIDKEY5$+MIDKEY5$+MIDKEY1$+STRING$(2,219)
50 LOCATE 20,22:PRINT CHR$(179)+MIDKEY5$+MIDKEY5$+MIDKEY5$+MIDKEY1$+STRING$(2,219)
51 LOCATE 21,1:PRINT STRING$(21,196)+CHR$(217)+BOTKEY5$+BOTKEY5$+BOTKEY5$+BOTKEY1$+STRING$(2,219)
52 LOCATE 22:PRINT STRING$(80,219)
53 GOSUB 85
54 GOSUB 93
55 GOSUB 101
56 GOSUB 109
57 GOSUB 118
58 GOSUB 127
59 GOSUB 136
60 GOSUB 147
61 GOSUB 157
62 GOSUB 167
63 GOSUB 177
64 GOSUB 187
65 TITLE$="Pick a key, any key!"
66 TEXT$="As a review, choose one of the keys you learned about. Try and remember its use. Then to see if you are correct, press it. When you are finished, press the space bar."
67 GOSUB 200:DEF SEG=&H40:A=PEEK(&H17):CAPS.STAT=0<>(A AND &H40):NUM.STAT=0<>(A AND &H20)
68 A$=INKEY$:DEF SEG=&H40:A=PEEK(&H17)
69 IF CAPS.STAT<>(0<>(A AND &H40)) THEN GOSUB 109:GOTO 65
70 IF NUM.STAT<>(0<>(A AND &H20)) THEN GOSUB 118:GOTO 65
71 IF (A AND &H1) THEN GOSUB 127:GOTO 65
72 IF A$="" THEN 68 ELSE ON LEN(A$) GOTO 73,77
73 IF A$=" " THEN CLS:CHAIN"k1",,ALL
74 IF A$=CHR$(13) THEN GOSUB 93:GOTO 65
75 IF A$=CHR$(8) THEN GOSUB 101:GOTO 65
76 GOTO 68
77 A=ASC(RIGHT$(A$,1))
78 IF A=72 THEN GOSUB 136:GOTO 65
79 IF A=80 THEN GOSUB 147:GOTO 65
80 IF A=75 THEN GOSUB 157:GOTO 65
81 IF A=77 THEN GOSUB 167:GOTO 65
82 IF A=82 THEN GOSUB 177:GOTO 65
83 IF A=83 THEN GOSUB 187:GOTO 65
84 GOTO 68
85 ' ====> space bar
86 TITLE$="The space bar"
87 TEXT$="Located at the bottom of the keyboard you will find the space bar. It is the longest key on the keyboard. It is just like the space bar on a typewriter keyboard. Use it as a reference point when finding other keys."
88 GOSUB 200
89 C5=C3:C6=C4:GOSUB 91
90 A$=INKEY$:IF A$<>" " THEN 90 ELSE C5=C1:C6=C2
91 COLOR C5,C6:LOCATE 18,1:PRINT STRING$(21,196)+CHR$(191):LOCATE 19,22:PRINT CHR$(179):LOCATE 20,22:PRINT CHR$(179):LOCATE 21,1:PRINT STRING$(21,196)+CHR$(217)
92 LOCATE 19,1:PRINT "space":LOCATE 20,2:PRINT "bar":RETURN
93 ' ====> return key
94 TITLE$="The return key"
95 TEXT$="One of the most used keys on a computer keyboard is the return key. Whenever you finish typing a line, you MUST press return. Remember where it is located because you will use it literally thousands of times."
96 GOSUB 200
97 C5=C3:C6=C4:GOSUB 99
98 A$=INKEY$:IF A$<>CHR$(13) THEN 98 ELSE C5=C1:C6=C2
99 COLOR C5,C6:LOCATE 6,39:PRINT TOPKEY1$:LOCATE 7,39:PRINT MIDKEY1$:LOCATE 8,39:PRINT SIDEKEY$:LOCATE 9,39:PRINT MIDKEY1$:LOCATE 10,39:PRINT MIDKEY1$:LOCATE 11,39:PRINT SIDEKEY$:LOCATE 12,39:PRINT MIDKEY1$:LOCATE 13,39:PRINT BOTKEY1$
100 LOCATE 10,41:PRINT CHR$(17)+CHR$(196)+CHR$(217):COLOR C1,C2:RETURN
101 ' ====> backspace key
102 TITLE$="The backspace key"
103 TEXT$="Located just above the return key is the backspace key. The backspace is your electronic eraser. You can correct a mistake in a line before you press return by using the backspace key."
104 GOSUB 200
105 C5=C3:C6=C4:GOSUB 107
106 A$=INKEY$:IF A$<>CHR$(8) THEN 106 ELSE C5=C1:C6=C2
107 COLOR C5,C6:LOCATE 2,33:PRINT TOPKEY4$:LOCATE 3,33:PRINT MIDKEY4$:LOCATE 4,33:PRINT MIDKEY4$:LOCATE 5,33:PRINT BOTKEY4$
108 LOCATE 4,38:PRINT CHR$(17)+CHR$(196)+CHR$(196):COLOR C1,C2:RETURN
109 ' ====> caps lock key
110 TITLE$="The Caps Lock key"
111 TEXT$="Just to the right of the space bar is the Caps Lock key. This key affects ONLY the letters on the keyboard. It will not affect any special characters. Press it once for upper case letters, press it again for lower case."
112 GOSUB 200
113 C5=C3:C6=C4:GOSUB 116
114 DEF SEG=&H40:CAPS.STAT=0<>(PEEK(&H17) AND &H40)
115 IF CAPS.STAT=(0<>(PEEK(&H17) AND &H40)) THEN 115 ELSE C5=C1:C6=C2
116 COLOR C5,C6:LOCATE 18,23:PRINT TOPKEY5$:LOCATE 19,23:PRINT MIDKEY5$:LOCATE 20,23:PRINT MIDKEY5$:LOCATE 21,23:PRINT BOTKEY5$
117 LOCATE 19,29:PRINT "Caps":LOCATE 20,29:PRINT "Lock":COLOR C1,C2:RETURN
118 ' ====> num lock key
119 TITLE$="The Num Lock key"
120 TEXT$="To the right of the backspace key is the Num Lock key. It affects the number pad (the keys below the Num Lock) in the same manner as the Caps Lock key affects the letters. Press the Num Lock once for numbers, again to shut it off."
121 GOSUB 200
122 C5=C3:C6=C4:GOSUB 125
123 DEF SEG=&H40:NUM.STAT=0<>(PEEK(&H17) AND &H20)
124 IF NUM.STAT=(0<>(PEEK(&H17) AND &H20)) THEN 124 ELSE C5=C1:C6=C2
125 COLOR C5,C6:LOCATE 2,47:PRINT TOPKEY5$:LOCATE 3,47:PRINT MIDKEY5$:LOCATE 4,47:PRINT MIDKEY5$:LOCATE 5,47:PRINT BOTKEY5$
126 LOCATE 3,53:PRINT "Num":LOCATE 4,53:PRINT "Lock":COLOR C1,C2:RETURN
127 ' ====> shift key
128 TITLE$="The shift key"
129 TEXT$="The shift key allows you to type the special characters on the top of a key. It also temporarily over-rides the Caps Lock and Num Lock keys. The shift key must be held down while the second key is pressed."
130 GOSUB 200
131 C5=C3:C6=C4:GOSUB 134
132 DEF SEG=&H40
133 IF (PEEK(&H17) AND &H1)=0 THEN 133 ELSE C5=C1:C6=C2
134 COLOR C5,C6:LOCATE 14,27:PRINT TOPKEY3$:LOCATE 15,27:PRINT MIDKEY3$:LOCATE 16,27:PRINT MIDKEY3$:LOCATE 17,27:PRINT BOTKEY3$
135 LOCATE 15,31:PRINT "/\":LOCATE 16,31:PRINT "└┘":COLOR C1,C2:RETURN
136 ' ====> cursor up key
137 TITLE$="The cursor up key"
138 TEXT$="When the Num Lock key is off (or by using the shift key) the keys on the number pad are used for moving the cursor. By pressing the cursor up key, you can move the cursor up one space. REMEMBER: The Num Lock key must be off, or else use"
139 TEXT$=TEXT$+" the shift key."
140 GOSUB 200
141 C5=C3:C6=C4:GOSUB 145
142 A$=INKEY$:IF A$="8" THEN GOSUB 197
143 IF LEN(A$)=2 THEN IF ASC(RIGHT$(A$,1))=72 THEN C5=C1:C6=C2:GOTO 145
144 GOTO 142
145 COLOR C5,C6:LOCATE 6,55:PRINT TOPKEY1$:LOCATE 7,55:PRINT MIDKEY1$:LOCATE 8,55:PRINT MIDKEY1$:LOCATE 9,55:PRINT BOTKEY1$
146 LOCATE 7,58:PRINT "8":LOCATE 8,57:PRINT CHR$(24):COLOR C1,C2:RETURN
147 ' ====> cursor down key
148 TITLE$="The cursor down key"
149 TEXT$="The cursor down key lets you move the cursor down one row (maybe that is where it got its name?). Again remember, the Num Lock key must be off, or else you will have to use the shift key too."
150 GOSUB 200
151 C5=C3:C6=C4:GOSUB 155
152 A$=INKEY$:IF A$="2" THEN GOSUB 197
153 IF LEN(A$)=2 THEN IF ASC(RIGHT$(A$,1))=80 THEN C5=C1:C6=C2:GOTO 155
154 GOTO 152
155 COLOR C5,C6:LOCATE 14,55:PRINT TOPKEY1$:LOCATE 15,55:PRINT MIDKEY1$:LOCATE 16,55:PRINT MIDKEY1$:LOCATE 17,55:PRINT BOTKEY1$
156 LOCATE 15,58:PRINT "2":LOCATE 16,57:PRINT CHR$(25):COLOR C1,C2:RETURN
157 ' ====> cursor left key
158 TITLE$="The cursor left key"
159 TEXT$="By now you can probably guess what the cursor left key does. If not, it allows you to move the cursor to the left one position. It doesn't erase like the backspace key does."
160 GOSUB 200
161 C5=C3:C6=C4:GOSUB 165
162 A$=INKEY$:IF A$="4" THEN GOSUB 197
163 IF LEN(A$)=2 THEN IF ASC(RIGHT$(A$,1))=75 THEN C5=C1:C6=C2:GOTO 165
164 GOTO 162
165 COLOR C5,C6:LOCATE 10,47:PRINT TOPKEY1$:LOCATE 11,47:PRINT MIDKEY1$:LOCATE 12,47:PRINT MIDKEY1$:LOCATE 13,47:PRINT BOTKEY1$
166 LOCATE 11,50:PRINT "4":LOCATE 12,49:PRINT CHR$(27):COLOR C1,C2:RETURN
167 ' ====> cursor right key
168 TITLE$="The cursor right key"
169 TEXT$="Of course, the cursor right key moves the cursor to the right one position. The space bar does this as well, but the cursor right key won't erase."
170 GOSUB 200
171 C5=C3:C6=C4:GOSUB 175
172 A$=INKEY$:IF A$="6" THEN GOSUB 197
173 IF LEN(A$)=2 THEN IF ASC(RIGHT$(A$,1))=77 THEN C5=C1:C6=C2:GOTO 175
174 GOTO 172
175 COLOR C5,C6:LOCATE 10,63:PRINT TOPKEY1$:LOCATE 11,63:PRINT MIDKEY1$:LOCATE 12,63:PRINT MIDKEY1$:LOCATE 13,63:PRINT BOTKEY1$
176 LOCATE 11,66:PRINT "6":LOCATE 12,65:PRINT CHR$(26):COLOR C1,C2:RETURN
177 ' ====> Insert key
178 TITLE$="The Ins (insert) key"
179 TEXT$="You can insert characters in the middle of a line using the Ins key. Just move the cursor to where you want to insert and press the Ins key. The cursor will become larger to show that you are in insert mode, then just type in the letters."
180 GOSUB 200
181 C5=C3:C6=C4:GOSUB 185
182 A$=INKEY$:IF A$="0" THEN GOSUB 197
183 IF LEN(A$)=2 THEN IF ASC(RIGHT$(A$,1))=82 THEN C5=C1:C6=C2:GOTO 185
184 GOTO 182
185 COLOR C5,C6:LOCATE 18,39:PRINT TOPKEY5$:LOCATE 19,39:PRINT MIDKEY5$:LOCATE 20,39:PRINT MIDKEY5$:LOCATE 21,39:PRINT BOTKEY5$
186 LOCATE 19,45:PRINT "0":LOCATE 20,44:PRINT "Ins":COLOR C1,C2:RETURN
187 ' ====> Delete key
188 TITLE$="The Del (delete) key"
189 TEXT$="The Del key is similar to the backspace key except it lets you erase to the right of the cursor. Pressing the Del key shuts off insert mode, but pressing the backspace does not."
190 GOSUB 200
191 C5=C3:C6=C4:GOSUB 195
192 A$=INKEY$:IF A$="." THEN GOSUB 197
193 IF LEN(A$)=2 THEN IF ASC(RIGHT$(A$,1))=83 THEN C5=C1:C6=C2:GOTO 195
194 GOTO 192
195 COLOR C5,C6:LOCATE 18,55:PRINT TOPKEY5$:LOCATE 19,55:PRINT MIDKEY5$:LOCATE 20,55:PRINT MIDKEY5$:LOCATE 21,55:PRINT BOTKEY5$
196 LOCATE 19,61:PRINT "•":LOCATE 20,60:PRINT "Del":COLOR C1,C2:RETURN
197 ' -- num lock is on
198 BEEP:COLOR C1,C2:LOCATE 24,1:PRINT "If the Num Lock key is on, you must either press it again or use the shift key.";
199 IF INKEY$="" THEN 199 ELSE LOCATE 24,1:PRINT SPACE$(79);:RETURN
200 ' ====> write text
201 IF INKEY$<>"" THEN 201 ELSE PRESSED.KEY=0
202 FOR R=2 TO 5:LOCATE R:PRINT SPACE$(24):NEXT
203 FOR R=6 TO 9:LOCATE R:PRINT SPACE$(28):NEXT
204 FOR R=10 TO 13:LOCATE R:PRINT SPACE$(30):NEXT
205 FOR R=14 TO 17:LOCATE R:PRINT SPACE$(26):NEXT
206 LOCATE 3,INT(14-(LEN(TITLE$)/2)):PRINT TITLE$:R=4
207 R=R+1:IF R<6 THEN L=24 ELSE IF R<10 THEN L=28 ELSE IF R<14 THEN L=30 ELSE L=26
208 IF L>=LEN(TEXT$) THEN LOCATE R,1:PRINT TEXT$:IF LEFT$(TITLE$,5)<>"Press" THEN LOCATE R+2,7:PRINT "Press it now.":RETURN ELSE RETURN
209 P=L+1:WHILE MID$(TEXT$,P,1)<>" ":P=P-1:WEND
210 LOCATE R,1:PRINT LEFT$(TEXT$,P-1):TEXT$=RIGHT$(TEXT$,LEN(TEXT$)-P)
211 GOTO 207
```
{% endraw %}

## K1.BAS

{% raw %}
```bas
0 ' ====> K1.bas
1 LOCATE 1:PRINT STRING$(80,219)
2 LOCATE 2:PRINT STRING$(2,219)+TOPKEY1$+TOPKEY1$+CHR$(219)+TOPKEY1$+TOPKEY1$
3 LOCATE 3:PRINT STRING$(2,219)+MIDKEY1$+MIDKEY1$+CHR$(219)+MIDKEY1$+MIDKEY1$
4 LOCATE 4:PRINT STRING$(2,219)+MIDKEY1$+MIDKEY1$+CHR$(219)+MIDKEY1$+MIDKEY1$
5 LOCATE 5:PRINT STRING$(2,219)+BOTKEY1$+BOTKEY1$+CHR$(219)+BOTKEY1$+BOTKEY1$
6 LOCATE 6:PRINT STRING$(2,219)+TOPKEY1$+TOPKEY1$+CHR$(219)+TOPKEY3$+TOPKEY1$
7 LOCATE 7:PRINT STRING$(2,219)+MIDKEY1$+MIDKEY1$+CHR$(219)+MIDKEY3$+MIDKEY1$
8 LOCATE 8:PRINT STRING$(2,219)+MIDKEY1$+MIDKEY1$+CHR$(219)+MIDKEY3$+MIDKEY1$
9 LOCATE 9:PRINT STRING$(2,219)+BOTKEY1$+BOTKEY1$+CHR$(219)+BOTKEY3$+BOTKEY1$
10 LOCATE 10:PRINT STRING$(2,219)+TOPKEY1$+TOPKEY1$+CHR$(219)+TOPKEY4$+TOPKEY1$
11 LOCATE 11:PRINT STRING$(2,219)+MIDKEY1$+MIDKEY1$+CHR$(219)+MIDKEY4$+MIDKEY1$
12 LOCATE 12:PRINT STRING$(2,219)+MIDKEY1$+MIDKEY1$+CHR$(219)+MIDKEY4$+MIDKEY1$
13 LOCATE 13:PRINT STRING$(2,219)+BOTKEY1$+BOTKEY1$+CHR$(219)+BOTKEY4$+BOTKEY1$
14 LOCATE 14:PRINT STRING$(2,219)+TOPKEY1$+TOPKEY1$+CHR$(219)+TOPKEY2$+TOPKEY1$
15 LOCATE 15:PRINT STRING$(2,219)+MIDKEY1$+MIDKEY1$+CHR$(219)+MIDKEY2$+MIDKEY1$
16 LOCATE 16:PRINT STRING$(2,219)+MIDKEY1$+MIDKEY1$+CHR$(219)+MIDKEY2$+MIDKEY1$
17 LOCATE 17:PRINT STRING$(2,219)+BOTKEY1$+BOTKEY1$+CHR$(219)+BOTKEY2$+BOTKEY1$
18 LOCATE 18:PRINT STRING$(2,219)+TOPKEY1$+TOPKEY1$+CHR$(219)+TOPKEY5$+CHR$(218)+STRING$(44,196)
19 LOCATE 19:PRINT STRING$(2,219)+MIDKEY1$+MIDKEY1$+CHR$(219)+MIDKEY5$+CHR$(179)
20 LOCATE 20:PRINT STRING$(2,219)+MIDKEY1$+MIDKEY1$+CHR$(219)+MIDKEY5$+CHR$(179)
21 LOCATE 21:PRINT STRING$(2,219)+BOTKEY1$+BOTKEY1$+CHR$(219)+BOTKEY5$+CHR$(192)+STRING$(44,196)
22 LOCATE 22:PRINT STRING$(80,219)
23 GOSUB 54
24 GOSUB 62
25 GOSUB 70
26 GOSUB 78
27 GOSUB 87
28 GOSUB 96
29 GOSUB 105
30 GOSUB 114
31 GOSUB 123
32 GOSUB 132
33 GOSUB 141
34 GOSUB 150
35 TITLE$="Pick a key, any key!"
36 TEXT$="As a review, choose one of the keys you learned about. Try and remember its use. Then to see if you are correct, press it. When you are finished, press the space bar."
37 GOSUB 159
38 A$=INKEY$:DEF SEG=&H40:A=PEEK(&H17)
39 IF (A AND &H2) THEN GOSUB 78:GOTO 35
40 IF (A AND &H4) THEN GOSUB 87:GOTO 35
41 IF (A AND &H8) THEN GOSUB 96:GOTO 35
42 IF A$="" THEN 38
43 IF A$=" " THEN CLS:CHAIN"k2",,ALL
44 IF A$=CHR$(27) THEN GOSUB 62:GOTO 35
45 IF A$=CHR$(9) THEN GOSUB 70:GOTO 35
46 IF LEN(A$)<2 THEN 38 ELSE A$=RIGHT$(A$,1)
47 IF A$=CHR$(59) THEN GOSUB 105:GOTO 35
48 IF A$=CHR$(60) THEN GOSUB 114:GOTO 35
49 IF A$=CHR$(61) THEN GOSUB 123:GOTO 35
50 IF A$=CHR$(66) THEN GOSUB 132:GOTO 35
51 IF A$=CHR$(67) THEN GOSUB 141:GOTO 35
52 IF A$=CHR$(68) THEN GOSUB 150:GOTO 35
53 GOTO 38
54 ' ====> space bar
55 TITLE$="The space bar"
56 TEXT$="Once again, locate the space bar. It is used a reference point for the other keys."
57 GOSUB 159
58 C5=C3:C6=C4:GOSUB 60
59 A$=INKEY$:IF A$<>" " THEN 59 ELSE C5=C1:C6=C2
60 COLOR C5,C6:LOCATE 18,36:PRINT CHR$(218)+STRING$(44,196):LOCATE 19,36:PRINT CHR$(179):LOCATE 20,36:PRINT CHR$(179):LOCATE 21,36:PRINT CHR$(192)+STRING$(44,196)
61 LOCATE 19,76:PRINT "space":LOCATE 20,77:PRINT "bar":RETURN
62 ' ====> esc key
63 TITLE$="The Esc (escape) key"
64 TEXT$="The escape key erases the entire line the cursor is on. This is much faster than backspacing or deleting the line."
65 GOSUB 159
66 C5=C3:C6=C4:GOSUB 68
67 A$=INKEY$:IF A$<>CHR$(27) THEN 67 ELSE C5=C1:C6=C2
68 COLOR C5,C6:LOCATE 2,20:PRINT TOPKEY1$:LOCATE 3,20:PRINT MIDKEY1$:LOCATE 4,20:PRINT MIDKEY1$:LOCATE 5,20:PRINT BOTKEY1$
69 LOCATE 3,22:PRINT "Esc":COLOR C1,C2:RETURN
70 ' ====> tab key
71 TITLE$="The tab key"
72 TEXT$="The key with two arrows on it is the tab key. It works the same as the tab key on typewriter. Tab stops are set at every eight spaces."
73 GOSUB 159
74 C5=C3:C6=C4:GOSUB 76
75 A$=INKEY$:IF A$<>CHR$(9) THEN 75 ELSE C5=C1:C6=C2
76 COLOR C5,C6:LOCATE 6,20:PRINT TOPKEY3$:LOCATE 7,20:PRINT MIDKEY3$:LOCATE 8,20:PRINT MIDKEY3$:LOCATE 9,20:PRINT BOTKEY3$
77 LOCATE 7,23:PRINT CHR$(179)+CHR$(17)+STRING$(2,196):LOCATE 8,23:PRINT STRING$(2,196)+CHR$(16)+CHR$(179):COLOR C1,C2:RETURN
78 ' ====> left shift key
79 TITLE$="The shift key"
80 TEXT$="There is a shift key on the left side of the keyboard as well. You can use either shift key, the computer doesn't care. Remember, the shift key must be held down while the second key is pressed."
81 GOSUB 159
82 C5=C3:C6=C4:GOSUB 85
83 DEF SEG=&H40
84 IF (PEEK(&H17) AND &H2)=0 THEN 84 ELSE C5=C1:C6=C2
85 COLOR C5,C6:LOCATE 14,20:PRINT TOPKEY2$:LOCATE 15,20:PRINT MIDKEY2$:LOCATE 16,20:PRINT MIDKEY2$:LOCATE 17,20:PRINT BOTKEY2$
86 LOCATE 15,23:PRINT "/\":LOCATE 16,23:PRINT "└┘":COLOR C1,C2:RETURN
87 ' ====> ctrl key
88 TITLE$="The Ctrl (control) key"
89 TEXT$="The Ctrl key is a special type of shift key. It too must be held down while the second key is pressed."
90 GOSUB 159
91 C5=C3:C6=C4:GOSUB 94
92 DEF SEG=&H40
93 IF (PEEK(&H17) AND &H4)=0 THEN 93 ELSE C5=C1:C6=C2
94 COLOR C5,C6:LOCATE 10,20:PRINT TOPKEY4$:LOCATE 11,20:PRINT MIDKEY4$:LOCATE 12,20:PRINT MIDKEY4$:LOCATE 13,20:PRINT BOTKEY4$
95 LOCATE 11,25:PRINT "Ctrl":COLOR C1,C2:RETURN
96 ' ====> Alt key
97 TITLE$="The Alt (alternate) key"
98 TEXT$="Like the Ctrl key, the Alt key is a special type of shift key. In BASIC it can be used to type special words with only two keystrokes. For example, if you press the Alt key and the C key together, the word COLOR will be displayed."
99 GOSUB 159
100 C5=C3:C6=C4:GOSUB 103
101 DEF SEG=&H40
102 IF (PEEK(&H17) AND &H8)=0 THEN 102 ELSE C5=C1:C6=C2
103 COLOR C5,C6:LOCATE 18,20:PRINT TOPKEY5$:LOCATE 19,20:PRINT MIDKEY5$:LOCATE 20,20:PRINT MIDKEY5$:LOCATE 21,20:PRINT BOTKEY5$
104 LOCATE 19,26:PRINT "Alt":COLOR C1,C2:RETURN
105 ' ====> function keys
106 TITLE$="The function keys"
107 TEXT$="The function keys are programmable keys. This means you can tell the computer what each one is supposed to do. The BASIC Prof has told the computer to backup one page whenever you press function key 1 (F1)."
108 GOSUB 159
109 C5=C3:C6=C4:GOSUB 112
110 A$=INKEY$:IF LEN(A$)=2 THEN IF ASC(RIGHT$(A$,1))=59 THEN C5=C1:C6=C2:GOTO 112
111 GOTO 110
112 COLOR C5,C6:LOCATE 2,3:PRINT TOPKEY1$:LOCATE 3,3:PRINT MIDKEY1$:LOCATE 4,3:PRINT MIDKEY1$:LOCATE 5,3:PRINT BOTKEY1$
113 LOCATE 3,5:PRINT "F1":COLOR C1,C2:RETURN
114 ' ====> function key 2
115 TITLE$="Function key 2 (F2)"
116 TEXT$="Hopefully, you will nearly wear out function key 2. You press F2 when you are ready to move on to the next page of the BASIC Prof."
117 GOSUB 159
118 C5=C3:C6=C4:GOSUB 121
119 A$=INKEY$:IF LEN(A$)=2 THEN IF ASC(RIGHT$(A$,1))=60 THEN C5=C1:C6=C2:GOTO 121
120 GOTO 119
121 COLOR C5,C6:LOCATE 2,11:PRINT TOPKEY1$:LOCATE 3,11:PRINT MIDKEY1$:LOCATE 4,11:PRINT MIDKEY1$:LOCATE 5,11:PRINT BOTKEY1$
122 LOCATE 3,13:PRINT "F2":COLOR C1,C2:RETURN
123 ' ====> function key 3
124 TITLE$="Function key 3 (F3)"
125 TEXT$="When you press F3, the current page will be re-printed on the screen. This is usefull if the instructions scroll off the screen when you try something out."
126 GOSUB 159
127 C5=C3:C6=C4:GOSUB 130
128 A$=INKEY$:IF LEN(A$)=2 THEN IF ASC(RIGHT$(A$,1))=61 THEN C5=C1:C6=C2:GOTO 130
129 GOTO 128
130 COLOR C5,C6:LOCATE 6,3:PRINT TOPKEY1$:LOCATE 7,3:PRINT MIDKEY1$:LOCATE 8,3:PRINT MIDKEY1$:LOCATE 9,3:PRINT BOTKEY1$
131 LOCATE 7,5:PRINT "F3":COLOR C1,C2:RETURN
132 ' ====> function key 8
133 TITLE$="Function key 8 (F8)"
134 TEXT$="Function key 8 allows you to go back to the lesson menu and choose which ever lesson you want. You then also have the option of aborting the BASIC Prof."
135 GOSUB 159
136 C5=C3:C6=C4:GOSUB 139
137 A$=INKEY$:IF LEN(A$)=2 THEN IF ASC(RIGHT$(A$,1))=66 THEN C5=C1:C6=C2:GOTO 139
138 GOTO 137
139 COLOR C5,C6:LOCATE 14,11:PRINT TOPKEY1$:LOCATE 15,11:PRINT MIDKEY1$:LOCATE 16,11:PRINT MIDKEY1$:LOCATE 17,11:PRINT BOTKEY1$
140 LOCATE 15,13:PRINT "F8":COLOR C1,C2:RETURN
141 ' ====> function key 9
142 TITLE$="Function key 9 (F9)"
143 TEXT$="When you press function key 9, the BASIC Prof. will show you a table of contents. You then will be able to choose a specific page to turn to, or return to the page you were at.
144 GOSUB 159
145 C5=C3:C6=C4:GOSUB 148
146 A$=INKEY$:IF LEN(A$)=2 THEN IF ASC(RIGHT$(A$,1))=67 THEN C5=C1:C6=C2:GOTO 148
147 GOTO 146
148 COLOR C5,C6:LOCATE 18,3:PRINT TOPKEY1$:LOCATE 19,3:PRINT MIDKEY1$:LOCATE 20,3:PRINT MIDKEY1$:LOCATE 21,3:PRINT BOTKEY1$
149 LOCATE 19,5:PRINT "F9":COLOR C1,C2:RETURN
150 ' ====> function key 10
151 TITLE$="Function key 10 (F10)"
152 TEXT$="When you press function key 10, the BASIC Prof. will show you an alphabetical index. You then will be able to choose a specific page to turn to, or return to the page you were at.
153 GOSUB 159
154 C5=C3:C6=C4:GOSUB 157
155 A$=INKEY$:IF LEN(A$)=2 THEN IF ASC(RIGHT$(A$,1))=68 THEN C5=C1:C6=C2:GOTO 157
156 GOTO 155
157 COLOR C5,C6:LOCATE 18,11:PRINT TOPKEY1$:LOCATE 19,11:PRINT MIDKEY1$:LOCATE 20,11:PRINT MIDKEY1$:LOCATE 21,11:PRINT BOTKEY1$
158 LOCATE 19,13:PRINT "F10":COLOR C1,C2:RETURN
159 ' ====> write text
160 IF INKEY$<>"" THEN 160 ELSE PRESSED.KEY=0
161 FOR R=2 TO 17:LOCATE R,42:PRINT SPACE$(38):NEXT
162 LOCATE 3,INT(62-(LEN(TITLE$))/2):PRINT TITLE$:R=4
163 R=R+1:IF 37>=LEN(TEXT$) THEN LOCATE R,43:PRINT TEXT$:LOCATE R+2,55:PRINT "Press it now.":RETURN
164 P=38:WHILE MID$(TEXT$,P,1)<>" ":P=P-1:WEND
165 LOCATE R,43:PRINT LEFT$(TEXT$,P-1):TEXT$=RIGHT$(TEXT$,LEN(TEXT$)-P)
166 GOTO 163
```
{% endraw %}

## K2.BAS

{% raw %}
```bas
0 ' ====> K2.bas
1 LOCATE 1:PRINT STRING$(35,219)+STRING$(19,32)+STRING$(26,219)
2 LOCATE 2:PRINT STRING$(2,219)+TOPKEY1$+TOPKEY1$+CHR$(219)+TOPKEY1$+STRING$(35,32)+TOPKEY5$+STRING$(2,219)
3 LOCATE 3:PRINT STRING$(2,219)+MIDKEY1$+MIDKEY1$+CHR$(219)+MIDKEY1$+STRING$(35,32)+MIDKEY5$+STRING$(2,219)
4 LOCATE 4:PRINT STRING$(2,219)+MIDKEY1$+MIDKEY1$+CHR$(219)+MIDKEY1$+STRING$(35,32)+MIDKEY5$+STRING$(2,219)
5 LOCATE 5:PRINT STRING$(2,219)+BOTKEY1$+BOTKEY1$+CHR$(219)+BOTKEY1$+STRING$(35,32)+BOTKEY5$+STRING$(2,219)
6 LOCATE 6:PRINT STRING$(2,219)+TOPKEY1$+TOPKEY1$+CHR$(219)+TOPKEY3$+STRING$(39,32)+TOPKEY1$+STRING$(2,219)
7 LOCATE 7:PRINT STRING$(2,219)+MIDKEY1$+MIDKEY1$+CHR$(219)+MIDKEY3$+STRING$(39,32)+MIDKEY1$+STRING$(2,219)
8 LOCATE 8:PRINT STRING$(2,219)+MIDKEY1$+MIDKEY1$+CHR$(219)+MIDKEY3$+STRING$(39,32)+MIDKEY1$+STRING$(2,219)
9 LOCATE 9:PRINT STRING$(2,219)+BOTKEY1$+BOTKEY1$+CHR$(219)+BOTKEY3$+STRING$(39,32)+BOTKEY1$+STRING$(2,219)
10 LOCATE 10:PRINT STRING$(2,219)+TOPKEY1$+TOPKEY1$+CHR$(219)+TOPKEY4$+STRING$(37,32)+TOPKEY1$+STRING$(2,219)
11 LOCATE 11:PRINT STRING$(2,219)+MIDKEY1$+MIDKEY1$+CHR$(219)+MIDKEY4$+STRING$(37,32)+MIDKEY1$+STRING$(2,219)
12 LOCATE 12:PRINT STRING$(2,219)+MIDKEY1$+MIDKEY1$+CHR$(219)+MIDKEY4$+STRING$(37,32)+MIDKEY1$+STRING$(2,219)
13 LOCATE 13:PRINT STRING$(2,219)+BOTKEY1$+BOTKEY1$+CHR$(219)+BOTKEY4$+STRING$(37,32)+MIDKEY1$+STRING$(2,219)
14 LOCATE 14:PRINT STRING$(2,219)+TOPKEY1$+TOPKEY1$+CHR$(219)+TOPKEY2$+STRING$(41,32)+SIDEKEY$+STRING$(2,219)
15 LOCATE 15:PRINT STRING$(2,219)+MIDKEY1$+MIDKEY1$+CHR$(219)+MIDKEY2$+STRING$(41,32)+MIDKEY1$+STRING$(2,219)
16 LOCATE 16:PRINT STRING$(2,219)+MIDKEY1$+MIDKEY1$+CHR$(219)+MIDKEY2$+STRING$(41,32)+MIDKEY1$+STRING$(2,219)
17 LOCATE 17:PRINT STRING$(2,219)+BOTKEY1$+BOTKEY1$+CHR$(219)+BOTKEY2$+STRING$(41,32)+SIDEKEY$+STRING$(2,219)
18 LOCATE 18:PRINT STRING$(2,219)+TOPKEY1$+TOPKEY1$+CHR$(219)+TOPKEY5$+STRING$(19,32)+TOPKEY5$+MIDKEY1$+STRING$(2,219)
19 LOCATE 19:PRINT STRING$(2,219)+MIDKEY1$+MIDKEY1$+CHR$(219)+MIDKEY5$+STRING$(19,32)+MIDKEY5$+MIDKEY1$+STRING$(2,219)
20 LOCATE 20:PRINT STRING$(2,219)+MIDKEY1$+MIDKEY1$+CHR$(219)+MIDKEY5$+STRING$(19,32)+MIDKEY5$+MIDKEY1$+STRING$(2,219)
21 LOCATE 21:PRINT STRING$(2,219)+BOTKEY1$+BOTKEY1$+CHR$(219)+BOTKEY5$+STRING$(19,32)+BOTKEY5$+BOTKEY1$+STRING$(2,219)
22 LOCATE 22:PRINT STRING$(35,219)+STRING$(19,32)+STRING$(26,219)
23 LOCATE 3,36:PRINT "System Reset Sequence"
24 LOCATE 5,36:PRINT "The last item of the":LOCATE 6,36:PRINT "keyboard introduction is the system":LOCATE 7,36:PRINT "reset sequence. By pressing the":LOCATE 8,36:PRINT "Ctrl, Alt and Del keys together,"
25 LOCATE 9,36:PRINT "you can "+CHR$(34)+"re-boot"+CHR$(34)+" the computer":LOCATE 10,36:PRINT "(this does the same thing as":LOCATE 11,36:PRINT "switching off and on the power)."
26 LOCATE 12,36:PRINT "Find, press and hold first the Ctrl":LOCATE 13,36:PRINT "key, then the Alt key and last the":LOCATE 14,36:PRINT "Del key."
27 LOCATE 15,36:COLOR C3,C4:PRINT "==> REMEMBER <==";:COLOR C1,C2:PRINT" This sequence will":LOCATE 16,36:PRINT "re-start the BASIC Prof. You should":LOCATE 17,36:PRINT "then continue with lesson one."
28 COLOR C3,C4:LOCATE 10,20:PRINT TOPKEY4$:LOCATE 11,20:PRINT MIDKEY4$:LOCATE 12,20:PRINT MIDKEY4$:LOCATE 13,20:PRINT BOTKEY4$
29 LOCATE 11,25:PRINT "Ctrl"
30 LOCATE 18,20:PRINT TOPKEY5$:LOCATE 19,20:PRINT MIDKEY5$:LOCATE 20,20:PRINT MIDKEY5$:LOCATE 21,20:PRINT BOTKEY5$
31 LOCATE 19,26:PRINT "Alt"
32 LOCATE 18,55:PRINT TOPKEY5$:LOCATE 19,55:PRINT MIDKEY5$:LOCATE 20,55:PRINT MIDKEY5$:LOCATE 21,55:PRINT BOTKEY5$
33 LOCATE 19,61:PRINT "•":LOCATE 20,60:PRINT "Del":COLOR C1,C2
34 DEF SEG:POKE 91,24:POKE 92,25:LOCATE 24,1
35 GOTO 35
```
{% endraw %}

## LET.BAS

{% raw %}
```bas
0 ' ====> LET.bas
1 ON KEY(1) GOSUB 8:KEY (1) ON
2 ON KEY(2) GOSUB 9:KEY (2) ON
3 ON KEY(3) GOSUB 10:KEY (3) ON
4 ON KEY(8) GOSUB 11:KEY (8) ON
5 ON KEY(9) GOSUB 12:KEY (9) ON
6 ON KEY(10) GOSUB 13:KEY (10) ON
7 GOTO 14
8 RUN"backup"
9 RUN"forward"
10 RUN"repeat"
11 RUN"a0"
12 RUN"contents"
13 RUN"index"
14 LOCATE 23,3:PRINT "Press the ";:COLOR C2,C1:PRINT "space bar";:COLOR C1,C2:PRINT" to begin illustration of the LET and PRINT statements."
15 IF INKEY$<>"" THEN 15
16 IF INKEY$<>" " THEN 16 ELSE FOR I=1 TO 23:LOCATE I,1:PRINT SPACE$(80);:NEXT:LOCATE 1,62:COLOR C1,C2:PRINT "Variables":LOCATE 2,60:PRINT "Value     Name"
17 GOSUB 70:PRINT "If you were to type PRINT NUM1 and press return ..."
18 LOCATE 3,1:PRINT "YOU":TYPE$="PRINT NUM1":LOCATE 3,15:GOSUB 69
19 GOSUB 70:PRINT "The computer would search its memory for a variable named NUM1."
20 GOSUB 71
21 GOSUB 70:PRINT "Since it isn't found, the computer reserves a portion of memory for"
22 COLOR C3,C4:PRINT "NUM1";:COLOR C1,C2:PRINT ".  Its value is now ";:COLOR C3,C4:PRINT "0";:COLOR C1,C2:PRINT " because it is a new variable."
23 LOCATE 3,60:LOCATE 3,60:GOSUB 74:LOCATE 4,61:COLOR C3,C4:PRINT "0":LOCATE 4,70:PRINT "NUM1"
24 GOSUB 71
25 LOCATE 4,1:COLOR C3,C4:PRINT "COMPUTER";TAB(15);0:LOCATE 5,15:PRINT "OK"
26 GOSUB 70:PRINT "Because ";:COLOR C3,C4:PRINT "NUM1";:COLOR C1,C2:PRINT " is equal to ";:COLOR C3,C4:PRINT "0";:COLOR C1,C2:PRINT ", the computer prints ";:COLOR C3,C4:PRINT "0";:COLOR C1,C2:PRINT " and then tells you"
27 PRINT "it is ready to do something else with the ";:COLOR C3,C4:PRINT "OK";:COLOR C1,C2:PRINT "."
28 GOSUB 71
29 GOSUB 70:PRINT "If you now typed LET NUM1=73 and pressed return ..."
30 LOCATE 6,1:PRINT "YOU":TYPE$="LET NUM1=73":LOCATE 6,15:GOSUB 69
31 GOSUB 70:PRINT "The variable named ";:COLOR C3,C4:PRINT "NUM1";:COLOR C1,C2:PRINT " would be assigned the value ";:COLOR C3,C4:PRINT "73";:COLOR C1,C2:PRINT "."
32 LOCATE 4,61:COLOR C3,C4:PRINT "73":GOSUB 71
33 GOSUB 70:PRINT "And again, the computer would respond with ";:COLOR C3,C4:PRINT "OK";:COLOR C1,C2:PRINT "."
34 LOCATE 7,1:COLOR C3,C4:PRINT "COMPUTER";TAB(15);"OK":GOSUB 71
35 GOSUB 70:PRINT "If you were to again type PRINT NUM1 and press return ..."
36 LOCATE 8,1:PRINT "YOU":TYPE$="PRINT NUM1":LOCATE 8,15:GOSUB 69
37 GOSUB 70:PRINT "The computer would find that the variable named ";:COLOR C3,C4:PRINT "NUM1";:COLOR C1,C2:PRINT " has a value of ";:COLOR C3,C4:PRINT "73";:COLOR C1,C2:PRINT ".":GOSUB 71
38 GOSUB 70:PRINT "Because the variable named ";:COLOR C3,C4:PRINT "NUM1";:COLOR C1,C2:PRINT " has a value of ";:COLOR C3,C4:PRINT "73";
39 COLOR C1,C2:PRINT ", the computer";" would print ";:COLOR C3,C4:PRINT "73";:COLOR C1,C2:PRINT " and respond with ";:COLOR C3,C4:PRINT "OK";:COLOR C1,C2:PRINT "."
40 LOCATE 9,1:COLOR C3,C4:PRINT "COMPUTER";TAB(15);73:LOCATE 10,15:PRINT "OK":GOSUB 71
41 GOSUB 70:PRINT "If you now typed LET NUM2=67 and pressed return ..."
42 LOCATE 11,1:PRINT "YOU":TYPE$="LET NUM2=67":LOCATE 11,15:GOSUB 69
43 GOSUB 70:PRINT "The computer would reserve space for the variable named ";:COLOR C3,C4:PRINT "NUM2";:COLOR C1,C2:PRINT ", and";"assign it the value ";:COLOR C3,C4:PRINT "67";:COLOR C1,C2:PRINT "."
44 LOCATE 6,60:LOCATE 6,60:GOSUB 74:LOCATE 7,61:COLOR C3,C4:PRINT "67":LOCATE 7,70:PRINT "NUM2"
45 GOSUB 71
46 GOSUB 70:PRINT "Once again, the computer would respond with ";:COLOR C3,C4:PRINT "OK";:COLOR C1,C2:PRINT "."
47 LOCATE 12,1:COLOR C3,C4:PRINT "COMPUTER";TAB(15);"OK":GOSUB 71
48 GOSUB 70:PRINT "If you now typed AVERAGE=(NUM1+NUM2)/2 and pressed return ..."
49 LOCATE 13,1:PRINT "YOU":TYPE$="AVERAGE=(NUM1+NUM2)/2":LOCATE 13,15:GOSUB 69
50 LOCATE 1,30:PRINT "AVERAGE=(NUM1+NUM2)/2"
51 GOSUB 70:PRINT "The computer would find the value of ";:COLOR C3,C4:PRINT "NUM1";:COLOR C1,C2:PRINT " to be ";:COLOR C3,C4:PRINT "73";:COLOR C1,C2:PRINT ".":GOSUB 71
52 LOCATE 1,39:COLOR C3,C4:PRINT " 73 "
53 GOSUB 70:PRINT "It would also find the value of ";:COLOR C3,C4:PRINT "NUM2";:COLOR C1,C2:PRINT " to be ";:COLOR C3,C4:PRINT "67";:COLOR C1,C2:PRINT ".":GOSUB 71
54 LOCATE 1,44:COLOR C3,C4:PRINT " 67 "
55 GOSUB 70:PRINT "The computer does what is in the parentheses ";CHR$(34);:COLOR C3,C4:PRINT "( )";:COLOR C1,C2:PRINT CHR$(34);" first.":GOSUB 71
56 GOSUB 70:LOCATE 1,38:COLOR C3,C4:PRINT " 140 ";:COLOR C1,C2:PRINT "/ 2      ":GOSUB 71
57 LOCATE 1,38:COLOR C3,C4:PRINT " 70       "
58 GOSUB 70:PRINT "The computer would reserve space for the variable named ";:COLOR C3,C4:PRINT "AVERAGE";:COLOR C1,C2:PRINT ", and";"assign it the value ";:COLOR C3,C4:PRINT "70";:COLOR C1,C2:PRINT "."
59 LOCATE 9,60:GOSUB 74:LOCATE 10,61:COLOR C3,C4:PRINT "70":LOCATE 10,70:PRINT "AVERAGE":GOSUB 71
60 LOCATE 1,30:PRINT SPACE$(20):LOCATE 14,1:COLOR C3,C4:PRINT "COMPUTER";TAB(15);"OK"
61 GOSUB 70:PRINT "And then let you know it is ready to continue with the ";:COLOR C3,C4:PRINT "OK";:COLOR C1,C2:PRINT ".":GOSUB 71
62 GOSUB 70:PRINT "If you were now to type PRINT AVERAGE and press return ..."
63 LOCATE 15,1:PRINT "YOU":TYPE$="PRINT AVERAGE":LOCATE 15,15:GOSUB 69
64 GOSUB 70:PRINT "The computer finds the value for the variable ";:COLOR C3,C4:PRINT "AVERAGE";:COLOR C1,C2:PRINT " to be ";:COLOR C3,C4:PRINT "70";:COLOR C1,C2:PRINT ".":GOSUB 71
65 LOCATE 16,1:COLOR C3,C4:PRINT "COMPUTER";TAB(15);70:LOCATE 17,15:PRINT "OK"
66 GOSUB 70:PRINT "The computer now prints ";:COLOR C3,C4:PRINT "70";:COLOR C1,C2:PRINT " and responds with the ";:COLOR C3,C4:PRINT "OK";:COLOR C1,C2:PRINT ".":GOSUB 71
67 GOSUB 70:PRINT "And that's it.  Press the appropriate ";:COLOR C3,C4:PRINT "function key";:COLOR C1,C2:PRINT " to continue."
68 NEW
69 FOR I=1 TO LEN(TYPE$):PRINT MID$(TYPE$,I,1);:FOR P=1 TO 1000:NEXT:NEXT:RETURN
70 FOR I=19 TO 21:LOCATE I,1:PRINT SPACE$(80);:NEXT:LOCATE 19,9:COLOR C1,C2:RETURN
71 BEEP:LOCATE 23,24:COLOR C1,C2:PRINT "Press the ";:COLOR C2,C1:PRINT "space bar";:COLOR C1,C2:PRINT" to continue."
72 IF INKEY$<>"" THEN 72
73 IF INKEY$<>" " THEN 73 ELSE LOCATE 23,1:PRINT SPACE$(80);:RETURN
74 PRINT CHR$(218);STRING$(3,196);CHR$(191);CHR$(31);STRING$(5,29);CHR$(179);"   ";CHR$(179);CHR$(31);STRING$(5,29);CHR$(192);STRING$(3,196);CHR$(217):RETURN
```
{% endraw %}

## REPEAT.BAS

{% raw %}
```bas
0 ' ====> REPEAT.bas
1 OPEN"i",#1,"data.dat":INPUT#1,MONO,LSN$,PAGE:CLOSE
2 IF MONO THEN C1=7:C2=0:C3=8:C4=2 ELSE C1=(VAL(RIGHT$(TIME$,2)) MOD 6)+2:C2=0:C4=0:C3=(C1+2)+(6*(C1>5))
3 KEY 1,"RUN"+CHR$(34)+"BACKUP"+CHR$(34)+CHR$(13)
4 KEY 2,"RUN"+CHR$(34)+"FORWARD"+CHR$(34)+CHR$(13)
5 KEY 3,"RUN"+CHR$(34)+"REPEAT"+CHR$(34)+CHR$(13)
6 FOR I=4 TO 7:KEY I,"":NEXT I
7 KEY 8,"RUN"+CHR$(34)+"a0"+CHR$(34)+CHR$(13)
8 KEY 9,"RUN"+CHR$(34)+"CONTENTS"+CHR$(34)+CHR$(13)
9 KEY 10,"RUN"+CHR$(34)+"INDEX"+CHR$(34)+CHR$(13)
10 CHAIN "A"+LSN$,PAGE,ALL
```
{% endraw %}

## VARIABLE.BAS

{% raw %}
```bas
0 ' ====> VARIABLE.bas
1 ON KEY(1) GOSUB 8:KEY (1) ON
2 ON KEY(2) GOSUB 9:KEY (2) ON
3 ON KEY(3) GOSUB 10:KEY (3) ON
4 ON KEY(8) GOSUB 11:KEY (8) ON
5 ON KEY(9) GOSUB 12:KEY (9) ON
6 ON KEY(10) GOSUB 13:KEY (10) ON
7 GOTO 14
8 RUN"backup"
9 RUN"forward"
10 RUN"repeat"
11 RUN"a0"
12 RUN"contents"
13 RUN"index"
14 LOCATE 23,15:PRINT "Press the ";:COLOR C2,C1:PRINT "space bar";:COLOR C1,C2:PRINT" to begin illustration of variables."
15 IF INKEY$<>"" THEN 15
16 IF INKEY$<>" " THEN 16 ELSE FOR I=1 TO 23:LOCATE I,1:PRINT SPACE$(80);:NEXT
17 LOCATE 1,9:PRINT "In the algebraic equation"
18 LOCATE 3,35:COLOR C3,C4:PRINT "Y = X + 19";:COLOR C1,C2:PRINT ","
19 LOCATE 5,9:COLOR C3,C4:PRINT "Y";:COLOR C1,C2:PRINT " and ";:COLOR C3,C4:PRINT "X";:COLOR C1,C2:PRINT " are variables (because their values can vary), but ";:COLOR C3,C4:PRINT "19";:COLOR C1,C2:PRINT " is a";"constant (its value never changes)."
20 DATA 66,32,75,12
21 FOR I=1 TO 4
22 READ X
23 LOCATE 8,9:PRINT "If the value of ";:COLOR C3,C4:PRINT "X";:COLOR C1,C2:PRINT " is";:COLOR C3,C4:PRINT X;:COLOR C1,C2:PRINT "...";:ROW=CSRLIN:COL=POS(0)-4:PRINT SPACE$(30):LOCATE 12,35:PRINT "Y =  X + 19"
24 GOSUB 31
25 LOCATE 12,38:COLOR C3,C4:PRINT X:GOSUB 31
26 LOCATE ROW,COL:PRINT ", then the value of ";:COLOR C3,C4:PRINT "Y";:COLOR C1,C2:PRINT " must be ";:COLOR C3,C4:PRINT USING "##";19+X;:COLOR C1,C2:PRINT ".":LOCATE 14,35:PRINT "Y = ";:COLOR C3,C4:PRINT 19+X
27 GOSUB 31:LOCATE 14,1:PRINT SPACE$(80);
28 NEXT I
29 LOCATE 20,9:PRINT "That's it ... Press the appropriate ";:COLOR C3,C4:PRINT "function key";:COLOR C1,C2:PRINT " to continue."
30 NEW
31 BEEP:LOCATE 20,26:COLOR C1,C2:PRINT "Press the ";:COLOR C2,C1:PRINT "space bar";:COLOR C1,C2:PRINT" to continue."
32 IF INKEY$<>"" THEN 32
33 IF INKEY$<>" " THEN 33 ELSE LOCATE 20,1:PRINT SPACE$(80);:RETURN
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0105

     Volume in drive A has no label
     Directory of A:\

    A0       BAS      2382   1-01-80   4:42a
    A1       BAS       896   8-01-83
    A1       TXT      8924   1-01-80   3:09a
    A2       BAS       896   8-01-83
    A2       TXT      6259   8-01-83  12:00a
    A3       BAS       896   8-01-83
    A3       TXT      6915   1-01-80   3:11a
    A4       BAS      1024   8-01-83
    A4       TXT     11629   1-01-80   3:11a
    AUTOEXEC BAT        19   8-01-83
    AVERAGE  BAS       384   8-01-83
    BACKUP   BAS       512   8-01-83
    COLOR    PIC      4104   1-01-80
    CONTENTS BAS      1664   8-01-83
    CONTENTS TXT      3957   8-01-83
    DATA     DAT       128   5-23-86   9:29a
    DATA1    BAS      1792   8-01-83
    DATA2    BAS      2432   8-01-83
    FILES105 TXT       530   5-30-86   9:41a
    FORWARD  BAS       512   8-01-83
    GUESS_1  BAS       558   1-01-80   3:14a
    GUESS_2  BAS       878   1-01-80   3:15a
    IFTHEN   BAS      2048   8-01-83  12:18a
    INDEX    BAS      1664   8-01-83
    INDEX    TXT      4917   8-01-83
    INTRO    BAS      3072   8-01-83
    K0       BAS     11136   8-01-83
    K1       BAS      7808   8-01-83
    K2       BAS      2816   8-01-83
    LET      BAS      4864   8-01-83
    MONO     PIC      4104   1-01-80
    REPEAT   BAS       512   8-01-83
    VARIABLE BAS      1408   8-01-83
           33 file(s)     101640 bytes
                           51200 bytes free
