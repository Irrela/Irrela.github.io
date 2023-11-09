---
title: Python Book
categories: Miscellany
tags:
- Miscellany
---

- [官方教程](#官方教程)
  - [数据类型](#数据类型)
    - [相关方法](#相关方法)
      - [type(obj)](#typeobj)
      - [isinstance(obj, type)](#isinstanceobj-type)
      - [issubclass(subObj, obj)](#issubclasssubobj-obj)
      - [is](#is)
    - [Number](#number)
      - [数值运算](#数值运算)
      - [Complex](#complex)
    - [String](#string)
      - [字符串的截取](#字符串的截取)
      - [toCharArray](#tochararray)
      - [\\ 转义](#-转义)
      - [... (toconfirm)](#-toconfirm)
      - [char](#char)
    - [bool](#bool)
    - [List](#list)
      - [List索引和截取](#list索引和截取)
      - [步长截取\[ : : \]](#步长截取---)
      - [允许索引修改](#允许索引修改)
    - [Tuple](#tuple)
      - [可以包含可变的对象](#可以包含可变的对象)
      - [空元组](#空元组)
    - [Set](#set)
      - [空集合创建](#空集合创建)
      - [单集合操作](#单集合操作)
      - [复数集合操作](#复数集合操作)
    - [Dictionary](#dictionary)
      - [Defining a Dictionary](#defining-a-dictionary)
      - [Operators and Built-in Functions](#operators-and-built-in-functions)
      - [关于dict中元素排列顺序](#关于dict中元素排列顺序)
    - [bytes 类型](#bytes-类型)
    - [一些类型转换方法](#一些类型转换方法)
  - [控制流](#控制流)
  - [数据结构](#数据结构)
  - [函数](#函数)
  - [代码风格](#代码风格)
    - [Naming Conventions](#naming-conventions)
      - [Package and Module Names](#package-and-module-names)
      - [Class Names](#class-names)
      - [Type Variable Names](#type-variable-names)
      - [Exception Names](#exception-names)
      - [Function and Variable Names](#function-and-variable-names)
      - [Function and Method Arguments](#function-and-method-arguments)
      - [Method Names and Instance Variables](#method-names-and-instance-variables)
      - [Constants](#constants)
      - [Global Variable Names](#global-variable-names)
  - [模块](#模块)
  - [输入输出](#输入输出)
  - [错误和异常](#错误和异常)
  - [类](#类)
  - [标准库](#标准库)
  - [](#)


# 官方教程
## 数据类型
Python3 的六个标准数据类型中：
不可变数据（3 个）：
- Number（数字）
- String（字符串）
- Tuple（元组）
  
可变数据（3 个）：
- List（列表）
- Dictionary（字典）
- Set（集合）

### 相关方法
#### type(obj)

#### isinstance(obj, type)
```py
a = 111
isinstance(a, int)

# >>> True
```
#### issubclass(subObj, obj) 

#### is

### Number
Python3 Number支持:
- int
- float
- bool
- complex（复数）

> 注意：Python3 中，bool 是 int 的子类，True 和 False 可以和数字相加
> True==1、False==0 会返回 True，但可以通过 is 来判断类型。


#### 数值运算
```bash
>>> 5 + 4  # 加法
9
>>> 4.3 - 2 # 减法
2.3
>>> 3 * 7  # 乘法
21
>>> 2 / 4  # 除法，得到一个浮点数
0.5
>>> 2 // 4 # 除法，得到一个整数
0
>>> 17 % 3 # 取余
2
>>> 2 ** 5 # 乘方
32
```

#### Complex
复数由实数部分和虚数部分构成，可以用 `a + bj`，或者 `complex(a,b)` 表示， 复数的实部 a 和虚部 b 都是浮点型。

### String
Python中的字符串用单引号 `'` 或双引号 `"` 括起来，同时使用反斜杠 `\` 转义特殊字符。

*Python 字符串不能被改变:*
向一个索引位置赋值，比如 `word[0] = 'm'` 会导致错误

#### 字符串的截取
```py
str = 'Runoob'

print (str[0:-1])    # Runoo
print (str[0])       # R
print (str[2:5])     # noo [)
print (str[2:])      # noob
print (str * 2)      # RunoobRunoob 输出字符串两次，也可以写成 print (2 * str)
print (str + "TEST") # 连接字符串: RunoobTEST
```

#### toCharArray
```py
str = "python"
print([*str])
print(list(str))
# >>> ['R', 'u', 'n', 'o', 'o', 'b']
```

#### \ 转义
Python 使用反斜杠 `\` 转义特殊字符，如果你不想让反斜杠发生转义，可以在字符串前面添加一个 `r`，表示原始字符串：
```bash
>>> print('Ru\noob')
Ru
oob
>>> print(r'Ru\noob')
Ru\noob
>>>
```

#### ... (toconfirm)
反斜杠(\)可以作为续行符，表示下一行是上一行的延续。也可以使用 """...""" 或者 '''...''' 跨越多行

#### char
注意，Python 没有单独的`char`字符类型，一个字符就是长度为1的字符串。

### bool
布尔类型即 `True` 或 `False`。

在 Python 中，`True` 和 `False` 都是关键字，表示布尔值。

布尔类型可以和其他数据类型进行比较，比如数字、字符串等。在比较时，Python 会将 `True` 视为 1，`False` 视为 0。

布尔类型也可以被转换成其他数据类型，比如整数、浮点数和字符串。在转换时，`True` 会被转换成 1，`False` 会被转换成 0。
```py
# 类型转换
print(int(a))   # 1
print(float(b)) # 0.0
print(str(a))   # "True"
```

> 在 Python 中，所有`非零`的数字和`非空`的字符串、列表、元组等数据类型都被视为 True，只有 0、空字符串、空列表、空元组等被视为 False

### List
列表可以完成大多数集合类的数据结构实现。
列表中元素的类型`可以不相同`，它支持数字，字符串甚至可以包含列表（所谓嵌套）。
列表是写在方括号 `[]` 之间、用`,`分隔开的元素列表。
另外，也可以使用 `list()` 函数创建List。

#### List索引和截取
列表被截取后返回一个包含所需元素的`新列表`
```py
list = [ 'abcd', 786 , 2.23, 'runoob', 70.2 ]
tinylist = [123, 'runoob']

# 输出列表第一个元素
print (list[0])         # abcd
# 从第二个开始输出到第三个元素
print (list[1:3])       # [786, 2.23]
# 出从第三个元素开始的所有元素
print (list[2:])        # [2.23, 'runoob', 70.2]
# 输出两次列表
print (tinylist * 2)    # [123, 'runoob', 123, 'runoob']
# 连接列表
print (list + tinylist) # ['abcd', 786, 2.23, 'runoob', 70.2, 123, 'runoob']
```
#### 步长截取[ : : ]
> 列表截取可以接收第三个参数，参数作用是截取的步长

```bash
letters = list("python")
print(letters[1:4:2])
# >>> ['p', 'y', 't', 'h', 'o', 'n']
# >>> ['y', 'h']
```

#### 允许索引修改
与Python字符串不一样的是，列表中的元素是可以改变的：
```bash
>>> a = [1, 2, 3, 4, 5, 6]
>>> a[0] = 9
>>> a[2:5] = [13, 14, 15]
>>> a
[9, 2, 13, 14, 15, 6]

>>> a[2:5] = []   # 将对应的元素值设置为 [] 
>>> a
[9, 2, 6]
```

### Tuple
元组（tuple）与列表类似，不同之处在于`元组的元素不能修改`, 元组中的元素`类型也可以不相同`。
元组写在小括号 `()` 里，元素之间用 `,` 隔开。

`元组与字符串类似(元素不能修改)`，可以被`索引`,也可以进行`截取`, 其实，可以把字符串看作一种特殊的元组。

```py
#!/usr/bin/python3

tuple = ( 'abcd', 786 , 2.23, 'runoob', 70.2  )
tinytuple = (123, 'runoob')

print (tuple[1:3])        # 输出从第二个元素开始到第三个元素
print (tuple[2:])         # 输出从第三个元素开始的所有元素
print (tinytuple * 2)     # 输出两次元组
print (tuple + tinytuple) # 连接元组
```

#### 可以包含可变的对象
虽然tuple的元素不可改变，但`它可以包含可变的对象`，比如list列表。

#### 空元组
构造包含 0 个或 1 个元素的元组比较特殊，所以有一些额外的语法规则：

```py
tup1 = ()    # 空元组
tup2 = (20,) # 一个元素，需要在元素后添加逗号
```

### Set
在 Python 中，集合使用大括号 `{}` 表示，元素之间用逗号 `,` 分隔。
另外，也可以使用 `set()` 函数创建集合。

#### 空集合创建
创建一个空集合必须用 `set()` 而不是 `{ }`，因为 `{ }` 是用来创建一个空字典。

#### 单集合操作
```py
x = {'foo', 'bar', 'baz'}

len(x)

# Adds an element to a set.
x.add('qux')

# Removes an element from a set.
# Raises an exception if <elem> is not in x
x.remove('baz')

# if <elem> is not in x, this method quietly does nothing
x.discard('baz')

# removes and returns a random element from set, raises an exception If x is empty
x.pop()

# removes all elements from x
x.clear()

```

#### 复数集合操作
```py
x1 = {'foo', 'bar', 'baz'}
x2 = {'baz', 'qux', 'quux'}

# 将x2中x1中尚未具有的任何元素添加到x1
# {'qux', 'foo', 'bar', 'baz'}
x1.update(x2)
x1 |= x2

# 更新x1，仅保留在x1和x2中找到的元素：
# {'foo', 'baz'}
x1.intersection_update(x2)
x1 &= x2

# 更新x1，删除在x2中找到的元素：
# {'bar'}
x1.difference_update(x2)
x1 -= x2

# 更新x1，保留在x1或x2中找到的，但不能同时找到的元素：
# {'bar', 'qux'}
x1.symmetric_difference_update(x2)
x1 ^= x2



# Union
# {'baz', 'quux', 'qux', 'bar', 'foo'}
x1 | x2 
x1.union(x2)
# 支持复数set
a.union(b, c, d)
a | b | c | d

# intersection
# {'baz'}
x1.intersection(x2)
x1 & x2
# 支持复数
a.intersection(b, c, d)
a & b & c & d

# difference
# return the set of all elements that are in x1 but not in x2, order matters
# {'foo', 'bar'}
x1.difference(x2)
x1 - x2
# 支持复数
a.difference(b, c)
a - b - c

# Compute the symmetric difference between sets.
# 返回要么在x1或要么在x2中但不能同时在两边都有元素的集合：
# {'foo', 'qux', 'quux', 'bar'}
x1.symmetric_difference(x2)
x1 ^ x2
# 支持复数

# 确定两个集合是否有任何共同的元素。
# 如果x1和x2没有共同的元素，则返回True
# False
x1.isdisjoint(x2)

# 确定一个集合是否为另一个集合的子集。
# 如果x1是x2的子集，则返回True
# True
x1.issubset({'foo', 'bar', 'baz', 'qux', 'quux'})
x1 <= x2

# 如果x1是x2的真子集，则返回True
# True
x1 < x2

# 如果x1是x2的超集，则返回True
# True
x1.issuperset({'foo', 'bar'})
x1 >= x2

# 如果x1是x2的真超集，则返回True：
# True
x1 > x2
```

### Dictionary
- 字典用 `{ }` 标识。
- 键(key)必须使用不可变类型(更准确地说，对象必须是可散列的)。
- 在同一个字典中，键(key)必须是唯一的。
- 字典中的键不需要是同一类型，值也不需要是同一类型

#### Defining a Dictionary
```py
# With {}
d = {
    <key>: <value>,
    <key>: <value>,
      .
      .
      .
    <key>: <value>
}

# With built-in dict()
d = dict([
    (<key>, <value>),
    (<key>, <value),
      .
      .
      .
    (<key>, <value>)
])


# Note: 创建空dict
person = {}
```
> 如果键值是简单字符串，则可以将它们指定为关键字参数

```py
# 下面两种声明方式等价
MLB_team = dict([
    ('Colorado', 'Rockies'),
    ('Boston', 'Red Sox'),
    ('Minnesota', 'Twins'),
    ('Milwaukee', 'Brewers'),
    ('Seattle', 'Mariners')
])

MLB_team = dict(
    Colorado='Rockies',
    Boston='Red Sox',
    Minnesota='Twins',
    Milwaukee='Brewers',
    Seattle='Mariners'
)

```

#### Operators and Built-in Functions

> 字典元素不能通过数字索引访问: dict[0] is invalid

```py
MLB_team = {
    'Colorado' : 'Rockies',
    'Boston'   : 'Red Sox',
    'Minnesota': 'Twins',
    'Milwaukee': 'Brewers',
    'Seattle'  : 'Mariners'
}

# In和Not In运算符根据指定的操作数是否在字典中作为键出现而返回True或False
# True
'Milwaukee' in MLB_team 
# False
'Toronto' not in MLB_team

# 返回字典中的键-值对的数量
len(MLB_team)

# Get value by key
# 引用的键不在字典中，则Python会引发异常
MLB_team['Minnesota']
# 如果找到关联值，则返回该关联值。如果未找到<key>，则返回None
MLB_team.get('Minnesota')
# 如果未找到<key>并且指定了可选的<default>参数，则返回该值而不是None
MLB_team.get('Minnesota', 'Twins')

# 新增或覆盖键值对
MLB_team['Kansas City'] = 'Royals'

# 删除键值对
del MLB_team['Seattle']
```

```py
d = {'a': 10, 'b': 20, 'c': 30}

# 清空字典中的所有键-值对
d.clear()

# 返回包含d中的键-值对的元组列表。每个元组中的第一项是键，第二项是键的值
# dict_items([('a', 10), ('b', 20), ('c', 30)])
d.items()
# 可以用list包裹以便读取使用
# [('a', 10), ('b', 20), ('c', 30)]
list(d.items())

# 返回d中所有键的列表
# dict_keys(['a', 'b', 'c'])
d.keys()
# 可以用list包裹以便读取使用
# ['a', 'b', 'c']
list(d.keys())

# 返回d中所有值的列表
# dict_values([10, 20, 30])
d.values()
# 可以用list包裹以便读取使用
# [10, 10, 10]
list(d.values())


# 从字典中删除键(如果存在)，并返回其值。
# 如果<key>不在d中，则引发KeyError异常：
d.pop('b')
# 如果<key>不在d中，并且指定了可选的<default>参数，则返回该值，并且不会引发异常：
d.pop('z', -1)

# 从字典中删除键-值对。
# 从d中删除添加的最后一个键-值对，并将其作为元组返回：
# 如果d为空，d.popItem()将引发KeyError异常：
# ('c', 30)
d.popitem()

# 将字典与另一个字典或与可迭代的键-值对合并。
# 如果<obj>是一个词典，则d.update(<obj>)将<obj>中的条目合并到d.中。对于<obj>中的每个键：
# - 如果d中不存在键，则将<obj>中的键-值对添加到d中。
# - 如果键已存在于d中，则该键在d中的相应值将更新为<obj>的值。
d1 = {'a': 10, 'b': 20, 'c': 30}
d2 = {'b': 200, 'd': 400}
d1.update(d2)
# {'a': 10, 'b': 200, 'c': 30, 'd': 400}
d1
```

#### 关于dict中元素排列顺序
尽管对字典中项的访问不依赖于顺序，但Python确实保证字典中项的顺序保持不变。
显示时，项将按其定义的顺序显示，键的迭代也将按该顺序进行。添加到词典中的条目添加到末尾。
如果删除项目，则保留其余项目的顺序。

你只能在最近才能指望这种秩序的维持。
它是作为3.7版中的Python语言规范的一部分添加的。
然而，在3.6版中也是如此--作为实现的结果，这是偶然的，但语言规范不能保证。


### bytes 类型
在 Python3 中，bytes 类型表示的是不可变的二进制序列（byte sequence）。

bytes 类型通常用于处理二进制数据，比如图像文件、音频文件、视频文件等等。在网络编程中，也经常使用 bytes 类型来传输二进制数据。

```py
# 创建bytes对象
x = b"hello"
x = bytes("hello", encoding="utf-8")

# bytes 类型支持切片、拼接、查找、替换
# 切片操作，得到 b"el"
y = x[1:3]  
# 拼接操作，得到 b"helloworld"
z = x + b"world"  
```

### 一些类型转换方法
```py
# 转换为一个整数
# 3
int(3.6)
# 带参数base的话，12要以字符串的形式进行输入，12 为 16进制
# 18
int('12',16)

# 将x转换到一个浮点数
float(x)

# 将对象 x 转换为字符串
str(x)

# 将一个整数转换为一个字符
chr(x)

# 将一个字符转换为它的整数值
ord(x)
```

## 控制流

## 数据结构

## 函数

## 代码风格

### Naming Conventions

#### Package and Module Names
模块的名称应该是全小写的短名称。
如果提高了可读性，则可以在模块名称中使用下划线。
尽管不鼓励使用下划线，但Python包也应该具有全小写的短名称。

当用C或C++编写的扩展模块具有附带的提供更高级别(例如，更面向对象的)接口的Python模块时，C/C++模块具有前导下划线(e.g. _socket)

#### Class Names
类名通常应该使用CapWords约定。

#### Type Variable Names
PEP 484中引入的`类型变量的名称`通常应该使用CapWords，而不是短名称：`T、AnyStr、Num`。
建议在用于声明协变或逆变行为的变量中相应地添加后缀`_co` or `_contra`：

#### Exception Names
因为异常应该是类，所以类命名约定在这里适用。
但是，您应该在异常名称上使用“`Error`”后缀(如果异常实际上是一个错误)。

#### Function and Variable Names
函数名称应为小写，并根据需要使用下划线分隔单词，以提高可读性。
变量名遵循与函数名相同的约定。

#### Function and Method Arguments
始终使用`self`作为实例化方法的第一个参数。
始终使用`cls`作为类方法的第一个参数。
如果函数参数的名称与保留关键字冲突，通常最好在后面加上一个下划线，而不是使用缩写或拼写错误。

#### Method Names and Instance Variables
根据需要使用函数命名规则：小写，单词之间用下划线分隔，以提高可读性。
仅对非公共方法和实例变量使用一个前导下划线。
为了避免与子类的名称冲突，请使用两个前导下划线来调用Python的名称损坏规则。

#### Constants
常量通常是在模块级别上定义的，并且全部用大写字母书写，单词之间用下划线分隔。例如`MAX_OVERFLOW`和`TOTAL`。

#### Global Variable Names
与函数的约定大致相同。
Modules that are designed for use via `from M import *` should use the `__all__` mechanism to prevent exporting globals



## 模块

## 输入输出

## 错误和异常

## 类

## 标准库

## 