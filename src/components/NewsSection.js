import React from "react";
import "./NewsSection.css"; // Estilos para la sección de noticias
import NewsCard from "./NewsCard";

// Datos simulados (luego se reemplazarán con Firebase)
const sampleNews = [

    {
        id: 1,
        title: "Inició oficialmente la campaña política para las elecciones 2023",
        image: "https://www.aldia.com.ec/wp-content/uploads/2022/01/campana_politica_2023.jpg",
      },
      {
        id: 2,
        title: "Panorama político a dos días del cierre de inscripciones",
        image: "https://www.aldia.com.ec/wp-content/uploads/2022/09/panorama_politico_ecuador.jpg",
      },
      {
        id: 3,
        title: "Coletazo en la economía por la crisis política",
        image: "https://www.lahora.com.ec/wp-content/uploads/2023/05/crisis_politica_economia_ecuador.jpg",
      },
      {
        id: 4,
        title: "Ecuador: Más de 13 millones de ciudadanos convocados a votar",
        image: "https://www.elciudadano.com/wp-content/uploads/2023/02/elecciones_ecuador_2023.jpg",
      },
      {
        id: 5,
        title: "Portadas de la prensa en Ecuador tras las elecciones presidenciales",
        image: "https://www.lapatilla.com/wp-content/uploads/2021/02/portadas_prensa_ecuador_elecciones.jpg",
      },
      {
        id: 6,
        title: "Yunda con un pie fuera de la contienda electoral",
        image: "https://issuu.com/la_hora/docs/ecuador06enero-2023/cover_image.jpg",
      },
    ];

const NewsSection = () => {
    return (
        <div className="news-section">
            <h2>📰 Últimas Noticias</h2>
            <div className="news-grid">
                {sampleNews.map((news) => (
                    <NewsCard key={news.id} title={news.title} image={news.image} />
                ))}
            </div>
        </div>
    );
};

export default NewsSection;
