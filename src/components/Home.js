import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/Home.css";
import logo from "../assets/perro_logo.png";
import illustration from "../assets/Logo.png";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            {/* Navbar */}
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
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/news">Últimas noticias</a></li>
                        <li><a href="#">Calidad de fuentes</a></li>
                        <li><a href="#">Noticias verificadas</a></li>
                    </ul>
                </nav>
            </header>

            {/* Contenido Principal */}
            <section className="main">
                <div className="text-content">
                    <h2>¿Quieres enterarte de la verdad?</h2>
                    <p className="subtitle">Somos un verificador de información y noticias</p>
                    <p>
                        En esta web podrás encontrar información verificada sobre diferentes noticias políticas
                        en tiempo real, desde los principales medios de información del país.
                    </p>
                    <div className="buttons">
                        <button className="btn-primary" onClick={() => navigate("/verify")}>
                            Verificar
                        </button>
                        <button className="btn-secondary">Leer más</button>
                    </div>
                </div>
                <div className="image-content">
                    <img src={illustration} alt="Verificación de Noticias" />
                </div>
            </section>

            {/* Sección de Noticia Viral */}
            <section className="viral-news">
                <h2>🔥 Noticia Viral en Ecuador</h2>
                <div className="news-container">
                    {/* Contenedor Izquierdo: Noticia */}
                    <div className="news-content">
                        <img src="https://diariocorreo.com.ec/public/img/uploads/2023-09-05--22-57-37/infojpg" alt="Noticia" className="news-image" />
                        <p>
                            Las elecciones presidenciales en Ecuador se acercan y el candidato X ha tomado la delantera en las encuestas nacionales.
                            Analistas políticos debaten sobre el impacto de su propuesta económica en el futuro del país.
                        </p>
                    </div>

                    {/* Contenedor Derecho: Termómetros de Evaluación */}
                    <div className="thermometer-container">
                        <h3>📊 Evaluación de la Noticia</h3>
                        <div className="thermometers">
                            {/* Termómetro Noticia Falsa */}
                            <div className="thermometer">
                                <div className="thermometer-fill false-news" style={{ height: "70%" }}>
                                    <span className="thermometer-percentage">70%</span>
                                </div>
                                
                            </div>

                            {/* Termómetro Noticia Verdadera */}
                            <div className="thermometer">
                                <div className="thermometer-fill true-news" style={{ height: "30%" }}>
                                    <span className="thermometer-percentage">30%</span>
                                </div>

                            </div>
                        </div>

                        {/* Leyenda de los colores */}
                        <div className="thermometer-legend">
                            <p><span className="legend-false"></span> Noticia Falsa</p>
                            <p><span className="legend-true"></span> Noticia Verdadera</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
