var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res) {
    if(req.url === '/' || req.url === '/home') {
        res.writeHead(200, {'Content-Type':'text/html'});
        var myStream = fs.createReadStream(__dirname + '/home.html', 'utf8');
        myStream.pipe(res);
    } else if(req.url === '/about') {
        res.writeHead(200, {'Content-Type':'text/html'});
        var myStream = fs.createReadStream(__dirname + '/about.html', 'utf8');
        myStream.pipe(res);
    } else {
        res.writeHead(404, {'Content-Type':'text/html'});
        var myStream = fs.createReadStream(__dirname + '/404.html', 'utf8');
        myStream.pipe(res);
    }
})

server.listen(9090);
console.log('now listening port is 9090')