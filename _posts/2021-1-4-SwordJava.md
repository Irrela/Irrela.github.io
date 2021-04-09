---
layout: post
title: Sword(Java)
categories: Algorithm
description: 
keywords: 
---
[toc]

# 二叉树

## 199. 二叉树的右视图
给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
```
示例:
输入: [1,2,3,null,5,null,4]
输出: [1, 3, 4]
解释:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
```
```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {

    List<Integer> res = new ArrayList<>();

    public List<Integer> rightSideView(TreeNode root) {
        if(root == null) {
            return res;
        }

        dfs(root, 0);

        return res;
    }

    private void dfs(TreeNode node, int depth) {
        if(node == null) {
            return;
        }

        if(res.size() == depth) {
            res.add(node.val);
        }

        depth++;
        dfs(node.right, depth);
        dfs(node.left, depth);
    }
}
```


## SA27 二叉树的镜像
```java
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public TreeNode mirrorTree(TreeNode root) {
        if(root == null){
            return null;
        }

        TreeNode temp = root.left;
        root.left = root.right;
        root.right = temp;

        mirrorTree(root.left);
        mirrorTree(root.right);

        return root;

    }
}
```

## SA55 二叉树的深度
```java
class Solution {
    public int maxDepth(TreeNode root) {
      int res = 0;
      if(root == null) {
        return res;
      }

      return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    }
}
```

## SA28 对称的二叉树
```java
class Solution {
    public boolean isSymmetric(TreeNode root) {
        if(root == null) {
            return true;
        }

        return isSymmetric(root.left, root.right);
    }

    private boolean isSymmetric(TreeNode left, TreeNode right) {
        if(left == null && right == null) {
            return true;
        }
        
        if(left == null || right == null || left.val != right.val) {
            return false;
        } 

        return isSymmetric(left.left, right.right) && isSymmetric(right.left, left.right);
        
    }
}
```
## SA55 平衡二叉树
```java
class Solution {
    public boolean isBalanced(TreeNode root) {
      if(root == null) {
          return true;
      }

      return getDepth(root) != -1;
    }

    private int getDepth(TreeNode node) {
      if(node == null) {
          return 0;
      }

      int left = getDepth(node.left);
      int right = getDepth(node.right);

      if(left == -1 || right == -1) {
        return -1;
      }

      return Math.abs(left - right) <= 1 ? Math.max(left, right) + 1 : -1; 
    }
}
```
## SA68 二叉树的最近公共祖先
```java
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        // 祖先题固定段
        if(root == null){
            return null;
        }
        if(p == null || q == null){ // 有null返回另一个
            return p == null ? q : p;
        }
        if(p == root || q == root){ // 有根节点返回根节点
            return p == root ? p : q;
        }
        // 

        TreeNode left = lowestCommonAncestor(root.left, p, q);
        TreeNode right = lowestCommonAncestor(root.right, p, q);

        if(left == null || right == null){ //如果两个都为null则返回null， 这条语句也能实现。
            return left == null ? right : left;
        }

        return root; //两个都不为null, 左右子树分别包含p，q的情况。
    }
}
```

## SA68 二叉搜索树的最近公共祖先
```java
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        // 祖先题固定段
        if(root == null){
            return null;
        }
        if(p == null || q == null){ // 有null返回另一个
            return p == null ? q : p;
        }
        if(p == root || q == root){ // 有根节点返回根节点
            return p == root ? p : q;
        }
        // 

        if(p.val > root.val && q.val > root.val) {
            return lowestCommonAncestor(root.right, p, q);
        }

        if(p.val < root.val && q.val < root.val) {
            return lowestCommonAncestor(root.left, p, q);
        }

        return root;
    }
}
```

## SA32 从上到下打印二叉树
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
```java
class Solution {
    public int[] levelOrder(TreeNode root) {
        if(root == null) {
            return new int[0];
        }

        List<TreeNode> queue = new ArrayList<>();
        List<Integer> resList = new ArrayList<>();

        queue.add(root);

        while(!queue.isEmpty()) {
            TreeNode node = queue.remove(0);
            resList.add(node.val);

            if(node.left != null) {
                queue.add(node.left);
            }

            if(node.right != null) {
                queue.add(node.right);
            }
        }
        
        int len = resList.size();
        int[] res = new int[len];
        for(int i = 0; i < len; i++) {
            res[i] = resList.remove(0);
        }
        return res;
    }
}
```

## SA32 从上到下打印二叉树II
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
```java
class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> res = new ArrayList<>();

        if(root == null){
            return res;
        }

        List<TreeNode> queue = new ArrayList<>();
        int queueSize;

        queue.add(root);

        while(!queue.isEmpty()) {
            List<Integer> tempRow = new ArrayList<>();
            queueSize = queue.size();

            for(int i = 0; i < queueSize; i++) {
                TreeNode node = queue.remove(0);
                tempRow.add(node.val);
                
                if(node.left != null) {
                    queue.add(node.left);
                }

                if(node.right != null) {
                    queue.add(node.right);
                }
            }

            res.add(tempRow);
        }

        return res;
    }
}
```

## SA32 从上到下打印二叉树III
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
```java
class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {

        List<List<Integer>> res = new ArrayList<>();
        if (root == null) {
            return res;
        }

        List<TreeNode> queue = new ArrayList<>();
        queue.add(root);
        boolean flag = true;

        while (!queue.isEmpty()){
            List<Integer> tempRow = new ArrayList<>();
            int len = queue.size();

            for (int i = 0; i < len; i++){
                TreeNode node = queue.remove(0);
                
                if (flag) {
                    tempRow.add(node.val);
                }
                else{
                    tempRow.add(0,node.val);
                }
                
                if (node.left != null){
                    queue.add(node.left);
                }
                if (node.right != null){
                    queue.add(node.right);
                }
            }
            flag = !flag;
            
            res.add(tempRow);

        }
        
        return res;
    }
}
```
## 剑指 Offer 07. 重建二叉树
输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

例如，给出
```
前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
```
返回如下的二叉树：
```
    3
   / \
  9  20
    /  \
   15   7
```

```java
class Solution {
        HashMap<Integer, Integer> inorderMap = new HashMap<>();
        int[] preorder;

    public TreeNode buildTree(int[] preorder, int[] inorder) {
        this.preorder = preorder;
        int len = preorder.length;

        for(int i = 0; i < len; i++) {
            inorderMap.put(inorder[i], i);
        }

        return recur(0, 0, len-1);
    }

    // root: 在preorder中的index
    private TreeNode recur(int root, int left, int right) {

        if(left > right) {
            return null;
        }

        TreeNode rootNode = new TreeNode(preorder[root]);
        int i = inorderMap.get(preorder[root]);

        rootNode.left = recur(root + 1, left, i - 1);
        rootNode.right = recur(root + 1 + i - left, i + 1, right);

        return rootNode;
    }
}
```

## SA33 二叉搜索树的后序遍历序列
```java
class Solution {
    public boolean verifyPostorder(int[] postorder) {
        int len = postorder.length;
        if(len == 0) {
            return true;
        }

        int cur = 0;

        while(postorder[cur] < postorder[len-1]) {
            cur++;
        }

        // mid是第一个val大于root的，即right child，所以recur时左边取不到mid
        int mid = cur;

        while(postorder[cur] > postorder[len-1]) {
            cur++;
        }

        return (cur == len - 1) && verifyPostorder(Arrays.copyOfRange(postorder, 0, mid)) && verifyPostorder(Arrays.copyOfRange(postorder, mid, len - 1));// len-1, 不取到最后一位。
    }
}
```

