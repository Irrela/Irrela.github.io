---
title: Sword (Java)
categories: Leetcode
- Leetcode
---
# 二叉树

## Miscellany

### 关于遍历

先序、中序、后序的递归和非递归遍历。

> 无论是哪种遍历方法，考查节点的顺序都是一样的(思考做试卷的时候，人工遍历考查顺序)。只不过有时候考查了节点，将其暂存，需要之后的过程中输出。

- 先序：考察到一个节点后，即刻输出该节点的值，并继续遍历其左右子树。(根左右)

- 中序：考察到一个节点后，将其暂存，遍历完左子树后，再输出该节点的值，然后遍历右子树。(左根右)

- 后序：考察到一个节点后，将其暂存，遍历完左右子树后，再输出该节点的值。(左右根)

- preOrder的结构是`[curNode, [leftTree...], [rightTree...]]`

- inOrder的结构是`[[leftTree...], curNode, [rightTree...]]`

- postOrder的结构是`[[leftTree...], [rightTree...], curNode]`

Note: 在[leftTree...]内部还是先左node后右node，无论是是前中后序

[二叉树遍历(先序、中序、后序)](https://www.jianshu.com/p/456af5480cee)

## SA07 从前序与中序遍历序列构造二叉树

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
// help：
// preOrder的结构是[curNode, [leftTree...], [rightTree...]]

// inOrder的结构是[[leftTree...], curNode, [rightTree...]]

// postOrder的结构是[[leftTree...], [rightTree...], curNode]

class Solution {

    Map<Integer, Integer> inOrderMap; // <nodeVal, idxInInOrderArr> 用来找当前node在中序中的idx
    int[] globalPreOrder;

    public TreeNode buildTree(int[] preorder, int[] inorder) {
        inOrderMap = new HashMap<>();
        globalPreOrder = preorder;

        int len = preorder.length;
        
        for (int i = 0; i < len; i++) {
            inOrderMap.put(inorder[i], i);
        }

        return recur(0, len - 1, 0);
    }

    private TreeNode recur(int leftPre, int rightPre, int leftIn) {
        if (leftPre > rightPre) {
            return null;
        }

        int rootNodeVal = globalPreOrder[leftPre];
        TreeNode rootNode = new TreeNode(rootNodeVal);
        int rootIn = inOrderMap.get(rootNodeVal);
        
        int leftTreeSize = rootIn - leftIn; // 模拟 [0 1 2] 3
        
        // leftPre : fatherLeftPre + 1
        // rightPre : 0 [1 2 3] : fatherLeftPre + leftTreeSize = leftPre + rootIn - leftIn;
        // leftIn: 0 [1 2 3] | leftIn = rootIn + (rootIn - leftIn) : 左子树的leftIn和本身一样
        rootNode.left = recur(leftPre + 1, leftPre + rootIn - leftIn, leftIn);

        // leftPre = 0 [1 2 3] [4] fatherLeftPre + leftTreeSize  + 1
        // rightPre = fatherRightPre
        // leftIn: rootIn + 1
        rootNode.right = recur(leftPre + rootIn - leftIn + 1, rightPre, rootIn + 1);

        return rootNode;

    }
}
```

```py
class Solution(object):
    def buildTree(self, preorder, inorder):
        """
        :type preorder: List[int]
        :type inorder: List[int]
        :rtype: TreeNode
        """
        # hashmap： {root_val, index in inorder arr}
        inorder_map = {}

        for i in range(len(inorder)):
            inorder_map[inorder[i]] = i

        # help：
        # preOrder的结构是[curNode, [leftTree...], [rightTree...]]
        # inOrder的结构是[[leftTree...], curNode, [rightTree...]]
        # postOrder的结构是[[leftTree...], [rightTree...], curNode]

        # left_pre: 当前node的先序arr的左边界idx
        # right_pre: 当前node的先序arr的有边界idx
        # left_in：当前node的中序arrde左边界idx
        def recur(left_pre, right_pre, left_in):
            if left_pre > right_pre:
                return None
            
            root_node_val = preorder[left_pre]
            root_node = TreeNode(root_node_val)
            inorder_root_index = inorder_map[root_node_val]

            left_tree_size = inorder_root_index - left_in

            root_node.left = recur(left_pre + 1, left_pre + inorder_root_index - left_in, left_in)
            root_node.right = recur(left_pre + inorder_root_index - left_in + 1, right_pre, inorder_root_index + 1)
            
            return root_node


        return recur(0, len(preorder) - 1, 0)
```

## [SA26](https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof/) 树的子结构
```
输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)

B是A的子结构， 即 A中有出现和B相同的结构和节点值。

例如:
给定的树 A:

     3
    / \
   4   5
  / \
 1   2
给定的树 B：

   4 
  /
 1
返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。

示例 1：

输入：A = [1,2,3], B = [3,1]
输出：false
示例 2：

输入：A = [3,4,5,1,2], B = [4,1]
输出：true
```
> Note: isPartOf(A, B) 从当前节点开始完全一致

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

## SA27 二叉树的镜像

请完成一个函数，输入一个二叉树，该函数输出它的镜像。

```
例如输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
镜像输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

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

## SA28 对称的二叉树

请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

```
例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3

```

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

> Queue 存 root
> 循环条件: Queue不为空， 每一次循环都是在记录一层并入队下一层

Solution:

