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
















# Warning and Error

1. `No Cargo projects are found`
    
    这个错误通常意味着CLion无法找到任何Cargo项目，因此它无法在您的Rust代码上运行Cargo命令。
    
    检错：
    1. 确保您位于正确的目录中：导航到Rust项目的根目录。这是包含Cargo.toml文件的目录。您应该从此目录运行货物命令。
    2. 初始化Rust项目：如果您不在包含Cargo.toml文件的目录中，则可以通过运行以下命令来初始化新的Rust项目：
    > `cargo new your_project_name`

    extra:
    使用rust rover新建项目之后第一次cargo check完成以前会报这个错。等初始化完成就好了



2. `module declaration missing`

- 检查模块声明(Check Module Declarations)：验证您已经在Rust代码中声明了模块。在Rust中，使用mod关键字声明模块。例如：
    ```rust
    // In your main.rs or lib.rs file
    mod my_module;
    ```