---
layout: page
title: "PC-SIG Diskette Library (Disk #961)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0961/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0961"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MINI-MINDER AND INVENTORY SORT"

    Keep track of your inventory and other applicable information  you need
    to analyze your inventory position.
    
    INVENTORY SORT can handle multiple inventory lists which can have up to
    1,000 part types in each. Maintain five fields of information per part
    type -- including part number, part name, quantity, location, and cost.
    Sort records alphabetically, numerically, or by location. Update and
    delete part types, and get a formatted printout of the inventory list.
    Wholesale and retail cost values can be tracked as well.
    
    MINI MINDER is an easy-to-use rental property management system written
    specifically for managers of mini-warehouses or locker rental areas.
    (With a little imagination, the program could be adapted to fit almost
    any rental property situation.)
    
    Track information such as size (or other description), rental rate,
    various tenant data, payment records, and expense of operation on a
    property.  Perform other tasks, such as producing mailing labels in
    record sequence and billing tenants.  Run daily reports, list all
    outstanding units (those who have not paid yet), view the status on a
    single unit, or list the status of all units.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DOC.BAS

{% raw %}
```bas
5 KEY OFF:  INPUT "What is today's date (mm/dd/yy)";TODAY$:DATE$=TODAY$
10 CLS:PRINT "This program assumes that you have a printer with continuous"
20 PRINT "forms in it for printing the manual.   Please strike any key to"
30  LINE INPUT "continue. Make sure the file 'MINI.DOC' is in Drive B...";A$
40 LPRINT CHR$(12): PG.CNT=2
50 OPEN "B:MINI.DOC" FOR INPUT AS #1
55 WHILE NOT EOF(1)
60 LINE INPUT #1,A$
70 LPRINT A$
80 LINES=LINES+1: IF LINES=55 THEN GOSUB 1000
90 WEND
100  CLOSE:OPEN "autoexec.bat" FOR OUTPUT AS #1: PRINT #1,"BASICA MINI": PRINT #1,CHR$(26): CLOSE:CHAIN "Mini",50,ALL
110 END
1000 LPRINT CHR$(12)
1010 LPRINT "Mini-Manual"; TAB(55); "Page "; PG.CNT:PG.CNT=PG.CNT+1
1020 LPRINT:LPRINT:LINES =3:RETURN
```
{% endraw %}

## FILES961.TXT

{% raw %}
```
Disk No  961
Program Title: MINI MINDER version 1.0 INVENTORY SORT version 1.0
PC-SIG version 1
 
    MINI MINDER is a simple rental property management system that tracks
information such as size (or other description), rate, various tenant data,
payment records, and expense of operation on about 400 units. It also
performs other tasks, such as producing mailing labels in record sequence
and billing tenants. In the reports, Menu 1 can do daily reports, list all
outstanding units (those who have not paid yet), view the status on a
single unit, or list the status of all units. MINI-MINDER was written
specifically for miniwarehouse or locker rental operators, but it takes
little imagination to adapt its fixed format to practically any rental
property-scheme.
 
    INVENTORY SORT handles multiple inventory lists which may have up to
1000 part types in each. It can maintain 5 fields of information per part
type, includeing part number, part name, quantity, location, and cost.
INVSORT1 is a modification of INVSORT in that it allows the input of
wholesale and retail cost values. The program can sort records
alphabetically, numerically, or by location. You can easily update and
delete part types, and get a formatted printout of the inventory list.
 
Usage: Information Retrieval / Rental Database
 
System Requirements: 128K memory, one disk drive and a version of BASIC.
 
How to Start: Type: INVSORT (press return), or type INVSORT1 (press
return) for INVENTORY SORT, or COPY MINI.DOC LPT1: (press enter) to get
instructions for running MINI MINDER.
 
Suggested Registration: $25 for INVENTORY SORT and $50 for MINI MINDER.
 
File Descriptions:
 
-------- ---  INVENTORY SORT
MENU     BAT  Batch file containing program information.
MANUAL   BAT  Batch file for printing INVSORT.DOC.
DATASHT  BAT  Batch file for printing DATASHT.ASC.
INSTALL  BAT  Batch file to install program on a hard disk.
INVSORT  DOC  Documentation.
DATASHT  ASC  Inventory datasheet.
INVSORT  EXE  Main program.
INVSORT1 EXE  Modified version of INVSORT.EXE.
#GE           Data file.
DISKLABL COM  Prints a disk label for this program.
-------- ---  MINI MINDER
MINI     BAS  Main BASIC program.
README        How to get started.
WHLABELS BAS  Produces mailing labels.
DOC      BAS  Prints documentation and installs program.
MINI     DOC  Documentation.
 
PC-SIG
1030D E. Duane Avenue
Sunnyvale, Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║          <<<<  Disk No 961 MINI MINDER and INVENTORY SORT  >>>>         ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation for INVENTORY SORT, Type:                    ║
║             COPY INVSORT.DOC LPT1: (press enter)                        ║
║                                                                         ║
║ To run the program INVENTORY SORT, Type:                                ║
║             INVSORT (press enter) or                                    ║
║             INVSORT1 (press enter)                                      ║
║                                                                         ║
║ To print the documentation for MINI MINDER, Type:                       ║
║             COPY MINI.DOC LPT1: (press enter)                           ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## INVSORT.DOC

{% raw %}
```
 







                        INVENTORY SORT


              written by William T. Schrader Sr.





                     GOOSE LAKE SOFTWARE
                        P. O. Box 749
                     Lakeview, Or. 97630






                     COPYRIGHT:

Manual and software copyrighted (c) 1987, by William T.
Schrader Sr.  All rights reserved.  Parts of this software
were created using the QUICKBASIC (TM) compiler.




                     DISCLAIMER:

The author or distributor of this software shall not be held
responsible for its use.  The user assumes all risk of its
use.


                     SHAREWARE

This program is distributed as user supported software.
A registration fee of $25.00 is requested, if the program is
going to be utilized.  Please send to the above address.

All communication to Goose Lake Software regarding this
program should be directed to:  Bill Schrader, Box 749,
Lakeview, Or.  97630.  (503)947-4513

Users of this software are encouraged to re-distribute this
program, along with the accompaning files, to other potential
registered users.  Use the DISKLABL.COM program to print disk
labels on an Epson compatible printer.  Label results on other
printers may be erratic.










                     INTRODUCTION

     Minimum equipment needs:  IBM PC or compatible, 128K
memory, 1 disk drive, MS/DOS, PC/DOS ver 2.0 and up.

     The inventory sort program is designed to handle
relatively small (up to 1000 part types) inventory lists, in
the easiest possible manner.  Multiple lists may be kept, as
long as the limit of 1000 part types is observed.  The
program will maintain 5 fields of information per part type
(part number, part name, quantity, location, and cost) and
will sort the list three different ways.  It provides easy
update and deletion of part types, and a formatted printout
of the inventory list.  A disk file is kept during data entry
so that data entry may be stopped and resumed at any time.
The current inventory list is kept in memory, which makes
the sort feature of the program extremely fast.  The program
will sort alphabetically,numerically, and by location.  This
program will be particularly useful to small business that
needs to keep an assortment of small parts (nuts and bolts in
labeled bins for example), and inventory them each year.  The
sorted lists will allow easier access to the parts, as well as
a starting point for the next inventory.


INVSORT1 - A modification to the invsort program is included on
this disk.  It works the same as described in the documentation,
except it allows the input of wholesale and retail cost values.
This version limits the part number to a 9 character string, and
the part name to 10 characters.  To run this version of the program,
type INVSORT1.




                     PROGRAM DISKETTE

     The inventory Sort Program Diskette is not copy
protected for the convenience of our users.  It is a
machine language program and is self running from the MSDOS
system prompt.  (No other support program is needed.) Prior
to starting the program, make a backup diskette as follows:

1.  Format a new diskette using the system and volume
options.
    A> FORMAT B:/S/V  <ENTER>

     After format is complete, a volume label will be
requested.  Use:  INVSORT  <ENTER>

2.  Copy the program diskette to this new INVSORT disk.
Remove the DOS diskette from drive a: and insert the program
diskette.
    A> COPY A:*.* B:  <ENTER>

     Note:  You could also copy any other files that are
necessary to make the disk self booting.  (ei; autoexec.bat,
config.sys, ansi.sys, mode.exe, etc.)

     Remove both disks from the computer and store the
furnished program disk in a safe place.  Use the backup disk
you just made to run the program.



                     HARD DISK USERS

     The program disk contains a program called INSTALL.BAT,
which will install the program on the hard disk for you, in a
sub-directory called INVSORT. Insert program disk in drive A.

    C> A:INSTALL  <ENTER>  creates directory and copies files

    C> CD \INVSORT <ENTER>  changes to the invsort directory



    C> INVSORT  <ENTER>  will start the program to run



                     PROGRAM EXECUTION
     This program is friendly to the point that
everything is asked for prior to input.  It has a main menu
which allows six choices.  a menu selection is made by simply
pressing the appropriate key.  (1,2,3,4,5, or any other key)

Have the backup program in the drive that it is going to run
from.  Either A drive or C drive.

     type  A> INVSORT  <ENTER>  floppy disk users
                 or
           C> INVSORT  <ENTER>  if using a hard disk

After the title and copyright notices, the screen will clear,
and the data drive will be asked for:

     WHAT IS YOUR DATA DRIVE ? (A,B, or C) _

A  <ENTER>
     Enter an A if you have a single drive system, or if you
wish to keep your data list on the backup program disk.  You
may remove the program disk at this time and substitute a
formatted data disk if you wish.

B  <ENTER>
      Enter a B if you have dual disk drives, and wish to
keep your data on a formatted data disk in drive B.

C  <ENTER>
     Hard disk users may keep the data in the same directory
as the program if they want to.

The main menu will now appear:

                         ********   MENU  ********

                  DATA INPUT    = 1           CORRECTIONS = 4

                  SORT & PRINT  = 2           SAVE SORT   = 5

                  GET DATA      = 3           OTHER KEY   = END


1.  DATA INPUT

     The data input routine is the only method of entering
data into an inventory list.  The list may be a new list (in
which case you have to assign a file name) or a list which
you previously started.

At the main menu, depress the 1 key and the computer will
clear the screen and display the following:

             TODAYS DATE IS  XX-XX-XX


        FILE NAME TO RETRIEVE ? _





OLD FILE
     Type in and enter the name of a file which exists, and
is in your data drive.  The computer will retrieve that file.
During retrieval, the following will be displayed:

          GETTING PART NUMBER XXXXXXX     MEMORY  XXXXX

When the file has been retrieved, the screen shows:

                  (file name) IN MEMORY

     The screen will now clear and go into the input routine
as described below under NEW FILE, except the file # will be
the next available file number.

NEW FILE
     Type in the name of a file you wish to create, and the
file will be opened and set up on the data disk.  If you just
hit <enter> you will be asked for a file name to create.
File names may be up to 8 characters in length, plus a 3
character extension.  Case is unimportant, as only upper case
is recognized.  DO NOT USE SPACES IN A FILE NAME.  USE THE
UNDERLINE (_) CHARACTER TO SIMULATE A TWO WORD NAME.

After the file has been opened on disk, the message:

              (file name) IN MEMORY
will appear.

NOTE:  The program disk contains a file #GE, which is a
sorted file.  Use this file as practice to retrieve and add
to or update.




The screen will then show the following:

     FILE # 1                      FREE BYTE = XXXXX
PART NUMBER _

Enter a part number up to 10 characters in length.  Any
combination of letters and numbers is acceptable.

NAME _

Enter a part name up to 15 characters in length.  Any
combination of characters is acceptable.

LOCATION _

Three letters and/or numbers may be used.



QUANTITY _

The maximum quantity which may be entered is 9999.  Only
numbers may be entered.

$ COST _

The maximum allowable cost is $99,999.99.  Do not enter a
$ sign, it will be added by the computer.. Use a decimal
point (.) to denote cents.  A whole number will be dollars
with no cents.  Example:

1123  <ENTER>  =  $1123.00
11.23 <ENTER>  =  $11.23


              The screen will display the data.


IS THIS DATA CORRECT ? (Y or N)

Y  (yes) will repeat the process, except the file will be
file # 2>

N  (no)  will ignore all of the data you just entered and
repeat the process for file # 1.


NOTE: - The FREE BYTE message on the screen indicates how much
is left to use for the inventory list.  Keep a close watch on this
when the numbeer bets small, soo that your inventory list will
fit into available memory.


SUGGESTION - Since the parts list is limited to approximately 1000
part types, you should consider ahead that if you are going to be
adding to the list, you need to leave some room, and divide the list
up a different way.
ei:




                     ENDING THE DATA INPUT SESSION

     Enter a null string (see below) as a part number will
end the input session and go to the main menu.

PART NUMBER _ <ENTER>  (simply press enter)

     The total parts entered and their corresponding value
will be displayed prior to returning to the menu.


DEFINITION:  A null string is nothing.  It is not a space, or
a 0, or anything else, simply nothing.  To enter a null
string, simply press enter before any other keys.

HINT:  Press the NUMLOCK key to use the numeric keypad.  The
numeric keypad will greatly increase the efficiency that
numbers can be entered.








                     SORT & PRINT

     Selecting 2, the sort & print option from the main menu
will bring up the following menu:



             1 = SORT PART NUMBERS IN ASCENDING ORDER

             2 = SORT PART NAMES IN ALPHABETICAL ORDER

             3 = SORT PARTS BY LOCATION

             4 = PRINT LISTING

             5 = RETURN TO MAIN MENU



1. Sorts the inventory list currently in memory by part
number in ascending order, then use 4 Print, to print the
list.

2. Sorts the inventory list currently in memory by part name
alphabetically, then use 4 Print, to print the list.

3. Sorts the inventory list currently in memory alpha-
numerically by location.  This is useful as a listing from
which you can re-inventory, and know what to expect at each
location.  Use 4 Print, to print this list.

4. This selection prints whatever list is currently in
memory, including your initial unsorted list to use for
back checking purposes.  This selection shows:

            SET PAPER TO TOP OF PAGE

            PRESS ANY KEY WHEN READY

then:

     SINGLE or DOUBLE SPACE (ENTER 1 or 2) ?

Entering a 1 prints 50 parts per page single space, and a 2
prints 25 parts per page double space.

5. Returns to main menu without doing anything.

NOTE:  The sort process takes approximately 1 minute to sort
1000 parts. During the sort a PASS # and a Y number will be
displayed.  This indicates what division of the list it is
sorting.  When Y=1, it is on the last pass.  The order of
sorting is as follows:
Numbers, Upper case letters, Lower case letters
Symbols may be intermixed depending on their ASCII code









                     GET DATA

     The get data routine retrieves data from a previously
saved file.  It would be used primarily to make CORRECTIONS,
or re-sort and reprint a listing.  You may go into the data
input routine from the main menu without clearing the data
you retrieved.

     The procedure is the same as described in the data input
routine.


The GET DATA routine (3 on the main menu) has
changed slightly.  When it is selected, the files available
for retrieval on the data disk are displayed across the top
of the screen.  These are files which were previously saved
with this program.

ALSO - If you have been working on a file which is in memory,
and you wish to start a new file without leaving the program
and restarting, use the GET DATA selection from the main
menu.  At the point where "Enter file name to retrieve " is
asked for, enter the name of a new file.  This will create a
new file and you can go to the INPUT DATA routine and start
at file #1.



                     CORRECTIONS

     The corrections routine allows you to update, or delete
parts from the inventory list in memory.  Prior to using this
option you must have retrieved a file either through the get
data or data input routines.

     ENTER A 0 FOR FILE NUMBER TO TERMINATE CORRECTIONS !

FILE # FOR CORRECTION ? _
 Enter any valid file # and the following will appear:


               Screen shows formatted data.



You may now enter the correct data for that particular file.

Entering a null string will not change the original data in
the file.  Only entering new data will update the file.




                     DELETING PARTS
     To delete a part from the inventory list, enter a 0 for
quantity.  Any part with a 0 quantity will be removed from
the list when the corrections routine is terminated.










                     TERMINATING CORRECTIONS
     To terminate corrections, and return to the main menu,
enter a 0 when file # is asked for.  The inventory list will
then be reevaluated, and all parts with 0 quantity will be
removed.  This will take varying amounts of time depending on
how many parts are to be removed from the list.




                     SAVE SORT

     The save sort routine is used to save an inventory list
that is currently in memory after it has been sorted.  You
will be asked for a file name to save with.  A file name is a
maximum of 8 characters long, plus a 3 character extension.

Some examples:
     YAMA_INP.DAT      An input data file, used to check against
                          your input data list.
     #GE               A general purpose file, no extension needed
     TIRES.ALF         An alphabetically sorted file
     HARDWRE.DA1       A file generated with invsort1


                     END

     This will end the program execution and return to the
system prompt.

ALWAYS USE THIS TO END YOUR SESSION, SO THAT ALL FILES WILL
BE PROPERLY CLOSED.  IMPROPERLY CLOSED FILE MAY BE SCRAMBLED
THE NEXT TIME YOU USE THEM.

                     ERRORS

     Sometimes errors can occur because of various reasons.  No
data disk in the data drive for example.  When an error
occurs, the screen will display:

       USE <CTRL> C TO RETURN TO SYSTEM

          FILE NAME TO CREATE ? _





Hold down the <CTRL> key and press the C, key and you will
return to the system prompt.  Correct the error and then
restart the program.  All data in memory will be destroyed,
but any data that is on disk will be intact, so you will need
to get data to continue on.
















Thank you for using the INVSORT program.  This is
a registration form you may use.  Please fill out
this form, and send it along with $25.00 to

              GOOSE LAKE SOFTWARE
              P.O. BOX 749
              LAKEVIEW, OR. 97630

In return you will recieve a near letter quality
copy of the documentation, software support services,
and notification of future upgrades.

             Thank you,

                             Bill Schrader

NAME: __________________________

ADDRESS:________________________

CITY:____________________   STATE:____     ZIP:__________

PHONE:___________________

Your computer type: __________________________________

            memory: __________________________________

       drive types: __________________________________


List any improvements, or changes you would like to have:
































                     INVENTORY INPUT DATA SHEET

File Name_________________

    (10)                (15)                (3)   (4)      (8)
 Part Number          Part Name             Loc   Qty    $ Cost
              |                           |     |     |
______________|___________________________|_____|_____|______________
              |                           |     |     |
______________|___________________________|_____|_____|______________
              |                           |     |     |
______________|___________________________|_____|_____|______________
              |                           |     |     |
______________|___________________________|_____|_____|______________
              |                           |     |     |
______________|___________________________|_____|_____|______________
              |                           |     |     |
______________|___________________________|_____|_____|______________
              |                           |     |     |
______________|___________________________|_____|_____|______________
              |                           |     |     |
______________|___________________________|_____|_____|______________
              |                           |     |     |
______________|___________________________|_____|_____|______________
              |                           |     |     |
