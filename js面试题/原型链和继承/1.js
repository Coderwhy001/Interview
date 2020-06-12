function myInstance(left, right) {
  if (typeof left !== 'object' && typeof left !== 'function' || left === null) return false
  left = Object.getPrototypeOf(left)
  while(true) {
    if (left === null) return false
    if (left === right) return true
    left = Object.getPrototypeOf(left)
  }
}

console.log(myinstanceof(new String('111'), String));//true