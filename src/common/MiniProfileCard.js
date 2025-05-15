import { ChevronDown } from 'lucide-react'
import React from 'react'

const MiniProfileCard = () => {
    return (
        <>
            <div className='flex items-center gap-2 text-[13px]'>
                <div className='flex gap-2'>
                    <div className='size-10 bg-gray-200 rounded-md cursor-pointer'></div>
                    <div className='font-medium text-[12px]'>
                        <h1 className='leading-3 my-1'>Profile</h1>
                        <h1 className='text-gray-400 leading-3 text-[13px] font-semibold'>Test User</h1>
                    </div>
                </div>
                <ChevronDown className='w-5 h-5 text-gray-400 cursor-pointer' />
            </div>
        </>
    )
}

export default MiniProfileCard