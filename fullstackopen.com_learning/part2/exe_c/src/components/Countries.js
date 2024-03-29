/*
 * @Author: JAM-SEVEN
 * @Date: 2021-05-28 10:33:52
 * @LastEditTime: 2021-06-10 15:08:40
 * @Description: TO DO
 */

import React from 'react'
import Country from './Country'


const Countries = ({ countries, filterCountry, show }) => {
    
    const countryToShow =
            (filterCountry.length > 0) ?
            countries.filter(country => country.name.toLowerCase().indexOf(filterCountry.toLowerCase()) !== -1) :
            countries
    
    const filterNumber = countryToShow.length
    
    if (filterCountry.length > 0){
        if (filterNumber === 1)
        {
            return (
                // <div>todo</div>
                <Country country={countryToShow[0]}/>
            )
        }
        if (filterNumber > 10)
        {
            return (
                <div>Too many matches, specify another filter</div>
            )
        }
        else
        {   console.log(countryToShow)  
            return (
                countryToShow.map(country => (
                    <div key={country.name}>
                        {country.name}
                        <button onClick={show} id={country.name}>show</button>
                    </div>))
            )
        }
        
    }
    else {
        return (
            countryToShow.map(country => <div key={country.name}>{country.name}</div>)
            )
    }
}

export default Countries
