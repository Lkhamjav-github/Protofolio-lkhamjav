import React from 'react'

export const Button = (prompt) => {
    return (
        <button className='  text-gray-600 bg-gray-200 rounded-xl py-1 px-5'>{prompt.text}</button>
    )
}
