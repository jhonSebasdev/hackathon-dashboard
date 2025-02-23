import React from "react";
import "./VerifiedNews.css"; // Asegúrate de crear este archivo para los estilos

const verifiedNewsData = [
    {
        id: 1,
        title: "Nuevo Decreto Presidencial",
        description: "El presidente ha firmado un nuevo decreto para mejorar la economía del país.",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Ecuadorian_president.jpg",
        veracity: 85,
    },
    {
        id: 2,
        title: "Reforma Electoral en el Congreso",
        description: "El Congreso aprobó una reforma para mejorar la transparencia en las elecciones.",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Ecuador_Congress.jpg",
        veracity: 40,
    },
    {
        id: 3,
        title: "Crisis en la Asamblea Nacional",
        description: "Se reportan disturbios en la Asamblea Nacional por desacuerdos políticos.",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Ecuadorian_assembly.jpg",
        veracity: 60,
    },
];

const VerifiedNews = () => {
    return (
        <div className="verified-news-container">
            <h2>📜 Acontecimientos Políticos Verificados</h2>
            <div className="verified-news-list">
                {verifiedNewsData.map((news) => (
                    <div key={news.id} className="news-item">
                        <img src={news.image} alt={news.title} className="news-image" />
                        
                        <div className="news-content">
                            <h3>{news.title}</h3>
                            <p>{news.description}</p>
                        </div>

                        <div className="veracity-bar-container">
                            <div className="veracity-bar">
                                <div className="veracity-fill" style={{ width: `${news.veracity}%` }}>
                                    {news.veracity}%
                                </div>
                            </div>
                        </div>

                        <div className={`veracity-seal ${news.veracity >= 50 ? "true" : "false"}`}>
                            {news.veracity >= 50 ? "VERDADERO" : "FALSO"}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VerifiedNews;
