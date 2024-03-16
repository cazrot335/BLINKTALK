import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const User = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfilePic = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const Username = styled.p`
  margin: 0;
`;

const ShareList = () => {
 const [users, setUsers] = useState([]);

 useEffect(() => {
    // Fetch user data from your backend
    fetch('http://localhost:5000/users') // Adjust the URL as necessary
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
 }, []);

 return (
    <div>
    {users.map(user => (
      <User key={user._id}>
        <ProfilePic src={`data:image/jpeg;base64,${user.photo}`} alt={user.username} />
        <Username>{user.username}</Username>
      </User>
    ))}
  </div>
 );
};

export default ShareList;
