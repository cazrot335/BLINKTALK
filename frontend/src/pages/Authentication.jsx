import React, { useState } from 'react';
import styled from 'styled-components';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithCredential, GoogleAuthProvider, getAdditionalUserInfo } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, signInWithGoogle } from './authConfig';

// Styled Components for Toggle Button
const ToggleButton = styled.button`
 background-color: #fff;
 color: #000;
 border: 1px solid #000;
 padding: 10px;
 cursor: pointer;
 &:hover {
    background-color: #000;
    color: #fff;
 }
`;

// Enhanced Styled Components for Form and Inputs with flexbox for centering
const FormContainer = styled.div`
 background-color: #f8f8f8;
 padding: 20px;
 border-radius: 8px;
 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
 margin-bottom: 20px;
 display: flex;
 flex-direction: column;
 align-items: center; // Center children horizontally
`;

const FormInput = styled.input`
 width: 100%;
 padding: 10px;
 margin-bottom: 10px;
 border: 1px solid #ddd;
 border-radius: 4px;
`;

const FormButton = styled.button`
 width: 100%;
 padding: 10px;
 background-color: #007bff;
 color: #fff;
 border: none;
 border-radius: 4px;
 cursor: pointer;
 &:hover {
    background-color: #0056b3;
 }
`;

// Social Sign-In Buttons with adjusted margin-top for spacing
const SocialButton = styled.button`
 background-color: #fff;
 color: #000;
 border: 1px solid #000;
 padding: 10px;
 cursor: pointer;
 margin-right: 10px;
 margin-top: 10px; // Adjusted margin-top for spacing
 &:hover {
    background-color: #000;
    color: #fff;
 }
`;

// Container to center the authentication page with added styling
const CenteredContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
 background-color: #fafafa; // Slightly off-white background
 border: 1px solid #ddd; // Added border
 border-radius: 8px; // Added border radius
 padding: 20px; // Added padding
 gap: 20px; // Added gap for spacing between components
`;

// Create a new styled component for the middle content
const MiddleContent = styled.div`
 border: 1px solid #000; // Add a border
 border-radius: 8px; // Add a border radius
 padding: 20px; // Add some padding
`;

const AuthenticationPage = () => {
  const navigate = useNavigate();
 const [isLogin, setIsLogin] = useState(true);
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const toggleForm = () => {
    setIsLogin(!isLogin);
 };

 const handleFormSubmit = async (event) => {
  event.preventDefault();
  try {
     let userCredential;
     let authMethod = 'Email'; // Default to Email
     if (isLogin) {
       userCredential = await signInWithEmailAndPassword(auth, email, password);
     } else {
       userCredential = await createUserWithEmailAndPassword(auth, email, password);
     }
     // Use getAdditionalUserInfo to safely access additionalUserInfo
     const additionalUserInfo = getAdditionalUserInfo(userCredential);
     if (additionalUserInfo && additionalUserInfo.providerId === 'google.com') {
       authMethod = 'Google';
     }
     const user = userCredential.user;
     // Send the authentication method to the backend
     await fetch('http://localhost:5000/updateUser', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         uid: user.uid,
         username: user.displayName,
         photo: user.photoURL,
         authMethod: authMethod, // Include the authentication method
       }),
     });
     navigate('/user');
  } catch (error) {
     console.error(error);
  }
 };
 
 

const handleGoogleSignIn = async () => {
  try {
     const result = await signInWithGoogle();
     const user = result.user;
     // Send the authentication method to the backend
     await fetch('http://localhost:5000/updateUser', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         uid: user.uid,
         username: user.displayName,
         photo: user.photoURL,
         authMethod: 'Google', // Directly set authMethod to 'Google' for Google Sign-In
       }),
     });
     navigate('/user');
  } catch (error) {
     console.error(error);
  }
 };
 

 return (
    <CenteredContainer>
      <MiddleContent>
        <ToggleButton onClick={toggleForm}>
          {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
        </ToggleButton>
        <FormContainer>
          <h2 className="text-2xl font-bold mb-5">{isLogin ? 'Login' : 'Sign Up'}</h2>
          <form className="space-y-5" onSubmit={handleFormSubmit}>
            <FormInput type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
            <FormInput type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
            <FormButton type="submit">{isLogin ? 'Login' : 'Sign Up'}</FormButton>
          </form>
          <p>or</p>
          <div className="flex flex-col items-center space-y-4 mt-4">
            <SocialButton onClick={handleGoogleSignIn}>Sign in with Google</SocialButton>
          </div>
        </FormContainer>
      </MiddleContent>
    </CenteredContainer>
 );
};

export default AuthenticationPage;



