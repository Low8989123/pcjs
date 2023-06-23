---
layout: page
title: "PC-SIG Diskette Library (Disk #2805)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2805/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2805"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## COMFILE.DOC

{% raw %}
```
   FILES ON THIS DISK WITH EXTENSIONS .COM OR .EXE ARE LHARC SELF-
   EXTRACTING ARCHIVES.  THEY ARE PROGRAMS THAT EXTRACT INTO ONE OR
   MORE BITMAP GRAPHIC FILES WHEN THEY ARE RUN. ALWAYS KEEP THE 
   FOLLOWING IN MIND:

1) EXTRACT EACH FILE TO A BLANK, FORMATTED FLOPPY.  FAILURE TO DO
   SO COULD RESULT IN THE LOSS OF EXISTING FILES WITH THE SAME NAME,
   OR FAILURE OF THE FILE TO EXTRACT BECAUSE OF LACK OF DISK AND/OR
   DIRECTORY SPACE.
2) NEVER USE THE EXTENSION WHEN CALLING A SELF-EXTRACTING ARCHIVE.
3) ALWAYS CALL THE FILE FROM THE DRIVE AND SUBDIRECTORY WHERE YOU
   WANT THE FILE TO RESIDE WHEN IT HAS BEEN EXTRACTED.

   TO EXTRACT A FILE FROM A:DRIVE TO B:DRIVE DO THE FOLLOWING:
1) INSERT THIS DISK IN A:DRIVE. 
2) INSERT A BLANK FORMATTED FLOPPY IN B:DRIVE. 
3) ISSUE THE FOLLOWING COMMANDS: 
   a) B: <enter>
   b) A:filename <enter> 
   ..... THE FILE WILL EXTRACT TO B:DRIVE.

   TO EXTRACT A FILE FROM B:DRIVE TO A:DRIVE DO THE FOLLOWING:
1) INSERT THIS DISK IN B:DRIVE.
2) INSERT A BLANK FORMATTED FLOPPY IN A:DRIVE. 
3) ISSUE THE FOLLOWING COMMANDS: 
   a) A: <enter>
   b) B:filename <enter> 
   ..... THE FILE WILL EXTRACT TO A:DRIVE.
 
   WHEN YOU ONLY HAVE ONE FLOPPY DRIVE YOU CAN MOVE THE CONTENTS OF
   THIS DISK TO YOUR HARD DRIVE AND THEN EXTRACT THE FILES BACK TO
   A:DRIVE BY DOING THE FOLLOWING:
1) INSERT THIS DISK IN A:DRIVE. 
2) ISSUE THE FOLLOWING COMMANDS:
   a) C: <enter> 
   b) MD \EXTRACT <enter> 
   c) CD \EXTRACT <enter>
   d) COPY A:*.* <enter> 
   e) A: <enter>
3) REMOVE THIS DISK FROM A:DRIVE AND REPLACE IT WITH A BLANK
   FORMATTED FLOPPY.  
4) ISSUE THE FOLLOWING COMMAND:
   a1) C:\EXTRACT\filename <enter>
5) REPEAT PROCESS 3 AND 4 UNTIL YOU HAVE EXTRACTED ALL FILES YOU
   INTEND TO USE.  
6) THE FOLLOWING COMMANDS WILL ELIMINATE THE TEMPORARY FILES AND 
   SUBDIRECTORY FROM YOUR HARD DISK:
   b1) C: <enter> 
   b2) CD \EXTRACT <enter> 
   b3) DEL *.* <enter>
   b4) CD \ <enter> 
   b5) RD \EXTRACT <enter>

   WARNING!!! BE SURE YOU ARE IN THE PROPER DIRECTORY BEFORE ISSUING THE 
   COMMAND IN b3 ABOVE.  IF YOU ARE NOT ABSOLUTELY CERTAIN YOU ARE IN
   THE PROPER DIRECTORY YOU SHOULD FIND SOMEONE MORE FAMILIAR WITH DOS
   BEFORE ATTEMPTING TO REMOVE THESE FILES FROM YOUR HARD DRIVE!!!

```
{% endraw %}

## FILE2805.TXT

