
var obj = {
  name: 'Saurabh',
  display: function(){
    console.log(this.name); // 'this' 指向 obj
   }
 };
 
 obj.display(); // Saurabh 
 var display = obj.display;
display(); // Saurabh
