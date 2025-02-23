import React from "react";
import "./NewsCard.css";

const NewsCard = ({ title, image }) => {
  return (
    <div className="news-card">
      <img src={image} alt={title} className="news-image" loading="lazy" />
      <h3 className="news-title">{title}</h3>
    </div>
  );
};

export default NewsCard;
