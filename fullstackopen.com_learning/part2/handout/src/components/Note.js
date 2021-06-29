/*
 * @Author: JAM-SEVEN
 * @Date: 2021-05-26 16:42:12
 * @LastEditTime: 2021-06-29 15:49:06
 * @Description: TO DO
 */

import React from 'react';

const Note = ({ note, toggleImportant }) => {
    console.log(note)
    const label = note.important ? 'make not important' : 'make important'
    return (
        <li className='note'>
            {note.content}
            <button onClick={toggleImportant}>{label}</button>
        </li>
    )
}

export default Note
