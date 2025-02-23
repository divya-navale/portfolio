import React from 'react';
import projects from '../data/projects.jsx';
import '../css/Projects.css';
import { Container, Row, Col } from 'react-bootstrap';

const Projects = () => {
    return (
        <Container className="projects-container">
            <Col className="project-heading">
                <h1 className="heading">Projects</h1>
                <p className="underline"></p>
                <p className="project-description">
                    Below are some of the key projects I’ve worked on, showcasing my
                    experience across various technical stacks. For more, feel free to visit my <br/>
                    <a href="https://github.com/divya-navale" target="_blank" rel="noopener noreferrer" className="button">Github</a>
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
                            <div className='project-buttons'>
                                {project.link &&
                                    <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="button"
                                >
                                    Try Project
                                </a>}
                                {project.github &&
                                    <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="button"
                                >
                                    Github
                                </a>}
                            </div>
                        </div>
                    </Row>
                ))}
            </Col>
        </Container>
    );
};

export default Projects;