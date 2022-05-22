---
title: java学习笔记（二）
tags:
  - Java
categories:
  - 学习
keywords: java，学习笔记
date: 2022-05-22 19:31:52
---

If else选择结构

<!--more-->

## If else选择结构

#### if 语法：

```word
if(布尔表达式){
	//代码块
}
```

执行流程：

> 对布尔表达式进行判断
>
> 结果为true，则先执行代码块，再执行后续代码块
>
> 结果为false，则跳过代码块，直接执行后续代码块

例：

```java
public class ifdemo{
    public static void main(String[] args){
        int s = 100;
        if (s==100){
            System.out.println("满分");
        }
        System.out.println("好可惜")；
    }
}
```



#### if else 语法：

```word
if(布尔表达式){
	//代码块1
}else{
	代码块2
}
```

执行流程：

> 对布尔表达式进行判断
>
> 结果为true，则先执行代码块1，再退出整个结构，执行后续代码
>
> 结果为false，则先执行代码块2，再退出整个结构，执行后续代码

```java
public class ifdemo{
    public static void main(String[] args){
        int s = 100;
        if (s==99){
            System.out.println("满分");
        }else{
            System.out.println("只差一点点")；
        }
        System.out.println("好可惜")；
    }
}
```



#### 多重if选择结构 语法：

```word
if(布尔表达式){
	//代码块1
}else if(布尔表达式2){
	//代码块2
}else if(布尔表达式3){
	//代码块3
}else{
	//代码块4
}……
```

执行流程：

> 表达式1为ture，则执行代码块1，再退出整个结构
>
> 表达式2为ture，则执行代码块2，再退出整个结构
>
> 表达式3为ture，则执行代码块3，再退出整个结构
>
> 以上均为false，则执行代码块4，再退出整个结构

> 注意：
>
> 相互排斥，有一个为true，其他均不在执行，适用区间判断，但要保证条件顺序（从大到小、从小到大）

```java
import java.util.Scanner;

public class ScoreDemo {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("输入一个成绩： ");
        int score = input.nextInt(); //快捷定义变量 input.nextInt().var
        if (score>=90){
            System.out.println("A");
        } else if (score<90 && score>=80){
            System.out.println("B");
        } else if (score<80 && score>=70) {
            System.out.println("C");
        } else if (score<70 && score>=60) {
            System.out.println("D");
        } else if (score<60) {
            System.out.println("E");
        }
    }
}
```

作业：

判断某一年是否为闰年（被4整除但不能被100整除能被400整除）是闰年否则是平年

```java
import java.util.Scanner;

public class YearDemo {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("请输入一个年份：");
        int year = input.nextInt();
        if (year%4==0 && year%100!=0 || year%400==0){
            System.out.println("闰年");
        }else {
            System.out.println("平年");
        }
    }
}
```

