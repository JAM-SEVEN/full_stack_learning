/*
 * @Author: JAM-SEVEN
 * @Date: 2021-05-25 15:37:43
 * @LastEditTime: 2021-05-26 10:07:47
 * @Description: TO DO
 */

import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Statistic = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.date}{props.unit}</td>
  </tr>
  // {/* <div>{props.text} {props.date}</div> */}
)

const Statistics = ({ good, neutral, bad }) => {

  const all = good + neutral + bad
  const average = all / 3
  const positive = (good + neutral) / all * 100

  if (all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistic text='good' date={good} />
          <Statistic text='neutral' date={neutral} />
          <Statistic text='bad' date={bad} />
          <Statistic text='all' date={all} />
          <Statistic text='average' date={average} />
          <Statistic text='positive' date={positive} unit='%'/>
        </tbody>
      </table>
    </div>
  )
}

const Feedback = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default Feedback