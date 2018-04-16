---
title: Adding fog to a scene in three.js
date: 2018-04-16 11:59:00
tags: [js,canvas,three.js]
layout: post
categories: three.js
id: 176
updated: 2018-04-16 15:31:33
version: 1.2
---

Adding Fog to a Scene in [three.js](https://threejs.org/) is a fairly easy, and straight forward process, so this should be a quick post for today. A Fog is a nice effect to have for most projects as it allows for a more graceful transition from rendering within range to no longer rendering when an object is to far from the camera, as apposed to the object just all of a sudden disappearing. Even if you have the far value of the camera set to a high value so that the object is just a single pixel before it is no longer rendered, it can still be a nice additional effect on top of the object just simply getting smaller.

<!-- more -->

## What to know before hand

This is a post on how to go about adding fog to a three.js project. You should have some knowledge of three.js, and javaScript development in general in order to get any benefit from this post. I have written a post on how to [get started with three.js](/2018/04/04/threejs-getting-started/) if you are completely new on how to work with three.js. The version of three.js is something that is important when writing post on it, and in this post I am using three.js [r91](https://github.com/mrdoob/three.js/tree/r91).

## Adding a Fog to a Scene in three.js

A fog is something that you add or do not add to a three.js [Scene](https://threejs.org/docs/index.html#api/scenes/Scene). By default the value of the fog property of a Scene instance is null, so if you do not add one there will not be one by default.

```js
    // Scene
    var scene = new THREE.Scene();
    fogColor = new THREE.Color(0xffffff);
 
    scene.background = fogColor;
    scene.fog = new THREE.Fog(fogColor, 0.0025, 10);
```

You pass the Fog constructor three arguments the first is the color, the second is the near distance, and the final is the far distance of the fog effect. This is similar to the camera as well where there are also values that are the near and far distances for the cameras view of a scene in which it is used.

Typically you will also want to set the Fog color, as the same color as the background.

## Full Fog Demo

```js
(function () {
 
    // Scene
    var scene = new THREE.Scene();
    fogColor = new THREE.Color(0xffffff);
 
    scene.background = fogColor;
    scene.fog = new THREE.Fog(fogColor, 0.0025, 10);
 
    // Camera
    var camera = new THREE.PerspectiveCamera(75, 320 / 240, .025, 20);
    camera.position.set(1, 1, 1);
    camera.lookAt(0, 0, 0);
 
    // Geometry
    var geometry = new THREE.BoxGeometry(1, 1, 1);
 
    // Material
    var material = new THREE.MeshLambertMaterial({
            color: 0xff0000,
            emissive: 0x000000
        });
 
    // Mesh
    var mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
 
    // Render
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(320, 240);
    document.getElementById('demo').appendChild(renderer.domElement);
 
    // Loop
    var frame = 0,
    maxFrame = 500,
    loop = function () {
 
        var per = frame / maxFrame,
        bias = Math.abs(.5 - per) / .5;
 
        requestAnimationFrame(loop);
 
        camera.position.z = 1 * 14 * bias;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
 
        frame += 1;
        frame = frame % maxFrame;
 
    };
 
    loop();
}
    ());
```