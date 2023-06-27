---
title: "The week in Zac for April 27, 2023"
date: 2023-04-27T09:08:50-06:00
draft: false
description:
tags:
    - python
    - Textual
    - Victor
    - PyCharm
    - VS Code
---

So it has been a busy week for me. While I did a lot of coding and a lot of testing I am not much further along in my project. It is a long story. 

## Coding properly

When I first started writing my Hugo CMS in Textual I didn't structure the project in a way that would make it easy to distribute it. I had [^1] a python file titled `victor.py` and that was how you ran the application. There are many reasons why this isn't a good idea and while I am not currently planning on packaging the code and distributing it, I might want to do this in the future and so it seemed as if it might be a good idea to do so. 

Before I go any further, I just want to make it clear that _any_ issues I describe below are my own fault and should not be taken as a critique of the apps or packages. 

I decided to install [poetry](https://python-poetry.org/) [^2] and made a copy of my codebase and ran poetry to create a new project using the existing directory. This is actually a very nice feature of poetry. I also watched [a very good video](https://www.youtube.com/watch?v=v6tALyc4C10) on YouTube [^3] about using the `pyproject.toml` file that many packaging tools use today. Highly recommended. 

Despite all of that, I couldn't really get my newly minted module to work correctly on my system. I could sorta get it to run using the `python` command but running it using `textual run` was a no-go. And then it actually stopped working with any run command. 

Part of the issue in Textual has been solved with the current release. I did think it was an odd problem since the default python interpreter would run the module. The rest of it is on me and I will revisit this issue once I have an initial version of Victor ready to go. Even if I don't distribute it, installing it locally will make it a lot easier to use. 

This is an important skill to have and so I will be revisiting the issue again once I am not in the midst of trying to code a project [^4]. 

## IDEs

I have been hopping between PyCharm CE and VS Code for the last few days. In general I find PyCharm to be more productive and easier to work with. I also think that the code linting in PyCharm is better than VS Code. The only reason I have been even testing VS Code out is that it has plugins that make it quite easy to make adjustments to the colours on the UI. I tend to want a code editor that is in a light colour but I actually prefer a darker colour for the rest of the UI. I appear to be alone in this, at least in terms of PyCharm, as there aren't any themes that I could find that have this feature.

![What I want](/images/whatIwant.jpg)

There also aren't any plugins for PyCharm to let you easily do this. You can download the free IntelliJ CE edition and use it to create a theme plugin which is what I am in the process of doing.

Anything to stop me using Microsoft products. 

## Externalise everything

As I have mentioned previously, I am not a big fan of big chunks of code. I like things to be compact and to compartmentalise everything that I can into distinct class files. Even if those class files are for data storage and will never be instanced more than once. 

So my other big task today was to figure out how to do that properly and I think I have succeeded. My Textual app now has external classes for the screens that I will use, all of my own Widgets and they are all in subdirectories. 

Part of me can now relax. 

This is also an issue where PyCharm performed better than VS Code. It was able to see the directories and guide me through my attempts to import the classes in a way that VS Code couldn't. 

## A config screen

I have added an external TOML config file to Victor which I am copying to the user's config directory using [platformdirs](https://platformdirs.readthedocs.io/en/latest/). The code copies a default file and I am now in the process of creating a screen to allow the user to enter and save the data. This is the first "draft" of the screen.

![prototype config screen](/images/config.jpg)

I didn't want to have to fuss around getting to the config screen each time I wanted to edit the layout or CSS and so I made a very quick and dirty Textual app that just loads the screen for me (the screenshot above is that app in "action). The screen class is hard-coded at the moment but given the limit application of it I don't see that I will add arguments to the app to let you view any screen [^5]. 

This is also another benefit of keeping my screen classes in external files. I can reuse them easily even inside the same project.


[^1]: And now have titled it again
[^2]: Mostly because that is what the Textual devs use and it will also scaffold a project for you. 
[^3]: See how much I wanted to do the right thing? I visited YouTube.
[^4]: Probably not a good time to do this.
[^5]: And before I finished typing that sentence I thought of a better way to do it which I will implement later :-)