function mynew(obj1, ...arg) {
  let obj = Object.create(obj1.prototype)
  obj1.apply(obj, arg)
  return obj instanceof Object ? obj : this
}

function Func1(name) {
  this.name = name
}
const obj1 = {}
var f1 = mynew(Func1)
console.log(f1 instanceof Func1)

