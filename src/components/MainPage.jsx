import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/MainPage.css';
import Welcome from './Welcome';
import { Link } from 'react-router-dom';

const MainPage = () => {

  return (
    <Container className="main-content">
      <Row className="welcome-row">
        <Col>
          <Welcome />
        </Col>
      </Row>

      <Row className="about-projects-row">
        <Col md={4} className="about-section">
          <h2 className='section-title'>
            <Link to="/about-me" className="about-link">
              About Me
            </Link>
          </h2>
        </Col>

        <Col md={8} className="projects-section">
          <h2 className='section-title'>
            <Link to="/projects" className="projects-link">
              Projects
            </Link>
          </h2>
        </Col>
      </Row>

      <Row className="experience-row">
        <Col>
          <h2 className='section-title'>
            <Link to="/experience" className="experience-link">
              Experience
            </Link>
          </h2>
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
