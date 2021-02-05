// Promise.resolve(1)
// .then((x)=> x + 1)
// .then((x)=> { throw new Error('My Error') })
// .catch(()=>1)
// .then((x)=>x + 1)
// .then((x)=>console.log(x))
// .catch(console.error(111))


Function.prototype.a = () => alert(1);
Object.prototype.b = () => alert(2);
function A() {};
var a = new A();
a.a(); 
a.b();