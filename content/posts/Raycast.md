---
title: "The Enshittification of Raycast"
date: 2023-02-25T14:34:58-07:00
draft: false
tags:
    - Raycast
    - Mac
    - Enshittification
    - VC
    - Automation
---

I am not sure if he came up with the term but, Cory Doctorow has certainly popularised [Enshittification](https://pluralistic.net/2023/01/21/potemkin-ai/#hey-guys) as well as providing the a handy list of the steps companies go through as they enshitiffy themselves. I have been thinking of that process a lot this week as I have been looking at various new software releases - [Fig](https://fig.io), [Warp](https://www.warp.dev) and [Raycast](https://www.raycast.com) [^1]. These are all attempts to modernise a facet of computing often overlooked (terminals and application launching) as well as adding team and enterprise components to them.

These are all very exciting tools. Especially if you like to write odd scripts to automate workflow [^2]. I can't get enough of these sorts of applications and so I went to check them all out. Both Fig and Warp are free downloads but they require you to create an account to use them. I don't know about you but I just don't do that anymore  [^3]. Off they went to the trash. Raycast is also a free download and is currently [^4] free for personal use. It also doesn't require an account unless you want to access their development tools. 

## What is Raycast

Raycast is a productivity application aimed at developers with the goal to provide them with a tool to help automate their daily tasks. 

![A screenshot of the main window for the Raycast app](/images/Raycast.jpg)

> Raycast was founded in 2020 by former Facebook software engineers Thomas Paul Mann and Petr Nikolaev, who sought to create a way to recover the time developers lose every day due to continuous context-switching between different SaaS tools.
[Techcrunch](https://techcrunch.com/2021/11/30/developer-productivity-tools-startup-raycast-raises-15m-from-accel-and-coatue/)

Raycast is an application similar to Spotlight, [Alfred](https://www.alfredapp.com) or [LaunchBar](https://www.obdev.at/products/launchbar/index.html) on the Mac. It provides a way to quickly launch applications and scripts to perform tasks or get information. It ships with a small core of generic extensions built in and has more available from the [Raycast Store](https://www.raycast.com/store). The long-term goal is to release Windows and Linux versions of Raycast. Consequently, the core functionality of the application focuses on actions and activities that are common across those platforms. Anything else is available as an extension. 

To use it you press the keyboard accelerator to activate it (typically Cmd space) and it pops up a dialog that lets you type the name of the application or command that you want to use. It also has a list of recent commands you have used as well as a list of suggested commands. Unlike most application launchers it doesn't appear to have any predictive search capabilities so you can't use it to find files or folders. 

## Extensions

You can add extensions to Raycast through the app itself by typing in the `store` command [^5]. There is a large number of extensions available and many of these have been written by Raycast users and submitted to their store. The emphasis is heavily weighted towards extensions that interact with dev tools and systems. So fewer podcast extensions (2) and more cloud extensions (6). From a business perspective this makes a lot of sense. The Raycast team can work on creating a set of core extensions, and an API, and then have users create any platform specific extensions needed. 

![A screenshot of the Raycast app showing some of the extensions available through its store.](/images/Raycast%20store.jpg)

Following the developer focus, Raycast has its own API that uses React, Node JS and Typescript to create extensions. You need Node and npm installed locally and they suggest using [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=tonka3000.raycast)​. If that isn't how you want to live your life [^6] you can also create Script Commands that let you use shell scripts, AppleScript and other scripting languages. It isn't very well documented and really only consists of [a Github repository](https://github.com/raycast/script-commands) with some samples and templates. 

## When does the Enshittification come into play?

Let me start by saying that I don't know any of the folks who work at Raycast nor do I wish them any ill will. They are making what appears to be a fun set of tools. They are a bit more focused on developers than "the rest of us" for my liking but they are clearly looking at solving a series of problems that the founders both saw during their tenures at companies like Facebook, Audi and WhatsApp. 

In order for an applications like this to grow you need a strong base of users. And so Raycast has made access to their tool free as well as their development tools. All of the extensions produced are also free. Raycast is already developing a lot of buzz, frizzion and engagement [^7] amongst developers as well as Mac automation enthusiasts [^8]. These folks are all happy to have a new free toy and even happier to be able to build extensions and scripts for it. The problem is, as we all know, that everyone will want it to stay free and in order to succeed and prosper Raycast is going to have to make money from all of those users. 

This is the first step on Doctorow's Enshittification stairway to crap. You build the audience and then use the audience to attract the business users. You only have a limited amount of resources [^9] so you have to move the focus of your business to getting those business accounts. The users stay for several reasons but the primary one is that they are building their extensions and scripts to an API owned by Raycast and anything they build isn't portable. 

## It is like owning the highway

I recently tested out some code in two different Mac automation systems. It was a shell script that I had written previously and have already used in Keyboard Maestro and Shortcuts. I copied it into LaunchBar as well as Alfred and it worked in both of those systems as well. I can do this because the script was written in an open standard and no-one has to pay to use or interpret those standards. The same holds true for any Python, Perl or PHP code that I could have written. 

Raycast owns and controls the API that the code you write for their platform uses [^10]. You won't be able to take any of the code you wrote and move it to another platform because Raycast owns and controls the API that your code is written for. So if, in a year or two, you don't like the manner in which the company is treating you or you don't like the new fee structure that they announced you have to weight that against the cost of replicating your 

## You can't spell Enshittification without V and C

The core problem that Raycast, and any similar company faces, is that they are ultimately beholden to the VCs that funded the company. Raycast has gone through [two](https://techcrunch.com/2020/10/29/developer-productivity-tools-startup-raycast-raises-2-7m-from-accel/) [rounds](https://techcrunch.com/2021/11/30/developer-productivity-tools-startup-raycast-raises-15m-from-accel-and-coatue/) of funding so far to the tune of 17.7 million US. Venture Capital firm [Accel](https://www.accel.com/noteworthy/giving-developers-superpowers-our-investment-in-raycast) was a part of both rounds. Raycast was also a member of the [Y Combinator](https://www.ycombinator.com) early startup program [W20](https://www.ycombinator.com/companies?batch=W20). 

Dealing with venture capitalists is rather like taking out a loan from that well dressed fellow who always has a seat at the end of the bar near the pool tables. It is great at first but eventually someone comes and starts asking for [the pretzel money](https://www.youtube.com/watch?v=y8_sBd5-iMo). And so the money must be made and that eventually means, regardless of the intentions of the founders [^11], that someone is going to be made to have to pay for those funding rounds and whatever [vig](https://www.merriam-webster.com/dictionary/vigorish) that the VC companies want.

Enshittification is an inevitable part of the process of trying to build something big enough to be able to cash out from. The founders might have lofty ambitions. The folks working at the company might share them as well. The folks at the VC firms don't give a shit about any of that though and simply want their money. And if they have to squeeze the user base and jack up the fees for business clients to do it then they will. 

## You only have yourself to blame

Like vampires, venture capitalists have to be invited into your company. To the best of my knowledge no-one cornered the founders of Raycast in an elevator and forced them to take 17.7 million dollars in funding. And by the same measure, no-one is forcing you to use Raycast. If the company needs to pay off Louis Two-chins and his friends at some VC firm and you suddenly have to pay a monthly fee to access your extensions then you can't say that you weren't warned. Or really that you should have known better in any case.

None of this is new. Open source advocates have been telling us this for decades. I'm not turning into [RSM](https://en.wikipedia.org/wiki/Richard_Stallman) [^12] in my old-age but I think that we've all been bitten enough times to perhaps start to take a look at these "free" tools and what their impact might be. 

### Footnotes

[^1]: They also have oddly similar looking websites. 

[^2]: I don't really think I have ever had enough work to justify the amount of time I have spent with scripting and automation tools. 

[^3]: I may revisit these apps later but I do think that asking people to sigh up for an account without even letting them see how your app works is a dealbreaker and sign of "Bad Things" to come. 

[^4]: Raycast has been upfront about there being possible subscription fees for users in the future after their beta period is over. 

[^5]: And when there start be be prices on some of these extensions you can't say you weren't warned as they have clearly labelled it as a store. 

[^6]: And no-one will blame you if you don't want to. 

[^7]: Pick your favourite buzzword or invent your own. 

[^8]: Maybe I have watched too much British comedy but the word "enthusiast" always seems pervy.

[^9]: Unless you are funded by SoftBank or oil power's sovereign wealth fund. 

[^10]: As well, React is a product of Facebook, TypeScript is a product of Microsoft as is VS Code. The only open source aspect of Raycast is Node and npm. 

[^11]: Remember "Don't be evil"?

[^12]: I hope not! Thats something people would tell you right? Right?!