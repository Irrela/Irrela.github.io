---
title: Cpp Handbook
categories: Cpp
tags:
- Cpp
---

- [Std](#std)
  - [Math](#math)
  - [Collection](#collection)
      - [C-style array](#c-style-array)
      - [vector](#vector)
      - [unordered\_set](#unordered_set)
      - [unordered\_map](#unordered_map)
      - [Deque](#deque)
- [Class](#class)
    - [构造函数](#构造函数)
      - [初始化列表](#初始化列表)
    - [析构函数](#析构函数)
    - [成员变量和成员函数](#成员变量和成员函数)
      - [静态成员](#静态成员)
    - [继承](#继承)
      - [单继承](#单继承)
      - [多重继承](#多重继承)


# Std

## Math
```cpp
std::max(x, y)

```
## Collection

#### C-style array
```cpp
    // 声明一个整数数组，包含5个元素，静态内存分配
    // 无需释放内存，因为数组的生命周期与其所在的作用域相关。
    // 数组的大小在编译时就确定了，因此无法更改数组的大小
    int myArray[5];

    // 使用 new 运算符动态分配内存，需手动delete
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

#### unordered_set
```cpp
#include <unordered_set>

int main() {
    // 创建一个无序集合
    std::unordered_set<int> mySet;

    // 插入元素
    mySet.insert(3);
    mySet.insert(1);
    mySet.insert(4);

    // 查找元素
    auto it = mySet.find(3);
    if (it != mySet.end()) {
        // 元素存在于集合中
    }

    // 删除元素
    mySet.erase(1);

    // 遍历集合
    for (int x : mySet) {
        // 对集合中的每个元素执行操作
    }

    // 获取集合大小
    std::size_t size = mySet.size();

    // 检查集合是否为空
    bool isEmpty = mySet.empty();

    // 清空集合
    mySet.clear();

    return 0;
}
```
#### unordered_map
```cpp
#include <iostream>
#include <unordered_map>
#include <string>

int main() {
    // 声明一个unordered_map，键是string类型，值是int类型
    std::unordered_map<std::string, int> myMap;

    // 插入键值对
    myMap["apple"] = 3;
    myMap["banana"] = 5;
    myMap["orange"] = 2;

    // 访问键值对
    std::cout << "苹果的数量：" << myMap["apple"] << std::endl;

    // 检查键是否存在
    if (myMap.find("banana") != myMap.end()) {
        std::cout << "香蕉存在\n";
    }

    // 删除键值对
    myMap.erase("orange");

    // 遍历unordered_map
    for (const auto& pair : myMap) {
        std::cout << "水果: " << pair.first << ", 数量: " << pair.second << std::endl;
    }

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


# Class

### 构造函数
```cpp
class MyClass {
public:
    // 默认构造函数
    MyClass() {
        // 构造函数体
    }
    
    // 带参数的构造函数
    MyClass(int x) {
        // 构造函数体
    }
};
```
#### 初始化列表

```cpp
/**
1. 区别于在函数体中初始化
2. 在构造函数的参数列表后面使用冒号 : 来定义，然后列出要初始化的成员变量及其对应的值
3. 常量成员和引用成员，必须使用初始化列表进行初始化，因为它们只能在初始化时赋值，而不能在构造函数的函数体中赋值。
*/
class MyClass {
private:
    int x;
    int& y; // 引用类型
    const int z; // 常数类型

public:
    // 使用初始化列表
    MyClass(int a, int b, int c) : x(a), y(b), z(c) {
        // 构造函数体
    }

    // 对比：使用函数体初始化
    MyClass(int a, int b, int c) : y(b), z(c) {
        x = a; // 使用函数体初始化 x
        // 构造函数体
    }
};

```

### 析构函数
```cpp
class MyClass {
public:
    // 析构函数
    /**
    1. 析构函数的名称是在类名前加上波浪号 ~。
    2. 用于释放对象占用的资源，如动态分配的内存。
    3. 在对象销毁时自动调用。
    */
    ~MyClass() {
        // 析构函数体
    }
};
```

### 成员变量和成员函数
成员变量和成员函数可以是公共的、私有的或受保护的，以及静态的和非静态的。

```cpp
/**
1. 默认情况下，成员是私有的。
2. private 只能被类的成员函数访问
3. protected 成员与 private 成员类似，但它们可以被派生类（子类）的成员函数访问。
    - 通过派生类对象的.运算符或指针的->运算符来访问
4. public 可以被类的对象访问，也可以被类外部的代码访问。
    - 使用对象的.运算符或指针的->运算符来访问
*/
class MyClass {
private:
    int privateVar;   // 私有成员变量
protected:
    int protectedVar; // 受保护成员变量
public:
    int publicVar;    // 公共成员变量

    // 成员函数
    void myMethod() {
        // 成员函数体
    }
};
```
#### 静态成员

```cpp
/**
1. 属于类本身而不是类的实例。因此，它们被所有该类的实例共享。
*/
class MyClass {
public:
    static int staticVar; // 静态成员变量

    static void staticMethod() { // 静态成员函数
        std::cout << "这是一个静态成员函数" << std::endl;
    }

    void printStaticVar() {
        std::cout << "静态成员变量的值为：" << staticVar << std::endl;
    }
};

// 初始化静态成员变量
int MyClass::staticVar = 10;

int main() {
    // 访问静态成员变量
    std::cout << "静态成员变量的初始值为：" << MyClass::staticVar << std::endl;

    // 修改静态成员变量的值
    MyClass::staticVar = 20;

    // 再次访问静态成员变量
    std::cout << "静态成员变量修改后的值为：" << MyClass::staticVar << std::endl;

    // 调用静态成员函数
    MyClass::staticMethod();

    // 创建类的对象
    MyClass obj1, obj2;

    // 打印静态成员变量
    obj1.printStaticVar();
    obj2.printStaticVar();

    return 0;
}

```


### 继承
#### 单继承
```cpp
// 使用 : 符号来指定基类
class DerivedClass : public BaseClass {
    // 派生类定义
};
```

#### 多重继承
```cpp
// 用逗号 , 分隔多个基类来实现多重继承
class Dog : public Animal, public Bird {
public:
    void bark() {
        std::cout << "Dog is barking\n";
    }
};
```