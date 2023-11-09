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