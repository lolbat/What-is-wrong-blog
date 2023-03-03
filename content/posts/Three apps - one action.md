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

And as I have been working my way through [Alfred](https://www.alfredapp.com) to learn that system I thought that it would be a fun idea [^2] to create the same action in three different apps and compare them all. I've already shown [the Shortcut I made](creating-anagrams/) for this previously so lets start off by looking at how to replicate this in Keyboard Maestro.

## Keyboard Maestro

The simplest part of the macro is to store the path to the directory that has the letters in it and then ask the user for the letters they would like to use [^3].

> insert KB image 1

The macro creates a variable, `imagePath`, to store the path to the image directory and then uses the Prompt for User Input action to pop up a dialog asking for the letters to use in the anagram. 

Next the Filter action will take the input from the dialog, `tileLetters`, and turn them all to uppercase letters. 



### Footnotes

[^1]: Scrabble-like tiles. I don't want any over-enthusiastic junior IP lawyer at Hasbro getting ready to send me a sternly worded Cease and Desist letter. 

[^2]: I am sure that I have commented before on my unique idea of fun.

[^3]: As I have noted in other posts, I tend not to do a lot of error checking since I am writing these for my own use. Typically you would want to check that the user has provided you with usable and valid data. 