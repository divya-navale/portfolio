import React, { useState, useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Refs for scrolling to sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Scroll to section and close menu
  const scrollToSection = (section) => {
    section.current.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // Close the menu after clicking a link
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
                <Nav.Link onClick={() => scrollToSection(homeRef)}>Home</Nav.Link>
                <Nav.Link onClick={() => scrollToSection(aboutRef)}>About</Nav.Link>
                <Nav.Link onClick={() => scrollToSection(projectsRef)}>Projects</Nav.Link>
                <Nav.Link onClick={() => scrollToSection(experienceRef)}>Experience</Nav.Link>
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
