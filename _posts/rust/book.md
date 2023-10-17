---
title: Rust Book
categories: Rust
tags:
- Rust
---

# 1. Getting Started
## 1.1 First Program

编译：`rustc main.rs`

编译完成会生成可执行文件`main.exe`, 包含调试信息文件`main.pdb`

## 1.2 Cargo
`cargo --version` 查看版本

### ！！！Cargo 操作慢


### 使用 Cargo 创建项目

`cargo new hello_cargo` 默认会在 hello_cargo 目录初始化一个 git 仓库, 以及一个.gitignore 文件

如果在一个已经存在的 git 仓库中运行 cargo new，则这些 git 相关文件则不会生成；可以通过运行 `cargo new --vcs=git` 来覆盖这些行为。

### Cargo.toml结构
```rust
[package]
name = "hello_cargo"
version = "0.1.0"
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]

```

`[dependencies]`，是罗列项目依赖的片段的开始。在 Rust 中，代码包被称为 `crates`。

Cargo 期望源文件存放在 src 目录中。项目根目录只存放 README、license 信息、配置文件和其他跟代码无关的文件。使用 Cargo 帮助你保持项目干净整洁，一切井井有条。

### 为没有使用Cargo的项目引入Cargo
要在任何已存在的项目上工作时，可以使用如下命令通过 Git 检出代码，移动到该项目目录并构建：

```rust
$ git clone example.org/some_project
$ cd some_project
$ cargo build
```

### Cargo构建与运行
1. `build`: 在根目录下运行 `cargo build`, 会创建一个可执行文件 `target/debug/hello_cargo`。
   - 由于默认的构建方法是`调试构建（debug build）`，Cargo 会将可执行文件放在名为 `debug` 的目录中。
   - 首次运行 `cargo build` 时，也会使 Cargo 在项目根目录创建一个新文件：`Cargo.lock`。这个文件记录项目依赖的实际版本。这个项目并没有依赖，所以其内容比较少。你自己永远也不需要碰这个文件，让 Cargo 处理它就行了。
2. `run`: 同时编译并运行生成的可执行文件。
   - Cargo 会检查源文件是否有修改，如果没有它就不用重新编译，而是直接运行了可执行文件。如果修改了源文件的话，Cargo 会在运行之前重新构建项目
3. `check`: 快速检查代码确保其可以编译，但并`不产生可执行文件`。
   - 通常 `cargo check` 要比 `cargo build` 快得多，因为它省略了生成可执行文件的步骤。
   - 如果你在编写代码时持续的进行检查，`cargo check` 可以让你快速了解现在的代码能不能正常通过编译！当准备好使用可执行文件时才运行 `cargo build`

### 发布（release）构建
当项目最终准备好发布时，可以使用 `cargo build --release` 来`优化`编译项目。这会在 `target/release` 而不是 `target/debug` 下生成可执行文件。

这些优化可以让 Rust 代码运行的更快，不过启用这些优化也需要消耗更长的编译时间。

如果你在测试代码的运行时间，请确保运行 `cargo build --release` 并使用 target/release 下的可执行文件进行测试。


## 2. Guessing Game

默认情况下，Rust 设定了若干个会自动导入到每个程序作用域中的标准库内容，这组内容被称为 `预导入（preclude）` 内容。

如果你需要的类型不在预导入内容中，就必须使用 `use` 语句显式地将其引入作用域。

`std::io` 库提供很多有用的功能，包括接收用户输入的功能。

### 使用变量储存值
在 Rust 中，`变量默认是不可变的`，这意味着一旦我们给变量赋值，这个值就不再可以修改了。

在变量名前使用 `mut` 来使一个变量可变:
```rust
let apples = 5; // 不可变
let mut bananas = 5; // 可变
```

### 静态方法
```rust
let mut guess = String::new();
```
`:: `语法表明 `new` 是 `String` 类型的一个 `关联函数（associated function）`。

关联函数是针对类型实现的，在这个例子中是 String，而不是 String 的某个特定实例。一些语言中把它称为 `静态方法（static method）`。

