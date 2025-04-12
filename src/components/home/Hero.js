import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useTypingEffect from '../../hooks/useTypingEffect';

function Hero() {
  const typingTextRef = useRef(null);
  const text = "Étudiant en Business Intelligence & Analytics";
  useTypingEffect(typingTextRef, text);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section text-center">
      <div className="bubbles-container">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
      <div className="container hero-content">
        <h1 className="hero-title" data-aos="fade-down">KADDOURI OUSSAMA</h1>
        <p className="typing-text hero-subtitle" ref={typingTextRef} data-aos="fade-up" data-aos-delay="200"></p>
        <p data-aos="fade-up" data-aos-delay="300">Passionné par la data et son impact sur les décisions stratégiques.</p>
        <div className="mt-4">
          <Link to="/contact" className="btn btn-light hero-btn me-3">Me Contacter</Link>
          <Link to="/projets" className="btn btn-outline-light hero-btn">Voir Mes Projets</Link>
          <button id="scroll-down" className="btn btn-outline-light hero-btn mt-3 mt-md-0 ms-md-2" onClick={handleScrollDown}>
            <i className="fas fa-chevron-down"></i> En savoir plus
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
