---
title: "Starship Adventure"
date: 2023-05-06T19:07:40-06:00
draft: false
description: A look at the issues I ran into while creating a new command line prompt using Starship
tags:
    - iTerm
    - Starship
    - zsh
    - python
---

Every once in a while [^1] I get a bit distracted by a new shiny thing and my work plans are sent into total disarray while I investigate it. This week my distraction was [Starship](https://starship.rs/), the cross-platform command line prompt editor. It is a Rust app [^2] that works with more terminal emulators than I ever knew existed. The premise is that you install Starship and then use the Starship.toml file to define the additions and tools you want to add to your command prompt. Colours, icons, the result of shell scripts. It has a wide range of options.

## Font so nice

One of the major design elements of Starship (and most similar tools) are the [Nerd Fonts](https://www.nerdfonts.com/) that are available that use the extended Unicode namespace in the font to add additional icons. These icons predate Starship and the Nerd Font project. The Powerline series of prompt customisation projects that originally started, IIANM, with [Powerline for vim](https://powerline.readthedocs.io/en/latest/overview.html) were an early use of them. You can still find [Powerline9K](https://github.com/Powerlevel9k/powerlevel9k) as well as [Powerline10K](https://github.com/romkatv/powerlevel10k). I am using the [MenloLGS font](https://github.com/romkatv/powerlevel10k#meslo-nerd-font-patched-for-powerlevel10k) from that project instead because I find that it works better with the options I wanted. If you use iTerm2 on the Mac it has built-in Powerline glyphs that it can use but it either has different encodings or doesn't have all of the icons. 

The updated and repackaged Nerd Fonts have more than 9000 additional icons in them. Finding them would be a nightmare but the Nerd Font website has [a search function](https://www.nerdfonts.com/cheat-sheet) that you can use to find icons. As is the case with many similar search engines, the Nerd Font site appears to search the name of the icon so you will sometimes have to just browse through the entire library to find what you want.

These icons are a great resource but I found them to be a bit small on my screen. They are also, since they come from different sources, of differing sizes. So how the icons look will depend on your screen resolution and pixel density. 

Here are some of the icons (being rendered by exa) on my Airbook's internal screen.

![Airbook screen](/images/starship/Airbookscreen.jpg)

And here is the same window displayed on my Acer monitor. 

![Acer pixels](/images/starship/acer.jpg)

The internal screen looks a bit better but neither of them is really crisp looking. The results you get will depend on which icons you want to use and how well they were hinted. This is all four of the Python logos from the Nerd Font collection in a row.

![Python logos](/images/starship/python.jpg)

You can improve the rendering slightly, on iTerm at least, by getting your terminal to render text and icons using thinner lines but I found that the improvement wasn't significant. My first issue with Starship was what to do about the icons and how to find something that would work in the Starship app without having to install a different font. 

Another problem with using the Nerd Fonts is that the icons and glyphs don't always line up correctly. The Powerlink10K FAQ has a section [explaining why that is the case](https://github.com/romkatv/powerlevel10k#icons-glyphs-or-powerline-symbols-dont-render) and some of the things that you can do to avoid the problem. This was one of the main issues I ran into using the Nerd Fonts. Icons would be misaligned or have a different line height from font to font. iTerm2 lets you specify a second font to use for non-ASCII but this can lead to some jarring results if the fonts don't have a similar line height. 

## SF Symbols

If you do any Apple development work you may be familiar with the [SF Symbols](https://developer.apple.com/sf-symbols/) icons that Apple has released for use in non-profit projects. There are 4400 of them and they are grouped into categories as well as being searchable through the SF Symbols app on the Mac. 

![SF Symbols icons](/images/starship/symbols.jpg)

The icon set is focused on elements that you would use in applications and consumer apps so you won't find a Rust or Agile icon. But it does have quite a few folder, directory and editing icons that are useful for putting into a prompt. 

![Some directory icons](/images/starship/SFIcons.jpg)

In this image, the Z icon and the folder icons are all from SF Symbols. The major benefit of them is twofold. They look better in a prompt and they seem to scale better than the Nerd Font icons. They also, on the Mac, don't require you to use a Nerd Font to edit your Starship.toml file.

With Nerd Font
![With](/images/starship/withNerdFont.jpg)

Without Nerd Font
![Without](/images/starship/withoutNerdFont.jpg)

## Making it pretty

I originally downloaded Starship some time ago mostly because I wanted to use the [Tokyo Night preset](https://starship.rs/presets/tokyo-night.html) that I had seen in a post on someone's blog. A few weeks ago I was doing some work trying to [get a python project to build](/posts/pythoncleanup/) and install correctly. Part of the issue I ran into is that I wanted to have some feedback in my prompt to tell me when I was in a directory that had python code and also if I was running a virtual environment. 

Most terminal emulators can show this data but I wanted some specific indicators and looked into how I could do that with Starship. And while I was at it I decided to try to see what I could do to update the colours and layout of the prompt as well. 

I decided to use the [Pastel Powerline preset](https://starship.rs/presets/pastel-powerline.html) as the basis for my new prompt. It is bright, colourful and not my usual sort of thing. I tend to like a lot of blue and while that is a calming colour to look at it isn't good on the eyes when you are working in the terminal all day [^3]. 

Since these are presets, they come with quite a few features enabled that I wouldn't need.

![Pastel](/images/starship/pastel.jpg)

So you can see the time, the git repository, the git status and the package version in that prompt. I want none of these things. If I want git status I can get that in PyCharm with much finer granularity and my phone and both monitors have the time. The preset has entries for os, username, directory, git branch, git_status, elixir, elm, golang, gradle, haskell, java, julia, nodejs, nim, rust, scala, docker_context, time and which kitchen sink Elon Musk is currently using. 

I don't need any of that and so I started ripping out the sections I didn't need and adding the ones I wanted.

## Configuration

Starship uses [TOML](https://toml.io/en/) as the format for its config files. TOML uses key/value pairs and also what it refers to as tables which are collections of key/value pairs demarcated with a header in square brackets.

```TOML
[table-1]
key1 = "some string"
key2 = 123
```

In TOML, you need to define all of the unstructured key/value pairs first. So anything not in a table needs to be declared first or the file is invalid. In Starship there are very few keys not in tables but the two most typical are the `palette` and `format` keys. 

The `palette` declares which of the colour palettes declared in the file will be used to render the prompt. The `format` key is a multiline string that determines what is in the prompt and what order the elements are in. 

You can create a Starship config file without either of them and many of the preset don't have them. This is because they use one or more of the predefined modules that Starship uses. So you can use the [`[Directory]` module](https://starship.rs/config/#directory) in a config file without having to use a `format` key to define where it occurs. Starship will figure that out for you. 

The `format` key just gives you control over which modules are used to render the prompt and also let you add styles and icons to the prompt that are always present. 

Here is the `format` key from my config file [^4].

![A format key](/images/starship/format.jpg)

The modules that are being used are references in the format with a `$` prefix. Since this is a multi-line statement it begins and ends with triple quotes and each line ends with a continuation character. The sections behind the icons are the style settings. These use the colours that I defined later in the file. Starship uses `bg:` and `fg:` to let you define the foreground and background colours and it assumes that an unlabelled style element is for the foreground. 

So in my `format` I have five icons that are used to space out the modules and then the modules for os, username, directory, a custom command, python, a line break and then a character prior to the text entry prompt. The styles and options for each module are defined in a named table later in the file.

## Modules

Each predefined module in Starship has a series of options that you can use to determine what the module displays when it is called. The [PHP module](https://starship.rs/config/#php) has a series of standard options such as format, style and symbol but also a variable to display the version of PHP running. The documentation shows the options available, what variables you can use and also what files or directories will trigger the module. For PHP it is triggered when:

* The current directory contains a composer.json file
* The current directory contains a .php-version file
* The current directory contains a .php extension

The primary difference between modules in Starship is what triggers them and what data Starship can obtain to supply as variables to use in your prompt. 

Here is part of the [python module](https://starship.rs/config/#python) code from my starship.toml file.

```TOML
version_format = '${major}.${minor}'
python_binary = ["./*venv/bin/python", "python3", "python"]
symbol = "􀣌 "
format = """
[ $symbol ](fg:darkblue bg:bluegreen)\
[$version ](fg:notwhite bg:bluegreen)\
[ $virtualenv ](fg:blueyellow bg:bluegreen)\
```

The `version_format` is an option that lets you determine what parts of the python version number are displayed. `$version` and `$virtualenv` are variables that Starship extracts from the system. You can also enclose variables in brackets to make the appearance of an item or items conditional.  

![A conditional section](/images/starship/conditional.jpg)

In this case the two coloured icons, the SF Symbol and the `$virtualenv` value will not be displayed if there is no value for `$virtualenv`.

## Custom commands

Starship also lets you create [custom commands](https://starship.rs/config/#custom-commands) that you can add to your prompt. These almost always involve writing a shell script and then telling Starship when to evaluate it as well as what conditions will trigger it. You can have the command look for certain directories, extensions or file types and even have it check for the value of environment variables. The Starship repo has a [series of custom commands](https://github.com/starship/starship/discussions/1252) that people have posted that provide a good example of the possibilities. Custom commands are defined in tables like the other modules and you provide a name that will be used to refer to the command. My custom command is `[custom.findvenv]`. 

Commands are added to the `format` string in one of two ways. You can either add `$custom` which will execute all the custom commands. You can also ave them triggered individually, in different parts of the prompt, by using the full name of the command but in braces, `{$custom.findenv}` as it needs to be evaluated. 

In my case, I wanted to have a command that would look for a  python virtual environment directory but only if there wasn't a virtual environment already activated.

```shell
[custom.findvenv]
command = """ isdir=$(find . -type d -maxdepth 1 -name "*venv"); \
    if [ "$isdir" ]; then echo " 􀒙 "; fi """
when = """ if [[ -n "$VIRTUAL_ENV" ]]; then echo"0"; fi """
style = "fg:darkblue bg:bluegreen"
shell = ['zsh']
format = '[$output]($style)'
```

The `when` option looks for the `$VIRTUAL_ENV` environment variable and if it is not present returns a 0. This tells Starship to them execute my command. The command looks for a directory, in the current directory only, that end in "venv" and if it is found it echos the "􀒙" glyph from the SF Symbol set. 

So now when I am moving into a directory with a python project the prompt will change to show me that there is a virtual environment directory available. If one is already active then it doesn't bother. 

## Define some colours

Not many of the presets that I looked at use it but Starship allows you to define multiple palettes of colours and then indicate which one to use when rendering the prompt. The palettes are all TOML tables with a set of key/value pairs that define a colour name and a hex value to use.

```
[palettes.zac]
purple = "#9A348E"
salmon = "#DA627D"
orange = "#FCA17D"
bluegreen = "#33658A"
midpurple = "#CC99CC"
darkgrey = "#212736"
darksalmon = "#A1485D"
darkblue = "#193e45"
notwhite = "#FCFCFC"
yellow = "#FFD700"
paleblue = "#86BBD8"
```

Even after decades of using them, I find hex colour values to be unreadable and so a set of colour names is much easier for me to parse. In addition, it means that you can give the colours structural or semantic names and then create multiple themes in your starship.toml file to quickly change the look of the prompt. 

## Moving forward

I am still tinkering with Starship and tweaking the colours and layout of my prompt. I am also doing some more experimentation with the custom commands to see how much of the prompt I can break out into distinct sections to make it easier to style them. Currently my command prompt looks nicer, has some visual interest and, most importantly, gives me feedback that I will find useful when I am working on my python code. 

[^1]: Once a month really.
[^2]: Isn't everything these days?
[^3]: Which I have found myself doing more often than not.
[^4]: I am using an image and not text so you can see the Nerd Font icons