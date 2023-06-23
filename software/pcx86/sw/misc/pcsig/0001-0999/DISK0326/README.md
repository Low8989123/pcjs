---
layout: page
title: "PC-SIG Diskette Library (Disk #326)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0326/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0326"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "PRINTER UTILITIES #2"

    A super collection of printer utilities for the popular Epson series,
    this one is especially good for the setup and applications of the Epson
    FX-80 printer.  You can get special effects, italics, doublestrike and
    compressed characters, print mailing labels and much more.
    
    Worthy of your attention: the DISKMASTER utility prints disk labels on
    5x1 7/16 inch label stock.  This size label just fits on the top of a
    standard 5 1/4 inch disk.  The program supports EPSON, IBM and OKIDATA
    printers with plug-n-play.  Many options are provided.  Also, for those
    of you into banners, SIDEWAYS and POSTER are certainly worth playing
    with.
    File Descriptions:
    
    BUZOFF   COM  Checks for printer.
    COLRVIEW EXE  Print & display text file in color.
    EMBEDDED BAS  Basic prog to demonstrate embedded print attributes.
    FASTPRT  COM  Resident speed up for PrtSc utility.
    FASTPRT  DOC  Documentation for FASTPRT.COM.
    FORMFEED COM  Set prnter to top of form from DOS, batch file, WordStar.
    FORMFEED DOC  Documentation for FORMFEED.COM.
    FSPOOL   COM  Resident prog to redirect parallel prnter output to disk.
    FSPOOL   DOC  Documentation for FSPOOL.COM.
    FXPR4    DOC  Epson FX-80 utility to change print font sizes & styles.
    FXPR4    EXE  Documentation for FXPR4.
    GRAF     COM  Print IBM PC graphics on bit-plot printers.
    GRAF     DOC  Documentation for GRAF.COM.
    JUST-LQ  EXE  Micro-justification file printer for EPSON LQ-1500.
    JUSTIFY  DOC  Documentation for JUSTIFY.EXE.
    JUSTIFY  EXE  Print justified copy on low-priced printers with graphics.
    LABEL    EXE  Prints on 5 line labels.
    P        COM  Powerful prnter utility - compress, double, italics, etc.
    PERFSKIP COM  IBM or MX-80 printer utility to skip over perforations.
    PERFSKIP DOC  Documentation for PERFSKIP.COM.
    PLOTTER  BAS  Basic program to plot various graphs.
    POSTER   BAS  Large poster maker. Puts your message on printer sideways.
    PRINTES1 BAS  Printer test returns printer speed char/sec lines/min.
    PRINTFIX COM  Possible fix for bad print - character/lines dropped.
    PRINTFIX DOC  Documentation for PRINTFIX.COM.
    PRTPAGE  DOC  Documentation for PRTPAGE.EXE.
    PRTPAGE  EXE  Print with pagination - spool to disk, line numbering.
    SCNMAP   BAS  Produces paper chart of 40 or 80 col screen Epson MX-80.
    SCNMAP   DOC  Documentation for SCNMAP.BAS.
    SETPRN   COM  Printer utility for IBM PC- set from DOS or batch file.
    SETPRN   DOC  Documentation for SETPRN.COM.
    SIDEWAYS EXE  Prints a disk file sideways on printer.
    SWPTR    COM  Swaps printer LPT1: with printer LPT2:.
    SWPTR    DOC  Documentation for SWPTR.COM
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## EMBEDDED.BAS

{% raw %}
```bas
10 '  SOURCE: CREATIVE COMPUTING [MAY 1982] page 198
20 '  AUTHOR: Will Fastie
30 '  EDITED BY David Reussow
100 ' PROGRAM TO DEMONSTRATE EMBEDDED PRINT ATTRIBUTES
110 ESC$ = CHR$(27)
120 CR = 13
130 NORMAL$ = "NORMAL PRINT"
140 DASHES$ = " -- "
150 NLEN = LEN(NORMAL$) + LEN(DASHES$)
160 X$ = "BOLD PRINT"
170 ' PRINT NORMAL TEXT, LEAVING SPACE FOR EMPHASIZED PART
180 LPRINT NORMAL$;DASHES$;SPC(LEN(X$));DASHES$;NORMAL$;
190 LPRINT CHR$(128+CR);     'COMMAND PRINTER TO PRINT, NO LINE ADVANCE
200 LPRINT ESC$;"E";         'TURN ON EMPHASIS
210 LPRINT SPC(NLEN);X$      'SPACE OVER TO HOLE, PRINT TEXT WHILE EMPHASIS ON
220                          'NOTE:  TAB WONT WORK ABOVE!
230 LPRINT ESC$;"F";         'TURN OFF EMPHASIS
240 LPRINT: LPRINT
250 X$ = "DOUBLE WIDTH"
260                          'DOUBLE WIDTH PRINTING IS EASIER!
270 LPRINT NORMAL$;DASHES$;CHR$(14);X$;CHR$(20);DASHES$;NORMAL$
280 END
```
{% endraw %}

## FASTPRT.DOC

{% raw %}
```
                                FASTPRT 2.0
                     (c) Copyright J. Craig Hill, 1982,1983


         INTRODUCTION

         FASTPRT is a speed-up utility for the PrtSc function on the
         IBM Personal Computer and IBM Personal Computer XT.

         For all printers, it allows you to terminate an active PrtSc
         operation early (if you've seen enough or changed your mind,
         for instance).

         For printers which don't have the foresight to ignore trailing
         blanks and empty lines, FASTPRT provides this capability for
         them. This look-ahead feature allows a screen with trailing
         blanks and blank lines to print in a fraction of the time it
         takes if all these extraneous blanks have to be "printed".

         It has been tested under DOS 1.00 through 2.0.

         COPYING AND SHARING

         The FASTPRT diskette is not copy protected.  You may make as
         many backup copies of it as you wish.

         You are encouraged to copy and share this product with your
         friends.  However, you may not charge a fee for copying or
         distributing this product without an express written
         aggreement with SUNBELT COMPUTING, 1274 N. Emory Place, NE,
         Atlanta, Ga. 30306.

         If you have received a copy of this product from a friend and
         plan to use it, your contribution will be appreciated.  The
         recommended contribution is $10 or 10 cents for every minute
         it  will  save  you  for the next 5 years, whichever is lower.
         Send your contribution to:

                                SUNBELT COMPUTING
                              1274 N. Emory Pl., NE
                               Atlanta, Ga. 30306


..page
..head03cFASTPRT
..formatvwform2.doc
         INSTALLATION

         To install FASTPRT manually, simply insert your FASTPRT
         diskette in the default drive and type FASTPRT.  FASTPRT
         becomes an extension to DOS and remains available until you
         turn off your machine or press Ctrl-Alt-Del.

         If you would like FASTPRT to be available whenever DOS is
         loaded, use the following procedure with all your system
         diskettes (i.e., any diskette(s) you might place in drive A
         before you start or restart DOS):

            1. Make sure you are in DOS command mode and the default
               drive is drive A (The prompt A> should be displayed on
               your screen).

            2. Insert your system diskette in drive A. (Be sure to
               remove the write protect tab before insertion.) If you
               have a 2 drive system, insert the FASTPRT diskette in
               drive B. If you have a single drive system, insert the
               system diskette whenever you are prompted to "insert
               diskette for drive A" and insert the FASTPRT diskette
               whenever you are prompted to "insert diskette for drive
               B".

            3. If your system diskette contains DOS 1.0 or 1.1, type
               in:

                        DIR AUTOEXEC.BAT

                  a. If the message "File not found" appears on the
                     screen, type in:

                        B:INSTALL AUTO A

                  b. Otherwise (i.e., AUTOEXEC.BAT appears as a valid
                     file), type in:

                        B:INSTALL ADD A

            4. If your system diskette contains DOS 2.0 or above, type
               in:

                        B:INSTALL TWO A


            5. If you start DOS 2.0 or above from a fixed disk, type
               in:

                        B:INSTALL TWO d

               where d is the correct drive designator for your system
               disk.

         FASTPRT will now be installed automagically whenever you start
         or restart DOS.
..page
         OPERATION

         Once FASTPRT is installed, you start copying your screen to
         the printer the same way you did before.  Just press the PrtSc
         key while holding down either the right or left shift key.

         If you want to stop printing before the entire screen has been
         printed, just press the same shift-PrtSc combination again.
         Printing will stop at the end of the line currently being
         printed.

         DOCUMENTATION

         A copy of the documentation for FASTPRT is located in the file
         FASTPRT.DOC on the FASTPRT diskette.  To print a copy press
         the PrtSc key while holding down the Ctrl key.  Then type in:

                                TYPE FASTPRT.DOC

         ORDERING

         Additional copies of FASTPRT may be ordered from SUNBELT
         COMPUTING for $10 plus $5 to cover the costs of the diskette
         and shipping.  In addition, as our time and resources permit,
         we will supply you with a copy of FASTPRT on a try-it-first,
         buy-it-if-you-find-it-useful basis if you send us a
         pre-formatted, single sided diskette and a self-addressed,
         stamped mailer.  Address all orders and inquiries to SUNBELT
         COMPUTING, 1274 N. Emory Place, NE, Atlanta, Ga. 30306.

         NOTE TO USERS OF THE GRAPHICS COMMAND UNDER DOS 2.0

         FASTPRT will work in conjunction with the GRAPHICS command
         that is available to users of DOS 2.0 and above.  FASTPRT will
         handle the Shift Prt-Sc function if your display is in text
         mode, and GRAPHICS will handle it if your display is in
         graphics mode.  Please note that the ability to terminate a
         Prt-Sc function prior to completion is not available when
         GRAPHICS is in control.

```
{% endraw %}

## FILES326.TXT

{% raw %}
```
Disk No  326
Program Title: EPSON PRINTER UTILITIES
PC-SIG version 2.1

A super collection of printer utilities for the popular Epson series,
this one especially good for the setup and applications of the Epson
FX-80 printer.  You can get special, italics, doublestrike and
compressed characters, print mailing labels and much more.

Worthy of your attention: the DISKMASTER utility prints disk labels on
5x1 7/16 inch label stock.  This size label just fits on the top of a
standard 5 1/4 inch disk.  The program supports EPSON, IBM and OKIDATA
printers with plug-n-play.  Many options are provided.  Also, for those
of you into banners, SIDEWAYS and POSTER are certainly worth playing
with.

Usage:  Epson Printer Utilities.

Special Requirements:  An Epson printer.

How to Start:  Type GO (press enter).

Suggested Registration:  $10.00 for FASTPRT, $25.00 for JUSTIFY, $10.00
for PRTPAGE.

File Descriptions:

BUZOFF   COM  Checks for printer
COLRVIEW EXE  Print & display text file in color
EMBEDDED BAS  Basic prog to demonstrate embedded print attributes
FASTPRT  COM  Resident speed up for PrtSc utility
FASTPRT  DOC  Documentation for FASTPRT.COM
FORMFEED COM  Set prnter to top of form from DOS, batch file, Wordstar, etc.
FORMFEED DOC  Documentation for FORMFEED.COM
FSPOOL   COM  Resident prog to redirect parallel prntr output to disk
FSPOOL   DOC  Documentation for FSPOOL.COM
FXPR4    DOC  Epson FX-80 utility to change print font sizes & styles
FXPR4    EXE  Documentation for FXPR4
GRAF     COM  print IBMPC graphics on bit-plot printers
GRAF     DOC  Documentation for GRAF.COM
JUST-LQ  EXE  Micro-justification file printer for EPSON LQ-1500
JUSTIFY  DOC  Documentation for JUSTIFY.EXE
JUSTIFY  EXE  Print justified copy on low priced printers with graphics cap.
LABEL    EXE  Prints  n 5 line labels
P        COM  Powerful prntr utility - compress, double, italics, etc. etc.
PERFSKIP COM  IBM or MX-80 printer utility to skip n lines over perforation
PERFSKIP DOC  Documentation for PERFSKIP.COM
PLOTTER  BAS  Basic prog to plot graphs - linear, parabolic, trig., comb.
POSTER   BAS  Large poster maker. Puts your message on printer sideways.
PRINTES1 BAS  Printer test returns printer speed char/sec lines/min
PRINTFIX COM  Possible fix for bad print - character/lines dropped
PRINTFIX DOC  Documentation for PRINTFIX.COM
PRTPAGE  DOC  Documentation for PRTPAGE.EXE
PRTPAGE  EXE  Print with pagination - spool to disk, line numbering, etc.
SCNMAP   BAS  produces paper chart of 40 or 80 col screen Epson MX-80
SCNMAP   DOC  Documentation for SCNMAP.BAS
SETPRN   COM  Printer utility for IBMPC- set prn param from DOS or batch
SETPRN   DOC  Documentation for SETPRN.COM
SIDEWAYS EXE  Prints a disk file sideways on printer
SWPTR    COM  Swaps printer LPT1: with printer LPT2:.
SWPTR    DOC  Documentation for SWPTR.COM

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## FORMFEED.DOC

{% raw %}
```

Use FORMFEED.COM to set printer to top of form from DOS, a batch file, WordStar,etc.

```
{% endraw %}

## FSPOOL.DOC

{% raw %}
```
                        SPOOL COMMAND DOCUMENTATION
 
The SPOOL command allows you to redirect output which would normally be sent to
a parallel printer and store it in a disk file. This might be useful if you
plan to later send the file over a modem to another computer for printing.
SPOOL is invoked as follows:
 
        SPOOL <filename>
 
Where <filename> is the file into which the print data is to be placed.  The
file need not exist, but if it does, it will be deleted and recreated. Once
SPOOL has been invoked for the first time the message:
 
        SPOOL INSTALLED
 
will appear and the command portion will exit, leaving behind a permanant
printer interrupt handler built-in to DOS.  Output directed to the printer will
be directed to the file until an error occurs or the disk containing the file
becomes full (in this case an error message will be displayed and the file is
closed).
 
At any time the user may stop the spooling process and redirect printer output
to the printer by typing:
 
        SPOOL
 
with no filename.  SPOOL may be restarted at any time again as described above
(but the permanent part remains resident even when it has been disabled).
 
SPOOL works with DOS 2.0 (other versions of DOS may work, but they have not
been tested).  It uses about 4K of memory once installed.  Because of a DOS
version dependent patch it is possible to use the PrtSc key with SPOOL but
this is sometimes a risky business!  SPOOL should work with most word
processors just fine, however.
 
This program is provided as is and no warrantee, expressed or implied, is
made as to its usefulness for any intended purpose or its reliability. The
author and the University of California are not liable for any loss resulting
from the use of this program.
 
                Don D. Worth
                UCLA/OAC
                1/11/84
 

```
{% endraw %}

## FXPR4.DOC

{% raw %}
```



==================================================
       FXPR4.DOC  08/22/83   T. E. McCormick
==================================================


   FXPR4 is a printer setup utility program for the
Epson FX-80 (160 cps) printer.	It is useful for
changing the character fonts, boldness, pitch,
vertical lines per inch, etc. quickly with a single
command line such as  FXPR4 RESET P12 LEFTM 5 SKIP.

   Gary Novosielski wrote PRINTER.C (c) 1982 for the
MX-80.	This program was derived from that one,  and
Gary's approach was simple extended to other features,
and some minor changes were made to convert it from
CP/M BDS C to IBM PC DOS 2.0 Lattice C.  Both authors
have copyrighted their versions, and sale or commercial
use is forbidden without the authors' consent in writing.

   The program is offered by the authors without charge
to individuals for their personal use only.

   If you have an MX with graftrax plus, you may
