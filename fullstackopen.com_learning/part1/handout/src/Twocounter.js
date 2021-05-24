/*
 * @Author: JAM-SEVEN
 * @Date: 2021-05-19 10:43:48
 * @LastEditTime: 2021-05-21 09:57:19
 * @Description: TO DO
 */

import React, { useState } from 'react'

const Twocounter = () => {
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [allClicks, setAll] = useState([]);

    const handleLeftClick = () => {
        setLeft(left + 1);
        setAll(allClicks.concat("L"));
        console.log(allClicks)
    }

    const handleRightClick = () => {
        setRight(right + 1);
        setAll(allClicks.concat("R"));
        console.log(allClicks)
    }

    const handleToZero = () => {
        setLeft(0);
        setRight(0);
        setAll(allClicks.concat("ZREO"))
        console.log(allClicks)
    }

    // const [clicks, setClicks] = useState({
    //     left: 0, right: 0
    // })

    // const handleLeftClick = () => setClicks({...clicks, left: clicks.left + 1,})

    // const handleRightClick = () => setClicks({...clicks, right: clicks.right + 1})

    // const handleToZero = () => setClicks({left: 0, right: 0})

    return (
        <div>
            {left}
            <button onClick={handleLeftClick}>left</button>
            <button onClick={handleToZero}>zero</button>
            <button onClick={handleRightClick}>right</button>
            {right}
        </div>
    )
}

export default Twocounter;