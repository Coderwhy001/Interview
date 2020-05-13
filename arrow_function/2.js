function mynew (fn, ...arg) {
  
  obj = Object.create(fn.prototype)
  fn.call(obj, ...arg)
  return obj
}