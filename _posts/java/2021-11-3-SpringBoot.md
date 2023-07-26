---
layout: post
title: SpringBoot
categories: Java
description: 
keywords: 
---
[toc]
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
