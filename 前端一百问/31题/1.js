// for (var i = 0; i< 10; i++){
// 	setTimeout(() => {
// 		console.log(i);
//     }, 1000)
// }

// for (let i = 0; i< 10; i++){
// 	setTimeout(() => {
// 		console.log(i);
//     }, 1000)
// }

// for (var i = 0; i< 10; i++){
// 	setTimeout((i) => {
// 		console.log(i);
//     }, 1000, i)
// }

var b = 10;
(function (b){
    b = 20;
    console.log(b.b); 
})(b);