be able to use this utility for most functions.

   The purpose of this program is quickly set several
options with a single command from the system prompt.






	     PURPOSE OF THE PROGRAM:

	From a single command, several printer
option commands may be sent to the FX-80.

	The Epson printers have an extremely wide
range of software selectable print font sizes and
styles (called modes).	Line width, characters per
inch, lines per vertical inch, print intensity,
tab stops, style (pica, elite, italics, etc.),
left/right margin settings, and "global" commands
to perform several commonly used settings such as
for letter writing in pica, elite or proportional
can readily be set with a quick keyboard entry.

	It is clearly not convenient to go into
BASIC or any other indirect means of sending those
commands out the printer port.	This program gets
the job done with a single command.

   The Epxon FX-80 includes the "graftrak" option as
standard, and implements some new features in
addition to the 160 charater per second speed. Pin
addressing commands, and many advanced features are
not included in this program but you may be add them
since the source file is available.

   FXPR4 will compile under  Lattice C ver 1.03 and
IBM PC DOS version 2.0.

   Simply entering  FXPR4  will cause a menu
of options to be displayed.  These can be used as
parameters following  FXPR4  the next time it is
entered.


   That menu appears as:

FXPR4 for Epson FX  (c) Tom McCormick  05/01/83
      from PRINTER.C (c) 1982 G.P. Novosielski
FXPR4 <opt> [<opt>.....]   where <opt> may be:
					      
RESET	   QUIET       PITCH 10    PITCH 17	DOC
LPI3	   LPI4        LPI5	   LPI6 	DOC1
LPI8	   LPI10       LPI12	   PLINCH 1-22	DOC1S
WIDTH 80 [....or any value between 2 and 137 ]	DOC8
SKIP	   NOSKIP      EJECT	   TABS n n n	DOC8S
PROPOR	   DRAFT       TEXT		      
PICA	   ELITE       ITALIC	   LEFTM  n   
TINY	   TINYER      ROMAN	   RIGHTM n   
LTRITA	   LTRITB      LTRELI		      
EMPHAS	   CONDEN      ENLARG	   DOUBLE     
XEMPHA	   XCONDE      XENLAR	   XDOUBL     
Various pitches (CPI) and bold or very bold...
 P5	P6	      P10     P12     P17     
 P5B	P6B    P9B    P10B    P12B    P17B    
 P5VB	P6VB   P9VB   P10VB		      
					      
\n  Example: FXPR4 RESET LPI6 PITCH 10 ELITE  


There are more than 50 keyword options, and God knows how many combinations.
They have NOT all been tested !!  Be aware that the FX-80 treats various
combinations as toggles, or serially.  Some features have priorities
with regard to others, and some negate others.	The 150+ page manual has
several tables that will help, but you will have to experiment a little too.

It is a good idea to use RESET as your first keyword to "baseline" the
subsequent commands.  If you don't, you may simply be adding new parameters
to the previous mix of them.

The "RESET" command mentioned above will reset ALL modes to the power-on
configuration you have chosen via the DIP switches at installation.


	       FXPR4  PROGRAM OPTIONS:	ENTER ONE OR MORE

	CONDEN	Condensed print mode
	CONDEN ENLARG Condensed/enlarged mode at 6 characters per inch.
	DOC	Global: RESET LPI6 ELITE LEFTM 8 RIGHTM 95 DOUBLE
	DOC1	Global: RESET LPI6 ELITE LEFTM 8 RIGHTM 95 (single intensity)
	DOC1S	Global: RESET LPI6 ELITE LEFTM 8 RIGHTM 95 skips over perf
	DOC8	Global: RESET  LPI8 ELITE LEFTM 8 RIGHTM 95 eight lines per in
	DOC8S	Global: RESET  LPI8 ELITE LEFTM 8 RIGHTM 95 skips over perf
	DOUBLE	Double-strike mode: strikes each char twice to darken.
	DRAFT	Cancels any double-strike mode, or super/sub scripting.
	EJECT	Sends printer to top of next page.
	ELITE	Elite type style
	EMPHAS	Emphasized printing
	ENLARG	Large lettering
	ITALIC	Print in Italic style.
	LEFTM	LEFTM n   sets left  margin to n column position
	LPI	LPI n  (where n = 3 to 216) will cause the vertical
		spacing to be n/216 inches per line......
		    7 LPI = 31	  9 LPI = 24   11 LPI = 20.
	LPI3	Three  lines per inch vertical spacing
	LPI4	Four   lines per inch vertical spacing
	LPI5	Five   lines per inch vertical spacing
	LPI6	Six    lines per inch vertical spacing
	LPI8	Eight  lines per inch vertical spacing
	LPI10	Ten    lines per inch vertical spacing
	LPI12	Twelve lines per inch vertical spacing
	LTRELI	Global command for RESET ELITE	P12  WIDTH 132	Normal
	LTRITA	Global command for RESET ITALIC P12  WIDTH 132	Normal
	LTRITB	Global command for RESET ITALIC P12B WIDTH 132	Bold
	NOSKIP	The perforation will not be skipped over with blank lines.
	P5	Pitch 5  characters to an inch horizontally
	P5B	Pitch 5  and bold
	P5VB	Pitch 5  and very bold
	P6	Pitch 6  characters to an inch horizontally
	P6B	Pitch 6  and bold
	P6VB	Pitch 6  and very bold
	P9B	Pitch 9  and bold  (Note: there is no P9)
	P9VB	Pitch 9  and very bold
	P10	Pitch 10 and normal intensity
	P10B	Pitch 10 and bold
	P10VB	Pitch 10 and very bold
	P12	Pitch 12 and normal intensity
	P12B	Pitch 12 and bold
	P17	Pitch 17 and normal intensity
	P17B	Pitch 17 and bold
	PICA	Pica type style
	PITCH	Characters per inch:  PITCH 10	or  PITCH 17 are valid.
	PLINCH	Set page length in inches ( 1 - 22 ); PLINCH 11
	PROPOR	Proportional spacing of letters (horizontally).
	QUIET	Slow to 80 char per second (half speed) to quiet operation.
	RESET	Cause printer to return to power-on option settings.
	RIGHTM	RIGHTM n  sets right margin to n column position
	ROMAN	Print in Roman	style.
	SKIP	Skip over perforation specifying 6 lines.
	TABS	Sets horizontal tab positions:	TAB n n n
	TEXT	From original program.
	TINY	Subscript sized, 10 lines per inch,  93 lines per 11" page,
		skips over perf leaving one inch bottom margin.
		LEFTM / RIGHTM may be used after TINY.
	TINYER	Subscript sized, 12 lines per inch, 108 lines per 11" page,
		skips over perf leaving one inch bottom margin.
		LEFTM / RIGHTM may be used after TINYER.
	WIDTH	WIDTH 80  or  [..any value between 2 and 137 ].
	XCONDE	Cancels condensed mode.
	XDOUBL	Cancels double-strike mode.
	XEMPHA	Cancels emphasized mode.
	XENLAR	Cancels enlarged mode.


	The following print lines are useful in various combinations
	to test FXPR4x after your modifications.....................



LINETEST
	 1	   2	     3	       4	 5	   6	     7
12345678901234567890123456789012345678901234567890123456789012345678901234567890

+++++++++1+++++++++2+++++++++3+++++++++4+++++++++5+++++++++6+++++++++7++++++++++++++++++++++++96+++++++++++++++++++++120+++++++++132  137


ABCDE abcde @#$%&?




ABC abc @#$






XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
This is lllllower case. 1111111111
THIS IS UUUUUPPER CASE. 2222222222
IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW

All lines have same # characters..



=-=-=-=-=-=-=-=-=-= end of FXPR4.DOC =-=-=-=-=-=-=-=-=-=-=




        This disk copy was originally provided by "The Public Library",
        the software library of the Houston Area League of PC Users.
 
        Programs are available from the Public Library at $2 per disk
        on user-provided disks.  To get a listing of the disks in the
        Public Library, send a self-addressed, stamped envelope to

             Nelson Ford,  P.O.Box 61565,  Houston, TX 77208.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  Disk No 326  Epson printer utilities                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  To start any of the programs on this disk which have the extension EXE ║
║  or COM, type in the name of the program and press enter. For example,  ║
║  to start FASTPRT.COM, you would enter FASTPRT (press enter). To start  ║
║  the programs ending with the extension BAS, you must use a version of  ║
║  the BASIC language to run the program. Please consult your BASIC       ║
║  language manual for more specific commands for your system and version ║
║  of BASIC.                                                              ║
║  To print out the documentation on the programs type:                   ║
║                                                                         ║
║  copy *.doc prn (press enter)                                           ║
║                                                                         ║
║  Please note: if you bought this disk for the LABELING program called,  ║
║  LBL it has been updated do DMASTER.  The program no resides on disk    ║
║  number 709.                                                            ║
║                                                                         ║
║  Sorry for any inconvenience this may have caused you.                  ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## GRAF.DOC

{% raw %}
```
********************************************************************
*                 NEW IMPROVED -- GRAFTRAX.COM v3.1                *
********************************************************************

GRAF.HEX, and GRAF.ASM are for printing IBMPC graphics on bit-plot
printers.  The program as delivered works with EPSON GRAFTRAX (tm) and
IBM GRAPHICS(tm) printers, but can be modified to work with others, such
as the C.ITOH 8510a.

GRAF640 represents the latest version of the program.  It does everthing
the old one does and now does high-res. graphics much more clearly.
This version has some small changes, including some to insure
compatibility with future versions of DOS, but the main improvement is
correct handling of the high-resolution 640x200 graphics mode.  GRAFTRAX
originally was created to reproduce medium resolution color graphics.

GRAFTRAX.COM is created by running GRAF.HEX through a hex-converter
program and is run from DOS.  The program announces itself and will
remain a part of your system until reset or power down.  Once run, the
Shift+PrtSc keys will work as always with text on the screen, sending it
to the printer.  If you have graphics running on the screen and GRAFTRAX
in your printer, the screen can be sent to the printer in two ways.  A
small (5 1/4 x 3 1/4) print with the RIGHT-Shift+PrtSc keys, and LARGE
(almost a full 8 1/2 x 11 page) print with the LEFT- Shift+PrtSc keys.

CGRAF.BAS is a demo program showing how to call GRAFTRAX.COM from a
BASIC program.

GRAF.ASM is the source code for GRAFTRAX.COM.  With the IBM MACRO-
ASSEMBLER(tm) it will produce GRAFTRAX.EXE.  Conditional compilation
allows easy assembly for the C.ITOH 8510a or other printers with bit-
plot capabilties.  The first part of the listing explains the history of
the program and explains how to assemble for other printers.

Please remember that GRAF.HEX must be converted to .COM format by a
program like HEXCONV.BAS, HC.COM, or another that works in a similar
manner.  Don't try to run GRAF.HEX by itself as you will be
disappointed.

     GRAFTRAX.COM works just fine with DOS 2.0.

     Program by:
Marty Smith            COMPUSERVE 72155,1214
310 Cinnamon Oak Lane  (713) 661-1241 (Office)
Houston, Texas  77079  (713) 464-6737 (Home)
4/21/84

```
{% endraw %}

## JUSTIFY.DOC

{% raw %}
```

                            COMFAX JUSTIFY PROGRAM 

                          Copyright (c) 1984 ComFax 

     This program gives many popular, low-priced printers the capability of
producing justified copy (i.e., flush left AND RIGHT margins), a feature
normally found only on expensive printers.  While many justification programs
add space only between words -- and then only in increments of 1/10 inch --
ours adds space evenly between words AND between LETTERS in increments of 1/120
inch!  This maintains the normal word-space to letter-space ratio regardless of
the total amount of space added in each line.  The result is a professional
appearing document with no awkward gaps between words.

     This program was written for use on the IBM-PC or any compatible unit.  It
also requires a printer with graphics capability.  The following printers are
supported:  IBM, EPSON FX80, EPSON RX80, EPSON MX80, STAR MICRONICS GEMINI 10X,
STAR MICRONICS GEMINI 15X, STAR MICRONICS DELTA 10, AND STAR MICRONICS DELTA
15.

     When creating a file that you may want to print with this program, a line
will not be justified if either of the following conditions is true:

     1.  The first seven columns after the left margin are blank.

     2.  The last eighteen columns before the right margin are blank.

     Also, if you will want the printer to skip to a new page before the
current one is full, simply key in a form-feed (ALT-1-2) in any position of a
line.  This character position will not apprear in the printed line, and the
next character will overlay this position. However, the printer will skip to a
new page after this line, and the line counter will be reset to zero.

To execute this program:

     1.  Key 'JUSTIFY`
     2.  Hit Enter
     3.  Answer the prompts.  To use a default (enclosed in '<>'), simply hit
Enter.  

     The margins MUST be set the same as when you keyed the document.
Otherwise, the program will not work correctly. If you want to change the
margins within your document, key the instructions below into your file just
BEFORE the location of each change.  You may change the margins as many times
as you like within your document.  However, the instructions MUST start at the
CURRENT LEFT MARGIN, and the RIGHT MARGIN INSTRUCTION MUST BE LISTED FIRST.
Also, the text in your file MUST NOT extend beyond the margin positions you
specify in the instructions.  The following instructions would set the margins
at positions 75 (right) and 6 (left):

..RMARG75
..LMARG6

     A path may be specified in the file name.  If it is, the program will
restore the old path after it opens the file.

 Examples of file names: 

   B:\SUBDIR1\SUBDIR2\FILE1.EXT (WITH PATH)

   \SUBDIR1\SUBDIR2\FILE1.EXT (WITH PATH)

   B:FILE1.EXT (WITHOUT PATH) 

   FILE1.EXT (WITHOUT PATH)

     To print this tutorial with the COMFAX JUSTIFY PROGRAM, execute "JUSTIFY"
and reply to the prompts.  Take the default (just hit Enter) on all except the
file name.  For file name, key in "TUTORIAL".

    You are permitted to reproduce and keep an unpaid-for copy of your user`s
group library master of this program for up to two weeks  for the purpose of
evaluating this software, provided the copyright notice at the top of this
tutorial is included, without infringing our copyright.  If after two weeks you
do not wish to keep it, simply destroy your copy of this program and owe us
nothing.  However, if you like it well enough to keep it, please remit $25 (if
10 or more of your group decides to keep it, take a 20% quantity discount and
send only $20 per copy kept) to:

                                    ComFax
                                 P.O. Box 3523
                               Wichita,KS 67201

       (Now to read the tutorial for LINEBUG, the file name is TUTOR2.)

                     *KEEP COSTS DOWN...SUPPORT TRUSTWARE*

```
{% endraw %}

## PLOTTER.BAS

