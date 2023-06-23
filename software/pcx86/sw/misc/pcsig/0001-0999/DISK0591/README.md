---
layout: page
title: "PC-SIG Diskette Library (Disk #591)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0591/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0591"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "GENESIS"

    GENESIS is a program designed to work with TRAVELLER (a science fiction
    role playing game) from Game Designers Workshop. It helps to speed up
    the process of setting up planets by the referee and handles aspects
    such as planetary size, atmosphere and population.
    
    System Requirements:  128K, one disk drive, monochome monitor,
    Traveller software.
    
    How to Start:  To read DOC files, enter TYPE filename.ext and press
    <ENTER>.  To run a BAT file, just type its name and press <ENTER>.
    
    File Descriptions:
    
    README   NEW  File with list of revisions
    SECTOR   CHN  Planet sctor detail file
    SETUP    BAT  Batch file for setup
    SYSTEM1  DAT  System data file to set up planet
    GENESIS  COM  Main GENESIS program
    PLANET   CHN  Planet detail file
    SUBSEC   CHN  Planet subsector detail file
    AUTOEXEC BAT  Auto-execute file
    GENESIS  DOC  System documentation with users guide
    --GNSS10 DID  Genesis system work file
    PLANET   000  Sample planet detail file
    README   NOW  Introduction to GENESIS with feature list
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES591.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  591  GENESIS  Ver 1.0                                     v1 DS2
---------------------------------------------------------------------------
GENESIS is a program designed to work with TRAVELLER ( a science fiction
game ) from Game Designers Workshop. It helps to speed up the process of
setting up planets by the referee and handles aspects such as planetary
size, atmosphere and population.
 
README   NEW  File with list of revisions
SETUP    BAT  Batch file for setup
SECTOR   CHN  Planet sctor detail file
SUBSEC   CHN  Planet subsector detail file
PLANET   CHN  Planet detail file
GENESIS  COM  Main GENESIS program
SYSTEM1  DAT  System data file to set up planet
GENESIS  DOC  System documentation with users guide
AUTOEXEC BAT  Auto-execute file
README   NOW  Introduction to GENESIS with feature list
PLANET   000  Sample planet detail file
--GNSS10 DID  Genesis system work file
 
PC-SIG (Software Interest Group)
1030 East Duane Avenue, Suite D
Sunnyvale, CA  94086
(408) 730-9291
```
{% endraw %}

## NOTES591.TXT

{% raw %}
```
Program name:          GENESIS Version 1.0
 
Author name:           Jim D. Hart & Craig Schiller
Address:               Synergy Software of Nebraska, Papillon, NE 68046
 
Suggested Donation:    $ 20.00
 
Program Description:   GENESIS is a package designed to help set up planets
                       for the game TRAVELLER form Game Designers Workshop.
                       It would be of interest to people familiar with
                       the TRAVELLER game.
 
                       GENESIS is capable of reducing the time needed by
                       a referee to set up planets and sectors for the game
                       or TRAVELLER which is available from :
                       Game Designers Workshop,
                       PO Box 1646, Bloomington, Il 61701
 
                       In addition to help speed up planet sector creation,
                       it will also implement planetary features such as
                       size, atmosphere and population.
 
                       GENESIS  needs 256 Kb RAM, 1 drive and DOS 2.1 or
                       above to run.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0591

     Volume in drive A has no label
     Directory of A:\

    --GNSS10 DID      1664   6-07-86   9:53a
    AUTOEXEC BAT         8   6-07-86   9:53a
    GENESIS  COM     36472   6-07-86   9:53a
    GENESIS  DOC    102016   6-07-86   9:54a
    PLANET   000     12416   6-07-86   9:54a
    PLANET   CHN     42486   6-07-86   9:54a
    README   NEW      2295   6-07-86   9:54a
    README   NOW      1738   6-07-86   9:54a
    SECTOR   CHN     27270   6-07-86   9:54a
    SETUP    BAT       602   6-07-86   9:54a
    SUBSEC   CHN     26398   6-07-86   9:54a
    SYSTEM1  DAT      4758   6-07-86   9:55a
    GO       BAT       696   8-19-86  11:33a
    NOTES591 TXT      1133   8-19-86  11:34a
    FILES591 TXT      1102   8-25-86   5:38p
           15 file(s)     261054 bytes
                           53248 bytes free
