import React, { useState } from 'react';
import { Plus, Trash } from 'lucide-react';
import CustomInput from '@/common/CustomInput';

const LinkChain = () => {

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState('');

    const handleAddLink = () => {
        if (newLink.trim()) {
            setLinks([...links, newLink.trim()]);
            setNewLink('');
        }
    };

    const handleRemoveLink = (index) => {
        const updatedLinks = links.filter((_, i) => i !== index);
        setLinks(updatedLinks);
    };

    const handleInputChange = (index, value) => {
        const updatedLinks = [...links];
        updatedLinks[index] = value;
        setLinks(updatedLinks);
    };


    return (
        <div className="w-fit flex flex-col gap-y-2">
            {links.map((link, index) => (
                <div key={index} className="flex gap-1">
                    <CustomInput
                        name={`address-${index}`}
                        placeholder="Social Links"
                        className="w-[300px]"
                        value={link}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                    <div
                        className="size-12 border-2 group rounded-lg flex-shrink-0 flex justify-center items-center cursor-pointer"
                        onClick={() => handleRemoveLink(index)}
                    >
                        <Trash className="size-4 text-gray-400 group-hover:text-red-400" />
                    </div>
                </div>
            ))}

            {/* Add section */}
            <div className="flex gap-1">
                <CustomInput
                    name="newAddress"
                    placeholder="Add a new link"
                    className="w-[300px]"
                    value={newLink}
                    onChange={(e) => setNewLink(e.target.value)}
                />
                <div
                    className="size-12 border-2 group rounded-lg flex-shrink-0 flex justify-center items-center cursor-pointer hover:border-blue-500"
                    onClick={handleAddLink}
                >
                    <Plus className="size-5 text-gray-400 group-hover:text-blue-500" />
                </div>
            </div>
        </div>
    );
};

export default LinkChain;