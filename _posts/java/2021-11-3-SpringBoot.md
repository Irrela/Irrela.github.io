---
title: SpringBoot
categories: Java
tags:
- Java
---

# Annotation

## @RequestParam & @RequestBody
### @RequestParam
@RequestParam可以接受简单类型的属性，也可以接受对象类型。

@RequestParam有三个配置参数：
- required 表示是否必须，默认为 true，必须。
- defaultValue 可设置请求参数的默认值。
- value 为接收url的参数名（相当于key值）。

@RequestParam用来处理*Content-Type*为*application/x-www-form-urlencoded*编码的内容，Content-Type默认为该属性，也可以接收​​​​​​​application/json。

@RequestParam也可用于其它类型的请求，例如：POST、DELETE等请求。

所以在postman中，要选择body的类型为*x-www-form-urlencoded*，这样在headers中就自动变为了 Content-Type : application/x-www-form-urlencoded 编码格式。

### @RequestBody

# Demo

## [原址](https://mp.weixin.qq.com/s/phk6j3ChBP-kPtS2xZeEZg)

## 新建项目
用`Spring Initailizr`.

GroupId: com.seiro
ArtifactId: demo

在com.seiro下补充文件架构:
1. controller
2. dao
3. entity
4. service

> 用Spring Initailizr的话无需手写spring-boot-starter-web和pring-boot-starter-parent的pom依赖

## 编写SpringBoot启动类
Spring Initailizr默认新建启动类DemoApplication，位于com.seiro下。

启动类上有注解`@SpringBootApplication`

## 编写application配置文件
位于resources下的`application.properties`。

## 编写UserController
```java
package com.seiro.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserController {

    @RequestMapping("/")
    public String index() {
        return "this is home page.";
    }

    @RequestMapping("getUser")
    public String getUser() {
        return "This requested user.";
    }

}
```

截至此时，已经可以启动项目看到两个页面。

## 集成Mybatis
### 库表准备
在mysql数据库中，创建database和table
```sql
-- 新建database
CREATE DATABASE IF NOT EXISTS database_name;
USE database_name;

-- 设定utf
SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;


DROP TABLE IF EXISTS `t_user`;

-- Table structure for t_user
CREATE TABLE `t_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;


-- Records of t_user
BEGIN;
INSERT INTO `t_user` VALUES (1, 'zhangsan', '123456');
INSERT INTO `t_user` VALUES (2, 'lisi', '123456');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;

```
### 实体类准备
```java
package com.seiro.demo.entity;

public class User {
    private Integer id;
    private String userName;
    private String password;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
```

### 创建mapper相关
在resources下新建mappers文件夹存放mapper文件。

### 导入Mybatis相关依赖
> 注意mysql的版本要和本地一致。

```xml
        <!--       SpringBoot 集成 Mybatis的 启动器-->
        <dependency>
            <groupId>org.mybatis.spring.boot</groupId>
            <artifactId>mybatis-spring-boot-starter</artifactId>
            <version>1.3.2</version>
        </dependency>
        <!--        数据源-->
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid</artifactId>
            <version>1.0.19</version>
        </dependency>
        <!--        mysql驱动-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.15</version>
        </dependency>
```

### 配置application中Mybatis相关配置
注意指定url使用的database和密码要和mysql创建的一致。


```properties
server.port=8000

#数据源配置
#指定驱动
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
#指定url
spring.datasource.url=jdbc:mysql://localhost:3306/boot
#指定用户名
spring.datasource.username=root
#指定密码
spring.datasource.password=0401
#指定连接池类型
spring.datasource.type=com.alibaba.druid.pool.DruidDataSource

#Mybatis的配置 配置mapper文件的地址
mybatis.mapper-locations=classpath:mappers/*Mapper.xml
```

### 在启动类上添加扫描dao接口的注解
> @MapperScan("com.seiro.demo.dao")

```java
@MapperScan("com.seiro.demo.dao")
@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

}
```

### 开发dao接口以及Mapper
#### 新建dao接口。
```java
package com.seiro.demo.dao;

import com.seiro.demo.entity.User;

import java.util.List;

public interface UserDao {
    List<User> findAll();
}
```

#### 新建mapper文件UserMapper.xml
注意mapper的namespace和resultType要和构建的一致。

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.seiro.demo.dao.UserDao">
    <select id="findAll" resultType="com.seiro.demo.entity.User">
        select * from t_user
    </select>
</mapper>
```

## 测试
### 引入测试依赖
```xml
        <!--        测试依赖-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>

        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <scope>test</scope>
        </dependency>
```

### 编写测试类
在test文件夹下新建TestUserDao(默认建有一个DemoApplicationTests, 我们用自己新建的).

@SpringBootTest(classes = {DemoApplication.class}) 注意这里要改成我们自己的启动类名（DemoApplication）

@Autowired报无法wired可以先不管。


```java
package com.seiro.demo;

import com.seiro.demo.dao.UserDao;
import com.seiro.demo.entity.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = {DemoApplication.class}) 
public class TestUserDao {
    @Autowired
    private UserDao userDao;

    @Test
    public void test1() {
        List<User> all = userDao.findAll();

        for(User user : all) {
            System.out.println(user);
        }
    }
}
```

截至目前已经可以完成测试。