const http = require('http');
const express = require('express')
const app = express()
const port = 3001
const fs = require('fs');


app.use(express.static('public'))

app.get('/', (request, serverResponse) => { 
    var contents = fs.readFileSync(__dirname+"/resources/index.html", 'utf8');
    serverResponse.set('Content-Type', 'text/html');
    serverResponse.send(contents);
});

const httpServer = http.createServer(app);

httpServer.listen(port, () => {
	console.log('HTTP Server running on port '+port);
});