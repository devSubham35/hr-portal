import React from 'react'
import MiniProfileCard from '@/common/MiniProfileCard'

const BaseLayout = ({ children, title }) => {
    return (
        <>
            <div className='w-full h-full'>
                <div className='w-full h-[90px] flex justify-between items-center px-6 font-semibold text-emerald-600 text-2xl'>
                    <h1>{title ?? Page}</h1>
                    <MiniProfileCard />
                </div>
                <div className='w-full overflow-y-scroll hide-scroll px-6' style={{ height: "calc(100vh - 90px)" }}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default BaseLayout