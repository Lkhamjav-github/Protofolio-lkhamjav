import React from 'react'
import { Button } from './Button'
export const ContactMe = () => {
    return (
        <div className='bg-white dark:bg-black flex lg:flex-col lg:py-24 lg:px-20 '>
            <div className='flex flex-col justfy-center items-center'>
                <div className='flex flex-col items-center'>
                    <Button text="Get in touch" />
                    <h2 className='lg:w-9/12 lg:text-xl  lg:font-normal text-gray-600 dark:text-white lg:flex lg:pt-4 lg:pb-12'>What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</h2>
                </div>
                <div className='flex items-center gap-5 '>
                    <img src="./message.svg" alt="icon" />
                    <h1 className='text-lg text-gray-900 dark:text-white lg:text-4xl lg:font-semibold '>the.lkhamjav@gmail.com</h1>
                    <img src="./2conh.png" alt="icon" />
                </div>
                <div className='flex items-center gap-4 lg:gap-5  lg:pt-4 lg:pb-12'>
                    <img src="./phone.svg" alt="icon" />
                    <h1 className=' text-lg text-gray-900 dark:text-white lg:text-4xl lg:font-semibold '>+976 88766764</h1>
                    <img src="./2conh.png" alt="icon" />
                </div>
                <p className='lg:pb-2 lg:font-normal text-gray-600 dark:text-white lg:text-base'>
                    You may also find me on these platforms!
                </p>
                <div className='flex gap-1'>
                    <img className='pr-2' src="./github.svg" alt="icon" />
                    <img src="./twitter.svg" alt="icon" />
                    <img src="./figma.svg" alt="icon" />
                </div>
                <div></div>
            </div>
        </div>
    )
}
