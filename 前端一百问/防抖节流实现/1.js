function debounce(fn) {
  let timeout = null
  return function() {
    clearTimeout(timeout)
    timeout = setTimeout(function() {
      fn.apply(this, arguments)
    }, 500)
  }
}

function sayHi() {
  console.log('防抖成功')
}

var inp = document.getElementById('inp')
inp.addEventListener('input', debounce(sayHi))
// 防抖

function throttle(fn) {
  let flag = true
  return function() {
    if (!flag) return;
    flag = false
    setTimeout(() => {
      fn.apply(this, arguments)
      flag = true
    }, 500)
  }
}
function sayHi(e) {
  console.log(e.target.innerWidth, e.target.innerHeight);
}
window.addEventListener('resize', throttle(sayHi));