### 输入输出(std::io)
```rust
    io::stdin()
        .read_line(&mut guess)
        .`expect`("Failed to read line");
```
- 如果程序的开头没有使用 use std::io; 引入 io 库，我们仍可以通过把函数调用写成 std::io::stdin 来使用函数。
- 调用 `read_line` 方法从标准输入句柄获取用户输入。将 `&mut guess` 作为参数传递给 `read_line()` 函数，让其将用户输入储存到这个字符串中。
- `read_line` 的工作是，无论用户在标准输入中键入什么内容，都将其`追加（不会覆盖其原有内容）`到一个字符串中，因此它需要字符串作为参数。
- `&` 表示这个参数是一个 `引用（reference）`，它允许多处代码访问同一处数据，而无需在内存中多次拷贝。


### 使用 Result 类型来处理潜在的错误

```rust
    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");
```
- `read_line` 会将用户输入附加到传递给它的字符串中，返回一个类型为 `Result` 的值
- `Result` 是一种枚举类型，通常也写作 `enum` 。枚举类型变量的值可以是`多种可能状态`中的一个。我们把每种可能的状态称为一种 `枚举成员（variant）`。
- `Result` 的成员是 `Ok` 和 `Err`:
  - `Ok` 成员表示操作成功，内部包含成功时产生的值。 
  - `Err` 成员则意味着操作失败，并且包含失败的前因后果。
- `Result` 的实例拥有 `expect` 方法。
  - 如果 `io::Result` 实例的值是 `Err` ， `expect` 会导致程序崩溃，并显示当做参数传递给 `expect` 的信息。
  - 如果 `Result` 实例的值是 `Ok`, `expect` 会获取 `Ok` 中的值并原样返回。在本例中，这个值是用户输入到标准输入中的字节数。

### 使用 println! 占位符打印值

`{} `是预留在特定位置的占位符.

当打印变量的值时，`变量名可以写进大括号中`。当打印表达式的执行结果时，格式化字符串（format string）中大括号中留空，格式化字符串后跟逗号分隔的需要打印的表达式列表，其顺序与每一个空大括号占位符的顺序一致。

```rust
let x = 5;
let y = 10;
println!("x = {x} and y + 2 = {}", y + 2);
```
这行代码会打印出` x = 5` and `y + 2 = 12`。

### 使用crate
`crate` 分为`库crate`和`二进制crate`：
  - 库crate 可以包含任意能被其他程序使用的代码，但是不能自执行
  - 二进制crate，如我们正在构建的项目，它生成一个可执行文件

Cargo 对外部 crate 的运用是其真正的亮点所在。在我们使用 rand 编写代码之前，需要修改 Cargo.toml 文件，引入一个 rand 依赖。
```toml
[dependencies]
rand = "0.8.5"
```
> 0.8.5 事实上是 `^0.8.5 `的简写，它表示任何至少是 0.8.5 但小于 0.9.0 的版本。


### Cargo.lock 文件确保构建是可重现的

Cargo 有一个机制来确保任何人在任何时候重新构建代码，都会产生相同的结果：Cargo 只会使用你指定的依赖版本，除非你又手动指定了别的。

Rust 在你第一次运行 `cargo build` 时建立了 Cargo.lock 文件, 当将来构建项目时，Cargo 会发现 Cargo.lock 已存在并使用其中指定的版本，而不是再次计算所有的版本. 例如，如果下周 rand crate 的 0.8.6 版本出来了，它修复了一个重要的 bug，同时也含有一个会破坏代码运行的缺陷, 多亏有了 Cargo.lock 文件, 项目会持续使用 0.8.5 直到你显式升级。


### 更新 crate 到一个新版本
`cargo update` 会忽略 Cargo.lock 文件，并计算出所有符合 Cargo.toml 声明的最新版本. Cargo 接下来会把这些版本写入 Cargo.lock 文件。

不过，Cargo 默认只会寻找大于 0.8.5 而小于 0.9.0 的版本。如果想要使用 0.9.0 版本的 rand 或是任何 0.9.x 系列的版本，必须像这样更新 Cargo.toml 文件：
```toml
[dependencies]

rand = "0.9.0"
```
下一次运行 `cargo build` 时，Cargo 会从 registry 更新可用的 crate，并根据你指定的新版本重新计算。


