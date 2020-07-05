function sort (arr1, arr2) {
  let i = 0, j = 0, k = 0;
  let result = []
  while(i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result[k++] = arr1[i++]
    }
    if (arr1[i] > arr2[j]) {
      result[k++] = arr2[j++]
    }
  }
  while(i < arr1.length) {
    result[k++] = arr1[i++]
  }
  while(j < arr2.length) {
    result[k++] = arr2[j++]
  }
  return result
}

console.log(sort([1,2,5], [2,4,6]))