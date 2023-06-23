---
layout: page
title: "PC-SIG Diskette Library (Disk #984)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0984/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0984"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOUBLE BOGIE KILLER AND GOLF DATABASE"

    DOUBLE BOGIE KILLER is a golf stats/database used to track on-course
    performance.
    
    For each hole played, three data items are recorded: gross, putts and
    fairways.  Course data such as yardages, hole pars and course ratings
    are taken from the scorecard and recorded into the course database.
    Your stats for each round are entered into your player file.
    
    The following reports can be run at any time after the first hole has
    been entered: overall summary, course by course review, USGA handicap
    and nine-hole handicap report, scoring percentages and efficiency
    Analysis. Send reports to a disk or printer.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES984.TXT

{% raw %}
```
Disk No:  984
Program Title: DOUBLE BOGIE KILLER
PC-SIG version: 2.3

DOUBLE BOGIE KILLER is a golf game database program which will keep
track of the scores of the games you have played.  Like most programs,
DBK is controlled by menus.  Through these, you can enter course data,
record a round of golf, print a summary, output the entire .GLF file to
disk, show all golfers on disk, and display all courses entered,
utilities, and help screens.  Currently, DBK generates five different
reports.  Any of these reports can be run alone or in any combination,
thus allowing you to save paper when printing the reports.

Usage:  Golf Stats/Handicap Database.

Special Requirements:  Two disk drives.

How to Start:  Type GO (press enter).

Suggested Registration:  $20.00

File Descriptions:

???????  HLP  Help file (46 files).
COMBINE  OVR  Module to combine data files.
COURSE   DAT  Some golf courses in Michigan (demo file).
COURSE   PIC  Picture file.
CRSCHK   EXE  Sub-program.
CURSOR   FIX  Restores cursor upon exit.
DBK      BAT  Batch file to start program.
DBK!     COM  Primary Database/Analysis (main program).
DTADRIVE DEF  Data file.
GETFILE2 PIC  Picture file.
GETFILE3 PIC  Picture file.
GLFHLP   OVR  Pull-down for help files.
GOLFEND  CHN  Produces an ending quote.
GOLFMAIN 000  Overlays for the main program.
GOLFMAIN 001  Overlays for the main program.
GOLFMAIN 002  Overlays for the main program.
GOLFMAIN 003  Overlays for the main program.
GOLFMAIN CHN  Primary Database/Analysis (main program).
HELP          A text file printable via READ.
HELP     BAT  Batch file for help.
HELPFILE      Message displayed if F1 key is pressed within DBK.EXE.
READ     EXE  Text file reader/printer.
RESULTS  PIC  Picture file.
SLOPE    CHN  Module to calculate temporary SLOPE ratings.
SUMONE   000  Summary module.
SUMONE   CHN  Summary module.
TEMSLOPE FEM  SLOPE data for women.
TEMSLOPE MEN  SLOPE data for men.
VIEW     CHN  Data file.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║             <<<<  Disk No 984 DOUBLE BOGIE KILLER  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type DBK (press enter)                            ║
║                                                                         ║
║ For help with the program, type HELP (press enter)                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0984

     Volume in drive A has no label
     Directory of A:\

    AM       HLP      1644   2-17-89   3:00a
    AP       HLP      1742   2-17-89   3:00a
    COMBINE  OVR      6691   2-17-89   3:00a
    COURSE   DAT      9018   2-17-89   3:00a
    COURSE   PIC      3776   2-17-89   3:00a
    CRSCHK   EXE      9968   2-17-89   3:00a
    CURSOR   FIX       159   2-17-89   3:00a
    DB       HLP      1703   2-17-89   3:00a
    DBK!     COM     21476   2-17-89   3:00a
    DBK      BAT         6   2-17-89   3:00a
    DH       HLP      1501   2-17-89   3:00a
    DR       HLP      1549   2-17-89   3:00a
    DT       HLP      1292   2-17-89   3:00a
    DTADRIVE DEF         4   2-17-89   3:00a
    FA       HLP      1790   2-17-89   3:00a
    FC       HLP      1783   2-17-89   3:00a
    FL       HLP      1703   2-17-89   3:00a
    FM       HLP      1528   2-17-89   3:00a
    FO       HLP      1707   2-17-89   3:00a
    FP       HLP      1734   2-17-89   3:00a
    FR       HLP      1798   2-17-89   3:00a
    FS       HLP      1650   2-17-89   3:00a
    FT       HLP      1637   2-17-89   3:00a
    FU       HLP      1568   2-17-89   3:00a
    GETFILE2 PIC       960   2-17-89   3:00a
    GETFILE3 PIC       976   2-17-89   3:00a
    GLFHLP   OVR     12076   2-17-89   3:00a
    GOLFEND  CHN     19353   2-17-89   3:00a
    GOLFMAIN 000     43008   2-17-89   3:00a
    GOLFMAIN 001      3072   2-17-89   3:00a
    GOLFMAIN 002      5632   2-17-89   3:00a
    GOLFMAIN 003      6144   2-17-89   3:00a
    GOLFMAIN CHN     27637   2-17-89   3:00a
    HA       HLP      2941   2-17-89   3:00a
    HB       HLP      1536   2-17-89   3:00a
    HD       HLP      1909   2-17-89   3:00a
    HELP              2345   2-17-89   3:00a
    HELP     BAT        11   2-17-89   3:00a
    HELPFILE             8   2-17-89   3:00a
    HH       HLP      1366   2-17-89   3:00a
    HR       HLP      1154   2-17-89   3:00a
    HS       HLP      1789   2-17-89   3:00a
    JA       HLP       145   2-17-89   3:00a
    JB       HLP       827   2-17-89   3:00a
    JC       HLP       225   2-17-89   3:00a
    JD       HLP       234   2-17-89   3:00a
    JE       HLP       128   2-17-89   3:00a
    JF       HLP       168   2-17-89   3:00a
    JG       HLP       167   2-17-89   3:00a
    JH       HLP       152   2-17-89   3:00a
    JI       HLP       493   2-17-89   3:00a
    JJ       HLP       179   2-17-89   3:00a
    JK       HLP       442   2-17-89   3:00a
    JL       HLP       151   2-17-89   3:00a
    JM       HLP       164   2-17-89   3:00a
    JN       HLP       166   2-17-89   3:00a
    JO       HLP       191   2-17-89   3:00a
    LD       HLP      1229   2-17-89   3:00a
    LO       HLP      2370   2-17-89   3:00a
    LS       HLP      2072   2-17-89   3:00a
    OB       HLP      1605   2-17-89   3:00a
    OE       HLP      1848   2-17-89   3:00a
    OK       HLP      1437   2-17-89   3:00a
    OM       HLP      1676   2-17-89   3:00a
    OP       HLP      1587   2-17-89   3:00a
    OS       HLP      1697   2-17-89   3:00a
    READ     EXE     12304   2-17-89   3:00a
    RESULTS  PIC      3584   2-17-89   3:00a
    SLOPE    CHN      4081   2-17-89   3:00a
    SUMONE   000      6912   2-17-89   3:00a
    SUMONE   CHN     48807   2-17-89   3:00a
    TEMSLOPE FEM      3522   2-17-89   3:00a
    TEMSLOPE MEN      3522   2-17-89   3:00a
    VIEW     CHN      2802   2-17-89   3:00a
    FILES984 TXT      2119   3-09-89   3:52p
    GO       BAT        38   1-18-88   1:38p
    GO       TXT       540   3-09-89   3:54p
           77 file(s)     316928 bytes
                            6144 bytes free
