function indexOf(arr, target, start=0) {
  if (start < 0) start += arr.length;
  if (start >= arr.length) return -1;
  for (let i = start; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
console.log([1,2,3,4,5], 3)
