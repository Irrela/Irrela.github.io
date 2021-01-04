---
layout: post
title: Leetcode
categories: Algorithm
description: 
keywords: 
---

# 二叉树

## 二叉树的镜像
```py
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def mirrorTree(self, root):
        """
        :type root: TreeNode
        :rtype: TreeNode
        """

        if not root:
            return
        
        # temp = root.left
        # root.left = root.right
        # root.right = temp
        root.left, root.right = root.right, root.left

        self.mirrorTree(root.left)
        self.mirrorTree(root.right)

        return root
```

## 二叉树的深度
```py
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def maxDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if not root:
            return 0

        return max(self.maxDepth(root.left), self.maxDepth(root.right)) + 1
```

## 对称的二叉树
```py
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def isSymmetric(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """

        def recur(left, right):
            if not left and not right:
                return True
            if not left or not right or left.val != right.val:
                return False

            return recur(left.left, right.right) and recur(right.left, left.right)
            
        if not root:
            return True

        return recur(root.left, root.right)
```
## 平衡二叉树
```py
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def isBalanced(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if not root:
            return True

        return not self.get_depth(root) == -1

    def get_depth(self, node):
        if not node:
            return 0

        left = self.get_depth(node.left)
        right = self.get_depth(node.right)

        if left == -1 or right == -1:
            return -1

        return 1 + max(left, right) if abs(left - right) <= 1 else -1
```

## 二叉搜索树的第k大节点
```py
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    res = None
    count = None

    def kthLargest(self, root, k):
        """
        :type root: TreeNode
        :type k: int
        :rtype: int
        """
        if not root:
            return 0

        self.count = k

        self.dfs(root)

        return self.res

    def dfs(self, node):
        if not node:
            return

        self.dfs(node.right)
        self.count -= 1

        if self.count == 0:
            self.res = node.val
            return 

        self.dfs(node.left)
```

## 二叉树的最近公共祖先
```py
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def lowestCommonAncestor(self, root, p, q):
        """
        :type root: TreeNode
        :type p: TreeNode
        :type q: TreeNode
        :rtype: TreeNode
        """

        if not root:
            return None
        
        if not p or not q:
            if not p:
                return q
            else:
                return p

        if p is root or q is root:
            return root

        left = self.lowestCommonAncestor(root.left, p, q)
        right = self.lowestCommonAncestor(root.right, p, q)
        
        if not left or not right:
            if not left:
                return right
            else:
                return left
        
        return root
```

## 二叉搜索树的最近公共祖先
```py
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def lowestCommonAncestor(self, root, p, q):
        """
        :type root: TreeNode
        :type p: TreeNode
        :type q: TreeNode
        :rtype: TreeNode
        """
        if not root:
            return None

        if p is root or q is root:
            return root

        if root.val < p.val and root.val < q.val:
            return self.lowestCommonAncestor(root.right, p, q)

        if root.val > p.val and root.val > q.val:
            return self.lowestCommonAncestor(root.left, p, q)

        return root
```

## 从上到下打印二叉树
从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

例如:
给定二叉树: [3,9,20,null,null,15,7],
```
    3
   / \
  9  20
    /  \
   15   7
```
返回：

[3,9,20,15,7]

Solution:
```py
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def levelOrder(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        if not root:
            return []

        queue = [root]
        res = []

        while queue:
            node = queue.pop(0)
            res.append(node.val)

            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)

        return res
```

## 从上到下打印二叉树II
从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

例如:
给定二叉树: [3,9,20,null,null,15,7],
```
    3
   / \
  9  20
    /  \
   15   7
```
返回其层次遍历结果：
```
[
  [3],
  [9,20],
  [15,7]
]
```

Solution:
```py
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def levelOrder(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """

        if not root:
            return []

        queue = [root]
        res = []

        while queue:
            temp = []
            for i in range(len(queue)):
                node = queue.pop(0)
                temp.append(node.val)

                if node.left:
                    queue.append(node.left)

                if node.right:
                    queue.append(node.right)

            res.append(temp)

        return res
```

## 从上到下打印二叉树III
请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

