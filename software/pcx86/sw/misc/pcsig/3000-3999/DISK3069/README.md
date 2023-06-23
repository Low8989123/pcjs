---
layout: page
title: "PC-SIG Diskette Library (Disk #3069)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3069/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3069"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## BUSS-APP.TXT

{% raw %}
```
~1F╔══════════════════════════════════════════════════════════════════════════════╗
║~74                            BUSINESS APPLICATIONS                             ~1F║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║   ~30  YOU CAN SELL YOUR WIDGET OR ANY PRODUCTS WITH MULTIMEDIA 1.           ~1F   ║
║   ~30  Listed below are some of the applications you can create with this    ~00 ~1F  ║
║   ~30  new and exciting package.                                             ~00 ~1F  ║
║     ~00                                                                       ~00~1F  ║
║                                                                              ║
║   ~71 * SALES PRESENTATIONS            * NEW PRODUCT INTRODUCTION            ~1F   ║
║   ~71                                                                        ~00 ~1F  ║
║   ~71 * SELLING YOUR SERVICES          * SALES TOOL FOR YOUR SALES STAFF     ~00 ~1F  ║
║   ~71                                                                        ~00 ~1F  ║
║   ~71 * COURSEWARE AUTHORING           * TUTORIALS (C.B.T.)                  ~00 ~1F  ║
║   ~71                                                                        ~00 ~1F  ║
║   ~71 * DISK BASED ADVERTISING         * RETAIL STORE -CUSTOMER CATCHER-     ~00 ~1F  ║
║   ~71                                                                        ~00 ~1F  ║
║   ~71 * MAILING TO YOUR CUSTOMERS      * BUSINESS REPORT DEMONSTRATION       ~00 ~1F  ║
║   ~71                                                                        ~00 ~1F  ║
║   ~71 * HAND OUTS AT TRADE SHOWS       * MAKE A COMMERCIAL ON A DISK         ~00 ~1F  ║
║     ~00                                                                       ~00~1F  ║
║                                                                              ║
║  You can use this package to create a new product/service presentation       ║
║  which can be given to your sales staff to use on sales calls.  The sales    ║
║  person can play the demonstration on the customer's computer (no special    ║
║  hardware needed).  Better yet, you can mail a presentation disk to all of   ║
║  your customers and new prospects (direct mail marketing).                   ║
║                                                                              ║
║  Imagine you're in a crunch to finish a breakthrough business report.        ║
║  Use MULTIMEDIA 1 to combine your charts and a convincing voice-over to      ║
║  produce a complete AUDIO/VIDEO demonstration. All this on a standard PC.    ║
║                                                                              ║
║  With MULTIMEDIA 1 you can enrich your business presentations with speech,   ║
║  music and high-quality images, and interactivity helps you customize your   ║
║  communications to each of your audience's specific interest.                ║
║                                                                              ║
║  Need to train someone ?  With MULTIMEDIA 1 you can create a tutorial on     ║
║  your product or service. The tutorial you create can interact, teach and    ║
║  test your trainees. MULTIMEDIA will help convey what text alone cannot.     ║
╚══════════════════════════════════════════════════════════════════════════════╝

                               ~74 EASY TO USE ~1F
                               ─────────────
        No programming experience is required to use MULTIMEDIA 1. If 
        you know how to use a word processor then you will be mastering 
        this package within a few days. The following command lines were 
        used to create the business example that you have just viewed.

          ~00                                                              ~00~1F
        ~74    COMMAND LINE             |        DESCRIPTION/COMMENTS    ~00  ~1F
        ~33                             |                                ~00  ~1F
        ~71    show house1.gif          |        display house1 image    ~00  ~1F
        ~71    say buyme1               |        play buy me speech      ~00  ~1F
        ~71    zoom out                 |        shrink screen effect    ~00  ~1F
        ~71                             |                                ~00  ~1F
        ~71    show house2.gif          |        display house2 image    ~00  ~1F
        ~71    say buyme2               |        output speech           ~00  ~1F
        ~71    delay                    |        wait for 1 second       ~00  ~1F
        ~71    rotate 10                |        rotate screen 10 times  ~00  ~1F
        ~71    say wow                  |        play the wow speech     ~00  ~1F
        ~71    scroll down              |        move screen down effect ~1F
    
        It only takes a few lines to combine video and speech per screen.
        One line to display the graphic image, one line to play the
        sound/speech file and one line for special effects. You will need 
        to know only a few commands to get started with MULTIMEDIA 1. 
        Once you have learned the basics of MULTIMEDIA 1 you can create 
        your masterpiece with over 100 interactive AUDIO/VIDEO screens.


                      PRESS Esc TO RETURN TO THE MAIN MENU
```
{% endraw %}

