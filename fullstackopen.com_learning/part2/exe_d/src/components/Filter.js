/*
 * @Author: JAM-SEVEN
 * @Date: 2021-05-28 10:32:55
 * @LastEditTime: 2021-05-28 10:48:38
 * @Description: TO DO
 */
import React from 'react'

const Filter = (props) => {
    return (
        <div>filter shown with <input value={props.filterPerson} onChange={props.handleFilter}/></div>
    )
}

export default Filter