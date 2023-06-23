---
layout: page
title: "PC-SIG Diskette Library (Disk #638)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0638/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0638"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SUPERSTAT 1 OF 2 (ALSO 639)"

    SuperSTat Share is a shareware Statistical Package for analyzing the
    results of Market surveys and poles. The statistical analysis is very
    complete. The program is operated by choosing items from menus and
    filling in forms on the screen. This version allows 25 variables
    and 50 data columns with up to nine values to the variable.
    
    This is a two disk set that requires both to function.
    
    System Requirements:  128K, two disk drives, Hercules graphics display,
    Epson-compatible printer.
    
    How to Start:  After consulting the NOTES638.TXT and SST.DOC for
    information, initiate the program by entering SSTMENU at the DOS
    prompt.
    
    Suggested Registration:  $35.00; $20.00 for students.
    
    File Descriptions:
    The First Disk Contains:
    SCATTER  EXE  Scatter plot program
    SSTMENU  EXE  Main menu and system management program
    FREQ     EXE  Frequency distribution analysis program
    CROSS    EXE  Cross tabulate program
    SST      DEF  System configuration file
    TEST     TTL  Analysis Module
    TEST     DTA  Analysis Module
    TEST     APD  Analysis Module
    TEST     VRN  Analysis Module
    INT      APD  Analysis Module
    INT      DTA  Analysis Module
    INT      TTL  Analysis Module
    INT      VRN  Analysis Module
    
    The Second Disk Contains:
    SSTMENU  EXE  The menu and system management program
    SST      DEF  Configuration file
    DATAMAN  EXE  The data management module
    FILEMAN  EXE  The file management module
    CODEMAN  EXE  The code entry module
    SST      DOC  The short form of the SST Manual
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES638.TXT

{% raw %}
```
----------------------------------------------------------------------------
Disk No  638   SST Version 1.00  (Disk 1 of 2)                     V1   DS2
----------------------------------------------------------------------------
SuperSTat Share is a shareware Statistical Package for analyzing the results
of Market surveys and poles. The statistical analysis is very complete. The
program is operated by choosing items from menus and filling in forms on the
screen. This version allows 25 variables and 50 data columns with up to nine
values to the variable.
 
SCATTER  EXE    Scatter plot program
CROSS    EXE    Cross tabulate program
FREQ     EXE    Frequency distribution analysis program
SSTMENU  EXE    Main menu and system management program
SST      DEF    System configuration file
TEST     VRN    Analysis Module
TEST     APD    Analysis Module
TEST     DTA    Analysis Module
TEST     TTL    Analysis Module
INT      DTA    Analysis Module
INT      APD    Analysis Module
INT      TTL    Analysis Module
INT      VRN    Analysis Module
 
PC Software Interest Group (PC-SIG)
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1986
```
{% endraw %}

## GO.TXT

{% raw %}
```
This disk contains the program: SUPERSTAT Share
 
To find out about this program: "PRINT" or "TYPE" these files:
 
SST.DOC         The user's Manual. This is on the other disk.
 
to print the Manual type:  PRINT SST.DOC and press ENTER  or
                    type:  COPY SST.DOC PRT1 and press ENTER
 
To print the other documents, use the same commands with the appropriate
file name.
 
PC Software Interest Group (PC-SIG)
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1986
```
{% endraw %}

## NOTES638.TXT

{% raw %}
```
Program name:  SST  v. 1.00
 
Author name:(C) 1986 Derby Micro-Computer Services, Inc.
 
Address:             P.O. Box 220566
                     Charlotte, NC  28222
 
Telephone Number:   (704) 536-7721
 
Program Classification: Statistics for Market Surveys
 
Registration Fee: $35.00;  students $20.00
                  A full commercial version is available.
 
Program Description:  This is a two disk set.
 
Superstat Share is a shareware Statistical Package for analyzing the results
of Market surveys and other questioneers (poles). It allows weighting the
data set, encryption of your data and automating analysis by using special
batch file commands. The statistical analysis is very complete. The program
is operated by choosing items from menus and filling in forms on the screen.
 
This version allows 25 variables and 50 data columns with up to nine values
to the variable.  The commercial version allows 250 variables and 250 data
columns with up to 9 values each. Both versions handle an unlimited number
of records.
 
This version of SST runs under MS/PC/DOS 2.0 or higher on any IBM PC/XT/AT or
compatible with a color monitor, a monochrome monitor, or a Hercules
monochrome graphics card. It needs a hard disk or two floppies and an EPSON
compatible printer.
 
There are three analysis modules; FREQ, CROSS, and SCATTER. Graphics is
provided in the form of bar and scatter charts.
 
There are measures for nominal to nominal association and significance,
ordinal to ordinal association and significance, and nominal to ordinal
association and significance. Cramer's V is provided as well, along with the
degrees of freedom, N, and missing values.
 
You are also provided row, column, and total percentages and the cells counts
as well as complete information on row and column totals and missing values.
 
You are provide stats for bi-variate correlation, regression, and one-way
ANOVA, as well as descriptive stats on the individual variables.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0638

     Volume in drive A has no label
     Directory of A:\

    CROSS    EXE     79050   8-23-86   3:02p
    FILES638 TXT      1191   1-04-80   4:53p
    FREQ     EXE     68602   8-23-86   3:04p
    GO       BAT        28  11-27-86  12:31p
    GO       TXT       518   1-04-80   4:54p
    INT      APD         8   7-06-86   9:57p
    INT      DTA       443   7-06-86   9:57p
    INT      TTL       112   7-06-86   9:57p
    INT      VRN         9   7-06-86   9:57p
    NOTES638 TXT      2010   1-04-80   4:56p
    SCATTER  EXE     75946   8-23-86   3:21p
    SST      DEF       158   8-23-86   3:14p
    SSTMENU  EXE     52106   8-23-86   3:05p
    TEST     APD         8   3-17-86   1:39p
    TEST     DTA       920   3-17-86   1:41p
    TEST     TTL      1005   4-10-86   2:48p
    TEST     VRN        11   3-17-86   1:46p
           17 file(s)     282125 bytes
                           29696 bytes free
