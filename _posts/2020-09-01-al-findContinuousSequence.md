---
layout: post
title: 和为s的连续正数序列
categories: Algorithm
description: 
keywords: preorder, inorder
---
```java
class Solution {
    public int[][] findContinuousSequence(int target) {
        LinkedList<int[]> res = new LinkedList<>();

        int i = 1;
        int j = 1;
        int sum = 0;

        while(i <= (target >> 1)){
            if(sum < target){
                sum += j;
                j++;
            }else if(sum > target){
                sum -= i;
                i++;
            }else{
                //note，i包含在区间中而j并不是。
                int[] temp = new int[j - i];
                for(int k = i; k < j;k++){
                    temp[k-i] = k;
                }
                res.add(temp);

                sum -= i;
                i++;
            }
        }

        return res.toArray(new int[0][]);
    }
}
```