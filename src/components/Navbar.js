import React from "react";
import { Link } from "react-router-dom"; // Link en lugar de <a> para evitar recargar la página
import "../components/Navbar.css";
import logo from "../assets/perro_logo.png";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Goddard Logo" />
        <div>
          <h1>GODDARD</h1>
          <p>INFORMATION & NEWS VERIFICATION</p>
        </div>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/news">Últimas noticias</Link></li> {/* ✅ Enlace corregido */}
          <li><Link to="#">Calidad de fuentes</Link></li>
          <li><Link to="#">Noticias verificadas</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
