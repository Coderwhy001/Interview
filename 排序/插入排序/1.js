function insertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j + 1] < arr[j]) {
        temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      } else {
        break
      }
    }
  }
  return arr
}

console.log(insertionSort([5,1,2,4,3]));