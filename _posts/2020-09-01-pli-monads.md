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
output action的type是`IO ()`(目前先忽略（）)。

`IO ()`是monad的一个实例，`a :: IO ()`表示一个action。

```haskell
putChar :: Char -> IO ()
```
表达式putChar '!' 表示打印感叹号的操作。

```haskell
putStr :: String -> IO ()
print :: Show a =>  IO ()
```
这些都已经在Prelude中定义了。

Prelude中还定义了用于组合操作的函数(>>)。 (实际上(>>)和 return 来自Monad type 类。)
```haskell
> (>>) :: IO () -> IO () -> IO ()
puts :: String -> IO ()
puts [] = return ()
puts (c : s) = putChar c >> puts s
```
#### The Variable main
到目前为止，我们只有表示动作的表达式。 如何才能真正让行动发生呢？
```haskell
main = print ([(n, 2^n) | n <- [0..19]])

main = puts "ha >> puts "ha"

main = let m = puts "ha" in m >> m 
```
#### Input
input产生一个值，这就是IO被参数化的原因。
```haskell
getChar :: IO Char
getLine :: IO String
interact :: (String -> String) -> IO()
```
函数getChar返回输入中的第一个字符。

函数getLine返回第一行。 

函数InterAct以函数f作为其参数。 将整个输入传递给函数，并输出结果。

```haskell
> main = interact (filter isAscii)
```