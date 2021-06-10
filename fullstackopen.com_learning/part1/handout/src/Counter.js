/*
 * @Author: JAM-SEVEN
 * @Date: 2021-05-18 16:26:25
 * @LastEditTime: 2021-06-07 17:19:46
 * @Description: TO DO
 */

import React, { useState } from 'react';

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increaseByOne = () => setCounter(counter + 1);
    const decreaseByOne = ()=> setCounter(counter -1)
    const setToZero = () => setCounter(0);

    
    return (
        <div>
            <Display counter={counter}/>
            <Button handleClick={increaseByOne} text="plus" />
            <Button handleClick={decreaseByOne} text="minus" />
            <Button handleClick={setToZero} text = "zero"/>
        </div>
    )
}

export default Counter;