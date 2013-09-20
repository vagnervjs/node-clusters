var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello Node.js');
    res.end();
});

server.listen(3000, function(){
    console.log('Server listening at localhost:3000');
});
