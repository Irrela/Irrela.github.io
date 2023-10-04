---
title: Cpp Primer
categories: Cpp
tags:
- Cpp
---

* TOC {:toc}

# 3. 字符串，向量和数组
## 3.4 迭代器介绍
### 迭代器运算符

- `*iter` : 返回迭代器所指向元素的引用

- `iter->mem`: 解引用iter并获取该元素名为mem的成员，等价于`(*iter).mem`

- `++iter`, `--iter`: 让迭代器指向容器下一个/上一个元素

- `iter_1 == iter_2`: 两个迭代器相等：指示同一个元素或者是同一个容器的 ***尾后迭代器***。

### 3.4.2 迭代器运算
P125

# 6. 函数
## 6.1 函数基础
### 6.1.1 局部静态对象
局部静态对象是在函数内部定义的静态变量，它在程序的整个生命周期内保持其存在，并 ***在首次访问时初始化***。局部静态对象在C++中有各种实际用途，下面是一些常见的使用场景：

#### 延迟初始化：  

如果你需要在函数首次调用时初始化一个对象，但又希望它在后续调用中保持其值，局部静态对象非常有用。它可以避免重复初始化和销毁的开销。

```cpp
#include <iostream>

class DatabaseConnection {
public:
    DatabaseConnection() {
        std::cout << "Database connection established" << std::endl;
    }

    void query(const std::string& query) {
        std::cout << "Executing query: " << query << std::endl;
    }
};

void performDatabaseTask() {
    static DatabaseConnection dbConnection; // 延迟初始化的局部静态对象

    // 使用数据库连接执行任务
    dbConnection.query("SELECT * FROM customers");
}

int main() {
    std::cout << "Starting program" << std::endl;

    // 第一次调用 performDatabaseTask 会初始化数据库连接
    performDatabaseTask();

    std::cout << "Continuing program" << std::endl;

    // 后续调用 performDatabaseTask 会复用已初始化的数据库连接
    performDatabaseTask();

    std::cout << "Ending program" << std::endl;

    return 0;
}

```
在上述示例中，DatabaseConnection 类表示数据库连接，它在构造函数中输出连接信息。performDatabaseTask 函数用于执行与数据库相关的任务，但在第一次调用时才初始化数据库连接。注意以下几点：

在 performDatabaseTask 函数内部，我们声明了一个局部静态对象 dbConnection。这意味着在第一次调用 performDatabaseTask 时，会执行构造函数并初始化数据库连接。

第一次调用 performDatabaseTask 会输出 "Database connection established"，表示数据库连接被初始化。

***在后续调用 performDatabaseTask 时，不会再执行构造函数***，因为 dbConnection 已经初始化过了。这意味着可以避免重复初始化的开销。

在程序结束时，局部静态对象 dbConnection 的析构函数会被调用，但在这个例子中没有明确的析构输出。

通过使用局部静态对象，你可以在需要时进行延迟初始化，避免了不必要的初始化开销，同时保持了对象在后续调用中的状态。

#### 缓存数据：
   
局部静态对象可以用于缓存需要长时间计算或获取的数据，以便在后续调用中重复使用，从而提高性能。

```cpp
std::string LoadFromFile(const std::string& filename) {
    static std::map<std::string, std::string> fileCache;
    auto it = fileCache.find(filename);
    if (it != fileCache.end()) {
        return it->second;
    }
    // Read file, populate fileCache, and return data
}
```
#### 资源管理： 
当你需要在函数退出时自动释放资源（如关闭文件、释放内存等），而不是依赖于手动的析构或释放，局部静态对象可以在函数结束时执行必要的清理工作。

让我们以一个打开日志文件并自动关闭的例子来详细说明这一点：

```cpp
#include <iostream>
#include <fstream>

void OpenLogFile(const std::string& filename) {
    static std::ofstream logFile(filename); // 局部静态对象，仅在首次调用时初始化
    
    if (!logFile.is_open()) {
        std::cerr << "Failed to open log file" << std::endl;
        return;
    }
    
    logFile << "Logging some data..." << std::endl;
    // 使用 logFile 进行写入操作
    
    // 注意，不需要手动关闭文件
    // 在函数退出时，局部静态对象的析构函数会自动调用
}

int main() {
    OpenLogFile("my_log.txt");
    // 文件会在 OpenLogFile 函数退出时自动关闭
    return 0;
}
```
在这个例子中，OpenLogFile 函数打开一个日志文件并将一些数据写入其中。注意以下几点：

1. std::ofstream logFile(filename);：在函数首次调用时，logFile 会被初始化为一个打开的文件流对象。这个对象是一个局部静态对象，因此只在函数首次调用时初始化，而在后续调用中保持其状态。

2. 当函数退出时，局部静态对象 logFile 的析构函数会自动被调用。在这个例子中，析构函数会自动关闭文件流。

3. 在 main 函数中调用 OpenLogFile("my_log.txt"); 后，文件会在 OpenLogFile 函数退出时自动关闭，而不需要手动调用关闭文件流的操作。

#### 计数器：
局部静态对象可以用于创建计数器，以跟踪函数被调用的次数。
```cpp
int GetFunctionCallCount() {
    static int count = 0;
    return ++count;
}
```

#### 状态机：
在一些情况下，你可能需要在函数调用之间保留一些状态，局部静态对象可以用于维护这些状态。
```cpp
void ProcessInput() {
    static enum State { INIT, RUNNING, STOPPED } currentState = INIT;
    // Process input based on currentState
}
```

### 6.1.3 分离式编译

#### 前向声明
`前向声明（Forward Declaration）`是一种在C++中引入类型（类、结构体、枚举等）的方法，而无需包含完整的类型定义。它在需要访问类型信息的地方提供了一个类型的声明，从而可以在某些情况下避免包含头文件。前向声明通常用于减少编译时间和解决头文件循环包含问题。

前向声明的关键点是，它只提供了类型的名称和信息，而不会引入实际的类型定义。这意味着在使用前向声明时，你只能执行有限的操作，例如声明指向该类型的指针或引用，但不能访问类型的成员。

*前向声明的语法：*

前向声明使用 class 或 struct 关键字，后跟类型名称，然后以分号结束。

```cpp
class ClassName;  // 前向声明一个类
struct StructName; // 前向声明一个结构体
```

*前向声明的使用场景：*

- 解决循环包含： 当两个或多个类互相引用，导致头文件循环包含时，可以使用前向声明来解决这个问题。例如，在类A中只需要指针或引用指向类B，而不需要访问B的具体成员，可以使用前向声明。

- 提高编译效率(可不考虑)： 如果一个头文件中包含了很多其他头文件，但只需在某些情况下使用其中的某个类，使用前向声明可以避免编译器不必要的头文件包含，提高编译效率。

*前向声明的限制：*

前向声明是有限制的，因为它只提供类型的声明，而不包含详细信息。以下是一些前向声明的限制：

- 无法直接访问成员：前向声明的类型不能直接访问其成员，因为编译器不知道该类型的具体内容。

- 无法实例化对象：不能创建前向声明类型的对象，因为编译器没有足够的信息来分配内存。

- 有限的操作：前向声明只适用于声明指向类型的指针或引用，以及一些简单的操作，如声明函数参数、返回类型等。

总的来说，前向声明是一个有用的工具，可以在某些情况下提高编译效率和解决头文件包含问题，但需要在合适的地方使用，避免引入混乱或不明确的代码。

解决循环依赖的实例：
```cpp
// ClassA.h
#ifndef CLASSA_H
#define CLASSA_H

#include "ClassB.h" // 需要使用ClassB，但不会导致循环包含

class ClassA {
public:
    ClassA();
    void DoSomethingWithB(ClassB* b);
};

#endif


// ClassB.h
#ifndef CLASSB_H
#define CLASSB_H

class ClassA; // 前向声明ClassA，避免循环包含

class ClassB {
public:
    ClassB();
    void DoSomethingWithA(ClassA* a); // 使用前向声明
};

#endif
```

# 8. IO lib
## iostream
头文件 iostream 是 C++ 标准库中非常重要的头文件之一。它提供了对输入和输出流的支持，使得我们可以进行简单而方便的输入输出操作。在 iostream 中定义了以下两个重要的流对象：

- std::cin：这是标准输入流对象，用于从用户处接收输入。通常用于读取用户输入的数据，比如整数、浮点数、字符串等。

- std::cout：这是标准输出流对象，用于向屏幕输出数据。通常用于显示程序的输出结果或交互信息。

除了 cin 和 cout，iostream 还定义了其他重要的流对象：

- std::cerr：这是标准错误输出流对象，用于输出程序的错误信息。与 cout 不同，cerr 通常不会被重定向，而是直接输出到屏幕。

- std::clog：这是标准日志输出流对象，用于输出程序的运行日志信息。与 cerr 类似，clog 通常不会被重定向，而是直接输出到屏幕。

头文件 iostream 还包含了一些用于流操作的重要函数，如：

