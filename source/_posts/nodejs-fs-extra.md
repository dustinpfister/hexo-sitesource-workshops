---
title: Using fs-extra as a drop in replacement for the built in node.js file system module
date: 2018-01-08 08:44:00
tags: [js,node.js]
layout: post
categories: node.js
id: 128
updated: 2018-01-08 09:10:46
version: 1.0
---

For the most part the [built in node.js file system module](https://nodejs.org/api/fs.html) works just fine by itself. However it can be a bit lacking. As such I find myself adding in projects like [mkdirp](/2017/11/14/nodejs-mkdirp/), and [rimraf](/2017/05/14/nodejs-rimraf/) to pring about functionality that I often think should be a part of the module. Also as of node 8.x it would seem that many of the methods do not return promises as an alterative to using callbacks, becuase of that I often find myself wrting methods, or using some kind of project like [bluebird](/2017/12/02/nodejs-bluebird/) to [promisify the methods](http://bluebirdjs.com/docs/api/promise.promisify.html) in the fs module.

<!-- more -->


To solve these problems and much more there is an npm package called [fs-extra](https://www.npmjs.com/package/fs-extra). This is a great project, that can be used as a drop in replacement for the built in node.js file system module.


## The deal with the node fs module

So a basic example of the file system module in node.js might look something like this:

```js
let fs = require('fs');
 
// I can still use async fs methods like normal
fs.readFile('README.md', 'utf-8', function (e, data) {
 
    console.log('using the built in node js module to read a file: ');
 
    if (e) {
 
        console.log(e);
 
    }
 
    console.log(data);
 
});
```

In many simple projects this might work just fine, but as a project grows more complex, it can quickly lead to what many refer to as call back hell. That is a situation in which there are many nested call backs inside of each other, that ends up making it hard to read, maintain, and catch problems like if erros are not being handled well.

One way to avoid call back hell if of course to use promises.

```js
// If I want to use promises I have to do something like this:
let readFile = function (uri, encoding) {
 
    let fs = require('fs');
 
    encoding = encoding || 'binary';
 
    return new Promise(function (resolve, reject) {
 
        if (!uri) {
 
            reject(new Error('no uri given'));
 
        }
 
        fs.readFile(uri, encoding, function (e, data) {
 
            if (e) {
 
                reject(e);
 
            }
 
            resolve(data);
 
        });
 
    });
 
};
 
// Now I can use promises with js
readFile('README.md','utf-8').then(function (data) {
 
    console.log('using my readFile method that makes use of promises: ');
 
    console.log(data);
 
}).catch (function (e) {
 
    console.log(e)
 
});
```

This is a neater way of doing the same thing that call backs to when it comes to asyn tasks, and the promises can also be chained together as well. I can return another promise within the function that I pass to then, that does another async task, making my code neat, compartmentalized, and easy to follow.

However there should be some kind of module that does all of this for me, so I do not have to keep rewriting, or copying and past methods like the readFile method in the above example. This is one of the things that fs-extra can take care of for me.

## fs-extra promisifiys nodes file system methods.

For me this is one of the best reasons why to consider adding in fs-extra to a node.js project. Each node.js file system module now returns a promise when it is used as a replacement for fs, out of the box.

```js
let fs = require('fs-extra');
 
// now I don't have to write my readFile method each time
// I can just install fs-extra
fs.readFile('README.md','utf-8').then(function (data) {
 
    console.log(data);
 
}).catch (function (e) {
 
    console.log(e)
 
});
```

However I can still use my callbacks also if for some reason I want it to, so it still works with older code that I have not updated to make use of promises in place of overuse of call backs.