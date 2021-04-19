function debounce(fn) {
  let timeout = null
  return function() {
    if (timeout) {
      clearTimeout(timeout)
    }
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
    flag = false;
    setTimeout(() => {
      fn.call(this, arguments)
      flag = true
    }, 1000)
  }
}
function sayHi(e) {
  console.log(e.target.innerWidth, e.target.innerHeight);
}
window.addEventListener('resize', throttle(sayHi));


const yourFunction = function (func, threshold) {
  let flag = true;
  return function(...args) {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      func.apply(this, args)
      flag = true
    }, threshold)
  }
}
const triggerSearch = yourFunction((val) => {
  console.log(val);
}, 300);
triggerSearch('searchText');
triggerSearch('searchText1');




/**
• 编写一个方法，在页面执行后可以探测到后续页面发出的 jsonp 请求，打印出请求地址
*/
function detectJsonpRequest () {
  setInterval(() => {
    let script = document.getElementsByTagName('script')
    let url = script.src.split('?')[0]
    console.log(url)
  }, 1000)
}
