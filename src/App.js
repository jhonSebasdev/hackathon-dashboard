import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";  
import Home from "./components/Home";
import NewsSection from "./components/NewsSection"; 
import QualitySources from "./components/Sources"; 
import VerifiedNews from "./components/VerifiedNews"; 
import Verify from "./components/Verify"; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas con Navbar */}
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/news" element={<><Navbar /><NewsSection /></>} />
        <Route path="/sources" element={<><Navbar /><QualitySources /></>} />
        <Route path="/verified" element={<><Navbar /><VerifiedNews /></>} />
        
        {/* Ruta sin Navbar */}
        <Route path="/verify" element={<Verify />} />  
      </Routes>
    </Router>
  );
}

export default App;