### 使用rand生成一个随机数
```rust
use rand::Rng;
// ...
    let secret_number =
        rand::thread_rng()
            .gen_range(1..=100);
```
- `Rng` 是一个 `trait` ，它定义了随机数生成器应实现的方法
- `rand::thread_rng` 函数提供实际使用的随机数生成器：它位于当前执行线程的本地环境中，并从操作系统获取 seed
- 接着调用随机数生成器的 `gen_range` 方法: 获取一个范围表达式（range expression）作为参数，并生成一个在此范围之间的随机数:
  - 这里使用的这类范围表达式使用了 `start..=end` 这样的形式，也就是说包含了上下端点，所以需要指定 `1..=100` 来请求一个 1 和 100 之间的数。

> 你不可能凭空就知道应该 use 哪个 trait 以及该从 crate 中调用哪个方法，因此每个 crate 有使用说明文档。
> Cargo 有一个很棒的功能是：运行 `cargo doc --open` 命令来构建所有本地依赖提供的文档，并在浏览器中打开。
> 例如，假设你对 rand crate 中的其他功能感兴趣，你可以运行 `cargo doc --open` 并点击左侧导航栏中的 rand。


### 比较猜测的数字和秘密数字
```rust
use std::cmp::Ordering;

    match guess.cmp(&secret_number) {
        Ordering::Less => println!("Too small!"),
        Ordering::Greater => println!("Too big!"),
        Ordering::Equal => println!("You win!"),
    }

```
- `Ordering` 也是一个枚举，不过它的成员是 `Less` `、Greater` 和 `Equal` 。这是比较两个值时可能出现的三种结果。
- `cmp` 方法用来比较两个值, 并可以在任何可比较的值上调用。它获取一个被比较值的引用：这里是把 guess 与 secret_number 做比较。然后它会返回一个 `Ordering` 枚举的成员。
- `match` 表达式，根据对 guess 和 secret_number 调用 cmp 返回的 Ordering 成员来决定接下来做什么。


### 静态强类型 & 类型推断
Rust 有一个`静态强类型`系统，同时也有`类型推断`。

当我们写出 `let guess = String::new()` 时，Rust 推断出 `guess` 应该是 `String` 类型，并不需要我们写出类型。

另一方面，`secret_number`，是数字类型。Rust 默认使用 `i32` ，所以它是 secret_number 的类型，除非增加类型信息，或任何能让 Rust 推断出不同数值类型的信息。
> Rust的一些数字类型的值可以介于1和100之间：i32为 32位数字；u32为 无符号32位数字；i64为64位数字；以及其他

所以我们必须把从输入中读取到的 `String` 转换为一个真正的数字类型，才好与 `secret_number` 进行比较。

```rust
    let guess: u32 =
        guess.trim()
            .parse()
            .expect("Please type a number!");
```
这里创建了一个叫做 guess 的变量。不过等等，不是已经有了一个叫做 guess 的变量了吗？确实如此，不过 Rust 允许用一个新值来 `隐藏 （Shadowing）` guess 之前的值。这个功能常用在需要`转换值类型`之类的场景。它允许我们`复用 guess` 变量的名字，而不是被迫创建两个不同变量，诸如 guess_str 和 guess 之类。

- String 实例的 `trim` 方法会去除字符串开头和结尾的空白字符. 
  - 用户必须输入 `enter` 键才能让 read_line 返回并输入他们的猜想，这将会在字符串中增加一个`换行（newline）符`。
  - 例如，用户输入 5 并按下 enter（在 Windows 上，按下 enter 键会得到一个回车符和一个换行符，`\r\n`），guess 看起来像这样：5\n 或者 5\r\n。
  - \n 代表 “换行”; \r 代表 “回车”
  - trim 方法会消除 \n 或者 \r\n，只留下 5。


String 实例的 `parse` 方法 将字符串转换成其他类型。
  - 这里用它来把字符串转换为数值。
  - 我们需要告诉 Rust 具体的数字类型，guess 后面的冒号 `:` 指定了变量的类型 `u32`
  - `parse` 方法只有在 String 逻辑上可以转换为数字的时候才能工作, 所以非常容易出错。因此，`parse` 方法返回一个 `Result` 类型。如果 `parse` 不能从字符串生成一个数字，返回一个 `Err` 成员


### 使用循环来允许多次猜测

`loop` 关键字创建了一个无限循环。我们会增加循环来给用户更多机会猜数字：

```rust
    loop {
        print!("You guessed: {guess}");

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => println!("You win!"),
        }
    }
```

我们想要当猜测正确的数字时游戏停止, 增加一个 `break` 语句:
```rust
    loop {
        print!("You guessed: {guess}");

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                println!("You win!");
                break;
            }
        }
    }
```

