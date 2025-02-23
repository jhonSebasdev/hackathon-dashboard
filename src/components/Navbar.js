import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/perro_logo.png";
import "../components/Navbar.css";

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
          <li><Link to="/news">Últimas noticias</Link></li>
          <li><Link to="/sources">Calidad de fuentes</Link></li>
          <li><Link to="/verified">Noticias verificadas</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
