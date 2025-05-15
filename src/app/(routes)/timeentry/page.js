'use client'
import React from 'react';
import BaseLayout from '@/components/BaseLayout';
import { ChevronDown } from 'lucide-react';

// Helper function to generate days with weekdays
const getDaysInMonth = (month, year) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysArray = [];

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
        daysArray.push({ day, weekday });
    }

    return daysArray;
};

const TrackPage = () => {

    const month = 9; // October (0-based index)
    const year = new Date().getFullYear();
    const days = getDaysInMonth(month, year);

    return (
        <>
            <div className='flex gap-2'>
                {days.map(({ day, weekday }) => (
                    <div key={day} className="size-[30px] bg-gray-900 rounded-md text-white">
                        <span>{day}</span>
                    </div>
                ))}
            </div>
        </>
    )
}

const Page = () => {




    return (
        <BaseLayout title="Time Entry">
            <div className='w-full h-full'>
                {/* <EntryCard /> */}

                <div className='h-[60px] rounded-t-lg bg-gray-200 px-8 flex justify-between items-center'>
                    <h1 className='text-xl font-semibold text-gray-700'>October</h1>
                    <div>
                        <ChevronDown className='text-gray-700' />
                    </div>
                </div>

                <div className='w-full border-2 border-gray-200 flex' style={{ height: "calc(100% - 60px)" }}>
                    {/* Menu */}
                    <div className='w-[250px] h-full bg-[#f3f3f3] flex-shrink-0'>
                    </div>

                    {/* left Table */}
                    <div className='w-full h-full bg-gray-300 overflow-hidden border-4 border-blue-700' style={{ width: "calc(100% - 250px)" }} >
                       <TrackPage />
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
};

export default Page;
