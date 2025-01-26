import React, { useState } from 'react';
import './main.css';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <div
      style={{
        width: '300px',
        margin: '0 auto',
        border: '1px solid #ccc',
        padding: '10px',
      }}
    >
      <div
        style={{
          height: '200px',
          overflowY: 'scroll',
          border: '1px solid #ddd',
          marginBottom: '10px',
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className="chat-message"
            style={{ marginBottom: '5px' }}
          >
            You: {msg}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: 'calc(100% - 50px)', marginRight: '5px' }}
      />
      <button onClick={sendMessage} style={{ width: '45px' }}>
        Send
      </button>
    </div>
  );
}

export default Chat;
