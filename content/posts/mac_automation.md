---
title: "Mac automation options"
date: 2023-02-18T10:17:56-07:00
draft: true
tags:
    - Mac
    - Automation
    - Shortcuts
---

One of the first automation tools I encountered on the Mac was [Frontier](https://en.wikipedia.org/wiki/UserLand_Software#Frontier) by Dave Winer's Userland Software. Frontier was a mix of a scripting language and an outliner. All stuffed into something that more resembled the old Windows Registry editor than an IDE [^1]. If you managed to understand the way the software worked it was a wonderful tool but I was never able to wrap my head around it. 

> image from http://www.fredshack.com/docs/userland.html

Apple released [AppleScript](https://en.wikipedia.org/wiki/AppleScript) soon after Frontier was released and I was also never really able to wrap my head around it either. AppleScript uses a natural language model for the syntax. This is an interesting and lofty goal but in my experience it just meant that the AppleScript compiler's idea of what natural was didn't match yours. AppleScript was the "democracy" of Apple automation in that it was not very good but, at least, better than the alternatives. 

Apple continued to work on AppleScript and in 2005 they released [Automator](https://en.wikipedia.org/wiki/Automator_(macOS)). Automator was, for me at least, a far more usable tool. You created a workflow from visual building blocks and those blocks had distinct options available to them that meant that you didn't need to fuss around to find the correct "natural" syntax for a command. Additionally, if you wanted to, you could also run bash scripts, AppleScript and even Python in a workflow to hand more complicated processing.

I used Automator quite a bit as it had two benefits that AppleScript didn't provide. It was simple to create small automation tasks with it and it was easier to use with multiple applications. Applications exposed parts of their functionality as actions and you could link them with other actions to create more complicated workflows. 

## How are you now?

Automator has been largely supplanted by [Shortcuts](https://en.wikipedia.org/wiki/Shortcuts_(app)) (née Workflow) which not only expanded on the visual metaphor that Automator used but also, and most importantly, allowed automation on iOS. Automator still works but Apple, and most developers, aren't expanding the actions available to it. 

Shortcuts has heralded a bit of a renaissance in regards to automation options available to Mac users. Many of these interconnect or use Shortcuts as a bridge and where the Mac, and Mac OS, had few options for creating automated workflows we now have an abundance. I'd like to go over some of them and talk about their features and usability. Please do note that some of these I have not had much experience with given how many applications there are now available.

## AppleScript

## Shell scripts

## Automator

## Shortcuts

## Keyboard Maestro

[Keyboard Maestro](https://www.keyboardmaestro.com/main/) has been available for the Mac since 2002 and has been developed by Stairways Software since 2004. My initial experience with the app was to use it to automate filling out forms on websites. It has expanded since then and now has [100s of built-in actions](https://wiki.keyboardmaestro.com/Actions) that you can use to build macros [^2]. You can check out [a list of the features](https://wiki.keyboardmaestro.com/manual/Features) for the current version.

The UI for Keyboard Maestro is a bit dated but it is a very powerful application that build workflows or even simple actions that can be [triggered in a staggering number of ways](https://wiki.keyboardmaestro.com/manual/Features#Triggers). It even has a MIDI trigger. You can also group macros by application or category and then have them present via the menu bar and have them available to multiple apps or even when there is a window open that has a particular title or pattern in the title.

The app has been in development for twenty years and it contains an impressive number of options. I have never felt overwhelmed when using the app as it is easy to just ignore the options that you don't want. Keyboard Maestro also has Shortcuts and Automator support so you can use either of those apps to trigger macros . 

Keyboard Maestro also lets you create, and access, named clipboards so you can save data, similar to using [Data Jar](https://datajar.app), and then access it later in a macro. 

## Alfred Workflows

## Omni Automations

You are probably not aware of it since it only works with applications from the [Omni Group](https://www.omnigroup.com) [^4] but, [Omni Automations](https://omni-automation.com) is a system that uses the [Core JavaScript engine](https://developer.apple.com/documentation/javascriptcore) from Webkit to let you create workflows in the many Omni apps [^3]. 

Omni Automation has [Shortcuts support](https://omni-automation.com/shortcuts/index.html) which is perhaps a simpler way to get system-level access to the workflows you create. It also, since all of the Omni apps are on iOS, lets you create a fully cross-platform automation system. The system also lets you create plugins to let you distribute workflows to your entire team. 

It is a very impressive system but obviously not of general use. The Omni Automation website has quite a few videos and resources [including tutorials](https://omni-automation.com/omnifocus/tutorial/index.html) [^5] to walk you through writing Javascript workflows. 

## Hazel

Now you would be forgiven if you viewed [Hazel](https://www.noodlesoft.com) as just an app to help move files around. Every rule you create in Hazel has a workflow that you create to process the files or folders that you are acting upon. Those workflows can also activate actions in Automator and Shortcuts and also run AppleScripts, JavaScript or shell scripts.

Hazel isn't accessible from Shortcuts or Automator but it does have a small suite of AppleScript commands that you can use to run rules on folders. Hazel looks at automation as something that it can reach out to use to modify the files and folders that you are processing via its rules. I couldn't find a way to rename files via a regex in Hazel so I wrote a Shortcut to do it. As an added bonus, that action is also now available in the Finder if I need to ever use it. 

Since Hazel is designed to watch folders it can be integrated into other workflows just by moving or creating files in a directory. It is simpler to build a rule based system to process files in Hazel so if you have a workflow that interacts with a lot of files handing them off to Hazel is typically a better idea. 

## Raycast



## BetterTouchTool?

## Platypus

## Bunch

## Node.js

## Support apps

### Data Jar

### Logger

https://www.logger.rocks

https://www.macstories.net/reviews/logger-for-shortcuts/

### Footnotes

[^1]: I don't think that Frontier's usability or popularity was helped any by Dave Winer. You could politely refer to him as 'gruff' and I don't think he ever took a suggestion from a user as anything other than a personal slight. He also suffered from knowing how smart he was and thinking that it made his opinions more relevant than others.  

[^2]: Keyboard Maestro refers to workflows or actions as macros and that is the nomenclature I will use as well while talking about it. 

[^3]: Currently it supports OmniFocus, OmniGraffle, OmniOutliner and OmniPlan. 

[^4]: Who have a wonderfully demotivation title on their website: "Tools as powerful as you".

[^5]: Credit to Omni Group for creating some of the best web-based tutorials I have seen in some time. 