## EDITHELP.TXT

{% raw %}
```
 THE DEVELOPMENT EDITOR
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
   The Development Editor is a basic word-processor with Multiple overlapping
 windows, Full mouse support, Pull down menu, Copy and paste features. If
 you're at all familiar with the SideKick Notepad or a Word Star type editor, 
 then this editor should be a breeze.

 There are three ways to select a menu command from the Edit window:

 ■ With a MOUSE, click the title of the menu you want to pull down, then
   click the desired command.

 ■ Press F10, then use the arrow keys to go to the menu you want (or press
   the highlighted letter of the menu command), and use them again to select
   a command.

 ■ Press Alt and the highlighted letter of the menu you want, then use the
   arrow keys (or press the highlighted letter) to select a command. Press
   Enter.

 The menu title that's highlighted is the currently selected menu. Menu
 commands are followed by either an ellipsis mark (...), an arrow, or a
 shortcut.

 Choosing a command that's followed by an ellipsis displays a dialog box;

 Once in the Edit window, you enter text just as if you were using a
 typewriter.

 ■ When you want to end a line, press Enter.
 ■ To exit the editor, press Alt X.


 MENU SELECTIONS
 ═══════════════

 File  (Alt-F)
 ─────────────
 The File menu offers choices for opening files, changing directories,
 and exiting the program.

 File Open  (F3)
 ───────────────
 The Open command displays the Open a File dialog box. In this dialog box
 you select the text file you want to edit.

 The Open a File dialog box contains:
  ■ an input box with a history list
  ■ a list box to browse the directory
  ■ the standard Cancel button
  ■ Open action button
  ■ an information panel that describes the
    selected file

 The Open a File dialog box contains an input box, a file list, a file
 information panel, the standard button Cancel, one other action button
 (Open), plus a history list that's attached to the Name inputbox.

  ┌─ Name ──────────────────────────┐
  │  *.BAT                          │
  └─────────────────────────────────┘
 The Name input box is where you enter the name of the file to load, or the
 file-name mask to use as a filter for the Files list box (for example, *.*).   ][

  ┌ Files ──────────────────────────┐
  │                                 │
  │  EXAMPLE1.BAT  │  FILENM03.BAT  │
  │  EXAMPLE2.BAT  │  FILENM04.BAT  │
  │  EXAMPLE3.BAT  │  FILENM05.BAT  │
  │  EXAMPLE4.BAT  │  FILENM06.BAT  │
  │  EXAMPLE5.BAT  │  ..            │
  │  EXAMPLE6.BAT  │  \MOREEXAM     │
  │  FILENM01.BAT  │  \SPEECH       │
  │  FILENM02.BAT  │  \MUSIC        │
  │  ▒▒▒■▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒   │
  └─────────────────────────────────┘
 The Files list box lists the names of files in the current directory that
 match the file-name mask in the Name input box, plus the parent directory
 and all subdirectories.

  ┌──────────────────────────────────────────┐
  │ C:\MULTI1\*.BAT                          │
  │ EXAMPLE1.BAT    52  Jul 14,1991  12:00pm │
  └──────────────────────────────────────────┘
 The File information panel shows the path name, file name, date, time,
 and size of the selected file.None of the items on this information panel
 are selectable.

  ┌──────────┐
  │ [ Open ] │
  └──────────┘
 The Open button opens a new window and places the selected file in
 that window.
  ┌────────────┐
  │ [ Cancel ] │
  └────────────┘
 If you choose Cancel, nothing changes and no action occurs, and the dialog
 box is put away. (Esc always cancels a dialog box, even if a Cancel button
 does not appear.)

 File Change Dir
 ───────────────
 File Change Dir brings up the Change Directory dialog box, in which you
 can change the current directory.

 File DOS Shell
 ──────────────
 With the DOS Shell command, you can leave the program temporarily to
 perform a DOS command or run another program. To return to this program,
 type EXIT at the DOS prompt.

 File Exit  (Alt-X)
 ──────────────────
 The Exit command terminates this program.


 Edit Undo
 ─────────
 The Undo command will correct the last edited line in the open window.

 Edit Copy
 ─────────
 The Copy command leaves the selected text intact but places an exact copy
 of it in the clipboard. You can paste that text into any other text file.
 With the MOUSE, click and drag the text you want to copy.

 Edit Paste
 ──────────
 The Paste command inserts the selected text from the clipboard into the
 current window at the cursor position.


 Search Find
 ───────────
 The Find command displays the find dialog box, where you type in the text
 you want to search for. You can set several options in the dialog box that
 effect the search.

 Search Replace
 ──────────────
 The Replace command displays a dialog box, where you type in the text
 you want to search for and the text you want to replace it with.

 
 Window     (Alt-W)
 ──────────────────
 The Window menu contains commands to close, move and perform other
 window-management commands. Most of the windows in this program have all
 the standard window elements, including scroll bars, a close box, and
 zoom icons. For more about windows and their elements, refer to windows.

 Window Size/Move    (Ctrl-F5)
 ─────────────────────────────
 Choose this command to change the size or position of the active window.

 Size
 ────
 If you press Shift while you use the arrow keys, you can change the size
 of the active window. Once you've adjusted its size or position, press
 Enter. If a window has a Resize corner, you can drag that corner to resize
 the window.

 Move
 ────
 When you choose Window Size/Move, the active window moves in response to
 the arrow keys. Once you've moved the window to where you want it, press
 Enter. You can also move a window by dragging its title bar with the mouse.

 Window Zoom    (F5)
 ───────────────────
 Choose Zoom to resize the active window to the maximum size. If the window
 is already zoomed, you can choose this command to restore it to its
 previous size. You can also double-click anywhere on the window's title
 bar (except where an icon appears) to zoom or unzoom the window.

 Window Tile
 ───────────
 Choose Window Tile to tile all file viewers on the desktop.

  ┌────────────────────────────────────┐
  │ ╔════════════1══╗┌────────────2──┐ │
  │ ║               ║│               │ │
  │ ║               ║│               │ │
  │ ║               ║│               │ │
  │ ║               ║│               │ │
  │ ╚═══════════════╝└───────────────┘ │
  │ ┌────────────3──┐┌────────────4──┐ │
  │ │               ││               │ │
  │ │               ││               │ │
  │ │               ││               │ │
  │ │               ││               │ │
  │ └───────────────┘└───────────────┘ │
  └────────────────────────────────────┘
               Tiled Windows


 Window Cascade
 ──────────────
 Choose Window Cascade to stack all file viewers on the desktop.

  ┌──────────────────────────1─┐
  │┌─────────────────────────2─┐
  ││┌────────────────────────3─┐
  │││╔═══════════════════════4═╗
  │││║                         ║
  │││║                         ║
  │││║                         ║
  │││║                         ║
  │││║                         ║
  └└└╚═════════════════════════╝
         Cascaded Windows

 Window Next
 ───────────
 Choose Next to cycle forwards through the windows on the desktop.

 Window Previous
 ───────────────
 Choose Previous to cycle backwards through the windows on the desktop.

 Window Close     (Alt-F3)
 ─────────────────────────
 Choose Close to close the active window. You can also click the Close
 box in the upper right corner to close a window.


 THESE COMMANDS WILL HELP YOU IF YOU ARE NOT USING A MOUSE.

 Cursor Movement Commands
 ────────────────────────
 Character left         Left arrow     
 Character right        Right arrow
 Line up                Up arrow
 Line down              Down arrow
 Scroll up              Ctrl-W
 Scroll down            Ctrl-Z
 Page up                PgUp
 Page down              PgDn
 
 Move to next           Tab
 selection in
 dialog box

 Insert & Delete Commands
 ────────────────────────
 Insert mode on/off     Ins
 Delete line            Ctrl-Y
 Delete character left  Backspace
 Delete character       Del

 Block Commands
 ──────────────
 Mark block begin       Ctrl-K B
 Mark block end         Ctrl-K K
 Mark single word       Ctrl-K T
 Copy block             Ctrl-K C
 Move block             Ctrl-K V
 Delete block           Ctrl-K Y

 MORE HELP IS AVAILABLE WHEN YOU REGISTER YOUR SHAREWARE.
 ───────────────────────────────────────────────────────
```
{% endraw %}

