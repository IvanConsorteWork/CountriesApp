import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className='searchbar'>
        <input  
            type = "text" 
            placeholder = "Search country by name" 
            // value = {name}
            // onChange = { e => handleInputChange(e)}>  
            >          
        </input>
        <button 
            className='btn' 
            type = "submit" 
            // onClick = {e => handleSubmit(e)}>
            >
                Search
        </button>
    </div>
  )
}

export default SearchBar