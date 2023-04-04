---
title: "Subclassing with PyCharm"
date: 2023-04-04T08:03:09-06:00
draft: false
tags:
    - Python
    - PyCharm
    - Textual
---

Today has been a day filled with writing and rewriting code. For the last few days I have bashing around in a command line UI system called [Textual](https://github.com/textualize/textual/). It is a Python based Rapid Application Development framework that lets you build TUI applications. Terminal User Interface. If it isn't the geekiest thing I have ever done I don't know what is.

As a way to learn the system and to help me stretch my Python skills, I have been working on developing a simple CMS for Hugo called Victor [^1]. 

![Victor for Hugo](/images/victor.jpg)

Currently it opens your Hugo content directory and lets you browse through the files. It will preview the Markdown text and, eventually, it will let you view and edit the YAML header. As you may be able to see in the treeview, on the left, the [DirectoryTree](https://textual.textualize.io/widgets/directory_tree/) shows all of the files in the directory. Not just the Markdown files. So my task today was to stop it from doing that. 

## Subclasses for ten 

Textual is still in the early stages of its development and the DirectoryTree widget does not let you filter files. In order to do that I need to subclass the DirectoryTree and rewrite one of the methods so it only shows the files I want. Simple enough.

Except I don't actually know the first thing about that. To the interwebs!

I am not actually unschooled in the art of subclassing. I have done this sort of thing before but not for quite a long time and definitely not in Python. I did do a quick search and read through a few articles. I then decided to just roll up my sleeves and, like some fevered Ayn Rand protagonist, take my own destiny into my own hands and just wing it. Most people don't write the type of articles or tutorials that I find useful. Many of them tend to focus on abstract issues and concepts instead of just showing you how to write actual code. Something that has a real purpose that you can learn from. When am I going to need to write an app that has classes for dogs or cars? [^4] In lieu of finding anything totally useful I decided to just dig into the Textual source code and start writing code and making mistakes.

## PyCharm

My IDE of choice, on my Mac, is [Nova](https://nova.app/) from [Panic](https://panic.com/). It looks good. It has great features. It is Mac native. And Panic has an incredible support team. Nova is a language-agnostic IDE and in the last week or so I have seen the need for something that has more robust tools to support Python. In previous years my coding work has largely been php, css and JavaScript written in support of Wordpress sites or my own JavaScript tools. And Nova is great for that. 

When it comes to Python, Nova has mypy, Flake8 and Black support but not much else. Panic isn't a large company and it relies, to a large extent, on the community developing specific tools for Nova. I checked out VS Code. It has some interesting tools but, despite Microsoft's marketing efforts, they didn't seem to work very well. As well, VS Code is, despite your settings and theme, not very attractive. No matter what I do with the UI, what fonts I use, how I arrange the panels and tabs, it still looks as if it was designed for a race of beings with one more eyes and another set of colour receptors in their eyes [^2].

I was reading through an article listing some hints for coding in Python and noticed that one of the screenshots was taken from [PyCharm](https://www.jetbrains.com/pycharm/). PyCharm is produced by [Jet Brains](https://www.jetbrains.com/) [^3] who have a wide range of language-specific IDEs. PyCharm is available in a commercial version and a free community/educational edition. 

![PyCharm](/images/PyCharm.jpg)

The interface is, at least compared to Nova, still a bit rough but it is easier to navigate than VS Code. It also has more Python tools installed and available than VS Code. mypy was having trouble in Nova with some of the references to the libraries and classes in Textual. PyCharm had no such problem.

I have been using PyCharm for most of the day and also spending a fair amount of time tweaking it so it looks the way I want it to. I can even make the code look like it used to when I coded in Pascal [^5]. 

![Font options!](/images/fontchoice.jpg)

I have no idea if I will continue to use it, but PyCharm has already found a logical error in my code and has also made it possible for me to even begin to worry out the details of subclassing in Python.

## Back to that subclassing anecdote

My initial efforts to create a subclass were not very successful. So many errors. Screens of command line errors. It was actually quite impressive in a way. And in a more literal sense it wasn't. I am not entirely sure when "the light came on" and I figured it out but I do now have a DirectoryTree subclass that will let me filter out files that I don't want to see in my app. 

Dave on the Textual Discord pointed me in the correct direction and I wrote a new method for `load_directory()` that I will continue to plug away on today to remove everything other than Markdown files from my app. 

And then it will be on to some new features. 

I will say that I don't think that I would have been able to do this in Nova. PyCharm provides so much feedback and so much insight into the code and libraries that I am using that I was able to work my way through the issues I ran into. It seems that PyCharm, unlike VS Code, has enough useful features that I can overlook some of the the UI oddities. Mind you, PyCharm has so many settings that I suspect, over time, I will be able to tweak it to the point where it works and looks the way I want it to. 

[^1]: Valjean seemed a bit too obscure
[^2]: It is also from Microsoft. Fuck them.
[^3]: Not Jet Beans and my brain keeps trying to tell me
[^4]: JavaScript is particularly bad for this. Most of the OOP and class related docs border on being useless.
[^5]: Who knew that was a thing that I wanted.