> 不用copyOfRange的策略, overload一个带start，end参数的verifyPostorder。 然而leetcode结果并不会省空间。还是建议第一种。
```java
class Solution {
    
    int[] postorder;

    public boolean verifyPostorder(int[] postorder) {
        this.postorder = postorder;
        int len = postorder.length;
        if(len == 0) {
            return true;
        }

        return recur(0, len-1);
    }

    private boolean recur(int start, int end) {
        if(start >= end){
            return true;
        }
        
        int pointer = start;
        while(postorder[pointer] < postorder[end]){
            pointer++;
        }

        int mid = pointer;

        while(postorder[pointer] > postorder[end]){
            pointer++;
        }

        return pointer == end && recur(start, mid - 1) && recur(mid, end - 1);
    }
}
```

## SA26 树的子结构
```java
class Solution {
    public boolean isSubStructure(TreeNode A, TreeNode B) {
        if(A == null && B == null) {
            return true;
        }
        if(A == null || B == null) {
            return false;
        }

        return isPartOf(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
    }

    private boolean isPartOf(TreeNode parent, TreeNode child) {
        if(child == null) {
            return true;
        }
        if(parent == null || parent.val != child.val) {
            return false;
        }
        
        return isPartOf(parent.left, child.left) && isPartOf(parent.right, child.right);
    }
}
```

## SA54 二叉搜索树的第k大节点
```java
class Solution {
    
    int target;
    int res;

    public int kthLargest(TreeNode root, int k) {
        if(root == null) {
            return 0;
        }

        target = k;

        dfs(root);

        return res;
    }

    private void dfs(TreeNode node) {
        if(node == null) {
            return;
        }

        dfs(node.right);
        if(--target == 0) {
            res = node.val;
            return;
        }

        dfs(node.left);
    }
}
```
## SA36 二叉搜索树与双向链表 problem
```java
class Solution {

    Node prev, head;

    public Node treeToDoublyList(Node root) {
        if(root == null) {
            return null;
        }
        
        dfs(root);

        prev.right = head;
        head.left = prev;

        return head;
    }

    private void dfs(Node node) {
        if(node == null) {
            return ;
        }

        dfs(node.left);
        
        if(prev != null) {
            prev.right = node;
            node.left = prev;
        } else {
            head = node;
        }
        prev = node;

        dfs(node.right);
    }
}
```

```java
class Solution {
    
    static Node head;//head和pre都只是引用，不是新的node
    static Node pre;//当递归完成后，head指向deque第一个node， pre指向最后一个node
    
    public Node treeToDoublyList(Node root) {
        if(root == null){
            return null;
        }
        
        head = null;
        pre = null;
        
        leftConnect(root);
        
        if(pre == null){
            head = root;
        }else{
            pre.right = root;
        }
        
        root.left = pre;
        pre = root;
        
        rightConnect(root.right);
        
        head.left = pre;
        pre.right = head;
        
        return head;
    }
    
    public static void leftConnect(Node node){
        if(node == null){
            return;
        }
        
        leftConnect(node.left);
        
        if(pre == null){
            head = node;
        }else{
            pre.right = node;
        }
        
        node.left = pre;
        pre = node;
        
    }
    
    public static void rightConnect(Node node){
        if(node == null){
            return;
        }
        
        pre.right = node;
        node.left = pre;
        pre = node;
        
        rightConnect(node.right);
    }
}
```

## SA34 二叉树中和为某一值的路径 problem
```java
class Solution {
    
    List<List<Integer>> res = new ArrayList<>();

    public List<List<Integer>> pathSum(TreeNode root, int sum) {
        if(root == null) {
            return res;
        }

        dfs(root, sum, new ArrayList<Integer>());

        return res;
    }

    private void dfs(TreeNode node, int sum, List<Integer> path) {
        if(node == null) {
            return ;
        }

        sum -= node.val;
        // 选择
        path.add(node.val);
        // 判断终末跳出
        if(sum == 0 && node.left == null && node.right == null) {
            res.add(new ArrayList<Integer>(path));
        }
        // 向下search
        dfs(node.left, sum, path);
        dfs(node.right, sum, path);
        // 完全search也未有return，进行回溯
        path.remove(path.size()-1);
    }
}
```

# Stack, Queue
## SA09 用两个栈实现队列
```java
class CQueue {

    List<Integer> in;
    List<Integer> out;

    public CQueue() {
        in = new ArrayList<>();
        out = new ArrayList<>();
    }
    
    public void appendTail(int value) {
        in.add(value);
    }
    
    public int deleteHead() {
        if(out.isEmpty()) {
            while(!in.isEmpty()) {
                out.add(in.remove(in.size()-1));
            }
        }

        if(out.isEmpty()) {
            return -1;
        }

        return out.remove(out.size()-1);
    }
}
```

```python
class CQueue(object):

    def __init__(self):
        self.in_stack = []
        self.out_stack = []

    def appendTail(self, value):
        """
        :type value: in_stackt
        :rtype: None
        """
        self.in_stack.append(value)


    def deleteHead(self):
        """
        :rtype: in_stackt
        """
        if not self.out_stack:
            while self.in_stack:
                self.out_stack.append(self.in_stack.pop())

        if not self.out_stack:
            return -1

        return self.out_stack.pop()

# Your CQueue object will be instantiated and called as such:
# obj = CQueue()
# obj.appendTail(value)
# param_2 = obj.deleteHead()
```
## SA30 包含min函数的栈
### 双压
当遇到小于栈顶min的新元素时，先压入一个当前min，更新min，再压入新元素

出栈时，弹出栈顶元素，如果该元素等于min，则再弹出一个栈顶元素，并将min更新为第二次弹出的元素
（等于则出栈两次，将min更新为第二次出栈元素。 不等于则单纯出栈一次）

```java
class MinStack {
    List<Integer> stack;
    int min;
    /** initialize your data structure here. */
    public MinStack() {
        stack = new ArrayList<>();
        min = Integer.MAX_VALUE;
    }
    
    public void push(int x) {
        if(x <= min){
            stack.add(min);
            min = x;
        }

        stack.add(x);
    }
    
    public void pop() {
        if(min == stack.remove(stack.size()-1)){
            min = stack.remove(stack.size()-1);
        }
    }
    
    public int top() {
        return stack.get(stack.size()-1);
    }
    
    public int min() {
        return min;
    }
}
```

### Mono
> 单调栈一定注意栈顶元素比较要用equals！
list存的都是Integer, 比较内容用equals, 由于自动装箱拆箱的范围在-128 ~ 127之间，在此之外的数就会比较引用，很显然，mono栈顶和stack栈顶的引用不一样
```java
class MinStack {
    List<Integer> stack;
    List<Integer> mono;

    /** initialize your data structure here. */
    public MinStack() {
        stack = new ArrayList<>();
        mono = new ArrayList<>();
    }
    
    public void push(int x) {
        stack.add(x);
        if(mono.isEmpty() || x <= mono.get(mono.size()-1)) {
            mono.add(x);
        }
    }
    
    public void pop() {
        if(stack.isEmpty()) {
            return;
        }

        // list存的都是Integer, 比较内容用equals, 由于自动装箱拆箱的范围在-128 ~ 127之间，在此之外的数就会比较引用，很显然，mono栈顶和stack栈顶的引用不一样
        if(mono.get(mono.size()-1).equals(stack.remove(stack.size()-1))) {
            mono.remove(mono.size()-1);
        }
    }
    
    public int top() {
        return stack.get(stack.size()-1);
    }
    
    public int min() {
        return mono.get(mono.size()-1);
    }
}
```


