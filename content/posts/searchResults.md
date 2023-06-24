---
title: "Examining search results"
date: 2023-06-23T13:15:45-06:00
draft: false
description: "Lets take a look at what happens when you search for some keywords on a few of the lesser known search engines available. And Google and Bing."
tags:
    - DuckDuckGo
    - Qwant
    - Google
    - Bing
    - Brave
    - Search Engines
    - MetaGer
    - Ecosia
---

Last night I was trying to remember the name of an Open Source data tool. I knew that the name had "data" in it but since I was away from my laptop I couldn't search through my Obsidian bookmarks to find it [^1]. I tried to search through my shared Safari History but oddly searching for the term "data" brought back almost every link I have ever visited. I suspect most of them have the word in the HTML code or in a nav bar.

So I did a search. As you can imagine, I didn't find it. Part of the reason may be that the project has a name very close to a commercial product that does the same sort of thing. So in this case, SEO rears its ugly head. The other is that search really does suck, especially Google, and finding relevant things is more akin to blowing out a candle and making a wish. 

I thought that it might be interesting to try the same keywords in multiple different search engines and see a) if any of them found what I was looking for and b) just how bad some of the results were. 

## The searches

I will be using `open source data tools -best` as the search term for each test. The keywords are what I was using while I did my initial search and the `-best` modifier is an attempt to try to remove the 101 SEO content sites that try to give me the "57 best" of whatever I am looking for. 

Search engines being what they are, especially Google and Bing, your results may vary. Each section has an image of the results from each search engine. Click on it to embiggen it into a new tab.

I have content blockers enabled in Safari so I won't be seeing any ads unless they are presented as part of the search results. 

## Search Results 

### Ecosia

