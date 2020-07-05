# Promise.all的使用
Promise.all可以将多个Promise实例包装成一个新的Promise实例。 同时， 成功和失败的返回值是不同的， 成功的时候返回的是一个结果数组， 而失败的时候则返回最先被reject失败状态的值
- 需要特别注意的是，Promise.all获得的成功结果的数组里面的数据顺序和Promise.all接收到的数组顺序是一致的，即p1的结果在前，即便p1的结果获取的比p2要晚。这带来了一个绝大的好处：在前端开发请求数据的过程中，偶尔会遇到发送多个请求并根据请求顺序获取和使用数据的场景，使用Promise.all毫无疑问可以解决这个问题。
# Promise.race的使用
顾名思义，Promse.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。
# Promise和async await的区别
1. 函数前面多了一个async关键字。 await只能用在async定义的函数内。 async函数会隐式的返回一个promise， 该promise的resolve值就是函数return的值
promise中resolve的值其实就是promise这个函数的返回值