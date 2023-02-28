import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { getCountryDetails } from '../redux/actions';
import './DetailsContent.css';

const DetailsContent = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { id } = useParams();

    const myCountry = useSelector((state) => state.countryDetail);

    const [countryLoad, setCountryLoad] = useState(true); 
    
    const [activityLoad, setActivityLoad] = useState(false)

    useEffect(() => {
        const chargeCountry = async() => {   
            await dispatch(getCountryDetails(id)) 
            setCountryLoad(false)   
            };
        chargeCountry() 
    }, [dispatch, id]);

    function checkActivities () {
        try {
            if (myCountry.activities.length) {
                return (
                    <h1 className='activity-heading'>Activities</h1>
                )
            } else {
                return ""
            }
        } catch (e) {
            // alert('Country not Found');
            // navigate('/404')
            console.log(e)
        }
    }

    return (
            <div>
            {
                countryLoad ?
                <p className='details-loading'>Loading...</p> :                 
                <div className='details-container'> 
                    <div className='details-card'>                
                        <div className = 'country-flag'>
                            <img src = {myCountry.flag} alt="country flag"/>
                        </div>
                        <div className = 'country-details'>                   
                            <h1>{myCountry.name}</h1>
                            <h3>Capital: {myCountry.capital}</h3>
                            <h3>Subregion: {myCountry.subregion}</h3>                           
                            <h3>Area: {myCountry.area}</h3>
                            <h3>Population: {myCountry.population}</h3>
                        </div>    
                    </div>                     
                    {checkActivities()}
                    {myCountry.activities ? 
                    <div className = 'activity-container'>                            
                    {myCountry.activities?.map(e => <div key={e} className='activity-card'>
                        <ul>
                            <li>Name: {e.name}</li>
                            <li>Difficulty: {e.difficulty}</li>
                            <li>Duration: {e.duration}</li>
                            <li>Season: {e.season}</li>
                        </ul>
                    </div>
                    )}
                    </div> : 
                    ""
                    }                                   
                </div>                
            }                        
            <NavLink to = '/home' className = 'btn btn-home'>Back to Home</NavLink>                       
        </div>
    )
}

export default DetailsContent