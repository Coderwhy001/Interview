// var data = [1, 2, 3, 4];

// var arr = data.map((item,index)=>{
//     console.log(data,index);
//     if(item === 2){
//         data.shift()
//     }
// })
// console.log(arr)

var data = [1, 2, 3, 4];

var arr = data.forEach((item,index) => {
    console.log(data,index);
    if(item === 2){
        data.shift()    // 删除数组的第一个元素
    }
})
console.log(arr)