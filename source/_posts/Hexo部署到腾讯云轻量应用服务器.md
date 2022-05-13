---
title: Hexo部署到腾讯云轻量应用服务器（宝塔面板）
tags:
  - hexo
categories:
  - 教程
keywords: hexo,hexo部署到服务器
date: 2022-05-13 16:20:22  
---

把hexo部署到全新的服务器上

<!--more-->

### 修改初始密码

进入腾讯云，点击右上角`控制台`，选择`轻量应用服务器`（如果没有的话，就直接使用上面的搜索功能）
找到自己的服务器，点击 更多→管理，然后选择重置密码，重置初始密码

### 开放端口

点击 更多→管理→防火墙→添加规则，开放8888端口
为之后添加宝塔面板做准备

### 配置SSH

配置SSH密钥，实现免密登录（首次提交时仍需要验证密码），如之前配过可跳过此步。

```code
$ ssh-keygen -t rsa -C "邮箱地址"
```

连续敲回车确定，然后看到提示秘钥以保存在xxx路径下（如果没有出现提示就多敲几次回车）。
在提示的路径下找到`id_rsa`文件，复制文件内容，下面配置Git时会用到

### 配置Git

> 如果没有特别说明，安装过程中如有出现选择，一律选择yes（y），（即输入yes（y）然后点击回车）

#### 准备工作

点击登录（见图一）

在弹出的面板中输入以下代码，切换到root用户

<img src="https://ahzo.gitee.io/img/blog/b10315.png" style="zoom: 100%;" />

#### 安装Git

```shell
# yum install git
```

<img src="https://ahzo.gitee.io/img/blog/b10303.png" style="zoom: 100%;" />

#### 配置Git

创建git账户，并修改权限

```shell
# adduser git

# chmod 740 /etc/sudoers
```

修改配置

```shell
# vim /etc/sudoers
```

点击键盘“i”建进入编辑模式，然后通过方向键编辑
找到`root ALL=(ALL) ALL`在其下方以相同格式添加`git ALL=(ALL) ALL`

```code
root    ALL=(ALL)       ALL
git     ALL=(ALL)       ALL
```

<img src="https://ahzo.gitee.io/img/blog/b10317.png" style="zoom: 100%;" />

点击`Esc`后输入`:wq`,保存退出

改回权限

```shell
# chmod 400 /etc/sudoers
```

设置git密码

```shell
# sudo passwd git
```

密码输入过程中不会显示，输完后直接回车即可，输入两次（密码需要包含大写加小写字母加数字）

#### 配置SSH

切换为git用户，配置SSH

```shell
# su git

$ mkdir ~/.ssh

$ vim ~/.ssh/authorized_keys
```

将本地生成的`id_rsa.pub`文件公钥复制进去（需要注意的是，如果之前配置过SSH，建议将同路径下的`known_hosts`文件删除，否则可能会报错，报错解决方法看后记），
点击`Esc`后输入`:wq`保存退出
赋予权限：

```shell
$ chmod 600 /home/git/.ssh/authorized_keys
$ chmod 700 /home/git/.ssh
```

本地使用Git测试是否配置成功，桌面右键“Git Bash Here”

```code
$ ssh -v git@服务器ip
```

服务器ip为你的服务器公网ip，详见图一中的（公）后面的一串ip地址，即为服务器的公网ip

执行过程中出现选择，一律选择yes

如果执行过程中不需要输入密码且无报错，即为配置成功.

#### Git仓库配置

使用root用户

```shell
$ sudo su root
```

为hexo博客创建一个目录，赋予所有权限并设置所有者为git

```shell
# mkdir /home/hexo

# chown -R git:git /home/hexo

# chmod -R 755 /home/hexo
```

创建git仓库

```shell
# mkdir /home/repo

# cd /home/repo

# git init --bare hexo.git
```

创建Git钩子

```shell
# vim /home/repo/hexo.git/hooks/post-receive
```

点击键盘“i”建进入编辑模式，然后通过方向键编辑，将以下代码复制进去

