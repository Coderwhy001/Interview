class EventHub {
  constructor() {
    this.event = {}
  }
  on (eventName, callback) {
    this.event[eventName] = this.event[eventName] || [];
    this.event[eventName].push(callback)
  }
  off(eventName, callback) {
    this.event[eventName] = null
  }
}




const eventHub = new EventHub();
function fn1() {
    console.log(1);
}
function fn2() {
    console.log(2);
}
function fn3() {
    console.log(3);
    eventHub.off("init", fn1);
    eventHub.off("init", fn2);
    eventHub.off("init", fn3);
}
function fn4() {
    console.log(4);
}
function fn5() {
    console.log(5);
}
function fn6() {
    console.log(6);
}

eventHub.on("init", fn1);
eventHub.on("init", fn2);
eventHub.on("init", fn3);
eventHub.on("init", fn4);
eventHub.on("init", fn5);
eventHub.on("init", fn6);


console.log("第一次执行事件");
eventHub.emit("init");
console.log("第二次执行事件");
eventHub.emit("init");