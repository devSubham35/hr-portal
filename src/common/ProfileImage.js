import { Camera, Trash } from 'lucide-react';
import React, { useState } from 'react';

const ProfileImage = ({ isEdit = false }) => {
    const [image, setImage] = useState(null);
    const [imageFile, setImageFile] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            setImage(objectUrl); // Store the object URL
            setImageFile(file); // Store the file reference
        }
    };

    const handleRemovePhoto = () => {
        setImage(null);
        setImageFile(null);
    };

    return (
        <div className='sticky top-0 left-0 size-40 xl:size-52 bg-gray-200 rounded-full cursor-pointer flex-shrink-0'>
            <div className='relative w-full h-full rounded-full flex justify-center items-center group'>
                {image ? (
                    <>
                        <img
                            src={image}
                            alt="Profile"
                            className="w-full h-full rounded-full object-cover"
                        />
                        {isEdit && (
                            <button
                                onClick={handleRemovePhoto}
                                className="z-50 size-12 rounded-full border-4 border-white bg-red-200 
                                flex justify-center items-center absolute bottom-0 right-0 text-red-600"
                            >
                                <Trash size={16} />
                            </button>
                        )}
                    </>
                ) : (
                    <div className='w-full h-full bg-gray-300 rounded-full flex justify-center items-center'>
                        {isEdit && (
                            <div className='group-hover:visible invisible group-hover:size-20 size-0 duration-300
                                rounded-full bg-gray-400 text-white flex justify-center items-center 
                                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                <Camera />
                            </div>
                        )}
                    </div>
                )}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                />
            </div>
        </div>
    );
};

export default ProfileImage;
