/*
 * @Author: JAM-SEVEN
 * @Date: 2021-05-31 17:08:29
 * @LastEditTime: 2021-06-10 16:58:58
 * @Description: TO DO
 */

import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Weather from './Weather'

const Country = ({country}) => {
    const [weather, setWeather] = useState({})
    
    useEffect(() => {
        
        const api_key = process.env.REACT_APP_API_KEY
        const capital = country.capital
        console.log(capital)
        axios
            .get(`http://api.weatherstack.com/current?access_key=${ api_key }&query=${ capital }`)
            .then(response => {
                console.log('promise fulfilled')
                setWeather(response.data)
            })
    }, [country.capital])

    return (
        <div>
            <h2><b>{country.name}</b></h2>
            <div>capital {country.capital}</div>
            <div>population {country.population}</div>
            <h4><b>Spoken languages</b></h4>

            <ul>
                {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
            </ul>
            <img src={country.flag} alt="" width="160" height="90" />
            <h4><b>Weather in {country.capital}</b></h4>
            <Weather weather={weather}/>
            

            
        </div>
    )
}


export default Country
