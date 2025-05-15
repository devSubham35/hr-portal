'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { House, User, Calendar, Clock } from 'lucide-react';

const Sidebar = () => {

    const router = useRouter();
    const [selected, setSelected] = useState('Home');

    const menuItems = [
        { url: '/', name: 'Home', icon: <House className='size-5' /> },
        { url: '/myinfo', name: 'My Info', icon: <User className='size-5' /> },
        { url: '#calendar', name: 'Calendar', icon: <Calendar className='size-5' /> },
        { url: '/timeentry', name: 'Time Entry', icon: <Clock className='size-5' /> }
    ];

    const handleNavigation = (item) => {
        setSelected(item.name);
        router.push(`${item?.url}`)
    };

    return (
        <div className='w-full flex flex-col gap-2'>
            {menuItems.map((item) => (
                <div
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl 
                    ${selected === item.name ? 'bg-emerald-100/40 text-emerald-700' : ''} 
                    text-[14px] font-semibold hover:bg-emerald-100/40 cursor-pointer`}
                >
                    {item.icon}
                    <h1 className='mt-[2px]'>{item.name}</h1>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
