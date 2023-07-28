---
title: Cpp Primer
categories: Cpp
tags:
- Cpp
---

# IO lib
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

### sort
在 C++ 中，std::sort 是标准库中用于排序容器或数组元素的函数，定义在 <algorithm> 头文件中。它使用快速排序（Quick Sort）或者归并排序（Merge Sort）算法来对容器或数组中的元素进行排序。std::sort 可以对各种内置数据类型和自定义类型进行排序，只需要定义好比较函数或使用默认的比较操作符 < 即可。

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


