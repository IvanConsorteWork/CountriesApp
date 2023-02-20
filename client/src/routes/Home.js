import React from 'react';
import HeroImgHome from '../components/HeroImgHome';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CountriesContainer from '../components/CountriesContainer';

const Home = () => {
  console.log(process.env.REACT_APP_API_BASE_URL)
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