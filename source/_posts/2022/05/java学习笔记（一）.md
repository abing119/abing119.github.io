---
title: java学习笔记（一）
tags:
  - Java
categories:
  - 学习
keywords: java，学习笔记
date: 2022-05-20 13:16:24
---

## 环境配置

#### 下载JDK

1. ([Java Downloads | Oracle](https://www.oracle.com/java/technologies/downloads/#java8-windows))

2. 安装完JDK后，退出安装程序。

   <!--more-->

   ![](https://blog.mjiao.net/jdk安装.jpg)

#### 环境变量配置

用户环境变量配置

![](https://blog.mjiao.net/环境变量配置1.jpg)

用户Path环境变量配置

![](https://blog.mjiao.net/环境变量配置2.jpg)

#### 检查配置是否成功

```shell
java -version
```



## HelloWorld程序分析

#### 语句分析

```java
public class helloworld{
    public static void main(String[] args) {
        System.out.println("hello world");
    }
}

/**
文档注释
public:语法提供的关键字，表示公共类
class:  语法提供的关键字，表示定义一个类
HelloWorld: 表示类的名字（自定义）
public static void main(String[] args): 主方法（程序入口，固定写法）
System.out.println(" "); 表示控制台输出语句，括号内用英文双引号包裹文本内容，输出的内容语句结束用英文分号，代表这行代码结束。 */

//单行注释

/*
多行注释，输出两条语句
*/
```

#### API文档

```shell
javadoc -private -d api *.*
```

`private`(显示所有类和成员)

`-d`（目录）

`api`（创建文件夹）

`*.*`（当前目录下所有文件都要生成文档）

#### JAVA运行环境初探

java运行：先编译，再解释

![](https://blog.mjiao.net/java运行环境初探.jpg)
