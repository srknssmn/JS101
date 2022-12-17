const http = require('http');

const server = http.createServer((request, response) => {
    const url = request.url;

    if (url === '/') {
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write('<h2><strong>xxx Sayfasina Hos Geldiniz.</strong></h2>')
    } else if (url === '/index') {
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write('<h2><strong>xxx index Sayfasina Hos Geldiniz.</strong></h2>')
    } else if (url === '/hakkimda') {
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write('<h2><strong>xxx hakkimda Sayfasina Hos Geldiniz.</strong></h2>')
    } else if (url === '/iletisim') {
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write('<h2><strong>xxx iletisim Sayfasina Hos Geldiniz.</strong></h2>')
    } else {
        response.writeHead(404, {'Content-Type': 'text/html'})
        response.write('<h1 style="color: red;"><strong>404 SAYFA BULUNAMADI!</strong></h1>')
    } 

    response.end();
})

const port = 5000;

server.listen(port, () => {
    console.log(`Server port ${port} 'de Başlatıldı!`)
})