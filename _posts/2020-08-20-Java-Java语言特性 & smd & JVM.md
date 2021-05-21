
---
layout: post
title: Java语言特性 && JVM
categories: Java
description: 
keywords: 
---
[toc]

## 语言特性
### 继承与多态

继承有什么好处？最大的好处是子类获得了父类的全部功能。由于Animial实现了run()方法，因此，Dog和Cat作为它的子类，什么事也没干，就自动拥有了run()方法

当子类和父类都存在相同的run()方法时，我们说，子类的run()覆盖了父类的run()，在代码运行的时候，总是会调用子类的run()。这样，我们就获得了继承的另一个好处：多态。

子类可以继承父类所有成员变量，但private的无法访问。父构造器无法继承

## Java集合
### HashMap工作原理及实现

<https://yikun.github.io/2015/04/01/Java-HashMap%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%E5%8F%8A%E5%AE%9E%E7%8E%B0/>

### HashMap扩容为什么是两倍
### 红黑树


## Java关键字
### static
<https://www.jianshu.com/p/4c1950f3d934>

### volatile
<https://www.jianshu.com/p/31e5ab16935f>

<http://www.51gjie.com/java/574.html#:~:text=Java%20volatile%E5%85%B3%E9%94%AE%E5%AD%97%E4%BD%9C%E7%94%A8,%E4%BF%AE%E9%A5%B0%E7%9A%84%E5%8F%98%E9%87%8F%E8%BF%9B%E8%A1%8C%E7%BC%93%E5%AD%98%E3%80%82>

### CAS
CAS是英文单词CompareAndSwap的缩写，中文意思是：比较并替换。CAS需要有3个操作数：内存地址V，旧的预期值A，即将要更新的目标值B。

CAS指令执行时，当且仅当内存地址V的值与预期值A相等时，将内存地址V的值修改为B，否则就什么都不做。整个比较并替换的操作是一个原子操作。


### 异常处理
假设利用 return 语句从 try 语句块中退出。在方法返回前，finally子句的内容将被执行。如果 finally 子句中也有一个 return 语句，这个返回值将会覆盖原始的返回值。


