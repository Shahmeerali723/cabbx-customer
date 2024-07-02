// components/BookingForm.js
import React, { useState } from 'react';

import { FiMapPin, FiClock, FiUsers, FiPackage, FiMail, FiPhone, FiDollarSign } from 'react-icons/fi';
import InputField from '../shared/InputFeild';
import { FaCalendarAlt } from "react-icons/fa";
import { BsAirplaneFill } from "react-icons/bs";
import { FaCar } from "react-icons/fa6";
import { MdLuggage } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { FaRoute } from "react-icons/fa6";
import { BsCreditCard2BackFill } from "react-icons/bs";
import { BsCashCoin } from "react-icons/bs";
import { TiTick } from "react-icons/ti";

const BookingForm = () => {
    const [formData, setFormData] = useState({
        pickUp: '',
        via: '',
        dropOff: '',
        date: '',
        time: '',
        flightNumber: '',
        vehicle: '',
        numberOfPersons: '',
        items: '',
        customerName: '',
        customerEmail: '',
        customerMobileNumber: '',
        message: '',
        paymentMethod: '',
        totalCharges: 200,
    });

    const [currentStep, setCurrentStep] = useState(0);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission logic here
    };

    const PaymentProgress = [
        {
            name: "Journey Details",
            icon: TiTick
        },
        {
            name: "Vehicle Details",
            icon: TiTick
        },
        {
            name: "Customer Details",
            icon: TiTick
        },
        {
            name: "Payment Details",
            icon: TiTick
        }
    ]

    return (
        <div className='flex flex-col gap-4 font-plus-jakarta mb-20'>
            <div className='mt-10'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-center bg-gradient-golden-secondary text-transparent bg-clip-text'>
                    UPDATE YOUR QUOTES HERE
                </h2>
            </div>
            <div className='w-full rounded-lg bg-[#EDEDED]'>
                <ul className='grid grid-cols-2 md:grid-cols-4 gap-4 p-2'>
                    {
                        PaymentProgress.map((item: any, index: any) => {
                            return (
                                <li key={index} className={`flex flex-col items-center ${index == currentStep ? "" : "opacity-30"}`}>
                                    <div className={`w-fit p-1 rounded-full text-center bg-secondary `}>
                                        <TiTick className='text-white' />
                                    </div>
                                    {item?.name || "Journey Details"}
                                </li>
                            )
                        })
                    }


                </ul>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                {currentStep === 0 && (
                    <div className="bg-[#EDEDED] shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">Journey Details</h3>
                            <hr className='mt-3' />
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                                <InputField
                                    label="Pick Up"
                                    name="pickUp"
                                    placeholder="Street 121, LA"
                                    value={formData.pickUp}
                                    onChange={handleChange}
                                    icon={FiMapPin}
                                />
                                <InputField
                                    label="Via"
                                    name="via"
                                    placeholder="Vez Canal Bridge"
                                    value={formData.via}
                                    onChange={handleChange}
                                    icon={FaRoute}
                                />
                                <InputField
                                    label="Drop Off"
                                    name="dropOff"
                                    placeholder="Escatger Mall, LA"
                                    value={formData.dropOff}
                                    onChange={handleChange}
                                    icon={FiMapPin}
                                />
                                <InputField
                                    label="Date"
                                    name="date"
                                    type="date"
                                    placeholder="12/02/2024"
                                    value={formData.date}
                                    onChange={handleChange}
                                    icon={FaCalendarAlt}
                                />
                                <InputField
                                    label="Time"
                                    name="time"
                                    type="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    icon={FiClock}
                                />
                                <InputField
                                    label="Flight Number"
                                    name="flightNumber"
                                    value={formData.flightNumber}
                                    onChange={handleChange}
                                    icon={BsAirplaneFill}
                                />
                            </div>
                            <div className="mt-6 flex justify-end">
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className="ml-3 inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-golden-secondary outline-none border-none  focus:outline-none  focus:ring-offset-2 "
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {currentStep === 1 && (
                    <div className="bg-[#EDEDED] shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">Vehicle Details</h3>
                            <hr className='mt-3' />
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-2">
                                <InputField
                                    label="Vehicle"
                                    name="vehicle"
                                    value={formData.vehicle}
                                    onChange={handleChange}
                                    icon={FaCar}
                                />
                                <InputField
                                    label="Number of Persons"
                                    name="numberOfPersons"
                                    value={formData.numberOfPersons}
                                    onChange={handleChange}
                                    icon={FiUsers}
                                />
                                <InputField
                                    label="Items"
                                    name="items"
                                    value={formData.items}
                                    onChange={handleChange}
                                    icon={MdLuggage}
                                />
                            </div>
                            <div className="mt-6 flex justify-between">
                                <button
                                    type="button"
                                    onClick={handleBack}
                                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                >
                                    Back
                                </button>
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-golden-secondary outline-none border-none  focus:outline-none focus:ring-offset-2 focus:ring-green-500"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {currentStep === 2 && (
                    <div className="bg-[#EDEDED] shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">Customer Details</h3>
                            <hr className='mt-3' />
                            <div className="mt-6 flex flex-col gap-2">
                                <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                                    <InputField
                                        label="Customer Name"
                                        name="customerName"
                                        value={formData.customerName}
                                        onChange={handleChange}
                                        icon={IoPerson}
                                    />
                                    <InputField
                                        label="Customer Email"
                                        name="customerEmail"
                                        value={formData.customerEmail}
                                        onChange={handleChange}
                                        icon={FiMail}
                                    />
                                    <InputField
                                        label="Customer Mobile Number"
                                        name="customerMobileNumber"
                                        value={formData.customerMobileNumber}
                                        onChange={handleChange}
                                        icon={FiPhone}
                                    />
                                </div>

                                <InputField
                                    label="Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    icon={RiMessage2Fill}
                                />
                            </div>
                            <div className="mt-6 flex justify-between">
                                <button
                                    type="button"
                                    onClick={handleBack}
                                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                >
                                    Back
                                </button>
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-golden-secondary outline-none border-none  focus:outline-none focus:ring-offset-2 "
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {currentStep === 3 && (
                    <div className="bg-[#EDEDED] shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">Payment Details</h3>
                            <hr className='mt-3' />
                            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">
                                        Choose Payment Method
                                    </label>
                                    <div className='flex items-center bg-white rounded-md p-1'>
                                        <div className='bg-secondary p-3 rounded-lg'>
                                            {formData.paymentMethod == "Card" ? <BsCreditCard2BackFill className='text-xl text-white' /> :
                                                <BsCashCoin className='text-xl text-white' />}
                                            {/* BsCashCoin */}

                                        </div>
                                        <select
                                            name="paymentMethod"
                                            id="paymentMethod"
                                            value={formData.paymentMethod}
                                            onChange={handleChange}
                                            className="mt-1 block sm:text-sm w-full h-full p-3 focus:outline-none border-gray-300 rounded-md"
                                        >
                                            <option value="">Seclect</option>
                                            <option value="Card">Card</option>
                                            <option value="Cash">Cash</option>
                                        </select>

                                    </div>

                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="totalCharges" className="block text-sm font-medium text-gray-700">
                                        Total Charges
                                    </label>
                                    <div className='flex items-center bg-white rounded-md p-1 '>
                                        <input
                                            type="number"
                                            name="totalCharges"
                                            id="totalCharges"
                                            value={formData.totalCharges}
                                            onChange={handleChange}
                                            className="mt-1 block w-full shadow-sm sm:text-sm p-3 border-gray-300 rounded-md"
                                            readOnly
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className="mt-6 flex justify-between">
                                <button
                                    type="button"
                                    onClick={handleBack}
                                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                >
                                    Back
                                </button>
                                <button
                                    type="submit"
                                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-golden-secondary hover:bg-secondary-dark focus:outline-none border-none  focus:ring-offset-2 "
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </form>
        </div>

    );
};

export default BookingForm;
