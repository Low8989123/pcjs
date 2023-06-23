---
layout: page
title: "PC-SIG Diskette Library (Disk #1317)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1317/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1317"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "RECIPE INDEX SYSTEM"

    The RECIPE INDEX SYSTEM lets you index your recipes and then search
    through that index to quickly locate the names of recipes containing
    specific ingredients or of a certain category. It does not store the
    actual recipes themselves. You enter the principal ingredients of each
    recipe, not the steps used to create the food. The reports created by
    the search function do not create shopping lists or give portion size.
    
    The RECIPE INDEX SYSTEM is completely menu-driven and fully documented.
    The most common use of this software is by people who have many
    cookbooks and food journals. They enter the name of the recipes they
    like, the ingredients, a source (name of book or journal) for the recipe
    (including page number), and category and style fields. When they use
    the search function to look for recipes that meet certain criteria, the
    source and page number information are used to find complete details
    about the recipe. This saves having to enter into the computer endless
    details that are already in the books and journals.
    
    Although originally designed to work with food recipes, this system can
    also index other concerns -- like contents of drawers and storage boxes,
    or books and the major topics they cover. Any endeavor that can be
    broken into entries and subparts (like ingredients) can be indexed. You
    could even use it to track the contents of video tapes.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1317.TXT

{% raw %}
```
Disk No: 1317
Program Title:  RECIPE INDEX SYSTEM
PC-SIG version: 1

The RECIPE INDEX SYSTEM lets you index your recipes and then search
through that index to quickly locate the names of recipes containing
specific ingredients or of a certain category.  It does not store the
actual recipes themselves.  You enter the principal ingredients of each
recipe, not the steps used to create the food.  The reports created by
the search function do not create shopping lists or give portion size.

The RECIPE INDEX SYSTEM is completely menu driven and fully documented.
The most common use of this software is by people who have many
cookbooks and food journals.  They enter in the name of the recipes they
like, the ingredients, a source (name of book or journal) for the recipe
(including page number), and category and style fields.  When they use
the Search function to look for recipes that meet certain criteria, the
source and page number information are used to find complete details
about the recipe.  This saves from having to enter into the computer
endless details that are already in the books and journals.

Although originally designed to work with food recipes, this system can
also index other concerns - like contents of drawers and storage boxes,
or books and the major topics they cover.  Any endeavor that can be
broken into entries and subparts (like ingredients) can be indexed.  You
could even use it to track the contents of video tapes.

Usage:  Recipe Index.

Special Requirements:  320K and two floppy drives.

How to Start:  Type GO (press enter).

Suggested Registration:  $30.00

File Descriptions:

RISDEMO  DBF  Demo database.
RISFILE  MEM  Key parameters file.
RISEMPTY DBF  Database structure file.
RISCOPY  BAT  Install program.
RIS      EXE  Main program.
RIS      DOC  Documentation file.
CONFIG   SYS  Config file.
LSRPT1P  FRM  Report format file.
FILES    TXT  List of files.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## FILES.TXT

{% raw %}
```

This is a listing of all files on the diskette, and their purposes:
------------------------------------------------------------------

RISDEMO  DBF    A demo database           

RISFILE  MEM    File used to hold key parameters

RISEMPTY DBF    Database structure used to create new databases

RISCOPY  BAT    Batch file to install RIS system

RIS      EXE    The RIS executable code 

RIS      DOC    The RIS Documentation, set up for an EPSON compatible printer

CONFIG   SYS    Config.sys file to be used if none available

LSRPT1P  FRM    A report format          

FILES    TXT    Listing of all files   





 
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║            <<<<  Disk No 1317  RECIPE INDEX SYSTEM  >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To print the documentation, type:                                     ║
║                                                                         ║
║             MANUAL (press enter)                                        ║
║                                                                         ║
║   To install the program to your hard drive, and assuming that your     ║
║   hard drive is drive C:, type RISCOPY C (press enter)                  ║
║                                                                         ║
║   To start the program type, RIS (press enter).                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1317

     Volume in drive A has no label
     Directory of A:\

    CONFIG   SYS        26   7-06-88  12:12a
    FILE1317 TXT      2061   3-06-89  11:18a
    FILES    TXT       646   8-05-88  10:01a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1002   3-06-89  11:17a
    LSRPT1P  FRM      1990   6-05-88  12:20a
    MANUAL   BAT       147   1-19-89   9:21a
    RIS      DOC     48769   8-05-88   9:54a
    RIS      EXE    163520   6-13-88   5:35a
    RISCOPY  BAT       192   7-06-88  12:12a
    RISDEMO  DBF     45342   6-13-88   5:20a
    RISEMPTY DBF       354   4-08-88   3:49p
    RISFILE  MEM        54   6-12-88  12:19a
           13 file(s)     264141 bytes
                           50176 bytes free