- std::endl：用于输出换行并刷新缓冲区，相当于 '\n' 加上缓冲区刷新。经常在输出数据后使用，确保数据及时显示在屏幕上。

- std::flush：刷新缓冲区，但不输出换行。与 std::endl 不同，flush 只刷新缓冲区而不输出额外的换行符。

- std::cin.get()：用于从输入流中读取一个字符。

- std::getline()：用于从输入流中读取一行字符串。

- std::cout.precision()：设置输出浮点数的精度。

### 8.1.1 IO对象不能拷贝或赋值
- 不能将形参或返回类型设置为流类型。
- 进行IO操作的函数以引用的方式传递和返回流对象。
- 读写IO对象会改变其状态，因此传递和返回的流对象引用不能是const的。
  
### 8.1.2 流的条件状态
流的条件状态是流对象的一种状态，它表示流的当前状态是否满足某种条件。C++ 中流的条件状态由流对象的成员函数 std::ios_base::rdstate() 返回的状态标志表示。以下是流的条件状态：

- eofbit (End-of-File Bit)：当流达到文件末尾时，eofbit 被置位。这表示再尝试读取数据时将无法继续读取更多内容。

- failbit (Fail Bit)：当流操作失败时，failbit 被置位。例如，当尝试读取一个不符合预期类型的值时，或者在输入流中输入了错误的数据。

- badbit (Bad Bit)：当流发生严重错误时，badbit 被置位。例如，当尝试在一个不可用的文件上进行输入输出时。

- goodbit (Good Bit)：这是流的初始状态，表示流处于正常状态。

错误状态包括 `failbit 和 badbit`，当一个流处于错误状态时，它可能无法正常工作，所以在使用流之前通常需要检查它的状态以确保它处于良好状态。

可以使用成员函数 std::ios_base::good()、std::ios_base::eof()、std::ios_base::fail() 和 std::ios_base::bad() 来检查流的条件状态。

- good()：当流的条件状态没有任何错误位被置位时返回 true。等同于检查 !fail() && !bad()。

- eof()：当流的 eofbit 被置位时返回 true，表示流已经到达了文件末尾。

- fail()：当流的 failbit 或 badbit 任意一个被置位时返回 true，表示流操作失败或发生了严重错误。

- bad()：当流的 badbit 被置位时返回 true，表示流发生了严重错误。

#### IO之前检查流的状态

在使用流进行输入输出之前，常见的做法是检查流的状态，以确保它处于良好状态。例如：

```cpp
#include <iostream>

int main() {
    int number;
    std::cout << "Enter a number: ";
    
    if (std::cin >> number) {
        // 输入成功
        std::cout << "You entered: " << number << std::endl;
    } else {
        // 输入失败
        std::cout << "Invalid input!" << std::endl;
    }

    // 检查 eof 状态
    if (std::cin.eof()) {
        std::cout << "Reached end of file." << std::endl;
    }

    while (std::cin >> number) {
        \\ ok：读操作成功...
    }

    return 0;
}

```
#### 清除流对象的错误状态
`std::cin.clear()` 是一个流对象的成员函数，用于清除流的错误状态。当流处于错误状态（如 failbit 或 badbit 被置位）时，流将停止接受输入或输出，并且需要通过调用 clear() 函数来清除错误状态，使得流恢复到正常状态（即 goodbit 置位）。

调用 clear() 函数会将流的错误状态位清除，并且允许继续对流进行输入输出操作。这样，即使之前的输入操作失败了，也可以继续尝试新的输入。

通常，在使用 std::cin 进行输入时，我们应该在读取数据后检查流的状态。
如果发生了输入错误，比如输入了非法字符，导致 failbit 被置位，我们需要使用 clear() 函数清除错误状态。否则，流将处于错误状态，后续的输入操作将无效。

下面是一个示例，演示了如何使用 clear() 函数来处理输入错误：
```cpp
int main() {
    int number;

    std::cout << "Enter a number: ";
    
    while (!(std::cin >> number)) {
        // 输入失败，清除错误状态
        std::cin.clear();

        // 忽略错误输入，读取并忽略无效字符，直到遇到换行符
        std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');

        std::cout << "Invalid input. Please try again: ";
    }

    std::cout << "You entered: " << number << std::endl;

    return 0;
}
```
下面的实例演示了如何处理输入流 std::cin 的状态以保证在调用 process_input(cin) 函数后，std::cin 的状态**与调用前保持一致**。
```cpp
int main() {
    /*
    这段代码的目的是处理 std::cin 流的状态，确保在调用 process_input 函数前后，std::cin 的状态能够正确地保持一致，避免错误状态的影响。
    这在处理用户输入时尤其有用，以确保输入操作的正确性。
    */
    auto old_state = cin.rdstate();
    cin.clear();
    process_input(cin);
    cin.setstate(old_state);

    /*
    这段代码的作用是清除输入流 cin 的 failbit 和 badbit 状态，以确保流对象处于正常状态，允许后续的输入操作继续进行。
    1. ~：这是位求反运算符（bitwise NOT），它会将一个整数的所有位取反。例如，~x 会将 x 中的每一位 0 变成 1，1 变成 0。
    2. cin.rdstate() & ~cin.failbit & ~cin.badbit：这一部分代码使用位运算，将当前的流状态的 failbit 和 badbit 状态位清除，保留其他状态位。
    3. 带参数的clear函数接受一个iostate值作为新状态
    */
    cin.clear(cin.rdstate() & ~cin.failbit & ~cin.badbit);
}
```

### 8.1.3 管理输出缓冲
在 C++ 中，输出缓冲是用于存储输出数据的一块内存区域。
当使用 std::cout 进行输出时，数据首先写入到输出缓冲区中，然后根据一定条件进行刷新，最终显示在屏幕上。这个过程可以通过以下方式进行控制：

1. 自动刷新 (Automatic Flushing):
输出缓冲区在以下情况下会自动刷新：

- 缓冲区满：当输出数据大小超过输出缓冲区的大小时，缓冲区会自动刷新。
- 输出包含换行符：每次输出包含换行符 '\n' 时，缓冲区会自动刷新。
- 程序正常结束：当程序正常退出时，所有流对象的缓冲区都会被刷新。

2. 手动刷新 (Manual Flushing):
可以使用 std::endl/ends 或 std::flush 来手动刷新输出缓冲区：

- `std::endl`：输出数据后，会插入一个换行符并刷新缓冲区。
- `std::ends`: ：输出数据后，会插入一个空字符并刷新缓冲区。
- `std::flush`：刷新缓冲区，但不插入换行符。

#### unibuf & nounibuf
如果想每次IO后都刷新缓冲区，使用`unitbuf`。
```cpp
cout << unitbuf; // 所有输出操作都立即刷新缓存区

cout << nounitbuf; // 回到正常的缓冲方式
```

> 如果程序崩溃，输出缓冲区不会被刷新： 在调试已经崩溃的程序是，先确认哪些数据刷新了 ，避免浪费时间追踪代码为什么没有执行，然而其实他们已经执行但没有打印而已

#### tie() 关联输入输出
`tie() `是一个有用的标准库函数，定义在 <iostream> 头文件中，用于将一个流对象与另一个流对象绑定在一起。
这种绑定操作的目的是在一个流对象有输出操作时，同时刷新另一个流对象的缓冲区。

tie() 函数接受一个指向 ostream 的指针作为参数，并返回一个指向之前绑定的流的指针。如果没有绑定任何流，则返回 nullptr。

通过将 cout（标准输出流）与其他输出流绑定，可以确保在使用 cout 进行输出时，同时刷新其他绑定的流的缓冲区。这在需要**实时显示输出结果的场景**中特别有用。

下面是一个示例，演示如何使用 tie() 函数将 cout 与文件流绑定，以实现实时输出到文件：
```cpp
int main() {
    std::ofstream file("output.txt");
    if (!file) {
        std::cerr << "Failed to open the file." << std::endl;
        return 1;
    }

    // 将 cout 与文件流绑定, old_cout用于保存这次绑定前cout绑定的流的指针 -> 之后解绑后用于恢复
    std::ostream* old_cout = std::cout.tie(&file);

    // 输出到 cout，同时会实时输出到文件
    std::cout << "This is a test message." << std::endl;

    // 恢复 cout 原先的绑定
    std::cout.tie(old_cout);

    // 关闭文件
    file.close();

    return 0;
}
```

# 9. 顺序容器
## 9.1 概述
## 9.2 容器类的操作函数
### 9.2.1 迭代器
在 C++ 中，迭代器（Iterator）是一种用于遍历容器（如数组、向量、列表、映射等）元素的对象。迭代器提供了一种通用的方法，使得我们可以访问容器中的元素，并对其进行遍历和操作，而不需要关心容器的具体实现。

迭代器的主要特点是它类似于指针，可以通过解引用操作（*）来访问容器中的元素，并可以通过递增操作（++）来移动到下一个元素。不同类型的容器（如数组、向量、列表等）提供了不同类型的迭代器，但它们都遵循了迭代器的通用接口。

