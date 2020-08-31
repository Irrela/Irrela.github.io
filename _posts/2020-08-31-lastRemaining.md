---
layout: post
title: 圆圈中最后剩下的数字
categories: Algorithm
description: 
keywords: mod, recur
---

#### description
0,1,,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字。求出这个圆圈里剩下的最后一个数字。

例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。

> 注意，每次删除后，是从被删数字后面一位作为新的起始点开始算下一轮的m。

####思路
一个数在上一轮的下标应该为(当前下标 + m) % 上一轮剩余数字的个数，其中m为“删除第m个数字”中的m。

那么用递归表示下一轮的下标nextIndex，本轮的下标就可以表示为（nextIndex + m）% n. 

```java 
class Solution {
    public int lastRemaining(int n, int m) {
        if(n == 1){
            return 0;
        }

        int nextIndex = lastRemaining(n-1, m);

        return (m + nextIndex) % n;
    }
}
```