{% raw %}
```bas
10 KEY OFF
20 W%=40
30 SCREEN 1:COLOR 1
50 WID%=W%-8:HGHT%=25-4
90 DIM A$(51)
91 DIM X(121),Y1(121),Y2(121),Y3(121),Y4(121),Y5(121)
99 K%=0
100 GOSUB 7000
5000 REM *** INITIALIZE PRINTER ARRAY ***
5100 FOR I%=1 TO HGHT%
5110   A$(I%)="      |"+SPACE$(120):NEXT I%
5120   A$(0)= "      +"+STRING$(120,"-")
5200 REM *** FIND MIN AND MAX VALUES FOR BOTH AXIES ***
5210 XMIN=X(0):XMAX=X(0):YMIN=Y1(0):YMAX=Y1(0)
5220 FOR I%=0 TO WID%
5230    IF X(I%)=-32768! THEN GOTO 5290
5232    IF X(I%)<XMIN AND X(I%)<>-32768! THEN XMIN=X(I%):GOTO 5250
5234    IF X(I%)>XMAX THEN XMAX=X(I%)
5250    IF Y1(I%)=-32768! THEN PRINT "MISSING `Y' VALUE ERROR - PROGRAM TERMINATED":GOTO 9999 ELSE YCHK%=0
5252    IF Y1(I%)<YMIN AND Y1(I%)<>-32768! THEN YMIN=Y1(I%):YCHK%=1
5254    IF Y2(I%)<YMIN AND Y2(I%)<>-32768! THEN YMIN=Y2(I%):YCHK%=1
5256    IF Y3(I%)<YMIN AND Y3(I%)<>-32768! THEN YMIN=Y3(I%):YCHK%=1
5258    IF Y4(I%)<YMIN AND Y4(I%)<>-32768! THEN YMIN=Y4(I%):YCHK%=1
5260    IF Y5(I%)<YMIN AND Y5(I%)<>-32768! THEN YMIN=Y5(I%):YCHK%=1
5270    IF YCHK%=1 THEN GOTO 5281
5272    IF Y1(I%)>YMAX AND Y1(I%)<>-32768! THEN YMAX=Y1(I%)
5274    IF Y2(I%)>YMAX AND Y2(I%)<>-32768! THEN YMAX=Y2(I%)
5276    IF Y3(I%)>YMAX AND Y3(I%)<>-32768! THEN YMAX=Y3(I%)
5278    IF Y4(I%)>YMAX AND Y4(I%)<>-32768! THEN YMAX=Y4(I%)
5280    IF Y5(I%)>YMAX AND Y5(I%)<>-32768! THEN YMAX=Y5(I%)
5281    NEXT I%
5290    IF XMIN=XMAX AND YMIN=YMAX THEN PRINT "MAXIMUM AND MINIMUM VALUES FOR BOTH AXIES ARE THE SAME - PROGRAM TERMINATED":GOTO 9999
5300 REM *** FIND THE INCREMENT VALUE FOR EACH AXIS AND SCALE THE AXIES ***
5305 MAX=XMAX:MIN=XMIN:SIZ%=WID%:GOSUB 5310:XINCR=INCR:XB=BASE
5306 MAX=YMAX:MIN=YMIN:SIZ%=HGHT%:GOSUB 5310:YINCR=INCR:YB=BASE
5309 GOTO 5330
5310 REM *** SUBROUTINE TO FIND BEST INCREMENT AND BASE VALUES ***
5311 INCR=1/(SIZ%/(MAX-MIN))
5312 F=1!
5313 IF (F*INCR)<1 AND 1=CINT(-1*(32767!>(F*INCR))*(F*INCR)) THEN INCR=1/F:GOTO 5320
5314 IF (F*INCR)<0.5 AND (F*INCR)>0.1 THEN INCR=1/(2*F):GOTO 5320
5315 IF INCR<1 THEN F=F*10 ELSE F=F/10
5316 GOTO 5313
5320 BASE=INCR*INT(MIN/INCR):RETURN
5330 FOR I%=0 TO HGHT% STEP 10
5340 MID$(A$(I%),2,6)=RIGHT$(SPACE$(5)+STR$(CINT(I%*YINCR+YB%))+"+",6)
5350 NEXT I%
5400 XLABEL$=SPACE$(7+WID%)
5410 FOR I%=0 TO WID% STEP 10
5420 MID$(A$(0),(7+I%),1)="+"
5430 MID$(XLABEL$,(3+I%),5)=RIGHT$(SPACE$(5)+STR$(CINT(I%*XINCR+XB)),5)
5440 NEXT I%
5500 REM *** PLACE POINTS INTO PLOT ARRAY IN APPROPRIATE LOCATIONS ***
5510 FOR I%=0 TO WID%
5520 IF X(I%)=-32768! THEN GOTO 5600 ELSE XP%=7+CINT((X(I%)-XB)/XINCR)
5530 IF Y1(I%)=-32768! THEN GOTO 5600 ELSE MID$(A$(CINT((Y1(I%)-YB)/YINCR)),XP%,1)="*"
5540 IF Y2(I%)=-32768! THEN GOTO 5600 ELSE MID$(A$(CINT((Y2(I%)-YB)/YINCR)),XP%,1)="+"
5550 IF Y3(I%)=-32768! THEN GOTO 5600 ELSE MID$(A$(CINT((Y3(I%)-YB)/YINCR)),XP%,1)="O"
5560 IF Y4(I%)=-32768! THEN GOTO 5600 ELSE MID$(A$(CINT((Y4(I%)-YB)/YINCR)),XP%,1)="#"
5570 IF Y5(I%)=-32768! THEN GOTO 5600 ELSE MID$(A$(CINT((Y5(I%)-YB)/YINCR)),XP%,1)="."
5600 NEXT I%
6000 REM *** OUTPUT THE FINISHED PLOT ***
6001 IF K%<=1 THEN GOTO 6005
6002 FOR X%=1 TO 15:Y$=INKEY$:NEXT X%
6003 IF INKEY$="" THEN 6003
6005 CLS
6010 FOR I%=0 TO HGHT%
6020 PRINT LEFT$(A$(HGHT%-I%),WID%+7)
6030 NEXT I%
6040 PRINT LEFT$(XLABEL$,WID%+7)
6050 PRINT SPACE$(WID%\2)+LABL$
6999 GOTO 100
7000 REM *** LOOP THROUGH POSSIBLE CURVES FOR PLOTTING ***
7005 FOR I%=0 TO 120:X(I%)=-32768!:Y1(I%)=-32768!:Y2(I%)=-32768!:Y3(I%)=-32768!:Y4(I%)=-32768!:Y5(I%)=-32768!:NEXT I%
7010 IF K%=0 THEN 7050 ELSE IF K%=1 THEN 7060 ELSE IF K%=2 THEN 7070 ELSE IF K%=3 THEN 7100
7040 FOR X%=1 TO 15:Y$=INKEY$:NEXT X%
7041 IF INKEY$="" THEN 7041
7042 SCREEN 0: PRINT"FOR PRINTER, CHANGE PRINT'S TO LPRINT IN PROGRAM.": END
7050 FOR I%=0 TO 30:X(I%)=I%:Y1(I%)=3*I%:NEXT I%
7051 LABL$="LINEAR PLOT":K%=1:GOTO 5000
7060 FOR I%=0 TO 30:X(I%)=I%:Y1(I%)=((I%-15)/1.5)^2:NEXT I%
7061 LABL$="PARABOLIC PLOT":K%=2:GOTO 5000
7070 FOR I%=0 TO 30:X(I%)=I%:Y1(I%)=50+50*SIN(I%/2):NEXT I%
7071 LABL$="TRIGONOMETRIC PLOT":K%=3:GOTO 5000
7100 FOR I%=0 TO 30:X(I%)=I%:Y1(I%)=3*I%:Y2(I%)=((I%-15)/1.5)^2:Y3(I%)=50+50*SIN(I%/2):NEXT I%
7101 LABL$="COMBINATION PLOT":K%=999:GOTO 5000
```
{% endraw %}

## POSTER.BAS

{% raw %}
```bas
10 DEFINT A-Z
20 KEY OFF
50 COUNT = 1221
60 PRINT "Hold on a minute while I set up."
90 TRUE=-1 : FALSE=0
100 CHAR=0 : CH$="*" : SP$=" " : LETTER=0 : I=0 : J=0 : J1=0 : K=0 : L=0 : M=0 : X=0 : MC=0 : A$="" : CHL=FALSE : MESS=FALSE : MESS$=""
110 PWID=80 : MARG=8 : SPS=16
120 DIM ASCII(255,3) , POSTER(2047,3) , MASK(15), PCODE(31), PCODE$(31)
130 FOR I=15 TO 0 STEP-1 : READ MASK(I) : NEXT
140 FOR I=1 TO 31 : READ PCODE$(I) : NEXT
150 DATA &h0001, &h0002, &h0004, &h0008, &h0010, &h0020, &h0040, &h0080, &h0100, &h0200, &h0400, &h0800, &h1000, &h2000, &h4000, &h8000
160 DATA SOH,STX,ETX,EOT,ENQ,ACK,BEL,BS,HT,LF,VT,FF,CR,SO,SI,DLE,DC1,DC2,DC3,DC4,NAK,SYN,ETB,CAN,EM,SUB,ESC,FS,GS,RS,US
200 FOR I=0 TO COUNT : FOR J=0 TO 3 : READ POSTER(I,J) : NEXT : NEXT
220 READ CHAR : READ ASCII(CHAR,1) : READ ASCII(CHAR,2) : IF CHAR=0 THEN 240
230 GOTO 220
240 ' READ ASCII CHAR, THEN READ START OF POSTER() INTO ASCII(), LINES. IF CHAR=0 THIS IS END OF DATA. 'A' WOULD GO TO ASCII(65,1)
300 GOTO 1000
310 FOR I=1 TO LEN(A$)
320    CHAR=ASC(MID$(A$,I,1)) : IF CHL THEN CH$=CHR$(CHAR)
330    IF CHAR=32 THEN FOR J=0 TO 18 : LPRINT "" : NEXT : GOTO 530
340    IF ASCII(CHAR,2)=0 THEN 530
350    J=ASCII(CHAR,1) : J1=J+ASCII(CHAR,2)-1
360        FOR K=J TO J1 : LPRINT SPACE$(MARG); : MC=1 : IF LCD THEN LPRINT LC$;
370           FOR L=0 TO 3 : IF POSTER(K,L)=0 THEN FOR Y=0 TO 15 : LPRINT SP$;: NEXT : MC=MC+16 : GOTO 510
380             FOR M=0 TO 15
390             X = POSTER(K,L) AND MASK(M)
400             IF MESS THEN CH$=MID$(MESS$,MC,1)
410             IF X = MASK(M) THEN LPRINT CH$; ELSE LPRINT SP$;
420             MC=MC+1
500             NEXT
510           NEXT : LPRINT : I$=INKEY$ : IF I$=CHR$(27) THEN 540
520       NEXT : LPRINT
530 NEXT
540 RETURN
1000 ' find out what to do
1010 CLS
1020 PRINT "POSTER"
1025 PRINT TAB(10) "(1) Print a POSTER message with current settings."
1030 PRINT TAB(10) "(2) Change the current settings."
1035 PRINT TAB(10) "(3) END Program."
1040 PRINT TAB(10) "Type the Number of what to do."
1050 X=0 : LOCATE ,,1 : I$="" : WHILE I$="" : I$=INKEY$ : WEND : PRINT
1055 IF I$="P" OR I$="p" THEN X=1 ELSE IF I$="c" OR I$="C" THEN X=2 ELSE IF I$="E" OR I$="e" THEN X=3
1060 IF X THEN 1065 ELSE X=VAL(I$)
1065 ON X GOSUB 1100,1200,1080
1070 GOTO 1000
1080 END
1100 PRINT "Enter your message below."
1110 K=CSRLIN : L=POS(0) : LINE INPUT A$ : IF A$="" THEN RETURN
1120 FOR I=1 TO LEN(A$) : J=ASC(MID$(A$,I,1)) : IF J>96 AND J<123 THEN MID$(A$,I,1)=CHR$(J-32)
1130 NEXT
1140 LOCATE K,L : PRINT A$
1150 PRINT "Is this correct?" : LOCATE ,,1 : I$="" : WHILE I$="" : I$=INKEY$ : WEND : IF I$="Y" OR I$="y" THEN PRINT "Hit Esc to stop printing." : GOTO 310 ELSE 1100
1200 ' parms
1210 PRINT TAB(10) "(1) Message dots made up of ";: IF CHL THEN PRINT "same letter." ELSE PRINT CH$
1220 PRINT TAB(10) "(2) Use a line to make up dots is ";: IF MESS THEN PRINT "ON" ELSE PRINT "OFF"
1230 IF MESS THEN PRINT TAB(10) MESS$
1240 PRINT TAB(10) "(3) Printer margin is ";MARG
1250 PRINT TAB(10) "(4) Printer width is ";PWID
1260 PRINT TAB(10) "(5) Send codes to printer."
1270 PRINT TAB(10) "(6) Use a string of characters for a dot."
1300 PRINT TAB(10) "Hit a number to change, space bar when done.";
1310 LOCATE ,,1 : I$="" : WHILE I$="" : I$=INKEY$ : WEND : PRINT I$ : PRINT
1320 X=VAL(I$) : IF X=0 THEN RETURN
1330 ON X GOSUB 1350,1400,1450,1500,1550,1650
1340 GOTO 1200
1350 PRINT "For poster letters from SAME small letters, hold down 'Alt' key, then hit S."
1355 PRINT "To use a SINGLE letter for the dots, TYPE it."
1360 PRINT "For NO CHANGE, hit the SPACE bar."
1365 LOCATE ,,1 : I$="" : WHILE I$="" : I$=INKEY$ : WEND
1370 IF I$=CHR$(32) OR I$=CHR$(13) THEN 1395
1375 IF LEN(I$)=2 THEN IF ASC(RIGHT$(I$,1)) = 31 THEN CHL=TRUE : GOTO 1395
1380 CH$=I$ : CHL=FALSE : SP$=CHR$(32) : SPS=16 : WIDTH "lpt1:",80 : PWID=80
1395 RETURN
1400 IF MESS THEN MESS=FALSE ELSE MESS=TRUE
1405 PRINT "If line is ON then the big letters are made up from a line of 64 letters,       usually starting with the fourth line position."
1410 IF MESS$="" THEN PRINT "Currently there is no line active." ELSE PRINT MESS$
1415 PRINT "To change the line ENTER it below, hit return to CANCEL, or TYPE a few letters  to restore the last one."
1420 PRINT "THE LINE NEEDS TO BE SIXTY--FOUR LETTERS LONG JUST LIKE THIS ONE"
1425 LINE INPUT T$ : IF T$="" THEN MESS=FALSE : GOTO 1445
1430 IF LEN(T$) < 64 THEN 1445
1435 MESS$=T$
1445 RETURN
1450 PRINT "Printer margin is";MARG; : INPUT ". New value (return for no change)";I$ : IF I$<>"" THEN X=VAL(I$) : IF X > -1 THEN MARG=X
1455 RETURN
1500 PRINT "Printer width is";PWID; : INPUT ". New value(return for no change)";X : IF X<>0 THEN PWID=X : WIDTH "lpt1:",PWID
1505 RETURN
1550 PRINT "Enter codes to send to printer. Hit Alt F10 when done, Del key for backspace."
1555 LOCATE ,,1 : X=0 : J=CSRLIN : K=POS(0)
1560 I$="" : WHILE I$="" : I$=INKEY$ : WEND
1565 IF I$=CHR$(0)+CHR$(113) THEN 1600
1570 IF I$=CHR$(0)+CHR$(83) THEN X=X-1 : IF X<1 THEN X=0 : LOCATE J,K,1 : PRINT SPACE$(20); : LOCATE J,K,1 : GOTO 1560 ELSE 1580
1575 PCODE(X)=ASC(I$) : X=X+1 : IF X>20 THEN PRINT : PRINT "Only 20 at a time" :GOTO 1600
1580 LOCATE J,K,1 : PRINT SPACE$(X*3+10); : LOCATE J,K,1 : FOR I=0 TO X-1 : IF PCODE(I) < 32 THEN PRINT PCODE$(PCODE(I));" "; ELSE PRINT CHR$(PCODE(I));" ";
1585 NEXT
1590 GOTO 1560
1600 PRINT : PRINT "Send these codes to the printer? (Y/N) or hit S to send at the start of a line. ";
1610 LOCATE ,,1 : I$="" : WHILE I$="" : I$=INKEY$ : WEND : PRINT I$
1615 IF I$="N" OR I$="n" THEN 1640
1620 IF I$="Y" OR I$="y" THEN FOR I=0 TO X-1 : LPRINT CHR$(PCODE(I)); : NEXT : PRINT : PRINT "Done." : GOTO 1640
1625 IF I$="S" OR I$="s" THEN IF X>0 THEN LCD=TRUE : LC$="" : FOR I=0 TO X-1 : LC$=LC$+CHR$(PCODE(I)) : NEXT : GOTO 1640 ELSE LCD=FALSE : LC$="" : GOTO 1640
1630 GOTO 1610
1640 RETURN
1650 PRINT "Enter characters for ONE DOT in Poster. Backspace is printable, so start over   if you make a mistake." : GOSUB 1660 : GOTO 1740
1660 PRINT "Hit RETURN when done."
1670 J$=""
1680 LOCATE ,,1 : I$="" : WHILE I$="" : I$=INKEY$ : WEND
1690 IF I$=CHR$(13) THEN 1720
1700 PRINT I$; : J$=J$+I$
1710 GOTO 1680
1720 PRINT : PRINT "Is this OK? (Hit Esc to quit) ";
1730 LOCATE ,,1 : I$="" : WHILE I$="" : I$=INKEY$ : WEND : PRINT I$ : RETURN
1740 IF I$="n" OR I$="N" THEN 1650 ELSE IF I$=CHR$(27) THEN 1795
1750 CH$=J$
1760 PRINT "Enter characters for ONE EMPTY DOT in Poster. Backspace is printable, so start  over if you make a mistake." : GOSUB 1660 : GOTO 1770
1770 IF I$="n" OR I$="N" THEN 1760 ELSE IF I$=CHR$(27) THEN 1795
1780 SP$=J$
1790 X=LEN(SP$) : SPS=X*16 : Y=LEN(CH$) : IF X>Y THEN Z=X ELSE Z=Y
1792 J=Z*64+MARG+1 : IF J<79 THEN WIDTH "lpt1:",80 : PWID=80 : GOTO 1795
1794 IF J<255 THEN WIDTH "lpt1:",J : PWID=J ELSE PRINT "Printer width is too much for BASIC." : PRINT " Margin + 64*largest dot must be less than 255."
1795 RETURN
1800 ' Print out a data file in HEX of poster bit-map.
1801 ' To use, change LINE 300 to GOTO 1800
1805 OPEN "posthex.dat" FOR OUTPUT AS #1
1810 FOR I=1 TO 255
1820   X=ASCII(I,1) : Y=ASCII(I,2) : Z=X+Y-1
1830   IF Y=0 THEN 1920
1840   PRINT "ASCII "+CHR$(I)+" = "+STR$(Y)+" LINES"
1850   PRINT #1,"ASCII "+CHR$(I)+" = "+STR$(Y)+" LINES"
1860   FOR J=X TO Z
1870      FOR K=0 TO 3 : A$=HEX$(POSTER(J,K))
1880         PRINT SPACE$(4)+STRING$(4-LEN(A$),"0")+A$;
1890         PRINT #1,SPACE$(4)+STRING$(4-LEN(A$),"0")+A$;
1900      NEXT : PRINT : PRINT #1,""
1910   NEXT : PRINT : PRINT #1,""
1920 NEXT
1930 CLOSE : GOTO 1000
2000 DATA 8160,0,0,0
2001 DATA 8160,0,0,0
2002 DATA 8160,0,0,0
2003 DATA 8176,0,0,0
2004 DATA 8184,0,0,0
2005 DATA 8191,-16384,0,0
2006 DATA 8191,-1024,0,0
2007 DATA 8191,-32,0,0
2008 DATA 8191,-1,0,0
2009 DATA 8191,-1,-2048,0
2010 DATA 8176,16383,-128,0
2011 DATA 8160,8191,-8,0
2012 DATA 0,8191,-1,-8192
2013 DATA 0,8177,-1,-512
2014 DATA 0,8176,8191,-32
2015 DATA 0,8176,511,-2
2016 DATA 0,8176,2047,-2
2017 DATA 0,8176,16383,-16
2018 DATA 8160,8177,-1,-256
2019 DATA 8160,8191,-1,-2048
2020 DATA 8176,16383,-1,-16384
2021 DATA 8191,-1,-4,0
2022 DATA 8191,-1,-64,0
2023 DATA 8191,-1,-1024,0
2024 DATA 8191,-1,-16384,0
2025 DATA 8191,-8,0,0
2026 DATA 8191,-256,0,0
2027 DATA 8191,-4096,0,0
2028 DATA 8191,-32768,0,0
2029 DATA 8188,0,0,0
2030 DATA 8176,0,0,0
2031 DATA 8160,0,0,0
2032 DATA 8160,0,0,0
2033 DATA 0,0,0,0
2034 DATA 8128,0,0,510
2035 DATA 8128,0,0,510
2036 DATA 8160,0,0,1022
2037 DATA 8184,0,0,2046
2038 DATA 8191,-1,-1,-2
2039 DATA 8191,-1,-1,-2
2040 DATA 8191,-1,-1,-2
2041 DATA 8191,-1,-1,-2
2042 DATA 8191,-1,-1,-2
2043 DATA 8191,-1,-1,-2
2044 DATA 8191,-1,-1,-2
2045 DATA 8128,7,-1024,254
2046 DATA 8128,7,-1024,254
2047 DATA 8128,7,-1024,254
2048 DATA 8128,7,-1024,254
2049 DATA 8128,7,-1024,254
2050 DATA 8128,7,-1024,254
2051 DATA 8160,7,-512,254
2052 DATA 4080,31,-256,1022
2053 DATA 4092,127,-1,-2
2054 DATA 2047,-1,-1,-2
2055 DATA 1023,-1,-1,-4
2056 DATA 511,-1,-8193,-16
2057 DATA 255,-1,2047,-64
2058 DATA 63,-4,127,-512
2059 DATA 3,-32,0,0
2060 DATA 0,0,0,0
2061 DATA 0,31,-128,0
2062 DATA 0,4095,-8,0
2063 DATA 0,32767,-1,-32768
2064 DATA 3,-1,-1,-4096
2065 DATA 15,-1,-1,-1024
2066 DATA 63,-1,-1,-256
2067 DATA 255,-1,-1,-128
2068 DATA 511,-1024,63,-32
2069 DATA 1023,-8192,0,-16
2070 DATA 2046,0,0,8184
2071 DATA 4088,0,0,2044
2072 DATA 8176,0,0,508
2073 DATA 8160,0,0,510
2074 DATA 8160,0,0,254
2075 DATA 8160,0,0,254
2076 DATA 8160,0,0,254
2077 DATA 8160,0,0,254
2078 DATA 8160,0,0,254
2079 DATA 4064,0,0,254
2080 DATA 4080,0,0,510
2081 DATA 4088,0,0,2044
2082 DATA 2046,0,0,16376
2083 DATA 1023,-32768,1,-8
2084 DATA 127,-512,63,-2
2085 DATA 31,-512,127,-2
2086 DATA 7,-512,127,-2
2087 DATA 1,-512,127,-2
2088 DATA 0,0,0,0
2089 DATA 8160,0,0,254
2090 DATA 8160,0,0,254
2091 DATA 8191,-1,-1,-2
2092 DATA 8191,-1,-1,-2
2093 DATA 8191,-1,-1,-2
2094 DATA 8191,-1,-1,-2
2095 DATA 8191,-1,-1,-2
2096 DATA 8191,-1,-1,-2
2097 DATA 8191,-1,-1,-2
2098 DATA 8160,0,0,254
2099 DATA 8160,0,0,254
2100 DATA 8160,0,0,510
2101 DATA 8176,0,0,1022
2102 DATA 2044,0,0,2044
2103 DATA 1022,0,0,4092
2104 DATA 1023,-32768,0,32752
2105 DATA 511,-1024,15,-16
2106 DATA 63,-1,-1,-128
2107 DATA 15,-1,-1,-512
2108 DATA 3,-1,-1,-4096
2109 DATA 0,32767,-1,-16384
2110 DATA 0,2047,-4,0
2111 DATA 0,127,-256,0
2112 DATA 0,0,0,0
2113 DATA 8128,0,0,254
2114 DATA 8128,0,0,254
2115 DATA 8176,0,0,510
2116 DATA 8184,0,0,2046
2117 DATA 8191,-1,-1,-2
2118 DATA 8191,-1,-1,-2
2119 DATA 8191,-1,-1,-2
2120 DATA 8191,-1,-1,-2
2121 DATA 8191,-1,-1,-2
2122 DATA 8191,-1,-1,-2
2123 DATA 8191,-1,-1,-2
2124 DATA 8128,1,-1024,254
2125 DATA 8128,1,-512,254
2126 DATA 8128,3,-512,254
2127 DATA 8160,7,-128,254
2128 DATA 8160,63,-16,254
2129 DATA 8176,127,-4,510
2130 DATA 8188,255,-4,1022
2131 DATA 8191,0,0,4094
2132 DATA 8191,-8192,0,32766
2133 DATA 8191,-1024,3,-2
2134 DATA 8191,-512,15,-2
2135 DATA 8191,-256,15,-2
2136 DATA 8191,-256,15,-2
2137 DATA 0,0,0,0
2138 DATA 8128,0,0,254
2139 DATA 8128,0,0,254
2140 DATA 8176,0,0,510
2141 DATA 8184,0,0,2046
2142 DATA 8191,-1,-1,-2
2143 DATA 8191,-1,-1,-2
2144 DATA 8191,-1,-1,-2
2145 DATA 8191,-1,-1,-2
2146 DATA 8191,-1,-1,-2
2147 DATA 8191,-1,-1,-2
2148 DATA 8191,-1,-1,-2
2149 DATA 8184,1,-1024,254
2150 DATA 8176,1,-512,254
2151 DATA 8128,3,-512,254
2152 DATA 8128,7,-128,254
2153 DATA 0,63,-16,254
2154 DATA 0,127,-4,510
2155 DATA 0,255,-4,1022
2156 DATA 0,0,0,4094
2157 DATA 0,0,0,32766
2158 DATA 0,0,3,-2
2159 DATA 0,0,15,-2
2160 DATA 0,0,15,-2
2161 DATA 0,0,15,-2
2162 DATA 0,0,0,0
2163 DATA 0,31,-128,0
2164 DATA 0,4095,-8,0
2165 DATA 0,32767,-1,-32768
2166 DATA 3,-1,-1,-4096
2167 DATA 15,-1,-1,-1024
2168 DATA 63,-1,-1,-256
2169 DATA 255,-1,-1,-128
2170 DATA 511,-1024,63,-32
2171 DATA 1023,-8192,0,-16
2172 DATA 2046,0,0,8184
2173 DATA 4088,0,0,2044
2174 DATA 8176,0,0,508
2175 DATA 8160,0,0,510
2176 DATA 8160,0,0,254
2177 DATA 8160,0,0,254
2178 DATA 8160,0,0,254
2179 DATA 8160,0,0,254
2180 DATA 8160,0,0,254
2181 DATA 4064,15,-8192,254
2182 DATA 4080,31,-8192,510
2183 DATA 4088,127,-8192,2044
2184 DATA 2047,-1,-8192,16376
2185 DATA 1023,-1,-8191,-8
2186 DATA 4095,-1,-8129,-2
2187 DATA 4095,-1,-8065,-2
2188 DATA 4095,-1,-8065,-2
2189 DATA 4095,-1,-8065,-2
2190 DATA 0,31,-8192,0
2191 DATA 0,15,-8192,0
2192 DATA 0,0,0,0
2193 DATA 8160,0,0,254
2194 DATA 8176,0,0,510
2195 DATA 8176,0,0,510
2196 DATA 8190,0,0,1022
2197 DATA 8191,-1,-1,-2
2198 DATA 8191,-1,-1,-2
2199 DATA 8191,-1,-1,-2
2200 DATA 8191,-1,-1,-2
2201 DATA 8191,-1,-1,-2
2202 DATA 8191,-1,-1,-2
2203 DATA 8191,-1,-1,-2
2204 DATA 8188,0,32704,1022
2205 DATA 8184,0,32704,254
2206 DATA 8184,0,32704,254
2207 DATA 0,0,32704,0
2208 DATA 8184,0,32704,254
2209 DATA 8184,0,32704,254
2210 DATA 8188,0,32704,510
2211 DATA 8190,0,32704,2046
2212 DATA 8191,-1,-1,-2
2213 DATA 8191,-1,-1,-2
2214 DATA 8191,-1,-1,-2
2215 DATA 8191,-1,-1,-2
2216 DATA 8191,-1,-1,-2
2217 DATA 8191,-1,-1,-2
2218 DATA 8188,0,0,1022
2219 DATA 8176,0,0,510
2220 DATA 8176,0,0,510
2221 DATA 8160,0,0,254
2222 DATA 0,0,0,0
2223 DATA 8128,0,0,254
2224 DATA 8160,0,0,510
2225 DATA 8176,0,0,1022
2226 DATA 8191,-1,-1,-2
2227 DATA 8191,-1,-1,-2
2228 DATA 8191,-1,-1,-2
2229 DATA 8191,-1,-1,-2
2230 DATA 8191,-1,-1,-2
2231 DATA 8191,-1,-1,-2
2232 DATA 8191,-1,-1,-2
2233 DATA 8176,0,0,1022
2234 DATA 8160,0,0,510
2235 DATA 8128,0,0,254
2236 DATA 0,0,0,0
2237 DATA 7,-128,0,0
2238 DATA 127,-32,0,0
2239 DATA 511,-8,0,0
2240 DATA 1023,-8,0,0
2241 DATA 2047,-8,0,0
2242 DATA 4095,-8,0,0
2243 DATA 8191,-16,0,0
2244 DATA 8190,8128,0,0
2245 DATA 8176,0,0,0
2246 DATA 8160,0,0,0
2247 DATA 8128,0,0,0
2248 DATA 8128,0,0,510
2249 DATA 8128,0,0,510
2250 DATA 8160,0,0,2046
2251 DATA 8191,-1,-1,-2
2252 DATA 4095,-1,-1,-2
2253 DATA 2047,-1,-1,-2
2254 DATA 2047,-1,-1,-2
2255 DATA 1023,-1,-1,-2
2256 DATA 511,-1,-1,-2
2257 DATA 7,-1,-1,-2
2258 DATA 0,0,0,2046
2259 DATA 0,0,0,510
2260 DATA 0,0,0,510
2261 DATA 0,0,0,0
2262 DATA 8128,0,0,254
2263 DATA 8160,0,0,510
2264 DATA 8176,0,0,1022
2265 DATA 8191,-1,-1,-2
2266 DATA 8191,-1,-1,-2
2267 DATA 8191,-1,-1,-2
2268 DATA 8191,-1,-1,-2
2269 DATA 8191,-1,-1,-2
2270 DATA 8191,-1,-1,-2
2271 DATA 8191,-1,-1,-2
2272 DATA 8176,15,-64,1022
2273 DATA 8160,63,-32,510
2274 DATA 8128,1023,-32,254
2275 DATA 0,8191,-8,0
2276 DATA 1,-1,-1,254
2277 DATA 63,-1,-1,-15874
2278 DATA 511,-1,-12289,-2
2279 DATA 8191,-4,511,-2
2280 DATA 8191,-16,63,-2
2281 DATA 8191,-512,7,-2
2282 DATA 8191,-4096,0,-2
2283 DATA 8191,-32768,0,32766
2284 DATA 8184,0,0,8190
2285 DATA 8176,0,0,4094
2286 DATA 8160,0,0,2046
2287 DATA 8160,0,0,1022
2288 DATA 8160,0,0,510
2289 DATA 0,0,0,0
2290 DATA 8128,0,0,254
2291 DATA 8160,0,0,510
2292 DATA 8176,0,0,1022
2293 DATA 8191,-1,-1,-2
2294 DATA 8191,-1,-1,-2
2295 DATA 8191,-1,-1,-2
2296 DATA 8191,-1,-1,-2
2297 DATA 8191,-1,-1,-2
2298 DATA 8191,-1,-1,-2
2299 DATA 8191,-1,-1,-2
2300 DATA 8160,0,0,1022
2301 DATA 8160,0,0,510
2302 DATA 8160,0,0,254
2303 DATA 8176,0,0,0
2304 DATA 8184,0,0,0
2305 DATA 8188,0,0,0
2306 DATA 8191,0,0,0
2307 DATA 8191,-8192,0,0
2308 DATA 8191,-512,0,0
2309 DATA 8191,-32,0,0
2310 DATA 8191,-32,0,0
2311 DATA 8191,-32,0,0
2312 DATA 0,0,0,0
2313 DATA 8128,0,0,254
2314 DATA 8128,0,0,254
2315 DATA 8160,0,0,254
2316 DATA 8184,0,0,1022
2317 DATA 8191,-1,-1,-2
2318 DATA 8191,-1,-1,-2
2319 DATA 8191,-1,-1,-2
2320 DATA 8191,-1,-1,-2
2321 DATA 8184,0,4095,-64
2322 DATA 8160,7,-1,-4096
2323 DATA 8128,255,-1,0
2324 DATA 0,4095,-32,0
2325 DATA 1,-1,-1024,0
2326 DATA 31,-1,-16384,0
2327 DATA 511,-8,0,0
2328 DATA 8191,-256,0,0
2329 DATA 8191,-512,0,0
2330 DATA 511,-8,0,0
2331 DATA 31,-1,-32768,0
2332 DATA 1,-1,-1024,0
2333 DATA 0,4095,-32,0
2334 DATA 8128,255,-1,0
2335 DATA 8160,7,-1,-4096
2336 DATA 8184,0,4095,-64
2337 DATA 8191,-1,-1,-2
2338 DATA 8191,-1,-1,-2
2339 DATA 8191,-1,-1,-2
2340 DATA 8191,-1,-1,-2
2341 DATA 8191,-1,-1,-2
2342 DATA 8184,0,0,1022
2343 DATA 8160,0,0,254
2344 DATA 8128,0,0,126
2345 DATA 8128,0,0,126
2346 DATA 0,0,0,0
2347 DATA 8064,0,0,126
2348 DATA 8064,0,0,126
2349 DATA 8128,0,0,254
2350 DATA 8191,-1,-1,-2
2351 DATA 8191,-1,-1,-2
2352 DATA 8191,-1,-1,-2
2353 DATA 8191,-1,-1,-2
2354 DATA 8191,-1,-1,-2
2355 DATA 8160,0,0,32766
2356 DATA 8128,0,3,-2
2357 DATA 8128,0,31,-2
2358 DATA 0,0,255,-4
2359 DATA 0,0,2047,-16
2360 DATA 0,0,8191,-256
2361 DATA 0,0,-1,-1024
2362 DATA 0,3,-1,-8192
2363 DATA 0,31,-1,-16384
2364 DATA 0,127,-2,0
2365 DATA 0,1023,-16,0
2366 DATA 0,4095,-128,0
2367 DATA 0,32767,-512,0
2368 DATA 3,-1,-8192,0
2369 DATA 15,-1,-32768,254
2370 DATA 127,-2,0,254
2371 DATA 1023,-8,0,510
2372 DATA 8191,-1,-1,-2
2373 DATA 8191,-1,-1,-2
2374 DATA 8191,-1,-1,-2
2375 DATA 8191,-1,-1,-2
2376 DATA 0,0,0,510
2377 DATA 0,0,0,254
2378 DATA 0,0,0,254
2379 DATA 0,0,0,0
2380 DATA 0,7,-512,0
2381 DATA 0,1023,-8,0
2382 DATA 0,8191,-1,-32768
2383 DATA 0,-1,-1,-4096
2384 DATA 7,-1,-1,-1024
2385 DATA 31,-1,-1,-256
2386 DATA 127,-1,-1,-128
2387 DATA 255,-64,127,-32
2388 DATA 1023,-2048,3,-16
2389 DATA 2047,-32768,0,32760
2390 DATA 2044,0,0,4092
2391 DATA 4088,0,0,1020
2392 DATA 4080,0,0,508
2393 DATA 8160,0,0,254
2394 DATA 8128,0,0,254
2395 DATA 8128,0,0,126
2396 DATA 8128,0,0,126
2397 DATA 8128,0,0,254
2398 DATA 8160,0,0,254
2399 DATA 8176,0,0,510
2400 DATA 4080,0,0,2044
2401 DATA 2046,0,0,8184
2402 DATA 1023,-32768,0,32760
2403 DATA 511,-2048,3,-16
2404 DATA 255,-64,127,-32
2405 DATA 31,-1,-1,-256
2406 DATA 7,-1,-1,-1024
2407 DATA 0,-1,-1,-4096
2408 DATA 0,8191,-1,-32768
2409 DATA 0,1023,-8,0
2410 DATA 0,7,-512,0
2411 DATA 0,0,0,0
2412 DATA 8128,0,0,254
2413 DATA 8160,0,0,510
2414 DATA 8176,0,0,1022
2415 DATA 8191,-1,-1,-2
2416 DATA 8191,-1,-1,-2
2417 DATA 8191,-1,-1,-2
2418 DATA 8191,-1,-1,-2
2419 DATA 8191,-1,-1,-2
2420 DATA 8191,-1,-1,-2
2421 DATA 8191,-1,-1,-2
2422 DATA 8176,63,-32768,126
2423 DATA 8160,63,-32768,126
2424 DATA 8128,63,-32768,126
2425 DATA 0,63,-16384,254
2426 DATA 0,63,-8192,510
2427 DATA 0,63,-4096,1022
2428 DATA 0,31,-2048,4094
2429 DATA 0,15,-256,16380
2430 DATA 0,7,-1,-8
2431 DATA 0,3,-1,-8
2432 DATA 0,1,-1,-16
2433 DATA 0,0,-1,-64
2434 DATA 0,0,16383,-128
2435 DATA 0,0,4095,-1024
2436 DATA 0,0,255,-8192
2437 DATA 0,0,0,0
2438 DATA 0,7,-512,0
2439 DATA 0,1023,-8,0
2440 DATA 0,8191,-1,-32768
2441 DATA 0,-1,-1,-4096
2442 DATA 7,-1,-1,-1024
2443 DATA 31,-1,-1,-256
2444 DATA 127,-1,-1,-128
2445 DATA 255,-64,127,-32
2446 DATA 1023,-2048,3,-16
2447 DATA 2047,-32768,0,32760
2448 DATA 2044,0,0,4092
2449 DATA 4088,0,0,1020
2450 DATA 4080,0,0,508
2451 DATA 8160,0,0,254
2452 DATA 8128,0,0,254
2453 DATA 8128,0,0,126
2454 DATA 8128,0,0,126
2455 DATA 8128,0,0,254
2456 DATA 8167,-1024,0,254
2457 DATA 8191,-1024,0,510
2458 DATA 4095,-2048,0,2044
2459 DATA 4095,-4096,0,8184
2460 DATA 16383,-8192,0,32760
2461 DATA 32767,-2048,3,-16
2462 DATA -1,-64,127,-32
2463 DATA -25,-1,-1,-256
2464 DATA -1017,-1,-1,-1024
2465 DATA -2048,-1,-1,-4096
2466 DATA 30720,8191,-1,-32768
2467 DATA 14336,1023,-8,0
2468 DATA 7168,7,-512,0
2469 DATA 1024,0,0,0
2470 DATA 0,0,0,0
2471 DATA 8128,0,0,254
2472 DATA 8160,0,0,510
2473 DATA 8176,0,0,1022
2474 DATA 8191,-1,-1,-2
2475 DATA 8191,-1,-1,-2
2476 DATA 8191,-1,-1,-2
2477 DATA 8191,-1,-1,-2
2478 DATA 8191,-1,-1,-2
2479 DATA 8191,-1,-1,-2
2480 DATA 8191,-1,-1,-2
2481 DATA 8176,7,-4096,126
2482 DATA 8160,7,-4096,126
2483 DATA 8128,15,-4096,126
2484 DATA 0,63,-2048,254
2485 DATA 15,-1,-1024,510
2486 DATA 255,-1,-256,1022
2487 DATA 2047,-1,-64,4094
2488 DATA 2047,-1,-1,-2
2489 DATA 4095,-2,-1,-4
2490 DATA 4095,-4,32767,-8
2491 DATA 8191,-32,16383,-16
2492 DATA 8176,0,4095,-64
2493 DATA 4032,0,511,-512
2494 DATA 1984,0,63,-1024
2495 DATA 1984,0,0,0
2496 DATA 448,0,0,0
2497 DATA 96,0,0,0
2498 DATA 0,0,0,0
2499 DATA 8191,-256,0,0
2500 DATA 8191,-256,0,0
2501 DATA 8191,-256,31,-2048
2502 DATA 8191,-256,255,-128
2503 DATA 8191,-256,2047,-32
2504 DATA 1023,-4096,8191,-16
2505 DATA 511,-32768,16383,-8
2506 DATA 510,0,-1,-4
2507 DATA 1020,1,-1,-2
2508 DATA 2040,3,-4,1022
2509 DATA 4080,7,-32,254
2510 DATA 4064,15,-64,127
2511 DATA 8160,31,-256,127
2512 DATA 8160,127,-512,127
2513 DATA 8160,255,-1024,126
2514 DATA 8176,511,-2048,254
2515 DATA 4088,2047,-4096,252
2516 DATA 4095,-1,-8192,504
2517 DATA 2047,-1,-16384,2040
2518 DATA 2047,-1,-32768,32760
2519 DATA 1023,-2,7,-2
2520 DATA 255,-4,7,-2
2521 DATA 63,-32,7,-2
2522 DATA 3,-512,7,-2
2523 DATA 0,0,0,0
2524 DATA 0,0,15,-2
2525 DATA 0,0,15,-2
2526 DATA 0,0,15,-2
2527 DATA 0,0,0,16382
2528 DATA 0,0,0,1022
2529 DATA 8128,0,0,254
2530 DATA 8160,0,0,254
2531 DATA 8176,0,0,254
2532 DATA 8191,-1,-1,-2
2533 DATA 8191,-1,-1,-2
2534 DATA 8191,-1,-1,-2
2535 DATA 8191,-1,-1,-2
2536 DATA 8191,-1,-1,-2
2537 DATA 8191,-1,-1,-2
2538 DATA 8191,-1,-1,-2
2539 DATA 8176,0,0,254
2540 DATA 8160,0,0,254
2541 DATA 8128,0,0,254
2542 DATA 0,0,0,1022
2543 DATA 0,0,0,16382
2544 DATA 0,0,15,-2
2545 DATA 0,0,15,-2
2546 DATA 0,0,15,-2
2547 DATA 0,0,0,0
2548 DATA 0,0,0,254
2549 DATA 0,0,0,254
2550 DATA 0,0,0,510
2551 DATA 0,32767,-1,-2
2552 DATA 15,-1,-1,-2
2553 DATA 127,-1,-1,-2
2554 DATA 255,-1,-1,-2
2555 DATA 1023,-1,-1,-2
2556 DATA 2047,-1,-1,-2
2557 DATA 2047,-1,-1,-2
2558 DATA 4095,0,0,510
2559 DATA 4092,0,0,254
2560 DATA 4088,0,0,254
2561 DATA 8176,0,0,0
2562 DATA 8176,0,0,0
2563 DATA 8176,0,0,0
2564 DATA 8176,0,0,0
2565 DATA 4080,0,0,0
2566 DATA 4088,0,0,0
2567 DATA 4092,0,0,254
2568 DATA 2046,0,0,254
2569 DATA 1023,-16384,0,510
2570 DATA 511,-1,-1,-2
2571 DATA 127,-1,-1,-2
2572 DATA 31,-1,-1,-2
2573 DATA 1,-1,-1,-2
2574 DATA 0,0,0,510
2575 DATA 0,0,0,254
2576 DATA 0,0,0,254
2577 DATA 0,0,0,0
2578 DATA 0,0,0,254
2579 DATA 0,0,0,254
2580 DATA 0,0,0,510
2581 DATA 0,0,0,4094
2582 DATA 0,0,0,-2
2583 DATA 0,0,31,-2
2584 DATA 0,0,511,-2
2585 DATA 0,0,8191,-2
2586 DATA 0,3,-1,-2
2587 DATA 0,63,-1,-2
2588 DATA 0,1023,-1,-2
2589 DATA 0,16383,-1,510
2590 DATA 3,-1,-8,254
2591 DATA 63,-1,-256,254
2592 DATA 1023,-1,-4096,0
2593 DATA 8191,-1,0,0
2594 DATA 8191,-32,0,0
2595 DATA 4095,-64,0,0
2596 DATA 127,-8,0,0
2597 DATA 3,-1,-16384,0
2598 DATA 0,8191,-512,0
2599 DATA 0,511,-32,126
2600 DATA 0,31,-1,254
2601 DATA 0,0,-1,-1538
2602 DATA 0,0,2047,-2
2603 DATA 0,0,127,-2
2604 DATA 0,0,3,-2
2605 DATA 0,0,0,8190
2606 DATA 0,0,0,1022
2607 DATA 0,0,0,254
2608 DATA 0,0,0,254
2609 DATA 0,0,0,126
2610 DATA 0,0,0,0
2611 DATA 0,0,0,126
2612 DATA 0,0,0,126
2613 DATA 0,0,0,254
2614 DATA 0,0,3,-2
2615 DATA 0,0,511,-2
2616 DATA 0,3,-1,-2
2617 DATA 0,4095,-1,-2
2618 DATA 63,-1,-1,-2
2619 DATA 8191,-1,-1,-2
2620 DATA 8191,-1,-1,-2
2621 DATA 8191,-1,-16,254
2622 DATA 8191,-1,-8192,254
2623 DATA 8191,-64,0,0
2624 DATA 127,-8192,3,-256
2625 DATA 0,-64,4095,-16
2626 DATA 0,8191,-1,-2
2627 DATA 0,8191,-1,-2
2628 DATA 127,-1,-1,-2
2629 DATA 4095,-1,-1,-8
2630 DATA 4095,-1,-1,-4096
2631 DATA 4095,-1,-32,126
2632 DATA 4095,-1,-8192,254
2633 DATA 127,-64,0,510
2634 DATA 3,-1,1,-2
2635 DATA 0,1023,-1,-2
2636 DATA 0,3,-1,-2
2637 DATA 0,0,7,-2
2638 DATA 0,0,0,8190
2639 DATA 0,0,0,510
2640 DATA 0,0,0,254
2641 DATA 0,0,0,254
2642 DATA 0,0,0,0
2643 DATA 8128,0,0,126
2644 DATA 8176,0,0,254
2645 DATA 8184,0,0,254
2646 DATA 8190,0,0,510
2647 DATA 8191,-16384,0,1022
2648 DATA 8191,-4096,0,4094
2649 DATA 8191,-512,0,16382
2650 DATA 8191,-128,3,-2
2651 DATA 8188,-32,63,-2
2652 DATA 8160,16376,1023,-2
2653 DATA 8128,2047,16383,-2
2654 DATA 0,511,-1,-2
2655 DATA 0,127,-1,-2
2656 DATA 8160,1023,-1,-3842
2657 DATA 8176,16383,-1,126
2658 DATA 8191,-1,-16,126
2659 DATA 8191,-1,-8,0
2660 DATA 8191,-1,-4098,126
2661 DATA 8191,-1,1023,-32642
2662 DATA 8191,-16,127,-3842
2663 DATA 8191,-256,31,-2
2664 DATA 8191,-4096,7,-2
2665 DATA 8191,0,1,-2
2666 DATA 8188,0,0,32766
2667 DATA 8176,0,0,4094
2668 DATA 8160,0,0,1022
2669 DATA 8128,0,0,510
2670 DATA 8128,0,0,254
2671 DATA 0,0,0,0
2672 DATA 0,0,0,126
2673 DATA 0,0,0,254
2674 DATA 0,0,0,254
2675 DATA 0,0,0,254
2676 DATA 0,0,0,510
2677 DATA 0,0,0,2046
2678 DATA 0,0,0,8190
2679 DATA 0,0,0,-2
2680 DATA 0,0,7,-2
2681 DATA 0,0,63,-2
2682 DATA 8128,0,511,-2
2683 DATA 8128,0,2047,-2
2684 DATA 8160,0,16383,-2
2685 DATA 8176,0,-1,-1026
2686 DATA 8191,-1,-1,-16258
2687 DATA 8191,-1,-2,126
2688 DATA 8191,-1,-16,0
2689 DATA 8191,-1,-128,0
2690 DATA 8191,-1,-512,0
2691 DATA 8191,-1,-64,0
2692 DATA 8191,-1,-8,126
2693 DATA 8176,0,8191,254
2694 DATA 8160,0,1023,-7682
2695 DATA 8128,0,63,-2
2696 DATA 8128,0,15,-2
2697 DATA 0,0,1,-2
2698 DATA 0,0,0,32766
2699 DATA 0,0,0,4094
2700 DATA 0,0,0,1022
2701 DATA 0,0,0,510
2702 DATA 0,0,0,254
2703 DATA 0,0,0,254
2704 DATA 0,0,0,0
2705 DATA 8128,0,63,-2
2706 DATA 8184,0,63,-2
2707 DATA 8191,-32768,63,-2
2708 DATA 8191,-4096,15,-2
2709 DATA 8191,-512,0,32766
2710 DATA 8191,-64,0,4094
2711 DATA 8191,-8,0,2046
2712 DATA 8191,-1,0,1022
2713 DATA 8191,-1,-8192,510
2714 DATA 8159,-1,-4096,254
2715 DATA 8131,-1,-1024,254
2716 DATA 8128,-1,-256,254
2717 DATA 8128,8191,-16,126
2718 DATA 8160,1023,-2,126
2719 DATA 8160,127,-1,-16258
2720 DATA 8176,15,-1,-1922
2721 DATA 8184,1,-1,-130
2722 DATA 8188,0,16383,-2
2723 DATA 8190,0,2047,-2
2724 DATA 8191,-32768,255,-2
2725 DATA 8191,-8192,31,-2
2726 DATA 8191,-256,3,-2
2727 DATA 8191,-128,0,32766
2728 DATA 8191,-128,0,4094
2729 DATA 8191,-128,0,510
2730 DATA 0,0,0,0
2731 DATA 0,0,7,-2048
2732 DATA 0,0,63,-128
2733 DATA 0,0,127,-32
2734 DATA 508,0,255,-16
2735 DATA 2047,16352,255,-8
2736 DATA 4095,-16392,127,-4
2737 DATA 4095,-16386,63,-2052
2738 DATA 4095,-16385,-32753,510
2739 DATA 2047,16383,-16384,254
2740 DATA 1022,16383,-4096,254
2741 DATA 0,255,-2048,254
2742 DATA 0,31,-512,254
2743 DATA 0,15,-256,254
2744 DATA 0,7,-128,510
2745 DATA 0,1,-32,1020
2746 DATA 0,0,-4,4092
2747 DATA 0,0,32767,-8
2748 DATA 0,0,16383,-8
2749 DATA 0,0,8191,-16
2750 DATA 0,0,4095,-64
2751 DATA 0,0,1023,-128
2752 DATA 0,0,255,-1024
2753 DATA 0,0,7,-16384
2754 DATA 0,0,0,0
2755 DATA 0,7,-512,0
2756 DATA 0,1023,-8,0
2757 DATA 0,8191,-1,-32768
2758 DATA 0,-1,-1,-4096
2759 DATA 7,-1,-1,-1024
2760 DATA 31,-1,-1,-256
2761 DATA 127,-1,-1,-128
2762 DATA 255,-64,127,-32
2763 DATA 1023,-2048,3,-16
2764 DATA 2047,-32768,0,32760
2765 DATA 2044,0,0,4092
2766 DATA 4088,0,0,1020
2767 DATA 4080,0,0,508
2768 DATA 8160,0,0,254
2769 DATA 8128,0,0,254
2770 DATA 8128,0,0,126
2771 DATA 8128,0,0,126
2772 DATA 8128,0,0,254
2773 DATA 8160,0,0,254
2774 DATA 8176,0,0,510
2775 DATA 4080,0,0,2044
2776 DATA 2046,0,0,8184
2777 DATA 1023,-32768,0,32760
2778 DATA 511,-2048,3,-16
2779 DATA 255,-64,127,-32
2780 DATA 31,-1,-1,-256
2781 DATA 7,-1,-1,-1024
2782 DATA 0,-1,-1,-4096
2783 DATA 0,8191,-1,-32768
2784 DATA 0,1023,-8,0
2785 DATA 0,7,-512,0
2786 DATA 0,0,0,0
2787 DATA 8128,0,0,254
2788 DATA 8160,0,0,510
2789 DATA 8176,0,0,1022
2790 DATA 8191,-1,-1,-2
2791 DATA 8191,-1,-1,-2
2792 DATA 8191,-1,-1,-2
2793 DATA 8191,-1,-1,-2
2794 DATA 8191,-1,-1,-2
2795 DATA 8191,-1,-1,-2
2796 DATA 8191,-1,-1,-2
2797 DATA 8176,0,0,0
2798 DATA 8160,0,0,0
2799 DATA 8128,0,0,0
2800 DATA 0,0,0,0
2801 DATA 3968,0,7,-256
2802 DATA 2046,0,31,-64
2803 DATA 1023,-4096,63,-16
2804 DATA 511,-512,63,-8
2805 DATA 511,-64,63,-4
2806 DATA 511,-16,63,-4
2807 DATA 511,-8,63,-2
2808 DATA 511,-4,15,-7938
2809 DATA 511,-1,0,126
2810 DATA 511,-1,-32768,126
2811 DATA 511,-4097,-16384,126
2812 DATA 1023,-7681,-4096,126
2813 DATA 1023,-7937,-2048,126
2814 DATA 2047,-8129,-512,254
2815 DATA 2047,-8161,-128,254
2816 DATA 4095,-16369,-32,1022
2817 DATA 4095,-32761,-1,8190
2818 DATA 4095,-32767,-1,-4
2819 DATA 8191,0,-1,-8
2820 DATA 8191,0,16383,-16
2821 DATA 4094,0,4095,-64
2822 DATA 4094,0,1023,-256
2823 DATA 2046,0,127,-2048
2824 DATA 1023,0,0,0
2825 DATA 255,0,0,0
2826 DATA 7,-16384,0,0
2827 DATA 0,0,0,0
2828 DATA 31,-8192,3,-2048
2829 DATA 255,-512,31,-128
2830 DATA 511,-256,63,-32
2831 DATA 1023,-128,127,-16
2832 DATA 2047,-128,127,-8
2833 DATA 4095,-128,127,-4
2834 DATA 4095,-256,63,-4
2835 DATA 8160,32256,15,-7938
2836 DATA 8128,1,-1024,254
2837 DATA 8128,1,-1024,126
2838 DATA 8128,1,-1024,126
2839 DATA 8128,1,-512,126
2840 DATA 8128,1,-512,254
2841 DATA 4064,3,-256,254
2842 DATA 4080,7,-128,510
2843 DATA 4088,31,-64,1022
2844 DATA 2047,127,-8,4092
2845 DATA 2047,-1,-1,-4
2846 DATA 1023,-1,-4097,-8
2847 DATA 511,-1,-6145,-16
2848 DATA 255,-1,-31745,-32
2849 DATA 127,-1,511,-128
2850 DATA 15,-8,63,-512
2851 DATA 1,-64,0,0
2852 DATA 0,0,0,0
2853 DATA 0,8184,0,0
2854 DATA 0,8188,0,0
2855 DATA 0,8191,-32768,0
2856 DATA 0,8191,-4096,0
2857 DATA 0,8191,-1024,0
2858 DATA 0,8187,-256,0
2859 DATA 0,8185,-64,0
2860 DATA 0,8184,32752,0
2861 DATA 0,8184,8188,0
2862 DATA 0,8184,2047,0
2863 DATA 8128,8184,511,-16384
2864 DATA 8128,8184,63,-4096
2865 DATA 8160,8184,15,-1024
2866 DATA 8176,8184,3,-256
2867 DATA 8191,-1,-1,-2
2868 DATA 8191,-1,-1,-2
2869 DATA 8191,-1,-1,-2
2870 DATA 8191,-1,-1,-2
2871 DATA 8191,-1,-1,-2
2872 DATA 8191,-1,-1,-2
2873 DATA 8191,-1,-1,-2
2874 DATA 8184,8184,0,0
2875 DATA 8160,8184,0,0
2876 DATA 8128,8184,0,0
2877 DATA 8128,8184,0,0
2878 DATA 0,0,0,0
2879 DATA 15,-256,4095,-2
2880 DATA 63,-64,16383,-2
2881 DATA 255,-32,32767,-2
2882 DATA 1023,-16,-1,-2
2883 DATA 2047,-16,-512,-2
2884 DATA 4095,-32,-512,16382
2885 DATA 4088,16320,-512,16380
2886 DATA 4080,1536,-512,16380
2887 DATA 8160,0,-512,16380
2888 DATA 8160,0,-512,16376
2889 DATA 8128,0,-512,32760
2890 DATA 8128,0,-512,32752
2891 DATA 8160,0,-512,-16
2892 DATA 8160,1,-512,-16
2893 DATA 4080,3,-512,-32
2894 DATA 4088,15,-1024,-32
2895 DATA 2047,127,-1024,-32
2896 DATA 1023,-1,-2048,-32
2897 DATA 511,-1,-4096,-32
2898 DATA 255,-1,-8192,32752
2899 DATA 63,-1,-16384,16368
2900 DATA 7,-1,0,4088
2901 DATA 0,32752,0,508
2902 DATA 0,0,0,0
2903 DATA 0,3,-256,0
2904 DATA 0,4095,-1,0
2905 DATA 0,-1,-1,-4096
2906 DATA 7,-1,-1,-1024
2907 DATA 31,-1,-1,-256
2908 DATA 63,-1,-1,-64
2909 DATA 255,-1,-1,-32
2910 DATA 511,-256,31,-16
2911 DATA 1023,-16384,0,-8
2912 DATA 2044,0,0,8188
2913 DATA 4088,3,-4096,2046
2914 DATA 4080,1,-2048,510
2915 DATA 8160,1,-1024,254
2916 DATA 8160,1,-1024,255
2917 DATA 8160,1,-1024,255
2918 DATA 4080,1,-1024,255
2919 DATA 4088,3,-1024,254
2920 DATA 2046,15,-993,-15362
2921 DATA 1023,-16257,-1985,-4
2922 DATA 511,-1,-3969,-8
2923 DATA 255,-1,-3969,-16
2924 DATA 127,-1,-16321,-32
2925 DATA 31,-1,-32737,-128
2926 DATA 7,-2,3,-512
2927 DATA 0,32752,0,0
2928 DATA 0,0,0,0
2929 DATA 0,0,127,-2
2930 DATA 0,0,127,-2
2931 DATA 0,0,127,-4
2932 DATA 0,0,127,-4
2933 DATA 0,0,1,-4
2934 DATA 0,0,0,32760
2935 DATA 0,0,0,16376
2936 DATA 0,0,0,16376
2937 DATA 0,0,0,16368
2938 DATA 0,0,0,16368
2939 DATA 7,-512,0,16368
2940 DATA 255,-8,0,16368
2941 DATA 1023,-1,-16384,16368
2942 DATA 2047,-1,-2048,32752
2943 DATA 4095,-1,-256,32752
2944 DATA 8191,-1,-32,32752
2945 DATA 8191,-1,-1,-16
2946 DATA 4095,-1,-1,-16
2947 DATA 2047,-32,255,-16
2948 DATA 1023,-1024,15,-8
2949 DATA 126,0,0,32760
2950 DATA 0,0,0,1020
2951 DATA 0,0,0,124
2952 DATA 0,0,0,12
2953 DATA 0,0,0,0
2954 DATA 0,-512,0,0
2955 DATA 31,-32,14,0
2956 DATA 63,-8,1023,-2048
2957 DATA 255,-2,4095,-256
2958 DATA 511,-1,16383,-128
2959 DATA 1023,-1,-1,-32
2960 DATA 2047,-1,-1,-16
2961 DATA 4095,127,-128,8184
2962 DATA 4088,31,-512,1020
2963 DATA 4080,7,-2048,508
2964 DATA 8176,3,-2048,254
2965 DATA 8160,3,-2048,126
2966 DATA 4064,3,-2048,127
2967 DATA 4064,3,-2048,127
2968 DATA 4080,3,-2048,127
2969 DATA 4088,7,-1024,254
2970 DATA 4092,15,-512,1022
2971 DATA 2047,63,-128,4092
2972 DATA 2047,-1,-1,-4
2973 DATA 1023,-1,-16385,-8
2974 DATA 511,-1,-24577,-32
2975 DATA 255,-2,2047,-128
2976 DATA 63,-4,511,-512
2977 DATA 7,-16,7,-32768
2978 DATA 0,32512,0,0
2979 DATA 0,0,0,0
2980 DATA 0,-2048,511,-32768
2981 DATA 15,-128,4095,-1024
2982 DATA 63,-64,16383,-512
2983 DATA 255,-32,-1,-64
2984 DATA 511,-32,-1,-16
2985 DATA 1023,-31,-1,-8
2986 DATA 2047,-61,-64,32764
2987 DATA 4095,-253,-512,4092
2988 DATA 4088,7,-2048,1022
2989 DATA 8176,7,-2048,510
2990 DATA 8160,7,-4096,254
2991 DATA 8160,7,-4096,254
2992 DATA 8160,7,-4096,254
2993 DATA 8160,3,-4096,254
2994 DATA 4080,0,0,510
2995 DATA 4092,0,0,1020
2996 DATA 2047,0,0,4092
2997 DATA 1023,-1024,0,32760
2998 DATA 255,-1,-1,-16
2999 DATA 127,-1,-1,-64
3000 DATA 31,-1,-1,-256
3001 DATA 3,-1,-1,-1024
3002 DATA 0,-1,-1,-4096
3003 DATA 0,4095,-1,0
3004 DATA 0,63,-32,0
3005 DATA 0,0,0,0
3006 DATA 127,-32768,0,0
3007 DATA 511,-16384,0,0
3008 DATA 1023,-8192,0,0
3009 DATA 32767,-8192,0,0
3010 DATA 16383,-8192,0,0
3011 DATA 2047,-16384,0,0
3012 DATA 127,-32768,0,0
3013 DATA 0,0,0,0
3014 DATA 127,-32768,0,0
3015 DATA 511,-16384,0,0
3016 DATA 1023,-8192,0,0
3017 DATA 2047,-8192,0,0
3018 DATA 1023,-8192,0,0
3019 DATA 511,-16384,0,0
3020 DATA 127,-32768,0,0
3021 DATA 0,0,0,0
3022 DATA 0,2040,31,-8192
3023 DATA 0,8188,63,-2048
3024 DATA 0,16382,127,-1024
3025 DATA 0,16382,127,-1024
3026 DATA 0,16382,127,-1024
3027 DATA 0,8188,63,-2048
3028 DATA 0,2040,15,-4096
3029 DATA 0,0,0,0
3030 DATA 0,2040,31,-8192
3031 DATA 0,8188,63,-2048
3032 DATA 0,-2,127,-1024
3033 DATA 15,-2,127,-1024
3034 DATA 15,-2,127,-1024
3035 DATA 0,-4,63,-2048
3036 DATA 0,2040,15,-4096
3037 DATA 0,0,0,0
3038 DATA 496,0,3,-64
3039 DATA 2044,0,2047,-8
3040 DATA 4094,31,-1,-4
3041 DATA 8191,16383,-1,-2
3042 DATA 8191,16383,-1,-2
3043 DATA 4094,31,-1,-4
3044 DATA 2040,0,2047,-8
3045 DATA 496,0,3,-64
3046 DATA 0,0,0,0
3047 DATA 0,0,0,2040
3048 DATA 0,0,0,8188
3049 DATA 0,0,1,-2
3050 DATA 0,0,7,-2
3051 DATA 0,0,0,16382
3052 DATA 0,0,0,8188
3053 DATA 0,0,0,2040
3054 DATA 0,0,0,0
3055 DATA 0,0,0,2040
3056 DATA 0,0,0,8188
3057 DATA 0,0,1,-2
3058 DATA 0,0,7,-2
3059 DATA 0,0,0,16382
3060 DATA 0,0,0,8188
3061 DATA 0,0,0,2040
3062 DATA 0,0,0,0
3063 DATA 0,1016,2032,0
3064 DATA 0,1016,2032,0
3065 DATA 0,1016,2032,0
3066 DATA 0,1016,2032,0
3067 DATA 0,1016,2032,0
3068 DATA 1023,-1,-1,-8
3069 DATA 1023,-1,-1,-8
3070 DATA 1023,-1,-1,-8
3071 DATA 1023,-1,-1,-8
3072 DATA 0,1016,2032,0
3073 DATA 0,1016,2032,0
3074 DATA 0,1016,2032,0
3075 DATA 1023,-1,-1,-8
3076 DATA 1023,-1,-1,-8
3077 DATA 1023,-1,-1,-8
3078 DATA 1023,-1,-1,-8
3079 DATA 0,1016,2032,0
3080 DATA 0,1016,2032,0
3081 DATA 0,1016,2032,0
3082 DATA 0,1016,2032,0
3083 DATA 0,1016,2032,0
3084 DATA 0,0,0,0
3085 DATA 0,1016,2032,0
3086 DATA 0,1016,2032,0
3087 DATA 0,1016,2032,0
3088 DATA 0,1016,2032,0
3089 DATA 0,1016,2032,0
3090 DATA 0,1016,2032,0
3091 DATA 0,1016,2032,0
3092 DATA 0,1016,2032,0
3093 DATA 0,1016,2032,0
3094 DATA 0,1016,2032,0
3095 DATA 0,1016,2032,0
3096 DATA 0,1016,2032,0
3097 DATA 0,1016,2032,0
3098 DATA 0,1016,2032,0
3099 DATA 0,1016,2032,0
3100 DATA 0,1016,2032,0
3101 DATA 0,0,0,0
3102 DATA 0,2016,0,0
3103 DATA 0,16380,0,0
3104 DATA 0,-2,0,0
3105 DATA 3,-2,255,-16384
3106 DATA 7,-4,2047,-2048
3107 DATA 15,-4,4095,-1024
3108 DATA 31,-32,8191,-256
3109 DATA 31,-8192,-7,-128
3110 DATA 8191,-1,-1,-2
3111 DATA 8191,-1,-1,-2
3112 DATA 8191,-1,-1,-2
3113 DATA 8191,-1,-1,-2
3114 DATA 8191,-1,-1,-2
3115 DATA 31,-4033,-256,32512
3116 DATA 31,-3585,-512,32640
3117 DATA 15,-1,-2045,-128
3118 DATA 7,-1,-4033,-256
3119 DATA 3,-1,-8065,-512
3120 DATA 0,32767,-32641,-1024
3121 DATA 0,8190,127,-4096
3122 DATA 0,224,63,-16384
3123 DATA 0,0,0,0
3124 DATA 0,31,-512,0
3125 DATA 0,511,-32,0
3126 DATA 0,2047,-4,0
3127 DATA 0,8191,-2,0
3128 DATA 0,16383,-1,-32768
3129 DATA 0,-1,-1,-32768
3130 DATA 0,-32,511,-16384
3131 DATA 1,-512,31,-8192
3132 DATA 8185,-1024,7,-6146
3133 DATA 8185,-2048,3,-6146
3134 DATA 8185,-2048,3,-6146
3135 DATA 8185,-2048,3,-6146
3136 DATA 8185,-2048,3,-6146
3137 DATA 1,-1024,7,-8192
3138 DATA 1,-256,31,-8192
3139 DATA 0,-32,511,-16384
3140 DATA 0,32764,2047,-32768
3141 DATA 0,8190,2047,0
3142 DATA 0,4094,2044,0
3143 DATA 0,1022,1008,0
3144 DATA 0,0,0,0
3145 DATA 0,7,-512,0
3146 DATA 0,7,-512,0
3147 DATA 0,7,-512,0
3148 DATA 0,7,-512,0
3149 DATA 0,7,-512,0
3150 DATA 0,7,-512,0
3151 DATA 0,7,-512,0
3152 DATA 0,7,-512,0
3153 DATA 0,7,-512,0
3154 DATA 0,7,-512,0
3155 DATA 0,7,-512,0
3156 DATA 0,7,-512,0
3157 DATA 0,7,-512,0
3158 DATA 0,7,-512,0
3159 DATA 0,7,-512,0
3160 DATA 0,0,0,0
3161 DATA 0,7,-512,0
3162 DATA 0,7,-512,0
3163 DATA 0,7,-512,0
3164 DATA 0,7,-512,0
3165 DATA 0,7,-512,0
3166 DATA 0,7,-512,0
3167 DATA 1,-1,-1,-2048
3168 DATA 1,-1,-1,-2048
3169 DATA 1,-1,-1,-2048
3170 DATA 1,-1,-1,-2048
3171 DATA 0,7,-512,0
3172 DATA 0,7,-512,0
3173 DATA 0,7,-512,0
3174 DATA 0,7,-512,0
3175 DATA 0,7,-512,0
3176 DATA 0,7,-512,0
3177 DATA 0,0,0,0
3178 DATA 31,-2048,0,0
3179 DATA 7,-512,0,0
3180 DATA 1,-128,0,0
3181 DATA 0,32736,0,0
3182 DATA 0,8184,0,0
3183 DATA 0,2046,0,0
3184 DATA 0,511,-32768,0
3185 DATA 0,127,-8192,0
3186 DATA 0,31,-2048,0
3187 DATA 0,7,-512,0
3188 DATA 0,1,-128,0
3189 DATA 0,0,32736,0
3190 DATA 0,0,8184,0
3191 DATA 0,0,2046,0
3192 DATA 0,0,511,-32768
3193 DATA 0,0,127,-8192
3194 DATA 0,0,0,0
3195 DATA 7,-16,0,0
3196 DATA 63,-4,0,0
3197 DATA 255,-1,0,0
3198 DATA 511,-1,-16321,-1024
3199 DATA 1023,-1,-2049,-128
3200 DATA 2047,-32705,-1,-32
3201 DATA 4094,15,-1,-16
3202 DATA 4092,127,-1,-8
3203 DATA 8188,1023,-1,-4
3204 DATA 8188,8191,-2,60
3205 DATA 8188,-1,-128,60
3206 DATA 4095,-1,-64,124
3207 DATA 4095,-1,-16448,124
3208 DATA 2047,-8,8128,252
3209 DATA 1023,-64,8176,1016
3210 DATA 2047,-64,4092,4080
3211 DATA 4095,-32,2047,-32
3212 DATA 4095,-24608,511,-64
3213 DATA 4094,4064,255,-256
3214 DATA 4088,2016,31,-4096
3215 DATA 4080,2016,0,0
3216 DATA 2016,1984,0,0
3217 DATA 992,1792,0,0
3218 DATA 240,0,0,0
3219 DATA 56,0,0,0
3220 DATA 0,0,0,0
3221 DATA 0,0,0,0
4033 DATA 33,1038,8
4034 DATA 34,1047,7
4035 DATA 35,1063,21
4036 DATA 36,1102,21
4037 DATA 38,1195,25
4038 DATA 39,1055,7
4039 DATA 43,1161,16
4040 DATA 44,1006,7
4041 DATA 45,1145,15
4042 DATA 46,1014,7
4043 DATA 47,1178,16
4044 DATA 48,755,31
4045 DATA 49,787,13
4046 DATA 50,801,26
4047 DATA 51,828,24
4048 DATA 52,853,25
4049 DATA 53,879,23
4050 DATA 54,903,25
4051 DATA 55,929,24
4052 DATA 56,954,25
4053 DATA 57,980,25
4054 DATA 58,1022,7
4055 DATA 59,1030,7
4056 DATA 61,1085,16
4057 DATA 63,731,23
4058 DATA 64,1124,20
4059 DATA 65,0,33
4060 DATA 66,34,26
4061 DATA 67,61,27
4062 DATA 68,89,23
4063 DATA 69,113,24
4064 DATA 70,138,24
4065 DATA 71,163,29
4066 DATA 72,193,29
4067 DATA 73,223,13
4068 DATA 74,237,24
4069 DATA 75,262,27
4070 DATA 76,290,22
4071 DATA 77,313,33
4072 DATA 78,347,32
4073 DATA 79,380,31
4074 DATA 80,412,25
4075 DATA 81,438,32
4076 DATA 82,471,27
4077 DATA 83,499,24
4078 DATA 84,524,23
4079 DATA 85,548,29
4080 DATA 86,578,32
4081 DATA 87,611,31
4082 DATA 88,643,28
4083 DATA 89,672,32
4084 DATA 90,705,25
4256 DATA 0,0,0
```
{% endraw %}

## PRINTES1.BAS

{% raw %}
```bas
10 'PRINTER SPEED TEST
20 'ADAPTED FROM PC MAGAZINE ISSUE OF 10/83
30 NLINES = 50          'NUMBER OF LINES TO TIME
40 TEST$ = "Here is a line of text, representative of normal typing.   1234567"
50 LTEST = LEN(TEST$)   'LENGTH OF TEST LINE
60 CLS
70 LINE INPUT "SPECIFY PRINTER MAKE AND MODEL: ";MODEL$
80 LINE INPUT "IS THE PRINTER BUFFERED? (Y/N) ";BUFF$
90 IF BUFF$ = "" THEN 80
100 BUFF$ = CHR$ (ASC(BUFF$) AND 95)
110 IF BUFF$ = "Y" THEN GOSUB 530
120 GOSUB 430
130 LPRINT SPECIAL$;
140 PRINT "INSERT PAPER AND PRESS 'ENTER' KEY TO BEGIN TEST."
150 LINE INPUT START$
160 LPRINT
170 LPRINT "PRINTER SPEED TEST, "; MODEL$, DATE$
180 LPRINT
190 TIME$ = "0"
200 FOR LOOP = 1 TO NLINES
210 LPRINT TEST$
220 NEXT LOOP
230 IF BUFF$ <> "Y" THEN 250
240 PRINT "REMEMBER TO PRESS A KEY...."
250 APAUSE$ = INKEY$
260 IF APAUSE$ = "" THEN 250
270 ELAPSED$ = TIME$
280 MINS$ = MID$(ELAPSED$,4,2)
290 SECS$ = RIGHT$(ELAPSED$,2)
300 MINUTES = VAL(MINS$)
310 SECONDS = VAL(SECS$)
320 TOTSECONDS = (MINUTES * 60) + SECONDS
330 TOTMIN = MINUTES + (SECONDS/60)
340 TOTCHARS = LTEST * NLINES
350 THROUGHPUT = TOTCHARS/TOTSECONDS
360 LPRINT
370 LPRINT "THROUGHPUT REPORT FOR ";MODEL$
380 LPRINT "ELAPSED TIME = ";TOTSECONDS; " SECONDS FOR"; NLINES; " LINES OF TEXT    ."
390 LPRINT THROUGHPUT; " CHARACTERS PER SECOND FOR"; TOTCHARS; "CHARACTERS."
400 LPRINT NLINES/TOTMIN " LINES PER MINUTE."
410 LPRINT CHR$(12)
420 END
430 'GATHER SPECIAL CHARACTERS FROM KEYBOARD AND SEND THEM TO THE PRINTER.
440 PRINT "ENTER SPECIAL CHARACTERS BY PRESSING THE KEYSTROKES YOU WISH"
450 PRINT "TO TRANSMIT TO THE PRINTER.  PRESS 'ENTER' WHEN DONE."
460 SPECIAL$ = ""
470 WHILE X$ <> CHR$(13)
480     X$ = INKEY$
490     IF X$ = CHR$(13) THEN GOTO 510
500     SPECIAL$ = SPECIAL$ + X$
510 WEND
520 RETURN
530 'SET UP FOR KEYBOARD CONTROL OF TIMING.
540 PRINT:PRINT "THE COMPUTER WILL START THE CLOCK."
550 PRINT "THE PRINTER'S BELL WILL SOUND WHEN IT IS DONE PRINTING."
560 PRINT "PRESS ANY KEY WHEN YOU HEAR THE BELL OR WHEN PRINTING STOPS."
570 PRINT "THIS WILL STOP THE CLOCK."
580 PRINT
590 RETURN
```
{% endraw %}

## PRINTFIX.DOC

{% raw %}
```

