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

#### DFAs
形式上，DFA(deterministic finite automaton)是一个5元组$$(Q, \Sigma, \delta, q_{0}, F)$$, 其中:
- $$Q$$是有限状态集
- $$\Sigma$$是有限字母表, 我们假设空串$$\epsilon$$不在字母表中。
- $$\delta : Q \times \Sigma \rightarrow Q$$是转移函数
- $$q_{0} \in Q$$是起始态
- $$F \subseteq Q$$是接受态。

#### Acceptance and Recognition by DFA
`$$M = (Q, \Sigma, \delta, q_{0}, F)$$`是一个DFA, `$$m = v_{1}, v_{2}\dots v_{n}$$`表示字母表一条符号串, 当存在一个序列`$$r_{0}, r_{1}\dots r_{n}, \forall r \in Q$$`时， 我们说`M 接受 w`。

另外，如果语言A：
`$$A = \{w | M accepts w \}$$`, 即A是从开始状态到某个接受状态的所有路径上的标号串的集合，称语言A被该DFA接受
