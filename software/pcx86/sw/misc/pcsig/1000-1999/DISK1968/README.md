---
layout: page
title: "PC-SIG Diskette Library (Disk #1968)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1968/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1968"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CROSSREF"

    CROSSREF is a variable listing program for Turbobasic files (only).  If
    you try to list a standard BASIC program you will get a very long list
    of line numbers (all of them).  This program is for Turbobasic programs
    that use line numbers only as labels.  And the program only takes up
    8K.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1968.TXT

{% raw %}
```
Disk No: 1968                                                           
Disk Title: CrossRef                                                    
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: CrossRef                                                 
Author Version: 05/90                                                   
Author Registration: $15.00                                             
Special Requirements: CGA.                                              
                                                                        
CROSSREF is a variable listing program for Turbobasic files (only).  If 
you try to list a standard BASIC program you will get a very long list  
of line numbers (all of them).  This program is for Turbobasic programs 
that use line numbers only as labels.  And the program only takes up    
8K.                                                                     
                                                                        
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
║                 <<<<  Disk #1968  CROSSREF  >>>>                        ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To start program, type:  CROSSREF  (press enter)                        ║
║                                                                         ║
║ To print documentation, type:  COPY CROSSREF.DOC PRN  (press enter)     ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1968

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        38   1-01-80   1:37a
    COPYRITE IFO       834   5-07-90   8:49p
    CROSSREF DOC     16214   6-06-90   2:51p
    CROSSREF EXE    120169   6-06-90   1:16p
    GO       TXT       729   1-01-80   7:56a
    FILE1968 TXT      1481   7-13-90  11:21p
            6 file(s)     139465 bytes
                           19456 bytes free
