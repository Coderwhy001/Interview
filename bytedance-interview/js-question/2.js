var name = 'foo';
function showName() {
    console.log(name);
}
function changeName() {
    var name = 'BigBear';
    showName();
}
changeName();