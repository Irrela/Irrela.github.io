---
layout: post
title: HJ-汽水瓶
categories: Algorithm
description: 
keywords: HJ
---
### Description
有这样一道智力题：“某商店规定：三个空汽水瓶可以换一瓶汽水。小张手上有十个空汽水瓶，她最多可以换多少瓶汽水喝？”答案是5瓶，方法如下：先用9个空瓶子换3瓶汽水，喝掉3瓶满的，喝完以后4个空瓶子，用3个再换一瓶，喝掉这瓶满的，这时候剩2个空瓶子。然后你让老板先借给你一瓶汽水，喝掉这瓶满的，喝完以后用3个空瓶子换一瓶满的还给老板。如果小张手上有n个空汽水瓶，最多可以换多少瓶汽水喝？

```java
import java.util.*;

public class Main{
    public static void main(String[] agrs){
        Scanner sc = new Scanner(System.in);
        
        Deque<Integer> list = new LinkedList<>();
        while(sc.hasNextInt()){
            int temp = sc.nextInt();
            if(temp != 0){
                list.addLast(temp);
            }
        }
        
        while(!list.isEmpty()){
            int empty = list.pollFirst();
            int exchange = 0;
            int count = 0;
            
            while(empty > 2){
                exchange = empty / 3;
                empty = empty % 3;
                
                count += exchange;
                
                empty += exchange;
                exchange = 0;
            }
            
            if(empty == 2){
                count++;
            }
            
            System.out.println(count);
        }   
    }
}
```