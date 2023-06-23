---
layout: page
title: "PC-SIG Diskette Library (Disk #538)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0538/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0538"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "ASTRONOMY #1"

    MOONBEAM is a program that takes the date and time, as well as your time
    zone, and gives you general information regarding the position of the
    moon and its relationship to Earth. SUNSET accepts the date, time and
    location of position and displays general information about the sun in
    relation to Earth. SOLAR is a duplicate of the SUNSET program mentioned
    above, with some slight variations.
    
    OPTICS gets optical parameters from the sophisticated lens user and
    returns a myriad of technical information about reflecting lenses or
    telescopes.
    File Descriptions:
    
    OPTICS   PAS  Source code in Pascal for OPTICS.
    OPTICS   COM  Executable code to run OPTICS.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES538.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  538  Astronomy Collection #1                               v1 DS2
---------------------------------------------------------------------------
Moonbeam is a program that takes the date and time, as well as your time zone,
and gives you a lot of general information regarding the position of the moon
and its relationship to Earth.
 
Sunset accepts the date, time and location of position and displays general
information about the sun in relation to Earth.
 
Solar is a duplicate of the Sunset program mentioned above, with some slight
variations.
 
Optics gets optical parameters from the sophisticated lens user and returns a
myriad of technical information about reflecting lenses or telescopes.
 
Storm is an amusing program which accepts detailed storm infor- mation
incrementally by time and plots the movement of that storm in the area.
 
------------  Moonbeam (V1.0)
MOONBEAM COM  Executable program for Moonbeam
MOONBEAM DOC  Documentation for the use of the program
STAR     REC  Yale Observatory Bright Star database
------------  Sunset
SUNSET   BAS  Basic program in source code
------------  Solar
SOLAR    BAS  Basic program in source code
------------  Optics
OPTICS   COM  Executable code to run Optics
OPTICS   PAS  Source code in Pascal for Optics
------------  Storm
STORM    BAS  Storm program
STORM    DOC  Documentation for Storm.BAS
????????.     Files with no extensions are data files for storm program
 
PC-SIG (PC-Software Interest Group)
1030 East Duane Avenue, Suite D
Sunnyvale, CA  94086
(408) 730-9291
```
{% endraw %}

## MOONBEAM.DOC

{% raw %}
```
Hi,

        The program MOONBEAM determines the phase, position, and
illumination of the moon. It will also plot the moon on a screen
generated star chart using the Yale Observatory Bright Star 
database. To accomplish this the data base needed to be packed to
fit on a single floppy along with the program, hence this disk 
should have three files on it. 

                        1). This read.me file
                        2). moonbeam.com
                        3). star.rec

The plotting routine will not work if star.rec is not present in 
the default drive. Also, the ploting routine requires the something
that looks like an IBM Color Graphics Card. If you have a graphics
printer, the star chart can be printed by issuing the MS/DOS 
graphics command before running moonbeam. Then use the PRT SC command
when the star chart is on the crt. To start the program just type moonbeam.

					May clear skies be with you!

					Fred Mendenhall

```
{% endraw %}

## NOTES538.TXT

{% raw %}
```
Program name:    Moonbeam (V1.0)
 
Author name:     Fred T. Mendenhall
Address:         2209 Tam-O-Shanter Ct.
                 Carmel, IN  46032
Telephone Number:NONE
 
Suggested Donation:$5.00
 
Program Description:
 
Moonbeam is a nifty little software tool geared toward the
amateur and the professional astronomer. This program gets any
date, time and North American time zone and immediately outputs a
lot of statistical information about the moon. It indicates the
surface percentage of the visible moon, the angles of ascension
and declination, the azimuth, ets.  Once these facts have been
displayed, you are prompted as to whether you want a graphic
diagram of the night sky. If you have a monochrome or color
graphics card you will be able to display the starchart.  If you
have answered 'Y' to the prompt, you are then asked to what
degree you would like the stars plotted.  Entering a degree of 1
causes only the most brightly lit star≤ to be plotted and on the
other end of the spectrum you can enter a 7. I might warn you
that entering the 7 will cause the output to be generated in
about 5 minutes.  The moon is also displayed, of course.  The
star chart may be printed by pressing the shft-PrtSc keys to-
gether, provided you have a graphics printer. The star charts are
contained in a database file provided by the Yale Observatory.
This program requires a minimum of 128K RAM.  Additionally, the
graphic hardware will be needed to get the star chart displays.
 
 
Program name:      Sunset
 
Author name:       NONE
Address:           NONE
 
Telephone Number:  NONE
 
Suggested Donation:NONE
 
Program Description:
 
This appears to be a simple, but useful program for the amateur
astronomer and possibly a number of other people needing general
information about the sun in relation to Earth. The user enters
the date and time and location in longitude and latitude.  Soon
the time of sunrise and sunset (in both local and Grenich
Meantime), the angle of azmith, the declination of the sun and
the equation of time are displayed to the screen.  Since the
program is written in uncompiled BASIC, you must have a copy of
BASICA yourself. But, at the same time, you may also peek at the
source code to see how this program was put together.  This
program requires the most minimum in both hardware and software
to operate.
 
 
Program name:      Solar
 
Author name:       Michael A. Syczylo
Address:           NONE
 
Telephone Number:  NONE
 
Suggested Donation:NONE
 
Program Description:
 
This program closely parallels the previously described program,
Sunset.  According to the BASIC source code, this program is the
result of a sixth grade science project.  Since the results ob-
tained were close to those of the previously described program, I
would suspect that it is somewhat accurate and I would venture
that the source code is available through a number of sources.
The main difference between this program and that of Sunset is
that this program only computes the output for time zones in the
North American continent.  Minimum configurations and BASICA
needed.
 
 
Program name:       Optics
 
Author name:        NONE
Address:            NONE
 
Telephone Number:   NONE
 
Suggested Donation: NONE
 
Program Description:
 
Although an apparently sophisticated piece of software which
probably deserves merit in the area of mathematical calculations,
I cannot think of many uses for Optics.  It declares on the open-
ing screen that it computes various parameters for reflecting
telescopes.  I was hard pressed to find the input which would
lead to the secondary screen, which had calculated such things as
P.F. scale, Magnitude limit, Dawes limit, effective F-stop and
power and when I did, I was prompted for further information
(aperture, Mirror Field Length and Eyepiece F.L.).  The final
output was a chart of field of vision and astigma.  If you're
into telescopes or cameras to that degree maybe it will be of
use.  The pascal source code is provided along with the compiled
code and absolutely no documentation.
 
 
Program name:       Storm (V2.0)
 
Author name:        WHMC (modified by Thomas Pesek)
Address:            Sugarland TX
 
Telephone Number:   NONE
 
Suggested Donation: NONE
 
Program Description:
 
