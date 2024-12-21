---
title: C# Handbook
categories: GameDev
tags:
- GameDev
---


<!-- TOC -->

- [String](#string)
            - [Strings](#strings)
            - [StringBuilder](#stringbuilder)
        - [Collections](#collections)
            - [List](#list)
            - [Stack](#stack)
            - [Queue](#queue)
            - [Deuqe (LinkedList)](#deuqe-linkedlist)
            - [PriorityQueue](#priorityqueue)
            - [HashSet](#hashset)
            - [Dictionary](#dictionary)
        - [Array](#array)
            - [int[,] 和 int[][]](#int-和-int)
            - [Array 初始化](#array-初始化)
            - [Array Sort](#array-sort)
            - [Array 深拷贝](#array-深拷贝)
            - [Lambda Comparator](#lambda-comparator)
        - [Other Syntax](#other-syntax)
        - [extension](#extension)

<!-- /TOC -->


# String

#### Strings

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
// 实例化 StringBuilder
StringBuilder sb = new StringBuilder();

// 向 StringBuilder 中追加字符串
sb.Append("Hello");

// 在指定位置插入字符串
sb.Insert(5, " ");

// 从指定位置开始删除指定长度的字符
sb.Remove(5, 1);

// 替换字符串中的指定子串
sb.Replace("H", "J");

// 清空 StringBuilder 中的内容
sb.Clear();

// 获取 StringBuilder 的长度（字符数）
int length = sb.Length;

// 获取或设置 StringBuilder 的容量
int capacity = sb.Capacity;
sb.Capacity = 100;

// 将 StringBuilder 转换为字符串
string str = sb.ToString();

// 获取或设置 StringBuilder 中指定索引位置的字符
char ch = sb[0];
sb[0] = 'A';

// 将格式化的字符串追加到 StringBuilder 中
sb.AppendFormat("Hello {0}!", "world");

// 将多个字符串追加到 StringBuilder 中
sb.AppendJoin(", ", new string[] { "apple", "banana", "orange" });

// 将多个字符追加到 StringBuilder 中
sb.Append('A', 3);

// 将字符串中的字符复制到字符数组中
sb.CopyTo(0, charArray, 0, sb.Length);

// 确保 StringBuilder 中的容量至少为指定值
sb.EnsureCapacity(100);

// 确定 StringBuilder 中是否包含指定的子字符串
bool contains = sb.ToString().Contains("Hello");

// 将 StringBuilder 中的所有字符复制到字符数组中
sb.CopyToCharArray(charArray, 0, sb.Length);

// 确定 StringBuilder 中是否以指定的字符串结尾
bool endsWith = sb.ToString().EndsWith("world");

// 确定 StringBuilder 中是否包含指定的字符串
bool equals = sb.ToString().Equals("Hello");

// 确定 StringBuilder 中是否包含指定的字符串，忽略大小写
bool equalsIgnoreCase = sb.ToString().Equals("hello", StringComparison.OrdinalIgnoreCase);

// 返回 StringBuilder 中指定字符的第一个匹配项的索引
int index = sb.ToString().IndexOf("H");

// 返回 StringBuilder 中指定字符的最后一个匹配项的索引
int lastIndex = sb.ToString().LastIndexOf("l");

// 从指定索引开始将 StringBuilder 的一部分内容转换为小写
sb.ToLower(0, 5);

// 从指定索引开始将 StringBuilder 的一部分内容转换为大写
sb.ToUpper(0, 5);

// 返回 StringBuilder 中指定索引位置的字符
char character = sb.ToString()[0];

// 返回 StringBuilder 中指定索引位置的子字符串
string substring = sb.ToString().Substring(0, 5);

// 将 StringBuilder 中的字符转换为字符数组
char[] charArray = sb.ToString().ToCharArray();

// 确定 StringBuilder 中的内容是否为空
bool isEmpty = sb.Length == 0;

// 确定 StringBuilder 中的内容是否以指定的字符串开头
bool startsWith = sb.ToString().StartsWith("Hello");

// 删除 StringBuilder 中的指定范围的字符
sb.Remove(0, 5);
```


### Collections
#### List
```cs
// 创建一个空的 List
List<T> list = new List<T>();

// 添加元素
list.Add(item);

// 添加一组元素
list.AddRange(collection);

// 在指定位置插入元素
list.Insert(index, item);

// 移除指定元素
list.Remove(item);

// 移除符合条件的元素
list.RemoveAll(predicate);

// 移除指定位置的元素
list.RemoveAt(index);

// 清空 List
list.Clear();

// 判断是否包含指定元素
bool contains = list.Contains(item);

// 获取指定元素的索引
int index = list.IndexOf(item);

// 获取列表中指定范围的元素
List<T> range = list.GetRange(index, count);

// 排序
list.Sort();

// 反转列表中的元素
list.Reverse();

// 获取列表的元素数量
int count = list.Count;

// 获取或设置指定位置的元素
T item = list[index];

// 使用 foreach 循环遍历列表
foreach (T item in list)
{
    // 处理元素
}

```

#### Stack
```cs
using System;
using System.Collections.Generic;

// 创建一个新的空栈
Stack<T> stack = new Stack<T>();

// 获取栈中元素的数量
int count = stack.Count;

// 将元素压入栈顶
stack.Push(item);

// 弹出栈顶元素并返回其值
T poppedItem = stack.Pop();

// 获取但不移除栈顶元素
T topItem = stack.Peek();

// 清空栈中所有元素
stack.Clear();

// 判断栈中是否包含特定元素
bool containsItem = stack.Contains(item);

// 将栈转换为数组
T[] array = stack.ToArray();

// 从特定索引处开始复制栈元素到现有数组中
stack.CopyTo(array, startIndex);

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

// 创建一个 LinkedList
LinkedList<int> linkedList = new LinkedList<int>();

// 添加元素
linkedList.AddLast(10);
linkedList.AddLast(20);
linkedList.AddLast(30);

// 在开头添加元素
linkedList.AddFirst(5);

// 访问元素
Console.WriteLine("LinkedList 中的元素:");
foreach (int num in linkedList)
{
    Console.WriteLine(num);
}

// 在指定节点后插入元素
LinkedListNode<int> node = linkedList.Find(20);
linkedList.AddAfter(node, 25);

// 移除指定元素
linkedList.Remove(10);

// 移除第一个元素
linkedList.RemoveFirst();

// 移除最后一个元素
linkedList.RemoveLast();

// 获取第一个元素
int firstElement = linkedList.First.Value;

// 获取最后一个元素
int lastElement = linkedList.Last.Value;

// 清空链表
linkedList.Clear();

// 检查链表是否为空
bool isEmpty = linkedList.Count == 0;
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

/// 创建一个新的优先队列。
public PriorityQueue();

/// 创建一个新的优先队列，并根据指定的比较器对元素进行比较。
/// <param name="comparer">比较器，用于确定元素的优先级。</param>
public PriorityQueue(IComparer<TPriority> comparer);

/// 获取优先队列中的元素数量。
public int Count { get; }

/// 将指定元素和其对应的优先级添加到优先队列中。
/// <param name="element">要添加的元素。</param>
/// <param name="priority">元素的优先级。</param>
public void Enqueue(TElement element, TPriority priority);

/// 移除并返回优先队列中具有最高优先级的元素。
/// <returns>具有最高优先级的元素。</returns>
public TElement Dequeue();

/// 返回优先队列中具有最高优先级的元素，但不将其移除。
/// <returns>具有最高优先级的元素。</returns>
public TElement Peek();

/// 清空优先队列中的所有元素。
public void Clear();

/// 确定指定元素是否在优先队列中。
/// <param name="element">要检查的元素。</param>
/// <returns>如果元素在队列中，则为true；否则为false。</returns>
public bool Contains(TElement element);

/// 尝试将具有指定值的元素从队列中移除。
/// <param name="element">要移除的元素。</param>
/// <returns>如果元素成功移除，则为true；否则为false。</returns>
public bool Remove(TElement element);        

```

#### HashSet
```cs
// 创建 HashSet
HashSet<int> hashSet = new HashSet<int>();

// 添加元素
hashSet.Add(1);
hashSet.Add(2);
hashSet.Add(3);

// 判断元素是否存在
bool contains = hashSet.Contains(2); // true

// 移除元素
hashSet.Remove(2);

// 获取 HashSet 中元素的数量
int count = hashSet.Count;

// 清空 HashSet
hashSet.Clear();

// 遍历 HashSet
foreach (int item in hashSet)
{
    Console.WriteLine(item);
}

// 复制 HashSet 到数组
int[] array = new int[hashSet.Count];
hashSet.CopyTo(array);

// 判断是否为空
bool isEmpty = hashSet.Count == 0;

// 合并两个 HashSet
HashSet<int> anotherSet = new HashSet<int>() { 4, 5, 6 };
hashSet.UnionWith(anotherSet);

// 求交集
hashSet.IntersectWith(anotherSet);

// 求差集
hashSet.ExceptWith(anotherSet);

// 判断是否为子集或超集
bool isSubset = hashSet.IsSubsetOf(anotherSet);
bool isSuperset = hashSet.IsSupersetOf(anotherSet);
```


#### Dictionary
```cs
// 创建一个Dictionary对象
Dictionary<string, int> dict = new Dictionary<string, int>();

// 添加键值对
dict.Add("apple", 5);
dict["banana"] = 3; // 另一种添加键值对的方式

// 判断是否包含指定的键
bool containsKey = dict.ContainsKey("apple");

// 获取指定键对应的值
int value = dict["banana"];

// 获取Dictionary中的所有键
var keys = dict.Keys;

// 获取Dictionary中的所有值
var values = dict.Values;

// 获取Dictionary中键值对的数量
int count = dict.Count;

// 移除指定的键值对
bool removed = dict.Remove("apple");

// 清空Dictionary
dict.Clear();

// 使用foreach遍历Dictionary中的键值对
foreach (var kvp in dict)
{
    Console.WriteLine($"Key: {kvp.Key}, Value: {kvp.Value}");
}

// 使用TryGetValue方法获取指定键的值，避免键不存在时引发异常
int val;
if (dict.TryGetValue("banana", out val))
{
    Console.WriteLine($"The value of 'banana' is: {val}");
}
else
{
    Console.WriteLine("'banana' does not exist in the dictionary.");
}

// 判断指定的键值对是否存在
bool exists = dict.TryGetValue("apple", out _);

```

### Array

```cs
// 声明和初始化数组
int[] numbers = { 1, 2, 3, 4, 5 };

// 获取数组长度
int length = numbers.Length;

// 访问数组元素
int firstElement = numbers[0];
int lastElement = numbers[numbers.Length - 1];

// 修改数组元素
numbers[2] = 10;

// 遍历数组
for (int i = 0; i < numbers.Length; i++)
{
    Console.WriteLine(numbers[i]);
}

// 使用 foreach 遍历数组
foreach (int num in numbers)
{
    Console.WriteLine(num);
}

// 查找数组中的元素
int index = Array.IndexOf(numbers, 3); // 查找值为3的元素的索引
bool contains = Array.Exists(numbers, element => element == 3); // 检查数组中是否存在值为3的元素

// 排序数组
Array.Sort(numbers); // 默认升序排序
Array.Reverse(numbers); // 将数组元素反转，即降序排序

// 截取数组的一部分
int[] subArray = new int[3];
Array.Copy(numbers, 0, subArray, 0, 3); // 从索引0开始复制3个元素到subArray数组中

// 将数组转换为字符串
string numbersStr = string.Join(", ", numbers); // 将数组元素连接成字符串，用逗号分隔

// 清空数组
Array.Clear(numbers, 0, numbers.Length); // 将数组元素全部清零

```


#### int[,] 和 int[][]

在 C# 中，int[,] 表示一个二维数组，也称为矩形数组，其中的每一维都具有相同的长度。

这意味着它是一个具有固定行数和固定列数的矩形结构，`每一行的元素个数相同`。例如：

```cs
// 这将创建一个3行4列的矩阵，其中每一行都有4个元素。
int[,] matrix = new int[3, 4];
```

int[][] 表示一个数组的数组，也称为不规则二维数组，其中的每个子数组的长度可以不同。例如：

```cs
int[][] matrix = new int[3][];
matrix[0] = new int[4];
matrix[1] = new int[3];
matrix[2] = new int[5];
```
这将创建一个包含3个子数组的数组，每个`子数组的长度可以不同`。



#### Array 初始化

```cs
// 直接初始化：在声明数组变量时直接指定初始值。
int[] arr1 = new int[] { 1, 2, 3, 4, 5 };
int[,] matrix1 = new int[,] { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };
int[][] arr = new int[][] { { 1, 3 }, { 4, 5, 6 }, { 7 } };

// 使用数组初始化器：在声明数组变量时，通过大括号 {} 指定初始值。
// Note: 二维数组不能这样初始化
int[] arr2 = { 1, 2, 3, 4, 5 };
int[,] matrix2 = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };

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

### Other Syntax

### extension
在C#中使用扩展方法的几个常见情况包括：

为现有类型添加新功能： 当您想要向.NET框架中的现有类型（如string、List<T>等）添加新功能时，扩展方法是一种非常便捷的方式。您可以编写一个扩展方法，并将其应用于目标类型，而无需修改目标类型的源代码。

提高代码的可读性和可维护性： 使用扩展方法可以将相关的功能逻辑封装在一个方法中，使代码更加清晰、易读，并且可以降低代码的复杂度。这有助于提高代码的可维护性和可重用性。

解决特定的业务需求： 有时候，您可能会发现在多个地方都需要执行相似的操作，但这些操作又不适合直接添加到目标类型中。在这种情况下，您可以编写一个通用的扩展方法，以解决特定的业务需求，并将其应用于多个地方。

与LINQ结合使用： 扩展方法广泛用于LINQ查询中，例如Where、Select等方法都是扩展方法。这些方法使得对集合进行过滤、映射等操作更加简洁和直观。
与接口兼容： 扩展方法可以与接口一起使用，为接口的实现类添加额外的功能。这种方式可以保持接口的清晰和简洁，同时又能为实现类提供额外的功能。
