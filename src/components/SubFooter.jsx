// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../css/SubFooter.css';

const SubFooter = () => {
    return (
        <div>
            <footer className="footer">
                <Link to="/resume" className="resume-link">
                    CHECK OUT MY RESUME
                </Link>
            </footer>
        </div>
    );
};

export default SubFooter;
