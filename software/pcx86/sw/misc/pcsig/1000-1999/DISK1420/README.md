---
layout: page
title: "PC-SIG Diskette Library (Disk #1420)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1420/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1420"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "HAM RADIO"

    HAM RADIO offers three fairly technical programs to help the
    enthusiastic amateur radio hobbyist.
    
    SCHART is a Smith Chart impedance matching program.  Given a load
    impedance, the program calculates new input impedances for any
    combination of passive matching elements you choose.  Outputs are listed
    in tabular form with resistive and reactive values given for each
    frequency of operation.  If you want to analyze the impedances as a
    function of frequency, a graphics option is included which draws a Smith
    Chart and plots the impedances.
    
    HFPROP calculates expected ground-wave communications ranges (in miles)
    from 3.5 to 50 MHz based on inputs of frequency, transmitter power,
    receiver sensitivity, antenna parameters, and type of terrain.
    
    VHFPROP computes expected communications ranges (in nautical and statute
    miles) from 100 MHz to 3.5 GHz based on inputs of frequency, transmitter
    power, receiver sensitivity, and antenna parameters.  Specs are included
    for ground-to-ground, ground-to-air, and air-to-air applications plus
    free-space line-of-sight information useful for satellite communications
    predictions.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1420.TXT

{% raw %}
```
Disk No: 1420
Program Title: HAM RADIO
PC-SIG version 1

HAM RADIO offers three fairly technical programs to assist the
enthusiastic amateur radio hobbiest.

SCHART is a Smith Chart impedance matching program.  Given a "load"
impedance, the program calculates new input impedances for any
combination of passive matching elements you choose.  Outputs are
listed in tabular form with resistive and reactive values given for
each frequency of operation.  If you wish to analyze the impedances as
a function of frequency, a graphics option is included which draws a
Smith Chart and plots the impedances.

HFPROP calculates expected ground-wave communications ranges (in
miles) from 3.5 to 50 MHz based upon inputs of frequency, transmitter
power, receiver sensitivity, antenna parameters, and type of terrain.

VHFPROP computes expected communications ranges (in nautical and
statute miles) from 100 MHz to 3.5 GHz based on inputs of frequency,
transmitter power, receiver sensitivity, and antenna parameters.
Specs are included for ground-to-ground, ground-to-air, and air-to-air
applications plus free-space line-of-sight information useful for
satellite communications predictions.

Synopsis:  Three specialized programs for the experienced ham radio
operator.  Replaces paper tables and speeds up computations.

Usage:  Hobbies/Ham Radio/Electronics.

Special Requirements:  CGA card.

How to Start:  Type GO (press enter).

Suggested Registration:  $15.00, ($20.00 Airmail outside USA) brings
the latest version, a printed manual and a copy of the source code.

File Descriptions:

HFPROP    EXE HF propagation program.
SCHART    EXE Smith chart program.
VHFPROP   EXE VHF propagation program.
README        Documentation.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<<  Disk No 1420 HAM RADIO  >>>>                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To look at program information on your screen, type VIEW (press enter)  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1420

     Volume in drive A has no label
     Directory of A:\

    FILE1420 TXT      1874   6-01-89  11:23a
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       386   6-01-89  11:24a
    HFPROP   EXE     55059  11-05-88   2:37p
    PAGE     COM       325   1-06-87   4:21p
    README            4911  12-08-88   8:43p
    SCHART   EXE     69768  11-08-88   8:40p
    VHFPROP  EXE     67011  11-05-88   2:38p
    VIEW     BAT        38   6-01-89  11:24a
            9 file(s)     199410 bytes
                          117760 bytes free
