/*
 * @Author: JAM-SEVEN
 * @Date: 2021-06-29 15:52:48
 * @LastEditTime: 2021-06-29 17:47:05
 * @Description: TO DO
 */

import React from 'react';

const Notification = ({ message }) => {
    if (message === null)
    {
        return null
    }
    return (
        <div className='error'>
            {message}
        </div>
    )
}

export default Notification
