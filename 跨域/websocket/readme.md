# websocket
websocket是一种双向通信协议， 在建立连接之后， Websocket的server与client都能主动向对方发送或接受数据， 连接建立好了之后client与server之间的双向通信就与http无关了， 因此可以跨域
WebSocket 协议本质是一个基于 TCP 的协议，为了建立一个 WebSocket 连接，客户端浏览器首先要向服务器发起一个 HTTP 请求，其中附加头信息 "Upgrade:WebSocket"，表明这是一个申请协议升级的 HTTP 请求，服务器端解析这些附加的头信息然后产生应答信息返回给客户端，客户端和服务器端的 WebSocket 连接就建立起来了，双方就可以通过这个连接通道自由的传递信息，并且这个连接会持续存在直到客户端或者服务器端的某一方主动的关闭连接
```
Socket.io
前端：
new webSocket()
socket.onopen()
socket.onmessage()
后端：
new WebSocket.Server({port})
on('connection')
ws.on('message')
```