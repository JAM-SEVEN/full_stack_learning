/*
 * @Author: JAM-SEVEN
 * @Date: 2021-06-10 15:30:26
 * @LastEditTime: 2021-06-10 16:25:23
 * @Description: TO DO
 */
import React from 'react'

const Weather = ({ weather }) => {
    console.log(weather)
    return (
        <div>
            {/* <div><b>temperature: </b>{weather.current["temperature"]}</div>
            <img src={weather.current.weather_icons} alt="" width="80" height="45" />
            <div><b>{weather.current.weather_descriptions}:</b>{weather.current.wind_speed}</div> */}
        </div>
    )
    
}

export default Weather