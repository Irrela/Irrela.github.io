---
layout: post
title: 扑克牌中的顺子 
categories: Algorithm
description: 
keywords: mergeSort
---
```java
class Solution {
    public boolean isStraight(int[] nums) {
        int min = 14;
        int max = -1;

        HashSet<Integer> repeated = new HashSet<>();

        for(int card : nums){
            if(card == 0){
                continue;
            }

            if(repeated.contains(card)){
                return false;
            }else{
                repeated.add(card);
            }


            max = card > max ? card : max;
            min = card < min ? card : min;
        }

        return max - min < 5;
    }
}
```
```java
\\代替hashset
class Solution {
    public boolean isStraight(int[] nums) {
        int min = 14;
        int max = -1;
        
        boolean[] repeated = new boolean[14];

        for(int card : nums){
            if(card == 0){
                continue;
            }
            if(repeated[card]){
                return false;
            }

            repeated[card] = true;
            
            min = card < min ? card : min;
            max = card > max ? card : max;
        }

        return max - min < 5;
    }
}
```