{% raw %}
```
Disk No: 2805
Disk Title: Wacky2
PC-SIG Version: S1.0

Program Title: Wacky2
Author Version: 10/90
Author Registration: $6.00
Special Requirements: Desktop publisher, printers with .PCX and .MAC formats.

WACKY2 contains five fun clip art `headers' suitable for use with
notices, as horizontal fillers, for notepads, etc. Pictures include
Couples Dancing, Men in Lifeboat, Horses Dancing, Kangaroo Family, and
Butterfly Act.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1991 PC-SIG, Inc.
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  PC-SIG Disk #2805  WACKY2  >>>>                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To read printer information, type:  TYPE W2GRAPH.DOC  (press Enter)     ║
║                                                                         ║
║ To print the installation instructions, type:                           ║
║                                   COPY COMFILE.DOC PRN  (press Enter)   ║
║                                                                         ║
║ To print the registration information, type:                            ║
║                                    COPY README.TXT PRN  (press Enter)   ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1991, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.TXT

{% raw %}
```
CLIPART COPYRIGHT 1990 BY ERLEAN AND JIM COOPER.  ALL RIGHTS
RESERVED.  DO NOT REMOVE THIS FILE IF COPYING OR UPLOADING TO 
A BBS.

THIS DISK CONTAINS 5 'HEADERS' SUITABLE FOR USE WITH NOTICES, 
AS HORIZONTAL FILLERS, FOR NOTEPADS, ETC.  MUCH TIME AND 
EFFORT WENT INTO THE DEVELOPMENT OF THIS DISK.  FEEL FREE TO 
EXAMINE IT AND TO MAKE COPIES OF THE DISK FOR OTHERS.  IF YOU
LIKE THE CLIPART AND WANT TO USE IT YOU SHOULD REGISTER WITH
US AT ONCE.

REGISTRATION IS ONLY $6.00.  WHEN YOU REGISTER YOU WILL GET A
COPY OF OUR GRAPHICS CATALOG AND A CERTIFICATE FOR ONE FREE 
DISK OF YOUR CHOICE.  SORRY, ONLY ONE FREE DISK PER FAMILY.

TO REGISTER SEND $6.00 TO:  COOPER GRAPHICS
                            5846 HIGHWAY 111 SOUTH
                            NEW ALBANY, IN.  47150

HAPPY COMPUTING FROM ERLEAN AND JIM COOPER
```
{% endraw %}

## W2GRAPH.DOC

{% raw %}
```
W2300PCX.EXE IS A FULL 300 DPI SET OF GRAPHICS FOR USE WITH
LASERJETS, DESKJETS, AND OTHER PRINTERS CAPABLE OF PRINTING
AT 300 DPI. (.PCX FORMAT/300 DPI)

W2150PCX.COM CONTAINS THE SAME IMAGES IN 150 DPI FORMAT.  USE
THESE IMAGES FOR HEADERS IN FIRST PUBLSIHER 3.0.  IMPUT THEM
AT 150 DPI FOR BEST RESULTS.  (.PCX FORMAT/150 DPI)

W2072MAC.COM CONTAINS THE SAME IMAGES IN .MAC FORMAT SO THEY
CAN BE USED WITH FIRST PUBLISHER 2.X AND OTHER PROGRAMS. 
THE .MAC FILES ARE STORED AT 72 DPI AND OFFER REDUCED CLARITY.
(.MAC FORMAT/72 DPI)

PICTURES INCLUDE:  COUPLES DANCING   
                   MEN IN LIFEBOAT
                   HORSES DANCING
                   KANGAROO FAMILY
                   BUTTERFLY ACT

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2805

     Volume in drive A has no label
     Directory of A:\

    README   TXT       846   9-23-90   6:20p
    COMFILE  DOC      2313   7-24-90  11:00a
    W2072MAC COM     19027  10-07-90   8:35p
    W2150PCX COM     51925  10-07-90   1:53p
    W2300PCX EXE    119279  10-07-90   1:49p
    W2GRAPH  DOC       729  10-07-90   8:39p
    GO       TXT      1156   8-05-91   4:58a
    GO       BAT        38   1-31-91  12:58a
    FILE2805 TXT       545   8-12-91   2:23a
            9 file(s)     195858 bytes
                          121856 bytes free
