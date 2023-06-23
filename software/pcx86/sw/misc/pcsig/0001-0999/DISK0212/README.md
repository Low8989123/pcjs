---
layout: page
title: "PC-SIG Diskette Library (Disk #212)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0212/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0212"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "RBBS-PC 1 OF 5 (ALSO 334,621,622,2092)"

    The RBBS is the bulletin board system of choice for many IBM PC
    bulletin boards. It's a large system on four disks and supports the
    PC-SIG LIBRARY ON CD ROM.
    
    RBBS-PC's internal structure is modularized and structured. The
    program includes a File Management System for directories, additional
    file exchange protocols, support for managing subscriptions,
    configurable command letters, multiple uploads on a single command
    line, new A)nswer and V)erbose ARC list commands, and
    context-sensitive help. It also can run as a local application on a
    network, use any field or define a new field to identify callers, and
    individualize callers having the same ID. The source code is included.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0212.TXT

{% raw %}
```
Disk No:  212                                                           
Disk Title: RBBS-PC 1 of 5 (334,621,622,2092)             
PC-SIG Version: S8.3                                                    
                                                                        
Program Title: RBBS-PC                                                  
Author Version: 17.3                                                    
Author Registration: $35.00.                                            
Special Requirements: A hard drive and modem.                           
                                                                        
The RBBS is the bulletin board system of choice for many IBM PC         
bulletin boards. It is a large system on four disks and                 
supports the PC-SIG LIBRARY ON CD ROM.                                  
                                                                        
RBBS-PC's internal structure continued to become significantly more     
modularized and structured.  Major enhancements included a File         
Management System for directories, additional file exchange protocols,  
support for managing subscriptions, the ability to run as a local       
application on a network, configurable command letters, the ability to  
use any field or to define a new field to identify callers, the ability 
to individuate callers having the same ID, multiple uploads on a single 
command line, new A)nswer and V)erbose ARC list commands, and context   
sensitive help. Source code is included.                                
                                                                        
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
║               <<<<  Disk No 212 RBBS-PC  (Disk 1 of 5) >>>>             ║
╠═════════════════════════════════════════════════════════════════════════╣
║ The program on this disk is in an archived format, in order to run it   ║
║ you must unarchive it first.                                            ║
║                                                                         ║
║ Create a sub-directory on your hard disk and copy these files into it   ║
║ then go to that sub-directory and un-archive the program.               ║
║                                                                         ║
║ To unarchive (or unZIP) the program on this disk, type:                 ║
║                         PKUNZIP -X RBBS-EXE.ZIP                         ║
║                                                                         ║
║ There is also an archived description of changes to this program        ║
║  on this disk. To unZIP it type:                                        ║
║			  PKUNZIP -X BULLET6.ZIP                          ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0212

     Volume in drive A has no label
     Directory of A:\

    RBBS-EXE ZIP    303003   3-02-90   8:34a
    PKUNZIP  EXE     22022  10-01-89   1:02a
    GO       TXT      1213   3-16-90   1:04p
    GO       BAT        38   6-14-89   3:12p
    BULLET6  ZIP      9700   3-16-90  12:55p
    FILE0212 TXT      2059   3-19-90   6:46p
            6 file(s)     338035 bytes
                           20480 bytes free
