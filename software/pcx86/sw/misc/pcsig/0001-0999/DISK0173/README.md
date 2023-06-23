---
layout: page
title: "PC-SIG Diskette Library (Disk #173)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0173/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0173"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "ESP"

    The main program on this disk is a program which tests your ESP
    quotient.  It makes for an interesting time as you test yourself and
    your friends.  The disk also contains a couple of versions of the game
    PAC-MAN, for both monochrome and color systems.  See if your ESP will
    tell you which way the ghosts will go!
    
    System Requirements:  Some programs require color, BASIC
    
    How to Start: To read DOC files, enter TYPE filename.ext and press
    <ENTER>.  To run an EXE program, just type its name and press <ENTER>.
    For instructions on running BASIC programs, please refer to the
    GETTING STARTED section in this catalog.
    
    File Descriptions:
    
    CPOKEMAN EXE  Good monochrome Pacman-type game
    ESP      EXE  Extra Sensory Perception testing
    ESP      DOC  Documentation
    SELLERS       Part of ESP
    PACMANGL EXE  Slow Pacman-type game - good color  (color graphics)
    PCMAN    BAS  Fair monochrome Pacman-type game
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #173, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  CPOKEMAN.EXE         CRC = 92 55

--> FILE:  ESP     .DOC         CRC = A0 8A

--> FILE:  ESP     .EXE         CRC = D8 FD

--> FILE:  PACMANGL.EXE         CRC = BD B6

--> FILE:  XXX     .            CRC = 62 B3

--> FILE:  SELLERS .            CRC = 00 00

--> FILE:  PCMAN   .BAS         CRC = 8C E1

 ---------------------> SUM OF CRCS = B9 26

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## ESP.DOC

