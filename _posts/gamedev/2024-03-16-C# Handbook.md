---
title: C# Handbook
categories: GameDev
tags:
- GameDev
---

- [Collections](#collections)
  - [Stack](#stack)
  - [Queue](#queue)
  - [Deuqe (LinkedList)](#deuqe-linkedlist)
  - [PriorityQueue](#priorityqueue)
- [Array](#array)
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
#### Stack
```cs
using System;
using System.Collections.Generic;

public class StackExample {
    public void StackOperations() {
        // 创建一个整数类型的栈
        Stack<int> stack = new Stack<int>();

        // 压入元素到栈顶
        stack.Push(1);
        stack.Push(2);
        stack.Push(3);

        // 获取栈顶元素但不移除
        int topElement = stack.Peek(); // topElement 的值为 3

        // 移除并返回栈顶元素
        int poppedElement = stack.Pop(); // poppedElement 的值为 3

        // 检查栈是否为空
        bool isEmpty = stack.Count == 0;

        // 获取栈中的元素数量
        int count = stack.Count;

        // 清空栈
        stack.Clear();
    }
}

```

#### Queue
```cs
// 常用的 Queue API 如下：

Queue<int> queue = new Queue<int>(); // 创建一个整数类型的队列

queue.Enqueue(10); // 将元素 10 入队
queue.Enqueue(20); // 将元素 20 入队
queue.Enqueue(30); // 将元素 30 入队

int firstElement = queue.Peek(); // 获取队列的第一个元素，但不移除

int removedElement = queue.Dequeue(); // 移除并返回队列的第一个元素

bool isEmpty = queue.Count == 0; // 判断队列是否为空

queue.Clear(); // 清空队列中的所有元素

```

#### Deuqe (LinkedList)
```cs
using System;
using System.Collections.Generic;

public class LinkedListExample {
    public static void Main(string[] args) {
        // 创建一个新的链表
        LinkedList<int> linkedList = new LinkedList<int>();

        // 添加元素到链表的末尾
        linkedList.AddLast(1);
        linkedList.AddLast(2);
        linkedList.AddLast(3);

        // 遍历链表中的每个节点并输出值
        foreach (int value in linkedList) {
            Console.WriteLine(value);
        }

        // 在链表的开头添加元素
        linkedList.AddFirst(0);

        // 移除链表的第一个元素
        linkedList.RemoveFirst();

        // 在链表的末尾添加元素
        linkedList.AddLast(4);

        // 移除链表的最后一个元素
        linkedList.RemoveLast();

        // 判断链表是否包含指定的值
        bool contains = linkedList.Contains(2);

        // 获取链表中的第一个节点的值
        int firstValue = linkedList.First.Value;

        // 获取链表中的最后一个节点的值
        int lastValue = linkedList.Last.Value;

        // 将链表转换为数组
        int[] array = new int[linkedList.Count];
        linkedList.CopyTo(array, 0);

        // 清空链表
        linkedList.Clear();

        // 判断链表是否为空
        bool isEmpty = linkedList.Count == 0;
    }
}
```

#### PriorityQueue
```cs
        // 使用Lambda表达式创建一个比较器，用于将整数按照从大到小的顺序排列
        IComparer<int> comparer = Comparer<int>.Create((x, y) => y.CompareTo(x));
        // 创建一个优先队列，并传入自定义的比较器
        PriorityQueue<int, int> priorityQueue = new PriorityQueue<int, int>(comparer);

        // OR
        PriorityQueue<int, int> priorityQueue = new PriorityQueue<int, int>(Comparer<int>.Create((x, y) => y.CompareTo(x)));

        // 添加一些元素到优先队列
        priorityQueue.Enqueue(5, 5);
        priorityQueue.Enqueue(2, 2);
        priorityQueue.Enqueue(7, 7);
        priorityQueue.Enqueue(1, 1);

        /// <summary>
        /// 创建一个新的优先队列。
        /// </summary>
        public PriorityQueue();

        /// <summary>
        /// 创建一个新的优先队列，并根据指定的比较器对元素进行比较。
        /// </summary>
        /// <param name="comparer">比较器，用于确定元素的优先级。</param>
        public PriorityQueue(IComparer<TPriority> comparer);

        /// <summary>
        /// 获取优先队列中的元素数量。
        /// </summary>
        public int Count { get; }

        /// <summary>
        /// 将指定元素和其对应的优先级添加到优先队列中。
        /// </summary>
        /// <param name="element">要添加的元素。</param>
        /// <param name="priority">元素的优先级。</param>
        public void Enqueue(TElement element, TPriority priority);

        /// <summary>
        /// 移除并返回优先队列中具有最高优先级的元素。
        /// </summary>
        /// <returns>具有最高优先级的元素。</returns>
        public TElement Dequeue();

        /// <summary>
        /// 返回优先队列中具有最高优先级的元素，但不将其移除。
        /// </summary>
        /// <returns>具有最高优先级的元素。</returns>
        public TElement Peek();

        /// <summary>
        /// 清空优先队列中的所有元素。
        /// </summary>
        public void Clear();

        /// <summary>
        /// 确定指定元素是否在优先队列中。
        /// </summary>
        /// <param name="element">要检查的元素。</param>
        /// <returns>如果元素在队列中，则为true；否则为false。</returns>
        public bool Contains(TElement element);

        /// <summary>
        /// 尝试将具有指定值的元素从队列中移除。
        /// </summary>
        /// <param name="element">要移除的元素。</param>
        /// <returns>如果元素成功移除，则为true；否则为false。</returns>
        public bool Remove(TElement element);        

```

### Array
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