import React, { useState } from 'react'
import { Button } from './Button'
// import { CopyToClipboard } from 'react-copy-to-clipboard'
export const ContactMe = () => {
    const [copy, setCopy] = useState(false)
    const [scopy, setScopy] = useState(false)
    const secondhandleCopy = () => {
        navigator.clipboard.writeText("88766764");
        setScopy(true)
        setTimeout(() => {
            setScopy(false)
        }, 2000);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText("the.lkhamjav@gmail.com");
        setCopy(true)
        setTimeout(() => {
            setCopy(false)
        }, 2000);
    }

    console.log("copy", copy);
    return (
        <div className='bg-white dark:bg-[#111827] flex lg:flex-col lg:py-24 lg:px-20 '>
            <div className='flex flex-col justfy-center items-center'>
                <div className='flex flex-col items-center'>
                    <Button text="Холбоо барих" />
                    <h2 className='lg:w-9/12 lg:text-xl text-center lg:font-normal text-gray-600 dark:text-white lg:flex lg:pt-4 lg:pb-12'>Хэрэв та хөгжүүлэгч хайж байгаа, асуух зүйл байгаа эсвэл зүгээр л холбогдохыг хүсч байвал надтай холбогдоорой. 😊😊😊</h2>
                </div>
                <div className='flex items-center gap-3 lg:gap-5 '>
                    <img className='w-4 h-4 lg:w-8 lg:h-8' src="./message.svg" alt="icon" />
                    <h1 className='text-lg text-gray-900 dark:text-white lg:text-4xl lg:font-semibold '>the.lkhamjav@gmail.com</h1>
                    <div className="tooltip" data-tip={`${copy ? 'copied' : 'copy'}`}>
                        <svg onClick={handleCopy} className='w-4 h-4 lg:w-8 lg:h-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z" /></svg>
                    </div>

                </div>
                <div className='flex items-center gap-3 lg:gap-5  lg:pt-4 lg:pb-12'>
                    <img className=' w-4 h-4 lg:w-8 lg:h-8' src="./phone.svg" alt="icon" />
                    <h1 className=' text-lg text-gray-900 dark:text-white lg:text-4xl lg:font-semibold '>+976 88766764</h1>
                    <div className="tooltip" data-tip={`${scopy ? 'copied' : 'copy'}`}>
                        <svg onClick={secondhandleCopy} className='w-4 h-4 lg:w-8 lg:h-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z" /></svg>
                    </div>

                </div>
                <p className='lg:pb-2 lg:font-normal text-gray-600 dark:text-white lg:text-base'>
                    Та намайг эдгээр платформ дээрээс олж болно!
                </p>
                <div className='flex gap-1'>
                    <img className='pr-2' src="./github.svg" alt="icon" />
                    <img src="./twitter.svg" alt="icon" />
                    <img src="./figma.svg" alt="icon" />
                </div>
                <div></div>
            </div>
        </div >
    )
}
