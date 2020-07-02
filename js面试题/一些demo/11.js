// let a = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve(1)
//   }, 5000)
// })
// a.then(value => {
//   console.log(value)
// })

// var obj = { a: 'b' }
// function fc(p) {
//   p = { a: 'c' }
//   return p
// }

// console.log(fc(obj))
// console.log(obj.a)
var a = {
  b: 1,
  c: 1
}
a.b = 2;
console.log(a.c)