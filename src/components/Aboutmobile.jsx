import React, { useEffect, useState } from 'react'
import { Header } from './Header'
export const Aboutmobile = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <div className='flex items-center justify-center dark:bg-black '>
            <hr className='bg-[#e5e7eb] dark:bg-[#374151]' />
            <nav className="flex flex-col  gap-6 text-gray-900 dark:text-white text-base font-medium leading-6 w-3/4 ">
                <a>About</a>
                <a>Work</a>
                <a>Testimonials</a>
                <a>Contact</a>
                <div className='flex justify-start items-center'>
                    <p>Swith Theme</p>
                    <div>
                        <img onClick={toggleTheme} src={`${theme === 'light' ? './sun.svg' : './moon.svg'}`} className='sun ' id='sun'></img>
                        <img src="./moon.svg" alt="" className='moon hidden' />
                    </div>
                </div>
                <button className=" max-w-72 rounded-xl bg-gray-900  text-gray-50 text-base font-medium leading-6 py-1 px-4 ">
                    Download CV
                </button>
            </nav >
        </div >
    )
}
