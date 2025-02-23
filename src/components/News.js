import React from "react";
import Navbar from "./Navbar"; // Reutilizamos el navbar
import NewsSection from "./NewsSection"; // ✅ Importamos la sección de noticias

const News = () => {
  return (
    <div>
      <Navbar /> {/* ✅ Mantiene el navbar en la página */}
      <NewsSection /> {/* ✅ Sección de noticias */}
    </div>
  );
};

export default News;
