---
layout: page
title: "PC-SIG Diskette Library (Disk #437)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0437/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0437"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "HAM RADIO VOLUME 2 OF 2 (ALSO 436)"

    Ham it up!  Learn and practice your Morse with the variable speed sender
    and receiver programs.  Other routines help the amateur radio operator
    compute various electronic formulas, design antennas, locate satellites
    and calculate orbits.  RTTY and TTY are communication programs using
    Baudot, ASCII, or Morse code at varying speeds.
    
    The USAT program provides real time tracking of the OSCAR 9, 10, and 11
    and the RS 5, 7, and 8 satellites; the user specifies the date, time,
    length of time, and tracking interval.  Several programs calculate coil
    inductance, coil properties, signals for varying frequencies,
    resistance and reactance.  NETWORK provides analysis of user-specified
    circuits, to aid the amateur radio or electronic user.  The great circle
    distance between any two points is computed by GRCIRDIS when the
    latitudes and longitudes are entered.  An alphabetized list of all of
    the counties in each state can be found in the COUNTIES files.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## COILINDU.BAS

{% raw %}
```bas
10 'THIS PROGRAM CALCULATES THE LENGTH AND TOTAL NUMBER OF TURNS
20 'FOR A SINGLE LAYER AIR-CORE COIL. SEE RADIO HANDBOOK FOR TURNS-PER-INCH
30 'DATA FOR VARIOUS WIRE SIZES.
35 DEFDBL T,R'DEFINES VARIBLES STARTING WITH T OR R AS DOUBLE PRECISION
40 INPUT "INDUCTANCE IN MICROHENRYS  ";H
50 INPUT "DIAMETER OF COIL  ";D
60 INPUT "TURNS PER INCH  ";TI
70 R=D/2
80 L=3 'FIRST TRIAL LENGTH
90 T=(H*((9*R)+(10*L))/R^2)^.5
100 LT=T/TI 'CALCULATES LENGTH BASED ON TURNS PER INCH
110 E=L-LT 'CALCULATE ERROR IN LENGTH
120 L=L-E 'RE-ESTIMATE LENGTH
130 IF ABS(E)<.01 GOTO 150
140 GOTO 90
150 PRINT
160 L=INT(L*100+.5)/100
170 PRINT "COIL LENGTH IS: ";L;"INCHES"
180 T1=L*TI
190 T1=INT(T1*10+.5)/10
200 PRINT "TOTAL NUMBER OF TURNS IS: ";T1
210 END
```
{% endraw %}

## DIPOLE.BAS

{% raw %}
```bas
10 REM THIS PROGRAM CALCULATES THE LOADING COIL INDUCTANCE FOR AN OFF-CENTER
20 REM LOADED DIPOLE ANTENNA. THE PROGRAM APPEARED IN THE DECEMBER, 1981
30 REM ISSUE OF CQ MAGAZINE, PAGE 44. THE PROGRAM MUST BE RUN TWICE, ONCE
40 REM FOR EACH LEG OF THE DIPOLE, UNLESS BOTH LEGS ARE THE SAME
50 REM LENGTH (CENTER FED). SEE ARTICLE FOR MORE DETAIL.
60 REM
70 REM PROGRAM COVERTED FROM APPLESOFT TO IBM BASIC 11/4/82
150 CLS
160 PRINT "LOADED DIPOLE DESIGN PROGRAM"
170 PRINT:PRINT
180 INPUT"OPERATING FREQUENCY IN MHZ ";F
190 PRINT:PRINT
200 INPUT"TOTAL LENGTH IN FEET ";A
210 PRINT:PRINT
220 INPUT"FEET FROM CENTER TO LOADING COIL ";B
230 PRINT:PRINT
240 X=((234/F)-B)
250 Y=((A/2)-B)
260 INPUT"DO YOU WANT TO USE THE WIRE TABLE (Y OR N) ";Y$
270 IF Y$="Y" THEN GOSUB 430 ELSE GOSUB 560
290 IF Y$="Y" OR Y$="N" THEN 320
310 GOTO 260
320 S1=1000000!/(68*3.1417^2*F^2)
325 ON ERROR GOTO 595
330 S2=1/X*(LOG(24*X/D)-1)
340 S3=(1-F*B/234)^2-1
350 S4=1/Y*(LOG(24*Y/D)-1)
360 S5=(Y*F/234)^2-1
370 S6=S1*(S2*S3-S4*S5)
380 S6=INT(S6*100+.5)/100
390 PRINT:PRINT:PRINT
400 PRINT"LOADING COIL IS ";S6;" MICROHENRYS"
405 PRINT
410 PRINT"WOUND WITH ";D;" WIRE"
412 PRINT:PRINT:PRINT
420 END
430 PRINT
440 INPUT"WIRE GAUGE (#10 TO #22) ";D
450 IF D=10 THEN D=.102:RETURN
460 IF D=12 THEN D=.081:RETURN
470 IF D=14 THEN D=.064:RETURN
480 IF D=16 THEN D=.051:RETURN
490 IF D=18 THEN D=.04:RETURN
500 IF D=20 THEN D=.032:RETURN
510 IF D=22 THEN D=.025:RETURN
520 PRINT
530 PRINT"WIRE GAUGE MUST BE AN EVEN NUMBER IN RANGE FROM #10 TO #22"
550 PRINT:PRINT:GOTO 430
560 PRINT
570 INPUT"WHAT IS THE ELEMENT (WIRE) DIAMETER IN INCHES ";D
580 RETURN
595 BEEP:BEEP:BEEP:PRINT:PRINT:PRINT
600 PRINT"A MATH ERROR HAS OCCURED. ONE OF THE INPUTS IS IMPOSSIBLE."
610 PRINT"TRY ANOTHER LENGTH OR DISTANCE. SEE ARTICLE IN DECEMBER, 1981"
620 PRINT"ISSUE OF CQ MAGAZINE, PAGE 44 FOR DETAILS OF THIS PROGRAM."
630 PRINT:PRINT
640 GOTO 200
650 END
```
{% endraw %}

## FILES437.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No 437   Ham Radio #2                                           v1.1
---------------------------------------------------------------------------
The USAT program provides real time tracking of the OSCAR 9, 10, & 11 and
the RS 5, 7, & 8 satellites; the user specifies the date, time, length of
time, and tracking interval. Several programs calculate coil inductance,
coil properties, signals for varying frequencies, resistance and reactance.
NETWORK provides analysis of user-specified circuits, to aid the amateur
radio or electronic user. The great circle distance between any two points
is computed by GRCIRDIS when the latitudes and longitudes are entered. An
alphabetized list of all of the counties in each state can be found in the
COUNTIES files.
 
