---
title: spotlights in three.js
date: 2018-04-11 13:24:00
tags: [js,canvas,three.js]
layout: post
categories: three.js
id: 171
updated: 2018-04-11 16:04:02
version: 1.1
---

Lights, camera, action! In this post will will be covering all three of those things in [three.js](https://threejs.org/), but with an emphases on spotlights. Spotlights as the name suggests is a directional light that will concentrate light in a cone like shape at a given target. This kind of light source differs from other options that will just brighten things up in general, or give a cylinder like beam of light in a given direction. In addition to adding directional light to a project, spotlights can be used to generate shadows, if the render used can do so, and is set up to render shadows.

<!-- more -->

# What to know before hand

This is not a getting started post on three.js, or javaScript in general. I assume that you have at least a basic working knowledge on javaScript, and that you have your feet wet with three.js. If not I have other posts that may help.

In this post I will not be covering materials in three.js in detail, but I also assume that you know that in three.js some materials respond to a light source, and others do not.

## Basic example of spotlight use

When starting out with a basic example of spotlight use, at a very minimum I would want to create an instance of a spotlight by calling the THREE.SpotLight constructor with the new keyword, and saving that instance to a variable. One I have my instance I would want to change its position using the Object3D position.set method to a point far away from the origin.

```js
// SPOTLIGHT
var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(350, 340, 170);
scene.add(spotLight);
```

Assuming that I have a mesh of some kind at the origin of my scene that is equipped with a material that responds to light such as the Lambert material, I should have a basic working example of reflectance going on. I will also need the usual scene, renderer, and camera all set up to make this an actual function demo.

like this:
```js
(function () {
 
    // Scene
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f0f0f);
 
    // CAMERA
    var camera = new THREE.PerspectiveCamera(50, 320 / 240, 1, 3000);
    camera.position.set(500, 500, 500);
    camera.lookAt(0,0,0);
 
    // A MESH with Lambert Material
    // which responds to a light source.
    var cube = new THREE.Mesh(
            new THREE.BoxGeometry(200, 200, 200),
            new THREE.MeshLambertMaterial({
                color: 0xff0000
            }));
    cube.position.set(0, 100, 0);
    scene.add(cube);
 
    // SPOTLIGHT
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(350, 340, 170);
    scene.add(spotLight);
 
    // RENDER
    var renderer = new THREE.WebGLRenderer();
    document.getElementById('demo').appendChild(renderer.domElement);
    renderer.setSize(320, 240);
 
    // render what we have
    renderer.render(scene, camera);
 
}
    ());
```