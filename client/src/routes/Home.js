import React from 'react';
import HeroImgHome from '../components/HeroImgHome';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CountriesContainer from '../components/CountriesContainer';



const Home = () => {
  return (
    <div>
      <NavBar/>
      <HeroImgHome />
      <CountriesContainer />
      <Footer />
    </div>
  )
}

export default Home