---
layout: page
title: "PC-SIG Diskette Library (Disk #282)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0282/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0282"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "BUSINESS SAMPLER #2"

    The Home Financing Analyst is a comprehensive real estate evaluation
    program written from the perspective of homeowners, potential
    homeowners, or renters.  It can also assist real estate agents,
    brokers, and developers in forcasting and allocating the cost of home
    ownership and then comparing ownership, rental, and alternatives. It's
    can be used to determine if mortgage refinancing is worthwhile. The
    program can not be used to evaluate real estate purchased for
    investment purposes, as it does not take into account depreciation
    charges and rental income.
    
    PC-Check has been designed to track one or more home or office checking
    accounts.  It will allow you to create your own code file in which you
    can store up to 677 two letter codes.  The Checkbook Distribution
    program provides a quick and easy way to group credit card data or
    checks into expense catageories, handy for tracking check data entry
    and editing, balancing, and coding of entries.
    
    The CheckBook Distribution Program provides a quick & easy way to group
    check or credit card data into expense categories.  For example, check
    data may be abbreviated to just the $-Amount and a short expense Code
    for speedy data entry.  However, more complete entries, including dates
    and check descriptions, may also be used when desired.  This
    flexibility provides fast results for tax, business, or budget
    purposes.
    
    How to Start: Consult the .DOC and README files for directions and
    documentation.  To run the BASIC programs, consult the directions in
    GETTING STARTED for your configuration.
    
    Suggested Registration: ANALYST has a suggested registration of
    $15.00.  PC-CHECK has a suggested registration of $40.00.  And the
    CDB package has a suggested registration of $20.00
    
    File Descriptions:
    
    PC-CHECK DOC  PC-CHECK documentation
    SMPLCODE CO   Suggested two letter codes
    AUTOEXEC BAT  Prints registration form
    REGIS    DOC  User support registration
    HELP     BAT  How to print PC-CHECK documentation
    PC-CHECK BAS  Checkbook management program
    -------- ---  PC-CHECK
    CBD-READ ME   Checkbook distribution documentation (39K)
    CBD      DAT  Part of CBD.BAS
    CBD      BAS  Main program
    -------- ---  Checkbook distribution by John Stevens
    MERGE    EXE  Main program
    -------- ---  MERGEPLAN V1.00 (Multiplan spreadsheet consolidator)
    SMPLCHK       More suggested codes
    -------- ---  Stock Analyst
    -------- ---  Home Financial Analyst
    STKANAL  DOC  STKANALY.SIS documentation (16K)
    DATAST        Sample data sheet
    STKANALY SIS  Stock value analyzer
    ANALYST  EXE  Home ownership cost analyzer
    SAMPLE   HFA  Example
    ANALYST  DOC  Documentation (9K)
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ANALYST.DOC

{% raw %}
```





                       * * * * * * * * * * * * * * * * *
                       *   THE HOME FINANCING ANALYST  *
                       * * * * * * * * * * * * * * * * *

                (C) Copyright 1983, 1984 -- Ghassan F. Nakad

Overview
--------
     The HOME FINANCING ANALYST is a comprehensive real estate evaluation 
program written from the perspective of homeowners, potential homeowners, or 
renters. It is destined to assist these people as well as real estate agents, 
brokers and developers in forecasting and allocating the costs of home 
ownership and in comparing ownership versus rental alternatives. It is also 
useful in determining if mortgage refinancing is worthwhile. The program, 
however, cannot be used to evaluate real estate purchased for investment 
purposes, as it does not take into account depreciation charges and rental 
income.

      The program works with the IBM-PC, compatible systems, and both versions 
1.1 and 2.0 of PC-DOS/MS-DOS. Only one disk drive is necessary. The compiled 
version requires at least 128 Kb memory, while the non-compiled version 
needs 64 Kb. The latter is less efficient and does not have the same degree of 
precision as the compiled version (0.01% error detected). Should you run out of 
memory in the non-compiled version, the screen will warn you and prompt you to 
save your work under a file name. The program will then continue as usual. This 
problem does not occur in the compiled version.

Caution
-------
     A file with extension "HFA" must always be present on the program disk. 
Otherwise you run into trouble.

$$$
---
     You are encouraged to copy and distribute this program as long as it is 
not done for profit. If you find this program useful, a $15.00 contribution is 
requested (less is accepted if all your income is eaten up by your mortgage or 
your rent !). Please send your contribution and other correspondence to:

                              Ghassan F. Nakad
                              697 Cove Road, Unit 2-J
                              Stamford, CT 06902

     As a registrant you are entitled to an additional copy of the program for 
$5.00, one written response to a technical support request and annoucements of 
future updates. Whether a registrant or not, your comments will be most   
appreciated.

     Since I carry no liability insurance I am sorry to inform you that this 
program carries no guarantees, warrantees or what have you. If you acquired it 
through me, and you are dissatisfied with it, I'll gladly refund your 
contribution less $5.00 for shipping, handling and the cost of the diskette, 
which will be most probably squeezed and bent in my mail box.

     With this in mind, let's talk home financing !










Program Components
------------------
     The HOME FINANCING ANALYST provides six separate schedules in a template 
format and a worksheet for fast and accurate computation of the effective 
mortgage cost (IRR equivalent).
 
     Schedules A & B: These are the Amortization Schedules for the first (A) 
                      and second (B) mortgages, if any. They show for each year
                      a month by month allocation of the mortgage payments 
                      between principal and interest paid, cumulative principal
                      and interest paid, and the outstanding mortgage balance. 
                      An annual summary of all these is provided at the bottom
                      of the template.

     Schedules C & D: Provide the same information as above on an after-tax 
                      basis.

     Schedule   E   : This a schedule of the annual net monthly costs of owning
                      a home, be it a house or a condo. It takes into account 
                      all payments made -- both tax deductible and not. This 
                      includes mortgage payments, common charges of a condo (if 
                      any), insurance, property taxes, etc. based on your 
                      marginal federal tax rate and your marginal or flat
                      state tax rate (if any). An annual summary is provided.

      Schedule  F   : This last schedule gives a complete picture of the  
                      effective costs of ownership, including such intangibles  
                      as anticipated property appreciation, as well as the 
                      opportunity cost of funds invested (i.e.the down payment)
                      since a person usually forgoes some income on his/her 
                      savings by investing in a home instead of another saving
                      or investment instrument. Once the "true" cost of 
                      ownership is established, the program compares it to  
                      renting costs and determines the benefits or costs of  
                      owning as opposed to renting your home. As usual, monthly 
                      and annual information are provided.

      Effective Rate
      Computation   : This option is a sub-program intended to assist in 
                      figuring out the real interest rate on the mortgage given
                      (a) the mortgage amount; (b) its length; (c) the points 
                      paid up-front; and, (d) the anticipated life of the 
                      mortgage (or how long you intend to keep that mortgage).
                      Also this sub-program will provide you with the amount
                      of the monthly payment, total interest paid over the 
                      life, not necessarily the length, of the mortgage and 
                      the balance outstanding (this also corresponds to the 
                      balloon payment).  


Operations
----------
     The whole program is menu driven and requires no programming skills 
whatsoever. Just follow the menus provided on the various screens.  










     When you first start the program you'll be asked to select one of four 
options:

          1. Input new data
          2. Use data on file
          3. Review files on the disk
          4. Effective rate computation, etc.

     If you are hesitant at first, go directly to option 2 and ask for "SAMPLE" 
when you are prompted to input the file name. A second later you'll see the 
screen getting filled with data that I've stored for illustration purposes. At 
this stage you can do four things: you can continue or return to the original 
menu or alternatively you may decide to alter the data in front of you or 
input you own data. Either way it's only a push button away.

     Should you decide to input your own data all you have to do is answer the 
prompts. The program checks every entry as to its consistency and format but it 
can't tell if some of the amounts are correct or not. So if you make a mistake 
you will be given a chance to make the necessary corrections in a little while. 
In fact throughout the program you'll be constantly asked if you wish to review 
your assumptions, thus permiting the exploration of various "what if" scenarios.

     Every time a change in assumptions is made, you are given a chance to save 
the new set of data. This is highly recommended. Make sure however that the 
name given to the new file does not exceed eight (8) characters and not to 
include any extensions to the name. The program will affix the extension "HFA" 
automatically. Although the extension will appear on the screen when you review 
the files on the disk, you never need to input it.

     After you are given the option to save your data you get to a menu which 
asks you which of the schedules { A through F } discussed earlier you wish      
to be displayed. 

     One of the unique features of the HOME FINANCING ANALYST is that it 
provides you with the opportunity to move from one schedule to another. Hence, 
if you want to see the schedule of the next year you just push "N". If 
instead you want to review your assumptions (and possibly change them), you 
push "R", etc. Everything on the screen is self-explanatory.

A Note on Computation
---------------------
     The computational rules are to be printed and distributed at a later 
stage. The trickiest ones are explained here:

      Any Net Cost = Any Deductible Cost - Shield

      Shield = Pre-tax Deductible Cost  X  Tax Rate

      Tax Rate = Federal Tax Rate + [(1-(Federal Tax Rate)) X State Tax Rate]

      Appreciation = (% Expected Appreciation X 0.6) 
                     + [(1-Tax Rate) X 0.4 X  % Expected Appreciation]

      Return on Investment = Appreciation / Down Payment

      Total Return on Investment = Net Cost or Benefit / Down Payment

That's it for now. Forthcoming enhancements will include (among other things)   
variable and stepped-up rate mortgage rates.








          



              
```
{% endraw %}

## CBD.BAS

