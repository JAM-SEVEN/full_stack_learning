/*
 * @Author: JAM-SEVEN
 * @Date: 2021-05-16 11:15:24
 * @LastEditTime: 2021-05-24 17:56:44
 */
import React, { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

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
      <Button handleClick={handleLeft} text="left" />
      <Button handleClick={handleZero} text="zero" />
      <Button handleClick={handleRight} text="right" />
      {right}
      <History allClicks={allClicks}/>
    </div>
  )
}

export default App