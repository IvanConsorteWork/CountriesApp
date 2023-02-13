import './HeroImgActivity.css';
import React from 'react';
import introImg from "../assets/intro-bg2.jpg";

const HeroImgActivity = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className="intro-img" src={introImg} alt="background"/>
        </div>
        <div className="content">
            <h1>Touristic Attractions</h1>
            <p>Let's add something to do on your travels</p>
        </div>
    </div>
  )
}

export default HeroImgActivity