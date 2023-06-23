---
layout: page
title: "PC-SIG Diskette Library (Disk #947)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0947/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0947"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "KINETICS"

    KINETICS calculates dosages of several commonly-used drugs such as
    Aminoglycosides, Theophylline, Heparin and Vancomycin.  Estimate initial
    doses based on calculated lean body weight, body surface area, and/or
    creatinine clearance.  Calculate individualized maintenance dosage based
    on serum-level data.
    
    Included are general drug-dosing recommendations for 82 drugs which
    require dosage reduction in patients with diminished renal function.
    Print a chart-ready dosing consultation form.  KINETICS also features a
    comprehensive patient database management.
    
    These programs should be used by a clinical pharmacist or a physician
    with training in pharmacokinetic dosing of drugs.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES947.TXT

{% raw %}
```
Disk No:  947
Program Title: KINETICS version 3.6b
PC-SIG version: 2.1

KINETICS calculates dosages of several commonly-used drugs such as
Aminoglycosides, Theophylline, Aminophylline, and Vancomycin.  Dosage
calculations for Digoxin and Phenytoin are available in the registered
version of the program.  With this program, you can estimate initial
doses based on calculated lean body weight, body surface area, and/or
creatinine clearance.  You can also calculate individualized maintenance
dosage based on serum-level data.

Also included are general drug-dosing recommendations for seventy-eight
drugs which require dosage reduction in patients with diminished renal
function.  All programs will print a chart-ready dosing consultation.
These programs are meant to be used by either a clinical pharmacist or a
physician with training in pharmacokinetic dosing of drugs.

Users that register this program receive a registered version of
KINETICS with an expanded data-base and a complete user's manual.

Usage:  Pharmokinetic Dosing.

Special Requirements:  CGA graphics or better.

How to Start:  Type GO (press enter).

Suggested Registration:  $100.00

File Descriptions:

??            Drug tables (85 files).
BYDATE   PAR  Parameter file for Cheapsort.
BYDOC    PAR  Parameter file for Cheapsort.
BYDRUG   PAR  Parameter file for Cheapsort.
BYNAME   PAR  Parameter file for Cheapsort.
BYRPH    PAR  Parameter file for Cheapsort.
CSORT    BAT  Batch file to start Cheapsort.
CSORT    DAT  Parameter file for Cheapsort.
CSORT3   EXE  Cheapsort 3 sorting utility.
DELETE   COM  PC Magazine delete program.
GO       BAT  Batch file to type how to start the program.
KINETICS EXE  Main program.
KN       BAT  Batch file to start up program.
LPRINT   BAT  Batch file to print drug table to printer.
MANUAL        Program Documentation.
NOECHO   COM  Sub-program.
PRINT    BAT  Batch file to print drug table to screen.
PRINTMAN BAT  Batch file to print user's manual.
README   1    Warning screen.
README   TXT  How to start the program.
REPORT   DAT  Data file.
REPORT   NDX  Index file for Cheapsort.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## README.TXT

{% raw %}
```
         Please head all warnings, disclaimers, and limitations.
 
         You must make a working copy before doing anything else!!
         1.   Format a blank floppy using the /s switch:
              A>FORMAT B: /s
         2.   Copy all files from this disk:
              A>COPY *.* B:
 
         To print the user's manual, enter PRINTMAN at the DOS prompt:
              A>PRINTMAN
 
         To start the program, enter KN at the DOS prompt:
              A>KN
 
         To obtain a registered version of KINETICS with an expanded
         data-base and a complete user's manual, please send $ 100.00
         and the name you want printed on your customized consultation
         form to:
 
              Rick Tharp
              1712 E. 9th St.
              Trenton, MO  64683
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0947

     Volume in drive A has no label
     Directory of A:\

    1                  490  12-14-88   9:29a
    2                  720  12-14-88   9:29a
    3                  483  12-14-88   9:30a
    4                  535  12-14-88   9:30a
    5                  320  12-14-88   9:30a
    6                  358  12-14-88   9:30a
    7                  403  12-14-88   9:30a
    8                  411  12-15-88  11:45a
    9                  514  12-15-88  11:46a
    10                 509  12-14-88   9:31a
    11                 652  12-14-88   9:31a
    12                 576  12-14-88   9:32a
    13                 785  12-15-88  11:47a
    14                 574  12-14-88   9:32a
    15                 511  12-14-88   9:32a
    16                 581  12-14-88   9:32a
    17                 665  12-14-88   9:33a
    18                 609  12-14-88   9:33a
    19                 584  12-14-88   9:33a
    20                 571  12-14-88   9:33a
    21                 569  12-14-88   9:33a
    22                 539  12-15-88  11:50a
    23                 516  12-14-88   9:34a
    24                 702  12-14-88   9:34a
    25                 617  12-14-88   9:34a
    26                 785  12-14-88   9:35a
    27                 538  12-14-88   9:35a
    28                 537  12-14-88   9:35a
    29                 620  12-14-88   9:35a
    30                 543  12-14-88   9:35a
    31                 494  12-14-88   9:35a
    32                 649  12-14-88   9:35a
    33                 679  12-14-88   9:36a
    34                 541  12-14-88   9:36a
    35                 435  12-14-88   9:36a
    36                 611  12-14-88   9:36a
    37                 434  12-14-88   9:37a
    38                 531  12-15-88  11:53a
    39                 382  12-15-88  11:55a
    40                 563  12-14-88   9:37a
    41                 406  12-14-88   9:37a
    42                 408  12-14-88   9:38a
    43                 656  12-15-88  11:57a
    44                 531  12-14-88   9:38a
    45                 556  12-14-88   9:38a
    46                 513  12-14-88   9:39a
    47                 545  12-14-88   9:39a
    48                 606  12-14-88   9:39a
    49                 584  12-14-88   9:39a
    50                 547  12-14-88   9:39a
    51                 533  12-14-88   9:39a
    52                 530  12-14-88   9:40a
    53                 544  12-14-88   9:40a
    54                 591  12-14-88   9:40a
    55                 511  12-14-88   9:40a
    56                 573  12-15-88  12:02p
    57                 536  12-14-88   9:40a
    58                 449  12-14-88   9:41a
    59                 522  12-14-88   9:41a
    60                 529  12-14-88   9:41a
    61                 347  12-14-88   9:41a
    62                 542  12-14-88   9:41a
    63                 532  12-14-88   9:41a
    64                 543  12-15-88  12:03p
    65                 537  12-14-88   9:42a
    66                 313  12-14-88   9:42a
    67                 295  12-14-88   9:42a
    68                 412  12-14-88   9:42a
    69                 457  12-14-88   9:42a
    70                 554  12-14-88   9:42a
    71                 498  12-14-88   9:42a
    72                 354  12-14-88   9:43a
    73                 368  12-14-88   9:43a
    74                 351  12-14-88   9:43a
    75                 611  12-14-88   9:43a
    76                 555  12-14-88   9:43a
    77                 485  12-14-88   9:43a
    78                 488  12-14-88   9:44a
    79                 475  12-15-88  12:07p
    80                 298  12-14-88   9:44a
    81                 460  12-14-88   9:44a
    82                 299  12-14-88   9:44a
    83                 559  12-14-88   9:44a
    84                 486  12-14-88   9:44a
    85                 243  12-14-88   9:45a
    BYDATE   PAR        66  11-14-88   2:37p
    BYDOC    PAR        66  11-14-88   2:37p
    BYDRUG   PAR        66  11-14-88   2:36p
    BYNAME   PAR        66  11-14-88   2:36p
    BYRPH    PAR        66  11-14-88   2:36p
    CSORT    BAT        71  11-15-88   4:28p
    CSORT    DAT        65  11-11-88  12:40p
    CSORT3   EXE     25472  12-15-88   9:16p
    DELETE   COM       239   6-01-88  12:00p
    FILES947 TXT      2269   2-14-89   4:42p
    GO       BAT        32   2-03-89  12:07p
    KINETICS EXE    137934   2-02-89   1:01p
    KN       BAT        47  10-19-88   1:16p
    LPRINT   BAT        42   2-03-89  12:30p
    MANUAL           35484   2-02-89   1:36p
    NOECHO   COM        65   6-01-88  12:00p
    PRINT    BAT        31   2-03-89  12:30p
    PRINTMAN BAT        92   2-01-89  11:28a
    README   1         731   3-16-88   9:25a
    README   TXT       813   2-03-89  12:28p
    REPORT   DAT         0   2-03-89  12:29p
    REPORT   NDX       500  11-16-88   1:55p
          107 file(s)     248085 bytes
                           15360 bytes free
