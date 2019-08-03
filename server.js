var http  = require('http')
http.createServer(function (req,res) {
	res.writeHead(200,{'Content-Type':'text/plain'})
	debugger;
	res.end('hello world')
}).listen(1337,'127.0.0.1')
console.log("127.0.0.1")