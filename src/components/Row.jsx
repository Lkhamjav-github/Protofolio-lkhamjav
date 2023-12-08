import React from 'react'
// const li = document.createElement("li")
// document.getElementsByClassName("ul")
export const Row = (props) => {
    return (
        <div className='flex gap-12 px-8 py-8 rounded-xl bg-white justify-between w-7/10'>
            <div className='w-54.5'>
                <img src="./upwork.svg" alt="" />
            </div>
            <div className='w-96'>
                <h5 className='text-gray-900 text-xl font-semibold'>{props.title}</h5>
                <ul className=''>
                    <li className={`text-gray-600 text-base list-${props.disc}`}>{props.li}</li>
                    <li className={`text-gray-600 text-base list-${props.disc1}`}>{props.li1}</li>
                    <li className={`text-gray-600 text-base list-${props.disc2}`}>{props.li2}</li>
                    <li className={`text-gray-600 text-base list-${props.disc3}`}>{props.li3}</li>
                    {/* {props.highlights.map((highlight) => <li>{highlight}</li>)} */}
                </ul>
            </div>
            <div>
                <p className='text-gray-700 font-noramal'>{props.p}</p>
            </div>
        </div>
    )
}