If meteorology is of great interest to you, or you may be in-
clined to write a graduate thesis regarding hurricane patterns in
the southeast, then this is definitely the program for you. This
program accepts data input from the user in the form of specific
storm statistics and plots the movement of the hurricane on a
nice map of the Caribbean and the southeast of North America. If
you enter one of the key cities, and the storm comes too close
then a warning is issued also.  Along with this program comes
several data files of hurricanes of the recent past, all with
their official names.  To get a good idea of what this program
does, I found it useful to load one of these data files and dis-
play the data and the output.  This program requires a minimum of
128K RAM and ideally a color graphics setup.  It will work with
the monochrome system, but doesn't look nearly as nice.
```
{% endraw %}

## SOLAR.BAS

{% raw %}
```bas
1             'SOLAR DATA PROGRAM
2             'SCIENCE PROJECT
3             'MICHAEL A. SYCZYLO
4             'SIXTH GRADE
5             'VALLEY MILLS ELEMENTRY SCHOOL
10     DIM N(12)
20 PL = 3.14159 / 26 : J = 57.29578 : K$ = CHR$(13)
21            'THIS DATA DEFINES THE
22            'LOCATION WHICH ALL
23            'CALCULATIONS ARE BASED.
24            'USER'S LOCAL DATA SHOULD
25            'BE INSERTED HERE.
26            'LC$   = CITY, STATE
27            'D1,M1 = LAT. (DEG,MIN)
28            'D2,M2 = LONG. (DEG,MIN)
29            'T$    = TIME ZONE (E,C,M,P)
30     LC$ = "INDIANAPOLIS, INDIANA" : D1 = 39 :M1 = 46 :D2 = 86 : M2 =  9 : T$        = "E"
40     KEY OFF : CLS
50     RESTORE : FOR I =1 TO 12 : READ N (I) : NEXT I
60     DATA 0,31,59,90,120,151
70     DATA 181,212,243,273,304,334
80     PRINT " THIS PROGRAM FINDS THE DECLINATION";                                  : PRINT " OF THE SUN, THE EQUATION OF TIME,"
90     PRINT " THE AZMITH ANGLES OF SUNRISE AND";                                    : PRINT " SUNSET, AND THE TIMES OF SUNRISE"
100    PRINT " AND SUNSET FOR ANY POINT IN";                                    : PRINT " NORTH AMERICA."
110    PRINT
120  RESTORE 122 : FOR I = 1 TO 10 : READ KEYDES$ : KEY I, KEYDES$ + K$ : NEXT            : KEY 9, "" : KEY ON
122 DATA "NLAT", "WLON", "ZONE", "MONTH", "DAY",  "CALC", "LOC", "PRTMO", " ", "END"
130    GOSUB 640                                                                     : GOTO 220
140 COLOR 10,0
141 LOCATE 5,1
142 PRINT SPC(79)
143 LOCATE 5,1
144 BEEP
145 INPUT "Select function", Z$
146 COLOR 10,0
147 BEEP
150 LOCATE 5,1
151 PRINT SPC(79)
152 LOCATE 5,1
153 IF Z$ = "END" THEN 720 ELSE IF Z$ = "NLAT" THEN 190 ELSE IF Z$ = "WLON" THEN    200 ELSE IF Z$ = "ZONE" THEN 210 ELSE IF Z$ = "MONTH" THEN 280 ELSE IF Z$ =     "DAY" THEN 300 ELSE IF Z$ = "PRTMO" THEN 730
160  IF Z$ = "CALC" THEN GOSUB 310 : GOTO 140 ELSE IF Z$ = "LOC" THEN 180
170  SOUND 350,8 :GOTO 140
180  LINE INPUT "LOCATION (CITY,STATE)"    ,LC$ :GOSUB 640 :GOTO 140
190  INPUT "NORTH LATITUDE (DEG,MIN)"; D1,M1 :GOSUB 640 :GOTO 140
200  INPUT "WEST LONGITUDE (DEG,MIN)"; D2,M2 : GOSUB 640 : GOTO 140
210  INPUT "TIME ZONE (E, C, M, P)";T$
220  IF T$ = "E" OR T$ ="e" THEN T$ ="E" : LO =75 : GOTO 270
230  IF T$ = "C" OR T$ = "c" THEN T$ = "C" : LO = 90 :GOTO 270
240  IF T$ = "M" OR T$ = "m" THEN T$ = "M" : LO = 105 : GOTO 270
250  IF T$ = "P" OR T$ = "p" THEN T$ = "P" : LO = 120 : GOTO 270
260  GOTO 210
270  GOSUB 640 : GOTO 140
280  INPUT "MONTH (1-12) ",M : GOSUB 640 : GOTO 140
290  IF Q$ = "p" OR Q$ = "P" THEN 700 : ELSE IF Q$ = "d" OR Q$ = "D" THEN 300         ELSE 221
300 INPUT "DAY OF MONTH (1-31) ",DA  : GOSUB 640 : GOTO 140
310  X =(N(M) + DA) / 7
320  LA = D1 + M1 / 60
330  TD = (D2+M2 / 60-LO) / 15
340 D=0.4560001-22.915 * COS(PL * X)- 0.43 * COS(2 * PL * X) - 0.156 * COS(3 * PL * X) + 3.83 * SIN(PL * X) + 0.06 * SIN(2 * PL * X) - 0.082 * SIN(3 * PL * X)
350  LOCATE 16,1 : PRINT STRING$(79,223) : LOCATE 17,1
360  PRINT USING "DECLINATION OF THE SUN:  ###.#";D;
370  PRINT " DEGREES"
380  E = 0.008000001 + 0.51* COS(PL * X) - 3.197* COS(2* PL * X) - 0.106* COS(3* PL * X) - 0.15* COS(4* PL * X) - 7.317001* SIN(PL * X) - 9.471001* SIN(2* PL * X) - 0.391* SIN(3* PL * X) - 0.242* SIN(4* PL * X)
390  PRINT USING "EQUATION OF TIME : ###.#"; E;
400  PRINT " MINUTES"
410  CL = COS(LA /J) : SD = SIN(D / J) : CD = COS(D /J) : Y = SD / CL
420  IF ABS(Y) =>1 THEN PRINT "NO SUNRISE OF SUNSET" : GOTO 140
430  Z = 90 - J * ATN(Y / SQR(1 - Y * Y))
440  F$ = "AZIMUTH OF SUNRISE:  ####.#" : PRINT USING F$; Z;
450  PRINT " DEGREES"
460  F$ = "AZIMUTH OF SUNSET:  ####.# " : PRINT USING F$; 360 - Z;
470  PRINT " DEGREES"
480 ST = SIN(Z / J) / CD
490  IF ABS(ST)> = 1 THEN T = 6 : TT = 6 : GOTO 520
500  CT = SQR(1 - ST * ST)
510 T=J/15 * ATN(ST / CT) : TT = T
520  IF D < 0 THEN T = 12 - T : TT = T
530  T = T + TD - E / 60 - 0.04
540  GOSUB 600
550  PRINT "TIME OF SUNRISE: " ; : PRINT T1$; ":"; T2$;  " " ; T$; ".S.T."
560  T = 12 - TT : T=T +TD - E / 60 + 0.04 : T3$ = T1$ : T4$ = T2$
570  GOSUB 600
580  PRINT "TIME OF SUNSET: "; : PRINT T1$; ":"; T2$; " " ; T$; ".S.T."
590  RETURN
600  T1 = INT(T) : T2 = T - T1 : T1$ = STR$(T1) : T2 = INT((T2 * 600 + 5) / 10)
610  T2$ = STR$(T2) : T2$ = RIGHT$(T2$, LEN(T2$) - 1)
620  IF INT(T2) < 10 THEN T2$ = "0" + T2$
630  RETURN
640  LOCATE 8,25 : COLOR 0,7 : PRINT " Present values " : COLOR 7,0 : PRINT
650  LOCATE 10,30 : PRINT STRING$(49,32) : LOCATE 10 : PRINT "Location name:                      ";  LC$
660  LOCATE 11 : PRINT "North Latitude:                      "; : PRINT USING   "###:##"; D1;M1
670  LOCATE 12 : PRINT "West Longitude:                      "; : PRINT USING   "###:##"; D2,M2
680  LOCATE 13 : PRINT "Time Zone:                           "; : PRINT USING   "!"; T$
690  LOCATE 14 : PRINT "Month:                               "; : PRINT USING   "##"; M
700  LOCATE 15 :PRINT "DAY:                                  "; : PRINT USING   "##"; DA
710  RETURN
720 KEY 1, "LIST " :KEY 2, "RUN" + K$ : KEY 3, "LOAD" + CHR$(34) : KEY 4, "SAVE" + CHR$(34) : KEY 5, "CONT" + CHR$(13) :CLS : KEY ON : WIDTH "LPT1:",80 : PRINT CHR$(27); CHR$(18) : END
730  LPRINT CHR$(15) :WIDTH "lpt1:",132
740  LPRINT "Solar Data for ";LC$; : LPRINT "      Latitude - ";D1;":";M1;: LPRINT "   LONGITUDE - ";D2;":";M2 :LPRINT
750  LPRINT "Month   Day  Declination    "; : LPRINT "  Equation of  Azimuth of   Azimuth"; : LPRINT " of    Time of    Time of "
760  LPRINT "              of Sun              "; : LPRINT "Time      Sunrise      Sunset"; : LPRINT "       Sunrise    Sunset"
765 ON M GOTO 830,850,870,890,910,930,950,970,990,1010,1030,1050
770  FOR DA = 1 TO ND
780  GOSUB 640 : GOSUB 310
790  F$="  ##    ##     ###.#            ###.#"
791 F$=F$ + "       ####.#      ####.#     "
792 LPRINT USING F$; M; DA; D; E; Z; 360 - Z;
800 LPRINT"   " T3$;   ":";T4$;"      ";  T1$ ;":";T2$
810  NEXT DA
820  LPRINT CHR$(12) : GOTO 140
830 ND=31
840 GOTO 1100
850 ND=28
860 GOTO 1100
870 ND=31
880 GOTO 1100
890 ND=30
900 GOTO 1100
910 ND=31
920 GOTO 1100
930 ND=30
940 GOTO 1100
950 ND=31
960 GOTO 1100
970 ND=31
980 GOTO 1100
990 ND=30
1000 GOTO 1100
1010 ND=31
1020 GOTO 1100
1030 ND=30
1040 GOTO 1100
1050 ND=31
1100 GOTO 770
```
{% endraw %}

## STORM.BAS

{% raw %}
```bas
100 ' **************************************************************
110 ' *******               HURRICANE TRACKER              *********
120 ' *******       From a program by WHMC - 7/27/84       *********
130 ' ******* modified by: Thomas Pesek, Sugar Land, Texas *********
140 ' *******            VERSION 2.0    10/24/85           *********
150 ' *******     With Hewlett Packard Plotter Support     *********
160 ' **************************************************************
170 KEY OFF:DEF SEG=0:POKE &H417, &H40
180 GOSUB 5880
190 GOSUB 4520
200 DEFINT I
210 DIM C$(15),D$(200),T$(200),X(200),Y(200),MAPXY(20,2),IMAP(200,2),E$(50),HURICARRAY(90),STOR.SCR(4002)
220 U$="&    &  ##.#  ###.#  ####.# MI    ##.# MPH  ###.# DEG &"
230 M$="& & ##.# ###.# "
240 V$="  &  &  ###.#  ###.#  ####.# MI  ##.# MPH ###.# DEG &"
250 MAP0$="F2G2F2D5L1G1F2G2L2M-20,+14M-2,+4L3M-4,+12D8M+4,+8M+4,+10D1F2G2M-3,+8D2G2L3U3M-5,-7L2U2E2U1H4U6H2U6H8L4G4H4L4U2G2L16D2F2D1G1F2L6G1L6M-6,-4G2M-12,-2G4M-16,+10D15G6D17F2M+12,+18M+10,+6R8F2R11U2M+5,-8U8M+15,-5F1R6M+2,+6G5D6G2M-2,+6"
260 MAP1$="L2U4G2D10G4D1M+4,+3R13E2F2R3F1R6D2M+2,+1R4F1G1F1D4G2D8G2D2F2G2F2D2F3D2R3M+7,+2M+12,-4R8M+8,+6M+8,-6R2U3M+5,-3R4E2R6M+12,-5F2D2G4D2R12E2U3E1R3F3R4F1D1R18F3M+19,-2D4R5M+6,+8M+10,+4" 'GULF SIDE AND SOUTH AMERICA
270 MAP2$="BM-16,-18L4U3R2E2R2F1D4L2BM-4,-14U1BM+2,-2U2BM-2,-2U1BM-1,-2U2BU3U1L1U1G3F1E1R1BM-6,-4U1BM-2,-2U1BM-2,-4U1BU2U1BH2U1BG4U1BL6L2BL4BU3G2L8U3H2RR2F1R5F2BL20" ' LITTLE ISLANDS PUERTO RICO
280 MAP3$="E2U2M-6,-2E2L3H1L2M-11,-3G2H1L6G2D1M+5,+3D4L12F3R13F4E4R3E2R4F1E2BL54L6G3R2F3R10E1U2L3H3BM-33,-18U2H1L2G1D2R4BL12BU6" ' HAITI , JAMAICA
290 MAP4$="E2R2U3R3E2M+10,-2M+10,+2F4R6D2M+11,+7R2F2R4F2R4D2M-10,+3H1L6M-9,+2E5H2M-7,-2H4M-10,-3H2M-12,+2L4C3" 'CUBA
300 MAP5$="BM+42,-13U2L1D2BU4U3H3G1D2F3BM+3,-6U2BU8BR1D2R1U2H3BL2U1L3D1NR3L3BM+17,+8L4D1R4F1BF4F3U1H3BG4F3D1BE3BR4BD1D2F3U1H2BR6BD5F1R3D2G3L1E2U1H2" '                NASSAU AND BAHAMAS
310 MAP6$="F4D3M+4,+5D2F2D3M-2,+3R2D2F14R10F4M+30,+12F2M+10,-4U1R3D2R4F15R6M+20,+8M+14,+4M+13,+14D5F4R3U3M+7,+4D3F2D2" 'PACIFIC SIDE (SET X,Y=96,0)
320 MAP7$="M+4,+2D2M+9,+11D4R1M+5,+7R3M+4,-6R8F3R3F1D3M+8,+10D2M+6,+5R3M+9,+4"    '  TEXAS BORDER
330 STORM$="R2E1U1H1L3G2D3F2R3E4U2H4L4G4D4F5"
340 HUR$="BH4U1E3R3D1U2L3G2D4L1BF8D1G3L3U1D2R3E2U4R1BH4"
350 STORMNAME$="* none *"
360 FOR I=0 TO 19:READ MAPXY(I,0):READ MAPXY(I,1):NEXT ' 0-10=X, 11-17=Y
370 DATA 0,319,60,312,65,275,70,242,75,210,80,180,85,150,90,117,95,83,100,47,105,12,120,0
380 DATA 0,199,10,185,15,158,20,125,25,90,30,50,35,8,50,0
390 GOSUB 3520
400 GOSUB 3610
410 GOSUB 1770
420 REM ******* UPDATE/LIST DATA ON EXISTING STORMS *********
430 IF ERR=53 THEN BEEP:PRINT "STORM NOT FOUND ON DISK!":PRINT :RESUME 470 ELSE PRINT "ERROR ";ERR:END
440 CLS:COLOR 0,7:LOCATE 2,25:PRINT " HURRICANE       TRACKER (c) "
450 LOCATE 3,5:PRINT"Generate your own Tracking Record of Tropical Storms or Hurricanes":COLOR 7,1:PRINT
460 GOSUB 1900
470 LOCATE 24,1:PRINT "What is the name of the HURRICANE/STORM? (Default = ";STORMNAME$;")   ";:INPUT A$
480 IF A$="" AND STORMNAME$="* none *" THEN BEEP:PRINT :GOTO 470
490 IF A$<> "" THEN STORMNAME$=A$
500 ON ERROR GOTO 420
510 PRINT:PRINT "Any ";:COLOR 4,0:PRINT " NEW ";:COLOR 7,1:INPUT " coordinates to add (Y or N)";Z$
520 IF Z$="" THEN 730
530 IF Z$="N" OR Z$="n" THEN 730
540 PRINT :PRINT :PRINT
550 OPEN STORMNAME$ FOR APPEND AS #1
560 ON ERROR GOTO 0
570 PRINT :PRINT "      Enter new data ( or <blank> or <END> to end)"
580 INPUT "     Enter DATE (MM/DD/YY) ";D$
590 IF D$="END" OR D$="end" OR D$="" THEN 720
600 IF LEN(D$) <> 8 THEN LOCATE CSRLIN-1,1:COLOR 23,0:PRINT "   Form must be  MM/DD/YY   ";:COLOR 7,1:PRINT :GOTO 580
610  INPUT "     Enter TIME (16:45)   ";T$
620 IF LEN(T$) <> 5 THEN LOCATE CSRLIN-1,1:COLOR 23,0:PRINT "   Form must be  15:30   ";:COLOR 7,1:PRINT :GOTO 610
630 INPUT "     Enter LATITUDE (Between 10 and 35) == (xx.x) ";Y
640 IF (Y <10) OR (Y >35) THEN PRINT "MUST BE >10 NORTH OR <35 NORTH.":GOTO 630
650 INPUT "     Enter LONGITUDE (Between 60 and 105) || (xx.x) ";X
660 IF (X <60) OR (X >105) THEN PRINT "MUST BE >60 WEST OR <105 WEST.":GOTO 650
670 PRINT :PRINT "Date: ";D$;"  Time: ";T$;"  Longit.: ";X;"  Lat.: ";Y;
680 PRINT :INPUT "Is this data OK? (Y/N)";QA$
690 IF QA$="" OR QA$="n" OR QA$="N" THEN PRINT :PRINT "Re-enter last data point!":BEEP:GOTO 570
700 WRITE #1, D$;T$;X;Y
710 GOTO 570
720 CLOSE #1
730 OPEN STORMNAME$ FOR INPUT AS #1
740 ON ERROR GOTO 0
750 PRINT :INPUT "Do you want a hard copy (Y or N)";Z$
760 IF Z$="Y" OR Z$="y" THEN H=1 ELSE H=0
770 IF H=1 THEN 790
780 PRINT :PRINT :PRINT
790 P1=20 'Set page counter
800 INPUT #1,D$,T$,X,Y
810 PRINT "              Initial tracking began on - ";D$;" , at - ";T$
820 IF H=1 THEN LPRINT "              Initial tracking began on - ";D$;" , at - ";T$
830 PRINT "  Hurricane ";STORMNAME$;"'s Initial Position was LATITUDE -";Y;", LONGITUDE -";X;
840 IF H=1 THEN LPRINT "       Hurricane ";STORMNAME$;"'s Initial Position was LAT -";Y;" , LON -";X;
850 OLDDAY=VAL(MID$(D$,4,2))
860 TH=VAL(LEFT$(T$,2))*100:TM=VAL(MID$(T$,4,2))
870 OLDTIME=TH+TM 'STORE ORIGINAL TIME
880 COUNT = 0:ASOA = 0:TSOA = 0
890 PRINT STRING$(80,61)
900 IF H=1 THEN LPRINT STRING$(80,61)
910 X0=X
920 Y0=Y
930 IF EOF(1) THEN 1090
940 INPUT #1,D1$,T1$,X1,Y1
950 GOSUB 1530
960 IF P1<20 THEN 1000
970 COLOR 2,0:PRINT "  DATE      TIME   LAT    LON    DISTANCE     SPEED     DIRECTION OF TRAVEL  ";:COLOR 7,1:PRINT:PRINT
980 IF H=1 THEN LPRINT "    DATE    TIME    LAT    LON    DISTANCE   SPEED    DIRECTION OF TRAVEL":LPRINT
990 P1=1
1000 GOSUB 4340
1010 PRINT USING U$;D1$,T1$,Y1,X1,Q,SOA,D,C$
1020 IF H=1 THEN LPRINT USING V$;D1$,T1$,Y1,X1,Q,SOA,D,C$
1030 IF H=0 THEN P1=P1+1 ELSE 1060
1040 IF P1<>20 THEN 1060
1050 INPUT "     Press <ENTER> to continue";Z$
1060 X=X1
1070 Y=Y1
1080 GOTO 930
1090 X=X0
1100 Y=Y0
1110 GOSUB 1530
1120 T2=D:ASOA = TSOA/COUNT 'compute average speed of advance
1130 PRINT :PRINT "TOTAL movement has been ";T2;" DEGREES ";C$;" AT ";ASOA;" MPH":PRINT
1140 IF H=1 THEN LPRINT :LPRINT USING "    TOTAL MOVEMENT HAS BEEN ##.# DEGREES & AT ##.# MPH";T2,C$,ASOA:ASOA=0
1150 ON CITY GOTO 1160,1170,1180,1190,1200,1210,1220,1230,1240,1250,1260,1270,1280,1290,1300,1310
1160 X=97.22 : Y=27.48 :GOTO 1320'x=long, y=lat of city to track to 1
1170 X=96.56 : Y=28.51:GOTO 1320 'CITY 2
1180 X=97.93 : Y=26.43:GOTO 1320 'CITY 3
1190 X=94.65 : Y=29.45:GOTO 1320 'CITY 4
1200 X=89.56 : Y=30.05:GOTO 1320 'CITY 5
1210 X=95.37 : Y=29.77:GOTO 1320 'CITY 6
1220 X=80.17 : Y=25.43:GOTO 1320 'CITY 7
1230 X=88.08 : Y=30.7:GOTO 1320  'CITY 8
1240 X=87.22 : Y=30.42:GOTO 1320 'CITY 9
1250 X=82.63 : Y=27.77:GOTO 1320 'CITY 10
1260 X=81.66001 : Y=30.33:GOTO 1320 'CITY 11
1270 X=97.85 : Y=22.22:GOTO 1320 'CITY 12
1280 X=86.92 : Y=20.42:GOTO 1320 'CITY 13
1290 X=93.2 : Y=30.22:GOTO 1320 'CITY 14
1300 X=81.08 : Y=32.07:GOTO 1320 'CITY 15
1310 X=XCITY : Y=YCITY 'CITY 16
1320 GOSUB 1530
1330 COLOR 4,0:PRINT USING "    & IS ####.# MILES AT ##.# DEGREES & FROM  &.";STORMNAME$,Q,D,C$,CITY1$;:COLOR 7,1:PRINT :PRINT
1340 IF H=1 THEN LPRINT USING "    & IS ####.# MILES AT ##.# DEGREES & FROM & .";STORMNAME$,Q,D,C$,CITY1$
1350 P1=P1+3
1360 FOR I=P1 TO 10:PRINT :NEXT
1370 CLOSE #1
1380 IF Q >= 100 THEN 1450
1390 PRINT :PRINT :PRINT
1400 COLOR 16,7:PRINT "   ************************************************************************     ";
1410 PRINT "   *        W A R N I N G  -  HURRICANE IS LESS THAN 100 MILES AWAY       *   "
1420 PRINT "   ************************************************************************   ";:COLOR 7,1
1430 FOR I=1 TO 3:SOUND 4400,8:SOUND 220,8:NEXT
1440 FOR I=1 TO 6:PRINT :NEXT : IF H=1 THEN LPRINT CHR$(12);
1450 COLOR 7,1:INPUT "Press <ENTER>";Z$: RETURN
1460 ' This Subroutine computes the direction and distance between two points
1470 ' on the globe. Input is - Starting coordinates X,Y and ending coordinates
1480 ' x1,y1.  Output is - C$ -- contains the heading in words, IE north of west
1490 ' due south, etc.     D  -- contains the Angular Heading in degrees
1500 '                     Q  -- contains the Distance between two points
1510 ' Uses variables A,B,Q,Q2,D,S,N,U
1520 '      Variables X,X1,Y,Y1 are unchanged
1530 IF X1 = X AND Y1 = Y THEN C$="NO MOVEMENT"
1540 IF X1 > X AND Y1 = Y THEN C$="DUE WEST"
1550 IF X1 > X AND Y1 > Y THEN C$="NORTH OF WEST"
1560 IF X1 = X AND Y1 > Y THEN C$="DUE NORTH"
1570 IF X1 < X AND Y1 > Y THEN C$="NORTH OF EAST"
1580 IF X1 < X AND Y1 = Y THEN C$="DUE EAST"
1590 IF X1 < X AND Y1 < Y THEN C$="SOUTH OF EAST"
1600 IF X1 = X AND Y1 < Y THEN C$="DUE SOUTH"
1610 IF X1 > X AND Y1 < Y THEN C$="SOUTH OF WEST"
1620 U=57.29578
1630 Q=0: D=0
1640 N=ABS(X-X1)
1650 B=90 - Y
1660 A=90 - Y1
1670 S=COS(A/U)*COS(B/U)+SIN(A/U)*SIN(B/U)*COS(N/U)
1680 IF S*S >= 1 THEN RETURN
1690 Q2=ATN(SQR(1-S*S)/S)
1700 Q=Q2*U*69.5
1710 IF Y=Y1 THEN RETURN
1720 S=SIN(A/U)*SIN(N/U)/SIN(Q2)
1730 IF S*S >= 1 THEN RETURN
1740 D=ATN(S/SQR(1-S*S))*U
1750 D=90-D
1760 RETURN
1770 CLS: LOCATE  2,15 :COLOR 0,15:PRINT " H U R R I C A N E   T R A C K I N G   P R O G R A M "
1780 LOCATE  4,20:COLOR 7,1:PRINT "Current Track-to city is: ";:COLOR 4,7:PRINT " ";CITY1$;" ";:COLOR 7,1
1790 COLOR 4,7:LOCATE 7,20:PRINT " 1 ";:LOCATE 9,20:PRINT " 2 ";:LOCATE 11,20:PRINT " 3 ";:LOCATE 13,20:PRINT " 4 ";:LOCATE 15,20:PRINT " 5 ";:COLOR 7,1
1800 LOCATE  7,26:PRINT "Enter a NEW Storm/Hurricane         "
1810 LOCATE  9,26 :PRINT "Update or List Position of Existing Storm/Hurricane  "
1820 LOCATE  11,26 :PRINT "Track a Storm/Hurricane on the MAP.           "
1830 LOCATE  13,26 :PRINT "Change track to City/Area           "
1840 LOCATE 15,26 :PRINT "END Program.                        "
1850 LOCATE 18,20 :PRINT "Enter function ";:COLOR 31:PRINT "===> _";:COLOR 7
1860 A$=INKEY$:IF A$="" THEN 1860
1870 ON VAL(A$) GOSUB 1930,440,2220,3610,1890
1880 GOTO 1770
1890 LOCATE 22,1:CLS:SYSTEM:END
1900 REM *********** DISPLAY STORMS ***********
1910 LOCATE 5,20:COLOR 15:PRINT "The Storms currently on this disk are:";:COLOR 7:LOCATE 7,10:PRINT :FILES "*."
1920 RETURN
1930 CLS:COLOR 0,7:LOCATE 2,22:PRINT " This program creates a NEW storm. ";:COLOR 7,1:PRINT
1940 GOSUB 1900
1950 LOCATE 24,5:INPUT "      What is the name of the Storm"; A$
1960 IF A$="" THEN BEEP: PRINT :GOTO 1950
1970 STORMNAME$=A$
1980 ON ERROR GOTO 2040
1990 OPEN STORMNAME$ FOR INPUT AS #1
2000 CLOSE #1
2010 INPUT "FILE EXISTS! Do you want to overwrite it? (Y/N)"; YN$
2020 IF YN$<>"y" OR YN$<>"Y" THEN GOTO 1940
2030 GOTO 2050
2040 RESUME 2050
2050 OPEN STORMNAME$ FOR OUTPUT AS #1
2060 INPUT "     Enter Initial DATE (MM/DD/YY) ";D$
2070 IF LEN(D$) <> 8 THEN LOCATE CSRLIN-1,1:COLOR 23,0:PRINT "   Form must be  MM/DD/YY   ";:COLOR 7,1:PRINT :GOTO 2060
2080 INPUT "     Enter Initial TIME (16:45)   ";T$
2090 IF LEN(T$) <> 5 THEN LOCATE CSRLIN-1,1:COLOR 23,0:PRINT "   Form must be  15:30   ";:COLOR 7,1:PRINT :GOTO 2080
2100 INPUT "     Enter Initial LATITUDE (Between 10 and 35)  == (xx.x) ";Y
2110 IF (Y <10) OR (Y >35) THEN PRINT "MUST BE >10 DEGREES NORTH AND <35 DEGREES NORTH.":GOTO 2100
2120 INPUT "     Enter Initial LONGITUDE (Between 60 and 105) || (xx.x) ";X
2130 IF (X <60) OR (X >105) THEN PRINT "MUST BE >60 DEGREES WEST AND <105 DEGREES WEST.":GOTO 2120
2140 PRINT :PRINT "Date: ";D$;"  Time: ";T$;"  Longit.: ";X;"  Lat.: ";Y;
2150 PRINT :INPUT "Is this data OK? (Y/N)";QA$
2160 IF QA$="" OR QA$="n" OR QA$="N" THEN PRINT :PRINT "Re-enter initial data point!":BEEP:GOTO 2060
2170 WRITE #1, D$;T$;X;Y
2180 CLOSE #1
2190 RETURN
2200 ' ********* Routine to draw storm on map ********
2210 IF ERR=53 THEN BEEP:PRINT "STORM NOT FOUND ON DISK!":PRINT :RESUME 2250 ELSE PRINT "ERROR ";ERR:END
2220 CLS:COLOR 0,7:LOCATE 2,18
2230 PRINT " This program tracks a storm on the map. ";:COLOR 7,1:PRINT
2240 GOSUB 1900
2250 LOCATE 24,1:PRINT "What is the name of the STORM? (Default = ";STORMNAME$;")    ";:INPUT A$
2260 IF A$="" AND STORMNAME$="* none *" THEN BEEP:PRINT :GOTO 2250
2270 IF A$<>"" THEN STORMNAME$=A$
2280 ON ERROR GOTO 2200
2290 OPEN STORMNAME$ FOR INPUT AS #1
2300 I=0: GOSUB 2490 :NP=I
2310 ON ERROR GOTO 0
2320 INPUT "Do you want auto advance for the storm? (Y/N)";Q$
2330 IF Q$="N" OR Q$="n" THEN AUTO.ADVANCE=-1 ELSE AUTO.ADVANCE=1
2340 INPUT "Draw latitude and longitude lines at five degree increments? (Y/N)";I$
2350 IF I$="N" OR I$="n" THEN I.DO.LATLON =0 ELSE I.DO.LATLON = -1
2360 INPUT "Do you want to plot additional storm tracks (Y/N)";A$
2370 IF A$<>"Y" AND A$<>"y" THEN NSTORM=1:GOTO 2560
2380 FOR J=2 TO 4
2390 PRINT "What is the name of Storm ";J;" (Blank to end)";:INPUT STORMNAME$(J)
2400 IF STORMNAME$(J)="" THEN NSTORM=J-1:GOTO 2550
2410 ON ERROR GOTO 2480
2420 OPEN STORMNAME$(J) FOR INPUT AS #1
2430 I=(J-1)*50+1
2440 GOSUB 2490:LP(J)=I
2450 NEXT J
2460 NSTORM=4
2470 GOTO 2550
2480 IF ERR=53 THEN BEEP:PRINT "STORM NOT FOUND ON DISK!":PRINT :RESUME 2390 ELSE PRINT "ERROR ";ERR:END
2490 WHILE NOT EOF(1)
2500 INPUT#1,D$(I),T$(I),X(I),Y(I)
2510 I=I+1
2520 WEND
2530 CLOSE #1
2540 RETURN
2550 ON ERROR GOTO 0
2560 GOSUB 3230 ' ****** go set up graphics and basic map ****
2570 LOCATE 1,1:PRINT STORMNAME$;"            ";:IF AUTO.ADVANCE =-1 THEN LOCATE 23,1:PRINT "HIT ANY KEY";
2580 FOR I0=0 TO NP-1
2590 OUT.OF.RANGE=0:IMAP(I0,2)=0:GOSUB 3070
2600 IF OUT.OF.RANGE THEN LOCATE 1,15:PRINT USING M$;D$(I0),T$(I0),Y(I0),X(I0);:GOTO 2620
2610 LOCATE 1,15:PRINT USING M$;D$(I0),T$(I0),Y(I0),X(I0);
2620 IF I0 > 0 THEN IF IMAP(I0-1,2) <> -1 THEN PUT (IMAP(I0-1,0)-7,IMAP(I0-1,1)-10),HURICARRAY,>=
2630 IF I0 > 0 THEN LINE (IMAP(I0-1,0),IMAP(I0-1,1))-(IMAP(I0,0),IMAP(I0,1)),2
2640 IF IMAP(I0,2) <> -1 THEN PUT (IMAP(I0,0)-7,IMAP(I0,1)-10),HURICARRAY,>=
2650 IF AUTO.ADVANCE=1 THEN GOTO 2670
2660 I$="":WHILE I$="":I$=INKEY$:WEND
2670 NEXT
2680 IF NSTORM<2 THEN GOTO 2820
2690 FOR J=2 TO NSTORM
2700 LOCATE J,1:PRINT STORMNAME$(J)
2710 I=((J-1)*50+1)
2720 FOR I0=I TO LP(J)-1
2730 OUT.OF.RANGE=0:IMAP(I0,2)=0:GOSUB 3070
2740 IF I0 > I THEN IF IMAP(I0-1,2) <> -1 THEN PUT (IMAP(I0-1,0)-7,IMAP(I0-1,1)-10),HURICARRAY,>=
2750 IF J=2 THEN LT=&HAAAA
2760 IF J=3 THEN LT=&H3333
2770 IF J=4 THEN LT=&HF18F
2780 IF I0 > I THEN LINE (IMAP(I0-1,0),IMAP(I0-1,1))-(IMAP(I0,0),IMAP(I0,1)),2,,LT
2790 IF IMAP(I0,2) <> -1 THEN PUT (IMAP(I0,0)-7,IMAP(I0,1)-10),HURICARRAY,>=
2800 NEXT I0
2810 NEXT J
2820 LOCATE 23,1:Z$=INPUT$(1): IF Z$=CHR$(13) THEN 2830 ELSE 2820
2830 GOSUB 3520
2840 COLOR 7,1,1:CLS:LOCATE 3,1:PRINT "Do you want to plot the map on a Hewlett Packard plotter? (Y/N)";
2850 A$=INKEY$:IF A$="" THEN 2850
2860 IF A$="Y" OR A$="y" THEN LOCATE 5,1:INPUT "To which COM port is the plotter connected? (Default=2)";PORT ELSE RETURN
2870 IF PORT=0 THEN PORT$="COM2" ELSE PORT$="COM"+RIGHT$(STR$(PORT),1)
2880 ON ERROR GOTO 2890: GOTO 2920
2890 CLOSE:PRINT "ERROR OPENING COM PORT! CHECK PLOTTER AND PRESS ANY KEY TO CONTINUE."
2900 A$=INKEY$:IF A$="" THEN 2900
2910 RESUME 2920
2920 OPEN PORT$+":9600,S,7,1,RS,CS65535,DS,CD" AS #1
2930 PRINT #1, "IN;OI;"
2940 INPUT #1, ID$
2950 CLOSE #1
2960 LOCATE 7,5:PRINT "(1) INSTALL ";:COLOR 0,7:PRINT " BLACK P.7 PEN ";:COLOR 7,1:PRINT " IN PEN POSITION 1";
2970 LOCATE 9,5:PRINT "(2) INSTALL ";:COLOR 4,7:PRINT " RED P.7 PEN ";:COLOR 7,1:PRINT " IN PEN POSITION 2";
2980 IF ID$<>"7470A" THEN LOCATE 11,5:PRINT "(3) INSTALL ";:COLOR 2,7:PRINT " GREEN P.3 PEN ";:COLOR 7,1:PRINT " IN PEN POSITION 3"; ELSE GOTO 3000
2990 LOCATE 13,5:PRINT "(4) INSTALL PENS FOR OTHER STORMTRACKS IN PEN POSITIONS 4, 5, & 6";
3000 IF ID$="7470A" THEN LOCATE 11,5:STP$="3" ELSE LOCATE 15,5:STP$="5"
3010 PRINT "("+STP$+") LOAD SHEET OF PAPER, IF NECESSARY";
3020 LOCATE 24,20:COLOR 0,7:PRINT "  PRESS ANY KEY TO CONTINUE  ";:COLOR 7,1
3030 A$=INKEY$:IF A$="" THEN 3030
3040 LOCATE 20,22:COLOR 31:PRINT "PLOTTING....PLEASE WAIT";:COLOR 7
3050 GOSUB 4870
3060 CLS:RETURN
3070 ' *** Subroutine to translate Lat and Lon to Screen Coordinates ***
3080 IF X(I0) > 105 OR X(I0) < 60 THEN OUT.OF.RANGE=-1:IMAP(I0,2)=-1
3090 IF Y(I0) >  33 OR Y(I0) < 10 THEN OUT.OF.RANGE=-1:IMAP(I0,2)=-1
3100 FOR IB=0 TO 10: IF X(I0) >= MAPXY(IB,0) AND X(I0) < MAPXY(IB+1,0) THEN GOSUB 3150
3110 NEXT
3120 FOR IB=12 TO 18:IF Y(I0) >= MAPXY(IB,0) AND Y(I0) < MAPXY(IB+1,0) THEN GOSUB 3190
3130 NEXT
3140 RETURN
3150 ' ****** calculate x(longitude) ******
3160 Z=MAPXY(IB+1,0)-MAPXY(IB,0)
3170 X=X(I0)-MAPXY(IB,0):XX=MAPXY(IB,1)-MAPXY(IB+1,1):IPOS=INT((X/Z)*XX) :IMAP(I0,0)=INT(MAPXY(IB,1))-IPOS
3180 RETURN
3190 ' ****** calculate y(latitude) *******
3200 Z=MAPXY(IB+1,0)-MAPXY(IB,0)
3210 Y=Y(I0)-MAPXY(IB,0):YY=MAPXY(IB,1)-MAPXY(IB+1,1):IPOS=INT((Y/Z)*YY) :IMAP(I0,1)=INT(MAPXY(IB,1))-IPOS
3220 RETURN
3230 SCREEN 1,0:COLOR 3,0
3240 CIRCLE (160,100),4,2,,,1:PAINT (160,100),2,2:PSET(160,100),2:DRAW "C2XHUR$;":GET (153,90)-(167,111),HURICARRAY:PUT (153,90),HURICARRAY,>=
3250 PSET (202,0),3:DRAW "C3XMAP0$;XMAP1$;XMAP2$;XMAP3$;XMAP4$;XMAP5$;":PSET (0,96),3:DRAW "XMAP6$;":PSET (0,34),3:DRAW "XMAP7$;": PAINT (80,0),3,3: PAINT (40,80),1,3
3260 PAINT (180,110),1,3 : PAINT (234,132),1,3 :PAINT (265,136),1,3 :PAINT (194,138),1,3:PAINT (304,181),1,3:PAINT (161,115),1,3:PAINT (191,91),1,3
3270 PSET (275,30),3:DRAW "C3R2D1L3" : ' BERMUDA
3280 GOSUB 3490
3290 IF CITY=1 THEN CIRCLE (65,67),2,2:PAINT (65,67),2:LOCATE 9,1:PRINT CITY$; ' CORPUS CHRISTI,TEXAS
3300 IF CITY=2 THEN CIRCLE (71,60),2,2:PAINT (71,60),2:LOCATE 8,1:PRINT CITY$; 'Victoria,Texas
3310 IF CITY=3 THEN CIRCLE (66,79),2,2:PAINT (66,79),2:LOCATE 10,1:PRINT CITY$; 'BROWNSVILLE,TEXAS
3320 IF CITY=4 THEN CIRCLE (80,55),2,2:PAINT (80,55),2:LOCATE 6,3:PRINT CITY$; 'GALVESTON,TEXAS
3330 IF CITY=5 THEN CIRCLE (119,48),2,2:PAINT (119,48),2:LOCATE 5,12:PRINT CITY$; 'NEW ORLEANS, LA
3340 IF CITY=6 THEN CIRCLE (81,52),2,2:PAINT (81,52),2:LOCATE 6,8:PRINT CITY$; ' HOUSTON, TEX
3350 IF CITY=7 THEN CIRCLE (175,86),2,2:PAINT (175,86),2:LOCATE 11,24:PRINT CITY$; ' MIAMI, FLA
3360 IF CITY=8 THEN CIRCLE (130,45),2,2:PAINT (130,45),2:LOCATE 5,18:PRINT CITY$;' MOBILE, ALA.
3370 IF CITY=9 THEN CIRCLE (136,47),2,2:PAINT (136,47),2:LOCATE 5,13:PRINT CITY$; ' PENSACOLA
3380 IF CITY=10 THEN CIRCLE (165,68),2,2:PAINT (165,68),2:LOCATE 10,22:PRINT CITY$; ' ST PETERSBURG
3390 IF CITY=11 THEN CIRCLE (171,48),2,2:PAINT (171,48),2:LOCATE 6,9:PRINT CITY$; ' JACKSONVILLE
3400 IF CITY=12 THEN CIRCLE (63,110),2,2:PAINT (63,110),2:LOCATE 14,1:PRINT CITY$; ' TAMPICO
3410 IF CITY=13 THEN CIRCLE (138,123),2,2:PAINT (138,123),2:LOCATE 15,18:PRINT CITY$; ' COZUMEL
3420 IF CITY=14 THEN CIRCLE (96,49),2,2:PAINT (96,49),2:LOCATE 5,7:PRINT CITY$; ' LAKE CHARLES
3430 IF CITY=15 THEN CIRCLE (174,33),2,2:PAINT (174,33),2:LOCATE 3,18:PRINT CITY$; ' SAVANNAH
3440 IF CITY=16 THEN I0=50:X(50)=XCITY:Y(50)=YCITY:GOSUB 3070 ELSE GOTO 3460
3450 CIRCLE (IMAP(50,0),IMAP(50,1)),2,2:PAINT (IMAP(50,0),IMAP(50,1)),2:LOCATE (IMAP(50,1)/8)-1,(IMAP(50,0)/8)-2:PRINT CITY$;' your city
3460 LOCATE 3,11:PRINT " U S A";:LOCATE 6,29:PRINT "ATLANTIC";:LOCATE 8,31:PRINT "OCEAN";:LOCATE 16,4:PRINT "MEXICO";:LOCATE 21,3:PRINT "PACIFIC";:LOCATE 21,22:PRINT "CARIBBEAN ";
3470 RETURN
3480 IF NOT STORED THEN GET (0,0)-(319,199),STOR.SCR:STORED=-1
3490 IF I.DO.LATLON THEN FOR I=0 TO 10:LINE(MAPXY(I,1),0)-(MAPXY(I,1),199),1:NEXT:FOR I=12 TO 18:LINE(0,MAPXY(I,1))-(319,MAPXY(I,1)),1:NEXT:I=0
3500 IF I.DO.LATLON THEN LOCATE 7,38:PRINT "30";:LOCATE 12,38:PRINT "25";:LOCATE 16,38:PRINT "20";:LOCATE 20,38:PRINT "15";:LOCATE 25,5:PRINT "100";:LOCATE 25,15:PRINT "90";:LOCATE 25,22:PRINT "80";:LOCATE 25,30:PRINT "70";
3510 RETURN
3520 ' ******* switch to color 80 char mode **
3530 DEF SEG = 0
3540 POKE &H410,(PEEK(&H410) AND &HCF) OR &H10
3550 SCREEN 1,0,0,0
3560 SCREEN 0
3570 WIDTH 80
3580 LOCATE ,,1,6,7
3590 COLOR 7,1
3600 RETURN
3610 CLS: LOCATE  2,15 :COLOR 0,7,1:PRINT " H U R R I C A N E   T R A C K I N G   P R O G R A M ";:COLOR 7,1
3620 LOCATE  4,20 :PRINT "(1)   GALVESTON, TEXAS                    "
3630 LOCATE  5,20 :PRINT "(2)   VICTORIA, TEXAS                     "
3640 LOCATE  6,20 :PRINT "(3)   BROWNSVILLE, TEXAS                  "
3650 LOCATE  7,20 :PRINT "(4)   CORPUS CHRISTI, TEXAS               "
3660 LOCATE  8,20 :PRINT "(5)   NEW ORLEANS, LOUISIANA              "
3670 LOCATE  9,20 :PRINT "(6)   HOUSTON, TEXAS                      "
3680 LOCATE 10,20 :PRINT "(7)   MIAMI, FLORIDA                      "
3690 LOCATE 11,20 :PRINT "(8)   MOBILE, ALABAMA                     "
3700 LOCATE 12,20 :PRINT "(9)   PENSACOLA, FLORIDA                  "
3710 LOCATE 13,19 :PRINT "(10)   ST. PETERSBURG, FLORIDA             "
3720 LOCATE 14,19 :PRINT "(11)   JACKSONVILLE, FLORIDA               "
3730 LOCATE 15,19 :PRINT "(12)   TAMPICO, MEXICO                     "
3740 LOCATE 16,19 :PRINT "(13)   COZUMEL, MEXICO                     "
3750 LOCATE 17,19 :PRINT "(14)   LAKE CHARLES, LOUISIANA             "
3760 LOCATE 18,19 :PRINT "(15)   SAVANNAH, GEORGIA                   "
3770 LOCATE 19,19 :PRINT "(16)   other city                          "
3780 LOCATE 23,20 :INPUT "Enter number of your CITY/AREA ===> ";M
3790 ON M GOSUB 3880,3840,3860,3820,3900,3920,3940,3960,3980,4000,4020,4040,4060,4080,4100,4120
3800 IF M=0 THEN GOTO 3920
3810 RETURN
3820 CITY=1:X=97.22:Y=27.48 'x=longitude,y=latitude of city to track to
3830 CITY$=" CORPUS":CITY1$="CORPUS CHRISTI":RETURN
3840 CITY=2:X=96.56:Y=28.51
3850 CITY$="VICTORIA":CITY1$="VICTORIA":RETURN
3860 CITY=3:X=97.93:Y=26.43
3870 CITY$="BROWNSV":CITY1$="BROWNSVILLE":RETURN
3880 CITY=4:X=94.65:Y=29.45
3890 CITY$="GALVESTON":CITY1$="GALVESTON, TEXAS":RETURN
3900 CITY=5:X=89.56:Y=30.05
3910 CITY$=" NEW ORL.":CITY1$="NEW ORLEANS":RETURN
3920 CITY=6:X=95.37:Y=29.77
3930 CITY$="HOUSTON":CITY1$="HOUSTON, TEX":RETURN
3940 CITY=7:X=80.17:Y=25.43
3950 CITY$=" MIAMI":CITY1$="MIAMI, FLA":RETURN
3960 CITY=8:X=88.08:Y=30.7
3970 CITY$="MOBILE":CITY1$="MOBILE, ALA":RETURN
3980 CITY=9:X=87.22:Y=30.42
3990 CITY$="PENSACOLA":CITY1$="PENSACOLA, FLA":RETURN
4000 CITY=10:X=82.63:Y=27.77
4010 CITY$="ST PETERSBURG":CITY1$="ST. PETERSBURG, FLA":RETURN
4020 CITY=11:X=81.66001:Y=30.33
4030 CITY$="JACKSONVILLE":CITY1$="JACKSONVILLE, FLA":RETURN
4040 CITY=12:X=97.85:Y=22.22
4050 CITY$="TAMPICO":CITY1$="TAMPICO, MEXICO":RETURN
4060 CITY=13:X=86.92:Y=20.42
4070 CITY$="COZUMEL":CITY1$="COZUMEL, MEXICO":RETURN
4080 CITY=14:X=93.2:Y=30.22
4090 CITY$="LAKE CHARLES":CITY1$="LAKE CHARLES, LA":RETURN
4100 CITY=15:X=81.08:Y=32.07
4110 CITY$="SAVANNAH":CITY1$="SAVANNAH, GA":RETURN
4120 CITY=16
4130 ON ERROR GOTO 4230
4140 OPEN "YOURCITY.DAT" FOR INPUT AS #1
4150 INPUT #1,CITY1$,XCITY,YCITY
4160 CITY$=CITY1$:X=XCITY:Y=YCITY:CLOSE:ON ERROR GOTO 0
4170 CLS:LOCATE 2,22:COLOR 0,7:PRINT " CURRENT ADDITIONAL CITY INFORMATION ";:COLOR 7,1
4180 LOCATE 4,25:COLOR 0,7:PRINT "      CITY: ";:COLOR 7,1:PRINT " ";CITY1$
4190 LOCATE 6,25:COLOR 0,7:PRINT " LONGITUDE: ";:COLOR 7,1:PRINT XCITY
4200 LOCATE 8,25:COLOR 0,7:PRINT "  LATITUDE: ";:COLOR 7,1:PRINT YCITY
4210 LOCATE 10,5:INPUT "DO YOU WISH TO MAKE CHANGES? (Y/N)";QUEST$
4220 IF QUEST$<>"Y" AND QUEST$<>"y" THEN RETURN
4230 CLS:LOCATE 2,5:INPUT "         NAME OF YOUR CITY (15 CHRS) ===>";CITY1$
4240 CITY$=CITY1$
4250 LOCATE 4,5:INPUT "LONGITUDE OF CITY (BETWEEN 60 & 105) ===>";XCITY
4260 IF XCITY<60 OR XCITY>105 THEN LOCATE 6,10:COLOR 23:PRINT "ERROR! RE-INPUT DATA.":COLOR 7:BEEP:FOR WT=1 TO 3000:NEXT WT:LOCATE 6,10:PRINT "                         ":GOTO 4250
4270 LOCATE 6,5:INPUT "  LATITUDE OF CITY (BETWEEN 10 & 33) ===>";YCITY
4280 IF YCITY<10 OR YCITY>33 THEN LOCATE 8,10:COLOR 23:PRINT "ERROR! RE-INPUT DATA.":COLOR 7:BEEP:FOR WT=1 TO 3000:NEXT WT:LOCATE 8,10:PRINT "                         ":GOTO 4270
4290 X=XCITY:Y=YCITY
4300 OPEN "YOURCITY.DAT" FOR OUTPUT AS #1
4310 WRITE #1,CITY1$,XCITY,YCITY
4320 CLOSE
4330 RETURN
4340 '**** SUBROUTINE TO COMPUTE THE SPEED OF ADVANCE
4350 'Variables are OLDDAY,OLDTIME - where it was
4360 '              D1$,T1         - where it is   and  q=distance moved
4370 NUDAY=VAL(MID$(D1$,4,2)) 'extract the day
4380 DAYINT=NUDAY-OLDDAY      'determine # of 24hr periods
4390 IF DAYINT <0 THEN HR24 = 2400
4400 IF DAYINT = 0 THEN HR24 = 0
4410 IF DAYINT = 1 THEN HR24 = 2400
4420 IF DAYINT = 2 THEN HR24 = 4800
4430 IF DAYINT = 3 THEN HR24 = 7200
4440 IF DAYINT > 3 THEN HR24 = 9999
4450 TH1=VAL(LEFT$(T1$,2))*100:TM1=VAL(MID$(T1$,4,2)) 'EXTRACT SEMICOLN
4460 TIME1=TH1 + TM1 'STORE NEW TIME
4470 LAPSTIME=(HR24 + (TIME1 - OLDTIME))/100 'calculate total hours
4480 SOA = Q/LAPSTIME  'calculate speed of advance
4490 TSOA = TSOA + SOA:COUNT = COUNT + 1 'SUM SPEED FOR AVERAGE CALC.
4500 OLDDAY = NUDAY:OLDTIME = TIME1:RETURN
4510 END
4520 COLOR 7,1,1:CLS:LOCATE 10,20:COLOR 15:PRINT "DO YOU NEED INSTRUCTIONS?"
4530 PRINT:PRINT TAB(20);:INPUT "PRESS Y OR N, THEN PRESS THE <ENTER> KEY";QUEST$
4540 IF QUEST$<>"Y" AND QUEST$<>"y" THEN RETURN
4550 CLS:PRINT:PRINT "     The purpose of this program is to track HURRICANES.  It will track a storm"
4560 PRINT "from history or a new storm.  The program allows you to enter data on a current storm as often as you wish and print out a list of the storms' location by date and time. ":PRINT
4570 PRINT "     In addition, the program will provide a warning if the storm is within l00 miles of the city selected as the 'TRACK TO CITY', and display the selected     storm super-imposed on a color map."
4580  PRINT :PRINT :PRINT: INPUT "PRESS <ENTER> TO CONTINUE"; QUEST$
4590 CLS:PRINT:PRINT:PRINT "There are two menus associated with this program.":PRINT:PRINT "The first menu simply presents the list of cities which are currently available as a 'TRACK TO CITY ', from which you may select ONE.":PRINT
4600 PRINT "The second menu is the operational menu.  It presents five (5) options.  The    options are as follow:":PRINT :PRINT "   1) Enter a NEW storm.":PRINT "   2) ADD or LIST storm data.":PRINT "   3) Display storm on map."
4610 PRINT "   4) Change track to city.":PRINT "   5) End the program."
4620 PRINT: INPUT "PRESS <ENTER> TO CONTINUE";QUEST$
4630 CLS:PRINT "    The first option (l) allows you to enter the INITIAL data on a storm which  is not currently on the disk. You will be prompted to enter:":PRINT
4640 PRINT "1) DATE ":PRINT "2) TIME ":PRINT "3) LATITUDE":PRINT "4) LONGITUDE"
4650 COLOR 14:PRINT :PRINT "NOTE:":PRINT "Latitude MUST be greater than l0 Degrees North and LESS than 35 Degrees North.  Longitude MUST be greater than 60 Degrees West and LESS than l05 Degrees West."
4660 PRINT: COLOR 0,15 :PRINT  "WARNING: This option must NOT be used for storms that are now stored on the disk":COLOR 7,1
4670 PRINT: INPUT "PRESS <ENTER> TO CONTINUE";QUEST$
4680 COLOR 7,1:CLS: PRINT "     The second option (2) allows you to enter ADDITONAL data about an active   storm or list data for a storm stored on disk and may be used as often as you   wish.":PRINT
4690 PRINT "     You will be asked for the name of the storm.  Next, you will be asked if   you wish to ADD any new coordinates.  Type 'Y' to ADD more data to an active    storm.  Do not add data to an old storm unless you have better data than is"
4700 PRINT "currently stored on the disk.":PRINT
4710 PRINT "You will be prompted thru the data entry process.  Keep in mind that the storm  coordinates must be >10 N and <35 N and >60 W and <105 W.  After entering 'END' you will have a choice of hard copy along with the display list."
4720 PRINT :PRINT "In addition, if the storm is within 100 miles of the current 'TRACK TO CITY,' a warning will be issued!"
4730 PRINT :PRINT "If you only want to list an old storm then enter 'N' and you will be prompted   for hard copy as above.":PRINT
4740 PRINT :INPUT "PRESS <ENTER> TO CONTINUE";QUEST$
4750 CLS: PRINT:PRINT  "     Option 3 will allow you to track the storm on a map with either 'AUTO      ADVANCE' or 'MANUAL' advance ('Press any key' prompt) and with or without       Latutide/Longitude lines in 5 degree increments."
4760 PRINT :PRINT "When the storm is not moving on the map, you may 'PRINT SCREEN' and the IBM     Printer will produce a 'shades of grey' hard copy of the map."
4770 PRINT :PRINT "The program also supports Hewlett Packard 7470A, 7475A, and 7550A Plotters.     You will be prompted as to pen selections."
4780 PRINT :PRINT "Up to 4 Storm/Hurricanes can be plotted at one time. This allows you to         compare the current storm track with previous storm tracks."
4790 PRINT :INPUT "PRESS <ENTER> TO CONTINUE";QUEST$
4800 CLS: PRINT :PRINT "   Option 4 of the operational menu will return you to the first menu to change the 'TRACK TO CITY'.  After you select a new city, you will be returned to the  operational menu.":PRINT
4810 PRINT:PRINT "Option 5 will terminate the program."
4820 PRINT:COLOR 2:PRINT "ENJOY THE PROGRAM AND HAPPY HURRICANE TRACKING!"
4830 PRINT: INPUT "ANOTHER REVIEW (Y/N)";QUEST$:COLOR 7
4840 IF QUEST$ = "Y" OR QUEST$ = "y" THEN GOTO 4550 ELSE RETURN
4850 CLOSE #1
4860 RESUME 4880
4870 ON ERROR GOTO 4850
4880 OPEN PORT$+":9600,S,7,1,RS,CS65535,DS,CD" AS #1
4890 PRINT #1, "IN;OI;"
4900 INPUT #1, ID$
4910 IF ID$="7470A" THEN PRINT #1, "IP 130,279,10000,7479;"
4920 PRINT #1, "SP1; SC 0,319,199,-15;"
4930 PRINT #1, "PA 0,0,PD0,199,319,199,319,0,0,0,PU;"
4940 PRINT #1, "PA 120,-14.5;LBHURRICANE TRACKING MAP"+CHR$(3)
4950 PRINT #1, "PA 202,0;"
4960 'EAST COAST OF U.S.
4970 PRINT #1, "PRPD 2,2,-2,2,2,2,0,5,-1,0,-1,1,2,2,-2,2,-2,0,-20,14,-2,4,-3,0,-4,12,0,8,4,8,4,10,0,1,2,2,-2,2,-3,8,0,2,-2,2,-3,0,0,-3,-5,-7,-2,0,0,-2,2,-2,0,-1,-4,-4,0,-6,-2,-2,0,-6,-8,-8,-4,0,-4,4,-4,-4,-4,0,0,-2,-2,2,-16,0;"
4980 'GULF COAST OF U.S.
4990 PRINT #1, "PR0,2,2,2,0,1,-1,1,2,2,-6,0,-1,1,-6,0,-6,-4,-2,2,-12,-2,-4,4,-16,10,0,15,-6,6,0,17,2,2,12,18,10,6,8,0,2,2,11,0,0,-2,5,-8,0,-8,15,-5,1,1,6,0,2,6,-5,5,0,6,-2,2,-2,6;"
5000 'NORTH COAST OF SOUTH AMERICA
5010 PRINT #1, "PR-2,0,0,-4,-2,2,0,10,-4,4,0,1,4,3,13,0,2,-2,2,2,3,0,1,1,6,0,0,2,2,1,4,0,1,1,-1,1,1,1,0,4,-2,2,0,8,-2,2,0,2,2,2,-2,2,2,2,0,2,3,3,0,2,3,0,7,2,12,-4,8,0,8,6,8,-6,2,0,0,-3,5,-3,4,0,2,-2,6,0,12,-5,2,2,0,2,-4,4,0,2,12,0,2,-2,0,-3,1,-1;"
5020 PRINT #1, "PR3,0,3,3,4,0,1,1,0,1,18,0,3,3,19,-2,0,4,5,0,6,8,5,2;"
5030 'LITTLE ISLANDS AND PUERTO RICO
5040 PRINT #1, "PRPU-11,-16,PD-4,0,0,-3,2,0,2,-2,2,0,1,1,0,4,-3,0,PU-3,-14,PD0,-1,PU2,-2,PD0,-2,PU-2,-2,PD0,-1,PU-1,-2,PD0,-2,PU0,-3,PD0,-1,-1,0,0,-1,-3,3,1,1,1,-1,1,0,1,-1,PU-7,-3,PD0,-1,PU-2,-2,PD0,-1,PU-2,-4,PD0,-1,PU0,-2,PD0,-1,PU-2,-2;"
5050 PRINT #1, "PRPD0,-1,PU-4,4,PD0,-1,PU-6,0,PD-2,0,PU-4,0,0,-3,PD-2,2,-8,0,0,-3,-2,-2,4,0,1,1,5,0,2,2,PU-20,0;"
5060 'HAITI AND JAMAICA
5070 PRINT #1, "PRPD2,-2,0,-2,-6,-2,2,-2,-3,0,-1,-1,-2,0,-11,-3,-2,2,-1,-1,-6,0,-2,2,0,1,5,3,0,4,-12,0,3,3,13,0,4,4,4,-4,3,0,2,-2,4,0,3,1,2,-2,PU-56,0,PD-6,0,-3,3,2,0,3,3,10,0,1,-1,0,-2,-4,0,-3,-3,PU-32,-18,PD0,-2,-1,-1,-2,0,-1,1,0,2,4,0,PU-12,-6;"
5080 'CUBA
5090 PRINT #1, "PRPD2,-2,2,0,0,-3,3,0,2,-2,10,-2,10,2,4,4,6,0,0,2,11,7,2,0,2,2,4,0,2,2,4,0,0,2,-10,3,-1,-1,-6,0,-9,2,5,-5,-2,-2,-7,-2,-4,-4,-10,-3,-2,-2,-12,2,-6,0;"
5100 'NASSAU AND BAHAMAS
5110 PRINT #1, "PRPU44,-13,PD0,-2,-1,0,0,2,1,0,PU-1,-4,PD0,-3,-3,-3,-1,1,0,1,4,4,PU2,-6PD,0,-2,PU2,-8,PD-1,0,0,2,1,0,0,-2,-3,-3,PU-2,0,PD0,-1,-3,0,0,1,3,0,-3,0,-3,0,PU17,9,PD0,-1,-4,0,0,1,4,0,1,1,PU4,4,PD3,3,0,-1,-3,-3,0,1,PU-4,3,PD3,3,0,1;"
5120 PRINT #1, "PRPU3,-3,4,0,0,1,PD0,2,3,3,0,-1,-2,-2,-1,0,PU7,0,0,5,PD1,1,3,0,0,2,-3,3,-1,0,2,-2,0,-1,-2,-2,0,-1,PU;"
5130 'PACIFIC SIDE OF MAP
5140 PRINT #1, "PA 0,96;"
5150 PRINT #1, "PRPD4,4,0,3,4,5,0,2,2,2,0,3,-2,3,2,0,0,2,14,14,10,0,4,4,30,12,2,2,10,-4,0,-1,3,0,0,2,4,0,15,15,6,0,20,8,14,4,13,14,0,5,4,4,3,0,0,-3,6,3,PU;"
5160 'TEXAS-MEXICO BORDER
5170 PRINT #1, "PA 0,34;"
5180 PRINT #1, "PRPD4,2,0,2,9,11,0,4,1,0,5,7,3,0,4,-6,8,0,3,3,3,0,1,1,0,3,8,10,0,2,6,5,3,0,9,4,PU;"
5190 'BERMUDA
5200 PRINT #1, "PA275,31;"
5210 PRINT #1, "PRPD0,-1,2,0,0,1,-3,0,PU;"
5220 PRINT #1, "SI .30,.40;"
5230 PRINT #1, "PA225,48;LBATLANTIC"+CHR$(3): PRINT #1, "PA233,57;LBOCEAN"+CHR$(3): PRINT #1, "PA170,170;LBCARIBBEAN"+CHR$(3): PRINT #1, "PA25,170;LBPACIFIC"+CHR$(3):PRINT #1, "PA30,179;LBOCEAN"+CHR$(3):PRINT #1, "PA25,123;LBMEXICO"+CHR$(3)
5240 PRINT #1, "PA65,15;LBUNITED STATES"+CHR$(3)
5250 IF I.DO.LATLON=0 THEN GOTO 5350
5260 IF ID$="7470A" THEN PRINT #1, "SP0;":BEEP:PRINT :PRINT :PRINT TAB(6);"PLEASE INSTALL ";:COLOR 2,7:PRINT " GREEN P.3 PEN ";:COLOR 7,1:PRINT " IN PEN 1 AND PRESS ANY KEY TO CONTINUE" ELSE GOTO 5290
5270 A$=INKEY$:IF A$="" THEN 5270
5280 PRINT #1, "LT1,1;SP1;":GOTO 5300
5290 PRINT #1, "LT1,1;SP3;"
5300 FOR I=1 TO 10:PRINT #1, "PAPU",MAPXY(I,1),",0PD,",MAPXY(I,1),",199PU;":NEXT I
5310 FOR I=13 TO 18:PRINT #1, "PAPU0,",MAPXY(I,1),"PD,319,",MAPXY(I,1),"PU;":NEXT
5320 PRINT #1, "LT;SI .25,.35;"
5330 PRINT #1, "PA301,187;LB10"+CHR$(3): PRINT #1, "PA301,160;LB15"+CHR$(3): PRINT #1, "PA301,127;LB20"+CHR$(3): PRINT #1, "PA301,92;LB25"+CHR$(3): PRINT #1, "PA301,52;LB30"+CHR$(3):PRINT #1, "PA301,10;LB35"+CHR$(3)
5340 PRINT #1, "PA308,198;LB60"+CHR$(3): PRINT #1, "PA238,198;LB70"+CHR$(3): PRINT #1, "PA176,198;LB80"+CHR$(3): PRINT #1, "PA113,198;LB90"+CHR$(3): PRINT #1, "PA40,198;LB100"+CHR$(3)
5350 PRINT #1, "SI .30,.40;"
5360 PRINT #1, "SP2;"
5370 IF CITY=1 THEN PRINT #1,"SM*;PA65,67;SM;SL.15;PA20,69;LB";CITY$+CHR$(3) 'CORPUS CHRISTI, TEX
5380 IF CITY=2 THEN PRINT #1, "SM*;PA71,60;SM;SL.15;PA20,62;LB"CITY$+CHR$(3) 'Victoria,Texas
5390 IF CITY=3 THEN PRINT #1, "SM*;PA66,79;SM;SL.15;PA20,80;LB"CITY$+CHR$(3) 'BROWNSVILLE, TEXAS
5400 IF CITY=4 THEN PRINT #1, "SM*;PA80,55;SM;SL.15;PA30,50;LB"CITY$+CHR$(3) 'GALVESTON, TEXAS
5410 IF CITY=5 THEN PRINT #1, "SM*;PA119,48;SM;SL.15;PA120,46;LB"CITY$+CHR$(3) 'NEW ORLEANS, LA
5420 IF CITY=6 THEN PRINT #1, "SM*;PA81,52;SM;SL.15;PA38,49;LB"CITY$+CHR$(3) 'HOUSTON, TEXAS
5430 IF CITY=7 THEN PRINT #1, "SM*;PA175,86;SM;SL.15;PA178,88;LB"CITY$+CHR$(3) 'MIAMI, FLA
5440 IF CITY=8 THEN PRINT #1, "SM*;PA130,45;SM;SL.15;PA135,42;LB"CITY$+CHR$(3) 'MOBILE, ALA
5450 IF CITY=9 THEN PRINT #1, "SM*;PA136,47;SM;SL.15;PA82,45;LB"CITY$+CHR$(3) 'PENSACOLA
5460 IF CITY=10 THEN PRINT #1, "SM*;PA165,68;SM;SL.15;PA172,68;LB"CITY$+CHR$(3) 'ST PETERSBURG
5470 IF CITY=11 THEN PRINT #1, "SM*;PA171,48;SM;SL.15;PA98,45;LB"CITY$+CHR$(3) 'JACKSONVILLE
5480 IF CITY=12 THEN PRINT #1, "SM*;PA63,110;SM;SL.15;PA17,112;LB"CITY$+CHR$(3) 'TAMPICO, MEXICO
5490 IF CITY=13 THEN PRINT #1, "SM*;PA138,123;SM;SL.15;PA144,125;LB"CITY$+CHR$(3) 'COZUMEL, MEXICO
5500 IF CITY=14 THEN PRINT #1, "SM*;PA96,49;SM;SL.15;PA24,46;LB"CITY$+CHR$(3) 'LAKE CHARLES
5510 IF CITY=15 THEN PRINT #1, "SM*;PA174,33;SM;SL.15;PA122,35;LB"CITY$+CHR$(3) 'SAVANNAH, GA
5520 IF CITY=16 THEN I0=50:X(50)=XCITY:Y(50)=YCITY:GOSUB 3070 ELSE GOTO 5540
5530 PRINT #1, "SM*;PA",IMAP(50,0),IMAP(50,1),";SM;SL.15;PA",IMAP(50,0)-8*(LEN(CITY$)/2),IMAP(50,1)-8;"LB"CITY$+CHR$(3) ' your city
5540 PRINT #1, "PA5,-5;LB";STORMNAME$;"     ";D$(NP-1);"     ";T$(NP-1);"     ";Y(NP-1);"     ";X(NP-1);" "+CHR$(3)
5550 IF ID$="7475A" THEN PRINT #1, "IW250,596,10250,7290;"
5560 IF ID$="7550A" THEN PRINT #1, "IW80,320,10080,7000;"
5570 IF ID$="7470A" THEN PRINT #1, "IW130,279,10000,6965;"
5580 FOR I0=0 TO NP-1
5590 OUT.OF.RANGE=0:IMAP(I0,2)=0:GOSUB 3070
5600 IF I0=0 THEN PRINT #1, "PA";IMAP(I0,0),IMAP(I0,1);"PD;"
5610 PRINT #1, "PA";IMAP(I0,0),IMAP(I0,1)
5620 NEXT
5630 GOSUB 5640:GOTO 5690
5640 IF ID$="7470A" THEN PRINT #1, "PA";IMAP(I0-1,0),IMAP(I0-1,1);";CI 4,5;CI 3.5,5;CI3,5;CI 2.5,5;CI2,5;CI1.5,5;CI1,5;PU;"
5650 IF ID$<>"7470A" THEN PRINT #1, "PA";IMAP(I0-1,0),IMAP(I0-1,1);";CI 4,5;WG4,0,360,5;PU;"
5660 PRINT #1,"PR0,-4PD;AR6,2,90,5;PU;PA";IMAP(I0-1,0),IMAP(I0-1,1);"PR0.7,-4PD;AR6.7,2.7,70,5;PU;PA";IMAP(I0-1,0),IMAP(I0-1,1);"PR1,-4PD;AR7,3,60,5;PU;"
5670 PRINT #1,"PA";IMAP(I0-1,0),IMAP(I0-1,1);"PR0,4PD;AR-6,-2,90,5;PU;PA";IMAP(I0-1,0),IMAP(I0-1,1);"PR-.7,4PD;AR-6.7,-2.7,70,5;PU;PA";IMAP(I0-1,0),IMAP(I0-1,1);"PR-1,4PD;AR-7,-3,60,5;PU;"
5680 RETURN
5690 IF NSTORM<2 THEN GOTO 5850
5700 FOR J=2 TO NSTORM
5710 IF ID$<>"7470A" THEN PRINT #1,"SP",(J+2),";":GOTO 5760
5720 IF J=3 THEN 5750
5730 PRINT #1, "SP0;":BEEP:PRINT :PRINT TAB(6);"PLEASE INSTALL PENS FOR ADDITIONAL STORM TRACKS; PRESS ANY KEY TO CONTINUE":BEEP
5740 A$=INKEY$:IF A$="" THEN 5740
5750 IF J=3 THEN PRINT #1, "SP2;" ELSE PRINT #1, "SP1;"
5760 PRINT #1, "PA5,";(8*(J-1));";LB";STORMNAME$(J);" "+CHR$(3)
5770 I=((J-1)*50+1)
5780 FOR I0=I TO LP(J)-1
5790 OUT.OF.RANGE=0:IMAP(I0,2)=0:GOSUB 3070
5800 IF I0=I THEN PRINT #1, "PA";IMAP(I0,0),IMAP(I0,1);"PD;"
5810 PRINT #1, "PA";IMAP(I0,0),IMAP(I0,1)
5820 NEXT I0
5830 GOSUB 5640
5840 NEXT J
5850 PRINT #1,"SP0;"
5852 IF ID$="7550A" THEN PRINT #1,"PG;"
5860 CLOSE #1
5870 RETURN
5880 REM ****************** INTRO LOGO *******************
5890 CLS
5900 LETRS$="C2R30M+3,-2E2M+3,-4U6M-12,-26M+2,-6E4R22M+6,-10L30M-4,+1M-4,3M-4,+8M-1,+4D4M+12,+24M-2,+6L20M-6,+10BM+6,-10M-5,+2M-7,+12R30M+6,-4BM-9,-10E2U2M-12,-26U4M+2,-6M+7,-5BM+7,+11M+4,-2R19E4"
5910 LETRT$="R10M+30,-50R15M+6,-10L40M-6,+10R15M-30,+50BR10M-8,+4L10M+30,-50L15M+6,-10M+8,-4BM+34,+10M-6,+4L11"
5920 LETRO$="R40M+36,-60L40M-36,+60BM+16,-10R20M+24,-40L20M-24,+40BM+24,+10M-8,+4L40M+36,-60M+8,-4BM+2,+14R15M-22,+36"
5930 LETRR$="R10M+12,-20R2M+9,+20R10M-9,-20R14M+3,-2E4M+13,-20M+1,-3U3M-1,-4H2M-1,-2L28M-37,+60BM+28,-30R15M+2,-1M+3,-2E2M+6,-10M+1,-2M-1,-2M-2,-1L15M-12,+20BR11M+2,-1M+3,-2E2M+4,-6M+1,-2M-1,-2M-2,-1L11BM-17,+27M+10,+23R10M+3,-4"
5940 LETRR2$="BM-33,+0M-8,+4L10M+37,-60M+8,-4"
5950 LETRM$="R10M+28,-47M-2,+21M+18,-14M-24,+40R10M+36,-60L10M-22,+20M+2,-20L10M-36,+60BR10M-8,+4L10M+36,-60M+8,-4BM-3,+20M-1,+17M+4,-3BM+8,-6M-22,+36R10M+8,-4"
5960 TREE$="C2R7M+2,-5H1F1M+3,-5H1F1M+4,-5H1F1E5H1F1M+6,-5H1F1M+6,-3H1F1M+5,-3H1F1M+5,-2H1F1M+5,-2H1F1M+5,-2H1F1M+5,-1H1F1R5U1D1R7H2E2L7D1U1L5D1U1M-7,+1F1H1M-5,+2F1H1M-6,+2F1H1M-4,+2F1H1M-5,+2F1H1M-7,+3F1H1G5F1H1G6F1H1M-4,+5F1H1M-4,+5F1H1M-4,+8"
5970 TREE2$="M+5,+2M+9,+3M+10,+5M+7,+4H2M-2,-4M-8,-4M-5,-3M-5,-2R7M+3,+1M+10,+5M+9,+5R3H3M-14,-7M+16,+3H2M-19,-5M-9,-1M+7,-2R9M+12,+3E1H2M-11,-3L12M-9,+3M-7,+3G2F2"
5980 SCREEN 1,0:COLOR 1,0
5990 PSET (5,120),2:DRAW "XLETRS$;"
6000 PSET (64,120),2:DRAW "XLETRT$;"
6010 PSET (109,120),2:DRAW "XLETRO$;"
6020 PSET (169,120),2:DRAW "XLETRR$;XLETRR2$;"
6030 PSET (229,120),2:DRAW "XLETRM$;"
6040 PSET (20,55),2:DRAW "XTREE$;BM+70,-37XTREE2$;"
6050 PSET (40,55),2:DRAW "S3XTREE$;BM+65,-31XTREE2$;"
6060 PSET (105,55),2:DRAW "S3XTREE$;"
6070 PSET (200,35),2:DRAW "A2XTREE2$;"
6080 PAINT (20,115),2,2:PAINT (5,121),3,2:PAINT (31,106),3,2:PAINT (45,72),3,2
6090 PAINT (70,116),2,2:PAINT (64,122),3,2:PAINT (105,72),3,2
6100 PAINT (113,118),2,2:PAINT (109,122),3,2:PAINT (153,72),3,2
6110 PAINT (173,118),2,2:PAINT (167,122),3,2:PAINT (203,122),3,2:PAINT (213,72),3,2
6120 PAINT (232,118),2,2:PAINT (227,122),3,2:PAINT (265,80),3,2:PAINT (258,122),3,2
6130 PAINT (23,53),3,2:PAINT (93,16),1,2
6140 PAINT (108,53),3,2:
6150 PAINT (43,53),3,2:PAINT (100,30),1,2:PAINT (110,30),1,2:PAINT (110,36),1,2:PAINT (112,37),1,2:PAINT (108,35),1,2:PAINT (106,34),1,2:PAINT (104,33),1,2
6160 PAINT (190,34),1,2:PAINT (177,33),1,2:PAINT (175,32),1,2:PAINT (173,31),1,2
6170 LOCATE 19,10:PRINT "VERSION 2.0  10/24/85";
6180 LOCATE 21,5:PRINT "FROM A PROGRAM BY WHMC  7/27/84";
6190 LOCATE 23,2:PRINT "PROGRAM ENHANCEMENTS BY: THOMAS PESEK";
6200 LOCATE 25,8:PRINT "Press any key to continue";
6210 A$=INKEY$:IF A$="" THEN 6210
6220 SCREEN 0,0,0:WIDTH 80
6230 RETURN
```
{% endraw %}

## STORM.DOC

{% raw %}
```

