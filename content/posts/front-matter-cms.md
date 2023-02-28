---
title: Front Matter CMS
description: Adding the Front Matter CMS might have changed how I will be using my blog
date: 2023-02-15T22:29:04.989Z
draft: false
tags:
  - Front Matter
  - Hugo
  - VS Codium
  - Markdown
  - Ulysses
---

A while ago I was talking about possibly using Ulysses as my Markdown writing tool of choice. I tried using it to write a few posts to this blog but I ran into several issues. I won't go into them in detail but just summarize them by saying that Ulysses will edit the content of the YAML front matter in your files in such a way that is contrary to the YAML specifications. Almost everything I do has a YAML header and this was a dealbreaker for me. 

Which is disappointing as it is actually a very good writing tool. The folks who work support for the company are also exceptional so it was a less than optimal result but the entire process was a happy one. If you want to write in Markdown but don't have YAML headers then you really do need to check out [Ulysses](https://ulysses.app/).

## So what now?

I am still using Nota but my writing process has changed slightly [^1] since my discovery, this morning, of a VS Code extension called [Front Matter](https://frontmatter.codes). This all started after I saw a Python related post on Mastodon that mentioned the FOSS fork of the VS Code editor from Microsoft. It is an interesting IDE but I would rather write my code out by hand than trust Microsoft with it [^2]. Or use one of their apps in any part of a build phase. I also like native apps. VS Code is built on electron and it can't even do simple things like 'Hide' the app. Give me [Nova](https://nova.app/) or give me death! So the idea that there is a FOSS alternative was interesting so I [grabbed a copy](https://vscodium.com) to give it a try. 

It is, as you would imagine, the exact same as VS Code but it lacks the tracking code that MS put into the app. The innocuously named 'telemetry' [^3]. While poking around I was looking through the extensions and saw that it had several for Hugo. Including one called 'Front Matter'. 

## So what is it?

![The Front Matter dashboard](/images/frontmatterdashboard.jpg)

Front Matter is an extension for VS Codium that acts as a CMS for SSGs like Hugo. Without all the TLAs, what that means is that you can use Hugo but have some GUI based control over the process. You can see the images that you have stored in your `static` directory. You can see the files in the `content` directory and see which are drafts and which have been published. You can track the taxonomy that you have built for your site. You can even run the Hugo server and preview your site in VS Codium if you want.

There are quite a few features that I don't have any immediate [^4] need for but integrating the management of the blog into an IDE means that you are less reliant on using command line tools and, more importantly, you have a platform to work off of in order to build scripts and workflows. It also doesn't hurt that Front Matter makes it easy to update content with a proper data as well as put images into your content. 

It also has some annoying 'SEO' tools that are thankfully easy to hide so you don't need to worry about them [^5].

Currently I am poking around in the [documentation](https://frontmatter.codes/docs) to see what sort of fun geeky things I can do  and what options I have in terms of using Front Matter/VS Codium and my Mac's automation tools. It will also be interesting to see if Front Matter makes it easier to add and expand the content types I use on the blog. 

### Footnotes

[^1]: For the moment. I am trying it out to see how it works and how much I can automate the process of putting content up on the site. I may change how I work in the future but this is currently an impressive tool.

[^2]: Why people trust the company is beyond me. Maybe it is a vestige of the 00s but I just assume that they will use any future dominance in IDEs to screw people over or other companies. 

[^3]: Anyone that uses the term 'telemetry' without air-quotes is a shit weasel. 

[^4]: Lets make sure that we qualify that so we don't end up with egg on our face later.

[^5]: Anyone that uses the term 'SEO' without air-quotes is a shit weasel. 