import React from 'react';
import '../css/Projects.css';
import { Container, Row, Col } from 'react-bootstrap';

const AboutMe = () => {
    return (
        <Container className="projects-container">
            <Col className="project-heading">
                <h1 className="heading">Hi!</h1>
                <p className="underline"></p>
                <p className="project-description">
                I'm Divya Navale. A highly motivated and results-oriented Computer Science graduate from Purdue University with a proven track record of developing and implementing innovative software solutions. Passionate about leveraging technology to solve complex problems and drive impactful outcomes. Seeking a challenging role where I can contribute my skills in software development, data analysis, and system design to a dynamic team.
                </p>
            </Col>
            <Col className="projects-row">
                {/* {projects.map((project, index) => (
                    <Row key={index} className="project-item">
                        <img
                            className="project-image"
                            src={project.image}
                            alt={project.title}
                        />
                        <div className="project-info">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </div>
                    </Row>
                ))} */}
            </Col>
        </Container>
    );
};

export default AboutMe;
