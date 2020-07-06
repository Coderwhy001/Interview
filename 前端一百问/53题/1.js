// var a = {n: 1};
// var b = a;
// a.x = a = {n: 1};

// console.log(a) 	
// console.log(b)

// var A = function(){}
// const a = new A()
// console.log(A instanceof Function)

var x = 10;
function a(y) {
  var x = 20;
  return b(y)
}
function b(y) {
  for (let x = 0; x < 30; x++) {}
  return x + y
}
