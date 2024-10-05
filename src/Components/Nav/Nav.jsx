import { useState } from 'react';
import './Nav.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <button className="hamburger" onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <div className="logo">
          <img src="../../public/aidie.png" alt="Aidie Logo" />
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#who-is-aidia">Who is Aidie</a></li>
          <li><a href="#other">Other</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;