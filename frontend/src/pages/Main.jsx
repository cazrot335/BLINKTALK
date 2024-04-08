import React, { useState } from "react";
import ShareList from "../components/shareList";
import styled from "styled-components";
import Chat from "../components/Chat";

const Container = styled.div`
  background-color: black;
  width: 100vw; /* Use viewport width */
  height: 100vh; /* Use viewport height */
  font-family: "Poppins";
`;

const MainContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  font-family: "Poppins";
`;

const ShareListContainer = styled.div`
  width: 30%;
  background-color: #1e3347;
  overflow-y: scroll;
  font-family: "Poppins";
`;

const Search = styled.div`
  background-color: #0e2235;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  input {
    padding: 10px;
    width: 250px;
    border-radius: 5px;
    border: 1px solid transparent;
    font-family: "Poppins";
    outline: 0;
    font-weight: 500;
  }
  button {
    padding: 10px;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    border: 1px solid transparent;
    cursor: pointer;

    &:hover {
      background-color: grey;
      transition-duration: 0.6s;
    }
  }
`;

const ChatContainer = styled.div`
  width: 70%;
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  font-family: "Poppins";
  background-color: #d3d8e6;
`;

const Nav = styled.div`
  height: 80px;
  background-color: black;
  margin-bottom: 550px;
  font-family: "Poppins";
`;

const Message = styled.div`
  height: 80px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  input {
    padding: 10px;
    width: 850px;
    border-radius: 5px;
    border: 1px solid transparent;
    font-family: "Poppins";
    outline: 0;
    font-weight: 500;
  }
  button {
    padding: 10px;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    border: 1px solid transparent;
    cursor: pointer;

    &:hover {
      background-color: grey;
      transition-duration: 0.6s;
    }
  }
`;

const Main = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <Container>
      <MainContent>
        <ShareListContainer>
          <Search>
            <input type="text" placeholder="Search User Or Messages"></input>
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </Search>
          <ShareList onSelectUser={setSelectedUser} />
        </ShareListContainer>

        <ChatContainer>
          <Nav>{/* Name of the user or any other details  */}</Nav>
          {selectedUser && <Chat user={selectedUser} />}
          <Message>
            <input type="text" placeholder="Type a message"></input>
            <button>
              <i class="fa-solid fa-paper-plane"></i>
            </button>
          </Message>
        </ChatContainer>
      </MainContent>
    </Container>
  );
};

export default Main;
