---
title: java学习笔记(三)
tags:
  - Java
categories:
  - 学习
keywords: java,学习笔记
date: 2022-06-19 07:17:07
---

## 循环语句

#### while循环

语法：

```java
while(布尔表达式){
    //逻辑代码（循环操作）
}
```

<!--more-->

执行流程：

先对布尔表达式进行判断，结果为true,则执行逻辑代码，本次执行完毕后，再次进行判断，结果仍旧为true，则再次执行逻辑代码；直至布尔表达式的结果为false时，才会退出循环结构，执行后续代码。

作业一：

```java
/**
 * 计算（1-100）之间所有数字的和（5050）
 */
public class WhileTest1 {
    public static void main(String[] args) {
        int num = 0; //计算总数的变量
        int i = 1; //增量
        while (i<=100){
            num+=i;
            i++;
        }
        System.out.println(num);
    }
}

```

作业二:

```java
/**
 * 打印（100）以内的所有奇数，偶数和3的倍数（不包括100）
 */
public class WhileTest2 {
    public static void main(String[] args) {
        int i = 1;
        while (i<100){
            if (i%2==0){
                System.out.println(i+"是偶数");
            }else {
                System.out.println(i+"是奇数");
            }
            if (i%3==0){
                System.out.println(i+"是3的倍数");
            }
            i++;
        }
    }
}
```

#### do while循环

语法：

```java
do{
    逻辑代码（循环操作）
}while(布尔表达式)；
```

执行流程：

先执行一次循环操作后，在进行布尔表达式的判断，如果结果为true，则再次执行循环操作，如果结果为false,才会退出循环结构，执行后续代码。

> 特点：先执行，再判断，适用于循环次数不明确的情况

#### for 循环

语法：

```java
for(初始部分；循环条件；更新循环变量){
    //循环操作
}
```

执行流程：

首次执行初始部分（仅一次）；

对布尔表达式进行判断，结果为true，则执行逻辑代码；

本次执行完毕后，执行更新循环变量，再次判断，结果仍旧为true，则再次执行逻辑代码；

直至布尔表达式的结果为false时，才会退出循环结构，执行后续代码。

作业一:

```java
/**
 * 输出0~200之间能被7整除但不能被4整除的所有整数
 */
public class ForTest1 {
    public static void main(String[] args) {
        for (int i=0;i<200;i++){
            if (i%7==0 && i%4!=0){
                System.out.println(i);
            }
        }
    }
}
```

作业二：

```java
/**
 * 输出10个斐波那契数列：1 1 2 3 5 8 13 21 34 55
 * （特点：第1.2两个数值为1，从第三个数开始，该数是其前面两个数之和）
 */
public class ForTest2 {
    public static void main(String[] args) {
        int n1 = 1;
        int n2 = 1;
        int next = 0;
        System.out.println(n1+" "+n2+" ");
        for (int i =0;i<8;i++){
            next = n1+n2;
            System.out.println(next+" ");
            n1 = n2;
            n2 = next;
        }
    }
}
```

> for循环的六种写法：
>
> 1. 标准写法
> 2. 表达式1省略，但是再外部声明 for(;i<10;i++)
> 3. 表达式2省略，死循环 for(int i=0;;i++)
> 4. 表达式3省略，但是要声明在循环内部 for(int i=0;i<10;)
> 5. 表达式1，3省略，但是要声明在循环的外部和内部 for(;i<10;)
> 6. 三个表达式都省略，死循环 for(;;)
