---
title: The node.js http module
date: 2018-02-06 20:32:00
tags: [js,node.js]
layout: post
categories: node.js
id: 146
updated: 2018-02-06 20:36:16
version: 1.0
---

The node.js http module.

<!-- more -->

# Basic example of http.

```js
let http = require('http');
 
let server = http.createServer();
 
server.on('request', function (req, res) {
 
    res.end('hello world');
 
});
 
server.listen(port);
```