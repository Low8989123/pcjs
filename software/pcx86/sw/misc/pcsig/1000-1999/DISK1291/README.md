---
layout: page
title: "PC-SIG Diskette Library (Disk #1291)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1291/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1291"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "ZOOMRACKS SMALL BUSINESS KIT"

    Whether you find accounting procedures confusing or, on the contrary,
    are an accounting professional but would like to save time and effort,
    the SMALL BUSINESS KIT, used as a template to ZOOMRACKS, may be the
    answer.
    
    This is a strong general accounting package that has built itself
    around the advantages of ZOOMRACKS, the award winning "rack and
    card"
    database.
    
    Templates are included for everything from accounts receivable to a
    cash journal and check register.  Each template comes with field
    descriptions, usage notes, pre-designed report formats and more. All
    of these individual templates combine to form a complete accounting
    system.
    
    File Descriptions:
    ACCKIT   ZRX  A list of all the racks in this kit.
    ACHECKS  ZRX  Collection of checks to be printed.
    ADJUSTS  ZRX  Rack of adjusting entry cards.
    AFORMS   ZRX  Rack of output forms to use with this kit.
    BALBLANK ZRX  Company balance sheet--blank.
    BALSHEET ZRX  Company balance sheet--sample.
    DIALY88  ZRX  Calendar for 1988.
    LDGRACTS ZRX  List of ledger accounts and account numbers.
    MACACC   ZRX  Macros used in this kit.
    NOTEPAY  ZRX  Notes payable register.
    NOTERCV  ZRX  Notes receivable register.
    PANDL    ZRX  Profit and loss (income) statement--sample.
    PAYABLES ZRX  List of payables (purchase orders and payments).
    PAYROLL  ZRX  Payroll records.
    PLBLNAK  ZRX  P and L (income) statement plus usage instructions. SALES
    ZRX  List of invoices, sales orders, and backorders.
    TRIALBAL ZRX  Trial balance.
    USEAKIT  ZRX  Rack of notes on using this kit.
    USINGSRX ZRX  Rack of hints and suggestions on using ZOOMRACKS.
    X8086    ZRX  Sample archived transactions for June, 1986.
    XACTS    ZRX  Simplest form of recording business transactions.
    ZACCTPAY ZRX  Special-purpose accounting racks.
    ZACCTRCV ZRX  Special-purpose accounting racks.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1291.TXT

