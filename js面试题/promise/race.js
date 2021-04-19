let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功了')
  }, 2000);
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')    
  }, 5000);
})


Promise.race([p1, p2]).then((result) => {
  console.log(result)               //['成功了', 'success']
}).catch((error) => {
  console.log(error)
})

// let p1 = Promise.resolve(1);
// let p2 = Promise.reject(2);

// Promise.all([p1, p2])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
// Promise.race([p1, p2])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
// // all会先返回失败的错误， reace则先返回最快的结果， 由于race p1比all的p2快， 所以是1， 2