```java
class Solution {
    public int[] levelOrder(TreeNode root) { // 要求返回int[], 所以无法用List.toArray
        if (root == null) {
            return new int[0];
        }

        List<TreeNode> queue = new ArrayList<>();
        List<Integer> resList = new ArrayList<>();

        queue.add(root);

        while (!queue.isEmpty()) {
            TreeNode node = queue.remove(0);
            resList.add(node.val);

            if (node.left != null) {
                queue.add(node.left);
            }

            if (node.right != null) {
                queue.add(node.right);
            }
        }

        int len = resList.size();
        int[] resArray = new int[len];
        for (int i = 0; i < len; i++) {
            resArray[i] = resList.remove(0);
        }

        return resArray;
    }
}
```

## SA32 从上到下打印二叉树 II

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

        if (root == null) {
            return res;
        }

        List<TreeNode> queue = new ArrayList<>();
        int queueSize;

        queue.add(root);

        while (!queue.isEmpty()) {
            List<Integer> tempRow = new ArrayList<>();
            queueSize = queue.size();

            for (int i = 0; i < queueSize; i++) {
                TreeNode node = queue.remove(0);
                tempRow.add(node.val);

                if (node.left != null) {
                    queue.add(node.left);
                }

                if (node.right != null) {
                    queue.add(node.right);
                }
            }

            res.add(tempRow);
        }

        return res;
    }
}
```

## SA32 从上到下打印二叉树 III

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
        boolean leftToRight = true;

        while (!queue.isEmpty()){
            List<Integer> tempRow = new ArrayList<>();
            int len = queue.size();

            for (int i = 0; i < len; i++){
                TreeNode node = queue.remove(0);

                if (leftToRight) {
                    tempRow.add(node.val);
                }
                else{
                    tempRow.add(0, node.val);
                }

                if (node.left != null){
                    queue.add(node.left);
                }
                if (node.right != null){
                    queue.add(node.right);
                }
            }

            leftToRight = !leftToRight;
            res.add(tempRow);

        }

        return res;
    }
}
```

## SA33 二叉搜索树的后序遍历序列
```
输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。

参考以下这颗二叉搜索树：

     5
    / \
   2   6
  / \
 1   3
示例 1：

输入: [1,6,3,2,5]
输出: false
示例 2：

输入: [1,3,2,6,5]
输出: true
```
> 递归: 后序遍历满足 [[... < node.val] [... > node.val] node] 的规律
> 找到左右子树的最后一个点，进行递归

> copyOfRange(arr, 0, 3)
> [0, 1, 2, 3, 4] -> [0, 1, 2]


```java
// 左子树都比node小，右子树都比node大 =》 左右子树递归
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

> 不用 copyOfRange 的策略, overload 一个带 start，end 参数的 verifyPostorder。 然而 leetcode 结果并不会省空间。还是建议第一种。

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

## SA34 二叉树中和为某一值的路径
[LeetCode](https://leetcode.cn/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/)
> 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
Note:
- dfs
- root到leaf的节点: sum == 0 && left == null && right == null
- 未找到时在dfs后删掉最后一个节点，即是本层dfs先添加到path中的那个。能走到这一步，前面的两个dfs及后续的递归都已经删掉各自层的添加节点了。
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


## SA36 二叉搜索树与双向链表
[LeetCode](https://leetcode.cn/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/)
```
输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。要求不能创建任何新的节点，只能调整树中节点指针的指向。
```
> 走一个中序遍历BST，得到ascending排序
> Note dfs到最左，直接head指向
> 一般节点依次与prev对接
> dfs完之后，prev指向最右，将最右和head对接
```java
class Solution {
        Node prev;
        Node head;
    public Node treeToDoublyList(Node root) {
        if (null == root) {
            return null;
        }

        dfs(root);

        // 此时prev是最右节点
        prev.right = head;
        head.left = prev;

        return head;
    }


