---
layout: post
title: L3 Finite-State Automata
categories: PLI
description: 
keywords:
---
### Recognizers
语言L的recognizer是一种算法，该算法接受输入字符串x，如果x在L中，则返回“yes”，否则返回“no”。 

在词法分析器的规范中, 每个正则表达被当做一种正则语言的一个模式(与模式匹配的字符串集)。 这些正则语言的结合本身就是一种正则语言。 

因而构建Scanner最复杂的部分是为这些正则语言构建recognizer。 

简单的recognizer可以手动构建；在更复杂的情况下，自动构建要容易得多。

#### Recognizing Regular Languages
自动生成扫描仪的工具基于两种数学结构：
- DFA(即确定性有限自动机)
- NFA(即非确定性有限自动机)。 
每个DFA和每个NFA都承认一种正则语言。 正则语言可能被许多DFA和NFA识别。 DFA和NFA通常以图形方式显示为状态转换图。

#### DFAs
形式上，DFA(deterministic finite automaton)是一个5元组(q，Σ，δ，q0，F), 其中:
- *Q*是有限状态集
- \sum\是有限字母表
- $ \delta : Q \times \sum \rightarrow Q $是转移函数
- $ q_{0} \in Q $是起始态
- $ F \subseteq Q $是接受态。