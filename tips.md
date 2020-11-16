### JavaScript

+ 判断Dom是否含有某class

  `document.getElementById(‘xxx’).classList.contains(‘yyy’)`

+ 正则校验url

  [正则](https://zhuanlan.zhihu.com/p/73409780)

  ```
  // 需求：校验是否为kaola.com网址, 是否为http、https网址
  let url = 'http://m.kaola.com/activity/123.html'
  let urlReg = /^(https?):\/\/([\w-]+\.)*(kaola\.com).*$/;

  urlReg.test(url)
  ```

  正则表达式中：

  | 字符    | 描述                          |
  | ----- | :-------------------------- |
  | ？     | 匹配前面的子表达式零次或一次，或指明一个非贪婪限定符。 |
  | *     | 匹配前面的子表达式零次或多次。             |
  | +     | 匹配前面的子表达式一次或多次。             |
  | .     | 匹配除换行符 \n 之外的任何单字符。         |
  | [\w-] | 匹配任意字母和符号- (减号)             |

+ Array.prototype.toString()

  toString()方法返回一个字符串，该字符串由数组中每个元素的`toString()`返回值经调用`join()`方法连接组成。

+ Array.splice() | Array.slice()


       Array.splice()会修改原数组，而Array.slice()不会

+ [Anchor href Property](https://www.w3schools.com/jsref/prop_anchor_href.asp)

​    `<a>`标签的DOM Object的href属性返回的是完整的URL，包括协议头(比如 http://)。所以，即使href的值是相对路径，通过object.href取到的值也是完整的URL。

+ 如何获取字体大小[window.getComputedStyle](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)

  如果字体的font-size由样式表定义，则`document.getElementById('xxx').style.fontSize`会报""（空字符串）。可以使用`indow.getComputedStyle`来获取字体大小：

  `window.getComputedStyle(el,null).getPropertyValue('font-size')`
  
+ `Object.is()判断两个值是否是相同的值`

  与`==`的区别： `==`运算符会对它两边的操作数做隐式类型转换（如果它们类型不同），然后再进行相等性比较，但`Object.is`不会做这种转换。

  与`===`的区别：`===`运算符将数字`-0`与`+0`视为相等；并认为`NaN`与`NaN`不相等

  ```javascript
  Object.is(NaN, NaN);  // true
  NaN === NaN;  // false
  
  Object.is(+0, -0);  // false
  +0 === -0;  // true
  
  Object.is('1', 1);  // false
  '1' == 1;  // true
  '1' === 1;  //false
  ```

  

### CSS

+ calc与处理器(css)

  问题描述： 

  `min-height:calc(100vh -45px)`被css预处理器mcss解析为`min-height(55vh)`。

  解决方案：

  ```
  min-height: t('calc(100vh - 45px)')
  ```

+ Click 300ms 延时 [参考链接](http://qiudeqing.com/mobile_web/2016/05/21/mobile-browser-click-300ms-delay.html)

  解决方案：

  ```
    html {
        -ms-touch-action: manipulation;
            touch-action: manipulation;
    }
  ```

+ outline

  类似border,但outline不占空间，被描绘于内容之上；outline可以是非矩形。

+ overflow

  + overflow是默认是inherit，也就是说默认从父元素继承

  + viewport的overflow即使设置为visible也会被强制解释为auto[reference](https://www.w3.org/TR/CSS21/visufx.html#overflow)

    > The 'visible' value when used for the viewport must be interpreted as 'auto'. 

  + Overflow:scroll;内容会被裁剪

+ Display:none;与visibility:hidden;的区别

  + Display:none;会让元素从渲染

+ Writing-mode

  > 用途：文本垂直排布；元素垂直居中

  如何实现汉字+数字垂直：

  ```
  {
    writing-mode: vertical-rl;
    text-orientation: upright;
  }
  ```


  + [改变CSS世界纵横规则的writing-mode属性--张鑫旭](https://www.zhangxinxu.com/wordpress/2016/04/css-writing-mode/)
  + [writing-mode draft](https://drafts.csswg.org/css-writing-modes-3/)
  + [使用CSS实现文字的竖排](https://blog.csdn.net/wuyou1336/article/details/53414074)

+ 用css画一条0.5px的边框

  + [CSS3如何实现0.5边框](https://juejin.im/post/5aa7834051882555770c21f5)

+ 用css邮票边框

  + [css无图片技术总结](https://uedsky.com/2016-05/css-no-image/)
  + [10个demo示例学会CSS3 radial-gradient径向渐变](https://www.zhangxinxu.com/wordpress/2017/11/css3-radial-gradient-syntax-example/)
  + [[css3 邮票边缘风格](https://codepen.io/klovelovely/pen/aONmdJ)](https://codepen.io/klovelovely/pen/aONmdJ)

+ 去掉点击map里area的边框

  ```
  <img src="" usemap="#hotimg">
  <map name="hotimg">
      <area shape="rect" coords="" href="">
  </map>
  ```

  ie7及以上，加以下css

  ```
  img[usemap], map area{
      outline: none;
  }
  ```

  ie7以下，除以上css外再给img加'hidefocus:true;'属性：

  ```
  <img src="" usemap="#hotimg" hidefocus="true">
  ```

  + [Removing outline on image map area](https://stackoverflow.com/questions/4821724/removing-outline-on-image-map-area)
  + [html里，如何去掉点击map里area的边框](https://blog.csdn.net/new_gujiaming/article/details/24311995)

+ 禁止页面滑动


同时给body与html加overflow: hidden。只给其中任意一个加是没有用的

```
body, html{
  overflow: hidden;
}

document.body.style.overflowX = 'hidden';
document.getElementsByTagName('html')[0].style.overflowX = 'hidden';  
```



### Safety

+ XSS

  跨站脚本攻击，是代码注入的一种

  + [根据白名单过滤HTML(防XSS攻击)](https://github.com/leizongmin/js-xss)
  + 


+ CSRF

  跨站请求伪造；可以这么理解：攻击者盗取了你的身份信息，以你的名义发送恶意请求。

  + [浅谈CSRF](http://www.cnblogs.com/hyddd/archive/2009/04/09/1432744.html)
  + [面试大全 -- Safety](https://github.com/InterviewMap/InterviewMap/blob/master/Safety/safety-cn.md#csrf)

### Regular

+ 动态绑定class

  regular动态绑定class一共有两种方法：1.r-class;2.class="{}"

  1.r-class,属于对象表达式，每当值为真，添加对应的键作为class。可以用逗号隔开，添加多个class表达式

  ```
  <span r-class= { {'positive': tag.categoryAvg > 0, 'negative': tag.categoryAvg < 0 } }>                       
  </span>
  ```

  2.class="{}",暂时还没找到此种方法添加多个的方法，待之后研究

  ```
  <a class="{ filter === 'all'? 'selected' : '' }"  href="javascript:;">All</a>
  ```

+ 获取list中元素的index

  ```
  {#list as item}
  <div>{item_index}</div>
  {/list}
  ```

+ list track by

+ $watch —— 初始化即触发事件处理

+ 取computed的值

  This.$get('xxx')


### VUE

+ vue的生命周期

  创建实例： beforeCreated(), created()

  模板编译与挂载：beforeMounted(), mounted()

  组件更新: beforeUpdated(); updated()

  销毁组件：beforeDestroy(), destroyed()  这个钩子内可以移除事件监听

  + [vue2生命周期与钩子函数](https://segmentfault.com/a/1190000008010666)
  + [为什么要使用 el.destroy，而不在 unbind 钩子中直接移除监听？](https://vuejscaff.com/topics/153/why-use-eldestroy-instead-of-directly-listening-in-unbind-hooks)

+ Watch 的 val 与 oldVal相同问题

  >注意：在变异 (不是替换) 对象或数组时，旧值将与新值相同，因为它们的引用指向同一个对象/数组。Vue 不会保留变异之前值的副本。

  解决方法：

  ```javascript
  <div id="app">
    <input type="text" v-for="(person, index) in people" v-model="people[index].age" />
  </div>

  new Vue({
    methods: {
      setValue:function(){
        this.$data.oldPeople=_.cloneDeep(this.$data.people);
      },},
      mounted() {
        this.setValue();
      },
      el: '#app',
      data: {
        people: [
        {id: 0, name: 'Bob', age: 27},
        {id: 1, name: 'Frank', age: 32},
        {id: 2, name: 'Joe', age: 38}
        ],
        oldPeople:[]
      },
      watch: {
        people: {
          handler: function (after, before) {
          // Return the object that changed
          var vm=this;
          let changed = after.filter( function( p, idx ) {
            return Object.keys(p).some( function( prop ) {
             return p[prop] !== vm.$data.oldPeople[idx][prop];
           })
          })
          // Log it
          vm.setValue();
          console.log(changed)
        },
        deep: true,
      }
    }
  })
  ```


### Element-UI

+ 给组件加vue原生事件— .native

  ```html
  <el-input name="checkCode" type="text" @keyup.enter.native="handleLogin" v-model="checkCode" autoComplete="on" ></el-input>
  ```



### WEBPACK

+ 使用webpack替换文件常量

  解决办法：webpack.DefinePlugin

  ```js
  // 在webpack配置中添加
  new webpack.DefinePlugin({
  	'process.env.NODE_ENV': '"development"',
      'process.env.webSocket': '"192.168.0.193"'
  })

  // vuecli用法
  config.plugin('define').tap(definitions => {
      definitions[0] = Object.assign(definitions[0], {
          'process.env.NODE_ENV': JSON.stringify('development'),
      })
      return definitions
  })      

  ```

  ```js
  // 在js中使用
  export const webSocketUrl = `ws://${process.env.webSocket}/notice/websocket`;
  ```

  ```js
  // .eslintrc
  "globals": {
      "process.env.webSocket": true,
  }
  ```

+ [sass-resources-loader](https://github.com/shakacode/sass-resources-loader) 全局注册sass变量

  ```js
  // vue-cli webpack配置
  const oneOfsMap = config.module.rule('scss').oneOfs.store
  oneOfsMap.forEach(item => {
  	item
  		.use('sass-resources-loader')
  		.loader('sass-resources-loader')
  		.options({  
  			// Provide array of paths to the files with resources
  			resources: ['./src/scss/index.scss']
  		})
  		.end()
  })
  ```

+ mocker-api
+ [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) 可视化展示所有打包文件大小及占比

### Mac相关

##### mac自带中文输入法提示消失

```
pkill -f SCIM.app
```

##### 打开chrome调试台

```
command + option + i
```

##### 查看端口占用情况

Mac下使用lsof（list open files）来查看端口占用情况，lsof 是一个列出当前系统打开文件的工具。

使用 lsof 会列举所有占用的端口列表：

```
$ lsof
```

也可以使用 -i 查看某个端口是否被占用，如：

```
$ lsof -i:3000
```

如果端口被占用，则会返回相关信息，如果没被占用，则不返回任何信息。

##### 杀进程

`$ losf -i:3000`会显示其pid，要杀该进程，可以

```
$ kill pid
```

##### copy ssh

```
$ cd .ssh
$ ls
$ cp id_rsa.pub /Users/yinliyue/Desktop
```

##### 执行xxx.sh文件

+ 方法一：

  先cd到.sh所在文件目录；再执行命令： ./xxx.sh

+ 方法二：

  将xxx.sh文件拖入终端

##### [安装tree插件](https://www.jianshu.com/p/e038506da986)

##### 使用命令行修改文件

```
首先打开iTerm,切到文件所在的文件夹目录下

cd xx

然后进入编辑模式

vim xx.xx

然后插入修改

shift + i

修改之后退出插入模式

esc

保存退出

shift + :  wq

```

##### [git commit 后输入提交信息](https://www.cnblogs.com/wei325/p/5278922.html)

git 在pull或者合并分支的时候有时会遇到这个界面。可以不管(直接下面3,4步)，如果要输入解释的话就需要:

```
1.按键盘字母 i 进入insert模式

2.修改最上面那行黄色合并信息,可以不修改

3.按键盘左上角"Esc"

4.输入":wq",注意是冒号+wq,按回车键即可

```

##### chrome审查鼠标移入事件

鼠标移入后，按(command + shift + c)

### Linux

+ `cat`

+ `ls`

+ `ll`

  不是Linux下基本命令，是`ls -l`的别名，`Ubuntu`默认不支持该命令。

  结果说明：

  > drwxr-xr-x  2 root root 48 2013-11-27 16:34 test
  >
  > 文件属性  文件个数 拥有者  所属的组  文件大小  最后一次修改时间  文件名

+ du (disk usage)

  显示每个文件和目录的磁盘使用空间，也就是文件的大小。

  `du -h `  以K M G为单位显示，提高可读性。

  `du -h -d1` 只显示一级目录统计的空间占用。

### nginx

##### nginx -t

每次配完nginx，重启之前都需要测试当前nginx是否ok

##### nginx -s reload

nginx重启命令

##### nginx路径规则

location [ = | ~ | ~ * | ^~ ] /uri/ { … }

+ 以 `=` 开头，表示精确匹配

```
# 精确匹配，必须是127.0.0.1/
location = / {
  #规则A
}
# 精确匹配，必须是127.0.0.1/login
location = /login {
  #规则B
}
```

+ 以`^~`开头，表示uri以某个常规字符串开头，理解为匹配url路径即可
+ `~`开头，表示区分大小写的正则匹配
+ `~*`开头，表示不区分大小写的正则匹配
+ `!~`和`!~*`分别为`区分大小写不匹配`和`不区分大小写不匹配`的正则
+ `/`通用匹配，任何请求都会匹配到

匹配顺序：

```
多个location配置的情况下匹配顺序为：
首先匹配= ；
其次匹配^~；
再其次是按文件中顺序的正则匹配；
最后是交给 / 通用匹配；
当有匹配成功时候，停止匹配，按当前匹配规则处理请求。
```



### VSCode

+ [Jumpy](https://marketplace.visualstudio.com/items?itemName=wmaurer.vscode-jumpy) — 不用鼠标快速移动光标

+ [使用VSCode调试egg.js]([https://eggjs.org/zh-cn/core/development.html#%E8%B0%83%E8%AF%95](https://eggjs.org/zh-cn/core/development.html#调试))

  开启 VSCode 配置 `Debug: Toggle Auto Attach`，然后在 Terminal 执行 `npm run debug` 即可。

  [more](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)



### Xcode

+ 安装各个版本的ios

  Xcode — preferences — components

  [iOS 模拟器系统版本更改](https://www.jianshu.com/p/a59ea0fbefdb)

### webview踩坑

+ nodeList在ios10.2，android4.0以下，的原型链没有forEach方法。

  ```
  const nodelist = document.querySelectorAll('div');
  const nodelistToArray = Array.prototype.slice.call(nodelist);
  ```

+ jsbridge里的方法两端要一致，[jsbridge维护地址](http://doc.hz.netease.com/pages/viewpage.action?pageId=43580605)

### GIT 

[Git常用命令行](https://juejin.im/post/5eb2d6bce51d454d9d3ed14f?utm_source=gold_browser_extension)

+ 删除分支

  + 删除远程分支 `git push origin --delete hotfix_dynamicPicTailor`
  + 删除本地分支 `git branch -D hotfix_dynamicPicTailor `

+ 撤销commit

  `git reset --soft HEAD^ ` 只撤回commit操作，但代码还保留。

  如果只是commit注释写错了，只是想改下注释，只需要：`git commit --amend`

+ git hook: husky

+ [校验commit msg](https://note.youdao.com/share/?token=8542444B36394A1597277BAABF2B05D6&gid=47492751)

+ 给分支打tag

  标签是版本库的一个快照（实际上就是指向某个commit的指针）。那既然有commit为什么还要有tag呢？commit号是串随机字符串，而tag可以是有语义化的版本号，便于记忆与沟通。

  + 创建tag（一般是在master下）

    ```
    git tag -a v0.0.1 -m "v0.0.1"
    git push origin v0.0.1
    ```

  + 删除tag

    删除本地tag: `git tag -d v0.0.1`

    删除远程tag: `git push origin --delete v0.0.1`

### NVM

+ [设置默认版本](https://eric.blog/2016/08/23/set-default-node-version-with-nvm/)
+ 

### Charles

+ [mac端安装证书相关](https://blog.csdn.net/yarden0/article/details/78358299)
+ 

### TOMCAT

+ 基于域名的虚拟主机

  > 基于域名的虚拟主机，可以在同一个IP上配置多个域名并且都通过80端口访问

  如何访问：带Host头

  方法一： 配置host

  方法二：Modify Headers配置

  ```
  Name: Host
  Value: w.kl.126.net
  ```

### 其他

- json支持注释： json5

- [修改chrome浏览器的user agent](https://blog.csdn.net/dengpeng0419/article/details/53591525)

  机型选择 ==> edit ==> Devices ==> Add custom device 

  > 判断微信内置浏览器主要通过 MicroMessenger 字段

  ```
  Mozilla/5.0 (Linux; Android 4.4.4; HM NOTE 1LTEW Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36 MicroMessenger/6. 0.0.54_r849063.501 NetType/WIFI
  ```

- Typora图片显示过大
  + 如何插入图片`![]()`
  + 如何修改图片大小：修改markdown主题的.css文件。以Github主题为例：
    + 打开设置
    + 点击'open theme folder'
    + 打开文件夹下的'github.css'文件
    + 在文件中添加`img{zoom: 50%}`

- 调试安卓真机

  + [调试安卓真机](http://wiki.jikexueyuan.com/project/chrome-devtools/remote-debugging-on-android.html)
  + [chrome远程调试andriod真机 -- chrome官方文档](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/?hl=zh-cn)

- nunjucks在script标签中取变量

  ```
  var _env = '{{enviroment}}'
  ```


