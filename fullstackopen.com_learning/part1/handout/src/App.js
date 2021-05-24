/*
 * @Author: JAM-SEVEN
 * @Date: 2021-05-16 11:15:24
 * @LastEditTime: 2021-05-21 21:36:37
 */
import React, { useState } from 'react'


const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeft = () => {
    setAll(allClicks.concat("L"))
    setLeft(left + 1)
  }

  const handleRight = () => {
    setAll(allClicks.concat("R"))
    setRight(right + 1)
  }

  const handleZero = () => {
    setAll(allClicks.concat("0"))
    setLeft(0)
    setRight(0)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeft}>left</button>
      <button onClick={handleZero}>zero</button>
      <button onClick={handleRight}>right</button>
      {right}
      <p>{allClicks.join("->")}</p>
    </div>
  )
}

export default App