# ES6
- Let 和 Const
- 类(class)
- 箭头函数(Arrow function)
- 模板字符串(Template string)
- 解构赋值 
```
let a = 10
let b = 20
[a, b] = [b, a]
```
- 模块化
- 扩展操作符（Spread operator）
- Promise
- for of
- Symbol
symbol 是一种基本数据类型，Symbol()函数会返回symbol类型的值，该类型具有静态属性和静态方法。它的静态属性会暴露几个内建的成员对象；它的静态方法会暴露全局的symbol注册，且类似于内建对象类，但作为构造函数来说它并不完整，因为它不支持语法："new Symbol()"。

每个从Symbol()返回的symbol值都是唯一的。一个symbol值能作为对象属性的key值， 该属性的不可枚举的， 是匿名的，也因为这个属性是匿名的，它同样不会出现在 “Object.getOwnPropertyNames()” 的返回数组里。这个属性可以通过创建时的原始 symbol 值访问到，或者通过遍历 “Object.getOwnPropertySymbols()” 返回的数组
- 迭代器（Iterator）/ 生成器（Generator）
- Set
