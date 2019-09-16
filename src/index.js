const http = require('http');
const path = require('path');

const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);

//settings
app.set('port', process.env.PORT || 3000)

require('./sockets')(io);

//console.log(path.join(__dirname + 'public'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
server.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});