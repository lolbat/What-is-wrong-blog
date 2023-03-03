---
title: Building an Alfred workflow
date: 2023-03-03T21:29:32.080Z
draft: false
tags:
 - Alfred
 - Automation
 - Applescript
 - zsh
 - MacOS
---

Sometimes the best way to learn how to use a new tool is to just dive in and see what it can do. I am working on a post about various automation tools and apps on the Mac at the moment. And as part of that, the folks at [Running with Crayons](https://www.alfredapp.com) sent me a key for the [Powerpack](https://www.alfredapp.com/powerpack/) in Alfred. Unlike [LaunchBar](https://www.obdev.at/products/launchbar/index.html) or [Raycast](https://www.raycast.com) you can't access the [Workflow automation tools](https://www.alfredapp.com/workflows/) that come with Powerpack without a license. I am still working on the piece but since the Workflow tools in Alfred are quite distinct from the other launchers on the market I thought I would look at them on their own.

In order to test these tools out I decided to create a workflow that would let me search through the available spells for the fantasy rogue-like game [Conquest of Elysium 5](http://www.illwinter.com/coe5/). I just happen to have several `.csv` files that have entries for the 515 spells available in the game. I am certain that I have less complicated `.csv` files somewhere but this seemed like a fun project.

## How to build

Before I get into the gritty internals of `.csv` and shell scripts, lets take a moment to look at how you build a workflow in Alfred. Here is how the final Workflow currently looks.

![Alfred Workflow](/images/alfred/Alfred Workflow.jpg)

Alfred has a development environment that might remind you of [Yahoo Pipes](https://en.wikipedia.org/wiki/Yahoo!_Pipes), [Microsoft's VPL](https://learn.microsoft.com/en-us/previous-versions/microsoft-robotics/bb483088(v=msdn.10)) or even [IFTTT](https://ifttt.com/explore/welcome_to_ifttt). Alfred's Workflows are different than many visual programming languages in that the routes in the Workflow are primarily to represent flow and you double-click the icons to configure them or to add scripts and data.

Workflows in Alfred start with an Input. This is how you tell Alfred what you want to work with. There are six types of Inputs that you can use in Alfred:

* [Keyword](https://www.alfredapp.com/help/workflows/inputs/keyword/) - start your Workflow by entering a keyword or a set of characters
* [File filter](https://www.alfredapp.com/help/workflows/inputs/file-filter/) - use your Workflow to to search or filter files to act upon
* [Running Apps filter](https://www.alfredapp.com/help/workflows/inputs/running-apps-filter/) - pick a running app and then send it data or items
* [Dictionary Lookup](https://www.alfredapp.com/help/workflows/inputs/dictionary-filter/) - lookup words with a dictionary other than the system dictionary
* [List Filter](https://www.alfredapp.com/help/workflows/inputs/list-filter/) - provide Alfred with a list of items and then use them in your Workflow
* [Script Filter](https://www.alfredapp.com/help/workflows/inputs/script-filter/) - use a script to create data to populate your Workflow

To be accurate you might want to also include the Trigger actions in this group as well but since the Alfred documentation doesn't I won't either. 

This is an example of a Keyword Input [^1].

![Keyword Input](/images/alfred/Keyword%20Input.jpg)

You can see that you are able to set the keywords used, tell Alfred if it requires an argument and also provide the user with some feedback as to what the Workflow does. The connection between each element in the workflow is dragged from the right side of one object to the left side of the next element in the Workflow.

![Connecting objects](/images/alfred/connect%20example.jpg)

And if you want you can also colour code the elements which will then add the same colour to the output from it. So you can trace an entire logic flow in a complicated workflow by colouring the individual elements of it.

![colour example](/images/alfred/colour%20example.jpg)

Once you have your Input, Alfred has many different types of items you can add to create your automation workflow. Alfred has five other categories of Workflow objects that you can use:

* [Triggers](https://www.alfredapp.com/help/workflows/triggers/) - Activate Alfred from a URL Handler, a snippet or even remotely
* [Actions](https://www.alfredapp.com/help/workflows/actions/) - the bulk of the objects that you will use to create your Workflow. Run scripts, open files, open URLs and send commands to the terminal.
* [Automations](https://www.alfredapp.com/help/workflows/automations/) - different types of objects with automation tasks done for you to make it easy to automate simpler tasks
* [Utilities](https://www.alfredapp.com/help/workflows/utilities/) - data and logic flow objects. Conditionals, argument parses, text filters 
* [Outputs](https://www.alfredapp.com/help/workflows/outputs/) - Something to show the folks back home. Or at least the folks in front of your screen. Notifications, dialogs, playing sounds.

Alfred Workflows gives you the tools you need to string these objects together to create the same programmatic workflows you would with code but instead of line after line of text you have objects connected on screen. It makes it easy to see how the automation flows and also to build more complex actions without getting overwhelmed with sed commands or AppleScript command formats.

Lets see how you can use all of these different types of objects to create a Workflow.

## The data

The impetus to start working on this Workflow was seeing an example of the [List Filter](https://www.alfredapp.com/help/workflows/inputs/list-filter/) input that use a small `.csv` file as input. So I wondered how well it would work with much more data. The spell list for Conquest of Elysium 5 has 515 entries in it [^2] and would be an excellent test of how well Alfred handles data.

Before I could put the data into a Workflow I needed to massage it a bit. The List Filter input will only use three columns worth of data - Title, Subtitle and Args. The Title and Subtitle are used to provide feedback to the user while they are searching through the data. The Args will be the data that is sent to the rest of the Workflow after you have selected an item in the list.

As the user filters the list of data that is provided in the List Filter the Title and Subtitle are displayed to give them more information about the items they are looking at. The rest of your Workflow can't currently access the Title and Subtitle and will only be able to use the data stored in the Args.

![The List Filter in use](/images/alfred/usage%20example.jpg)

The spells in the `.csv` file had 18 columns of data. Obviously I wouldn't be showing them all in this example but I wanted to have more than one to display. Happily it was easy to use [Easy CSV](https://vdt-labs.com/easy-csv-editor/) to merge some of the columns together and then delete the ones I didn't want. In addition, Easy CSV was able to put a delimiter between the data from each column. This will be used later to break the data into individual arguments. As well, since the Title won't propagate into the rest of the Workflow, I added the name of each spell to the Args column.

After that, all I needed to do was drag the List Input into the Workflow area, double click it to open it and then drag the `.csv` file from the desktop into the CSV area in the List Filter dialog.

![CSV in the List FIlter](/images/alfred/CSV%20in%20Input.jpg)

It was as easy as that. Now we have the data we just need to do something with it.

## Doing something

The List Filter input has an area at the top where you can select the keyword or characters that will trigger it [^3]. You can also set an icon for the Workflow [^4] and a Title and Subtitle that will act as a placeholder in the Alfred window before the user starts enter characters to start filtering the data.

With only the Keyword entered you can actually trigger the Workflow. It won't do anything other than let you filter the data you entered but it is still fun to watch. It is also interesting just how quickly Alfred can filter through the data.

The rest of the Workflow is going to determine what happens when the user selects a spell and then hits return. In that instance we want to split the data into individual arguments and then show that data to the user [^5]. Alfred supplies the [Split Arg](https://www.alfredapp.com/help/workflows/utilities/split-arg/) object in the Utilities category to do this very thing.

![Split Arg object](/images/alfred/split%20arg.jpg)

The Split Args object will let you use a standard delimiter or you can select your own. The object can also trim each argument and delete empty arguments if you need. Split Args can also take the data sent to it and turn it into a series of variables if that would make your code easier to write. In this case, the object will split the data using the `&` delimiter and then pipe the data to the next object as a series of order arguments as you would see in a shell script.

## A not-so-slight digression

While I was initially working on this example, I tried using the Notification and Dialog Output objects to display the data. Those both worked quite well but didn't allow me to format the results to make them look good. There is also the problem that many of the spells contain far more data that a notification can display on the Mac. I searched for some options, and even looked at using an AppleScript created window, but in the end I decided that what I would do was create an HTML page and then replace the placeholders [^6] in the file with the data that is being generated in Alfred [^7]. This would then be used to display the data for the user. 

Then I started thinking [^8]. What if I could render the HTML and then turn that into an image? This took me down quite the interesting rabbit-hole and in the end I found two command line applications that could do it. [Webkit2PNG](https://paulhammond.org/webkit2png) is a Python based tool that uses the Webkit rendering engine to turn a URL into a series of images. It looked useful but the more interesting option was [pageres-cli](https://github.com/sindresorhus/pageres-cli) by [Sindre Sorhus](https://sindresorhus.com/) [^9] which has far more options available to limit the area it returns as well as limit the rendering to a specific selector.

This then is the plan. I will create and open an HTML page (in the browser) and, if the user presses the Shift key when they select the spell, create a bitmap image of the HTML and show that to them instead [^14].

## The script

So we have the data split into individual arguments and we know how the data is going to be displayed. The first thing to do is to take the arguments passed from the Split Args object and use them in a shell script [^10]. Alfred has two options if you want to run a script in a Workflow. The Run Script object will let you run Python, Ruby, AppleScript, JavaScript, Perl, Swift and bash or zsh shell script [^13]. You can also use the Run NSAppleScript object [^11]. This runs the AppleScript code internally using the [NSAppleScript](https://www.alfredapp.com/help/workflows/actions/run-nsapplescript/) engine.

![Run Script object](/images/alfred/shell%20script.jpg)

#### A second digression

During all this mucking about I discovered that the _sed_ command that ships with the Mac is a total pain-in-the-ass to use. There is probably a [very complicated explanation](https://riptutorial.com/sed/topic/9436/bsd-macos-sed-vs--gnu-sed-vs--the-posix-sed-specification) of the difference in operation between the two and I couldn't really find a simple one. On the Mac, and some Linux distros, the _sed_ command will generate errors that are clearly based on the command not parsing the data you send to it properly. 

It is an old command that is kept on some Unix flavours primarily to keep POSIX compatibility but it won't work correctly, even with properly formatted commands, on the Mac [^15]. I spent a few hours trying to figure out why my sed commands wouldn't work only to have them work without modification using _gsed_. You can use [Homebrew](https://brew.sh/) to install _gsed_ and I highly recommend it.

### Back to our regularly scheduled shell script

This is the first shell script that gets run.

![first shell script](/images/alfred/first%20shell%20script.jpg)

There is probably a quicker way to write this as a shell script but this works well enough for what I need. This first script will run a zsh shell script to move to the project directory, copy the original HTML file and then replace the placeholders using _gsed_.

The _gsed_ command is:

`gsed -i "s/+spellLevel+/${2}/" newSpell.html`

The `-i` flag is to edit the file in place. The first argument replaces the placeholder with the appropriate arguments sent from Split Args and the last argument is the name of the file to work on. Once that file has been updated with the data it can be displayed by using the [Open URL](https://www.alfredapp.com/help/workflows/actions/open-url/) object.

![Open URL object](/images/alfred/Open%20URL.jpg)

## Providing an option

The plan is also to give the user the option to have the results rendered into a bitmap image that will be displayed for them. In order to do this we need to determine if the user has the keyboard modifier selected and then respond differently when displaying the results for them. The inputs in Alfred can have an optional keyboard modifier attached to them. Objects in Alfred can also have multiple paths coming from them.

![Action Modifier](/images/alfred/Action%20Modifier.jpg)

Our task is complicated by the fact that we have two script objects. One to replace the placeholders in the HTML and a second to display the HTML. You could just split the action after the List Filter input and then duplicate the script objects. That isn't a very satisfying option though.

Instead we will use the Action Modifier to branch the flow of the Workflow after the initial List Filter input. If the user has the shift key depressed we will go down a branch to an Arg object that will set a variable, `showImage` ,to true. If not then the workflow goes to an Arg object that will set it to false.

![conditional](/images/alfred/conditional.jpg)

The Arg object can be used for two things. It can take data from the {query} variable that is propagated from object to object and save it, or arguments in it, to variables [^12]. It can also be used to set variables for later use. In this case we will use it to set the `showImage` variable which we will check after we transform the HTML file.

![Arg object](/images/alfred/arg.jpg)

After we run the first script to replace the placeholder variables in the HTML file we then use a conditional object to check the value of `showImage`.

![conditional2](/images/alfred/conditional2.jpg)

If `showImage` is false then we go to the url branch otherwise we go to the image branch. The url branch leads to an [Open URL](https://www.alfredapp.com/help/workflows/actions/open-url/) object that displays the HTML file that was edited using a local file path. The image branch takes us to another Run Script action.

![second shell script](/images/alfred/second%20shell%20script.jpg)

This final script will call `pageres` and make a 500 x 500 pixel image using the `main` selector in the HTML file. Finally, `qlimage` is called to display the file to the user.

## Wasn't that fun

I tend to like these sorts of experiments when first trying to learn a new tool or environment since they push you in directions that you might not normally go. And this was certainly the case. Alfred is quite a powerful tool despite the friendly visual interface and I think that its real power is in how it lets you take scripts and commands on your Mac and combine them into a unique Workflow.

If you have any ideas for posts about Alfred or automation that you would like to see track me down on [Mastodon](https://home.social/@lolzac) or the [Alfred forum](https://www.alfredforum.com/profile/53128-pixelgeek/).

### Footnotes

[^1]: For the Workflow I used to create the Markdown file in the directory containing my Hugo blog. 

 [^2]: That file is at least nine months old so the current list is probably closer to 550 now.

[^3]: CSS stands for Conquest Spell Search but only later did I realise that it also stands for, well, CSS. 

[^4]: Or for the object. You can give most objects their own icon if you want.

[^5]: There are two objects in the Workflow prior to this but we will get back to them later.

[^6]: There are better ways to do this text replacement but they involve using JavaScript, a templating system and a anyone is interested I can write up an article describing that.

[^7]: It is an interesting look into my personality that I thought this was the easy route to take.

[^8]: Always a bad idea.

[^9]: He must not sleep. He writes Mac apps, CLI tools and also appears to write an enormous amount of Open Source JavaScript code for NodeJS.

[^10]: Actually I had to make the HTML and CSS first but that isn't very interesting.

[^11]: It compresses the script and runs it internally so it is faster but it stops internal Alfred execution while it runs so the scripts need to be quick.

[^12]: It can also be used to modify the {query} variable in Alfred or even replace it entirely if you want to.

[^13]: Technically [you can run any language](https://www.alfredforum.com/topic/18136-calling-non-standard-runtimes-from-alfred/) but those are the ones typically used on the Mac. 

[^14]: Using the `qlimage` command line tool and not the Alfred [Quick Look feature](https://www.alfredapp.com/help/features/previews/). 

[^15]: That is a bit of an exaggeration. The _sed_ command will work for many options on the Mac but it has issues with some flags and some formatting options. I am not sure if this is a problem just with MacOS, the version of _sed_ it ships with or some other command that _sed_ relies on. 