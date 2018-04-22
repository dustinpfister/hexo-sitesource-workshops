---
title: Working with lines in three.js
date: 2018-04-19 15:21:00
tags: [js,canvas,three.js,animation]
layout: post
categories: three.js
id: 178
updated: 2018-04-22 13:11:12
version: 1.2
---

This month I have been working towards developing a solid understanding of the basics of [three.js](https://threejs.org/) as it is a great project that helps with everything, and anything 3d in a javaScript environment. As such it was only a matter of time until I would get around to working out a few quick demos about how to work with lines in three.js. Doing so is not that hard at all, and can quickly become very fun allowing me to draw in 3d. 

<!-- more -->

There is only so much to write about with the Line, and LineSegments constructors in three.js, so to help keep this post from being to thin I will also be writing about LineLoop, Line3, and the Materials that can be used with Lines. There is also the Path constructor that can be used to make 2d shapes, making it similar to the 2d canvas drawing context. Speaking of canvas that to can be used as a way to generate 2d textures that can be used in materials as well. 

So there is a great deal to know about when it comes to making lines in three.js for both 3d, and 2d. In this post I will be briefly covering all the options, and provide some examples.

## What you should know before hand

This is an advanced post on just one little aspect of three.js which is a javaScript project that allows for doing things involving solid geometry. It is not a getting started post on three.js, or any additional aspects of javaScript in general. 

You will want to know about the Vector3 constructor as that is what is used to define points in 2d space in three.js. You should be aware of Materials, Cameras, Renderer's, and the Scene that are all needed to make a three.js project.

As I say in every three.js post of mine, three.js is a project where the version number matters big time. In this post I am using [three.js 0.91.0](https://github.com/mrdoob/three.js/tree/r91) ( or just r91 for short )

## A word On Materials when working with lines.

If you are just making lines, and nothing that will compose a solid object or face, the it does not make sense to use a material that is designed to be used with something that is just a string of points in space.

So if you aim to just draw some lines, and not something that will compose a solid object there are two special materials in three.js that are intended to be used with just lines. [LineBasicMaterial](https://threejs.org/docs/index.html#api/materials/LineBasicMaterial), and [LineDashedMaterial](https://threejs.org/docs/index.html#api/materials/LineDashedMaterial)

## The Line, and LineSegments Constructors

One of the best ways to go about getting started with lines in three.js is to just use the Line constructor. There is also the LineSegments constructor that works pretty much the same way only it uses a different rendering method.

A basic example of one of these would be to just create a geometry, push vectors to its vertices array, and then use that geometry with a line material to create an instance of Line that can then be added to a scene.

```js
var geometry = new THREE.Geometry();
geometry.vertices.push(
    new THREE.Vector3(0, -10, 0),
    new THREE.Vector3(10, 0, 0),
    new THREE.Vector3(0, 10, 0));
 
scene.add(new THREE.Line(geometry, new THREE.LineBasicMaterial({
    color: 0x0000ff
})));
```