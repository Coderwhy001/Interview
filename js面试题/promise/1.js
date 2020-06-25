// //如果传入的 value 本身就是 Promise 对象，则该对象作为 Promise.resolve 方法的返回值返回。  
// function fn(resolve){
//   setTimeout(function(){
//       resolve(123);
//   },3000);
// }
// let p0 = new Promise(fn);
// let p1 = Promise.resolve(p0);
// // 返回为true，返回的 Promise 即是 入参的 Promise 对象。
// console.log(p0 === p1);
// console.log(p0)
// console.log(p1)

let p1 = Promise.resolve(123); 
//打印p1 可以看到p1是一个状态置为resolved的Promise对象
console.log(p1)
