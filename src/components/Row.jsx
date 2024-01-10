import React from 'react'
// const li = document.createElement("li")
// document.getElementsByClassName("ul")
export const Row = (props) => {
    return (
        <div className='lg:flex lg:gap-12 px-8 py-8 rounded-xl bg-white dark:bg-[#1F2937] lg:justify-between w-[343px]lg:w-7/10'>
            <div className='w-54.5'>
                <img src="./upwork.svg" alt="" />
            </div>
            <div className='lg:w-96 mb:w-72'>
                <h5 className='text-gray-900 dark:text-white text-xl font-semibold pb-4'>{props.title}</h5>
                <ul className='pl-3'>
                    <li className={`dark:text-[#D1D5DB] text-gray-600 text-base list-${props.disc}`}>{props.li}</li>
                    <li className={`dark:text-[#D1D5DB] text-gray-600 text-base list-${props.disc1}`}>{props.li1}</li>
                    <li className={`dark:text-[#D1D5DB] text-gray-600 text-base list-${props.disc2}`}>{props.li2}</li>
                    <li className={`dark:text-[#D1D5DB] text-gray-600 text-base list-${props.disc3}`}>{props.li3}</li>
                </ul>
            </div>
            <div>
                <p className='text-gray-700 dark:text-[#D1D5DB] font-noramal'>{props.p}</p>
            </div>
        </div>
    )
}
