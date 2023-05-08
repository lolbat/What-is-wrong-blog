---
title: "Why Codeberg"
date: 2023-05-08T14:15:05-06:00
draft: false
description:
tags:
    - Github
    - Codeburg
    - Microsoft
    - FOSS
---

Today I opened [my first repository](https://codeberg.org/lolbat/Victor) on Codeburg. It is [an alternative to Github](https://codeberg.org/about) for free and open source projects and it offers most the the code repository features that you want as a programmer without all of the social media aspects [^1] that have been added to Github. 

![Really?](/images/FFS.jpg)

I also really dislike that when I go to Github it sends me to an activity page that a) I never use and b) annoys the shit out of me [^2].

## Larger issues

So there are larger issues other than my dislike of achievements and social media gamification. 

### Microsoft

Developers today seem to have forgotten that Microsoft was built on using their monopoly (at the time) position to ruin competitors. They got their wrists slapped over Netscape but their history prior to that is filled with much better applications that they drove into the ground. And it isn't a thing of the past. The company is trying to [force Teams and Outlook users to open URIs in Edge](https://www.theverge.com/2023/5/3/23709297/microsoft-edge-force-outlook-teams-web-links-open) no matter what their browser choice is. People using VS Code should take note. At some point, an executive at Microsoft is going to make a decision about your usage of that app based on their bottom line. 

I am sure that there are a lot of great people that work at Microsoft. They don't run the company and you only need to look at the recent LLM situation to get a measure of what sort of sociopaths are in the C suite there. 

### 2FA

Now I am not against 2FA. I think it is a great idea. When I ask for it. Microsoft recently started requiring 2FA for some users who hit an unspecified criteria. All I can say is that if they included me in that group then it must have been a pretty low bar. If it wasn't for this blog, that is generated using a CICD on Netflify, I would have almost no commits. 

And so I enabled 2FA. Because I had no choice. And then it started requiring it almost every time I visited the site. I have to provide a 2FA authentication code to view a repo?

I don't think so. 

### FOSS

As I get older I am getting less and less patient with companies like Apple, Microsoft and Google. It was one thing when Apple was producing good software but it is quite grating to have to deal with Apple's vendor lock-in with the quality of their software being so abysmally low. I have mentioned before that the main reason I stay on the Mac is decades of muscle memory and the quality of indie software on the platform. 

I also don't want to have to trust my code to a commercial enterprise that has proven that they view me as nothing other than a way to train an AI model to replace programmers like me. Codeberg is a non-profit and if I don't like how it is running things I can join the Codeberg e.V and vote on how they operate. 

### CLI

My commit to Codeberg was all done via the CLI. I have been wanting to start using the command line to do my git work for some time but Github seems to want to make it difficult to do. I understand that they have security issues that sites like Codeberg don't. They are owned by Microsoft though and it seems to me that they should have the resources to address that problem without shifting the work onto me. Doing a commit from the command line is actually quite easy to do [^3]. And it also gives you a much better sense of what is going on with the process and what code is being updated. 

I am not sure what the reasons are that Github removed password authentication for CLI commits [^4] but my impression of Github and Microsoft is such that I just assume that there is no good reason for it. 

## So I saw this web page...

I have been looking at Github alternatives for a while. I asked people on Mastodon for some suggestions and many of the folks recommended Codeberg. After checking it out, I got distracted, as I usually do, and didn't look into it any further. And then I saw a post on Mastodon from the Software Freedom Conservancy - [Give Up Github](https://sfconservancy.org/GiveUpGitHub/). This was the kick in the ass I needed to start moving from Github.

Currently I am putting my new code on Codeberg and will migrate my other repos as needed. Some will stay on Github for the immediate future, like the Alfred Workflows, because I don't want to break the links in the Gallery and Forum. Migrating from Github is a piece of cake. If a bit tedious. I did a test with a private codebase and it was sent over smoothly. So if/when I need to do so I can just transfer any projects from Github and keep working. 

I know that I will be missing features but those are primarily not features I have needed yet not do I suspect I will. I am not a professional and I don't commit code to OS projects or any other projects on Github. I will be able to say that I am not supporting them though and that will be a relief. 


[^1]: And code theft with their CoPilot system
[^2]: Codeberg directs me to my personal page without any bullshit
[^3]: I am still plagued by a reading issue so if I can do it then no-one has a reason that they can't as well
[^4]: Or why some of their own docs don't mention this