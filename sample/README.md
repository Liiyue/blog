# kaola-mall-wap-fed
pop店铺前台h5工程

## 快速入门

### 依赖文档

+ [egg文档](https://eggjs.org/zh-cn/intro/index.html)
+ [kapp文档](http://seven-kl.netease.com/docs/18288/)
+ [vue文档](https://cn.vuejs.org/v2/guide/)
+ [@kaola/core](http://seven-kl.netease.com/docs/11046/#/?id=kaola-core)
+ [mobile-ui文档](http://seven-kl.netease.com/docs/19655/#/)

### 依赖安装

```bash
cd server                        # 到/server路径下
npm install --registry=http://rnpm.hz.netease.com/ # 项目第一次安装或依赖升级
cd client                        # 再到/client路径下
npm i
```

### 工程启动
```bash
cd server                        # 到/server路径下

# 以下命令根据不同需要选择一个：
node app-debug                   # 本地mock模式
node app-debug -e test1jd        # 本地连到测试环境test1jd，不开启jsonrpc相关
node app-debug -e test1jd -r     # 转发部分走test1jd环境，并开启jsonrpc。因为开启jsonrpc要开启zk，disconf等，需要连kaolatestvpc vpn，为满足大部分场景，默认情况不开启
```

### client 目录

```
├── client
	├── vue.config.js // webpack配置
	├── src
	│	├── assets // 静态资源
	│	│	├── images // 图片(一般不用，自行上传到nos)
	│	│	└── scss // 包含公共样式等
	│	├── components // 组件
	│   │   ├── base // 公共组件
	│   │   ├── ui // ui组件
	│   │   └── ... // 对应页面组件
	│	├── directives // 指令
	│	├── filters // 过滤器
	│	├── framework // 入口loader + plugin (默认加入axios)
	│	├── mixins // 混合
	│	├── pages // entry 入口
	│	├── store // vuex
	│	└── utils // 公共方法
	└── templates
	│	├── common // 公共页面
	│	│	├── ERROR_404.html
	│	│	└── ERROR_404.html
	│	├── pages // 入口对应模板
	│	└── pages.js // 页面标题等一些配置
	
```

### 单页配置(Spa) 

入口.vue文件只能有一个，并且有router/router.js，才会被加载陈单页

注意: 入口.vue文件首字母需要大写

```
├── pages
	├── beauty // 美妆
    │	├── App.vue // 入口文件App.vue(推荐App.vue)
	│	├── router
    │	│	├── router.js // 路由(文件名固定)
	│	├── view // 各个spa页面
    │	│	├── beautyBaby.vue 
    │	│	└── beautyMarket.vue
    │	└──	plugin // 页面plugin
    │	│	└── index.js // 文件名固定
```

##### store 规则

```
├── pages
	├── beauty
├── store
	├── beauty
    │	├── store.js // 文件名固定
```

##### 单页模板

```
├── src
	├── pages
    │   └── beauty
├── templates
	│   ├── pages
	│   │   ├── beauty
	│   │   │	├── index.html // 文件名固定
	│	│   ├── index.html // 不给入口配置模板，默认使用index.html
	│   └── pages.js // 通过htmlwebpackplugin配置一些变量，如title

// pages.js
{
    beauty: {
        title: '美妆母婴',
        useAntiCheck: true
    }
}
```



### 多页配置(Multi page)

入口有多个.vue文件，不会读取router文件

```
├── pages
	├── idol
    │	├── Index.vue 
    │	├── IdolRank.vue
    │   ├── plugin
    │	│   ├── index.js
    │	│   ├── idolRank.js
	
```



##### store

```
├── pages
	├── idol
	│	├── Index.vue 
    │	└── IdolRank.vue
├── store
	├── beauty
    ├── idol
	│	├── index.js 
    │	└── idolRank.js
```



##### 多页模板

```
├── src
	├── pages
        ├── idol
        │	├── Index.vue 
        │	└── IdolRank.vue
├── templates
	│   ├── pages
	│   │   ├── idol
	│   │   │	├── index.html 
	│   │   │	└── idolRank.html
	│	│   ├── index.html // 不给入口配置模板，默认使用index.html
	│   └── pages.js // 通过htmlwebpackplugin配置一些变量，如title

// pages.js
{
    'idol/index': {
        title: '粉丝首页',
        useAntiCheck: true
    },
    
    'idol/idolRank': {
        title: '偶像榜单',
        useAntiCheck: true
    },
}
```




### 单元测试

运营组粽子分享过一篇很全的kapp单测[传送门](http://doc.hz.netease.com/pages/viewpage.action?pageId=167307850)


### gitlab.ci接入
[http://seven-kl.netease.com/docs/21763/#/ci_notice/](http://seven-kl.netease.com/docs/21763/#/ci_notice/)
[https://note.youdao.com/share/?id=ce91eda091b605c23fc3b7f534fab886&type=note#/](https://note.youdao.com/share/?id=ce91eda091b605c23fc3b7f534fab886&type=note#/)