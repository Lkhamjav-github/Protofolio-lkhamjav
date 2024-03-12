import React from 'react'
import { Button } from './Button'
// import { CopyToClipboard } from 'react-copy-to-clipboard'
export const ContactMe = () => {

    const secondhandleCopy = () => {
        navigator.clipboard.writeText("88766764");
        alert("Copied")
    }
    const handleCopy = () => {
        navigator.clipboard.writeText("the.lkhamjav@gmail.com");
        alert("Copied")
    }
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
                    <svg onClick={handleCopy} className='w-8 h-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z" /></svg>
                </div>
                <div className='flex items-center gap-4 lg:gap-5  lg:pt-4 lg:pb-12'>
                    <img src="./phone.svg" alt="icon" />
                    <h1 className=' text-lg text-gray-900 dark:text-white lg:text-4xl lg:font-semibold '>+976 88766764</h1>
                    <svg onClick={secondhandleCopy} className='w-8 h-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z" /></svg>
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