## 设计模式
### 单例
[设计模式](https://www.pdai.tech/md/dev-spec/pattern/2_singleton.html)


#### synchronized的三种应用方式
synchronized关键字最主要有以下3种应用方式，下面分别介绍

修饰实例方法，作用于当前实例加锁，进入同步代码前要获得当前实例的锁。

修饰静态方法，作用于当前类对象加锁，进入同步代码前要获得当前类对象的锁。

修饰代码块，指定加锁对象，对给定对象加锁，进入同步代码库前要获得给定对象的锁。

#### lazy，线程不安全
```java
public class Singleton{
    private static Singleton instance;

    private Singleton(){}

    public static Singleton getInstance(){
        if(instance == null){
            instance = new Singleton();
        }

        return instance;
    }
}
```
#### hunger，线程安全
```java
public class Singleton{
    private static Singleton instance = new Singleton();

    private Singleton(){}

    public static Singleton getInstance(){

        return instance;
    }
}
```
#### lazy，线程安全
```java
public class Singleton{
    private static Singleton instance;

    private Singleton(){}
    // note， 这是一个类锁，所以所有创建线程都共享这把锁
    public static synchronized Singleton getInstance(){
        if(instance == null){
            instance = new Singleton();
        }

        return instance;
    }
}
```
#### lazy，双重校验锁
```java
public class Singleton{
    private static volatile Singleton instance;

    private Singleton(){}

    public static Singleton getInstance(){
        if(instance == null){
            synchronized(Singleton.class){
                if(instance == null){
                    instance = new Singleton();
                }
            }
        }

        return instance;
    }
}
```

> 双重校验锁的好处：第一个if保证只有第一次实例化的时候进行加锁，


## JVM
### 堆内存和堆内存
堆栈是线性数据结构，而堆是层次结构的数据结构。堆栈内存永远不会变得碎片化，而堆内存可能会随着内存块的首次分配和释放而变得碎片化。堆栈只访问局部变量，而堆允许全局访问变量。

### 数据结构的堆
<https://juejin.cn/post/6844903508555071496>

### 内存模型
#### 程序计数器（private）
字节码解释器通过改变这个计数器的值来选择下一条需要执行的字节码指令

唯一没有规定任何`OutOfMemoryError`的内存区域

#### 虚拟机栈（private）
虚拟机栈为虚拟机执行Java方法（也就是字节码）服务，生命周期与线程相同。

一个栈帧对应一个Java（字节码）方法，存储局部变量表，操作数栈，动态链接，方法出口。

局部变量表存放 编译期可知的：
- 基本数据类型
- 对象引用

会抛出`OutOfMemoryError`和`StackOverflowError`异常。

#### 本地方法栈（private）
与虚拟机栈类似，本地方法栈为虚拟机使用Native方法服务。

会抛出`OutOfMemoryError`和`StackOverflowError`异常。


#### Java堆（shared）
最大的内存区域，唯一作用：存放对象实例（所有的对象实例和数组）

是GC的主要区域，故也叫做GC堆， 根据`分代算法`， 也可细分为：
- 新生代
- 老年代

或者更细分：
- Eden （新生代）
- From Survivor （新生代）
- To Survivor （老年代）

会抛出`OutOfMemoryError`异常， 在 当前堆没有内存进行实例分配 且 堆也无法再扩展 时。 

#### 方法区（shared）
存储 虚拟机 加载的：
- 类信息
- 常量
- 静态变量
- 即时编译器编译后的代码

如果视作Java堆的一部分，可以叫做`永久代`，因为一般不考虑回收该区域。

抛出`OutOfMemoryError`异常。

##### 运行时常量池
是方法区的一部分，存在于Class文件中，存放编译期生成的各种 字面量 和 符号引用。


#### OutOfMemoryError 和 StackOverflowError
StackOverflowError： 如果线程请求的栈深度大于虚拟机允许的深度，将抛出该异常。
OutOfMemoryError：大部分虚拟机允许动态扩展，当扩展时无法申请到足够内存，抛出该异常。

这两种异常存在重叠：当栈空间无法继续分配时，是因为内存太小，还是已使用的栈空间太大。



### GC机制

#### 判断对象死亡
1. 引用计数法： 给对象添加引用计数，每当有地方引用，计数器加一，当引用失效，计数器减一，计数器为0的对象判定不可能再使用。
2. 可达性算法（JVM采用）

##### 可达性算法
通过一系列称为“GC roots”的对象作为起点，从这些起点向下搜索，搜索所走过的路径称为引用链。

可作为“GC roots”的对象：
1. 虚拟机栈中引用的对象。
2. 本地方法栈中引用的对象。
3. 方法区中 类静态属性引用的 对象。
4. 方法区中常量引用的对象。

> 当一个对象到“GC roots”没有任何引用链相连时，证明对象不可用

#### finalize()方法
当一个对象被判定 不可达，并非代表它已经死亡。

首先进行第一次标记，然后进行筛选（是否有必要执行finalize()方法）

如果认为有必要， 将对象放置进 `F-Queue`，并在稍后由一个虚拟机创建的低优先级的Finalizer线程来执行finalize()方法。

finalize()是对象逃脱死亡命运的最后一次机会，在GC进行第二次标记前对象只要能和引用链上任何一个对象建立关联，那么在第二次标记时他会被移出 待回收 的集合，否则便进行回收，对象正式死亡。

### GC算法
#### 标记-清除算法
标记所有要回收的对象，在标记完成后统一回收所有被标记的对象。

不足：
1. 效率低下。
2. 清除后剩下大量不连续的内存碎片，会影响以后需要分配大对象时无法找到足够连续内存而 频繁出发GC。

#### 复制算法
将可用内存等分为两块，每次只使用一块，当一块内存快用完了，将存活的所有对象复制到另一块（在原内存无序，新内存上有序，这是优点），然后清理所有原内存。

因为在新内存分配时是顺序分配，解决了碎片问题，但相应可使用内存空间变小了。

##### Eden and Survivor
取代等分，以8:1:1进行分配， 每次使用一块Eden和一块Survivor， 另一块Survivor作为To Survivor来存放存活对象。

#### 标记-整理算法
针对存活率高的老年代，先标记要清理的对象，然后让存活对象向一端移动，然后清理边界以外内存。

#### 分代收集
新生代： 复制算法（只有少部分存活需要复制）
老年代：标记-清除或者标记-整理

#### 垃圾收集器分类
<https://cloud.tencent.com/developer/article/1592943>

### 内存分配与回收策略
#### 对象优先在Eden分配
#### Minor GC and Full GC
1. Minor GC: 发生在新生代的GC，频繁而高速， Eden区不够时发生。
2. Full GC: 发生在老年代的GC， 

#### 大对象直接进入老年代
大对象： 需要大量连续内存的对象，例如： 长字符串，大数组

#### 晋升到老年代
虚拟机给每个对象维持一个年龄计数器，当对象在Eden出生并成功活过一个Minor GC进入From Survivor，年龄记为1，
之后每熬过一个Minor GC，年龄+1，当年龄超过设定值（default=15）将其晋升到老年代。

#### 动态年龄判断
当From Survivor中 相同年龄 对象的总和 达到From Survivor的一半时，即是没有到晋升年龄，年龄大于等于该年龄的所有对象也可全部进入老年代。

#### 空间分配担保

### 类加载

#### JAVA创建一个对象的过程
1. JVM去方法区寻找Test类的代码信息，如果有直接调用，没有的话使用类的加载机制把类加载进来.
2. 加载类，静态变量、静态方法、常量
3. person，person在main方法内部，因而是局部变量，存放在栈空间中。
4. new Person()。new出的对象（实例），存放在堆空间中。
5. jvm接下来看到了“=”，把new Person的地址告诉person变量，person通过四字节的地址（十六进制），引用该实例
   
> 类初始化： 类构造器完成类初始化（分配内存、赋予默认值）
> 类实例化：

#### 流程
加载 -> 验证 -> 准备 -> 解析 -> 初始化

其中：验证， 准备， 解析 也叫连接

##### 加载
虚拟机完成：
1. 通过一个类的全限定名来获取 定义此类 的二进制字节流。
2. 将这个字节流所代表的的 静态存储结构 转化为 方法区的 运行时数据结构。
3. 在内存中生成一个代表这个类的java.lang.Class对象，作为方法区这个类的各种数据的访问入口。

##### 验证
确保Class文件中的字节流中 包含的信息符合当前虚拟机的要求，并且不会危害虚拟机自身的安全。

##### 准备
正式为 类变量（被static修饰的变量） 分配内存并设置类变量初始值的阶段，这些变量使用所使用的内存都将在方法区中进行分配。

该阶段仅分配类变量，实例变量将会在对象实例化的时候随对象一起分配在Java堆中。

##### 解析
虚拟机将常量池内的符号引用替换为直接引用的过程。

###### 符号引用
以一组符号来描述所引用的目标，符号可以是任何形式的字面量，只要能无歧义的定位到目标。

###### 直接引用
直接指向目标的指针，相对偏移量或者一个能间接定位的句柄。

##### 初始化
开始执行 类中 定义的Java程序代码（字节码）

#### 类加载器
类加载器虽然只用于实现类的加载动作，但其作用还包含：
> 任意一个类，需要由 其本身 和 其类加载器来 确定 唯一性。

每一个类加载器都拥有一个独立的 类名称空间， 即比较两个类是否相等，只有在他们都由同一个类加载器加载的前提下 才有讨论意义。

#### 双亲委派模型
> 当一个类加载器收到了类加载请求，他首先把请求委派给父类加载器，对每一个层次的类加载器都如是，因此所有加载请求最终都应该 传递到 顶层的启动类加载器。只有当父类加载器反馈自己无法完成加载请求（在其搜索范围内没有找到所需类），子加载器才会尝试自己加载。 

> 好处在于Java类随其加载器一起具备了一种带有优先级的层次关系。

JVM中只存在两种类加载器：
1. 启动类加载器： 是JVM的一部分。
2. 其他类加载器：独立于JVM外部。

更加细分：
1. 启动类加载器
2. 扩展类加载器
3. 应用程序加载器

在双亲委派模型要求，除了顶层的启动类加载器外，其他的类加载器都应当有自己的父类加载器。

这里类加载器间的父子关系一般是以`组合`的关系来复用父加载器的代码，而非`继承`。

#### 


## 分布式（高可用，容灾）
<http://www.ruanyifeng.com/blog/2019/11/fault-tolerance.html>
