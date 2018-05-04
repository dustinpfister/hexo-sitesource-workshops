---
title: Using a Mesh in three.js
date: 2018-05-04 12:44:00
tags: [js,three.js]
layout: post
categories: three.js
id: 183
updated: 2018-05-04 12:50:15
version: 1.1
---

A Mesh is used in [three.js](https://threejs.org/) to create triangular polygon based mesh Objects with a geometry, and a material.

<!-- more -->

## Basic example of using a mesh

```js
(function () {
 
    // Scene
    var scene = new THREE.Scene();
 
    // Using A Mesh
    scene.add(new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),  // geometry
            new THREE.MeshDepthMaterial()  // material
    ));
 
    // Camera
    var camera = new THREE.PerspectiveCamera(45, 4 / 3, .5, 100);
    camera.position.set(1.5, 1.5, 1.5);
    camera.lookAt(0, 0, 0);
 
    // RENDERER
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(320, 240);
    document.getElementById('demo').appendChild(renderer.domElement);
 
    // render the scene with the camera
    renderer.render(scene, camera);
 
}
    ());
```

