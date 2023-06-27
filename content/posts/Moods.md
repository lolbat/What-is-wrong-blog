---
title: "Moods"
date: 2023-03-12T10:13:35-06:00
draft: false
tags:
    - mood
    - Obsidian
    - ADHD
    - depression
---

I have been creating a vault in [Obsidian](https://obsidian.md) to contain some of my older bookmarks and links to pages for possible blog posts. It makes it easier to search them and I can also copy over the text from any webpages using the [MarkDownload](https://github.com/deathau/markdownload) extension. 

On a bit of a whim I added a daily notes page and a mood tracker. The daily note is something that I had a dubious opinion of previously but I am going to give it a try to see what information I can glean from it. The mood tracker is something that I have been interested in using for some time but I don't really want any information even remotely related to health online or in someone's app. 

Obsidian has quite a few plugins and tools that you can use to track and display this type of data but I am using the [Dataview](https://github.com/blacksmithgu/obsidian-dataview) plugin. Dataview allows you to query the pages, metadata and information in your Obsidian pages and then display it. It is quite powerful [^1] and can be used with a SQL-adjacent syntax or a JavaScript-like scripting language.

I don't want anything complicated [^2] and for the moment I am going to limit myself to a small table that I can view and perhaps a chart. There are, as you would assume, quite complex tracking and data analysis plugins that you can add to Obsidian. Some of them almost seem as if they should [come with a diagnosis for OCD](https://github.com/pyrochlore/obsidian-tracker). 

I spent most of the yesterday fussing with the Dataview and its DataviewJS language to try to get it to display the table in the way I wanted. Obsidian reminds me, and not in a good way, of using Flash when it was just starting to get popular. There are no debugging tools [^3] and the errors that you do get from Obsidian [^4] are often obscure and unhelpful [^5]. I took a break from it and then this morning managed to get Dataview do what I want. The answer was, as it often is, was to do something simpler.

## What is a mood?

After getting the table working, I started thinking about how to actually measure a mood in a meaningful fashion. Currently I have three fields for morning, afternoon and evening that I use to enter a value from 1 to 10. The idea being that 1 is very, very bad and 10 is very, very good. In the table I represent these values with three colours (red, orange, yellow and green). These seemed rational at first. but then I started to think about what a 1 and a 10 meant. 1 would seem to be some bleak unending despair [^6] and 10 something only obtained by an extrovert on the cusp of of a cocaine overdose [^7]. Is 9 even obtainable? Or does this say something personal about how flawed I am?  

I am currently using a quaternary display system with four values but is it better to use a ternary system? Bad, flat and meh? Since the display doesn't change the underlying data I can still update it later but it has given me pause to think not only about quantifying my moods but also how bleak they seem to be [^8]. 

### Footnotes

[^1]: It also has some of the same documentation issues that many Obsidian plugins have. It is very well written as technical documentation but it really lacks useful examples. It has also changed dramatically over time, as has Obsidian itself, and so some of the online tutorials and examples are no longer valid. 

[^2]: At least for the moment. This may change after I start to get some data and see what use I can put it to. 

[^3]: Some trenchant wit online told me to use `console.log()`. 

[^4]: So a step up from Flash where you would often just have nothing happen. 

[^5]: _Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn_ 

[^6]: _Iä! Iä! Cthulhu fhtagn!_

[^7]: Ya hai kadishtu ep r'luh-eeh Nyogtha eeh!_

[^8]: And talking about it isn't helping much.