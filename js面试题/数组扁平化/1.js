function flat (array) {
  return array.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flat(cur) : cur)
  }, [])
}
console.log(flat([1, [2, [3, [4, 5]]], 6]))

ary.flat(Infinity)

while(ary.some(Array.isArray)) {
  ary = Array.prototype.concat(...ary)
}