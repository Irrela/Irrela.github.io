---
title: Leetcode Daily Question
categories: Leetcode
tags:
  - Leetcode
---

- [链表](#链表)
  - [Medium](#medium)
    - [Remove Nodes From Linked List](#remove-nodes-from-linked-list)
    - [Insert Greatest Common Divisors in Linked List](#insert-greatest-common-divisors-in-linked-list)
- [单调](#单调)
  - [Medium](#medium-1)
    - [Remove Nodes From Linked List](#remove-nodes-from-linked-list-1)
    - [Beautiful Towers I](#beautiful-towers-i)
- [贪心](#贪心)
  - [Medium](#medium-2)
    - [Construct String With Repeat Limit](#construct-string-with-repeat-limit)
    - [1599. Maximum Profit of Operating a Centennial Wheel](#1599-maximum-profit-of-operating-a-centennial-wheel)
    - [](#)
- [动态规划](#动态规划)
    - [Extra Characters in a String](#extra-characters-in-a-string)
    - [Minimum Additions to Make Valid String](#minimum-additions-to-make-valid-string)
    - [Minimum Time to Make Array Sum At Most x](#minimum-time-to-make-array-sum-at-most-x)
- [二分法](#二分法)
    - [Split Array Largest Sum](#split-array-largest-sum)
- [位运算](#位运算)
    - [Maximum Rows Covered by Columns](#maximum-rows-covered-by-columns)
    - [Sum of Values at Indices With K Set Bits](#sum-of-values-at-indices-with-k-set-bits)
- [循环节](#循环节)
  - [Count The Repetitions](#count-the-repetitions)
- [Pending](#pending)
    - [Removing Minimum Number of Magic Beans](#removing-minimum-number-of-magic-beans)


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

## 贪心
### Medium
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

#### 
```py
"""
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


## 位运算

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