---
layout: post
title: 重建二叉树
categories: Algorithm
description: 
keywords: preorder, inorder
---
```java
class Solution {
    
    Map<Integer, Integer> map = new HashMap<>();

    public TreeNode buildTree(int[] preorder, int[] inorder) {
        
        if(preorder.length != inorder.length || preorder.length == 0){
            return null;
        }

        for(int i = 0; i < inorder.length; i++){
            map.put(inorder[i], i);
        }

        return build(preorder, 0, 0, preorder.length - 1);
    }

    public TreeNode build(int[] preorder, int indexPre, int left, int right){

        if(left > right){
            return null;
        }

        int nodeVal = preorder[indexPre];
        int indexIn = map.get(nodeVal);
        int leftLen = indexIn - left;

        TreeNode node = new TreeNode(nodeVal);

        node.left = build(preorder, indexPre + 1, left, indexIn - 1);
        node.right = build(preorder, indexPre + leftLen + 1, indexIn + 1, right);

        return node;

    }
}
```