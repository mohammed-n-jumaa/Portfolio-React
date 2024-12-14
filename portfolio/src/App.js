import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Hero from './Components/Hero';
import TrustedBy from './Components/TrustedBy';
import Services from './Components/Services';
import Testimonials from './Components/Testimonials';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Highlight from './Components/Highlight';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import useDarkMode from './hooks/useDarkMode'; // استدعاء Hook الوضع الليلي
import './App.css';

function App() {
  const [isDarkMode, toggleDarkMode] = useDarkMode(); // استخدام الـ Hook

  return (
    <Router>
      <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}> {/* إضافة كلاس الوضع الليلي */}
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <TrustedBy />
                <Services />
                <Testimonials />
                <Skills />
                <Projects />
                <Highlight />
                <Footer />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
