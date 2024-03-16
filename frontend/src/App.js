import { BrowserRouter , Route,Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Landing from './pages/Landing.jsx';
import Authentication from './pages/Authentication.jsx';
import UserEdit from './pages/userEdit.jsx';
import Main from './pages/Main.jsx';
function App() {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/authentication" element={<Authentication/>}/>
      <Route path="/user" element={<UserEdit/>}/>
      <Route path="/main" element={<Main/>}/>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
