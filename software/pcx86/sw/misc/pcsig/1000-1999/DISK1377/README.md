---
layout: page
title: "PC-SIG Diskette Library (Disk #1377)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1377/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1377"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SPEECH"

    SPEECH can make your computer talk -- in a robotic tone of voice, of
    course, and you can have it say anything you want!
    
    The memory-resident program can be added via a batch file to any of your
    programs so they will give a talking introduction.  It reads from any
    standard text file but the words need to be written phonetically.
    Several phonetic texts are included to give you an idea of how to write
    your own, and to get your computer talking right off.
    
    Sixteen speeds are provided so you can use it on nearly any computer no
    matter what its processor speed, such as 8, 10 or even 33 megahertz.  To
    start you just pick one of the versions of SPEECH#.COM you think is
    close to your machine's speed, load it and type READ (demo file of your
    choice).  Unfortunately, you do have to reboot each time to try a
    different speed.
    
    Depending on your computer's speaker, the results can be amazing or
    really bad.  Getting your IBM-PC to talk, without adding additional
    hardware is kind of like dancing dogs.  It's not that they do it very
    well that amazes us...it's that they can do it at all!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1377.TXT

{% raw %}
```
Disk No: 1377
Program Title: SPEECH
PC-SIG version 1

SPEECH can make your computer talk--in a robotic tone of voice, of
course, and you can have it say anything you want!

The memory resident program can be added via a batch file to any of your
programs so they will give a talking introduction.  It reads from any
standard text file but the words need to be written phonetically.
Several phonetic texts are included to give you an idea of how to write
your own, and to get your computer talking right off.

Sixteen speeds are provided so you can use it on nearly any computer no
matter what its processor speed, such as 8, 10 or even 38 megahertz.  To
start you just pick one of the versions of SPEECH#.COM you think is
close to your machine's speed, load it and type READ "demo file of your
choice".  Unfortunately, you do have to reboot each time to try a
different speed.

Depending on your computer's speaker, the results can be amazing or
totally poor.  Getting your IBM-PC to talk without adding additional
hardware is kinda like dancing dogs.  Its not that they do it very well
that amazes us...its that they can do it at all!

Synopsis:  Enables your computer to sort of talk by reading phonetic
text files.

Usage:  Computer Speech.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  None.

File Descriptions:

SPEECH8   COM Speech program for most 8 megahertz PCs.
SPEECH10  COM Speech program.
SPEECH12  COM Speech program.
SPEECH14  COM Speech program.
SPEECH16  COM Speech program.
SPEECH18  COM Speech program.
SPEECH20  COM Speech program.
SPEECH22  COM Speech program.
SPEECH24  COM Speech program.
SPEECH26  COM Speech program.
SPEECH28  COM Speech program.
SPEECH30  COM Speech program.
SPEECH32  COM Speech program.
SPEECH34  COM Speech program.
SPEECH36  COM Speech program.
SPEECH38  COM Speech program.
READ      COM
TALK      DOC Speech data file.
GO        BAT Starting batch file.
E         BAT Demo batch file.
WELCOME       Speech demo file.
EVOLUTION     Speech demo file.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## TALK.DOC

{% raw %}
```
     The versions of SPEECH.COM (by Andy McGuire) to be found on this disk have 
been modified to produce versions for computers at various speeds.  For example
SPEECH8.COM sounds right on my 8MHz PC Clone (w/ V20 chip).  The other speeds
should work on faster computers, but I don't know which is best for the various
computers as I can not test them.  You'll have to test each to find which runs
best on your computer.  You will have to reboot between each version as it    
will not load another version with one already in memory.  I would be glad
to here from you as to which version you find the best and what speed your
computer is running at(especially if you have a 80386 computer!).  I also
have the disassembled source detailing how to modify the timing loops.
Have fun.
Timothy McIlwee
1781 S. 74th St.
Mesa, AZ 85208
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1377

     Volume in drive A has no label
     Directory of A:\

    E        BAT        29   8-12-88   8:55p
    EVOLUTN           2599  11-06-88   4:03a
    FILE1377 TXT      2212   5-03-89  12:08p
    GO       BAT        14  11-03-88   1:21p
    READ     COM       638   9-17-85   2:20p
    SPEECH10 COM     21376  11-03-88  12:47p
    SPEECH12 COM     21376  11-03-88  12:55p
    SPEECH14 COM     21376  11-03-88  12:57p
    SPEECH16 COM     21376  11-03-88  12:58p
    SPEECH18 COM     21376  11-03-88  12:59p
    SPEECH20 COM     21376  11-03-88   1:00p
    SPEECH22 COM     21376  11-03-88   1:01p
    SPEECH24 COM     21376  11-03-88   1:02p
    SPEECH26 COM     21376  11-03-88   1:02p
    SPEECH28 COM     21376  11-03-88   1:03p
    SPEECH30 COM     21376  11-03-88   1:03p
    SPEECH32 COM     21376  11-03-88   1:04p
    SPEECH34 COM     21376  11-03-88   1:10p
    SPEECH36 COM     21376  11-03-88   1:11p
    SPEECH38 COM     21376  11-03-88   1:11p
    SPEECH8  COM     21376  11-03-88  12:46p
    TALK     DOC       844  11-06-88   2:27a
    WELCOME            296  11-05-88   3:11a
           23 file(s)     348648 bytes
                            7168 bytes free
