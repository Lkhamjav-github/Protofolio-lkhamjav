import React from 'react'
import { Button } from './Button'
export const WorkRow = (props) => {
    return (
        <div className={`lg:flex ${props.row}  rounded-xl mb:flex-col`}>
            <div className={`bg-gray-100 lg:px-12 py-12  rounded-${props.xl}-xl `}>
                <img className='lg:h-96 w-120 mb:w-72 mb:h-48' src="./firstskill.png" alt="" />
            </div>
            <div className='lg:flex flex-col px-12 pt-12 pb-24 gap-6' >
                <h1 className='text-gray-900 text-xl font-semibold'>Fiskil</h1>
                <p className='lg:font-normal text-base text-gray-600 w-120'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                <div className='lg:w-120 flex felx-col gap-2 flex-wrap mb:w-72'>
                    <Button text='React' />
                    <Button text='Next.js' />
                    <Button text='Typescript' />
                    <Button text='Nest.js' />
                    <Button text='PostgreSQL' />
                    <Button text='TailwindCss' />
                    <Button text='Figma' />
                    <Button text='Cypress' />
                    <Button text='Storybook' />
                    <Button text='Git' />
                </div>
                <img src="./dsum.svg" alt="" className='w-6 h-6' />
            </div>
        </div>
    )
}