迭代器的数据类型是由容器类型决定的，不同类型的容器提供不同的迭代器。在 C++ 标准库中，不同容器提供的迭代器类型主要可以分为以下几种：

1. 正向迭代器 (Forward Iterator):
正向迭代器允许从前向后遍历容器中的元素。对于大多数顺序容器（如 std::vector、std::list、std::forward_list等），其迭代器类型为 ForwardIterator。

2. 双向迭代器 (Bidirectional Iterator):
双向迭代器与正向迭代器类似，但它还支持逆向遍历容器。std::list 和 std::set 等容器提供的迭代器类型为 BidirectionalIterator。

3. 随机访问迭代器 (Random Access Iterator):
随机访问迭代器允许在常量时间内进行随机访问和跳跃访问容器元素。支持指针算术运算（如 +、-）和随机访问的容器（如 std::vector 和 std::array）提供的迭代器类型为 RandomAccessIterator。

4. 输入迭代器 (Input Iterator):
输入迭代器允许从容器中读取数据，但不支持修改容器元素。这种迭代器通常用于读取数据流，比如 std::cin。其迭代器类型为 InputIterator。

5. 输出迭代器 (Output Iterator):
输出迭代器允许向容器中写入数据，但不支持读取容器元素。输出迭代器通常用于写入数据流，比如 std::cout。其迭代器类型为 OutputIterator。

在使用迭代器时，我们可以通过容器的 begin() 和 end() 成员函数来获取迭代器的起始和结束位置。对于逆向遍历，一些容器还提供了 rbegin() 和 rend() 成员函数来获取逆向迭代器的起始和结束位置。

# 12. 动态内存
即"堆内存"， 用来存储 ***动态分配***的对象， 也即是 ***程序运行时分配的对象***， 其生命周期由程序来控制。

## 12.1 智能指针
### 12.1.0 new & delete
```cpp
#include <iostream>

int main() {
    // 使用 new 分配动态内存来创建一个整数
    int* dynamicInt = new int;

    // 检查内存是否成功分配
    if (dynamicInt != nullptr) {
        // 给动态内存赋值
        *dynamicInt = 42;

        // 输出动态内存中的值
        std::cout << "Dynamic Int Value: " << *dynamicInt << std::endl;

        // 释放动态内存
        delete dynamicInt;
    } else {
        std::cout << "Failed to allocate dynamic memory!" << std::endl;
    }

    return 0;
}
```

### 12.1.1 `shared_ptr`
`std::shared_ptr` 是 C++ 标准库中的智能指针，用于管理动态分配的对象。与 Java 中的引用计数类似，shared_ptr 通过维护一个引用计数来跟踪对象的引用数，从而在适当的时候自动释放对象。下面是关于 shared_ptr 的原理、使用场景以及常用代码示例的解释：

#### 原理：
- shared_ptr 内部有两个主要部分：对象指针和引用计数。
- 当创建一个 shared_ptr 并将其指向某个对象时，引用计数初始化为 1。
- 当另一个 shared_ptr 复制或从另一个 shared_ptr 创建时，引用计数递增。
- 当 shared_ptr 超出作用域或手动调用 reset() 时，引用计数递减。
- 当引用计数变为零时，shared_ptr 自动删除对象并释放内存。

#### 使用场景：
- 在需要多个 shared_ptr 共享同一对象所有权的情况下，使用 shared_ptr。
- 适用于对象的共享和传递，避免手动释放内存，减少内存泄漏的风险。

#### 示例代码：
```cpp
#include <iostream>
#include <memory> // include std::shared_ptr

class MyClass {
public:
    MyClass(int value) : data(value) {
        std::cout << "Constructing MyClass" << std::endl;
    }
    ~MyClass() {
        std::cout << "Destructing MyClass" << std::endl;
    }

    void printData() {
        std::cout << "Data: " << data << std::endl;
    }

private:
    int data;
};

int main() {
    // 创建 shared_ptr，引用计数为 1
    std::shared_ptr<MyClass> ptr1 = std::make_shared<MyClass>(42);

    {
        // 创建另一个 shared_ptr，引用计数递增为 2
        std::shared_ptr<MyClass> ptr2 = ptr1;

        // 使用 shared_ptr 所指对象
        ptr1->printData();
        ptr2->printData();

    } // ptr2 超出作用域，引用计数递减为 1

    // ptr1 所指对象仍然存在，引用计数为 1
    ptr1->printData();

    // ptr1 超出作用域，引用计数变为 0，对象被销毁
    return 0;
}

```

```cpp
// Executing
Constructing MyClass
Data: 42
Data: 42
Destructing MyClass
Data: 42
Destructing MyClass
```

### 使用`make_shared`函数创建`shared_ptr`

- `std::make_shared` 使用单一内存分配来创建对象和控制块。
- 控制块中包含对象的引用计数以及可能的其他元数据。
- 返回的 std::shared_ptr ***指向控制块，而不是对象本身***。
- 对象位于控制块之后的内存位置。

#### 使用场景：
- 当创建一个 std::shared_ptr 时，建议使用 std::make_shared，因为它可以减少内存分配的开销。
- 在需要创建和管理共享指针的情况下，使用 std::make_shared。

#### 示例代码:
见`shared_ptr`代码示例。

### shared_ptr的拷贝和赋值
- 引用次数递增：用一个shared_ptr初始化其他shared_ptr，或者将其作为参数传递，或者作为函数返回值时。 
- 引用次数递减：给shared_ptr赋新值，或者shared_ptr被销毁

当引用次数为0, shared_ptr自动释放自己管理的对象，并释放相关的内存（通过析构函数）。

```cpp
shared_ptr<Foo> factory(T arg)
{
    // Do something with arg ...
    return make_shared<Foo>(arg);
}

void use_factory(T arg) 
{
    shared_ptr<Foo> p = factory(arg);
} // p离开作用域，其指向的Foo对象被销毁并释放内存

void use_factory_and_keep_res(T arg)
{
    shared_ptr<Foo> p = factory(arg);
    return p; // 返回p，引用计数+1
} // p离开作用域，但指向的Foo对象不会被销毁，内存不会被释放
```
### 多个对象共享成员数据：StrBlob 
// TODO


# 13. 拷贝控制
## 13.1 拷贝，赋值与销毁
### 13.1.1 拷贝构造函数
```cpp
class Foo {
    public:
        Foo();           // Default Constructor
        Foo(const Foo&); // Copy Constructor
}
```
#### 合成拷贝构造函数
程序员未显示定义拷贝构造函数时，编译器默认合成并使用的。

对类类型成员，使用其拷贝构造函数拷贝。对于内置类型成员则直接拷贝。

#### 拷贝初始化
直接初始化： 要求编译器使用普通函数匹配来选择与我们提供参数最匹配的构造函数。
拷贝初始化：要求编译器将右侧运算对象拷贝到正在创建的对象中，如果必要的话，进行类型转换。
```cpp
// 直接初始化
string dots(10, '.');
string s(dots);
// 拷贝初始化
string s_2 = dots;
string null_block = "0-000-000-0000";
string nines = string(100, '9');
```

发生拷贝初始化的场景：
- 使用 `=` 定义变量
- 将一个对象作为实参传递给一个`非引用类型`的形参
- 从一个返回类型为非引用类型的函数返回一个对象
- 用花括号列表初始化一个数组中的元素或一个`聚合类`中的成员

#### 聚合类：
C++中的聚合类是一种特殊类型的类，它具有一些特定的特征和限制。聚合类通常 ***用于表示简单的数据结构***。聚合类的主要特征是可以使用花括号（大括号）进行直接初始化，并且其成员变量没有用户自定义的构造函数、私有/保护的非静态数据成员、基类、虚函数等。

C++11标准引入了对聚合类的更严格的定义，C++17进一步弱化了对于聚合类的要求。根据C++17的定义，以下条件之一的类被视为聚合类：

- 所有非静态数据成员都是公有的。
- 没有用户自定义的构造函数（默认构造函数、拷贝构造函数、移动构造函数等）。
- 没有基类，或者基类是一个聚合类。
- 没有虚函数或者虚基类。

以下是一个C++聚合类的示例：
```cpp
// Point 是一个聚合类
struct Point {
    int x;
    int y;
};

int main() {
    Point p1 = {10, 20};  // 使用花括号直接初始化
    Point p2{30, 40};     // 同样可以使用花括号初始化

    return 0;
}
```

### 13.1.2 拷贝赋值运算符
拷贝赋值运算符（Copy Assignment Operator）是一个类的成员函数，用于将一个已存在的对象的值赋给另一个对象。

拷贝赋值运算符通常在两个对象已经存在的情况下使用，它的目的是将一个对象的内容复制到另一个对象，以达到对象之间数据的同步或复制的目的。

