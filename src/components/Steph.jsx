import React from 'react'

export const Steph = () => {
    return (
        <main className="bg-white dark:bg-black flex lg:py-24 lg:px-20  justify-center">
            <div className=" flex-col items-center flex w-3/4 lg:flex lg:flex-row-reverse lg:items-start gap-12 lg:px-8  justify-between  ">
                <img className=" w-60 h-[280px] lg:w-72 lg:h-80 shadow-[10px_10px_#e5e7eb] lg:shadow-[30px_30px_#e5e7eb]" src="./chef.jpeg"></img>
                <div className="lg:flex max-w-142 flex-col justify-center items-start gap-12 self-stretch">
                    <div className="flex flex-col gap-8">
                        <h1 className="text-4xl font-semibold lg:text-6xl lg:font-bold leading-9 tracking-wide ">
                            Hi, I’m Lkhamjav 👋
                        </h1>
                        <p className="text-gray-600 text-base font-medium leading-6 max-w-3xl">
                            I'm a full stack developer (React.js & Node.js) with a focus
                            on creating (and occasionally designing) exceptional digital
                            experiences that are fast, accessible, visually appealing, and
                            responsive. Even though I have been creating web applications
                            for over 7 years, I still love it as if it was something new.
                        </p>
                    </div>
                    <div className="flex flex-col max-w-142 justify-center items-start gap-12 self-stretch">
                        <div>
                            <div className="flex p-1 gap-1 pt-12">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <h5 className="text-gray-600 dark:text-gray-50 text-base font-medium leading-6">
                                    Ahmedabad, India
                                </h5>
                            </div>
                            <div className="flex p-1 gap-1 ">
                                <img src='./greendot.svg'></img>
                                <h5 className="text-gray-600 text-base font-medium leading-6">
                                    Available for new projects
                                </h5>
                            </div>
                        </div>
                        <div className="flex p-1 gap-1">
                            <img src='./github.svg'></img>
                            <img src='./twitter.svg'></img>
                            <img src='./figma.svg'></img>
                        </div>
                    </div>
                </div>

            </div>
        </main>

    );

}


