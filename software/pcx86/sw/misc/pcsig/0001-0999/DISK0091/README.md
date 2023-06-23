---
layout: page
title: "PC-SIG Diskette Library (Disk #91)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0091/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0091"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-SIG SAMPLER #4"

    Another fine collection of different kinds of entertaining games.  The
    text adventure will keep you busy for quite a while, and the arcade
    games will test your skills.  There is even chess!  Your move!
    
    System Requirements:  Some programs require color; BASIC
    
    How to Start:  To run BASIC programs consult the directions in GETTING
    STARTED for your configuration.
    
    ADVENT   DOC  Documentation for adventure game compiler
    BASCOM   PAT  Patches for IBM BASIC compiler
    BOGGLE   BAS  Find as many words as you can
    CHESS    BAS  New version of the old game
    COMPIL   BAS  Adventure system Database compiler
    DKSPAT   TXT  DISKCOPY and DISKCOMP patches for large (320K+) machines
    DRIVER   BAS  Driver for adventure system
    GLOBE    BAS+ Creates rotation globe on graphics screen
    GLOBE    DAT  Data file for GLOBE.BAS
    GOLF2    BAS  Golf game.
    HIQUE2   BAS  Puzzle game (uses lightpen if you have one)
    MUGGER   DAT  Sample adventure definition
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ADVENT.DOC

{% raw %}
```
ADVENTURE COMPILER and INTERPRETER system 2.1
---------------------------------------------
        Basic Version 4/1/83
Written by
Peter F. Levy
4209 Longmeadow Way
Fort Worth, TX 76133
(817) 292-8731
Adapted to the IBM Personal Computer by
Jim R. Cummins, jr.
5 Jacob St.
Ballston Lake, NY 12019
CompuServe [72155,1174]
(c) 1982,1983  P.F. Levy and J.R. Cummins
           All Rights Reserved
INTRODUCTION
This package is a Basic language version of the Levy Adventure
Development System, a machine language NEWDOS/80 based adventure 
game compiler and interpreter system for 32K or 48K Model I or 
Model III TRS-80's.  Version 2.x is an adapted version for the 
IBM Personal Computer that is essentially source code compatible 
with the TRS-80 versions.  All the capabilities of the machine-
language version are implemented, with three restrictions (due 
mostly to Basic's processing speed): 
(a) only limited synonyms are allowed.  A later version may 
    implement more complete synonyms if processing time for
    the input parser can be kept acceptable (namely under
    one second). 
(b) long descriptions are limited to 255 characters. 
(c) the number of explicit actions is limited to
    about 2000. 
Adventure game scenarios are created or edited using any
text editor capable of handling ASCII disk files (SCRIPSIT,
ELECTRIC PENCIL and PERSONAL EDITOR do nicely; WORDSTAR in
the non-document mode should work; even EDLIN is OK).  If
Wordstar or another word processor is used it must be in the
non-document mode so that DOS-compatible files are produced.
The databases are then saved as ASCII data files to be
compiled by utility COMPILER.BAS in order to prepare them
for interpretation by DRIVER.BAS.  The third program in this
system, DISASSEM.BAS, is used to disassemb compiled
adventures into an editable, re-compilable source file. 
For simplicity's sake, COMPILER.BAS will be referred to as
"the compiler", DRIVER.BAS as "the driver", and DISASSEM.BAS
as "the disassembler".
In order to allow this system to run very large databases,
the driver does not maintain an entire adventure in memory.
Instead, the parts of the database which require frequent or
immediate access are stored in memory, while the remainder
are kept on disk in an indexed reference file.  The index
permits almost instant access to random data. 
Consequently, there are a total of three separate disk files
associated with each complete adventure.  For any one
adventure, each has the same file name (the name of the
adventure) but a different identifying suffix or extension.  
The name of the adventure is defined by the filespec under 
which the creator saves the ASCII source file.
 (1) name.ADV, the ASCII source file
 (2) name.DAT, the portion of the database which resides in
     memory while the adventure is played including the
     index to the reference file
 (3) name.REF, the reference file addressed by the driver on
     an as-needed basis
The source file is used only by the compiler and need not be
present to play a compiled adventure.  The other two files
(which are created by the compiler) must be present for the
adventure to be played.
The remainder of these instructions will consist of sections
explaining the use of the compiler, driver, and disassembler;
followed by a detailed explanation of the source database
structure.
DEFINITIONS
-----------
VERB:    the first operative word of a player input, usually
         specifying what is to be done.
NOUN:    the second operative word of a player input, usually
         specifying what the action is to be done to.
OBJECT:  (a) the third operative word of a player input,
             usually specifying the tool through which the
             verb will be applied to the noun.
         (b) an item in the game having the properties of
             description, location, and weight
ROOM:    a discrete location in the game play area
MESSAGE: a predefined text displayable as a response to
         player input
IMPLICIT ACTION:  a series of tests and/or actions
         carried out by the driver each turn without 
         player interaction.  Each implicit action is
         attempted each iteration of play.
EXPLICIT ACTION:  a series of tests and/or actions to be
         carried out by the driver in response to a specific
         player input or command.  An explicit action is
         attempted only in response to player input for which
         it is defined.
TOKEN:   a mnemonic word used to name a specific test or action
TURN:    each time the player presses the <return> key
         constitutes a turn.  Implicit actions are attempted
         each turn and the player's input is parsed for
         a defined explicit action. 
THE COMPILER
The compiler creates the files required to actually play the
adventure, based on the information contained in the ASCII
source file.  The LADS compiler is called COMPILER.BAS.  It
requires three files to run.
You will first be asked "Database name? ".  Reply with the
name of the adventure database to be compiled (excluding the
extension, <name>.ADV is assumed).
Next you are asked, "Compilation drive? (A-D)".  Reply with
the letter of the disk drive (A-D) which is to receive the
compiled adventure files.  The source file need not be
resident on that particular drive.
Last, you are asked "Hard copy of compilation messages?
(Y/N)".  Reply Y if the messages the compiler displays during
its run (including error warnings and diagnostics) are to be
sent to the system printer as well as screen.  If no printer 
is attached to your system be sure to answer this question 
"N" or an error might occur.
The compiler runs to completion without user interaction.  As
the compilation progresses, messages will be displayed naming
the part of the database currently being processed and
describing any errors encountered, followed by "Compilation
complete" and a return to the OK prompt.  The adventure may be 
played immediately after compilation has been completed.
Compilation error messages are detailed and are, hopefully,
self-explnatory.
DISASSEM.BAS
The disassembler can read a set of compiled adventure data
files and generate source listings.  The disassembler has the
ability to provide hard copy and a disk source file, which can
be edited, if desired, and re-compiled by COMPILER.BAS.  Both of 
an adventure's runtime files (<name>.DAT and <name>.REF) must be 
present for the disassembler to work.
When you run the disassembler, you are first asked "Database
name?".  Reply with the name of the adventure to be
disassembled, excluding any extensions.
Next you are asked "Disassembly to line printer? (Y/N)". 
Reply Y or N, depending on whether or not you want a hard copy
of the disassembled source file.  If there is no printer on
your system be sure to answer N or errors may occur.
Next you are asked "Create source file on disk? (Y/N)".  Reply
Y or N, depending on whether or not you want to create an
ASCII source file on disk.  If you reply Y, you will be
further prompted "Destination file? (full filespec)".  Reply
with the full name (including any extensions and drive
specificaitions) of the file to receive the created source
text.
The disassembler runs to completion without user interaction.
THE INTERPRETER
The interpreter is the game executor and moderator.  It
supervises play of the game, updating the situation in
response to the player's typed commands and displaying the
game situation for the player.  The LADS driver is called
DRIVER.BAS.  It requires two files to run; both of these files
are generated by the compiler.
The driver will ask, "Adventure name?".  Reply with the name
of the adventure to be played, excluding any extensions.
The driver will open the needed files and almost immediately
display an opening text, which will remain displayed while the
reference file is opened and the data file and index is
transferred into memory.  When this setup phase is complete,
         "[press space bar to begin play]" 
will appear at the bottom center of the screen.  Play of the 
adventure will begin when the space bar is depressed.
Play of adventures under this system consists of a fairly
simple loop of events: 
      (a) the driver displays the current situation and a 
          ">" prompt, 
      (b) the player types his responses in any reasonable 
          grammatical form, and 
      (c) the driver interprets the player's response and 
          updates the game situation accordingly.
Although the command parser (which translates typed input into
numbers understandable by the driver) does a good job of
extracting information from fairly complex input phrases, it
does assume that the content of the player's response conforms
generally to a "verb-noun-object" structure, i.e., something
along the general lines of "verb the noun with the object". 
Input may be upper or lower case or a mixture.
The player may interrupt the game and return to OK by
pressing CTRL-BREAK at any > prompt.  This exit will not
close the data files, but this is harmless since the driver
never writes to disk. The may be continued by entering the
BASIC command CONT.  Note that some actions, such as changing
the program will not allow you to continue.
This system has eight abbreviated single-letter commands:  N,
S, E, W, U, D, I, and L.  N, S, E, W, U, and D are exactly
equivalent to "GO NORTH", "GO SOUTH", etc.  I displays an
inventory of what the player is currently carrying.  L stands
for "look" and describes the player's current location, and
describes and object in the room in detail.
The bottom line of the screen contains a summary of the current
game status and is revised whenever the player enters any
command.  This summary shows the player's current location, the 
available exits, the player's load (in percent of his carrying 
capacity), his current score, and the number of game turns 
played so far.
CREATING AN ADVENTURE -- SOURCE FILE STRUCTURE
An adventure source file in LADS is a straight ASCII text
file.  Each source file contains nine SECTIONS, each of which
is segmented into RECORDS.  The end of each record is marked
by a carriage return and the end of each section by two
consecutive carriage returns.  The nine sections are (in the
order in which they must exist within the file):
    1.  a header record
    2.  a verb dictionary
    3.  a noun dictionary
    4.  an object list
    5.  a room list
    6.  a message list
    7.  an implicit action table
    8.  an explicit action table
    9.  a remarks section, not read by the compiler.
NOTE:  In order to allow the adventure creator to display
several texts on one line, this system does NOT automatically
add a carriage return to the end of any text.  It is the
writer's responsibility to include a linefeed symbol ("/") at
the end of a text if desired.
HEADER
The first section is the HEADER, which is simply the
introductory or instructive text which the driver is to
display during setup.  Any slashes ("/") in this text will be
compiled as linefeeds; all other characters are displayed
exactly as entered.  Single carriage returns are also allowed
within the header record.  There is no limit to the length of
the header, but if it is longer than about 700/1400 characters 
it is likely to scroll the display in 40/80 width mode.  The 
end of this header section is marked by two consecutive 
carriage returns.
VERB SECTION
The second section is the VERB DICTIONARY.  This is a list of
all words which are to be used as verbs in the play of this
adventure.  Each record in this section consists of a primary
verb followed by a comma, number and carriage return.  There should
be no spaces between words and separators.  The section is
ended with a double carriage return.
Verbs should not use lower-case characters.
You may specify up to 199 verbs.  Each verb is either a primary or
secondary verb. Primary verbs are used in the action tables while
secondary verbs are synonyms of the primary verbs. If the number 
after the verb is zero then the verb is taken as primary otherwise 
it is linked to the verb defined in that position( 1=first verb
defined, 2=second, etc.).  The first three verbs must be "GET", 
"DROP", and "GO", in that order.
EXAMPLE:
GET,0<CR>
DROP,0<CR>
GO,0<CR>
ATTACK,0<CR>
WAIT,0<CR>
GRAB,1<CR>
RUN,3<CR><CR>
NOUN SECTION
The third section is the NOUN DICTIONARY.  This is structured
similarly to the verb dictionary, with two differences.  First, 
there are seven required nouns:  the first through seventh 
nouns must be "ANY", "NORTH", "SOUTH", "EAST", "WEST","UP", 
and "DOWN" (in that order).
Second, following each noun is an "object link", which is a
number from 0 to 255.  This specifies the object, by number,
to which the noun refers.  If the noun will not be used to
refer to any specific object, its link should be 0.  A noun
must be linked to a (material) object in the object list for
it to function when used as a (grammatical) object in player
input during game play.
You may specify up to 199 nouns.  Note that several nouns can
be linked to the same physical object.
EXAMPLE:
ANY,0<CR>
.
.
DOWN,0<CR>
BOOK,2<CR>
NEWSPAPER,6<CR>
DISKETTE,0<CR><CR>
OBJECT SECTION
The fourth section is the OBJECT TABLE.  The object table
contains up to 255 records, each of which describes one object
in the game.  Each record has six items in it:
    (a) An object number from 1 to 255, followed by a space.
        These numbers are the ones to which the noun links refer.
        No two objects may have the same number.  Each object must
        be numbered, and the numbers must be sequential from 1.
    (b) The object's name, which must be no longer than 25
        characters and is ended by a comma.  Both upper and lower case
        characters are permitted, as well as digits, spaces, and
        punctuation (except a comma, of course.)
    (c) The object's start room, which is a number which describes
        the object's location at the start of the game.  LADS uses
        rooms numbered from 0 to 255.  An object may be placed in any
        room.  Room 0 is a storeroom of objects not in play for now,
        room 255 is the location of objects carried by the player.
    (d) The object's weight, in percent of the player's carrying
        capacity.  A weight of 255 signifies an immovable object.
    (e) The object's point value.  This is the number of points
        the player is awarded for carrying the object.
    (f) The object's long description, which may be up to 255
        characters long and contain any characters.  Slashes will be
        compiled as linefeeds. The long description (and the record)
        are terminated by a carriage return.
Note: If an object starts as carried by the player (e.g. in
room 255), that object's weight will initially be added to
the player's load.  
The object's name is how it is referred to when the inventory
("I") command is issued; its long description is the notice
printed by the driver to announce object's presence.
EXAMPLE:
1 Book,1,5,0,There is an old leather-bound book here./<CR>
2 Brass lantern,0,15,20,You note a shiny brass lantern lying/
nearby./<CR>
3 Statue,3,255,0,There is a six foot high statue of a/
parakeet in the room./<CR>
4 Stairs,7,255,0,A flight of narrow stairs leads up./<CR><CR>
Note that linefeed symbols ("/") are added to the end of each
text line.  If this is omitted, the next line of text the
driver displays will follow the previous line without any
linefeeds.
ROOM SECTION
The fifth section is the ROOM TABLE.  This section is very
similar to the object table.  The first item is the players
start room number (1 to whatever) followed by a carriage
return; the second and following(up to 255 records) each  
describe one room (or discrete location).  Each  record has
the following structure: 
    (a) A room number from 1 to 254, followed by a blank.  No 
        two rooms may have the same number.  Note that rooms 0 
        and 255 are predefined:  room 0 is a storeroom for objects 
        not currently in play; room 255 is the player (objects that 
        are carried are in room 255).  Rooms 0 and 255 MUST NOT be 
        defined in the room table.  Each room must be numbered, and 
        the numbers must be sequential from 1.
    (b) A room name, up to 25 characters long, ended by a comma. 
        Any other characters are allowed.
    (c) Six links, specifying (by number) the connecting rooms to 
        the north, south, east, west, up, and down; respectively. 
        Zero indicates no passage in a particular direction. Note 
        that only the "obvious" passages are indicated and the 
        author may have "secret" or "hidden" passages. See below.
    (d) A long description of the room, ended by a carriage
        return.  The description may be any length.  Slashes in this
        description are compiled as linefeeds.
ROOM CONNECTION DETAILS.  The room connections specified by
the links in the room table are a room's "obvious exits", and
will be dislayed as available exits on the status dislay at
the bottom of the screen.  Any other room connections are not
"obvious" and won't be displayed; the player must be told of
them.  An example is an elevator where the U command does not
cause the player to go up but pushing the proper button causes
the player to be moved "up" to the proper "room".
EXAMPLE:
1 Cave,0,3,0,6,0,5,You are in a large cavern./<CR>
2 Computer room,1,5,0,0,0,0,You are in a computer room.  An /
IBM PC named Halob awaits your bidding./<CR><CR>
MESSAGE SECTION
Each record in the MESSAGE TABLE defines one message available
to the adventure driver, and contains two items:  a message
number from 1 to 255, followed by a space; and the message
text terminated with a carriage return.  The text may be up to
255 characters long and may contain any characters.  Slashes
are compiled as linefeeds.  Each message must be numbered.  No
two messages may have the same number.  Numbers must be
sequential from 1.
EXAMPLE:
1 The UFO's protective field won't let you approach./<CR>
2 Please don't shoot him, you'll only make him mad./<CR>
3 There was a passage hidden behind the drapes!/<CR><CR>
IMPLICIT(AUTO) ACTION TABLE
The seventh section describes the background activities to
take place during play of an adventure.  Implicit actions are
attempted automatically by the driver each turn of play, and
are used to move dragons around at random, check to see if
certain unsupervised (uncommanded, therefore implicit) actions
are to take place, and so on.  Each activity consists of a
line naming tests and actions to be carried out by the driver
and is ended by a space-period-carriage return sequence.  The
exact structure of an action line, and the names and uses of
the different tests and actions available, are explained in a
later section.  The table is terminated with a double carriage
return.
Action entries may be divided over several lines.  If a line
ends with a space-comma-carriage return, the next line is
treated as a continuation of the same action line.
Since the implicit action is checked on every turn it can 
greatly slow the game.  Structure your tests so that if the 
event has not happened it will quickly exit. Careful design 
will maintain reasonable speed.
EXPLICIT ACTION TABLE
The eighth section is the explicit action table.  An explicit
action is carried out by the driver in response to a specific
command, in the form of a verb-noun pair.  It contains one
record for each verb-noun pair for which the adventure author
wishes to define an action.  Each entry consists of the verb
and noun to which the action is to be linked, and a line
naming the tests and actions to be performed by the driver if
the verb-noun command is given.
All letters used in nouns and verbs here must be upper case. 
The driver converts all input to upper case before testing so
lower case verbs and nouns will never match. The verb, noun, 
and all test or action names must be separated by one or more 
spaces; and the record terminated by a space-period-carriage 
return sequence.
Action entries may be divided over several lines.  If a line
ends with a space-comma-carriage return, the next line is
treated as a continuation of the same action line.
REMARKS SECTION
The ninth and last section is ignored entirely by the compiler
and provides space for the author to place any remarks he
wishes to add to the database.

ACTION ENTRIES (Both Implicit and Explicit)
Action entries define action to take place, either as a
background activity (implicit or auto action) or as a result
of a player instruction (an explicit action, invoked by a
verb-noun pair).  These are what actually tell the driver
program what to do in response to situations or player
input. Each action entry consists of one line of tests and
actions to be carried out.  Each test and action available
has a four-character mnemonic name (called a "token") and
represents either a specific test to be performed ("is the
golden key in the King's Chamber?") or action to be taken
("display message 2"). Each token has from zero to two data
fields associated with it which specify the parameters
involved in the test or action (object numbers, locations,
etc).  These follow the token name as decimal numbers. 
There is no particular limit to the length of a typed action
entry, but the total number of tokens (and data fields
associated with them) in a single action entry must not exceed
255.
When the driver executes an action line, that line is
interpreted from left to right.  Tests and actions may be
mixed unconditionally within an action line.  If the token
involves a test, the truth of the tested condition is
evaluated and logically ANDed with a truth flag; if the token
is an action it is performed if the truth flag is currently
TRUE (that is, all the preceding tests returned a logical
TRUE).
Any test may be inverted by prefixing it with a "-" character.
This will cause the opposite condition from that specified to
be tested.  For example, token "INRX" means "in room X", and
"INRX 4" returns a logical TRUE if the player is then in room
4.  If the token is inverted, as "-INRX 4", it returns a
logical TRUE if the player is NOT in room 4.
Any action may also be inverted in the same way.  An action is
normally performed if all the preceding tests returned logical
TRUE; an inverted action is performed if one or more of the
preceding tests returned a logical FALSE.
Following is a list of the tokens available and their
functions.  Where used, "x" and "y" represent prototype values
supplied after the token as data.
TEST TOKENS
TOKEN        RETURNS "TRUE" IF
--------------------------------------------------------------
HASX x       The player is carrying object x
NCRX x       Object x is in the current room (the same room as
               the player)
AVLX x       Object x is available to the player (either in
               the same room or carried)
XINY x y     Object x is in room y
NSRX x       Object x is in its start room
NR0X x       Object x is in room zero (out of play)
XW/Y x y     Object x is in the same room as object y
HASL         The player is carrying the object linked to the
               current noun (the "linked object")
NCRL         The linked object is in the same room as the
               player
AVLL         The linked object is available to the player
LINX x       The linked object is in room x
NSRL         The linked object is in its start room
NR0L         The linked object is in room 0
LW/X x       The linked object is in the same room as object x
RAND x       x% chance of returning TRUE
CEQN x y     Counter #x is equal to y
CGEN x y     Counter #x is greater than or equal to y
CEQC x y     Counter #x is equal to counter #y
CGEC x y     Counter #x is greater than or equal to counter #y
XSET x       Bit flag #x is set
INRX x       Player is in room x
LIGH         The current location is lighted
LDGT x       The player's load is greater than x%
OBJ= x       The command's (grammatical) object referred to
               (material) object #x.  The (grammatical) object
               in the command line must have been a noun which
               is linked to a (material) object for this to
               work.  OBJ= 0 will return TRUE if either the
               input specified no object or the (grammatical)
               object is not linked to a (material) object
               in the noun dictionary.
ACTION TOKENS
TOKEN        Performance
------------------------------------------------------------
X2RY x y     Object x is moved to room y
X2OY x y     Object x is moved to object y
X2CR x       Object x is moved to the current room
X2SR x       Object x is moved to its start room
X2R0 x       Object x is moved to room 0
X<>Y x y     Objects x and y are exchanged
L2RX x       Linked object is moved to room x
L2OX x       Linked object is moved to object x
L2CR         Linked object is moved to the current room
L2SR         Linked object is moved to its start room
L2R0         Linked object is moved to room 0
L<>X x       Linked object is exchanged with object x
DROP         All objects carried by player are dropped (moved
               to current room)
P2RX x       The player is moved to room x
P2OX x       The player is moved to the room occupied by
               object x
SCO+ x       x is added to the player's score, x=-127 to 127
HEAL x       x is added to the player's health, x=-100 to 100
CTX+ x y     y is added to counter x, y=-127 to 127
CTX= x y     Counter x is set equal to y, y=-127 to 127
SETX x       Bit flag x is set
CLRX x       Bit flag x is reset (cleared)
MSGX x       Message x is displayed
ENDG         The game is ended
LMP1         Illumination is "on"
LMP0         Illumination is "off" -- darkness
DIAG         Display health state
WAIT x       Game play pauses for about x/4 seconds.
ECHO         The player's input is echoed in format "To <verb>
               a <noun> with a <object> ", with a trailing
               space but without a following carriage return
RPTV         Repeat verb.  The last input verb is displayed
               without leading or trailing blanks.
RPTN         Repeat noun.  The last input noun is
               displayed without leading or trailing blanks.
RPTO         Repeat object.  The last input object is
               displayed without leading or trailing blanks.
ELSE         If TRUE when evaluated, action processing ends;
               if FALSE, the truth state is reset to TRUE and
               processing restarts with the next token.
SAVE         Save the game to disk. The player's location and
               all objects in the game are saved.
LOAD         A previously SAVEd game is loaded from disk. 
EXAMPLES:
(a) if at any time the player carries object 17 into room 4,
make object 8 appear and display message 7.  This is a
background-type activity and would go in the background
activity table.  In specific terms,
    if player is in room 4, and                   INRX 4
       player is carrying object 17, then         HASX 17
       move object 8 to current room, and         X2CR 8
       display message 7.                         MSGX 7
The action entry would be:  INRX 4 HASX 17 X2CR 8 MSGX 7 .<CR>
(b) if the player specifies "RUB LANTERN", and is carrying
object 2 (the lantern), and object 4 (a magic preventer) is
not either carried or in the current room (hence not
available), then bring a genie into the room and display
message 10 ("POOF!"); otherwise display message 11 ("The
lantern gets shinier").
    If player commands "RUB LANTERN",            RUB LANTERN
       and has object 2                          HASX 2
       and object 4 isn't around                 -AVLX 4
       then bring in genie to current room       X2CR 7
       and display message 10                    MSGX 10
    otherwise,                                   ELSE
       display message 11                        MSGX 11
The action entry would be:
RUB LANTERN HASX 2 -AVLX 4 X2CR 7 MSGX 10 ELSE MSGX 11 .<CR>
(c) If the player attacks a demon with any object besides a
sword, display "To attack a demon with a <whatever> is not a
good idea."  The sword is object 4, and "is not a good idea./"
is message 9.
    If player specifies "ATTACK DEMON"            ATTACK DEMON
       and the object is not "SWORD"              -OBJ= 4
       echo user input                            ECHO
       and print message 9                        MSGX 9
The action entry would be:
ATTACK DEMON -OBJ= 4 ECHO MSGX 9 .
DEFAULT ROUTINES FOR EXPLICIT ACTIONS
LADS provides default action handlers which allow the
adventure creator to handle a variety of general situations
using only one explicit action entry.  A default action has
the same form as any other action line, but specifies ANY as
a noun.  A verb's default action is invoked if there is no
action routine defined for the verb-noun pair the player has
issued or if the noun isn't in the game dictionary. 
For example, the default action of EXAMINE is "You find it
perfectly ordinary." If the a different default action is
desired then rather than having to tediously define action
entries for each possible examination, you can specify a
single entry as EXAMINE ANY. This action would then be
performed if the player typed "EXAMINE something", and
either there was no explicit action entry defined for that
verb-noun pair or the noun wasn't in the dictionary. 
GET, DROP, and GO also have default action handlers which 
are built in the driver.  If the player issues a GET noun, 
DROP noun, or GO noun command the driver will (first) try to 
find a specific action entry for the command, then failing 
that will (second) look for a GET ANY, DROP ANY, or GO ANY 
action routine, then (failing even that) try to execute its 
internal GET, DROP, or GO handler.
Note that the presence of GET ANY or DROP ANY action 
handlers will prevent the driver from using its internal GET 
or DROP handlers.  The internal GO handler is not locked out 
by the presence of a GO ANY action;  if such an action is 
present the internal GO routine will be used if execution of 
the GO ANY routine was attempted but failed to cause any 
action because of false tests.
For GET, the object will be picked up if all of the 
following conditions are met:
        (a) the noun is linked to an object,
        (b) the linked object is in the same room
            as the player,
        (c) it is not currently carried,
        (d) it is not immovable (weight is not 255),
        (e) the player's load will permit the acquistion.
If any of these tests fails, an appropriate message will be 
displayed (such as "You can't carry that much more 
weight.");  if the object is picked up the driver will 
announce "The (whatever) taken."
For DROP, the object will be dropped if (a) the noun is 
linked to an object, and (b) the object is carried.  If 
either test fails, a message will be printed.  If the tests 
succeed, the driver will display "The (whatever) released."
For GO, the player will move if the noun was a legal 
direction and there is a link to a room in the specified 
direction.
        TECHNICAL STUFF
        ---------------
Exact Interpretation Logic
The general flow of action processing is:
    display     get      conduct     carry     display
-->        --> user  -->implicit -->  out  -->   new  --> ...
   situation  command    action     command   situation
Actions are interpreted as follows:
1. Parse command.  The verb, noun, and object are extracted 
   from the input line and each is looked up in a vocabulary 
   table.  If the verb doesn't exist, an error is declared 
   ("I don't know how to <verb>").  If the noun doesn't exist 
   or isn't specified, the driver assign the noun "ANY" to the 
   command.  The object is looked up and stored.  If no object 
   is specified or the specified object isn't a noun linked to 
   a physical object, then the object number is set to zero.
2. If the entire command is "I" or "L", control is 
   transferred immediately to the appropriate routine.
3. The index is checked for the existence of an action 
   routine for the specified verb-noun pair.  If an action 
   routine exists, it is read from the reference file and 
   control is passed to the action executor.
4. If no action entry for the verb-noun pair exists, the 
   driver rechecks the index for an entry for "<verb> ANY".  If 
   one if found, it is read from the reference file and control 
   is passed to the action executor.
5. If no action for "<verb> ANY" exists and the verb is GET 
   or DROP; or the verb is GO and no action has yet been taken 
   (even if a GO ANY routine exists and has been attempted), 
   control is passed to an internal routine dealing with GET or 
   DROP or GO.  Note that action table entries take precedence 
   over these internal default routines, and that the existence 
   of GET ANY or DROP ANY action routine will lock out the 
   driver's internal GET or DROP routines.
6. If none of the above succeed, an error is declared and 
   the message "I don't know how to <verb> <noun>." is 
   displayed.
REQUIRED EQUIPMENT
Versions 2.x are written for an IBM Personal Computer with 
64K RAM and at least one diskette drive running PC-DOS.  It 
is possible that the system will run in less memory or with 
other operating systems (such as CP/M-86) but it has not 
been tested.  The original version was written for the 
TRS-80 Model I or III with 32K RAM, 2 disks and NEWDOS/80 
operating system.  Version 2.1 has extended some of the 
capabilities of the original but for the most part is still 
source code compatible with it.  Those who wish to further 
extend or translate it to another system are invited to contact 
either of the authors.
SPECIFIACTIONS
Vocabulary:             199 verbs, 199 nouns
Object table:           255 objects
Room table:             254 playing rooms
                            (Room 0 is reserved for storage)
                            (Room 255 is the player)
Message table:          255 message texts
Action table:           255 auto or implicit actions
                        up to about 2000 action entries
Counters:               256 available, numbered 0-255, 8 bits
Bit flage:              256 available, numbered 0-255
RESPONSIBILITIES OF THE ADVENTURE AUTHOR
This compiler will let you specify just about any action.  
The only things it disallows are those it just can't fit 
into the system's database structure, such as two rooms with 
the same number.  It is the responsibility of the adventure 
author to ensure that the actions he specifies are 
realistic.  The compiler/driver system won't stop you from 
doing something idiotic; if you want to put the player in 
Room 0 or such, it'll let you.
----------End of Documentation--------

```
{% endraw %}

