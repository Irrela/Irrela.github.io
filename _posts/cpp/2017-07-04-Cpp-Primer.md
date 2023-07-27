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
```cpp{numberLines}
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
