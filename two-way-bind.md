# 数据双向绑定

**什么是双向绑定？**

> 通过处理Model和View后，Model层做出的任何变化立刻在View产生对应的变化，不通过任何中间层进行代码过程处理的方式。

**有什么作用？**

> 在遇到需要绑定model和view的情况下，简单快速的绑定，同时降低耦合性，维护成本低

**哪些情况下会应用到？**
> 常见的应用场景：
>
> * 我们用编辑器时，希望及时看到预览的效果
> * 绑定银行卡时，根据你数据的卡号，产生中间的空位，做出来显示
> * 操作web 应用时，点击某个区域即可显示这个区域的状态
>
> 在需要及时看到最终结果的场景中，一般情况下都需要用到双向绑定


**实现方式，有几种？**

> 常见实现方式
> 
> * 订阅模式
> * `dirty check`
> * `defineproperty`
> * 针对某个功能，使用`propertychange`，这个不能算。

---

> **订阅模式**
> * 在应用一个Model、一个View的情况下没有问题，但是遇到多对多的关系时，就会乱套

```javascript
	<div class="app">
	    <div class="publish">
	        <input type="text" class="publishFirst">
	        <input type="text" class="publishSecond">
	    </div>
	    <div class="subscriber">
	        <div class="message">{{message}}</div>
	    </div>
	</div>
```
> 一个subscriber需要订阅两个publish(first,second)，这时两个发布者都是model怎么管理呢？
> 怎么同步？如果遇到更多的情况怎么办呢？
> ***所以找个方式肯定行不通，在多个的情况***

---

> **dirty check**
> 
> * 给所有的model绑定上事件，一旦有任何的model变化了，就触发这个model所在位置的DOM遍历，找到不同于之前的地方，进行操作（修改DOM，业务处理之类）
> 
> * 优点：当改变一个model以后遇到需要大批量渲染的情况，可以手动控制这种机制的触发时机，对页面进行一次的渲染，效率高
> * 缺点：当对应的model和view数量很大的时，这种遍历的成本会变得很高，越是复杂的项目，用起来性能越低。（小型应用完全没问题）
> 

---

> **defineProperty**
>
> * 利用ES6的defineproperty特性，当对象进行赋值之后，会自动触发该方法的get，set（类似于function输出时，走toString的机制）
> 
>> * 优：不用手动调用，对于model直接修改后，对应的set方法会直接产生变化，显得更为方便、智能 
>> * 优：不会遍历，效率始终保持高效，因为是内部机制，绑定


**还有哪些跟他有关的知识拓展？**

> * 先有功能，
> * 在把功能抽象化、可复用
> * 后续就是如何让这个功能更好使
> 
> * 绑定的最后就是渲染，使用virtual DOM，可以让渲染更快速。性能更好
> * virtual DOM地址：
