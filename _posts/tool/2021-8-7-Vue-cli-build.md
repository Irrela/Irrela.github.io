---
# layout: post
title: Vue搭建项目(with vue-cli)&连接后端
categories: Tool
tags:
- Tool
---

## 环境准备

### 确认安装nodejs：
> node(npm) -v  // nodejs 内置 npm

### npm更新到最新版本： 
> npm -g install npm

### 安装vue-cli脚手架
> npm install -g vue-cli

**!note!**: 安装的是2.x version

## 构建项目
选定目标路径，执行
> vue init webpack <project_name>

webpack 是以 webpack 为模板指生成项目，还可以替换为 pwa、simple 等参数

构建时会询问一些选配项，务必安装**vue-router**（建议带上**eslint**，为了代码质量）

启动项目，默认端口8080
> npm start === npm run dev 

**!note!**: 命令在package.json中预定义，可custom

## 构建项目（IDEA Bundled）
1. New project --> Static Web --> Vue.js
2. Project Location需要指定项目级文件夹
3. Finish之后，需要自行`npm install`(不含node modules)

## Vue-cli项目结构

<img src="/images/posts/vuecli_sturc.png" width="75%"/>

### index.html
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>wj-vue</title>
  </head>
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```
`<div id="app"></div>` ：构建的文件将会被自动注入，也就是编写的其它的内容都将在这个 div 中展示。

整个项目只有这一个 html 文件，所以这是一**单页面应用**，当我们打开这个应用，表面上可以有很多页面，实际上它们都只不过在一个 div 中。

### App.vue
`.vue` ：.vue 文件是一种自定义文件类型，在结构上类似 html，一个 .vue 文件即是一个 vue 组件。


```js
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

`<script>`标签里的内容即该组件的脚本，也就是 js 代码，`export default` 是 ES6 的语法，意思是将这个组件整体导出，之后就可以使用 import 导入组件了。大括号里的内容是这个组件的相关属性。

`<router-view/>`，是一个容器，名字叫“路由视图”，意思是当前路由（ URL）指向的内容将显示在这个容器中。也就是说，其它的组件即使拥有自己的路由（URL，需要在 router 文件夹的 index.js 文件里定义），也只不过表面上是一个单独的页面，实际上只是在根组件 App.vue 中。


### main.js
App.vue 里的 `<div id="app">` 和 index.html 里的 `<div id="app">` 没有关系，那么这两个文件是怎么建立联系的呢？让我们来看入口文件 main.js 的代码。

```js
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
```

最上面 import 了几个模块，其中 vue 模块在 node_modules 中，App 即 App.vue 里定义的组件，router 即 router 文件夹里定义的路由。

`Vue.config.productionTip = false`, 作用是阻止vue在启动时生成生产提示。

在这个 js 文件中，我们创建了一个 Vue 对象（实例），el 属性提供一个在页面上已存在的 DOM 元素作为 Vue 对象的挂载目标，router 代表该对象包含 Vue Router，并使用项目中定义的路由。components 表示该对象包含的 Vue 组件，template 是用一个字符串模板作为 Vue 实例的标识使用，类似于定义一个 html 标签。


## 前后端连接
### 设置反向代理（axios）

在main.js中进行配置

因为使用了新的模块 axios，所以需要进入到项目文件夹中，执行 `npm install --save axios`，以安装这个模块。

```js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 设置反向代理，前端请求默认发送到 http://localhost:8443/api
var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8443/api'
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
```

### 配置页面路由

修改 src\router\index.js

```js
import Vue from 'vue'
import Router from 'vue-router'
// 导入刚才编写的组件
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
  // 下面都是固定的写法
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'AppIndex',
      component: AppIndex
    }
  ]
})
```

### 跨域支持

为了让后端能够访问到前端的资源，需要配置跨域支持。

在 config\index.js 中，找到 proxyTable 位置，修改为以下内容

```js
    proxyTable: {
      '/api': {
        target: 'http://localhost:8443',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
```