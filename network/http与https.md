#### HTTP

> HTTP定义了与服务器的交互方式，其中最基本的有四种：GET,POST,PUT,DELETE（分别对应的查，改，增，删）

#### HTTP之URL



#### GET与POST的区别

+ 可否缓存:GET请求能缓存，POST不能；
+ 安全性：GET的请求参数直接放在URL上，POST将参数放到了body体中进行传输；GET会被浏览器缓存，POST不会。理论上说POST会更安全一点，但如果参数不加密的话，都是不安全的，随便抓个包，就能获取到数据；
+ 数据量：GET有数据大小的限制，而POST没有；
+ 幂等：GET是请求应该是幂等的，POST一般是非幂等的；
+ 副作用：GET请求一般是无副作用的，POST多用于有副作用的场景
+ URL有长度的限制，一定程度上会影响到GET请求。

> 幂等：发送N次和M次请求(M不等于N，且M和N均大于1)，服务器上资源的状态一致。

#### HTTPS

> HTTPS还是通过HTTP来传输信息，但信息通过TLS或SSL协议进行了加密



#### REFERENCES

+ [HTTP缓存](https://www.jianshu.com/p/ee67c6430243)
+ [HTTP缓存-MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching_FAQ)
+ [图解SSL/TLS协议](http://www.ruanyifeng.com/blog/2014/09/illustration-ssl.html)
+ [NTEWORK](https://github.com/KieSun/InterviewMap/blob/master/Network/Network-zh.md)
+ ​