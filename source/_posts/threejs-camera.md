---
title: Working with a perspective camera in three.js
date: 2018-04-06 11:14:00
tags: [js,canvas,three.js]
layout: post
categories: three.js
id: 168
updated: 2018-04-06 17:33:59
version: 1.2
---

One of the most important things to understand when making a [three.js](https://threejs.org/) project, is at least the basics of working with a [perspective camera](https://threejs.org/docs/index.html#api/cameras/PerspectiveCamera). There are other types of cameras to work with in three.js, but a perspective camera is the most common one that mimics the way the human eye sees the world.

<!-- more -->

In this post I will be covering some basic demos that have to do with a perspective camera, [viewing frustum](https://en.wikipedia.org/wiki/Viewing_frustum), the base [Camera Class](https://threejs.org/docs/index.html#api/cameras/Camera), and some additional things that are inherited from the [Object3D Class](https://threejs.org/docs/index.html#api/core/Object3D)

## What to know before hand

This is not an introduction to three.js, or any additional skills that are required first in order to start working with something like three.js such as javaScript, and web programing in general. I assume that you have working knowledge of javaScript, and have started working with some basic three.js examples. however if you feel that you could stand to gain a deeper understanding of perspective cameras in three.js this post might be of interest.

## The perspective camera constructor

The main method of interest in this blog post is the three.js [perspective camera constructor](](https://threejs.org/docs/index.html#api/cameras/PerspectiveCamera). ). This constructor also inherits from [Camera](https://threejs.org/docs/index.html#api/cameras/Camera), and the Camera constructor also inherits from [Object3D](https://threejs.org/docs/index.html#api/core/Object3D).

It is a good idea to have a strong foundational understanding of all of these constructors, but in this post I will be mainly focusing on the Perspective Camera Constructor.

```
var fieldOfView = 45,
aspectRatio = 16 / 9,
near = 1,
far = 1000,
 
// I can now make an instance of Perspective Camera
camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, near, far),
```

## Understanding Viewing frustum.

[Viewing frustum](https://en.wikipedia.org/wiki/Viewing_frustum) cam be thought of as a pyramid of vision that exists in front of a camera. Any object that lays inside of the pyramid will be rendered. This pyramid can be defined by an [field of view](https://en.wikipedia.org/wiki/Field_of_view) in terms of an angle in y direction. As well as additional values that define the aspect ratio of this view, as well as values that define where the top of the pyramid begins, and ends (view distance).

### Field of view

The first argument that is given to the three.js perspective camera constructor is the field of view. The value expected should be a Number representing an angle in degrees not radians.

### Aspect ratio

The aspect ratio is the second argument that is given to the three.js perspective camera constructor. This value is the width divided by the height of the desired ratio. Typically you might want to set this to something like 16 / 9, or 4 / 3. Whatever value you set will be used to determine the width and height of the near, and far rectangles of the pyramid of vision.

### Near distance

This is the near bound of the frustum, any object that is from this distance, outward to the far distance will be rendered if it is inside the pyramid of vision.

### Far distance

This is for course the far distance of the view pyramid. It is also the distance at which the aspect ratio of the field of view will be at it's largest, the bottom of the pyramid. If you are ever asking yourself, how far is to far, this value is of interest, as anything the exists beyond this distance will not be rendered.
