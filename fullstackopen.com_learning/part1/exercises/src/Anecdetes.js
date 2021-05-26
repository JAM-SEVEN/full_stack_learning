/*
 * @Author: JAM-SEVEN
 * @Date: 2021-05-26 10:26:42
 * @LastEditTime: 2021-05-26 14:12:27
 * @Description: TO DO
 */

import React, { useState } from 'react'

const Button = (props) => (
  <div>
    <button onClick={props.handleClick}>{props.text}</button>
  </div>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [voted, setVoted] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf, 0))
  
  const [mostvoted, setMostvoted] = useState(0)
  
  const nextAnecdote = () => {
    const random = Math.round(Math.random() * 5)
    setSelected(random)
    console.log(random)
  }
  
  const handleVote = () => {
    const voted_copy = [...voted]
    voted_copy[selected] = voted_copy[selected]+ 1
    setVoted(voted_copy)
    console.log(voted_copy)

    const max = Math.max(...voted_copy)
    const index = voted_copy.findIndex(element => element === max)
    setMostvoted(index)
  }
  


  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      
      <div>has {voted[selected]} votes</div>

      <Button handleClick={handleVote} text='vote'/>
      <Button handleClick={nextAnecdote} text='next anecdote' />

      <h1>Anecdote with most votes</h1>
      {anecdotes[mostvoted]}
      <div>has {voted[mostvoted]} votes</div>
    </div>
  )
}

export default App