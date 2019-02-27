const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/:id', (request, serverResponse) => { 
    serverResponse.send(request.params.id);
});


app.post('/create', (request, serverResponse) => { 
    serverResponse.send(resquest.body);
});

const httpServer = http.createServer(app);

httpServer.listen(port, () => {
	console.log('HTTP Server running on port '+port);
});

