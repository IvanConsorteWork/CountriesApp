import React from 'react';
import './Footer.css';

import { FaGithub, FaHome, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color: '#fff', marginRight: '2rem'}} />
                    <div>
                      <p>Mar del Plata, Buenos Aires</p>
                      <p>Argentina</p>
                    </div>
                </div>
                <div className='mail'>
                  <h4><FaMailBulk size={20} style={{color: '#fff', marginRight: '2rem'}} />
                  ivanconsortework@gmail.com</h4>                  
                </div>
            </div>
            <div className='right'>
              <h4>About me</h4>
              <p>Hello! I'm Ivan Consorte and this is my individual project required for Henry's Bootcamp Certificate</p>
              <div className='social'>
                <NavLink to='https://github.com/IvanConsorteWork/CountriesApp'>
                  <FaGithub size={30} style={{color: '#fff', marginRight: '1rem'}} />
                </NavLink>
                <NavLink to='https://www.linkedin.com/in/ivan-consorte-b4a772249/'>
                  <FaLinkedin size={30} style={{color: '#fff', marginRight: '1rem'}} />
                </NavLink>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer