import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a 
            href="https://www.linkedin.com/in/oussama-kaddouri-8a760929a" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:kaddourioussama189@gmail.com" className="social-link">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p>© {new Date().getFullYear()} Kaddouri Oussama. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
