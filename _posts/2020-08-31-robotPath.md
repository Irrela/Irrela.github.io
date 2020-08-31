---
layout: post
title: 机器人路径
categories: Algorithm
description: 
keywords: digitSum
---
```java
class Solution {

    boolean[][] isVisited;
    int count;
    int rows;
    int cols;
    int limit;

    public int movingCount(int m, int n, int k) {
        
        isVisited = new boolean[m][n];
        count = 0;
        rows = m;
        cols = n;
        limit = k;

        search(0, 0);

        return count;
    }

    public void search(int i, int j){
        if(!inGrid(i, j) || isVisited[i][j]){
            return;
        }

        isVisited[i][j] = true;

        if(digitSum(i) + digitSum(j) > limit){
            return;
        }

        count++;

        search(i+1, j);
        search(i, j+1);

    }

    public boolean inGrid(int i, int j){
        return i < rows && j < cols;
    }

    public int digitSum(int num){
        int sum = 0;

        while(num > 0){
            sum += num % 10;
            num /= 10;
        }

        return sum;
    }
}
```