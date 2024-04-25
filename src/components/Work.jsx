import React from 'react'
import { WorkRow } from './WorkRow'
import { Button } from './Button'
export const Work = () => {
    return (
        <div className='bg-white dark:bg-black lg:flex items-center flex-col py-24 px-20' >
            <div className='lg:w-3/4 flex items-center flex-col gap-12'>
                <div className='lg:flex items-center flex-col'>
                    <Button text="Work" />
                    <h2 className='text-gray-600 dark:text-[#D1D5DB] lg:text-xl font-normal pt-4'>Some of the noteworthy projects I have built:</h2>
                </div>
                <WorkRow row="flex-row" xl="l" img="./travel.png" projectName="Travel To Mongolia" url="https://travelcon-eta.vercel.app" />
                <WorkRow row="flex-row-reverse" xl="r" img="./blogweb.png" projectName="Travel To Mongolia" />
                <WorkRow row="flex-row" xl="l" img="./firstskill.png" projectName="Travel To Mongolia" />
            </div>
        </div>
    )
}
