---
title: Getting started with three.js with a basic cube demo
date: 2018-04-04 20:48:00
tags: [js,canvas,three.js]
layout: post
categories: three.js
id: 167
updated: 2018-04-07 13:16:48
version: 1.1
---

I have been wanting to write a series of posts in [three.js](https://threejs.org/) for a while now, and I do not care to put it off any longer. I have fiddled with three.js in the past, but never really got into it. I have enough experience with it to know that it helps making projects the involve 3d objects very easy, yet it is still something that takes a significant investment of time to get fairly solid with.

Also three.js is one of those javaScript projects that is just plain awesome. Working with solid geometric space is one of the main reasons why I got into programing in the first place, so of course I need to write about this one, how can I not? So this will be a getting started post, that will kick off at least around ten additional posts on this subject, and I can see it going beyond that easy.

<!-- more -->

## A word about three.js versions

Three.js is a project where the version number matters a lot, very significant changes are still being made all the time. In this demo I am using [version r91](https://github.com/mrdoob/three.js/tree/r91/build).

It seems like new revisions come out as often as once a month, and when they do there are a whole lot of changes, so I decided to structure things in a way in which I can make demos for each revision.

## setup

So three.js is very much a front end resource, so installing will not likely involve npm, unless you want to do something involving [webpack](https://webpack.js.org/) in which I guess it would involve npm. For me I did not use any package manager, and I wanted to set up a situation in which I have multiple versions of three.js in a name space, so I just grab versions of three.js manually from the [github repo](https://github.com/mrdoob/three.js), and pasted them in all low tech like.

In any case you want to get three.js available in the browser one way or another, including the plain old simple way of having a script tag linking to the location of three.js.

As such the html of one of my demos looks like this for the moment.

```html
<!doctype html>
<html>
    <head>
        <title>test_threejs demos</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="/css/style.css">
    </head>
    <body>
        <div class="nav_container container">
            <div><h1>three.js demos</h1></div>
            <div> <a href="/">HOME</a> | <a href="/demos">DEMOS</a> </div>
        </div>
        <div class="content_container container">
            <h2>three.js demo page: </h2>
            demoName : camera-perspective <br>
            revision used : r91
 
            <!-- link to three.js -->
            <script src="/js/threejs/0.91.0/three.min.js" ></script>
            <h1>Three.js (r91) cube demo</h1>
 
            <!-- container for my demo -->
            <div id="demo"></div>
 
            <!-- link to the source code of my demo-->
            <script src="cube/js/main.js"></script>
        </div>
    </body>
</html>
```