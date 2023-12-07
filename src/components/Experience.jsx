import React from 'react'
import { Row } from './Row'
export const Experience = () => {
    return (
        <div className='w-screen m-0 bg-gray-50 max-w-200 py-24 px-20 flex justify-center items-start'>
            <div className='w-3/4 flex flex-col gap-12'>
                <div className='flex items-center flex-col'>
                    <button className='rounded-xl py-1 px-5 text-gray-600 bg-gray-200'>Experience</button>
                    <h2 className='text-gray-600 text-xl font-normal'>Here is a quick summary of my most recent experiences:</h2>
                </div>
                <Row />
                <div>

                </div>
            </div>
        </div>
    )
}