{% raw %}
```bas
10 WIDTH 80:KEY OFF:'    "_:CBD.BAS"   2-05-85  1A
11 '
12 '      ------------------------------------------------------------------
13 DATA                  "  CHECKBOOK DISTRIBUTION PROGRAM  "
14 DATA" "
15 DATA"  Users are encouraged to copy and test this User Supported Software  "
16 DATA"  product without cost,  provided it is distributed unchanged.  Then  "
17 DATA"    if you find the program useful, a contribution of $20 would be    "
18 DATA"      appreciated.  Comments are also welcome.  Please mail to:       "
19 DATA" "
20 DATA"                             John Stevens"
21 DATA"                    PRODUCTIVITY COMPUTING SERVICES"
22 DATA"              P. O. Box 5892, Pasadena, California  91107"
23 DATA" "
24 DATA"         NOTE:  This program is offered AS IS with no express"
25 DATA"                        or implied warrantees."
26 '      ------------------------------------------------------------------
27 DATA"        Copyright (C) 1984,1985 Productivity Computing Services"
28 '
29 '
30 DFILE$="A:CBD.DAT": YR=1984:L$=";":K$="=": DEFINT C-D, I-N: DEFDBL V:'       ' DFILE$=Filespec for Data SAVE/LOAD, L$=(; / ,)=Delimiter for Check Entries,     K$=(= ` @)=First Char of Deposit Codes (+, & Checks then to be -)
32 GOSUB 4800: GOSUB 2000: ' Start/Dim @ 2000/5000
33 PE=0: GOSUB 1100: GOTO 4000: ' Keybd Entry
98 '
100 PRINT: PRINT "   **Sorting Description Codes**": ' To order D$() Array, on field positions 1-3
106 B$=SPACE$(DJ)
110 K=DI: L=K: ' No. of strings in D$() Array
120 L=INT(L/3)+1: FOR I=1 TO K-L: FOR J=I TO 1 STEP -L
130 IF LEFT$(D$(J),3)<=LEFT$(D$(J+L),3) THEN 170
140 MID$(B$,1)=D$(J): MID$(D$(J),1)=D$(J+L): MID$(D$(J+L),1)=B$: ' Exch elements
160 NEXT J
170 NEXT I
180 IF L>1 THEN 120
194 RETURN
198 '
200 PRINT: PRINT "   **Sorting on Description, within Code  ";G$;"  **": ' To Order in CS(), on C$() field pos. 8-27
206 A$=SPACE$(5): B$=A$
210 K=CSI: L=K: ' No. of strings selected in CS()
220 L=INT(L/3)+1: FOR I=1 TO K-L: FOR J=I TO 1 STEP -L: M=CS(J): N=CS(J+L)
226 E$=STR$(M): MID$(A$,1)=SPACE$(5-LEN(E$))+E$: E$=STR$(N): MID$(B$,1)=SPACE$(5-LEN(E$))+E$
230 IF MID$(C$(M),6,CD)+A$<MID$(C$(N),6,CD)+B$ THEN 270
240 NF=CS(J): CS(J)=CS(J+L): CS(J+L)=NF: ' EXCH CS() POSITION
260 NEXT J
270 NEXT I
280 IF L>1 THEN 220
294 RETURN
298 '
300 '  COND INPUT & FIND DELIMITERS (L$="," OR "/", )
308 FOR L=1 TO 5:A(L)=0:NEXT L
312 J=0:GOSUB 340
314  E$=LEFT$(A$,1): IF MID$(A$,2,1)="." AND E$<":" AND E$>"/" THEN A$=" "+A$
316 FOR J=1 TO LL-1
320 IF MID$(A$,J,1)=L$ THEN GOSUB 340:K=K+1:A(K)=J: ' K=Delimiter Count, A()=Line Position
324 NEXT J:A(K+1)=LEN(A$):IF K>0 AND ASC(MID$(A$,A(K)+1,A(K+1)-A(K)))<43 THEN K=K-1
330 RETURN
340  L=0:M=J+1: ' DELETE LEAD BLANKS (UP TO 20), L=COUNT
344  IF J>LL-2 THEN 352
348  E$=MID$(A$,M,1): IF E$=" " OR E$=L$ THEN MID$(A$,M)=MID$(A$,M+1): L=L+1: IF L<21 THEN 348
352  RETURN
358 '
360 ' DEVELOP V$ TO EVEN OR DEC $--USE CA (SIZE), CCF (DEC), V (NO.) & RETURN V$ (CA+1 CHAR)
364 MID$(V$,1)=SPACE$(CA+1): KA=1: IF CCF=2 THEN KA=100
366 IF  NOT (CCF=0 OR CCF=2) THEN KA=10^CCF
368 A$=STR$(INT(KA*V+0.501))
370 KA=1:IF CCF=0 THEN KA=0
374 IF LEN(A$)>CA+1-KA THEN A$="99999999999": EF=1
378 E=LEN(A$): MID$(V$,CA+2-E,E)=A$:KA=CA+1-CCF
382 IF CCF>0 THEN MID$(V$,1,CA-CCF)=MID$(V$,2,KA-1):MID$(V$,KA,1)="."
386 IF CCF<2 THEN RETURN
390 KA=KA+1:IF MID$(V$,KA,1)="-" THEN MID$(V$,KA-2,3)="-.0": ' Adj for .-9
392 IF MID$(V$,KA,1)=" " THEN MID$(V$,KA,1)="0": ' Adj for ._9
394 RETURN
398 '
500 ' $-AMOUNT & CODE ONLY (ALSO SEE 3400)
510 V=VAL(LEFT$(A$,A(1)-1))
514 MID$(B$,CJ-3,3)=MID$(A$,A(1)+1)
518 RETURN
528 '
530 ' DESCRIP, $-AMOUNT,CODE OR BLANK(IMPLIED CODE)
540 MID$(B$,6,CD)=LEFT$(A$,A(1)-1)
544 DF=0:GOSUB 578
548 RETURN
558 '
560 ' REMAINDER--DATE FIRST, ETC.
570 L=A(1)-1: IF L>5 THEN L=5
572 MID$(B$,6-L,5)=LEFT$(A$,A(1)-1): ' Date or Check No.
573 IF LEFT$(B$,5)<>"     " AND MID$(B$,5,1)=" " THEN MID$(B$,2,4)=LEFT$(B$,4): MID$(B$,1,1)=" ": GOTO 573
574 DF=0: E$=MID$(A$,A(1)+1,1):IF E$>"9" OR E$<"+" OR E$="," OR E$="/" THEN MID$(B$,6,CD)=MID$(A$,A(1)+1,A(2)-A(1)-1): DF=1: ' Descrip.
578 V=VAL(MID$(A$,A(1+DF)+1,A(2+DF)-A(1+DF)-1))
582 IF K-DF>1 THEN MID$(B$,CJ-3,3)=MID$(A$,A(2+DF)+1,A(3+DF)-A(2+DF)-1)
588 RETURN
598 '
600 OPEN "O",#3,RF$: ' Results Output Device
606 ON ERROR GOTO 1996: PRINT #3, SPC(12) "REPORT C:  DISTRIBUTION RESULTS", DATE$: PRINT #3,: ON ERROR GOTO 0
610 PRINT #3, "      NO.   Da/No  DESCRIPTION  (20)      $-AMOUNT  CODE";: IF XF=0 THEN PRINT #3, "    CUMUL $": ELSE PRINT #3,
614 PRINT #3, "      ----  -----  --------------------   --------  --- ";: IF XF=0 THEN PRINT #3, "  ---------": ELSE PRINT #3,
618 PRINT #3, SPC(11) YR: PRINT #3,: VTC=0: ' VTC=Total, Cumul
622 FOR I=1 TO CI: MID$(C$(I),CJ)=" ": NEXT I: ' INIT DESCRIP/CODE FLAG
626 IF DI<1 THEN 774
630  FOR LL=DBU TO DI: VT=0: ' VT=Total for Code Group
634 G$=LEFT$(D$(LL),3):PRINT #3, "   ** ";LEFT$(D$(LL),DJ-CA-1): ' Code & Descrip
638 IF MID$(D$(LL),4,1)="+" THEN 674: ' Entries to be Sorted on Descrip,  within Code
646   FOR I=1 TO CI
650 IF MID$(C$(I),CJ-3,3)<>G$ THEN 666
654 E$=STR$(I): PRINT #3, SPACE$(9-LEN(E$))+E$;".  "; LEFT$(C$(I),5);"  ";MID$(C$(I),6,CD+CA+1);"  ";MID$(C$(I),CJ-3,3): 'Print Codes & Descrip
658 V=VAL(MID$(C$(I),6+CD,CA+1)): GOSUB 360
662 VT=VT+V: MID$(C$(I),CJ,1)="+": ' + in Col 44 if Code Found
666   NEXT I: GOTO 746: ' GOTO Print of Totals, VT
670 '
674 ' SUBR FOR DESCRIPTIONS to SORT
678   CSI=0
682   FOR I=1 TO CI: ' Select Items to be Sorted
686 IF MID$(C$(I),CJ-3,3)<>G$ THEN 710
690 MID$(C$(I),CJ,1)="+"
698 CSI=CSI+1
702 CS(CSI)=I
710   NEXT I: IF CSI<1 THEN 746
714 IF CSI>1 THEN GOSUB 200: ' Sort on Descrip, if >1
718   FOR I=1 TO CSI: M=CS(I): ' M = Indirect Ref in C$()
722 V=VAL(MID$(C$(M),6+CD,CA+1)): GOSUB 360: VT=VT+V
726 E$=STR$(M): PRINT #3, SPACE$(9-LEN(E$))+E$;".  "; LEFT$(C$(M),5);"  ";MID$(C$(M),6,CD+CA+1);"  ";MID$(C$(M),CJ-3,3): 'Print Codes & Descrip
730 IF I<CSI THEN IF MID$(C$(M),6,CD)=MID$(C$(CS(I+1)),6,CD) THEN VST=VST+V: GOTO 738
734 IF VST<>0 THEN VST=VST+V: V=VST: GOSUB 360: PRINT #3, SPC(21);"SUB-TOTAL =";V$;" *": VST=0
738   NEXT I
742 '
746 PRINT #3, SPC(22+CD);"--------"
750 V=VT: GOSUB 360: B$=V$: MID$(D$(LL),DJ-CA,CA+1)=B$: ' Total for Code Group
754 IF CR<0 AND LEFT$(G$,1)<>K$ THEN VTC=VTC-VT: ELSE VTC=VTC+VT: ' K$ Sets Sign Reverse for Cumul s: If Deposits=+, Then Checks=-
758 V=VTC: GOSUB 360
762 PRINT #3, SPC(12+CD);"TOTAL =";B$;" **";: IF XF=0 THEN PRINT #3, "   ";V$;" ***": ELSE PRINT #3,
764 PRINT #3, SPC(22+CD);"========"
766  NEXT LL
770 '
774  DBU=DI+1: ' Check for Codes Not in Descrip Table
778  FOR I=1 TO CI
782 IF RIGHT$(C$(I),1)="+" THEN 814
786 B$=MID$(C$(I),CJ-3,3)
790 IF DBU>DI THEN K=DBU: GOTO 806
794   FOR K=DBU TO DI
798 IF B$=LEFT$(D$(K),3) THEN 806
802   NEXT K
806 IF K>DI AND K<=DN THEN DI=K: D$(DI)=B$+SPACE$(DJ-3): ' Add New Code to D$() -- K=Next Open Index
810 IF K>DN THEN PRINT: PRINT #3, "------ CODE DESCRIPTION TABLE = FULL.  CHECK CODE NOT ACCOUNTED FOR =  ";B$;" ------":PRINT #3,
814  NEXT I
818 IF DBU<=DI THEN PRINT #3,: PRINT #3,: PRINT #3, "---CODES NOT INCLUDED IN DESCRIPTION TABLE INITIALLY---":PRINT #3,: GOTO 626
822 IF LPF=0 THEN LPF=1:GOTO 774
826 PRINT #3,:PRINT #3,, " BALANCE = ";V$;" ***":PRINT #3,:PRINT #3,:PRINT #3,
828 CLOSE #3
830 RETURN
898 '
1000 ' Subr ENTRY OPTIONS
1008 PRINT,"***  Re-List These Edit Options"
1010 PRINT,"**n  LIST Data Entries, from Line  n."
1012 PRINT,"*n   REPEAT a prior Line, No.  n,  for Edit."
1014 PRINT,">n   INSERT an Entry Before Current Entry @ Line  n."
1016 PRINT,"<n   DELETE Entry @ Line  n."
1018 PRINT,"*    Exit, when finished.": RETURN
1098 '
1100 CLS: PRINT: PRINT "2. ENTER & EDIT CODE DESCRIPTIONS, Starting With:"
1104 PRINT "     (E)  Empty File,     (RET)  Next Open Location,     (*) Skip ";:INPUT A$:IF A$="*" THEN 1200
1106 IF A$="E" OR A$="e" THEN PRINT: GOSUB 1800: IF E$="Y" THEN DI=0: ELSE 1100
1108 PRINT: PRINT "   EDIT OPTIONS:    (Max Entries =";DN;")"
1110 GOSUB 1000: PRINT
1112 PRINT "   ENTRY FORMAT:  C=Code(3), D=Description(30)    Use a Plus Sign in Position 4"
1113 PRINT "       ? CCC+ DDDDDD_30_DDDDDDDDDDDDDDDDDDDD      of the entry to obtain Sub-"
1114 PRINT SPC(50) "grouping by Check Description.";
1119 FOR IX=DI+1 TO DN: ' LOC IN D$(i)
1120 IF IX>DN THEN IX=DN
1121 I=IX
1122 IF I>IX THEN I=IX
1130 E$=STR$(I)
1132 PRINT "E=";SPACE$(4-LEN(E$))+E$;" ? ";: LINE INPUT A$: IF LEFT$(A$,9)="         " THEN A$=MID$(A$,10)
1134 IF A$="*" THEN IX=CN:GOTO 1190
1136 IF A$="***" THEN 1108
1137 IF LEFT$(A$,2)="**" AND LEN(A$)<3 THEN A$=A$+"1"
1138 IF LEFT$(A$,2)="**" THEN I=VAL(MID$(A$,3)): FOR J=I TO IX-1: E$=STR$(J): PRINT SPACE$(7-LEN(E$))+E$;". "; LEFT$(D$(J),DJ-CA-1): NEXT J: PRINT: GOTO 1121
1140 LL=LEN(A$): IF LL=0 THEN 1130: ELSE IF LL>DJ THEN LL=DJ
1142 H$=LEFT$(A$,1): IF (H$="*" OR H$=">" OR H$="<") AND LL>1 THEN I=VAL(MID$(A$,2)): IF I<1 OR I>=IX THEN 1121
1144 IF H$=">" AND I<IX THEN IF IX<DN THEN FOR J=DI TO I STEP -1: D$(J+1)=D$(J): NEXT J: IX=IX+1: DI=DI+1: D$(I)=SPACE$(DJ): A$=STR$(I): H$="*": ELSE PRINT "  ** Code/Description Space=FULL **": GOTO 1120
1146 IF H$="<" THEN IF I<IX THEN FOR J=I+1 TO IX : D$(J-1)=D$(J): NEXT J: IX=IX-1: DI=DI-1: GOTO 1121: ELSE GOTO 1121
1162 IF H$="*" THEN PRINT "         ";LEFT$(D$(I),DJ-CA-1): GOTO 1122
1166 IF LL<DJ THEN A$=A$+SPACE$(DJ-LL)
1170 IF MID$(A$,4,1)<>"+" THEN MID$(A$,4,1)=" "
1172 IF LEFT$(A$,3)="   " THEN MID$(A$,4,1)="+": ' Automatic + if Blank Code
1174 MID$(A$,5,1)=" ": D$(I)=LEFT$(A$,DJ): RF=0: IF I>DI THEN DI=I
1178 IF I<IX THEN 1121
1190 NEXT IX
1199 REM
1200 CLS: PRINT: PRINT "3. ENTER & EDIT CHECKBOOK DATA, Starting With:"
1201 PRINT "     (E)  Empty File,     (RET)  Next Open Location,     (*) Skip ";:INPUT A$:IF A$="*" THEN 1394
1202 IF A$="E" OR A$="e" THEN PRINT: GOSUB 1800: IF E$="Y" THEN CI=0: VB=0: PRINT: PRINT "   YEAR for Data Identification";: INPUT A$: IF LEN(A$)>0 THEN YR=VAL(A$): ELSE CONT: ELSE 1200
1204 PRINT: PRINT "   EDIT OPTIONS:    (Max Entries =";CN;")"
1206 GOSUB 1000
1207 PRINT SPC(21) "NOTE:  n  may also be used to reference a Check No. entered",,,"   instead of a date, if = 1000 to 99999.": PRINT
1209 PRINT "   ENTRY FORMAT (Delimiter for SEPARATING Fields is ";L$;"):"
1210 PRINT SPC(7) "Date or Check No.(5)";L$;"  Description(20)";L$;"  $-AMOUNT(10)";L$;"  Code(3)"
1211 PRINT, "NOTE:  Only Two Fields are Required:  the $-AMOUNT, & One Other." : PRINT SPC(7) "Description & Code Fields must start with an ALPHABETIC Character."
1212 PRINT SPC(7) "For Check Deposits, Use  '";K$;"'  as First Char. of Code,  for +/- in Cumul.": PRINT TAB(38) "(And, use in first entry.)": PRINT
1214 PRINT SPC(7) "? 12.31";L$;"DDDDD_20_DDDDDDDDDDD";L$;"1234567.12";L$;"ABC    <---Example"
1216 IF CAAF>0 AND CI=0 THEN AAA=1: CI=1: C$(1)=SPACE$(CJ): MID$(C$(1),CJ-6)="0  AAA": ' To Accumul $-Amts Entered w/o separate line
1217 IF CAAF>1 AND CI<2 THEN AA1=2: CI=2: C$(2)=SPACE$(CJ): MID$(C$(2),CJ-6)="0  AA1": ' To Accumul $100/RETurn
1218 B$=SPACE$(CJ): VC=0
1219 FOR IX=CI+1 TO CN: ' LOC IN C$(i)
1220 IF IX>CN THEN IX=CN
1221 I=IX
1222 IF I>=IX THEN I=IX: VC=0
1226 IF EF>0 THEN PRINT "  ** ERROR IN ENTRY, OR $-AMOUNT TOO LARGE, RE-ENTER **"
1230 E$=STR$(I)
1232 EF=0: LV1=CSRLIN: PRINT "E=";SPACE$(4-LEN(E$))+E$;" ? ";: LINE INPUT A$: IF LEFT$(A$,9)="         " THEN A$=MID$(A$,10)
1233 IF LV1=24 THEN LV1=23
1234 IF A$="*" THEN IX=CN:GOTO 1390
1236 IF A$="***" THEN 1204
1240 M=0: IF LEFT$(A$,2)="**" THEN M=1: IF LEN(A$)<3 THEN A$=A$+"1"
1244 H$=LEFT$(A$,1): A$=A$+" ": LL=LEN(A$): G$="     ": IF NOT((H$="*" OR H$=">" OR H$="<") AND LL>2) THEN 1260: ELSE IF LL-M<8 THEN MID$(G$,8+M-LL)=MID$(A$,2+M): A=VAL(G$): ELSE EF=1: GOTO 1222
1245 IF LEN(STR$(A))<LL-1-M THEN EF=1: GOTO 1222:  ELSE IF A<1000 THEN I=A: GOTO 1250
1246 M=CI/2: IF G$<LEFT$(C$(M),5) THEN L=1: M=IX-1: N=1: ELSE L=IX-1: M=1: N=-1
1247 EF=1: FOR J=L TO M STEP N: IF LEFT$(C$(J),5)=G$ THEN I=J: J=M: EF=0
1248 NEXT J: IF EF=1 THEN 1222
1250 IF I<1 OR I>=IX THEN VC=0: GOTO 1221
1252 IF LEFT$(A$,2)="**" THEN VC=0: FOR J=I TO IX-1: MID$(B$,1)=C$(J): E$=STR$(J): PRINT SPACE$(7-LEN(E$))+E$;". ";LEFT$(B$,5);L$;MID$(B$,6,CD);L$;MID$(B$,7+CD,CA);L$;MID$(B$,CJ-3,3): NEXT J: LV1=CSRLIN-1: GOSUB 1700: PRINT: GOTO 1221
1253 M=CR: IF MID$(C$(I),CJ-3,1)=K$ THEN M=-CR
1254 IF H$="*" OR H$="<" THEN VC=M*VAL(MID$(C$(I),7+CD,CA))
1255 IF H$="<" THEN IF I<IX THEN VB=VB-VC: VC=0: CI=CI-1: GOSUB 1700: FOR J=I+1 TO IX : MID$(C$(J-1),1)=C$(J): NEXT J: IX=IX-1: GOTO 1221: ELSE GOTO 1221
1256 IF H$=">" AND I<IX THEN VC=0: IF IX<CN THEN FOR J=CI TO I STEP -1: C$(J+1)=C$(J): NEXT J: IX=IX+1: CI=CI+1: C$(I)=SPACE$(CJ): A$=STR$(I): H$="*": ELSE PRINT "  ** Check Entry Space=FULL **": GOTO 1220
1258 IF H$="*" THEN PRINT SPC(9);LEFT$(C$(I),5);L$;MID$(C$(I),6,CD);L$;MID$(C$(I),7+CD,CA);L$;MID$(C$(I),CJ-3,3): GOTO 1222
1260 IF LL>CJ+5 THEN PRINT "  ** TOO LONG, RE-ENTER **":GOTO 1222
1262 MID$(B$,1)=SPACE$(CJ)
1264 K=0: IF A$=" " OR A$="  " THEN 1280
1266   GOSUB 308: ' Condense Input & Find Delimiters
1270 NF=1: L=1: IF LEFT$(A$,1)=" " THEN L=2
1272 E$=MID$(A$,L,1):IF E$>"9" OR E$<"+" OR E$="," OR E$="/" THEN NF=0: ' NF=NUMERIC FLAG FOR FIRST FIELD, IF=1
1274 E$=MID$(A$,A(1)+1,1): IF K>0 AND NF=1 THEN IF E$<":" AND E$>"*" AND E$<>"," AND E$<>"/" THEN 1310
1280 IF K=0 THEN GOSUB 3406: GOTO 1222: ' AAA & AA1 (TAXABLE ITEMS ACCUMUL)
1290 IF K=1 AND NF=1 THEN GOSUB 510: GOTO 1320: ' $AMOUNT & CODE ONLY
1300 IF K<3 AND NF=0 THEN GOSUB 540: GOTO 1320: ' DESCRIP, $AMOUNT, CODE OR BLANK(IMPLIED CODE)
1310 GOSUB 570: ' REMAINDER--DATE FIRST, ETC.
1320 GOSUB 360: IF EF>0 THEN 1222
1344 MID$(B$,6+CD)=V$: ' V to V$, & Store
1350 IF MID$(B$,CJ-3)="AAA" THEN AAA=I
1354 IF MID$(B$,CJ-3)="AA1" THEN AA1=I
1356 IF MID$(B$,CJ-3,1)=K$ THEN CR=-1: ' CR=Sign Reverse for Cumul s
1360 C$(I)=B$: RF=0: ' Store Check Data & Set Results Flag=0, because of Change
1362 IF I=IX THEN CI=CI+1
1366 M=CR: IF MID$(C$(I),CJ-3,1)=K$ THEN M=-CR
1368 VB=VB-VC+M*VAL(MID$(B$,7+CD,CA)): VC=0: GOSUB 1700
1380 IF I<IX THEN 1221
1390 NEXT IX
1394 RETURN
1398 '
1700 LOCATE LV1,54: PRINT "**Bal.@";CI;USING"=#########,.##";VB: ' VB = Final Check Bal
1710 RETURN
1800 PRINT "*** WARNING!  This option DELETES Check &/or Code data currently in memory. ***":PRINT "    Enter  (Y)    if this is OK, or else":PRINT SPC(11);"(RET)  for Repeat of Menu Options. ";:INPUT E$: IF E$="y" THEN E$="Y"
1810 RETURN
1900 CLS
1902 PRINT :PRINT "5. SAVE CHECK ENTRIES & CODE DESCRIPTIONS On DISK:"
1903 A$=DFILE$:IF LEN(DFILE2$)<>0 THEN A$=DFILE2$
1904 PRINT M$ "(S)    To File:            `";A$;"'"
1905 PRINT M$ "(   )  To File Specified:   d:a8.3"
1906 PRINT M$ "(A/B)  List Files on selected Drive, A or B"
1907 PRINT: PRINT "   or NO SAVE, and:"
1908 PRINT M$ "(X)    Exit CBD Program and Return to DOS,
1909 PRINT M$ "(N)    Initiate NEW File via Menu 1,"
1910 PRINT M$ "(RET)  or Return to Menu 2 for Data Entry & Editing ";: INPUT B$: PRINT: IF LEN(B$)=0 OR B$="*" THEN 1990
1911 IF B$="X" OR B$="x" THEN GOSUB 1800: IF E$="Y" THEN SYSTEM:ELSE 1902
1912 IF B$="N" OR B$="n" THEN GOSUB 1800: IF E$="Y" THEN RUN:ELSE 1902
1914 IF B$="A" OR B$="a" OR B$="B" OR B$="b" THEN PRINT "***FILES***": FILES B$+":": GOTO 1902
1916 PRINT "** CODES & DESCRIPTIONS =";DI;",   CHECK/$-AMOUNT ENTRIES =";CI;"**"
1920 IF B$="S" OR B$="s" THEN B$=A$
1922 IF LEN(B$)<3 THEN PRINT "--NO DATA SAVED.":GOTO 1902
1926 IF LEN(B$)>3 THEN E$=RIGHT$(B$,4): IF E$=".BAS" OR E$=".bas" OR E$=".COM" OR E$=".com" OR E$=".EXE" OR E$=".exe" THEN PRINT: PRINT "*** FILESPEC.ext  `";E$;"'  NOT ALLOWED -- IT MAY OVERLAY A PROGRAM! ***": GOTO 1902
1928 IF CI=0 OR DI=0 THEN PRINT "----DO YOU STILL WISH TO SAVE, YES (Y),   OR NO (RET)";:INPUT A$:IF NOT(A$="Y" OR A$="y") THEN 1990
1930 IF MID$(B$,2,1)<>":" THEN A$=B$: B$="A:"+A$: ' Default to Drive A:
1940 ON ERROR GOTO 1992: OPEN "O",#1,B$: DFILE2$=B$: ON ERROR GOTO 0
1942 PRINT "   --Data Being SAVED on File  ";B$
1944 PRINT #1,YR;CAAF;CCF;AAA;AA1;CR
1946 PRINT #1,CN;CI;CJ;CD;CA;DN;DI;DJ
1950 IF CI>0 THEN FOR I=1 TO CI: PRINT #1,Q$;C$(I);Q$;: NEXT I
1954 IF DI>0 THEN FOR I=1 TO DI: PRINT #1,Q$;D$(I);Q$;: NEXT I
1960 CLOSE #1
1964 ON ERROR GOTO 1994: LPRINT "--DATA SAVED ON  '";B$;"'": LPRINT: LPRINT: ON ERROR GOTO 0
1968 PRINT: GOTO 1902
1990 RETURN
1992 CLOSE #1: PRINT: INPUT "*** ERROR:  Disk or File not available.  Insert correct disk, Return & Redo. *** ",A$: RESUME 1902
1994 RESUME NEXT
1996 CLOSE #1: PRINT: PE=PE+1: IF PE<3 THEN INPUT "*** ERROR:  Printer not available.  Correct & hit Return. *** ",A$:PRINT: RESUME: ELSE RESUME NEXT
1998 '
2000 Q$=CHR$(34):IF B$<>"C" THEN GOSUB 5500:SYSTEM: ' Q$=Init. Quote$
2001 '
2002 PRINT SPC(66) DATE$
2003 PRINT SPC(6) "1. LOAD CHECK ENTRIES & CODE DESCRIPTIONS From DISK:"
2004 PRINT SPC(11) "(L)    From File:            `";DFILE$;"'"
2005 PRINT SPC(11) "(   )  From File Specified:   d:a8.3"
2006 PRINT SPC(11) "(A/B)  List Files on selected Drive, A or B"
2007 PRINT: PRINT SPC(11) "(RET)  or Begin NEW FILE.",:INPUT B$
2012 CCF=2: IF B$="D" OR B$="d" THEN CCF=0: ' CCF=Cents Flag($=0, $.00=2)--Old Option
2018 IF B$="A" OR B$="a" OR B$="B" OR B$="b" THEN PRINT: PRINT "***FILES***": FILES B$+":": GOTO 2002
2020 IF B$="L" OR B$="l" THEN B$=DFILE$
2024 IF LEN(B$)<3 THEN GOSUB 5000:GOTO 2090: ' Initialize
2026 IF MID$(B$,2,1)<>":" THEN A$=B$: B$="A:"+A$: ' Default to Drive A:
2030 ON ERROR GOTO 2092: OPEN "I",#1,B$: DFILE2$=B$: ON ERROR GOTO 0
2034 INPUT #1,YR,CAAF,CCF,AAA,AA1,CR
2036 INPUT #1,CN,CI,CJ,CD,CA,DN,DI,DJ
2040 ON ERROR GOTO 2094: ERASE C$, CS, D$
2042 ON ERROR GOTO 0: GOSUB 5418: ' Re-DIM
2045 PRINT: PRINT "**YEAR = ";YR;"**"
2046 PRINT "** CODES & DESCRIPTIONS =";DI;",   CHECK/$-AMOUNT ENTRIES =";CI;"**"
2050 IF CI<1 THEN 2058: ELSE VB=0: FOR I=1 TO CI:INPUT #1,C$(I): M=CR: IF MID$(C$(I),CJ-3,1)=K$ THEN M=-CR
2054 VB=VB+M*VAL(MID$(C$(I),7+CD,CA)): NEXT I
2058 IF DI>0 THEN FOR I=1 TO DI:INPUT #1,D$(I):NEXT I
2060 CLOSE #1
2090 V$=SPACE$(CA+1): RETURN
2092 PRINT: INPUT "*** ERROR:  Disk or File not available.  Insert correct disk, Return & Redo. *** ",A$: RESUME 2002
2094 RESUME NEXT
2098 '
3400 ' AAA & AA1 (TAXABLE ITEMS ACCUMUL)
3406 IF CAAF=0 OR LEN(A$)>CA+1 THEN EF=1:GOTO 3430
3408 IF  NOT (LEN(A$)<=1 AND CAAF=2) THEN 3420
3410 V=VAL(MID$(C$(AA1),CJ-6-CA,CA+1))+100: GOSUB 360: ' Add $100, & V to V$
3412 MID$(C$(AA1),CJ-6-CA)=V$:GOTO 3430
3420 V=VAL(MID$(C$(AAA),CJ-6-CA,CA+1))+VAL(A$): GOSUB 360: ' Accumul $-Amount, & V to V$
3424 MID$(C$(AAA),CJ-6-CA)=V$
3430 RETURN
3498 '
4000 CLS
4004 PRINT: PRINT "4. SORT, DEVELOP, & PRINT RESULTS:": PRINT
4010 PRINT M$ "(S)      SORT Description Codes,"
4014 PRINT M$ "(A)      PRINT Report A:  Code Descriptions"
4018 PRINT M$ "(Bn)     PRINT Report B:  Check Entries + Balance,": PRINT,"  --Where `n' is Optional Begin Line No., or Check No. 1000-99999"
4022 PRINT M$ "(C or CC)  PRINT Report C:  Distribution Results,": PRINT,"    & Prepare for Code Group Totals.  --Append `C' for Cumul also.";
4026 PRINT M$ "(Z or ZC)  ALL of Above, or": PRINT
4028 PRINT M$ "(F)      Develop & File Results of Distribution on  `A:CBD.RES'": PRINT, "  --Omit Results Report, but Prepare for Code Group Totals."
4030 PRINT M$ "(RET)    Exit, NONE of Above.",: INPUT H$
4034 IF LEN(H$)=0 OR H$="*" THEN GOSUB 1900:GOTO 33: ' SAVE Data & Repeat
4038 DBU=1:LPF=0: ' Descrip/Code Unavail @ DBU in D$(), Loop Flag (700-750)
4042 G$=LEFT$(H$,1): IF G$="z" THEN G$="Z"
4046 IF G$="S" OR G$="s" OR G$="Z" THEN GOSUB 100: IF G$<>"Z" THEN 4004: ' Sort of D$
4050 XF=1:IF LEN(H$)>1 THEN XF=0: ' X-FLAG To Delete CUMUL (if, =1)
4054 K=0: IF G$="A" OR G$="a" OR G$="Z" THEN B$="LPT1:": GOSUB 4100: ' To Print Table A:
4058 IF G$="B" OR G$="b" OR G$="Z" THEN GOSUB 4200: ' To Print Table B:
4062 IF G$="C" OR G$="c" OR G$="Z" THEN RF$="LPT1:": GOSUB 600: RF=1: ' Dev Results & Print Table C:
4064 IF RF<2 AND (G$="F" OR G$="f") THEN RF$="A:CBD.RES": GOSUB 600: RF=2: ' Dev & File Results
4066 IF RF=0 THEN 4094: ' RF=Results Flag:  0=None(or changes), 1=Printed, 2=Filed
4068 K=1: ' Incl Totals if RF>0
4070 PRINT: PRINT "   PRINT Report D:  Code Descriptions & Group Totals (Only)--"
4072 PRINT M$ "(P)      To Printer,"
4074 PRINT M$ "(S)      To Screen,"
4076 PRINT M$ "(RET)    or None, Return.",:INPUT A$: IF LEN(A$)=0 THEN 4000
4080 IF A$="P" OR A$="p" THEN B$="LPT1:": GOSUB 4100
4082 IF A$="S" OR A$="s" THEN B$="CON": PRINT: PRINT: GOSUB 4100: INPUT "   **Press RETurn to Continue.** ",A$
4094 GOTO 4004
4098 '
4100 OPEN "O",#1,B$
4140 ON ERROR GOTO 1996
4144 IF K=0 THEN PRINT #1, SPC(8) "REPORT A:  CODE DESCRIPTIONS (Up to";DN;")", DATE$
4148 IF K=1 THEN PRINT #1, SPC(8) "REPORT D:  CODE DESCRIPTIONS & GROUP TOTALS", DATE$
4152 PRINT #1,: ON ERROR GOTO 0
4160 L=CSRLIN
4162 PRINT #1, "   NO.  CODE       DESCRIPTION  (30)       ";: IF K=1 THEN PRINT #1, "    TOTAL $": ELSE PRINT #1,
4166 PRINT #1, "   ---  ---+ ------------------------------";: IF K=1 THEN PRINT #1, "  ---------": ELSE PRINT #1,
4170 PRINT #1,: IF DI=0 THEN 4190
4174 FOR I=1 TO DI: E$=STR$(I): PRINT #1, SPACE$(5-LEN(E$))+E$;".  "; LEFT$(D$(I),DJ-CA-1);: IF K=1 THEN PRINT #1, RIGHT$(D$(I),CA+1): ELSE PRINT #1,: ' Print Codes, Descriptions, (& Totals)
4176 NEXT I: L=L+4+DI: IF L>24 THEN L=24
4178 IF B$="CON" THEN LOCATE L,1: PRINT
4180 IF K=1 THEN PRINT #1,,,,"   =========": PRINT #1,,,"BALANCE ="," ";V$
4188 IF B$="CON" THEN PRINT:PRINT: ELSE PRINT #1,:PRINT #1,:PRINT#1,
4190 CLOSE #1: RETURN
4198 '
4200 ' PRINT OF CHECK DATA, + CUMUL
4214 ON ERROR GOTO 1996: LPRINT "        REPORT B:  CHECK ENTRIES (Up to";CN;")", DATE$: LPRINT: ON ERROR GOTO 0
4218 LPRINT "   NO.  Da/No  DESCRIPTION  (20)      $-AMOUNT  CODE  BALANCE,$"
4222 LPRINT "   ---  -----  --------------------   --------  ---   ---------"
4226 LPRINT SPC(7) YR: LPRINT
4228 IF CI=0 THEN 4262
4230 VT=0: L=0: A=0: LL=LEN(H$): IF LL>1 THEN E$="     ": IF LL<7 THEN MID$(E$,7-LL)=MID$(H$,2): A=VAL(E$): ELSE A=0
4232 IF A<1000 THEN L=A: GOTO 4238
4234 FOR I=CI TO 1 STEP -1: IF LEFT$(C$(I),5)=E$ THEN L=I: I=1
4236 NEXT I
4238  FOR I=1 TO CI: V=VAL(MID$(C$(I),6+CD,CA+1))
4240 IF CR<0 AND MID$(C$(I),CJ-3,1)<>K$ THEN VT=VT-V: ELSE VT=VT+V: ' Sign Reverse for Cumul s: If Deposits=+, Then Checks=-
4242 IF I<L THEN 4258
4246 V=VT:GOSUB 360
4250 E$=STR$(I): LPRINT SPACE$(5-LEN(E$))+E$;".  "; LEFT$(C$(I),5);"  ";MID$(C$(I),6,CD+CA+1);"  ";MID$(C$(I),CJ-3,3);" ";V$;" *"
4258  NEXT I: VB=VT: ' Reset VB
4262 LPRINT :LPRINT :LPRINT
4266 RETURN
4298 '
4800 CLS:SCREEN ,,1,0:CLS:PRINT "INITIALIZING"
4804 B$=CHR$(205):E$=CHR$(186):M$="     ": SCREEN ,,0,1: READ A$:PRINT:PRINT TAB(5);:COLOR 0,5:PRINT CHR$(201);STRING$(18,B$);:COLOR 7,0:PRINT A$;:COLOR 0,5:PRINT STRING$(18,B$);CHR$(187):COLOR 7,0
4810 FOR I=1 TO 12:READ A$:PRINT TAB(5);:COLOR 0,5:PRINT E$;A$;TAB(76);E$:COLOR 7,0:NEXT I
4820 PRINT TAB(5);:COLOR 0,5:PRINT CHR$(200);STRING$(70,B$);CHR$(188):COLOR 7,0
4830 READ A$:B$=MID$(A$,20,1):PRINT SPC(13);A$:PRINT:SCREEN ,,0,0
4890 RETURN
5000 ' INITIAL. & ARRAY & STRING DEF.
5004 CAAF=0: ' CAAF=Auto Accum Flag--None(=0), AAA(=1), Both AAA & AA1 (=2) --    ie. Both Accumul $-Entries and (RET)=$100
5006 CA=10: CD=20: ' CA=$-Amount Field Length(10),  CD=Descrip Field Length(20)
5010 CR=1: ' Sign Reverse for Cumul s (CR=-1 when K$ Code is used for Deposits)
5098 '
5100 '***CHECK ENTRIES, C$(CI) ***
5106  CI=0: ' CN=Max No. Entries(Below); CI=Last Entry
5110  CJ=5+CD+1+CA+3+1: ' Includes D/Code Presence(+) Field(1) @ 44.  See 5006 for CD & CA.
5114 '
5118 '  C$   Da/No  Description  $-Amount  Code Cumul
5122 '  No.  ----5  ---------20  ------10  --3+    10
5126 '
5130 '  1-   1-5    6-25         27-36     37-
5134 '   CI                                 39
5138 '                                       40
5142 '
5300 '***CODES & DESCRIP, D$(DI) ***
5310  DI=0: DJ=35+1+CA: ' DN=Max No. Entries; Last Entry; Char/Entry
5314  '
5318 '  D$   Code  Description   Total $
5322 '  No.  --3   ---------30   ------11
5326 '
5330 '  1-   1-3   6-35          36-46
5334 '   DI
5398 '
5400 '***STRING LENGTHS & DIM ***
5406  DN=60
5410  CN=(FRE(0)-DN*DJ-2800)/(CJ*1.09): ' Use Max Space Remaining
5418 DIM C$(CN), CS(CN), D$(DN)
5438 '
5490 RETURN
5498 '
5500 PRINT:PRINT"*** THE COPYRIGHT MESSAGE HAS BEEN MODIFIED, SO THE PROGRAM HAS BEEN HALTED.***": RETURN
```
{% endraw %}

## PC-CHECK.BAS

{% raw %}
```bas
1 ' PC-CHECK VERSION 1.0    HOLCOM INC.
5 KEY OFF:GOSUB 10050
6 FOR I=1 TO 10:KEY I,"":NEXT:DEF SEG=0:POKE (&H417),64
7 GOSUB 10500
10 CLS:LOCATE 12,21:PRINT"IF FILES ARE ON A DIFFERENT DISK THEN":LOCATE 13,19:PRINT"INSERT THAT DISK IN DRIVE A AT THIS TIME.":GOSUB 4008
14 OPTION BASE 1
15 CLEAR ,,1000:MAXCODES=681:MAXREC=100:MAXCHARGE=MAXREC\2:MAXEDIT=50
16 DIM C1$(MAXCODES-1),C2$(MAXCODES-1),E2(MAXEDIT),E3(MAXEDIT),E5(MAXEDIT),RN(MAXREC),RA#(MAXREC),BANKN(MAXCHARGE),BANKD(MAXCHARGE), BANKID$(MAXCHARGE),BANKA#(MAXCHARGE),SC$(MAXCODES-1)
20 Z1$=" CHECK#  DATE    DESCRIPTION          AMOUNT        BALANCE      CODE          "
21 Z2$=" ####  \      \  \          \ $$#########.## $$#########.##       \\ !"
22 Z3$=" ####  \      \  \                       \$$#########.##$$#########.##     \\ !"
23 Z4$=" CHECK#   DATE         DESCRIPTION             AMOUNT        BALANCE      CODE"
24 ZZ$=" ####  ###### \                         \! \\! #########.##  #########.## ! "
26 Z7$="                            CODE             DESCRIPTION                  "
27 Z8$="                             \\         \                       \
28 ZR$=" CHECK#                               AMOUNT                                   "
29 ZRC$="  TYPE   DATE    DESCRIPTION          AMOUNT                                   "
30 ZR1$=" ####                         $$#########.##                         "
31 ZR2$=" ####  \      \  \          \ $$#########.##
35 ZD$="$$#########.##"
36 ZDD$="$$#########.##  $$#########.##"
50 GOSUB 10300
100 CLOSE:CLS:COLOR 0,7:LOCATE 3,29:PRINT "      PC-CHECK      ":COLOR 15,0
110 LOCATE 6,37:PRINT"MENU"
115 LOCATE 8,24:PRINT"1. BEGIN NEW CHECK FILE"
120 LOCATE 9,24:PRINT"2. BEGIN NEW CODE FILE"
125 LOCATE 10,24:PRINT"3. EDIT FILE"
130 LOCATE 11,24:PRINT"4. DISK COMMANDS"
135 LOCATE 12,24:PRINT"5. LIST CHECK OR CODE FILE"
140 LOCATE 13,24:PRINT"6. SUMMARIZE CHECKS BY CODE"
145 LOCATE 14,24:PRINT"7. LIST FILES IN DIRECTORY"
150 LOCATE 15,24:PRINT"8. RECONCILE CHECK FILE"
160 LOCATE 16,24:PRINT"9. END"
170 LOCATE 18,24:COLOR 0,7:PRINT"ENTER NUMBER OF DESIRED OPTION";:COLOR 7,0:GOSUB 4000
175 ER=6:ON A GOSUB 8400,8400,7000,8500,8200,9700,1150,8800,435:GOTO 100
180 ER=1:GOSUB 8000:GOTO 100
200 CLS:LOCATE 7,28:COLOR 0,7:PRINT"    EDIT FILES MENU    ":COLOR 7,0
205 LOCATE 10,26:PRINT "1. ADD TO CHECK OR CODE FILE"
210 LOCATE 11,26:PRINT "2. EDIT CHECK OR CODE FILE"
220 LOCATE 12,26:PRINT "3. FIND CHECK ON FILE"
240 LOCATE 16,18:COLOR 0,7:PRINT"*ENTER NUMBER OF DESIRED OPTION (0 TO RETURN)":COLOR 7,0:GOSUB 4000:E=A
245 IF E<>INT(E) OR E<0 OR E>3 THEN ER=1:GOSUB 8000:GOTO 200
246 RETURN
255 CLS:LOCATE 12,30:PRINT"*ENTER NAME OF FILE":LOCATE 13,33:INPUT"(0 TO RETURN)";CF$
256 IF CF$="0" THEN RETURN
260 IF CF$="DIR" THEN GOSUB 1150:GOTO 255
261 IF BAKOK<>1 THEN IF RIGHT$(CF$,4)=".BAK" OR RIGHT$(CF$,4)=".COB" THEN ER=10:GOSUB 8000:GOTO 255
262 IF NEWNAME=1 THEN GOSUB 630:GOTO 270
265 IF RIGHT$(CF$,3)=".CO" THEN W=2 ELSE W=1
270 GOSUB 1200
275 IF NEWNAME=1 THEN IF EXIST=1 THEN ER=9:GOSUB 8000:GOTO 255
280 IF NEWNAME=0 THEN IF EXIST=0 THEN ER=3:GOSUB 8000:GOTO 255
285 RETURN
300 CLS:LOCATE 8,27:COLOR 0,7:PRINT"    DISK COMMANDS MENU    ":COLOR 7,0
305 LOCATE 10,26:PRINT"1. DELETE CHECK OR CODE FILE"
310 LOCATE 11,26:PRINT"2. RENAME CHECK OR CODE FILE"
320 LOCATE 12,26:PRINT"3. YEAR-END PROCESSING"
321 LOCATE 13,26:PRINT"4. SWITCH TO DIFFERENT DISK"
322 LOCATE 14,26:PRINT"5. BACKUP A FILE"
323 LOCATE 15,26:PRINT"6. MERGE TWO FILES"
325 LOCATE 17,18:COLOR 0,7:PRINT"*ENTER NUMBER OF DESIRED OPTION (0 TO RETURN)":COLOR 7,0:GOSUB 4000:D=A
330 IF D<0 OR D>6 THEN ER=1: GOSUB 8000:GOTO 300
331 RETURN
370 CLS:LOCATE 12,24:PRINT"ARE YOU SURE YOU WISH TO DELETE":LOCATE 13,20:PRINT"THE FILE <";CF$;"> FROM THIS DISK (Y/N)";:GOSUB 4010
371 IF A$<>"Y" AND A$<>"N" THEN ER=1:GOSUB 8000:GOTO 370
375 IF A$="N" THEN RETURN
380 KILL CF$:RETURN
435 CLS:A$=" ":LOCATE 13,23:PRINT"ARE YOU SURE YOU WANT TO END(Y/N)":LOCATE 20,1:COLOR 9,0:PRINT"*REMINDER";:COLOR 7,0:PRINT" DON'T FORGET TO":LOCATE 21,1:PRINT"BACKUP FILES OFTEN!":GOSUB 4010
438 IF A$<>"Y" AND A$<>"N" THEN ER=1:GOSUB 8000:GOTO 435
439 IF A$="N" THEN RETURN ELSE CLOSE:GOSUB 10300:SYSTEM
630 FOR J=1 TO LEN(CF$): J$=MID$(CF$,J,1):IF J$ = " " OR J$= "," OR J$="." OR J$="/" OR J$="?" OR J$="*" OR J$="+" OR J$="=" OR J$="[" OR J$="]" OR J$=";" OR J$=":" THEN CF$ =MID$(CF$,1,J-1): J=LEN (CF$)
635 NEXT
637 IF LEN(CF$)>8 THEN CF$=LEFT$(CF$,8)
639 IF W=2 THEN CF$=CF$+".CO"
641 RETURN
647 LOCATE 20,23: PRINT"YOUR FILE WILL BE NAMED <";CF$;">":GOSUB 4807:RETURN
680 CLS:LOCATE 13,30:INPUT "ENTER INITIAL BALANCE"; BB#
695 GOSUB 770: IF Q=1 THEN Q=0:GOTO 680
700 CLS:LOCATE 13,31:INPUT "ENTER INITIAL DATE" ;BD$
705 GOSUB 875:IF Q=1 THEN Q=0:GOTO 700
710 CLS:LOCATE 12,25:PRINT"INITIAL BALANCE IS ";:PRINT USING ZD$;BB#
720 LOCATE 13,25:PRINT "INITIAL DATE IS          ";BD$
725 GOSUB 4807:IF A$="N" GOTO 680
733 N=0:BD=BD:ID$="0000000000000000000000000":AM#=BB#:BB#=BB#:CE$="--":R$="*"
734 RETURN
735 OPEN"O",1,CF$:WRITE #1,N;BD;ID$;CE$;AM#;BB#;R$:CLOSE:RETURN
770 Q=0:BB$=STR$(INT(BB# *100 +0.4)/100):FOR J=1 TO LEN(BB$):IF MID$(BB$,J,1)="." THEN 810 ELSE NEXT
810 IF J>LEN(BB$) THEN BB$=BB$ + ".00":GOTO 840
820 IF J+1=LEN(BB$) THEN BB$ = BB$ + "0":GOTO 840
830 IF J+2< LEN(BB$) THEN BB$=LEFT$(BB$,J+2)
840 IF LEN(BB$) >11 THEN LOCATE 25,26:PRINT "AMOUNT TOO LARGE, TRY AGAIN";:Q=1:GOSUB 4008:FCL=2520.5:GOSUB 10000:RETURN
860 BB#=VAL(BB$):RETURN
875 IF LEN(BD$)<=7 AND MID$(BD$,2,1)="/" THEN BD$="0"+BD$
876 IF LEN(BD$)=7 AND MID$(BD$,5,1)="/" THEN BD$=LEFT$(BD$,3)+"0"+RIGHT$(BD$,4)
877 IF LEN(BD$)<6 THEN 925
879 Q=0:FOR J=1 TO 8:J$=MID$(BD$,J,1)
885 IF J=1 GOTO 895
887 IF J=3 OR J=6 GOTO 905
888 IF J=4 GOTO 910
889 IF J=2 OR J=5 OR J=7 OR J=8 GOTO 915
895 IF J$= "0" OR J$="1" GOTO 917
896 GOTO 925
905 IF J$="/" GOTO 917
906 GOTO 925
910 IF ASC(J$)>47 AND ASC(J$)<52 GOTO 917
911 GOTO 925
915 IF ASC(J$)>47 AND ASC(J$)<58 GOTO 917
916 GOTO 925
917 NEXT
918 IF VAL((MID$(BD$,1,1))+(MID$(BD$,2,1)))=>13 GOTO 925
919 IF VAL((MID$(BD$,4,1))+(MID$(BD$,5,1)))=>32 GOTO 925
920 IF LEN(BD$)=>9 GOTO 925
921 GOTO 930
925 BEEP:LOCATE 25,25:PRINT"DATE FORMAT ERROR (MM/DD/YY)";:Q=1:GOSUB 4008:FCL=2525.55 :GOSUB 10000:RETURN
930 BD=VAL(RIGHT$(BD$,2)+LEFT$(BD$,2)+MID$(BD$,4,2)):RETURN
950 BSLASH$=STR$(BD)
955 IF LEN(BSLASH$)=6 THEN BSLASH$="0"+RIGHT$(BSLASH$,5) ELSE BSLASH$=RIGHT$(BSLASH$,6)
960 BSLASH$=MID$(BSLASH$,3,2)+"/"+RIGHT$(BSLASH$,2)+"/"+LEFT$(BSLASH$,2)
965 RETURN
1150 CLS:LOCATE 13,21:PRINT"ENTER DRIVE THAT YOU WANT DIRECTORY OF":GOSUB 4010:IF ASC(A$)<65 OR ASC(A$)>90 THEN DRIVE$="A:" ELSE DRIVE$=A$+":"
1154 CLS:LOCATE 5,17:COLOR 0,7:PRINT" DIRECTORY OF CHECK AND CODE FILES ON DRIVE ";DRIVE$:COLOR 7,0
1155 ON ERROR GOTO 1185
1160 ER=1:FILES DRIVE$+"*."
1165 ER=2:FILES DRIVE$+"*.CO"
1170 ER=3:FILES DRIVE$+"*.BAK"
1175 ER=4:FILES DRIVE$+"*.COB"
1180 ON ERROR GOTO 0:GOSUB 4008:CLS:RETURN
1185 RESUME 1190
1190 ON ER GOTO 1165,1170,1175,1180
1200 ON ERROR GOTO 1206
1205 OPEN "I",1,CF$:CLOSE:EXIST=1:GOTO 1210
1206 RESUME 1207
1207 EXIST=0
1210 ON ERROR GOTO 0: RETURN
1500 CLS:LOCATE 12,22:PRINT "PRESS ANY KEY WHEN THE FORMATTED CHECK":LOCATE 13,18:PRINT "FILE DISK THAT YOU WISH TO USE IS IN DRIVE A":GOSUB 4000:GOSUB 10300:RETURN
1520 CLS:LOCATE 13,12:PRINT" ARE YOU USING ONE OR TWO DRIVES TO BACKUP YOUR FILE (1/2)":GOSUB 4000:D=A
1525 IF D<>1 AND D<>2 THEN ER=1: GOSUB 8000: GOTO 1520
1530 RETURN
1550 CLS:LOCATE 11,15: PRINT"ATTENTION **WHEN BACKING UP A FILE IT IS IMPORTANT": LOCATE 12,23:PRINT"TO FOLLOW THIS DIRECTION CORRECTLY"
1551 LOCATE 13,23:PRINT" PLACE YOUR ";:COLOR 9,0:PRINT "SOURCE";:COLOR 7,0:PRINT " DISK IN DRIVE ";:COLOR 9,0:PRINT"A";:COLOR 7,0
1552 LOCATE 14,22:PRINT"AND YOUR ";:COLOR 9,0:PRINT"DESTINATION ";:COLOR 7,0:PRINT"DISK IN DRIVE ";:COLOR 9,0:PRINT"B.":COLOR 7,0:GOSUB 4008:GOSUB 10400:RETURN
1600 CLS:LOCATE 12,19:PRINT"THIS OPTION WILL SEPARATE A FILE INTO TWO":LOCATE 13,11:PRINT"SEPARATE FILES.  THE CURRENT FILE WILL CONTAIN ALL ENTRIES":LOCATE 14,20:PRINT"UP TO AND INCLUDING THE DATE SPECIFIED."
1605 LOCATE 15,15:PRINT "THE NEW FILE WILL CONTAIN THE REST OF THE ENTRIES.":GOSUB 4008
1620 GOSUB 4600:IF CF$="0" THEN RETURN
1625 CLS:BD$=" ":LOCATE 12,15:INPUT"*AFTER WHAT DATE DO YOU WISH YOUR NEW FILE TO START";BD$:IF BD$="0" THEN CLS:RETURN
1630 GOSUB 875:IF Q=1 THEN Q=0:GOTO 1625
1635 H=BD
1640 GOSUB 5000:GOSUB 5060
1645 GOSUB 5030: IF F=1 THEN GOSUB 4950:NAME CF$ AS D$:GOSUB 4870: RETURN
1650 IF BD<=H THEN GOSUB 5085:B1#=BB#:GOTO 1645
1655 CLOSE 2:NAME "WORKFILE" AS D$
1660 GOSUB 5060
1665 TEMPN=N:N=0:TEMPID$=ID$:ID$="0000000000000000000000000":TEMPAM#=AM#:AM#=B1#:TEMPBB#=BB#:BB#=B1#:TEMPCE$=CE$:CE$="--":TEMPR$=R$:R$="*"
1667 GOSUB 5085
1670 N=TEMPN:ID$=TEMPID$:AM#=TEMPAM#:BB#=TEMPBB#:CE$=TEMPCE$:R$=TEMPR$:GOSUB 5085
1675 GOSUB 5030: IF F=1 THEN GOSUB 4950: RETURN ELSE GOSUB 5085:GOTO 1675
1700 CLS:LOCATE 12,19:PRINT"THIS OPTION WILL ALLOW YOU TO ADD ONE FILE":LOCATE 13,9:PRINT"TO THE END OF ANOTHER FILE.  THE FILES MUST BE SEQUENTIAL IN DATE"
1705 LOCATE 14,19:PRINT"AND THE ENDING BALANCE OF THE FIRST FILE MUST MATCH":LOCATE 15,23:PRINT"THE BEGINING BALANCE OF THE SECOND"
1710 GOSUB 4807:IF A$="N" THEN RETURN
1715 CLS:CF$=" ":LOCATE 12,24:PRINT"ENTER NAME OF FIRST CHECK FILE":LOCATE 13,33:INPUT"(0 TO RETURN)";CF$
1720 GOSUB 256:IF CF$="0" THEN RETURN
1722 IF RIGHT$(CF$,3)=".CO" THEN ER=2:GOSUB 8000:GOTO 1715
1725 FIRST$=CF$
1730 CLS:CF$=" ":LOCATE 12,23:PRINT"ENTER NAME OF SECOND CHECK FILE":LOCATE 13,33:INPUT"(0 TO RETURN)";CF$
1735 GOSUB 256:IF CF$="0" THEN RETURN
1737 IF RIGHT$(CF$,3)=".CO" THEN ER=2:GOSUB 8000:GOTO 1730
1740 SECOND$=CF$:IF FIRST$=SECOND$ THEN LOCATE 25,25:COLOR 0,7:BEEP:PRINT"THESE FILE NAMES ARE IDENTICAL";:COLOR 7,0:GOSUB 4008:GOTO 1715
1745 CLS:CF$=" ":LOCATE 12,24:PRINT"ENTER NAME OF NEW MERGED FILE":LOCATE 13,33:INPUT"(0 TO RETURN)";CF$
1750 NEWNAME=1:GOSUB 256:NEWNAME=0:IF CF$="0" THEN RETURN
1752 GOSUB 647:IF A$="N" GOTO 1745
1755 THIRD$=CF$
1760 CF$=FIRST$:GOSUB 5000
1765 CF$="THIRD":GOSUB 5060
1767 B1#=0
1770 GOSUB 5030:IF F=0 THEN GOSUB 4795:B1#=BB#:GOSUB 5085:GOTO 1770
1775 CLOSE 1:CF$=SECOND$:GOSUB 5000
1780 GOSUB 5030:IF F=1 GOTO 1790
1785 GOSUB 5030:IF F=0 THEN GOSUB 4795:B1#=BB#:GOSUB 5085:GOTO 1785
1790 CLOSE:NAME "WORKFILE" AS THIRD$:KILL "CATALOG":RETURN
2000 SORTX=NUMOFCODES
2005 FOR I=1 TO NUMOFCODES
2010 IF SC$(I)="--" THEN SWAP SC$(I),SC$(NUMOFCODES):SORTX=SORTX-1 ELSE NEXT I
2015 FOR I=1 TO SORTX-1
2020 SMALL=ASC(SC$(I))*100+ASC(RIGHT$(SC$(I),1)):IINDEX=I
2025 FOR II=I+1 TO SORTX
2030 COMP=ASC(SC$(II))*100+ASC(RIGHT$(SC$(II),1))
2035 IF COMP<SMALL THEN SMALL=COMP:IINDEX=II
2040 NEXT II
2045 SWAP SC$(I),SC$(IINDEX)
2050 NEXT I
2055 RETURN
2100 STP=14: IF STP+LAST>NUMOFCODES THEN STP=NUMOFCODES-LAST:IF STP<1 THEN I=1:X=45:IF S=2 THEN X=47:GOTO 2170 ELSE GOTO 2125
2105 FOR I=1 TO STP
2110 N=ASC(SC$(I+LAST))
2115 IF N=X OR N=X+1 THEN FILE$="SORT"+SC$(I+LAST) ELSE GOTO 2125
2120 Y=I:GOSUB 2215
2123 NEXT I
2125 IF I=1 THEN FILE$=CHR$(X):GOSUB 2250:X=X+2:GOTO 2170
2130 Y=I:FILE$=CHR$(X)
2133 GOSUB 2200
2135 Y=I:GOSUB 2230: IF F=1 THEN CLOSE:GOTO 2170
2145 FOR INDEX=1 TO I-1
2150 IF CE$=SC$(INDEX+LAST) THEN FILE$="SORT"+CE$:Y=INDEX:GOSUB 2240: GOTO 2135
2155 NEXT INDEX
2160 GOTO 2135
2170 LAST=LAST+I-1:IF X=91 THEN X=45
2175 IF X=47 THEN CLOSE :IF S=2 THEN FILE$=CHR$(ASC(SC$(1))):GOSUB 2250:RETURN ELSE RETURN
2180 GOTO 2100
2185 XX=(X-65)/2
2187 FOR I=1 TO XX
2190 FILE$=CHR$(63+2*I)
2192 GOSUB 2250
2195 NEXT
2197 RETURN
2200 FILE$="B:"+FILE$:OPEN "I",#Y,FILE$
2210 RETURN
2215 FILE$="B:"+FILE$:OPEN "O",#Y,FILE$:FILE$=RIGHT$(FILE$,(LEN(FILE$)-2))
2225 RETURN
2230 F=0:IF EOF(Y) THEN F=1:RETURN
2235 INPUT #Y,N,BD,ID$,CE$,AM#,BB#,R$
2237 RETURN
2240 WRITE #Y,N;BD;ID$;CE$;AM#;BB#;R$
2247 RETURN
2250 IF LEFT$(FILE$,2)<>"B:" THEN FILE$="B:"+FILE$
2260 KILL FILE$: RETURN
2300 CLS: LOCATE 8,35:COLOR 0,7:PRINT"    SUMMARY MENU    ":COLOR 7,0
2305 LOCATE 10,25:PRINT"1. SUMMARIZE ONE SPECIFIC CODE"
2310 LOCATE 11,25:PRINT"2. SUMMARIZE ONE GENERAL CODE"
2315 LOCATE 12,25:PRINT"3. SUMMARIZE ALL CODES"
2320 LOCATE 14,18:COLOR 0,7:PRINT"*ENTER NUMBER OF DESIRED OPTION (0 TO RETURN)":COLOR 7,0:GOSUB 4000:S=A
2325 IF S<>INT(S) OR S<0 OR S>3 THEN ER=1:GOSUB 8000
2330 RETURN
2350 CLS:IF FCODE$="" THEN LOCATE 12,30:PRINT"IS THERE A CODE FILE":LOCATE 13,23:PRINT"TO ACCOMPANY THIS CHECK FILE (Y/N)":LOCATE 14,23:PRINT"ENTER 'Y' TO ENTER CODE FILE NAME" ELSE RETURN
2355 GOSUB 4010: IF A$="N" THEN FCODE$="NONE":RETURN
2360 IF A$<>"Y" THEN ER=1:GOSUB 8000: GOTO 2350
2365 RETURN
2370 CLS:LOCATE 13,20:PRINT"CODE FILES MUST HAVE THE EXTENSION '.CO'":GOSUB 4008:RETURN
2380 CLS:BEEP:LOCATE 12,27:PRINT"YOU MUST ENTER THE NAME OF":LOCATE 13,25:PRINT"THE CHECK FILE TO BE USED FIRST"
2385 GOSUB 4008:RETURN
2390 CLS:LOCATE 13,21:PRINT"THERE ARE NO ENTRIES WITH THE CODE ";FILE$:LOCATE 14,34:PRINT"IN THIS FILE":GOSUB 4008:RETURN
2400 CLS:LOCATE 12,25:PRINT "ENTER THE SPECIFIC TWO LETTER":LOCATE 13,24:INPUT"CODE THAT YOU WISH TO SUMMARIZE";FILE$
2405 IF LEN(FILE$)=2 GOTO 2410
2407 ER=11:GOSUB 8000:GOTO 2400
2410 FOR J=1 TO 2: JJ=ASC(MID$(FILE$,J,1)): IF (JJ<65 OR JJ>90) AND FILE$<>"--" GOTO 2407 ELSE NEXT
2412 SPEC$=FILE$:FILE$="SORT"+FILE$
2415 RETURN
2420 CLS:LOCATE 12,26:PRINT"ENTER THE GENERAL ONE LETTER":LOCATE 13,24:INPUT"CODE THAT YOU WISH TO SUMMARIZE";FILE$
2425 IF LEN(FILE$)<>1 GOTO 2440
2430 IF (ASC(FILE$)<65 OR ASC(FILE$)>90) AND FILE$ <> "--" GOTO 2440
2435 RETURN
2440 BEEP:COLOR 0,7:LOCATE 20,19:PRINT "CODE MUST BE A SINGLE CAPITAL LETTER OR A -":COLOR 7,0:GOSUB 4008:GOTO 2420
2480 CLS: LOCATE 12,28:PRINT"MAKE SURE THAT THERE IS AN":LOCATE 13,24:PRINT"EMPTY FORMATTED DISK IN DRIVE B":GOSUB 4008
2485 ON ERROR GOTO 2497
2490 OPEN "O",#1,"B:FILE":CLOSE
2492 KILL "B:FILE"
2495 ON ERROR GOTO 0:RETURN
2497 RESUME 2480
2500 CLS:LOCATE 12,22:PRINT"PLEASE READY PRINTER AND ALIGN PAPER":LOCATE 13,28:GOSUB 4008:RETURN
2550 A$="N":IF NUMOFCODES=0 THEN RETURN
2555 FOR I=1 TO NUMOFCODES
2560 IF CE$=SC$(I) THEN A$="Y":RETURN
2565 NEXT:RETURN
2600 NUMOFCODES=NUMOFCODES+1:SC$(NUMOFCODES)=CE$:RETURN
2620 IF S=1 THEN SUBHEAD$="THE SPECIFIC CODE "+SPEC$:GOTO 2635
2625 IF S=2 THEN SUBHEAD$="THE GENERAL CODE "+GEN$: GOTO 2635
2630 SUBHEAD$="ALL CODES"
2635 HEAD$="PC-CHECK SUMMARY OF "+SUBHEAD$+" IN THE CHECK FILE "+CF$
2639 HEAD2$=" "
2640 IF H3<>1 THEN BD=H:GOSUB 950: HEAD2$="FROM "+BSLASH$
2645 IF H4<>1 THEN BD=HE:GOSUB 950: HEAD2$=HEAD2$+" TO "+BSLASH$
2649 CLS:PP=2
2650 GOSUB 2670:LOCATE PP,P:COLOR 0,7:PRINT HEAD$: COLOR 7,0:IF L$="Y" THEN LPRINT SPACE$(P)+HEAD$
2655 IF HEAD2$<>" " THEN HEAD$=HEAD2$:HEAD2$=" ":PP=3:GOTO 2650
2660 IF L$="Y" THEN LPRINT:LPRINT:
2665 RETURN
2670 P=((80-LEN(HEAD$))/2):P=INT(P):RETURN
2700 HEAD$=" ":IF FCODE$="NONE" GOTO 2715
2705 FOR II=1 TO CN
2710 IF C1$(II)=SC$(I) THEN HEAD$="     "+C2$(II) ELSE NEXT
2715 HEAD$="SUMMARY OF "+SC$(I)+HEAD$
2720 PP=5
2730 GOSUB 2650
2735 PRINT:PRINT Z1$: IF L$="Y" THEN LPRINT:LPRINT Z4$
2740 RETURN
2750 IF L$="Y" THEN LPRINT
2751 HEAD$="TOTAL CHECKS"+SPACE$(10)+"$"+STR$(TCK#)+SPACE$(10)+"TOTAL DEPOSITS"+SPACE$(10)+"$"+STR$(TD#)
2752 HEAD3$="TOTAL ATW'S"+SPACE$(10)+"$"+STR$(TA#)+SPACE$(10)+"TOTAL CHARGES"+SPACE$(10)+"$"+STR$(TC#)
2755 PRINT:PRINT:PP=23:GOSUB 2650:PRINT:HEAD$=HEAD3$:GOSUB 2650
2760 IF L$="N" THEN GOSUB 4008
2765 TOTALCK#=TOTALCK#+TCK#: TOTALD#=TOTALD#+TD#:TOTALC#=TOTALC#+TC#: TOTALA#=TOTALA#+TA#
2770 RETURN
2780 TCK#=TOTALCK#:TA#=TOTALA#:TD#=TOTALD#:TC#=TOTALC#:GOTO 2750
2785 IF N=0 THEN TD#=TD#+AM#:RETURN
2790 IF N=-1 THEN IF LEFT$(ID$,4)="ATW " THEN TA#=TA#+AM#:RETURN ELSE TC#=TC#+AM#:RETURN
2795 TCK#=TCK#+AM#:RETURN
4000 A$=INKEY$:IF A$="" GOTO 4000 ELSE IF ASC(A$)=27 GOTO 4000 ELSE A=VAL(A$):RETURN
4008 LOCATE 24,23:COLOR 0,7:PRINT"****PRESS ANY KEY TO CONTINUE****";:COLOR 7,0
4010 A$=INKEY$: IF A$="" GOTO 4010 ELSE IF ASC(A$)=27 GOTO 4010 ELSE FCL=2423.34:GOSUB 10000:RETURN
4050 IF CE$="--" THEN INDEX=MAXCODES ELSE INDEX=((ASC(LEFT$(CE$,1))-65)*26)+(ASC(RIGHT$(CE$,1))-64)
4055 RETURN
4100 I%=0:C1$(I%)="CODE":C2$(I%)="DEFINE"
4105 OPEN"O",1,CF$
4110 CN=0 : PRINT#1,CN
4115 WRITE #1,C1$(I%);C2$(I%)
4120 CLOSE:RETURN
4150 OPEN"I",1,CF$
4155 INPUT#1,CN:FOR I%=0 TO CN:INPUT#1,C1$(I%),C2$(I%):NEXT:CLOSE:RETURN
4170 CLS:PRINT:COLOR 0,7:PRINT Z7$:COLOR 7,0:IF L$="Y" THEN LPRINT Z7$
4175 FOR I%=1 TO CN
4180 PRINT USING Z8$;C1$(I%),C2$(I%)
4185 IF L$="Y" THEN LPRINT USING Z8$;C1$(I%),C2$(I%)
4190 IF L$="N" THEN IF I%/10=INT(I%/10) THEN COLOR 15:BEEP:LOCATE ,25:PRINT"*PRESS ANY KEY FOR MORE ENTRIES":COLOR 7,0 ELSE GOTO 4195 ELSE GOTO 4195
4192 A$=INKEY$:IF A$="" GOTO 4192 ELSE IF A$="0" THEN RETURN
4195 NEXT:COLOR 15:BEEP:FOR TIME=1 TO 250:NEXT:BEEP:LOCATE 25,28:PRINT"PRESS ANY KEY TO RETURN";:COLOR 7,0:GOSUB 4010:RETURN
4246 ER=0:IF I%=>MAXCODES THEN ER=8:GOSUB 8000
4247 RETURN
4250 CLS:LOCATE 13,20:INPUT"ENTER TWO LETTER CODE (END TO RETURN)";C1$(I%)
4251 IF C1$(I%)="END" THEN RETURN
4252 IF LEN(C1$(I%))>2 THEN ER=4:GOSUB 8000:GOTO 4250
4253 FOR J=1 TO 2:IF MID$(C1$(I%),J,1)="," THEN ER=5:GOSUB 8000:GOTO 4250
4254 NEXT
4255 LOCATE 15,27:INPUT"ENTER DEFINITION OF CODE";C2$(I%)
4257 IF LEN(C2$(I%))>25 THEN ER=4:GOSUB 8000:GOTO 4255
4258 FOR J=1 TO LEN(C2$(I%)):IF MID$(C2$(I%),J,1)="," THEN ER=5:GOSUB 8000:GOTO 4255
4259 NEXT:RETURN
4269 CN=CN+1:RETURN
4272 I%=I%+1:GOSUB 4246:RETURN
4275 OPEN"O",1,CF$
4280 PRINT#1,CN
4285 FOR I%=0 TO CN
4290 WRITE #1,C1$(I%);C2$(I%)
4295 NEXT:CLOSE:RETURN
4335 CLS: LOCATE 13,16:INPUT"*ENTER CODE THAT YOU WISH TO DELETE FROM THE FILE";C$:RETURN
4345 LOCATE 15,21:PRINT"THIS IS THE CODE THAT YOU WILL DELETE":RETURN
4353 OPEN "O",1,CF$
4355 CN=CN-1:PRINT#1,CN
4360 I=I-1:FOR I%=0 TO I
4363 WRITE #1,C1$(I%);C2$(I%):NEXT
4365 I=I%+1:FOR I%=I TO CN+1
4368 WRITE #1,C1$(I%);C2$(I%):NEXT:CLOSE
4370 C$=" ":RETURN
4435 CLS:LOCATE 13,16:INPUT"*ENTER THE CURRENT CODE THAT YOU WISH TO CHANGE";C$:RETURN
4450 CLS:LOCATE 10,1:PRINT Z7$:LOCATE 12,1:PRINT USING Z8$;C1$(I),C2$(I):RETURN
4455 LOCATE 15,21:PRINT"THIS IS THE CODE THAT YOU WILL CHANGE":RETURN
4535 CLS:LOCATE 13,20:INPUT"*ENTER CODE WHICH NEW CODE IS TO PRECEDE";C$:RETURN
4545 LOCATE 15,16:PRINT"THIS IS THE CODE THAT YOUR NEW CODE IS TO PRECEDE":RETURN
4550 CLS:LOCATE 13,32:COLOR 31:PRINT "****FINDING EDIT":COLOR 7,0:FOR I%=I TO CN
4555 IF C$=C1$(I%) THEN I=I%:RETURN
4560 NEXT
4565 LOCATE 25,21:COLOR 0,7:BEEP:PRINT"THIS CODE DOES NOT EXIST ON THIS FILE";:COLOR 7,0:GOSUB 4008:N=1:RETURN
4570 FOR I%=CN+1 TO I+1 STEP -1:C1$(I%)=C1$(I%-1):C2$(I%)=C2$(I%-1):NEXT:I%=I:CN=CN+1:RETURN
4600 D$=CF$:IF RIGHT$(CF$,4)=".COB" THEN W=2
4605 CLS:CF$=" ":LOCATE 12,23:PRINT"*ENTER THE NEW NAME THAT YOU WISH":LOCATE 13,20:INPUT"TO ASSIGN TO YOUR FILE (0 TO RETURN)";CF$
4620 IF CF$="0" THEN RETURN
4622 IF CF$="DIR" THEN GOSUB 1150:GOTO 4605
4625 BAK$="":IF RIGHT$(CF$,4)=".BAK" OR RIGHT$(CF$,4)=".COB" THEN BAK$=RIGHT$(CF$,4)
4626 IF W=1 AND BAK$=".COB" THEN ER=12:GOSUB 8000:GOTO 4605
4627 IF W=2 AND BAK$=".BAK" THEN ER=12:GOSUB 8000:GOTO 4605
4630 GOSUB 630:IF W=2 AND BAK$=".COB" THEN CF$=LEFT$(CF$,(LEN(CF$)-3))
4632 CF$=CF$+BAK$:GOSUB 1200
4635 IF EXIST=1 THEN ER=9:GOSUB 8000:GOTO 4605
4640 GOSUB 647:IF A$="N" GOTO 4605
4650 NAME D$ AS CF$:RETURN
4730 FCL=2201.79:GOSUB 10000:LOCATE 24,79:PRINT:COLOR 0,7:LOCATE 22,1:PRINT Z1$:COLOR 7,0
4733 LOCATE 15,24:PRINT"* ENTER CHECK NUMBER OF NEW ENTRY":LOCATE 16,9:PRINT"(D FOR DEPOSIT OR AUTOMATIC DEPOSIT, A FOR AUTOMATIC WITHDRAWAL,":LOCATE 17,23:PRINT"C FOR OTHER CHARGE, END TO RETURN)"
4735 LOCATE 23,2:INPUT"",N$:IF N$="" THEN IF N<>-1 GOTO 4745 ELSE GOTO 4735
4736 IF N$="END" THEN N$="0":RETURN
4737 IF N$="D" THEN N=0:GOTO 4745
4738 IF N$="C" OR N$="A" THEN N=-1:GOTO 4745
4740 N=VAL(N$):NSTR$=STR$(N):IF (RIGHT$(NSTR$,LEN(NSTR$)-1)<>N$) OR (INT(N)<>N) OR (N>9999) THEN COLOR 0,7:BEEP:LOCATE 25,10:PRINT"CHECK NUMBER MUST BE INTEGER <9999. PRESS RETURN TO CONTINUE";:COLOR 7,0 ELSE GOTO 4745
4742 GOSUB 4010:FCL=2510.61:GOSUB 10000:FCL=2302.06:GOSUB 10000:GOTO 4735
4745 FOR I=15 TO 17:FCL=I*100+1.78:GOSUB 10000:NEXT:LOCATE 23,2:PRINT N
4750 Q=0:LOCATE 23,8:INPUT"",TEMPBD$:IF TEMPBD$="" GOTO 4760 ELSE BD$=TEMPBD$:GOSUB 875
4755 IF Q=1 THEN FCL=2308.1:GOSUB 10000:GOTO 4750 ELSE GOSUB 950: LOCATE 23,8:PRINT BSLASH$
4760 LOCATE 23,18: LINE INPUT"",TEMPID$:IF TEMPID$="" GOTO 4770 ELSE ID$=TEMPID$
4765 IF LEN(ID$)>25 THEN ER=4: GOSUB 8000:FCL=2318+(LEN(ID$)/100):GOSUB 10000:GOTO 4760
4767 FOR J=1 TO LEN(ID$): J$=MID$(ID$,J,1):IF J$="," THEN ER=5: GOSUB 8000:FCL=2318.25:GOSUB 10000: GOTO 4760 ELSE NEXT
4769 IF N$="A" THEN IF LEN(ID$)>21 THEN ID$="ATW "+LEFT$(ID$,21) ELSE ID$="ATW "+ID$
4770 FCL=2318+((LEN(ID$)+1)/100):GOSUB 10000:LOCATE 23,18:PRINT LEFT$(ID$,12);
4775 LOCATE 23,34:LINE INPUT"",TEMPAM$:IF TEMPAM$<>"" THEN AM#=VAL(TEMPAM$):FOR J=1 TO LEN(TEMPAM$):JJ=ASC(MID$(TEMPAM$,J,1)):IF (JJ<48 OR JJ>57) AND JJ<>46 THEN ER=1:GOSUB 8000:FCL=2334.13:GOSUB 10000:GOTO 4775 ELSE NEXT
4776 BB#=AM#:GOSUB 770:IF Q=1 THEN Q=0:FCL=2334.13:GOSUB 10000:GOTO 4775 ELSE AM#=BB#
4777 GOSUB 4795:LOCATE 23,31:PRINT USING ZDD$;AM#,BB#
4780 LOCATE 23,67:LINE INPUT"",TEMPCE$:IF TEMPCE$="" GOTO 4787 ELSE CE$=TEMPCE$
4782 IF LEN(CE$)<>2 THEN ER=11:GOSUB 8000:FCL=2367+(LEN(CE$)/100):GOSUB 10000:GOTO 4780
4785 FOR J=1 TO 2:JJ=ASC(MID$(CE$,J,1)):IF JJ<65 OR JJ>90 THEN ER=11:GOSUB 8000:FCL=2367.02:GOSUB 10000:GOTO 4780 ELSE NEXT
4787 IF R<>1 THEN R$="O" ELSE LOCATE 15,21:PRINT"HAS THIS CHECK BEEN RECONCILED? (Y/N)":GOSUB 4010:FCL=1520.5:GOSUB 10000:IF A$="Y" THEN R$="*" ELSE IF A$="N" THEN R$="O"
4788 LOCATE 23,70:PRINT R$
4790 GOSUB 4807:IF A$="N" GOTO 4733 ELSE LOCATE 11,1:PRINT USING Z2$;N,BSLASH$,ID$,AM#,BB#,CE$,R$:RETURN
4795 IF N=0 THEN BB#=B1#+AM# ELSE BB#=B1#-AM#
4796 RETURN
4807 LOCATE 25,23:A$=" ":PRINT"PRESS 'Y' IF OKAY. IF NOT PRESS 'N'";:GOSUB 4010
4810 IF A$<>"Y" AND A$<>"N" THEN ER=1:GOSUB 8000:GOTO 4807
4811 FCL=2501.78:GOSUB 10000:RETURN
4820 CLS:BD$=" ":LOCATE 12,22:PRINT"*TO WHAT DATE DO YOU WISH TO CONTINUE":LOCATE 13,32:INPUT"(RETURN FOR END)";BD$:IF BD$="0" OR BD$="" THEN CLS:IF BD$="" THEN BD$="1":RETURN ELSE RETURN
4830 GOSUB 875:IF Q=1 THEN Q=0:GOTO 4820
4835 HE=BD:CLS:RETURN
4850 CLS:BD$=" ":LOCATE 12,23:PRINT"*FROM WHAT DATE DO YOU WISH TO BEGIN":LOCATE 13,29:INPUT"(RETURN FOR BEGINNING)";BD$:IF BD$="0" OR BD$="" THEN CLS:IF BD$="" THEN BD$="1":RETURN ELSE RETURN
4858 GOSUB 875 :IF Q=1 THEN Q=0:GOTO 4850
4859 H=BD:CLS:RETURN
4860 CLS:LOCATE 13,22:PRINT"DO YOU WISH TO LIST THE FILE (Y/N/0)":GOSUB 4010
4861 IF A$="0" THEN RETURN
4862 IF A$<>"Y" AND A$<>"N" THEN ER=1:GOSUB 8000:GOTO 4860
4863 RETURN
4865 CLS:LOCATE 13,21:PRINT"DO YOU WISH TO USE LINE PRINTER (Y/N)":GOSUB 4010:L$=A$
4866 IF L$<>"Y" AND L$<>"N" THEN ER=1:GOSUB 8000:GOTO 4865
4867 IF L$="Y" THEN GOSUB 2500
4868 RETURN
4870 IF F=1 THEN LOCATE 25,16:BEEP:COLOR 0,7:PRINT" THIS FILE DOES NOT GO UP TO THE DATE REQUESTED.";:COLOR 7,0:GOSUB 4008:FCL=2516.49:GOSUB 10000:CLOSE:RETURN
4874 IF H>BD THEN GOSUB 5030:H3=0:GOTO 4870 ELSE RETURN
4880 IF BD>HE THEN A$="Y" ELSE A$="N"
4881 RETURN
4890 Q=0:CLS:PRINT Z1$:IF L$="Y" THEN LPRINT Z4$
4891 RETURN
4895 A$=" ":IF H3=1 THEN GOSUB 950:PRINT USING "       \      \                              $$#########.##";BSLASH$,BB#:IF L$="Y" THEN LPRINT USING"       \      \                                         $$#########.##";BSLASH$,BB#
4896 IF H3=1 THEN H3=0:RETURN
4897 GOSUB 950:PRINT USING Z2$;N,BSLASH$,ID$,AM#,BB#,CE$,R$;:Q=Q+1:IF L$="Y" THEN LPRINT USING Z3$;N,BSLASH$,ID$,AM#,BB#,CE$,R$
4898 IF BB#<0 THEN LOCATE  ,46:COLOR 0,7:PRINT USING ZD$;BB#;:COLOR 7,0:PRINT ELSE PRINT
4899 IF L$="N" THEN IF Q/10=INT(Q/10) THEN COLOR 15:BEEP:LOCATE ,25:PRINT"*PRESS ANY KEY FOR MORE ENTRIES":COLOR 7,0 ELSE RETURN ELSE RETURN
4900 A$=INKEY$:IF A$="" GOTO 4900 ELSE RETURN
4915 COLOR 15:BEEP:FOR TIME=1 TO 250:NEXT:BEEP:LOCATE 25,28:PRINT"PRESS ANY KEY TO RETURN";:COLOR 7,0:GOSUB 4010
4920 CLS:CLOSE:RETURN
4950 CLOSE:NAME CF$ AS "OLDFILE"
4955 NAME "WORKFILE" AS CF$: KILL "CATALOG"
4960 KILL "OLDFILE"
4965 RETURN
5000 OPEN"I",1,CF$:RETURN
5030 F=0:IF EOF(1) THEN F=1:RETURN
5035 INPUT#1,N,BD,ID$,CE$,AM#,BB#,R$
5040 RETURN
5060 OPEN"O",2,"CATALOG":WRITE#2,CF$:CLOSE 2
5065 OPEN"O",2,"WORKFILE"
5070 RETURN
5085 WRITE #2,N;BD;ID$;CE$;AM#;BB#;R$
5090 RETURN
5100 IF EVAL$="" OR EVAL$="D" OR EVAL$="I" THEN EVAL=0 ELSE IF EVAL$="C" OR EVAL$="A" THEN EVAL=-1 ELSE EVAL=VAL(EVAL$)
5105 RETURN
5110 LOCATE 12,22:PRINT"ENTER THE CHECK NUMBER OF THE ENTRY":LOCATE 13,24:INPUT"WHICH THE NEW ENTRY IS TO FOLLOW";EVAL$:GOSUB 5100:E2(I%)=EVAL:E3(I%)=-2:E5(I%)=-2:E9=E2(I%):RETURN
5115 LOCATE 12,22:PRINT"ENTER THE CHECK NUMBER OF THE ENTRY":LOCATE 13,28:INPUT"THAT YOU WISH TO DELETE";EVAL$:GOSUB 5100:E3(I%)=EVAL:E2(I%)=-2:E5(I%)=-2:E9=E3(I%):RETURN
5120 LOCATE 12,22:PRINT"ENTER THE CHECK NUMBER OF THE ENTRY":LOCATE 13,28:INPUT"THAT YOU WISH TO CHANGE";EVAL$:GOSUB 5100:E5(I%)=EVAL:E2(I%)=-2:E3(I%)=-2:E9=E5(I%):RETURN
5125 LOCATE 16,26:PRINT"ENTER THE DATE OF THE ENTRY":LOCATE 17,24:INPUT"WHICH THE NEW ENTRY IS TO FOLLOW";BD$:GOSUB 875:IF Q=1 THEN Q=0:GOTO 5125
5130 E2(I%)=BD:RETURN
5135 LOCATE 16,26:PRINT"ENTER THE DATE OF THE ENTRY":LOCATE 17,28:INPUT"THAT YOU WISH TO DELETE";BD$:GOSUB 875:IF Q=1 THEN Q=0:GOTO 5135
5137 E3(I%)=BD:RETURN
5140 LOCATE 16,26:PRINT"ENTER THE DATE OF THE ENTRY":LOCATE 17,28:INPUT"THAT YOU WISH TO CHANGE";BD$:GOSUB 875:IF Q=1 THEN Q=0:GOTO 5140
5142 E5(I%)=BD:RETURN
5145 CLS:LOCATE 13,15:PRINT"DO YOU WISH TO EDIT ANY /ANY OTHER ENTRIES (Y/N)":GOSUB 4010
5147 IF A$<>"Y" AND A$<>"N" THEN ER=1:GOSUB 8000:GOTO 5145
5150 IF A$="N" THEN EI=I%:CLS:LOCATE 13,31:COLOR 31:PRINT"****FINDING EDITS":COLOR 7,0:RETURN
5152 IF I%=MAXEDIT THEN BEEP:LOCATE 25,14:PRINT "NUMBER OF EDITS HAS EXCEEDED NUMBER OF EDITS ALLOWED";:GOSUB 4008:A$="N":GOTO 5150
5155 CLS:LOCATE 11,35:PRINT"1. INSERT":LOCATE 12,35:PRINT"2. DELETE":LOCATE 13,35:PRINT"3. CHANGE":LOCATE 15,25:COLOR 0,7:PRINT "ENTER NUMBER OF DESIRED OPTION":COLOR 7,0:GOSUB 4000:E9=A
5156 IF E9<1 OR E9>3 THEN ER=1:GOSUB 8000:GOTO 5155
5157 IF E9=1 THEN E=2
5158 IF E9=2 THEN E=3
5159 IF E9=3 THEN E=5
5160 I%=I%+1:A$="Y":RETURN
5170 FOR I%=1 TO EI
5175 E9=0:IF N=E2(I%) OR (BD=E2(I%) AND (N=-1 OR N=0)) OR N=E3(I%) OR (BD=E3(I%)AND (N=-1 OR N=0)) OR N=E5(I%) OR (BD=E5(I%) AND (N=-1 OR N=0)) THEN E9=1:RETURN
5177 NEXT:RETURN
5190 CLS:GOSUB 950:LOCATE 24,1:PRINT USING Z2$;N,BSLASH$,ID$,AM#,BB#,CE$,R$;
5195 IF E3(I%)<>-2 GOTO 5215
5196 IF E5(I%)<>-2 GOTO 5225
5200 LOCATE 13,5:PRINT"IS THIS THE ENTRY THAT YOU WISH YOUR NEW ENTRY/ENTRIES TO FOLLOW (Y/N)":GOSUB 4010:E=1:GOTO 5227
5215 LOCATE 13,16:PRINT"IS THIS THE ENTRY THAT YOU WISH TO DELETE (Y/N)":GOSUB 4010:E=2:GOTO 5227
5225 LOCATE 13,16:PRINT"IS THIS THE ENTRY THAT YOU WISH TO CHANGE (Y/N)":E=3
5226 A$=INKEY$:IF A$="" GOTO 5226 ELSE FCL=1316.55:GOSUB 10000
5227 IF A$<>"Y" AND A$<>"N" THEN ER=1:GOSUB 8000:GOTO 5195
5230 RETURN
5300 CLS:LOCATE 6,32:COLOR 0,7:PRINT"FINDING A CHECK";
5305 LOCATE 8,23:PRINT"DO YOU WISH TO FIND YOUR CHECK BY";:COLOR 7,0
5306 LOCATE 10,33:PRINT"1. CHECK NUMBER"
5307 LOCATE 11,33:PRINT"2. DATE"
5308 LOCATE 12,33:PRINT"3. DESCRIPTION"
5309 LOCATE 13,33:PRINT"4. AMOUNT"
5310 LOCATE 14,33:PRINT"5. BALANCE"
5311 LOCATE 15,33:PRINT"6. CODE"
5315 LOCATE 17,17:COLOR 0,7:PRINT"ENTER NUMBER OF DESIRED OPTION (0 TO RETURN)";:COLOR 7,0:GOSUB 4000:FI=A
5320 IF FI<0 OR FI>6 THEN ER=1:GOSUB 8000:GOTO 5300
5321 RETURN
5325 CLS:LOCATE 13,13:INPUT"WHAT IS THE CHECK NUMBER OF THE CHECK YOU WISH TO FIND";F1:RETURN
5330 CLS:LOCATE 13,17:INPUT"WHAT IS THE DATE OF THE ENTRY YOU WISH TO FIND";BD$
5332 GOSUB 875:IF Q=1 THEN Q=0:GOTO 5330
5333 F1=BD:RETURN
5335 CLS:LOCATE 13,11:INPUT"WHAT IS THE DESCRIPTION OF THE CHECK THAT YOU WISH TO FIND";F1$:RETURN
5340 CLS:LOCATE 13,13:INPUT"WHAT IS THE AMOUNT OF THE CHECK THAT YOU WISH TO FIND";BB#:GOSUB 770
5342 F1#=BB#:RETURN
5345 CLS:LOCATE 13,13:INPUT"WHAT IS THE BALANCE OF THE CHECK THAT YOU WISH TO FIND";BB#:GOSUB 770
5347 F1#=BB#:RETURN
5350 CLS:LOCATE 13,14:INPUT"WHAT IS THE CODE OF THE CHECK THAT YOU WISH TO FIND";F1$:RETURN
5385 IF N=F1 THEN GOSUB 4897
5386 RETURN
5387 IF BD=F1 THEN GOSUB 4897
5388 RETURN
5389 IF LEFT$(ID$,LEN(F1$))=F1$ THEN GOSUB 4897
5390 RETURN
5391 IF ABS(AM#-F1#)<0.01 THEN GOSUB 4897
5392 RETURN
5393 IF ABS(BB#-F1#)<0.01 THEN GOSUB 4897
5394 RETURN
5395 IF CE$=F1$ THEN GOSUB 4897
5396 RETURN
5400 TEMPENTRY=0:TEMPN=0:TEMPBD=999999!:TEMPID$="0000000000000000000000000":TEMPAM#=0:TEMPBB=0:TEMPCE$="--":TEMPR$="*":RETURN
5410 TEMPENTRY=1:TEMPN=N:TEMPBD=BD:TEMPID$=ID$:TEMPAM#=AM#:TEMPBB=BB#:TEMPCE$=CE$:TEMPR$=R$:RETURN
5420 IF TEMPENTRY=1 THEN N=TEMPN:BD=TEMPBD:ID$=TEMPID$:AM#=TEMPAM#:BB#=TEMPBB#:CE$=TEMPCE$:R$=TEMPR$:GOSUB 5400:RETURN
5500 CLS:LOCATE 8,29:COLOR 0,7:PRINT"RECONCILIATION MENU";:COLOR 7,0
5510 LOCATE 10,23:PRINT"1. INITIAL RECONCILIATION"
5515 LOCATE 11,23:PRINT"2. RECONCILE WITH A BANK STATEMENT"
5520 LOCATE 12,23:PRINT"3. LIST OUTSTANDING CHECKS"
5525 LOCATE 14,17:COLOR 0,7:PRINT"*ENTER NUMBER OF DESIRED OPTION (0 TO RETURN)";:COLOR 7,0:GOSUB 4000:ROPTION=A
5535 IF ROPTION<0 OR ROPTION>3 THEN ER=1:GOSUB 8000:GOTO 5500
5540 RETURN
5550 CLS:LOCATE 8,1:COLOR 9,0:PRINT"*WARNING:";:COLOR 7,0:PRINT" Using the initial reconciliation option will mark all entries between":LOCATE 9,1:PRINT"the dates specified in the file in use as reconciled (*).  This should be used"
5560 LOCATE 10,1:PRINT "only when all of the checks entered were reconciled before the use of this      program and is provided so that the user need not edit every entry  in order to change them to a reconciled status.";
5565 LOCATE 13,1:PRINT "After all of the entries have been marked reconciled, the edit may be used to   change the status of desired entries back to outstanding (O)."
5570 LOCATE 20,5:PRINT "IF YOU DO NOT WISH TO CONTINUE, PRESS R . OTHERWISE JUST <RETURN>":GOSUB 4010:RETURN
6000 FOR R%=1 TO R1:RN(R%)=0:RA#(R%)=0:NEXT:TEMPENTRY=0:TEMPFILE=0:I%=0:RO#=0:CD1=0:RETURN
6150 CLS:LOCATE 13,13:PRINT"WOULD YOU LIKE THE RECONCILIATION TO RUN UNATTENDED?(Y/N)":LOCATE 15,29:PRINT"(NORMALLY RESPOND 'N')"
6155 LOCATE 16,33:PRINT"(0 TO RETURN)":GOSUB 4010:IF A$="0" THEN RETURN ELSE IF A$<>"Y" THEN A$="N"
6160 IF A$="N" THEN RMONITOR=1 ELSE RMONITOR=0:EI=0
6165 RETURN
6200 FOR R%=1 TO R1
6205 IF (N=0 OR N=-1) AND N=RN(R%) AND ABS(AM#-RA#(R%))<0.01 GOTO 6230
6207 IF N<>0 AND N<>-1 AND N=RN(R%) GOTO 6230
6210 NEXT
6220 IF N=0 THEN RO#=RO#+AM# ELSE RO#=RO#-AM#
6225 RETURN
6230 IF ABS(AM#-RA#(R%))<0.01 THEN R$="*":RN(R%)=RN(R1):RA#(R%)=RA#(R1):R1=R1-1:RETURN
6232 IF RMONITOR=0 GOTO 6220
6235 CLS:LOCATE 5,21:PRINT"THERE IS AN AMOUNT DISCREPANCY BETWEEN":LOCATE 6,17:PRINT"THE FILE ENTRY AND THE BANK  STATEMENT'S AMOUNT"
6240 Q=0:LOCATE 9,1:PRINT"THE FILE ENTRY IS":LOCATE 10,1:GOSUB 4897
6245 LOCATE 12,1:PRINT"THE BANK STATEMENT'S AMOUNT IS":LOCATE 12,31:PRINT USING ZD$;RA#(R%)
6247 LOCATE 13,31:PRINT"--------------":LOCATE 14,1:PRINT"THE DIFFERENCE IS":LOCATE 14,31:COLOR 0,7:PRINT USING ZD$;ABS(AM#-RA#(R%)):COLOR 7,0
6250 LOCATE 17,13:PRINT"1. FILE AMOUNT WRONG.MARK RECONCILED"
6255 LOCATE 18,13:PRINT"2. BANK STATEMENT AMOUNT WRONG.MARK RECONCILED"
6260 LOCATE 19,13:PRINT"3. LEAVE ENTRY OUTSTANDING"
6265 LOCATE 21,25:COLOR 0,7:PRINT"ENTER NUMBER OF DESIRED OPTION":COLOR 7,0:GOSUB 4000:ROPTN=A:IF ROPTN<1 OR ROPTN>3 THEN ER=1:GOSUB 8000:GOTO 6265
6270 IF ROPTN=1 THEN AM#=RA#(R%):GOTO 6230
6275 IF ROPTN=2 THEN RA#(R%)=AM#:GOTO 6230
6280 GOTO 6220
6300 CLS:LOCATE 4,20:PRINT"YOUR CHECK BOOK BALANCE DOES NOT MATCH":LOCATE 5,24:PRINT"WITH THE BANK STATEMENT'S BALANCE":TBD=BD:BD=CD:GOSUB 950:BD=TBD:LOCATE 6,36:PRINT BSLASH$
6305 LOCATE 10,1:PRINT"THE BANK BALANCE IS";:LOCATE 10,65:PRINT USING ZD$;RB#
6310 LOCATE 11,1:PRINT"THE FILE BALANCE WITHOUT THE STILL OUTSTANDING ENTRIES IS";:LOCATE 11,65:PRINT USING ZD$;FB#
6315 LOCATE 12,65:PRINT"--------------"
6320 LOCATE 13,1:PRINT"THE DIFFERENCE IS";:LOCATE 13,65:COLOR 0,7:PRINT USING ZD$;ABS(RB#-FB#):COLOR 7,0
6325 LOCATE 16,16:PRINT"1. BANK BALANCE ENTERED WRONG.ENTER A NEW BALANCE"
6330 LOCATE 17,16:PRINT"2. BANK STATEMENT DATE ENTERED WRONG.ENTER NEW DATE"
6335 LOCATE 18,16:PRINT"3. ACCEPT BANK BALANCE IN A TEMPORARY FILE"
6340 LOCATE 19,16:PRINT"4. ACCEPT BANK BALANCE AND ACCEPT CURRENT FILE"
6345 LOCATE 20,16:PRINT"5. ABORT RECONCILIATION"
6350 LOCATE 22,25:COLOR 0,7:PRINT"ENTER NUMBER OF DESIRED OPTION":COLOR 7,0:GOSUB 4000:ROPTN=A:IF ROPTN<1 OR ROPTN>5 THEN ER=1:GOSUB 8000:GOTO 6350
6355 IF ROPTN<3 OR ROPTN>4 THEN RETURN
6360 IF ROPTN=3 THEN TEMPFILE=1
6365 N=-1: BD=CD:ID$="MISC. ADJUSTMENT*********":AM#=FB#-RB#:BB#=B1#-AM#:CE$="--":R$="*"
6370 GOSUB 5085:B1#=BB#:RB#=FB#:RETURN
6375 CLS:LOCATE 10,13:PRINT"THE DATE OF THE CURRENT POSITION IN THE FILE, ";:LOCATE 10,59:TBD=BD:BD=TEMPCD:GOSUB 950:PRINT BSLASH$;:LOCATE 11,20:PRINT"IS BEYOND THE DATE YOU ENTERED, ";:LOCATE 11,52:BD=CD:GOSUB 950:PRINT BSLASH$:BD=TBD
6380 LOCATE 13,16:PRINT"1. ACCEPT BANK BALANCE IN TEMPORARY FILE"
6381 LOCATE 14,16:PRINT"2. BANK STATEMENT DATE ENTERED WRONG.ENTER NEW DATE"
6382 LOCATE 15,16:PRINT"3. ABORT RECONCILIATION"
6385 LOCATE 17,25:COLOR 0,7:PRINT"ENTER NUMBER OF DESIRED OPTION":COLOR 7,0:GOSUB 4000:ROPTN=A:IF ROPTN<1 OR ROPTN>3 THEN ER=1:GOSUB 8000:GOTO 6385
6390 IF ROPTN=1 THEN CD=999999!:TEMPFILE=1
6393 IF ROPTN=2 THEN CD=TEMPCD
6395 RETURN
6400 IF LEFT$(ID$,16)="MISC. ADJUSTMENT" AND (CD=BD OR CD1=BD) GOTO 6406
6405 IF LEFT$(ID$,6)="RECORD" AND AM#=0! THEN 6406 ELSE RETURN
6406 IF BD=CD OR BD=CD1 THEN ROPTN=4:RETURN
6410 RECORD#=VAL(RIGHT$(ID$,(LEN(ID$)-6)))
6412 IF ABS(RECORD#-BB#)<0.01 THEN RETURN
6415 CLS:LOCATE 4,16:GOSUB 950:PRINT"THE ENTRIES FOR THE BANK PERIOD ENDING ";BSLASH$
6420 LOCATE 5,15:PRINT"WERE ONCE RECONCILED. NOW THEY DO NOT MATCH WITH":LOCATE 6,19:PRINT"THE ACCEPTED VALUE FROM THE RECONCILIATION"
6421 LOCATE 10,1:PRINT"THE BANK BALANCE IS";:LOCATE 10,65:PRINT USING ZD$;RECORD#
6422 LOCATE 11,1:PRINT"THE FILE BALANCE IS";:LOCATE 11,65:PRINT USING ZD$;BB#
6423 LOCATE 12,65:PRINT"--------------"
6425 LOCATE 13,1:PRINT"THE DIFFERENCE IS";:LOCATE 13,65:COLOR 0,7:PRINT USING ZD$;ABS(RECORD#-BB#):COLOR 7,0
6427 IF ED=1 THEN ED=2:RETURN 'FOR RECORD ER IN REG EDIT
6430 LOCATE 16,16:PRINT"1. ACCEPT BANK BALANCE IN A TEMPORARY FILE"
6432 LOCATE 17,16:PRINT"2. ACCEPT BANK BALANCE AND ACCEPT CURRENT FILE"
6434 LOCATE 18,16:PRINT"3. CHANGE BANK BALANCE TO MATCH FILE BALANCE"
6435 LOCATE 19,16:PRINT"4. DELETE RECONCILIATION RECORD AT THIS DATE"
6437 LOCATE 20,16:PRINT"5. ABORT RECONCILIATION"
6440 LOCATE 22,25:COLOR 0,7:PRINT"ENTER NUMBER OF DESIRED OPTION":COLOR 7,0:GOSUB 4000:ROPTN=A:IF ROPTN<1 OR ROPTN>5 THEN ER=1:GOSUB 8000:GOTO 6440
6442 IF ROPTN>3 THEN RETURN
6443 IF ROPTN=3 THEN ID$="RECORD"+STR$(BB#):GOSUB 5085:B1#=BB#:RETURN
6445 IF ROPTN=1 THEN TEMPFILE=1
6450 N=-1:BD=BD:ID$="MISC. ADJUSTMENT*********":AM#=B1#-RECORD#:BB#=RECORD#:CE$="--":R$="*"
6455 GOSUB 5085: B1#=BB#
6460 N=0:BD=BD:ID$="RECORD" + STR$(RECORD#):AM#=0:BB#=B1#:CE$="--":R$="*"
6465 GOSUB 5085:B1#=BB#
6470 RETURN
6499 GOSUB 6500:IF N$="0" GOTO 6580 ELSE IF R%=>MAXREC GOTO 6575 ELSE GOTO 6499
6500 FCL=2201.79:GOSUB 10000:LOCATE 24,79:PRINT:COLOR 0,7:LOCATE 22,1:PRINT ZR$:COLOR 7,0
6505 LOCATE 15,20:PRINT"*ENTER CHECK NUMBER FROM BANK STATEMENT":LOCATE 16,9:PRINT"(D FOR DEPOSIT OR AUTOMATIC DEPOSIT, A FOR AUTOMATIC WITHDRAWAL":LOCATE 17,22:PRINT"C FOR OTHER CHARGES, END TO RETURN)"
6510 LOCATE 23,2:INPUT"",N$:IF N$="" GOTO 6510
6515 IF N$="END" THEN N$="0":RETURN
6517 R%=R%+1
6520 IF N$="D" THEN RN(R%)=0:GOTO 6540
6525 IF N$="C" OR N$="A" THEN RN(R%)=-1:GOTO 6540
6530 N=VAL(N$):NSTR$=STR$(N):IF (RIGHT$(NSTR$,LEN(NSTR$)-1)<>N$) OR (INT(N)<>N) OR (N>9999) THEN COLOR 0,7:BEEP:LOCATE 25,10:PRINT"CHECK NUMBER MUST BE INTEGER <9999. PRESS RETURN TO CONTINUE";:COLOR 7,0 ELSE RN(R%)=N:GOTO 6540
6535 GOSUB 4010:FCL=2510.61:GOSUB 10000:FCL=2302.06:GOSUB 10000: GOTO 6510
6540 FOR I=15 TO 17:FCL=I*100+1.78:GOSUB 10000:NEXT:LOCATE 23,2:PRINT RN(R%)
6555 LOCATE 23,34:LINE INPUT"",TEMPAM$:IF TEMPAM$<>"" THEN AM#=VAL(TEMPAM$):FOR J=1 TO LEN(TEMPAM$):JJ=ASC(MID$(TEMPAM$,J,1)):IF (JJ<48 OR JJ>57) AND JJ<>46 THEN ER=1:GOSUB 8000:FCL=2334.13:GOSUB 10000:GOTO 6555 ELSE NEXT
6560 BB#=AM#:GOSUB 770:IF Q=1 THEN Q=0:FCL=2334.13:GOSUB 10000:GOTO 6555 ELSE RA#(R%)=BB#
6565 LOCATE 23,31:PRINT USING ZD$;RA#(R%)
6570 GOSUB 4807:IF A$="N" THEN R%=R%-1:GOTO 6505 ELSE LOCATE 11,1:PRINT USING ZR1$;RN(R%),RA#(R%)
6571 RETURN
6575 BEEP:LOCATE 25,10:PRINT"YOUR BANK STATEMENT HAS EXCEEDED THE MAXIMUM ENTRIES ALLOWED";:GOSUB 4008
6580 R1=R%
6600 CLS: LOCATE 12,22:PRINT "ARE THERE ANY BANK CHARGES, CREDITS":LOCATE 13,5:PRINT"OR ATW'S NOT IN YOUR CHECK FILE THAT YOU WOULD LIKE TO ENTER NOW (Y/N)":GOSUB 4010
6605 IF A$<>"Y" AND A$<>"N" THEN ER=1:GOSUB 8000:GOTO 6600
6610 R%=0:CLS:IF A$="N" GOTO 6697
6612 GOSUB 6615:IF N$="0" GOTO 6697 ELSE IF R%=>MAXCHARGE GOTO 6695 ELSE GOTO 6612
6615 FCL=2201.79:GOSUB 10000:LOCATE 24,79:PRINT:COLOR 0,7:LOCATE 22,1:PRINT ZRC$:COLOR 7,0
6620 LOCATE 15,15:PRINT"*ENTER A FOR AUTOMATIC WITHDRAWAL, I FOR INTEREST,":LOCATE 16,22:PRINT"C FOR OTHER CHARGES, END TO RETURN)"
6625 LOCATE 23,2:INPUT"",N$:IF N$="" GOTO 6625
6630 IF N$="END" THEN N$="0":RETURN
6632 IF N$<>"A" AND N$<>"I" AND N$<>"C" THEN ER=1:GOSUB 8000:GOTO 6620
6635 R%=R%+1
6637 IF N$="I" THEN BANKN(R%)=0 ELSE BANKN(R%)=-1
6640 FOR I=15 TO 16:FCL=I*100+1.78:GOSUB 10000:NEXT:LOCATE 23,2:PRINT BANKN(R%)
6645 Q=0:LOCATE 23,8:INPUT"",BD$:IF BD$="" GOTO 6645 ELSE GOSUB 875
6650 IF Q=1 THEN FCL=2308.1:GOSUB 10000:GOTO 6645 ELSE GOSUB 950: LOCATE 23,8:PRINT BSLASH$:BANKD(R%)=BD
6655 LOCATE 23,18: LINE INPUT"",BANKID$(R%):IF BANKID$(R%)="" GOTO 6655
6660 IF LEN(BANKID$(R%))>25 THEN ER=4: GOSUB 8000:FCL=2318+(LEN(BANKID$(R%))/100):GOSUB 10000:GOTO 6655
6665 FOR J=1 TO LEN(BANKID$(R%)): J$=MID$(BANKID$(R%),J,1):IF J$="," THEN ER=5: GOSUB 8000:FCL=2318.25:GOSUB 10000: GOTO 6655 ELSE NEXT
6670 IF N$="A" THEN IF LEN(BANKID$(R%))>21 THEN BANKID$(R%)="ATW "+LEFT$(BANKID$(R%),21) ELSE BANKID$(R%)="ATW "+BANKID$(R%)
6675 FCL=2318+((LEN(BANKID$(R%))+1)/100):GOSUB 10000:LOCATE 23,18:PRINT LEFT$(BANKID$(R%),12);
6680 LOCATE 23,34:LINE INPUT"",TEMPAM$:IF TEMPAM$<>"" THEN AM#=VAL(TEMPAM$):FOR J=1 TO LEN(TEMPAM$):JJ=ASC(MID$(TEMPAM$,J,1)):IF (JJ<48 OR JJ>57) AND JJ<>46 THEN ER=1:GOSUB 8000:FCL=2334.13:GOSUB 10000:GOTO 6680 ELSE NEXT
6685 BB#=AM#:GOSUB 770:IF Q=1 THEN Q=0:FCL=2334.13:GOSUB 10000:GOTO 6680 ELSE BANKA#(R%)=BB#
6690 LOCATE 23,31:PRINT USING "$$#########.##";BANKA#(R%)
6693 GOSUB 4807:IF A$="N" THEN R%=R%-1:GOTO 6620 ELSE LOCATE 11,1:PRINT USING ZR2$;BANKN(R%),BSLASH$,BANKID$(R%),BANKA#(R%)
6694 RETURN
6695 BEEP:LOCATE 25,11:PRINT"YOUR BANK CHARGES HAS EXCEEDED THE MAXIMUM ENTRIES ALLOWED";:GOSUB 4008
6697 CI=R%:RETURN
6700 CLS:LOCATE 13,21:PRINT"WHAT IS THE DATE OF THE BANK STATEMENT":LOCATE 14,33:INPUT"(0 TO RETURN)";BD$
6702 IF BD$="0" THEN RETURN
6705 GOSUB 875:IF Q=1 THEN Q=0:GOTO 6700 ELSE CD=BD
6706 GOSUB 4807:IF A$="N" GOTO 6700 ELSE RETURN
6710 CLS:LOCATE 13,17:INPUT"WHAT IS THE BANK'S BALANCE FOR THIS STATEMENT";BB#
6715 GOSUB 770:IF Q=1 THEN Q=0: GOTO 6710 ELSE RB#=BB#
6716 GOSUB 4807:IF A$="N" GOTO 6710
6720 RETURN
6730 CHARGES#=0:FOR I=1 TO CI:IF BANKN(I)=0 THEN CHARGES#=CHARGES#+BANKA#(I) ELSE CHARGES#=CHARGES#-BANKA#(I)
6731 NEXT:RETURN
6750 IF CI=0 THEN RETURN ELSE FOR I=CI TO 1 STEP -1:IF BANKN(I)=0 THEN BB#=B1#+BANKA#(I) ELSE BB#=B1#-BANKA#(I)
6755 N=BANKN(I):BD=BANKD(I):ID$=BANKID$(I):AM#=BANKA#(I):CE$="--":R$="*"
6760 GOSUB 5085: B1#=BB#
6765 NEXT:CI=0:RETURN
6780 IF RMONITOR=1 THEN LOCATE 25,13:PRINT "TYPE T TO MAKE THIS A TEMPORARY FILE ELSE JUST RETURN":GOSUB 4010:IF A$="T" THEN TEMPFILE=1
6781 RETURN
6800 IF R1<=0 THEN RETURN ELSE CLS:LOCATE 10,23:PRINT"THE FOLLOWING ITEMS WERE ENTERED IN" :LOCATE 11,12:PRINT"YOUR BANK STATEMENT BUT WERE NOT FOUND IN YOUR CHECK FILE"
6805 LOCATE 13,1:PRINT ZR$
6810 FOR R%=1 TO R1
6815 PRINT USING ZR1$;RN(R%);RA#(R%)
6820 NEXT
6825 LOCATE 24,16:PRINT"WOULD YOU LIKE THESE ITEMS SENT TO PRINTER (Y/N)":GOSUB 4010:IF A$="N" THEN GOSUB 4008:RETURN ELSE IF A$<>"Y" THEN ER=1:GOSUB 8000:FCL=2301.79:GOSUB 10000:GOTO 6825
6830 GOSUB 2500:LPRINT ZR$
6835 FOR R%=1 TO R1:LPRINT USING ZR1$;RN(R%);RA#(R%):NEXT:RETURN
6850 CLS:LOCATE 12,16:PRINT"WOULD YOU LIKE TO REVIEW AND/OR EDIT THE ENTRIES":LOCATE 13,28:PRINT"YOU JUST MADE? (Y/N/0)":GOSUB 4010:IF A$="0" OR A$="N" THEN RETURN ELSE IF A$<>"Y" THEN ER=1:GOSUB 8000:GOTO 6850
6855 CLS:LOCATE 10,17:PRINT"1. REVIEW BANK STATEMENT ENTRIES"
6857 LOCATE 11,17:PRINT "2. EDIT BANK STATEMENT ENTRIES"
6859 LOCATE 12,17:PRINT "3. REVIEW ADDITIONAL BANK CHARGES AND CREDITS"
6861 LOCATE 13,17:PRINT"4. EDIT ADDITIONAL BANK CHARGES AND CREDITS"
6863 LOCATE 15,18:COLOR 0,7:PRINT"*ENTER NUMBER OF DESIRED OPTION (0 TO RETURN)":COLOR 7,0:GOSUB 4000:RE=A:IF RE=0 THEN A$="N":RETURN
6865 IF INT(RE)<>RE OR RE<0 OR RE>4 THEN ER=1:GOSUB 8000:GOTO 6863
6866 IF RE=1 OR RE=3 THEN GOSUB 4865
6867 ON RE GOSUB 6869,6880,6875,6880:GOTO 6855
6869 CLS:COLOR 0,7:PRINT ZR$:COLOR 7,0:IF L$="Y" THEN LPRINT ZR$:LPRINT
6870 FOR I=1 TO R1:PRINT USING ZR1$; RN(I),RA#(I);:Q=I:GOSUB 4898:IF L$="Y" THEN LPRINT USING ZR1$;RN(I),RA#(I)
6871 NEXT:GOSUB 4915:RETURN
6875 CLS:COLOR 0,7:PRINT ZRC$:COLOR 7,0:IF L$="Y" THEN LPRINT ZRC$:LPRINT
6876 FOR I=1 TO CI:BD=BANKD(I):GOSUB 950:PRINT USING ZR2$; BANKN(I),BSLASH$,BANKID$(I),BANKA#(I);:Q=I:GOSUB 4898:IF L$="Y" THEN LPRINT USING ZR2$; BANKN(I),BSLASH$,BANKID$(I),BANKA#(I)
6877 NEXT:GOSUB 4915:RETURN
6880 GOSUB 5145:IF A$="N" THEN RETURN ELSE CLS:IF E=2 GOTO 6895 ELSE IF RE=2 THEN ON E GOSUB 6880,5110,5115,6880,5120
6882 IF RE=4 THEN ON E GOSUB 6882,5125,5135,6882,5140
6883 IF E=2 THEN NED=E2(I%) ELSE IF E=3 THEN NED=E3(I%) ELSE NED=E5(I%)
6884 IF RE=4 GOTO 6887
6885 FOR I=1 TO R1:IF RN(I)=NED THEN GOSUB 6890
6886 NEXT:RETURN
6887 FOR I=1 TO CI:IF BANKD(I)=NED THEN GOSUB 6890
6888 NEXT:RETURN
6890 CLS:LOCATE 11,1:IF RE=2 THEN PRINT USING ZR1$;RN(I),RA#(I) ELSE BD=BANKD(I):GOSUB 950:PRINT USING ZR2$; BANKN(I),BSLASH$, BANKID$(I),BANKA#(I)
6892 ON E GOSUB 6892,5200,5215,6892,5225:IF E<3 THEN E=E+1 ELSE E=5
6893 IF A$="N" THEN RETURN
6894 FCL=1301.79:GOSUB 10000
6895 ON E GOSUB 6895,6905,6900,6895,6910:RETURN
6900 IF RE=2 THEN RN(I)=RN(R1):RA#(I)=RA#(R1):R1=R1-1:RETURN
6903 BANKN(I)=BANKN(CI):BANKD(I)=BANKD(CI):BANKID$(I)=BANKID$(CI):BANKA#(I)=BANKA#(CI):CI=CI-1:RETURN
6905 IF (RE=2 AND R1+1>MAXREC) OR (RE=4 AND CI+1>MAXCHARGE) THEN LOCATE 25,28:BEEP:COLOR 0,7:PRINT"TOO MANY ITEMS TO INSERT":COLOR 7,0:GOSUB 4008:RETURN
6906 IF RE=2 THEN R1=R1+1:R%=R1-1 ELSE IF RE=4 THEN CI=CI+1:R%=CI-1
6907 GOTO 6911
6910 R%=I-1
6911 IF RE=2 THEN GOSUB 6500 ELSE GOSUB 6615
6915 IF N$<>"0" THEN RETURN
6920 IF RE=2 THEN R1=R1-1
6925 IF RE=4 THEN CI=CI-1
6930 RETURN
6940 CLS:LOCATE 13, 38:PRINT "WAIT":LESS=0:TRADE=1:WHILE TRADE>0:TRADE=0
6942 LESS=LESS+1:FOR I=1 TO CI-LESS
6945    IF BANKD(I)<BANKD(I+1) THEN TRADE=1:SWAP BANKN(I),BANKN(I+1):SWAP BANKD(I),BANKD(I+1):SWAP BANKID$(I),BANKID$(I+1):SWAP BANKA#(I),BANKA#(I+1)
6946 NEXT:WEND:RETURN
6950 IF CI>0 THEN IF BANKD(CI)<BD THEN GOSUB 5410: N=BANKN(CI):BD=BANKD(CI):ID$=BANKID$(CI):AM#=BANKA#(CI):CE$="--":R$="*":GOSUB 4795:B1#=BB#:GOSUB 5085:CI=CI-1:GOSUB 5420:GOTO 6950
6955 RETURN
7000 GOSUB 200
7005 IF E=0 THEN RETURN
7020 GOSUB 255:IF CF$="0" GOTO 7000
7031 GOSUB 4860
7032 IF A$="0" GOTO 7000
7033 IF A$="Y" THEN GOSUB 8220
7035 ER=2:IF W=2 THEN ON E GOSUB 7200,7500,8000:GOTO 7000
7040 ON E GOSUB 7100,7300,7700:GOTO 7000
7100 CLS:LOCATE 13,33:COLOR 31:PRINT"ADDING TO FILE":COLOR 7,0
7120 B1#=0:GOSUB 5000:GOSUB 5060
7125 GOSUB 5030:IF F=0 THEN GOSUB 5085:GOTO 7125
7126 R=0:CLS:LOCATE 11,1:GOSUB 950:PRINT USING Z2$;N,BSLASH$,ID$,AM#,BB#,CE$,R$
7127 B1#=BB#:F=0
7130 GOSUB 4730
7135 IF N$="0" THEN GOSUB 4950:RETURN
7170 GOSUB 5085
7175 GOTO 7127
7200 GOSUB 4150
7215 GOSUB 4246:IF ER=8 THEN RETURN
7220 GOSUB 4250
7222 IF C1$(I%)="END" GOTO 7255
7225 GOSUB 4807
7230 IF A$="N" GOTO 7220
7235 GOSUB 4269
7240 GOSUB 4272
7245 IF ER=8 GOTO 7255
7250 GOTO 7220
7255 GOSUB 4275
7260 RETURN
7300 I%=0
7302 GOSUB 5155
7305 CLS:ON E GOSUB 7306,5110,5115,7306,5120:GOTO 7320
7306 GOTO 100
7320 IF E9=0 OR E9=-1 THEN ON E GOSUB 7306,5125,5135,7306,5140
7325 GOSUB 5145
7330 IF A$="Y" GOTO 7305
7335 B1#=0:GOSUB 5000:GOSUB 5060
7336 GOSUB 5030:GOSUB 5170
7337 IF E9=1 GOTO 7430
7338 GOTO 7355
7340 CLS:LOCATE 13,31:COLOR 31:PRINT"****FINDING EDITS":COLOR 7,0:GOSUB 5030:IF F=1 THEN GOSUB 4950:RETURN
7342 GOSUB 4795:ED=1:GOSUB 6400:IF ED=2 THEN BEEP:LOCATE 16,12:COLOR 0,7:PRINT "THIS IS A WARNING";:COLOR 7,0:PRINT " YOUR EDIT SESSION WILL NOT BE AFFECTED":GOSUB 4008
7343 ED=0
7345 GOSUB 5170
7350 IF E9=1 GOTO 7370
7355 GOSUB 4795
7360 GOSUB 5085:B1#=BB#
7365 GOTO 7340
7370 GOSUB 5190
7375 IF A$="N" THEN CLS:GOTO 7355
7380 ON E GOTO 7385,7340,7415
7385 CLS:GOSUB 4795
7387 LOCATE 11,1:PRINT USING Z2$; N,BSLASH$,ID$,AM#,BB#,CE$,R$
7390 GOSUB 5085:B1#=BB#
7395 R=1: GOSUB 4730
7400 IF N$="0" THEN R=0:GOTO 7340
7410 GOTO 7390
7415 FCL=1316.5:R=1:GOSUB 4730:R=0
7420 GOTO 7360
7430 IF E3(I%)<>-2 GOTO 7355
7435 L$="N":H3=1:GOSUB 4895
7440 GOSUB 5196
7445 IF A$="N" GOTO 7355
7450 ON E GOTO 7385,7355,7455
7455 GOSUB 680
7470 AM#=BB#
7475 GOTO 7355
7500 GOSUB 4150
7510 IF CN=0 THEN ER=7:GOSUB 8000:RETURN
7512 GOSUB 5155:I%=I%-1
7515 IF E=2 THEN GOSUB 4246:IF ER=8 THEN RETURN
7520 ON E GOSUB 7521,4535,4335,7521,4435:GOTO 7525
7521 CLOSE:GOTO 100
7525 IF C$="0" THEN C$=" ":RETURN
7527 I=0
7530 N=0:GOSUB 4550: IF N=1 THEN N=0:GOTO 7520
7535 N=0:GOSUB 4450
7540 ON E GOSUB 7521,4545,4345,7521,4455
7545 GOSUB 4807
7550 IF A$="N" THEN I=I+1:GOTO 7530
7555 IF E=3 THEN GOSUB 4353:GOTO 7585
7560 IF E=2 THEN GOSUB 4570
7565 GOSUB 4250
7570 IF C1$(I%)="0" THEN CLOSE:GOTO 7585
7575 GOSUB 4807:IF A$="N" GOTO 7565
7580 GOSUB 4275
7585 RETURN
7700 GOSUB 5300
7705 IF FI=0 THEN RETURN
7710 ON FI GOSUB 5325,5330,5335,5340,5345,5350
7715 CLS:LOCATE 13,29:COLOR 31:PRINT"****FINDING ENTRIES***":COLOR 7,0
7720 GOSUB 5000:GOSUB 5030:H3=1:L$="N"
7725 GOSUB 4890:GOTO 7735
7730 GOSUB 5030:IF F=1 GOTO 7745
7735 ON FI GOSUB 5385,5387,5389,5391,5393,5395
7740 H3=0:GOTO 7730
7745 FI=0:GOSUB 4915:GOTO 7700
8000 BEEP:FCL=2501.79:COLOR 0,7:GOSUB 10000:LOCATE 25,1
8001 ON ER GOSUB 8005,8010,8015,8020,8025,8030,8035,8040,8045,8050,8055,8060:COLOR 7,0:GOSUB 4008:FCL=2501.79:GOSUB 10000:RETURN
8005 PRINT"     INPUT ERROR";:PRINT SPACE$(30);:PRINT" - ARE CAPITAL LETTERS LOCKED?";:RETURN
8010 PRINT"THIS OPTION IS NOT AVAILABLE FOR CODE FILES";:RETURN
8015 PRINT"THIS FILE DOES NOT EXIST ON THIS DISK.EXAMINE DIRECTORY.";:RETURN
8020 PRINT"TOO LONG. DESCRIPTIONS MAY NOT EXCEED 25 CHARACTERS. CODES NO MORE THAN 2.";:RETURN
8025 PRINT"COMMAS MAY NOT BE USED HERE";:RETURN
8030 PRINT" THIS OPTION IS NOT YET AVAILABLE IN THIS PROGRAM";:RETURN
8035 PRINT" NO ENTRIES EXIST IN THIS FILE.";:RETURN
8040 PRINT"THIS FILE IS FULL. RETURN TO MENU TO START NEW FILE.";:RETURN
8045 PRINT" THIS FILE ALREADY EXISTS ON THIS DISK";:RETURN
8050 PRINT" YOU ARE TRYING TO ACCESS A BACKUP FILE. RENAME BEFORE ACCESS";:RETURN
8055 PRINT"CODE FILES MAY ONLY BE TWO LETTER COMBINATIONS OF CAPITAL LETTERS";:RETURN
8060 PRINT"EXTENSIONS MUST MATCH FILE TYPE";:RETURN
8200 GOSUB 255:IF CF$="0" THEN RETURN
8220 GOSUB 4865
8225 IF W=2 THEN GOSUB 4150 ELSE GOTO 8300
8240 IF CN=0 THEN ER=7:GOSUB 8000 ELSE GOSUB 4170
8250 RETURN
8300 GOSUB 4850
8302 IF BD$="0" THEN RETURN
8303 IF BD$="1" THEN H3=1 ELSE H3=0
8306 GOSUB 4820:IF BD$="0" THEN RETURN
8307 IF BD$="1" THEN H4=1 ELSE H4=0
8310 GOSUB 5000:GOSUB 5030
8315 IF F=1 THEN ER=7:GOSUB 8000:GOSUB 4920:RETURN
8320 IF H3=1 GOTO 8330
8325 H3=1:GOSUB 4870
8327 IF F=1 GOTO 8300
8330 GOSUB 4890
8332 IF H4<>1 THEN GOSUB 4880: IF A$="Y" THEN GOSUB 4915:RETURN
8335 GOSUB 4895
8340 IF A$="0" THEN GOSUB 4920:RETURN
8345 GOSUB 5030:IF F=1 THEN GOSUB 4915:RETURN
8350 GOTO 8332
8400 IF A=1 THEN W=1 ELSE W=2
8410 NEWNAME=1:GOSUB 255:NEWNAME=0:IF CF$="0" THEN RETURN
8430 GOSUB 647
8440 IF A$="N" GOTO 8410
8442 IF W=2 THEN GOSUB 4100:RETURN
8445 GOSUB 680:GOSUB 735:RETURN
8500 GOSUB 300
8505 IF D=0 THEN RETURN
8510 IF D=4 OR D=6 GOTO 8535
8514 IF D<3 THEN BAKOK=1
8515 GOSUB 255:BAKOK=0:IF CF$="0" THEN RETURN
8530 IF W=2 AND D=3 THEN ER=2:GOSUB 8000:GOTO 8500
8535 ER=6:ON D GOSUB 370,4600,1600,1500,8670,1700:GOTO 8500
8670 GOSUB 1520
8675 IF D=2 THEN GOSUB 1550
8680 CLS:LOCATE 13,30:COLOR 31:PRINT"****BACKING UP FILE":LOCATE 14,35:PRINT "USING";D;"DRIVE";:IF D=2 THEN PRINT"S"
8681 COLOR 7,0
8692 IF W=2 GOTO 8715
8695 GOSUB 5000
8700 IF D=1 THEN CF$=CF$+".BAK" ELSE CF$="B:"+CF$
8705 OPEN"O",2,CF$
8710 GOSUB 5030: IF F=0 THEN GOSUB 5085:GOTO 8710
8712 CLOSE:RETURN
8715 GOSUB 4150
8725 IF D=1 THEN CF$=CF$+"B" ELSE CF$="B:"+CF$
8735 GOSUB 4275:RETURN
8800 GOSUB 5500
8805 IF ROPTION=0 THEN RETURN
8810 GOSUB 255:IF CF$="0" THEN RETURN
8825 IF W=2 THEN ER=2:GOSUB 8000:RETURN
8830 ON ROPTION GOSUB 8850,9000,8900:GOTO 8800
8850 GOSUB 5550
8852 IF A$="0" THEN RETURN
8855 GOSUB 4850
8857 IF BD$="0" THEN RETURN
8860 IF BD$="1" THEN H=0
8865 GOSUB 4820:IF BD$="0" THEN RETURN
8867 IF BD$="1" THEN HE=999999!
8870 CLS:LOCATE 13,27:COLOR 31:PRINT"****INITIAL RECONCILIATION":COLOR 7,0
8875 GOSUB 5000:GOSUB 5060
8880 GOSUB 5030: IF BD=>H AND BD<=HE THEN R$="*"
8885 IF F=0 THEN GOSUB 5085: GOTO 8880
8890 GOSUB 4950
8895 RETURN
8900 GOSUB 4865
8905 GOSUB 4850
8910 IF BD$="0" THEN RETURN
8911 IF BD$="1" THEN H3=1 ELSE H3=0
8912 GOSUB 4820:IF BD$="0" THEN RETURN
8913 IF BD$="1" THEN H4=1 ELSE H4=0
8915 GOSUB 5000:GOSUB 5030
8920 ER=7: IF F=1 THEN GOSUB 8000:GOSUB 4920:RETURN
8925 IF H3=1 THEN 8940
8930 H3=1:GOSUB 4870
8935 IF F=1 GOTO 8905
8940 GOSUB 4890
8942 IF H4<>1 THEN GOSUB 4880: IF A$="Y" THEN GOSUB 4915:RETURN
8945 IF R$="O" THEN GOSUB 4895
8946 H3=0
8950 IF A$="0" THEN GOSUB 4920:RETURN
8955 GOSUB 5030: IF F=1 THEN GOSUB 4915:RETURN
8960 GOTO 8942
9000 GOSUB 6000
9001 CLS:R%=0:GOSUB 6499:GOSUB 6850:IF A$="0" THEN RETURN ELSE GOSUB 6940:GOSUB 6700:IF BD$="0" THEN RETURN ELSE GOSUB 6710
9005 GOSUB 6150:IF A$="0" THEN RETURN
9010 IF RMONITOR=0 GOTO 9100
9015 GOSUB 4860
9020 IF A$="0" THEN RETURN
9025 IF A$="Y" THEN GOSUB 8220
9030 I%=0
9035 GOSUB 5145
9040 IF A$="N" GOTO 9100
9045 CLS:ON E GOSUB 9046,5110,5115,9046,5120:GOTO 9050
9046 GOTO 100
9050 IF E9=0 OR E9=-1 THEN ON E GOSUB 9046, 5125, 5135,9046,5140
9055 GOTO 9035
9100 GOSUB 5400:B1#=0:CLS:LOCATE 13,32:COLOR 31:PRINT"**** RECONCILING":COLOR 7,0:GOSUB 5000:GOSUB 5060
9105 GOSUB 5030:IF RMONITOR=1 AND EI>0 THEN GOSUB 9300
9110 GOSUB 4795
9115 GOSUB 5085:B1#=BB#
9120 GOSUB 5030:IF F=1 GOTO 9146
9121 GOSUB 4795:IF CD<BD THEN GOSUB 5410:GOTO 9146
9122 ROPTN=0:GOSUB 6400:IF ROPTN=0 GOTO 9125
9123 IF ROPTN<5 THEN 9120
9124 IF ROPTN=5 THEN 9290
9125 R2=0:IF RMONITOR=1 AND EI>0 THEN GOSUB 9360: IF R2=1 GOTO 9120
9130 IF R$="O" THEN GOSUB 6200
9132 GOSUB 6950
9140 GOTO 9110
9146 IF CD=999999! THEN GOSUB 6750:GOTO 9280 ELSE GOSUB 6730
9157 FB#=B1#-RO#+CHARGES#
9160 TBD=BD:BD=CD:GOSUB 950:BD=TBD:IF ABS(RB#-FB#)<0.01 THEN CLS:BEEP:LOCATE 12,21:PRINT"YOUR CHECK BOOK IS RECONCILED UP UNTIL":LOCATE 13,36:PRINT BSLASH$:LOCATE 14,39:PRINT CHR$(1):GOSUB 6780:GOTO 9207
9165 GOSUB 6300
9166 IF ROPTN=1 THEN GOSUB 6710:GOTO 9160
9167 IF ROPTN=2 THEN TEMPCD=CD:GOSUB 6700:IF CD>TEMPCD THEN IF TEMPENTRY=1 THEN GOSUB 5420:GOTO 9122 ELSE 9120 ELSE GOSUB 6375:IF ROPTN=1 THEN IF TEMPENTRY=1 THEN GOSUB 5420:GOTO 9122 ELSE 9120 ELSE IF ROPTN=2 THEN 9167 ELSE 9290
9170 IF ROPTN= 5 THEN 9290
9175 GOTO 9160
9207 N=0:BD=CD:ID$="RECORD"+STR$(B1#):AM#=0:BB#=B1#:CE$="--":R$="*"
9210 GOSUB 5085:IF TEMPENTRY=1 THEN GOSUB 5420
9215 CD1=CD:CD=999999!:GOTO 9121
9250 GOSUB 6800:RETURN
9280 IF TEMPFILE=1 THEN TEMPFILE=0:CLOSE:KILL "CATALOG":CF$="WORKFILE" ELSE GOTO 9285
9283 GOSUB 4600: IF CF$="0" THEN CF$=D$:GOTO 9283 ELSE GOTO 9250
9285 GOSUB 4950:GOTO 9250
9290 CLOSE:KILL "WORKFILE":KILL "CATALOG":GOTO 9250
9300 GOSUB 5170
9305 IF E9<>1 THEN RETURN
9310 IF E3(I%)<>-2 THEN RETURN
9315 L$="N":H3=1:GOSUB 4895
9320 GOSUB 5196
9325 IF A$="N" THEN RETURN
9330 ON E GOTO 9430,9355,9335
9335 GOSUB 680
9350 AM#=BB#
9355 RETURN
9360 GOSUB 5170
9365 IF E9<>1 THEN RETURN
9370 GOSUB 5190
9375 IF A$="N" THEN CLS:RETURN
9380 ON E GOTO 9420,9385,9390
9385 R2=1:RETURN
9390 GOSUB 4730
9415 RETURN
9420 IF R$="O" THEN GOSUB 6200
9425 CLS:GOSUB 4795
9427 LOCATE 11,1:PRINT USING Z2$;N,BSLASH$,ID$,AM#,BB#,CE$,R$
9430 GOSUB 5085:B1#=BB#
9435 GOSUB 4730
9440 IF N$="0" THEN RETURN
9465 GOTO 9430
9700 GOSUB 2300
9705 IF S=0 THEN RETURN
9707 FCODE$="":CHECK$=""
9710 GOSUB 255:IF CF$="0" THEN RETURN
9725 IF W=1 THEN CHECK$=CF$:GOSUB 2350 ELSE GOSUB 2380:GOTO 9710
9730 IF A$="Y" THEN GOSUB 255:IF CF$="0" THEN RETURN ELSE IF W=1 THEN GOSUB 2370:A$="Y":GOTO 9730 ELSE FCODE$=CF$
9732 CLS:LOCATE 13,38:PRINT"WAIT":FOR I=1 TO MAXCODES-1:SC$(I)="":NEXT
9735 CODE$="**":NUMOFCODES=0
9740 IF S=1 THEN GOSUB 2400:CE$=RIGHT$(FILE$,2):GOSUB 2600:GOTO 9750
9745 IF S=2 THEN GOSUB 2420
9750 GOSUB 4865
9752 H3=0:H4=0
9755 GOSUB 4850
9760 IF BD$="0" THEN RETURN ELSE IF BD$="1" THEN H3=1
9765 GOSUB 4820
9767 IF BD$="0" THEN RETURN ELSE IF BD$="1" THEN H4=1
9775 GOSUB 2480
9780 IF FCODE$<>"NONE" THEN CF$=FCODE$:GOSUB 4150:IF CN=0 THEN FCODE$="NONE"
9790 CF$=CHECK$:NUMOFCODES=0
9797 CLS:LOCATE 13,37:COLOR 31:PRINT"****SORTING FILE":COLOR 7,0
9800 GOSUB 5000
9805 IF S=1 OR S=2 THEN Y=2:GOSUB 2215:GOTO 9820
9810 FOR INDEX=1 TO 13:FILE$=CHR$(63+2*INDEX):Y=INDEX+1:GOSUB 2215:NEXT
9815 FILE$="-":Y=15:GOSUB 2215
9820 GOSUB 5030:IF F=1 THEN CLOSE:GOTO 9860
9822 IF H3=1 GOTO 9830
9825 GOSUB 4870:H3=1
9827 IF F=1 THEN CLOSE:RETURN
9830 IF H4<>1 THEN GOSUB 4880: IF A$="Y" THEN CLOSE:GOTO 9860
9833 IF S=3 GOTO 9845
9835 IF S=2 AND FILE$=LEFT$(CE$,1) GOTO 9845
9840 IF S=1 AND RIGHT$(FILE$,2)=CE$ GOTO 9858
9843 GOTO 9820
9845 GOSUB 2550: IF A$="N" THEN GOSUB 2600
9850 X=ASC(CE$)
9852 IF X=45 THEN Y=15:GOTO 9858 ELSE IF X/2=INT(X/2) THEN X=X-1
9855 IF S=2 THEN Y=2 ELSE Y=((X-63)/2)+1
9858 GOSUB 2240:GOTO 9820
9860 IF S=1 THEN NUMOFCODES=1:GOTO 9880
9862 IF NUMOFCODES=0 THEN GOSUB 2390:GOSUB 2250:RETURN
9865 GOSUB 2000
9870 X=ASC(SC$(1)): IF X/2=INT(X/2) THEN X=X-1
9871 IF S<>2 THEN GOSUB 2185 ELSE GEN$=FILE$
9872 LAST=0
9875 GOSUB 2100
9880 GOSUB 2620
9890 TOTALCK#=0:TOTALD#=0:TOTALA#=0:TOTALC#=0
9895 FOR I=1 TO NUMOFCODES
9896 IF SC$(I)="--" THEN HEAD$="PROGRAM CODE":GOSUB 2715:GOTO 9900
9897 GOSUB 2700
9900 TA#=0:TD#=0:TCK#=0:TC#=0:Q=0
9905 FILE$="SORT"+SC$(I):Y=1:GOSUB 2200
9910 GOSUB 2230:IF F=1 THEN CLOSE:GOSUB 2250:GOTO 9930
9915 GOSUB 2785
9917 IF SC$(I)="--" THEN GOSUB 9950:IF A$="Y" GOTO 9910
9925 GOSUB 4897:GOTO 9910
9930 GOSUB 2750
9940 CLS:NEXT
9945 IF S<>1 THEN GOSUB 2780 ELSE GOSUB 4008
9947 RETURN
9950 A$=" ":IF LEFT$(ID$,6)="RECORD" THEN A$="Y":RETURN
9955 IF LEFT$(ID$,10)=STRING$(10,48) THEN ID$=SPACE$(23):RETURN ELSE RETURN
10000 ACL=FCL\100:BCL=INT(FCL) MOD 100:CCL=INT((FCL-INT(FCL))*100):LOCATE ACL,BCL:PRINT SPACE$(CCL);:RETURN
10050 CLS
10055 GOSUB 10155
10060 COLOR 15,0
10065 LOCATE 11,6,0
10070 PRINT"PPPP P    CCCCCCC       CCCCCCC   H     H   EEEEEEE   CCCCCCC   K    K"
10075 GOSUB 10145
10080 LOCATE 12,6,0
10085 PRINT"P     P   C             C         H     H   E         C         K K   "
10090 GOSUB 10145
10095 LOCATE 13,6,0
10100 PRINT"P PPP     C       ----- C         HHHHHHH   EEEEEE    C         KK    "
10105 GOSUB 10145
10110 LOCATE 14,6,0
10115 PRINT"P         C             C         H     H   E         C         K   K  "
10120 GOSUB 10145
10125 LOCATE 15,6,0
10130 PRINT"P         CCCCCCC       CCCCCCC   H     H   EEEEEEE   CCCCCCC   K     K"
10135 COLOR 7,0
10140 GOTO 10220
10145 FOR I=1 TO 450:NEXT
10150 RETURN
10155 COLOR 31
10160 FOR I=2 TO 79
10165 LOCATE 9,I,0:PRINT"*":LOCATE 17,I,0:PRINT"*"
10170 FOR TIME=1 TO 20:NEXT TIME
10175 NEXT I
10180 FOR I=10 TO 16:LOCATE I,2,0:PRINT"*":LOCATE I,79,0:PRINT"*"
10185 FOR TIME=1 TO 200:NEXT TIME
10190 NEXT I
10195 RETURN
10220 COLOR 7,0
10225 LOCATE 19,31,0: PRINT"BY CYNTHIA HOLLEN":LOCATE 20,33,0: PRINT" HOLCOM INC.":LOCATE 21,36,0:PRINT" 7/84"
10230 FOR TIME=1 TO 1000:NEXT TIME
10235 RETURN
10300 CLS:LOCATE 13,31: COLOR 31: PRINT"*** CHECKING DISK":COLOR 7,0
10310 ON ERROR GOTO 10360
10315 OPEN "I",1,"WORKFILE":CLOSE
10320 ON ERROR GOTO 10350
10325 OPEN "I",1,"OLDFILE":CLOSE
10330 ON ERROR GOTO 10380
10335 OPEN "I",1,"CATALOG":INPUT#1,CF$:CLOSE
10340 NAME "WORKFILE" AS CF$: KILL "OLDFILE":GOTO 10395
10350 RESUME 10355:' FROM 10320
10355 KILL "WORKFILE":GOTO 10395
10360 RESUME 10365:' FROM 10310
10365 ON ERROR GOTO 10375
10370 OPEN "I",1,"OLDFILE":CLOSE:KILL"OLDFILE":GOTO 10395
10375 RESUME 10395
10380 CLS:LOCATE 12,18:PRINT"DUE TO AN ERROR IN THE LAST RUN OF PC-CHECK":LOCATE 13,16:PRINT"ON THIS DISK, THE LAST FILE EDITED HAS THE NAME"
10381 CF$=" ":LOCATE 14,19:INPUT "WORKFILE. WHAT SHOULD THIS FILE BE RENAMED";CF$
10385 NEW=1:GOSUB 256:NEW=0:IF CF$="0" GOTO 10380
10387 GOSUB 647:IF A$="N" GOTO 10380
10390 RESUME 10340
10395 ON ERROR GOTO 10396:KILL "CATALOG":GOTO 10397
10396 RESUME 10397
10397 ON ERROR GOTO 0:CLS:RETURN
10400 CLS:LOCATE 13,31:COLOR 31:PRINT"****CHECKING DISK":COLOR 7,0
10405 ON ERROR GOTO 10415
10410 OPEN"O",1,"B:FILE":CLOSE:KILL "B:FILE":ON ERROR GOTO 0:RETURN
10415 CLS:LOCATE 13,23:PRINT"PLACE DESTINATION DISK IN DRIVE B":GOSUB 4008:RESUME 10400
10500 CLS:LOCATE 2,34:COLOR 0,7:PRINT " PC-CHECKtm ":COLOR 7,0:RESTORE 10505:FOR I=1 TO 18:READ ROW,C,MESSAGE$:LOCATE ROW,C:PRINT MESSAGE$:NEXT:GOSUB 4008:RETURN
10505 DATA 3,33,"****NOTICE****",4,1," If you have received this program from another user or user group, and find it",5,1,"of value, your $40 contribution will be appreciated."
10510 DATA 6,2,"With your contribution, you will receive a full, printed, 40 page documen-",7,1,"tation manual, one free revised version of PC-CHECKtm when it becomes available,",8,1,"and free consultation about your PC-CHECKtm program."
10511 DATA 10,34,"HolCom Inc.",11,22,"P.O. BOX #641, Eatontown, N.J. 07724",13,2,"You are encouraged to copy this program and distribute it to other IBM PC or",14,1,"IBM PC compatible users under the following guidelines:"
10515 DATA 16,4,"*Do not distribute PC-CHECKtm on other than a private, non-commercial basis",17,4,"*Do not distribute PC-CHECKtm in connection with any other product",18,4,"*Do not make PC-CHECKtm available for any consideration or fee"
10520 DATA 19,4,"*Do not distribute PC-CHECKtm in modified form",21,2,"If you have any suggestions or alterations that you feel would better",22,1,"PC-CHECKtm, please send them to the above address. We will consider all",23,1
10525 DATA "comments in our revisions of this program.",25,25,"COPYRIGHT (c) 1984 HolCom Inc."
```
{% endraw %}

## REGIS.DOC

{% raw %}
```

              PC-CHECKtm PRODUCT REGISTRATION FORM

	Here is my contribution for PC-CHECKtm. Please register me 
with your company and send me my complimentary full, 40 page printed
documentation. I understandthat I will also be advised when a new version
of PC-CHECKtm becomes available so that I can receive my free revision.
Please also send me an address/ phone number that I can use for 
customer support.

NAME OF COMPANY __________________________________________________

MY NAME         __________________________________________________

ADDRESS         __________________________________________________

__________________________________________________________________

PHONE NUMBER   ___________________________________________________

COMMENTS OR SUGGESTIONS FOR PC-CHECKtm  __________________________

__________________________________________________________________

__________________________________________________________________

__________________________________________________________________

	I understand that I am encouraged to copy the PC-CHECKtm
program to give it to other users, but that the full printed 
documentation is not to be distributed.

                                 
  
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0282

     Volume in drive A has no label
     Directory of A:\

    MERGE    EXE     39680   1-01-80  12:06a
    CBD      BAS     20854   2-05-85  12:12p
    CBD      DAT       670   2-02-85  12:00p
    CBD-READ ME      39638   2-08-85  12:00p
    HELP     BAT       896   1-01-80  12:06a
    AUTOEXEC BAT       384   1-01-80   3:05a
    PC-CHECK BAS     44928   1-01-80   2:08a
    PC-CHECK DOC     16896   1-01-80   1:22a
    REGIS    DOC      1280   1-01-80   3:18a
    SMPLCODE CO        384   1-01-80   1:02a
    SMPLCHK            512   1-01-80  12:20a
    STKANALY SIS     12160   1-01-80  12:23a
    DATAST             896   1-01-80  12:24a
    STKANAL  DOC      3200   1-01-80  12:56a
    ANALYST  EXE    104576   1-23-84   9:53p
    SAMPLE   HFA       384   1-21-84   4:51p
    ANALYST  DOC      9049   1-28-84   3:59p
           17 file(s)     296387 bytes
                           18432 bytes free
