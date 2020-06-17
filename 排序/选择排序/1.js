function selectSort(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) { 
        min = j
      }
  }
  if (min !== i) {
    let temp = arr[min]
    arr[min] = arr[i]
    arr[i] = temp
  }
}
  return arr
}

console.log(selectSort([5,1,2,4,3]))
