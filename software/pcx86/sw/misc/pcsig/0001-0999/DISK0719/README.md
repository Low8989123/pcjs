---
layout: page
title: "PC-SIG Diskette Library (Disk #719)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0719/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0719"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LETTERWRITER"

    LETTERWRITER is a different kind of address manager -- its specialty is
    mailmerge.  You can keep address files full of different ``kinds'' of
    people; i.e., business acquaintances, friends, or relatives.  You can
    sort these different files by first name, last name, or zip code, just
    as you would a more traditional database address manager.
    
    But with LETTERWRITER you can also merge the database information into
    an ASCII document, such as a letter that has been created in a
    wordprocessor.  In this way you can imbed names, phrases, or paragraphs
    into the body of a letter.  And you can create form letters by simply
    typing out one letter you want to send to any number of different
    addresses and specifying those addresses.  LETTERWRITER automatically
    prints a letter with each address.  It can also print labels, envelopes,
    address books, and lots more.
    File Descriptions:
    
    LW       COM  LETTERWRITER (executable program).
    CONFIG   COM  DOS system configuration file.
    READ     ME   Short description of LETTERWRITER (1 pg).
    MANUAL        Documentation for LETTERWRITER (15 pp).
    SUPPORT       Registration form for LETTERWRITER.
    SAMPLE   ADR  Sample address for LETTERWRITER.
    SAMPLE        Sample file.
    CHECK    COM  Checks your copy of LETTERWRITER.
    CHECK    TXT  Description of check.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHECK.TXT

{% raw %}
```
         
         You can test your copy of the distribution diskette, to make 
         sure the copy is accurate, by entering the command CHECK *.* 
         at the DOS prompt.  The output should look like this: 


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  LW      .COM         CRC = 1E 42

--> FILE:  CONFIG  .COM         CRC = D9 18

--> FILE:  MANUAL  .            CRC = BA C3

--> FILE:  READ    .ME          CRC = D7 99

--> FILE:  SUPPORT .            CRC = 8D 15

--> FILE:  SAMPLE  .ADR         CRC = 1E FC

--> FILE:  SAMPLE  .            CRC = B9 AF

--> FILE:  CHECK   .COM         CRC = BD 22

--> FILE:  CHECK   .TXT         CRC = unknown

 ---------------------> SUM OF CRCS = unknown

DONE
         
                  
         Note: the CRC for CHECK.TXT will be incorrect as will be the 
         total, because you cannot write a file's CRC to the file 
         without altering the CRC of the file.
```
{% endraw %}

## FILES719.TXT

{% raw %}
```
Disk No:  719
Program Title:  LETTERWRITER
PC-SIG version: 2.1

LETTERWRITER is a different kind of address manager--its specialty is
mailmerge.

You can keep different files full of different "kinds" of people, i.e.
business acquaintances, friends, or relatives.  You can sort these
different files by first name, last name, or zip code, just as you would
a more traditional database address manager, but the emphasis is on
merging the database information into an ASCII document, such as a
letter that has been created in a word processor.

Usage:  Mailmerge/Address Manager.

Special Requirements:  A word processor that produces ASCII files.

How to Start:  Type GO (press enter).

Suggested Registration:  $39.00

File Descriptions:

LW       COM  LETTERWRITER (executable program).
CONFIG   COM  DOS system configuration file.
READ     ME   Short description of LETTERWRITER (1 page).
MANUAL        Documentation for LETTERWRITER (15 pages).
SUPPORT       Registration form for LETTERWRITER.
SAMPLE   ADR  Sample address for LETTERWRITER.
SAMPLE        Sample file.
CHECK    COM  Checks your copy of LETTERWRITER.
CHECK    TXT  Description of check.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0719

     Volume in drive A has no label
     Directory of A:\

    CHECK    COM      1536  10-21-82   5:50p
    CHECK    TXT       986   2-22-87   1:07a
    CONFIG   COM     14652   2-21-87   1:01a
    FILES719 TXT      1305   1-04-88   1:15p
    LW       COM     44259   2-19-87   6:33a
    MANUAL           59073   2-21-87  12:33a
    READ     ME        561   2-03-87   8:41a
    SAMPLE            4103   2-05-87   8:12a
    SAMPLE   ADR      2940   2-04-87   2:17a
    SUPPORT           1843   2-21-87  12:34a
           10 file(s)     131258 bytes
                           26624 bytes free
