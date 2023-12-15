---
title: Algorithm & Snippet
categories: Leetcode
tags:
  - Leetcode
---

- [Common Snippet](#common-snippet)
  - [Stack, Queue, Heap](#stack-queue-heap)
  - [Reverse Linked List](#reverse-linked-list)
  - [交错合并两个链表(长度无限制)](#交错合并两个链表长度无限制)
  - [交错合并两个链表(数量最多相差1)](#交错合并两个链表数量最多相差1)
- [排序和选择](#排序和选择)
  - [快速排序](#快速排序)
  - [快速选择](#快速选择)
  - [归并排序](#归并排序)
- [链表](#链表)
  - [原地翻转](#原地翻转)
  - [原地删除节点](#原地删除节点)
  - [快慢指针](#快慢指针)
    - [快慢指针找中点（或者 1/n 点）](#快慢指针找中点或者-1n-点)
    - [判断是否有环，找环的起始点](#判断是否有环找环的起始点)
      - [141. Linked List Cycle](#141-linked-list-cycle)
      - [142. Linked List Cycle II](#142-linked-list-cycle-ii)
- [堆，栈，队列，哈希表](#堆栈队列哈希表)
  - [栈](#栈)
    - [20. Valid Parentheses](#20-valid-parentheses)
    - [232. Implement Queue using Stacks](#232-implement-queue-using-stacks)
  - [堆](#堆)
    - [双堆法获取中位数](#双堆法获取中位数)
  - [队列](#队列)
    - [225. Implement Stack using Queues](#225-implement-stack-using-queues)
  - [单调队列，单调栈](#单调队列单调栈)
    - [155. Min Stack](#155-min-stack)
- [二分法](#二分法)
  - [基本二分查找](#基本二分查找)
  - [查找第一个等于给定值的元素](#查找第一个等于给定值的元素)
  - [查找最后一个等于给定值的元素](#查找最后一个等于给定值的元素)
  - [第一个严格大于 给定值](#第一个严格大于-给定值)
  - [第一个严格小于给定值](#第一个严格小于给定值)
  - [第一个大于等于给定值的元素](#第一个大于等于给定值的元素)
  - [最后一个小于等于](#最后一个小于等于)
- [双指针](#双指针)
  - [同向双指针](#同向双指针)
    - [283. Move Zeroes](#283-move-zeroes)
  - [背向双指针](#背向双指针)
    - [5. Longest Palindromic Substring](#5-longest-palindromic-substring)
  - [相向双指针](#相向双指针)
    - [相向双指针判断回文](#相向双指针判断回文)
    - [167. Two Sum II - Input Array Is Sorted](#167-two-sum-ii---input-array-is-sorted)
- [BFS](#bfs)
  - [基于树](#基于树)
    - [102. Binary Tree Level Order Traversal](#102-binary-tree-level-order-traversal)
    - [103. Binary Tree Zigzag Level Order Traversal](#103-binary-tree-zigzag-level-order-traversal)
  - [基于图](#基于图)
- [DFS](#dfs)
  - [回溯](#回溯)
  - [分治](#分治)
    - [226 Invert Binary Tree](#226-invert-binary-tree)
    - [101. Symmetric Tree](#101-symmetric-tree)
  - [给定二叉树的根，检查它是否是自身的镜像(即围绕其中心对称)。](#给定二叉树的根检查它是否是自身的镜像即围绕其中心对称)
    - [543. Diameter of Binary Tree](#543-diameter-of-binary-tree)
  - [两个节点之间的路径长度由它们之间的边数表示。](#两个节点之间的路径长度由它们之间的边数表示)
    - [124. Binary Tree Maximum Path Sum](#124-binary-tree-maximum-path-sum)
  - [给定二叉树的根，返回任何非空路径的最大路径和。](#给定二叉树的根返回任何非空路径的最大路径和)
  - [基于树](#基于树-1)
  - [基于 BST](#基于-bst)
  - [基于图](#基于图-1)
  - [基于排列组合](#基于排列组合)
  - [记忆化搜索](#记忆化搜索)
- [前缀和](#前缀和)



# Common Snippet
## Stack, Queue, Heap

```java
// Stack
Deque<Integer> stack = new ArrayDeque<>();
stack.offer(1);
stack.peek();
stack.isEmpty();
stack.poll();

// Queue
Deque<Integer> queue = new ArrayDeque<>();

// 在队列尾部插入元素
queue.offerLast(1); // -> offer
// 在队列头部插入元素
queue.offerFirst(0);

queue.peekFirst();
queue.peekLast();

queue.pollFirst();
queue.pollLast(); // -> poll

queue.isEmpty();

// Heap
PriorityQueue<Integer> minHeap = new PriorityQueue<>(k);
PriorityQueue<Integer> maxHeap = new PriorityQueue<>(k, (a, b) -> b - a);

minHeap.offer(1);
minHeap.isEmpty();
minHeap.peek(); // 看堆顶
minHeap.poll(); // 弹出堆顶

```
## Reverse Linked List
```java
    private ListNode reverseList(ListNode node) { // Side-effect change node's list
        ListNode prev = null;

        while (node != null) {
            ListNode nextNode = node.next;
            node.next = prev;
            prev = node;
            node = nextNode;
        }

        return prev;
    }
```

## 交错合并两个链表(长度无限制)
```java
    public static ListNode mergeAlternately(ListNode l1, ListNode l2) {
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
```

## 交错合并两个链表(数量最多相差1)



# 排序和选择

## 快速排序

快速排序是一种基于分治思想的排序算法。其核心思想可以简单概括为：

1. 选择一个基准元素（Pivot）： 从待排序的元素中选择一个基准元素。

2. 划分阶段（Partition）： 将数组中的元素分为两部分，小于基准的放在左边，大于基准的放在右边。基准元素在最终排好序的位置。

3. 递归排序： 递归地对左右两部分进行快速排序。

***时间复杂度：***
- 平均情况： `O(n log n)`。这是在每一次划分都大致平衡的情况下的平均时间复杂度。
- 最坏情况： `O(n^2)`。这种情况发生在每一次划分都是最不平衡的，例如，选择的基准总是当前子数组的最大或最小元素。-> `待排序数组已经有序（升序或降序）的情况下，或者在所有元素值都相同的情况下`
- 最好情况： `O(n log n)`。在每次划分都是平衡的情况下，最好情况下的时间复杂度和平均情况相同。

***空间复杂度：***
- 平均情况： `O(log n)`。这是由于递归调用栈的深度。
- 最坏情况： `O(n)`。在最坏情况下，递归栈可能包含所有的 n 个元素。
- 最好情况： `O(log n)`。在每次划分都平衡的情况下，递归栈的深度是对数级别的。

稳定性： ***不稳定***。在排序过程中，相同元素的相对位置可能会改变。

> 稳定的排序：冒泡，插入，归并，计数，基数

```java
    private static void quickSort(int[] arr, int low, int high) {
        // 当排序范围为空或仅包含一个元素时，无需排序
        if (low >= high) {
            return;
        }

        int i = low, j = high;

        // 使用 arr[low] 作为基准元素进行划分
        int pivotIndex = low;
        while (i < j) {
            // 从右向左找到第一个严格小于基准的元素
            while (i < j && arr[j] >= arr[pivotIndex]) {
                j--;
            }
            // 从左向右找到第一个严格大于基准的元素
            while (i < j && arr[i] <= arr[pivotIndex]) {
                i++;
            }
            // 交换找到的元素，使得小于基准的元素在左，大于基准的元素在右
            swap(arr, i, j);
        }

        // i 左边的元素都不大于基准元素
        // j 右边的元素都不小于基准元素
        // 将基准元素交换到正确的位置
        swap(arr, pivotIndex, i);

        // 递归排序左右两个子数组
        quickSort(arr, low, i - 1);
        quickSort(arr, i + 1, high);
    }

    private static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
```

> Note: 我在这里每次固定选择了区间左边界low索引的值作为基准值
> 理论上使用区间内的随机值更好，可以避免出现本身有序这种极端恶劣情况

```java
private static int getRandomPivotIndex(int low, int high) {
    // new Random(): 创建一个新的 Random 对象，这是 Java 中用于生成伪随机数的类。
    // Random 对象的 nextInt 方法，该方法生成一个介于 0（包括）和参数之间的随机整数。在这里，参数是 high - low + 1，即闭区间 [0, high - low]。
    return new Random().nextInt(high - low + 1) + low;
}
```

## 快速选择
快速选择（QuickSelect）是一种基于快速排序思想的算法，用于从`无序列表中选择第 k 小或第 k 大的元素`。
其核心思想是通过每次选取一个基准元素，将列表分为两部分，然后根据基准元素的位置来决定继续在左侧还是右侧进行查找。

> 选取基准值（选取low，也可以加一个random选取），做一次快排把基准值移动到全局有序的位置
> 根据已经在有序位置的基准值索引与K比较，决定在基准值的哪一边递归
> 可以在整体完成快排前找到K，当然运气不好也会出现最后一个找到，实际上做了整个快排


```java
private static int quickSelect(int[] arr, int low, int high, int k) {
    if (low >= high) {
        return arr[low];
    }

    int pivotIndex = partition(arr, low, high);

    // 找到k，返回k索引的值
    // Note: 此时返回的值是索引为K的值, 如果是做TOP K（第K大）， 这里的k在传入前要处理成 len - K
    if (k == pivotIndex) {
        return arr[k];
    } else if (k < pivotIndex) {
        return quickSelect(arr, low, pivotIndex - 1, k);
    } else {
        return quickSelect(arr, pivotIndex + 1, high, k);
    }
}

// 以当前low索引的值作为基准值，做快排
// 返回快排后的基准值索引（此时该值已被移动到他全局有序的位置）
private static int partition(int[] arr, int low, int high) {
    int pivotIndex = low;
    int i = low;
    int j = high;

    while (i < j) {
        while (i < j && arr[j] >= arr[pivotIndex]) {
            j--;
        }

        while (i < j && arr[i] <= arr[pivotIndex]) {
            i++;
        }

        swap(arr, i, j);
    }

    swap(arr, pivotIndex, i);

    return i;
}

private static void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
```

## 归并排序
归并排序是一种基于分治法的经典排序算法。其核心思想可以简要概括为以下步骤：

1. 分解： 将原始数组逐步分解为越来越小的子数组，直到每个子数组只有一个元素。这是通过`递归`实现的。

2. 解决： 对每个小数组进行排序。对于只有一个元素的数组，自然是有序的。

3. 合并： 将两个有序的子数组合并成一个更大的有序数组。这一步是归并排序的核心。合并操作的关键在于 ***如何将两个有序的子数组合并成一个有序数组*** 。这通常涉及创建一个临时数组，然后依次比较两个子数组中的元素，将较小的元素放入临时数组中，直到其中一个子数组的元素全部放入临时数组。接着，将剩余的子数组的元素直接放入临时数组。

时间复杂度任何情况下都是 `n log n`
空间复杂度都是 `n`
稳定

```java
// 主要的归并排序方法
public static void mergeSort(int[] arr, int low, int high) {
    if (low < high) {
        // 找到数组中点
        int mid = low + (high - low) / 2;

        // 递归地对左右两半进行排序
        mergeSort(arr, low, mid);
        mergeSort(arr, mid + 1, high);

        // 合并已排序的两半
        merge(arr, low, mid, high);
    }
}

// 合并两个已排序的子数组
public static void merge(int[] arr, int low, int mid, int high) {
    // 计算左右两个子数组的大小
    int size1 = mid - low + 1;
    int size2 = high - mid;

    // 创建临时数组来存储左右两个子数组
    int[] left = new int[size1];
    int[] right = new int[size2];

    // 将数据复制到临时数组中
    for (int i = 0; i < size1; i++) {
        // Note：起始index是 low
        left[i] = arr[low + i];
    }
    for (int i = 0; i < size2; i++) {
        // Note：起始index是 mid + 1
        // 因为size1的数组包含了mid
        right[i] = arr[mid + 1 + i];
    }

    // 初始化左右两个子数组的指针和原始数组的指针 k
    int i = 0, j = 0;
    int k = low;

    // 合并两个子数组
    while (i < size1 && j < size2) {
        if (left[i] <= right[j]) {
            arr[k++] = left[i++];
        } else {
            arr[k++] = right[j++];
        }
    }

    // 将左边子数组中剩余的元素复制到原始数组
    while (i < size1) {
        arr[k++] = left[i++];
    }

    // 将右边子数组中剩余的元素复制到原始数组
    while (j < size2) {
        arr[k++] = right[j++];
    }
}
```


# 链表
## 原地翻转
```java
static ListNode reverseList(ListNode node) {
    if (null == node) {
        return null;
    }

    ListNode prev = null;
    // 让node还是指向头，避免副作用，万一调用外部对head还有操作
    ListNode curr = node;
    while (null != curr) {
        // 暂存next节点
        ListNode nextNode = curr.next;
        // next指针反转方向
        curr.next = prev;
        // 更新prev， 更新curr
        prev = curr;
        curr = nextNode;
    }

    return prev;
}
```

## 原地删除节点

```java
// 移除所有符合的节点而非仅第一个
static void deleteNodeInPlace(ListNode node, int targetVal) {
    if (null == node) {
        return;
    }

    ListNode curr = node;
    ListNode prev = null;

    while (null != curr) {
        ListNode nextNode = curr.next;

        if (curr.val == targetVal) {
            prev.next = nextNode;
            // 如果仅移除第一个，在这里操作return即可
        }

        prev = curr;
        curr = nextNode;

    }

}
```

## 快慢指针
快慢指针是一种常见的算法技巧，通常用于链表操作和数组遍历。

### 快慢指针找中点（或者 1/n 点）
循环结束后, `slow`会指向链表的中间节点（有两种变体，当奇数个节点时都指向中间，偶数节点时分别指向靠左和靠右）

> 大多数时候都是指向靠左更好，因为是单向列表，靠左操作空间更大。

```java
    ListNode slow = head;
    ListNode fast = head;

    // 偶数时，slow停在靠左
    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // 偶数时，slow停在靠右
    while (null != fast && null != fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
```

### 判断是否有环，找环的起始点
***判断是否有环：***
1. 使用两个指针，一个快指针每次移动两步，一个慢指针每次移动一步。
2. 如果链表中有环，快指针最终会追上慢指针，如果没有环，快指针会先到达链表尾部。

#### 141. Linked List Cycle
给定Head，即链表的头，确定该链表中是否有循环。

1. 快慢指针
2. 如果链表中没有环，快指针最终会到达链表的末尾，这时我们可以判断链表没有环
3. 如果链表中有环，快指针最终会追上慢指针，两者会相遇。


```java
public class Solution {
    public boolean hasCycle(ListNode head) {
        if (head == null || head.next == null) {
            return false;  // 没有节点或者只有一个节点，肯定没有环
        }

        ListNode slow = head;
        ListNode fast = head.next;

        while (slow != fast) {
            if (fast == null || fast.next == null) {
                return false;  // 如果快指针到达链表末尾，说明没有环
            }

            slow = slow.next;
            fast = fast.next.next;
        }

        return true;  // 如果在遍历过程中相遇，说明链表有环
    }
}

```

#### 142. Linked List Cycle II
给定链表的头，返回循环开始的节点。如果没有循环，则返回null。

```java
public class Solution {
    public ListNode detectCycle(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        // 判断是否有循环
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow == fast) {
                // 有循环，引入新指针从头开始找循环起点
                ListNode newPointer = head;
                while (newPointer != slow) {
                    newPointer = newPointer.next;
                    slow = slow.next;
                }
                return newPointer; // 返回循环的起点
            }
        }

        return null; // 没有循环
    }
}

```


# 堆，栈，队列，哈希表

## 栈
### 20. Valid Parentheses
1. 遍历输入的字符串。
2. 如果当前字符是左括号（'('，'{'，'['），则将其推入栈。
3. 如果当前字符是右括号（')'，'}'，']'），则检查栈是否为空。
   1. 如果为空，说明没有匹配的左括号，直接返回 false
   2. 否则，从栈中弹出一个左括号，检查它与当前右括号是否匹配。如果不匹配，返回 false
4. 遍历完整个字符串后，检查栈是否为空.如果为空，说明所有的括号都有匹配，返回 true
```java
public class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();

        for (char c : s.toCharArray()) {
            if (c == '(' || c == '{' || c == '[') {
                stack.push(c);
            } else {
                if (stack.isEmpty()) {
                    return false; // 没有匹配的左括号
                }

                char top = stack.pop();
                if (c == ')' && top != '(' || c == '}' && top != '{' || c == ']' && top != '[') {
                    return false; // 括号不匹配
                }
            }
        }

        return stack.isEmpty(); // 检查是否还有未匹配的左括号
    }
}

```

### 232. Implement Queue using Stacks
1. 入队（push）：将元素压入入队栈。

2. 出队（pop）：
   - 如果出队栈不为空，直接从出队栈弹出元素。
   - 如果出队栈为空，将入队栈的所有元素逐个弹出并压入出队栈，然后从出队栈弹出元素。

3. 查看队头元素（peek）：
   - 如果出队栈不为空，直接返回出队栈的栈顶元素。
   - 如果出队栈为空，将入队栈的所有元素逐个弹出并压入出队栈，然后返回出队栈的栈顶元素。

4. 判空（empty）：当入队栈和出队栈均为空时，队列为空

```java
class MyQueue {

    Deque<Integer> in;
    Deque<Integer> out;

    public MyQueue() {
        in = new ArrayDeque<>();
        out = new ArrayDeque<>();    
    }
    
    public void push(int x) {
        in.offerLast(x);
    }
    
    public int pop() {
        if (out.isEmpty()) {
            while (!in.isEmpty()) {
                out.offerLast(in.pollLast());
            }
        }

        if (out.isEmpty()) {
            return -1;
        }
        return out.pollLast();
    }
    
    public int peek() {
        if (out.isEmpty()) {
            while (!in.isEmpty()) {
                out.offerLast(in.pollLast());
            }
        }

        if (out.isEmpty()) {
            return -1;
        }
        return out.peekLast();
    }
    
    public boolean empty() {
        return in.isEmpty() && out.isEmpty();
    }
}
```

## 堆
### 双堆法获取中位数
双堆结构：维护一个最大堆和一个最小堆，它们的大小分别是 k/2 和 (k+1)/2。这样可以确保最大堆包含较小的一半元素，最小堆包含较大的一半元素。

维护平衡：保持最大堆的大小等于或比最小堆大 1。这样，中位数就可以从最大堆的堆顶取得。

插入一个元素到最大堆或最小堆中（O(log k) 的复杂度）。


```java
double getMedian(int[] arr) {
    var maxHeap = new PriorityQueue<Integer>(Collections.reverseOrder());
    var minHeap = new PriorityQueue<Integer>();

    for (int i = 0; i < arr.length; i++) {
        if (!maxHeap.isEmpty() && arr[i] <= maxHeap.peek()) 
            maxHeap.offer(arr[i]);
        else 
            minHeap.offer(arr[i]);
        
        // Balance the heaps
        while (maxHeap.size() > (k + 1) / 2)
            minHeap.offer(maxHeap.poll());
        

        while (minHeap.size() > k / 2) 
            maxHeap.offer(minHeap.poll());
    }

    return maxHeap.peek();
}

```

## 队列
### 225. Implement Stack using Queues
1. Push 操作： 将新元素放入其中一个队列（可以选择任意一个）。
2. Pop 操作： 将非空队列的前 n-1 个元素重新放回另一个空队列，然后弹出最后一个元素。这样，原先队列中的最后一个元素就成了栈的顶部元素，实现了后进先出的效果。
3. Top 操作： 类似于 Pop 操作，但是不弹出元素，而是直接返回非空队列的最后一个元素。
4. Empty 操作： 检查两个队列是否都为空。

----

> 两个queue一定有一个保持空 
> offer的时候，push到不为空的那个
> poll和peek的时候，把不为空的弹出并压入另一个，直到剩一个。

```java
class MyStack {

    private Deque<Integer> in;
    private Deque<Integer> out;

    public MyStack() {
        in = new ArrayDeque<>();
        out = new ArrayDeque<>();
    }

    public void push(int x) {
        // 将新元素放入非空队列
        if (!in.isEmpty()) {
            in.offerLast(x);
        } else {
            out.offerLast(x);
        }
    }

    public int pop() {
        // 选择非空队列，将前 n-1 个元素放入另一个队列
        Deque<Integer> nonEmptyQueue = in.isEmpty() ? out : in;
        Deque<Integer> emptyQueue = in.isEmpty() ? in : out;

        while (nonEmptyQueue.size() > 1) {
            emptyQueue.offerLast(nonEmptyQueue.pollFirst());
        }

        // 弹出最后一个元素，即栈顶元素
        return nonEmptyQueue.pollFirst();
    }

    public int top() {
        // 类似于 Pop 操作，但不弹出元素
        Deque<Integer> nonEmptyQueue = in.isEmpty() ? out : in;
        Deque<Integer> emptyQueue = in.isEmpty() ? in : out;

        while (nonEmptyQueue.size() > 1) {
            emptyQueue.offerLast(nonEmptyQueue.pollFirst());
        }

        // 获取最后一个元素，即栈顶元素
        int top = nonEmptyQueue.peekFirst();
        emptyQueue.offerLast(nonEmptyQueue.pollFirst());
        return top;
    }

    public boolean empty() {
        return in.isEmpty() && out.isEmpty();
    }
}
```
## 单调队列，单调栈
### 155. Min Stack
```java
class MinStack {
    Deque<Integer> stack;
    Deque<Integer> mono;
    
    public MinStack() {
        stack = new ArrayDeque<>();    
        mono = new ArrayDeque<>();    
    }
    
    public void push(int val) {
        stack.offerLast(val);
        if(mono.isEmpty() || val <= mono.peekLast()) {
            mono.offerLast(val);
        }
    }
    
    public void pop() {
        if(stack.isEmpty()) {
            return;
        }

        if(mono.peekLast().equals(stack.pollLast())) {
            mono.pollLast();
        }
    }
    
    public int top() {
        return stack.peekLast();
    }
    
    public int getMin() {
        return mono.peekLast();

    }
}
```

# 二分法
> 感想：掌握基本，第一个等于和最后一个等于即可，其他变种可通过后两个调整返回值获得；
> 第一个等于：等于时向左继续搜索，动high，返回low
> 最后一个等于：等于时向右继续搜索，动low，返回high

## 基本二分查找
查找一个等于给定值的元素。
当存在连续多个给定值时，不能保证返回其中特定哪一个，有就返回。
```java
int basicBinSearch(int[] array, int target) {
    int low = 0;
    int high = array.length - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (array[mid] < target) {
            low = mid + 1;
        } else if (array[mid] > target) {
            high = mid - 1;
        } else {
            // 找到目标，返回索引
            return mid;
        }
    }
    // 如果循环结束仍未找到目标值，返回 -1 或者其他表示不存在的值
    return -1;
}
```

## 查找第一个等于给定值的元素
当存在连续多个给定值时，返回第一个。
当 `array[mid] == target` 时，不直接返回，而是将右边界缩小为 `mid - 1`，继续寻找左半部分。
```java
int binarySearchFirstEqual(int[] array, int target) {
    int low = 0, high = array.length - 1;
    
    while (low <= high) {
        int mid = low + (high - low) / 2;
        
        if (array[mid] < target) {
            low = mid + 1;
        } else if (array[mid] > target) {
            high = mid - 1;
        } else {
            // 找到了相等的元素，继续向左搜索
            high = mid - 1;
        }
    }
    
    // 如果存在等于target的元素，返回其位置；否则返回-1
    return (low < array.length && array[low] == target) ? low : -1;
}
```

## 查找最后一个等于给定值的元素
当存在连续多个给定值时，返回最后一个。
当 `array[mid] == target` 时，不直接返回，而是将左边界缩小为 `mid + 1`，继续寻找右半部分。
```java
int binarySearchLastEqual(int[] array, int target) {
    int low = 0, high = array.length - 1;
    
    while (low <= high) {
        int mid = low + (high - low) / 2;
        
        if (array[mid] < target) {
            low = mid + 1;
        } else if (array[mid] > target) {
            high = mid - 1;
        } else {
            // 找到了相等的元素，继续向右搜索
            low = mid + 1;
        }
    }
    
    // 如果存在等于target的元素，返回其位置；否则返回-1
    return (high >= 0 && array[high] == target) ? high : -1;
}
```

 
## 第一个严格大于 给定值
```java
    static int binarySearchFirstStrictlyGreater(int[] array, int target) {
        int low = 0, high = array.length - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (array[mid] < target) {
                low = mid + 1;
            } else if (array[mid] > target) {
                high = mid - 1;
            } else {
                // 找到了相等的元素，继续向右搜索
                low = mid + 1;
            }
        }

        // 如果low没有超出右边界，此时low即为第一个严格大于target的元素的位置
        return low < array.length ? low : -1;
    }+

```

## 第一个严格小于给定值
```java
    static int binarySearchLastStrictlyLess(int[] array, int target) {
        int low = 0, high = array.length - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;


            if (array[mid] < target) {
                low = mid + 1;
            } else if (array[mid] > target) {
                high = mid - 1;
            } else {
                // 找到了相等的元素，继续向左搜索
                high = mid - 1;
            }
        }

        // 如果high没有超出左边界，此时high即为最后一个严格小于target的元素的位置
        return high >= 0 ? high : -1;
    }
```

## 第一个大于等于给定值的元素
```java
static int binarySearchFirstGreaterOrEqual(int[] array, int target) {
    int low = 0, high = array.length - 1;

    while (low <= high) {
        int mid = low + (high - low) / 2;

        if (array[mid] < target) {
            low = mid + 1;
        } else if (array[mid] > target) {
            high = mid - 1;
        } else {
            // 找到了相等的元素，继续向左搜索
            high = mid - 1;
        }
    }

    // 此时low即为第一个大于等于target的元素的位置
    return low < array.length ? low : -1;
}
```

## 最后一个小于等于
```java
static int binarySearchLastLessOrEqual(int[] array, int target) {
    int low = 0, high = array.length - 1;

    while (low <= high) {
        int mid = low + (high - low) / 2;

        if (array[mid] < target) {
            low = mid + 1;
        } else if (array[mid] > target) {
            high = mid - 1;
        } else {
            // 找到了相等的元素，继续向右搜索
            low = mid + 1;
        }
    }

    // 此时high即为最后一个小于等于target的元素的位置
    return high >= 0 ? high : -1;
}
```

# 双指针
## 同向双指针

### 283. Move Zeroes

> 维护两个从0开始的指针，curr用来遍历，nonZero指针左边区间不含任何0
> curr遍历到非0元素就和当前nonZero交换值，然后nonZero索引++

```java
class Solution {
    public void moveZeroes(int[] arr) {
        int nonZero = 0;
        int curr = 0;

        for (; curr < arr.length; curr++) {
            if (arr[curr] != 0) {
                swap(arr, curr, nonZero);
            }
        }
    }

    void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
```

## 背向双指针
很多回文相关的题

### 5. Longest Palindromic Substring

> 分两个变体：返回最长长度，或者子字符串。后者在记录start和end上需要一点技巧

```java
class Solution {
    public String longestPalindrome(String s) {
        if (s == null || s.length() < 1) return "";
        
        int start = 0, end = 0;
        
        for (int i = 0; i < s.length(); i++) {
            int len1 = expandAroundCenter(s, i, i); // 以单个字符为中心
            int len2 = expandAroundCenter(s, i, i + 1); // 以两个字符为中心
            int len = Math.max(len1, len2);
            
            if (len > end - start) {
                // Note: 回文子串可能是奇数长度也可能是偶数长度，
                // 所以我们使用 (len - 1) / 2 来找到回文子串的起始位置。
                start = i - (len - 1) / 2;
                //  i + len / 2 计算回文子串的右中心位置。
                end = i + len / 2;
            }
        }
        
        return s.substring(start, end + 1);
    }

    private int expandAroundCenter(String s, int left, int right) {
        
        // Note: 一定要先判断边界，否则== exp可能会OFI
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }
        return right - left - 1;
    }
}
```

## 相向双指针

### 相向双指针判断回文

```java
private boolean isPalindrome(String s, int low, int high) {
    while (low < high) {
        if (s.charAt(low++) != s.charAt(high--)) {
            return false;
        }
    }
    return true;
}   
```

### 167. Two Sum II - Input Array Is Sorted

> 相比 Leetcode 1. Two Sum, 有序情况比较适合双指针。当然都可以用hashmap做。

```java
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int begin = 0;
        int end = numbers.length - 1;

        while (begin < end) {
            int sum = numbers[begin] + numbers[end];
            if (sum == target) {
                // 这里都加一是因为题目要求
                // Return the indices of the two numbers, index1 and index2, 
                // !!added by one!! as an integer array [index1, index2] of length 2.
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

# BFS

## 基于树
不需要专门一个set来记录访问过的节点

### 102. Binary Tree Level Order Traversal

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

> 用queue做BFS, 因为这题要求List<List<Integer>>输出，所以存在一个每层输出
> 需要用queueSize辅助，Note: 要用变量先保存queue.size()，如果for循环直接用queue.size()会出问题：每次遍历完queue.size()其实会变小

```java
class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        if (null == root) {
            return new ArrayList<List<Integer>>();
        }
        
        Deque<TreeNode> queue = new ArrayDeque<>();
        List<List<Integer>> result = new ArrayList<>();
        queue.offerLast(root);

        while (!queue.isEmpty()) {
            int queueSize = queue.size();
            List<Integer> row = new ArrayList<>();

            for (int i = 0; i < queueSize; i++) {
                TreeNode node = queue.pollFirst();

                row.add(node.val);

                if (null != node.left) {
                    queue.offerLast(node.left);
                }
                if (null != node.right) {
                    queue.offerLast(node.right);
                }
            }

            result.add(row);
        }

        return result;
    }
}
```

### 103. Binary Tree Zigzag Level Order Traversal
102变体：之字形打印
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]

> 在 102 基础上增加一个 boolean leftToRight 解决
> 对队首出队的node，如果 leftToRight == true 就添加到List尾
> 如果 leftToRight == false 就添加到List首 `row.add(0, node.val)`

```java
class Solution {
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        if (null == root) {
            return new ArrayList<List<Integer>>();
        }

        Deque<TreeNode> queue = new ArrayDeque<>();
        List<List<Integer>> result = new ArrayList<>();
        queue.offerLast(root);
        boolean leftToRight = true;

        while (!queue.isEmpty()) {
            int queueSize = queue.size();
            List<Integer> row = new ArrayList<>();

            for (int i = 0; i < queueSize; i++) {
                TreeNode node = queue.pollFirst();
                if (leftToRight) {
                    row.add(node.val);
                } else {

                    row.add(0, node.val);
                }
                
                if (null != node.left) {
                    queue.offerLast(node.left);
                }
                if (null != node.right) {
                    queue.offerLast(node.right);
                }
            }

            leftToRight = !leftToRight;
            result.add(row);
        }

        return result;
    }
}
```

## 基于图

# DFS

## 回溯

## 分治

### 226 Invert Binary Tree
请完成一个函数，输入一个二叉树，该函数输出它的镜像。
```text
例如输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
镜像输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

----

> 标准DFS分治

```java
class Solution {
    public TreeNode invertTree(TreeNode root) {
        dfs(root);
        return root;
    }

    void dfs(TreeNode node) {
        if (null == node) {
            return;
        }

        TreeNode temp = node.left;
        node.left = node.right;
        node.right = temp;

        dfs(node.left);
        dfs(node.right);
    }
}
```


### 101. Symmetric Tree
给定二叉树的根，检查它是否是自身的镜像(即围绕其中心对称)。
----

> 标准DFS分治
> dfs 参数为左右子节点的情况

```java
class Solution {
    public boolean isSymmetric(TreeNode root) {
        if (null == root) {
            return true;
        }

        return dfs(root.left, root.right);
    }

    boolean dfs(TreeNode leftChild, TreeNode rightChild) {
        if (null == leftChild && null == rightChild) {
            return true;
        }

        if (null == leftChild || null == rightChild) {
            return false;
        }

        if (leftChild.val != rightChild.val) {
            return false;
        }

        boolean outerSymmetric = dfs(leftChild.left, rightChild.right);
        boolean innerSymmetric = dfs(leftChild.right, rightChild.left);

        return outerSymmetric && innerSymmetric;
    }
}
```



### 543. Diameter of Binary Tree
给定二叉树的根，返回该树直径的长度。

***二叉树的直径***是树中任意两个节点之间最长路径的长度。
此路径可能通过根，也可能不通过。

两个节点之间的路径长度由它们之间的边数表示。
----

> 核心！！！：最大 Diameter 一定是某一个节点的 ***左右子树深度之和***
> 使用DFS来遍历二叉树的每个节点，并在遍历的过程中计算每个节点的左子树深度和右子树深度之和。在这个过程中，你可以更新一个全局变量，用于保存当前找到的最大直径。

1. 创建一个全局变量 maxDiameter，用于保存最大直径。
2. 编写一个辅助函数 dfs，***该函数接受一个节点作为参数，返回以该节点为根的子树的深度***。
3. 在 dfs 函数中，递归计算左子树和右子树的深度。然后比较左右子树深度和（该节点的diameter）与全局diameter，更新全局diameter。
4. 在递归的过程中，更新 maxDiameter，计算以当前节点为根的子树的直径（左子树深度 + 右子树深度）。
5. 返回当前节点为根的子树的深度（左右子树深度的最大值 + 1）。

```java
public class Solution {
    private int maxDiameter = 0;

    public int diameterOfBinaryTree(TreeNode root) {
        dfs(root);
        return maxDiameter;
    }

    private int dfs(TreeNode node) {
        // 边界情况
        if (node == null) {
            return 0;
        }

        // 递归计算左右子树深度
        int leftDepth = dfs(node.left);
        int rightDepth = dfs(node.right);

        // 比较当前节点的直径和最大直径。更新最大直径 （副作用操作全局变量）
        maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);

        // 返回当前节点为根的子树深度
        return Math.max(leftDepth, rightDepth) + 1;
    }
}

```


### 124. Binary Tree Maximum Path Sum
二叉树中的 ***路径*** 是一系列节点，其中该序列中的每一对相邻节点都有一条边连接它们。
一个节点最多只能在序列中出现一次。
请注意，该路径不需要经过根。

Path Sum是路径中节点的值之和。

给定二叉树的根，返回任何非空路径的最大路径和。
----

> 和diameter类似
> 最大 Path Sum 一定是某一个节点上的 ***左右子树的贡献和 + 该节点本身***
> DFS返回节点的贡献，并通过副作用更新最大 Path Sum
> Note: 节点的贡献和在该节点上的最大 Path Sum不同
> 节点贡献： 节点val + 左右子树贡献更大的一方
> 当前节点能获得的最大Path Sum：节点val + 左右子树贡献之和

```java
class Solution {
    int maxSum = Integer.MIN_VALUE;

    public int maxPathSum(TreeNode root) {
        maxGain(root);
        return maxSum;
    }

    public int maxGain(TreeNode node) {
        if (node == null) {
            return 0;
        }
        
        // 递归计算左右子节点的最大贡献值
        // 只有在最大贡献值大于 0 时，才会选取对应子节点
        int leftGain = Math.max(maxGain(node.left), 0);
        int rightGain = Math.max(maxGain(node.right), 0);

        // 节点的最大路径和取决于该节点的值与该节点的左右子节点的最大贡献值
        int priceNewpath = node.val + leftGain + rightGain;

        // 更新答案
        maxSum = Math.max(maxSum, priceNewpath);

        // 返回节点的最大贡献值
        return node.val + Math.max(leftGain, rightGain);
    }
}
```


## 基于树

需要记住递归写前序中序后序遍历二叉树的模板

## 基于 BST

BST 特征：中序遍历为单调递增的二叉树，换句话说，根节点的值比左子树任意节点值都大，比右子树任意节点值都小，增删查改均为 O（h）复杂度，h 为树的高度

## 基于图

和 BFS 一样一般需要一个 set 来记录访问过的节点，避免重复访问造成死循环; Word XXX 系列面试中非常常见，例如 word break，word ladder，word pattern，word search。

## 基于排列组合

其实与图类 DFS 方法一致，但是排列组合的特征更明显

## 记忆化搜索

用递归的方式实现动态规划，递归每次返回时同时记录下已访问过的节点特征，避免重复访问同一个节点，可以有效的把指数级别的 DFS 时间复杂度降为多项式级别;
注意这一类的 DFS 必须在最后有返回值（分治法），不可以用回溯法;
for 循环的 dp 题目都可以用记忆化搜索的方式写，但是不是所有的记忆化搜索题目都可以用 for 循环的 dp 方式写。

# 前缀和

本质上是在一个 list 当中，用 O（N）的时间提前算好从第 0 个数字到第 i 个数字之和，在后续使用中可以在 O（1）时间内计算出第 i 到第 j 个数字之和，一般很少单独作为一道题出现，而是很多题目中的用到的一个小技巧
