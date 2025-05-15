import React from 'react'
import Sidebar from '../../components/Sidebar'

const BaseWrapper = ({ children }) => {
    return (
        <div className="w-full h-screen flex">
            <div className='w-[180px] xl:w-[250px] px-2 xl:px-5 duration-500 transition-all h-full flex-shrink-0'>
                <div className='w-full h-[90px] border-b-[2px] border-[#e9efff] flex justify-center items-center mb-6'>
                    <h1 className='font-bold text-xl text-emerald-600'>HR Portal</h1>
                </div>
                <Sidebar />
            </div>

            <div className='w-full h-full'>
                {children}
            </div>
        </div>
    )
}

export default BaseWrapper