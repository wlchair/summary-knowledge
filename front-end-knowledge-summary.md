
#前端工作面试问题

本文包含了一些用于考查候选者的前端面试问题。不建议对单个候选者问及每个问题 (那需要好几个小时)。只要从列表里挑选一些，就能帮助你考查候选者是否具备所需要的技能。

**备注：** 这些问题中很多都是开放性的，可以引发有趣的讨论。这比直接的答案更能体现此人的能力。

## <a name='toc'>目录</a>

  1. [常见问题](#general-questions)
  1. [HTML 相关问题](#html-questions)
  1. [CSS 相关问题](#css-questions)
  1. [JS 相关问题](#js-questions)
  1. [测试相关问题](#testing-questions)
  1. [效能相关问题](#performance-questions)
  1. [网络相关问题](#network-questions)
  1. [代码相关问题](#coding-questions)
  1. [趣味问题](#fun-questions)

#### <a name='general-questions'>常见问题：</a>

* *你在昨天/本周学到了什么？*
* *编写代码的哪些方面能够使你兴奋或感兴趣？*
* *你最近遇到过什么技术挑战？你是如何解决的？*
* **在制作一个网页应用或网站的过程中，你是如何考虑其 UI、安全性、高性能、SEO、可维护性以及技术因素的？**
> 安全性：[https://www.cnblogs.com/vajoy/p/4176908.html](https://www.cnblogs.com/vajoy/p/4176908.html "https://www.cnblogs.com/vajoy/p/4176908.html")

* *请谈谈你喜欢的开发环境。*
* *你最熟悉哪一套版本控制系统？*
* **你能描述当你制作一个网页的工作流程吗？**
* **假若你有 5 个不同的样式文件 (stylesheets), 整合进网站的最好方式是?**
* **你能描述渐进增强 (progressive enhancement) 和优雅降级 (graceful degradation) 之间的不同吗?**
> 增强：
> `--webkit-transition: 0.5s`
> `transition: 0.5s`
> 
> 降级
> `transition: 0.5s`
> `--webkit-transition: 0.5s`
> 多数情况下都是以业务优先的原则，满足用户基本使用，给更高级的设备用增强体验

* **你如何对网站的文件和资源进行优化？**

> 文件：
> 压缩，减小体积，把文件分割为适量大小
> 按需加载，懒加载
> 除了第一屏之外的文件，使用异步加载
> 
> 图片：使用svg或者精灵图，data uri
> 
> 网络：
> 文件放在不同域下，提升加载速度
> 利用浏览器缓存快速加载
> 用增量更新

* **请说出三种减少页面加载时间的方法。(加载时间指感知的时间或者实际加载时间) load ready domready**
* *如果你参与到一个项目中，发现他们使用 Tab 来缩进代码，但是你喜欢空格，你会怎么做？*
* **请写一个简单的幻灯效果页面。**
* *如果今年你打算熟练掌握一项新技术，那会是什么？*
* **请谈谈你对网页标准和标准制定机构重要性的理解。**
* **什么是 FOUC (无样式内容闪烁)？你如何来避免 FOUC？**
* **请解释什么是 ARIA 和屏幕阅读器 (screenreaders)，以及如何使网站实现无障碍访问 (accessible)。**
* **请解释 CSS 动画和 JavaScript 动画的优缺点。**
* *什么是跨域资源共享 (CORS)？它用于解决什么问题？*

#### <a name='html-questions'>HTML 相关问题：</a>

* **`doctype`(文档类型) 的作用是什么？有几种声明`docytpe`的模式？他们之间的区别是是什么**

> * 通知浏览器使用什么标准解读HTML代码
> * doctype 种类，每个种类都是有4.0和1.0两个版本，其中的区别就在于使用的是什么样的规则。
> * 1.0用的是**xhtml**标准，4.0用的是**html**标准。
>
> |         | 包含表现性标签，弃用标签 | 允许框架集 |
> | ------- |:----------------------:| ---------:|
> | 框架标准 |           √            |      √   |
> | 过渡标准 |           √            |      ×   |
> | 严格标准 |           ×            |      ×   |
>
> * 这些模式都是基于`SGML`标准的声明，这些标准是它的一个衍生分支
> * H5已经不再遵循`SGML`标准，所有不需要在声明这些标准。
>
> * **后续产生的问题：`SGML`是什么？H5不再遵循它的标准，H5现在按照什么标准执行的？为什么不遵循了？有什么新特性？**

* **浏览器标准模式 (standards mode) 、几乎标准模式（almost standards mode）和怪异模式 (quirks mode) 之间的区别是什么？**

> * 几乎标准模式，是现在多数浏览器实现的一种方式，原文：
> `Firefox, Safari, Chrome, Opera (since 7.5), IE8, IE9 and IE10 also have a mode known as “the Almost Standards mode”, which implements the vertical sizing of table cells traditionally and not according to the CSS2 specification. Mac IE 5, Windows IE 6 and 7, Opera prior to 7.5 and Konqueror did not need an Almost Standards mode, because they didn’t implement the vertical sizing of table cells according to the CSS2 specification in their respective Standards modes anyway. In fact, their Standards modes are closer to the Almost Standards mode than to the Standards mode of newer browsers.
In retrospect, the Web would have been better off by not having the distintion between Standards and Almost Standards, having the Almost Standards behavior as the default and having a CSS property for opting into the behavior that is the default in the Standards mode. Still, you should use the Standards mode—not the Almost Standard mode.`
> * 标准和怪异模式**不同**
>  * `css`方面：
>   * 标准把`content width/height` 作为`element width/height`
>   * 怪异把`content width/height + border + padding` 作为 `element width/height`
>  * `js`方面：
>   * IE浏览器下面的`document.all`属性
>   
> * **通知**浏览器使用什么模式方法：
>  * `doctype`声明，告诉浏览器解析标准，在声明和不同的浏览器的双重作用下，执行的标准是不同的，具体的参考表：[https://hsivonen.fi/doctype/](https://hsivonen.fi/doctype/)
>  * 在`css`里写`box-sizing:content-box`，这种方法可以使盒模型和一些`from`的元素属性，统一成一种模式解析。但是，它的不足之处在于，在old浏览器下面的兼容性问题（IE6，7，8）,所以还需要hack
>   
> * **确认**浏览器解析方式：
>  * `window.top.document.compatMode`
>  * `jquery`也提供了方法
>  
> * **题外提示**：
> * 国内的浏览器通过`renderer`标签，调用不同的内核渲染
> * `<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">`告诉浏览器调用内核标准的等级,针对IE浏览器
>
> * **总结**：两种方法结合优先使用，`doctype`解决大多数浏览器的标准问题，`box-sizing`解决浏览器中`form`中元素盒模型不统一的问题。
> * **参考资源**：
> * 标准和怪异模式区分doctype：[http://www.frontopen.com/1385.html](http://www.frontopen.com/1385.html)
> * `box-sizing`解决方式：[http://www.w3cplus.com/content/css3-box-sizing](http://www.w3cplus.com/content/css3-box-sizing)

* *HTML 和 XHTML 有什么区别？*

> * XHTML更符合`XML`的写法，需要闭合标签，HTML要求没有那么严格，解析会自行闭合标签。

* **如果页面使用 'application/xhtml+xml' 会有什么问题吗？**

> * **好处**：
> * 在语法出现错误时，网页中会提示具体哪行代码错误，方便网页调整。帮助开发者确认语法是否正确js，css都有
> * **缺点**：
> * 兼容性：在IE6，7，8下面不兼容写法，打开后会报错，低浏览器只支持text/html形式
> * 代码上，它会把代码通过`js`解释器将特殊符号（<,>）转义，造成页面内的`js`代码无法执行。
> * 如果不让它转义，需要加入`<!CDDATA[])`的`XML`的注释方式，同时要是改成`text/html`又无法执行代码。
> * **参考资源**：
> [http://www.cnblogs.com/sink_cup/archive/2010/01/14/javascript_CDATA_w3c.html](http://www.cnblogs.com/sink_cup/archive/2010/01/14/javascript_CDATA_w3c.html)

* **如果网页内容需要支持多语言，你会怎么做？**

> * js可维护性：
>  * 代码内的文本，提示信息
>  * 与后台交互反馈的文本处理
>  * 多个js同时维护的成本
>
> * SEO处理：
>  * `lang`声明处理
>  
> * UI处理：
>  * 当字体形式不同，需要让页面自适应
>  * 图片宣传
>  
> * 单页面应用SPA，性能：
>  * 很多种语言同时加载时，产生的加载性能
>  
> * **处理方式**：
>  * 做语言转换对照表，用变量代替直接返回文本
>  * 反馈文本用代码代替，根据代码查找对应的方式
>  * 根据不同的结果，同搜索引擎搜索
>  * 根据不同的字体，设计UI样式，同时把样式设置为`word-break`，让页面字体自适应
>  * 可以自己设定规则，进行替换，例如：`cn-pic.jpg, en-pic-.jpg, kr-pic@2.jpg`

* **使用 `data-` 属性的好处是什么？**

> * 在以往的`js`中，对dom操作时需要在代码里存很多数据，以对dom节点进行描述，造成代码量大不易维护。
> * 有些网页也在网页中使用了自定义，但是都是自己定制规则，很容易造成`js`代码定义的属性和自定义属性冲突，覆盖
> * H5中引入，标准化的自定义属性，改变了这个现状，同时进行了规范，标准化。也让网页可读性增强了

* **如果把 HTML5 看作做一个开放平台，那它的构建模块有哪些？**

> * 主体：`header, nav, artcile, section, aside, footer`

```javascript
    <header></header>
    <nav></nav>
    <article><section></section></article>
    <aside></aside>
    <footer></footer>
```

* **请描述 `cookies`、`sessionStorage` 和 `localStorage` 的区别。**

> * `cookies`：
> * 作用：存储用户信息，比如：登陆用户ID，有过期时间，会随着请求来回发送在客户端和服务器之间
> * 字符限制：4k
> * `sessionStorage`:
> * 作用：存储当前页面的本地信息，当前页面关闭时，信息会及时丢失
> * 字符限制：每个浏览器实现的大小不一致，最大是5M，计算方法，参考：[https://www.uis.cc/2014/11/02/localStorage-sessionStorage/](https://www.uis.cc/2014/11/02/localStorage-sessionStorage/)
> * `localStorage`
> * 作用：存储网站的本地信息，会一直保存浏览器中，没有过期时间
> * 字符限制：同sessionStorage一致
> 更详细参考：[https://segmentfault.com/a/1190000002723469](https://segmentfault.com/a/1190000002723469)


* **请解释 `<script>`、`<script async>` 和 `<script defer>` 的区别。**

> |         | 顺序加载 | 延迟加载 |
> | ------- |:-------:| -------:|
> | 立即执行 |   正常   |  defer  |
> | 延后执行 |  async  |         |
>
> * 代码执行顺序：defer > DOMContentLoaded > async > load
> * 在`requirejs`中，利用`async`的特性，后续加载时用到了async
> * `defer`不存在兼容性问题，`async`是h5的新属性

* **为什么通常推荐将 CSS `<link>` 放置在 `<head></head>` 之间，而将 JS `<script>` 放置在 `</body>` 之前？你知道有哪些例外吗？**

> * 页面解析的顺序是head到body的，把css先执行为HTML渲染结果坐铺，放出出现闪屏和二次渲染
> * js加载造成阻塞，让页面断片或白屏，在执行时可能会改变HTML结构造成重构或重绘，在页面还没有加载完全之前，会造成html结构读取不到或者多次渲染，降低性能
> * **特殊情况**：加载的js的执行结果，会对后续的执行影响，需要提前判断的，就要放到head里面。
> * 例如：考虑浏览器的兼容性问题，根据不同浏览器会加载不同的js或者css代码，需要在开始就判断加载规则，需要把js放在head里。

* **什么是渐进式渲染 (progressive rendering)？**

> * 图片的渲染是分为上下和渐进式的，
> * 普通方式，优势：显示出来就是清晰的。
> * 渐进式，优势：逐渐出现，提高用户体验。不会改变页面的结构（通过其他方式可让普通方式也能做到），防止重排页面。

* **你用过哪些不同的 HTML 模板语言？**

> * 关于这个几种模板的具体优劣还需要继续研究，实践。关于评论中的讨论，还需要深入体会。结合react、vue、reagular
> 
> * 参考资料
>  * 详细的介绍几种区别：[http://www.html-js.com/article/Regularjs-Chinese-guidelines-for-a-comprehensive-summary-of-the-front-template-technology](http://www.html-js.com/article/Regularjs-Chinese-guidelines-for-a-comprehensive-summary-of-the-front-template-technology)

#### <a name='css-questions'>CSS 相关问题：</a>

* **请问 "resetting" 和 "normalizing" CSS 之间的区别？你会如何选择，为什么？**

> * `resetting`的目标：
> * 把浏览器自带的样式全部重置，开发人员可以把网页当做一张白纸，不需要考虑各个浏览器出来的结果是否会有不一致的表现。这个思路看似完美的避开了`css`在不同浏览器下的问题（现在浏览器的默认值差异越来越小）
> * 但，也引发了另一些问题，如果把所有的样式都去掉，有些标签的有用样式也会被干掉，例如：`h1,h2,h3{margin:0,padding:0}`这类写法，反而造成了页面渲染的问题。
> * 把大批量的样式重置，加大开发者的工作量，也造成了一些性能问题，代码调试更为困难
>
> * `normailing`,顺应了浏览器的一些现状，把开发者一致认为不满意的地方进行修改，其余根据项目不同而做的工作留给开发者。
> * 其他优势：
>  * 修复了一些浏览器的bug（需要把bug列出来，仔细去研究学习）
>  * 采用小范围的调整，让调试代码时，不会出现多层继承调试的问题
>  * 把代码拆解了，取其所需，以免无脑者，原封照搬
>  normalize地址：[http://nicolasgallagher.com/about-normalize-css/](http://nicolasgallagher.com/about-normalize-css/)
>  resetting被吐槽：[http://www.zhangxinxu.com/wordpress/2010/04/css-reset%E7%9A%84%E9%87%8D%E6%96%B0%E5%AE%A1%E8%A7%86-%E9%81%BF%E5%85%8D%E6%A0%B7%E5%BC%8F%E9%87%8D%E7%BD%AE/](http://www.zhangxinxu.com/wordpress/2010/04/css-reset%E7%9A%84%E9%87%8D%E6%96%B0%E5%AE%A1%E8%A7%86-%E9%81%BF%E5%85%8D%E6%A0%B7%E5%BC%8F%E9%87%8D%E7%BD%AE/)
> * *个人认为两个思想都没有问题，看你项目是否需要那样的条件，理解发起者的初衷，适度使用*

* **请解释浮动 (Floats) 及其工作原理？列举不同的清除浮动的技巧，并指出它们各自适用的使用场景？**

> * `float`属于流里面的特殊类型（总共三种类型：普通，浮动，绝对定位）
> * 特性：
>  * 它会在流里面产生向左或向右的浮动，同时与普通的内联元素影响，产生被包围的效果
>  * 改变原始元素`display`属性，变为块级元素
> * 缺陷：
>  * 其他块级元素会无视这个元素，造成遮盖的情况
>  * 父普通流出现`高度塌陷`的情况，因为父元素不会把`float`元素的宽、高计算在内
> * 清除浮动方式：
>  * 清除浮动：`clear`方式，在浮动结尾处或下个元素上加入`clear`属性，防止上面带来的影响。但是不能解决高度塌陷的问题
>  * 闭合浮动：使用overflow、display方式，创建一个BFC环境
> * 使用场景：
>  * 在不支持BFC的环境中，使用清除浮动
```javascript
    /*在不支持after的环境中，触发haslayout来清除浮动*/
    .clearfix{
        *zoom: 1;
        display: block;
    }
    /*触发BFC环境，让元素闭合浮动*/
    .clearfix{
        display: inline-block;
    }
    /*使用尾部加入标签，对元素清除浮动*/
    .clearfix:after{
        clear: both;
        content: '';
        display: block;
        height: 0;
        visibility: hidden;
    }
```
> * 参考资料：
> * 解释，清除和闭合的区别：[https://segmentfault.com/q/1010000000732608](https://segmentfault.com/q/1010000000732608)
>  * W3C说明：[https://www.w3.org/TR/css3-box/#block-level0](https://www.w3.org/TR/css3-box/#block-level0)
>  * 各种方法解释：[http://www.zhihu.com/question/19915431](http://www.zhihu.com/question/19915431)
>  * 涉及到了positon：[http://www.cnblogs.com/vitruvi/p/4303891.html](http://www.cnblogs.com/vitruvi/p/4303891.html)


* **描述`z-index`和叠加上下文是如何形成的。**

> * 显示顺序： `层叠上下文 < z-index: 负值 < block块级元素 < float浮动元素 < inline | inline-block <
> z-index: auto | 0（position的元素） < z-index: 正值`
> 
> * 把元素变为层叠元素的属性：
>
>>    z-index值不为auto的flex项(父元素display:flex|inline-flex)
>>    
>>    元素的opacity值不是1.
>>   
>>   元素的transform值不是none.
>>   
>>   元素mix-blend-mode值不是normal.
>>   
>>   元素的filter值不是none.
>>   
>>   元素的isolation值是isolate.
>>   
>>   will-change指定的属性值为上面任意一个。
>>   
>>   元素的-webkit-overflow-scrolling设为touch.
>    
> * 参考资料：
>  * 博客讲解：[http://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/](http://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/)
>  * 官方解释：[https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context)
>  * z-index解释：[z-index](http://www.cnblogs.com/ForEvErNoME/p/3373641.html "z-index")


* **请描述 BFC(Block Formatting Context) 及其如何工作。**

> 块级元素上下文
> 触发这个情况后，它会变化元素的状态。形成一个不影响context以外的作用范围
> 
> * 特性：
> - 块级格式化上下文会阻止外边距叠加
> - 块级格式化上下文不会重叠浮动元素
> - 块级格式化上下文通常可以包含浮动


* **请解释 CSS sprites，以及你要如何在页面或网站中实现它。**

> * 把多张图片压缩至一张图片内，好处很多。自行百度吧
> * 实现工具：
>  * 腾讯：[http://www.99css.com/1524/](http://www.99css.com/1524/)
>  * grunt下：[https://github.com/Ensighten/grunt-spritesmith](https://github.com/Ensighten/grunt-spritesmith)
>  * github上：[https://github.com/aslansky/css-sprite](https://github.com/aslansky/css-sprite)
>  这个东西器用来相对简单


* **你最喜欢的图片替换方法是什么，你如何选择使用。**

> * 目的：SEO优化，方便搜索引擎抓取文本
> * 实现原则：
>  * 图片作为背景充满元素显示区
>  * 文字在外框元素内，但不能显示
> * 实现：
>  * 图片，直接设置为背景图
>  * 图片，加入单独元素，放在外框内
>  * 文本，使文本推至浏览器可视范围以外
>  * 文本，让文本的高度为0
> * 使用原则：
>  * 还没有想好...

**JPG,PNG,GIF,WEBP，这些图片格式如何使用**
> * 优劣：
>> * JPG用于高质量的图片，但是压缩会有损
>> * PNG在8位色彩的图片，完全胜任，无损，但是颜色不能超过256色
>> * GIF有独特的动图，不然就没有用了
>> * WEBP，目前最好的网络传输图片方法，但是只在google的产品上能用
>> * BASE64，直接通过数据流形式传入，减少HTTP请求
>
> * 参考资料：
>> * 对比：[http://www.cnblogs.com/diligenceday/p/4472035.html](http://www.cnblogs.com/diligenceday/p/4472035.html "http://www.cnblogs.com/diligenceday/p/4472035.html")
>> * WEBP独特演示：[https://www.zhihu.com/question/27201061/answer/35637827](https://www.zhihu.com/question/27201061/answer/35637827 "https://www.zhihu.com/question/27201061/answer/35637827") 

* **你会如何解决特定浏览器的样式问题？**
*
* **如何为有功能限制的浏览器提供网页？**
  * **你会使用哪些技术和处理方法？**


* **有哪些的隐藏内容的方法 (如果同时还要保证屏幕阅读器可用呢)？**

> * 隐藏的方法：
>  * display:none，屏幕不可用，pass
>  * visibility:none，隐藏还占位，pass
>  * overflow：hidden，可以用
>  * text-indent:100%| -9999，可以用
>  * magin:-9999，可以用
>  * height:0，可以用
>  * font-size：0，可以用
>  * color:背景色一致，可以用

* **你用过栅格系统 (grid system) 吗？如果使用过，你最喜欢哪种？**
* **你用过媒体查询，或针对移动端的布局/CSS 吗？**

> 参考链接：[http://www.zhangxinxu.com/wordpress/2015/02/css-deep-understand-flow-bfc-column-two-auto-layout/](http://www.zhangxinxu.com/wordpress/2015/02/css-deep-understand-flow-bfc-column-two-auto-layout/)

* **你熟悉 SVG 样式的书写吗？**
*
* **如何优化网页的打印样式？**
*
* **在书写高效 CSS 时会有哪些问题需要考虑？**

> * 考虑两方面：性能，可维护性
> * 性能：
>>  * 文件体积
>> * 层级嵌套不超过4层
>> * 继承属性
>> * 选择器权重
>
> * 可维护性
>> * 模块命名标准
>> * 提取公共结构
>> * 属性顺序
>
> * 方法论
>> * OOCSS，结构与样式分离，容器和内容分离 (语义化)
>> * SMACSS，把页面切分为多个大结构，BASE, LAYOUT, MODULE, STATE, THEME (整体布局)
>> * BEM，命名递增，block-element__modifier，例如：#nav-knowledge__item (命名冲突)
>
> * 参考资料
>> * 不同规范解读：[https://segmentfault.com/a/1190000000389838](https://segmentfault.com/a/1190000000389838 "https://segmentfault.com/a/1190000000389838")
>> * 考虑面和方法论：[https://www.zhihu.com/question/19886806](https://www.zhihu.com/question/19886806)
>> * 深入细节选择器：[http://blog.jobbole.com/35339/](http://blog.jobbole.com/35339/)

* **使用 CSS 预处理器的优缺点有哪些？请描述你曾经使用过的 CSS 预处理器的优缺点？**

> * 预处理特性
>  * 把`css`赋予编程语言：变量、混合、函数、继承。减少代码的冗余，易于维护、扩展
>  
> * 各种预处理器的特性
>> * ~~**Less**~~
>> * ~~**Sass**~~
>> * ~~**Styleus**~~
>
> * 参考资料：
>  * 不同预处理器对比：[http://efe.baidu.com/blog/revisiting-css-preprocessors/](http://efe.baidu.com/blog/revisiting-css-preprocessors/)

* **CSS模块化的优势、实现**

> * 在复杂页面上，不用在考虑样式是否会重复，互相影响的问题
> * 实现
>> - 使用webpack的css-loader，在js代码中实现${style.element}结构
>> - 通过extract-text插件，提取出生成的文件
>
>> 参考资料
>> * 如何在项目中实现：[https://www.w3cplus.com/css/solve-your-specificity-headaches-with-css-modules.html](https://www.w3cplus.com/css/solve-your-specificity-headaches-with-css-modules.html "https://www.w3cplus.com/css/solve-your-specificity-headaches-with-css-modules.html")

* **如果设计中使用了非标准的字体，你该如何去实现？**

> * 作用
>  * 帮助网页实现自定义的字体效果，一般用来网页的icon，特殊的网站增加效果，例如：http://www.trashpack.com/us/products/（和谐网络打开很慢）
>  
> * 注意
>  * 不要用中文自定义字体，会很影响加载性能。效果等同于图片
>  * 4种字体的兼容性不同，需要同时对应
>  
> * 参考资料
>  * 介绍很全：[http://www.w3cplus.com/content/css3-font-face](http://www.w3cplus.com/content/css3-font-face)

* **请解释浏览器是如何判断元素是否匹配某个 CSS 选择器？**

> * `css`的匹配原则
>>  * 权重高的优先
>> * 离得近的优先
>> * **权重**作用大于**离得近**
>  
> * 权重顺序
>  * important > 行内(1000) > id(100) > class、属性、伪类(10) > tag、伪元素(1)
>  
> * 性能顺序
>  * id > class > tag > 相邻(h1+p) > 子集(ul > li) > 后代(li a) > 通配(*) > 属性(a[rel="external") > 伪(a:hover,li:nth-child)
>   
> * 参考资料
>  * 选择器类型：[http://www.w3cplus.com/css3/basic-selectors](http://www.w3cplus.com/css3/basic-selectors)
>  * 选择器兼容性：[https://kimblim.dk/css-tests/selectors/](https://kimblim.dk/css-tests/selectors/)
>  * 选择器性能：[http://www.w3cplus.com/css/css-selector-performance](http://www.w3cplus.com/css/css-selector-performance)
>  * 选择器lint工具：[http://csslint.net/](http://csslint.net/)
>

* **请描述伪元素 (pseudo-elements),伪类有哪些 及其用途。**

> * 伪元素
>  * before，after，first-letter，first-line，selection，backdrop
>  
> * 伪类
>  * link，hover，active，visited
>  
> * 用途
>  * 装饰内容，例如：加入图标，加入说明内容
>  * 清除浮动，例如：`clearfix`
>  * 伪类功能很明显，就不说了

* **请解释你对盒模型的理解，以及如何在 CSS 中告诉浏览器使用不同的盒模型来渲染你的布局？说明使用它有什么好处**

> * 作用
>  * `box-sizing`来告诉浏览器模式`border-box`或`content-box`
> * 好处
>  * 在有多种渲染模式时，指定css模式，方便布局
> * 缺陷
>  * 在IE6，7上，不能识别`box-sizing`模式，所以它起不到作用，也改变不了网页的布局方式。兼容6,7的方式一般来说还是hack补丁方式

* **请罗列出你所知道的 display 属性的全部值?请解释 inline 和 inline-block 的区别?**

> * block，inline-block，none，table，inline-table，inline,table-cell
> * inline是内联元素，inline-blokc是具有内联属性的块级元素
> * 内联元素和块级元素区别：[https://developer.mozilla.org/zh-CN/docs/Web/HTML/Inline_elemente](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Inline_elemente)

* **请解释 relative、fixed、absolute 和 static 元素的区别**

> * 特性
>  * 定位元素：relative、fixed、absolute
>  * static属于非定位元素，left,top,z-index不会起作用
>  * absolute会对`除static`的元素进行定位
>  * fixed相对于屏幕的视口进行固定定位
> * 参考资料
>  * position文档：[https://developer.mozilla.org/zh-CN/docs/Web/CSS/position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)

* **你在开发或生产环境中使用过哪些 CSS 框架？你觉得应该如何改善他们？**

> * 区别：[https://ruby-china.org/topics/17143](https://ruby-china.org/topics/17143 "https://ruby-china.org/topics/17143")

* **请问你有尝试过 CSS Flexbox 或者 Grid 标准规格吗？**

> [flexbox知识](http://www.w3cplus.com/css3/a-guide-to-flexbox.html) , [grid知识](http://www.w3cplus.com/css3/line-base-placement-layout.html)
> 内容比较多，需要仔细阅读

* **为什么响应式设计 (responsive design) 和自适应设计 (adaptive design) 不同？**

> * 区别
>> * 响应式：你动他就动
>> * 自适应：你动到一定程度它才动
>  
> * 应用场景
>> * 如果你一些必须要支持的设备（例如：iphone6），其他方面可以不用特别关心。可用自适应
>> * 如果你不确定市场上的设备的情况，响应式更适合你
>  
> * 优劣
>> * 由于`你动他就动`的特性，布局实时变化产生页面的重排，性能比较低
>> * 在不确定未来的设备会发展成什么样，他的适应能力更强
>> * 相反的方向就是**自适应**的问题了
>  
> * 参考资料
>> * 生动的图片区别：[https://css-tricks.com/the-difference-between-responsive-and-adaptive-design/](https://css-tricks.com/the-difference-between-responsive-and-adaptive-design/)


* **你有兼容 retina 屏幕的经历吗？如果有，在什么地方使用了何种技术？**

> * 由于在高清的环境下，图片被放大，需要更高的
> * 修改方式：手动写，data-rjs，媒体查询
> * 参考资料
>  * 自动retina适应：[https://github.com/imulus/retinajs](https://github.com/imulus/retinajs)

* **请问为何要使用 `translate()` 而非 *absolute positioning*，或反之的理由？为什么？**

> * 原理
>  * `translate`使用css动画，采用是GPU和单独的`compositor`处理，不在主线程处理，不会造成页面的动画效果阻塞
>  * `absolute`利用js的主线程动画处理
>
> * 优劣
>  * translate动画性能更高，不会阻塞。在IE8以下不能使用
>  * absolute兼容性好，但是在降级和事件支持比较累
>  
> * 参考资料
>  * 区别回答：[https://segmentfault.com/q/1010000000645415](https://segmentfault.com/q/1010000000645415)

#### <a name='js-questions'>JS 相关问题：</a>

* **请解释 JavaScript 中 `this` 是如何工作的。**

> * 原则
>  * 指向当前执行的上下文环境
>  * 多个环境，以就近上下文为准
>  * `apply`和`call`调用以传入的对象为准
>  * 注意区分严格模式的this特点
>  
> * 参考资料
>  * 各种用法：[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)


* **有哪些对象声明方式？有什么优劣？说明应用场景**

> * 构造函数
>> * **缺点**：方法属于共享型，没有必须要总是创建实例
>> * **应用**：属性对象单独存储，不共享
>
> * 原型
>> * **缺点**：prototype信息都是共享
>> * **应用**：对象方法共享时


> * 原型与构造函数组合
>> * 结合两者的优点，是最常用的声明方式
>> * **注意点**： 在重写prototype时，contrustor需要重新指向
>> * **应用**：在自定义的对象上进行属性，方法扩展
>
> * 寄生
>> * **应用**：对于某些对象需要暂时性的扩展，但不希望影响到原始对象的情况
>> * 例如：对于一个数组对象加个自定义的拼接方法，但是不在数组对象上添加。

```javascript
function ArrayInstanceExtend(){
    var o = [];
    o.push.apply(o,arguments);
    o.insertFirst = function(insertValue){
        this.splice(0,0,insertValue);
        return this.concat();
    }
    return o;
}
var x = new ArrayInstanceExtend('lisi');
x.insertFirst('zhangsan');
console.log(x.insertFirst('wangwu'));
```

> * 稳妥
>> * 避免使用this和new，防止被数据篡改
>> * **特殊**: 本人在实际编程中还没有遇到使用这个方式的情况



* **有哪些继承方式？有什么优劣？举例说明用途**

> * 原型
> * **优点**：解决了共享属性，方法的传递
>
> * 借用构造函数
> * **优点**：解决了实例属性的传递
>
> * 组合原型和借用构造函数

```javascript
function Parent(name, friends) {
    this.name = name;
    this.friends = friends;
}
Parent.prototype = {
    constructor: Parent,
    addFriend: function(friendName) {
        this.friends.push(friendName);
    },
    getFriends: function() {
        return this.friends;
    }
}
function Child(toy,name,friends) {
    this.toy = toy;
    Parent.call(this, name, friends);
}
Child.prototype = new Parent();
Child.prototype.getToys = function() {
    return this.toy;
}
Child.prototype.buyToy = function(toyName) {
    this.toy.push(toyName);
}
var xiaohai = new Child(['car'],'zhangsan',['lisi','wangwu']);
xiaohai.buyToy('air');
xiaohai.addFriend('zhaoliu');
var tom = new Child(['ship'],'tom',['jerry','jake']);
tom.buyToy('bike');
tom.addFriend('obama');
```
> * **缺点**：在new Parent时，会调用一次构造函数，Parent.call时又调了一次构造函数。同样的属性，一个放在原型里，一个放在构造函数里（实例属性），造成性能的浪费

> * 原型式
> * 寄生式
> * 组合原型式和寄生

```javascript
function inherit(subType, superType) {
    var tmp = clone(superType.prototype);
    subType.prototype = tmp;
    subType.prototype.constructor = subType;
}
function clone(o) {
    function F() {}
    F.prototype = o;
    return new F();
}
```

> * 借用中间函数的方式，让父级不在重新声明
>
> * **总结**：在父子的原型传递过程中，必须用父级的副本来继承。如果使用`child.prototype = parent.prototype`,父子级的方法会互相影响，产生共享的形式。给父级带来很多问题


* **你怎么看 AMD，CMD，UMD，CommonJS，ES6？ requirejs, seajs**

> * 区别
>  * AMD: 异步并发加载，依赖前置
>  * CMD: 异步并发加载，就近依赖
>  * UMD: 可以适应AMD、CMD和没有任何规范的加载方式，但是代码量大
>  * Commonjs：采用同步加载机制，适合用在服务器
>  * ES6：官方给出的最新标准，但是现在支持浏览器还不清楚
>
> * 参考资料
>  * 具体写法：[http://www.yl1001.com/group_article/8041472449293730.htm](http://www.yl1001.com/group_article/8041472449293730.htm)

* **请解释为什么接下来这段代码不是 IIFE (立即调用的函数表达式)：`function foo(){ }();`.要做哪些改动使它变成 IIFE?**

> * 这段代码在执行时有歧义,它等同于下面的代码
```javascript
function foo(){}
();
```
> * 如果把下面的代码修改成
```javascript
function foo()
(function(){
console.log('this is other expression')
}());
```
> * 在执行这段代码的时候，解释器就没法理解应该怎么执行。
>
> * 原则
>  * [立即调用]：告诉解释器现在就执行，例如：test()、表示符(!,+,-,&&),总之告诉解释器，你现在就用
>  * [表达式]：告诉它的一个前提，你必须是表达式，下面的代码就不能执行
```javascript
function foo() {
    console.log('foo');
    return ['3'];
}.toString();
```
>
> * 参考资料
>  * 立即调用和自执行区别：[http://www.cnblogs.com/TomXu/archive/2011/12/31/2289423.html](http://www.cnblogs.com/TomXu/archive/2011/12/31/2289423.html)

* **描述以下变量的区别：`null`，`undefined` 或 `undeclared`？该如何检测它们？**

> * 考点
>> * 基本数据类型：Undefined, Null, Number, String, Boolean
>> * 引用数据类型：Function, Object, Array
>  
> * 检验类型
>> * 基本类型：`typeof`
>> * 引用：`instanceof`
>  
> * 检测方法
>> * 基本类型用`typeof`即可，遇到引用类型，例如：`function`、`array`之类的可以用toString还原他们
>> 的真是类型在判断
>  
> * 注意
>> * `null`: 表示不应该有对象
>> * `undefined`：可以有值，但是还没有赋值
>> * `undecleared`：没声明，直接用。造成语法错误
>
> * 参考资料
>> * 《高级程序设计》3章：基本类型，5章：引用类型，22章：类型检测
>  * 代码学习，jquery内class2type和jQuery.type使用实例

* **什么是闭包 (closure)，如何使用它，为什么要使用它？**

> * 用生活化比喻
>  * 外层函数相当于**商场**
>  * 里层函数相当于**售货员**
>  * 保存的变量相当于**方便面**
>  * 我们去**商场**的时候，只需要跟**售货员**说下，我们要**方便面**，他就可以拿出来，然后把方便面的数量修改
>  * 其他人的理解：[http://kb.cnblogs.com/page/110782/](http://kb.cnblogs.com/page/110782/)[http://www.cnblogs.com/xiaotie/archive/2011/08/03/2126145.html](http://www.cnblogs.com/xiaotie/archive/2011/08/03/2126145.html)
> * 注意
>  * 只要符合里层函数可以直接在外边使用的方式，就可以当闭包来用，跟`return`没有什么关系，例如：用构造函数`this`或者`setTimeout`
> * 参考资料
>  * 官方解释及实用：[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)

* **请举出一个匿名函数的典型用例？**

> * 闭包，函数绑定，模块封闭

* **你是如何组织自己的代码？是使用模块模式，还是使用经典继承的方法？**


* **请指出 JavaScript 宿主对象 (host objects) 和原生对象 (native objects) 的区别？**

> * 区别：
>  * 不依赖执行环境（浏览器或搭载环境），自身就带的对象
>  * 根据执行环境的不同，提供不同的对象是宿主对象
> * 参考资料
>  * 官方解释：[http://es5.github.io/#x4.3.6](http://es5.github.io/#x4.3.6)
>  * 图片阐述：[http://blog.csdn.net/foamflower/article/details/9165691](http://blog.csdn.net/foamflower/article/details/9165691)

* **请指出以下代码的区别：`function Person(){}`、`var person = Person()`、`var person = new Person()`？**

> * 名称
>  * 函数声明
>  * 函数表达式
>  * 构造函数
>   
> * 区别
>  * 函数声明在下载完之后，解释器优先读取，确保在执行之前已经被解析完成
>  * 表达式等同于变量，只有用到的时候才开始解析

* **`.call` 和 `.apply`、`bind` 的区别是什么？**

> * call，apply
>  * **特征**：立即调用，改变函数内部的this指向
>  * **常用场景**：扩展对象的方法，但是不改变全局对象的方法
>  
> * bind
>  * **特征**：改变函数内部this指向，返回新函数对象
>  * **常用场景**：回调（事件）函数绑定
> 
> * 兼容性
>  * 在ES5标准以前的浏览器不支持，需要ployfill

```javascript
    Function.prototype.bind = function(oThis) {
        if (typeof this !== "function") {
            // closest thing possible to the ECMAScript 5
            // internal IsCallable function
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        }
        var aArgs = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP = function() {},
            fBound = function() {
                return fToBind.apply(this instanceof fNOP ? this : oThis || this,
                    aArgs.concat(Array.prototype.slice.call(arguments)));
            };
        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();
        return fBound;
    };
```

> * 参考资料
>  * 官方`bind`解释：[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)


* **在什么时候你会使用 `document.write()`？**

> * 使用场景
>  * 在当前页面中新开窗口，对新窗口写入代码（现在用的很少）
>  * 广告植入中，随着页面一起把代码输出到目标页面内
>  
> * 注意
>  * 在页面`ready`之后，它会重写当前页面内容。阻断后续执行
> * 参考资料
>  * 植入广告优化：[http://www.jb51.net/article/50684.htm](http://www.jb51.net/article/50684.htm)

* **请指出浏览器特性检测，特性推断和浏览器 UA 字符串嗅探的区别？**

> * 区别
>  * 特性检测：检查你要写的代码，在当前环境下是否可以执行，比如：`addEventListener`和`attachEvent`。类库:`odernizr`,`jQuery`自己使用`$.support`
>  * 特性推断：在代码开始执行之前执行，如果有当前的这个特性，你就怎么处理，多用在**polyfill**
>  * UA嗅探：1. 统计浏览器的数量和访问情况，不要求特别准确 2. 检测当前的设备，根据设备不同，进行DNS网站重定向
>  * 参考资料：
>   * 区别和UA代码：《js高级程序设计》第9章

* **请尽可能详尽的解释 Ajax 的工作原理。使用 Ajax 都有哪些优劣？**

> * 原理：
>  * 利用`XMLHttpRequest`异步处理技术
>  * 用`js`执行回调函数
>  * `json`和`xml`、`text`对结果进行解析
>  
> * 相对于页面跳转特性
>  * 无刷新数据交互
>  
> * 牺牲功能
>  * 无法进行跨域`POST`请求
>  * SEO 无法处理
>  
> * 弥补方式
>  * 使用CORS，进行跨域访问`POST`
>  * 结合`pushstate`技术，解决SEO问题
> * **该特性IE>=10**

* **你使用过 JavaScript 模板系统吗？如有使用过，请谈谈你都使用过哪些库？**

> 同`你用过哪些不同的 HTML 模板语言`的答案


* **请描述事件冒泡机制 (event bubbling)和捕获机制的不同**

> * 执行方式
>> * 冒泡：从目标阶段到document，向上
>> * 捕获：从document到到目标阶段，向下
>
> * 注意
>> * jquery中，`focus`，`mouseenter`都不冒泡
>> * `jquery3`，去掉了load和unload事件

* **"attribute" 和 "property" 的区别是什么？**

> * 特性
>  * `attribute`理解为特性，用`nodenameMap`形式存储，在HTML标签上，只能以字符串形式存在
>  * `property`理解为属性，直接存在于DOM对象上，是浏览器自带的。

> * 细节
> * 当同一个属性名都不存在是，`attribute`的值是`null`，`property`的值是`undefined`，处理的机制不同（`null`,`undefined`区别，见上面）
>
> * attibute 和 property 同时存在一个相同的属性名时
>> **修改attribute时，自动与property同步的条件**
>>
>> 1. 属性名是`property`默认就存在
>> 1. `property`的属性值是可修改
>>
>> **修改`property`时，自动与`attribute`同步的条件**
>>
>> 1. 属性名是`property`默认就存在
>
> * 注意
>  * property的属性是经过浏览器内部（拼接或者可选值处理），有些情况下会与attribute（写什么就是什么）结果不一致，例如
>  * `href`属性，在`property`是绝对路径或者域名，在`attribute`里就是赋值的字符串
>  * `checked`属性，在`property`里是true或false，在`attribute`同样是字符串
>  
> * 参考资料
>  * 进行了实验，但没有总结：[http://www.codeceo.com/article/javascript-property-attribute.html](http://www.codeceo.com/article/javascript-property-attribute.html)

* **请指出 document load 和 document DOMContentLoaded 两个事件的区别。**

> * 区别
>  * DOMcontentLoaded在页面加载完成之后就会触发
>  * load在所有资源加载完毕之后才会触发
>  
> * 细节，以`chrome`做实验
>  * 每个浏览器的加载`css`，`img`，`js`都是不同（有的按照类型[img,js,css]分，有的按照`head`分）
>  * 所有浏览器的原则都是先执行完当前页面内容，之后再去执行外部内容，（同类型的情况下）
>  * head里的`js`，`css`资源如果不能被加载会阻塞后续页面的渲染，`img`不会
>  
> * 总结
>  * `css`、`js`属于阻塞类资源，`img`不是
>  * 首次加载资源越少，速度越快


* **`==` 和 `===` 有什么不同？ 关于数据类型的检测**

> * `0`,`undefined`,`false`,`null` == 会转换数据类型
> * === 比较的是内存位置，如果是统一位置就是相同的

* **请解释 JavaScript 的同源策略 (same-origin policy)。**

> 参考资料：[http://www.freebuf.com/articles/web/65468.html](http://www.freebuf.com/articles/web/65468.html)

* **如何实现下列代码：**
```javascript
[1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5]
```
```javascript
  var x = [1, 2, 3, 4, 5];
    function y(a) {
        var z = [],m;
        m = a.slice();
        z = m.concat(a);
        z.reverse()
        return z;
    }
    console.log(y(x));
```

* **什么是三元表达式 (Ternary expression)？“三元 (Ternary)” 表示什么意思？**

> * 一元：++i
> * 二元：a+b
> * 三元：c?a:b
> * 通过三个操作数，产生一个结果

* **什么是 `"use strict";` ? 使用它的好处和坏处分别是什么？**

> [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)

* **为何通常会认为保留网站现有的全局作用域 (global scope) 不去改变它，是较好的选择？**
* **为何你会使用 `load` 之类的事件 (event)？此事件有缺点吗？你是否知道其他替代品，以及为何使用它们？**

> * `load`使用的情景
>  * 在页面所有资源都加载完毕之后，在动态加载之前，需要执行
>  * 在多个资源全部都完成之后，例如：有10个`js`，3个`css`，5个`img`完成之后，需要执行
>  
> * `load`触发条件，必须所有的资源全部加载完毕才能执行，如果一个资源没有加载完毕，后续的工作都不能进行，造成页面假死
>
> * 改进
>  * 对于资源的加载完毕，多数情况下指js和css文件，通常会使用ready去代替。特点：执行更早，对于img资源无须等待
>  * 对于指定某些资源加载完毕就执行，可以用事件监听和`promise`的`all`共同处理

* **使用 Promises 而非回调 (callbacks) 优缺点是什么？**

> * **什么是promise？为什么要有它？** 为了解决回调函数不断的问题，造成代码可读性极差的问题，(例如：[http://www.kuaidadi.com/assets/js/animate.js](http://www.kuaidadi.com/assets/js/animate.js)),一种方式或者名称
>
> * **它是怎么解决的？** 其解决的方式：让回调的方法以链式调用的方式传递
>
> * **怎么实现它？** 可以用多种方式实现，利用`callback`或在`ES6`的环境中使用内置的`Promise`语法
>
> * **它有什么缺点吗?**
>  * 在浏览器端存在兼容性问题，在不支持`ES6`的环境中
>  * 它的解决方式相比以前的写法已经有了很大的改变，但是总是`new Promise`的语法还是比较复杂，同时在一些环境下，还是不能完美的解决。新的代替方式`async`和`await`可简洁的代替它，但是还需要`ES7`支持
>  
> * 参考资料
>  * 手把手教你实现`Promise`：[https://75team.com/post/how-to-convert-callback-to-promise.html](https://75team.com/post/how-to-convert-callback-to-promise.html)
>  * 另一个实现教程：[http://www.tuicool.com/articles/RzQRV3](http://www.tuicool.com/articles/RzQRV3)
>  * 代码研究：[https://github.com/stackp/promisejs](https://github.com/stackp/promisejs)
>  * promise的多种实现方式简介：[https://www.zhihu.com/question/25413141](https://www.zhihu.com/question/25413141)
>  * 官方语法：[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
>  * 代替Promise的更好方式：[http://www.tuicool.com/articles/ZZnuQzZ](http://www.tuicool.com/articles/ZZnuQzZ)

* **使用一种可以编译成 JavaScript 的语言来写 JavaScript 代码有哪些优缺点？**

> * 优点
>  * 语法统一，不必考虑执行标准的问题
>  * 错误提示与检查，让不合理的代码死在编辑阶段
>  
> * 劣势
>  * 语法学习成本

* *你使用哪些工具和技术来调试 JavaScript 代码？ 前端：F12,fiddler.后端：insprecct*
* **你会使用怎样的语言结构来遍历对象属性 (object properties) 和数组内容？**
* **请解释可变 (mutable) 和不变 (immutable) 对象的区别。**
  * **请举出 JavaScript 中一个不变性对象 (immutable object) 的例子？**
  * **不变性 (immutability) 有哪些优缺点？**
  * **如何用你自己的代码来实现不变性 (immutability)？**

> * 研究react框架时在深入学习

* 请解释同步 (synchronous) 和异步 (asynchronous) 函数的区别。
*
* **什么是事件循环 (event loop)？**
  * **请问调用栈 (call stack) 和任务队列 (task queue) 的区别是什么？**

> [http://www.jb51.net/article/56022.htm](http://www.jb51.net/article/56022.htm)

* **解释 `function foo() {}` 与 `var foo = function() {}` 用法的区别**

> 1. 加载后立即被执行编译
> 2. 加载后，执行到该部分才会被执行

#### <a name='testing-questions'>测试相关问题：</a>

* **对代码进行测试的有什么优缺点？单元测试与功能/集成测试的区别是什么？**

> * 优点：
>  * 单元测试，保证自己代码在内部执行正确
>  * 功能测试，在项目内部功能可以正确的运行
>  * 集成测试，在与其他项目整合时，确保兼容性，执行性能满足业务要求
>  
> * 缺点：
>  * 写测试之前，需要清除场景的边界，考虑问题需要比较深入。对于需求还不清晰的项目，造成阻碍
>  * 从设计到实施，需要一定的时间成本和技术选择，投入产出比不好控制

* **你会用什么工具测试你的代码功能？**

> * 代码比较稳定（工具类应用）：
>> * 单元测试
>>  * `karma` 自动化运行器
>>  * `mocha`,`jasmine`,`theintern`单元测试框架
>>  * `coverage` 代码覆盖率
>> * UI测试
>>  * `phamtomjs` 无界面浏览器，用来测试功能是否正确
>>  * `webdriver2` 测试驱动器，主要用来测试兼容性
>
> * 不稳定页面（活动类）：
>  * UI测试：手工测试，差异监控（为了减少重复手工测试工作量）
>  
> * 参考链接
>  * 两种类型的说明：[https://www.zhihu.com/question/29922082](https://www.zhihu.com/question/29922082)

#### <a name='performance-questions'>效能相关问题：</a>

* 你会用什么工具来查找代码中的性能问题？

> * 参考资料
>  * 百度前端监控讲解：[http://fex.baidu.com/blog/2014/05/build-performance-monitor-in-7-days/](http://fex.baidu.com/blog/2014/05/build-performance-monitor-in-7-days/)

* **你会用什么方式来增强网站的页面滚动效能？**

> * 针对Safari处理
>  * 在safari的下面，使用`-webkit-overflow-scrolling`可以避免页面滚动的卡顿问题
>  * 但是在之前的浏览器中，存在`scroll`不能实时触发（现在已经解决了）。之前吐槽的文章：[https://fe.ele.me/momentum-scrolling-on-ios/](https://fe.ele.me/momentum-scrolling-on-ios/)
>  
> * 跨浏览器统一效果
>  * 使用`div`代替滚动条，利用`absolute`做到效果统一
>  * 使用iscroll实现的方式

* **请解释 layout、painting 和 compositing 的区别**

> * 名称，作用
>  * layout(重排)计算大小，位置
>  * paint(重绘) 背景色，文字，边框之类的效果
>  * compositing(渲染合并) 把在不同层渲染出的结果，合并到一个图层
>  
> * 过程
>  * js操作DOM > css样式结算 > layout > paint > compsiting
>  
> * 说明
>  * 在渲染时，经过的层数越少，性能越高。
>  * 在compsiting的属性，只有opacity和transfrom两个
>  * 从过程图中也能明显的体现，js的动画比css动画性能差的一个原因
> * 参考资料
>  * 介绍过程图：[https://developers.google.com/web/fundamentals/performance/rendering/?hl=zh-cn](https://developers.google.com/web/fundamentals/performance/rendering/?hl=zh-cn)
>  * compsiting过程图解（图示浏览器有点老）：[https://developers.google.com/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count?hl=zh-cn](https://developers.google.com/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count?hl=zh-cn)

#### <a name='network-questions'>网络相关问题：</a>

* **为什么传统上利用多个域名来提供网站资源会更有效？**

> * 因为不同浏览器对同一域名的并行下载限制在8以内，多个域名下载可以突破这种限制
>
> * 域名越多越好？
>  * 浏览器对于在短时间请求多个域名是有限制的（具体超过多少还没找到资料），超过一定数量，域名的DNS解析会被丢弃
>  
> * 其他说法
>  * (域名过多，DNS解析需要时间所以反而会降低性能)，这个说法已经过时，现在的DNS多数都是0.005~8ms以内
>  
> * 参考资料
>  * 多方面说明：[https://www.zhihu.com/question/20474326](https://www.zhihu.com/question/20474326)
> * 补充
>  * HTTP2 已经在这方面做了处理，原生就支持并行无限制加载

* **请尽可能完整得描述从输入 URL 到整个网页加载完毕及显示在屏幕上的整个流程**

> url > dns > ip > site
> 加载dom > 加载js,css,img >
> 执行js，css ，执行layout > 构建dom树 > paint > compsiting > render树
>
> * 参考资料
>  * 英文原版：[http://taligarsiel.com/Projects/howbrowserswork1.htm](http://taligarsiel.com/Projects/howbrowserswork1.htm)
>  * 另一个中文：[https://github.com/skyline75489/what-happens-when-zh_CN](https://github.com/skyline75489/what-happens-when-zh_CN)

* **Long-Polling、Websockets 和 Server-Sent Event 之间有什么区别？**

> * Long-plling，用http方式实现，但是对于服务器的压力比较大
> * websocket，基于最新的协议，实现效果好。但仍然存在兼容性问题
> * server-sent，是浏览器主动推送，跟浏览器相关属性，只要打开浏览器就可以接收信息
>
> * 参考链接
>  * server-sent讲解：[http://www.ibm.com/developerworks/cn/web/1307_chengfu_serversentevent/](http://www.ibm.com/developerworks/cn/web/1307_chengfu_serversentevent/)
>  * websocket实现：[https://www.zhihu.com/question/20215561](https://www.zhihu.com/question/20215561)
>  * websocket吐槽，实用应用：[http://www.data321.com/webqianduan/2016069014/websocketjiumeiyoudailairenhede](http://www.data321.com/webqianduan/2016069014/websocketjiumeiyoudailairenhede)

* **请描述以下 request 和 response headers**
  * Diff. between Expires, Date, Age and If-Modified-...
  * Do Not Track
  * Cache-Control
  * Transfer-Encoding
  * ETag
  * X-Frame-Options


* **什么是 HTTP method？请罗列出你所知道的所有 HTTP method，并给出解释**

> OPTIONS: 请求确实是否允许连接
> GET,POST
> HEAD:一般超文本连接验证
> PUT:加入指定资源
> DELETE:删除指定资源
> TRACE:
> CONNECT:连接代理

#### <a name='coding-questions'>代码相关的问题：</a>

**问题：`foo`的值是什么？**
```javascript
var foo = 10 + '20';
```

> * 1020
> * 考点：类型优先级，位操作符

 | 运算符 | 	描述  |
 | ------- |:----------------------:| ---------:|
 | . [] () | 字段访问、数组下标、函数调用以及表达式分组 |
 | ++ -- - ~ ! delete new typeof void |
 | 一元运算符、返回数据类型、对象创建、未定义值 |
 | \* / %	| 乘法、除法、取模 |
 | \+ 、\-、 \+	| 加法、减法、字符串连接 |
 | << 、>> 、>>>	| 移位 |
 | <、<=、 >、 >= instanceof	| 小于、小于等于、大于、大于等于、instanceof |
 | == 、!=、 ===、 !==	| 等于、不等于、严格相等、非严格相等 |
 | & |	按位与 |
 | ^ |	按位异或 |
 | \| |	按位或 |
 | && |	逻辑与 |
 | \|\| |	逻辑或 |
 | ?: |	条件 |
 | = oP= |	赋值、运算赋值 |
 | , |	多重求值 |

> * 参考：《高级程序设计》3.5章

**问题：如何实现以下函数？**
```javascript
add(2, 5); // 7
add(2)(5); // 7
```

> * 考点
>  * 闭包，函数输出调用，参数传递方式
```javascript
function add() {
    var result = 0,
    m;
    m = function() {
        var i, len;
        len = arguments.length;
        if (len > 0) {
            i = len;
            while (i) {
                result += arguments[i - 1];
                i--;
            }
            return m;
        }
    };
    m.apply(this, arguments);
    m.toString = m.valueOf = function() {
        return result;
    }
    return m;
}
```

**问题：下面的语句的返回值是什么？**
```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

> * 考点：数组和字符串方法掌握熟练度
```
it do can i sorry i'm
```

*问题：`foo.x`的值是什么？*
```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

> * ```undefined```
> * 在执行期间，先进行寻址在赋值，寻址的结果是bar指向的对象
> * 参考资料
>  * 解释执行过程：[http://stackoverflow.com/questions/34933210/why-is-the-value-of-foo-x-undefined-in-foo-x-foo-n-2](http://stackoverflow.com/questions/34933210/why-is-the-value-of-foo-x-undefined-in-foo-x-foo-n-2)

#### <a name='fun-questions'>趣味问题：</a>

* 你最近写过什么的很酷的项目吗？
* 在你使用的开发工具中，最喜欢哪些方面？
* 谁使你踏足了前端开发领域？
* 你有什么业余项目吗？是哪种类型的？
* 你最爱的 IE 特性是什么？
* 你对咖啡有没有什么喜好？


#### <a name='补充'>补充</a>####

* 补充知识：
* [https://zhuanlan.zhihu.com/p/20002850?columnSlug=FrontendMagazine](https://zhuanlan.zhihu.com/p/20002850?columnSlug=FrontendMagazine)
* 如果利用js内部机制进行引用类型复制
```javascript
var x = ['1'];
var y = [];
y.push(x);
x = ['2'];
```
* **HTML条件注释和特性检测、UA检测的应用场景分别是什么？**

> * 使用这些标签，其初衷都是为了解决浏览器的兼容性问题。
> * 常用的手段：css hack, html 条件注释，css 条件注释，UA检测，能力检测（特性检测）
> 
> * css hack
>> * **优势**：代码直接，在其他文件里
>> * **劣势**：文件大了以后，难以维护。
>
> * css 条件注释
>> * **优势**：文件结构清晰，在中型项目中优势明显，维护方便
>> * **劣势**：需要增加额外的http请求，在大型项目中，多个模块维护起来也很难
>
> * html条件注释
>> * **优势**：使用IE-5-9都认识的注释方式，有hack的优势，同时维护简单
>> * **劣势**：只有在IE的一定范围浏览器内才起作用
>
> * 上面这些优劣的都是相对于兼容很多浏览器的情况，但随着浏览器的快速发展和用户跟进速度提高，很多网站已经不需要再进行那么的浏览器维护了。（开发者共同推动用户放弃老浏览器）。所以在实际应用的场景中，越来越多的都是采用`优雅降级`和`渐进增强`的方式制作网页。
> * 在特殊情况下，使用css 条件注释做特定浏览器处理。
> * 在网站加载时，先用UA检测了解到浏览器内核（不完全信任）来统计访问的浏览器信息
> * 在js代码执行时，采用能力检测确定代码的执行方式

* **赋值方法的优缺点？**
```javascript
obj.name = "Simon"
var name = obj.name;
```
```javascript
obj["name"] = "Simon";
var name = obj["name"];
```

> * 第二种方法的优点在于属性的名称被看作一个字符串，这就意味着它可以在运行时被计算，缺点在于这样的代码有可能无法在后期被解释器优化。它也可以被用来访问某些以预留关键字作为名称的属性的值
```javascript
obj.for = "Simon"; // 语法错误，因为 for 是一个预留关键字
obj["for"] = "Simon"; // 工作正常
```

* **什么是内存泄露？怎么避免？**
* **把一个数组进行排序的方式有几种，各有什么优劣**
```javascript

var tmpArray = ["10","5","20","1","100"];

```
> * 冒泡排序
> * 快速排序
```javascript
function quickSort(array) {
	function sort(prev, size) {
		var start = prev;
		var end = size - 1;
		var flag = array[prev];
		if ((size - prev) > 1) {
			while (start < end) {
				for (; start < end; end--) {
					if (array[end] < flag) {
						array[start++] = array[end];
						break;
					}
				}
				for (; start < end; start++) {
					if (array[start] > flag) {
						array[end--] = array[start];
						break;
					}
				}
			}
			array[start] = flag;
			sort(0, start);
			sort(start + 1, size);
		}
	}
	sort(0, array.length);
	return array;
}
```
> * 内置的sort方法，sort传入排序函数，用index标记前后

* **页面加载与执行优化思路？加载顺序？执行顺序？如果加载中有不能被加载或者延迟的情况会有什么样的影响?**

> * 加载顺序
> * **[js,css,img]**：加载顺序(head > body)，如果有没有加载完成，其他文件会并发加载，根据浏览器并发数决定，阻塞型加载

> * 执行顺序
>> * **[css]**：同样位置（都在body或者head内)(head里有没有完成的，body也不能执行)，按照从上至下执行，不管加载顺序，
>> * **[css]**：同样位置，如果有css文件(不能加载完成)或(仍在加载)，即使其他文件文件已经下载完成也不能执行，需要等待未完成的返回结果，再一起执行
>> * **[css]**：head > body > ready > body load事件 > load事件
>
> * 执行顺序
>> * **[js]**：一般情况下是从上至下,但是可以通过脚本标签设置执行规则(defer,async)
>> * **[js,img]**：只要本身的文件之前没有文件(不能加载完成)或(仍在加载)，就可以立即执行
>> * **[js]**：head > body > defer > ready事件 > async > seajs,requirejs加载的文件 > body load事件 > load事件
>
> * 执行顺序
>> * **[img]**： ready > head > body > body load事件 > load事件
>
> * 总体执行顺序：
>> * `js`,`css`谁在前面谁先加载,除非js特殊设置,`img`永远在两个后面
>
> * 优化思路：
>> * `css`必须放到head里，防止DOM二次渲染
>> * `js`尽量放到最后面或者做异步加载，防止阻塞页面渲染，因为它是及时执行。特殊情况，需要js做判断决定加载的哪些文件，就不一定要放到后面
>> * `img`放到哪都行，但是要提前占位，防止页面渲染多次

* **CSS的继承机制是什么**

> * 没有通过具体的信息，总体规律：
>> * 字体，文本，颜色用于描述内容的可以被继承
>> * 布局，结构不会被继承

> * 手动的设置一些继承 或 强制不继承
>> * initial, inherit, unset, all

> * 参考资料
>> * [https://www.w3cplus.com/css3/managing-the-css-cascade.html](https://www.w3cplus.com/css3/managing-the-css-cascade.html)

* **NEW一个新对象的时候发生了什么**

> * 1. 创建一个对象
> * 2. 构造函数的`prototype`指向当前这个对象的实例
> * 3. 把`this`指向了这个新对象

> * 参考资料
>> * [https://segmentfault.com/q/1010000006670906?_ea=1091798](https://segmentfault.com/q/1010000006670906?_ea=1091798)

* **有哪些运算符，有什么应用场景**

> 类型：算术、位、关系、相等
> toString、valueof

> * |： 一个是1，就是1

> * &: 两个都是1，才是1
>> 应用：
>> 判断奇、偶：a&1 === 0 ? 奇数 ： 偶数

> * ^：对应位置，如果两个值不等，就是1，不然就是0
>> 应用实例：两个数交换值
>> 1. 一般做法：
```javascript
a = a+b;
b = a-b;
a = a-b;
```

>> 2. 异或位运算(解决a、b之和超过最大数)
```javascript
a = a^b;
b = a^b;
a = a^b;
```

> * ~：所有位都取反值

>> 不明白取反的过程为什么还要加一位

> * <<、>>：把数据的位数左、右移动N位
>>应用：每动一个位置，等于乘除2



