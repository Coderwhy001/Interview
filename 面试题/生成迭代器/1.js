var myObject = { a: 1, b: 2, c: 3}
Object.defineProperty(myObject, Symbol.iterator, {
  enumerable: false,
  writable: false,
  configurable: true,
  value: function() {
    const _this = this;
    const keys = Object.keys(this)
    let index = 0
    return {
      next() {
        return {
          value: _this[keys[index++]],
          done: index>keys.length
        }
      }
    }
  }
})

for (var i of myObject) {
  console.log(i)
}