{% raw %}
```

















                            EXTRA SENSORY PERCEPTION



                                       by

                                Treegoods, Inc.


                                  February 84






                                Copyright Notice


        Copyright (c) 1984 by Treegoods, Inc., Box 814, Hockessin, DE
      19707. All rights reserved.  This document may be copied along with
      the ESP program under conditions specified for the copying of that
      program.





























      TREEGOODS, INC.                    PSI AND THE ESP COMPUTER PROGRAM




      PSI AND THE ESP COMPUTER PROGRAM

        People have always speculated about the "other" senses: e.g.
      those beyond the common "sight", "hearing", "touch", etc.  Are
      there such senses, or are they a part of humankind's fantasy world
      along with fairies and magic carpets?

        Serious scientific investigation of parapsychology began in
      Victorian times and led to the founding of The Society for
      Psychical Research in London.  Alas, things are not always what
      they seem and this well intentioned start foundered on a lack of
      controls.  Mediums were found to be frauds and eyewitness reports,
      even when made by careful observers, were too often in error.

        In despair of finding a workable methodology for dealing with
      "spontaneous" psychic phenomena, researchers retreated into the
      laboratory and restricted their investigations to environments that
      could in theory be controlled.  Thus has grown up a protocol for
      testing psi abilities.

        The laboratory equipment usually consists of a deck of cards and
      the subject is asked to perform tasks such as naming the top card
      or reading the mind of a "sender" who is looking at a card.  In a
      clairvoyance experiment for example, the cards are shuffled and
      dealt face down, one at a time.  The subject is required to write
      down the card without seeing its face.  After the pack has been
      dealt, the cards are turned up, compared with the subjects' notes
      and the degree of clairvoyance assessed by statistical formulas
      that indicate the frequency of chance "hits".

        J.B. Rhine of Duke University found subjects who could produce
      truly astonishing numbers of "hits" by such techniques.  At first
      he was rather casual in his protocol, but as time passed and as he
      or his associates thought of objections to one technique or
      another, he tightened up his protocol until the subject was even in
      another building from the deck of cards.  References to his
      publications are given in the bibliography.

        Since Rhine's publications began appearing, other investigators
      have found subjects able to produce similar results, but by and
      large the scientific community has not been too impressed.  The
      problem is much more difficult that it seems at first thought.  No
      one seriously disputes the results or impugns the integrity of
      Rhine or most other serious investigators.  The scientific
      objections are on other grounds.

        These objections are detailed at length in the literature and
      they will not be dwelt on here, but to provide some feeling for the
      difficulties, consider the usual psi test with a deck of 25 Zener
      cards.  These are ordinary sized cards consisting of 5 each of 5
      different symbols: star, square, circle, cross, and 3 wavy lines.



                                     Page 1






      TREEGOODS, INC.                    PSI AND THE ESP COMPUTER PROGRAM



      It is no great trick to remember a sequence of 25 cards.  Some
      people can do it naturally, but most people can be trained to it
      with the use of mnemonics.  If one can do this, one can also learn
      to "shuffle" and cut the cards mentally.  Of course a mental
      shuffle will not necessarily agree with an actual shuffle, but the
      results will be good enough to throw off the statistical
      calculations and increase the number of hits to a significant
      degree.  In one series of 100 shuffles, the average number of hits
      by such mental gymnastics was raised from the expected value of 5
      to 8.6. The odds against this are quadrillions to one by the usual
      statistical formulas.

        This is only one way in which an ESP test can be "beaten".  There
      are many others depending on how the particular ESP test is
      conducted.  The ESP computer program avoids them all by generating
      a sequence of symbols with a pseudo random number generator.  It
      can be shown that the series of symbols used in an ESP test is too
      short for the sequence to be "broken" and thus even "lightning
      calculators" will possess no advantage.  Improper mixing of cards
      by shuffling is avoided in this way as is any possibility of
      "trickery" with physical objects such as cards.

        The precognition test is completely foolproof.  However, there is
      some possibility for error in the telepathy and clairvoyance tests
      because of the need for human intervention.  For valid results in
      the clairvoyance test the lower portion of the screen must be
      completely masked off.  With care in this, the test should be
      secure.  The telepathic test is open to question because the sender
      and the receiver are physically present and thus able to signal one
      another.  Some people have extremely acute senses and others
      possess great powers of observation.  Conscious chicanery is thus
      possible, as is the unconscious sensing of body language or
      subvocalizations.  It is important to remember that one does not
      have to get all the answers right to succeed with an ESP test, one
      only needs to increase the odds enough to upset the statistical
      calculations.  Running the ESP program from a remote terminal might
      overcome these problems.

        There are some fine points is assessing the statistical
      significance of results that have confounded even good scientists
      in the past.  The ESP computer program deals with these and prints
      out a clear statement of the odds.  In most scientific endeavors,
      odds of 19 to 1 are considered "significant" and any subject who
      can consistently produce such odds using the ESP computer program
      must be considered to possess psi abilities.  Successful subjects
      reported in the literature usually do considerably better than
      this: odds exceeding a million to one are common.








                                     Page 2






      TREEGOODS, INC.                                          REFERENCES




      REFERENCES


      Douglas, Alfred (1977) Extra-sensory powers.  The Overlook Press,
         Woodstock, NY.
      Eysenck, H.J. (1958) Sense and Nonsense in Psychology. Penguin,
         Baltimore, MD.
      Hansel, C.E.M. (1980) ESP and parapsychology: a critical
         reevaluation. Prometheus, Buffalo, NY.
      Rhine, J.B. (1934) Extra-Sensory Perception. Bruce Humphries,
         Boston.
      Rhine, J.B. (1960) The reach of the mind. William Sloane
         Associates, New York.
      Schmeidler, Gertrude (ed) (1969) Extrasensory perception. Atherton
         Press, New York.

      JOURNALS


      Journal of Parapsychology. Inst. of Parapsychology. Durham, NC.
      Journal of the American Society for Psychical Research.  Am. Soc. Psy.
         Res. NY

      SOCIETIES


      American Society for Psychical Research. 5 West 73rd St., New York,
         NY 10023. (212) 799 05050.
      Institute of Parapsychology. PO Box 6847, Durham, NC 27708-6847.
         (919) 688 8241.
























                                     Page 3






      TREEGOODS, INC.                                          ALGORITHMS




      ALGORITHMS

        The sequence of symbols is generated by a multiplicative
      congruential random number generator

                              x[i+1] = Ax[i]mod P

      where P=2E31-1 and A=7E5. The starting seed x[0] is obtained from
      the least significant bits of the computer's clock.

        An evaluation of the properties of this generator and others
      appears in Fishman, G. S. and Moore, L. R. (1982) A statistical
      evaluation of multiplicative congruential random number generators
      with modulus 2E31-1. J. Am. Statist.  Assoc.  77-377, pp129-136.

        Odds are obtained from the binomial distribution by evaluating
      the incomplete beta function using a partial fraction expansion.
      Fifteen place accuracy is attained for odds less than 4.5E-15 to 1.




































                                     Page 4





```
{% endraw %}

