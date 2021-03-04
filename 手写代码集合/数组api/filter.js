Array.prototype.myfilter = function(callback, thisargs)  {
  let oldArr = this;
  let k = 0;
  let A = new Array(oldArr.length);
  for (let i = 0; i < oldArr.length; i++) {
    if (callback.call(thisargs, oldArr[i], i, oldArr)) {
      A[k++] = oldArr[i]
    }
  }
  A.length = k;
  return A
}


const arr = [1,2,3]
console.log(arr.myfilter(item => item > 1))