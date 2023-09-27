/*const http = require('node:http');


//const app = require("./app")

//const server = http.createServer(app)
//http://localhost:3000/

const server = http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body as "Hello World"
    response.end('Hello World\n');
 });
 server.listen(process.env.PORT,()=>{
    console.log("server running on port 3000")
 })*/
//server.listen(process.env.PORT || 3000);
//server.listen(3023);
const http = require('http');

const server = http.createServer(function (request, response) {

   response.writeHead(200, { 'Content-Type': 'text/plain' });

   response.end('Hello World\n');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
   console.log(`Server running on port ${port}`);
});







