---
title: hexo添加aplayer组件
tags:
  - hexo
categories:
  - 教程
keywords: aplayer
date: 2022-05-13 18:51:18
---

aplayer是一个非常漂亮好用的HTML5音乐播放器，和dplayer师出同门。

记录一下添加音乐插件的过程。

<!--more-->

### 安装aplayer

#### npm安装

在hexo博客的文件夹根目录打开git bash,并输入：

```yaml
npm install --save hexo-tag-aplayer
```

可以看到在node_module文件夹中多出来一个aplayer文件夹即可,为了方便将这个dist文件夹复制一份到主题目录下的source文件夹中。

### 配置js组件

这一步可以根据教程选择自己喜欢的模式。新建一个music.js（名字随便起），放到主题的source文件夹里（我放在source/js/diy/music.js）

##### 跟随模式

```js
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: true, //自动播放
    audio: [
	{
        name: '',
        artist: '',
        url: '',
        cover: '',
    }, 
	]
});
```

##### 普通模式

```js
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    audio: [{
        name: '',
        artist: '',
        url: '',
        cover: '',
    }]
});
```

### 布置到想要的页面中

```html
<link rel="stylesheet" href="/dist/APlayer.min.css">
<div id="aplayer"></div>
<script type="text/javascript" src="/dist/APlayer.min.js"></script>
<script type="text/javascript" src="/js/diy/music.js"></script>
```

注意的是，这里的`id=“aplayer”`要和上面music.js中的`container: document.getElementById(‘aplayer’)`填的Id相同。
