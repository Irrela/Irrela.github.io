
- [链表](#链表)
  - [Medium](#medium)
    - [Remove Nodes From Linked List](#remove-nodes-from-linked-list)
    - [](#)
- [单调](#单调)
  - [Medium](#medium-1)
    - [Remove Nodes From Linked List](#remove-nodes-from-linked-list-1)
- [贪心](#贪心)
  - [Medium](#medium-2)
    - [1599. Maximum Profit of Operating a Centennial Wheel](#1599-maximum-profit-of-operating-a-centennial-wheel)
- [动态规划](#动态规划)
    - [Extra Characters in a String](#extra-characters-in-a-string)
    - [Maximum Rows Covered by Columns](#maximum-rows-covered-by-columns)
- [循环节](#循环节)
  - [Count The Repetitions](#count-the-repetitions)


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

#### 
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


## 单调
### Medium
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

## 贪心
### Medium
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


## 动态规划
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
                - 0 |= 1 << 0 # 001 | 000 -> 001
                - 1 |= 1 << 2 # 00001 | 00100 -> 00101

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