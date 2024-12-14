import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-router-dom';

const Header = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header>
      <div className="nav-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div id="logo" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/">
            <img src="./portfolio/logo.png" alt="Logo" style={{ marginRight: '10px' }} />
          </Link>

          <button
            onClick={toggleDarkMode}
            style={{
              background: 'none',
              border: `2px solid ${isDarkMode ? '#FFD700' : '#1e204b'}`, 
              borderRadius: '5px', 
              fontSize: '1.5rem',
              color: isDarkMode ? '#FFD700' : '#1e204b', 
              padding: '5px 10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease', 
            }}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <i className={isDarkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>
        </div>

        <ul className="nav-links" style={{ display: 'flex', listStyle: 'none', margin: 0 }}>
          <li style={{ margin: '0 10px' }}>
            <a href="#services">
              <i className="fas fa-cogs"></i> Services
            </a>
          </li>
          <li style={{ margin: '0 10px' }}>
            <a href="#testimonials">
              <i className="fas fa-comments"></i> Testimonials
            </a>
          </li>
          <li style={{ margin: '0 10px' }}>
            <a href="#skills">
              <i className="fas fa-question-circle"></i> Skills
            </a>
          </li>
          <li style={{ margin: '0 10px' }}>
            <a href="#projects">
              <i className="fas fa-briefcase"></i> Projects
            </a>
          </li>
          <li style={{ margin: '0 10px' }}>
            <a href="#highlight">
              <i className="fas fa-star"></i> Highlight
            </a>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/contact">
              <i className="fas fa-envelope"></i> Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
