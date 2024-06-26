import React from 'react'
import { Button } from './Button'
export const WorkRow = (props) => {
    const handleClick = () => {
        window.open(props.url, '_blank');
        console.log("clicked")
    };

    return (
        <div className={`flex flex-col items-center  lg:${props.row}  shadow-lg `}>
            <div id='row' className={`bg-gray-100 dark:bg-[#374151]  w-80 px-12 py-12  ${props.top}  lg:w-[576px]`}>
                <img onClick={handleClick} className='w-72 h-48 lg:h-80 lg:w-120 rounded-xl z-10 relative cursor-pointer' src={props.img} alt="fistskill" />
            </div>
            <div id='row' className={`bg-white dark:bg-[#1F2937] w-80 h-[416px]  ${props.bottom}  lg:w-[576px]`}>
                <div className='lg:flex flex flex-col px-8 py-8 lg:px-12 lg:pt-12 pb-24 gap-6 ' >
                    <h1 className='text-gray-900 dark:text-white text-xl font-semibold'>{props.projectName}</h1>
                    <p className=' w-80 lg:font-normal text-base flex-wrap text-gray-600 dark:text-white lg:w-120'>{props.inner}</p>
                    <div className='w-72 lg:w-120 flex felx-col gap-2 flex-wrap '>
                        <Button text='React' />
                        <Button text='Next.js' />
                        <Button text='Typescript' />
                        <Button text='Nest.js' />
                        <Button text='TailwindCss' />
                        <Button text='Figma' />
                        <Button text='Cypress' />
                        <Button text='Git' />
                    </div>
                    <div className='flex gap-8'>
                        <img src="./dsum.svg" alt="" className='w-6 h-6' />
                        <a href={`${props.url}`} target='blank' className=' text-black dark:text-white z-10'>{props.url}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
