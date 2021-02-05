function currying () {
  let args = []
  return function temp (...newArgs) {
      if (newArgs.length) {
          args = [
              ...args,
              ...newArgs
          ]
          return temp
      } else {
          let val = args.reduce((a, b) => a + b)
          args = [] //保证再次调用时清空
          return val
      }
  }
}

let addCurry = currying()
// 注意调用方式的变化
console.log(addCurry(1)(2)(3)(4, 5)())  //15
console.log(addCurry(1)(2)(3, 4, 5)())  //15
console.log(addCurry(1)(2, 3, 4, 5)())  //15