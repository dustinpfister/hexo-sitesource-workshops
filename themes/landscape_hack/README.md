# Landscape_hack

This is a hacked over version of the default theme for hexo called landscape.

## What has been added

Hopefully I will remember to update this readme as I hack away at this theme as a way to know what I have changed.

* added an updated.ejs file that renders update dates for posts
* added \*.ejs files for plugin's
* English support added thanks to en.yml and en-us.yml
* ff.style for hexo-forframe plugin.
* using hexo-lexter helper if present in posts.
* using inline style to have things formatted differently for plugins in which I do not want the side bar rendered.
* made some changes to structured data to make google happy.

## what has been changed

### layout/_partial/head.ejs

* injecting language (at config.language) attr into html element

```
<html lang="<%= config.language %>">
```

* using hreflang self page links

```
<link rel="alternate" href="<%= config.url + "/" + page.path %>" hreflang="<%= config.language %>" />
```

### layout/_partial/article.ejs

* added itemtype="http://schema.org/Blog" to article element so google likes me better
* using update.ejs for itemprop="dateModified" to let google (and people) know when a post was last updated


