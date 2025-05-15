import NotificationCard from '@/common/NotificationCard'
import { Bell } from 'lucide-react'

const Notification = () => {
    return (
        <div className='mb-6'>
            <div className='flex gap-2 font-semibold text-blue-600 mb-4 text-[17px]'>
                <Bell />
                <h1>Notifications</h1>
            </div>


            <div className='space-y-3'>
                <NotificationCard
                    title="🎉 Your 23rd December casual leave has been approved!"
                    subTitle="🌴 Enjoy your leave! 😊"
                    type="casual"
                    isApproved={true}
                />
                <NotificationCard
                    title="😔 Sorry, your 1st July casual leave has not been approved."
                    subTitle="Better luck next time! 💼"
                    type="casual"
                    isApproved={false}
                />
            </div>
        </div>
    )
}

export default Notification