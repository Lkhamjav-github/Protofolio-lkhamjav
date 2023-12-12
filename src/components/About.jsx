import React from 'react'
import { Button } from './Button';
export const About = () => {
    return (
        <div className=" m-0 flex justify-center  items-start bg-gray-50 w-screen  lg:max-w-200 py-8 px-4 lg:py-24 lg:px-20 ">
            <container className=" flex lg:px-8 flex-col items-center gap-12 w-3/4">
                <Button text="About me" />
                <div className=" flex-col lg:gap-12 flex lg:flex-row">
                    <img
                        className="lg:max-w-100 h-[400px] shadow-[-30px_30px_#e5e7eb]"
                        src="./chef1.jpeg"
                    ></img>
                    <div className="flex min-w-111 flex-col gap-12">
                        <h1
                            className="text-3xl font-semibold leading-9 text-gray-900"
                        >
                            Curious about me? Here you have it:
                        </h1>
                        <div className="text-base font-normal leading-6 text-gray-600 flex flex-col gap-[16px]  ">
                            <p>
                                I'm a passionate, self-proclaimed designer who specializes in
                                full stack development (React.js & Node.js). I am very
                                enthusiastic about bringing the technical and visual aspects
                                of digital products to life. User experience, pixel perfect
                                design, and writing clear, readable, highly performant code
                                matters to me.
                            </p>
                            <p>
                                I'm a passionate, self-proclaimed designer who specializes in
                                full stack development (React.js & Node.js). I am very
                                enthusiastic about bringing the technical and visual aspects
                                of digital products to life. User experience, pixel perfect
                                design, and writing clear, readable, highly performant code
                                matters to me.
                            </p>
                            <p>
                                I am very much a progressive thinker and enjoy working on
                                products end to end, from ideation all the way to development.
                            </p>
                            <p>
                                When I'm not in full-on developer mode, you can find me
                                hovering around on twitter or on indie hacker, witnessing the
                                journey of early startups or enjoying some free time. You can
                                follow me on Twitter where I share tech-related bites and
                                build in public, or you can follow me on GitHub.
                            </p>
                            <p>Finally, some quick bits about me.</p>
                            <ul className="text-base  flex gap-3 font-normal leading-6 text-gray-600">
                                <div>
                                    <li>B.E. in Computer Engineering</li>
                                    <li>Full time freelancer</li>
                                </div>
                                <div>
                                    <li>Avid learner</li>
                                    <li>Avid learner</li>
                                </div>
                            </ul>

                            <p>
                                One last thing, I'm available for freelance work, so feel free
                                to reach out and say hello! I promise I don't bite 😉
                            </p>
                        </div>
                    </div>
                </div>
            </container>
        </div>
    );
};


