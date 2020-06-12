function myinstanceof (left, right) {
  if (typeof left !== 'object' &&  typeof left !== 'function' || left === null) return false
  left = left.__proto__
  while(true) {
    if (left === null) {
      return false
    }
    if (left === right.prototype) {
      return true
    }
    left = left.__proto__
    // left = Object.getPrototypeOf(left)
  }
}


console.log(myinstanceof(new String('111'), String));//true
