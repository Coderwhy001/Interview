function f1() {
  return (function (){
    var count = 0;
    return {
      inc: function () {
        return count+= 1
      }
    }
  })()
}
let result = f1();
console.log(result.inc());//1
console.log(result.inc());//2
console.log(result.inc());//3
// 实现这个函数f1