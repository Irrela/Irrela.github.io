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

```rust
const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;
```


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