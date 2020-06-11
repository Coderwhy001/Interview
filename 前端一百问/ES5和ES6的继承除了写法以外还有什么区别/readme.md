1. class声明会提升， 但不会初始化赋值。Foo 进入暂时性死区，类似于 let、const 声明变量。
```
const bar = new Bar(); // it's ok
function Bar() {
  this.bar = 42;
}

const foo = new Foo(); // ReferenceError: Foo is not defined
class Foo {
  constructor() {
    this.foo = 42;
  }
}
```
2. class声明内部会启用严格模式， 未声明的遍历抛出ReferenceError
```
// 引用一个未声明的变量
function Bar() {
  baz = 42; // it's ok
}
const bar = new Bar();

class Foo {
  constructor() {
    fol = 42; // ReferenceError: fol is not defined
  }
}
const foo = new Foo();
```
3. class的所有方法(包括静态方法和实例方法)都是不可枚举的
4. class 的所有方法（包括静态方法和实例方法）都没有原型对象 prototype，所以也没有[[construct]]，不能使用 new 来调用。
5. 必须使用new来调用class
6. class内部无法重写类名