```cpp
#include <iostream>

class MyClass {
public:
    MyClass(int val) : value(val) {}

    // 重载拷贝赋值运算符
    MyClass& operator=(const MyClass& other) {
        if (this == &other) {
            return *this;
        }
        value = other.value;
        return *this;
    }

    int getValue() const {
        return value;
    }

private:
    int value;
};

int main() {
    MyClass obj1(42);
    MyClass obj2(100);

    std::cout << "obj1 value: " << obj1.getValue() << std::endl;
    std::cout << "obj2 value: " << obj2.getValue() << std::endl;

    obj2 = obj1;  // 调用拷贝赋值运算符，将 obj1 的值赋给 obj2

    std::cout << "obj1 value: " << obj1.getValue() << std::endl;
    std::cout << "obj2 value: " << obj2.getValue() << std::endl;

    obj1.value = 31;

    std::cout << "obj1 value: " << obj1.getValue() << std::endl;
    std::cout << "obj2 value: " << obj2.getValue() << std::endl;

    return 0;
}
```

打印结果：
```cpp
obj1 value: 42
obj2 value: 100
obj1 value: 42
obj2 value: 42
obj1 value: 31
obj2 value: 42
```
修改 obj1.value 为 31 后，obj1 的值变为 31，但 obj2 的值不会受到影响，仍为 42。这是因为拷贝赋值运算符创建了一个新的对象副本，而不是共享内部状态。


#### 重载运算符 (overloaded operator)
在C++中，***overloaded operator*** 指的是重载运算符。

C++允许你为自定义的类类型定义一些标准的运算符行为，使得你的类可以像内置类型一样进行操作，例如加法、减法、乘法等。通过重载运算符，你可以定义运算符在自定义类上的行为，使其更加符合你的需求。

例如，你可以为自定义的类类型定义加法运算符，以便能够对类的实例进行相加操作。下面是一个简单的示例，展示如何重载加法运算符：
```cpp
#include <iostream>

class MyNumber {
public:
    MyNumber(int value) : num(value) {}

    // 重载加法运算符
    MyNumber operator+(const MyNumber& other) const {
        return MyNumber(num + other.num);
    }

    int getValue() const {
        return num;
    }

private:
    int num;
};

int main() {
    MyNumber num1(5);
    MyNumber num2(10);

    MyNumber sum = num1 + num2;  // 使用重载的加法运算符

    std::cout << "Sum: " << sum.getValue() << std::endl;

    return 0;
}
```

#### 合成拷贝赋值运算符
***Synthesized copy-assignment operator***, 下面的例子等价于合成：
```cpp
Sale_data& Sale_data::operator=(const Sale_data& rhs)
{
    book_no = rhs.book_no;
    units_sold = rhs.units_sold;
    revenue = rhs.revenue;
    return *this;
}
```

### 13.1.3 析构函数
***析构函数（Destructor）***是一个特殊的成员函数，在C++对象被销毁时自动调用。

它的作用是执行一些资源的释放、清理工作，例如释放动态分配的内存、关闭文件、释放网络连接等。析构函数的名字与类名相同，但在函数名前加上一个波浪号（~）作为前缀。

析构函数的语法如下：
```cpp
class ClassName {
public:
    // 构造函数
    ClassName() {
        // 构造过程的初始化工作
    }

    // 析构函数
    ~ClassName() {
        // 清理资源、释放内存等
    }
};
```
以下是一个简单的示例，展示了析构函数的用法：

```cpp
#include <iostream>

class MyClass {
public:
    MyClass() {
        std::cout << "Constructor" << std::endl;
    }

    ~MyClass() {
        std::cout << "Destructor" << std::endl;
    }
};

int main() {
    {
        MyClass obj;  // 创建一个 MyClass 对象
    }  // 对象超出作用域，析构函数被调用

    std::cout << "After scope" << std::endl;

    return 0;
}
```
在这个示例中，当 obj 超出作用域时，它的析构函数被调用，执行清理工作。输出会显示构造函数和析构函数的调用顺序。

#### 在实践中，关于析构函数容易踩的坑包括：
- 析构函数的函数体不负责销毁成员的任务，这是由 ***隐式的析构部分*** 完成的。
- ***内置类型***没有析构函数。如果一个对象有普通指针成员，当对象析构销毁时，其成员指针指向的对象不会被销毁。
- 如果一个对象有智能指针成员，因为智能指针是类类型，有对应的析构函数，因此与普通指针不一样，智能指针的成员会随析构被销毁。
- 释放资源的顺序：如果一个类使用了多个资源（如内存、文件等），务必在析构函数中按照逆序释放这些资源，以避免资源泄漏。
- 动态分配内存的释放：如果在构造函数中分配了内存，在析构函数中一定要释放这些内存，否则会导致内存泄漏。
- 避免抛出异常：析构函数应该尽量避免抛出异常，因为在析构函数期间抛出异常会导致程序行为不可预测。
- 当指向一个对象的引用或指针离开作用域时，不会触发对象的析构函数执行。

### 13.1.4 三/五法则
"三五法则" 最初是指 C++ 中关于自定义类特殊成员函数的准则，涉及到构造函数、拷贝构造函数、拷贝赋值运算符和析构函数。后来，随着 C++11 引入了移动语义，这些规则扩展为五个特殊成员函数，即构造函数、拷贝构造函数、拷贝赋值运算符、移动构造函数和移动赋值运算符。

"三" 最初指的是构造函数、拷贝构造函数和析构函数，而 "五" 指的是这三个加上拷贝赋值运算符和拷贝构造函数。这些特殊成员函数在 C++ 中对于类的正确管理和行为非常重要，因此被总结为 "三五法则"。

- 析构函数：每个类都应该有一个析构函数，用于在对象销毁时执行清理工作，如释放资源、释放内存等。

- 拷贝构造函数：如果一个类需要动态内存分配，它需要提供一个自定义的拷贝构造函数来实现深拷贝，以确保在对象被复制时分配新的内存。

- 拷贝赋值运算符：如果一个类需要动态内存分配，它需要提供一个自定义的拷贝赋值运算符来实现深拷贝，以确保在对象被赋值时分配新的内存，并释放旧的内存。

- 移动构造函数：C++11引入了移动语义，允许高效地转移资源而不是复制它们。如果类有动态分配的资源，可以实现移动构造函数来支持资源的转移，从而提高效率。

- 移动赋值运算符：类似于移动构造函数，移动赋值运算符用于支持对象的资源转移，以避免不必要的资源复制。

> 需要自定义析构函数的类，几乎肯定也需要自定义拷贝构造函数和拷贝赋值运算
这句话的核心是基于对象的生命周期和资源管理的观点。如果一个类需要自定义析构函数，通常意味着这个类在对象销毁时需要执行一些特定的清理工作，例如释放动态分配的内存、关闭文件、释放资源等。而这些清理工作在对象被拷贝或赋值时也需要被考虑到，以保证复制或赋值后的对象能够正确地管理资源。

### 13.1.5 使用=default
使用`=default`显示要求编译器生成合成的版本。

### 13.1.6 使用=delete
使用`=delete`明确地告诉编译器不要合成该函数。
```cpp
class NonCopyable {
public:
    NonCopyable() = default;  // 默认构造函数

    NonCopyable(const NonCopyable&) = delete;  // 阻止拷贝构造函数的合成

    ~NonCopyable() = default; // 默认析构函数

    // 其他成员函数...
};
```
在这个示例中，我们定义了一个名为 NonCopyable 的类，通过将拷贝构造函数声明为 delete，明确地告诉编译器不要合成拷贝构造函数。这意味着该类的对象不能被拷贝构造，从而阻止了不适合的操作。如果在试图进行拷贝构造时，编译器将会产生错误。

这种做法在很多情况下是有用的，例如你希望确保某个类的实例不会被意外地拷贝，或者需要显式地控制对象的生命周期和资源管理。

> 对析构函数使用 = delete 是不合法的操作。编译器始终需要在对象的生命周期结束时调用析构函数，以确保资源的正确释放和清理工作的执行。使用 = delete 对析构函数进行阻止或限制是多余的，因为无法阻止对象的自动销毁。

> 当一个类有不可拷贝，赋值或销毁的成员时，类本身的合成拷贝控制成员也会变成delete

#### 管理拷贝控制的权限
主要讨论 `=delete` 和声明为 `private`，这两者都可以阻止拷贝。

使用 `private` 声明拷贝控制函数的优势和使用场景：
- ***精细控制权限***: 通过将拷贝控制函数声明为 private，你可以在需要的时候控制对象的拷贝行为。这样可以在类内部更加精细地决定哪些函数可以访问和使用拷贝，哪些函数被阻止。
- ***友元函数访问***: 如果某个函数需要访问类的私有成员并执行拷贝，你可以将该函数声明为类的友元函数。这使得你可以在外部实现特定的操作，同时阻止一般情况下的拷贝。
- ***允许特定情况下的拷贝***: 在一些情况下，你可能需要在类内部执行拷贝操作，而在外部不允许拷贝。通过将拷贝控制函数声明为 private，你可以在类的成员函数内部执行必要的拷贝。

