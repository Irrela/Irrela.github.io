---
title: Internet
categories: Eightlegged
tags:
- Eight-legged
---

# HTTP 超文本传输​​协议
浏览器提出的每个请求都是独立的。HTTP 协议是无状态的。这意味着每个单独的请求都需要携带完成它所需的所有信息。在 HTTP 请求中，此信息通过`标头`传递。

HTTP 协议支持多种网络配置。浏览器是可以提出请求的众多可能的客户端之一。
发送请求，并通过 TCP/IP 层接收响应。
`HTTP 通信的默认端口是端口 80`，但可以针对不同的应用程序进行不同的配置。

## HTTP 版本
为什么 HTTP/2.0 比 HTTP/1.1 更好。 

正如所见，HTTP/2.0 允许客户端`同时请求样式和脚本`。同样，样式和脚本会同时加载。整个过程在单个 TCP 连接中完成。 

HTTP/2.0 带有`智能数据包管理策略`和`标头压缩机制`以减少延迟

## HTTP URL
统一资源定位符 (URL) 
请求被发送到使用统一资源定位符 (URL) 指定的服务器。
我相信您已经熟悉 URL，但为了完整起见，我将在此处包含它。URL 具有简单的结构，由以下组件组成：
> https://www.domain.com:1234/path/to/resource?a=b&x=y

- https指定协议。它可以是 http 或 https，这使得通信安全。 
- www.domain.com是主机（host）。
- 1234 是端口。在许多情况下，浏览器会隐藏端口。默认值为 80。
- path/to/resource 是资源路径。它帮助服务器识别特定资源并生成正确的响应。 
- ?a=b&x=y 是查询字符串参数。服务器使用查询字符串参数来发现正确的资源。 

URL 标识了客户端想要与之通信的特定主机。
它不执行任何操作。这就是请求的来源。
HTTP 有一种形式化的构建请求的方式，可以捕获所有需要的信息，任何类型的应用程序都可以应用这些信息。

### hosts文件 & DNS
在系统进行dns解析之前，会首先去hosts文件中查找。

在hosts文件中，如果能够找到被访问域名的ip地址，就不会再向dns服务器发起请求。

## HTTP 请求
Web 通信的核心是请求消息。请求由以下部分组成：

- 请求行（request line）：这说明正在请求什么。它由动词、路径和 HTTP 版本组成。HTTP 动词表示请求主机执行什么操作，例如获取资源或 POST 表单数据。
  
- 请求头(headers)：有关消息、请求者和通信格式的附加信息。
- 请求体(body) 正文（可选）：请求的内容。对于像网页这样的静态资源的简单请求，这将为空。对于表单提交，这将包含表单中的信息。正文与标题之间用空行隔开。

这是一个典型的 HTTP 请求：
```
# 请求行
GET /articles/http-basics HTTP/1.1 
# 请求头
Host: www.articles.com
Connection: keep-alive
Cache-Control: no-cache
Pragma: no-cache
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8
```

第一行包含动词、资源路径和 HTTP 版本。在这种情况下，我们试图在/articles/http-basics获取资源。其余的请求行是标头——这个请求没有正文。

### 请求动词
- GET：从服务器获取资源。对于 GET 请求，URL 应包含服务器发现正确资源所需的所有信息。它没有消息正文。
- POST： 创建一个新资源。该请求有一个可选的有效负载，可帮助服务器创建新资源。
- PUT： 更新现有资源。该请求应该有一个可选的有效负载，以帮助服务器更新现有资源。
- DELETE： 删除现有资源。

>  `PUT` and `DELETE` are sometimes considered as specialised versions of the `POST `verb. In certain cases, `PUT` may be packaged as a `POST` request with the payload containing the exact action: create, update, or delete.

> 相较于POST,PUT是幂等的，这意味着可以多次进行相同的调用而不会产生不同的结果

- HEAD 类似于 GET，但没有消息体。它用于检索特定资源的服务器标头，通常通过时间戳检查资源是否已更改。
- TRACE用于检索请求在来自服务器的往返过程中所经过的跃点。每个中间代理或网关都会将其 IP 或 DNS 名称注入Via标头字段。这可用于诊断目的。
- OPTIONS用于检索服务器功能。在客户端，它可用于根据服务器支持的内容修改请求。


### 请求头字段
- Cache-Control: 控制缓存在 CDN、代理或浏览器中如何发生的指令。
- Connection：用于决定请求完成后是否需要关闭或打开网络连接。可能的值为keep-alive或closed。
- Accept- 前缀标头指示客户端上可接受的媒体类型、编码、语言和字符集。
- Authorization：客户端用于提供凭据，服务器可以进一步使用该凭据对请求进行身份验证。这对于访问受密码保护的资源很有用

## HTTP 响应
- 状态行：包括一个状态代码，指示请求是否成功（状态代码 200）或请求失败的原因。它还包括 HTTP 版本和非常简短的状态描述。
- headers：有关响应的附加信息——例如，内容类型或有关服务器的信息。 
- 正文（可选）：响应的内容。例如，这可能是所请求网页的 HTML 内容或图像的二进制数据。

### 响应头字段
...

### 状态码
- 1xx：信息性消息
- 2xx：成功
- 3xx：重定向
  - 304 not modified
- 4xx：客户端错误
  - 403 forbidden
  - 404 not found
- 5xx：服务器错误
  
> 304 ： 客户端有缓存情况下服务端的一种响应。
自从上次请求后，请求的网页未修改过。
服务器返回此响应时，不会返回网页内容。

