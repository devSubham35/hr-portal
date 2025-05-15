import CustomButton from '@/common/CustomButton'
import React from 'react'
import { Lock } from 'lucide-react';


const EntryCard = () => {
    return (
        <div className='mt-28 w-[550px]  h-fit rounded-3xl border drop-shadow-xl bg-white p-6 space-y-4'>

            <div className='w-full flex justify-between gap-8'>

                <div className='w-1/2'>
                    <div className='mb-4'>
                        <h1 className='text-[18px] font-semibold text-gray-600 mb-1'>Your Shift timing</h1>
                        <div>
                            <p className='rounded-full font-medium w-fit py-1.5 px-4 bg-gray-200 text-gray-600 text-[12px] flex items-center gap-2'>
                                <Lock size={12} />
                                11:00 am - 8:30 pm
                            </p>
                        </div>
                    </div>

                    <div className='mb-2'>
                        <p className='text-[13px] font-medium text-gray-500'>Date</p>
                        <div className='w-[230px] h-11 border-2 rounded-lg px-4 
                                    flex items-center text-[14px] font-medium text-gray-700'>
                            Thrus, 8 oct 2024
                        </div>
                    </div>
                </div>


                <div className='flex flex-col gap-[14px]'>
                    <div>
                        <h1 className='text-[12px] font-semibold text-gray-600 mb-1'>Entry Time</h1>
                        <div className='flex gap-3 items-center'>
                            <div className='flex items-center'>
                                <div className='size-10 rounded-md border border-gray-400'></div>
                                <div className='mx-2'>:</div>
                                <div className='size-10 rounded-md border border-gray-400'></div>
                            </div>
                            <CustomButton className='h-10 w-20 rounded-md border font-semibold !text-[12px] bg-emerald-600 text-white'>
                                Login
                            </CustomButton>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-[12px] font-semibold text-gray-600 mb-1'>Exit Time</h1>
                        <div className='flex gap-3 items-center'>
                            <div className='flex items-center'>
                                <div className='size-10 rounded-md border border-gray-400'></div>
                                <div className='mx-2'>:</div>
                                <div className='size-10 rounded-md border border-gray-400'></div>
                            </div>
                            <CustomButton className='h-10 w-20 rounded-md border font-semibold !text-[12px] bg-rose-600 border-rose-600 text-white'>
                                Logout
                            </CustomButton>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center items-center'>
                <div className='w-[95%] h-[1px] bg-blue-100 rounded-full'></div>
            </div>

            <div className='w-full grid grid-cols-4 gap-2'>

                <div className='mb-2'>
                    <p className='text-[13px] font-medium text-gray-500 mb-[2px]'>Today</p>
                    <div className='w-full h-11 border-2 rounded-lg px-4 
                                    flex items-center text-[13px] font-medium text-gray-700'>
                        8hrs 35mins
                    </div>
                </div>
                <div className='mb-2'>
                    <p className='text-[13px] font-medium text-gray-500 mb-[2px]'>This Week</p>
                    <div className='w-full h-11 border-2 rounded-lg px-4 
                                    flex items-center text-[13px] font-medium text-gray-700'>
                        8hrs 35mins
                    </div>
                </div>
                <div className='mb-2'>
                    <p className='text-[13px] font-medium text-gray-500 mb-[2px]'>This Month</p>
                    <div className='w-full h-11 border-2 rounded-lg px-4 
                                    flex items-center text-[13px] font-medium text-gray-700'>
                        8hrs 35mins
                    </div>
                </div>
                <div className='mb-2'>
                    <p className='text-[13px] font-medium text-gray-500 mb-[2px]'>This Year</p>
                    <div className='w-full h-11 border-2 rounded-lg px-4 
                                    flex items-center text-[13px] font-medium text-gray-700'>
                        8hrs 35mins
                    </div>
                </div>

            </div>





            <div className='flex items-center gap-2 justify-end mt-10'>
                <CustomButton className="bg-transparent !text-red-600 border-red-400 border-[1px]">Cancel</CustomButton>
                <CustomButton>Save</CustomButton>
            </div>
        </div>
    )
}

export default EntryCard