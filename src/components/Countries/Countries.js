import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css"

const Countries = () => {
    // step:1 use state
    const [countries, setCountries] = useState([])
    // step:2 use effect
    useEffect( () =>{
        // step: 3 fetch
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        // step:4 set data
        .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>This Hello Mello Yellow is my Countries Section:{countries.length}</h1>
            {/* step:5 show data on UI */}
            <div className='countries-container'>{
                countries.map(country => <Country
                    key = {country.cca3}
                    country = {country}></Country>)
            }</div>
        </div>
    );
};

export default Countries;