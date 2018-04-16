---
title: Vector3 in three.js for points in space
date: 2018-04-15 20:18:00
tags: [js,canvas,three.js]
layout: post
categories: three.js
id: 175
updated: 2018-04-15 20:56:14
version: 1.2
---

In [Vector space](https://en.wikipedia.org/wiki/Vector_space) you have one or more objects that can be called Vectors. In [three.js](https://threejs.org/) there are a few constructors that can be used to created these objects which can be used for many things. This post is about the [Vector3](https://threejs.org/docs/index.html#api/math/Vector3) constructor that is useful in 3d space. A 3d Vector3 Instance consists of an x,y, and z value which makes it useful for plotting a single point in 3d space. It also has a few more uses, such as finding [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) via the length method of the Vector3 instance, which is the distance from the vector to the origin (0,0,0).

<!-- more -->

Vector3 instances are also used when creating geometry that will be used in a mesh, and there are also many properties in various objects that expect an instance of Vector3. There also have a whole bunch of useful methods that can be used for typical tasks such as finding the distance between two points in space.

## What to know

This is an advanced post on three.js in which I am writing about the Vector3 constructor, this is not a simple [getting started post](/2018/04/04/threejs-getting-started/) on three.js, or javaScipt in general. Vector3 instances are used in the process of making custom geometry, I will not be getting into that in depth, or many of the other use cases for Vector three. This post will focus on what there is to know about the constructor.

## Three.js version number matters.

Three.js is a project where the version number matters, in this post I am using [r91](https://github.com/mrdoob/three.js/tree/r91), if the code examples in this post or [any three.js post](/categories/three-js/) of mine that might be a reason why.

## Basic example of Vector3

To create a single instance of Vector3 I just need to call the constructor ans pass three arguments that are the x,y, and z values of the vector.

```js
    var r = Math.PI / 180 * 45,
    x = Math.cos(r),
    y = Math.sin(r),
 
    vec = new THREE.Vector3(x, y, 0);
 
    console.log(vec.isVector3); // true
    console.log(vec.x, vec.y, vec.z); // 0.70... 0.70... 0
    console.log(vec.length()); // 1
```

There are for the most part only 3 properties of a Vector3 instance that are of interest in most situations which of course is the x , y, and z properties. To my knowledge there are only four properties in total, the fourth being the isVector property which should always be true. Every thing else of interest in a Vector3 instance is a method, such as the length method that will give the current Euclidean distance, or distance from the origin.

