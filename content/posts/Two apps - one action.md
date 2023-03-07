---
title: "Two Apps - One Action"
date: 2023-03-06T11:42:28-07:00
draft: false
tags:
    - Alfred
    - Keyboard Maestro
    - Shortcuts
    - JavaScript
    - AppleScript
    - FreeForm
---

A little while ago I wrote about a Shortcut that I used to [lay out images of Scrabble tiles](creating-anagrams/) [^1] in FreeForm to help solve anagrams. As part of that post I said:

> I then looked at doing it in Keyboard Maestro but I couldn’t seem to find a way to iterate over each character in a string.

This turned out to not be true at all. Well, the part about me not being able to find a way to do it was certainly true. You can indeed get Keyboard Maestro to iterate over all of the characters in a string and so I am able to replicate the action as a KB macro. 

And as I have been working my way through [Alfred](https://www.alfredapp.com) to learn that system I thought that it would be a fun idea [^2] to create the same action in three different apps and compare them all. The Shortcut version works, a bit slowly, but I'm always interested in trying to see how different environments handle tasks. I've already shown [the Shortcut I made](/posts/creating-anagrams/) for this previously so lets start off by looking at how to replicate this in Keyboard Maestro.

## Keyboard Maestro

Keyboard Maestro builds macros by adding actions that are then executed sequentially. And this is a very linear action that will suit KM. This workflow also requires access to the system clipboard. Freeform isn't scriptable [^6] nor does it support Shortcuts so we have no external access to it. Luckily this is something that Keyboard Maestro excels at. 

The simplest part of the macro is to store the path to the directory that has the letters in it and then ask the user for the letters they would like to use [^3].

![The first steps](/images/KMStep1.jpg)

The macro creates a variable, `imagePath`, to store the path to the image directory and then uses the Prompt for User Input action to pop up a dialog asking for the letters to use in the anagram. 

Next the Filter action will take the input from the dialog, `tileLetters`, and turn them all to uppercase letters. The files all use the uppercase letter in the filename. Then FreeForm is activated and brought to the front.

![KM Step 2](/images/KMStep2.jpg)

Finally the heart of the macro. My earlier issue with doing this task in Keyboard Maestro was that I couldn't see how to iterate over each letter that the user supplied. The [For Each](https://wiki.keyboardmaestro.com/action/For_Each) action in KB has several options but none for characters. It turns out that it can search substrings [based on regex patterns](https://wiki.keyboardmaestro.com/Regular_Expressions#Examples). And the simplest substring regex is the '.' pattern which matches any one character.

The For Each action works on a set of collections. These can be lines of text, Dictionary keys, Finder selections and substrings. In this case we want the substring collection and we provide a regular expression to create a substring that is each letter in the string.
 
![KM Step 3](/images/KMStep3.jpg)

First we take the letter (as stored in the `tileLetters` variable) and use it to create a file path [^4]. Then we pass that path to the Set System Clipboard action [^5] and paste. We previously activated Freeform and brought it to the front so it will be the target of the paste events. 

![KM final result](/images/KMFinal.jpg)

This is the type of workflow action that Keyboard Maestro really excels at. Freeform has no scripting support at all but we can still make a macro in KM that can still interact with the app nonetheless. This is a benefit of the long history of the application as it was written well before many of the technologies that we're using were common. Writing macros by getting Keyboard Maestro or some equivalent to click locations and send keypresses was more common that writing JavaScript or shell scripts. 

## Alfred

As you would expect, the Alfred Workflow for this task is much different. The visual system Alfred uses lets you create (and follow) branching execution flow much easier. That isn't relevant in this workflow though. Alfred currently has fewer actions than Keyboard Maestro so this Workflow will lean on scripts more than the KM macro. Whether this is a good or a bad thing depends on your familiarity with, and ease of use, in coding. 

Here is the Alfred Workflow in full. I've numbered the steps.

![The full Alfred Workflow](/images/AlfredWorkflowAnagrams.jpg)

1. The Keyword Input used to trigger the Workflow. It will take a string of letters to use
2. A Transform object that will change all of the text to uppercase
3. A JavaScript to split the arguments sent by the Transform utility into words and then letters to build the paths to each letter image
4. A Split Args object to split the string sent previously into individual file paths and also remove any blanks
5. The final AppleScript which will activate Freeform and the copy each file to the clipboard and paste it into Freeform

![Alfred Anagram keyword input](/images/AlfredAnagramUOI.jpg)

The Keyword Input starts the Workflow and provides some feedback to the user to tell them what data they need to enter. It requires an argument that is sent to the Transform object to change all of the letters to uppercase. The Transform object has no options we can use to help error check the argument being sent to it.

All of these letters are sent to the Run Script object that has a JavaScript function. 

![Anagram JS code](/images/AnagramJSCode.jpg)

The script splits the text sent by spaces which eliminates any possibility that we get a space used to create an invalid file path. It then create a file path using the letter, the .png extension and the directory path to the letter png files. This is all appended into a string with comma delimiters.

All of this data is passed to the Split Args object which will split the string into individual arguments and also remove any blank items.

![Split Args](/images/AnagramSplitArgs.jpg)

Finally all of the file paths are sent to a final Run Script object that has an AppleScript function. This function is written in AppleScript because I find it easier to process system events with AppleScript. You could write the same code in JavaScript if you wanted. 

![Anagram AppleScript code](/images/AnagramASCode.jpg)

The code stores the arguments and then iterates over each one using the path to create a [POSIX file](https://developer.apple.com/library/archive/documentation/LanguagesUtilities/Conceptual/MacAutomationScriptingGuide/ReferenceFilesandFolders.html). This file reference allows AppleScript to coerce the path into an alias or file reference suitable to the OS if necessary. 

Once all of those paths are coerced the FreeForm application is activated and then the `theFileList` array is iterated and each POSIX file reference is sent to the clipboard and then we execute a system event command to press Cmd V to generate a paste call that is targeted at FreeForm which is the active application. 

## All done

Unlike the Shortcuts action, both Keyboard Maestro and Alfred can perform the entire workflow internally [^7]. I have found that both are also significantly quicker than the Shortcut. Once the macro is created in Keyboard Maestro it can be triggered in many different ways. It can be put into a menu, triggered by typing, run from within KM or triggered by an external script. 

![My list of KM macros in a menu in Nota](/images/NotaFootnoteMenu.jpg)

That _Footnote_ macro is available in the menu but it is also available inside Nota when I type **&amp;foot**

Alfred is a bit more restricted in how the Workflows get activated [^8] but since Alfred is available at all times via its launcher functionality this isn't as big an issue. 

This was a relatively simple workflow so it doesn't highlight the main benefit of Alfred which is the visual layout of the objects in a Workflow. Both applications allow you to create large workflows but I find it easier to manage them in Alfred. This is really a personal preference and mostly a result of my reading issues. There is a lot of text in a Keyboard Maestro workflow. There is a Group action that you can use to contain a lot of steps into a single collapsible entry. 

![A Keyboard Maestro Group](/images/KMGroup.jpg)

This is especially useful if you are creating a macro that has branching actions as you can contain them all in their own group and add notes and colours to make it easier to track. 

### Footnotes

[^1]: Scrabble-like tiles. I don't want any over-enthusiastic junior IP lawyer at Hasbro getting ready to send me a sternly worded Cease and Desist letter. 

[^2]: I am sure that I have commented before on my unique idea of fun.

[^3]: As I have noted in other posts, I tend not to do a lot of error checking since I am writing these for my own use. Typically you would want to check that the user has provided you with usable and valid data. 

[^4]: This would be a good spot to do some error checking to make sure that what we were dealing with in the string was a letter and not something else.

[^5]: Another good spot for error checking.

[^6]: And why is that? Surely all Apple applications should have some minimum of script access. 

[^7]: If you don't count the scripts as an element external to Alfred. 

[^8]: Which is less a critique of Alfred and more a comment on how flexible Keyboard Maestro is.