Function.prototype.myBind = function (context, ...args) {
  const fn = this
  args = args ? args : []
  return function newFn(...newFnArgs) {
      if (this instanceof newFn) {
          return new fn(...args, ...newFnArgs)
      }
      return fn.apply(context, [...args,...newFnArgs])
  }
}
