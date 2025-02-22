import React, { useState, useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <Navbar expand="lg" className="navbar-container">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="portfolio-title">DIVYA NAVALE'S PORTFOLIO</Link>
          </Navbar.Brand>

          {/* Hamburger Menu */}
          <div className="menu-icon" onClick={toggleMenu}>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
          </div>
        </Container>

        {/* Fullscreen Menu */}
        {menuOpen && (
          <div className="fullscreen-menu">
            <div className="menu-content">
              <Nav className="menu-items">
                <Link to="/" onClick={() => scrollToSection()} className="portfolio-title">Home</Link>
                <Link to="/about-me" onClick={() => scrollToSection()} className="portfolio-title">About</Link>
                <Link to="/projects" onClick={() => scrollToSection()} className="portfolio-title">Projects</Link>
                <Link to="/experience" onClick={() => scrollToSection()} className="portfolio-title">Experience</Link>
                <Link to="/resume" onClick={() => scrollToSection()} className="portfolio-title">Resume</Link>
                <Link to="/" onClick={() => scrollToSection()} className="portfolio-title">Contact</Link>
              </Nav>

            <div className="close-btn" onClick={toggleMenu}>
                <span className="x-icon">X</span>
            </div>
            </div>
          </div>
        )}
      </Navbar>
    </header>
  );
};

export default Header;
