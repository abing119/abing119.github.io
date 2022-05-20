---
title: Hexo博客加密
tags:
  - hexo
categories:
  - 教程
keywords: hexo，加密
date: 2022-05-13 16:54:13
---

> hexo的个人博客进行加密，任意主题都适用

<!--more-->

采用第三方插件[hexo-encrypt](https://github.com/edolphin-ydf/hexo-encrypt)

安装

```yml
npm install hexo-encrypt --save
```

在hexo的配置文件`_config.yml`下进行配置

```code
encrypt: 
  password: 123456
```

这里的password为默认密码，如果在文章头没有申明独立密码，则可以用默认密码解锁文章。

使用：将 “encrypt” 字段添加到您文章信息头就像这样，”enc_pwd”申明独立密码。

```markdown
---
title: Hello World
date: 2016-03-30 21:18:02
encrypt: true
enc_pwd: 123456
---
```

最后`hexo cl`再`hexo g`和`hexo d`。

自定义密码错误提示：

找到\blog\node_modules\hexo-encrypt\lib\conf_post.js，找到这一段代码：

```js
document.getElementById("enc_error").innerHTML = "password error!"\n' +
```

替换password error!即可。