    private void dfs(Node node) {
        if (null == node) {
            return;
        }

        dfs(node.left);

        // 一直dfs到最左节点，
        if (null == prev) { // 最左节点，head指向
            head = node;
        } else { // 后续节点与prev连接
            prev.right = node;
            node.left = prev;
        }
        prev = node; // 更新prev
        
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

## SA54 二叉搜索树的第 k 大节点
[LeetCode](https://leetcode.cn/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/)
```
给定一棵二叉搜索树，请找出其中第 k 大的节点的值。

示例 1:

输入: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
输出: 4
示例 2:

输入: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
输出: 4

```
> 第K大：BST的最右节点最大，dfs先右递归
> Note: 最好把k值和res都声明成私有变量，方便递归
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


## SA55 二叉树的深度

```java
class Solution {
    public int maxDepth(TreeNode root) {

      if(null == root) {
        return 0;
      }

      return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    }
}
```

## SA55 平衡二叉树

输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过 1，那么它就是一棵平衡二叉树。

```
示例 1:

给定二叉树 [3,9,20,null,null,15,7]

    3
   / \
  9  20
    /  \
   15   7
返回 true 。

示例 2:

给定二叉树 [1,2,2,3,3,null,null,4,4]

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
返回 false 。
```

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

给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]

```
        6
      /   \
     2      8
    / \    / \
   0   4  7   9
      / \
     3   5
```

```java
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (null == root) { // 找不到的情况
            return null;
        }

        if (null == p || null == q) { // 找到的情况1: 一个为null则LC为另一个
            return null == p ? q : p;
        }

        if (root == p || root == q) { // 找到的情况2: 其中一个为root则LC为root
            return root;
        }

        TreeNode lowestCommonFromLeft = lowestCommonAncestor(root.left, p, q);
        TreeNode lowestCommonFromRight = lowestCommonAncestor(root.right, p, q);

        if (null == lowestCommonFromLeft || null == lowestCommonFromRight) { // 有一边找不到则一定在另一边
            return null == lowestCommonFromLeft ? lowestCommonFromRight : lowestCommonFromLeft;
        }

        // 都找不到说明分别在两边，则当前node就是lowest common
        return root;

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
        } // 本题中这个是不需要的: 下方return root的情况就是这个

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

        // 先走到这里的节点写入自己, 因为是先right的dfs，所以右节点优先
        if(res.size() == depth) {
            res.add(node.val);
        }

        depth++;
        dfs(node.right, depth);
        dfs(node.left, depth);
    }
}
```

# Stack, Queue

## SA09 用两个栈实现队列
[leetcode](https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/)
```java
class CQueue {
    Deque<Integer> in;
    Deque<Integer> out;

    public CQueue() {
        in = new ArrayDeque();
        out = new ArrayDeque();  
    }
    
    public void appendTail(int value) {
        in.push(value);
    }
    
    public int deleteHead() {
        if (out.isEmpty()) {
            while (!in.isEmpty()) {
                out.push(in.pop());        
            }
        }

        if (out.isEmpty()) {
            return -1;
        }

        return out.pop();
    }
}
```

## SA30 包含 min 函数的栈

### 双压

当遇到小于栈顶 min 的新元素时，先压入一个当前 min，更新 min，再压入新元素

出栈时，弹出栈顶元素，如果该元素等于 min，则再弹出一个栈顶元素，并将 min 更新为第二次弹出的元素
（等于则出栈两次，将 min 更新为第二次出栈元素。 不等于则单纯出栈一次）

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

> 单调栈一定注意栈顶元素比较要用 equals！
> list 存的都是 Integer, 比较内容用 equals, 由于自动装箱拆箱的范围在-128 ~ 127 之间，在此之外的数就会比较引用，很显然，mono 栈顶和 stack 栈顶的引用不一样

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

用一个栈来实际压入pushed数列
每压入一个后，以当前状态尝试出栈(能对应popped就一直出) 

```java
class Solution {
    public boolean validateStackSequences(int[] pushed, int[] popped) {
        if (pushed == null && popped == null) {
            return true;
        }

        if (pushed.length != popped.length) {
            return false;
        }

        List<Integer> stack = new ArrayList<>();
        int poppedIndex = 0;

        for (int num : pushed) {
            stack.add(num);
            while (!stack.isEmpty() && stack.get(stack.size()-1).equals(popped[poppedIndex])) {
                stack.remove(stack.size()-1);
                poppedIndex++;
            }
        }

        return stack.isEmpty();
    }
}
```

## SA59 队列的最大值

> 栈的 max min 用单调栈，队列的 max min 用单调队列

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

## 17. 电话号码的字母组合

给定一个仅包含数字  2-9  的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

```
示例:
输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
```

```java
class Solution {
	public List<String> letterCombinations(String digits) {
        List<String> res = new ArrayList<>();
        if(digits == null || digits.length() == 0) {
            return res;
        }

        String[] letterMap = {"abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"};
        res.add("");

        for(int i = 0; i < digits.length(); i++) {
            String letters = letterMap[digits.charAt(i) - '2'];
            int currentSize = res.size(); // 记录当前queue长度再出队

            for(int j = 0; j < currentSize; j++) {
                String temp = res.remove(0);
                for(int k = 0; k < letters.length(); k++) {
                    res.add(temp + letters.charAt(k));
                }
            }
        }
        return res;
    }
}
```

## 20. 有效的括号

给定一个只包括 '('，')'，'{'，'}'，'['，']'  的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

```
示例 1:
输入: "()"
输出: true
```

```
示例 2:
输入: "()[]{}"
输出: true
```

```
示例 3:
输入: "(]"
输出: false
```

```java
class Solution {
    private static final Map<Character, Character> map = new HashMap<>();
    public boolean isValid(String s) {

        map.put('{','}');
        map.put('[',']');
        map.put('(',')');
        map.put('?','?');

        if(s.length() > 0 && !map.containsKey(s.charAt(0))) {
            return false;
        }

        LinkedList<Character> stack = new LinkedList<>();
        stack.add('?');

        for(Character c : s.toCharArray()) {
            if(map.containsKey(c)) {
                stack.add(c);
            } else if(map.get(stack.remove(stack.size()-1)) != c) {
                return false;
            }
        }
        return stack.size() == 1;
    }
}

```

## 32. 最长有效括号

给你一个只包含 '('  和 ')'  的字符串，找出最长有效（格式正确且连续）括号子串的长度。

```
示例 1：
输入：s = "(()"
输出：2
```

```
示例 2：
输入：s = ")()())"
输出：4
```

```
示例 3：
输入：s = ""
输出：0
```

> 我们始终保持栈底元素为当前已经遍历过的元素中「最后一个没有被匹配的右括号的下标」

- 对于遇到的每个'(' ，我们将它的下标放入栈中.
- 对于遇到的每个')' ，我们先弹出栈顶元素表示匹配了当前右括号：
  == 如果栈为空，说明当前的右括号为没有被匹配的右括号，我们将其下标放入栈中来更新我们之前提到的「最后一个没有被匹配的右括号的下标.
  == 如果栈不为空，当前右括号的下标减去栈顶元素即为「以该右括号为结尾的最长有效括号的长度」.

```java
public class Solution {
    public int longestValidParentheses(String s) {
        int maxRes = 0;
        LinkedList<Integer> stack = new LinkedList<>();
        stack.add(-1);

        for(int i = 0; i < s.length(); i++) {
            if(s.charAt(i) == '(') {
                stack.add(i);
            } else {
                stack.remove(stack.size()-1);
                if(stack.isEmpty()) {
                    stack.add(i);
                } else {
                    maxRes = Math.max(maxRes, i-stack.get(stack.size()-1));
                }
            }
        }
        return maxRes;
    }
}
```

# 链表

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

```py
class Solution(object):
    def reversePrint(self, head):
        """
        :type head: ListNode
        :rtype: List[int]
        """

        stack = []
        node = head
        while node:
            stack.insert(0, node.val)
            node = node.next
        
        return stack
```

### 遍历两次

第一次记长度，第二次反着填 res 数组

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

```py

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

## SA22 链表中倒数第 k 个节点

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


## 链表加法（正向）

```
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.

```

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        int carry = 0;
        ListNode head = new ListNode(-1);
        ListNode cur = head;

        while(l1 != null || l2 != null) {
            int temp = (l1 == null ? 0 : l1.val) + (l2 == null ? 0 : l2.val) + carry;
            carry = temp / 10;

            cur.next = new ListNode(temp % 10);

            l1 = (l1 == null ? l1 : l1.next);
            l2 = (l2 == null ? l2 : l2.next);
            cur = cur.next;
        }
        if(carry == 1) {
            cur.next = new ListNode(1);
        }
        return head.next;
    }
}
```

## 链表求和（反向）

```
输入：(7 -> 1 -> 6) + (5 -> 9 -> 2)，即617 + 295
输出：2 -> 1 -> 9，即912
```

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
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        int carry = 0;
        ListNode head = new ListNode(0);
        ListNode cur = head;

        while (l1 != null || l2 != null) {
            int num1 = l1 == null ? 0 : l1.val;
            int num2 = l2 == null ? 0 : l2.val;

            int num = num1 + num2 + carry;
            carry = num / 10;

            cur.next = new ListNode(num % 10);

            l1 = l1 == null ? null : l1.next;
            l2 = l2 == null ? null : l2.next;
            cur = cur.next;
        }
        if (carry == 1)
            cur.next = new ListNode(carry);
        return head.next;
    }
}
```

## 链表求和

给定两个用链表表示的整数，每个节点包含一个数位。
这些数位是反向存放的，也就是个位排在链表首部。
编写函数对这两个整数求和，并用链表形式返回结果。

```
示例：
输入：(7 -> 1 -> 6) + (5 -> 9 -> 2)，即617 + 295
输出：2 -> 1 -> 9，即912
```

进阶：思考一下，假设这些数位是正向存放的，又该如何解决呢?

```
示例：
输入：(6 -> 1 -> 7) + (2 -> 9 -> 5)，即617 + 295
输出：9 -> 1 -> 2，即912
```

思路:
将两个链表看成是相同长度的进行遍历，如果一个链表较短则在前面补 00，比如 987 + 23 = 987 + 023 = 1010
每一位计算的同时需要考虑上一位的进位问题，而当前位计算结束后同样需要更新进位值
如果两个链表全部遍历完毕后，进位值为 11，则在新链表最前方添加节点 11

> 技巧：对于链表问题，返回结果为头结点时，通常需要先初始化一个预先指针 pre，该指针的下一个节点指向真正的头结点 head。使用预先指针的目的在于链表初始化时无可用节点值，而且链表构造过程需要指针移动，进而会导致头指针丢失，无法返回结果。

```java
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        int carry = 0;
        ListNode head = new ListNode(0);
        ListNode cur = head;

        while (l1 != null || l2 != null) {
            int num1 = (l1 == null ? 0 : l1.val);
            int num2 = (l2 == null ? 0 : l2.val);

            int num = num1 + num2 + carry;
            carry = num / 10;

            cur.next = new ListNode(num % 10);

            l1 = (l1 == null ? null : l1.next);
            l2 = (l2 == null ? null : l2.next);
            cur = cur.next;
        }
        if (carry == 1)
            cur.next = new ListNode(carry);
        return head.next;
    }
}
```

## 2. 两数相加

给你两个   非空 的链表，表示两个非负的整数。它们每位数字都是按照   逆序   的方式存储的，并且每个节点只能存储   一位   数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0  开头。

```
示例 1：
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
```

```
示例 2：
输入：l1 = [0], l2 = [0]
输出：[0]
```

```
示例 3：
输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]
```



# DP

## SA14 剪绳子

给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n 都是整数，n>1 并且 m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]_k[1]_...\*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是 8 时，我们把它剪成长度分别为 2、3、3 的三段，此时得到的最大乘积是 18。

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
> 理论上尽量分成长度 3 的段落能达到最大
推导:
1. 基于AM-GM不等式的取等条件，均分能使几何均值最大
2. 问题已转化为 y = x ^ (1/x) 使 y 最大 -》 极值点在 e 处， 故尽量取 3


### 贪心

```java
class Solution {
    public int cuttingRope(int n) {
        if (n == 2) {
            return 1 * 1; 
        }
        if (n == 3) {
            return 1 * 2;
        } 

        int res = 1;
        
        // 尽量分成3
        // 4可以分为3 * 1 和 2 * 2, 后者更大
        while (n > 4) {
            res *= 3;
            n -= 3;
        }

        return res * 2 * 2;
    }
}
```

### dp
```java
class Solution {
    public int cuttingRope(int n) {

        if (n < 4) {
            return n - 1;
        }

        // n-step代表另一段取n时，前面能取到的最大值，即后面有一段时可以取的最大值
        // 举例，当后面没有另一段时，n=3 只能分成1，2而不能单取一个3
        int oneStep = 3;
        int twoStep = 2;
        int threeStep = 1;

        for (int i = 4; i <= n; i++) {
            int current = Math.max(twoStep * 2, threeStep * 3);
            threeStep = twoStep;
            twoStep = oneStep;
            oneStep = current;
        }

        return oneStep;
    }
}
```

## SA14 剪绳子 II（考虑大数）

给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m  段（m、n 都是整数，n>1 并且 m>1），每段绳子的长度记为 k[0],k[1]...k[m - 1] 。请问 k[0]_k[1]_...\*k[m - 1] 可能的最大乘积是多少？例如，当绳子的长度是 8 时，我们把它剪成长度分别为 2、3、3 的三段，此时得到的最大乘积是 18。

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

> 和剪绳子 I 的区别在于 n 的取值从 58 增大到 1000， 考虑大数问题 -》 加个取模即可

```java
class Solution {
    public int cuttingRope(int n) {
        if (n == 2) {
            return 1 * 1; 
        }
        if (n == 3) {
            return 1 * 2;
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

## SA48 最长不含重复字符的子字符串

我们可以使用哈希表记录每个字符的 index，然后尽量向右移动尾指针来拓展窗口，并更新窗口的最大长度。如果尾指针指向的元素重复，则将头指针直接移动到窗口中重复元素的右侧。

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

## SA60 n 个骰子的点数 problem

[python 声明二维数组的坑](https://www.cnblogs.com/PythonLearn/p/7795552.html)

```python
>>> dp = [[1]*3]*3
>>> dp
[[1, 1, 1], [1, 1, 1], [1, 1, 1]]
>>> dp[0][0] = 2
>>> dp
[[2, 1, 1], [2, 1, 1], [2, 1, 1]]
```

matrix = [array] \* n 操作中，只是创建 n 个指向 array 的引用，所以一旦 array 改变，matrix 中 3 个 list 也会随之改变。

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


## 最长公共子序列

longestCommonSubsequence

```java
class Solution {
    public int longestCommonSubsequence(String text1, String text2) {
        int len1 = text1.length();
        int len2 = text2.length();
        int[][] dp = new int[len1 + 1][len2 + 1];
        for (int i = 1; i <= len1; ++i) {
            for (int j = 1; j <= len2; ++j) {
                if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        return dp[len1][len2];
    }
}
```

## 32. 最长有效括号

给你一个只包含 '('  和 ')'  的字符串，找出最长有效（格式正确且连续）括号子串的长度。

```
示例 1：
输入：s = "(()"
输出：2
```

```
示例 2：
输入：s = ")()())"
输出：4
```

```
示例 3：
输入：s = ""
输出：0
```

```java
public class Solution {
    public int longestValidParentheses(String s) {
        int maxRes = 0;
        int[] dp = new int[s.length()];

        for(int i = 1; i < s.length(); i++) {
            if(s.charAt(i) == ')') {
                if(s.charAt(i-1) == '(') {
                    dp[i] = (i>=2 ? dp[i-2] : 0) + 2;
                } else if(i-dp[i-1] > 0 && s.charAt(i-dp[i-1]-1) == '(') {
                    dp[i] = dp[i-1] + ((i-dp[i-1]) >= 2 ? dp[i - dp[i-1] -2] : 0) + 2;
                }
                maxRes = Math.max(maxRes, dp[i]);
            }
        }
        return maxRes;
    }
}

```

## 322. 零钱兑换

给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回  -1。

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

## SA11 旋转数组的最小数字 repeat
```java
class Solution {
    public int minArray(int[] numbers) {
        int len = numbers.length;
        int low = 0;
        int high = len - 1;

        while(low <= high){
            int mid = low + (high - low) / 2;

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

        while(low < high){
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


## SA57 和为 s 的连续正数序列

> 此题着重 Java 处理 List 转换二位数组

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

## SA57 和为 s 的两个数字

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


## 打家劫舍

```java
class Solution {
    public int rob(int[] nums) {
        if(nums == null) {
            return 0;
        }
        if(nums.length == 1) {
            return nums[0];
        }

        int[] dp = new int[nums.length];
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);

        for(int i = 2; i < nums.length; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2]+ nums[i]);
        }

        return dp[nums.length - 1];
    }
}
```

## 打家劫舍 II

```py
class Solution(object):
    def rob(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        l = len(nums)
        if l == 0:
            return 0
        if l == 1:
            return nums[0]
        if l == 2:
            return max(nums[0], nums[1])


        two = nums[0]
        one = max(nums[0], nums[1])

        for i in range(2, l-1):
            cur = max(two+nums[i], one)
            two = one
            one = cur

        two_head = nums[1]
        one_head = max(nums[1], nums[2])

        for i in range(3, l):
            cur = max(two_head+nums[i], one_head)
            two_head = one_head
            one_head = cur

        return max(one, one_head)
```

## 打家劫舍 III

```py
class Solution(object):
    def rob(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        res = self.dfs(root)
        return max(res[0], res[1])

    def dfs(self, node):
        res = [0 for _ in range(2)]

        if not node:
            return res

        left = self.dfs(node.left)
        right = self.dfs(node.right)

        res[0] = max(left[0], left[1]) + max(right[0], right[1])
        res[1] = left[0] + right[0] + node.val

        return res
```

## 接雨水

```java
class Solution {
    public int trap(int[] height) {

        int len = height.length;
        int vol = 0;

        if(len == 0){
            return 0;
        }

        int[] maxLeft = new int[len];
        int[] maxRight = new int[len];

        for(int i = 1; i < len; i++){
            maxLeft[i] = Math.max(maxLeft[i-1], height[i-1]);
        }

        for(int i = len - 2; i >= 0; i--){
            maxRight[i] = Math.max(maxRight[i+1], height[i+1]);
        }

        for(int i = 1; i < len - 1; i++){
            int min = Math.min(maxLeft[i], maxRight[i]);

            if(height[i] < min){
                vol += min - height[i];
            }
        }

        return vol;
    }
}
```

## 浮点数的平方根 

保留小数

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

## 11. 盛最多水的容器

给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点  (i, ai) 。在坐标内画 n 条垂直线，垂直线 i  的两个端点分别为  (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与  x  轴共同构成的容器可以容纳最多的水。

```
示例 1：
输入：[1,8,6,2,5,4,8,3,7]
输出：49
解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
```

> 移动指针：相对高的一边不动，矮的移动以寻求更大可能

```java
class Solution {
    public int maxArea(int[] height) {
        int low = 0, high = height.length - 1;
        int res = 0;
        int tempVol = 0;

        while(low < high) {
            tempVol = Math.min(height[low], height[high]) * (high - low);
            res = Math.max(res, tempVol);

            if(height[low] <= height[high]) {
                low++;
            } else {
                high--;
            }
        }

        return res;
    }
}
```

## 15. 三数之和

给你一个包含 n 个整数的数组  nums，判断  nums  中是否存在三个元素 a，b，c ，使得  a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

```
示例 1：
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
```

1. 当 nums[k] > 0 时直接 break 跳出：因为 nums[j] >= nums[i] >= nums[k] > 0，即 33 个数字都大于 00 ，在此固定指针 k 之后不可能再找到结果了。

2. 当 k > 0 且 nums[k] == nums[k - 1]时即跳过此元素 nums[k]：因为已经将 nums[k - 1] 的所有组合加入到结果中，本次双指针搜索只会得到重复组合。

3. i，j 分设在数组索引 (k, len(nums))(k,len(nums)) 两端，当 i < j 时循环计算 s = nums[k] + nums[i] + nums[j]，并按照以下规则执行双指针移动：

- 当 s < 0 时，i += 1 并跳过所有重复的 nums[i]；
- 当 s > 0 时，j -= 1 并跳过所有重复的 nums[j]；
- 当 s == 0 时，记录组合[k, i, j]至 res，执行 i += 1 和 j -= 1 并跳过所有重复的 nums[i]和 nums[j]，防止记录到重复组合。

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
            }// 跳过可能导致重复的解

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

## 15. 三数之和

给你一个包含 n 个整数的数组  nums，判断  nums  中是否存在三个元素 a，b，c ，使得  a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

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

## 560. 和为 K 的子数组

```java
class Solution {
    public int subArraySum(int[] nums, int k) {

        int len = nums.length;

        Map<Integer, Integer> map = new HashMap<>();

        int pre = 0;
        int count = 0;

        map.put(0, 1);

        for(int i = 0; i < len; i++){
            pre += nums[i];

            count += map.getOrDefault(pre - k, 0);

            map.put(pre, map.getOrDefault(pre, 0) + 1);
        }

        return count;
    }
}
```

# 回溯, Search

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
```java
/**
Java使用substring而非idx方法，更好记
1. 双重遍历，对每个char执行canFind
2. canFind:
    - 成功跳出: word完成匹配
    - 失败跳出：超边界(在递归中超边界，第一次调用canFind不会超)
    - 失败跳出：word匹配失败
    - 递归：获得新的str，当前position四向递归(可优化：少探查一个方向，即来路方向，需要调用时多传一个方向)
 */
class Solution {
    char[][] board;
    int rows;
    int cols;

    public boolean exist(char[][] board, String word) {
        if (null == word) {
            return true;
        }

        if (null == board || null == board[0] || board.length == 0 || board[0].length == 0) {
            return false;
        }

        this.board = board;
        this.rows = board.length;
        this.cols = board[0].length;

        for (int i = 0; i < this.rows; i++) {
            for (int j = 0; j < this.cols; j++) {
                if (canFind(i, j, word)) {
                    return true;
                }
            }
        }

        return false;
    }

    private boolean canFind(int row, int col, String word) {
        // reach the tail of the word, must before bound check
        if (word.equals("")) {
            return true;
        }
        // out of bound (for recursion call)
        if (row < 0 || row >= this.rows || col < 0 || col >= this.cols ) {
            return false;
        }
        // char not match
        if (word.charAt(0) != this.board[row][col]) {
            return false;
        }

        char holder = this.board[row][col];
        this.board[row][col] = '$'; // some char can occupy
        String newWord = word.substring(1);
        boolean res = canFind(row + 1, col, newWord) ||
            canFind(row, col + 1, newWord) ||
            canFind(row - 1, col, newWord) ||
            canFind(row, col - 1, newWord);

        if (res) {
            return true;
        } else {
            this.board[row][col] = holder;
            return false;
        }
    }
}
```

```py
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
            
            board[row][col] = 'occupied'
            new_str = s[1:] # py的语法糖，可以
            res = search(row+1, col, new_str) or search(row, col+1, new_str) \
                or search(row-1, col, new_str) or search(row, col-1, new_str)

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

## 1. 两数之和

给定一个整数数组 nums  和一个整数目标值 target，请你在该数组中找出 和为目标值 的那   两个   整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

你可以按任意顺序返回答案。

```
示例 1：
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

```
示例 2：
输入：nums = [3,2,4], target = 6
输出：[1,2]
```

```
示例 3：
输入：nums = [3,3], target = 6
输出：[0,1]
```

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> hashTable = new HashMap<>();
        for(int i = 0; i < nums.length; i++) {
            if(hashTable.containsKey(target - nums[i])) {
                return new int[] {hashTable.get(target - nums[i], i)};
            }
            hashTable.put(nums[i], i);
        }
        return new int[0];
    }
}
```


## 17. 电话号码的字母组合

给定一个仅包含数字  2-9  的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

```
示例:
输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
```

```java
class Solution {
    String[] letterMap = {"abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"};
    List<String> res = new ArrayList<>();

    public List<String> letterCombinations(String digits) {
        if(digits == null || digits.length() == 0) {
            return new ArrayList<>();
        }
        this.recur(digits, new StringBuilder(), 0);
        return res;
    }

    private void recur(String str, StringBuilder letter, int index) {
        if(index == str.length()) {
            res.add(letter.toString());
            return;
        } // Jump out

        char c = str.charAt(index);
        int pos = c - '2';
        String mapString = letterMap[pos];

        for(int i = 0; i < mapString.length(); i++) {
            letter.append(mapString.charAt(i));

            this.recur(str, letter, index + 1);
            letter.deleteCharAt(letter.length()-1);
        }
    }
}
```

## 22. 括号生成

数字 n  代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

```
示例 1：
输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
```

- 当前左右括号都有大于 0 个可以使用的时候，才产生分支；
- 产生左分支的时候，只看当前是否还有左括号可以使用；
- 产生右分支的时候，还受到左分支的限制，右边剩余可以使用的括号数量一定得在严格大于左边剩余的数量的时候，才可以产生分支；
- 在左边和右边剩余的括号数都等于 0 的时候结算。

```java
public class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> res = new ArrayList<>();
        if(n == 0) {
            return res;
        }

        this.dfs(new StringBuilder(), n, n, res);
        return res;
    }

    private void dfs(StringBuilder curStr, int left, int right, List<String> res) {
        if(left == 0 && right == 0) {
            res.add(curStr.toString());
            return;
        }

        if(left > right) {
            return;
        }

        if(left > 0) {
            this.dfs(curStr.append("("), left - 1, right, res);
        }

        if(right > 0) {
            this.dfs(curStr.append(")"), left, right - 1, res);
        }
    }
}
```


## 127. 单词接龙

字典  wordList 中从单词 beginWord  和 endWord 的 转换序列 是一个按下述规格形成的序列：

序列中第一个单词是 beginWord 。
序列中最后一个单词是 endWord 。
每次转换只能改变一个字母。
转换过程中的中间单词必须是字典  wordList 中的单词。
给你两个单词 beginWord  和 endWord 和一个字典 wordList ，找到从  beginWord 到  endWord 的最短转换序列中的单词数目。如果不存在这样的转换序列，返回 0。

```
示例 1：
输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
输出：5
解释：一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog", 返回它的长度 5。
```

```
示例 2：
输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
输出：0
解释：endWord "cog" 不在字典中，所以无法进行转换。
```

```java
public class Solution {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        Set<String> wordSet = new HashSet<>(wordList);
        if(wordSet.size() == 0 || !wordSet.contains(endWord)) {
            return 0;
        }
        wordSet.remove(beginWord);

        LinkedList<String> queue = new LinkedList<>();
        queue.add(beginWord);
        HashSet<String> visited = new HashSet<>();
        visited.add(beginWord);

        // Start BFS
        int step = 1;
        while(!queue.isEmpty()) {
            int currentSize = queue.size();
            for(int i = 0; i < currentSize; i++) {
                // 依次遍历当前队列中的单词
                String currentWord = queue.remove(0);

                // 如果 currentWord 能够修改 1 个字符与 endWord 相同，则返回 step + 1
                if(changeOneWord(currentWord, endWord, queue, visited, wordSet)) {
                    return step + 1;
                }
            }
            step++;
        }
        return 0;
    }

    public boolean changeOneWord(String currentWord, String endWord, Queue<String> queue, Set<String> visited, Set<String> wordSet) {
        char[] charArray = currentWord.toCharArray();
        for(int i = 0; i < endWord.length(); i++) {
            char originChar = charArray[i];
            for(char k = 'a'; k <= 'z'; k++) {
                if(k == originChar) {
                    continue;
                }
                charArray[i] = k;
                String nextWord = String.valueOf(charArray);
                if(wordSet.contains(nextWord)) {
                    if(nextWord.equals(endWord)) {
                        return true;
                    }
                    if(!visited.contains(nextWord)) {
                        queue.add(nextWord);
                        visited.add(nextWord);
                    }
                }
            }
            // recovery
            charArray[i] = originChar;
        }
        return false;
    }
}
```

# String

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


## SA58 翻转单词顺序

String 的 substring 和 join 方法

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

# Digit

- `&`: 按位与运算符：参与运算的两个值,如果两个相应位都为 1,则该位的结果为 1,否则为 0 (a & b) 输出结果 12 ，二进制解释： 0000 1100
- `|`: 按位或运算符：只要对应的二个二进位有一个为 1 时，结果位就为 1。 (a | b) 输出结果 61 ，二进制解释： 0011 1101
- `^`: 按位异或运算符：当两对应的二进位相异时，结果为 1 (a ^ b) 输出结果 49 ，二进制解释： 0011 0001
- `~`: 按位取反运算符：对数据的每个二进制位取反,即把 1 变为 0,把 0 变为 1 。~x 类似于 -x-1 (~a ) 输出结果 -61 ，二进制解释： 1100 0011，在一个有符号二进制数的补码形式。
- `<<`: 左移动运算符：运算数的各二进位全部左移若干位，由 << 右边的数字指定了移动的位数，高位丢弃，低位补 0。 a << 2 输出结果 240 ，二进制解释： 1111 0000
- `>>`: 右移动运算符：把">>"左边的运算数的各二进位全部右移若干位，>> 右边的数字指定了移动的位数

[异或的使用](https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/solution/zhi-chu-xian-yi-ci-de-shu-xi-lie-wei-yun-suan-by-a/)

异或的性质
两个数字异或的结果 a^b 是将 a 和 b 的二进制每一位进行运算，得出的数字。 运算的逻辑是
如果同一位的数字相同则为 0，不同则为 1

异或的规律

- 任何数和本身异或则为 0

- 任何数和 0 异或是 本身

- 异或满足交换律。 即 a ^ b ^ c ，等价于 a ^ c ^ b

## Java 的 >>, >>>

`>>`是算术右移，`>>>`是逻辑右移。

在算术移位中，将扩展符号位以保留数字的符号性。

例如：用 8 位表示的-2 将是 11111110（因为最高有效位的权重为负）。使用算术移位将其右移一位，您将得到 11111111-1。但是，逻辑上的右移并不关心该值是否可能表示一个带符号的数字。它只是将所有内容移至右侧，并从左侧填充 0。使用逻辑移位将-2 右移一位将得到 01111111。



## SA03 数组中重复的数字

### hash 思路，会有空间消耗

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

## SA16 数值的整数次方

1. 定义递归的 pow
   1. n == 0 跳出条件
   2. n 分奇偶递归
2. 处理 N 为正

```java
class Solution {
    public double myPow(double x, int n) {
        if (n == 0) {
            return 1;
        }

        if (n < 0) {
            n *= -1;
            x = 1/x;
        }

        return pow(x, n);
    }

    public double pow(double x, int n) {
        if (n == 0) {
            return 1;
        }

        double half = pow(x, n / 2);

        if ((n & 1) == 1) {
            return half * half * x;
        } else {
            return half * half;
        }
    }
}
```

## SA17 打印从 1 到最大的 n 位数

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


## SA43 1 ～ n 整数中 1 出现的次数

low 和 high 都是多位数，cur 只算那个数位

如 12345678， cur 是 4，则 low 是 5678， high 是 123.

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

## SA44 数字序列中某一位的数字

数字以 0123456789101112131415…的格式序列化到一个字符序列中。在这个序列中，第 5 位（从下标 0 开始计数）是 5，第 13 位是 1，第 19 位是 4，等等。

请写一个函数，求任意第 n 位对应的数字。

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

一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是 O(n)，空间复杂度是 O(1)。

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
因此，统计所有数字的各二进制位中 1 的出现次数，并对 3 求余（把出现 3 次的消除），结果则为只出现一次的数字

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

# Sort related


## SA40 最小的 k 个数

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

# 特殊

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

0,1,,n-1 这 n 个数字排成一个圆圈，从数字 0 开始，每次从这个圆圈里删除第 m 个数字。求出这个圆圈里剩下的最后一个数字。

例如，0、1、2、3、4 这 5 个数字组成一个圆圈，从数字 0 开始每次删除第 3 个数字，则删除的前 4 个数字依次是 2、0、4、1，因此最后剩下的数字是 3。

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
上三角再计算每一行后一段，注意边界是 len-2， 因为下三角从倒数第二行开始，所以相应调整 index 为 i+1，即 a[len-1] 到 a[1]

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

## SA04. 二维数组中的查找

在一个 n \* m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

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

> 从左下角或右上角开始都可以

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

```py
class Solution(object):
    def findNumberIn2DArray(self, matrix, target):
        """
        :type matrix: List[List[int]]
        :type target: int
        :rtype: bool
        """

        if not matrix or not matrix[0]:
            return False

        rowNum = len(matrix)
        colNum = len(matrix[0])

        row = rowNum - 1
        col = 0;

        while row >= 0 and col < colNum :
            if matrix[row][col] == target:
                return True
            elif target < matrix[row][col]:
                row -= 1
            else:
                col += 1
        
        return False
```


## SA05. 替换空格

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

```py
class Solution(object):
    def replaceSpace(self, s):
        """
        :type s: str
        :rtype: str
        """
        if not s:
            return None 

        res = ""
        for c in s:
            if c == " ":
                res += "%20"
            else:
                res += c

        return res

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

