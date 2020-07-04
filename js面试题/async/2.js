const fetch = require('node-fetch');
function fetchUser() { 
  return new Promise((resolve, reject) => {
      fetch('https://api.github.com/users/superman66')
      .then((data) => {
          resolve(data.json());
      }, (error) => {
          reject(error);
      })
  });
}
/**
 * Promise 方式
 */
function getUserByPromise() {
  fetchUser()
      .then((data) => {
          console.log(data);
      }, (error) => {
          console.log(error);
      })
}
getUserByPromise();

/**
 * Generator 方式
 */
// function* fetchUserByGenerator() {
//   const user = yield fetchUser();
//   return user;
// }

// const g = fetchUserByGenerator();
// const result = g.next().value;
// result.then((v) => {
//   console.log(v);
//   console.log(result)
// }, (error) => {
//   console.log(error);
//   console.log(result)
// })
// console.log(result)
/**
 * async 方式
 */
// async function getUserByAsync(){
//   let user = await fetchUser();
//   return user;
// }
// getUserByAsync()
// .then(v => console.log(v));