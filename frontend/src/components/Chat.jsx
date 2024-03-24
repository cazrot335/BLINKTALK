import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const Chat = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const socket = io("http://localhost:5000");

  useEffect(() => {
    socket.on("new_message", (message) => {
      setMessages((oldMessages) => [...oldMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSend = () => {
    const message = {
      sender: user.email,
      receiver: "otherUserEmail",
      message: input,
    };

    // Emit the new_message event
    socket.emit("new_message", message);

    // Clear the input field
    setInput("");
  };

  return (
    <div>
      <h1>{user.username}</h1>
      {messages.map((message) => (
        <p
          key={message._id}
          style={{
            textAlign: message.sender === user.email ? "right" : "left",
          }}
        >
          {message.message}
        </p>
      ))}
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default Chat;