退出循环也意味着退出程序，因为循环是 main 的最后一部分。

### 处理无效输入
```rust
        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };
```
- 我们将 `expect` 调用换成 `match` 语句，以从遇到错误就崩溃转换为处理错误.
- `Err(_)` 模式：`_` 是一个通配符值，本例中用来匹配所有 Err 值，不管其中有何种信息
- break, continue必须处于loop中


# 3. Common Programming Concepts
## 3.1 Variables and Mutability
### 可变性
Rust变量默认是不可改变的（immutable）: 当变量不可变时，一旦值被绑定一个名称上，你就不能改变这个值。 否则就会报错
Error: `cannot assign twice to immutable variable`

不过`可变性`也是非常有用的，尽管变量默认是不可变的，你仍然可以在变量名前添加 `mut` 来使其可变

```rust
fn main() {
    let mut x = 5;
    println!("The value of x is: {x}");
    x = 6;
    println!("The value of x is: {x}");
}
```
通过 `mut` ，允许把绑定到 x 的值从 5 改成 6。

### 常量
类似于不可变变量，`常量 (constants)` 是绑定到一个名称的不允许改变的值，不过常量与变量还是有一些区别：
- 不允许对常量使用 `mut`, 常量不光默认不可变，它总是不可变。
- 声明常量使用 `const` 关键字而不是 let，并且 `必须 注明值的类型`。
- 常量可以在任何作用域中声明，包括`全局作用域`，这在一个值需要被很多部分的代码用到时很有用。
- 常量只能被设置为`常量表达式`，而`不可以是`其他任何`只能在运行时计算出的值`。
- Rust 对常量的`命名约定`是在单词之间使用全大写加下划线
  
```rust
const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;
```

> 在声明它的作用域之中，常量在整个程序生命周期中都有效，此属性使得常量可以作为多处代码使用的全局范围的值，例如一个游戏中所有玩家可以获取的最高分或者光速。
>
> 将遍布于应用程序中的硬编码值声明为常量，能帮助后来的代码维护人员了解值的意图。如果将来需要修改硬编码值，也只需修改汇聚于一处的硬编码值。

### 隐藏
我们可以定义一个与之前变量同名的新变量。实际上，第二个变量“遮蔽”了第一个变量， 此时任何使用该变量名的行为，编译器将其视为是在使用第二个变量，直到第二个变量自己也被隐藏或第二个变量的作用域结束。

可以用相同变量名称来隐藏一个变量，以及`重复使用 let 关键字来多次隐藏`，如下所示：
```rust
fn main() {
    let x = 5;

    let x = x + 1;

    {
        let x = x * 2;
        println!("The value of x in the inner scope is: {x}");
    }

    println!("The value of x is: {x}");
}

// The value of x in the inner scope is: 12
// The value of x is: 6
```

`隐藏`与将变量标记为 `mut` 是有区别的: 
- 当不小心尝试对变量重新赋值时，如果没有使用 `let` 关键字，就会导致编译时错误。
- 通过使用 `let` ，我们可以用这个值进行一些计算，不过计算完之后变量仍然是`不可变`的。
- 当再次使用 `let` 时，实际上创建了一个`新变量`，我们可以改变值的`类型`，并且复用这个名字。
    ```rust
        let spaces = "   "; // 字符串类型
        let spaces = spaces.len(); // 数字类型
    ```


## 3.2 数据类型

Rust 是 `静态类型（statically typed）`语言，也就是说在`编译时`就必须知道所有变量的类型。

根据值及其使用方式，编译器通常可以`推断`出我们想要用的类型。
当多种类型均有可能时，必须增加`类型注解`:
```rust
let guess: u32 = "42".parse().expect("Not a number!"); // 类型注解 : u32
```
> 缺乏类型注解报错
> error[E0282]: type annotations needed 


### 标量类型

`标量（scalar）`类型代表一个单独的值。Rust 有四种基本的标量类型：
- 整型
- 浮点型
- 布尔类型
- 字符类型

#### 数值运算
```rust
fn main() {
    // addition
    let sum = 5 + 10;

    // subtraction
    let difference = 95.5 - 4.3;

    // multiplication
    let product = 4 * 30;

    // division
    let quotient = 56.7 / 32.2;
    let truncated = -5 / 3; // 结果为 -1

    // remainder
    let remainder = 43 % 5;
}
```
> `整数除法`会向`零舍入到最接近的整数`。


