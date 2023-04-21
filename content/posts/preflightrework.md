---
title: "Preflight rework"
date: 2023-04-21T15:33:50-06:00
draft: false
description:
tags:
    - python
    - Hugo
    - Victor
---

I did a fair bit of work on my preflight app/command last night. Primarily it was to add an argument to the command line to allow the user to add config data to the code so it knows where the user's Hugo installation is. 

I was reading through the Python Docs for argparse options as I was trying to make sure that the code would display help even if it was missing configuration data. I had it check to see if the config data had been set and that was stopping the app fron displaying help. The argparse page [has a short tutorial](https://docs.python.org/3/howto/argparse.html#concepts) that made me take a look at how I wanted the preflight code to work and respond to the user.

The end result is that it looks as if I will roll all of the code into the [Victor app](https://whatiswrongwithyourdog.netlify.app/tags/victor/) I was working on instead of making it a stand-alone command. I wanted to have too many options in the preflight command and it will be easier, for the user at least, of those options are all available in an app that is easier to interact with. 

I have learned quite a bit in building the preflight code and I am hoping to move that knowledge to Victor and make it a better app as well as a more useful tool. 



