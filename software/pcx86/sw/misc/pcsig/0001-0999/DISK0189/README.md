---
layout: page
title: "PC-SIG Diskette Library (Disk #189)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0189/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0189"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "TECH PRINT"

    TechPrint is an inexpensive and remarkably easy-to-use program for doing
    technical word processing on PCs linked with dot matrix printers.
    TechPrint is currently designed to work with WordStar and Epson
    printers.  It supports special characters and character sets,
    strikeovers, superscripting, and subscripting.  It comes with an
    excellent on-disk manual done in WordStar (sorry--so get an UNWS!).
    
    System Requirements: Epson printer, DOS 2.0 or later, and WordStar.
    
    How to Start: Consult the TECH.MNL for directions and documentation.
    To run TechPrint, type TECH and press <ENTER>.
    
    Suggested Registration:  $25.00 for registration and updates
    
    File Descriptions:
    
    FLIER         Start documentation - read with WORDSTAR
    TECH     MNL  Documentation manual
    TECH     KEY  Prokey key definitions
    TECH     EXE  Improved WORDSTAR printing on FX Epson
    TECH     CLR  Color switch
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #189, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  XXX     .            CRC = 11 AE

--> FILE:  FLIER   .            CRC = 39 AE

--> FILE:  TECH    .CLR         CRC = 7A 80

--> FILE:  TECH    .EXE         CRC = D8 93

--> FILE:  TECH    .KEY         CRC = 26 E4

--> FILE:  TECH    .MNL         CRC = 66 AE

 ---------------------> SUM OF CRCS = 2C 01

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0189

     Volume in drive A has no label
     Directory of A:\

    CRC      TXT       841  11-15-84   7:54a
    CRCK4    COM      1536  10-21-82   7:54p
    FLIER             4864   2-15-84   3:26p
    TECH     CLR       128   1-01-80  12:06a
    TECH     EXE     64000   3-05-84  10:10p
    TECH     KEY      1133   1-01-80   3:48a
    TECH     MNL     40960   3-05-84   5:26p
    XXX                640   6-05-84  12:46a
            8 file(s)     114102 bytes
                           44544 bytes free
