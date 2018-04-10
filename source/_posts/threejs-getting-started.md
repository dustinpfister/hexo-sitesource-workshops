---
title: Getting started with three.js with a basic cube demo
date: 2018-04-04 20:48:00
tags: [js,canvas,three.js]
layout: post
categories: three.js
id: 167
updated: 2018-04-07 15:56:02
version: 1.5
---

I have been wanting to write a series of posts in [three.js](https://threejs.org/) for a while now, and I do not care to put it off any longer. I have fiddled with three.js in the past, but never really got into it. I have enough experience with it to know that it helps making projects the involve 3d objects very easy, yet it is still something that takes a significant investment of time to get fairly solid with.

Also three.js is one of those javaScript projects that is just plain awesome. Working with solid geometric space is one of the main reasons why I got into programing in the first place, so of course I need to write about this one, how can I not? So this will be a getting started post, that will kick off at least around ten additional posts on this subject, and I can see it going beyond that easy.

<!-- more -->

## A word about three.js versions

Three.js is a project where the version number matters a lot, very significant changes are still being made all the time. In this demo I am using [version r91](https://github.com/mrdoob/three.js/tree/r91/build).

It seems like new revisions come out as often as once a month, and when they do there are a whole lot of changes, so I decided to structure things in a way in which I can make demos for each revision.

## Setup

So three.js is very much a front end resource, so installing will not likely involve npm, unless you want to do something involving [webpack](https://webpack.js.org/) in which I guess it would involve npm. For me I did not use any package manager, and I wanted to set up a situation in which I have multiple versions of three.js in a name space, so I just grab versions of three.js manually from the [github repo](https://github.com/mrdoob/three.js), and pasted them in all low tech like.

## HTML

In any case you want to get three.js available in the browser one way or another, including the plain old simple way of having a script tag linking to the location of three.js. In addition you might want some kind of container element in your layout where you will inject the dom element created by the renderer that is used, unless you are okay with just appending to body.

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

## The basic three.js cube example

A very typical example for getting started with three.js indeed, but still it works to cover the basics of everything if you are new to three.js. Every project will involve a scene, a camera, at least one Object to look at which will be a mesh composed of a geometry, and a material. Also in order to actually see anything you will also need a render as well. That may seem like a lot at first, but once you get into this it all starts to make sense. Trust be this is one of the easiest ways to get into working with 3d objects, and can become a whole lot of fun if you give it a chance.


```js
(function () {
 
    // a scene is needed to place objects in
    var scene = new THREE.Scene(),
 
    // I will need an camera to look at objects in the scene
    camera = new THREE.PerspectiveCamera(75, 320 / 240, 1, 1000),
 
    // I will need a geometry, in this case BoxGeometery
    geometry = new THREE.BoxGeometry(200, 200, 200),
 
    // I will need a material for the cube
    material = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe: true
        });
 
    // I need a mesh that will tie a geometry and material together
    mesh = new THREE.Mesh(geometry, material),
 
    // In order to see anything I will also need a renderer
    // to use with my scene, and camera
    renderer = new THREE.WebGLRenderer();
 
    // I must append the dom element used by the renderer to the html
    // that I am using.
    document.getElementById('demo').appendChild(renderer.domElement);
 
    // now that I have everything I need I can call some methods
    // of what I have to set up my scene, camera, and renderer.
    // I must at least add the mesh to the scene, and position the camera
    // in a way so that it is looking at the mesh
    scene.add(mesh);
    camera.position.z = 250;
    camera.position.x = 250;
    camera.lookAt(0,0,0);
    renderer.setSize(320, 240);
 
    // finally I call renderer.render to draw the current
    // state of the scene, from the perspective of the camera
    renderer.render(scene, camera);
 
}
    ());
```

This example will just draw a cube on the screen. So lets have a break down on everything that is going on here.

## The Scene

The [Scene](https://threejs.org/docs/index.html#api/scenes/Scene) is the space in which everything will go, your objects, cameras, and anything else that would be placed in a scene like a light source. Once you have a scene we will want to add things into it, like an object of some kind to look at with a camera. 

To do this I will want to call the Object3D add method, and give it a [Mesh](https://threejs.org/docs/index.html#api/objects/Mesh), that is composed of a [Geometry](https://threejs.org/docs/index.html#api/core/Geometry), and a [Material](https://threejs.org/docs/index.html#api/materials/Material). I will touch base on all of that, because you should have at least a basic knowledge of all of those things, but not get into depth here, as each of these things could use there own posts.

```js
var scene = new THREE.Scene(); // Scene
scene.add(new THREE.Mesh( // Mesh
    new THREE.BoxGeometry(200, 200, 200), // Geometry
    new THREE.MeshBasicMaterial({ // Material
        color: 0xff0000,
        wireframe: true
    })
));
```

## The Camera

Full post on [Camera](/2018/04/06/threejs-camera/)

There is a core class Called [Camera](https://threejs.org/docs/index.html#api/cameras/Camera) that has some methods and properties that are shared across all camera types that are used in three.js. 

Like most objects in three.js, a Camera inherits from Object3D which gives it methods to help make changing the position, and orientation of the Camera pretty easy.

```js
var fieldOfView = 45,
aspectRatio = 16 / 9,
near = 1,
far = 1000,
 
// I can now make an instance of Perspective Camera
camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, near, far);
 
// move the camera to 250,250,250, and look at the origin.
camera.position.set(250,250,250);
camera.lookAT(0,0,0);
```

There are then four camera types to choose from, in this post I am only briefly covering the [perspective camera](https://threejs.org/docs/index.html#api/cameras/PerspectiveCamera).

## Geometry, Material, and Mesh.

To make some kind of object to look at I need it's geometry, I will also want to skin that geometry with some kind Of Material, and I will want to tie those two things together into a Mesh. In the example in this Post I used BoxGeometry to quickly create a Cube, and Just a basic Material with a Mesh.

## Renderer

In order to see anything I will need to render it using something like Canvas, or webGL. In this post I just used the webGL renderer, but there are additional renderer's available in three.js, such as the canvas renderer that uses the 2d drawing context. That will be a lot slower, but it will give greater support on platforms that do not support webGL that well.

## Object3D

Yet another Class to mention is the [Object3D](https://threejs.org/docs/index.html#api/core/Object3D) class, This is not something that you typically work with directly, but is a class that is used in many of the objects in three.js that helps to make working with three.js easy. It gives Objects like Camera, and Mesh methods like lookAT, and position.set.

## Vector3

Another class of interest that you should at least be aware of is [vector3](https://threejs.org/docs/index.html#api/math/Vector3), This is what you want to use when defining a point in 3d Space.

## Conclusion

There is a lot more to write about, but because this is just a getting started post, I thought I would just stick to writing about some of the most important aspects of three.js that one needs to be aware of in order to get anything done at all. I will likely update this post many times, as my content on three.js grows, and treat this as a good starting point to other posts of interest on three.js as I tinker with it more.