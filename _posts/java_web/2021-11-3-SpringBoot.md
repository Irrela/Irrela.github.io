---
title: SpringBoot
categories: Java
tags:
- Java
---

- [Annotation](#annotation)
  - [@Autowired 和 @Resource](#autowired-和-resource)
    - [@Autowired 和 `Field injection is not recommended`](#autowired-和-field-injection-is-not-recommended)
      - [解决方式](#解决方式)
  - [@RequestParam, @PathVariable, @RequestBody](#requestparam-pathvariable-requestbody)
  - [@ResponseBody 和 ResponseEntity](#responsebody-和-responseentity)
- [Demo](#demo)
  - [原址](#原址)
  - [新建项目](#新建项目)
  - [编写SpringBoot启动类](#编写springboot启动类)
  - [编写application配置文件](#编写application配置文件)
  - [编写UserController](#编写usercontroller)
  - [集成Mybatis](#集成mybatis)
    - [库表准备](#库表准备)
    - [实体类准备](#实体类准备)
    - [创建mapper相关](#创建mapper相关)
    - [导入Mybatis相关依赖](#导入mybatis相关依赖)
    - [配置application中Mybatis相关配置](#配置application中mybatis相关配置)
    - [在启动类上添加扫描dao接口的注解](#在启动类上添加扫描dao接口的注解)
    - [开发dao接口以及Mapper](#开发dao接口以及mapper)
      - [新建dao接口。](#新建dao接口)
      - [新建mapper文件UserMapper.xml](#新建mapper文件usermapperxml)
  - [测试](#测试)
    - [引入测试依赖](#引入测试依赖)
    - [编写测试类](#编写测试类)
- [处理持久层的框架](#处理持久层的框架)
  - [Spring Data JPA、MyBatis 和 Hibernate](#spring-data-jpamybatis-和-hibernate)
  - [dao还是repository](#dao还是repository)
  - [Mybatis](#mybatis)
    - [MyBatis 的映射器（Mapper）](#mybatis-的映射器mapper)
- [Spring配置文件](#spring配置文件)
  - [多环境配置](#多环境配置)
    - [配置文件命名规则](#配置文件命名规则)
    - [创建不同环境的配置文件](#创建不同环境的配置文件)
    - [激活配置文件](#激活配置文件)
    - [在代码中精细选择配置文件](#在代码中精细选择配置文件)
- [Hole](#hole)
  - [Spring boot](#spring-boot)
    - [初次启动`This application has no explicit mapping for /error`](#初次启动this-application-has-no-explicit-mapping-for-error)
  - [数据库](#数据库)
    - [`Property 'sqlSessionFactory' or 'sqlSessionTemplate' are required`](#property-sqlsessionfactory-or-sqlsessiontemplate-are-required)
    - [文档根元素 "mapper" 必须匹配 DOCTYPE 根 "null](#文档根元素-mapper-必须匹配-doctype-根-null)


# Annotation

## @Autowired 和 @Resource
都是在Spring中用于注入依赖的注解。

***@Autowired*** 
- 是Spring提供的注解，
- 按照类型（by type）进行匹配的。如果有多个相同类型的Bean，Spring会尝试找到最合适的进行注入。
- 默认要求依赖是必须的，如果找不到匹配的Bean，会抛出异常。你可以通过required属性设置为false，使依赖变成可选的。
- 支持构造函数、setter方法、字段和方法的注入。
- 是Spring框架提供的注解，因此在使用Spring框架的项目中常常使用它。

***@Resource ***
- 是Java EE的标准注解，它由Java EE提供。
- 按照名称（by name）进行匹配的。你可以通过name属性指定要注入的Bean的名称，如果没有指定名称，它会按照字段名或者属性名进行匹配。
- 如果找不到匹配的Bean，会尝试按照类型进行匹配。如果还找不到，会抛出异常。你可以通过name属性指定名称，也可以通过type属性指定类型。
- 主要用于字段和方法的注入。
- 是Java EE的一部分，因此在Java EE环境中使用它更为常见。

### @Autowired 和 `Field injection is not recommended`

`"Field injection is not recommended"` 意味着在类的字段上使用依赖注入（通常是通过 @Autowired 或类似的注解）并不是一种推荐的做法。

这样的建议通常基于以下几个理由：

***可测试性（Testability）***：使用字段注入的类在进行单元测试时可能会更难以处理。如果你使用构造函数注入，你可以在构造对象时传递模拟的依赖，这使得测试更容易进行。

***依赖性的清晰性（Clarity of Dependencies）***：构造函数注入通常更明确地显示了一个类依赖于哪些其他类。这对于阅读和理解代码是有帮助的。字段注入可能隐藏了类的实际依赖，因为它们可以在类的任何地方进行注入。

***循环依赖问题（Circular Dependency Issues）***：如果两个类相互依赖，使用字段注入可能会导致循环依赖的问题。构造函数注入通常更容易处理这样的情况。

***不可变性（Immutability）***：如果你的类是不可变的，那么通过构造函数注入依赖通常更为合适，因为在对象创建后，其状态不能被改变。


#### 解决方式
1. 用构造函数注入
```java
// 不推荐的方式：字段注入
@Service
public class MyService {
    @Autowired
    private MyRepository repository;
    // other methods...
}

// 推荐的方式：构造函数注入
@Service
public class MyService {
    private final MyRepository repository;

    @Autowired
    public MyService(MyRepository repository) {
        this.repository = repository;
    }
    // other methods...
}
```

2. 换用@Resource
```java
import jakarta.annotation.Resource;

// 在使用 @Resource 时，你可以通过 name 属性指定要注入的 Bean 的名称，这就消除了一些可能出现的歧义。
@Resource(name = "myRepository")
private MyRepository repository;

```
虽然 `@Resource` 有一些优势，但在使用时仍然需要注意一些问题，比如在没有指定 name 属性的情况下，它仍然按照类型进行匹配。此外，如果在一个类中有多个相同类型的 Bean，它可能会遇到与 @Autowired 相似的歧义问题。

总体而言，选择使用 `@Resource` 还是 @Autowired 取决于项目的具体情况和个人或团队的偏好。在 Spring 项目中，@Autowired 是更为常见和推荐的选择。在 Java EE 或 Jakarta EE 环境中，或者在与这些标准集成的项目中，`@Resource` 可能更为适用。

> 关于 jakarta.annotation.Resource: javax.annotation.Resource是Java EE, 前者是 Jakarta EE, Jakarta EE是开源而且社区更活跃，用就可以了


## @RequestParam, @PathVariable, @RequestBody
***@RequestParam***
`@RequestParam` 可以接受简单类型的属性，也可以接受对象类型。

`@RequestParam` 有三个配置参数：
- required 表示是否必须，默认为 true，必须。
- defaultValue 可设置请求参数的默认值。
- value 为接收url的参数名（相当于key值）。

- 用于从请求中提取查询参数，通常用于处理 GET 请求的参数。
- 参数是通过 URL 查询字符串（例如 ?name=value）传递的。
- 在控制器方法的参数中使用 @RequestParam 注解，指定参数的名称。


```java
@GetMapping("/example")
public String exampleMethod(@RequestParam String name) {
    // 方法体
}
// 在上述例子中，假设请求为 /example?name=John，name 参数的值将被映射到 name 参数上。
```
***@PathVariable***
用途： 用于从 URI 中提取模板变量，通常用于 RESTful 风格的请求。

示例：
```java
@GetMapping("/example/{id}")
public String exampleMethod(@PathVariable Long id) {
    // 方法体
}
// 在这个例子中，如果请求的 URL 是 /example/123，那么 id 将被映射到方法的参数上，值为 123。
```


***@RequestBody***
- 用于从请求体中提取参数，通常用于处理 POST 请求的参数。
- 参数是通过请求的 body 部分传递的，通常是 JSON 或 XML 格式的数据。
- 在控制器方法的参数中使用 @RequestBody 注解。
```java
@PostMapping("/example")
public String exampleMethod(@RequestBody User user) {
    // 方法体
}
// 在上述例子中，假设请求是一个 POST 请求，请求体包含一个表示用户的 JSON 数据。User 对象将从请求体中反序列化。
```


`@RequestParam` 用来处理*Content-Type*为*application/x-www-form-urlencoded*编码的内容，Content-Type默认为该属性，也可以接收​​​​​​​application/json。

`@RequestParam` 也可用于其它类型的请求，例如：POST、DELETE等请求。

所以在postman中，要选择body的类型为*x-www-form-urlencoded*，这样在headers中就自动变为了 Content-Type : application/x-www-form-urlencoded 编码格式。

## @ResponseBody 和 ResponseEntity

都是在Spring MVC中处理HTTP响应的方式.

***@ResponseBody：***
@ResponseBody 注解通常用于将方法的返回值直接作为 HTTP 响应的主体部分。这意味着返回的对象将被转换为响应的主体，并通过适当的消息转换器进行序列化。这个注解通常用于RESTful服务，尤其是返回JSON或XML格式的数据。

示例：
```java
@RestController
@RequestMapping("/api")
public class MyController {

    @GetMapping("/data")
    @ResponseBody
    public MyData getData() {
        // 返回的MyData对象将被转换成JSON或XML
        return new MyData("Hello, World!");
    }
}
```

***ResponseEntity：***
ResponseEntity 是一个更加灵活的类，它允许你完全掌控响应的各个方面，包括状态码、头部信息以及响应体。你可以使用它来构建一个更加定制化的 HTTP 响应。
```java
@RestController
@RequestMapping("/api")
public class MyController {

    @GetMapping("/data")
    public ResponseEntity<MyData> getData() {
        MyData myData = new MyData("Hello, World!");

        HttpHeaders headers = new HttpHeaders();
        headers.add("Custom-Header", "SomeValue");

        // 可以设置状态码、头部信息等
        return new ResponseEntity<>(myData, headers, HttpStatus.OK);
    }
}

```

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

# 处理持久层的框架

## Spring Data JPA、MyBatis 和 Hibernate

## dao还是repository

`repository` 目录通常用于Spring Data JPA的项目结构，而 `dao` 目录则可能在使用其他持久化框架（例如MyBatis）或者不使用特定的ORM框架的项目中出现。
这两者并不一定冲突，而是反映了在不同的技术栈中对于数据访问层的不同命名习惯。

***Spring Data JPA***： Spring Data JPA 提供了一种简化数据访问的方式，通常使用 `repository` 来表示数据访问层。在这种情况下，`repository` 包含了通过接口来定义数据操作的方式，而不再需要手动编写 SQL。
```txt
|-- src
|   |-- main
|       |-- java
|           |-- com
|               |-- yourcompany
|                   |-- yourproject
|                       |-- repository
|                           |-- UserRepository.java

```

***dao 目录***：
传统数据访问： 如果你使用的是传统的JDBC、Hibernate、MyBatis等，那么 dao 目录可能更为常见。在这里，dao 表示数据访问对象，通常包含了对数据库的底层操作，手动编写 SQL 或者使用框架提供的方式。
```txt
|-- src
|   |-- main
|       |-- java
|           |-- com
|               |-- yourcompany
|                   |-- yourproject
|                       |-- dao
|                           |-- UserDao.java

```


## Mybatis
### MyBatis 的映射器（Mapper）

MyBatis 提供了两种方式来配置和定义 Mapper，即`注解`和 `XML`。

***1. XML方式：***
```xml
<!-- UserDao.xml -->
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.seiro.demo.dao.UserDao">
    <select id="findAll" resultType="com.seiro.demo.entity.User">
        select * from t_user
    </select>
</mapper>
```

***2. 注解方式：***
```java
// UserDao.java
@Mapper
public interface UserDao {

    @Select("select * from t_user")
    List<User> findAll();
}

```

***3. 映射器方法命名规则***

没看到有注解，也没有mapper.xml文件，MyBatis还可以通过`方法名来推断sql语句`
方法名 `getMessagesByConversationId` 可以被 MyBatis 推断为一条查询语句。具体推断规则如下：

方法名开头的单词：
- get 或 find：被推断为查询操作。
- insert：被推断为插入操作。
- update：被推断为更新操作。
- delete：被推断为删除操作。

方法名后面的单词：
除了前缀（如 get、find、insert）之外的其余部分将被用于推断 SQL 语句中的表名或条件。

在你的例子中，`getMessagesByConversationId` 被推断为一条查询语句，MyBatis 将会根据这个方法名生成类似以下的 SQL 语句：
```sql
SELECT * FROM chat_message WHERE conversation_id = #{conversationId}
```

# Spring配置文件
## 多环境配置
### 配置文件命名规则
- `application.properties`: 默认配置文件，总是会加载。
- `application-{profile}.properties`: profile是你激活的环境（例如，application-dev.properties）。
- `application-{profile}.yml`: 与.properties相似，但使用YAML格式。

### 创建不同环境的配置文件
在你的 `src/main/resources` 目录下，创建以下文件：
- `application.properties`：通用的配置
- `application-dev.properties`：开发环境配置
- `application-prod.properties`：生产环境配置

### 激活配置文件
在`application.properties`中使用`spring.profiles.active`属性指定你要激活的环境。
```bash
# application.properties
spring.profiles.active=dev
```
或者，你可以`通过命令行参数或者环境变量来激活不同的配置文件`。例如，在启动应用程序时使用以下命令：
```bash
java -jar your-application.jar --spring.profiles.active=prods
```

### 在代码中精细选择配置文件
在你的代码中，你可以通过`@Value`注解或`Environment`对象来读取配置值。
```bash
@RestController
public class MyController {

    @Value("${your.property}")
    private String yourProperty;

    @Autowired
    private Environment environment;

    @GetMapping("/property")
    public String getProperty() {
        // 通过 @Value 注解读取配置值
        String property1 = yourProperty;

        // 通过 Environment 读取配置值
        String property2 = environment.getProperty("your.property");

        return "Property 1: " + property1 + ", Property 2: " + property2;
    }
}
```



# Hole

## Spring boot
### 初次启动`This application has no explicit mapping for /error`
找不到一个controller可以map到`/`, 随便写一个类似于：
```java
@RestController
public class ChatController {

    @RequestMapping("/")
    public String home(){
        return "Hello World!";
    }
}
```

## 数据库
### `Property 'sqlSessionFactory' or 'sqlSessionTemplate' are required`
将`mybatis-spring-boot-starter` 版本更新到 `3.0.1` (适配java17)
```xml
        <dependency>
            <groupId>org.mybatis.spring.boot</groupId>
            <artifactId>mybatis-spring-boot-starter</artifactId>
<!--            <version>1.3.2</version>-->
            <version>3.0.1</version>
        </dependency>
```

### 文档根元素 "mapper" 必须匹配 DOCTYPE 根 "null
对应mapper.xml文件未写：
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
```
