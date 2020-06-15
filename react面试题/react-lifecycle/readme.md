# react生命周期官方网站
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
# react最新常用生命周期
react分为两个阶段：
- Render阶段 这个阶段纯净而且没有副作用， 可能会被react暂停， 中止或者重新启动
- Commit阶段 可以使用DOM， 运行副作用， 安排更新。
三个时间段
## 挂载时
- Render阶段
1. constructor: 构造函数， 最先被执行， 我们通常在构造函数里初始化state对象或者给自定义方法绑定this
2. render： render函数是纯函数， 只返回需要渲染的东西， 不应该包含其他的业务逻辑， 可以返回原生的DOM， React组件、Fragment、Portals、字符串和数字、Boolean和null等内容
- Commit阶段
3. React更新DOM和refs
4. componentDidMount， hooks中useEffect自带第一次挂载
## 更新时
- Render阶段
1. New props, setState(), forceUpdate()
2. render: 更新阶段也会触发此生命周期
- Commit阶段
3. React更新DOM和refs
4. componentDidUpdate， hooks中useEffect根据依赖确认是否更新组件
## 卸载时
- Commit阶段
1. componentWillUnmount hooks中的useEffect的return阶段