MAY CURE PROBLEM OF CHARACTERS/LINES BEING DROPPED BY PRINTER
OR DEVICE TIME OUT WHEN PRINTER BUFFER IS FULL.

IF YOU ARE HAVING SUCH PROBLEMS, ENTER "PRINTFIX" FROM THE DOS PROMPT
BEFORE RUNNING YOUR PROGRAM.

```
{% endraw %}

## PRTPAGE.DOC

{% raw %}
```
PRint with pagination (V 1.0) (C) Copyright (04 Nov 1983). Serial #000100.
   by Daniel M. O'Brien, 1601 Burlington, Lisle, IL  60532

 This is User-Supported Software. A contribution (10 dollars suggested) will be
 appreciated if you find this software useful. In any case, you are encouraged
 to copy this program and share it with others.

Usage: pr file +s'sfile' -p +n -h +h'H' +oK +lK +wK
       file  : print file as drive:name.ext
       +s    : spool to sfile instead of to printer
             : (sfile as drive:name.ext)
       -p    : do not pause for top-of-form adjust
       +n    : provide line numbering
       -h    : suppress header of date, time, file
       +h'H' : use H as part of header instead of file
       +oK   : offset from left by K blanks (default K=0)
       +lK   : page length is K lines (default K=66)
       +wK   : width of line is K chars (default K=80)