使用 `=delete` 声明拷贝控制函数的优势和使用场景：
- ***更明确的意图***：通过使用 = delete，你明确地表达了对拷贝操作的禁止，代码更加清晰明了。这对于其他程序员来说更容易理解你的意图。
- ***编译时错误***：使用 = delete 可以在编译时阻止拷贝操作，从而更早地发现和修复问题。这有助于避免在运行时出现不必要的错误。
- ***跨编译单元一致性***：使用 = delete 可以确保无论在哪个编译单元中，都不能执行拷贝操作。这有助于维持代码的一致性。

总的来说，使用 private 或 = delete 都可以达到组织拷贝操作的目的，但取决于你的需求和代码设计风格，你可以根据实际情况选择最合适的方法。


## 13.2 拷贝控制和资源管理

### 13.2.1 行为像值的类
考虑一个这样的类：
```cpp
class HasPtr {
    public:
        /* 
        = std::string()：这是默认参数值的设置。
        如果在调用构造函数时没有传递实参给参数 s，则构造函数将使用 std::string() 创建一个临时的空字符串对象作为默认参数。
        换句话说，如果你调用构造函数时不提供任何参数，那么 s 将默认为一个空字符串。 
        */
        HasPtr(const std::string &s = std::string()):
            ps(new std::string(s)), i(0) { }

        HasPtr(const HasPtr &p):
            ps(new std::string(*p.ps)), i(p.i) { }

        /*
        在函数声明中，参数名可以省略，只保留参数类型，特别是在你只关心参数类型而不需要在函数声明中指定参数名的情况下。
        这种情况下，参数类型已经足够指定了函数的参数信息，而参数名可以在函数定义中使用。

        例如，如果在函数声明中指定了参数名，它会变成这样：HasPtr& operator=(const HasPtr &rhs);
        在这里，rhs 是参数名，而 const HasPtr & 是参数类型。
        但在函数声明中，如果你不关心参数名，只想声明参数的类型，可以省略参数名，只保留参数类型
        */
        HasPtr& operator=(const HasPtr &); 
        
        ~HasPtr() {
            delete ps;
        }

    private:
        std::string *ps;
        int i;
};
```

#### 类值拷贝赋值运算符
```cpp
class HasPtr {
    public:

        // ...

        /*
        rhs = right hand side
        类值拷贝赋值运算符: 通常组合了析构和构造函数，析构销毁左值，再从右值拷贝数据
        */
        HasPtr& HasPtr::operator=(const HasPtr &rhs) {
            auto new_string = new std::string(*rhs.ps);
            delete ps;
            ps = new_string;
            i = rhs.i;

            /*
            在类的成员函数中，this 是一个特殊的指针，指向调用该成员函数的对象的地址。
            通过解引用 this 指针，可以获取当前对象本身。
            因此，*this 表示当前对象的引用，它可以在成员函数内部使用，就像使用对象本身一样。
            */
            return *this;
        }

    private:
        std::string *ps;
        int i;
};
```

> 重载赋值运算符时需要尤为注意顺序

以下为错误示范：
```cpp
    HasPtr& HasPtr::operator=(const HasPtr &rhs) {
        delete ps;
        ps = new std::string(*(rhs.ps));
        i = rhs.i;
        return *this;
    }
```

### 13.2.2 定义行为像指针的类
> size_t: C++ 标准库中定义的一种数据类型，用于表示对象的大小或索引，通常用于表示容器的大小、数组的索引等。
> 
> 这个数据类型的大小在不同平台上可能会有所不同，但它通常被定义为足够大以便能够表示系统中最大的对象大小。因此，通常情况下，std::size_t 是无符号整数类型，并且足够大以适应当前平台上的最大对象。
> 
> std::size_t 通常用于循环中的索引、数组大小、容器的大小等情况，因为它能够确保足够大以适应不同系统的需求，从而提高了代码的可移植性。

当我们谈论“行为像指针的类”时，通常是指类内部包含一个指针，并且重载了一些操作符，使得这个类的行为在很多方面类似于指针。

当拷贝这种类时，拷贝其指针成员而不是指针指向的对象。

最理想的方式是用share_ptr来管理这些成员:
```cpp
#include <iostream>
#include <memory>

class HasPtr {
public:
    HasPtr(const std::string &s = std::string()) :
        ps(std::make_shared<std::string>(s)), i(0) {}

    HasPtr(const HasPtr &p) :
        ps(p.ps), i(p.i) {}

    HasPtr& operator=(const HasPtr &rhs) {
        ps = rhs.ps;
        i = rhs.i;
        return *this;
    }

    ~HasPtr() {
        // 默认的析构函数会自动处理引用计数和资源释放
    }

private:
    std::shared_ptr<std::string> ps;
    int i;
};

int main() {
    HasPtr obj1("Hello");
    HasPtr obj2(obj1);  // 使用拷贝构造函数

    obj2 = obj1;  // 使用拷贝赋值运算符

    return 0;
}
```

如果不使用智能指针，则用引用计数来手动实现：
```cpp
// 使用引用计数的类
class HasPtr {
    public:
        /*
        构造函数分配新的string和新的计数器，并将计数器置为1
        */
        HasPtr(const std::string &s = std::string()):
            ps(new std::string(s)), i(0), use(new std::size_t(1)) {}

        /*
        拷贝构造函数拷贝所有数据成员，并递增计数器
        */
        HasPtr(const HasPtr &p): 
            ps(p.ps), i(p.i), use(p.use) {
                ++*use;
            }

        /*
        拷贝赋值运算符
        */
        HasPtr& HasPtr::operator=(const HasPtr &rhs) {
            ++*rhs.use;
            if (--*use == 0) {
                delete ps;
                delete use;
            }

            ps = rhs.ps;
            i = rhs.i;
            use = rhs.use;

            return *this;
        }

        ~HasPtr() {
            if (--*use == 0) { // 当引用计数归零
                delete ps; // 释放string内存
                delete use; // 释放技术器内存
            }
        };

    private:
        std::string *ps;
        int i;
        std::size_t *use; // 记录有多少个对象共享*ps的成员
};
```

## 13.3 交换操作
> 定义swqp不是必要的，但对于分配了资源的类，这可能是一种很重要的优化手段

```cpp
// Personalized swap impl
class HasPtr {
    public:
        // friend：访问private的数据成员
        friend void swap(HasPtr&, HasPtr&);
    private:
        std::string *ps;
        int i;
};

inline
void swap(HasPtr &lhs, HasPtr &rhs) {
    using std::swap;
    swap(lhs.ps, rhs.ps);
    swap(lhs.i, rhs.i);
}

int main() {
    HasPtr lhs, rhs;
    swap(lhs.h, rhs.h); // 使用HasPtr的swap
    std::swap(lhs.h, rhs.h); // 使用标准库的swap
}
```

### 在赋值运算符中使用swap
定义swap的类通常用swap来定义它的赋值运算符。 

这些运算符使用了一种叫 `copy and swap` 的技术：将左侧运算对象与右侧运算对象的一个新副本进行交换。

```cpp
// rhs按值传递，意味着参数传递时拷贝HasPtr的操作会分配该对象string成员的一个新副本
HasPtr& HasPtr::operator=(HasPtr rhs) {
    swap(*this, rhs);
    return *this;
}
```
> `copy and swap` 的好处在于*** 自动处理了自赋值情况切天然就是异常安全的。
"Copy and swap" 是一种在实现拷贝赋值运算符时常用的技术，它的核心思想是通过创建一个`局部副本`来实现安全的赋值操作，然后利用交换技巧将副本的数据与当前对象的数据交换，最终导致副本在析构时释放原始资源。

这种技术有两个主要优点：
- ***自动处理自赋值情况***： 在实现拷贝赋值运算符时，我们需要考虑自赋值的情况，即对象试图将自己赋值给自己。这种情况如果不加处理可能会导致资源释放问题。而使用 "Copy and swap" 技术，我们首先创建了一个副本，然后再交换数据。因此，在自赋值的情况下，副本的数据会被复制到当前对象，而不会影响原有资源。

- ***异常安全性***： "Copy and swap" 技术的另一个优点是它天然具有异常安全性。在进行赋值操作的过程中，如果发生异常，副本会在其作用域结束时被销毁，从而自动释放资源。这确保了异常发生时不会出现资源泄漏。

综合来说，"Copy and swap" 技术在实现拷贝赋值运算符时可以简化逻辑，避免了自赋值和异常安全性问题，使得代码更加健壮和可维护。然而，需要注意的是，"Copy and swap" 技术需要额外的资源开销，因为它涉及创建临时副本。

## 13.4 拷贝控制示例



## 13.5 动态内存管理类

## 13.6 对象移动






# Pending
## 类模板，函数模版
*函数模板：*

