import React from 'react';
import experience from '../data/experience.jsx';
import { Chrono } from 'react-chrono';
import '../css/Projects.css';
import '../css/Experience.css';
import { Container, Row, Col } from 'react-bootstrap';

const Experience = () => {
    return (
        // https://codesandbox.io/p/sandbox/react-vertical-timeline-goty8
        <Container className="projects-container">
            <Col className="project-heading">
                <h1 className="heading">Experience</h1>
                <p className="underline"></p>
                {/* <p className="project-description">
                    Below are some of the key projects I’ve worked on, showcasing my
                    experience across various technical stacks. For more, feel free to visit my{' '}
                    <a href="https://github.com/divya-navale">Github</a>
                </p> */}
            </Col>
            <Col className="projects-row">
                <div className="timeline-container" style={{ width: '70%', margin: 'auto', paddingTop: '50px' }}>
                    <Chrono
                        items={experience}
                        mode="VERTICAL_ALTERNATING"
                        hideControls={true}
                        theme={{
                            primary: "#007bff",
                            secondary: "#fff",
                            cardBgColor: "#f4f4f4",
                            cardForeColor: "#333",
                        }}
                    />
                </div>
            </Col>
        </Container>
    );
};

export default Experience;