## BOGGLE.BAS

{% raw %}
```bas
1 REM The number in line 240 represents the game length in seconds.
2 KEY OFF : CLS
3 PRINT "This game simulates the popular game of BOGGLE and probably infringes
4 PRINT "on somebody's patent, trademark, and copyright.  The object is to form
5 PRINT "as many words within the time limit (3 minutes) as possible.  Each
6 PRINT "3 letter word counts 1 point, 4 letter words 2 points, etc.  Plurals
7 PRINT "are allowed but not popular names, etc.  Words shorter than 3 letters
8 PRINT "are not permitted.  Words may be formed horizontally, vertically,
9 PRINT "diagonally, backwards, around corners, etc.  Two or more may play." : PRINT : PRINT
10 RANDOMIZE
20 DIM BOARD$(16), INDEX(16), DIE$(16,6)
30 FOR I = 1 TO 16
40 FOR J = 1 TO 6
50 READ DIE$(I,J)
60 NEXT J
70 NEXT I
80 DATA C,A,S,E,R,L
90 DATA M,A,Qu,O,J,B
100 DATA A,L,I,B,T,Y
110 DATA B,I,X,O,F,R
120 DATA A,A,O,I,T,C
130 DATA D,U,N,O,K,T
140 DATA R,L,G,W,U,I
150 DATA N,I,P,E,H,S
160 DATA M,O,R,A,H,S
170 DATA G,E,Y,U,K,L
180 DATA Y,I,E,E,H,F
190 DATA W,O,S,E,D,N
200 DATA N,V,D,Z,E,A
210 DATA C,A,T,E,D,M
220 DATA S,P,T,L,E,U
230 DATA T,E,V,I,G,N
240 GT=18
300 CLS : LOCATE 1,36 : PRINT "B O G G L E" : LOCATE 3,1 : PRINT "Tumbling the dice...";
310 FOR J = 1 TO 16
320 I = 1 + CINT(5*RND)
330 BOARD$(J) = DIE$(J,I)
340 NEXT
345 J = 1 : SUM = 0
350 WHILE J <= 15
360 I = 1 + CINT(15*RND)
370 FLAG = 0
380 FOR L = 1 TO J
390 IF INDEX(L) = I THEN FLAG = 1
400 NEXT
410 IF FLAG = 0 THEN INDEX(J) = I : J = J + 1 : SUM = SUM + I : PRINT ".";
420 WEND
425 PRINT "!"; : INDEX(16) = 136 - SUM
430 LOCATE 5,1 : PRINT "Type any key when ready to start...";
440 IF INKEY$ = "" THEN 440
445 TIME$ = "00:00:00"
450 GOSUB 1000
455 AL = 1
460 ST = 60*VAL(MID$(TIME$,4,2)) + VAL(RIGHT$(TIME$,2))
470 LOCATE 3,39 : PRINT RIGHT$(TIME$,5)
480 CT = 60*VAL(MID$(TIME$,4,2)) + VAL(RIGHT$(TIME$,2))
485 IF (CT > ST+GT-10) AND AL=1 THEN AL=0 : SOUND 200,3 : LOCATE 21,31 : PRINT "10 SECOND WARNING!";
490 IF CT < ST + GT THEN 470
500 BEEP : BEEP : CLS : LOCATE 1,36 : PRINT "B O G G L E" : LOCATE 5,1
510 PRINT "Time's up!!!" : PRINT
520 PRINT "Type any key to restore screen...";
530 IF INKEY$ = "" THEN 530
540 GOSUB 1000
550 LOCATE 22,1 : PRINT "Type <R> to repeat, any other key to quit...";
560 Q$ = INKEY$ : IF Q$ = "" THEN 560
570 IF Q$ = "R" OR Q$ = "r" THEN 300
580 CLS : KEY ON : END
1000 CLS : LOCATE 1,36 : PRINT "B O G G L E"
1005 COLOR 15
1010 FOR CNT = 1 TO 13 STEP 4
1020 LOCATE .75*CNT + 8.25,31
1030 PRINT USING "\\"; BOARD$(INDEX(CNT));
1040 LOCATE .75*CNT + 8.25,37
1050 PRINT USING "\\"; BOARD$(INDEX(CNT+1));
1060 LOCATE .75*CNT + 8.25,43
1070 PRINT USING "\\"; BOARD$(INDEX(CNT+2));
1080 LOCATE .75*CNT + 8.25,49
1090 PRINT USING "\\"; BOARD$(INDEX(CNT+3));
1100 NEXT CNT
1105 COLOR 7
1110 RETURN
```
{% endraw %}

## CHESS.BAS

