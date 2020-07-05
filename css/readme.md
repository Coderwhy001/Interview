# 浮动
特点： 浮动元素影响的不仅是自己， 他会影响周围元素对其进行环绕
为什么要清除浮动(解决父元素高度坍塌问题)
      一个快级元素如果没有设置height， 其height由子元素撑开， 对子元素使用浮动之后， 子元素就会脱离文档流
      也就是说， 父级元素中没有内容可以撑开其高度， 这样父级元素height就会被忽略
如何清除浮动
      1. 给父级元素定义高度 2. 让父级元素也浮动 3. 父级定义display: table 4. 父级元素设置overflow: hidden
# 伪类：
      link 表示链接正常情况下（即页面加载完成时）显示的颜色
	    hover:表示鼠标悬停时显示的颜色
	    visited:链接被点击时显示的位置
	    focus：元素获得光标焦点时的颜色
	    active: 元素处于激活状态
	link -> visited -> hover -> focus -> active
# 行内元素和块级元素
一般来说。 html的元素分为两种， 块级元素和行内元素
块级元素： 块状元素排斥其他元素与其位于同一行， 可以设定元素的宽 高， 块级元素一般是其他元素的容器， 可容纳块级元素和行内元素
行内元素： 行内元素不可以设置宽和高， 但可以与其他行内元素位于同一行， 行内元素内一般不可以包含块级元素。 行内元素的高度一般由元素内部的字体大小决定， 宽度由内容的长度控制。
常见块级元素有： h1, h2, h3, h4, h5, h6, p, div, , ol, ul, li, form, pre, table, td, th;
常见内联元素有：em,strong,span,button,input,label,code,select,img,textarea
两者的区别：
1. 块级元素占据一整行， 行内元素的宽度是其内容的宽度， 多个内联元素排列会放在同一行里除非放不下， 才会挤到新的一行
2. 块级元素可以设置宽度width和高度height，而内联元素设置widht和height是无效的
3. 块级元素可以包含块级元素和内联元素，而内联元素只能包含文本
4. 块级元素可以设置margin和padding属性，行内元素只有margin-left、margin-right、padding-left、padding-right起作用
可以通过display: inline || block 来切换这两种元素