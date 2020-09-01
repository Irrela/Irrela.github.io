---
layout: post
title: 重建二叉树
categories: Algorithm
description: 
keywords: preorder, inorder
---
```java
class Solution {

    List<List<Integer>> res = new LinkedList<>();

    public List<List<Integer>> pathSum(TreeNode root, int sum) {
        if(root == null){
            return res;
        }

        recur(root, sum, new LinkedList());

        return res;
    }

    public void recur(TreeNode node, int sum, LinkedList path){
        if(node == null){
            return;
        }

        int newSum = sum - node.val;
        path.add(node.val);

        if(newSum == 0 && node.left == null && node.right == null){
            res.add(new LinkedList(path));
        }

        recur(node.left, newSum, path);
        recur(node.right, newSum, path);

        path.removeLast();
    }
}
```