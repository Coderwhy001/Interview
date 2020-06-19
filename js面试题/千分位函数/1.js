function format(nums) {
  nums = nums + ""
  let temp = []
  let count = 0
  for (let i = nums.length-1; i >= 0; i--) {
    temp.unshift(nums[i])
    count++;
    if (count % 3 === 0 && i != 0) {
      temp.unshift(',')
    }
  }
  return temp.join('')
}

console.log(format(1234567))
