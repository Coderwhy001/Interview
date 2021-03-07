function sum(a) {
  return function (b) {
    if (b !== undefined) {
      return sum(a+b)
    } else {
      return a
    }
  }
}

let ans = sum(1)(2)(3)(4)(5)()

console.log(ans)
