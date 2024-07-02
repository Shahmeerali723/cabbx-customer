import Image from 'next/image';
import { useState } from 'react';

const FilterComponent = () => {
    const [classFilter, setClassFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    const [ratingFilter, setRatingFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState('');

    const handleSelectChange = (event: any, setFilter: any) => {
        setFilter(event.target.value);
    };

    return (
        <div className="p-3 bg-gray-100 rounded-md font-plus-jakarta">
            <div className='flex justify-between items-center py-2'>
                <h3 className='font-bold'>
                    Filter By
                </h3>
                <Image src={"/filtersearch.svg"} alt='' width={100} height={100} className='w-8' />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 ">
                <div className="w-full">
                    <div className='flex bg-white rounded-md p-2'>
                        <Image className='w-8' src={'/smartcar1.svg'} alt='' width={100} height={100} />
                        <select
                            id="class"
                            value={classFilter}
                            onChange={(e) => handleSelectChange(e, setClassFilter)}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        >
                            <option value="">Select Class</option>
                            <option value="standard">Standard</option>
                            <option value="executive">Executive</option>
                            <option value="luxury">Luxury</option>
                            <option value="chauffeur">Chauffeur</option>
                        </select>
                    </div>
                </div>

                <div className="w-full">

                    <div className='flex bg-white rounded-md p-2'>
                        <Image className='w-8' src={'/smartcar1.svg'} alt='' width={100} height={100} />
                        <select
                            id="type"
                            value={typeFilter}
                            onChange={(e) => handleSelectChange(e, setTypeFilter)}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        >
                            <option value=""> Select Type</option>
                            <option value="saloon">Saloon</option>
                            <option value="estate">Estate</option>
                            <option value="mpv">MPV</option>
                            <option value="minibus">Minibus</option>
                        </select>
                    </div>

                </div>

                <div className="w-full">
                    <div className='flex bg-white rounded-md p-2'>
                        <Image className='w-8' src={'/vuesaxbulkranking.svg'} alt='' width={100} height={100} />
                        <select
                            id="rating"
                            value={ratingFilter}
                            onChange={(e) => handleSelectChange(e, setRatingFilter)}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base   border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        >
                            <option className='' value="">Select Rating</option>
                            <option className='text-orange' value="5">★★★★★</option>
                            <option className='text-orange' value="4">★★★★</option>
                            <option className='text-orange' value="3">★★★</option>
                            <option className='text-orange' value="2">★★</option>
                            <option className='text-orange' value="1">★</option>
                        </select>
                    </div>
                </div>

                <div className="w-full">
                    <div className='flex bg-white rounded-md p-2'>
                        <Image className='w-8' src={'/dollarsquare.svg'} alt='' width={100} height={100} />
                        <select
                            id="price"
                            value={priceFilter}
                            onChange={(e) => handleSelectChange(e, setPriceFilter)}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        >
                            <option value="">Select Price</option>
                            <option value="low-to-high">Low to High</option>
                            <option value="high-to-low">High to Low</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterComponent;
