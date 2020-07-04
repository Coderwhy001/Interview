// 为了解决循环引用的问题， 我们引入此版深拷贝
const isObject = (target) => (typeof target === 'object' || typeof target === 'function' && target !== null)
const deepClone = function (target, map = new Map) {
  if (!isObject(target)) return target
  if (map.get(target)) return target
  map.set(target, true)
  let cloneTarget = Array.isArray(target) ? [] : {}
  for (let attr in target) {
    if (target.hasOwnProperty(attr)) {
      cloneTarget[attr] = deepClone(target[attr], map)
    }
  }
  return cloneTarget
}

const a = { val: 2 };
a.target = a;
let newA = deepClone(a);
console.log(newA)
