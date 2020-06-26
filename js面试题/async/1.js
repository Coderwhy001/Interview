// async function a(){
//   await setTimeout('console.log(1)', 1000)
//   console.log(2)
// }

// await a()

let a = 0
let b = async () => {
  a = a + await 10
  console.log('2', a) // -> '2' 10
}
b()
a++
console.log('1', a) // -> '1' 1