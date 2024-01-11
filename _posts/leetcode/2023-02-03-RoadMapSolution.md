---
title: Road Map Solution
categories: Leetcode
tags:
- Leetcode
---

- [Solution](#solution)
    - [Two Pointers](#two-pointers)
      - [Valid Palindrome](#valid-palindrome)
      - [680. Valid Palindrome II](#680-valid-palindrome-ii)
      - [Closest Sum](#closest-sum)
      - [3Sum](#3sum)
      - [Best Time to Buy and Sell Stock](#best-time-to-buy-and-sell-stock)
      - [209. Minimum Size Subarray Sum](#209-minimum-size-subarray-sum)
      - [3. Longest Substring Without Repeating Characters](#3-longest-substring-without-repeating-characters)
      - [904. Fruit Into Baskets](#904-fruit-into-baskets)
      - [567. Permutation in String](#567-permutation-in-string)
      - [1493. Longest Subarray of 1's After Deleting One Element](#1493-longest-subarray-of-1s-after-deleting-one-element)
      - [Longest Consecutive Sequence](#longest-consecutive-sequence)
    - [Interval](#interval)
      - [986. Interval List Intersections](#986-interval-list-intersections)
      - [57. Insert Interval](#57-insert-interval)
      - [56. Merge Intervals](#56-merge-intervals)
    - [Linked List Manipulation](#linked-list-manipulation)
      - [24. Swap Nodes in Pairs](#24-swap-nodes-in-pairs)
      - [234. Palindrome Linked List](#234-palindrome-linked-list)
      - [92. Reverse Linked List II](#92-reverse-linked-list-ii)
      - [61. Rotate List](#61-rotate-list)
      - [328. Odd Even Linked List](#328-odd-even-linked-list)
      - [143. Reorder List](#143-reorder-list)
    - [Stack](#stack)
      - [Valid Parentheses](#valid-parentheses)
      - [Binary Tree Inorder Traversal](#binary-tree-inorder-traversal)
      - [Evaluate Reverse Polish Notation](#evaluate-reverse-polish-notation)
      - [](#)
    - [Hash Maps](#hash-maps)
      - [205. Isomorphic Strings](#205-isomorphic-strings)
      - [290. Word Pattern](#290-word-pattern)
      - [Group Anagrams](#group-anagrams)
      - [438. Find All Anagrams in a String](#438-find-all-anagrams-in-a-string)
      - [974. Subarray Sums Divisible by K](#974-subarray-sums-divisible-by-k)
    - [Modified Binary Search](#modified-binary-search)
      - [278. First Bad Version](#278-first-bad-version)
      - [2529. Maximum Count of Positive Integer and Negative Integer](#2529-maximum-count-of-positive-integer-and-negative-integer)
      - [33. Search in Rotated Sorted Array](#33-search-in-rotated-sorted-array)
      - [153. Find Minimum in Rotated Sorted Array](#153-find-minimum-in-rotated-sorted-array)
      - [162. Find Peak Element](#162-find-peak-element)
    - [Top K Elements](#top-k-elements)
      - [堆](#堆)
      - [703. Kth Largest Element in a Stream](#703-kth-largest-element-in-a-stream)
      - [215. Kth Largest Element in an Array](#215-kth-largest-element-in-an-array)
      - [973. K Closest Points to Origin](#973-k-closest-points-to-origin)
      - [347. Top K Frequent Elements](#347-top-k-frequent-elements)
      - [358. Rearrange String k Distance Apart](#358-rearrange-string-k-distance-apart)
    - [Sliding Window](#sliding-window)
      - [239. Sliding Window Maximum](#239-sliding-window-maximum)
      - [480. Sliding Window Median](#480-sliding-window-median)
    - [Two Heaps](#two-heaps)
      - [1985. Find the Kth Largest Integer in the Array](#1985-find-the-kth-largest-integer-in-the-array)
      - [4. Median of Two Sorted Arrays](#4-median-of-two-sorted-arrays)
      - [378. Kth Smallest Element in a Sorted Matrix](#378-kth-smallest-element-in-a-sorted-matrix)
        - [大根堆](#大根堆)
        - [二分搜索（最优性能）](#二分搜索最优性能)
    - [K-way merge](#k-way-merge)
      - [Top K Frequent Elements](#top-k-frequent-elements)
    - [Merge Intervals](#merge-intervals)
      - [Kth Smallest Element in a Sorted Matrix](#kth-smallest-element-in-a-sorted-matrix)
    - [Backtracking](#backtracking)
      - [78. Subsets](#78-subsets)
      - [90. Subsets II](#90-subsets-ii)
      - [39. Combination Sum](#39-combination-sum)
      - [40. Combination Sum II](#40-combination-sum-ii)
      - [113. Path Sum II](#113-path-sum-ii)
      - [131. Palindrome Partitioning](#131-palindrome-partitioning)
      - [22. Generate Parentheses](#22-generate-parentheses)
      - [17. Letter Combinations of a Phone Number](#17-letter-combinations-of-a-phone-number)
      - [1079. Letter Tile Possibilities](#1079-letter-tile-possibilities)
      - [79. Word Search](#79-word-search)
    - [Greedy](#greedy)
      - [455. Assign Cookies](#455-assign-cookies)
      - [Jump Game](#jump-game)
      - [Jump Game II](#jump-game-ii)
      - [Queue Reconstruction by Height](#queue-reconstruction-by-height)
      - [Non-overlapping Intervals](#non-overlapping-intervals)
      - [Gas Station](#gas-station)
    - [DFS](#dfs)
      - [Symmetric Tree](#symmetric-tree)
      - [226. Invert Binary Tree](#226-invert-binary-tree)
      - [1079. Letter Tile Possibilities](#1079-letter-tile-possibilities-1)
      - [104. Maximum Depth of Binary Tree](#104-maximum-depth-of-binary-tree)
      - [94. Binary Tree Inorder Traversal](#94-binary-tree-inorder-traversal)
      - [207. Course Schedule](#207-course-schedule)
        - [拓扑法](#拓扑法)
      - [Binary Tree Right Side View](#binary-tree-right-side-view)
      - [Clone Graph](#clone-graph)
      - [Number of Islands](#number-of-islands)
      - [Lowest Common Ancestor of a Binary Search Tree](#lowest-common-ancestor-of-a-binary-search-tree)
      - [Lowest Common Ancestor of a Binary Tree](#lowest-common-ancestor-of-a-binary-tree)
    - [BFS](#bfs)
      - [993. Cousins in Binary Tree](#993-cousins-in-binary-tree)
      - [Binary Tree Right Side View](#binary-tree-right-side-view-1)
      - [Binary Tree Level Order Traversal](#binary-tree-level-order-traversal)
      - [Binary Tree Zigzag Level Order Traversal](#binary-tree-zigzag-level-order-traversal)
      - [](#-1)
    - [Dynamic Plan](#dynamic-plan)
      - [Climbing Stairs](#climbing-stairs)
      - [Unique Paths](#unique-paths)
      - [Coin Change](#coin-change)
      - [House Robber](#house-robber)
      - [Edit Distance](#edit-distance)
    - [Cyclic Sort](#cyclic-sort)
      - [Missing Number](#missing-number)
      - [Set Mismatch](#set-mismatch)
      - [Find All Numbers Disappeared in an Array](#find-all-numbers-disappeared-in-an-array)
      - [Find the Duplicate Number](#find-the-duplicate-number)
      - [](#-2)
    - [Union find](#union-find)
      - [Find if Path Exists in Graph](#find-if-path-exists-in-graph)
      - [Number of Islands](#number-of-islands-1)
    - [Out of Question](#out-of-question)
      - [Majority Element](#majority-element)
      - [](#-3)



# Solution
### Two Pointers

#### Valid Palindrome
```java
// Use built-in replaceAll
class Solution {
    public boolean isPalindrome(String s) {
        s = s.toLowerCase().replaceAll("[^a-zA-Z0-9]", "");

        int forward = 0;
        int backward = s.length() - 1;

        while (backward > forward) {
            if (s.charAt(forward) != s.charAt(backward)) {
                return false;
            }
            forward++;
            backward--;
        }

        return true;
    }
}
```

```java
// Self implemented support fns
class Solution {
    public boolean isPalindrome(String s) {
        char[] charArray = s.toCharArray();
        int forward = 0;
        int backward = charArray.length - 1;

        while (backward > forward) {
            // Skip non-alphanumeric characters from the beginning
            while (forward < charArray.length && !isAlphanumeric(charArray[forward])) {
                forward++;
            }
            
            // Skip non-alphanumeric characters from the end
            while (backward >= 0 && !isAlphanumeric(charArray[backward])) {
                backward--;
            }

            // Compare characters (case-insensitive)
            if (forward < charArray.length && backward >= 0 && toLowerCase(charArray[forward]) != toLowerCase(charArray[backward])) {
                return false;
            }
            forward++;
            backward--;
        }

        return true;
    }

    private boolean isAlphanumeric(char c) {
        return (c >= 'a' && c <= 'z') 
            || (c >= 'A' && c <= 'Z') 
            || (c >= '0' && c <= '9');
    }

    private char toLowerCase(char c) {
        if (c >= 'A' && c <= 'Z') {
            // Convert uppercase to lowercase by adding the ASCII offset
            return (char) (c + 'a' - 'A');
        }
        return c;
    }
}
```

#### 680. Valid Palindrome II

```java
/**
 * Naive one based on Valid Palindrome I
 * 
 * 
 * */
class Solution {
    public boolean validPalindrome(String s) {
        int left = 0;
        int right = s.length() - 1;

        while (left < right) {
            // Allow skip once.
            if (s.charAt(left) != s.charAt(right)) {
                return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
            }
            left++;
            right--;
        }

        return true;
    }

    private boolean isPalindrome(String s, int left, int right) {
        while (left < right) {
            if (s.charAt(left) != s.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
```

#### Closest Sum
```java
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int begin = 0;
        int end = numbers.length - 1;

        while (begin < end) {
            int sum = numbers[begin] + numbers[end];
            if (sum == target) {
                return new int[] {begin + 1, end + 1};
            }

            if (sum > target) {
                end--;
            } else {
                begin++;
            }
        }

        return null;
    }
}
```

```java
// BF
class Solution {
    public int[] twoSum(int[] nums, int target) {
        for(int i=1;i<nums.length;i++)
        {
            for(int j=i;j<nums.length;j++)
            {
                if(nums[j-i]+nums[j]==target)
                {
                    return new int[]{j-i,j};
                }
            }
        }
        return null;
        
    
    }
}
```

```java
// HashMap
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];

            if (map.containsKey(complement)) {
                return new int[] {i, map.get(complement)};
            }

            map.put(nums[i], i);
        }

        return null;
    }
}
```

#### 3Sum
```java
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        // Note: B-I sort 
        Arrays.sort(nums);
        List<List<Integer>> ret = new ArrayList<>();

        int n = nums.length;

        for (int i = 0; i < n - 2; i++) {
            // Skip duplicates
            if (i > 0 && nums[i] == nums[i - 1]) { continue;}

            int begin = i + 1;
            int end = n - 1;
            // 如果是要求sum为value，这里可以做修改适配
            int target = -nums[i];

            while (begin < end) {
                int sum = nums[begin] + nums[end];
                if (sum == target) {
                    ret.add(Arrays.asList(nums[i], nums[begin], nums[end]));
                    // Skip duplicates
                    while (begin < end && nums[begin] == nums[begin + 1]) {
                        begin++;
                    }
                    while (begin < end && nums[end] == nums[end - 1]) {
                        end--;
                    }

                    begin++;
                    end--;
                } else if (sum < target) {
                    begin++;
                } else {
                    end--;
                }
            }
            
        }

        return ret;
    }
}

```

#### Best Time to Buy and Sell Stock
> 用双指针 O(n^2) 太高。

```java
class Solution {
    public int maxProfit(int[] prices) {
        int maxProfit = 0;
        // 可以代表在i天卖出时可能得最大收益
        int curProfit = 0;

        for (int i = 1; i < prices.length; i++) {
            int interval = prices[i] - prices[i - 1];
            // 如果为负，说明i是一个低价，低到在其之前任何一天买入在i卖出都是亏的
            // 所以it's better to start over at i
            curProfit = Math.max(0, interval + curProfit);
            maxProfit = Math.max(curProfit, maxProfit);
        }

        return maxProfit;
    }
}
```


#### 209. Minimum Size Subarray Sum
```java
class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int left = 0;
        int right = 0;
        int sum = 0;
        int minLength = Integer.MAX_VALUE;

        for (; right < nums.length; right++) {
            sum += nums[right];
            // 只有在sum大于等于过target时才记录minLength
            // 如果全程都没有大于等于过，需要最后将minLength处理为0
            boolean needUpdate = false;

            while (sum >= target) {
                sum -= nums[left];
                left++;
                needUpdate = true;
            }

            if (needUpdate) {
                minLength = Math.min(minLength, right - left + 2);
            }
        }

        return minLength == Integer.MAX_VALUE ? 0 : minLength;
    }
}
```

#### 3. Longest Substring Without Repeating Characters
```java
class Solution {
    public int lengthOfLongestSubstring(String s) {
        int len = s.length();
        int maxLength = 0;
        Map<Character, Integer> map = new HashMap<>();
        int left = 0;

        for (int right = 0; right < len; right++) {
            char currentChar = s.charAt(right);
            
            // 如果当前子字符串中没有看到当前字符
            // 或者它出现在当前左指针之前，它是当前子字符串的一部分。
            if (map.getOrDefault(currentChar, -1) < left) {
                maxLength = Math.max(maxLength, right - left + 1);
            } else {
                // 如果该字符已被看到并且在当前子字符串中，
                // 将左指针更新到该字符最后一次出现后的位置。
                left = map.get(currentChar) + 1;
            }
            
            map.put(currentChar, right);
        }

        return maxLength;
    }
}
```


#### 904. Fruit Into Baskets
> 内核: 找一个最长的仅有两种元素组成的子串

```java
// 基于最长连续水果类型的解法
class Solution {
    public int totalFruit(int[] fruits) {
        int maxFruits = 0;           // Initialize the maximum number of fruits to be collected.
        int lastFruit = -1;          // Type of the last fruit in the second basket.
        int secondLastFruit = -1;    // Type of the last fruit in the first basket.
        int lastFruitCount = 0;      // Number of contiguous fruits of the last type.
        int currentMax = 0;          // Current maximum number of fruits.

        for (int fruit : fruits) {
            if (fruit == secondLastFruit || fruit == lastFruit) {
                // If the current fruit is the same as one of the fruits in the baskets, 
                // add it to the currentMax because it can be collected.
                currentMax++;
            } else {
                // If the current fruit is different from the fruits in the baskets,
                // we need to start collecting a new type of fruit. In this case, 
                // we consider the last fruit count plus the current fruit as the new 
                // maximum, and reset the currentMax.
                currentMax = lastFruitCount + 1;
            }

            if (fruit == lastFruit) {
                // If the current fruit is the same as the last fruit, increment the 
                // count of contiguous fruits of this type.
                lastFruitCount++;
            } else {
                // If the current fruit is different from the last fruit, it becomes 
                // the new last fruit, and we reset the last fruit count to 1.
                lastFruitCount = 1;
                secondLastFruit = lastFruit;
                lastFruit = fruit;
            }

            // Update the maximum number of fruits that can be collected.
            maxFruits = Math.max(maxFruits, currentMax);
        }

        return maxFruits;  // Return the maximum number of fruits that can be collected.
    }
}
```

```java
// 基于sliding windows的解法（Recommended）
class Solution {
    public int totalFruit(int[] fruits) {
        Map<Integer, Integer> map = new HashMap<>();  // Create a HashMap to store fruit counts.
        int left = 0;  // Initialize the left pointer for the sliding window.
        int right = 0;  // Initialize the right pointer for the sliding window.
        int len = fruits.length;  // Get the length of the input array.
        int ret = 0;

        for (; right < len; right++) {
            map.put(fruits[right], map.getOrDefault(fruits[right], 0) + 1);

            // 从left端逐个移除fruit
            while (map.size() > 2) {
                // map中减少该水果数量
                map.put(fruits[left], map.get(fruits[left]) - 1);
                // 如果减少到0了，剔除该键值对
                // 说明当前篮子可以装入新的水果种类
                if (map.get(fruits[left]) == 0) {
                    map.remove(fruits[left]);
                }

                left++;
            }

            ret = Math.max(ret, right - left + 1);
        }

        return ret;
    }
}
```

#### 567. Permutation in String
> 1. 用toCharArray代替charAt，提高速度
> 2. 只构建一次count_s2，然后每次循环用滑动窗口更新改数组


```java
class Solution {
    public boolean checkInclusion(String s1, String s2) {
        int len_s1 = s1.length();
        int len_s2 = s2.length();

        char[] char_s1 = s1.toCharArray();
        char[] char_s2 = s2.toCharArray();
        
        if (len_s1 > len_s2) {
            return false;
        }

        int[] count_s1 = new int[26];
        int[] count_s2 = new int[26];
        
        // Initialize the count_s1 and the first window in s2
        for (int i = 0; i < len_s1; i++) {
            count_s1[char_s1[i] - 'a']++;
            count_s2[char_s2[i] - 'a']++;
        }
        
        // 优化后方案： 只构建一次count_s2，然后每次循环用滑动窗口更新改数组
        for (int i = 0; i < len_s2 - len_s1; i++) {
            if (isSameArr(count_s1, count_s2)) {
                return true;
            }

            // Key!!!
            // 滑动一格后将滑出的char数量--，滑进的char数量++即可
            count_s2[char_s2[i] - 'a']--;
            count_s2[char_s2[i + len_s1] - 'a']++;
        }
        
        // 被优化前的：每次循环都重新构建count_s2数组
        // for (int i = 0; i <= len_s2 - len_s1; i++) {
        //     int[] count_s2 = new int[26];
        //     for (int j = 0; j < len_s1; j++) {
        //         count_s2[char_s2[i+j] - 'a']++;
        //     }

        //     if (isSameArr(count_s1, count_s2)) {
        //         return true;
        //     }
        // }

        // Check the last window
        return isSameArr(count_s1, count_s2);
    }

    private boolean isSameArr(int[] arrA, int[] arrB) {
        for (int i = 0; i < arrA.length; i++) {
            if (arrA[i] != arrB[i]) {
                return false;
            }
        }

        return true;
    }
}
```

#### 1493. Longest Subarray of 1's After Deleting One Element
```java
// 手动记录zero_idx
class Solution {
    public int longestSubarray(int[] nums) {
        int len = nums.length;
        int left = 0;
        int right = 0;
        int zero_idx = 0;
        int zero_count = 0;
        int ret = 0;

        for (; right < len; right++) {
            if (nums[right] == 0) {
                if (zero_count > 0) {
                    left = zero_idx + 1;
                    zero_idx = right;
                } else {
                    zero_idx = right;
                    zero_count++;
                }
            }

            ret = Math.max(ret, right - left);
        }

        return ret;
    }
}
```


```java
// 不记录zero_idx, 让left递增直到zero_idx
class Solution {
    public int longestSubarray(int[] nums) {
        int len = nums.length;
        int left = 0;
        int right = 0;
        int zero_count = 0;
        int ret = 0;

        for (; right < len; right++) {
            if (nums[right] == 0) {
                zero_count++;

                while (zero_count > 1) {
                    if (nums[left] == 0) {
                        zero_count--;
                    }
                    left++;
                }
            }

            ret = Math.max(ret, right - left);
        }

        return ret;

    }
}
```


#### Longest Consecutive Sequence
```java
/**
 * 128. Longest Consecutive Sequence
 * 问题描述：
 * 给定一个未排序的整数数组 nums，返回最长连续元素序列的长度。
 * 
 * 要求算法的时间复杂度为 O(n)。
 * 
 * 
 * 思路：
 * 使用 HashSet 存储数组元素，以便进行快速查找。
 * 遍历数组中的每个元素，对于每个元素 x，检查 x-1 是否在 HashSet 中，如果不在，则 x 是一个连续序列的起点。
 * 从起点 x 开始向右扩展，直到不在 HashSet 中为止，更新最长连续序列的长度。
 */
class Solution {
    
    /**
     * 返回最长连续元素序列的长度。
     * 
     * @param nums 未排序的整数数组
     * @return 最长连续元素序列的长度
     */
    public int longestConsecutive(int[] nums) {
        // 将数组转换为 HashSet，以便进行快速查找
        Set<Integer> numSet = new HashSet<>();
        for (int num : nums) {
            numSet.add(num);
        }

        int best = 0;

        for (int x : numSet) {
            // 如果 x-1 不在 HashSet 中，说明 x 是一个序列的起点
            if (!numSet.contains(x - 1)) {
                int y = x + 1;
                // 向右扩展，直到不在 HashSet 中为止
                while (numSet.contains(y)) {
                    y++;
                }
                // 更新最长连续序列的长度
                best = Math.max(best, y - x);
            }
        }

        return best;
    }
}

```


### Interval

#### 986. Interval List Intersections

- `List<int[]>` 存储结果，`.toArray(new int[result.size()][])` 返回结果处理
- 双指针指向第一维，用于选取interval
- 循环条件是任一指针遍历到最后一个interval
- 通过两组start，end来截取intersection的start，end
- 判断是否加入结果
- 根据end大小判断哪个指针跳入下个interval

```java
class Solution {
    public int[][] intervalIntersection(int[][] firstList, int[][] secondList) {
        // Create a list to store the result intervals
        List<int[]> result = new ArrayList<>();
        
        // Initialize two pointers, one for each input list
        int i = 0, j = 0;

        // Iterate through both lists
        while (i < firstList.length && j < secondList.length) {
            // Get the start and end points of the current intervals in both lists
            int start1 = firstList[i][0];
            int end1 = firstList[i][1];
            int start2 = secondList[j][0];
            int end2 = secondList[j][1];

            // Find the intersection of the two intervals
            int intersectionStart = Math.max(start1, start2);
            int intersectionEnd = Math.min(end1, end2);

            // If there is an intersection (i.e., valid interval), add it to the result
            if (intersectionStart <= intersectionEnd) {
                result.add(new int[]{intersectionStart, intersectionEnd});
            }

            // Move the pointer that points to the interval with the smaller endpoint
            if (end1 < end2) {
                i++; // Move the pointer for the first list
            } else {
                j++; // Move the pointer for the second list
            }
        }

        // Convert the result list to a 2D array and return it as the final result
        return result.toArray(new int[result.size()][]);
    }
}

```

#### 57. Insert Interval

- left, right的初始取值应该直接用newInterval，可以适配一些特殊场景如：intervals = [], newInterval = [5,7]
- hasInserted标记， 用于在`第一次right < start` 或 `newInterval[1] >= intervals的最右端`时添加overlap interval
- 存在overlap的场景处理

```java
class Solution {
    public int[][] insert(int[][] intervals, int[] newInterval) {        
        
        List<int[]> ret = new ArrayList<>();

        // 注意初始化取值，对特殊intervals也能适配
        int left = newInterval[0];
        int right = newInterval[1];

        boolean hasInserted = false;

        for (int i = 0; i < intervals.length; i++) {
            int start = intervals[i][0];
            int end = intervals[i][1]; 

            if (left > end) {
                // 当前interval 完全在 newInterval 左边
                ret.add(intervals[i]);
            } else if (right < start) {
                // 当前interval 完全在 newInterval 右边
                if (!hasInserted) {
                    // 如果有这种interval，先添加overlap的interval
                    // 用标记防止对每个这种interval都插入overlap的interval
                    // 即是在仅遇到第一个时添加
                    ret.add(new int[] {left, right});
                    hasInserted = true;
                }
                ret.add(intervals[i]);
            } else {
                // 存在overlap的场景
                left = Math.min(left, start);
                right = Math.max(right, end);
            }

        }

        if (!hasInserted) {
            ret.add(new int[] {left, right});
        }

        return ret.toArray(new int[ret.size()][]);
    }
}
```

#### 56. Merge Intervals

- 根据start排序整个二维数组
- 用currentInterval来跨越多个overlap interval，初始值为intervals[0]
- 循环从i=1开始

```java
class Solution {
    public int[][] merge(int[][] intervals) {
        if (intervals.length <= 1) {
            return intervals; // No merging needed for 0 or 1 interval.
        }

        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0])); // Sort by start times.

        List<int[]> ret = new ArrayList<>();
        int[] currentInterval = intervals[0];

        for (int i = 1; i < intervals.length; i++) {
            int currentEnd = currentInterval[1];
            int nextStart = intervals[i][0];
            int nextEnd = intervals[i][1];

            if (currentEnd >= nextStart) {
                // Intervals overlap or are adjacent, so we merge them.
                currentInterval[1] = Math.max(currentEnd, nextEnd);
            } else {
                // Intervals don't overlap, so we add the current interval to the result and update it to the next interval.
                ret.add(currentInterval);
                currentInterval = intervals[i];
            }
        }

        // Add the last ret interval.
        ret.add(currentInterval);

        return ret.toArray(new int[ret.size()][]);
    }
}


```


### Linked List Manipulation
#### 24. Swap Nodes in Pairs

- 用prev, left, right, after来做swap
- Extreme case: one-element and empty list
- Boundary: after is null circumstances.

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
    public ListNode swapPairs(ListNode head) {

        if (null == head || null == head.next) {
            return head;
        }
        
        ListNode left = head;
        ListNode right = left.next;

        ListNode new_head = right;

        ListNode prev = head;
        ListNode after = head;

        while (null != left && null != right) {
            // Update after
            after = right.next;

            // Swap ref
            prev.next = right;
            right.next = left;
            left.next = after;

            // Update prev and left
            prev = left;
            left = after;

            // In case that `after` is null casuing after.next NPE
            if (null != after) {
                right = after.next;
            } else {
                right = null;
            }
            
        }

        return new_head;
    }
}
```

#### 234. Palindrome Linked List

1. 遍历两次，辅助int[]
- 用array记录前半的val

```java
class Solution {
    public boolean isPalindrome(ListNode head) {
        // Count the number of nodes in the linked list
        int count = 0;
        ListNode node = head;
        while (node != null) {
            count++;
            node = node.next;
        }
        
        // Create an array to store the first half of the values
        int[] arr = new int[count / 2];
        
        // Reset the node to the head of the linked list
        node = head;
        
        // Store the values of the first half in the array
        for (int i = 0; i < arr.length; i++) {
            arr[i] = node.val;
            node = node.next;
        }
        
        // If the total count is odd, move to the next node
        if (count % 2 != 0) {
            node = node.next;
        }
        
        // Compare the values in the array with the second half of the linked list
        for (int i = arr.length - 1; i >= 0; i--) {
            if (node.val != arr[i]) {
                return false;
            }
            node = node.next;
        }
        
        return true;
    }
}

```

2. 遍历一次快慢指针，stack辅助

- 快慢指针
- 快慢指针处理奇数list中间点的方式

```java
class Solution {
    public boolean isPalindrome(ListNode head) {
        Stack<Integer> stack = new Stack<>();
        ListNode node = head;

        ListNode slow = head;
        ListNode fast = head;

        // Find the middle of the linked list
        while (fast != null && fast.next != null) {
            stack.push(slow.val);
            slow = slow.next;
            fast = fast.next.next;
        }

        
        if (null != fast) { // List有奇数个node, slow跳过中间点
            slow = slow.next;
        }

        while (null != slow) {
            if (slow.val != stack.pop()) {
                return false;
            }
            slow = slow.next;
        }

        return true;
    }
}
```

1. 遍历一次快慢指针, 后半reverse

- `reverseList` 方法可复用

```java
class Solution {
    public boolean isPalindrome(ListNode head) {
        if (head == null || head.next == null) {
            return true; // An empty list or a list with one node is considered a palindrome.
        }

        ListNode slow = head;
        ListNode fast = head;

        // Find the middle of the linked list
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Reverse the second half of the linked list
        ListNode secondHalf = reverseList(slow);

        // Compare the first half and the reversed second half
        ListNode firstHalf = head;
        while (secondHalf != null) {
            if (firstHalf.val != secondHalf.val) {
                return false;
            }
            firstHalf = firstHalf.next;
            secondHalf = secondHalf.next;
        }

        return true;
    }

    private ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode current = head;

        while (current != null) {
            ListNode next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        return prev;
    }
}

```

#### 92. Reverse Linked List II

- index从1开始算，left和right都是指index

```java
class Solution {
    public ListNode reverseBetween(ListNode head, int left, int right) {
        if (head == null || left == right) {
            return head;
        }

        ListNode dummy = new ListNode(-1); // Create a dummy node to simplify the code.
        dummy.next = head;
        ListNode prev = dummy;

        // Move to the node just before the left position.
        for (int i = 1; i < left; i++) {
            prev = prev.next;
        }

        // Initialize pointers for reversing the sublist.
        ListNode current = prev.next;
        ListNode next = null;

        // Reverse the sublist from left to right.
        for (int i = left; i < right; i++) {
            next = current.next;
            current.next = next.next;
            next.next = prev.next;
            prev.next = next;
        }

        return dummy.next;
    }
}
```

#### 61. Rotate List

- 将链表的尾部与头部相连，形成一个环形链表。
- 计算实际旋转的位置。由于旋转是向右的，所以实际旋转的位置是 len - k % len，其中 len 是链表的长度。这是因为如果k大于链表的长度，旋转k次等于旋转k % len次。
- 找到新的链表头部和尾部。遍历链表，找到原链表的新尾部，它是位于第 len - k % len - 1 个位置的节点，然后新的头部是新尾部的下一个节点。
- 断开环形链表，使其变成一个常规链表。将新尾部的next指针设置为None，同时将原链表的头部指针设置为新头部。
- > Note: 将count初始值设为1，遍历停止条件为 null != node.next 的方式来获取长度并保证 node不为null

```java
class Solution {
    public ListNode rotateRight(ListNode head, int k) {
        if (null == head || k == 0) {
            return head;
        }

        // 计算链表长度
        int len = 1;
        ListNode node = head;
        while (null != node.next) {
            len++;
            node = node.next;
        }
        
        // 将链表的尾部与头部相连，形成一个环形链表
        node.next = head;

        // 计算实际旋转位置
        k %= len;

        // 找到新的链表头尾
        ListNode new_tail = head;
        for (int i = 0; i < len - k - 1; i++) {
            new_tail = new_tail.next;
        }
        ListNode new_head = new_tail.next;

        // 断开环形链表
        new_tail.next = null;

        return new_head;

    }
}
```

#### 328. Odd Even Linked List
- 需要一个`evenHead`索引到even list的头结点
- 用两个指针odd和even，odd的next先指向even的next，然后odd指针指向自己的next即已经链接上的下一个odd节点。
- 对even做同样处理
- 跳出边界后，将odd.next指向evenHead

```java
class Solution {
    public ListNode oddEvenList(ListNode head) {
        if (null == head || null == head.next || null == head.next.next) {
            return head;
        }

        ListNode odd = head;
        ListNode even = head.next;
        ListNode evenHead = even;

        while (null != even && null != even.next) {
            odd.next = even.next;
            odd = odd.next;
            even.next = odd.next;
            even = even.next;
        }

        odd.next = evenHead;

        return head;

    }
}
```

#### 143. Reorder List
- 快慢指针确定中点middle（选用偶数靠左版本，因为是链表取左操作空间多余右）
- 新建指针second指向middle.next, 然后断开middle与middle.next。second即后半部分。
- 翻转second后半部分-> reversed
- 交错合并head和reversed

> 暂存middle.next节点后断开middle和其next非常重要，否则head开头链表还会带有middle以后得节点（在reverse操作后虽然也会断开，但会使边界判断非常麻烦，先断开再做翻转操作和合并，减少心智负担）

```java
class Solution {
    public void reorderList(ListNode head) {
        

        ListNode fast = head;
        ListNode slow = head;
        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        ListNode middleRight = slow.next;
        slow.next = null;

        ListNode secondReversedHalf = reverseList(middleRight);


        head = mergeAlternately(head, secondReversedHalf);

    }

    private ListNode reverseList(ListNode node) {
        ListNode prev = null;

        while (null != node) {
            ListNode next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return prev;
    }

    private ListNode mergeAlternately(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);
        ListNode current = dummy;

        while (l1 != null && l2 != null) {
            // Link a node from the first list
            current.next = l1;
            l1 = l1.next;
            current = current.next;

            // Link a node from the second list
            current.next = l2;
            l2 = l2.next;
            current = current.next;
        }

        // If one list is longer than the other, link the remaining nodes
        if (l1 != null) {
            current.next = l1;
        }
        if (l2 != null) {
            current.next = l2;
        }

        return dummy.next;
    }
}
```

### Stack
#### Valid Parentheses
```java
/**
 * 20. Valid Parentheses
 * 
 * 问题描述：
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 * 1. 左括号必须用相同类型的右括号闭合。
 * 2. 左括号必须以正确的顺序闭合。
 * 
 * 示例：
 * 输入：s = "()"
 * 输出：true
 * 
 * 输入：s = "()[]{}"
 * 输出：true
 * 
 * 输入：s = "(]"
 * 输出：false
 * 
 * 输入：s = "([)]"
 * 输出：false
 * 
 * 输入：s = "{[]}"
 * 输出：true
 * 
 * 思路：
 * 使用栈来处理括号匹配问题，遇到左括号就入栈，遇到右括号就出栈，并检查匹配关系。
 * 如果遇到右括号时栈为空或者与栈顶元素不匹配，则字符串无效。
 */
class Solution {
    /**
     * 判断给定字符串是否是有效的括号组合
     *
     * @param s 给定的字符串
     * @return 如果是有效的括号组合，返回 true；否则，返回 false。
     */
    public boolean isValid(String s) {
        // 使用栈来存储左括号
        Deque<Character> stack = new ArrayDeque<>();

        // 遍历字符串中的每个字符
        for (char c : s.toCharArray()) {
            // 如果是左括号，入栈
            if (c == '(' || c == '[' || c == '{') {
                stack.offerLast(c);
                continue;
            }

            // 如果是右括号，判断栈是否为空
            if (stack.isEmpty()) {
                return false;
            }

            // 出栈并检查匹配关系
            char popped = stack.pollLast();
            if ((c == ')' && popped != '(')
                    || (c == ']' && popped != '[')
                    || (c == '}' && popped != '{')) {
                return false;
            }
        }

        // 最后检查栈是否为空
        return stack.isEmpty();
    }
}
```

#### Binary Tree Inorder Traversal
```java
/**
 * 94. Binary Tree Inorder Traversal
 * 二叉树中序遍历
 *
 * 问题描述：
 * 给定二叉树的根节点，返回中序遍历结果。
 *
 * 思路：
 * 使用栈辅助进行中序遍历，从根节点开始，将节点及其左子树逐个入栈，
 * 然后出栈并访问，再转向右子树。
 * 
 * Note: inorder, 中序遍历首先遍历左子树，然后访问根结点，最后遍历右子树
 */
class Solution {
    /**
     * 中序遍历二叉树
     *
     * @param root 二叉树的根节点
     * @return 中序遍历结果
     */
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        if (root == null) return res;

        Stack<TreeNode> stack = new Stack<>();

        TreeNode node = root;
        while (node != null || !stack.isEmpty()) {
            // 将节点及其左子树逐个入栈
            while (node != null) {
                stack.push(node);
                node = node.left;
            }

            // 出栈并访问节点
            node = stack.pop();
            res.add(node.val);

            // 转向右子树
            node = node.right;
        }

        return res;
    }
}
```


#### Evaluate Reverse Polish Notation
```java
/**
 * 150. Evaluate Reverse Polish Notation
 * 逆波兰表达式求值
 * 
 * 问题描述：
 * 给定逆波兰表达式，求其值。
 * 
 * 思路：
 * 使用栈来处理逆波兰表达式。遍历表达式，如果是操作数，入栈；如果是运算符，弹出栈顶的两个操作数，进行运算，将结果压入栈。
 * 
 */
class Solution {
    /**
     * 计算逆波兰表达式的值
     * 
     * @param tokens 逆波兰表达式的字符串数组
     * @return 计算结果
     */
    public int evalRPN(String[] tokens) {
        Deque<Integer> stack = new ArrayDeque<>();

        for (String token : tokens) {
            if (!isOperator(token)) {
                stack.offerLast(Integer.valueOf(token));
            } else {
                int num2 = stack.pollLast();
                int num1 = stack.pollLast();
                int temp;

                // 根据运算符进行计算
                if (token.equals("+")) {
                    temp = num1 + num2;
                } else if (token.equals("-")) {
                    temp = num1 - num2;
                } else if (token.equals("*")) {
                    temp = num1 * num2;
                } else {
                    temp = num1 / num2;
                }

                stack.offerLast(temp);
            }
        }

        return stack.pollLast();
    }

    /**
     * 判断字符串是否是运算符
     * 
     * @param str 输入字符串
     * @return 是否是运算符
     */
    private boolean isOperator(String str) {
        return str.equals("+") 
            || str.equals("-") 
            || str.equals("*") 
            || str.equals("/");
    }
}

```

####
```java

```











### Hash Maps
#### 205. Isomorphic Strings
- 双map映射
- 如果只有单向检查，如"badc"和"baba"就会被认定为true

```java
// 用双Map映射
class Solution {
    public boolean isIsomorphic(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }

        Map<Character, Character> sToTMap = new HashMap<>();
        Map<Character, Character> tToSMap = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            char sChar = s.charAt(i);
            char tChar = t.charAt(i);

            if (sToTMap.containsKey(sChar)) {
                if (sToTMap.get(sChar) != tChar) {
                    return false;
                }
            } else {
                sToTMap.put(sChar, tChar);
            }

            if (tToSMap.containsKey(tChar)) {
                if (tToSMap.get(tChar) != sChar) {
                    return false;
                }                
            } else {
                tToSMap.put(tChar, sChar);
            }
        }

        return true;
    }
}
```

- int[] 配合 value计数法
- 维护两个计数：sid，tid，分别代表sc在s中和tc在t中是第几个未映射过的char，如果map[sc] == 0 代表从未出现过的char，计入当前计数并将计数递增
- 判断sc和tc在各自的map中是否都是一样的计数

> note: int[] declare, map数组简化

```java
class Solution {
    public boolean isIsomorphic(String s, String t) {
        
        int[] smap = new int[256];
        int[] tmap = new int[256];
        
        int sid = 1;
        int tid = 1;
        
        for (int i = 0; i < s.length(); i++) {
            var sc = s.charAt(i);
            var tc = t.charAt(i);
            
            if (smap[sc] == 0) {
                smap[sc] = sid++;
            }
            if (tmap[tc] == 0) {
                tmap[tc] = tid++;
            }
            
            if (smap[sc] != tmap[tc]) {
                return false;
            }
        }
        
        return true;
    }
}
```

#### 290. Word Pattern

- 与 205. Isomorphic Strings 的计数法相似，只不过有一个arr是String的arr，所以用不了int[]代替map，那个用map就好

> String的split()方法，注意返回值是String的Arr

```java
class Solution {
    public boolean wordPattern(String pattern, String s) {

        String[] sArr = s.split(" ");

        char[] pArr = pattern.toCharArray();

        if (sArr.length != pArr.length) {
            return false;
        }
        
        int[] pmap = new int[256];
        Map<String, Integer> smap = new HashMap<>();
        
        int pid = 1;
        int sid = 1;
        
        for (int i = 0; i < pArr.length; i++) {
            if (pmap[pArr[i]] == 0) {
                pmap[pArr[i]] = pid++;
            }
            
            if (!smap.containsKey(sArr[i])) {
                smap.put(sArr[i], sid++);
            }
            
            if (pmap[pArr[i]] != smap.get(sArr[i])) {
                return false;
            }
        }
        
        return true;
    }
}
```

#### Group Anagrams
```java
/**
 * 49. Group Anagrams
 * 
 * 问题描述：
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * 
 * 示例：
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出:
 * [
 *   ["ate","eat","tea"],
 *   ["nat","tan"],
 *   ["bat"]
 * ]
 * 
 * 思路：
 * 使用哈希表存储每个字母异位词的字符频率，然后利用哈希值作为键，将字母异位词归类。
 * 
 * 技巧：
 * - new ArrayList<>(map.values()): 用Collection直接初始化一个List(其他Collection 也行，比如Set<String> set = new HashSet<>(someList), 只能将一个list转化为set完成去重)
 * - collection.addAll(ele collections)
 */
class Solution {
    /**
     * 将字母异位词组合在一起
     * 
     * @param strs 字符串数组
     * @return 字母异位词分组
     */
    public List<List<String>> groupAnagrams(String[] strs) {
        var hashGroups = new HashMap<Integer, List<String>>();

        for (String str : strs) {
            int[] charFrequency = new int[26];

            // 计算字符频率
            for (char c : str.toCharArray()) {
                charFrequency[c - 'a']++;
            }

            // 使用哈希值作为键，将字母异位词归类
            int hash = Arrays.hashCode(charFrequency);
            hashGroups.computeIfAbsent(hash, k -> new ArrayList<>()).add(str);
        }

        // 将结果添加到最终答案中
        return new ArrayList(hashGroups.values());
    }
}

```


#### 438. Find All Anagrams in a String

- 以p的长度为窗口，在s上滑动遍历
- 用两个哈希表（可简化为int[256]）, 分别表征p的信息和滑动窗口字符串的信息，如果相等就记录当前滑动窗口左边界索引

```java
class Solution {
    public List<Integer> findAnagrams(String s, String p) {
        List<Integer> result = new ArrayList<>();
        
        if (s == null || s.length() == 0 || p == null || p.length() == 0)
            return result;
        
        // 初始化 p 的字符频率哈希表
        var pArr = p.toCharArray();
        var pMap = new int[256];
        for (char c : pArr) {
            pMap[c]++;
        }
        
        // 初始化滑动窗口的字符频率哈希表
        var sMap = new int[256];        
        // 滑动窗口
        var sArr = s.toCharArray();
        for (int i = 0; i < sArr.length; i++) {
            char currentChar = sArr[i];
            
            // 更新滑动窗口的字符频率
            sMap[currentChar]++;

            // 当窗口大小大于 p.length() 时，移除窗口最左边的字符
            if (i >= pArr.length) {
                char leftChar = sArr[i - pArr.length];
                sMap[leftChar]--;
            }
            
            // 比较哈希表
            if (Arrays.equals(pMap, sMap)) {
                result.add(i - p.length() + 1);
            }
        }
        
        return result;
    }
}
```


#### 974. Subarray Sums Divisible by K
- 前缀和，如果存在三个index的前缀和相同，说明他们两两之间都是符合条件的子数组。也就是算组合数 `C(n, 2) = n! / 2! * (n-2)! = n * (n - 1) / 2`， n是前缀和相同的index数量。
- mod和组合数计算符合条件的子数组数
-  (prefixSum % k + k) % k 可以兼容 prefixSum为负数取模的情况。负数 % k 后一定是一个绝对值小于k的负数，+k再mod，可以起到获得正mod的效果。

```java
class Solution {
    public int subarraysDivByK(int[] nums, int k) {
        // 初始化哈希表，用于记录每个前缀和对 k 取模的次数
        int[] modCount = new int[k];
        // 初始化前缀和
        int prefixSum = 0;
        // 初始化符合条件的子数组个数
        int count = 0;

        // 遍历数组
        for (int num : nums) {
            // 更新前缀和
            prefixSum += num;
            // 更新哈希表
            modCount[(prefixSum % k + k) % k]++;
        }

        // 累加符合条件的子数组个数
        for (int mod : modCount) {
            // 如果某个取模结果的次数大于 1，说明存在至少两个相同的前缀和，可以组成符合条件的子数组
            if (mod > 1) {
                // 计算组合数，n(n-1)/2
                count += mod * (mod - 1) / 2;
            }
        }

        // 加上 modCount[0]，表示前缀和本身就是 k 的倍数的情况
        count += modCount[0];

        return count;
    }
}
```

### Modified Binary Search

#### 278. First Bad Version
- 查找`第一个`等于给定值的元素 类型
```java
public class Solution extends VersionControl {
    public int firstBadVersion(int n) {
        int left = 0;
        int right = n;

        while (left < right) {
            int mid = left + (right - left) / 2;

            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }
}
```


#### 2529. Maximum Count of Positive Integer and Negative Integer
- 二分法两次找到最后一个小于0的，第一个大于0的(严格)
```java
class Solution {
    public int maximumCount(int[] nums) {
        int len = nums.length;
        
        int low = 0;
        int high = len - 1;
        if (nums[0] > 0 || nums[len - 1] < 0) {
            return len;
        }

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (nums[mid] >= 0) {
                high = mid - 1;
            } else {
                // 当找到最后一个小于target的元素时，继续向左搜索
                low = mid + 1;
            }
        }
        int firstZero = high;

        low = 0;
        high = len - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (nums[mid] <= 0) {
                low = mid + 1;
            } else {
                // 当找到第一个大于target的元素时，继续向左搜索
                high = mid - 1;
            }
        }
        int secondZero = low;

        // 注意一下索引和计数
        return Math.max(firstZero+1, len - 1 - secondZero + 1);        
    }
}
```

#### 33. Search in Rotated Sorted Array
- 确定有序的一侧： 我们首先检查数组的中点。如果中点的值大于等于数组的第一个元素，那么说明中点左侧是有序的。如果中点的值小于数组的第一个元素，那么说明中点右侧是有序的。
- 左侧有序且target落在low-mid间，搜索左侧， 否则搜索右侧
- 右侧有序且target落在mid-high间，搜索右侧，否则搜索左侧

```java
class Solution {
    public int search(int[] nums, int target) {
        int low = 0;
        int high = nums.length - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (nums[mid] == target) {
                return mid;
            }
            if (target == nums[low]) {
                return low;
            }     
            if (target == nums[high]) {
                return high;
            }                         

            if (nums[mid] >= nums[low]) {
                // 左侧有序
                if (target > nums[low] && target < nums[mid]) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            } else {
                // 右侧有序
                if (target > nums[mid] && target < nums[high]) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
        }

        return -1;
    }
}
```

#### 153. Find Minimum in Rotated Sorted Array
```java
class Solution {
    public int findMin(int[] nums) {
        int len = nums.length;
        int low = 0;
        int high = len - 1;

        // 如果当前范围已经有序，直接返回最小值
        // 处理一开始就是无旋转的升序nums
        if (nums[low] <= nums[high]) {
            return nums[low];
        }        

        while (low <= high) {
            int mid = low + (high - low) / 2;

            // 对应 [2,3,1]这种
            if (mid == len - 1) {
                return nums[mid];
            }

            if (mid > 0 && mid < len - 1 && nums[mid] < nums[mid - 1] && nums[mid] < nums[mid + 1]) {
                return nums[mid];
            }

            // 检查中间元素和右边界的关系，以确定最小值在哪一侧
            if (nums[mid] > nums[high]) {
                // 最小值在mid右侧
                low = mid + 1;
            } else {
                // 在mid左侧或则就是mid
                high = mid - 1;
            }
        }

        return -1;
    }
}
```

#### 162. Find Peak Element
```java
/**
 * 
 * 问题描述：找峰值
 * 
 * 
 * 思路：
 * 利用二分法查找峰值，不断缩小搜索范围
 * 可能有多个peak点，所以只需要`mid-1 < mid > mid+1`就可以判断为peak
 *  - else 为 mid <= mid - 1 || mid <= mid + 1
 * 注意特殊情况和两端点为峰值的情况
 */
class Solution {
    /**
     * 查找峰值元素的索引
     *
     * @param nums 给定的数组
     * @return 峰值元素的索引，如果不存在峰值则返回 -1
     */
    public int findPeakElement(int[] nums) {
        int len = nums.length;

        // 处理特殊情况
        if (len == 0)
            return -1;
        if (len == 1)
            return 0;

        int lo = 0, hi = len - 1;

        // 判断两端点是否为峰值
        if (nums[lo] > nums[lo + 1])
            return lo;
        if (nums[hi] > nums[hi - 1])
            return hi;

        // 二分法查找峰值
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;

            if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1])
                return mid;
            else if (nums[mid] <= nums[mid + 1])
                lo = mid + 1;
            else // nums[mid] <= nums[mid + 1]
                hi = mid - 1;
        }

        // 没有找到峰值
        return -1;
    }
}
```


### Top K Elements
- 排序和部分排序：快排， 堆（recommend）
- 快选
- 计数排序：适用于元素在一定范围内的情况，统计每个元素的出现次数，然后根据计数结果找出前 k 个元素。时间复杂度为 O(n + k)。

#### 堆
用优先队列获得最大堆和最小堆
- 优先队列（PriorityQueue）默认设置是一个最小堆。在最小堆中，根节点(堆顶)是堆中的最小元素。我们维护一个大小为 k 的最小堆，这样堆顶就是第 k 大的元素
- 要最大堆则需要初始化时指定比较器
```java
Queue<Integer> minHeap = new PriorityQueue<>(k); // k可以设置初始容量

// Comparator.reverseOrder() 是 Java 提供的一个静态方法，用于获取一个逆序的比较器，即最大堆的比较器
Queue<Integer> maxHeap = new PriorityQueue<>(k, Comparator.reverseOrder());
// 或者用Lambda 表达式写比较器
Queue<Integer> maxHeap = new PriorityQueue<>(k, (a, b) -> b - a);
```


#### 703. Kth Largest Element in a Stream
- 用一个最小堆来记录第k大
```java
class KthLargest {

    Queue<Integer> minHeap;
    int k;

    public KthLargest(int k, int[] nums) {
        this.k = k;
        this.minHeap = new PriorityQueue<>(k);

        for (int num : nums) {
            add(num);
        }
    }

    public int add(int val) {
        minHeap.offer(val);
        
        if (minHeap.size() > k) {
            minHeap.poll();
        }
        
        return minHeap.peek();
    }
}
```

#### 215. Kth Largest Element in an Array
- 最小堆
```java
class Solution {
    public int findKthLargest(int[] nums, int k) {
        
        PriorityQueue<Integer> queue = new PriorityQueue<>(k);
        
        for (int num : nums) {
            queue.offer(num);
            
            if (queue.size() > k) {
                queue.poll();
            }
        }
        
        return queue.peek();
    }
}
```

- 快选
```java
class Solution {
    public int findKthLargest(int[] nums, int k) {
        return quickSelect(nums, 0, nums.length - 1, k);
    }

    private int quickSelect(int[] nums, int left, int right, int k) {
        while (left <= right) {
            int pivotIndex = randomPartition(nums, left, right);

            if (pivotIndex == k - 1) {
                return nums[pivotIndex];
            } else if (pivotIndex > k - 1) {
                right = pivotIndex - 1;
            } else {
                left = pivotIndex + 1;
            }
        }

        return -1; // 这里表示没有找到，具体可以根据实际情况返回合适的值
    }

    private int randomPartition(int[] nums, int left, int right) {
        int randomIndex = left + new Random().nextInt(right - left + 1);
        swap(nums, randomIndex, right);

        int pivot = nums[right];
        int i = left - 1;

        for (int j = left; j < right; j++) {
            if (nums[j] >= pivot) {
                i++;
                swap(nums, i, j);
            }
        }

        swap(nums, i + 1, right);

        return i + 1;
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

}
```

- 快排
```java
class Solution {
    public int findKthLargest(int[] nums, int k) {
        int len = nums.length;
        quickSort(nums, 0, len - 1);
        return nums[len-k];
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    private void quickSort(int[] arr, int low, int high) {
        if(low >= high) {
            return ;
        }

        int i = low, j = high;
        
        while(i < j) {
            while(i < j && arr[j] >= arr[low]) {
            j--;
            }

            while(i < j && arr[i] <= arr[low]) {
            i++;
            }

            swap(arr, i, j);
        }

        swap(arr, low, i);

        quickSort(arr, low, i - 1);
        quickSort(arr, i + 1, high);
    }
}
```

#### 973. K Closest Points to Origin
- 本质还是经典TOP K，可以大根堆，快选，快排
- 用大根堆，可以直接重写比较器比较平方和


```java
// 大根堆变种
class Solution {
    public int[][] kClosest(int[][] points, int k) {
        var maxHeap = new PriorityQueue<int[]>(
            (a, b) -> (b[0]*b[0] + b[1]*b[1]) - (a[0]*a[0] + a[1]*a[1])
        );

        for (int[] point : points) {
            maxHeap.offer(point);
            if (maxHeap.size() > k) {
                maxHeap.poll();
            }
        }

        int[][] result = new int[k][2];
        while (k-- > 0) {
            result[k] = maxHeap.poll();
        }

        return result;
    }
}
```


#### 347. Top K Frequent Elements
- 用哈希表记录key和出现频次，然后用大根堆遍历存储map的entry。
- 重写比较器比较entry的value
- 另外一种主流解法是`桶排序`，见第二个snippet

> 关于桶排序： 基本思想是将数组划分为若干个桶，每个桶代表一定范围的数值。然后对每个桶中的元素进行排序，最后按照桶的顺序将各个桶中的元素合并起来。


```java
// 大根堆变种
class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        var map = new HashMap<Integer, Integer>();

        for (int i : nums)
            map.put(i, map.getOrDefault(i, 0) + 1);

        var maxHeap = new PriorityQueue<Map.Entry<Integer, Integer>>(
            (a, b) -> (a.getValue() - b.getValue())
        );

        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            maxHeap.offer(entry);
            if (maxHeap.size() > k)
                maxHeap.poll();
        }

        int[] result = new int[k];
        while (k-- > 0)
            result[k] = maxHeap.poll().getKey();

        return result;
    }
}
```

对于TOP k frequent这类问题，桶排序的思路可以用在统计元素频率上。
- 统计频率并放入桶中： 使用哈希表统计每个元素的频率。然后，根据频率将元素放入对应的桶中。
- 从高频到低频遍历桶： 从频率最高的桶开始遍历，依次取出桶中的元素。当取出的元素个数达到k时，就得到了前k个高频元素。

```java
// 桶排序
class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        // Step 1: 统计每个元素的频率
        var frequencyMap = new HashMap<Integer, Integer>();
        for (int num : nums) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        // Step 2: 使用桶排序，buckets[i] 存放频率为 i 的元素列表
        int n = nums.length;
        ArrayList<Integer>[] buckets = new ArrayList[n + 1];

        for (int i = 0; i <= n; i++) {
            buckets[i] = new ArrayList<>();
        }

        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            int num = entry.getKey();
            int freq = entry.getValue();
            buckets[freq].add(num);
        }

        // Step 3: 从桶的末尾开始，将元素加入结果数组，直到结果数组的长度达到 k
        int[] result = new int[k];
        int idx = 0;

        for (int i = n; i > 0 && idx < k; i--) {
            if (!buckets[i].isEmpty()) {
                for (int num : buckets[i]) {
                    result[idx++] = num;
                    if (idx == k) {
                        break;
                    }
                }
            }
        }

        return result;
    }
}
```

#### 358. Rearrange String k Distance Apart
Given a non-empty string str and an integer k, rearrange the string such that the same characters are at least distance k from each other.

All input strings are given in lowercase letters. If it is not possible to rearrange the string, return an empty string "".

给定一个非空字符串和一个整数k，重新排列该字符串，使相同的字符彼此之间至少有k个距离。

所有输入字符串都以小写字母表示。

如果无法重新排列字符串，则返回空字符串“”。

```txt
Example 1:

str = " ", k = 3

Result: "abcabc"
The same letters are at least distance 3 from each other.
```

---
- 贪心算法和大根堆
- int[] 存储char和出现次数
- 大根堆，堆顶是出现频率最高的字符
- 构建结果字符串： 从堆中取出字符，将其放入结果字符串。
- 为了确保相同字符的距离至少为k，你可以使用一个队列来存储最近放入结果字符串的字符。
  - 对每个堆顶弹出的char，在append到stringBuilder后，将其frequency减1，然后将更新后的entry加入一个队列。
  - 当这个队列的size达到k时，说明距离队首元素加入stringBuilder后已经有k-1个不同的char加入stringBuilder，此时将队首entry出队重新加入堆，如果其freq足够高仍然能处在堆顶，在下一次出堆时就能保证和上一次之间的距离为K

```java

class Solution {

    public static String rearrangeString(String str, int k) {
        if (k <= 1) {
            return str;
        }

        // 统计字符频率
        Map<Character, Integer> charFreq = new HashMap<>();
        for (char c : str.toCharArray()) {
            charFreq.put(c, charFreq.getOrDefault(c, 0) + 1);
        }

        // 创建最大堆
        PriorityQueue<Map.Entry<Character, Integer>> maxHeap = new PriorityQueue<>(
                (a, b) -> Integer.compare(b.getValue(), a.getValue())
        );
        maxHeap.addAll(charFreq.entrySet());

        // 构建结果字符串
        StringBuilder result = new StringBuilder();
        Queue<Map.Entry<Character, Integer>> queue = new LinkedList<>();

        while (!maxHeap.isEmpty()) {
            Map.Entry<Character, Integer> entry = maxHeap.poll();
            char character = entry.getKey();
            int frequency = entry.getValue();

            // 将字符加入结果字符串
            result.append(character);

            // 将字符及其频率放入队列，以便之后检查距离
            queue.offer(new AbstractMap.SimpleEntry<>(character, frequency - 1));

            if (queue.size() == k) {
                // 检查队列头部的字符是否已经满足距离要求
                Map.Entry<Character, Integer> front = queue.poll();
                if (front.getValue() > 0) {
                    maxHeap.offer(front);
                }
            }
        }

        return result.length() == str.length() ? result.toString() : "";
    }
}

```


### Sliding Window
#### 239. Sliding Window Maximum
- 单调递减队列， 队首保持当前窗口最大值
- 注意窗口初次形成时记录第一个值
- 处理后续元素时注意窗口最左的脚标

```java
class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        if(nums.length == 0 || k == 0){
            return new int[]{};
        }
        Deque<Integer> monoQueue = new ArrayDeque<>();
        int[] res = new int[nums.length - k + 1];

        // 处理前 k 个元素
        for(int i = 0; i < k; i++){
            // 将单调队列中比nums[i]小的都弹出
            while(!monoQueue.isEmpty() && monoQueue.peekLast() < nums[i]){
                monoQueue.pollLast();
            }
            // 队尾压入nums[i], 此时队列仍是单调，队尾最小
            monoQueue.offerLast(nums[i]);
        }

        // 初始化结果数组中的第一个元素，即窗口首次形成时的最大值。
        // 第一个循环中，处理了数组的前 k 个元素, 此时队首元素就是这个窗口中的最大值
        res[0] = monoQueue.peekFirst();

        // 处理剩余元素, k 开始遍历到数组末尾。
        for(int i = k; i < nums.length; i++){
            // 注意是i-k,即此次从左边移出窗口的num
            // 如果队首元素是窗口最左边的元素（即要移出窗口的元素），则将其移出队列。
            if(monoQueue.peekFirst() == nums[i-k]){
                monoQueue.pollFirst();
            }
            // 类似的保证单调递减队列并遍历后续元素
            while(!monoQueue.isEmpty() && monoQueue.peekLast() < nums[i]){
                monoQueue.pollLast();
            }
            monoQueue.offerLast(nums[i]);
            // 将队列的队首元素（即当前窗口的最大值）存入结果数组。
            res[i-k+1] = monoQueue.peekFirst();
        }

        return res;
    }
}
```

#### 480. Sliding Window Median
`median` 是有序整数列表中的中间值。
如果列表的大小为偶数，则没有中间值。所以中位数就是这两个中间值的平均值。

给你一个整数数组数字和一个整数k。
有一个大小为k的滑动窗口，它从数组的最左边移动到最右边。
你只能在窗口中看到k个数字。
每次滑动窗口向右移动一个位置。

返回原始数组中每个窗口的`median` 的array。在实际值的10-5以内的答案将被接受。

--- 

- 双堆获取中位数

```java
class Solution {
    public double[] medianSlidingWindow(int[] nums, int k) {
        var maxHeap = new PriorityQueue<Integer>(Collections.reverseOrder());
        var minHeap = new PriorityQueue<Integer>();
        List<Double> result = new ArrayList<>();


        for (int i = 0; i < nums.length; i++) {
            if (!maxHeap.isEmpty() && nums[i] <= maxHeap.peek()) {
                maxHeap.offer(nums[i]);
            } else {
                minHeap.offer(nums[i]);
            }

            // Balance the heaps
            while (maxHeap.size() > (k + 1) / 2) {
                minHeap.offer(maxHeap.poll());
            }

            while (minHeap.size() > k / 2) {
                maxHeap.offer(minHeap.poll());
            }

            // Calculate and add the median to the result
            if (i >= k - 1) {
                double median;
                if (k % 2 == 0) {
                    median = ((double)maxHeap.peek() + (double)minHeap.peek()) / 2.0;
                } else {
                    median = (double) maxHeap.peek();
                }
                result.add(median);

                // Remove the element that is out of the window
                int removed = nums[i - k + 1];
                if (removed <= maxHeap.peek()) {
                    maxHeap.remove(removed);
                } else {
                    minHeap.remove(removed);
                }
            }
        }

        return result.stream().mapToDouble(Double::doubleValue).toArray();
    }
}
```




### Two Heaps
#### 1985. Find the Kth Largest Integer in the Array
- 最小堆
- 比较器和int版本不一样，也不能直接parseInt相减，因为可能会超出int范围
```java
class Solution {
    public String kthLargestNumber(String[] nums, int k) {
        PriorityQueue<String> minHeap = new PriorityQueue<>((a, b) -> {
            if (a.length() != b.length()) {
                return a.length() - b.length(); // 按长度升序
            }
            return a.compareTo(b); // 长度相等时按照字符串大小升序
        });

        // 或者
        PriorityQueue<String> minHeap = new PriorityQueue<>(Comparator.comparingInt(String::length).thenComparing(Comparator.naturalOrder()));
        
        for (String str : nums) {
            minHeap.offer(str);
            
            if (minHeap.size() > k) {
                minHeap.poll();
            }
        }
        
        return minHeap.peek();        
    }
}
```

#### 4. Median of Two Sorted Arrays
```java
// Two Heap解法
public class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Comparator.reverseOrder());
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        
        for (int num : nums1) {
            maxHeap.offer(num);
            minHeap.offer(maxHeap.poll());
            if (maxHeap.size() < minHeap.size()) {
                maxHeap.offer(minHeap.poll());
            }
        }
        
        for (int num : nums2) {
            maxHeap.offer(num);
            minHeap.offer(maxHeap.poll());
            if (maxHeap.size() < minHeap.size()) {
                maxHeap.offer(minHeap.poll());
            }
        }
        
        if (maxHeap.size() == minHeap.size()) {
            return (double) (maxHeap.peek() + minHeap.peek()) / 2;
        } else {
            return maxHeap.peek();
        }
    }
}
```

采用二分查找的思路，并且时间复杂度为 O(log(min(m, n))) 的解法：

1. 确保 nums1 是较小的数组：
如果 nums1 的长度大于 nums2，则交换它们。这并不是算法的必需步骤，但它简化了实现。

2. 在较小的数组上进行二分查找：
在较小的数组 nums1 上执行二分查找。基本思想是对两个数组进行划分，使得划分点左边的元素都小于右边的元素。

3. 计算中位数：
一旦找到正确的划分点，可以根据划分点处的元素计算中位数。

4. 调整划分点：
如果两个数组中元素的总数是偶数，需要考虑划分点周围的两个元素来计算中位数。

```java
public double findMedianSortedArrays(int[] nums1, int[] nums2) {
    // 确保 nums1 是较小的数组。
    if (nums1.length > nums2.length) {
        int[] temp = nums1;
        nums1 = nums2;
        nums2 = temp;
    }

    int x = nums1.length;
    int y = nums2.length;
    int low = 0;
    int high = x;

    while (low <= high) {
        int partitionX = (low + high) / 2;
        int partitionY = (x + y + 1) / 2 - partitionX;

        int maxX = (partitionX == 0) ? Integer.MIN_VALUE : nums1[partitionX - 1];
        int minX = (partitionX == x) ? Integer.MAX_VALUE : nums1[partitionX];

        int maxY = (partitionY == 0) ? Integer.MIN_VALUE : nums2[partitionY - 1];
        int minY = (partitionY == y) ? Integer.MAX_VALUE : nums2[partitionY];

        if (maxX <= minY && maxY <= minX) {
            // 找到了正确的划分点。
            if ((x + y) % 2 == 0) {
                // 元素总数为偶数，返回中间两个元素的平均值。
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2.0;
            } else {
                // 元素总数为奇数，返回中间两个元素中的较大值。
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            // 需要将划分点在 nums1 中左移。
            high = partitionX - 1;
        } else {
            // 需要将划分点在 nums1 中右移。
            low = partitionX + 1;
        }
    }

    // 如果执行到这里，表示数组没有被正确排序。
    throw new IllegalArgumentException("输入数组未排序。");
}

```


#### 378. Kth Smallest Element in a Sorted Matrix
给定一个`n x n`矩阵，其中每行和每列都按升序排序，则返回矩阵中第k个最小的元素。

请注意，它是排序顺序中第k个最小的元素，而不是第k个不同的元素。

您必须找到内存复杂度优于O(N2)的解决方案。

---
##### 大根堆

```java
class Solution {
    public int kthSmallest(int[][] matrix, int k) {
        if (null == matrix || null == matrix[0])
            return -1;

        int rowLen = matrix.length;
        int colLen = matrix[0].length;

        if (rowLen == 0 || colLen == 0)
            return -1;

        var maxHeap = new PriorityQueue<Integer>(
            (a, b) -> (b - a)
        );

        for (int i = 0; i < rowLen; i++) {
            for (int j = 0; j < colLen; j++) {
                maxHeap.offer(matrix[i][j]);

                if (maxHeap.size() > k) {
                    maxHeap.poll();
                }
            }
        }

        return maxHeap.peek();
    }
}
```

##### 二分搜索（最优性能）
说实话，没法理解为什么更新low=mid+1，high = mid，mid都不一定在矩阵中。
```java
class Solution {
    public int kthSmallest(int[][] matrix, int k) {
        int n = matrix.length;
        int low = matrix[0][0];
        int high = matrix[n - 1][n - 1];

        while (low < high) {
            int mid = low + (high - low) / 2;
            int count = countLessEqual(matrix, mid);

            if (count < k) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }

        return low;
    }

    private int countLessEqual(int[][] matrix, int target) {
        int n = matrix.length;
        int count = 0;
        int row = n - 1;
        int col = 0;

        while (row >= 0 && col < n) {
            if (matrix[row][col] <= target) {
                count += row + 1;
                col++;
            } else {
                row--;
            }
        }

        return count;
    }

}
```



### K-way merge

#### Top K Frequent Elements
```java

/**
 * 347. Top K Frequent Elements
 * 
 * 问题描述：给定一个整数数组 nums 和一个整数 k，返回前 k 个高频元素。
 *
 * 思路：使用最小堆（Min Heap）维护频率最高的 k 个元素。
 */
class Solution {
    /**
     * 返回前 k 个高频元素
     *
     * @param nums 给定的整数数组
     * @param k    前 k 个高频元素
     * @return     高频元素数组
     */
    public int[] topKFrequent(int[] nums, int k) {
        // Step 1: 统计每个元素的频率
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        for (int num : nums) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        // 使用最小堆来保存频率最高的 k 个元素
        PriorityQueue<Map.Entry<Integer, Integer>> pq = new PriorityQueue<>(
                Comparator.comparingInt(Map.Entry::getValue)
        );

        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            pq.add(entry);

            if (pq.size() > k) {
                pq.poll();
            }
        }

        // 构建结果数组
        int[] res = new int[k];
        int i = 0;
        while (!pq.isEmpty()) {
            res[i++] = pq.poll().getKey();
        }

        return res;
    }
}

```


### Merge Intervals
```py
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        """
        56. Merge Intervals

        合并重叠区间

        # 思路
        1. 首先按区间的起始位置进行排序。
        2. 遍历排序后的区间列表，合并重叠区间。

        # Note
        注意在遍历时的条件判断和区间合并的逻辑。
        """

        # 按区间的起始位置进行排序
        intervals.sort(key=lambda x: x[0])

        res = []

        start, end = intervals[0][0], intervals[0][1]

        for i in range(1, len(intervals)):
            # 判断是否与当前合并区间重叠
            if intervals[i][0] <= end:
                end = max(end, intervals[i][1])  # 合并重叠区间
            else:
                res.append([start, end])  
                start, end = intervals[i][0], intervals[i][1]  

        res.append([start, end])  # 处理最后一个合并区间
        return res
```

#### Kth Smallest Element in a Sorted Matrix
```py
# 堆解法
class Solution:
    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:
        """
        378. Kth Smallest Element in a Sorted Matrix
        在二维矩阵中找第 k 小的元素

        # 问题描述
        给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，
        找到矩阵中第 k 小的元素。请注意，它是排序后的第 k 小元素，
        而不是第 k 个不同的元素。

        # 思路
        使用最小堆，将每行的第一个元素以及所在行和列的索引加入堆中，
        然后每次弹出堆顶元素，将其所在行的下一个元素加入堆中，
        直到找到第 k 小的元素。

        # Note
        注意矩阵的边界情况和堆的处理。
        """

        rows, cols = len(matrix), len(matrix[0])

        # 使用列表推导式初始化堆，每个元素包括值、行索引、列索引
        heap = [[matrix[row][0], row, 0] for row in range(rows)]

        # 将列表转化为最小堆
        heapq.heapify(heap)

        # 从堆中弹出 k-1 个元素
        for i in range(k-1):
            num, x, y = heapq.heappop(heap)

            # 如果所在行还有元素，将下一个元素加入堆
            if y < cols-1:
                heapq.heappush(heap, [matrix[x][y+1], x, y+1])

        # 弹出第 k 小的元素并返回其值
        return heapq.heappop(heap)[0]
```

```py
# 基于二分查找 TODO
class Solution:
    
    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:
        rows, cols = len(matrix), len(matrix[0])
        lo, hi = matrix[0][0], matrix[-1][-1]

        def get_no_more_than(target):
            max_num, count = float("-inf"), 0

            i, j = 0, cols - 1

            while 0 <= i < rows and 0 <= j < cols:
                if matrix[i][j] <= target:
                    count += j + 1 # 一整行
                    max_num = max(max_num, matrix[i][j])
                    i += 1
                else: # matrix[i][j] > target
                    j -= 1
            return max_num, count

        res = 0
        while lo <= hi:
            mid = lo + (hi - lo) // 2
            max_num, count = get_no_more_than(mid)

            if count < k:
                lo = mid + 1
            elif count > k:
                res = max_num
                hi = mid - 1
            else:
                res = max_num
                hi = mid - 1

        return res    
```




### Backtracking

#### 78. Subsets
给定一个包含 ***唯一元素*** 的整数数组nums，返回所有可能的子集

解决方案集不能包含重复的子集。以任何顺序返回解决方案。

```txt
Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```
---

- 回溯法（backtracking）
- 递归回溯法： 对于每个元素，你有两个选择，要么包含它，要么不包含它。通过递归，你可以生成所有的组合。
- 回溯过程： 在递归的每一步，你需要记录当前的组合。当遍历到数组的末尾时，将当前的组合加入结果集。

```java
class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        generateSubsets(nums, 0, new ArrayList<>(), result);
        return result;
    }

    private void generateSubsets(
        int[] nums, 
        int index, 
        List<Integer> current, 
        List<List<Integer>> result
    ) {
        // 添加当前组合到结果集
        result.add(new ArrayList<>(current));

        // 从当前位置向后遍历数组
        for (int i = index; i < nums.length; i++) {
            // 选择当前元素
            current.add(nums[i]);
            // 递归生成子集
            generateSubsets(nums, i + 1, current, result);
            // 回溯，移除当前元素
            current.remove(current.size() - 1);
        }
    }
}
```
#### 90. Subsets II
给定一个`可能包含重复项`的整数数组nums，返回所有可能得子集

解决方案集不能包含重复的子集。以任何顺序返回解决方案。
```txt
Example 1:

Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
```

---

- 和subsets的差异在于 可能包含重复项
- 排序数组，方便后面进行跳过
- 跳过重复： 在递归的过程中，如果当前元素和前一个元素相同，就跳过这个元素，避免重复生成相同的子集。

举例[1,1,2] 中 遍历时，只有index=0的1会执行递归回溯
```txt
如果没有跳过代码，会得到：
[[],[1],[1,2],[1,2,2],[1,2],[2],[2,2],[2]]

实际上需要的效果是：
[[],[1],[1,2],[1,2,2],[2],[2,2]]

可见，不跳过的话第二个1会生成重复的[1,2],[2]
```


```java
class Solution {
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        // 排序数组，方便后面进行跳过
        Arrays.sort(nums);
        backtrack(nums, 0, new ArrayList<>(), result);
        return result;
    }

    private void backtrack(
        int[] nums, 
        int start, 
        List<Integer> current, 
        List<List<Integer>> result
    ) {
        // 添加当前子集到结果集
        result.add(new ArrayList<>(current));

        // 递归生成子集
        for (int i = start; i < nums.length; i++) {
            // 跳过重复元素
            if (i > start && nums[i] == nums[i - 1]) {
                continue;
            }
            current.add(nums[i]);
            backtrack(nums, i + 1, current, result);
            current.remove(current.size() - 1);
        }
    }
}
```


#### 39. Combination Sum
给定一个 ***不同*** 的整数候选数组和一个目标整数目标，返回所选数字与目标之和的所有唯一候选组合的列表。
您可以按任何顺序退回这些组合。

可以从候选人中选择相同的数字，次数不限。
两个组合是唯一的，如果至少有一个被选取的number的频率不一样

生成测试用例，使得对于给定输入，合计到目标的唯一组合的数量少于150个组合。

```txt
Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
```

---

- 回溯
- 判断添加到res的条件与target相关
- 在循环回溯的时候，传入的index不需要+1，因为本题运行重复选取统一个元素

```java
class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(candidates);
        backtrack(candidates, 0, target, new ArrayList<>(), result);
        return result;
    }

    private void backtrack(
        int[] candidates,
        int index,
        int remaining,
        List<Integer> current,
        List<List<Integer>> result
    ) {
        if (remaining == 0) {
            result.add(new ArrayList(current));
            return;
        }

        for (int i = index; i < candidates.length; i++) {
            // 剪枝，如果当前元素已经大于目标，后面的元素更大，就不可能满足条件，直接跳过
            // Note：比进入新一个递归后判断remaining是否小于0再return好，
            // 这个能跳过后面比当前元素大的所用元素，前者还是会递归这些元素然后在开头return，不如直接break
            if (candidates[i] > remaining) {
                break;
            }

            current.add(candidates[i]);
            // Note：这里传递的index还是i，这样才使重复选取一个ele成为可能。
            backtrack(candidates, i, remaining - candidates[i], current, result);
            current.remove(current.size()-1);
        }
    }
}
```

#### 40. Combination Sum II
给出一个候选号(候选者)和一个目标号(目标)的集合，在候选者中找到候选者中所有唯一的组合，其中候选者数字之和为目标。

***考生名单中的每个数字只能在组合中使用一次。***

注意：解决方案集不能包含重复的组合。

```txt
Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
```

---

- 回溯
- 不能包含重复的组合： 排序并跳过
- 每个数字只能在组合中使用一次： 递归调用更新index时递增1

```java
class Solution {
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(candidates); // 排序是为了后面方便去重

        backtrack(result, new ArrayList<>(), candidates, target, 0);

        return result;                
    }

    private void backtrack(
        List<List<Integer>> result, 
        List<Integer> current, 
        int[] candidates, 
        int remaining, 
        int start
    ) {
        if (remaining == 0) {
            // 如果目标为0，说明找到了一个符合条件的组合
            result.add(new ArrayList<>(current));
            return;
        }

        for (int i = start; i < candidates.length; i++) {
            // 避免重复，如果当前元素和上一个相同，跳过
            if (i > start && candidates[i] == candidates[i - 1]) {
                continue;
            }

            // 剪枝，如果当前元素已经大于目标，后面的元素更大，就不可能满足条件，直接跳过
            if (candidates[i] > remaining) {
                break;
            }

            // 尝试将当前元素加入组合
            current.add(candidates[i]);

            // 递归调用，更新目标值和起始位置
            backtrack(result, current, candidates, remaining - candidates[i], i + 1);

            // 回溯，撤销选择，继续尝试其他组合
            current.remove(current.size() - 1);
        }
    }    
}
```

#### 113. Path Sum II

> 给定一个二叉树的根和一个整数`targetSum`，返回路径中节点值之和等于`targetSum`的所有`根到叶路径`。
> 
> 每条路径都应该作为节点值列表返回，而不是节点引用。
> 
> 根到叶路径是从根开始并在任何叶节点结束的路径。叶子是没有子节点的节点。

```txt
Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22

Output: [[5,4,11,2],[5,8,4,5]]

Explanation: There are two paths whose sum equals targetSum:
5 + 4 + 11 + 2 = 22
5 + 8 + 4 + 5 = 22
```

---
- 回溯
- 当到达叶子节点且路径和等于目标值时，添加路径的副本
  - 因为是叶子结点所以要判断左右子节点为null
  - 如果找到，


```java
class Solution {

    List<List<Integer>> result;
    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
        result = new ArrayList<>();

        backtrack(root, targetSum, new ArrayList<Integer>());

        return result;

    }

    private void backtrack(TreeNode node, int remaining, List<Integer> current){

        if (node == null) {
            return;
        }

        int newRemaining = remaining - node.val;

        current.add(node.val);

        if (node.left == null && node.right == null && newRemaining == 0) {
            result.add(new ArrayList(current));
            // 因为这里是guide语句，所以要在return之前将状态回滚
            // 如果将下方两个backtrack写入else，则可以共用最后的回滚语句
            current.remove(current.size()-1);
            return;
        }

        backtrack(node.left, newRemaining, current);
        backtrack(node.right, newRemaining, current);
        current.remove(current.size()-1);
    }
}
```


#### 131. Palindrome Partitioning
给定一串S，划分S，使划分出的每一个子串是回文。
返回S的所有可能的回文划分。

```txt
Example 1:

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
```
---

- 回溯
- 添加到结果并退出的条件是index到s最后一位
- 循环时用的index是end，且考虑到substring的前闭后开特性，停止条件是 <= 而非 <
- 递归时index需要更新到end，而不是递增一位

```java
class Solution {
    public List<List<String>> partition(String s) {
        List<List<String>> result = new ArrayList<>();
        backtrack(result, new ArrayList<>(), s, 0);
        return result;
    }

    private void backtrack(
        List<List<String>> result, 
        List<String> current, 
        String s, 
        int start
    ) {
        if (start == s.length()) {
            result.add(new ArrayList(current));
            return;
        }

        // Note： 遍历i为end，结束条件是<=, 考虑到substring的截取方式是前闭后开的
        for (int end = start+1; end <= s.length(); end++) {
            if (isPalindrome(s, start, end-1)) {
                current.add(s.substring(start, end));
                // Note: 此处更新index为end，跳过了被添加的回文区域
                backtrack(result, current, s, end);
                current.remove(current.size()-1);
            }
        }
    }

    private boolean isPalindrome(String s, int low, int high) {
        while (low < high) {
            if (s.charAt(low++) != s.charAt(high--)) {
                return false;
            }
        }
        return true;
    }    
}
```

#### 22. Generate Parentheses
在给定n对圆括号的情况下，编写一个函数来生成格式良好的圆括号的所有组合。

```txt
Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
```

--- 
- 回溯获得全部组合
- 用open，close记录当前current使用开闭括号数量
- 添加到结果并return的条件式长度达到2n
- well formed判断
  - 左括号数量小于n
  - 右括号数量小于左括号数量

```java
class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> result = new ArrayList<>();
        backtrack(result, new StringBuilder(), 0, 0, n);
        return result;        
    }

    private void backtrack(
        List<String> result, 
        StringBuilder current, 
        int open, 
        int close, 
        int max
    ) {
        // 如果当前字符串的长度等于2 * n，表示找到一个合法的组合        
        if (current.length() == 2*max) {
            result.add(new String(current));
            return;
        } 

        // 如果左括号数量小于 n，可以添加左括号
        if (open < max) {
            current.append('(');
            backtrack(result, current, open + 1, close, max);
            current.deleteCharAt(current.length()-1);
        }

        // 如果右括号数量小于左括号数量，可以添加右括号
        if (close < open) {
            current.append(')');
            backtrack(result, current, open, close + 1, max);
            current.deleteCharAt(current.length()-1);            
        }
    }
}
```

#### 17. Letter Combinations of a Phone Number
给定一个包含2-9（包括2和9）数字的字符串，返回该数字可能表示的所有可能的字母组合。
按任意顺序返回答案。

下面给出了数字到字母的映射（就像电话按键一样）。请注意，1不映射到任何字母。
```txt
1 - null
2 - abc
3 - def
4 - ghi
5 - jkl
6 - mno
7 - pqrs
8 - tuv
9 - wxyz
```
---

- 递归回溯法

```java
class Solution {

    private static final Map<Character, char[]> digitMap = new HashMap<>();

    static {
        digitMap.put('2', new char[]{'a', 'b', 'c'});
        digitMap.put('3', new char[]{'d', 'e', 'f'});
        digitMap.put('4', new char[]{'g', 'h', 'i'});
        digitMap.put('5', new char[]{'j', 'k', 'l'});
        digitMap.put('6', new char[]{'m', 'n', 'o'});
        digitMap.put('7', new char[]{'p', 'q', 'r', 's'});
        digitMap.put('8', new char[]{'t', 'u', 'v'});
        digitMap.put('9', new char[]{'w', 'x', 'y', 'z'});
    }

    public List<String> letterCombinations(String digits) {

        List<String> result = new ArrayList<>();

        if (null == digits || digits.length() == 0)
            return result;

        backtrack(new StringBuilder(), digits, result);

        return result;
    }

    private void backtrack(
        StringBuilder combination, 
        String nextDigits, 
        List<String> result
    ) {
        // 如果没有下一个数字了，说明当前组合已经完成
        if (nextDigits.length() == 0) {
            result.add(combination.toString());
            return;
        }
        // 获取当前数字对应的字母数组
        char digit = nextDigits.charAt(0);
        char[] letters = digitMap.get(digit);        

        // 遍历字母数组，递归调用
        for (char letter : letters) {
            combination.append(letter);

            /*
            nextDigits.substring(1) 表示取 nextDigits 字符串的子字符串，从索引 1 开始一直到字符串的末尾。这是因为字符串的索引是从 0 开始的。

            举个例子，如果 nextDigits 是 "234"，那么 nextDigits.substring(1) 就是 "34"。这是一个常见的操作，用来在递归中去掉当前处理的数字，以便处理下一个数字。
            */
            backtrack(combination, nextDigits.substring(1), result);
            
            // 回溯，移除最后一个字符
            combination.deleteCharAt(combination.length() - 1); 
        }
    }
}
```

对于 nextDigits 的处理，目前的实现在每次递归调用中使用 nextDigits.substring(1) 来获取剩余的数字串。这是一种比较简单的方式，但在处理大量数据时可能会有性能开销。

一种优化的方式是不使用 substring，而是传递当前处理的位置索引。这样可以减少创建字符串对象的开销。

```java
// 采用传index的版本
class Solution {

    private static final Map<Character, char[]> digitMap = new HashMap<>();

    static {
        digitMap.put('2', new char[]{'a', 'b', 'c'});
        digitMap.put('3', new char[]{'d', 'e', 'f'});
        digitMap.put('4', new char[]{'g', 'h', 'i'});
        digitMap.put('5', new char[]{'j', 'k', 'l'});
        digitMap.put('6', new char[]{'m', 'n', 'o'});
        digitMap.put('7', new char[]{'p', 'q', 'r', 's'});
        digitMap.put('8', new char[]{'t', 'u', 'v'});
        digitMap.put('9', new char[]{'w', 'x', 'y', 'z'});
    }

    public List<String> letterCombinations(String digits) {

        List<String> result = new ArrayList<>();

        if (null == digits || digits.length() == 0)
            return result;

        // index和digits代替nextDigits
        backtrack(new StringBuilder(), digits.toCharArray(), 0, result);

        return result;
    }

    private void backtrack(
        StringBuilder combination, 
        char[] digits,
        int index,
        List<String> result
    ) {
        // 如果当前索引越界，说明当前组合已经完成
        if (index == digits.length) {
            result.add(combination.toString());
            return;
        }
        
        // 获取当前数字对应的字母数组
        char digit = digits[index];
        char[] letters = digitMap.get(digit);        

        // 遍历字母数组，递归调用
        for (char letter : letters) {
            combination.append(letter);

            backtrack(combination, digits, index + 1, result);
            
            // 回溯，移除最后一个字符
            combination.deleteCharAt(combination.length() - 1); 
        }
    }
}
```


#### 1079. Letter Tile Possibilities
您有n个瓷砖，每个瓷砖上印有一个字母瓷砖[i]。

返回您可以使用这些瓷砖上打印的字母组成的可能的非空字母序列的数量。

```txt
Example 1:

Input: tiles = "AAB"
Output: 8
Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
```

---

- 回溯
- 跳过重复的判断要考虑前一个char是否也未被使用

```java
class Solution {

    int ans;            // 记录最终的答案
    boolean[] visited;  // 记录字符是否已经被访问过

    public int numTilePossibilities(String tiles) {
        char[] arr = tiles.toCharArray();
        Arrays.sort(arr);   // 将字符数组排序，以便处理相同字符的重复情况

        visited = new boolean[arr.length];

        backtrack(arr, 0);  // 开始深度优先搜索

        return ans;
    }

    private void backtrack(char[] arr, int len) {
        if (len == arr.length)
            return;

        for (int i = 0; i < arr.length; i++) {
            if (visited[i])
                continue;
            if (i > 0 && arr[i] == arr[i - 1] && !visited[i - 1])
                continue;  // 处理相同字符的情况，避免重复

            ans++;  // 每次选择一个字符，答案加一

            visited[i] = true;    // 标记当前字符已被访问
            backtrack(arr, len + 1);    // 递归调用深度优先搜索
            visited[i] = false;   // 回溯，取消当前字符的访问标记
        }
    }
}
```

#### 79. Word Search
> 给定一个`m x n`网格的字符板和一个字符串单词，如果网格中存在单词，则返回TRUE。
> 
> 该单词可以由连续相邻单元格的字母构成，其中相邻单元格水平或垂直相邻。同一字母单元不能多次使用。

```txt
Input: 
board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"

Output: true
```

---

- 回溯
- 主方法里需要遍历每个grid调用backtrack，因为每一个grid都可以作为开头
- 可选优化1：统计char freq，筛除不够组成word的board
- 可选优化2：翻转wordArray，如果尾字符频率高于首字符频率

```java
class Solution {

    boolean[][] used;

    public boolean exist(char[][] board, String word) {

        int rows = board.length; 
        int cols = board[0].length;

        used = new boolean[rows][cols];
        char[] wordArr = word.toCharArray();

        // 统计字符在board中的出现次数
        int[] boardCharFrequency = new int[52];
        for (int i = 0; i < rows; ++i) {
            for (int j = 0; j < cols; ++j) {
                ++boardCharFrequency[board[i][j]];
            }
        }

        // 检查单词字符是否超过在board中的出现次数
        for (char ch : wordArray) {
            if (--boardCharFrequency[ch] < 0) {
                return false;
            }
        }

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (backtrack(board, wordArr, 0, i, j))
                    return true; 
            }
        }

        return false;
    }

    private boolean backtrack(
        char[][] board,
        char[] wordArr,
        int index,
        int x,
        int y
    ) {
        if (!withinBoundary(board, x, y)) {
            return false;
        }

        if (used[x][y]) {
            return false;
        }

        if (board[x][y] != wordArr[index]) {
            return false;
        }

        if (index == wordArr.length-1) {
            return true;
        }

        used[x][y] = true;
        if (backtrack(board, wordArr, index+1, x+1, y) 
            || backtrack(board, wordArr, index+1, x-1, y)
            || backtrack(board, wordArr, index+1, x, y+1)
            || backtrack(board, wordArr, index+1, x, y-1)
        )
            return true;

        used[x][y] = false;
        return false;
    }

    private boolean withinBoundary(char[][] board, int x, int y) {
        return x >= 0 
            && x < board.length 
            && y >= 0
            && y < board[0].length;
    }
}
```






### Greedy
#### 455. Assign Cookies
- 对孩子的贪心因子数组 g 和饼干的大小数组 s 进行排序
- 使用两个指针，一个指向孩子数组 g，另一个指向饼干数组 s。从最小的贪心因子和最小的饼干尺寸开始，逐个比较。
  - 如果 s[j] >= g[i]，表示当前饼干可以满足当前孩子，将两者都移向下一个。
  - 如果 s[j] < g[i]，表示当前饼干不足以满足当前孩子，需要尝试更大的饼干，将饼干指针向后移动。

```java
public class CookieProblem {
    public int findContentChildren(int[] g, int[] s) {
        Arrays.sort(g);
        Arrays.sort(s);
        
        int i = 0; // 孩子数组的指针
        int j = 0; // 饼干数组的指针
        int count = 0; // 记录满足的孩子数
        
        while (i < g.length && j < s.length) {
            if (s[j] >= g[i]) {
                count++;
                i++;
            }
            j++;
        }
        
        return count;
    }
}

```

#### Jump Game
```java
/**
 * 55. Jump Game
 * 跳跃游戏
 * 
 * 问题描述：
 * 给定一个整数数组 nums，判断是否能够到达数组的最后一个位置。
 * 每个元素表示在该位置可以跳跃的最大长度。
 * 
 * 思路：
 * 使用贪心算法，从左到右遍历数组，维护一个变量 maxReach 表示当前能够到达的最远位置。
 * 如果在遍历过程中发现某个位置 i 大于 maxReach，说明无法到达当前位置，返回 false。
 * 更新 maxReach 为当前位置能够到达的最远位置。
 * 如果 maxReach 已经超过数组末尾，返回 true。
 */
class Solution {

    /**
     * 判断是否能够到达数组的最后一个位置
     * 
     * @param nums 给定的整数数组
     * @return 如果能够到达最后一个位置，返回 true；否则返回 false。
     */
    public boolean canJump(int[] nums) {
        int maxReach = 0;

        for (int i = 0; i < nums.length; i++) {
            // 如果当前位置超过了当前能够到达的最远位置，返回false
            if (i > maxReach) return false;

            // 更新当前能够到达的最远位置
            maxReach = Math.max(maxReach, i + nums[i]);

            // 如果最远位置已经超过数组末尾，说明可以到达最后一个位置
            if (maxReach >= nums.length - 1) return true;
        }

        return false;
    }
}
```
#### Jump Game II
```java
/**
 * 45. Jump Game II
 * 跳跃游戏 II
 * 
 * 给定一个非负整数数组 nums ，你最初位于数组的第一个位置。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
 * 如果无法到达，则返回 -1。
 * 
 * 思路：
 * 使用贪心算法。和 BFS
 * 
 * 维护当前层能够到达的最远位置，遍历层内index更新这个位置，
 * 如果该层内尚不能达到最后位置，则steps++, 进入下一层
 */
class Solution {
    /**
     * 跳跃游戏 II 的解决方法
     *
     * @param nums 给定的非负整数数组
     * @return 最少的跳跃次数，如果无法到达则返回 -1
     */
    public int jump(int[] nums) {
        // 如果数组长度为 1，不需要跳跃
        if (nums.length == 1) return 0;

        int maxRange = 0; // 当前能够到达的最远位置
        int index = 0;    // 当前位置
        int steps = 1;    // 跳跃步数

        while (index <= maxRange) { // 还没有尝试完目前能到达的index
            int curMax = maxRange;
            // 遍历当前层到当前能够到达的最远位置之间的元素
            // 层间遍历时maxRange可能会更新，所以要用一个变量固定当前层的maxRange
            // 类似于BFS层遍历时先用size记录queue.size()
            for (; index <= curMax; index++) {
                int range = index + nums[index];
                // 如果当前位置能够到达数组末尾，则返回步数
                if (range >= nums.length - 1) return steps;

                // 更新当前能够到达的最远位置
                maxRange = Math.max(range, maxRange);
            }
            steps++;
        }

        return -1; // 无法到达数组末尾
    }
}

```


#### Queue Reconstruction by Height
```java
/**
 * 406. Queue Reconstruction by Height
 * 问题描述：根据给定的身高和前面的人数，重建队列。
 * 
 * 思路：先按照身高降序、人数升序排序，
 * 然后依次插入到结果列表的指定位置。
 * 
 * 挑选出最高的一组人，并将他们分类到一个子数组中(S)。
 * 因为没有其他人群比他们高，所以每个人的index将与他的k值相同
 * 
 * 对于第二高的组(以及其余的)，按k值将它们逐一插入(S)。以此类推。
 * 
 * E.g.
 * input: [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
 * subarray after step 1: [[7,0], [7,1]]
 * subarray after step 2: [[7,0], [6,1], [7,1]]
 */
class Solution {

    /**
     * 重建队列的方法。
     *
     * @param people 二维数组，每个元素表示一个人的身高和前面的人数。
     * @return 重建后的队列。
     */
    public int[][] reconstructQueue(int[][] people) {
        // 结果列表，用LinkedList实现以便于插入操作
        List<int[]> res = new LinkedList<>();

        // 按照身高降序、人数升序排序
        Arrays.sort(people, (a, b) -> a[0] == b[0] ? a[1] - b[1] : b[0] - a[0]);

        // 将排序后的人依次插入到指定位置
        for (int[] p : people) {
            res.add(p[1], p);
        }

        // 转换为数组并返回
        return res.toArray(new int[people.length][2]);
    }
}
```

#### Non-overlapping Intervals
```java
/**
 * 435. Non-overlapping Intervals
 * 无重叠区间
 * 
 * 问题描述：给定一系列区间，找到最大数量的不重叠区间，使得剩余的区间最少。
 * 
 * 思路：按照区间的结束位置排序 
 * 按照区间的结束位置进行排序的原因是为了尽可能地保留更多的可用空间
 * 贪心的思想基于以下观察：
 * 选择结束位置早的区间更有利于保留更多的空间： 如果有两个区间，一个在位置 [a, b] 结束，另一个在位置 [c, d] 结束，且 b < d，那么选择结束位置早的区间更容易腾出空间供其他区间使用。 
 * 
 * 然后遍历区间，选择不重叠的区间即可。
 */
class Solution {
    /**
     * 计算最小的区间移除数量
     * 
     * @param intervals 区间数组，每个区间用一个长度为2的数组表示，分别表示起始位置和结束位置。
     * @return 最小的区间移除数量
     */
    public int eraseOverlapIntervals(int[][] intervals) {
        // 按照结束位置升序排序
        Arrays.sort(intervals, (a, b) -> a[1] - b[1]);

        int count = 1; // 不重叠区间的计数，初始为1，因为第一个区间总是被选择的
        int end = intervals[0][1]; // 当前不重叠区间的结束位置

        // 遍历区间
        for (int i = 1; i < intervals.length; i++) {
            // 如果当前区间的起始位置大于等于当前不重叠区间的结束位置
            if (intervals[i][0] >= end) {
                count++; // 选择当前区间
                end = intervals[i][1]; // 更新不重叠区间的结束位置
            }
        }

        // 返回需要移除的区间数量
        return intervals.length - count;
    }
}

```

#### Gas Station
```java
/**
 * 134. Gas Station
 * 加油站环路问题：
 * 
 * 给定 n 个加油站，每个加油站有汽油 gas[i] 和花费 cost[i]。从某一加油站出发，判断是否能绕环一周。
 * 如果存在解，返回起始加油站的索引；否则返回 -1。
 *
 * 思路：
 * 使用贪心算法。从每个加油站出发，尝试是否能够完成整个环路。
 * 如果从当前加油站到下一个加油站的剩余油量小于0，则重新选择起始加油站。
 * 如果最终能够回到起始加油站且总的剩余油量不为负数，则返回起始加油站的索引。
 */
class Solution {
    /**
     * 判断是否能够完成加油站环路
     *
     * @param gas   每个加油站的汽油量数组
     * @param cost  每个加油站到下一站的花费数组
     * @return 如果存在解，返回起始加油站的索引；否则返回 -1。
     */
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int n = gas.length;

        int[] net = new int[n]; // 记录每个加油站的净剩余油量
        for (int i = 0; i < n; i++) {
            net[i] = gas[i] - cost[i];
        }

        int start = -1; // 起始加油站的索引
        int total = 0; // 记录总的剩余油量
        int current = 0; // 记录当前起始加油站到当前加油站的剩余油量

        for (int i = 0; i < n; i++) {
            if (start == -1 && net[i] >= 0) {
                start = i;
            }

            total += net[i];
            current += net[i];

            if (current < 0) {
                // 如果当前起始加油站到当前加油站的剩余油量小于0，
                // 则重新选择起始加油站，并重置当前剩余油量
                start = -1;
                current = 0;
            }
        }

        // 如果总的剩余油量小于0，说明无法完成整个环路
        if (total < 0) {
            return -1;
        } else {
            return start;
        }
    }
}


```




### DFS

#### Symmetric Tree
```java
/**
 * 101. Symmetric Tree
 * 问题描述：
 * 给定一个二叉树，判断它是否是镜像对称的。
 * 
 * 思路：
 * 递归地比较左子树的左节点和右子树的右节点，以及左子树的右节点和右子树的左节点。
 * 如果它们都相等，则满足镜像对称的条件。
 */
public class SymmetricTree {
    /**
     * 判断给定的二叉树是否是镜像对称的。
     * 
     * @param root 二叉树的根节点
     * @return 如果是镜像对称的，返回 true；否则，返回 false。
     */
    public boolean isSymmetric(TreeNode root) {
        // 如果根节点为空，视为对称
        if (null == root)
            return true;

        // 调用递归函数判断左右子树是否对称
        return isMirror(root.left, root.right);
    }

    /**
     * 递归判断两个节点是否对称。
     * 
     * @param left 左子树节点
     * @param right 右子树节点
     * @return 如果对称，返回 true；否则，返回 false。
     */
    private boolean isMirror(TreeNode left, TreeNode right) {
        // 左右节点均为空，对称
        if (null == left && null == right)
            return true;
        // 左右节点一个为空，一个非空，不对称
        if (null == left || null == right)
            return false;
        // 左右节点的值不相等，不对称
        if (left.val != right.val)
            return false;

        // 递归判断左子树的左节点和右子树的右节点，以及左子树的右节点和右子树的左节点是否对称
        return isMirror(left.left, right.right) && isMirror(left.right, right.left);
    }
}
```

#### 226. Invert Binary Tree
```java
/**
 * 226. 翻转二叉树
 * 
 * 问题描述：
 * 翻转一棵二叉树。
 * 
 * 示例：
 * 输入：
 *      4
 *     / \
 *    2   7
 *   / \ / \
 *  1  3 6  9
 * 输出：
 *      4
 *     / \
 *    7   2
 *   / \ / \
 *  9  6 3  1
 * 
 * 思路：
 * 通过深度优先搜索（DFS），递归地交换每个节点的左右子树。
 */
public class Solution {
    
    /**
     * 翻转二叉树的入口方法
     * @param root 二叉树的根节点
     * @return 翻转后的二叉树根节点
     */
    public TreeNode invertTree(TreeNode root) {
        // 调用深度优先搜索
        dfs(root);
        // 返回翻转后的二叉树根节点
        return root;
    }

    /**
     * 深度优先搜索方法，递归地翻转每个节点的左右子树
     * @param node 当前节点
     */
    private void dfs(TreeNode node) {
        // 如果当前节点为空，直接返回
        if (null == node) {
            return;
        }
        
        // 交换当前节点的左右子树
        TreeNode temp = node.left;
        node.left = node.right;
        node.right = temp;

        // 递归处理左子树
        dfs(node.left);
        // 递归处理右子树
        dfs(node.right);
    }
}

```

#### 1079. Letter Tile Possibilities
您有n个瓷砖，每个瓷砖上印有一个字母瓷砖[i]。

返回您可以使用这些瓷砖上打印的字母组成的可能的非空字母序列的数量。

```txt
Example 1:

Input: tiles = "AAB"
Output: 8
Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
```

---

- DFS

```java
class Solution {
    public int numTilePossibilities(String tiles) {
        // 记录每个字母的出现次数
        int[] letterCount = new int[26];
        for (char c : tiles.toCharArray()) {
            letterCount[c - 'A']++;
        }

        // 从第一个字母开始深度优先搜索
        return dfs(letterCount);
    }

    private int dfs(int[] letterCount) {
        int sum = 0;
        for (int i = 0; i < 26; i++) {
            if (letterCount[i] > 0) {
                // 选择一个字母
                letterCount[i]--;
                // 递归调用深度优先搜索
                sum += 1 + dfs(letterCount);
                // 恢复状态，回溯
                letterCount[i]++;
            }
        }
        return sum;
    }
}
```


#### 104. Maximum Depth of Binary Tree
> 给定二叉树的根，返回其最大深度。
> 
> 二叉树的最大深度是从根节点向下到最远的叶节点的最长路径上的节点数。

```txt
Input: root = [3,9,20,null,null,15,7]
Output: 3
```

---

```java
class Solution {
    public int maxDepth(TreeNode root) {
        return dfs(root);
    }
    
    private int dfs(TreeNode node) {
        if (null == node)
            return 0;

        return Math.max(dfs(node.left), dfs(node.right)) + 1;
    }
}
```


#### 94. Binary Tree Inorder Traversal
> 给定二叉树的根，返回其节点值的中序遍历。

```txt
Input: root = [1,null,2,3]
Output: [1,3,2]
```

---

```java
class Solution {
    
    List<Integer> result;
    
    public List<Integer> inorderTraversal(TreeNode root) {
        result = new ArrayList<>();

        dfs(root);

        return result;    
    }

    private void dfs(TreeNode node) {
        if (node == null)
            return;
        
        dfs(node.left);
        result.add(node.val);
        dfs(node.right);
    }
}
```


#### 207. Course Schedule
> 您必须学习的课程总共有`numCourses`，标签从`0`到`numCourses-1`。
> 
> 您将获得一个数组 `prerequisites`，其中 `prerequisites[i]=[ai，bi]` 表示如果您想要学习课程 `ai`，您必须首先学习课程`bi`。
>
> 例如，对[0，1]表示要选修课程0，必须先选修课程1。
>
> 如果可以完成所有课程，则返回TRUE。否则，返回FALSE。

```txt
Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]

Output: true

Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
```

---

- graph: key-要学的课程，value-其全部前置课程
- 三种状态
  - 在这里，状态 1 表示正在访问的节点，有助于检测环的存在。当你在DFS过程中访问一个节点时，将其标记为1表示该节点正在当前的DFS遍历中被访问。如果在同一轮DFS中再次访问到了状态为1的节点，说明存在环。这就是为什么要有这个状态的原因。

```java
class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        // 构建有向图
        List<List<Integer>> graph = new ArrayList<>();

        for (int i = 0; i < numCourses; i++) { 
            graph.add(new ArrayList<>()); // 必要，不然hasCycle中遍历可能会NPE
        }
        for (int[] prerequisite : prerequisites) {
            graph.get(prerequisite[0]).add(prerequisite[1]);
        }

        // 用数组来表示节点的状态，0表示未访问，1表示正在访问，2表示已完成访问
        int[] visited = new int[numCourses];

        // 对每个节点进行DFS
        for (int i = 0; i < numCourses; i++) {
            if (visited[i] == 0 && hasCycle(graph, visited, i)) {
                return false; // 存在环，不能完成所有课程
            }
        }

        return true; // 不存在环，可以完成所有课程
    }

    private boolean hasCycle(List<List<Integer>> graph, int[] visited, int course) {
        // 标记当前节点为正在访问
        visited[course] = 1;

        // 遍历当前节点的所有邻居
        for (int neighbor : graph.get(course)) {
            if (visited[neighbor] == 1) {
                return true; // 发现环
            }
         
            if (visited[neighbor] == 0 && hasCycle(graph, visited, neighbor)) {
                return true; // 递归遍历邻居节点
            }
        }

        // 标记当前节点为已完成访问
        visited[course] = 2;
        return false;
    }
}


```

##### 拓扑法
通过维护每门课程的入度（inDegree），在每一轮循环中移除入度为0的课程，直到所有课程都被移除或者无法再移除。
- 每门课程的入度表示有多少其他课程依赖于这门课程，即有多少先修课程。
- removed 数组标志已经移除的先修关系，
- totalRemoved 记录总共移除的先修关系数量
- currentRemoved 记录当前轮次移除的先修关系数量。

```java
class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        int[] inDegree = new int[numCourses]; // 用来记录每门课程的入度
        for (int[] prerequisite : prerequisites) {
            inDegree[prerequisite[1]]++;
        }
        
        int totalRemoved = 0; // 记录已经移除的先修关系数量
        int[] removed = new int[prerequisites.length]; // 记录已经移除的先修关系的标志数组
        while (totalRemoved < prerequisites.length) {
            int currentRemoved = 0; // 记录当前轮次移除的先修关系数量
            for (int i = 0; i < prerequisites.length; i++) {
                if (removed[i] == 1) {
                    continue; // 如果该关系已经被移除，跳过
                }
                int[] prerequisite = prerequisites[i];
                if (inDegree[prerequisite[0]] == 0) {
                    // 如果当前先修课程入度为0，移除这个先修关系
                    inDegree[prerequisite[1]]--;
                    removed[i] = 1;
                    currentRemoved++;
                }
            }
            if (currentRemoved == 0) {
                return false; // 如果当前轮次没有移除任何先修关系，说明存在环
            }
            totalRemoved += currentRemoved; // 更新总的移除数量
        }
        return true;
    }
}

```


#### Binary Tree Right Side View

```java
/**
 * 199. Binary Tree Right Side View
 * 问题描述：
 * 给定一个二叉树，想象自己站在它的右侧，返回从顶部到底部你能看到的节点值。
 * 
 * 示例:
 * 输入: [1,2,3,null,5,null,4]
 * 输出: [1, 3, 4]
 * 解释:
 *    1            <---
 *  /   \
 * 2     3         <---
 *  \     \
 *   5     4       <---
 * 
 * 思路：
 * 通过深度优先搜索（DFS）遍历二叉树，记录每一层最右侧的节点值。
 *  Note:如果当前深度等于结果列表的大小，说明是该深度第一次访问到的节点，加入结果集
 *  如果不加这个判断，该深度所有右节点都会被加入结果集
 */
class Solution {

    /**
     * 保存结果的列表
     */
    private List<Integer> res;

    /**
     * 获取二叉树右视图的入口方法
     * 
     * @param root 二叉树的根节点
     * @return 从右侧看得到的节点值列表
     */
    public List<Integer> rightSideView(TreeNode root) {
        res = new ArrayList<>();
        dfs(root, 0);
        return res;
    }

    private void dfs(TreeNode node, int depth) {
        // 递归终止条件
        if (null == node)
            return;

        // 如果当前深度等于结果列表的大小，说明是该深度第一次访问到的节点，加入结果集
        if (depth == res.size())
            res.add(node.val);

        // 由于要从右侧开始看，先递归访问右子树
        dfs(node.right, depth + 1);
        dfs(node.left, depth + 1);
    }
}
```

#### Clone Graph
```java
/**
 * 133. 深度复制无向图
 * 
 * 问题描述：
 * 给定一个无向图的节点引用，返回该图的深度复制（克隆）。
 * 图中的每个节点包含一个整数（int）值以及一个邻居节点的列表（List[Node]）。
 * 
 * 思路：
 * - 使用深度优先搜索（DFS）遍历整个图，
 * - 使用 HashMap 记录已经访问的节点以及它们的克隆节点。
 *  - map可以记录原节点和克隆节点的映射关系，用于获得最后的返回值和添加cloned 邻居节点
 * - Note: dfs(neighbor); 完成后，neighbor 已被访问，且创建了cloned，所以下面添加时一定能找到
 */

class Solution {
    // 存储原节点和克隆节点的映射关系
    private Map<Node, Node> map;

    /**
     * 克隆图
     * 
     * @param node 图的起始节点
     * @return 克隆后的图的起始节点
     */
    public Node cloneGraph(Node node) {
        if (null == node)
            return null;

        // 初始化映射关系
        map = new HashMap<>();

        // 开始深度优先遍历
        dfs(node);

        // 返回克隆的节点
        return map.get(node);
    }

    /**
     * 深度优先遍历图
     * 
     * @param node 当前遍历的节点
     */
    private void dfs(Node node) {
        // 如果节点已经访问过，直接返回
        if (map.containsKey(node))
            return;

        // 克隆当前节点（只有val，neighbors目前还是空，后面遍历原节点neighbors， dfs创建cloned并添加）
        Node cloned = new Node(node.val);
        map.put(node, cloned);

        // 遍历邻居节点
        for (Node neighbor : node.neighbors) {
            // 递归深度优先遍历
            dfs(neighbor);

            // Note: 递归完成，此时 neighbor 已被访问，且创建了cloned，所以下面添加时一定能找到
            // 将邻居节点的克隆节点加入到当前节点的克隆节点的邻居列表中
            map.get(node).neighbors.add(map.get(neighbor));
        }
    }
}

```

#### Number of Islands
```java
/**
 * 200. Number of Islands
 * 
 * 问题描述：
 * 给定一个 m x n 的二维二进制矩阵 grid 表示一个地图。 '1' 表示陆地，'0' 表示水域。岛屿被水域包围，并且通过水平或垂直连接相邻的陆地而形成。
 * 假设网格的四个边均被水域包围。找到给定地图中岛屿的数量。岛屿是由相邻的陆地水平或垂直连接形成的。
 * 
 * 思路：
 * 使用深度优先搜索（DFS）或广度优先搜索（BFS）遍历整个地图，当遇到 '1' 时，将与该陆地相连的所有陆地标记为已访问，直到形成一个岛屿。
 * 统计岛屿的数量即为所求。
 */
class Solution {
    private char[][] grid;
    private int rows, cols;
    private int[][] directions = new int[][] { {1, 0}, {-1, 0}, {0, 1}, {0, -1} };

    /**
     * 计算岛屿数量
     * 
     * @param grid 二维数组表示的地图
     * @return 岛屿数量
     */
    public int numIslands(char[][] grid) {
        rows = grid.length;
        cols = grid[0].length;
        int islandCount = 0;
        this.grid = grid;

        // 遍历整个地图
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                // 如果当前位置是陆地，进行深度优先搜索
                if (grid[i][j] == '1') {
                    dfs(i, j);
                    islandCount++;
                }
            }
        }

        return islandCount;
    }

    /**
     * 深度优先搜索，将与当前陆地相连的所有陆地标记为已访问
     * 
     * @param x 当前位置的行坐标
     * @param y 当前位置的列坐标
     */
    private void dfs(int x, int y) {
        // 如果当前位置越界或者为水域，则返回
        if (!withinBoundary(x, y) || grid[x][y] == '0') {
            return;
        }

        // 标记当前位置为已访问
        grid[x][y] = '0';

        // 检查上下左右四个方向
        for (int[] direction : directions) {
            int newX = x + direction[0];
            int newY = y + direction[1];

            // 递归进行深度优先搜索
            if (withinBoundary(newX, newY)) {
                dfs(newX, newY);
            }
        }
    }

    /**
     * 检查坐标是否在地图范围内
     * 
     * @param x 行坐标
     * @param y 列坐标
     * @return 是否在地图范围内
     */
    private boolean withinBoundary(int x, int y) {
        return x >= 0 && x < rows && y >= 0 && y < cols;
    }
}

```

#### Lowest Common Ancestor of a Binary Search Tree

```java
/**
 * 235. Lowest Common Ancestor of a Binary Search Tree
 * 问题描述：
 * 给定一个二叉搜索树（BST），找到该树中两个指定节点的最近公共祖先（LCA）。
 * 
 * 思路：
 * 由于是二叉搜索树，可以利用其性质:
 * 在树中，左子树的所有节点都小于根节点，右子树的所有节点都大于根节点。
 * 
 * 如果p和q都小于根节点，说明它们都在根节点的左子树中，最近公共祖先也一定在左子树中。
 * 如果p和q都大于根节点，说明它们都在根节点的右子树中，最近公共祖先也一定在右子树中。
 * 如果一个在左，一个在右，说明当前根节点就是最近公共祖先。
 */

class Solution {

    TreeNode small;
    TreeNode big;

    /**
     * 找到两个节点的最近公共祖先
     *
     * @param root 二叉搜索树的根节点
     * @param p    第一个节点
     * @param q    第二个节点
     * @return 最近公共祖先节点
     */
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (p.val < q.val) {
            small = p;
            big = q;
        } else {
            small = q;
            big = p;
        }

        return dfs(root);
    }

    /**
     * 递归搜索最近公共祖先
     *
     * @param node 当前节点
     * @return 最近公共祖先节点
     */
    private TreeNode dfs(TreeNode node) {
        if (node.val < small.val)
            return dfs(node.right);

        if (node.val > big.val)
            return dfs(node.left);

        // node.val >= small.val && node.val <= big.val
        return node;
    }
}

```


#### Lowest Common Ancestor of a Binary Tree
```java
/**
 * 236. Lowest Common Ancestor of a Binary Tree
 * 问题描述：
 * 给定一个二叉树，找到该树中两个指定节点的最近公共祖先。
 * 
 * 思路：
 * 使用深度优先搜索（DFS）遍历二叉树，查找节点 p 和节点 q，找到后返回最近公共祖先。
 *  dfs左右子树，如果能找到p或q则返回，无则返回null
 *  如果dfs左右子树都不为null，说明一边一个，则直接返回当前node
 *  如果都在一边，则返回dfs那一侧的结果(右子树里递归上来的lca)
 */

class Solution {
    private TreeNode p;
    private TreeNode q;

    /**
     * 找到两个节点的最近公共祖先
     */
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        this.p = p;
        this.q = q;

        return dfs(root);
    }

    /**
     * 深度优先搜索，查找节点 p 和节点 q 的最近公共祖先
     *
     * @param node 当前节点
     * @return 最近公共祖先节点
     */
    private TreeNode dfs(TreeNode node) {
        // 如果当前节点为空，返回 null
        if (node == null) {
            return null;
        }
        
        // 如果当前节点是 p 或者 q 中的一个，直接返回当前节点
        if (node.val == p.val || node.val == q.val) {
            return node;
        }

        // 在左子树中查找
        TreeNode foundLeft = dfs(node.left);
        // 在右子树中查找
        TreeNode foundRight = dfs(node.right);

        // 如果左右子树都找到了节点，说明当前节点是最近公共祖先
        if (foundLeft != null && foundRight != null) {
            return node;
        }

        // 如果左子树找到了节点，返回左子树的结果，否则返回右子树的结果
        return (foundLeft == null) ? foundRight : foundLeft;
    }
}

```



### BFS

#### 993. Cousins in Binary Tree
```java
/**
 * 问题描述：
 * 判断二叉树中给定值 x 和 y 的节点是否为堂兄弟节点。
 * 堂兄弟节点是指深度相同但父节点不同的节点。
 *
 * 思路：
 * 使用广度优先搜索（BFS）遍历二叉树
 * 在同一层依次出队时检查是否同时找到x,y.
 * 加入左右子节点时检查是不是分别是x，y（亲兄弟返回false）
 * 这种顺序刚好也能检查到root的左右节点分别是xy的情况
 */

class Solution {

    /**
     * 判断是否为堂兄弟节点
     *
     * @param root 二叉树的根节点
     * @param x    第一个节点的值
     * @param y    第二个节点的值
     * @return 如果是堂兄弟节点，返回 true；否则返回 false
     */
    public boolean isCousins(TreeNode root, int x, int y) {
        if (root == null) {
            return false;
        }

        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);

        while (!queue.isEmpty()) {
            int size = queue.size();
            boolean foundX = false;
            boolean foundY = false;

            for (int i = 0; i < size; i++) {
                TreeNode node = queue.poll();

                // 检查当前节点是否为值 x 或 y 的节点
                if (node.val == x) {
                    foundX = true;
                }
                if (node.val == y) {
                    foundY = true;
                }

                // 检查 x 和 y 是否为同一父节点的子节点（不是堂兄弟节点）
                if (node.left != null && node.right != null) {
                    if ((node.left.val == x && node.right.val == y) || (node.left.val == y && node.right.val == x)) {
                        return false;
                    }
                }

                // 将子节点加入队列，准备遍历下一层
                if (node.left != null) {
                    queue.offer(node.left);
                }
                if (node.right != null) {
                    queue.offer(node.right);
                }
            }

            // 检查是否在同一层找到了 x 和 y
            if (foundX && foundY) {
                return true;
            } else if (foundX || foundY) {
                // 如果只找到其中一个值，它们不可能是堂兄弟节点
                return false;
            }
        }

        // 在树中未找到 x 和 y
        return false;
    }
}

```



#### Binary Tree Right Side View

```java
/**
 * 199. Binary Tree Right Side View
 * 问题描述：
 * 给定一个二叉树，返回其右视图。即每一层最右边的节点的值。
 * 
 * 示例:
 * 输入: [1,2,3,null,5,null,4]
 * 输出: [1, 3, 4]
 * 解释:
 *    1            <---
 *  /   \
 * 2     3         <---
 *  \     \
 *   5     4       <---
 * 
 * 思路：
 * 使用广度优先搜索（BFS）遍历每一层的节点，每层最后一个节点即为右视图的节点。
 */
class Solution {
    
    /**
     * 返回二叉树的右视图节点值列表。
     * 
     * @param root 二叉树的根节点
     * @return 右视图节点值列表
     */
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        if (root == null)
            return result;

        // 使用队列进行广度优先搜索
        Deque<TreeNode> queue = new ArrayDeque<>();
        queue.offer(root);

        while (!queue.isEmpty()) {
            int levelSize = queue.size();

            // 遍历当前层的所有节点
            for (int i = 0; i < levelSize; i++) {
                TreeNode node = queue.poll();

                // 将左子节点入队
                if (node.left != null)
                    queue.offer(node.left);
                
                // 将右子节点入队
                if (node.right != null)
                    queue.offer(node.right);
            }

            // 将当前层的最后一个节点值加入结果列表
            result.add(queue.peekLast().val);
        }

        return result;
    }
}
```

#### Binary Tree Level Order Traversal
```java
/**
 * 102. Binary Tree Level Order Traversal
 * 
 * 问题描述：
 * 给定一个二叉树，返回其节点值的层序遍历。
 * 
 * 示例：
 * 输入: [3,9,20,null,null,15,7]
 * 输出:
 * [
 *   [3],
 *   [9,20],
 *   [15,7]
 * ]
 * 
 * 思路：
 * 使用广度优先搜索（BFS）进行层序遍历。通过队列实现，依次将每一层的节点加入队列，
 * 并在遍历每一层时将节点值加入结果列表。
 */
class Solution {
    List<List<Integer>> res;

    /**
     * 二叉树的层序遍历
     * 
     * @param root 二叉树的根节点
     * @return 层序遍历结果
     */
    public List<List<Integer>> levelOrder(TreeNode root) {
        res = new ArrayList<>();
        if (null == root) {
            return res;
        }
        bfs(root);

        return res;
    }

    /**
     * 广度优先搜索遍历二叉树
     * 
     * @param node 当前处理的节点
     */
    private void bfs(TreeNode node) {
        Deque<TreeNode> queue = new ArrayDeque<>();

        queue.offerLast(node);

        while (!queue.isEmpty()) {

            List<Integer> row = new ArrayList<>();
            int rowLen = queue.size();

            for (int i = 0; i < rowLen; i++) {
                TreeNode cur = queue.pollFirst();

                row.add(cur.val);

                if (null != cur.left)
                    queue.offerLast(cur.left);

                if (null != cur.right)
                    queue.offerLast(cur.right);
            }

            res.add(row);
        }
    }
}

```


#### Binary Tree Zigzag Level Order Traversal

```java

/**
 * 103. Binary Tree Zigzag Level Order Traversal
 * 问题描述：
 * 给定二叉树的根节点，返回其蛇形层序遍历的节点值（即从左到右，下一层从右到左，交替进行）。
 *
 * 思路：
 * 使用广度优先搜索（BFS）来遍历二叉树，通过维护一个队列和一个标志位，控制每一层的遍历方向。
 */
class Solution {
    List<List<Integer>> res;

    /**
     * 蛇形层序遍历入口函数
     *
     * @param root 二叉树的根节点
     * @return 蛇形层序遍历结果
     */
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        res = new ArrayList<>();
        if (null == root)
            return res;

        bfs(root);
        return res;
    }

    /**
     * 使用BFS进行蛇形层序遍历
     *
     * @param node 当前层的起始节点
     */
    private void bfs(TreeNode node) {
        Deque<TreeNode> queue = new ArrayDeque<>();

        queue.offerLast(node);
        boolean leftToRight = true;

        while (!queue.isEmpty()) {
            int rowLen = queue.size();
            List<Integer> row = new LinkedList<>();

            for (int i = 0; i < rowLen; i++) {
                TreeNode cur = queue.pollFirst();

                if (leftToRight)
                    row.add(cur.val);
                else
                    row.add(0, cur.val);

                if (null != cur.left)
                    queue.offerLast(cur.left);
                if (null != cur.right)
                    queue.offerLast(cur.right);
            }

            res.add(row);
            leftToRight = !leftToRight;
        }
    }
}

```

####
```java

```

### Dynamic Plan
#### Climbing Stairs

> 关于DP的一个演化流程：https://segmentfault.com/a/1190000015944750

```java
/**
 * 70. Climbing Stairs
 * 问题描述：爬楼梯，每次可以爬1阶或2阶，求爬到第n阶的方法数。
 * 
 * 
 * 思路：采用动态规划，避免递归中的重复计算。
 * 
 */
public class ClimbingStairs {

    /**
     * 更通用的dp模版
     **/
    public int climbStairs(int n) {
        int[] dp = new int[n+1];

        if (n == 1) return 1;
        if (n == 2) return 2;

        dp[1] = 1;
        dp[2] = 2;

        for (int i = 3; i <=n; i++) {
            dp[i] = dp[i-1]+ dp[i-2];
        }

        return dp[n];
    }

    /**
     * 计算爬到第n阶的方法数。
     *
     * @param n 目标阶数
     * @return 方法数
     */
    public int climbStairs(int n) {
        // 边界条件
        if (n == 1) {
            return 1;
        }
        if (n == 2) {
            return 2;
        }

        // 初始化变量
        int twoStepBefore = 1;  // n-2阶的方法数
        int oneStepBefore = 2;  // n-1阶的方法数
        int current = 0;        // 当前阶的方法数

        // 动态规划计算
        for (int i = 2; i < n; i++) {
            current = twoStepBefore + oneStepBefore;
            twoStepBefore = oneStepBefore;
            oneStepBefore = current;
        }

        return current;
    }
}
```

#### Unique Paths
```java
/**
 * 62. Unique Paths
 * 
 * 问题描述：
 * 一个机器人位于一个 m x n 网格的左上角。机器人每次只能向下或向右移动一步，机器人试图到达网格的右下角。总共有多少条不同的路径？
 * 
 * 思路：
 * 动态规划问题。使用二维数组 dp 存储到达每个格子的路径数。
 * 初始化第一行和第一列为1，因为机器人只能向下或向右移动。
 * 对于其他格子，dp[i][j] = dp[i-1][j] + dp[i][j-1]，即可得到到达当前格子的路径数。
 */

class Solution {
    /**
     * 计算不同路径的数量
     * 
     * @param m 网格的行数
     * @param n 网格的列数
     * @return 不同路径的数量
     */
    public int uniquePaths(int m, int n) {
        // dp 数组用于存储到达每个格子的路径数
        int[][] dp = new int[m][n];

        // 初始化第一行和第一列为1，因为机器人只能向下或向右移动
        for (int i = 0; i < m; i++) {
            dp[i][0] = 1;
        }

        for (int i = 0; i < n; i++) {
            dp[0][i] = 1;
        }

        // 计算其他格子的路径数
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }

        // 返回右下角格子的路径数
        return dp[m - 1][n - 1];
    }
}
```

#### Coin Change
```java
/**
 * 322. Coin Change
 * 问题描述：给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。
 * 如果不能凑成总金额，返回 -1。
 *
 * 思路：动态规划。
 * 使用一维数组 dp 存储每个金额所需的最小硬币数量。
 * 初始化dp时设为amount+1，这是一个不可能的大值表示未解决（不要用MAX, 有越界可能）
 * 从小的coin开始，从小到大遍历dp，比较当前dp 和 用当前coin组成（dp[i - coin] + 1） 谁更小，如果后者小说明可以通过使用当前coin构成 更少硬币数的组合。
 * 后续依次用更大面额的coin重复这一过程。
 */
class Solution {
    /**
     * 
     * 计算最少的硬币个数
     *
     * @param coins  不同面额的硬币
     * @param amount 总金额
     * @return 最少的硬币个数，无法凑成返回 -1
     */
    public int coinChange(int[] coins, int amount) {
        // 初始化一个数组来存储最小硬币数量
        int[] dp = new int[amount + 1];
        // 将数组初始化为一个不可能的大值，表示尚未找到解决方案
        Arrays.fill(dp, amount + 1);

        // 组成金额 0 需要 0 个硬币
        dp[0] = 0;

        // 动态规划的核心逻辑
        for (int coin : coins) {
            // coin = 1 之后为 [0,1,2,3,4,5....]
            for (int i = coin; i <= amount; i++) {
                // 更新当前金额所需的最小硬币数量
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }

        // 如果 dp[amount] 仍然是初始值，表示无法组成该金额
        return dp[amount] > amount ? -1 : dp[amount];
    }
}

```

#### House Robber
```java
/**
 * 198. House Robber
 * 打家劫舍问题：在一条街上有多个房子，每个房子里有一定数量的钱。相邻的房子装有安全系统，如果两个相邻的房子在同一天晚上被打劫，就会触发警报。求在不触发警报的情况下，能够打劫到的最大金额。
 * 
 * 思路：使用动态规划。
 * 对于每个房子，可以选择抢或不抢，
 * 维护一个状态数组来记录到每个房子为止的最大金额。
 * 确保相邻的房子不能同时被抢。
 */
class Solution {
    
    /**
     * 计算能够打劫到的最大金额
     * 
     * @param nums 表示每个房子里的钱的数组
     * @return 返回最大金额
     */
    public int rob(int[] nums) {
        int len = nums.length;
        
        // 创建一个数组来存储到每个房子为止的最大金额
        int[] dp = new int[len];

        // 特殊情况处理
        if (len == 1) return nums[0];
        if (len == 2) return Math.max(nums[0], nums[1]);

        // 初始化前两个房子的最大金额
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);

        // 从第三个房子开始，更新每个房子的最大金额
        for (int i = 2; i < len; i++) {
            // 在选择抢当前房子和不抢当前房子之间取最大值
            dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]);
        }
        
        // 返回最后一个房子的最大金额
        return dp[len-1];
    }
}

```

#### Edit Distance
```java
/**
 * 72. Edit Distance
 * 
 * 问题描述：
 * 给定两个单词 word1 和 word2，请计算将 word1 转换为 word2 所需的最小操作数。
 * 你可以对一个单词进行如下三种操作：
 * 1. 插入一个字符
 * 2. 删除一个字符
 * 3. 替换一个字符
 * 
 * 示例：
 * 输入: word1 = "horse", word2 = "ros"
 * 输出: 3
 * 解释: horse -> rorse (替换 'h' 为 'r')
 *       rorse -> rose (删除 'r')
 *       rose -> ros (删除 'e')
 * 
 * 思路：
 * 使用动态规划。
 * 定义一个二维数组 dp，其中 dp[i][j] 表示将 word1 的前 i 个字符转换为 word2 的前 j 个字符所需的最小操作数。
 * ！！！ 要 m+1 的size，让最后一个index为m
 * 
 * dp[i][j - 1]：插入操作
 * 表示在 word1 的前 i 个字符转换为 word2 的前 j - 1 个字符所需的最小操作数。
 * 我们可以在 word1 的末尾插入一个字符，以匹配 word2 的第 j 个字符。
 * 
 * dp[i - 1][j - 1]：替换操作
 * 表示在 word1 的前 i - 1 个字符转换为 word2 的前 j - 1 个字符所需的最小操作数。
 * 我们可以替换 word1 的第 i 个字符，使其与 word2 的第 j 个字符相匹配。
 * 
 * dp[i - 1][j - 1]：替换操作
 * 表示在 word1 的前 i - 1 个字符转换为 word2 的前 j - 1 个字符所需的最小操作数。
 * 我们可以替换 word1 的第 i 个字符，使其与 word2 的第 j 个字符相匹配。
 * 
 */

class Solution {
    /**
     * 计算将 word1 转换为 word2 所需的最小操作数
     * 
     * @param word1 第一个单词
     * @param word2 第二个单词
     * @return 最小操作数
     */
    public int minDistance(String word1, String word2) {
        int m = word1.length();
        int n = word2.length();

        // dp数组，dp[i][j]表示将word1的前i个字符转换为word2的前j个字符所需的最小操作数
        int[][] dp = new int[m + 1][n + 1];

        // 如果word2为空，删除操作等同于删除word1中的字符
        for (int i = 0; i <= m; i++) {
            dp[i][0] = i;
        }
        
        // 如果word1为空，插入操作等同于在word2中插入相同的字符
        for (int i = 0; i <= n; i++) {
            dp[0][i] = i;
        }        

        char[] char1 = word1.toCharArray();
        char[] char2 = word2.toCharArray();
        // 初始化dp数组
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                // 如果当前字符相等，不需要操作，继承前一个状态的操作数
                if (char1[i - 1] == char2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1];
                }
                // 如果当前字符不相等，可以进行插入、删除或替换操作，取最小操作数
                else {
                    dp[i][j] = 1 + Math.min(Math.min(dp[i][j - 1], dp[i - 1][j]), dp[i - 1][j - 1]);
                }
            }
        }

        // 返回将word1转换为word2所需的最小操作数
        return dp[m][n];
    }
}

```

### Cyclic Sort

#### Missing Number
```java
/**
 * 268. Missing Number
 * 
 * 问题描述：
 * 给定一个包含 n 个不同数字的数组 nums，数字范围在 [0, n]，返回在数组中缺失的唯一数字。
 * 
 * 思路：
 * 使用 Cyclic Sort 算法，将每个数字放在其正确的位置上。
 * 然后遍历数组，找到第一个不在正确位置上的数字，其索引即为缺失的数字。
 * 如果所有数字都在正确位置上，那么缺失的数字就是 n。
 * 
 * Note: 最后返回nums.length, 应对 [0, 1]这种情形, n=2,缺失的也是2
 */
class Solution {
    /**
     * 寻找缺失的数字
     * 
     * @param nums 包含 n 个不同数字的数组
     * @return 缺失的数字
     */
    public int missingNumber(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
            while (nums[i] < nums.length && nums[i] != i) {
                swap(nums, i, nums[i]);
            }
        }

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != i) {
                return i;
            }
        }

        return nums.length; // 
    }

    /**
     * 交换数组中的两个元素
     * 
     * @param arr 数组
     * @param i   要交换的元素索引之一
     * @param j   要交换的元素索引之二
     */
    private void swap(int[] arr, int i, int j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

```

#### Set Mismatch
```java
/**
 * 645. Set Mismatch
 * 
 * 问题描述：
 * 给定一个整数数组 nums，其中 1 ≤ nums[i] ≤ n（n 为数组长度），其中一个数字重复出现且一个数字缺失。
 * 找到这两个数字并以数组的形式返回。
 * 
 * 思路：
 * 使用 Cyclic Sort 算法，通过不断将数字放到其正确的位置上，
 * 正确位置： num[i] == i+1; 
 * 不在正确位置且不是重复数字的交换i和nums[i]-1（ [1,2,2,4]中第二个2，即index=2的2，我们不希望他和index=1的2交换。）
 * 
 * 再次遍历 nums[i] != i + 1 （不在正确位置上的，即重复的数字[1,2,2,4]中index=2, 重复的nums[2], 缺失的i+1）
 */

class Solution {
    /**
     * 找到重复和缺失的数字
     * 
     * @param nums 包含重复和缺失数字的数组
     * @return 包含重复和缺失数字的数组
     */
    public int[] findErrorNums(int[] nums) {
        int[] result = new int[2];
        
        int i = 0;
        while (i < nums.length) {
            // 如果当前数字不在正确的位置上，并且不是重复的数字
            // NoTE: 如[1,2,2,4]，当遍历到index2时，我们不希望他和index1的2交换
            if (nums[i] != i + 1 && nums[i] != nums[nums[i] - 1]) {
                // 交换当前位置的数字到正确的位置上
                swap(nums, i, nums[i] - 1);
            } else {
                i++;
            }
        }
        
        // 找到重复的数字和缺失的数字
        for (i = 0; i < nums.length; i++) {
            if (nums[i] != i + 1) {
                result[0] = nums[i];  // 重复的数字
                result[1] = i + 1;     // 缺失的数字
                break;
            }
        }
        
        return result;
    }

    /**
     * 交换数组中两个位置的元素
     * 
     * @param arr 数组
     * @param i   第一个位置的索引
     * @param j   第二个位置的索引
     */
    private void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
```

#### Find All Numbers Disappeared in an Array
```java
/**
 * 448. Find All Numbers Disappeared in an Array
 *
 * 问题描述：
 * 给定一个包含 n 个整数的数组 nums，其中 nums[i] 在区间 [1, n] 内。
 * 返回 [1, n] 范围内不存在在数组中的所有数字。
 *
 * 思路：
 * 使用 Cyclic Sort 算法，将数字放到正确的位置
 * 正确位置: nums[j] != j + 1
 * 换法：nums[i] != nums[nums[i] - 1] 交换 i 和 nums[i] - 1
 */
public class Solution {
    /**
     * 找到数组中消失的数字
     *
     * @param nums 包含 n 个整数的数组，其中 nums[i] 在区间 [1, n] 内
     * @return [1, n] 范围内不存在在数组中的所有数字
     */
    public List<Integer> findDisappearedNumbers(int[] nums) {
        List<Integer> result = new ArrayList<>();

        // 执行 Cyclic Sort
        int i = 0;
        while (i < nums.length) {
            if (nums[i] != nums[nums[i] - 1]) {
                // 交换 nums[i] 和 nums[nums[i] - 1]，将数字放到正确的位置
                int temp = nums[i];
                nums[i] = nums[temp - 1];
                nums[temp - 1] = temp;
            } else {
                i++;
            }
        }

        // 找到不在正确位置的数字
        for (int j = 0; j < nums.length; j++) {
            if (nums[j] != j + 1) {
                result.add(j + 1);
            }
        }

        return result;
    }
}

```

#### Find the Duplicate Number
```java
/**
 * 287. Find the Duplicate Number
 * 
 * NOTE:  基本可用448. Find All Numbers Disappeared in an Array 一样的交换方式
 * 即交换 index： i 和 nums[i] - 1， 适用于最后得到[1,2,3,4... ]这样的arr
 *
 * 问题描述：
 * 给定一个包含 n + 1 个整数的数组 nums，其中每个整数在范围 [1, n] 之间，证明必定存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。
 * 
 * 思路：
 * 使用Cyclic Sort算法，将数组中的元素放到它们正确的位置。在遍历的过程中，一旦发现当前位置的元素不等于它正确的位置上的元素，就进行交换。
 * 最终，再次遍历数组，找到第一个不在正确位置的数字即为重复的数字。
 */
class Solution {
    /**
     * 寻找重复的数字
     *
     * @param nums 包含 n + 1 个整数的数组，每个整数在范围 [1, n] 之间
     * @return 重复的整数
     */
    public int findDuplicate(int[] nums) {
        int i = 0;
        // Cyclic Sort
        while (i < nums.length) {
            if (nums[i] != nums[nums[i] - 1]) {
                // 交换 nums[i] 和 nums[nums[i] - 1]，将数字放到正确的位置
                int temp = nums[i];
                nums[i] = nums[temp - 1];
                nums[temp - 1] = temp;
            } else {
                i++;
            }
        }

        // 找到第一个不在正确位置的数字，即为重复的数字
        for (int j = 0; j < nums.length; j++) {
            if (nums[j] != j + 1) {
                return nums[j];
            }
        }

        // 如果没有重复的数字，返回-1
        return -1;
    }
}

```

#### 
```java
/**
 * 442. Find All Duplicates in an Array
 * 
 * NOTE:  基本可用448. Find All Numbers Disappeared in an Array 一样的交换方式
 * 即交换 index： i 和 nums[i] - 1， 适用于最后得到[1,2,3,4... ]这样的arr
 * 
 * 问题描述：
 * 给定一个包含 n 个整数的数组 nums，其中每个数字都在 1 到 n 之间（包括 1 和 n），
 * 请找出所有重复的数字，返回它们的列表。
 * 
 * 思路：
 * 使用 Cyclic Sort 将每个数字放到它们正确的位置，然后找出不在正确位置的数字。
 */
class Solution {
    /**
     * 找出所有重复的数字
     * 
     * @param nums 包含 n 个整数的数组
     * @return 重复的数字列表
     */
    public List<Integer> findDuplicates(int[] nums) {
        List<Integer> duplicates = new ArrayList<>();

        int i = 0;
        // Cyclic Sort
        while (i < nums.length) {
            if (nums[i] != nums[nums[i] - 1]) {
                // 交换 nums[i] 和 nums[nums[i] - 1]，将数字放到正确的位置
                int temp = nums[i];
                nums[i] = nums[temp - 1];
                nums[temp - 1] = temp;
            } else {
                i++;
            }
        }

        // 找到不在正确位置的数字即为重复的数字
        for (int j = 0; j < nums.length; j++) {
            if (nums[j] != j + 1) {
                duplicates.add(nums[j]);
            }
        }

        return duplicates;
    }
}

```





















### Union find

#### Find if Path Exists in Graph
```java
package roadmap;
/**
 * 1971. Find if Path Exists in Graph
 * 问题描述：给定一个无向图，判断从源节点到目标节点是否存在有效路径。
 *
 * 思路：使用并查集（Union Find）来判断两个节点是否属于同一个集合，从而确定是否存在有效路径。
 */
public class ValidPath {

    private int[] root;
    private int[] rank;

    /**
     * 判断从源节点到目标节点是否存在有效路径。
     *
     * @param n             图中节点的数量。
     * @param edges         表示图中连接关系的边。
     * @param source        源节点。
     * @param destination   目标节点。
     * @return              如果存在有效路径，返回 true；否则返回 false。
     */
    public boolean validPath(int n, int[][] edges, int source, int destination) {
        // 初始化并查集
        root = new int[n];
        rank = new int[n];
        for (int i = 0; i < n; i++) {
            root[i] = i;
            rank[i] = 1;
        }

        // 遍历边，合并节点
        for (int[] edge : edges) {
            int head = edge[0];
            int tail = edge[1];

            // 如果当前边连接的是源节点和目标节点，则直接返回 true
            if ((head == source && tail == destination) || (head == destination && tail == source)) {
                return true;
            }

            merge(head, tail);
        }

        // 判断源节点和目标节点是否属于同一个集合
        return find(source) == find(destination);
    }

    /**
     * 查找节点 x 所在集合的根节点。
     *
     * @param x 要查找的节点。
     * @return  节点 x 所在集合的根节点。
     */
    private int find(int x) {
        if (root[x] == x) {
            return x;
        }

        // 压缩路径
        // 把沿途的每个节点的父节点都设为根节点
        root[x] = find(root[x]);
        return root[x];
    }

    /**
     * 合并两个节点所在的集合。
     *
     * @param x 节点 x。
     * @param y 节点 y。
     */
    private void merge(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);

        // 将 rank 较小的集合合并到 rank 较大的集合中
        if (rank[rootX] <= rank[rootY]) {
            root[rootX] = rootY;
        } else {
            root[rootY] = rootX;
        }
            
        // 如果两个集合的 rank 相等且不属于同一个集合，则将新根节点的 rank 增加 1
        // 如果深度相同且根节点不同，则根据上面包括 == 的分支，将新的父节点的秩增加
        // 如我选择rank[rootX] <= rank[rootY]，root[rootX] = rootY; 即等于的时候rootY是父节点
        // 所以rank[rootY]++
        if (rank[rootX] == rank[rootY] && rootX != rootY) {
            rank[rootY]++;
        }
    }
}

```

#### Number of Islands
```java
/**
 * 200. Number of Islands
 * 
 * 问题描述：
 * 给定一个 m x n 的二维二进制网格 grid 表示一个地图，'1' 表示陆地，'0' 表示水域。
 * 计算岛屿的数量。岛屿被水域包围，通过水平或垂直连接相邻的陆地而形成。可以假设网格的四个边均被水域包围。
 * 
 * 思路：
 * 使用并查集来维护岛屿之间的连接关系。根据行列数计算一维index，转化成一维并查集
 * 通过遍历网格，初始化并查集，并在每次遇到land时计数加一
 * 第二次遍历将相邻的陆地连接起来，每当完成一次链接，将计数减一
 */
class Solution {
    int[] root;
    int[] rank;
    int count; // 记录岛屿的数量

    /**
     * 计算岛屿数量的方法
     * @param grid 二维二进制网格
     * @return 岛屿数量
     */
    public int numIslands(char[][] grid) {
        if (grid == null || grid.length == 0 || grid[0].length == 0) {
            return 0;
        }

        int rows = grid.length;
        int cols = grid[0].length;

        root = new int[rows * cols];
        rank = new int[rows * cols];

        // 初始化并查集
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (grid[i][j] == '1') {
                    int index = i * cols + j;
                    root[index] = index;
                    rank[index] = 1;
                    count++; // 第一次遍历遇到land就先计数一次
                }
            }
        }

        // 遍历整个 grid
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (grid[i][j] == '1') {
                    int index = i * cols + j;

                    // 将相邻的岛屿连接起来
                    if (i > 0 && grid[i - 1][j] == '1')
                        union(index, (i - 1) * cols + j);
                    if (j > 0 && grid[i][j - 1] == '1')
                        union(index, i * cols + (j - 1));
                }
            }
        }

        return count;
    }

    /**
     * 查找节点所属集合的根节点
     * @param x 节点
     * @return 根节点
     */
    int find(int x) {
        if (x == root[x])
            return x;
        // 路径压缩，将沿途的每个节点的父节点都设为根节点
        root[x] = find(root[x]);
        return root[x];
    }

    /**
     * 将两个集合合并
     * @param x 节点 x
     * @param y 节点 y
     */
    void union(int x, int y) {
        int rootX = find(x), rootY = find(y);

        // 深度更大的根节点做父
        if (rank[rootX] <= rank[rootY])
            root[rootX] = rootY;
        else
            root[rootY] = rootX;

        // 如果深度相同且根节点不同，则根据上面包括 == 的分支，将新的父节点的秩增加
        // 如我选择 rank[rootX] <= rank[rootY]，root[rootX] = rootY; 即等于的时候 rootY 是父节点
        // 所以 rank[rootY]++
        if (rank[rootX] == rank[rootY] && rootX != rootY)
            rank[rootX]++;
        if (rootX != rootY)
            count--;
    }
}

```

### Out of Question
#### Majority Element
```swift
/**
169. Majority Element
 # 问题描述 
 给定一个大小为 n 的数组 nums，返回数组的主要元素。

 主要元素是指在数组中出现次数大于 ⌊n / 2⌋ 的元素。你可以假设数组是非空的，并且主要元素总是存在的。

 # 思路 
 使用摩尔投票法解决这个问题。摩尔投票法的基本思想是在每一轮投票中，删除两个不同的元素，直到投票结束，剩下的元素就是可能的主要元素。

 具体步骤如下：
 1. 初始化计数器 `cnt` 为 1，当前可能的主要元素 `num` 为数组的第一个元素 `nums[0]`。
 2. 从数组的第二个元素开始遍历，如果当前元素与 `num` 相同，则 `cnt` 加 1，否则 `cnt` 减 1。
 3. 如果 `cnt` 变为 0，说明之前的元素无法成为主要元素，更新 `num` 为当前元素，并将 `cnt` 重置为 1。
 4. 最终 `num` 即为可能的主要元素。

 # Note 
 - 该算法基于摩尔投票法，通过删除两个不同的元素的方式来寻找可能的主要元素。
 */

class Solution {
    func majorityElement(_ nums: [Int]) -> Int {
        var len = nums.count
        if len < 2 {
            return nums[0]
        }
        var cnt = 1
        var num = nums[0]

        for i in 1..<len {
            if nums[i] == num {
                cnt += 1
            } else {
                cnt -= 1
                if cnt == 0 {
                    num = nums[i]
                    cnt = 1
                }
            }
        }

        return num
    }
}
```


####
```swift
/**
 # 问题描述 
 给定一个整数数组 nums，返回一个数组 answer，其中 answer[i] 等于 nums 中除了 nums[i] 之外所有元素的乘积。

 nums 的任意前缀或后缀的乘积都保证在 32 位整数范围内。

 你必须实现时间复杂度为 O(n) 并且不使用除法操作的算法。

 # 思路 
 本题的核心思路是使用两个数组来保存当前元素左边和右边的乘积，然后将这两个数组相乘得到最终结果。

 具体步骤如下：
 1. 创建两个数组 `prefixProds` 和 `suffixProds`，分别用于保存当前元素左边的乘积和右边的乘积，初始化所有元素为 1。
 2. 使用一个循环计算 `prefixProds` 数组，从左到右遍历，每次更新当前元素左边的乘积。
 3. 使用另一个循环计算 `suffixProds` 数组，从右到左遍历，每次更新当前元素右边的乘积。
 4. 创建一个结果数组 `ret`，遍历原始数组，将 `prefixProds[i] * suffixProds[i]` 的结果添加到 `ret` 中。
 5. 返回最终结果数组 `ret`。

 # Note 
 - 使用两个数组分别保存左边和右边的乘积，避免使用除法操作。
 */

class Solution {
    func productExceptSelf(_ nums: [Int]) -> [Int] {
        // 获取数组长度
        let len = nums.count

        // 初始化左边和右边乘积数组
        var prefixProds = Array(repeating: 1, count: len)
        var suffixProds = Array(repeating: 1, count: len)

        // 计算左边乘积数组
        var prefixProd = 1
        for i in 0..<len {
            prefixProds[i] = prefixProd
            prefixProd *= nums[i]
        }

        // 计算右边乘积数组
        var suffixProd = 1
        for i in (0..<len).reversed() {
            suffixProds[i] = suffixProd
            suffixProd *= nums[i]
        }

        // 计算最终结果数组
        var ret: [Int] = []
        for i in 0..<len {
            ret.append(prefixProds[i] * suffixProds[i])
        }
        return ret
    }
}
```