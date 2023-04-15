---
title: "Create Obsidian Link Workflow"
date: 2023-04-15T12:29:10-06:00
draft: false
tags:
    - Alfred
    - Obsidian
    - Python
    - Advanced URI plugin
---

![Workflow Icon](images/CreateLink.png)

A while ago, I wrote about [an Alfred Workflow to open pages in an Obsidian Vault](posts/obsidiannotes/). It was part of the start of a more robust Workflow to let me store all of my bookmarks in Obsidian instead of my browser. I posted about it but I never put the Workflow on Github as I originally planned. This helps explain the lack of feedback I received about it. 

After I made that initial post I rewrote parts of the Workflow to allow the user to specify a folder that their bookmark pages are in as well as using some Alfred Automation actions to build a Markdown URL to the frontmost page in Safari. 

The Workflow is [now available on Github](https://github.com/lolbat/Alfred-Workflow-Create-Obsidian-Link). 

## The updates

![The first part of the Workflow](images/colpart1.jpg)

After being activated the Workflow uses the **Get Current Safari Tab** action to get the title and URL of the tab. This is passed to the next action as tab separated text. The Workflow then uses a small Python snippet to take the tab text and make a Markdown URL from it.

```python
pageDetails = "{query}"
pageParts = pageDetails.split('\t')
title = pageParts[0]
url = pageParts[1]

markdownURL = f"[{title}]({url})"

print(markdownURL)
``` 

The code could have been simplified a touch by saving the `title` and `url` variables in a single assignment.

```python
title, url = pageDetails.split('\t')
```

This is passed to the next action which copies the Markdown URL to the clipboard.

![Part the second](images/colpart2.jpg)

The Script Filter parses through the Vault path, and subfolder, provided by the user to get a list of all of the Markdown pages. It then lists those so that the user can select one. 

```python
vaultPathData = os.getenv("obVaultPath") 
vaultName = os.getenv("obVaultName")
linksFolder = os.getenv("obLinksFolder")

vaultPath = Path(vaultPathData)

if linksFolder != "":
	vaultPath = vaultPath / os.getenv("obLinksFolder")
```

First the code extracts the Workflow Configuration variables and then creates a `Path` to the Obsidian Vault. If the user provided a subfolder then that is appended to the `Path`.

The script then gets all of the Markdown files at the root of the path and then in any subdirectories.

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

All of the data is saved in a list with the directory name, full name and the filename without the extension. This is used to create a JSON file that is fed into the Script Filter. The arg value in this case is the Advanced URI obsidian: format path to the note that the user selects.

```python
#the JSON wrapper that we will be putting items into
jsonFileList = {"items": [] }

for file in fileList:
    thisJSONItem = copy.deepcopy(fileItem)
    thisJSONItem["title"] = file[2]
    thisJSONItem["subtitle"] = file[1]
    thisJSONItem["arg"] = "obsidian://advanced-uri?filepath=" + 
            urllib.parse.quote(file[2], safe='') + 
            "&viewmode=source&openmode=false"

    jsonFileList["items"].append(thisJSONItem)

#print out the JSON data        
print(json.dumps(jsonFileList))
``` 

Once the user selects a note the data in the argument is sent to the Open URL action which sends it out to Obsidian. 

## That URL

Obsidian is an Electron app and so it lacks even basic automation functionality on the Mac. To make up for it, Obsidian supports URL format actions to allow users to create links that will trigger actions in Obsidian. To my mind it is a half-assed solution but I guess it is better than nothing. 

The Workflow uses the [Advanced URI plugin](https://github.com/Vinzent03/obsidian-advanced-uri) to trigger actions in Obsidian. Well, it assumes that the user has it enabled and it formats URLs to match the specifications of that plugin. 

A sample URL for a note would be:

`obsidian://advanced-uri?filepath=/Users/Zac/Obsidian/Notes/someNote.md&viewmode=source&openmode=false`

The `viewmode` parameter lets you set the mode (edit or live) that is displayed when the page open. The `openmode` parameter determines if the note is opened in a new tab or an existing tab. Since the URL has the path to the actual note the plugin lets you open it directly without using the Vault name. 

It is a handy function but its not very human-friendly and really is best done inside a script where you don't have to worry about typos. 

## Usage

This was written for my own purposes and so the assumed usage might not match what anyone else thinks as being useful. Typically when I find a page I want to keep a URL to I trigger Alfred and the select the Workflow with the `col` keyword. I then select the Note that I want to open. I have 18 different Notes, some in subfolders, that I use to break URLs out by a broad type such as Python or Football Stat links. Once the Note is open I can then paste in the Markdown URL and edit it to add a note about what the URL is for and why it is useful. I also add tags at this point. 

I want to expand the Workflow so that I can integrate it with the [Markdownload extension](https://github.com/deathau/markdownload) or perhaps write some JXA to get more information about the page.  
