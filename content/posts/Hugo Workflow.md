---
title: "Combined Hugo Workflow"
date: 2023-03-22T11:11:07-06:00
draft: false
tags:
    - Alfred
    - Hugo
    - Python
    - iTerm
---

![The entire workflow](/images/hugoworkflow/workflowTitle.jpeg)

I seem to have settled on using [Hugo](https://gohugo.io/) as my blogging platform. Since I have started using Alfred, I have put together one or two Workflows to help make it easier to create and edit posts. Those worked well but there were two problems. All of the paths in the scripts were hard-coded and the actions to create or edit content had different scripts for the two content types on my blog. I wanted to solve these issues and also add a few new tools at the same time. 

**Update**: the Workflow is now [available on Github](https://github.com/lolbat/Alfred-Hugo-Workflow).

## One keyword

My first goal was to create a workflow that had a single entry point. Once I had entered my keyword, `hugo` in this case, I wanted to hit ⏎ and then be presented with a list of commands in the Workflow. This is easier to do in Alfred than you would think. You add an Input to your Workflow with a keyword and you can then link it to further Inputs and objects. As long as these subsequent objects do not have a keyword added to them you can still have them activated as part of the Workflow. 

This is the beginning of the Workflow.

![The entry to the workflow](/images/hugoworkflow/workflowStartNumbered.jpg)

It starts with a Keyword Input **(1)**. It has the `hugo` keyword set and a title but nothing else. This links to a List Filter **(2)** which is used to let the user select which command they would like to execute. 

![The list filter showing the commands](/images/hugoworkflow/commandListFilter.jpg)

Each command is added to the List Filter with a title and subtitle that are shown in the Alfred UI and an `arg` that will be passed along to the rest of the workflow [^1]. When the user selects a command, the `arg` is sent to a Conditional object that will send the Workflow branching depending on which command was selected. 

## Variables

The other goal was to take out all of the hardcoded paths and assumptions about applications and replace them with [Workflow environmental variables](https://www.alfredapp.com/help/workflows/advanced/variables/#environment). 

![The Workflow variables](/images/hugoworkflow/workflowSettings.jpg)

Alfred allows you to set up a Workflow with a series of user-defined variables that can then be accessed from within the objects in your workflow. In this instance, they will be used to allow the user to specify the paths to their content directory and the root Hugo installation. As well, the path to the Hugo executable and the application that they want to use as their Markdown editor. 

## The commands

This first iteration of the Hugo Workflow has five commands.

1. Add content
2. Create date
3. Start Hugo server
4. Stop Hugo server
5. Edit content

I will most likely add more in the future but this is the base set of commands that I thought would be useful. 

## Asking for a Date

The simplest command in the Workflow is to create a date to use in the `date:` field in the frontmatter of each Hugo post. I don't always finish a post on the day it was created [^2] and so I need to update the frontmatter with a new date. Hugo uses the [Go](https://go.dev/) [Date format](https://pkg.go.dev/time#pkg-constants), which is RFC 3339,  and includes the time zone. It is simpler to build an action to get the date and time for you than it is to mess with it.

![Date process](/images/hugoworkflow/dateNumbered.jpg)

The Run Script object **(1)** is a shell script that echos the date in the correct format `echo date -Iseconds`. This is passed to a Copy to Clipboard object **(2)** which does that very thing and then the user is given a notification **(3)** to tell them that the date is available in the clipboard. 

The most difficult part of this task was finding the shell command to get the date in the correct format. 

## Windows 95 theme music

There are many ways to preview Markdown content but I find that if I am writing a long post that I like to have it viewed using the Hugo server. It is also handy to be able to quickly start the server when you want to do edits or work on new features.

![Starting the Hugo server](/images/hugoworkflow/startNumbered.jpg)

This process turned out to be more difficult than I thought that it would. I had initially reasoned  that I could issue the command to start the server from within a Run Script object. The complicating factor is that the Hugo server is a persistent process and if you use the Run Script object then the shell script you write is run from _within_ Alfred. The Hugo server takes a small portion of time to start running and it doesn't conclude and so appending any actions or objects in your Workflow after that won't work.

Luckily, Alfred has the [Terminal Command](https://www.alfredapp.com/help/workflows/actions/terminal-command/) object. This will open a Terminal and send the command you want to execute to it. This puts the running of the command outside of Alfred and frees it up to continue running.

Another small issue, is that I am running [iTerm 2](https://iterm2.com/) on my Mac and not the default Terminal application. Alfred needs a script added to its Preferences to send commands to iTerm but it is **not** the script that Alfred inserts if you select 'Custom' from the application dropdown menu. Instead you need to [use an AppleScript](https://github.com/vitorgalvao/custom-alfred-iterm-scripts) that Vítor Galvão posted to Github. It took me a bit of time to realise this.

Once I had those complications figured out [^3 ], the command came together quickly. The initial Run Script object **(1)** takes the environment variables to the Hugo command and the root directory to create a command string.

```bash
echo "${hugoCommandPath} server -s ${hugoBlogPath}"
```

The `${}` structure tells Alfred to substitute the values for the variables in the string. The `echo` command will send the command to the Terminal Command object **(2)**. The Terminal Command simply executes the `{query}`. This will open an instance of your Terminal of choice to run the command. A Delay object **(3)** has been added to allow for the Hugo server to fully start up and then the Open URL object **(4)** will open the default URL for the Hugo server. 

There is no notification for this command as the browser popping up a window and showing the blog should be notification enough. 

## Shut it down!

Shutting down the server is, as you would expect, much simpler.

![Stop the server](/images/hugoworkflow/stopNumbered.jpg)

The Run Script object **(1)** issues a `killall` command.

```bash
killall -9 hugo
```

and then a Notification **(2)** is posted so the user is aware that the server is no longer running. 

## Something new

Hugo uses templates for each type of content that you want to include on your blog. Each type of blog post has its own directory under the `content` directory and a template in the `archetypes` directory. When you want to create a new blog post, you send the Hugo application a command, with the archetype of the post, and it uses the appropriate template to create a new file and put it in the appropriate directory. 

The format for the command is:

```bash
hugo new <content type>/<file name>
```

My own blog only has two types of content - posts and links. You can create as many types as you need though and so the workflow needs to be able to let the user expand the possible content types to match their own blog.

![Adding new content](/images/hugoworkflow/addContent.jpg)

First the user has to select the type of content they want to create. The first item in this part of the Workflow is a List Filter **(1)** that contains an entry for each content type in the blog.

![Content types](/images/hugoworkflow/AddContentListFilter.jpg)

The `args` value in this case **needs** to match the name of the content type in Hugo. If your blog posts are in the `articles` directory then the `args` in the List Filter needs to be "articles". Once the user selects a content type, that value is passed to the Args & Vars object **(2)** where it is stored in the `contentType` variable. It will be required later when the command for the Hugo application is built. 

Next a Keyword input **(3)**  asks for the file name for the new content being created. This is all passed to the Run Script object **(4)** which uses the variables in a shell script. 

![Add content shell script](/images/hugoworkflow/addShellScript.jpg)

As before, the variables are substituted by Alfred into the script before it is run. One of the benefits of using Hugo is that you don't need to know anything other than the type of content you want to create. Hugo handles the rest for you.

## Making a change

The workflow elements to edit a content item are only three steps but it is quite a bit more complicated than adding content.

![Editing content](/images/hugoworkflow/editNumbered.jpg)

One of the ways to provide a list of files to the user in an Alfred Workflow is to use the File Filter input. In this instance, I want to not have the directory that is being read to be hardcoded in an input. The user could have their blog files stored anywhere. The File Filter can search through multiple directories if you want it to, and for multiple file types, but all of those need to be set ahead of time in the input. You can't provide them via an environment variable or the `{query}`.

The other option is to use a [Script Filter input](https://www.alfredapp.com/help/workflows/inputs/script-filter/). The Script Filter is quite powerful because it lets you write a script to return a JSON object with the files you want to show to the user described in it. This is incredible because you can gather any types of files, from any locations on the computer and it is all transparent to the user of the workflow.

The issue is writing the script. 

### We're talking about language

A bit of a digression while I [talk about language](https://www.youtube.com/watch?v=3MWpHQQ-wQg) for a moment. I could easily [^4] have written a shell script or a [NodeJS](https://nodejs.org/) script to do this work.  The problem is that I find anything other than basic shell scripts to be almost incomprehensible and I don't know that I want to make Node a precondition for running this Workflow. I have many Node scripts that do a similar job but when you use Node it comes with a dependency chain that can be onerous. 

I also could have written it is JXA or even basic Javascript but, if I am being honest, I don't really care much for Javascript. Which is odd in that it has been the primary language that I have been using for a few years now. 

I decided to try to put together a script to read the contents of a particular content directory using Python. There were two reasons for this. It seems to me that it is a more commonly available language on many Macs and it is easier to add and configure. The problem is that I didn't know how to use Python.

So the last week has been spent getting myself familiar enough with Python to write the script and then add it to my Alfred Workflow. What is even more amazing is that the Python code ran correctly the first time when I wrote it in the [Spyder IDE](https://www.spyder-ide.org/) and also the first time I ran it in Alfred. That alone should speak volumes about the ease of learning Python. 

### And we're back

The first element in this part of the workflow is a List Filter **(1)** that is identical, except for the Title and Subtitle, to the one in the _Add Content_ command. The only difference is that this command can pass the content type selected by the user directly to the Script Filter **(2)** in the next step. 

![The Script Filter](/images/hugoworkflow/scriptFilter.jpg)

### The script

The [python script](/images/hugoworkflow/pythonCode.jpg) [^5] starts out by creating a few global variables that define the path to the `content` directory as well as a path to the specific content that the user wants to edit. The `hugoContentPath` variable is part of the workflow environment variables and needs to be accessed using the `os.getenv()` function. The `{query}` is accessed as it usually is though [^6]. 

Next a variable, `fileItem`, is created which has the basic structure of each item in the JSON object that we are going to build. As well, another variable, `jsonFileList`, is created which has the `item` list that will be used to append each file item to. 

`os.listdir()` is then called with the path to the appropriate directory and if there are any files each is processed in turn. The `listdir()` function returns a list with the filenames of all of the files in the directory. This means that the code needs to test for any 'hidden' files and ignore them. A deep copy of the `fileItem` is made [^7] and then the appropriate keys in the new file item are filled with the name of the file and a path to it. 

This file item is then appended to the `jsonFileList.items` key and when all the files have been processed the results are printed as a JSON object [^8] for the Script Filter to use. When the user selects a file it is passed to the Run Script **(3)** object which opens the file in the user's preferred Markdown editor using the `open` command.

```bash
open -a "${hugoEditor}" "{query}"
```

## Some new tricks

As part of building this workflow I learned a few new things about Alfred. 

### Clearing the UI

You may notice that some of the objects in the Workflow have a blue icon on their incoming arrow. This indicates that the object has an [Inbound Configuration](https://www.alfredapp.com/help/workflows/inbound-configuration/). This is enabled via a right click on the object and selecting the 'Inbound Configuration' option.

The Inbound Configuration dialog has options to allow you to configure the object to act in a 'keyword' mode and let you access that object directly. Not shown in the help page is the 'Custom Argument' option that allows you to:

> Set a custom input argument for this object. You can use both {query} and {var:} placeholders.

In my case I am enabling it but not adding a value to the field. This tells Alfred to clear the contents of the entry field in the UI for my new value which just happens to be nothing. This lets you clear out any previous content which is handy for a multi-step workflow like this where you want to show the user new options based on their previous selections.

### Internal versus external script execution

When you use a Run Script object Alfred will process the commands in the script internally. This has two implications. The first is that it means that Alfred has direct access to more of the variables in the Workflow and, more importantly, it means that some scripts won't run effectively in a Run Script object.

In this instance it had an impact on how the Hugo server command is executed. The server runs continuously and reports back whenever any files change in the directory that it is running from. This causes all sorts of problems if you access it via a Run Script object but the Terminal Command doesn't have access to the same variables that the Run Script object does which is why this Workflow creates the command and then echos it to the Terminal Command to execute.

### Variables

I still don't think that I have the concept entirely at my command but this Workflow has given me a better understanding of how to access variables in the various objects that you can use in a Workflow. I also think that I have a better grasp on the difference in use between args and query. This is one area of the application that I think is not as well documented but it is something that you can work through and gain a better understanding of. 

## Next steps

My next task is to finish writing the documentation for the Workflow and then post it to Github and the Alfred forum. I already have all of the screenshots for the Readme and the beginnings of the documentation. I also have a few ideas for some additional features but I will wait to add those until I have dealt with any errors that people report if I find anyone to test this initial version. 

I am currently using this as my primary way to access the main features of Hugo that I use as well as create and edit new content. This blog post was created using it, the server was started to preview the post using the Workflow and I have edited several documents with it. And, I also changed my Markdown editor using the environment variables and didn't have to change any code. 

## Footnotes

[^1]: It could be saved for later use but I haven't seen a need for that yet. 

[^2]: Like this post for instance.

[^3 ]: Thanks to Vítor on the Alfred forum. 

[^4]: For some value of easy.

[^5]: With an extraneous function I thought I needed but didn't.

[^6]: This is actually an inconsistency that I think that the Alfred devs should change.

[^7]: A deep copy needs to be made to ensure that the dictionary is based by value and not by reference.

[^8]: I am not sure if this is actually necessary. I will test it later to see if I can just pass a string representation of the JSON object. 