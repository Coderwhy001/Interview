# hash路由
hash路由模式主要是通过触发原生监听事件 hashchange，浏览器监听到他的变化从而改变地址，我们可以根据hash值的改变展示对应的内容
触发的方式
- 点击a标签，改变了浏览器地址
- 浏览器的前进后退行为
- 通过window.location.hash直接改变hash值，从而触发hashchange事件
