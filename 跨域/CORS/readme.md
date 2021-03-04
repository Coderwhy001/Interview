# cors
通常使用CORS时，异步请求会被分为简单请求和非简单请求，非简单请求的区别是会先发一次预检请求。
【简单请求】
使用下列方法之一且没有人为设置对 CORS 安全的首部字段集合之外的其他首部字段：
GET
HEAD
POST
```
- 仅当POST方法的Content-Type值等于下列之一才算作简单请求
       - text/plain
       - multipart/form-data
       - application/x-www-form-urlencoded
```
发送预检请求方法是options， 包括必须的字段origin，和Access-Control-Request-Header，Access-Control-Request-Method，询问服务器origin中的域名是否在允许跨域的名单中，服务器跨域通过Access-Control-Allow-Origin设置跨域名单，一旦服务器通过了预检请求，会返回一个Access-Control-Max-Age，表示在这个时间内不需要再发预检请求了，和缓存一个道理。还会返回一个Access-Control-Allow-Credentials告诉浏览器是否要带cookie，浏览器也可以通过设置控制是否带cookie，如果浏览器预检请求带上了header，服务器也会回应我这边所允许的请求头。