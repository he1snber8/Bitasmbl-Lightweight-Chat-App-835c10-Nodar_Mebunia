// Basic App with a default room
import React, { useState } from 'react';
import ChatRoom from './components/ChatRoom';
export default function App(){
  const [room] = useState('lobby');
  return (<div><h1>Lightweight Chat</h1><ChatRoom room={room} /></div>);
}
