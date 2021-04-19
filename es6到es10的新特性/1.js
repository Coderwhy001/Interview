
function * withYield(a) {
  let b = 5;
  yield a + b;
  b = 6; // 在第一次调用后仍可以重新定义变量
  yield a * b;
}

const [a,b,c,d] = withYield(6);

// console.log(calcSix.next()) // 11
// console.log(calcSix.next()); // 36
// console.log(calcSix.next())
console.log(a,b,c,d)