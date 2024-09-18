// src/components/Header.js
import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <img src="https://res.cloudinary.com/dqvewferm/image/upload/v1726628108/oficial_pic_setyfz.jpg" alt="Logo" className="header-logo" />
                <span><h1 className="header-title">Portfolio</h1></span>
                
                <nav>
                    <ul>
                        <li><Link to="carousel" smooth={true} duration={500}>Home</Link></li>
                        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                    </ul>
                </nav>
                {/* <div className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Enock</h1>
          <p>A passionate developer creating amazing things.</p>
          <button>Explore</button>
        </div>
      </div> */}
            </div>
        </header>
    );
};

export default Header;
