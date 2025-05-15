'use client'
import CustomButton from "@/common/CustomButton"
import CustomInput from "@/common/CustomInput"
import { BriefcaseBusiness, Cake, Link, Link2, Mail, MapPinHouse, PencilOff, Phone, Save } from "lucide-react"
import { useState } from "react"
import SelectDate from "@/common/SelectDate"
import LinkChain from "./LinkChain"

const MyInfoEditPage = ({ handleOnCancel, handleOnSave }) => {

    const [startDate, setStartDate] = useState(null);
    const [birthDate, setBirthDate] = useState(null);

    const handleSelectBirthDate = (date) => {
        setBirthDate(date);
    };
    const handleSelectStartDate = (date) => {
        setStartDate(date);
    };

    return (
        <div className='relative w-full h-full space-y-10'>

            <div className="flex flex-col gap-y-4">
                <div className="grid lg:grid-cols-2 gap-5">
                    <CustomInput
                        name="firstName"
                        label="First Name"
                        placeholder="Enter first name"
                    />
                    <CustomInput
                        name="lastName"
                        label="Last Name"
                        placeholder="Enter last name"
                    />
                </div>
                <div className="grid lg:grid-cols-2 gap-6">
                    <CustomInput
                        name="role"
                        label="Role"
                        placeholder="Enter your Role"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-y-5">
                <div className="w-full grid lg:grid-cols-2 gap-6">
                    <CustomInput
                        name="email"
                        label="Email"
                        placeholder="Enter your email"
                        icon={<Mail className="size-5" />}
                    />
                    <CustomInput
                        name="phoneNo"
                        label="Phone Number"
                        placeholder="Enter your phone number"
                        icon={<Phone className="size-5" />}
                    />
                </div>
                <CustomInput
                    name="address"
                    label="Address"
                    placeholder="Enter your address"
                    icon={<MapPinHouse className="size-5" />}
                />
            </div>

            <div>
                <h1 className='flex items-end gap-2 text-[13px] text-gray-500 font-medium mb-1.5'>
                    <BriefcaseBusiness className="size-5" />
                    Start Date
                </h1>
                <SelectDate
                    date={startDate}
                    onDateSelect={handleSelectStartDate}
                    numberOfMonths={1} // Change to 2 if you want a range selection
                    yearsRange={10} // Adjust the range of years displayed
                    closeOnSelect={true} // Close the popover after selecting
                    className="w-1/3 h-12 text-[14px] text-gray-800 font-medium border-[2px] rounded-lg"
                />
            </div>

            <div>
                <h1 className='flex items-end gap-2 text-[13px] text-gray-500 font-medium mb-1.5'>
                    <Cake className="size-5" />
                    Birth Date
                </h1>
                <SelectDate
                    date={birthDate}
                    onDateSelect={handleSelectBirthDate}
                    numberOfMonths={1} // Change to 2 if you want a range selection
                    yearsRange={10} // Adjust the range of years displayed
                    closeOnSelect={true} // Close the popover after selecting
                    className="w-1/3 h-12 text-[14px] text-gray-800 font-medium border-[2px] rounded-lg"
                />
            </div>


            <div>
                <h1 className='flex items-end gap-2 text-[13px] text-gray-500 font-medium mb-1.5'>
                    <Link2 className="size-5" />
                    Links
                </h1>
                <LinkChain />
            </div>



            {/* Action Buttons */}
            <div className='flex items-center gap-3 mt-6'>
                <CustomButton
                    onClick={handleOnCancel}
                    icon={<PencilOff className='size-4' />}
                    className="border-[1px] !text-emerald-600 bg-white"
                >
                    Cancel
                </CustomButton>

                <CustomButton
                    onClick={handleOnSave}
                    icon={<Save className='size-4' />}
                >
                    Save
                </CustomButton>
            </div>
        </div>
    )
}

export default MyInfoEditPage
