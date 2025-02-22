import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Part 1: Social Media */}
        <div className="footer-part social-media">
          <div className="footer-item">
            <h3>MY SOCIAL MEDIA LINKS</h3>
          </div>
          <div className="footer-item social-links">
            <a href="https://github.com/divya-navale" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://www.instagram.com/d_ya24" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.linkedin.com/in/divyanavale" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
            <a href="https://leetcode.com/u/divya_n/" target="_blank" rel="noopener noreferrer">
              <SiLeetcode size={30} />
            </a>
          </div>
        </div>

        {/* Part 2: Email */}
        <div className="footer-part email-info">
          <div className="footer-item">
            <FaEnvelope className='icon-main' size={20} /> 
            <h3>Email</h3>
          </div>
          <div className="footer-item">
            <a href="mailto:divyanavale.dn@gmail.com" className="contact-link">
            divyanavale.dn@gmail.com
            </a>
          </div>
          <div className="footer-item">
            <a href="mailto:dnavale@purdue.edu" className="contact-link">
            dnavale@purdue.edu
            </a>
          </div>
        </div>

        {/* Part 3: Phone */}
        <div className="footer-part phone-info">
          <div className="footer-item">
          <FaPhone  className='icon-main' size={20} />
            <h3>Phone</h3>
          </div>
          <div className="footer-item">
            <a href="tel:+12605159800" className="contact-link">
            +1 (260) 515-9800
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
