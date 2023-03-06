---
title: "Building the Tools page"
date: 2023-03-04T15:10:47-07:00
draft: false
tags:
    - Hugo
---

There is a new addition to the site. I put a link in the sidebar to a [Tools](/tools/) page to list all of the Mac apps I make daily(ish) use of. It wasn't difficult to add but it does include the first [shortcode](https://gohugo.io/templates/shortcode-templates/)  I have done for Hugo. 

Shortcodes are a way to allow you to easily insert custom code and/or styles into your content. In this case I wanted to add an icon to the entry for each application on the Tools page. The shortcode is a templating tag, marked with matched `{{` pairs, that gets replaced when the page is rendered by the code in the appropriate shortcode file. I didn't need anything complicated for this task so I created a tag name, `toolIcon`, and added the file name as a parameter. 

![shortcode sample](/images/shortcodeSample.jpg)

When Hugo parses this it looks for `toolicon.html` in the `<theme>/layouts/shortcode/` directory and uses the code there to create the HTML. I don't need to do anything tricky and so the code in the shortcode file is just:

```html
<div class="toolIcon">
    <img src="/icons/{{ index .Params 0 }}" class="toolIconImg">
</div>
```

In this case the only item that isn't immediately obvious is `{{ index .Params 0 }}`. This references the 0th parameter in the shortcode which is the file name. 

Shortcodes, it turns out, are probably the easiest way to insert custom structure and styles into your Hugo site and they are quite easy to do as well. 

