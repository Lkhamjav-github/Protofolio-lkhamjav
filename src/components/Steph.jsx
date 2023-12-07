import React from 'react'

export const Steph = () => {
    return (
        <main className="py-24 px-20 bg-white flex justify-center">
            <div className="flex items-start gap-12 px-8 w-3/4 justify-between">
                <div className="flex max-w-142 flex-col justify-center items-start gap-12 self-stretch">
                    <div className="flex flex-col gap-8">
                        <h1 className="text-6xl font-bold leading-9 tracking-wide">
                            Hi, I’m Chef 👋
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
                            <div className="flex p-1 gap-1">
                                <img src='./icon.svg'></img>
                                <h5 className="text-gray-600 text-base font-medium leading-6">
                                    Ahmedabad, India
                                </h5>
                            </div>
                            <div className="flex p-1 gap-1">
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
                <img className="shadow-[30px_30px_#e5e7eb] w-72 h-80 " src="./chef.jpeg"></img>
            </div>
        </main>

    );

}


