# HTML
- Doctype作用? 标准模式和兼容模式各有什么区别？
```
<!DOCTYPE>声明位于HTML文档中的第一行， 处于<html>标签之前。 告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。
（2）标准模式的排版和js运作模式都是以该浏览器支持的最高标准运行。 在兼容模式中， 页面以宽松的向后兼容的方式显示， 模拟老式浏览器的行为以防止站点无法工作。
```
- HTML为什么只需要写`<!DOCTYPE HTML>`?
```
HTML5不基于SGML, 因此不需要对DTD进行引用， 但是需要doctype来规范浏览器的行为(让浏览器按照他们已更改的方式来运行)
而HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。
```
- 行内元素有哪些？ 块级元素有哪些？ 空(void)元素有哪些？
```
首先： CSS规范规定， 每个元素都有display属性， 确定该元素的类型， 每个元素都有默认的display值， 如div的display默认值为"block", 则为块级元素， span默认display属性值为"inline", 是行内元素
(1) 行内元素有： a b span img input select 
(2) 块级元素有： div ul li ol h1 h2 h3 h4 p ...
(3) 常见的空元素: <br> <hr> <img> <link> <meta>
```
- 页面导入样式时， 使用link和@import有什么区别？
```
(1) link属于XHTML标签， 除了加载CSS外， 还能用于定义RSS， 定义rel连接属性等作用； 而@import是CSS提供的， 只能用于加载CSS
(2) 页面被加载的时候， link会同时被加载， 而@import引用的CSS会等于页面被加载完再加载;
(3) import是CSS2.1提出的， 只在IE5以上才能被识别， 而link是XHMTL标签， 无兼容问题
(4) link支持使用js控制DOM区改变样式， 而@import不支持
```
- 介绍一下你对浏览器内核的理解？
```
主要分为两部分： 渲染引擎和js引擎
渲染引擎： 负责取得网页的内容， 整理讯息， 以及计算网页的显示方式， 然后会输出至显示器或打印机。 浏览器的内核的不同对于网页的语法解释会有不同， 所以渲染的效果也不同。所有网页浏览器， 电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。
JS引擎： 解析和执行JavaScript来实现网页的动态效果
最开始渲染引擎和JS引擎并没有区分的很明确， 后来JS引擎越来越独立， 内核就倾向于只指向渲染引擎
```
- html5有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？
```
HTML5现在已经不是SGML的子集， 主要是关于图像， 位置， 存储， 多任务等功能的增加
  绘画canvas；
  用于媒介回放的video和audio元素；
  本地离线存储localstorage长期存储数据， 浏览器关闭后数据不丢失； sessionStorage的数据在浏览器关闭后自动删除；
  语意化更好的内容元素，比如 article、footer、header、nav、section;
  表单控件，calendar、date、time、email、url、search;
  新的技术webworker, websocket, Geolocation;
移除的元素：
  	  纯表现的元素：basefont，big，center，font, s，strike，tt，u;
  	  对可用性产生负面影响的元素：frame，frameset，noframes；
* 支持HTML5新标签：
  	 IE8/IE7/IE6支持通过document.createElement方法产生的标签，
    	 可以利用这一特性让这些浏览器支持HTML5新标签，
    	 浏览器支持新标签后，还需要添加标签默认的样式。
```