import './NavBar.css';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {

    const [click, setClick ] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener("scroll", changeColor);

    return (
        <div className={color ? 'nav-header nav-header-bg' : 'nav-header'}>
            <Link to='/home'>
                <h1>Terrabook</h1>
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