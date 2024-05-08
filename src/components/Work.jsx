import React from 'react'
import { WorkRow } from './WorkRow'
import { Button } from './Button'
export const Work = () => {
    return (
        <div className='bg-white dark:bg-black lg:flex items-center flex-col py-24 px-20' >
            <div className='lg:w-3/4 flex items-center flex-col gap-12'>
                <div className='lg:flex items-center flex-col'>
                    <Button text="Ажилууд" />
                    <h2 className='text-gray-600 dark:text-[#D1D5DB] lg:text-xl font-normal pt-4'>Миний бүтээлцсэн зарим онцлох төслүүд:</h2>
                </div>
                <WorkRow inner='Монгол орныг гадаад иргэдэд суртчилах зорилготой , аялал сонгодог , Маршрут сонголттой , ангилалтай аялагчдад зориулсан платформ' row="flex-row" xl="l" top='rounded-l-xl' bottom='rounded-r-xl' img="./travel.png" projectName="Travel To Mongolia" url="https://travelcon-eta.vercel.app" />
                <WorkRow inner='Зөв зохион байгуулалт, хэрэглэгчдэд эмх цэгцтэй харагдуулж өгсөнөөр  уншигчдад янз бүрийн сэдвээр холбогдох мэдээний нийтлэл, шинэчлэлтийг хялбархан үзэх боломжийг олгохыг зорьсон' row="flex-row-reverse" top='rounded-r-xl' bottom='rounded-l-xl' xl="r" img="./blogweb.png" projectName="BlogWeb" url="https://blogweb-eight.vercel.app/" />
                <WorkRow inner='Ямарч хэрэглэгч ашиглах боломжтой энгийн загвартай , Хувиараа бизнес эрхлэгч Өөрийн худалдаа веб хуудасгүй дэлгүүрүүд ашиглан өөрийн бараа бүтээгдхүүнээ зарах боломжтой . Худалдааны платформ' row="flex-row" xl="l" top='rounded-l-xl' bottom='rounded-r-xl' img="./buyme.png" projectName="E-commerce" url='https://buymeuserfe.vercel.app/signin ' />
            </div>
        </div>
    )
}
