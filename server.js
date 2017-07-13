var http = require('http');
var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');

var staticBasePath = __dirname + '/static';

var serve = serveStatic(staticBasePath, {'index': 'index.html'});

var server = http.createServer(function(req, res){
    var done = finalhandler(req, res);
    serve(req, res, done);
})

server.listen(8132);

console.log('Server listening at: http://localhost:8132');
