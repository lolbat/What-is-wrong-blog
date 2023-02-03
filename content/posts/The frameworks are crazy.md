---
title: "The frameworks are crazy"
date: 2023-02-03T14:35:51-07:00
draft: false
tags:
    - JavaScript
    - WebDev
---

I had a break from programming for a bit more than a decade. Prior to that I used to build CMS solutions and do multimedia programming in Director [^1]. One of my favourite things to do was to build automation workflows and development frameworks. When I was working at [Bayleaf Software](https://www.bayleaf.com) in Vancouver I developed a framework for our [ColdFusion](https://coldfusion.adobe.com/) coding projects and also build some tools in VTML which was a markup language that the [ColdFusion Studio](https://web.archive.org/web/20010603235626/http://www.macromedia.com/software/coldfusion/productinfo/overview/cf_studio.html) IDE [^2] used. You clicked a button, added a project name and it built out all of directory structure you needed and copied over the default files. It was a primitive form of scaffolding. 
Once I started to look into getting back into programming I was fascinated by the complexity of the systems that people were using to build websites. Two things struck me immediately. First that they were all very complex and secondly that almost every single one of them required you to use a terminal and interact with one or more CLI tool. Oh and they all hated JQuery.

## You want me to do what?

I thought about this again today when I stumbled upon Dave Rupert's [So you want to make a new JS framework](https://daverupert.com/2023/01/so-you-want-to-make-a-new-js-framework/) post. Take a second to read it. I'll wait. 

While I disagree with his suggestion of using PHP I can't argue with his suggestion that most frameworks are built just to build frameworks [^3]. And then expanded to justify all the work you put into building the framework in the first place. 

One of the first systems I came across was [Node](https://nodejs.org/en/). Node is an interesting environment and it makes it easy to leverage your JavaScript skills to create server-side tools and even servers. I used it to write some CLI tools to process and test data. Some people have some legitimate concerns about how many files a Node project will install on your machine when you include all of the dependencies in a project. And there are also some valid concerns about how easy it is to break a project in Node given the number of inter-dependent files there are. 

There are people that build entire websites in Node. I puttered around with building a server application that would do some mathematical work on data submitted to it and then return the results as a JSON file. I would never in 100 years think to use Node to build an entire website. Routing, themes, logic. Everything. Insanity.

Frameworks such as [React](https://reactjs.org), [Svelte](https://svelte.dev), [NextJS](https://nextjs.org) and others all seem to be ways of redoing all of the same sort of work that I did years and years ago but now with a much more complex framework and CLI tools. 

I don't know how to say it to web devs today but back in the old days were we looking forward to the future where we never had to use a CLI again. Running your modern frameworks via a terminal isn't the future, it is a dystopian nightmare. Using a CLI feels like failure. Like I pissed off my immediate supervisor and now need to make amends by working on a thirty year-old system. One of my favourite Mac apps is [CodeKit](https://codekitapp.com). 

> Build websites, not config files.

That is something I can get behind. It provides a GUI front-end for a large number of normally CLI-based tools. That is what the future looks like. Not 80 characters of ASCII coming at you at high speed. 

## Who is this for?

Here is a quote from the Svelte website:

> We're proud that Svelte was recently voted the most loved web framework with the most satisfied developers drawing the most interest in learning it in a trio of industry surveys.

Are the users of your website happy? Do they even know or care what framework you're using? 

> Lets not use that site, it was built in React - said no-one ever.

Frameworks are for developers and no-one else. Andy Bell has [a very good discussion](https://andy-bell.co.uk/speed-for-who/) of this very idea. Developers like frameworks because we are all nerds at heart, like learning new things and feel pride at mastering a new technique.

None of this actually makes websites better or more usable for people who visit the sites. In some cases I would argue that the frameworks actually make performance worse. Alex Russell talks about this issue [as being exclusionary](https://infrequently.org/2022/12/performance-baseline-2023/). People visit websites for content, experiences and information. Some frameworks do help to support those types of sites, especially anything that helps present data to users in meaningful ways. Some frameworks place an immense overhead on older machines and tablets. Or even on some newer hardware. 

## Complexity is corporate

It should come as no surprise that many of these initiatives are started by or supported by large corporations. React, Svelte and other frameworks are to web development what the [ISO 9000 standard](https://en.wikipedia.org/wiki/ISO_9000) is to customer service. Does it feel better to know that when you are getting screwed over regarding your phone bill that the person on the other line is working within a system that meets the ISO 9000 standard? Or are you just pissed off that they charged you twice for the same data package and won't refund you?

Corporations crave complexity. Especially when it comes to things that may not be easy to measure. Like consumer satisfaction with your website. Frameworks, especially popular and highly recommended ones, are blame-shifting devices in a corporate environment. No-one got fired for buying IBM. No-one got fired for following the ISO 9000 standards. And no-one will get fired for using React. 

## Use just what you need

This site is HTML, CSS and some JavaScript. It is here to let people read things. It doesn't need anything else. Even Wordpress is overkill for what it actually does. I wrote some other sites that used JQuery and some other sites that used just JavaScript. 

The most critical item I needed for most of my sites was a templating system to allow me to compartmentalise some of the CSS and HTML code I was using for repeating elements on some of the sites. I used [JSRender and JSViews](https://www.jsviews.com) for some and then wrote my own templating code for some other sites that didn't have the complicated requirements that JSRender addressed. 

I am hard-pressed to think of any site that I visit on a regular basis that would require some of the advanced web development frameworks currently in use. Unless one of them could fix Reddit's video player. 

A website should really only need to do a few things

* break gracefully
* load fast
* look as good as it can without loading down the user
* perform in line with the user's expectations

Anything else is just masturbatory. 

### Footnotes

[^1]: I miss Director so much. 

[^2]: When Macromedia bought ColdFusion from Allaire they stopped work on ColdFusion Studio and tried to replace it with a set of plugins for Eclipse. It was a clusterfuck. It had a quarter of the features and didn't support any of the workflow tools I had built. Developers were not amused.

[^3]: And I am totally the guy who would do that sort of thing. 