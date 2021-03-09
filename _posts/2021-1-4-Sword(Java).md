---
layout: post
title: Sword(Java)
categories: Algorithm
description: 
keywords: 
---
[toc]

# 二叉树

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
        if(p == null || q == null){
            return p == null ? q : p;
        }
        if(p == root || q == root){
            return p == root ? p : q;
        }
        // 

        TreeNode left = lowestCommonAncestor(root.left, p, q);
        TreeNode right = lowestCommonAncestor(root.right, p, q);

        if(left == null || right == null){//如果两个都为null则返回null， 这条语句也能实现。
            return left == null ? right : left;
        }

        return root;//两个都不为null, 左右子树分别包含p，q的情况。
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
        if(p == null || q == null){
            return p == null ? q : p;
        }
        if(p == root || q == root){
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

    List<Integer> queue;
    List<Integer> mono;

    public MaxQueue() {
        queue = new ArrayList<>();
        mono = new ArrayList<>();
    }
    
    public int max_value() {
        if(mono.isEmpty()) {
            return -1;
        }
        return mono.get(0);
    }
    
    public void push_back(int value) {
        queue.add(value);
        while(!mono.isEmpty() && mono.get(mono.size()-1) < value) {
            mono.remove(mono.size()-1);
        }
        mono.add(value);
    }
    
    public int pop_front() {
        if(queue.isEmpty()) {
            return -1;
        }

        int pop = queue.remove(0);
        if((mono.get(0).equals(pop))) {
            mono.remove(0);
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
```python
class Solution(object):
    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if not nums:
            return 0

        res, one_before = nums[0], nums[0]

        for i in range(1, len(nums)):
            if one_before < 0:
                one_before = nums[i]
            else:
                one_before += nums[i]
            
            res = max(res, one_before)

        return res
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
```python
class Solution(object):
    def nthUglyNumber(self, n):
        """
        :type n: int
        :rtype: int
        """
        
        two_index, three_index, five_index = 0, 0, 0
        dp = [1]

        for i in range(1,n):
            ugly_two = dp[two_index]*2
            ugly_three = dp[three_index]*3
            ugly_five = dp[five_index]*5

            ugly = min(ugly_two, ugly_three, ugly_five)
            dp.append(ugly)

            # 注意不要用elif，存在一个ugly同时可以被*2，*3 或 *5得到，需要同时更新index
            if ugly == ugly_two: 
                two_index += 1
            if ugly == ugly_three:
                three_index += 1
            if ugly == ugly_five:
                five_index += 1

        return dp[-1]
```

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
```python
class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        if not prices:
            return 0

        lowest = prices[0]
        revenue = 0

        for price in prices:
            lowest = min(lowest, price)
            revenue = max(price - lowest, revenue)

        return revenue
```

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

```python
class Solution(object):
    def cuttingRope(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n < 4:
            return n-1

        oneB = 3
        twoB = 2
        threeB = 1 

        for i in range(4, n+1):
            cur = max(twoB * 2, threeB * 3)
            threeB = twoB
            twoB = oneB
            oneB = cur

        return oneB
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

```python
class Solution(object):
    def cuttingRope(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n < 4:
            return n-1

        mod = int(1e9+7)
        res = 1

        while n > 4:
            res *= 3
            res %= mod
            n -= 3

        return int(res*n%mod)
```

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

```python
class Solution(object):
    def dicesProbability(self, n):
        """
        :type n: int
        :rtype: List[float]
        """
        if not n:
            return []

        # dp = [[0]*(6*n+1)]*(n+1)
        # 声明二维数组时不要用上式
        dp = [[0 for _ in range(6*n+1)] for _ in range(n+1)]
        # 申请n+1，但是从1开始初始，只是为了好看

        for i in range(1, 7):
            dp[1][i] = 1

        for i in range(2, n+1):
            for j in range(i, 6*i+1):
                for cur in range(1, 7):
                    if j - cur > 0:
                        dp[i][j] += dp[i-1][j-cur]

        res = []
        total = 6 ** n

        for i in range(n, 6*n+1):
            res.append(float(dp[n][i]*1.0 / total))

        return res
```

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

# 多指针， 滑动窗口
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
```python
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        if not nums:
            return []

        low, high = 0, len(nums)-1

        while low < high:
            sum = nums[low] + nums[high]
            if sum > target:
                high -= 1
            elif sum < target:
                low +=1
            else:
                return [nums[low], nums[high]]
        
        return []
```

## SA21 调整数组顺序使奇数位于偶数前面
```python
class Solution(object):
    def exchange(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        if not nums:
            return []

        low, high = 0, len(nums)-1

        while low < high:
            while low < high and nums[low]%2 != 0:
                low += 1
            while low < high and nums[high]%2 == 0:
                high -= 1

            nums[low], nums[high] = nums[high], nums[low]

        return nums
```

## SA53 在排序数组中查找数字 I problem
```python
class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        if not nums:
            return 0

        low, high = 0, len(nums)-1
        
        while low <= high:
            mid = (low + high)/2
            if nums[mid] <= target:
                low = mid+1
            else:
                high = mid-1

        right = low

        if high >=0 and nums[high] != target:
            return 0

        low = 0

        while low <= high:
            mid = (low + high)/2
            if nums[mid] < target:
                low = mid+1
            else:
                high = mid-1
        left = high

        return right - left - 1
```

## SA11 旋转数组的最小数字 repeat
```python
class Solution(object):
    def minArray(self, numbers):
        """
        :type numbers: List[int]
        :rtype: int
        """
        if not numbers:
            return -1
        
        low, high = 0, len(numbers)-1

        while low < high:
            mid = (low+high)/2
            if numbers[mid] < numbers[high]:
                high = mid
            elif numbers[mid] > numbers[high]:
                low = mid+1
            else:
                high -= 1

        return numbers[low]
```

## SA59 滑动窗口的最大值
```python
class Solution(object):
    def maxSlidingWindow(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        if not nums:
            return []

        res = []
        mono = []

        for i in range(k):
            while mono and mono[-1] < nums[i]:
                mono.pop()
            mono.append(nums[i])
        res.append(mono[0])

        for i in range(k, len(nums)):
            # 单调队列首位刚好是这次滑动要移除的
            if mono[0] == nums[i-k]:
                mono.pop(0)

            while mono and mono[-1] < nums[i]:
                mono.pop()
            mono.append(nums[i])
            res.append(mono[0])

        return res
```



# 回溯, Search

## SA38 字符串的排列 problem
```python
class Solution(object):
    def permutation(self, s):
        """
        :type s: str
        :rtype: List[str]
        """
        if not s:
            return []

        self.res = []
        self.recur(s, "")

        return self.res


    def recur(self, str, path):
        if not str:
            self.res.append(path)

        saw = set()

        for i in range(len(str)):
            # 
            if str[i] in saw:
                continue

            saw.add(str[i])
            self.recur(str[:i]+str[i+1:], path+str[i])
```

## 

## SA13 机器人的运动范围
```python
class Solution(object):
    def movingCount(self, m, n, k):
        """
        :type m: int
        :type n: int
        :type k: int
        :rtype: int
        """
        def get_sum(n):
            res = 0
            while n > 0:
                res += n%10
                n //= 10

            return res

        is_visited = set()
        directions = [[0,1],[0,-1],[1,0],[-1,0]]

        def search(row, col):

            temp_res = 0

            if row < 0 or row >= m or col < 0 or col >= n:
                return temp_res
            if get_sum(row) + get_sum(col) > k:
                return temp_res
            if (row, col) in is_visited:
                return temp_res

            is_visited.add((row, col))
            temp_res += 1

            for direc in directions:
                temp_res += search(row+direc[0], col+direc[1])

            return temp_res

        return search(0, 0)
```

## SA12 矩阵中的路径
```python
class Solution(object):
    def exist(self, board, word):
        """
        :type board: List[List[str]]
        :type word: str
        :rtype: bool
        """
        rows = len(board)
        cols = len(board[0])
        
        def search(row, col, s):
            if s == "":
                return True

            if row < 0 or col < 0 or row >= rows or col >= cols:
                return False

            if s[0] != board[row][col]:
                return False
            
            board[row][col] = 'ocuppied'
            new_str = s[1:]
            res = search(row+1, col, new_str) or search(row, col+1, new_str) or search(row-1, col, new_str) or search(row, col-1, new_str)

            if res:
                return True
            else:
                board[row][col] = s[0]
                return False

        for i in range(rows):
            for j in range(cols):
                if search(i, j, word):
                    return True
        
        return False
```




# String
## SA58 翻转单词顺序
```python
class Solution(object):
    def reverseWords(self, s):
        """
        :type s: str
        :rtype: str
        """

        s = s.strip()
        i, j = len(s)-1, len(s)-1

        res = []

        while j >= 0:
            while j >= 0 and s[j] != " ":
                j -= 1
            res.append(s[j+1: i+1])

            while j >= 0 and s[j] == " ":
                j -= 1
            i = j
        
        return " ".join(res)
```

## SA46 把数字翻译成字符串 problem
给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。
```
示例 1:

输入: 12258
输出: 5
解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"
```

```python
class Solution(object):
    def translateNum(self, num):
        """
        :type num: int
        :rtype: int
        """
        if not num:
            return 1

        string = str(num)

        one_step, two_step = 1, 1

        for i in range(2, len(string)+1):
            temp = int(string[i-2:i])

            if temp < 26 and temp > 9:
                cur = one_step + two_step
            else:
                cur = one_step

            two_step = one_step
            one_step = cur

        return one_step
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
```python
class Solution(object):
    def countDigitOne(self, n):
        """
        :type n: int
        :rtype: int
        """
        digit = 1
        low = 0
        current = n % 10
        high = n / 10
        res = 0

        while current > 0 or high > 0:
            if current == 0:
                res += digit*high
            elif current == 1:
                res += digit*high+1+low
            else:
                res += (high+1)*digit

            low += current * digit
            current = high % 10
            high /= 10
            digit *= 10

        return res
```

## SA17 打印从1到最大的n位数
```python
class Solution(object):
    def printNumbers(self, n):
        """
        :type n: int
        :rtype: List[int]
        """
        if n < 1:
            return None
        
        max = 1

        while n:
            max *= 10
            n -= 1

        res = []
        for i in range(1,max):
            res.append(i)

        return res
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
```python
class Solution(object):
    def myPow(self, x, n):
        """
        :type x: float
        :type n: int
        :rtype: float
        """

        def _pow(x, n):
            if n == 0:
                return 1
            temp = _pow(x, n/2)

            if n & 1 == 1:
                return temp*temp*x
            else:
                return temp*temp
                
        if n < 0:
            x = 1/x
            n = -n

        return _pow(x,n)
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
class Solution(object):
    def singleNumbers(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        k = 0
        for x in nums:
            k ^= x

        mask = 1

        while mask & k == 0:
            mask <<= 1
        
        a, b = 0, 0
        
        for x in nums:
            if x & mask == 0: # 以0和其他数做划分，并不是非0即1
                a ^= x
            else:
                b ^= x

        return [a, b]
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

！！！考虑数字的二进制形式，对于出现三次的数字，各 二进制位 出现的次数都是 33 的倍数。
因此，统计所有数字的各二进制位中 1 的出现次数，并对 3 求余，结果则为只出现一次的数字

```python
class Solution(object):
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """

        if not nums:
            return 0

        counts = [0 for _ in range(32)]

        for num in nums: # 记录所有num在同一数位上出现1的总数
            for i in range(32): # 每次都遍历32位，不要写while num > 0，不然不方便更新counts
                counts[i] += num & 1
                num >>= 1 # pythonthon的右移默认无符号数右移

        res, base = 0, 1

        for i in range(32):
            res += base * (counts[i] % 3)
            base <<= 1

        return res
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
                if(nums[i] == nums[nums[i]]) {
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

        int mid = (low + high) / 2;

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
        int rightLen = high - mid;

        int[] left = new int[leftLen];
        int[] right = new int[rightLen];

        for(int i = 0; i < leftLen; i++){
            left[i] = nums[low + i];
        }
        for(int i = 0; i < rightLen; i++){
            right[i] = nums[mid + 1 + i];
        }

        int i = 0, j = 0, k = low, count = 0;

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
```python
class Solution(object):
    def reversePairs(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """

        return self.merge_sort(nums, 0, len(nums)-1)

    def merge_sort(self, nums, low, high): #int
        if low >= high:
            return 0

        mid = (low+high) // 2

        left_num = self.merge_sort(nums, low, mid)
        right_num = self.merge_sort(nums, mid+1, high)

        if nums[mid] <= nums[mid+1]:
            return left_num + right_num
        
        cross_num = self.merge(nums, low, mid, high)

        return left_num + right_num + cross_num
    
    def merge(self, nums, low, mid, high):
        # 注意不要写成nums[:mid+1], nums[mid+1:]
        # 是在nums中取子段
        # 左边取 [low, mid], 右边取[mid+1, high]
        left_part = nums[low:mid+1]
        right_part = nums[mid+1:high+1]

        for i in range(mid-low+1):
            left_part[i] = nums[low+i]

        for i in range(high-mid):
            right_part[i] = nums[mid+1+i]

        i, j = 0, 0
        k = low
        count = 0

        while i < len(left_part) and j < len(right_part):
            if right_part[j] < left_part[i]:
                nums[k] = right_part[j]
                k += 1
                j += 1
                count += len(left_part) - i
            else:
                nums[k] = left_part[i]
                k += 1
                i += 1

        while i < len(left_part):
            nums[k] = left_part[i]
            k += 1
            i += 1

        while j < len(right_part):
            nums[k] = right_part[j]
            k += 1
            j += 1

        return count
```

## SA45 把数组排成最小的数（Quick_sort）
```python
class Solution(object):
    def minNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: str
        """
        if not nums:
            return ""

        def quick_sort(arr, low, high):
            if low >= high:
                return
            
            i, j = low, high

            while i < j:
                while i < j and arr[j] + arr[low] >= arr[low] + arr[j]:
                    j -= 1
                while i < j and arr[i] + arr[low] <= arr[low] + arr[i]:
                    i += 1

                arr[j], arr[i] = arr[i], arr[j]

            arr[i], arr[low] = arr[low], arr[i]

            quick_sort(arr, low, i-1)
            quick_sort(arr, i+1, high)

        strs = [str(num) for num in nums]
        quick_sort(strs, 0, len(strs)-1)
        return "".join(strs)
```

## SA40 最小的k个数
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
```python
class Solution(object):
    def constructArr(self, a):
        """
        :type a: List[int]
        :rtype: List[int]
        """
        if not a:
            return []

        res = [1]

        for i in range(1, len(a)):
            res.append(res[i-1]*a[i-1])

        temp = 1

        for i in range(len(a)-2, -1, -1):
            temp *= a[i+1]
            res[i] *= temp

        return res
```

## SA29 顺时针打印矩阵
```python
class Solution(object):
    def spiralOrder(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: List[int]
        """
        if not matrix or not matrix[0]:
            return []

        up, down = 0, len(matrix)-1
        left, right = 0, len(matrix[0])-1
        res = []

        while True:
            for i in range(left, right+1):
                res.append(matrix[up][i])
            up += 1
            if up > down:
                break

            for i in range(up, down+1):
                res.append(matrix[i][right])
            right -= 1
            if left > right:
                break

            for i in range(right, left-1, -1):
                res.append(matrix[down][i])
            down -= 1
            if up > down:
                break

            for i in range(down, up-1, -1):
                res.append(matrix[i][left])
            left += 1
            if left > right:
                break

        return res
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

```python
class Solution(object):
    def lastRemaining(self, n, m):
        """
        :type n: int
        :type m: int
        :rtype: int
        """
        if not n:
            return 1
        last_index = self.lastRemaining(n-1, m)

        return (last_index+m)%n
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