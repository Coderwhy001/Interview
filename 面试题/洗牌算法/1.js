var arr = [1,2,3,4,5]
function getMess(arr) {
   var n = arr.length;
   var newArr = [];
   while(n) {
       // 随机获取一个数组下标
       var i = Math.floor(Math.random()*n--);
       // 把该随机下标对应的值push到新数组里面，原数组删除该值
       newArr.push(arr.splice(i, 1)[0]);
   }
   return newArr;
}
console.log(getMess(arr))

