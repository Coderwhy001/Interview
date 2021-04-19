function spin( arr ) {
  let newArr = [];
  dfs(arr, newArr, 'left')
  return newArr;
}
function dfs(arr, newArr, direction) {
  if (arr.length === 0) return arr;
  switch (direction) {
      case 'left':
          for (var left = 0; left < arr[0].length; left++) {
              newArr.push(arr[0][left])
          }
          arr.splice(0, 1)
          dfs(arr, newArr, 'down');
          break;
      case 'right':
          let len1 = arr.length, len2 = arr[len1-1].length
          for (var right = len2 - 1; right >= 0; right--) {
              newArr.push(arr[len1-1][right])
          }
          arr.splice(len1-1, 1);
          dfs(arr, newArr, 'up');
          break;
      case 'down':
          for (let down = 0; down < arr.length; down++) {
              newArr.push(arr[down][arr[down].length - 1]);
              arr[down].splice(arr[down].length - 1, 1)
          }
          dfs(arr, newArr, 'right');
          break;
      case 'up':
          for (let up = 0; up < arr.length; up++) {
              newArr.push(arr[arr.length - up - 1][0])
              arr[arr.length - up - 1].splice(0,1);
          }
          dfs(arr, newArr, 'left')
          break;
      break;
          default:
      break;
  }
}
console.log(spin([   [1,2,3,4,5,6],   [18,19,20,21,22,7],   [17,28,29,30,23,8],   [16,27,26,25,24,9],   [15,14,13,12,11,10] ]))


function tpl( templateStr ,  arr ) {
  let str = ''
  for (let i = 0; i < templateStr.length; i++) {
      let char = templateStr[i]
      if (!isNaN(Number(char))) {
          str += arr[char]
      } else if (char !== '{' && char !== '}' && char !== '$') {
          str += char
      }
  }
  return str
}
console.log(tpl("<div>{{$0}}({{$1}})</div>",["好未来", "TAL"]))