import React, { useEffect, useState } from 'react'
import jsPDF from 'jspdf';
import Link from 'next/link';
export const Header = ({ onDownloadPdf }) => {
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
    const [burger, setBurger] = useState('menu')
    const toggleBurger = () => {
        if (burger === 'menu') {
            setBurger('xmark')
        }
        else {
            setBurger('menu')
        }
    };
    return (
        <div>
            <header className=" bg-white dark:bg-black flex justify-center items-center" >
                <div className='flex  lg:px-20 py-4 justify-between w-3/4'>
                    <h1 className="lg:text-3xl font-bold leading-9 tracking-wide dark:text-white relative ">
                        {"<SS />"}
                        <div className={`${burger === 'menu' ? 'hidden ' : 'flex'} absolute  justify-center bg-white dark:bg-black items-start`}>
                            <div className='flex items-start justify-center  dark:bg-black h-[820px] w-[300px] '>
                                <hr className='bg-[#e5e7eb] dark:bg-[#374151]' />
                                <nav className="flex flex-col  gap-6 text-gray-900 dark:text-white text-basefont-medium leading-6 w-3/4 ">
                                    <Link href='about' onClick={() => this.scrollToSection(about)}>About</Link>
                                    <a href='/'>Work</a>
                                    <a href='/'>Testimonials</a>
                                    <a href='/'>Contact</a>
                                    <div className='flex justify-start items-center'>
                                        <p>Switch Theme</p>
                                        <div>
                                            <img onClick={toggleTheme} src={`${theme === 'light' ? './sun.svg' : './moon.svg'}`} className='sun ' id='sun' alt='sun'></img>
                                            <img src="./moon.svg" alt="moon" className='moon hidden' />
                                        </div>
                                    </div>
                                    <button onClick={onDownloadPdf} className=" max-w-72 rounded-xl bg-gray-900  text-gray-50 text-base font-medium leading-6 py-1 px-4 ">
                                        Download CV
                                    </button>
                                </nav >
                            </div >
                        </div>
                    </h1>
                    <nav className="hidden lg:flex content-center items-center  gap-6 text-gray-900 dark:text-white text-base font-medium leading-6 ">
                        <Link href='/' onClick={() => this.scrollToSection(about)}>About</Link>
                        <a href='/'>Work</a>
                        <a href='/'>Testimonials</a>
                        <a href='/'>Contact</a>
                        <img onClick={toggleTheme} src={`${theme === 'light' ? './sun.svg' : './moon.svg'}`} alt='sun' className='sun' id='sun'></img>
                        <img src="./moon.svg" alt="moon" className='moon hidden' />
                        <button onClick={onDownloadPdf} className="lg:rounded-xl bg-gray-900  text-gray-50 dark:bg-[#F9FAFB] dark:text-[#111827] text-base font-medium leading-6 py-1 px-4 ">
                            Download CV
                        </button>
                    </nav>
                    <nav className='lg:hidden '>
                        <img onClick={toggleBurger} src={`${burger === 'menu' ? './menu.svg' : './xmark.png'}`} alt="sunmoon" />
                    </nav>

                </div>
            </header>
        </div>
    );
};
