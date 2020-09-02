---
layout: post
title: 连续子数组的最大和
categories: Algorithm
description: 
keywords: preorder, inorder
---
```java
class Solution {
    // public int maxSubArray(int[] nums) {
    //     if(nums == null || nums.length == 0){
    //         return 0;
    //     }

    //     int max = nums[0];

    //     for(int i = 1;i < nums.length;i++){//实质dp，利用原数组nums存储状态，如果不允许按改变原数组则按一般dp做
    //         if(nums[i-1] >= 0){
    //             nums[i] += nums[i-1]; 
    //         }

    //         max = nums[i] > max ? nums[i] : max;
    //     }

    //     return max;
    // }

    public int maxSubArray(int[] nums) {
        if(nums == null || nums.length == 0){
            return 0;
        }

        int len = nums.length;
        int oneStep = nums[0];
        int max = nums[0];

        for(int i = 1; i < len; i++){
            if(oneStep >= 0){
                oneStep += nums[i];
            }else{
                oneStep = nums[i];
            }

            max = oneStep > max ? oneStep : max;
        }

        return max;
    }
}
```