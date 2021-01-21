# 为什么选择使用框架而不是原生？
- 框架的好处
1. 组件化： 其中以React的组件化最为彻底， 甚至可以到函数级别的原子组件， 高度的组件化是我们的工程易于维护， 易于组合拓展。
2. 天然分层: JQuery 时代的代码大部分情况下是面条代码,耦合严重,现代框架不管是 MVC、MVP还是MVVM 模式都能帮助我们进行分层，代码解耦更易于读写。
3. 生态: 现在主流前端框架都自带生态,不管是数据流管理架构还是 UI 库都有成熟的解决方案。
4. 开发效率: 现代前端框架都默认自动更新DOM,而非我们手动操作,解放了开发者的手动DOM成本,提高开发效率,从根本上解决了UI 与状态同步问题.


# 虚拟DOM的优劣如何？
## 优点：
- 保证性能下限： 虚拟DOM可以经过diff找出最小差异， 然后批量进行patch， 这种操作虽然比不上手动优化， 但是比起粗暴的DOM操作性能要好很多， 因此虚拟DOM可以保证性能下线
- 无需手动操作DOM： 虚拟DOM的diff和patch都是在一次更新中自动进行的，我们无需手动操作DOM， 极大提高开发效率
- 跨平台： 虚拟DOM本质上是Javascript对象， 而DOM与平台强相关， 相比之下虚拟DOM可以进行更方便的跨平台操作， 例如服务器渲染， 移动端开发
## 缺点
- 无法进行极致优化: 在一些性能要求极高的应用中虚拟DOM无法进行针对性的极致优化,比如VScode采用直接手动操作DOM的方式进行极端的性能优化
# 虚拟DOM实现原理？
- 虚拟DOM本质上是js对象， 是对真实DOM的抽象
- 状态变更时， 记录新树和旧树的差异(diff算法)
- 最后把差异更新到真正的dom中(path)
# React最新的生命周期是怎样的
- React16之后有三个生命周期被废弃
- componentWillMounts
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
- 合成事件：就是react 在组件中的onClick等都是属于它自定义的合成事件
- 原生事件：比如通过addeventListener添加的，dom中的原生事件
2. setState的异步并不是说内部由异步代码实现, 其实本身执行的过程和代码都是同步的， 只是合成时间和钩子函数的调用顺序在更新之前， 导致在合成事件和钩子函数中没法立马拿到更新后的值，形式了所谓的“异步”，当然可以通过第二个参数 setState(partialState, callback) 中的callback拿到更新后的结果。
# react如何防止脚本攻击
- jsx防止注入攻击: React DOM在渲染之前默认会过滤所有传入的值。 他可以确保你的应用不会被注入攻击。 所有的内容在渲染之前都被转换成了字符串。 这样有效的防止XSS攻击
- 所有的用户输入都需要经过 HTML实体编码，React 已经做了，它会在运行时动态创建DOM节点然后填入文本内容 (也可以强制设置HTML内容，不过这样比较危险)
# react类组件中为什么要通过bind改变this指向
类组件是es6的语法糖， 在类中会自动开启严格模式， 而我们在全局调用合成方法时， this会指向undifine， 而非严格模式下this会指向global， 所以我们在类组件中需要改变this指向使其正常运行
# react hooks 调用规则
React 内置了一些像 useState 这样的 Hook，你也可以创建你自己的 Hook 来复用不同组件之间的状态逻辑，其实简单来说 Hook 就是我们常见的 JavaScript 函数，但是使用它们会有两个额外的规则，如下

- 只能在函数最外层调用 Hook，不要在循环、条件判断或者子函数中调用
- 只能在 React 函数式组件或自定义 Hook 中使用 Hook，不要在其他 JavaScript 函数中调用
之所以不要在循环当中去调用 Hook，这是因为 Hook 是通过数组实现的，每次 useState 都会改变下标，React 需要利用调用顺序来正确更新相应的状态，如果 useState 被包裹循环或条件语句中，那每就可能会引起调用顺序的错乱，从而造成意想不到的错误