---
title: Algorithm & Snippet
categories: Leetcode
tags:
  - Leetcode
---

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
private void quickSort(int[] arr, int low, int high) {
    // 当排序范围为空或仅包含一个元素时，无需排序
    if (low >= high) {
        return ;
    }

    int i = low, j = high;

    // 使用arr[low]作为基准元素进行划分
    while (i < j) {
        // 从右向左找到第一个严格小于基准的元素
        while (i < j && arr[j] >= arr[low]) {
        j--;
        }
        // 从左向右找到第一个严格大于基准的元素
        while (i < j && arr[i] <= arr[low]) {
        i++;
        }
        // 交换找到的元素，使得小于基准的元素在左，大于基准的元素在右
        swap(arr, i, j);
    }

    swap(arr, low, i);

    quickSort(arr, low, i - 1);
    quickSort(arr, i + 1, high);
}

/**
 * 交换数组中两个元素的位置
 * 
 * @param arr 数组
 * @param i 第一个元素的索引
 * @param j 第二个元素的索引
 */
private void swap(int[] arr, int i, int j) {
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


```java
// 主要的归并排序方法
public static void mergeSort(int[] arr, int low, int high) {
    if (low < high) {
        // 找到数组中点
        int mid = (low + high) / 2;

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

## 快速选择

# 链表

## 快慢指针

# 堆，栈，队列，哈希表

# 二分法

# 双指针

# BFS

## 基于树

## 基于图

# DFS

## 回溯

## 分治

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
