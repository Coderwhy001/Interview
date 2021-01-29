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


let p1 = Promise.resolve(1),
    p2 = Promise.resolve(2),
    p3 = Promise.resolve(3);

myPromiseAll([p1, p2, p3]).then((res)=>{
    console.log(res, 'res')
})
.catch((err)=>{
  console.log(err, 'err')
})