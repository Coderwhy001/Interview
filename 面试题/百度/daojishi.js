var daojishi = function (a) {
  for (let i = a; i > 0; i--) {
    setTimeout(() => {
      console.log(`倒计时${i}秒`)
    },(a-i)*1000, i)
  }
  return '倒计时开始:'
}
console.log(daojishi(10))
