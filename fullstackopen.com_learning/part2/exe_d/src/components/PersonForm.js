/*
 * @Author: JAM-SEVEN
 * @Date: 2021-05-28 10:33:34
 * @LastEditTime: 2021-05-28 10:52:43
 * @Description: TO DO
 */

import React from 'react'

const PersonForm = (props) => {
    
    return (
        <form onSubmit={props.addPerson}>
        <div>
          name: <input value={props.newName} onChange={props.handleName} />
        </div>
        <div>
          number: <input value={props.newNumber} onChange={props.handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm