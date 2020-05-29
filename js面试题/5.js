// const numbers = [1, 2, 3]
// numbers[10] = 11;
// console.log(numbers[3])

// var a = {
//   value : 0,
//   valueOf () {
//     this.value++;
//     return this.value
//   }
// }

// console.log(a == 0)


Object.defineProperty(window, 'a', {
  get () {
    return window.a += 1
  }
})
if (a == 1 && a == 2 && a == 3) {
  console.log(1)
}
