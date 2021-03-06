# hexo_sitesource_workshops

This is a more advanced version of what I have going on at [hexo_sitesource](https://github.com/dustinpfister/hexo_sitesource). This project contains the working folder of my hexo generated github pages site at [dustinpfister.github.io](https://dustinpfister.github.io/). I might still be using the old project, and it's theme, or at least I was at the time of this writing. This project contains an updated theme, and the source for some new plugins that I am making such as [hexo-forframe](https://github.com/dustinpfister/hexo-forframe).

The main reason why I made this project is because I wanted to make a lot of changes not just to the theme, but also get into making plugins, and having source that works with those plugins. I wanted to make it a completely separate repo rather than branching, so no matter what I can just go back to the way things are if I want.

## Install

Start by cloning in this repo, and then install the packages that it uses on npmjs. Once that is done go to the node_modules folder and clone in any plugins that I have not published to npmjs, but are on here at github.

```
$ git clone https://github.com/dustinpfister/hexo-sitesource-workshops
$ cd hexo-sitesource-workshops
$ npm install
$ cd node_modules
$ git clone https://github.com/dustinpfister/hexo-forframe
```

## Generate The site

To generate the site use hexo generate this should build the site in the public folder. This is what will be published to my github pages repo.

```
$ hexo generate
```

## Serve the site locally

I can use hexos built in sever to serve the static site locally if need be.

```
$ hexo server -p 3030
```

## My plugins and scripts

What sets this project appart big time is the new plugins, and scripts that I am using.

### [hexo-forframe](https://github.com/dustinpfister/hexo-forframe)

This project makes use of my hexo-forframe plugin that can be used to make animations.