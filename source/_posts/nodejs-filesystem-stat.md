---
title: Getting file system stats with fs.stat
date: 2018-02-15 21:00:58
tags: [js,node.js]
layout: post
categories: node.js
id: 153
updated: 2018-02-19 17:52:02
version: 1.1
---

Getting the stats of s file is quick and easy in [node.js](https://nodejs.org/en) with just the core file system modules fs.stat method.

<!-- more -->

## basic example of fs.stat

```js
let fs = require('fs'),
path = require('path'),
cwd = process.cwd();
 
fs.stat(path.join(cwd, 'README.md'), function (e, stats) {
 
    if (e) {
 
        console.log(e);
 
    }
 
    console.log(stats);
 
});
```
