---
title: C# Handbook
categories: GameDev
tags:
- GameDev
---

- [Array Sort](#array-sort)
- [Lambda Comparator](#lambda-comparator)



#### Array Sort
```cs
int[] numbers = { 4, 2, 6, 1, 9, 5 };
Array.Sort(numbers);
```

#### Lambda Comparator
```cs
int[][] ranges = new int[][] {
    new int[] {6, 10},
    new int[] {5, 15}
};
Array.Sort(ranges, (x, y) => x[0].CompareTo(y[0]));
```