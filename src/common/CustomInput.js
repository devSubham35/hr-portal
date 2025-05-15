import React from 'react'

const CustomInput = (props) => {

    return (
        <div className='w-full'>
            <h1 className={`${(props?.icon || props?.label) ? "flex items-center gap-2 text-[13px] text-gray-500 font-medium mb-1.5" : ""}`}>
                {props.icon}
                {props.label}
            </h1>
            <input
                {...props}
                type="text"
                className={`w-full h-12 border-[2px] text-[14px] text-gray-800 
                font-medium rounded-lg outline-none px-4 ${props.className}`}
            />
            <p className="text-[12px] mt-[2px] text-red-500 font-medium">{props.error}</p>
        </div>
    )
}

export default CustomInput