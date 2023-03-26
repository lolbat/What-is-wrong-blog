---
title: "Python for Lingo programmers"
date: 2023-03-24T17:10:18-06:00
draft: true
tags:
    - Python
    - Lingo
    - Anaconda
    - Jupyter
    - Spyder
---

A long time ago, I used to develop projects using [Macromedia/Adobe Director](https://en.wikipedia.org/wiki/Adobe_Director). I was primarily a programmer and so I used to spend a lot of time writing code in [Lingo](https://en.wikipedia.org/wiki/Lingo_(programming_language)). Lingo was a a language less concerned with formalism than it was in flexibility. You could coerce any variable type into another variable type and, as a result, it was a lot of fun to use. It was the first language I programmed objects with and it formed my ideas of what a good development environment was. 

One of the true joys of using Lingo in Director was the Message Window.

![The Message Window](images/pythonLingo/messagewindow.jpg)

The Message Window was one of the first coding playgrounds that I encountered [^1] and it made it simple to test out commands and learn new ways of interacting with elements in Director. You could use it while your project was running to try to debug it. And it even acted as a pseudo console since you could run code in your project from it. It was like someone had opened the side of a rocket engine and let you play around inside it. You never forget your first love and I have never really forgotten just how exciting it was to work in Lingo and in a language that was so intimately wired into the development application itself. 

## After Lingo

The Message Window is something that I was always missing when I tried to learn other languages or environments. Php didn't have anything like it [^2] and ColdFusion had a less interactive version of it. JavaScript has [some tools](https://runjs.app/) that let you test out code and various combinations of commands and no matter their power you are, unfortunately, still using outside of the environment that you are developing for [^3].

Since those heady days as a multimedia developer, I have written code in ActionScript, php, ColdFusion, JavaScript, Visual Basic and whatever language FileMaker uses. Of them all I have really only ever liked ColdFusion and CFML. I have been using JavaScript for a few years now and, while there are many things that I can do with it, I have never really liked it. JavaScript isn't fun. And the code doesn't really look good. And let's not even begin to talk about class files.

## Why Python?

Last week I was working on [an Alfred Workflow for Hugo](https://whatiswrongwithyourdog.netlify.app/posts/hugo-workflow/). Part of the Workflow would require me to build a JSON file detailing all of the files I wanted to display. I have done this sort of thing before using Node and it is quite simple to do. Alfred can run any number of languages in its Run Script object but the end user will need to have the necessary libraries installed. So I could write it in Node but then anyone wanting to use the script would have to either have Node installed or install it themselves. 

After some thinking, I decided that it might be easier to write the code in Python. I didn't know how to code with Python but I thought that it would be a good time to try and learn. 

## Where to start

For those of you who might be interested in learning Python I would like to offer some suggestions based on my own recent experience. To learn a new language you need two things. An application that you can use to edit and run your code as well as a way to find out how the language works. 

### Getting Python

Python is, like quite a lot of open source software, very easy to mess up if you don't know what you are doing. If you just want to learn Python and not have to mess around with versions, libraries and other command line arcana then I would recommend downloading [Anaconda](https://www.anaconda.com/). It bills itself as a tool for data scientists but just ignore that. What it is, for eager Python learners, is a self-contained Python environment that you can use without having to worry about messing up the version of Python installed on your OS.  The site has pricing information but that is for offline storage and the ability to run your code on servers. If you just want to learn Python you won't need to pay for any subscriptions or applications.

![Anaconda](images/pythonLingo/anacondaNavigator.jpg)

The two prime applications that you will want to look at are the [Spyder IDE](https://www.spyder-ide.org/) and [Jupyter Notebooks](https://jupyter.org/). Spyder is a very capable IDE that has many useful functions, including a variable inspector, and Jupyter Notebooks let you create and save code "notebooks" that you can use to explore the Python language. You can even write functions in it and then call them from inside the same notebook. Its like a more formal version of the Message Window.

Both of these applications are available as individual downloads but I would recommend using them via Anaconda until you get some familiarity with the workings of the Python library system. Another benefit is that Mac users can avoid the issues with Apple shipping an older version of Python with OS X. Anaconda runs the most current release of Python and can do so without having problems result because of Apple's lack of desire in keeping open source languages on their OS up to date.

One other benefit of using Anaconda is that it comes with an environment editor. This not only shows you all of the libraries that are loaded but lets you create new environments that have libraries disabled or newer/older versions enabled to work on legacy projects.

![The environment](images/pythonLingo/AnacondaEnviro.jpg)

### Writing code

My own exploration in Python began with starting to read [a whirlwind tour of python](https://jakevdp.github.io/WhirlwindTourOfPython/index.html), by Jake VanderPlas, online with my browser and a Jupyter Notebook splitting the screen. And if you are using Jupyter you can go to the [Github repository for the book](https://github.com/jakevdp/WhirlwindTourOfPython) and download a Notebook for each chapter. Or you can use the [online Notebook viewer](https://nbviewer.org/github/jakevdp/WhirlwindTourOfPython/blob/master/Index.ipynb) to read through them.  There are quite a few sites online that have this type of material but I have found Jake's to be the best written [^4]. 

Once you have read through, and worked through, the book you can open Spyder and try your hand at writing some code. 

![The Spyder IDE](images/pythonLingo/Spyder.jpg)

Spyder is never going to win any awards for its UI [^5] and I suspect that if you continue to program in Python you will find your own favourite IDE to use. Spyder is a good IDE to use to learn Python because of the [Variable Explorer](https://docs.spyder-ide.org/current/panes/variableexplorer.html) and the [Interactive Console](https://docs.spyder-ide.org/current/panes/ipythonconsole.html).

[Variable Inspector](images/pythonLingo/VariableInspector.jpg)

I used Spyder to write the Python code for my Alfred Workflow and between the Variable Explorer, Console and autocompletion it was quite easy. Spyder also includes code listing that will help you to not keep unused variables in your code or libraries that you end up using.

## Learn the command line

I don't think that it is possible to work with Python and not have to access the command line. I already use iTerm much more than I have in the last few years but since starting to learn Python I have been spending a lot more time in it. The two main Python package managers are both command line apps. Most libraries exist in directories most easily accessed via the command line and many python development tools are also based on the command line. 

The terminal will become your friend. 

## The appeal of Python

When I first started out to learn Python I imagined that it would be the same as learning JavaScript or php. I was quite startled to find out that it was not only much easier to learn the basics of the language but it was also much more fun.

And the code looks amazing[^6].

![Pretty!](images/pythonLingo/prettyCode.jpg)

I was searching online one day trying to find the reason why Python uses o indexing in lists and [I found this quote](https://www.reddit.com/r/Python/comments/1p2za1/guido_van_rossum_why_python_uses_0based_indexing/). 

> _But how does the index:length convention work out for other use cases? TBH this is where my memory gets fuzzy, but I think I was swayed by the elegance of half-open intervals. Especially the invariant that when two slices are adjacent, the first slice's end index is the second slice's start index is just too beautiful to ignore. For example, suppose you split a string into three parts at indices i and j -- the parts would be a[:i], a[i:j], and a[j:]._

> _So that's why Python uses 0-based indexing._

I am always going to be on the side of the person who wants to do something because it is elegant and beautiful. I strive for this in my own code. It is one of the reasons why I dislike [the ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) in JavaScript so much. Code has a job that it needs to do but there is no reason why you can't, as a programmer, try to make elegant code as well. 

And it is probably subjective, but Python seems to make a lot of sense. The code I wrote for my Alfred Workflow ran correctly the first time and also ran correctly when I ported the code over to Alfred and edited it to use the environment variables there. I have, since then, use Python is several other Workflows and just started typing code without thinking about the structure. 

## Continuing on

I am still working through some simple coding projects and attempting to write some small automation tasks in Python. I have picked up the [JupyterLab desktop application](https://github.com/jupyterlab/jupyterlab-desktop), even though it is in Electron, to use to create and work with Notebooks. I find it a bit quicker. I have also installed [bPython](https://bpython-interpreter.org/) on my Mac. It is a command line Python interpreter that has a slew of useful features including a history of the commands you have previously used as well as variables.

Despite the fatuous title of this post, I have found that part of the appeal of Python has been how easy it is to explore the language and this does harken back to my time using Lingo. I found that I would often open up Director to write a quick piece of code to solve a problem or test out an idea. I missed being able to do that and the tools that I did have access to, such as shell scripts or AppleScript, seemed inscrutable compared to using Lingo. 

Python feels like using Lingo. If I have an idea I can write a quick bit of code in one of the many available tools. If it works I can write a full script and run it on the command line. The syntax makes sense. The code looks good and it also feels as if trying to write elegant code isn't something that other Python programmers don't find an irrelevance. 

I have made a new Workflow in Alfred, that I will be writing about soon, that uses Python [^7] and I don't really see that I am ever going to be stopping. It feels like I am home. 

## Footnotes

[^1]: It probably wasn't the first but it was certainly one of the earliest.

[^2]: Php is mostly, IMO, defined by what it is missing.

[^3]: I am aware of sites like CodePen but I really don't like web-based tools. I typically don't like them and don't really use them. The fact that most require you to sign up for an account is also another downside.

[^4]: Unlike the Python docs. Don't get me started on them.

[^5]: I am not sure about Windows but it looks much better under Linux. Apple really doesn't care enough about Open Source to make sure that QT and similar libraries look good on the Mac.

[^6]: I know that almost any code looks better in [Nova](https://nova.app/) but take a look at how pretty that code is. 

[^7]: To actually run a different piece of Python code.