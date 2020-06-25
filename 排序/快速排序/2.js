function quickSort (arr) {
  if (arr.length <= 1) return arr;
  let left = []
  let right = []
  let provide = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (provide >= arr[i]) left.push(arr[i])
    if (provide < arr[i]) right.push(arr[i])
  }
  return quickSort(left).concat(provide, quickSort(right))
}
console.log(quickSort([5,1,4,4,3]));