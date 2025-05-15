'use client'
import BaseLine from '@/common/BaseLine'
import CustomButton from '@/common/CustomButton'
import ProfileImage from '@/common/ProfileImage'
import BaseLayout from '@/components/BaseLayout'
import MyInfoEditPage from '@/components/my-info/MyInfoEditPage'
import MyInfoReadPage from '@/components/my-info/MyInFoReadPage'
import { Pencil } from 'lucide-react'
import React, { useState } from 'react'

const MyInfoPage = () => {

    const [isEdit, setIsEdit] = useState(true);

    const handleOnEdit = () => {
        setIsEdit(true)
    }
    const handleOnCancel = () => {
        setIsEdit(false)
    }
    const handleOnSave = () => {
        setIsEdit(false)
    }

    return (
        <>
            <BaseLayout title="My Info">
                <div className='w-full h-full flex flex-col justify-between gap-6 lg:gap-8'>
                    <BaseLine />
                    <div className='relative w-full h-full flex justify-between hide-scroll overflow-y-scroll'>

                        <div className='w-full flex gap-x-8'>
                            <ProfileImage isEdit={isEdit} />
                            <div className='w-[70%] xl:min-w-[600px] min-h-[150%]'>
                                {
                                    isEdit
                                        ? <MyInfoEditPage handleOnSave={handleOnSave} handleOnCancel={handleOnCancel} />
                                        : <MyInfoReadPage />
                                }
                            </div>
                        </div>

                        <div className='sticky top-0 left-0 h-fit flex items-center gap-3 flex-shrink-0'>
                            {
                                !isEdit &&
                                <CustomButton
                                    onClick={handleOnEdit}
                                    icon={<Pencil className='size-4' />}
                                >
                                    Edit
                                </CustomButton>
                            }
                        </div>
                    </div>
                </div>
            </BaseLayout>

        </>
    )
}

export default MyInfoPage