---
layout: post
title: Java语言特性 && JVM
categories: Java
description: 
keywords: 
---
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



## 设计模式
### 单例
<https://www.pdai.tech/md/dev-spec/pattern/2_singleton.html>

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




## JVM
### 堆内存和堆内存
堆栈是线性数据结构，而堆是层次结构的数据结构。堆栈内存永远不会变得碎片化，而堆内存可能会随着内存块的首次分配和释放而变得碎片化。堆栈只访问局部变量，而堆允许全局访问变量。

### 数据结构的堆
<https://juejin.cn/post/6844903508555071496>

### 内存模型
### GC机制


## 分布式（高可用，容灾）
<http://www.ruanyifeng.com/blog/2019/11/fault-tolerance.html>