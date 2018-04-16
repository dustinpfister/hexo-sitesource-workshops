---
title: Adding fog to a scene in three.js
date: 2018-04-16 11:59:00
tags: [js,canvas,three.js]
layout: post
categories: three.js
id: 176
updated: 2018-04-16 12:04:50
version: 1.0
---

Adding Fog to a Scene in [three.js](https://threejs.org/) is a fairly easy, and straight forward process, so this should be a quick post for today. A Fog is a nice effect to have for most projects as it allows for a more graceful transition from rendering within range to no longer rendering when an object is to far from the camera, as apposed to the object just all of a sudden disappearing. Even if you have the far value of the camera set to a high value so that the object is just a single pixel before it is no longer rendered, it can still be a nice additional effect on top of the object just simply getting smaller.

<!-- more -->
