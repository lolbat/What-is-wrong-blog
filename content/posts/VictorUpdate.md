---
title: "Victor update"
date: 2023-04-07T17:48:18-06:00
draft: false
tags:
    - Victor
    - Hugo
    - Python
    - Textual
    - Rich
---

The last few days have been taken up with work on my Textual app - Victor. I mentioned it [in my last post](/posts/pycharm/) and I have been typing away getting new features included. This is how the app currently looks.

![The current Victor app](/images/victorupdate.jpg)

The app will read in the path to your local Hugo install and then read through the `content` directory looking for Markdown files. When you select a file it, currently, shows the title, data, draft value, filename and any tags you have assigned to the file. 

## Learning things

As noted previously, I had to figure out how to subclass the Textual `Directory Tree` class in order to add filtering to it. I can't recall if the current version, or an upcoming one, has filtering but it will be added to the class. The `load_directory` method gets overloaded to check each node that gets passed to it to remove hidden files and anything not a Markdown file.

The logo at the top left is an ASCII text is a subclass of the `Label` class. There is, currently, nothing complicated about the logo but I have plans to add some additional text treatments and perhaps some code to slowly change the colour of the logo as the application runs. 

The details for each file are presented in a Textual `TextLog` class. It can display almost all Rich and Textual styled data. In this instance, it is displaying a Rich Table object that is created by the `blogPostReader` class. The Table class can contain any Rich styled data and in this instance I am creating the rows in the table with Rich Text objects.  The class contains a Python dataclass to store the data about the Markdown file being read. I think that it would have been better to use a dictionary to store the data but this path lets me learn about the dataclass. 

## Plans

The plans for the app currently are:

1. Add the ability to save the file 
2. Add the ability to create a description key in the YAML frontmatter
3. Start and stop the Hugo server
4. Add some data to the top right area to show the server status

I suspect that the most difficult part of the next set of features will be starting the server and then getting details of its status. I suspect that there may be a library I can include to do that :-)
