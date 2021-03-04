var arr = [{ age: 1 }, { age: 3 }, { age: 5 }, { age: 8 }, { age: 8 }, { age: 8 }]
//输出出现最多的数字和次数  8 3
const foo = (arr) => {
  let count = 0, num;
  let map = new Map()
  for (let object of arr) {
    map.set(object.age, map.has(object.age) ? map.get(object.age) + 1 : 1)
  }
  for (let [k, v] of map) {
    count = Math.max(count, v)
    if (map.get(k) === count) {
      num = k
    }
  }
  return `出现最多的数字为${num} 次数为${count}`
}

console.log(foo(arr))