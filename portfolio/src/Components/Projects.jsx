import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <a href="https://example.com/youtube-imitation" target="_blank" rel="noopener noreferrer">
            <img src="./portfolio/yout.png" alt="Project 1" />
            <div className="project-info">
              <h3>Youtube imitation</h3>
            </div>
          </a>
        </div>
        <div className="project-card">
          <a href="https://example.com/booking-imitation" target="_blank" rel="noopener noreferrer">
            <img src="./portfolio/book.png" alt="Project 2" />
            <div className="project-info">
              <h3>booking.com imitation</h3>
            </div>
          </a>
        </div>
        <div className="project-card">
          <a href="https://example.com/arap-trade" target="_blank" rel="noopener noreferrer">
            <img src="./portfolio/ArabTrade.jpg" alt="Project 3" />
            <div className="project-info">
              <h3>Arap Trade</h3>
            </div>
          </a>
        </div>
        <div className="project-card">
          <a href="https://example.com/grid-project" target="_blank" rel="noopener noreferrer">
            <img src="./portfolio/gri.png" alt="Project 4" />
            <div className="project-info">
              <h3>Grid</h3>
            </div>
          </a>
        </div>
        <div className="project-card">
          <a href="https://example.com/search-project" target="_blank" rel="noopener noreferrer">
            <img src="./portfolio/ser.png" alt="Project 5" />
            <div className="project-info">
              <h3>Search</h3>
            </div>
          </a>
        </div>
        <div className="project-card">
          <a href="https://example.com/my-portfolio" target="_blank" rel="noopener noreferrer">
            <img src="./portfolio/por.png" alt="Project 6" />
            <div className="project-info">
              <h3>My Portfolio</h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
