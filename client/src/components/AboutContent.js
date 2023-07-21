import React from 'react';
import './AboutContent.css';
import { Link } from 'react-router-dom';
import React1 from '../assets/React1.jpg';
import Node1 from '../assets/Node1.jpg';

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Hi, I'm Ivan Consorte, nice to meet you!</h1>
            <p>As a Front-End Developer with a keen eye for developing and upgrading web features, I'm passionate about incorporating tech and design to create top-notch applications. </p>
            <p>My x-factor is emphathy, I always visualice myself as the final consumer of my product, as a way to develop the best user experience. You can be sure that my products are carefully taylored to your needs. </p>
            <div className='left-link'>
                <Link to='https://portfolio-ivan-consorte.vercel.app/'>
                    <button className='btn'>Let's get in touch!</button>
                </Link>
            </div>
        </div>

        <div className='right'>
            <div className='img-container'>
                <div className='img-stack-top'>
                    <img src={React1} alt='reactImg' className='img'/>
                </div>
                <div className='img-stack-bottom'>
                    <img src={Node1} alt='reactImg2' className='img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent