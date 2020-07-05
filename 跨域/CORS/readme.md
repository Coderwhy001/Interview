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
