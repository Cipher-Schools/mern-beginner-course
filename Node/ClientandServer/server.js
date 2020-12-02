var http = require('http');
// Hypertext transfer protocol

let server = http.createServer((req, res) =>{
 
    res.end("Hello");
} 
)

server.listen(5500, '127.0.0.1', () => {
    console.log("Started the server.... Listening at port 5500")
})