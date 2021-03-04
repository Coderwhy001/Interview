var arr = []
for (let i = 0; i < 100; i++) {
  arr.push(Math.floor(Math.random()*100))
}
var random = function (arr) {
  let newArr = new Array(10).fill(0)
  let tens, ones;
  for (let num of arr) {
    if (num < 10) {
      newArr[num] += 1
    } else {
      tens = Math.floor(num / 10)
      ones = num % 10
      newArr[tens] += 1
      newArr[ones] += 1
    }
  }
  return newArr
}
console.log(random(arr))
// console.log(arr)
