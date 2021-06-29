/*
 * @Author: JAM-SEVEN
 * @Date: 2021-05-27 14:54:07
 * @LastEditTime: 2021-06-29 17:42:31
 * @Description: TO DO
 */

import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import personServer from './services/persons'



const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterPerson, setFilter] = useState('')
  const [addedMessage, setAddedMessage] = useState(null)

  const hook = () => {
    personServer
      .getAll()
      .then(response => {
        console.log(response)
        setPersons(response)
      })
    
  }
  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()
    
    for (let index = 0; index < persons.length; index++) {
      if (persons[index].name.toLowerCase().indexOf(newName.toLowerCase()) !== -1)
      {
        if (window.confirm(`${ newName } is already added to phonebook, replace the old number with a new one?`))
        {
          const updatePerson = { ...persons[index] }
          updatePerson.number = newNumber
          // persons.filter(person => person.id !== persons[index].id)
          // persons.concat(updatePerson)
          console.log(updatePerson)
          personServer.update(persons[index].id, updatePerson).then(() => {
            personServer.getAll().then(response => {
              console.log(response)
              setPersons(response)
            })
            setAddedMessage(`Updated ${ newName }`)
            setTimeout(() => {
              setAddedMessage(null)
            }, 5000)
          })

        }
        else
        {
          setNewName('')
          setNewNumber('')
        }
        // alert(`${ newName } is already added to phonebook`)
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
          setAddedMessage(`Added ${ newName }`)
          setTimeout(() => {
            setAddedMessage(null)
          }, 5000)
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

  const handleDelete = (event) => {
    if (window.confirm(`Deleted ${ event.target.name } ?`))
    {
      personServer.deleted(event.target.id)
      setPersons(persons.filter(person =>  (person.id.toString() !== event.target.id )))
    }
    else
    {
      console.log(event.target.id)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={addedMessage}/>
      <Filter filterPerson={filterPerson} handleFilter={handleFilter}/>
      <h3>Add a new</h3>
      <PersonForm addPerson={addPerson}
        newName={newName}
        handleName={handleName}
        newNumber={newNumber}
        handleNumber={handleNumber}
        />
      <h3>Numbers</h3>
      <Persons persons={persons} filterPerson={filterPerson} handleDelete={handleDelete}/>
    </div>
    
  )
}

export default App