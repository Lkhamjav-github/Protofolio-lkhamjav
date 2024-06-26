import React from 'react'
import { Row } from './Row'
import { Button } from './Button'
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
        <div className='bg-gray-50 dark:bg-[#111827] px-4 flex justify-center lg:w-screen m-0 max-w-200 py-24 lg:px-20  '>
            <div className='w-3/4 flex flex-col gap-12 items-center'>
                <div className='flex items-center flex-col'>
                    <Button text="Туршлага" />
                    <h2 className='text-gray-600 dark:text-white text-xl font-normal pt-4'>Миний сүүлийн нэг жилийн хугцааны туршлага :</h2>
                </div>
                <Row title="Blogweb (Frontend Developer)" p="Sep 2023 - Dec 2023" li="Api ийн өгөгдмөл датаг татан мэдээлэл татаж сурсан" li1="Тухайн датаг хэрэглэгч хүсэлтий" li2="Sed quis justo ac magna." li3="Lorem ipsum dolor sit amet, consectetur adipiscing elit." disc="disc" disc1="disc" disc2="disc" disc3="disc" />
                <Row title="Team Lead" p="Jul 2017 - Oct 2021" li="Sed quis justo ac magna." li1="Lorem ipsum dolor sit amet, consectetur adipiscing elit." li2="Sed quis justo ac magna." li3="Lorem ipsum dolor sit amet, consectetur adipiscing elit." disc="disc" disc1="disc" disc2="disc" disc3="disc" />
                <Row title="Full Stack Developer" p="Dec 2015 - May 2017" li="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit." disc="disc" disc1="none" disc2="none" disc3="none" />
                <div>

                </div>
            </div>
        </div>
    )
}
