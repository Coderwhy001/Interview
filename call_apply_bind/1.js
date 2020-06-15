// "use strict"
// function  a() {console.log(this)}

// a.call(null)
var personLike = {
  0: '从海',
  1: '前端大佬',
  length: 2
}
// let a = Symbol()
// let b = Symbol()
// personLike.a = '海哥'
// personLike.b = '海贼王'
Array.prototype.push.call(personLike, '海哥', '海贼王')
console.log(personLike)
Object.prototype.toString.call('123')

console.log(0.1+0.2)
//0.1和0.2在转换成二进制后会无限循环，由于标准位数的限制后面多余的位数会被截掉，此时就已经出现了精度的损失
// 计算机中用二进制来存储小数，而大部分小数转成二进制之后都是无限循环的值，因此存在取舍问题，也就是精度丢失。
