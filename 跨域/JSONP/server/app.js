const express = require('express');
const router = express.Router();
const app = express();

app.use(router)

router.get('/test', (req, res, next) => {
  let data = {
    name: "xiao",
    age: 20
  }
  const { msg, callback } = req.query;
  console.log('---msg', msg)
  console.log(callback, 'callback----')
  res.end(`${callback}(${JSON.stringify(data)})`); // 由于我们只有前端传来的回调函数的名称，所以后端需要创造一个这个名称的回调函数，并把需要返回的数据当做参数传入函数中，前端就可以通过window[callback]取得函数中的参数
  // JSON.stringify()的作用是将 JavaScript 对象转换为 JSON 字符串，而JSON.parse()可以将JSON字符串转为一个对象。
})

app.listen(3000, () => {
  console.log('listen on port 3000')
})