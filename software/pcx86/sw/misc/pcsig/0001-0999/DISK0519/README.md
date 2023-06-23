---
layout: page
title: "PC-SIG Diskette Library (Disk #519)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0519/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0519"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "BUDGETRAK 1 OF 2 (ALSO 520)"

    BUDGETRAK is an accounting package for anyone who needs to track their
    budget and expenses more closely than is possible with an ordinary
    accounting system.  Encumbrance accounting (the method used here) tracks
    obligations and planned expenses rather than actual expenses.
    
    The system will handle up to budget records.  For simplicity, each
    month's transactions are stored on an individual file that can contain
    1200 transactions.  During the month you can look up account balances at
    any time instantly. You may print a report of the transactions entered
    to that point for the month or for any previous month.  The report is
    sorted and summarized by company, department and grand total.
    
    When the actual expense is known, it is entered and the encumbrance
    amount and budget are updated.  This gives a more accurate picture, for
    budgeting purposes, than waiting to record an actual expense.
    BUDGETRAK handles single and double-entry bookkeeping and has a built-in
    password system.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CONVERT.DOC

{% raw %}
```
To whom it may concern:                                                          4/4/86

These disks have the new Release 1.2 of Budgetrak. There have been changes
to several of the programs since the last we've given you. So you should 
load all of them onto your hard disk or production floppy. There are a 
couple new ones to help too. BCON is a conversion program from Rel. 1.1 to 
1.2 and BBAL captures balances form groups of transactions within a trans-
action file to confirm balances on the Master file. 

We've added an Entry Date to the transactions in addition to the existing
transaction date. It is a program `session' date that goes into any changed
or new transaction to give a better audit trail. This means that none of
the current Transaction files will run in these new Rel 1.2 programs until
they have been converted, running the program BCON. It is easy to run.

So, lets convert them following this procedure:

	1. Copy all the current transaction files to a backup floppy.

	2. Run BCON. It will read the old transaction file, from your
	   standard menu file selection and write new longer records 
	   with the old data. Then when it is thru, it will erase the 
	   old file.

	3. After you have run with the new Transaction files you should
	   get a new backup on a floppy and then finally you can erase the 
	   old backup.

The changes have been described in a new version of Budgdoc, so you should
print a new user manual too.  

If you know of users who are using BudgeTrak Rel 1.1, do them a favor and
give them a copy of these Release 1.2 programs. Thanks.

                    Software Associates Laboratories
                           1747 N. Valencia
                       San Bernardino, CA 92404
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0519

     Volume in drive A has no label
     Directory of A:\

    BINT     EXE     61952   1-01-80   1:28a
    BMST     EXE     69632   1-01-80  12:40a
    BRIEFDOC         12544   1-01-80   4:43a
    BTRN     EXE     86016   1-01-80   1:21a
    BUDG     EXE     16896   1-01-80   4:14a
    BUDGDOC          64640   1-01-80   5:41a
    BUDPASS            768   1-01-80   4:43a
    BUDPASWD EXE     26624   1-01-80   6:23a
    CONVERT  DOC      1792   1-01-80   9:48a
    GCTL86DD           640   1-01-80   3:30p
    GIND86DD          2048  10-21-86   4:24p
    GNAM86DD          2816  10-21-86   4:24p
    JUL86DD1          4096   1-01-80   5:51a
    JUN86DD1          3200  10-22-86   9:02a
    READ     ME       1920   1-01-80   9:16a
    SOFFSET            128   1-01-80   3:29p
           16 file(s)     355712 bytes
                            1024 bytes free
