---
title: The ejs template engine, for making templates in node.js
date: 2017-12-07 14:25:00
tags: [js,node.js]
layout: post
categories: node.js
id: 110
updated: 2017-12-07 16:00:07
version: 1.5
---

I just recently wrote a post on the node.js powered html template engine called pug, and mentioned that I have some experience working with ejs, which So far I seem to like the best when it come to doing this sort of thing in a node.js environment. However so far I have not wrote a post on ejs.

<!-- more -->

## Why EJS

EJS stands for Embedded JavaScript and it I see it as an enhanced HTML. It differs from the syntax used in pug and markdown in the sense that it might not be a clean language, but it more closely resembles tired yet true plain old Hyper Text.

## Getting stared with the EJS npm package

Probably one of the best ways to work with ejs would be to use [the ejs npm package on npmjs.com](https://www.npmjs.com/package/ejs). I assume as always with these kinds of posts that you have a background with javaScript, and have [node.js](https://nodejs.org/en/) and it's package manager npm installed on your computer. If so I just create a new project folder, and install ejs into it with npm.

```
$ mkdir test_ejs
$ cd test_ejs
$ npm install ejs
```

Once that is done I made an ejs folder in the root path of test_ejs, this is where I placed my ejs files. Also within the ejs folder I also placed a _parts folder for my ejs partial files.

## Basic EJS example, just rendering a simple ejs string to HTML

The whole point of EJS, or any template engine and language is to ultimately render plain old HTML which will be written out as HTML files, or delivered to the client on demand if we are talking about some kind of advanced content management system rather than the simple static site generators that I often work with.

So lets start out with a basic example of this. In my project folder I made a basic.js file that looks like this.

```js
var ejs = require('ejs'),
 
html = ejs.render('<p> hello <%= name %> </p>', {name: 'ejs'});
 
console.log(html); // <p> hello ejs </p>
```

Here we have the whole idea of this to begin with at a very simple, and easy to understand level. I give the render method of the ejs package a string of ejs markup, and an object containing values that can be used when rendering out the HTML. There is a great deal more to cover of course, but you should see where this is going.

## Some basics of the syntax

One of the most important aspects of ejs is of course the angle bracket and percentage sign patterns, these are what are used to tell the ejs parser that there is some javaScript to execute rather than just plain old static html.


## Escaped, and unescaped html

When working with a string in javaScript that is an html string you will want to use the dash rather than the equal sign, unless for some reason you want the html escaped.

```js
var ejs = require('ejs'),
 
htmlString = '<p>Yes this is some html</p>';
 
// escaped
console.log(ejs.render('<%=  \'' + htmlString + '\' %>'));
// &lt;p&gt;Yes this is some html&lt;/p&gt;
 
// Unescaped
console.log(ejs.render('<%-  \'' + htmlString + '\' %>'));
// <p>Yes this is some html</p>
```

## Writing a simple EJS file, and reading it.

So I could use nodes filesystem module to read an external file, and pass that to the render method. However there is also a renderFile method in ejs itself that can be used which is what I will cover here.

So I made a readfile.js file in the root space of test_ejs like this:

```js
var ejs = require('ejs');
 
// the renderFile method in action
ejs.renderFile(
 
    // first I give it a path to an *.ejs file
    'ejs/first.ejs', 
 
    // the some data to use when rendering
    {
 
        title: 'reading a file in ejs!',
        numbers: [7, 8, 9]
 
    },
 
    // callback with html, or an error
    function (err, html) {
 
        if (err) {
 
            // reject if an error happens
            console.log(err);
 
        }
 
        //resolve with the html
        console.log(html);
 
    }
 
);
```

Now I am ready to read an *.ejs file in the ejs folder, or at any path that I pass to readfile.js when calling it from the command line. So the first.ejs file in the ejs folder looks like this:

```
<!doctype html>
<html>
 
    <head>
 
        <!-- use an title value given, or default to the String 'Untitled' -->
        <title><%= title || 'Untitled'%></title>
        <meta charset="UTF-8">
 
    </head>
    <body>
 
        <h1>This is my first EJS file</h1>
 
        <% var nums = numbers ? numbers: [1,2,3] %>
 
        <!-- and then use it to render -->
        <ul>
        <% nums.forEach(function(n){ %>
 
            <li><%= n %></li>
 
        <% }) %>
        </ul>
 
    </body>
 
</html>
```

So now when I call my readfile.js script from the command line interface to read this file I will get the following html:

```
$ node readfile
```

```html
<!doctype html>
<html>
 
    <head>
 
        <!-- use an title value given, or default to the String 'Untitled' -->
        <title>reading a file in ejs!</title>
        <meta charset="UTF-8">
 
    </head>
    <body>
 
        <h1>This is my first EJS file</h1>
 
        <!-- and then use it to render -->
        <ul>
 
            <li>7</li>
 
            <li>8</li>
 
            <li>9</li>
 
        </ul>
 
    </body>
 
</html>
```

## Having EJS partials

Partials are a great way of breaking my templates into many smaller components that come together to make an overall layout for a website. As I mentioned earlier I placed a _parts folder in my ejs folder, this is for said partials.

One way to do this is to have some kind of layout.ejs that will have the certain components of an html document that are consistent with all pages, such as the doctype, and a meta tag that tells the browser I am using utf-8 charset encoding.

So in the /ejs folder I have that layout.ejs file that looks like this:

```
<!doctype html>
<html>
 
    <head>
 
        <title><%= title || 'Untitled'%></title>
        <meta chartset="UTF-8">
 
    </head>
    <body>
 
        <%- include('_parts/nav.ejs') %>
 
    </body>
 
</html>
```

And as you can see I am using a nav.ejs file using the include method. This nav.ejs file will render html that has to do with site navigation.

here is the nav.ejs file at /ejs/_parts

```
<!-- this is my nav.ejs partial! -->
 
<div class="navbar">
 
   <%  var sections = sections || ['home'] %>
 
   <% sections.forEach(function(sec){ %>
 
       <div><a href="/<%= sec %>"><%= sec %></div>
 
   <% }); %>
 
</div>
```

## Conclusion

EJS is a great solution for making templates in a node.js environment, maybe some of these other solutions have there strengths, pug does have a pretty clean, and easy to follow look to it, but I seem to enjoy dealing with ejs the best.