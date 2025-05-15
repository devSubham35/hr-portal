
import { Cake, Calendar, Link, Mail, MapPinHouse, Phone } from 'lucide-react'
import React from 'react'
import BaseLine from '@/common/BaseLine'



const CustomField = ({ title, data, icon }) => {
    return (
        <div className='my-8'>
            <h1 className='flex items-center gap-2 text-[12px] text-gray-500 font-medium mb-3'>
                {icon}
                {title}
            </h1>
            <h1 className='font-medium text-[14px] text-black'>{data}</h1>
        </div>
    )
}

const MyInfoReadPage = () => {
    return (
        <div className='w-full h-full'>
            <div>
                <h1 className='font-semibold text-2xl'>Soumon Sinha</h1>
                <p className='text-gray-500 font-medium'>Project Mannager</p>
                <BaseLine className="w-full mt-4" />
            </div>

            <div>
                <CustomField
                    title="Email"
                    data="sumon.sinha@gmail.com"
                    icon={<Mail className='size-4' />}
                />
                <CustomField
                    title="Phone No."
                    data="+91 9284685714"
                    icon={<Phone className='size-4' />}
                />
                <CustomField
                    title="Address"
                    data="1725 Slough Avenue, Scranton, PA"
                    icon={<MapPinHouse className='size-4' />}
                />
                <BaseLine className="w-full" />
                </div>
            <div>
                <CustomField
                    title="Birthday"
                    data="31st December"
                    icon={<Cake className='size-4' />}
                />
                <CustomField
                    title="Start date"
                    data="November 02 2023 - 11 months 27 days"
                    icon={<Calendar className='size-4' />}
                />
                <BaseLine className="w-full" />
            </div>

            <div className='my-8'>
                <h1 className='font-semibold text-[15px] text-gray-500 mb-6'>Links</h1>
                <div className='flex flex-col gap-y-4'>
                    <h1 className='flex items-center gap-2.5 text-[14px] font-medium cursor-pointer'>
                        <Link className='size-4' />
                        www.facebook.com
                    </h1>
                    <h1 className='flex items-center gap-2.5 text-[14px] font-medium cursor-pointer'>
                        <Link className='size-4' />
                        www.skype.com
                    </h1>
                    <h1 className='flex items-center gap-2.5 text-[14px] font-medium cursor-pointer'>
                        <Link className='size-4' />
                        www.linkedin.com
                    </h1>
                </div>
            </div>


        </div>
    )
}

export default MyInfoReadPage