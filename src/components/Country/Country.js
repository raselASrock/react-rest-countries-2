import React from 'react';
import './Country.css'
const Country = (props) => {
    return (
        <div className='country'>
            <h3>Country Name: {props.name}</h3>
            <p>Population: {props.population}</p>
            <small>Total Area: {props.area}</small>
        </div>
    );
};

export default Country;