# async 函数返回一个 Promise 对象
async 函数内部 return 返回的值。会成为 then 方法回调函数的参数。
```
async function  f() {
    return 'hello world'
};
f().then( (v) => console.log(v)) // hello world
```
如果 async 函数内部抛出异常，则会导致返回的 Promise 对象状态变为 reject 状态。抛出的错误而会被 catch 方法回调函数接收到。
```
async function e(){
    throw new Error('error');
}
e().then(v => console.log(v))
.catch( e => console.log(e));
```
# async 函数返回的 Promise 对象，必须等到内部所有的 await 命令的 Promise 对象执行完，才会发生状态改变
也就是说，只有当 async 函数内部的异步操作都执行完，才会执行 then 方法的回调。
```
const delay = timeout => new Promise(resolve=> setTimeout(resolve, timeout));
async function f(){
    await delay(1000);
    await delay(2000);
    await delay(3000);
    return 'done';
}

f().then(v => console.log(v)); // 等待6s后才输出 'done'
```