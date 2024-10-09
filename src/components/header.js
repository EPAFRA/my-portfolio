import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import icons
import './header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="header-content">
                <img src="https://res.cloudinary.com/dqvewferm/image/upload/v1726628108/oficial_pic_setyfz.jpg" alt="Logo" className="header-logo" />
                <span><h1 className="header-title">Portfolio</h1></span>
                
                {/* Toggle button */}
                <button className="nav-toggle" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} /> {/* Icon switches between bars and close */}
                </button>

                <nav>
                    <ul className={menuOpen ? 'show' : ''}>
                        {/* Add activeClass and spy props */}
                        <li><Link to="carousel" smooth={true} duration={500} spy={true} activeClass="active" onClick={toggleMenu}>Home</Link></li>
                        <li><Link to="about" smooth={true} duration={500} spy={true} activeClass="active" onClick={toggleMenu}>About</Link></li>
                        <li><Link to="projects" smooth={true} duration={500} spy={true} activeClass="active" onClick={toggleMenu}>Projects</Link></li>
                        <li><Link to="contact" smooth={true} duration={500} spy={true} activeClass="active" onClick={toggleMenu}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
