import React from 'react';
import './CountriesContainer.css';
import CountryCard from './CountryCard';
import WorkCardData from './WorkCardData';

const CountriesContainer = () => {
  return (
    <div>
        <h1 className='countries-heading'>Countries Database</h1>
        <div className='countries-container'>
            {WorkCardData.map((val, ind) => {
                return (
                <CountryCard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view} />
                )
            })}
        </div>
    </div>
  )
}

export default CountriesContainer