USAT     BAS  Real time tracking of OSCAR and RS satellites
ELEMENTS DAT  Data for USAT.BAS
GROUND   DAT  "
MAP      DAT  "
USAT     EXE  Real time tracking of OSCAR and RS satellites (XEQ form)
COILINDU BAS  Coil length & no. of turns for user-specified inductance
DIPOLE   BAS  Loading coil inductance for loaded dipole antenna
INTERMOD BAS  Signal, 3rd and 5th order product for >= 3 frequencies
SMITH    BAS  Resistance & reactance along transmission line,rho,vswr
SMITH    DOC  Description of SMITH.BAS
NETWORK1 LBR  NETWORK, below, in library form
NETWORK  DOC  Description of NETWORK
NETWORK  BAS  AC Electronic circuit analysis
NETWORK  EXE  "  (XEQ form)
SAMPLE1  NET  Sample data for NETWORK.BAS
SAMPLE2  NET  "
SAMPLE3  NET  "
EDNTEST  NET  "
GRTCRCL1 BAS  Great circle distance between any two locations
COUNTIES AK   Alphabetical list of counties in Alaska
COUNTIES AL   "                                Alabama
COUNTIES AR   "                                Arkansas
COUNTIES AZ   "                                Arizona
COUNTIES CA   "                                California
COUNTIES CO   "                                Colorado
COUNTIES CT   "                                Connecticut
COUNTIES DE   "                                Delaware
COUNTIES FL   "                                Florida
COUNTIES GA   "                                Georgia
COUNTIES HI   "                                Hawaii
COUNTIES IA   "                                Iowa
COUNTIES ID   "                                Idaho
COUNTIES IL   "                                Illinois
COUNTIES IN   "                                Indiana
COUNTIES KS   "                                Kansas
COUNTIES KY   "                                Kentucky
COUNTIES LA   "                                Louisiana
COUNTIES MA   "                                Massachusetts
COUNTIES MD   "                                Maryland
COUNTIES ME   "                                Maine
COUNTIES MI   "                                Michigan
COUNTIES MN   "                                Minnesota
COUNTIES MO   "                                Missouri
COUNTIES MS   "                                Mississippi
COUNTIES MT   "                                Montana
COUNTIES NC   "                                North Carolina
COUNTIES ND   "                                North Dakota
COUNTIES NE   "                                Nebraska
COUNTIES NH   "                                New Hampshire
COUNTIES NJ   "                                New Jersey
COUNTIES NM   "                                New Mexico
COUNTIES NV   "                                Nevada
COUNTIES NY   "                                New York
COUNTIES OH   "                                Ohio
COUNTIES OK   "                                Oklahoma
COUNTIES OR   "                                Oregon
COUNTIES PA   "                                Pennsylvania
COUNTIES RI   "                                Rhode Island
COUNTIES SC   "                                South Carolina
COUNTIES SD   "                                South Dakota
COUNTIES TN   "                                Tennessee
COUNTIES TX   "                                Texas
COUNTIES UT   "                                Utah
COUNTIES VA   "                                Virginia
COUNTIES VT   "                                Vermont
COUNTIES WA   "                                Washington
COUNTIES WI   "                                Wisconsin
COUNTIES WV   "                                West Virginia
COUNTIES WY   "                                Wyoming
 
 
PC-SIG
1030D Duane Avenue
Sunnyvale, CA 94086
(408) 730-9291
(c) Copyright 1986,87 PC-SIG
```
{% endraw %}

## GRTCRCL1.BAS

{% raw %}
```bas
1000 REM Great Circle distance computations - GRTCRCL1.BAS
1010 REM ITT/Microsoft Advanced BASIC 1.00
1020 REM Hardware:  ITT-XTRA computer, monochrome display (text mode only).
1030 REM Revised for PC-SIG by J. Andrew Poth, 18. March 1987.  Corrected
1040 REM algorithm errors.   Program now yields correct results for all
1050 REM latitudes and longitudes.
1060 REM Adapted from GRCIRDIS.BAS (PC-SIG #437, V1 DS2, "Ham Radio #2")
1070 CLS
1080 LET C$=CHR$(186)
1090 PRINT TAB(11);CHR$(201);STRING$(58,205);CHR$(187)
1100 PRINT TAB(11);C$;TAB(70);C$
1110 PRINT TAB(11);C$;TAB(31);"GREAT CIRCLE DISTANCE";TAB(70);C$
1120 PRINT TAB(11);C$;TAB(70);C$
1130 PRINT TAB(11);CHR$(200);STRING$(58,205);CHR$(188)
1140 PRINT
1150 PRINT TAB(11);"This program computes the Great Circle distance between two"
1160 PRINT TAB(11);"stations on the Earth's surface.   The station  coordinates"
1170 PRINT TAB(11);"are entered in degrees, minutes and seconds of latitude and"
1180 PRINT TAB(11);"longitude.   The Great Circle distance is computed and dis-"
1190 PRINT TAB(11);"played in kilometers, statute miles and nautical miles."
1200 PRINT TAB(11);"Output is copied to the printer, if so desired."
1210 LOCATE 21,28: PRINT "Press <F5> to continue";: END
2000 CLS
2010 PRINT "Enter POSITIVE numbers (+deg, +min, +sec) for NORTH LATITUDES and"
2020 PRINT "for WEST LONGITUDES."
2030 PRINT "Enter NEGATIVE numbers (-deg, -min, -sec) for SOUTH LATITUDES and"
2040 PRINT "for EAST LONGITUDES."
2050 PRINT STRING$(80,205)
2060 LINE INPUT "Enter name of first station: "; A$
2070 PRINT
2080 INPUT "Station latitude (deg, min, sec): "; U1,U2,U3
2090 LET B=U1 + U2/60 + U3/3600
2100 INPUT "Station longitude (deg, min, sec): "; U1,U2,U3
2110 LET C=U1 + U2/60 + U3/3600
2120 PRINT
2130 PRINT STRING$(80,205)
2140 LINE INPUT "Enter name of second station: "; B$
2150 PRINT
2160 INPUT "Station latitude (deg, min, sec): "; U1,U2,U3
2170 LET E=U1 + U2/60 + U3/3600
2180 INPUT "Station longitude (deg, min, sec): "; U1,U2,U3
2190 LET F=U1 + U2/60 + U3/3600
2200 CLS
2210 LET PI=3.1415926535#
2220 LET G=(90-B)*PI/180
2230 LET K=ABS(C-F)
2240 LET L=(90-E)*PI/180
2250 LET N=(G+L)/2
2260 LET P=(G-L)/2
2270 LET Q=(K/2)*PI/180
2280 IF N=0 THEN LET N=N+1.000000e-20
2290 IF P=0 THEN LET P=P+1.000000e-20
2300 IF Q=0 THEN LET Q=Q+1.000000e-20
2310 IF S=0 THEN LET S=S+1.000000e-20
2320 LET R=ATN (((COS (Q)/SIN (Q))*(COS (P))/COS (N)))
2330 LET S=ATN ((COS (Q)/SIN (Q))*SIN (P)/SIN (N))
2340 LET T=ATN ((SIN (P)/COS (P))*SIN (R)/SIN (S))
2350 LET J=(2*T)*180/PI      ' Degrees of arc on Great Circle (J)
2360 LET U=ABS(J*111.1338)   ' Convert to kilometers (U)
2370 CLS
2380 PRINT STRING$(80,205)
2390 PRINT
2400 PRINT " First station:  "; A$
2410 LET IMAGE1$ = "& ####.### &"
2420 PRINT USING IMAGE1$; "      Latitude:",B,"degrees"
2430 PRINT USING IMAGE1$; "     Longitude:",C,"degrees"
2440 PRINT
2450 PRINT "Second station:  "; B$
2460 PRINT USING IMAGE1$; "      Latitude:",E,"degrees"
2470 PRINT USING IMAGE1$; "     Longitude:",F,"degrees"
2480 PRINT
2490 PRINT STRING$(80,205)
2500 PRINT
2510 PRINT "Great Circle distance from ";A$;" to ";B$;" is:"
2520 PRINT
2530 LET IMAGE2$ = "#####.# &"
2540 PRINT USING IMAGE2$; U,"kilometers"
2550 PRINT USING IMAGE2$; U/1.609344,"statute miles"
2560 PRINT USING IMAGE2$; U/1.609344*(5280/6076),"nautical miles"
2570 PRINT
2580 PRINT STRING$(80,205)
2590 PRINT
2600 LINE INPUT "Do you want a printed copy? "; ANS$
2610 IF LEFT$(ANS$,1) <> "Y" AND LEFT$(ANS$,1) <> "y" THEN 4000
3000 LOCATE 21,1: PRINT "Turn on printer.  Press <F5> when ready.";: END
3010 LPRINT
3020 LPRINT STRING$(80,61)
3030 LPRINT
3040 LPRINT " First station: "; A$
3050 LPRINT USING IMAGE1$; "      Latitude:",B,"degrees"
3060 LPRINT USING IMAGE1$; "     Longitude:",C,"degrees"
3070 LPRINT
3080 LPRINT "Second station: "; B$
3090 LPRINT USING IMAGE1$; "      Latitude:",E,"degrees"
3100 LPRINT USING IMAGE1$; "     Longitude:",F,"degrees"
3110 LPRINT
3120 LPRINT STRING$(80,61)
3130 LPRINT
3140 LPRINT "Great Circle distance from ";A$;" to ";B$;" is:"
3150 LPRINT
3160 LPRINT USING IMAGE2$; U,"kilometers"
3170 LPRINT USING IMAGE2$; U/1.609344,"statute miles"
3180 LPRINT USING IMAGE2$; U/1.609344*(5280/6076),"nautical miles"
3190 LPRINT
3200 LPRINT STRING$(80,61)
3210 FOR I = 1 TO 5
3220 LPRINT
3230 NEXT I
4000 FOR I = 24 TO 20 STEP -1
4010 LOCATE I,1: PRINT STRING$(50,32);
4020 NEXT I
4030 LOCATE 21,1: PRINT "Run program again (Y/N) ";
4040 INPUT ANS$
4050 IF LEFT$(ANS$,1)="Y" OR LEFT$(ANS$,1)="y" THEN 2000
9999 END
```
{% endraw %}

## INTERMOD.BAS

{% raw %}
```bas
10 CLS
20 PRINT :PRINT :PRINT :PRINT :PRINT
30 PRINT "INTERMOD PROGRAM FOR UP TO REQUESTED NUMBER OF FREQUENCIES"
40 PRINT
50 PRINT "       A MINIMUM OF 3 FREQUENCIES MUST BE ENTERED"
60 PRINT
70 INPUT "          HOW MANY FREQUENCIES DO YOU WANT";N
80 CLS
90 PRINT :PRINT :PRINT :PRINT
100 DIM A(100)
110 DIM B(100),C(100),D(100)
120 FOR I=1 TO N
130 PRINT "FREQUENCY ",I,"";
140 INPUT A(I)
150 IF A(I)= 0 THEN 170
160 NEXT I
170 B=1:C=2:D=3
180 FOR Z=11 TO 200:NEXT Z
190 FOR S=1 TO N
200 FOR I=1 TO (N*N)
210 IF A(B)=A(C) OR  A(C)=A(D) OR A(B)=A(D) GOTO 410
220 A=(2*A(B))-A(C):B2=(2*A(C))-A(B)
230 C2=(3*A(B))-(2*A(C)):D2=(3*A(C))-(2*A(B))
240 E=A(B)+A(C)-A(D):F=A(C)+A(D)-A(B)
250 G=A(D)+A(B)-A(C):H=A(B)+(2*A(C))-(2*A(D))
260 I1=A(B)+(2*A(D))-(2*A(C)):J=A(C)+(2*A(B))-(2*A(D))
270 K=A(C)+(2*A(D))-(2*A(B))
280 L=A(D)+(2*A(B))-(2*A(C)):M=A(D)+(2*A(C))-(2*A(B))
290 A1=(2*A(B))+A(C):B1=(2*A(C))+A(B)
300 C1=(3*A(B))+(2*A(C)):D1=(3*A(C))+(2*A(B))
310 E1=A(B)+A(C)+A(D):F1=A(C)+A(D)+A(B)
320 G1=A(D)+A(B)+A(C):H1=A(B)+(2*A(D))
330 I2=A(C)+(2*A(D))+(2*A(C)):J1=A(C)+(2*A(B))+(2*A(D))
340 K1=A(C)+(2*A(D))+(2*A(B))
350 L1=A(D)+(2*A(B))+(2*A(C)):M1=A(D)+(2*A(C))+(2*A(B))
360 M=A(I+2)+(2*A(I+1))-(2*A(I))
370 CLS
380 GOSUB 470
390 INPUT "PRESS 'ENTER' TO CONTINUE";V$
400 IF V$="" GOTO 410
410 C=C+1:D=D+1
420 NEXT I
430 B=B+1
440 C=1:D=2
450 NEXT S
460 GOTO 670
470 PRINT "2 - SIGNAL, 3RD ORDER PRODUCT OF";A(B);"AND";A(C)
480 PRINT "(-)     ",A,B2
490 PRINT "(+)     ",A1,B1
500 PRINT
510 PRINT "2 - SIGNAL, 5TH ORDER PRODUCT OF";A(B);"AND";A(C)
520 PRINT "(-)     ",C2,D2
530 PRINT "(+)     ",C1,D1
540 PRINT
550 IF A(D)=0 THEN RETURN
560 PRINT "3 - SIGNAL, 3RD ORDER PRODUCT OF";A(B);",";A(C);"AND";A(D)
570 PRINT "(-)     ",E,F,G
580 PRINT "(+)     ",E1,F1,G1
590 PRINT
600 PRINT "3 - SIGNAL, 5TH ORDER PRODUCT OF";A(B);",";A(C);"AND";A(D)
610 PRINT "(-)     "H;I1;J;K;L;M
620 PRINT "(+)     "H1;I2;J1;K1;L1;M1
630 IF A(D)=0 THEN 650
640 RETURN
650 INPUT "PRESS 'ENTER' TO  CONTINUE";T$
660 IF T$="" GOTO 670
670 CLS :PRINT :PRINT :PRINT :PRINT :PRINT
680 PRINT "           COMPUTATIONS COMPLETE"
690 INPUT "           DO YOU WANT ANOTHER RUN";W$
700 IF W$= "YES" THEN RUN
710 END
720 A1=(2*A(I))+A(I+1))
730 C1=(3*A(I))+(2*A(I+1)):B1=(2*A(I+1))+A(I)
740 D1=(3*A(I+1))+(2*A(1)):E1=A(I)+A(I+1)+A(I+2)
750 F1=A(I+1)+A(I+2)+A(I)
760 G1=A(I+2)+A(I)+A(I+1):H1=A(I)+(2*A(I+1))+(2*A(I+2))
770 I2=A(I+1)+(2*A(I+2))+(2*A(I+1))
780 J1=A(I+1)+(2*A(I))+(2*A(I+2))
790 K1=A(I+1)+(2*A(I+2))+(2*A(I))
800 L1=A(I+2)+(2*A(I))+(2*A(I+1))
810 M1=A(I+2)+(2*A(I+1))+(2*A(I))
820 RETURN
```
{% endraw %}

## NETWORK.BAS

{% raw %}
```bas
1000 ' NETWORK - An AC electronic circuit simulator program
1001 '
1002 ' Origional: "Verify Network Frequency Response With This
1003 '             Simple BASIC Program", Werner Schnider, EDN
1004 '		   magazine, Oct. 5, 1977 (HP 9830 implementation).
1005 '
1010 ' Next:      "Basic Program Performs Circuit Analysis", Richard
1011 ' 		   Steincross, EDN magazine, Sept. 1, 1982 (Apple ][
1012 ' 		   implementation with inductive elements added)
1013 '
1020 ' Now:	  Converted for the IBM PC/XT and compatibles by
1021 '		  Bruce A. Trolli, Cleveland, Oh., 2/16/85
1022 '
1100 CLS
1110 LOCATE 2,10:PRINT "AC ELECTRONIC CIRCUIT FREQUENCY RESPONSE"
1120 LOCATE 4,20:PRINT "NETWORK   (V1.0)"
1140 PRINT
1160 I=0:J=0:K=0:N=0:I1=0
1180 GOSUB 6200  			' Print help information on screen
1190 PRINT
1200 Y=40                               ' Allocate memory for circuit
1220 'Note: If you have less than 64K in your system, you must decrease Y
1240 DIM A(Y,Y),B(Y,Y),P(Y,Y),Q(Y,Y),B1(Y,Y),Q1(Y,Y)
1300 N=0:PI=3.141592:LGTEN=8.685889	' Initialize constants
1340 INPUT"What file for input? [Hit CR for list.] ",F$
1360 IF F$="" THEN FILES"*.net":GOTO 1340 	' Show possible input files
1380 FOR I=1 TO LEN(F$)				' Check for extension
1400 IF MID$(F$,I,1)="." THEN J=I
1420 NEXT I
1440 IF J<>0 THEN F$=MID$(F$,1,J-1)		' Add .NET if missing
1460 F$=F$+".net"
1500 OPEN F$ FOR INPUT AS #1
1510 PRINT
1530 '
1531 '
1532 '************* Main Loop for Input of Circuit Description *************
1533 '
1540 IF EOF(1) THEN GOTO 2220
1545 INPUT #1,Z$
1550 PRINT Z$
1560 E$=Z$:Z$=LEFT$(Z$,1)
1570 IF Z$=";" THEN GOTO 1540              'Comment for Description of Circuit
1580 IF Z$="R" OR Z$="r" THEN 1860         'Resistors
1600 IF Z$="C" OR Z$="c" THEN 1900         'Capacitors
1620 IF Z$="L" OR Z$="l" THEN 1960         'Inductors
1640 IF Z$="O" OR Z$="o" THEN 2140         'Amplifiers
1660 IF Z$="F" OR Z$="f" THEN 2020         'Fets
1680 IF Z$="B" OR Z$="b" THEN 2060         'Bipolar Transistors
1720 CLOSE #1                              'Not Valid Component
1730 BEEP:BEEP
1740 PRINT
1760 PRINT"Bad component type":PRINT Z$
1800 PRINT
1840 END
1850 '
1851 '
1852 ' ************** Enter Component Parameters into Matrix ****************
1853 '
1860 INPUT #1,I,J,V 					'resistor
1861 PRINT I,J,V
1880 V=1/V:GOSUB 3900:GOTO 1540
1900 INPUT #1,I,J,V 					' capacitor
1901 PRINT I,J,V
1920 V=V/1000000!
1940 GOSUB 4120:GOTO 1540
1960 INPUT #1,I,J,V 					' inductor
1961 PRINT I,J,V
1980 V=-1/V
2000 GOSUB 4260:GOTO 1540
2020 INPUT #1,K,J,I,V 					'fet
2021 PRINT K,J,I,V
2040 L=J:GOTO 2200
2060 INPUT #1,K,J,I,B1,V 				'npn transistor
2061 PRINT K,J,I,B1,V
2080 L=I:I=K:V=1/V:GOSUB 3900
2100 I=L:L=J:GOTO 2180
2120 							' op amp
2140 INPUT #1,K,L,J,I,B1,V 'in+,-:out+,-:,gain,ohms
2141 PRINT K,L,J,I,B1,V
2160 V=1/V:GOSUB 3900
2180 V=B1*V
2200 GOSUB 4400:GOTO 1540
2220 E=1:F=N                                            'end read io
2240 CLOSE #1
2300 FOR I=0 TO N
2320 FOR J=0 TO N
2340 P(I,J)=A(I,J)
2360 Q1(I,J)=B1(I,J)
2380 Q(I,J)=B(I,J)
2400 NEXT J:NEXT I
3000 PRINT
3020 PRINT "This circuit has ";N;"nodes"
3040 PRINT "Node";E;"is INPUT &  Node";F;"IS OUTPUT"
3060 PRINT
3200 ' entry point for new freq range
3225 INPUT "Enter file for data save [CR for no-save]: ",DATFILE$
3226 IF DATFILE$<>"" THEN OPEN DATFILE$ FOR OUTPUT AS #2
3260 PRINT
3280 PRINT "Frequency range [Start,End,Increment (- for log incr)] ";
3320 INPUT G,H,D
3340 PRINT
3360 PRINT"        Frequency         Amplitude       Amplitude(db)  Phase"
3370 PRINT"--------------------------------------------------------------------"
3380 IF D<0 THEN F2=-D:GOTO 3420
3400 F2=1+(H-G)/D
3420 IF D<0 THEN D=-((H/G)^(1/(-D-1)))
3440 F1=G
3460 FOR I1=1 TO F2
3480 W=2*PI*F1:D1=E:D2=F:GOSUB 5660
3500 V=B1:U=D2
3520 IF (-1)^(E+F) >0 THEN 3560
3540 U=U-180
3560 D1=E:D2=E
3580 GOSUB 5660:V=V/B1:U=U-D2
3600 IF U>180 THEN U=U-360
3620 IF U<-180 THEN U=U+360
3640 DB=LGTEN*LOG(V)
3645 T1=F1
3646 T2=V
3647 T3=DB
3648 T4=U
3660 PRINT USING "##########.#######";T1;
3680 PRINT USING "###########.#######";T2;
3685 PRINT USING "#######.#######";T3;
3700 PRINT USING "#####.#######";T4
3705 IF DATFILE$<>"" THEN WRITE #2,T1,T2,T3,T4
3720 IF D<0 THEN F1 =-F1*D:GOTO 3760
3740 F1=F1+D
3760 NEXT I1
3765 CLOSE #2
3780 PRINT CHR$(7): ' ring bell
3800 PRINT "Do you want a new freq sweep ";
3820 INPUT Z$
3840 PRINT:IF Z$="y" OR Z$="Y" THEN 3000
3860 END
3885 '
3886 ' Calculation Portion
3887 '
3888 '
3900 IF I=0 THEN 4000
3920 A(I,I)=A(I,I)+V
3940 IF J=0 THEN 4020
3960 A(I,J)=A(I,J)-V
3980 A(J,I)=A(J,I)-V
4000 A(J,J)=A(J,J)+V
4020 IF I<N THEN 4060
4040 N=I
4060 IF J<N THEN 4100
4080 N=J
4100 RETURN
4120 IF I=0 THEN 4220
4140 B(I,I)=B(I,I)+V
4160 IF J=0 THEN 4020
4180 B(I,J)=B(I,J)-V
4200 B(J,I)=B(J,I)-V
4220 B(J,J)=B(J,J)+V
4240 GOTO 4020
4260 IF I=0 THEN 4360
4280 B1(I,I)=B1(I,I)+V
4300 IF J=0 THEN 4020
4320 B1(I,J)=B1(I,J)-V
4340 B1(J,I)=B1(J,I)-V
4360 B1(J,J)=B1(J,J)+V
4380 GOTO 4020
4400 IF I<>0 AND K<>0 THEN A(I,K)=A(I,K)+V
4420 IF J<>0 AND L<>0 THEN A(J,L)=A(J,L)+V
4440 IF J<>0 AND K<>0 THEN A(J,K)=A(J,K)-V
4460 IF I<>0 AND L<>0 THEN A(I,L)=A(I,L)-V
4480 IF K<N THEN 4520
4500 N=K
4520 IF L<N THEN 4560
4540 N=L
4560 GOTO 4020
4580 ' determinant computation
4600 IF N>1 THEN 4640
4620 D1=A(N,N):D2=B(N,N):RETURN
4640 D1=1:D2=0:K=1
4660 L=K
4680 S=ABS(A(K,K))+ABS(B(K,K))
4700 FOR I=K TO N
4720 T=ABS(A(I,K))+ABS(B(I,K))
4740 IF S>=T THEN 4780
4760 L=I:S=T
4780 NEXT I
4800 IF L=K THEN 4960
4820 FOR J=1 TO N
4840 S=-A(K,J)
4860 A(K,J)=A(L,J)
4880 A(L,J)=S
4900 S1=-B(K,J)
4920 B(K,J)=B(L,J):B(L,J)=S1
4940 NEXT J
4960 L=K+1
4980 FOR I=L TO N
5000 S1=A(K,K)*A(K,K)+B(K,K)*B(K,K)
5020 S=(A(I,K)*A(K,K)+B(I,K)*B(K,K))/S1
5040 B(I,K)=(A(K,K)*B(I,K)-A(I,K)*B(K,K))/S1
5060 A(I,K)=S:NEXT I
5080 J2=K-1
5100 IF J2=0 THEN 5220
5120 FOR J=L TO N
5140 FOR I=1 TO J2
5160 A(K,J)=A(K,J)-A(K,I)*A(I,J)+B(K,I)*B(I,J)
5180 B(K,J)=B(K,J)-B(K,I)*A(I,J)-A(K,I)*B(I,J)
5200 NEXT I:NEXT J
5220 J2=K:K=K+1
5240 FOR I=K TO N
5260 FOR J=1 TO J2
5280 A(I,K)=A(I,K)-A(I,J)*A(J,K)+B(I,J)*B(J,K)
5300 B(I,K)=B(I,K)-B(I,J)*A(J,K)-A(I,J)*B(J,K)
5320 NEXT J:NEXT I
5340 IF K<>N THEN 4660
5360 L=1
5380 J2=INT(N/2)
5400 IF N=2*J2 THEN 5480
5420 L=0
5440 D1=A(N,N)
5460 D2=B(N,N)
5480 FOR I=1 TO J2
5500 J=N-I+L
5520 S=A(I,I)*A(J,J)-B(I,I)*B(J,J)
5540 S1=A(I,I)*B(J,J)+A(J,J)*B(I,I)
5560 T=D1*S-D2*S1
5580 D2=D2*S+D1*S1
5600 D1=T
5620 NEXT I
5640 RETURN
5660 N1=N:N=N-1:I=0
5680 FOR K=1 TO N
5700 IF K<>D1 THEN 5740
5720 I=1
5740 J=0
5760 FOR L=1 TO N
5780 IF L<>D2 THEN 5820
5800 J=1
5820 A(K,L)=P(K+I,L+J)
5840 B(K,L)=W*Q(K+I,L+J)+Q1(K+I,L+J)/W
5860 NEXT L:NEXT K
5880 GOSUB 4600
5900 N=N1
5920 B1=SQR(D1*D1+D2*D2)
5940 IF D1<>0 THEN 6020
5960 IF D2=0 THEN 6100
5980 IF D2>0 THEN D2=90:GOTO 6100
6000 D2=-90:GOTO 6100
6020 IF D1<0 THEN Q=180:GOTO 6060
6040 Q=0
6060 IF D2<0 THEN Q=-Q
6080 D2=Q+180*ATN(D2/D1)/PI
6100 RETURN
6200 '
6201 '
6202 '
6205 '******************** Print help information *****************
6206 '
6220 PRINT"Data must be in a text file in the following format:"
6240 PRINT
6260 PRINT"R    (resistor)"
6280 PRINT"from node #, to node #, value in ohms"
6300 PRINT"C    (capacitor)"
6320 PRINT"from node #, to node #, value in microfarads"
6340 PRINT"L    (inductor)"
6360 PRINT"from node #, to node #, value in henries"
6380 PRINT"F    (fet transistor)"
6400 PRINT"gate, source, drain, gain (amps/volts)"
6420 PRINT"B    (bipolar transistor)"
6440 PRINT"base, emitter, collector, beta, b-e ohms"
6460 PRINT"O    (op-amp)"
6480 PRINT"+in, -in, +out, -out, gain, ohms out"
6540 PRINT
6560 RETURN
```
{% endraw %}

## NETWORK.DOC

{% raw %}
```













                            NETWORK.BAS V1.0

                  AC ELECTRONIC CIRCUIT ANALYSIS PROGRAM























                  Configured for the IBM by:         Bruce A. Trolli
                                                         
                                                         2/24/85


















                                        1






        1.0) GENERAL

                NETWORK.BAS  outputs  the ac frequency reponse for a user 
            described  electronic  circuit.  The circuit  description  is 
            prepared  as  an  input  text  file  containing  a  two  line 
            specification   for  each  element  in   the   circuit.   The 
            specification  of  each element requires the user  to  assign 
            node  numbers  to each node in the circuit.  This  method  is 
            similar  to  many  commercially  available  circuit  analysis 
            programs.

                  When  NETWORK.BAS is run,  it builds a matrix from  the 
            user's circuit description file and evaluates the output node 
            voltage at each frequency under the assumption that the input 
            node has a 1 volt signal with zero phase angle applied to it.

                  At run time the user may specify the  frequencies to be 
            calculated  as  either a linearly or  logarithmically  spaced 
            interval.  Output  is  sent to the screen by default  but  an 
            optional output datafile may be specified at runtime.

                  Models   are   provided  for   Resistors,   Capacitors, 
            Inductors,  Bipolar  transistors (current controlled  current 
            sources),  Fets  (voltage  controlled  current  sources,  and 
            Opamps (voltage controlled voltage sources).





























                                        2





            2.0) ACKNOWLEDGEMENTS

                  Network.bas  is  an adaptation of an  existing  circuit 
            analysis  program  to  run on  the  IBM  PC.   The  origional 
            article:  "Verify Network Frequency Response With This Simple 
            Basic Program",  Werner A. Schnider, EDN magazine, October 5, 
            1977,   was  written  for  a Hewlett  Packard  9830A  desktop 
            calculator. 

                  The  program  was  modified to run on an Apple  II  and 
            reappeared  in  the  magazine  as:  "Basic  Program  Performs 
            Circuit   Analysis",   Richard  Steincross,   EDN   magazine, 
            September 1,  1982. This version expanded the capabilities of 
            the  program  by  adding inductors to  the  network  elements 
            supported.  It  also  allowed the user to specify  input  and 
            output nodes at run time.  After testing this program, I have 
            removed  this  feature because it did  not  produce  reliable 
            output for a number of simple circuits.





































                                        3





            3.0) REQUIREMENTS

                  NETWORK.BAS  runs  under  IBM or Microsoft  BASIC  (not 
            BASICA). It does  require a single disk drive. If your system 
            has  enough  memory to let BASIC max out its 64k program  and 
            data space limitation, then NETWORK will be able to handle 40 
            nodes. If your system has less memory it will be necessary to 
            adjust the number of nodes ( Y in line 1200 of the program).

                  Because the program output has been limited to text, it 
            can  run  with either the monochrome or  color  adapter.  The 
            input  and output formats have purposely been kept simple  to 
            allow  most  systems to run the  program.  (Besides,  I  have 
            enough  problems making programs print the correct answer let 
            alone print it on a jazzed up screen.) 








































                                        4






            4.0) RUNNING THE PROGRAM


            4.1) Number the nodes     

                  To analyze your circuit, it will be necessary to number 
            the nodes on your schematic diagram.  These node numbers will 
            be  used to prepare a precise description of the  circuit  so 
            that NETWORK can construct the circuits network equations.

                  The  input  node must be node number 1 and  the  output 
            node must be the highest node in the circuit.

                  AC  ground is node 0.  The 1 volt input that is applied 
            to node number 1 is referenced to node 0.


            4.2) Prepare Input File

                  Prepare   a  text  file  that  contains  a   two   line 
            description   for  each  circuit  element  according  to  the 
            definitions below. Note that comments may be added after the
            element  type so that the origional reference designations of 
            your circuit's schematic may be retained as part of the input 
            file.  This should make it easy to go back and forth  between 
            your schematic and the input file.

                  Also  comments may be added anywhere in the input  file 
            by placing a ";" at the beginning of the line.


             Resistors:

                  R              
                  from node, to node, value (in ohms)

                       Example:  A 1000 ohm resistor between nodes 1 and 2.


                       R
                       1,2,1000

                                 
             Capacitors:
                  C
                  from  node,  to node,value(in micro farads)

                       Example: A 10 uf capacitor between nodes 3 and 6.

                       C
                       3,6,10



                                        5





             Inductors:

                  L
                  from node, to node, value (in henries)


             Fets: 

                  F
                  gate node,  source node,  drain node,  transconductance
                                                           (amps/volt)
                                 
                  Example: A common source fet with 10 mmhos transconductance.
                            
                       F           
                       2,0,4,.01

             Bipolar Transistors:

                  B
                  base node, emitter node, collector node, beta, b-e resistance 
                                                                 (ohms)

                  Example: Emitter follower with beta=100
                  
                       B
                       3,4,0,100,.001

             Op Amps:

                  O
                  + in, - in, + out, - out, gain, output resistance (ohms)

                  Example: Voltage follower.

                       O
                       1,2,2,0,1000000,100


















                                        6





        4.3) RUN THE NETWORK.BAS PROGRAM

                      The  program will prompt for an input filename.  It 
            assumes that your circuit desctription is contained in a file 
            with a .NET extension.  If you can't remeber the name of  the 
            circuit  desctription  file,   hit  the  ENTER  key  and  all 
            filenames  with  extensions .NET on the default disk will  be 
            listed on the screen.

                      The  program  will  tell you the  number  of  nodes 
            actually  found in the circuit description file and tell  you 
            which nodes are being used as input and output nodes. At this 
            time verify these with your origional schematic to catch  any 
            errors   that  you  may  have  had  in  your  input   circuit 
            description.

                      The  program  will  now  ask for the  name  of  the 
            optional output file that will be used to store the data from 
            the program. You can avoid creating the output file by mearly 
            hitting the ENTER key.


                  When  the  program asks for the frequency range  to  be 
            analyzed,  either a linear increment (a positive number) or a 
            number  of logarithmically space points (a  negative  number) 
            may be specified.  If the logarithmic spacing is chosen,  the 
            number entered is the total number of points to be calculated 
            over the entire frequency interval.

                  At the end of the analysis, the program will prompt for 
            a  new  frequency range.  If you decline the  opportunity  to 
            recaclulate  over  a new range of  frequencies,  the  program 
            terminates.

         
        4.4) Cautions

                 Be  aware that there are some common pitfalls  that  can 
            occurr  with  circuit simulation programs of this  type.  One 
            that  frequently occurs is that where a dynamically  unstable 
            circuit is modeled (your amplifier is really an  oscillator). 
            Also  be  sure that there are some resistive elements  in  LC 
            circuits   to  prevent  resonances  from  peaking  into   the 
            ionosphere. These are only common sense.

                 Always   specify   some   resistance  in   the   bipolar 
            transisitor and opamp models to prevent them from blowing the 
            program away.







                                        7




        5.0) SAMPLE CIRCUITS

                 Sample  circuit description files have been included  to 
            help you get the hang of setting up circuits. These are:

             Sample1.net - A low pass RC filter circuit (1 hz cuttoff)

             Sample1.net - A high pass RL filter circuit (1 hz cuttoff)

             Sample3.net - A  bandpass LC filter circuit  (1 hz center)

             Edntest.net - The test circuit from the origional EDN article












































                                        8




        6.0) COMMENTS AND FEEDBACK

                 I  would appreciate some feedback from anyone  who  uses 
            the  program.  I  am planning to improve the program  in  the 
            future in the following areas:

             - Provide a more general purpose analysis that lets
               you pick inputs (multiple) and outputs (multiple)
               independant of node numbering.

             - Allow the output of one analysis to be fed into the input
               of the next to get around the memory limitations.

             - Add a plot routine (lin, log and semi log) to the program.
               If anyone has a general purpose routine like this, I'd
               like to hear from you. Most of the public domain stuff is
               junk unfortunately.

             - Run  it  through a compiler.  Right now the  circuits  are 
               solved using Cramer's rule which stinks when it comes to
               circuits above about 6 or 7 nodes. In general try to get
               it to run faster.

                                                Bruce  Trolli

                                                Cleveland RBBS
                                                (216-3310510)

               



























                                        9
