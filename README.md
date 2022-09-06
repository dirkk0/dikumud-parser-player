# DIKU Mud parser and player

This repository contains two small functionalities; one converter parses .ARE files to JSON and the other part makes them 'playable' (walkable, rather) by interpreting the latter.

It's by far not a full parser; it merely translates the room descriptions to let the user walk through them.

It might serve as a starting point for people wishing to translate MUDs to the present day.


## About DIKU Muds

It's hard to overstate the influence that MUDs had on the development of online worlds in general and we should learn from this specifically in the latest Metaverse craze (as of 2022).

For a general overview, this [Engadget article has you covered](https://www.engadget.com/2015-01-03-the-game-archaeologist-how-dikumud-shaped-modern-mmos.html) but if you want to get more into history and details, [Raph Koster provides more insight](https://www.raphkoster.com/2022/09/01/sandbox-vs-themepark/#more-42626)


## Area description files and ressources

As a starting point, the [Grim Wheel Area Archives](https://www.grimwheel.com/areas/)
lead to a comprehensive format description can be found in Alex McHale's [merc-mud](https://github.com/alexmchale/merc-mud/blob/master/doc/area.txt) repository. 

The major [description is here](https://github.com/alexmchale/merc-mud/blob/master/doc/area.txt) and [lots of .ARE files are here](https://github.com/alexmchale/merc-mud/tree/master/area). Even more areas seem to be [here](https://github.com/vedicveko/Mud-Areas).


## area files

https://github.com/vedicveko/Mud-Areas

https://www.grimwheel.com/areas/



## how to continue

The consequent next step would be to put the MOBs (mobiles) and objects in place.

To spawn objects in the rooms, we need to look at the RESETS table.

Line 6930 is:
M 1 12000 1 12010

which according to the spec means
`M <:number> <mob-vnum:number> <limit:number> <room-vnum:number> <comment:to_eol>`

which in turn means
put MOB 12000 (Heimdall) in the quantity 1 into room 12010 (Bifrost).

`E 1 12000 1 16` means
equip OBJECT 12000 (Hofud, a broadsword) to the last MOBILE loaded with M which in this case is Heimdall, again.

The next two 'E' command put a horn and white armour on Heimdall.

`O 1 12059 1 12012` translates to 
put OBJECT 12059 (Skidbladnir, a longboat) into ROOM 12012 (the shores of the sea).





