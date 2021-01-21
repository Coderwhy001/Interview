function calc (n, res = []) {
  const arr = res;
  let lastNum = res.length === 0 ? 2 : res[res.length - 1]
  for (let i = lastNum; i <= n; i++){
    if (n % i === 0) {
      arr.push(i);
      console.log(111)
      calc(n / i, arr);
      break;
    }
  }
  return arr;
}


// console.log(calc(2))
// // [2]
// console.log(calc(8))
// // [2, 2, 2]
// console.log(calc(24))
// [2, 2, 2, 3]
console.log(calc(30))
// [2, 3, 5]