import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Welcome.css';
import sea from '../assets/photo.jpeg';
const Welcome = () => {
  return (
    <Container>
      <Row className="welcome-container">
        <Col className='left-section'>
          <div>
            <h1 className='hi'>Hi!</h1>
            <p className='underline'> __________</p>
            <p className='description'>My name is Divya Navale and I am a graduate student in Computer Science Major at Purdue University.</p>
          </div>
        </Col>
        <Col className='right-section'>
            <img src={sea} alt='sea' className='sea-image'/>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
