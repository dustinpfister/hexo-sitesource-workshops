---
title: Using the axios promise based http client in node.js.
date: 2018-01-10 10:25:00
tags: [js,node.js]
layout: post
categories: node.js
id: 130
updated: 2018-01-10 19:52:53
version: 1.3
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

## Basic use case of axios (GET example with no options)

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

## Setting up a simple server

For this project I experimented with making a server from the ground up, which I something I do now and then rather than installing [hapi](https://www.npmjs.com/package/hapi), or [express](https://www.npmjs.com/package/express).

```js
let http = require('http'),
fs = require('fs'),
path = require('path'),
port = process.argv[2] || 8080,
dir_public = 'public';
 
let forMethod = {
 
    get: function (req, res) {
 
        let ext = path.extname(req.url).toLowerCase(),
        uri = path.join(dir_public, req.url);
 
        // if no ext then assume index.html of path
        if (!ext) {
 
            uri = path.join(dir_public, req.url, 'index.html');
            ext = '.html';
 
        }
 
        fs.readFile(uri, 'utf-8', function (e, data) {
 
            if (e) {
 
                res.writeHead(500);
                res.end(e.message);
 
            } else {
 
                // default mime to html
                let mime = 'text/html';
                // set plain text for *.js
                mime = ext === '.js' ? 'text/plain' : mime;
 
                res.setHeader('Content-Type', mime);
                res.writeHead(200);
                res.end(data, 'utf-8');
 
            }
 
        });
    },
 
    post: function (req, res) {
 
        var body = '';
 
        req.on('data', function (chunk) {
 
            body += chunk;
 
        });
 
        req.on('end', function () {
 
            // parse what should be JSON
            body = JSON.parse(body);
 
            if (body.iwant) {
 
                if (body.iwant === 'theanwser') {
 
                    res.end('42');
 
                } else {
 
                    res.end('sorry');
 
                }
 
            } else {
 
                res.end('sorry');
 
            }
        });
 
    }
 
};
 
let server = http.createServer(function (req, res) {
 
        let method = forMethod[req.method.toLowerCase()];
 
        if (method) {
 
            method(req, res);
 
        } else {
 
            res.end('unsupported method');
 
        }
 
    });
 
server.listen(port, function () {
 
    console.log('check it on : ' + port);
 
});
```

It's a bit crude, but I just wanted something in place for this test project when it comes to using axios as a way to make requests from a browser.

## The public folder

For the purpose of this test project I quickly threw together a simple static website that I coded by hand. When the server script is started I can visit the site and test out my demos with my server.

The public folder just contains a main index.html, and two demos do far for making get requests, and post requests from the browser.

## The post example (client)

For a post request example I just made a project where I make a post request to the server, and get a response if the text matches a certain something.

```html
<html>
    <head>
        <title>test_axios</title>
    </head>
    <body>
        <h2>Post example: </h2>
        <hr>
        <p>simple post example</p>
        <script src="/js/axios.js"></script>
        <script>
            var send = function () {
                var el = document.getElementById('text'),
                text = el.value;
                axios.post('/',{iwant: text}).then(function(res){
                    console.log(res.data);
                    document.getElementById('out').innerHTML = res.data;
                });
            };
        </script>
        <span>I want: <input id="text" type="text" value="theanwser"></span>
        <input type="submit" value="send" onclick="send()">
        <p id ="out"></p>
    </body>
</html>
```

## Conclusion

Axios is a good solution for making requests from a node.js, and browser environment. In the future I might update this post to cover some more advanced examples. This is a great project, it deserves a great post.