```
{% endraw %}

## SCNMAP.BAS

{% raw %}
```bas
1 ' (PC)^3 Software Submission SCNMAP authored on February 4, 1983 by
2 '
3 ' Michael Csontos, 3228 Livonia Center Road, Lima, New York 14485
4 '
5 ' Copyright 1983 Michael Csontos
6 '
7 '  This program is made freely available non-exclusively to the Picture
8 '  City Personal Computer Programmers' Club for distribution to its members
9 '  and through software exchange to other users groups as long as credit is
10 ' given to the author and (PC)^3.
11 '
15 '
16 '
10000 CLS:SCREEN 0,0,0:WIDTH 80:KEY OFF:WIDTH "lpt1:",255:DEFINT A-Z
10100 PRINT "This program will cause the Epson printer (with script capability) to make
10200 PRINT "a form that can be used to lay-out screen formats for the IBM color-graphics
10300 PRINT "adapter card in the alpha-numeric mode in either the 40 or 80 column width.
10400 PRINT "You may choose either a blank form or one with each character position filled
10500 PRINT "with the address of the memory location corresponding to that position.
10600 PRINT
10700 PRINT "Do you want: 1) a blank 40 width form,
10800 PRINT " or          2) a filled 40 width form,
10900 PRINT " or          3) a blank 80 width form,
11000 PRINT " or          4) a filled 80 width form,
11100 PRINT " or          <Esc> to end the program.
11200 PRINT:PRINT "Please press 1, 2, 3, 4, or <Esc>.
11300 X$=INKEY$:IF X$="" THEN 11300 ELSE IF X$=CHR$(27) THEN 11700 ELSE A=VAL(X$)
11350 ON ERROR GOTO 11650
11400 IF A>4 OR A<1 THEN 11200
11500 IF A=1 OR A=2 THEN 11800
11600 IF A=3 OR A=4 THEN 14500
11650 RESUME
11700 CLS:KEY ON:END
11800 LPRINT CHR$(27)CHR$(64)CHR$(15)CHR$(27)CHR$(48)'reset;compressed;1/8" lines
11900 IF A=1 THEN LPRINT "Blank layout for screen graphics for the IBM Personal Computer Color Graphics Adapter Card in the 40 column width mode.":LPRINT:GOTO 12100
12000 LPRINT "Memory map of the screen graphics RAM for the IBM Personal Computer Color Graphics Adapter Card in the 40 column width A/N mode.":LPRINT
12100 LPRINT CHR$(27)CHR$(45)CHR$(1);:FOR L=25 TO 1 STEP -1:LPRINT USING "|  ##";L;:NEXT L:LPRINT CHR$(27)CHR$(45)CHR$(0)'underlined
12200 FOR M=1 TO 40
12300 LPRINT CHR$(27)CHR$(51)CHR$(1);'1/216" lines (effectively no LF)
12400 FOR N=1 TO 26:LPRINT CHR$(156);:LPRINT STRING$(4," ");:NEXT N:LPRINT
12500 IF A=1 THEN LPRINT:GOTO 12800
12600 LPRINT CHR$(27)CHR$(83)CHR$(1);'subscript
12700 FOR L=0 TO 24 STEP 1:LPRINT USING " ####";(80*(25-L))-(80-2*M+1)-1;:NEXT L:LPRINT
12800 LPRINT CHR$(27)CHR$(49)CHR$(27)CHR$(84)CHR$(27)CHR$(72)'7/72" lines;cancel script; cancel double strike;line feed
12900 LPRINT CHR$(27)CHR$(51)CHR$(1):LPRINT:LPRINT '1/216" lines (effectively no LF)
13000 LPRINT CHR$(27)CHR$(45)CHR$(1);'underline
13100 FOR N=1 TO 26:LPRINT CHR$(156);:LPRINT STRING$(4," ");:NEXT N:LPRINT USING "##";M
13200 LPRINT CHR$(27)CHR$(45)CHR$(0);'cancel underline
13300 IF A=1 THEN LPRINT:GOTO 13600
13400 LPRINT CHR$(27)CHR$(83)CHR$(0);'superscript
13500 FOR L=0 TO 24 STEP 1:LPRINT USING " ####";(80*(25-L))-(80-2*M)-1;:NEXT L:LPRINT
13600 LPRINT CHR$(27)CHR$(49)CHR$(27)CHR$(84)CHR$(27)CHR$(72) '7/72" lines;cancel script; cancel double strike;line feed
13700 NEXT M
13800 LPRINT CHR$(27)CHR$(65)CHR$(2)'line feed 2/72"
13900 FOR L=25 TO 1 STEP -1:LPRINT USING "|  ##";L;:NEXT L:LPRINT
14000 LPRINT CHR$(15)CHR$(27)CHR$(48);'compressed;1/8" lines
14100 IF A=1 THEN LPRINT:LPRINT "In the above chart each block represents a character (pel).":GOTO 14400
14200 LPRINT:LPRINT "In the above chart each block represents a character (pel). The upper number is the address of the character, the lower is the
14300 LPRINT "address of the attribute. To access these bytes in BASIC, use the instruction DEF SEG=&HB800 then PEEK(n) or POKE n,data.
14400 LPRINT CHR$(12);:ON ERROR GOTO 0:RUN
14500 C=80:R=25
14600 LPRINT CHR$(27)CHR$(64)CHR$(15)CHR$(27)CHR$(48)'reset;compressed;1/8" lines
14700 IF A=3 THEN LPRINT "Blank layout for screen graphics for the IBM Personal Computer Color Graphics Adapter Card in the 80 column width mode.":LPRINT:GOTO 14900
14800 LPRINT "Memory map of the screen graphics RAM for the IBM Personal Computer Color Graphics Adapter Card in the 80 column width A/N mode.":LPRINT
14900 LPRINT CHR$(27)CHR$(45)CHR$(1);:FOR L=25 TO 1 STEP -1:LPRINT USING "|  ##";L;:NEXT L:LPRINT CHR$(27)CHR$(45)CHR$(0);'underlined
15000 LPRINT CHR$(27)CHR$(65)CHR$(1)'1/72" lines
15100 FOR P=1 TO 5:LPRINT :NEXT P
15200 FOR M=1 TO C
15300 FOR N=1 TO R+1:LPRINT CHR$(156);:LPRINT STRING$(4," ");:NEXT N:LPRINT
15400 LPRINT CHR$(27)CHR$(83)CHR$(1);'subscript
15500 IF A=3 THEN FOR L=0 TO R-1 STEP 1:LPRINT "     ";:NEXT L:LPRINT USING "   ##";M:GOTO 15700
15600 FOR L=0 TO R-1 STEP 1:LPRINT USING " ####";(2*C*(R-L))-(2*C-2*M+1)-1;:NEXT L:LPRINT USING "   ##";M
15700 LPRINT CHR$(27)CHR$(84)CHR$(27)CHR$(72);'cancel script; cancel double strike
15800 LPRINT CHR$(27)CHR$(45)CHR$(1);'underline
15900 FOR N=1 TO R+1:LPRINT CHR$(156);:LPRINT STRING$(4," ");:NEXT N:LPRINT "_"
16000 LPRINT CHR$(27)CHR$(45)CHR$(0);'cancel underline
16100 LPRINT CHR$(27)CHR$(83)CHR$(0);'superscript
16200 FOR P=1 TO 5:LPRINT:NEXT P
16300 LPRINT CHR$(27)CHR$(84)CHR$(27)CHR$(72);'cancel script; cancel double strike
16400 NEXT M
16500 FOR P=1 TO 6:LPRINT:NEXT P
16600 LPRINT CHR$(15)CHR$(27)CHR$(48);'reset;compressed;1/8" lines
16700 FOR L=R TO 1 STEP -1:LPRINT USING "|  ##";L;:NEXT L:LPRINT
16800 IF A=3 THEN LPRINT:LPRINT "In the above chart each block represents a character (pel).":GOTO 17100
16900 LPRINT:LPRINT "In the above chart each block represents a character (pel). The number is the address of the character, add one to this number for
17000 LPRINT "the address of the attribute. To access these bytes in BASIC, use the instruction DEF SEG=&HB800 then PEEK(n) or POKE n,data.
17100 LPRINT CHR$(12);:ON ERROR GOTO 0:RUN
17200 '         SAVE"scnmap.bas",a
```
{% endraw %}

## SETPRN.DOC

{% raw %}
```

 ---------------------------------------------------------------------------- 
