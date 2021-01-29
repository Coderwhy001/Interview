# 伪类和伪元素的区别
伪类：用于已有元素处于某种状态时为其添加对应的样式，这个状态是根据用户行为而动态变化的。 比如hover， active等动作
伪元素： 用于创建一些不在DOM树中的元素，并为其添加样式。例如，我们可以通过:before来在一个元素之前添加一些文本，并为这些文本添加样式，虽然用户可以看见这些文本，但是它实际上并不在DOM文档中。

# display:none,visibility:hidden,opacity:0三者区别
## 占据空间
   display:none 不会占据额外空间，会引起回流和重绘
   visibility:hidden 会占据额外空间，只会引起重绘
   opacity:0 会占据额外空间，只会引起重绘
## 继承
   display:none 不会被子元素继承，但其自身隐藏，子元素自然也隐藏
   visibility:hidden 会被子元素继承，子元素可以设置visibility：visible重新显示
   opacity:0 会被子元素继承，但子元素不会显示
## 事件绑定
   display:none 不会触发
   visibility:hidden 不会触发
   opacity:0 会被触发
## 过渡动画
   display:none trasition对其无效
   visibility:hidden trasition对其无效
   opacity:0 trasition对其有效