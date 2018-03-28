---
title: shelljs a node.js way to bring posix commands to a node project.
date: 2018-03-22 16:01:00
tags: [js,node.js,linux]
layout: post
categories: node.js
id: 164
updated: 2018-03-28 15:32:13
version: 1.2
---

As someone who has been a kind of windows, and Linux dual boot type person for over ten years now, it would be great to have some way of always having some of the commands I have grown to like when working in a Linux environment always with me regardless of the operating system environment that i am working with when making a node.js project. Lucky for me there is a project called [shell.js](https://www.npmjs.com/package/shelljs) that can help with this.

<!-- more -->

## installing shell.js

To use shell.js as a module in a node.js project just install it in the usual manner when adding a dependency to a project like normal.

```
$ mkdir test_project
$ cd test_project
$ npm init
$ npm install shelljs --save
```

Many of the demos I will be writing about with this project will involve using shelljs this way, if you want to use the commands as one liners from the command line interface in windows that can be done aw well by installing shelljs globally.

## Which method example

The which method searches for a native command in the systems path, which is useful to find out if something like git or mongodb is installed on the system or not.

```js
let shell = require('shelljs');
 
if (shell.which('mongod')) {
 
    console.log('looks like mongo db is installed');
 
} else {
 
    console.log('mongo db is not installed.');
 
}
```

## Grep example

Maybe on eof the best know unit like commands out there is grep, which is used for text pattren matching tasks.

```js
let shell = require('shelljs');
 
console.log( shell.ls('*.js').grep('_[0-9]{8}').toString() );
```

I am a little fuzzy on the regex used in grep and how it compares to what is used in javaScript. Getting into that may be a whole other post, but so far they seem very similar.

## piping of commands

One of the best features of a unix style Command Line Interface is the ability to pipe commands, or in other words supply the input of a command as the output of another. This can be done by chaining commands.

```js
let shell = require('shelljs');
 
console.log( shell.ls('*.js').grep('app_').toString() );
```

This as you would expect results in a list of \*.js files begin with the text pattern 'app_'.

## Using shell.js globally

Although shell.js can be used globally, as a way to bring Linux like commands to windows the developers recommend against this. However if you really want to it can be done easly by just installing the script globally.

```
$ npm install -g shelljs
```

Once shelljs is installed globally, A command can then be used by calling shjs, and then the command you want to use.

```
$ shjs ls
```

## Conclusion

Shelljs looks like a great solution for making unix like commands more portable across different operating systems. Even when developing, and deploying with posix environments I would say it is a nice alternative to fiddling with the child-process module.