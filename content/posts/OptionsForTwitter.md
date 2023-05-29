---
title: "Options for Twitter readers"
date: 2023-05-29T12:57:21-06:00
draft: false
images:
    - og/twitterBlogPost.jpg
description: "If people don't want to leave Twitter, you can always send them a message using Open Graph."
tags:
    - Twitter
    - Open Graph
---

A part of putting your content on the web is that its open nature means that you can't easily restrict who reads it. So, for instance, if someone wants to post a link to your content on a social media site that is run by a fascist you can't really stop them.

You can send them a message though.

## Open Graph

I have been working on, finally, adding [Open Graph](https://ogp.me/) support to my blog. I had title and description support added but I wanted to finally add images. Or at least a default image.  While I was [testing the image](https://opengraph.dev/) that I made, I noticed that there were distinct Twitter card tags that the page was checking for. This seemed like an opportunity to say to the people that are still using the site.

## Twitter:image

First I made a test image and added the `twitter:card` meta tag using the URL to the image. I did a quick test and the twitter image was displaying but wasn't being used in any of the other previews. I created a default image for the site and uploaded it and did another test. Once again, the Twitter image was only used in the Twitter preview and my default image was used everywher else.

## Making an image

A quick trip to the image editor with a copy of the Twitter logo and a swastika and I had this. 

![Twittika](/og/twittika.jpg)

Feel free to copy it. I call it "Twittika" but you can call it anything you want. 

## Adding some code

```html
<meta name="twitter:image" content="/twittika.jpg"/>
<meta name="twitter:title" content="Twitter is run by a Nazi" />
<meta name="twitter:description" content="Twitter is owned by 
a fascist and now actively promotes fascist and nazi thought and 
content. Isn't it about time you left?" />
```

So now when someone links to one of my blog posts they will see something different than a Twitter user that links to it.

![Spot the difference](/images/twitterOptions.jpg)

They don't get the title or description and also get a nice image showing them what I think about their choice of social media site.



 