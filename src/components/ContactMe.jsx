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
                        <svg onClick={handleCopy} width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.6665 16.6665H19.3332C17.8604 16.6665 16.6665 17.8604 16.6665 19.3332V32.6665C16.6665 34.1393 17.8604 35.3332 19.3332 35.3332H32.6665C34.1393 35.3332 35.3332 34.1393 35.3332 32.6665V19.3332C35.3332 17.8604 34.1393 16.6665 32.6665 16.6665Z" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.3332 27.3332C9.8665 27.3332 8.6665 26.1332 8.6665 24.6665V11.3332C8.6665 9.8665 9.8665 8.6665 11.3332 8.6665H24.6665C26.1332 8.6665 27.3332 9.8665 27.3332 11.3332" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                </div>
                <div className='flex items-center gap-3 lg:gap-5  lg:pt-4 lg:pb-12'>
                    <img className=' w-4 h-4 lg:w-8 lg:h-8' src="./phone.svg" alt="icon" />
                    <h1 className=' text-lg text-gray-900 dark:text-white lg:text-4xl lg:font-semibold '>+976 88766764</h1>
                    <div className="tooltip" data-tip={`${scopy ? 'copied' : 'copy'}`}>
                        <svg onClick={secondhandleCopy} width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.6665 16.6665H19.3332C17.8604 16.6665 16.6665 17.8604 16.6665 19.3332V32.6665C16.6665 34.1393 17.8604 35.3332 19.3332 35.3332H32.6665C34.1393 35.3332 35.3332 34.1393 35.3332 32.6665V19.3332C35.3332 17.8604 34.1393 16.6665 32.6665 16.6665Z" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.3332 27.3332C9.8665 27.3332 8.6665 26.1332 8.6665 24.6665V11.3332C8.6665 9.8665 9.8665 8.6665 11.3332 8.6665H24.6665C26.1332 8.6665 27.3332 9.8665 27.3332 11.3332" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
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
