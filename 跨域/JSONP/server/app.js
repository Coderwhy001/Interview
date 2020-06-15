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
  res.end(`${callback}(${JSON.stringify(data)})`); // 把数据交给回调返回前端调用 
  // JSON.stringify()的作用是将 JavaScript 对象转换为 JSON 字符串，而JSON.parse()可以将JSON字符串转为一个对象。
})

app.listen(3000, () => {
  console.log('listen on port 3000')
})