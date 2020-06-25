var lengthOfLongestSubstring = function (s) {
  // if (s.length <= 1) return s.length
  let len = 0
  for (let i = 0; i < s.length; i++) {
    let arr = []
    for (let j = i; j < s.length; j++) {
      if (arr.indexOf(s[j]) === -1) {
        arr.push(s[j])
        len = Math.max(len, arr.length)
      } else {
        break;
      }
    }
  }
  return len;
};

console.log(lengthOfLongestSubstring("pwwkew"))