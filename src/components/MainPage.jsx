import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/MainPage.css';
import Welcome from './Welcome';

const MainPage = () => {
  // Refs for scrolling to sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);

  return (
    <Container className="main-content">
      <Row className="welcome-row" ref={homeRef}>
        <Col>
          <Welcome />
        </Col>
      </Row>

      <Row className="about-projects-row" ref={aboutRef}>
        <Col md={4} className="about-section">
          <h2>
            <a href="#about">About Me</a>
          </h2>
        </Col>
        <Col md={8} className="projects-section" ref={projectsRef}>
          <h2>
            <a href="#projects">Projects</a>
          </h2>
        </Col>
      </Row>

      <Row className="experience-row" ref={experienceRef}>
        <Col>
          <h2>
            <a href="#experience">Experience</a>
          </h2>
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
