/*
 * @Author: JAM-SEVEN
 * @Date: 2021-06-29 15:52:48
 * @LastEditTime: 2021-06-29 17:02:59
 * @Description: TO DO
 */

import React from 'react';

const Notification = ({ message }) => {
    if (message === null)
    {
        return null
    }
    return (
        <div className='message'>
            {message}
        </div>
    )
}

export default Notification
