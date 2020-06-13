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