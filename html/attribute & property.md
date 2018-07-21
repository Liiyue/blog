#### Attribute(特性)

> Attributes are defined by HTML, all the definitions inside HTML tag are attributes.

##### 定义

+ arrtibute被HTML定义，所有HTML内的描述节点都是attribute特性；
+ attribute总是String类型。

##### API

`<div id="test" class="button" custom-attr="1"></div>`

+ 获取特性:  `document.getElementById('test').getAttribute('class')`
+ 设置特性: `document.getElementById('test').setAttrbute('class', 'button-one')`
+ 获取所有特性: `document.getElementById('test').attributes`



#### Property(属性)

> Properties belong to DOM, the nature of DOM is a object in JavaScript.

##### 定义

+ property属性属于DOM对象
+ property可以为任何类型

##### API



#### attribute & property

+ 非自定义attribute与property存在1:1的映射关系；所以改变相应的attribute/property，对应的property/attribute也会跟着更改。

  `<div id="test" class="button" foo="1"></div>`

  ```
  var testDom = document.getElementById('test');

  testDom.id;  // return string: 'test';
  testDom.className;  // return string: 'button';
  testDom.foo;  // return undefinde;

  testDom.setAttribute('class', 'red-input');
  test.className;  // return string: 'red-input'
  testDom.className = 'green-input';
  test.getAttribute('class');  // return string: 'green-input'
  ```

+ 自定义且有初始值的attribute，不会随对应的property的值的改变而改变。

  ```
  <input id="search" value="foo" />
  ```

  ```
  var searchDom = document.getElementById('search');
  searchDom.value = 'foo2';
  searchDom.getAttribute('value'); // return string: "foo"

  searchDom.setAttribute('num', 'five');

  ```

#### Best Practice

在JavaScript中，更推荐使用property。

#### 注

+ 非自定义特性(non-custom attribute)也称bulit-in attribute,global attribute。具体属性如references-全局属性。
+ ​

#### REFERENCES

+ [What's the difference between HTML attribute and DOM property](http://joji.me/en-us/blog/html-attribute-vs-dom-property)
+ [全局属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes)



