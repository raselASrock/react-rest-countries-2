import React from 'react';
import './Country.css'
const Country = (props) => {
    const {area, region, name ,flags} = props.country
    console.log(props.country)

    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h3>Country Name: {name.common}</h3>
            <p>Population: {props.country.population}</p>
            <p>Region: {region}</p>
            {/* <small>Total Area: {props.country.area}</small> */}
            <small>Total Area: {area}</small>

        </div>
    );
};

export default Country;