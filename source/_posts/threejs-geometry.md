---
title: Making custom geometry in three.js
date: 2018-04-14 16:03:00
tags: [js,canvas,three.js]
layout: post
categories: three.js
id: 174
updated: 2018-04-14 15:23:30
version: 1.1
---

When working with [three.js](https://threejs.org/) there are many built in geometry constructors that can be used to quickly make many simple, common, solid shapes like cubes, and spheres. However when getting into making an actual three.js project rather than just yet another simple rotating cube demo, there is going to be a need for a way to make custom geometry.

<!-- more -->

There are ways of importing geometry from an external source that was created with a 3d modeling program like blender. However what is you want to make a geometry my way of some javaScript, rather than json data? This is where the Geometry constructor comes into play.


## What to know before hand.

I assume that you know a thing or two about javaScript, also it would be a good idea to [learn the basics](/2018/04/04/threejs-getting-started/) of three.js first if you have not. This is an advanced post on the [three.js Geometry constructor](https://threejs.org/docs/index.html#api/core/Geometry) that is an easy, but maybe not so efficient way of creating geometry that can be used in a Mesh that can be viewed, and worked with in a scene in three.js.

This post is also on the regular Geometry constructor, rather than BufferGeometry.

## Geometry vs BufferGeometry

In three.js there is [BufferGeometry](https://threejs.org/docs/index.html#api/core/BufferGeometry), and then regular [Geometry]((https://threejs.org/docs/index.html#api/core/Geometry)) constructors. The reason for this is that the regular Geometry constructor is easier to work with as the vertices, faces, and so forth are stored directly. However this comes at a performance loss.

Still if you are new to making custom geometry it would make sense to start with the regular Geometry first, then progress into the more advanced BufferGeometry to know how to make your projects run faster.