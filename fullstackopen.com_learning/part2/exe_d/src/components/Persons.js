/*
 * @Author: JAM-SEVEN
 * @Date: 2021-05-28 10:33:52
 * @LastEditTime: 2021-05-28 10:43:13
 * @Description: TO DO
 */

import React from 'react'

const Persons = ({ persons, filterPerson }) => {
    const personToShow =
            (filterPerson.length > 0) ?
            persons.filter(person => person.name.toLowerCase().indexOf(filterPerson.toLowerCase()) !== -1) :
            persons
    
    
    return (
        personToShow.map(person => <div key={person.name}>{person.name} {person.number}</div>)
    )
}

export default Persons
