# CSS中的盒子模型
盒模型是CSS中核心的概念, 描述了元素如何显示。
盒模型由： 元素的内容 + 内边距 + 边框 + 外边距组成
- Margin(外边距) - 清除边框外的区域，外边距是透明的。
- Border(边框) - 围绕在内边距和内容外的边框。
- Padding(内边距) - 清除内容周围的区域，内边距是透明的。
- Content(内容) - 盒子的内容，显示文本和图像。
- 在box-sizing属性为conten-box的时候，width=元素的内容区
- 在box-sizing属性为border-box的时候，width=元素内容区+padding+border
