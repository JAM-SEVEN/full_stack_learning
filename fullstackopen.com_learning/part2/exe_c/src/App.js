/*
 * @Author: JAM-SEVEN
 * @Date: 2021-05-27 14:54:07
 * @LastEditTime: 2021-06-07 17:25:18
 * @Description: TO DO
 */

import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterCountries, setFilter] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        console.log(response.data)
        setCountries(response.data)
      })
    
  }
  useEffect(hook, [])
  
  const handleFilter = (event) => {
    setFilter(event.target.value)
    console.log(event.target.value)
    
  }

  const handleOnShow = (event) => {
    console.log(event.target.value)
    // setCountries()
  }

  return (
    <div>
      <h2>Data for countries</h2>
      <Filter filterCountries={filterCountries} handleFilter={handleFilter}/>
      <Countries countries={countries} filterCountry={filterCountries} show={handleOnShow}/>
    </div>
    
  )
}

export default App