import React from 'react'

export const Headermobile = () => {
    return (
        <div>
            <header className=" bg-white dark:bg-black flex justify-center" >
                <div className='flex items-center lg:px-20 py-4 justify-between w-3/4'>
                    <h1 className="lg:text-3xl dark:text-white font-bold leading-9 tracking-wide ">
                        {"<SS />"}
                    </h1>
                    <a href='/' className='lg:hidden'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6 6L18 18" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </header>
        </div>
    )
}
