import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Verify from "./components/Verify";
import News from "./components/News"; // ✅ Importación correcta

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/news" element={<News />} /> {/* ✅ Ruta correcta */}
      </Routes>
    </Router>
  );
}

export default App;
