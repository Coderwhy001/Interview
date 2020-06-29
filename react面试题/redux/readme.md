## redux的工作流程
首先， 我们看下几个核心概念：
- Store: 保存数据的地方， 你可以把它看成一个容器， 整个应用只能有一个store。
- State： Store对象包含所有数据， 如果想得到某个时点的数据， 就要对store生成快照， 这种时点的数据集合， 就叫做state。
- Action: State的变化， 会导致View的变化。 但是， 用户接触不到State， 只能接触到View。 所以， State的变化必须是View导致的。 Action就是View发出的通知， 表示State应该要发生变化了
- Action Creator: View要发送多少种消息， 就会有多少种Action。 如果都手写， 会很麻烦， 所以我们定义一个函数来生成Action， 这个函数就叫Action Creator
- Reducer: Store收到Action以后， 必须给出一个新的State， 这样View才会发送变化。 这种State的计算过程就叫做Rducer。 Reducer是一个函数， 他接受Action和当前State作为参数， 返回一个新的State
- dispatch: 是view发出Action的唯一方法
然后我们过下整个工作流程：
1. 首先， 用户(通过View) 发出Action， 发出方式就用到了dispatch方法.
2. 然后， Store自动调用Reducer， 并且传入两个参数： 当前State和收到的Action， Reducer会返回新的State
3. State一旦有变化， Store就会调用监听函数， 来更新View
## redux中如何进行异步操作?
当然我们可以在componentDidmount中直接进行请求无需借助redux
但是在一定的规模项目中， 上述放法很难进行异步流的管理， 通常情况下我们会借助redux的异步中间件进行异步处理
redux的异步中间件其实有很多， 但是当下主流的异步中间件只有redux-thunk， redux-saga
## redux异步中间件之间的优劣？
### redux-thunk优点
- 体积小： redux-thunk的实现方式很简单， 只有不到20行代码
- 使用简单： redux-thunk没有引入像redux-saga或者redux-observable额外的范式上手简单
### redux-thunk缺陷:
- 样式代码过多： 与redux本身一样， 通常一个请求需要大量的代码， 而且很多都是重复性质的
- 耦合严重： 异步操作与redux的action耦合在一起， 不方便管理
- 功能孱弱: 有一些实际开发中常用的功能需要自己进行封装
### redux-saga优点：
- 异步解耦： 异步操作被转移到单独saga.js中， 不再是参杂在action.js或component.js 中
- action摆脱thunk function: dispatch 的参数依然是一个纯粹的 action (FSA)，而不是充满 “黑魔法” thunk function
- 异常处理： 受益与generator function 的 saga 实现，代码异常/请求失败 都可以直接通过 try/catch 语法直接捕获处理
- 功能强大： redux-saga提供了大量的Saga辅助函数和effect创建器供开发者使用， 开发者无需封装或者简单封装即可使用
- 灵活： redux-saga可以将多个saga可以串行/并行组合起来， 形成一个非常实用的异步flow
- 易测试， 提供了各种case的测试方案， 包括mock task， 分支覆盖等等
### redux-saga缺陷:
- 额外的学习成本： redux-saga不仅在使用难以理解的generator function,而且有数十个API,学习成本远超redux-thunk,最重要的是你的额外学习成本是只服务于这个库的,与redux-observable不同,redux-observable虽然也有额外学习成本但是背后是rxjs和一整套思想
- 体积庞大: 体积略大,代码近2000行，min版25KB左右
- 功能过剩: 实际上并发控制等功能很难用到,但是我们依然需要引入这些代码
- ts支持不友好: yield无法返回TS类型
# 什么时候需要使用redux？
## 不需要使用Redux的场景：
- 用户的使用方式非常简单
- 用户之间没有协作
- 不需要与服务器大量交互， 也没有使用WebSocket
- 视图层(View)只从单一来源获取数据
## 需要使用redux的场景：
- 用户的使用方式复杂
- 不同身份的用户有不同的使用方式
- 多个用户之间可以协作
- 与服务器大量交互， 或者使用了WebSocket
- View需要从多个来源获取数据
- 如果您的React应用中状态十分多，难以维护的时候，这个时候redux是个不错的选择。（这里所说的状态就是react的state）
- 如果您需要数据共享，即多个react组件需要用同一个数据源。
- 如果您需要一些全局性的状态控制，比如应用中的当前登录人，我们说不定会在哪个组件中使用登录人信息，如果我们将它注册到全局redux中，那么我们就无需关系哪个组件要用了，我们用的时候直接从全局redux中取就行
- 某组件的业务逻辑过于复杂，在react组件中处理这些数据太过繁琐，我们可以考虑将部分逻辑拆分到redux中。
- 使用redux可以将数据和UI分离开，如果您为了实现这样的效果，您可以尝试使用redux.