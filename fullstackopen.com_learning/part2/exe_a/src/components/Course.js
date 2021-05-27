/*
 * @Author: JAM-SEVEN
 * @Date: 2021-05-27 10:30:04
 * @LastEditTime: 2021-05-27 10:30:34
 * @Description: TO DO
 */
import React from 'react'

const Header = ({ name }) => {
    return (
        <div>
            <h2>{name}</h2>
        </div>
    )

}

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part => <Part name={part.name} exercise={part.exercises} key={part.id} />)}
        </div>
    )
}

const Total = ({ exercises }) => {
    return (
        <div>
            <b>total of {exercises} exercises</b>
        </div>
    )
}

const Part = ({ name, exercise }) => {
    return (
        <div>{name} {exercise}</div>
    )

}

const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total exercises={course.parts.reduce((sum, part) => sum + part.exercises, 0)} />
        </div>
    )
}

export default Course