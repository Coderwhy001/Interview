// const delay = timeout => new Promise(resolve=> setTimeout(resolve, timeout));
// async function f(){
//     await delay(1000);
//     await delay(2000);
//     await delay(3000);
//     return 'done';
// }

// f()
// .then(v => console.log(v))


// async function  f() {
//   return await 1
// };
// f().then( (v) => console.log(v)) // 1

// let a;
// async function f() {
//     await Promise.reject('error');
//     a = await 1; // 这段 await 并没有执行
// }
// f().then(v => console.log(a));

// 正确的写法
let a;
async function correct() {
    try {
        await Promise.reject('error')
    } catch (error) {
        console.log(error);
    }
    a = await 1;
    return 2;
}

correct().then(v => console.log(v)); // 1