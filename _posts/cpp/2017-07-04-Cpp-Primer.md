---
title: Cpp Primer
categories: Cpp
tags:
- Cpp
---

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

# 一些问题
### 为什么STL的pop操作不返回被弹出元素？
基于效率来考虑的话，返回被弹出的元素可能需要在 pop() 函数内部执行一次拷贝构造，增加了额外的开销。

如果 pop() 函数要返回被弹出的元素，那么它需要在内部执行一次拷贝构造操作。**这是因为在 C++ 中，函数的返回值和局部变量一样，具有自动存储期（automatic storage duration）。**

当函数返回时，函数内部的局部变量会被销毁，其内存将被释放。所以在返回一个元素的拷贝之前，需要在内部创建一个该元素的拷贝，以保证返回的值是有效的。

在有些情况下，元素的拷贝构造可能会涉及到较大的开销，尤其是在处理自定义类型或者包含大量数据的类型时。

# Miscellany

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

*原理：*
- shared_ptr 内部有两个主要部分：对象指针和引用计数。
- 当创建一个 shared_ptr 并将其指向某个对象时，引用计数初始化为 1。
- 当另一个 shared_ptr 复制或从另一个 shared_ptr 创建时，引用计数递增。
- 当 shared_ptr 超出作用域或手动调用 reset() 时，引用计数递减。
- 当引用计数变为零时，shared_ptr 自动删除对象并释放内存。

*使用场景：*
- 在需要多个 shared_ptr 共享同一对象所有权的情况下，使用 shared_ptr。
- 适用于对象的共享和传递，避免手动释放内存，减少内存泄漏的风险。

*示例代码：*
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

*使用场景：*
- 当创建一个 std::shared_ptr 时，建议使用 std::make_shared，因为它可以减少内存分配的开销。
- 在需要创建和管理共享指针的情况下，使用 std::make_shared。

*示例代码:*
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


# Pending
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


