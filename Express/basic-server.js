const http = require('http');
//const https = require('https')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001

/*
const privateKey = fs.readFileSync('c:/cert2/privkey.pem', 'utf8');
const certificate = fs.readFileSync('c:/cert2/cert.pem', 'utf8');
const ca = fs.readFileSync('c:/cert2/chain.pem', 'utf8');


const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};
*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/:id', (request, serverResponse) => { 
    serverResponse.send(request.params.id);
});


app.post('/create', (request, serverResponse) => { 
    serverResponse.send(resquest.body);
});

/*
const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, () => {
	console.log('HTTPS Server running on port '+port);
});
*/

const httpServer = http.createServer(app);

httpServer.listen(port, () => {
	console.log('HTTP Server running on port '+port);
});

