import React from 'react';
import './AboutContent.css';
import { Link } from 'react-router-dom';
import React1 from '../assets/React1.jpg';
import Node1 from '../assets/Node1.jpg';

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Hi, there! Welcome to my portfolio. I'm Ivan Consorte</h1>
            <p>An aspiring web developer with a deep enthusiasm and quick learning skills. Recently, I pivoted my career from teaching music on schools to website design due to my curiosity for developing technologies and a desire for something new and exciting.

            Currently, I focus on learn about developing responsive E-Commerce sites, applying all I learn on my time in the Henry's Bootcamp. I typically use React/Redux in the client and Express (Node.js), PosgresSQL and Sequelize in the database and server. </p>
            <Link to='/contact'>
                <button className='btn'>Contact</button>
            </Link>
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