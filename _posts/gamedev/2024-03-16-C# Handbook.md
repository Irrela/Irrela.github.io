---
title: C# Handbook
categories: GameDev
tags:
- GameDev
---

- [Array Sort](#array-sort)
- [Array 深拷贝](#array-深拷贝)
- [Lambda Comparator](#lambda-comparator)



#### Array Sort
```cs
int[] numbers = { 4, 2, 6, 1, 9, 5 };
Array.Sort(numbers);
```

#### Array 深拷贝

```cs
// 方案1： Array.Copy()
int[] originalArray = { 1, 2, 3, 4, 5 };
int[] deepCopyArray = new int[originalArray.Length];
Array.Copy(originalArray, deepCopyArray, originalArray.Length);

// 方案2： .ToArray()
int[] originalArray = { 1, 2, 3, 4, 5 };
int[] deepCopyArray = originalArray.ToArray();
// .ToArray() 还可以将集合转换为Array
List<int> list = new List<int> { 1, 2, 3, 4, 5 };
int[] array = list.ToArray();
```

#### Lambda Comparator
```cs
int[][] ranges = new int[][] {
    new int[] {6, 10},
    new int[] {5, 15}
};
Array.Sort(ranges, (x, y) => x[0].CompareTo(y[0]));
```