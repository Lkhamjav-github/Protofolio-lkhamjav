import React from 'react'
import { WorkRow } from './WorkRow'
import { Button } from './Button'
export const Work = () => {
    return (
        <div className='bg-white lg:flex items-center flex-col py-24 px-20' >
            <div className='lg:w-3/4 flex items-center flex-col gap-12'>
                <div className='lg:flex items-center flex-col'>
                    <Button text="Work" />
                    <h2 className='text-gray-600 lg:text-xl font-normal pt-4'>Some of the noteworthy projects I have built:</h2>
                </div>
                <WorkRow xl="l" />
                <WorkRow row="flex-row-reverse" xl="r" />
                <WorkRow xl="l" />
            </div>
        </div>
    )
}
