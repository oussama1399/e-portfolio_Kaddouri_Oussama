import React, { useEffect, useState } from 'react';

function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsFading(true);
    }, 2000);

    const timer2 = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = 'auto';
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`splash-screen ${isFading ? 'fade-out' : ''}`}>
      <div className="splash-logo">
        <span>OK</span>
      </div>
      <h2 className="splash-title">Kaddouri Oussama</h2>
      <p className="splash-subtitle">Étudiant en Business Intelligence & Analytics</p>
    </div>
  );
}

export default SplashScreen;
