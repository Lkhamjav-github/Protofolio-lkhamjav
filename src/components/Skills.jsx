import React from 'react'
import { Skill } from './Skill'

export const Skills = () => {
    return (
        <div className='w-screen m-0 bg-white max-w-200 py-24 px-20 flex justify-center items-start'>
            <div className='flex px-8 flex-col gap-12 w-3/4'>
                <div className='flex items-center flex-col'>
                    <button className='rounded-xl py-1 px-5 text-gray-600 bg-gray-200'>Skills</button>
                    <h2 className='text-gray-600 text-xl font-normal'>The skills, tools and technologies I am really good at:</h2>
                </div>
                <div className='flex flex-col gap-12'>
                    <div className='flex justify-between '>
                        <Skill title="Javascript" icon="../icon-javscript.svg" />
                        <Skill title="Typescript" icon="../icon-typescript.svg" />
                        <Skill title="React" icon="../icon-react.svg" />
                        <Skill title="Next.js" icon="../icon-nextjs.svg" />
                        <Skill title="Node.js" icon="../icon-nodejs.svg" />
                        <Skill title="Express.js" icon="../icon-express.svg" />
                        <Skill title="Nest.js" icon="../icon-nest.svg" />
                        <Skill title="Socket.io" icon="../icon-socket.svg" />
                    </div>
                    <div className='flex justify-between '>
                        <Skill title="PostgreSQL" icon="../icon-postgresql.svg" />
                        <Skill title="MongoDB" icon="../icon-mongodb.svg" />
                        <Skill title="Sass/Scss" icon="../icon-sass.svg" />
                        <Skill title="Tailwindcss" icon="../icon-tailwindcss.svg" />
                        <Skill title="Figma" icon="../icon-figma.svg" />
                        <Skill title="Cypress" icon="../icon-cypress.svg" />
                        <Skill title="Storybook" icon="../icon-storybook.svg" />
                        <Skill title="Git" icon="../icon-git.svg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