## PCMAN.BAS

{% raw %}
```bas
10 REM PAC-MAN Name
20 REM Version 1.00 (C)Copyright Bob Bison
30 REM Licensed Material - Program Property of Bob Bison
40 KEY OFF:SCREEN 0,1:COLOR 15,0,0:WIDTH 40:CLS:LOCATE 5,19:PRINT "IBM"
50 LOCATE 7,12,0:PRINT "Personal Computer"
60 COLOR 10,0:LOCATE 10,5,0:PRINT CHR$(213)+STRING$(31,205)+CHR$(184)
70 LOCATE 11,5,0:PRINT CHR$(179)+"            PAC-MAN            "+CHR$(179)
80 LOCATE 12,5,0:PRINT CHR$(179)+"                               "+CHR$(179)
90 LOCATE 13,5,0:PRINT CHR$(179)+STRING$(31,32)+CHR$(179)
100 LOCATE 14,5,0:PRINT CHR$(179)+"         Version 1.00          "+CHR$(179)
110 LOCATE 15,5,0:PRINT CHR$(212)+STRING$(31,205)+CHR$(190)
120 COLOR 15,0:LOCATE 17,6,0:PRINT "(C) Copyright  Bob Bison 1982"
130 COLOR 14,0:LOCATE 23,7,0:PRINT "Press space bar to continue"
140 DEF SEG : POKE 106,0
150 IK$=INKEY$ : IF IK$ <> "" THEN GOTO 150
160 IK$=INKEY$
170 IF IK$ = "" THEN GOTO 160
180 IF IK$ = CHR$(27) THEN GOTO 250
190 IF IK$ <> " " THEN GOTO 160
200 ON ERROR GOTO 220
210 GOTO 230
220 RESUME 230
230 ON ERROR GOTO 0
240 COLOR 7,0: WIDTH 80:GOTO 260
250 CLOSE : END
260 REM
270 GOTO 290
280 END
290 CLS : COLOR 7,0 : LOCATE 1,1,0
300 DIM LSC!(11),LNM$(11)
310 DIM GO(4),GXX(4),GYY(4),GM(4),GTO!(4),GSC$(4),SC$(24)
320 LH$=CHR$(205) : LV$=CHR$(186)+" "
330 C1$=CHR$(201)+LH$:C2$=CHR$(187)+" ":C3$=CHR$(200)+LH$:C4$=CHR$(188)+" "
340 T1$=CHR$(203)+LH$:T2$=CHR$(185)+" ":T3$=CHR$(202)+LH$:T4$=CHR$(204)+LH$
350 G$=CHR$(21):BG$=G$+" "+G$+" "+G$+" "+G$+"   "
360 P$=CHR$(2)
370 D$=CHR$(249): BD$=CHR$(15)
380 DOT$=D$+" " : BDOT$=BD$+" "
390 DOT2$=DOT$+DOT$
400 DOT3$=DOT2$+DOT$
410 DOT4$=DOT2$+DOT2$
420 DOT5$=DOT4$+DOT$
430 DOT6$=DOT4$+DOT2$
440 DOT10$=DOT5$+DOT5$
450 B3T$=C1$+STRING$(2,LH$)+C2$:B3M$=LV$+"  "+LV$:B3B$=C3$+STRING$(2,LH$)+C4$
460 B4T$=C1$+STRING$(4,LH$)+C2$:B4M$=LV$+"    "+LV$:B4B$=C3$+STRING$(4,LH$)+C4$
470 B7T$=C1$+STRING$(3,LH$)+STRING$(3,196)+STRING$(4,LH$)+C2$:B7B$=C3$+STRING$(10,LH$)+C4$
480 L2$=STRING$(3,LH$)+" ": L2NB$=STRING$(4,LH$)
490 L3$=STRING$(5,LH$)+" ": L3NB$=STRING$(6,LH$)
500 L4$=STRING$(7,LH$)+" ": L4NB$=STRING$(8,LH$)
510 L7$=STRING$(13,LH$)+" "
520 BL4$=STRING$(8,32)
530 BL5$=STRING$(10,32)
540 BL9$=STRING$(18,32)
550 SC!=0:E=1:M=1:ML=0:GC=7
560 SC$(1)=C1$+STRING$(20,LH$)+T1$+STRING$(20,LH$)+C2$
570 SC$(2)=LV$+DOT10$+LV$+DOT10$+LV$
580 SC$(3)=LV$+DOT$+B3T$+DOT$+B4T$+DOT$+LV$+DOT$+B4T$+DOT$+B3T$+DOT$+LV$
590 SC$(4)=LV$+BDOT$+B3M$+DOT$+B4M$+DOT$+LV$+DOT$+B4M$+DOT$+B3M$+BDOT$+LV$
600 SC$(5)=LV$+DOT$+B3B$+DOT$+B4B$+DOT$+LV$+DOT$+B4B$+DOT$+B3B$+DOT$+LV$
610 SC$(6)=LV$+DOT10$+DOT$+DOT10$+LV$
620 SC$(7)=LV$+DOT$+L3$+DOT$+LV$+DOT$+L3NB$+T1$+L3$+DOT$+LV$+DOT$+L3$+DOT$+LV$
630 SC$(8)=LV$+DOT5$+LV$+DOT4$+LV$+DOT4$+LV$+DOT5$+LV$
640 SC$(9)=C3$+L3NB$+C2$+DOT$+T4$+L3$+"  "+LV$+"  "+L3NB$+T2$+DOT$+C1$+L3NB$+C4$
650 SC$(10)=BL4$+LV$+DOT$+LV$+BL9$+LV$+DOT$+LV$+BL4$
660 SC$(11)=L4NB$+C4$+DOT$+LV$+"  "+B7T$+"  "+LV$+DOT$+C3$+L4$
670 SC$(12)=BL5$+DOT$+"    "+LV$+BL5$+LV$+"    "+DOT$+BL5$
680 SC$(13)=L4NB$+C2$+DOT$+LV$+"  "+B7B$+"  "+LV$+DOT$+C1$+L4$
690 SC$(14)=BL4$+LV$+DOT$+LV$+BL9$+LV$+DOT$+LV$+BL4$
700 SC$(15)=C1$+L3NB$+C4$+DOT$+LV$+"  "+L3NB$+T1$+L3$+"  "+LV$+DOT$+C3$+L3NB$+C2$
710 SC$(16)=LV$+DOT10$+LV$+DOT10$+LV$
720 SC$(17)=LV$+DOT$+L2NB$+C2$+DOT$+L4$+DOT$+LV$+DOT$+L4$+DOT$+C1$+L2$+DOT$+LV$
730 SC$(18)=LV$+BDOT$+DOT2$+LV$+DOT6$+"  "+DOT6$+LV$+DOT2$+BDOT$+LV$
740 SC$(19)=T4$+L2$+DOT$+LV$+DOT$+LV$+DOT$+L3NB$+T1$+L3$+DOT$+LV$+DOT$+LV$+DOT$+L2NB$+T2$
750 SC$(20)=LV$+DOT5$+LV$+DOT4$+LV$+DOT4$+LV$+DOT5$+LV$
760 SC$(21)=LV$+DOT$+L4NB$+T3$+L3$+DOT$+LV$+DOT$+L3NB$+T3$+L4$+DOT$+LV$
770 SC$(22)=LV$+DOT10$+DOT$+DOT10$+LV$
780 SC$(23)=C3$+STRING$(42,LH$)+C4$
790 LOCATE 3,54 : PRINT "SCORE"
800 LOCATE 5,54 : PRINT "                         ";
810 LOCATE 5,54 : PRINT SC!;
820 LOCATE 7,54 : PRINT "                         ";
830 FOR I=1 TO 23
840 LOCATE I,1:PRINT SC$(I);
850 NEXT
860 LOCATE 24,1:PRINT P$+" "+P$;
870 FOR I=1 TO 4
880 GYY(I)=12 : GXX(I)=17+2*I:GSC$(I)=" "
890 NEXT
900 CDOT=190:PM=3
910 TB!=3600*VAL(MID$(TI$,1,2))+60*VAL(MID$(TI$,4,2))+VAL(MID$(TI$,7,2))
920 GOSUB 1100:TN!=TN!+3
930 FOR I=1 TO 4
940 LOCATE GYY(I),GXX(I):PRINT GSC$(I);
950 MID$(SC$(GYY(I)),GXX(I),1)=GSC$(I)
960 GO(I)=1 : GTO!(I)=TN!+15*I: GSC$(I)=" "
970 GYY(I)=12 : GXX(I)=17+2*I
980 LOCATE 12,17+2*I:PRINT G$;
990 NEXT
1000 DEF SEG=0
1010 X=23 : Y=18
1020 TTT=(PEEK(&H46C)+2) MOD 256
1025 ON KEY(1) GOSUB 10000:KEY(1) ON
1030 FOR I=1 TO 3
1040 SOUND 900,9 : SOUND 32767,9
1050 NEXT
1055 KEY(1) OFF
1060 LOCATE Y,X : PRINT P$;
1070 TI$=TIME$
1080 GOTO 1130
1090 STOP
1100 TI$=TIME$
1110 TN!=3600*VAL(MID$(TI$,1,2))+60*VAL(MID$(TI$,4,2))+VAL(MID$(TI$,7,2))
1120 RETURN
1130 KEY(11) ON : ON KEY(11) GOSUB 1180
1140 KEY(12) ON : ON KEY(12) GOSUB 1190
1150 KEY(13) ON : ON KEY(13) GOSUB 1200
1160 KEY(14) ON : ON KEY(14) GOSUB 1210
1170 GOTO 1220
1180 TM=3:KEY(11) STOP:RETURN
1190 TM=1:KEY(12) STOP:RETURN
1200 TM=2:KEY(13) STOP:RETURN
1210 TM=4:KEY(14) STOP:RETURN
1220 KEY (11) STOP
1230 KEY (12) STOP
1240 KEY (13) STOP
1250 KEY (14) STOP
1260 GOTO 1310
1270 TM=1 :AB=100-SX
1280 IF SX<AB THEN TM=2:AB=SX
1290 IF (100-SY)<AB THEN TM=3 : GOTO 1360
1300 IF SY<AB THEN TM=4 : GOTO 1370
1310 ON TM GOTO 1320,1340,1360,1370
1320 NX=X-2 : NY=Y : IF NX<1 THEN NX=45
1330 GOTO 1380
1340 NX=X+2 : NY=Y : IF NX>45 THEN NX=1
1350 GOTO 1380
1360 NX=X : NY=Y-1 : GOTO 1380
1370 NX=X : NY=Y+1
1380 TS$=MID$(SC$(NY),NX,1)
1390 IF TS$=" " GOTO 1470
1400 IF TS$=D$ THEN SC!=SC!+10 : CDOT=CDOT-1 : GOTO 1460
1410 IF TS$=BD$ THEN SC!=SC!+50 :CDOT=CDOT-1 : GOTO 1600
1420 IF TS$=G$ GOTO 3370
1430 IF OM=0 THEN GOSUB 1100 : GOTO 1950
1440 TM=OM: OM=0
1450 GOTO 1310
1460 LOCATE 5,54 : PRINT SC!;
1470 MID$(SC$(Y),X)=" "
1480 LOCATE Y,X : PRINT " ";
1490 Y=NY : X=NX
1500 MID$(SC$(Y),X)=P$
1510 LOCATE Y,X : PRINT P$;
1520 OM=TM
1530 GOSUB 1100
1540 M=M+1:IF M=ML GOTO 1730
1550 IF E=1 GOTO 1570
1560 IF M MOD 3 = 2 GOTO 1130
1570 IF CDOT>0 GOTO 1950
1580 FOR I=1 TO 9:SOUND 300,2:SOUND 200,2:NEXT
1590 GOTO 560
1600 GC=15:E=-1:M=0:ML=12:GB=200
1610 COLOR GC
1620 FOR I=1 TO 4
1630 IF GO(I)=1 GOTO 1700
1640 LOCATE GYY(I),GXX(I):PRINT G$;
1650 ON GM(I) GOTO 1660,1670,1680,1690
1660 GM(I)=2:GOTO 1700
1670 GM(I)=1:GOTO 1700
1680 GM(I)=4:GOTO 1700
1690 GM(I)=3
1700 NEXT
1710 COLOR 7
1720 GOTO 1460
1730 IF GC=31 GOTO 1820
1740 GC=31:ML=24
1750 COLOR GC
1760 FOR I=1 TO 4
1770 IF GO(I)=1 GOTO 1790
1780 LOCATE GYY(I),GXX(I):PRINT G$;
1790 NEXT
1800 COLOR 7
1810 GOTO 1570
1820 GC=7:E=1:M=1:ML=0
1830 COLOR GC
1840 FOR I=1 TO 4
1850 IF GO(I)=1 GOTO 1920
1860 LOCATE GYY(I),GXX(I):PRINT G$;
1870 ON GM(I) GOTO 1880,1890,1900,1910
1880 GM(I)=2:GOTO 1920
1890 GM(I)=1:GOTO 1920
1900 GM(I)=4:GOTO 1920
1910 GM(I)=3
1920 NEXT
1930 COLOR 7
1940 GOTO 1570
1950 D=0
1960 FOR I=1 TO 4
1970 GY=GYY(I):GX=GXX(I)
1980 ON GO(I) GOTO 1990,2030
1990 IF (GTO!(I))>TN! GOTO 2020
2000 IF MID$(SC$(10),23,1)=G$ GOTO 3070
2010 GO(I)=2:NY=10:NX=23:TS$=" ":GOTO 2930
2020 D=D+1:GOTO 3070
2030 DY=Y-GY:DX=X-GX
2040 IF DY<>0 GOTO 2060
2050 IF GY<12 THEN DY=-1 ELSE DY=1
2060 IF DX<>0 GOTO 2080
2070 IF GX<23 THEN DX=-1 ELSE DX=1
2080 SYE=SGN(DY)*E:SXE=SGN(DX)*E*2
2090 GX1=GX-2:IF GX1<1 THEN GX1=45
2100 GX2=GX+2:IF GX2>45 THEN GX2=1
2110 GY3=GY-1:GY4=GY+1
2120 ON GM(I) GOTO 2130,2360,2590,2720
2130 IF 2*ABS(DY)>ABS(DX) GOTO 2270
2140 IF DX>0 GOTO 2210
2150 TS$=MID$(SC$(GY),GX1,1)
2160 IF TS$=" " OR TS$=D$ OR TS$=BD$ OR TS$=P$ OR TS$=G$ GOTO 2820
2170 TS$=MID$(SC$(GY+SYE),GX,1)
2180 IF TS$=" " OR TS$=D$ OR TS$=BD$ OR TS$=P$ OR TS$=G$ GOTO 2860
2190 TS$=MID$(SC$(GY-SYE),GX,1)
2200 GOTO 2870
2210 TS$=MID$(SC$(GY+SYE),GX,1)
2220 IF TS$=" " OR TS$=D$ OR TS$=BD$ OR TS$=P$ OR TS$=G$ GOTO 2860
2230 TS$=MID$(SC$(GY),GX1,1)
2240 IF TS$=" " OR TS$=D$ OR TS$=BD$ OR TS$=P$ OR TS$=G$ GOTO 2820
2250 TS$=MID$(SC$(GY-SYE),GX,1)
2260 GOTO 2870
2270 TS$=MID$(SC$(GY+SYE),GX,1)
2280 IF TS$=" " OR TS$=D$ OR TS$=BD$ OR TS$=P$ OR TS$=G$ GOTO 2860
2290 IF DX>0 GOTO 2320
2300 TS$=MID$(SC$(GY),GX1,1)
2310 IF TS$=" " OR TS$=D$ OR TS$=BD$ OR TS$=P$ OR TS$=G$ GOTO 2820
2320 TS$=MID$(SC$(GY-SYE),GX,1)
2330 IF TS$=" " OR TS$=D$ OR TS$=BD$ OR TS$=P$ OR TS$=G$ GOTO 2870
2340 TS$=MID$(SC$(GY),GX1,1)
2350 GOTO 2820
2360 IF 2*ABS(DY)>ABS(DX) GOTO 2500
2370 IF DX<0 GOTO 2440
2380 TS$=MID$(SC$(GY),GX2,1)
2390 IF TS$=" " OR TS$=D$ OR TS$=BD$ OR TS$=P$ OR TS$=G$ GOTO 2830
2400 TS$=MID$(SC$(GY+SYE),GX,1)
2410 IF TS$=" " OR TS$=D$ OR TS$=BD$ OR TS$=P$ OR TS$=G$ GOTO 2860
2420 TS$=MID$(SC$(GY-SYE),GX,1)
2430 GOTO 2870
2440 TS$=MID$(SC$(GY+SYE),GX,1)
2450 IF TS$=" " OR TS$=D$ OR TS$=BD$ OR TS$=P$ OR TS$=G$ GOTO 2860
2460 TS$=MID$(SC$(GY),GX2,1)
2470 IF TS$=" " OR TS$=D$ OR TS$=BD$ OR TS$=P$ OR TS$=G$ GOTO 2830
2480 TS$=MID$(SC$(GY-SYE),GX,1)
2490 GOTO 2870
2500 TS$=MID$(SC$(GY+SYE),GX,1)
2510 IF TS$=" " OR TS$=D$ OR TS$=BD$ OR TS$=P$ OR TS$=G$ GOTO 2860
2520 IF DX<0 GOTO 2550
2530 TS$=MID$(SC$(GY),GX2,1)
2540 IF TS$=" " OR TS$=D$ OR TS$=BD$ OR TS$=P$ OR TS$=G$ GOTO 2830
2550 TS$=MID$(SC$(GY-SYE),GX,1)
2560 IF TS$=" " OR TS$=D$ OR TS$=BD$ OR TS$=P$ OR TS$=G$ GOTO 2870
2570 TS$=MID$(SC$(GY),GX2,1)
2580 GOTO 2830
2590 IF 2*ABS(DY)<ABS(DX) GOTO 2660
2600 TS$=MID$(SC$(GY3),GX,1)
2610 IF TS$=" " OR TS$=D$ OR TS$=BD$ OR TS$=P$ OR TS$=G$ GOTO 2840
2620 TS$=MID$(SC$(GY),GX+SXE,1)
2630 IF TS$=" " OR TS$=D$ OR TS$=BD$ OR TS$=P$ OR TS$=G$ GOTO 2880
2640 TS$=MID$(SC$(GY),GX-SXE,1)
2650 GOTO 2890
2660 TS$=MID$(SC$(GY),GX+SXE,1)
2670 IF TS$=" " OR TS$=D$ OR TS$=BD$ OR TS$=P$ OR TS$=G$ GOTO 2880
2680 TS$=MID$(SC$(GY3),GX,1)
2690 IF TS$=" " OR TS$=D$ OR TS$=BD$ OR TS$=P$ OR TS$=G$ GOTO 2840
2700 TS$=MID$(SC$(GY),GX-SXE,1)
2710 GOTO 2890
2720 IF 2*ABS(DY)<ABS(DX) GOTO 2760
2730 TS$=MID$(SC$(GY4),GX,1)
2740 IF TS$=" " OR TS$=D$ OR TS$=BD$ OR TS$=P$ OR TS$=G$ GOTO 2850
2750 GOTO 2620
2760 TS$=MID$(SC$(GY),GX+SXE,1)
2770 IF TS$=" " OR TS$=D$ OR TS$=BD$ OR TS$=P$ OR TS$=G$ GOTO 2880
2780 TS$=MID$(SC$(GY4),GX,1)
2790 IF TS$=" " OR TS$=D$ OR TS$=BD$ OR TS$=P$ OR TS$=G$ GOTO 2850
2800 TS$=MID$(SC$(GY),GX-SXE,1)
2810 GOTO 2890
2820 NM=1:NY=GY:NX=GX1:GOTO 2910
2830 NM=2:NY=GY:NX=GX2:GOTO 2910
2840 NM=3:NY=GY3:NX=GX:GOTO 2910
2850 NM=4:NY=GY4:NX=GX:GOTO 2910
2860 ON SYE+2 GOTO 2840,2900,2850
2870 ON SYE+2 GOTO 2850,2900,2840
2880 ON SXE+3 GOTO 2820,2900,2900,2900,2830
2890 ON SXE+3 GOTO 2830,2900,2900,2900,2820
2900 REM
2910 IF GM(I)=NM GOTO 2930
2920 REM LOCATE 20,46:PRINT GM(I);GX;GY;NM;NX;NY; :STOP
2930 LOCATE GY,GX : PRINT GSC$(I);
2940 LOCATE NY,NX :COLOR GC: PRINT G$;:COLOR 7
2950 MID$(SC$(GY),GX,1)=GSC$(I) : MID$(SC$(NY),NX,1)=G$
2960 GXX(I)=NX:GYY(I)=NY:GSC$(I)=TS$:GM(I)=NM
2970 IF TS$=P$ GOTO 3050
2980 IF TS$<>G$ GOTO 3070
2990 J=I
3000 J=J+1 : IF J=5 THEN J=1
3010 IF I=J GOTO 3070
3020 IF GXX(J)<>NX GOTO 3000
3030 IF GYY(J)<>NY GOTO 3000
3040 GSC$(I)=GSC$(J):GOTO 3070
3050 IF E=1 THEN GSC$(I)=" ":GOTO 3100
3060 GOSUB 3410
3070 NEXT
3080 SOUND 32767,D2
3090 GOTO 1130
3100 REM
3110 FOR I=1 TO 9:SOUND 900,1:SOUND 800,1:NEXT
3120 SOUND 32767,18
3130 PM=PM-1
3140 IF PM=0 GOTO 3170
3150 LOCATE 24,-1+2*PM:PRINT " ";
3160 GOTO 920
3170 FOR I=1 TO 10
3180 IF SC!>LSC!(I) GOTO 3210
3190 NEXT
3200 GOTO 3310
3210 DEF SEG:POKE 106,0:LOCATE 7,55:INPUT ;"ENTER NAME ",NM$
3220 FOR J=10 TO I STEP -1
3230 LSC!(J+1)=LSC!(J):LNM$(J+1)=LNM$(J)
3240 NEXT
3250 LSC!(I)=SC!:LNM$(I)=NM$
3260 FOR I=1 TO 10
3270 IF LSC!(I)=0 GOTO 3310
3280 LOCATE 10+I,55:PRINT USING "######";LSC!(I);:PRINT "  ";
3290 PRINT USING "\             \";LNM$(I);
3300 NEXT
3310 LOCATE 7,55 : PRINT "HIT SPACE TO PLAY AGAIN   ";
3320 IK$=INKEY$
3330 IF IK$=CHR$(27) GOTO 280
3340 IF IK$="" GOTO 3320
3350 IF IK$=" " GOTO 550
3360 GOTO 3320
3370 LOCATE Y,X:PRINT " ";
3380 MID$(SC$(Y),X)=" "
3390 IF E=1 GOTO 3100
3400 GOSUB 3410:GOTO 1390
3410 SC!=SC!+GB
3420 LOCATE NY,NX-1:PRINT GB;
3430 LOCATE 5,54:PRINT SC!;
3440 GB=GB*2
3450 FOR II=1 TO 18
3460 SOUND 900-25*II,1
3470 NEXT
3480 FOR II=1 TO 4
3490 IF GYY(II)<>NY GOTO 3510
3500 IF GXX(II)=NX GOTO 3530
3510 NEXT
3520 STOP
3530 MID$(SC$(NY),NX,1)=GSC$(II):TS$=GSC$(II)
3540 GYY(II)=12:GXX(II)=17+2*II:GSC$(II)=" "
3550 LOCATE 12,17+2*II:COLOR 7:PRINT G$;
3560 GO(II)=1:GOSUB 1100:GTO!(II)=TN!+15
3570 LOCATE NY,1:PRINT SC$(NY);"  ";
3580 RETURN
10000  DEF SEG:POKE 106,0
10005  CLS:LOCATE 12,1:INPUT"ENTER YOUR NAME: ",XYZ$:XYZ$=LEFT$(XYZ$,8)
10010  CLS:LOCATE 5,1
10020  PRINT"                    1.  SAVE SCORE"
10030  PRINT"                    2.  GET SCORE"
10040  INPUT"REQUEST: ",A%
10050  FILE$=XYZ$+".DAT"
10060  IF A%=1 THEN GOTO 20000
10070  IF A%=2 THEN GOTO 30000
10080  BEEP:GOTO 10010
20000  OPEN FILE$ FOR OUTPUT AS #1
20010  WRITE#1,SC!
20020  CLOSE#1
20030  SC!=0:RETURN 560
30000  OPEN FILE$ FOR INPUT AS #1
30010  INPUT#1,SC!
30020  CLOSE#1
30025  KILL FILE$
30030  RETURN 560
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0173

     Volume in drive A has no label
     Directory of A:\

    CPOKEMAN EXE     41472   8-24-83  11:20p
    CRC      TXT       888  11-15-84   6:49a
    CRCK4    COM      1536  10-21-82   7:54p
    ESP      DOC      9198   2-13-84   3:55p
    ESP      EXE     29824   2-13-84   2:56p
    PACMANGL EXE     42752   1-01-80  12:47a
    PCMAN    BAS     13056   5-28-84  11:39p
    SELLERS             81   2-08-84  10:16a
    XXX                453   6-12-84   7:52p
            9 file(s)     139260 bytes
                           19456 bytes free
