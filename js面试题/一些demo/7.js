// const obj = {
//   name: 'jsCoder',
//   skill: ['es6', 'react', 'angular'],
//   say: function () {
//       for (let i = 0, len = this.skill.length; i < len; i++) {
//           setTimeout(() => {
//               console.log(this)
//               console.log('N0.' + parseInt(i+1) + this.name);
//               console.log(this.skill[i]);
//               console.log()
//               console.log('------------------');
              
//           }, 0);
//           console.log(i+1);
//       }
//   }
// }
// obj.say();

// 期望得到以下结果
// 1
// 2
// 3
// N0.1 jsCoder
// es6
// ------------------
// N0.2 jsCoder
// react
// ------------------
// N0.3 jsCoder
// angular
// ------------------

function a () {
    setTimeout(() => {
        console.log(this)
    })
}
a()