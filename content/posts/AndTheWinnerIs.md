---
title: "And the Winner is..."
date: 2023-06-01T16:35:37-06:00
draft: true
description: "Which Python IDE have I decided to use? I know you have been eagerly awaiting the result of my testing. Well wait no more!"
images:
    - og/
tags:
    - Python
    - PyCharm
    - VS Code
    - Textual
---

For the last month or so, I have been hopping between [VS Code](https://code.visualstudio.com/) and [PyCharm](https://blog.jetbrains.com/pycharm/) as I work on my [Textual](https://textual.textualize.io/) app. The idea was that since it is often difficult to categorise what you like or don't like about an app that I would use them both and just see which one I actually looked forward to using. 

## VS Code

The main benefit of VS Code is that it has a larger community of developers creating plugins for the app. There was a [ruff](https://github.com/charliermarsh/ruff) plugin for VS Code well before there was one for PyCharm [^1]. There is also a larger number of plugins available for it. That is a double-edged sword at times as it can be a bit of an issue determining what is the best plugin available from a series that is available. 

VS Code has a settings panel but there are a large number of settings that require you to edit a json file to set them. And if there are in a json file (or more often need to be added to it) then it is difficult to tell that the setting is available. 

VS Code also has a series of seemingly vim-inspired keyboard accelerators that require two keys to be hit in succession. Hitting Cmd-K and then Cmd-T to open the Theme Settings seems odd. Especially when it can be selected from the ubiquitous command panel. 

I have two main objections to VS Code. The first is that everything in it either has too much contrast or too little contrast. I am not sure if this is a side effect of building a complex UI inside a browser or just the style that Microsoft uses when defining the elements in the app. You can apply different themes but none of them seem to reach a happy medium that makes my eyes happy. 

Secondly, VS Code has a habit of enabling features for me that I didn't ask for. I did a git commit of a project and suddenly the git tools (which had been disabled) were re-enabled and my file display was littered with  coloured lines and blocks. As well, the colours of the filenames in the tabs changed. This was also something that I had disabled [^2]. 

## PyCharm

PyCharm looks good and has enough contrast and whitespace in the UI that it isn't difficult to look at or use for extended periods of time. It also is much easier for me to set up the IDE so that it has the two-tone look that I like. 

 I think that PyCharm has a less active community of plugin developers but it does seem to get the required tools and 


[^1]: Both IDEs currently have one
[^2]: Also, fuck Microsoft and fuck Electron.