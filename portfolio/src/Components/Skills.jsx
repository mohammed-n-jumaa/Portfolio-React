import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skill-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
            alt="HTML5"
          />
          <p>HTML5</p>
        </div>
        <div className="skill-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
            alt="CSS3"
          />
          <p>CSS3</p>
        </div>
        <div className="skill-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt="JavaScript"
          />
          <p>JavaScript</p>
        </div>
        {/* إضافة مهارات جديدة */}
        <div className="skill-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React"
          />
          <p>React</p>
        </div>
        <div className="skill-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
            alt="SQL"
          />
          <p>SQL</p>
        </div>
        {/* إضافة مهارات PHP و Laravel */}
        <div className="skill-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
            alt="PHP"
          />
          <p>PHP</p>
        </div>
        <div className="skill-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg"
            alt="Laravel"
          />
          <p>Laravel</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
