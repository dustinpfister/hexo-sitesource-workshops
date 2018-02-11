---
title: The node.js http module
date: 2018-02-06 20:32:00
tags: [js,node.js]
layout: post
categories: node.js
id: 146
updated: 2018-02-11 10:27:09
version: 1.1
---

The node.js http module.

<!-- more -->

# Basic example of http.

For a basic hello world example I made a new instance of a server object, by calling http.createServer, and then used the 'request' event with the server object to respond to any incoming request with 'hello world' by way of res.end. Finally the server is started my calling server.listen, and giving a port to listen on.

```js
let http = require('http'),
 
server = http.createServer(),
 
port = process.env.PORT || process.env[2] || 8080;
 
server.on('request', function (req, res) {
 
    res.end('hello world');
 
});
 
server.listen(port);
```

## Processing a post request

When making a simple project that will end up doing something with post requests there is a need to process the incoming body of the post request. That is to parse the body into an Object that can be worked with.

To do this there is the 'data', and 'end' events  that can be used with a request object to concatenate the incoming Buffer chunks into a single String or Buffer, and then do something with the payload before sending a response.

```js
let http = require('http'),
 
server = http.createServer(),
 
port = process.env.PORT || process.env[2] || 8080;
 
server.on('request', function (req, res) {
 
    if (req.method === 'POST') {
 
        let body = '';
        req.on('data', function (chunk) {
 
            body += chunk.toString();
 
            // do some basic sanitation
            if (body.length >= 200) {
 
                // if body char length is greater than
                // or equal to 200 destroy the connection
                res.connection.destroy();
 
            }
 
        });
 
        // once the body is received
        req.on('end', function () {
 
            if (body) {
 
                res.end('okay thank you for: ' + body);
 
            } else {
 
                res.end('thanks for the post request, but it would be nice if it had something');
 
            }
 
        });
 
    } else {
 
        res.end('not a post');
 
    }
 
});
 
server.listen(port);
```