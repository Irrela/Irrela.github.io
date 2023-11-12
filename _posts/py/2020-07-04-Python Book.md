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
      - [\\ 和 ...](#-和-)
      - [char](#char)
    - [bool](#bool)
    - [List](#list)
      - [List索引和截取](#list索引和截取)
      - [步长截取\[ : : \]](#步长截取---)
      - [允许索引修改](#允许索引修改)
      - [List相关方法](#list相关方法)
      - [列表作为堆栈使用](#列表作为堆栈使用)
      - [创建列表: 列表推导式](#创建列表-列表推导式)
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
    - [if](#if)
    - [match...case (Python 3.10^)](#matchcase-python-310)
    - [while](#while)
    - [for](#for)
      - [range()](#range)
    - [break, continue](#break-continue)
    - [pass](#pass)
    - [lambda表达式](#lambda表达式)
    - [函数注解](#函数注解)
  - [数据结构](#数据结构)
  - [函数](#函数)
    - [定义函数](#定义函数)
    - [默认值参数](#默认值参数)
    - [\*, /](#-)
    - [\*args, \*\*kwargs](#args-kwargs)
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
    - [模块导入](#模块导入)
    - [dir()](#dir)
    - [包(package)](#包package)
    - [相对导入](#相对导入)
  - [输入输出](#输入输出)
  - [错误和异常](#错误和异常)
  - [类](#类)
    - [类的定义与实例创建](#类的定义与实例创建)
    - [类的继承](#类的继承)
      - [使用继承](#使用继承)
      - [magic methods](#magic-methods)
      - [super()](#super)
      - [成员访问权限](#成员访问权限)
      - [issubclass()](#issubclass)
      - [多重继承](#多重继承)
      - [注解 @dataclass (3.7 ^)](#注解-dataclass-37-)
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

#### \ 和 ... 
反斜杠(\)可以作为续行符，表示下一行是上一行的延续。
```py
total = 10 + \
        20 + \
        30
```
另外，在括号、方括号或花括号中的表达式，Python允许在这些容器内的表达式不使用反斜杠进行换行，因为容器自身的存在就表示行的延续。

```py
# [] 中表达式无需x续行符
my_list = [
    1,
    2,
    3
]

```

在`Python解释器`中，`...`（三个点）通常被称为"Ellipsis"。
主要作用是指示解释器当前输入的代码块还没有结束。
这通常发生在多行语句或多行表达式中，表示你可以继续输入更多的代码。当你在交互式环境中输入一个多行语句时，解释器可能会用 ... 提示你可以继续输入。
当你输入`回车键`时，解释器将理解你已经完成了代码块。
```py
>>> def my_function():
...     print("This is part of the function.")
...
...     # You can continue typing more code here
...     x = 10
...     print("This is another part of the function.")
...
>>> my_function()
This is part of the function.
This is another part of the function.
```

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

#### List相关方法

```py
list1 = [1, 2, 3]
list2 = [4, 5, 6]

# len()
len(list1)

# count(x)： 返回列表中值为 x 的元素的数量。
list1.count(1)

# append(x)： 在列表末尾添加元素 x
list1.append(4)

# extend(iterable)： 将可迭代对象（通常是另一个列表）中的元素追加到当前列表的末尾。
list1.extend(list2)

# insert(i, x)： 在指定位置 i 插入元素 x。
list1.insert(1, 4)

# remove(x)： 移除列表中第一个值为 x 的元素。
list1.remove(2)

# pop([i])： 移除并返回列表中指定位置 i 的元素。
# 如果没有指定位置，默认移除并返回最后一个元素。
list1.pop(-1)
list1.pop()

# index(x, start, end)： 返回列表中第一个值为 x 的元素的索引。
# 可选参数 start 和 end 用于指定搜索范围。
index = list1.index(2, 2)       # 从索引2开始查找值为2的元素的索引
index = list1.index(6, 0, 3)    # 在索引0到3的范围内查找值为6的元素的索引

# list.sort(*, key=None, reverse=False)： 对列表进行排序。
# 可选参数 key 用于指定一个用于排序比较的函数，reverse 用于指定是否降序排序。
my_list.sort()
my_list.sort(key=lambda x: x % 3, True)

# reverse()： 将列表中的元素反转。
list1.reverse()

# clear()： 移除列表中的所有元素，等效于 del my_list[:]。
list1.clear()

# copy(): 返回列表的浅拷贝
list1.copy()
list1[:]
```

#### 列表作为堆栈使用
`list` 天然适用于栈的用途。
```py
stack = []  # 创建一个空列表，表示一个空栈

stack.append(1)  # 入栈
stack.append(2)  # 入栈
stack.append(3)  # 入栈

print(stack)     # 输出: [1, 2, 3]

top_element = stack.pop()  # 出栈
print(top_element)         # 输出: 3
print(stack)               # 输出: [1, 2]
```

#### 创建列表: 列表推导式
列表推导式是一种简洁的语法结构，允许你通过一行代码生成一个新的列表，而无需使用传统的循环语句。
列表推导式的一般形式如下：
```py
new_list = [expression for item in iterable if condition]
```
```py
# 创建一个包含 1 到 10 中偶数的平方的列表
even_squares = [x**2 for x in range(1, 11) if x % 2 == 0]
print(even_squares) # [4, 16, 36, 64, 100]

# [(1, 3), (1, 4), (2, 3), (2, 1), (2, 4), (3, 1), (3, 4)]
[(x, y) for x in [1,2,3] for y in [3,1,4] if x != y]
# 等价于
result = []
for x in [1, 2, 3]:
    for y in [3, 1, 4]:
        if x != y:
            result.append((x, y))
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

# 如果字典存在键 key ，返回它的值。
# 如果不存在，插入值为 default 的键 key ，并返回 default 。 
# default 默认为 None。
MLB_team.setdefault(key, ...default)

# 删除键值对
del MLB_team['Seattle']
```

```py
d = {'a': 10, 'b': 20, 'c': 30}

# 清空字典中的所有键-值对
d.clear()

# 返回原字典的浅拷贝。
d.copy()


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
# 返回字典 d 中使用的所有键的列表。
# 和list(d.keys())等效
list(d)
# 返回一个逆序获取字典键的迭代器。 
# 这是 reversed(d.keys()) 的快捷方式。
reversed(d)

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
# 合并d2
d1.update(d2)
# 如果给出了关键字参数，则会以其所指定的键/值对更新字典
d1.update(e=200, f=-1)
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

### if
```py
if condition_1:
    statement_block_1
elif condition_2:
    statement_block_2
else:
    statement_block_3
```

### match...case (Python 3.10^)
```py
match subject:
    case <pattern_1>:
        <action_1>
    case <pattern_2>:
        <action_2>
    case <pattern_3>:
        <action_3>
    # 类似于 C 和 Java 中的 default:，当其他 case 都无法匹配时，匹配这条，保证永远会匹配成功。
    case _:
        <action_wildcard>
```

### while
```py
while condition：
    statements

# 循环结束后执行additional_statements
while condition：:
    statements
else:
    additional_statements
```

### for
```py
for variable in sequence:
    statements
else:
    statements

# Iterate
sites = ["Baidu", "Google","Runoob","Taobao"]
for site in sites:
    print(site)

# 配合range()
for number in range(1, 6):
    print(number)

# for ... else
for item in iterable:
    # 循环主体
else:
    # 循环结束后执行的代码
```
#### range()
如果你需要遍历数字序列，可以使用内置 range() 函数。它会生成数列，例如:
```py
# range(0, 5)
x = range(5)

# [0, 1, 2, 3, 4]
list_x = list(x)
```

### break, continue
`break` 语句可以跳出 for 和 while 的循环体。
如果你从 for 或 while 循环中终止，任何对应的循环 else 块将不执行。

`continue` 语句被用来告诉 Python 跳过当前循环块中的剩余语句，然后继续进行下一轮循环。

### pass
Python pass是空语句，是为了保持程序结构的完整性。

pass 不做任何事情，一般用做占位语句，如下实例
```py
while 1:
    # 等待键盘中断 (Ctrl+C)
    pass 
```

### lambda表达式
一种创建匿名函数的方式。它的基本语法是：
```py
lambda arguments: expression
```

```py
# 使用lambda定义一个简单的加法函数
add = lambda x, y: x + y

# 调用lambda函数
result = add(3, 5)
print(result)  # 输出 8
```

### 函数注解
在Python中，函数注解是一种可选的功能，它允许你为函数的参数和返回值添加元数据。
这些注解并不会影响函数的实际行为，它们只是提供了一种方式来描述函数的预期用法。

```py
def add_numbers(x: int, y: int) -> int:
    """
    This function adds two numbers and returns the result.
    
    :param x: The first number.
    :param y: The second number.
    :return: The sum of x and y.
    """
    return x + y
```

> 在默认情况下，Python 解释器对函数注解不进行类型检查，因此如果你传入不符合注解的参数，解释器不会抛出错误。
> 如果你不使用类型检查工具，你可以选择是否在函数中添加注解。


## 数据结构

## 函数

### 定义函数
```py
# write Fibonacci series up to n
def fib(n): 
    """Return a list containing the Fibonacci series up to n."""
    result = []
    a, b = 0, 1
    while a < n:
        result.append(a)
        a, b = b, a+b
    return result
```

### 默认值参数
为参数指定默认值是非常有用的方式。
调用函数时，可以使用比定义时更少的参数，例如：
```py
def ask_ok(prompt, retries=4, reminder='Please try again!'):
    while True:
        ok = input(prompt)
        if ok in ('y', 'ye', 'yes'):
            return True
        if ok in ('n', 'no', 'nop', 'nope'):
            return False
        retries = retries - 1
        if retries < 0:
            raise ValueError('invalid user response')
        print(reminder)
```
该函数可以用以下方式调用：
```py
# 只给出必选实参：
ask_ok('Do you really want to quit?')

# 给出一个可选实参：
ask_ok('OK to overwrite the file?', 2)

# 给出所有实参：
ask_ok('OK to overwrite the file?', 2, 'Come on, only yes or no!')

# 或使用关键字参数调用
ask_ok(prompt='OK to overwrite the file?', retries=2, reminder='Come on, only yes or no!')
```

### *, /
在Python的函数参数列表中，星号` * `表示`其后的参数`只能通过关键字传递，而不能通过位置传递。
这被称为"`keyword-only argument`"（仅关键字参数）。
```py
# list.sort(*, key=None, reverse=False)
# 正确的使用方式
my_list.sort(key=lambda x: x % 3)  # key 是关键字参数
print(my_list)

# 错误的使用方式，因为 key 参数只能通过关键字传递
my_list.sort(lambda x: x % 3)
```

斜杠 `/` 在函数参数列表中表示`其前面的参数`只能通过位置传递，而不能通过关键字传递。
这也被称为"`positional-only argument`"（仅位置参数）。
```py
def example_function(arg1, arg2, /, arg3, arg4, *, arg5, arg6):
    print(arg1, arg2, arg3, arg4, arg5, arg6)

# 正确的使用方式，所有参数按照位置传递
example_function(1, 2, 3, 4, arg5=5, arg6=6)

# 错误的使用方式，arg1和arg2必须通过位置传递
example_function(arg1=1, arg2=2, 3, 4, arg5=5, arg6=6)
```

### *args, **kwargs
`*args`：用于传递任意数量的位置参数（Positional Arguments）。
这将允许函数`接受任意数量的位置参数`，这些参数`将被收集到一个元组中`。
你可以使用任何名称代替`args`，但通常约定俗成使用`args`。

```py
def example_function(*args):
    for arg in args:
        print(arg)

example_function(1, 2, 3)  # 输出: 1 2 3
```

`**kwargs`：用于`传递任意数量的关键字参数`（Keyword Arguments）。
这将允许函数接受任意数量的关键字参数，`这些参数将被收集到一个字典中`。
同样，你可以使用任何名称代替`kwargs`。
```py
def example_function(**kwargs):
    for key, value in kwargs.items():
        print(key, value)

example_function(a=1, b=2, c=3)  # 输出: a 1   b 2   c 3
```

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

随着程序越来越长，为了方便维护，最好把脚本拆分成多个文件。
编写脚本还一个好处，不同程序调用同一个函数时，不用把函数定义复制到各个程序。

为实现这些需求，Python 把各种定义存入一个文件，在脚本或解释器的交互式实例中使用。这个文件就是 `模块`
模块是包含 Python 定义和语句的文件。其文件名是模块名加后缀名 `.py` 。
在模块内部，通过全局变量 `__name__` 可以获取模块名（即字符串）。

```py
# Assume we have a fibo.py
import fibo

print(fibo.__name__)
```
### 模块导入
编写一个`fibo.py`模块
```py
# Fibonacci numbers module
def fib(n):    # write Fibonacci series up to n
    a, b = 0, 1
    while a < n:
        print(a, end=' ')
        a, b = b, a+b
    print()

def fib2(n):   # return Fibonacci series up to n
    result = []
    a, b = 0, 1
    while a < n:
        result.append(a)
        a, b = b, a+b
    return result
```

导入整个模块
```py
import fibo
fibo.fib(10)

# 把 as 后的名称与导入模块绑定
import fibo as my_fib
my_fib(10)
```

导入方法
```py
from fibo import fib

fib(10)
```

### dir()
dir() 函数用于查找`对象的所有属性（包括方法）`。
```py
import fibo

dir(fibo)    # ['__name__', 'fib', 'fib2']
```

> 在没有参数的情况下调用 dir()，它会返回当前作用域的名称列表。这包括所有已定义的变量、函数、模块等。
 
### 包(package)
包是一个`包含模块和子包`的文件夹，必须包含一个特殊的 `__init__.py` 文件，这个文件可以是空的

包提供了一种将相关的模块组织在一起的方式，使得项目更加模块化和易于维护。
```bash
utils/
|-- __init__.py
|-- module1.py
|-- module2.py
```

- `utils` 是一个包，因为它包含了 `__init__.py` 文件。
- `module1.py` 和 `module2.py` 是模块，因为它们是包含 Python 代码的文件。

### 相对导入
相对导入`只能在包内部`使用，而不能在脚本文件中使用。
在脚本文件中，应该使用`绝对导入`。
```py
# module3.py

# 相对导入同一包下的模块
from . import module1

# 相对导入上一级包中的模块
from .. import module2
```

> 在相对导入中，点号 `.` 的数量表示相对路径的深度。
> 通常情况下，使用两个点号 `..` 就足够了，因为这通常能够满足项目的组织结构。在实际应用中，过多的相对导入可能会使代码更难阅读和理解，因此应该慎重使用。

## 输入输出

## 错误和异常

## 类
类提供了把数据和功能绑定在一起的方法。
支持面向对象编程（OOP）的所有标准特性：
- 多重继承
- 方法重写
- 类的方法能调用基类中的同名方法。
- 对象可包含任意数量和类型的数据


### 类的定义与实例创建
```py
class Dog:
    # class variable 由所有实例共享
    kind = 'canine'        
  
    def __init__(self, name):
        # 每个实例唯一的instance variable
        # 在此声明类的成员属性
        self.name = name

    def bark(self):
        print(f"{self.name} is barking!")

# 创建 Dog 类的实例
my_dog = Dog("Buddy")

# 调用对象的方法
my_dog.bark()  # 输出: Buddy is barking!

```

`属性（Attributes）`： 类的属性是描述对象特征的变量。
- `类属性`是属于类的变量，在所有类的实例之间共享。通常在类的定义中，在方法之外声明
- 可以在类中使用`__init__`方法初始化对象的`成员属性`

`方法（Methods）`： 类的方法是与对象相关的函数。
方法在类中定义，并使用`self`作为第一个参数，表示对象本身


### 类的继承
#### 使用继承
继承语法为：`class Child(Parent):`

```py
# 定义一个简单的父类
class Animal:
    def __init__(self, name):
        self.name = name

    def make_sound(self):
        pass

# 定义一个继承自 Animal 的子类
class Dog(Animal):
    def make_sound(self):
        return "Woof!"

# 创建一个 Animal 对象
generic_animal = Animal("Generic Animal")
print(generic_animal.name)  # 输出: Generic Animal
generic_animal.make_sound()  # 这里什么都不做，因为 make_sound 方法在 Animal 类中被定义为 pass

# 创建一个 Dog 对象
my_dog = Dog("Buddy")
print(my_dog.name)  # 输出: Buddy
print(my_dog.make_sound())  # 输出: Woof!

```

#### magic methods
带有双下划线（underscore）开头和结尾的方法，比如`__init__()`，是特殊方法或者叫做魔法方法（magic methods）或者双下方法（dunder methods）。

这些方法在类中有特殊的用途，`它们被 Python 解释器调用`，而不是由你手动调用。一些常见的魔法方法包括：
- `__init__(self, ...)`: 初始化方法，在创建对象时调用，用于设置对象的初始状态。
- `__str__(self)`: 返回一个描述对象的字符串，通常由print()函数调用。
- `__repr__(self)`: 返回一个包含对象信息的字符串，通常由repr()函数调用。

#### super()
想在子类中使用父类的方法，可以通过调用 `super()` 来实现。

> 如果没有重写父类的方法，则默认使用父类的方法

```py
# 定义一个父类
class Animal:
    def __init__(self, name):
        self.name = name

    def make_sound(self):
        return "Generic animal sound"

# 定义一个继承自 Animal 的子类
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)
        self.breed = breed

    # 重写 make_sound 方法
    def make_sound(self):
        # 使用父类的 make_sound 方法并添加一些额外信息
        return super().make_sound() + f" - Woof! (Breed: {self.breed})"

# 创建一个 Dog 对象
my_dog = Dog("Buddy", "Golden Retriever")

# 调用子类的 make_sound 方法
print(my_dog.make_sound())
```

#### 成员访问权限
`非公有成员 (Non-Public)`:
- 表示通常使用一个下划线 `_` 开头表示，例如 `_variable` 或 `_method()`。
- `可以从外部访问`，但被视为一种`不鼓励`的做法。程序员应该将其视为类的内部实现的一部分，而不是公共API的一部分。虽然可以访问，但可能会在后续版本中发生变化，不建议在外部直接依赖它们。

`私有成员 (Private)` :
- 使用两个下划线 `__` 开头表示，例如 `__variable` 或 `__method()`。
- 被认为是类的私有成员，`不可以在类的外部直接访问`。Python 解释器会修改这样的名称，以防止在子类中意外重写基类的私有成员。可以通过名称修饰的方式来间接访问。

> 任何形式为 `__spam` 的标识符（至少带有两个前缀下划线，至多一个后缀下划线）的文本将被替换为` _classname__spam`，其中 `classname` 为去除了前缀下划线的当前类名称。

#### issubclass()
`issubclass` 是 Python 的内置函数之一。它用于检查一个类是否是另一个类的子类。
```py
class Animal:
    pass

class Dog(Animal):
    pass

# 检查 Dog 是否是 Animal 的子类
result = issubclass(Dog, Animal)
print(result)  # 输出: True

```

#### 多重继承
多重继承是指一个类可以从多个父类中继承属性和方法。
这意味着一个子类可以继承来自多个父类的特性。

多重继承的语法形式如下：
```py
class ChildClass(ParentClass1, ParentClass2, ...):
    # 子类的定义
    # ...
```

当你创建一个类的实例时，该实例将继承所有父类的属性和方法。
考虑以下的代码：
```py
class Animal:
    def speak(self):
        print("Animal speaks")

class Mammal:
    def run(self):
        print("Mammal runs")

class Dog(Animal, Mammal):
    def bark(self):
        print("Dog barks")

# 创建一个 Dog 实例
my_dog = Dog()

# 调用继承自 Animal 类的方法
my_dog.speak()

# 调用继承自 Mammal 类的方法
my_dog.run()

# 调用自身定义的方法
my_dog.bark()
```

#### 注解 @dataclass (3.7 ^)
有时具有类似于`C "struct" `的数据类型是很有用的，将一些带名称的数据项捆绑在一起。

`@dataclass` 是 Python 3.7 引入的一个装饰器，用于简化创建类并自动添加一些常见特殊方法

在没有 `@dataclass` 的情况下，你可能需要手动编写 `__init__`、`__repr__`、`__eq__` 等方法，但使用 `@dataclass` 后，这些方法会被自动生成。

```py
from dataclasses import dataclass

@dataclass
class Employee:
    name: str
    dept: str
    salary: int
```


## 标准库

## 