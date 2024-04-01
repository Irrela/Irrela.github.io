---
title: Leetcode Daily Question
categories: Leetcode
tags:
  - Leetcode
---

- [双指针](#双指针)
    - [Maximum Score of a Good Subarray](#maximum-score-of-a-good-subarray)
- [队列，栈](#队列栈)
    - [Faulty Keyboard](#faulty-keyboard)
    - [Verify Preorder Serialization of a Binary Tree](#verify-preorder-serialization-of-a-binary-tree)
    - [232. Implement Queue using Stacks](#232-implement-queue-using-stacks)
    - [225. Implement Stack using Queues](#225-implement-stack-using-queues)
- [链表](#链表)
  - [Medium](#medium)
    - [Remove Nodes From Linked List](#remove-nodes-from-linked-list)
    - [Insert Greatest Common Divisors in Linked List](#insert-greatest-common-divisors-in-linked-list)
- [哈希](#哈希)
    - [Frequency Tracker](#frequency-tracker)
- [前后缀](#前后缀)
    - [Minimum Sum of Mountain Triplets I](#minimum-sum-of-mountain-triplets-i)
- [单调](#单调)
    - [Maximum Score of a Good Subarray](#maximum-score-of-a-good-subarray-1)
    - [Remove Nodes From Linked List](#remove-nodes-from-linked-list-1)
    - [Beautiful Towers I](#beautiful-towers-i)
- [递归 Recursion](#递归-recursion)
    - [](#)
    - [Construct Binary Tree from Preorder and Inorder Traversal](#construct-binary-tree-from-preorder-and-inorder-traversal)
    - [Construct Binary Tree from Inorder and Postorder Traversal](#construct-binary-tree-from-inorder-and-postorder-traversal)
    - [Construct Binary Tree from Preorder and Postorder Traversal](#construct-binary-tree-from-preorder-and-postorder-traversal)
- [DFS](#dfs)
    - [Cousins in Binary Tree](#cousins-in-binary-tree)
    - [Lowest Common Ancestor of a Binary Tree](#lowest-common-ancestor-of-a-binary-tree)
- [BFS](#bfs)
    - [Minimum Height Trees](#minimum-height-trees)
    - [Cousins in Binary Tree II](#cousins-in-binary-tree-ii)
- [图算法](#图算法)
    - [三种算法](#三种算法)
    - [2642. Design Graph With Shortest Path Calculator](#2642-design-graph-with-shortest-path-calculator)
    - [1976. Number of Ways to Arrive at Destination](#1976-number-of-ways-to-arrive-at-destination)
- [贪心](#贪心)
    - [Minimum Number of Coins to be Added](#minimum-number-of-coins-to-be-added)
    - [](#-1)
    - [Construct String With Repeat Limit](#construct-string-with-repeat-limit)
    - [1599. Maximum Profit of Operating a Centennial Wheel](#1599-maximum-profit-of-operating-a-centennial-wheel)
    - [Maximum Swap](#maximum-swap)
    - [stoneGameVI](#stonegamevi)
    - [魔塔游戏](#魔塔游戏)
- [动态规划](#动态规划)
    - [Coin Change II](#coin-change-ii)
    - [Maximum Number of Moves in a Grid](#maximum-number-of-moves-in-a-grid)
    - [Extra Characters in a String](#extra-characters-in-a-string)
    - [Minimum Additions to Make Valid String](#minimum-additions-to-make-valid-string)
    - [Minimum Time to Make Array Sum At Most x](#minimum-time-to-make-array-sum-at-most-x)
    - [Freedom Trail](#freedom-trail)
    - [stoneGameVII](#stonegamevii)
    - [Jump Game VI](#jump-game-vi)
- [二分法](#二分法)
    - [Split Array Largest Sum](#split-array-largest-sum)
    - [Maximum Number of Alloys](#maximum-number-of-alloys)
- [模运算](#模运算)
    - [Find the Divisibility Array of a String](#find-the-divisibility-array-of-a-string)
- [位运算](#位运算)
    - [Minimum Non-Zero Product of the Array Elements (快速幂)](#minimum-non-zero-product-of-the-array-elements-快速幂)
    - [Maximum Rows Covered by Columns](#maximum-rows-covered-by-columns)
    - [Sum of Values at Indices With K Set Bits](#sum-of-values-at-indices-with-k-set-bits)
- [循环节](#循环节)
  - [Count The Repetitions](#count-the-repetitions)
- [数学](#数学)
    - [(区间合并 \& 排序) Count Ways to Group Overlapping Ranges](#区间合并--排序-count-ways-to-group-overlapping-ranges)
- [并查集](#并查集)
    - [Minimum Edge Weight Equilibrium Queries in a Tree](#minimum-edge-weight-equilibrium-queries-in-a-tree)
    - [2368. Reachable Nodes With Restrictions](#2368-reachable-nodes-with-restrictions)
- [Pending](#pending)
    - [Removing Minimum Number of Magic Beans](#removing-minimum-number-of-magic-beans)
    - [Water and Jug Problem](#water-and-jug-problem)
    - [Minimum Seconds to Equalize a Circular Array](#minimum-seconds-to-equalize-a-circular-array)

>> ![图解](https://pic.leetcode-cn.com/1644881496-veNnxl-2171.drawio%20(2).png)


## 双指针
#### Maximum Score of a Good Subarray
```cpp
/**
 * 1793. Maximum Score of a Good Subarray
 * 问题描述：
 * 给定一个整数数组 nums（下标从 0 开始）和一个整数 k。定义子数组 (i, j) 的得分为 min(nums[i], nums[i+1], ..., nums[j]) * (j - i + 1)。一个良好的子数组是一个满足 i <= k <= j 的子数组。返回一个良好子数组的最大得分。
 * 
 * 思路：
 * 我们需要找到以 k 为中心的最大良好子数组。从 k 开始向左右两侧扩展，找到最小高度的边界，并计算以这个边界为范围的得分。我们可以使用双指针法来实现这个过程，一个指针向左，一个指针向右。每次移动指针时，我们都需要更新当前最小高度，并计算以当前边界为范围的得分。最终得到的最大得分即为答案。
 * 
 */

class Solution {
public:
    /**
     * 返回良好子数组的最大得分
     * 
     * @param nums 整数数组
     * @param k 中心索引
     * @return 最大得分
     */
    int maximumScore(vector<int>& nums, int k) {
        int len = nums.size();
        int ret = nums[k], min_h = nums[k];
        int i = k, j = k;

        // 向左右两侧扩展，找到最大良好子数组的范围
        for (int it = 0; it < len - 1; it++) {
            if (j == len - 1 || (i > 0 && nums[i - 1] > nums[j + 1])) {
                // 向左移动边界
                i--;
                min_h = min(min_h, nums[i]);
            } else {
                // 向右移动边界
                j++;
                min_h = min(min_h, nums[j]);
            }
            // 更新最大得分
            ret = max(ret, min_h * (j - i + 1));
        }

        return ret;
    }
};
```

## 队列，栈
#### Faulty Keyboard

> 不用stack还有一种解法，当遇到 i 时，把当前 string做个翻转，比如用char[] 存然后首尾swap

```cs
/// <summary>
/// 2810. Faulty Keyboard
/// 问题描述：有一个笔记本键盘有故障，每次输入字符 'i' 时会反转已输入的字符串，其他字符正常输入。给定一个字符串 s，模拟输入这个字符串后，笔记本上显示的最终字符串是什么。
/// 思路：使用两个栈，一个存储正向字符，一个存储反向字符，遇到 'i' 字符时切换栈进行字符反转，最后将两个栈的字符按照正向顺序合并即可。
/// </summary>
public class Solution {
    /// <summary>
    /// 返回笔记本上最终显示的字符串
    /// </summary>
    /// <param name="s">输入字符串</param>
    /// <returns>最终显示的字符串</returns>
    public string FinalString(string s) {
        // 两个栈分别用于存储正向字符和反向字符
        Stack<char> stack1 = new Stack<char>();
        Stack<char> stack2 = new Stack<char>();
        StringBuilder res = new StringBuilder();

        // 记录 'i' 字符出现的次数，用于判断当前是否需要反转字符串
        int flip = 0;

        // 遍历输入字符串
        foreach(char c in s) {
            // 如果字符不是 'i'，则按照正常逻辑压入对应栈中
            if (c != 'i') {
                if (stack2.Count == 0) {
                    stack1.Push(c);
                } else {
                    stack2.Push(c);
                }
            } else { // 如果字符是 'i'，则切换反转状态，并将对应栈中的字符反转
                flip++;
                if (stack2.Count == 0) {
                    while (stack1.Count != 0) {
                        stack2.Push(stack1.Pop());
                    }                    
                } else {
                    while (stack2.Count != 0) {
                        stack1.Push(stack2.Pop());
                    }       
                }
            }
        }

        // 将两个栈中的字符按照正向顺序合并
        while (stack1.Count != 0) {
            res.Insert(0, stack1.Pop());
        }

        while (stack2.Count != 0) {
            res.Insert(0, stack2.Pop());
        }

        // 返回最终的结果字符串
        return res.ToString();
    }
}
```


#### Verify Preorder Serialization of a Binary Tree
```cs
/*
 * 331. Verify Preorder Serialization of a Binary Tree
 * 问题描述：
 * 给定一个字符串 preorder，表示二叉树的先序遍历序列，判断其是否为合法的二叉树序列化。
 * 
 * 思路：
 * 使用栈模拟二叉树的构建过程，遇到连续两个 '#' 且前一个元素不为 '#' 时，将这三个元素替换为一个 '#'，直到无法替换或栈中只剩一个 '#' 为止。
 * 最终判断栈中元素是否只剩一个 '#' 即可。
 * 
 */

public class Solution {
    /// <summary>
    /// 判断给定的字符串是否为合法的二叉树序列化
    /// </summary>
    /// <param name="preorder">二叉树的先序遍历序列</param>
    /// <returns>如果是合法的二叉树序列化，返回 true；否则返回 false。</returns>
    public bool IsValidSerialization(string preorder) {
        LinkedList<string> deque = new LinkedList<string>(); // 使用双向链表模拟栈
        string[] charArray = preorder.Split(','); // 将字符串按逗号分割为字符数组

        foreach (string node in charArray) {
            deque.AddLast(node); // 将字符依次入栈

            // 修正逻辑错误：如果遇到连续两个 '#' 且前一个元素不为 '#'，则将这三个元素替换为一个 '#'
            while (deque.Count >= 3 && deque.Last.Value == "#" && deque.Last.Previous.Value == "#" && deque.Last.Previous.Previous.Value != "#") {
                deque.RemoveLast(); // 移除倒数第三个元素
                deque.RemoveLast(); // 移除倒数第二个元素
                deque.RemoveLast(); // 移除倒数第一个元素
                deque.AddLast("#"); // 将一个 '#' 入栈
            }
        }

        return deque.Count == 1 && deque.Last.Value == "#"; // 判断栈中是否只剩一个 '#'，是则返回 true，否则返回 false
    }
}
```


#### 232. Implement Queue using Stacks
```py
class MyQueue:
    """
    # 问题描述 
    实现一个只使用两个栈来模拟队列的数据结构，支持队列的所有功能（push、peek、pop 和 empty）。

    # 思路 
     - 使用两个栈，一个用来作为入队栈（instack），一个用来作为出队栈（outstack）。
     - push 操作直接将元素压入 instack。
     - pop 和 peek 操作时，如果 outstack 不为空，则直接从 outstack 出栈；如果 outstack 为空，则将 instack 中的所有元素依次弹出并压入 outstack，再进行出栈或查看操作。
     - empty 操作判断两个栈是否都为空。
    """

    def __init__(self):
        """
        初始化 MyQueue 类，创建 instack 和 outstack 两个栈。
        """
        self.instack = collections.deque()
        self.outstack = collections.deque()

    def push(self, x: int) -> None:
        """
        将元素压入队列。
        """
        self.instack.append(x)

    def pop(self) -> int:
        """
        弹出队列的首个元素并返回。
        """
        if not self.outstack:
            # 如果 outstack 为空，则将 instack 中的所有元素依次压入 outstack
            while self.instack:
                self.outstack.append(self.instack.pop())
        # 返回 outstack 的首个元素
        return self.outstack.pop() if self.outstack else None

    def peek(self) -> int:
        """
        返回队列的首个元素。
        """
        if not self.outstack:
            # 如果 outstack 为空，则将 instack 中的所有元素依次压入 outstack
            while self.instack:
                self.outstack.append(self.instack.pop())
        # 返回 outstack 的首个元素（不弹出）
        return self.outstack[-1] if self.outstack else None

    def empty(self) -> bool:
        """
        判断队列是否为空。
        """
        # 判断两个栈是否都为空
        return len(self.instack) == 0 and len(self.outstack) == 0
```


#### 225. Implement Stack using Queues

![图解](https://assets.leetcode-cn.com/solution-static/225/225_fig2.gif)

```py
class MyStack:
    """
    # 问题描述 
    实现一个使用两个队列的后进先出（LIFO）栈。实现 MyStack 类：
    - void push(int x) 将元素 x 压入栈顶。
    - int pop() 移除并返回栈顶元素。
    - int top() 返回栈顶元素。
    - boolean empty() 如果栈是空的，返回 true ；否则，返回 false 。

    # 思路 
     - 使用两个队列模拟栈的操作。
     - push 操作时，先将元素添加到队列中，然后将队列中原有的元素依次出队并入队，使得新添加的元素位于队列的头部，实现栈的后进先出效果。
     - pop、top 操作直接对队列进行相应的操作即可。
    """

    def __init__(self):
        self.queue = collections.deque()

    def push(self, x: int) -> None:
        """
        将元素 x 压入栈顶
        """
        n = len(self.queue)

        self.queue.append(x)

        # 将队列中原有的元素依次出队并入队，使得新添加的元素位于队列的头部
        for _ in range(n):
            self.queue.append(self.queue.popleft())

    def pop(self) -> int:
        """
        移除并返回栈顶元素
        """
        return self.queue.popleft() if self.queue else None

    def top(self) -> int:
        """
        返回栈顶元素
        """
        return self.queue[0] if self.queue else None

    def empty(self) -> bool:
        """
        如果栈是空的，返回 True；否则，返回 False
        """
        return len(self.queue) == 0
```



## 链表
### Medium
#### Remove Nodes From Linked List
```py
class Solution:
    def removeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        """
        2487. Remove Nodes From Linked List
        移除链表中值较大的节点

        # 思路
        1. 翻转链表
        2. next 比 node 小就删掉next（包含了next向后遍历）, 否则node = node.next
        3. 再翻转链表

        Input:  [5,2,13,3,8]
        Output: [13,8]

        """
        # 反转链表
        head = self.reverse(head)
        node = head

        while node.next:
            if node.val > node.next.val:
                # 删除下一个节点
                node.next = node.next.next
            else:
                node = node.next

        # 再次反转链表
        return self.reverse(head)

    def reverse(self, head):
        """
        反转链表

        Parameters:
        - head: ListNode，链表的头结点

        Returns:
        - ListNode，反转后的链表的头结点
        """
        prev = None
        node = head

        while node:
            next = node.next
            node.next = prev
            prev = node
            node = next
        
        return prev

```

#### Insert Greatest Common Divisors in Linked List
```py
class Solution:
    def insertGreatestCommonDivisors(self, head: Optional[ListNode]) -> Optional[ListNode]:
        """
        2807. Insert Greatest Common Divisors in Linked List

        快慢指针做链表插入

        gcd算法
        """
        slow, fast = head, head.next

        while slow and fast:
            gcd_node = self.get_gcd(slow.val, fast.val)
            slow.next = gcd_node
            gcd_node.next = fast

            slow = fast
            fast = fast.next

        return head

    def get_gcd(self, left, right):
        while right != 0:
            left, right = right, left % right

        return ListNode(left)
```

## 哈希
#### Frequency Tracker
```cpp
/**
 * 2671. Frequency Tracker
 * 问题描述：
 * 设计一个数据结构来跟踪其中的值，并回答有关其频率的一些查询。
 * 
 * 
 * 思路：
 * 使用两个哈希表分别记录值出现的次数和各个频率对应的值的个数。
 * 
 */
class FrequencyTracker {
    unordered_map<int, int> cnt; // number 的出现次数
    unordered_map<int, int> freq; // number 的出现次数的出现次数
public:
    FrequencyTracker() {}

    void add(int number) {
        freq[cnt[number]]--; // 去掉一个旧的 cnt[number]
        freq[++cnt[number]]++; // 添加一个新的 cnt[number]
    }

    void deleteOne(int number) {
        if (cnt[number] == 0) return; // 不删除任何内容
        freq[cnt[number]]--; // 去掉一个旧的 cnt[number]
        freq[--cnt[number]]++; // 添加一个新的 cnt[number]
    }

    bool hasFrequency(int frequency) {
        return freq[frequency] != 0; // 至少有一个 number 的出现次数恰好为 frequency
    }
};
```

## 前后缀

#### Minimum Sum of Mountain Triplets I

```cs
using System;
using System.Linq;

public class Solution {
    /// <summary>
    /// 2908. Minimum Sum of Mountain Triplets I
    /// 问题描述：给定一个整数数组 nums，寻找数组中的一个山脉三元组，返回其最小可能的和。如果不存在这样的三元组，则返回 -1。
    /// 思路：遍历两次数组，分别找到每个元素左侧最小值和右侧最小值，然后计算当前元素与左右最小值的和，取最小值即可。
    /// </summary>
    /// <param name="nums">给定的整数数组</param>
    /// <returns>山脉三元组的最小可能和，若不存在则返回 -1</returns>
    public int MinimumSum(int[] nums) {
        int[] sum = nums.ToArray(); // 将数组复制到 sum 中，sum 数组用于记录当前元素及其左侧最小值的和

        int minPre = int.MaxValue; // 初始化左侧最小值为整型最大值

        // 第一次遍历，找到每个元素左侧最小值
        for (int i = 1; i < nums.Length; i++) {
            minPre = Math.Min(minPre, nums[i - 1]); // 更新左侧最小值
            if (nums[i] > minPre) {
                sum[i] += minPre; // 如果当前元素大于左侧最小值，则将左侧最小值加到当前元素上
            }
        }

        int minSum = int.MaxValue; // 初始化最小和为整型最大值
        int minSuffix = int.MaxValue; // 初始化右侧最小值为整型最大值

        // 第二次遍历，找到每个元素右侧最小值，并计算山脉三元组的最小和
        for (int i = nums.Length - 2; i > 0; i--) {
            minSuffix = Math.Min(minSuffix, nums[i + 1]); // 更新右侧最小值

            if (nums[i] > minSuffix && sum[i] != nums[i]) { // 当前元素大于右侧最小值且当前元素与左侧最小值的和不等于当前元素时
                sum[i] += minSuffix; // 将右侧最小值加到当前元素上
                minSum = Math.Min(minSum, sum[i]); // 更新最小和
            }
        }

        if (minSum == int.MaxValue) { // 如果最小和仍为整型最大值，则不存在山脉三元组，返回 -1
            return -1;
        }
        return minSum; // 返回最小和
    }
}

```

## 单调
#### Maximum Score of a Good Subarray
```cpp
/**
 * 1793. Maximum Score of a Good Subarray
 * 问题描述：
 * 给定一个整数数组 nums（下标从0开始）和一个整数 k。
 * 定义子数组 (i, j) 的分数为 min(nums[i], nums[i+1], ..., nums[j]) * (j - i + 1)。
 * 一个好的子数组是指满足 i <= k <= j 的子数组。
 * 返回一个好的子数组的最大可能分数。
 * 
 * 思路：
 * 1. 正向遍历nums，使用单调栈找到每个元素左边第一个比它小的元素的位置，存储在 left 数组中。
 * 2. 反向遍历nums, 使用单调栈找到每个元素右边第一个比它小的元素的位置，存储在 right 数组中。
 * 3. 遍历数组，计算每个元素作为最小值时的分数(即在left[i] 和 right[i] 之间，否则它就不是最小的数)，并更新最大分数。
 * 
 */

class Solution {
public:
    int maximumScore(vector<int>& nums, int k) {
        int len = nums.size();
        vector<int> left(len, -1); // 存储每个元素左边第一个比它小的元素的位置
        deque<int> stack;

        // 使用单调栈找到每个元素左边第一个比它小的元素的位置
        for (int i = 0; i < len; i++) {
            while (!stack.empty() && nums[i] <= nums[stack.back()]) {
                stack.pop_back();
            }
            if (!stack.empty()) {
                left[i] = stack.back();
            }
            stack.push_back(i);
        }

        vector<int> right(len, len); // 存储每个元素右边第一个比它小的元素的位置
        stack.clear();
        // 使用单调栈找到每个元素右边第一个比它小的元素的位置
        for (int i = len - 1; i > -1; i--) {
            int x = nums[i];
            while (!stack.empty() && x <= nums[stack.back()]) {
                stack.pop_back();
            }
            if (!stack.empty()) {
                right[i] = stack.back();
            }
            stack.push_back(i);
        }

        int res = 0;
        // 遍历数组，计算每个元素作为最小值时的分数，并更新最大分数
        // 已经记录了每个元素左右第一个比它小的元素的index，所以对于每个元素nums[i], 在left[i], right[i]区间它是最小的元素。
        for (int i = 0; i < len; i++) {
            if (left[i] < k && k < right[i]) { // 确保区间包含k
                res = max(res, nums[i] * (right[i] - left[i] - 1));
            }
        }
        return res;
    }
};

```

#### Remove Nodes From Linked List
```py
    def removeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        """
        2487. Remove Nodes From Linked List
        移除链表中值较大的节点

        # 思路
        1. 单调栈，小于等于栈顶的压栈，否则将比当前node小的全部出栈，当前node压栈
        2. 依次出栈，并将栈顶的next指向刚出栈的
        3. 返回最后一个出栈的

        # Note
        出栈链接时注意 while len(stack) > 1
        """
        stack = []
        node = head
        
        while node:
            if len(stack) == 0 or node.val <= stack[-1].val:
                stack.append(node)
                node = node.next
                continue
            
            while stack and node.val > stack[-1].val:
                stack.pop()
            stack.append(node)
            node = node.next
        
        while len(stack) > 1:
            popped = stack.pop()
            stack[-1].next = popped

        return stack.pop()
```

#### Beautiful Towers I
```py
"""
2865. Beautiful Towers I
# 问题描述 
给定一个长度为n的数组maxHeights，数组中的元素表示建造n座塔的最大高度。每座塔的高度不能超过对应位置上maxHeights的值。

任务是在坐标轴上建造n座塔，第i座塔的坐标为i，高度为heights[i]。

塔的配置是美丽的，如果满足以下条件：
1 <= heights[i] <= maxHeights[i]
heights是一个山脉数组。
数组heights是山脉数组，如果存在索引i满足：
对于所有0 < j <= i，heights[j - 1] <= heights[j]
对于所有i <= k < n - 1，heights[k + 1] <= heights[k]

要求返回美丽配置的塔的高度之和的最大可能值。

# 思路 
使用单调栈来处理两次遍历：
1. 第一次从左到右遍历，计算每个位置之前的高度和（pres数组）。
2. 第二次从右到左遍历，计算每个位置之后的高度和（afters数组）。
在每个位置i处，计算pres[i] + afters[i] - maxHeights[i]的值，更新最大高度之和。

# Note 
- 单调栈的使用可以帮助我们在一次遍历中找到每个位置的前一个或后一个满足条件的位置。
- 遍历两次数组以分别计算每个位置之前和之后的高度和，然后更新最大高度之和。
"""

from typing import List

class Solution:
    def maximumSumOfHeights(self, maxHeights: List[int]) -> int:
        n = len(maxHeights)
        ret = 0

        pres = [0] * n
        afters = [0] * n

        # 计算每个位置之前的高度和
        mono_stack = []
        for i in range(n):
            while mono_stack and maxHeights[i] < maxHeights[mono_stack[-1]]:
                mono_stack.pop()
            if mono_stack:
                pres[i] = pres[mono_stack[-1]] + (i - mono_stack[-1]) * maxHeights[i]
            else:
                pres[i] = (i + 1) * maxHeights[i]
            mono_stack.append(i)

        # 计算每个位置之后的高度和
        mono_stack = []            
        for i in range(n-1, -1, -1):
            while mono_stack and maxHeights[i] < maxHeights[mono_stack[-1]]:
                mono_stack.pop()
            if mono_stack:
                afters[i] = afters[mono_stack[-1]] + (mono_stack[-1] - i) * maxHeights[i]
            else:
                afters[i] = (n - 1 - i + 1) * maxHeights[i]
            mono_stack.append(i)

            # 更新最大高度之和
            ret = max(ret, pres[i] + afters[i] - maxHeights[i])

        return ret

```

## 递归 Recursion

####
```py
class Solution:
    """
    # 问题描述 
    给定二叉搜索树的根节点和一个由正整数组成的大小为n的数组queries。
    找到大小为n的二维数组answer，其中answer[i] = [mini, maxi]：
    mini是树中小于或等于queries[i]的最大值。如果这样的值不存在，则将-1添加到数组中。
    maxi是树中大于或等于queries[i]的最小值。如果这样的值不存在，则将-1添加到数组中。
    返回数组answer。
    
    # 思路 
     - 中序遍历BST，得到有序Arr
     - 对于每个查询值，在有序数组中执行二分查找
    """

    def closestNodes(self, root: Optional[TreeNode], queries: List[int]) -> List[List[int]]:
        if not root:
            return []

        sorted_arr = []  # 存放树节点值的有序数组
        ret = []  # 存放查询结果的列表

        # 中序遍历
        def dfs(node):
            if not node:
                return
            nonlocal sorted_arr
            dfs(node.left)
            sorted_arr.append(node.val)
            dfs(node.right)

        # 在有序数组中执行二分查找，最后一个小于等于target的index
        def binary_search_less(arr, target):
            lo, hi = 0, len(arr) - 1
            
            while lo <= hi:
                mid = lo + (hi - lo) // 2
                if arr[mid] < target:
                    lo = mid + 1
                elif arr[mid] > target:
                    hi = mid - 1
                else:
                    lo = mid + 1
            return hi if hi >= 0 else -1

        dfs(root)  # 执行深度优先遍历

        # 对于每个查询值，在有序数组中执行二分查找并确定结果
        for target in queries:
            left = binary_search_less(sorted_arr, target)
            if left == -1:  # 如果找不到小于查询值的节点，则结果为-1和第一个节点值
                ret.append([-1, sorted_arr[0]])
                continue

            if target == sorted_arr[left]:  # 如果找到查询值，前后都是该值
                ret.append([target, target])
                continue
            
            # 如果找不到大于的值取-1
            right_val = -1 if left == len(sorted_arr) - 1 else sorted_arr[left + 1]
            # 常规情况： 左右为严格小和严格大
            ret.append([sorted_arr[left], right_val])

        return ret

```

#### Construct Binary Tree from Preorder and Inorder Traversal
```py
"""
105. Construct Binary Tree from Preorder and Inorder Traversal
# 问题描述 
给定两个整数数组 preorder 和 inorder，其中 preorder 是二叉树的前序遍历，inorder 是二叉树的中序遍历。构建并返回该二叉树。

 - preOrder的结构是[curNode, [leftTree...], [rightTree...]]
 - inOrder的结构是[[leftTree...], curNode, [rightTree...]]
 - postOrder的结构是[[leftTree...], [rightTree...], curNode]

# 思路 
 - 建立中序遍历值和index的映射方便根据值查找其中序遍历index
 - 根据前序遍历确定根节点
 - 递归函数构建子树，返回子树根节点

# Note 
 - 前序遍历的第一个节点为根节点
 - recur函数的推出条件非常重要，处理左右子树为空的各种情况
 - 在中序遍历中，根节点左边的节点为左子树，右边的节点为右子树
"""

class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        if len(preorder) == 0:
            return None

        self.preorder = preorder
        self.inorder_map = dict()
        for index, node_val in enumerate(inorder):
            self.inorder_map[node_val] = index

        return self.recur(0, len(preorder) - 1, 0)

        
    def recur(self, start_idx_pre, end_idx_pre, start_idx_in):
        """
        递归构一个子树，返回子树根节点

        @param start_idx_pre: 当前子树在前序遍历中的起始索引
        @param end_idx_pre: 当前子树在前序遍历中的结束索引
        @param start_idx_in: 当前子树在中序遍历中的起始索引
        @return: 构建好的当前子树的根节点
        """

        # 推出条件非常重要！！！， 这样写可以对应左右子树为空的边界情况
        if start_idx_pre > end_idx_pre:
            return None
        
        node_idx_pre = start_idx_pre
        node = TreeNode(self.preorder[node_idx_pre])
        node_idx_in = self.inorder_map[node.val]
        
        left_size = node_idx_in - start_idx_in

        node.left = self.recur(node_idx_pre + 1, node_idx_pre + left_size, start_idx_in)
        node.right = self.recur(node_idx_pre + left_size + 1, end_idx_pre, node_idx_in + 1)

        return node
```

#### Construct Binary Tree from Inorder and Postorder Traversal
```py
"""
106. Construct Binary Tree from Inorder and Postorder Traversal
# 问题描述 
从中序和后序遍历构建二叉树

 - preOrder的结构是[curNode, [leftTree...], [rightTree...]]
 - inOrder的结构是[[leftTree...], curNode, [rightTree...]]
 - postOrder的结构是[[leftTree...], [rightTree...], curNode]

# 思路 
 - 建立中序遍历值和index的映射方便根据值查找其中序遍历index
 - 根据前序遍历确定根节点
 - 递归函数构建子树，返回子树根节点

"""
class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        if len(inorder) == 0:
            return None
        
        self.postorder = postorder
        self.inorder_map = dict()
        for index, val in enumerate(inorder):
            self.inorder_map[val] = index

        return self.recur(len(postorder) - 1, 0, len(postorder) - 1)

    def recur(self, end_pos, start_pos, end_in):
        if start_pos > end_pos:
            return None

        node_pos = end_pos
        node = TreeNode(self.postorder[node_pos])
        node_in = self.inorder_map[node.val]

        right_size = end_in - node_in
        node.left = self.recur(end_pos - right_size - 1, start_pos, node_in - 1)
        node.right = self.recur(end_pos - 1, end_pos - right_size, end_in)

        return node
```

recur 四参数版本，不会有递归超深度问题。
```py
class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        if len(inorder) == 0:
            return None
        
        self.postorder = postorder
        self.inorder_map = dict()
        for index, val in enumerate(inorder):
            self.inorder_map[val] = index

        return self.recur(0, len(postorder) - 1, 0, len(inorder) - 1)

    def recur(self, start_pos, end_pos, start_in, end_in):
        if start_pos > end_pos or start_in > end_in:
            return None

        node_pos = end_pos
        node = TreeNode(self.postorder[node_pos])
        node_in = self.inorder_map[node.val]

        left_size = node_in - start_in
        node.left = self.recur(start_pos, start_pos + left_size - 1, start_in, node_in - 1)
        node.right = self.recur(start_pos + left_size, end_pos - 1, node_in + 1, end_in)

        return node
```


#### Construct Binary Tree from Preorder and Postorder Traversal
```py
class Solution:
    """
    889. Construct Binary Tree from Preorder and Postorder Traversal

    # 问题描述
    给定两个整数数组，preorder 和 postorder，其中preorder是二叉树的先序遍历，postorder是相同树的后序遍历。重构并返回二叉树。

    # 思路 
    - 通过先序遍历序列找到根节点
    - 使用后序遍历序列找到左右子树的分割点
    - 递归地构建左右子树
    """

    def constructFromPrePost(self, preorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        """
        构建二叉树

        Args:
            preorder: 先序遍历序列
            postorder: 后序遍历序列

        Returns:
            重建的二叉树的根节点
        """
        if len(preorder) == 0:
            return None

        self.preorder = preorder
        self.post_map = dict()

        # 构建后序遍历序列中值到索引的映射
        for index, val in enumerate(postorder):
            self.post_map[val] = index

        return self.recur(0, len(preorder)-1, 0, len(postorder)-1)

    def recur(self, start_pre, end_pre, start_post, end_post):
        """
        递归地构建二叉树

        Args:
            start_pre: 先序遍历序列的起始索引
            end_pre: 先序遍历序列的结束索引
            start_post: 后序遍历序列的起始索引
            end_post: 后序遍历序列的结束索引

        Returns:
            重建的二叉树的根节点
        """
        # 如果起始索引大于结束索引，则返回None
        if end_pre < start_pre or end_post < start_post:
            return None        

        # 如果序列中只有一个元素，则创建并返回对应的树节点
        if end_pre == start_pre or end_post == start_post:
            return TreeNode(self.preorder[start_pre])

        # 创建当前节点
        node = TreeNode(self.preorder[start_pre])

        # 计算左子树的大小
        left_pre = start_pre + 1
        if left_pre >= len(self.preorder):
            return node
        left_size = self.post_map[self.preorder[left_pre]] - start_post + 1

        # 递归构建左右子树
        node.left = self.recur(left_pre, left_pre + left_size - 1, start_post, start_post + left_size - 1)
        node.right = self.recur(left_pre + left_size, end_pre, start_post + left_size, end_post - 1)

        return node
```


## DFS
#### Cousins in Binary Tree
```py
"""
993. Cousins in Binary Tree

# 问题描述
给定一棵具有唯一值的二叉树的根节点以及树中两个不同节点的值 x 和 y，如果树中对应于值 x 和 y 的节点是堂兄弟节点，则返回 True；否则，返回 False。
在二叉树中，两个节点是堂兄弟节点是指它们具有相同的深度，但是它们的父节点不同。

# 思路
- 首先，我们需要遍历整棵二叉树来确定给定值 x 和 y 的深度以及它们的父节点。
- 接着，我们可以在遍历的过程中检查节点是否为堂兄弟节点，即它们的深度相同但父节点不同。

# Note
- 在二叉树中，根节点的深度为 0，每个深度为 k 的节点的子节点的深度为 k + 1。
"""

class Solution:
    def isCousins(self, root: Optional[TreeNode], x: int, y: int) -> bool:
        depth_x, depth_y = -1, -1

        def dfs(node: Optional[TreeNode], x: int, y: int, cur_depth: int):
            nonlocal depth_x, depth_y

            if not node:
                return 

            if node.left and node.right:
                if node.left.val == x and node.right.val == y:
                    return False

                if node.right.val == x and node.left.val == y:
                    return False

            if (node.left and node.left.val == x) or (node.right and node.right.val == x):
                depth_x = cur_depth+1

            if (node.left and node.left.val == y) or (node.right and node.right.val == y):
                depth_y = cur_depth+1

            dfs(node.left, x, y, cur_depth+1)
            dfs(node.right, x, y, cur_depth+1)

        dfs(root, x, y, 0)

        if depth_x == -1 or depth_y == -1:
            return False

        return depth_x == depth_y
```

#### Lowest Common Ancestor of a Binary Tree
```py
236. Lowest Common Ancestor of a Binary Tree
# 问题描述 
"""
给定一个二叉树，找到两个给定节点在树中的最低共同祖先（LCA）。

根据维基百科对LCA的定义：“最低共同祖先被定义为树中具有p和q作为后代的最低节点（其中我们允许一个节点是其自身的后代）。”
"""

# 思路 
"""
- 如果当前节点时p或q，返回当前节点（重要，这是递归下层目标节点向上的步骤）
- dfs左右子树结果，如果分别是p和q，则当前节点就是lca
- 如果当前节点只包含一个目标节点，说明最低共同祖先在另一侧，返回另一边的dfs结果
"""

# Note 
"""
- 时间复杂度：O(N)，其中N为二叉树的节点数，因为我们需要遍历整个二叉树。
- 空间复杂度：O(H)，其中H为二叉树的高度，递归调用的栈空间。
"""

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        
        def dfs(node: 'TreeNode'):
            if not node: 
                return None

            if node.val == p.val or node.val == q.val:
                return node

            foundLeft = dfs(node.left)
            foundRight = dfs(node.right)

            if foundLeft and foundRight:
                return node

            return foundLeft if foundLeft else foundRight

        return dfs(root)

```

## BFS
#### Minimum Height Trees
```cpp
/**
 * 310. Minimum Height Trees
 * 问题描述：
 * 给定一个由n个节点标记为0到n-1的树，以及一个由n-1条边组成的数组edges，其中edges[i] = [ai, bi]表示树中节点ai和bi之间有一条无向边。您可以选择树的任何节点作为根。当您选择节点x作为根时，结果树的高度为h。在所有可能的根树中，那些具有最小高度（即min(h)）的树被称为最小高度树（MHTs）。
 * 
 * 思路：
 * 使用拓扑排序的思想，从叶节点开始逐层剥离，最终剩下的节点即为MHT的根节点。
 * 
 */

#include <vector>
#include <deque>

using namespace std;

class Solution {
public:
    vector<int> findMinHeightTrees(int n, vector<vector<int>>& edges) {
        vector<int> res;

        if (n == 1) {
            res.push_back(0);
            return res;
        }

        // 记录每个节点的度
        vector<int> degree(n, 0);
        // 使用邻接表表示图
        vector<vector<int>> map;

        // 初始化邻接表
        for (int i = 0; i < n; ++i) {
            map.push_back(vector<int>());
        }

        // 构建邻接表和度数组
        for (vector<int> edge: edges) {
            degree[edge[0]]++;
            degree[edge[1]]++;
            map.at(edge[0]).push_back(edge[1]);
            map.at(edge[1]).push_back(edge[0]);
        }

        // 用双端队列进行层次遍历
        deque<int> queue;
        // 将叶节点加入队列
        for (int i = 0; i < n; i++) {
            if (degree[i] == 1) queue.push_back(i);
        }

        // 层次遍历
        while (!queue.empty()) {
            res.clear();

            int size = queue.size();
            for (int i = 0; i < size; i++) {
                int cur = queue.front();
                queue.pop_front();
                res.push_back(cur);

                // 更新相邻节点的度，并将度为1的节点加入队列
                vector<int> neigbors = map.at(cur);
                for (int neigbor: neigbors) {
                    degree[neigbor]--;
                    if (degree[neigbor] == 1) {
                        queue.push_back(neigbor);
                    }
                }
            }
        }
        return res;
    }
};
```


#### Cousins in Binary Tree II
```py
class Solution:
    def replaceValueInTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        """
        2641. Cousins in Binary Tree II
        问题描述：
        给定二叉树的根节点，将树中每个节点的值替换为其所有堂兄弟节点值的总和。
        二叉树中的两个节点如果具有相同的深度但不同的父节点，则它们是堂兄弟节点。
        返回修改后的树的根节点。

        注意，节点的深度是从根节点到它的路径中的边数。
        
        思路：
        1. 首先使用层次遍历，计算每个深度上节点值的总和，存储在字典中。
        2. 然后再次进行层次遍历，逐个更新每个节点的值为其所有堂兄弟节点值的总和。
        
        Note：
        这里使用字典存储每个深度的节点值总和，以便后续遍历过程中能够快速获取到堂兄弟节点的值。
        """
        if not root:
            return None

        queue = deque([root])
        depth_sum_map = {0: root.val}
        depth = 0

        # 计算每个深度上节点值的总和
        while queue:
            depth += 1
            depth_size = len(queue)
            depth_sum = 0
            for _ in range(depth_size):
                node = queue.popleft()
                if node.left:
                    queue.append(node.left)
                    depth_sum += node.left.val
                if node.right:
                    queue.append(node.right)
                    depth_sum += node.right.val
            depth_sum_map[depth] = depth_sum

        # 更新每个节点的值为其所有堂兄弟节点值的总和
        queue.append(root)
        while queue:
            depth_size = len(queue)
            for _ in range(depth_size):
                node = queue.popleft()
                left_val = node.left.val if node.left else 0
                right_val = node.right.val if node.right else 0
                if node.left:
                    queue.append(node.left)
                    node.left.val = depth_sum_map[depth + 1] - left_val - right_val
                if node.right:
                    queue.append(node.right)
                    node.right.val = depth_sum_map[depth + 1] - left_val - right_val

        # 更新根节点的值为0
        root.val = 0

        return root
```


## 图算法

#### 三种算法

1. Floyd算法（Floyd-Warshall算法）是一种用于解决图中`所有顶点对`之间最短路径的算法
   - 带权重的有向图或无向图：Floyd算法可以处理带`有负权重边`（但`不含负权重环`）的图，因为它基于动态规划的思想，能够正确处理负权重边。
   - 稠密图：相对于Dijkstra算法和Bellman-Ford算法，Floyd算法更适合处理稠密图，因为它的时间复杂度为O(n^3)，`与图中边的数量无关`。
   - `不需要单源顶点`：与Dijkstra算法和Bellman-Ford算法不同，Floyd算法不需要指定一个起始顶点，它可以同时计算出图中所有顶点对之间的最短路径。


2. Dijkstra算法是一种用于解决带有非负权重边的单源最短路径问题的经典算法
   - 图的`单源最短路径`问题：给定一个加权有向图或加权无向图，以及一个`起始顶点`，Dijkstra算法可以计算出从起始顶点到图中所有其他顶点的最短路径。
   - 非负权重边的图：Dijkstra算法`要求图中的边权重都为非负数`。如果图中存在负权重边，则Dijkstra算法可能无法正确计算出最短路径。
   - 无环图或有向无环图（DAG）：Dijkstra算法可以应用于有向无环图（DAG），因为这种图不存在环，因此不会出现负权重环的情况。
   - 网络路由：Dijkstra算法最初被设计用于计算计算机网络中的路由信息，以确定从一个节点到所有其他节点的最短路径

3. Bellman-Ford算法通常用于解决带有负权重边的单源最短路径问题。
   - 带有负权重边的图：Bellman-Ford算法`可以处理带有负权重边`的加权有向图或加权无向图。
   - `检测负权重环`：除了计算最短路径，Bellman-Ford算法还可以检测图中是否存在负权重环。当算法在执行完所有的边的松弛操作后，如果仍然存在可以继续减小路径长度的情况，那么说明图中存在负权重环。
   - 任意加权有向图或无向图：Bellman-Ford算法没有对图的拓扑结构进行要求，因此它适用于任意形状的图，包括有环、无环、连通或不连通的图。


#### 2642. Design Graph With Shortest Path Calculator
[Dijkstra & Floyd解法](https://leetcode.cn/problems/design-graph-with-shortest-path-calculator/solutions/2229013/dijkstra-suan-fa-mo-ban-pythonjavacgo-by-unmv/?envType=daily-question&envId=2024-03-26)

#### 1976. Number of Ways to Arrive at Destination 
```py
class Solution:
    """
    # 问题描述
    给定一个城市，由n个交叉路口组成，编号从0到n-1，其中一些交叉路口之间有双向道路连接。输入数据保证你可以从任意一个交叉路口到达其他任意一个交叉路口，并且任意两个交叉路口之间最多只有一条道路。

    给定一个整数n和一个二维整数数组roads，其中roads[i] = [ui, vi, timei]表示交叉路口ui和vi之间有一条需要timei分钟的道路。你想知道从交叉路口0到交叉路口n-1以最短时间到达的方式有多少种。

    返回以最短时间到达目的地的方式数。由于答案可能很大，因此请返回它对10^9 + 7取模的结果。

    # 思路 
     - 使用Dijkstra算法计算最短路径长度，并记录路径数。
    """
    def countPaths(self, n: int, roads: List[List[int]]) -> int:
        # 邻接矩阵表示图
        g = [[float('inf') for _ in range(n)] for _ in range(n)]  
        
        # 构建邻接矩阵
        for x, y, d in roads:
            g[x][y] = d
            g[y][x] = d

        # 到达每个点的最短路径长度
        dis = [float('inf')] * n
        dis[0] = 0
        
        # 到达每个点的最短路径数量
        f = [0] * n
        f[0] = 1
        
        # 标记是否已经确定最短路径
        done = [False] * n
        
        while True:
            x = -1
            # 寻找未确定最短路径的点中距离最小的点
            for i, ok in enumerate(done):
                if not ok and (x < 0 or dis[i] < dis[x]):
                    x = i
            if x == n - 1:
                # 已经找到最短路径，返回路径数量
                return f[-1]
            done[x] = True
            
            # 更新邻居节点的最短路径长度和路径数量
            dx = dis[x]
            for y, d in enumerate(g[x]):
                new_dis = dx + d
                if new_dis < dis[y]:
                    dis[y] = new_dis
                    f[y] = f[x]
                elif new_dis == dis[y]:
                    f[y] = (f[y] + f[x]) % 1_000_000_007
```


## 贪心

#### Minimum Number of Coins to be Added
```cs
using System;

public class Solution {
    /// <summary>
    /// 2952. Minimum Number of Coins to be Added
    /// 计算需要添加的最小硬币数量
    /// </summary>
    /// <param name="coins">提供的硬币值数组</param>
    /// <param name="target">目标值</param>
    /// <returns>需要添加的最小硬币数量</returns>
    public int MinimumAddedCoins(int[] coins, int target) {
        // 对硬币值数组进行排序
        Array.Sort(coins);
        int res = 0;
        int x = 1;

        int len = coins.Length, index = 0;

        // 逐步增加x的值直到达到目标值
        while (x <= target) {
            if (index < len && coins[index] <= x) {
                // 如果当前硬币值小于等于x，则将该硬币加入到x中
                x += coins[index];
                index++;
            }
            else {
                // 否则，将x乘以2，并增加需要添加的硬币数量
                x *= 2;
                res++;
            }
        }
        return res;
    }
}
```

#### 
```py
class Solution:
    """
    # 问题描述 
    给定一个整数 n，表示由节点编号为 1 到 n 的节点组成的完全二叉树。树的根是节点 1，树中的每个节点 i 都有两个子节点，其中左子节点是节点 2*i，右子节点是 2*i+1。
    树中的每个节点都有一个代价，由给定的大小为 n 的整数数组 cost 表示，其中 cost[i] 表示节点 i+1 的代价。你可以任意次数地将任意节点的代价增加 1。

    返回使得从根节点到每个叶子节点的路径的代价相等所需的最小增量数。

    注意：
    - 完全二叉树是一棵每个节点（除了叶子节点）都有两个子节点的树。
    - 路径的代价是路径上各节点代价之和。
    """

    def minIncrements(self, n: int, cost: List[int]) -> int:
        """
        计算最小增量数

        # 思路 
        - 从叶节点开始，比较每组兄弟节点，差值就是必须要要操作的
        - 操作完后将大的那个值加到父节点的cost上
        - 同样的方式处理父节点那一层，循环向上
        """

        start = (n + 1) // 2  # 从中间节点开始
        ret = 0  # 最小增量数

        # 从下向上，开始向上合并节点
        while start >= 2:
            # 遍历当前层的节点
            for i in range(start, n, 2):
                # 计算兄弟节点的代价差
                diff = abs(cost[i - 1] - cost[i])
                ret += diff  # 累加到最小增量数中

                # 找出较大的代价
                bigger = max(cost[i - 1], cost[i])

                # 将较大的代价累加到父节点上
                cost[i // 2 - 1] += bigger

            # 缩小范围到上一层的中间节点
            start //= 2
            n //= 2

        return ret
```

#### Construct String With Repeat Limit
```py
"""
2182. Construct String With Repeat Limit
# 问题描述 
给定一个字符串 s 和一个整数 repeatLimit。构建一个新字符串 repeatLimitedString，使用字符串 s 的字符，以使相同字母不会连续出现超过 repeatLimit 次。不需要使用字符串 s 中的所有字符。

返回 lexicographically largest 的 repeatLimitedString。

# 思路 
1. 首先，统计字符串 s 中每个字母的出现次数，使用数组 map 来表示，其中 map[i] 表示字母 'a' + i 的出现次数。
2. 从字母 'z' 开始向字母 'a' 遍历，构建结果字符串 ret。
3. 对于当前字母 i，首先尽可能地添加连续 repeatLimit 次当前字母到 ret 中，同时更新 map[i] 和 repeat 变量。
4. 如果 map[i] 还有剩余次数，说明当前字母还可以继续添加，但是需要在添加之前找到下一个可用的字母 j，且 j 的剩余次数 map[j] 大于 0。将字母 j 添加到 ret 中，同时更新 map[j] 和 repeat 变量，然后继续添加字母 i。
5. 重复步骤3和4，直到所有字母都被处理完。

# Note 
- 字母的顺序是按照字母表的降序进行处理，因为要构建 lexicographically largest 的字符串。
- 使用 map 数组记录字母出现次数，方便查找和更新。
"""

class Solution:
    def repeatLimitedString(self, s: str, repeatLimit: int) -> str:
        # 统计每个字母的出现次数
        map = [0] * 26

        for char in s:
            offset = ord(char) - ord('a')
            map[offset] += 1

        ret = ""
        # 从字母 'z' 开始向字母 'a' 遍历
        for i in range(25, -1, -1):
            char = chr(ord('a') + i)
            repeat = repeatLimit
            # 尽可能地添加连续 repeatLimit 次当前字母
            while map[i] > 0 :
                while map[i] > 0 and repeat > 0:
                    ret += char
                    repeat -= 1
                    map[i] -= 1
                # 寻找下一个可用的字母
                while map[i] > 0:
                    j = i - 1
                    while j >= 0 and map[j] == 0:
                        j -= 1
                    # 如果找不到下一个可用字母，返回结果
                    if j < 0:
                        return ret
                    else:
                        ret += chr(ord("a") + j)
                        map[j] -= 1
                        repeat = repeatLimit
                        break

        return ret
```

#### 1599. Maximum Profit of Operating a Centennial Wheel
```py
class Solution:
    def minOperationsMaxProfit(self, customers: List[int], boardingCost: int, runningCost: int) -> int:
        '''
        # 问题描述
        给定一个公交车的乘客列表，以及上下车的费用，求最小操作次数使得总收益最大

        # 思路
        1. 首先检查无人上车的情况，如果每次行驶成本高于每人上车收益的4倍，则无法盈利，返回-1。
        2. 使用贪心算法，模拟每一次行驶，根据上下车情况更新收益。
        3. 遍历过程中，记录最大收益对应的操作次数。

        # Note
        - 如果无法盈利，返回-1。
        - 操作次数从1开始计算。
        '''

        if runningCost >= boardingCost * 4:
            return -1

        total_operations = len(customers)
        remaining_passengers, profit, max_profit, max_profit_operations = 0, 0, 0, 0

        for i, customer in enumerate(customers):
            remaining_passengers += customer

            # 上车人数大于等于4人，进行整车行驶
            if remaining_passengers >= 4:
                remaining_passengers -= 4
                profit += 4 * boardingCost - runningCost
            # 上车人数小于4人，只运送剩余的人数
            else:
                profit += remaining_passengers * boardingCost - runningCost
                remaining_passengers = 0

            # 更新最大收益及对应的操作次数
            if profit > max_profit:
                max_profit = profit
                max_profit_operations = i + 1

        # 如果还有剩余乘客，继续模拟行驶
        remaining_rounds = math.ceil(remaining_passengers / 4)
        for i in range(remaining_rounds):
            if remaining_passengers >= 4:
                remaining_passengers -= 4
                profit += 4 * boardingCost - runningCost
            else:
                profit += remaining_passengers * boardingCost - runningCost
                remaining_passengers = 0

            # 更新最大收益及对应的操作次数
            if profit > max_profit:
                max_profit = profit
                max_profit_operations = total_operations + i + 1

        return max_profit_operations if max_profit_operations > 0 else -1
```

#### Maximum Swap
```py
"""
670. Maximum Swap
# 问题描述 
给定一个整数 num，最多可以交换两个数字一次，以获取最大的可能值。

返回可以得到的最大值。

# 思路
- 从右往左，保持最大数字的下标max_index，
    - 如果i更大，更新max_index为i
    - 如果不如max_index更大，说明当前i和max_index是一组可能的交换组， 将low，high下标更新为max_index,i

- 遍历完成后，如果low，high还是初始值（可以设为-1），说明num本身就是降序，直接返回num

- 否则交换low，high， 此时low是后置的最靠右的最大数，high是最靠左的小值（不一定是最小值，但一定是最靠左的小于max_index的值，这使交换后num最大）

# Note 
- 将数字转化为列表以便于处理每一位数字。
- 通过从左到右遍历寻找最大数字的方式找到交换位置。
"""

class Solution:
    def maximumSwap(self, num: int) -> int:
        ret = 0
        arr = []
        num_mut = num

        # 将数字拆分为个位数字并存储在列表中
        while num_mut > 0:
            arr.append(num_mut % 10)
            num_mut //= 10

        n = len(arr)

        # 如果只有一个数字，直接返回原始数字
        if n == 1:
            return num

        max_index = 0
        low, high = -1, -1

        # 从左到右遍历数字列表，找到需要交换的位置
        for i in range(n):
            if arr[i] > arr[max_index]:
                max_index = i
            elif arr[i] < arr[max_index]:
                low, high = max_index, i

        # 如果没有找到需要交换的位置，返回原始数字
        if low == -1:
            return num

        # 交换数字
        arr[low], arr[high] = arr[high], arr[low]

        # 重新构造交换后的数字
        base = 1
        for i in range(n):
            ret += arr[i] * base
            base *= 10

        return ret
```

#### stoneGameVI
```py
from typing import List

class Solution:
    def stoneGameVI(self, aliceValues: List[int], bobValues: List[int]) -> int:
        """
        # 问题描述
        Alice 和 Bob 轮流玩游戏，Alice 先手。
        有 n 个石头堆，每位玩家在自己的回合中可以从石头堆中取一个石头，并根据石头的价值获得相应的分数。
        Alice 和 Bob 可能对石头的价值有不同的看法。

        给定两个长度为 n 的整数数组 aliceValues 和 bobValues，其中 aliceValues[i] 和 bobValues[i] 分别表示 Alice 和 Bob 对第 i 个石头的价值。

        胜者是在所有石头都被选取后得分最高的人。如果两位玩家得分相同，则游戏为平局。双方都将以最佳方式进行游戏，并且双方都了解对方的价值。

        确定游戏的结果，并且：
        - 如果 Alice 获胜，返回 1。
        - 如果 Bob 获胜，返回 -1。
        - 如果游戏平局，返回 0。

        # 思路
        -> 最优： 拿走对自己和对对手价值最高的
        -> 直接sum(synthesized[::2]) - sum(bobValues) : 前者包含了bob拿不到的， 减去bob所有的，等于bob拿全部剩下的。
        1. 将 Alice 和 Bob 对应位置的石头价值相加，得到 synthesized 列表。
        2. 将 synthesized 列表按照石头总价值降序排序。
        3. 计算 Alice 得分，即 synthesized 中偶数索引位置的石头总价值之和，减去 Bob 的石头总价值之和。
        4. 判断得分 ret，并返回相应结果。

        # Note
        

        """
        n = len(aliceValues)

        # 合成每个石头的价值
        synthesized = [a + b for a, b in zip(aliceValues, bobValues)]

        # 将合成后的石头按照总价值降序排序
        synthesized.sort(key=lambda p: -p)

        # 计算 Alice 的得分
        ret = sum(synthesized[::2]) - sum(bobValues)

        # 根据得分结果返回相应的值
        if ret == 0:
            return ret
        return 1 if ret > 0 else -1

```

#### 魔塔游戏
```py
from typing import List
import heapq

class Solution:
    def magicTower(self, nums: List[int]) -> int:
        """
        LCP 30. 魔塔游戏
        # 问题描述
        小扣当前位于魔塔游戏第一层，共有 N 个房间，编号为 0 ~ N-1。每个房间的补血道具/怪物对于血量影响记于数组 nums，其中正数表示道具补血数值，即血量增加对应数值；
        负数表示怪物造成伤害值，即血量减少对应数值；0 表示房间对血量无影响。

        小扣初始血量为 1，且无上限。假定小扣原计划按房间编号升序访问所有房间补血/打怪，为保证血量始终为正值，小扣需对房间访问顺序进行调整，每次仅能将一个怪物房间（负数的房间）调整至访问顺序末尾。
        请返回小扣最少需要调整几次，才能顺利访问所有房间。若调整顺序也无法访问完全部房间，请返回 -1。

        # 思路
         - 使用优先队列（最小堆）来保存怪物的血量变化，每次选择最小的怪物，将其放到最后，确保当前血量最小
         - 如果当前血量小于等于 0，说明当前小扣可能无法通过当前房间，需要调整访问顺序
         - 调整的原则是将最小的怪物移到最后，同时更新当前血量
         - 返回调整的次数

        # Note
        - 使用 heapq 来实现最小堆，heappush 和 heappop 分别用于插入和弹出最小元素
        """

        n = len(nums)
        score = 1
        ret = 0
        min_heap = []

        # 如果所有房间的数值和小于 0，则无法访问完全部房间
        if sum(nums) < 0:
            return -1

        for i in range(n):
            # 如果当前房间数值为负数，将其加入最小堆
            if nums[i] < 0:
                heapq.heappush(min_heap, nums[i])

            # 更新当前血量
            score += nums[i]

            # 如果当前血量小于 1，需要调整顺序
            if score < 1:
                # 弹出最小堆中最小的负数，将其加回到数组末尾
                cur_min = heapq.heappop(min_heap)
                score -= cur_min
                nums.append(cur_min)
                n += 1
                ret += 1

        return ret
```

## 动态规划
#### Coin Change II
518. Coin Change II

容易写错成这个版本
```cpp
class Solution {
public:
    int change(int amount, vector<int>& coins) {
        vector<long> dp(amount+1, 0);
        dp[0] = 1;

        // 外层遍历金额，内层遍历coin面值，会存在重复计算
        // 比如dp[3] 会重复计算 1+1+1, 因为dp[2]和dp[1]存在重复，dp[2]中有dp[1]+1的来源
        for (long i = 1; i <= amount; i++) {
            for (int coinValue : coins) {
                if (i - coinValue >= 0) {
                    dp[i] += dp[i - coinValue];
                }
            }
        }

        return dp[amount];
    }
};
```

正确写法：
```cpp
class Solution {
public:
    int change(int amount, vector<int>& coins) {
        vector<long> dp(amount+1, 0);
        dp[0] = 1;

        // 外层遍历coin面值，内层遍历金额
        // 详细可见：https://leetcode.cn/problems/coin-change-ii/solutions/821278/ling-qian-dui-huan-ii-by-leetcode-soluti-f7uh/?envType=daily-question&envId=2024-03-25
        for (int coinValue : coins) {
            for (long i = coinValue; i <= amount; i++) {
                    dp[i] += dp[i - coinValue];
            }
        }

        return dp[amount];
    }
};
```

#### Maximum Number of Moves in a Grid
```cpp
class Solution {
public:
    /**
     * 2684. Maximum Number of Moves in a Grid
     * @brief 计算可以执行的最大移动次数
     * 
     * 问题描述：
     * 给定一个m x n的矩阵grid，其中包含正整数。
     * 从矩阵的第一列的任意单元格开始，你可以按以下方式遍历矩阵：
     * 从单元格(row, col)出发，你可以移动到(row - 1, col + 1)，(row, col + 1)和(row + 1, col + 1)中的任意单元格，
     * 前提是你要移动到的单元格的值严格大于当前单元格的值。
     * 返回你可以执行的最大移动次数。
     * 
     * 思路：
     * 1. 从左往右遍历每一列。
     * 2. 对于每一列，从上往下遍历每个单元格。
     * 3. 对于当前单元格，检查其上方、当前和下方相邻的单元格，确定是否可到达下一列。
     * 4. 如果无法移动到下一列，则将当前单元格的值设为最大值，表示无法到达。
     * 5. 如果当前列无法到达任何单元格，则记录当前列数，表示无法继续移动。
     * 6. 如果所有列都可到达，则返回最后一列的列数。
     * 
     * @param grid 输入的矩阵
     * @return int 可以执行的最大移动次数
     */
    int maxMoves(std::vector<std::vector<int>>& grid) {
        int maxValue = std::numeric_limits<int>::max();
        
        int rows = grid.size();
        if (rows == 0) return 0;
        int cols = grid[0].size();
        if (cols == 0) return 0;        

        int unreachableColumn = -1; // 记录无法到达的最大列数

        // 从左往右遍历每一列
        for (int col = 1; col < cols; col++) {
            // 当前列是否有可到达的单元格
            bool columnReachable = false; 

            // 从上往下遍历每一行
            for (int row = 0; row < rows; row++) {
                // 检查上方、当前和下方相邻的单元格
                bool canMoveToNextColumn = false;
                for (int preRow : {row - 1, row, row + 1}) {
                    if (preRow >= 0 && preRow < rows && grid[row][col] > grid[preRow][col - 1]) {
                        canMoveToNextColumn = true;
                        columnReachable = true; // 当前列有可到达的单元格
                        break;
                    } 
                }

                // 如果无法移动到下一列，则标记当前单元格为 maxValue
                if (!canMoveToNextColumn) {
                    grid[row][col] = maxValue;
                }
            }

            // 如果当前列无法到达任何单元格，则记录当前列数
            if (!columnReachable) {
                unreachableColumn = col - 1;
                break;
            }
        }

        // 如果有无法到达的列，则直接返回最后一个可到达的列数
        if (unreachableColumn != -1) {
            return unreachableColumn;
        }

        return cols - 1; // 所有列都可到达，则返回最后一列的列数
    }
};

```


#### Extra Characters in a String
```py
class Solution:
    def minExtraChar(self, s: str, dictionary: List[str]) -> int:
        """
        # 问题描述
        2707. Extra Characters in a String

        给定字符串 s 和一个字符串字典 dictionary，求通过在字符串 s 中插入最少数量的字符，使得插入后的字符串是 dictionary 中某个字符串的前缀。

        # 思路
        使用动态规划求解。定义 dp[i] 表示 s 的前 i 个字符中，最少需要插入多少个字符才能满足条件。
        初始化 dp[0] 为 0，表示空串不需要插入字符。

        遍历 s 的每个位置 i，初始化 dp[i] 为 dp[i-1] + 1，表示默认情况下需要插入一个字符。
        然后，再次遍历前面的字符 j（从 i-1 到 0），检查 s[j:i] 是否在字典中。如果是，则更新 dp[i] 为 dp[j]，表示可以通过在 s[j:i] 中插入一些字符，使得 dp[i] 达到最小值。

        最终返回 dp[size]，其中 size 是字符串 s 的长度。

        # Note
        - 使用动态规划时，考虑问题的最优子结构性质，即问题的最优解可以通过子问题的最优解来有效地构造。
        - ***使用哈希集合加速字典中字符串的查找过程***。
        """

        size = len(s)
        dp = [math.inf] * (size + 1)
        dp[0] = 0

        hash_set = set(dictionary)

        for i in range(1, size + 1):
            dp[i] = dp[i - 1] + 1
            for j in range(i - 1, -1, -1):
                if s[j:i] in hash_set:
                    dp[i] = min(dp[i], dp[j])

        return dp[size]
```

#### Minimum Additions to Make Valid String
```py
"""
2645. Minimum Additions to Make Valid String

# 问题描述 
    给定一个字符串 word，你可以在任意位置插入字母 "a"、"b" 或 "c"，任意次数。返回使 word 成为有效字符串所需的最小插入字母数。

    一个字符串被称为有效的，如果它可以通过多次连接字符串 "abc" 来形成。

# 思路 
    使用动态规划来解决这个问题。定义一个数组 dp，其中 dp[i] 表示将字符串的前 i 个字符变为有效字符串所需的最小插入次数。

    初始化 dp 数组，其中 dp[i] 的初始值为 i，因为最坏情况下，每个字符都需要插入一次。

    然后遍历字符串，更新 dp 数组。对于每个字符，分两种情况：
    1. 如果当前字符大于前一个字符，说明当前字符可以和前一个字符组成有效字符串的一部分，此时更新 dp[i] = min(dp[i], dp[i-1]-1)。
    2. 否则，需要插入两个字符，更新 dp[i] = dp[i-1] + 2。

    最终返回 dp 数组的最后一个元素，即为将整个字符串变为有效字符串所需的最小插入次数。

# Note 
    - 该算法使用动态规划，通过状态转移方程来更新每个字符位置的最小插入次数。
"""

class Solution:
    def addMinimum(self, word: str) -> int:
        # 获取字符串长度
        n = len(word)

        # 初始化动态规划数组，dp[i] 表示将字符串的前 i 个字符变为有效字符串所需的最小插入次数
        dp = [i for i in range(n+1)]
        
        # 遍历字符串，更新 dp 数组
        for i in range(1, n+1):
            index = i - 1
            # 默认插入两个字符
            dp[i] = dp[i-1] + 2
            
            # 如果当前字符大于前一个字符，更新插入次数
            if index >= 1 and word[index] > word[index-1]:
                dp[i] = min(dp[i-1]-1, dp[i])

        # 返回最终结果，即将整个字符串变为有效字符串所需的最小插入次数
        return dp[-1]

```

#### Minimum Time to Make Array Sum At Most x

```py
"""
2809. Minimum Time to Make Array Sum At Most x

# 问题描述
给定两个长度相等的整数数组 nums1 和 nums2，其索引为 0 至 nums1.length - 1。每秒钟，对于所有索引 0 <= i < nums1.length，nums1[i] 的值都会增加 nums2[i]。在此操作完成后，你可以执行以下操作：

选择一个索引 0 <= i < nums1.length，并令 nums1[i] = 0。

你还有一个整数 x。

返回在你能使 nums1 的所有元素之和小于或等于 x 的最小时间，如果不可能，则返回 -1。

# 思路
1. 首先，将 nums1 和 nums2 按照 nums2 的值进行排序，形成 pairs 数组。
2. 使用动态规划来计算在每个时刻选择操作的情况下，nums1 的总和。
3. 创建二维数组 state，其中 state[i][j] 表示在 pairs 的前 i 个元素中选择 j 个执行操作时，nums1 的总和。
4. 使用状态转移方程 state[i+1][j] = max(state[i][j], state[i][j-1] + a + b * j)，其中 a 和 b 分别为 pairs[i] 的两个元素。
5. 遍历所有状态，找到满足条件 s1 + s2 * index - val <= x 的最小 index。
6. 返回该 index，如果不存在满足条件的 index，则返回 -1。

# Note
- !!!用二维数组的话，dp倒序正序都一样，但如果优化掉第一维度，那必须用倒序
因为state[i + 1][j]依赖state[i][j - 1]，如果正序的话，计算state[j]时state[j-1]实际上已经被更新为这一轮i的state[i+1][j-1]，而不是我们本来要的state[i][j - 1]
"""

from typing import List

class Solution:
    def minimumTime(self, nums1: List[int], nums2: List[int], x: int) -> int:
        # 将 pairs 按 nums2 的值排序
        pairs = sorted(zip(nums1, nums2), key=lambda t: t[1])
        n = len(pairs)
        
        # 初始化状态数组
        state = [[0 for _ in range(n + 1)] for _ in range(n + 1)]

        # 动态规划计算状态数组
        for i, (a, b) in enumerate(pairs):
            for j in range(i + 1, 0, -1):
            # for j in range(1, i+2):                
                state[i + 1][j] = max(state[i][j], state[i][j - 1] + a + b * j)

        s1 = sum(nums1)
        s2 = sum(nums2)

        # 遍历状态数组，找到满足条件的最小 index
        for index, val in enumerate(state[n]):
            if s1 + s2 * index - val <= x:
                return index

        return -1
```

#### Freedom Trail
```py
"""
514. Freedom Trail
# 问题描述
在Fallout 4游戏中，任务"Road to Freedom"要求玩家达到一个名为"Freedom Trail Ring"的金属拨号，并使用该拨号拼写特定的关键字以打开门。

给定一个字符串ring，表示刻在外环上的代码，以及另一个字符串key，表示需要拼写的关键字，返回拼写关键字所有字符所需的最小步数。

最初，环的第一个字符位于"12:00"方向。您应该逐个拼写key中的所有字符，通过顺时针或逆时针旋转环，使key的每个字符都与"12:00"方向对齐，然后按下中心按钮。

在旋转环以拼写关键字符key[i]的阶段：

您可以将环顺时针或逆时针旋转一格，这算作一步。旋转的最终目的是将环的一个字符与"12:00"方向对齐，其中此字符必须等于key[i]。
如果字符key[i]已经与"12:00"方向对齐，请按下中心按钮进行拼写，这也算作一步。按下后，您可以开始拼写key中的下一个字符（下一个阶段）。否则，您已经完成了所有的拼写。

# 思路
- 将字符转换为ASCII码方便处理。
- 使用动态规划（DP）来找到最小步数。
- 通过构建ring_map，将每个字符的位置映射到列表中。
- 使用DP数组dp[i][j]表示拼写key的前i个字符，ring的第j个字符对齐到"12:00"方向的最小步数。
- 初始化第一行dp[0][j]，表示拼写第一个字符的步数。
- 递推计算dp[i][j]，考虑从上一行的任意位置pre_idx到当前位置cur_idx的步数，取最小值。
- 最后取dp数组最后一行的最小值，加上key的长度，即为所需的最小步数。

# Note
- ASCII码转换使用ord(char) - ord("a")。
- 构建ring_map列表，存储ring中每个字符的位置。
- 使用动态规划数组dp来保存中间状态。
- 在计算dp数组时，考虑每个字符的所有可能对齐位置，并选择最小步数。
"""

class Solution:
    def findRotateSteps(self, ring: str, key: str) -> int:
        # 将字符转换为ASCII码
        ring = [ord(char) - ord("a") for char in ring]
        key = [ord(char) - ord("a") for char in key]

        # 构建ring中每个字符的位置映射
        ring_map = [[] for _ in range(26)]
        for i, char in enumerate(ring):
            ring_map[char].append(i)

        len_ring = len(ring)
        len_key = len(key)        

        # 初始化DP数组
        # dp[i][j] 存储的是拼写关键字的前 i 个字符，同时将环的第 j 个字符对齐到 "12:00" 方向所需的最小步数。
        dp = [[float("inf") for _ in range(len_ring)] for _ in range(len_key)]
        for i in ring_map[key[0]]:
            # key的第一个char
            dp[0][i] = min(i, len_ring - i)

        # 递推计算DP数组
        for i in range(1, len_key):
            for cur_idx in ring_map[key[i]]:
                for pre_idx in ring_map[key[i-1]]:
                    dis = abs(cur_idx - pre_idx)
                    dp[i][cur_idx] = min(dp[i][cur_idx], dp[i-1][pre_idx] + min(dis, len_ring - dis))

        # 返回最小步数
        return min(dp[-1]) + len_key
```

#### stoneGameVII 
```go
// stoneGameVII 解决石子游戏 VII 问题
//
// 问题描述：
//   给定一个数组 stones ，表示石头的值。两位玩家轮流执行操作，每次可以移除 1 到 3 颗石头。
//   每位玩家的目标是移除石头的总和最大。如果玩家 A 和玩家 B 都发挥出最佳水平，返回玩家 A 的分数减去玩家 B 的分数。
//
// 思路：
//   prefixSum[i]表示前i块石头的总价值，
//   dfs[i][j] 表示 表示剩余石子从 stones[i] 到 stones[j] 先手得分减去后手得分的最大值。
//   状态转移方程：dfs(i,j)=max(s[j+1]−s[i+1]−dfs(i+1,j), s[j]−s[i]−dfs(i,j−1))
//   记忆化搜索：定义一个二维数组 memo 存储已经计算过的结果，减少重复计算。
// 
// Note：
//
func stoneGameVII(stones []int) int {
	n := len(stones)

	// 计算前缀和数组
	prefixSum := make([]int, n+1)
	for i := 1; i < n+1; i++ {
		prefixSum[i] = prefixSum[i-1] + stones[i-1]
	}

	// 初始化记忆数组
	memo := make([][]int, n)
	for i := range memo {
		memo[i] = make([]int, n)
	}

	// 递归函数，计算当前玩家与对手的最大分差
	var dfs func(int, int) int
	dfs = func(i, j int) int {
		if i == j {
			return 0
		}
		if memo[i][j] == 0 {
			// 计算当前玩家选择移除左端或右端石头的情况，选择使得分差最大的方案
			memo[i][j] = max(prefixSum[j+1]-prefixSum[i+1]-dfs(i+1, j), prefixSum[j]-prefixSum[i]-dfs(i, j-1))
		}

		return memo[i][j]
	}

	// 返回结果
	return dfs(0, n-1)
}
```

```go
// 进一步升级为dp
// 思路：
//   - 使用动态规划求解，定义dp数组表示在给定区间内两个玩家的最大分数差值。
//
// Note：
//   - 如何思考循环顺序？什么时候要正序枚举，什么时候要倒序枚举？
//     盯着状态转移方程，想一想，要计算 f[i][j]f[i][j]f[i][j]，其一，必须先把 f[i+1][j]f[i+1][j]f[i+1][j] 算出来，那么只有 iii 从大到小枚举才能做到；其二，必须先把 f[i][j−1]f[i][j-1]f[i][j−1] 算出来，那么对于内层循环，只有 jjj 从小到大枚举才能做到。
//
func stoneGameVII(stones []int) int {
	n := len(stones)

	// 计算前缀和
	prefixSum := make([]int, n+1)
	for i := 1; i <= n; i++ {
		prefixSum[i] = prefixSum[i-1] + stones[i-1]
	}

	// 初始化动态规划数组
	dp := make([][]int, n)
	for i := range dp {
		dp[i] = make([]int, n)
	}

	// 动态规划计算最大分数差值
	for i := n - 1; i >= 0; i-- {
		for j := i + 1; j < n; j++ { // TODO： 为什么是从i+1
			dp[i][j] = 
            max(prefixSum[j+1]-prefixSum[i+1]-dp[i+1][j], prefixSum[j]-prefixSum[i]-dp[i][j-1])
		}
	}

	return dp[0][n-1]
}

```

#### Jump Game VI
```java
/**
 * 1696. Jump Game VI
 * 问题描述：
 * 给定一个0索引的整数数组 nums 和一个整数 k。
 * 初始时，你站在索引 0 处。在一次移动中，你最多可以向前跳跃 k 步，但不能超出数组边界。
 * 换句话说，你可以从索引 i 跳到范围 [i + 1, min(n - 1, i + k)] 内的任何索引。
 * 你希望到达数组的最后一个索引（索引 n - 1）。你的得分是访问数组中每个索引 j 时 nums[j] 的总和。
 * 返回你可以获得的最大得分。
 * 
 * 思路：
 * 使用动态规划和优先队列（堆）来解决问题。维护一个动态规划数组 dp，表示到达每个位置的最大得分。
 * 使用优先队列来保存当前能够到达的位置及其得分，保证每次取出的位置都是得分最高的。
 * 
 * Note: 
 * 还可以用单调队列来优化dp
 * 
 */
class Solution {
    
    /**
     * 计算最大得分
     * 
     * @param nums 给定的整数数组
     * @param k 最大跳跃步数
     * @return 最大得分
     */
    public int maxResult(int[] nums, int k) {
        int len = nums.length;

        int[] dp = new int[len];
        dp[0] = nums[0];

        // 使用优先队列，按得分从高到低排序
        PriorityQueue<int[]> heap = new PriorityQueue<>((a, b) -> b[0] - a[0]);
        heap.add(new int[]{dp[0], 0});

        // 遍历数组
        for (int i = 1; i < len; i++) {
            // 移除超出跳跃范围的位置
            while (heap.peek()[1] + k < i) {
                heap.poll();
            }

            // 计算当前位置的最大得分
            dp[i] = heap.peek()[0] + nums[i];

            // 将当前位置及得分加入优先队列
            heap.add(new int[]{dp[i], i});
        }

        // 返回最终的最大得分
        return dp[len - 1];
    }
}
```

## 二分法

#### Split Array Largest Sum
```py
from typing import List
import math

class Solution:
    """
    410. Split Array Largest Sum
    # 问题描述
    给定一个整数数组 nums 和一个整数 k，将 nums 分割成 k 个非空子数组，使得任何子数组中的最大和尽量小。
    返回最小的子数组最大和。

    # 思路
    通过二分查找的方式，找到一个合适的值，使得数组分割后的子数组最大和最小。
    在每一次二分查找中，判断是否可以按照当前的最大和进行分割，如果可以，则在左半部分继续查找，否则在右半部分查找。

    # Note
    使用二分查找时，首先确定查找范围，这里的左边界是数组中的最大值减1，右边界是数组的总和。
    在每次二分查找中，根据中间值判断是否可以按照该值进行分割，更新左右边界，并最终返回最小的满足条件的值。

    """
    def splitArray(self, nums: List[int], k: int) -> int:
        arr_sum = 0
        arr_max = 0

        # 计算数组总和和最大值
        for x in nums:
            arr_sum += x
            arr_max = max(arr_max, x)

        # 初始化左右边界
        left = max(arr_max - 1, (arr_sum - 1) / k)
        right = arr_sum

        # 二分查找
        while left + 1 < right:
            mid = left + (right - left) // 2
            if self.check(nums, k, mid):
                right = mid
            else:
                left = mid

        return math.floor(right)

    def check(self, nums: List[int], k: int, max_val: int) -> bool:
        """
        # 检查是否可以按照给定的最大值进行分割数组
        :param nums: 待分割的数组
        :param k: 分割的份数
        :param max_val: 当前的最大值
        :return: 是否可以按照当前最大值分割数组
        """
        cnt, s = 1, 0

        for x in nums:
            if s + x <= max_val:
                s += x
            else:
                if cnt == k:
                    return False
                cnt += 1
                s = x

        return True
```

#### Maximum Number of Alloys
```py
"""
2861. Maximum Number of Alloys
# 问题描述 
你是一家公司的老板，该公司使用不同类型的金属制作合金。有 n 种不同类型的金属，你可以使用 k 台机器来制作合金。每台机器需要使用每种金属的特定数量来制作一个合金。

对于第 i 台机器来说，制作一个合金需要 composition[i][j] 单位第 j 种金属。最初，你拥有 stock[i] 单位第 i 种金属，购买一单位第 i 种金属的成本为 cost[i] 个硬币。

给定整数 n、k、budget，一个基于1索引的二维数组 composition，以及基于1索引的数组 stock 和 cost，你的目标是在不超过 budget 个硬币的情况下，最大化公司可以制造的合金数量。

所有的合金必须由同一台机器制作。

返回公司可以制造的合金的最大数量。


# 思路 
为了最大化公司可以制造的合金数量，我们可以使用二分查找。在每一次迭代中，计算中间值 mid，并检查使用该中间值时公司的总成本是否超过了预算。
如果超过了预算，则表示 mid 值太大，需要将高端范围缩小；否则，我们可以尝试增加 mid 值，以看看能否制造更多的合金。

对于每个 mid 值，我们遍历每一种金属，计算需要购买的金属数量，然后计算购买这些金属的总成本。如果总成本超过了预算，说明 mid 值太大，我们需要缩小高端范围；否则，更新结果并尝试增大 mid 值。

最终返回结果即为最大制造的合金数量。


# Note 
- 我们使用二分查找来找到最大的制造合金数量，因为这是一个优化问题，需要在一定范围内寻找最优解。
- 在每次迭代中，使用 zip 函数同时迭代合金的组成、金属库存和金属购买成本，使代码更为简洁和可读。
- 对于购买金属的数量，我们使用 metal_to_buy = metal_per_alloy * mid - metal_stock 的方式计算，这是为了确保我们购买的金属数量大于等于合金需要的数量。
- 我们使用二分查找的方式不断调整 mid 值，以在预算范围内找到最大的合金制造数量。
"""
class Solution:
    def maxNumberOfAlloys(self, n: int, k: int, budget: int, composition: List[List[int]], stock: List[int], cost: List[int]) -> int:
        ret = 0
        for i in range(k):
            low, high = 0, budget + sum(stock)
            
            # 二分查找
            while low <= high:
                mid = low + (high - low) // 2
                # 对于固定机器，固定合金产量mid下，使用的全部金属的花费
                expense = 0
                
                # zip 函数用于将多个可迭代对象的元素按顺序打包成元组。它返回一个迭代器，每次迭代都会生成一个包含输入可迭代对象对应位置元素的元组。
                metal_detail = zip(composition[i], stock, cost)
                # 遍历每一种金属的需求，库存和成本
                for metal_per_alloy, metal_stock, metal_price in metal_detail:
                    # 计算需要购买的金属数量
                    metal_to_buy = metal_per_alloy * mid - metal_stock
                    if metal_to_buy > 0:
                        # 计算购买这些金属的总成本
                        expense += metal_to_buy * metal_price
                
                if expense > budget:
                    # 如果总成本超过预算，缩小高端范围
                    high = mid - 1
                else:
                    # 更新结果并尝试增大 mid 值, 这个更新是对于遍历不同机器得到的最大值选取全局最大值
                    ret = max(ret, mid)
                    low = mid + 1
        return ret

```

## 模运算
#### Find the Divisibility Array of a String
```py
class Solution(object):
    def divisibilityArray(self, word, m):
        """
        # 问题描述
        2575. Find the Divisibility Array of a String
        给定一个由数字组成的长度为n的字符串word（下标从0开始），以及一个正整数m。
        定义字符串word的除数数组div为一个长度为n的整数数组，满足以下条件：
        - 如果word的前缀子串word[0,...,i]的数值能够被m整除，则div[i] = 1；
        - 否则，div[i] = 0。

        返回字符串word的除数数组div。

        # 思路 
        - 使用一个变量cur来记录当前前缀子串的数值对m的模。
        - 遍历字符串word的每个字符，更新cur，并根据cur是否为0来确定对应位置上的div值。
        """

        cur = 0  # 初始化当前前缀子串对m的模
        res = []  # 用于存储结果的数组
        for c in word:
            cur = (cur * 10 + int(c)) % m  # 更新当前前缀子串对m的模
            res.append(1 if cur == 0 else 0)  # 根据当前前缀子串的模是否为0来确定结果数组中的值
        return res
```

## 位运算

#### Minimum Non-Zero Product of the Array Elements (快速幂)
```cpp
/**
 * 1969. Minimum Non-Zero Product of the Array Elements
 * 问题描述：
 * 给定一个正整数 p。考虑一个数组 nums（从1开始索引），该数组由区间 [1, 2p - 1] 中的整数的二进制表示组成。可以进行以下操作任意次数：
 * 1. 选择两个元素 x 和 y 从 nums 中。
 * 2. 选择 x 中的一个位并将其与 y 中的对应位交换。对应位是指在另一个整数中相同位置的位。
 * 
 * 找到执行上述操作任意次数后 nums 的最小非零乘积。返回此乘积对 10^9 + 7 取模的结果。
 * 
 * 思路：
 * 根据数学性质，数组 nums 中最小的非零乘积是 nums 中所有元素的乘积减去 1。因此我们需要计算 1 到 2^p - 1 的乘积。
 * 
 * 为了避免整数溢出和加快计算，可以使用快速幂算法来计算乘积。然后将得到的结果对 10^9 + 7 取模。
 * 
 * 在快速幂算法中，我们不需要直接计算 nums 中所有元素的乘积，而是计算 2^p - 1 和 (2^p - 1 - 1) 的乘积，即 k * (k - 1)^(p - 1)。
 * 其中，k = 2^p - 1。
 * 
 * 快速幂算法的思想是将指数 p 转换为二进制形式，并利用二进制形式的性质来快速计算乘积。
 * 
 * 优化：
 * 1. 优化代码风格，使其更加清晰易读。
 * 2. 添加详细的行间中文注释，帮助理解代码逻辑。
 * 3. 添加了文档注释，描述了问题以及解题思路。
 */

class Solution {
    const int mod = 1'000'000'007;

    /**
     * 快速幂算法，计算 x 的 p 次方取模的结果
     * 
     * @param x 底数
     * @param p 幂
     * @return x^p % mod 的结果
     */
    long long pow(long long x, int p) {
        x %= mod;
        long long res = 1;
        while (p--) {
            res = res * x % mod;
            x = x * x % mod;
        }
        return res;
    }

public:
    /**
     * 计算最小非零乘积
     * 
     * @param p 正整数
     * @return nums 的最小非零乘积对 10^9 + 7 取模的结果
     */
    int minNonZeroProduct(int p) {
        long long k = (1LL << p) - 1;
        return k % mod * pow(k - 1, p - 1) % mod;
    }
};
``

#### Find the K-or of an Array
```py
class Solution:
    def findKOr(self, nums: List[int], k: int) -> int:
        """
        # 问题描述
        2917. Find the K-or of an Array
        给定一个非负整数数组 nums 和一个整数 k，要求求出 nums 的 K-or。
        
        K-or 指的是一个非负整数，满足以下条件：
        - 第 i 位在 K-or 中被设置，当且仅当在 nums 中至少有 k 个元素的第 i 位被设置。
        
        返回 nums 的 K-or。

        注意：一个整数 x 的第 i 位被设置，当且仅当 (2^i AND x) == 2^i，其中 AND 是按位与运算符。
        
        # 思路 
        - 遍历 nums 中的每个位，统计每个位上为 1 的元素个数 cnt1
        - 如果 cnt1 大于等于 k，将当前位设置为 1
        """
        ans = 0
        # 从最低位到最高位遍历
        for i in range(31):
            # 统计当前位为 1 的元素个数
            cnt1 = sum(x >> i & 1 for x in nums)
            # 如果当前位为 1 的元素个数大于等于 k，将当前位设置为 1
            if cnt1 >= k:
                ans |= 1 << i
        return ans

```

#### Maximum Rows Covered by Columns
```py
from typing import List

class Solution:
    def maximumRows(self, matrix: List[List[int]], numSelect: int) -> int:
        """
        2397. Maximum Rows Covered by Columns
        返回选取指定数量的行使得行内包含的 1 的数量最大化。

        思路:
        - 因为cols < 12且只有0,1, 可以考虑枚举，总共 1 << 12 == 4096种可能
        - 对于每一种可能，依次检查能覆盖多少row，全局更新最大的数量
            - 如何检查覆盖数呢，以cols == 3 为例，如果当前选取情况为101，既选第一列和第三列，对于行 101可以覆盖，对于011无法覆盖（可以用位与运算，101 & 011 == 001 ！= 011所以无法覆盖）
        - 所以先要把每一行搞成二进制，初始化为0，如果对应位置是1，则用其二进制数 与 1 << j 做位或
            - 比如对于 101
                - col-0: 0 |= 1 << 0 # 001 | 000 -> 001
                - col-2: 1 |= 1 << 2 # 00001 | 00100 -> 00101

        Returns:
        - int，最大化行内包含的 1 的数量
        """
        # 获取矩阵的行数和列数
        rows = len(matrix)
        cols = len(matrix[0])

        # 将每行的 1 和 0 转换为二进制表示，存储在 binary_rows 中
        binary_rows = [0] * rows
        for row in range(rows):
            for col in range(cols):
                if matrix[row][col] == 1:
                    binary_rows[row] |= 1 << col

        # 初始化最大行数为 0
        ret = 0

        # 遍历所有可能的行的组合
        for mask in range(1, 1 << cols):
            # 如果该组合中的 1 的数量不等于 numSelect，则跳过
            if bin(mask).count('1') != numSelect:
                continue

            # 计算当前组合下的行内包含的 1 的数量
            temp = 0
            for bin_row in binary_rows:
                if mask & bin_row == bin_row:
                    temp += 1

            # 更新最大值
            ret = max(ret, temp)

        return ret

```

#### Sum of Values at Indices With K Set Bits
```py
"""
2859. Sum of Values at Indices With K Set Bits
# 问题描述
给定一个整数数组 nums 和一个整数 k。

返回一个整数，表示 nums 中具有恰好 k 个设置位的对应索引处元素的总和。

整数的设置位是其二进制表示中存在的 1。

例如，21的二进制表示为10101，其中有3个设置位。
"""


class Solution:
    def sumIndicesWithKSetBits(self, nums: List[int], k: int) -> int:
        """
        计算具有恰好 k 个设置位的索引对应元素的总和。

        :param nums: 给定的整数数组
        :param k: 设置位的数量
        :return: 元素总和
        """

        ret = 0
        for index, num in enumerate(nums):
            # 判断当前索引的二进制表示中设置位的数量是否等于 k
            # if index.bin_count() == k:
            # if bin(index).count("1") == k:
            if self.bit_count_divide_conquer(index) == k:
                ret += num
        return ret

    def bit_count_bf(self, n):
        """
        使用暴力循环统计二进制表示中设置位的数量。

        :param n: 待统计的整数
        :return: 设置位的数量
        """
        count = 0
        while n:
            count += n & 1
            n >>= 1
        return count
        
    def bit_count_divide_conquer(self, x):
        """
        使用分治法统计整数 x 二进制表示中设置位的数量。

        分治法通过将整数 x 的比特位分组相加，从而高效地计算设置位的数量。

        :param x: 待统计的整数
        :return: 设置位的数量
        """
        # 将 x 中的比特位按奇偶位置两两相加
        x = (x & 0b0101010101) + ((x & 0b1010101010) >> 1)
        
        # 将相邻两组的结果再进行两两相加
        x = ((x & 0b0011001100) >> 2) + (x & 0b1100110011)
        
        # 将相邻两个 4 比特位组的结果相加
        x = (x >> 8) + ((x >> 4) & 0b1111) + (x & 0b1111)
        
        return x

```


## 循环节
### Count The Repetitions
```py
class Solution:
    def getMaxRepetitions(self, s1: str, n1: int, s2: str, n2: int) -> int:
        '''
        # 问题描述
        466. Count The Repetitions

        给出两个字符串s1和s2，以及两个整数n1和n2。定义字符串str = [s, n]表示由字符串s重复n次构成的字符串。

        定义如果我们可以从s2中删除一些字符使其变为s1，那么字符串s1可以从字符串s2获得。

        请返回最大整数m，使得str2 = [s2, m]可以从str1 = [s1, n1]获得。

        # 思路
        通过观察s1和s2的匹配过程，找到循环节的起始位置和长度。
        利用循环节的信息来加速计算，避免不必要的重复匹配。

        # Note
        1. 在判断是否有解之前，首先判断长度是否满足要求。
        2. 利用两个字典`map1`和`map2`记录循环节的信息，提高计算效率。
        '''

        len1, len2 = len(s1), len(s2)
        index1, index2 = 0, 0

        # 判断是否有解
        if len1 == 0 or len2 == 0 or len1 * n1 < len2 * n2:
            return 0

        # 用于记录循环节的信息
        map1, map2 = dict(), dict()
        res = 0

        # 遍历字符串s1
        while index1 // len1 < n1:
            # 检查是否到达s1的末尾
            if index1 % len1 == len1 - 1:
                # 判断是否存在循环节
                if index2 % len2 in map1:
                    val = map1[index2 % len2]
                    cycle_len = index1 // len1 - val // len1
                    cycle_num = (n1 - 1 - index1 // len1) // cycle_len
                    cycle_s2_num = index2 // len2 - map2[index2 % len2] // len2

                    # 更新index1和res
                    index1 += cycle_num * cycle_len * len1
                    res += cycle_num * cycle_s2_num
                else:
                    # 记录循环节的起始位置
                    map1[index2 % len2] = index1
                    map2[index2 % len2] = index2

            # 检查当前字符是否匹配
            if s1[index1 % len1] == s2[index2 % len2]:
                # 检查是否到达s2的末尾
                if index2 % len2 == len2 - 1:
                    res += 1
                index2 += 1
            index1 += 1

        # 返回结果
        return res // n2

```

## 数学
#### (区间合并 & 排序) Count Ways to Group Overlapping Ranges
```cs
using System;

/// <summary>
/// 2580. Count Ways to Group Overlapping Ranges
/// 问题描述：
/// 给定一个二维整数数组 ranges，其中 ranges[i] = [starti, endi] 表示第 i 个范围内的所有整数，
/// 返回将范围分成两组的总方法数。要求每个范围只能属于一组，如果两个范围有交叉，它们必须属于同一组。
/// 
/// 思路：
/// 1. 首先对范围按照起始值进行排序，以便处理。
/// 2. 遍历排序后的范围，如果当前范围的起始值大于前一个范围的结束值，说明可以将当前范围划分到另一组，结果乘以 2。
/// 3. 遍历过程中更新当前已经处理过的范围的最大结束值。
/// 4. 返回结果，注意取模操作。
/// </summary>
public class Solution {
    /// <summary>
    /// 计算给定范围数组可以分成两组的总方法数
    /// </summary>
    /// <param name="ranges">给定的范围数组</param>
    /// <returns>分组总方法数，取模 10^9 + 7</returns>
    public int CountWays(int[][] ranges) {
        // 按照起始值对范围进行排序
        Array.Sort(ranges, (x, y) => x[0].CompareTo(y[0]));
        int upper = -1;
        int res = 1;

        // 遍历排序后的范围数组
        foreach (int[] range in ranges) {
            // 如果当前范围的起始值大于前一个范围的结束值，说明可以划分到另一组，结果乘以 2
            if (range[0] > upper) {
                res *= 2;
                res %= 1000000007; // 取模操作
            }

            // 更新当前已处理过的范围的最大结束值
            upper = Math.Max(upper, range[1]);
        }

        return res;
    }

    /// <summary>
    /// 计算阶乘
    /// </summary>
    /// <param name="n">给定的整数</param>
    /// <returns>n 的阶乘</returns>
    static int Factorial(int n)
    {
        if (n == 0)
            return 1;
        return n * Factorial(n - 1);
    }

    /// <summary>
    /// 计算组合数
    /// </summary>
    /// <param name="n">给定整数 n</param>
    /// <param name="k">给定整数 k</param>
    /// <returns>C(n, k)</returns>
    // 计算组合数
    static int Combination(int n, int k)
    {
        if (k > n)
            return 0;
        return Factorial(n) / (Factorial(k) * Factorial(n - k));
    }
}

```


## 并查集
#### Minimum Edge Weight Equilibrium Queries in a Tree
```py
class Solution:
    """
    2846. Minimum Edge Weight Equilibrium Queries in a Tree
    # 问题描述
    给定一颗有 n 个节点（标记为 0 到 n-1）的无向树，以及一维数组 edges，表示树上的 n-1 条边，每条边有一个权重。
    还有一维数组 queries，表示 m 个查询，每个查询是一个长度为 2 的数组 [ai, bi]，表示路径上的两个节点。

    对于每个查询，找到使得路径上每条边的权重相等所需的最小操作次数。在一次操作中，可以选择树上的任意一条边，并将其权重更改为任意值。

    注意：
    - 查询是相互独立的，即每个新查询都返回树的初始状态。
    - 从 ai 到 bi 的路径是一个节点序列，以 ai 开始，以 bi 结束，序列中每两个相邻的节点在树中共享一条边。
    
    # 思路
    - 使用并查集（Union-Find）来找到路径上的最近公共祖先（Lowest Common Ancestor, LCA）。
    - 使用 Tarjan 算法进行深度优先搜索，计算每个节点到根节点的边权重统计信息。
    - 对于每个查询，通过计算统计信息，找到最小操作次数。

    # Note
    - 使用并查集的路径压缩优化，减少递归深度。
    - 通过 Tarjan 算法计算路径上每个节点到根节点的边权重统计信息。
    - 在每个查询中，通过计算总权重和最大权重，得到最小操作次数。
    """

    def find(self, uf: List[int], i: int) -> int:
        """
        寻找并查集中节点 i 的根节点，实现路径压缩。
        """
        if uf[i] == i:
            return i
        uf[i] = self.find(uf, uf[i])
        return uf[i]

    def minOperationsQueries(self, n: int, edges: List[List[int]], queries: List[List[int]]) -> List[int]:
        """
        计算每个查询的最小操作次数。
        """
        m, W = len(queries), 26
        neighbors = [dict() for i in range(n)]

        # 构建无向图的邻接表
        for edge in edges:
            neighbors[edge[0]][edge[1]] = edge[2]
            neighbors[edge[1]][edge[0]] = edge[2]

        queryArr = [[] for i in range(n)]

        # 将查询按起始节点分组
        for i in range(m):
            queryArr[queries[i][0]].append([queries[i][1], i])
            queryArr[queries[i][1]].append([queries[i][0], i])

        count = [[0 for j in range(W + 1)] for i in range(n)]
        visited, uf, lca = [0 for i in range(n)], [0 for i in range(n)], [0 for i in range(m)]

        def tarjan(node: int, parent: int):
            """
            使用 Tarjan 算法计算边权重统计信息。
            """
            if parent != -1:
                count[node] = count[parent].copy()
                count[node][neighbors[node][parent]] += 1
            uf[node] = node

            for child in neighbors[node].keys():
                if child == parent:
                    continue
                tarjan(child, node)
                uf[child] = node

            for [node1, index] in queryArr[node]:
                if node != node1 and not visited[node1]:
                    continue
                lca[index] = self.find(uf, node1)

            visited[node] = 1

        tarjan(0, -1)
        res = [0 for i in range(m)]

        # 计算每个查询的最小操作次数
        for i in range(m):
            totalCount, maxCount = 0, 0
            for j in range(1, W+1):
                t = count[queries[i][0]][j] + count[queries[i][1]][j] - 2 * count[lca[i]][j]
                maxCount = max(maxCount, t)
                totalCount += t

            res[i] = totalCount - maxCount

        return res
```

#### 2368. Reachable Nodes With Restrictions

![图解](https://assets.leetcode.com/uploads/2022/06/15/ex1drawio.png)

```py
# 并查集解法
class UnionFind:
    """
    # 问题描述
    本题要求在给定的无向树中，从节点 0 出发，不经过任何被限制的节点，最多能到达多少个节点。

    # 思路
     - 首先，我们可以使用并查集来处理节点之间的连接关系。
     - 然后，遍历所有的边，将不受限制的节点进行合并。
     - 最后，统计并返回从节点 0 出发可以到达的节点数量。
    """
    def __init__(self, n):
        """
        初始化并查集
        """
        self.f = list(range(n))  # 存储节点的父节点
        self.rank = [0] * n  # 存储节点的秩（深度）

    def merge(self, x, y):
        """
        将两个节点所在的集合合并
        """
        rx = self.find(x)
        ry = self.find(y)
        if rx != ry:
            if self.rank[rx] > self.rank[ry]:
                self.f[ry] = rx
            elif self.rank[rx] < self.rank[ry]:
                self.f[rx] = ry
            else:
                self.f[ry] = rx
                self.rank[rx] += 1

    def find(self, x):
        """
        查找节点 x 所属的集合的根节点，并进行路径压缩
        """
        if x != self.f[x]:
            self.f[x] = self.find(self.f[x])
        return self.f[x]

    def count(self):
        """
        统计并返回集合中节点的数量
        """
        cnt = 0
        rt = self.find(0)
        for i in range(len(self.f)):
            if rt == self.find(i):
                cnt += 1
        return cnt


class Solution:
    """
    # 问题描述
    本题要求在给定的无向树中，从节点 0 出发，不经过任何被限制的节点，最多能到达多少个节点。

    # 思路
     - 首先，我们可以使用并查集来处理节点之间的连接关系。
     - 然后，遍历所有的边，将不受限制的节点进行合并。
     - 最后，统计并返回从节点 0 出发可以到达的节点数量。
    """
    def reachableNodes(self, n: int, edges: List[List[int]], restricted: List[int]) -> int:
        """
        计算从节点 0 出发，不经过任何被限制的节点，最多能到达的节点数量
        """
        is_restricted = [0] * n
        for x in restricted:
            is_restricted[x] = 1

        uf = UnionFind(n)
        for v in edges:
            if is_restricted[v[0]] or is_restricted[v[1]]:
                continue
            uf.merge(v[0], v[1])
        return uf.count()

```

## Pending

#### Removing Minimum Number of Magic Beans

![图解](https://pic.leetcode-cn.com/1644881496-veNnxl-2171.drawio%20(2).png)

```py
"""
2171. Removing Minimum Number of Magic Beans

# 问题描述 
给定一个正整数数组 beans，其中每个整数表示一个特定魔法袋中找到的魔法豆的数量。

从每个袋子中删除任意数量的豆子（可能为零），以使每个剩余的非空袋子中的豆子数量相等。一旦从袋子中删除了豆子，就不能将其返回到任何袋子中。

返回你必须移除的最小魔法豆的数量。

# 思路 
1. 对 beans 数组进行升序排序，方便后续计算。
2. 计算 beans 数组中所有元素的总和，以便后续计算每个剩余袋子中的豆子数量相等时的总和。
3. 见图解
4. 返回最小的豆子移除数量。

# Note 
"""
class Solution:
    def minimumRemoval(self, beans: List[int]) -> int:
        # 1. 对数组进行升序排序
        beans.sort()
        # 2. 计算总和
        bean_sum = sum(beans)
        # 3. 初始化最小移除豆子数量
        ret = float("inf")

        # 4. 遍历数组，计算每次去除元素后的总和，更新最小值
        for i in range(len(beans)):
            ret = min(ret, bean_sum - beans[i] * (len(beans) - i))

        return ret

```


#### Water and Jug Problem
```py
"""
365. Water and Jug Problem
# 问题描述
给定两个容量分别为jug1Capacity和jug2Capacity的水壶。有无限的水源可用。判断是否可以精确地测量出targetCapacity升的水。

如果可以测量出targetCapacity升的水，则最终必须在一个或两个水壶中包含targetCapacity升的水。

允许的操作：
1. 向任一水壶中加满水。
2. 把任一水壶的水倒空。
3. 从一个水壶中向另一个水壶倒水，直到另一个水壶满了，或者第一个水壶为空。

# 思路
根据裴蜀定理，只有当targetCapacity是jug1Capacity和jug2Capacity的最大公约数的倍数时，才可能通过上述操作得到targetCapacity的水量。因此，首先计算jug1Capacity和jug2Capacity的最大公约数s_gcd，然后判断targetCapacity是否是s_gcd的倍数。

# Note
裴蜀定理（Bézout's identity）：对于任意给定的两个整数a和b，存在整数x和y，使得ax + by = gcd(a, b)。
"""

class Solution:
    def canMeasureWater(self, jug1Capacity: int, jug2Capacity: int, targetCapacity: int) -> bool:
        # 计算最大公约数
        s_gcd = self.gcd(jug1Capacity, jug2Capacity)

        # 如果两个水壶的容量之和小于目标容量，无法得到目标容量的水
        if jug1Capacity + jug2Capacity < targetCapacity:
            return False

        # 判断目标容量是否是最大公约数的倍数
        return targetCapacity % s_gcd == 0 


    def gcd(self, a, b):
        # 辗转相除法计算最大公约数
        while b != 0:
            a, b = b, a % b
        return a
```


#### Minimum Seconds to Equalize a Circular Array
```py
from typing import List

class Solution:
    def minimumSeconds(self, nums: List[int]) -> int:
        """
        2808. Minimum Seconds to Equalize a Circular Array
        # 问题描述
        给定一个包含n个整数的数组nums（下标从0开始）。
        每秒钟，你需要对数组执行以下操作：
        对于范围[0, n-1]内的每个索引i，用nums[i]、nums[(i-1+n)%n]或nums[(i+1)%n]之一替换nums[i]。
        注意：所有元素将同时被替换。

        返回使数组nums中的所有元素相等所需的最小秒数。

        # 思路
        核心： 计算相同元素两两相邻间的最大距离

        遍历数组nums，将每个元素出现的索引记录到字典s_map中。

        计算每个元素索引间距离，记录最大值。另外还需要计算首位，因为扩散可以环形扩散。
        

        # Note
        在计算最大距离时，注意元素在数组首尾之间的情况，需要考虑环形数组的性质。
        """
        n = len(nums)
        ret = n
        s_map = dict()

        # 遍历数组，记录每个元素的索引
        for i, val in enumerate(nums):
            if val in s_map:
                s_map[val].append(i)
            else:
                s_map[val] = [i]

        # 计算每个元素相等所需的最小秒数
        for li in s_map.values():
            temp = n - (li[-1] - li[0]) # 首尾距离
            for i in range(1, len(li)):
                temp = max(temp, li[i] - li[i-1])
            ret = min(temp, ret)

        return ret // 2
```