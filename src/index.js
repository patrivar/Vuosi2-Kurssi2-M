// index.js
import http from 'http';
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(`http request ${req.url} ${req.method}`);
    if (req.method=== 'GET' && req.url === '/kukkuu') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('message: Kukkuu!');
    }else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not found!');
    }

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome to my REST API!');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});