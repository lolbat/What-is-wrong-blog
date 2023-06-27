---
title: "Python cleanup"
date: 2023-05-01T11:20:35-06:00
draft: false
description:
tags:
    - Python
    - Homebrew
    - Anaconda
---

I have been doing quite a bit of reading this week about installing python, using virtual environments and packaging. Part of the reasoning for this has been that I attempted to rework my Victor project to be in a position where it could be packaged. I was attempting to write code in a manner that was more professional and closer to what might be viewed as a standard practice.

As I mentioned in [a previous post](/posts/zacweekapr27/), this didn't go as planned.

The reading I did was to try to figure out what I had done incorrectly and try to fix that. Part of the problem appears to have been the laissez faire attitude I had when initially installing python.

## Keep it simple

I did some digging into the guts of the command line and found that I had various python versions installed via Anaconda, Homebrew, the OS and via the python installer. It was not an optimal situation and I decided to try and solve the problem. Since I don't use the Anaconda version of Jupyter Notebooks any longer I uninstalled Anaconda and all of its libraries. That was just the first step. 

### No Homebrew for you

One thing I was unaware of, is that you should [not ever use the Homebrew version](https://justinmayer.com/posts/homebrew-python-is-not-for-you/) of python for development. The TL;DR is that these libraries are there for Homebrew to use for any packages that require python. They can, and will, be updated underneath you with no warning. This is the same situation as the python install in the MacOS system.

If you try to uninstall python in Homebrew you will get the following error:

```
Error: Refusing to uninstall /opt/homebrew/Cellar/python@3.11/3.11.3
because it is required by docutils, thefuck and toot, which are currently installed.
You can override this and force removal with:
  brew uninstall --ignore-dependencies python@3.11
```

You see people recommending Homebrew as a python installer quite a lot online but I think that the safest path is to not use it at all. I still use Homebrew for installing unix-like apps but all of my python installs will go through pip from now on. 

### Python.org to the rescue

I went to the Python.org site and [downloaded the most recent release](https://www.python.org/downloads/) of Python 3.11 and installed it. I then went into my .zshrc file and created an alias for the python command to that install. I then deleted all of the versions of python in Homebrew that it would let me. 

That cleaned up many of the problems I was having [^1]. My sys.path now just points to the frameworks that the Python.org installer created. No more Homebrew libraries or conda libraries. I also went through Homebrew and removed apps like pyenv and pipx that I had installed but hadn't used. 

I suspect that there are still some issues lurking in the background but at the moment I can't see any obvious problems. [^2]

### python -m

Another issue that came up frequently while I was reading is the issue of using `python -m` instead of just `python` when you are using it to invoke commands like `pip`. The reason for this is that the -m switch will use the version set as your default and not, for instance, a version set in a virtual environment or set with some other utility.

This is a tremendous piece of advice for anyone starting out and it beggars imagination as to why it isn't given to more coders as they start out using python. 

## What to do?

There are two reasons why I ended up in this situation. The obvious one is that I am, like many tech types, prone to installing and testing things before I really understand the implications. The second problem is that there is a lot of advice online that is, not bad but, not based on best practices. It's rather like someone who dances across a minefield and tells you it is safe. Perhaps they don't think the risk is real but you probably shouldn't listen to them.

There are folks that will suggest you use conda/Anaconda to manage your python environment. This is probably not a bad idea if you plan on coding in/for a data science or science environment. Or if you are just messing around on your own for fun. For other coding situations, conda is beyond the pale. Issues of whether it works or not are irrelevant as other people just don't have experience with it. 

I think that the safest place to start coding in python is with the Python.org version and immediately learn to use virtual environments.

## Virtual what now?

Python supports the ability for coders to create [virtual environments](https://www.dataquest.io/blog/a-complete-guide-to-python-virtual-environments/) and then install packages and libraries in them so they are not in the base install. So you can use a library for a project but it won't be available anywhere other than in that project. You can then install multiple versions of the same library in different projects without worrying about version incompatibilities.

It also lets you keep your base install of python very lean. Virtual environments are visible from the command line and most Python IDEs will not only show them in the editor but also let you change them if you need to. It seems like an unnecessary complication but, to my mind, it is better to learn to use them immediately instead of trying to patch them into a workflow at a later point.

There are quite a large number of tools that will help you manage them and I would suggest that until you are comfortable with them that you _ignore_ them all and just use the `venv` command in Python. Learn to walk before you try buying new Nike athletic shoes. 

## Moving forward

My python install is at a much better place now and I am beginning to relearn how to work using virtual environments more deliberately. This isn't going to mean that I won't run into some arcane and problematic command line issue in the future but, unlike our hypothetical friend blithely dancing in a field, I will know what my problem is and I will have fewer places to look for the cause. 

There are still a few python tools that I am interested in but I am going to try to play it safe and not use them until there is a compelling reason to do so. I suspect that rule will stay in place for about as long as an ice cream cone can maintain its shape in hell. 


[^1]: py still can't find the Python.org version I installed for some reason
[^2]: "ominous music intensifies"