// Chat UI: join, send, display messages
import React, { useEffect, useState } from 'react';
import socketClient, { connect } from '../socketClient';
export default function ChatRoom({ room }){
  const [anon] = useState('anon_'+Math.floor(Math.random()*10000));
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  useEffect(()=>{ const s = connect(room, anon); s.on('message', m => setMessages(prev => [...prev, m])); return ()=>s.disconnect(); },[room]);
  function send(){ if(!text) return; socketClient.emit('message',{ room, text, anonId: anon }); setText(''); }
  return (<div><div>{messages.map(m=> <div key={m.id}>{m.ts} {m.anonId}: {m.text}</div>)}</div><input value={text} onChange={e=>setText(e.target.value)} /><button onClick={send}>Send</button></div>);
}
