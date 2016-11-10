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

## 参与协作

  1. [贡献者](#contributors)
  1. [如何参与贡献](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/CONTRIBUTING.md)
  1. [许可协议](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/LICENSE.md)

#### <a name='general-questions'>常见问题：</a>

* *你在昨天/本周学到了什么？*
* *编写代码的哪些方面能够使你兴奋或感兴趣？*
* *你最近遇到过什么技术挑战？你是如何解决的？*
* **在制作一个网页应用或网站的过程中，你是如何考虑其 UI、安全性、高性能、SEO、可维护性以及技术因素的？**
* *请谈谈你喜欢的开发环境。*
* *你最熟悉哪一套版本控制系统？*
* **你能描述当你制作一个网页的工作流程吗？**
* **假若你有 5 个不同的样式文件 (stylesheets), 整合进网站的最好方式是?**
* **你能描述渐进增强 (progressive enhancement) 和优雅降级 (graceful degradation) 之间的不同吗?**
* **你如何对网站的文件和资源进行优化？**
* **浏览器同一时间可以从一个域名下载多少资源？**
  * **有什么例外吗？**
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

* *浏览器标准模式 (standards mode) 、几乎标准模式（almost standards mode）和怪异模式 (quirks mode) 之间的区别是什么？*
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

>

#### <a name='css-questions'>CSS 相关问题：</a>

* **请问 "resetting" 和 "normalizing" CSS 之间的区别？你会如何选择，为什么？**

> 

* **请解释浮动 (Floats) 及其工作原理。**
* 答：
* [clear](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clear "clear:both") | [float](https://developer.mozilla.org/zh-CN/docs/CSS/float "float")
* **描述`z-index`和叠加上下文是如何形成的。**
* 答：[z-index](http://www.cnblogs.com/ForEvErNoME/p/3373641.html "z-index")
* **请描述 BFC(Block Formatting Context) 及其如何工作。**
* **列举不同的清除浮动的技巧，并指出它们各自适用的使用场景。**
* *请解释 CSS sprites，以及你要如何在页面或网站中实现它。*
* *你最喜欢的图片替换方法是什么，你如何选择使用。*
* **你会如何解决特定浏览器的样式问题？**
* **如何为有功能限制的浏览器提供网页？**
  * **你会使用哪些技术和处理方法？**
* **有哪些的隐藏内容的方法 (如果同时还要保证屏幕阅读器可用呢)？**
* **你用过栅格系统 (grid system) 吗？如果使用过，你最喜欢哪种？**
* *你用过媒体查询，或针对移动端的布局/CSS 吗？*
* **你熟悉 SVG 样式的书写吗？**
* **如何优化网页的打印样式？**
* **在书写高效 CSS 时会有哪些问题需要考虑？**
* *使用 CSS 预处理器的优缺点有哪些？*
  * *请描述你曾经使用过的 CSS 预处理器的优缺点。*
* *如果设计中使用了非标准的字体，你该如何去实现？*
* **请解释浏览器是如何判断元素是否匹配某个 CSS 选择器？**
* **请描述伪元素 (pseudo-elements),伪类有哪些 及其用途。**
* **请解释你对盒模型的理解，以及如何在 CSS 中告诉浏览器使用不同的盒模型来渲染你的布局。**
* *请解释 ```* { box-sizing: border-box; }``` 的作用, 并且说明使用它有什么好处？*
* *请罗列出你所知道的 display 属性的全部值*
* *答：block，inline-block，none，table，inline-table，inline,table-cell*
* *请解释 inline 和 inline-block 的区别？*
* *请解释 relative、fixed、absolute 和 static 元素的区别*
* **CSS 中字母 'C' 的意思是叠层 (Cascading)。请问在确定样式的过程中优先级是如何决定的 (请举例)？如何有效使用此系统？**

> [权重连接](http://www.w3cplus.com/css/css-specificity-things-you-should-know.html)

* **你在开发或生产环境中使用过哪些 CSS 框架？你觉得应该如何改善他们？**
* **请问你有尝试过 CSS Flexbox 或者 Grid 标准规格吗？**

> [flexbox知识](http://www.w3cplus.com/css3/a-guide-to-flexbox.html) , [grid知识](http://www.w3cplus.com/css3/line-base-placement-layout.html)
> 内容比较多，需要仔细阅读

* *为什么响应式设计 (responsive design) 和自适应设计 (adaptive design) 不同？*

> 响应式设计，load后怎么动都不会变化，除非重新open。自适应，load后，随着页面的变化自适应当前屏幕。*

* *你有兼容 retina 屏幕的经历吗？如果有，在什么地方使用了何种技术？*

> 参考github retinajs项目，方式手动写，data-rjs，媒体查询

* *请问为何要使用 `translate()` 而非 *absolute positioning*，或反之的理由？为什么？*
* *答：[js,css动画](https://segmentfault.com/q/1010000000645415 "js,css动画")*

#### <a name='js-questions'>JS 相关问题：</a>

* **请解释事件代理 (event delegation)。**
* **请解释 JavaScript 中 `this` 是如何工作的。**
* **请解释原型继承 (prototypal inheritance) 的原理。**

> 《js高级程序设计》第六章，对象创建
> 原型问题：引用对象属性共享
> 类似问题：出现new Function问题，需要每次实例，如果提取出去一个方法，会造成全局函数占用的污染
>

* **你怎么看 AMD vs. CommonJS？ requirejs, seajs**

> Commonjs：同步线性加载
> AMD: 异步并发加载，依赖前置
>
> CMD: 异步并发加载，就近依赖
>
> UMD: 兼容其他三种方式，但是代码量大
>
> 参考链接：[http://www.yl1001.com/group_article/8041472449293730.htm](http://www.yl1001.com/group_article/8041472449293730.htm)

* *请解释为什么接下来这段代码不是 IIFE (立即调用的函数表达式)：`function foo(){ }();`.*
  * *要做哪些改动使它变成 IIFE?*
* **描述以下变量的区别：`null`，`undefined` 或 `undeclared`？**
  * **该如何检测它们？**

> null: 表示不应该有对象，判断方法：
> 1. 排除：排除0，false，undefined
> 2. 全等: ===
>
>undefined: 缺少值，判断方法：typeof

* **什么是闭包 (closure)，如何使用它，为什么要使用它？**

> 知识参考：[http://kb.cnblogs.com/page/110782/](http://kb.cnblogs.com/page/110782/)，[https://www.zhihu.com/question/19554716](https://www.zhihu.com/question/19554716)

* *请举出一个匿名函数的典型用例？*
* *你是如何组织自己的代码？是使用模块模式，还是使用经典继承的方法？*
* **请指出 JavaScript 宿主对象 (host objects) 和原生对象 (native objects) 的区别？**

> [http://blog.sina.com.cn/s/blog_7122daac0100qg0i.html](http://blog.sina.com.cn/s/blog_7122daac0100qg0i.html)

* 请指出以下代码的区别：`function Person(){}`、`var person = Person()`、`var person = new Person()`？
* *`.call` 和 `.apply` 的区别是什么？*
* **请解释 `Function.prototype.bind`？**

> [http://www.css88.com/archives/5611](http://www.css88.com/archives/5611)

* **在什么时候你会使用 `document.write()`？**

> [http://www.jb51.net/article/50684.htm](http://www.jb51.net/article/50684.htm)

* **请指出浏览器特性检测，特性推断和浏览器 UA 字符串嗅探的区别？**

> 特性检测是更灵活的方式，更多的利用modernizr，$.support处理

> UA的方式应用的情况：统计浏览器访问信息，检测应用设备上

* **请尽可能详尽的解释 Ajax 的工作原理。**

> 利用`XMLHttpRequest`异步处理技术，用`js`执行回调函数，`xml`解析结果

* *使用 Ajax 都有哪些优劣？*
* *请解释 JSONP 的工作原理，以及它为什么不是真正的 Ajax。*
* **你使用过 JavaScript 模板系统吗？**
  * **如有使用过，请谈谈你都使用过哪些库？**

> 同`你用过哪些不同的 HTML 模板语言`的答案

* *请解释变量声明提升 (hoisting)。*
* *请描述事件冒泡机制 (event bubbling)。*
* **"attribute" 和 "" 的区别是什么？**

> attribute理解为特性，用nodenameMap形式存储，处理一些自定义属性
>
> property理解为属性，在dom级别，不能被添加的，可以赋值。
>
> 区别：attribute没有值是undefined，property没有值是空字符串

* *为什么扩展 JavaScript 内置对象不是好的做法？*
* *请指出 document load 和 document DOMContentLoaded 两个事件的区别。*
* **`==` 和 `===` 有什么不同？ 关于数据类型的检测**

> `0`,`undefined`,`false`,`null` ==
>
> `typeof`基本类型检测, `instanceof`引用类型检测

* **请解释 JavaScript 的同源策略 (same-origin policy)。**
* **如何实现下列代码：**
```javascript
[1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5]
```
    var x = [1, 2, 3, 4, 5];
	function y(a) {
	    var z = [],m;
	    m = a.slice();
	    z = m.concat(a);
	    z.reverse()
	    return z;
	}
	console.log(y(x));

* **什么是三元表达式 (Ternary expression)？“三元 (Ternary)” 表示什么意思？**

> 三元运算符

* **什么是 `"use strict";` ? 使用它的好处和坏处分别是什么？**

> [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)

* *请实现一个遍历至 `100` 的 for loop 循环，在能被 `3` 整除时输出 **"fizz"**，在能被 `5` 整除时输出 **"buzz"**，在能同时被 `3` 和 `5` 整除时输出 **"fizzbuzz"***。
* **为何通常会认为保留网站现有的全局作用域 (global scope) 不去改变它，是较好的选择？**
* **为何你会使用 `load` 之类的事件 (event)？此事件有缺点吗？你是否知道其他替代品，以及为何使用它们？**
* *请解释什么是单页应用 (single page app), 以及如何使其对搜索引擎友好 (SEO-friendly)。*
* **What is the extent of your experience with Promises and/or their polyfills?**
* **使用 Promises 而非回调 (callbacks) 优缺点是什么？**
* **使用一种可以编译成 JavaScript 的语言来写 JavaScript 代码有哪些优缺点？**
* *你使用哪些工具和技术来调试 JavaScript 代码？ 前端：F12,fiddler.后端：insprecct*
* **你会使用怎样的语言结构来遍历对象属性 (object properties) 和数组内容？**
* **请解释可变 (mutable) 和不变 (immutable) 对象的区别。**
  * **请举出 JavaScript 中一个不变性对象 (immutable object) 的例子？**
  * **不变性 (immutability) 有哪些优缺点？**
  * **如何用你自己的代码来实现不变性 (immutability)？**
* 请解释同步 (synchronous) 和异步 (asynchronous) 函数的区别。
* **什么是事件循环 (event loop)？**
  * **请问调用栈 (call stack) 和任务队列 (task queue) 的区别是什么？**

> [http://www.jb51.net/article/56022.htm](http://www.jb51.net/article/56022.htm)

* **解释 `function foo() {}` 与 `var foo = function() {}` 用法的区别**

> 1. 加载后立即被执行编译
> 2. 加载后，执行到该部分才会被执行

#### <a name='testing-questions'>测试相关问题：</a>

* **对代码进行测试的有什么优缺点？**

> 优点：1. 保证代码质量，在代码量大的时候保证效率不会降低
> 缺点：1. 需要编写测试用例，设计测试思路。花费一些时间

* **你会用什么工具测试你的代码功能？**

> 稳定的部分：
> 单元测试：karma,mocha,intern,coverage
> UI测试：phamtomjs,selenium,webdriver
>
> 不稳定部分：
> 单元测试：基本略过
> UI测试：手工暴力测试，差异监控
> 参考链接：[https://www.zhihu.com/question/29922082](https://www.zhihu.com/question/29922082)

* **单元测试与功能/集成测试的区别是什么？**
* *代码风格 linting 工具的作用是什么？*

#### <a name='performance-questions'>效能相关问题：</a>

* 你会用什么工具来查找代码中的性能问题？

> [http://fex.baidu.com/blog/2014/05/build-performance-monitor-in-7-days/](http://fex.baidu.com/blog/2014/05/build-performance-monitor-in-7-days/)

* 你会用什么方式来增强网站的页面滚动效能？
* 请解释 layout、painting 和 compositing 的区别。

#### <a name='network-questions'>网络相关问题：</a>

* 为什么传统上利用多个域名来提供网站资源会更有效？
* 请尽可能完整得描述从输入 URL 到整个网页加载完毕及显示在屏幕上的整个流程。
* *Long-Polling、Websockets 和 Server-Sent Event 之间有什么区别？*

> 参考链接：[http://www.ibm.com/developerworks/cn/web/1307_chengfu_serversentevent/](http://www.ibm.com/developerworks/cn/web/1307_chengfu_serversentevent/)

* **为什么websocket会比较复杂？**

> 看过的人家的吐槽，但是还是不知道复杂在哪，需要试一下
> 参考链接：[http://www.data321.com/webqianduan/2016069014/websocketjiumeiyoudailairenhede](http://www.data321.com/webqianduan/2016069014/websocketjiumeiyoudailairenhede)

* 请描述以下 request 和 response headers：
  * Diff. between Expires, Date, Age and If-Modified-...
  * Do Not Track
  * Cache-Control
  * Transfer-Encoding
  * ETag
  * X-Frame-Options
* 什么是 HTTP method？请罗列出你所知道的所有 HTTP method，并给出解释。

> OPTIONS: 请求确实是否允许连接
> GET,POST
> HEAD:一般超文本连接验证
> PUT:加入指定资源
> DELETE:删除指定资源
> TRACE:
> CONNECT:连接代理

#### <a name='coding-questions'>代码相关的问题：</a>

*问题：`foo`的值是什么？*
```javascript
var foo = 10 + '20';
```

> 1020
> 考点：类型优先级，位操作符
> 参考：《高级程序设计》3.5章

*问题：如何实现以下函数？*
```javascript
add(2, 5); // 7
add(2)(5); // 7
```

*问题：下面的语句的返回值是什么？*
```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

*问题：`window.foo`的值是什么？*
```javascript
( window.foo || ( window.foo = "bar" ) );
```

*问题：下面两个 alert 的结果是什么？*
```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

> 报错，因为bar没有定义

*问题：`foo.length`的值是什么？*
```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

*问题：`foo.x`的值是什么？*
```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

> `undefined` 跟内存的指向有关系
> 参考地址：[http://stackoverflow.com/questions/34933210/why-is-the-value-of-foo-x-undefined-in-foo-x-foo-n-2](http://stackoverflow.com/questions/34933210/why-is-the-value-of-foo-x-undefined-in-foo-x-foo-n-2)

*问题：下面代码的输出是什么？*
```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');
```

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
#### <a name='contributors'>贡献者：</a>

本文档始于 2009 年，是以下作者的合作成果：[@paul_irish](https://twitter.com/paul_irish) [@bentruyman](https://twitter.com/bentruyman) [@cowboy](https://twitter.com/cowboy) [@ajpiano](https://twitter.com/ajpiano) [@SlexAxton](https://twitter.com/slexaxton) [@boazsender](https://twitter.com/boazsender) [@miketaylr](https://twitter.com/miketaylr) [@vladikoff](https://twitter.com/vladikoff) [@gf3](https://twitter.com/gf3) [@jon_neal](https://twitter.com/jon_neal) [@sambreed](https://twitter.com/sambreed) 和 [@iansym](https://twitter.com/iansym)。

时至今日，文档已经融入超过 [100 位开发者](https://github.com/h5bp/Front-end-Developer-Interview-Questions/graphs/contributors)的贡献。
