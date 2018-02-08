---
title: Working with the filesystem module in node.js
date: 2018-02-08 22:23:00
tags: [js,node.js]
layout: post
categories: node.js
id: 148
updated: 2018-02-08 18:01:32
version: 1.0
---

Working with files is a big part of most [node.js](https://nodejs.org/en) projects. I have written a [post on fs-extra]() a while back, but so far never got around to the core file system module in node.js itself.

<!-- more -->

## Basic read file example

To start off this post how about a simple read file example. Use of the method is fairly simple, I just call fs.readFile, and pass the path of the file I want to read, following with the character encoding, and finally a callback that will be called when the file is read.

```js
let fs = require('fs'),
path = require('path'),
cwd = process.cwd();
 
fs.readFile(path.join(cwd, 'README.md'), 'utf-8', function (e, data) {
 
    if (e) {
 
        console.log(e);
 
    }
 
    console.log(data);
 
});
```
