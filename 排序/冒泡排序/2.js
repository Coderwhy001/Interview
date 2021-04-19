function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let flag = true
    for (let j = i+1; j < arr.length; j++) {
      let temp
      if (arr[i] > arr[j]) {
        temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
        flag = false
      }
    }
    if (flag) break;
  }
  return arr
}

console.log(bubbleSort([2,4,3,6,5]))
