---
title: Vector3 in three.js for points in space
date: 2018-04-15 20:18:00
tags: [js,canvas,three.js]
layout: post
categories: three.js
id: 175
updated: 2018-04-15 20:30:24
version: 1.0
---

In [Vector space](https://en.wikipedia.org/wiki/Vector_space) you have one or more objects that can be called Vectors. In [three.js](https://threejs.org/) there are a few constructors that can be used to created these objects which can be used for many things. This post is about the [Vector3](https://threejs.org/docs/index.html#api/math/Vector3) constructor that is useful in 3d space. A 3d Vector3 Instance consists of an x,y, and z value which makes it useful for plotting a single point in 3d space. It also has a few more uses, such as finding Euclidean distance via the length method of the Vector3 instance, which is the distance from the vector to the origin (0,0,0).

<!-- more -->

Vector3 instances are also used when creating geometry that will be used in a mesh, and there are also many properties in various objects that expect an instance of Vector3. There also have a whole bunch of useful methods that can be used for typical tasks such as finding the distance between two points in space.
