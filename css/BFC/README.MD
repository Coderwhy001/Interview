BFC就是块级格式上下文， 是页面盒模型布局中的一种CSS渲染模式， 相当于一个独立的容器， 里面的元素和外部的元素互不影响。 创建BFC的方式有：
1. html根元素
2. float浮动
3. 绝对定位
4. overflow不为visable
5. display为表格布局或者弹性布局
BFC主要作用是：
1. 清楚浮动
2. 防止同一BFC容器中相邻元素间的外边距重叠问题

## 块盒（block box）
块盒有以下特性：

- 当元素的CSS属性display为block，list-item或 table时，它是块级元素 block-level；
- 视觉上呈现为块，竖直排列；
- 块级盒参与(块格式化上下文)；
- 每个块级元素至少生成一个块级盒，称为主要块级盒(principal block-level box)。一些元素，比如<li>，生成额外的盒来放置项目符号，不过多数元素只生成一个主要块级盒。
## 行内盒（inline box）
当元素的CSS属性display的计算值为inline，inline-block或inline-table时，称它为行内级元素；
视觉上它将内容与其它行内级元素排列为多行；典型的如段落内容，有文本(可以有多种格式譬如着重)，或图片，都是行内级元素；
行内级元素生成行内级盒(inline-level boxes)，参与行内格式化上下文(inline formatting context)。同时参与生成行内格式化上下文的行内级盒称为行内盒(inline boxes)。所有display:inline的非替换元素生成的盒是行内盒；
不参与生成行内格式化上下文的行内级盒称为原子行内级盒(atomic inline-level boxes)。这些盒由可替换行内元素，或 display 值为 inline-block 或 inline-table 的元素生成，不能拆分成多个盒；
