import React from "react";
import "../components/Sources.css";

const Sources = () => {
    const sources = [
        { name: "El Comercio", percentage: 95 },
        { name: "Primicias", percentage: 92 },
        { name: "Ecuavisa", percentage: 88 },
        { name: "El Universo", percentage: 85 },
        { name: "Expreso", percentage: 83 },
        { name: "Teleamazonas", percentage: 80 },
        { name: "La Hora", percentage: 78 },
        { name: "Metro Ecuador", percentage: 75 },
        { name: "TC Televisión", percentage: 72 },
        { name: "Ecuador TV", percentage: 70 },
        { name: "RTU Noticias", percentage: 65 },
        { name: "Pichincha Universal", percentage: 60 },
        { name: "Telesur", percentage: 50 },
        { name: "Radio La Calle", percentage: 45 },
        { name: "Página 12", percentage: 40 }
    ];

    return (
        <div className="sources-container">
            <h2>📊 Calidad de Fuentes en Ecuador</h2>
            <div className="sources-content">
                {/* Pirámide Invertida */}
                <div className="pyramid">
                    {sources.map((source, index) => (
                        <div
                            key={index}
                            className="pyramid-section"
                            style={{ width: `${source.percentage}%` }}
                        >
                            {source.percentage}%
                        </div>
                    ))}
                </div>

                {/* Listado de Fuentes */}
                <div className="sources-list">
                    <h3>Fuentes de Información</h3>
                    <ul>
                        {sources.map((source, index) => (
                            <li key={index}>
                                <strong>{source.name}</strong> - {source.percentage}%
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sources;
