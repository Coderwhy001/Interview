class Foo {
  constructor(name){
    this.name = name
    // this.display = this.display.bind(this);
  }

  display(){
    console.log(this);
  }
}

var foo = new Foo('Saurabh');
foo.display(); // Saurabh

var display = foo.display;
display(); // Saurabh
