var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return ""
  let arr = strs[0]
  for (let i = 1; i < strs.length; i++) {
    let j = 0
    for (; j < strs[i].length && j < arr.length; j++) {
      if (arr[j] !== strs[i][j]) {
        break;
      }
    }
    arr = arr.substring(0, j)
    if (arr.length === 0) {
      return ""
    }
  }
  return arr
};

console.log(longestCommonPrefix(["dog","racecar","car"]))