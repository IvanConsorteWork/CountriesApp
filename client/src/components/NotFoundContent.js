import './NotFoundContent.css';

import React from 'react';

import introImg from "../assets/intro-bg5.jpg";
import { Link } from 'react-router-dom';

const NotFoundContent = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className="intro-img" src={introImg} alt="background"/>
        </div>
        <div className="content">
            <p>It seems you're lost, why don't you return home?</p>
            <h1>404</h1>
            <div>
                <Link to="/home" className='btn'>Travel Back Here</Link>
            </div>
        </div>
    </div>
  )
}

export default NotFoundContent