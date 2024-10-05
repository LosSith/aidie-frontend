import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import Logo from '../Logo/Logo';

const Navigation = () => {
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
          <Logo />
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/who-is-aidia">Who is Aidia</Link></li>
          <li><Link to="/other">Other</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;