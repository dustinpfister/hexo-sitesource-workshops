---
title: Client side javascript in a node.js environment using jsdom
date: 2018-01-11 16:32:00
tags: [js,node.js]
layout: post
categories: node.js
id: 131
updated: 2018-01-14 12:32:00
version: 1.3
---

There comes a time now and then that I need to work with html in a server side, node.js environment. I have wrriten about a very helpful project called [cheerio](https://www.npmjs.com/package/cheerio) that works well if I just want to grab at something liek a link, or maybe make some kind of edit to html. However cheerio is not an actual emulation of a browser environment. There are other projects that aim to actually emulate an actual usable browser environment for the purpose of getting client side apparitions to work in a node.js project server side. The npm package [jsdom](https://www.npmjs.com/package/jsdom) is one such project, and as such this post will be about how to use jsdom to bring a browser environment to node.

<!-- more -->

Basic example of jsdom

For a basic example of using jsdom I started with with a hard coded html string, and loaded it with the constructor that is exported by the jsdom module. What is returned by the jsdom constructor is something that I quickly found to be just like that of the DOM that I am familiar with when it comes to working within a browser environment. 

I was able to quickly, and easily get the innerHTML of an element in the very same fashion. SOmething that I would expect from a project that aims to emulate a browser environment in a node.js environment. 

```js
let jsdom = require('jsdom').JSDOM,
 
// some hard coded html
html = ''+
'<!DOCTYPE html>'+
    '<html>'+
    '<head>'+
        '<title>Blank</title>'+
    '</head>'+
    '<body>'+
        '<p>Hello World</p>'+
    '</body>'+
'</html>',
 
// get the dom by calling the jsdom constructor, and giving it the html
dom = new jsdom(html),
 
// get the window object @ dom.window
window = dom.window,
 
// now just do whatever, just like in the browser
el = window.document.querySelectorAll('p')[0];
 
console.log(el.innerHTML); // hello World
```

So far it seems like this project might be just what I had in mind when it comes to having a way to run client side code headless on a server.

## Running a script tag with jsdom

So this is what really sets jsdom apart from other projects like cheerio, which is a great project, it's just that it is really just good for transversing over html content, and maybe making an edit or two. Jsdom can actually run most client side scripts headless.

```js
let jsdom = require('jsdom').JSDOM,
 
// some hard coded html
html = ''+
'<!DOCTYPE html>'+
    '<script>'+
        'console.log(\'I am a script tag.\');' +
    '</script>';
 
// logs 'I am a script tag' in the console.
new jsdom(html,{ runScripts: 'dangerously' });
```

## Don't expect everything to work.

Do not expect everything to work, at least not out of the box.

For one thing scripts will not just run by default, as you can see in the example I need to set the value 'dangerously' to the property 'runScripts' in a config object that I pass to the jsdom constructor. As you might expect this is done for security reasons when loading content from untrusted sources, but if you are justing testing things out with your own work, and you know what everything does it is of course not an issue.

In addition to scripts not just working by default without giving the proper runScripts value, many thing will not work without additional modules, other things might work but in a pretend only kind of fashion. Anything that has to do with canvas will for instance not render, because there is nothing to render to if we are going headless. There is still a way to get this working with jsdom, if for some reason you want to, but it involves the use of additional projects.

## Running an external html file, and it's sub resources.