The first notable thing about the [Ecosia results](https://www.ecosia.org/search?method=index&q=open%20source%20data%20tools%20-best) are that the entire page is filled with ads. They are clearly marked as such but I have to scroll down to see any results.  

{{< popup "ecosia" "200" "Ecosia search results" "A screenshot of the search results from the Ecosia search engine">}}

It then shows three results and then a list a videos. Following this are five more results and then an ad. Despite the `-best` modifier, seven of the results had the word "best" in the title.

My favourite result was from a site called TechTarget which showed an article titled "18 top big data tools and technologies to know about in 2023" but the URL was for an article originally titled "15-big-data-tools-and-technologies-to-know-about". Obviously an example of an old article that has been rehashed and "updated" for 2023. 

### Qwant

Qwant is a search engine that I saw listed on a blog post at Proton [about search engine privacy](https://proton.me/blog/alternative-search-engines). I haven't used it previously. 

{{< popup "qwant" "200" "Qwant search results" "A screenshot of the search results from the Qwant search engine">}}

Qwant [also failed to use](https://www.qwant.com/?hc=0&hti=0&vt=1&b=1&home=daily&q=open+source+data+tools+-best&t=web) the `-best` modifier and so while it had a better listings with ten results and no ads, all of the results were SEO bullshit for the most part. Two from a website that used to be focused on Wordpress themes and three results from a site called Solutions Review and one from a site called Post Hog that appears to be an SEO content platform.

Not really very good.

### Duck Duck Go

I believe that it is a known "known" that Duck Duck Go has had a long standing issue with its inability to use the `-` modifier in searches. In fact, my own testing indicates that it actually works as a `+` instead. 

{{< popup "duck" "200" "Duck Duck Go search results" "A screenshot of the search results from the Duck Duck Go search engine">}}

Consequently, DDG [shows almost the exact same results](https://duckduckgo.com/?q=open+source+data+tools+-best&t=osx&ia=web) as Qwant and Ecosia [^10]. Which is to say that it shows SEO fodder with a single ad in the sidebar. Still, at least it has fewer ads on the page than Ecosia does. 

### Bing

The [Bing search results](https://www.bing.com/search?q=open+source+data+tools+-best&form=QBLH&sp=-1&lq=0&pq=open+source+data+tools+-best&sc=10-28&qs=n&sk=&cvid=96D7313B565B4F7FA59B2ABA712B62C3&ghsh=0&ghacc=0&ghpl=) were interesting because they again didn't use the `-best` modifier [^2] but also featured the fewest results. Bing only showed four results on its page and gave prominent space to two SEO content farms.

{{< popup "bing" "200" "Bing search results" "A screenshot of the search results from the Bing search engine">}}

I haven't ever used Bing [^3] but this seems like a rather shitty set of results. All four of the pages linked to by Bing are the same as the other three search engines that we have looked at. A nice touch is that there is an insight button that confirms that Rigorous Themes is indeed "a WordPress theme store which is a bunch of super professional, multi-functional themes with elegant designs". Why Bing thinks this is the site to feature when looking for information on Open Source data tools is anyone's guess. 

### Brave

Brave is the first search engine, so far, to [actually use](https://search.brave.com/search?q=open+source+data+tools+-best&source=web) the `-best` modifier. So kudos for Brave.

{{< popup "brave" "200" "Brave search results" "A screenshot of the search results from the Brave search engine">}}

Aside from the first result, which is SEO content from a site that feeds people to online courses, the results appear to be from legitimate sites. The Tech Target article appears again but not until result 16 of 20. Brave splits the results into two groups of ten and splits the groups visually with, not videos, but a link to do the search in different search engines. 

As far as I can tell there are no ads on the Brave search results. 

### MetaGer

MetaGer is a German based search engine that focuses on privacy and being 100% fueled by renewable energy. As well, it is run by a non-profit organization. It not only used the `-best` modifier but also noted that at the top of the search results. 

{{< popup "metager" "200" "MetaGer search results" "A screenshot of the search results from the MetaGer search engine">}}

The top three results [on the page](https://metager.org/meta/meta.ger3?eingabe=open%20source%20data%20tools%20-best&focus=web&m=en_US&mgv=a6bf62d62ff2bbc9d7e5aff26ed27c94) are ads and MetaGer also has some search results that [are affiliate links](https://metager.org/partnershops). MetaGer is very upfront about the arrangement. 

Each search result has a link to open in a new tab and to also open anonymously. The anonymous option is not available for affiliate links. Our friendly Tech Target article is in the list [^4] as is an article from Guru99 [^5] but aside from that the links are mostly to good sources. 

### Google

And why not [try Google](https://www.google.com/search?q=open+source+data+tools+-best)? How bad could it be [^6]?

{{< popup "google" "200" "Google search results" "A screenshot of the search results from the Google search engine">}}

The first problem is the immense amount of tracking data that Google adds to the search query URL.

```
&client=safari&source=hp&ei=CI-UZNr_Crir0PEPiqOvkAY
&iflsig=AOEireoAAAAAZJSdGF3rc0wwFrtb8Ef2D66z6Xjmmgpi
&ved=0ahUKEwjao_qbvdf_AhW4FTQIHYrRC2IQ4dUDCAo
&uact=5&oq=open+source+data+tools+-best
&gs_lcp=Cgdnd3Mtd2l6EANQAFgAYMkCaABwAHgAgAFGiAFGkgEBMZgBAKABAqABAQ
&sclient=gws-wiz
```

None of that data is necessary. 

Currently, I only use Google when I need to duplicate a Duck Duck Go search and add modifiers. And I do that infrequently enough that I didn't notice that the search results now have large section of the page devoted to an "answer" to my search query. That is followed by something called a [Featured Snippet](https://support.google.com/websearch/answer/9351707?p=featured_snippets) and then by a section titled **People also ask**. Which is a fun thing to read before I get to any actual results that I asked for. Someone at Google has a sense of humour [^7]. 

There are nine search results on the page but, at least on my monitor, I can only _just_ see the first one. The other eight appear to be good results which shows you a) how much SEO spam uses the word "best" in their titles and b) that you can't get good results on most search engines without using keyword modifiers. 

## Comparisons

### First cut

Of the seven search engines that I tested, four are, in my opinion, hobbled by their inability to use keyword modifiers. Ecosia, Qwant, Bing and Duck, Duck Go will not let you remove keywords from your search in order to limit SEO spam or to filter search results. If you want, for example,  to do a search for information about Shortcuts on the Mac you **need** to be able to use `-keyboard` in order to keep out results about keyboard accelerators. 

> _As I was writing this post, I did more research and it appears that Ecosia, Qwant and Duck, Duck Go all do get their results from Bing. I found an [extensive list of search engines](https://jharding.co.uk/what-search-engines-are-powered-by-bing/) that use Bing and the ones I tested all have the same inability to use the `-` modifier in a query. This appears to be a fundamental issue with Bing._

It is also becoming more necessary to remove words like "best", "alternatives" and others from searches to avoid getting results that lead to SEO spam from content farms. If you can't do that then a search engine borders on being useless.

Even if Bing was able to use keyword modifiers it is the main proponent of using LLM technology to "supplement" search results. Microsoft is also only slightly less invasive than Google in terms of privacy. Qwant seems to be a good company and focuses on privacy but nine of the ten search results they showed were garbage. Privacy is great but missing a basic search function seems to make all of that privacy protection besides the point. 

Ecosia also talks about privacy protections but the entire page of search results is filled with ads. And since I can't filter the search results with modifiers when I finally do scroll down those results are the same sort of SEO fueled rubbish that Qwant gives me. Duck, Duck, Go has fewer ads but, again, I can't do anything to filter out the garbage and so I get the same SEO results from it as well. In addition, and this might just be me, but the search interface for DDG is far too quick to modify my query because it gets back too few results. This makes me have to add quotes to keep in keywords that Duck, Duck Go thought were superfluous to the search. 

So that leaves Google, Brave and MetaGer.

### Second cut

Well it is less of a cut than an obvious conclusion that Google would be unusable even if it gave you good results. The invasive nature of Google removes it from any serious contention. Their new layout for search would also be a deal breaker. Maybe I am just missing the obvious but, surely you want a search engine that gives you results based on what you searched for and not content that the search engine thinks you want? 

So that leaves Brave and MetaGer.

### The Final Cut

MetaGer is a search aggregation company and doesn't do their own searches. It is clear from the results which data set they retrieved the results from. Brave used to have the same system for their search results but have recently begun to do indexing on their own. I suspect that a big part of the impetus to get that project running is the [Brave Summarizer](https://brave.com/ai-summarizer/) which aims to add LLM features to the Brave Search engine.

MetaGer allows you to buy tokens [^8] to not only remove ads but to give you access to more search engine results. And it also lets you create a blacklist of sites that you want to remove from the results that you see [^9]. Brave also allows you to pay for monthly access to ad free searches. The company also sells API access to its search results as a way of keeping the servers running. In addition, Brave has the [Brave Rewards program](https://brave.com/brave-rewards/) which seems to be a way to view selected ads in order to help pay content creators. I haven't really used Brave enough to figure out what that means in terms of my browsing. 

I think that the Brave search results look better and are easier to read. I really have a difficult time reading the MetaGer results.

MetaGer also gets their search results from Yahoo. Yahoo in turns get their results from Bing [^11]. Despite this, MetaGer is able to use query modifiers. I don't know if that is because they have a different deal, from Yahoo, that predates Bing or if they rerun your search query based off of the data they aggregate. 

### One more test

So I was curious to see how many search engines use Bing results. So I decided to test Brave and MetaGer to see if they could find the answer for me. The search query I used was `which search engines use bing results`. 

Brave [quickly pulled up the answer](https://search.brave.com/search?q=which+search+engines+use+bing+results&source=web). 

{{< popup "brave2" "200" "Brave search results" "A screenshot of the search results from the Brave search engine for my second test.">}}

Because I was asking a question and not just typing in keywords, I received a Summarizer result and also a sidebar result telling me about Bing. In case I didn't know what it was. 

MetaGer was [unable to find the answer](https://metager.org/meta/meta.ger3?eingabe=which%20search%20engines%20use%20bing%20results&focus=web&m=en_US&mgv=8777ed2787280017b3f106c675502ad7) at all and included some odd results including the Nascar terms of service, a link to a Pasadena SEO company, Golf Canada and the Irondequoit Public Library. Surprisingly, none of these pages had an answer to the question. 

{{< popup "metager2" "200" "MetaGer search results" "A screenshot of the search results from the MetaGer search engine for my second test.">}}

Brave put two results after the Summarizer blurb and both of them ([Wordstream](https://www.wordstream.com/blog/ws/2019/11/19/who-uses-bing-anyway) and the [James Harding blog](https://jharding.co.uk/what-search-engines-are-powered-by-bing/)) had the answer that I was looking for.

Given the poor search results and its connection to Bing I can't imagine wanting to use MetaGer over Brave. 

## One last thing

Looking at the summarised results on Brave made me curious to see what Bing and Google did with the same question. 

{{< popup "searchsummary" "250" "Search summaries" "A screenshot of the three different search summaries. From Bing, Google and Brave">}}

All three search engines used data from either WordStream or the James Harding blog to create their summary. Both Bing and Google rip the data from the Wordstream article and repost it on their site making it unnecessary for you to follow the link to read the article. Bing at least adds a footnote to the list of search engines. Google adds a link to the page but does nothing to relate that link to the information that it provides. This may not be copyright infringement but it is a pretty crappy thing to do. 

## Conclusion

I'm afraid I seem to have strayed somewhat from my original brief, but in a nutshell:

* Brave appears to give better results than the other search engines tested
* Almost [every other search engine](https://jharding.co.uk/what-search-engines-are-powered-by-bing/) appears to be powered by Bing.
* Brave has privacy protection without having to use Bing search results.
* Bing has a bewildering inability to use the `-` query operator.
* [Sex is more fun than logic](https://people.eecs.berkeley.edu/~ddgarcia/LogicProfessor.html).

I have been using Duck Duck Go despite the inability to do searches with the `-` modifier. This wasn't a problem in the past, but with the flood of SEO content that litters search results it has become more and more important to be able to use something to remove the most obvious SEO keywords from the results. That capability is going to become more and more important as companies like Google, Microsoft and Open AI make it easier to flood the internet with a torrent of pointless shit.

For the time being I will be switching and using Brave as my primary search engine. If you have been avoiding using Google (and you should) then I would suggest you check it out. And also check out James Harding's [list of search engines](https://jharding.co.uk/what-search-engines-are-powered-by-bing/) to see if the one you are using is actually just Bing in disguise. If it is you may want to look for an alternative. 

[^1]: It was [Datasette](https://datasette.io/) in case you are curious. 
[^2]: See my aside at the end of the article about this issue.
[^3]: Fuck Microsoft.
[^4]: Whomever does their SEO needs a raise. 
[^5]: Guru99 is a tutorial publisher who have a **lot** of unmarked affiliate links on their site. 
[^6]: Actually worse than I thought.
[^7]: Just not a mammalian one.
[^8]: Not crypto tokens AFAICT.
[^9]: Goodbye to Guru99 and GeeksForGeeks.
[^10]: Because they are the same results. All three use Bing as a search result source.
[^11]: Well Yahoo Search is Bing. IIRC Microsoft bought it as a way to jumpstart their search engine effort.