#### 字符类型
Rust 的 `char` 类型是语言中最原生的字母类型
```rust
fn main() {
    let c = 'z';
    let z: char = 'ℤ'; // with explicit type annotation
    let heart_eyed_cat = '😻';
}
```
- 用单引号声明 `char` 字面量. `char` 类型的大小为四个字节 (four bytes)
- 使用双引号声明 `字符串` 字面量

### 复合类型
`复合类型（Compound types）`可以将多个值组合成一个类型。Rust 有`两个原生的复合类型`：
- 元组（tuple）
- 数组（array）

#### 元组类型

元组是一个将多个其他类型的值组合进一个复合类型的主要方式。

元组`长度固定`：一旦声明，其长度不会增大或缩小。

```rust
fn main() {
    let tup = (500, 6.4, 1);
    // let tup: (i32, f64, u8) = (500, 6.4, 1);

    let (x, y, z) = tup; // 模式匹配（pattern matching）来解构（destructure）元组值

    println!("The value of y is: {y}");

    // 我们也可以使用点号（.）后跟值的索引来直接访问它们。
    let five_hundred = x.0;

    let six_point_four = x.1;

    let one = x.2;
}
```
访问元组元素：
- 模式匹配（pattern matching）来解构（destructure）元组值
- 使用`点号（.）`后跟值的索引来直接访问它们。

#### 数组类型

另一个包含多个值的方式是 数组（array）: 
- 数组中的`每个元素的类型必须相同`。
- 数组`长度是固定`的。

```rust
fn main() {
    let a = [1, 2, 3, 4, 5];

    // 在方括号中包含每个元素的类型，后跟分号，再后跟数组元素的数量
    let a: [i32; 5] = [1, 2, 3, 4, 5];

    // 在方括号中指定初始值加分号再加元素个数的方式来创建一个每个元素都为相同值的数组
    // let a = [3, 3, 3, 3, 3]; 效果相同
    let a = [3; 5];

}

```

#### 访问数组元素
```rust
fn main() {
    let a = [1, 2, 3, 4, 5];

    // 索引访问
    let first = a[0];
    let second = a[1];
}
```
> 访问越界: 如果我们访问数组结尾之后的元素时，导致 `运行时 错误(panic)`。程序带着错误信息退出


## 3.2 函数

函数拥有 `参数（parameters）（形参）`的函数，参数是特殊变量，是函数签名的一部分
为这些参数提供具体的`值（实参）`。技术上讲，这些具体值被称为参数（arguments），


在函数签名中，`必须声明每个参数的类型`。这是 Rust 设计中一个经过慎重考虑的决定：要求在函数定义中提供类型注解，意味着编译器再也不需要你在代码的其他地方注明类型来指出你的意图。

### 

`语句（Statements）`是执行一些操作但不返回值的指令:
- `let y = 6;` 是一个语句。
- `语句`不返回值。因此，不能把 let 语句赋值给另一个变量

`表达式（Expressions）`计算并产生一个值:
- 语句 `let y = 6; `中的 `6` 是一个表达式
- 用大括号创建的一个新的块作用域也是一个表达式，例如：
   ```rust
   let y = {
        let x = 3;

        // 注意 x+1 这一行在结尾没有分号，与你见过的大部分代码行不同。
        // 如果在表达式的结尾加上分号，它就变成了语句，而语句不会返回值
        x + 1 
    };
   ```
   y的值是 4



### 具有返回值的函数

在 Rust 中，函数的返回值等同于函数体`最后一个表达式`的值。
```rust
fn five() -> i32 {
    5
}
```

使用 `return` 关键字和指定值，可从函数中提前返回

> 用最后一个表达式返回值时不要加`分号`


## 3.4 注释

用双斜杠` // `注释 Rust 代码

