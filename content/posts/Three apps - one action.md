---
title: "Three Apps - One Action"
date: 2023-03-03T11:42:28-07:00
draft: true
tags:
    - Alfred
    - Keyboard Maestro
    - Shortcuts
---

A little while ago I wrote about a Shortcut that I used to [lay out images of Scrabble tiles](creating-anagrams/) [^1] in FreeForm to help solve anagrams. As part of that post I said:

> I then looked at doing it in [Keyboard Maestro](https://www.keyboardmaestro.com/main/) but I couldn’t seem to find a way to iterate over each character in a string.

This turned out to not be true at all. Well, the part about me not being able to find a way to do it is certainly true. You can indeed get Keyboard Maestro to iterate over all of the characters in a string and so I was able to replicate the action as a KB macro. 

And as I have been working my way through [Alfred](https://www.alfredapp.com) to learn that system I thought that it would be a fun idea [^2] to create the same action in three different apps and compare them all. The Shortcut version works, a bit slowly, but I'm always interested in trying to see how different environments handle tasks. I've already shown [the Shortcut I made](creating-anagrams/) for this previously so lets start off by looking at how to replicate this in Keyboard Maestro.

## Keyboard Maestro

The simplest part of the macro is to store the path to the directory that has the letters in it and then ask the user for the letters they would like to use [^3].

> insert KB image 1

The macro creates a variable, `imagePath`, to store the path to the image directory and then uses the Prompt for User Input action to pop up a dialog asking for the letters to use in the anagram. 

Next the Filter action will take the input from the dialog, `tileLetters`, and turn them all to uppercase letters. The files all use the uppercase letter in the filename. Then FreeForm is activated and brought to the front.

> insert KB image 2

Finally the heart of the macro. My earlier issue with doing this task in Keyboard Maestro was that I couldn't see how to iterate over each letter that the user supplied. The [For Each](https://wiki.keyboardmaestro.com/action/For_Each) action in KB has several options but none for characters. It turns out that it can search substrings [based on regex patterns](https://wiki.keyboardmaestro.com/Regular_Expressions#Examples). And the simplest substring regex is the '.' pattern which matches one character.

Keyboard Maestro has several action that can, themselves, hold other actions. This is how the application creates repeat loops or conditional execution of actions. 

> insert KB 3

The For Each action is one of those and so once we have determined the conditions for the loop we can add actions within the For Each action to define what we want done with each letter.

First we take the letter and use it to create a file path [^4]. Then pass that path to the Set System Clipboard action [^5] and paste. 



### Footnotes

[^1]: Scrabble-like tiles. I don't want any over-enthusiastic junior IP lawyer at Hasbro getting ready to send me a sternly worded Cease and Desist letter. 

[^2]: I am sure that I have commented before on my unique idea of fun.

[^3]: As I have noted in other posts, I tend not to do a lot of error checking since I am writing these for my own use. Typically you would want to check that the user has provided you with usable and valid data. 

[^4]: This would be a good spot to do some error checking to make sure that what we were dealing with in the string was a letter and not something else.

[^5]: Another good spot for error checking.

