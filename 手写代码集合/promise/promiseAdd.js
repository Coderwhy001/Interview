function Scheduler() {
	let temp = 0;
	let res = [];
  this.add = function (timeout) {
    temp++;
    let myPromise = new Promise(resolve => {
      if (temp <= 2) {
        resolve(timeout().then(function f() {
          if (res.length) {
            let {callback, myresolve} = res.shift();
            myresolve(callback().then(f))
          } else {
            temp = 0
          }
        }))
      } else {
        res.push({callback: timeout, myresolve: resolve})
      }
    })
    return myPromise
  }
}

const timeout = (time) =>
	new Promise((resolve) => {
		setTimeout(resolve, time);
	});
const scheduler = new Scheduler();
const addTask = (time, order) => {
	scheduler.add(() => timeout(time)).then(() => console.log(order));
};
addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");