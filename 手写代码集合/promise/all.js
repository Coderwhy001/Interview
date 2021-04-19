function myPromiseAll (promise) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promise)) {
      throw new TypeError('只能是数组')
    }
    const result = [];
    let count = 0;
    promise.forEach((item, index) => {
      item.then(res => {
        result[index] = res;
        count++;
        if (count === promise.length) {
          resolve(result)
        }
      })
      .catch(err => {
        reject(err)
      })
    })
  })
}


let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功了')
  }, 2000);
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')    
  }, 1000);
})


myPromiseAll([p1, p2]).then((res)=>{
    console.log(res, 'res')
})
.catch((err)=>{
  console.log(err, 'err')
})