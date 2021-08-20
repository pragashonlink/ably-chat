import React, { useState, useEffect } from 'react';
import { useParams, useLocation  } from 'react-router-dom';
import Ably from 'ably';

export default function ChatForm() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const { channelId } = useParams();

  const client = new Ably.Realtime({ key: 'a_vN3g.VvxKog:8w9mbaEMq8IszFxl' });
  const channel = client.channels.get(channelId);

  channel.subscribe(function(message) {
    setMessages([...messages, message.data]);
  });

  // useEffect(() => {
  //   alert('test');
  // });

  const sendMessage = (evt) => {
    evt.preventDefault();

    channel.publish('event', message);
  }

  return (
    <div>
        <div id="messages">
          {messages.map(item => {
            return <div key={item}>{item}</div>;
          })}
        </div>
        
        <form onSubmit={sendMessage}>
        <span>
            <input type="text" value={message} onChange={ e => setMessage(e.target.value) } />
        </span>
        <span>
            <input type="submit" value="Send" />
        </span>
        </form>
    </div>
  );
}