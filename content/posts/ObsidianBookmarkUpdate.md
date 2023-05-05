---
title: "Obsidian Bookmark Workflow update"
date: 2023-05-04T14:19:53-06:00
draft: true
description: An update on the Obsidian Bookmark Workflow for Alfred
tags:
    - Obsidian
    - Alfred
    - Python
    - Advanced URI plugin
---

I have been working on updating the Alfred Workflow to [save bookmarks in Obsidian](/posts/createobsidianlink/). There were a few issues with the code that generated the list of Markdown pages from the selected Obsidian Vault that were fixed. Mainly I misread the `rglob()` function and assumed that it only did files in subdirectories. It doesn't. 

The main change to the Workflow is that it now uses the frontmost application and then branches from there to determine how to get the title and URL from the browser. Previously it assumed that you were using Safari but it was simple enough to rework the workflow to allow for many possible browsers. 

Alfred has a series of Automation Tasks that let you get data from Chromium and Webkit browsers. You specific the browser and Alfred goes and gets the data for you. It does mean that there are quite a few Automation Tasks that get connected together to allow for this.

![Ouch!](/images/browserchoice.jpg)

Needless to say it doesn't work for Firefox as Firefox has no scripting support of any kind.

Originally I had some code that would determine the default browser and then call to it to get the data. This used the `duti` command to get the default app for `.html` files. So in my case it is `com.Apple.Safari`. I had a small Python snippet to get the last word in the bundleID and then a conditional switch to branch to the correct Automation Task. I tested it on quite a few browsers locally and it worked. I was even going to add support for [Velja](https://sindresorhus.com/velja). 

It was pointed out, on the Alfred forum, that there are many reasons why a browser wouldn't be the registered app for `.html` files. I also thought that there were probably more people that might be running more than one browser leaving no real reason to limit where the Workflow was getting the data from.

It was also mentioned that the Workflow could run without the Keyword Trigger I was using but I tried it and put it back in. The Workflow runs a bit better, to my mind, with the Keyword Trigger giving the user some feedback about the Workflow. The Script Filter then provides the user with more specific feedback making the process seem more instructive.

The updated version is [now on Github](https://github.com/lolbat/Alfred-Workflow-Create-Obsidian-Link) if you want to give it a try. There is [a thread on the Alfred Forum](https://www.alfredforum.com/topic/20373-save-obsidian-bookmark/#comment-105426) if you find a bug or want to suggest a new feature or improvement. 



