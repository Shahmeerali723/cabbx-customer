// components/InputField.js
import React, { useRef } from 'react';
import { FiMapPin } from 'react-icons/fi'; // Example icon, you can use any icon from react-icons

const InputField = ({ label, name, value, onChange, icon: Icon, placeholder, type }: any) => {

    const inputRef = useRef<any>(null);

    const handleIconClick = () => {

        
        if (inputRef?.current) {
            inputRef?.current?.showPicker(); // Show date picker if available
        }
    };


    return (

        <div className=''>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <div className="sm:col-span-3 flex items-center  bg-white p-1 rounded-lg">
                {Icon && (
                    <div className="bg-secondary p-3 rounded-lg" onClick={handleIconClick}>
                        <Icon className="text-white" />
                    </div>
                )}
                <div className="flex-1">

                    <input
                        ref={inputRef}
                        name={name}
                        id={name}
                        value={value}
                        onChange={onChange}
                        type={type || "text"}
                        placeholder={placeholder}
                        className="mt-1 block w-full h-full p-3 focus:border-0 active:border-0 focus:outline-none  sm:text-sm  rounded-md"
                    />
                </div>
            </div>
        </div>

    );
};

export default InputField;
