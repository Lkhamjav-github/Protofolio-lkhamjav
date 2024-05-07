import React, { useEffect, useState } from 'react'
import { Skill } from './Skill'
import { Button } from './Button'
export const Skills = () => {
    return (
        <div className=' bg-white dark:bg-black lg:w-screen m-0 max-w-200 py-24 lg:px-20 flex justify-center items-start'>
            <div className='flex px-4 lg:px-8 flex-col gap-12 w-3/4'>
                <div className='flex items-center flex-col'>
                    <Button text="Skills" />
                    <h2 className='text-gray-600 dark:text-white text-xl font-normal pt-4'>The skills, tools and technologies I am really good at:</h2>
                </div>
                <div className='flex flex-col gap-12'>
                    <div className='flex-wrap flex lg:flex lg:gap-[86.87px] lg:justify-between'>
                        <Skill title="Javascript" icon="../icon-javscript.svg" />
                        <Skill title="Typescript" icon="../icon-typescript.svg" />
                        <Skill title="React" icon="../icon-react.svg" />
                        <Skill title="Next.js" icon="../icon-nextjs.svg" />
                        <Skill title="Node.js" icon="../icon-nodejs.svg" />
                        <Skill title="Express.js" icon="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" />
                        {/* <Skill title="Nest.js" icon="../icon-nest.svg" /> */}
                        {/* <Skill title="Socket.io" icon="../icon-socket.svg" /> */}
                        {/* <Skill title="PostgreSQL" icon="../icon-postgresql.svg" /> */}
                        <Skill title="MongoDB" icon="../icon-mongodb.svg" />
                        {/* <Skill title="Sass/Scss" icon="../icon-sass.svg" /> */}
                        <Skill title="Tailwindcss" icon="../icon-tailwindcss.svg" />
                        <Skill title="Figma" icon="../icon-figma.svg" />
                        <Skill title="Cypress" icon="../icon-cypress.svg" />
                        <Skill title="Jest " icon="https://www.remoterocketship.com/images/blog/Jest-icon-for-blog.jpg" />
                        <Skill title="Git" icon="../icon-git.svg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

