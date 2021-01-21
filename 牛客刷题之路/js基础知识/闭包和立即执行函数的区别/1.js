// 闭包实现计数器
var add = (function () {
  var counter = 0;
  return function () {return counter += 1;}
})();//这里var add已经是执行过后的函数了，var add=function(){..}

console.log(add())
console.log(add())
console.log(add())