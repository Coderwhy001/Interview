var obj = { name: 1} 
var obj2 = {name: 2} 
function b() {
   console.log(this.name) 
}
b.bind(obj).bind(obj2)()