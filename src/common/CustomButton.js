import React from 'react'

const CustomButton = ({ onClick, isLoading = false, isDisabled = false, children, icon, className }) => {
    return (
        <button
            onClick={onClick}
            disabled={isDisabled || isLoading}
            className={`sticky top-0 left-0 min-w-24 h-10 px-4 text-[14px] justify-center 
        flex items-center gap-2 rounded-full bg-emerald-600 text-white font-medium border-[2px] border-emerald-600
        ${(isDisabled || isLoading) ? "opacity-50" : "active:scale-[0.9] duration-500"} ${className}`}>
            {
                !isLoading
                    ? <>{icon} {children}</>
                    : <div className="size-[18px] border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            }
        </button>
    )
}

export default CustomButton