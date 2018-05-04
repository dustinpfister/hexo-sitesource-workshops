---
title: Using a Mesh in three.js
date: 2018-05-04 12:44:00
tags: [js,three.js]
layout: post
categories: three.js
id: 183
updated: 2018-05-04 12:53:47
version: 1.2
---

A Mesh is used in [three.js](https://threejs.org/) to create triangular polygon based mesh Objects with a [geometry](/2018/04/14/threejs-geometry/), and a [material](/2018/04/30/threejs-materials/). The Mesh Constructor is one of many constructors that you will find yourself using often as you get into making three.js projects. It is typically what is used for any kind of 3d Object that will be placed in a [Scene](/2018/05/03/threejs-scene/)

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

