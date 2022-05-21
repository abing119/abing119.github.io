---
title: java学习笔记（一）
tags:
  - Java
categories:
  - 学习
keywords: java，学习笔记
date: 2022-05-20 13:16:24hu
---

环境配置-基础代码分析-类的概述-包-标识符-变量-数据类型-数据转换-运算符

<!--more-->

## 环境配置

#### 下载JDK

([Java Downloads | Oracle](https://www.oracle.com/java/technologies/downloads/#java8-windows))

安装完JDK后，退出安装程序。

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



## 类的概述

1. 同一个源文件中可以定义`多个类`
2. 编译后，每个类都会生成`独立的.class`文件
3. 一个类中，`只能有一个主方法`，每个类都可以有自己的主方法
4. public修饰的类称为`公开类`，要求类名`必须御文件名称完全相同`，包括大小写
5. 一个源文件中，只能有`一个公开类`

## Package(包)

作用：类似于文件夹，用于管理字节码（`.class`）文件

语法：`package 包名;`

位置：必须写在源文件第一行

带包编译：(自动生成目录结构)

```shell
javac -d . 源文件名称.java
```

带包运行：(包名+类名又称全限定名)

```shell
java 包名.类名
```

命名采用域名倒置规则

## 标识符命名规则

1. 由`字母`、`数字`、`下划线`和`美元符号`组成，不能以数字开头
2. 区分大小，长度无限制
3. 不能是Java中的`关键字`和`保留关键字`
4. 标识符命名习惯：`驼峰命名法`，以单词或词组来命名
5. 类名由一个或多个单词组成，每个单词首字母大写
6. 函数名、变量名由一个或多个单词组成，首单词手字母小写，拼接词首字母大写
7. 包名全小写，只可以使用特殊字符`.`，并且不以`.`开头或结尾

## 变量的概念

![](https://blog.mjiao.net/变量的概念.jpg)



##  数据类型

注意：int为整数的默认类型，如需为long类型赋值较大整数时，需在值得后面追加`L`

```java
public class test7_1{
    public static void main(String[] args){
        byte b = 127; //字节类型占用1字节，1字节等于8位bit -128~127
        short s = 100; //短整型，占用2字节
        /** 面试题：s = s+1; 错误：不兼容的类型：从int转换到short可能会有损失。（s是short类型，1是int类型，相加返回的是int类型，int类型有4个字节，short只有2个字节，故不兼容） */
		int x = 100; //整数类型，占用4个字节
        long g = 200L; //长整型，占用8个字节
        
        float f = 3.14f; //浮点数（单精度），占用4个字节，定义时带上f
        double d = 3.1415926d; //浮点数（双精度），占用8个字节,是浮点数的默认值
        boolean bool = true; //布尔值，true或false,占用1个字节
        
        char c1 = 'A'; //字符类型，占用2个字节（一个中文占用2个字节）,单引号内只能包含1个字符
        char c2 = 65; //通过十进制数赋值（ASCII）
        char c3 = '\u0041'; //通过十六进制数赋值（Unicode）
       
        //字符串类型，引用类型
        String str = "锄禾日当午"
        	System.out.println( );
    }
}
```

### 基本数据类型转换

自动类型转换：

1. 两种类型互相兼容
2. 目标类型大于原类型

```java
public class AutoConvertDemo{
    public static void main(String[] args){
        //数值类型：由小转大自动转换
        short s = 520;
        int i = s;
        //数值类型：由小转大自动转换
        int x = 1314;
        long g = x;
        	System.out.println( );
    }
}
```

强制类型转换：（有可能丢失数据）

1. 两种类型互相兼容
2. 目标类型小于原类型

```java
public class ForceConvertDemo{
    public static void main(String[] args)
        //数值类型：由大转小
        short s = 99;
        byte b = (byte)s;
   			System.out.println( );
}
```



## 进制转换

十进制与二进制互转：

![](https://blog.mjiao.net/进制转换.jpg)

十进制转十六进制：

![](https://blog.mjiao.net/十进制转十六进制.jpg)



## 运算符

从左到右

```java
public class OperatorDemo{
    public static void main(String[] args){
        //算术运算符
        int x1 = 5+5;
        int x2 = 5-3;
        int x3 = 2*3;
        int x4 = 10/3; //取整
        int x5 = 10%3; //取余
        
        //自增
        int x6 = 1;
        int X7 = x6++; //后自增
        int x8 = ++x6；//先自增
        	System.out.println("x7="+x7)
        	System.out.println("x8="+x8)
    }
}
```

## 赋值运算符

将一个值赋给一个变量，运算顺序从右到左

```java
public class OperatorDemo{
    public static void main(String[] args){
        //赋值运算符
        int x9 = 1;
        x9+=1; //x9 = x9+1
        
         //面试题
        short s = 1
        //s = s+1; 报错！没有类型强制转换
        s+=1; //s=(short)(s+1) S+=默认自带类型转换 
    }
}
```

## 算术与赋值运算符练习

从控制台接收输入的工具：

```java
import java.util.Scanner;
Scanner input = Scanner(System.in);
int num = input.nextInt();
```

1. 输入一个五位整数（54321），求各个位上的数的和:

```java
import java.util.Scanner;
public class test1{
    public static void main(String[] args){
        Scanner input = new Scanner(System.in)；
            System.out.println("请输入一个5位数值")；
            int num = input.nextInt(); //接收控制器输入
        	int w = num/10000;
            int q = num/1000%10; //除以1000再除10取余
        	int b = num/100%10;
        	int s = num/10%10;
        	int g = num%10;
        	int result = w+q+b+s+g；
                System.out.println()；
    }
}
```

2. 输入一个天数，计算周数和剩余天数：

```java
import java.util.Scanner;
public class test2{
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        System.out.println("请输入一个天数：")
        int day = input.nextInt();
        int week = day/7;
        System.out.println("周数是"+week);
        int dayd = day%7; //周数多出来的天数取余
        System.out.println("剩余的天数："+dayd);
    }
}
```

## 逻辑运算符

非0即真，0为假，逻辑或：或1则1，逻辑与：全1则1。

| 运算符 |  描述  |      示例       | 结果  |
| :----: | :----: | :-------------: | :---: |
|   &    |   与   |  false & true   | false |
|   \|   |   或   |  false \| true  | true  |
|   ^    |  异或  |  true ^ false   | true  |
|   !    |   非   |     ! true      | false |
|   &&   | 短路与 |  false && true  | false |
|  \|\|  | 短路或 | false \|\| true | true  |

> 面试题：&和&&的区别？
>
> ​	&是左右两边都计算后对比，&&是计算左边后以得出的值来决定直接返回值，还是计算右边后再返回值。效率上&&比&更快。

## 三目运算符

X ? Y : Z

```java
import java.util.Scanner;
public class test1{
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        System.out.println("请输入成绩： ")；
            int s = input.nextInt();
        String s = s>=60?"及格":"不及格"；
            Syetem.out.println(s);
    }
}
```

## 位运算符

![](https://blog.mjiao.net/位运算符.jpg)

## 位移运算符

左移：`a<<b;`将二进制形式的a逐位左移b位，最低位空出的b位补0

带符号右移：`a>>b;`将二进制形式的a逐位右移b位，最高位空出的b位补原来的符号位

无符号右移：`a>>>b;`将二进制形式的a逐位右移b位，最高位空出的b位补0

![](https://blog.mjiao.net/位移运算符.jpg)

