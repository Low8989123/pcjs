---
layout: page
title: "PC-SIG Diskette Library (Disk #332)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0332/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0332"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "KLP DTA AND MUA"

    The Kinetics Linear Programming (KLP) System requires a knowledge with
    linear (LP) programming.  KLP in an integrated software system which
    can be used to define, solve, review and refine a linear programming
    problem.  Although no other software is necessary, KLP can be used
    with VisiCalc, Lotus 1-2- 3, and SuperCalc 2.  KLP is an integrated
    software system that allows you to solve linear programming problems
    of considerable complexity.  The results can be printed, saved to the
    disk, or written to a spreadsheet input file.
    
    System Requirements: Printer with condensed print capabilities (132
    columns).
    
    How to Start: Consult the .DOC and README files for directions and
    documentation.  To run the BASIC programs, consult the directions in
    GETTING STARTED for your configuration.  To run any of these programs,
    just type its name, i.e., for KLP.EXE, type KLP <ENTER>.
    
    Suggested Registration: KLP $45.00
    
    File Descriptions:
    
    MUMSG    TXT  Message file
    MU       EXE  MULTIATTRIBUTE UTILITY ANALYSIS
    COBRUN   EXE  Microsoft COBOL Runtime Monitor (Both DT & MU need it)
    MESSAGE  TXT  Message file
    MESSAGE  KEY  Message file
    DTDATA   S-1  Sample data file
    DT       EXE  DECISION TREE ANALYSIS: A technique to analyze
    -------- ---  DECISION TREE ANALYSIS & MULTIATTRIBUTE UTILITY ANALYSIS
    README   KLP  Documentation (brief introduction)
    KLP      DOC  Documentation (27pp) manual
    FURNFAC  TXT  Results file
    FURNFAC  SSI  Spreadsheet output
    FURNFAC  MAT  Furniture factory problem
    FURNFAC  DMP  Matrix print file
    KLP      EXE  System can integrate Lotus, SuperCalc or VisiCalc
    -------- ---  KINETICS LINEAR PROGRAMMING SYSTEM     (version 1.9)
    MUMSG    KEY  Message file
    MUDATA   S-1  Sample data file
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES.TXT

{% raw %}
```
KINETICS LINEAR PROGRAMMING SYSTEM     (version 1.9)
 
+---------------------------------------------------------------+
|  This public domain media material is made available to club  |
|  membership, for its use and distribution, by the following:  |
|                       KINETICS SOFTWARE                       |
|        (1390 Fell St., #103, San Francisco, CA  94117)        |
|  If, after trial, one finds the software application useful,  |
|  SFpcUG encourages your becoming a registered user (a fee of  |
|  $45 entitles the registrant to updates and other versions).  |
+---------------------------------------------------------------+
 
Name           Description
 
KLP     .EXE   System can integrate Lotus, SuperCalc or VisiCalc
FURNFAC .DMP   ^Matrix print file          +------------+
FURNFAC .MAT   ^Furniture factory problem  |   SAMPLE   |
FURNFAC .SSI   ^Spreadsheet output         | KLP WORKUP |
FURNFAC .TXT   ^Results file               +------------+
KLP     .DOC   ^Documentation (27pp) manual
README  .KLP   ^Documentation (brief user-support introduction)
 
 
DECISION TREE ANALYSIS & MULTIATTRIBUTE UTILITY ANALYSIS
 
Index   Name           Description
 
DT      .EXE   DECISION TREE ANALYSIS: A technique to analyze
                decision tree problems
DTDATA  .S-1   Sample data file
MESSAGE .KEY   Message file
MESSAGE .TXT   Message file
COBRUN  .EXE   Microsoft COBOL Runtime Monitor (Both DT & MU need it)
MU      .EXE   MULTIATTRIBUTE UTILITY ANALYSIS: A technique to
                analyze procurement/selection/acquisition problems
MUMSG   .TXT   Message file
MUMSG   .KEY   Message file
MUDATA  .S-1   Sample data file
 
 
```
{% endraw %}

## FILES332.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 332  KLP Version 1.9                                    v1   DS
------------------------------------------------------------------------
 
------------  KINETICS LINEAR PROGRAMMING SYSTEM     (version 1.9)
KLP      EXE  System can integrate Lotus, SuperCalc or VisiCalc
FURNFAC  DMP  Matrix print file          +------------+
FURNFAC  MAT  Furniture factory problem  |   SAMPLE   |
FURNFAC  SSI  Spreadsheet output         | KLP WORKUP |
FURNFAC  TXT  Results file               +------------+
KLP      DOC  Documentation (27pp) manual
README   KLP  Documentation (brief introduction)
------------  DECISION TREE ANALYSIS & MULTIATTRIBUTE UTILITY ANALYSIS
DT       EXE  DECISION TREE ANALYSIS: A technique to analyze
               decision tree problems
DTDATA   S-1  Sample data file
MESSAGE  KEY  Message file
MESSAGE  TXT  Message file
COBRUN   EXE  Microsoft COBOL Runtime Monitor (Both DT & MU need it)
MU       EXE  MULTIATTRIBUTE UTILITY ANALYSIS: A technique to
               analyze procurement/selection/acquisition problems
MUMSG    TXT  Message file
MUMSG    KEY  Message file
MUDATA   S-1  Sample data file
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## FURNFAC.TXT

{% raw %}
```
KINETICS LINEAR PROGRAMMING SYSTEM     12-28-1983  01:01:33
            SAMPLE PROBLEM                  
 COLUMN VARIABLES 
   NAME    ACTIVITY    MINUMUM     MAXIMUM     RED. COST
STOOLS       0.000       0.000     500.000       0.000   
CHAIRS       0.000       0.000     500.000       0.000   
TABLES       0.000       0.000     500.000       0.000   
B BLOCK      0.000       0.000     100.000       0.000   
DOWELS       0.000       0.000     400.000       0.000   
LABOR        0.000       0.000     320.000       0.000   
 
 ROW CONSTRAINTS 
   NAME    ACTIVITY    MINUMUM     MAXIMUM     DUAL ACT.
B BLOCK      0.000       0.000       0.000       0.000   
DOWELS       0.000       0.000       0.000       0.000   
LABOR        0.000       0.000       0.000       0.000   
PROFIT       0.000       0.000       0.000       0.000   
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0332

     Volume in drive A has no label
     Directory of A:\

    KLP      EXE     68864   5-15-84   1:08a
    FURNFAC  SSI      2048   5-15-84  12:29a
    FURNFAC  TXT       896  12-28-83   1:01a
    FURNFAC  DMP      1024   1-01-80   1:53a
    FURNFAC  MAT       640  12-28-83   2:01a
    KLP      DOC     59904   1-01-80   1:25a
    README   KLP      1408   1-01-80  12:28a
    FILES    TXT      1707   4-29-85   1:59p
    DT       EXE     66560  12-22-84  12:15a
    DTDATA   S-1      3328   1-01-80  12:43a
    MESSAGE  KEY      1536   2-04-85   8:27a
    MESSAGE  TXT      1792   2-04-85   8:27a
    COBRUN   EXE     18560   1-01-80  12:03a
    MU       EXE     69888   1-12-85  12:48a
    MUMSG    TXT      2048   2-21-85   8:22p
    MUMSG    KEY      2048   2-21-85   8:22p
    MUDATA   S-1      2816  11-24-85   1:10a
    FILES332 TXT      1408   5-23-85   1:55p
           18 file(s)     306475 bytes
                            9216 bytes free