文档注释使用三斜杠 `///` 而以支持 Markdown 注解来格式化文本。
```rust 
/// Adds one to the number given.
///
/// # Examples
///
/// ```
/// let arg = 5;
/// let answer = my_crate::add_one(arg);
///
/// assert_eq!(6, answer);
/// ```
pub fn add_one(x: i32) -> i32 {
    x + 1
}
```


## 3.5 控制流

### if

```rust
fn main() {
    let number = 3;

    if number < 5 {
        println!("condition was true");
    } else {
        println!("condition was false");
    }
}
```
> 不像 Ruby 或 JavaScript 这样的语言，Rust 并不会尝试自动地将非布尔值转换为布尔值。必须总是`显式地使用布尔值`作为 if 的条件。


### else if
```rust
fn main() {
    let number = 6;

    if number % 4 == 0 {
        println!("number is divisible by 4");
    } else if number % 3 == 0 {
        println!("number is divisible by 3");
    } else if number % 2 == 0 {
        println!("number is divisible by 2");
    } else {
        println!("number is not divisible by 4, 3, or 2");
    }

    // 在 let 语句中使用 if
    let number = if condition { 5 } else { 6 };
}
```
> 使用过多的 else if 表达式会使代码显得杂乱无章，所以如果有多于一个 else if 表达式，最好重构代码。为此，第六章会介绍一个强大的 Rust 分支结构（branching construct），叫做 `match`。


### loop、while 和 for
#### loop
```rust
// loop
fn main() {
    let mut counter = 0;
    
    // 赋值给 result 
    let result = loop {
        counter += 1;

        if counter == 10 {
            // 使用 break 关键字返回值 counter * 2
            break counter * 2;
        }
    };

    println!("The result is {result}");
}
```
#### 循环标签：在多个循环之间消除歧义
如果存在嵌套循环，break 和 continue 应用于此时`最内层的循环`。
你可以选择在一个循环上指定一个 `循环标签（loop label）`，然后将标签与 break 或 continue 一起使用，使这些关键字应用于已标记的循环而不是最内层的循环。

```rust
// loop
fn main() {
    let mut count = 0;

    // 标签 counting_up
    'counting_up: loop {
        println!("count = {count}");
        let mut remaining = 10;

        loop {
            println!("remaining = {remaining}");
            if remaining == 9 {
                break;
            }
            if count == 2 {
                break 'counting_up;
            }
            remaining -= 1;
        }

        count += 1;
    }
    println!("End count = {count}");
}
```


#### while
```rust
fn main() {
    let mut number = 3;

    while number != 0 {
        println!("{number}!");

        number -= 1;
    }

    println!("LIFTOFF!!!");
}
```


#### for
```rust
fn main() {
    let a = [10, 20, 30, 40, 50];

    for element in a {
        println!("the value is: {element}");
    }

    // 使用 for 循环来倒计时
    // rev，用来反转 range
    for number in (1..4).rev() {
        println!("{number}!");
    }
    println!("LIFTOFF!!!");
}
```

# 4. Understanding Ownership
所有权（系统）是 Rust 最为与众不同的特性，对语言的其他部分有着深刻含义。它让 Rust 无需垃圾回收（garbage collector）即可保障内存安全.

# 4.1 什么是所有权？
> Rust 则选择了第三种方式：通过所有权系统管理内存，编译器在编译时会根据一系列的规则进行检查。如果违反了任何这些规则，程序都不能编译。在运行时，所有权系统的任何功能都不会减慢程序。

# Warning and Error

- Cargo更新下载慢
    换源, `/Users/<your user name>/.cargo` 下新建config文件：
    ```txt
    [source.crates-io]
    registry = "https://github.com/rust-lang/crates.io-index"

    replace-with = 'ustc'

    [source.ustc]
    registry = "git://mirrors.ustc.edu.cn/crates.io-index"
    ```

- `No Cargo projects are found`
    
    这个错误通常意味着CLion无法找到任何Cargo项目，因此它无法在您的Rust代码上运行Cargo命令。
    
    检错：
    1. 确保您位于正确的目录中：导航到Rust项目的根目录。这是包含Cargo.toml文件的目录。您应该从此目录运行货物命令。
    2. 初始化Rust项目：如果您不在包含Cargo.toml文件的目录中，则可以通过运行以下命令来初始化新的Rust项目：
    > `cargo new your_project_name`

    extra:
    使用rust rover新建项目之后第一次cargo check完成以前会报这个错。等初始化完成就好了



- `module declaration missing`

- 检查模块声明(Check Module Declarations)：验证您已经在Rust代码中声明了模块。在Rust中，使用mod关键字声明模块。例如：
    ```rust
    // In your main.rs or lib.rs file
    mod my_module;
    ```


# ShortCut

- `cmd + option + t`: 包裹代码块