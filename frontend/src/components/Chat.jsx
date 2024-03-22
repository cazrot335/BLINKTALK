import React, { useState, useEffect } from 'react';

const Chat = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // Fetch the chat history for the user from your backend
    fetch(`http://localhost:5000/messages?user1=${user.email}&user2=otherUserEmail`)
      .then(response => response.json())
      .then(data => setMessages(data))
      .catch(error => console.error('Error fetching messages:', error));
  }, [user]);

  const handleSend = () => {
    // Send the input to your backend
    fetch('http://localhost:5000/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: user.email,
        receiver: 'otherUserEmail',
        message: input,
      }),
    })
    .then(response => response.json())
    .then(data => {
      // Add the new message to the messages array
      setMessages(oldMessages => [...oldMessages, data]);
      // Clear the input field
      setInput('');
    })
    .catch(error => console.error('Error sending message:', error));
  };

  return (
    <div>
      <h1>{user.username}</h1>
      {messages.map(message => (
        <p key={message._id}>{message.text}</p>
      ))}
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default Chat;