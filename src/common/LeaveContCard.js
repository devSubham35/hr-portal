import React from 'react'

const colors = [
    {
      bg_text_color: "bg-emerald-700/10 text-emerald-600",
      value_color: "text-emerald-900",
    },
    {
      bg_text_color: "bg-yellow-700/10 text-yellow-600",
      value_color: "text-yellow-900",
    },
    {
      bg_text_color: "bg-blue-700/10 text-blue-600",
      value_color: "text-blue-900",
    },
  ];

const LeaveContCard = ({ title, subTitle, value, index, icon }) => {

    return (
        <div
            key={index}
            className={`w-full lg:h-[150px] rounded-xl ${colors[index].bg_text_color} p-4 flex justify-between`}
        >
            <div className="w-full h-full flex flex-col justify-between">
                <h1 className="font-semibold text-md lg:text-lg mb-3">{title}</h1>
                <div>
                    <h1 className={`text-3xl lg:text-5xl font-bold mb-1 ${colors[index].value_color}`}>
                        {value}
                    </h1>
                    <p className="text-[12px] lg:text-xs font-semibold">{subTitle}</p>
                </div>
            </div>
            {icon}
        </div>
    )
}

export default LeaveContCard