### JavaScript

+ 判断Dom是否含有某class

  `document.getElementById(‘xxx’).classList.contains(‘yyy’)`

+ 正则校验url

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




### Element-UI

+ 给组件加vue原生事件— .native

  ```
  <el-input name="checkCode" type="text" @keyup.enter.native="handleLogin" v-model="checkCode" autoComplete="on" ></el-input>
  ```

  ​




### Mac相关

+ mac自带中文输入法提示消失

  ```
  pkill -f SCIM.app
  ```

+ 打开chrome调试台

  ```
  command + option + i
  ```

+ 执行xxx.sh文件

  + 方法一：

    先cd到.sh所在文件目录；再执行命令： ./xxx.sh

  + 方法二：

    将xxx.sh文件拖入终端

+ ​

  ​

### VSCode插件

+ [Jumpy](https://marketplace.visualstudio.com/items?itemName=wmaurer.vscode-jumpy) — 不用鼠标快速移动光标

### 其他

+ json支持注释： json5

+ nunjucks在script标签中取变量

  ```
  var _env = '{{enviroment}}'
  ```

  ​


### Xcode

+ 安装各个版本的ios

  Xcode — preferences — components

  [iOS 模拟器系统版本更改](https://www.jianshu.com/p/a59ea0fbefdb)

### webview踩坑

+ nodeList在ios10.2，android4.0以下，的原型链没有forEach方法。
+ jsbridge里的方法两端要一致，[jsbridge维护地址](http://doc.hz.netease.com/pages/viewpage.action?pageId=43580605)



nej转webpack

https://note.youdao.com/share/?token=EB1A52C50829484D8E1B440A4F6320ED&gid=12651257

https://github.com/imhype/nej-loader

### GIT

+ 删除远程分支 `git push origin --delete hotfix_dynamicPicTailor`
+ 删除本地分支 `git branch -D hotfix_dynamicPicTailor `

