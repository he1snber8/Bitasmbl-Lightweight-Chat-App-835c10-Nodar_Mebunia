// Socket event bindings: join, message, disconnect
const roomManager = require('./roomManager');
module.exports = (io) => {
  io.on('connection', socket => {
    socket.on('join', ({ room, anonId }) => {
      roomManager.addPeer(room, socket.id, anonId);
      socket.join(room);
      socket.emit('joined', { room });
    });
    socket.on('message', (msg) => {
      // msg: { room, text, anonId }
      const item = roomManager.saveMessage(msg.room, msg.text, msg.anonId);
      io.to(msg.room).emit('message', item);
    });
    socket.on('disconnect', () => { roomManager.markDisconnected(socket.id); });
  });
};
