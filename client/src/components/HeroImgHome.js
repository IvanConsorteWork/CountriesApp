import './HeroImgHome.css';
import React from 'react';
import introImg from "../assets/intro-bg1.jpg";

const HeroImgHome = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className="intro-img" src={introImg} alt="background"/>
        </div>
        <div className="content">
            <h1>Terrabook</h1>
            <p>A React-powered responsive site for all your countries's data inquiries</p>
        </div>
    </div>
  )
}

export default HeroImgHome