{% raw %}
```
Disk No: 1291
Program Title:  SMALL BUSINESS ACCOUNTING KIT for ZOOMRACKS
PC-SIG version: 1.1

Whether you find accounting procedures confusing or, on the contrary,
are an accounting professional but would like to save time and effort,
the SMALL BUSINESS ACCOUNTING KIT used as a template to ZOOMRACKS may be
the answer.

This is a strong general accounting package that has built itself around
the advantages of ZOOMRACKS, the award winning "rack & card" database.

Templates are included for: accounts receivable, accounts payable,
general business transactions, trial balance, income (profit and loss)
statement, balance sheet, payroll, adjusting entries, calendar, cash
journal, notes payable/receivable, check register.  Each template comes
with field descriptions, usage notes, pre-designed report formats and
more.  All of these individual templates combined, form a complete
accounting system.

Macros have been included to simplify recording accounts receivable and
accounts payable transactions, performing balance sheet and income
statement computations, calculating gross profit, calculating working
capital, taking the trial balance, posting payroll payments, and
printing checks.  Each macro comes with a description of how to use it.

Usage:  Accounting.

Special Requirements:  ZOOMRACKS program on disk #1291.

How to Start:  Type GO (press enter).

Suggested Registration:  $49.95

File Descriptions:

ACCKIT   ZRX  A list of all the racks in this kit.
ACHECKS  ZRX  Collection of checks to be printed.
ADJUSTS  ZRX  Rack of adjusting entry cards.
AFORMS   ZRX  Rack of output forms to use with this kit.
BALBLANK ZRX  Company balance sheet--blank.
BALSHEET ZRX  Company balance sheet--sample.
DIALY88  ZRX  Calendar for 1988.
LDGRACTS ZRX  List of ledger accounts and account numbers.
MACACC   ZRX  Macros used in this kit.
NOTEPAY  ZRX  Notes payable register.
NOTERCV  ZRX  Notes receivable register.
PANDL    ZRX  Profit and loss (income) statement--sample.
PAYABLES ZRX  List of payables (purchase orders and payments).
PAYROLL  ZRX  Payroll records.
PLBLNAK  ZRX  P and L (income) statement, blank plus usage instructions.
SALES    ZRX  List of invoices, sales orders, and backorders.
TRIALBAL ZRX  Trial balance.
USEAKIT  ZRX  Rack of notes on using this kit.
USINGSRX ZRX  Rack of hints and suggestions on using Zoomracks.
X8086    ZRX  Sample archived transactions for June 1986.
XACTS    ZRX  Simplest form of recording business transactions.
ZACCTPAY ZRX  Special-purpose accounting racks.
ZACCTRCV ZRX  Special-purpose accounting racks.
ZCASH    ZRX  Special-purpose accounting racks.

PC-SIG
1030D E. Duane Avenue
Sunnyvale, CA 94086
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║           <<  Disk #1291  Small Business Zoomrack Set  >>               ║
╠═════════════════════════════════════════════════════════════════════════╣
║ This disk contains a number of racks which should be useful to          ║
║ anyone who uses Zoomracks. To load the racks on this disk,              ║
║ do the following from within the Zoomracks program.                     ║
║                                                                         ║
║ 1) Insert this disk in the B drive of your system.                      ║
║ 2) Load Zoomracks as you would do normally.                             ║
║ 3) Press ALT-E to go to the EXTRAS menu                                 ║
║ 4) Press K to go to the CHANGE DISKS menu                               ║
║ 5) Press B to load the directory of the B drive                         ║
║ 6) Move the highlight bar down to the rack you want to load with the    ║
║     cursor keys.                                                        ║
║ 7) Press F3 to load the rack.                                           ║
║                                                                         ║
║ For users with a hard drive: You may copy the files onto your           ║
║ hard-disk where Zoomracks is residing, thus making it easier to load    ║
║ the files on this disk by cutting out steps 3-5 in the intructions      ║
║ above.                                                                  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1291

     Volume in drive A has no label
     Directory of A:\

    ACCKIT   ZRX     11264   4-17-87   5:44p
    ACHECKS  ZRX      5120   4-17-87   5:44p
    ADJUSTS  ZRX      7168   4-17-87   5:44p
    AFORMS   ZRX     24576   1-01-88  12:21a
    BALBLANK ZRX      9216   4-17-87   5:44p
    BALSHEET ZRX      6144   4-17-87   5:44p
    DAILY88  ZRX     27648   1-01-88  12:21a
    FILE1291 TXT      2766   1-19-89   4:00p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1618   1-19-89   3:54p
    LDGRACTS ZRX      3072   4-17-87   5:45p
    MACACC   ZRX     27648   4-17-87   5:45p
    NOTEPAY  ZRX      1024   4-17-87   5:45p
    NOTERCV  ZRX      1024   4-17-87   5:45p
    PANDL    ZRX      7168   4-17-87   5:45p
    PAYABLES ZRX      6144   4-17-87   5:45p
    PAYROLL  ZRX      8192   4-17-87   5:45p
    PLBLANK  ZRX     11264   4-17-87   5:45p
    SALES    ZRX      9216   4-17-87   5:45p
    TRIALBAL ZRX      4096   4-17-87   5:46p
    USEAKIT  ZRX     41984   4-17-87   5:46p
    USINGZRX ZRX     11264   4-17-87   5:47p
    X8606    ZRX      6144   4-17-87   5:47p
    XACTS    ZRX      6144   4-17-87   5:47p
    ZACCTPAY ZRX      3072   4-17-87   5:47p
    ZACCTRCV ZRX      1024   4-17-87   5:47p
    ZCASH    ZRX      5120   4-17-87   5:47p
           27 file(s)     249158 bytes
                           71680 bytes free
