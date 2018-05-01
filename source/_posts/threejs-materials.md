---
title: An overview of materials in three.js
date: 2018-04-30 09:14:00
tags: [js,three.js]
layout: post
categories: three.js
id: 181
updated: 2018-05-01 17:16:16
version: 1.2
---

In [three.js](https://threejs.org/) there are some eight materials to choose from to help skin a mesh. There are also additional materials for rendering lines, points, shadows, and sprites. This post will serve as a general overview of materials in general in three.js.

<!-- more -->

## What to know

This is not my getting started post on three.js, if you are new to three.js you might choose to start there. This is an advanced post on three.js in which I assume you have basic knowledge of how to make a three.js project, and now only seek to have a deeper understanding of materials.

## Version number matters with three.js

Three.js is a project in which the version number matters a whole lot. Older posts on three.js often contain examples that will break on newer revisions and vise versa. In most of these posts I have been sticking to three.js 0.91.0 (r91)

## Mesh Materials

The most use materials should be the ones that are used with a Mesh to bring style to the faces of a shape. This will be a brief overview of all of these materials and what makes each of theme special.

### Mesh Basic Material

The basic material is as the name suggests, it is the kind of material that I would use if I do not aim to do anything special with shading, shadows and so forth. The basic material will not respond to a light source, and the faces will be filled with a solid color, or a given texture.


```js
    // CUBE
    scene.add(new THREE.Mesh(
 
        // box GEOMETRY
        new THREE.BoxGeometry(1, 1, 1),
 
        // basic MATERIAL
        new THREE.MeshBasicMaterial({
        color: 0xff0000
    })));
```