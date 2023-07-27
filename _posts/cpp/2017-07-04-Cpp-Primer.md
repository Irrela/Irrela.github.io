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
  
### 流的条件状态
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

### IO之前检查流的状态

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