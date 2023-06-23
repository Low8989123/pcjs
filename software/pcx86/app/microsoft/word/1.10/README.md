---
layout: page
title: Microsoft Word 1.10 (for DOS)
permalink: /software/pcx86/app/microsoft/word/1.10/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    autoGen: true
    autoMount:
      B: "MS Word 1.10"
    autoType: $date\r$time\rB:\rDIR\r
---

This is *not* a complete version of Microsoft Word 1.10.  We received only one diskette, and the diskette was incomplete,
containing a variety of personal information (which we removed) and an assortment of other software (which we preserved).
However, until a *complete* copy of Microsoft Word 1.10 decides to make an appearance, this will have to do.

Microsoft Word 1.10 was distributed on a copy-protected diskette, and the copy-protected data was missing from the diskette as
well.  However, we were able to restore that data from the [Microsoft Word 1.15 Program Disk](/software/pcx86/app/microsoft/word/1.15/).

So, despite the scary words embedded in `WORD.COM`:

    ***INTERNAL SECURITY VIOLATION***
    The tree of evil bears bitter fruit,
    crime does not pay.
        THE SHADOW KNOWS
    Trashing program disk.

nothing was trashed, and WORD.COM happily runs now.

{% include machine.html id="ibm5160" %}

### Directory of MS Word 1.10

     Volume in drive A has no label
     Directory of A:\

    IBMBIO   COM*     4608   3-08-83  12:00p
    IBMDOS   COM*    17152   3-08-83  12:00p
    MW       COM*    21585   3-07-84  12:00p
    MW       COD*    42424   3-07-84  12:00p
    MW       DAT*    15854   3-07-84  12:00p
    WORD     COM      2043   3-07-84  12:00p
    MWCOPY1  COM      7452   3-07-84  12:00p
    MWCOPY   BAT        42   3-07-84  12:00p
    RAMCLR   EXE      1024   5-13-84   6:48p
    MOUSE    SYS      3467   3-07-84  12:00p
    CONFIG   SYS        77  11-11-83   6:35p
    VDISK    COM       656   3-31-83   1:21p
    MWCOPY2  BAT       448   3-07-84  12:00p
    MW       PGM     66122   3-07-84  12:00p
    MW       HLP     52018   3-07-84  12:00p
    CLOCK    COM       340   1-02-84  11:20a
    DEFAULT  STY       640   3-07-84  12:00p
    COMMAND  COM     17664   3-08-83  12:00p
    D1610    PRD      2366   5-10-84  11:40a
    AUTOEXEC BAT       196   5-13-84   6:54p
    EPSONMXG PRD      1136   3-07-84  12:00p
           21 file(s)     257314 bytes
                           49152 bytes free
