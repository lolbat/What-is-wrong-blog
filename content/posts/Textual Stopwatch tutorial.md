---
title: "Textual Stopwatch Tutorial"
date: 2023-03-26T07:46:38-06:00
draft: true
tags:
    - textual
    - python
---

I stopped trying to figure out what it is that causes my ADHD brain to latch on to projects or concepts. Instead I like to go with the flow and just enjoy the ride.

Currently, my brain has found delight and joy not only in Python but also in a Python library for building command line UIs called [Textual](https://textual.textualize.io/).  

From the website:
> Textual is a Rapid Application Development framework for Python, built by Textualize.io.

> Build sophisticated user interfaces with a simple Python API. Run your apps in the terminal and (coming soon) a web browser.

The Textual website has a very good tutorial that shows you how to ![build a stopwatch application](https://textual.textualize.io/tutorial/) that runs in your terminal. It is one of the better tutorials that I have seen in the past few years but I thought that it had a few areas that could benefit from some additional explanation. So think of this blog post as a series of annotations of that tutorial for those folks who may not be as advanced Python programmers or who are just curious about Textual.

You can work through the tutorial on your own or you can download the code from the [Textual repository](https://github.com/Textualize/textual). I have also posted my modified code [in a repository](https://github.com/lolbat/textual-tutorial-article). 

## Why Textual?

I am not an accomplished programmer by any means. And I am also just starting to learn Python. What Textual provides [^1] is the ability to create usable apps without having to also learn a very complicated API. Building workable tools is, for me, the best part of learning a new language. If you can take what you learn and create something that helps you in your day-to-day workflow that helps keep you motivated. I like the idea of Textual but I also think that it will be a very good way to start to create my own Python tools and help me to continue to learn. 

So with that, lets start to look through some of the aspects of the stopwatch tutorial. 

## imports

The tutorial describes some of the classes that are imported for the application but not all of them.

![Tutorial imports](imports.jpg)

The ComposeResult type is an iterable list of Widgets. The App class in Textual returns a list of all of the Widgets declared in in the compose() method as a ComposeResult type. Since it is declared as iterable you can use iterators on it to walk through all of the Widgets in the app. The Textual code uses type hinting and so `ComposeResult` is imported into the file but if you were not using type hinting you wouldn't need to do this. ComposeResult isn't a class but is there so any tools like [mypy](https://www.mypy-lang.org/) know what variable(s) a function is meant to return. 

If you are not familiar with it, the monotonic time in Python is a timer based on the internal system count of the seconds since the computer was started. This time doesn't change based on time zones or daylight savings. This was a new concept to me. You may see it described as a "time system that doesn't go backwards" which isn't terribly helpful. Monotonic time will always be increasing so even if the time changes on the am/pm time in your OS, the monotonic time won't.

The static class is used in Textual for two purposes. It serves as the basis for making your own Widgets as you can see in the TimeDisplay class. It also is used internally by Textual as a placeholder when you load a new Widget into the app. In the tutorial `static` is the base class of the `TimeDisplay` class. It contains the default properties and events for a Widget but no additional code.

## Classes

The tutorial contains three classes - one for the App, one for the Stopwatch widget and a third for the TimeDisplay widget. 

### StopwatchApp



## Footnotes

[^1]: Other than the cool factor of terminal apps with a UI.
