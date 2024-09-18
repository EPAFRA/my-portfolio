// src/components/Card.js
import React from 'react';
// import './Card.css'; // Import the CSS file for card styles

const Card = ({ title, content, imageUrl }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
