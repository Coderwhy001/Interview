Function.prototype.myApply = function (context, arr) {
  context = context ? Object(context) : window;
  context.fn = this;
  let result;
  if (arr) {
    result = context.fn(...arr)
  } else {
    result = context.fn()
  }
  delete context.fn
  return result;
}

function a (arr) {
  console.log(this);
  return 111;
}
const result = a.myApply(1, [1,2,3]);
console.log(result, 'result')