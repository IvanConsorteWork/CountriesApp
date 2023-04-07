import React, { useEffect } from 'react';
import LandingContent from '../components/LandingContent';
import { useDispatch } from 'react-redux';
import { getAllActivities, getAllCountries } from '../redux/actions';

const Landing = () => {
  console.log(process.env.REACT_APP_API_BASE_URL)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllActivities());
    dispatch(getAllCountries())
  }, [])
  return (
    <div>
        <LandingContent />
    </div>
  )
}

export default Landing