{% raw %}
```bas
240 CLEAR ,,2048
250 REM CHESS C.4 BY M. C. RAKASKA, IDES OF MARCH, 1980
260 REM ADAPTED BY S. W. HUGGINS, DECEMBER 1981 FOR THE IBM PERSONAL COMPUTER.
270 DEFINT A-Z:A=0:B=0:X=0:Y=0:S=0:A0=0:T=0:A8=0:A1=0:A2=0:A3=0:A4=0:B1=0:B6!=0:           H=0:M=0:N=0:P=0:W=0:A5=0:I=1:DIM C(64), A(10,10), B(10,10), T(10,10)
280 CLS:KEY OFF:INPUT "DO YOU WANT INSTRUCTIONS ";IN$:IN$=LEFT$(IN$,1):             IF IN$="Y" THEN GOSUB 3500
290 CL$="N"
300 CLS:INPUT "YOUR NAME IS ";B$:IF B$="" THEN B$=" HUMAN " ELSE B$=LEFT$(B$,9)
310 CLS:PRINT "LEVEL OF PLAY";:INPUT B8!:IF B8!=0 THEN B8!=1:B7!=1+RND(0)/2:ELSE    B7!=(B8!+1)/2+RND(0)/2
320 CLS:PRINT "DO YOU WANT WHITE ";B$;" ";:INPUT C$:GOSUB 1010:IF LEFT$(C$,1)<>"N"   THEN GOSUB 1120:GOTO 430
330 GOSUB 1110:IF CL$="Y" THEN LOCATE 25,6,0:                                        PRINT "START ";TIME$;
340 F!=-99:A0=0:FOR J=1 TO 8:FOR K=1 TO 8:IF A(J,K)=99 THEN A6=J:A7=K
350 NEXT:NEXT
360 FOR X=1 TO 8:FOR Y=1 TO 8:IF A(X,Y)<0 THEN GOSUB 500:                           IF F!>=B7! THEN GOTO 390
370 NEXT:NEXT:IF F!>=-9 THEN GOTO 390 ELSE GOSUB 1120
380 LOCATE 25,62,0: PRINT "I CONCEED    ";:GOTO 3470
390 A(R,U)=A(E,Q):A(E,Q)=1:IF A(R,U)=-2 AND U=1 THEN A(R,U)=-9
400 X=R:Y=U:A0=4:GOSUB 500:LOCATE 25,62,0:PRINT "IS MY MOVE    ";:                  LOCATE 25,51,0:PRINT CHR$(E+64);Q;"- "CHR$(R+64);U;
410 IF CL$="Y" THEN LOCATE 25,31,0:PRINT "STOP ";TIME$;
420 X=E:Y=Q:GOSUB 1130:X=R:Y=U:GOSUB 1130:IF C=1 THEN LOCATE 24,1,1:                  PRINT "CHECK ";:C=0 ELSE LOCATE 24,1,1:PRINT "      ";
430 IF X$="S" THEN GOSUB 3090:B7!=3*RND(0):LOCATE 25,1,1:PRINT "SELF-PLAYING";: GOSUB 3800:GOTO 340:ELSE LOCATE 25,1,1:PRINT "MOVE "+CHR$(7);B$;:GOSUB 2850:D=0:B4=A:B9=B:B5=0:IF A(X,Y)=2 AND Y=5 AND B=6 AND A(A,B)=1 AND ABS(A-X)=1 THEN B5=1:GOTO 460
440 IF X$="K" OR X$="Q" THEN GOSUB 1120:LOCATE 25,1,0:PRINT STRING$(14," ");:        GOTO 340
450 IF X$="S" THEN CL$="N":GOTO 430:ELSE A0=3:GOSUB 490:                            IF D=0 THEN LOCATE 25,31,0:PRINT "ILLEGAL       ";:GOTO 430
460 LOCATE 25,31,1:PRINT "OK            ";:A=B4:B=B9:A(A,B)=A(X,Y):A(X,Y)=1:        GOSUB 1130:X=A:Y=B:GOSUB 1130:IF N$="N" THEN GOSUB 1120:N$=" "
470 IF A(A,B)=2 AND B=8 THEN LOCATE 25,31,1:PRINT "WHAT PIECE";:GOSUB 3380:         X=A:Y=B:GOSUB 1130:LOCATE 25,31,1:PRINT "              ";
480 IF B5=1 THEN A(A,B-1)=1:X=A:Y=B-1:GOSUB 1130:GOTO 340:ELSE GOTO 340
490 LOCATE 1,78,0:PRINT "$ ";:                                                      ON A(X,Y) GOTO 0, 700, 0, 600, 550, 0, 510, 0, 550:GOTO 680
500 ON -A(X,Y) GOTO 0, 750, 0, 600, 550, 0, 510, 0, 550:GOTO 680
510 B=Y:FOR A=X+1 TO 8:GOSUB 860:IF S=0 THEN NEXT ELSE GOTO 520
520 FOR A=X-1 TO 1 STEP -1:GOSUB 860:IF S=0 THEN NEXT ELSE GOTO 530
530 A=X:FOR B=Y+1 TO 8:GOSUB 860:IF S=0 THEN NEXT ELSE GOTO 540
540 FOR B=Y-1 TO 1 STEP -1:GOSUB 860:IF S=0 THEN NEXT:RETURN ELSE RETURN
550 B=Y:FOR A=X+1 TO 8:B=B+1:GOSUB 860:IF S=0 THEN NEXT ELSE GOTO 560
560 B=Y:FOR A=X-1 TO 1 STEP -1:B=B-1:GOSUB 860:IF S=0 THEN NEXT ELSE GOTO 570
570 B=Y:FOR A=X-1 TO 1 STEP -1:B=B+1:GOSUB 860:IF S=0 THEN NEXT ELSE GOTO 580
580 B=Y:FOR A=X+1 TO 8:B=B-1:GOSUB 860: IF S=0 THEN NEXT ELSE GOTO 590
590 IF ABS(A(X,Y))=9 THEN GOTO 510:ELSE RETURN
600 A=X+2:B=Y+1:IF A<9 AND B<9 THEN GOSUB 870 ELSE GOTO 610
610 B=B-2:IF B>0 AND A<9 THEN GOSUB 870 ELSE GOTO 620
620 A=A-4:IF A>0 AND B>0 THEN GOSUB 870 ELSE GOTO 630
630 B=B+2:IF B<9 AND A>0 THEN GOSUB 870 ELSE GOTO 640
640 A=A+1:B=B+1:IF A>0 AND A<9 AND B<9 THEN GOSUB 870 ELSE GOTO 650
650 B=B-4:IF B>0 AND A>0 AND A<9 THEN GOSUB 870 ELSE GOTO 660
660 A=A+2:IF A>0 AND A<9 AND B>0 THEN GOSUB 870 ELSE GOTO 670
670 B=B+4:IF B<9 AND A>0 AND A<9 THEN GOSUB 870:RETURN ELSE RETURN
680 FOR A=X-1 TO X+1:FOR B=Y-1 TO Y+1:IF A(A,B)<>0 THEN GOSUB 870
690 NEXT:NEXT:RETURN
700 A=X:IF Y>2 THEN GOTO 720 ELSE GOTO 710
710 B=Y+1:IF A(A,B)=1 THEN GOSUB 880:B=B+1:IF A(A,B)=1 THEN GOSUB 880:GOTO 730:     ELSE GOTO 730:ELSE GOTO 730
720 B=Y+1:IF A(A,B)=1 THEN GOSUB 880 ELSE GOTO 730
730 A=X+1:B=Y+1:IF A(A,B)<0 THEN GOSUB 880 ELSE GOTO 740
740 A=A-2:IF A(A,B)<0 THEN GOSUB 880:RETURN:ELSE RETURN
750 A=X:IF Y<7 THEN GOTO 770 ELSE GOTO 760
760 B=Y-1:IF A(A,B)=1 THEN GOSUB 880:B=B-1:IF A(A,B)=1 THEN GOSUB 880:GOTO 780:     ELSE GOTO 780:ELSE GOTO 780
770 B=Y-1:IF A(A,B)=1 THEN GOSUB 880 ELSE GOTO 780
780 A=X-1:B=Y-1:IF A(A,B)>1 THEN GOSUB 880 ELSE GOTO 790
790 A=A+2:IF A(A,B)>1 THEN GOSUB 880:RETURN:ELSE GOTO 810
800 T=A(A,B):IF T=-99 THEN B1=T:RETURN:ELSE GOTO 810
810 A5=S:IF ABS(T)<=A(X,Y) THEN A(A,B)=A(X,Y):A(X,Y)=1:GOTO 830:ELSE GOTO 820
820 IF T<B1 THEN B1=T:S=A5:RETURN:ELSE S=A5:RETURN
830 A1=X:A2=Y:A3=A:A4=B:A8=T:A0=2:FOR X=1 TO 8:FOR Y=1 TO 8:                        IF A(X,Y)<0 THEN GOSUB 500:IF T=0 THEN GOTO 850
840 NEXT:NEXT
850 X=A1:Y=A2:A=A3:B=A4:A0=5:A(X,Y)=A(A,B):A(A,B)=A8:GOTO 820
860 S=0:IF A(A,B)=1 THEN GOTO 880 ELSE IF A(A,B)=0 THEN S=1:RETURN:                 ELSE IF SGN(A(A,B))=SGN(A(X,Y)) THEN S=1:RETURN:ELSE S=1:GOTO 880
870 IF A(A,B)=1 THEN GOTO 880 ELSE IF SGN(A(A,B))=SGN(A(X,Y)) THEN RETURN:          ELSE GOTO 880
880 LOCATE 1,78,0:PRINT "  ";:ON A0 GOTO 890, 900, 910, 920, 930:GOTO 940
890 IF A6=A AND A7=B THEN B1=B1+1:RETURN:ELSE RETURN
900 IF A3=A AND A4=B THEN T=0:RETURN:ELSE RETURN
910 IF B4=A AND B9=B THEN D=1:RETURN:ELSE RETURN
920 IF A6=A AND A7=B THEN C=1:RETURN:ELSE RETURN
930 IF A(A,B)<0 THEN GOTO 800 ELSE RETURN
940 B3=S:W=X:M=Y:N=A:H=B:P=A(A,B):A(A,B)=A(X,Y):A(X,Y)=1:B1=0
950 A0=5:FOR X=1 TO 8:FOR Y=1 TO 8:IF A(X,Y)>1 THEN GOSUB 490
960 NEXT:NEXT:X=N:Y=H:A0=1:GOSUB 500:A0=0:S=B3:X=W:Y=M:A=N:B=H:A(X,Y)=A(A,B):       A(A,B)=P
970 B6!=1/(ABS(4.5-A)+ABS(4.5-B)+1):IF A(X,Y)<-2 AND A(X,Y)>-9 THEN                 B6!=B6!+1/(ABS(A6-A)+ABS(A7-B)+5)+RND(0)/15
980 G!=P+B1+B6!:IF P=99 THEN GOSUB 1120:                                             LOCATE 25,1,1:PRINT "MATE ";B$;:GOTO 3470
990 IF G!<=F! THEN RETURN
1000 F!=G!:E=X:Q=Y:R=A:U=B:RETURN
1010 CLS
1020 Y=0:FOR J=896 TO 0 STEP -128:Y=Y+1:X=0:FOR K=J TO 42+J STEP 6:X=X+1:            T(X,Y)=K:NEXT:NEXT
1030 Y=0:FOR J=960 TO 64 STEP -128:Y=Y+1:X=0:FOR K=J TO 42+J STEP 6:X=X+1:            B(X,Y)=K:NEXT:NEXT
1040 DATA -7, -4, -5, -9, -99, -5, -4, -7
1050 DATA -2, -2, -2, -2, -2, -2, -2, -2
1060 DATA 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
1070 DATA 2, 2, 2, 2, 2, 2, 2, 2
1080 DATA 7, 4, 5, 9, 99, 5, 4, 7
1090 FOR Y=8 TO 1 STEP -1:FOR X=1 TO 7 STEP 2:S(X,Y)=I:S(X+1,Y)=-I:NEXT:I=-I:NEXT
1100 FOR Y=8 TO 1 STEP -1:FOR X=1 TO 8:READ A(X,Y):NEXT:NEXT:RETURN
1110 I=-I:A(4,1)=99:A(5,1)=9:A(4,8)=-99:A(5,8)=-9
1120 FOR Y=1 TO 8:FOR X=1 TO 8:GOSUB 1130:NEXT:NEXT:RETURN
1130 IF S(X,Y)>0 THEN GOTO 1150
1140 ON ABS(A(X,Y)) GOSUB 1230, 1420, 0, 2200, 2460, 0, 2720, 0, 1680                   :IF ABS(A(X,Y))=99 THEN GOSUB 1940:RETURN ELSE RETURN
1150 ON ABS(A(X,Y)) GOSUB 1160, 1290, 0, 2070, 2330, 0, 2590, 0, 1550                    :IF ABS(A(X,Y))=99 THEN GOSUB 1810:RETURN ELSE RETURN
1160 IF S(X,Y)<0 THEN GOTO 1230
1170 LOCATE 25-Y*3,X*8+1,0
1180 PRINT STRING$(8,CHR$(219));
1190 LOCATE 26-Y*3,X*8+1,0
1200 PRINT STRING$(8,CHR$(219));
1210 LOCATE 27-Y*3,X*8+1,0
1220 PRINT STRING$(8,CHR$(219));:RETURN
1230 LOCATE 25-Y*3,X*8+1,0
1240 PRINT STRING$(8," ");
1250 LOCATE 26-Y*3,X*8+1,0
1260 PRINT STRING$(8," ");
1270 LOCATE 27-Y*3,X*8+1,0
1280 PRINT STRING$(8," ");:RETURN
1290 IF I*A(X,Y)<0 THEN GOTO 1360
1300 LOCATE 25-Y*3,X*8+1,0
1310 PRINT STRING$(8,CHR$(219));
1320 LOCATE 26-Y*3,X*8+1,0
1330 PRINT STRING$(3,CHR$(219));CHR$(2);STRING$(4,CHR$(219));
1340 LOCATE 27-Y*3,X*8+1,0
1350 PRINT STRING$(8,CHR$(219)):RETURN
1360 LOCATE 25-Y*3,X*8+1,0
1370 PRINT STRING$(8,CHR$(219));
1380 LOCATE 26-Y*3,X*8+1,0
1390 PRINT STRING$(3,CHR$(219));CHR$(1);STRING$(4,CHR$(219));
1400 LOCATE 27-Y*3,X*8+1,0
1410 PRINT STRING$(8,CHR$(219));:RETURN
1420 IF I*A(X,Y)<0 THEN GOTO 1490
1430 LOCATE 25-Y*3,X*8+1,0
1440 PRINT STRING$(8,CHR$(32));
1450 LOCATE 26-Y*3,X*8+1,0
1460 PRINT STRING$(3,CHR$(32));CHR$(2);STRING$(4,CHR$(32));
1470 LOCATE 27-Y*3,X*8+1,0
1480 PRINT STRING$(8,CHR$(32)):RETURN
1490 LOCATE 25-Y*3,X*8+1,0
1500 PRINT STRING$(8,CHR$(32));
1510 LOCATE 26-Y*3,X*8+1,0
1520 PRINT STRING$(3,CHR$(32));CHR$(1);STRING$(4,CHR$(32));
1530 LOCATE 27-Y*3,X*8+1,0
1540 PRINT STRING$(8,CHR$(32));:RETURN
1550 IF I*A(X,Y)<0 THEN GOTO 1620
1560 LOCATE 25-Y*3,X*8+1,0
1570 PRINT STRING$(2,CHR$(219));STRING$(3,CHR$(178));STRING$(3,CHR$(219));
1580 LOCATE 26-Y*3,X*8+1,0
1590 PRINT CHR$(219)+"QUEEN"+CHR$(219);CHR$(219);
1600 LOCATE 27-Y*3,X*8+1,0
1610 PRINT STRING$(2,CHR$(219));STRING$(3,CHR$(178));STRING$(3,CHR$(219));          :RETURN
1620 LOCATE 25-Y*3,X*8+1,0
1630 PRINT STRING$(2,CHR$(219));STRING$(3,CHR$(176));STRING$(3,CHR$(219));
1640 LOCATE 26-Y*3,X*8+1,0
1650 PRINT CHR$(219)+"QUEEN"+CHR$(219);CHR$(219);
1660 LOCATE 27-Y*3,X*8+1,0
1670 PRINT STRING$(2,CHR$(219));STRING$(3,CHR$(176));STRING$(3,CHR$(219));          :RETURN
1680 IF I*A(X,Y)<0 THEN GOTO 1750
1690 LOCATE 25-Y*3,X*8+1,0
1700 PRINT STRING$(2,CHR$(32));STRING$(3,CHR$(178));STRING$(3,CHR$(32));
1710 LOCATE 26-Y*3,X*8+1,0
1720 PRINT CHR$(32)+"QUEEN"+CHR$(32);CHR$(32);
1730 LOCATE 27-Y*3,X*8+1,0
1740 PRINT STRING$(2,CHR$(32));STRING$(3,CHR$(178));STRING$(3,CHR$(32));            :RETURN
1750 LOCATE 25-Y*3,X*8+1,0
1760 PRINT STRING$(2,CHR$(32));STRING$(3,CHR$(176));STRING$(3,CHR$(32));
1770 LOCATE 26-Y*3,X*8+1,0
1780 PRINT CHR$(32)+"QUEEN"+CHR$(32);CHR$(32);
1790 LOCATE 27-Y*3,X*8+1,0
1800 PRINT STRING$(2,CHR$(32));STRING$(3,CHR$(176));STRING$(3,CHR$(32));            :RETURN
1810 IF I*A(X,Y)<0 THEN GOTO 1880
1820 LOCATE 25-Y*3,X*8+1,0
1830 PRINT STRING$(2,CHR$(219));STRING$(4,CHR$(178));STRING$(2,CHR$(219));
1840 LOCATE 26-Y*3,X*8+1,0
1850 PRINT CHR$(219);CHR$(178)+"KING"+CHR$(178);CHR$(219);
1860 LOCATE 27-Y*3,X*8+1,0
1870 PRINT STRING$(2,CHR$(219));STRING$(4,CHR$(178));STRING$(2,CHR$(219));          :RETURN
1880 LOCATE 25-Y*3,X*8+1,0
1890 PRINT STRING$(2,CHR$(219));STRING$(4,CHR$(176));STRING$(2,CHR$(219));
1900 LOCATE 26-Y*3,X*8+1,0
1910 PRINT CHR$(219);CHR$(176)+"KING"+CHR$(176);CHR$(219);
1920 LOCATE 27-Y*3,X*8+1,0
1930 PRINT STRING$(2,CHR$(219));STRING$(4,CHR$(176));STRING$(2,CHR$(219));          :RETURN
1940 IF I*A(X,Y)<0 THEN GOTO 2010
1950 LOCATE 25-Y*3,X*8+1,0
1960 PRINT STRING$(2,CHR$(32));STRING$(4,CHR$(178));STRING$(2,CHR$(32));
1970 LOCATE 26-Y*3,X*8+1,0
1980 PRINT CHR$(32);CHR$(178)+"KING"+CHR$(178);CHR$(32);
1990 LOCATE 27-Y*3,X*8+1,0
2000 PRINT STRING$(2,CHR$(32));STRING$(4,CHR$(178));STRING$(2,CHR$(32));            :RETURN
2010 LOCATE 25-Y*3,X*8+1,0
2020 PRINT STRING$(2,CHR$(32));STRING$(4,CHR$(176));STRING$(2,CHR$(32));
2030 LOCATE 26-Y*3,X*8+1,0
2040 PRINT CHR$(32);CHR$(176)+"KING"+CHR$(176);CHR$(32);
2050 LOCATE 27-Y*3,X*8+1,0
2060 PRINT STRING$(2,CHR$(32));STRING$(4,CHR$(176));STRING$(2,CHR$(32));            :RETURN
2070 IF I*A(X,Y)<0 THEN GOTO 2140
2080 LOCATE 25-Y*3,X*8+1,0
2090 PRINT STRING$(3,CHR$(219));STRING$(2,CHR$(178));STRING$(3,CHR$(219));
2100 LOCATE 26-Y*3,X*8+1,0
2110 PRINT CHR$(219)+"KNIGHT"+CHR$(219);
2120 LOCATE 27-Y*3,X*8+1,0
2130 PRINT STRING$(3,CHR$(219));STRING$(2,CHR$(178));STRING$(3,CHR$(219));          :RETURN
2140 LOCATE 25-Y*3,X*8+1,0
2150 PRINT STRING$(3,CHR$(219));STRING$(2,CHR$(176));STRING$(3,CHR$(219));
2160 LOCATE 26-Y*3,X*8+1,0
2170 PRINT CHR$(219)+"KNIGHT"+CHR$(219);
2180 LOCATE 27-Y*3,X*8+1,0
2190 PRINT STRING$(3,CHR$(219));STRING$(2,CHR$(176));STRING$(3,CHR$(219));          :RETURN
2200 IF I*A(X,Y)<0 THEN GOTO 2270
2210 LOCATE 25-Y*3,X*8+1,0
2220 PRINT STRING$(3,CHR$(32));STRING$(2,CHR$(178));STRING$(3,CHR$(32));
2230 LOCATE 26-Y*3,X*8+1,0
2240 PRINT CHR$(32)+"KNIGHT"+CHR$(32);
2250 LOCATE 27-Y*3,X*8+1,0
2260 PRINT STRING$(3,CHR$(32));STRING$(2,CHR$(178));STRING$(3,CHR$(32));            :RETURN
2270 LOCATE 25-Y*3,X*8+1,0
2280 PRINT STRING$(3,CHR$(32));STRING$(2,CHR$(176));STRING$(3,CHR$(32));
2290 LOCATE 26-Y*3,X*8+1,0
2300 PRINT CHR$(32)+"KNIGHT"+CHR$(32);
2310 LOCATE 27-Y*3,X*8+1,0
2320 PRINT STRING$(3,CHR$(32));STRING$(2,CHR$(176));STRING$(3,CHR$(32));            :RETURN
2330 IF I*A(X,Y)<0 THEN GOTO 2400
2340 LOCATE 25-Y*3,X*8+1,0
2350 PRINT STRING$(3,CHR$(219));STRING$(2,CHR$(178));STRING$(3,CHR$(219));
2360 LOCATE 26-Y*3,X*8+1,0
2370 PRINT CHR$(219)+"BISHOP"+CHR$(219);
2380 LOCATE 27-Y*3,X*8+1,0
2390 PRINT STRING$(3,CHR$(219));STRING$(2,CHR$(178));STRING$(3,CHR$(219));          :RETURN
2400 LOCATE 25-Y*3,X*8+1,0
2410 PRINT STRING$(3,CHR$(219));STRING$(2,CHR$(176));STRING$(3,CHR$(219));
2420 LOCATE 26-Y*3,X*8+1,0
2430 PRINT CHR$(219)+"BISHOP"+CHR$(219);
2440 LOCATE 27-Y*3,X*8+1,0
2450 PRINT STRING$(3,CHR$(219));STRING$(2,CHR$(176));STRING$(3,CHR$(219));          :RETURN
2460 IF I*A(X,Y)<0 THEN GOTO 2530
2470 LOCATE 25-Y*3,X*8+1,0
2480 PRINT STRING$(3,CHR$(32));STRING$(2,CHR$(178));STRING$(3,CHR$(32));
2490 LOCATE 26-Y*3,X*8+1,0
2500 PRINT CHR$(32)+"BISHOP"+CHR$(32);
2510 LOCATE 27-Y*3,X*8+1,0
2520 PRINT STRING$(3,CHR$(32));STRING$(2,CHR$(178));STRING$(3,CHR$(32));            :RETURN
2530 LOCATE 25-Y*3,X*8+1,0
2540 PRINT STRING$(3,CHR$(32));STRING$(2,CHR$(176));STRING$(3,CHR$(32));
2550 LOCATE 26-Y*3,X*8+1,0
2560 PRINT CHR$(32)+"BISHOP"+CHR$(32);
2570 LOCATE 27-Y*3,X*8+1,0
2580 PRINT STRING$(3,CHR$(32));STRING$(2,CHR$(176));STRING$(3,CHR$(32));            :RETURN
2590 IF I*A(X,Y)<0 THEN GOTO 2660
2600 LOCATE 25-Y*3,X*8+1,0
2610 PRINT CHR$(219);CHR$(219);CHR$(178);CHR$(219);CHR$(219);CHR$(178);              CHR$(219);CHR$(219);
2620 LOCATE 26-Y*3,X*8+1,0
2630 PRINT CHR$(219);CHR$(219)+"ROOK"+CHR$(219);CHR$(219);
2640 LOCATE 27-Y*3,X*8+1,0
2650 PRINT STRING$(2,CHR$(219));STRING$(4,CHR$(178));STRING$(2,CHR$(219));          :RETURN
2660 LOCATE 25-Y*3,X*8+1,0
2670 PRINT CHR$(219);CHR$(219);CHR$(176);CHR$(219);CHR$(219);CHR$(176);              CHR$(219);CHR$(219);
2680 LOCATE 26-Y*3,X*8+1,0
2690 PRINT CHR$(219);CHR$(219)+"ROOK"+CHR$(219);CHR$(219);
2700 LOCATE 27-Y*3,X*8+1,0
2710 PRINT STRING$(2,CHR$(219));STRING$(4,CHR$(176));STRING$(2,CHR$(219));          :RETURN
2720 IF I*A(X,Y)<0 THEN GOTO 2790
2730 LOCATE 25-Y*3,X*8+1,0
2740 PRINT CHR$(32);CHR$(32);CHR$(178);CHR$(32);CHR$(32);CHR$(178);                  CHR$(32);CHR$(32);
2750 LOCATE 26-Y*3,X*8+1,0
2760 PRINT CHR$(32);CHR$(32)+"ROOK"+CHR$(32);CHR$(32);
2770 LOCATE 27-Y*3,X*8+1,0
2780 PRINT STRING$(2,CHR$(32));STRING$(4,CHR$(178));STRING$(2,CHR$(32));            :RETURN
2790 LOCATE 25-Y*3,X*8+1,0
2800 PRINT CHR$(32);CHR$(32);CHR$(176);CHR$(32);CHR$(32);CHR$(176);                  CHR$(32);CHR$(32);
2810 LOCATE 26-Y*3,X*8+1,0
2820 PRINT CHR$(32);CHR$(32)+"ROOK"+CHR$(32);CHR$(32);
2830 LOCATE 27-Y*3,X*8+1,0
2840 PRINT STRING$(2,CHR$(32));STRING$(4,CHR$(176));STRING$(2,CHR$(32));            :RETURN
2850 LOCATE 25,31,1:PRINT STRING$(10," ");
2860 X$=INKEY$:IF X$="N" THEN N$=X$
2870 IF X$>="A" AND X$<="H" THEN X=VAL(CHR$(ASC(X$)-16)):GOTO 2990
2880 IF X$="N" THEN GOSUB 3290
2890 IF X$="K" AND A(5,1)=99 AND A(8,1)=7 THEN A(5,1)=1:A(8,1)=1:A(7,1)=99          :A(6,1)=7:GOTO 3060
2900 IF X$="Q" AND A(5,1)=99 AND A(1,1)=7 THEN A(5,1)=1:A(1,1)=1:A(3,1)=99          :A(4,1)=7:GOTO 3060
2910 IF X$="K" AND A(4,1)=99 AND A(1,1)=7 THEN A(4,1)=1:A(1,1)=1:A(2,1)=99          :A(3,1)=7:GOTO 3060
2920 IF X$="Q" AND A(4,1)=99 AND A(8,1)=7 THEN A(4,1)=1:A(8,1)=1:A(6,1)=99          :A(5,1)=7:GOTO 3060
2930 IF X$="X" THEN GOSUB 3090:LOCATE 25,1,0:PRINT "EXCHANGING         ";           :GOSUB 3800:IF CL$="Y" THEN LOCATE 25,50,0:PRINT "START ";TIME$;:GOTO 340       :ELSE:GOTO 340
2940 IF X$="S" THEN GOTO 3080
2950 IF X$="M" THEN GOSUB 3100
2960 IF X$="I" THEN GOSUB 3500:CLS:GOSUB 1120:LOCATE 25,1,1                          :PRINT "MOVE "+CHR$(7);B$;
2970 IF X$="L" THEN GOSUB 3320
2980 GOTO 2860
2990 LOCATE 25,21,1:PRINT X$;:LOCATE 25,31,1:PRINT "            ";
3000 Y=VAL(INKEY$):IF Y=0 THEN GOTO 3000
3010 LOCATE 25,22,1:PRINT Y;:LOCATE 25,25,1:PRINT "-";
3020 IF A(X,Y)<2 OR A(X,Y)>99 THEN LOCATE 25,31,1:PRINT "ENTRY ERROR ";             :GOTO 2850
3030 A$=INKEY$:IF A$<"A" OR A$>"H" THEN GOTO 3030 ELSE A=VAL(CHR$(ASC(A$)-16))
3040 LOCATE 25,27,1:PRINT A$;
3050 B=VAL(INKEY$):IF B=0 THEN GOTO 3050 ELSE LOCATE 25,28,1:PRINT B;
3060 IF X$="K" OR X$="Q" THEN LOCATE 25,20,1:PRINT "CSTL. ";X$;"-SIDE";             :GOSUB 3090 ELSE GOSUB 3090
3070 IF CL$="Y" THEN LOCATE 25,50,0:PRINT "START ";TIME$;
3080 RETURN
3090 LOCATE 25,1,1:PRINT STRING$(79," ");:RETURN
3100 GOSUB 3090:LOCATE 25,1,1:PRINT "MODIFYING          ";
3110 GOSUB 3270:IF M$<"A" OR M$>"H" THEN GOTO 3110
3120 X=VAL(CHR$(ASC(M$)-16)):LOCATE 25,21,1:PRINT M$;
3130 M$=INKEY$:IF M$<"1" OR M$>"8" THEN GOTO 3130
3140 Y=VAL(M$):LOCATE 25,23,1:PRINT M$;" = ";
3150 M$=INKEY$:IF M$="C" OR M$="P" OR M$="E" THEN S1$=M$:LOCATE 25,27,1             :PRINT M$;:ELSE GOTO 3150
3160 M$=INKEY$:IF M$="S" OR M$="P" OR M$="N" OR M$="B" OR M$="R" OR M$="Q" OR        M$="K" THEN V$=M$:LOCATE 25,29,1:PRINT M$; ELSE GOTO 3160
3170 IF V$="P" THEN V1=2
3180 IF V$="N" THEN V1=4
3190 IF V$="B" THEN V1=5
3200 IF V$="R" THEN V1=7
3210 IF V$="Q" THEN V1=9
3220 IF V$="K" THEN V1=99
3230 IF V$="S" THEN V1=1
3240 IF S1$="C" AND V1<>1 THEN V1=-V1
3250 A(X,Y)=V1:IF S1$="E" THEN A(X,Y)=1
3260 GOSUB 1130:GOTO 3100
3270 M$=INKEY$:IF M$="N" THEN GOSUB 3290:GOTO 3270:ELSE IF M$="Z" THEN               GOSUB 3090:LOCATE 25,20,1:PRINT "         ";:GOSUB 1120:ELSE RETURN
3280 IF CL$="Y" THEN LOCATE 25,51,0:PRINT "START ";TIME$;:GOTO 340 ELSE GOTO 340
3290 FOR J=1 TO 8:FOR K=1 TO 8:K$=STR$(K)
3300 LOCATE 27-K*3,J*8+1,0
3310 PRINT CHR$(J+64);RIGHT$(K$,1);:NEXT:NEXT:RETURN
3320 GOSUB 3090:LOCATE 25,20,1:PRINT "LEVEL=";B8!;:PRINT "CHANGE LEVELS?";
3330 C$=INKEY$:IF C$="N" THEN GOTO 3370 ELSE IF C$="Y" THEN LOCATE 25,27,1          :PRINT "       ";:GOSUB 3090:ELSE GOTO 3330
3340 L1$=INKEY$:IF L1$="" THEN GOTO 3340 ELSE IF L1$>="0" AND L1$<="9" THEN          LOCATE 25,27,1:PRINT L1$;:ELSE GOTO 3340
3350 L2$=INKEY$:IF L2$="" THEN GOTO 3350 ELSE IF L2$<"0" OR L2$>"9" THEN L2$=L1$    :L1$="0"
3360 B8!=VAL(L1$)*10+VAL(L2$):B7!=B8!/2:LOCATE 25,27,0:PRINT L1$;L2$;
3370 GOSUB 3090:LOCATE 25,20,0:PRINT "              ";:LOCATE 25,1,1                :PRINT "MOVE ";B$;:RETURN
3380 REM *** PROMOTION ROUTINE ***
3390 LOCATE 2,1,1:PRINT "P, N, B, R, Q ";
3400 Z$=INKEY$:IF Z$="P" THEN A(A,B)=2:GOTO 3460
3410 IF Z$="N" THEN A(A,B)=4:GOTO 3460
3420 IF Z$="B" THEN A(A,B)=5:GOTO 3460
3430 IF Z$="R" THEN A(A,B)=7:GOTO 3460
3440 IF Z$="Q" THEN A(A,B)=9:GOTO 3460
3450 GOTO 3400
3460 RETURN
3470 IF CL$="Y" THEN LOCATE 25,61,1:PRINT "STOP ";TIME$;
3480 LOCATE 25,1,1:PRINT "HIT (P) TO PLAY OR HIT (B) FOR BASIC";
3490 A$=INKEY$:IF A$="" THEN GOTO 3490 ELSE IF A$="B" THEN CLS:END                   ELSE IF A$="P" THEN RUN ELSE GOTO 3490
3500 CLS
3510 PRINT "1. USE LIST TO INSURE LOADED RIGHT, THE LAST LINE IS 65529 "
3520 PRINT "2. ALSE NOTE MEMORY SIZE AS A DOUBLE CHECK "
3530 PRINT "3. SPECIAL COMMANDS DURING PLAYER'S MOVE ARE:"
3540 PRINT "   TYPE 'N' - TO NUMBER THE BOARD "
3550 PRINT "        'K' - TO CASTLE KING SIDE "
3560 PRINT "        'Q' - TO CASTLE QUEEN SIDE "
3570 PRINT "        'X' - TO EXCHANGE PIECES AND LET COMPUTER MOVE"
3580 PRINT "        'S' - TO LET THE COMPUTER PLAY BY ITSELF "
3590 PRINT "        'M' - TO MODIFY THE BOARD, ENTER THE SQUARE FOLLOWED BY"
3600 PRINT "                 C, P, OR E  FOR COMPUTER, PLAYER, OR EMPTY"
3610 PRINT "                 AND S,P,N,B,R,Q,K  FOR SQUARE,PAWN, ETC..."
3620 PRINT "        'Z' - TO ESCAPE MODIFY AND LET COMPUTER MOVE"
3630 PRINT "        'I' - TO GET INSTRUCTIONS AGAIN"
3640 PRINT "        'L' - TO LOOK AT OR CHANGE LEVEL OF PLAY"
3650 REM ********************************************************************
3660 INPUT "HIT ENTER TO CONTINUE";EN$:PRINT
3670 PRINT "4. TO PROMOTE TO P,N,B,R,Q ENTER THE LETTER WHEN PROMOTED"
3680 PRINT "5. TO CAPTURE 'EN PASSANT' SPECIFY THE 'FROM' - 'TO' SQUARES"
3690 PRINT "6. LEVELS OF PLAY ARE FROM 01 TO 24"
3700 PRINT "7. COMPUTER ASSUMES MATE IF KING IS LEFT IN CHECK SO BE SURE TO "
3710 PRINT "    WATCH FOR CHECK MESSAGE"
3720 PRINT "8. IF A MOVE IS ILLEGAL OR AN ENTRY ERROR IS MADE SIMPLY TYPE IN"
3730 PRINT "    A NEW MOVE.  A MOVE MAY BE STARTED OVER BY FORCING AN ERROR. (E.G. '9')."
3740 PRINT "9. IF <BREAK> IS HIT DURING THE GAME, TYPE 'GOSUB 900:CONT' TO"
3750 PRINT "    DRAW BOARD AND CONTINUE"
3760 PRINT "10. YOU HAVE A CHOICE OF BLACK OR WHITE, THE COMPUTER WILL ALWAYS"
3770 PRINT "     BE AT THE TOP OF THE SCREEN"
3780 PRINT:PRINT:INPUT "HIT ENTER TO CONTINUE GAME";EN$
3790 RETURN
3800 I=-I:GOSUB 3810:GOSUB 1120:RETURN
3810 L=0:FOR J=1 TO 8:FOR K=1 TO 8:L=L+1:IF A(J,K)<>1 THEN C(L)=-A(J,K)             :ELSE C(L)=A(J,K)
3820 NEXT:NEXT
3830 L=65:FOR J=1 TO 8: FOR K=1 TO 8:L=L-1:A(J,K)=C(L):NEXT:NEXT
3840 RETURN
3850 END
```
{% endraw %}

