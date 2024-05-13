import React from 'react'
import { WorkRow } from './WorkRow'
import { Button } from './Button'
export const Work = () => {

    return (
        <div id="work" className='bg-white dark:bg-black lg:flex items-center flex-col py-24 px-20 ' >
            <div className='lg:w-3/4 flex items-center flex-col gap-12'>
                <div className='lg:flex items-center flex-col'>
                    <Button text="Work" />
                    <h2 className='text-gray-600 dark:text-[#D1D5DB] lg:text-xl font-normal pt-4'>Some of the noteworthy projects I have built:</h2>
                </div>
                <WorkRow inner='A platform for travelers with classic travel, route options, and categories, which aims to promote Mongolia to foreigners.' row="flex-row" xl="l" top='rounded-l-xl' bottom='rounded-r-xl' img="./travel.png" projectName="Travel To Mongolia" url="https://travelcon-eta.vercel.app" />
                <WorkRow inner='With proper organization and a neat look to users, we aim to enable readers to easily access relevant news articles and updates on various topics.' row="flex-row-reverse" top='rounded-r-xl' bottom='rounded-l-xl' xl="r" img="./blogweb.png" projectName="BlogWeb" url="https://blogweb-eight.vercel.app/" />
                <WorkRow inner='It has a simple design that can be used by any user. Self-employed people can sell their products using stores that do not have their own website. Trading platform' row="flex-row" xl="l" top='rounded-l-xl' bottom='rounded-r-xl' img="./buyme1.png" projectName="E-commerce" url='https://buymeuserfe.vercel.app/signin ' />
            </div>
        </div>
    )
}
