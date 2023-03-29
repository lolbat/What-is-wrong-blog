---
title: "Preflight for Hugo"
date: 2023-03-29T11:16:11-06:00
draft: false
tags:
    - Python
    - Hugo
    - Rich
    - YAML
---

So following up from [this morning's post](/posts/LearningALanguage/), I have finished the first version of my python preflight script. It had a few complications but in the end it came out working well.

## The problem

As I have mentioned a few times on this blog, I have an issue when uploading new blog posts. Typically I either forget to set `draft: false` in the post. My second most common issue is that I start to write something and then don't finish it for days. This means that the `date:` in the Hugo file is often a week old.

Both of these issues result in my posts not appearing on the blog. So I decided to write a short python script that could help me solve this.

## Preflight

In the prepress industry you typically 'preflight' a file before it gets sent to print. This is all done digitally now and there are special preflight software packages that will take PDFs or native files and test them to make sure that there are no missing fonts, that colours a defined correctly and 101 other possible problems. 

So I thought this might be a handy thing to have for my blog posts. Currently the code is very simple.

![Preflight](/images/console2.jpg)

The code opens the Markdown file and then parses the YAML frontmatter data. It checks to see if `draft:` is true or false and then it checks `date:` to see if it is today or not or some time in the dim, dim past. I may add some more features if need be but currently this does everything I need. I may work it into the [Hugo Workflow](posts/hugo-workflow/) I wrote for Alfred. 

## Complications

When you are new to an environment there are always things that can go wrong or that you won't be able to foresee based on your lack of experience. During the writing of this code I ran into a few issues. Happlily I was able to solve all of them.

### Cleaning up

So you know how sometimes you put in a hard-coded value for a variable that you are going to read in and then forget it is there and your results are always wonky because you didn't remove it and change the code to use the real date \<exhaused gasp\>?

Well I did that. 

### Timezones

The date format that Hugo uses, by default, in its posts contains a [UTC timezone](https://en.wikipedia.org/wiki/Coordinated_Universal_Time). By itself this isn't a big deal but the dates and times you create in your code do not contain this information unless you specifically ask for it. If you try to compare or subtract a datetime with a time zone and one without you get the following error.

```python
TypeError: can't compare offset-naive and offset-aware datetimes
```

In order to do comparisions you have to create a datetime object with UTC enabled.

```python
now_utc = datetime.datetime.now(timezone('UTC'))
```

And after that you are good to go. 

### YAML library

The code uses the [Python Frontmatter library](https://python-frontmatter.readthedocs.io/en/latest/index.html) to extract the YAML frontmatter. It is a well-documented and easy to use library. I was running into issues with it though as the data I was getting back was giving me incorrect results. It turns out that the YAML library that Frontmatter uses is coercing the values it finds into datetime and boolean types. So if you are assuming that you will be getting strings you are in for a surprise.

I checked out the docs for the YAML library but couldn't find any mention of this behaviour [^1] but after testing it all in a Jupyter Notebook I was able to go back and successfully fix the issues. It is a handy thing for the YAML library to do and really just reinforces that you need to test data with `type()` if you don't know how it is being sent back to you. 

### Rich

Not exactly a complication. I am using the [Rich library](https://rich.readthedocs.io/en/stable/) to colour code the results. I typically find it easy to misread results in the console and so I am using Rich to let me make the text red or green depending on the results. Using the library was quite easy [^2] and I was able to get it to start sending coloured text to the console.

![Rich code](/images/rich.jpg)

One issue that isn't addressed in the docs (see footnote 1) is that the formatting for the `Text` string you are using continues even if you append new characters to it. So this initial line

```python
text = Text("Preflight results\n", style="bold dodger_blue1 reverse")
```

styles the text as reverse characters on a dodger blue background. If you append a new line to this variable it continues to use the style. I was originally just going to append and style everything in one string and then print it but that was starting to be complicated. Printing the text one line at a time solved the problem. 

Rich does have a [Console Markup style](https://rich.readthedocs.io/en/stable/markup.html) that you can use to add style tags to your text but I found it easier to just break the text up into individual parts and print them. 

## Its alive!

So the code works [^3] and it even includes the [argparse library](https://docs.python.org/3/library/argparse.html) to define and proccess the command line arguments. Its quite a handy library and quite simple to use. Once again I found it a joy to work with Python. The code was easy to write and I have mypy, Flake8 and Black enabled in Nova so I get useful prompts while I am coding. Several times I needed to try to figure out how to fix an issue and it was a matter of opening a Jupyter Notebook and testing out various things until it worked. I am looking into whether or not I can add a Variable Inspector to the Electron based Jupyter Notebook  app I use but if not I can use the one that runs via Anaconda. 

And the best thing about Python so far? No errors because I forgot to end a line with a `;`. If that isn't reason enough to never use JavaScript again I don't know what is. 

![Checking my work](/images/preflight.jpg)

## Footnotes

[^1]: It is not as if I have a great track record of reading online docs.

[^2]: I can see why it is so popular.

[^3]: For some value of "works".