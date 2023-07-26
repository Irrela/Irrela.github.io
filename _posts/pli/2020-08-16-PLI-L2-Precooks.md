---
title: L2 Syntax Analysis & Attributes & Code Generation
categories: PLI
mathjax: true
tags:
- PLI
---

### Syntax（语法）
> Syntax描述该语言的程序的正确形式。

> Semantics定义程序的含义， 即每个程序在运行时该做什么事。

#### context-free grammar
简称文法，描述了大多数程序设计语言构造的语法结构。
以if-else举例， 该构造规则可表示为：

$$ stmt \to if \ (expr) \ stmt \ else \ stmt $$

右箭头表示“可以具有如下形式”， 这样的规则叫产生式（production）。

在产生式中，if和括号这样的词法元素叫终结符号（terminal），expr和stmt这样的变量叫非终结符号（nonterminal）。

`context-free grammar`由四部分组成：
- 一个终结符号集合， 也称`词法单元`， 表达逻辑。
- 一个非终结符号集合，也称`语法变量`， 每个nonterminal表示一个terminal串的集合。
- 一个产生式集合，即一个左部（nonter）， 一个箭头，一个右部（nonter+ter的sequence）
- 一个被指定的nonter作为开始符号。

 一个terminal string由零个或多个terminal组成， 零个的由叫空串。
 > 空串例子： 函数的参数列表可能是无参数的。

输入的结构通常使用上下文无关的语法规则来描述，如下所示：
```
assignment → lvalue assign op expr semicolon
lvalue → identifier
expr → left paren expr right paren
expr → expr binop expr
expr → identifier const
```

### 语法分析（parsing）
语法分析的任务是：接受一个ter string作为输入，找出文法的开始符号，推导出这个string的方法。

如果不能从文法的开始符号推到出该ter string，则报告该ter string中包含的语法错误。

#### 语法分析树
parse tree具有以下性质：
- 根节点的标号为文法的开始符号。
- 每个叶节点的标号为一个ter或空串。
- 每个内部节点为一个nonter。

例子：产生式$$ A \to XYZ $$ 在parse tree中表现为A为父节点，X, Y, Z为`从左至右`的三个子节点。

一棵parse tree的叶节点从左至右构成了树的结果（yield），
#### parse tree & Abstract Syntax Tree
解析树包含对编译器的其余部分没有影响的表面细节。 删除它们将生成抽象语法树：

#### Semantic Analysis（语义分析）
例如，如果一个语法有效的程序使用了未定义的变量或向函数传递了错误数量的参数，那么它可能仍然是没有意义的。 

语义分析
- 检查程序是否存在此类语义错误，以及
- 收集信息以生成代码。 

这两个任务是协同的，因为语义错误通常表现为
- 缺少代码生成所需的信息(例如，缺少变量的类型声明)
- 或者该信息的两个来源之间不一致(例如，形式参数和实际参数的类型不匹配)。

#### Attribute Grammars(属性语法)
通过语义分析收集的信息可以以附加到节点的属性的形式存储在抽象语法树中。 

属性： 表示与某个程序构造相关的任意的量。可以是：
- 表达式的类型
- 将函数的局部变量映射到其当前位置的表

属性语法扩展了一种与上下文无关的grammar:
- 用于向解析树中的节点属性赋值的规则
- 违规表示错误

#### 属性的作用
例如，语言语义确定在将整数和浮点数相乘时得到什么类型的结果，以及程序是否可以将浮点值赋给整数变量。
> degc = (degf - 32) * (5.0/9);

> 综合属性： 如果某个属性在语法分析树节点N上的值是由N的子节点以及N本身的属性值决定的，那么这个属性就称为`综合属性`， 综合属性有一个很好的性质：只需要对于语法分析树进行一次自底向上的遍历，就可以计算出属性的值。

#### 中间代码生成
编译器通常为简单的抽象机生成代码，而不是直接生成汇编语言或机器代码。 这种中间表示(IR)被设计成比目标语言更容易优化。 

信息检索的生成过程受属性信息的影响。 例如，我们需要类型属性来发现整数和浮点数之间转换的需要。

#### Code Optimization
优化器试图通过使程序执行得更快或占用更少的空间来改进程序(尽管它不能保证实际的最优性)。
```
比如：
itmp1 := int_sub(degf, 32)

ftmp2 = int_to_float(9) 
ftmp3 = float_div(5.0, ftmp2)

可以被替换成

ftmp3 = 0.55555555
```
并且未来出现的`degf - 32`可以由`itemp1`替换，直到下一次赋值给`degf`。

#### Code Generation
IR(intermediate representation)很容易使用，因为它们忽略了在为真实机器生成代码时必须解决的问题。 

- 真实机器的寄存器数量有限。 
- 真实的机器通常有多种方法来执行操作。 
- 对于特定的操作，真实的机器通常需要在特定的位置放置一些操作数。

一些编译器将IR转换为汇编代码，而另一些编译器则直接将其转换为机器码。 

前者更容易实现和调试，后者加快了编译速度。