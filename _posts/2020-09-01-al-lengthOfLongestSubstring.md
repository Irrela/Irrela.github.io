---
layout: post
title: 最长不含重复字符的子字符串
categories: Algorithm
description: 
keywords: preorder, inorder
---
```java
class Solution {
    public int lengthOfLongestSubstring(String s) {

        if(s == null || s.length() == 0){
            return 0;
        }
        //用数组代替hashmap
        int[] record = new int[128];
        for(int i = 0; i < 128; i++){
            record[i] = -1;
        }

        int res = 0;
        int len = s.length();
        //一定要将head设为-1， 否则length==1的string无法计算
        //设为0的话，当tail结束循环时，由于head未被更新过，tail = head = 0，计算出来res = 1
        int head = -1, tail = 0;

        for(;tail < len; tail++){
            char c = s.charAt(tail);
            
            if(record[c] != -1){
                head = Math.max(head, record[c]);
            }

            record[c] = tail;

            res = Math.max(res, tail - head);
        }

        return res;
    }
}
```