---
title: C# Handbook
categories: GameDev
tags:
- GameDev
---

- [Collections](#collections)
  - [Deuqe](#deuqe)
  - [Array Sort](#array-sort)
  - [Array 深拷贝](#array-深拷贝)
  - [Lambda Comparator](#lambda-comparator)



#### String
```cs
using System;

/// <summary>
/// 字符串操作示例类
/// </summary>
public class StringExample {

        /// <summary>
        /// string to int
        /// </summary>
        string str = "123";
        int number = int.Parse(str);

        string str = "123";
        int number;
        if (int.TryParse(str, out number))
        {
        // 字符串转换成功，number 中包含转换后的整数值
        }
        else
        {
        // 字符串转换失败，number 中为默认值 0
        }
        
        /// <summary>
        /// 将指定的字符数组转换为字符串
        /// </summary>
        /// <param name="chars">要转换的字符数组</param>
        /// <returns>转换后的字符串</returns>
        public string CharArrayToString(char[] chars) {
        return new string(chars);
        }

        /// <summary>
        /// 从指定的字符串中复制指定数量的字符到新的字符数组中
        /// </summary>
        /// <param name="str">要复制的字符串</param>
        /// <param name="startIndex">复制的起始位置索引</param>
        /// <param name="length">要复制的字符数</param>
        /// <returns>复制得到的字符数组</returns>
        public char[] CopyToCharArray(string str, int startIndex, int length) {
        char[] chars = new char[length];
        str.CopyTo(startIndex, chars, 0, length);
        return chars;
        }

        /// <summary>
        /// 返回指定字符串中第一个出现的指定字符串的索引位置
        /// </summary>
        /// <param name="str">要搜索的字符串</param>
        /// <param name="value">要查找的子字符串</param>
        /// <returns>子字符串在主字符串中的起始索引位置，如果未找到返回-1</returns>
        public int IndexOf(string str, string value) {
        return str.IndexOf(value);
        }

        /// <summary>
        /// 返回指定字符串中最后一个出现的指定字符串的索引位置
        /// </summary>
        /// <param name="str">要搜索的字符串</param>
        /// <param name="value">要查找的子字符串</param>
        /// <returns>子字符串在主字符串中的最后一个索引位置，如果未找到返回-1</returns>
        public int LastIndexOf(string str, string value) {
        return str.LastIndexOf(value);
        }

        /// <summary>
        /// 将指定字符串中的所有字符转换为大写
        /// </summary>
        /// <param name="str">要转换的字符串</param>
        /// <returns>转换后的字符串</returns>
        public string ToUpper(string str) {
        return str.ToUpper();
        }

        /// <summary>
        /// 将指定字符串中的所有字符转换为小写
        /// </summary>
        /// <param name="str">要转换的字符串</param>
        /// <returns>转换后的字符串</returns>
        public string ToLower(string str) {
        return str.ToLower();
        }

        /// <summary>
        /// 将字符串分割为子字符串数组，使用指定的分隔符字符
        /// </summary>
        /// <param name="str">要分割的字符串</param>
        /// <param name="separator">分隔符字符数组</param>
        /// <returns>分割后的子字符串数组</returns>
        public string[] Split(string str, char[] separator) {
        return str.Split(separator);
        }

        /// <summary>
        /// 将字符串分割为子字符串数组，使用指定的分隔符字符串
        /// </summary>
        /// <param name="str">要分割的字符串</param>
        /// <param name="separator">分隔符字符串数组</param>
        /// <returns>分割后的子字符串数组</returns>
        public string[] Split(string str, string[] separator) {
        return str.Split(separator, StringSplitOptions.None);
        }

        /// <summary>
        /// 将字符串分割为子字符串数组，使用指定的分隔符字符串和分割选项
        /// </summary>
        /// <param name="str">要分割的字符串</param>
        /// <param name="separator">分隔符字符串数组</param>
        /// <param name="options">分割选项，例如移除空字符串等</param>
        /// <returns>分割后的子字符串数组</returns>
        public string[] Split(string str, string[] separator, StringSplitOptions options) {
        return str.Split(separator, options);
        }
}

```

### Collections
#### Deuqe
```cs
using System;
using System.Collections.Generic;

/// <summary>
/// 示例：演示如何使用Deque<T>类
/// </summary>
class Program
{
    static void Main(string[] args)
    {
        // 创建一个双端队列
        Deque<int> deque = new Deque<int>();

        // 向队列两端添加元素
        deque.AddFirst(1);          // 添加到队列头部
        deque.AddLast(2);           // 添加到队列尾部

        // 判断队列是否包含指定元素
        bool contains = deque.Contains(1);

        // 将队列中的元素复制到数组
        int[] array = new int[deque.Count];
        deque.CopyTo(array, 0);

        // 移除并返回队列的开头和末尾元素
        int removedFirst = deque.RemoveFirst();
        int removedLast = deque.RemoveLast();

        // 获取队列中的元素数量
        int count = deque.Count;

        // 设置队列容量为实际元素数量
        deque.TrimExcess();

        // 使用索引器获取或设置指定索引处的元素
        deque[0] = 3;
        int elementAtIndex0 = deque[0];
    }
}

/// <summary>
/// 表示一个双端队列
/// </summary>
/// <typeparam name="T">队列中元素的类型</typeparam>
public class Deque<T>
{
    /// <summary>
    /// 初始化一个空的双端队列
    /// </summary>
    public Deque() { }

    /// <summary>
    /// 向双端队列的开头添加元素
    /// </summary>
    /// <param name="item">要添加的元素</param>
    public void AddFirst(T item) { }

    /// <summary>
    /// 向双端队列的末尾添加元素
    /// </summary>
    /// <param name="item">要添加的元素</param>
    public void AddLast(T item) { }

    /// <summary>
    /// 清空双端队列中的所有元素
    /// </summary>
    public void Clear() { }

    /// <summary>
    /// 判断双端队列中是否包含指定元素
    /// </summary>
    /// <param name="item">要查找的元素</param>
    /// <returns>如果找到指定元素则返回 true，否则返回 false</returns>
    public bool Contains(T item) { return false; }

    /// <summary>
    /// 将双端队列中的元素复制到指定数组中
    /// </summary>
    /// <param name="array">目标数组</param>
    /// <param name="arrayIndex">目标数组的起始索引</param>
    public void CopyTo(T[] array, int arrayIndex) { }

    /// <summary>
    /// 移除并返回双端队列的开头元素
    /// </summary>
    /// <returns>被移除的开头元素</returns>
    public T RemoveFirst() { return default; }

    /// <summary>
    /// 移除并返回双端队列的末尾元素
    /// </summary>
    /// <returns>被移除的末尾元素</returns>
    public T RemoveLast() { return default; }

    /// <summary>
    /// 返回双端队列中的元素数量
    /// </summary>
    public int Count { get { return 0; } }

    /// <summary>
    /// 设置双端队列的容量为实际元素数量
    /// </summary>
    public void TrimExcess() { }

    /// <summary>
    /// 获取或设置指定索引处的元素
    /// </summary>
    /// <param name="index">元素的索引</param>
    /// <returns>指定索引处的元素</returns>
    public T this[int index] { get { return default; } set { } }
}
```

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