/*
 * @Author: JAM-SEVEN
 * @Date: 2021-05-25 10:14:10
 * @LastEditTime: 2021-05-25 15:34:06
 * @Description: TO DO
 */

import React, { useState } from 'react'

const Button = ({ handleClick, text}) => (
    <button onClick={handleClick}>{text}</button>
)

const Display = props => <div>{props.value}</div>

const Handlevalue = () => {
    const [value, setValue] = useState(0)

    const setToValue = (newValue) => () => {
        setValue(newValue)
    }

    return (
        <div>
            <Display value={value}/>
            <Button handleClick={setToValue(1000)} text='Thousand'/>
            <Button handleClick={setToValue(0)} text='Reset'/>
            <Button handleClick={setToValue(value + 1)} text='PlusOne' />
            
        </div>
    )
}

export default Handlevalue