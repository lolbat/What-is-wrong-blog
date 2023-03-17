---
title: "Making Footnotes"
date: 2023-03-17T15:59:41-06:00
draft: false
tags:
    - Keyboard Maestro
    - Nota
    - regular expressions
---

I like footnotes [^1]. Part of the blame for this has to lay with [Terry Pratchett](https://en.wikipedia.org/wiki/Terry_Pratchett) and his [Discworld novels](https://en.wikipedia.org/wiki/Discworld). Pratchett had a propensity for adding footnotes to his stories to, occasionally, add details to a line but, most often, to continue a joke or to sometimes ramble on for a half page. They were marvellous. I don't have anywhere the same skill with them that he does, but they amuse me to no end. 

My Markdown editor of choice, Nota, does not have a command to add footnotes to a file. It understands them and can render them correctly, but sadly does not make it easier to add them to a file as you write [^2]. As I wanted to have some ability to do, so I decided to make an action to try to automate the process for doing so.  Nota is an Electron app and so doesn't have any support for Shortcuts or AppleScript. Brute force was called for.

## Keyboard Maestro to the rescue

This is the type of task that Keyboard Maestro excels at. Activating apps and using keyboard accelerators and faux key presses to manipulate an app. My KB macro would have to do a few things:

1. Get the text of the current document in Nota
2. Determine what was the highest value of footnote in the post
3. Insert a new footnote at the current insertion point
4. Go to the end of the file and insert a footnote definition

### Getting the current text

The first part of the macro is very simple. It needs to keep track of the highest value of bookmark, so there is a variable declared `footNotes` and this is set to 0. Next, Nota is activated and KB sends the **⌘-A** and then the **⌘-C** keyboard accelerators. We now have the text from the window in the Clipboard.

![The first few steps](/images/Footnotes1.jpg)

### Determine the highest footnote

This part is a bit trickier. Keyboard Maestro has a [For Each action](https://wiki.keyboardmaestro.com/action/For_Each) that can be used in several different ways. It can look for lines, JSON and Dictionary keys, Finder selections, substrings and many more. This action uses the For Each to search for specific substrings that are matches for a regular expression.

The regex that will be used is `(?m)^\[\^(\d+)\]`. Let's rip it apart and explain it.

The first section `(?m)` tells KB that this regex will search over multiple lines. After that is the `^` beginning of line indicator, which asks KB to only match entries that are at the beginning of a line. Regular expressions have many special characters in them, and so if you are looking for a string that has any of them in it, you have to escape the characters with a forward slash ` \ `. 

So the string ` \[\^ `  is actually asking Keyboard Maestro to look to ` [^ ` but those are special characters, and so they need to be escaped. Next is ` (\d+) `. The brackets in this string mark the data within it as a [capture group](https://www.regular-expressions.info/refcapture.html). A capture group is how you tell the regular expression engine which data you want to return from the match it finds. So in a block of text like:

```Markdown
[^1]: This is a footnote
This isn't
[^2]: This is a second footnote
```

 The regular expression will match `[^1]` and `[^2]` but it will return the values 1 and 2.

The `\d+` part of the expression just looks for 1 or more numbers. And the final part requires there to be a closing square bracket in the match. 

An app like [Patterns](https://krillapps.com/patterns/) or the [Regex101 website](https://regex101.com/) are invaluable tools for helping to fine-tune your regular expressions. 

#### A Keyboard Maestro peculiarity

Let's take a look at the For Each action from Keyboard Maestro.

![For Each action](/images/footnotes2.jpg)

The first step in the action is to define the regex that will be used to create a list of substrings. KB doesn't specify that it is looking for a regular expression, but Peter Lewis, the developer, explained that anything looking for a match requires a regex. Everything else is a string.

If you have used this type of dialog in other applications, you would think that the substrings that the For Each action creates would be the matches to the regular expression. This isn't the case. Keyboard Maestro passes along a set of lines or positions where it found the match. This is why the action then searches each variable that is returned with the **same** regular expression. It is at this point that the specific data for the match is found and stored. 

#### Back to the story

This macro makes the assumption that the footnotes are numbered sequentially. That is just how I write, and this was written for my use and not for public release. It isn't necessarily a problem as long as the numbers are unique since, as part of the process of rendering to HTML, Markdown will number them all correctly. At this point in the writing process, they just need to be unique, so the return link on the footnote goes to the correct spot.

Once KB has finished processing through each match, it then takes that number, adds one to it, and then saves that in the `footNotes` variable. Then a string is created with the Markdown for the new footnote.

![Strings and adding](/images/footnotes3.jpg)

### The 'hacky' part

The rest of the macro is pure keyboard hackery. The application is called Keyboard Maestro for a reason.

![Keys!](/images/footnotes4.jpg)

Nota is still active, so the Esc key will dismiss the selection and then the macro sends **⌘-V** to paste in the new footnote [^3]. Then there is more hackery. The **⌘-↓** key press will send the insert point to the end of the document. A few **⏎** keys to add some space and then another **⌘-V** to paste in the Markdown code and an `:` character and then a space. The insertion point is now exactly where it needs to be to start typing in the details of the footnote. 

### Activation

There are quite a few ways that a macro in Keyboard Maestro can be activated. In this case, I have chosen to add it to the Nota application menu and to also have it triggered when I type `%foot`. If you have a text trigger, then KB will also delete the trigger text for you. 

### Tricky parts

This was, all things considered, a fairly basic macro. I did spend quite a lot of time trying to figure out the For Each action. It wasn't until Automation _dai sensai_ Stephen Millard answered [my question](https://talk.automators.fm/t/regex-and-for-each-not-working-as-i-would-expect/15395) on the Automators Talk forum that I was able to get it working. I'll quote some of his answer here:

> The variable footNoteNumbers isn’t receiving a capture group, it is the variable assigned the value of each regular expression match, in order.

> The capture group in the regular expression is (d+), and would correspond to the digit within the match, but this is not what is mapped to the variable. _In fact, nothing is done with the group during the collection generation. It is effectively discarded._ (emphasis added)

So the best way to look at how the regex works in the For Each action is that it finds where the substring is located and that you then need to use the same regex to get the text of your match to be placed into variables. 

It isn't obvious until you have it explained to you, but it does make sense after that. But after all of that, I now have a very fast macro that can add footnotes to Nota even though it is an Electron app.

## Footnotes

[^1]: No shit.

[^2]: Thank the sweet lord!

[^3]: The macro assumes that it is being called from the insertion point. 