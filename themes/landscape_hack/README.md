# Landscape_hack

This is a hacked over version of the default theme for hexo called landscape.


## What has been added

Hopefully I will remember to update this readme as I hack away at this theme as a way to know what I have changed.

* added an updated.ejs file that renders update dates for posts
* added \*.ejs files for plugin's
* English support added thanks to en.yml and en-us.yml

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