| * SETPRN *  A printer utility for the IBM PC & PC-XT.  V. T. Bly  12/11/83 |
 ----------------------------------------------------------------------------

SUMMARY
-------
      SETPRN provides an easy method of setting printer parameters from the
  DOS command level or a batch file.  SETPRN is similar to the BASIC LPRINT
  command, except that control codes are enclosed in square brackets ("[]")
  instead of the "CHR$()" used in BASIC.  Also, text strings should not be
  enclosed in quotes.  Like LPRINT, the normal carriage return/line feed can
  be suppressed by a trailing semicolon (";") or comma (",").  A trailing
  semicolon will leave the print head at the end of the just printed text,
  while a comma will advance the print head to the next tab stop.


EXAMPLES
--------
      The following examples assume that the file SETPRN.COM is on the
  default disk drive.  Note that "<enter>" means that you should press
  the enter/return key after typing the command. 
 
 SETPRN Testing 0123456789 <enter>
	This command will simply print the string "Testing 0123456789" on
	the printer and drop down to the next line.
 
 SETPRN Merry Christmas; <enter>
	This command will print the string "Merry Christmas" on the printer,
	but NOT drop down to the next line.  Notice the trailing ";" which
	suppresses the carriage return/line feed.  On some printers, "Merry
	Christmas" may not actually be printed until an output is sent to
	the printer which contains a carriage return.
 
 SETPRN [27]E; <enter>
	This command will send Escape E to the printer.  This sequence turns
	on emphasized printing on the IBM and Epson dot matrix printers.
 
 SETPRN [27]!Boldface Title[27]" <enter>
	This command will print the string "Boldface Title" in boldface on
	the C. Itoh and NEC dot matrix printers and drop down to the next
	line.  With these printers, Escape ! starts boldface printing and
	Escape " stops boldface printing.  Note that the quote symbol (") may
	be included in the SETPRN command line, just like any other character.


