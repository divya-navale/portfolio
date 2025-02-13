// src/components/Header.js
import React, { useState, useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../css/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Refs for scrolling to sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

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
          <Navbar.Brand href="#home" className="portfolio-title">
            DIVYA NAVALE'S PORTFOLIO
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
                <Nav.Link onClick={() => scrollToSection(contactRef)}>Contact</Nav.Link>
              </Nav>

            <div className="close-btn" onClick={toggleMenu}>
                <span className="x-icon">X</span>
            </div>
            </div>
          </div>
        )}
      </Navbar>

      <div ref={homeRef} style={{ height: '100vh', backgroundColor: 'lightblue' }}>
        Home Section
      </div>
      <div ref={aboutRef} style={{ height: '100vh', backgroundColor: 'lightgreen' }}>
        About Section
      </div>
      <div ref={projectsRef} style={{ height: '100vh', backgroundColor: 'lightyellow' }}>
        Projects Section
      </div>
      <div ref={contactRef} style={{ height: '100vh', backgroundColor: 'lightcoral' }}>
        Contact Section
      </div>
    </header>
  );
};

export default Header;
