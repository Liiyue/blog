关键字`inherit` `initial` `unset` 可以对任意css属性赋值。或者可以说这几个关键字是全局关键字，这几个关键字不会出现在CSS的合法值定义之中，是隐含可用的。

#### Inherit

本关键字表示，元素继承其父元素的属性值。有些CSS属性默认继承，比如`color` `font-family` ;有些则默认不继承，如`display` `margin` 。一个属性是否是默认继承，可以在[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference)查到。

###### 浏览器兼容性

![inherit](/Users/yinliyue/Desktop/inherit.png)

###### 默认可继承属性

+ 所有元素可继承：visibility 和 cursor
+ 内联元素可继承：letter-spacing、word-spacing、white-space、line-height、color、font、 font-family、font-size、font-style、font-variant、font-weight、text- decoration、text-transform、direction
+ 块状元素可继承：text-indent和text-align
+ 列表元素可继承：list-style、list-style-type、list-style-position、list-style-image
+ 表格元素可继承：border-collapse

#### Initial

本关键字表示，元素属性值为CSS规范定义的值。

###### 浏览器兼容性

![css-initial](/Users/yinliyue/Desktop/css-initial.png)



#### Unset

顾名思义，本关键字可以理解为对元素属性不设置任何值,但实际上，`unset`是`inherit`和`initial`的组合值。组合规则如下：

如果该属性是默认继承属性，则本关键字等同于`inherit`;如果不是，则本关键字等同于`initail`。



###### 浏览器兼容性

![unset](/Users/yinliyue/Desktop/unset.png)



#### References

+ [MDN-CSS属性值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Value_definition_syntax)
+ [MDN-CSS索引](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference)
+ [MND-unset](https://developer.mozilla.org/en-US/docs/Web/CSS/unset)
+ [MDN-inherit](https://developer.mozilla.org/en-US/docs/Web/CSS/inherit)
+ [MDN-initial](https://developer.mozilla.org/en-US/docs/Web/CSS/initial)
+ [The inherit, initial, and unset values](https://www.quirksmode.org/css/cascading/values.html)
+ [谈谈 CSS 关键字 initial、inherit 和 unset](http://web.jobbole.com/91110/)