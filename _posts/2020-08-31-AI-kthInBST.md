---
layout: post
title: 二叉树中第k大的元素
categories: Algorithm
description: 
keywords: dfs, BST
---
```java 
class Solution {

    int count;
    int res;

    public int kthLargest(TreeNode root, int k) {

        if(root == null){
            return -1;
        }

        count = k;
        res = 0;

        recur(root);

        return res;
    }

    public void recur(TreeNode node){

        if(node == null){
            return ;
        }
        //一直递归到最右下方的结点才进入下一步。
        recur(node.right);

        if(--count == 0){
            res = node.val;
            return;
        }

        recur(node.left);
    }
}
```