______________|___________________________|_____|_____|______________
              |                           |     |     |
______________|___________________________|_____|_____|______________
              |                           |     |     |
______________|___________________________|_____|_____|______________
              |                           |     |     |
______________|___________________________|_____|_____|______________
              |                           |     |     |
______________|___________________________|_____|_____|______________
              |                           |     |     |
______________|___________________________|_____|_____|______________
              |                           |     |     |
______________|___________________________|_____|_____|______________
              |                           |     |     |
______________|___________________________|_____|_____|______________
              |                           |     |     |
______________|___________________________|_____|_____|______________
              |                           |     |     |
______________|___________________________|_____|_____|______________
              |                           |     |     |
______________|___________________________|_____|_____|______________
              |                           |     |     |
______________|___________________________|_____|_____|______________
              |                           |     |     |
______________|___________________________|_____|_____|______________
              |                           |     |     |
______________|___________________________|_____|_____|______________
              |                           |     |     |
______________|___________________________|_____|_____|______________
              |                           |     |     |
______________|___________________________|_____|_____|______________
```
{% endraw %}

## MINI.BAS

{% raw %}
```bas
5 GOSUB 6500
10 INPUT "TODAY'S DATE IS: (MM/DD/YY)";TODAY$:IF TODAY$="" THEN TODAY$=LEFT$(DATE$,2)+"/"+MID$(DATE$,4,2)+"/"+RIGHT$(DATE$,2)
15 PRINT "DATE:";TODAY$;:INPUT "  CORRECT (Y/N)";D$:IF D$="N" OR D$="n" OR D$="" THEN 10
20 DATE$=TODAY$
25 DIM PAID(75),UNIT(75),METHOD(75),DAY$(75),PB(75),SOURCE(75)
30 DIM TYPE(75),CHECKNO(75),PAIDTO$(75),DD$(75),AMOUNT(75)
35 CLS:FOR A=1 TO 5:BEEP:NEXT A:PRINT "* * *  REMOVE PROGRAM DISK FROM DRIVE A  * * *":PRINT "* * *  PLACE UNIT NAME/ADDRESS DISK IN DRIVE A * * * "
40 FOR A=1 TO 5 :PRINT:NEXT A: PRINT "STRIKE ANY KEY TO CONTINUE"
45 A$=INKEY$:IF A$="" THEN 45
47 OPEN "numunits" FOR INPUT AS #1: INPUT #1,NUM.UNITS:CLOSE #1
50 CLS:PRINT STRING$(79,"*"):PRINT "*-----T H E   M I N I - M I N D E R-------------------------------------------*":PRINT STRING$(79,"*")
55 PRINT "**";TAB(20);"1.  ADD NEW TENANT";TAB(78);"**": PRINT "**";TAB(20);"2.  EDIT CURRENT TENANT INFORMATION";TAB(78);"**"
60 PRINT "**";TAB(20);"3.  GO TO REPORTS MENU";TAB(78);"**":PRINT "**";TAB(20);"4.  ENTER RENTAL PAYMENTS/OTHER INCOME";TAB(78);"**":PRINT "**";TAB(20);"5.  GO TO BILLING MENU";TAB(78);"**":
65 PRINT "**";TAB(20);"6.  GO TO EXPENSE MENU";TAB(78);"**":PRINT "**";TAB(20);"7.  EDIT INCOME RECORDS";TAB(78);"**":PRINT "**";TAB(20);"8.  CHECKING ACCOUNT REVIEW";TAB(78);"**"
70 PRINT "**";TAB(20);"9.  EDIT DAILY REPORTS";TAB(78);"**":PRINT "**";TAB(20);"10.  CREATE FILES FOR NEXT CALENDAR YEAR";TAB(78);"**"
75 PRINT "**";TAB(20);"11.  DO LABELS";TAB(78);"**"
80 PRINT "**";TAB(20);"12.  END SESSION";TAB(78);"**"
85 PRINT STRING$(79,"*"):PRINT STRING$(79,"*")
90 PRINT :PRINT TAB(20);"YOUR CHOICE IS";: INPUT CHOICE: ON CHOICE GOSUB 195,250,1125,1565,1855,2450,4285,4170,4380,4515,105,100
95 CLOSE:TODAY$=DATE$:GOTO 47
100 END
105 INPUT "PLACE PROGRAM DISK IN DRIVE A AND STRIKE ENTER ";X
110 CHAIN "WHLABELS",ALL
115 RETURN
120 LSET U$=UNIT$:LSET S$=SIZE$:LSET R$=MKS$(RATE)
125 LSET T$=TERM$:LSET TN$=TENANT$:LSET SP$=SPOUSE$:LSET XN$=ONAME$:LSET A$=ADDR$:LSET A1$=ADDR1$:LSET CI$=CITY$:LSET ST$=STA$:LSET ZP$=ZIP$:LSET PH$=PHONE$
130 LSET EP$=EMPLOY$:LSET WP$=WRKPH$:LSET DL$=LICENSE$:LSET SPE$=SPOUSEMP$:LSET SWP$=SPWRKPH$:LSET DD$=DUE$:LSET CURBL$=MKS$(OWE):LSET LPD$=LAST$:LSET PL$=PADLOCK$:LSET CT$=CUT$
135 RETURN
140 UNIT$=U$:SIZE$=S$:RATE=CVS(R$):TERM$=T$:TENANT$=TN$:SPOUSE$=SP$:ONAME$=XN$:ADDR$=A$:ADDR1$=A1$:CITY$=CI$:STA$=ST$:ZIP$=ZP$:PHONE$=PH$
145 EMPLOY$=EP$:WRKPH$=WP$:LICENSE$=DL$:SPOUSEMP$=SPE$:SPWRKPH$=SWP$:DUE$=DD$:OWE=CVS(CURBL$):LAST$=LPD$:PADLOCK$=PL$:CUT$=CT$
150 RETURN
155 CLOSE #1:CLOSE #2:CLOSE #3
160 OPEN "R",#1,"UNITS",126
165 FIELD #1, 4 AS U$,5 AS S$,7 AS R$,8 AS T$,30 AS TN$,30 AS SP$,40 AS XN$,1 AS PL$,1 AS CT$
170 OPEN "R",#2,"UNITS1",110
175 FIELD #2,30 AS A$,30 AS A1$,20 AS CI$,2 AS ST$,10 AS ZP$,10 AS PH$,8 AS LPD$
180 OPEN "R",#3,"UNITS2",126
185 FIELD #3,30 AS EP$,10 AS WP$,30 AS DL$,30 AS SPE$,10 AS SWP$,8 AS DD$,8 AS CURBL$
190 RETURN
195 GOSUB 155
200 GOSUB 360
205 GOSUB 385
210 GOSUB 120
215 PUT #1,U
220 PUT #2,U
225 PUT #3,U
230 INPUT "DO ANOTHER (Y/N)";ASK$: IF LEFT$(ASK$,1)="Y" OR LEFT$(ASK$,1)="y" THEN 200
235 CLOSE : RETURN
240 NEXT U
245 RUN
250 GOSUB 155
255 INPUT "WHAT IS THE UNIT NUMBER YOU WISH TO EXAMINE";U
260 GET #1,U
265 GET #2,U
270 GET #3,U
275 GOSUB 140
280 GOSUB 385
285 GOSUB 120
290 PUT #1,U
295 PUT #2,U
300 PUT #3,U
305 INPUT "LOOK AT ANOTHER UNIT (Y/N)";ASK$:IF LEFT$(ASK$,1)="Y" OR LEFT$(ASK$,1)="y" THEN 255
310 CLOSE:RETURN
315 INPUT "PLACE BLANK FORMATTED DISK IN DRIVE A AND STRIKE ENTER";X
320 INPUT "ENTER NUMBER OF UNITS FOR THIS FILE:";U
322 OPEN "numunits" FOR OUTPUT AS #1:PRINT #1,U:CLOSE #1:GOSUB 155
325 FOR COUNT = 1 TO U
330 UNIT$=STR$(COUNT):LOCATE 25,1:PRINT "CREATING #:"; COUNT
335 GOSUB 120
340 PUT #1, COUNT:PUT #2, COUNT:PUT #3,COUNT
345 NEXT COUNT
350 PRINT "RECORDS CREATED FOR THIS FILE:";COUNT:INPUT "STRIKE ENTER";X
355 CLOSE:RETURN
360 CLS:INPUT "UNIT NO.";U:UNIT$=STR$(U):INPUT "UNIT SIZE:";SIZE$:INPUT "MONTHLY RENTAL:";RATE:INPUT "EXPECTED LENGTH OF RENTAL";TERM$:INPUT "TENANT'S NAME:";TENANT$: INPUT "SPOUSE'S NAME:";SPOUSE$
365 INPUT "STREET ADDRESS #1:";ADDR$:INPUT "STREET ADDRESS #2:";ADDR1$:INPUT "CITY:";CITY$: INPUT "STATE:";STA$:INPUT "ZIP CODE:";ZIP$
370 INPUT "PHONE NO.";PHONE$: INPUT "EMPLOYED BY:";EMPLOY$:INPUT "WORK PHONE:";WRKPH$:INPUT "DRIVER'S LICENSE #:";LICENSE$:INPUT "SPOUSE'S EMPLOYER:";SPOUSEMP$:INPUT "SPOUSE'S WORK PHONE:";SPWRKPH$
375 INPUT "DATE PAYMENT DUE";DUE$:INPUT "CURRENT BALANCE: $";OWE:INPUT "DATE LAST PAID:";LAST$:INPUT "IS UNIT PADLOCKED (Y/N)";PADLOCK$:INPUT "TENANT'S LOCK CUT: (Y/N)";CUT$
380 INPUT "NAME OF OTHER CONTACT, ETC";ONAME$:RETURN
385 CLS:PRINT "1. UNIT #";UNIT$;TAB(15);" 2. SIZE:";SIZE$;TAB(32);"3. AMOUNT OF RENT:";RATE;TAB(57);"4. EXP. TERM:";TERM$:PRINT STRING$(79,"=")
390 PRINT "5. TENANT:";TENANT$;TAB(42);"6.SPOUSE:";SPOUSE$:PRINT "7.ADR.1:";ADDR$;TAB(42);"8.ADR.2:";ADDR1$:PRINT "9. CITY:";CITY$;TAB(35);"10. STATE:";STA$;TAB(50);"11. ZIP CODE:";ZIP$
395 PRINT STRING$(79,"="):PRINT "12. HOME PHONE:";PHONE$:PRINT "13. EMPLOYED BY:";EMPLOY$;TAB(55);"14. WORK PHONE:";WRKPH$:PRINT "15. DRIVER'S LICENSE #:";LICENSE$:PRINT "16. SPOUSE'S EMPLOYER:";SPOUSEMP$:PRINT "17. SPOUSE'S WORK PHONE:";SPWRKPH$
400 PRINT STRING$(79,"=")
405 PRINT "18. DATE DUE:";DUE$;TAB(25);"19. AMOUNT DUE:$";OWE;TAB(50);"20. LAST PAID ON:";LAST$:PRINT "21. PADLOCKED:";PADLOCK$;"   22. LOCK CUT:";CUT$:PRINT "23. OTHER CONTACT:";ONAME$:PRINT STRING$(79,"="):PRINT "24. NO OTHER CHANGES"
410 PRINT STRING$(79,"=")
415 INPUT "KEY IN NUMBER OF ITEM TO CHANGE:";CHANGE
420 ON CHANGE GOTO 520,525,530,535,540,545,555,560,565,570,575,580,585,590,595,600,605,610,615,620,625,630,550,430
425 GOTO 385
430 RETURN
435 CLS:PRINT "UNIT #";UNIT$;TAB(15);" SIZE:";SIZE$;TAB(32);"AMOUNT OF RENT:";RATE;TAB(57);"EXP. TERM:";TERM$:PRINT STRING$(79,"=")
440 PRINT "TENANT:";TENANT$;TAB(42);"SPOUSE:";SPOUSE$:PRINT "ADR.1:";ADDR$;TAB(42);"ADR.2:";ADDR1$:PRINT "CITY:";CITY$;TAB(35);"STATE:";STA$;TAB(50);"ZIP CODE:";ZIP$
445 PRINT STRING$(79,"="):PRINT "HOME PHONE:";PHONE$:PRINT "EMPLOYED BY:";EMPLOY$;TAB(55);"WORK PHONE:";WRKPH$:PRINT "DRIVER'S LICENSE #:";LICENSE$:PRINT "SPOUSE'S EMPLOYER:";SPOUSEMP$:PRINT "SPOUSE'S WORK PHONE:";SPWRKPH$
450 PRINT STRING$(79,"=")
455 PRINT "DATE DUE:";DUE$;TAB(25);"AMOUNT DUE:$";OWE;TAB(50);"LAST PAID ON:";LAST$:PRINT "PADLOCKED:";PADLOCK$;"   LOCK CUT:";CUT$:PRINT "OTHER CONTACT:";ONAME$:PRINT STRING$(79,"=")
460 INPUT "STRIKE ENTER TO CONTINUE";XX
465 RETURN
470 INPUT "DATE OF PAYMENT IS:";DAY$(COUNT):GOTO 1595
475 INPUT "AMOUNT PAID IS:";PAID(COUNT):GOTO 1595
480 INPUT "PAYMENT SOURCE IS: (1-450)=RENT   999=SUPPORT SALES  998=INTEREST INCOME  997= PROPERTY SALES)";SOURCE(COUNT):GOTO 1595
485 LPRINT CC;TAB(10);DAY$(CC);TAB(30);PAID(CC);TAB(45);SOURCE(CC)
490 RETURN
520 INPUT "ENTER UNIT #:";U:UNIT$=STR$(U):GOTO 385
525 INPUT "ENTER UNIT SIZE:";SIZE$:GOTO 385
530 INPUT "ENTER NEW RATE:";RATE:GOTO 385
535  INPUT "ENTER NEW EXPECTED TERM:";TERM$: GOTO 385
540 INPUT "ENTER NEW NAME:";TENANT$:GOTO 385
545 INPUT "ENTER NEW SPOUSE:";SPOUSE$:GOTO 385
550 INPUT "RE-ENTER OTHER NAME:";ONAME$:GOTO 385
555 INPUT "ENTER NEW ADDRESS 1:";ADDR$:GOTO 385
560 INPUT "ENTER NEW ADDRESS 2:";ADDR1$:GOTO 385
565 INPUT "ENTER NEW CITY:";CITY$:GOTO 385
570 INPUT "ENTER NEW STATE:";STA$:GOTO 385
575 INPUT "ENTER NEW ZIP:";ZIP$:GOTO 385
580 INPUT "ENTER NEW PHONE:";PHONE$:GOTO 385
585 INPUT "ENTER NEW TENANT'S EMPLOYER:";EMPLOY$:GOTO 385]
590 INPUT "ENTER NEW WORK PHONE:";WRKPH$:GOTO 385
595 INPUT "ENTER TENANT'S DRIVER'S LICENSE:";LICENSE$:GOTO 385
600 INPUT "ENTER SPOUSE'S EMPLOYER:";SPOUSEMP$:GOTO 385
605 INPUT "ENTER SPOUSE'S WORK PHONE:";SPWRKPH$:GOTO 385
610 INPUT "ENTER DATE PAYMENT DUE:";DUE$:GOTO 385
615 INPUT "ENTER AMOUNT OWED:";OWE:GOTO 385
620 INPUT "ENTER DATE LAST PAID:";LAST$:GOTO 385
625 INPUT "IS UNIT PADLOCKED (Y=YES)";PADLOCK$:GOTO 385
630 INPUT "HAS TENANT'S LOCK BEEN CUT:";CUT$:GOTO 385
635 LPRINT "UNIT #";UNIT$;TAB(15);" SIZE:";SIZE$;TAB(32);"AMOUNT OF RENT:";RATE;TAB(57);"EXP. TERM";TERM$:LPRINT STRING$(79,"=")
640 LPRINT "TENANT:";TENANT$;TAB(45);"SPOUSE:";SPOUSE$:LPRINT "ADDRESS 1:";ADDR$;TAB(45);"ADDRESS 2:";ADDR1$:LPRINT "CITY:";CITY$;TAB(35);"STATE:";STA$;TAB(50);"ZIP CODE:";ZIP$
645 LPRINT STRING$(79,"="):LPRINT "HOME PHONE:";PHONE$:LPRINT "EMPLOYED BY:";EMPLOY$;TAB(55);"WORK PHONE:";WRKPH$:LPRINT "DRIVER'S LICENSE #:";LICENSE$:LPRINT "SPOUSE'S EMPLOYER:";SPOUSEMP$:LPRINT "SPOUSE'S WORK PHONE:";SPWRKPH$
650 LPRINT STRING$(79,"=")
655 LPRINT "DATE DUE:";DUE$;TAB(25);"AMOUNT DUE:$";OWE;TAB(50);"LAST PAID ON:";LAST$:LPRINT "PADLOCKED:";PADLOCK$;"   LOCK CUT";CUT$:LPRINT "OTHER CONTACT:";ONAME$:LPRINT STRING$(79,"=")
660 RETURN
665 D30$="12":D60$="11":D90$="10":RETURN
670 D30$="01":D60$="12":D90$="11":RETURN
675 D30$="02":D60$="01":D90$="12":RETURN
680 D30$="03":D60$="02":D90$="01":RETURN
685 D30$="04":D60$="03":D90$="02":RETURN
690 D30$="05":D60$="04":D90$="03":RETURN
695 D30$="06":D60$="05":D90$="04":RETURN
700 D30$="07":D60$="06":D90$="05":RETURN
705 D30$="08":D60$="07":D90$="06":RETURN
710 D30$="09":D60$="08":D90$="07":RETURN
715 D30$="10":D60$="09":D90$="08":RETURN
720 D30$="11":D60$="10":D90$="09":RETURN
725 PRINT TAB(34);"AGING ANALYSIS":PRINT TAB(36);TODAY$:PRINT :PRINT "UNIT";TAB(8);"SIZE";TAB(15);"TENANT";TAB(46);"OWED";TAB(65);"30+";TAB(70);"60+";TAB(75);"90+":IF LEFT$(HC$,1)="Y" OR LEFT$(HC$,1)="y" THEN 730 ELSE RETURN
730 LPRINT TAB(34);"AGING ANALYSIS":LPRINT TAB(36);TODAY$:LPRINT :LPRINT "UNIT";TAB(8);"SIZE";TAB(15);"TENANT";TAB(46);"OWED";TAB(65);"30+";TAB(70);"60+";TAB(75);"90+":LPRINT STRING$(79,"="):RETURN
735 CLS:INPUT "DO YOU WANT ADDRESSES LISTED";ADATA$:IF LEFT$(ADATA$,1)="Y" OR LEFT$(ADATA$,1)="y" THEN ADATA=1 ELSE ADATA=0
740 CLS:PRINT "UNIT #";TAB(10);"TENANT";TAB(45);"AMT OWED";TAB(55);"PDLCKED";TAB(65);"CUT":PRINT STRING$(79,"-")
745 LPRINT "UNIT LISTING PREPARED ON ";DATE$:LPRINT "UNIT #";TAB(10);"TENANT";TAB(45);"AMT OWED";TAB(55);"PDLCKED";TAB(65);"CUT":LPRINT STRING$(79,"-")
750 LC=2
755 GOSUB 160
760 FOR A=1 TO NUM.UNITS
765 GET #1,A:GET #2,A:GET #3,A:GOSUB 140
770 PRINT UNIT$;TAB(10);TENANT$;TAB(45);OWE;TAB(55);PADLOCK$;TAB(65);CUT$:IF ADATA=0 THEN PRINT STRING$(79,"-")
775 LPRINT UNIT$;TAB(10);TENANT$;TAB(45);OWE;TAB(55);PADLOCK$;TAB(65);CUT$:IF ADATA=0 THEN LPRINT STRING$(79,"-")
780 IF ADATA=1 THEN GOSUB 3420
785 LC=LC+2: IF LC=>58 THEN LPRINT CHR$(12):LC=0
790 NEXT A
795 CLOSE :RETURN
800 END
805 CLS:INPUT "ENTER MONTH NUMBER THESE EXPENSES REPRESENT (1-12)";MONT
810 ON MONT GOSUB 2890,2895,2900,2905,2910,2915,2920,2925,2930,2935,2940,2945
815 INPUT "HOW MANY TRANSACTIONS";TRANS
820 FOR A=1 TO TRANS
825 PRINT "SELECT PAYMENT TYPE:":PRINT TAB(10);"1=SALARIES";TAB(30);"2=UTILITIES";TAB(60);"3=PHONE":PRINT TAB(10);"4=PEST CONTROL";TAB(30);"5=TRAVEL";TAB(60);"6=ADVERTISING":PRINT TAB(10);"7=LEGAL & ACCTNG";TAB(30);"8=MISC.";TAB(60);"9=RET. CHECKS"
830 PRINT TAB(10);"10=ADVALOREM & GENERAL TAXES";TAB(30);"11=INTEREST EXPENSES";TAB(60);"12=DEPRECIATION":PRINT TAB(10);"13=DUES/SUBSCRIPTIONS";TAB(30);"14=POSTAGE";TAB(60);"15=INSURANCE":PRINT TAB(10);"16=MAINTENANCE/CLEANING";TAB(30);"17=REPAIRS";
835 PRINT TAB(60);"18=PAYROLL TAXES"
840 PRINT TAB(10);"19=EQUIPMENT";TAB(30);"20=EXIT THIS PROGRAM"
845 INPUT TYPE(A):IF TYPE(A)<1 THEN GOTO 825
850 IF TYPE(A)=20 THEN 890
855 INPUT "CHECK NUMBER:";CHECKNO(A): INPUT "PAID TO:";PAIDTO$(A):INPUT "DATE PAID: (ENTER=TODAY'S DATE)";DD$(A):IF DD$(A)="" THEN DD$(A)=TODAY$
860 INPUT "AMOUNT:";AMOUNT(A)
865 CLS:PRINT "1. TYPE";TYPE(A);TAB(15);"2. CHECK #:";CHECKNO(A);TAB(40);"3.PAID TO:";PAIDTO$(A):PRINT :PRINT "4. DATE:";DD$(A);TAB(20);"5. AMOUNT";USING "$####.##";AMOUNT(A)
870  PRINT "6. RECORD CORRECT"
875 INPUT "ENTER FIELD TO CORRECT";FFF:ON FFF GOTO 1030,1050,1055,1060,1065,885
880 GOTO 865
885 NEXT A
890 INPUT "STRIKE ENTER KEY";X
895 PAIDOUT=0:LPRINT "RECAP OF EXPENSES REPORTED ON ";TODAY$:LPRINT STRING$(79,"="):LPRINT "#";"  TYPE";TAB(10);"CHECK #";TAB(20);"PAID TO";TAB(55);"DATE";TAB(65);"AMOUNT":LPRINT STRING$(79,"-")
900 FOR B=1 TO TRANS
905 LPRINT B;" ";TYPE(B);TAB(10);CHECKNO(B);TAB(20);PAIDTO$(B);TAB(55);DD$(B);TAB(65);USING "$##,###.##";AMOUNT(B)
910 PAIDOUT=PAIDOUT+AMOUNT(B)
915 NEXT B
920 LPRINT STRING$(79,"-"):LPRINT "TOTAL TRANSACTIONS:";TRANS:LPRINT "TOTAL AMOUNT:";USING "$##,###.##";PAIDOUT:LPRINT :LPRINT :LPRINT
925 PAIDOUT=0:PRINT "RECAP OF EXPENSES REPORTED ON ";TODAY$:PRINT STRING$(79,"="):PRINT "#";"  TYPE";TAB(10);"CHECK #";TAB(20);"PAID TO";TAB(55);"DATE";TAB(65);"AMOUNT":PRINT STRING$(79,"-")
930 FOR B=1 TO TRANS
935 PRINT B;" ";TYPE(B);TAB(10);CHECKNO(B);TAB(20);PAIDTO$(B);TAB(55);DD$(B);TAB(65);USING "$##,###.##";AMOUNT(B)
940 PAIDOUT=PAIDOUT+AMOUNT(B)
945 NEXT B
950 PRINT STRING$(79,"-"):PRINT "TOTAL TRANSACTIONS:";TRANS:PRINT "TOTAL AMOUNT:";USING "$##,###.##";PAIDOUT
955 INPUT "ARE THERE CORRECTIONS (Y/N)";ASK$:IF LEFT$(ASK$,1)="Y" OR LEFT$(ASK$,1)="y" THEN 960 ELSE 970
960 INPUT "ENTER LINE NUMBER TO CHANGE.  STRIKE ENTER WHEN ALL CORRECT";CHANGE
965 IF CHANGE=0 THEN 970 ELSE 1070
970 INPUT "STRIKE ENTER KEY TO STORE TRANSACTIONS";X:OPEN FILE$ FOR APPEND AS #1
975 FOR B=1 TO TRANS
980 PRINT #1,TYPE(B):PRINT #1,CHECKNO(B):PRINT #1,PAIDTO$(B):PRINT #1,DD$(B):PRINT #1,AMOUNT(B)
985 PRINT TYPE(B):PRINT CHECKNO(B):PRINT PAIDTO$(B):PRINT DD$(B):PRINT AMOUNT(B)
990 NEXT B
995 CLOSE:OPEN "B:CHEK" FOR INPUT AS #1:INPUT #1,CHEK:CLOSE:PC=CHEK
1000 FOR BB=1 TO TRANS
1005 IF TYPE(BB)=1 OR TYPE(BB)=10 OR TYPE(BB)=12 OR TYPE(BB)=15 OR TYPE(BB)=18 THEN 1015
1010 CHEK=CHEK-AMOUNT(BB):PP=PP+AMOUNT(BB)
1015 NEXT BB
1020 OPEN "B:CHEK" FOR OUTPUT AS #2:PRINT #2,CHEK:CLOSE:PRINT "CHECKING ACCOUNT BALANCE WAS ";USING "$###,###.##";PC:PRINT "AFTER POSTING EXPENSES OF ";USING "$###,###.##";PP;:PRINT " NEW BALANCE IS ";USING "$###,###.##";CHEK
1025 PAIDOUT=0:PC=0:PP=0:CHEK=0:CLOSE:PRINT "TRANSACTIONS STORED":RETURN
1030 PRINT "SELECT PAYMENT TYPE:":PRINT TAB(10);"1=SALARIES";TAB(30);"2=UTILITIES";TAB(60);"3=PHONE":PRINT TAB(10);"4=PEST CONTROL";TAB(30);"5=TRAVEL";TAB(60);"6=ADVERTISING":PRINT TAB(10);"7=LEGAL & ACCTNG";TAB(30);"8=MISC.";TAB(60);"9=RET. CHECKS"
1035 PRINT TAB(10);"10=ADVALOREM & GENERAL TAXES";TAB(30);"11=INTEREST EXPENSES";TAB(60);"12=DEPRECIATION":PRINT TAB(10);"13=DUES/SUBSCRIPTIONS";TAB(30);"14=POSTAGE";TAB(60);"15=INSURANCE":PRINT TAB(10);"16=MAINTENANCE/CLEANING";TAB(30);"17=REPAIRS";
1040 PRINT TAB(60);"18=SUPPLIES":PRINT TAB(10);"19=EQUIPMENT"
1045 INPUT TYPE(A):GOTO 865
1050 INPUT "CHECK NUMBER";CHECKNO(A):GOTO 865
1055 INPUT "PAID TO:";PAIDTO$(A):GOTO 865
1060 INPUT "DATE:";DD$(A):GOTO 865
1065 INPUT "AMOUNT:";AMOUNT(A):GOTO 865
1070 CLS:PRINT "1. TYPE";TYPE(CHANGE);TAB(15);"2. CHECK #:";CHECKNO(CHANGE);TAB(40);"3.PAID TO:";PAIDTO$(CHANGE):PRINT :PRINT "4. DATE:";DD$(CHANGE);TAB(20);"5. AMOUNT";USING "$####.##";AMOUNT(CHANGE)
1075 INPUT "NUMBER OF ITEM TO CHANGE";ITEM:ON ITEM GOTO 1085,1105,1110,1115,1120
1080 GOTO 895
1085 PRINT "SELECT PAYMENT TYPE:":PRINT TAB(10);"1=SALARIES";TAB(30);"2=UTILITIES";TAB(60);"3=PHONE":PRINT TAB(10);"4=PEST CONTROL";TAB(30);"5=TRAVEL";TAB(60);"6=ADVERTISING":PRINT TAB(10);"7=LEGAL & ACCTNG";TAB(30);"8=MISC.";TAB(60);"9=RET. CHECKS"
1090 PRINT TAB(10);"10=ADVALOREM & GENERAL TAXES";TAB(30);"11=INTEREST EXPENSES";TAB(60);"12=DEPRECIATION":PRINT TAB(10);"13=DUES/SUBSCRIPTIONS";TAB(30);"14=POSTAGE";TAB(60);"15=INSURANCE":PRINT TAB(10);"16=MAINTENANCE/CLEANING";TAB(30);"17=REPAIRS";
1095 PRINT TAB(60);"18=SUPPLIES":PRINT TAB(10);"19=EQUIPMENT"
1100 INPUT TYPE(CHANGE):GOTO 1070
1105 INPUT "CHECK NUMBER:";CHECKNO(CHANGE):GOTO 1070
1110 INPUT "PAID TO:";PAIDTO$(CHANGE):GOTO 1070
1115 INPUT "DATE:";DD$(CHANGE):GOTO 1070
1120 INPUT "AMOUNT:";AMOUNT(CHANGE):GOTO 1070
1125 CLS:PRINT :PRINT TAB(34);"REPORTS MENU":PRINT
1130 PRINT TAB(20);"1.  DO DAILY REPORTS ON UNIT STATUS":PRINT TAB(20);"2.  LIST ALL OUTSTANDING UNITS"
1135 PRINT TAB(20);"3.  CURRENT STATUS OF A SINGLE UNIT"
1140 PRINT TAB(20);"4.  LIST STATUS OF ALL UNITS"
1145 PRINT TAB(20);"5.  DO AGING ANALYSIS"
1150 PRINT TAB(20);"6.  DUMP INCOME FILES FOR SPECIFIC MONTH":PRINT TAB(20);"7. DUMP EXPENSE FILES FOR SPECIFIC MONTH":PRINT TAB(20);"8. DUMP DAILY REPORTS FOR MONTH"
1155 PRINT TAB(20);"9.  RETURN TO MAIN MENU"
1160 PRINT :PRINT :PRINT TAB(15);"SELECT YOUR CHOICE AND STRIKE ENTER KEY";:INPUT CHOICE
1165 TOTAL=0:TOTOWE=0:TORATE=0:ON CHOICE GOSUB 1185,1390,1535,735,2245,4120,2645,4230,50
1170 IF LEFT$(HC$,1)="Y" OR LEFT$(HC$,1)="y" THEN LPRINT CHR$(12)
1175 CLOSE #1:CLOSE #2:CLOSE #3:INPUT "RETURN TO REPORTS MENU (Y=YES)";ASK$:IF LEFT$(ASK$,1)="Y" OR LEFT$(ASK$,1)="y" THEN 1125 ELSE RETURN
1180 GOTO 50
1185 CLS:INPUT "DO YOU WISH A LISTING OF PADLOCKED UNITS TODAY (Y/N)";PU$
1190 GOSUB 155
1195 PRINT "VACANCY REPORT FOR ";TODAY$:PRINT STRING$(79,"="):LPRINT "VACANCY REPORT FOR ";TODAY$:LPRINT STRING$(79,"="):PRINT "UNIT";TAB(10);"SIZE";TAB(20);"RATE";TAB(30);"STATUS":LPRINT "UNIT";TAB(10);"SIZE";TAB(20);"RATE";TAB(30);"STATUS"
1200 PRINT STRING$(79,"="):LPRINT STRING$(79,"=")
1205 GOSUB 155
1210 FOR UNIT=1 TO NUM.UNITS
1215 GET #1,UNIT:GET #2,UNIT:GET #3,UNIT:GOSUB 140
1220 IF LEFT$(TENANT$,6)="VACANT" THEN 1240
1225 GOTO 1255
1230 IF CM$=SIZE$ THEN 1240
1235 GOTO 1255
1240 PRINT UNIT$;TAB(10);SIZE$;TAB(20);RATE;TAB(30);TERM$
1245 LPRINT UNIT$;TAB(10);SIZE$;TAB(20);RATE;TAB(30);TERM$
1250 TOTAL=TOTAL+1:TORATE=TORATE+RATE
1255 NEXT UNIT
1260 PRINT STRING$(79,"="):LPRINT STRING$(79,"="):PRINT "TOTAL NUMBER OF VACANT UNITS:";TOTAL:PRINT "TOTAL VALUE OF RENT ON VACANT UNITS=";USING "$##,###.##";TORATE
1265 LPRINT "TOTAL NUMBER OF VACANT UNITS:";TOTAL:LPRINT "TOTAL VALUE OF RENT ON VACANT UNITS=";USING "$##,###.##";TORATE:VACANT=TOTAL
1270 'INPUT "STRIKE ENTER TO CONTINUE";X
1275 TOTAL=0:TORATE=0:TOTOWE=0:FOR A=1 TO 5:PRINT :LPRINT :NEXT A
1280 IF LEFT$(PU$,1)="y" OR LEFT$(PU$,1)="Y" THEN 1285 ELSE 1295
1285 LPRINT "INVENTORY OF PADLOCKED UNITS ON ";TODAY$:LPRINT STRING$(79,"="):LPRINT "UNIT";TAB(8);"SIZE";TAB(15);"TENANT";TAB(47);"BAL.DUE";TAB(57);"PDLCKED";TAB(65);"CUT":LPRINT STRING$(79,"-")
1290 PRINT "INVENTORY OF PADLOCKED UNITS ON ";TODAY$:PRINT STRING$(79,"="):PRINT "UNIT";TAB(8);"SIZE";TAB(15);"TENANT";TAB(47);"BAL.DUE";TAB(57);"PDLCKED";TAB(65);"CUT":PRINT STRING$(79,"-")
1295 FOR AA=1 TO NUM.UNITS
1300 GET #1,AA:GET #2,AA:GET #3,AA:GOSUB 140
1305 DEL=OWE/RATE: IF DEL=1 AND MID$(TODAY$,4,2)>"20" THEN 1335
1310 IF MID$(TODAY$,4,2)>"20" AND DEL>1 AND DEL=<2 THEN DELINQUENT=DELINQUENT+1
1315 IF VAL(MID$(TODAY$,4,2))<20 AND DEL>0 AND DEL<2 THEN DELINQUENT=DELINQUENT+1
1320 IF MID$(TODAY$,4,2)>"20" AND DEL>1 AND DEL=<2 THEN DR=DR+OWE
1325 IF VAL(MID$(TODAY$,4,2))<20 AND DEL>0 AND DEL<2 THEN DR=DR+OWE
1330 IF LEFT$(TENANT$,6)="VACANT" OR LEFT$(TENANT$,30)="                              " THEN 1340 ELSE 1335
1335 UR=UR+1
1340 IF LEFT$(PU$,1)="y" OR LEFT$(PU$,1)="Y" THEN 1345 ELSE 1360
1345 IF PADLOCK$="Y" OR PADLOCK$="y" THEN 1355
1350 GOTO 1360
1355 PRINT UNIT$;TAB(8);SIZE$;TAB(15);TENANT$;TAB(47);OWE;TAB(57);PADLOCK$;TAB(65);CUT$:LPRINT UNIT$;TAB(8);SIZE$;TAB(15);TENANT$;TAB(47);OWE;TAB(57);PADLOCK$;TAB(65);CUT$:TOTAL=TOTAL+1:TOTOWE=TOTOWE+OWE
1360 NEXT AA
1365 PRINT STRING$(79,"-"):PRINT "TOTAL UNITS PADLOCKED OR CUT=";TOTAL:PRINT "TOTAL MONEY DELINQUENT ON PADLOCKED ON CUT UNITS=";USING "$##,###.##";TOTOWE
1370 IF LEFT$(PU$,1)="Y" OR LEFT$(PU$,1)="y" THEN 1375 ELSE 1380
1375 LPRINT STRING$(79,"-"):LPRINT "TOTAL UNITS PADLOCKED OR CUT=";TOTAL:LPRINT "TOTAL MONEY DELINQUENT ON PADLOCKED OR CUT UNITS=";USING "$##,###.##";TOTOWE
1380 CLOSE:GOSUB 3595
1385 INPUT "STRIKE ENTER KEY";X:RETURN
1390 CLS:TOTAL=0:TOTOWE=0:INPUT "DO YOU WANT ADDRESSES PRINTED";ADATA$:IF LEFT$(ADATA$,1)="Y" OR LEFT$(ADATA$,1)="y" THEN ADATA=1 ELSE ADATA=0
1395 CLS:PRINT "LIST OF ALL UNITS WITH OUTSTANDING BALANCES":LPRINT "LIST OF ALL UNITS WITH OUTSTANDING BALANCES ON ";DATE$:PRINT STRING$(79,"-"):LPRINT STRING$(79,"-")
1400 PRINT "UNIT";TAB(10);"TENANT";TAB(45);"BAL.DUE";TAB(55);"DUE ON";TAB(68);"PDLKD";TAB(75);"CUT":LPRINT "UNIT";TAB(10);"TENANT";TAB(45);"BAL.DUE";TAB(55);"DUE ON";TAB(68);"PDLKD";TAB(75);"CUT":PRINT STRING$(79,"-"):LPRINT STRING$(79,"-")
1405 GOSUB 155
1410 FOR A=1 TO NUM.UNITS
1415 GET #1,A:GET #2,A:GET #3,A:GOSUB 140
1420 IF MID$(TODAY$,4,2)>"20" AND OWE-RATE>0 THEN GOSUB 1450
1425 IF VAL(MID$(TODAY$,4,2))<20 AND OWE>0 THEN GOSUB 1450
1430 NEXT A
1435 PRINT STRING$(79,"-"):LPRINT STRING$(79,"-"):PRINT "TOTAL NUMBER OF UNITS WITH UNPAID BALANCES:";TOTAL:LPRINT "TOTAL NUMBER OF UNITS WITH UNPAID BALANCES:";TOTAL
1440 LPRINT "TOTAL AMOUNT OWED:";USING "$##,###.##";TOTOWE:PRINT "TOTAL AMOUNT OWED:";USING "$##,###.##";TOTOWE
1445 CLOSE #1:CLOSE #2:TOTAL=0:TOTOWE=0:TORATE=0:INPUT "STRIKE ENTER TO CONTINUE";X:RETURN
1450 PRINT UNIT$;TAB(10);TENANT$;TAB(45);OWE;TAB(55);DUE$;TAB(68);PADLOCK$;TAB(75);CUT$:LPRINT UNIT$;TAB(10);TENANT$;TAB(45);OWE;TAB(55);DUE$;TAB(68);PADLOCK$;TAB(75);CUT$
1455 IF ADATA=1 THEN GOSUB 3420
1460 TOTAL=TOTAL+1:TOTOWE=TOTOWE+OWE
1465 RETURN
1470 CLS:INPUT "WHAT IS THE EARLIEST DATE YOU WISH REVIEWED:";FIRST$:INPUT "WHAT IS THE LAST DATE YOU WISH REVIEWED:";LAST$
1475 CLS:PRINT TAB(15);"UNITS WITH TERMS EXPIRING BETWEEN ";FIRST$;" AND ";LAST$:PRINT "UNIT";TAB(10);"TENANT";TAB(45);"HOME PHONE";TAB(60);"WORK PHONE":LPRINT "UNITS WHICH MAY BE VACATED BETWEEN ";FIRST$;" AND ";LAST$:LPRINT STRING$(80,"-")
1480 LPRINT "UNIT";TAB(10);"TENANT";TAB(45);"HOME PHONE";TAB(60);"WORK PHONE":LPRINT STRING$(79,"-")
1485 GOSUB 155
1490 FOR A=1 TO NUM.UNITS
1495 GET #1,A:GET #2,A:GET #3,A:GOSUB 140
1500 IF TERM$="" THEN 1515
1505 IF TERM$=>FIRST$ THEN 1510 ELSE 1515
1510 IF TERM$<=LAST$ THEN GOSUB 1530
1515 NEXT A
1520 PRINT STRING$(79,"-"):LPRINT STRING$(79,"-"):LPRINT "NUMBER OF UNITS WHICH MAY BE VACATED BETWEEN REQUESTED DATES:";TOTAL:PRINT "NUMBER OF UNITS WHICH MAY BE VACATED BETWEEN REQUESTED DATES:";TOTAL
1525 INPUT "STRIKE ENTER TO CONTINUE";X:RETURN
1530 PRINT UNIT$;TAB(10);TENANT$;TAB(45);PHONE$;TAB(60);WRKPH$:LPRINT UNIT$;TAB(10);TENANT$;TAB(45);PHONE$;TAB(60);WRKPH$:TOTAL=TOTAL+1:RETURN
1535 CLS:INPUT "WHICH UNIT DO YOU WISH TO CHECK";UNIT:INPUT "DO YOU WISH HARCOPY (Y=YES)";HC$
1540 GOSUB 155
1545 GET #1,UNIT:GET #2,UNIT:GET #3,UNIT:GOSUB 140
1550 GOSUB 435
1555 IF LEFT$(HC$,1)="Y" OR LEFT$(HC$,1)="y" THEN GOSUB 635
1560 RETURN
1565 TOTPAID=0:CLS:INPUT "HOW MANY TRANSACTIONS WILL YOU BE ENTERING";PAYMENTS
1570 INPUT "PLEASE ENTER CURRENT MONTH NAME (JANUARY-DECEMBER)";MONTH$:FILE$="B:"+LEFT$(MONTH$,4)+RIGHT$(DATE$,2)
1575 FOR COUNT=1 TO PAYMENTS
1580 DAY$(COUNT)=TODAY$
1585 INPUT "AMOUNT PAID:";PAID(COUNT)
1590 PRINT "FROM WHAT SOURCE: (1-450)=RENT  999=SUPPORT SALES  998=INTEREST INCOME":INPUT "997= PROPERTY SALES   995=PAST DUE VACATED";SOURCE(COUNT)
1595 CLS:PRINT "1. DATE:";DAY$(COUNT):PRINT "2.  AMOUNT PAID:";USING "$####.##";PAID(COUNT):PRINT "3. SOURCE:";SOURCE(COUNT)
1600 PRINT "4. ALL ITEMS CORRECT":INPUT "ENTER DESIRED NUMBER TO CORRECT";CHOICE:ON CHOICE GOTO 470,475,480,1605
1605 NEXT COUNT
1610 INPUT "DO YOU WISH A LISTING OF THESE PAYMENTS (Y=YES)";HC$: FOR A=1 TO 5:PRINT :IF LEFT$(HC$,1)="Y" OR LEFT$(HC$,1)="y" THEN LPRINT:NEXT A
1615 PRINT "#";TAB(10);"DATE PAID";TAB(30);"AMOUNT";TAB(45);"SOURCE":IF LEFT$(HC$,1)="Y" OR LEFT$(HC$,1)="y" THEN LPRINT "RECAP OF PAYMENTS MADE ON ";TODAY$:IF LEFT$(HC$,1)="Y" OR LEFT$(HC$,1)="y" THEN LPRINT STRING$(79,"-")
1620 IF LEFT$(HC$,1)="Y" OR LEFT$(HC$,1)="y" THEN LPRINT "#";TAB(10);"DATE PAID";TAB(30);"AMOUNT";TAB(45);"SOURCE":IF LEFT$(HC$,1)="Y" OR LEFT$(HC$,1)="y" THEN LPRINT STRING$(79,"-")
1625 FOR CC=1 TO PAYMENTS
1630 PRINT CC;TAB(10);DAY$(CC);TAB(30);USING "$####.##";PAID(CC);:PRINT TAB(45);SOURCE(CC)
1635 IF LEFT$(HC$,1)="y" OR LEFT$(HC$,1)="Y" THEN GOSUB 485
1640 TOTPAID=TOTPAID+PAID(CC)
1645 NEXT CC
1650 PRINT STRING$(80,"-"):PRINT "TOTAL OF PAYMENTS ENTERED:";USING "$##,###.##";TOTPAID
1655 IF LEFT$(HC$,1)="Y" OR LEFT$(HC$,1)="y" THEN LPRINT STRING$(79,"-"):IF LEFT$(HC$,1)="Y" OR LEFT$(HC$,1)="y" THEN LPRINT "TOTAL PAYMENTS ENTERED:";USING "$##,###.##";TOTPAID
1660 TOTPAID=0:INPUT "EXAMINE LISTINGS FOR ACCURACY.  STRIKE ENTER TO CONTINUE";X
1665 INPUT "ARE THERE CORRECTIONS (Y=YES)";CR$: IF LEFT$(CR$,1)="Y" OR LEFT$(CR$,1)="y" THEN 1805
1670 PRINT "WRITING PAYMENTS TO WORK FILE"
1675 GOSUB 155
1680 FOR A=1 TO PAYMENTS
1685 IF SOURCE(A)>NUM.UNITS THEN 1725
1690 UNIT=SOURCE(A)
1695 GET #1,UNIT:GET #2,UNIT:GET #3,UNIT:GOSUB 140
1700 PB(A)=OWE:OWE=OWE-PAID(A):LAST$=DAY$(A)
1705 T1=PAID(A)/RATE: GOSUB 3435
1710 DUE$=T1$+"/"+T2$+"/"+T3$
1715 GOSUB 120
1720 PUT #1,UNIT:PUT #2,UNIT:PUT #3,UNIT
1725 NEXT A
1730 CLOSE #1:CLOSE #2:CLOSE #3:PRINT "PAYMENTS POSTED"
1735 PRINT "MOVING PAYMENTS TO PERMANENT FILES"
1740 PRINT "MAKE CERTAIN YOU HAVE THE DATA DISK FOR RENT/EXPENSES/DAILY REPORTS":PRINT "INTO DRIVE B.  STRIKE ENTER TO CONTINUE";:INPUT X
1745 OPEN FILE$ FOR APPEND AS 1
1750 FOR AA=1 TO PAYMENTS
1755 PRINT #1,DAY$(AA):PRINT #1,PAID(AA):PRINT #1,SOURCE(AA):PRINT #1,PB(AA)
1760 NEXT AA
1765 CLOSE #1
1770 PRINT "PAYMENTS NOW STORED IN FILE ";FILE$
1775 OPEN "B:CHEK" FOR INPUT AS 1:INPUT #1,CHEK:CLOSE:PC=CHEK
1780 FOR AA=1 TO PAYMENTS
1785 CHEK=CHEK +PAID(AA):PP=PP+PAID(AA)
1790 NEXT AA
1795 CLS:OPEN "B:CHEK" FOR OUTPUT AS 2:PRINT #2,CHEK:CLOSE:PRINT "CHECKING ACCOUNT BALANCE BEFORE PAYMENTS:";USING "$###,###.##";PC:PRINT "BALANCE AFTER PAYMENTS OF ";USING "$###,###.##";PP;:PRINT " DEPOSITED IS ";USING "$###,###.##";CHEK
1800 PP=0:PC=0:CHEK=0:INPUT "STRIKE ENTER TO CONTINUE";X:RETURN
1805 INPUT "WHAT IS THE LINE NUMBER OF THE PAYMENT TO CHANGE";CHANGE
1810 CLS:PRINT "1.DATE:";DAY$(CHANGE):PRINT "2.AMOUNT PAID:";USING "$####.##";PAID(CHANGE):PRINT "3.SOURCE:";SOURCE(CHANGE)
1815 PRINT "4. ALL ITEMS NOW CORRECT":INPUT "YOUR CHOICE IS ";CH
1820 ON CH GOTO 1845,1850,1840,1830
1825 GOTO 1810
1830 INPUT "ARE THERE OTHER CHANGES TO MAKE (Y=YES)";ASK$:IF LEFT$(ASK$,1)="Y" OR LEFT$(ASK$,1)="y" THEN 1805
1835 TOTPAID=0:INPUT "DO YOU WISH TO SEE A NEW RECAP OF PAYMENTS";ASK$:IF LEFT$(ASK$,1)="Y" OR LEFT$(ASK$,1)="y" THEN 1610 ELSE 1670
1840 PRINT "SOURCE IS: (1-450=RENT  999=SUPPORT SALES":INPUT "998=INTEREST INCOME  997=PROPERTY SALES  995=PAST DUE-VACATED)";SOURCE(CHANGE):GOTO 1810
1845 INPUT "DATE:";DAY$(CHANGE):GOTO 1810
1850 INPUT "AMOUNT PAID:";PAID(CHANGE):GOTO 1810
1855 CLS:PRINT :PRINT TAB(28);"B I L L I N G   M E N U ":PRINT
1860 PRINT TAB(20);"1.  PRINT TRIAL BALANCE"
1865 PRINT TAB(20);"2.  POST BILLING INFORMATION & PRODUCE BILLS":PRINT TAB(20);"3.  DO AGING ANALYSIS"
1870 PRINT TAB(20);"4.  PRODUCE BILL ON SINGLE UNIT"
1875 PRINT TAB(20);"5.  RETURN TO MAIN MENU"
1880 PRINT
1885 PRINT
1890 PRINT TAB(15);"YOUR SELECTION IS:";:INPUT CHOICE
1895 ON CHOICE GOSUB 1910,2020,2245,2415,50
1900 INPUT "RETURN TO BILLING MENU (Y=YES)";ASK$:IF LEFT$(ASK$,1)="Y" OR LEFT$(ASK$,1)="Y" THEN 1855
1905 RETURN
1910 CLS:LPRINT TAB(30);"TRIAL BALANCE FOR ";TODAY$:LPRINT TAB(30);STRING$(27,"-"):LPRINT :LPRINT :LPRINT "UNIT";TAB(10);"SIZE";TAB(17);"TENANT";TAB(48);"PREVIOUS";TAB(60);"RATE";TAB(70);"$$ BILLED"
1915 PRINT TAB(30);"TRIAL BALANCE FOR ";TODAY$:PRINT TAB(30);STRING$(27,"-"):PRINT :PRINT :PRINT "UNIT";TAB(10);"SIZE";TAB(17);"TENANT";TAB(48);"PREVIOUS";TAB(60);"RATE";TAB(70);"$$ BILLED"
1920 GOSUB 155
1925 FOR A=1 TO NUM.UNITS
1930 GET #1,A:GET #2,A:GET #3,A:GOSUB 140
1935 IF LEFT$(TENANT$,6)="VACANT" THEN 1995
1940 IF CUT$="P" THEN GOTO 2005
1945 IF OWE>0 THEN 2015
1950 PRINT UNIT$;TAB(10);SIZE$;TAB(17);TENANT$;TAB(48);OWE;TAB(60);RATE;TAB(70);RATE+OWE:LPRINT UNIT$;TAB(10);SIZE$;TAB(17);TENANT$;TAB(48);OWE;TAB(60);RATE;TAB(70);RATE+OWE
1955 PRINT TAB(17);ADDR$;"   ";ADDR1$;"   ";CITY$;",";STA$;"  ";ZIP$:LPRINT TAB(17);ADDR$;"   ";ADDR1$;"   ";CITY$;",";STA$;"  ";ZIP$
1960 NEWBILL=NEWBILL+RATE+OWE:COUNT=COUNT+1
1965 NEXT A
1970 PRINT STRING$(79,"-"):LPRINT STRING$(79,"-"):PRINT "AMOUNT OF THIS BILLING:";USING "$##,###.##";NEWBILL:LPRINT "AMOUNT OF THIS BILLING;";USING "$##,###.##";NEWBILL:PRINT "TOTAL NUMBER OF BILLS GENERATED:";COUNT:LPRINT "TOTAL";
1975 LPRINT " NUMBER OF BILLS GENERATED:";COUNT:PRINT "TOTAL NUMBER OF PRORATED BILLS:";PRORATE:LPRINT "TOTAL NUMBER OF PRORATED BILLS:";PRORATE:PRINT "RENT ON PRORATED UNITS:";USING "$##,###.##";PROWE
1980 LPRINT "RENT ON PRORATED UNITS:";USING "$##,###.##";PROWE:PRINT "NUMBER OF DELINQUENT UNITS";DELINQUENT:LPRINT "NUMBER OF DELINQUENT UNITS:";DELINQUENT:PRINT "RENT DUE ON DELINQUENT UNITS:";USING "$##,###.##";TOTDEL
1985 LPRINT "RENT DUE ON DELINQUENT UNITS:";USING "$##,###.##";TOTDEL
1990 RETURN
1995 VACANT=VACANT+1:VACRATE=VACRATE+RATE:IF SIZE$="5X10 " THEN VACSIZE=VACSIZE+50:IF SIZE$="5X20 " THEN VACSIZE=VACSIZE+100:IF SIZE$="10X10" THEN VACSIZE=VACSIZE+100:IF SIZE$="10X20" THEN VACSIZE=VACSIZE+200
2000 IF SIZE$="20X20" THEN VACSIZE=VACSIZE+400:GOTO 1965
2005 PRORATE=PRORATE+1:PROWE=PROWE+RATE:GOTO 1965
2010 DELINQUENT=DELINQUENT+1:TOTDEL=TOTDEL+OWE+RATE:GOTO 1950
2015 DELINQUENT=DELINQUENT+1:TOTDEL=TOTDEL+OWE+RATE:GOTO 1950
2020 CLS:INPUT "ENTER MONTH # FOR THESE BILLS";DT:ON DT GOSUB 3360,3365,3370,3375,3380,3385,3390,3395,3400,3405,3410,3415:PRINT "UPDATING RECORDS"
2025 GOSUB 155
2030 FOR A=1 TO NUM.UNITS
2035 GET #1,A:GET #2,A:GET #3,A:GOSUB 140
2040 IF LEFT$(TENANT$,6)="VACANT" THEN 2065
2045 IF CUT$="P" OR CUT$="p" THEN 2065
2050 OWE=OWE+RATE
2055 GOSUB 120
2060 PUT #1,A:PUT #2,A:PUT #3,A
2065 NEXT A
2070 PRINT "READY TO PRODUCE STATEMENTS.  POSITION PAPER PROPERLY IN PRINTER AND STRIKE TO CONTINUE WHEN READY":INPUT X
2075 FOR A=1 TO NUM.UNITS
2080 GET #1,A:GET #2,A:GET #3,A:GOSUB 140
2085 IF LEFT$(TENANT$,6)="VACANT" THEN 2095
2090 IF OWE>0 THEN GOSUB 2210
2095 NEXT A
2100 PRINT "STATEMENTS COMPLETED":CLOSE #1:CLOSE #2:CLOSE #2
2105 RETURN
2110 INPUT "WHAT IS THE FIRST DATE FOR WHICH YOU WANT BILLS PRODUCED";FIRST$:INPUT "WHAT IS THE LAST DATE";LAST$:INPUT "WHAT IS THE NEW DUE DATE";DUD$
2115 GOSUB 155
2120 FOR A=1 TO NUM.UNITS
2125 GET #1,A:GET #2,A:GET #3,A:GOSUB 140
2130 IF CUT$="P" OR CUT$="p" THEN 2135 ELSE 2145
2135 IF DUE$=>FIRST$ THEN 2140 ELSE 2145
2140 IF DUE$<=LAST$ THEN GOSUB 2210
2145 NEXT A
2150 PRINT "PRORATE BILLS PRODUCED.  DO YOU WISH TO UPDATE THESE RECORDS WITH NEW DUE DATES AND RATES NOW (Y=YES)";ASK$:IF LEFT$(ASK$,1)="y" OR LEFT$(ASK$,1)="Y" THEN 2160
2155 CLOSE #1:CLOSE #2:CLOSE #3:RETURN
2160 FOR A=1 TO NUM.UNITS
2165 GET #1,A:GET #2,A:GET #3,A:GOSUB 140
2170 IF CUT$="P" OR CUT$="p" THEN 2175 ELSE 2195
2175 IF DUE$=>FIRST$ THEN 2180 ELSE 2195
2180 IF DUE$<=LAST$ THEN GOSUB 385
2185 GOSUB 120
2190 PUT #1,A:PUT #2,A:PUT #3,A
2195 NEXT A
2200 CLOSE #1:CLOSE #2:RETURN
2205 RETURN
2210 REM
2215 LPRINT TAB(58);TODAY$
2220 FST$=DUE$
2225 LPRINT TAB(5);TENANT$:LPRINT TAB(5);ADDR$:LPRINT TAB(5);ADDR1$:LPRINT TAB(5);CITY$;",";STA$;"  ";ZIP$:FOR SPACE=1 TO 8:LPRINT:NEXT SPACE
2228 LPRINT "FROM"; TAB(12);"TO"; TAB(22);"UNIT #"; TAB(31); "SIZE"; TAB(43); "RATE"; TAB(53);"MOS.";TAB(62); "AMT TO PAY"
2229 LPRINT "----"; TAB(12);"--"; TAB(22);"------";TAB(31);"----";TAB(43);"----"; TAB(53);"---";TAB(62);"----------"
2230 LPRINT " ";FST$;TAB(12);LST$;TAB(22);UNIT$;TAB(31);SIZE$;TAB(43);RATE;:LPRINT TAB(53);USING "##.##";OWE/RATE;:LPRINT TAB(62);USING"$####.##";OWE
2235 LPRINT CHR$(12)
2240 RETURN
2245 CLS:INPUT "DO YOU WANT HARDCOPY (Y=YES)";HC$
2250 GOSUB 725
2255 IF LEFT$(TODAY$,2)="01" THEN GOSUB 665
2260 IF LEFT$(TODAY$,2)="02" THEN GOSUB 670
2265 IF LEFT$(TODAY$,2)="03" THEN GOSUB 675
2270 IF LEFT$(TODAY$,2)="04" THEN GOSUB 680
2275 IF LEFT$(TODAY$,2)="05" THEN GOSUB 685
2280 IF LEFT$(TODAY$,2)="06" THEN GOSUB 690
2285 IF LEFT$(TODAY$,2)="07" THEN GOSUB 695
2290 IF LEFT$(TODAY$,2)="08" THEN GOSUB 700
2295 IF LEFT$(TODAY$,2)="09" THEN GOSUB 705
2300 IF LEFT$(TODAY$,2)="10" THEN GOSUB 710
2305 IF LEFT$(TODAY$,2)="11" THEN GOSUB 715
2310 IF LEFT$(TODAY$,2)="12" THEN GOSUB 720
2315 GOSUB 155
2320 FOR A=1 TO NUM.UNITS
2325 GET #1,A:GET #2,A:GET #3,A:GOSUB 140
2330 IF OWE<=0 THEN 2355
2335 DEL=OWE/RATE: IF DEL=1 AND MID$(TODAY$,4,2)>"20" THEN 2355
2340 IF DEL=>1 AND DEL<2 THEN GOTO 2385
2345 IF DEL=>2 AND DEL<3 THEN GOTO 2395
2350 IF DEL=>3 THEN GOTO 2405
2355 NEXT A
2360 PRINT STRING$(79,"-"):LPRINT STRING$(79,"-"):PRINT "TOTAL DELINQUENT UNITS=";DEL30+DEL60+DEL90:LPRINT "TOTAL DELINQUENT UNITS=";DEL30+DEL60+DEL90:PRINT "TOTAL AMOUNT AMOUNT DELINQUENT:";USING "$##,###.##";OWE30+OWE60+OWE90
2365 LPRINT "TOTAL DELINQUENT ON ALL UNITS=";USING "$##,###.##";OWE30+OWE60+OWE90:PRINT STRING$(79,"-"):LPRINT STRING$(79,"-")
2370 PRINT "30 DAYS=";USING "$##,###.##";OWE30:LPRINT "30 DAYS=";USING "$##,###.##";OWE30:PRINT "60 DAYS=";USING "$##,###.##";OWE60:LPRINT "60 DAYS=";USING "$##,###.##";OWE60
2375 PRINT "90 DAYS OR MORE=";USING "$##,###.##";OWE90:LPRINT "90 DAYS OR MORE=";USING "$##,###.##";OWE90
2380 DEL30=0:DEL60=0:DEL90=0:OWE30=0:OWE60=0:OWE90=0:RETURN
2385 DEL30=DEL30+1:OWE30=OWE30+OWE
2390 PRINT UNIT$;TAB(8);SIZE$;TAB(15);TENANT$;TAB(47);USING "$##,###.##";OWE;:PRINT TAB(65);"X":LPRINT UNIT$;TAB(8);SIZE$;TAB(15);TENANT$;TAB(47);USING "$##,###.##";OWE;:LPRINT TAB(65);"X":GOTO 2355
2395 DEL60=DEL60+1:OWE60=OWE60+OWE
2400 PRINT UNIT$;TAB(8);SIZE$;TAB(15);TENANT$;TAB(47);USING "$##,###.##";OWE;:PRINT TAB(70);"X":LPRINT UNIT$;TAB(8);SIZE$;TAB(15);TENANT$;TAB(47);USING "$##,###.##";OWE;:LPRINT TAB(70);"X":GOTO 2355
2405 DEL90=DEL90+1:OWE90=OWE90+OWE
2410 PRINT UNIT$;TAB(8);SIZE$;TAB(15);TENANT$;TAB(47);USING "$##,###.##";OWE;:PRINT TAB(75);"X":LPRINT UNIT$;TAB(8);SIZE$;TAB(15);TENANT$;TAB(47);USING "$##,###.##";OWE;:LPRINT TAB(75);"X":GOTO 2355
2415 CLS:INPUT "WHAT IS THE UNIT #";A:INPUT "WHAT IS THE MONTH NUMBER FOR THIS BILL";DT:CLS:PRINT "PRODUCING BILL"
2420 ON DT GOSUB 3360,3365,3370,3375,3380,3385,3390,3395,3400,3405,3410,3415
2425 GOSUB 155
2430 GET #1,A:GET #2,A:GET #3,A:GOSUB 140
2435 GOSUB 2210
2440 CLOSE #1:CLOSE #2:INPUT "PRODUCE ANOTHER BILL ON A SINGLE UNIT";ASK$:IF LEFT$(ASK$,1)="Y" OR LEFT$(ASK$,1)="y" THEN  GOTO 2415
2445 RETURN
2450 CLS
2455 PRINT TAB(20);"G E N E R A L  E X P E N S E S":PRINT :PRINT TAB(20);"1. ENTER OPERATING EXPENSES":PRINT TAB(20);"2. EDIT EXPENSE FILES"
2460 PRINT TAB(20);"3. PRODUCE YTD EXPENSE SUMMARY":PRINT TAB(20);"4. DUMP EXPENSE DATA FOR SPECIFIC MONTH"
2465 PRINT TAB(20);"5. RETURN TO MAIN MENU"
2470 PRINT :INPUT "                    YOUR CHOICE";CHOICE
2475 ON CHOICE GOSUB 805,2495,2570,2645,50
2480 INPUT "RETURN TO THE MAIN MENU (Y=YES)";ASK$:IF LEFT$(ASK$,1)="Y" OR LEFT$(ASK$,1)="y" THEN 2485 ELSE 2490
2485 CLEAR:TODAY$=LEFT$(DATE$,2)+"/"+MID$(DATE$,4,2)+"/"+RIGHT$(DATE$,2):GOTO 50
2490 CLEAR:TODAY$=LEFT$(DATE$,2)+"/"+MID$(DATE$,4,2)+"/"+RIGHT$(DATE$,2):GOTO 2450
2495 CLS:INPUT "ENTER MONTH NUMBER OF EXPENSES NEEDING EDITING (1-12)";MONT
2500 ON MONT GOSUB 2890,2895,2900,2905,2910,2915,2920,2925,2930,2935,2940,2945
2505 INPUT "WHO RECEIVED THE PAYMENT";CM$
2510 OPEN FILE$ FOR INPUT AS 1:OPEN "B:WORK" FOR OUTPUT AS 2
2515 FOR A=1 TO 4000
2520 IF EOF(1) THEN 2565
2525 INPUT #1,TYPE:INPUT #1,CHECKNO:INPUT #1,PAIDTO$:INPUT #1,DD$:INPUT #1,AMOUNT
2530 IF CM$=PAIDTO$ THEN 2535 ELSE 2555
2535 CLS:PRINT "1. TYPE:";TYPE;TAB(15);"2. CHECK #:";CHECKNO;TAB(38);"3. PAID TO:";PAIDTO$:PRINT :PRINT "4.DATE:";DD$;TAB(20);"5. AMOUNT";USING "$##,###.##";AMOUNT;:PRINT TAB(40);"6. RECORD CORRECT"
2540 PRINT :INPUT "SELECT NUMBER TO CORRECT FIELD OR STORE RECORD";SR
2545 ON SR GOTO 3050,3070,3075,3080,3085,2555
2550 GOTO 2535
2555 PRINT #2,TYPE:PRINT #2,CHECKNO:PRINT #2,PAIDTO$:PRINT #2,DD$:PRINT #2,AMOUNT
2560 NEXT A
2565 CLOSE:KILL FILE$:NAME "B:WORK" AS FILE$:RETURN
2570 CLS:INPUT "CURRENT MONTH NUMBER IS: (1-12)";MM
2575 LPRINT TAB(27);"YEAR TO DATE OPERATING EXPENSES":LPRINT TAB(31);"PREPARED ON ";TODAY$:LPRINT TAB(27);STRING$(31,"-"):FOR A=1 TO 5:LPRINT :NEXT A
2580 FOR COUNT =1 TO MM
2585 ON COUNT GOSUB 2890,2895,2900,2905,2910,2915,2920,2925,2930,2935,2940,2945
2590 OPEN FILE$ FOR INPUT AS 1
2595 FOR A=1 TO 4000
2600 IF EOF(1) THEN 2630
2605 INPUT #1,TYPE:INPUT #1,CHECKNO:INPUT #1,PAIDTO$:INPUT #1,DD$:INPUT #1,AMOUNT
2610 ON TYPE GOSUB 2950,2955,2960,2965,2970,2975,2980,2985,2990,2995,3000,3005,3010,3015,3020,3025,3030,3035,3040
2615 GOSUB 3045
2620 ON TYPE GOSUB 3090,3095,3100,3105,3110,3115,3120,3125,3130,3135,3140,3145,3150,3155,3160,3165,3170,3175,3180
2625 NEXT A
2630 CLOSE #1:NEXT COUNT
2635 GOSUB 4600
2640 RETURN
2645 INPUT "***DUMP FILES***   FOR WHICH MONTH'S EXPENSES(1-12)";MONTH
2650 ON MONTH GOSUB 2890,2895,2900,2905,2910,2915,2920,2925,2930,2935,2940,2945
2655 GOSUB 3200
2660 OPEN FILE$ FOR INPUT AS 1
2665 FOR A=1 TO 4000
2670 IF EOF(1) THEN GOTO 2690
2675 INPUT #1,TYPE:INPUT #1,CHECKNO:INPUT #1,PAIDTO$:INPUT #1,DD$:INPUT #1,AMOUNT:COUNT=COUNT+1
2680 GOSUB 3190
2685 NEXT A
2690 CLOSE #1
2695 LPRINT STRING$(79,"-"):LPRINT "TOTAL RECORDS PROCESSED:";COUNT
2700 INPUT "STRIKE ENTER TO CONTINUE:";X:COUNT=0:RETURN
2705 CLS:PRINT "PRODUCE OPERATING SUMMARY"
2710 INPUT "SELECT:  1=SINGLE MONTH  2=YEAR-TO-DATE";SE:
2715 IF SE=1 THEN 2730
2720 IF SE=2 THEN 2850
2725 GOTO 2705
2730 INPUT "WHAT IS THE CURRENT MONTH NUMBER (1-12)";MONTH:ON MONTH GOSUB 2890,2895,2900,2905,2910,2915,2920,2925,2930,2935,2940,2945
2735 OPEN FILE1$ FOR INPUT AS 1
2740 FOR A=1 TO 4000
2745 IF EOF(1) THEN 2785
2750 INPUT #1,DAY$:INPUT #1,PAID:INPUT #1,SOURCE:INPUT #1,PB
2755 IF SOURCE=<NUM.UNITS THEN GOSUB 3215
2760 IF SOURCE=999 THEN GOSUB 3220
2765 IF SOURCE=998 THEN GOSUB 3225
2770 IF SOURCE=997 THEN GOSUB 3230
2775 IF SOURCE=995 THEN GOSUB 3235
2780 COUNT=COUNT+1:NEXT A
2785 CLOSE #1
2790 OPEN FILE$ FOR INPUT AS 1
2795 FOR A=1 TO 4000
2800 IF EOF(1) THEN 2825
2805 INPUT #1,TYPE:INPUT #1,CHECKNO:INPUT #1,PAIDTO$:INPUT #1,DD$:INPUT #1,AMOUNT
2810 IF TYPE<1 OR TYPE>19 THEN 2820
2815 ON TYPE GOSUB 2950,2955,2960,2965,2970,2975,2980,2985,2990,2995,3000,3005,3010,3015,3020,3025,3030,3035,3040
2820 COUNT1=COUNT1+1:NEXT A
2825 CLOSE #1:
2830 IF FLAG=1 THEN RETURN
2835 GOSUB 3245
2840 GOSUB 3250
2845 RETURN
2850 FLAG=1:INPUT "WHAT IS THE CURRENT MONTH #(1-12)";MONTHS
2855 FOR YTD=1 TO MONTHS
2860 ON YTD GOSUB 2890,2895,2900,2905,2910,2915,2920,2925,2930,2935,2940,2945
2865 GOSUB 2735
2870 NEXT YTD
2875 GOSUB 3240
2880 GOSUB 3250
2885 FLAG=0:RETURN
2890 FILE1$="B:JANU"+RIGHT$(DATE$,2):MONTH$="JANUARY":FILE$="B:JANEXP"+RIGHT$(DATE$,2):RETURN
2895 FILE1$="B:FEBR"+RIGHT$(DATE$,2):MONTH$="FEBRUARY":FILE$="B:FEBEXP"+RIGHT$(DATE$,2):RETURN
2900 FILE1$="B:MARC"+RIGHT$(DATE$,2):MONTH$="MARCH":FILE$="B:MAREXP"+RIGHT$(DATE$,2):RETURN
2905 FILE1$="B:APRI"+RIGHT$(DATE$,2):MONTH$="APRIL":FILE$="B:APREXP"+RIGHT$(DATE$,2):RETURN
2910 FILE1$="B:MAY"+RIGHT$(DATE$,2):MONTH$="MAY":FILE$="B:MAYEXP"+RIGHT$(DATE$,2):RETURN
2915 FILE1$="B:JUNE"+RIGHT$(DATE$,2):MONTH$="JUNE":FILE$="B:JUNEXP"+RIGHT$(DATE$,2):RETURN
2920 FILE1$="B:JULY"+RIGHT$(DATE$,2):MONTH$="JULY":FILE$="B:JULEXP"+RIGHT$(DATE$,2):RETURN
2925 FILE1$="B:AUGU"+RIGHT$(DATE$,2):MONTH$="AUGUST":FILE$="B:AUGEXP"+RIGHT$(DATE$,2):RETURN
2930 FILE1$="B:SEPT"+RIGHT$(DATE$,2):MONTH$="SEPTEMBER":FILE$="B:SEPEXP"+RIGHT$(DATE$,2):RETURN
2935 FILE1$="B:OCTO"+RIGHT$(DATE$,2):MONTH$="OCTOBER":FILE$="B:OCTEXP"+RIGHT$(DATE$,2):RETURN
2940 FILE1$="B:NOVE"+RIGHT$(DATE$,2):MONTH$="NOVEMBER":FILE$="B:NOVEXP"+RIGHT$(DATE$,2):RETURN
2945 FILE1$="B:DECE"+RIGHT$(DATE$,2):MONTH$="DECEMBER":FILE$="B:DECEXP"+RIGHT$(DATE$,2):RETURN
2950 SALARY=SALARY+AMOUNT:RETURN
2955 UTILITIES=UTILITIES+AMOUNT:RETURN
2960 PHONE=PHONE+AMOUNT:RETURN
2965 PEST=PEST+AMOUNT:RETURN
2970 TRAVEL=TRAVEL+AMOUNT:RETURN
2975 NOTUSE=NOTUSE+AMOUNT:RETURN
2980 ACCOUNT=ACCOUNT+AMOUNT:RETURN
2985 MISC=MISC+AMOUNT:RETURN
2990 RETCHECK=RETCHECK+AMOUNT:RETURN
2995 PROPTAX=PROPTAX+AMOUNT:RETURN
3000 INTEXP=INTEXP+AMOUNT:RETURN
3005 DEP=DEP+AMOUNT:RETURN
3010 DUESUB=DUESUB+AMOUNT:RETURN
3015 POSTAGE=POSTAGE+AMOUNT:RETURN
3020 INS=INS+AMOUNT:RETURN
3025 MNT=MNT+AMOUNT:RETURN
3030 REPAIRS=REPAIRS+AMOUNT:RETURN
3035 PAYTAX=PAYTAX+AMOUNT:RETURN
3040 EQUIP=EQUIP+AMOUNT:RETURN
3045 TOTALL=TOTALL+AMOUNT:RETURN
3050 CLS:PRINT TAB(10);"1=SALARIES";TAB(30);"2=UTILITIES";TAB(60);"3=PHONE":PRINT TAB(10);"4=PEST CONTROL";TAB(30);"5=TRAVEL";TAB(60);"6=ADVERTISING":PRINT TAB(10);"7=LEGAL & ACCTNG";TAB(30);"8=MISC.";TAB(60);"9=RET. CHECKS"
3055 PRINT TAB(10);"10=ADVALOREM & GENERAL TAXES";TAB(30);"11=INTEREST EXPENSES";TAB(60);"12=DEPRECIATION":PRINT TAB(10);"13=DUES/SUBSCRIPTIONS";TAB(30);"14=POSTAGE";TAB(60);"15=INSURANCE":PRINT TAB(10);"16=MAINTENANCE/CLEANING";TAB(30);"17=REPAIRS";
3060 PRINT TAB(60);"18=SUPPLIES":PRINT TAB(10);"19=EQUIPMENT"
3065 INPUT "RE-ENTER TYPE OF EXPENSE";TYPE:GOTO 2535
3070 INPUT "RE-ENTER CHECK NUMBER";CHECKNO:GOTO 2535
3075 INPUT "RE-ENTER RECIPIENT";PAIDTO$:GOTO 2535
3080  INPUT "RE-ENTER DATE:";DD$:GOTO 2535
3085 INPUT "RE-ENTER AMOUNT:";AMOUNT:GOTO 2535
3090 LPRINT "SALARIES";TAB(40);USING "$##,###.##";AMOUNT:RETURN
3095 LPRINT "UTILITIES";TAB(40);USING "$##,###.##";AMOUNT:RETURN
3100 LPRINT "TELEPHONE";TAB(40);USING "$##,###.##";AMOUNT:RETURN
3105 LPRINT "PEST CONTROL";TAB(40);USING "$##,###.##";AMOUNT:RETURN
3110 LPRINT "TRAVEL";TAB(40);USING "$##,###.##";AMOUNT:RETURN
3115 LPRINT "ADVERTISING";TAB(40);USING "$##,###.##";AMOUNT:RETURN
3120 LPRINT "LEGAL & ACCOUNTING";TAB(40);USING "$##,###.##";AMOUNT:RETURN
3125 LPRINT "MISCELLANEOUS";TAB(40);USING "$##,###.##";AMOUNT:RETURN
3130 LPRINT "RETURNED CHECKS";TAB(40);USING "$##,###.##";AMOUNT:RETURN
3135 LPRINT "ADVALOREM & GENERAL TAXES";TAB(40);USING "$##,###.##";AMOUNT:RETURN
3140 LPRINT "INTEREST EXPENSES";TAB(40);USING "$##,###.##";AMOUNT:RETURN
3145 LPRINT "DEPRECIATION";TAB(40);USING "$##,###.##";AMOUNT:RETURN
3150 LPRINT "DUES/SUBSCRIPTIONS";TAB(40);USING "$##,###.##";AMOUNT:RETURN
3155 LPRINT "POSTAGE";TAB(40);USING "$##,###.##";AMOUNT:RETURN
3160 LPRINT "INSURANCE";TAB(40);USING "$##,###.##";AMOUNT:RETURN
3165 LPRINT "MAINTENANCE/CLEANING";TAB(40);USING "$##,###.##";AMOUNT:RETURN
3170 LPRINT "REPAIRS";TAB(40);USING "$##,###.##";AMOUNT:RETURN
3175 LPRINT "PAYROLL TAXES";TAB(40);USING "$##,###.##";AMOUNT:RETURN
3180 LPRINT "EQUIPMENT";TAB(40);USING "$##,###.##";AMOUNT:RETURN
3185 RETURN
3190 LPRINT TYPE;TAB(10);CHECKNO;TAB(20);PAIDTO$;TAB(40);DD$;TAB(60);AMOUNT
3195 RETURN
3200 LPRINT "FILE DUMP OF ";FILE$;" ON ";TODAY$
3205 LPRINT :LPRINT :LPRINT "TYPE";TAB(10);"CHECK #";TAB(20);"REC'D BY";TAB(40);"DATE";TAB(60);"AMOUNT"
3210 LPRINT STRING$(79,"="):RETURN
3215 RENT=RENT+PAID:RETURN
3220 SUPPORT=SUPPORT+PAID:RETURN
3225 INTEREST=INTEREST+PAID:RETURN
3230 PROP=PROP+PAID:RETURN
3235 VACATED=VACATED+PAID:RETURN
3240 LPRINT "            YEAR-TO-DATE OPERATING SUMMARY":LPRINT "            PREPARED ON ";TODAY$:LPRINT STRING$(79,"-"):RETURN
3245 LPRINT "OPERATING SUMMARY FOR ";MONTH$:LPRINT STRING$(LEN(MONTH$)+22,"-"):RETURN
3250 LPRINT
3255 LPRINT TAB(37);"INCOME":LPRINT STRING$(79,"=")
3260 LPRINT "INCOME TYPE";TAB(45);"AMOUNT"
3265 LPRINT STRING$(55,"-"):LPRINT "UNIT RENT";TAB(40);USING "$###,###.##";RENT:LPRINT "SUPPORT SALES";TAB(40);USING "$###,###.##";SUPPORT
3270 LPRINT "INTEREST INCOME";TAB(40);USING "$###,###.##";INTEREST:LPRINT "PROPERTY SALES";TAB(40);USING "$###,###.##";PROP:LPRINT "PAST DUE-VACATED";TAB(40);USING "$###,###.##";VACATED
3275 LPRINT STRING$(55,"="):LPRINT "TOTAL OF ALL INCOME:";USING "$###,###.##";RENT+SUPPORT+INTEREST+PROP+VACATED
3280 FOR A=1 TO 5:LPRINT:NEXT A
3285 LPRINT TAB(36);"EXPENSES":LPRINT STRING$(79,"=")
3290 LPRINT :LPRINT "EXPENSE ITEM";TAB(40);"AMOUNT":LPRINT STRING$(55,"-")
3295 LPRINT "1530";TAB(10);"EQUIPMENT";TAB(40);USING "$##,###.##";EQUIP:LPRINT "5010";TAB(10);"SALARIES";TAB(40);USING "$##,###.##";SALARY:LPRINT "5020";TAB(10);"REPAIRS";TAB(40);USING "$##,###.##";REPAIRS
3300 LPRINT "5030";TAB(10);"MAINTENANCE/CLEANING";TAB(40);USING "$##,###.##";MNT:LPRINT "5040";TAB(10);"PEST CONTROL";TAB(40);USING "$##,###.##";PEST:LPRINT "5050";TAB(10);"UTILITIES";TAB(40);USING "$##,###.##";UTILITIES
3305 LPRINT "5060";TAB(10);"TELEPHONE";TAB(40);USING "$##,###.##";PHONE:LPRINT "5070";TAB(10);"INSURANCE";TAB(40);USING "$##,###.##";INS:LPRINT "5080";TAB(10);"POSTAGE";TAB(40);USING "$##,###.##";POSTAGE
3310 LPRINT "5090";TAB(10);"PAYROLL TAXES";TAB(40);USING "$##,###.##";PAYTAX:LPRINT "5100";TAB(10);"ADVALOREM & GENERAL TAXES";TAB(40);USING "$##,###.##";PROPTAX:LPRINT "5110";TAB(10);"ACCOUNTING AND LEGAL";TAB(40);USING "$##,###.##";ACCOUNT
3315 LPRINT "5120";TAB(10);"DUES/SUBSCRIPTIONS";TAB(40);USING "$##,###.##";DUESUB
3320 LPRINT "5130";TAB(10);"RETURNED CHECKS";TAB(40);USING "$##,###.##";RETCHECK
3325 LPRINT "5140";TAB(10);"ADVERTISING";TAB(40);USING "$##,###.##";NOTUSE:LPRINT "5150";TAB(10);"TRAVEL";TAB(40);USING "$##,###.##";TRAVEL
3330 LPRINT "5160";TAB(10);"MISCELLANEOUS";TAB(40);USING "$##,###.##";MISC:LPRINT "5300";TAB(10);"DEPRECIATION";TAB(40);USING "$##,###.##";DEP:LPRINT "    ";TAB(10);"INTEREST EXPENSES";TAB(40);USING "$##,###.##";INTEXP
3335 LPRINT STRING$(55,"=")
3340 LPRINT "TOTAL OPERATING EXPENSES:";TAB(40);USING "$###,###.##";SALARY+UTILITIES+PHONE+PEST+TRAVEL+NOTUSE+ACCOUNT+MISC+RETCHECK+PROPTAX+INTEXP+DEP+DUESUB+POSTAGE+INS+MNT+PAYTAX+REPAIRS+EQUIP
3345 ALLTOT=(RENT+SUPPORT+INTEREST+PROP+VACATED)-(SALARY+UTILITIES+PHONE+PEST+TRAVEL+NOTUSE+ACCOUNT+MISC+RETCHECK+PROPTAX+INTEXP+DEP+DUESUB+POSTAGE+INS+MNT+PAYTAX+REPAIRS+EQUIP)
3350 LPRINT :LPRINT :LPRINT STRING$(55,"="):LPRINT "SUMMARY OF OPERATION:";USING "$###,###.##";ALLTOT;:IF ALLTOT<0 THEN LPRINT "   ***DEFICIT" ELSE LPRINT "     ***PROFIT"
3355 RETURN
3360 LST$="02/01/"+RIGHT$(STR$(VAL(RIGHT$(DATE$,2))+1)):RETURN
3365 LST$="03/01/"+RIGHT$(DATE$,2):RETURN
3370 LST$="04/01/"+RIGHT$(DATE$,2):RETURN
3375 LST$="05/01/"+RIGHT$(DATE$,2):RETURN
3380 LST$="06/01/"+RIGHT$(DATE$,2):RETURN
3385 LST$="07/01/"+RIGHT$(DATE$,2):RETURN
3390 LST$="08/01/"+RIGHT$(DATE$,2):RETURN
3395 LST$="09/01/"+RIGHT$(DATE$,2):RETURN
3400 LST$="10/01/"+RIGHT$(DATE$,2):RETURN
3405 LST$="11/01/"+RIGHT$(DATE$,2):RETURN
3410 LST$="12/01/"+RIGHT$(DATE$,2):RETURN
3415 LST$="01/01/"+STR$(VAL(RIGHT$(DATE$,2))+1):RETURN
3420 PRINT TAB(10);ADDR$:PRINT TAB(10);ADDR1$:PRINT TAB(10);CITY$;",";STA$;"  ";ZIP$:PRINT STRING$(79,"-")
3425 LPRINT TAB(10);ADDR$:LPRINT TAB(10);ADDR1$:LPRINT TAB(10);CITY$;",";STA$;"   ";ZIP$:LPRINT STRING$(79,"-")
3430 LC=LC+4:RETURN
3435 T1$=LEFT$(DUE$,2):T2$=MID$(DUE$,4,2):T3$=RIGHT$(DUE$,2)
3440 FOR CT=1 TO T1
3445 T1$=STR$(VAL(LEFT$(T1$,2))+1)
3450 IF T1$=" 13" THEN T3$=STR$(VAL(RIGHT$(T3$,2))+1):IF T1$=" 13" THEN T1$="01":IF T1$="01" THEN GOTO 3520
3455 IF T1$=" 9" THEN T1$="09"
3460 IF T1$=" 8" THEN T1$="08"
3465 IF T1$=" 7" THEN T1$="07"
3470 IF T1$=" 6" THEN T1$="06"
3475 IF T1$=" 5" THEN T1$="05"
3480 IF T1$=" 4" THEN T1$="04"
3485 IF T1$=" 3" THEN T1$="03"
3490 IF T1$=" 2" THEN T1$="02"
3495 IF T1$=" 10" THEN T1$="10"
3500 IF T1$=" 12" THEN T1$="12"
3505 IF T1$=" 11" THEN T1$="11"
3510 NEXT CT
3515 RETURN
3520 IF T3$=" 86" THEN T3$="86"
3525 IF T3$=" 87" THEN T3$="87"
3530 IF T3$=" 88" THEN T3$="88"
3535 IF T3$=" 89" THEN T3$="89"
3540 IF T3$=" 90" THEN T3$="90"
3545 IF T3$=" 91" THEN T3$="91"
3550 IF T3$=" 92" THEN T3$="92"
3555 IF T3$=" 93" THEN T3$="93"
3560 IF T3$=" 94" THEN T3$="94"
3565 IF T3$=" 95" THEN T3$="95"
3570 IF T3$=" 96" THEN T3$="96"
3575 IF T3$=" 97" THEN T3$="97"
3580 IF T3$=" 98" THEN T3$="98"
3585 IF T3$=" 99" THEN T3$="99"
3590 GOTO 3455
3595 DT=VAL(LEFT$(DATE$,2)):ON DT GOSUB 2890,2895,2900,2905,2910,2915,2920,2925,2930,2935,2940,2945
3600 DS=DT-1:IF DS=0 THEN DS=12
3605 BEEP:BEEP:PRINT "MAKE CERTAIN THE REPORTS/EXPENSES/PAYMENTS DATA FILE IS IN DRIVE B":INPUT "STRIKE ENTER WHEN READY";X
3610 PRINT "OPENING ";FILE1$
3615 OPEN FILE1$ FOR INPUT AS #1
3620 WHILE NOT EOF(1)
3625 INPUT #1,DAY$:INPUT #1,PAID:INPUT #1,SOURCE:INPUT #1,PB
3630 IF DAY$=TODAY$ THEN RE=RE+PAID
3635 RTD=RTD+PAID
3640 WEND
3645 CLOSE
3650 OPEN "B:CHEK" FOR INPUT AS #1:INPUT #1,CHEK:CLOSE
3655 OPEN "B:SAV" FOR INPUT AS #1:INPUT #1,SAV:CLOSE
3660 IF DT<10 THEN FILE2$="B:DALY"+RIGHT$(STR$(DT),1)+RIGHT$(DATE$,2) ELSE FILE2$="B:DALY"+RIGHT$(STR$(DT),2)+RIGHT$(DATE$,2)
3665 OPEN FILE2$ FOR APPEND AS #1
3670 PRINT #1,RE
3675 PRINT #1,RTD
3680 PRINT #1,UR
3685 PRINT #1,VACANT
3690 PRINT #1,DELINQUENT
3695 PRINT #1,DR:PRINT #1,TODAY$
3700 PRINT #1,CHEK:PRINT #1,SAV
3705 CLOSE
3710 ON DS GOSUB 4000,4005,4010,4015,4020,4025,4030,4035,4040,4045,4050,3995
3715 OPEN FILE2$ FOR INPUT AS #1
3720 WHILE NOT EOF(1)
3725 INPUT #1,RE1:INPUT #1,RTD1:INPUT #1,UR1:INPUT #1,VACANT1:INPUT #1,DELINQUENT1:INPUT #1,DR1:INPUT #1,DT$:INPUT #1,CHEK1:INPUT #1,SAV1
3730 IF MID$(DT$,4,2)=>MID$(DATE$,4,2) THEN 3750
3735 WEND
3740 IF MID$(DT$,4,2)=MID$(DATE$,4,2) THEN 3750 ELSE 3745
3745 RE1=0:RTD1=0:UR1=0:VACANT1=0:DELINQUENT1=0:DR1=0
3750 CLOSE
3755 ON DT GOSUB 4060,4065,4070,4075,4080,4085,4090,4095,4100,4105,4110,4115
3760 INPUT "MAKE CERTAIN LAST YEAR'S DATA DISK IS IN SYSTEM AND STRIKE ENTER";X
3765 OPEN FILE2$ FOR INPUT AS #1
3770 WHILE NOT EOF(1)
3775 INPUT #1,RE2:INPUT #1,RTD2:INPUT #1,UR2:INPUT #1,VACANT2:INPUT #1,DELINQUENT2:INPUT #1,DR2:INPUT #1,DT2$:INPUT #1,CHEK2:INPUT #1,SAV2
3780 IF MID$(DT2$,4,2)=>MID$(DATE$,4,2) THEN 3800
3785 WEND
3790 IF MID$(DT$,4,2)=MID$(DATE$,4,2) THEN 3800 ELSE 3795
3795 RE2=0:RTD2=0:UR2=0:VACANT2=0:DELINQUENT2=0:DR2=0
3800 CLOSE
3805 LPRINT CHR$(12):CLS
3810 PRINT TAB(20);"DAILY PROPERTY  SUMMARY":PRINT TAB(20);"-------------------------"
3815 PRINT:PRINT:PRINT TAB(28);DATE$:PRINT :PRINT :PRINT STRING$(79,"="):PRINT TAB(25);"TODAY";TAB(45);"LAST MONTH";TAB(65);"LAST YEAR"
3820 LPRINT STRING$(79,"=")
3825 PRINT:PRINT "RECEIPTS";TAB(25);USING "$##,###.##";RE;:PRINT TAB(45);USING "$##,###.##";RE1;:PRINT TAB(65);USING "$##,###.##";RE2
3830 PRINT :PRINT STRING$(79,"-")
3835 PRINT STRING$(79,"-"):PRINT:PRINT "RECEIVABLES":PRINT "TO DATE";:PRINT TAB(25);USING "$##,###.##";RTD:PRINT TAB(45);USING "$##,###.##";RTD1;:PRINT TAB(65);USING "$##,###.##";RTD2
3840 PRINT :PRINT STRING$(79,"-")
3845 PRINT:PRINT "UNITS RENTED";TAB(25);UR;TAB(45);UR1;TAB(65);UR2
3850 PRINT :PRINT STRING$(79,"-")
3855 PRINT:PRINT "VACANCIES";TAB(25);VACANT;TAB(45);VACANT1;TAB(65);VACANT2
3860 PRINT :PRINT STRING$(79,"-")
3865 PRINT:PRINT "DELINQUENT":PRINT "UNITS";TAB(25);DELINQUENT;TAB(45);DELINQUENT1;TAB(65);DELINQUENT2
3870 PRINT :PRINT STRING$(79,"-")
3875 PRINT:PRINT "DELINQUENT":PRINT "RECEIVABLES";:PRINT TAB(25);USING "$##,###.##";DR:PRINT TAB(45);USING "$##,###.##";DR1;:PRINT TAB(65);USING "$##,###.##";DR2
3880 PRINT :PRINT STRING$(79,"-")
3885 PRINT :PRINT "F.C.N.B.":PRINT "CHECKING";:PRINT TAB(25);USING "$##,###.##";CHEK;:PRINT TAB(45);USING "$##,###.##";CHEK1;:PRINT TAB(65);USING "$##,###.##";CHEK2
3890 PRINT :PRINT STRING$(79,"-")
3895 PRINT :PRINT "F.C.N.B.":PRINT "SAVINGS";:PRINT TAB(25);USING "$##,###.##";SAV;:PRINT TAB(45);USING "$##,###.##";SAV1;:PRINT TAB(65);USING "$##,###.##";SAV2
3900 PRINT :PRINT STRING$(79,"-")
3905 LPRINT TAB(20);"DAILY WAREHOUSE SUMMARY":LPRINT TAB(20);"-------------------------"
3910 LPRINT:LPRINT:LPRINT TAB(28);DATE$:LPRINT :LPRINT :LPRINT STRING$(79,"="):LPRINT TAB(25);"TODAY";TAB(45);"LAST MONTH";TAB(65);"LAST YEAR"
3915 LPRINT STRING$(79,"=")
3920 LPRINT:LPRINT "RECEIPTS";TAB(25);USING "$##,###.##";RE;:LPRINT TAB(45);USING "$##,###.##";RE1;:LPRINT TAB(65);USING "$##,###.##";RE2
3925 LPRINT STRING$(79,"-"):LPRINT:LPRINT "RECEIVABLES":LPRINT "TO DATE";:LPRINT TAB(25);USING "$##,###.##";RTD:LPRINT TAB(45);USING "$##,###.##";RTD1;:LPRINT TAB(65);USING "$##,###.##";RTD2
3930 LPRINT :LPRINT STRING$(79,"-")
3935 LPRINT:LPRINT "UNITS RENTED";TAB(25);UR;TAB(45);UR1;TAB(65);UR2
3940 LPRINT :LPRINT STRING$(79,"-")
3945 LPRINT:LPRINT "VACANCIES";TAB(25);VACANT;TAB(45);VACANT1;TAB(65);VACANT2
3950 LPRINT :LPRINT STRING$(79,"-")
3955 LPRINT:LPRINT "DELINQUENT":LPRINT "UNITS";TAB(25);DELINQUENT;TAB(45);DELINQUENT1;TAB(65);DELINQUENT2
3960 LPRINT :LPRINT STRING$(79,"-")
3965 LPRINT:LPRINT "DELINQUENT":LPRINT "RECEIVABLES";:LPRINT TAB(25);USING "$##,###.##";DR:LPRINT TAB(45);USING "$##,###.##";DR1;:LPRINT TAB(65);USING "$##,###.##";DR2
3970 LPRINT :LPRINT STRING$(79,"-")
3975 LPRINT :LPRINT "F.C.N.B.":LPRINT "CHECKING";:LPRINT TAB(25);USING "$##,###.##";CHEK;:LPRINT TAB(45);USING "$##,###.##";CHEK1;:LPRINT TAB(65);USING "$##,###.##";CHEK2
3980 LPRINT :LPRINT STRING$(79,"-")
3985 LPRINT :LPRINT "F.C.N.B.":LPRINT "SAVINGS";:LPRINT TAB(25);USING "$##,###.##";SAV;:LPRINT TAB(45);USING "$##,###.##";SAV1;:LPRINT TAB(65);USING "$##,###.##";SAV2
3990 LPRINT :LPRINT STRING$(79,"-"):RETURN
3995 FILE2$="B:DALY12"+RIGHT$(STR$(VAL(RIGHT$(DATE$,2))-1),2):RETURN
4000 FILE2$="B:DALY1"+RIGHT$(DATE$,2):RETURN
4005 FILE2$="B:DALY2"+RIGHT$(DATE$,2):RETURN
4010 FILE2$="B:DALY3"+RIGHT$(DATE$,2):RETURN
4015 FILE2$="B:DALY4"+RIGHT$(DATE$,2):RETURN
4020 FILE2$="B:DALY5"+RIGHT$(DATE$,2):RETURN
4025 FILE2$="B:DALY6"+RIGHT$(DATE$,2):RETURN
4030 FILE2$="B:DALY7"+RIGHT$(DATE$,2):RETURN
4035 FILE2$="B:DALY8"+RIGHT$(DATE$,2):RETURN
4040 FILE2$="B:DALY9"+RIGHT$(DATE$,2):RETURN
4045 FILE2$="B:DALY10"+RIGHT$(DATE$,2):RETURN
4050 FILE2$="B:DALY11"+RIGHT$(DATE$,2):RETURN
4055 FILE2$="B:DALY12"+RIGHT$(DATE$,2):RETURN
4060 FILE2$="B:DALY1"+RIGHT$(STR$(VAL(RIGHT$(DATE$,2))-1),2):RETURN
4065 FILE2$="B:DALY2"+RIGHT$(STR$(VAL(RIGHT$(DATE$,2))-1),2):RETURN
4070 FILE2$="B:DALY3"+RIGHT$(STR$(VAL(RIGHT$(DATE$,2))-1),2):RETURN
4075 FILE2$="B:DALY4"+RIGHT$(STR$(VAL(RIGHT$(DATE$,2))-1),2):RETURN
4080 FILE2$="B:DALY5"+RIGHT$(STR$(VAL(RIGHT$(DATE$,2))-1),2):RETURN
4085 FILE2$="B:DALY6"+RIGHT$(STR$(VAL(RIGHT$(DATE$,2))-1),2):RETURN
4090 FILE2$="B:DALY7"+RIGHT$(STR$(VAL(RIGHT$(DATE$,2))-1),2):RETURN
4095 FILE2$="B:DALY8"+RIGHT$(STR$(VAL(RIGHT$(DATE$,2))-1),2):RETURN
4100 FILE2$="B:DALY9"+RIGHT$(STR$(VAL(RIGHT$(DATE$,2))-1),2):RETURN
4105 FILE2$="B:DALY10"+RIGHT$(STR$(VAL(RIGHT$(DATE$,2))-1),2):RETURN
4110 FILE2$="B:DALY11"+RIGHT$(STR$(VAL(RIGHT$(DATE$,2))-1),2):RETURN
4115 FILE2$="B:DALY12"+RIGHT$(STR$(VAL(RIGHT$(DATE$,2))-1),2):RETURN
4120 INPUT "***DUMP FILES***   FOR WHICH MONTH'S INCOME (1-12)";MM:ON MM GOSUB 2890,2895,2900,2905,2910,2915,2920,2925,2930,2935,2940,2945
4125 LPRINT "DUMP OF ";FILE1$;" ON ";TODAY$:LPRINT STRING$(79,"="):LPRINT "DATE";TAB(15);"PAYMENT AMT";TAB(30);"SOURCE";TAB(45);"PREVIOUS BALANCE":LPRINT STRING$(79,"-")
4130 OPEN FILE1$ FOR INPUT AS #1
4135 WHILE NOT EOF(1)
4140 INPUT #1,DAY$:INPUT #1,PAID:INPUT #1,SOURCE:INPUT #1,PB
4145 LPRINT DAY$;TAB(15);USING "$####.##";PAID;:LPRINT TAB(30);SOURCE;TAB(45);USING "$####.##";PB
4150 COUNT=COUNT+1
4155 WEND
4160 LPRINT STRING$(79,"-"):LPRINT "TOTAL RECORDS IN FILE:";COUNT:COUNT=0
4165 RETURN
4170 INPUT "BE SURE EXPENSE/INCOME DATA DISK IS IN DRIVE B.  STRIKE ENTER";X
4175 CLS:OPEN "B:CHEK" FOR INPUT AS 1:INPUT #1,CHEK:CLOSE
4180 PRINT "CURRENT AMOUNT SHOWN IN CHECKING ACCOUNT IS:";USING "$###,###.##";CHEK
4185 INPUT "IF AMOUNT IS CORRECT STRIKE ENTER ELSE KEY CORRECT FIGURE";CF:IF CF>0 THEN CHEK=CF
4190 OPEN "B:CHEK" FOR OUTPUT AS #1:PRINT #1,CHEK:CLOSE:RETURN
4195 INPUT "BE SURE EXPENSE/INCOME DATA DISK IS IN DRIVE B.  STRIKE ENTER";X
4200 CLS:OPEN "B:SAV" FOR INPUT AS #1:INPUT #1,SAV:CLOSE
4205 PRINT "CURRENT AMOUNT SHOWN IN SAVINGS ACCOUNT IS:";USING "$###,###.##";SAV
4210 INPUT "IF AMOUNT IS CORRECT STRIKE ENTER ELSE KEY PROPER AMOUNT. TO ZERO KEY 99999";CF:IF CF>0 THEN SAV=CF
4215 OPEN "B:SAV" FOR OUTPUT AS #1:IF SAV=99999! THEN PRINT #1,0: IF SAV<99999! THEN PRINT #1,SAV:CLOSE:RETURN
4220 IF SAV<99999! THEN PRINT #1, SAV
4225 CLOSE:RETURN
4230 COUNT=0:CLS:INPUT "*** DUMP DAILY REPORT FILE--FOR WHICH MONTH (1-12)";MONTH:ON MONTH GOSUB 4000,4005,4010,4015,4020,4025,4030,4035,4040,4045,4050,4055
4235 LPRINT CHR$(12):LPRINT TAB(31);"OCCU";TAB(37);"VAC";TAB(42);"DELI";TAB(48);"DEL.";TAB(59);"CHECK.";TAB(70);"SAVINGS":LPRINT "DATE";TAB(11);"RECEIPTS";TAB(21);"REC.T.D.";TAB(31);"PIED";TAB(37);"ANT";TAB(42);"QUENT";TAB(48);"REC.";TAB(59);"ACCT";
4240 LPRINT TAB(70);"ACCT":LPRINT STRING$(79,"-")
4245 OPEN FILE2$ FOR INPUT AS #1
4250 WHILE NOT EOF(1)
4255 INPUT #1,RE:INPUT #1,RTD:INPUT #1,UR:INPUT #1,VACANT:INPUT #1,DELINQUENT:INPUT #1,DR:INPUT #1,TODA$:INPUT #1,CHEK:INPUT #1,SAV
4260 LPRINT TODA$;TAB(11);USING "#,###.##";RE;:LPRINT TAB(21);USING "##,###.##";RTD;:LPRINT TAB(32);UR;TAB(37);VACANT;TAB(42);DELINQUENT;TAB(48);USING "##,###.##";DR;:LPRINT TAB(59);USING "##,###.##.";CHEK;:LPRINT TAB(70);USING "##,###.##";SAV
4265 COUNT=COUNT+1
4270 WEND
4275 LPRINT STRING$(79,"-"):LPRINT "RECORDS IN FILE:";COUNT:LPRINT CHR$(12)
4280 RETURN
4285 CLS: PRINT "CORRECT RENTAL PAYMENT":INPUT "IN WHICH MONTH WAS THE PAYMENT MADE (1-12)";MONTH:ON MONTH GOSUB 2890,2895,2900,2905,2910,2915,2920,2925,2930,2935,2940,2945
4290 INPUT "WHAT DATE WAS THE PAYMENT MADE";CMD$:INPUT "WHAT WAS THE PAYMENT SOURCE";CMS
4295 OPEN FILE1$ FOR INPUT AS 1:OPEN "B:WORK" FOR OUTPUT AS 2
4300 WHILE NOT EOF(1)
4305 INPUT #1,DAY$:INPUT #1,PAID:INPUT #1,SOURCE:INPUT #1,PB
4310 IF CMS=SOURCE AND CMD$=DAY$ THEN GOSUB 4330
4315 PRINT #2,DAY$:PRINT #2,PAID:PRINT #2,SOURCE:PRINT #2,PB
4320 WEND
4325 CLOSE:KILL FILE1$:NAME "B:WORK" AS FILE1$:RETURN
4330 PRINT "1. DATE:";DAY$;TAB(40);"2.AMOUNT PAID:";USING "$####.##";PAID:PRINT "3. SOURCE:"; SOURCE: PRINT "(1-208=RENT  999=SUPPORT SALES  998=INTEREST INCOME":PRINT "997=PROPERTY SALES   995=PAST DUE-VACATED)"
4335 PRINT:PRINT "4. PREVIOUS BALANCE:";PB;TAB(40);"5. RECORD CORRECT"
4340 INPUT "YOUR CHOICE TO CHANGE IS:";CHANGE
4345 ON CHANGE GOTO 4355,4360,4365,4370,4375
4350 GOTO 4330
4355 INPUT "CORRECT DATE IS:";DAY$:GOTO 4330
4360 INPUT "CORRECT AMOUNT IS:";PAID:GOTO 4330
4365 INPUT "CORRECT SOURCE # IS:";SOURCE:GOTO 4330
4370 INPUT "CORRECT PREVIOUS BALANCE:";PB:GOTO 4330
4375 RETURN
4380 'ROUTINE EDITS DAILY REPORT FILE
4385 CLS:INPUT "*** EDIT DAILY REPORT FILE   FOR WHICH MONTH (1-12)";MONTH:INPUT "ENTER FULL DATE FOR THE RECORD";CM$
4390 ON MONTH GOSUB 4000,4005,4010,4015,4020,4025,4030,4035,4040,4040,4045,4050,4055
4395 OPEN FILE2$ FOR INPUT AS #1:OPEN "B:WORK" FOR OUTPUT AS #2
4400 WHILE NOT EOF(1)
4405 INPUT #1,RE:INPUT #1,RTD:INPUT #1,UR:INPUT #1,VACANT:INPUT #1,DELINQUENT:INPUT #1,DR:INPUT #1,TD$:INPUT #1,CHEK:INPUT #1,SAV
4410 IF CM$=TD$ THEN GOSUB 4435
4415 IF TD$="" THEN 4425
4420 PRINT #2,RE:PRINT #2,RTD:PRINT #2,UR:PRINT #2,VACANT:PRINT #2,DELINQUENT:PRINT #2,DR:PRINT #2,TD$:PRINT #2,CHEK:PRINT #2,SAV
4425 WEND
4430 CLOSE:KILL FILE2$:NAME "B:WORK" AS FILE2$:RETURN
4435 CLS:PRINT "YOUR CHOICE IS:":PRINT "1.DAY'S RECEIPTS:";TAB(30);USING "$####.##";RE:PRINT "2. RECEIPTS TO DATE:";TAB(30);USING "$##,###.##";RTD
4440 PRINT "3. UNITS RENTED:";TAB(30);UR:PRINT "4. VACANT UNITS:";TAB(30);VACANT:PRINT "5. DELINQUENT UNITS:";TAB(30);DELINQUENT:PRINT "6. DELINQUENT RECEIVABLES:";TAB(30);USING "$##,###.##";DR
4445 PRINT "7.DATE:";TAB(30);TD$:PRINT "8. CHECKING BALANCE:";TAB(30);USING "$##,###.##";CHEK:PRINT "9. SAVINGS BALANCE:";TAB(30);USING "$##,###.##";SAV
4450 PRINT "10. RECORD CORRECT":PRINT "11. DELETE THIS RECORD":PRINT :INPUT "YOUR CHOICE IS:";CHOICE:ON CHOICE GOTO 4465,4470,4475,4480,4485,4490,4495,4500,4505,4460,4510
4455 GOTO 4435
4460 RETURN
4465 INPUT "RECEIPTS:";RE:GOTO 4435
4470 INPUT "RECEIPTS TO DATE:";RTD:GOTO 4435
4475 INPUT "UNITS RENTED:";UR:GOTO 4435
4480 INPUT "VACANCIES:";VACANT:GOTO 4435
4485 INPUT "DELINQUENT UNITS:";DELINQUENT:GOTO 4435
4490 INPUT "DELINQUENT RECEIVABLES:";DR:GOTO 4435
4495 INPUT "DATE:";TD$:GOTO 4435
4500 INPUT "CHECKING BALANCE:";CHEK:GOTO 4435
4505 INPUT "SAVINGS BALANCE:";SAV:GOTO 4435
4510 RE=0:RTD=0:UR=0:VACANT=0:DELINQUENT=0:DR=0:TD$="":CHEK=0:SAV=0:GOTO 4460
4515 INPUT "CREATE NAME AND ADDRESS FILES (IF STARTING UP FOR FIRST TIME ANSWER Y-(Y/N)";ASK$
4520 IF LEFT$(ASK$,1)="Y" OR LEFT$(ASK$,1)="y" THEN GOSUB 315
4525 PRINT "CREATE OTHER FILES FOR COMING YEAR":FILES "B:":PRINT "IF THE AMOUNT OF SPACE INDICATED AT THE BOTTOM ":PRINT "OF THE DIRECTORY LISTING ABOVE IS LESS THAN 100,000 BYTES"
4530 PRINT "PLACE A FRESHLY FORMATTED, PROPERLY LABELLED DISK IN DRIVE B...":PRINT "HIT `P' TO PROCEED, ANY OTHER KEY ABORTS PROCEDURE"
4535 A$=INKEY$:IF A$="" THEN 4535
4540 IF A$="p" OR A$="P" THEN 4545 ELSE 4580
4545 INPUT "FOR WHAT CALENDAR YEAR (19XX) WILL FILES BE CREATED";YEAR$:DATE$=LEFT$(DATE$,6)+YEAR$:OPEN "B:CHEK" FOR OUTPUT AS #1:PRINT #1,1:CLOSE
4550 FOR A=1 TO 12
4555 ON A GOSUB 2890,2895,2900,2905,2910,2915,2920,2925,2930,2935,2940,2945
4560 OPEN FILE$ FOR OUTPUT AS #1:OPEN FILE1$ FOR OUTPUT AS #2:FILE2$="B:DALY"+RIGHT$(STR$(A),1)+RIGHT$(YEAR$,2):OPEN FILE2$ FOR OUTPUT AS #3:CLOSE
4565 NEXT A
4570 PRINT "BE SURE TO COPY ALSO TO THIS DISK THESE FILES: B:DECEXX, B:DECEXPXX AND":PRINT "B:DALY12XX...WHERE `XX' IS THE CURRENT YEAR NUMBER.  ":PRINT "THESE FILES MUST BE COPIED BEFORE DOING ANY DAILY REPORTS AFTER DEC. 31 OF THE CURRENT YEAR"
4575 DATE$=TODAY$:PRINT :PRINT :INPUT "STRIKE ENTER KEY TO CONTINUE";X
4580 RETURN
4585 ' SUBROUTINE SETS DATES FOR SEARCHES
4590 CM1$=RIGHT$(CM$,2)+"/"+LEFT$(CM$,5)
4595 DUE1$=RIGHT$(DUE$,2)+"/"+LEFT$(DUE$,5):RETURN
4600 LPRINT STRING$(50,"=")
4605 LPRINT "ACCT";TAB(10);"ITEM";TAB(40);"AMOUNT":LPRINT STRING$(50,"=")
4610 LPRINT "1530";TAB(10);"EQUIPMENT";TAB(40);USING "$##,###.##";EQUIP:LPRINT "5010";TAB(10);"SALARIES";TAB(40);USING "$##,###.##";SALARY:LPRINT "5020";TAB(10);"REPAIRS";TAB(40);USING "$##,###.##";REPAIRS
4615 LPRINT "5030";TAB(10);"MAINTENANCE/CLEANING";TAB(40);USING "$##,###.##";MNT:LPRINT "5040";TAB(10);"PEST CONTROL";TAB(40);USING "$##,###.##";PEST:LPRINT "5050";TAB(10);"UTILITIES";TAB(40);USING "$##,###.##";UTILITIES
4620 LPRINT "5060";TAB(10);"TELEPHONE";TAB(40);USING "$##,###.##";PHONE:LPRINT "5070";TAB(10);"INSURANCE";TAB(40);USING "$##,###.##";INS:LPRINT "5080";TAB(10);"POSTAGE";TAB(40);USING "$##,###.##";POSTAGE
4625 LPRINT "5090";TAB(10);"PAYROLL TAXES";TAB(40);USING "$##,###.##";PAYTAX:LPRINT "5100";TAB(10);"ADVALOREM & GENERAL TAXES";TAB(40);USING "$##,###.##";PROPTAX:LPRINT "5110";TAB(10);"ACCOUNTING AND LEGAL";TAB(40);USING "$##,###.##";ACCOUNT
4630 LPRINT "5120";TAB(10);"DUES/SUBSCRIPTIONS";TAB(40);USING "$##,###.##";DUESUB
4635 LPRINT "5130";TAB(10);"RETURNED CHECKS";TAB(40);USING "$##,###.##";RETCHECK
4640 LPRINT "5140";TAB(10);"ADVERTISING";TAB(40);USING "$##,###.##";NOTUSE:LPRINT "5150";TAB(10);"TRAVEL";TAB(40);USING "$##,###.##";TRAVEL
4645 LPRINT "5160";TAB(10);"MISCELLANEOUS";TAB(40);USING "$##,###.##";MISC:LPRINT "5300";TAB(10);"DEPRECIATION";TAB(40);USING "$##,###.##";DEP:LPRINT "    ";TAB(10);"INTEREST EXPENSES";TAB(40);USING "$##,###.##";INTEXP
4650 LPRINT STRING$(50,"="):LPRINT "TOTAL EXPENSES FOR REPORTING PERIOD:   ";USING "$###,###.##";TOTALL:INPUT "STRIKE ENTER TO CONTINUE";X
4655 SALARY=0:UTILITIES=0:PHONE=0:PEST=0:TRAVEL=0:NOTUSE=0:ACCOUNT=0:MISC=0:RETCHECK=0:PROPTAX=0:INTEXP=0:ADV=0:DEP=0:DUESUB=0:POSTAGE=0:INS=0:MNT=0:REPAIRS=0:PAYTAX=0:EQUIP=0:TOTALL=0:RETURN
6500 CLS
6510 PRINT "This program was prepared for use as a shareware product."
6520 PRINT "Copy and distribute it as freely as you like, to whomever"
6530 PRINT "you like.  If you find it of any use, please send a check or"
6540 PRINT "money order for $25.00 to:":PRINT
6550 PRINT "          Jess Hillman"
6560 PRINT "          P.O. Box 642"
6570 PRINT "          Columbus, Ms 39703":PRINT
6590 PRINT "Please bear in mind this is a shortened version of a longer"
6600 PRINT "program.  If you would like to have the lengthier, more "
6610 PRINT "complete version, which has been running successfully at my"
6620 PRINT "oldest site for over three years now, please make the check "
6630 PRINT "or money order out to me for $50.00.  You will receive the "
6640 PRINT "latest version."
6650 PRINT :PRINT :PRINT "Thank you for supporting this product."
6660 PRINT :PRINT :INPUT "Strike the Enter key";X
6670 RETURN
```
{% endraw %}

## MINI.DOC

{% raw %}
```




             THE MINI-MINDER MANUAL
         
             Jess Hillman
             P.O. Box 642
             Columbus, MS  39703
             1-601-356-4966

         
         WHAT IS IT?

         This program is a simple rental property management system, 
         designed to track information such as size (or other 
         description), rate, various tenant data, payment records, and 
         expense of operation on about 400 units.  It will also 
         perform some other tasks, such as producing mailing labels in 
         record sequence and billing tenants.  

         Mini-Minder was written specifically for use by miniwarehouse 
         or locker rental operators, but it will take little 
         imagination to adapt its fixed format to practically any  
         rental property scheme.

         To run this program you will need an IBM PC or compatible 
         system with 128K, GW BASIC or BASICA, and two disk drives.  
         Although I have run this program successfully on a PCJr and 
         another system with only disk drive, it is not practical for 
         the impatient--you will be swapping disks often.  The printer 
         of your choice is a given.

         The original version of this program adds some reporting 
         functions, plus the ability to generate past due letters and 
         notices of sale of property letters. These are generally site 
         specific so I did not include them here--however, anyone 
         purchasing this more advanced version can include with their 
         order and $50.00 check the text they would like to use for 
         these letters and I will customize the program for them.  I 
         will also throw in one custom report function per order.  
         Simply mail your money, appropriate data and the report 
         output format you would like to follow to the address above.
         For another $25.00 above each order, I will add or delete up 
         to five data fields, and/or change any of the data fields in 
         the basic format to suit a specific customer.

         That's a lot of customizing for $75.00 grand total, although 
         I honestly believe anyone can take the program as is and run 
         successfully.  

         For any programmers out there, I do have some GOTOs in this 
         program and if they offend you...sorry.  I just couldn't 
         resist the clarity of GO TO for some screen edits.  And if 
         any of you want to come to Mississippi and buy me a beer and 
         some catfish and hushpuppies, I'll be glad to explain EXACTLY 
         why the program is structured the way it is.  I haven't seen 
         very many interpreted programs around that took up 50K-plus 
         of code.  The more advanced version mentioned above, when 
         running, leaves a hair over 700 bytes of the 64K BASICA 
         recognizes free, so you can appreciate my warning that 
         attempting to follow the code around is not for the 
         fainthearted.  The program does work, and I will cheerfully 
         patch any serious bugs.  

         
         THE FILES AND WHAT THEY DO...

         There are only two basic programs included on your disk: 
         MINI.BAS and WHLABELS.BAS.  MINI contains the main program 
         while WHLABELS is CHAINed from the main menu to produce 
         mailing labels from your database.

         There is a mandatory option on the main menu that you must 
         take on startup that creates all your data files for you.  
         These files include:

                UNITS      (These 3 random access files contain basic
                UNITS1      name/address type data on your tenants. 
                UNITS2      Access is by unit number only.)

                NUMUNITS    (Contains 1 record--how many units you 
                             have for these data files)

                B:JANUXX-B:DECEXX   (Records of income received and 
                                       its source)

                B:JANEXPXX-B:DECEXPXX  (Expense record record data)

                B:DALY1XX-B:DALY12XX   (Daily report records by month)
                                        NOTE: XX = Current Year

         The three random access files handle the 362-byte record that 
         is created for each unit.  I decided against setting switches 
         and maintaining one file because of interpreted BASIC's 65K 
         memory limit.  Setting switches would limit each file to 
         about 180 units, and for most miniwarehouse and locker rental 
         operations that is simply not sufficient--so extra coding 
         would have been required anyway.  These three files, even at 
         maximum size (somewhere around 450 units), take up only about 
         half the space in a disk, so you could combine them and set 
         up your system with DOS, BASICA, both WHLABELS.BAS and 
         MINI.BAS on Drive A.
         
         All other files are sequential, and there are provisions for 
         editing records in each of the income, expense and daily 
         report files.  All the sequential records are kept in drive 
         B: and judging from past experience it should be possible to 
         keep two years' worth of records on a 250-unit operation 
         quite easily on a 360K disk.  

         
         
         GETTING STARTED...

         During this discussion, which doubles as brief tutorial, I am 
         going to assume you will have your programs and DOS on one 
         disk and the UNITS files and other files on two other disks.

         Please follow these steps:

         1. After booting your system, with the appropriate DOS/BASICA 
         disk in drive A, place the disk you have received in Drive B 
         and, from the DOS A> prompt, type:
                COPY B:*.*
                and strike the ENTER key.
         WARNING: This step will erase any existing AUTOEXEC.BAT files 
         you have on your DOS disk.

         2. Press Control-ALT-Delete to reboot the system.  This will 
         run a documentation program which prints the manual, creates 
         the new AUTOEXEC.BAT files and starts the program so you may 
         create all your data files and begin using the system.

         3. Place your original disk in a safe place and make backup 
         copies of your program disks and both data disks.  I 
         recommend at least two backup copies.

         
         ONCE IT'S RUNNING...

         After the initial announcement screen, you will see a prompt 
         asking you to fill in the date.  If you strike the ENTER key, 
         the system will show you the current system date and plug in 
         that value for the program.  If the date is not correct, the 
         system offers you a chance to key in the date of your choice, 
         which is then established as the current system date.

         Next, you will be asked to remove the program disk and place 
         the name and address data disk in Drive A.  When you strike 
         any key next, the main menu appears on the screen.  Your 
         choices from the menu are:

                1. ADD NEW TENANT
                2. EDIT CURRENT TENANT INFORMATION
                3. GO TO REPORTS MENU
                4. ENTER RENTAL PAYMENTS/OTHER INCOME
                5. GO TO BILLING MENU
                6. GO TO EXPENSE MENU
                7. EDIT INCOME RECORDS
                8. CHECKING ACCOUNT REVIEW
                9. EDIT DAILY REPORTS
                10. CREATE FILES FOR NEW CALENDAR YEAR
                11. DO LABELS
                12. END SESSION

         Since you are starting up the system for the first time, and 
         on the first business day of each calendar year for as long 
         you use the program, take option 10.  Trying to run the system 
         without doing this step will result in program errors.  When
         you take it, the system responds: 

         CREATE NAME AND ADDRESS FILES (IF STARTING UP FOR FIRST TIME 
         ANSWER Y-(y/n)?

         Key in a Y and strike the ENTER key.

         PLACE BLANK FORMATTED DISK IN DRIVE A AND STRIKE ENTER?
         ENTER NUMBER OF UNITS FOR THIS FILE?

         These two prompts allow you to get the proper disk in drive A 
         for the name and address files, and also to establish how 
         many units you are going to be using from that point on 
         whenever you run the program. UNDER NO CIRCUMSTANCES DO I 
         RECOMMEND KEYING ANY NUMBER HIGHER THAN 450.  Remember, you 
         are dealing with BASICA and its 65K limit here.

         Once you key in the appropriate number of units, the system 
         will create on the Drive A disk the files NUMUNITS, UNITS,
         UNITS1, and UNITS2.  Depending on the number you key, it 
         could take several minutes.  After it is through, it will 
         repeat the process for the other data files which must be 
         kept on Drive B.  The difference is you will be asked to key 
         in the calendar year for which the files will be created, and 
         you will be cautioned to make certain the disk on which the 
         new files are created contains the files for December of the 
         previous year (necessary for daily report generation).

         
         THE REST OF THE MAIN MENU...

         You are now ready to begin working the menus in this program 
         as you will during daily operation.  So, lets take the other
         options one at a time.

         1. ADD NEW TENANT.   Simply answer the prompts.  For each one 
         you will be filling in a data field.  Here are the prompts 
         and the maximum characters each will hold in parentheses:
                UNIT NO.?(4)
                UNIT SIZE? (5)
                MONTHLY RENTAL? (7)
                EXPECTED LENGTH OF RENTAL?(8)
                TENANT'S NAME?(30)
                SPOUSE'S NAME(30)
                STREET ADDRESS #1? (30)
                STREET ADDRESS #2? (30)
                CITY? (20)
                STATE? (2)
                ZIP CODE? (10)
                PHONE NO.? (10)
                EMPLOYED BY? (30)
                WORK PHONE? (10)
                DRIVERS LICENSE #? (30)
                SPOUSE'S EMPLOYER? (30)
                SPOUSE'S WORK PHONE? (10)
                DATE PAYMENT DUE? (8)
                CURRENT BALANCE $? (8)
                DATE LAST PAID? (8)
                IS UNIT PADLOCKED? (1)
                TENANT'S LOCK CUT? (1)
                NAME OF OTHER CONTACT, ETC.? (40)

         After filling in these fields with the appropriate 
         information you will be presented with a straightforward edit 
         screen that numbers each field in allows you to key in the 
         number of the field and then type in the correction needed.
         Key in a "24" when all editing is done.

         2. EDIT CURRENT TENANT INFORMATION.  Use this option to 
         change previously-entered data in case a tenant moves, or 
         changes jobs or gets a divorce, or whatever... You will be 
         asked to key in the appropriate unit number and from that 
         point you will see the same edit screen you used when the 
         information was first keyed.

         3. GO TO REPORTS MENU. By selecting this option you go to the 
         reports menu, where, by selection, you can: 
                1. Do Daily Reports...this option from the reports 
                   menu gives you a vacancy report and optionally, a
                   second listing of all units where you as landlord
                   have padlocked or otherwise sequestered the 
                   contents of a unit because of nonpayment of rent.
                   There is also a summary report issued following
                   these two reports that recaps receivables to date
                   and other data such as number of units rented and
                   the current state of the property checking account.
                2. List All Outstanding Units...select this report any
                   time to find out which tenants still owe you money.
                   Right off the bat the program asks if you want 
                   addresses printed.  If you do answer Y and complete
                   address data will be included, otherwise you will
                   receive the tenant's name only.
                3. Current Status Of A Single Unit...You'll be asked 
                   if you want hardcopy and the unit number.  What you 
                   will see onscreen and on paper will look similar to
                   your record edit screen from option 2 above.
                4. List Status Of All Units...This summary asks if you 
                   want addresses and prompts for a Y/N answer.  It 
                   prints unit number, tenant name, current balance 
                   whether or not the unit is padlocked.
                5. All these options do plain vanilla reports, Option
                6. 5 is an aging analysis, and the remainder offer 
                7. predictable file dumps for income, expenses and 
                8. daily reports.  In all these reports you will be
                9. prompted for a month number.

         4. ENTER RENTAL PAYMENTS/OTHER INCOME. First off the bat, 
         answer the computer's question by telling it how many 
         transactions you will be keying.  At the prompt, type in the 
         complete month name in which the income was received.  Then 
         you will be asked in turn the amount paid to you and the
         source.  If it is straight rent, key the unit number, else 
         pick one of the other listed codes.  You will be given a 
         couple of chances to correct any keyboard errors before the 
         transactions are applied to the name/address file and stored 
         in the permanent files.  Pay attention to the keyboard 
         prompts.
         
         5. GO TO BILLING MENU.  Once you move into this menu, you 
         have four main functions available.
                1. Print Trial Balance...a simple report that shows 
                   you what the new balance for each unit will be 
                   without changing any files.
                2. Post Billing Information and Produce Bills...
                   This option increments the current balance field
                   by the amount shown in the rate field on all units,
                   then comes back prints the bills, assuming that you
                   use typewriter paper-sized continuous form 
                   letterhead.  
                3. Do Aging Analysis...Exactly the same as the reports
                   menu option.
                4. Produce Bill On Single Unit...I recommend running 
                   this option prior to option two, since it will give
                   you a chance to align your forms.

         6. GO TO EXPENSE MENU...Options off this menu are simple.
                1. Enter Operating Expenses...Keyboard activity here 
                   is similar to the way you enter in income payments.
                   You get plenty of edit screens and a mandatory 
                   printout of all transactions entered.
                2. Edit Expense Files...Just in case you goofed and 
                   didn't catch it.
                3. Produce YTD Expense Summary...I probably should 
                   have put this on the reports menu.  There is some
                   duplication of function between menus, as you
                   may have noticed, but not a whole lot.
                4. Dump Expense Data For Specific Month...Well, maybe
                   more than meets the eye.

         7.  EDIT INCOME RECORDS...
         9.  EDIT DAILY REPORTS...
                Both these options were included to allow a chance to 
                edit these files after permanent storage had taken 
                place.  Before using ANY edit feature of the program,
                I suggest you dump the file so you will know exactly
                which record needs editing.
         
         8.  CHECKING ACCOUNT REVIEW...No biggie here, this option 
         just moves the single record in B:Chek out of the file so 
         that it can be manually corrected if need be, or simply to
         double check the amount.
           









          
         


```
{% endraw %}

## WHLABELS.BAS

{% raw %}
```bas
90 INPUT "PLACE NAME AND ADDRESS DISK BACK IN DRIVE A AND STRIKE ENTER";X
92 INPUT "PLACE LABELS IN PRINT AND STRIKE ENTER";X:LPRINT "NAME":LPRINT "ADDRESS 1":LPRINT "ADDRESS 2":LPRINT "CITY,STATE,ZIP":LPRINT:LPRINT
93 INPUT "LABELS LINED UP";ASK$:IF LEFT$(ASK$,1)="y" OR LEFT$(ASK$,1)="Y" THEN 95 ELSE 92
95 GOSUB 170
97 INPUT "START AT UNIT #";STRT:INPUT "STOP AT UNIT #";STP
100 FOR U=STRT TO STP
105 GET #1,U
106 GET #2,U
107 GET #3,U
108 GOSUB 155
109 IF LEFT$(TENANT$,6)="VACANT" THEN 130
110 LPRINT TENANT$:LPRINT ADDR$:LPRINT ADDR1$
112 WHILE RIGHT$(CITY$,1)=" "
115 CITY$=LEFT$(CITY$,(LEN(CITY$)-1))
117 WEND
120 LPRINT CITY$;", ";STA$;"  ";ZIP$:LPRINT :LPRINT
125 NEXT U
127 INPUT "Do more labels (Y/N)";ASK$:IF LEFT$(ASK$,1)="Y" OR LEFT$(ASK$,1)="y" THEN 92
130 INPUT "PLACE PROGRAM DISK BACK IN DRIVE A AND STRIKE ENTER";X
132 CHAIN "MINI",47,ALL
133 END
135 LSET U$=UNIT$:LSET S$=SIZE$:LSET R$=MKS$(RATE)
140 LSET T$=TERM$:LSET TN$=TENANT$:LSET SP$=SPOUSE$:LSET XN$=ONAME$:LSET A$=ADDR$:LSET A1$=ADDR1$:LSET CI$=CITY$:LSET ST$=STA$:LSET ZP$=ZIP$:LSET PH$=PHONE$
145 LSET EP$=EMPLOY$:LSET WP$=WRKPH$:LSET DL$=LICENSE$:LSET SPE$=SPOUSEMP$:LSET SWP$=SPWRKPH$:LSET DD$=DUE$:LSET CURBL$=MKS$(OWE):LSET LPD$=LAST$:LSET PL$=PADLOCK$:LSET CT$=CUT$
150 RETURN
155 UNIT$=U$:SIZE$=S$:RATE=CVS(R$):TERM$=T$:TENANT$=TN$:SPOUSE$=SP$:ONAME$=XN$:ADDR$=A$:ADDR1$=A1$:CITY$=CI$:STA$=ST$:ZIP$=ZP$:PHONE$=PH$
160 EMPLOY$=EP$:WRKPH$=WP$:LICENSE$=DL$:SPOUSEMP$=SPE$:SPWRKPH$=SWP$:DUE$=DD$:OWE=CVS(CURBL$):LAST$=LPD$:PADLOCK$=PL$:CUT$=CT$
165 RETURN
170 CLOSE #1:CLOSE #2:CLOSE #3
175 OPEN "R",#1,"UNITS",126
180 FIELD #1, 4 AS U$,5 AS S$,7 AS R$,8 AS T$,30 AS TN$,30 AS SP$,40 AS XN$,1 AS PL$,1 AS CT$
185 OPEN "R",#2,"UNITS1",110
190 FIELD #2,30 AS A$,30 AS A1$,20 AS CI$,2 AS ST$,10 AS ZP$,10 AS PH$,8 AS LPD$
195 OPEN "R",#3,"UNITS2",126
200 FIELD #3,30 AS EP$,10 AS WP$,30 AS DL$,30 AS SPE$,10 AS SWP$,8 AS DD$,8 AS CURBL$
205 RETURN
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0961

     Volume in drive A has no label
     Directory of A:\

    MINI     BAS     64208   1-01-87   6:54a
    README             671   1-01-80   6:42a
    WHLABELS BAS      1966   1-01-87   6:54a
    DOC      BAS       740   1-01-87   6:57a
    MINI     DOC     16858   1-01-80   8:03a
    MENU     BAT       724  10-11-87  10:19a
    MANUAL   BAT       176  10-11-87  10:20a
    DATASHT  BAT       180  10-11-87  10:20a
    INSTALL  BAT       248  10-10-87  12:53p
    INVSORT  DOC     19179  10-11-87  10:40a
    DATASHT  ASC      3406  10-10-87  12:20p
    INVSORT  EXE     66744  10-13-87   8:59p
    INVSORT1 EXE     67016  10-13-87   9:01p
    #GE               2376   1-01-80   1:39a
    DISKLABL COM     12928  10-10-87   1:05p
    FILES961 TXT      2505  12-17-87   3:50p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1002   1-04-80   1:41a
           18 file(s)     260965 bytes
                           52224 bytes free
