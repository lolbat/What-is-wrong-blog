---
title: "Markdown writing tools"
date: 2023-01-31
draft: false
tags:
    - Nota
    - iA Writer
    - Ulysses
    - Drafts
    - Obsidian
    - Markdown
    - MacOS
---

Since starting to write using Markdown it has become, [as I have commented](https://whatiswrongwithyourdog.netlify.app/posts/writing-markdown/), an obsession with me. I currently use [Nota](https://nota.md) to write and organize all of my work and while it is quite good it doesn't have everything that I want. Primarily, it currently doesn't have any Shortcuts or AppleScript support which makes plugging it into an automated workflow trickier than needed. It is also an electron app and I like to find MacOS options when I can. So over the last week I tried out a few different writing tools to see if any of them would be able to replace Nota as my go-to writing tool.

## iA Writer

[iA Writer](https://ia.net) has been around for quite a while and has added some significant features to the app since it was first released. The interface in iA Writer is quite nice if lacking contrast. The window that you work in tends to fade into itself as you write. The focus of the app's development is in writing a distraction-free writing environment and many of their UI choices are informed by that. I don't want the full-screen writing experience and so those features don't have any appeal to me. 

There were three strikes against iA Writer. 

**Strike 1**: It doesn't have Shortcuts support or any automation support outside of URL commands. If I wanted to build URL strings I would go back to the 90s and 00s and work on web applications again. URL commands are clunky and a way for developers to strike off the "automation features" checkbox without adding any platform specific features. Which is odd because...

**Strike 2**: It has one features that I love, [snippets](https://ia.net/writer/support/windows/snippets), that is Windows only and has not been added to the Mac version since its release in 2020. Either add platform-specific features or don't. 

**Strike 3**: You can't add a custom font to the app. iA Writer has three fonts you can select and for me none of them really work. I asked, via their support email, if it was possible to add fonts and received this odd reply:

> Writer is designed to allow users to launch the app and begin focused  typing right away. Options (including font manipulation) that stand between this goal have been consciously eliminated.

So why does the app have any settings? Why does it open in a window at all? If I can't change the app to use a font that allows me to read properly then I can't really use it. 

## Ulysses

Named after one of the most difficult novels published in English [^1] and a pain in the ass to spell quickly when you are writing about it, [Ulysses](https://ulysses.app) is almost perfect.  It has a very slick Mac UI. It lets me select fonts. It has themes for the editing area if that is the type of thing you like and it has a **lot** of export options. It even has Shortcuts support. I am not entirely thrilled with how it handles URLs in documents but it probably isn't that big of a deal.

The major issue for me is the price. Well not the price exactly but that it is a subscription. It is just a touch over $50 Cnd a year which would make it the most expensive app that I use [^2]. It is more expensive than iA Writer but it also gives you access to the iOS versions of the app. I don't really work on any of my iOS devices so that isn't really a draw for me. I am currently on the fence about subscribing but if I do change from Nota it will be to Ulysses. 

## Drafts

I know that there are a lot of people that like [Drafts](https://getdrafts.com) as a blogging tool but I actually find it difficult to use. The UI is confusing and it really does seem like a note taking app that wants to be a more complete writing tool but doesn't want to leave its notes roots behind. Drafts does have a Workspaces feature that might be similar to the one in Nota. I think. It is part of the Drafts Pro version of the app so I wasn't able to try it out. 

Now I don't want to be too critical of Drafts because while some people do use it for blogging and writing the developers don't bill it as that sort of tool. They call it "a launching-off point for text" [^3] so the fact that it won't work as a writing tool like Ulysses or Nota is just me asking it to do something it isn't intended to.

Drafts does feature a series of [action tools](https://docs.getdrafts.com/docs/actions/editing-actions) that really do look phenomenal. And you can even write JavaScript code to expand the actions in the app. Combine this with the Shortcuts and AppleScript support and you have a very impressive text processing engine. 

I would be on board for a stripped down version of Drafts that just had this text processing engine in it to provide a set of tools to help automate the processing of text but I suspect that won't happen.

If you want a great note app then Drafts is a great choice but I am happy with [Bear](https://bear.app) at the moment.

## Obsidian

Again in the category of asking apps to be something they are not, we have Obsidian. Obsidian is an electron app so it comes with all of the problems that an electron app has. It does have Shortcuts support but only via the [Actions for Obsidian](https://obsidian.actions.work) app by [Carlo Zottmann](https://norden.social/@czottmann). It also has hit-or-miss support for MacOS features and the spellchecker is wonky. It is in most every electron app I have tried though. 

Obsidian has a very good Markdown editor and it does make it easy to navigate through your files if you need to. The concept of a Vault in Obsidian does mean that it is not possible for a particular Obsidian Vault to open files outside of that Vault. So unless you keep all of your writing in one place you will need more than one Vault. This isn't a difficult proposition but it is tricky [^4] to recreate a Vault. So if you have one set up the way you want it takes some time to duplicate a Vault and add the plugins, themes and settings you want.

Obsidian would be an ideal candidate if I was doing more writing that involved data display. Obsidian has a number of plugins and display options that make it quite simple to show data in a pleasing fashion. And you can also write code to help you generate that data if need be.

I don't have need that sort of thing though so the while I have several Obsidian Vaults for various projects I don't think it will make a good writing tool for me. 

## Nota still?

Nota is an odd beast. The spellchecker is wonky. I doubt it will ever support Shortcuts and will require me to use Keyboard Maestro to automate it [^5]. Nota is a great app until I run into some oddity and then it  annoys me until I find a way to work-around the issue.  It has survived all of this because it gets out of the way and lets me write.  I can quickly remove the UI and just be left with the editing area, I don't want a distraction free environment because that just isn't how my brain works. It shoots out words in a rapid burst and then stops and wants to be entertained for a few minutes. Browsing is part of the writing process.

The UI for Nota is entirely unlike anything on the Mac and that does cause some issues. I do find it difficult to work in the Files, Folders and Editor interface that the developers have created specifically because it is unlike anything else on the Mac. I don't need to access it often but when I do it is cumbersome. especially if you have a lot of images or files in a directory. I have a multi-article series I am working on for another site and the articles all use quite a few images in each. The Nota UI makes navigating to find images to insert into the article more work that it needs to be.

## So what have we learned?

I am still using Nota but an actively considering Ulysses if I can learn to accept the subscription price. Like a long trip to an elderly relatives for a family dinner it might just be something I near to bear down and deal with. Nota is my go-to Markdown writing app but primarily because nothing else really does a better job. Well except Ulysses. 

Maybe I should just pay for Ulysses?

### Footnotes

[^1]: One could argue that the novel described in Martin Amis' [The Information](https://en.wikipedia.org/wiki/The_Information_(novel)) is the most difficult to read but it is unfortunately fictional.  

[^2]: Yes, I am frugal. 

[^3]: Which is actually just an awesome line. Kudos to whomever thought it up. 

[^4]: Or so I think. I may be missing some command or option that makes it simple to duplicate it. 

[^5]: Nota does have a CLI tool that you can install which makes it easy to open files via a shell command though.  I am actually writing this post after running a Shortcut that created my new Hugo post and then opened it via the CLI tool. 