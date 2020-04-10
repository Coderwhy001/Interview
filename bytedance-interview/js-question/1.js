const arr = [ {age: 10}, {age: 20} ]
// const newArr = arr.map(e => {
//   return {
//     age: e.age * 2
//   }
// })

// function test(callback) {
//   setTimeout(() => {
//     callback('hello word', new Error('发生错误'))
//   }, 2000)
// }
// test(function(str, err) {
//   console.log(str)
// })
Array.prototype.mymap = function(cb) {
    this.reduce((arr, cur) => {
     let res = cb(cur)
     arr.concat(cur)
   }, []) 
}
const newArr = arr.map(e => {
  return {
    age: e.age * 2
  }
})
console.log(newArr)