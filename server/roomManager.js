// Simple in-memory rooms and messages
const rooms = {};
module.exports = {
  addPeer(room, socketId, anonId){ rooms[room]=rooms[room]||{peers:{},messages:[]}; rooms[room].peers[socketId]=anonId; },
  saveMessage(room, text, anonId){ const ts = new Date().toISOString(); const item = { id: Date.now(), room, text, anonId, ts }; rooms[room].messages.push(item); return item; },
  markDisconnected(socketId){ for(const r of Object.keys(rooms)) { if(rooms[r].peers && rooms[r].peers[socketId]) delete rooms[r].peers[socketId]; } }
};
