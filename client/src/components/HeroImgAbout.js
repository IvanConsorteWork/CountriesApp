import './HeroImgAbout.css';
import React from 'react';
import introImg from "../assets/intro-bg3.jpg";

const HeroImgAbout = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className="intro-img" src={introImg} alt="background"/>
        </div>
        <div className="content">
            <h1>Who I Am</h1>
            <p>I'm a full stack web developer</p>
        </div>
    </div>
  )
}

export default HeroImgAbout