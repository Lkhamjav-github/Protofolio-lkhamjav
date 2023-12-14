import React from 'react'

export const Button = (prompt) => {
    return (
        <button className='  text-gray-600 dark:text-white bg-gray-200 dark:gray-dark-200 rounded-xl py-1 px-5'>{prompt.text}</button>
    )
}
