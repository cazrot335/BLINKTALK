import { BrowserRouter , Route,Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Landing from './pages/Landing.jsx';
import Authentication from './pages/Authentication.jsx';
function App() {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/authentication" element={<Authentication/>}/>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
