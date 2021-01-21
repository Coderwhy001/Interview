const add = (function () {
  var count = 1;
  return {
    inc: function () {
      return count+=1
    }
  }
})()

console.log(add.inc())
console.log(add.inc())
console.log(add.inc())