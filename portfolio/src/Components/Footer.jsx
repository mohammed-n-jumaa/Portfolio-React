// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer-contact">
                <div className="footer-item">
                    <i className="fas fa-phone"></i>
                    <span>0787665773</span>
                    <p>Sun-Fri 9am-6pm</p>
                </div>
                <div className="footer-item">
                    <i className="fas fa-envelope"></i>
                    <span>Mohammed.n.jumma@gmail.com</span>
                    <p>Online support</p>
                </div>
                <div className="footer-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Jordan</span>
                    <p>32°01'43.9"N 36°00'59.2"E</p>
                </div>
            </div>
            <div className="social-media">
                <p>Connect with us</p>
                <div className="social-icons">
                    <a href="https://github.com/mohammed-n-jumaa"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/mohammed-nedal-b8572b294/"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; Copyright 2024 | Created by Mohammed</p>
            </div>
        </footer>
    );
};

export default Footer;
