import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current route location

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when a link is clicked (for mobile)
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Portfolio.</div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link
          to="/"
          className={location.pathname === '/' ? 'active' : ''}
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={location.pathname === '/about' ? 'active' : ''}
          onClick={closeMenu}
        >
          About
        </Link>
        <Link
          to="/project"
          className={location.pathname === '/project' ? 'active' : ''}
          onClick={closeMenu}
        >
          Projects
        </Link>
        <Link
          to="/skills"
          className={location.pathname === '/skills' ? 'active' : ''}
          onClick={closeMenu}
        >
          Skills
        </Link>
        <Link
          to="/education"
          className={location.pathname === '/education' ? 'active' : ''}
          onClick={closeMenu}
        >
          Education
        </Link>
        <Link
          to="/contact"
          className={location.pathname === '/contact' ? 'active' : ''}
          onClick={closeMenu}
        >
          Contact
        </Link>
      </div>
      <div
        className="navbar-toggle"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        role="button"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;