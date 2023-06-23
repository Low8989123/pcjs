---
layout: page
title: "PC-SIG Diskette Library (Disk #104)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0104/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0104"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "COMPUSERVE SAMPLER"

    This disk has three text files on it.  All are concerned with
    providing help for the CompuServ data retreval system.  Two of
    the files are samplers to give the reader a trial run in either
    of their specialties EDUCATION or HOME SERVICES.  The last file
    is an index to the CompuServ system.
    
    How to Start: As these are text files for information and help in
    using CompuServ, first scan and then print what you need.  To scan:
    enter from the prompt TYPE A:<filename>.  To Print, enter: PRINT
    A:<filename>.
    
    File Descriptions:
    
    README        Listing of included files
    CS-EDUCA      CompuServe - Educational Services Sampler
    CS-HOME       CompuServe - Home Services Sampler
    CS-INDEX      CompuServe - Index to All Services, as of 12/83
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #104, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  CS-EDUCA.            CRC = FA B0

--> FILE:  CS-HOME .            CRC = 4D 04

--> FILE:  CS-INDEX.            CRC = A4 DA

--> FILE:  README  .            CRC = 71 08

 ---------------------> SUM OF CRCS = 5D 96

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0104

     Volume in drive A has no label
     Directory of A:\

    CS-EDUCA         15744  12-20-83   6:40p
    CS-HOME          99982  12-25-83   5:02p
    CS-INDEX         32512  12-25-83  12:43p
    README             512  12-25-83   5:39p
    CRC      TXT       747  11-09-84   2:05p
    CRCK4    COM      1536  10-21-82   7:54p
            6 file(s)     151033 bytes
                            8192 bytes free