## COMPIL.BAS

{% raw %}
```bas
10 ' ADVENTURE SYSTEM DATABASE COMPILER 2.1
15 '
20 ' last revision 3/1/83 by JRC
25 '
30 ' This version (2.1) is not completely compatible with version 2.0; verbs
35 '   must have a number after them. Modify previous source files by putting
37 '   a ,0 after the verb. For other limitations, see the .DOC file.
40 '
50 ' Peter F. Levy              Jim R. Cummins
60 ' 4209 Longmeadow Way        5 Jacob St.
70 ' Fort Worth, TX 76133       Ballston Lake, NY 12019
80 ' (817) 292-8731             CompuServe  [72155,1174]
100 KEY OFF:DEFINT A-Z:FALSE=0:TRUE=NOT FALSE
109 '  Next line determines the type of monitor - works with PC/DOS 1.10
110 DEF SEG=0:WTH=PEEK(&H410) AND &H30:DEF SEG
120 IF WTH=&H30 THEN WTH=80:CGCARD=FALSE ELSE CGCARD=TRUE:IF WTH=&H20 THEN WTH=80 ELSE WTH=40
129 ' Modify the next line to set your own color scheme
130 SCREEN 0,1:FGD=6:BGD=1:BRD=1:COLOR FGD,BGD,BRD:WIDTH WTH:CLS
140 PRINT "ADVENTURE SYSTEM DATABASE COMPILER 2.1":PRINT
150 PRINT "Written by Peter F. Levy":PRINT TAB(12)"4209 Longmeadow Way"
160 PRINT TAB(12)"Fort Worth, TX 76133":PRINT TAB(12)"(817) 292-8731"
170 PRINT:PRINT"Modified and Adapted for the":PRINT"<<<IBM Personal Computer>>> by"
180 PRINT TAB(12)"Jim R. Cummins":PRINT TAB(12)"5 Jacob St."
190 PRINT TAB(12)"Ballston Lake, NY 12019"
200 PRINT TAB(12)"CompuServe  [72155,1174]":PRINT
210 ON ERROR GOTO 20060
220 INPUT;"Database name? ";F$:IF F$="" THEN 220
230 PRINT" on which drive? (A-D) ";:CD1$=INPUT$(1):PRINT CD1$
240 IF INSTR("AaBbCcDd",CD1$) THEN CD1$=CD1$+":" ELSE CD1$=""
250 PRINT"Compilation drive? (A-D) ";:CD$=INPUT$(1):PRINT CD$
260 IF INSTR("AaBbCcDd",CD$) THEN CD$=CD$+":" ELSE CD$=""
270 PRINT "Hard copy of compilation messages? (Y/N) ";:HC$=INPUT$(1)
280 PRINT HC$:IF INSTR("Yy",HC$) THEN PRT=TRUE ELSE PRT=FALSE
300 DIM VS$(8),NS$(8),TS$(2)
310 FOR I=1 TO 8
320 VS$(I)=STRING$(255,32)
330 NS$(I)=VS$(I)
340 NEXT I
350 NL$=STRING$(255,0):VL$=NL$
360 TS$(1)=STRING$(255,32)
365 TS$(2)=TS$(1)
370 TN$=STRING$(100,0)
380 DEF FNEW$(X)="*** ERROR"+STR$(X)+" -- "
390 RESTORE  ' Get Tokens
400 FOR K=1 TO 100
410 READ TK$:IF TK$="*END" THEN K=100:GOTO 460
420 I=1-(K>50)
430 J=5*(K-50*(I-1))-2
440 MID$(TS$(I),J,4)=TK$
450 MID$(TN$,K,1)=CHR$(K)
460 NEXT K
470 PRINT
480 PRINT "Setting up files"
490 OPEN "I",1,CD1$+F$+".ADV"
510 OPEN "O",2,CD$+F$+".DAT"
520 OPEN "R",3,CD$+F$+".REF",32
530 FIELD#3,32 AS AO$
540 REC.LOC=2  '  Save space for disassemble info.
550 VERSION$="IBMPC Ver 2.1(c)1983 JR Cummins"
560 ON ERROR GOTO 20000
1000 '
1010 ' COMPILE STARTUP TEXT
1020 ' --------------------
1030 PRINT "Compiling startup header"
1040 IF PRT THEN LPRINT "Compiling startup header"
1050 GOSUB 13000
1060 IF AS$="" THEN PRINT#2,CHR$(255):GOTO 2000
1090 PRINT#2,AS$;
1100 GOTO 1050
2000 '
2010 ' COMPILE VERB LIST
2020 ' -----------------
2030 PRINT "Compiling verb table"
2040 IF PRT THEN LPRINT "Compiling verb table"
2050 FOR K=1 TO 199
2060 INPUT #1,A$
2070 IF A$="" THEN 2200
2080 INPUT #1,AL
2090 MID$(VL$,K,1)=CHR$(AL+32)
2100 I=1+FIX((K-1)/25)
2110 J=10*(K-25*(I-1))-8
2120 MID$(VS$(I),J,9)=A$
2130 NEXT K:ER=ER+1:PRINT FNEW$(ER);"Too many verbs"
2140 IF PRT THEN LPRINT FNEW$(ER);"Too many verbs"
2150 INPUT #1,V$:IF V$="" THEN 2200 ELSE INPUT #1,AL:GOTO 2150
2200 FOR I=1 TO 8:PRINT#2,VS$(I);:NEXT:PRINT#2,VL$;
2300 NVERBS=K:PRINT NVERBS-1;" verbs compiled."
2310 IF PRT THEN LPRINT NVERBS-1;" verbs compiled."
3000 '
3010 ' COMPILE NOUN LIST AND LINKS
3020 ' ---------------------------
3030 PRINT "Compiling noun and link table"
3040 IF PRT THEN LPRINT "Compiling noun and link table"
3050 FOR K=1 TO 199
3060 INPUT #1,N$
3070 IF N$="" THEN 3200
3080 INPUT #1,AL
3090 MID$(NL$,K,1)=CHR$(AL+32)
3100 I=1+FIX((K-1)/25)
3110 J=10*(K-(25*(I-1)))-8
3120 MID$(NS$(I),J,9)=N$
3130 NEXT K:ER=ER+1:PRINT FNEW$(ER);"Too many nouns"
3140 IF PRT THEN LPRINT FNEW$(ER);"Too many nouns"
3150 INPUT #1,N$:IF N$="" THEN 3200 ELSE INPUT #1,AL:GOTO 3150
3200 FOR I=1 TO 8:PRINT#2,NS$(I);:NEXT:PRINT#2,NL$;
3300 NNOUNS=K:PRINT NNOUNS-1;" nouns compiled."
3310 IF PRT THEN LPRINT NNOUNS-1;" nouns compiled."
3400 DIM NDX(NVERBS*NNOUNS+768)
4000 '
4010 ' COMPILE OBJECT TABLE
4020 ' --------------------
4030 PRINT "Compiling object table"
4040 IF PRT THEN LPRINT "Compiling object table"
4045 OS$=SPACE$(32)
4050 FOR K=1 TO 255
4060 INPUT #1,Z
4070 IF Z=0 THEN 4300 ELSE IF Z=K THEN 4100
4080 ER=ER+1:PRINT FNEW$(ER);"Object number";Z;"sequence mismatch"
4090 IF PRT THEN LPRINT FNEW$(ER);"Object number";Z;"sequence mismatch"
4100 INPUT #1,OB$:INPUT #1,SR,WT,VA
4110 LSET OS$=STRING$(2,SR)+CHR$(WT)+CHR$(VA)+STRING$(2,0)+OB$
4120 PRINT #2,OS$;
4130 GOSUB 13000
4160 X=NDX(Z):IF X=0 THEN 4190
4170 ER=ER+1:PRINT FNEW$(ER);"Duplicate object number";Z
4180 IF PRT THEN LPRINT FNEW$(ER);"Duplicate object number";Z
4190 X=REC.LOC+1:NDX(Z)=X
4200 GOSUB 12000
4210 X=REC.LOC:NDX(Z)=NDX(Z)*8+X-NDX(Z)
4220 NEXT K:ER=ER+1:PRINT FNEW$(ER);"Too many objects"
4230 IF PRT THEN LPRINT FNEW$(ER);"Too many objects"
4240 INPUT #1,Z:IF Z<>0 THEN LINE INPUT OB$:GOTO 4240
4300 PRINT #2,STRING$(32,255);
4310 NOBJ=K:PRINT NOBJ-1;" objects compiled."
4320 IF PRT THEN LPRINT NOBJ-1;" objects compiled."
5000 '
5010 ' COMPILE ROOM TABLE
5020 ' ------------------
5030 PRINT "Compiling room and link table"
5040 IF PRT THEN LPRINT "Compiling room and link table"
5045 RS$=SPACE$(32)
5050 INPUT #1,SR
5060 PRINT #2,CHR$(SR);
5070 FOR K=1 TO 254
5080 INPUT #1,RN:Z=RN+256
5090 IF RN=0 THEN 5300 ELSE IF RN=K THEN 5120
5100 ER=ER+1:PRINT FNEW$(ER);"Room number";RN;"sequence mismatch"
5110 IF PRT THEN LPRINT FNEW$(ER);"Room number";RN;"sequence mismatch"
5120 INPUT #1,RM$:INPUT #1,N,S,E,W,U,D
5130 LSET RS$=CHR$(N)+CHR$(S)+CHR$(E)+CHR$(W)+CHR$(U)+CHR$(D)+RM$
5140 PRINT #2,RS$;
5150 GOSUB 13000
5180 X=NDX(Z):IF X=0 THEN 5210
5190 ER=ER+1:PRINT FNEW$(ER);"Duplicate room number";RN
5200 IF PRT THEN LPRINT FNEW$(ER);"Duplicate room number";RN
5210 X=REC.LOC+1:NDX(Z)=X
5220 GOSUB 12000
5230 X=REC.LOC:NDX(Z)=NDX(Z)*8+X-NDX(Z)
5240 NEXT K:ER=ER+1:PRINT FNEW$(ER);"Too many rooms"
5250 IF PRT THEN LPRINT FNEW$(ER);"Too many rooms"
5260 INPUT #1,RN:IF RN<>0 THEN LINE INPUT RM$:GOTO 5260
5300 PRINT #2,STRING$(32,255);
5310 NROOM=K:PRINT NROOM-1;" rooms compiled."
5320 IF PRT THEN LPRINT NROOM-1;" rooms compiled."
6000 '
6010 ' COMPILE MESSAGE TABLE
6020 ' ---------------------
6030 PRINT "Compiling message table"
6040 IF PRT THEN LPRINT "Compiling message table"
6050 FOR K=1 TO 255
6060 INPUT #1,MN:Z=K+512
6070 IF MN=0 THEN 6500 ELSE IF MN=K THEN 6100
6080 ER=ER+1:PRINT FNEW$(ER);"Message number";MN;"sequence mismatch"
6090 IF PRT THEN LPRINT FNEW$(ER);"Message number";MN;"sequence mismatch"
6100 GOSUB 13000
6130 X=NDX(Z):IF X=0 THEN 6160
6140 ER=ER+1:PRINT FNEW$(ER);"Duplicate message number";MN
6150 IF PRT THEN LPRINT FNEW$(ER);"Duplicate message number";MN
6160 X=REC.LOC+1:NDX(Z)=X
6170 GOSUB 12000
6180 X=REC.LOC:NDX(Z)=NDX(Z)*8+X-NDX(Z)
6190 NEXT K:ER=ER+1:PRINT FNEW$(ER);"Too many messages"
6200 IF PRT THEN LPRINT FNEW$(ER);"Too many messages"
6500 NMESG=K:PRINT NMESG-1;" messages compiled."
6510 IF PRT THEN LPRINT NMESG-1;" messages compiled."
7000 '
7010 ' COMPILE IMPLICIT(OR AUTO) ACTIONS
7020 ' ---------------------------------
7030 K=0:PRINT "Compiling implicit action table"
7040 IF PRT THEN LPRINT "Compiling implicit action table"
7050 LINE INPUT #1,AC$
7060 IF AC$="" THEN 7400
7070 AS$="":K=K+1:GOSUB 11070
7080 A$=RIGHT$(AC$,2)
7090 IF A$<>" ." AND A$<>" ," THEN GOSUB 21000
7100 GOSUB 11000
7110 IF T$="." THEN 7200
7120 IF T$="," THEN 7220
7130 GOSUB 10000
7140 GOTO 7100
7200 PRINT #2,AS$+CHR$(0);
7210 GOTO 7050
7220 LINE INPUT #1,AC$
7230 A$=RIGHT$(AC$,2)
7240 IF A$<>" ." AND A$<>" ," THEN GOSUB 21000
7250 GOSUB 11070
7260 GOTO 7100
7400 PRINT #2,CHR$(255);
7410 NAUTO=K+1:PRINT K;" implicit actions compiled."
7420 IF PRT THEN LPRINT K;" implicit actions compiled."
8000 '
8010 ' LOAD & COMPILE EXPLICIT ACTION TABLE
8020 ' ------------------------------------
8030 K=0:PRINT "Compiling explicit action table"
8035 IF PRT THEN LPRINT "Compiling explicit action table"
8040 LINE INPUT #1,AC$
8050 IF AC$="" THEN 8800
8060 AS$="":K=K+1:GOSUB 11070
8070 ' EXTRACT VERB & NOUN, TRUNCATE AC$
8080 GOSUB 11000:V$=MID$(T$,1,9)
8090 GOSUB 11000:N$=MID$(T$,1,9)
8100 A$=RIGHT$(AC$,2)
8110 IF A$<>" ." AND A$<>" ," THEN GOSUB 21000:PRINT TAB(15);V$;" ";N$
8120 ' GET VERB NUMBER
8130 V=0:I=1
8140 J=INSTR(VS$(I)," "+V$+" ")
8150 IF J=0 AND I<8 THEN I=I+1: GOTO 8140
8160 IF J>0 AND I<9 THEN V=1+FIX(J/10)+25*(I-1)
8170 IF V>0 THEN 8200
8180 ER=ER+1:PRINT FNEW$(ER);"Bad verb -- ";V$
8190 IF PRT THEN LPRINT FNEW$(ER);"Bad verb -- ";V$
8200 ' Get NOUN number
8210 N=0:I=1
8220 J=INSTR(NS$(I)," "+N$+" ")
8230 IF J=0 AND I<8 THEN I=I+1: GOTO 8220
8240 IF J>0 AND I<9 THEN N=1+FIX(J/10)+25*(I-1)
8250 IF N>0 OR N$="ANY" THEN 8300
8260 ER=ER+1:PRINT FNEW$(ER);"Bad noun -- ";N$
8270 IF PRT THEN LPRINT FNEW$(ER);"Bad noun -- ";N$
8300 ' Calculate and place INDEX byte pair
8310 Y=NNOUNS*V+N:IF Y>0 THEN IF Y>YMAX THEN YMAX=Y:GOTO 8400 ELSE 8400
8320 ER=ER+1:PRINT FNEW$(ER);"Zero action index code ";V$;" ";N$: GOTO 8040
8330 IF PRT THEN LPRINT FNEW$(ER);"Zero action index code ";V$;" ";N$:GOTO 8040
8400 Z=Y+768:X=NDX(Z):IF X=0 THEN 8430
8410 ER=ER+1:PRINT FNEW$(ER);"Duplicate action entry -- ";V$;" ";N$
8420 IF PRT THEN LPRINT FNEW$(ER);"Duplicate action entry -- ";V$;" ";N$
8430 X=REC.LOC+1:NDX(Z)=X
8440 GOSUB 11000
8450 IF T$="." THEN 8500
8460 IF T$="," THEN 8600
8470 GOSUB 10000
8480 GOTO 8440
8500 AS$=AS$+CHR$(0)
8510 GOSUB 12000
8520 X=REC.LOC:NDX(Z)=NDX(Z)*8+X-NDX(Z)
8530 GOTO 8040
8600 LINE INPUT #1,AC$
8610 A$=RIGHT$(AC$,2)
8620 IF A$<>" ." AND A$<>" ," THEN GOSUB 21000
8630 GOSUB 11070
8640 GOTO 8440
8800 NACTS=K+1:PRINT K;" explicit actions compiled."
8810 IF PRT THEN LPRINT K;" explicit actions compiled."
9000 '
9010 ' END COMPILATION
9020 ' ---------------
9030 ' Write INDEX file to disk
9040 FOR I=1 TO NOBJ:PRINT#2,STR$(NDX(I));:NEXT
9050 FOR I=1 TO NROOM:PRINT#2,STR$(NDX(I+256));:NEXT
9060 FOR I=1 TO NMESG:PRINT#2,STR$(NDX(I+512));:NEXT
9070 FOR I=1 TO YMAX:PRINT#2,STR$(NDX(I+768));:NEXT
9080 LSET AO$=VERSION$
9090 PUT#3,1
9100 AS$=CHR$(NVERBS)+CHR$(NNOUNS)+CHR$(NOBJ)+CHR$(NROOM)+CHR$(NMESG)+CHR$(NAUTO)
9110 AS$=AS$+CHR$(FIX(NACTS/256))+CHR$(NACTS MOD 256)+CHR$(FIX(YMAX/256))+CHR$(YMAX MOD 256)
9120 LSET AO$=AS$
9130 PUT#3,2
9140 CLOSE
9150 PRINT "Compilation complete: ";ER;"error(s)."
9160 IF PRT THEN LPRINT "Compilation complete: ";ER;"error(s)."
9170 ON ERROR GOTO 0
9180 END
10000 '
10010 ' COMPILE DATA GROUP OR TOKEN
10020 ' ---------------------------
10030 V=VAL(T$)
10040 IF V=0 AND T$<>"0" THEN 10100
10050 ' DATA: Copy to file & loop
10060 IF V<0 THEN V=ABS(V)+128
10070 AS$=AS$+CHR$(V)
10080 RETURN
10100 ' TOKEN: Convert to number code & Compile on disk
10110 S=0:IF T$="" THEN 10250
10120 IF ASC(T$)=45 THEN S=1:T$=MID$(T$,2,4)
10130 T1=INSTR(TS$(1),T$)
10140 IF T1=0 THEN T1=250+INSTR(TS$(2),T$)
10150 IF T1<>0 AND T1<>250 THEN 10180
10160 ER=ER+1:PRINT FNEW$(ER);"Bad token -- ";T$
10170 IF PRT THEN LPRINT FNEW$(ER);"Bad token -- ";T$
10180 T2=(T1-1)/5+1
10190 IF T2=0 THEN T3=0: GOTO 10220
10200 T3=ASC(MID$(TN$,T2,1))
10210 T3=T3+128*S
10220 AS$=AS$+CHR$(T3)
10230 RETURN
10250 ER=ER+1:PRINT FNEW$(ER);"Null token"
10260 IF PRT THEN LPRINT FNEW$(ER);"Null token"
10270 RETURN
11000 '
11010 ' EXTRACT A TOKEN FROM STRING AC$ & TRUNCATE AC$
11020 ' ----------------------------------------------
11030 A=INSTR(AC$," ")
11040 IF A=0 THEN T$=AC$:AC$="":RETURN
11050 T$=LEFT$(AC$,A-1)
11060 AC$=RIGHT$(AC$,LEN(AC$)-A)
11070 IF ASC(AC$)=32 THEN AC$=RIGHT$(AC$,LEN(AC$)-1): GOTO 11070
11080 RETURN
12000 '
12010 '   PUT RECORDS IN RANDOM FILE
12020 '   --------------------------
12030 LSET AO$=AS$
12040 REC.LOC=REC.LOC+1
12050 PUT #3,REC.LOC
12060 IF LEN(AS$)>32 THEN AS$=RIGHT$(AS$,LEN(AS$)-32):GOTO 12030
12070 RETURN
13000 '
13010 '   READ TEXT DESCRIPTIONS AND REPLACE "/" WITH <LF>
13020 '   ------------------------------------------------
13030 LINE INPUT #1,AS$
13040 I=INSTR(AS$,"/")
13050 IF I THEN MID$(AS$,I,1)=CHR$(10):GOTO 13040
13060 RETURN
20000 '
20010 ' ERROR TRAP
20020 ' ----------
20030 IF ERR=27 THEN PRT=FALSE:PRINT"Printer Out of Paper.":RESUME NEXT
20040 IF ERR=62 THEN PRINT"End of Source File.":RESUME 9000
20050 IF ERR=61 OR ERR=67 THEN PRINT"Disk Full. Change Disk and Recompile.":ON ERROR GOTO 0
20060 IF ERR=53 THEN PRINT"File Not Found.":PRINT"Insert proper disk and press any key to continue.":AS$=INPUT$(1):RESUME
20070 IF ERR=70 OR ERR=71 THEN PRINT"Disk write protected or not ready.":PRINT"Press any key when ready.":AS$=INPUT$(1):RESUME
20200 PRINT"Unrecoverable Error"
20210 ON ERROR GOTO 0
21000 ER=ER+1:PRINT FNEW$(ER);"Bad action terminator <"A$">"
21010 PRINT TAB(15),"Action item is terminated."
21020 AC$=AC$+" ."
21030 IF NOT PRT THEN RETURN
21040 LPRINT FNEW$(ER);"Bad action terminator <"A$">"
21050 LPRINT TAB(15),"Action item is terminated."
21060 RETURN
30000 '
30010 ' TOKEN TABLE
30020 ' -----------
30030 DATA HASX,NCRX,AVLX,XINY,NSRX,NR0X,XW/Y
30040 DATA HASL,NCRL,AVLL,LINY,NSRL,NR0L,LW/X
30050 DATA RAND,CEQN,CGEN,CEQC,CGEC,XSET,INRX,LIGH,LDGT,OBJ=
30060 DATA X2RY,X2OY,X2CR,X2SR,X2R0,X<>Y
30070 DATA L2RY,L2OY,L2CR,L2SR,L2R0,L<>X
30080 DATA DROP,P2RX,P2OX,SCO+,HEAL,CTX+,CTX=,SETX,CLRX,MSGX
30090 DATA ENDG,LMP1,LMP0,DIAG,WAIT,ECHO,RPTV,RPTN,RPTO,ELSE
30100 DATA SAVE,LOAD
30110 DATA *END
50000 ' LAST LINE
```
{% endraw %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #91, version v1_1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  ADVENT  .DOC         CRC = 0B 2E

--> FILE:  BASCOM  .PAT         CRC = A0 88

--> FILE:  BOGGLE  .BAS         CRC = 8F 2C

--> FILE:  CHESS   .BAS         CRC = 05 90

--> FILE:  COMPIL  .BAS         CRC = D2 25

--> FILE:  DKSPAT  .TXT         CRC = 7C 33

--> FILE:  DRIVER  .BAS         CRC = B7 98

--> FILE:  GLOBE   .BAS         CRC = 2D 9B

--> FILE:  GLOBE   .DAT         CRC = C6 0A

--> FILE:  GOLF2   .BAS         CRC = 38 B7

--> FILE:  HIQUE2  .BAS         CRC = B0 87

--> FILE:  MUGGER  .DAT         CRC = 0D 7A

 ---------------------> SUM OF CRCS = 30 BF

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## DKSPAT.TXT

{% raw %}
```
DISKCOPY and DISKCOMP PATCHES FOR LARGE MEMORY MACHINES
In PC's with more than 320K free memory available as buffer
storage for the Diskcopy and Diskcomp routines, the IBM DOS
supplied programs will fail.  The programs apparently do not
check for valid track and sector values and will continue to
step past track 39 if memory is available even if there are
no more valid tracks.  The head will be banged against the
stops and read errors will be reported for track 40, sector 0,
etc. until the operator interrupts or memory has been filled.
The patches were obtained with the help of Dan Gregorio of
the downtown Houston IBM Products Center.  After several calls
to Boca Raton, we received these patches which seem to work
properly.
The reader should read over the DEBUG section of their DOS
manuals before beginning any of these procedures if they are
not familiar with the debugger.  Be sure to make backup copies
of Diskcopy.com and Diskcomp.com before starting.
DISKCOPY PATCH
 1.  Run the debugger on diskcopy by entering "debug diskcopy.com"
 2.  The debugger will respond with the hyphen prompt.
 3.  Type "e861 <return>"
 4.  The debugger will respond with something like "04B5: A2._"
     (note that "_" designates the cursor).
 5.  Carefully type the following "e8 <space> 74 <space> 00 <return>"
 6.  Type "e8d8 <return>"
 7.  Carefully type the following:
          3d <space>
          51 <space>
          00 <space>
          72 <space>
          02 <space>
          b0 <space>
          50 <space>
          a2 <space>
          36 <space>
          05 <space>
          c3 <return>
 8.  At the hyphen prompt, type "rcx <return>"
 9.  The debugger will respond with ":07D8"
10.  At the colon prompt, type "7e3 <return>"
11.  At the hyphen prompt, type "w <return>"
12.  At the hyphen prompt, type "q <return>"
13.  You should now be back in DOS and have the "A>" prompt.
DISKCOMP PATCH
 1.  Run the debugger on diskcomp by entering "debug diskcomp.com"
 2.  At the hyphen prompt, type "e6ec <return>"
 3.  Carefully type the following:  "e8 <space> 79 <space> 00 <return>"
 4.  At the hyphen prompt, type "e768 <return>"
 5.  Carefully type the following:
         3d <space>
         51 <space>
         00 <space>
         72 <space>
         02 <space>
         b0 <space>
         50 <space>
         a2 <space>
         95 <space>
         04 <space>
         c3 <return>
 6.  At the hyphen prompt, type "rcx <return>"
 7.  The debugger should respond with ":0668"
 8.  At the colon prompt, type "673 <return>"
 9.  At the hyphen prompt, type "w <return>"
10.  At the hyphen prompt, type "q <return>"
11.  You should now be back in DOS with an "A>" prompt.
Please note that the two procedures are very similar but are
different.  While we are using the patched routines without any
problems on both large and small memory machines, I cannot
accept any responsibility for the use of these patches.  
THEREFORE, THE USER IS WARNED THAT HE IS MAKING THESE PATCHES
AT HIS OWN RISK.  THE AUTHOR IS NOT RESPONSIBLE FOR ANY LOSS OF
DATA OR ANY OTHER PROBLEM THAT MAY RESULT FROM THE USE OF THE
INFORMATION PRESENTED HEREIN.
Please address comments to:
                 
                   Mitchell D. Garnett
                   72345,470
                   DIGITAL ENGINEERING GROUP, INC.
                   11999 Katy Fwy., Suite 150
                   Houston, TX 77079
                   (713) 531-6100
```
{% endraw %}

## DRIVER.BAS

{% raw %}
```bas
10 ' ADVENTURE INTERPRETER 2.1
15 '
20 ' last revision 3/1/83 by JRC
25 '
30 ' This program must be run with the version 2.1 compiler and is not
35 '   compatible with version 2.0 which was a straight copy of version 1.2.
40 '   This version uses different files.
45 '
50 ' Peter F. Levy              Jim R. Cummins
60 ' 4209 Longmeadow Way        5 Jacob St.
70 ' Ft. Worth, TX 76133        Ballston Lake, NY 12019
80 ' (817) 292-8731             CompuServe  [72155,1174]
90 '
100 KEY OFF:DEFINT A-Z:DEF SEG=0:WTH=PEEK(&H410) AND &H30:DEF SEG:FALSE=0:TRUE=NOT FALSE
110 IF WTH=&H30 THEN WTH=80:CGCARD=FALSE:FGD=7:BGD=0:BRD=0 ELSE CGCARD=TRUE:FGD=6:BGD=1:BRD=1:IF WTH=&H20 THEN WTH=80 ELSE WTH=40
120 SCREEN 0,ABS(CGCARD),0,0:COLOR FGD,BGD,BRD:WIDTH WTH:CLS
130 PRINT"ADVENTURE SYSTEM DATABASE INTERPRETER 2.1"
140 PRINT
150 PRINT"Written by Peter F. Levy":PRINT TAB(12)"4209 Longmeadow Way"
160 PRINT TAB(12)"Fort Worth, TX 76133":PRINT TAB(12)"(817) 292-8731"
170 PRINT:PRINT"Adapted and modified for the":PRINT"<<<IBM Personal Computer>>>  by"
180 PRINT TAB(12)"Jim R. Cummins":PRINT TAB(12)"5 Jacob St."
190 PRINT TAB(12)"Ballston Lake, NY 12019":PRINT TAB(12)"CompuServe  [72155,1174]":PRINT
200 MASK(0)=1:MASK(1)=2:MASK(2)=4:MASK(3)=8:MASK(4)=&H10:MASK(5)=&H20:MASK(6)=&H40:MASK(7)=&H80:MASK(8)=&H100:MASK(9)=&H200:MASK(10)=&H400
220 DEF FNX(AS$,K)=ASC(MID$(AS$,K,1))
225 DEF FNUPCS$(A$)=CHR$(ASC(A$)+32*(ASC(A$)>96 AND ASC(A$)<123))
230 DEF FNL(X)=ASC(OB$(X))
240 DEF FNZ(X)=-(X AND 127)
250 DEF FNW(X)=ASC(MID$(OB$(X),3,1))
260 ON ERROR GOTO 30000
270 LINE INPUT "Adventure name ";F$
275 I=INSTR(F$,"."):IF I>0 THEN F$=LEFT$(F$,I-1)
280 OPEN "I",2,F$+".DAT"
285 OPEN "R",1,F$+".REF",32
290 FIELD #1,32 AS AI$
295 CLS:PRINT TAB(15)"One moment please..."
300 SP$=" ":LF$=CHR$(10):REND$=STRING$(32,255)
305 GET#1,2
306 NVERBS=ASC(MID$(AI$,1,1)):NNOUNS=ASC(MID$(AI$,2,1)):NOBJ=ASC(MID$(AI$,3,1))
307 NROOM=ASC(MID$(AI$,4,1)):NMESG=ASC(MID$(AI$,5,1)):NAUTO=ASC(MID$(AI$,6,1))
308 NACT=256*ASC(MID$(AI$,7,1))+ASC(MID$(AI$,8,1))
309 AMAX=256*ASC(MID$(AI$,9,1))+ASC(MID$(AI$,10,1))
310 DIM OB$(NOBJ),RM$(NROOM),VS$(8),NS$(8),BF(32),C(255),AA$(NAUTO+1)
315 RM.INC=NOBJ:MSG.INC=RM.INC+NROOM:ACT.INC=MSG.INC+NMESG
320 DIM NDX(AMAX+ACT.INC+1)
400 INPUT #2,A$:IF RIGHT$(A$,1)=CHR$(255) THEN PRINT A$;:GOTO 450 ELSE IF (POS(0)+LEN(A$))>WTH THEN PRINT
440 PRINT A$;:GOTO 400
450 FOR I=1 TO 8:VS$(I)=INPUT$(255,#2):NEXT:VL$=INPUT$(255,#2)
460 FOR I=1 TO 8:NS$(I)=INPUT$(255,#2):NEXT:NL$=INPUT$(255,#2)
470 FOR I=1 TO 255
480 A$=INPUT$(32,#2):IF A$=REND$ THEN OB$(I)=CHR$(255):NOB=I:GOTO 510
490 OB$(I)=A$
500 IF RIGHT$(OB$(I),1)=" " THEN OB$(I)=LEFT$(OB$(I),LEN(OB$(I))-1):GOTO 500
505 NEXT I
510 FOR J=1 TO NOB-1:IF ASC(OB$(J))=255 THEN LD=LD+ASC(MID$(OB$(J),3,1))
520 NEXT J
525 IF NOB<>NOBJ THEN PRINT "ERROR - Object number mismatch";NOB;NOBJ:END
530 CR=ASC(INPUT$(1,#2))
540 FOR I=1 TO 255
550 A$=INPUT$(32,#2)
560 IF A$=REND$ THEN RM$(I)=CHR$(255):NRM=I:GOTO 575
570 RM$(I)=A$  :  NEXT I
575 IF NRM<>NROOM THEN PRINT "ERROR - Room number mismatch";NRM;NROOM:END
580 FOR I=1 TO 255
590 AA$(I)=INPUT$(1,#2):IF AA$(I)=CHR$(255) THEN NAA=I:GOTO 615
600 WHILE A$>CHR$(0) :A$=INPUT$(1,#2)
610 AA$(I)=AA$(I)+A$:WEND:NEXT
615 IF NAA<>NAUTO THEN PRINT"ERROR - Auto Action number mismatch";NAA;NAUTO:END
620 FOR I=1 TO NOBJ:INPUT#2,NDX(I):NEXT
630 FOR I=1 TO NROOM:INPUT#2,NDX(I+RM.INC):NEXT
640 FOR I=1 TO NMESG:INPUT#2,NDX(I+MSG.INC):NEXT
650 FOR I=1 TO AMAX:INPUT#2,NDX(I+ACT.INC):NEXT
660 CLOSE #2
670 RE$=STRING$(255,"N")
680 HE=100:LS=TRUE
690 UW$=" A AN AT TO THE WITH IN ON SOME OFF OF INTO "
700 LOCATE 25,5:PRINT"[Depress space bar to begin play.]";
710 A$=INKEY$: IF A$<>" " THEN 710
720 CLS
1000 '
1010 ' UPDATE SCREEN DISPLAY
1020 ' ---------------------
1030 IF LS=FALSE AND R1<>CR THEN PRINT"It's too dark to see anything.":GOTO 2000131
1040 IF R1<>CR THEN PRINT MID$(RM$(CR),7,25)
1050 IF MID$(RE$,CR,1)="Y" THEN 1100
1060 Z=CR+RM.INC:X=FIX(NDX(Z)/8):N=NDX(Z)-X*8
1070 RM$="":FOR I=0 TO N:GET #1,X+I:RM$=RM$+AI$:NEXT I
1080 IF RIGHT$(RM$,1)=" " THEN RM$=LEFT$(RM$,LEN(RM$)-1):GOTO 1080
1090 PRINT RM$;:MID$(RE$,CR,1)="Y"
1100 IF R1=CR THEN 2000
1110 FOR I=1 TO 255
1120 IF OB$(I)=CHR$(255) THEN I=255: GOTO 1170
1130 IF FNL(I)<>CR THEN 1170
1140 X=FIX(NDX(I)/8):N=NDX(I)-8*X
1150 FOR J=0 TO N:GET #1,X+J
1160 PRINT AI$;:NEXT J:PRINT
1170 NEXT I
1180 R1=CR
2000 '
2010 ' CARRY OUT IMPLICIT ACTIVITY
2020 ' ---------------------------
2030 M=0
2040 M=M+1
2050 IF AA$(M)=CHR$(255) OR M=NAA+1 THEN 3000
2060 AS$=AA$(M)
2070 GOSUB 10000
2080 GOTO 2040
3000 '
3010 ' DO LOWER SCREEN DISPLAY
3020 ' -----------------------
3040 YPOS=CSRLIN
3050 XPOS=POS(X)
3060 LOCATE 25,1,0:PRINT"Location:";MID$(RM$(CR),7,64);
3070 MV$=""
3080 FOR Z=1 TO 6
3090 IF ASC(MID$(RM$(CR),Z,1))>0 THEN MV$=MV$+MID$("NSEWUD",Z,1)
3100 NEXT Z:PRINT USING" Exits: \    \";MV$;
3110 PRINT USING"Load:##\\Moves:#### Score:###";LD;CHR$(37);C(0);SC;
3120 LOCATE YPOS,XPOS,1
4000 '
4010 ' GET USER INPUT, PARSE VERB AND NOUN
4020 ' -----------------------------------
4030 V$=CHR$(0)
4040 N$=CHR$(0)
4050 O$=CHR$(0)
4060 V=0
4070 N=1
4080 O=0
4090 NL=0
4100 LINE INPUT ">";CO$:IF CO$="" THEN PRINT "Hello?":GOTO 3000
4110 C1$=CO$:FOR M=1 TO LEN(CO$):MID$(C1$,M,1)=FNUPCS$(MID$(CO$,M,1)):NEXT M
4140 IF LEN(C1$)=1 THEN 4600
4150 GOSUB 4500: V$=W$
4160 IF C1$>"" THEN GOSUB 4500: N$=W$
4170 IF C1$>"" THEN GOSUB 4500: O$=W$
4180 IF LEN(V$)>9 THEN V$=LEFT$(V$,9)
4190 IF LEN(N$)>9 THEN N$=LEFT$(N$,9)
4200 IF LEN(O$)>9 THEN O$=LEFT$(O$,9)
4210 C1$=CO$:GOSUB 4500:VI$=W$:I=1
4220 J=INSTR(VS$(I)," "+V$+" ")
4230 IF J=0 AND I<8 THEN I=I+1:GOTO 4220
4240 IF J>0 AND I<9 THEN V=1+FIX(J/10)+25*(I-1)
4250 IF V=0 THEN PRINT "I don't know how to ";VI$;".":GOTO 3000
4260 VL=ASC(MID$(VL$,V,1))-32:IF VL>0 THEN V=VL
4270 IF N$=CHR$(0) THEN 4400
4280 GOSUB 4500:NI$=W$:I=1
4290 J=INSTR(NS$(I)," "+N$+" ")
4300 IF J=0 AND I<8 THEN I=I+1:GOTO 4290
4310 IF J>0 AND I<9 THEN N=1+FIX(J/10)+25*(I-1)
4320 IF N>0 THEN NL=ASC(MID$(NL$,N,1))-32
4330 IF O$=CHR$(0) THEN 4400
4340 GOSUB 4500:OI$=W$:I=1
4350 J=INSTR(NS$(I)," "+O$+" ")
4360 IF J=0 AND I<8 THEN I=I+1: GOTO 4350
4370 IF J>0 AND I<9 THEN O=1+FIX(J/10)+25*(I-1)
4380 IF O>0 THEN NO=ASC(MID$(NL$,N,1))-32
4400 Z=NNOUNS*V+N+ACT.INC:Y=FIX(NDX(Z)/8)
4410 IF Y>0 THEN 4450
4420 IF N>1 THEN N=1: GOTO 4400
4430 ON V GOTO 24000,25000,21000
4440 PRINT "I don't know how to ";CO$;".": GOTO 3000
4450 N=NDX(Z)-8*Y:AS$="":FOR I=0 TO N:GET #1,Y+I
4460 AS$=AS$+AI$:NEXT I
4470 I=INSTR(AS$,CHR$(0)):AS$=LEFT$(AS$,I)
4490 GOTO 5000
4500 ' EXTRACT NEXT WORD
4510 IF C1$="" THEN W$=CHR$(0):GOTO 4570
4520 I=INSTR(C1$," ")
4530 IF I=0 THEN W$=C1$:C1$="":GOTO 4570
4540 W$=LEFT$(C1$,I-1)
4550 C1$=MID$(C1$,I+1,255)
4560 IF INSTR(UW$," "+W$+" ") THEN 4500
4570 RETURN
4600 ' SINGLE-CHR INPUT
4610 ON INSTR("IL",C1$) GOTO 22000,23000
4620 I=INSTR("NSEWUD",C1$)
4630 IF I=0 THEN PRINT "Huh?":GOTO 3000
4640 V=3:N=1:GOTO 4430
5000 '
5010 ' CARRY OUT ASSIGNED ACTIONS
5020 ' --------------------------
5030 C(0)=C(0)+1
5040 AF=0
5050 GOSUB 10000
5060 IF AF=0 THEN PRINT "That isn't possible under the circumstances."
5070 GOTO 1000
10000 '
10002 ' ACT UPON ACTION STRING
10004 ' ----------------------
10006 K=0:T=TRUE:TR=TRUE
10010 K=K+1
10014 IF K>LEN(AS$) THEN RETURN
10016 TN=ASC(MID$(AS$,K,1))
10020 F=(TN>127):TN=(TN AND 127):IF TN=0 THEN RETURN
10028 RF = ((NOT TR) AND (NOT F)) OR (TR AND F)
10030 A=FIX(TN/10)+1:B=TN-10*A+11
10034 ON A GOTO 10038,10040,10042,10044,10046,10048,10098,10098,10098
10036 ON A GOTO 10098,10098,10098,10098
10038 ON B-1 GOTO 10100,10200,10300,10400,10500,10600,10700,10800,10900
10040 ON B GOTO 11000,11100,11200,11300,11400,11500,11600,11700,11800,11900
10042 ON B GOTO 12000,12100,12200,12300,12400,12500,12600,12700,12800,12900
10044 ON B GOTO 13000,13100,13200,13300,13400,13500,13600,13700,13800,13900
10046 ON B GOTO 14000,14100,14200,14300,14400,14500,14600,14700,14800,14900
10048 ON B GOTO 15000,15100,15200,15300,15400,15500,15600,15700,15800
10098 PRINT "Undefined token encountered:";TN:GOTO 10010
10100 ' HASX X
10110 K=K+1:X=FNX(AS$,K)
10120 T=(FNL(X)=255)
10130 GOTO 26000
10200 ' NCRX X
10210 K=K+1:X=FNX(AS$,K)
10220 T=(FNL(X)=CR)
10230 GOTO 26000
10300 ' AVLX X
10310 K=K+1:X=FNX(AS$,K)
10320 T=((FNL(X)=255) OR (FNL(X)=CR))
10330 GOTO 26000
10400 ' XINY X Y
10410 K=K+1:X=FNX(AS$,K)
10420 K=K+1:Y=FNX(AS$,K)
10430 T=(FNL(X)=Y)
10440 GOTO 26000
10500 ' NSRX X
10510 K=K+1:X=FNX(AS$,K)
10520 T=(FNL(X)=ASC(MID$(OB$(X),2,1)))
10530 GOTO 26000
10600 ' NR0X X
10610 K=K+1:X=FNX(AS$,K)
10620 T=(FNL(X)=0)
10630 GOTO 26000
10700 ' XW/Y X Y
10710 K=K+1:X=FNX(AS$,K)
10720 K=K+1:Y=FNX(AS$,K)
10730 T=(FNL(X)=FNL(Y))
10740 GOTO 26000
10800 ' HASL
10810 T=(FNL(NL)=255)
10820 GOTO 26000
10900 ' NCRL
10910 T=(FNL(NL)=CR)
10920 GOTO 26000
11000 ' AVLL
11010 T=(FNL(NL)=CR OR FNL(NL)=255)
11020 GOTO 26000
11100 ' LINX X
11110 K=K+1:X=FNX(AS$,K)
11120 T=(FNL(NL)=X)
11130 GOTO 26000
11200 ' NSRL
11210 T=(FNL(NL)=ASC(MID$(OB$(NL),2,1)))
11220 GOTO 26000
11300 ' NR0L
11310 K=K+1:X=FNX(AS$,K)
11320 T=(FNL(NL)=0)
11330 GOTO 26000
11400 ' LW/X X
11410 K=K+1:X=FNX(AS$,K)
11420 T=(FNL(NL)=FNL(X))
11430 GOTO 26000
11500 ' RAND X
11510 K=K+1:X=FNX(AS$,K)
11520 T=(100*RND<=X)
11530 GOTO 26000
11600 ' CEQN #C N
11610 K=K+1:C=FNX(AS$,K)
11620 K=K+1:N=FNX(AS$,K)
11630 T=(C(C)=N)
11640 GOTO 26000
11700 ' CGEN #C N
11710 K=K+1:C=FNX(AS$,K)
11720 K=K+1:N=FNX(AS$,K)
11730 T=(C(C)>=N)
11740 GOTO 26000
11800 ' CEQC #C #D
11810 K=K+1:C=FNX(AS$,K)
11820 K=K+1:D=FNX(AS$,K)
11830 T=(C(C)=C(D))
11840 GOTO 26000
11900 ' CGEC #C #D
11910 K=K+1:C=FNX(AS$,K)
11920 K=K+1:D=FNX(AS$,K)
11930 T=(C(C)>=C(D))
11940 GOTO 26000
12000 ' XSET N
12010 K=K+1: X=FNX(AS$,K)
12020 FB=FIX(X/8)
12030 T=((BF(FB) AND MASK(X))>0)
12040 GOTO 26000
12100 ' INRX X
12110 K=K+1:X=FNX(AS$,K)
12120 T=(CR=X)
12130 GOTO 26000
12200 ' LIGH
12210 T=LS
12220 GOTO 26000
12300 ' LDGT X
12310 K=K+1:X=FNX(AS$,K)
12320 T=(LD>X)
12330 GOTO 26000
12400 ' OBJ= X
12410 K=K+1:X=FNX(AS$,K)
12420 T=(X=NO)
12430 GOTO 26000
12500 ' X2RY X Y
12510 K=K+1:X=FNX(AS$,K)
12520 K=K+1:Y=FNX(AS$,K)
12530 IF RF THEN 10010 ELSE AF=1
12540 IF FNL(X)<255 AND Y=255 THEN LD=LD+FNW(X)
12550 IF FNL(X)=255 AND Y<255 THEN LD=LD-FNW(X)
12560 MID$(OB$(X),1,1)=CHR$(Y)
12570 GOTO 10010
12600 ' X2OY X Y
12610 K=K+1:X=FNX(AS$,K)
12620 K=K+1:Y=FNX(AS$,K)
12630 IF RF THEN 10010 ELSE AF=1
12640 IF FNL(X)<255 AND FNL(Y)=255 THEN LD=LD+FNW(X)
12650 IF FNL(X)=255 AND FNL(Y)<255 THEN LD=LD-FNW(X)
12660 MID$(OB$(X),1,1)=LEFT$(OB$(Y),1)
12670 GOTO 10010
12700 ' X2CR X
12710 K=K+1:X=FNX(AS$,K)
12720 IF RF THEN 10010 ELSE AF=1
12730 IF FNL(X)=255 THEN LD=LD-FNW(X)
12740 MID$(OB$(X),1,1)=CHR$(CR)
12750 GOTO 10010
12800 ' X2SR X
12810 K=K+1:X=FNX(AS$,K)
12820 IF RF THEN 10010 ELSE AF=1
12830 IF FNL(X)=255 THEN LD=LD-FNW(X)
12840 MID$(OB$(X),1,1)=MID$(OB$(X),2,1)
12850 GOTO 10010
12900 ' X2R0 X
12910 K=K+1:X=FNX(AS$,K)
12920 IF RF THEN 10010 ELSE AF=1
12930 IF FNL(X)=255 THEN LD=LD-FNW(X)
12940 MID$(OB$(X),1,1)=CHR$(0)
12950 GOTO 10010
13000 ' X<>Y X Y
13010 K=K+1:X=FNX(AS$,K)
13020 K=K+1:Y=FNX(AS$,K)
13030 IF RF THEN 10010 ELSE AF=1
13040 IF FNL(X)<255 AND FNL(Y)=255 THEN LD=LD+FNW(X)-FNW(Y)
13050 IF FNL(X)=255 AND FNL(Y)<255 THEN LD=LD-FNW(X)+FNW(X)
13060 L$=CHR$(FNL(X))
13070 MID$(OB$(X),1,1)=LEFT$(OB$(Y),1)
13080 MID$(OB$(Y),1,1)=L$
13090 GOTO 10010
13100 ' L2RX X
13110 K=K+1:X=FNX(AS$,K)
13120 IF RF THEN 10010 ELSE AF=1
13130 IF FNL(NL)<255 AND X=255 THEN LD=LD+FNW(NL)
13140 IF FNL(NL)=255 AND X<255 THEN LD=LD-FNW(NL)
13150 MID$(OB$(NL),1,1)=CHR$(X)
13160 GOTO 10010
13200 ' L2OX X
13210 K=K+1:X=FNX(AS$,K)
13220 IF RF THEN 10010 ELSE AF=1
13230 IF FNL(NL)<255 AND X=255 THEN LD=LD+FNW(NL)
13240 IF FNL(NL)=255 AND X<255 THEN LD=LD-FNW(NL)
13250 MID$(OB$(NL),1,1)=LEFT$(OB$(X),1)
13260 GOTO 10010
13300 ' L2CR
13310 IF RF THEN 10010 ELSE AF=1
13320 IF FNL(NL)=255 THEN LD=LD-FNW(NL)
13330 MID$(OB$(NL),1,1)=CHR$(CR)
13340 GOTO 10010
13400 ' L2SR
13410 IF RF THEN 10010 ELSE AF=1
13420 IF FNL(NL)=255 AND MID$(OB$(X),2,1)<>255 THEN LD=LD-FNW(NL)
13430 MID$(OB$(NL),1,1)=MID$(OB$(NL),2,1)
13440 GOTO 10010
13500 ' L2R0
13510 IF RF THEN 10010 ELSE AF=1
13520 IF FNL(NL)=255 THEN LD=LD-FNW(NL)
13530 MID$(OB$(NL),1,1)=CHR$(0)
13540 GOTO 26000
13600 ' L<>X X
13610 K=K+1:X=FNX(AS$,K)
13620 IF RF THEN 10010 ELSE AF=1
13630 IF FNL(NL)=255 AND FNL(X)<255 THEN LD=LD-FNW(NL)+FNW(X)
13640 IF FNL(NL)<255 AND FNL(X)=255 THEN LD=LD+FNW(NL)-FNW(X)
13650 L$=LEFT$(OB$(NL),1)
13660 MID$(OB$(NL),1,1)=LEFT$(OB$(X),1)
13670 MID$(OB$(X),1,1)=L$
13680 GOTO 10010
13700 ' DROP
13710 IF RF THEN 10010 ELSE AF=1
13720 FOR Z=1 TO NOB
13740 IF FNL(Z)<255 THEN 13770
13750 MID$(OB$(Z),1,1)=CHR$(CR)
13760 LD=LD-FNW(Z)
13770 NEXT Z
13780 GOTO 10010
13800 ' P2RX X
13810 K=K+1:X=FNX(AS$,K)
13820 IF RF THEN 10010 ELSE AF=1
13830 CR=X
13840 GOTO 10010
13900 ' P2OX X
13910 K=K+1:X=FNX(AS$,K)
13920 IF RF THEN 10010 ELSE AF=1
13930 CR=FNL(X)
13940 GOTO 10010
14000 ' SCO+ X
14010 K=K+1:X=FNX(AS$,K)
14020 IF RF THEN 10010 ELSE AF=1
14030 IF X>127 THEN X=FNZ(X)
14040 SC=SC+X
14050 GOTO 10010
14100 ' HEAL X
14110 K=K+1:X=FNX(AS$,K)
14120 IF RF THEN 10010 ELSE AF=1
14130 IF X>127 THEN X=FNZ(X)
14140 HE=HE+X
14150 IF HE>100 THEN HE=100
14160 IF HE<0 THEN HE=0
14170 GOTO 10010
14200 ' CTX+ #C Y
14210 K=K+1:C=FNX(AS$,K)
14220 K=K+1:Y=FNX(AS$,K)
14230 IF RF THEN 10010 ELSE AF=1
14240 IF Y>127 THEN Y=FNZ(Y)
14250 C(C)=C(C)+Y
14260 GOTO 10010
14300 ' CTX= #C Y
14310 K=K+1:C=FNX(AS$,K)
14320 K=K+1:Y=FNX(AS$,K)
14330 IF RF THEN 10010 ELSE AF=1
14340 IF Y>127 THEN Y=FNZ(Y)
14350 C(C)=Y
14360 GOTO 10010
14400 ' SETX X
14410 K=K+1:X=FNX(AS$,K)
14420 IF RF THEN 10010 ELSE AF=1
14430 FB=FIX(X/8)
14440 BF(FB)=(BF(FB) OR MASK(X))
14450 GOTO 10010
14500 ' CLRX X
14510 K=K+1:X=FNX(AS$,K)
14520 IF RF THEN 10010 ELSE AF=1
14530 FB=FIX(X/8)
14540 BF(FB)=(BF(FB) AND (NOT MASK(X)))
14550 GOTO 10010
14600 ' MSGX X
14610 K=K+1:X=FNX(AS$,K)
14620 IF RF THEN 10010 ELSE AF=1
14630 Z=X+MSG.INC:Y=FIX(NDX(Z)/8):N=NDX(Z)-8*Y
14640 MSG$="":FOR I=0 TO N:GET #1,Y+I:MSG$=MSG$+AI$:NEXT I
14650 IF RIGHT$(MSG$,1)=" " THEN MSG$=LEFT$(MSG$,LEN(MSG$)-1):GOTO 14650
14660 PRINT MSG$;:GOTO 10010
14700 ' ENDG
14710 IF RF THEN 10010 ELSE AF=1
14720 PRINT "The game is over.  Your final score is";STR$(SC);"."
14740 ON ERROR GOTO 0
14750 CLOSE
14770 END
14800 ' LMP1
14810 IF RF THEN 10010 ELSE AF=1
14820 LS=TRUE
14830 GOTO 10010
14900 ' LMP0
14910 IF RF THEN 10010 ELSE AF=1
14920 LS=FALSE
14930 GOTO 10010
15000 ' DIAG
15010 IF RF THEN 10010 ELSE AF=1
15020 PRINT "You feel ";
15030 ON 1+FIX((HE-1)/20) GOTO 15040,15050,15060,15070,15080
15040 PRINT "just plain awful.": GOTO 10010
15050 PRINT "lousy.": GOTO 10010
15060 PRINT "a bit poorly.": GOTO 10010
15070 PRINT "pretty well.": GOTO 10010
15080 PRINT "just fine.": GOTO 10010
15100 ' WAIT X
15110 K=K+1:X=FNX(AS$,K)
15120 IF RF THEN 10010 ELSE AF=1
15130 FOR Z=1 TO X/250: NEXT
15140 GOTO 26000
15200 ' ECHO
15210 IF RF THEN 10010 ELSE AF=1
15220 PRINT " "CO$" ";
15230 GOTO 26000
15300 ' RPTV
15310 IF RF THEN 10010 ELSE AF=1
15320 PRINT " "VI$" ";
15330 GOTO 26000
15400 ' RPTN
15410 IF RF THEN 10010 ELSE AF=1
15420 PRINT " "NI$" ";
15430 GOTO 26000
15500 ' RPTO
15510 IF RF THEN 10010 ELSE AF=1
15520 PRINT " "OI$" ";
15530 GOTO 26000
15600 ' ELSE
15610 IF TR THEN RETURN
15620 TR=TRUE
15630 GOTO 10010
15700 ' SAVE
15710 IF RF THEN 10010 ELSE  AF=1
15720 LINE INPUT "Save file";FL$:IF FL$="" THEN PRINT"No Save file given. Save not done.":GOTO 26000
15730 IF INSTR(FL$,".")=0 THEN FL$=FL$+".SAV"
15735 OPEN "O",3,FL$
15740 WRITE #3,WT,HS,LS,CR,LD,SC,RE$
15750 FOR I=0 TO 32:WRITE #3,BF(I):NEXT
15760 FOR I=0 TO 255: WRITE #3,C(I):NEXT
15770 FOR I=0 TO NOB:WRITE #3,ASC(OB$(I)):NEXT
15780 CLOSE #3
15790 GOTO 26000
15800 ' LOAD
15810 IF RF THEN 10010 ELSE AF=1
15820 LINE INPUT "Load file";FL$:IF FL$="" THEN PRINT "No Load file given. Restore not done.":GOTO 26000
15830 IF INSTR(FL$,".")=0 THEN FL$=FL$+".SAV"
15835 OPEN "I",3,FL$
15840 INPUT #3,WT,HS,LS,CR,LD,SC,RE$
15850 FOR I=0 TO 32:INPUT #3,BF(I):NEXT
15860 FOR I=0 TO 255:INPUT #3,C(I):NEXT
15870 FOR I=1 TO NOB:INPUT #3,J
15871 IF OB$(I)>"" THEN MID$(OB$(I),1,1)=CHR$(J)
15872 NEXT
15880 CLOSE #3
15890 GOTO 26000
20000 '
20010 ' DEDICATED ACTION ROUTINES
20020 ' -------------------------
21000 '
21010 ' HANDLE N,S,E,W,U OR D
21020 ' ---------------------
21030 IF LEN(CO$)>1 THEN CO$=LEFT$(N$,1)
21040 I=INSTR("NSEWUDnsewud",CO$):IF I=0 THEN 1000
21050 C(0)=C(0)+1:IF I>6 THEN I=I-6
21060 NR=ASC(MID$(RM$(CR),I,1))
21070 IF NR=0 THEN PRINT "No passage that way.": GOTO 1000
21080 CR=NR
21090 R1=-1
21100 GOTO 1000
22000 '
22010 ' HANDLE INVENTORY
22020 ' ----------------
22030 C(0)=C(0)+1
22040 PRINT "You are carrying:"
22050 K=0
22060 FOR Z=1 TO 255
22065 IF OB$(Z)=CHR$(255) THEN Z=255: GOTO 22100
22070 IF FNL(Z)<255 THEN 22100
22080 PRINT "  ";MID$(OB$(Z),5,26)
22090 K=1
22100 NEXT
22110 IF K=0 THEN PRINT "  Nothing."
22120 GOTO 1000
23000 '
23010 ' HANDLE LOOK
23020 ' -----------
23030 C(0)=C(0)+1
23040 MID$(RE$,CR,1)="N"
23050 R1=0
23060 GOTO 1000
24000 '
24010 ' HANDLE GET
24020 ' ----------
24030 C(0)=C(0)+1
24040 IF NL=0 THEN PRINT "You can't do that.": GOTO 1000
24050 IF FNL(NL)<>CR THEN PRINT "What "NI$"?": GOTO 1000
24060 IF FNL(NL)=255 THEN PRINT "You already have it!": GOTO 1000
24070 WT=ASC(MID$(OB$(NL),3,1))
24080 IF WT=255 THEN PRINT "You are quite incapable of moving the "NI$".": GOTO 1000
24090 IF LD+WT>100 THEN PRINT "You can't carry that much more weight.": GOTO 1000
24100 MID$(OB$(NL),1,1)=CHR$(255)
24110 LD=LD+ASC(MID$(OB$(NL),3,1))
24120 SC=SC+ASC(MID$(OB$(NL),4,1))
24130 PRINT "The "NI$" taken."
24140 GOTO 1000
25000 '
25010 ' HANDLE DROP
25020 ' --------------
25030 C(0)=C(0)+1
25040 IF NL=0 THEN 1000
25050 IF FNL(NL)<>255 THEN PRINT "You aren't carrying any ";NI$: GOTO 1000
25060 WT=ASC(MID$(OB$(NL),3,1))
25070 MID$(OB$(NL),1,1)=CHR$(CR)
25080 LD=LD-ASC(MID$(OB$(NL),3,1))
25090 SC=SC-ASC(MID$(OB$(NL),4,1))
25100 PRINT "The "NI$" released."
25110 GOTO 1000
26000 '
26010 ' UPDATE TRUTH MASK ON RETURN FROM TEST
26020 ' -------------------------------------
26030 T=(T AND NOT RF) OR (NOT T AND RF)
26040 TR=TR AND T
26050 GOTO 10010
30000 '
30010 ' ERROR TRAP
30020 ' ----------
30030 PRINT
30040 PRINT "<*** ERROR";ERR;"has occured in line";ERL;"***>"
30050 PRINT
30060 PRINT "Press ENTER to attempt recovery or ESC to stop run ";
30070 A$=INKEY$:IF A$="" THEN 30070
30080 IF A$=CHR$(27) THEN ON ERROR GOTO 0
30090 IF A$=CHR$(13) THEN RESUME 1000
30100 BEEP:GOTO 30070
50000 ' LAST LINE
```
{% endraw %}

## GLOBE.BAS

{% raw %}
```bas
10 'Real Time Perspective Image of Rotated Globe
20 '
30 'Original program by: Karl Koessel
40 '
50 'Animation by: Andrew Tuline
60 '
70 'This program has been modified from the original submitted to
80 'PCWORLD magazine. The initialization draws 5 different images
90 'and stores the array for each image to disk. This process requires
100 'about 15 minutes. The data file GLOBE.DAT is stored to disk.
110 'The program checks for this data file, and if not available, will
120 'create one. Once this file has been created, the program will load
130 'it into the corresponding arrays, and will display a realtime rotating
140 'globe in the Screen 2 mode. The globe occupies a small section of the
150 'screen and shows best results when used with an RGB monitor. This seems
160 'a good example of non-flickering graphics in Basic.
170 '
180 '
190 SCREEN 2:CLS:KEY OFF:DEFINT L,R,X-Z
200 DIM RC(11),A%(380),B%(380),C%(380),D%(380),E%(380)
210 ON ERROR GOTO 1100
220 OPEN "GLOBE.DAT" FOR INPUT AS #1
230 FOR I=0 TO 380:INPUT #1,A%(I):NEXT
240 FOR I=0 TO 380:INPUT #1,B%(I):NEXT
250 FOR I=0 TO 380:INPUT #1,C%(I):NEXT
260 FOR I=0 TO 380:INPUT #1,D%(I):NEXT
270 FOR I=0 TO 380:INPUT #1,E%(I):NEXT
275 CLS
280 PUT (320,100),A%,PSET
290 PUT (320,100),B%,PSET
300 PUT (320,100),C%,PSET
310 PUT (320,100),D%,PSET
320 PUT (320,100),E%,PSET
330 A$=INKEY$:IF A$="" THEN 280 ELSE END
340 OPEN "GLOBE.DAT" FOR OUTPUT AS #1
350 CX=CY:CZ=SX:SY=SZ:I=J:R=A:B=C:A1=B2:C1=C2
360 A3=B3:X=Y:XC=YC:LX=LY:B$=C$:RC=PI:LZ=ZS:Q=DR
370 FOR X=1 TO 11
380      RC(X)=(X-1)MOD 3+1
390     IF X>6 THEN RC(X)=(5-RC(X))MOD 3+1
400 NEXT
410 PI=3.14159265#
420 CF=PI/180#
430 GOSUB 1030
440 FOR YROT=120 TO 132 STEP 3
450 GOSUB 530
460 GET (265,73)-(373,126),A%
470 FOR I=0 TO 380:PRINT #1,A%(I):NEXT
480 NEXT
490 BEEP:SOUND 32000,1:BEEP:SOUND 32000,1:BEEP:SOUND 32000,1:BEEP:SOUND 32000,1:BEEP
500 CLOSE #1
510 A$=INKEY$:IF A$<>"" THEN 510
520 GOTO 220
530 CX=COS(CF*XROT+ATN(YOBS/ZOBS)):SX=SIN(CF*XROT+ATN(YOBS/ZOBS))
540 CY=COS(CF*YROT+ATN(XOBS/ZOBS)):SY=SIN(CF*YROT+ATN(XOBS/ZOBS))
550 CZ=COS(CF*ZROT):SZ=SIN(CF*ZROT)
560 ZOBS=SQR(XOBS^2+YOBS^2+ZOBS^2)
570 ZS=R^2/ZOBS
580 CLS
590 LOCATE 1,1:PRINT"Initializing GLOBE.DAT. 5 beeps will sound upon completion"591
600 LOCATE 5,5:PRINT USING "Picture # of 5";(YROT-117)/3
610 FOR I=0 TO 3 STEP PI/12
620     RC=(I*12/PI+2)MOD 3+1
630     C$=STR$(RC)
640     C$="3"
650     FOR J=0 TO 2.0001*PI STEP PI/24
660             A=R*SIN(I)*SIN(J)
670             B=R*COS(J)
680             C=R*COS(I)*SIN(J)
690             GOSUB 860
700             GOSUB 960
710     NEXT
720 NEXT
730 FOR I=PI/12 TO 11*PI/12 STEP PI/12
740     RC=RC(I*12/PI)
750     C$=STR$(RC)
760     C$="3"
770     FOR J=0 TO 2.0001*PI STEP PI/24
780             A=R*SIN(I)*SIN(J)
790             B=R*COS(I)
800             C=R*SIN(I)*COS(J)
810             GOSUB   860
820             GOSUB 960
830     NEXT
840 NEXT
850 RETURN
860 A1=A*CY-C*SY
870 C1=A*SY+C*CY
880 B2=B*CX-C1*SX
890 C2=B*SX+C1*CX
900 A3=A1*CZ-B2*SZ
910 B3=A1*SZ+B2*CZ
920 DR=C2/(ZOBS-C2)+1
930 X=INT(A3*DR*ASP+XC)
940 Y=INT(B3*-DR+YC)
950 RETURN
960 IF C2<ZS OR LZ<ZS THEN B$="BC":GOTO 990
970 Q=(X<0)+(X>639)+(Y<0)+(Y>199)+(LX<0)+(LX>639)+(LY<0)+(LY>199)
980 IF Q+(J=0) THEN B$="BC" ELSE B$="C"
990 LX=X:LY=Y
1000 LZ=C2
1010 DRAW B$+C$+"M"+STR$(X)+","+STR$(Y)
1020 RETURN
1030 XC=320:YC=100
1040 XOBS=-9:YOBS=0:ZOBS=456
1050 XROT=37:ZROT=23:'YROT=-123
1060 R=25
1070 BCK=1:PAL=1
1080 ASP=2
1090 RETURN
1100 IF ERR<>53 THEN PRINT"error":END
1110 RESUME 340
```
{% endraw %}

## GOLF2.BAS

{% raw %}
```bas
230 CLS
240 REM CONVERTED BY STEVE ESTLE
250 CLS
260 RANDOMIZE
270 DIM A$(25)
280 A$(1)="1ST TEE"
290 A$(2)="2ND TEE"
300 A$(3)="3RD TEE"
310 A$(4)="4TH TEE"
320 A$(5)="5TH TEE"
330 A$(6)="6TH TEE"
340 A$(7)="7TH TEE"
350 A$(8)="8TH TEE"
360 A$(9)="9TH TEE"
370 A$(10)="10TH TEE"
380 A$(11)="11TH TEE"
390 A$(12)="12TH TEE"
400 A$(13)="13TH TEE"
410 A$(14)="14TH TEE"
420 A$(15)="15TH TEE"
430 A$(16)="16TH TEE"
440 A$(17)="17TH TEE"
450 A$(18)="18TH TEE"
460 PRINT
470 PRINT
480 PRINT
490 INPUT "ARE YOU A NEW MEMBER OF THE CLUB?  ENTER Y OR N";X$
500 CLS
510 IF X$="Y" THEN 550
520 IF X$="N" THEN 790
530 PRINT "I CAN SEE YOU HAVE ALREADY SPENT CONSIDERABLE TIME AT THE 19THHOLE TRY ANSWERING AGAIN."
540 GOTO 490
550 PRINT :PRINT :PRINT :PRINT
560 PRINT "             YOU ARE ABOUT TO PLAY A ROUND OF GOLF                                           AT THE NEW AND EXCITING ESSICK COUNTRY                                          CLUB."
570 PRINT
580 PRINT TAB(18)"********** THESE ARE YOUR CLUBS **********"
590 PRINT
600 PRINT
610 PRINT TAB(26)"  4 WOODS NUMBERED 1 THRU 4"
620 PRINT
630 PRINT TAB(26)"  8 (EIGHT) IRONS  2 THRU 9"
640 PRINT
650 PRINT TAB(26)"  A PUTTER AND A WEDGE"
660 PRINT
670 PRINT
680 INPUT "PRESS ENTER FOR INSTRUCTIONS ";X0$
690 CLS
700 PRINT
710 PRINT
720 PRINT
730 PRINT "A PUTTER CAN BE USED ONLY ON THE GREEN.  YOU PUTT BY INPUTTING A NUMBER FROM 1  TO 10. THE DISTANCE AND ACCURACY OF YOUR PUTT ARE CONTROLLED BY THE MAGNITUDE "
740 PRINT "OF YOUR INPUT.  A 1 WILL TAP THE BALL ACCURATELY, A TEN WILL DRIVE IT APPROX    100 FT WITH QUESTIONABLE ACCURACY."
750 PRINT
760 PRINT TAB(26)"PRESS ENTER TO CONTINUE.."
770 INPUT I9$
780 CLS
790 S=S+1
800 IF S<>19 THEN 830
810 K1=2
820 GOTO 2600
830 IF S<>10 THEN 930
840 K1=1
850 PRINT
860 PRINT
870 PRINT "DO YOU WANT TO PLAY ANOTHER NINE HOLES,  ";
880 INPUT "YES/NO ";X2$
890 IF X2$="Y" THEN 930
900 IF X2$="N" THEN 2600
910 PRINT :PRINT :PRINT "IF YOU PLAY LIKE YOU TYPE YOU WILL NEVER MAKE IT!!!"
920 GOTO 870
930 PRINT
940 PRINT
950 READ Y
960 Y1=Y
970 READ D
980 PRINT "YOU ARE ON THE ";A$(S);"..."
990 PRINT "IT IS ";Y;" YARDS LONG, PAR ";D
1000 C=0
1010 K=0
1020 PRINT
1030 IF INT(Y)=0 THEN 2150
1040 C=C+1
1050 IF S+C<3 THEN 1080
1060 PRINT :PRINT :PRINT "WEDGE, IRON OR WOOD";
1070 GOTO 1090
1080 PRINT "TELL ME WHICH TYPE OF CLUB TO USE, A WEDGE AN IRON OR A WOOD.  FROM NOW ON I    WILL JUST ASK WEDGE, IRON OR WOOD."
1090 INPUT Z$
1100 IF Z$="WOOD" THEN 1380
1110 IF Z$="WEDGE" THEN 1150
1120 IF Z$="IRON" THEN 1210
1130 PRINT "YOU CAN ONLY CHOOSE A WEDGE, IRON OR WOOD."
1140 GOTO 1090
1150 IF Y<(18*RND+73) THEN 1180
1160 PRINT "  HEY... YOU CAN'T USE A WEDGE AT THIS DISTANCE...."
1170 GOTO 1060
1180 IF INT(15*RND)=13 THEN 2530
1190 Y=Y-(INT(75*RND+50))
1200 GOTO 2070
1210 PRINT "WHAT NUMBER IRON ";
1220 INPUT A
1230 IF A<2 THEN 1260
1240 IF A>9 THEN 1260
1250 GOTO 1280
1260 PRINT "YOUR IRONS ARE NUMBERED 2 THRU 9, RETYPE..."
1270 GOTO 1220
1280 IF K=0 THEN 1310
1290 IF INT(5*RND)=3 THEN 2070
1300 GOTO 2020
1310 M=INT(35*RND+200)
1320 X=INT(M-14.4*A-(7*RND+38))
1330 Y=Y-X
1340 IF M/27=INT(M/27) THEN 1950
1350 IF M/8=INT(M/8) THEN 1850
1360 IF M/69=INT(M/69) THEN 2530
1370 GOTO 1700
1380 PRINT "WHAT NUMBER WOOD";
1390 INPUT A
1400 IF A<1 THEN 1430
1410 IF A>4 THEN 1430
1420 GOTO 1450
1430 PRINT "YOUR WOODS ARE NUMBERED 1-4, RETYPE...";
1440 GOTO 1390
1450 IF K=0 THEN 1480
1460 IF INT(7*RND)=3 THEN 2070
1470 GOTO 2020
1480 X=INT(RND*250)
1490 IF A<>1 THEN 1520
1500 IF X<220 THEN 1480
1510 GOTO 1620
1520 IF A<>2 THEN 1560
1530 IF X<210 THEN 1480
1540 IF X>230 THEN 1480
1550 GOTO 1620
1560 IF A<>3 THEN 1600
1570 IF X<200 THEN 1480
1580 IF X>220 THEN 1480
1590 GOTO 1620
1600 IF X<190 THEN 1480
1610 IF X>210 THEN 1480
1620 Y=Y-X
1630 FOR I=1 TO (4-A+C^2)
1640 V=INT(30*RND)
1650 IF X/11=INT(X/11) THEN 1770
1660 IF X/5=INT(X/5) THEN 1900
1670 IF X/28=INT(X/28) THEN 1800
1680 IF X/27=INT(X/27) THEN 1950
1690 NEXT I
1700 IF Y>27 THEN 1750
1710 IF Y<-23 THEN 1990
1720 IF ABS(Y)<5 THEN 1880
1730 IF (3.3*RND)=2 THEN 1840
1740 GOTO 2070
1750 PRINT "YOU HIT IT ";X;" YARDS. YOU ARE ";Y;" YARDS AWAY."
1760 GOTO 1020
1770 IF Y<25 THEN 1850
1780 PRINT "YOU ARE IN THE LEFT ROUGH ";Y;" YARDS AWAY."
1790 GOTO 1020
1800 PRINT "YOU SLICED THE BALL INTO A POND.  LOSE TWO STROKES AND REPLAY.."
1810 C=C+1
1820 Y=Y1
1830 GOTO 1020
1840 Y=ABS(Y)
1850 Y=30*RND+15
1860 PRINT "YOU'RE IN A TRAP NEAR THE GREEN."
1870 GOTO 1020
1880 PRINT "YOU S U N K THE SHOT......."
1890 GOTO 2540
1900 IF V/6=A THEN 1950
1910 IF Y-20<X-(A*V) THEN 1700
1920 PRINT "YOU`RE IN THE RIGHT ROUGH ";Y+25;" YARDS AWAY..."
1930 Y=Y-25
1940 GOTO 1020
1950 PRINT "THE BALL IS LOST IN THE WOODS.  REPLAY....TWO STROKE PENALTY.."
1960 C=C+1
1970 Y=Y1
1980 GOTO 1020
1990 Y=ABS(Y)
2000 PRINT "YOU OVERSHOT THE GREEN BY ";Y;" YARDS..."
2010 GOTO 1020
2020 IF INT(2*RND)=1 THEN 2050
2030 PRINT "THE IDEA IS TO HIT THE BALL NOT THE SAND.."
2040 GOTO 1020
2050 PRINT "YOU TOPPED IT NO GAIN.."
2060 GOTO 1020
2070 IF INT(4*RND)<>3 THEN 2100
2080 F=INT(10*RND)
2090 GOTO 2140
2100 IF INT(7*RND)<>7 THEN 2130
2110 F=INT(50*RND+50)
2120 GOTO 2140
2130 F=INT(50*RND+10)
2140 IF INT(F)=0 THEN 2540
2150 IF F<>1 THEN 2180
2160 PRINT "YOU ARE ON THE GREEN 1 FT FROM THE PIN.. LUCK SHOT...."
2170 GOTO 2200
2180 PRINT "YOU ARE ON THE GREEN,";F;"FEET FROM THE PIN..."
2190 PRINT
2200 PRINT
2210 C=C+1
2220 PRINT "WHAT IS YOUR PUTT";
2230 INPUT A
2240 IF A>10 THEN 2270
2250 IF A<1 THEN 2270
2260 GOTO 2290
2270 PRINT "CAN'T USE THAT...RETYPE."
2280 GOTO 2230
2290 K=F
2300 F=INT(F=(A^2+A-((.5*A^2-A+1)*RND)))
2310 IF ABS(F)>(RND+1.5) THEN 2390
2320 IF K>5 THEN 2480
2330 IF INT(10*RND)=7 THEN 2360
2340 PRINT "THE TAP IS GOOD.."
2350 GOTO 2540
2360 PRINT "OH BOY, YOU JABBED THE PUTT";INT(9*RND+2);"INCHES FROM THE CUP.."
2370 F=1
2380 GOTO 2200
2390 IF F=0 THEN 2480
2400 IF F>0 THEN 2430
2410 F=ABS(F)
2420 PRINT "YOU OVERSHOT THE BLOOMING CUP!!!"
2430 IF F<>1 THEN 2460
2440 PRINT "YOU ARE ONE FOOT FROM THE PIN..."
2450 GOTO 2390
2460 PRINT "YOU ARE NOW ";F;" FEET FROM THE PIN..."
2470 GOTO 2200
2480 IF K<>1 THEN 2510
2490 PRINT "YOU SUNK IT FROM ONE FOOT."
2500 GOTO 2540
2510 PRINT "YOU SUNK IT FROM ";K;" FEET.."
2520 GOTO 2540
2530 PRINT "YOU    S U N K    IT!!!!!!"
2540 PRINT
2550 IF C<>1 THEN 2570
2560 PRINT "************HOLE   IN   ONE**************"
2570 E=E+C
2580 PRINT "YOU HAVE HAD ";C;" STROKES ON HOLE NUMBER ";S;"."
2590 GOTO 790
2600 PRINT "AFTER";(K1*9);"HOLES YOU HAVE HAD";E;" STROKES..."
2610 IF K1*36-E<0 THEN 2700
2620 IF (K1*36-E)<>0 THEN 2650
2630 PRINT "NICE GAME....... YOU SHOT PAR!!!!"
2640 GOTO 2730
2650 PRINT "THE PAR IS";(K1*36);".  YOU ARE";(K1*36-E);"UNDER PAR."
2660 PRINT
2670 PRINT TAB(28)"CONGRATULATIONS!!!!!!"
2680 PRINT :PRINT :PRINT TAB(12)"YOU PLAYED A GREAT GAME AT THE ESSICK COUNTRY CLUB !!!!"
2690 GOTO 2730
2700 PRINT "THE PAR IS";(K1*36);".  YOU ARE";(E-K1*36);"OVER PAR."
2710 DATA 374,4,434,4,210,3,376,4,205,3,440,4,422,4,510,5,595,5
2720 DATA 510,5,434,4,210,3,312,4,428,4,440,4,205,3,515,5,318,4
2730 END
```
{% endraw %}

## HIQUE2.BAS

{% raw %}
```bas
1 '             *** HIQUE *** 
2 '             by Wes Meier (70215,1017) 
3 ' 
4 '             Written for IBM PC with 80 Column Color. 
5 '             Requires BASICA. 
6 '             Supports Light Pen Operation. 
7 ' 
8 SCREEN 0,1:KEY OFF:LOCATE ,,0,0,7:COLOR 6,1,1:CLS 
9 DEFINT B-Z:DEFSTR A:DIM P(33),L(33),T(33),L2T(33) 
10 DEF SEG=0:POKE &H417,96:DEF SEG 
11 A=STRING$(4,219)+STRING$(4,29)+CHR$(31)+STRING$(4,219)+CHR$(30)+"  " 
12 AB=CHR$(218)+STRING$(2,196)+CHR$(191)+STRING$(4,29)+CHR$(31) 
13 AB=AB+CHR$(192)+STRING$(2,196)+CHR$(217)+CHR$(30)+"  " 
14 MOVE=0:PEGS=32 
15 A(1)="       1  2  3" 
16 A(2)="       4  5  6" 
17 A(3)=" 7  8  9 10 11 12 13" 
18 A(4)="14 15 16 17 18 19 20" 
19 A(5)="21 22 23 24 25 26 27" 
20 A(6)="      28 29 30" 
21 A(7)="      31 32 33" 
22 A(8)="  Board Numbering" 
23 FULL=-1:EMPTY=NOT FULL 
24 GOSUB 25:GOTO 26 
25 FOR X=1 TO 33:P(X)=FULL:NEXT:P(17)=EMPTY:RETURN 
26 DATA 1,1,1,4,4,4,7,7,7,7,7,7,7,10,10,10,10,10,10,10,13,13,13,13,13,13,13 
27 DATA 16,16,16,19,19,19 
28 DATA 32,38,44,32,38,44,20,26,32,38,44,50,56,20,26,32,38,44,50,56,20,26,32 
29 DATA 38,44,50,56,32,38,44,32,38,44 
30 FOR X=1 TO 33:READ L(X):NEXT 
31 FOR X=1 TO 33:READ T(X):L2T(X)=L(X)^2-T(X):NEXT 
32 PEN ON 
33 ON PEN GOSUB 63 
34 USE.PEN=-1 
35 PRINT TAB(30);:COLOR 20,7:PRINT" *** HIQUE *** ":COLOR 6,1:PRINT 
36 PRINT"HIQUE is a puzzle that has 32 pegs or blocks arranged in a cross shape with the" 
37 PRINT"center position of the cross empty. Your task is to is to remove as many pegs" 
38 PRINT"as you can. A fantastic solution is one that has only one peg remaining." 
39 PRINT"The PERFECT game ends with the one peg remaining in the center position!" 
40 PRINT 
41 PRINT"Rules:" 
42 PRINT"     - Pegs are removed ONLY when they are JUMPED by another peg." 
43 PRINT"     - You may jump ONLY One peg at a time." 
44 PRINT"     - You may jump ONLY vertically or horizontally...NOT diagonally." 
45 PRINT"     - You may jump ONLY into an EMPTY space." 
46 PRINT 
47 PRINT"Don't worry about making a mistake, HIQUE won't let you!" 
48 PRINT:PRINT"Now, press any key to start the puzzle or, if you have a light pen," 
49 PRINT"touch the screen........";:COLOR 20,7:PRINT"   GOOD LUCK !!   "; 
50 PENFLAG=-1 
51 AX=INKEY$:IF AX="" THEN 51 
52 USE.PEN=0:PEN OFF 
53 GOTO 75 
54 'Draw the Cross Subroutine 
55 FOR X=1 TO 33 
56 LOCATE L(X),T(X) 
57 IF P(X)=FULL THEN PRINT A; ELSE PRINT AB; 
58 NEXT 
59 IF USE.PEN THEN RETURN 
60 LOCATE 1,1 
61 FOR X=1 TO 8:PRINT A(X);:PRINT:NEXT 
62 RETURN 
63 'Light Pen Subroutine 
64 IF PENFLAG THEN PENFLAG=0:RETURN 75 
65 IF PEN(8)=24 THEN MOVE=0:PEGS=32:GOSUB 25:CLS:RETURN 75 
66 L=0:FOR X=1 TO 33:IF PEN(8)=L(X) OR PEN(8)=L(X)+1 THEN L=L(X):X=34 
67 NEXT:IF L=0 THEN RETURN 
68 T=0:FOR X=1 TO 33 
69 IF PEN(9)>=T(X) AND PEN(9)<=T(X)+3 THEN T=T(X):X=34 
70 NEXT:IF T=0 THEN RETURN 
71 L2T=L^2-T 
72 FOR X=1 TO 33 
73 IF L2T=L2T(X) THEN PEN.MOVE=X:X=34 
74 NEXT:RETURN 
75 COLOR 6,1:CLS:GOSUB 55 
76 IF USE.PEN THEN 77 ELSE 80 
77 LOCATE 24,20:COLOR 4,7 
78 PRINT"     Touch This Area To Re-Start       "; 
79 GOTO 81 
80 LOCATE 24,32:PRINT"Enter 99 to Re-Start"; 
81 LOCATE 16,50:COLOR 4,7 
82 MOVE=MOVE+1 
83 PRINT" Move #"MOVE; 
84 LOCATE 17,50:PRINT" Pegs Remaining ="PEGS; 
85 COLOR 6,1 
86 LOCATE 22,32:PRINT STRING$(25,32); 
87 LOCATE 22,32:PRINT"Move from "; 
88 IF NOT USE.PEN THEN 92 
89 PRINT"(Touch Pen)";:PEN.MOVE=0 
90 IF PEN.MOVE=0 THEN 90 
91 MOVE.FROM=PEN.MOVE:GOTO 95 
92 INPUT MOVE.FROM:IF MOVE.FROM<>99 THEN 95 
93 MOVE=0:PEGS=32:GOSUB 25:GOTO 75 
94 SOUND 37,5:GOTO 86 
95 IF MOVE.FROM<1 OR MOVE.FROM>33 THEN 94 
96 IF P(MOVE.FROM)=EMPTY THEN 94 
97 COLOR 22:LOCATE L(MOVE.FROM),T(MOVE.FROM):PRINT A;:COLOR 6 
98 LOCATE 22,32:PRINT STRING$(25,32); 
99 LOCATE 22,32:PRINT"Move to "; 
100 IF NOT USE.PEN THEN 104 
101 PRINT"(Touch Pen)";:PEN.MOVE=0 
102 IF PEN.MOVE=0 THEN 102 
103 MOVE.TO=PEN.MOVE:GOTO 105 
104 INPUT MOVE.TO:IF MOVE.TO=99 THEN 93 
105 IF MOVE.TO>=1 AND MOVE.TO<=33 THEN 108 
106 COLOR 6:LOCATE L(MOVE.FROM),T(MOVE.FROM):PRINT A; 
107 GOTO 94 
108 IF P(MOVE.TO)=FULL THEN 106 
109 IF MOVE.FROM<4 THEN MF=MOVE.FROM-6:GOTO 114 
110 IF MOVE.FROM<7 THEN MF=MOVE.FROM-2:GOTO 114 
111 IF MOVE.FROM>30 THEN MF=MOVE.FROM+6:GOTO 114 
112 IF MOVE.FROM>27 THEN MF=MOVE.FROM+2:GOTO 114 
113 MF=MOVE.FROM 
114 IF MOVE.TO<4 THEN MT=MOVE.TO-6:GOTO 119 
115 IF MOVE.TO<7 THEN MT=MOVE.TO-2:GOTO 119 
116 IF MOVE.TO>30 THEN MT=MOVE.TO+6:GOTO 119 
117 IF MOVE.TO>27 THEN MT=MOVE.TO+2:GOTO 119 
118 MT=MOVE.TO 
119 IF ABS(MT-MF)<>2 AND ABS(MT-MF)<>14 THEN 106 
120 OP=(MF+MT)/2 
121 IF OP<2 THEN OP=OP+6:GOTO 125 
122 IF OP<7 THEN OP=OP+2:GOTO 125 
123 IF OP>32 THEN OP=OP-6:GOTO 125 
124 IF OP>27 THEN OP=OP-2 
125 IF P(OP)=EMPTY THEN 106 
126 P(MOVE.FROM)=EMPTY 
127 P(OP)=EMPTY 
128 P(MOVE.TO)=FULL 
129 PEGS=PEGS-1 
130 LOCATE L(MOVE.FROM),T(MOVE.FROM):PRINT AB; 
131 LOCATE L(OP),T(OP):PRINT AB; 
132 LOCATE L(MOVE.TO),T(MOVE.TO):PRINT A; 
133 IF PEGS>1 THEN 81 
134 LOCATE 22,30:PRINT STRING$(25,32); 
135 LOCATE 22,26:COLOR 20,7 
136 PRINT" **** You DID it !!! **** "; 
137 IF P(17)=EMPTY THEN 139 
138 LOCATE 23,24:PRINT" **** A PERFECT Game !!! **** "; 
139 COLOR 6,1 
140 FOR X=1 TO 3:FOR Y=20 TO 70:PLAY"MBT255L48N=Y;":NEXT:NEXT 
141 LOCATE 23,1 
142 END'of program.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0091

     Volume in drive A has no label
     Directory of A:\

    ADVENT   DOC     35584  11-02-83   5:21p
    BASCOM   PAT      3328  11-02-83   5:11p
    BOGGLE   BAS      2944  11-02-83   5:27p
    CHESS    BAS     21120  10-25-83   8:48p
    COMPIL   BAS     11264   4-12-84   5:44p
    CRC      TXT      1124  11-09-84   1:32p
    CRCK4    COM      1536  10-21-82   7:54p
    DKSPAT   TXT      3584  11-02-83   5:14p
    DRIVER   BAS     14963  10-26-83   7:50p
    GLOBE    BAS      3147  10-25-83  12:19a
    GLOBE    DAT     13691  10-25-83  12:42a
    GOLF2    BAS      7296  10-25-83   8:46p
    HIQUE2   BAS      5504  11-02-83   5:29p
    MUGGER   DAT      7296   4-12-84   6:43p
           14 file(s)     132381 bytes
                           24576 bytes free
