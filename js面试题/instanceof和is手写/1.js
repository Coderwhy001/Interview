function myInstanceof(left, right) {
  if (typeof left !== 'object' ||  left === null) return false
  let proto = Object.getPrototypeOf(left)
  while(true) {
    if (proto === null) return false
    if (proto === right.prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}

// console.log(myInstanceof(new String("111"), String));//true



// 手写is 


function Myis(x, y) {
  if (x === y) {
    //运行到1/x === 1/y的时候x和y都为0，但是1/+0 = +Infinity， 1/-0 = -Infinity, 是不一样的
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    //NaN===NaN是false,这是不对的，我们在这里做一个拦截，x !== x，那么一定是 NaN, y 同理
    //两个都是NaN的时候返回true
    return x !== x && y !== y;
  }
}

console.log(0 === -0)
console.log(Object.is(0, -0))