import { X, Check, Hospital, Glasses } from 'lucide-react'

const NotificationCard = ({ isApproved, type, title, subTitle }) => {

    return (
        <>
            <div className='flex items-center gap-3 border-blue-100 rounded-xl border-[2px] p-2 lg:p-4'>
                <div className={`relative  flex-shrink-0 size-12 bg-blue-700/10 rounded-full flex justify-center items-center 
                    ${type === "casual"? "text-blue-600" : "text-yellow-600"}`}>
                    {
                        type === "casual"
                            ? <Glasses className='size-5' />
                            : <Hospital className='size-5' />
                    }
                    <div className={`size-4 absolute top-0 right-0 rounded-full flex justify-center items-center 
                     text-white ${isApproved ? "bg-green-500" : "bg-red-500"}`}>
                        {
                            isApproved
                                ? <Check className='size-3' />
                                : <X className='size-3' />
                        }
                    </div>
                </div>
                <div>
                    <h1 className='text-[12px] xl:text-[14px]  text-black font-medium mb-[2px]'>{title}</h1>
                    <p className=' text-[11px] xl:text-[12px]  text-gray-500 font-medium'>{subTitle}</p>
                </div>
            </div>
        </>
    )
}

export default NotificationCard