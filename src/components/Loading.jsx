import React from 'react'

export const Loading = () => {
    return (
        <>
            <main className="bg-white dark:bg-black flex lg:py-24 lg:px-20 h-[100vh]  justify-center">
                <div className=" flex items-center justify-center  text-white text-4xl font-bold">
                    <div className='flex flex-col items-center justify-center gap-4'>
                        {/* <svg className='animate-spin w-16 h-16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fafafa" d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" /></svg> */}
                        <h1 className=' text-white text-4xl font-bold'> Loading ...</h1>
                    </div>
                </div>
            </main>
        </>
    )
}