例如:
给定二叉树: [3,9,20,null,null,15,7],
```
    3
   / \
  9  20
    /  \
   15   7
```
返回其层次遍历结果：
```
[
  [3],
  [20,9],
  [15,7]
]
```

Solution:
```py
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def levelOrder(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """
        if not root:
            return []

        queue = [root]
        res = []
        depth = 0

        while queue:
            temp = []

            for i in range(len(queue)):
                node = queue.pop(0)
                if depth & 1 == 0:
                    temp.append(node.val)
                else:
                    temp.insert(0, node.val)

                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

            res.append(temp)
            depth += 1

        return res
```
## 重建二叉树
```py
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def buildTree(self, preorder, inorder):
        """
        :type preorder: List[int]
        :type inorder: List[int]
        :rtype: TreeNode
        """
        if not preorder:
            return None
            
        root = TreeNode(preorder[0])
        idx_rt_in = inorder.index(root.val)

        left_pre = preorder[1:idx_rt_in+1]
        right_pre = preorder[idx_rt_in+1:]

        left_in = inorder[:idx_rt_in]
        right_in = inorder[idx_rt_in+1:]

        root.left = self.buildTree(left_pre, left_in)
        root.right = self.buildTree(right_pre, right_in)

        return root
```

## 二叉搜索树的后序遍历序列
```py
class Solution(object):
    def verifyPostorder(self, postorder):
        """
        :type postorder: List[int]
        :rtype: bool
        """
        if not postorder:
            return True

        cur = 0

        while postorder[cur] < postorder[-1]:
            cur += 1

        mid = cur

        while postorder[cur] > postorder[-1]:
            cur += 1

        return cur == len(postorder)-1 and self.verifyPostorder(postorder[:mid]) and self.verifyPostorder(postorder[mid:-1])
```

## 树的子结构
```py
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def isSubStructure(self, A, B):
        """
        :type A: TreeNode
        :type B: TreeNode
        :rtype: bool
        """

        if not A and not B:
            return True

        if not A or not B:
            return False
        
        return self.is_part_of(A, B) or self.isSubStructure(A.left, B) or self.isSubStructure(A.right, B)

    def is_part_of(self, parent, child):
        if not child:
            return True
        if not parent or parent.val != child.val:
            return False

        return self.is_part_of(parent.left, child.left) and self.is_part_of(parent.right, child.right)
```

## 二叉搜索树与双向链表
```py
"""
# Definition for a Node.
class Node(object):
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
"""
class Solution(object):
    def treeToDoublyList(self, root):
        """
        :type root: Node
        :rtype: Node
        """
        if not root:
            return None

        self.prev, self.head = None, None
        self.dfs(root)
        self.prev.right, self.head.left = self.head, self.prev
        return self.head

    def dfs(self, node):
        if not node:
            return 
        
        self.dfs(node.left)
        if self.prev:
            self.prev.right, node.left = node, self.prev
        else:
            self.head = node
        self.prev = node

        self.dfs(node.right)
```

## 二叉树中和为某一值的路径
```py
class Solution(object):
    def pathSum(self, root, sum):
        """
        :type root: TreeNode
        :type sum: int
        :rtype: List[List[int]]
        """
        if not root:
            return []
        self.res = []
        self.dfs(root, sum, [])

        return self.res

    def dfs(self, node, sum, path):
        if not node:
            return
        
        sum -= node.val
        path.append(node.val)

        if not sum and not node.left and not node.right:
            self.res.append(path[:])
            

        self.dfs(node.left, sum, path)
        self.dfs(node.right, sum, path)

        path.pop()
```

# Stack
## 栈的压入、弹出序列
```py
class Solution {
    public boolean validateStackSequences(int[] pushed, int[] popped) {
        if(pushed == null && popped == null){
            return true;
        }

        if(pushed.length != popped.length){
            return false;
        }

        Deque<Integer> stack = new LinkedList<>();
        int popedIndex = 0;

        for(int num : pushed){
            stack.push(num);
            while(!stack.isEmpty() && stack.peek().equals(popped[popedIndex])){
                stack.pop();
                popedIndex++;
            }
        }

        return stack.isEmpty();       
    }
}
```


