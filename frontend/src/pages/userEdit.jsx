import React, { useState } from 'react';
import styled from 'styled-components';
import Profile from '../assests/profile.jpg'; // Ensure the path is correct
import { useNavigate } from 'react-router-dom';
import { auth } from './authConfig'; // Import the auth object from Firebase


// Styled components
const UserEditContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #a2cbef;
  height: 663px;
  font-family: "Poppins";
  color: rgb(6, 19, 50);
`;

const UserEditForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
`;

const ProfilePictureContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
`;

const ProfilePicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const ProfilePictureLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  opacity: 0;
  cursor: pointer;
  transition: opacity 0.3s;
`;

const ProfilePictureInput = styled.input`
  display: none;
`;

const UsernameInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 7px;
  outline: none;
  font-family: 'Poppins';
`;

const SetProfileButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Poppins";
  background-color: #b0433c;

  &:hover {
    background-color: #993731;
  }
`;

function UserEdit() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [photo, setPhoto] = useState(null);
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('username', username);
    if (photo) {
      formData.append('photo', photo); // Append the photo file directly
    }
  
    // Get the currently logged-in user
    const user = auth.currentUser;
  
    // Add the email to the FormData
    formData.append('email', user.email);
    
    try {
      // Send the request to update the user
      const response = await fetch('http://localhost:5000/updateUser', {
        method: 'POST',
        body: formData, // Use FormData to send the file
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      navigate('/Main'); // Redirect to the main page after successful update
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };
 
  return (
     <UserEditContainer>
       <h1>Edit Profile</h1>
       <UserEditForm onSubmit={handleSubmit}>
         <ProfilePictureContainer>
           <ProfilePicture src={photo ? URL.createObjectURL(photo) : Profile} alt="Profile" />
           <ProfilePictureLabel htmlFor="photo">Tap to add picture</ProfilePictureLabel>
           <ProfilePictureInput id="photo" name="photo" type="file" onChange={(e) => setPhoto(e.target.files[0])} />
         </ProfilePictureContainer>
         <label htmlFor="username">
           Username:
           <UsernameInput id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
         </label>
         <SetProfileButton type="submit">Set Profile</SetProfileButton>
       </UserEditForm>
     </UserEditContainer>
  );
 }
 
 export default UserEdit;





