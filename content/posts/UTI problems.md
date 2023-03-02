---
title: UTI Problems
date: 2023-03-01T22:59:58.969Z
draft: false
tags:
  - Mac
  - Markdown
  - Alfred
---

The underpinnings of an operating system can be mysterious and complex. This typically isn't a problem  if the system is working correctly as you will never need to worry yourself with any of those messy parts. When they start to fail you will, unfortunately, need to dig underneath the calm exterior of your OS into the largely text-based underpinnings that make it work. It is never pretty.

## Our story begins

I wanted to do a very simple thing in Alfred. I put a [File Filter](https://www.alfredapp.com/help/workflows/inputs/file-filter/) object and connected it to an [Open File](https://www.alfredapp.com/help/workflows/actions/open-file/) object. The File Filter was pointed to my project directory and asked it to look for Markdown files by dragging one of the files from that directory to the File Filter. 

![A file type dialog from Alfred showing the public.markdown file type](/images/firstUTI.jpg)

What this small and simple workflow should have done was let me filter through the Markdown files in my project directory and then open the one I selected. 

It didn't do anything. 

I thought, perhaps, that I was just not using the objects correctly and so I generated a second version of the same Workflow to just look for files anywhere. This Workflow worked. After fiddling around it appears that the problem was (is?) that the system underpinning the Open File action wasn't working correctly. I asked Alfred to look for `public.markdown` files but when Alfred asked the system for those files the system just shrugged.

Luckily for me[^1] I had run into this issue before.  

## The perilous UTI

Near the end of 2021 I started to run  into issues with a QuickLook extension called [Peek](https://www.bigzlabs.com/peek.html). I use it primarily to preview Markdown and a few other file types. For some reason though it stopped working for Markdown files. The developer was quite perplexed, but very helpful, and in the end it was determined that the problem was a result of some other app declaring a new UTI [^2] for Markdown files and causing Peek to no longer work. It turns out that this issue was causing problems with almost everyone that had a QuickLook extension that would preview Markdown files. Big Z Labs did an update and the problem was fixed.

## The peril returns

I assumed that the issue here was similar. Despite the files only being marked as `public.markdown` and only have one default application the OS was not returning them as Markdown files when Alfred asked for them because they were missing one or more of the other UTIs in the system. I knew what the issue was but the real challenge was trying to find all of the UTIs that were declared for the Markdown file type. 

My first round of searches lead me to [this thread on stackoverflow](https://stackoverflow.com/questions/12554187/list-search-all-existing-utis-uniform-type-identifiers). One of the responses listed an OS X command line tool you could use to dump a list of the UTIs.

``` bash
/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Versions/A/Support/lsregister -dump | grep 'uti:' | awk '{ print $2 }' | sort | uniq
```

It creates an utterly ugly pile of text and I searched through it to find all of the UTIs that were connected with Markdown files.

* net.daringfireball.markdown
* com.unknown.md
* net.daringfireball
* public.markdown

I went back into Alfred and manually added those UTIs and the Workflow finally did what I wanted. 

![The File Filter action from Alfred with the four Mac UTIs added to the File Types section](/images/secondUTI.jpg)

Huzzah!

## The story does not end there

There were a few problems with my solution. I had to dig through a lot of text to find the information and I also had an idea of what I was looking for. What if I didn't know? How could I find this out if, at some point in the future, some other app registered a UTI and suddenly I couldn't search for `.svg` files? If you are brave (crazy) enough to try the `lsregister` command then you will see that not only do many apps declare that they can deal with certain file types but they also have multiple extensions applied to those files. 

So I needed a better way to get the UTI information and in a format that allowed me to do a simple search and replace to get the information. After many, many searches [^3] I found a command line application called [duti](http://duti.org) [^4]. It is available as a download and a source code archive but if you have [Homebrew](https://brew.sh) on your Mac then you can install it with a quick `brew install duti`.

The main aim of the application is to actually _set_ UTI values but it will also list them for a specific file type. The flag to do that `-e` is actually undocumented and was only found by someone looking in the source code.

So with duti installed you can issue the following command in the Terminal:

`duti -e .md |  grep UTTypeIdentifier | awk '{ print $3 }'`

Which will give you back the following:

``` bash
public.markdown
com.unknown.md
net.daringfireball.markdown
net.daringfireball
```

The command above will take the results of `duti -e .svg` and then pipes it to the grep command which will look for lines with UTTypeIdentifier in them. Those lines look like this:

`UTTypeIdentifier = net.daringfireball.markdown`

Then you can use awk to print out the third item in the list which is the UTI that we are looking for.

If you use Alfred you can [download a Workflow](https://github.com/lolbat/Alfred-Workflow-Read-UTI) that will do all this dirty work for you. 

### Footnotes

[^1]: Yes, I know that I have a strange idea of what lucky means. 

[^2]: UTI stands , on the Mac, for Universal Type Identifiers. If you are going to do a search for them make sure you add the - Urinary modifier. 

[^3]: And reading far too many technical pages on obscure command line tools. 

[^4]: I am just going to assume that this is a 'dooty' joke. 