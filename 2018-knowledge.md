* **HTML5新增了哪些内容或API**

> 语义化标签：
>> section, article, footer, header, nav, aside
>
> 缓存：
> 
>> * cache.mainifest
>> * local storage
>> * indexedDB
>> * file API
>
> 访问设备：
> 
>> * geolocation
>> * media
>> * contacts
>> * deviceOrientation
>
> 连接方式：
> 
>> * websocket
>> * server-sent
>
> 多媒体：
>> * audio
>> * video
>
> 图形：
> 
>> * svg
>> * canvas
>> * webGL
>> * CSS3 3D
>
> 性能：
> 
>> * web worker 多线程
>> * xhr2

> * 参考资料
>> *  [https://blog.csdn.net/gane_cheng/article/details/52819118](https://blog.csdn.net/gane_cheng/article/details/52819118 "https://blog.csdn.net/gane_cheng/article/details/52819118")


* **左右布局：左边定宽、右边自适应，不少于3种方法**

* **offset, client, scroll 里面的四种数据的作用**

> `offset`是当元素初始化时候，相对于父级**定位**元素的位置值
>
> 如果没有定位元素，就向上查找，table，body标签
>
> `offset` > `height`, `width`就是元素本身定义的宽高

> `scroll`的`left`, `top`值是相对于内容实际宽度值
>
> 实际内容 = 盒模型`width` + `border` + `滚动条宽度`
>
> `scroll`的`height`, `width`就是盒模型的宽高

> `client`就是用户看到的实际区域
>
> `client`的`width`, `height`会去掉系统自动生成的滚动条的距离
>
> client的left, top只有在滚动条在左边的情况下才会出现不等于0的值

* **实现加载进度条**

> * document state -> loading, interactive, complete
>
> * xhr progressEvent -> loaded / total 
>
> * elements -> querySelector, 确定元素是否已经存在
>
> * eventlag -> 匀速器








