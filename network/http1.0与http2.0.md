### HTTP的基本优化方向

+ 带宽

+ 延时

  + 浏览器阻塞：浏览器在同一时间对同一域名发出的请求有一定的数量限制，超出数量限制，请求会被阻塞；
  + DNS查询：DNS将域名解析为ip，从而建立连接。这个可以通过DNS缓存来减少瑕疵DNS查询的时间；
  + 建立连接：http基于tcp协议，因此每次建立连接都需要三次握手四次挥手，但这些连接无法复用，因此每次请求都要基于三次握手和慢启动。三次握手在高延迟的场景下影响明显，慢启动则对文件类大请求影响较大。

  > 慢启动：TCP会随着时间进行自我调节，起初会限制连接的最大速度，如果数据成功传输，会随着时间的推移提高传输速度。由于这种原因，让本就具有突发性和短时性的http连接变的十分低效。



#### HTTP/2相比HTTP1.0的改进

+ 多路复用(Mutiplexing) — 连接共享

  > 多个请求共享一个连接，每个request对应一个id，这样一个连接上可以有多个request，每个连接的request可以随机的混杂在一起，接收方根据每个request的id将request归属到各自的请求里。

  因此，多路复用可以很好的优化上面的延时的问题:http2.0下浏览器不会再限制请求的数量；http2.0让所有的数据流共用一个连接，可以更高效地使用tcp连接。

+ 首部压缩(header compression)

+ 服务端推送(server push)



#### 查看网站是否启用http2.0

> Chrome => NETWORK => Name右键栏 => 勾选protocol



#### REFRENCES

+ [HTTP,HTTP2.0,SPDY,HTTPS你应该知道的一些事](http://www.alloyteam.com/2016/07/httphttp2-0spdyhttps-reading-this-is-enough/)
+ [HTTP/2.0 相比1.0有哪些重大改进？](https://www.zhihu.com/question/34074946)
+ ​