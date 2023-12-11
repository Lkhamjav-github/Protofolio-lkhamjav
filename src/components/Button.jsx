import React from 'react'

export const Button = (prompt) => {
    return (
        <button className='lg:rounded-xl lg:py-1 lg:px-5 text-gray-600 bg-gray-200'>{prompt.text}</button>
    )
}