```code
#!/bin/bash
git --work-tree=/home/hexo --git-dir=/home/repo/hexo.git checkout -f
```

点击`Esc`后输入`:wq`保存退出
修改权限

```shell
# chown -R git:git /home/repo/hexo.git/hooks/post-receive

# chmod +x /home/repo/hexo.git/hooks/post-receive
```

修改git仓库的所有者为git：

```shell
# chown -R git:git /home/repo
```

### 安装宝塔面板

```shell
# yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh
```

安装过程中出现选择一律输入y（yes）

<img src="https://ahzo.gitee.io/img/blog/b10314.png" style="zoom: 100%;" />

安装完成后根据给出的地址（外网ip）及账号密码，登录宝塔

<img src="https://ahzo.gitee.io/img/blog/b10314.png" style="zoom: 100%;" />

如果忘记宝塔账号密码可以输入以下指令查看账号密码（需要在root用户下）

```shell
# cd /www/server/panel && python tools.py panel testnamewd

# cd /www/server/panel && python tools.py panel testpasswd
```

或者直接进入宝塔目录，选择操作指令

```shell
# cd /www/server/panel

# bt
```

进入宝塔面板后，按照提示安装Nginx

<img src="https://ahzo.gitee.io/img/blog/b10306.png" style="zoom: 100%;" />

#### 添加站点

宝塔面板点击网站，选择添加站点，输入域名，根目录设为`/home/hexo`，php版本选择纯静态

### 本地配置

修改Hexo配置文件中的推送地址：

```yml
repo: git@域名或IP:/home/repo/hexo.git
```

<img src="https://ahzo.gitee.io/img/blog/b10308.png" style="zoom: 100%;" />

如果Git配置失败，可以尝试使用root推送：

```yml
repo: root@域名或IP:/home/repo/hexo.git
```

然后，将本地仓库与远程仓库关联：

```code
$ git remote add origin git@服务器IP:/home/repo/hexo.git
```

最后三连（hexo clean && hexo g && hexo d）上传，输入域名访问即可

### 附加步骤

#### 添加404界面

修改nginx.conf的server项（或者直接在宝塔面板的目标站点操作）
添加如下代码：

```code
#开启error_page
error_page 500 502 503 504 404 /404.html;
# 承接上面的location
location = /404.html {
    # 放错误页面的目录路径。
    root /home/hexo;
}
```

<img src="https://ahzo.gitee.io/img/blog/b10310.png" style="zoom: 100%;" />

### 遇到的问题

##### hexo d 时known_hosts报错，提示冲突

<img src="https://ahzo.gitee.io/img/blog/b10311.png" style="zoom: 100%;" />

解决方法：根据报错给出的地址，找到known_hosts文件，因为我这里是第三行报错，所以就直接把known_hosts文件第三行删除即可

##### ***hexo -d ***时报错：

```code
 ! [remote rejected] HEAD -> master (unpacker error)
error: failed to push some refs to 'xxx.xxx.xxx:/home/repo/hexo.git'
FATAL {
```

<img src="https://ahzo.gitee.io/img/blog/b10318.png" style="zoom: 100%;" />

这种情况多半是目录所有者不是git；

设置hexo仓库目录所有者为git：

```shell
# chown -R git:git /home/hexo
```

设置git仓库目录所有者为git：

```shell
# chown -R git:git /home/repo
```

然后再上传；

如果还是不行，建议使用root推送；

在hexo配置文件中修改：

```yml
repo: root@域名或IP:/home/repo/hexo.git
```

如果root无法推送，同样大概率也是因为文件所有者问题，将hexo仓库和git仓库的所有者修改为root即可

##### 如何判断文件夹所有者是否正确呢？

回到`/home`目录，

查看git仓库和hexo仓库的文件夹所有者：

```shell
# cd /home

# ll
```

正常情况可以看到git仓库和hexo仓库的文件夹所有者全为git

```code
drwxr-xr-x 2 git        git        4096 Jan 28 22:14 hexo
drwxr-xr-x 3 git        git        4096 Jan 28 22:15 repo
```