## SA31 栈的压入、弹出序列
```java
class Solution {
    public boolean validateStackSequences(int[] pushed, int[] popped) {
        if(pushed == null && popped == null){
            return true;
        }

        if(pushed.length != popped.length){
            return false;
        }

        List<Integer> stack = new ArrayList<>();
        int poppedIndex = 0;

        for(int num : pushed) {
            stack.add(num);
            while(!stack.isEmpty() && stack.get(stack.size()-1).equals(popped[poppedIndex])) {   
                stack.remove(stack.size()-1);
                poppedIndex++;
            }
        }

        return stack.isEmpty();
    }
}
```

## SA59 队列的最大值
> 栈的max min用单调栈，队列的max min用单调队列

```java
class MaxQueue {

    Deque<Integer> queue;
    Deque<Integer> mono;

    public MaxQueue() {
        queue = new ArrayDeque<>();
        mono = new ArrayDeque<>();
    }
    
    public int max_value() {
        if(mono.isEmpty()) {
            return -1;
        }
        return mono.peekFirst();
    }
    
    public void push_back(int value) {
        queue.addLast(value);
        while(!mono.isEmpty() && mono.peekLast() < value) {
            mono.removeLast();
        }
        mono.addLast(value);
    }
    
    public int pop_front() {
        if(queue.isEmpty()) {
            return -1;
        }

        int pop = queue.removeFirst();
        if((mono.peekFirst().equals(pop))) {
            mono.removeFirst();
        }

        return pop;
    }
}
```

# 链表
## SA24 反转链表
```java
class Solution {
    public ListNode reverseList(ListNode head) {
        if(head == null) {
            return null;
        }

        ListNode prev = null;
        ListNode node = head;

        while(node != null) {
            ListNode next = node.next;

            node.next = prev;
            prev = node;
            node = next;
        }

        return prev;
    }
}
```

## SA06 从尾到头打印链表
### stack
```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public int[] reversePrint(ListNode head) {
        if(head == null) {
            return new int[0];
        }   

        List<Integer> stack = new ArrayList<>();

        while(head != null) {
            stack.add(head.val);
            head = head.next;
        }

        int len = stack.size();
        int[] res = new int[len];

        for(int i = 0; i < len; i++) {
            res[i] = stack.remove(stack.size()-1);
        }

        return res;
    }   
}
```

### 遍历两次，第一次记长度，第二次反着填res数组
```java
class Solution {
    public int[] reversePrint(ListNode head) {
        if(head == null) {
            return new int[0];
        }   

        int len = 0;
        ListNode node = head;

        while(node != null) {
            len++;
            node = node.next;
        }
        
        int[] res = new int[len];
        node = head;

        for(int i = len - 1; i >= 0; i-- ) {
            res[i] = node.val;
            node = node.next;
        }

        return res;
    }   
}
```

## SA35 复杂链表的复制
```java
class Solution {
    public Node copyRandomList(Node head) {
        if(head == null) {
            return null;
        }

        HashMap<Node, Node> map = new HashMap<>();

        Node node = head;
        while(node != null) {
            map.put(node, new Node(node.val));
            node = node.next;
        }

        node = head;

        while(node != null) {
            map.get(node).random = map.get(node.random);
            map.get(node).next = map.get(node.next);
            node = node.next;
        }

        return map.get(head);
    }
}
```

## SA25 合并两个排序的链表
```java
class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        if(l1 == null || l2 == null) {
            return l1 == null ? l2 : l1;
        }

        // core part
        ListNode dummy = new ListNode(-1);
        ListNode node = dummy;

        while(l1 != null && l2 != null) {
            if(l1.val < l2.val) {
                node.next = l1;
                l1 = l1.next;
            } else {
                node.next = l2;
                l2 = l2.next;
            }
            node = node.next;
        }

        node.next = l1 == null ? l2 : l1;

        return dummy.next;
    }
}
```

## SA52 两个链表的第一个公共节点
> 本质求公倍数
```java
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        if(headA == null || headB == null) {
            return null;
        }

        ListNode nodeA = headA;
        ListNode nodeB = headB;

        while(nodeA != nodeB) {
            nodeA = nodeA == null ? headB : nodeA.next;
            nodeB = nodeB == null ? headA : nodeB.next;
        }

        return nodeA;
    }
}
```

## SA22 链表中倒数第k个节点
```java
class Solution {
    public ListNode getKthFromEnd(ListNode head, int k) {
        if(head == null) {
            return null;
        }

        ListNode first = head, second = head;

        for(int i = 0; i < k; i++) {
            first = first.next;
        }

        while(first != null) {
            first = first.next;
            second = second.next;
        }

        return second;

    }
}
```

## SA18 删除链表的节点
```java
class Solution {
    public ListNode deleteNode(ListNode head, int val) {
        if(head == null) {
            return null;
        }
        
        // Note!
        if(val == head.val) {
            return head.next;
        }

        ListNode node = head, prev = head;

        while(node.val != val) {
            prev = node;
            node = node.next;
        }

        prev.next = node.next;

        return head;
    }
}
```

# DP
## SA42 连续子数组的最大和
```java
class Solution {
    public int maxSubArray(int[] nums) {
        if(nums == null || nums.length == 0) {
            return 0;
        }

        int curSum = nums[0];
        int max = nums[0];

        for(int i = 1; i < nums.length; i++) {
            if(curSum >= 0) {
                curSum += nums[i];
            } else {
                curSum = nums[i];
            }

            max = Math.max(max, curSum);
        }

        return max;
    }
}
```

## SA48 最长不含重复字符的子字符串

我们可以使用哈希表记录每个字符的index，然后尽量向右移动尾指针来拓展窗口，并更新窗口的最大长度。如果尾指针指向的元素重复，则将头指针直接移动到窗口中重复元素的右侧。

```java
class Solution {
    public int lengthOfLongestSubstring(String s) {

        if(s == null || s.length() == 0){
            return 0;
        }

        // 不用int[26]是因为可能有' ', ' ' - 'a' = -65
        int[] record = new int[128];
        for(int i = 0; i < 128; i++){
            record[i] = -1;
        }

        int res = 0;
        int len = s.length();
        int head = -1, tail = 0; // 注意head设成-1

        for(;tail < len; tail++){
            int index = s.charAt(tail);

            if(record[index] != -1){
                head = Math.max(head, record[index]); // Note! 还是要比较一下，反例：abba(当b刚好接在b后面时)
            }

            record[index] = tail;

            res = Math.max(res, tail - head);
        }

        return res;
    }
}
```

