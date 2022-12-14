# DIKU Mud parser and player

This repository contains two small functionalities; one converter parses .ARE files to JSON and the other part makes them 'playable' (walkable, rather) by interpreting the latter.

It's far from being a full parser; it just translates the spatial descriptions to let the user walk through them.

It could serve as a starting point for people who want to translate MUDs into present day technology.


## Demo

A [demo is here](https://dirkk0.github.io/dikumud-parser-player/): https://dirkk0.github.io/dikumud-parser-player/

![](screenshot.png)

## About DIKU Muds

The impact that MUDs have had on the development of online worlds in general cannot be overstated, and we should learn from this specifically for the recent Metaverse craze (from 2022).

For a general overview, this [Engadget article has you covered](https://www.engadget.com/2015-01-03-the-game-archaeologist-how-dikumud-shaped-modern-mmos.html) but if you want to get more into history and details, [Raph Koster provides more insight](https://www.raphkoster.com/2022/09/01/sandbox-vs-themepark/#more-42626)


## Area description files and resources

As a starting point, the [Grim Wheel Area Archives](https://www.grimwheel.com/areas/)
lead to a comprehensive format description can be found in Alex McHale's [merc-mud](https://github.com/alexmchale/merc-mud/blob/master/doc/area.txt) repository. 

The major [description is here](https://github.com/alexmchale/merc-mud/blob/master/doc/area.txt) and [lots of .ARE files are here](https://github.com/alexmchale/merc-mud/tree/master/area). Even more areas seem to be [here](https://github.com/vedicveko/Mud-Areas).


## How to continue from here


The consequent next step would be to put the MOBs (mobiles) and objects in place.
All of this is NOT in the demo.

To spawn objects in the rooms, we need to look at the RESETS table.

Line 6930 is:
`M 1 12000 1 12010`

which according to the spec means
`M <:number> <mob-vnum:number> <limit:number> <room-vnum:number> <comment:to_eol>`

which in turn means:
put MOB 12000 (Heimdall) in the quantity 1 into room 12010 (Bifrost).

`E 1 12000 1 16` means
equip OBJECT 12000 (Hofud, a broadsword) to the last MOBILE loaded with M which in this case is Heimdall, again.

The next two 'E' command put a horn and white armour on Heimdall.

`O 1 12059 1 12012` translates to 
put OBJECT 12059 (Skidbladnir, a longboat) into ROOM 12012 (the shores of the sea).





