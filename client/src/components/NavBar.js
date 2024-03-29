import './NavBar.css';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {

    const [click, setClick ] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className='nav-header' >
            <Link to='/home'>            
            <h1>Terralog</h1>
            </Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/activity'>Create Activity</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>                
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? 
                (<FaTimes size={20} style={{color: "#fff"}} />) :
                (<FaBars size={20} style={{color: "#fff"}} />)
                }                
            </div>
        </div>
    )
}

export default NavBar