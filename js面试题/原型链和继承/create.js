Object.mycreate = function(obj1) {
  function A () {}
  A.prototype = obj1
  return new A()
}
var obj1 = {name: "Lilei"};
var lilei = Object.mycreate(obj1);
console.log(lilei); // {}
console.log(lilei.name)