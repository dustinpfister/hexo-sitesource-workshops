---
title: Making a simple static sever file with just node.js built in modules.
date: 2017-12-04 17:48:00
tags: [js,node.js]
layout: post
categories: node.js
id: 108
updated: 2017-12-04 17:58:06
version: 1.0
---

When working with many node projects I often run into a situation in which I need to just set up a simple static web sever, often purely for the sake of serving a path over http:// rather than file://. There are many npm packages to pull this off, but I often fine myself, just working out a simple solution using the built in http module in node itself. 


<!-- more -->

As such I have been making files now and then that serve as a simple solution that can be droped inot a porject path and then called from the cli with node like this:

```
$ node sever
```

As such I thought I would write a quick post on one of the latest solutions I have written for doing this:

## Sever.js file solution one

```js
/*
 *  server.js
 *
 *   This just provides a simple static server for the project.
 *
 */

var http = require('http'),
fs = require('fs'),
path = require('path'),
 
port = 8888, // port 8888 for now
root = process.cwd(); // assume current working path is root
 
// create and start the server
http.createServer(function (req, res) {
 
    // get the path
    var p = path.join(root, req.url);
 
    // get stats of that path
    fs.lstat(p, function (e, stat) {
 
        // if error end
        if (e) {
 
            res.end();
 
        }
 
        // if stats check it out
        if (stat) {
 
            // if it is not a file append index.html to path, and try that
            if (!stat.isFile()) {
                p = path.join(p, 'index.html')
            }
 
            // try to read the path
            fs.readFile(p, 'binary', function (e, file) {
 
                // if error end
                if (e) {
 
                    res.end();
 
                }
 
                // if file, send it out
                if (file) {
 
                    res.writeHead(200);
                    res.write(file, 'binary');
                    res.end();
                }
 
            });
 
        }
 
    });
 
}).listen(port);
```

So of course this solution just handles GET requests which works fine in most situations. In the event that a path is given such as '/' then '/index.html' is assumed. In addition in the event of any kind of error the request is just ended, and I do not serve any kind of 404 page.

## Conclusion

Writing these kinds of files now and then is fun. Of course it is not battle tested, but it seems to work fine for me in most cases when it just comes to playing with some kind of javaScript project that needs to be severed up over http.