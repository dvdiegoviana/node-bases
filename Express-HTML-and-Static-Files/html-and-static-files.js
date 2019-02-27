const http = require('http');
const express = require('express')
const app = express()
const port = 3001

app.use(express.static('public'))

app.get('/', (request, serverResponse) => { 
    serverResponse.sendFile(__dirname+"/resources/index.html")
});

const httpServer = http.createServer(app);

httpServer.listen(port, () => {
	console.log('HTTP Server running on port '+port);
});