The file STORM.LBR contains the data files for STORM.BAS.
To extract the data files, use LUE.COM. 
Copy STORM.LBR and LUE.COM to another disk and type LUE STORM.
To run STORM, you must have BASICA, then type BASICA STORM.

FOR MORE INFORMATION, WRITE
THE PUBLIC (SOFTWARE) LIBRARY
P.O.BOX 61565
HOUSTON, TX 77208
```
{% endraw %}

## SUNSET.BAS

{% raw %}
```bas
10 REM One note regarding azimuth angles: In the SOUTHERN hemisphere,
20 REM this program assumes that the South Pole is zero degrees, and
30 REM the azimuth angle is measured COUNTER-clockwise through East.
40 REM Therefore, an azimuth angle of 108 degrees is NORTH of East.
50 REM When Lat and Long are input, use a negative value for Southern
60 REM Latitudes and for Eastern Longitudes.
70 REM ----------------- Program Begins ---------------------------
80 CLS
90 PRINT"This program finds the declination of the sun, the equation"
100 PRINT"of time, the azimuth angles of sunrise and sunset, and the"
110 PRINT"times of sunrise and sunset for any point on earth."
120 PRINT
130 PRINT"Input eastern longitudes and southern latitudes as NEGATIVE."
140 PRINT
150 PRINT
160 REM
170 REM
180 DIM N(12)
190 PL=3.14159/26:J=57.2958
200 INPUT"ENTER LATITUDE (FORMAT DD.MM)";D1
210 INPUT"ENTER LONGITUDE (FORMAT DD.MM)";D2
220 GOSUB 780
230 LA = D1
240 IF LA < 0 THEN LA = LA + 180
250 IF D2 < 0 THEN D2 = D2 + 360
260 LO = FIX(D2/15)*15 :REM finds time zone beginning
270 TD=(D2-LO)/15
280 INPUT"ENTER MONTH,DAY (11,25)";M,DA
290 FOR I=1 TO 12: READ N(I):NEXT I
300 DATA 0,31,59,90,120,151
310 DATA 181,212,243,273,304,334
320 X=(N(M)+DA)/7
330 REM
340 D=0.456-22.195*COS(PL*X)-0.43*COS(2*PL*X)-0.156*COS(3*PL*X)+3.83*SIN(PL*X)+0.06*SIN(2*PL*X)-0.082*SIN(3*PL*X)
350 REM
360 PRINT
370 PRINT"DECLINATION OF SUN:";
380 PRINT USING"###.#";D;
390 PRINT" DEGREES"
400 E=0.008+0.51*COS(PL*X)-3.197*COS(2*PL*X)-0.106*COS(3*PL*X)-0.15*COS(4*PL*X)-7.317001*SIN(PL*X)-9.471001*SIN(2*PL*X)-0.391*SIN(3*PL*X)-0.242*SIN(4*PL*X)
410 REM
420 PRINT"EQUATION OF TIME:";
430 PRINT USING"###.#";E;
440 PRINT" MINUTES"
450 CL=COS(LA/J):SD=SIN(D/J):CD=COS(D/J):Y=SD/CL
460 IF ABS(Y)=>1 THEN PRINT"NO SUNRISE OR SUNSET":END
470 Z = 90 - J*ATN(Y/SQR(1-Y*Y))
480 PRINT"AZIMUTH OF SUNRISE:";
490 PRINT USING"####.#";ABS(Z);
500 PRINT" DEGREES"
510 PRINT"AZIMUTH OF SUNSET: ";
520 PRINT USING"####.#";360-ABS(Z);
530 PRINT" DEGREES"
540 ST=SIN(Z/J)/CD
550 IF ABS(ST)>=1 THEN T=6:TT=6:GOTO 590
560 CT=SQR(1-ST*ST)
570 T=J/15*ATN(ST/CT)
580 TT=T
590 IF D<0 AND LA<90 THEN T=12-T:TT=T
600 IF D>0 AND LA>90 THEN T=12-T: TT=T
610 T=T+TD-E/60-0.04
620 GOSUB 690
630 PRINT"TIME OF SUNRISE:";T1$;":";T2$;" ";T$;"L.T. ";GM$;":";T2$;" GM"
640 T=12-TT:T=T+TD-E/60+0.04
650 CNT=1
660 GOSUB 690
670 PRINT"TIME OF SUNSET: ";T1$;":";T2$;" ";T$;"L.T. ";GM$;":";T2$;" GM"
680 END
690 T1=INT(T):T2=T-T1:T1$=STR$(T1):T2=INT((T2*600+5)/10)
700 T2$=STR$(T2):T2$=RIGHT$(T2$,LEN(T2$)-1)
710 IF INT(T2)<10 THEN T2$="0"+T2$
720 GM = FIX(D2/15) :REM calculate difference between GM and local time
730 IF CNT = 0 THEN GM = VAL(T1$)+GM :REM GMT for sunrise
740 IF CNT > 0 THEN GM = VAL(T1$)+12+GM :REM GMT for sunset
750 IF GM +(VAL(T2$)/60)> 24 THEN GM = GM - 24
760 GM$ = STR$(GM) :GM$ = RIGHT$("0"+GM$,2)
770 RETURN
780 REM This subroutine converts DD.MM input to DD.DD
790 DEGTMP = (ABS(D1)-ABS(FIX(D1))) *100/60
800 D1 = (FIX(ABS(D1))+DEGTMP)*SGN(D1)
810 DEGTMP = (ABS(D2)-ABS(FIX(D2))) *100/60
820 D2 = (FIX(ABS(D2))+DEGTMP)*SGN(D2)
830 RETURN
840 END
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0538

     Volume in drive A has no label
     Directory of A:\

    AGNES              256  12-04-85  11:24a
    ALICIA             512  12-04-85  11:24a
    BETSEY             640  12-04-85  11:24a
    BEULAH             512  12-04-85  11:24a
    CAMILLE            384  12-04-85  11:24a
    CARLA              384  12-04-85  11:24a
    CARMEN             384  12-04-85  11:24a
    CELIA              256  12-04-85  11:24a
    DANNY              384  12-04-85  11:24a
    ELENA              896  12-04-85  11:24a
    FILES538 TXT      1660   7-02-86   4:49p
    GALV1900           384  12-04-85  11:24a
    GLORIA             384  12-04-85  11:24a
    GO       BAT       875   7-02-86   5:10p
    INEZ               512  12-04-85  11:24a
    MOONBEAM COM     27544   3-14-85   6:11p
    MOONBEAM DOC       974   3-14-85   6:19p
    NOTES538 TXT      5273   7-02-86   4:44p
    OPTICS   COM     13758   8-31-85  10:58a
    OPTICS   PAS      3968   8-31-85   9:57a
    SOLAR    BAS      5484   1-01-80  12:21a
    STAR     REC     81675   3-12-85  10:35a
    STORM    BAS     33775  10-27-85  10:33a
    STORM    DOC       324  11-24-85   1:18p
    SUNSET   BAS      2816   6-08-84   3:53p
           25 file(s)     184014 bytes
                          126976 bytes free
