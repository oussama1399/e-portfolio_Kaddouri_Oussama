import React from 'react';
import SplashScreen from '../components/home/SplashScreen';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';

function Home() {
  return (
    <>
      <SplashScreen />
      <main>
        <Hero />
        <AboutSection />
      </main>
    </>
  );
}

export default Home;
