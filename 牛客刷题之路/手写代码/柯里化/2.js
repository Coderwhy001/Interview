function currying() {
    let arr = [];
    return function temp() {
        if (arguments.length) {
            arr = [...arr, ...arguments]
            return temp
        } else {
            let sum = arr.reduce((pre, cur) => pre + cur, 0)
            arr = [];
            return sum
        }
    }
}
let addCurry = currying()
// 注意调用方式的变化
console.log(addCurry(1)(2)(3)(4, 5)())  //15
console.log(addCurry(1)(2)(3, 4, 5)())  //15
console.log(addCurry(1)(2, 3, 4, 5)())  //15
