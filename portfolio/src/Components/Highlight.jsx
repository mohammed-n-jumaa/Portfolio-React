import React from 'react';

const Highlights = () => {
  return (
    <section id="highlight" className="highlight">
      <h2>Highlights</h2>
      <div className="highlight-item">
        <h3>Graduation Project</h3>
        <p>
          My graduation project at university received the highest mark in the
          semester, which was 91 out of 100.
        </p>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
      <div className="highlight-item">
        <h3>Trainer for Full-Stack Development</h3>
        <p>
          Approved as a trainer for Full-Stack Development from Orange Coding
          Academy among 4,000 participants.
        </p>
      </div>
      <div className="highlight-item">
        <h3>Coming Soon</h3>
        <p>Coming Soon</p>
      </div>
    </section>
  );
};

export default Highlights;
