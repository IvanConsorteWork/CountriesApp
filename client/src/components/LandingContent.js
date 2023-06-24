import './LandingContent.css';

import React from 'react';

import introImg from "../assets/intro-bg.jpg";
import { Link } from 'react-router-dom';

const LandingContent = () => {
  return (
    <div id='hero'>
        <div id='mask'>
            <img src={introImg} alt="background"/>
        </div>
        <div id="content">
            <p>Are you ready to discover the World with</p>
            <h1>Terralog?</h1>
            <div>
                <Link to="/home" className='btn'>Enter Here</Link>
            </div>
        </div>
    </div>
  )
}

export default LandingContent