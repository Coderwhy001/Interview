var name = 'global'
function  a() {
    console.log(name, '第一个')
}

function b(){
    var name = 'b';
    a();
}

b(); // global

function a(){
    console.log('1', '第二个');
}

a();
function a(){
    console.log('2', '第三个');
}
a();

// ************
var a = function(){
    console.log('1');
}

a();
var a = function(){
    console.log('2');
}
a();

// ********
var name = 'global'
function a(){
    console.log(name);
}
a();

function b(){
    var name = 'b';
    function a(){
        console.log(name);
    }
    a();
}

// *******
var name = 'global'
function a(){
    console.log(this.name);
}
a();

function b(){
    var name = 'b';
    function a(){
        console.log(this.name);
    }
    a();
}

// ***
function a(){
    console.log('a')
    b();
    console.log('a end')
}

function b(){
    console.log('b');
    c();
    console.log('b end')
}

function c(){
    console.log('c');
}

a();