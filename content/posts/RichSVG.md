---
title: "Rich CLI .svg Workflow"
date: 2023-04-01T10:22:35-06:00
draft: false
tags:
    - RichCLI
    - Alfred
    - Python
---

Part of the Textual/Rich library ecosystem is a library called [Rich CLI](https://github.com/Textualize/rich-cli). It has a number of features but the one that has me most interested is its ability to export HTML and SVG versions of source code, Markdown and .csv files. 

You can use this command line command

```bash
rich -n -g _preflight_all.py --export-svg all.svg
```

to convert your code into an svg file. You can even apply themes to the output to give it a specific look if you so desire. It is a quick and simple way to create images of your code or supporting files for documentation or writing.

## That is a lot to type

There are a few issues with this approach. It is a lot to type and I am not a consistent enough typist to want to do that over and over again. As well, as I traipse around on my Mac I don't want to have to open a terminal and then move to a new directory to then type in the command.

So Alfred was enlisted to make this an easier process. 

![The Alfred Workflow](/images/richworkflow.jpg)

The Workflow starts with a Keyword object that triggers on `Rich`. Since the library can export .svg and .html formats I decided to add an Action Modifier to allow me to press ⇧ and have the export be done as an HTML file. 

This requires me to use two Args and Vars objects. Each one will set an export flag as well as an export extension that will be used in a later script. If the ⇧ is held then the values will be for an HTML file and if not they will be for an svg file.

![Args & Vars object](/images/rich_argsvars.jpg)

The Automation Task will get the path to the Finder selection and then it is off to a Run Script object.

![Python ahoy!](/images/richpython.jpeg)

The Python code uses the pathlib library to get the details of the file. This is a simpler way to get the filename without the extension but it means that the paths are POSIXpath types and need to be rendered as strings to be concatenated with the other data. The code is also running inside of Alfred so all of the references to the file that is going to be rendered as well as the exported file need to be full paths. 

All of this data is assembled into a command string and then is `print()`ed as output so it can be used in a Terminal Command object. After some trial and error I determined that the `rich` command won't work inside a Run Script object nor will it work in a Python subprocess. It needs to run in its own terminal session. I _think_ that the reason for this is that the library uses the output from the terminal to help build the exported file. 

## Some outstanding issues

The Workflow runs quite well aside from having the terminal pop up as part of it. You can select a file and then Alfred will assemble the necessary data and send it to the terminal to have Rich create a detailed svg file of your code or data. 

![SVG code](/images/rich.svg)

My next step would be to create an addition to the Workflow to then convert the svg file to a png or jpeg file. The svg is nice but I prefer bitmap images so I can make them look 'all purdy like'.

![A pretty image](/images/svgtojpg.jpg)

I use CleanShot X to create those images and it won't work with svg files. The files that Rich creates are quite complex and some of the apps on my Mac won't render they properly. Some of them won't render them at all. 

I found a free Mac app, [Gapplin](http://gapplin.wolfrosch.com/), online that does process Rich's svg files but it is an older app and doesn't support Shortcuts. It has an Automator action and it has a scripting dictionary but given that it hasn't been updated in years I don't think of it as anything other than a stopgap. Automator is a dead end on the Mac

After a few recommendations I downloaded [Inkscape](https://inkscape.org/) as it has a command line mode that you can use to export bitmap files from svg files. Sadly it generates errors that I think are based on the use of glyphs in the [Fira Code font](https://github.com/tonsky/FiraCode). There appears to be an issue with Inkscape and glyphs that is causing some issues and I am trying to see  if I can track down the exact issue. 

So currently I am waiting for a consistent way to export the svg files to png or jpeg and while I wait for that I am taking screenshots of my code instead. At some point I hope to have this resolved.

