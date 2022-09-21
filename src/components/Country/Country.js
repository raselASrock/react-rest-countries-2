import React from 'react';
import './Country.css'
const Country = (props) => {
    console.log(props.country)
    const {area, region} = props.country

    return (
        <div className='country'>
            <h3>Country Name: {props.country.name.common}</h3>
            <p>Population: {props.country.population}</p>
            <p>Region: {region}</p>
            {/* <small>Total Area: {props.country.area}</small> */}
            <small>Total Area: {area}</small>

        </div>
    );
};

export default Country;