import React from 'react'
// array[
//     {
//         title: "",
//         icon: "",
//     }
// ]
export const Skill = (props) => {
    return (
        <div className='flex flex-col justify-center items-center dark:text-[white]'>
            <img className='w-16 h-16' src={props.icon} alt="icon" />
            <h3 className='font-normal text-grey-600 text-lg'>{props.title}</h3>
        </div>
    )
}
