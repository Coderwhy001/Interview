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
Set对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
所以我们可以通过Set实现数组去重
```
const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]
console.log([...new Set(numbers)]) 
// [2, 3, 4, 5, 6, 7, 32]
```
- WeakSet 结构与 Set 类似，但区别有以下两点：
- WeakSet 对象中只能存放对象引用, 不能存放值, 而 Set 对象都可以。•WeakSet 对象中存储的对象值都是被弱引用的, 如果没有其他的变量或属性引用这个对象值, 则这个对象值会被当成垃圾回收掉. 正因为这样, WeakSet 对象是无法被枚举的, 没有办法拿到它包含的所有元素。
- Map/WeakMap 
Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。
例子如下，我们甚至可以使用NaN来作为键值：
WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。