## SA47 礼物的最大价值
```java
class Solution {
    public int maxValue(int[][] grid) {

        if(grid == null || grid.length == 0 || grid[0].length == 0) {
            return 0;
        }

        int rows = grid.length, cols = grid[0].length;

        // 一定要有这一步, 例如: 1 2 3
        //                    2 x
        //                    3
        // x从左应该是 +3（1 -》2）, 我们要第一列和第一行先更新成：
        //                    1 1+2 1+2+3
        //                    3 x
        //                    7
        for(int i = 1; i < rows; i++) {
            grid[i][0] += grid[i-1][0];
        }
        for(int i = 1; i < cols; i++) {
            grid[0][i] += grid[0][i-1];
        }

        for(int i = 1; i < rows; i++) {
            for(int j = 1; j < cols; j++) {
                grid[i][j] += Math.max(grid[i-1][j], grid[i][j-1]);
            }
        }

        return grid[rows - 1][cols - 1];
    }
}
```

## SA49 丑数
```java
class Solution {
    public int nthUglyNumber(int n) {
        if(n <= 0) {
            return 0;
        }

        int indexTwo = 0, indexThree = 0, indexFive = 0;
        int[] dp = new int[n];
        dp[0] = 1;

        for(int i = 1; i < n; i++) {
            int two = dp[indexTwo] * 2;
            int three = dp[indexThree] * 3;
            int five = dp[indexFive] * 5;

            dp[i] = Math.min(Math.min(two, three), five);

            // 注意不要用elif，存在一个ugly同时可以被*2，*3 或 *5得到，需要同时更新index
            if(dp[i] == two) {
                indexTwo++;
            }
            if(dp[i] == three) {
                indexThree++;
            }
            if(dp[i] == five) {
                indexFive++;
            }
        }

        return dp[n-1];
    }
}
```

## SA63 股票的最大利润
```java
class Solution {
    //可以多次买卖
    // public int maxProfit(int[] prices) {
    //     int len = prices.length;

    //     int[] hold = new int[len];
    //     int[] no = new int[len];

    //     hold[0] = -prices[0];

    //     for(int i = 1; i < len; i++){
    //         hold[i] = Math.max(no[i-1] - prices[i], hold[i-1]);
    //         no[i] = Math.max(no[i-1], hold[i-1] + prices[i]);
    //     }

    //     return no[len - 1];
    // }

    public int maxProfit(int[] prices) {
        int len = prices.length;

        if(len == 0){
            return 0;
        }
        
        int lowest = prices[0];
        int profit = 0;

        for(int price : prices){
            // 下述两句顺序无关先后
            profit = Math.max(profit, price - lowest);
            lowest = Math.min(lowest, price);
        }

        return profit;
    }
}
```

## SA14 剪绳子
给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

示例 1：
```
输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1
示例 2:

输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36
```
### 贪心
```java
class Solution {
    public int cuttingRope(int n) {
        if(n < 4){
            return n - 1;
        }

        int res = 1;

        while(n > 4){
            res *= 3;
            n -= 3;
        }

        return res * n;
    }
}
```

### dp
```java
class Solution {
    public int cuttingRope(int n) {

        if(n < 4){
            return n - 1;
        }

        // n-step代表另一段取n时，前面能取到的最大值， 即后面有一段时可以取的最大值
        // 举例，当后面没有另一段时， n=3 只能分成1，2而不能单取一个3
        int oneStep = 3;
        int twoStep = 2;
        int threeStep = 1; 

        for(int i = 4; i <= n; i++){
            int current = Math.max(twoStep * 2, threeStep * 3);
            threeStep = twoStep;
            twoStep = oneStep;
            oneStep = current;
        }

        return oneStep;
    }
}
```

