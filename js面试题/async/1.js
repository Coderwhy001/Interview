async function a(){
  await setTimeout('console.log(1)', 1000)
  console.log(2)
}

await a()