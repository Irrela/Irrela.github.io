---
title: Java Concurrent
categories: Java
tags:
- Java
---

## Java同步
[Java实现并发的几种方式](https://blog.csdn.net/qq_31027515/article/details/91347496)

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Main {
    private static final int NUMOFTHREDS = 5;

    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(NUMOFTHREDS);
        for (int i = 0; i < 50; i++) {
            Runnable worker = new MyRunnable(i);
            executor.execute(worker);
        }
        // executor不接受新的threads
        executor.shutdown();
        // 等待所有threads结束
        executor.awaitTermination();
        System.out.println("Finished all threads");
    }
```

[Java线程安全和锁Synchronized概念](https://blog.51cto.com/14257804/2389436)

[RMI，awt和Swing的线程](https://cloud.tencent.com/developer/article/1083667)



## Java关键字
### static
<https://www.jianshu.com/p/4c1950f3d934>

### volatile
<https://www.jianshu.com/p/31e5ab16935f>

<http://www.51gjie.com/java/574.html#:~:text=Java%20volatile%E5%85%B3%E9%94%AE%E5%AD%97%E4%BD%9C%E7%94%A8,%E4%BF%AE%E9%A5%B0%E7%9A%84%E5%8F%98%E9%87%8F%E8%BF%9B%E8%A1%8C%E7%BC%93%E5%AD%98%E3%80%82>



