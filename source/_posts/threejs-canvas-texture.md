---
title: Using a Canvas element as a Texture in three.js
date: 2018-04-17 09:33:00
tags: [js,canvas,three.js,animation]
layout: post
categories: three.js
id: 177
updated: 2018-04-17 09:45:01
version: 1.0
---

So far I have not written any posts on textures with my [three.js](https://threejs.org/) collection of posts, so lets put and end to that today. In three.js you have a Scene, and in that scene you place things like cameras, and other Objects like a Mesh that is composed of a Geometry, and a Material. When we look at Materials in depth they are composed of many properties, some of which are part of the base Material class, and others are part of the specific Material such as the Basic Material, or Lambert Material. Properties such as map, and emissiveMap that expect a Texture, which is an image that can be used to define how the surface is going to look. 

The Image used to define a Texture can be loaded from an external source such as a \*png image, but it can also be defined with javaScript, by making something with canvas, and then using that as an Image source. This is useful to help make projects that do not depend an an extremal source aside from three.js, or to make dynamic animated textures.

<!-- more -->
