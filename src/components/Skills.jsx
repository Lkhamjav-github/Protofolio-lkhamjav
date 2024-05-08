import React, { useEffect, useState } from 'react'
import { Skill } from './Skill'
import { Button } from './Button'
export const Skills = () => {
    return (
        <div className=' bg-white dark:bg-[#111827] lg:w-screen m-0 max-w-200 py-24 lg:px-20 flex justify-center items-start'>
            <div className='flex px-4 lg:px-8 flex-col gap-12 w-3/4'>
                <div className='flex items-center flex-col'>
                    <Button text="Ур чадвар" />
                    <h2 className='text-gray-600 dark:text-white text-xl font-normal pt-4'>Миний эзэмшсэн технологиуд:</h2>
                </div>
                <div className='flex flex-col gap-12'>
                    <div className='flex-wrap flex lg:flex lg:gap-[86.87px] lg:justify-between'>
                        <Skill title="Javascript" icon="../icon-javscript.svg" />
                        <Skill title="Typescript" icon="../icon-typescript.svg" />
                        <Skill title="React" icon="../icon-react.svg" />
                        <Skill title="Next.js" icon="../icon-nextjs.svg" />
                        <Skill title="Node.js" icon="../icon-nodejs.svg" />
                        <Skill title="Express.js" icon="../icon-express.svg" />
                        <Skill title="Jest" icon="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/jest-js-icon.png" />
                        <Skill title="Three.js" icon="https://global.discourse-cdn.com/standard17/uploads/threejs/original/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png" />
                        <Skill title="PostgreSQL" icon="../icon-postgresql.svg" />
                        <Skill title="MongoDB" icon="../icon-mongodb.svg" />
                        <Skill title="Eslint" icon="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/1200px-ESLint_logo.svg.png" />
                        <Skill title="Tailwindcss" icon="../icon-tailwindcss.svg" />
                        <Skill title="Figma" icon="../icon-figma.svg" />
                        <Skill title="Cypress" icon="../icon-cypress.svg" />
                        <Skill title="Git" icon="../icon-git.svg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

