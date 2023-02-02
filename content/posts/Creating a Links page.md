---
title: "Creating a Links page"
date: 2023-02-02T14:20:36-07:00
draft: false
tags:
    - Links
    - Hugo
    - Shortcuts
---

I joke with my friends that a programmer is a person who is a particular type of lazy. They will spend hours or even days on writing code or building a system so they never have to do a task twice. Regardless of the size of the task. I don't know if this is a universal trait but it does describe how I often approach tasks that I know I will repeat again and again. 

When I was "planning" this blog I knew that I wanted to have a Links page that I could use to showcase sites and just let people potentially find new and interesting websites. I have done these types of pages in the past and I knew that one thing I wanted to avoid was having to manually type in new links to a page in HTML or to have to reverse that process if I wanted to move them. 

What I want to do is have Hugo create a list of the links when I need them but not actually create any pages or require me to edit anything. I want to dump a file with some YAML frontmatter in it to define the link and then have that data used to display it.

There are a few ways to do this but Hugo has a very helpful set of [Build options](https://gohugo.io/content-management/build-options/) that you can use to help make this type of page easier to build. 

In the front matter for a page you can add a `_build` parameter and then give it one of three options:

```YAML
[_build]
  list = 'always'
  publishResources = true
  render = 'always'
```

In my case I only need to use the `list` and `render` options. Setting `render` to `never` will stop Hugo from rendering an HTML file based on the .md document I upload. Similarly `list` will control if Hugo uses that .md document to add data whenever it needs to make a list of the appropriate content type.

Each link document will only contain YAML frontmatter. Here is the frontmatter for the Popular Information link.

```YAML
---
title: "Popular Information"
type: "Link"
link: "https://popular.info/"
Desc: "Independent investigative journalism."
draft: false
_build:
     list: true
     render: false
---
```

I previously had a page in the `content/links/` directory called `links.html` that was used to render the .html content for the Links Page. That initial version has a hard-coded list. I took that hard-coded list out and then created a page in my theme at `layouts/links/links.html`. 

I copied the `single.html` file from the _default directory and after the content was displayed I added  code to iterate over the list of link pages and create some HTML. 

```Go
<ul>
    {{ range .Pages }}
        <li>
            <a href="{{.Params.Link}}"><strong>{{.Params.Title}}</strong></a>
            <span class="description">{{.Params.Desc}}</span>
        </li>
    {{ end }}
</ul>
```

The code uses the parameters from the YAML frontmatter in the .md document to fill in the details of the link as it will appear in the final HTML page. 

## Can you do better?

The next stage [^1] was to create a Shortcut I could use to make it easier to create these .md files. 

![A quick shortcut](/images/shortcut.jpeg)

I am sure that there is probably quite a lot of error and bounds checking I could be doing for this but it is just for personal use. 

I get the name of the current page from Safari, truncate it and then use it as the basis for a dialog asking for a name for the .md file. Whatever the user types in gets a quick replace run to escape the spaces in the name and this is then passed to a shell script block.

I am currently using [Nota](https://nota.md) as a writing tool and it has a CLI option. I could also just as easily use the [Nova](https://nova.app) CLI as well. 

The file is edited to, at this point, add a description to the link. The file is saved and then the next time either the site is generated or I upload to Github the file will be sent along and when Netlify builds the site it automagically updates my links page without me having to do anything.

I may add some additional features to the system at some point but at the moment it allows me to easily add links to the Links page with a minimum of work.



