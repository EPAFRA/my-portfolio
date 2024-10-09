// src/components/SingleImageWithText.js
import React from 'react';
import './carousel.css';

const Carousel = () => {
  return (
    <section id="carousel" className="carousel-section">
      <div className="image-container">
        <img
          src="https://res.cloudinary.com/dqvewferm/image/upload/v1726628921/Screenshot_2024-09-18_at_06-08-03_Cloudinary_Management_Console_-_Media_Library_cpzwh6.png"
          alt="Single"
          className="single-image"
        />
        <div className="overlay-text">
          <p>Showcasing my educational background and ongoing software development projects.</p>
          <h2>Welcome to My Portfolio</h2>
          <button>Explore</button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
