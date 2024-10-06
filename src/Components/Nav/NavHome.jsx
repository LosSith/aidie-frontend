import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import Logo from '../Logo/Logo';

const NavigationHome = () => {
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
          
          <Link to="/"><Logo /></Link>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          
          <li><Link to="/events">Events</Link></li>
 
        </ul>
      </div>
    </nav>
  );
};

export default NavigationHome;