函数模板允许你编写通用的函数，能够处理不同数据类型的参数。它通过参数的数据类型来推断和生成特定的函数实现。
```cpp
template <typename T>
T add(T a, T b) {
    return a + b;
}

int main() {
    int sum1 = add(3, 4);       // 调用add<int>
    double sum2 = add(2.5, 1.5);  // 调用add<double>
    return 0;
}
```

*类模板：*

类模板允许你编写通用的类，能够处理多种数据类型的成员变量和方法。它通过模板参数的数据类型来生成特定的类实现。
```cpp
template <typename T>
class Stack {
private:
    std::vector<T> elements;
public:
    void push(T value) {
        elements.push_back(value);
    }
    
    T pop() {
        T value = elements.back();
        elements.pop_back();
        return value;
    }
};

int main() {
    Stack<int> intStack;
    intStack.push(5);
    intStack.push(10);
    int topValue = intStack.pop();

    Stack<double> doubleStack;
    doubleStack.push(3.14);
    doubleStack.push(2.71);
    double topDouble = doubleStack.pop();

    return 0;
}
```



## about include
In C++, there are two ways to include header files in your code: using angle brackets (<...>) and using double quotes ("..."). These two methods have different behaviors and are typically used in different scenarios.

*Angle Brackets (<...>):*
When you include a header file using angle brackets, the compiler searches for the header in the system's standard include paths. These paths are typically predefined by the compiler installation and include system headers and libraries.

This syntax is commonly used for including standard library headers or headers from external libraries.

```cpp
#include <iostream>   // Including a standard library header
#include <vector>     // Including another standard library header
#include <mylibrary/myheader.h>  // Including a header from an external library
```

