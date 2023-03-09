import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllActivities, getAllCountries, filterByActivity, filterByContinent, sortByName, sortByPopulation } from '../redux/actions';

import CountryCard from './CountryCard';
import Pagination from './Pagination';
import SearchBar from './SearchBar';

import loadingGif from '../assets/Loading2.gif'
import './CountriesContainer.css';

const CountriesContainer = () => {

    const dispatch = useDispatch();

    // - - - - - - STATE - - - - - - 

    useEffect(() => {
        dispatch(getAllActivities());
        dispatch(getAllCountries())
    }, [dispatch])

    const allActivities = useSelector((state) => state.activities);
    const allCountries = useSelector((state) => state.allCountries);
    const countries = useSelector((state) => state.countries);

    // - - - - - - PAGINATION - - - - - -    

    const [currentPage, setCurrentPage] = useState(1);
    let currentCountries
    let totalPages = Math.ceil(countries.length / 10) + 1;

    if (currentPage === 1) {
        currentCountries = countries.slice(0, 9);
      } else {
        currentCountries = countries.slice(
          (currentPage - 1) * 10 -1, 
          (currentPage - 1) * 10 + 8
        );
      }

    if (countries.length < allCountries.length) {
        totalPages = Math.ceil(countries.length / 10);
      }

    const paginate = (number) => {
        setCurrentPage(currentPage + number);
    };

    // - - - - - FILTERS - - - - - 

    const [sortName, setSortName] = useState("");
    const [sortPopulation, setSortPopulation] = useState("");

    function handleClick(e) {
      e.preventDefault();
      dispatch(getAllCountries());
      setCurrentPage(1)
    }

    function handleFilterByActivity (e) {
        dispatch(filterByActivity(e.target.value));
        setCurrentPage(1)
    }

    function handleFilterByContinent (e) {
        dispatch(filterByContinent(e.target.value));
        setCurrentPage(1)
    }

    function handleSortByName(e) {
        e.preventDefault();
        dispatch(sortByName(e.target.value));
        setCurrentPage(1);
        setSortName(`Sort ${e.target.value}`);
    }

    function handleSortByPopulation(e) {
        e.preventDefault();
        dispatch(sortByPopulation(e.target.value));
        setCurrentPage(1);
        setSortPopulation(`Sort ${e.target.value}`);
    }

    return (
        <div className='home-container'>
            <h1 className='countries-heading'>Countries Database</h1>

            <SearchBar className='countries-search' setCurrentPage = {setCurrentPage} /> 

            <div className = 'countries-filters'>
                    <select onChange = {e => handleFilterByActivity(e)}>
                        <option key = "all" value = "all" disabled>Filter by Activity</option>
                        <option key = "all" value = "all">All Activities</option>
                        {allActivities?.map((a) => {
                            return (
                                <option key={a.name} value = {a.name}>{a.name}</option>
                            )
                        })}
                    </select>

                    <select onChange = {e => handleFilterByContinent(e)} >
                        <option value = "All" disabled>Filter by Continent</option>
                        <option value = "All">All Continents</option>
                        <option value = "Asia">Asia</option>
                        <option value = "South America">South America</option>
                        <option value = "North America">North America</option>
                        <option value = "Europe">Europe</option>
                        <option value = "Oceania">Oceania</option>
                        <option value = "Antarctica">Antarctica</option>
                        <option value = "Africa">Africa</option>
                    </select>

                    <select defaultValue = {"default"} onChange={(e) => handleSortByName(e)}>
                        <option value="default" disabled> Sort by Name </option>
                        <option value="asc">A-Z</option>
                        <option value="des">Z-A</option>
                    </select>

                    <select defaultValue={"default"} onChange={(e) => handleSortByPopulation(e)}>
                        <option value="default" disabled>Sort by Population</option>
                        <option value="des">Higher Population</option>
                        <option value="asc">Lower Population</option>
                    </select>

                </div>


            <div className={currentCountries.lenght > 0 ? 'countries-container' : 'loading-container'}>
                {currentCountries.lenght > 0 ? currentCountries.map((c) => {
                        return (
                            <CountryCard
                            id = {c.id}
                            key = {c.id}
                            name = {c.name}
                            flag = {c.flag}
                            continent = {c.continent}/>
                        )
                    }) :                    
                        <img src={loadingGif} alt='not-found' />                     
                }
            </div>

            <Pagination
                totalPages={totalPages}
                paginate={paginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage} />

            <div className = 'refreshButton'>
                <button className = 'btn' onClick = {e => {handleClick(e)}}>
                    Refresh Countries List
                </button>
            </div>
        </div>
      )
    }

export default CountriesContainer