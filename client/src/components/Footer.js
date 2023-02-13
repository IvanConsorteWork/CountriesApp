import React from 'react';
import './Footer.css';

import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';

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
                <div className='phone'>
                  <h4><FaPhone size={20} style={{color: '#fff', marginRight: '2rem'}} />
                  +542236877187</h4>                  
                </div>
                <div className='mail'>
                  <h4><FaMailBulk size={20} style={{color: '#fff', marginRight: '2rem'}} />
                  ivanconsortework@gmail.com</h4>                  
                </div>
            </div>
            <div className='right'>
              <h4>About me</h4>
              <p>Hello! I'm Ivan Consorte and this is my portfolio</p>
              <div className='social'>
                <FaGithub size={30} style={{color: '#fff', marginRight: '1rem'}} />
                <FaLinkedin size={30} style={{color: '#fff', marginRight: '1rem'}} />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer