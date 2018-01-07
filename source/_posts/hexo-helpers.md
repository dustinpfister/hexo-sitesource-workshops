---
title: Using hexo helpers to inject html in a theme
date: 2018-01-05 08:11:00
tags: [hexo,js,node.js,ejs]
layout: post
categories: hexo
id: 127
updated: 2018-01-07 08:40:31
version: 1.1
---

Hexo [helpers](https://hexo.io/api/helper.html) are one of many extensions in [hexo](https://hexo.io/) that allow for the extension of functionality in hexo. There are extensions for [generating files](/2018/01/04/hexo-generators/), adding html from markdown files with [tags](/2017/02/04/hexo-tags/), and a wide range of other options when [making a script or plug-in for hexo](/2018/01/03/hexo-plugins/). However in this post I will be focusing on useing helpers that are used [when making a theme](/2017/04/17/hexo-theme-start/) for hexo.

<!-- more -->

## What to know before hand.

This is a post on helper extensions that are used to extend the functionality of the node.js powered static site generator known as [hexo](https://hexo.io/). This post does not cover the basics of html,css and javaScript. It is also not a getting started post on hexo. I assume that you know at least a thing or two about hexo, and one of the template options used to make themes, such as [ejs](/2017/12/07/nodejs-ejs-javascript-templates/).

## What helpers do

Helpers are just simply methods that can be used when making a theme for hexo that do things like building html, and formating values.

## Use helpers to abstract important html into the plugin.

When making my *.ejs files for a theme I end up making html that is very specific to a certain plug-in. As I develop the plug-in, I find myself also needing to make a theme right along with it. If a client system I am making for the plugin changes, so to does the theme.

As such something like this in one or more templates:

```html
<script src="/js/pluginName/client_system.js"></script>
```

Might end up changing to something like this:

```html
<script src="/pluginName/js/lib/some_api.js"><script>
<script src="/pluginName/js/src/another_file.js"><script>
<script src="/pluginName/js/src/yet_another_file.js"><script>
<script src="/pluginName/js/client_system.js"></script>
```

Say I end up making some 50 themes, whenever I make a change like this I have to go threw and update all of my templates as well. However if I define this as a helper in my plug-in:

```js
hexo.extend.helper.register('pluginName_getClientSystem', function () {
 
    return '<script src=\"/pluginName/js/lib/some_api.js\"><script>' +
    '<script src=\"/pluginName/js/src/another_file.js\"><script>' +
    '<script src=\"/pluginName/js/src/yet_another_file.js\"><script>' +
    '<script src=\"/pluginName/js/client_system.js\"></script>';
 
});
```

Then I can always just have this in the body of my templates:

```html
<%- pluginName_getClientSystem()  %>
```