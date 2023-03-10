import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountryByName } from '../redux/actions';
import './SearchBar.css';

const SearchBar = ({ setCurrentPage }) => {

  const dispatch = useDispatch();
    const [name, setName] = useState("");

    function applyCaseName(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value)
    }

    function handleSubmit(e) {
            e.preventDefault();
            try {
                let casedName = applyCaseName(name)
                dispatch(getCountryByName(casedName));
                setName("");
                setCurrentPage(1);
            } catch (e) {
                console.log(e)
            }              
    }    

  return (
    <div className='searchbar'>
        <input  
            type = "text" 
            placeholder = "Search country by name" 
            value = {name}
            onChange = { e => handleInputChange(e)}>        
        </input>
        <button 
            className='btn' 
            type = "submit" 
            onClick = {e => handleSubmit(e)}>
                Search
        </button>
    </div>
  )
}

export default SearchBar