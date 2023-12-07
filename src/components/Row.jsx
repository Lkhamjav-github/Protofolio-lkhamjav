import React from 'react'

export const Row = (props) => {
    return (
        <div>
            <div className=''>
                <img src="./upwork.svg" alt="" />
            </div>
            <div>
                <h5>{props.title}</h5>
                <ul>
                    <li>{props.li}</li>
                </ul>
            </div>
            <div>
                <p>{props.p}</p>
            </div>
        </div>
    )
}
