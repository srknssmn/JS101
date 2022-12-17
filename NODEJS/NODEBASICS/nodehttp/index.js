const http = require('http');

const server = http.createServer((request, response) => {

    const url = request.url;

    if(url === '/') {
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write('<h1>INDEX SAYFASI</h1>')
    } else if(url === '/about') {
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write('ABOUT SAYFASI')
    } else if(url === '/contact') {
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write('CONTACT SAYFASI')
    } else {
        response.writeHead(404, {'Content-Type': 'text/html'})
        response.write('<h1>404 SAYFA BULUNAMADI!</h1>')
    }
    
    response.end();
});

const port = 3000;

server.listen(port,  () => {
    console.log(`Sunucu port ${port} 'de başlatıldı.'`)
});