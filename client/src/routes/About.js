import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeroImgAbout from '../components/HeroImgAbout';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroImgAbout />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About