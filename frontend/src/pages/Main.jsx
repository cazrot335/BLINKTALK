import React, { useState } from 'react';
import ShareList from '../components/shareList';
import Chat from '../components/Chat'; // Import the Chat component

const Main = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '30%' }}>
        <ShareList onSelectUser={setSelectedUser} /> {/* Pass the callback to ShareList */}
      </div>
      <div style={{ width: '70%' }}>
        {selectedUser && <Chat user={selectedUser} />} {/* Render the Chat component if a user is selected */}
      </div>
    </div>
  );
};

export default Main;

