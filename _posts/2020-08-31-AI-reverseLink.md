---
layout: post
title: 翻转链表
categories: Algorithm
description: 
keywords: PriorityQueue Comparator
---
```java
class Solution {
    public ListNode reverseList(ListNode head) {
        if(head == null){
            return null;
        }

        ListNode newHead = null;
        ListNode prev = null;
        ListNode node = head;

        while(node != null){
            ListNode next = node.next;

            if(next == null){
                newHead = node;
            }

            node.next = prev;
            prev = node;
            node = next;
        }

        return newHead;
    }
}
```