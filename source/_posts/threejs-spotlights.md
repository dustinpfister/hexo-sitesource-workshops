---
title: spotlights in three.js
date: 2018-04-11 13:24:00
tags: [js,canvas,three.js]
layout: post
categories: three.js
id: 171
updated: 2018-04-11 13:32:55
version: 1.0
---

Lights, camera, action! In this post will will be covering all three of those things in [three.js](https://threejs.org/), but with an emphases on spotlights. Spotlights as the name suggests is a directional light that will concentrate light in a cone like shape at a given target. This kind of light source differs from other options that will just brighten things up in general, or give a cylinder like beam of light in a given direction. In addition to adding directional light to a project, spotlights can be used to generate shadows, if the render used can do so, and is set up to render shadows.

<!-- more -->

# What to know before hand

This is not a getting started post on three.js, or javaScript in general. I assume that you have at least a basic working knowledge on javaScript, and that you have your feet wet with three.js. If not I have other posts that may help.

In this post I will not be covering materials in three.js in detail, but I also assume that you know that in three.js some materials respond to a light source, and others do not.