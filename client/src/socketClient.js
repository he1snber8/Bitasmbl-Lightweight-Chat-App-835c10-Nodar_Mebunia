// socket client helper
import { io } from 'socket.io-client';
const socket = io('/', { autoConnect: false, reconnection: true });
export function connect(room, anonId){ socket.auth = { anonId }; socket.connect(); socket.emit('join', { room, anonId }); return socket; }
export default socket;
