import React, { useState } from 'react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog'
import InputField from '../shared/InputFeild';
import { BsCashCoin } from "react-icons/bs";
import PasswordField from '../shared/PasswordFeild';
import Link from 'next/link';
import { FiMail } from 'react-icons/fi';
import Image from 'next/image';

const LoginModal = ({ ...props }: any) => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission logic here
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger className='underline'>Login</AlertDialogTrigger>
            <AlertDialogContent className='flex items-center gap-5'>
                <div className='w-full ml-4'>
                   <AlertDialogHeader>
                    <AlertDialogTitle>LOGIN</AlertDialogTitle>
                    <AlertDialogDescription>
                        <div>
                            <form onSubmit={handleSubmit} className='bg-[#EDEDED] rounded-xl p-6 grid grid-flow-row gap-3'>
                                <InputField
                                    label="Email"
                                    name="email"
                                    placeholder="j.davis@gmail.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    icon={FiMail}
                                />
                                <div>
                                    <label className='text-black'>Password</label>
                                    <PasswordField
                                        placeholder="Password123"
                                        value={formData.password}
                                        onChange={handleChange}
                                        name="password"

                                    />
                                </div>

                            </form>
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className='flex items-center justify-center'>
                    <div className='w-full font-bold text-center text-sm'>
                        <h4>
                            {"Don't Have An Account? "}<AlertDialogCancel className='border-none bg-none hover:bg-none'><span className='text-orange underline'>Register</span></AlertDialogCancel>
                        </h4>
                    </div>
                </AlertDialogFooter> 
                </div>
                <div className='m-[-5px] mb-[-8px]'>
                    <Image src={"/loginModal.png"} alt='' className='  ' width={400} height={300}/>
                </div>
                
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default LoginModal