import React, { useEffect, useState } from 'react'


export const Header = () => {
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
        <div>
            <header className=" bg-white dark:bg-black flex justify-center" >
                <div className='flex items-center lg:px-20 py-4 justify-between w-3/4'>
                    <h1 className="lg:text-3xl font-bold leading-9 tracking-wide dark:text-white  ">
                        {"<SS />"}
                    </h1>
                    <nav className="hidden lg:flex content-center items-center gap-6 text-gray-900 dark:text-white text-base font-medium leading-6 ">
                        <a>About</a>
                        <a>Work</a>
                        <a>Testimonials</a>
                        <a>Contact</a>
                        <img onClick={toggleTheme} src={`${theme === 'light' ? './sun.svg' : './moon.svg'}`} className='sun' id='sun'></img>
                        <img src="./moon.svg" alt="" className='moon hidden' />
                        <button className="lg:rounded-xl bg-gray-900  text-gray-50 dark:bg-[#F9FAFB] dark:text-[#111827] text-base font-medium leading-6 py-1 px-4 ">
                            Download CV
                        </button>
                    </nav>
                    <nav className='lg:hidden'>
                        <a href="/mobile"><img src="./menu.svg" alt="" /></a>
                    </nav>
                </div>
            </header>
        </div>
    );
};
