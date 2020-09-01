---
layout: post
title: L5 Haskell with Monads
categories: PLI
description: 
keywords:
mathjax: true
---
### Monadic Programming
Monad允许像排序、取消引用、破坏性赋值和输入/输出这样的动态函数语言特性 `完全` 在纯函数语言中表达。 

这令得到的程序看起来是imperative的，但保留了函数式程序的所有良好属性。 

Monads是一级对象，类型系统可以确保它们被正确使用。 

Monads编程的一个例子是Haskell处理 输入/输出 的方法。

#### Monadic Input/Output