## GO1.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║               <<<<  PC-SID Disk #3069  MULTIMEDIA 1  >>>>               ║
║                     Disk 2 of 3 (also #3068, #3070)                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║   Insert Disk #3068 in drive A:                                         ║
║                                                                         ║║   To read the introduction, type:  TYPE READ-ME.DOC  (press Enter)      ║
║                                                                         ║
║   To view, or print the manual, type:  MANUAL  (press Enter)            ║
║   To start the program, type:  GO              (press Enter)            ║
║                                                                         ║
║   To install to hard drive C, type:  INSTALLC  (press Enter)            ║
║   To install to hard drive D, type:  INSTALLD  (press Enter)            ║
║   To start the program, type: GO   (press Enter)                        ║
║   To view, or print the manual, type: MANUAL   (press Enter)            ║
║                                                                         ║
║   To install to hard drive C, type: INSTALLC   (press Enter)            ║
║   To install to hard drive D, type: INSTALLD   (press Enter)            ║
║                                                                         ║
║                                                                         ║
║                                        (c) Copyright 1992, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3069

     Volume in drive A has no label
     Directory of A:\

    EXAMPLE1 BAT       141   7-06-92  10:00p
    INSTALLC BAT      1572   8-05-92  10:50a
    INSTALLD BAT      1562   8-05-92  10:52a
    PRINTORD BAT       157   7-06-92  10:00p
    EDITOR   EXE     90813   7-06-92  10:00p
    FADE     EXE     22977   7-06-92  10:00p
    GTEXT    EXE      9841   7-06-92  10:00p
    IMAGEPRO EXE     50960   7-29-92   4:12p
    IP-MENU  EXE      2827   7-06-92  10:00p
    PRINTSCR EXE     22083   7-06-92  10:00p
    ORDER    FRM      2656   7-06-92  10:00p
    HOUSE1   GIF     38788   7-06-92  10:00p
    HOUSE2   GIF     38266   7-06-92  10:00p
    COMMANDS LIB      5276   7-06-92  10:00p
    IMAGES   LIB      1038   7-06-92  10:00p
    SOUNDS   LIB      4829   7-06-92  10:00p
    IMAGEPRO PCX     31413   7-06-92  10:00p
    BUSS-APP TXT      5406   7-06-92  10:00p
    EDITHELP TXT      8873   7-06-92  10:00p
    GO1      TXT      1692  10-22-92  12:38p
    GO1      BAT        38   7-01-92   2:33p
           21 file(s)     341208 bytes
                           10240 bytes free
