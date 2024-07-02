"use client"
import LoginModal from '@/components/Modals/LoginModal'
import RegisterWidget from '@/components/widgets/Registration'
import React from 'react'

const page = () => {
    return (
        <div className='container font-plus-jakarta flex flex-col gap-5'>
            <div className='w-full flex flex-col-reverse md:flex-row  justify-between md:items-center mt-10'>
                <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold bg-gradient-golden-secondary text-transparent bg-clip-text'>
                    WHY REGISTER WITH CABBX?
                </h2>
                <div className='text-end'>
                    <span className='font-semibold '>
                        Already have an Account? <span className='underline text-orange font-semibold'><LoginModal/></span>
                        
                    </span>
                </div>
            </div>
            <div className='p-3 px-6 text-sm sm:text-md'>
                <ul className='list-disc text-[#787878]'>
                    <li>
                        Faster, easier way to book: Enter your key personal and billing information on your profile once, so you can book again without having to re-enter these details each time.
                    </li>
                    <li>
                        Keep track of all your bookings, in one place: Only as a registered cabbx user can you see full details of all your bookings, past and present, on web and app
                    </li>
                    <li>
                        Get news of exclusive offers: registered cabbx users can enjoy exclusive offers for wherever you are in the UK!
                    </li>
                    <li>
                        Manage invoices effortlessly by viewing all your VAT invoices in printable pdf format. A great feature for business users.
                    </li>
                </ul>
            </div>
            <div className='mb-10'>
            <RegisterWidget/>
            </div>

        </div>
    )
}

export default page