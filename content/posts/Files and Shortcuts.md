---
title: "Files and Shortcuts"
date: 2023-02-19T08:35:42-07:00
draft: false
tags:
    - Shortcuts
    - MacOS
    - NameChanger
---

The last two weeks I have been working, on and off, to solve a problem I had with running a Shortcut in [Hazel](https://www.noodlesoft.com). I have quite a few rules in Hazel to process files as I download them. One of them _attempted_ to rename a file and then move it. The files had tags in the filename that were separated by brackets. Items like the year of publication, author etc. The number of these tags isn't always the same and so I needed a regular expression to snip all of them from the filename. I already had a Shortcut to rename the files in the Finder which was based on a rule I had in [NameChanger](https://mrrsoftware.com/namechanger/) [^1].

So I knew the regular expression worked and I knew that the Shortcut worked. Putting it in Hazel did not though. 

I asked on the [Noodlesoft support forum](https://www.noodlesoft.com/forums/) and wasn't able to find an answer there [^2] and spent more time than I would like to admit searching for an answer. 

## The problem

Shortcuts uses what is called a [Content Graph Engine](https://support.apple.com/en-ca/guide/shortcuts/apd4618db957/ios). This system converts the inputs to a Shortcut into something that [resembles a data expression](https://talk.automators.fm/uploads/default/optimized/2X/3/392b6f35bfbd005a931c8290bcc59178b42e1c67_2_437x500.jpeg) of the RDF standard. This is necessary because Shortcuts lets you access multiple different types of data from an input depending on what it is. If, for example, you send a Shortcut a file you can access the name, file path, last modified date and so on.

One important feature of this Content Graph is that it works on a "virtual" version of the input to ensure that you don't accidentally destroy the item you are working on and, I am guessing, to allow Shortcuts to sandbox the item you access. 

So when you send a Shortcut a file and ask it to rename it, Shortcuts will in fact rename a copy of that file.

## What now?

When Hazel ran a rule on a file in my Downloads folder and I wanted to rename it, Shortcuts created a copy of the file [^3] and put it into a temp directory.

`/var/folders/q6/jfbsnv7n5wjc9vhxj0_6l_qc0000gn/T/`

So all of the actions in my Shortcut were made to this copy and **not** the original file that Hazel was working on. So when Hazel moved my file it was untouched. And, as an added bonus, since I didn't do anything with the copy it sat in the directory and took up space. 

I was only able to figure this out by using [Logger](https://www.logger.rocks) to log the details of the original file and the one that I had renamed. Once I knew that there were two files I was able to search through the [Automators forum](https://talk.automators.fm) and find a few posts by [Stephen Millard](https://talk.automators.fm/u/sylumer/summary) [^4] that explained the process Shortcuts used. 

## A solution

All of this let me fix the problem by rewriting the Shortcut to rename the file and then move it to the folder I wanted. Hazel then deletes the original. Its almost like using the transporter in Star Trek. The important thing is that I learned a very critical lesson about how Shortcuts work and what I need to do when I have an external application work with a Shortcut. 

![A screenshot of a Shortcut on MacOS. The Shortcut renames a file using a regular expression and then moves it. ](/images/shortcut-rename.jpeg)

### Footnotes

[^1]: NameChanger is a great utility. It lets you use regular expressions and you can save renaming patterns so that you can use them over and over again. 

[^2]: No slight on Noodlesoft or the forum. It is a bizarre problem. 

[^3]: Despite it being called "virtualization" it does in fact make a physical copy. 

[^4]: Also check out his [website](https://www.thoughtasylum.com/). He is has a wealth of interesting content about Shortcuts and automation.  