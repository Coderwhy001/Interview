## container-block
页面元素有一个箱子装着他们
箱子：container-block

## 确定包含快
- 如果 position 属性为 static 、 relative ，包含块可能由它的最近的祖先块元素
- 如果position属性为sticky，该值总是创建一个新的层叠上下文（stacking context）。注意，一个sticky元素会“固定”在离它最近的一个拥有“滚动机制”的祖先上（当该祖先的overflow 是 hidden, scroll, auto, 或 overlay时），即便这个祖先不是最近的真实可滚动祖先。
- 如果 position 属性为 absolute ，包含块就是由它的最近的 position 的值不是 static 的祖先元素的内边距区的边缘组成。
- 如果 position 属性是 fixed，包含块是 viewport
- 如果 position 属性是 absolute 或 fixed，包含块也可能是由满足以下条件的最近祖先元素：
  - transform/perspective 不是 none
  - will-change：transform/ perspective
  - filter 不是 none 或者 will-change 是 filter(only works on Firefox).
  - contain 是 paint (例如: contain: paint;)
```html
<div>
  1
  <div>
    2
    <div>
      3
    </div>
  </div>
</div>
```

## position
static
relative
fixed: 默认相对于viewport 创建的包含快来都定位，
除非他的祖先元素设置了（4条属性），该祖先元素表现为包含块
absolute: 相对于它的包含块确定盒子的定位和大小

width,height,padding,margin...  他们的百分比计算的时候也是相对于 cotainer-block 计算的

## 参考
https://www.w3.org/TR/css-position-3/


## normal flow
格式化上下文：
inline-level-box：水平方向从左往右布局，垂直方向默认以 baseLine 对齐
block-level-box：从上当下
relative position:


## base line


