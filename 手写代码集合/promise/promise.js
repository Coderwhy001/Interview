//极简的实现
class Promise {
  callbacks = [];
  state = 'pending';
  value = null;
  constructor(fn) {
      fn(this._resolve.bind(this));
  }
  then(onFulfilled) {
      if (this.state === 'pending') {
        this.callbacks.push(onFulfilled);
      } else {
        onFulfilled(this.value)
      }
      return this; // 由于new promise，this指向promise本身，所以.then后return函数本身即可形成链式调用
  }
  _resolve(value) {
    this.state = 'fulfilled';
    this.value = value;
    this.callbacks.forEach(fn => fn(value)); // 增加状态后，当.then在resolve之前执行则注册函数，.then在之后执行则直接执行传入的函数
  }
}

//Promise应用
let p = new Promise(resolve => {
  console.log('done');
  resolve('5秒');
}).then((tip) => {
  console.log(tip);
})
.then(console.log(123))



// https://zhuanlan.zhihu.com/p/58428287



