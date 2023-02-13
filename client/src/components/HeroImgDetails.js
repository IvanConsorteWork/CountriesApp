import './HeroImgDetails.css';
import React from 'react';
import introImg from "../assets/intro-bg4.jpg";

const HeroImgDetails = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className="intro-img" src={introImg} alt="background"/>
        </div>
        <div className="content">
            <h1>Country Details</h1>
            <p>Learn the specifics of your destination</p>
        </div>
    </div>
  )
}

export default HeroImgDetails