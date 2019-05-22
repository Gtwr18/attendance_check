const http = require("http");
const fs = require("fs");
const url = require('url');
var app = http.createServer(function(request,response){
    var _url = request.url;
    if(request.url == '/'){
        _url = '/checkboard.html';
    }
    if(request.url == '/checkboard.html'){
        return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + _url));
    
});
app.listen(3000);
