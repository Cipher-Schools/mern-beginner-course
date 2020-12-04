let http = require('http');
let fs = require('fs');

let server = http.createServer((request, response) => {

    if( request.url === '/' || request.url === '/home'){
        response.writeHead(200, { 'Content-Type' : 'text/html'});
        // Asynchronous -
        let readStream = fs.createReadStream(__dirname + '/index.html')
        // response.end()
        readStream.pipe(response);
    } else if( request.url === '/data'){
        response.writeHead(200, { 'Content-Type' : 'application/json'});
        let data = [
            { name: "Pizza Hut", description: "Best Pizza", id: 1}, 
            { name: "Dominoes", description: "Best Pizza in town", id: 2}, 
        ]
        response.end(JSON.stringify(data));
    } else {
        response.writeHead(404, { 'Content-Type' : 'text/html'});
        let readStream = fs.createReadStream(__dirname + '/404.html')
        readStream.pipe(response);
    }
});

server.listen(5500, '127.0.0.1', () => {
    console.log('Listening at port 5500');
})