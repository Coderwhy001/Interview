function quickSort(arr) {
  if (arr.length <= 1) return arr
  let left = []
  let right = []
  let pivot = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) right.push(arr[i])
    if (arr[i] < pivot) left.push(arr[i])
  }
  return [...(quickSort(left)), pivot, ...(quickSort(right))]
}
console.log(quickSort([5,1,2,4,3]));