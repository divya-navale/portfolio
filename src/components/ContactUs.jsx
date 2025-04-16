import React from 'react';
import '../css/ContactUs.css';
import { FaEnvelope, FaPhone, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const ContactUs = () => {
    return (
        <div className="contact-container">
            {/* Left: Contact Form */}
            <div className="contact-left">
                <form className="contact-form">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-group full-width">
                        <label>Message</label>
                        <textarea rows="6" placeholder="Write your message" />
                    </div>
                    <div className="button-group">
                        <button type="submit" className="btn-primary">Send Message</button>
                        <button type="reset" className="btn-outline">Clear</button>
                    </div>
                </form>
            </div>

            {/* Right: Contact Info */}
            <div className="contact-right">
                {/* Email */}
                <div className="contact-info">
                    <FaEnvelope className='icon-main' size={20} />
                    <div>
                        <h4>Email</h4>
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
                </div>

                {/* Phone */}
                <div className="contact-info">
                    <FaPhone className='icon-main' size={20} />
                    <div>
                        <h4>Phone</h4>
                        <div className="footer-item">
                            <a href="tel:+12605159800" className="contact-link">
                                +1 (260) 515-9800
                            </a>
                        </div>
                    </div>
                </div>

                {/* Social Media */}
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
            </div>
        </div>
    );
};

export default ContactUs;