NOTES
-----
      Any printable character may be included in the SETPRN command line
  except the left square bracket ("["), which is used as the prefix to a
  control code.  This character may be included by enclosing its ASCII code
  (91) between square brackets; that is "[91]".

      SETPRN should work correctly on any IBM compatible computer operating
  under MS-DOS.  It should work with any version of MS-DOS, including 1.0,
  1.05, 1.1, 2.0, and 2.1.

      Please send your comments to:  Vincent Bly
				     Post Office Box 409
				     Ft. Belvoir, VA  22060
```
{% endraw %}

## SWPTR.DOC

{% raw %}
```
			   SWAP PRINTERS COMMAND

			Written by Thomas M. Rowlett



     The Swap Printers (SWPTR) Command provides the capability to logically
swap the printer defined as LPT1: with the printer defined as LPT2:.  This
can be very useful to IBM PC owners who have printers connected to the two
(2) parallel ports of their PCs.  I developed the assembly language program
so that I could easily use either one of my two printers with many of my
application programs that use LPT1: exclusively, without having to recable
the printers or use an A-B Switch Box every time I wanted to swap them.

     An example would be if one were using WordStar to print a draft of a
document using a dot matrix printer, then a final copy is desired using a
letter quality printer. Normally, one would have to disconnect the dot
matrix printer and connect the letter quality printer to the LPT1: port.  By
having a second printer port (LPT2:) and using the SWPTR command from
WordStar (Run a Program option from the main menu of WordStar), one can
logically swap LPT1: with LPT2: so that the output directed to LPT1: is
printed on the printer attached to LPT2:.  No cables to disconnect and
reconnect!  No pins bent or broken!  Just remain in the comfort of your
chair and let the computer do the printer swapping.  When it is desired to
swap the printers back to their original assignments, just run SWPTR again.

     SWPTR initializes both printers when a swap takes place.  This was
