---
title: java学习笔记（二）
tags:
  - Java
categories:
  - 学习
keywords: java，学习笔记
date: 2022-05-22 19:31:52
---

If else选择结构-switch结构-嵌套if选择结构

<!--more-->

## If else选择结构

#### if 语法：

```word
if(布尔表达式){
	//代码块
}
```

执行流程：

对布尔表达式进行判断

结果为true，则先执行代码块，再执行后续代码块

结果为false，则跳过代码块，直接执行后续代码块

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

对布尔表达式进行判断

结果为true，则先执行代码块1，再退出整个结构，执行后续代码

结果为false，则先执行代码块2，再退出整个结构，执行后续代码

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

表达式1为ture，则执行代码块1，再退出整个结构

表达式2为ture，则执行代码块2，再退出整个结构

表达式3为ture，则执行代码块3，再退出整个结构

以上均为false，则执行代码块4，再退出整个结构

> 注意：相互排斥，有一个为true，其他均不在执行，适用区间判断，但要保证条件顺序（从大到小、从小到大）
>

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



## switch分支结构

#### switch语法：

```word
switch(变量 | 表达式){
	case 值1：
		逻辑代码1;
	case 值2：
		逻辑代码2;
	case 值n：
		逻辑代码n;
	default:
		为满足时的逻辑代码；
}
```

> 注意：当匹配的`case`执行后，不会自动退出整个结构，而是继续向下执行。`break`关键字可在匹配的`case`执行后，跳出整个结构。适用于等值判断。
>

例：

```JAVA
import java.util.Scanner;

public class SwitchDemo {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("请输入套餐号码：");
        int num = input.nextInt();
        switch (num){
            case 1:
                System.out.println("香辣鸡腿堡");
                break; //跳出switch语句
            case 2:
                System.out.println("新奥尔良鸡腿堡");
                break;
            case 3:
                System.out.println("老北京鸡肉卷");
                break;
            default:
                System.out.println("没有对应的套餐");
                break;
        }
    }
}

```



> 适用场景：
>
> if: 变量的值在某个区间之内
>
> switch： 变量的值是某个定值



## 嵌套if选择结构

嵌套if语法：

```word
if(外层表达式){
	if(内层表达式){
		//内层代码块1
	}else{
		//内层代码块2
	}
}else{
	//外层代码块
}
```

 执行流程：

当外层条件满足时，在判断内层条件

> 注意：一个选择结构中，可嵌套另一个选择结构，嵌套格式正确的情况下，支持任意组合

switch与if嵌套语法：

```word
switch(表达式){
case 取值n: 语句块n；
	if(表达式){……}
	break;
default: 语句块n+1;
	break;
}
```

> 注意：嵌套越多逻辑越复杂，应该思考更简单的逻辑判断去实现，利于理解也利于性能提高

作业：

1. 多条件嵌套分支，设计一个程序，根据天气情况选择外出或在家，外出逛街还是去公园，在家是看电影还是玩游戏

```java
import java.util.Scanner;

public class Text13_1 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("今天什么天气（1好，2有雨）");
        int weather = input.nextInt();
        if (weather == 1){
            System.out.println("今天天气太好了，我们是去逛街（1）还是去逛公园（2）");
            int where = input.nextInt();
            if (where == 1){
                System.out.println("去逛街");
            } else if (where == 2) {
                System.out.println("去公园");
            }
        } else if (weather == 2) {
            System.out.println("下雨了，在家是看电影呢还是玩游戏(1看电影，2玩游戏)");
            int rain = input.nextInt();
            if (rain == 1){
                System.out.println("看电影");
            } else if (rain == 2) {
                System.out.println("玩游戏");
            }
        }
    }
}

```

2. 设计一个买早餐的逻辑过程，选择吃煎饼果子还是吃烤冷面，吃煎饼果子是否要加香菜？吃烤冷面是要酸辣味还是甜口味

```java
import java.util.Scanner;

public class Text13_2 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("吃早餐:1(煎饼果子）2(烤冷面)");
        int num = input.nextInt();
        int one = 1;
        switch (num){
            case 1:
                System.out.println("煎饼果子加不加香菜：1-加 非1-不加");
                one = input.nextInt();
                if (one == 1){
                    System.out.println("煎饼果子香菜做好了");
                }else {
                    System.out.println("煎饼果子不加香菜做好了");
                }
                break;
            case 2:
                System.out.println("烤冷面：1-酸辣 非1-甜口");
                one = input.nextInt();
                if (one == 1){
                    System.out.println("酸辣烤冷面做好了");
                }else {
                    System.out.println("甜口味烤冷面做好了");
                }
                break;
        }
    }
}

```

