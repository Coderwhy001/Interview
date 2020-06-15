  console.log('script start')
  setTimeout(function() {
    console.log('setTimeout')
  }, 0)
  new Promise((resolve, reject)=>{
    console.log("promise1") 
    resolve()
  })
  .then(()=>{
    console.log("then11")
    new Promise((resolve, reject)=>{
      console.log("promise2")
      resolve();
    })
    .then(() => {
      console.log("then2-1")
    })
    .then(() => {
      console.log("then2-2")
    })
  })
  .then(()=>{
    console.log("then12")
  })
  .then(()=>{
    console.log("then13")
  })
 console.log('script end')
