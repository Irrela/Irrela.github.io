---
title: Unit Test
categories: Java
tags:
- Java
---

- [Junit](#junit)
  - [关于单测](#关于单测)
  - [新建测试类](#新建测试类)
  - [编写写测试方法](#编写写测试方法)
  - [运行测试方法](#运行测试方法)
- [Mock技术](#mock技术)
  - [为什么要使用Mock](#为什么要使用mock)
  - [Mock方法-单一情况](#mock方法-单一情况)
  - [Mock方法-分类](#mock方法-分类)



## Junit
### 关于单测
编写单元测试可以确保一个程序模块的行为符合我们设计的测试用例，当后续开发进行了修改，我们可以运行单元测试来检查哪些模块保持了本身的功能，可以很快排查出修改导致异常的模块。

### 新建测试类
选中要测试的类的类名，`alt + enter`并选择新建测试类。
！note！：最好不要修改自动创建的路径，否在在跑测试率的时候会因scope问题无法显示覆盖率结果。

### 编写写测试方法

使用注解@Test, 在测试方法中可使用断言Assert，例如：

```java
@Test
public void testMGet() {
    cacheService.set("google", "www.google.com");
    cacheService.set("yahoo", "www.yahoo.com");
    cacheService.set("facebook", "www.facebook.com");

    List<String> expected = new ArrayList<String>() {{
        add("www.yahoo.com");
        add("www.google.com");
        add(null);
    }};

    
    Assert.assertEquals(expected, cacheService.mGet("yahoo", "google", "amazon"));
}
```
> 为什么使用断言： java断言失败时，抛出`AssertionError`会带上导致失败的消息，更方便调试

！note！： 因为断言失败时会抛出异常，导致程序结束退出，断言不能用于可恢复的程序错误，只应该用于开发和测试阶段。对于可恢复的程序错误，不应该使用断言，而应该抛出异常并在上层捕获。

### 运行测试方法
1. run / debug 单个测试方法 / 测试类 / 测试package
2. run with coverage
3. run with Windows Async Profiles (???)
4. run with Java Flighter Recorder (???)


## Mock技术
### 为什么要使用Mock
单元测试中的Mock方法，通常是为了绕开那些依赖外部资源或无关功能的方法调用，使得测试重点能够集中在需要验证和保障的代码逻辑上。

> 其实不光是在单测，例如开发时需要用到其他接口返回数据但接口方还在开发，可以自己mock接口的返回数据，mock的本质就是造数据。

### Mock方法-单一情况
在测试类中声明Mock类，并编写一个空dummy()方法，目标类为测试类（无意义，仅为避免报错）

```java
public static class Mock extends BasicMock {

    @MockMethod(targetClass = TestClass.class)
    protected void dummy() {

    }

    @MockMethod(targetClass = TestTargetClass.class)
    boolean testMockMethod(Object obj, Condition condition) {
        switch ((String) TestableTool.MOCK_CONTEXT.get("macthCondition")) {
            case "true":
                return true;
            case "false":
                return false;
            default:
                return false;
        }
    }
}
```

对要mock的方法加@MockMethod注解，目标类为方法的调用类，mock方法的返回值需保持同类型，返回值可以按需mock。

### Mock方法-分类
```java
@MockMethod(targetClass = TestTargetClass.class)
private boolean isCondition(Object obj, Condition condition) {
    switch ((String) TestableTool.MOCK_CONTEXT.get("matchCondition")) {
        case "true":
            return true;
        case "false":
            return false;
        default:
            return false;
    }
}

// 测试方法中
@Test
public void test_demo() {
    TestableTool.MOCK_CONTEXT.put("matchCondition", "true");
    // 此时该mock方法返回true
    TestableTool.MOCK_CONTEXT.put("matchCondition", "false");
    // 此时该mock方法返回true
}
```
