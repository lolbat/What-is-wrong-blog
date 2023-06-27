---
title: "Blog updates"
date: 2023-04-19T20:11:32-06:00
draft: false
description:
tags:
    - hugo
---

I spent yesterday, and a bit of today, doing some work on my blog to add some tweaks to a few features that had been irritating me but clearly not enough to have done anything about it sooner. The recent posts list is now in a smaller font size and has bullets to make each post distinct. The list pages on the site have been reworked and it now uses either a small set of text from the article or the description in the listing. I will be using descriptions more often now for reasons that will be revealed later.

I also reworked the code display. I realised that it wasn't actually changing style when you clicked the light/dark toggle in the sidebar. This took far more time to fix than I thought as it required me to generate light and dark style sheets and then toggle them on and off. The theme already had code to handle trapping the toggle button and so I just needed to add some code there.

The difficult part of the process was realising that none of the theme's style sheets actually changed the code and that it was an internal style being applied by Hugo when it generated the site. This is an example of where the Hugo docs fall a bit short. Luckily I was able to find [a very good article](https://data-dive.com/adaptive-syntax-highlighting-for-hugo-blog-dark-mode/) on how to do this. It made the process a lot clearer and I was able to finally get the code to change style in dark-mode.

## Trouble presents itself

I still ran into two problems. The first was simple enough to figure out. The JS code I was using was, even with a defer attribute, loading and executing before the CSS was loaded. I moved the code to the bottom of the file and it solved the issue. The code did look odd though. As if it was being rendered twice. Looking back at the code in a CSS inspector showed nothing odd but when I disabled the fonts I had set for the code the problem went away. A few quick tests showed that the issue was the Roboto font. I took it out of the style sheet and everything looks much better now. 
