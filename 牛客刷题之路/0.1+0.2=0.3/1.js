function equal(a,b) {
  return Math.abs(a - b) < Math.pow(2, -52) ? true : false
}

console.log(equal((0.1+0.2), 0.3))