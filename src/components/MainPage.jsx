import React from 'react';
import { Link } from 'react-router-dom';
import '../css/MainPage.css';

const MainPage = () => {
  return (
    <div className="main-content">
      {/* Row 1: Welcome text */}
      <div className="row welcome-row">
        <h1>Welcome to My Portfolio</h1>
      </div>

      {/* Row 2: About Me and Projects */}
      <div className="row about-projects-row">
        <div className="about-section">
          <h2>
            <Link to="/about">About Me</Link>
          </h2>
        </div>
        <div className="projects-section">
          <h2>
            <Link to="/projects">Projects</Link>
          </h2>
        </div>
      </div>

      {/* Row 3: Experience */}
      <div className="row experience-row">
        <h2>
          <Link to="/experience">Experience</Link>
        </h2>
      </div>
    </div>
  );
};

export default MainPage;
