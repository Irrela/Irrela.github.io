---
layout: post
title: 用户喜好
categories: EMP
description: 
keywords: HashMap, ByteD
---

### Description
为了不断优化推荐效果，今日头条每天要存储和处理海量数据。假设有这样一种场景：我们对用户按照它们的注册时间先后来标号，对于一类文章，每个用户都有不同的喜好值，我们会想知道某一段时间内注册的用户（标号相连的一批用户）中，有多少用户对这类文章喜好值为k。因为一些特殊的原因，不会出现一个查询的用户区间完全覆盖另一个查询的用户区间(不存在L1<=L2<=R2<=R1)。

#### Input
输入： 第1行为n代表用户的个数 第2行为n个整数，第i个代表用户标号为i的用户对某类文章的喜好度 第3行为一个正整数q代表查询的组数  第4行到第（3+q）行，每行包含3个整数l,r,k代表一组查询，即标号为l<=i<=r的用户中对这类文章喜好值为k的用户的个数。 数据范围n <= 300000,q<=300000 k是整型

#### Output
输出：一共q行，每行一个整数代表喜好值为k的用户的个数

#### Showcase

Input:
```
5
1 2 3 3 5
3
1 2 1
2 4 5
3 5 3
```

Output:
```
1
0
2
```

### 50%AC 
直接用Array存储所有喜好值， 然后在每个case的用户index区间中挨个检查给定的喜好值target，一致则加一。

问题：时间复杂度，如果给定的用户区间很大的话，每次的遍历cost很大。

```java
public class BD1 {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int userNum = sc.nextInt();
        int[] like = new int[userNum];

        for(int i = 0; i < userNum; i++){
            like[i] = sc.nextInt();
        }

        int caseNum = sc.nextInt();
        int[] res = new int[caseNum];

        for(int i = 0; i < caseNum; i++){
            int left = sc.nextInt() - 1;
            int right = sc.nextInt() - 1;
            int curLike = sc.nextInt();

            for(int j = left; j <= right; j++){
                if(like[j] == curLike){
                    res[i]++;
                }
            }
        }

        for(int i = 0; i < caseNum; i++){
            System.out.println(res[i]);
        }
    }
}
```

### 100%AC
用HashMap<Integer, List<Integer>>来为每个喜好值生成一个list，将符合的用户index添加到list，之后只用遍历每个target对应的list，cost会小很多。

HashMap<Integer, List<Integer>>的trick很好，可以处理为某个attribute生成另一个相关，想记录的attribute的可变长度list。

```
public class BD1 {
    public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int userNum = sc.nextInt();
    Map<Integer, List<Integer>> map = new HashMap<>();

    for(int i = 1; i < userNum+1; i++){
        int like = sc.nextInt();

        if(!map.containsKey(like)){
            List<Integer> list = new ArrayList<>();
            list.add(i);
            map.put(like, list);
        }else{
            map.get(like).add(i);
        }
    }

    int caseNum = sc.nextInt();

    for(int i = 0; i < caseNum; i++){
        int l = sc.nextInt();
        int r = sc.nextInt();
        int fav = sc.nextInt();

        int count = 0;

        List<Integer> list = map.get(fav);

        if(list != null){
            for(int f : list){
                if(f >= l && f <= r){
                    count++;
                }
            }
        }

        System.out.println(res[i]);
    }
}
```