## SA14 剪绳子II（贪心）
给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m - 1] 。请问 k[0]*k[1]*...*k[m - 1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
```
示例 1：

输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1
示例 2:

输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36
```

> 和剪绳子I的区别在于n的取值从58增大到1000， 即要考虑大数问题

```java
class Solution {
    public int cuttingRope(int n) {
        if(n < 4){
            return n - 1;
        }

        int mod = (int)1e9 + 7;
        long res = 1;

        while(n > 4){
            res *= 3;
            res %= mod;
            n -= 3;
        }

        return (int)(res * n % mod);
    }
}
```

## SA60 n个骰子的点数 problem
[python声明二维数组的坑](https://www.cnblogs.com/PythonLearn/p/7795552.html)
```python
>>> dp = [[1]*3]*3
>>> dp
[[1, 1, 1], [1, 1, 1], [1, 1, 1]]
>>> dp[0][0] = 2
>>> dp
[[2, 1, 1], [2, 1, 1], [2, 1, 1]]
```
matrix = [array] * n操作中，只是创建n个指向array的引用，所以一旦array改变，matrix中3个list也会随之改变。

```java
class Solution {
    public double[] dicesProbability(int n) {
        int pointNum = 5 * n + 1;
        int[] dp = new int[6 * n + 1];
        dp[0] = 1;
        double total = Math.pow(6, n);

        for(int i = 0; i < n; i++){
            for(int j = 6 * i;j >= i;j--){ // 反过来不行
                for(int k = 1; k < 7; k++){
                    dp[j+k] += dp[j];
                }
                dp[j] = 0;
            }
        }

        double[] res = new double[pointNum];
        for(int i = 0; i < pointNum; i++){
            res[i] = (double) dp[i + n] / total;
        }
        return res;
    }
}
```

## 322. 零钱兑换
给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

你可以认为每种硬币的数量是无限的。
```
示例 1：

输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1
```

```java
class Solution {
    public int coinChange(int[] coins, int amount) {
        if(coins == null) {
            return -1;
        }

        int[] dp = new int[amount + 1];
        Arrays.fill(dp, amount + 1); // 把每一个金额设置成amount+1，也可用其他的大值，这个比较方便
        dp[0] = 0;

        for(int i = 1; i <= amount; i++) {
            for(int j = 0; j < coins.length; j++) {
                if(i >= coins[j]) {
                    dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
                }
            }
        }

        return dp[amount] == amount + 1 ? -1 : dp[amount];
    }
}
```

# 多指针， 滑动窗口

## 求浮点数的平方根 保留小数
```java
public class Main {
    private static double epsilon = 1e-15;
    public static void main(String[] args)throws IOException{
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        String numStr = bf.readLine().trim();
        int x = Integer.parseInt(numStr);
        double ans = mySqrt(x,epsilon);
        System.out.printf(String.format("%.3f",ans));
    }

    public static double mySqrt(double x , double epsilon){
        double left = 0 , right = x;
        if(x == 0 || x == 1){
            return x;
        }
        while(left < right){
            double mid = left + (right - left) / 2;
            if(Math.abs(mid * mid - x) < epsilon){
                return mid;
            }else if(mid * mid < x){
                left = mid;
            }else{
                right = mid;
            }
        }
        return left;
    }

}
```

## 15. 三数之和
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。
```
示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
```
> 先排序，然后对每一个 不同（同负值跳过） 的负值做滑动窗口

```java
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> ret = new ArrayList<>();
        int n = nums.length;
        Arrays.sort(nums);
        
        for (int i = 0; i < n - 2; i++) {
            if (nums[i] > 0) {
                return ret;
            } // 数组是升序排列的，所以如果nums[i] > 0，后面不可能出现和为0的解，直接返回
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }// 跳过可能导致重复的解，

            int left = i + 1, right = n - 1;
            while (left < right) {
                int temp = nums[i] + nums[left] + nums[right];
                if (temp > 0) {
                    right--;
                } else if (temp < 0) {
                    left++;
                } else {
                    List<Integer> t = new ArrayList<>();
                    t.add(nums[i]);
                    t.add(nums[left]);
                    t.add(nums[right]);
                    ret.add(t);
                    while (left < right && nums[right] == nums[right - 1]) right--;
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    right--;
                    left++;
                }
            }
        }
        return ret;
    }
}
```

```java
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Set<List<Integer>> ret = new HashSet<>();
        int n = nums.length;
        Arrays.sort(nums);
        
        for (int i = 0; i < n - 2; i++) {
            if (nums[i] > 0) {
                break;
            } // 数组是升序排列的，所以如果nums[i] > 0，后面不可能出现和为0的解，直接返回


            int left = i + 1, right = n - 1;
            while (left < right) {
                int temp = nums[i] + nums[left] + nums[right];
                if (temp > 0) {
                    right--;
                } else if (temp < 0) {
                    left++;
                } else {
                    List<Integer> t = new ArrayList<>();
                    t.add(nums[i]);
                    t.add(nums[left]);
                    t.add(nums[right]);
                    ret.add(t);
                    while (left < right && nums[right] == nums[right - 1]) right--;
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    right--;
                    left++;
                }
            }
        }

        List<List<Integer>> res = new ArrayList<>();
        for(List<Integer> i : ret) {
            res.add(i);
        }

        return res;
    }
}
```


## SA57 和为s的连续正数序列

> 此题着重Java处理List转换二位数组

```java
class Solution {
    public int[][] findContinuousSequence(int target) {
        if(target <= 0) {
            return new int[0][0];
        }
        
        // 注意，可以构造一维数组的List
        List<int[]> res = new ArrayList<>();

        int low = 1, high = 1;
        int sum = 0;

        while(low <= target/2) {
            if(sum < target) {
                sum += high;
                high++;
            } else if(sum > target) {
                sum -= low;
                low++;
            } else {
                int[] temp = new int[high - low];
                for(int i = low; i < high; i++) {
                    temp[i-low] = i;
                }
                // for(int k = 0; k < high - low; k++){
                //     temp[k] = low + k;
                // }
                res.add(temp);

                sum -= low;
                low++;
            }
        }

        // 这里只用写准二维，一维随便什么都可以 
        int[][] resl = new int[res.size()][];

        // 这里要用--的写法，不然上下界都在靠拢
        for(int i = res.size() - 1; i >= 0; i--) {
            resl[i] = res.remove(res.size()-1);
        }
        return resl;

        // 或者直接内置语法转换
        return res.toArray(new int[0][]);


    }
}
```

## SA57 和为s的两个数字
```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        int low = 0, high = nums.length - 1;

        while(low < high){
            if(nums[low] + nums[high] == target){
                return new int[]{nums[low], nums[high]}; // 初始化数组写法
            }else if(nums[low] + nums[high] > target){
                high--;
            }else{
                low++;
            }
        }

        return new int[]{nums[low], nums[high]};
    }
}
```

## SA21 调整数组顺序使奇数位于偶数前面
```java
class Solution {
    public int[] exchange(int[] nums) {
        int left = 0;
        int right = nums.length - 1;

        while(left < right){
            while((nums[left] & 1) == 1 && left < right){
                left++;
            }

            while((nums[right] & 1) == 0 && left < right){
                right--;
            }

            swap(nums, left, right);
        }

        return nums;
    }

    public static void swap(int[] arr, int a, int b){
        int temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
}
```

## SA53 在排序数组中查找数字 I problem
```java
class Solution {
    public int search(int[] nums, int target) {
        if(nums == null){
            return 0;
        }
        int len = nums.length;

        int res = 0;
        int low = 0;
        int high = len - 1;

        while(i < j){
            int mid = low + (high - low) / 2;
            if(nums[mid] < target){
                low = mid + 1;
            } else if(nums[mid] > target) {
                high = mid - 1;
            } else {
                high--;
            }
        }

        while(low < len && nums[low] == target) {
            res++;
            low++;
        }

        return res;
    }
}
```

```java
class Solution {
    public int search(int[] nums, int target) {
        if(nums == null){
            return 0;
        }
        int len = nums.length;


        int i = 0;
        int j = len - 1;

        while(i <= j){
            int mid = i + (j - i) / 2;
            if(nums[mid] <= target){
                i = mid + 1;
            }else{
                j = mid - 1;
            }
        }

        int right = i;
        if(j >= 0 && nums[j] != target){ // j>=0 is necessary.
            return 0;
        }

        i = 0;
        j = len - 1;
        while(i <= j){
            int mid = i + (j - i) / 2;
            if(nums[mid] >= target){
                j = mid - 1;
            }else{
                i = mid + 1;
            }
        }
        int left = j;

        return right - left - 1;
    }
}
```

## SA11 旋转数组的最小数字 repeat
```java
class Solution {
    public int minArray(int[] numbers) {
        int len = numbers.length;
        int low = 0;
        int high = len - 1;

        while(low < high){
            int mid = (low + high) / 2;

            if(numbers[mid] < numbers[high]){
                high = mid;
            }else if(numbers[mid] > numbers[high]){
                low = mid + 1;
            }else{
                high--;
            }
        }

        return numbers[low];
        // return numbers[high];
    }
}
```

## SA59 滑动窗口的最大值
```java
class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        if(nums.length == 0 || k == 0){
            return new int[]{};
        }
        Deque<Integer> monoQueue = new ArrayDeque<>();
        int[] res = new int[nums.length - k + 1];

        for(int i = 0;i < k;i++){
            while(!monoQueue.isEmpty() && monoQueue.peekLast() < nums[i]){
                monoQueue.removeLast();
            }
            monoQueue.addLast(nums[i]);
        }

        res[0] = monoQueue.peekFirst();//形成窗口后先处理index 0， 再进入后一个循环

        for(int i = k;i < nums.length;i++){

            if(monoQueue.peekFirst() == nums[i-k]){//注意是i-k,即此次从左边移出窗口的num
                monoQueue.removeFirst();
            }
            while(!monoQueue.isEmpty() && monoQueue.peekLast() < nums[i]){
                monoQueue.removeLast();
            }
            monoQueue.addLast(nums[i]);
            res[i-k+1] = monoQueue.peekFirst();

        }

        return res;
    }
}
```

# 回溯, Search

## SA38 字符串的排列 problem
```java
class Solution {

    List<String> res;
    char[] c;

    public String[] permutation(String s) {
        res = new ArrayList<>();
        if(s == null) {
            return new String[0];
        }

        c = s.toCharArray();
        recur(0);
        return res.toArray(new String[0]);
    }

    private void recur(int index) {
        if(index == c.length - 1) { // 添加排列方案
            res.add(new String(c));
            return;
        }

        Set<Character> map = new HashSet<>();
        for(int i = index; i < c.length; i++) {
            if(map.contains(c[i])) {
                continue;  // 重复，因此剪枝
            }

            map.add(c[i]);
            swap(i, index);   // 交换，将 c[i] 固定在第 index 位
            recur(index+1);   // 开启固定第 index + 1 位字符
            swap(index, i);   // 恢复交换
        }
    }

    private void swap(int a, int b) {
        char temp = c[a];
        c[a] = c[b];
        c[b] = temp;
    }
}
```

```java
class Solution {

    HashSet<String> res = new HashSet<>();
    StringBuilder str = new StringBuilder();

    public String[] permutation(String s) {
        int len = s.length();

        if(s == null || len == 0){
            return new String[]{};
        }

        char[] chars = s.toCharArray();
        boolean[] isUsed = new boolean[len];

        recursive(0, len, chars, isUsed);

        return res.toArray(new String[0]);
    }

    public void recursive(int depth, int len, char[] chars, boolean[] isUsed){
        if(depth == len){
            res.add(new String(str));
            return;
        }

        for(int i = 0; i < len; i++){
            if(!isUsed[i]){
                isUsed[i] = true;
                str.append(chars[i]);

                recursive(depth + 1, len, chars, isUsed);

                isUsed[i] = false;
                str.deleteCharAt(str.length() - 1);
            }
        }
    } 
}
```

## SA13 机器人的运动范围
```java
class Solution {

    int rows;
    int cols;
    int target;
    int[][] directions = new int[][] { {1, 0}, {-1, 0}, {0, 1}, {0, -1} };
    boolean[][] isVisited;

    public int movingCount(int m, int n, int k) {
        rows = m;
        cols = n;
        target = k;
        isVisited = new boolean[rows][cols];

        return search(0 ,0);
    }

    private int search(int row, int col) {
        int tempRes = 0;

        if(!isInGrid(row, col)) {
            return tempRes;
        }
        if((getDigit(row) + getDigit(col)) > target) {
            return tempRes;
        }
        if(isVisited[row][col]) {
            return tempRes;
        }

        isVisited[row][col] = true;
        tempRes += 1;

        for(int[] direc : directions) {
            tempRes += search(row + direc[0], col + direc[1]);
        }

        return tempRes;
    }

    private boolean isInGrid(int row, int col){
        return row >= 0 && row < rows && col >=0 && col < cols;
    }
    
    private int getDigit(int num) {
        int res = 0;
        while(num > 0) {
            res += num % 10;
            num /= 10;
        }

        return res;
    }
}
```

## SA12 矩阵中的路径
```java
class Solution {

    int rows;
    int cols;
    String word;
    char[][] board;

    public boolean exist(char[][] board, String word) {
        if(board == null || board.length == 0 || board[0].length == 0) {
            return false;
        }

        rows = board.length;
        cols = board[0].length;
        this.board = board;
        this.word = word;

        // 因为从任何一个char开始都可能，所以要遍历
        for(int i = 0; i < rows; i++) {
            for(int j = 0; j < cols; j++) {
                if(find(i, j, 0)) {
                    return true;
                }
            }
        }

        return false;
    }

    private boolean find(int row, int col, int index) { 
        
        //三条件顺序不可变
        // Grid
        // char符合
        // 到最后一位

        if(!isInGrid(row, col)) {
            return false;
        }

        if(word.charAt(index) != board[row][col]) {
            return false;
        }
        
        if(index == word.length()-1) {
            return true;
        }

        char holder = board[row][col];
        board[row][col] = '$';
        boolean res = find(row + 1, col, index + 1) 
                      || find(row, col + 1, index + 1) 
                      || find(row - 1, col, index + 1) 
                      || find(row, col -1, index +1);

        if(res) {
            return true;
        } else {
            board[row][col] = holder;
            return false;
        }
    }

    private boolean isInGrid(int row, int col) {
        return row >= 0 && row < rows && col >= 0 && col < cols;
    }
}
```


# String
## SA58 翻转单词顺序

String的substring和join方法

```java
class Solution {
    public String reverseWords(String s) {
        if(s == null) {
            return null;
        }
        
        s = s.trim();

        int len = s.length();
        int left = len - 1, right = len - 1;
        List<String> res = new ArrayList<>();

        while(left >= 0) {
            while(left >= 0 && s.charAt(left) != ' ') {
                left--;
            }
            res.add(s.substring(left + 1, right + 1));
            while(left >= 0 && s.charAt(left) == ' ') {
                left--;
            }
            right = left;
        }

        return String.join(" ", res);
    }
}
```

## SA46 把数字翻译成字符串 problem
给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。
```
示例 1:

输入: 12258
输出: 5
解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"
```

```java
class Solution {
    public int translateNum(int num) {
        String str = String.valueOf(num);
        int oneStep = 1;
        int twoStep = 1;
        int cur;

        for(int i = 2; i < str.length() + 1; i++) {
            if(isTwoDigit(str.substring(i - 2, i))) {
                cur = oneStep + twoStep;
            } else {
                cur = oneStep;
            }

            twoStep = oneStep;
            oneStep = cur;
        }

        return oneStep;
    }

    private boolean isTwoDigit(String str) {
        return str.compareTo("25") <= 0 &&  str.compareTo("10") >= 0;
    }
}
```



# Digit
- `&`:	按位与运算符：参与运算的两个值,如果两个相应位都为1,则该位的结果为1,否则为0	(a & b) 输出结果 12 ，二进制解释： 0000 1100
- `|`:	按位或运算符：只要对应的二个二进位有一个为1时，结果位就为1。	(a | b) 输出结果 61 ，二进制解释： 0011 1101
- `^`:	按位异或运算符：当两对应的二进位相异时，结果为1	(a ^ b) 输出结果 49 ，二进制解释： 0011 0001
- `~`:	按位取反运算符：对数据的每个二进制位取反,即把1变为0,把0变为1 。~x 类似于 -x-1	(~a ) 输出结果 -61 ，二进制解释： 1100 0011，在一个有符号二进制数的补码形式。
- `<<`:	左移动运算符：运算数的各二进位全部左移若干位，由 << 右边的数字指定了移动的位数，高位丢弃，低位补0。	a << 2 输出结果 240 ，二进制解释： 1111 0000
- `>>`:	右移动运算符：把">>"左边的运算数的各二进位全部右移若干位，>> 右边的数字指定了移动的位数

[异或的使用](https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/solution/zhi-chu-xian-yi-ci-de-shu-xi-lie-wei-yun-suan-by-a/)

异或的性质
两个数字异或的结果a^b是将 a 和 b 的二进制每一位进行运算，得出的数字。 运算的逻辑是
如果同一位的数字相同则为 0，不同则为 1

异或的规律

- 任何数和本身异或则为 0

- 任何数和 0 异或是 本身

- 异或满足交换律。 即 a ^ b ^ c ，等价于 a ^ c ^ b

## Java的 >>, >>>
`>>`是算术右移，`>>>`是逻辑右移。

在算术移位中，将扩展符号位以保留数字的符号性。

例如：用8位表示的-2将是11111110（因为最高有效位的权重为负）。使用算术移位将其右移一位，您将得到11111111-1。但是，逻辑上的右移并不关心该值是否可能表示一个带符号的数字。它只是将所有内容移至右侧，并从左侧填充0。使用逻辑移位将-2右移一位将得到01111111。  

## SA43 1～n 整数中 1 出现的次数
low和high都是多位数，cur只算那个数位

如 12345678， cur是4，则low是5678， high是123.

```java
class Solution {
    public int countDigitOne(int n) {
        int digit = 1; // cur的数位
        int low = 0;
        int current = n % 10;
        int high = n / 10;
        int res = 0;

        while(current > 0 || high > 0){ // note there!!
            if(current == 0){
                res += digit * high;
            }else if(current == 1){
                res += digit * high + 1 + low;
            }else{
                res += (high + 1) * digit;
            }

            low += current * digit;
            current = high % 10;
            high /= 10;
            digit *= 10;
        }

        return res;
    }
}
```

## SA17 打印从1到最大的n位数
```java
class Solution {
    public int[] printNumbers(int n) {
        int max = (int)Math.pow(10, n);
        int[] res = new int[max-1];

        for(int i = 1; i < max; i++) {
            res[i-1] = i;
        }

        return res;
    }
}
```


## SA44 数字序列中某一位的数字
数字以0123456789101112131415…的格式序列化到一个字符序列中。在这个序列中，第5位（从下标0开始计数）是5，第13位是1，第19位是4，等等。

请写一个函数，求任意第n位对应的数字。
```
示例 1：

输入：n = 3
输出：3
示例 2：

输入：n = 11
输出：0
```
```java
class Solution {
    public int findNthDigit(int n) {
        int digit = 1;
        long start = 1;
        long count = 9;
        while (n > count) {
            n -= count;
            digit += 1;
            start *= 10;
            count = digit * start * 9; // 数位，如0-9有10个1位数，所以范围是10，10-99有90个2位数，所以范围是180。
        }
        long num = start + (n - 1) / digit;
        return String.valueOf(num).charAt((n - 1) % digit) - '0';
    }
}
```

```python
class Solution(object):
    def findNthDigit(self, n):
        """
        :type n: int
        :rtype: int
        """
        base = 9
        digit = 1
        start = 1

        while n > base:
            n -= base
            start *= 10
            digit += 1
            base = 9 * start * digit

        num = start + (n-1) // digit
        res = int(str(num)[(n-1)%digit])

        return res
```

## SA16 数值的整数次方
```java
class Solution {
    public double myPow(double x, int n) {
        double base = x;
        int pow = n;

        if(n < 0){
            base =  1 / x;
            pow *= -1;
        }

        return pow(base, pow);
    }

    public double pow(double base, int pow){
        if(pow == 0){
            return 1;
        }
        
        double temp = pow(base, pow / 2);

        if((pow & 1) == 0){
            return temp * temp;
        }else{
            return temp * temp * base;
        }
        
    }
}
```

## 136. 只出现一次的数字 1
除了一个数字出现一次，其他都出现了两次，让我们找到出现一次的数。我们执行一次全员异或即可。

```python
class Solution:
    def singleNum(self, nums):
        res = 0

        for num in nums:
            res ^= num

        return num
```

## SA56 数组中数字出现的次数 I
一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。

```
示例 1：

输入：nums = [4,1,4,6]
输出：[1,6] 或 [6,1]
示例 2：

输入：nums = [1,2,10,4,1,4,3,3]
输出：[2,10] 或 [10,2]
```
```python
class Solution {
    public int[] singleNumbers(int[] nums) {
        int k = 0;
        for(int x : nums){
            k ^= x;
        }

        int mask = 1;

        while((mask & k) != 1){
            mask <<= 1;
        }

        int a = 0;
        int b = 0;

        for(int x : nums){ // 用mask把所有nums分成两份，一份包含a， 一份包含b， 两份中的其他数字因为还是成对的，所以全部异或之后就是a和b
            if((x & mask) == 0){
                a ^= x;
            }else{
                b ^= x;
            }
        }

        return new int[]{b, a};

    }
}
```

## SA56 数组中数字出现的次数 II
在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。
```
示例 1：

输入：nums = [3,4,3,3]
输出：4
示例 2：

输入：nums = [9,1,7,9,7,9,7]
输出：1
```

！！！考虑数字的二进制形式，对于出现三次的数字，各 二进制位 出现的次数都是 3 的倍数。
因此，统计所有数字的各二进制位中 1 的出现次数，并对 3 求余（把出现3次的消除），结果则为只出现一次的数字

```python
class Solution {
    public int singleNumber(int[] nums) {
        if(nums == null || nums.length == 0){
            return 0;
        }

        int len = nums.length;
        int[] counts = new int[32];

        for(int num : nums){
            for(int i = 0; i < 32; i++){
                counts[i] += num & 1;
                num >>>= 1;
            }
        }

        int res = 0;
        int base = 1;

        for(int i = 0; i < 32; i++){
            res += base * (counts[i] % 3);
            base <<= 1;
        }
        
        return res;
    }
}
```

## SA03 数组中重复的数字
### hash思路，会有空间消耗
```java
class Solution {
    public int findRepeatNumber(int[] nums) {
        int[] repeat = new int[nums.length];

        for(int x : nums){
            if(repeat[x] > 0){
                return x;
            }

            repeat[x]++;
        }

        return -1;
    }
}
```

### 原地置换思路
```java
class Solution {
    public int findRepeatNumber(int[] nums) {
        int len = nums.length;
        if(len == 0) {
            return -1;
        }

        for(int i = 0; i < len; i++) {
            while(nums[i] != i) { // note
                if(nums[i] == nums[nums[i]]) { // 把不在自己位置的数换到他本来的位置上，之后遇到重复的就返回
                    return nums[i];
                }
                swap(nums, i, nums[i]);
            }
        }

        return -1;
    }

    private void swap(int[] arr, int a, int b) {
        int temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
}
```


# Sort related
## SA51 数组中的逆序对(merfeSort)
```java
class Solution {
    public int reversePairs(int[] nums) {
        
        int len = nums.length;

        return mergeSort(nums, 0, len - 1);

    }

    public int mergeSort(int[] nums, int low, int high){

        if(low >= high){
            return 0;
        }

        int mid = low + (high - low) / 2;

        int left = mergeSort(nums, low, mid);
        int right = mergeSort(nums, mid + 1, high);

        if(nums[mid] <= nums[mid + 1]){
            return left + right;
        }

        int cross = merge(nums, low, high, mid);

        return left + right + cross;
    }

    public int merge(int[] nums, int low, int high, int mid){
        int leftLen = mid - low + 1;
        int rightLen = high - mid; //不包括mid

        // int[] left = new int[leftLen];
        // int[] right = new int[rightLen];

        // for(int i = 0; i < leftLen; i++){
        //     left[i] = nums[low + i];
        // }
        // for(int i = 0; i < rightLen; i++){
        //     right[i] = nums[mid + 1 + i];
        // }

        int[] left = Arrays.copyOfRange(nums, low, mid + 1);
        int[] right = Arrays.copyOfRange(nums, mid + 1, high + 1);

        int i = 0, j = 0, k = low, count = 0;

        while(i < leftLen && j < rightLen){
            if(right[j] < left[i]){ // 相比merge多了一个加算逆序
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

## SA45 把数组排成最小的数（Quick_sort）
```java
class Solution {
    public String minNumber(int[] nums) {
        if(nums == null || nums.length == 0){
            return "";
        }

        int len = nums.length;
        String[] strs = new String[len];

        for(int i = 0; i < len; i++){
            strs[i] = String.valueOf(nums[i]);
        }
        
        sort(strs, 0, strs.length - 1);

        return String.join("", strs);
    }

    public static void sort(String[] strs, int low, int high){

        if(low >= high){
            return;
        }

        int i = low;
        int j = high;

        while(i < j){
            while((strs[j]+strs[low]).compareTo(strs[low]+strs[j]) >= 0 && i < j){
                j--;
            }

            while((strs[i]+strs[low]).compareTo(strs[low]+strs[i]) <= 0 && i < j){
                i++;
            }

            swap(strs, i, j);
        }

        swap(strs, low, i);

        sort(strs, low, j-1);
        sort(strs, j+1, high);
    }

    public static void swap(String[] strs, int a, int b){
        String temp = strs[a];
        strs[a] = strs[b];
        strs[b] = temp;
    }
}
```

## SA40 最小的k个数
### priorityQueue
```java
class Solution {
    public int[] getLeastNumbers(int[] arr, int k) {
        if(arr == null || k == 0) {
            return new int[0];
        }

        PriorityQueue<Integer> queue = new PriorityQueue<>(k, (Integer a, Integer b) -> b-a); // 初始容量可以不写，是达到就会扩容的而非限死。

        for(int num : arr) {
            if(queue.size() < k) {
                queue.offer(num);
            } else {
                if(queue.peek() > num) {
                    queue.poll();
                    queue.offer(num);
                }
            }
        }

        int[] res = new int[k];
        int i = 0;
        while(!queue.isEmpty()){
            res[i++] = queue.poll();
        }

        return res;
    }
}   
```
### 排序
```python
class Solution(object):
    def getLeastNumbers(self, arr, k):
        """
        :type arr: List[int]
        :type k: int
        :rtype: List[int]
        """
        if not arr or k <= 0:
            return []

        self.quick_sort(arr, 0, len(arr)-1)

        return arr[:k]

    def quick_sort(self, arr, low, high):
        if low >= high:
            return 

        i, j = low, high
        pivot = arr[low]

        while i < j:
            while i < j and arr[j] >= pivot:
                j -= 1
            while i < j and arr[i] <= pivot:
                i += 1  

            arr[j], arr[i] = arr[i], arr[j]

        arr[low], arr[i] = arr[i], arr[low]

        self.quick_sort(arr, low, i-1)
        self.quick_sort(arr, i+1, high)
```


# 特殊
## SA66 构建乘积数组
### 直线思维
每一行分成两段，连乘
问题在于会超时
解决超时的办法是让每一行能尽量利用之前行的计算结果 -> 上下三角
```java
class Solution {

    int[] a;

    public int[] constructArr(int[] a) {
        if(a == null) {
            return new int[0];
        }

        this.a = a;
        int[] res = new int[a.length];

        for(int i = 0; i < a.length; i++) {
            res[i] = calculate(i);
        }

        return res;
    }

    private int calculate(int index) {
        int temp = 1;

        for(int i = 0; i < index; i++) {
            temp *= a[i];
        }

        for(int i = index + 1; i < a.length; i++) {
            temp *= a[i];
        }

        return temp;
    }
}
```
### 上下三角
下三角先计算每一行前一段的乘积，这样就可以只连乘一次（下一行比上一行多乘一个数）
上三角再计算每一行后一段，注意边界是len-2， 因为下三角从倒数第二行开始，所以相应调整index为i+1，即a[len-1] 到 a[1]
```java
class Solution {
    public int[] constructArr(int[] a) {
        int len = a.length;
        if(len == 0){
            return new int[]{};
        }        

        int[] res = new int[len];

        res[0] = 1;
        for(int i = 1;i < len;i++){
            res[i] = res[i-1]*a[i-1];
        }

        int temp = 1;

        for(int i = len - 2;i >= 0; i--){// len - 2, i >= 0
            temp *= a[i+1]; //i+1
            res[i] *= temp;
        }

        return res;
    }
}
```
### 直线思维
```java
class Solution {

    int[] a;

    public int[] constructArr(int[] a) {
        if(a == null) {
            return new int[0];
        }

        this.a = a;
        int[] res = new int[a.length];

        for(int i = 0; i < a.length; i++) {
            res[i] = calculate(i);
        }

        return res;
    }

    private int calculate(int index) {
        int temp = 1;

        for(int i = 0; i < index; i++) {
            temp *= a[i];
        }

        for(int i = index + 1; i < a.length; i++) {
            temp *= a[i];
        }

        return temp;
    }
}
```

## SA29 顺时针打印矩阵
```java
class Solution {
    public int[] spiralOrder(int[][] matrix) {
        if(matrix == null || matrix.length == 0 || matrix[0].length == 0){
            return new int[]{};
        }

        int rows = matrix.length;
        int cols = matrix[0].length;

        int[] res = new int[rows * cols];
        int index = 0;

        int left = 0;
        int right = cols - 1;
        int up = 0;
        int down = rows - 1;

        while(index < rows * cols){
            for(int i = left;i <= right && index < rows * cols;i++){
                res[index++] = matrix[up][i];
            }

            for (int i = up + 1; i <= down && index < rows * cols;i++){
                res[index++] = matrix[i][right];
            }

            for(int i = right - 1;i >= left && index < rows * cols;i--){
                res[index++] = matrix[down][i];
            }

            for(int i = down - 1; i >= up + 1 && index < rows * cols;i--){
                res[index++] = matrix[i][left];
            }

            left++;
            up++;
            right--;
            down--;
        }

        return res;
    }
}
```

## 61. 扑克牌中的顺子
```python
class Solution(object):
    def isStraight(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        if not nums:
            return False

        _max = -1
        _min = 14

        repeat = set()

        for card in nums:
            if card == 0:
                continue
            if card in repeat:
                return False
            else:
                repeat.add(card)

            _max = max(_max, card)
            _min = min(_min, card)

        return _max - _min < 5
```

## 62. 圆圈中最后剩下的数字
0,1,,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字。求出这个圆圈里剩下的最后一个数字。

例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。

```
示例 1：

输入: n = 5, m = 3
输出: 3
示例 2：

输入: n = 10, m = 17
输出: 2
```

```java
class Solution {
    public int lastRemaining(int n, int m) {
        if(n == 1){
            return 0;
        }

        int nextIndex = lastRemaining(n-1, m);

        return (m + nextIndex) % n;
    }
}
```


## 剑指 Offer 04. 二维数组中的查找
在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

```
示例:
现有矩阵 matrix 如下：
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
给定 target = 5，返回 true。

给定 target = 20，返回 false。
```

```java
class Solution {
    public boolean findNumberIn2DArray(int[][] matrix, int target) {
        if(matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return false;
        }

        int rows = matrix.length;
        int cols = matrix[0].length;

        int row = 0, col = cols-1;

        while(row < rows && col >= 0) {
            if(target == matrix[row][col]) {
                return true;
            } else if(target > matrix[row][col]) {
                row++;
            } else {
                col--;
            }
        }

        return false;
    }
}
```

## 剑指 Offer 05. 替换空格
请实现一个函数，把字符串 s 中的每个空格替换成"%20"。


```
示例 1：
输入：s = "We are happy."
输出："We%20are%20happy."
```

```java
class Solution {
    public String replaceSpace(String s) {
        if(s == null) {
            return null;
        }

        StringBuilder str = new StringBuilder();

        for(char c : s.toCharArray()) {
            if(c == ' ') {
                str.append("%20");
            } else {
                str.append(c);
            }
        }

        return new String(str);
    }
}
```

## 矩阵原地转置

```java
class Solution {

    public void rotate(int[][] matrix) {
        if(matrix.size()==0) {
            return ;
        }

        int n = matrix.size();
        int cnt = n / 2, step = 1;

        while(step <= cnt) {
            int i = step - 1;
            for(int j = step - 1; j < n - step; j++)
            {
                swap(matrix[i][j],matrix[n-j-1][step-1]);
                swap(matrix[n-j-1][step-1],matrix[n-step][n-j - 1]);
                swap(matrix[n-step][n-j-1],matrix[j][n-step]);
            }
            step++;
        }
    }
};
```