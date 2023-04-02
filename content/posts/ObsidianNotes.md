---
title: "Opening Obsidian notes"
date: 2023-04-01T21:03:39-06:00
draft: true
tags:
    - Obsidian
    - Alfred
    - Python
---

A while back I decided that the best place for my bookmarks was in Obsidian. They look better there, I can tag then easily and I have also split them into distinct pages. Simple enough but I didn't have an easy way to get the bookmarks into Obsidian from my browser. 

## Too much information

There were a few problems that I had to overcome. The first is that I was initially going to use the [Markdownload extension](https://github.com/deathau/markdownload) for Safari. It claims to be able to open Obsidian notes directly but this doesn't appear to work on the Mac. It can still create a Markdown formatted link based on the name and URL of a page in a tab as well as any text I have selected.

Like so:
```markdown
[deathau/markdownload](https://github.com/deathau/markdownload)
A Firefox and Google Chrome extension to clip websites and 
download them into a readable markdown file.
```

I would rather use a macro or some feature in Alfred to build the Markdown text but there is so much information in page titles and typically a lot of crap that you don't need. This will work until I can come up with a better solution.

I still needed to open the appropriate Obsidian note to then paste that link into. There are a few existing Alfred Workflows for Obsidian. Chris Grieser has an incredible one called [Shimmering Obsidian](https://github.com/chrisgrieser/shimmering-obsidian). The problem, for me, is that it has far too many features when I want to do one simple thing. 

What I wanted was a Workflow that would show me the list of all of the Markdown pages in a Vault and then let me select one. Then it could be opened and the pasting could begin.

## The Workflow

I wanted to use Alfred for this particular workflow for two reasons. I like being able to quickly type a few characters to start a Workflow and I also have suspicions that I will expand this Workflow at a later date [^1]. I started an empty Workflow in Alfred and then clicked on the Workflow Configuration button. Currently I just want to store the path to the Vault. 

### An aside

Alfred stores file and directory paths starting with a tilde [^2].

`~/Documents/Obsidian Vaults/Note and Links`

Python is not always that jazzed about using these types of paths and so when the user supplied path is read from Alfred it has to be resolved into a posix path.

`/Users/Zac/Documents/Obsidian Vaults/Note and Links`

Happily there is a method in the python pathlib to do this. 

### Building the Workflow

There are three parts to this Workflow.

![The Workflow](/images/obsidianworkflow.jpg)

First is the Keyword Input that is used to trigger it. I chose `obo` as a keyword after being unable to type my original keyword. After it is triggered the Script Filter is run. This is similar to the one that I used in the [Hugo Workflow](/posts/hugo-workflow/) I built. 

```python
import os
import json
import copy
from pathlib import Path
import urllib.parse

vaultPathData = os.getenv("obVaultPath") 
vaultName = os.getenv("obVaultName") 

vaultPath = Path(vaultPathData)
vaultPath = vaultPath.resolve()

fileList = []
```

In addition to the libraries for the previous script, this new python script adds pathlib and the urllib.parse library. I use pathlib as it was suggested to me on Mastadon as a much simpler way to work with paths. And the urllib.parse library will be used to encode the obsidian URL that will open the note.

Near the end of this code sample is where the path from Alfred is turned into a posix path.

`vaultPath = vaultPath.resolve()`

Then the pathlib and glob are used to get all of the Markdown files. This is done in two steps. First any files at the root of the Vault and then any that are in any directories

```python
#first get the root level files
rootFiles = vaultPath.glob('*.md')

for mdFile in rootFiles:
    fileList.append(['', mdFile.name, mdFile.stem])

#now the files in any directories
directoryFiles = vaultPath.rglob('*.md')

for mdFile in directoryFiles:
    fileList.append([mdFile.parts[-2], mdFile.name, mdFile.stem])
```

A list is created to store a series of lists for each file. It stores the folder name, the name of the file and the stem. The stem is the filename without the extension. 

This is all then parsed and a JSON file is created and used by the Script Filter.

```python
jsonFileList = {"items": [] }

for file in fileList:
    thisJSONItem = copy.deepcopy(fileItem)
    thisJSONItem["title"] = file[2]
    thisJSONItem["subtitle"] = file[1]
    thisJSONItem["arg"] = "obsidian://advanced-uri?filepath=" + 
        urllib.parse.quote(file[2], safe='')

    jsonFileList["items"].append(thisJSONItem)
        
print(json.dumps(jsonFileList))
```

The arg is the Obsidian Advanced URI to the note. This will be sent from the Script Filter to the Open URL object. 

## Changes

The action works well but I will be doing some changes. I have all of my links in a single folder and I will add a file path to that directory to cut down on the extraneous file names in the list. I also want to add a List Filter at the beginning of the Workflow to give me some options to view all of the notes or just specific folders [^3]. As with most of my Workflows, I suspect this will change as I use it more and add or subtract features.


[^1]: Shock! Incredulity!
[^2]: I am sure there is a technical term for it
[^3]: It will probably have to be a Script Filter now that I think about it. 