var fn = Symbol(); // added
Function.prototype.myCall = function (context) {
  context = context ? Object(context) : window
  context[fn] = this;
  let args = [...arguments].slice(1);
  let res = context[fn](...args);
  delete context[fn];
  return res;
}

function a () {
  console.log(this[fn])
  return 111;
}
const result = a.myCall(1);
console.log(result, 'result')