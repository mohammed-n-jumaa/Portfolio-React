// src/components/Hero.jsx

import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Hi, I'm Mohammed</h1>
                <h2>Front-End Developer</h2>
                <p>Crafting Beautiful and Responsive Web Experiences</p>
            </div>
            <div className="hero-image">
                <img src="./portfolio/me.jpg" alt="Your Photo" />
            </div>
        </section>
    );
};

export default Hero;
