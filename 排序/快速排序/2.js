function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let left = [], right = [];
  let midNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < midNum) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), midNum, ...quickSort(right)]
}

console.log(quickSort([5,1,2,4,3]));