*Double Quotes (`"..."):*
When you include a header file using double quotes, the compiler searches for the header in the current directory first, and if not found, it searches in the standard include paths. This allows you to include headers that are part of your project or are located in the same directory as your source files.

This syntax is typically used for including your own project-specific headers.

```cpp
Copy code
#include "myheader.h"   // Including a header from your project
#include "util/helper.h"   // Including another project-specific header
```

In summary, the main difference between angle brackets and double quotes is the search path for header files. Angle brackets are used for system headers and libraries, while double quotes are used for project-specific headers. It's a good practice to use the appropriate syntax depending on where the header file is located and whether it's part of your project or an external library.


## 构建
构建C++代码的可执行文件通常包括以下几个步骤：预处理、编译、汇编、链接。下面对每个步骤进行详细讲解：

- **预处理（Preprocessing）**：

    预处理是编译过程的第一个阶段。在预处理阶段，预处理器会处理源代码中的预处理指令，例如 `#include 包含头文件、#define 定义宏`等。预处理器会根据预处理指令展开代码，并生成一个被称为预处理后的文件（通常以 .i 或 .ii 为扩展名）。预处理后的文件是展开了所有宏、包含了所有头文件的源代码文件。

- **编译（Compilation）**：
    
    编译是预处理后文件的下一阶段。在编译阶段，编译器会将预处理后的文件翻译成汇编代码。这个阶段是将高级语言（C++）翻译成低级语言（汇编语言）的过程。编译器会进行`词法分析、语法分析、语义分析`等操作，并生成汇编代码文件（通常以 .s 为扩展名）。

- **汇编（Assembly）**：
    
    汇编是编译后生成的汇编代码的下一阶段。在汇编阶段，汇编器将汇编代码翻译成机器代码，即二进制代码。汇编器会根据特定的机器指令集和架构将汇编代码转换成对应的机器码，并生成目标文件（通常以 .o 或 .obj 为扩展名）。

- **链接（Linking）**：
  
    链接是将所有编译生成的目标文件及所需的库文件组合在一起，形成最终的可执行文件的过程。在链接阶段，链接器会解析目标文件中的符号（如函数和全局变量）的引用，并将其与其他目标文件或库文件中的定义进行关联。这样，所有符号的引用都能正确地与对应的定义进行连接。最终生成一个可执行文件，通常是一个可执行二进制文件（可执行文件）。

    链接可以分为静态链接和动态链接两种方式：

    - 静态链接：在静态链接中，目标文件中所需的代码会被复制并嵌入到最终的可执行文件中，生成一个完全独立的可执行文件。这意味着可执行文件不依赖于外部的库文件，但会增加可执行文件的大小。静态链接在编译时完成。

    - 动态链接：在动态链接中，目标文件中所需的代码并不会被复制到可执行文件中，而是在运行时由操作系统动态加载并链接到可执行文件中。这样可执行文件更加小巧，但会依赖于外部的共享库文件。动态链接在运行时完成。


# Project Dev
## Cmake
### CMakeLists.txt
CMakeLists.txt 是 CMake 构建系统的核心配置文件，是每个 CMake 项目都必须包含的文件，用于定义**项目的构建规则和设置编译选项**。

在 CMakeLists.txt 文件中，您可以定义项目的源代码、头文件、可执行文件、库文件以及它们之间的依赖关系。通过编写 CMakeLists.txt 文件，您可以告诉 CMake 如何构建您的项目，并指定项目的构建过程、生成目标等。

> CMakeUserPresets.json的用途 ？

CMakeUserPresets.json 是 CMake 3.19 版本引入的新特性，用于简化 CMake 项目的配置和构建过程。该文件是一个 JSON 格式的配置文件，允许用户定义项目的构建配置和设置。

CMakeUserPresets.json 文件的目的是**让用户能够更轻松地配置项目的构建选项，而无需直接修改 CMakeLists.txt 文件**。

CMakeUserPresets.json 文件可以包含多个预设（Presets），每个预设定义了一组构建选项和配置。预设可以包含构建类型（如 Debug 或 Release）、目标平台、构建选项（如编译标志、链接选项等）等信息。用户可以在 CMakeUserPresets.json 中定义预设，然后通过 CMake 用户预设功能来选择要应用的预设，以方便地配置项目的构建。

使用 CMakeUserPresets.json，您可以将构建选项和配置从 CMakeLists.txt 文件中分离出来，使 CMakeLists.txt 更专注于描述项目的整体结构和构建规则，而将构建选项的配置留给 CMakeUserPresets.json 文件。

> 在Clion中默认构建文件输出在cmake-build-debug文件夹，删掉之后reload会自动创建


## Pkg management - brew
通过brew下包，然后手动配置cmake，以boost为例

```
# Cmakelist.txt中添加如下

### Boost ###
# 设置 Boost 库的路径
set(BOOST_ROOT /opt/homebrew/Cellar/boost)
# 寻找 Boost 库并添加包含路径
#find_package(Boost REQUIRED COMPONENTS filesystem container algorithm)
find_package(Boost REQUIRED) #

include_directories(${Boost_INCLUDE_DIRS})
target_link_libraries(yakuman ${Boost_LIBRARIES})
```
> find_package(Boost REQUIRED), 建议整个使用，如果单个组件引入要确认好组件名， 比如algorithm就不是一个可用的组件名


## Pkg management - vcpkg
### install error "pkg-config"
```
CMake Error at scripts/cmake/vcpkg_find_acquire_program.cmake:163 (message):
  Could not find pkg-config.  Please install it via your package manager:

      brew install pkg-config
Call Stack (most recent call first):
  scripts/cmake/vcpkg_fixup_pkgconfig.cmake:203 (vcpkg_find_acquire_program)
  ports/gtest/portfile.cmake:49 (vcpkg_fixup_pkgconfig)
  scripts/ports.cmake:147 (include)


error: building gtest:arm64-osx failed with: BUILD_FAILED
Elapsed time to handle gtest:arm64-osx: 6.3 s
Please ensure you're using the latest port files with `git pull` and `vcpkg update`.
Then check for known issues at:
    https://github.com/microsoft/vcpkg/issues?q=is%3Aissue+is%3Aopen+in%3Atitle+gtest
You can submit a new issue at:
    https://github.com/microsoft/vcpkg/issues/new?title=[gtest]+Build+error&body=Copy+issue+body+from+%2FUsers%2Fsakagami%2Fvscode%2Fgit%2Fdev_tool%2Fvcpkg%2Finstalled%2Fvcpkg%2Fissue_body.md
```

solution:
`brew install pkg-config`
### Clion 配置
Preference -> Build,Execution, Deployment -> Cmake
- 复制default
- Cmake Options 加上 `-DCMAKE_TOOLCHAIN_FILE=/Users/sakagami/vscode/git/dev_tool/vcpkg/scripts/buildsystems/vcpkg.cmake`
- default配置下取消勾选enable(只用新配置)
- Apply

### 以Gtest为例
通过vcpkg下载gtest
```sh
~/vscode/git/dev_tool/vcpkg (master) » vcpkg install gtest                        sakagami@Seitsuno
Computing installation plan...
The following packages are already installed:
    gtest:arm64-osx -> 1.13.0
gtest:arm64-osx is already installed
Total install time: 6.25 us
The package gtest is compatible with built-in CMake targets:

    enable_testing()
    
    find_package(GTest CONFIG REQUIRED)
    target_link_libraries(main PRIVATE GTest::gtest GTest::gtest_main GTest::gmock GTest::gmock_main)
    
    add_test(AllTestsInMain main)
```

在CMakeLists.txt中加上
```
enable_testing()

find_package(GTest CONFIG REQUIRED)
target_link_libraries(main PRIVATE GTest::gtest GTest::gtest_main GTest::gmock GTest::gmock_main)

add_test(AllTestsInMain main)
```

### 用vcpkg下载boost的时候报错
```
      Failed to download file with error: 1
      If you are using a proxy, please check your proxy setting. Possible causes are:
      
      1. You are actually using an HTTP proxy, but setting HTTPS_PROXY variable
         to `https://address:port`. This is not correct, because `https://` prefix
         claims the proxy is an HTTPS proxy, while your proxy (v2ray, shadowsocksr
         , etc..) is an HTTP proxy. Try setting `http://address:port` to both
         HTTP_PROXY and HTTPS_PROXY instead.
```

Solution:
如果您使用 shadowsocks 进行代理，您可以通过以下方式同时将 HTTP_PROXY 和 HTTPS_PROXY 环境变量设置为 http://address:port，其中 address 是 shadowsocks 代理服务器的地址，port 是代理服务器的端口号：

在终端中执行以下命令：
```
# export http_proxy=http://address:port
# 只替换https就行
export https_proxy=http://address:port
```
请确保将 address 和 port 替换为**实际的 shadowsocks 代理服务器地址和端口号**。

注意：在终端中使用 http_proxy 和 https_proxy 环境变量（小写）设置 HTTP 和 HTTPS 的代理，而不是使用 HTTP_PROXY 和 HTTPS_PROXY 环境变量（大写）。在不同的环境中，可能会有大小写的区别，请根据实际情况使用正确的环境变量。

## Pkg management - Conan
1. Install Conan
    ```
    brew install conan

    conan --version 

    conan profile detect

    conan profile list
    ```

2. Install other libs by Conan
    项目根目录下新建`conanfile.txt`, 作为Conan的包配置文件, 内容类似于：
    ```
    [requires]
    gtest/1.8.1

    [generators]
    cmake
    ```
    配置好后在根目录下运行：
    ```sh
    // 根据配置文件下载包
    conan install . 
    ```
3. Cmakelist.txt
    ```
    # 包含 Conan 的构建和工具模块
    include(${CMAKE_BINARY_DIR}/conanbuildinfo.cmake)
    conan_basic_setup(TARGETS)
    ```

## Gtest
### FetchContent
配置Cmakelist.txt
```
# 下载并构建 Google Test
include(FetchContent)
FetchContent_Declare(
        googletest
        URL https://github.com/google/googletest/archive/03597a01ee50ed33e9dfd640b249b4be3799d395.zip
)
FetchContent_MakeAvailable(googletest)

# 添加单元测试可执行文件，并链接 Google Test 相关的源文件
add_executable(test_yakuman
        test/test_main.cpp
        # 在这里添加您的单元测试源文件
        src/domain/hand.cpp
        src/domain/tile.cpp
        )

# 添加项目的头文件目录和 Google Test 的头文件目录
target_include_directories(test_yakuman PRIVATE include ${googletest_SOURCE_DIR}/googletest/include)

# 链接 Google Test 相关的库
target_link_libraries(test_yakuman gtest_main)

# 添加测试
enable_testing()
add_test(NAME test_yakuman COMMAND test_yakuman)
```


# Miscellany
## Keyword
### explict
用于修饰类的单参数构造函数（或者带有默认参数的多参数构造函数）。它的作用是 ***禁止隐式的类型转换***，防止编译器在某些情况下自动执行构造函数的调用。

特别是在 ***构造函数参数只有一个***的情况下，编译器可能会自动执行隐式的类型转换，这可能会导致不符合预期的结果。

#### 什么是隐式的类型转换
考虑以下情况：
```cpp
class MyClass {
public:
    MyClass(int value) : data(value) {}

    int getData() const {
        return data;
    }

private:
    int data;
};

int main() {
    MyClass obj1 = 42;  // 隐式地调用构造函数，将整数转换为 MyClass 对象
    MyClass obj2(42);   // 直接调用构造函数

    int value = obj2.getData();
    std::cout << "Value: " << value << std::endl;

    return 0;
}
```
在这个例子中，当构造函数没有被声明为 explicit 时，***编译器会隐式地将整数 42 转换为 MyClass 对象***，这是因为构造函数可以用作从整数到 MyClass 的类型转换。然后，编译器会执行类似于 MyClass obj1 = MyClass(42); 的操作，将整数转换为 MyClass 对象。

如果将构造函数声明为 explicit，编译器将不会执行这种隐式的类型转换，而必须使用直接的构造函数调用来创建对象，如 MyClass obj2(42);。

因此，explicit 关键字的作用就是防止在不经意之间执行隐式类型转换，强制要求使用明确的方式来调用构造函数。这有助于减少代码中的混淆和意外行为。


## Vector
### erase
在 C++ 的容器类中，`erase` 函数用于从容器中删除一个或多个元素。它可以接受一个迭代器（iterator）作为参数，指示要删除的元素的位置。下面是关于 erase 函数的解释，以及示例代码：

*erase 函数的用法：*
- 在序列式容器（如 std::vector、std::list）中，erase 接受一个迭代器参数，表示要删除的元素。
- 在关联式容器（如 std::set、std::map）中，erase 接受一个键参数，表示要删除的键对应的元素。

*示例代码：*
以下示例演示了如何使用 erase 函数从 std::vector 和 std::map 中删除元素：
```cpp
#include <iostream>
#include <vector>
#include <map>

int main() {
    // 示例：使用 erase 删除 std::vector 中的元素
    std::vector<int> vec = {1, 2, 3, 4, 5};
    
    // 删除第三个元素
    vec.erase(vec.begin() + 2); // 迭代器指向第三个元素
    
    // 输出剩余的元素
    for (const auto& num : vec) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    // 示例：使用 erase 删除 std::map 中的元素
    std::map<std::string, int> myMap = {
        {"apple", 10},
        {"banana", 5},
        {"cherry", 7}
    };
    
    // 删除键为 "banana" 的元素
    myMap.erase("banana");
    
    // 输出剩余的键值对
    for (const auto& pair : myMap) {
        std::cout << pair.first << ": " << pair.second << std::endl;
    }

    return 0;
}

```

### sort
在 C++ 中，`std::sort` 是标准库中用于排序容器或数组元素的函数，定义在 <algorithm> 头文件中。它使用快速排序（Quick Sort）或者归并排序（Merge Sort）算法来对容器或数组中的元素进行排序。std::sort 可以对各种内置数据类型和自定义类型进行排序，只需要定义好比较函数或使用默认的比较操作符 < 即可。

std::sort 的常用用法如下：

**对数组进行排序：**
```cpp
#include <iostream>
#include <algorithm>

int main() {
    int arr[] = {5, 2, 9, 1, 5, 6};
    int size = sizeof(arr) / sizeof(arr[0]);

    std::sort(arr, arr + size); // 对整个数组进行排序

    // 输出排序后的数组
    for (int i = 0; i < size; ++i) {
        std::cout << arr[i] << " ";
    }

    return 0;
}
```

**对容器进行排序：**
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> vec = {5, 2, 9, 1, 5, 6};

    std::sort(vec.begin(), vec.end()); // 对整个容器进行排序

    // 输出排序后的容器元素
    for (int num : vec) {
        std::cout << num << " ";
    }

    return 0;
}
```

**自定义排序规则：**

如果要对自定义类型进行排序，我们可以通过定义比较函数或者比较对象来指定排序规则。比较函数或比较对象必须是可调用的，并返回一个 bool 值，用于表示两个元素的大小关系。如果返回 true，表示第一个元素应该在第二个元素之前，如果返回 false，表示第一个元素应该在第二个元素之后。
使用比较函数的示例：

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

struct Person {
    std::string name;
    int age;
};

bool compareByName(const Person& p1, const Person& p2) {
    return p1.name < p2.name;
}

int main() {
    std::vector<Person> people = { {"Alice", 25}, {"Bob", 30}, {"Charlie", 20} };

    std::sort(people.begin(), people.end(), compareByName); // 使用自定义比较函数

    // 输出排序后的人员信息
    for (const Person& p : people) {
        std::cout << p.name << " (" << p.age << ") ";
    }

    return 0;
}
```

输出：
```
Alice (25) Bob (30) Charlie (20)
```

**使用比较对象的示例：**
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

struct Person {
    std::string name;
    int age;
};

struct CompareByAge {
    bool operator()(const Person& p1, const Person& p2) const {
        return p1.age < p2.age;
    }
};

int main() {
    std::vector<Person> people = { {"Alice", 25}, {"Bob", 30}, {"Charlie", 20} };

    std::sort(people.begin(), people.end(), CompareByAge()); // 使用自定义比较对象

    // 输出排序后的人员信息
    for (const Person& p : people) {
        std::cout << p.name << " (" << p.age << ") ";
    }

    return 0;
}
```

输出：
```
Charlie (20) Alice (25) Bob (30)
```

std::sort 是 C++ 中非常有用的排序函数，它能够轻松对数组和容器进行排序，并通过自定义比较函数或比较对象，满足各种排序需求。

### getline
getline() 是一个用于从输入流中读取一行文本的函数。它可以从输入流（如 std::cin 或 std::ifstream）读取一行字符数据，并存储到一个字符串中，直到遇到换行符 \n 或指定的分隔符为止。getline() 函数的原型如下：

`std::istream& getline(std::istream& is, std::string& str, char delim);`

其中，is 是输入流对象（通常是 std::cin 或文件流 std::ifstream），str 是存储读取的文本的字符串，delim 是可选参数，用于指定分隔符，表示遇到该字符时停止读取，默认为换行符 \n。

getline() 函数从输入流中读取字符，并将其存储到字符串 str 中，直到遇到换行符或指定的分隔符为止。然后，它会将输入流对象的读取位置移动到下一行的起始位置或分隔符之后，准备下一次读取。

下面是使用 getline() 函数读取多个以逗号分隔的节点值的示例：

```cpp
#include <iostream>
#include <sstream>
#include <string>

int main() {
    std::string input = "Node1,Node2,Node3,Node4";
    std::istringstream ss(input); // 使用输入字符串初始化 stringstream

    std::string nodeVal;
    while (getline(ss, nodeVal, ',')) {
        std::cout << "Node value: " << nodeVal << std::endl;
    }

    return 0;
}
```
输出：
```
Node value: Node1
Node value: Node2
Node value: Node3
Node value: Node4
```

在上述示例中，我们使用 std::istringstream 将输入字符串 input 初始化为 std::stringstream 对象 ss。然后，我们通过循环使用 getline(ss, nodeVal, ',') 来读取多个以逗号分隔的节点值，并打印每个节点的值。getline() 会自动识别逗号为分隔符，并在读取完一个节点值后，将 ss 的读取位置移动到下一个逗号之后，准备读取下一个节点值。

这种用法在解析以逗号分隔的数据时很常见，特别是在处理 CSV 文件（逗号分隔值）或其他类似格式的数据时非常有用。

### stoi
stoi 是 C++ 中的一个函数，用于将字符串转换为整数类型（int）。它的原型如下：
`int stoi (const string& str, size_t* idx = 0, int base = 10);`
参数解释：

- str: 要转换的字符串。
- idx: 一个指向 size_t 类型的指针，指向函数中未转换的第一个字符的索引。可以为 nullptr，表示不需要这个信息。
- base: 可选参数，用于指定字符串的进制，可以是 10（默认）、8 或 16。

stoi 函数从字符串的开头开始解析整数，并尝试将其转换为 int 类型。它会跳过字符串中的空格，直到遇到第一个非空格字符为止。如果第一个非空格字符不是有效的数字字符或正负号，则 stoi 函数返回 0。否则，它会解析连续的数字字符，直到遇到非数字字符为止，并将解析的数字转换为整数。

如果 idx 不为 nullptr，stoi 函数将更新 idx 指针的值，以指向字符串中未转换的第一个字符的索引。这在某些情况下很有用，例如你可以使用 stoi 函数转换字符串中的多个整数，并根据 idx 的值来定位下一个要转换的整数的起始位置。

以下是一些使用 stoi 函数的例子：

```cpp
#include <iostream>
#include <string>

int main() {
    std::string str1 = "123";
    int num1 = std::stoi(str1);
    std::cout << "num1: " << num1 << std::endl;  // Output: num1: 123

    std::string str2 = "-456";
    int num2 = std::stoi(str2);
    std::cout << "num2: " << num2 << std::endl;  // Output: num2: -456

    std::string str3 = "  789abc";
    size_t idx;
    int num3 = std::stoi(str3, &idx);
    std::cout << "num3: " << num3 << ", idx: " << idx << std::endl;
    // Output: num3: 789, idx: 6 (指向未转换的字符 'a')

    return 0;
}
```
需要注意的是，如果字符串中包含无效的字符（非数字字符），或者整数超出了 int 类型的表示范围，stoi 函数会抛出 `std::invalid_argument` 或 `std::out_of_range` 异常。

因此，在使用 stoi 函数时，最好进行错误处理，以确保字符串能够正确转换为整数。

### 为什么STL的pop操作不返回被弹出元素？
基于效率来考虑的话，返回被弹出的元素可能需要在 pop() 函数内部执行一次拷贝构造，增加了额外的开销。

如果 pop() 函数要返回被弹出的元素，那么它需要在内部执行一次拷贝构造操作。**这是因为在 C++ 中，函数的返回值和局部变量一样，具有自动存储期（automatic storage duration）。**

当函数返回时，函数内部的局部变量会被销毁，其内存将被释放。所以在返回一个元素的拷贝之前，需要在内部创建一个该元素的拷贝，以保证返回的值是有效的。

在有些情况下，元素的拷贝构造可能会涉及到较大的开销，尤其是在处理自定义类型或者包含大量数据的类型时。

### C style
C风格的C++是指在C++中仍然使用C语言的传统写法和编程习惯，而没有充分利用C++的特性和功能。这种写法主要体现在以下几个方面：

- *使用裸指针（Raw Pointers）*： C风格的C++往往会过度使用裸指针来处理内存和对象，而不是使用C++中的智能指针或对象管理工具。

- *使用malloc和free*： C风格的C++可能会使用C语言的malloc和free函数来分配和释放内存，而不使用C++中的new和delete关键字。

- *不使用类和对象*： C风格的C++可能避免使用类和对象，而更多地使用C风格的函数和全局变量。

- *不使用STL*： C风格的C++可能不充分利用C++标准库（STL）提供的容器、算法和其他工具，而更多地使用C风格的数组和循环。

- *不使用面向对象特性*： C风格的C++可能会回避使用C++的面向对象特性，如继承、多态等。

- *不使用模板*： C风格的C++可能不使用C++的模板特性，而更多地使用C风格的宏和类型不安全的代码。

与C风格的C++相对应，还有现代C++风格，这是指更多地利用C++的特性、标准库和现代编程实践来编写代码。现代C++风格强调安全、高效、可维护和面向对象的编程方式，鼓励使用智能指针、STL容器、算法、模板等特性


### Cpp与Java的泛型讨论

在Java中，泛型主要是为了实现类型安全而设计的。Java的泛型允许你创建在编译时进行类型检查的容器和算法，以避免在运行时出现类型错误。在Java中，泛型是基于 **类型擦除（type erasure）**实现的，这意味着在编译后，泛型信息会被擦除，所有的泛型类型都会被编译成其原始类型。Java的泛型更多地是在运行时提供类型安全性，而不涉及对代码的实例化。

```java
public class GenericExample {
    public static <T> T add(T a, T b) {
        return a + b;
    }

    public static void main(String[] args) {
        int sumInt = add(5, 10);
        double sumDouble = add(3.5, 2.7);

        System.out.println("Sum of integers: " + sumInt);
        System.out.println("Sum of doubles: " + sumDouble);
    }
}
```
在Java中，泛型方法在编译时会根据传递的实际类型进行类型推断，并生成相应的类型检查和转换代码。例如，当你调用 add(5, 10) 时，Java编译器会推断出 T 为 Integer 类型，然后自动生成与 Integer 类型相关的代码，包括类型检查和类型转换。这样，在运行时就会执行适当的操作。

C++中的模板（templates）则更加灵活，它们不仅可以用于实现泛型编程，还可以在编译时生成特定类型的代码。C++模板可以用于创建通用的类、函数、数据结构等，它们在 **编译时会生成不同类型的实例化代码**。这种实例化是在编译时发生的，而不是在运行时。C++的模板允许在代码层面实现更多的优化和定制，但也可能导致编译时产生更多的代码。

```cpp
#include <iostream>

template <typename T>
T add(T a, T b) {
    return a + b;
}

int main() {
    int sum_int = add(5, 10);
    double sum_double = add(3.5, 2.7);

    std::cout << "Sum of integers: " << sum_int << std::endl;
    std::cout << "Sum of doubles: " << sum_double << std::endl;

    return 0;
}
```
而在C++中，模板在编译时会根据传递的实际类型生成对应类型的函数版本。例如，当你调用 add(5, 10) 时，编译器会根据传递的参数类型 int **实例化一个 add 函数**，其中的操作都是针对 int 类型的

两者的基本目的是相似的：为了能够在通用代码中处理不同类型的数据，但在实现上有所不同。 Java 的泛型是基于擦除的，而 C++ 的模板是在编译时生成具体的代码。