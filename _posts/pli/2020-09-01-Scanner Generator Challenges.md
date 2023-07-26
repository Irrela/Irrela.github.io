---
layout: post
title: L4+ Scanner Generator Challenges
categories: Pli
description: 
keywords:
mathjax: true
---

### Reserved Words and Identifiers
在大多数语言中，语言的keyword都是保留的：它们不能用于任何其他目的。

<img src="/images/posts/pli/pli41.png" width="75%"/>

大多数keyword都与identifier的模式匹配。 

如果该语言有许多keyword，则对每个keyword使用单独的模式，将导致scanner生成器构建很大的DFA。

在上个时代，存储大型DFA所需的内存很成问题。 虽然今天不再是了，但大型DFA可能会很慢，因为访问它们缺乏`局部性`。

减小DFA大小的常见方法是 创建一个将每个关键字与其令牌相关联的表(关键字)。 然后，所有关键字规则都可以合并到标识符规则中：

<img src="/images/posts/pli/pli42.png" width="75%"/>

### Interesting Design Flaws: No Reserved Words(有趣的设计缺陷：没有保留字)
PL/I是20世纪60年代大肆炒作的一种语言，没有保留的词语。 由于关键字可以用作标识符，因此允许程序员编写如下语句：

> IF THEN THEN THEN = ELSE; ELSE ELSE = THEN;

这种自由程度使得程序难以阅读。 (第一个IF、第二个Then和第二个Else-用红色分隔If-Then-Else语句的不同部分；Then和Else的其他出现是标识符。)。 

这种灵活性使得扫描器更难编写：它需要解析器告诉它何时需要关键字，何时需要标识符。

### Right Context(右方上下文)
FORTRAN77甚至在词条内都忽略了空格，这一事实也造成了类似的恼人问题。

<img src="/images/posts/pli/pli43.png" width="75%"/>

在到达逗号或句点之前，我们无法确定do是关键字还是标识符的开头。 

Flex和Alex有处理这种情况的机制。 FLEX模式r/s告诉Flex只有在right context(在本例中，do后面的输入字符)与模式s匹配时才提交到模式r。

对于Alex，下面的规则告诉Alex，只有当紧随其后的输入与Do循环header的模式匹配时，才将DO识别为关键字：

<img src="/images/posts/pli/pli44.png" width="75%"/>

注意，该规则过于宽松：它允许匹配输入，如“DO X = 6Q，”。 然而，这样的词汇错误将在稍后被捕获。

### Unbounded Lookahead（无界前视）
某些语言对所需的lookahead量没有限制。 一种是PL/I：

> declare(arg1，arg2，...，argn)

其中“declare”是一个表示数组的关键字还是标识符？ PL/I语法不允许我们在看到右括号后的字符之前回答这个问题。 因为参数的数量是无界的，所以这需要无界的lookahead。 

支持Unbounded Lookahead会使扫描仪变得复杂，并会减慢它的运行速度。 

但是好的语言避免使用Unbounded Lookahead更多是因为：人们发现需要Unbounded Lookahead的结构很难读懂。

### Start Conditions（启动条件）
在某些语言中，程序的不同部分对什么是令牌有不同的概念。 

ALEX规范本身就是一个例子。 在大多数Alex规范中，标记包括名称、字符串常量、字符类和正则表达式运算符。 但是，在包含{和}的行之间，标记是整行。 

实际上，在{令牌之后，我们希望扫描仪切换到使用另一组规则，而在}之后，我们希望它切换回来。

Flex和Alex支持`Start Conditions`。 每个开始条件都有自己的规则集(模式/动作对)，尽管一个规则可能属于多个开始条件。

#### Implementing Start Conditions
将每个起始条件添加到字母表中，并构建如下所示NFA。 

如果S是由当前`Start Conditions`的名称标记的NFA状态，则扫描仪开始于DFA状态 for $$\epsilon-closure(S)$$。

<img src="/images/posts/pli/pli45.png" width="75%"/>

#### Using Start Conditions in alex

<img src="/images/posts/pli/pli46.png" width="75%"/>

这指定了一个有两种状态的扫描仪，0(默认开始状态)和字符串。

当我们看到双引号时，我们切换到字符串状态，并一直保持到看到下一个双引号。 

如果规则以状态*st*为前缀，这意味着仅当扫描仪处于状态*st*时才应应用该规则。 

`begin st`操作 将扫描仪的状态更改为*st*；`stringchar`是用于处理字符串中的字符的某个操作。

