---
layout: page
title: "PC-SIG Diskette Library (Disk #1636)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1636/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1636"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TWODISKS"

    TWODISKS is a program for comparing and updating files on two separate
    disks or directories. Both directories can then be shown, and you may
    automatically copy or move files between the two directories. By
    selectively picking the individual files that are to be copied, moved or
    deleted, you may operate on whole groups of files at once.
    
    When viewing the files that are on each directory, the files that are
    identical will be displayed on the same screen. If the files have the
    same name but different dates, the newer files will be displayed on the
    list for the directory where it is located. These files then may be
    copied easily or moved to the other directory being compared.  Files
    that are not found on the other directory will be displayed on a
    separate list. Thus TWODISKS separates the files into three groups:
    those files that are identical, those files that have the same name but
    different dates, and those files that are completely different.
    TWODISKS will make it much easier to compare and update directories on
    both floppies and hard disks.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1636.TXT

{% raw %}
```
Disk No: 1636                                                           
Disk Title: TwoDisks                                                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: TwoDisks                                                 
Author Version: 3.11                                                    
Author Registration: $25.00                                             
Special Requirements: None.                                             
                                                                        
TWODISKS is a program for comparing and updating files on two separate  
disks or directories.  Both directories can then be shown, and you may  
automatically copy or move files between the two directories.  By       
selectively picking the individual files that are to be copied, moved or
deleted, you may operate on whole groups of files at once.              
                                                                        
When viewing the files that are on each directory, the files that are   
identical will be displayed on the same screen.  If the files have the  
same name but different dates, the newer files will be displayed on the 
list for the directory where it is located.  These files may then easily
be copied or moved to the other directory being compared. Files that are
not found on the other directory will be displayed on a separate list.  
Thus TWODISKS separates the files into three groups: those files that   
are identical, those files that have the same name but different dates, 
and those files that are completely different.  TWODISKS will make it   
much easier to compare and update directories on both floppies and hard 
disks.                                                                  
                                                                        
File Descriptions:                                                      
                                                                        
TDMONO   EXE  Main program, monochrome version.                         
TWODISKS DOC  Documentation.                                            
TWODISKS EXE  Main program, color version.                              
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1988 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<<  Disk #1636  TWODISKS  >>>>                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program using monochrome monitor, type:  TDMONO (press enter)  ║
║ To start program using color monitor, type:  TWODISKS (press enter)     ║
║                                                                         ║
║ To print documentation, type:  COPY TWODISKS.DOC PRN                    ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1636

     Volume in drive A has no label
     Directory of A:\

    FILE1636 TXT      2887  11-22-89  10:04a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       617  11-22-89   3:39p
    TDMONO   EXE     55056   2-11-89   1:41p
    TWODISKS DOC     39076   2-11-89   1:46p
    TWODISKS EXE     55056   2-11-89   1:41p
            6 file(s)     152730 bytes
                            5632 bytes free
