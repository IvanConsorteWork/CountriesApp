import React from 'react';
import './CountryCard.css';
import { NavLink } from 'react-router-dom';

const CountryCard = (props) => {
  return (
    <div className='country-card'>
        <NavLink to = {`/details/${props.id}`}>
            <div className='country-flag'>
                <img src={props.flag} alt='country-preview'/>
            </div>                    
            <div className='country-details'>
                <h2 className='country-title'>{props.name}</h2>
                <p>{props.continent}</p>
            </div>
        </NavLink>
    </div>
  )
}

export default CountryCard