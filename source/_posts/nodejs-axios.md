---
title: Using the axios promise based http client in node.js.
date: 2018-01-10 10:25:00
tags: [js,node.js]
layout: post
categories: node.js
id: 130
updated: 2018-01-10 10:55:32
version: 1.2
---

Axios is a javaScript promise based http client for node.js, and the browser. making requests with axios is pretty simple, however if need be I can still set all relevant options like headers, and url parameters. In short it is yet another way to make get, and post requests to a server on the web somewhere via scripting http.

<!-- more -->

## Getting started

Of course I assume you have a decent understanding of javaScript, node.js, and git as this is not a post intended for beginners of web development.

As with all my projects where I am just testing something out for the first time, I created a folder called test_axios, cd into it, do an npm init, and install what I am testing out via npm install. In this test folder on top of using axios, I am also using [cheerio](/2017/11/28/nodejs-cheerio/) to help work with html that I am grabbing at.

```
$ mkdir test_axios
$ cd test_axios
$ npm init
$ npm install axios
```

If you want you can also just clone in the demos I am making here with git as I have placed the [test folder on my github account](https://github.com/dustinpfister/test_axios).

So you can just clone in the folder, cd into it, and run the basic demo I made like this:
```
$ git clone https://github.com/dustinpfister/test_axios
$ cd test_axios
$ node basic
```

## Basic use case of axios

For by basic example I am using axios to get the html of the webpage [https://www.google.com](https://www.google.com), then loading the html into cheerio to help get the href attributes and inner text of each link.

```js
let axios = require('axios'),
cheerio = require('cheerio');
 
axios.get('http://www.google.com/').then(function (html) {
 
    let $ = cheerio.load(html.data);
 
    // loop all links
    $('a').each(function (i, span) {
 
        let href = $(this).attr('href'),
        text = $(this).text();
 
        // log the inner text, and the href of the link
        console.log(text + ' : ' + href);
 
    })
 
}).catch (function (e) {
 
    console.log(e);
 
});
```

So right off the bat axios strikes me as one of the best options for making get requests. That is pretty simple, and easy to remember. This is of course just a get request I am making for a public web page, but don't worry when it comes to doing something more complicated everything I need is there.