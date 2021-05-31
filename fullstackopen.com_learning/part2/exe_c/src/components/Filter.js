/*
 * @Author: JAM-SEVEN
 * @Date: 2021-05-28 10:32:55
 * @LastEditTime: 2021-05-31 16:14:25
 * @Description: TO DO
 */
import React from 'react'

const Filter = (props) => {
    return (
        <div>find countries <input value={props.filterCountries} onChange={props.handleFilter}/></div>
    )
}

export default Filter