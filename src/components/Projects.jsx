import React from 'react';
import projects from '../data/projects.jsx';
import '../css/Projects.css';
import { Container, Row, Col } from 'react-bootstrap'; // Import React-Bootstrap components


const Projects = () => {
    return (
        <Container className="projects-container">
            <Col className="project-heading">
                <h1 className="heading">Projects</h1>
                <p className="underline"></p>
                <p className="project-description">
                    Below are some of the key projects I’ve worked on, showcasing my
                    experience across various technical stacks. For more, feel free to visit my{' '}
                    <a href="https://github.com/divya-navale">Github</a>
                </p>
            </Col>
            <Col className="projects-row">
                {projects.map((project, index) => (
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
                ))}
            </Col>
        </Container>
    );
};

export default Projects;