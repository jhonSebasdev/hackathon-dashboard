import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Verify.css";
import Navbar from "./Navbar"; // Importamos el Navbar

const Verify = () => {
  const [link, setLink] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Verificando: ${link}`);
  };

  return (
    <div className="verify-container">
      <Navbar /> {/* Navbar reutilizable */}

      <h2>🔍 Ingresa el enlace a verificar</h2>
      
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="https://example.com"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
        <button type="submit">Verificar</button>
      </form>
      
      <button className="back-button" onClick={() => navigate("/")}>⬅ Volver al Inicio</button>
    </div>
  );
};

export default Verify;
