---
title: Using fs-extra as a drop in replacement for the built in node.js file system module
date: 2018-01-08 08:44:00
tags: [js,node.js]
layout: post
categories: node.js
id: 128
updated: 2018-01-08 12:05:09
version: 1.5
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

## fs-extra gives me file system methods that return promises

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

## lets take a look at some of the methods.

fs-extra does more than just make it so the methods I all ready use return promises, it also adds a whole bunch more methods to the file system api that are pretty useful. For a full list there is the [readme of the project](https://github.com/jprichardson/node-fs-extra/blob/master/README.md#methods), however I will also be covering some of the most important ones here as well.

### fs.copy method to copy files recursively

On method that seems to not be there in the node.js module, is a decent method for copying files. There is fs.copyFile(https://nodejs.org/api/fs.html#fs_fs_copyfile_src_dest_flags_callback), but what if I want to copy a complex file system structure that contains many nested files, and paths, recursively? Also what if the target folder is not there? Am i going to get a nasty error, or is the method going to make it for me?

I could write a solution that makes use of projects like mkdirp(/2017/11/14/nodejs-mkdirp/), and node-dir, and spend a good hour of my life or longer putting just one little method togetaher to do it, or I could just use the copy method that fs-extra gives me.

```js
let fs = require('fs-extra');
 
fs.copy('source', 'target').then(function () {
 
    console.log('copyed source folder!');
 
}).catch (function (e) {
 
    console.log(e);
 
});
```

This copies a source folder over to a target, and if the target is not there it makes it for me. Wow that was fast, I like it when I get things like this out of the way in a flash so I can more on to more important things.

## fs.emptyDir

This is another method that comes to mide that I mighbt use now and then with some projects. It will empty a path of it's contents, and if it is not there it will create it. A common task if I am making some kind of project that makes a whole bunch of files in a certian target folder, and I want to make sure that it is empty before the project starts building files.

Check this out for example:

```js
let fs = require('fs-extra');
 
fs.emptyDir('target').then(function () {
 
    console.log('target should be there, and empty');
 
    // lets check
    return fs.readdir('target');
 
}).then(function (files) {
 
    console.log('the files in target:');
 
    // should be an empty array
    console.log(files); // []
 
}).catch (function (e) {
 
    console.log(e);
 
});
```

This demo will check for the folder target, if it is not there it will make it. It then reads the dir and spits back an array of files in the dir, which should be an empty array, and of course it is. This is also a great example of why promises rock, I can do many async tasks one after another like this.

## fs.ensureDir

This is a very helpful method that will make a dir if it is not there to begin with. I have [written a post on the npm package mkdirp](/2017/11/14/nodejs-mkdirp/) that does the same thing as a stand alone project. however now it seems like it might be better to just use fs-extra to get this functionality, along with so much more.

## fs.move

This method can be used to move files, and even full paths from one place to another. It appears that there is no native move method in the node.js file system module, so this is a nice addition.

```js
let fs = require('fs-extra'),
 
source = process.argv[2],
target = process.argv[3];
 
let check = function () {
 
    return new Promise(function (resolve, reject) {
 
        if (source && target) {
 
            resolve();
 
        }
 
        reject(new Error('must give a source and target in that order:'));
 
    });
 
};
 
check().then(function () {
 
    return fs.move(source, target);
 
}).then(function () {
 
    console.log('moved source to target:');
 
}).catch (function (e) {
 
    console.log(e.message);
 
});
```

## conclusion

There are a lot of projects like this on npmjs, for example there is a similar project that is used by hexo called [hexo-fs](https://www.npmjs.com/package/hexo-fs) that also augments the file system api in node.js. However this is by far the best one I have worked with so far. I have really been getting into promises lately also, and I am loving them, as such this is a package I will most likely be using more so in the future with my various projects.

The best thing about this project is that it keeps me from having to install a whole bunch of little projects that all do one, little thing. As far as I can tell, it looks like this might cover everything when it comes to working with the file system. Except for maybe a method that will loop over all files that match a given pattern, for that i have found [node-dir](/2017/11/05/nodejs-node-dir/).