necessary because some printers would not operate after the swap.  An
optional input of an "i" or "I" in the command line  (for example, "SWPTR
I") specifies that only an "inspect" of the printer assignment is desired.
Like all DOS Commands, upper or lower case letters may be used.  Executing
the inspect option does not cause either printer to be initialized.

     SWPTR, when linked, becomes a COMmand file of DOS so it can be executed
like the DOS Commands MODE or DISKCOPY.  This usually requires executing
SWPTR before the application program.  Some programs, like WordStar, provide
a way to execute a DOS Command without exiting.  SWPTR works very well from
those programs.

     Since the time I first developed this command, I have seen several
examples in other publications on how to make use of two printers connected
to the same IBM PC.  All the articles proposed using a BASIC program to do
the swapping.  I feel this assembly language program, SWPTR, offers much
more flexibility than the BASIC programs because it operates as a DOS
Command.

     Please enjoy the flexibility offered by SWPTR.  You no longer have to
swap printer cables or connectors to be able to direct your printer output
to LPT2:  instead of LPT1:.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0326

     Volume in drive A has no label
     Directory of A:\

    BUZOFF   COM       128   4-24-83   8:36a
    COLRVIEW EXE     16000   2-21-85   5:57p
    EMBEDDED BAS       896   3-02-83   7:37p
    FASTPRT  COM       366   6-02-83  10:07p
    FASTPRT  DOC      5834  10-21-84   6:38p
    FILES326 TXT      3011  10-17-88   9:11a
    FORMFEED COM        10  11-26-82   3:30p
    FORMFEED DOC        90   3-06-84  11:05p
    FSPOOL   COM      5120  11-16-84   5:40a
    FSPOOL   DOC      1892  11-13-84   7:29a
    FXPR4    DOC      8388   8-22-83   7:03p
    FXPR4    EXE     20224   8-22-83   1:42p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1695  10-10-88  10:05a
    GRAF     COM      1353   4-29-84   8:49p
    GRAF     DOC      2321   4-29-84   5:51p
    JUST-LQ  EXE     23936   1-15-85   9:28p
    JUSTIFY  DOC      3978   5-26-84   4:26p
    JUSTIFY  EXE     17792   5-26-84   4:22p
    LABEL    EXE     23680  12-24-84   3:27p
    P        COM      2688   1-01-80  12:19a
    PERFSKIP COM       384  10-12-84   4:27p
    PERFSKIP DOC       896  10-12-84   4:27p
    PLOTTER  BAS      3497  10-20-84   7:40a
    POSTER   BAS     31590   6-09-83   9:29p
    PRINTES1 BAS      2560   9-19-83   8:06a
    PRINTFIX COM       112   6-30-83   8:12p
    PRINTFIX DOC       219   4-01-84   3:32p
    PRTPAGE  DOC       912  10-28-84  11:01a
    PRTPAGE  EXE     13312  12-13-83   2:35p
    SCNMAP   BAS      5888   2-24-83   6:20p
    SCNMAP   DOC      6742   2-24-83   7:05p
    SETPRN   COM       129  12-14-83  11:10a
    SETPRN   DOC      2816  12-14-83  10:10a
    SIDEWAYS EXE     31104   8-27-84  12:24a
    SWPTR    COM       384   8-24-83   7:13a
    SWPTR    DOC      2754   8-24-83   7:47a
           37 file(s)     242739 bytes
                           61440 bytes free
