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
// 字符串长度
string str = "Hello, world!";
int length = str.Length;

// 字符串连接
string str1 = "Hello";
string str2 = "world";
string combined = str1 + str2;

// 字符串拼接（格式化）
string formattedString = string.Format("The value of x is {0} and y is {1}", x, y);

// 字符串比较（区分大小写）
string str3 = "hello";
string str4 = "Hello";
bool isEqualCaseSensitive = str3.Equals(str4);

// 字符串比较（不区分大小写）
bool isEqualIgnoreCase = str3.Equals(str4, StringComparison.OrdinalIgnoreCase);

// 字符串转换为大写
string upperCaseStr = str.ToUpper();

// 字符串转换为小写
string lowerCaseStr = str.ToLower();

// 字符串包含
bool containsHello = str.Contains("Hello");

// 字符串分割
string[] words = str.Split(' ');

// 字符串截取
string substring = str.Substring(startIndex, length);

// 移除字符串两端的空白字符
string trimmedStr = str.Trim();

// 字符串替换
string replacedStr = str.Replace("Hello", "Hi");

// 字符串插入
string insertedStr = str.Insert(index, " inserted");

// 字符串移除
string removedStr = str.Remove(startIndex, length);

// 字符串查找
int index = str.IndexOf("world");

// 字符串倒转
char[] charArray = str.ToCharArray();
Array.Reverse(charArray);
string reversedStr = new string(charArray);

// 字符串格式化
string formattedString = $"{x} + {y} = {x + y}";

// 字符串填充
string paddedStr = str.PadLeft(totalWidth, paddingChar);

// 字符串是否为空或空白
bool isNullOrWhiteSpace = string.IsNullOrWhiteSpace(str);

```

#### StringBuilder
```cs
// StringBuilder 常用的 API

// 构造函数
StringBuilder sb = new StringBuilder(); // 创建一个空的 StringBuilder
StringBuilder sb = new StringBuilder("initial string"); // 使用指定的字符串初始化 StringBuilder
StringBuilder sb = new StringBuilder(100); // 使用指定的容量初始化 StringBuilder

// 属性
int capacity = sb.Capacity; // 获取 StringBuilder 的当前容量
int length = sb.Length; // 获取 StringBuilder 的当前长度
char ch = sb[index]; // 获取指定索引位置的字符
string str = sb.ToString(); // 将 StringBuilder 转换为字符串

// 方法
sb.Append(value); // 将指定值追加到 StringBuilder 的末尾
sb.Insert(index, value); // 在指定索引位置插入值
sb.Remove(startIndex, length); // 从 StringBuilder 中移除指定范围的字符
sb.Replace(oldValue, newValue); // 将指定的字符串替换为新的字符串
sb.Clear(); // 清空 StringBuilder 中的内容
sb.EnsureCapacity(minimumCapacity); // 确保 StringBuilder 的容量至少为指定值
sb.CopyTo(startIndex, destination, destinationIndex, count); // 将 StringBuilder 中的一部分复制到目标数组中
sb.Equals(obj); // 判断 StringBuilder 是否与指定对象相等
sb.GetHashCode(); // 获取 StringBuilder 的哈希码
sb.Insert(index, str); // 在指定索引位置插入字符串
sb.Remove(index, length); // 从指定索引位置开始移除指定长度的字符
sb.Replace(oldValue, newValue, startIndex, count); // 从指定索引位置开始替换指定数量的字符
sb.ToString(); // 将 StringBuilder 转换为字符串

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