# CommonJS 模块化和 ES6 模块化的区别
- CommonJs模块是require导入， Moudle.exports导出， ES6是最新方式， import导入， export导出
- Node中暂时还不能使用import， 需要使用babel配置一下
- CommonJs导入的值是静态资源, ES6是引用类型
- Commonjs是运行时加载， ES6是编译时加载
- Commonjs只能导入一个， ES6的export可以导入多个， export default可以导入一个
- Commonjs中this的值是当前模块， ES6的this指向是undifine