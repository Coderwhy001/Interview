// name = "erdong";
// var object = {
//     name: "chen",
//     getNameFunc: function () {
//         return function () {
//             return this.name;
//         }
//     }
// }
// console.log(object.getNameFunc()());

// var a = {
//   value: 0,
//   valueOf() {
//     this.value++;
//     return this.value
//   }
// }

// if (a == 1 && a == 2 && a == 3) {
//   console.log(1)
// }

// console.log(a)

function fn1() {
  let a = 1
  return function fn2() {
    a++;
    console.log(a)
  }
}
var f = fn1()
f()
f()
f()