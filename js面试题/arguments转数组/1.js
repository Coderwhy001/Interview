let args = Array.prototype.slice.call(arguments)

let args = Array.from(arguments)

let args = [...arguments]

function sum(a, b) {
  let args = Array.prototype.concat.apply([], arguments);//apply方法会把第二个参数展开
  console.log(args.reduce((sum, cur) => sum + cur));//args可以调用数组原生的方法啦
}
sum(1, 2);//3

let obj = {
  0: 'nihao',
  1: 'haha',
  2: 'gansha',
  'length': 3
}

let A = Array.prototype.slice.call(obj)
console.log(A)
