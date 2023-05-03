---
title: "Symbols as a Nerdfont"
date: 2023-05-03T09:55:20-06:00
draft: false
description:
tags:
    - SF Symbols
    - Starship
---

I have spent a few days working on my command prompt. I spend quite a bit more time using it than I ever have and as such I want to prompt to look good and be functional. A few months ago I installed [Starship](https://starship.rs/) which is an app that helps create colourful and useful prompts. I used one of the presets and then didn't do much with it until this week.

![The old prompt](/images/prompt-old.jpg)

You can add icons and images into the prompt by using a [NerdFont](https://www.nerdfonts.com/) that has additional glyphs added into the Unicode extended space. These are handy but, on my Mac at least, they are quite small and don't really look all that good.

![exa uses the same icons](/images/prompt-icons.jpg)

I have been trying to get them to look better or at least render larger but haven't had any luck. Last night while I was doing the dishes I remembered that I had the [SF Symbols font](https://developer.apple.com/sf-symbols/) installed and lo and behold you can use them in Starship generated prompts. They look much better and they are larger which makes using them a no-brainer since I think they make the prompt easier to read. 

This is the prompt without symbols

![Pretty but boring](/images/prompt-color.jpg)

and this is the same one with symbols

![The new prompt](/images/prompt-symbols.jpg)

I am still working on the layout and how I want the python virtual environments to display but I am so glad I remembered SF Symbols. You will still need to use a NerdFont for the rounded corners and chevrons though.

Now if I could only use it in exa.







