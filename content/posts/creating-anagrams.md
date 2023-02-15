---
title: Germans gain a cart
description: "How do you build a Shortcut for an app that doesn't support them?"
date: 2023-02-15T17:40:54.783Z
draft: false
tags: 
    - Freeform
    - Apple
    - Shortcuts
    - Keyboard Maestro
    - Anagrams
---

![A title spelt with Scrabble tiles](/images/creating_anagrams_title.jpeg)

From time to time I do anagrams. Nothing serious. I certainly don't do it [professionally](https://en.wikipedia.org/wiki/Thomas_Billon) but I have a fondness for making letters jump into new words. I have an odd relationship with words. I like them but I often have difficulty keeping the straight in my head. And my eyes and my brain sometimes disagree on what a series of words actually mean. So it is an odd fascination to have and an even odder skill to practice when you have several disadvantages at work making the process more difficult.

I can do smaller words in my head and even do groups of smaller words mentally as well but I often find that it makes the process easier to complete if I have some sort of visual aid. A pencil and paper is my usual aid of choice in these matters but I wanted something that would let me fiddle with larger amounts of letters using something similar to a Scrabble tile. Certainly a bag of Scrabble tiles would work but they aren't very portable and also a bit of a hassle if you are trying to work out a 13 letter anagram at night when your partner is trying to sleep.

I assumed that someone would have made an app to do this. You would enter in some words or a string of letters and it would spit Scrabble tiles into a window and you could arrange them to your heart's content. I was wrong. There are any number of apps that let you play Scrabble or some variant of it but nothing like I wanted. I then looked for a simple app that would just let me import graphics and arrange them. There are a few applications like this, mostly pinboard apps, but almost all of them have limited import options and, critically, all look like shit. 

Apple recently released an application called [Freeform](https://www.apple.com/newsroom/2022/12/apple-launches-freeform-a-powerful-new-app-designed-for-creative-collaboration/) which is a networked collaborative app. It has quite a few tools available to it to et you scribble and draw with your colleagues and it also allows you to import your own graphics and arrange and rearrange them as you would like. It also looks like a Mac app. I made an initial 'board' in Freeform that had a single copy of the letters in the alphabet with the intention that I would copy and paste when I needed multiples of letters. This got tedious very quickly. 

Normally in this situation I would write a script to automate the process. The main problem though is that Freeform doesn't have any automation support. The app has no Shortcuts actions nor is it scriptable or controllable in Automator. This isn't a deal breaker but it does limit what I can in the app itself. I initially wanted to create this in Shortcuts but there doesn't seem to be something as basic as a Paste command in Shortcuts. I then looked at doing it in [Keyboard Maestro](https://www.keyboardmaestro.com/main/) but I couldn't seem to find a way to iterate over each character in a string. No worries as Keyboard Maestro allows you to activate and run macros from within Shortcuts so I built the script using the best features of each. 

![The script in Shortcuts](/images/anagramscript.jpeg)

The script asks for a string of text [^1] and then splits the string into individual characters. Each character is added as a filename and the file is retrieved from my drive and pasted into Freeform. It works but it is a bit slow so I am currently looking at how I can store multiple files in the clipboard and paste them all at once. Despite the slight speed issue it does now let me enter any text I want and then have all of those letters deposited as Scrabble-like tiles in Freeform.

![Its not a good anagram but it works](/images/germans_gain_a_cart.jpeg)

### Footnotes
[^1]: I don't actually do any checks on this input as it is only for me but at some point I will mess up and add a space to the text and get a 'file no found' error. 


