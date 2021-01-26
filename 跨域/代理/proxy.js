const http = require('http');

// 第一步：接受客户端请求
const server = http.createServer((request, response) => {
	
    // 代理服务器，直接和浏览器直接交互，也需要设置：CORS 的首部字段
    response.writeHead(200, {
        'Access-Control-Allow-Origin': '*',  // 设置 optins 方法允许所有服务器访问 
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
    });
	
    // 第二步：将请求转发给服务器
    const proxyRequest = http.request({
        host: '127.0.0.1',
        port: 4000,
        url: '/',
        method: request.method,
        headers: request.headers
    }, (serverResponse) => {
        
        // 第三步：收到服务器的响应
        var body = '';

        serverResponse.on('data', (chunk) => {
            body += chunk;
        });

        serverResponse.on('end', () => {
            console.log('The data is ' + body );
            
            // 第四步：将响应结果转发给浏览器
            response.end(body);
        })

    }).end();

});

server.listen(3000, () => {
    console.log('The proxyServer is running at http://localhost:3000');
});
