---
layout: page
title: "PC-SIG Diskette Library (Disk #57)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0057/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0057"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "TEXT TOOLS 1 OF 2  (#58 SECOND DISK)"

    Tools to manipulated test files.  See Disks #130-132 for more complete
    and better documented versions of the utilities on this disk and disk
    #58.
    
    File Descriptions:
    
    The First Disk Contains:
    TRANSLIT EXE  TRANSLITERATION UTILITY
    SORT     EXE  SORTS TEXT FILES
    FIND     EXE  FINDS TEXT STRINGS IN FILES
    CHANGE   EXE  CHANGES TEXT STRINGS IN FILE
    COMPARE  EXE  COMPARES TWO FILES
    
    The Second Disk Contains:
    FORMAT   EXE  TEXT FORMATTER
    DEFINE   EXE  STRING REPLACEMENT MACROPROCESSOR
    MACRO    EXE  EXPANDS MACROS WITH ARGUMENTS
    EDIT     EXE  TEXT EDITOR
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #57, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  TRANSLIT.EXE         CRC = F7 8B

--> FILE:  SORT    .EXE         CRC = 57 BC

--> FILE:  FIND    .EXE         CRC = 95 76

--> FILE:  CHANGE  .EXE         CRC = E6 A1

--> FILE:  COMPARE .EXE         CRC = 58 60

 ---------------------> SUM OF CRCS = 23 BE

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0057

     Volume in drive A has no label
     Directory of A:\

    CHANGE   EXE     32512   5-31-83   1:59p
    COMPARE  EXE     29440   5-31-83   2:03p
    CRC      TXT       793  11-09-84  11:01a
    CRCK4    COM      1536  10-21-82   7:54p
    FIND     EXE     31488   5-31-83   1:58p
    SORT     EXE     29824   5-31-83   1:57p
    TRANSLIT EXE     30208   5-31-83   1:57p
            7 file(s)     155801 bytes
                            3072 bytes free
