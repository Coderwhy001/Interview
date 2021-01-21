Function.prototype.myBind = function (context) {
  const self = this;
  const args = [...arguments].slice(1)
  return function () {
    return self.call(context, ...args, ...arguments)
  }
}

var value = 2;

var foo = {
    value: 1
};

function bar(name, age) {
    return {
		value: this.value,
		name: name,
		age: age
    }
};

var bindFoo = bar.myBind(foo, "Jack");
console.log(bindFoo(20))