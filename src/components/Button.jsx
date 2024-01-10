import React from 'react'

export const Button = (prompt) => {
    return (
        <button className='  text-gray-600 dark:text-[#D1D5DB] bg-gray-200 dark:bg-[#374151] rounded-xl py-1 px-5'>{prompt.text}</button>
    )
}
