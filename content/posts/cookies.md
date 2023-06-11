---
title: "When you give a browser a cookie"
date: 2023-06-10T11:08:32-06:00
draft: false
description: "How many cookies are added to your browser when you use a URL shortener? Should you use them? And what is in that URL?"
tags:
    - Twitter
    - Facebook
    - Google
    - YouTube
    - Browsers
---

A few days ago I came across a link, in a Mastodon post, to an interesting Kickstarter project. 
The person must have got the link from a Twitter post as it used the [t.co URL shortener](https://help.twitter.com/en/using-twitter/url-shortener). These types of services become popular when Twitter began to rise in popularity as they reduced the number of precious characters you spent pasting in a URL. They are largely unnecessary on Mastodon as only the first 23 characters count against your post limit [^1]. 

These were/are handy but they have several issues with them.

1) They obfuscate the URL
2) They can embed multiple redirections into a single URL
3) They add tracking information to your browser

So lets have a look at these issues

## URL obfuscation

URL shorteners take a very long URL and then make them much shorter [^2]. There are multiple ways to do this but the process will take anything in the URL, including tracking IDs, and then reduce them to a small number of characters.

The most common type of tracking IDs are [UTM attributes](https://buffer.com/library/utm-guide/) but the one that you may be more familiar with is [Facebook's fbcid](https://fbclid.com/). They differ in how they work but the main aim for them is to track URLs without having to store cookies. 

So when you see a URL like this:

`https://t.co/la6w6l3Mnt`

You not only don't know where it goes but you don't see any of the tracking IDs in the original URL. 

```url
https://www.kickstarter.com/projects/scarlettcomicbook/scarlett-vs-3
?fbclid=PAAaaSs2BSfl4_J7KE5A43RmJ_4JVyIJjV5hlntLK7QyIwDuPJJe7TVtvAoVo
```

That enormous string is something that Facebook adds to all outbound links. I try to remove these tracking IDs but if someone uses a link shortener you aren't aware of them. If you have any software or browser plugins that remove them they won't work as the URL shortener redirects your browser and you don' have the opportunity to remove them.

## Multiple redirections

So where does this URL go?

`https://shorturl.ac/zac`

The ultimate destination is to [this page](https://buffer.com/library/utm-guide/) but it goes through another URL shortener before getting to the final destination.

* `https://shorturl.ac/zac`
* `https://tinyurl.com/47fbxm7a`
* https://buffer.com/library/utm-guide/

I have an app on my Mac, [Link Unshortener](https://underpassapp.com/LinkUnshortener/), that will unravel all of those shortened URLs and even remove tracking IDs [^3]. I find it handy when I want to unravel a URL for someone so they can post a clean URL. 

## Cookies

Every time you visit a site you give it an opportunity to add cookies to your browser. So if you have a link to the Twitter URL shortener you are giving it an opportunity to drop cookies into your browser. And since you are directly visiting `t.co` then any cookies it drops into your browser are not third-party and so won't be impacted by any third-party settings in your browser. 

So in order to test this out I open Vivaldi and cleared out all of the cookies. The idea is that if you clear your cookies you can visit a URL and then see what was deposited in your browser. 

The original URL that I was discussing is this:

`https://t.co/la6w6l3Mnt`

When opening the URL in Vivaldi it deposits 28 cookies from six different domains in my browser. 

* www.kickstarter.com: 11
* t.co: 2
* .kickstarter.com: 9
* m.stripe.com: 1
* .www.kickstarter.com: 2
* .youtube.com: 3

Visiting the Kickstarter page directly results in 26 cookies from 5 domains.

* www.kickstarter.com: 11
* .kickstarter.com: 9
* m.stripe.com: 1
* .www.kickstarter.com: 2
* .youtube.com: 3

The missing cookies are the two from t.co. 

Interestingly enough, if you remove the _fbcid_ from the URL you only get 18 cookies from three domains.

* www.kickstarter.com: 11
* .kickstarter.com: 9
* .www.kickstarter.com: 2

So it appears that the presence of the _fbcid_ will make the Kickstart.com server do something that will load data and cookies from Youtube and stripe.com. 

Twitter loads two cookies as it redirects you to the shortened URL. Both appear to be copies of the same data. One is labelled `muc` and the other is `muc_ads`. The cookie is described, on the Nokia site and others as :

> Collects data on user behaviour and interaction in order to optimize the website and make advertisement on the website more relevant.

The NFB.com website also [specifically mentions](https://help.nfb.ca/cookies/) that these are Twitter cookies and not from a distinct ad vendor.

> Twitter installs these cookies to integrate and share features for social media and to store information about user behaviour on the website for tracking and targeting purposes.

The number of cookies that get installed by a shortening service depends on the service. The shorturl.com example above actually only added one additional cookie and that was a _phpsessionid_ from shorturl.com. The tinyurl.com site doesn't appear to have added anything to the browser. 

## Please Hammer. Don't shorten 'em

When you use a URL shortener [^4] there are a number of potential things that can happen on route to the final destination. None of that is obvious to anyone who clicks on your link so its is really best to not use them at all. Find an app or a browser extension that will resolve them for you and also look for something that can strip out the tracking IDs as well. 

There is enough third-party surveillance online now that we really don't need to help companies make it easier to track our friends. 


[^1]: This is meant to duplicate the length of a t.co URL
[^2]: Obviously.
[^3]: The author also makes a Safari extension which does this as well amongst many other things. https://underpassapp.com/StopTheMadness/
[^4]: And there really isn't anyn reason to use one any more