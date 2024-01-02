---
title: ElasticSearch
categories: DB
tags:
- DB
---


# 安装及环境问题
## 安装命令
```curl
curl -L -O https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-5.6.16.tar.gz

cd elasticsearch-5.6.16.tar.gz
./bin/elasticsearch

```
## Unrecognized VM option 'UseConcMarkSweepGC'
修改ES的JVM配置
> 位置：ES root/config/jvm.options

将三个参数禁用即可
```options
## GC configuration
# -XX:+UseConcMarkSweepGC
# -XX:CMSInitiatingOccupancyFraction=75
# -XX:+UseCMSInitiatingOccupancyOnly
```