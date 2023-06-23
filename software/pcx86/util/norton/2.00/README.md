---
layout: page
title: Norton Utilities 2.00
permalink: /software/pcx86/util/norton/2.00/
redirect_from: /disks/pcx86/tools/other/norton/2.00/
preview: images/screenshot.png
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/512kb/machine.xml
    drives: '[{name:"PC-DOS 2.00 w/Tools (10Mb)",type:3,path:"/harddisks/pcx86/10mb/PCDOS200-C400.json"},{name:"MS-DOS 1.x/2.x Source (10Mb)",type:3,path:"/harddisks/pcx86/10mb/MSDOS-SRC.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: "Norton Utilities 2.00 (Side A)"
    autoStart: true
    autoType: $date\r$time\rB:\rDIR\r
---

Norton Utilities 2.00 was distributed as two single-sided 160K disks on a single "flippy" diskette, which we have preserved
as two separate (side "A" and side "B") disk images.  Presumably this was done to ensure that the diskette would work on every
IBM PC, including the earliest machines that shipped only with single-sided drives.

Directory listings of [Side A](#directory-of-norton-utilities-200-side-a) and [Side B](#directory-of-norton-utilities-200-side-b)
are provided below.

{% include machine.html id="ibm5160" %}

### Directory of Norton Utilities 2.00 (Side A)

     Volume in drive A is NU-2.00, #1
     Directory of A:\

    DISKLOOK BAT       384   6-01-83   2:00p
    BATHIDE  COM      7477   6-01-83   2:00p
    BEEP     COM       151   6-01-83   2:00p
    BLOAD    COM     17685   6-01-83   2:00p
    CLEAR    COM       140   6-01-83   2:00p
    CLS      COM       140   6-01-83   2:00p
    DISKOPT  COM      6245   6-01-83   2:00p
    DL       COM     32712   6-01-83   2:00p
    FH       COM     14036   6-01-83   2:00p
    FILEFIX  COM      7287   7-01-83   2:00p
    FILESORT COM      6924   6-01-83   2:00p
    HL       COM     35607   6-01-83   2:00p
    HM       COM     21590   6-01-83   2:00p
           13 file(s)     150378 bytes
                            6144 bytes free

![Norton Utilities 2.00 (Side A)]({{ site.software.miscdisks.server }}/pcx86/util/norton/2.00/NU200-SIDEA.jpg)

### Directory of Norton Utilities 2.00 (Side B)

     Volume in drive A is NU-2.00, #2
     Directory of A:\

    DISKLOOK BAT       384   6-01-83   2:00p
    HU       COM     27490   6-02-83   2:00p
    LABEL    COM      8063   6-01-83   2:00p
    LPRINT   COM     24125   6-01-83   2:00p
    REVERSE  COM      1298   6-01-83   2:00p
    SCRATR   COM      3426   6-01-83   2:00p
    SM       COM     19168   6-01-83   2:00p
    SSAR     COM     23768   6-01-83   2:00p
    TIMEMARK COM      7045   6-01-83   2:00p
    UE       COM     26026   6-01-83   2:00p
           10 file(s)     140793 bytes
                           17408 bytes free

![Norton Utilities 2.00 (Side B)]({{ site.software.miscdisks.server }}/pcx86/util/norton/2.00/NU200-SIDEB.jpg)
