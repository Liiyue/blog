### JavaScript

+ 判断Dom是否含有某class

  `document.getElementById(‘xxx’).classList.contains(‘yyy’)`



### CSS

+ ​

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

+ 如何获取computed的值

+ 获取list中元素的index

  ```
  {#list as item}
  <div>{item_index}</div>
  {/list}
  ```

+ list track b​​y



### Mac相关

+ mac自带中文输入法提示消失

  ```
  pkill -f SCIM.app
  ```

  ​