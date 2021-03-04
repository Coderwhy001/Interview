function foo (arr) {
  let result = [];
  let obj = {};
  for (let i of arr) {
    console.log(obj)
    if (!obj[i]) {
      result.push(i);
      obj[i] = 1
    }
  }
  return result
}

console.log(foo([1,1,2,2,3,3]))