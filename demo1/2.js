var p={
  　　_age:18,
  　　get age(){  　　//Getter不能有任何形式的参数
  
  　　　　return this._age;
  　　},
  　　set age(val){  　　//Setter必须恰好有一个形式参数
  
  　　　　this._age=val;
  　　}
  }

console.log(p.age); // 18
p.age=20; // 20
p.age; // 20