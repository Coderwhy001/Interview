// JSON.parse(JSON.stringify)

const deepClone = function (target) {
  if (typeof target === 'object' && target !== null) {
    let cloneTarget = Array.isArray(target) ? [] : {}
    for (let attr in target) {
      if (target.hasOwnProperty(attr)) {
        cloneTarget[attr] = deepClone(target[attr])
      }
    }
    return cloneTarget
  } else {
    return target
  }
}
// 乞丐版深拷贝
let obj = {val : 100};
obj.target = obj;

deepClone(obj)