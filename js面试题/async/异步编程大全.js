const sleep = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(resolve(1))
    }, time)
  })
}
sleep(1000).then(() => {
  console.log(1)
})

// function* sleepGenerator(time) {
//   yield new Promise((resolve, reject) => {
//     setTimeout(resolve, time)
//   })
// }
// sleepGenerator(1000).next().value.then(() => console.log(1))

// const sleep = (time) => {return new Promise((resolve, reject) => setTimeout(resolve, time))}
// async function sleepasync () {
//   let out =  sleep(1000)
//   console.log(out)
//   return out
// }
// sleepasync()
