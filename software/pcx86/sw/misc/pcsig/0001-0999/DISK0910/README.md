---
layout: page
title: "PC-SIG Diskette Library (Disk #910)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0910/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0910"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BILLING MANAGER 2 OF 2 (ALSO 909)"

    dTIME-KEEPER is designed to increase effectiveness in the client
    billing process, by providing current accounts receivable totals, past
    due account aging, and present maximum clarity in the clients
    statement.  The system makes provision for adding state sales tax to
    taxable items billed to the client.
    
    We believe the most unique features of dTIME-KEEPER are accounting for
    billing time by the minute, the ``extended description lines'' of the
    billing/payments description, multiple time keepers (employees) and
    automatic (recurrent) billing of standard monthly or quarterly charges
    to a client, such as a retainer, monthly, or quarterly bookkeeping
    services. dTIME-KEEPER is completely menu-driven (multiple choice
    operation) and prompts the operator for all required entries.
    
    Extensive error trapping is incorporated in the data input to assure
    maximum accuracy of the information available to you.  The billing code
    description is 35 characters and spaces, about average for this type of
    information, and with ``extended description lines,'' you may expand
    this description by up to 99 lines of 60 characters and spaces.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0910.TXT

{% raw %}
```
Disk No:  910
Program Title:  BILLING MANAGER (Disk 2 of 2)
PC-SIG version:  3

Please Note: This is the second disk of a two-disk set.  The first half
of the program is on disk #909.  Refer to disk #909 for a full
discription.

Usage:  Time and Billing Manager.

Special Requirements:  400K RAM, one disk drive, hard disk and a
printer.

How to Start:  Type GO (press enter).

Suggested Registration:  $29.00

File Descriptions:

BM1_DSK2 EXE  Self-unarchiving file containing program files.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║       <<<<  Disk No 910 BILLING MANAGER Disk 2 of 2)  >>>>              ║
╠═════════════════════════════════════════════════════════════════════════╣
║      To start the installation procedure,  insert disk #909 and         ║
║      type: BM1_BGIN (press enter)                                       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0910

     Volume in drive A has no label
     Directory of A:\

    BM1_DSK2 EXE    338291   7-20-89   6:33p
    FILE0910 TXT       625   8-08-89   9:20a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       463   8-06-89   4:09a
            4 file(s)     339417 bytes
                           20480 bytes free
