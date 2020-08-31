---
layout: post
title: 数组中的逆序对
categories: Algorithm
description: 
keywords: mergeSort
---
```java
class Solution {

    public int reversePairs(int[] nums) {
        int len = nums.length;

        if(len < 2){
            return 0;
        }

        return mergeSort(nums, 0, len - 1);


    }

    public int mergeSort(int[] nums, int low, int high){
        if(low >= high || nums.length == 0){
            return 0;
        }

        int mid = (low + high) / 2;

        int leftNum = mergeSort(nums, low, mid);
        int rightNum = mergeSort(nums, mid + 1, high);

        if(nums[mid] <= nums[mid + 1]){
            return leftNum + rightNum;
        }

        int cross = merge(nums, low, high, mid);
        return leftNum + rightNum + cross;

    }

    public int merge(int[] nums, int low, int high, int mid){
        int leftLen = mid - low + 1;
        int rightLen = high - mid;

        int[] left = new int[leftLen];
        int[] right = new int[rightLen];

        for(int i = 0; i < leftLen; i++){
            left[i] = nums[low + i];
        }
        for(int i = 0; i < rightLen; i++){
            right[i] = nums[mid + 1 + i];
        }

        int i = 0;
        int j = 0;
        int k = low;
        int count = 0;

        while(i < leftLen && j < rightLen){
            if(right[j] < left[i]){
                nums[k++] = right[j++];
                count += leftLen - i;
            }else{
                nums[k++] = left[i++];
            }
        }

        while(i < leftLen){
            nums[k++] = left[i++];
        }

        while(j < rightLen){
            nums[k++] = right[j++];
        }

        return count;
    }
}
```