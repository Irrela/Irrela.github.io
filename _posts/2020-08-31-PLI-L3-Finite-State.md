---
layout: post
title: L3 Finite-State Automata
categories: PLI
description: 
keywords:

mathjax: true
---
### Recognizers
语言L的recognizer是一种算法，该算法接受输入字符串x，如果x在L中，则返回“yes”，否则返回“no”。 
> recognizer只能对每个可能的输入串简单地回答“是”或“否”。
在词法分析器的规范中, 每个正则表达被当做一种正则语言的一个模式(与模式匹配的字符串集)。 这些正则语言的结合本身就是一种正则语言。 

因而构建Scanner最复杂的部分是为这些正则语言构建recognizer。 

简单的recognizer可以手动构建；在更复杂的情况下，自动构建要容易得多。

#### Recognizing Regular Languages
自动生成扫描仪的工具基于两种数学结构：
- DFA(即确定性有限自动机)
- NFA(即非确定性有限自动机)

NFA对其边上的标号没有任何限制， 一个符号标记离开同一状态的多条边， 并且空串$$\epsilon$$也可以作为标号。

DFA对于每个状态及自动机输入字母表的每个符号，有且只有一条离开状态，以该符号作为标号的边。

每个DFA和每个NFA都承认一种正则语言。 正则语言可能被许多DFA和NFA识别。 

不管是DFA还是NFA都可以表示为一张转换图， 图中：
- 结点是状态
- 带有标号的边表示转换函数
- 当且仅当t是状态s在输入a上的后继状态之一时，从状态s到状态t存在一条标号为a的边。

#### 状态转换图
以图形方式，状态转换图将每个状态显示为一个圆圈，`接受状态`显示为双圆圈，`开始状态`用一个不知从哪里来的箭头标记。 

状态之间的箭头表示`转移函数`。 每个箭头都标有一个或一组字符。 下面是一个识别ba * b的DFA：

<img src="/images/posts/pli/state%20transition%20diagrams.png" width="75%"/>

如果某个状态没有箭头离开它，那么他就隐式地成为不可见的`错误状态`。 

错误状态不是接受状态，并且每一个从错误状态出发的transition都会回到错误状态。 

所有无法到达接受状态的状态都等同于错误状态。 如果一个图有多个这样的，则可以将它们合并为一个。

#### DFAs for keywords
构建一个DFA来识别关键字或任何常量字符串非常简单。 这三个DFA识别“IF”、“THEN”和“ELSE”:

<img src="/images/posts/pli/dfa_keyword.png" width="75%"/>

#### A Single DFA for Several Keywords
可以使用单独的DFA来识别scanner规范中的每个模式，逐个测试它们，但这样效率会很低。 
因而我们构建可以识别多个模式的DFA，比如，我们识别关键字“if”、“in”和“‘is”。 现在，每个接受状态都需要说明找到了哪个令牌的模式。

<img src="/images/posts/pli/dfa_several.png" width="75%"/>

#### Acceptance with Lookahead
DFA被设计用来测试string是否在一种语言中。 

实际上，我们希望使用它来查找语言中`最长的前缀`，因此不能使用字符串末尾作为停止标准。 

相反，我们在转换到错误状态(无法到达接受状态的状态)时停止。 每次到达接受状态时，我们都会记录该状态以及匹配字符串的长度。 然后我们`继续前进`，寻找更长的匹配。 

当我们转换到错误状态时，我们使用记录的最长匹配(如果有)。 如果没有，我们就发现了一个错误。

例子，以下DFA可识别此正则表达式：

> < | =< | > | >= | = | ==

<img src="/images/posts/pli/lookhead.png" width="75%"/>

#### 无符号数
以下是无符号数字 文字的状态转换图(d是0-9的数字)：
<img src="/images/posts/pli/unsign.png" width="75%"/>

#### DFAs from Regular Expressions
DFA可能会在相应正则表达式的大小中呈指数增长。 

以倒数第三位为1的二进制字符串的正则表达式为例：(0|1)*1(0|1)(0|1)。 最简单的DFA是：

<img src="/images/posts/pli/regulardfa.png" width="75%"/>


### DFAs
形式上，DFA(deterministic finite automaton)是一个5元组$$(Q, \Sigma, \delta, q_{0}, F)$$, 其中:
- $$Q$$是有限状态集
- $$\Sigma$$是有限字母表, 我们假设空串$$\epsilon$$不在字母表中。
- $$\delta : Q \times \Sigma \rightarrow Q$$是转移函数
- $$q_{0} \in Q$$是起始态
- $$F \subseteq Q$$是接受态。

#### Acceptance and Recognition by DFA
$$M = (Q, \Sigma, \delta, q_{0}, F)$$是一个DFA, $$m = v_{1}, v_{2}\dots v_{n}$$表示字母表一条符号串, 当存在一个序列$$r_{0}, r_{1}\dots r_{n}, \forall r \in Q$$时， 我们说`M 接受 w`。

另外，如果语言A：
$$A = \{w | M \ accepts \ w \}$$, 即A是从开始状态到某个接受状态的所有路径上的标号串的集合，称语言A被该DFA接受

### NFAs
如果允许 状态在给定的输入符号上具有多个transition，则可以更容易地从正则表达式构造有限自动机.

下图一个不确定的有限自动机，或称NFA：
<img src="/images/posts/pli/nfa.png" width="75%"/>

NFA还可以在不消耗输入的情况下从一个状态移动到另一个状态。 这种转变称为$$\epsilon$$(epsilon)转变。

#### DFA和NFA的区别
NFA的转换函数$$\delta$$是不确定的（nondeterministic），并且它允许$$\epsilon$$(epsilon)转变。 

NFA认可的语言类别与DFAs认可的语言类别相同；添加nondeterministic并不会带来更强的表现力。