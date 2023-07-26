---
layout: post
title: To LEARN LIST
categories: Miscellany
description: 
keywords: 
---
[toc]
## DB
[知乎问答：MySQL 对于千万级的大表要怎么优化？](https://ld246.com/article/1497318811539)
[一篇文章带你彻底了解MySQL各种约束](https://segmentfault.com/a/1190000039214953)
[SQL truncate 、delete与drop区别](https://www.cnblogs.com/8765h/archive/2011/11/25/2374167.html)
[MySQL 分库分表及其平滑扩容方案](https://cloud.tencent.com/developer/article/1451045)
[MySQL Explain详解](https://www.cnblogs.com/xuanzhi201111/p/4175635.html)

[SQL语言艺术](https://www.linuxidc.com/Linux/2016-07/133250.htm)

[Official Partion tables](https://dev.mysql.com/doc/refman/8.0/en/partitioning.html)

[advanced-java](https://github.com/doocs/advanced-java)

## pending

- vscode : ctrl + ` 开terminal

- db: 
```SQL

show index from <table_name>


```

- 分表
    - 在存储记录中选择一个unique的字段来做hash(算法如hash64)
    - hash值再根据分表数量取mod？

- PlatformTransactionManager做数据库写入

- 
```java
// org.apache.commons.codec.digest.DigestUtils
key = DigestUtils.md5Hex(source.toString());
```


- java datastructure ：https://www.pseudoyu.com/zh/2021/01/01/algorithm_data_structure_java/


- Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.1
    - 改<build>信息
    - 改jdk

- [ES介绍文档](https://blog.csdn.net/UbuntuTouch/article/details/99443042)
- [ES7的string变化](https://stackoverflow.com/questions/53119521/how-to-apply-the-not-analyzed-to-a-field)
    - ES7不需要type
    - string分化为text和keyword，后者对应not_analysed
- [ES游标](https://www.elastic.co/guide/cn/elasticsearch/guide/current/scroll.html#scroll)
- [ES查询类型](https://zhuanlan.zhihu.com/p/161710475)
- [ES新建索引及迁移](https://blog.csdn.net/apple9005/article/details/90415558)
- [ES7中text与keyword的区别](https://www.cnblogs.com/hahaha111122222/p/12177377.html)
- routing字段不能用text -》用.keyword或者将字段设为keyword类型

- 
单独使用@Data注解，是会生成无参数构造方法。

单独使用@Builder注解，发现生成了全属性的构造方法。

@Data和@Builder一起用：我们发现没有了默认的构造方法。如果手动添加无参数构造方法或者用@NoArgsConstructor注解都会报错！

- [maven-in-5-min](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html)

- maven profile
    不选setting设置的伺服仓库会直接查找maven中央库，非组织的公共包确实时要取消勾选伺服profile去中央库查找

- 全局替换尾注释
    查找： (^[^\r\n]+[\S]+[^\r\n]+)(//.+$)
    替换为：\t/**$2*/\r\n$1
    查找：//
    替换为空