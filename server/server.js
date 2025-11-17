// Express + Socket.IO entry
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const socketHandlers = require('./socketHandlers');
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });
socketHandlers(io);
app.use(express.static('public'));
server.listen(3000, () => console.log('Server listening on 3000'));
// Build client into ../client/build and copy to server/public for production
