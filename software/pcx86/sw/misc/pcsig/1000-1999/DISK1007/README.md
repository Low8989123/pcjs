---
layout: page
title: "PC-SIG Diskette Library (Disk #1007)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1007/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1007"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "C-WINDOW TOOLKIT 1 OF 2 (ALSO 1705)"

    The "c_wndw" and "c_ndx" libraries are designed for both novice and
    intermediate C programmers who want full screen, color, cursor control,
    windowing abilities and relational database facilities without
    programming complex escape sequences or DOS-level interrupts.  They are
    designed for experienced programmers who need a set of fast I/O
    windowing and disk access functions.  A full set of file access
    functions are given that trap and handle all usual errors.
    
    The "c_wndw" library provides input and output windowing abilities that
    operate at professional speeds.  The output windowing facilities use
    memory mapping for instant screen display.  Full advantage is taken of
    color monitors, and automatic editing of entry and output fields id
    provided.  Pull-down and pop-up menu functions, help screens, and
    multi-layered windows provide a sophisticated user interface.
    
    The "c_ndx" library provides multiple B-tree access to data files and
    supports intelligent relational access to multiple data files via hashed
    random file access.  The database file is the familiar dBase standard,
    and the indexes are fully compatible with the dBase NDX format.
    
    With these libraries you can develop superior programs in C in less time
    than in the dBase language.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1007.TXT

{% raw %}
```
Disk No: 1007                                                           
Disk Title: C-Window Toolkit disk 1 of 2 (1705)                         
PC-SIG Version: S3                                                      
                                                                        
Program Title: C-Window Toolkit                                         
Author Version: 2.02                                                    
Author Registration: $35.00                                             
Special Requirements: A version of Turbo C or Microsom C.               
                                                                        
C-WNDW TOOLKIT is designed for both novice and intermediate C           
programmers who want full screen, color, cursor control, and windowing  
abilities without programming complex escape sequences or DOS-level     
interrupts.  It's also designed for experienced programmers who need a  
set of fast I/O windowing and disk access functions.  A full set of file
access functions are given that trap and handle all usual errors.       
Access is supported to ASCII, dBase III+, hashed random, and relative   
files.                                                                  
                                                                        
C-WNDW TOOLKIT provides input and output windowing abilities that       
operate at professional speeds.  The output windowing facilities use    
memory mapping for instant screen display.  They take full advantage of 
color monitors, and provide automatic editing of entry and output       
fields.  Pull-down and pop-up menu functions, help screens, and         
multi-layered windows provide a sophisticated user interface.           
                                                                        
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
║              <<<<  Disk #1007 C_WINDOW TOOLKIT 1 of 2 >>>>              ║
╠═════════════════════════════════════════════════════════════════════════╣
║ This disk is the first in a set of two.  The other disk is disk #1705.  ║
║                                                                         ║
║ To copy the documentation to your printer, type: MANUAL (press enter)   ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1007

     Volume in drive A has no label
     Directory of A:\

    COMPILE  TBC       384  10-03-89  10:52p
    C_NDX    H        5206   9-16-89   9:22p
    C_WNDW   H       12460   9-06-89   9:50p
    DATETEST PRJ        39  11-25-89  11:22p
    DBREAD   PRJ        53  11-25-89  11:21p
    DBUPDATE PRJ        55  11-26-89   1:57p
    FILE1007 TXT      2221   1-12-90   3:59p
    GO       BAT        38   4-12-88   8:37a
    GO       TXT       540  12-11-89   2:50p
    HELLO    PRJ        36  11-25-89  11:22p
    MANUAL           75008  11-26-89   3:09p
    MANUAL   BAT       144  12-11-89   2:43p
    MC_NDX   TBC     56171   9-30-89  12:37a
    MC_WNDW  TBC    111247  11-26-89   9:36p
    MENU     PRJ        35  11-25-89  11:23p
    MESSAGE  PRJ        38  11-25-89  11:21p
    MONY     PRJ        51  11-25-89  11:24p
    READFILE PRJ        39  11-25-89  11:22p
    README           10880  11-27-89  10:35p
    TURBOC   BAT       896  11-21-89  10:11p
    WINDOW   PRJ        35  11-25-89  11:23p
    WRITFILE PRJ        39  11-25-89  11:25p
           22 file(s)     275615 bytes
                           29696 bytes free
