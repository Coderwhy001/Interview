// ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']
// ['A', 'B', 'C', 'D']
// ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']

var foo = function (arr1, arr2) {
  let arr = []
  for (let target of arr2) {
    let count = 0
    while(count < 2) {
      let num = arr1.shift()
      arr.push(num)
      count++;
    }
    arr.push(target)
  }
  return arr
}

console.log(foo(['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'], ['A', 'B', 'C', 'D']))
