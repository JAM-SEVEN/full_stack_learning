/*
 * @Author: JAM-SEVEN
 * @Date: 2021-05-16 11:15:24
 * @LastEditTime: 2021-05-26 17:34:58
 * @Description: TO DO
 */
import React from 'react'

const Header = ({name}) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
  
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part=><Part />)}
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

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </div>
  ) 
}



const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }


    return <Course course={course} />
 
}

export default App