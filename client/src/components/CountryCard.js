import React from 'react';
import './CountryCard.css';
import { NavLink } from 'react-router-dom';

const CountryCard = (props) => {
  return (
    <div className='country-card'>
        <img src={props.imgsrc} alt='country-preview'/>
        <h2 className='country-title'>{props.title}</h2>
        <div className='country-details'>
            <p>{props.text}</p>
            <div className='country-details-btns'>
                <NavLink to={props.view} className="btn">View</NavLink>
                <NavLink to='/home' className="btn">Source</NavLink>
            </div>
        </div>
    </div>
  )
}

export default CountryCard