import React, { useState } from 'react';

function UserEdit() {
 const [username, setUsername] = useState('');
 const [photo, setPhoto] = useState(null);

 const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('username', username);
    formData.append('photo', photo);

    try {
      const response = await fetch('http://localhost:5000/updateUser', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      alert('User updated successfully.');
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Failed to update user.');
    }
 };

 return (
    <div>
      <h1>User Edit</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Photo:
          <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
 );
}

export default UserEdit;

