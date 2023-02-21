import './LandingContent.css';

import React from 'react';

import introImg from "../assets/intro-bg.jpg";
import { Link } from 'react-router-dom';

const LandingContent = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className="intro-img" src={introImg} alt="background"/>
        </div>
        <div className="content">
            <p>Are you ready to discover</p>
            <h1>The World?</h1>
            <div>
                <Link to="/home" className='btn'>Enter Here</Link>
            </div>
        </div>
    </div>
  )
}

export default LandingContent