客户端在请求一个文件的时候，发现自己缓存的文件有 Last Modified ，那么在请求中会包含 `If Modified Since `.
对于服务端，如果请求中包含 If Modified Since，就说明已经有缓存在客户端。服务端只要判断这个时间和当前请求的文件的修改时间就可以确定是返回 304 还是 200 。

## fetch & axios
``` js
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
});
  .then((response) => response.json())
  .catch((error) => console.log(error))
```

```js
axios.get(url)
  .then(response => console.log(response));
  .catch((error) => console.log(error));

axios.post({
  '/url', 
  { name: 'John', age: 22},
  { options }
})

const config = {
  url: 'http://api.com',
  method: 'POST',
  header: {
    'Content-Type': 'application/json'
  },
  data: {
    name: 'John',
    age: 22
  }
}
axios(config);
```

# HTTP 连接
## 连接过程
HTTP 使用可靠的 TCP 传输协议来建立此连接。默认情况下，Web 流量使用 TCP 端口 80。
- 通过 DNS 从主机名解析 IP 地址
- 与服务器建立连接
- 发送请求
- 等待回复
- 紧密连接

### 持久连接
在 HTTP/1.0 中，所有连接都在单个事务后关闭。
因此，如果客户端想要从同一服务器请求三个单独的图像，它会与远程主机建立三个单独的连接。
从上图中可以看出，这会引入大量网络延迟，从而导致用户体验欠佳。

`持久连接`: 即在客户端关闭它们之前保持打开状态的长期连接。
> Connection:keep-alive
持久连接是 HTTP/1.1 中的默认连接，建立单个事务连接需要客户端设置Connection: close请求标头。这告诉服务器在发送响应后关闭连接。

The benefits of using persistent connections are:

- avoid delays due to slow setup
- avoid slow start congestion during the adaptation phase
- ensure faster data transfer


## HTTPS
HTTPS 是 HTTP 的安全版本，在 HTTP 和 TCP 之间插入了一个额外的层，称为 TLS 或 SSL（分别为传输层安全或安全套接字层）。
默认情况下，HTTPS 通过端口 443 进行通信。

SSL 使用强大的加密形式，使用 RSA 和公钥加密。由于安全交易在网络上如此重要，因此基于标准的无处不在的公钥基础设施 (PKI) 工作已经进行了相当长的一段时间。

要使 Web 应用程序通过 HTTPS 工作，需要在服务器上部署一个有效的数字证书。（Web 服务器需要一个数字证书来识别自己。证书（或“证书”）由证书颁发机构 (CA) 颁发并保证您在网络上的身份）

> 当客户端通过 HTTPS 发出请求时，它首先尝试在服务器上查找证书。如果找到证书，它会尝试根据其已知的 CA 列表对其进行验证。如果它不是列出的 CA 之一，它可能会向用户显示有关网站证书的警告对话框。
验证证书后，SSL 握手完成，安全传输生效。

## HTTP 身份验证
- 请求标头：From、、Referer和——我们在本教程User-Agent的第 1 部分中看到了这些标头。
- Client-IP：客户端的IP地址。
- fat URL：通过修改 URL 并在每次点击时重定向到不同的 URL 来存储当前用户的状态；每次点击本质上都会累积状态。
- Cookies： 最流行和非侵入性的方法。

### cookies 
Cookies 允许服务器通过Set-Cookie响应标头附加任意信息以用于传出响应。
cookie 设置有一个或多个name=value对，由分号 ( ;) 分隔，如Set-Cookie: session-id=12345ABC; username=nettuts.

> 第一次请求时，服务器通过在响应头中设置Set-Cookie（客户端接到响应后会被询问是否允许cookie）
客户允许之后，cookie以小的文本文件形式（即纯文本），完全存在于客户端。当客户端要发送http请求时，浏览器会先检查下是否有对应的cookie。有的话，则自动地添加在request header中的cookie字段。

## HTTP缓存
HTTP 缓存至关重要，因为它减少了执行操作的带宽和成本。因此，它改善了一个人的在线体验。然而，在使用缓存功能时，重要的是要承认资源不会永远保持不变。

> 一个资源应该只在它有效之前被缓存。

从浏览器到源服务器，网络基础设施中的多个地方都使用了缓存。根据它所在的位置，缓存可以分为公共或私有：

### 缓存类型
有两种类型的缓存：

- 公共缓存：存储多个用户的服务器响应。这需要定制的基础设施，以允许用户多次访问流行的资源。
- 私有缓存：`仅限于单个用户。该资源将存储在用户的浏览器中。`当用户导航时，资源将被加载而无需多次访问服务器。缓存使内容可用，即使在用户离线时也是如此。通常缓存的数据包括用户名、密码、URL、浏览历史记录和 Web 内容。

`公共缓存被部署为服务器和客户端之间的缓存代理`。这些更大，因为它们服务于多个用户。
一种常见的做法是在客户端和源服务器之间保留多个缓存代理。这有助于提供经常访问的内容，同时仍然允许访问服务器以获取不经常需要的内容。

### 服务器响应和缓存
大多数时候，缓存仅限于`GET`请求。缓存键包含target URI和Request Method。在请求期间，服务器必须返回正确的响应头，以确保缓存经过仔细和准确的调整。它还有助于确保缓存没有过时的数据。

- 如果资源没有被修改，服务器应该返回一个304 Not Modified. 
- 如果资源被修改或过期，它应该生成一个新的响应200 OK。
- 如果一个资源被删除，服务器应该返回404 Not Found.，该资源将从缓存中删除。