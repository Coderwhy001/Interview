Array.prototype.myMap = function(callback, thisArgs) {
  let oldArr = this;
  let newArr = [];
  oldArr.forEach((item, index) => {
    newArr[index] = callback.call(thisArgs, item, index, oldArr)
  })
  return newArr
}