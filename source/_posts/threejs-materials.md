---
title: An overview of materials in three.js
date: 2018-04-30 09:14:00
tags: [js,three.js]
layout: post
categories: three.js
id: 181
updated: 2018-05-01 18:12:42
version: 1.7
---

In [three.js](https://threejs.org/) there are some eight materials to choose from to help skin a mesh. There are also additional materials for rendering lines, points, shadows, and sprites. This post will serve as a general overview of materials in general in three.js.

I will of course not be getting into every key little detail with each of theme, Some of these will deserve a full post explaining them in further detail.

<!-- more -->

## What to know

This is not my getting started post on three.js, if you are new to three.js you might choose to start there. This is an advanced post on three.js in which I assume you have basic knowledge of how to make a three.js project, and now only seek to have a deeper understanding of materials.

## Version number matters with three.js

Three.js is a project in which the version number matters a whole lot. Older posts on three.js often contain examples that will break on newer revisions and vise versa. In most of these posts I have been sticking to [three.js 0.91.0 (r91)](https://github.com/mrdoob/three.js/tree/r91)

## The Material base Class

All materials inherit from the [Material base class](https://threejs.org/docs/index.html#api/materials/Material). This base class contains a lot of properties some of which are superseded by prosperities in a certain material. I will not be getting into the Base class in detail here, as I still need to write more demos with many of the properties. Also This post is going to be pretty lengthly to begin with anyway.

## Mesh Materials

The most used materials should be the ones that are used with a Mesh to bring style to the faces of a shape. This will be a brief overview of all of these materials and what makes each of theme special.

### Mesh Basic Material

The [basic material](https://threejs.org/docs/index.html#api/materials/MeshBasicMaterial) is as the name suggests, it is the kind of material that I would use if I do not aim to do anything special with shading, shadows and so forth. The basic material will not respond to a light source, and the faces will be filled with a solid color, or a given texture.


```js
// CUBE
scene.add(new THREE.Mesh(
 
    // box GEOMETRY
    new THREE.BoxGeometry(1, 1, 1),
 
    // basic MATERIAL
    new THREE.MeshBasicMaterial({
        color: 0xff0000
    })
 
));
```

This comes in handy when I just want to quickly add some solid color to a mesh, or do something involving just a color map.

### Mesh Depth Material

This is another basic material that is not used for anything advanced involving a light source, and shadows. The [depth material](https://threejs.org/docs/index.html#api/materials/MeshDepthMaterial) can be used to show some depth to a mesh, rather than just having a solid color painted on each face.

```js
// CUBE
scene.add(new THREE.Mesh(
 
    // box GEOMETRY
    new THREE.BoxGeometry(1, 1, 1),
 
    // Depth MATERIAL
    new THREE.MeshDepthMaterial()
 
));
```

Depth is based off the near, and far plane of the camera. White areas indicate that an area of the mesh is closer to the camera, while darker areas indicate that the area of the mesh is farther away.

There does not appear to be much to write about in terms of other properties to know about with this one aside from the fact that the depth packing encoding can be changed from the default which is basic depth packing. The only other constant seems to be rgba packing.

```js
var material = new THREE.MeshDepthMaterial({
 
    depthPacking: THREE.RGBADepthPacking
 
});
```

## The Lambert material

Read my [full post](/2018/04/08/threejs-lambert-material/) on the Lambert material

This is the first material I started working with when getting into the use of lights and shadows. In some ways the [Lambert material](https://threejs.org/docs/index.html#api/materials/MeshLambertMaterial) is a good choice for a reflective material as the algorithm used for reflecting light is more efficient compared to the other options, although I might not say that it is th best looking compared to the alternatives.

```js
// Cube
var cube = new THREE.Mesh(
    new THREE.BoxGeometry(100, 100, 100),
    new THREE.MeshLambertMaterial({
        color: 0xff0000,
        emissive: 0x3a3a3a
    })
);
cube.position.set(0, 100, 0);
scene.add(cube);
```

the main thing to understand here is when just setting a solid color, the color that is set with the color property is actually the color that will show up when a white light source shines on it. The emissive property is what is used to set a solid color that is to show up no matter what, which differs from you might be used to with the basic material that you might have started with like I did.

### Mesh Normal Material

The [normal material](https://threejs.org/docs/index.html#api/materials/MeshNormalMaterial) has to do with [vector normals](https://en.wikipedia.org/wiki/Normal_(geometry)). Coloring of the shape is based on the direction of the shapes normals.

```js
var cube = new THREE.Mesh(
 
    geometry,
 
    // Material
    new THREE.MeshNormalMaterial({
        side: THREE.DoubleSide
    }));
scene.add(cube);
```

I will not be getting into normals in detail here as that is a matter for another post. However I will mention that there is a useful helper method o get a sense of what is going on with the vector normals of a geometry.

```js
var helper = new THREE.VertexNormalsHelper(cube, 2, 0x00ff00, 1);
scene.add(helper);
```

That should help give you an idea of what is going on, and how the shape is being colored.

### Mesh Phong Material

### Mesh Physical Material

### Mesh Standard Material

### Mesh Toon Material