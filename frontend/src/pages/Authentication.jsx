import React, { useState } from "react";
import styled from "styled-components";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "./authConfig";
import { useNavigate } from "react-router-dom";

const ToggleText = styled.p`
  color: #000;
  margin-top: 10px;
  text-align: center;
`;

const ToggleButton = styled.span`
  color: #007bff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const FormContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Align items vertically */
`;

const FormInput = styled.input`
  width: 95%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-family: "Poppins";
`;

const FormButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Poppins";
  &:hover {
    background-color: #0056b3;
  }
`;

const SocialButton = styled.button`
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  padding: 10px;
  cursor: pointer;
  margin-right: 10px;
  margin-top: 10px;
  border-radius: 10px;
  font-family: "Poppins";
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins";
  height: 100vh;
  background-color: #061332;
  padding: 20px;
  gap: 20px;
`;

const MiddleContent = styled.div`
  border-radius: 8px;
  padding: 20px;
  background: white;
  box-shadow: 0px 0px 20px 0px rgb(255 255 255 / 81%);
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const AuthenticationPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      let userCredential;
      if (isLogin) {
        userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      } else {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      }
      const user = userCredential.user;
      navigate("/user");
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      console.log(result);
      navigate("/user");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CenteredContainer>
      <MiddleContent>
        <FormContainer>
          <h2 className="text-2xl font-bold mb-5">
            {isLogin ? "Login" : "Get Started"}
          </h2>
          <form className="space-y-5" onSubmit={handleFormSubmit}>
            <FormInput
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormButton type="submit">
              {isLogin ? "Login" : "Sign Up"}
            </FormButton>
          </form>
          <p>or</p>
          <div className="flex flex-col items-center space-y-4 mt-4">
            <SocialButton onClick={handleGoogleSignIn}>
              Sign in with Google
            </SocialButton>
          </div>
        </FormContainer>
        {isLogin ? (
          <ToggleText>
            Don't have an account?{" "}
            <ToggleButton onClick={toggleForm}>Sign Up</ToggleButton>
          </ToggleText>
        ) : (
          <ToggleText>
            Already have an account?{" "}
            <ToggleButton onClick={toggleForm}>Login</ToggleButton>
          </ToggleText>
        )}
      </MiddleContent>
    </CenteredContainer>
  );
};

export default AuthenticationPage;
