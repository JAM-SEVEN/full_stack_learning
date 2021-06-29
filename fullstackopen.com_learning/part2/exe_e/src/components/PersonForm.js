/*
 * @Author: JAM-SEVEN
 * @Date: 2021-05-28 10:33:34
 * @LastEditTime: 2021-06-29 17:26:54
 * @Description: TO DO
 */

import React from 'react'

const PersonForm = (props) => {
    
    return (
        <form onSubmit={props.addPerson}>
        <div>
          name: <input value={props.newName} onChange={props.handleName} /><br />
          number: <input value={props.newNumber} onChange={props.handleNumber} /><br />
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm