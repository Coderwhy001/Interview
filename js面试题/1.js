function sum(a, b) {
  return a + b;
}

console.log(sum(1, "2")) // 数字和字符串相加， 数字被转换成字符串

function sayHi() {
  return (() => 0)()
}

console.log(typeof sayHi())


console.log(new Boolean(false))
console.log(new Number(0))

console.log(typeof typeof 1)

const numbers = [1, 2, 3]
numbers[10] = 11;
console.log(numbers)

let x;
console.log(x)

setInterval(() => console.log("Hi"), 1000);