/*
 * @Author: JAM-SEVEN
 * @Date: 2021-05-27 14:54:07
 * @LastEditTime: 2021-06-16 15:16:15
 * @Description: TO DO
 */

import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personServer from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterPerson, setFilter] = useState('')

  const hook = () => {
    personServer
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response)
      })
    
  }
  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()
    
    for (let index = 0; index < persons.length; index++) {
      if (persons[index].name.indexOf(newName) !== -1)
      {
        alert(`${ newName } is already added to phonebook`)
        break
      }
      else
      {
        if (index === persons.length - 1)
        {
          const newPerson = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
          }
          personServer.create(newPerson).then(response => {
            console.log()
            setPersons(persons.concat(response))
          })
          setNewName('')
          setNewNumber('')
        }
        else
        {
          continue
        }
      }
    }

  }
  
  const handleName = (event) => {
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
    console.log(event.target.value)
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterPerson={filterPerson} handleFilter={handleFilter}/>
      <h3>Add a new</h3>
      <PersonForm addPerson={addPerson}
        newName={newName}
        handleName={handleName}
        newNumber={newNumber}
        handleNumber={handleNumber}
        />
      <h3>Numbers</h3>
      <Persons persons={persons} filterPerson={filterPerson}/>
    </div>
    
  )
}

export default App