function disorderly(arr){
 for (let i = 1; i < arr.length; i++) {
    const random = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[random]] = [arr[random], arr[i]];
  }
  return arr;
}
console.log(disorderly([1,2,3,4,5,6]))
