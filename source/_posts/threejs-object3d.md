---
title: The Object3D Base Class in three.js
date: 2018-04-23 19:35:00
tags: [js,canvas,three.js]
layout: post
categories: three.js
id: 180
updated: 2018-04-24 18:40:52
version: 1.4
---

The [Object3D](https://threejs.org/docs/index.html#api/core/Object3D) base class in [three.js](https://threejs.org/) is one of the most important classes to be aware of when making some kind of project involving three.js. It is in use in many objects in three.js including things like cameras, lights, and the the Meshes that are placed in a Scene. This base class adds a whole bunch of common properties, and methods for any kind of object in the project. Once you know a thing or two about Object3D the same methods will work with any and all objects that inherent from Object3D, which is a lot.

<!-- more -->

## Basic example of Object3d using the position property

Typically I do not work with the class directly, I work with something that inherits properties and methods from Object3d. Still if for some reason I want to work with the class directly I can do so via the THREE.Object3d constructor.

```js
    // Object 3d position
    var obj3d = new THREE.Object3D();
 
    // {"x":0,"y":0,"z":0}
    console.log(JSON.stringify(obj3d.position));
 
    obj3d.position.set(3, 4, 5);
 
    // {"x":3,"y":4,"z":5}
    console.log(JSON.stringify(obj3d.position));
```

Here I made just a simple example where I am just playing with the position property, which is an instance of [Vector3](/2018/04/15/threejs-vector3/). This can be used to set the center point of the object in a Scene. In the case that the Object is a child of another object it would be the position relative to the parent Object.

## Examples of use in other constructors

There are many objects in three.js that inherit from object3D, which is why this is a good class to have a solid understanding of.

Camera's such as the perspective camera inherit from Object3D
```js
// Camera
var camera = new THREE.PerspectiveCamera(45, 4 / 3, .5, 100);
// changing position of a camera
camera.position.set(3, 1, 3);
```

So does something made with a mesh

```js
var low = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshStandardMaterial({
        emissive: 0x002a00
    }));
// changing position of a mesh
low.position.y = -1;
```

## Full demo of Object3D

I try to make it a habit to have at least one copy and past working demo of what it is that I am writing about in each blog post of mine. In this demo i am making use of an instance of Object3D to group some cubes together. I am also working with many other objects that inherit from Object3D, using the position, and rotation properties often.

```js
(function () {
 
    // Scene
    var scene = new THREE.Scene();
 
    // Camera
    var camera = new THREE.PerspectiveCamera(45, 4 / 3, .5, 100);
    camera.position.set(3, 1, 3);
 
    // Orbit Controls
    var controls = new THREE.OrbitControls(camera);
    camera.lookAt(0,  - .5, 0);
 
    // creating an instance of Object3D
    var obj = new THREE.Object3D();
 
    // a mesh that inherits from Object3D
    var low = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshStandardMaterial({
                emissive: 0x002a00
            }));
    low.position.y = -1;
    obj.add(low);
 
    var high = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshStandardMaterial({
                emissive: 0x00002a
            }));
    high.rotation.set(0, 1, 0);
    obj.add(high);
 
    scene.add(obj);
 
    // Render
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(320, 240);
    document.getElementById('demo').appendChild(renderer.domElement);
 
    // loop
    var frame = 0,
    maxFrame = 100;
    var loop = function () {
 
        var per = frame / maxFrame,
        bias = Math.abs(.5 - per) / .5;
 
        requestAnimationFrame(loop);
        renderer.render(scene, camera);
 
        high.rotation.set(0, Math.PI * 2 * per, 0);
        low.rotation.set(0, -Math.PI * 2 * per, 0);
        obj.position.set(0, -1 + 2 * bias, 0);
 
        frame += 1;
        frame = frame % maxFrame;
 
    };
 
    renderer.render(scene, camera);
    loop();
 
}
    ());
```

It may be true that Object3D by itself is not intended to be used from grouping as there is a separate constructor for that, called simply enough [Group](https://threejs.org/docs/index.html#api/objects/Group). Still Object3D by itself seems to work okay be itself good enought for this simple demo on Object3D.