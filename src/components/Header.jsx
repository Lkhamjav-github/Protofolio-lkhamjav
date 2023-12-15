import React from 'react'

export const Header = () => {
    function Sun() {
    }
    return (
        <div>
            <header className=" bg-white dark:bg-white flex justify-center" >
                <div className='flex items-center lg:px-20 py-4 justify-between w-3/4'>
                    <h1 className="lg:text-3xl font-bold leading-9 tracking-wide ">
                        {"<SS />"}
                    </h1>
                    <nav className="hidden lg:flex content-center items-center gap-6 text-gray-900 text-base font-medium leading-6 ">
                        <a>About</a>
                        <a>Work</a>
                        <a>Testimonials</a>
                        <a>Contact</a>
                        <img onClick={Sun()} src='./sun.svg' className='sun' id='sun'></img>
                        <img src="./moon.svg" alt="" className='moon hidden' />
                        <button className="lg:rounded-xl bg-gray-900  text-gray-50 text-base font-medium leading-6 py-1 px-4 ">
                            Download CV
                        </button>
                    </nav>
                    <nav className='lg:hidden'>
                        <img src="./menu.svg" alt="" />
                    </nav>
                </div>
            </header>
        </div>
    );
};
