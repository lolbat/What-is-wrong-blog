---
title: "Mac automation options"
date: 2023-02-18T10:17:56-07:00
draft: true
tags:
    - Mac
    - Automation
    - Shortcuts
    - Keyboard Maestro
    - Alfred
    - Launchbar
    - Raycast
---

One of the first automation tools I encountered on the Mac was [Frontier](https://en.wikipedia.org/wiki/UserLand_Software#Frontier) by Dave Winer's Userland Software. Frontier was a mix of a scripting language and an outliner. All stuffed into something that more resembled the old Windows Registry editor than an IDE [^1]. If you managed to understand the way the software worked it was a wonderful tool but I was never able to wrap my head around it. 

> image from http://www.fredshack.com/docs/userland.html

Apple released [AppleScript](https://en.wikipedia.org/wiki/AppleScript) soon after Frontier hit the shelves. I was also never really able to wrap my head around it either. AppleScript uses a natural language model for the syntax. This is an interesting and lofty goal but in my experience it just meant that the AppleScript compiler's idea of what natural was didn't match mine. AppleScript was the "democracy" of Apple automation in that it was not very good but, at least, better than the alternatives. 

Apple continued to work on AppleScript and in 2005 they released [Automator](https://en.wikipedia.org/wiki/Automator_(macOS)). Automator was, for me at least, a far more usable tool. You created a workflow from visual building blocks and those blocks had distinct options available to them that meant that you didn't need to fuss around to find the correct "natural" syntax for a command. Additionally, if you wanted to, you could also run bash scripts, AppleScript and even Python in a workflow to hand more complicated processing.

I used Automator quite a bit as it had two benefits that AppleScript didn't provide. It was simple to create small automation tasks with it and it was easier to use with multiple applications. Applications exposed parts of their functionality as actions and you could link them with other actions to create more complicated workflows. 

## How are you now?

Automator has been largely supplanted by [Shortcuts](https://en.wikipedia.org/wiki/Shortcuts_(app)) (née Workflow) which not only expanded on the visual metaphor that Automator used but also, and most importantly, allowed automation on iOS. Automator still works but Apple, and developers, aren't expanding the actions available to it. 

Shortcuts has heralded a bit of a renaissance [^6] in regards to automation options available to Mac users. Many of these apps interconnect or use Shortcuts as a bridge and where the Mac, and Mac OS, had few options for creating automated workflows we now have an abundance. I'd like to go over some of them and talk about their features and usability.

## Keyboard Maestro

[Keyboard Maestro](https://www.keyboardmaestro.com/main/) has been available for the Mac since 2002 and has been developed by Stairways Software since 2004. My initial experience with the app was to use it to automate filling out forms on websites. It has expanded since then and now has [100s of built-in actions](https://wiki.keyboardmaestro.com/Actions) that you can use to build macros [^2]. You can check out [a list of the features](https://wiki.keyboardmaestro.com/manual/Features) for the current version.

Keyboard Maestro stands on its own when you look at Mac automation tools. It has always been about creating and linking actions into macros that you can trigger in different ways. This has meant that it is a tools with a lot of flexibility.

The UI for Keyboard Maestro is a bit dated but it is a very powerful application that build workflows or even simple actions that can be [triggered in a staggering number of ways](https://wiki.keyboardmaestro.com/manual/Features#Triggers). It even has a MIDI trigger. You can also group macros by application or category and then have them present via the menu bar. Those macros can be made available to multiple apps or even when there is a window open that has a particular title or pattern in the title. I can't even begin to think of how that would be necessary but I am sure if I did need it that it would be a godsend. 

The app has been in development for twenty years and it contains an impressive number of options. Despite the busy interface, I have never felt overwhelmed when using the app. It is easy to ignore the options that you don't want and the UI doesn't feel intrusive. Keyboard Maestro also has Shortcuts and Automator support so you can use either of those solutions to trigger macros or use KB to send data to them. 

You can develop some truly impressive macros in Keyboard Maestro especially since the application provides most of the basics of a programming language as actions:

* Flow Control (conditionals and switch/case)
* variables
* debugger
* file actions
* notifications

I have never really dived deep into Keyboard Maestro but I have also never had a task that I wanted to automate that I couldn't use it for. Keyboard Maestro also lets you create, and access, named clipboards so you can save data, similar to using [Data Jar](https://datajar.app), and then access it later in a macro. Those named clipboards continue past the execution of a macro which provides macro writers with some interesting possibilities.

Keyboard Maestro's primary role is to allow you to build automation workflows so it makes sense that it would have such a bulk of options and functionality but there are some Mac apps that are branching out into offering more automations options. 

## Application launchers

Application launchers have been been helping Mac users navigate their apps and documents even before there was an OS X. Apps like [DragStrip](http://www.math.buffalo.edu/~sww/computer-stuff/DragStrip-review.html), [OneClick](http://www.designwrite.com/oneclick/guide/b.html), [Finder Palette](https://www.macintoshrepository.org/40415-finder-palette) and others provided a way for early Mac users to quickly access apps, files and folders.

As Macs got faster, and hard drives got much larger, application launchers evolved from their simple origins and added searching. predictive lookups and the ability to link apps and files into simple commands. Many of those launchers are now able to let you write more complicated actions and then trigger them on their own or by providing a target using the app's search functions. 

### LaunchBar

[LaunchBar](https://www.obdev.at/products/launchbar/index.html) is one of many applications launchers for the Mac that have expanded their offerings to allow users to automate parts of, or all of, their workflow. LaunchBar predates OS X and was originally released for the NeXT computers in 1996. The first version for the Mac was LaunchBar 3 which was released in 2001.

LaunchBar has [the standard features](https://www.obdev.at/products/launchbar/features.html) that you would expect to find in an application launcher - opening apps and files, finding contacts, clipboard tools, file operations and linking all of the above to each other.  It then makes it possible to find a contact and create an email message to them and then look for a file a attach it to the new message. 

LaunchBar also allows you to get additional file information and peek into package contents as well as system resources. That "x-ray vision" feature also lets it drill down into individual settings in the Systems Settings app as well as show recent files from individual applications. Or get a list of all system Services. 

LauncherBar has [recently added the ability](https://www.obdev.at/products/launchbar/actions.html) to create actions and use them in the app. LaunchBar has a separate Action Editor that is used to create actions. The Action Editor doesn't have its own editor but opens scripts in your chosen IDE to let you edit them there. The Action Editor's primary roll is letting you define the action, set the scripts that will get used when LaunchBar calls the action and also to package files with the action. LaunchBar even allows you to code sign your actions. 

The presumed language in which you write actions is JavaScript but the Action Editor will also run scripts written in Ruby, PHP, Python, Swift, AppleScript and even accept Automator Actions. The application provides some additional JavaScript functions and environment variables to use when writing JavaScript actions but these aren't available when using other languages. 

### Raycast

[Raycast](https://www.raycast.com) is a newer entry into the world of Mac application launchers. It provides many of the features you would expect but it doesn't default to using search functions to find files. It will, as of this writing, only lookup and suggest apps unless you select a File Search function. Raycast also uses the Cmd K accelerator as a way to list further commands that can be used to act upon the file or item you have located.

On its own, Raycast doesn't provide as much as you would expect from an application launcher. Most of the features you will want are available from the Raycast Store [^8] as downloadable extensions. 

Raycast has an extensive API that you can use to write extensions [^7]. The API uses Node.js, Typescript and React to write code and the UI, if needed, for your extension. The development environment requires an account on the Raycast developer site and presumes that you are using VS Code as an iDE. I suspect that it will work with other IDEs as well but there are no tools provided for them.




#### A note about business models

### Alfred 



## Automating application launchers

### Launchbar Actions

### Alfred Workflows

Alfred began life in 2010 as a tool to [search for files and do web searches](https://lifehacker.com/behind-the-app-the-story-of-alfred-1624424125). 

### Raycast actions

## Support apps

### Hazel

Now you would be forgiven if you viewed [Hazel](https://www.noodlesoft.com) as just an app to help move files around. Every rule you create in Hazel has a workflow that you create to process the files or folders that you are acting upon. Those workflows can also activate actions in Automator and Shortcuts and also run AppleScripts, JavaScript or shell scripts.

Hazel isn't accessible from Shortcuts or Automator but it does have a small suite of AppleScript commands that you can use to run rules on folders. Hazel looks at automation as something that it can reach out to use to modify the files and folders that you are processing via its rules. I couldn't find a way to rename files via a regex in Hazel so I wrote a Shortcut to do it. As an added bonus, that action is also now available in the Finder if I need to ever use it. 

Since Hazel is designed to watch folders it can be integrated into other workflows just by moving or creating files in a directory. It is simpler to build a rule based system to process files in Hazel so if you have a workflow that interacts with a lot of files handing them off to Hazel could be better idea. 

### Data Jar

### Logger

https://www.logger.rocks

https://www.macstories.net/reviews/logger-for-shortcuts/


_We can't call `node` directly as GUI apps on macOS doesn't inherit the $PATH._

### Footnotes

[^1]: I don't think that Frontier's usability or popularity was helped any by Dave Winer. You could politely refer to him as 'gruff' and I don't think he ever took a suggestion from a user as anything other than a personal slight. He also suffered from knowing how smart he was and thinking that it made his opinions more relevant than others.

[^2]: Keyboard Maestro refers to workflows or actions as macros and that is the nomenclature I will use as well while talking about it. 

[^3]: Currently it supports OmniFocus, OmniGraffle, OmniOutliner and OmniPlan. 

[^4]: Who have a wonderfully demotivation title on their website: "Tools as powerful as you".

[^5]: Credit to Omni Group for creating some of the best web-based tutorials I have seen in some time. 

[^6]: It is a bittersweet renaissance since part of the excitement around automation on the Mac at the moment is based largely on how much Apple ignored the category for so long. Without Shortcuts/Workflow I suspect that we would still be using Automator.

[^7]: Raycast calls their actions "extensions" and I will use that nomenclature while discussing the Raycast app. 

[^8]: And yes, that name should worry you. 