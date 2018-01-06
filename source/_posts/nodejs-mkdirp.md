---
title: Making a path that may or may not be there in node.js thanks to mkdirp
date: 2017-11-14 12:39:00
tags: [js,node.js,blog,linux]
layout: post
categories: node.js
id: 92
updated: 2017-11-17 12:57:08
version: 1.1
---

When making some kind of CLI tool in node.js there is often a need to test if a certain path exists, and if it does do nothing, else make the path. In Linux there is givinh the parrents argument to the mkdir command like this:

```
$ mkdir -p foo/bar
```

But what if I need to do that but with node.js? For this there is the npm package [mkdirp](https://www.npmjs.com/package/mkdirp).

<!-- more -->

## Basic use example

Start by making it part of the project it it is not there all ready.

```
$ npm install mkdirp --save
```

Then making a path if it is not there is as simple as this:

```js
var mkdirp = require('mkdirp');
    
mkdirp('/tmp/foo/bar/baz', function (err) {
    if (err){
 
        console.log(e);
 
    }else{
 
        console.log('we are good.')
 
    }
});
```