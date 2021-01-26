const http = require('http');

const data = { name: 'xiaoyixuan', password: '654321' };

const server = http.createServer((request, response) => {

    if (request.url === '/') {
        response.end( JSON.stringify(data) );
    }

});
 
server.listen(4000, () => {
    console.log('The server is running at http://localhost:4000');
});
