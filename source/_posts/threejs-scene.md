---
title: Working with Scenes in three.js
date: 2018-05-03 09:36:00
tags: [js,three.js]
layout: post
categories: three.js
id: 182
updated: 2018-05-03 10:17:51
version: 1.3
---

A [Scene](https://threejs.org/docs/index.html#api/scenes/Scene) in [three.js](https://threejs.org/) is a constructor that can be used to create an instance of Scene that can be used to place everything that makes up an environment in a three.js project. It can contain cameras, lights, and of course objects composed of a geometry and material.

<!-- more -->

In this post I will be covering Scenes in a bit of detail as I continue to expand, and improve [my content on three.js](/categories/three-js/)

## What to know

This is an advanced post on [three.js](https://threejs.org/) that covers just one little constructor known as [THREE.Scene](https://threejs.org/docs/index.html#api/scenes/Scene). If you are new to three.js you might want to start with my getting started post on three.js. If you are new to javaScript in general that is outside the scope of this whole collection of [posts on three.js](/categories/three-js/).

## Basic example of THREE.Scene

At a minimum you will want to have at least some kind of object to look at added to a Scene. This could just be a mesh that used a geometry from one of the built in geometry constructors in three.js such as [THREE.BoxGeometry](https://threejs.org/docs/index.html#api/geometries/BoxGeometry) with no material given to it.

Unless I aim to do something headless with a scene and one or more objects, I will also want a camera and a renderer to look at what it is that I am doing.

So a basic example of THREE.Scene might look something like this:

```js
(function () {
 
    // create a Scene
    var scene = new THREE.Scene();
 
    // add something to it
    scene.add(new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1)));
 
    // add a CAMERA to it so we can see something
    var camera = new THREE.PerspectiveCamera(45, 4 / 3, .5, 100);
 
    // position The camera away from the origin
    // and have it look at the origin
    // by default that is where something goes.
    camera.position.set(2, 2, 2);
    camera.lookAt(0, 0, 0);
 
    // we need a RENDERER to render the scene
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(320, 240);
    document.getElementById('demo').appendChild(renderer.domElement);
 
    // render the scene with the camera
    renderer.render(scene, camera);
 
}
    ());
```

By default a Mesh will use the Basic material with a random color used to paint the faces of the geometry. Of course I could create an instance of some other material, or give a color or texture to another instance of basic material that I would then give as the second argument to the Mesh constructor, but this is a post on THREE.Scene so I will not be getting into that in depth. However I will be getting into the properties of THREE.Scene including the material override property, more on that later.