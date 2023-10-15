---
title: Rust Book
categories: Rust
tags:
- Rust
---



# Warning and Error

1. No Cargo projects are found
    
    这个错误通常意味着CLion无法找到任何Cargo项目，因此它无法在您的Rust代码上运行Cargo命令。
    
    检错：
    1. 确保您位于正确的目录中：导航到Rust项目的根目录。这是包含Cargo.toml文件的目录。您应该从此目录运行货物命令。
    2. 初始化Rust项目：如果您不在包含Cargo.toml文件的目录中，则可以通过运行以下命令来初始化新的Rust项目：
    > `cargo new your_project_name`

    extra:
    使用rust rover新建项目之后第一次cargo check完成以前会报这个错。等初始化完成就好了



