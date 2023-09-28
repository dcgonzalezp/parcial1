import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route, Navigate, useNavigate} from "react-router-dom";
import Carros from './components/Carros';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Login/>} />
          <Route path="/Carros" element={<Carros/>} />
          <Route path="/Carro/:carModel" element={<Carros />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
