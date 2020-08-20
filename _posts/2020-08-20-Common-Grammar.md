---
layout: post
title: 常用库及函数
categories: JAVA 
description: 
keywords: 
---
### LinkedList
链表也可以实现random access，实质上还是根据给出的index来进行顺序查找
```java
//在指定位置插入element
add(int index, E element)

//在指定位置插入一个collection c
addAll(int index, Collection<? extends E> c)

//
double[] arr = list.toArray(new double[0]);

//
LinkedList<int[]> list = new LinkedList<>();
int[][] res = list.toArray(new int[0][0]);

//
char[] words = str.toCharArray();
```