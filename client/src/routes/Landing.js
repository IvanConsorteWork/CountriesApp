import React from 'react';
import LandingContent from '../components/LandingContent';

const Landing = () => {
  console.log(process.env.REACT_APP_API_BASE_URL)
  return (
    <div>
        <LandingContent />
    </div>
  )
}

export default Landing