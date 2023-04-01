---
title: "Preflight part 2"
date: 2023-03-31T17:40:39-06:00
draft: false
tags:
    - python
    - Hugo
    - Rich
---

I have continued to work on my [/posts/Preflight/](Preflight) script over the last day or two. After I posted about it I changed the output using the [Rich library](https://github.com/Textualize/rich) to add some command line pizzaz to it. 

![Jazz hands!](/images/pizzaz.jpg)

The new layout uses the [Box layout object](https://rich.readthedocs.io/en/latest/appendix/box.html) in Rich to draw an ASCII style box around the output. There are 19 different styles that you can use and those styles also apply to the [Table object](https://rich.readthedocs.io/en/latest/tables.html). 

## More code

After I was finished with the first version of the script I decided to add a new feature. I wanted to display a table with all of the Markdown files and an indicator of the draft status of each file. It seemed as if the simplest was to enable this was to presume that the user wanted this preflight table unless they used a `-f` flag and then provided a file name. So it was off to [argparse](https://docs.python.org/3/library/argparse.html) to see what I could do to enable that.

The file already had a positional `filename` argument declared so I removed that and added an entry for the new flag.

```python
parser.add_argument(
    "-f",
    "--filename",
    type=str,
    help="The name of the markdown file.",
    required=False,
    default="all",
)
```

So if no flag is sent then the argument defaults to the value `all` and this is what we can use to test to see if the user has supplied the flag and a filename. 

```python
if args.filename == "all":
    preflightAll(args.content)
else:
    preflightFile(args.content, args.filename)
```

## split

I am not a fan of big files. I find then difficult to navigate and I also find that there is often no reason for them. When possible I like to split logical sections of code out into their own files. In this case I added `_preflight_all.py` and `_preflight_file.py` to hold the code for each case. Those functions need to be imported before they can be called.

```python
from _preflight_file import preflightFile
from _preflight_all import preflightAll
```

 The `_preflight_file.py` file now has the original logic I wrote previously and `_preflight_all.py` has new code to read through the directory and then pull in the frontmatter from each file to create a table.

The table is built using the Rich Table object. The documentation implies that you need to print it to a Rich Console object and that is what I have done in my code.

```python
    console = Console()
    table = Table(title="Blog post status")

    table.add_column("Title", justify="left")
    table.add_column("Status", justify="center")
```

The Table is as easy to use as that. Ironically, it is perhaps the simplest display object in Rich to use. 

With the table started the code then gets all of the Markdown files in the directory and then gets the `title` and `draft` values from the frontmatter. In any other language you would probably have to test the files but python has the delightful `glob` function. Combined with `sorted()` it means that a single line gets me an alphabetical list of all of the Markdown files. The frontmatter library loads each file and then extracts the YAML. This is used to then create each row in the table. 

```python
    mdFiles = sorted(filePath.glob("*.md"))

    for post in mdFiles:
        blogPost = frontmatter.load(post)
        status = blogPost["draft"]
        title = blogPost["title"]

        # make a table row
        displayItem = Text("◼︎", style="green4")
        if status:
            displayItem = Text("◼︎", style="red3")

        table.add_row(title, displayItem)

    console.print()
    console.print(table)
```

Giving this delightful display. 
    
![A table](/images/table.jpg)
    
The only complication in the entire file was iterating over the sorted list. I was trying to use `with` and it wasn't working correctly. I am not sure why but that is the reading assignment for this evening. 

As with all my other coding projects, I used Jupyter Library to fiddle with code until I determined what I needed to use to get the results I wanted. It is an eminently valuable tool. 

Next I will be adding a flag to just show a table of the files that are drafts. I need to read through the argparse docs to see how to make a flag a condition of the positional argument.



