# 为什么选择使用框架而不是原生？
- 框架的好处
1. 组件化： 其中以React的组件化最为彻底， 甚至可以到函数级别的原子组件， 高度的组件化是我们的工程易于维护， 易于组合拓展。
2. 天然分层
# 虚拟DOM的优劣如何？
## 优点：
- 保证性能下限： 虚拟DOM可以经过diff找出最小差异， 然后批量进行patch， 这种操作虽然比不上手动优化， 但是比起粗暴的DOM操作性能要好很多， 因此虚拟DOM可以保证性能下线
- 无需手动操作DOM： 虚拟DOM的diff和patch都是在一次更新中自动进行的，我们无需手动操作DOM， 极大提高开发效率
- 跨平台： 虚拟DOM本质上是Javascript对象， 而DOM与平台强相关， 相比之下虚拟DOM可以进行更方便的跨平台操作， 例如服务器渲染， 移动端开发
## 缺点
- 无法进行极致优化: 在一些性能要求极高的应用中虚拟DOM无法进行针对性的极致优化,比如VScode采用直接手动操作DOM的方式进行极端的性能优化
# 虚拟DOM实现原理？
- 虚拟DOM本质上是js对象， 是对真实DOM的抽象
- 状态变更时， 记录新树和旧树的差异
- 最后把差异更新到真正的dom中
# React最新的生命周期是怎样的
- React16之后有三个生命周期被废弃
- componentWillMount
- componentWillReceiveProps
- componentWillUpdate
# 生命周期三个阶段 挂载阶段， 更新阶段， 卸载阶段
- 挂载阶段：
-  constructor: 构造函数， 最先被执行， 我们通常在构造函数里初始化state对象或者给自定义方法绑定this
- getDerivedStateFromProps： static getDerivedStateFromProps(nextProps, prevState),这是个静态方法,当我们接收到新的属性想去修改我们state，可以使用getDerivedStateFromProps
- render： render函数是纯函数， 只返回需要渲染的东西， 不应该包含其他的业务逻辑， 可以返回原生的DOM， React组件、Fragment、Portals、字符串和数字、Boolean和null等内容
- componentDidMount: 组件装载之后调用，此时我们可以获取到dom结点并操作， 比如对canvas，svg的操作，服务器请求，订阅都可以写在这个里面，但是记得在componentWillUnmount中取消订阅
- 更新阶段：
- getDerivedStateFromProps：此方法在更新个挂载阶段都可能会调用
- shouldComponentUpdate: shouldComponentUpdate(nextProps, nextState),有两个参数nextProps和nextState，表示新的属性和变化之后的state，返回一个布尔值，true表示会触发重新渲染，false表示不会触发重新渲染，默认返回true,我们通常利用此生命周期来优化React程序性能
- render: 更新阶段也会触发此生命周期
- componentDidUpdate
- 卸载阶段
- componentwillunmount: 当我们的组件被卸载或者销毁了就会调用，我们可以在这个函数里去清除一些定时器，取消网络请求，清理无效的DOM元素等垃圾清理工作
# setState到底是异步还是同步
1. setState只在合成事件和钩子函数中是异步的， 在原生事件和setTimeout 中都是同步的
2. setState的异步并不是说内部由异步代码实现, 其实本身执行的过程和代码都是同步的， 只是合成时间和钩子函数的调用顺序在更新之前， 导致在合成事件和
