---
layout: page
title: "PC-SIG Diskette Library (Disk #2017)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2017/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2017"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BIKEINFO"

    If you're into cycling and want accurate performance statistics about
    your bike and your ride, BIKEINFO is a program which generates speed and
    gear ratio characteristics of a multi-speed bicycle (such as a 10, 12 or
    18 speed bicycle).
    
    The user is required to input the size of the tires in inches and the
    number of gear teeth in the front and rear gears (i.e. the chain rings
    and the sprockets).  The program will then generate information like the
    gear ratios for the different speeds, and the miles per hour for
    different cadences such as 60 and 90 pedals per minute.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BIKEINFO.DOC

{% raw %}
```
                              BIKEINFO

                    BICYCLE CHARACTERISTICS GENERATOR


       BIKEINFO is a program which generates characteristics of a
multi-speed bicycle (such as a 10, 12 or 18 speed bicycle).

       The user is required to input the size of the tires in inches and
the number of gear teeth in the front and rear gears (i.e. the chain
rings and the sprockets).  The program will then generate information like
the gear ratios for the different speeds and the miles per hour for
different cadences such as 60 and 90 pedals per minute.

       The program was compiled using the QuickBasic compiler and the
source for the main program is included so that one may see how the 
statistics were generated.  Source was not included for the other modules
which are listed in the .MAK file.
```
{% endraw %}

## FILE2017.TXT

{% raw %}
```
Disk No: 2017                                                           
Disk Title: BikeInfo                                                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: BikeInfo                                                 
Author Version: O8/12                                                   
Author Registration: None.                                              
Special Requirements: None.                                             
                                                                        
If you're into cycling and want accurate performance statistics about   
your bike and your ride, BIKEINFO is a program which generates speed and
gear ratio characteristics of a multi-speed bicycle (such as a 10, 12 or
18 speed bicycle).                                                      
                                                                        
The user is required to input the size of the tires in inches and the   
number of gear teeth in the front and rear gears (i.e. the chain rings  
and the sprockets).  The program will then generate information like the
gear ratios for the different speeds and the miles per hour for         
different cadences such as 60 and 90 pedals per minute.                 
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  <<<<  Disk #2017  BIKEINFO  >>>>                       ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type: BIKEINFO     (press enter)                      ║
║                                                                         ║
║ To print documentation, type: COPY BIKEINFO.DOC PRN                     ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2017

     Volume in drive A has no label
     Directory of A:\

    BIKEINFO BAS      6436   8-12-89  12:24p
    BIKEINFO DOC       831   8-12-89  12:35p
    BIKEINFO EXE     77868   8-12-89  12:30p
    BIKEINFO MAK       159   8-12-89  12:24p
    FILE2017 TXT      1851   1-04-90  11:57a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   2:49a
            7 file(s)      87723 bytes
                           70144 bytes free
