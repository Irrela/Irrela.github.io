---
title: Cpp Handbook
categories: Cpp
tags:
- Cpp
---


# Std
## Math
```cpp
std::max(x, y)

```


## Collection

#### C-style array
```cpp
// 使用 new 运算符分配内存

int* array = new int[n];

// 使用 std::fill 来填充数组为 1
std::fill(array, array + n, 1);

// 使用 delete[] 运算符释放分配的内存
delete[] array;
```

#### vector
```cpp

#include <iostream>
#include <vector>

int main() {
    // 创建一个 vector 容器
    std::vector<int> myVector;

    // 创建一个大小为 n 的整数数组(默认0)
    std::vector<int> myVector(n); 

    // 创建一个大小为 n 的整数数组(默认1)
    std::vector<int> myVector(n, 1);

    // 在 vector 尾部插入元素
    myVector.push_back(10);
    myVector.push_back(20);
    myVector.push_back(30);

    // 访问指定位置的元素
    int firstElement = myVector[0];
    int secondElement = myVector.at(1); // 使用 at() 方法访问元素，可以检查索引越界

    // 获取 vector 的大小
    std::size_t size = myVector.size();

    // 判断 vector 是否为空
    bool isEmpty = myVector.empty();

    // 在 vector 的指定位置插入元素
    myVector.insert(myVector.begin() + 1, 15); // 在第二个位置插入元素 15

    // 删除 vector 的指定位置的元素
    myVector.erase(myVector.begin() + 2); // 删除第三个位置的元素

    // 删除 vector 的最后一个元素
    myVector.pop_back();

    // 清空 vector
    myVector.clear();

    return 0;
}
```

#### Deque
```cpp
#include <iostream>
#include <deque>

int main() {
    // 创建一个整数双端队列
    std::deque<int> myDeque;

    // 在队尾插入一个元素
    myDeque.push_back(10);  // 在队尾插入10

    // 在队首插入一个元素
    myDeque.push_front(5);  // 在队首插入5

    // 移除队尾的元素
    myDeque.pop_back();  // 移除队尾的元素

    // 移除队首的元素
    myDeque.pop_front();  // 移除队首的元素

    // 访问队尾的元素（查看）
    int lastElement = myDeque.back();  // 访问队尾的元素，但不移除它

    // 访问队首的元素（查看）
    int firstElement = myDeque.front();  // 访问队首的元素，但不移除它

    // 访问指定位置的元素
    int elementAtIndexTwo = myDeque.at(2);  // 访问指定位置的元素，带有边界检查

    // 获取队列中的元素数量
    int dequeSize = myDeque.size();  // 返回队列中的元素数量

    // 检查队列是否为空
    bool isEmpty = myDeque.empty();  // 检查队列是否为空

    // 移除队列中的所有元素
    myDeque.clear();  // 移除队列中的所有元素

    // 调整队列的大小以包含指定数量的元素
    myDeque.resize(5);  // 调整队列的大小以包含5个元素

    // 调整队列的大小，并使用指定的值初始化新增的元素
    myDeque.resize(8, 0);  // 调整队列的大小以包含8个元素，并使用0初始化新增的元素

    // 移除队列中指定位置的元素
    myDeque.erase(myDeque.begin() + 2);  // 移除索引为2的元素

    // 移除队列中指定范围的元素
    myDeque.erase(myDeque.begin(), myDeque.begin() + 3);  // 移除范围为[begin, begin + 3)的元素

    // 在指定位置插入一个元素
    myDeque.insert(myDeque.begin() + 2, 15);  // 在索引为2的位置插入15

    // 在指定位置插入多个元素
    myDeque.insert(myDeque.begin() + 2, 3, 20);  // 在索引为2的位置插入3个20

    return 0;
}
```