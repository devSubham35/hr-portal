import BaseLayout from '@/components/BaseLayout';
import LeaveContCard from '@/common/LeaveContCard';
import Notification from '@/components/Notification';
import { Glasses, Hospital, TreePalm } from 'lucide-react';

const homePageData = [
    {
        title: "Annual Leave",
        value: 15,
        subTitle: "Days Available",
        icon: <TreePalm className="size-10" />,
    },
    {
        title: "Sick Leave",
        value: 2,
        subTitle: "Days used",
        icon: <Hospital className="size-10" />,
    },
    {
        title: "Casual Leave",
        value: 0,
        subTitle: "Days used",
        icon: <Glasses className="size-10" />,
    },
];


const HomePage = () => {
    return (
        <>
            <BaseLayout title="Home">
                <div className="w-full h-full">
                    <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                        {homePageData.map((data, index) => (
                            <LeaveContCard
                                key={index}
                                index={index}
                                icon={data?.icon}
                                value={data?.value}
                                title={data?.title}
                                subTitle={data?.subTitle}
                            />
                        ))}
                    </div>

                    <div className='w-full my-6 lg:my-8 flex justify-center items-center'>
                        <div className='w-[95%] h-[2px] bg-blue-100 rounded-full'></div>
                    </div>

                    <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        <Notification />
                    </div>

                </div>
            </BaseLayout>
        </>
    )
}

export default HomePage