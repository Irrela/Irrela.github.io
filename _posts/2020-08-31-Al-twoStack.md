---
layout: post
title: 两个栈实现队列
categories: Algorithm
description: 
keywords: stack，queue
---

```java
class CQueue {

    Deque<Integer> in;
    Deque<Integer> out;

    public CQueue() {
        in = new LinkedList<>();
        out = new LinkedList<>();
        
    }
    
    public void appendTail(int value) {
        in.push(value);
    }
    
    public int deleteHead() {
        if(out.isEmpty()){
            while(!in.isEmpty()){
                out.push(in.pop());
            }
        }

        if(out.isEmpty()){
            return -1;
        }

        return out.pop();
    }
}
```