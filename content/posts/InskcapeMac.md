---
title: "Inkscape command line on the Mac"
date: 2023-04-02T08:37:57-06:00
draft: false
tags:
    - Inskscape
    - Mac
    - MacOS
---

I have been testing out the Inskscape command line tool for the last few days and thought I would share a small tip.

On the Mac the command line tools are accessed via an executable inside the Inskscape .app package. It doesn't load any binaries so you have to call it with the path to the Inkscape application. 

`/Applications/Inkscape.app/Contents/MacOS/inkscape`

![Here there be Unix](/images/inkscapemac.jpg)

If you want, and you probably should if you want to use it regularly, you can create  link in your `bin` directory.

`ln -s /Applications/Inkscape.app/Contents/MacOS/inkscape /usr/local/bin/inkscape`

Oddly the [wiki page](https://wiki.inkscape.org/wiki/index.php/Using_the_Command_Line#Export_files) for the Inskcape command line options doesn't mention this at all. 

