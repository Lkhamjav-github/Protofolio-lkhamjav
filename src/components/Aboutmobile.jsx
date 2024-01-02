import React from 'react'

export const Aboutmobile = () => {
    return (
        <div className='flex items-center justify-center'>
            <nav className="flex flex-col  gap-6 text-gray-900 text-base font-medium leading-6 w-[90%] ">
                <a>About</a>
                <a>Work</a>
                <a>Testimonials</a>
                <a>Contact</a>
                <div className='flex justify-start items-center'>
                    <p>Swith Theme</p>
                    <div>
                        <img src='./sun.svg' className='sun ' id='sun'></img>
                        <img src="./moon.svg" alt="" className='moon hidden' />
                    </div>
                </div>
                <button className=" max-w-72 rounded-xl bg-gray-900  text-gray-50 text-base font-medium leading-6 py-1 px-4 ">
                    Download CV
                </button>
            </nav>
        </div>
    )
}
