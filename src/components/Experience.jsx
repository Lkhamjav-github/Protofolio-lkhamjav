import React from 'react'
import { Row } from './Row'

const histories = [
    {
        position: "Senior Developer",
        startDate: new Date(),
        endDate: new Date(),
        highlights: [

        ]
    }
]
export const Experience = () => {
    return (
        <div className='w-screen m-0 bg-gray-50 max-w-200 py-24 px-20 flex justify-center '>
            <div className='w-3/4 flex flex-col gap-12 items-center'>
                <div className='flex items-center flex-col'>
                    <button className='rounded-xl py-1 px-5 text-gray-600 bg-gray-200'>Experience</button>
                    <h2 className='text-gray-600 text-xl font-normal'>Here is a quick summary of my most recent experiences:</h2>
                </div>
                <Row title="Sr. Frontend Developer" p="Nov 2021 - Present" li="Lorem ipsum dolor sit amet, consectetur adipiscing elit." li1="Ut pretium arcu et massa semper, id fringilla leo semper." li2="Sed quis justo ac magna." li3="Lorem ipsum dolor sit amet, consectetur adipiscing elit." disc="disc" disc1="disc" disc2="disc" disc3="disc" />
                <Row title="Team Lead" p="Jul 2017 - Oct 2021" li="Sed quis justo ac magna." li1="Lorem ipsum dolor sit amet, consectetur adipiscing elit." li2="Sed quis justo ac magna." li3="Lorem ipsum dolor sit amet, consectetur adipiscing elit." disc="disc" disc1="disc" disc2="disc" disc3="disc" />
                <Row title="Full Stack Developer" p="Dec 2015 - May 2017" li="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit." disc="disc" disc1="none" disc2="none" disc3="none" />
                <div>

                </div>
            </div>
        </div>
    )
}
