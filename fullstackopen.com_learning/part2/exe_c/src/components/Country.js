/*
 * @Author: JAM-SEVEN
 * @Date: 2021-05-31 17:08:29
 * @LastEditTime: 2021-05-31 17:50:07
 * @Description: TO DO
 */

import React from 'react'
// import axios from 'axios'


const Country = ({ country }) => {
    console.log(country)
    return (
        <div>
            <h2><b>{country.name}</b></h2>
            <div>capital {country.capital}</div>
            <div>population {country.population}</div>
            <h4><b>languages</b></h4>

            <ul>
                {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
            </ul>
            <img src={country.flag} alt="" width="100" height="100"/>
            
        </div>
    )
}


export default Country
