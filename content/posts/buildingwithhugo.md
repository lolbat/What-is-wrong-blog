---
title: "Building with Hugo"
date: 2023-01-30T15:58:17-06:00
draft: false
tags:
    - Hugo
    - Netlify
    - Markdown
---

This site is built using a static site generator called [Hugo](https://gohugo.io). Hugo is a command line tool written using the [Go language](https://go.dev) that takes Markdown or HTML pages and builds a website using a theme you specify. The resulting site consists of static HTML pages and so it loads ridiculously quickly and the pages are much smaller than pages built with a CMS.

I am using a theme for the site based on the [Poison theme](https://github.com/lukeorth/poison) which is itself based on another theme called [Hyde](https://github.com/mdo/hyde). As "stripped down" as Poison is I still took some time to remove some of the features in it that I don't need such as MathML support and all of the web fonts that the theme uses. I have used some additional CSS to change the look of the theme but the type is whatever you have your defaults set at. I am starting to get tired of sites that force font choice on the viewer. 

## Why Hugo?

I decided to use Hugo because it is very fast and it also has a build system and a directory layout that I understood almost immediately. The base install comes with very few files and you can get up and running quite quickly. Hugo also can run your site locally through its own server instance so it is easy to test changes you make to the site or the theme.

There are also a lot of options available for you if you want to add features such as specific layout for certain types of articles, listing content based on tags or content archetypes. It is simple but there is room for you to expand if you want to. 

Since all of the content is stored as Markdown pages and all of the images and .md files remain on my machine I can move whenever I want to without having to worry about exporting the site. This is something that you would have to do with a Wordpress site for instance.

The biggest problem I ran into was trying to understand how the templating system worked and then to make the changes that I needed to do to make it look the way I wanted. The original author of the Poison theme made an interesting choice to leave the CSS from the Hyde theme in its original files and so there are three distinct .css files that are used to define the look of the site. Luckily Safari, and other browsers, will show you what file contains the css styles that are being applied to an element on a page.

## Workflow

I still need to do some work to try to automate my workflow and make it easier to post new articles from my computer. Hugo uses commands sent via the terminal to build your site. Once you have that content you can either upload the changes via sftp or, as I have done, link your Github repository to Netlify and then have it deploy the site once you have uploaded changes. 

Before I wrote an article and then pasted the Markdown into an editor window on Wordpress and hit Post when I was done. That is not the case anymore and so I need to figure out how to automate as much of this as possible so I can cut out the number of steps required to post a new article. 

Hopefully I will have this figured out in the next little while and can then begin to post on a more regular schedule. 
