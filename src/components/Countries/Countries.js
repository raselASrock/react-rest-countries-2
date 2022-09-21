import React, { useEffect, useState } from 'react';
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
            <h1>This is my Countries Section:{countries.length}</h1>
            {/* step:5 show data on UI */}
            {
                countries.map(country => console.log(country))
            }
        </div>
    );
};

export default Countries;