-3310510)

               













```
{% endraw %}

## SMITH.BAS

{% raw %}
```bas
10 CLEAR:DEF SEG:KEY OFF:DEFINT I,J,K,M,N: FALSE = 0:TRUE = NOT FALSE:CLS:COLOR 7,0
20 PRINT STRING$(40,"#");:LOCATE 2,1: PRINT"#"TAB(40)"#"
30 PRINT "#    DIGITAL SMITH CHART by AA4L";:LOCATE ,40:PRINT "#"
40 PRINT"#"TAB(40)"#":PRINT "#    October 8th 1982"TAB(40)"#"
50 PRINT"#" TAB(40) "#":PRINT "#    Public Domain" TAB(40)"#"
60 PRINT "#" TAB(40) "#":PRINT STRING$(40,"#")
62 PRINT :PRINT :COLOR 15,0:PRINT "Note: Calculations are TOWARDS GENERATOR FROM KNOWN POINT!!"
63 PRINT "Values TOWARD LOAD may be derived by analyzing data backwards from"
64 PRINT "the point 180 degrees from the known point.":COLOR 7,0
70 PRINT :PRINT :BEEP:PRINT "Any Key"
80 ANY$=INKEY$: IF ANY$="" THEN GOTO 80
90 CLS
100 BEEP:INPUT "Line Z0 {default is 50}==> ";Z0:IF Z=0 THEN Z0=50
110 BEEP:PRINT :INPUT "Known R ==> ";R0
120 BEEP:PRINT :INPUT "Known X===> ";X0
130 BEEP:PRINT :INPUT "Calculation start at: (deg) {default 0} ";STRT
140 BEEP:PRINT :INPUT "Calculation end at: (deg) {default 180} ";ENDC:IF ENDC =0 THEN ENDC =180 ELSE IF ENDC > 180 THEN ENDC=180
150 BEEP:PRINT:INPUT "Calculation interval (deg) {default 10} ";DINTV: IF DINTV=0 THEN DINTV =10
160 BEEP:PRINT :INPUT "Frequency (mHz) {default is 7.15} ==> ";FREQ: IF FREQ=0 THEN FREQ=7.15
165 BEEP:PRINT :INPUT"Velocity factor {default 0.66} ==> ";VF:IF VF=0 THEN VF=0.66
170 BEEP:PRINT:INPUT "Hardcopy (y/n) {default no} ";PRT$: IF PRT$="y" OR PRT$ ="Y" THEN PRT = TRUE ELSE PRT = FALSE
175 IF PRT THEN GOTO 2000
180 GOSUB 1000
200 R0=R0/Z0:X0=X0/Z0
300 FOR THETA = STRT TO ENDC STEP DINTV
310 THETA1 =THETA: IF THETA1 >89.99 AND THETA1 <=90 THEN THETA1=89.99
320 IF THETA1<90.00999 AND THETA1 => 90 THEN THETA1 = 90.00999
330 TN=TAN(THETA1*3.141592654#/180)
340 R=Z0*R0*(1+TN*TN)/((1-X0*TN)*(1-X0*TN)+(R0*TN)*(R0*TN))
350 X=Z0*(X0*(1-TN*TN)+(1-(R0*R0)-(X0*X0))*TN)/((1-X0*TN)*(1-X0*TN)+(R0*TN)*(R0*TN))
352 IF R>9999 THEN R=9999
353 IF X>9999 THEN X=9999
354 IF X<-9999 THEN X=-9999
360 G=R/(R*R + X*X):B= -X/(R*R + X*X)
361 IF G>9.999001 THEN G=9.999001
362 IF B>9.999001 THEN B=9.999001
365 IF PRT GOTO 375
370 PRINT SPC(2);:PRINT USING"###.#";THETA;:PRINT SPC(2)"|"SPC(4);:PRINT USING"#####.##";R;:PRINT SPC(2)"|"SPC(4);:PRINT USING"#####.##";X;:PRINT SPC(2)"|"SPC(7);:PRINT USING"#.###";G;:PRINT SPC(2)"|"SPC(6);:PRINT USING"#.###";B;:PRINT SPC(2)"|";
371 GOTO 380
375 LPRINT SPC(2);:LPRINT USING"###.#";THETA;:LPRINT SPC(2)"|"SPC(4);:LPRINT USING"#####.##";R;:LPRINT SPC(2)"|"SPC(4);:LPRINT USING"#####.##";X;:LPRINT SPC(2)"|"SPC(7);:LPRINT USING"#.###";G;:LPRINT SPC(2)"|"SPC(6);:LPRINT USING"#.###";B;
376 LPRINT SPC(2)"|";
380 LENG=(THETA/(0.367*FREQ))*VF:LENGFT=INT(LENG):LENGIN=12*(LENG-LENGFT)
385 IF PRT GOTO 395
390 PRINT SPC(1);:PRINT USING"###";LENGFT;:PRINT"'";:PRINT USING "##.#";LENGIN;:PRINT CHR$(34)
391 GOTO 400
395 LPRINT SPC(1);:LPRINT USING"###";LENGFT;:LPRINT"'";:LPRINT USING "##.#";LENGIN;:LPRINT CHR$(34)
396 GOTO 500
400 IF CSRLIN<24 THEN GOTO 500
410 BEEP
420 WT$=INKEY$:IF WT$="" THEN GOTO 420
430 CLS:GOSUB 1000
500 NEXT
505 IF PRT THEN GOTO 530
510 BEEP:PRINT :PRINT "any key":
520 WT$=INKEY$:IF WT$=""THEN GOTO 520
530 R0=R0*Z0:X0=X0*Z0:RHO=SQR(((R0-Z0)*(R0-Z0)+X0*X0)/((Z0+R0)*(Z0+R0)+X0*X0)):SWR=(1+RHO)/(1-RHO)
535 IF PRT THEN GOTO 545
540 CLS: PRINT"Freq ==> ";FREQ:PRINT :PRINT "rho ==>   ";:PRINT USING"#.###";RHO:PRINT:PRINT"vswr ==> ";:PRINT USING"##.##";SWR
541 GOTO 550
545 LPRINT:LPRINT"Freq ==> ";FREQ:LPRINT :LPRINT "rho ==>   ";:LPRINT USING"#.###";RHO:LPRINT:LPRINT"vswr ==> ";:LPRINT USING"##.##";SWR
546 LPRINT CHR$(12)
550 BEEP:PRINT:PRINT"Again? (y/n)"
560 YN$=INKEY$:IF YN$=""THEN GOTO 560 ELSE IF YN$="y" OR YN$="Y" THEN GOTO 90 ELSE CHAIN "MENUB.BAS"
999 CHAIN "MENUB.BAS"
1000 CLS:COLOR 0,7:PRINT SPACE$(80);:LOCATE 1,1
1010 PRINT TAB(3) "Deg" TAB(10) "|      R" TAB(25) "|      X" TAB(40) "|      G" TAB(55) "|      B" TAB(69) "|   Length":COLOR 7,0
1020 RETURN
1999 CHAIN "MENUB.BAS"
2000 LPRINT TAB(3) "Deg" TAB(10) "|      R" TAB(25) "|      X" TAB(40) "|      G" TAB(55) "|      B" TAB(69) "|   Length"
2010 LPRINT STRING$ (80,"*");:GOTO 200
```
{% endraw %}

## USAT.BAS

{% raw %}
```bas
1 ' REMOVE LINES 3790 AND 3810 FOR INTERPRETERRUN , THE DELAYS ARE IN THERE
2 ' FOR TIMING IN THE COMPILED RUN ONLY
3 ' YOU WILL NEED THE FILES "MAP.DAT","ELEMENTS.DAT" AND "GROUND.DAT" TO RUN THIS PROGRAM
10 '**** SATAUS Menuprogramm de OE1HSI VERSION 1.5  26.JAN. 1985
20 KEY OFF:SCREEN 0,1:WIDTH 80:COLOR 14,1,0:CLS:CLEAR:PRINT:PRINT
30 ON ERROR GOTO 20
40 KEY(9) OFF:KEY(10) OFF
50 PRINT:PRINT"            SELECT ONE OF THE FOLLOWING OPTIONS:"
60 PRINT:PRINT" (P) ORBITAL PREDICTION PROGRAM"
70 PRINT:PRINT" (R) REALTIME TRACKING AND HIGH RESOLUTION SCREEN"
80 PRINT:PRINT" (C) CHANGE, ADD, DELETE ELEMENTS OF SATELLITES"
90 PRINT:PRINT" (G) CHANGE OR ENTER GROUNDSTATION DATA"
100 COLOR 12,1,0:LOCATE 14,1:PRINT" (D) RETURN TO DOS":COLOR 14,1,0
110 BEEP
120 LOCATE 17,3:PRINT"ENTER SELECTION (P,R,C,G,D)--> "
130 Z$="PpRrCcDdGg"
140 K$=INKEY$:IF K$="" THEN 140
150 COLOR 14,1,0:K=INSTR(Z$,K$)
160 ON K GOTO 5000,5000,2000,2000,200,200,180,180,1450,1450
170 BEEP:COLOR 28,1,0:GOTO 110
180 SYSTEM
200 ' ****** SATFILE.BAS - VERSION 1.0, ISSUE 1.0 - HSIMODIF.1/25/85 ******
210 KEY OFF:SCREEN 0,1:WIDTH 80:COLOR 14,1,0:CLS
220 DEFDBL T,N
230 OPEN "ELEMENTS.DAT" AS #1 LEN =54
240 FIELD #1, 10 AS I$, 2 AS Y3$, 8 AS T0$, 4 AS I0$, 4 AS O0$, 4 AS E0$, 4 AS W0$, 4 AS M0$, 8 AS N0$, 2 AS K0$, 4 AS F1$
250 V1$="":PRINT
260 PRINT "Elements of the following SATELLITES are in the file:":PRINT
270 FOR J%=1 TO 20:GET #1,J%
280 IF ASC(I$)<33 THEN 300 ELSE IF ASC(I$)>126 THEN 300
290 PRINT I$:NEXT
300 PRINT:PRINT "Do you wish to Add (A) , Change (C) , or Delete (D) a  satellite ?"
310 PRINT "record or Exit (E) from this program ?"
320 Z$="EeAaCcDd"
330 K$=INKEY$:IF K$="" THEN 330
340 K=INSTR(Z$,K$)
350 ON K GOTO 1430,1430,390,390,420,420,540,540
360 BEEP:GOTO 330
370 '
380 ' ****** ADD A NEW RECORD ******
390 GOSUB 670:GOSUB 1270:GOSUB 920:GOSUB 960:GOTO 630
400 '
410 ' ****** CHANGE AN EXISTING RECORD ******
420 GOSUB 660:IF I$<>U$ THEN CLS:PRINT "Record not found":GOTO 250
430 GOSUB 750
440 PRINT "Do you wish to update elemts of this satellite ?  (Y/N) "
450 Z$="YyNn"
460 K$=INKEY$:IF K$="" THEN 460
470 K=INSTR(Z$,K$)
480 ON K GOTO 500,500,510,510
490 BEEP:GOTO 460
500 CLS:GOSUB 970:GOTO 630
510 CLS:GOTO 250
520 '
530 ' ****** DELETE AN EXISTING RECORD ******
540 GOSUB 660:IF I$<>U$ THEN CLS:PRINT "Record not found":GOTO 250
550 COLOR 28:PRINT :PRINT "DO YOU REALLY MEAN IT ?? (Y/N) ":COLOR 14
560 Z$="YyNn"
570 K$=INKEY$:IF K$="" THEN 570
580 K=INSTR(Z$,K$)
590 ON K GOTO 620,620,610,610
600 BEEP:GOTO 570
610 CLS:GOTO 250
620 GOSUB 920:GOSUB 1150:GOSUB 1210
630 CLS:PRINT "Update complete.":GOTO 250
640 '
650 ' ****** FIND SATELLITE RECORD ******
660 PRINT:INPUT "Which satellite? ";V1$:IF V1$="" THEN 300
670 U$=SPACE$(10):LSET U$=V1$
680 FOR J%=1 TO 20:GET #1,J%
690 IF I$=U$ THEN 720 ELSE IF ASC(I$)<33 THEN 720 ELSE IF ASC(I$)>90 THEN 720
700 IF LEFT$(I$,1)="" THEN 720
710 NEXT
720 RETURN
730 '
740 ' ****** DISPLAY SATELLITE RECORD ******
750 CLS:Y3=CVI(Y3$)
760 T0=CVD(T0$):I0=CVS(I0$):O0=CVS(O0$):E0=CVS(E0$):W0=CVS(W0$)
770 M0=CVS(M0$):N0=CVD(N0$):K0=CVI(K0$):F1=CVS(F1$)
780 PRINT "Satellite       = ";I$
790 PRINT "Epoch year      = ";Y3
800 PRINT "Epoch day       = ";T0
810 PRINT "Inclination     = ";I0
820 PRINT "R.A.A.N.        = ";O0
830 PRINT "Eccentricity    = ";E0
840 PRINT "Arg. of perigee = ";W0
850 PRINT "Mean anomaly    = ";M0
860 PRINT "Mean motion     = ";N0
870 PRINT "Epoch orbit no. = ";K0
880 PRINT "Beacon freq.    = ";F1
890 PRINT:RETURN
900 '
910 ' ****** SETUP SATELLITE ELEMENTS FOR DELETE ACTION ******
920 Q$=SPACE$(10):Y3=0:T0=0:I0=0:O0=0:E0=0:W0=0:M0=0:N0=0:K0=0:F1=0
930 CLS:RETURN
940 '
950 ' ****** UPDATE/DELETE SATELLITE ELEMENTS ******
960 PRINT: PRINT "New satellite, input following items:":PRINT
970 INPUT "SATELLITE DESIGNATION  = ",U$:IF U$<>"" THEN Q$=U$ ELSE Q$="UNKNOWN"
980 INPUT "EPOCH YEAR (YY)        = ",U$:IF U$<>"" THEN Y3=VAL(U$)
990 INPUT "EPOCH DAY (DD.DDDD-)   = ",U$:IF U$<>"" THEN T0=VAL(U$)
1000 INPUT "INCLINATION (DEG.)     = ",U$:IF U$<>"" THEN I0=VAL(U$)
1010 INPUT "R.A.A.N. (DEG.)        = ",U$:IF U$<>"" THEN O0=VAL(U$)
1020 INPUT "ECCENTRICITY           = ",U$:IF U$<>"" THEN E0=VAL(U$)
1030 INPUT "ARG. OF PERIGEE (DEG.) = ",U$:IF U$<>"" THEN W0=VAL(U$)
1040 INPUT "MEAN ANOMALY (DEG.)    = ",U$:IF U$<>"" THEN M0=VAL(U$)
1050 INPUT "MEAN MOTION (ORB/DAY)  = ",U$:IF U$<>"" THEN N0=VAL(U$)
1060 INPUT "EPOCH ORBIT NO.        = ",U$:IF U$<>"" THEN K0=VAL(U$)
1070 INPUT "BEACON FREQUENCY (Mhz) = ",U$:IF U$<>"" THEN F1=VAL (U$)
1080 PRINT:PRINT "Is this CORRECT? (Y/N) "
1090 Z$="YyNn"
1100 K$=INKEY$:IF K$="" THEN 1100
1110 K=INSTR(Z$,K$)
1120 ON K GOTO 1150,1150,1140,1140
1130 BEEP:GOTO 1100
1140 CLS:GOTO 970
1150 LSET I$=Q$:RSET Y3$=MKI$(Y3):RSET T0$=MKD$(T0):RSET I0$=MKS$(I0)
1160 RSET O0$=MKS$(O0):RSET E0$=MKS$(E0):RSET W0$=MKS$(W0):RSET M0$=MKS$(M0)
1170 RSET N0$=MKD$(N0):RSET K0$=MKI$(K0):RSET F1$=MKS$(F1)
1180 PUT #1,J%:CLS:RETURN
1190 '
1200 ' ****** ADJUST RECORDS TO FILL DELETED RECORD SPACE ******
1210 FOR K%=J% TO 19
1220 GET #1,K%+1:PUT #1,K%:NEXT
1230 GOSUB 920:J%=20:GOSUB 1150
1240 RETURN
1250 '
1260 ' ****** ADJUST RECORDS TO INSERT NEW RECORD ******
1270 PRINT
1280 PRINT "Do you wish to insert the record in a specific postion ? (Y/N) "
1290 Z$="YyNn"
1300 K$=INKEY$:IF K$="" THEN 1300
1310 K=INSTR(Z$,K$)
1320 ON K GOTO 1340,1340,1400,1400
1330 BEEP:GOTO 1300
1340 PRINT "Which position ? ( 1 to";J%-1;")";
1350 INPUT R%:IF R%=0 THEN 1280
1360 IF R%>J%-1 THEN 1340
1370 J%=R%
1380 FOR K%=19 TO R% STEP-1
1390 GET #1,K%:PUT #1,K%+1:NEXT
1400 RETURN
1410 '
1420 ' ****** END OF JOB ROUTINE ******
1430 CLOSE #1:GOTO 10
1440 'END PART CHANGE/ADD/DELETE ELEMENTS
1450 REM ******* Groundsation data change v.1.0 OE1HSI	jan.-1985**********
1460 SCREEN 0,1:WIDTH 80:COLOR 14,1,0:CLS
1470 PRINT"CURRENT GROUND STATION DATA":PRINT:GOSUB 1780
1480 PRINT"Do you want to CHANGE this DATA ? (Y/N)"
1490 Z$="YyNn"
1500 K$=INKEY$:IF K$=""THEN 1500
1510 K=INSTR(Z$,K$)
1520 ON K GOTO 1610,1610,1890,1890
1530 BEEP:COLOR 28:GOTO 1480
1540 PRINT:PRINT:GOSUB 1810
1550 PRINT"Do you want a further CHANGE ? (Y/N) "
1560 Z$="YyNn"
1570 K$=INKEY$:IF K$=""THEN 1570
1580 K=INSTR(Z$,K$)
1590 ON K GOTO 1610,1610,1880,1880
1600 BEEP:COLOR 28:GOTO 1550
1610 COLOR 14:PRINT:PRINT "ENTER NEW DATA OR <RETURN> FOR UNCHANGED DATA":
1620 OPEN "GROUND.DAT" AS #1 LEN=42
1630 FIELD #1, 10 AS GR$,20 AS GL$,4 AS GH$,4 AS LO$, 4 AS LA$
1640 PRINT:INPUT "CALL max. 10 chrs.)                          : ",U$: IF U$ <>"" THEN GS$=U$ ELSE GS$=GR1$
1650 INPUT "Location of station (max. 20 chrs.)          : ",U$: IF U$ <>"" THEN GC$=U$ ELSE GC$=GL1$
1660 INPUT "Groundstation height above sealevel in mtrs. : ",U$: IF U$ <>"" THEN SH=VAL(U$) ELSE  SH=CVS(GH1$)
1670 PRINT "LONGITUDE WEST of Greenwich (max +360) or East of Greenw. entered as -0 to -180":PRINT:INPUT "Enter (with decimals)                 : ",U$: IF U$ <>"" THEN LO=VAL(U$) ELSE LO=CVS(LO1$)
1680 IF LO < 0 THEN LO=360+LO
1690 PRINT "LATITUDE NORTH of Equator + (max 90) SOUTH of Equator - (max 90)":PRINT:INPUT "ENTER (With decimals)                 : ",U$: IF U$ <>"" THEN LA=VAL(U$) ELSE LA=CVS(LA1$)
1700 LSET GR$=GS$
1710 LSET GL$=GC$
1720 RSET GH$=MKS$(SH)
1730 RSET LO$=MKS$(LO)
1740 RSET LA$=MKS$(LA)
1750 PUT #1,1
1760 CLOSE
1770 GOTO 1540
1780 OPEN "GROUND.DAT" AS #1 LEN=42
1790 FIELD #1, 10 AS GR$,20 AS GL$,4 AS GH$,4 AS LO$, 4 AS LA$
1800 GET #1,1
1810 PRINT "CALL IS                    : ";GR$
1820 PRINT "LOCATION IS                : ";GL$
1830 PRINT USING "HEIGHT AB. SEAL. (mtrs.)=  :  #####";CVS(GH$)
1840 PRINT USING "WESTERN LONGITUDE (deg.)=  : ###.##";CVS(LO$)
1850 PRINT USING "LATITUDE (deg.)=           : +##.##";CVS(LA$):PRINT
1860 GR1$=GR$:GL1$=GL$:GH1$=GH$:LO1$=LO$:LA1$=LA$
1870 CLOSE:RETURN
1880 COLOR 14:PRINT:PRINT "DATA SAVED AS GROUND.DAT":GOTO 1900
1890 COLOR 14:PRINT:PRINT "DATA NOT CHANGED"
1900 GOTO 20 'MAIN MENU
1910 '**** END PROGRAM GROUNDSTATION DATA CHANGE/STORAGE OE1HSI  JAN. 1985 ****
2000 ' ****** ORBITS2 - VERSION 1.0, ISSUE 1.2 -11/1/83 ******
2010 CLS:KEY OFF:SCREEN 2,0:WIDTH 80
2020 OUT 985,10      ' Set foreground color for high resolution screen
2030 LOCATE 2
2040 PRINT"   SATELLITE TRACKING PROGRAM de W0SL - May,1983"
2050 PRINT"        COPYRIGHT 1983 by R. D. Welch, W0SL"
2060 PRINT"                          908 Dutch Mill Drive"
2070 PRINT"                          Manchester, Mo. 63011":PRINT
2080 PRINT"   Enhanced by OE1HSI JAN 26 1985"
2090 PRINT"               Ing. Herbert F. Strasser"
2100 PRINT"               176 Rud. Waisenhorngasse"
2110 PRINT"               A 1238 VIENNA / AUSTRIA"
2115 LOCATE 25,3:PRINT"F9 TOGGLES THE GRAPH/TABLE     F10 TO SELECT SINGLE SAT IN GRAPH   ESC TO END";
2130 '
2140 ' ****** HOUSE KEEPING ITEMS ******
2150 OPEN "ELEMENTS.DAT" AS #1 LEN=54
2160 FIELD #1, 10 AS I$, 2 AS Y3$, 8 AS T0$, 4 AS I0$, 4 AS O0$, 4 AS E0$, 4 AS W0$, 4 AS M0$, 8 AS N0$, 2 AS K0$, 4 AS F1$
2170 DEFDBL T:DEFINT J:OPTION BASE 1
2180 DEF FNMTH=VAL(LEFT$(D$,2)):DEF FNDAY=VAL(MID$(D$,4,2))
2190 DEF FNYR=VAL(RIGHT$(D$,2)):DEF FNHR=VAL(LEFT$(T$,2))
2200 DEF FNMIN=VAL(MID$(T$,4,2)):DEF FNSEC=VAL(RIGHT$(T$,2))
2210 DIM C(3,2),Y1(5),G3(5),SAT(6),SATL(10,2)
2220 DIM PKT(6),KEP (6)
2230 '
2240 ' ****** SETUP UTC DATE AND TIME ******
2250 LOCATE 15,30,0:PRINT "UTC DATE = ";DATE$
2260 LOCATE 16,30:PRINT "UTC TIME = ";TIME$
2270 LOCATE 20,3:INPUT "ENTER NEW UTC DATE (MM-DD-YY)?.. IF NOT HIT RETURN ",D$
2280 IF D$="" THEN D$=DATE$
2290 DATE$=D$:D$=DATE$	 'Quick format check
2300 LOCATE 20,50:PRINT SPACE$(14)
2310 LOCATE 20,3:INPUT "ENTER NEW UTC TIME (HH:MM:SS)?..  IF NOT HIT RETURN ",T$
2320 IF T$="" THEN T$=TIME$
2330 TIME$=T$:T$=TIME$		  ' Quick format check
2340 CLS
2350 '
2360 ' ****** DRAW AND STORE SATELLITE INDICATOR ******
2370 CLS
2380 LINE (4,0)-(4,4):LINE (0,2)-(8,2)
2390 GET (0,0)-(8,4),SAT:PUT (0,0),SAT
2400 CLS
2410 LINE (4,1)-(4,3):LINE (3,2)-(5,2)
2420 GET (0,0)-(8,4),PKT:PUT (0,0),PKT
2430 '
2440 ' ****** NUMERIC CONSTANTS ******
2450 P1=3.1415926535#		    ' Value of PI
2460 R0=6378.16:F=298.16	    ' Earth's radius, 1/Earth flattening coef.
2470 G0=75369793000000# 	    ' GM of Earth in (Orbits/day)^2/km^3
2480 G1=1.0027379093#		    ' Sidereal/Solar time rate ratio
2490 '
2500 ' ****** GROUND STATION CONSTANTS ******
2510 OPEN "GROUND.DAT" AS #2 LEN=42
2520 FIELD #2, 10 AS GR$,20 AS GL$,4 AS GH$,4 AS LO$, 4 AS LA$
2530 GET #2,1
2540 L9=CVS(LA$):W9=CVS(LO$):H9=CVS(GH$)
2550 CLOSE #2
2560 'L9=Latitude in degrees
2570 'W9=Longitude in degrees
2580 'H9=Height above sea level in meters
2590 'C$=GRUND STATION CALL+LOCATION STRING
2600 FOR I=1 TO 10 '**** I = STRINGLENGHT TO BE STRIPED OF TRAILING SPACES****
2610 GRT$=MID$(GR$,11-I,1)
2620 IF GRT$ <> " " THEN GRR$=LEFT$(GR$,11-I):I=10 ' GRR$ IS GR$ STRIPPED OFTRAILING PADDED SPACES
2630 NEXT
2640 I=0
2650 FOR I=1 TO 20 '**** I = STRINGLENGHT TO BE STRIPED OF TRAILING SPACES****
2660 GLT$=MID$(GL$,21-I,1)
2670 IF GLT$ <> " " THEN GLR$=LEFT$(GL$,21-I):I=20 ' GLR$ IS GL$ STRIPPED OFTRAILING PADDED SPACES
2680 NEXT
2690 C$=GRR$+" "+GLR$ '**** END PROGRAM STRIP TRAILING SPACES, HSI JAN.1985
2700 '
2710 ' ****** DERIVED CONSTANTS ******
2720 P2=2*P1:P0=P1/180:F=1/F:L8=L9*P0:S9=SIN(L8):C9=COS(L8)
2730 S8=SIN(-W9*P0):C8=COS(W9*P0)
2740 R9=R0*(1-(F/2)+(F/2)*COS(2*L8))+H9/1000
2750 L8=ATN((1-F)^2*S9/C9):Z9=R9*SIN(L8)
2760 X9=R9*COS(L8)*C8:Y9=R9*COS(L8)*S8
2770 '
2780 ' ****** ESTABLISH SIDEREAL TIME TABLE MATRIX ******
2790 RESTORE 2900:FLG1=0:FLG2=0:D$=DATE$:CLS
2800 FOR I1=1 TO 5
2810 READ Y1(I1), G3(I1)	  ' Read sidereal time table
2820 IF Y1(I1)=FNYR THEN FLG1=1
2830 IF Y1(I1)=FNYR-1 THEN FLG2=1
2840 IF Y1(I1)=0 THEN 2860
2850 NEXT
2860 IF FLG1=1 AND FLG2=1 THEN 2970
2870 PRINT "UNABLE TO FIND CURRENT AND/OR PRECEEDING YEAR IN SIDERAL TIME TABLE":STOP
2880 '
2890 ' ****** SIDEREAL TIME TABLE ******
2900 DATA 84, 0.2746066342
2910 DATA 85, 0.2766814244
2920 DATA 86, 0.276007
2930 DATA 87, 0.275347
2940 DATA 0,0
2950 '
2960 ' ****** ESTABLISH SATELLITE ELEMENT MATRIX ******
2970 I=0
2980 I=I+1:IF I>8 THEN 3120
2990 GET #1,I
3000 FOR J=1 TO 10
3010 IF MID$(I$,J,1)=SPACE$(1) THEN 3040
3020 NEXT
3030 PRINT "END OF FILE ERROR, CORRECT & RESTART":STOP
3040 I$(I)=LEFT$(I$,J-1):IF I$(I)="END" THEN 3120
3050 IF LEFT$(I$,1)=SPACE$(1) THEN 3120
3060 Y3(I)=CVI(Y3$):T0(I)=CVD(T0$):I0(I)=CVS(I0$):O0(I)=CVS(O0$)
3070 E0(I)=CVS(E0$):W0(I)=CVS(W0$):M0(I)=CVS(M0$):N0(I)=CVD(N0$)
3080 K0(I)=CVI(K0$):F1(I)=CVS(F1$)
3090 IF Y3(I)=FNYR THEN 2980 ELSE IF Y3(I)=FNYR-1 THEN 2980 ELSE PRINT "ELEMENTS FOR SATELLITE ";I$(I);" NOT FROM CURRENT OR PRECEEDING YEAR.":STOP
3100 '
3110 ' ****** SET UP KEY TRAPPING ******
3120 ON KEY(9) GOSUB 4610:KEY(9) STOP
3130 ON KEY(10) GOSUB 4640:KEY(10) OFF
3140 FLG9=0:FLG10=0::GOSUB 4180
3150 '
3160 ' ****** ORBIT DETERMINATION LOOP STARTS HERE ******
3170 FOR J=1 TO I-1
3180 Q$=INKEY$:IF Q$=CHR$(27) GOTO 4480
3190 GOSUB 3270
3200 IF FLG9=0 THEN 3220
3210 GOSUB 3720:GOSUB 3780
3220 GOSUB 3930
3230 NEXT
3240 GOTO 3170
3250 '
3260 ' ****** ORBIT CALCULATION ROUTINE ******
3270 A0(J)=((G0/(N0(J)*N0(J)))^(1/3))
3280 E2=1-E0(J)*E0(J):E1=SQR(E2):Q0=M0(J)/360+K0(J)
3290 K2=9.95*((R0/A0(J))^3.5)/(E2*E2)
3300 S1=SIN(I0(J)*P0):C1=COS(I0(J)*P0):D$=DATE$
3310 T=INT(30.55*(FNMTH+2))-2*(INT(.1*(FNMTH+7)))-91
3320 IF FNMTH>2 THEN IF FNYR/4=INT(FNYR/4) THEN T=T+1
3330 IF Y3(J)=FNYR-1 THEN T=T+365 ELSE 3350
3340 IF Y3(J)/4=INT(Y3(J)/4) THEN T=T+1
3350 T$=TIME$:T=T+FNDAY+FNHR/24+FNMIN/1440+FNSEC/86400!
3360 O=O0(J)-(T-T0(J))*K2*C1:S0=SIN(O*P0):C0=COS(O*P0)
3370 W=W0(J)+(T-T0(J))*K2*(2.5*(C1*C1)-.5)
3380 S2=SIN(W*P0):C2=COS(W*P0)
3390 C(1,1)=+(C2*C0)-(S2*S0*C1):C(1,2)=-(S2*C0)-(C2*S0*C1)
3400 C(2,1)=+(C2*S0)+(S2*C0*C1):C(2,2)=-(S2*S0)+(C2*C0*C1)
3410 C(3,1)=+(S2*S1):C(3,2)=+(C2*S1)
3420 Q=N0(J)*(T-T0(J))+Q0:K=INT(Q):M=(Q-K)*P2
3430 E=M+E0(J)*SIN(M)+.5*(E0(J)*E0(J))*SIN(2*M)
3440 S3=SIN(E):C3=COS(E):R3=1-E0(J)*C3:M1=E-E0(J)*S3
3450 M5=M1-M:IF ABS(M5)<.000001 THEN 3470 ELSE E=E-M5/R3
3460 GOTO 3440
3470 X0=A0(J)*(C3-E0(J)):Y0=A0(J)*E1*S3:R=A0(J)*R3
3480 X1=X0*C(1,1)+Y0*C(1,2):Y1=X0*C(2,1)+Y0*C(2,2):Z1=X0*C(3,1)+Y0*C(3,2)
3490 FOR I2=1 TO I1:IF Y3(J)=Y1(I2) THEN G2=G3(I2)
3500 NEXT
3510 G7=T*G1+G2:G7=(G7-INT(G7))*P2:S7=-SIN(G7):C7=COS(G7)
3520 X=+(X1*C7)-(Y1*S7):Y=+(X1*S7)+(Y1*C7):Z=Z1
3530 X5=(X-X9):Y5=(Y-Y9):Z5=(Z-Z9):R5=SQR(X5*X5+Y5*Y5+Z5*Z5)
3540 Z8=+(X5*C8*C9)+(Y5*S8*C9)+(Z5*S9)
3550 X8=-(X5*C8*S9)-(Y5*S8*S9)+(Z5*C9):Y8=+(Y5*C8)-(X5*S8)
3560 S5=Z8/R5:C5=SQR(1-S5*S5):E9=ATN(S5/C5)/P0
3570 IF X8<0 THEN A9=P1+ATN(Y8/X8) ELSE 3590
3580 GOTO 3620
3590 IF X8>0 AND Y8>=0 THEN A9=ATN(Y8/X8) ELSE IF X8>0 THEN A9=P2+ATN(Y8/X8) ELSE 3610
3600 GOTO 3620
3610 IF Y8<0 THEN A9=3*P1/2 ELSE A9=P1/2
3620 A9=A9/P0
3630 IF X<0 THEN W5=P1+ATN(Y/X) ELSE 3650
3640 GOTO 3680
3650 IF X>0 AND Y>=0 THEN W5=ATN(Y/X) ELSE IF X>0 THEN W5=P2+ATN(Y/X) ELSE 3670
3660 GOTO 3680
3670 IF Y<0 THEN W5=3*P1/2 ELSE W5=P1/2
3680 W5=360-W5/P0:B5=Z/R:L5=ATN(B5/(SQR(1-B5^2)))/P0
3690 RETURN
3700 '
3710 ' ****** LAT./LONG. PLOT ROUTINE ******
3720 Y6=CINT(.7111*(90-L5)+3)
3730 IF W5<=270 AND W5>=0 THEN X6=CINT(477-W5*1.7444)
3740 IF W5>270 AND W5<=360 THEN X6=CINT(1105-W5*1.7444)
3750 RETURN
3760 '
3770 ' ****** PUT SATELLITE ON SCREEN ROUTINE ******
3780 GET(X6-4,Y6-2)-(X6+4,Y6+2),KEP
3790 FOR ZD=1 TO 2000:NEXT ZD 'LINEDELAY  REMOVE FOR INTERPRETER RUN *****
3800 PUT(X6-4,Y6-2),SAT,PRESET
3810 FOR ZL=1 TO 800:NEXT ZL  'BLINKDELAY REMOVE OR REDUCE FOR INTERPR. RUN *****
3820 PUT(X6-4,Y6-2),SAT
3830 PUT(X6-4,Y6-2),KEP,PSET
3840 PUT(X6-4,Y6-2),SAT
3850 IF FLG0=0 THEN 3880
3860 PUT (SATL(J,1),SATL(J,2)),SAT
3870 PUT (SATL(J,1),SATL(J,2)),PKT,OR
3880 SATL(J,1)=X6-4:SATL(J,2)=Y6-2
3890 IF J=I-1 THEN FLG0=1
3900 RETURN
3910 '
3920 ' ****** PRINT SATELLITE DETAILS ROUTINE ******
3930 KEY(9) ON:KEY(10) ON
3940 KEY(10) STOP:KEY(9) STOP
3950 IF FLGK=1 THEN GOSUB 4160
3960 IF FLG9=0 GOTO 4050
3970 IF FLG10=1 THEN GOSUB 4420
3980 IF FLG10=0 THEN 4010 ELSE V$=SPACE$(10):LSET V$=I$(J)
3990 IF V$<>U$ THEN 4130
4000 LOCATE 25,69:PRINT "SELECTED";
4010 LOCATE 25,1:PRINT SPACE$(68);
4020 LOCATE 25,(12-LEN(I$(J)))/2+1:PRINT I$(J);
4030 LOCATE 25,15
4040 GOTO 4110
4050 COLOR 3:LOCATE 3,44:PRINT DATE$:LOCATE 4,37:PRINT T$
4060 IF E9>=0 THEN COLOR 12 ELSE 4080
4070 IF E9>0 AND E9<1 THEN COLOR 28:BEEP
4080 LOCATE 2*J+7,15:PRINT SPACE$(50)
4090 LOCATE 2*J+7,(12-LEN(I$(J)))/2+1:PRINT I$(J)
4100 LOCATE 2*J+7,15
4110 PRINT USING "###   ###  #####    #####  ###.#   ###.#    ######";A9,E9,R5,(R-R0),L5,W5,K;
4120 IF FLG9=0 GOTO 4130 ELSE LOCATE 20,48:PRINT TIME$;
4130 RETURN
4140 '
4150 ' ****** SET UP SCREEN DISPLAY ROUTINE ******
4160 CLS:FLG0=0:FLGK=0
4170 IF FLG9=1 THEN 4260 'IF FLG9=0 THEN FLG9=1:GOTO 8280
4180 ' FLG9=0
4190 SCREEN 0,1:COLOR 2,0,0
4200 LOCATE 1,40-LEN(C$)/2,0:PRINT C$
4210 LOCATE 2,28:PRINT "REALTIME SATELLITE TRACKING"
4220 LOCATE 3,29:PRINT "COORDINATES ON"
4230 LOCATE 4,34:PRINT "AT":LOCATE 4,46:PRINT "UTC"
4235 LOCATE 25,3:PRINT"F9 TOGGLES THE GRAPH/TABLE     F10 TO SELECT SINGLE SAT IN GRAPH   ESC TO END";
4240 L1=6:L2=7:L3=8
4250 GOTO 4330
4260 GOSUB 4560:SCREEN 2,0:OUT 985,3
4270 DEF SEG=&HB800:BLOAD "MAP.DAT",0:DEF SEG=0
4280 W5=W9:L5=L9:GOSUB 3720
4290 CIRCLE (X6,Y6),2
4300 GOSUB 4490:L1=22:L2=23:L3=24
4310 LOCATE 20,3:PRINT "DATA FOR GROUNDSTATION             AT TIME=           UTC  ON: ";DATE$
4320 LOCATE 20,26:PRINT GRR$
4330 LOCATE L1,3
4340 PRINT "  NAME OR   AZ    EL   RANGE   HEIGHT   LAT.   LONG.    ORBIT"
4350 LOCATE L2,3
4360 PRINT "DESIGNATOR  DEG   DEG    KM      KM     DEG     DEG       NO."
4370 LOCATE L3,3
4380 PRINT "----------  ---   ---  -----   ------  -----   -----    ------";
4390 RETURN
4400 '
4410 ' ****** SELECT SINGLE SATELLITE ROUTINE ******
4420 LOCATE 25,1:PRINT SPACE$(79);
4430 LOCATE 25,1:INPUT; "WHICH SATELLITE? (CR FOR ALL)";I1$
4432 FOR QQQ = 1 TO LEN(I1$)
4433 IF MID$(I1$,QQQ,1) > CHR$(&H60) AND MID$(I1$,QQQ,1) < CHR$(&H7B) THEN MID$(I1$,QQQ,1) = CHR$(ASC(MID$(I1$,QQQ,1)) AND 223)
4434 NEXT QQQ
4440 IF I1$="" THEN FLG10=0:GOTO 4460
4450 U$=SPACE$(10):LSET U$=I1$:FLG10=2
4460 LOCATE 25,1:PRINT SPACE$(79);
4470 RETURN
4480 CLOSE #1:GOTO 20
4490  GOTO 4530
4500 DEF SEG =0
4510 POKE &H410,(PEEK(&H410) OR &H30)
4520 SCREEN 0
4530 WIDTH 80
4540 LOCATE ,,1,12,13
4550 RETURN
4560 ' SWITCH TO COLOR
4570 DEF SEG=0
4580 POKE &H410,(PEEK(&H410) AND &HCF) OR &H10
4590 OUT 980,2:OUT 981,85
4600 RETURN
4610 IF FLG9=0 THEN FLG9=1:GOTO 4630 'FLAG9 TOGGELN
4620 FLG9=0
4630 FLGK=1:RETURN 3940
4640 IF FLG9=1 THEN FLG10=1 ELSE FLG10=0:RETURN 3940
4650 RETURN 3940
4660 GOTO 20 'ENDE PROGRAMMTEIL ECHTZEITDISPLAY
5000 '****** ORBIT2 - VERSION 2.0, ISSUE 1.0/HSI - 17/01/85 *****
5010 KEY OFF:SCREEN 0,1:WIDTH 80:COLOR 14,1,0:CLS		   'dls
5020 PRINT" AMSAT ORBITAL PREDICTION PROGRAM de W3IWI - May,1980"
5030 PRINT" COPYRIGHT 1980 by Dr. Thomas A. Clark, W3IWI"
5040 PRINT"                   6388 Guilford Road"
5050 PRINT"                   Clarksville, MD. 21029"
5060 PRINT
5070 PRINT"REVISED & MODIFIED FOR IBM-PC by R. D. Welch, W0SL - May, 1983"
5080 PRINT"                                 908 Dutch Mill Dr."
5090 PRINT"                                 Manchester, Mo. 63011
5100 PRINT
5110 PRINT"ENHANCED AND DEBUGED BY Ing. H.F.STRASSER OE1HSI- JAN. 1985"
5120 PRINT"                                 A 1238 VIENNA/AUSTRIA":PRINT:
5130 PRINT" Permission granted for non-commercial use providing"
5140 PRINT" credit is given to the author, AMSAT and ORBIT Magazine.":PRINT
5150 '
5160 ' ****** HOUSEKEEPING ITEMS ******
5170 CLEAR
5180 OPEN "LPT1:" FOR OUTPUT AS # 2
5190 OPEN "SCRN:" FOR OUTPUT AS # 3
5200 DEFDBL H,T
5210 DIM T$(20),S$(40),II$(40),CC(3,2)
5220 C8$=CHR$(10)+CHR$(10)+CHR$(10)+CHR$(10)
5230 C9$=CHR$(12)+CHR$(7)
5240 DEF FNT$(D)=CHR$(48+INT(D/10))+CHR$(48+D-10*INT(D/10))
5250 YY=0
5260 '****** NUMERIC CONSTANTS ******
5270 P1=3.1415926535#		   ' Value of PI
5280 R0=6378.16:F=298.16	   ' Earth's radius, 1/Earth flattening coef.
5290 G0=75369793000000# 	   ' GM of Earth in (orbits/day)^2/km^3
5300 G1=1.0027379093#:C=299792.5   ' Sidereal/Solar time rate ratio
5310 '
5320 ' ****** GROUND STATION CONSTANTS ******
5330 OPEN "GROUND.DAT" AS #1 LEN=42
5340 FIELD #1, 10 AS GR$,20 AS GL$,4 AS GH$,4 AS LO$, 4 AS LA$
5350 GET #1,1
5360 L9=CVS(LA$):W9=CVS(LO$):H9=CVS(GH$)
5370 CLOSE #1
5380 'L9=Latitude in degrees
5390 'W9=Longitude in degrees
5400 'H9=Height above sea level in meters
5410 'C$=GROUND STATION CALL+LOCATION STRING
5420 FOR I=1 TO 10 '**** I = STRINGLENGHT TO BE STRIPPED OF TRAILING SPACES****
5430 GRT$=MID$(GR$,11-I,1)
5440 IF GRT$ <> " " THEN GRR$=LEFT$(GR$,11-I):I=10 ' GRR$ IS GR$ STRIPPED OFTRAILING PADDED SPACES
5450 NEXT
5460 I=0
5470 FOR I=1 TO 20 '**** I = STRINGLENGHT TO BE STRIPPED OF TRAILING SPACES****
5480 GLT$=MID$(GL$,21-I,1)
5490 IF GLT$ <> " " THEN GLR$=LEFT$(GL$,21-I):I=20 ' GLR$ IS GL$ STRIPPED OFTRAILING PADDED SPACES
5500 NEXT
5510 C$=GRR$+" "+GLR$ '**** END PROGRAM STRIP TRAILING SPACES, HSI JAN.1985
5520 '
5530 ' ****** DERIVED CONSTANTS ******
5540 P2=2*P1:P0=P1/180:F=1/F:L8=L9*P0:S9=SIN(L8):C9=COS(L8)
5550 S8=SIN(-W9*P0):C8=COS(W9*P0)
5560 R9=R0*(1-(F/2)+(F/2)*COS(2*L8))+H9/1000
5570 L8=ATN((1-F)^2*S9/C9):Z9=R9*SIN(L8)
5580 X9=R9*COS(L8)*C8:Y9=R9*COS(L8)*S8
5590 GOTO 5620
5600 BEEP:COLOR 12:PRINT"  enter YEAR 1982 or higher !":COLOR 14,1,0
5610 ' ****** INPUT DATA ******
5620 INPUT; "Start: Year (19YY) = ",Y:IF Y<1982 GOTO 5600 ELSE YY=Y:Y=Y/100:Y=INT(100*(Y-INT(Y))+.1)
5630 INPUT; "   Month (1-12) = ",M:INPUT; "   Day = ",D
5640 T$=FNT$(Y)+"/"+FNT$(M)+"/"+FNT$(D)+" at "
5650 TE$=FNT$(D)+"."+FNT$(M)+"."+FNT$(Y)+" at "
5660 D8=D+INT(30.55*(M+2))-2*(INT(.1*(M+7)))-91
5670 IF M>2 THEN IF Y/4=INT(Y/4) THEN D8=D8+1
5680 PRINT "     Day #  ";D8:PRINT
5690 INPUT; "Start: UTC Hours(HH) = ",H
5700 INPUT "    Min. = ",M:T7=D8+H/24+M/1440
5710 T$=T$+FNT$(H)+FNT$(M)+ ":00 H"
5720 INPUT; "Duration:      Hours = ",H1
5730 INPUT "    Min. = ",M1:T8=T7+H1/24+M1/1440
5740 INPUT; "Timestep :      Min. = ",M2:T9=M2/1440
5750 PRINT USING "    From ###.####### to ###.#######";T7,T8
5760 PRINT:INPUT "MINIMUM ELEVATION ? (DEFAULT 0) Deg. = ",E8
5770 GOTO 5790
5780 COLOR 28,1,0:BEEP
5790 PRINT:INPUT "Output to Printer (P) or Screen (S) ?-->",P$
5800 IF ( P$="P" OR P$="p" OR P$="S" OR P$="s" ) THEN 5810: ELSE 5780
5810 COLOR 14,1,0:IF P$="P" OR P$="p" THEN P%=2 ELSE P%=3
5820 IF P%=3 THEN C9$=C8$:GOTO 5920
5830 CLS:COLOR 12:LOCATE 12,20:PRINT"IS THE PRINTER READY ??":LOCATE 14,9
5840 PRINT "SWITCH PRINTER ON AND ALIGN PAGE !! (Y/N) ":COLOR 14
5850 Z$="YyNn"
5860 K$=INKEY$:IF K$="" THEN 5860
5870 K=INSTR(Z$,K$)
5880 ON K GOTO 5920,5920,5900,5900
5890 BEEP:GOTO 5860
5900 BEEP:BEEP:BEEP:GOTO 5830
5910 ' ****** ESTABLISH SIDEREAL TIME TABLE MATRIX ******
5920 RESTORE 6030:FLG1=0:FLG2=0:CLS
5930 FOR I1=1 TO 5
5940 READ Y1(I1), G3(I1)
5950 IF Y1(I1)=Y THEN FLG1=1
5960 IF Y1(I1)=Y-1 THEN FLG2=1
5970 IF Y1(I1)=0 THEN 5990
5980 NEXT
5990 IF FLG1=1 AND FLG2=1 THEN 6120
6000 PRINT "UNABLE TO FIND INQUIRY YEAR AND/OR PREVIOUS YEAR IN SIDERAL TIMETABLE.":STOP
6010 '
6020 ' ****** SIDEREAL TIME TABLE ******
6030 DATA 84, 0.2746066342
6060 DATA 85, 0.2766814244
6070 DATA 86, 0.276007
6080 DATA 87, 0.275347
6090 DATA 0,0
6100 '
6110 ' ****** ESTABLISH SATELLITE ELEMENT MATRIX ******
6120 I=0
6130 OPEN "ELEMENTS.DAT" AS #1 LEN=54
6140 FIELD #1, 10 AS II$, 2 AS Y3$, 8 AS T0$, 4 AS I0$, 4 AS O0$, 4 AS E0$, 4 AS W0$, 4 AS M0$, 8 AS N0$, 2 AS K0$, 4 AS F1$
6150 I=I+1:IF I>20 THEN 6290
6160 GET #1,I
6170 FOR J=1 TO 10
6180 IF MID$(II$,J,1)=SPACE$(1) THEN 6210 ELSE IF J=10 THEN J=11
6190 NEXT
6200 CLOSE #1
6210 II$(I)=LEFT$(II$,J-1):IF II$(I)="END" THEN 6290
6220 IF LEFT$(II$,1)=SPACE$(1) THEN 6290
6230 Y3(I)=CVI(Y3$):T0(I)=CVD(T0$):I0(I)=CVS(I0$):O0(I)=CVS(O0$)
6240 E0(I)=CVS(E0$):W0(I)=CVS(W0$):M0(I)=CVS(M0$):N0(I)=CVD(N0$)
6250 K0(I)=CVI(K0$):F1(I)=CVS(F1$)
6260 IF Y3(I)=Y THEN 6150 ELSE IF Y3(I)=Y-1 THEN 6150 ELSE PRINT "ELEMENTS for satellite";II$(I);" NOT from CURRENT or PRECEEDING YEAR.":STOP
6270 '
6280 ' ****** SELECT SATELLITE FROM MENU ******
6290 PRINT "SATELLITE SELECTION MENU":PRINT
6300 FOR J=1 TO I-1
6310 PRINT "Entry #  ";J;" for ";II$(J)
6320 NEXT
6330 PRINT:INPUT "SELECT Entry # : ",J
6340 IF J<1 OR J>20 THEN 6310
6350 PRINT :PRINT "Doppler calculated for frequ. = ";F1(J);" MHz"
6360 INPUT " Change frequency to: (0 for default) ",D
6370 IF D<>0 THEN F1(J)=D
6380 PRINT#P%, :PRINT#P%, "Orbital ELEMENTS for ";II$(J)
6390 PRINT#P%,
6400 PRINT#P%, "Reference epoch = ";Y3(J);" +";T0(J)
6410 PRINT#P%, "Starting  epoch = ";Y;" +";T7;" = ";T$
6420 PRINT#P%,
6430 PRINT#P%, "Parameter";TAB(20);"Reference";TAB(40);"Starting"
6440 T=T7
6450 IF Y3(J)=Y-1 THEN T=T+365:T8=T8+365 ELSE 6470
6460 IF Y3(J)/4=INT(Y3(J)/4) THEN T=T+1:T8=T8+1
6470 FOR I2=1 TO I1:IF Y3(J)=Y1(I2) THEN G2=G3(I2)
6480 NEXT
6490 GOSUB 6990
6500 PRINT#P%, "Orbit Number ";TAB(20);K0(J);TAB(40);K
6510 PRINT#P%, "Mean Anomaly ";TAB(20);M0(J);TAB(40);M/P0
6520 PRINT#P%, "Inclination  ";TAB(20);I0(J)
6530 PRINT#P%, "Eccentricity ";TAB(20);E0(J)
6540 PRINT#P%, "Mean Motion  ";TAB(20);N0(J)
6550 PRINT#P%, "S.M.A.,km    ";TAB(20);A0(J)
6560 PRINT#P%, "Arg. Perigee ";TAB(20);W0(J);TAB(40);W
6570 PRINT#P%, "R. A. A. N.  ";TAB(20);O0(J);TAB(40);O
6580 PRINT#P%, "Freq.,MHz    ";TAB(20);F1(J):K9=9E+07:K8=9E+07
6590 '
6600 '****** COMPUTATION LOOP ******
6610  T=T+T9:K7=INT(T):GOSUB 6990
6620 IF K7=K8 THEN 6640
6630 K8=9E+07:K9=9E+07
6640 GOSUB 7120:IF E9<E8 THEN 6790
6650 IF K7=K8 AND K=K9 THEN 6710
6660 IF K7=K8 THEN 6700 ELSE GOSUB 6900
6670 K8=K7
6680 PRINT#P%, " U.T.C.    AZ    EL  DOPPLER   RANGE   HEIGHT  LAT.  LONG.  PHASE"
6690 PRINT#P%, "HHMM:SS   deg   deg    Hz       km       km    deg    deg   <256>
6700 PRINT#P%, TAB(21) "- - - ORBIT #";K;"- - -"
6710 K9=K:T4=T-K7:S4=INT(T4*86400!):H4=INT(S4/3600+.000001)
6720 M4=INT((S4-H4*3600)/60+.000001)
6730 S4=S4-3600*H4-60*M4
6740 T$=FNT$(H4)+FNT$(M4)+":"+FNT$(S4)
6750 F9=-F1(J)*1000000!*R8/C
6760 PRINT#P%, T$;
6770 PRINT#P%, USING "   ###   ###  #####";A9;E9;F9;
6780 PRINT#P%, USING "    #####    #####  ###.#  ###.#  ###";R5;(R-R0);L5;W5;M9
6790 IF T<T8 THEN GOTO 6610
6800 PRINT#P%, C9$
6810 PRINT "Do YOU have another INQUIRY  ?  (Y/N) "
6820 PRINT:PRINT"Else you return to the MAIN MENU !":PRINT
6830 Z$="YyNn"
6840 K$=INKEY$:IF K$="" THEN 6840
6850 K=INSTR(Z$,K$)
6860 ON K GOTO 5010,5010,6880,6880
6870 BEEP:GOTO 6840
6880 CLOSE :GOTO 20
6890 '****** PAGE HEADER SUBROUTINE ******
6900 PRINT#P%, C9$;C$;"   Lat.=";L9;"  W.Long.=";W9;"  Ht.=";H9;
6910 P=P+1:PRINT#P%, TAB(70) "Page # ";P
6920 PRINT#P%, TAB(15)" - - - Minimum Elevation = ";E8;"Deg. - - -"
6930 PRINT#P%,
6940 DN=K7:GOSUB 7440
6950 PRINT#P%, TAB(14) "- - - DAY #";K7;"- - -  ";M$;" ";DD;",";YY;"- - -"
6960 PRINT#P%, :RETURN
6970 '
6980 '****** ORBIT DETERMINATION AND UTILITY ROUTINES ******
6990 A0(J)=((G0/(N0(J)*N0(J)))^(1/3))
7000 E2=1-E0(J)*E0(J):E1=SQR(E2):Q0=M0(J)/360+K0(J)
7010 K2=9.95*((R0/A0(J))^3.5)/(E2*E2)
7020 S1=SIN(I0(J)*P0):C1=COS(I0(J)*P0)
7030 O=O0(J)-(T-T0(J))*K2*C1
7040 S0=SIN(O*P0):C0=COS(O*P0)
7050 W=W0(J)+(T-T0(J))*K2*(2.5*(C1*C1)-.5)
7060 S2=SIN(W*P0):C2=COS(W*P0)
7070 CC(1,1)=+(C2*C0)-(S2*S0*C1):CC(1,2)=-(S2*C0)-(C2*S0*C1)
7080 CC(2,1)=+(C2*S0)+(S2*C0*C1):CC(2,2)=-(S2*S0)+(C2*C0*C1)
7090 CC(3,1)=+(S2*S1):CC(3,2)=+(C2*S1)
7100 Q=N0(J)*(T-T0(J))+Q0:K=INT(Q):M9=INT((Q-K)*256):M=(Q-K)*P2
7110 RETURN
7120 E=M+E0(J)*SIN(M)+.5*(E0(J)*E0(J))*SIN(2*M)
7130 S3=SIN(E):C3=COS(E):R3=1-E0(J)*C3:M1=E-E0(J)*S3
7140 M5=M1-M:IF ABS(M5)<.000001 THEN 7160 ELSE E=E-M5/R3
7150 GOTO 7130
7160 X0=A0(J)*(C3-E0(J)):Y0=A0(J)*E1*S3:R=A0(J)*R3
7170 X1=X0*CC(1,1)+Y0*CC(1,2):Y1=X0*CC(2,1)+Y0*CC(2,2):Z1=X0*CC(3,1)+Y0*CC(3,2)
7180 G7=T*G1+G2:G7=(G7-INT(G7))*P2:S7=-SIN(G7):C7=COS(G7)
7190 X=+(X1*C7)-(Y1*S7):Y=+(X1*S7)+(Y1*C7):Z=Z1
7200 X5=(X-X9):Y5=(Y-Y9):Z5=(Z-Z9):R5=SQR(X5*X5+Y5*Y5+Z5*Z5)
7210 IF T6<>T THEN R8=((R6-R5)/(T6-T))/86400! ELSE R8=-9000000000#
7220 R6=R5:T6=T
7230 Z8=+(X5*C8*C9)+(Y5*S8*C9)+(Z5*S9)
7240 X8=-(X5*C8*S9)-(Y5*S8*S9)+(Z5*C9):Y8=+(Y5*C8)-(X5*S8)
7250 S5=Z8/R5:C5=SQR(1-S5*S5):E9=ATN(S5/C5)/P0
7260 IF X8<0 THEN A9=P1+ATN(Y8/X8) ELSE 7280
7270 GOTO 7310
7280 IF X8>0 AND Y8>=0 THEN A9=ATN(Y8/X8) ELSE IF X8>0 THEN A9=P2+ATN(Y8/X8) ELSE 7300
7290 GOTO 7310
7300 IF Y8<0 THEN A9=3*P1/2 ELSE A9=P1/2
7310 A9=A9/P0
7320 IF X<0 THEN W5=P1+ATN(Y/X) ELSE 7340
7330 GOTO 7370
7340 IF X>0 AND Y>=0 THEN W5=ATN(Y/X) ELSE IF X>0 THEN W5=P2+ATN(Y/X) ELSE 7360
7350 GOTO 7370
7360 IF Y<0 THEN W5=3*P1/2 ELSE W5=P1/2
7370 W5=360-W5/P0
7380 B5=Z/R:L5=ATN(B5/(SQR(1-B5^2)))/P0
7390 RETURN
7400 INPUT"DAY OF YEAR NUMBER:";DN
7410 GOSUB 7440
7420 PRINT DD,M$
7430 GOTO 7400
7440 ' ****** DATE FROM DAY OF YEAR NUMBER ******
7450 '
7460 DD=0
7470 YS=Y3(J)
7480 DN=DN-31:IF DN<=0 GOTO 7630
7490 IF YS=84 GOTO 7760
7500 IF YS<>84 THEN DN=DN-28: IF DN<=0 GOTO 7650
7510 DN=DN-31: IF DN<=0 GOTO 7660
7520 DN=DN-30: IF DN<=0 GOTO 7670
7530 DN=DN-31: IF DN<=0 GOTO 7680
7540 DN=DN-30: IF DN<=0 GOTO 7690
7550 DN=DN-31: IF DN<=0 GOTO 7700
7560 DN=DN-31: IF DN<=0 GOTO 7710
7570 DN=DN-30: IF DN<=0 GOTO 7720
7580 DN=DN-31: IF DN<=0 GOTO 7730
7590 DN=DN-30: IF DN<=0 GOTO 7740
7600 DN=DN-31: IF DN<=0 GOTO 7750
7610 YS=YS+1
7620 GOTO 7480
7630 M$="JAN": DD=DN+31: RETURN
7640 M$="FEB": DD=DN+29: RETURN
7650 M$="FEB": DD=DN+28: RETURN
7660 M$="MAR": DD=DN+31: RETURN
7670 M$="APR": DD=DN+30: RETURN
7680 M$="MAY": DD=DN+31: RETURN
7690 M$="JUN": DD=DN+30: RETURN
7700 M$="JLY": DD=DN+31: RETURN
7710 M$="AUG": DD=DN+31: RETURN
7720 M$="SEP": DD=DN+30: RETURN
7730 M$="OCT": DD=DN+31: RETURN
7740 M$="NOV": DD=DN+30: RETURN
7750 M$="DEC": DD=DN+31: RETURN
7760 DN=DN-29: IF DN<=0 THEN 7640 ELSE 7510
7770 GOTO 200 'END
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0437

     Volume in drive A has no label
     Directory of A:\

    COILINDU BAS       768   6-14-85   7:45a
    COUNTIES AK        404   3-17-85   4:28p
    COUNTIES AL        796   3-17-85   4:32p
    COUNTIES AR        895   3-17-85   4:34p
    COUNTIES AZ        165   3-17-85   4:35p
    COUNTIES CA        729   3-17-85   4:36p
    COUNTIES CO        754   3-17-85   4:37p
    COUNTIES CT        115   3-17-85   4:38p
    COUNTIES DE         41   3-17-85   4:38p
    COUNTIES FL        802   3-17-85   4:39p
    COUNTIES GA       1839   3-17-85   4:40p
    COUNTIES HI         61   3-17-85   4:41p
    COUNTIES IA       1169   3-17-85   4:42p
    COUNTIES ID        517   3-17-85   4:43p
    COUNTIES IL       1199   3-17-85   4:44p
    COUNTIES IN       1072   3-17-85   4:45p
    COUNTIES KS       1216   3-17-85   4:46p
    COUNTIES KY       1397   3-17-85   4:46p
    COUNTIES LA        905   3-17-85   4:49p
    COUNTIES MA        185   3-17-85   4:49p
    COUNTIES MD        331   3-17-85   4:50p
    COUNTIES ME        213   3-17-85   4:51p
    COUNTIES MI       1010   3-17-85   4:52p
    COUNTIES MN       1057   3-17-85   4:52p
    COUNTIES MO       1350   3-17-85   4:53p
    COUNTIES MS        992   3-17-85   4:54p
    COUNTIES MT        723   3-17-85   4:55p
    COUNTIES NC       1196   3-17-85   4:56p
    COUNTIES ND        619   3-17-85   4:58p
    COUNTIES NE       1058   3-17-85   5:00p
    COUNTIES NH        134   3-17-85   5:00p
    COUNTIES NJ        260   3-17-85   5:01p
    COUNTIES NM        382   3-17-85   5:02p
    COUNTIES NV        202   3-17-85   5:03p
    COUNTIES NY        770   3-17-85   5:04p
    COUNTIES OH       1032   3-17-85   5:05p
    COUNTIES OK        909   3-17-85   5:06p
    COUNTIES OR        427   3-17-85   5:07p
    COUNTIES PA        830   3-17-85   5:08p
    COUNTIES RI         69   3-17-85   5:09p
    COUNTIES SC        599   3-17-85   5:09p
    COUNTIES SD        779   3-17-85   5:10p
    COUNTIES TN       1122   3-17-85   5:11p
    COUNTIES TX       2971   3-17-85   5:14p
    COUNTIES UT        328   3-17-85   5:14p
    COUNTIES VA       1281   3-17-85   5:16p
    COUNTIES VT        187   3-17-85   5:16p
    COUNTIES WA        481   3-17-85   5:17p
    COUNTIES WI        864   3-17-85   5:18p
    COUNTIES WV        647   3-17-85   5:19p
    COUNTIES WY        282   3-17-85   5:20p
    DIPOLE   BAS      2048   6-14-85   7:46a
    EDNTEST  NET       256   8-20-85  10:17p
    ELEMENTS DAT      1120   2-05-85  11:50a
    FILES437 TXT      4660   5-09-87   1:21p
    GROUND   DAT       128   1-01-80  12:20a
    GRTCRCL1 BAS      3712   3-18-87   9:33p
    INTERMOD BAS      2432   6-14-85   7:47a
    MAP      DAT     16400   2-05-85  11:49a
    NETWORK  BAS      6656   8-20-85  10:17p
    NETWORK  DOC     12160   8-20-85  10:17p
    NETWORK  EXE     36352   8-20-85  10:17p
    NETWORK1 LBR     56832   8-20-85  10:06p
    SAMPLE1  NET       256   8-20-85  10:17p
    SAMPLE2  NET       256   8-20-85  10:17p
    SAMPLE3  NET       384   8-20-85  10:17p
    SMITH    BAS      3200   6-14-85   7:56a
    SMITH    DOC      1920   6-14-85   7:56a
    USAT     BAS     30298   2-16-85   9:33a
    USAT     EXE     71552   2-16-85   9:38a
           70 file(s)     288756 bytes
                           33792 bytes free
