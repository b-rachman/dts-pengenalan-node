
//Apabila mau responsnya HTML

var http = require('http');

var server=http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write('Selamat datang di <em>Node JS</em>')
    res.end()
});

server.listen(8000);

console.log("server running on http://localhost:8000")