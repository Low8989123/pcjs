---
layout: page
title: "PC-SIG Diskette Library (Disk #243)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0243/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0243"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "SAGE CALENDAR AND TAG"

    Sage Calendar is an electronic desk calendar.  It allows you to create
    memos, store addresses or record events.  The program will display
    active memos and create calendars for any date you select.  Tag was
    written for a seed company to produce tags.  It may be useful to
    others who need to produce multiple copies of several different tags.
    Both programs include documentation on disk.
    
    How to Start:  Review files marked .HLP and .PRN for directions on
    use.  To run either program, just type its name, i.e., for CAL.COM,
    enter CAL <ENTER>.
    
    Suggested Registration: $25.00 SAGE
    
    File Descriptions:
    
    -------- ---  Sage Calendar
    SCRN     OVL  On line help for Sage Calendar
    CAL      COM  Sage Calendar main program
    CALINST  BAT  Batch program to make working copy
    CAL      PRN  Documentaion for Sage Calendar
    TAG      COM  Sage Tag main program
    -------- ---  Sage Tag
    TAG      HLP  On line help for Sage Tag
    TAGINST  BAT  Batch program to make working copy
    TAG      PRN  Documentation for Sage Tag
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #243, version V1 
 
The following is a list of the file checksums which should be produced by
the CRCK4 program on this disk.  If the CRC numbers do not match the following
list you may have a bad file.  To use type:  CRCK4 <filespec>
 
CRCK4 output for this disk:
 

CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  CAL     .COM         CRC = AA 36

--> FILE:  SCRN    .OVL         CRC = E6 37

--> FILE:  CAL     .PRN         CRC = 76 4B

--> FILE:  CALINST .BAT         CRC = 0B AA

--> FILE:  TAG     .COM         CRC = 81 18

--> FILE:  TAG     .HLP         CRC = D6 31

--> FILE:  TAG     .PRN         CRC = EC BE

--> FILE:  TAGINST .BAT         CRC = 3B 2B

 ---------------------> SUM OF CRCS = 91 94

DONE 
 
These and other Public Domain and user-supported programs from:
 
PC Software Interest Group (PC-SIG)
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0243

     Volume in drive A has no label
     Directory of A:\

    CAL      COM     31199   6-03-84  11:46a
    CAL      PRN     51514   6-06-84   7:04p
    CALINST  BAT       696   8-16-84   5:05a
    CRC      TXT       958  12-17-84   4:21p
    CRCK4    COM      1536  10-21-82   5:50p
    SCRN     OVL     16384   4-26-84   9:01p
    TAG      COM     30365   9-30-84  12:12p
    TAG      HLP     16896   7-07-84   7:38p
    TAG      PRN     46192   8-16-84   6:42a
    TAGINST  BAT       690   8-16-84   5:09a
           10 file(s)     196430 bytes
                          121856 bytes free
