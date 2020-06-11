// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;

// console.log(a);

// function sayHi() {
//   return (() => 0)();
// }

// typeof sayHi();

// JavaScript中只有6个假值：

// undefined
// null
// NaN
// 0
// '' (empty string)
// false
// 函数构造函数，如new Number和new Boolean都是真值。
// function c(c) {
//     var c = 3;
//     console.log(c);
// }
// var c = 3
// console.log(c);
// c(2);

var val=1;
var obj={
    val:2,
    del:function(){
        console.log(this);                    
        this.val*=2;
        console.log(this.val);
    }
}

obj.del();
