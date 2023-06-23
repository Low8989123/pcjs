---
layout: page
title: "PC-SIG Diskette Library (Disk #402)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0402/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0402"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC/370 CROSS ASSEMBLER 1 OF 3 (859,1352)"

    PC/370 is a cross assembler that lets you compile and run IBM 370
    Assembly language programs on a PC, XT or AT.
    
    These programs are well-documented with a good demonstration program.
    This is one of the most complete emulations of the VM370 assembler
    around.  A generous debugging and erase facility is also included to
    help you complete development cycles without the big blue box.
    
    Features included:
    
    ~ PC/370 assembler subroutines can be called from Micro Focus COBAL/2
    programs running either in extended memory-protected mode or normal MS-
    DOS real mode.  Standard linkage conventions are supported.
    
    ~ PC/370 run-time emulator can be made resident to eliminate loading it
    for each program or subroutine execution.  As part of making the
    emulator reusable, debug supports restoring traces
    
    ~ Hardware assist is available for the CVB and CVD 370 instructions
    using the math co-processor to speed up the instructions by a factor of
    four
    
    ~ Two new supervisor calls are included: SVC 36 will load into a
    predefined area of memory (useful for overlays); SVC 37 defines user
    SVC exits for modifying native SVC support without requiring an
    emulated interrupt driven shell
    
    ~ The cross assembler supports the copy statement to include source
    code files
    
    ~ The linkage editor supports option U to allow external unresolved
    references.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES402.TXT

{% raw %}
```
Disk No:  402
Program Title: CROSS ASSEMBLER for the IBM 370 version 4.2 (Disk 1 of 3)
PC-SIG version: 3.3

PC/370 is a cross assembler that runs on the IBM-PC, AT, or XT and lets
you compile and run IBM 370 assembly language programs.

These programs are well-documented with an excellent example demo set up
to be run by a batch file.  This is the most complete emulation of the
VM370 assembler that can be found.  A generous debugging and erase
facility is also given to ease complete development cycles without the
big blue box.

Version 4.2 is loaded with new features, here are just a few:

      o  PC/370 assembler subroutines may now be called from Micro
         Focus COBAL/2 programs running either in extended memory
         protected mode or normal MS-DOS real mode.  Standard linkage
         conventions are supported.  The

      o  PC/370 run time emulator can now be made resident to
         eliminate loading it from disk storage for each program or
         subroutine execution.  As part of making the emulator
         reusable, debug now supports restoring traces.

      o  An optional hardware assist for the CVB and CVD 370
         instructions using the 80x87 math co-processor can speed up
         the instructions by up to a factor of 4.

      o  Two new supervisor calls have been added.  SVC 36 will load a
         program or file into a predefined area of memory (useful for
         overlays), SVC 37 defines user SVC exits for modifying native
         SVC support without requireing the overhead of an emulated
         interrupt driven shell.

      o  The cross assembler now supports the copy statement to allow
         includeing source code files.

      o  The linkage editor now supports option U to allow external
         unresolved references.

Please note that all three disks are required to run this program, the
other numbers in the set are #859 and #1352.

Usage:  For beginning through advanced S/370 assembly language
programmers.

Special Requirements:  None.

How to Start:  Type GO and press (press enter).

Suggested Registration:  $45.00

File Descriptions:

BAT     <DIR> Contains batch files which can be executed without any
              parameters after setting current directory to R42.
CPY     <DIR> Contains CPY source code for ALC source COPY includes.
LIB     <DIR> Contains ALC source code for PC/370 system subroutines.
R42     <DIR> Contains all of the executable programs and system files
              required by the PC/370 facilities.
READ     ME   Introductory text file.

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
║              <<<<  Disk #402 CROSS ASSEMBLER 370  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation to your printer, type:                        ║
║                          MANUAL (press enter)                           ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0402

     Volume in drive A has no label
     Directory of A:\

    FILES402 TXT      2729   2-28-89   9:36a
    GO       BAT        38  11-04-87   1:33p
    GO       TXT       463   2-24-89   1:08p
    MANUAL   BAT       146   2-24-89   1:09p
    READ     ME       7733   1-07-88   9:45p
    BAT          <DIR>    
    CPY          <DIR>    
    LIB          <DIR>    
    R42          <DIR>    
            9 file(s)      11109 bytes

     Directory of A:\BAT

    .            <DIR>    
    ..           <DIR>    
    BLDLIB   BAT       895  10-31-87   2:27p
    BLDUTIL  BAT       620  10-31-87   2:05p
    INSTALL  BAT      1482   1-07-88   7:28a
    RUNCBL   BAT      3192   1-01-88   8:44a
    RUNDEMO  BAT      4088   1-05-88   8:54p
    RUNMAC   BAT       816   1-03-88   8:37a
    RUNUTIL  BAT       670  10-31-87   2:46p
            9 file(s)      11763 bytes

     Directory of A:\CPY

    .            <DIR>    
    ..           <DIR>    
    EQUREGS  CPY       328  10-29-87   5:28a
    EQUSVCS  CPY       809   1-07-88   5:20a
    IHADCB   CPY      2489  10-29-87   5:44a
    IHAPCB   CPY       504  10-30-87   5:30a
    IHAPIE   CPY      1137   1-05-88   9:10p
    IHAPSW   CPY       799   1-05-88   6:11a
    IHASCB   CPY      1145  11-08-87   4:30p
    MVS      CPY      4828   6-06-87   9:22a
           10 file(s)      12039 bytes

     Directory of A:\LIB

    .            <DIR>    
    ..           <DIR>    
    DAT      ALC      2176   7-22-86   3:45p
    DTIME    ALC      2048   4-26-87   1:13p
    PET      ALC      1920   1-01-87   9:16a
    SSP      ALC      4314   8-20-87   6:13a
    SYNERROR ALC      4138  10-30-87   5:49a
    TIMER    ALC       827   4-07-85   6:25a
            8 file(s)      15423 bytes

     Directory of A:\R42

    .            <DIR>    
    ..           <DIR>    
    A370     EXE     56530   1-07-88   5:04a
    E370P42  EXE     40514   1-07-88   5:05a
    E370R42  EXE     50546   1-07-88   5:04a
    L370     EXE     35602   1-07-88   5:04a
    L370     LIB      3584   1-03-88   7:24a
    M370     COM      6272   1-03-88  10:00a
    PRINTDOC COM      1664   1-03-88   8:30a
    READ     ME2       295  11-28-88   9:39p
    SEE      COM     16768   1-03-88   8:30a
    T370     COM      4864   1-03-88   8:30a
           12 file(s)     216639 bytes

    Total files listed:
           48 file(s)     266973 bytes
                           32768 bytes free
