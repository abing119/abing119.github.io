---
title: mac配置jdk环境
tags:
  - Mac
categories:
  - 教程
keywords: Mac
date: 2022-06-09 23:11:30
---

1. 下载jdk

2. 打开Finder,可以在下图所示的路径中找到安装好的jdk，其中Contents下的Home文件夹，是该JDK的根目录。

   列：/Library/Java/JavaVirtualMachines/jdk1.8.0_333.jdk/Contents/Home

   <!--more-->

3. 打开终端输入“java -version”，如果看到jdk版本为1.8则说明配置已经生效。

4. 如果你是第一次配置环境变量，可以使用“touch .bash_profile” 创建一个。bash_profile的隐藏配置文件(如果你是为编辑已存在的配置文件，则使用“open -e .bash_profile”命令)

5. 输入如下配置：

   ```shell
   JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_333.jdk/Contents/Home
   
   PATH=$JAVA_HOME/bin:$PATH:.
   
   CLASSPATH=$JAVA_HOME/lib/tools.jar:$JAVA_HOME/lib/dt.jar:.
   
   export JAVA_HOME
   
   export PATH
   
   export CLASSPATH
   ```

   

   然后保存关闭该窗口。

6. 终端输入“source .bash_profile”使配置生效
7. 输入 echo $JAVA_HOME 显示刚才配置的路径
