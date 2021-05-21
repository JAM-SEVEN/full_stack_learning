/*
 * @Author: JAM-SEVEN
 * @Date: 2021-05-16 11:15:24
 * @LastEditTime: 2021-05-16 11:58:59
 * @Description: TO DO
 */
import React from 'react'

const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
  
}

const Content = () => {
  return (
    <div>
      <Part part={part1} exercise={exercises1} />
      <Part part={part2} exercise={exercises2} />
      <Part part={part3} exercise={exercises3} />
    </div>
    
  )
  
}

const Total = (props) => {
  return (
    <div>
      Number of exercises: {props.exercises}
    </div>
  )
}

const Part = (props) => {
  return (
    <div>{props.part} {props.exercise}</div>
  )
  
}



const App = () => {

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total exercises={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App