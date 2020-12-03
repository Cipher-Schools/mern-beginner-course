let http = require('http');

let server = http.createServer((req, res) => { 
    // console.log(req); 
    // console.log(res);
    console.log(req.url)
    if(req.url === '/home'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('<h1>Welcome User</h1>');
    } else if( req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('Lorem ipsum');
    } else if( req.url === '/data'){
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end( "{ 'name' : 'John'}")
    }else {
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.end('<h1>Page Not found 404</h1>');
    }

})

server.listen(5500, '127.0.0.1', () => {
    console.log("Started the server.... Listening at port 5500")
})